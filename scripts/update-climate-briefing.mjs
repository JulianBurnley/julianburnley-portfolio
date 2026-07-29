import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createHash } from "node:crypto";

const outputPath = resolve("climate-action/data/articles.json");
const maxArticles = 24;
const climateTerms = /\b(climate|drought|wildfire|wildland fire|smoke|heat wave|temperature|ocean|sea level|sea ice|ice sheet|glacier|storm|hurricane|flood|water supply|atmosphere|carbon|emission|ecosystem|environment|earth science|antarctica|arctic)\b/i;
const offTopicTerms = /\b(Mars|Martian|Moon|lunar|Jupiter|Io|astronaut|space station|solar eclipse|black hole|star formation|aurora at Mars|Perseverance|Psyche mission)\b/i;

const feeds = [
  {
    url: "https://science.nasa.gov/feed/earth-observatory/natural-events/",
    source: "NASA Earth Observatory",
    category: "Earth observation",
    includeAll: false
  },
  {
    url: "https://science.nasa.gov/feed/earth-observatory/image-of-the-day/",
    source: "NASA Earth Observatory",
    category: "Earth observation",
    includeAll: false
  },
  {
    url: "https://www.nasa.gov/news-release/feed/",
    source: "NASA",
    category: "Climate science",
    includeAll: false
  }
];

function decode(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/\s+/g, " ")
    .trim();
}

function tag(item, name) {
  const match = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
  return decode(match?.[1]);
}

function articleId(link) {
  return createHash("sha256").update(link).digest("hex").slice(0, 16);
}

async function readFeed(feed) {
  const response = await fetch(feed.url, {
    headers: { "user-agent": "ClimateCloseToHome/1.0 (+https://www.julianburnley.com/climate-action/)" }
  });
  if (!response.ok) throw new Error(`${feed.source} returned ${response.status}`);
  const xml = await response.text();
  return [...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)]
    .map((match) => {
      const item = match[1];
      const title = tag(item, "title");
      const link = tag(item, "link") || tag(item, "guid");
      const description = tag(item, "description")
        .replace(/\s+The post .+$/i, "")
        .slice(0, 240);
      const published = tag(item, "pubDate");
      return {
        id: articleId(link),
        title,
        link,
        description,
        published: Number.isNaN(Date.parse(published)) ? null : new Date(published).toISOString(),
        source: feed.source,
        category: feed.category
      };
    })
    .filter((article) => article.title && /^https:\/\//.test(article.link))
    .filter((article) => !offTopicTerms.test(`${article.title} ${article.description}`))
    .filter((article) => feed.includeAll || climateTerms.test(`${article.title} ${article.description}`));
}

const results = await Promise.allSettled(feeds.map(readFeed));
const articles = results
  .filter((result) => result.status === "fulfilled")
  .flatMap((result) => result.value);

const unique = [...new Map(articles.map((article) => [article.link, article])).values()]
  .sort((a, b) => Date.parse(b.published || 0) - Date.parse(a.published || 0))
  .slice(0, maxArticles);

if (!unique.length) {
  throw new Error(`No articles collected. ${results.filter((result) => result.status === "rejected").map((result) => result.reason).join("; ")}`);
}

let previous = null;
try {
  previous = JSON.parse(await readFile(outputPath, "utf8"));
} catch {
  previous = null;
}

const articlesUnchanged = JSON.stringify(previous?.articles) === JSON.stringify(unique);
const payload = {
  updatedAt: articlesUnchanged && previous?.updatedAt ? previous.updatedAt : new Date().toISOString(),
  editorialPolicy: "Automated metadata from approved official feeds. Full articles remain with their publishers.",
  articles: unique
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Saved ${unique.length} climate briefing articles.`);

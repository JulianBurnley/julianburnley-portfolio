import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const root = resolve("coursework");
const stylesheet = '<link rel="stylesheet" href="/css/coursework-nav.css">';
const marker = 'class="portfolio-course-nav"';

function htmlFiles(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory()
      ? htmlFiles(path)
      : path.toLowerCase().endsWith(".html")
        ? [path]
        : [];
  });
}

for (const file of htmlFiles(root)) {
  const relativePath = relative(root, file).split(sep).join("/");
  if (relativePath === "index.html") continue;

  const match = relativePath.match(/^lesson-(\d+)-(final-project|project|practice)\//);
  if (!match) continue;

  const [, lesson, section] = match;
  const projectDirectory = section === "final-project"
    ? `lesson-${lesson}-final-project`
    : existsSync(join(root, `lesson-${lesson}-project`))
      ? `lesson-${lesson}-project`
      : `lesson-${lesson}-final-project`;
  const projectPath = `/coursework/${projectDirectory}/`;
  const practicePath = `/coursework/lesson-${lesson}-practice/`;
  const links = [
    '<a href="/coursework/">Coursework library</a>',
    existsSync(join(root, projectDirectory))
      ? `<a href="${projectPath}"${section.includes("project") ? ' aria-current="page"' : ""}>Lesson ${lesson} project</a>`
      : "",
    existsSync(join(root, `lesson-${lesson}-practice`))
      ? `<a href="${practicePath}"${section === "practice" ? ' aria-current="page"' : ""}>Practice activities</a>`
      : "",
    '<a class="portfolio-return-link" href="/">Return to portfolio</a>',
  ].filter(Boolean);

  const navigation = `<nav class="portfolio-course-nav" aria-label="Portfolio and coursework navigation"><details><summary>Coursework menu</summary><div class="portfolio-course-nav-links">${links.join("")}</div></details></nav>`;
  let content = readFileSync(file, "utf8");

  if (!content.includes(stylesheet)) {
    content = content.replace(/<\/head>/i, `  ${stylesheet}\n</head>`);
  }

  if (content.includes(marker)) {
    content = content.replace(
      /<nav class="portfolio-course-nav"[^>]*>.*?<\/nav>/is,
      navigation,
    );
  } else {
    content = content.replace(/(<body\b[^>]*>)/i, `$1\n  ${navigation}`);
  }

  writeFileSync(file, content, "utf8");
}

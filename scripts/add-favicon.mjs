import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const root = process.cwd();
const favicon = '  <link rel="icon" href="/favicon.svg" type="image/svg+xml">\n';
const ignored = new Set([".git", "node_modules"]);

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(path));
    else if (extname(entry.name).toLowerCase() === ".html") files.push(path);
  }

  return files;
}

let updated = 0;
for (const file of await htmlFiles(root)) {
  const source = await readFile(file, "utf8");
  if (source.includes('rel="icon"')) continue;

  let revised = source.replace(/(<meta\s+charset=["'][^"']+["']\s*>)/i, `$1\n${favicon.trimEnd()}`);
  if (revised === source) {
    revised = source.replace(/<head>/i, `<head>\n${favicon.trimEnd()}`);
  }
  if (revised === source) continue;

  await writeFile(file, revised, "utf8");
  updated += 1;
}

console.log(`Favicon added to ${updated} HTML files.`);

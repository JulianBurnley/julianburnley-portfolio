import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";

const siteRoot = process.cwd();
const courseworkRoot = resolve("coursework");
const attributes = /\b(?:href|src)\s*=\s*["']([^"']+)["']/gi;
const ignored = /^(?:#|https?:|mailto:|tel:|data:|javascript:|blob:|\/\/)/i;
const broken = [];
const localDriveLinks = [];

function files(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? files(path) : [path];
  });
}

for (const file of files(courseworkRoot).filter((path) => path.endsWith(".html"))) {
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(attributes)) {
    const raw = match[1].trim();
    if (!raw || ignored.test(raw)) continue;
    if (/^(?:file:|[a-z]:[\\/])/i.test(raw)) {
      localDriveLinks.push({ file, raw });
      continue;
    }

    const pathOnly = decodeURIComponent(raw.split(/[?#]/)[0]);
    if (!pathOnly) continue;
    const resolved = pathOnly.startsWith("/")
      ? resolve(siteRoot, `.${pathOnly}`)
      : resolve(dirname(file), pathOnly);
    const candidates = [
      resolved,
      join(resolved, "index.html"),
      `${resolved}.html`,
    ];
    if (!candidates.some(existsSync)) broken.push({ file, raw });
  }
}

for (const item of broken) {
  console.log(`BROKEN\t${relative(siteRoot, item.file).split(sep).join("/")}\t${item.raw}`);
}
for (const item of localDriveLinks) {
  console.log(`LOCAL\t${relative(siteRoot, item.file).split(sep).join("/")}\t${item.raw}`);
}
console.log(`SUMMARY\tbroken=${broken.length}\tlocal=${localDriveLinks.length}`);

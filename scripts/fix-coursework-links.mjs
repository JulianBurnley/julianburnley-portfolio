import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve("coursework");

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
  let content = readFileSync(file, "utf8");

  content = content.replace(
    /(?:\.\.\/)+12988_lesson-(\d+)-practice-activities-JUL2216252\/index\.html/gi,
    (_, lesson) => `/coursework/lesson-${lesson}-practice/`,
  );
  content = content.replace(
    /(?:\.\.\/)+12988_lesson-(\d+)-project-JUL2216252\/index\.html/gi,
    (_, lesson) => `/coursework/lesson-${lesson}-project/`,
  );
  content = content.replace(
    /(?:\.\.\/)+12988_lesson-4-project-JUL2216252\/css\/style\.css/gi,
    "css/style.css",
  );
  content = content.replaceAll("https://github.com/jlnburn", "https://github.com/JulianBurnley");

  if (file.endsWith(join("Fix", "files (1)", "font-face.html"))) {
    content = content
      .replace('href="../css/main.css"', 'href="../../css/main.css"')
      .replace('href="../index.html"', 'href="../../index.html"')
      .replaceAll('href="../css-colors/', 'href="../../css-colors/')
      .replaceAll('href="../css-rules/', 'href="../../css-rules/')
      .replaceAll('href="../css-selectors/', 'href="../../css-selectors/')
      .replaceAll('href="../adv-styling/', 'href="../../adv-styling/')
      .replaceAll('href="../css-units/', 'href="../../css-units/')
      .replace('href="../css-variables/"', 'href="../../index.html"');
  }

  if (file.endsWith(join("lesson-4-practice", "grid-accessibility", "form-layout.html"))) {
    content = content.replace(
      'href="../grid-fallback/column-fallback.html"',
      'href="../grid-fallback/grid-fallback.html"',
    );
  }

  if (file.endsWith(join("lesson-7-practice", "transforms", "index.html"))) {
    content = content
      .replace('href="css/main.css"', 'href="../css/main.css"')
      .replace('href="transforms.html"', 'href="../transforms.html"')
      .replace('href="animations.html"', 'href="../animations.html"')
      .replace('href="transitions.html"', 'href="../transitions.html"');
  }

  if (file.endsWith(join("lesson-8-practice", "download-media.html"))) {
    content = content.replaceAll("audio-video/sintel-short.mp4", "audio-video/sintel-short.webm");
  }

  writeFileSync(file, content, "utf8");
}

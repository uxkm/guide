#!/usr/bin/env node
/** Storybook 빌드 HTML — lang="en" → lang="ko" */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../storybook-static');

for (const file of ['index.html', 'iframe.html']) {
  const filePath = path.join(outDir, file);
  if (!existsSync(filePath)) continue;
  const html = readFileSync(filePath, 'utf8').replace(/lang="en"/g, 'lang="ko"');
  writeFileSync(filePath, html);
}

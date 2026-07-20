#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const storiesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../packages/ui/src/components');

for (const file of readdirSync(storiesDir).filter((f) => f.endsWith('.stories.js'))) {
  const filePath = path.join(storiesDir, file);
  let content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let inArgTypes = false;
  let changed = false;

  const fixed = lines.map((line) => {
    if (/^\s+argTypes:\s*\{/.test(line)) {
      inArgTypes = true;
      return line;
    }
    if (inArgTypes && /^\s+\},/.test(line) && !line.includes('control:')) {
      inArgTypes = false;
      return line;
    }
    if (!inArgTypes || !/^\s+\w+:\s*\{/.test(line)) return line;

    const opens = (line.match(/\{/g) || []).length;
    const closes = (line.match(/\}/g) || []).length;
    if (opens > closes && line.trimEnd().endsWith(',')) {
      changed = true;
      const missing = opens - closes;
      return `${line.trimEnd().slice(0, -1)}${'}'.repeat(missing)},`;
    }
    return line;
  });

  if (changed) {
    writeFileSync(filePath, fixed.join('\n'));
    console.log(`fixed ${file}`);
  }
}

import fs from 'fs';
import path from 'path';

function extractRootBlock(scss) {
  const match = scss.match(/:root\s*\{[\s\S]*?\n\}/);
  if (!match) return null;
  return {
    block: match[0] + '\n',
    start: match.index,
    end: match.index + match[0].length,
  };
}

function moveRootToTopAfterUse(filePath) {
  let scss = fs.readFileSync(filePath, 'utf8');
  const extracted = extractRootBlock(scss);
  if (!extracted) {
    console.warn('No :root block:', filePath);
    return false;
  }

  let body = scss.slice(0, extracted.start) + scss.slice(extracted.end);
  body = body.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';

  const lines = body.split('\n');
  const useLines = [];
  let i = 0;
  while (i < lines.length && /^@use\s/.test(lines[i])) {
    useLines.push(lines[i]);
    i++;
  }

  const rest = lines.slice(i).join('\n').replace(/^\n+/, '');

  let result;
  if (useLines.length === 0) {
    result = extracted.block + '\n' + rest;
  } else {
    result = `${useLines.join('\n')}\n\n${extracted.block}\n${rest}`;
  }

  fs.writeFileSync(filePath, result.endsWith('\n') ? result : result + '\n');
  return true;
}

const componentsDir = path.resolve(import.meta.dirname, '../src/scss/components');
const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.scss') && f !== '_index.scss');

let count = 0;
for (const file of files) {
  if (moveRootToTopAfterUse(path.join(componentsDir, file))) {
    count++;
    console.log('Updated:', file);
  }
}

const utilitiesPath = path.resolve(import.meta.dirname, '../src/scss/_utilities.scss');
if (moveRootToTopAfterUse(utilitiesPath)) {
  console.log('Updated: _utilities.scss');
  count++;
}

console.log(`Done. ${count} files updated.`);

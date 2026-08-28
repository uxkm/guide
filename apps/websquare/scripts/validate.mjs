import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { components } from './catalog.mjs';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];

function validateBalancedTags(source, relativePath) {
  const withoutComments = source.replace(/<!--[\s\S]*?-->/g, '').replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, '');
  const stack = [];

  for (const match of withoutComments.matchAll(/<\/?([A-Za-z][\w:.-]*)(?:\s[^<>]*?)?\s*\/?>/g)) {
    const token = match[0];
    const name = match[1];
    if (token.startsWith('</')) {
      const open = stack.pop();
      if (open !== name) failures.push(`${relativePath}: <${open ?? '없음'}> 다음에 </${name}>가 닫혔습니다.`);
    } else if (!token.endsWith('/>')) {
      stack.push(name);
    }
  }

  if (stack.length) failures.push(`${relativePath}: 닫히지 않은 태그 ${stack.map((name) => `<${name}>`).join(', ')}`);
}

function validateIds(source, relativePath) {
  const ids = [...source.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (!ids.length) failures.push(`${relativePath}: id가 없습니다.`);
  if (duplicates.length) failures.push(`${relativePath}: 중복 id ${[...new Set(duplicates)].join(', ')}`);
}

for (const { category, name } of components) {
  const relativePath = `src/components/${category}/${name}/${name}.xml`;
  try {
    const source = await readFile(join(appRoot, relativePath), 'utf8');
    validateBalancedTags(source, relativePath);
    validateIds(source, relativePath);
    if (!/^\s*<!--[^]*?-->\s*<(?:w2|xf):/m.test(source)) failures.push(`${relativePath}: WebSquare fragment 루트가 없습니다.`);
    if (/\bxmlns(?::\w+)?\s*=/.test(source)) failures.push(`${relativePath}: namespace는 fragment가 아니라 화면 루트에 선언해야 합니다.`);
    if (!/\bclass\s*=/.test(source)) failures.push(`${relativePath}: UXKM 공통 class가 없습니다.`);
  } catch (error) {
    failures.push(`${relativePath}: ${error.code === 'ENOENT' ? '파일이 없습니다.' : error.message}`);
  }
}

const screenPath = 'src/screens/catalog.xml';
try {
  const screen = await readFile(join(appRoot, screenPath), 'utf8');
  validateBalancedTags(screen, screenPath);
  validateIds(screen, screenPath);
  for (const namespace of ['xmlns="http://www.w3.org/1999/xhtml"', 'xmlns:ev=', 'xmlns:w2=', 'xmlns:xf=']) {
    if (!screen.includes(namespace)) failures.push(`${screenPath}: ${namespace} 선언이 없습니다.`);
  }
} catch (error) {
  failures.push(`${screenPath}: ${error.code === 'ENOENT' ? '파일이 없습니다.' : error.message}`);
}

if (failures.length) {
  console.error(`WebSquare 검증 실패 (${failures.length}개)`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`WebSquare 검증 완료: ${components.length}개 component fragment, 1개 screen XML`);
}

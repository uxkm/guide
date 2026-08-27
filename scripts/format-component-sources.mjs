import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { format } from 'prettier';

const root = process.cwd();
const sourceGroups = [
  { directory: 'apps/html/src/components', extensions: new Set(['.html', '.js']) },
  { directory: 'apps/gulp/src/components', extensions: new Set(['.njk', '.js']) },
  { directory: 'apps/react/src/components', extensions: new Set(['.jsx']) },
  { directory: 'apps/vue/src/components', extensions: new Set(['.vue']) },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(entryPath) : [entryPath];
    }),
  );
  return files.flat();
}

function isComponentSource(file, group) {
  if (!group.extensions.has(path.extname(file))) return false;
  if (file.endsWith('.test.jsx')) return false;
  return true;
}

// Nunjucks 구문을 임시 토큰으로 보호해 HTML 정렬 중 제어문과 표현식이 변경되지 않게 합니다.
function protectNunjucks(source) {
  const tokens = [];
  let cursor = 0;
  let insideTag = false;
  let quote = null;

  function scanHtml(segment) {
    for (const character of segment) {
      if (quote) {
        if (character === quote) quote = null;
      } else if (insideTag && (character === '"' || character === "'")) {
        quote = character;
      } else if (character === '<') {
        insideTag = true;
      } else if (character === '>') {
        insideTag = false;
      }
    }
  }

  const protectedSource = source.replace(
    /({#[\s\S]*?#}|{%[\s\S]*?%}|{{[\s\S]*?}})/g,
    (token, _match, offset) => {
      scanHtml(source.slice(cursor, offset));
      const index = tokens.push(token) - 1;
      const marker = `UXKM_NUNJUCKS_${String(index).padStart(5, '0')}`;
      cursor = offset + token.length;
      if (quote) return marker;
      if (insideTag) return ` data-${marker.toLowerCase().replaceAll('_', '-')}=""`;
      return `<!-- ${marker} -->`;
    },
  );

  return {
    source: protectedSource,
    restore(formatted) {
      return formatted
        .replace(/\s*data-uxkm-nunjucks-(\d{5})=""/g, (_marker, index) => tokens[Number(index)])
        .replace(
          /(?:<!--\s*)?UXKM_NUNJUCKS_(\d{5})(?:\s*-->)?/g,
          (_marker, index) => tokens[Number(index)],
        );
    },
  };
}

function parserFor(file) {
  if (file.endsWith('.vue')) return 'vue';
  if (file.endsWith('.jsx')) return 'babel';
  if (file.endsWith('.html') || file.endsWith('.njk')) return 'html';
  return 'babel';
}

async function formatSource(file) {
  const original = await readFile(file, 'utf8');
  const protectedTemplate = file.endsWith('.njk') ? protectNunjucks(original) : null;
  const input = protectedTemplate?.source ?? original;
  const output = await format(input, {
    parser: parserFor(file),
    printWidth: 100,
    singleQuote: true,
  });
  const formatted = protectedTemplate?.restore(output) ?? output;
  return { file, formatted, original };
}

const groupsWithFiles = await Promise.all(
  sourceGroups.map(async (group) => ({
    group,
    files: await collectFiles(path.join(root, group.directory)),
  })),
);
const componentFiles = groupsWithFiles.flatMap(({ group, files: groupFiles }) =>
  groupFiles.filter((file) => isComponentSource(file, group)),
);
const requestedFiles = new Set(process.argv.slice(2).map((file) => path.resolve(root, file)));
const files = requestedFiles.size
  ? componentFiles.filter((file) => requestedFiles.has(file))
  : componentFiles;

const results = await Promise.all(files.map(formatSource));
await Promise.all(
  results
    .filter(({ formatted, original }) => formatted !== original)
    .map(({ file, formatted }) => writeFile(file, formatted)),
);

console.log(`원본 컴포넌트 코드 정렬 완료: ${files.length}개`);

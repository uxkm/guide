import { readFileSync, readdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatDemoHtml } from '../../packages/ui/src/utils/format-demo-html.js';
import { buildArgTypes, buildPlaygroundStory, parseProps, PLAYGROUND_RENDER } from './story-props.mjs';

const componentsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../packages/ui/src/components',
);

/** 가이드 slug → 스토리 meta의 primary Vue 컴포넌트 (playground · argTypes) */
const DOC_PRIMARY = {
  typography: 'TypoTitle',
  collapse: 'Collapse',
  icon: 'Icon',
};

/** 가이드 slug → Storybook 사이드바/파일명 (가이드 네비와 동일하게 맞춤) */
const DOC_STORY_NAME = {
  typography: 'Typography',
};

/** 가이드 slug → autodocs subcomponents (primary 외) */
const DOC_SUBCOMPONENTS = {
  typography: ['TypoText'],
};

export function slugToPascal(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function extractScriptSetup(source) {
  const match = source.match(/<script setup>([\s\S]*?)<\/script>/);
  return match?.[1] ?? '';
}

function extractTemplate(source) {
  const openIdx = source.indexOf('<template>');
  const closeIdx = source.lastIndexOf('</template>');
  if (openIdx === -1 || closeIdx === -1 || closeIdx <= openIdx) return '';
  return source.slice(openIdx + '<template>'.length, closeIdx);
}

function parseNamedImports(local) {
  if (!local.startsWith('{')) return [local.trim()];
  return local
    .replace(/[{}]/g, '')
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean);
}

function parseUiImports(scriptSetup) {
  const components = new Map();
  const componentImportRegex =
    /import\s+(\w+)\s+from\s+'@uxkm\/ui\/components\/([^']+)\.vue'/g;
  let match;
  while ((match = componentImportRegex.exec(scriptSetup)) !== null) {
    const [, name, relPath] = match;
    const storyPath = relPath.includes('/')
      ? `./${relPath}.vue`
      : `./${name}.vue`;
    components.set(name, {
      storyPath,
      displayPath: `@uxkm/ui/components/${relPath}.vue`,
    });
  }

  const dataImports = [];
  const dataImportRegex = /import\s+(\{[^}]+\}|\w+)\s+from\s+'@uxkm\/ui\/data\/([^']+)'/g;
  while ((match = dataImportRegex.exec(scriptSetup)) !== null) {
    dataImports.push({
      local: match[1],
      rel: `../data/${match[2]}.js`,
      displayRel: `@uxkm/ui/data/${match[2]}`,
      names: parseNamedImports(match[1]),
    });
  }

  const imageImports = [];
  const imageImportRegex = /import\s+(\{[^}]+\}|\w+)\s+from\s+'@images'/g;
  while ((match = imageImportRegex.exec(scriptSetup)) !== null) {
    imageImports.push({
      local: match[1],
      rel: '@images',
      displayRel: '@images',
      names: parseNamedImports(match[1]),
    });
  }

  const docDataImports = [];
  const docDataImportRegex = /import\s+(\{[^}]+\})\s+from\s+'@\/doc\/data\/([^']+)'/g;
  while ((match = docDataImportRegex.exec(scriptSetup)) !== null) {
    docDataImports.push({
      local: match[1],
      rel: `@doc-data/${match[2]}.js`,
      displayRel: `@/doc/data/${match[2]}`,
      names: parseNamedImports(match[1]),
    });
  }

  return { components, dataImports, imageImports, docDataImports };
}

function parseSetupConsts(scriptSetup) {
  const consts = new Map();
  const lines = scriptSetup.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const lineMatch = lines[i].match(/^const\s+(\w+)\s*=\s*(.*)$/);
    if (!lineMatch) continue;

    const name = lineMatch[1];
    let expr = lineMatch[2];

    while (!/;\s*$/.test(expr) && i + 1 < lines.length) {
      i += 1;
      expr += `\n${lines[i]}`;
    }

    expr = expr.replace(/;\s*$/, '').trim();
    if (expr) consts.set(name, expr);
  }

  return consts;
}

const BINDING_LITERALS = new Set(['true', 'false', 'null', 'undefined']);
const TABLE_DEMO_EXPORTS = new Set(['memberTableColumns', 'productTableColumns']);

function resolveDataImportRel(name, defaultRel) {
  if (TABLE_DEMO_EXPORTS.has(name)) return '../data/table-demo.js';
  return defaultRel;
}

function resolveDisplayDataImportRel(name, item) {
  if (TABLE_DEMO_EXPORTS.has(name)) return '@uxkm/ui/data/table-demo';
  return item.displayRel ?? item.rel;
}

function buildGroupedImportLines(items, neededImports, resolveRel) {
  const groups = new Map();

  for (const item of items) {
    for (const name of item.names) {
      if (!neededImports.has(name)) continue;
      const rel = resolveRel(name, item);
      const bucket = groups.get(rel) ?? new Set();
      bucket.add(name);
      groups.set(rel, bucket);
    }
  }

  return [...groups.entries()].map(([rel, names]) => {
    const sorted = [...names].sort();
    return `import { ${sorted.join(', ')} } from '${rel}';`;
  });
}

function collectDemoBindings(content) {
  const ids = new Set();
  const attrRe = /:(?:[\w-]+|v-bind:[\w-]+)="([^"]+)"/g;
  let match;

  while ((match = attrRe.exec(content)) !== null) {
    const root = match[1].trim().split(/[.[(]/)[0];
    if (BINDING_LITERALS.has(root)) continue;
    if (/^[A-Za-z_$][\w$]*$/.test(root)) ids.add(root);
  }

  const vForRe = /\bv-for="[^"]*\bin\s+([A-Za-z_$][\w$]*)/g;
  while ((match = vForRe.exec(content)) !== null) {
    ids.add(match[1]);
  }

  return ids;
}

function collectConstImportDeps(consts, constNames, importNames) {
  const deps = new Set();
  for (const constName of constNames) {
    const expr = consts.get(constName);
    if (!expr) continue;
    for (const importName of importNames) {
      if (expr.includes(importName)) deps.add(importName);
    }
  }
  return deps;
}

function buildStorySetup(
  scriptSetup,
  demoContent,
  dataImports,
  imageImports,
  docDataImports,
  { forDisplay = false } = {},
) {
  const content = Array.isArray(demoContent)
    ? demoContent.map((section) => section.content).join('\n')
    : demoContent;
  const consts = parseSetupConsts(scriptSetup);
  const allImports = [...dataImports, ...imageImports, ...docDataImports];
  const allImportNames = allImports.flatMap((item) => item.names);

  const templateBindings = collectDemoBindings(content);
  if (!templateBindings.size) {
    return { importLines: [], moduleConsts: [], setupReturn: '' };
  }

  const constNames = [...templateBindings].filter((name) => consts.has(name));
  const importDeps = collectConstImportDeps(consts, constNames, allImportNames);
  const neededImports = new Set(
    [...templateBindings].filter((name) => allImportNames.includes(name)),
  );
  for (const dep of importDeps) neededImports.add(dep);

  const resolveRel = forDisplay
    ? (name, item) => resolveDisplayDataImportRel(name, item)
    : (name, item) => resolveDataImportRel(name, item.rel);

  const importLines = buildGroupedImportLines(allImports, neededImports, resolveRel);

  const moduleConsts = constNames.map((name) => `const ${name} = ${consts.get(name)};`);

  const setupReturn = [...templateBindings]
    .filter((name) => consts.has(name) || allImportNames.includes(name))
    .sort()
    .join(', ');

  return { importLines, moduleConsts, setupReturn };
}

function collectComponentsInMarkup(content, componentNames) {
  return [...componentNames].filter((name) =>
    new RegExp(`</?${name}(?:[\\s/>]|$)`).test(content),
  );
}

function indentTemplateBlock(markup) {
  const formatted = formatDemoHtml(markup.trim());
  return formatted
    .split('\n')
    .map((line) => (line.trim() ? `  ${line}` : ''))
    .join('\n');
}

export function buildStoryVueSourceCode(sectionContent, options = {}) {
  const {
    scriptSetup = '',
    components = new Map(),
    dataImports = [],
    imageImports = [],
    docDataImports = [],
  } = options;

  const usedComponents = collectComponentsInMarkup(sectionContent, components.keys());
  const componentImportLines = usedComponents
    .sort()
    .map((name) => {
      const entry = components.get(name);
      const displayPath =
        typeof entry === 'object' && entry?.displayPath
          ? entry.displayPath
          : `@uxkm/ui/components/${name}.vue`;
      return `import ${name} from '${displayPath}';`;
    });

  const { importLines: dataImportLines, moduleConsts } = buildStorySetup(
    scriptSetup,
    sectionContent,
    dataImports,
    imageImports,
    docDataImports,
    { forDisplay: true },
  );

  const setupLines = [...componentImportLines, ...dataImportLines, ...moduleConsts];

  const scriptBlock =
    setupLines.length > 0
      ? `<script setup>\n${setupLines.join('\n')}\n</script>\n\n`
      : '';

  return `${scriptBlock}<template>\n${indentTemplateBlock(sectionContent)}\n</template>`;
}

function parseDemoSections(template) {
  const sections = [];
  // description 등 속성값 안의 `>`(예: </code>) 때문에 [^>]* 는 사용할 수 없음
  const regex =
    /<DemoSection\s+((?:[^>"']|"[^"]*"|'[^']*')*)>([\s\S]*?)<\/DemoSection>/g;
  let match;
  while ((match = regex.exec(template)) !== null) {
    const attrs = match[1];
    const content = match[2].trim();
    const title = attrs.match(/title="([^"]*)"/)?.[1] ?? 'Demo';
    const headingId = attrs.match(/heading-id="([^"]*)"/)?.[1] ?? `demo-${sections.length}`;
    const description = attrs.match(/description="([^"]*)"/)?.[1] ?? null;
    const stack = /\bstack\b/.test(attrs);
    sections.push({ title, headingId, description, stack, content });
  }
  return sections;
}

function parseApiSections(template) {
  const sections = [];
  const regex = /<ApiSection\s+([^>]*)>([\s\S]*?)<\/ApiSection>/g;
  let match;

  while ((match = regex.exec(template)) !== null) {
    const attrs = match[1];
    const inner = match[2];
    const title = attrs.match(/title="([^"]*)"/)?.[1] ?? 'API';
    const description = attrs.match(/description="([^"]*)"/)?.[1] ?? null;
    const tables = [];
    const tableRegex = /<ApiTable\s+([^/>]*)\/?>/g;
    let tableMatch;

    while ((tableMatch = tableRegex.exec(inner)) !== null) {
      const tableAttrs = tableMatch[1];
      const columnsVar = tableAttrs.match(/:columns="(\w+)"/)?.[1];
      const rowsVar = tableAttrs.match(/:rows="(\w+)"/)?.[1];
      const codeColumn = tableAttrs.match(/code-column="([^"]*)"/)?.[1] ?? 'name';

      if (columnsVar && rowsVar) {
        tables.push({ columnsVar, rowsVar, codeColumn });
      }
    }

    if (tables.length) {
      sections.push({ title, description, tables });
    }
  }

  return sections;
}

function parseDocApiModule(scriptSetup) {
  const match = scriptSetup.match(/from '@\/doc\/data\/([^']+)'/);
  return match?.[1] ?? null;
}

function buildApiSectionsCode(apiSections) {
  if (!apiSections.length) {
    return { importLines: [], constBlock: '', hasApi: false };
  }

  const apiImports = new Set();
  for (const section of apiSections) {
    for (const table of section.tables) {
      apiImports.add(table.columnsVar);
      apiImports.add(table.rowsVar);
    }
  }

  const apiModule = apiSections[0].apiModule;
  const importLines = [
    `import {\n  ${[...apiImports].sort().join(',\n  ')},\n} from '@doc-data/${apiModule}';`,
  ];

  const constBlock = `
const apiSections = [
${apiSections
  .map((section) => {
    const descriptionLine = section.description
      ? `\n    description: ${JSON.stringify(section.description)},`
      : '';
    const tablesBlock = section.tables
      .map(
        (table) =>
          `      { columns: ${table.columnsVar}, rows: ${table.rowsVar}, codeColumn: ${JSON.stringify(table.codeColumn)} },`,
      )
      .join('\n');

    return `  {
    title: ${JSON.stringify(section.title)},${descriptionLine}
    tables: [
${tablesBlock}
    ],
  },`;
  })
  .join('\n')}
];
`;

  return { importLines, constBlock, hasApi: true };
}

function headingIdToExportName(headingId, reserved = new Set()) {
  const base = headingId
    .replace(/-heading$/, '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  let name = base || 'Demo';
  if (reserved.has(name)) {
    name = `${name}Demo`;
  }
  if (/^\d/.test(name)) {
    name = `Demo${name}`;
  }
  return name;
}

function escapeTemplate(content) {
  return content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

export function formatStorySourceCode(markup) {
  return formatDemoHtml(markup.trim());
}

/** Storybook Markdown용 — <code class="typo_code">가 Source(div)로 승격되지 않도록 인라인 백틱으로 변환 */
export function toStorybookDescription(description) {
  if (!description) return description;
  return description.replace(/<code(?:\s+[^>]*)?>([\s\S]*?)<\/code>/gi, (_, inner) => {
    const text = inner
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/`/g, '\\`');
    return `\`${text}\``;
  });
}

function buildStorySourceParam(sectionContent, docContext, { stack = false, description = null } = {}) {
  const vueSource = buildStoryVueSourceCode(sectionContent, docContext);
  const descriptionBlock = description
    ? `\n      description: {
        story: ${JSON.stringify(toStorybookDescription(description))},
      },`
    : '';
  return `  parameters: {
    demoPreview: { stack: ${stack} },
    docs: {${descriptionBlock}
      source: {
        code: ${JSON.stringify(vueSource)},
        language: 'vue',
      },
    },
  },`;
}

export function extractDocFile(docPath) {
  const source = readFileSync(docPath, 'utf8');
  const slug = path.basename(docPath, '.vue');
  const scriptSetup = extractScriptSetup(source);
  const template = extractTemplate(source);
  const { components, dataImports, imageImports, docDataImports } = parseUiImports(scriptSetup);
  const sections = parseDemoSections(template);
  const apiModule = parseDocApiModule(scriptSetup);
  const apiSections = parseApiSections(template).map((section) => ({
    ...section,
    apiModule,
  }));
  const primaryComponent = DOC_PRIMARY[slug] ?? slugToPascal(slug);
  const storyName = DOC_STORY_NAME[slug] ?? primaryComponent;
  const explicitSubcomponents = DOC_SUBCOMPONENTS[slug] ?? [];

  return {
    slug,
    primaryComponent,
    storyName,
    explicitSubcomponents,
    components,
    dataImports,
    imageImports,
    docDataImports,
    scriptSetup,
    sections,
    apiSections,
  };
}

export function loadAllDocDemos(docDir) {
  const byComponent = new Map();

  for (const file of readdirSync(docDir).filter((f) => f.endsWith('.vue'))) {
    const doc = extractDocFile(path.join(docDir, file));
    if (!doc.sections.length) continue;
    byComponent.set(doc.storyName, doc);
  }

  return byComponent;
}

export function buildDocStorySource(doc, getStoryTitle, getStoryId) {
  const {
    primaryComponent,
    storyName,
    explicitSubcomponents,
    components,
    dataImports,
    imageImports,
    docDataImports,
    scriptSetup,
    sections,
    apiSections,
  } = doc;
  const title = getStoryTitle(storyName);
  const id = getStoryId(storyName);

  const importLines = [`import ${primaryComponent} from './${primaryComponent}.vue';`];
  const imported = new Set([primaryComponent]);

  for (const [name, paths] of components) {
    if (imported.has(name)) continue;
    importLines.push(`import ${name} from '${paths.storyPath}';`);
    imported.add(name);
  }

  for (const name of explicitSubcomponents) {
    if (imported.has(name)) continue;
    importLines.push(`import ${name} from './${name}.vue';`);
    imported.add(name);
  }

  const { importLines: setupImports, moduleConsts, setupReturn } = buildStorySetup(
    scriptSetup,
    sections,
    dataImports,
    imageImports,
    docDataImports,
  );

  const docContext = {
    scriptSetup,
    components,
    dataImports,
    imageImports,
    docDataImports,
  };
  importLines.push(...setupImports);

  const { importLines: apiImportLines, constBlock: apiConstBlock } = buildApiSectionsCode(
    apiSections.filter((section) => section.apiModule),
  );
  importLines.push(...apiImportLines);

  const playgroundConfig = PLAYGROUND_RENDER[primaryComponent];
  if (playgroundConfig) {
    for (const name of playgroundConfig.components) {
      if (imported.has(name)) continue;
      importLines.push(`import ${name} from './${name}.vue';`);
      imported.add(name);
    }
  }

  const componentNames = [...imported];
  const subcomponentNames = [
    ...new Set([
      ...explicitSubcomponents,
      ...componentNames.filter(
        (name) => name !== primaryComponent && name.startsWith(primaryComponent),
      ),
    ]),
  ].filter((name) => name !== primaryComponent);
  const subcomponentsBlock = subcomponentNames.length
    ? `\n  subcomponents: { ${subcomponentNames.join(', ')} },`
    : '';
  const fullWidth = new Set(['Navbar', 'Table', 'Menu', 'Tabs', 'Calendar', 'DatePicker']).has(
    primaryComponent,
  );

  const setupBlock =
    setupReturn || moduleConsts.length
      ? `    setup() {
${moduleConsts.map((line) => `      ${line}`).join('\n')}
      return { ${setupReturn} };
    },`
      : '';

  const storyExports = sections.map((section, index) => {
    const exportName =
      headingIdToExportName(section.headingId, imported) || `Demo${index + 1}`;
    const template = escapeTemplate(section.content.trim());

    return `export const ${exportName} = {
  name: ${JSON.stringify(section.title)},
${buildStorySourceParam(section.content, docContext, { stack: section.stack, description: section.description })}
  render: () => ({
    components: { ${componentNames.join(', ')} },
${setupBlock}
    template: \`${template}\`,
  }),
};`;
  });

  const apiParametersBlock = apiConstBlock
    ? `
  parameters: {
    layout: '${fullWidth ? 'fullscreen' : 'padded'}',
    apiSections,
  },`
    : `
  parameters: {
    layout: '${fullWidth ? 'fullscreen' : 'padded'}',
  },`;

  const componentPath = path.join(componentsDir, `${primaryComponent}.vue`);
  let argTypesBlock = '';
  let playgroundStory = '';
  if (existsSync(componentPath)) {
    const componentProps = parseProps(readFileSync(componentPath, 'utf8'));
    const argTypes = buildArgTypes(componentProps, primaryComponent);
    if (argTypes) {
      argTypesBlock = `\n  argTypes: {\n${argTypes}\n  },`;
    }
    playgroundStory = buildPlaygroundStory(primaryComponent, componentProps);
  }

  return `${importLines.join('\n')}${apiConstBlock}
export default {
  title: '${title}',
  id: '${id}',
  component: ${primaryComponent},
  tags: ['autodocs'],${argTypesBlock}${subcomponentsBlock}${apiParametersBlock}
};

${playgroundStory ? `${playgroundStory}\n\n` : ''}${storyExports.join('\n\n')}
`;
}

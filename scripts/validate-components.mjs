import { access, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const catalog = {
  layout: ['Container', 'Grid', 'Flex', 'Divider', 'Space'],
  basic: ['Button', 'Typography', 'Icon', 'Link'],
  'data-display': ['Avatar', 'Badge', 'Tag', 'Card', 'Table', 'List', 'Stat', 'Calendar', 'Timeline', 'Tree'],
  form: ['FormLayout', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch', 'Slider', 'Rate', 'DatePicker', 'Upload'],
  feedback: ['Alert', 'Snackbar', 'Modal', 'Drawer', 'Popover', 'Tooltip', 'Progress', 'Spin', 'Skeleton', 'Empty'],
  navigation: ['Navbar', 'Menu', 'Tabs', 'Breadcrumb', 'Pagination', 'Steps', 'Dropdown'],
  miscellaneous: ['Accordion', 'Collapse', 'Carousel', 'Affix', 'BackTop']
};

const conventions = {
  html: (name) => [`${name}.html`],
  gulp: (name) => [`${name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}.njk`],
  vue: (name) => [`${name}.vue`, `${name}.spec.js`, 'index.js'],
  react: (name) => [`${name}.jsx`, `${name}.test.jsx`, 'index.js']
};

const failures = [];

async function requirePath(relativePath) {
  try {
    await access(join(root, relativePath));
  } catch {
    failures.push(relativePath);
  }
}

for (const [app, convention] of Object.entries(conventions)) {
  for (const [category, components] of Object.entries(catalog)) {
    for (const component of components) {
      const base = `apps/${app}/src/components/${category}/${component}`;
      for (const file of convention(component)) await requirePath(`${base}/${file}`);
      const slug = component.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
      await requirePath(`packages/styles/src/components/_${slug}.scss`);
    }
  }
}

const frameworkOnly = [
  'apps/nuxt/app/components/layout/AppLayout/AppLayout.vue',
  'apps/nuxt/app/components/navigation/NuxtLinkButton/NuxtLinkButton.vue',
  'apps/nuxt/app/components/data-display/NuxtImage/NuxtImage.vue',
  'apps/next/src/components/layout/AppLayout/AppLayout.jsx',
  'apps/next/src/components/navigation/NextLinkButton/NextLinkButton.jsx',
  'apps/next/src/components/data-display/NextImage/NextImage.jsx'
];

for (const path of frameworkOnly) await requirePath(path);

async function findFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findFiles(path));
    else files.push(path);
  }
  return files;
}

const centralStories = (await findFiles(join(root, 'apps/storybook/src')))
  .filter((path) => /\.stories\.[cm]?[jt]sx?$/.test(path));
await requirePath('apps/storybook/src/Button.stories.tsx');

for (const app of ['html', 'gulp', 'vue', 'react', 'nuxt', 'next']) {
  const appStories = (await findFiles(join(root, `apps/${app}`)))
    .filter((path) => /\.stories\.[cm]?[jt]sx?$/.test(path));
  failures.push(...appStories.map((path) => path.replace(`${root}/`, '')));
}

for (const app of ['html', 'gulp', 'react']) {
  const localStyles = await findFiles(join(root, `apps/${app}/src/components`));
  const unexpectedStyles = localStyles.filter((path) => path.endsWith('.scss'));
  failures.push(...unexpectedStyles.map((path) => path.replace(`${root}/`, '')));
}

if (failures.length > 0) {
  console.error(`구조 검증 실패 (${failures.length}개):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`구조 검증 완료: 공통 컴포넌트 52개 × 4개 프레임워크, 중앙 Storybook ${centralStories.length}개 Story`);
}

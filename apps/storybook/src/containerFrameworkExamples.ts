import type { FrameworkExample } from './FrameworkCode';

import containerHtml from '../../html/src/components/layout/Container/Container.html?raw';
import containerGulp from '../../gulp/src/components/layout/Container/container.njk?raw';
import containerReact from '../../react/src/components/layout/Container/Container.jsx?raw';
import containerVue from '../../vue/src/components/layout/Container/Container.vue?raw';

export const containerComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/layout/Container/Container.html', code: containerHtml },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/layout/Container/container.njk', code: containerGulp },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/layout/Container/Container.vue', code: containerVue },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/container → Container.vue', code: containerVue },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/layout/Container/Container.jsx', code: containerReact },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/container → Container.jsx', code: containerReact },
];

const bodies = {
  basic: `<Container>
  <div class="container_demo-fill">기본 Container</div>
</Container>`,
  sizes: `<div class="container_demo-sizes">
  <Container size="sm"><div class="container_demo-fill">Small · 36rem</div></Container>
  <Container size="md"><div class="container_demo-fill">Medium · 48rem</div></Container>
  <Container size="lg"><div class="container_demo-fill">Large · 64rem</div></Container>
  <Container size="xl"><div class="container_demo-fill">Extra Large · 80rem</div></Container>
</div>`,
  fluid: `<Container fluid>
  <div class="container_demo-fill">Fluid · 최대 너비 제한 없음</div>
</Container>`,
  semantic: `<Container as="main" size="lg">
  <div class="container_demo-fill">main 요소로 렌더링</div>
</Container>`
} as const;

type ExampleKey = keyof typeof bodies;

const INCLUDE = '{% include "components/layout/Container/container.njk" %}';

function indentBlock(value: string, spaces: number) {
  const indent = ' '.repeat(spaces);
  return value
    .split('\n')
    .map((line) => (line.trim() ? `${indent}${line.trim()}` : ''))
    .join('\n');
}

function gulpInclude(options: {
  as?: string;
  size?: string;
  fluid?: boolean;
  content: string;
  indent?: number;
}) {
  const base = options.indent ?? 0;
  const lines: string[] = [];
  if (options.as) lines.push(`{% set as = '${options.as}' %}`);
  if (options.size) lines.push(`{% set size = '${options.size}' %}`);
  if (options.fluid) lines.push('{% set fluid = true %}');
  lines.push('{% set content %}');
  lines.push(indentBlock(options.content, 2));
  lines.push('{% endset %}');
  lines.push(INCLUDE);
  return indentBlock(lines.join('\n'), base);
}

const gulpBodies: Record<ExampleKey, string> = {
  basic: gulpInclude({
    content: '<div class="container_demo-fill">기본 Container</div>',
  }),
  // 여러 Container는 include를 복사하지 않고 for로 한 번만 호출합니다.
  sizes: `<div class="container_demo-sizes">
{% set items = [
  { size: 'sm', label: 'Small · 36rem' },
  { size: 'md', label: 'Medium · 48rem' },
  { size: 'lg', label: 'Large · 64rem' },
  { size: 'xl', label: 'Extra Large · 80rem' }
] %}
{% for item in items %}
  {% set size = item.size %}
  {% set content %}
    <div class="container_demo-fill">{{ item.label }}</div>
  {% endset %}
  {% include "components/layout/Container/container.njk" %}
{% endfor %}
</div>`,
  fluid: gulpInclude({
    fluid: true,
    content: '<div class="container_demo-fill">Fluid · 최대 너비 제한 없음</div>',
  }),
  semantic: gulpInclude({
    as: 'main',
    size: 'lg',
    content: '<div class="container_demo-fill">main 요소로 렌더링</div>',
  }),
};

const webSquare: Record<ExampleKey, string> = {
  basic: `<w2:group
  id="containerBasic"
  class="container">
  <w2:textbox id="containerBasicContent" class="container_demo-fill" label="기본 Container"></w2:textbox>
</w2:group>`,
  sizes: `<w2:group
  id="containerSizes"
  class="container_demo-sizes">
  <w2:group id="containerSmall" class="container container_sm">
    <w2:textbox id="containerSmallContent" class="container_demo-fill" label="Small · 36rem"></w2:textbox>
  </w2:group>
  <w2:group id="containerMedium" class="container container_md">
    <w2:textbox id="containerMediumContent" class="container_demo-fill" label="Medium · 48rem"></w2:textbox>
  </w2:group>
  <w2:group id="containerLarge" class="container container_lg">
    <w2:textbox id="containerLargeContent" class="container_demo-fill" label="Large · 64rem"></w2:textbox>
  </w2:group>
  <w2:group id="containerExtraLarge" class="container container_xl">
    <w2:textbox id="containerExtraLargeContent" class="container_demo-fill" label="Extra Large · 80rem"></w2:textbox>
  </w2:group>
</w2:group>`,
  fluid: `<w2:group
  id="containerFluid"
  class="container container_fluid">
  <w2:textbox id="containerFluidContent" class="container_demo-fill" label="Fluid · 최대 너비 제한 없음"></w2:textbox>
</w2:group>`,
  semantic: `<w2:group
  id="containerMain"
  tagname="main"
  class="container container_lg">
  <w2:textbox id="containerMainContent" class="container_demo-fill" label="main 요소로 렌더링"></w2:textbox>
</w2:group>`
};

function parseAttrs(source: string) {
  const attrs: Record<string, string | boolean> = {};
  source.replace(/([\w-]+)(?:="([^"]*)")?/g, (_, key: string, value: string | undefined) => {
    attrs[key] = value ?? true;
    return '';
  });
  return attrs;
}

function toHtml(body: string) {
  const roots: string[] = [];
  const html = body.replace(/<Container([^>]*)>/g, (_, source: string) => {
    const props = parseAttrs(source);
    const tag = typeof props.as === 'string' ? props.as : 'div';
    const classes = ['container', props.size && `container_${props.size}`, props.fluid && 'container_fluid'].filter(Boolean).join(' ');
    roots.push(tag);
    return `<${tag} class="${classes}" data-component="Container">`;
  });
  let rootIndex = roots.length;
  return html.replace(/<\/Container>/g, () => `</${roots[--rootIndex]}>`);
}

function reactCode(body: string) {
  const jsx = body.replace(/class=/g, 'className=');
  return `import Container from '@uxkm/react/container';\n\nexport function Example() {\n  return (\n${jsx.split('\n').map((line) => `    ${line}`).join('\n')}\n  );\n}`;
}

function vueCode(body: string) {
  return `<script setup>\nimport Container from '@uxkm/vue/container';\n</script>\n\n<template>\n${body.split('\n').map((line) => `  ${line}`).join('\n')}\n</template>`;
}

function makeExamples(key: ExampleKey): FrameworkExample[] {
  const body = bodies[key];
  const html = toHtml(body);
  const react = reactCode(body);
  const vue = vueCode(body);
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/layout/Container/Container.html · ${key}`, code: html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/layout/Container/container.njk · ${key}`, code: gulpBodies[key] },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/container → apps/vue/src/components/layout/Container/Container.vue · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/container → apps/vue/src/components/layout/Container/Container.vue · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/container → apps/react/src/components/layout/Container/Container.jsx · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/container → apps/react/src/components/layout/Container/Container.jsx · ${key}`, code: react },
    { id: 'websquare', label: 'WebSquare', fileName: `screen.xml · ${key}`, code: webSquare[key] }
  ];
}

export const containerFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;

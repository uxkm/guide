import type { FrameworkExample } from './FrameworkCode';

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
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/layout/Container/container.njk · ${key}`, code: `{# Container · ${key} #}\n${html}` },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/container → apps/vue/src/components/layout/Container/Container.vue · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/container → apps/vue/src/components/layout/Container/Container.vue · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/container → apps/react/src/components/layout/Container/Container.jsx · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/container → apps/react/src/components/layout/Container/Container.jsx · ${key}`, code: react }
  ];
}

export const containerFrameworkExamples = Object.fromEntries(
  (Object.keys(bodies) as ExampleKey[]).map((key) => [key, makeExamples(key)])
) as Record<ExampleKey, FrameworkExample[]>;

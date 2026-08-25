import type { FrameworkExample } from './FrameworkCode';

const reactComponent = `// Container가 지원하는 최대 너비 값만 허용합니다.
const SIZES = new Set(['', 'sm', 'md', 'lg', 'xl']);

export function Container({
  as: Root = 'div', size = '', fluid = false, children = 'Container', className = '', ...props
}) {
  // 잘못된 size 값은 기본 크기로 처리합니다.
  const resolvedSize = SIZES.has(size) ? size : '';

  // 기본 클래스에 size, fluid, 사용자 정의 클래스를 조건에 따라 조합합니다.
  const classes = [
    'container', resolvedSize && \`container_\${resolvedSize}\`, fluid && 'container_fluid', className
  ].filter(Boolean).join(' ');

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return <Root className={classes} data-component="Container" {...props}>{children}</Root>;
}

export default Container;`;

const vueComponent = `<script setup>
import { computed, useAttrs } from 'vue';

// 컴포넌트 이름을 지정하고 속성을 루트 요소에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmContainer', inheritAttrs: false });

// as는 루트 요소, size는 최대 너비, fluid는 최대 너비 제한 해제를 제어합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  size: { type: String, default: '' },
  fluid: Boolean
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 지원하지 않는 size 값이 CSS 클래스로 전달되지 않도록 검증합니다.
const sizes = new Set(['', 'sm', 'md', 'lg', 'xl']);
const resolvedSize = computed(() => sizes.has(props.size) ? props.size : '');

// 상태에 맞는 공통 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() => [
  'container',
  resolvedSize.value && \`container_\${resolvedSize.value}\`,
  props.fluid && 'container_fluid',
  attrs.class
].filter(Boolean));
</script>

<template>
  <!-- as로 루트 요소를 결정하고 나머지 속성 및 계산된 클래스를 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Container">
    <!-- 호출 위치의 콘텐츠를 기본 slot으로 렌더링합니다. -->
    <slot>Container</slot>
  </component>
</template>`;

const htmlComponent = `<!-- container 클래스가 최대 너비, 중앙 정렬, 좌우 여백을 적용합니다. -->
<div class="container" data-component="Container">
  <!-- 호출 위치에서 Container가 감쌀 콘텐츠를 배치합니다. -->
  <!-- 콘텐츠 -->
</div>`;

export const containerComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/layout/Container/Container.html', code: htmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/layout/Container/container.njk', code: `{# Container #}\n${htmlComponent}` },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/layout/Container/Container.vue', code: vueComponent },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/container → apps/vue/src/components/layout/Container/Container.vue', code: vueComponent },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/layout/Container/Container.jsx', code: reactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/container → apps/react/src/components/layout/Container/Container.jsx', code: reactComponent }
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
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/layout/Container/container.njk · ${key}`, code: `{# Container · ${key} #}\n${html}` },
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

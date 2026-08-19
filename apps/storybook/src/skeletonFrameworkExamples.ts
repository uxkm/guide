import type { FrameworkExample } from './FrameworkCode';

const names = ['basic', 'shape', 'card', 'static'] as const;
type Name = (typeof names)[number];

const react: Record<Name, string> = {
  basic: '<div style={{ maxWidth: \'var(--input-max-width)\', width: \'100%\' }}><Skeleton paragraph={3} /></div>',
  shape: '<Skeleton avatar paragraph={0} />\n<Skeleton round style={{ marginTop: \'var(--space-md)\' }} />',
  card: `<div className="card card_shadow" style={{ maxWidth: 360, width: '100%' }} role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div className="card_body">
    <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
      <span className="skeleton skeleton_image" aria-hidden="true" />
      <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span className="skeleton skeleton_text" aria-hidden="true" />
      <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
        <span className="skeleton skeleton_button" aria-hidden="true" />
        <span className="skeleton skeleton_button" aria-hidden="true" style={{ width: '4rem' }} />
      </div>
    </Skeleton>
  </div>
</div>`,
  static: '<div style={{ maxWidth: \'var(--input-max-width)\', width: \'100%\' }}><Skeleton active={false} paragraph={3} /></div>',
};

const vue: Record<Name, string> = {
  basic: '<div style="max-width: var(--input-max-width); width: 100%;"><Skeleton :paragraph="3" /></div>',
  shape: '<Skeleton avatar :paragraph="0" />\n<Skeleton round style="margin-top: var(--space-md);" />',
  card: `<div class="card card_shadow" style="max-width: 360px; width: 100%;" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div class="card_body">
    <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
      <span class="skeleton skeleton_image" aria-hidden="true" />
      <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span class="skeleton skeleton_text" aria-hidden="true" />
      <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div class="skeleton_row" style="margin-top: var(--space-xs);">
        <span class="skeleton skeleton_button" aria-hidden="true" />
        <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
      </div>
    </Skeleton>
  </div>
</div>`,
  static: '<div style="max-width: var(--input-max-width); width: 100%;"><Skeleton :active="false" :paragraph="3" /></div>',
};

const html: Record<Name, string> = {
  basic: `<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title" aria-hidden="true"></span>
  <span class="skeleton skeleton_text" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
</div>`,
  shape: `<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="아바타 로딩 중">
  <div class="skeleton_row"><span class="skeleton skeleton_circle" aria-hidden="true"></span></div>
</div>
<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="원형 콘텐츠 로딩 중">
  <span class="skeleton skeleton_circle" aria-hidden="true"></span>
</div>`,
  card: `<div class="card card_shadow" style="max-width: 360px; width: 100%;" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div class="card_body"><div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
    <span class="skeleton skeleton_image" aria-hidden="true"></span>
    <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true"></span>
    <span class="skeleton skeleton_text" aria-hidden="true"></span>
    <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
    <div class="skeleton_row" style="margin-top: var(--space-xs);"><span class="skeleton skeleton_button" aria-hidden="true"></span><span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;"></span></div>
  </div></div>
</div>`,
  static: `<div class="skeleton_group skeleton_static" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-sm skeleton_static" aria-hidden="true"></span>
</div>`,
};

function examples(key: Name): FrameworkExample[] {
  const reactCode = `import Skeleton from '@uxkm/react/skeleton';\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vueCode = `<script setup>\nimport Skeleton from '@uxkm/vue/skeleton';\n</script>\n<template>\n${vue[key]}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `Skeleton.html · ${key}`, code: html[key] },
    { id: 'gulp', label: 'Gulp', fileName: `skeleton.njk · ${key}`, code: html[key] },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/skeleton · ${key}`, code: vueCode },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/skeleton · ${key}`, code: vueCode },
    { id: 'react', label: 'React', fileName: `@uxkm/react/skeleton · ${key}`, code: reactCode },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/skeleton · ${key}`, code: reactCode },
  ];
}

export const skeletonFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;

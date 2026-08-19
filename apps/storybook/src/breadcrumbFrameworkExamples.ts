import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'separator', 'icon', 'size', 'ellipsis', 'state'] as const;
type Name = (typeof names)[number];

const itemHtml = (label: string, options: { href?: string; current?: boolean; disabled?: boolean; icon?: boolean; hidden?: boolean } = {}) => `<li class="breadcrumb_item${options.current ? ' is-current' : ''}"${options.current ? ' aria-current="page"' : ''}${options.hidden ? ' data-breadcrumb-hidden hidden' : ''}>${options.current ? `<span class="breadcrumb_current">${label}</span>` : options.disabled ? `<span class="breadcrumb_link is-disabled" aria-disabled="true">${label}</span>` : `<a class="breadcrumb_link${options.icon ? ' breadcrumb_link-icon' : ''}" href="${options.href || '#'}"${options.icon ? ' aria-label="홈"' : ''}>${options.icon ? '<svg class="icon breadcrumb_icon" data-component="Icon" data-icon="home" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7"></path></svg>' : label}</a>`}</li>`;
const htmlCrumb = (body: string, classes = '', label = '경로') => `<nav class="breadcrumb${classes}" aria-label="${label}" data-component="Breadcrumb"><ol class="breadcrumb_list">${body}</ol></nav>`;
const standardHtml = (last: string) => itemHtml('홈') + itemHtml('가이드') + itemHtml(last, { current: true });
const html: Record<Name, string> = {
  basic: htmlCrumb(itemHtml('홈') + itemHtml('컴포넌트') + itemHtml('Breadcrumb', { current: true })),
  separator: [htmlCrumb(standardHtml('Chevron'), '', '경로 — chevron'), htmlCrumb(standardHtml('Slash'), ' breadcrumb_sep-slash', '경로 — slash'), htmlCrumb(standardHtml('Dot'), ' breadcrumb_sep-dot', '경로 — dot')].join('\n\n'),
  icon: htmlCrumb(itemHtml('', { icon: true }) + itemHtml('설정') + itemHtml('계정') + itemHtml('프로필', { current: true })),
  size: [htmlCrumb(standardHtml('Small'), ' breadcrumb_sm', '경로 — small'), htmlCrumb(standardHtml('Medium'), '', '경로 — medium'), htmlCrumb(standardHtml('Large'), ' breadcrumb_lg', '경로 — large')].join('\n\n'),
  ellipsis: htmlCrumb(itemHtml('', { icon: true }) + itemHtml('제품', { hidden: true }) + itemHtml('디자인 시스템', { hidden: true }) + '<li class="breadcrumb_item"><button type="button" class="breadcrumb_ellipsis" data-breadcrumb-ellipsis aria-label="숨겨진 경로 보기" aria-expanded="false">…</button></li>' + itemHtml('컴포넌트') + itemHtml('Breadcrumb', { current: true }), '', '긴 경로'),
  state: [htmlCrumb(itemHtml('홈') + itemHtml('삭제된 페이지', { disabled: true }) + itemHtml('현재 페이지', { current: true }), '', '경로 — 비활성'), htmlCrumb(itemHtml('홈') + itemHtml('프로젝트 관리 및 협업 도구 설정') + itemHtml('사용자 권한 및 역할 기반 접근 제어', { current: true }), ' breadcrumb_sep-slash', '경로 — 긴 레이블')].join('\n\n'),
};

const react: Record<Name, string> = {
  basic: `<Breadcrumb items={[{ label: '홈', href: '#' }, { label: '컴포넌트', href: '#' }, { label: 'Breadcrumb', current: true }]} />`,
  separator: `<Breadcrumb ariaLabel="경로 — chevron" items={items('Chevron')} />\n<Breadcrumb separator="slash" ariaLabel="경로 — slash" items={items('Slash')} />\n<Breadcrumb separator="dot" ariaLabel="경로 — dot" items={items('Dot')} />`,
  icon: `<Breadcrumb><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem><BreadcrumbItem label="설정" href="#" /><BreadcrumbItem label="계정" href="#" /><BreadcrumbItem label="프로필" current /></Breadcrumb>`,
  size: `<Breadcrumb size="sm" ariaLabel="경로 — small" items={items('Small')} />\n<Breadcrumb ariaLabel="경로 — medium" items={items('Medium')} />\n<Breadcrumb size="lg" ariaLabel="경로 — large" items={items('Large')} />`,
  ellipsis: `const [expanded, setExpanded] = useState(false);\nreturn <Breadcrumb ariaLabel="긴 경로"><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem>{expanded && <><BreadcrumbItem label="제품" href="#" /><BreadcrumbItem label="디자인 시스템" href="#" /></>}<BreadcrumbEllipsis expanded={expanded} label={expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기'} onClick={() => setExpanded(!expanded)} /><BreadcrumbItem label="컴포넌트" href="#" /><BreadcrumbItem label="Breadcrumb" current /></Breadcrumb>;`,
  state: `<Breadcrumb ariaLabel="경로 — 비활성"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="삭제된 페이지" disabled /><BreadcrumbItem label="현재 페이지" current /></Breadcrumb>\n<Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" /><BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current /></Breadcrumb>`,
};

const vue: Record<Name, string> = {
  basic: `<Breadcrumb :items="[{ label: '홈', href: '#' }, { label: '컴포넌트', href: '#' }, { label: 'Breadcrumb', current: true }]" />`,
  separator: `<Breadcrumb aria-label="경로 — chevron" :items="items('Chevron')" />\n<Breadcrumb separator="slash" aria-label="경로 — slash" :items="items('Slash')" />\n<Breadcrumb separator="dot" aria-label="경로 — dot" :items="items('Dot')" />`,
  icon: `<Breadcrumb><BreadcrumbItem href="#" icon aria-label="홈"><Icon name="home" class="breadcrumb_icon" /></BreadcrumbItem><BreadcrumbItem label="설정" href="#" /><BreadcrumbItem label="계정" href="#" /><BreadcrumbItem label="프로필" current /></Breadcrumb>`,
  size: `<Breadcrumb size="sm" aria-label="경로 — small" :items="items('Small')" />\n<Breadcrumb aria-label="경로 — medium" :items="items('Medium')" />\n<Breadcrumb size="lg" aria-label="경로 — large" :items="items('Large')" />`,
  ellipsis: `<Breadcrumb aria-label="긴 경로"><BreadcrumbItem href="#" icon aria-label="홈"><Icon name="home" class="breadcrumb_icon" /></BreadcrumbItem><template v-if="expanded"><BreadcrumbItem label="제품" href="#" /><BreadcrumbItem label="디자인 시스템" href="#" /></template><BreadcrumbEllipsis :expanded="expanded" :label="expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기'" @click="expanded = !expanded" /><BreadcrumbItem label="컴포넌트" href="#" /><BreadcrumbItem label="Breadcrumb" current /></Breadcrumb>`,
  state: `<Breadcrumb aria-label="경로 — 비활성"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="삭제된 페이지" disabled /><BreadcrumbItem label="현재 페이지" current /></Breadcrumb>\n<Breadcrumb separator="slash" aria-label="경로 — 긴 레이블"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" /><BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current /></Breadcrumb>`,
};

function examples(key: Name): FrameworkExample[] {
  const needsIcon = key === 'icon' || key === 'ellipsis';
  const needsEllipsis = key === 'ellipsis';
  const reactImports = [`import { Breadcrumb, BreadcrumbItem${needsEllipsis ? ', BreadcrumbEllipsis' : ''} } from '@uxkm/react/breadcrumb';`, needsIcon && `import Icon from '@uxkm/react/icon';`, needsEllipsis && `import { useState } from 'react';`].filter(Boolean).join('\n');
  const vueImports = [`import { Breadcrumb, BreadcrumbItem${needsEllipsis ? ', BreadcrumbEllipsis' : ''} } from '@uxkm/vue/breadcrumb';`, needsIcon && `import Icon from '@uxkm/vue/icon';`, needsEllipsis && `import { ref } from 'vue';`].filter(Boolean).join('\n');
  const helpers = key === 'separator' || key === 'size' ? `\nconst items = (last) => [{ label: '홈', href: '#' }, { label: '가이드', href: '#' }, { label: last, current: true }];` : '';
  const reactCode = needsEllipsis ? `${reactImports}\n\nexport function Example() { ${react[key]} }` : `${reactImports}${helpers}\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vueSetup = `${vueImports}${helpers}${needsEllipsis ? '\nconst expanded = ref(false);' : ''}`;
  const vueCode = `<script setup>\n${vueSetup}\n</script>\n<template>\n${vue[key]}\n</template>`;
  return [{ id: 'html', label: 'HTML', fileName: `Breadcrumb.html · ${key}`, code: html[key] }, { id: 'gulp', label: 'Gulp', fileName: `breadcrumb.njk · ${key}`, code: html[key] }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/breadcrumb · ${key}`, code: vueCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/breadcrumb · ${key}`, code: vueCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/breadcrumb · ${key}`, code: reactCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/breadcrumb · ${key}`, code: reactCode }];
}
export const breadcrumbFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;

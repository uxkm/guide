import type { FrameworkExample } from './FrameworkCode';
const names = ['basic', 'footer', 'custom', 'size', 'simple', 'block'] as const;
type Name = (typeof names)[number];

const defaultImage = `<div class="empty_image" data-slot="icon" aria-hidden="true"><svg class="icon" data-component="Icon" data-icon="inbox" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5"></path></svg></div>`;
const searchImage = `<div class="empty_image" data-slot="icon" aria-hidden="true"><svg class="icon" data-component="Icon" data-icon="search" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg></div>`;
const htmlEmpty = (description: string, classes = '', footer = '', image = defaultImage, descriptionContent = `<p>${description}</p>`) => `<div class="empty${classes ? ` ${classes}` : ''}" role="status">${image ? `\n  ${image}` : ''}\n  <div class="empty_desc" data-slot="description">${descriptionContent}</div>${footer ? `\n  <div class="empty_footer">${footer}</div>` : ''}\n</div>`;

const html: Record<Name, string> = {
  basic: htmlEmpty('데이터가 없습니다'),
  footer: htmlEmpty('등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.', '', '<button type="button" class="btn btn_filled color_primary btn_sm">프로젝트 만들기</button>'),
  custom: htmlEmpty('검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.', '', '', searchImage, '<strong>검색 결과가 없습니다</strong><span>다른 키워드로 다시 검색해 보세요.</span>'),
  size: [htmlEmpty('Small', 'empty_sm'), htmlEmpty('Medium (기본)'), htmlEmpty('Large', 'empty_lg')].join('\n\n'),
  simple: htmlEmpty('일정 없음', 'empty_sm empty_simple', '', ''),
  block: `<article class="card card_shadow" data-component="Card" style="max-width: var(--input-max-width); width: 100%;"><div class="card_header"><div class="card_header-main"><h3 class="card_title">알림 목록</h3></div></div><div class="card_body">${htmlEmpty('새 알림이 없습니다', 'empty_block')}</div></article>
<div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);"><table class="table table_bordered"><thead><tr><th scope="col">이름</th><th scope="col">상태</th><th scope="col">날짜</th></tr></thead><tbody><tr><td colspan="3" style="padding: 0; border: none;">${htmlEmpty('표시할 항목이 없습니다', 'empty_sm empty_simple empty_block', '', '')}</td></tr></tbody></table></div>`,
};

const react: Record<Name, string> = {
  basic: '<Empty description="데이터가 없습니다" />',
  footer: '<Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요." footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />} />',
  custom: '<Empty icon={<Icon name="search" />}><strong>검색 결과가 없습니다</strong><span>다른 키워드로 다시 검색해 보세요.</span></Empty>',
  size: '<Empty size="sm" description="Small" />\n<Empty description="Medium (기본)" />\n<Empty size="lg" description="Large" />',
  simple: '<Empty simple size="sm" description="일정 없음" />',
  block: `<Card title="알림 목록" variant="shadow" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}><CardBody><Empty block description="새 알림이 없습니다" /></CardBody></Card>
<div className="table_wrap" style={{ maxWidth: 'var(--input-max-width)', width: '100%', marginTop: 'var(--space-md)' }}><table className="table table_bordered"><thead><tr><th scope="col">이름</th><th scope="col">상태</th><th scope="col">날짜</th></tr></thead><tbody><tr><td colSpan={3} style={{ padding: 0, border: 'none' }}><Empty block simple size="sm" description="표시할 항목이 없습니다" /></td></tr></tbody></table></div>`,
};

const vue: Record<Name, string> = {
  basic: '<Empty description="데이터가 없습니다" />',
  footer: '<Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."><template #footer><Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" /></template></Empty>',
  custom: '<Empty><template #icon><Icon name="search" /></template><template #description><strong>검색 결과가 없습니다</strong><span>다른 키워드로 다시 검색해 보세요.</span></template></Empty>',
  size: '<Empty size="sm" description="Small" />\n<Empty description="Medium (기본)" />\n<Empty size="lg" description="Large" />',
  simple: '<Empty simple size="sm" description="일정 없음" />',
  block: react.block.replaceAll('className=', 'class=').replace('colSpan={3}', 'colspan="3"').replaceAll("style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}", 'style="max-width: var(--input-max-width); width: 100%;"').replace("style={{ maxWidth: 'var(--input-max-width)', width: '100%', marginTop: 'var(--space-md)' }}", 'style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);"').replace("style={{ padding: 0, border: 'none' }}", 'style="padding: 0; border: none;"'),
};

function examples(key: Name): FrameworkExample[] {
  const buttonReact = key === 'footer' ? "\nimport Button from '@uxkm/react/button';" : '';
  const buttonVue = key === 'footer' ? "\nimport Button from '@uxkm/vue/button';" : '';
  const iconReact = key === 'custom' ? "\nimport Icon from '@uxkm/react/icon';" : '';
  const iconVue = key === 'custom' ? "\nimport Icon from '@uxkm/vue/icon';" : '';
  const cardReact = key === 'block' ? "\nimport { Card, CardBody } from '@uxkm/react/card';" : '';
  const cardVue = key === 'block' ? "\nimport { Card, CardBody } from '@uxkm/vue/card';" : '';
  const reactCode = `import Empty from '@uxkm/react/empty';${buttonReact}${iconReact}${cardReact}\n\nexport function Example() { return <>${react[key]}</>; }`;
  const vueCode = `<script setup>\nimport Empty from '@uxkm/vue/empty';${buttonVue}${iconVue}${cardVue}\n</script>\n<template>\n${vue[key]}\n</template>`;
  const gulpCode = `{% from "../../basic/Icon/icon.njk" import icon %}\n${html[key].replaceAll(defaultImage, '<div class="empty_image" data-slot="icon" aria-hidden="true">{{ icon(\'inbox\') }}</div>').replaceAll(searchImage, '<div class="empty_image" data-slot="icon" aria-hidden="true">{{ icon(\'search\') }}</div>')}`;
  return [{ id: 'html', label: 'HTML', fileName: `Empty.html · ${key}`, code: html[key] }, { id: 'gulp', label: 'Gulp', fileName: `empty.njk · ${key}`, code: gulpCode }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/empty · ${key}`, code: vueCode }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/empty · ${key}`, code: vueCode }, { id: 'react', label: 'React', fileName: `@uxkm/react/empty · ${key}`, code: reactCode }, { id: 'next', label: 'Next', fileName: `@uxkm/react/empty · ${key}`, code: reactCode }];
}
export const emptyFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;

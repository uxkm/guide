import type { FrameworkExample } from './FrameworkCode';

const names = ['basic', 'multiple', 'flush', 'bordered', 'extra', 'custom', 'disabled', 'size', 'slide'] as const;
type Name = (typeof names)[number];
type Item = { label: string; content: string; open?: boolean; disabled?: boolean; extra?: string };
type Options = { variant?: string; size?: string; multiple?: boolean; effect?: string };

const sets: Record<Exclude<Name, 'size' | 'custom'>, { items: Item[]; options?: Options }> = {
  basic: {
    options: { variant: 'card' },
    items: [
      { label: '배송은 얼마나 걸리나요?', content: '평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다.' },
      { label: '교환·반품은 어떻게 하나요?', open: true, content: '수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다.' },
      { label: '해외 배송이 가능한가요?', content: '현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다.' },
    ],
  },
  multiple: {
    options: { multiple: true },
    items: [
      { label: '알림', open: true, content: '이메일·푸시 알림 수신 여부를 설정합니다.' },
      { label: '개인정보', open: true, content: '프로필 공개 범위와 데이터 다운로드를 관리합니다.' },
      { label: '보안', content: '비밀번호 변경과 2단계 인증을 설정합니다.' },
    ],
  },
  flush: {
    options: { variant: 'flush' },
    items: [
      { label: '일반', open: true, content: '언어, 시간대, 테마 등 기본 환경 설정입니다.' },
      { label: '접근성', content: '고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다.' },
      { label: '고급', content: '개발자 도구와 실험 기능을 켜거나 끕니다.' },
    ],
  },
  bordered: {
    options: { variant: 'bordered' },
    items: [
      { label: '알림', open: true, content: '이메일·푸시 알림 수신 여부를 설정합니다.' },
      { label: '개인정보', content: '프로필 공개 범위와 데이터 다운로드를 관리합니다.' },
      { label: '보안', content: '비밀번호 변경과 2단계 인증을 설정합니다.' },
    ],
  },
  extra: {
    items: [
      { label: '미해결 문의', open: true, content: '답변이 필요한 고객 문의 3건이 있습니다.', extra: '<span class="badge badge_count color_danger badge_sm">3</span>' },
      { label: '처리 완료', content: '최근 일주일간 완료된 문의 12건입니다.', extra: '지난 7일' },
    ],
  },
  disabled: {
    items: [
      { label: '공개 문서', open: true, content: '누구나 열람할 수 있는 가이드 문서입니다.' },
      { label: '팀 전용 (권한 없음)', disabled: true, content: '팀 멤버만 접근할 수 있는 내부 문서입니다.' },
    ],
  },
  slide: {
    options: { variant: 'card', effect: 'slide' },
    items: [
      { label: '배송 안내', open: true, content: '평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다.' },
      { label: '교환·반품', content: '수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.' },
      { label: '고객센터', content: '1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다.' },
    ],
  },
};

function htmlAccordion(key: string, items: Item[], options: Options = {}) {
  const variant = options.variant || 'bordered';
  const sizeClass = options.size && options.size !== 'md' ? ` accordion_${options.size}` : '';
  const attrs = `${options.multiple ? ' data-accordion-multiple' : ''}${options.effect ? ` data-effect="${options.effect}"` : ''}`;
  const markup = items.map((item, index) => {
    const triggerId = `accordion-${key}-trigger-${index + 1}`;
    const panelId = `accordion-${key}-panel-${index + 1}`;
    return `<div class="accordion_item${item.open ? ' is-open' : ''}${item.disabled ? ' is-disabled' : ''}">
  <div class="accordion_heading" role="heading" aria-level="3">
    <button type="button" class="btn btn_text accordion_trigger" id="${triggerId}" aria-expanded="${Boolean(item.open)}" aria-controls="${panelId}"${item.disabled ? ' disabled' : ''}>
      <span class="accordion_label">${item.label}</span>
      ${item.extra ? `<span class="accordion_extra">${item.extra}</span>\n      ` : ''}<svg class="accordion_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
    </button>
  </div>
  <div class="accordion_panel" id="${panelId}" role="region" aria-labelledby="${triggerId}"${item.open ? '' : ' hidden'}>
    <div class="accordion_content"><p>${item.content}</p></div>
  </div>
</div>`;
  }).join('\n');
  return `<div class="accordion accordion_${variant}${sizeClass}" data-component="Accordion" data-accordion${attrs}>
${markup}
</div>`;
}

function reactItem(item: Item) {
  const props = [`label="${item.label}"`, item.open && 'open', item.disabled && 'disabled', `content="${item.content}"`];
  if (item.extra) {
    const extra = item.extra.startsWith('<span')
      ? 'extra={<span className="badge badge_count color_danger badge_sm">3</span>}'
      : `extra="${item.extra}"`;
    props.push(extra);
  }
  return `<AccordionItem ${props.filter(Boolean).join(' ')} />`;
}

function reactAccordion(items: Item[], options: Options = {}) {
  const props = [options.variant && `variant="${options.variant}"`, options.size && `size="${options.size}"`, options.multiple && 'multiple', options.effect && `effect="${options.effect}"`].filter(Boolean).join(' ');
  return `<Accordion ${props}>\n  ${items.map(reactItem).join('\n  ')}\n</Accordion>`;
}

function vueItem(item: Item) {
  const props = [`label="${item.label}"`, item.open && 'open', item.disabled && 'disabled', `content="${item.content}"`].filter(Boolean).join(' ');
  if (!item.extra) return `<AccordionItem ${props} />`;
  const extra = item.extra.startsWith('<span') ? '<span class="badge badge_count color_danger badge_sm">3</span>' : item.extra;
  return `<AccordionItem ${props}>\n  <template #extra>${extra}</template>\n</AccordionItem>`;
}

function vueAccordion(items: Item[], options: Options = {}) {
  const props = [options.variant && `variant="${options.variant}"`, options.size && `size="${options.size}"`, options.multiple && 'multiple', options.effect && `effect="${options.effect}"`].filter(Boolean).join(' ');
  return `<Accordion ${props}>\n  ${items.map(vueItem).join('\n  ')}\n</Accordion>`;
}

const html: Record<Name, string> = {} as Record<Name, string>;
const react: Record<Name, string> = {} as Record<Name, string>;
const vue: Record<Name, string> = {} as Record<Name, string>;

names.forEach((name) => {
  if (name === 'custom') {
    html.custom = `<div class="accordion accordion_card" data-component="Accordion" data-accordion>
  <div class="accordion_item is-open">
    <div class="accordion_heading" role="heading" aria-level="3">
      <button type="button" class="btn btn_text accordion_trigger" id="accordion-custom-trigger-1" aria-expanded="true" aria-controls="accordion-custom-panel-1">
        <span class="accordion_label"><strong>프로 요금제</strong> <span class="tag tag_outline color_primary tag_sm">추천</span></span>
        <svg class="accordion_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
    </div>
    <div class="accordion_panel" id="accordion-custom-panel-1" role="region" aria-labelledby="accordion-custom-trigger-1">
      <div class="accordion_content"><div><p>제목과 본문에 원하는 마크업을 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div></div>
    </div>
  </div>
</div>`;
    react.custom = `<Accordion variant="card">
  <AccordionItem title={<><strong>프로 요금제</strong> <span className="tag tag_outline color_primary tag_sm">추천</span></>} open>
    <div><p>제목과 본문에 원하는 컴포넌트를 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>
  </AccordionItem>
</Accordion>`;
    vue.custom = `<Accordion variant="card">
  <AccordionItem open>
    <template #title><strong>프로 요금제</strong> <span class="tag tag_outline color_primary tag_sm">추천</span></template>
    <div><p>제목과 본문에 원하는 컴포넌트를 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>
  </AccordionItem>
</Accordion>`;
    return;
  }
  if (name === 'size') {
    const small = [{ label: 'Small', open: true, content: '작은 아코디언 — 좁은 패딩.' }];
    const large = [{ label: 'Large', open: true, content: '큰 아코디언 — 넓은 패딩과 큰 글자.' }];
    html.size = `${htmlAccordion('size-sm', small, { size: 'sm' })}\n\n${htmlAccordion('size-lg', large, { size: 'lg' })}`;
    react.size = `${reactAccordion(small, { size: 'sm' })}\n${reactAccordion(large, { size: 'lg' })}`;
    vue.size = `${vueAccordion(small, { size: 'sm' })}\n${vueAccordion(large, { size: 'lg' })}`;
    return;
  }
  const { items, options } = sets[name];
  html[name] = htmlAccordion(name, items, options);
  react[name] = reactAccordion(items, options);
  vue[name] = vueAccordion(items, options);
});

const gulpCustom = `{% set items = [{
  title: '<strong>프로 요금제</strong> <span class="tag tag_outline color_primary tag_sm">추천</span>',
  content: '<div><p>제목과 본문에 원하는 마크업을 자유롭게 배치할 수 있습니다.</p><ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul></div>',
  open: true
}] %}
{% set variant = 'card' %}
{% include 'components/miscellaneous/Accordion/accordion.njk' %}`;

function examples(name: Name): FrameworkExample[] {
  const reactCode = `import { Accordion, AccordionItem } from '@uxkm/react/accordion';\n\nexport function Example() {\n  return (\n    <>\n      ${react[name]}\n    </>\n  );\n}`;
  const vueCode = `<script setup>\nimport { Accordion, AccordionItem } from '@uxkm/vue/accordion';\n</script>\n\n<template>\n  ${vue[name]}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `Accordion.html · ${name}`, code: html[name] },
    { id: 'gulp', label: 'Gulp', fileName: `accordion.njk · ${name}`, code: name === 'custom' ? gulpCustom : html[name] },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/accordion · ${name}`, code: vueCode },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/accordion · ${name}`, code: vueCode },
    { id: 'react', label: 'React', fileName: `@uxkm/react/accordion · ${name}`, code: reactCode },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/accordion · ${name}`, code: reactCode },
  ];
}

export const accordionFrameworkExamples = Object.fromEntries(names.map((name) => [name, examples(name)])) as Record<Name, FrameworkExample[]>;

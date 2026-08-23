import type { FrameworkExample } from './FrameworkCode';

type Name = 'standalone' | 'basic' | 'accordion' | 'skin' | 'extra' | 'disabled' | 'size' | 'slide';
type Item = { label: string; content: string; open?: boolean; disabled?: boolean; extra?: string };
type Options = { variant?: string; size?: string; accordion?: boolean; effect?: string };

const names: Name[] = ['standalone', 'basic', 'accordion', 'skin', 'extra', 'disabled', 'size', 'slide'];
const chevron = '<svg class="collapse_icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>';

const basicItems: Item[] = [
  { label: '배송 정보', open: true, content: '평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.' },
  { label: '결제 수단', content: '신용카드, 계좌이체, 간편결제를 지원합니다.' },
  { label: '교환·반품 안내', content: '수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.' },
];
const accordionItems: Item[] = [
  { label: '알림 설정', open: true, content: '이메일·푸시·SMS 알림 수신 여부를 설정합니다.' },
  { label: '개인정보', content: '프로필 공개 범위와 데이터 다운로드를 관리합니다.' },
  { label: '보안', content: '비밀번호 변경과 2단계 인증을 설정합니다.' },
];

function htmlGroup(key: string, items: Item[], options: Options = {}) {
  const variant = options.variant ?? 'bordered';
  const size = options.size && options.size !== 'md' ? ` collapse_${options.size}` : '';
  const attrs = `${options.accordion ? ' data-collapse-accordion' : ''}${options.effect ? ` data-effect="${options.effect}"` : ''}`;
  const panels = items.map((item, index) => {
    const id = `collapse-${key}-${index + 1}`;
    return `  <div class="collapse_panel${item.open ? ' is-open' : ''}${item.disabled ? ' is-disabled' : ''}">
    <div class="collapse_header">
      <button type="button" class="btn btn_text collapse_trigger" id="${id}-trigger" aria-expanded="${item.open ? 'true' : 'false'}" aria-controls="${id}-body"${item.disabled ? ' disabled' : ''}>
        <span class="collapse_label">${item.label}</span>${item.extra ? `\n        <span class="collapse_extra">${item.extra}</span>` : ''}
        ${chevron}
      </button>
    </div>
    <div class="collapse_body" id="${id}-body" role="region" aria-labelledby="${id}-trigger"${item.open ? '' : ' hidden'}>
      <div class="collapse_content"><p>${item.content}</p></div>
    </div>
  </div>`;
  }).join('\n');
  return `<div class="collapse_group collapse_${variant}${size}" data-component="Collapse" data-collapse${attrs}>
${panels}
</div>`;
}

function reactGroup(items: Item[], options: Options = {}) {
  const props = [options.variant && `variant="${options.variant}"`, options.size && `size="${options.size}"`, options.accordion && 'accordion', options.effect && `effect="${options.effect}"`].filter(Boolean).join(' ');
  return `<Collapse${props ? ` ${props}` : ''}>
  ${items.map((item) => `<CollapsePanel label="${item.label}"${item.open ? ' open' : ''}${item.disabled ? ' disabled' : ''} content="${item.content}"${item.extra ? ` extra="${item.extra}"` : ''} />`).join('\n  ')}
</Collapse>`;
}

function vueGroup(items: Item[], options: Options = {}) {
  const props = [options.variant && `variant="${options.variant}"`, options.size && `size="${options.size}"`, options.accordion && 'accordion', options.effect && `effect="${options.effect}"`].filter(Boolean).join(' ');
  return `<Collapse${props ? ` ${props}` : ''}>
  ${items.map((item) => item.extra
    ? `<CollapsePanel label="${item.label}"${item.open ? ' open' : ''} content="${item.content}">\n    <template #extra>${item.extra}</template>\n  </CollapsePanel>`
    : `<CollapsePanel label="${item.label}"${item.open ? ' open' : ''}${item.disabled ? ' disabled' : ''} content="${item.content}" />`).join('\n  ')}
</Collapse>`;
}

const html: Record<Name, string> = {
  standalone: `<p>주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.</p>
<button type="button" class="btn btn_ghost btn_sm" data-collapse-trigger aria-expanded="false" aria-controls="collapse-order">
  <span class="btn_label">주문 상세 보기</span>
</button>
<div class="collapse" id="collapse-order" hidden style="margin-top: var(--space-sm)">
  <div class="collapse_inner"><p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p></div>
</div>`,
  basic: htmlGroup('basic', basicItems),
  accordion: htmlGroup('accordion', accordionItems, { accordion: true }),
  skin: `${htmlGroup('ghost', [{ label: 'Ghost', open: true, content: '배경만 강조하는 고스트 스킨입니다.' }], { variant: 'ghost' })}\n\n${htmlGroup('card', [{ label: 'Card', open: true, content: '패널마다 카드 형태로 분리됩니다.' }, { label: '두 번째 패널', content: '카드 스킨의 두 번째 패널입니다.' }], { variant: 'card' })}`,
  extra: htmlGroup('extra', [{ label: '진행 중', open: true, content: '현재 처리 중인 요청 3건입니다.', extra: '3건' }, { label: '처리 완료', content: '최근 일주일간 완료된 요청 12건입니다.', extra: '지난 7일' }]),
  disabled: htmlGroup('disabled', [{ label: '공개 문서', open: true, content: '누구나 열람할 수 있는 가이드 문서입니다.' }, { label: '팀 전용 (권한 없음)', disabled: true, content: '팀 멤버만 접근할 수 있는 내부 문서입니다.' }]),
  size: `${htmlGroup('small', [{ label: 'Small', open: true, content: '작은 콜랩스 — 좁은 패딩.' }], { size: 'sm' })}\n\n${htmlGroup('large', [{ label: 'Large', open: true, content: '큰 콜랩스 — 넓은 패딩과 큰 글자.' }], { size: 'lg' })}`,
  slide: htmlGroup('slide', basicItems.slice(0, 2), { effect: 'slide' }),
};

const react: Record<Name, string> = {
  standalone: `<CollapseExternal triggerLabel="주문 상세 보기" lead={<p>주문이 접수되었습니다.</p>}>
  <p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p>
</CollapseExternal>`,
  basic: reactGroup(basicItems),
  accordion: reactGroup(accordionItems, { accordion: true }),
  skin: `${reactGroup([{ label: 'Ghost', open: true, content: '배경만 강조하는 고스트 스킨입니다.' }], { variant: 'ghost' })}\n${reactGroup([{ label: 'Card', open: true, content: '패널마다 카드 형태로 분리됩니다.' }, { label: '두 번째 패널', content: '카드 스킨의 두 번째 패널입니다.' }], { variant: 'card' })}`,
  extra: reactGroup([{ label: '진행 중', open: true, content: '현재 처리 중인 요청 3건입니다.', extra: '3건' }, { label: '처리 완료', content: '최근 일주일간 완료된 요청 12건입니다.', extra: '지난 7일' }]),
  disabled: reactGroup([{ label: '공개 문서', open: true, content: '누구나 열람할 수 있는 가이드 문서입니다.' }, { label: '팀 전용 (권한 없음)', disabled: true, content: '팀 멤버만 접근할 수 있는 내부 문서입니다.' }]),
  size: `${reactGroup([{ label: 'Small', open: true, content: '작은 콜랩스 — 좁은 패딩.' }], { size: 'sm' })}\n${reactGroup([{ label: 'Large', open: true, content: '큰 콜랩스 — 넓은 패딩과 큰 글자.' }], { size: 'lg' })}`,
  slide: `${reactGroup(basicItems.slice(0, 2), { effect: 'slide' })}\n<CollapseExternal triggerLabel="상세 보기" effect="slide"><p>외부 영역도 슬라이드됩니다.</p></CollapseExternal>`,
};

const vue: Record<Name, string> = {
  standalone: `<CollapseExternal trigger-label="주문 상세 보기">
  <template #lead><p>주문이 접수되었습니다.</p></template>
  <p>주문번호 ORD-2024-0815 · 결제금액 ₩42,000</p>
</CollapseExternal>`,
  basic: vueGroup(basicItems),
  accordion: vueGroup(accordionItems, { accordion: true }),
  skin: `${vueGroup([{ label: 'Ghost', open: true, content: '배경만 강조하는 고스트 스킨입니다.' }], { variant: 'ghost' })}\n${vueGroup([{ label: 'Card', open: true, content: '패널마다 카드 형태로 분리됩니다.' }, { label: '두 번째 패널', content: '카드 스킨의 두 번째 패널입니다.' }], { variant: 'card' })}`,
  extra: vueGroup([{ label: '진행 중', open: true, content: '현재 처리 중인 요청 3건입니다.', extra: '3건' }, { label: '처리 완료', content: '최근 일주일간 완료된 요청 12건입니다.', extra: '지난 7일' }]),
  disabled: vueGroup([{ label: '공개 문서', open: true, content: '누구나 열람할 수 있는 가이드 문서입니다.' }, { label: '팀 전용 (권한 없음)', disabled: true, content: '팀 멤버만 접근할 수 있는 내부 문서입니다.' }]),
  size: `${vueGroup([{ label: 'Small', open: true, content: '작은 콜랩스 — 좁은 패딩.' }], { size: 'sm' })}\n${vueGroup([{ label: 'Large', open: true, content: '큰 콜랩스 — 넓은 패딩과 큰 글자.' }], { size: 'lg' })}`,
  slide: `${vueGroup(basicItems.slice(0, 2), { effect: 'slide' })}\n<CollapseExternal trigger-label="상세 보기" effect="slide"><p>외부 영역도 슬라이드됩니다.</p></CollapseExternal>`,
};

function examples(name: Name): FrameworkExample[] {
  const reactCode = `import { Collapse, CollapseExternal, CollapsePanel } from '@uxkm/react/collapse';\n\nexport function Example() {\n  return (<>\n    ${react[name]}\n  </>);\n}`;
  const vueCode = `<script setup>\nimport { Collapse, CollapseExternal, CollapsePanel } from '@uxkm/vue/collapse';\n</script>\n\n<template>\n  ${vue[name]}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `Collapse.html · ${name}`, code: html[name] },
    { id: 'gulp', label: 'Gulp', fileName: `collapse.njk · ${name}`, code: html[name] },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/collapse · ${name}`, code: vueCode },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/collapse · ${name}`, code: vueCode },
    { id: 'react', label: 'React', fileName: `@uxkm/react/collapse · ${name}`, code: reactCode },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/collapse · ${name}`, code: reactCode },
  ];
}

export const collapseFrameworkExamples = Object.fromEntries(names.map((name) => [name, examples(name)])) as Record<Name, FrameworkExample[]>;

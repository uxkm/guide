import type { FrameworkExample } from './FrameworkCode';

const names = ['basic', 'noLabel', 'open', 'size', 'offset', 'title', 'footer', 'hover', 'trigger', 'placement', 'form', 'arrowAnchor', 'noArrow'] as const;
type Name = (typeof names)[number];

const examplesByName: Record<Name, { label: string; heading?: string; body: string; props?: string; button?: string }> = {
  basic: { label: 'Popover 열기', heading: '안내', body: '트리거를 클릭하면 이 패널이 표시됩니다.' },
  noLabel: { label: '라벨 없음', body: '짧은 안내 문구만 필요할 때 사용합니다.' },
  open: { label: '열림', heading: '열린 Popover', body: '정적 데모용 열린 상태입니다.', props: 'open', button: 'variant="filled" color="primary"' },
  size: { label: 'Small', heading: '작은 Popover', body: '작은 패널입니다.', props: 'size="sm"', button: 'size="sm"' },
  offset: { label: 'lg', heading: 'lg', body: '넓은 간격', props: 'offset="lg"', button: 'size="sm"' },
  title: { label: '도움말', heading: '배송 안내', body: '평일 오후 2시 이전 주문은 당일 출고됩니다.', props: 'title="배송 안내"', button: 'variant="ghost"' },
  footer: { label: '삭제 확인', heading: '항목 삭제', body: '이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?', props: 'title="항목 삭제"' },
  hover: { label: '에스크로', heading: '에스크로 설명', body: '구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.', props: 'trigger="hover"' },
  trigger: { label: 'Button', heading: 'Button 트리거', body: '버튼 트리거 예시입니다.', button: 'variant="filled" color="primary"' },
  placement: { label: '위', heading: '위쪽 가운데 배치', body: '트리거 위 · 가운데', props: 'placement="top-center"', button: 'size="sm"' },
  form: { label: '메모 추가', heading: '빠른 메모', body: '내용', props: 'title="빠른 메모"' },
  arrowAnchor: { label: 'S', heading: 'target', body: '화살표가 트리거 중앙을 가리킵니다.', props: 'arrowAnchor="target"', button: 'size="sm"' },
  noArrow: { label: '화살표 없음', heading: '화살표 없는 Popover', body: '화살표가 표시되지 않는 패널입니다.', props: 'noArrow', button: 'variant="ghost"' },
};

function reactCode(key: Name) {
  const item = examplesByName[key];
  if (key === 'hover') return `import Popover from '@uxkm/react/popover';\nimport Link from '@uxkm/react/link';\n\nexport function HoverExample() {\n  return (\n    <p>결제 시 <Popover trigger="hover" panelLabel="에스크로 설명" triggerContent={<Link label="에스크로" />}>구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</Popover> 서비스를 이용할 수 있습니다.</p>\n  );\n}`;
  if (key === 'form') return `import Popover from '@uxkm/react/popover';\nimport Button from '@uxkm/react/button';\nimport Textarea from '@uxkm/react/textarea';\n\nexport function FormExample() {\n  return (\n    <Popover title="빠른 메모" triggerContent={<Button variant="outline" label="메모 추가" />} footer={<><Button variant="ghost" size="sm" label="취소" /><Button color="primary" size="sm" label="저장" /></>}>\n      <div className="form_field"><label className="form_label" htmlFor="popover-memo-input">내용</label><Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" /></div>\n    </Popover>\n  );\n}`;
  const headingProp = item.props?.includes('title=') ? '' : item.heading ? `panelLabel="${item.heading}" ` : '';
  const footer = key === 'footer' ? ' footer={<><Button variant="ghost" size="sm" label="취소" /><Button color="danger" size="sm" label="삭제" /></>}' : '';
  return `import Popover from '@uxkm/react/popover';\nimport Button from '@uxkm/react/button';\n\nexport function ${key[0].toUpperCase() + key.slice(1)}Example() {\n  return (\n    <Popover ${item.props ? `${item.props} ` : ''}${headingProp}triggerContent={<Button variant="outline" ${item.button || ''} label="${item.label}" />}${footer}>\n      <p>${item.body}</p>\n    </Popover>\n  );\n}`;
}

function vueCode(key: Name) {
  const item = examplesByName[key];
  if (key === 'hover') return `<script setup>\nimport Popover from '@uxkm/vue/popover';\nimport Link from '@uxkm/vue/link';\n</script>\n\n<template>\n  <p>결제 시 <Popover trigger="hover" panel-label="에스크로 설명"><template #trigger><Link label="에스크로" /></template>구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</Popover> 서비스를 이용할 수 있습니다.</p>\n</template>`;
  if (key === 'form') return `<script setup>\nimport Popover from '@uxkm/vue/popover';\nimport Button from '@uxkm/vue/button';\nimport Textarea from '@uxkm/vue/textarea';\n</script>\n\n<template>\n  <Popover title="빠른 메모">\n    <template #trigger><Button variant="outline" label="메모 추가" /></template>\n    <div class="form_field"><label class="form_label" for="popover-memo-input">내용</label><Textarea id="popover-memo-input" :rows="3" placeholder="메모를 입력하세요" /></div>\n    <template #footer><Button variant="ghost" size="sm" label="취소" /><Button color="primary" size="sm" label="저장" /></template>\n  </Popover>\n</template>`;
  const props = (item.props || '').replace('defaultOpen', 'default-open').replace('arrowAnchor', 'arrow-anchor').replace('noArrow', 'no-arrow');
  const headingProp = props.includes('title=') ? '' : item.heading ? `panel-label="${item.heading}" ` : '';
  const footer = key === 'footer' ? '\n    <template #footer><Button variant="ghost" size="sm" label="취소" /><Button color="danger" size="sm" label="삭제" /></template>' : '';
  return `<script setup>\nimport Popover from '@uxkm/vue/popover';\nimport Button from '@uxkm/vue/button';\n</script>\n\n<template>\n  <Popover ${props ? `${props} ` : ''}${headingProp.trim()}>\n    <template #trigger><Button variant="outline" ${item.button || ''} label="${item.label}" /></template>\n    <p>${item.body}</p>${footer}\n  </Popover>\n</template>`;
}

function htmlCode(key: Name) {
  const item = examplesByName[key];
  const classes = ['popover', key === 'open' && 'is-open', key === 'size' && 'popover_sm', key === 'offset' && 'popover_offset-lg', key === 'placement' && 'popover_placement-top-center', key === 'arrowAnchor' && 'popover_arrow-anchor-target', key === 'noArrow' && 'popover_no-arrow'].filter(Boolean).join(' ');
  const footer = key === 'footer' ? '\n    <div class="popover_footer"><button class="btn btn_ghost btn_sm">취소</button><button class="btn btn_filled color_danger btn_sm">삭제</button></div>' : key === 'form' ? '\n    <div class="popover_footer"><button class="btn btn_ghost btn_sm">취소</button><button class="btn btn_filled color_primary btn_sm">저장</button></div>' : '';
  const body = key === 'form' ? '<label class="form_label" for="popover-memo-input">내용</label><textarea id="popover-memo-input" class="textarea" rows="3" placeholder="메모를 입력하세요"></textarea>' : `<p>${item.body}</p>`;
  return `<div class="${classes}" data-popover${key === 'hover' ? ' data-popover-trigger="hover"' : ''}>\n  <button class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="${key === 'open'}">${item.label}</button>\n  <div class="popover_panel" role="dialog"${item.heading ? ` aria-label="${item.heading}"` : ''}>\n    ${key === 'noArrow' ? '' : '<span class="popover_arrow" aria-hidden="true"></span>'}\n    ${item.heading ? `<div class="popover_title">${item.heading}</div>` : ''}\n    <div class="popover_body">${body}</div>${footer}\n  </div>\n</div>`;
}

function examples(key: Name): FrameworkExample[] {
  const html = htmlCode(key); const vue = vueCode(key); const react = reactCode(key);
  return [{ id: 'html', label: 'HTML', fileName: `Popover.html · ${key}`, code: html }, { id: 'gulp', label: 'Gulp', fileName: `popover.njk · ${key}`, code: html }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/popover · ${key}`, code: vue }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/popover · ${key}`, code: vue }, { id: 'react', label: 'React', fileName: `@uxkm/react/popover · ${key}`, code: react }, { id: 'next', label: 'Next', fileName: `@uxkm/react/popover · ${key}`, code: react }];
}

export const popoverFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;

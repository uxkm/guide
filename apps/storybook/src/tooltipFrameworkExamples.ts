import type { FrameworkExample } from './FrameworkCode';

const names = ['basic', 'slot', 'open', 'size', 'offset', 'inline', 'trigger', 'click', 'placement', 'inverse', 'disabled', 'arrowAnchor', 'noArrow'] as const;
type Name = (typeof names)[number];
const data: Record<Name, { label: string; content: string; props?: string; button?: string }> = {
  basic: { label: '마우스 오버', content: '짧은 도움말 텍스트입니다.' },
  slot: { label: '슬롯 예시', content: '짧은 도움말 텍스트입니다.' },
  open: { label: '열림', content: '정적 데모용 열린 상태입니다.', props: 'open', button: 'variant="filled" color="primary"' },
  size: { label: 'Small', content: '작은 말풍선', props: 'size="sm"', button: 'variant="ghost" size="sm"' },
  offset: { label: 'lg', content: '넓은 간격', props: 'offset="lg"', button: 'variant="ghost" size="sm"' },
  inline: { label: '에스크로', content: '구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.' },
  trigger: { label: 'Button', content: '버튼 트리거 예시입니다.', button: 'variant="filled" color="primary"' },
  click: { label: '클릭하여 보기', content: '클릭으로 열고 닫는 Tooltip입니다.', props: 'trigger="click"' },
  placement: { label: '위', content: '트리거 위', props: 'placement="top"', button: 'size="sm"' },
  inverse: { label: '역색 Tooltip', content: '어두운 배경의 말풍선입니다.', props: 'inverse', button: 'variant="ghost"' },
  disabled: { label: '제출 불가', content: '필수 항목을 모두 입력해야 제출할 수 있습니다.' },
  arrowAnchor: { label: 'S', content: '화살표가 트리거 중앙을 가리킵니다.', props: 'arrowAnchor="target"', button: 'variant="ghost" size="sm"' },
  noArrow: { label: '화살표 없음', content: '화살표가 표시되지 않는 말풍선입니다.', props: 'noArrow', button: 'variant="ghost"' },
};

function reactCode(key: Name) {
  const item = data[key];
  if (key === 'slot') return `import Tooltip from '@uxkm/react/tooltip';\nimport Button from '@uxkm/react/button';\n\nexport function SlotExample() {\n  return <Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>짧은 도움말 텍스트입니다.</Tooltip>;\n}`;
  if (key === 'inline') return `import Tooltip from '@uxkm/react/tooltip';\nimport Link from '@uxkm/react/link';\n\nexport function InlineExample() {\n  return <p>결제 시 <Tooltip content="${item.content}" triggerContent={<Link label="에스크로" />} /> 서비스를 이용할 수 있습니다.</p>;\n}`;
  if (key === 'disabled') return `import Tooltip from '@uxkm/react/tooltip';\nimport Button from '@uxkm/react/button';\n\nexport function DisabledExample() {\n  return <Tooltip content="${item.content}" triggerContent={<span tabIndex={0}><Button label="제출 불가" disabled /></span>} />;\n}`;
  return `import Tooltip from '@uxkm/react/tooltip';\nimport Button from '@uxkm/react/button';\n\nexport function ${key[0].toUpperCase() + key.slice(1)}Example() {\n  return <Tooltip ${item.props ? `${item.props} ` : ''}content="${item.content}" triggerContent={<Button ${item.button || 'variant="outline"'} label="${item.label}" />} />;\n}`;
}

function vueCode(key: Name) {
  const item = data[key];
  const props = (item.props || '').replace('arrowAnchor', 'arrow-anchor').replace('noArrow', 'no-arrow');
  if (key === 'slot') return `<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Button from '@uxkm/vue/button';\n</script>\n<template><Tooltip><template #trigger><Button variant="outline" label="슬롯 예시" /></template>짧은 도움말 텍스트입니다.</Tooltip></template>`;
  if (key === 'inline') return `<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Link from '@uxkm/vue/link';\n</script>\n<template><p>결제 시 <Tooltip content="${item.content}"><template #trigger><Link label="에스크로" /></template></Tooltip> 서비스를 이용할 수 있습니다.</p></template>`;
  if (key === 'disabled') return `<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Button from '@uxkm/vue/button';\n</script>\n<template><Tooltip content="${item.content}"><template #trigger><span tabindex="0"><Button variant="filled" color="primary" label="제출 불가" disabled /></span></template></Tooltip></template>`;
  return `<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Button from '@uxkm/vue/button';\n</script>\n<template><Tooltip ${props ? `${props} ` : ''}content="${item.content}"><template #trigger><Button ${item.button || 'variant="outline"'} label="${item.label}" /></template></Tooltip></template>`;
}

function htmlCode(key: Name) {
  const item = data[key];
  const classes = ['tooltip', key === 'open' && 'is-open', key === 'size' && 'tooltip_sm', key === 'offset' && 'tooltip_offset-lg', key === 'placement' && 'tooltip_placement-top', key === 'inverse' && 'tooltip_inverse', key === 'arrowAnchor' && 'tooltip_arrow-anchor-target', key === 'noArrow' && 'tooltip_no-arrow'].filter(Boolean).join(' ');
  return `<span class="${classes}" data-tooltip${key === 'click' ? ' data-tooltip-trigger="click"' : ''}>\n  <button class="btn btn_outline tooltip_trigger" aria-describedby="tooltip-${key}">${item.label}</button>\n  <span class="tooltip_bubble" id="tooltip-${key}" role="tooltip" hidden>${key === 'noArrow' ? '' : '<span class="tooltip_arrow" aria-hidden="true"></span>'}${item.content}</span>\n</span>`;
}

const gulpImports = `{% from "components/feedback/Tooltip/tooltip.njk" import tooltip %}
{% from "components/basic/Button/button.njk" import button %}`;

function gulpCode(key: Name) {
  const item = data[key];
  if (key === 'slot') return `${gulpImports}

{% set triggerContent %}
  {{ button(variant='outline', label='슬롯 예시') }}
{% endset %}

{% call tooltip(
  id='tooltip-slot',
  triggerContent=triggerContent
) %}
  짧은 도움말 텍스트입니다.
{% endcall %}`;
  if (key === 'inline') return `{% from "components/feedback/Tooltip/tooltip.njk" import tooltip %}
{% from "components/basic/Link/link.njk" import link %}

{% set escrowLink %}
  {{ link(label='에스크로') }}
{% endset %}

<p>
  결제 시
  {% call tooltip(
    id='tooltip-inline',
    triggerContent=escrowLink
  ) %}
    구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
  {% endcall %}
  서비스를 이용할 수 있습니다.
</p>`;
  if (key === 'disabled') return `${gulpImports}

{% set disabledButton %}
  {{ button(label='제출 불가', disabled=true) }}
{% endset %}

{% call tooltip(
  id='tooltip-disabled',
  triggerContent=disabledButton,
  triggerFocusable=true
) %}
  필수 항목을 모두 입력해야 제출할 수 있습니다.
{% endcall %}`;

  const options = [
    `id='tooltip-${key}'`,
    `triggerLabel='${item.label}'`,
    key === 'open' && 'open=true',
    key === 'size' && "size='sm'",
    key === 'offset' && "offset='lg'",
    key === 'click' && "trigger='click'",
    key === 'placement' && "placement='top'",
    key === 'inverse' && 'inverse=true',
    key === 'arrowAnchor' && "arrowAnchor='target'",
    key === 'noArrow' && 'noArrow=true',
    key === 'open' || key === 'trigger' ? "triggerVariant='filled'" : '',
    key === 'size' || key === 'offset' || key === 'arrowAnchor' ? "triggerVariant='ghost'" : '',
    key === 'size' || key === 'offset' || key === 'placement' || key === 'arrowAnchor' ? "triggerSize='sm'" : '',
    key === 'inverse' || key === 'noArrow' ? "triggerVariant='ghost'" : '',
  ].filter(Boolean);
  return `${gulpImports}

{% call tooltip(
  ${options.join(',\n  ')}
) %}
  ${item.content}
{% endcall %}`;
}

function examples(key: Name): FrameworkExample[] {
  const html = htmlCode(key); const vue = vueCode(key); const react = reactCode(key);
  return [{ id: 'html', label: 'HTML', fileName: `Tooltip.html · ${key}`, code: html }, { id: 'gulp', label: 'Gulp', fileName: `tooltip.njk · ${key}`, code: gulpCode(key) }, { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/tooltip · ${key}`, code: vue }, { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/tooltip · ${key}`, code: vue }, { id: 'react', label: 'React', fileName: `@uxkm/react/tooltip · ${key}`, code: react }, { id: 'next', label: 'Next', fileName: `@uxkm/react/tooltip · ${key}`, code: react }];
}

export const tooltipFrameworkExamples = Object.fromEntries(names.map((key) => [key, examples(key)])) as Record<Name, FrameworkExample[]>;

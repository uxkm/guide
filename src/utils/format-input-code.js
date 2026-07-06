import {
  appendNamedSlot,
  openComponentTag,
  serializeDomChildren,
} from '@/utils/format-slot-component-code';

/** prefix/suffix 슬롯 — input_group 래퍼에서 DOM을 읽어 Input 코드로 변환 */
export function formatInputGroupCode(props, attrs = {}, el, registry) {
  const prefixHost = el.querySelector('[data-demo-slot="prefix"]');
  const suffixHost = el.querySelector('[data-demo-slot="suffix"]');
  const hasPrefix = Boolean(prefixHost?.textContent?.trim());
  const hasSuffix = Boolean(suffixHost?.textContent?.trim());

  if (!hasPrefix && !hasSuffix) {
    return openComponentTag('Input', props, attrs, {
      defaults: { size: 'md', type: 'text' },
      booleanProps: new Set(['disabled', 'error', 'block']),
      skipProps: ['modelValue'],
    });
  }

  const lines = [
    `${openComponentTag('Input', props, attrs, {
      defaults: { size: 'md', type: 'text' },
      booleanProps: new Set(['disabled', 'error', 'block']),
      skipProps: ['modelValue'],
    })}>`,
  ];

  if (hasPrefix) {
    appendNamedSlot(lines, 'prefix', serializeDomChildren(prefixHost, registry, 2));
  }

  if (hasSuffix) {
    appendNamedSlot(lines, 'suffix', serializeDomChildren(suffixHost, registry, 2));
  }

  lines.push('</Input>');
  return lines.join('\n');
}

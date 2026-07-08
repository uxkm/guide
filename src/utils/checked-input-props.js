import { normalizeDomProps } from '@/utils/normalize-dom-props';

/**
 * 데모용 폼 필드 — onChange 없이 checked만 넘기면 React 경고가 납니다.
 * 제어 컴포넌트가 아니면 defaultChecked로 초기값만 지정합니다.
 */
export function getCheckedInputProps(checked, inputProps = {}) {
  const { onChange, checked: checkedProp, defaultChecked, ...rest } = normalizeDomProps(inputProps);

  if (onChange) {
    return {
      ...(checked !== undefined ? { checked: Boolean(checked) } : {}),
      onChange,
      ...rest,
    };
  }

  if (checked !== undefined) {
    return {
      defaultChecked: Boolean(checked),
      ...rest,
    };
  }

  return rest;
}

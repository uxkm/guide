/**
 * Textarea 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useId, useMemo, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_RESIZE = new Set(['none', 'vertical', 'horizontal', 'both']);

export function Textarea({
  size = 'md',
  resize = 'none',
  disabled = false,
  error = false,
  fit = false,
  showCount = false,
  value,
  defaultValue = '',
  className = '',
  wrapperClassName = '',
  onChange,
  maxLength,
  readOnly,
  ...props
}) {
  // 고유 카운터 id와 제어·비제어 현재 값을 계산합니다.
  const generatedId = useId().replace(/:/g, '');
  const controlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(() => value ?? defaultValue ?? '');
  const currentValue = controlled ? (value ?? '') : innerValue;
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedResize = VALID_RESIZE.has(resize) ? resize : 'none';
  const countId = `${props.id || `textarea-${generatedId}`}-count`;
  const describedBy =
    [props['aria-describedby'], showCount && countId].filter(Boolean).join(' ') || undefined;
  const count = String(currentValue).length;
  const hasLimit = Number.isFinite(Number(maxLength)) && Number(maxLength) >= 0;

  // 크기, resize 방향, 제한 너비와 오류 상태를 공통 클래스로 변환합니다.
  const classes = useMemo(
    () =>
      [
        'textarea',
        resolvedSize === 'sm' && 'textarea_sm',
        resolvedSize === 'lg' && 'textarea_lg',
        `textarea_resize_${resolvedResize}`,
        !showCount && fit && 'textarea_fit',
        error && 'is-error',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [resolvedSize, resolvedResize, showCount, fit, error, className],
  );

  function handleChange(event) {
    // 비제어 상태를 갱신한 뒤 외부 change 핸들러를 호출합니다.
    if (!controlled) setInnerValue(event.target.value);
    onChange?.(event);
  }

  const control = (
    <textarea
      {...props}
      className={classes}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={maxLength}
      value={currentValue}
      aria-invalid={error ? 'true' : props['aria-invalid']}
      aria-describedby={describedBy}
      data-component="Textarea"
      onChange={handleChange}
    />
  );

  // 카운터가 필요 없으면 불필요한 wrapper 없이 textarea를 직접 반환합니다.
  if (!showCount) return control;

  return (
    <div
      className={[
        'textarea_wrap',
        'textarea_show-count',
        fit && 'textarea_wrap_fit',
        wrapperClassName,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {control}
      <span
        id={countId}
        className={['textarea_count', hasLimit && count >= Number(maxLength) && 'is-limit']
          .filter(Boolean)
          .join(' ')}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* 시각용 축약 표기와 스크린 리더용 자연어 상태 문구를 분리합니다. */}
        <span className="textarea_count_visual" aria-hidden="true">
          {count}
          {hasLimit ? `/${maxLength}` : ''}
        </span>
        <span className="textarea_count_announcer">
          {count}자 입력{hasLimit ? `, 최대 ${maxLength}자` : ''}
        </span>
      </span>
    </div>
  );
}

export default Textarea;

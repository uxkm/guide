'use client';

import { Children, cloneElement, useEffect, useId, useState } from 'react';
import { cn } from '@/utils/cn.js';

function formatCountVisual(current, max) {
  return max > 0 ? `${current}/${max}` : String(current);
}

function formatCountAnnounce(current, max) {
  if (max <= 0) return `${current}자 입력`;

  const limitMessage = current >= max ? ', 글자 수 제한에 도달했습니다' : '';
  return `${current}자 입력, 최대 ${max}자${limitMessage}`;
}

function getMaxLength({ maxLength, maxlength }) {
  return Number(maxLength ?? maxlength ?? 0);
}

function mergeDescribedBy(describedBy, countId) {
  return Array.from(new Set(`${describedBy ?? ''} ${countId}`.trim().split(/\s+/))).join(' ');
}

export default function TextareaShowCount({
  as: Tag = 'div',
  className,
  countId,
  children,
  ...rest
}) {
  const generatedId = useId();
  const child = Children.only(children);
  const childProps = child.props ?? {};
  const { value: valueProp, defaultValue, onChange } = childProps;
  const resolvedCountId = countId ?? `${childProps.id ?? generatedId}-count`;
  const max = getMaxLength(childProps);
  const isControlled = valueProp !== undefined;

  const [textValue, setTextValue] = useState(() => valueProp ?? defaultValue ?? '');

  useEffect(() => {
    if (isControlled) {
      setTextValue(valueProp ?? '');
    }
  }, [isControlled, valueProp]);

  const current = String(textValue).length;
  const isLimit = max > 0 && current >= max;

  function handleChange(event) {
    if (!isControlled) {
      setTextValue(event.target.value);
    }
    onChange?.(event);
  }

  const textareaElement = cloneElement(child, {
    'aria-describedby': mergeDescribedBy(
      childProps['aria-describedby'] ?? childProps.ariaDescribedby,
      resolvedCountId,
    ),
    onChange: handleChange,
  });

  return (
    <Tag className={cn('textarea_wrap', 'textarea_show-count', className)} {...rest}>
      {textareaElement}
      <span
        className={cn('textarea_count', isLimit && 'is-limit')}
        id={resolvedCountId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="textarea_count_visual" aria-hidden="true">
          {formatCountVisual(current, max)}
        </span>
        <span className="textarea_count_announcer">
          {formatCountAnnounce(current, max)}
        </span>
      </span>
    </Tag>
  );
}

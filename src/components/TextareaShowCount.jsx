import { Children, cloneElement, useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

function formatCountVisual(current, max) {
  if (max > 0) {
    return `${current}/${max}`;
  }

  return String(current);
}

function formatCountAnnounce(current, max) {
  if (max > 0) {
    let message = `${current}자 입력, 최대 ${max}자`;

    if (current >= max) {
      message += ', 글자 수 제한에 도달했습니다';
    }

    return message;
  }

  return `${current}자 입력`;
}

function getInitialValue({ modelValue, defaultValue }) {
  return modelValue ?? defaultValue ?? '';
}

function getMaxLength({ maxLength, maxlength }) {
  return Number(maxLength ?? maxlength ?? 0);
}

export default function TextareaShowCount({ as: Tag = 'div', className, countId, children, ...rest }) {
  const child = Children.only(children);
  const childProps = child.props ?? {};
  const { modelValue, defaultValue, onUpdateModelValue } = childProps;

  const max = getMaxLength(childProps);
  const isExternallyControlled = modelValue !== undefined;
  const [value, setValue] = useState(() => getInitialValue(childProps));

  useEffect(() => {
    if (isExternallyControlled) {
      setValue(modelValue ?? '');
    }
  }, [isExternallyControlled, modelValue]);

  const current = value.length;
  const isLimit = max > 0 && current >= max;

  function handleUpdate(next) {
    setValue(next);
    onUpdateModelValue?.(next);
  }

  const textareaElement = cloneElement(child, {
    onUpdateModelValue: handleUpdate,
  });

  return (
    <Tag className={cn('textarea_wrap', 'textarea_show-count', className)} {...rest}>
      {textareaElement}
      <span
        className={cn('textarea_count', isLimit && 'is-limit')}
        id={countId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="textarea_count_visual" aria-hidden={true}>
          {formatCountVisual(current, max)}
        </span>
        <span className="textarea_count_announcer">{formatCountAnnounce(current, max)}</span>
      </span>
    </Tag>
  );
}

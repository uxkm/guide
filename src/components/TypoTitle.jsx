import { createElement, useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('TypoTitle', {
  defaults: { level: 1 },
  selfClosing: false,
});

export default function TypoTitle({
  level = 1,
  color,
  label,
  children,
  className,
  ...rest
}) {
  const props = { level, color, label };
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label }),
    [children, label],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootTag = `h${level}`;
  const rootClass = cn(`typo_title-${level}`, color && `color_${color}`, className);

  return createElement(rootTag, { ref: rootRef, className: rootClass, ...rest }, children ?? label);
}

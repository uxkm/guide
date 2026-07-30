import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useMemo,
  useRef,
} from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export const StepsContext = createContext(null);

const VALID_DIRECTIONS = new Set(['horizontal', 'vertical']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_ALIGNS = new Set(['', 'center']);

const formatCode = createComponentFormatter('Steps', {
  defaults: { direction: 'horizontal', size: 'md' },
  booleanProps: new Set(['dot', 'iconStyle', 'navigable']),
  selfClosing: false,
});

export default function Steps({
  current,
  direction = 'horizontal',
  size = 'md',
  dot,
  iconStyle,
  navigable,
  align = '',
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedDirection = VALID_DIRECTIONS.has(direction) ? direction : 'horizontal';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedAlign = VALID_ALIGNS.has(align) ? align : '';

  useComponentDemoCode(
    formatCode,
    {
      current,
      direction: resolvedDirection,
      size: resolvedSize,
      dot,
      iconStyle,
      navigable,
      align: resolvedAlign || undefined,
      ariaLabel,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['steps'];
    if (resolvedDirection === 'vertical') classes.push('steps_vertical');
    if (resolvedSize === 'sm') classes.push('steps_sm');
    if (resolvedSize === 'lg') classes.push('steps_lg');
    if (dot) classes.push('steps_dot');
    if (iconStyle) classes.push('steps_icon-style');
    if (navigable) classes.push('steps_navigable');
    if (resolvedAlign === 'center') classes.push('steps_align-center');
    return classes;
  }, [resolvedDirection, resolvedSize, dot, iconStyle, navigable, resolvedAlign]);

  const contextValue = useMemo(() => ({ navigable: Boolean(navigable) }), [navigable]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const childItems = Children.toArray(children).filter(isValidElement);

  return (
    <StepsContext.Provider value={contextValue}>
      <ol
        ref={rootRef}
        className={cn(rootClass, className)}
        aria-label={ariaLabel}
        {...domRest}
      >
        {childItems.map((child, i) =>
          cloneElement(child, {
            index: child.props.index ?? i + 1,
            isLast: i === childItems.length - 1,
          }),
        )}
      </ol>
    </StepsContext.Provider>
  );
}

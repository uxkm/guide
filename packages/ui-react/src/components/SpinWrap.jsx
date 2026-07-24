import { useMemo, useRef } from 'react';
import Spin from '@/components/Spin.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('SpinWrap', {
  booleanProps: new Set(['loading', 'block', 'blur']),
  selfClosing: false,
});

export default function SpinWrap({
  loading,
  block,
  blur,
  tip,
  ariaLabel = '로딩 중',
  children,
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { loading, block, blur, tip, ariaLabel },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['spin_wrap'];
    if (block) classes.push('spin_wrap-block');
    if (blur) classes.push('spin_wrap-blur');
    if (loading) classes.push('is-loading');
    return classes;
  }, [block, blur, loading]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} style={style} {...domRest}>
      <div className="spin_wrap-body">{children}</div>
      {loading ? <Spin overlay tip={tip} ariaLabel={ariaLabel} /> : null}
    </div>
  );
}

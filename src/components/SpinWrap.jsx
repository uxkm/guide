import { useRef } from 'react';
import Spin from '@/components/Spin.jsx';
import { cn } from '@/utils/cn';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('SpinWrap', {
  booleanProps: new Set(['loading', 'block', 'blur']),
  selfClosing: false,
});

export default function SpinWrap({
  loading = false,
  block = false,
  blur = false,
  tip,
  ariaLabel = '로딩 중',
  children,
}) {
  const rootRef = useRef(null);
  const props = { loading, block, blur, tip, ariaLabel };

  useComponentDemoCode(formatCode, props, {}, rootRef, {});

  const rootClass = cn(
    'spin_wrap',
    block && 'spin_wrap-block',
    blur && 'spin_wrap-blur',
    loading && 'is-loading',
  );

  return (
    <div ref={rootRef} className={rootClass}>
      <div className="spin_wrap-body">{children}</div>
      {loading && <Spin overlay tip={tip} ariaLabel={ariaLabel} />}
    </div>
  );
}

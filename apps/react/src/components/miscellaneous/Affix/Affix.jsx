import { useEffect, useMemo, useRef } from 'react';
import { initAffix } from '../../../../../html/src/components/miscellaneous/Affix/affix.js';

const skins = new Set(['', 'bar', 'anchor']);

export function Affix({ target, offsetTop = 0, offsetBottom, skin = '', interactive = true, children, className = '', style, ...props }) {
  const rootRef = useRef(null);
  const resolvedSkin = skins.has(skin) ? skin : '';
  const targetClass = useMemo(() => ['affix_target', resolvedSkin && `affix_${resolvedSkin}`].filter(Boolean).join(' '), [resolvedSkin]);
  useEffect(() => {
    if (!interactive || !rootRef.current) return undefined;
    return initAffix(rootRef.current);
  }, [interactive, offsetBottom, offsetTop, target]);
  return <div {...props} ref={rootRef} className={['affix', className].filter(Boolean).join(' ')} style={style}
    data-component="Affix" data-affix={interactive ? '' : undefined} data-target={target || undefined}
    data-offset-top={Number(offsetTop) !== 0 ? offsetTop : undefined}
    data-offset-bottom={offsetBottom !== undefined && offsetBottom !== null && offsetBottom !== '' ? offsetBottom : undefined}>
    <div className="affix_placeholder" aria-hidden="true" hidden />
    <div className={targetClass}>{children}</div>
  </div>;
}

export default Affix;

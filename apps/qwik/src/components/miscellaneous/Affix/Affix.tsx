import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * Affix 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { initAffix } from '@uxkm/html/affix';

const skins = new Set(['', 'bar', 'anchor']);

export const Affix = component$(({
  target, // 고정 기준이 되는 스크롤 컨테이너 선택자입니다.
  offsetTop = 0, // 상단 고정 오프셋(px)입니다.
  offsetBottom, // 하단 고정 오프셋(px)입니다.
  skin = '', // bar · anchor 스킨입니다.
  interactive = true, // 스크롤 고정을 활성화합니다.
  children, // 고정될 콘텐츠입니다.
  class: className = '', // affix 루트에 추가할 클래스입니다.
  style, // 루트 인라인 스타일입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useSignal<HTMLElement | undefined>(undefined);
  const resolvedSkin = skins.has(skin) ? skin : '';
  const targetClass = ['affix_target', resolvedSkin && `affix_${resolvedSkin}`].filter(Boolean).join(' '),
    [resolvedSkin],
  );
  useVisibleTask$(({ track }) => {
    if (!interactive || !rootRef.value) return undefined;
    return initAffix(rootRef.value);
  };
  return (
    <div
      {...props}
      ref={rootRef}
      class={['affix', className].filter(Boolean).join(' ')}
      style={style}
      data-component="Affix"
      data-affix={interactive ? '' : undefined}
      data-target={target || undefined}
      data-offset-top={Number(offsetTop) !== 0 ? offsetTop : undefined}
      data-offset-bottom={
        offsetBottom !== undefined && offsetBottom !== null && offsetBottom !== ''
          ? offsetBottom
          : undefined
      }
    >
      <div class="affix_placeholder" aria-hidden="true" hidden />
      <div class={targetClass}>{children}</div>
    </div>
  );
});

export default Affix;

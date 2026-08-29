import { component$, createContextId, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * Collapse 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
export const CollapseContext = createContextId(null);

export const Collapse = component$(({
  children, // CollapsePanel 자식들입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  variant = 'bordered', // bordered · ghost · card 스킨입니다.
  size = 'md', // sm · md · lg 크기입니다.
  accordion = false, // 한 번에 하나의 패널만 열리게 합니다.
  effect, // slide면 패널 높이 애니메이션을 사용합니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useSignal<HTMLElement | undefined>(undefined);
  const panelsRef = useSignal(new Map());
  const accordionRef = useSignal<HTMLElement | undefined>(undefined);
  accordionRef.value = accordion;

  const registerPanel = (panel) => {
    panelsRef.value.set(panel.id, panel);
    return () => panelsRef.value.delete(panel.id);
  };

  const togglePanel = (id) => {
    const panel = panelsRef.value.get(id);
    if (!panel || panel.disabled()) return;
    const willOpen = !panel.isOpen();
    if (willOpen && accordionRef.value) {
      panelsRef.value.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    panel.setOpen(willOpen);
  };

  const focusAdjacent = (id, key) => {
    const enabled = [...panelsRef.values()].filter((panel) => !panel.disabled());
    const index = enabled.findIndex((panel) => panel.id === id);
    let nextIndex = null;
    if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
    else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') nextIndex = 0;
    else if (key === 'End') nextIndex = enabled.length - 1;
    if (nextIndex == null || !enabled[nextIndex]) return false;
    rootRef.value?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`)?.focus();
    return true;
  };

  const context = { effect, focusAdjacent, registerPanel, togglePanel };
  const resolvedVariant = ['bordered', 'ghost', 'card'].includes(variant) ? variant : 'bordered';
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const classes = [
    'collapse_group',
    `collapse_${resolvedVariant}`,
    resolvedSize !== 'md' && `collapse_${resolvedSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  useContextProvider(CollapseContext, context);
  return (
    <div
        {...props}
        ref={rootRef}
        class={classes}
        data-collapse=""
        data-collapse-accordion={accordion ? '' : undefined}
        data-component="Collapse"
        data-effect={effect === 'slide' ? 'slide' : undefined}
      >
        {children}
      </div>
  );
});

export default Collapse;

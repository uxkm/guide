import { component$, createContextId, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * Accordion 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
export const AccordionContext = createContextId(null);

export const Accordion = component$(({
  children, // AccordionItem 자식들입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  variant = 'bordered', // bordered · flush · card 스킨입니다.
  size = 'md', // sm · md · lg 크기입니다.
  multiple = false, // 여러 항목을 동시에 열 수 있습니다.
  effect, // slide면 패널 높이 애니메이션을 사용합니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const rootRef = useSignal<HTMLElement | undefined>(undefined);
  const itemsRef = useSignal(new Map());
  const multipleRef = useSignal<HTMLElement | undefined>(undefined);
  multipleRef.value = multiple;

  const registerItem = (item) => {
    itemsRef.value.set(item.id, item);
    return () => {
      itemsRef.value.delete(item.id);
    };
  };

  const toggleItem = (id) => {
    const item = itemsRef.value.get(id);
    if (!item || item.disabled()) return;
    const willOpen = !item.isOpen();
    if (willOpen && !multipleRef.value) {
      itemsRef.value.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    item.setOpen(willOpen);
  };

  const focusAdjacent = (id, key) => {
    const enabled = [...itemsRef.values()].filter((item) => !item.disabled());
    const index = enabled.findIndex((item) => item.id === id);
    let nextIndex = null;
    if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
    else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') nextIndex = 0;
    else if (key === 'End') nextIndex = enabled.length - 1;
    if (nextIndex == null || !enabled[nextIndex]) return false;
    rootRef.value?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`)?.focus();
    return true;
  };

  const context = { effect, focusAdjacent, registerItem, toggleItem };
  const resolvedVariant = ['bordered', 'flush', 'card'].includes(variant) ? variant : 'bordered';
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const classes = [
    'accordion',
    `accordion_${resolvedVariant}`,
    resolvedSize !== 'md' && `accordion_${resolvedSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  useContextProvider(AccordionContext, context);
  return (
    <div
        {...props}
        ref={rootRef}
        class={classes}
        data-accordion=""
        data-accordion-multiple={multiple ? '' : undefined}
        data-component="Accordion"
        data-effect={effect === 'slide' ? 'slide' : undefined}
      >
        {children}
      </div>
  );
});

export default Accordion;

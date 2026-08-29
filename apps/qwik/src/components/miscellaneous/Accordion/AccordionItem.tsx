import { component$, useContext, useId, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * AccordionItem 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.tsx';
import Icon from '../../basic/Icon/Icon.tsx';
import { AccordionContext } from './Accordion.tsx';

export const AccordionItem = component$(({
  label, // 트리거 레이블입니다. title이 있으면 title을 우선합니다.
  title, // 트리거 제목입니다. 있으면 label보다 우선합니다.
  content, // children이 없을 때 본문으로 쓸 텍스트입니다.
  children, // 패널 본문 콘텐츠입니다.
  extra, // 트리거 오른쪽에 표시할 보조 텍스트입니다.
  open = false, // 초기 열림 상태입니다.
  disabled = false, // 항목을 비활성화합니다.
  headingLevel = 3, // heading의 aria-level입니다.
  class: className = '', // 항목 루트에 추가할 클래스입니다.
  ripple = true, // 트리거 버튼 리플 효과입니다.
  ...props // 나머지 속성을 항목 루트에 전달합니다.
}) {
  const accordion = useContext(AccordionContext);
  const uid = useId().replaceAll(':', '');
  const triggerId = `accordion-trigger-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  const panelRef = useSignal<HTMLElement | undefined>(undefined);
  const stateRef = useSignal(Boolean(open));
  const disabledRef = useSignal(Boolean(disabled));
  const firstSlideSync = useSignal<HTMLElement | undefined>(undefined);
  const isOpen = useSignal(Boolean(open));
  stateRef.value = isOpen.value;
  disabledRef.value = Boolean(disabled);

  useVisibleTask$(({ track }) =>
    () =>
      accordion?.registerItem({
        id: triggerId,
        disabled: () => disabledRef.value,
        isOpen.value: () => stateRef.value,
        setOpen: (v) => { isOpen.value = v; },
      }),
    [accordion, triggerId],
  );

  useLayoutEffect(() => {
    if (accordion?.effect !== 'slide') return;
    setSlideRegionOpen(panelRef.value, isOpen.value, !firstSlideSync.value);
    firstSlideSync.value = false;
  });

  function handleKeyDown(event) {
    if (accordion?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['accordion_item', isOpen.value && 'is-open', disabled && 'is-disabled', className]
    .filter(Boolean)
    .join(' ');
  const slide = accordion?.effect === 'slide';

  return (
    <div {...props} class={classes}>
      <div class="accordion_heading" role="heading" aria-level={headingLevel}>
        <Button
          id={triggerId}
          variant="text"
          color="default"
          class="accordion_trigger"
          expanded={isOpen.value}
          aria-controls={panelId}
          disabled={disabled}
          ripple={ripple}
          onClick$={() => accordion?.toggleItem(triggerId)}
          onKeyDown$={handleKeyDown}
          iconAfter={<Icon name="chevron-down" class="accordion_icon" />}
        >
          <span class="accordion_label">{title ?? label}</span>
          {extra != null ? <span class="accordion_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={panelRef}
        id={panelId}
        class="accordion_panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen.value}
      >
        <div class="accordion_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
});

export default AccordionItem;

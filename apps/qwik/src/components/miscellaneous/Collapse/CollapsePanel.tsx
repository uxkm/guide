import { component$, useContext, useId, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * CollapsePanel 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.tsx';
import Icon from '../../basic/Icon/Icon.tsx';
import { CollapseContext } from './Collapse.tsx';

export const CollapsePanel = component$(({
  label, // 트리거 레이블입니다. title이 있으면 title을 우선합니다.
  title, // 트리거 제목입니다. 있으면 label보다 우선합니다.
  content, // children이 없을 때 본문으로 쓸 텍스트입니다.
  children, // 패널 본문 콘텐츠입니다.
  extra, // 트리거 오른쪽에 표시할 보조 텍스트입니다.
  open = false, // 초기 열림 상태입니다.
  disabled = false, // 패널을 비활성화합니다.
  class: className = '', // 패널 루트에 추가할 클래스입니다.
  ripple = true, // 트리거 버튼 리플 효과입니다.
  ...props // 나머지 속성을 패널 루트에 전달합니다.
}) {
  const collapse = useContext(CollapseContext);
  const uid = useId().replaceAll(':', '');
  const triggerId = `collapse-trigger-${uid}`;
  const bodyId = `collapse-body-${uid}`;
  const bodyRef = useSignal<HTMLElement | undefined>(undefined);
  const stateRef = useSignal(Boolean(open));
  const disabledRef = useSignal(Boolean(disabled));
  const firstSlideSync = useSignal<HTMLElement | undefined>(undefined);
  const isOpen = useSignal(Boolean(open));
  stateRef.value = isOpen.value;
  disabledRef.value = Boolean(disabled);

  useVisibleTask$(({ track }) =>
    () =>
      collapse?.registerPanel({
        id: triggerId,
        disabled: () => disabledRef.value,
        isOpen.value: () => stateRef.value,
        setOpen: (v) => { isOpen.value = v; },
      }),
    [collapse, triggerId],
  );

  useLayoutEffect(() => {
    if (collapse?.effect !== 'slide') return;
    setSlideRegionOpen(bodyRef.value, isOpen.value, !firstSlideSync.value);
    firstSlideSync.value = false;
  });

  function handleKeyDown(event) {
    if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['collapse_panel', isOpen.value && 'is-open', disabled && 'is-disabled', className]
    .filter(Boolean)
    .join(' ');
  const slide = collapse?.effect === 'slide';

  return (
    <div {...props} class={classes}>
      <div class="collapse_header">
        <Button
          id={triggerId}
          variant="text"
          color="default"
          class="collapse_trigger"
          expanded={isOpen.value}
          aria-controls={bodyId}
          disabled={disabled}
          ripple={ripple}
          onClick$={() => collapse?.togglePanel(triggerId)}
          onKeyDown$={handleKeyDown}
          iconAfter={<Icon name="chevron-down" class="collapse_icon" />}
        >
          <span class="collapse_label">{title ?? label}</span>
          {extra != null ? <span class="collapse_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={bodyRef}
        id={bodyId}
        class="collapse_body"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen.value}
      >
        <div class="collapse_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
});

export default CollapsePanel;

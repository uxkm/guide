<!--
  Modal 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
import { tick, onMount, onDestroy } from 'svelte';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';



// 열림 상태·크기·푸터 레이아웃 옵션을 prop으로 받습니다.
let {
  id,
  title,
  size = 'md',
  scrollable = false,
  backdrop = true,
  open = undefined,
  defaultOpen = false,
  footerAlign = 'end',
  footerRatio = '1-1',
  footerNoPadBottom = false,
  closeLabel = '닫기',
  onClose,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();

 // close · backdrop · escape 사유로 호출됩니다.
let internalOpen = $state(defaultOpen); // 비제어 열림 상태입니다.
let visible = $derived(open ?? internalOpen); // 제어·비제어를 합친 최종 표시 상태입니다.
let root = $state(null); // 포커스용 루트 참조입니다.
const modalId = id || `modal-${Math.random().toString(36).slice(2, 9)}`; // 최종 루트 id입니다.
const titleId = `${modalId}-title`; // aria-labelledby에 연결할 제목 id입니다.
let previousFocus; // 닫힌 뒤 복원할 이전 포커스입니다.

// iframe에서도 최상위 문서에 Modal을 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument === document) return document.body;
  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'modal-contrast-20260819-2');
  let stylesheet = targetDocument.getElementById('uxkm-modal-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-modal-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;
  let portal = targetDocument.getElementById('uxkm-modal-portal-root');
  if (!portal) {
    portal = targetDocument.createElement('div');
    portal.id = 'uxkm-modal-portal-root';
    portal.className = 'uxkm-modal-portal-root';
    targetDocument.body.appendChild(portal);
  }
  portal.dataset.theme = document.documentElement.dataset.theme || 'light';
  return portal;
}
const portalTarget = getPortalTarget();

// 크기·스크롤·열림 상태 클래스를 조합합니다.
let rootClasses = $derived([
    'modal', // Modal 루트 클래스입니다.
    size !== 'md' && `modal_${size}`, // md가 아닐 때만 크기 변형입니다.
    scrollable && 'modal_scrollable', // 본문 스크롤 변형입니다.
    visible && 'is-open', // 열림 상태 클래스입니다.
  ].filter(Boolean),
);
// 푸터 정렬·비율·패딩 클래스를 조합합니다.
let footerClasses = $derived([
    'modal_footer', // 푸터 루트 클래스입니다.
    footerAlign !== 'end' && `modal_footer-${footerAlign}`, // end가 아닐 때만 정렬 변형입니다.
    footerAlign === 'even' &&
      footerRatio !== '1-1' &&
      `modal_footer-even-${footerRatio}`, // even 비율입니다.
    footerNoPadBottom && 'modal_footer-no-pad-b', // 하단 패딩 제거입니다.
  ].filter(Boolean),
);

// 비제어면 내부 상태를 끄고 close 이벤트를 알립니다.
function close(reason = 'close', event) {
  if (open === undefined) internalOpen = false;
  onClose?.(reason, event);
}
function keydown(event) {
  if (event.key === 'Escape') close('escape', event);
}
// 열림 시 스크롤 잠금·Escape·포커스를 연결합니다.
$effect(
  visible,
  async (isOpen) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (isOpen) {
      previousFocus = targetDocument.activeElement;
      targetDocument.body.classList.add('is-modal-open');
      targetDocument.addEventListener('keydown', keydown);
      await tick();
      root?.focus();
    } else {
      targetDocument.body.classList.remove('is-modal-open');
      targetDocument.removeEventListener('keydown', keydown);
      previousFocus?.focus?.();
    }
  },
  { immediate: true },
);
onDestroy(() =>
  (portalTarget?.ownerDocument || document).removeEventListener('keydown', keydown),
);
</script>

<!-- 포털로 대화상자를 문서 최상위에 올립니다. -->
  <Teleport to={portalTarget}>
    {#if visible}<div
     
      bind:this={root}
      id={modalId}
      class={rootClasses}
      data-component="Modal"
      data-modal
      role="dialog"
      aria-modal="true"
      aria-labelledby={title || header ? titleId : undefined}
      tabindex="-1"
    >
      <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
      {#if backdrop}<div
       
        class="modal_backdrop"
        aria-hidden="true"
        onclick={close('backdrop', $event)}
      />
      <div class="modal_dialog">
        <!-- 제목 또는 커스텀 헤더와 닫기 버튼입니다. -->
        {#if title || header}<div class="modal_header">
          <slot name="header"
            ><h2 id={titleId} class="modal_title">{{ title }}</h2></slot
          ><Button
            variant="ghost"
            icon-only
            class="modal_close"
            aria-label={closeLabel}
            onclick={close('close', $event)}
            ><Icon name="close" size="sm" class="modal_close-icon"
          /></Button>
        </div>
        <div class="modal_body">{@render children?.()}</div>
        {#if footer}<div class={footerClasses}><slot name="footer" close={close} /></div>
      </div>
    </div>
  </Teleport>

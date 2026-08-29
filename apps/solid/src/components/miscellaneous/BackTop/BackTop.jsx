import { renderPortal } from '../../../utils/portal.jsx';
import { createEffect, createMemo } from 'solid-js';
/**
 * BackTop 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { initBackTop } from '@uxkm/html/back-top';

const arrow = (
  <svg
    class="back_top_icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);
export function BackTop({
  target, // 스크롤을 올릴 컨테이너 선택자입니다. 없으면 body 포털입니다.
  visibilityHeight = 400, // 버튼이 나타나기 시작하는 스크롤 높이입니다.
  size = 'md', // sm · md · lg 크기입니다.
  color = '', // primary · ghost 색상 변형입니다.
  label, // 아이콘 아래 표시할 텍스트입니다.
  ariaLabel = '맨 위로', // 버튼의 접근성 이름입니다.
  interactive = true, // 스크롤 감지·이동을 활성화합니다.
  ripple = true, // 버튼 리플 효과입니다.
  children, // 기본 화살표·label 대신 쓸 커스텀 콘텐츠입니다.
  class: className = '', // 루트에 추가할 클래스입니다.
  style, // 루트 인라인 스타일입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  let rootRef = null;
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const resolvedColor = ['', 'primary', 'ghost'].includes(color) ? color : '';
  const classes = createMemo(() => [
        'back_top',
        resolvedSize !== 'md' && `back_top_${resolvedSize}`,
        resolvedColor && `back_top_${resolvedColor}`,
        className,
      ]
        .filter(Boolean)
        .join(' '));
  createEffect(() => {
    if (!interactive || !rootRef) return undefined;
    return initBackTop(rootRef);
  });
  const node = (
    <div
      {...props}
      ref={rootRef}
      class={classes}
      style={style}
      data-component="BackTop"
      data-back-top={interactive ? '' : undefined}
      data-target={target || undefined}
      data-visibility-height={Number(visibilityHeight) !== 400 ? visibilityHeight : undefined}
    >
      <button
        type="button"
        class="btn btn_ghost back_top_btn"
        aria-label={ariaLabel}
        data-ripple={ripple ? 'surface' : 'false'}
      >
        {children ?? (
          <>
            {arrow}
            {label ? <span class="back_top_label">{label}</span> : null}
          </>
        )}
      </button>
    </div>
  );
  return !target && typeof document !== 'undefined' ? renderPortal(node, document.body) : node;
}
export default BackTop;

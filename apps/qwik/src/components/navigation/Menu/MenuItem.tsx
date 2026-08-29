import { component$ } from '@builder.io/qwik';
/**
 * MenuItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export const MenuItem = component$(({
  label, // 항목에 표시할 기본 텍스트입니다.
  href, // 지정 시 앵커로 렌더할 대상 주소입니다.
  active = false, // 현재 선택된 항목인지 여부입니다.
  disabled = false, // 상호작용을 막을지 여부입니다.
  color, // 링크 텍스트에 적용할 색상 토큰입니다.
  icon, // 레이블 앞에 표시할 아이콘입니다.
  extra, // 레이블 뒤에 표시할 보조 콘텐츠입니다.
  children, // label 대신 사용할 사용자 정의 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 항목 활성화 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // href·disabled 조합에 따라 앵커, span, button 중 하나를 선택합니다.
  const Tag = href && !disabled ? 'a' : disabled ? 'span' : 'button';

  // 활성·비활성·색상 상태를 링크 클래스에 반영합니다.
  const linkClasses = [
    'menu_link', // 메뉴 항목의 클릭 가능 영역 클래스입니다.
    active && 'is-active', // 현재 선택 상태입니다.
    disabled && 'is-disabled', // 비활성 상태입니다.
    color && `color_${color}`, // 색상 토큰 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  return (
    <li
      {...props}
      class={['menu_item', disabled && 'is-disabled', className].filter(Boolean).join(' ')}
    >
      <Tag
        class={linkClasses}
        href={Tag === 'a' ? href : undefined}
        type={Tag === 'button' ? 'button' : undefined}
        aria-current={active ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        onClick$={(event) => {
          // 앵커는 데모용으로 기본 이동을 막고, 활성 항목만 콜백을 호출합니다.
          if (Tag === 'a') event.preventDefault();
          if (!disabled) onClick?.(event);
        }}
      >
        {icon}
        {(children ?? label) != null && <span class="menu_label">{children ?? label}</span>}
        {extra != null && <span class="menu_extra">{extra}</span>}
      </Tag>
    </li>
  );
});
export default MenuItem;

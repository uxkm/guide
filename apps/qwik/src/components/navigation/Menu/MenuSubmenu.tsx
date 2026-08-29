import { component$, useId, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * MenuSubmenu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import Button from '../../basic/Button/Button.tsx';
import Icon from '../../basic/Icon/Icon.tsx';

export const MenuSubmenu = component$(({
  label, // 서브메뉴 트리거에 표시할 텍스트입니다.
  expanded = false, // 초기·제어용 펼침 상태입니다.
  submenuId, // 서브메뉴 목록의 DOM id를 직접 지정합니다.
  icon, // 트리거 앞에 표시할 아이콘입니다.
  children, // 하위 MenuItem 등 서브메뉴 항목입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  // React id의 콜론을 제거해 aria-controls 연결용 식별자를 만듭니다.
  const generatedId = useId().replaceAll(':', '');
  const id = submenuId || `menu-sub-${generatedId}`; // 서브메뉴 목록의 최종 id입니다.
  const open = useSignal(Boolean(expanded)); // 현재 펼침 상태입니다.

  // 외부 expanded prop이 바뀌면 내부 열림 상태를 동기화합니다.
  useVisibleTask$(({ track }) => open.value = Boolean(expanded));

  return (
    <li
      {...props}
      class={['menu_item', 'menu_item-submenu', className].filter(Boolean).join(' ')}
      aria-expanded={open.value}
    >
      <Button
        variant="text"
        class="menu_link"
        expanded={open.value}
        aria-controls={id}
        onClick$={() => open.value = !value.value}
        iconBefore={icon}
        iconAfter={<Icon name="chevron-down" class="menu_arrow" />}
      >
        <span class="menu_label">{label}</span>
      </Button>
      <ul id={id} class="menu_submenu">
        {children}
      </ul>
    </li>
  );
});
export default MenuSubmenu;

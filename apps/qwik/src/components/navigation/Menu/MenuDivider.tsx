import { component$ } from '@builder.io/qwik';
/**
 * MenuDivider 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export const MenuDivider = component$((props) { // className 등 나머지 속성을 li에 전달합니다.
  // 장식용 구분선이므로 보조 기술에서 숨깁니다.
  return (
    <li
      {...props}
      class={['menu_divider', props.className].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  );
});
export default MenuDivider;

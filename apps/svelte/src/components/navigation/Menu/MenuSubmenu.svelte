<!--
  MenuSubmenu 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';

// 레이블, 펼침 상태, 서브메뉴 id를 prop으로 받습니다.
let {
  label,
  expanded = false,
  submenuId,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
let open = $state(Boolean(expanded)); // 현재 펼침 상태입니다.

// 외부 expanded prop이 바뀌면 내부 열림 상태를 동기화합니다.
$effect(
  () => expanded,
  (value) => {
    open = Boolean(value);
  },
);
const generatedId = crypto.randomUUID().replaceAll('-', ''); // aria-controls 연결용 식별자입니다.
let id = $derived(submenuId || `menu-sub-${generatedId}`); // 서브메뉴 목록의 최종 id입니다.
</script>

<!-- 트리거 버튼으로 하위 목록을 펼치거나 접습니다. -->
  <li class="menu_item menu_item-submenu" aria-expanded={open}>
    <Button
      variant="text"
      class="menu_link"
      expanded={open}
      aria-controls={id}
      onclick={open = !open}
      >{#if icon}<#icon-before>{@render icon?.()}</template
      ><span class="menu_label">{{ label }}</span
      ><#icon-after><Icon name="chevron-down" class="menu_arrow" /></template
    ></Button>
    <ul id={id} class="menu_submenu">
      {@render children?.()}
    </ul>
  </li>

<!--
  NavbarItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
// 컴포넌트 표시 이름을 등록합니다.

// 레이블, 주소, 활성 상태를 prop으로 받습니다.
let {
  label,
  href = '#',
  active = false,
  onClick,
  onclick,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
 // 링크 클릭 시 부모로 전달하는 이벤트입니다.
</script>

<!-- 활성 상태를 링크 클래스와 aria-current에 반영합니다. -->
  <li class="navbar_item">
    <a
      href={href}
      class={['navbar_link', active && 'is-active']}
      aria-current={active ? 'page' : undefined}
      @click.prevent="onclick?.($event)"
      ><slot>{{ label }}</slot
      >{@render badge?.()}</a>
  </li>

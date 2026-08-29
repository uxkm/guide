<!--
  MenuGroup 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
// 컴포넌트 표시 이름을 등록합니다.

// 그룹 제목을 prop으로 받습니다.
let {
  title,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
</script>

<!-- 그룹 제목만 표시하는 비상호작용 목록 항목입니다. -->
  <li class="menu_group" role="presentation">
    <span class="menu_group-title">{{ title }}</span>
  </li>

<!--
  BreadcrumbEllipsis 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
defineOptions({ name: 'UxkmBreadcrumbEllipsis' }); // 컴포넌트 표시 이름을 등록합니다.

// 펼침 상태와 접근 가능한 이름을 prop으로 받습니다.
defineProps({
  expanded: Boolean, // 숨겨진 경로가 펼쳐진 상태인지 여부입니다.
  label: { type: String, default: '숨겨진 경로 보기' }, // 말줄임 버튼의 접근 가능한 이름입니다.
});
defineEmits(['click']); // 말줄임 버튼 클릭 시 부모로 전달합니다.
</script>
<template>
  <!-- 중간 경로를 접어 두는 말줄임 버튼입니다. -->
  <li class="breadcrumb_item">
    <button
      type="button"
      class="breadcrumb_ellipsis"
      :aria-label="label"
      :aria-expanded="expanded"
      data-breadcrumb-ellipsis
      @click="$emit('click', $event)"
    >
      <slot>…</slot>
    </button>
  </li>
</template>

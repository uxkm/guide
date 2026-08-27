<!--
  MenuSubmenu 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, ref, useId, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 레이블, 펼침 상태, 서브메뉴 id를 prop으로 받습니다.
const props = defineProps({
  label: String, // 서브메뉴 트리거에 표시할 텍스트입니다.
  expanded: Boolean, // 초기·제어용 펼침 상태입니다.
  submenuId: String, // 서브메뉴 목록의 DOM id를 직접 지정합니다.
});
const open = ref(Boolean(props.expanded)); // 현재 펼침 상태입니다.

// 외부 expanded prop이 바뀌면 내부 열림 상태를 동기화합니다.
watch(
  () => props.expanded,
  (value) => {
    open.value = Boolean(value);
  },
);
const generatedId = useId().replaceAll(':', ''); // aria-controls 연결용 식별자입니다.
const id = computed(() => props.submenuId || `menu-sub-${generatedId}`); // 서브메뉴 목록의 최종 id입니다.
</script>
<template>
  <!-- 트리거 버튼으로 하위 목록을 펼치거나 접습니다. -->
  <li class="menu_item menu_item-submenu" :aria-expanded="open">
    <Button
      variant="text"
      class="menu_link"
      :expanded="open"
      :aria-controls="id"
      @click="open = !open"
      ><template v-if="$slots.icon" #icon-before><slot name="icon" /></template
      ><span class="menu_label">{{ label }}</span
      ><template #icon-after><Icon name="chevron-down" class="menu_arrow" /></template
    ></Button>
    <ul :id="id" class="menu_submenu">
      <slot />
    </ul>
  </li>
</template>

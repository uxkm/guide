<!--
  Breadcrumb 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

// 속성을 계산된 Breadcrumb 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmBreadcrumb', inheritAttrs: false });

// 항목 배열, 접근성 이름, 구분 기호, 크기를 prop으로 받습니다.
const props = defineProps({
  items: { type: Array, default: () => [] }, // 선언형으로 전달할 경로 항목 배열입니다.
  ariaLabel: { type: String, default: '경로' }, // 내비게이션의 접근 가능한 이름을 지정합니다.
  separator: { type: String, default: 'chevron' }, // 항목 사이에 표시할 구분 기호를 선택합니다.
  size: { type: String, default: 'md' }, // 경로 텍스트의 크기를 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const separator = computed(() =>
  ['chevron', 'slash', 'dot'].includes(props.separator) ? props.separator : 'chevron',
); // 검증된 구분 기호입니다.
const size = computed(() => (['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md')); // 검증된 크기입니다.

// 구분 기호·크기 변형 클래스를 조합합니다.
const classes = computed(() =>
  [
    'breadcrumb', // Breadcrumb 레이아웃을 활성화하는 필수 클래스입니다.
    separator.value !== 'chevron' && `breadcrumb_sep-${separator.value}`, // 기본 chevron이 아닐 때 구분 기호입니다.
    size.value !== 'md' && `breadcrumb_${size.value}`, // 기본 md가 아닐 때 크기 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.
</script>
<template>
  <!-- items가 있으면 BreadcrumbItem으로 매핑하고, 없으면 기본 slot을 사용합니다. -->
  <nav v-bind="attrs" :class="classes" :aria-label="ariaLabel" data-component="Breadcrumb">
    <ol class="breadcrumb_list">
      <template v-if="items.length"
        ><BreadcrumbItem
          v-for="(item, index) in items"
          :key="item.key ?? `${item.label}-${index}`"
          v-bind="item"
          :current="item.current ?? index === items.length - 1" /></template
      ><slot v-else />
    </ol>
  </nav>
</template>

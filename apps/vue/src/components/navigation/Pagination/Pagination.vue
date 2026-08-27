<!--
  Pagination 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 Pagination 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmPagination', inheritAttrs: false });

// 현재 페이지, 전체 수, 크기, 단순·최소·둥근 변형을 prop으로 받습니다.
const props = defineProps({
  current: { type: Number, default: 1 }, // 현재 선택된 페이지 번호입니다.
  total: { type: Number, default: 1 }, // 전체 항목 수입니다.
  pageSize: { type: Number, default: 10 }, // 페이지당 항목 수입니다.
  simple: Boolean, // 이전/다음과 현재/전체 텍스트만 표시할지 여부입니다.
  minimal: Boolean, // 시각적으로 더 간결한 변형인지 여부입니다.
  size: { type: String, default: 'md' }, // 컨트롤의 크기를 지정합니다.
  round: Boolean, // 둥근 버튼 형태를 사용할지 여부입니다.
  ariaLabel: { type: String, default: '페이지 이동' }, // 내비게이션의 접근 가능한 이름을 지정합니다.
});
const emit = defineEmits(['update:current', 'change']); // 페이지 변경을 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const totalPages = computed(() =>
  Math.max(1, Math.ceil(Math.max(0, props.total) / Math.max(1, props.pageSize))),
); // 계산된 전체 페이지 수입니다.
const active = computed(() => Math.min(totalPages.value, Math.max(1, props.current))); // 범위 안으로 보정한 현재 페이지입니다.
const resolvedSize = computed(() => (['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md')); // 검증된 크기입니다.

// 단순·최소·크기·둥근 변형 클래스를 조합합니다.
const classes = computed(() =>
  [
    'pagination', // Pagination 레이아웃을 활성화하는 필수 클래스입니다.
    props.simple && 'pagination_simple', // 단순 텍스트형 변형입니다.
    props.minimal && 'pagination_minimal', // 최소형 변형입니다.
    resolvedSize.value !== 'md' && `pagination_${resolvedSize.value}`, // 기본 md가 아닐 때 크기 변형입니다.
    props.round && 'pagination_round', // 둥근 버튼 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 전체 페이지 수와 현재 페이지를 바탕으로 표시할 번호·말줄임 목록을 만듭니다.
const pages = computed(() => {
  const count = totalPages.value;
  const current = active.value;
  if (count <= 7) return Array.from({ length: count }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', count];
  if (current >= count - 3)
    return [1, 'ellipsis-start', count - 4, count - 3, count - 2, count - 1, count];
  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', count];
});

// 범위 안의 페이지로만 이동하고 동일 페이지면 이벤트를 생략합니다.
function goTo(page) {
  const next = Math.min(totalPages.value, Math.max(1, page));
  if (next === active.value) return;
  emit('update:current', next);
  emit('change', next);
}
</script>
<template>
  <!-- 단순형 또는 번호 목록형으로 페이지 이동 컨트롤을 렌더합니다. -->
  <nav
    v-bind="attrs"
    :class="classes"
    :aria-label="ariaLabel"
    data-component="Pagination"
    :data-current="active"
    :data-total-pages="totalPages"
  >
    <template v-if="simple"
      ><Button
        variant="ghost"
        color="default"
        size="sm"
        icon-only
        :ripple="false"
        class="pagination_btn pagination_prev"
        aria-label="이전 페이지"
        :disabled="active <= 1"
        @click="goTo(active - 1)"
        ><template #icon-before
          ><Icon name="chevron-left" size="sm" class="pagination_icon" /></template></Button
      ><span class="pagination_simple-text" aria-live="polite"
        ><span class="pagination_simple-current">{{ active }}</span> /
        <span class="pagination_simple-total">{{ totalPages }}</span></span
      ><Button
        variant="ghost"
        color="default"
        size="sm"
        icon-only
        :ripple="false"
        class="pagination_btn pagination_next"
        aria-label="다음 페이지"
        :disabled="active >= totalPages"
        @click="goTo(active + 1)"
        ><template #icon-before
          ><Icon name="chevron-right" size="sm" class="pagination_icon" /></template></Button
    ></template>
    <ul v-else class="pagination_list">
      <li class="pagination_item">
        <Button
          variant="ghost"
          color="default"
          size="sm"
          icon-only
          :ripple="false"
          class="pagination_btn pagination_prev"
          aria-label="이전 페이지"
          :disabled="active <= 1"
          @click="goTo(active - 1)"
          ><template #icon-before
            ><Icon name="chevron-left" size="sm" class="pagination_icon" /></template
        ></Button>
      </li>
      <li v-for="(page, index) in pages" :key="`${page}-${index}`" class="pagination_item">
        <span v-if="typeof page === 'string'" class="pagination_ellipsis" aria-hidden="true">…</span
        ><Button
          v-else
          variant="text"
          color="default"
          :ripple="false"
          :class="['pagination_link', page === active && 'is-active']"
          :aria-current="page === active ? 'page' : undefined"
          :aria-label="`${page}페이지${page === active ? ', 현재 페이지' : ''}`"
          @click="goTo(page)"
          >{{ page }}</Button
        >
      </li>
      <li class="pagination_item">
        <Button
          variant="ghost"
          color="default"
          size="sm"
          icon-only
          :ripple="false"
          class="pagination_btn pagination_next"
          aria-label="다음 페이지"
          :disabled="active >= totalPages"
          @click="goTo(active + 1)"
          ><template #icon-before
            ><Icon name="chevron-right" size="sm" class="pagination_icon" /></template
        ></Button>
      </li>
    </ul>
  </nav>
</template>

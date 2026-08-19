<script setup>
import { computed, useAttrs } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';
defineOptions({ name: 'UxkmPagination', inheritAttrs: false });
const props = defineProps({ current: { type: Number, default: 1 }, total: { type: Number, default: 1 }, pageSize: { type: Number, default: 10 }, simple: Boolean, minimal: Boolean, size: { type: String, default: 'md' }, round: Boolean, ariaLabel: { type: String, default: '페이지 이동' } });
const emit = defineEmits(['update:current', 'change']);
const attrs = useAttrs();
const totalPages = computed(() => Math.max(1, Math.ceil(Math.max(0, props.total) / Math.max(1, props.pageSize))));
const active = computed(() => Math.min(totalPages.value, Math.max(1, props.current)));
const resolvedSize = computed(() => ['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md');
const classes = computed(() => ['pagination', props.simple && 'pagination_simple', props.minimal && 'pagination_minimal', resolvedSize.value !== 'md' && `pagination_${resolvedSize.value}`, props.round && 'pagination_round'].filter(Boolean));
const pages = computed(() => { const count = totalPages.value; const current = active.value; if (count <= 7) return Array.from({ length: count }, (_, index) => index + 1); if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis-end', count]; if (current >= count - 3) return [1, 'ellipsis-start', count - 4, count - 3, count - 2, count - 1, count]; return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', count]; });
function goTo(page) { const next = Math.min(totalPages.value, Math.max(1, page)); if (next === active.value) return; emit('update:current', next); emit('change', next); }
</script>
<template>
  <nav v-bind="attrs" :class="classes" :aria-label="ariaLabel" data-component="Pagination" :data-current="active" :data-total-pages="totalPages">
    <template v-if="simple"><Button variant="ghost" color="default" size="sm" icon-only :ripple="false" class="pagination_btn pagination_prev" aria-label="이전 페이지" :disabled="active <= 1" @click="goTo(active - 1)"><template #icon-before><Icon name="chevron-left" size="sm" class="pagination_icon" /></template></Button><span class="pagination_simple-text" aria-live="polite"><span class="pagination_simple-current">{{ active }}</span> / <span class="pagination_simple-total">{{ totalPages }}</span></span><Button variant="ghost" color="default" size="sm" icon-only :ripple="false" class="pagination_btn pagination_next" aria-label="다음 페이지" :disabled="active >= totalPages" @click="goTo(active + 1)"><template #icon-before><Icon name="chevron-right" size="sm" class="pagination_icon" /></template></Button></template>
    <ul v-else class="pagination_list"><li class="pagination_item"><Button variant="ghost" color="default" size="sm" icon-only :ripple="false" class="pagination_btn pagination_prev" aria-label="이전 페이지" :disabled="active <= 1" @click="goTo(active - 1)"><template #icon-before><Icon name="chevron-left" size="sm" class="pagination_icon" /></template></Button></li><li v-for="(page, index) in pages" :key="`${page}-${index}`" class="pagination_item"><span v-if="typeof page === 'string'" class="pagination_ellipsis" aria-hidden="true">…</span><Button v-else variant="text" color="default" :ripple="false" :class="['pagination_link', page === active && 'is-active']" :aria-current="page === active ? 'page' : undefined" :aria-label="`${page}페이지${page === active ? ', 현재 페이지' : ''}`" @click="goTo(page)">{{ page }}</Button></li><li class="pagination_item"><Button variant="ghost" color="default" size="sm" icon-only :ripple="false" class="pagination_btn pagination_next" aria-label="다음 페이지" :disabled="active >= totalPages" @click="goTo(active + 1)"><template #icon-before><Icon name="chevron-right" size="sm" class="pagination_icon" /></template></Button></li></ul>
  </nav>
</template>

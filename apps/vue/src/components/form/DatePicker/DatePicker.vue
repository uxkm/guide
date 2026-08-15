<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, useId, watch } from 'vue';
defineOptions({ name: 'UxkmDatePicker', inheritAttrs: false });
const props = defineProps({
  modelValue: { type: String, default: '' }, placeholder: { type: String, default: '날짜를 선택하세요' }, locale: { type: String, default: 'ko-KR' },
  size: { type: String, default: 'md' }, fit: Boolean, block: Boolean, disabled: Boolean, error: Boolean, success: Boolean,
  clearable: { type: Boolean, default: true }, min: String, max: String, name: String, required: Boolean,
  panelAlign: { type: String, default: 'start' }, ariaLabel: { type: String, default: '날짜 선택' }
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs(); const root = ref(null); const open = ref(false); const month = ref(new Date());
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
const pad = (value) => String(value).padStart(2, '0');
const toValue = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const parseValue = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? new Date(`${value}T00:00:00`) : null;
const formatValue = (value) => { const date = parseValue(value); return date ? new Intl.DateTimeFormat(props.locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date) : ''; };
const generatedId = useId().replace(/:/g, '');
const inputId = computed(() => attrs.id || `date-picker-${generatedId}`);
const panelId = computed(() => `${inputId.value}-panel`);
const classes = computed(() => ['date_picker', props.size !== 'md' && `date_picker_${props.size}`, props.fit && 'date_picker_fit', props.block && 'date_picker_block', props.disabled && 'is-disabled', props.error && 'is-error', props.success && 'is-success', open.value && 'is-open', attrs.class].filter(Boolean));
const inputAttrs = computed(() => { const { id: _id, class: _class, ...rest } = attrs; return rest; });
const title = computed(() => `${month.value.getFullYear()}년 ${month.value.getMonth() + 1}월`);
const today = toValue(new Date());
const cells = computed(() => { const first = new Date(month.value.getFullYear(), month.value.getMonth(), 1); const start = new Date(month.value.getFullYear(), month.value.getMonth(), 1 - first.getDay()); return Array.from({ length: 42 }, (_, index) => { const date = new Date(start); date.setDate(start.getDate() + index); return { date, value: toValue(date), other: date.getMonth() !== month.value.getMonth() }; }); });
watch(() => props.modelValue, (value) => { const date = parseValue(value); if (date) month.value = date; }, { immediate: true });
watch(open, (isOpen) => { if (isOpen) nextTick(() => root.value?.querySelector('.calendar_day.is-selected:not(:disabled), .calendar_day:not(:disabled)')?.focus()); });
function commit(value) { emit('update:modelValue', value); emit('change', value); }
function select(value) { commit(value); open.value = false; requestAnimationFrame(() => root.value?.querySelector('.date_picker_input')?.focus()); }
function moveMonth(offset) { month.value = new Date(month.value.getFullYear(), month.value.getMonth() + offset, 1); }
function outside(event) { if (!root.value?.contains(event.target)) open.value = false; }
onMounted(() => document.addEventListener('pointerdown', outside));
onBeforeUnmount(() => document.removeEventListener('pointerdown', outside));
</script>

<template>
  <div ref="root" :class="classes" data-component="DatePicker" @keydown.esc="open = false">
    <div class="date_picker_trigger">
      <input v-bind="inputAttrs" :id="inputId" class="date_picker_input" :value="formatValue(modelValue)" :placeholder="placeholder" readonly :disabled="disabled" :required="required" :aria-label="attrs['aria-label'] || ariaLabel" aria-haspopup="dialog" :aria-expanded="open" :aria-controls="panelId" :aria-invalid="error || undefined" @click="!disabled && (open = true)">
      <input v-if="name" type="hidden" :name="name" :value="modelValue">
      <button v-if="clearable && modelValue && !disabled" class="date_picker_clear" type="button" aria-label="날짜 지우기" @click="commit('')"><svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      <button class="date_picker_btn" type="button" :disabled="disabled" aria-label="달력 열기" :aria-controls="panelId" :aria-expanded="open" @click="open = !open"><svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg></button>
    </div>
    <div v-show="open" :id="panelId" class="date_picker_panel" :class="panelAlign === 'end' && 'date_picker_panel-end'" role="dialog" aria-modal="false" :aria-label="ariaLabel">
      <div class="calendar calendar_borderless"><div class="calendar_header"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달" @click="moveMonth(-1)">‹</button><span class="calendar_title" aria-live="polite">{{ title }}</span><button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달" @click="moveMonth(1)">›</button></div>
        <div class="calendar_weekdays" aria-hidden="true"><span v-for="day in weekdays" :key="day" class="calendar_weekday">{{ day }}</span></div>
        <div class="calendar_grid"><button v-for="cell in cells" :key="cell.value" type="button" class="calendar_day" :class="{ 'is-other-month': cell.other, 'is-today': cell.value === today, 'is-selected': cell.value === modelValue }" :disabled="(min && cell.value < min) || (max && cell.value > max)" :aria-current="cell.value === today ? 'date' : undefined" :aria-selected="cell.value === modelValue || undefined" :aria-label="formatValue(cell.value)" @click="select(cell.value)">{{ cell.date.getDate() }}</button></div>
        <div class="calendar_footer"><button type="button" class="btn btn_text color_primary btn_sm" @click="select(today)">오늘</button><div v-if="clearable" class="calendar_footer-actions"><button type="button" class="btn btn_ghost btn_sm" @click="commit('')">초기화</button></div></div></div>
    </div>
  </div>
</template>

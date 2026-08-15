<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

defineOptions({ name: 'UxkmRate', inheritAttrs: false });
const props = defineProps({
  modelValue: Number, value: Number, count: { type: Number, default: 5 }, allowHalf: Boolean,
  clearable: Boolean, readonly: Boolean, disabled: Boolean,
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  legend: String, name: String, ripple: { type: Boolean, default: true }
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const groupName = props.name || `rate-${Math.random().toString(36).slice(2, 9)}`;
const currentValue = ref(props.modelValue ?? props.value);
watch(() => [props.modelValue, props.value], ([modelValue, value]) => { if (modelValue !== undefined || value !== undefined) currentValue.value = modelValue ?? value; });
const stars = computed(() => Array.from({ length: Math.max(1, Number(props.count)) }, (_, index) => index + 1));
const classes = computed(() => ['rate', props.size === 'sm' && 'rate_sm', props.size === 'lg' && 'rate_lg', props.allowHalf && 'rate_allow-half', props.clearable && 'rate_clearable', props.readonly && 'is-readonly', attrs.class].filter(Boolean));
const rootAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
const starPath = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';
function update(next) { currentValue.value = next; emit('update:modelValue', next); emit('change', next); }
function readonlyState(star) { return (currentValue.value ?? 0) >= star ? 'is-filled' : props.allowHalf && (currentValue.value ?? 0) >= star - 0.5 ? 'is-half' : ''; }
</script>

<template>
  <div v-if="readonly" v-bind="rootAttrs" :class="classes" data-component="Rate" role="img" :aria-label="attrs['aria-label'] || `${count}점 만점 중 ${currentValue ?? 0}점`">
    <div class="rate_stars">
      <span v-for="star in stars" :key="star" class="rate_star-readonly" :class="readonlyState(star)">
        <span class="rate_star-graphic" aria-hidden="true">
          <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path :d="starPath" /></svg>
          <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path :d="starPath" /></svg>
          <span v-if="readonlyState(star) === 'is-half'" class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path :d="starPath" /></svg></span>
        </span>
      </span>
    </div>
    <span v-if="currentValue != null" class="rate_value">{{ currentValue }}</span>
  </div>
  <fieldset v-else v-bind="rootAttrs" :class="classes" data-component="Rate" :data-ripple="ripple ? 'true' : undefined" :disabled="disabled">
    <legend v-if="legend" class="rate_legend">{{ legend }}</legend>
    <div class="rate_control">
      <div class="rate_stars">
        <label v-for="star in stars" :key="star" class="rate_star" :data-ripple="ripple ? 'true' : undefined">
          <input v-if="allowHalf" type="radio" class="rate_input rate_input-half" :name="groupName" :value="star - 0.5" :checked="currentValue === star - 0.5" :disabled="disabled" @change="update(star - 0.5)">
          <input type="radio" class="rate_input" :name="groupName" :value="star" :checked="currentValue === star" :disabled="disabled" @change="update(star)">
          <template v-if="allowHalf">
            <button type="button" class="rate_star-half rate_star-half-left" tabindex="-1" aria-hidden="true" :disabled="disabled" @click.prevent.stop="update(star - 0.5)" />
            <button type="button" class="rate_star-half rate_star-half-right" tabindex="-1" aria-hidden="true" :disabled="disabled" @click.prevent.stop="update(star)" />
          </template>
          <span class="rate_star-graphic" aria-hidden="true">
            <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path :d="starPath" /></svg>
            <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path :d="starPath" /></svg>
            <span v-if="allowHalf" class="rate_star-icon-half"><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path :d="starPath" /></svg></span>
          </span>
          <span class="rate_star-label">{{ star }}점</span>
        </label>
      </div>
      <button v-if="clearable" type="button" class="rate_clear" :data-ripple="ripple ? 'true' : undefined" aria-label="별점 초기화" title="초기화" @click="update(undefined)"><svg class="rate_clear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg></button>
      <output v-if="currentValue != null" class="rate_value">{{ currentValue }}점</output>
    </div>
  </fieldset>
</template>

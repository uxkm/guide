<!--
  Upload 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, onBeforeUnmount, ref, useAttrs, useId } from 'vue';
defineOptions({ name: 'UxkmUpload', inheritAttrs: false });
const props = defineProps({
  modelValue: { type: Array, default: undefined },
  defaultFiles: { type: Array, default: () => [] },
  variant: { type: String, default: 'button' },
  size: { type: String, default: 'md' },
  fit: Boolean,
  disabled: Boolean,
  error: Boolean,
  dragover: Boolean,
  multiple: Boolean,
  accept: String,
  maxSize: Number,
  maxFiles: Number,
  inputId: String,
  buttonLabel: { type: String, default: '파일 선택' },
  title: { type: String, default: '파일을 끌어다 놓거나 선택하세요' },
  description: String,
  hint: String,
  removeLabel: { type: String, default: '파일 삭제' },
  avatarSrc: String,
  avatarAlt: { type: String, default: '프로필 사진' },
});
const emit = defineEmits(['update:modelValue', 'change', 'error']);
const attrs = useAttrs();
const input = ref(null);
const innerFiles = ref([...props.defaultFiles]);
const message = ref('');
const dragActive = ref(false);
const urls = new Set();
const generatedId = useId().replace(/:/g, '');
const resolvedInputId = computed(() => props.inputId || attrs.id || `upload-${generatedId}`);
const resolvedVariant = computed(
  () => ({ dropzone: 'drag', cards: 'picture-card' })[props.variant] || props.variant,
);
const items = computed(() => props.modelValue ?? innerFiles.value);
const classes = computed(() =>
  [
    'upload',
    props.fit && 'upload_fit',
    props.size !== 'md' && `upload_${props.size}`,
    props.disabled && 'is-disabled',
    attrs.class,
  ].filter(Boolean),
);
const inputAttrs = computed(() => {
  const { id: _id, class: _class, ...rest } = attrs;
  return rest;
});
const formatSize = (bytes = 0) =>
  bytes < 1024
    ? `${bytes} B`
    : bytes < 1048576
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${(bytes / 1048576).toFixed(1)} MB`;
const accepts = (file) =>
  !props.accept ||
  props.accept.split(',').some((rule) => {
    const value = rule.trim();
    return value.startsWith('.')
      ? file.name.toLowerCase().endsWith(value.toLowerCase())
      : value.endsWith('/*')
        ? file.type.startsWith(value.slice(0, -1))
        : file.type === value;
  });
function update(next) {
  if (props.modelValue === undefined) innerFiles.value = next;
  emit('update:modelValue', next);
  emit(
    'change',
    next.map((item) => item.file ?? item),
  );
}
function fail(text) {
  message.value = text;
  emit('error', text);
}
function addFiles(list) {
  if (props.disabled) return;
  const incoming = Array.from(list || []);
  const invalid = incoming.find(
    (file) => !accepts(file) || (props.maxSize && file.size > props.maxSize),
  );
  if (invalid) {
    fail(
      !accepts(invalid)
        ? `${invalid.name}: 허용되지 않는 파일 형식입니다.`
        : `${invalid.name}: 파일 크기 제한을 초과했습니다.`,
    );
    return;
  }
  const limit = props.multiple ? props.maxFiles || Infinity : 1;
  const available = Math.max(0, limit - (props.multiple ? items.value.length : 0));
  if (!available || incoming.length > available) {
    fail(`파일은 최대 ${limit}개까지 선택할 수 있습니다.`);
    return;
  }
  const added = incoming.slice(0, available).map((file) => {
    const url = file.type.startsWith('image/') ? URL.createObjectURL(file) : '';
    if (url) urls.add(url);
    return { file, name: file.name, size: file.size, type: file.type, url, status: 'done' };
  });
  message.value = '';
  update(props.multiple ? [...items.value, ...added] : added);
  if (input.value) input.value.value = '';
}
function remove(index) {
  const item = items.value[index];
  if (item?.url && urls.has(item.url)) {
    URL.revokeObjectURL(item.url);
    urls.delete(item.url);
  }
  update(items.value.filter((_, itemIndex) => itemIndex !== index));
}
function leave(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) dragActive.value = false;
}
function openWithKeyboard(event) {
  if (!props.disabled && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    input.value?.click();
  }
}
onBeforeUnmount(() => urls.forEach((url) => URL.revokeObjectURL(url)));
</script>

<template>
  <div :class="classes" data-component="Upload">
    <label
      v-if="resolvedVariant === 'drag'"
      class="upload_dropzone"
      :class="{ 'is-dragover': dragover || dragActive, 'is-error': error || message }"
      :for="resolvedInputId"
      :tabindex="disabled ? undefined : 0"
      @keydown="openWithKeyboard"
      @dragenter.prevent="!disabled && (dragActive = true)"
      @dragover.prevent
      @dragleave="leave"
      @drop.prevent="
        dragActive = false;
        addFiles($event.dataTransfer.files);
      "
    >
      <input
        v-bind="inputAttrs"
        :id="resolvedInputId"
        ref="input"
        class="upload_input"
        type="file"
        tabindex="-1"
        :disabled="disabled"
        :multiple="multiple"
        :accept="accept"
        :aria-invalid="error || undefined"
        @change="addFiles($event.target.files)"
      />
      <slot name="trigger"
        ><span class="upload_dropzone-icon"
          ><svg
            class="icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" /></svg></span
        ><span class="upload_dropzone-title">{{ title }}</span
        ><span v-if="description" class="upload_dropzone-desc">{{ description }}</span></slot
      >
    </label>
    <div v-else-if="resolvedVariant === 'picture-card'" class="upload_cards">
      <slot name="cards" />
      <div v-for="(item, index) in items" :key="`${item.name}-${index}`" class="upload_card">
        <img v-if="item.url" class="upload_card-image" :src="item.url" :alt="item.name" /><span
          v-else
          class="upload_item-icon"
          >파일</span
        >
        <div class="upload_card-actions">
          <button
            type="button"
            class="btn btn_ghost btn_icon-only btn_sm"
            :aria-label="`${item.name} ${removeLabel}`"
            @click="remove(index)"
          >
            ×
          </button>
        </div>
      </div>
      <label
        class="upload_card upload_card-trigger"
        :for="resolvedInputId"
        :tabindex="disabled ? undefined : 0"
        @keydown="openWithKeyboard"
        ><input
          v-bind="inputAttrs"
          :id="resolvedInputId"
          ref="input"
          class="upload_input"
          type="file"
          tabindex="-1"
          :disabled="disabled"
          :multiple="multiple"
          :accept="accept"
          :aria-invalid="error || undefined"
          @change="addFiles($event.target.files)"
        /><slot name="trigger"
          ><svg
            class="icon icon_lg"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 5v14M5 12h14" /></svg
          ><span>{{ buttonLabel }}</span></slot
        ></label
      >
    </div>
    <label
      v-else-if="resolvedVariant === 'avatar'"
      class="upload_avatar"
      :for="resolvedInputId"
      :tabindex="disabled ? undefined : 0"
      @keydown="openWithKeyboard"
      ><input
        v-bind="inputAttrs"
        :id="resolvedInputId"
        ref="input"
        class="upload_input"
        type="file"
        tabindex="-1"
        :disabled="disabled"
        :accept="accept || 'image/*'"
        :aria-invalid="error || undefined"
        @change="addFiles($event.target.files)" /><slot name="trigger"
        ><span class="avatar avatar_xl"
          ><img v-if="avatarSrc" class="avatar_image" :src="avatarSrc" :alt="avatarAlt" /><svg
            v-else
            class="avatar_icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" /></svg></span></slot
      ><span class="upload_avatar-overlay" aria-hidden="true"
        ><svg
          class="icon icon_lg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="m16 6-4-4-4 4M12 2v13" /></svg></span
    ></label>
    <label
      v-else-if="resolvedVariant !== 'list'"
      class="upload_trigger"
      :for="resolvedInputId"
      :tabindex="disabled ? undefined : 0"
      @keydown="openWithKeyboard"
      ><input
        v-bind="inputAttrs"
        :id="resolvedInputId"
        ref="input"
        class="upload_input"
        type="file"
        tabindex="-1"
        :disabled="disabled"
        :multiple="multiple"
        :accept="accept"
        :aria-invalid="error || undefined"
        @change="addFiles($event.target.files)"
      /><slot name="trigger"
        ><span class="btn btn_filled color_primary"
          ><span class="btn_label">{{ buttonLabel }}</span></span
        ></slot
      ></label
    >
    <p
      v-if="(resolvedVariant === 'button' || resolvedVariant === 'drag') && hint"
      class="upload_hint"
    >
      {{ hint }}
    </p>
    <p v-if="message" class="form_field-error" role="alert">{{ message }}</p>
    <slot />
    <ul
      v-if="resolvedVariant !== 'picture-card' && resolvedVariant !== 'avatar' && items.length"
      class="upload_list"
    >
      <li
        v-for="(item, index) in items"
        :key="`${item.name}-${index}`"
        class="upload_item"
        :class="{ 'is-error': item.status === 'error', 'is-done': item.status !== 'uploading' }"
      >
        <span class="upload_item-icon">파일</span
        ><span class="upload_item-body"
          ><span class="upload_item-name">{{ item.name }}</span
          ><span class="upload_item-meta">{{
            item.status === 'error'
              ? item.error || '업로드 실패'
              : `${formatSize(item.size)} · 선택 완료`
          }}</span
          ><span
            v-if="item.status === 'uploading'"
            class="upload_progress"
            role="progressbar"
            :aria-valuenow="item.progress || 0"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="`${item.name} 업로드 진행률`"
            ><span
              class="upload_progress-bar"
              :style="{ width: `${item.progress || 0}%` }" /></span></span
        ><button
          type="button"
          class="upload_item-action btn btn_ghost btn_icon-only btn_sm"
          :aria-label="`${item.name} ${removeLabel}`"
          @click="remove(index)"
        >
          ×
        </button>
      </li>
    </ul>
  </div>
</template>

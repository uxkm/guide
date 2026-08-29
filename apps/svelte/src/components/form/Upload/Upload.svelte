<!--
  Upload 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
import { onMount, onDestroy } from 'svelte';
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 변형, 파일 목록, 검증과 트리거 문구를 하나의 Upload API로 제공합니다.
let {
  modelValue = undefined,
  defaultFiles = () => [],
  variant = 'button',
  size = 'md',
  fit = false,
  disabled = false,
  error = false,
  dragover = false,
  multiple = false,
  accept,
  maxSize,
  maxFiles,
  inputId,
  buttonLabel = '파일 선택',
  title = '파일을 끌어다 놓거나 선택하세요',
  description,
  hint,
  removeLabel = '파일 삭제',
  avatarSrc,
  avatarAlt = '프로필 사진',
  onModelValue,
  onChange,
  onError,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();=> [] }, // 비제어 초기 파일 목록입니다.
  variant: { type: String, default: 'button' }, // button·drag·list·picture-card·avatar UI 유형입니다.
  size: { type: String, default: 'md' }, // 업로드 영역 크기입니다.
  fit: Boolean, // 공통 최대 너비로 너비를 제한합니다.
  disabled: Boolean, // 파일 선택을 비활성으로 만듭니다.
  error: Boolean, // 검증 오류 상태를 표시합니다.
  dragover: Boolean, // 드롭존의 드래그 오버 상태를 강제로 표시합니다.
  multiple: Boolean, // 여러 파일 선택을 허용합니다.
  accept: String, // 허용할 파일 형식입니다.
  maxSize: Number, // 바이트 단위 파일 크기 제한입니다.
  maxFiles: Number, // 선택할 수 있는 최대 파일 개수입니다.
  inputId: String, // 숨김 file input에 연결할 id입니다.
  buttonLabel: { type: String, default: '파일 선택' }, // 기본 트리거 버튼 문구입니다.
  title: { type: String, default: '파일을 끌어다 놓거나 선택하세요' }, // 드롭존 제목입니다.
  description: String, // 드롭존 보조 설명입니다.
  hint: String, // 버튼·드롭존 아래 도움말입니다.
  removeLabel: { type: String, default: '파일 삭제' }, // 삭제 버튼의 접근 가능한 이름 접미사입니다.
  avatarSrc: String, // avatar 변형의 미리보기 이미지 주소입니다.
  avatarAlt: { type: String, default: '프로필 사진' }, // avatar 이미지 대체 텍스트입니다.
});


let input = $state(null);
let innerFiles = $state([...defaultFiles]);
let message = $state('');
let dragActive = $state(false);
const urls = new Set(); // 생성한 미리보기 object URL입니다.
const generatedId = crypto.randomUUID().replace(/:/g, '');
let resolvedInputId = $derived(inputId || rest.id || `upload-${generatedId}`);
let resolvedVariant = $derived(({ dropzone: 'drag', cards: 'picture-card' })[variant] || variant,
); // 이전 별칭을 정규화합니다.
let items = $derived(modelValue ?? innerFiles); // 최종 파일 목록입니다.

// 너비·크기·비활성 클래스를 조합합니다.
let classes = $derived([
    'upload', // 업로드 루트 필수 클래스입니다.
    fit && 'upload_fit', // 제한 너비 변형입니다.
    size !== 'md' && `upload_${size}`, // sm·lg 크기 변형입니다.
    disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// id·class는 루트/입력에만 쓰고 나머지 속성은 file input으로 전달합니다.
let inputAttrs = $derived({
  const { id: _id, class: _class, ...rest } = rest;
  return rest;
});
const formatSize = (bytes = 0) =>
  bytes < 1024
    ? `${bytes} B`
    : bytes < 1048576
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${(bytes / 1048576).toFixed(1)} MB`; // 파일 크기를 읽기 쉬운 단위로 표시합니다.
const accepts = (file) =>
  !accept ||
  accept.split(',').some((rule) => {
    // 확장자·MIME 와일드카드·정확한 MIME을 순서대로 검사합니다.
    const value = rule.trim();
    return value.startsWith('.')
      ? file.name.toLowerCase().endsWith(value.toLowerCase())
      : value.endsWith('/*')
        ? file.type.startsWith(value.slice(0, -1))
        : file.type === value;
  });

function update(next) {
  // 제어·비제어에 맞게 목록을 갱신하고 File 배열을 change로 전달합니다.
  if (modelValue === undefined) innerFiles = next;
  onModelValue?.(next);
  emit(
    'change',
    next.map((item) => item.file ?? item),
  );
}
function fail(text) {
  message = text;
  onError?.(text);
}
function addFiles(list) {
  // 형식·크기·개수를 검증한 뒤 미리보기 URL과 함께 목록에 추가합니다.
  if (disabled) return;
  const incoming = Array.from(list || []);
  const invalid = incoming.find(
    (file) => !accepts(file) || (maxSize && file.size > maxSize),
  );
  if (invalid) {
    fail(
      !accepts(invalid)
        ? `${invalid.name}: 허용되지 않는 파일 형식입니다.`
        : `${invalid.name}: 파일 크기 제한을 초과했습니다.`,
    );
    return;
  }
  const limit = multiple ? maxFiles || Infinity : 1;
  const available = Math.max(0, limit - (multiple ? items.length : 0));
  if (!available || incoming.length > available) {
    fail(`파일은 최대 ${limit}개까지 선택할 수 있습니다.`);
    return;
  }
  const added = incoming.slice(0, available).map((file) => {
    const url = file.type.startsWith('image/') ? URL.createObjectURL(file) : '';
    if (url) urls.add(url);
    return { file, name: file.name, size: file.size, type: file.type, url, status: 'done' };
  });
  message = '';
  update(multiple ? [...items, ...added] : added);
  if (input) input.value = '';
}
function remove(index) {
  // 해당 항목의 object URL을 정리한 뒤 목록에서 제거합니다.
  const item = items[index];
  if (item?.url && urls.has(item.url)) {
    URL.revokeObjectURL(item.url);
    urls.delete(item.url);
  }
  update(items.filter((_, itemIndex) => itemIndex !== index));
}
function leave(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) dragActive = false;
}
function openWithKeyboard(event) {
  // Enter·Space로 숨김 file input을 엽니다.
  if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    input?.click();
  }
}
onDestroy(() => urls.forEach((url) => URL.revokeObjectURL(url)));
</script>

<div class={classes} data-component="Upload">
    <!-- 변형별 트리거: drag 드롭존 -->
    {#if resolvedVariant === 'drag'}<label
     
      class="upload_dropzone"
      class={{ 'is-dragover': dragover || dragActive, 'is-error': error || message }}
      for={resolvedInputId}
      tabindex={disabled ? undefined : 0}
      onkeydown={openWithKeyboard}
      @dragenter.prevent="!disabled && (dragActive = true)"
      @dragover.prevent
      @dragleave="leave"
      @drop.prevent="
        dragActive = false;
        addFiles($event.dataTransfer.files);
      "
    >
      <input
        {...inputAttrs}
        id={resolvedInputId}
        bind:this={input}
        class="upload_input"
        type="file"
        tabindex="-1"
        disabled={disabled}
        multiple={multiple}
        accept={accept}
        aria-invalid={error || undefined}
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
        >{#if description}<span class="upload_dropzone-desc">{{ description }}</span></slot
      >
    </label>
    {:else if resolvedVariant === 'picture-card'}<div class="upload_cards">
      <slot name="cards" />
      <div {#each items as item, index} key={`${item.name}-${index}`} class="upload_card">
        {#if item.url}<img class="upload_card-image" src={item.url} alt={item.name} />{:else}<span
         
          class="upload_item-icon"
          >파일</span
        >
        <div class="upload_card-actions">
          <button
            type="button"
            class="btn btn_ghost btn_icon-only btn_sm"
            aria-label={`${item.name} ${removeLabel}`}
            onclick={remove(index)}
          >
            ×
          </button>
        </div>
      </div>
      <label
        class="upload_card upload_card-trigger"
        for={resolvedInputId}
        tabindex={disabled ? undefined : 0}
        onkeydown={openWithKeyboard}
        ><input
          {...inputAttrs}
          id={resolvedInputId}
          bind:this={input}
          class="upload_input"
          type="file"
          tabindex="-1"
          disabled={disabled}
          multiple={multiple}
          accept={accept}
          aria-invalid={error || undefined}
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
    {:else if resolvedVariant === 'avatar'}<label
     
      class="upload_avatar"
      for={resolvedInputId}
      tabindex={disabled ? undefined : 0}
      onkeydown={openWithKeyboard}
      ><input
        {...inputAttrs}
        id={resolvedInputId}
        bind:this={input}
        class="upload_input"
        type="file"
        tabindex="-1"
        disabled={disabled}
        accept={accept || 'image/*'}
        aria-invalid={error || undefined}
        @change="addFiles($event.target.files)" /><slot name="trigger"
        ><span class="avatar avatar_xl"
          >{#if avatarSrc}<img class="avatar_image" src={avatarSrc} alt={avatarAlt} />{:else}<svg
           
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
    {:else if resolvedVariant !== 'list'}<label
     
      class="upload_trigger"
      for={resolvedInputId}
      tabindex={disabled ? undefined : 0}
      onkeydown={openWithKeyboard}
      ><input
        {...inputAttrs}
        id={resolvedInputId}
        bind:this={input}
        class="upload_input"
        type="file"
        tabindex="-1"
        disabled={disabled}
        multiple={multiple}
        accept={accept}
        aria-invalid={error || undefined}
        @change="addFiles($event.target.files)"
      /><slot name="trigger"
        ><span class="btn btn_filled color_primary"
          ><span class="btn_label">{{ buttonLabel }}</span></span
        ></slot
      ></label
    >
    {#if (resolvedVariant === 'button' || resolvedVariant === 'drag') && hint}<p
     
      class="upload_hint"
    >
      {{ hint }}
    </p>
    {#if message}<p class="form_field-error" role="alert">{{ message }}</p>
    {@render children?.()}
    {#if resolvedVariant !== 'picture-card' && resolvedVariant !== 'avatar' && items.length}<ul
     
      class="upload_list"
    >
      <li
        {#each items as item, index}
        key={`${item.name}-${index}`}
        class="upload_item"
        class={{ 'is-error': item.status === 'error', 'is-done': item.status !== 'uploading' }}
      >
        <span class="upload_item-icon">파일</span
        ><span class="upload_item-body"
          ><span class="upload_item-name">{{ item.name }}</span
          ><span class="upload_item-meta">{{
            item.status === 'error'
              ? item.error || '업로드 실패'
              : `${formatSize(item.size)} · 선택 완료`
          }}</span
          >{#if item.status === 'uploading'}<span
           
            class="upload_progress"
            role="progressbar"
            aria-valuenow={item.progress || 0}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`${item.name} 업로드 진행률`}
            ><span
              class="upload_progress-bar"
              style={{ width: `${item.progress || 0}%` }} /></span></span
        ><button
          type="button"
          class="upload_item-action btn btn_ghost btn_icon-only btn_sm"
          aria-label={`${item.name} ${removeLabel}`}
          onclick={remove(index)}
        >
          ×
        </button>
      </li>
    </ul>
  </div>

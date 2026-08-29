import { createEffect, createSignal, createUniqueId, onCleanup } from 'solid-js';
/**
 * Upload 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const cx = (...values) => values.filter(Boolean).join(' '); // 조건 클래스를 문자열로 합칩니다.
const formatSize = (bytes = 0) =>
  bytes < 1024
    ? `${bytes} B`
    : bytes < 1048576
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${(bytes / 1048576).toFixed(1)} MB`; // 파일 크기를 읽기 쉬운 단위로 표시합니다.
const uploadIcon = (
  <svg
    class="icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" />
  </svg>
);
const fileIcon = (
  <svg
    class="icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2h8l4 4v16H6zM14 2v5h5" />
  </svg>
);
const plusIcon = (
  <svg
    class="icon icon_lg"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const userIcon = (
  <svg
    class="avatar_icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);
const accepts = (file, accept) =>
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
export const revokeUploadObjectUrls = (urls) => urls.forEach((url) => URL.revokeObjectURL(url)); // 생성한 object URL을 해제합니다.

export function Upload({
  id, // 루트 또는 입력에 사용할 id입니다.
  inputId, // 숨김 file input에 연결할 id입니다.
  variant = 'button', // button·drag·list·picture-card·avatar UI 유형입니다.
  size = 'md', // 업로드 영역 크기입니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  disabled = false, // 파일 선택을 비활성으로 만듭니다.
  error = false, // 검증 오류 상태를 표시합니다.
  dragover = false, // 드롭존의 드래그 오버 상태를 강제로 표시합니다.
  multiple = false, // 여러 파일 선택을 허용합니다.
  accept, // 허용할 파일 형식입니다.
  maxSize, // 바이트 단위 파일 크기 제한입니다.
  maxFiles, // 선택할 수 있는 최대 파일 개수입니다.
  files: controlledFiles, // 제어 컴포넌트의 파일 목록입니다.
  defaultFiles = [], // 비제어 컴포넌트의 초기 파일 목록입니다.
  onChange, // 선택 또는 삭제 후 호출되는 콜백입니다.
  onError, // 파일 검증 실패 시 호출되는 콜백입니다.
  buttonLabel = '파일 선택', // 기본 트리거 버튼 문구입니다.
  title = '파일을 끌어다 놓거나 선택하세요', // 드롭존 제목입니다.
  description, // 드롭존 보조 설명입니다.
  hint, // 버튼·드롭존 아래 도움말입니다.
  removeLabel = '파일 삭제', // 삭제 버튼의 접근 가능한 이름 접미사입니다.
  trigger, // 기본 트리거 대신 사용할 사용자 정의 콘텐츠입니다.
  cards, // picture-card 변형의 추가 카드 콘텐츠입니다.
  avatarSrc, // avatar 변형의 미리보기 이미지 주소입니다.
  avatarAlt = '프로필 사진', // avatar 이미지 대체 텍스트입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children, // 목록 앞·사이에 넣을 추가 콘텐츠입니다.
  ...props // 나머지 속성을 숨김 file input에 전달합니다.
}) {
  // 입력 id, 변형 별칭, 파일 상태와 object URL을 준비합니다.
  const generatedId = createUniqueId().replace(/:/g, '');
  const resolvedInputId = inputId || id || `upload-${generatedId}`;
  const resolvedVariant = { dropzone: 'drag', cards: 'picture-card' }[variant] || variant; // 이전 별칭을 정규화합니다.
  let inputRef = null;
  const createdUrls = new Set();
  const [innerFiles, setInnerFiles] = createSignal(defaultFiles);
  const [message, setMessage] = createSignal('');
  const [dragActive, setDragActive] = createSignal(false);
  const files = () => controlledFiles ?? innerFiles(); // 최종 파일 목록입니다.

  // 언마운트 시 생성한 미리보기 URL을 모두 해제합니다.
  onCleanup(() => revokeUploadObjectUrls(createdUrls));

  const update = (next) => {
    // 제어·비제어에 맞게 목록을 갱신하고 File 배열을 onChange로 전달합니다.
    if (controlledFiles === undefined) setInnerFiles(next);
    onChange?.(next.map((item) => item.file ?? item));
  };

  const addFiles = (list) => {
    // 형식·크기·개수를 검증한 뒤 미리보기 URL과 함께 목록에 추가합니다.
    if (disabled) return;
    const incoming = Array.from(list || []);
    const invalid = incoming.find(
      (file) => !accepts(file, accept) || (maxSize && file.size > maxSize),
    );
    if (invalid) {
      const nextMessage = !accepts(invalid, accept)
        ? `${invalid.name}: 허용되지 않는 파일 형식입니다.`
        : `${invalid.name}: 파일 크기 제한을 초과했습니다.`;
      setMessage(nextMessage);
      onError?.(nextMessage);
      return;
    }
    const limit = multiple ? maxFiles || Infinity : 1;
    const available = Math.max(0, limit - (multiple ? files().length : 0));
    if (!available || incoming.length > available) {
      const nextMessage = `파일은 최대 ${limit}개까지 선택할 수 있습니다.`;
      setMessage(nextMessage);
      onError?.(nextMessage);
      return;
    }
    const added = incoming.slice(0, available).map((file) => {
      const preview = file.type.startsWith('image/') ? URL.createObjectURL(file) : '';
      if (preview) createdUrls.add(preview);
      return {
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        url: preview,
        status: 'done',
      };
    });
    setMessage('');
    update(multiple ? [...files(), ...added] : added);
    if (inputRef) inputRef.value = '';
  };

  const remove = (index) => {
    // 해당 항목의 object URL을 정리한 뒤 목록에서 제거합니다.
    const item = files()[index];
    if (item?.url && createdUrls.has(item.url)) {
      URL.revokeObjectURL(item.url);
      createdUrls.delete(item.url);
    }
    update(files().filter((_, itemIndex) => itemIndex !== index));
  };

  const openWithKeyboard = (event) => {
    // Enter·Space로 숨김 file input을 엽니다.
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      inputRef?.click();
    }
  };

  // 공통 숨김 file input을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      ref={inputRef}
      id={resolvedInputId}
      class="upload_input"
      type="file"
      tabIndex={-1}
      disabled={disabled}
      multiple={multiple}
      accept={accept}
      aria-invalid={error || undefined}
      onChange={(event) => addFiles(event.target.files)}
    />
  );

  // 너비·크기·비활성 클래스를 조합합니다.
  const classes = cx(
    'upload', // 업로드 루트 필수 클래스입니다.
    fit && 'upload_fit', // 제한 너비 변형입니다.
    size !== 'md' && `upload_${size}`, // sm·lg 크기 변형입니다.
    disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  );

  // 변형별 트리거 UI를 구성합니다.
  const triggerNode =
    resolvedVariant === 'list' ? null : resolvedVariant === 'drag' ? (
      <label
        class={cx(
          'upload_dropzone',
          (dragover || dragActive()) && 'is-dragover',
          (error || message()) && 'is-error',
        )}
        htmlFor={resolvedInputId}
        tabIndex={disabled ? undefined : 0}
        onKeyDown={openWithKeyboard}
        onDragEnter={(event) => {
          event.preventDefault();
          if (!disabled) setDragActive(true);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setDragActive(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragActive(false);
          addFiles(event.dataTransfer.files);
        }}
      >
        {input}
        {trigger ?? (
          <>
            <span class="upload_dropzone-icon">{uploadIcon}</span>
            <span class="upload_dropzone-title">{title}</span>
            {description && <span class="upload_dropzone-desc">{description}</span>}
          </>
        )}
      </label>
    ) : resolvedVariant === 'picture-card' ? (
      <div class="upload_cards">
        {cards}
        {files().map((item, index) => (
          <div class="upload_card" key={`${item.name}-${index}`}>
            {item.url ? (
              <img class="upload_card-image" src={item.url} alt={item.name} />
            ) : (
              <span class="upload_item-icon">{fileIcon}</span>
            )}
            <div class="upload_card-actions">
              <button
                type="button"
                class="btn btn_ghost btn_icon-only btn_sm"
                aria-label={`${item.name} ${removeLabel}`}
                onClick={() => remove(index)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
        <label
          class="upload_card upload_card-trigger"
          htmlFor={resolvedInputId}
          tabIndex={disabled ? undefined : 0}
          onKeyDown={openWithKeyboard}
        >
          {input}
          {trigger ?? (
            <>
              {plusIcon}
              <span>{buttonLabel}</span>
            </>
          )}
        </label>
      </div>
    ) : resolvedVariant === 'avatar' ? (
      <label
        class="upload_avatar"
        htmlFor={resolvedInputId}
        tabIndex={disabled ? undefined : 0}
        onKeyDown={openWithKeyboard}
      >
        {input}
        {trigger ?? (
          <span class="avatar avatar_xl">
            {avatarSrc ? (
              <img class="avatar_image" src={avatarSrc} alt={avatarAlt} />
            ) : (
              userIcon
            )}
          </span>
        )}
        <span class="upload_avatar-overlay" aria-hidden="true">
          {uploadIcon}
        </span>
      </label>
    ) : (
      <label
        class="upload_trigger"
        htmlFor={resolvedInputId}
        tabIndex={disabled ? undefined : 0}
        onKeyDown={openWithKeyboard}
      >
        {input}
        {trigger ?? (
          <span class="btn btn_filled color_primary">
            <span class="btn_label">{buttonLabel}</span>
          </span>
        )}
      </label>
    );

  // picture-card·avatar를 제외한 변형은 선택 파일 목록을 따로 표시합니다.
  const listNode =
    files().length > 0 && resolvedVariant !== 'picture-card' && resolvedVariant !== 'avatar' ? (
      <ul class="upload_list">
        {files().map((item, index) => (
          <li
            class={cx(
              'upload_item',
              item.status === 'error' && 'is-error',
              item.status !== 'uploading' && 'is-done',
            )}
            key={`${item.name}-${index}`}
          >
            <span class="upload_item-icon">{fileIcon}</span>
            <span class="upload_item-body">
              <span class="upload_item-name">{item.name}</span>
              <span class="upload_item-meta">
                {item.status === 'error'
                  ? item.error || '업로드 실패'
                  : `${formatSize(item.size)} · 선택 완료`}
              </span>
              {item.status === 'uploading' && (
                <span
                  class="upload_progress"
                  role="progressbar"
                  aria-valuenow={item.progress || 0}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${item.name} 업로드 진행률`}
                >
                  <span
                    class="upload_progress-bar"
                    style={{ width: `${item.progress || 0}%` }}
                  />
                </span>
              )}
            </span>
            <button
              type="button"
              class="upload_item-action btn btn_ghost btn_icon-only btn_sm"
              aria-label={`${item.name} ${removeLabel}`}
              onClick={() => remove(index)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <div class={classes} data-component="Upload">
      {triggerNode}
      {(resolvedVariant === 'button' || resolvedVariant === 'drag') && hint && (
        <p class="upload_hint">{hint}</p>
      )}
      {message() && (
        <p class="form_field-error" role="alert">
          {message()}
        </p>
      )}
      {children}
      {listNode}
    </div>
  );
}

export default Upload;

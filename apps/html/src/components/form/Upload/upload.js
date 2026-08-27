/**
 * Upload 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initUpload(root = document) {
  const uploads = root.querySelectorAll('[data-component="Upload"]');
  const formatSize = (bytes) =>
    bytes < 1024
      ? `${bytes} B`
      : bytes < 1048576
        ? `${(bytes / 1024).toFixed(1)} KB`
        : `${(bytes / 1048576).toFixed(1)} MB`;
  uploads.forEach((upload) => {
    const input = upload.querySelector('.upload_input');
    const list = upload.querySelector('[data-upload-list]');
    const error = upload.querySelector('[data-upload-error]');
    const dropzone = upload.querySelector('.upload_dropzone');
    if (!input || !list || upload.dataset.uploadReady) return;
    upload.dataset.uploadReady = 'true';
    let files = [];
    const accepts = (file) =>
      !input.accept ||
      input.accept.split(',').some((rule) => {
        const value = rule.trim();
        return value.startsWith('.')
          ? file.name.toLowerCase().endsWith(value.toLowerCase())
          : value.endsWith('/*')
            ? file.type.startsWith(value.slice(0, -1))
            : file.type === value;
      });
    const fail = (message) => {
      if (error) {
        error.textContent = message;
        error.hidden = false;
      }
      dropzone?.classList.add('is-error');
      upload.dispatchEvent(new CustomEvent('uploaderror', { bubbles: true, detail: { message } }));
    };
    const escape = (value) =>
      String(value).replace(
        /[&<>"']/g,
        (character) =>
          ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character],
      );
    const render = () => {
      list.innerHTML = files
        .map(
          (file, index) =>
            `<li class="upload_item is-done"><span class="upload_item-icon" aria-hidden="true">▧</span><span class="upload_item-body"><span class="upload_item-name">${escape(file.name)}</span><span class="upload_item-meta">${formatSize(file.size)} · 선택 완료</span></span><button type="button" class="upload_item-action btn btn_ghost btn_icon-only btn_sm" data-upload-remove="${index}" aria-label="${escape(file.name)} 파일 삭제">×</button></li>`,
        )
        .join('');
    };
    const update = (incoming) => {
      const selected = Array.from(incoming || []);
      const invalid = selected.find(
        (file) =>
          !accepts(file) ||
          (Number(upload.dataset.maxSize) && file.size > Number(upload.dataset.maxSize)),
      );
      if (invalid) {
        fail(
          !accepts(invalid)
            ? `${invalid.name}: 허용되지 않는 파일 형식입니다.`
            : `${invalid.name}: 파일 크기 제한을 초과했습니다.`,
        );
        return;
      }
      const limit = input.multiple ? Number(upload.dataset.maxFiles) || Infinity : 1;
      if ((input.multiple ? files.length : 0) + selected.length > limit) {
        fail(`파일은 최대 ${limit}개까지 선택할 수 있습니다.`);
        return;
      }
      files = input.multiple ? [...files, ...selected] : selected.slice(0, 1);
      if (error) error.hidden = true;
      dropzone?.classList.remove('is-error');
      input.value = '';
      render();
      upload.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { files } }));
    };
    input.addEventListener('change', () => update(input.files));
    upload
      .querySelectorAll('.upload_trigger, .upload_dropzone, .upload_card-trigger')
      .forEach((trigger) =>
        trigger.addEventListener('keydown', (event) => {
          if (!input.disabled && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            input.click();
          }
        }),
      );
    upload.addEventListener('click', (event) => {
      const button = event.target.closest('[data-upload-remove]');
      if (!button) return;
      files.splice(Number(button.dataset.uploadRemove), 1);
      render();
      upload.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { files } }));
    });
    if (dropzone) {
      ['dragenter', 'dragover'].forEach((type) =>
        dropzone.addEventListener(type, (event) => {
          event.preventDefault();
          if (!input.disabled) dropzone.classList.add('is-dragover');
        }),
      );
      dropzone.addEventListener('dragleave', (event) => {
        if (!dropzone.contains(event.relatedTarget)) dropzone.classList.remove('is-dragover');
      });
      dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropzone.classList.remove('is-dragover');
        update(event.dataTransfer.files);
      });
    }
  });
  return uploads;
}

import {
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

export interface UploadFileItem {
  file?: File;
  name?: string;
  size?: number;
  preview?: string;
}

const accepts = (file: File, accept?: string) =>
  !accept ||
  accept.split(',').some((rule) => {
    const value = rule.trim();
    return value.startsWith('.')
      ? file.name.toLowerCase().endsWith(value.toLowerCase())
      : value.endsWith('/*')
        ? file.type.startsWith(value.slice(0, -1))
        : file.type === value;
  });

@Component({
  selector: 'Upload',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="Upload" [attr.data-variant]="resolvedVariant()">
      <input
        #fileInput
        type="file"
        class="upload_input"
        [id]="resolvedInputId()"
        [disabled]="disabled()"
        [multiple]="multiple()"
        [accept]="accept() || null"
        (change)="onFileChange($event)"
      />
      @switch (resolvedVariant()) {
        @case ('drag') {
          <div
            class="upload_dropzone"
            [class.is-dragover]="dragActive()"
            [class.is-error]="error()"
            (dragover)="onDragOver($event)"
            (dragleave)="onDragLeave()"
            (drop)="onDrop($event)"
          >
            <p class="upload_title">{{ title() }}</p>
            @if (description()) { <p class="upload_desc">{{ description() }}</p> }
            <button type="button" class="btn btn_outline" [disabled]="disabled()" (click)="openPicker()">
              {{ buttonLabel() }}
            </button>
          </div>
        }
        @default {
          <button type="button" class="btn btn_outline upload_btn" [disabled]="disabled()" (click)="openPicker()">
            {{ buttonLabel() }}
          </button>
        }
      }
      @if (message()) {
        <p class="upload_message" role="alert">{{ message() }}</p>
      }
      @if (hint()) {
        <p class="upload_hint">{{ hint() }}</p>
      }
      @if (files().length) {
        <ul class="upload_list">
          @for (item of files(); track $index) {
            <li class="upload_item">
              <span class="upload_name">{{ item.name ?? item.file?.name }}</span>
              <button type="button" class="upload_remove" [attr.aria-label]="removeLabel()" (click)="remove($index)">
                삭제
              </button>
            </li>
          }
        </ul>
      }
      <ng-content />
    </div>
  `,
})
export class Upload {
  readonly hostClass = input<string>('');
  readonly id = input<string | undefined>(undefined);
  readonly inputId = input<string | undefined>(undefined);
  readonly variant = input<string>('button');
  readonly size = input<string>('md');
  readonly fit = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly error = input<boolean>(false);
  readonly multiple = input<boolean>(false);
  readonly accept = input<string | undefined>(undefined);
  readonly maxSize = input<number | undefined>(undefined);
  readonly maxFiles = input<number | undefined>(undefined);
  readonly files = input<UploadFileItem[]>([]);
  readonly buttonLabel = input<string>('파일 선택');
  readonly title = input<string>('파일을 끌어다 놓거나 선택하세요');
  readonly description = input<string | undefined>(undefined);
  readonly hint = input<string | undefined>(undefined);
  readonly removeLabel = input<string>('파일 삭제');

  readonly filesChange = output<File[]>();
  readonly errorEvent = output<string>();

  private readonly fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');
  private readonly destroyRef = inject(DestroyRef);

  readonly innerFiles = signal<UploadFileItem[]>([]);
  readonly message = signal('');
  readonly dragActive = signal(false);

  private static idCounter = 0;
  readonly resolvedInputId = computed(
    () => this.inputId() || this.id() || `upload-${++Upload.idCounter}`,
  );

  readonly resolvedVariant = computed(() => {
    const v = this.variant();
    if (v === 'dropzone') return 'drag';
    if (v === 'cards') return 'picture-card';
    return v;
  });

  readonly classes = computed(() =>
    [
      'upload',
      this.size() !== 'md' && `upload_${this.size()}`,
      this.fit() && 'upload_fit',
      this.error() && 'is-error',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      if (this.files().length) this.innerFiles.set(this.files());
    });
  }

  openPicker() {
    this.fileInput()?.nativeElement.click();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.addFiles(input.files);
    input.value = '';
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragActive.set(true);
  }

  onDragLeave() {
    this.dragActive.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragActive.set(false);
    this.addFiles(event.dataTransfer?.files ?? null);
  }

  addFiles(list: FileList | null) {
    if (this.disabled() || !list) return;
    const incoming = Array.from(list);
    const accept = this.accept();
    const maxSize = this.maxSize();
    const invalid = incoming.find((file) => !accepts(file, accept) || (maxSize && file.size > maxSize));
    if (invalid) {
      const msg = !accepts(invalid, accept)
        ? `${invalid.name}: 허용되지 않는 파일 형식입니다.`
        : `${invalid.name}: 파일 크기 제한을 초과했습니다.`;
      this.message.set(msg);
      this.errorEvent.emit(msg);
      return;
    }
    const limit = this.multiple() ? this.maxFiles() || Infinity : 1;
    const current = this.innerFiles();
    const available = Math.max(0, limit - (this.multiple() ? current.length : 0));
    const added = incoming.slice(0, available).map((file) => ({
      file,
      name: file.name,
      size: file.size,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
    }));
    const next = this.multiple() ? [...current, ...added] : added;
    this.innerFiles.set(next);
    this.message.set('');
    this.filesChange.emit(next.map((item) => item.file!).filter(Boolean));
  }

  remove(index: number) {
    const next = this.innerFiles().filter((_, i) => i !== index);
    this.innerFiles.set(next);
    this.filesChange.emit(next.map((item) => item.file!).filter(Boolean));
  }
}

export default Upload;

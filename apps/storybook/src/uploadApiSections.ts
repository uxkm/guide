import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const uploadApiSections: ApiSectionData[] = [
  table('React · Next.js API', [
    { name: 'variant', type: "'button' | 'drag' | 'list' | 'picture-card' | 'avatar'", default: "'button'", description: '다른 프레임워크 브랜치와 동일한 업로드 UI 유형입니다.' },
    { name: 'files · defaultFiles', type: 'UploadFile[]', default: '[]', description: '제어 파일 목록과 초기 목록입니다.' },
    { name: 'multiple · accept', type: 'boolean · string', default: 'false · —', description: '다중 선택과 허용 파일 형식입니다.' },
    { name: 'maxSize · maxFiles', type: 'number', default: '—', description: '바이트 단위 파일 크기와 개수 제한입니다.' },
    { name: 'size · fit · disabled · error · dragover', type: 'string · boolean', default: "'md' · false", description: '크기, 너비, 상태 옵션입니다.' },
    { name: 'inputId · trigger · cards', type: 'string · ReactNode', default: '—', description: '파일 input ID와 사용자 정의 트리거·카드 콘텐츠입니다.' },
    { name: 'onChange', type: '(files: File[]) => void', default: '—', description: '선택 또는 삭제 후 호출됩니다.' },
    { name: 'onError', type: '(message: string) => void', default: '—', description: '파일 검증 실패 시 호출됩니다.' }
  ], 'Next.js는 @uxkm/react/upload를 재사용합니다.'),
  table('Vue · Nuxt API', [
    { name: 'v-model', type: 'UploadFile[]', default: '[]', description: '파일 목록과 update:modelValue 이벤트입니다.' },
    { name: 'variant · size', type: 'string', default: "'button' · 'md'", description: 'button, drag, list, picture-card, avatar 유형과 크기입니다.' },
    { name: 'trigger · cards · default slot', type: 'slot', default: '—', description: '트리거, 사진 카드, 파일 목록 콘텐츠입니다.' },
    { name: 'multiple · accept · max-size · max-files', type: 'boolean · string · number', default: 'false · —', description: '파일 선택 및 검증 조건입니다.' },
    { name: '@change · @error', type: 'event', default: '—', description: '파일 변경과 검증 오류 이벤트입니다.' }
  ], 'Nuxt는 @uxkm/vue/upload를 재사용합니다.'),
  table('HTML · Gulp', [
    { name: 'upload_trigger · upload_dropzone · upload_cards', type: 'class', default: '—', description: '업로드 UI 구조입니다.' },
    { name: 'data-max-size · data-max-files', type: 'number', default: '—', description: '파일 크기와 개수 제한입니다.' },
    { name: 'change', type: 'CustomEvent', default: '—', description: 'detail.files로 선택 파일 목록을 제공합니다.' },
    { name: 'uploaderror', type: 'CustomEvent', default: '—', description: 'detail.message로 검증 오류를 제공합니다.' },
    { name: 'is-dragover · is-error · is-disabled', type: 'class', default: '—', description: '드래그와 상태 클래스입니다.' }
  ]),
  table('디자인 토큰', [
    { name: '--upload-max-width · --upload-gap', type: 'length', default: '입력 너비 · space-sm', description: '컨테이너 너비와 간격입니다.' },
    { name: '--upload-dropzone-padding · --upload-dropzone-icon-size', type: 'length', default: '크기별 값', description: '드롭존의 여백과 아이콘 크기입니다.' },
    { name: '--upload-card-size', type: 'length', default: '6.5rem', description: '사진 카드 크기입니다.' },
    { name: '--upload-progress-height', type: 'length', default: '4px', description: '진행률 표시 높이입니다.' }
  ]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:input[type=file]',
        type: 'XML element',
        default: "type='file'",
        description: '파일 선택 입력입니다. accept, multiple, disabled 속성을 조합합니다.',
      },
      {
        name: 'ref · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '선택 파일 정보를 DataCollection 경로에 연결합니다.',
      },
      {
        name: 'w2:group.upload · upload_dropzone · upload_cards · upload_avatar',
        type: 'XML element · class',
        default: '—',
        description: '버튼, 드롭존, 사진 카드, 아바타 업로드 구조를 만듭니다.',
      },
      {
        name: 'upload_list · upload_item',
        type: 'class',
        default: '—',
        description: '업로드 목록과 진행·완료·오류 항목을 표시합니다.',
      },
      {
        name: 'ev:onchange',
        type: 'WebSquare event',
        default: '—',
        description: '파일 선택 후 검증, 목록 갱신, 업로드 처리를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];

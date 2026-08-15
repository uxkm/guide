import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });

export const textareaApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', [
    { name: 'value · defaultValue', type: 'string | number', default: "— · ''", description: '제어 값과 비제어 초기 값입니다.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '패딩과 글자 크기입니다.' },
    { name: 'resize', type: "'none' | 'vertical' | 'horizontal' | 'both'", default: "'none'", description: '사용자가 조절할 수 있는 방향입니다.' },
    { name: 'fit', type: 'boolean', default: 'false', description: '최대 너비를 320px로 제한합니다.' },
    { name: 'showCount', type: 'boolean', default: 'false', description: '접근 가능한 실시간 글자 수를 표시합니다.' },
    { name: 'maxLength', type: 'number', default: '—', description: '네이티브 최대 글자 수이며 카운터의 한도입니다.' },
    { name: 'disabled · readOnly · error', type: 'boolean', default: 'false', description: '비활성, 읽기 전용, 오류 상태입니다.' },
    { name: 'className · wrapperClassName · ...props', type: 'string · textarea attributes', default: '—', description: 'textarea와 카운터 래퍼에 적용할 값입니다.' }
  ], 'Next.js는 @uxkm/react/textarea를 재사용합니다.'),
  table('React · Next.js API · Events', [{ name: 'onChange', type: 'ChangeEvent handler', default: '—', description: '값이 바뀔 때 호출됩니다.' }]),
  table('Vue · Nuxt API', [
    { name: 'v-model / model-value', type: 'string | number', default: "''", description: '입력 값과 update:modelValue 이벤트입니다.' },
    { name: 'size · resize', type: 'string', default: "'md' · 'none'", description: '크기와 크기 조절 방향입니다.' },
    { name: 'fit · show-count', type: 'boolean', default: 'false', description: '제한 너비와 글자 수 표시입니다.' },
    { name: 'max-length', type: 'string | number', default: '—', description: '최대 글자 수와 카운터 한도입니다.' },
    { name: 'disabled · error', type: 'boolean', default: 'false', description: '비활성 및 오류 상태입니다.' }
  ], 'Nuxt는 @uxkm/vue/textarea를 재사용합니다.'),
  table('HTML · Gulp · 클래스', [
    { name: 'textarea · textarea_sm · textarea_lg', type: 'class', default: '—', description: '루트와 크기 변형입니다.' },
    { name: 'display_contents · input_group-label_hidden', type: 'class', default: '—', description: '암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.' },
    { name: 'textarea_fit · textarea_wrap_fit', type: 'class', default: '—', description: '단독 textarea와 카운터 래퍼의 제한 너비입니다.' },
    { name: 'textarea_resize_*', type: 'class', default: 'textarea_resize_none', description: 'none, vertical, horizontal, both 방향입니다.' },
    { name: 'textarea_wrap · textarea_show-count', type: 'class', default: '—', description: '글자 수 표시 래퍼입니다.' },
    { name: 'textarea_count · is-limit', type: 'class', default: '—', description: '카운터와 최대 글자 수 도달 상태입니다.' },
    { name: 'is-error · is-success', type: 'class', default: '—', description: '검증 상태입니다.' }
  ]),
  table('디자인 토큰', [
    { name: '--textarea-min-height', type: 'length', default: '5rem', description: 'rows가 없을 때의 최소 높이입니다.' },
    { name: '--textarea-count-inset-x · --textarea-count-inset-y', type: 'length', default: '.75rem · .5rem', description: '카운터의 가로·세로 안쪽 여백입니다.' },
    { name: '--input-max-width', type: 'length', default: '320px', description: 'fit 변형의 최대 너비입니다.' }
  ])
];

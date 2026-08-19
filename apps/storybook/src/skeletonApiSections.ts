import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });

export const skeletonApiSections: ApiSectionData[] = [
  section('Skeleton API', [
    { name: 'active', type: 'boolean', default: 'true', description: '쉬머 애니메이션 활성 여부입니다.' },
    { name: 'avatar · round', type: 'boolean', default: 'false', description: '아바타 행 또는 원형 플레이스홀더를 표시합니다.' },
    { name: 'paragraph', type: 'boolean | number', default: 'false', description: '본문 줄 수입니다. 기본 형태에서는 3줄을 표시합니다.' },
    { name: 'ariaLabel', type: 'string', default: "'콘텐츠 로딩 중'", description: '로딩 영역의 접근성 이름입니다.' },
    { name: 'children · default slot', type: 'ReactNode', default: '—', description: '카드처럼 직접 구성하는 추가 플레이스홀더입니다.' },
  ]),
  section('HTML · Gulp', [
    { name: 'skeleton_group · skeleton_row', type: 'class', default: '—', description: '세로 그룹과 아바타 행 레이아웃입니다.' },
    { name: 'skeleton_text · skeleton_title · skeleton_circle', type: 'class', default: '—', description: '텍스트, 제목, 원형 형태입니다.' },
    { name: 'skeleton_image · skeleton_button · skeleton_block', type: 'class', default: '—', description: '이미지, 버튼, 블록 형태입니다.' },
    { name: 'skeleton_w-sm · skeleton_w-md · skeleton_w-lg', type: 'class', default: '—', description: '플레이스홀더 너비를 조절합니다.' },
    { name: 'skeleton_static', type: 'class', default: '—', description: '쉬머 애니메이션을 끕니다.' },
  ]),
  section('디자인 토큰', [
    { name: '--skeleton-bg · --skeleton-shine', type: 'color', default: 'surface tokens', description: '기본 면과 쉬머 색상입니다.' },
    { name: '--skeleton-gap · --skeleton-duration', type: 'length · time', default: "space-sm · 1.4s", description: '항목 간격과 애니메이션 시간입니다.' },
    { name: '--skeleton-title-width · --skeleton-avatar-size', type: 'length', default: '40% · avatar-size', description: '제목 너비와 원형 크기입니다.' },
  ]),
];

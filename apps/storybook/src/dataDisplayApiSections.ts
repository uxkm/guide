import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' }, { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }
];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const vueRows = (rows: ApiRow[]) => rows.map((row) => row.name === 'ariaLabel'
  ? { ...row, name: 'aria-label' }
  : row.name === 'ariaHidden' ? { ...row, name: 'aria-hidden' }
  : row.name === 'badgeColor' ? { ...row, name: 'badge-color' }
  : row.name === 'badgeLabel' ? { ...row, name: 'badge-label' }
  : row.name === 'closeLabel' ? { ...row, name: 'close-label' }
  : row);

const avatarProps: ApiRow[] = [
  { name: 'src', type: 'string', default: '—', description: '프로필 이미지 URL' },
  { name: 'alt', type: 'string', default: "''", description: '프로필 이미지 대체 텍스트' },
  { name: 'initials', type: 'string', default: '—', description: '이미지·아이콘이 없을 때 표시할 이니셜' },
  { name: 'color', type: 'string', default: '—', description: '이니셜·아이콘 배경 color_*' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: 'md', description: '아바타 크기' },
  { name: 'square', type: 'boolean', default: 'false', description: '사각형 모서리' },
  { name: 'badgeColor', type: 'string', default: '—', description: '상태 점 color_*' },
  { name: 'badgeLabel', type: 'string', default: '—', description: '상태 점 접근성 이름' },
  { name: 'ariaHidden', type: 'boolean', default: 'false', description: '장식용 아바타를 접근성 트리에서 숨김' }
];
const avatarClasses: ApiRow[] = [
  { name: 'avatar · avatar_image · avatar_icon · avatar_badge', type: 'class', default: '—', description: '루트와 내부 이미지·아이콘·상태 점' },
  { name: 'avatar_sm · avatar_lg · avatar_xl · avatar_square', type: 'class', default: '—', description: '크기·형태 변형' },
  { name: 'avatar_group · color_*', type: 'class', default: '—', description: '겹침 그룹과 공통 색상' }
];
const avatarTokens: ApiRow[] = [
  { name: '--avatar-size-sm · --avatar-size · --avatar-size-lg · --avatar-size-xl', type: 'length', default: '1.5rem · 2rem · 2.5rem · 3.5rem', description: '아바타 지름' },
  { name: '--avatar-group-overlap', type: 'length', default: '-0.5rem', description: '그룹 겹침 오프셋' },
  { name: '--avatar-badge-size-sm · --avatar-badge-size · --avatar-badge-size-lg', type: 'length', default: '6px · 8px · 10px', description: '상태 점 크기' }
];
export const avatarApiSections: ApiSectionData[] = [
  section('React · Next.js API · Avatar Props', avatarProps, 'Next.js는 `@uxkm/react/avatar`를 재사용합니다.'),
  section('React · Next.js API · AvatarGroup Props', [{ name: 'ariaLabel', type: 'string', default: '—', description: '그룹의 접근성 이름' }, { name: 'children', type: 'ReactNode', default: '—', description: 'Avatar 목록' }]),
  section('Vue · Nuxt API · Avatar Props', vueRows(avatarProps), 'Nuxt는 `@uxkm/vue/avatar`를 재사용합니다.'),
  section('Vue · Nuxt API · Slots', [{ name: 'default', type: 'slot', default: '—', description: '이니셜 대체 콘텐츠' }, { name: 'icon', type: 'slot', default: '—', description: '아이콘 콘텐츠' }]),
  section('HTML · Gulp · 공통 클래스', avatarClasses), section('공통 API · 디자인 토큰', avatarTokens)
];

const badgeProps: ApiRow[] = [
  { name: 'color', type: 'string', default: 'primary', description: '공통 color_* 색상' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: 'md', description: '배지 크기' },
  { name: 'dot', type: 'boolean', default: 'false', description: '텍스트 앞 상태 점' },
  { name: 'count', type: 'boolean', default: 'false', description: '숫자 카운트 형태' },
  { name: 'dotOnly', type: 'boolean', default: 'false', description: '텍스트 없는 상태 점' },
  { name: 'label', type: 'string', default: '—', description: '배지 텍스트. 자식 콘텐츠가 우선함' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '상태 점·카운트의 접근성 이름' }
];
export const badgeApiSections: ApiSectionData[] = [
  section('React · Next.js API · Badge Props', badgeProps, 'Next.js는 `@uxkm/react/badge`를 재사용합니다.'),
  section('React · Next.js API · BadgeWrap Props', [{ name: 'ariaLabel', type: 'string', default: '—', description: '래퍼 접근성 이름' }, { name: 'children', type: 'ReactNode', default: '—', description: '기준 요소와 Badge' }]),
  section('Vue · Nuxt API · Badge Props', vueRows(badgeProps), 'Nuxt는 `@uxkm/vue/badge`를 재사용합니다.'),
  section('HTML · Gulp · 공통 클래스', [
    { name: 'badge · badge_sm · badge_lg', type: 'class', default: '—', description: '배지 루트와 크기 변형' },
    { name: 'badge_dot · badge_count · badge_dot-only', type: 'class', default: '—', description: '형태 변형' },
    { name: 'badge_wrap · color_*', type: 'class', default: '—', description: '겹침 래퍼와 공통 색상' }
  ]),
  section('공통 API · 디자인 토큰', [
    { name: '--badge-padding-* · --badge-font-size-*', type: 'length', default: '—', description: '크기별 패딩과 글자 크기' },
    { name: '--badge-dot-size-sm · --badge-dot-size · --badge-dot-size-lg', type: 'length', default: '5px · 6px · 7px', description: '상태 점 크기' },
    { name: '--badge-count-min-width', type: 'length', default: '1.25rem', description: '카운트 최소 너비' }
  ])
];

const tagProps: ApiRow[] = [
  { name: 'color', type: 'string', default: 'primary', description: '공통 color_* 색상' },
  { name: 'variant', type: "'filled' | 'solid' | 'outline' | 'borderless'", default: 'filled', description: '태그 스킨' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: 'md', description: '태그 크기' },
  { name: 'round', type: 'boolean', default: 'false', description: 'pill 형태' },
  { name: 'checkable', type: 'boolean', default: 'false', description: 'aria-pressed를 갖는 토글 버튼' },
  { name: 'add', type: 'boolean', default: 'false', description: '추가 버튼 형태' },
  { name: 'closable', type: 'boolean', default: 'false', description: '닫기 버튼 표시' },
  { name: 'selected', type: 'boolean', default: 'false', description: '선택 상태' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성 상태' },
  { name: 'label', type: 'string', default: '—', description: '태그 텍스트. 자식 콘텐츠가 우선함' },
  { name: 'href', type: 'string', default: '—', description: '링크 태그 URL' },
  { name: 'closeLabel', type: 'string', default: '—', description: '닫기 버튼 접근성 이름' },
  { name: 'ripple', type: 'boolean', default: '자동', description: '선택·추가·링크 태그 클릭 파장 효과' }
];
export const tagApiSections: ApiSectionData[] = [
  section('React · Next.js API · Tag Props', tagProps, 'Next.js는 `@uxkm/react/tag`를 재사용합니다.'),
  section('React · Next.js API · Events', [{ name: 'onClick', type: '(event) => void', default: '—', description: '태그 본문 활성화' }, { name: 'onClose', type: '(event) => void', default: '—', description: '닫기 버튼 활성화' }]),
  section('Vue · Nuxt API · Tag Props', vueRows(tagProps), 'Nuxt는 `@uxkm/vue/tag`를 재사용합니다.'),
  section('Vue · Nuxt API · Slots / Events', [{ name: 'default', type: 'slot', default: '—', description: '태그 본문' }, { name: 'icon', type: 'slot', default: '—', description: '앞 아이콘' }, { name: 'click · close', type: 'event', default: '—', description: '본문·닫기 버튼 이벤트' }]),
  section('공통 API · TagGroup', [{ name: 'tight', type: 'boolean', default: 'false', description: '좁은 그룹 간격' }, { name: 'ariaLabel', type: 'string', default: '—', description: '그룹 접근성 이름' }]),
  section('HTML · Gulp · 공통 클래스', [
    { name: 'tag · tag_solid · tag_outline · tag_borderless', type: 'class', default: '—', description: '태그 루트와 스킨' },
    { name: 'tag_sm · tag_lg · tag_round', type: 'class', default: '—', description: '크기·형태' },
    { name: 'tag_checkable · tag_add · is-selected · is-disabled', type: 'class', default: '—', description: '동작·상태' },
    { name: 'tag_icon · tag_close · tag_control', type: 'class', default: '—', description: '내부 파트' },
    { name: 'tag_group · tag_group-tight · color_*', type: 'class', default: '—', description: '그룹과 공통 색상' }
  ]),
  section('공통 API · 디자인 토큰', [
    { name: '--tag-padding-* · --tag-font-size-*', type: 'length', default: '—', description: '크기별 패딩과 글자 크기' },
    { name: '--tag-gap', type: 'length', default: 'var(--space-xs)', description: '아이콘·텍스트·닫기 버튼 간격' },
    { name: '--tag-close-size', type: 'length', default: '0.875rem', description: '닫기 버튼 크기' },
    { name: '--tag-add-border-style', type: 'border-style', default: 'dashed', description: '추가 태그 테두리' }
  ])
];

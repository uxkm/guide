export const avatarPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const avatarProps = [
  { name: 'as', type: 'React.ElementType', default: 'span', description: '루트 요소 또는 커스텀 컴포넌트' },
  { name: 'name', type: 'string', default: '—', description: 'common-icons 키. avatar_icon으로 렌더합니다' },
  { name: 'src', type: 'string | StaticImport', default: '—', description: '이미지 URL 또는 Next 정적 이미지 (avatar_image)' },
  { name: 'alt', type: 'string', default: '—', description: '이미지 대체 텍스트' },
  { name: 'initials', type: 'string', default: '—', description: '이니셜 텍스트 (이미지·아이콘 없을 때)' },
  { name: 'color', type: 'string', default: '—', description: '이니셜·아이콘 배경 color_*' },
  { name: 'size', type: `'sm' | 'md' | 'lg' | 'xl'`, default: 'md', description: 'avatar_sm · avatar_lg · avatar_xl' },
  { name: 'square', type: 'boolean', default: 'false', description: '사각형 모서리 (avatar_square)' },
  { name: 'badgeColor', type: 'string', default: '—', description: '상태 점 색상 (avatar_badge)' },
  { name: 'badgeLabel', type: 'string', default: '—', description: '상태 점 aria-label' },
  { name: 'ariaHidden', type: 'boolean', default: 'false', description: '그룹 내 장식용 아바타' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '아이콘·커스텀 아바타의 접근성 라벨' },
];

export const avatarGroupPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const avatarGroupProps = [
  { name: 'ariaLabel', type: 'string', default: '—', description: '그룹 접근성 라벨 (권장)' },
];

export const avatarSlotColumns = [
  { key: 'name', label: 'Children / Prop' },
  { key: 'description', label: '설명' },
];

export const avatarSlots = [
  { name: 'initials', description: '이니셜 텍스트 (이미지·아이콘 없을 때)' },
  { name: 'children', description: '이미지·아이콘·컴포넌트 등 커스텀 콘텐츠' },
  { name: 'icon', description: '아이콘 콘텐츠 (Vue #icon 슬롯 대응, avatar_icon 클래스)' },
];

export const avatarGroupSlotColumns = [
  { key: 'name', label: 'Children / Prop' },
  { key: 'description', label: '설명' },
];

export const avatarGroupSlots = [
  { name: 'children', description: 'Avatar 자식 목록 (Vue default 슬롯 대응)' },
];

export const avatarClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const avatarClasses = [
  { name: 'avatar', description: '아바타 루트 (원형)' },
  { name: 'avatar_image', description: '프로필 이미지' },
  { name: 'avatar_icon', description: '아이콘 크기' },
  { name: 'avatar_badge', description: '상태 점' },
  { name: 'avatar_sm · avatar_lg · avatar_xl', description: '크기 변형' },
  { name: 'avatar_square', description: '사각형' },
  { name: 'avatar_group', description: '겹침 그룹 컨테이너' },
  { name: 'color_*', description: '공통 색상 유틸' },
];

export const avatarTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const avatarTokens = [
  { name: '--avatar-size-sm · --avatar-size · --avatar-size-lg · --avatar-size-xl', default: '1.5rem · 2rem · 2.5rem · 3.5rem', description: '아바타 지름' },
  { name: '--avatar-group-overlap', default: '-0.5rem', description: '그룹 겹침 오프셋' },
  { name: '--avatar-badge-size · --avatar-badge-size-sm · --avatar-badge-size-lg', default: '8px · 6px · 10px', description: '상태 점 크기' },
];

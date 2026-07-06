export const avatarPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const avatarProps = [
  { name: 'src', type: 'string', default: '—', description: '이미지 URL (avatar_image)' },
  { name: 'alt', type: 'string', default: '—', description: '이미지 대체 텍스트' },
  { name: 'initials', type: 'string', default: '—', description: '이니셜 텍스트 (이미지·아이콘 없을 때)' },
  { name: 'color', type: 'string', default: '—', description: '이니셜·아이콘 배경 color_*' },
  { name: 'size', type: `'sm' | 'md' | 'lg' | 'xl'`, default: 'md', description: 'avatar_sm · avatar_lg · avatar_xl' },
  { name: 'square', type: 'boolean', default: 'false', description: '사각형 모서리 (avatar_square)' },
  { name: 'badge-color', type: 'string', default: '—', description: '상태 점 색상 (avatar_badge)' },
  { name: 'badge-label', type: 'string', default: '—', description: '상태 점 aria-label' },
  { name: 'aria-hidden', type: 'boolean', default: 'false', description: '그룹 내 장식용 아바타' },
];

export const avatarGroupPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const avatarGroupProps = [
  { name: 'aria-label', type: 'string', default: '—', description: '그룹 접근성 라벨 (권장)' },
];

export const avatarSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const avatarSlots = [
  { name: 'icon', description: '아이콘 슬롯 (avatar_icon)' },
];

export const avatarGroupSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const avatarGroupSlots = [
  { name: 'default', description: 'Avatar 자식 목록' },
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

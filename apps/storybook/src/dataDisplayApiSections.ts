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
const avatarWebSquareRows: ApiRow[] = [
  { name: 'w2:group · w2:textbox', type: 'component', default: '—', description: '아바타 루트와 이니셜, 상태 점, 겹침 그룹을 구성합니다.' },
  { name: 'w2:image', type: 'component', default: '—', description: 'avatar_image 클래스를 적용해 프로필 이미지 또는 fallback 아이콘을 표시합니다.' },
  { name: 'class', type: 'string', default: 'avatar', description: 'avatar_* · avatar_group · color_* 공통 클래스를 조합합니다.' },
  { name: 'label · src · alt', type: 'string', default: '—', description: '이니셜 텍스트, 이미지 경로, 이미지 대체 텍스트를 지정합니다.' },
  { name: 'role · aria-label · aria-hidden', type: 'string', default: '—', description: '그룹·상태 점의 이름을 제공하거나 장식용 아바타를 접근성 트리에서 숨깁니다.' },
  { name: 'DataList · w2:generator', type: 'binding', default: '선택', description: '사용자 목록을 반복 렌더링하고 이미지·이니셜·색상을 데이터에 연결합니다.' }
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
  section('Vue · Nuxt API · AvatarGroup Props', [{ name: 'aria-label', type: 'string', default: '—', description: '그룹의 접근성 이름' }, { name: 'default', type: 'slot', default: '—', description: 'Avatar 목록' }]),
  section('HTML API · Markup', [
    { name: 'src · alt', type: 'attribute', default: '—', description: 'img.avatar_image의 이미지 경로와 대체 텍스트입니다.' },
    { name: 'aria-hidden', type: 'attribute', default: '—', description: '장식용 아바타를 접근성 트리에서 숨깁니다.' },
    { name: 'role="img" · aria-label', type: 'attribute', default: '—', description: '상태 점(avatar_badge)의 접근성 이름입니다.' }
  ], 'HTML은 공통 클래스와 네이티브 속성을 마크업에 직접 적용합니다.'),
  section('Gulp API · Nunjucks', [
    { name: 'avatar · avatarGroup', type: 'macro', default: '—', description: '`{% from "components/data-display/Avatar/avatar.njk" import avatar, avatarGroup %}`로 import한 뒤 `{{ avatar(...) }}` · `{% call avatarGroup %}`로 인스턴스를 만듭니다.' },
    { name: 'src · alt · initials · icon', type: 'string', default: '—', description: '이미지·대체 텍스트·이니셜·Icon 이름입니다. `{% call avatar %}` 본문이 있으면 본문이 우선합니다.' },
    { name: 'color · size · square', type: 'mixed', default: "'' · 'md' · false", description: 'color_* · avatar_* 크기·사각형 변형입니다.' },
    { name: 'badgeColor · badgeLabel · ariaHidden · className', type: 'mixed', default: '—', description: '상태 점·접근성·추가 클래스입니다.' },
    { name: 'avatarGroup · ariaLabel', type: 'string', default: '—', description: '겹침 그룹의 접근성 이름입니다. 본문은 `{% call %}`로 전달합니다.' }
  ], '`avatar` · `avatarGroup` macro로 React · Vue와 같은 계약을 조합합니다. 아이콘은 `icon` 이름 문자열로 Icon macro를 호출합니다.'),
  section('HTML · Gulp · 공통 클래스', avatarClasses),
  section('WebSquare API · XML', avatarWebSquareRows, 'Avatar는 화면 XML의 WebSquare 컴포넌트에 공통 클래스를 적용하며 별도 scwin 이벤트는 필요하지 않습니다.'),
  section('공통 API · 디자인 토큰', avatarTokens)
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
const badgeWebSquareRows: ApiRow[] = [
  { name: 'w2:textbox', type: 'component', default: '—', description: '일반·상태 점·카운트 Badge의 텍스트 루트입니다.' },
  { name: 'w2:group', type: 'component', default: '—', description: 'badge_wrap 겹침 기준과 텍스트 없는 상태 점을 구성합니다.' },
  { name: 'label', type: 'string', default: '—', description: 'Badge 텍스트 또는 카운트 값을 지정합니다.' },
  { name: 'class', type: 'string', default: 'badge color_primary', description: 'badge_* · badge_wrap · color_* 공통 클래스를 조합합니다.' },
  { name: 'role · aria-label', type: 'string', default: '—', description: '텍스트 없는 상태 점과 문맥이 필요한 카운트에 접근성 의미를 제공합니다.' }
];
export const badgeApiSections: ApiSectionData[] = [
  section('React · Next.js API · Badge Props', badgeProps, 'Next.js는 `@uxkm/react/badge`를 재사용합니다.'),
  section('React · Next.js API · BadgeWrap Props', [{ name: 'ariaLabel', type: 'string', default: '—', description: '래퍼 접근성 이름' }, { name: 'children', type: 'ReactNode', default: '—', description: '기준 요소와 Badge' }]),
  section('Vue · Nuxt API · Badge Props', vueRows(badgeProps), 'Nuxt는 `@uxkm/vue/badge`를 재사용합니다.'),
  section('Vue · Nuxt API · BadgeWrap Props', [{ name: 'aria-label', type: 'string', default: '—', description: '래퍼 접근성 이름' }, { name: 'default', type: 'slot', default: '—', description: '기준 요소와 Badge' }]),
  section('HTML API · Markup', [
    { name: 'aria-label', type: 'attribute', default: '—', description: '카운트·상태 점의 접근성 이름입니다.' },
    { name: 'role="status"', type: 'attribute', default: '—', description: '텍스트 없는 상태 점(badge_dot-only)에 사용합니다.' }
  ], 'HTML은 공통 클래스와 네이티브 속성을 마크업에 직접 적용합니다.'),
  section('Gulp API · Nunjucks', [
    { name: 'badge · badgeWrap', type: 'macro', default: '—', description: '`{% from "components/data-display/Badge/badge.njk" import badge, badgeWrap %}`로 import한 뒤 `{{ badge(...) }}` · `{% call badgeWrap %}`로 인스턴스를 만듭니다.' },
    { name: 'color · size · label', type: 'mixed', default: "'primary' · 'md' · ''", description: '공통 color_* · badge_* 크기와 표시 텍스트입니다. `{% call badge %}` 본문이 있으면 본문이 우선합니다.' },
    { name: 'dot · count · dotOnly', type: 'boolean', default: 'false', description: '상태 점·카운트·텍스트 없는 상태 점 변형입니다.' },
    { name: 'ariaLabel · className', type: 'string', default: '—', description: '접근성 이름과 추가 클래스입니다.' },
    { name: 'badgeWrap · ariaLabel', type: 'string', default: '—', description: '겹침 래퍼의 접근성 이름입니다. 본문은 `{% call %}`로 전달합니다.' }
  ], '`badge` · `badgeWrap` macro로 React · Vue와 같은 계약을 조합합니다.'),
  section('HTML · Gulp · 공통 클래스', [
    { name: 'badge · badge_sm · badge_lg', type: 'class', default: '—', description: '배지 루트와 크기 변형' },
    { name: 'badge_dot · badge_count · badge_dot-only', type: 'class', default: '—', description: '형태 변형' },
    { name: 'badge_wrap · color_*', type: 'class', default: '—', description: '겹침 래퍼와 공통 색상' }
  ]),
  section('WebSquare API · XML', badgeWebSquareRows, 'Badge는 화면 XML의 textbox·group에 공통 클래스를 적용하며, 겹침 대상의 이벤트와 Badge 표시를 분리합니다.'),
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
const tagWebSquareRows: ApiRow[] = [
  { name: 'w2:textbox', type: 'component', default: '—', description: '상호작용이 없는 정적 Tag 루트입니다.' },
  { name: 'xf:trigger + xf:label', type: 'component', default: '—', description: '선택·추가 Tag와 닫기 버튼의 루트입니다.' },
  { name: 'w2:anchor + xf:label', type: 'component', default: '—', description: 'URL로 이동하는 링크 Tag 루트입니다.' },
  { name: 'w2:group', type: 'component', default: '—', description: 'TagGroup 또는 닫기 버튼과 본문을 분리한 Tag 구조입니다.' },
  { name: 'class', type: 'string', default: 'tag color_primary', description: 'tag_* · is-selected · is-disabled · color_* 클래스를 조합합니다.' },
  { name: 'aria-pressed · disabled · aria-disabled', type: 'state', default: '—', description: '선택 여부와 비활성 상태를 화면 데이터에 맞춰 동기화합니다.' },
  { name: 'ev:onclick', type: 'event', default: '—', description: '선택·추가·닫기 동작을 scwin 함수에 연결합니다.' },
  { name: 'DataList · w2:generator', type: 'binding', default: '선택', description: '반복되는 Tag 목록과 선택 상태를 화면 데이터에 연결합니다.' }
];
export const tagApiSections: ApiSectionData[] = [
  section('React · Next.js API · Tag Props', tagProps, 'Next.js는 `@uxkm/react/tag`를 재사용합니다.'),
  section('React · Next.js API · Events', [{ name: 'onClick', type: '(event) => void', default: '—', description: '태그 본문 활성화' }, { name: 'onClose', type: '(event) => void', default: '—', description: '닫기 버튼 활성화' }]),
  section('Vue · Nuxt API · Tag Props', vueRows(tagProps), 'Nuxt는 `@uxkm/vue/tag`를 재사용합니다.'),
  section('Vue · Nuxt API · Slots / Events', [{ name: 'default', type: 'slot', default: '—', description: '태그 본문' }, { name: 'icon', type: 'slot', default: '—', description: '앞 아이콘' }, { name: 'click · close', type: 'event', default: '—', description: '본문·닫기 버튼 이벤트' }]),
  section('공통 API · TagGroup', [{ name: 'tight', type: 'boolean', default: 'false', description: '좁은 그룹 간격' }, { name: 'ariaLabel', type: 'string', default: '—', description: '그룹 접근성 이름' }]),
  section('HTML API · Markup', [
    { name: 'button · a · span', type: 'element', default: '상황별 선택', description: '선택·추가는 button, 링크는 a, 정적 라벨은 span을 사용합니다.' },
    { name: 'aria-pressed', type: 'attribute', default: '—', description: 'checkable 태그의 선택 상태를 전달합니다.' },
    { name: 'aria-disabled · disabled', type: 'attribute', default: '—', description: '태그 의미에 맞춰 비활성 상태를 반영합니다.' },
    { name: 'tag_close', type: 'class / child', default: '선택', description: 'closable 태그의 닫기 버튼입니다.' }
  ], 'HTML은 공통 클래스와 네이티브 속성을 마크업에 직접 적용합니다.'),
  section('Gulp API · Nunjucks', [
    { name: 'tag · tagGroup', type: 'macro', default: '—', description: '`{% from "components/data-display/Tag/tag.njk" import tag, tagGroup %}`로 import한 뒤 `{{ tag(...) }}` · `{% call tagGroup %}`로 인스턴스를 만듭니다.' },
    { name: 'label · icon · closeLabel', type: 'string', default: "''", description: '표시 텍스트·Icon 이름·닫기 버튼 접근성 이름입니다. `{% call tag %}` 본문이 있으면 본문이 우선합니다.' },
    { name: 'variant · color · size · round', type: 'mixed', default: "'filled' · 'primary' · 'md' · false", description: '스킨·색상·크기·pill 형태를 조합합니다.' },
    { name: 'checkable · add · closable · selected · disabled', type: 'boolean', default: 'false', description: '동작·상태를 제어합니다.' },
    { name: 'href · ripple · className', type: 'mixed', default: "'' · 자동 · ''", description: '링크 주소·리플·추가 클래스입니다.' }
  ], '`tag` · `tagGroup` macro로 React · Vue와 같은 계약을 조합합니다.'),
  section('HTML · Gulp · 공통 클래스', [
    { name: 'tag · tag_solid · tag_outline · tag_borderless', type: 'class', default: '—', description: '태그 루트와 스킨' },
    { name: 'tag_sm · tag_lg · tag_round', type: 'class', default: '—', description: '크기·형태' },
    { name: 'tag_checkable · tag_add · is-selected · is-disabled', type: 'class', default: '—', description: '동작·상태' },
    { name: 'tag_icon · tag_close · tag_control', type: 'class', default: '—', description: '내부 파트' },
    { name: 'tag_group · tag_group-tight · color_*', type: 'class', default: '—', description: '그룹과 공통 색상' }
  ]),
  section('WebSquare API · XML', tagWebSquareRows, '정적·버튼·링크 의미에 따라 WebSquare 컴포넌트를 구분하고 선택 상태와 이벤트를 함께 관리합니다.'),
  section('공통 API · 디자인 토큰', [
    { name: '--tag-padding-* · --tag-font-size-*', type: 'length', default: '—', description: '크기별 패딩과 글자 크기' },
    { name: '--tag-gap', type: 'length', default: 'var(--space-xs)', description: '아이콘·텍스트·닫기 버튼 간격' },
    { name: '--tag-close-size', type: 'length', default: '0.875rem', description: '닫기 버튼 크기' },
    { name: '--tag-add-border-style', type: 'border-style', default: 'dashed', description: '추가 태그 테두리' }
  ])
];

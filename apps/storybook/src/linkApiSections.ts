import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' }, { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }
];

const props: ApiRow[] = [
  { name: 'as', type: 'ElementType', default: 'a', description: 'a, button 또는 커스텀 링크 컴포넌트로 루트를 변경합니다.' },
  { name: 'color', type: "'primary' | 'muted' | 'success' | 'warning' | 'danger' | 'info'", default: 'primary', description: '공통 color_* 색상입니다.' },
  { name: 'size', type: "'sm' | 'lg' | 'xl'", default: '—', description: '공통 size_* 텍스트 크기입니다.' },
  { name: 'underline', type: 'boolean', default: 'false', description: '항상 밑줄을 표시합니다.' },
  { name: 'noUnderline', type: 'boolean', default: 'false', description: 'hover 상태에서도 밑줄을 표시하지 않습니다.' },
  { name: 'standalone', type: 'boolean', default: 'false', description: '독립 링크의 터치 영역을 확장합니다.' },
  { name: 'nav', type: 'boolean', default: 'false', description: '내비게이션 링크 스타일을 적용합니다.' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비를 채우는 블록 링크입니다.' },
  { name: 'back', type: 'boolean', default: 'false', description: '뒤로가기 링크의 간격과 아이콘 크기를 적용합니다.' },
  { name: 'iconOnly', type: 'boolean', default: 'false', description: '텍스트 없이 아이콘만 표시합니다.' },
  { name: 'active', type: 'boolean', default: 'false', description: 'is-active와 aria-current="page"를 적용합니다.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성 스타일, aria-disabled, tabindex=-1과 클릭 차단을 적용합니다.' },
  { name: 'label', type: 'string', default: '—', description: '링크 텍스트. children 또는 기본 슬롯으로 대체할 수 있습니다.' },
  { name: 'href', type: 'string', default: '#', description: '이동 URL입니다.' },
  { name: 'target', type: 'string', default: '—', description: '네이티브 target 속성입니다.' },
  { name: 'rel', type: 'string', default: '—', description: '네이티브 rel 속성입니다.' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '아이콘 전용 링크 등의 접근성 이름입니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: '클릭 파장 효과를 설정합니다.' },
  { name: 'className', type: 'string', default: "''", description: 'React 루트에 추가할 클래스입니다.' }
];

const vueProps = props.map((row) => {
  if (row.name === 'noUnderline') return { ...row, name: 'no-underline' };
  if (row.name === 'iconOnly') return { ...row, name: 'icon-only' };
  if (row.name === 'ariaLabel') return { ...row, name: 'aria-label' };
  if (row.name === 'className') return { ...row, name: 'class', description: 'Vue 루트에 추가할 클래스입니다.' };
  return row;
});

const reactChildren: ApiRow[] = [
  { name: 'children', type: 'ReactNode', default: 'label', description: '링크 텍스트·이미지·커스텀 콘텐츠입니다.' },
  { name: 'icon', type: 'ReactNode', default: '—', description: '텍스트 앞 아이콘입니다. link_icon 클래스를 적용합니다.' },
  { name: 'iconAfter', type: 'ReactNode', default: '—', description: '텍스트 뒤 아이콘입니다. link_icon 클래스를 적용합니다.' }
];

const vueSlots: ApiRow[] = [
  { name: 'default', type: 'slot', default: 'label', description: '링크 텍스트·이미지·커스텀 콘텐츠입니다.' },
  { name: 'icon', type: 'slot', default: '—', description: '텍스트 앞 아이콘 슬롯입니다.' },
  { name: 'icon-after', type: 'slot', default: '—', description: '텍스트 뒤 아이콘 슬롯입니다.' }
];

const htmlRows: ApiRow[] = [
  { name: 'href', type: 'string', default: '#', description: '링크 이동 경로입니다.' },
  { name: 'target="_blank" + rel="noopener noreferrer"', type: 'attribute', default: '—', description: '새 창 링크의 보안 속성 조합입니다.' },
  { name: 'aria-current="page"', type: 'attribute', default: '—', description: '현재 내비게이션 항목을 표시합니다.' },
  { name: 'aria-disabled="true" + tabindex="-1"', type: 'attribute', default: '—', description: '비활성 링크를 접근성 트리와 키보드 탐색에 반영합니다.' },
  { name: 'aria-label', type: 'string', default: '—', description: '텍스트 없는 아이콘 링크의 접근성 이름입니다.' }
];

const webSquareRows: ApiRow[] = [
  { name: 'w2:anchor', type: 'component', default: '—', description: 'URL·페이지 위치 이동에 사용하는 WebSquare 링크 루트입니다.' },
  { name: 'xf:label', type: 'child', default: '—', description: 'Anchor에 표시할 링크 텍스트입니다. label 속성만으로는 화면에 표시되지 않습니다.' },
  { name: 'href', type: 'URL', default: 'javascript:void(null)', description: '상대 경로, 전체 URL, 페이지 내 앵커 등 이동 대상을 지정합니다.' },
  { name: 'target', type: "'_self' | '_blank' | '_parent' | '_top'", default: '_self', description: '링크가 열릴 브라우징 컨텍스트입니다.' },
  { name: 'outerDiv', type: 'boolean', default: 'true', description: 'false이면 불필요한 외부 div 없이 링크 구조를 렌더링합니다.' },
  { name: 'class', type: 'styleclass', default: 'link color_primary', description: '공통 Link·색상·크기·상태 클래스를 적용합니다.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '링크 이동과 상호작용을 비활성화합니다.' },
  { name: 'xf:trigger + ev:onclick', type: 'component / event', default: '—', description: 'URL 이동이 아닌 버튼형 보조 액션에 사용합니다.' },
  { name: 'setHref(href)', type: 'method', default: '—', description: '실행 중 Anchor 이동 경로를 변경합니다.' }
];

const classes: ApiRow[] = [
  { name: 'link', type: 'class', default: '—', description: '하이퍼링크 루트' },
  { name: 'link_underline · link_no-underline · link_standalone', type: 'class', default: '—', description: '밑줄과 터치 영역 변형' },
  { name: 'link_nav · link_back · link_block · link_icon-only', type: 'class', default: '—', description: '용도별 변형' },
  { name: 'link_icon · link_media', type: 'class', default: '—', description: '링크 내부 아이콘과 이미지' },
  { name: 'link_row · link_group · link_group-inline', type: 'class', default: '—', description: '링크 묶음 레이아웃' },
  { name: 'is-active · is-disabled', type: 'class', default: '—', description: '활성·비활성 상태' },
  { name: 'color_* · size_*', type: 'class', default: '—', description: '공통 색상·크기 유틸리티' }
];

const tokens: ApiRow[] = [
  { name: '--link-gap', type: 'length', default: 'var(--space-xs)', description: '아이콘과 텍스트 간격' },
  { name: '--link-font-weight', type: 'font-weight', default: '500', description: '링크 글자 굵기' },
  { name: '--link-underline-offset', type: 'length', default: '2px', description: '밑줄 오프셋' },
  { name: '--link-nav-padding-y · --link-nav-padding-x', type: 'length', default: '0.35rem · 0.5rem', description: '내비게이션 링크 패딩' },
  { name: '--link-standalone-padding-y · --link-standalone-padding-x', type: 'length', default: '0.25rem · 0.15rem', description: '독립 링크 터치 영역' },
  { name: '--link-icon-only-size', type: 'length', default: '2rem', description: '아이콘 전용 링크 크기' }
];

export const linkApiSections: ApiSectionData[] = [
  { title: 'React · Next.js API · Props', description: 'Next.js는 `@uxkm/react/link`을 재사용합니다.', tables: [{ columns, rows: props }] },
  { title: 'React · Next.js API · Children', tables: [{ columns, rows: reactChildren }] },
  { title: 'Vue · Nuxt API · Props', description: 'Nuxt는 `@uxkm/vue/link`를 재사용합니다.', tables: [{ columns, rows: vueProps }] },
  { title: 'Vue · Nuxt API · Slots', tables: [{ columns, rows: vueSlots }] },
  { title: 'HTML · Gulp API · Markup', description: 'HTML과 Gulp는 네이티브 링크 속성과 공통 클래스를 직접 적용합니다.', tables: [{ columns, rows: htmlRows }] },
  { title: 'WebSquare API · XML', description: 'URL 이동은 w2:anchor, 화면 로직을 실행하는 버튼형 링크는 xf:trigger와 scwin 이벤트로 구분합니다.', tables: [{ columns, rows: webSquareRows }] },
  { title: '공통 API · 클래스', tables: [{ columns, rows: classes }] },
  { title: '공통 API · 디자인 토큰', tables: [{ columns, rows: tokens }] }
];

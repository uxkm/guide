export const affixAttrColumns = [
  { key: 'name', label: '속성' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const affixAttrs = [
  {
    name: 'data-affix',
    type: 'boolean',
    default: '—',
    description: 'Affix 활성화. 루트 .affix 요소에 지정',
  },
  {
    name: 'data-target',
    type: 'string',
    default: 'window',
    description: '스크롤 컨테이너 CSS 선택자. 생략 시 window 스크롤 기준',
  },
  {
    name: 'data-offset-top',
    type: 'number',
    default: '0',
    description: '상단 고정 시 뷰포트·컨테이너 상단과의 간격(px)',
  },
  {
    name: 'data-offset-bottom',
    type: 'number',
    default: '0',
    description: '하단 고정 시 하단과의 간격(px). 속성을 지정하면 하단 고정 모드',
  },
];

export const affixMarkupColumns = [
  { key: 'name', label: '요소' },
  { key: 'description', label: '설명' },
];

export const affixMarkup = [
  {
    name: '.affix',
    description: '루트 래퍼. data-affix · data-target · data-offset-* 속성을 지정',
  },
  {
    name: '.affix_placeholder',
    description: '고정 시 레이아웃 점프 방지용 플레이스홀더 (aria-hidden="true", hidden)',
  },
  {
    name: '.affix_target',
    description: '실제 고정·해제되는 대상. affix_bar 또는 affix_anchor 스킨과 조합',
  },
];

export const affixClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const affixClasses = [
  { name: 'affix_bar', description: '액션 바 스킨. 라벨 + 버튼 영역' },
  { name: 'affix_bar-label', description: '바 좌측 라벨' },
  { name: 'affix_bar-actions', description: '바 우측 버튼 그룹. Button 컴포넌트 조합' },
  { name: 'affix_anchor', description: '섹션 앵커 링크 내비게이션 스킨' },
  { name: 'is-affixed', description: '고정 상태 (루트 .affix에 JS가 자동 추가)' },
  { name: 'is-fixed', description: '고정 상태 (.affix_target에 JS가 자동 추가)' },
];

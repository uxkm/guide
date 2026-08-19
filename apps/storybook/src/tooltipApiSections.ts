import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const tooltipApiSections: ApiSectionData[] = [
  section('React · Next.js API', [
    { name: 'content · children', type: 'ReactNode', default: '—', description: '말풍선 내용입니다.' },
    { name: 'open · defaultOpen · onOpenChange', type: 'boolean · function', default: '— · false · —', description: '제어·비제어 열림 상태입니다.' },
    { name: 'triggerContent · trigger', type: "ReactNode · 'hover' | 'click'", default: "— · 'hover'", description: '트리거 콘텐츠와 작동 방식입니다.' },
    { name: 'placement', type: "'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'", default: '아래 가운데', description: '브라우저 뷰포트 기준 배치입니다.' },
    { name: 'size · offset · offsetTop/Right/Bottom/Left', type: 'string', default: "'md'", description: '크기와 전체·방향별 간격입니다.' },
    { name: 'arrowAnchor · panelAlign · arrowTargetAlign', type: 'string', default: "'content' · 'center' · 'center'", description: '말풍선과 화살표 정렬 기준입니다.' },
    { name: 'inverse · noArrow · disabled · closable', type: 'boolean', default: 'false · false · false · 자동', description: '역색, 화살표, 비활성, 닫기 버튼 옵션입니다.' },
  ], 'Next.js는 @uxkm/react/tooltip을 재사용합니다.'),
  section('Vue · Nuxt API', [{ name: 'content · open · default-open · trigger', type: 'string · boolean · string', default: "— · — · false · 'hover'", description: '내용, 열림 상태, 트리거 방식입니다.' }, { name: 'trigger · default', type: 'slot', default: '—', description: '트리거와 말풍선 슬롯입니다.' }], 'Nuxt는 @uxkm/vue/tooltip을 재사용합니다.'),
  section('HTML · Gulp', [{ name: 'tooltip · tooltip_trigger · tooltip_bubble', type: 'class', default: '—', description: '루트, 트리거, 말풍선입니다.' }, { name: 'data-tooltip · data-tooltip-trigger · data-tooltip-close', type: 'attribute', default: '—', description: '호버·클릭·닫기 동작입니다.' }]),
  section('디자인 토큰', [{ name: '--tooltip-max-width · --tooltip-offset', type: 'length', default: '16rem · space-xs', description: '말풍선 최대 너비와 간격입니다.' }, { name: '--z-tooltip', type: 'number', default: '120', description: '레이어 순서입니다.' }]),
];

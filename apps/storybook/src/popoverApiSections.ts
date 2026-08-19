import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const popoverApiSections: ApiSectionData[] = [
  section('React · Next.js API', [
    { name: 'open · defaultOpen · onOpenChange', type: 'boolean · function', default: '— · false · —', description: '제어·비제어 열림 상태와 변경 이벤트입니다.' },
    { name: 'triggerContent · trigger', type: "ReactNode · 'click' | 'hover'", default: "— · 'click'", description: '트리거 콘텐츠와 작동 방식입니다.' },
    { name: 'placement', type: "'top' | 'top-center' | 'bottom' | 'bottom-center' | 'left' | 'right' | 'end'", default: "'bottom'", description: '트리거 기준 배치입니다.' },
    { name: 'size · offset', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '패널 크기와 간격입니다.' },
    { name: 'offsetTop · offsetRight · offsetBottom · offsetLeft', type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: '방향별 간격을 개별 지정합니다.' },
    { name: 'arrowAnchor · panelAlign · arrowTargetAlign', type: 'string', default: "'content' · 'start' · 'center'", description: '패널과 화살표의 정렬 기준입니다.' },
    { name: 'title · panelLabel · children · footer', type: 'ReactNode', default: '—', description: '제목, 접근성 라벨, 본문, 푸터입니다.' },
    { name: 'noArrow · closable · disabled', type: 'boolean', default: 'false · 자동 · false', description: '화살표, 닫기 버튼, 비활성 옵션입니다.' },
  ], 'Next.js는 @uxkm/react/popover를 재사용합니다.'),
  section('Vue · Nuxt API', [{ name: 'open · default-open · trigger', type: 'boolean · string', default: "false · 'click'", description: '열림 상태와 트리거 방식입니다.' }, { name: 'offset-top · offset-right · offset-bottom · offset-left', type: 'string', default: "'md'", description: '방향별 간격을 개별 지정합니다.' }, { name: 'arrow-anchor · panel-align · arrow-target-align', type: 'string', default: "'content' · 'start' · 'center'", description: '패널과 화살표의 정렬 기준입니다.' }, { name: 'trigger · default · footer', type: 'slot', default: '—', description: '트리거, 본문, 푸터 슬롯입니다.' }], 'Nuxt는 @uxkm/vue/popover를 재사용합니다.'),
  section('HTML · Gulp', [{ name: 'popover · popover_trigger · popover_panel', type: 'class', default: '—', description: '루트, 트리거, 패널입니다.' }, { name: 'data-popover · data-popover-close', type: 'attribute', default: '—', description: '열기와 닫기 동작입니다.' }]),
  section('디자인 토큰', [{ name: '--popover-min-width · --popover-max-width', type: 'length', default: '10rem · 20rem', description: '패널 너비입니다.' }, { name: '--popover-offset · --z-popover', type: 'length · number', default: 'space-sm · 110', description: '간격과 레이어입니다.' }]),
];

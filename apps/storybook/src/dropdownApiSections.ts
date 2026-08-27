import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const dropdownApiSections:ApiSectionData[] = [
  section('Dropdown API',[{name:'open · v-model:open',type:'boolean',default:'undefined',description:'제어형 열린 상태입니다.'},{name:'defaultOpen',type:'boolean',default:'false',description:'비제어형 초기 열린 상태입니다.'},{name:'disabled',type:'boolean',default:'false',description:'드롭다운 전체를 비활성화합니다.'},{name:'placement',type:"'start' | 'end' | 'top'",default:"'start'",description:'트리거를 기준으로 한 메뉴 배치입니다.'},{name:'fit',type:'boolean',default:'false',description:'셀렉트형 트리거의 최소 너비를 적용합니다.'},{name:'maxVisibleItems',type:'number',default:'—',description:'스크롤 전에 표시할 최대 메뉴 항목 수입니다.'},{name:'menuWidth · menuMinWidth',type:'string | number',default:'—',description:'메뉴 너비와 최소 너비입니다. 숫자는 rem으로 처리합니다.'},{name:'triggerContent · #trigger',type:'ReactNode · slot',default:'기본 Button',description:'Button 등 사용자 정의 트리거 영역입니다.'},{name:'children · default slot',type:'ReactNode · slot',default:'—',description:'Menu 컴포넌트를 배치하는 영역입니다.'},{name:'closeOnSelect',type:'boolean',default:'true',description:'메뉴 항목 선택 후 닫을지 설정합니다.'},{name:'onOpenChange · openChange',type:'handler',default:'—',description:'열림 상태 변경 이벤트입니다.'},{name:'onSelect · select',type:'handler',default:'—',description:'선택한 메뉴의 data-value 또는 텍스트를 전달합니다.'}]),
  section('키보드 · 접근성',[{name:'ArrowDown',type:'key',default:'—',description:'메뉴를 열고 첫 항목으로 이동하거나 다음 항목에 초점을 둡니다.'},{name:'ArrowUp · Home · End',type:'key',default:'—',description:'이전, 첫 번째, 마지막 메뉴 항목으로 이동합니다.'},{name:'Escape · Tab',type:'key',default:'—',description:'메뉴를 닫고 Escape는 트리거로 초점을 돌립니다.'},{name:'aria-expanded · aria-controls',type:'ARIA',default:'자동',description:'트리거와 메뉴의 상태 및 관계를 연결합니다.'}]),
  section('HTML · Gulp',[{name:'data-dropdown',type:'attribute',default:'—',description:'열기, 외부 클릭, 키보드 동작을 초기화합니다.'},{name:'dropdown:select',type:'CustomEvent',default:'—',description:'선택된 value를 detail로 전달합니다.'},{name:'is-open · is-disabled',type:'class',default:'—',description:'열림 및 비활성 상태 클래스입니다.'}]),
  section('디자인 토큰',[{name:'--dropdown-min-width',type:'length',default:'10rem',description:'메뉴 최소 너비입니다.'},{name:'--dropdown-offset · --dropdown-padding',type:'length',default:'space-xs',description:'트리거 간격과 메뉴 내부 여백입니다.'},{name:'--z-dropdown',type:'number',default:'100',description:'메뉴의 쌓임 순서입니다.'}]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.dropdown', type: 'XML element · class', default: '—', description: 'Dropdown 루트입니다. is-open으로 열린 상태를 표현합니다.' },
      { name: 'xf:trigger.dropdown_trigger', type: 'XML element · class', default: '—', description: '메뉴를 여는 트리거 버튼입니다.' },
      { name: 'dropdown_panel · menu_item', type: 'class', default: "role='menu'", description: '메뉴 패널과 항목입니다.' },
      { name: 'aria-expanded · aria-controls · aria-haspopup', type: 'ARIA', default: '—', description: '트리거와 메뉴의 상태·관계입니다.' },
      { name: 'ev:onclick', type: 'WebSquare event', default: '—', description: '열기·닫기·선택 동작을 화면 스크립트에 연결합니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];

import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' }, { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }
];
const kebab = (name: string) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
const vueProps = (rows: ApiRow[]) => rows.map((row) => ({ ...row, name: kebab(row.name) }));
const reactExtras: ApiRow[] = [
  { name: 'children', type: 'ReactNode', default: '컴포넌트 이름', description: '내부 콘텐츠입니다.' },
  { name: 'className', type: 'string', default: "''", description: '루트에 추가할 클래스입니다.' },
  { name: '...props', type: 'HTML attributes', default: '—', description: '루트 요소에 전달할 네이티브 속성입니다.' }
];
const vueExtras: ApiRow[] = [
  { name: 'class', type: 'string | object | array', default: '—', description: '루트에 추가할 클래스 바인딩입니다.' },
  { name: 'v-bind', type: 'HTML attributes', default: '—', description: '루트 요소에 전달할 네이티브 속성입니다.' }
];
const slotRows: ApiRow[] = [{ name: 'default', type: 'slot', default: '컴포넌트 이름', description: '내부 콘텐츠입니다.' }];
const markupRows: ApiRow[] = [
  { name: 'class', type: 'string', default: '루트 클래스', description: '루트 클래스와 변형 클래스를 마크업에 직접 조합합니다.' },
  { name: 'data-component', type: 'string', default: '—', description: '컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.' }
];
const sharedRoot: ApiRow = { name: 'as', type: 'string | component', default: "'div'", description: '렌더링할 루트 요소 또는 컴포넌트입니다.' };

function sections(
  name: string, slug: string, props: ApiRow[], classes: ApiRow[], tokens: ApiRow[],
  extras: ApiSectionData[] = [], contentDefault = '컴포넌트 이름'
): ApiSectionData[] {
  const resolvedReactExtras = reactExtras.map((row) => row.name === 'children' ? { ...row, default: contentDefault } : row);
  const resolvedSlotRows = slotRows.map((row) => ({ ...row, default: contentDefault }));
  return [
    { title: 'React · Next.js API · Props', description: `Next.js는 \`@uxkm/react/${slug}\`를 재사용합니다.`, tables: [{ columns, rows: [...props, ...resolvedReactExtras] }] },
    { title: 'Vue · Nuxt API · Props', description: `Nuxt는 \`@uxkm/vue/${slug}\`를 재사용합니다.`, tables: [{ columns, rows: [...vueProps(props), ...vueExtras] }] },
    { title: 'Vue · Nuxt API · Slots', tables: [{ columns, rows: resolvedSlotRows }] },
    { title: 'HTML · Gulp API · Markup', description: `HTML과 Gulp는 ${name} OOCSS 클래스를 직접 적용합니다.`, tables: [{ columns, rows: markupRows }] },
    { title: '공통 API · 클래스', tables: [{ columns, rows: classes }] },
    { title: '공통 API · 디자인 토큰', tables: [{ columns, rows: tokens }] },
    ...extras
  ];
}

const gridProps: ApiRow[] = [
  sharedRoot,
  { name: 'cols', type: '1~12', default: '—', description: '기본 화면의 열 수입니다. columns 별칭도 지원합니다.' },
  { name: 'colsMd', type: '1~12', default: '—', description: 'md 이상 화면의 열 수입니다. columnsMd 별칭도 지원합니다.' },
  { name: 'colsLg', type: '1~12', default: '—', description: 'lg 이상 화면의 열 수입니다. columnsLg 별칭도 지원합니다.' },
  { name: 'gap', type: "'' | 'sm' | 'lg' | 'none'", default: "''", description: '열과 행 사이 간격입니다.' },
  { name: 'ratio', type: "'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'", default: '—', description: '미리 정의된 열 비율입니다.' },
  { name: 'itemSpan', type: '1~12', default: '—', description: '모든 직계 자식에 적용할 12열 기준 span입니다.' },
  { name: 'itemSpanMd', type: '1~12', default: '—', description: 'md 이상에서 모든 자식에 적용할 span입니다.' },
  { name: 'itemSpanLg', type: '1~12', default: '—', description: 'lg 이상에서 모든 자식에 적용할 span입니다.' },
  { name: 'autoFit', type: 'boolean', default: 'false', description: '가능한 만큼 자동 열을 배치하고 빈 공간을 채웁니다.' },
  { name: 'autoFill', type: 'boolean', default: 'false', description: '최소 너비 기준의 열 트랙을 자동 생성합니다.' },
  { name: 'equalColumns', type: 'boolean', default: 'false', description: '자식 수만큼 같은 너비의 자동 열을 만듭니다.' },
  { name: 'align', type: "'' | 'center' | 'end'", default: "''", description: '자식의 교차축 정렬입니다.' }
];
const gridClasses: ApiRow[] = [
  { name: 'grid', type: 'class', default: '—', description: '12열 기본 Grid 루트입니다.' },
  { name: 'grid_cols-1~12 · grid_cols-md-* · grid_cols-lg-*', type: 'class', default: '—', description: '기본·반응형 열 수입니다.' },
  { name: 'grid_col-span-1~12 · grid_col-span-md-* · grid_col-span-lg-*', type: 'class', default: '—', description: '개별 자식의 열 span입니다.' },
  { name: 'grid_item-span-1~12 · grid_item-span-md-* · grid_item-span-lg-*', type: 'class', default: '—', description: '모든 직계 자식의 열 span입니다.' },
  { name: 'grid_ratio-*', type: 'class', default: '—', description: '1-1, 2-1, 1-2, 3-1, 1-1-1, 1-2-1 비율입니다.' },
  { name: 'grid_gap-sm · grid_gap-lg · grid_gap-none', type: 'class', default: '—', description: '간격 변형입니다.' },
  { name: 'grid_auto-fit · grid_auto-fill · grid_equal-columns', type: 'class', default: '—', description: '자동 열 배치 방식입니다.' },
  { name: 'grid_align-center · grid_align-end', type: 'class', default: '—', description: '자식 정렬입니다.' }
];
const gridTokens: ApiRow[] = [
  { name: '--grid-columns', type: 'number', default: '12', description: '기본 열 수입니다.' },
  { name: '--grid-gap · --grid-gap-sm · --grid-gap-lg', type: 'length', default: 'space-md · space-sm · space-lg', description: '기본·크기별 간격입니다.' },
  { name: '--grid-auto-min', type: 'length', default: '10rem', description: '자동 배치 열의 최소 너비입니다.' }
];
const gridColProps: ApiRow[] = [
  { name: 'as', type: 'string | component', default: "'div'", description: 'GridCol의 루트 요소입니다.' },
  { name: 'span', type: '1~12', default: '—', description: '기본 화면의 개별 열 span입니다.' },
  { name: 'spanMd', type: '1~12', default: '—', description: 'md 이상 개별 열 span입니다.' },
  { name: 'spanLg', type: '1~12', default: '—', description: 'lg 이상 개별 열 span입니다.' },
  { name: 'children / default', type: 'ReactNode / slot', default: '—', description: 'GridCol 내부 콘텐츠입니다.' }
];
const gridSections = sections('Grid', 'grid', gridProps, gridClasses, gridTokens);
const gridWebSquareRows: ApiRow[] = [
  { name: 'w2:group', type: 'component', default: '—', description: 'Grid와 GridCol의 WebSquare 레이아웃 루트입니다. 중첩 group으로 부모·자식 구조를 표현합니다.' },
  { name: 'class', type: 'string', default: "'grid'", description: 'Grid에는 grid와 배치 변형을, GridCol에는 grid_col-span-* 변형을 조합합니다.' },
  { name: 'tagname', type: 'string', default: "'div'", description: 'header, aside, main, footer 등 콘텐츠 의미에 맞는 HTML 태그를 지정합니다.' },
  { name: 'id', type: 'string', default: '—', description: 'WebSquare 화면 안에서 중복되지 않는 Grid 또는 GridCol ID를 지정합니다.' }
];
export const gridApiSections = [
  ...gridSections.slice(0, 4),
  { title: 'WebSquare API · XML', description: 'Grid는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.', tables: [{ columns, rows: gridWebSquareRows }] },
  ...gridSections.slice(4),
  { title: 'React · Vue 공통 API · GridCol', description: '혼합 열 레이아웃에서 개별 자식의 span을 지정합니다.', tables: [{ columns, rows: gridColProps }] }
];

const flexProps: ApiRow[] = [
  sharedRoot,
  { name: 'direction', type: "'row' | 'column'", default: "'row'", description: '기본 배치 방향입니다. col 별칭도 지원합니다.' },
  { name: 'directionMd', type: "'row' | 'column'", default: '—', description: 'md 이상 배치 방향입니다.' },
  { name: 'directionLg', type: "'row' | 'column'", default: '—', description: 'lg 이상 배치 방향입니다.' },
  { name: 'wrap', type: 'boolean', default: 'false', description: '자식 줄바꿈을 허용합니다.' },
  { name: 'gap', type: "'' | 'sm' | 'lg' | 'none'", default: "''", description: '자식 간 간격입니다.' },
  { name: 'cols · colsMd · colsLg', type: '1~12', default: '—', description: '기본·반응형 화면에서 한 행의 균등한 자식 수입니다. columns 계열 별칭도 지원합니다.' },
  { name: 'ratio', type: "'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'", default: '—', description: '직계 자식의 미리 정의된 flex 비율입니다.' },
  { name: 'itemSpan · itemSpanMd · itemSpanLg', type: '1~12', default: '—', description: '기본·반응형 화면에서 모든 직계 자식의 12단위 span입니다.' },
  { name: 'equal', type: 'boolean', default: 'false', description: '모든 직계 자식을 같은 비율로 확장합니다.' },
  { name: 'autoFit', type: 'boolean', default: 'false', description: '최소 너비 기준으로 자식을 자동 줄바꿈합니다.' },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'", default: '—', description: '교차축 정렬입니다.' },
  { name: 'justify', type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'", default: '—', description: '주축 정렬입니다.' }
];
const flexClasses: ApiRow[] = [
  { name: 'flex · flex_row · flex_col', type: 'class', default: '—', description: '루트와 배치 방향입니다.' },
  { name: 'flex_row-md/lg · flex_col-md/lg · flex_wrap', type: 'class', default: '—', description: '반응형 방향과 줄바꿈입니다.' },
  { name: 'flex_cols-1~12 · flex_cols-md-* · flex_cols-lg-*', type: 'class', default: '—', description: '행별 균등 자식 수입니다.' },
  { name: 'flex_item-span-* · flex_items-span-*', type: 'class', default: '—', description: '개별·전체 자식 span이며 md, lg 변형을 지원합니다.' },
  { name: 'flex_ratio-* · flex_equal · flex_auto-fit', type: 'class', default: '—', description: '자식 너비 분배 방식입니다.' },
  { name: 'flex_align-* · flex_justify-* · flex_self-*', type: 'class', default: '—', description: '부모·개별 자식 정렬입니다.' },
  { name: 'flex_grow · flex_grow-2 · flex_fit · flex_order-1~12', type: 'class', default: '—', description: '개별 자식의 확장·고정·순서입니다.' },
  { name: 'flex_gap-sm · flex_gap-lg · flex_gap-none', type: 'class', default: '—', description: '간격 변형입니다.' }
];
const flexTokens: ApiRow[] = [
  { name: '--flex-gap · --flex-gap-sm · --flex-gap-lg', type: 'length', default: 'space-md · space-sm · space-lg', description: '기본·크기별 간격입니다.' },
  { name: '--flex-auto-min', type: 'length', default: '10rem', description: '자동 배치 자식의 최소 너비입니다.' }
];
const flexItemProps: ApiRow[] = [
  { name: 'as', type: 'string | component', default: "'div'", description: 'FlexItem의 루트 요소입니다.' },
  { name: 'span · spanMd · spanLg', type: '1~12', default: '—', description: '기본·md·lg 화면의 개별 항목 span입니다.' },
  { name: 'grow', type: 'boolean', default: 'false', description: '남는 공간을 채우도록 확장합니다.' },
  { name: 'growFactor', type: '1 | 2', default: '1', description: 'grow 항목의 확장 비율입니다.' },
  { name: 'fit', type: 'boolean', default: 'false', description: '콘텐츠 너비를 유지합니다.' },
  { name: 'align', type: "'auto' | 'start' | 'center' | 'end' | 'stretch' | 'baseline'", default: '—', description: '개별 항목의 교차축 정렬입니다.' },
  { name: 'order', type: '1~12', default: '—', description: '항목 표시 순서입니다.' },
  { name: 'children / default', type: 'ReactNode / slot', default: '—', description: 'FlexItem 내부 콘텐츠입니다.' }
];
const flexSections = sections('Flex', 'flex', flexProps, flexClasses, flexTokens);
const flexWebSquareRows: ApiRow[] = [
  { name: 'w2:group', type: 'component', default: '—', description: 'Flex와 FlexItem의 WebSquare 레이아웃 루트입니다. 중첩 group으로 부모·자식 구조를 표현합니다.' },
  { name: 'class', type: 'string', default: "'flex flex_row'", description: 'Flex에는 방향·정렬·배치 클래스를, FlexItem에는 span·grow·fit·self 클래스를 조합합니다.' },
  { name: 'tagname', type: 'string', default: "'div'", description: 'header, aside, main, footer 등 콘텐츠 의미에 맞는 HTML 태그를 지정합니다.' },
  { name: 'id', type: 'string', default: '—', description: 'WebSquare 화면 안에서 중복되지 않는 Flex 또는 FlexItem ID를 지정합니다.' }
];
export const flexApiSections = [
  ...flexSections.slice(0, 4),
  { title: 'WebSquare API · XML', description: 'Flex는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.', tables: [{ columns, rows: flexWebSquareRows }] },
  ...flexSections.slice(4),
  { title: 'React · Vue 공통 API · FlexItem', description: '혼합 레이아웃에서 개별 항목의 span·확장·정렬·순서를 지정합니다.', tables: [{ columns, rows: flexItemProps }] }
];

const dividerProps: ApiRow[] = [
  { name: 'tag', type: "'auto' | 'hr' | 'div' | 'span'", default: "'auto'", description: '루트 태그입니다. auto는 선 hr, 레이블 div, 세로선 span을 선택합니다.' },
  { name: 'as', type: 'string | component', default: '—', description: 'tag보다 우선하는 루트 요소 호환 prop입니다.' },
  { name: 'vertical', type: 'boolean', default: 'false', description: '세로 구분선을 사용합니다.' },
  { name: 'dashed', type: 'boolean', default: 'false', description: '선을 dashed 스타일로 표시합니다.' },
  { name: 'plain', type: 'boolean', default: 'false', description: '레이블 굵기를 일반 두께로 표시합니다.' },
  { name: 'orient', type: "'' | 'left' | 'right'", default: "''", description: '레이블의 수평 위치입니다. orientation 별칭도 지원합니다.' },
  { name: 'label', type: 'string', default: '—', description: 'children 또는 기본 슬롯 대신 사용할 레이블입니다.' }
];
const dividerClasses: ApiRow[] = [
  { name: 'divider', type: 'class', default: '—', description: '기본 수평 구분선이며 콘텐츠가 있으면 양쪽 선과 레이블로 표시됩니다.' },
  { name: 'divider_dashed · divider_plain', type: 'class', default: '—', description: '점선과 일반 굵기 레이블입니다.' },
  { name: 'divider_orient-left · divider_orient-right', type: 'class', default: '—', description: '레이블 위치입니다.' },
  { name: 'divider_vertical', type: 'class', default: '—', description: '세로 구분선입니다.' }
];
const dividerTokens: ApiRow[] = [
  { name: '--divider-color · --divider-thickness', type: 'color · length', default: 'border-subtle · 1px', description: '선 색상과 두께입니다.' },
  { name: '--divider-margin-y · --divider-margin-x', type: 'length', default: 'space-md · space-sm', description: '수평·세로 구분선 외부 간격입니다.' },
  { name: '--divider-text-gap · --divider-orient-inset', type: 'length', default: 'space-md · 5%', description: '레이블과 선 간격 및 좌우 inset입니다.' }
];
const dividerSections = sections('Divider', 'divider', dividerProps, dividerClasses, dividerTokens, [], '—');
const dividerWebSquareRows: ApiRow[] = [
  { name: 'hr', type: 'XHTML element', default: '—', description: '레이블 없는 의미 있는 수평 구분선입니다. divider 클래스를 직접 적용합니다.' },
  { name: 'w2:group + w2:textbox', type: 'component', default: '—', description: '레이블형 Divider입니다. group에 divider 변형 클래스를, textbox의 label에 텍스트를 지정합니다.' },
  { name: 'span[aria-hidden="true"]', type: 'XHTML element', default: '—', description: '장식용 세로 구분선입니다. divider_vertical 클래스를 적용하고 접근성 트리에서 숨깁니다.' },
  { name: 'id', type: 'string', default: '—', description: 'w2:group과 w2:textbox에는 화면 안에서 중복되지 않는 ID를 지정합니다.' }
];
export const dividerApiSections = [
  ...dividerSections.slice(0, 4),
  { title: 'WebSquare API · XML', description: 'Divider의 의미와 렌더링 방식에 따라 XHTML hr·span과 WebSquare group·textbox를 구분해 사용합니다. 이벤트와 데이터 바인딩은 필요하지 않습니다.', tables: [{ columns, rows: dividerWebSquareRows }] },
  ...dividerSections.slice(4)
];

const spaceProps: ApiRow[] = [
  sharedRoot,
  { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: '자식 사이 간격입니다. size 별칭도 지원합니다.' },
  { name: 'vertical', type: 'boolean', default: 'false', description: '자식을 세로로 배치합니다.' },
  { name: 'wrap', type: 'boolean', default: 'false', description: '자식 줄바꿈을 허용합니다.' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비를 채우는 block flex로 표시합니다.' },
  { name: 'align', type: "'start' | 'center' | 'end' | 'baseline' | 'stretch'", default: 'center', description: '교차축 정렬입니다.' },
  { name: 'justify', type: "'start' | 'center' | 'end' | 'between'", default: '—', description: '주축 정렬입니다.' }
];
const spaceClasses: ApiRow[] = [
  { name: 'space', type: 'class', default: '—', description: '기본 inline-flex 간격 컨테이너입니다.' },
  { name: 'space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl', type: 'class', default: '—', description: '간격 크기입니다.' },
  { name: 'space_vertical · space_wrap · space_block', type: 'class', default: '—', description: '방향·줄바꿈·너비 변형입니다.' },
  { name: 'space_align-* · space_justify-*', type: 'class', default: '—', description: '교차축·주축 정렬입니다.' }
];
const spaceTokens: ApiRow[] = [
  { name: '--space-gap', type: 'length', default: 'var(--space-md)', description: '기본 자식 간격입니다.' },
  { name: '--space-xs · --space-sm · --space-lg · --space-xl', type: 'length', default: '공통 spacing token', description: '크기별 간격에 사용하는 공통 토큰입니다.' }
];
const spaceSections = sections('Space', 'space', spaceProps, spaceClasses, spaceTokens);
const spaceWebSquareRows: ApiRow[] = [
  { name: 'w2:group', type: 'component', default: '—', description: 'Space의 WebSquare 루트입니다. 자식 컴포넌트를 순서대로 배치하는 레이아웃 그룹으로 사용합니다.' },
  { name: 'class', type: 'string', default: "'space'", description: 'space와 gap·vertical·wrap·block·align·justify 변형 클래스를 조합합니다.' },
  { name: 'tagname', type: 'string', default: "'div'", description: '목록이나 도구 모음 등 콘텐츠 구조에 맞는 HTML 루트 태그가 필요할 때 지정합니다.' },
  { name: 'id', type: 'string', default: '—', description: 'WebSquare 화면 안에서 중복되지 않는 Space ID를 지정합니다.' }
];
export const spaceApiSections = [
  ...spaceSections.slice(0, 4),
  { title: 'WebSquare API · XML', description: 'Space는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.', tables: [{ columns, rows: spaceWebSquareRows }] },
  ...spaceSections.slice(4)
];

import{r as h,c as ne,u as te,n as ge,j as e,a as pe,b as ve}from"./iframe-Ec8Bs185.js";import{G as d}from"./Grid-BpF7yLTQ.js";import{w as s}from"./story-renders-Bo_F9MSp.js";import"./preload-helper-DUxc-Dqw.js";const _e=ve("GridCol",{selfClosing:!1});function i({as:r="div",span:a,spanMd:l,spanLg:o,children:f,className:C,...j}){const y=h.useRef(null),oe=h.useMemo(()=>ne({default:f}),[f]);te(_e,{as:r==="div"?void 0:r,span:a,spanMd:l,spanLg:o},oe,y,{className:C,...j});const ce=ge(j),me=h.useMemo(()=>[a!=null&&`grid_col-span-${a}`,l!=null&&`grid_col-span-md-${l}`,o!=null&&`grid_col-span-lg-${o}`],[a,l,o]);return e.jsx(r,{ref:y,className:pe(me,C),...ce,children:f})}i.__docgenInfo={description:"",methods:[],displayName:"GridCol",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};const ue=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ne=[{name:"cols",type:"number | string",default:"—",description:"균등 열 수 (grid_cols-*)"},{name:"colsMd",type:"number | string",default:"—",description:"md 브레이크포인트 이상 균등 열 수 (grid_cols-md-*)"},{name:"colsLg",type:"number | string",default:"—",description:"lg 브레이크포인트 이상 균등 열 수 (grid_cols-lg-*)"},{name:"ratio",type:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'",default:"—",description:"2~3열 비율 레이아웃 (grid_ratio-*)"},{name:"itemSpan",type:"number | string",default:"—",description:"모든 자식에 동일 span 적용 (12열 기준, grid_item-span-*)"},{name:"itemSpanMd",type:"number | string",default:"—",description:"md 이상 자식 일괄 span (grid_item-span-md-*)"},{name:"itemSpanLg",type:"number | string",default:"—",description:"lg 이상 자식 일괄 span (grid_item-span-lg-*)"},{name:"gap",type:"'sm' | 'lg' | 'none'",default:"—",description:"열·행 간격. 생략 시 --grid-gap (md)"},{name:"autoFit",type:"boolean",default:"false",description:"auto-fit 반복 열 (grid_auto-fit)"},{name:"autoFill",type:"boolean",default:"false",description:"auto-fill 반복 열 (grid_auto-fill)"}],Ge=[{key:"name",label:"Children"},{key:"description",label:"설명"}],xe=[{name:"children",description:"그리드 자식 콘텐츠 (Vue default 슬롯 대응)"}],fe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],he=[{name:"grid",description:"12열 CSS Grid 루트"},{name:"grid_cols-* · grid_cols-md-* · grid_cols-lg-*",description:"균등 열 수"},{name:"grid_ratio-*",description:"비율 열 (2-1, 1-2-1 등)"},{name:"grid_item-span-* · grid_item-span-md-* · grid_item-span-lg-*",description:"자식 일괄 span"},{name:"grid_col-span-* · grid_col-span-md-* · grid_col-span-lg-*",description:"자식별 개별 span (혼합 레이아웃)"},{name:"grid_gap-sm · grid_gap-lg · grid_gap-none",description:"간격 변형"},{name:"grid_auto-fit · grid_auto-fill",description:"자동 반복 열"},{name:"grid_equal-columns",description:"균등 열 자동 흐름"},{name:"grid_align-center · grid_align-end",description:"교차축 정렬"}],Ce=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],je=[{name:"--grid-columns",default:"12",description:"기본 열 수"},{name:"--grid-gap",default:"var(--space-md)",description:"기본 간격"},{name:"--grid-gap-sm · --grid-gap-lg",default:"var(--space-sm) · var(--space-lg)",description:"간격 변형"},{name:"--grid-auto-min",default:"10rem",description:"auto-fit · auto-fill 최소 열 너비"}],ye=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],be=[{name:"as",type:"string",default:"'div'",description:"GridCol이 렌더링할 HTML 요소"},{name:"span",type:"number | string",default:"—",description:"12열 기준 개별 열 span (grid_col-span-*)"},{name:"spanMd",type:"number | string",default:"—",description:"md 이상 개별 열 span"},{name:"spanLg",type:"number | string",default:"—",description:"lg 이상 개별 열 span"}],Se=[{key:"name",label:"Children"},{key:"description",label:"설명"}],ke=[{name:"children",description:"열 셀 내부 콘텐츠 (Vue default 슬롯 대응)"}],we=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: cols-md → colsMd, item-span → itemSpan, auto-fit → autoFit)와 동일한 의미입니다.",tables:[{columns:ue,rows:Ne,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:Ge,rows:xe,codeColumn:"name"}]},{title:"API · GridCol",tables:[{columns:ye,rows:be,codeColumn:"name"},{columns:Se,rows:ke,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:fe,rows:he,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ce,rows:je,codeColumn:"name"}]}],Pe=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid_demo-cell",children:"1"}),e.jsx("div",{className:"grid_demo-cell",children:"2"}),e.jsx("div",{className:"grid_demo-cell",children:"3"})]});function Me(r,a){return e.jsx(d,{...a.args,children:Pe})}const Re={cols:3,gap:"sm",autoFit:!1,autoFill:!1},Ae={title:"Components/레이아웃/Grid",id:"components-grid",component:d,tags:["autodocs"],argTypes:{ratio:{control:"select",options:["1-1","2-1","1-2","3-1","1-1-1","1-2-1"],type:{name:"enum",summary:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'"}},gap:{control:"select",options:["sm","lg","none"],type:{name:"enum",summary:"'sm' | 'lg' | 'none'"}},autoFit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},autoFill:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:we,docs:{description:{component:"12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 부모 .grid에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다."}}}},c={parameters:{controls:{disable:!1}},args:{...Re},render:Me},m={name:"기본 페이지 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"헤더와 푸터는 12열을 사용하고, md 이상에서 사이드바 3열과 콘텐츠 9열로 나눅니다."},source:{language:"tsx",code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';
import GridCol from '@uxkm/ui-react/components/GridCol.jsx';

export function BasicLayoutExample() {
  return (
    <Grid gap="sm">
      <GridCol as="header" span={12}>Header</GridCol>
      <GridCol as="aside" span={12} spanMd={3}>Sidebar</GridCol>
      <GridCol as="main" span={12} spanMd={9}>Main content</GridCol>
      <GridCol as="footer" span={12}>Footer</GridCol>
    </Grid>
  );
}`}}},render:s(e.jsxs(d,{gap:"sm",children:[e.jsx(i,{as:"header",span:12,className:"grid_demo-cell",children:"Header"}),e.jsx(i,{as:"aside",span:12,spanMd:3,className:"grid_demo-cell",children:"Sidebar"}),e.jsx(i,{as:"main",span:12,spanMd:9,className:"grid_demo-cell",children:"Main content"}),e.jsx(i,{as:"footer",span:12,className:"grid_demo-cell",children:"Footer"})]}))},n={name:"콘텐츠가 있는 페이지 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"Main content 안에 반응형 콘텐츠 섹션을 중첩한 활용 예시입니다."}}},render:s(e.jsxs(d,{gap:"sm",children:[e.jsx(i,{as:"header",span:12,className:"grid_demo-cell",children:"Header"}),e.jsx(i,{as:"aside",span:12,spanMd:3,className:"grid_demo-cell",children:"Sidebar"}),e.jsxs(i,{as:"main",span:12,spanMd:9,className:"grid_demo-cell",children:[e.jsx("h3",{children:"Main content"}),e.jsx("p",{children:"페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다."}),e.jsxs(d,{cols:1,colsLg:2,gap:"sm",children:[e.jsx("article",{className:"component_stub",children:"Content section"}),e.jsx("article",{className:"component_stub",children:"Content section"})]})]}),e.jsx(i,{as:"footer",span:12,className:"grid_demo-cell",children:"Footer"})]}))},t={name:"12열 전체 활용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"itemSpan={1}을 부모에 지정하여 12개 항목이 한 행을 채웁니다."}}},render:s(e.jsx(d,{itemSpan:1,gap:"sm",children:Array.from({length:12},(r,a)=>e.jsx("div",{className:"grid_demo-cell",children:a+1},a))}))},g={name:"부모 클래스로 제어",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ParentExample() {
  return (
    <>
      <Grid cols={3}>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div className="grid_demo-cell">grid_ratio-2-1</div>
        <div className="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid itemSpan={4}>
        <div className="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
      </Grid>
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"})]}),e.jsxs(d,{ratio:"2-1",children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_ratio-2-1"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_ratio-2-1"})]}),e.jsxs(d,{itemSpan:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4 (12열 기준 3개/행)"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"})]})]}))},p={name:"균등 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function EqualExample() {
  return (
    <>
      <Grid cols={2}>
        <div className="grid_demo-cell">cols 2</div>
        <div className="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid cols={4}>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
      </Grid>
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:2,children:[e.jsx("div",{className:"grid_demo-cell",children:"cols 2"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 2"})]}),e.jsxs(d,{cols:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"})]})]}))},v={name:"비율 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function RatioExample() {
  return (
    <>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsxs(d,{ratio:"1-2",children:[e.jsx("div",{className:"grid_demo-cell",children:"1 : 2"}),e.jsx("div",{className:"grid_demo-cell",children:"1 : 2"})]}),e.jsxs(d,{ratio:"1-2-1",children:[e.jsx("div",{className:"grid_demo-cell",children:"1"}),e.jsx("div",{className:"grid_demo-cell",children:"2"}),e.jsx("div",{className:"grid_demo-cell",children:"1"})]})]}))},_={name:"자식 일괄 span (12열)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ItemSpanExample() {
  return (
    <>
      <Grid itemSpan={6}>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
      </Grid>
      <Grid itemSpan={3}>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
      </Grid>
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsxs(d,{itemSpan:6,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"})]}),e.jsxs(d,{itemSpan:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"})]})]}))},u={name:"자식별 span (혼합 레이아웃)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';
import GridCol from '@uxkm/ui-react/components/GridCol.jsx';

export function ChildExample() {
  return (
    <Grid>
      <GridCol span={8}>
        <div className="grid_demo-cell">span 8</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
    </Grid>
  );
}`,language:"tsx"}}},render:s(e.jsxs(d,{children:[e.jsx(i,{span:8,children:e.jsx("div",{className:"grid_demo-cell",children:"span 8"})}),e.jsx(i,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx(i,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx(i,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx(i,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})})]}))},N={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function GapExample() {
  return (
    <>
      <Grid cols={3} gap="sm">
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid cols={3} gap="lg">
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
      </Grid>
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:3,gap:"sm",children:[e.jsx("div",{className:"grid_demo-cell",children:"gap sm"}),e.jsx("div",{className:"grid_demo-cell",children:"gap sm"}),e.jsx("div",{className:"grid_demo-cell",children:"gap sm"})]}),e.jsxs(d,{cols:3,gap:"lg",children:[e.jsx("div",{className:"grid_demo-cell",children:"gap lg"}),e.jsx("div",{className:"grid_demo-cell",children:"gap lg"}),e.jsx("div",{className:"grid_demo-cell",children:"gap lg"})]})]}))},G={name:"반응형 (부모)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ResponsiveExample() {
  return (
    <>
      <Grid cols={1} colsMd={2} colsLg={3}>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>
    </>
  );
}`,language:"tsx"}}},render:s(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:1,colsMd:2,colsLg:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"}),e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"}),e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"})]}),e.jsxs(d,{itemSpan:12,itemSpanMd:6,itemSpanLg:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"}),e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"}),e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"})]}),e.jsxs(d,{children:[e.jsx(i,{span:12,spanMd:8,spanLg:9,children:e.jsx("div",{className:"grid_demo-cell",children:"개별 span 12 → md 8 → lg 9"})}),e.jsx(i,{span:12,spanMd:4,spanLg:3,children:e.jsx("div",{className:"grid_demo-cell",children:"개별 span 12 → md 4 → lg 3"})})]})]}))},x={name:"자동 배치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_auto-fit · grid_auto-fill은 부모에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function AutoExample() {
  return (
    <Grid autoFit>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
    </Grid>
  );
}`,language:"tsx"}}},render:s(e.jsxs(d,{autoFit:!0,children:[e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"})]}))};var b,S,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: renderGridPlayground
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,P,M;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '기본 페이지 레이아웃',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '헤더와 푸터는 12열을 사용하고, md 이상에서 사이드바 3열과 콘텐츠 9열로 나눅니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';
import GridCol from '@uxkm/ui-react/components/GridCol.jsx';

export function BasicLayoutExample() {
  return (
    <Grid gap="sm">
      <GridCol as="header" span={12}>Header</GridCol>
      <GridCol as="aside" span={12} spanMd={3}>Sidebar</GridCol>
      <GridCol as="main" span={12} spanMd={9}>Main content</GridCol>
      <GridCol as="footer" span={12}>Footer</GridCol>
    </Grid>
  );
}\`
      }
    }
  },
  render: withDocsCanvasRender(<Grid gap="sm">
      <GridCol as="header" span={12} className="grid_demo-cell">Header</GridCol>
      <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">Sidebar</GridCol>
      <GridCol as="main" span={12} spanMd={9} className="grid_demo-cell">Main content</GridCol>
      <GridCol as="footer" span={12} className="grid_demo-cell">Footer</GridCol>
    </Grid>)
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var R,E,F;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '콘텐츠가 있는 페이지 레이아웃',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'Main content 안에 반응형 콘텐츠 섹션을 중첩한 활용 예시입니다.'
      }
    }
  },
  render: withDocsCanvasRender(<Grid gap="sm">
      <GridCol as="header" span={12} className="grid_demo-cell">Header</GridCol>
      <GridCol as="aside" span={12} spanMd={3} className="grid_demo-cell">Sidebar</GridCol>
      <GridCol as="main" span={12} spanMd={9} className="grid_demo-cell">
        <h3>Main content</h3>
        <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Grid cols={1} colsLg={2} gap="sm">
          <article className="component_stub">Content section</article>
          <article className="component_stub">Content section</article>
        </Grid>
      </GridCol>
      <GridCol as="footer" span={12} className="grid_demo-cell">Footer</GridCol>
    </Grid>)
}`,...(F=(E=n.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,D,A;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '12열 전체 활용',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'itemSpan={1}을 부모에 지정하여 12개 항목이 한 행을 채웁니다.'
      }
    }
  },
  render: withDocsCanvasRender(<Grid itemSpan={1} gap="sm">
      {Array.from({
      length: 12
    }, (_, index) => <div className="grid_demo-cell" key={index}>{index + 1}</div>)}
    </Grid>)
}`,...(A=(D=t.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var H,I,T;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '부모 클래스로 제어',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ParentExample() {
  return (
    <>
      <Grid cols={3}>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div className="grid_demo-cell">grid_ratio-2-1</div>
        <div className="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid itemSpan={4}>
        <div className="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
      </Grid>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Grid cols={3}>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
        <div className="grid_demo-cell">grid_cols-3</div>
      </Grid>
      <Grid ratio="2-1">
        <div className="grid_demo-cell">grid_ratio-2-1</div>
        <div className="grid_demo-cell">grid_ratio-2-1</div>
      </Grid>
      <Grid itemSpan={4}>
        <div className="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
        <div className="grid_demo-cell">grid_item-span-4</div>
      </Grid>
    </>)
}`,...(T=(I=g.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var q,V,B;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '균등 열',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function EqualExample() {
  return (
    <>
      <Grid cols={2}>
        <div className="grid_demo-cell">cols 2</div>
        <div className="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid cols={4}>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
      </Grid>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Grid cols={2}>
        <div className="grid_demo-cell">cols 2</div>
        <div className="grid_demo-cell">cols 2</div>
      </Grid>
      <Grid cols={4}>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
        <div className="grid_demo-cell">cols 4</div>
      </Grid>
    </>)
}`,...(B=(V=p.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var O,$,z;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '비율 열',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function RatioExample() {
  return (
    <>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Grid ratio="1-2">
        <div className="grid_demo-cell">1 : 2</div>
        <div className="grid_demo-cell">1 : 2</div>
      </Grid>
      <Grid ratio="1-2-1">
        <div className="grid_demo-cell">1</div>
        <div className="grid_demo-cell">2</div>
        <div className="grid_demo-cell">1</div>
      </Grid>
    </>)
}`,...(z=($=v.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var J,K,Q;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '자식 일괄 span (12열)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ItemSpanExample() {
  return (
    <>
      <Grid itemSpan={6}>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
      </Grid>
      <Grid itemSpan={3}>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
      </Grid>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Grid itemSpan={6}>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
        <div className="grid_demo-cell">span 6</div>
      </Grid>
      <Grid itemSpan={3}>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
        <div className="grid_demo-cell">span 3</div>
      </Grid>
    </>)
}`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '자식별 span (혼합 레이아웃)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';
import GridCol from '@uxkm/ui-react/components/GridCol.jsx';

export function ChildExample() {
  return (
    <Grid>
      <GridCol span={8}>
        <div className="grid_demo-cell">span 8</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
    </Grid>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Grid>
      <GridCol span={8}>
        <div className="grid_demo-cell">span 8</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
      <GridCol span={4}>
        <div className="grid_demo-cell">span 4</div>
      </GridCol>
    </Grid>)
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '간격',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function GapExample() {
  return (
    <>
      <Grid cols={3} gap="sm">
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid cols={3} gap="lg">
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
      </Grid>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Grid cols={3} gap="sm">
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
        <div className="grid_demo-cell">gap sm</div>
      </Grid>
      <Grid cols={3} gap="lg">
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
        <div className="grid_demo-cell">gap lg</div>
      </Grid>
    </>)
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var de,ie,se;G.parameters={...G.parameters,docs:{...(de=G.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '반응형 (부모)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ResponsiveExample() {
  return (
    <>
      <Grid cols={1} colsMd={2} colsLg={3}>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Grid cols={1} colsMd={2} colsLg={3}>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
        <div className="grid_demo-cell">1 → md 2 → lg 3열</div>
      </Grid>
      <Grid itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
        <div className="grid_demo-cell">span 12 → md 6 → lg 4</div>
      </Grid>
      <Grid>
        <GridCol span={12} spanMd={8} spanLg={9}>
          <div className="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
        </GridCol>
        <GridCol span={12} spanMd={4} spanLg={3}>
          <div className="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
        </GridCol>
      </Grid>
    </>)
}`,...(se=(ie=G.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ae,re,le;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: '자동 배치',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'grid_auto-fit · grid_auto-fill은 부모에 지정합니다.'
      },
      source: {
        code: \`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function AutoExample() {
  return (
    <Grid autoFit>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
    </Grid>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Grid autoFit>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
      <div className="grid_demo-cell">auto-fit</div>
    </Grid>)
}`,...(le=(re=x.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const He=["Playground","BasicLayout","ContentLayout","TwelveColumns","Parent","Equal","Ratio","ItemSpan","Child","Gap","Responsive","Auto"];export{x as Auto,m as BasicLayout,u as Child,n as ContentLayout,p as Equal,N as Gap,_ as ItemSpan,g as Parent,c as Playground,v as Ratio,G as Responsive,t as TwelveColumns,He as __namedExportsOrder,Ae as default};

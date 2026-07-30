import{r as x,c as Q,u as U,n as W,j as e,a as X,b as Y}from"./iframe-DS-82CEY.js";import{G as d}from"./Grid-CZbW72XU.js";import{w as i}from"./story-renders-DjJEfxtm.js";import"./preload-helper-DUxc-Dqw.js";const Z=Y("GridCol",{selfClosing:!1});function s({span:l,children:a,className:_,...u}){const N=x.useRef(null),J=x.useMemo(()=>Q({default:a}),[a]);U(Z,{span:l},J,N,{className:_,...u});const K=W(u);return e.jsx("div",{ref:N,className:X(l!=null&&`grid_col-span-${l}`,_),...K,children:a})}s.__docgenInfo={description:"",methods:[],displayName:"GridCol"};const ee=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],de=[{name:"cols",type:"number | string",default:"—",description:"균등 열 수 (grid_cols-*)"},{name:"colsMd",type:"number | string",default:"—",description:"md 브레이크포인트 이상 균등 열 수 (grid_cols-md-*)"},{name:"colsLg",type:"number | string",default:"—",description:"lg 브레이크포인트 이상 균등 열 수 (grid_cols-lg-*)"},{name:"ratio",type:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'",default:"—",description:"2~3열 비율 레이아웃 (grid_ratio-*)"},{name:"itemSpan",type:"number | string",default:"—",description:"모든 자식에 동일 span 적용 (12열 기준, grid_item-span-*)"},{name:"itemSpanMd",type:"number | string",default:"—",description:"md 이상 자식 일괄 span (grid_item-span-md-*)"},{name:"itemSpanLg",type:"number | string",default:"—",description:"lg 이상 자식 일괄 span (grid_item-span-lg-*)"},{name:"gap",type:"'sm' | 'lg' | 'none'",default:"—",description:"열·행 간격. 생략 시 --grid-gap (md)"},{name:"autoFit",type:"boolean",default:"false",description:"auto-fit 반복 열 (grid_auto-fit)"},{name:"autoFill",type:"boolean",default:"false",description:"auto-fill 반복 열 (grid_auto-fill)"}],ie=[{key:"name",label:"Children"},{key:"description",label:"설명"}],se=[{name:"children",description:"그리드 자식 콘텐츠 (Vue default 슬롯 대응)"}],ae=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],le=[{name:"grid",description:"12열 CSS Grid 루트"},{name:"grid_cols-* · grid_cols-md-* · grid_cols-lg-*",description:"균등 열 수"},{name:"grid_ratio-*",description:"비율 열 (2-1, 1-2-1 등)"},{name:"grid_item-span-* · grid_item-span-md-* · grid_item-span-lg-*",description:"자식 일괄 span"},{name:"grid_col-span-* · grid_col-span-md-* · grid_col-span-lg-*",description:"자식별 개별 span (혼합 레이아웃)"},{name:"grid_gap-sm · grid_gap-lg · grid_gap-none",description:"간격 변형"},{name:"grid_auto-fit · grid_auto-fill",description:"자동 반복 열"},{name:"grid_equal-columns",description:"균등 열 자동 흐름"},{name:"grid_align-center · grid_align-end",description:"교차축 정렬"}],re=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],oe=[{name:"--grid-columns",default:"12",description:"기본 열 수"},{name:"--grid-gap",default:"var(--space-md)",description:"기본 간격"},{name:"--grid-gap-sm · --grid-gap-lg",default:"var(--space-sm) · var(--space-lg)",description:"간격 변형"},{name:"--grid-auto-min",default:"10rem",description:"auto-fit · auto-fill 최소 열 너비"}],ce=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: cols-md → colsMd, item-span → itemSpan, auto-fit → autoFit)와 동일한 의미입니다.",tables:[{columns:ee,rows:de,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:ie,rows:se,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ae,rows:le,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:re,rows:oe,codeColumn:"name"}]}],me=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid_demo-cell",children:"1"}),e.jsx("div",{className:"grid_demo-cell",children:"2"}),e.jsx("div",{className:"grid_demo-cell",children:"3"})]});function ne(l,a){return e.jsx(d,{...a.args,children:me})}const te={cols:3,gap:"sm",autoFit:!1,autoFill:!1},ue={title:"Components/레이아웃/Grid",id:"components-grid",component:d,tags:["autodocs"],argTypes:{ratio:{control:"select",options:["1-1","2-1","1-2","3-1","1-1-1","1-2-1"],type:{name:"enum",summary:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'"}},gap:{control:"select",options:["sm","lg","none"],type:{name:"enum",summary:"'sm' | 'lg' | 'none'"}},autoFit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},autoFill:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ce,docs:{description:{component:"12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 부모 .grid에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다."}}}},r={parameters:{controls:{disable:!1}},args:{...te},render:ne},o={name:"부모 클래스로 제어",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"})]}),e.jsxs(d,{ratio:"2-1",children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_ratio-2-1"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_ratio-2-1"})]}),e.jsxs(d,{itemSpan:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4 (12열 기준 3개/행)"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"})]})]}))},c={name:"균등 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:2,children:[e.jsx("div",{className:"grid_demo-cell",children:"cols 2"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 2"})]}),e.jsxs(d,{cols:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"})]})]}))},m={name:"비율 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{ratio:"1-2",children:[e.jsx("div",{className:"grid_demo-cell",children:"1 : 2"}),e.jsx("div",{className:"grid_demo-cell",children:"1 : 2"})]}),e.jsxs(d,{ratio:"1-2-1",children:[e.jsx("div",{className:"grid_demo-cell",children:"1"}),e.jsx("div",{className:"grid_demo-cell",children:"2"}),e.jsx("div",{className:"grid_demo-cell",children:"1"})]})]}))},n={name:"자식 일괄 span (12열)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{itemSpan:6,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"})]}),e.jsxs(d,{itemSpan:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"})]})]}))},t={name:"자식별 span (혼합 레이아웃)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';
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
}`,language:"tsx"}}},render:i(e.jsxs(d,{children:[e.jsx(s,{span:8,children:e.jsx("div",{className:"grid_demo-cell",children:"span 8"})}),e.jsx(s,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx(s,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx(s,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx(s,{span:4,children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})})]}))},g={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:3,gap:"sm",children:[e.jsx("div",{className:"grid_demo-cell",children:"gap sm"}),e.jsx("div",{className:"grid_demo-cell",children:"gap sm"}),e.jsx("div",{className:"grid_demo-cell",children:"gap sm"})]}),e.jsxs(d,{cols:3,gap:"lg",children:[e.jsx("div",{className:"grid_demo-cell",children:"gap lg"}),e.jsx("div",{className:"grid_demo-cell",children:"gap lg"}),e.jsx("div",{className:"grid_demo-cell",children:"gap lg"})]})]}))},p={name:"반응형 (부모)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:1,colsMd:2,colsLg:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"}),e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"}),e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"})]}),e.jsxs(d,{itemSpan:12,itemSpanMd:6,itemSpanLg:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"}),e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"}),e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"})]})]}))},v={name:"자동 배치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_auto-fit · grid_auto-fill은 부모에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(d,{autoFit:!0,children:[e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"})]}))};var G,f,j;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: renderGridPlayground
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var h,C,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,b,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var P,w,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var E,F,M;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(F=n.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var D,L,A;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(L=t.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var I,q,T;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(q=g.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var O,V,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    </>)
}`,...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var z,$,B;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=($=v.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const Ne=["Playground","Parent","Equal","Ratio","ItemSpan","Child","Gap","Responsive","Auto"];export{v as Auto,t as Child,c as Equal,g as Gap,n as ItemSpan,o as Parent,r as Playground,m as Ratio,p as Responsive,Ne as __namedExportsOrder,ue as default};

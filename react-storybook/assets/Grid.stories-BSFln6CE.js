import{j as e}from"./iframe-ifEc15ad.js";import{G as d}from"./Grid-FZbkMHkA.js";import{w as i}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const O=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],V=[{name:"cols",type:"number | string",default:"—",description:"균등 열 수 (grid_cols-*)"},{name:"cols-md",type:"number | string",default:"—",description:"md 브레이크포인트 이상 균등 열 수"},{name:"cols-lg",type:"number | string",default:"—",description:"lg 브레이크포인트 이상 균등 열 수"},{name:"ratio",type:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'",default:"—",description:"2~3열 비율 레이아웃 (grid_ratio-*)"},{name:"item-span",type:"number | string",default:"—",description:"모든 자식에 동일 span 적용 (12열 기준, grid_item-span-*)"},{name:"item-span-md",type:"number | string",default:"—",description:"md 이상 자식 일괄 span"},{name:"item-span-lg",type:"number | string",default:"—",description:"lg 이상 자식 일괄 span"},{name:"gap",type:"'sm' | 'lg' | 'none'",default:"—",description:"열·행 간격. 생략 시 --grid-gap (md)"},{name:"auto-fit",type:"boolean",default:"false",description:"auto-fit 반복 열 (grid_auto-fit)"},{name:"auto-fill",type:"boolean",default:"false",description:"auto-fill 반복 열 (grid_auto-fill)"}],H=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],z=[{name:"grid",description:"12열 CSS Grid 루트"},{name:"grid_cols-* · grid_cols-md-* · grid_cols-lg-*",description:"균등 열 수"},{name:"grid_ratio-*",description:"비율 열 (2-1, 1-2-1 등)"},{name:"grid_item-span-* · grid_item-span-md-* · grid_item-span-lg-*",description:"자식 일괄 span"},{name:"grid_col-span-* · grid_col-span-md-* · grid_col-span-lg-*",description:"자식별 개별 span (혼합 레이아웃)"},{name:"grid_gap-sm · grid_gap-lg · grid_gap-none",description:"간격 변형"},{name:"grid_auto-fit · grid_auto-fill",description:"자동 반복 열"},{name:"grid_equal-columns",description:"균등 열 자동 흐름"},{name:"grid_align-center · grid_align-end",description:"교차축 정렬"}],B=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],J=[{name:"--grid-columns",default:"12",description:"기본 열 수"},{name:"--grid-gap",default:"var(--space-md)",description:"기본 간격"},{name:"--grid-gap-sm · --grid-gap-lg",default:"var(--space-sm) · var(--space-lg)",description:"간격 변형"},{name:"--grid-auto-min",default:"10rem",description:"auto-fit · auto-fill 최소 열 너비"}],K=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Q=[{name:"children",description:"그리드 자식 콘텐츠 (Vue default 슬롯 대응)"}],U=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: cols-md → colsMd, item-span → itemSpan, auto-fit → autoFit)와 동일한 의미입니다.",tables:[{columns:O,rows:V,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:K,rows:Q,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:H,rows:z,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:B,rows:J,codeColumn:"name"}]}],W=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid_demo-cell",children:"1"}),e.jsx("div",{className:"grid_demo-cell",children:"2"}),e.jsx("div",{className:"grid_demo-cell",children:"3"})]});function X(Z,T){return e.jsx(d,{...T.args,children:W})}const Y={cols:3,gap:"sm",autoFit:!1,autoFill:!1},se={title:"Components/레이아웃/Grid",id:"components-grid",component:d,tags:["autodocs"],argTypes:{ratio:{control:"select",options:["1-1","2-1","1-2","3-1","1-1-1","1-2-1"],type:{name:"enum",summary:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'"}},gap:{control:"select",options:["sm","lg","none"],type:{name:"enum",summary:"'sm' | 'lg' | 'none'"}},autoFit:{control:"boolean",type:{name:"boolean",summary:"boolean"}},autoFill:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:U,docs:{description:{component:"12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 부모 .grid에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다."}}}},s={parameters:{controls:{disable:!1}},args:{...Y},render:X},a={name:"부모 클래스로 제어",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_cols-3"})]}),e.jsxs(d,{ratio:"2-1",children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_ratio-2-1"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_ratio-2-1"})]}),e.jsxs(d,{itemSpan:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4 (12열 기준 3개/행)"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"}),e.jsx("div",{className:"grid_demo-cell",children:"grid_item-span-4"})]})]}))},l={name:"균등 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:2,children:[e.jsx("div",{className:"grid_demo-cell",children:"cols 2"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 2"})]}),e.jsxs(d,{cols:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"}),e.jsx("div",{className:"grid_demo-cell",children:"cols 4"})]})]}))},r={name:"비율 열",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{ratio:"1-2",children:[e.jsx("div",{className:"grid_demo-cell",children:"1 : 2"}),e.jsx("div",{className:"grid_demo-cell",children:"1 : 2"})]}),e.jsxs(d,{ratio:"1-2-1",children:[e.jsx("div",{className:"grid_demo-cell",children:"1"}),e.jsx("div",{className:"grid_demo-cell",children:"2"}),e.jsx("div",{className:"grid_demo-cell",children:"1"})]})]}))},c={name:"자식 일괄 span (12열)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{itemSpan:6,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"}),e.jsx("div",{className:"grid_demo-cell",children:"span 6"})]}),e.jsxs(d,{itemSpan:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"}),e.jsx("div",{className:"grid_demo-cell",children:"span 3"})]})]}))},o={name:"자식별 span (혼합 레이아웃)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

export function ChildExample() {
  return (
    <Grid>
      <div className="grid_col-span-8">
        <div className="grid_demo-cell">span 8</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
    </Grid>
  );
}`,language:"tsx"}}},render:i(e.jsxs(d,{children:[e.jsx("div",{className:"grid_col-span-8",children:e.jsx("div",{className:"grid_demo-cell",children:"span 8"})}),e.jsx("div",{className:"grid_col-span-4",children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx("div",{className:"grid_col-span-4",children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx("div",{className:"grid_col-span-4",children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})}),e.jsx("div",{className:"grid_col-span-4",children:e.jsx("div",{className:"grid_demo-cell",children:"span 4"})})]}))},m={name:"간격",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:3,gap:"sm",children:[e.jsx("div",{className:"grid_demo-cell",children:"gap sm"}),e.jsx("div",{className:"grid_demo-cell",children:"gap sm"}),e.jsx("div",{className:"grid_demo-cell",children:"gap sm"})]}),e.jsxs(d,{cols:3,gap:"lg",children:[e.jsx("div",{className:"grid_demo-cell",children:"gap lg"}),e.jsx("div",{className:"grid_demo-cell",children:"gap lg"}),e.jsx("div",{className:"grid_demo-cell",children:"gap lg"})]})]}))},n={name:"반응형 (부모)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_cols-md-* · grid_item-span-md-* · grid_item-span-lg-*로 브레이크포인트별 배치를 부모에서 제어합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(e.Fragment,{children:[e.jsxs(d,{cols:1,colsMd:2,colsLg:3,children:[e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"}),e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"}),e.jsx("div",{className:"grid_demo-cell",children:"1 → md 2 → lg 3열"})]}),e.jsxs(d,{itemSpan:12,itemSpanMd:6,itemSpanLg:4,children:[e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"}),e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"}),e.jsx("div",{className:"grid_demo-cell",children:"span 12 → md 6 → lg 4"})]})]}))},t={name:"자동 배치",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"grid_auto-fit · grid_auto-fill은 부모에 지정합니다."},source:{code:`import Grid from '@uxkm/ui-react/components/Grid.jsx';

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
}`,language:"tsx"}}},render:i(e.jsxs(d,{autoFit:!0,children:[e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"}),e.jsx("div",{className:"grid_demo-cell",children:"auto-fit"})]}))};var g,v,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: renderGridPlayground
}`,...(p=(v=s.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var _,u,N;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(u=a.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var x,G,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(G=l.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var h,j,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var b,k,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,P,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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

export function ChildExample() {
  return (
    <Grid>
      <div className="grid_col-span-8">
        <div className="grid_demo-cell">span 8</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
    </Grid>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Grid>
      <div className="grid_col-span-8">
        <div className="grid_demo-cell">span 8</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
      <div className="grid_col-span-4">
        <div className="grid_demo-cell">span 4</div>
      </div>
    </Grid>)
}`,...(w=(P=o.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var E,R,F;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var M,L,D;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(L=n.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var A,I,q;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(q=(I=t.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ae=["Playground","Parent","Equal","Ratio","ItemSpan","Child","Gap","Responsive","Auto"];export{t as Auto,o as Child,l as Equal,m as Gap,c as ItemSpan,a as Parent,s as Playground,r as Ratio,n as Responsive,ae as __namedExportsOrder,se as default};

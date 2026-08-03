import{r as v,u as Ae,c as Me,j as e,n as De,a as Re,b as Le}from"./iframe-Ec8Bs185.js";import{w as n}from"./story-renders-Bo_F9MSp.js";import"./preload-helper-DUxc-Dqw.js";const H=new Set(["row","column"]),Te=new Set(["","sm","lg","none"]),Ee=new Set(["start","center","end","stretch","baseline"]),He=new Set(["start","center","end","between","around","evenly"]),Ge=Le("Flex",{defaults:{direction:"row",align:"stretch"},booleanProps:new Set(["wrap","equal","autoFit"])});function a({direction:l="row",directionMd:s,directionLg:x,wrap:c=!1,cols:d,colsMd:m,colsLg:p,ratio:o,itemSpan:i,itemSpanMd:f,itemSpanLg:u,gap:g="",align:_="stretch",justify:F,equal:h=!1,autoFit:T=!1,children:G,className:O,...J}){const z=v.useRef(null),E=H.has(l)?l:"row",y=H.has(s)?s:void 0,w=H.has(x)?x:void 0,N=Te.has(g)?g:"",j=Ee.has(_)?_:void 0,I=He.has(F)?F:void 0;Ae(Ge,{direction:E,directionMd:y,directionLg:w,wrap:c,cols:d,colsMd:m,colsLg:p,ratio:o,itemSpan:i,itemSpanMd:f,itemSpanLg:u,gap:N,align:j,justify:I,equal:h,autoFit:T},Me({default:G}),z,{className:O,...J});const Ve=v.useMemo(()=>{const r=["flex",`flex_${E==="column"?"col":"row"}`];return y&&r.push(`flex_${y==="column"?"col":"row"}-md`),w&&r.push(`flex_${w==="column"?"col":"row"}-lg`),c&&r.push("flex_wrap"),d&&r.push(`flex_cols-${d}`),m&&r.push(`flex_cols-md-${m}`),p&&r.push(`flex_cols-lg-${p}`),o&&r.push(`flex_ratio-${o}`),i&&r.push(`flex_items-span-${i}`),f&&r.push(`flex_items-span-md-${f}`),u&&r.push(`flex_items-span-lg-${u}`),N&&r.push(`flex_gap-${N}`),j&&r.push(`flex_align-${j}`),I&&r.push(`flex_justify-${I}`),h&&r.push("flex_equal"),T&&r.push("flex_auto-fit"),r},[E,y,w,c,d,m,p,o,i,f,u,N,j,I,h,T]);return e.jsx("div",{ref:z,className:Re(Ve,O),...De(J),children:G})}a.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{direction:{defaultValue:{value:"'row'",computed:!1},required:!1},wrap:{defaultValue:{value:"false",computed:!1},required:!1},gap:{defaultValue:{value:"''",computed:!1},required:!1},align:{defaultValue:{value:"'stretch'",computed:!1},required:!1},equal:{defaultValue:{value:"false",computed:!1},required:!1},autoFit:{defaultValue:{value:"false",computed:!1},required:!1}}};const Oe=new Set(["auto","start","center","end","stretch","baseline"]),Je=Le("FlexItem",{booleanProps:new Set(["grow","fit"])});function t({as:l="div",span:s,spanMd:x,spanLg:c,grow:d=!1,fit:m=!1,align:p,order:o,children:i,className:f,...u}){const g=v.useRef(null),_=Oe.has(p)?p:void 0,F=v.useMemo(()=>Me({default:i}),[i]);Ae(Je,{as:l==="div"?void 0:l,span:s,spanMd:x,spanLg:c,grow:d,fit:m,align:_,order:o},F,g,{className:f,...u});const h=v.useMemo(()=>[s!=null&&`flex_item-span-${s}`,x!=null&&`flex_item-span-md-${x}`,c!=null&&`flex_item-span-lg-${c}`,d&&"flex_grow",m&&"flex_fit",_&&`flex_self-${_}`,o!=null&&`flex_order-${o}`],[s,x,c,d,m,_,o]);return e.jsx(l,{ref:g,className:Re(h,f),...De(u),children:i})}t.__docgenInfo={description:"",methods:[],displayName:"FlexItem",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},grow:{defaultValue:{value:"false",computed:!1},required:!1},fit:{defaultValue:{value:"false",computed:!1},required:!1}}};const $e=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ze=[{name:"direction",type:"'row' | 'column'",default:"'row'",description:"기본 배치 방향"},{name:"directionMd",type:"'row' | 'column'",default:"—",description:"md 이상 배치 방향"},{name:"directionLg",type:"'row' | 'column'",default:"—",description:"lg 이상 배치 방향"},{name:"wrap",type:"boolean",default:"false",description:"자식 줄바꿈 (flex_wrap)"},{name:"cols",type:"number | string",default:"—",description:"균등 항목 수 (flex_cols-*)"},{name:"colsMd",type:"number | string",default:"—",description:"md 이상 균등 항목 수"},{name:"colsLg",type:"number | string",default:"—",description:"lg 이상 균등 항목 수"},{name:"ratio",type:"'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'",default:"—",description:"2~3개 자식의 grow 비율"},{name:"itemSpan",type:"number | string",default:"—",description:"모든 자식의 12단위 너비"},{name:"itemSpanMd",type:"number | string",default:"—",description:"md 이상 자식 일괄 너비"},{name:"itemSpanLg",type:"number | string",default:"—",description:"lg 이상 자식 일괄 너비"},{name:"gap",type:"'sm' | 'lg' | 'none'",default:"—",description:"항목 간격. 생략 시 --flex-gap"},{name:"align",type:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",default:"'stretch'",description:"교차축 정렬"},{name:"justify",type:"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",default:"—",description:"주축 정렬"},{name:"equal",type:"boolean",default:"false",description:"모든 자식에 동일 grow 적용"},{name:"autoFit",type:"boolean",default:"false",description:"최소 너비 기준 자동 배치"}],qe=[{key:"name",label:"Children"},{key:"description",label:"설명"}],Ue=[{name:"children",description:"Flex 자식 콘텐츠 (Vue default 슬롯 대응)"}],Be=$e,Ke=[{name:"as",type:"string",default:"'div'",description:"렌더링할 HTML 요소"},{name:"span",type:"number | string",default:"—",description:"12단위 개별 너비"},{name:"spanMd",type:"number | string",default:"—",description:"md 이상 개별 너비"},{name:"spanLg",type:"number | string",default:"—",description:"lg 이상 개별 너비"},{name:"grow",type:"boolean",default:"false",description:"남는 공간 채우기"},{name:"fit",type:"boolean",default:"false",description:"콘텐츠 너비 유지"},{name:"align",type:"'auto' | 'start' | 'center' | 'end' | 'stretch' | 'baseline'",default:"—",description:"항목의 교차축 정렬"},{name:"order",type:"1–12",default:"—",description:"시각적 배치 순서"}],Qe=qe,We=[{name:"children",description:"FlexItem 내부 콘텐츠"}],Xe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ye=[{name:"flex · flex_row · flex_col",description:"Flex 루트와 배치 방향"},{name:"flex_row-md · flex_col-md · flex_row-lg · flex_col-lg",description:"반응형 배치 방향"},{name:"flex_wrap",description:"항목 줄바꿈"},{name:"flex_cols-* · flex_cols-md-* · flex_cols-lg-*",description:"균등 항목 수"},{name:"flex_ratio-* · flex_equal · flex_auto-fit",description:"비율·균등·자동 배치"},{name:"flex_items-span-* · flex_item-span-*",description:"일괄·개별 12단위 너비"},{name:"flex_gap-sm · flex_gap-lg · flex_gap-none",description:"간격 변형"},{name:"flex_align-* · flex_justify-* · flex_self-*",description:"부모·자식 정렬"},{name:"flex_grow · flex_fit · flex_order-*",description:"grow·고정 너비·순서"}],Ze=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],es=[{name:"--flex-gap",default:"var(--space-md)",description:"기본 간격"},{name:"--flex-gap-sm · --flex-gap-lg",default:"var(--space-sm) · var(--space-lg)",description:"간격 변형"},{name:"--flex-auto-min",default:"10rem",description:"자동 배치 항목의 최소 너비"}],ss=[{title:"API · Flex Props",tables:[{columns:$e,rows:ze,codeColumn:"name"}]},{title:"API · FlexItem Props",tables:[{columns:Be,rows:Ke,codeColumn:"name"}]},{title:"API · Children",tables:[{columns:qe,rows:Ue,codeColumn:"name"},{columns:Qe,rows:We,codeColumn:"name"}]},{title:"클래스 · 속성",tables:[{columns:Xe,rows:Ye,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ze,rows:es,codeColumn:"name"}]}],as=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex_demo-cell",children:"1"}),e.jsx("div",{className:"flex_demo-cell",children:"2"}),e.jsx("div",{className:"flex_demo-cell",children:"3"})]}),ns={title:"Components/레이아웃/Flex",id:"components-flex",component:a,tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","column"]},ratio:{control:"select",options:["1-1","2-1","1-2","3-1","1-1-1","1-2-1"]},gap:{control:"select",options:["","sm","lg","none"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]}},parameters:{layout:"padded",apiSections:ss,docs:{description:{component:"CSS Flexbox 기반으로 방향·간격·정렬·반응형 항목 크기를 제어하는 레이아웃 컴포넌트입니다."}}}},S={args:{direction:"row",cols:3,gap:"sm",align:"stretch",wrap:!1,equal:!1,autoFit:!1},render:(l,s)=>e.jsx(a,{...s.args,children:as})},b={name:"기본 페이지 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"작은 화면에서는 한 열로 쌓고, md 이상에서 사이드바 3/12와 본문 9/12로 나눅니다."},source:{language:"tsx",code:`import Flex from '@uxkm/ui-react/components/Flex.jsx';
import FlexItem from '@uxkm/ui-react/components/FlexItem.jsx';

export function PageLayout() {
  return (
    <Flex wrap gap="sm">
      <FlexItem as="header" span={12}>Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3}>Sidebar</FlexItem>
      <FlexItem as="main" span={12} spanMd={9}>Main content</FlexItem>
      <FlexItem as="footer" span={12}>Footer</FlexItem>
    </Flex>
  );
}`}}},render:n(e.jsxs(a,{wrap:!0,gap:"sm",children:[e.jsx(t,{as:"header",span:12,className:"flex_demo-cell",children:"Header"}),e.jsx(t,{as:"aside",span:12,spanMd:3,className:"flex_demo-cell",children:"Sidebar"}),e.jsx(t,{as:"main",span:12,spanMd:9,className:"flex_demo-cell",children:"Main content"}),e.jsx(t,{as:"footer",span:12,className:"flex_demo-cell",children:"Footer"})]}))},k={name:"콘텐츠가 있는 페이지 레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다."}}},render:n(e.jsxs(a,{wrap:!0,gap:"sm",align:"stretch",children:[e.jsx(t,{as:"header",span:12,className:"flex_demo-cell",children:"Header"}),e.jsx(t,{as:"aside",span:12,spanMd:3,className:"flex_demo-cell",children:"Sidebar"}),e.jsxs(t,{as:"main",span:12,spanMd:9,className:"flex_demo-cell",children:[e.jsx("h3",{children:"Main content"}),e.jsx("p",{children:"페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다."}),e.jsxs(a,{cols:1,colsLg:2,gap:"sm",children:[e.jsx("article",{className:"component_stub",children:"Content section"}),e.jsx("article",{className:"component_stub",children:"Content section"})]})]}),e.jsx(t,{as:"footer",span:12,className:"flex_demo-cell",children:"Footer"})]}))},C={name:"부모 클래스로 제어",parameters:{demoPreview:{stack:!0},docs:{description:{story:"균등 항목 수·비율·자식 일괄 span을 부모 Flex에 지정합니다."}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(a,{cols:3,children:Array.from({length:3},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"flex_cols-3"},s))}),e.jsxs(a,{ratio:"2-1",children:[e.jsx("div",{className:"flex_demo-cell",children:"flex_ratio-2-1"}),e.jsx("div",{className:"flex_demo-cell",children:"flex_ratio-2-1"})]}),e.jsx(a,{itemSpan:4,children:Array.from({length:6},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"flex_items-span-4"},s))})]}))},P={name:"12열 전체 활용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"itemSpan={1}로 12개 항목이 한 행을 채웁니다."}}},render:n(e.jsx(a,{itemSpan:1,gap:"sm",children:Array.from({length:12},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:s+1},s))}))},A={name:"균등 항목",parameters:{demoPreview:{stack:!0}},render:n(e.jsxs(e.Fragment,{children:[e.jsxs(a,{cols:2,children:[e.jsx("div",{className:"flex_demo-cell",children:"cols 2"}),e.jsx("div",{className:"flex_demo-cell",children:"cols 2"})]}),e.jsx(a,{cols:4,children:Array.from({length:4},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"cols 4"},s))})]}))},M={name:"비율 항목",parameters:{demoPreview:{stack:!0}},render:n(e.jsxs(e.Fragment,{children:[e.jsxs(a,{ratio:"1-2",children:[e.jsx("div",{className:"flex_demo-cell",children:"1"}),e.jsx("div",{className:"flex_demo-cell",children:"2"})]}),e.jsxs(a,{ratio:"1-2-1",children:[e.jsx("div",{className:"flex_demo-cell",children:"1"}),e.jsx("div",{className:"flex_demo-cell",children:"2"}),e.jsx("div",{className:"flex_demo-cell",children:"1"})]})]}))},D={name:"자식 일괄 span (12단위)",parameters:{demoPreview:{stack:!0}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(a,{itemSpan:6,children:Array.from({length:4},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"span 6"},s))}),e.jsx(a,{itemSpan:3,children:Array.from({length:4},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"span 3"},s))})]}))},R={name:"자식별 span (혼합 레이아웃)",parameters:{demoPreview:{stack:!0}},render:n(e.jsxs(a,{wrap:!0,children:[e.jsx(t,{span:8,className:"flex_demo-cell",children:"span 8"}),e.jsx(t,{span:4,className:"flex_demo-cell",children:"span 4"}),Array.from({length:3},(l,s)=>e.jsx(t,{span:4,className:"flex_demo-cell",children:"span 4"},s))]}))},L={name:"간격",parameters:{demoPreview:{stack:!0}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(a,{cols:3,gap:"sm",children:Array.from({length:3},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"gap sm"},s))}),e.jsx(a,{cols:3,gap:"lg",children:Array.from({length:3},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"gap lg"},s))})]}))},$={name:"반응형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"Flex와 FlexItem의 md·lg prop으로 반응형 배치를 제어합니다."}}},render:n(e.jsxs(e.Fragment,{children:[e.jsxs(a,{cols:1,colsMd:2,colsLg:3,gap:"sm",children:[e.jsx("article",{className:"flex_demo-cell",children:"1 → md 2 → lg 3개"}),e.jsx("article",{className:"flex_demo-cell",children:"1 → md 2 → lg 3개"}),e.jsx("article",{className:"flex_demo-cell",children:"1 → md 2 → lg 3개"})]}),e.jsx(a,{itemSpan:12,itemSpanMd:6,itemSpanLg:4,children:Array.from({length:3},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"span 12 → md 6 → lg 4"},s))}),e.jsxs(a,{wrap:!0,children:[e.jsx(t,{span:12,spanMd:8,spanLg:9,className:"flex_demo-cell",children:"개별 span 12 → md 8 → lg 9"}),e.jsx(t,{span:12,spanMd:4,spanLg:3,className:"flex_demo-cell",children:"개별 span 12 → md 4 → lg 3"})]})]}))},q={name:"자동 배치",parameters:{demoPreview:{stack:!0},docs:{description:{story:"autoFit은 --flex-auto-min을 기준으로 줄바꿈하고 남는 공간을 채웁니다."}}},render:n(e.jsx(a,{autoFit:!0,children:Array.from({length:6},(l,s)=>e.jsx("div",{className:"flex_demo-cell",children:"auto-fit"},s))}))},V={name:"정렬과 비율",parameters:{demoPreview:{stack:!0}},render:n(e.jsxs(e.Fragment,{children:[e.jsxs(a,{justify:"between",gap:"sm",children:[e.jsx("div",{className:"flex_demo-cell",children:"Start"}),e.jsx("div",{className:"flex_demo-cell",children:"End"})]}),e.jsxs(a,{ratio:"2-1",gap:"sm",children:[e.jsx("div",{className:"flex_demo-cell",children:"2"}),e.jsx("div",{className:"flex_demo-cell",children:"1"})]})]}))};var U,B,K;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    cols: 3,
    gap: 'sm',
    align: 'stretch',
    wrap: false,
    equal: false,
    autoFit: false
  },
  render: (_args, context) => <Flex {...context.args}>{cells}</Flex>
}`,...(K=(B=S.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var Q,W,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '기본 페이지 레이아웃',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '작은 화면에서는 한 열로 쌓고, md 이상에서 사이드바 3/12와 본문 9/12로 나눅니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Flex from '@uxkm/ui-react/components/Flex.jsx';
import FlexItem from '@uxkm/ui-react/components/FlexItem.jsx';

export function PageLayout() {
  return (
    <Flex wrap gap="sm">
      <FlexItem as="header" span={12}>Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3}>Sidebar</FlexItem>
      <FlexItem as="main" span={12} spanMd={9}>Main content</FlexItem>
      <FlexItem as="footer" span={12}>Footer</FlexItem>
    </Flex>
  );
}\`
      }
    }
  },
  render: withDocsCanvasRender(<Flex wrap gap="sm">
      <FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">Main content</FlexItem>
      <FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem>
    </Flex>)
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '콘텐츠가 있는 페이지 레이아웃',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다.'
      }
    }
  },
  render: withDocsCanvasRender(<Flex wrap gap="sm" align="stretch">
      <FlexItem as="header" span={12} className="flex_demo-cell">Header</FlexItem>
      <FlexItem as="aside" span={12} spanMd={3} className="flex_demo-cell">Sidebar</FlexItem>
      <FlexItem as="main" span={12} spanMd={9} className="flex_demo-cell">
        <h3>Main content</h3>
        <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
        <Flex cols={1} colsLg={2} gap="sm">
          <article className="component_stub">Content section</article>
          <article className="component_stub">Content section</article>
        </Flex>
      </FlexItem>
      <FlexItem as="footer" span={12} className="flex_demo-cell">Footer</FlexItem>
    </Flex>)
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,ae,le;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '부모 클래스로 제어',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '균등 항목 수·비율·자식 일괄 span을 부모 Flex에 지정합니다.'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Flex cols={3}>
        {Array.from({
        length: 3
      }, (_, index) => <div className="flex_demo-cell" key={index}>flex_cols-3</div>)}
      </Flex>
      <Flex ratio="2-1">
        <div className="flex_demo-cell">flex_ratio-2-1</div><div className="flex_demo-cell">flex_ratio-2-1</div>
      </Flex>
      <Flex itemSpan={4}>
        {Array.from({
        length: 6
      }, (_, index) => <div className="flex_demo-cell" key={index}>flex_items-span-4</div>)}
      </Flex>
    </>)
}`,...(le=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var re,te,ne;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '12열 전체 활용',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'itemSpan={1}로 12개 항목이 한 행을 채웁니다.'
      }
    }
  },
  render: withDocsCanvasRender(<Flex itemSpan={1} gap="sm">
      {Array.from({
      length: 12
    }, (_, index) => <div className="flex_demo-cell" key={index}>{index + 1}</div>)}
    </Flex>)
}`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ce,de;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '균등 항목',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(<>
      <Flex cols={2}><div className="flex_demo-cell">cols 2</div><div className="flex_demo-cell">cols 2</div></Flex>
      <Flex cols={4}>{Array.from({
        length: 4
      }, (_, index) => <div className="flex_demo-cell" key={index}>cols 4</div>)}</Flex>
    </>)
}`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ie,xe;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: '비율 항목',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(<>
      <Flex ratio="1-2"><div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div></Flex>
      <Flex ratio="1-2-1"><div className="flex_demo-cell">1</div><div className="flex_demo-cell">2</div><div className="flex_demo-cell">1</div></Flex>
    </>)
}`,...(xe=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:xe.source}}};var pe,fe,ue;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '자식 일괄 span (12단위)',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(<>
      <Flex itemSpan={6}>{Array.from({
        length: 4
      }, (_, index) => <div className="flex_demo-cell" key={index}>span 6</div>)}</Flex>
      <Flex itemSpan={3}>{Array.from({
        length: 4
      }, (_, index) => <div className="flex_demo-cell" key={index}>span 3</div>)}</Flex>
    </>)
}`,...(ue=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ue.source}}};var _e,ge,he;R.parameters={...R.parameters,docs:{...(_e=R.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: '자식별 span (혼합 레이아웃)',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(<Flex wrap>
      <FlexItem span={8} className="flex_demo-cell">span 8</FlexItem>
      <FlexItem span={4} className="flex_demo-cell">span 4</FlexItem>
      {Array.from({
      length: 3
    }, (_, index) => <FlexItem span={4} className="flex_demo-cell" key={index}>span 4</FlexItem>)}
    </Flex>)
}`,...(he=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,Fe,ye;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: '간격',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(<>
      <Flex cols={3} gap="sm">{Array.from({
        length: 3
      }, (_, index) => <div className="flex_demo-cell" key={index}>gap sm</div>)}</Flex>
      <Flex cols={3} gap="lg">{Array.from({
        length: 3
      }, (_, index) => <div className="flex_demo-cell" key={index}>gap lg</div>)}</Flex>
    </>)
}`,...(ye=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:ye.source}}};var we,Ne,je;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: '반응형',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'Flex와 FlexItem의 md·lg prop으로 반응형 배치를 제어합니다.'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Flex cols={1} colsMd={2} colsLg={3} gap="sm">
        <article className="flex_demo-cell">1 → md 2 → lg 3개</article>
        <article className="flex_demo-cell">1 → md 2 → lg 3개</article>
        <article className="flex_demo-cell">1 → md 2 → lg 3개</article>
      </Flex>
      <Flex itemSpan={12} itemSpanMd={6} itemSpanLg={4}>
        {Array.from({
        length: 3
      }, (_, index) => <div className="flex_demo-cell" key={index}>span 12 → md 6 → lg 4</div>)}
      </Flex>
      <Flex wrap>
        <FlexItem span={12} spanMd={8} spanLg={9} className="flex_demo-cell">개별 span 12 → md 8 → lg 9</FlexItem>
        <FlexItem span={12} spanMd={4} spanLg={3} className="flex_demo-cell">개별 span 12 → md 4 → lg 3</FlexItem>
      </Flex>
    </>)
}`,...(je=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Ie,Se,be;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: '자동 배치',
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'autoFit은 --flex-auto-min을 기준으로 줄바꿈하고 남는 공간을 채웁니다.'
      }
    }
  },
  render: withDocsCanvasRender(<Flex autoFit>
      {Array.from({
      length: 6
    }, (_, index) => <div className="flex_demo-cell" key={index}>auto-fit</div>)}
    </Flex>)
}`,...(be=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var ke,Ce,Pe;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: '정렬과 비율',
  parameters: {
    demoPreview: {
      stack: true
    }
  },
  render: withDocsCanvasRender(<>
      <Flex justify="between" gap="sm">
        <div className="flex_demo-cell">Start</div><div className="flex_demo-cell">End</div>
      </Flex>
      <Flex ratio="2-1" gap="sm">
        <div className="flex_demo-cell">2</div><div className="flex_demo-cell">1</div>
      </Flex>
    </>)
}`,...(Pe=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};const os=["Playground","PageLayout","ContentLayout","Parent","TwelveColumns","Equal","Ratio","ItemSpan","ChildSpan","Gap","Responsive","Auto","AlignmentAndRatio"];export{V as AlignmentAndRatio,q as Auto,R as ChildSpan,k as ContentLayout,A as Equal,L as Gap,D as ItemSpan,b as PageLayout,C as Parent,S as Playground,M as Ratio,$ as Responsive,P as TwelveColumns,os as __namedExportsOrder,ns as default};

import{r as d,u as O,c as q,n as L,j as e,a as M,b as W,t as Z,I as b,B as $}from"./iframe-ifEc15ad.js";import{w as h}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const G=new Set(["","sm","md","lg","xl"]),J=W("Container",{booleanProps:new Set(["fluid"])});function r({fluid:n=!1,size:a="",children:t,className:o,...u}){const s=d.useRef(null),l=G.has(a)?a:"";O(J,{fluid:n,size:l},q({default:t}),s,{className:o,...u});const f=d.useMemo(()=>{const i=["container"];return n&&i.push("container_fluid"),l&&i.push(`container_${l}`),i},[n,l]),p=L(u);return e.jsx("div",{ref:s,className:M(f,o),...p,children:t})}r.__docgenInfo={description:"",methods:[],displayName:"Container",props:{fluid:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"''",computed:!1},required:!1}}};const y=new Set;let m=!1,c=null;function N(){y.forEach(n=>n(m))}function K(n){return y.add(n),n(m),()=>y.delete(n)}function Q(){m=!0,N(),c&&clearTimeout(c),c=setTimeout(()=>{m=!1,N()},5e3)}function X(){m=!1,N(),c&&clearTimeout(c),c=null}function Y(){const[n,a]=d.useState(!1);return d.useEffect(()=>K(a),[]),n?Z.createPortal(e.jsx("div",{className:"sb-snackbar-hint",role:"status","aria-live":"polite",children:e.jsxs("div",{className:"alert color_warning",role:"alert",children:[e.jsx("div",{children:e.jsx(b,{name:"alert-triangle",className:"alert_icon"})}),e.jsxs("div",{className:"alert_body",children:[e.jsx("div",{className:"alert_title",children:"fluid는 size가 선택된 경우에만 적용됩니다"}),e.jsx("p",{className:"alert_desc",children:"sm · md · lg · xl 중 하나를 선택한 뒤 fluid를 활성화하세요."})]}),e.jsx($,{variant:"ghost",iconOnly:!0,className:"alert_close",ariaLabel:"알림 닫기",onClick:X,iconBefore:e.jsx(b,{name:"close",size:"sm"})})]})}),document.body):null}function H({fluid:n=!1,size:a="",label:t="container",onFluidUpdate:o}){const u=!!a,s=d.useRef({fluid:n,size:a}),l={fluid:u&&n,size:a||void 0};function f(){Q(),n&&(o==null||o(!1))}return d.useEffect(()=>{const p=s.current,i={fluid:n,size:a};if(i.fluid&&!i.size){f(),s.current=i;return}!i.size&&p.size&&p.fluid&&f(),s.current=i},[n,a]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(r,{...l,children:e.jsx("div",{className:"container_demo-fill",children:t})})]})}H.__docgenInfo={description:"",methods:[],displayName:"ContainerPlayground",props:{fluid:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"''",computed:!1},required:!1},label:{defaultValue:{value:"'container'",computed:!1},required:!1}}};function U(n="container"){return(a,t)=>e.jsx(H,{...t.args,label:n,onFluidUpdate:o=>t.updateArgs({fluid:o})})}const ee=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ne=[{name:"fluid",type:"boolean",default:"false",description:"최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid). size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다."},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"—",description:"고정 최대 너비 변형 (container_sm · container_md · container_lg · container_xl)"}],ae=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],re=[{name:"container",description:"중앙 정렬·기본 max-width·좌우 패딩"},{name:"container_fluid",description:"max-width 제한 해제"},{name:"container_sm · container_md · container_lg · container_xl",description:"고정 최대 너비 변형"}],ie=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],oe=[{name:"--container-max-width",default:"72rem",description:"기본 최대 너비"},{name:"--container-max-width-sm",default:"36rem",description:"container_sm"},{name:"--container-max-width-md",default:"48rem",description:"container_md"},{name:"--container-max-width-lg",default:"64rem",description:"container_lg"},{name:"--container-max-width-xl",default:"80rem",description:"container_xl"},{name:"--container-padding-x",default:"var(--space-xl)",description:"좌우 패딩"}],te=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],se=[{name:"children",description:"컨테이너 내부 콘텐츠 (Vue default 슬롯 대응)"}],le=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:ee,rows:ne,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:te,rows:se,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ae,rows:re,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ie,rows:oe,codeColumn:"name"}]}],ce={control:{type:"select"},options:["","sm","md","lg","xl"],labels:{"":"기본",sm:"sm",md:"md",lg:"lg",xl:"xl"},description:"고정 최대 너비 변형. 기본값은 container 기본 max-width(72rem)입니다.",type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},de={control:"boolean",if:{arg:"size",truthy:!0},description:"선택한 size의 max-width 제한을 해제합니다. size(sm · md · lg · xl)가 선택된 경우에만 적용됩니다.",type:{name:"boolean",summary:"boolean"}},me={fluid:!1,size:"lg"},xe={title:"Components/레이아웃/Container",id:"components-container",component:r,tags:["autodocs"],argTypes:{fluid:de,size:ce},parameters:{controls:{disable:!1},layout:"padded",apiSections:le,docs:{description:{component:"콘텐츠의 최대 너비와 좌우 여백을 일관되게 제한하는 레이아웃 컨테이너입니다."}}}},x={parameters:{controls:{disable:!1}},args:{...me},render:U("container")},C={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다."},source:{code:`import Container from '@uxkm/ui-react/components/Container.jsx';

export function BasicExample() {
  return (
    <Container>
      <div className="container_demo-fill">container — 기본 최대 너비</div>
    </Container>
  );
}`,language:"tsx"}}},render:h(e.jsx(r,{children:e.jsx("div",{className:"container_demo-fill",children:"container — 기본 최대 너비"})}))},_={name:"Fluid",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다."},source:{code:`import Container from '@uxkm/ui-react/components/Container.jsx';

export function FluidExample() {
  return (
    <Container fluid>
      <div className="container_demo-fill">container container_fluid — 전체 너비</div>
    </Container>
  );
}`,language:"tsx"}}},render:h(e.jsx(r,{fluid:!0,children:e.jsx("div",{className:"container_demo-fill",children:"container container_fluid — 전체 너비"})}))},v={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다."},source:{code:`import Container from '@uxkm/ui-react/components/Container.jsx';

export function SizeExample() {
  return (
    <>
      <Container size="sm">
        <div className="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div className="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div className="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div className="container_demo-fill">container_xl (80rem)</div>
      </Container>
    </>
  );
}`,language:"tsx"}}},render:h(e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:e.jsx("div",{className:"container_demo-fill",children:"container_sm (36rem)"})}),e.jsx(r,{size:"md",children:e.jsx("div",{className:"container_demo-fill",children:"container_md (48rem)"})}),e.jsx(r,{size:"lg",children:e.jsx("div",{className:"container_demo-fill",children:"container_lg (64rem)"})}),e.jsx(r,{size:"xl",children:e.jsx("div",{className:"container_demo-fill",children:"container_xl (80rem)"})})]}))},g={name:"중첩 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다."},source:{code:`import Container from '@uxkm/ui-react/components/Container.jsx';

export function NestedExample() {
  return (
    <Container fluid>
      <div className="container_demo-fill" style={{ marginBottom: 'var(--space-md)' }}>
        바깥 — fluid
      </div>
      <Container size="md">
        <div className="container_demo-fill">안쪽 — md</div>
      </Container>
    </Container>
  );
}`,language:"tsx"}}},render:h(e.jsxs(r,{fluid:!0,children:[e.jsx("div",{className:"container_demo-fill",style:{marginBottom:"var(--space-md)"},children:"바깥 — fluid"}),e.jsx(r,{size:"md",children:e.jsx("div",{className:"container_demo-fill",children:"안쪽 — md"})})]}))};var j,z,w;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: renderContainerPlayground('container')
}`,...(w=(z=x.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var k,P,S;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다.'
      },
      source: {
        code: \`import Container from '@uxkm/ui-react/components/Container.jsx';

export function BasicExample() {
  return (
    <Container>
      <div className="container_demo-fill">container — 기본 최대 너비</div>
    </Container>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Container>
      <div className="container_demo-fill">container — 기본 최대 너비</div>
    </Container>)
}`,...(S=(P=C.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var E,R,B;_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Fluid',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다.'
      },
      source: {
        code: \`import Container from '@uxkm/ui-react/components/Container.jsx';

export function FluidExample() {
  return (
    <Container fluid>
      <div className="container_demo-fill">container container_fluid — 전체 너비</div>
    </Container>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Container fluid>
      <div className="container_demo-fill">container container_fluid — 전체 너비</div>
    </Container>)
}`,...(B=(R=_.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var F,D,T;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다.'
      },
      source: {
        code: \`import Container from '@uxkm/ui-react/components/Container.jsx';

export function SizeExample() {
  return (
    <>
      <Container size="sm">
        <div className="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div className="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div className="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div className="container_demo-fill">container_xl (80rem)</div>
      </Container>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Container size="sm">
        <div className="container_demo-fill">container_sm (36rem)</div>
      </Container>
      <Container size="md">
        <div className="container_demo-fill">container_md (48rem)</div>
      </Container>
      <Container size="lg">
        <div className="container_demo-fill">container_lg (64rem)</div>
      </Container>
      <Container size="xl">
        <div className="container_demo-fill">container_xl (80rem)</div>
      </Container>
    </>)
}`,...(T=(D=v.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var A,I,V;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '중첩 사용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다.'
      },
      source: {
        code: \`import Container from '@uxkm/ui-react/components/Container.jsx';

export function NestedExample() {
  return (
    <Container fluid>
      <div className="container_demo-fill" style={{ marginBottom: 'var(--space-md)' }}>
        바깥 — fluid
      </div>
      <Container size="md">
        <div className="container_demo-fill">안쪽 — md</div>
      </Container>
    </Container>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Container fluid>
      <div className="container_demo-fill" style={{
      marginBottom: 'var(--space-md)'
    }}>
        바깥 — fluid
      </div>
      <Container size="md">
        <div className="container_demo-fill">안쪽 — md</div>
      </Container>
    </Container>)
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const Ce=["Playground","Basic","Fluid","Size","Nested"];export{C as Basic,_ as Fluid,g as Nested,x as Playground,v as Size,Ce as __namedExportsOrder,xe as default};

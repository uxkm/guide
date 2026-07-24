import{r as h,u as z,c as G,n as J,j as e,a as n,b as K}from"./iframe-ifEc15ad.js";import{w as p}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const Q=K("Skeleton",{defaults:{active:!0},booleanProps:new Set(["active","avatar","round"]),selfClosing:!1}),S=["","skeleton_w-md","skeleton_w-sm"];function U(a){return a===!0?3:typeof a=="number"?a:0}function s({active:a=!0,avatar:u,paragraph:x=!1,round:f,ariaLabel:v="콘텐츠 로딩 중",children:g,className:_,style:b,...y}){const w=h.useRef(null),k=U(x);z(Q,{active:a,avatar:u,paragraph:x,round:f,ariaLabel:v},G({default:g}),w,{className:_,style:b,...y});const O=h.useMemo(()=>{const t=["skeleton_group"];return a||t.push("skeleton_static"),t},[a]),o=h.useMemo(()=>{const t=["skeleton"];return a||t.push("skeleton_static"),t},[a]),{class:re,...q}=y,H=J(q),M=!!(u||f);return e.jsxs("div",{ref:w,className:n(O,_),style:b,role:"status","aria-live":"polite","aria-busy":"true","aria-label":v,...H,children:[M?u?e.jsxs("div",{className:"skeleton_row",children:[e.jsx("span",{className:n(o,"skeleton_circle"),"aria-hidden":"true"}),k>0?e.jsx("div",{className:"skeleton_row-body",children:Array.from({length:k},(t,r)=>e.jsx("span",{className:n(o,"skeleton_text",S[r]||"skeleton_w-lg"),"aria-hidden":"true"},r))}):null]}):e.jsx("span",{className:n(o,"skeleton_circle"),"aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:n(o,"skeleton_title"),"aria-hidden":"true"}),Array.from({length:k||3},(t,r)=>e.jsx("span",{className:n(o,"skeleton_text",S[r]||""),"aria-hidden":"true"},r))]}),g]})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{active:{defaultValue:{value:"true",computed:!1},required:!1},paragraph:{defaultValue:{value:"false",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'콘텐츠 로딩 중'",computed:!1},required:!1}}};const X=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Y=[{name:"active",type:"boolean",default:"true",description:"쉬머 애니메이션. false면 skeleton_static"},{name:"avatar",type:"boolean",default:"false",description:"아바타 + 본문 행 레이아웃"},{name:"paragraph",type:"boolean | number",default:"false",description:"본문 줄 수. true면 3줄"},{name:"round",type:"boolean",default:"false",description:"원형만 표시"},{name:"aria-label",type:"string",default:"콘텐츠 로딩 중",description:"role=status 라벨"}],Z=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],$=[{name:"skeleton · skeleton_text · skeleton_title · skeleton_circle",description:"막대·제목·원형"},{name:"skeleton_button · skeleton_image · skeleton_block",description:"버튼·이미지·블록 형태"},{name:"skeleton_w-sm · skeleton_w-md · skeleton_w-lg",description:"줄 너비"},{name:"skeleton_group · skeleton_row · skeleton_row-body",description:"레이아웃"},{name:"skeleton_static · skeleton_sm · skeleton_lg",description:"애니메이션·크기"}],ee=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ae=[{name:"--skeleton-bg · --skeleton-shine",default:"—",description:"배경·쉬머"},{name:"--skeleton-text-height · --skeleton-title-height",default:"0.875rem · 1.125rem",description:"줄 높이"},{name:"--skeleton-avatar-size · --skeleton-gap · --skeleton-duration",default:"—",description:"아바타·간격·주기"}],se=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],te=[{name:"children",description:"커스텀 스켈레톤 조각 (Vue default 슬롯)"}],ne=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다. paragraph는 boolean 또는 number입니다.",tables:[{columns:X,rows:Y,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue 슬롯에 대응하는 React children입니다.",tables:[{columns:se,rows:te,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Z,rows:$,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ee,rows:ae,codeColumn:"name"}]}],oe={active:!0,avatar:!1,paragraph:!1,round:!1,ariaLabel:"콘텐츠 로딩 중"},ce={title:"Components/피드백/Skeleton",id:"components-skeleton",component:s,tags:["autodocs"],argTypes:{active:{control:"boolean",type:{name:"boolean",summary:"boolean"}},avatar:{control:"boolean",type:{name:"boolean",summary:"boolean"}},paragraph:{control:"number",type:{name:"union",summary:"boolean | number"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ne,docs:{description:{component:"콘텐츠 로딩 중 플레이스홀더를 표시하는 Skeleton 컴포넌트입니다."}}}},l={parameters:{controls:{disable:!1}},args:{...oe},render:a=>e.jsx(s,{...a})},i={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`skeleton`에 `skeleton_text` · `skeleton_title` 형태 클래스를 조합합니다."},source:{code:`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function BasicExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton paragraph={3} />
    </div>
  );
}`,language:"tsx"}}},render:p(e.jsx("div",{style:{maxWidth:"var(--input-max-width)",width:"100%"},children:e.jsx(s,{paragraph:3})}))},d={name:"형태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다."},source:{code:`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function ShapeExample() {
  return (
    <>
      <Skeleton avatar paragraph={0} />
      <Skeleton round style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}`,language:"tsx"}}},render:p(e.jsxs(e.Fragment,{children:[e.jsx(s,{avatar:!0,paragraph:0}),e.jsx(s,{round:!0,style:{marginTop:"var(--space-md)"}})]}))},c={name:"카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다."},source:{code:`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function CardExample() {
  return (
    <div
      className="card card_shadow"
      style={{ maxWidth: 360, width: '100%' }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span className="skeleton skeleton_button" aria-hidden="true" style={{ width: '4rem' }} />
          </div>
        </Skeleton>
      </div>
    </div>
  );
}`,language:"tsx"}}},render:p(e.jsx("div",{className:"card card_shadow",style:{maxWidth:360,width:"100%"},role:"status","aria-live":"polite","aria-busy":"true","aria-label":"카드 콘텐츠 로딩 중",children:e.jsx("div",{className:"card_body",children:e.jsxs(s,{paragraph:0,ariaLabel:"카드 콘텐츠 로딩 중",children:[e.jsx("span",{className:"skeleton skeleton_image","aria-hidden":"true"}),e.jsx("span",{className:"skeleton skeleton_title skeleton_w-md","aria-hidden":"true"}),e.jsx("span",{className:"skeleton skeleton_text","aria-hidden":"true"}),e.jsx("span",{className:"skeleton skeleton_text skeleton_w-lg","aria-hidden":"true"}),e.jsxs("div",{className:"skeleton_row",style:{marginTop:"var(--space-xs)"},children:[e.jsx("span",{className:"skeleton skeleton_button","aria-hidden":"true"}),e.jsx("span",{className:"skeleton skeleton_button","aria-hidden":"true",style:{width:"4rem"}})]})]})})}))},m={name:"정적",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`skeleton_static`을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. `prefers-reduced-motion` 환경에서도 애니메이션이 비활성화됩니다."},source:{code:`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function StaticExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton active={false} paragraph={3} />
    </div>
  );
}`,language:"tsx"}}},render:p(e.jsx("div",{style:{maxWidth:"var(--input-max-width)",width:"100%"},children:e.jsx(s,{active:!1,paragraph:3})}))};var N,j,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Skeleton {...args} />
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var P,R,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`skeleton\`에 \`skeleton_text\` · \`skeleton_title\` 형태 클래스를 조합합니다.'
      },
      source: {
        code: \`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function BasicExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton paragraph={3} />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div style={{
    maxWidth: 'var(--input-max-width)',
    width: '100%'
  }}>
      <Skeleton paragraph={3} />
    </div>)
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,D,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '형태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '아바타·이미지·버튼·블록 등 콘텐츠 유형에 맞는 형태 클래스를 사용합니다.'
      },
      source: {
        code: \`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function ShapeExample() {
  return (
    <>
      <Skeleton avatar paragraph={0} />
      <Skeleton round style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Skeleton avatar paragraph={0} />
      <Skeleton round style={{
      marginTop: 'var(--space-md)'
    }} />
    </>)
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var A,L,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '카드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '카드·대시보드 위젯 로딩 시 실제 콘텐츠 구조와 유사하게 배치합니다.'
      },
      source: {
        code: \`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function CardExample() {
  return (
    <div
      className="card card_shadow"
      style={{ maxWidth: 360, width: '100%' }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="카드 콘텐츠 로딩 중"
    >
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span className="skeleton skeleton_button" aria-hidden="true" style={{ width: '4rem' }} />
          </div>
        </Skeleton>
      </div>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="card card_shadow" style={{
    maxWidth: 360,
    width: '100%'
  }} role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row" style={{
          marginTop: 'var(--space-xs)'
        }}>
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span className="skeleton skeleton_button" aria-hidden="true" style={{
            width: '4rem'
          }} />
          </div>
        </Skeleton>
      </div>
    </div>)
}`,...(B=(L=c.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var V,F,I;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '정적',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`skeleton_static\`을 지정하면 쉬머 애니메이션 없이 고정 플레이스홀더만 표시합니다. \`prefers-reduced-motion\` 환경에서도 애니메이션이 비활성화됩니다.'
      },
      source: {
        code: \`import Skeleton from '@uxkm/ui-react/components/Skeleton.jsx';

export function StaticExample() {
  return (
    <div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <Skeleton active={false} paragraph={3} />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div style={{
    maxWidth: 'var(--input-max-width)',
    width: '100%'
  }}>
      <Skeleton active={false} paragraph={3} />
    </div>)
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const me=["Playground","Basic","Shape","CardDemo","Static"];export{i as Basic,c as CardDemo,l as Playground,d as Shape,m as Static,me as __namedExportsOrder,ce as default};

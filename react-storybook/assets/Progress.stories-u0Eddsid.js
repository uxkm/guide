import{r as x,u as de,c as ge,n as ue,j as e,a as fe,b as be}from"./iframe-ifEc15ad.js";import{w as n}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const he=new Set(["","success","exception"]),we=new Set(["sm","md","lg"]),Ce=new Set(["primary","success","warning","danger"]),ke=be("Progress",{defaults:{percent:0,size:"md",color:"primary"},booleanProps:new Set(["showInfo","striped","animated","indeterminate","inside","block"]),selfClosing:!1});function r({percent:s=0,status:g="",size:u="md",showInfo:i,label:c,color:f="primary",striped:l,animated:p,indeterminate:o,inside:t,block:b,ariaLabel:R="진행률",className:P,...y}){const m=x.useRef(null),_=he.has(g)?g:"",h=we.has(u)?u:"md",w=Ce.has(f)?f:"primary";de(ke,{percent:s,status:_||void 0,size:h,showInfo:i,label:c,color:w,striped:l,animated:p,indeterminate:o,inside:t,block:b,ariaLabel:R},ge({}),m,{className:P,...y});const V=x.useMemo(()=>_==="success"?"color_success":_==="exception"||w==="danger"?"color_danger":`color_${w}`,[_,w]),Pe=x.useMemo(()=>{const a=["progress",V];return b?a.push("progress_block"):a.push("progress_fit"),h==="sm"&&a.push("progress_sm"),h==="lg"&&a.push("progress_lg"),l&&a.push("progress_striped"),p&&a.push("progress_animated"),o&&a.push("is-indeterminate"),t&&a.push("progress_inside"),a},[V,b,h,l,p,o,t]),F=`${s}%`,{class:Ae,...ye}=y,_e=ue(ye);return e.jsxs("div",{ref:m,className:fe(Pe,P),..._e,children:[i||c?e.jsxs("div",{className:"progress_header",children:[c?e.jsx("span",{className:"progress_label",children:c}):null,i?e.jsx("span",{className:"progress_value",children:F}):null]}):null,e.jsx("div",{className:"progress_track",role:"progressbar","aria-valuenow":o?void 0:s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":R,"aria-busy":o?"true":void 0,children:e.jsx("span",{className:"progress_bar",style:{width:`${s}%`},children:t?F:""})})]})}r.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{percent:{defaultValue:{value:"0",computed:!1},required:!1},status:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'진행률'",computed:!1},required:!1}}};const ve=new Set(["sm","md","lg"]),je=new Set(["primary","success","warning","danger"]),Le=be("ProgressCircle",{defaults:{percent:0,color:"primary",size:"md"}});function d({percent:s=0,color:g="primary",size:u="md",ariaLabel:i="진행률",className:c,style:f,...l}){const p=x.useRef(null),o=ve.has(u)?u:"md",t=je.has(g)?g:"primary";de(Le,{percent:s,color:t,size:o,ariaLabel:i},ge({}),p,{className:c,style:f,...l});const b=x.useMemo(()=>{const m=["progress","progress_circle",`color_${t}`];return o==="sm"&&m.push("progress_sm"),o==="lg"&&m.push("progress_lg"),m},[t,o]),{class:R,...P}=l,y=ue(P);return e.jsxs("div",{ref:p,className:fe(b,c),role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":i,style:{"--progress-percent":s,...f},...y,children:[e.jsxs("svg",{className:"progress_circle-svg",viewBox:"0 0 100 100","aria-hidden":"true",children:[e.jsx("circle",{className:"progress_circle-track",cx:"50",cy:"50",r:"45"}),e.jsx("circle",{className:"progress_circle-bar",cx:"50",cy:"50",r:"45"})]}),e.jsxs("span",{className:"progress_circle-value",children:[s,"%"]})]})}d.__docgenInfo={description:"",methods:[],displayName:"ProgressCircle",props:{percent:{defaultValue:{value:"0",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'진행률'",computed:!1},required:!1}}};const xe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Se=[{name:"percent",type:"number",default:"0",description:"0–100 진행률 (막대 width)"},{name:"status",type:"'success' | 'exception'",default:"—",description:"완료·오류 색상"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"막대 색상 color_*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"progress_sm · progress_lg"},{name:"label",type:"string",default:"—",description:"헤더 라벨"},{name:"show-info",type:"boolean",default:"false",description:"퍼센트 값 표시"},{name:"striped",type:"boolean",default:"false",description:"줄무늬 (progress_striped)"},{name:"animated",type:"boolean",default:"false",description:"흐르는 애니메이션"},{name:"indeterminate",type:"boolean",default:"false",description:"불확정 (is-indeterminate)"},{name:"inside",type:"boolean",default:"false",description:"막대 안 퍼센트 텍스트"},{name:"block",type:"boolean",default:"false",description:"전체 너비 (progress_block)"},{name:"aria-label",type:"string",default:"진행률",description:"progressbar 라벨"}],Ie=xe,ze=[{name:"percent",type:"number",default:"0",description:"0–100 (--progress-percent)"},{name:"color",type:"'primary' | 'success' | 'warning' | 'danger'",default:"primary",description:"color_*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"progress_sm · progress_lg"},{name:"aria-label",type:"string",default:"진행률",description:"progressbar 라벨"}],De=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ee=[{name:"progress · progress_track · progress_bar",description:"선형 진행률"},{name:"progress_circle · progress_circle-svg · progress_circle-value",description:"원형 진행률"},{name:"progress_header · progress_label · progress_value",description:"헤더"},{name:"progress_sm · progress_lg · progress_fit · progress_block",description:"크기·너비"},{name:"progress_striped · progress_animated · progress_inside",description:"스타일"},{name:"is-indeterminate",description:"불확정 상태"},{name:"color_primary · color_success · color_warning · color_danger",description:"색상"}],Re=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ve=[{name:"--progress-height · --progress-height-sm · --progress-height-lg",default:"8px · 4px · 12px",description:"선형 트랙 높이"},{name:"--progress-max-width",default:"var(--input-max-width)",description:"progress_fit 최대 너비"},{name:"--progress-circle-size · --progress-circle-stroke",default:"7.5rem · 6",description:"원형 크기·stroke"}],Fe=[{title:"API · Progress Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 show-info · aria-label은 showInfo · ariaLabel로 다룹니다.",tables:[{columns:xe,rows:Se,codeColumn:"name"}]},{title:"API · ProgressCircle Props",tables:[{columns:Ie,rows:ze,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:De,rows:Ee,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Re,rows:Ve,codeColumn:"name"}]}],Ne={percent:0,status:"success",size:"md",showInfo:!1,label:"라벨",color:"primary",striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,ariaLabel:"진행률"},$e={title:"Components/피드백/Progress",id:"components-progress",component:r,subcomponents:{ProgressCircle:d},tags:["autodocs"],argTypes:{percent:{control:"number",type:{name:"number",summary:"number"}},status:{control:"select",options:["success","exception"],type:{name:"enum",summary:"'success' | 'exception'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},showInfo:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["primary","success","warning","danger"],type:{name:"enum",summary:"'primary' | 'success' | 'warning' | 'danger'"}},striped:{control:"boolean",type:{name:"boolean",summary:"boolean"}},animated:{control:"boolean",type:{name:"boolean",summary:"boolean"}},indeterminate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},inside:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Fe,docs:{description:{component:"선형·원형 진행률을 표시하는 Progress 컴포넌트입니다."}}}},C={parameters:{controls:{disable:!1}},args:{...Ne},render:s=>e.jsx(r,{...s})},k={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'`progress` · `progress_track` · `progress_bar`로 트랙과 채움 막대를 구성합니다. `progress_bar`의 `style="width: …"` 또는 CSS 변수로 진행률을 제어합니다.'},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function BasicExample() {
  return (
    <>
      <Progress percent={0} />
      <Progress percent={30} />
      <Progress percent={60} />
      <Progress percent={100} status="success" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{percent:0}),e.jsx(r,{percent:30}),e.jsx(r,{percent:60}),e.jsx(r,{percent:100,status:"success"})]}))},v={name:"레이블 · 값",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_header`에 `progress_label` · `progress_value`를 함께 배치합니다."},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function LabelExample() {
  return (
    <>
      <Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
      <Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{percent:42,showInfo:!0,label:"파일 업로드",ariaLabel:"파일 업로드 진행률"}),e.jsx(r,{percent:67,showInfo:!0,label:"데이터 동기화",ariaLabel:"데이터 동기화 진행률"})]}))},j={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"공통 `color_*` 클래스로 의미를 표현합니다."},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function ColorExample() {
  return (
    <>
      <Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
      <Progress percent={100} color="success" ariaLabel="Success 진행률" />
      <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
      <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{percent:50,color:"primary",ariaLabel:"Primary 진행률"}),e.jsx(r,{percent:100,color:"success",ariaLabel:"Success 진행률"}),e.jsx(r,{percent:75,color:"warning",ariaLabel:"Warning 진행률"}),e.jsx(r,{percent:35,color:"danger",ariaLabel:"Danger 진행률"})]}))},L={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_sm` · `progress`(기본) · `progress_lg` 세 가지 높이를 지원합니다."},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function SizeExample() {
  return (
    <>
      <Progress size="sm" percent={40} />
      <Progress percent={55} />
      <Progress size="lg" percent={70} />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",percent:40}),e.jsx(r,{percent:55}),e.jsx(r,{size:"lg",percent:70})]}))},S={name:"줄무늬 · 애니메이션",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_striped`로 줄무늬 패턴을, `progress_animated`와 함께 사용하면 흐르는 애니메이션을 적용합니다."},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function StripedExample() {
  return (
    <>
      <Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
      <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{percent:45,striped:!0,color:"primary",ariaLabel:"줄무늬 진행률"}),e.jsx(r,{percent:65,striped:!0,animated:!0,color:"primary",ariaLabel:"애니메이션 진행률"})]}))},I={name:"불확정",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'진행률을 알 수 없을 때 `is-indeterminate`를 사용합니다. `aria-valuenow`를 생략하거나 `aria-busy="true"`를 함께 지정합니다.'},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function IndeterminateExample() {
  return (
    <>
      <Progress indeterminate color="primary" ariaLabel="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{indeterminate:!0,color:"primary",ariaLabel:"처리 중"}),e.jsx(r,{indeterminate:!0,label:"동기화 중…",color:"success",ariaLabel:"동기화 중"})]}))},z={name:"바 안 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_inside`로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다."},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function InsideExample() {
  return (
    <>
      <Progress percent={25} inside />
      <Progress percent={80} inside size="lg" color="success" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{percent:25,inside:!0}),e.jsx(r,{percent:80,inside:!0,size:"lg",color:"success"})]}))},D={name:"원형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'`progress_circle`로 원형 진행률을 표시합니다. `style="--progress-percent: …"`로 채움 비율을 지정합니다.'},source:{code:`import ProgressCircle from '@uxkm/ui-react/components/ProgressCircle.jsx';

export function CircleExample() {
  return (
    <>
      <ProgressCircle percent={25} />
      <ProgressCircle percent={68} color="success" />
      <ProgressCircle percent={50} size="sm" color="warning" />
      <ProgressCircle percent={90} size="lg" color="danger" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(d,{percent:25}),e.jsx(d,{percent:68,color:"success"}),e.jsx(d,{percent:50,size:"sm",color:"warning"}),e.jsx(d,{percent:90,size:"lg",color:"danger"})]}))},E={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`progress_fit`은 최대 너비를 제한하고, `progress_block`은 부모 너비 전체를 사용합니다."},source:{code:`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function WidthExample() {
  return (
    <>
      <Progress percent={50} showInfo label="progress_fit" />
      <Progress percent={72} block showInfo label="progress_block — 전체 너비" />
    </>
  );
}`,language:"tsx"}}},render:n(e.jsxs(e.Fragment,{children:[e.jsx(r,{percent:50,showInfo:!0,label:"progress_fit"}),e.jsx(r,{percent:72,block:!0,showInfo:!0,label:"progress_block — 전체 너비"})]}))};var N,A,q;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Progress {...args} />
}`,...(q=(A=C.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var W,O,$;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        story: '\`progress\` · \`progress_track\` · \`progress_bar\`로 트랙과 채움 막대를 구성합니다. \`progress_bar\`의 \`style="width: …"\` 또는 CSS 변수로 진행률을 제어합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function BasicExample() {
  return (
    <>
      <Progress percent={0} />
      <Progress percent={30} />
      <Progress percent={60} />
      <Progress percent={100} status="success" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress percent={0} />
      <Progress percent={30} />
      <Progress percent={60} />
      <Progress percent={100} status="success" />
    </>)
}`,...($=(O=k.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var T,B,M;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '레이블 · 값',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`progress_header\`에 \`progress_label\` · \`progress_value\`를 함께 배치합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function LabelExample() {
  return (
    <>
      <Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
      <Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
      <Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
    </>)
}`,...(M=(B=v.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var Z,H,U;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '색상',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '공통 \`color_*\` 클래스로 의미를 표현합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function ColorExample() {
  return (
    <>
      <Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
      <Progress percent={100} color="success" ariaLabel="Success 진행률" />
      <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
      <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
      <Progress percent={100} color="success" ariaLabel="Success 진행률" />
      <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
      <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
    </>)
}`,...(U=(H=j.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var G,J,K;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        story: '\`progress_sm\` · \`progress\`(기본) · \`progress_lg\` 세 가지 높이를 지원합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function SizeExample() {
  return (
    <>
      <Progress size="sm" percent={40} />
      <Progress percent={55} />
      <Progress size="lg" percent={70} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress size="sm" percent={40} />
      <Progress percent={55} />
      <Progress size="lg" percent={70} />
    </>)
}`,...(K=(J=L.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '줄무늬 · 애니메이션',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`progress_striped\`로 줄무늬 패턴을, \`progress_animated\`와 함께 사용하면 흐르는 애니메이션을 적용합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function StripedExample() {
  return (
    <>
      <Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
      <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
      <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
    </>)
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,se;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '불확정',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '진행률을 알 수 없을 때 \`is-indeterminate\`를 사용합니다. \`aria-valuenow\`를 생략하거나 \`aria-busy="true"\`를 함께 지정합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function IndeterminateExample() {
  return (
    <>
      <Progress indeterminate color="primary" ariaLabel="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress indeterminate color="primary" ariaLabel="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
    </>)
}`,...(se=(re=I.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ae,ne;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '바 안 텍스트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`progress_inside\`로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function InsideExample() {
  return (
    <>
      <Progress percent={25} inside />
      <Progress percent={80} inside size="lg" color="success" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress percent={25} inside />
      <Progress percent={80} inside size="lg" color="success" />
    </>)
}`,...(ne=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,ce,ie;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '원형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`progress_circle\`로 원형 진행률을 표시합니다. \`style="--progress-percent: …"\`로 채움 비율을 지정합니다.'
      },
      source: {
        code: \`import ProgressCircle from '@uxkm/ui-react/components/ProgressCircle.jsx';

export function CircleExample() {
  return (
    <>
      <ProgressCircle percent={25} />
      <ProgressCircle percent={68} color="success" />
      <ProgressCircle percent={50} size="sm" color="warning" />
      <ProgressCircle percent={90} size="lg" color="danger" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <ProgressCircle percent={25} />
      <ProgressCircle percent={68} color="success" />
      <ProgressCircle percent={50} size="sm" color="warning" />
      <ProgressCircle percent={90} size="lg" color="danger" />
    </>)
}`,...(ie=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,pe,me;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: '너비',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`progress_fit\`은 최대 너비를 제한하고, \`progress_block\`은 부모 너비 전체를 사용합니다.'
      },
      source: {
        code: \`import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function WidthExample() {
  return (
    <>
      <Progress percent={50} showInfo label="progress_fit" />
      <Progress percent={72} block showInfo label="progress_block — 전체 너비" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Progress percent={50} showInfo label="progress_fit" />
      <Progress percent={72} block showInfo label="progress_block — 전체 너비" />
    </>)
}`,...(me=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Te=["Playground","Basic","Label","Color","Size","Striped","Indeterminate","Inside","Circle","Width"];export{k as Basic,D as Circle,j as Color,I as Indeterminate,z as Inside,v as Label,C as Playground,L as Size,S as Striped,E as Width,Te as __namedExportsOrder,$e as default};

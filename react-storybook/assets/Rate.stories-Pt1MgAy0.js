import{r as i,d as Ne,u as ke,c as Ce,n as ze,j as e,a as E,b as Se}from"./iframe-DbjMrqYU.js";import{F as Pe}from"./FormLayout-Azd1c7tN.js";import{w as o}from"./story-renders-CrEYzOkG.js";import{d as Ee,a as Fe}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const Le=new Set(["sm","md","lg"]),F="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",De=Se("Rate",{defaults:{count:5,size:"md"},booleanProps:new Set(["allowHalf","clearable","readonly","disabled"]),skipProps:["modelValue","name"],selfClosing:!0});function q({half:s}){return e.jsxs("span",{className:"rate_star-graphic","aria-hidden":"true",children:[e.jsx("svg",{className:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:F})}),e.jsx("svg",{className:"rate_star-icon rate_star-icon-filled",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:F})}),s?e.jsx("span",{className:"rate_star-icon-half",children:e.jsx("svg",{className:"rate_star-icon",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:F})})}):null]})}function Ae(s,n,c){const t=n??0;return t>=s?"is-filled":c&&t>=s-.5?"is-half":""}function r({ripple:s,value:n,count:c=5,allowHalf:t,clearable:d,readonly:u,disabled:p,size:L="md",legend:C,name:D,className:z,onChange:m,...A}){const S=i.useRef(null),{rippleAttrs:_e,childRippleAttrs:H}=Ne({ripple:s},{mode:"container"}),Re=i.useId(),V=D||Re,f=Le.has(L)?L:"md",g=Number(c)>0?Number(c):5,[he,P]=i.useState(n);i.useEffect(()=>{n!==void 0&&P(n)},[n]);const l=he;ke(De,{ripple:s,value:l,count:g,allowHalf:t,clearable:d,readonly:u,disabled:p,size:f,legend:C,name:D},Ce(),S,{className:z,onChange:m,...A});const M=i.useMemo(()=>{const a=["rate"];return f==="sm"&&a.push("rate_sm"),f==="lg"&&a.push("rate_lg"),t&&a.push("rate_allow-half"),d&&a.push("rate_clearable"),u&&a.push("is-readonly"),a},[f,t,d,u]),T=i.useMemo(()=>Array.from({length:g},(a,x)=>x+1),[g]),{class:We,...je}=A,B=ze(je);function I(a){P(a),m==null||m(a)}function we(a){a.preventDefault(),P(void 0),m==null||m(void 0)}if(u){const a=`${g}점 만점 중 ${l??0}점`;return e.jsxs("div",{ref:S,className:E(M,z),role:"img","aria-label":a,...B,children:[e.jsx("div",{className:"rate_stars",children:T.map(x=>{const O=Ae(x,l,t);return e.jsx("span",{className:E("rate_star-readonly",O),children:e.jsx(q,{half:O==="is-half"})},x)})}),l?e.jsx("span",{className:"rate_value",children:l}):null]})}return e.jsxs("fieldset",{ref:S,className:E(M,z),disabled:p,..._e,...B,children:[C?e.jsx("legend",{className:"rate_legend",children:C}):null,e.jsxs("div",{className:"rate_control",children:[e.jsx("div",{className:"rate_stars",children:T.map(a=>e.jsxs("label",{className:"rate_star",...H,children:[t?e.jsx("input",{type:"radio",className:"rate_input rate_input-half",name:V,value:a-.5,checked:l===a-.5,disabled:p,onChange:()=>I(a-.5)}):null,e.jsx("input",{type:"radio",className:"rate_input",name:V,value:a,checked:l===a,disabled:p,onChange:()=>I(a)}),e.jsx(q,{half:!!t}),e.jsxs("span",{className:"rate_star-label",children:[a,"점"]})]},a))}),d?e.jsx("button",{type:"button",className:"rate_clear","aria-label":"별점 초기화",title:"초기화",onClick:we,...H,children:e.jsx("svg",{className:"rate_clear-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}):null,l?e.jsxs("output",{className:"rate_value",children:[l,"점"]}):null]})]})}r.__docgenInfo={description:"",methods:[],displayName:"Rate",props:{count:{defaultValue:{value:"5",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const He=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ve=[{name:"model-value",type:"number",default:"—",description:"v-model 별점 값"},{name:"value",type:"number",default:"—",description:"model-value 없을 때 표시값"},{name:"count",type:"number",default:"5",description:"별 개수"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"rate_sm · rate_lg"},{name:"allow-half",type:"boolean",default:"false",description:"0.5점 단위 (rate_allow-half)"},{name:"clearable",type:"boolean",default:"false",description:"초기화 버튼 (rate_clearable)"},{name:"readonly",type:"boolean",default:"false",description:"읽기 전용 표시 (is-readonly)"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"legend",type:"string",default:"—",description:"fieldset legend"},{name:"name",type:"string",default:"—",description:"radio name (그룹)"},Ee],Me=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Te=[{name:"rate",description:"별점 루트"},{name:"rate_sm · rate_lg · rate_allow-half · rate_clearable",description:"크기·기능"},{name:"rate_stars · rate_star · rate_star-graphic",description:"별 아이콘"},{name:"rate_input · rate_star-label · rate_value · rate_clear",description:"입력·값·초기화"},{name:"rate_legend · rate_control",description:"fieldset 구조"},{name:"is-readonly · is-filled · is-half",description:"상태"},...Fe],Be=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],Ie=[{name:"update:modelValue",description:"별점 변경·초기화 시 (v-model)"}],Oe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],qe=[{name:"--rate-star-size · --rate-star-size-sm · --rate-star-size-lg",default:"1.25rem · 1rem · 1.5rem",description:"별 크기"},{name:"--rate-star-gap · --rate-clear-size",default:"0.125rem · 1.5rem",description:"별 간격·초기화 버튼"}],$e=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 model-value는 value · onChange로 다룹니다.",tables:[{columns:He,rows:Ve,codeColumn:"name"}]},{title:"API · Events",description:"Vue update:modelValue는 React onChange에 대응합니다.",tables:[{columns:Be,rows:Ie,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Me,rows:Te,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Oe,rows:qe,codeColumn:"name"}]}],Ge={value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:"md",legend:"값",name:"search"},Xe={title:"Components/폼/Rate",id:"components-rate",component:r,tags:["autodocs"],argTypes:{value:{control:"number",type:{name:"number",summary:"number"}},count:{control:"number",type:{name:"number",summary:"number"}},allowHalf:{control:"boolean",type:{name:"boolean",summary:"boolean"}},clearable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},readonly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},legend:{control:"text",type:{name:"string",summary:"string"}},name:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:$e,docs:{description:{component:"별점으로 평가·표시하는 Rate 컴포넌트입니다."}}}},b={parameters:{controls:{disable:!1}},args:{...Ge},render:(s,{updateArgs:n})=>e.jsx(r,{...s,onChange:c=>n({value:c})})},y={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. `legend` · `aria-labelledby` · `aria-label`을 상황에 맞게 사용합니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function TypeExample() {
  return (
    <>
      <Rate legend="legend — 상품 만족도" value={3} name="rate-type-legend" />
      <Rate value={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate
        legend="aria-label — 단독"
        name="rate-type-aria"
        aria-label="별점 5점 만점"
      />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{legend:"legend — 상품 만족도",value:3,name:"rate-type-legend"}),e.jsx(r,{value:4,name:"rate-type-labelledby",legend:"aria-labelledby — 서비스 평가"}),e.jsx(r,{legend:"aria-label — 단독",name:"rate-type-aria","aria-label":"별점 5점 만점"})]}))},v={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function BasicExample() {
  return <Rate legend="배송 속도" value={3} name="rate-basic" />;
}`,language:"tsx"}}},render:o(e.jsx(r,{legend:"배송 속도",value:3,name:"rate-basic"}))},_={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function SizeExample() {
  return (
    <>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",legend:"Small — rate_sm",value:3,name:"rate-size-sm"}),e.jsx(r,{legend:"Medium — 기본",value:3,name:"rate-size-md"}),e.jsx(r,{size:"lg",legend:"Large — rate_lg",value:3,name:"rate-size-lg"})]}))},R={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function ColorExample() {
  return (
    <>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{className:"color_primary",legend:"Primary",value:4,name:"rate-color-primary"}),e.jsx(r,{className:"color_success",legend:"Success",value:5,name:"rate-color-success"}),e.jsx(r,{className:"color_danger",legend:"Danger",value:2,name:"rate-color-danger"})]}))},h={name:"반별",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_allow-half`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 `rate_input-half`를 배치합니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function HalfExample() {
  return (
    <>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{allowHalf:!0,legend:"정밀 평가 — rate_allow-half",value:3.5,name:"rate-half"}),e.jsx("p",{className:"rate_hint",children:"별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다."})]}))},j={name:"선택 해제",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_clearable`을 추가하면 초기화 버튼으로 값을 지울 수 있습니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />;
}`,language:"tsx"}}},render:o(e.jsx(r,{clearable:!0,legend:"만족도 — rate_clearable",value:4,name:"rate-clear"}))},w={name:"읽기 전용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`is-readonly`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function ReadonlyExample() {
  return (
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{readonly:!0,allowHalf:!0,value:4.5}),e.jsx(r,{readonly:!0,size:"sm",value:2})]}))},N={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"비활성·오류(is-error) 상태를 지원합니다."},source:{code:`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function StateExample() {
  return (
    <>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,legend:"비활성",value:3,name:"rate-state-disabled"}),e.jsx(r,{className:"is-error",legend:"오류 — is-error",name:"rate-state-error"}),e.jsx("p",{className:"form_field-error",children:"별점을 선택해 주세요."})]}))},k={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_field · form_vertical과 함께 사용합니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function FormExample() {
  return (
    <FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>
  );
}`,language:"tsx"}}},render:o(e.jsx(Pe,{layout:"vertical",fit:!0,children:e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"rate-form-label",children:"상품 만족도"}),e.jsx(r,{name:"rate-form","aria-labelledby":"rate-form-label"}),e.jsx("p",{className:"form_field-hint",children:"1~5점 사이로 평가해 주세요."})]})}))};var $,G,W;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: (args, {
    updateArgs
  }) => <Rate {...args} onChange={next => updateArgs({
    value: next
  })} />
}`,...(W=(G=b.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var Z,J,K;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '유형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '접근 가능한 이름 지정 방식별 예시입니다. \`legend\` · \`aria-labelledby\` · \`aria-label\`을 상황에 맞게 사용합니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function TypeExample() {
  return (
    <>
      <Rate legend="legend — 상품 만족도" value={3} name="rate-type-legend" />
      <Rate value={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate
        legend="aria-label — 단독"
        name="rate-type-aria"
        aria-label="별점 5점 만점"
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Rate legend="legend — 상품 만족도" value={3} name="rate-type-legend" />
      <Rate value={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
    </>)
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        story: 'rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function BasicExample() {
  return <Rate legend="배송 속도" value={3} name="rate-basic" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Rate legend="배송 속도" value={3} name="rate-basic" />)
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,ee,ae;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function SizeExample() {
  return (
    <>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
    </>)
}`,...(ae=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
        story: '기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function ColorExample() {
  return (
    <>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>)
}`,...(te=(se=R.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,oe,ne;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: '반별',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`rate_allow-half\`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 \`rate_input-half\`를 배치합니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function HalfExample() {
  return (
    <>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>)
}`,...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var me,ce,ie;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: '선택 해제',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`rate_clearable\`을 추가하면 초기화 버튼으로 값을 지울 수 있습니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />)
}`,...(ie=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '읽기 전용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`is-readonly\`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function ReadonlyExample() {
  return (
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>)
}`,...(pe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,ge,xe;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: '상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '비활성·오류(is-error) 상태를 지원합니다.'
      },
      source: {
        code: \`import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function StateExample() {
  return (
    <>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>)
}`,...(xe=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var be,ye,ve;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '폼 레이아웃',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'form_field · form_vertical과 함께 사용합니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Rate from '@uxkm/ui-react/components/Rate.jsx';

export function FormExample() {
  return (
    <FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>)
}`,...(ve=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const Ye=["Playground","Type","Basic","Size","Color","Half","Clear","Readonly","State","Form"];export{v as Basic,j as Clear,R as Color,k as Form,h as Half,b as Playground,w as Readonly,_ as Size,N as State,y as Type,Ye as __namedExportsOrder,Xe as default};

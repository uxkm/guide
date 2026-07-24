import{d as fe,r as R,u as xe,c as Ee,n as ye,j as e,a as Ne,b as je}from"./iframe-ifEc15ad.js";import{F as M}from"./FormLayout-BSDQd5Xp.js";import{w as a}from"./story-renders-Hdz_JUlO.js";import{r as ve,a as Le}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const Ce=new Set(["sm","md","lg"]),ze=je("Switch",{defaults:{size:"md"},booleanProps:new Set(["checked","disabled","labelEnd","ripple"]),selfClosing:!1});function l({ripple:r,label:c,checked:s,defaultChecked:y,disabled:N,labelEnd:t,size:j="md",ariaLabel:v,children:k,className:L,onChange:f,id:C,name:z,value:F,...P}){const{rippleAttrs:ue}=fe({ripple:r}),W=R.useRef(null),i=Ce.has(j)?j:"md",x=k??c,E=!!c||k!=null&&k!=="";xe(ze,{ripple:r,label:c,checked:s,disabled:N,labelEnd:t,size:i,ariaLabel:v},Ee({default:x}),W,{className:L,id:C,name:z,value:F,onChange:f,...P});const _e=R.useMemo(()=>{const n=["switch"];return t&&n.push("switch_label-end"),i==="sm"&&n.push("switch_sm"),i==="lg"&&n.push("switch_lg"),n},[t,i]),{class:Ve,...ge}=P,Se=ye(ge),ke=f!=null?{checked:!!s,onChange:f}:s!=null?{defaultChecked:!!s}:y!=null?{defaultChecked:!!y}:{},D=E?void 0:v;return e.jsxs("label",{ref:W,className:Ne(_e,L),"aria-label":D,...ue,children:[E&&t?e.jsx("span",{className:"switch_label",children:x}):null,e.jsxs("span",{className:"switch_control",children:[e.jsx("input",{id:C,type:"checkbox",className:"switch_input",role:"switch",name:z,value:F,disabled:N,"aria-label":D,...ke,...Se}),e.jsx("span",{className:"switch_track","aria-hidden":"true",children:e.jsx("span",{className:"switch_thumb"})})]}),E&&!t?e.jsx("span",{className:"switch_label",children:x}):null]})}l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const Fe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Pe=[{name:"label",type:"string",default:"—",description:"라벨 텍스트. default 슬롯으로 대체"},{name:"checked",type:"boolean",default:"false",description:"켜짐 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"label-end",type:"boolean",default:"false",description:"라벨을 스위치 뒤에 배치"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"switch_sm · switch_lg"},{name:"aria-label",type:"string",default:"—",description:"라벨 없을 때 접근성 라벨"},ve],We=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],De=[{name:"switch",description:"스위치 루트 label"},{name:"switch_sm · switch_lg · switch_label-end",description:"크기·레이아웃"},{name:"switch_control · switch_input · switch_track · switch_thumb",description:"입력·트랙"},{name:"switch_label",description:"라벨"},{name:"switch_group",description:"여러 스위치 묶음"},...Le],Re=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Me=[{name:"--switch-width · --switch-height",default:"2.75rem · 1.5rem",description:"트랙 크기 (md)"},{name:"--switch-width-sm · --switch-width-lg",default:"2.25rem · 3.25rem",description:"크기 변형"},{name:"--switch-gap · --switch-radius",default:"—",description:"라벨 간격·모서리"}],Ae=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Te=[{name:"label",description:"라벨 텍스트. children으로 대체 가능"},{name:"children",description:"라벨 텍스트 (label prop 대체, Vue default 슬롯 대응). switch_content · switch_hint 조합 가능"}],Be=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: label-end, aria-label)와 동일한 의미입니다.",tables:[{columns:Fe,rows:Pe,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React label·children prop입니다.",tables:[{columns:Ae,rows:Te,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:We,rows:De,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Re,rows:Me,codeColumn:"name"}]}],Ie={label:"라벨",checked:!1,disabled:!1,labelEnd:!1,size:"md",ariaLabel:"접근성 라벨"},Je={title:"Components/폼/Switch",id:"components-switch",component:l,tags:["autodocs"],argTypes:{label:{control:"text",type:{name:"string",summary:"string"}},checked:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelEnd:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Be,docs:{description:{component:"켜짐·꺼짐을 전환하는 Switch 컴포넌트입니다."}}}},o={parameters:{controls:{disable:!1}},args:{...Ie},render:(r,{updateArgs:c})=>e.jsx(l,{...r,onChange:s=>c({checked:s.target.checked})})},d={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 `switch_control` → `switch_label` 순서입니다. `switch_label-end`는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function TypeExample() {
  return (
    <>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{checked:!0,label:"기본 — switch"}),e.jsx(l,{labelEnd:!0,checked:!0,label:"레이블 뒤 — switch_label-end"})]}))},h={name:"레이블 뒤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`switch_label-end`는 `switch_label` → `switch_control` 순으로 마크업합니다. 전체 너비가 필요하면 `switch_block` 또는 `switch_group_block`을 추가합니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function LabelEndExample() {
  return (
    <>
      <Switch labelEnd checked label="푸시 알림 받기" />
      <Switch labelEnd>
        <span className="switch_content">
          <span className="switch_label">마케팅 정보 수신</span>
          <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch labelEnd checked label="이메일 알림" />
        <Switch labelEnd checked label="푸시 알림" />
        <Switch labelEnd label="SMS 알림" />
      </fieldset>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{labelEnd:!0,checked:!0,label:"푸시 알림 받기"}),e.jsx(l,{labelEnd:!0,children:e.jsxs("span",{className:"switch_content",children:[e.jsx("span",{className:"switch_label",children:"마케팅 정보 수신"}),e.jsx("span",{className:"switch_hint",children:"이벤트·할인 소식을 이메일로 받습니다."})]})}),e.jsxs("fieldset",{className:"switch_group switch_group_block",style:{maxWidth:360,width:"100%"},children:[e.jsx("legend",{className:"switch_group-legend",children:"알림 설정 — switch_group_block"}),e.jsx(l,{labelEnd:!0,checked:!0,label:"이메일 알림"}),e.jsx(l,{labelEnd:!0,checked:!0,label:"푸시 알림"}),e.jsx(l,{labelEnd:!0,label:"SMS 알림"})]}),e.jsx(l,{labelEnd:!0,size:"sm",checked:!0,label:"Small — switch_sm"}),e.jsx(l,{labelEnd:!0,size:"lg",checked:!0,label:"Large — switch_lg"})]}))},m={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function BasicExample() {
  return (
    <>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{checked:!0,label:"다크 모드"}),e.jsx(l,{label:"자동 저장"})]}))},b={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"레이블 없이 스위치만 사용할 수 있습니다. `aria-label`로 접근 가능한 이름을 지정합니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function StandaloneExample() {
  return (
    <>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{ariaLabel:"기능 켜기"}),e.jsx(l,{checked:!0,ariaLabel:"기능 끄기"}),e.jsx(l,{disabled:!0,ariaLabel:"비활성"})]}))},w={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function SizeExample() {
  return (
    <>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{labelEnd:!0,size:"sm",checked:!0,label:"Small — switch_sm"}),e.jsx(l,{labelEnd:!0,checked:!0,label:"Medium — 기본"}),e.jsx(l,{labelEnd:!0,size:"lg",checked:!0,label:"Large — switch_lg"})]}))},p={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function WidthExample() {
  return (
    <>
      <Switch labelEnd checked label="기본 — 인라인 너비" />
      <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">switch_group_block</legend>
        <Switch labelEnd checked label="Wi-Fi" />
        <Switch labelEnd label="블루투스" />
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{labelEnd:!0,checked:!0,label:"기본 — 인라인 너비"}),e.jsx(l,{labelEnd:!0,className:"switch_block",checked:!0,label:"switch_block — 전체 너비"}),e.jsxs("fieldset",{className:"switch_group switch_group_block",style:{maxWidth:360,width:"100%"},children:[e.jsx("legend",{className:"switch_group-legend",children:"switch_group_block"}),e.jsx(l,{labelEnd:!0,checked:!0,label:"Wi-Fi"}),e.jsx(l,{labelEnd:!0,label:"블루투스"})]})]}))},u={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function ColorExample() {
  return (
    <>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{className:"color_primary",labelEnd:!0,checked:!0,label:"Primary"}),e.jsx(l,{className:"color_success",labelEnd:!0,checked:!0,label:"Success"}),e.jsx(l,{className:"color_danger",labelEnd:!0,checked:!0,label:"Danger"}),e.jsx(l,{className:"color_warning",labelEnd:!0,checked:!0,label:"Warning"})]}))},_={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function StateExample() {
  return (
    <>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{labelEnd:!0,label:"꺼짐"}),e.jsx(l,{labelEnd:!0,checked:!0,label:"켜짐"}),e.jsx(l,{labelEnd:!0,disabled:!0,label:"비활성"}),e.jsx(l,{labelEnd:!0,checked:!0,disabled:!0,label:"켜짐 (비활성)"})]}))},g={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다."},source:{code:`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function GroupExample() {
  return (
    <>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">개인정보 설정</legend>
        <Switch labelEnd checked>
          <span className="switch_content">
            <span className="switch_label">프로필 공개</span>
            <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch labelEnd>
          <span className="switch_content">
            <span className="switch_label">활동 기록 표시</span>
            <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch labelEnd checked label="검색 허용" />
      </fieldset>
      <fieldset
        className="switch_group switch_group_block switch_group_compact"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch labelEnd label="고대비 모드" />
        <Switch labelEnd label="애니메이션 줄이기" />
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("fieldset",{className:"switch_group switch_group_block",style:{maxWidth:400,width:"100%"},children:[e.jsx("legend",{className:"switch_group-legend",children:"개인정보 설정"}),e.jsx(l,{labelEnd:!0,checked:!0,children:e.jsxs("span",{className:"switch_content",children:[e.jsx("span",{className:"switch_label",children:"프로필 공개"}),e.jsx("span",{className:"switch_hint",children:"다른 사용자가 내 프로필을 볼 수 있습니다."})]})}),e.jsx(l,{labelEnd:!0,children:e.jsxs("span",{className:"switch_content",children:[e.jsx("span",{className:"switch_label",children:"활동 기록 표시"}),e.jsx("span",{className:"switch_hint",children:"최근 활동이 타임라인에 노출됩니다."})]})}),e.jsx(l,{labelEnd:!0,checked:!0,label:"검색 허용"})]}),e.jsxs("fieldset",{className:"switch_group switch_group_block switch_group_compact",style:{maxWidth:400,width:"100%"},children:[e.jsx("legend",{className:"switch_group-legend",children:"접근성 — switch_group_compact"}),e.jsx(l,{labelEnd:!0,label:"고대비 모드"}),e.jsx(l,{labelEnd:!0,label:"애니메이션 줄이기"})]})]}))},S={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-vertical-label">
            알림
          </span>
          <fieldset
            className="switch_group switch_group_block"
            aria-labelledby="switch-form-vertical-label"
          >
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-horizontal-label">
            자동 저장
          </span>
          <Switch
            labelEnd
            checked
            label="편집 내용 자동 저장"
            aria-labelledby="switch-form-horizontal-label"
          />
        </div>
      </FormLayout>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(M,{layout:"vertical",fit:!0,children:e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"switch-form-vertical-label",children:"알림"}),e.jsxs("fieldset",{className:"switch_group switch_group_block","aria-labelledby":"switch-form-vertical-label",children:[e.jsx(l,{labelEnd:!0,checked:!0,label:"이메일 알림"}),e.jsx(l,{labelEnd:!0,label:"푸시 알림"})]})]})}),e.jsx(M,{layout:"horizontal",fit:!0,children:e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"switch-form-horizontal-label",children:"자동 저장"}),e.jsx(l,{labelEnd:!0,checked:!0,label:"편집 내용 자동 저장","aria-labelledby":"switch-form-horizontal-label"})]})})]}))};var A,T,B;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }) => <Switch {...args} onChange={event => updateArgs({
    checked: event.target.checked
  })} />
}`,...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var I,V,G;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        story: '기본은 \`switch_control\` → \`switch_label\` 순서입니다. \`switch_label-end\`는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function TypeExample() {
  return (
    <>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>)
}`,...(G=(V=d.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var O,H,q;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '레이블 뒤',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`switch_label-end\`는 \`switch_label\` → \`switch_control\` 순으로 마크업합니다. 전체 너비가 필요하면 \`switch_block\` 또는 \`switch_group_block\`을 추가합니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function LabelEndExample() {
  return (
    <>
      <Switch labelEnd checked label="푸시 알림 받기" />
      <Switch labelEnd>
        <span className="switch_content">
          <span className="switch_label">마케팅 정보 수신</span>
          <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch labelEnd checked label="이메일 알림" />
        <Switch labelEnd checked label="푸시 알림" />
        <Switch labelEnd label="SMS 알림" />
      </fieldset>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch labelEnd checked label="푸시 알림 받기" />
      <Switch labelEnd>
        <span className="switch_content">
          <span className="switch_label">마케팅 정보 수신</span>
          <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset className="switch_group switch_group_block" style={{
      maxWidth: 360,
      width: '100%'
    }}>
        <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch labelEnd checked label="이메일 알림" />
        <Switch labelEnd checked label="푸시 알림" />
        <Switch labelEnd label="SMS 알림" />
      </fieldset>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>)
}`,...(q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var Z,J,K;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
        story: '레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function BasicExample() {
  return (
    <>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>)
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '단독 사용',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '레이블 없이 스위치만 사용할 수 있습니다. \`aria-label\`로 접근 가능한 이름을 지정합니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function StandaloneExample() {
  return (
    <>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
    </>)
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,$,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
        story: 'switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function SizeExample() {
  return (
    <>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>)
}`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var le,ae,se;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: '너비',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function WidthExample() {
  return (
    <>
      <Switch labelEnd checked label="기본 — 인라인 너비" />
      <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">switch_group_block</legend>
        <Switch labelEnd checked label="Wi-Fi" />
        <Switch labelEnd label="블루투스" />
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch labelEnd checked label="기본 — 인라인 너비" />
      <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset className="switch_group switch_group_block" style={{
      maxWidth: 360,
      width: '100%'
    }}>
        <legend className="switch_group-legend">switch_group_block</legend>
        <Switch labelEnd checked label="Wi-Fi" />
        <Switch labelEnd label="블루투스" />
      </fieldset>
    </>)
}`,...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,te,re;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
        story: 'color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function ColorExample() {
  return (
    <>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>)
}`,...(re=(te=u.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,ne,oe;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
        story: '켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function StateExample() {
  return (
    <>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>)
}`,...(oe=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var de,he,me;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다.'
      },
      source: {
        code: \`import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function GroupExample() {
  return (
    <>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">개인정보 설정</legend>
        <Switch labelEnd checked>
          <span className="switch_content">
            <span className="switch_label">프로필 공개</span>
            <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch labelEnd>
          <span className="switch_content">
            <span className="switch_label">활동 기록 표시</span>
            <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch labelEnd checked label="검색 허용" />
      </fieldset>
      <fieldset
        className="switch_group switch_group_block switch_group_compact"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch labelEnd label="고대비 모드" />
        <Switch labelEnd label="애니메이션 줄이기" />
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <fieldset className="switch_group switch_group_block" style={{
      maxWidth: 400,
      width: '100%'
    }}>
        <legend className="switch_group-legend">개인정보 설정</legend>
        <Switch labelEnd checked>
          <span className="switch_content">
            <span className="switch_label">프로필 공개</span>
            <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch labelEnd>
          <span className="switch_content">
            <span className="switch_label">활동 기록 표시</span>
            <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch labelEnd checked label="검색 허용" />
      </fieldset>
      <fieldset className="switch_group switch_group_block switch_group_compact" style={{
      maxWidth: 400,
      width: '100%'
    }}>
        <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch labelEnd label="고대비 모드" />
        <Switch labelEnd label="애니메이션 줄이기" />
      </fieldset>
    </>)
}`,...(me=(he=g.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var be,we,pe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
        story: 'form_vertical · form_horizontal과 함께 사용합니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-vertical-label">
            알림
          </span>
          <fieldset
            className="switch_group switch_group_block"
            aria-labelledby="switch-form-vertical-label"
          >
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-horizontal-label">
            자동 저장
          </span>
          <Switch
            labelEnd
            checked
            label="편집 내용 자동 저장"
            aria-labelledby="switch-form-horizontal-label"
          />
        </div>
      </FormLayout>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-vertical-label">
            알림
          </span>
          <fieldset className="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-horizontal-label">
            자동 저장
          </span>
          <Switch labelEnd checked label="편집 내용 자동 저장" aria-labelledby="switch-form-horizontal-label" />
        </div>
      </FormLayout>
    </>)
}`,...(pe=(we=S.parameters)==null?void 0:we.docs)==null?void 0:pe.source}}};const Ke=["Playground","Type","LabelEnd","Basic","Standalone","Size","Width","Color","State","Group","Form"];export{m as Basic,u as Color,S as Form,g as Group,h as LabelEnd,o as Playground,w as Size,b as Standalone,_ as State,d as Type,p as Width,Ke as __namedExportsOrder,Je as default};

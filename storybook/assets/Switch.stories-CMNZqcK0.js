import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BnaKUpFX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,r as a}from"./FormLayout-DqL6i1n7.js";function o({label:e,checked:t,defaultChecked:n,disabled:r=!1,labelEnd:i=!1,size:a=`md`,ripple:o=!0,ariaLabel:l,children:u,className:d=``,onChange:f,id:p,name:m,value:h,...g}){let _=u??e,v=_!=null&&_!==``,y=c.has(a)?a:`md`,b=[`switch`,i&&`switch_label-end`,y===`sm`&&`switch_sm`,y===`lg`&&`switch_lg`,d].filter(Boolean).join(` `),x=f?{checked:!!t,onChange:f}:t==null?{defaultChecked:n}:{defaultChecked:!!t};return(0,s.jsxs)(`label`,{className:b,"aria-label":v?void 0:l,"data-ripple":o?`true`:`false`,children:[v&&i&&(0,s.jsx)(`span`,{className:`switch_label`,children:_}),(0,s.jsxs)(`span`,{className:`switch_control`,children:[(0,s.jsx)(`input`,{...g,id:p,type:`checkbox`,className:`switch_input`,role:`switch`,name:m,value:h,disabled:r,"aria-label":v?void 0:l,...x,"data-component":`Switch`}),(0,s.jsx)(`span`,{className:`switch_track`,"aria-hidden":`true`,children:(0,s.jsx)(`span`,{className:`switch_thumb`})})]}),v&&!i&&(0,s.jsx)(`span`,{className:`switch_label`,children:_})]})}var s,c;function l(){return(l=e((()=>{s=r(),c=new Set([`sm`,`md`,`lg`]),o.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{disabled:{defaultValue:{value:`false`,computed:!1},required:!1},labelEnd:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},ripple:{defaultValue:{value:`true`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var u=t({Basic:()=>y,Color:()=>C,Form:()=>E,Group:()=>T,LabelEnd:()=>v,Playground:()=>g,Size:()=>x,Standalone:()=>b,State:()=>w,Type:()=>_,Width:()=>S,__namedExportsOrder:()=>D,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),l(),d=r(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=e=>()=>(0,d.jsx)(`div`,{className:`demo-stack`,children:e}),m={label:`라벨`,checked:!1,disabled:!1,labelEnd:!1,size:`md`,ariaLabel:`접근성 라벨`},h={title:`폼/Switch`,id:`components-switch`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`,type:{name:`string`,summary:`string`}},checked:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},disabled:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},labelEnd:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},size:{control:`select`,options:[`sm`,`md`,`lg`],type:{name:`enum`,summary:`'sm' | 'md' | 'lg'`}},ariaLabel:{control:`text`,type:{name:`string`,summary:`string`}}},parameters:{a11y:{test:`error`},controls:{disable:!1},layout:`padded`,docs:{description:{component:`켜짐·꺼짐을 전환하는 Switch 컴포넌트입니다.`}}}},g={parameters:{controls:{disable:!1}},args:{...m},render:e=>(0,d.jsx)(o,{...e}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`switch`,{name:`라벨`});await f(n).not.toBeChecked(),await t.click(n),await f(n).toBeChecked()}},_={name:`유형`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 `switch_control` → `switch_label` 순서입니다. `switch_label-end`는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다."},source:{code:`import Switch from '@uxkm/react/switch';

export function TypeExample() {
  return (
    <>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>
  );
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{checked:!0,label:`기본 — switch`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`레이블 뒤 — switch_label-end`})]}))},v={name:`레이블 뒤`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`switch_label-end`는 `switch_label` → `switch_control` 순으로 마크업합니다. 전체 너비가 필요하면 `switch_block` 또는 `switch_group_block`을 추가합니다."},source:{code:`import Switch from '@uxkm/react/switch';

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
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`푸시 알림 받기`}),(0,d.jsx)(o,{labelEnd:!0,children:(0,d.jsxs)(`span`,{className:`switch_content`,children:[(0,d.jsx)(`span`,{className:`switch_label`,children:`마케팅 정보 수신`}),(0,d.jsx)(`span`,{className:`switch_hint`,children:`이벤트·할인 소식을 이메일로 받습니다.`})]})}),(0,d.jsxs)(`fieldset`,{className:`switch_group switch_group_block`,style:{maxWidth:360,width:`100%`},children:[(0,d.jsx)(`legend`,{className:`switch_group-legend`,children:`알림 설정 — switch_group_block`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`이메일 알림`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`푸시 알림`}),(0,d.jsx)(o,{labelEnd:!0,label:`SMS 알림`})]}),(0,d.jsx)(o,{labelEnd:!0,size:`sm`,checked:!0,label:`Small — switch_sm`}),(0,d.jsx)(o,{labelEnd:!0,size:`lg`,checked:!0,label:`Large — switch_lg`})]}))},y={name:`기본`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다.`},source:{code:`import Switch from '@uxkm/react/switch';

export function BasicExample() {
  return (
    <>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>
  );
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{checked:!0,label:`다크 모드`}),(0,d.jsx)(o,{label:`자동 저장`})]}))},b={name:`단독 사용`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"레이블 없이 스위치만 사용할 수 있습니다. `aria-label`로 접근 가능한 이름을 지정합니다."},source:{code:`import Switch from '@uxkm/react/switch';

export function StandaloneExample() {
  return (
    <>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
    </>
  );
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{ariaLabel:`기능 켜기`}),(0,d.jsx)(o,{checked:!0,ariaLabel:`기능 끄기`}),(0,d.jsx)(o,{disabled:!0,ariaLabel:`비활성`})]}))},x={name:`크기`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다.`},source:{code:`import Switch from '@uxkm/react/switch';

export function SizeExample() {
  return (
    <>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{labelEnd:!0,size:`sm`,checked:!0,label:`Small — switch_sm`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`Medium — 기본`}),(0,d.jsx)(o,{labelEnd:!0,size:`lg`,checked:!0,label:`Large — switch_lg`})]}))},S={name:`너비`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다.`},source:{code:`import Switch from '@uxkm/react/switch';

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
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`기본 — 인라인 너비`}),(0,d.jsx)(o,{labelEnd:!0,className:`switch_block`,checked:!0,label:`switch_block — 전체 너비`}),(0,d.jsxs)(`fieldset`,{className:`switch_group switch_group_block`,style:{maxWidth:360,width:`100%`},children:[(0,d.jsx)(`legend`,{className:`switch_group-legend`,children:`switch_group_block`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`Wi-Fi`}),(0,d.jsx)(o,{labelEnd:!0,label:`블루투스`})]})]}))},C={name:`색상`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다.`},source:{code:`import Switch from '@uxkm/react/switch';

export function ColorExample() {
  return (
    <>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>
  );
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{className:`color_primary`,labelEnd:!0,checked:!0,label:`Primary`}),(0,d.jsx)(o,{className:`color_success`,labelEnd:!0,checked:!0,label:`Success`}),(0,d.jsx)(o,{className:`color_danger`,labelEnd:!0,checked:!0,label:`Danger`}),(0,d.jsx)(o,{className:`color_warning`,labelEnd:!0,checked:!0,label:`Warning`})]}))},w={name:`상태`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다.`},source:{code:`import Switch from '@uxkm/react/switch';

export function StateExample() {
  return (
    <>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>
  );
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{labelEnd:!0,label:`꺼짐`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`켜짐`}),(0,d.jsx)(o,{labelEnd:!0,disabled:!0,label:`비활성`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,disabled:!0,label:`켜짐 (비활성)`})]}))},T={name:`그룹`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다.`},source:{code:`import Switch from '@uxkm/react/switch';

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
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`fieldset`,{className:`switch_group switch_group_block`,style:{maxWidth:400,width:`100%`},children:[(0,d.jsx)(`legend`,{className:`switch_group-legend`,children:`개인정보 설정`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,children:(0,d.jsxs)(`span`,{className:`switch_content`,children:[(0,d.jsx)(`span`,{className:`switch_label`,children:`프로필 공개`}),(0,d.jsx)(`span`,{className:`switch_hint`,children:`다른 사용자가 내 프로필을 볼 수 있습니다.`})]})}),(0,d.jsx)(o,{labelEnd:!0,children:(0,d.jsxs)(`span`,{className:`switch_content`,children:[(0,d.jsx)(`span`,{className:`switch_label`,children:`활동 기록 표시`}),(0,d.jsx)(`span`,{className:`switch_hint`,children:`최근 활동이 타임라인에 노출됩니다.`})]})}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`검색 허용`})]}),(0,d.jsxs)(`fieldset`,{className:`switch_group switch_group_block switch_group_compact`,style:{maxWidth:400,width:`100%`},children:[(0,d.jsx)(`legend`,{className:`switch_group-legend`,children:`접근성 — switch_group_compact`}),(0,d.jsx)(o,{labelEnd:!0,label:`고대비 모드`}),(0,d.jsx)(o,{labelEnd:!0,label:`애니메이션 줄이기`})]})]}))},E={name:`폼 레이아웃`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`form_vertical · form_horizontal과 함께 사용합니다.`},source:{code:`import FormLayout from '@uxkm/react/form-layout';
import Switch from '@uxkm/react/switch';

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
}`,language:`tsx`}}},render:p((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{layout:`vertical`,fit:!0,children:(0,d.jsxs)(`div`,{className:`form_field`,children:[(0,d.jsx)(`span`,{className:`form_field-label`,id:`switch-form-vertical-label`,children:`알림`}),(0,d.jsxs)(`fieldset`,{className:`switch_group switch_group_block`,"aria-labelledby":`switch-form-vertical-label`,children:[(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`이메일 알림`}),(0,d.jsx)(o,{labelEnd:!0,label:`푸시 알림`})]})]})}),(0,d.jsx)(a,{layout:`horizontal`,fit:!0,children:(0,d.jsxs)(`div`,{className:`form_field`,children:[(0,d.jsx)(`span`,{className:`form_field-label`,id:`switch-form-horizontal-label`,children:`자동 저장`}),(0,d.jsx)(o,{labelEnd:!0,checked:!0,label:`편집 내용 자동 저장`,"aria-labelledby":`switch-form-horizontal-label`})]})})]}))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Switch {...args} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const control = canvas.getByRole('switch', {
      name: '라벨'
    });
    await expect(control).not.toBeChecked();
    await userEvent.click(control);
    await expect(control).toBeChecked();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        code: \`import Switch from '@uxkm/react/switch';

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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
        code: \`import FormLayout from '@uxkm/react/form-layout';
import Switch from '@uxkm/react/switch';

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
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Type`,`LabelEnd`,`Basic`,`Standalone`,`Size`,`Width`,`Color`,`State`,`Group`,`Form`]})))()}export{v as a,w as c,S as d,O as f,T as i,u as l,C as n,x as o,E as r,b as s,y as t,_ as u};
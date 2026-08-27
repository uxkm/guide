import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BnaKUpFX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Rate-DL6ZuaYL.js";import{i as o,r as s}from"./FormLayout-DqL6i1n7.js";var c,l,u,d;function f(){return(f=e((()=>{c=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],l=(e,t,n)=>({title:e,description:n,tables:[{columns:c,rows:t}]}),u=[{name:`value · defaultValue`,type:`number`,default:`—`,description:`현재 별점과 초기 별점입니다.`},{name:`count`,type:`number`,default:`5`,description:`표시할 별의 개수입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`별과 값 텍스트 크기입니다.`},{name:`allowHalf · clearable`,type:`boolean`,default:`false`,description:`0.5점 선택과 선택 초기화 기능입니다.`},{name:`readonly · readOnly · disabled`,type:`boolean`,default:`false`,description:`읽기 전용 표시와 비활성 상태입니다.`},{name:`legend · name`,type:`string`,default:`—`,description:`fieldset 범례와 radio 그룹 이름입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`각 별과 초기화 버튼 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`className · ...props`,type:`string · fieldset attributes`,default:`—`,description:`루트 클래스와 네이티브 속성입니다.`}],d=[l(`React · Next.js API · Props`,u,`Next.js는 @uxkm/react/rate를 재사용합니다.`),l(`React · Next.js API · Events`,[{name:`onChange`,type:`(value?: number) => void`,default:`—`,description:`별점 선택 또는 초기화 콜백입니다.`}]),l(`Vue · Nuxt API`,[{name:`modelValue · update:modelValue`,type:`number · event`,default:`—`,description:`v-model 별점과 변경 이벤트입니다.`},...u.slice(1,7)],`Nuxt는 @uxkm/vue/rate를 재사용합니다.`),l(`HTML · Gulp · 클래스`,[{name:`rate · rate_control · rate_stars · rate_star`,type:`class`,default:`—`,description:`별점 루트와 별 선택 구조입니다.`},{name:`rate_input · rate_star-graphic · rate_star-label`,type:`class`,default:`—`,description:`radio 입력, 아이콘과 접근 가능한 레이블입니다.`},{name:`rate_sm · rate_lg · rate_allow-half · rate_clearable`,type:`class`,default:`—`,description:`크기와 기능 변형입니다.`},{name:`rate_value · rate_clear · is-readonly · is-filled · is-half`,type:`class`,default:`—`,description:`값, 초기화 및 읽기 전용 상태입니다.`}]),l(`디자인 토큰`,[{name:`--rate-star-size · --rate-star-size-sm · --rate-star-size-lg`,type:`length`,default:`1.25rem · 1rem · 1.5rem`,description:`별 아이콘 크기입니다.`},{name:`--rate-star-gap · --rate-clear-size`,type:`length`,default:`0.125rem · 1.5rem`,description:`별 간격과 초기화 버튼 크기입니다.`},{name:`--rate-color-filled · --rate-color-empty`,type:`color`,default:`warning · border-subtle`,description:`선택 및 미선택 별 색상입니다.`}]),l(`WebSquare API · XML`,[{name:`xf:input[type=radio]`,type:`XML element`,default:`type='radio'`,description:`별점 선택용 라디오 입력입니다. 같은 name으로 그룹을 만듭니다.`},{name:`ref · name · value · data:*`,type:`DataCollection binding`,default:`—`,description:`별점 값을 DataMap 경로에 바인딩합니다.`},{name:`w2:group.rate · rate_stars · rate_star`,type:`XML element · class`,default:`—`,description:`별점 루트와 별 선택 구조를 만듭니다.`},{name:`xf:trigger.rate_clear`,type:`XML element · event`,default:`—`,description:`선택한 별점을 초기화하는 동작을 실행합니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`별점 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}var p=t({Basic:()=>b,Clear:()=>w,Color:()=>S,Form:()=>D,Half:()=>C,Playground:()=>v,Readonly:()=>T,Size:()=>x,State:()=>E,Type:()=>y,__namedExportsOrder:()=>O,default:()=>_}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{f(),n(),o(),i(),m=r(),h=e=>()=>(0,m.jsx)(`div`,{className:`demo-stack`,children:e}),g={value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:`md`,legend:`값`,name:`search`},_={title:`폼/Rate`,id:`components-rate`,component:a,tags:[`autodocs`],argTypes:{value:{control:`number`,type:{name:`number`,summary:`number`}},count:{control:`number`,type:{name:`number`,summary:`number`}},allowHalf:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},clearable:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},readonly:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},disabled:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},size:{control:`select`,options:[`sm`,`md`,`lg`],type:{name:`enum`,summary:`'sm' | 'md' | 'lg'`}},legend:{control:`text`,type:{name:`string`,summary:`string`}},name:{control:`text`,type:{name:`string`,summary:`string`}}},parameters:{controls:{disable:!1},layout:`padded`,apiSections:d,docs:{description:{component:`별점으로 평가·표시하는 Rate 컴포넌트입니다.`}}}},v={parameters:{controls:{disable:!1}},args:{...g},render:(e,{updateArgs:t})=>(0,m.jsx)(a,{...e,onChange:e=>t({value:e})})},y={name:`유형`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. `legend` · `aria-labelledby` · `aria-label`을 상황에 맞게 사용합니다."},source:{code:`import Rate from '@uxkm/react/rate';

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
}`,language:`tsx`}}},render:h((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{legend:`legend — 상품 만족도`,value:3,name:`rate-type-legend`}),(0,m.jsx)(a,{value:4,name:`rate-type-labelledby`,legend:`aria-labelledby — 서비스 평가`}),(0,m.jsx)(a,{legend:`aria-label — 단독`,name:`rate-type-aria`,"aria-label":`별점 5점 만점`})]}))},b={name:`기본`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function BasicExample() {
  return <Rate legend="배송 속도" value={3} name="rate-basic" />;
}`,language:`tsx`}}},render:h((0,m.jsx)(a,{legend:`배송 속도`,value:3,name:`rate-basic`}))},x={name:`크기`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function SizeExample() {
  return (
    <>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
    </>
  );
}`,language:`tsx`}}},render:h((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{size:`sm`,legend:`Small — rate_sm`,value:3,name:`rate-size-sm`}),(0,m.jsx)(a,{legend:`Medium — 기본`,value:3,name:`rate-size-md`}),(0,m.jsx)(a,{size:`lg`,legend:`Large — rate_lg`,value:3,name:`rate-size-lg`})]}))},S={name:`색상`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function ColorExample() {
  return (
    <>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>
  );
}`,language:`tsx`}}},render:h((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{className:`color_primary`,legend:`Primary`,value:4,name:`rate-color-primary`}),(0,m.jsx)(a,{className:`color_success`,legend:`Success`,value:5,name:`rate-color-success`}),(0,m.jsx)(a,{className:`color_danger`,legend:`Danger`,value:2,name:`rate-color-danger`})]}))},C={name:`반별`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_allow-half`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 `rate_input-half`를 배치합니다."},source:{code:`import Rate from '@uxkm/react/rate';

export function HalfExample() {
  return (
    <>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>
  );
}`,language:`tsx`}}},render:h((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{allowHalf:!0,legend:`정밀 평가 — rate_allow-half`,value:3.5,name:`rate-half`}),(0,m.jsx)(`p`,{className:`rate_hint`,children:`별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.`})]}))},w={name:`선택 해제`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_clearable`을 추가하면 초기화 버튼으로 값을 지울 수 있습니다."},source:{code:`import Rate from '@uxkm/react/rate';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />;
}`,language:`tsx`}}},render:h((0,m.jsx)(a,{clearable:!0,legend:`만족도 — rate_clearable`,value:4,name:`rate-clear`}))},T={name:`읽기 전용`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`is-readonly`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."},source:{code:`import Rate from '@uxkm/react/rate';

export function ReadonlyExample() {
  return (
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
  );
}`,language:`tsx`}}},render:h((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{readonly:!0,allowHalf:!0,value:4.5}),(0,m.jsx)(a,{readonly:!0,size:`sm`,value:2})]}))},E={name:`상태`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`비활성·오류(is-error) 상태를 지원합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function StateExample() {
  return (
    <>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
  );
}`,language:`tsx`}}},render:h((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{disabled:!0,legend:`비활성`,value:3,name:`rate-state-disabled`}),(0,m.jsx)(a,{className:`is-error`,legend:`오류 — is-error`,name:`rate-state-error`}),(0,m.jsx)(`p`,{className:`form_field-error`,children:`별점을 선택해 주세요.`})]}))},D={name:`폼 레이아웃`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`form_field · form_vertical과 함께 사용합니다.`},source:{code:`import FormLayout from '@uxkm/react/form-layout';
import Rate from '@uxkm/react/rate';

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
}`,language:`tsx`}}},render:h((0,m.jsx)(s,{layout:`vertical`,fit:!0,children:(0,m.jsxs)(`div`,{className:`form_field`,children:[(0,m.jsx)(`span`,{className:`form_field-label`,id:`rate-form-label`,children:`상품 만족도`}),(0,m.jsx)(a,{name:`rate-form`,"aria-labelledby":`rate-form-label`}),(0,m.jsx)(`p`,{className:`form_field-hint`,children:`1~5점 사이로 평가해 주세요.`})]})}))},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

export function BasicExample() {
  return <Rate legend="배송 속도" value={3} name="rate-basic" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Rate legend="배송 속도" value={3} name="rate-basic" />)
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />)
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
        code: \`import Rate from '@uxkm/react/rate';

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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        code: \`import FormLayout from '@uxkm/react/form-layout';
import Rate from '@uxkm/react/rate';

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
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`Type`,`Basic`,`Size`,`Color`,`Half`,`Clear`,`Readonly`,`State`,`Form`]})))()}export{C as a,x as c,k as d,f,D as i,E as l,w as n,p as o,d as p,S as r,T as s,b as t,y as u};
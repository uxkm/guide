import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BY05V9sq.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,r as a}from"./FormLayout-DqL6i1n7.js";var o,s,c,l;function u(){return(u=e((()=>{o=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],s=(e,t,n)=>({title:e,description:n,tables:[{columns:o,rows:t}]}),c=[{name:`value · defaultValue`,type:`number`,default:`—`,description:`현재 별점과 초기 별점입니다.`},{name:`count`,type:`number`,default:`5`,description:`표시할 별의 개수입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`별과 값 텍스트 크기입니다.`},{name:`allowHalf · clearable`,type:`boolean`,default:`false`,description:`0.5점 선택과 선택 초기화 기능입니다.`},{name:`readonly · readOnly · disabled`,type:`boolean`,default:`false`,description:`읽기 전용 표시와 비활성 상태입니다.`},{name:`legend · name`,type:`string`,default:`—`,description:`fieldset 범례와 radio 그룹 이름입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`각 별과 초기화 버튼 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`className · ...props`,type:`string · fieldset attributes`,default:`—`,description:`루트 클래스와 네이티브 속성입니다.`}],l=[s(`React · Next.js API · Props`,c,`Next.js는 @uxkm/react/rate를 재사용합니다.`),s(`React · Next.js API · Events`,[{name:`onChange`,type:`(value?: number) => void`,default:`—`,description:`별점 선택 또는 초기화 콜백입니다.`}]),s(`Vue · Nuxt API`,[{name:`modelValue · update:modelValue`,type:`number · event`,default:`—`,description:`v-model 별점과 변경 이벤트입니다.`},...c.slice(1,7)],`Nuxt는 @uxkm/vue/rate를 재사용합니다.`),s(`HTML · Gulp · 클래스`,[{name:`rate · rate_control · rate_stars · rate_star`,type:`class`,default:`—`,description:`별점 루트와 별 선택 구조입니다.`},{name:`rate_input · rate_star-graphic · rate_star-label`,type:`class`,default:`—`,description:`radio 입력, 아이콘과 접근 가능한 레이블입니다.`},{name:`rate_sm · rate_lg · rate_allow-half · rate_clearable`,type:`class`,default:`—`,description:`크기와 기능 변형입니다.`},{name:`rate_value · rate_clear · is-readonly · is-filled · is-half`,type:`class`,default:`—`,description:`값, 초기화 및 읽기 전용 상태입니다.`}]),s(`디자인 토큰`,[{name:`--rate-star-size · --rate-star-size-sm · --rate-star-size-lg`,type:`length`,default:`1.25rem · 1rem · 1.5rem`,description:`별 아이콘 크기입니다.`},{name:`--rate-star-gap · --rate-clear-size`,type:`length`,default:`0.125rem · 1.5rem`,description:`별 간격과 초기화 버튼 크기입니다.`},{name:`--rate-color-filled · --rate-color-empty`,type:`color`,default:`warning · border-subtle`,description:`선택 및 미선택 별 색상입니다.`}]),s(`WebSquare API · XML`,[{name:`xf:input[type=radio]`,type:`XML element`,default:`type='radio'`,description:`별점 선택용 라디오 입력입니다. 같은 name으로 그룹을 만듭니다.`},{name:`ref · name · value · data:*`,type:`DataCollection binding`,default:`—`,description:`별점 값을 DataMap 경로에 바인딩합니다.`},{name:`w2:group.rate · rate_stars · rate_star`,type:`XML element · class`,default:`—`,description:`별점 루트와 별 선택 구조를 만듭니다.`},{name:`xf:trigger.rate_clear`,type:`XML element · event`,default:`—`,description:`선택한 별점을 초기화하는 동작을 실행합니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`별점 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function d({half:e=!1}){return(0,m.jsxs)(`span`,{className:`rate_star-graphic`,"aria-hidden":`true`,children:[(0,m.jsx)(`svg`,{className:`rate_star-icon`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,m.jsx)(`path`,{d:g})}),(0,m.jsx)(`svg`,{className:`rate_star-icon rate_star-icon-filled`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,m.jsx)(`path`,{d:g})}),e&&(0,m.jsx)(`span`,{className:`rate_star-icon-half`,children:(0,m.jsx)(`svg`,{className:`rate_star-icon`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,m.jsx)(`path`,{d:g})})})]})}function f({value:e,defaultValue:t,count:n=5,allowHalf:r=!1,clearable:i=!1,readOnly:a=!1,readonly:o=!1,disabled:s=!1,size:c=`md`,legend:l,name:u,className:f=``,ripple:g=!0,onChange:_,...v}){let y=(0,p.useId)(),b=u||y,x=Number(n)>0?Number(n):5,S=h.has(c)?c:`md`,C=a||o,[w,T]=(0,p.useState)(e??t),E=(0,p.useMemo)(()=>Array.from({length:x},(e,t)=>t+1),[x]);(0,p.useEffect)(()=>{e!==void 0&&T(e)},[e]);let D=[`rate`,S===`sm`&&`rate_sm`,S===`lg`&&`rate_lg`,r&&`rate_allow-half`,i&&`rate_clearable`,C&&`is-readonly`,f].filter(Boolean).join(` `);function O(e){T(e),_?.(e)}return C?(0,m.jsxs)(`div`,{...v,className:D,"data-component":`Rate`,role:`img`,"aria-label":v[`aria-label`]||`${x}점 만점 중 ${w??0}점`,children:[(0,m.jsx)(`div`,{className:`rate_stars`,children:E.map(e=>{let t=(w??0)>=e?`is-filled`:r&&(w??0)>=e-.5?`is-half`:``;return(0,m.jsx)(`span`,{className:[`rate_star-readonly`,t].filter(Boolean).join(` `),children:(0,m.jsx)(d,{half:t===`is-half`})},e)})}),w!=null&&(0,m.jsx)(`span`,{className:`rate_value`,children:w})]}):(0,m.jsxs)(`fieldset`,{...v,className:D,"data-component":`Rate`,"data-ripple":g?`true`:void 0,disabled:s,children:[l&&(0,m.jsx)(`legend`,{className:`rate_legend`,children:l}),(0,m.jsxs)(`div`,{className:`rate_control`,children:[(0,m.jsx)(`div`,{className:`rate_stars`,children:E.map(e=>(0,m.jsxs)(`label`,{className:`rate_star`,"data-ripple":g?`true`:void 0,children:[r&&(0,m.jsx)(`input`,{type:`radio`,className:`rate_input rate_input-half`,name:b,value:e-.5,checked:w===e-.5,disabled:s,onChange:()=>O(e-.5)}),(0,m.jsx)(`input`,{type:`radio`,className:`rate_input`,name:b,value:e,checked:w===e,disabled:s,onChange:()=>O(e)}),r&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`button`,{type:`button`,className:`rate_star-half rate_star-half-left`,tabIndex:-1,"aria-hidden":`true`,disabled:s,onClick:t=>{t.preventDefault(),t.stopPropagation(),O(e-.5)}}),(0,m.jsx)(`button`,{type:`button`,className:`rate_star-half rate_star-half-right`,tabIndex:-1,"aria-hidden":`true`,disabled:s,onClick:t=>{t.preventDefault(),t.stopPropagation(),O(e)}})]}),(0,m.jsx)(d,{half:r}),(0,m.jsxs)(`span`,{className:`rate_star-label`,children:[e,`점`]})]},e))}),i&&(0,m.jsx)(`button`,{type:`button`,className:`rate_clear`,"data-ripple":g?`true`:void 0,"aria-label":`별점 초기화`,title:`초기화`,onClick:()=>O(void 0),children:(0,m.jsx)(`svg`,{className:`rate_clear-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M18 6L6 18M6 6l12 12`})})}),w!=null&&(0,m.jsxs)(`output`,{className:`rate_value`,children:[w,`점`]})]})]})}var p,m,h,g;function _(){return(_=e((()=>{p=n(),m=r(),h=new Set([`sm`,`md`,`lg`]),g=`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`,f.__docgenInfo={description:``,methods:[],displayName:`Rate`,props:{count:{defaultValue:{value:`5`,computed:!1},required:!1},allowHalf:{defaultValue:{value:`false`,computed:!1},required:!1},clearable:{defaultValue:{value:`false`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},readonly:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1},ripple:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var v=t({Basic:()=>T,Clear:()=>k,Color:()=>D,Form:()=>M,Half:()=>O,Playground:()=>C,Readonly:()=>A,Size:()=>E,State:()=>j,Type:()=>w,__namedExportsOrder:()=>N,default:()=>S}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{u(),n(),i(),_(),y=r(),b=e=>()=>(0,y.jsx)(`div`,{className:`demo-stack`,children:e}),x={value:1,count:5,allowHalf:!1,clearable:!1,readonly:!1,disabled:!1,size:`md`,legend:`값`,name:`search`},S={title:`폼/Rate`,id:`components-rate`,component:f,tags:[`autodocs`],argTypes:{value:{control:`number`,type:{name:`number`,summary:`number`}},count:{control:`number`,type:{name:`number`,summary:`number`}},allowHalf:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},clearable:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},readonly:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},disabled:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},size:{control:`select`,options:[`sm`,`md`,`lg`],type:{name:`enum`,summary:`'sm' | 'md' | 'lg'`}},legend:{control:`text`,type:{name:`string`,summary:`string`}},name:{control:`text`,type:{name:`string`,summary:`string`}}},parameters:{controls:{disable:!1},layout:`padded`,apiSections:l,docs:{description:{component:`별점으로 평가·표시하는 Rate 컴포넌트입니다.`}}}},C={parameters:{controls:{disable:!1}},args:{...x},render:(e,{updateArgs:t})=>(0,y.jsx)(f,{...e,onChange:e=>t({value:e})})},w={name:`유형`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. `legend` · `aria-labelledby` · `aria-label`을 상황에 맞게 사용합니다."},source:{code:`import Rate from '@uxkm/react/rate';

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
}`,language:`tsx`}}},render:b((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{legend:`legend — 상품 만족도`,value:3,name:`rate-type-legend`}),(0,y.jsx)(f,{value:4,name:`rate-type-labelledby`,legend:`aria-labelledby — 서비스 평가`}),(0,y.jsx)(f,{legend:`aria-label — 단독`,name:`rate-type-aria`,"aria-label":`별점 5점 만점`})]}))},T={name:`기본`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function BasicExample() {
  return <Rate legend="배송 속도" value={3} name="rate-basic" />;
}`,language:`tsx`}}},render:b((0,y.jsx)(f,{legend:`배송 속도`,value:3,name:`rate-basic`}))},E={name:`크기`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function SizeExample() {
  return (
    <>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
    </>
  );
}`,language:`tsx`}}},render:b((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{size:`sm`,legend:`Small — rate_sm`,value:3,name:`rate-size-sm`}),(0,y.jsx)(f,{legend:`Medium — 기본`,value:3,name:`rate-size-md`}),(0,y.jsx)(f,{size:`lg`,legend:`Large — rate_lg`,value:3,name:`rate-size-lg`})]}))},D={name:`색상`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function ColorExample() {
  return (
    <>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>
  );
}`,language:`tsx`}}},render:b((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{className:`color_primary`,legend:`Primary`,value:4,name:`rate-color-primary`}),(0,y.jsx)(f,{className:`color_success`,legend:`Success`,value:5,name:`rate-color-success`}),(0,y.jsx)(f,{className:`color_danger`,legend:`Danger`,value:2,name:`rate-color-danger`})]}))},O={name:`반별`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_allow-half`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 `rate_input-half`를 배치합니다."},source:{code:`import Rate from '@uxkm/react/rate';

export function HalfExample() {
  return (
    <>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>
  );
}`,language:`tsx`}}},render:b((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{allowHalf:!0,legend:`정밀 평가 — rate_allow-half`,value:3.5,name:`rate-half`}),(0,y.jsx)(`p`,{className:`rate_hint`,children:`별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.`})]}))},k={name:`선택 해제`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`rate_clearable`을 추가하면 초기화 버튼으로 값을 지울 수 있습니다."},source:{code:`import Rate from '@uxkm/react/rate';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />;
}`,language:`tsx`}}},render:b((0,y.jsx)(f,{clearable:!0,legend:`만족도 — rate_clearable`,value:4,name:`rate-clear`}))},A={name:`읽기 전용`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`is-readonly`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다."},source:{code:`import Rate from '@uxkm/react/rate';

export function ReadonlyExample() {
  return (
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
  );
}`,language:`tsx`}}},render:b((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{readonly:!0,allowHalf:!0,value:4.5}),(0,y.jsx)(f,{readonly:!0,size:`sm`,value:2})]}))},j={name:`상태`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`비활성·오류(is-error) 상태를 지원합니다.`},source:{code:`import Rate from '@uxkm/react/rate';

export function StateExample() {
  return (
    <>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
  );
}`,language:`tsx`}}},render:b((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{disabled:!0,legend:`비활성`,value:3,name:`rate-state-disabled`}),(0,y.jsx)(f,{className:`is-error`,legend:`오류 — is-error`,name:`rate-state-error`}),(0,y.jsx)(`p`,{className:`form_field-error`,children:`별점을 선택해 주세요.`})]}))},M={name:`폼 레이아웃`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`form_field · form_vertical과 함께 사용합니다.`},source:{code:`import FormLayout from '@uxkm/react/form-layout';
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
}`,language:`tsx`}}},render:b((0,y.jsx)(a,{layout:`vertical`,fit:!0,children:(0,y.jsxs)(`div`,{className:`form_field`,children:[(0,y.jsx)(`span`,{className:`form_field-label`,id:`rate-form-label`,children:`상품 만족도`}),(0,y.jsx)(f,{name:`rate-form`,"aria-labelledby":`rate-form-label`}),(0,y.jsx)(`p`,{className:`form_field-hint`,children:`1~5점 사이로 평가해 주세요.`})]})}))},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`Type`,`Basic`,`Size`,`Color`,`Half`,`Clear`,`Readonly`,`State`,`Form`]})))()}export{O as a,E as c,P as d,u as f,M as i,j as l,k as n,v as o,l as p,D as r,A as s,T as t,w as u};
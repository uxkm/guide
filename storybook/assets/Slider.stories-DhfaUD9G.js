import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{F as r,_ as i,d as a,g as o}from"./iframe-BkSPibU3.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{i as c,r as l}from"./FormLayout-DqL6i1n7.js";var u,d,f,p;function m(){return(m=t((()=>{u=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],d=(e,t,n)=>({title:e,description:n,tables:[{columns:u,rows:t}]}),f=[{name:`value · defaultValue`,type:`number`,default:`50`,description:`현재 값과 초기값입니다.`},{name:`min · max · step`,type:`number`,default:`0 · 100 · 1`,description:`값의 범위와 증감 단위입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`트랙·썸·값 텍스트 크기입니다.`},{name:`disabled · vertical`,type:`boolean`,default:`false`,description:`비활성 상태와 방향입니다.`},{name:`label · showValue · valueSuffix · hint`,type:`string · boolean`,default:`—`,description:`레이블, 현재 값, 단위 및 보조 설명입니다.`},{name:`stepper · stepperAlways`,type:`boolean`,default:`false`,description:`증감 버튼을 모바일 또는 항상 표시합니다.`},{name:`decreaseLabel · increaseLabel`,type:`string`,default:`값 줄이기 · 값 늘리기`,description:`증감 버튼의 접근 가능한 이름입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`Slider 영역과 증감 버튼에 클릭 파장 효과를 표시합니다.`},{name:`className · ...props`,type:`string · range attributes`,default:`—`,description:`루트 클래스와 네이티브 range 속성입니다.`}],p=[d(`React · Next.js API · Props`,f,`Next.js는 @uxkm/react/slider를 재사용합니다.`),d(`React · Next.js API · Events`,[{name:`onChange`,type:`(value: number) => void`,default:`—`,description:`값 변경 콜백입니다.`}]),d(`Vue · Nuxt API`,[{name:`modelValue · update:modelValue`,type:`number · event`,default:`50`,description:`v-model 값과 변경 이벤트입니다.`},...f.slice(1,8)],`Nuxt는 @uxkm/vue/slider를 재사용합니다.`),d(`HTML · Gulp · 클래스`,[{name:`slider · slider_input`,type:`class`,default:`—`,description:`슬라이더 루트와 네이티브 range입니다.`},{name:`slider_header · slider_label · slider_value · slider_hint`,type:`class`,default:`—`,description:`레이블, 값 및 설명입니다.`},{name:`slider_sm · slider_lg · slider_fit · slider_block`,type:`class`,default:`—`,description:`크기와 너비 변형입니다.`},{name:`slider_control · slider_stepper · slider_stepper_always · slider_step`,type:`class`,default:`—`,description:`증감 버튼 구조와 표시 방식입니다.`},{name:`slider_ticks · slider_tick`,type:`class`,default:`—`,description:`눈금 구조입니다.`}]),d(`디자인 토큰`,[{name:`--slider-track-height · --slider-thumb-size`,type:`length`,default:`4px · 14px`,description:`기본 트랙과 썸 크기입니다.`},{name:`--slider-max-width`,type:`length`,default:`var(--input-max-width)`,description:`slider_fit의 최대 너비입니다.`},{name:`--slider-step-size · --slider-step-gap`,type:`length`,default:`2.25rem · var(--space-sm)`,description:`증감 버튼 크기와 간격입니다.`}]),d(`WebSquare API · XML`,[{name:`xf:input[type=range]`,type:`XML element`,default:`type='range'`,description:`범위 입력 컴포넌트입니다. min, max, step, value, disabled 속성을 조합합니다.`},{name:`ref · data:*`,type:`DataCollection binding`,default:`—`,description:`슬라이더 값을 DataMap 경로에 양방향 바인딩합니다.`},{name:`w2:group.slider · slider_control · slider_stepper`,type:`XML element · class`,default:`—`,description:`슬라이더 루트와 증감 버튼 구조를 만듭니다.`},{name:`xf:trigger.slider_step`,type:`XML element · event`,default:`—`,description:`값을 한 단계 줄이거나 늘리는 동작을 실행합니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`값 변경 후 표시 갱신이나 연관 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function h({increase:e}){return(0,v.jsxs)(`svg`,{className:`slider_step-icon`,"aria-hidden":`true`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`path`,{d:`M5 12h14`}),e&&(0,v.jsx)(`path`,{d:`M12 5v14`})]})}function g({min:e=0,max:t=100,value:n,defaultValue:r=50,step:i=1,disabled:a=!1,vertical:o=!1,label:s,showValue:c=!1,stepper:l=!1,stepperAlways:u=!1,valueSuffix:d=``,hint:f,decreaseLabel:p=`값 줄이기`,increaseLabel:m=`값 늘리기`,size:g=`md`,id:x,className:S=``,children:C,ripple:w=!0,onChange:T,style:E,...D}){let O=(0,_.useId)(),k=x||O,A=Number(e),j=Number(t),[M,N]=(0,_.useState)(()=>b(n??r,A,j)),P=b(M,A,j),F=y.has(g)?g:`md`,I=j===A?0:(P-A)/(j-A)*100;(0,_.useEffect)(()=>{n!==void 0&&N(b(n,A,j))},[n,A,j]);let L=(0,_.useMemo)(()=>[`slider`,F===`sm`&&`slider_sm`,F===`lg`&&`slider_lg`,o&&`slider_vertical`,l&&`slider_stepper`,u&&`slider_stepper_always`,S].filter(Boolean).join(` `),[F,o,l,u,S]),R=String(D[`data-slider-valuetext-map`]??``).split(`,`).reduce((e,t)=>{let n=t.indexOf(`:`);return n>-1&&(e[t.slice(0,n)]=t.slice(n+1)),e},{})[String(P)]??(D[`data-slider-valuetext-suffix`]?`${P} ${D[`data-slider-valuetext-suffix`]}`:D[`aria-valuetext`]);function z(e){let t=b(e,A,j);N(t),T?.(t)}let B=(0,v.jsx)(`input`,{...D,id:k,type:`range`,className:`slider_input`,min:A,max:j,step:i,value:P,disabled:a,"aria-valuetext":R||void 0,onChange:e=>z(e.target.value)});return(0,v.jsxs)(`div`,{className:L,"data-component":`Slider`,"data-ripple":w?`true`:void 0,style:{"--slider-progress":`${I}%`,...E},children:[(s||c)&&(0,v.jsxs)(`div`,{className:`slider_header`,children:[s&&(0,v.jsx)(`label`,{className:`slider_label`,htmlFor:k,children:s}),c&&(0,v.jsxs)(`output`,{className:`slider_value`,htmlFor:k,children:[P,d||D[`data-slider-suffix`]||``]})]}),l?(0,v.jsxs)(`div`,{className:`slider_control`,children:[(0,v.jsx)(`button`,{type:`button`,className:`slider_step slider_step-decrease`,"data-ripple":`true`,"aria-label":p,disabled:a||P<=A,onClick:()=>z(P-Number(i||1)),children:(0,v.jsx)(h,{})}),B,(0,v.jsx)(`button`,{type:`button`,className:`slider_step slider_step-increase`,"data-ripple":`true`,"aria-label":m,disabled:a||P>=j,onClick:()=>z(P+Number(i||1)),children:(0,v.jsx)(h,{increase:!0})})]}):B,f&&(0,v.jsx)(`p`,{className:`slider_hint`,children:f}),C]})}var _,v,y,b;function x(){return(x=t((()=>{_=r(),v=s(),y=new Set([`sm`,`md`,`lg`]),b=(e,t,n)=>Math.min(n,Math.max(t,Number(e))),g.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{min:{defaultValue:{value:`0`,computed:!1},required:!1},max:{defaultValue:{value:`100`,computed:!1},required:!1},defaultValue:{defaultValue:{value:`50`,computed:!1},required:!1},step:{defaultValue:{value:`1`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},vertical:{defaultValue:{value:`false`,computed:!1},required:!1},showValue:{defaultValue:{value:`false`,computed:!1},required:!1},stepper:{defaultValue:{value:`false`,computed:!1},required:!1},stepperAlways:{defaultValue:{value:`false`,computed:!1},required:!1},valueSuffix:{defaultValue:{value:`''`,computed:!1},required:!1},decreaseLabel:{defaultValue:{value:`'값 줄이기'`,computed:!1},required:!1},increaseLabel:{defaultValue:{value:`'값 늘리기'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1},ripple:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var S=n({Basic:()=>A,Color:()=>I,Form:()=>R,Label:()=>j,Playground:()=>O,Size:()=>M,State:()=>L,Step:()=>P,Stepper:()=>F,Type:()=>k,Width:()=>N,__namedExportsOrder:()=>z,default:()=>D}),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{C=e(r(),1),m(),i(),c(),x(),w=s(),T=e=>(t,{updateArgs:n})=>{let r=e=>C.isValidElement(e)?e.type===g?C.cloneElement(e,{...e.props,...t,onChange:t=>{e.props.onChange?.(t),n?.({value:t})}}):e.props?.children?C.cloneElement(e,{},C.Children.map(e.props.children,r)):e:e;return(0,w.jsx)(`div`,{className:`demo-stack`,children:r(e)})},E={min:0,max:100,value:50,step:1,disabled:!1,vertical:!1,label:`라벨`,showValue:!1,stepper:!1,stepperAlways:!1,valueSuffix:``,hint:``,decreaseLabel:``,increaseLabel:``,size:`md`,ripple:!0,className:``},D={title:`폼/Slider`,id:`components-slider`,component:g,tags:[`autodocs`],args:{...E},argTypes:{...o,min:{control:`number`,type:{name:`number`,summary:`number`}},max:{control:`number`,type:{name:`number`,summary:`number`}},value:{control:`number`,type:{name:`number`,summary:`number`}},step:{control:`number`,type:{name:`number`,summary:`number`}},disabled:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},vertical:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},label:{control:`text`,type:{name:`string`,summary:`string`}},showValue:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},stepper:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},stepperAlways:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},valueSuffix:{control:`text`,type:{name:`string`,summary:`string`}},hint:{control:`text`,type:{name:`string`,summary:`string`}},decreaseLabel:{control:`text`,type:{name:`string`,summary:`string`}},increaseLabel:{control:`text`,type:{name:`string`,summary:`string`}},ripple:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},className:{control:`text`,type:{name:`string`,summary:`string`}},size:{control:`select`,options:[`sm`,`md`,`lg`],type:{name:`enum`,summary:`'sm' | 'md' | 'lg'`}},defaultValue:a,id:{control:`text`,type:{name:`string`,summary:`string`}},onChange:{table:{disable:!0}}},parameters:{controls:{disable:!1},layout:`padded`,apiSections:p,docs:{description:{component:`범위 값을 조절하는 Slider 컴포넌트입니다.`}}}},O={name:`Playground`,parameters:{controls:{disable:!1}},args:{...E},render:(e,{updateArgs:t})=>(0,w.jsx)(g,{...e,onChange:e=>t({value:e})})},k={name:`유형`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 `label for` 또는 `aria-labelledby`를, 레이블 없이 아이콘·단독 UI만 있으면 `aria-label`을 사용합니다. 보조 설명은 `aria-describedby`, 스크린 리더용 값 표현은 `aria-valuetext`와 `output`을 조합합니다."},source:{code:`import Slider from '@uxkm/react/slider';

export function TypeExample() {
  return (
    <>
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        value={40}
        showValue
      />
      <Slider className="slider_fit" value={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        value={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        value={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        value={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다.
      </p>
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{id:`slider-type-label`,className:`slider_fit`,label:`label + for — 기본`,value:40,showValue:!0}),(0,w.jsx)(g,{className:`slider_fit`,value:55,"aria-label":`단독 슬라이더 — aria-label`}),(0,w.jsxs)(`p`,{className:`slider_hint`,children:[`레이블 없이 사용할 때는 `,(0,w.jsx)(`code`,{children:`aria-label`}),`로 접근 가능한 이름을 지정합니다.`]}),(0,w.jsx)(g,{id:`slider-type-labelledby`,className:`slider_fit`,label:`aria-labelledby — 외부 레이블`,value:16,min:12,max:24,step:1,"aria-describedby":`slider-type-labelledby-hint`,"data-slider-valuetext-suffix":`픽셀`,showValue:!0}),(0,w.jsx)(`p`,{className:`slider_hint`,id:`slider-type-labelledby-hint`,children:`12~24px 사이 글자 크기`}),(0,w.jsx)(g,{id:`slider-type-describedby`,className:`slider_fit`,label:`aria-describedby — 보조 설명`,value:70,"aria-describedby":`slider-type-describedby-hint`,"data-slider-suffix":`%`,"data-slider-valuetext-suffix":`퍼센트`,showValue:!0}),(0,w.jsxs)(`p`,{className:`slider_hint`,id:`slider-type-describedby-hint`,children:[`0%는 최소, 100%는 최대 대비입니다. 힌트 id를 `,(0,w.jsx)(`code`,{children:`aria-describedby`}),`에 연결합니다.`]}),(0,w.jsx)(g,{id:`slider-type-valuetext`,className:`slider_fit`,label:`aria-valuetext — 읽기 쉬운 값`,value:3,min:1,max:5,step:1,"data-slider-valuetext-map":`1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음`,showValue:!0}),(0,w.jsxs)(`p`,{className:`slider_hint`,children:[`숫자 대신 `,(0,w.jsx)(`code`,{children:`aria-valuetext`}),`로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 `,(0,w.jsx)(`code`,{children:`aria-hidden="true"`}),`로 중복 낭독을 줄일 수 있습니다.`]})]}))},A={name:`기본`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다.`},source:{code:`import Slider from '@uxkm/react/slider';

export function BasicExample() {
  return <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />;
}`,language:`tsx`}}},render:T((0,w.jsx)(g,{className:`slider_fit`,value:30,"aria-label":`기본 슬라이더`}))},j={name:`레이블 · 값 표시`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다.`},source:{code:`import Slider from '@uxkm/react/slider';

export function LabelExample() {
  return (
    <>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" value={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        value={40}
        data-slider-suffix="%"
        showValue
      />
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{id:`slider-volume`,className:`slider_fit`,label:`볼륨`,value:60,showValue:!0}),(0,w.jsx)(g,{id:`slider-brightness`,className:`slider_fit`,label:`밝기`,value:40,"data-slider-suffix":`%`,showValue:!0})]}))},M={name:`크기`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다.`},source:{code:`import Slider from '@uxkm/react/slider';

export function SizeExample() {
  return (
    <>
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        value={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        value={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        value={70}
        showValue
      />
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{id:`slider-size-sm`,size:`sm`,className:`slider_fit`,label:`Small — slider_sm`,value:30,showValue:!0}),(0,w.jsx)(g,{id:`slider-size-md`,className:`slider_fit`,label:`Medium — 기본`,value:50,showValue:!0}),(0,w.jsx)(g,{id:`slider-size-lg`,size:`lg`,className:`slider_fit`,label:`Large — slider_lg`,value:70,showValue:!0})]}))},N={name:`너비`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다.`},source:{code:`import Slider from '@uxkm/react/slider';

export function WidthExample() {
  return (
    <>
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        value={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        value={65}
        showValue
      />
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{id:`slider-width-fit`,className:`slider_fit`,label:`slider_fit — 최대 320px`,value:45,showValue:!0}),(0,w.jsx)(g,{id:`slider-width-block`,className:`slider_block`,style:{maxWidth:480},label:`slider_block — 전체 너비`,value:65,showValue:!0})]}))},P={name:`간격 · 눈금`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다.`},source:{code:`import Slider from '@uxkm/react/slider';

export function StepExample() {
  return (
    <Slider className="slider_fit" label="step=10" value={50} step={10} showValue />
  );
}`,language:`tsx`}}},render:T((0,w.jsx)(g,{className:`slider_fit`,label:`step=10`,value:50,step:10,showValue:!0}))},F={name:`스텝 버튼`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"모바일(768px 이하)에서 range 드래그가 어려운 경우 `slider_stepper`를 추가합니다. `slider_control` 안에 `slider_step-decrease` · `slider_input` · `slider_step-increase` 순으로 배치하며, 버튼 클릭 시 `step`만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 `slider_stepper_always`를 함께 사용합니다."},source:{code:`import Slider from '@uxkm/react/slider';

export function StepperExample() {
  return (
    <>
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        value={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        value={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        value={30}
        showValue
        disabled
      />
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{className:`slider_fit`,stepper:!0,label:`볼륨 — slider_stepper`,value:60,showValue:!0,decreaseLabel:`볼륨 줄이기`,increaseLabel:`볼륨 늘리기`,hint:`모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요.`}),(0,w.jsx)(g,{className:`slider_fit`,stepper:!0,stepperAlways:!0,label:`밝기 — slider_stepper_always`,value:40,step:5,valueSuffix:`%`,showValue:!0,decreaseLabel:`밝기 줄이기`,increaseLabel:`밝기 늘리기`,hint:`모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다.`}),(0,w.jsx)(g,{className:`slider_fit`,stepper:!0,label:`비활성`,value:30,showValue:!0,disabled:!0})]}))},I={name:`색상`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다.`},source:{code:`import Slider from '@uxkm/react/slider';

export function ColorExample() {
  return (
    <>
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        value={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        value={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        value={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        value={80}
        showValue
      />
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{id:`slider-color-primary`,className:`color_primary slider_fit`,label:`Primary`,value:60,showValue:!0}),(0,w.jsx)(g,{id:`slider-color-success`,className:`color_success slider_fit`,label:`Success`,value:70,showValue:!0}),(0,w.jsx)(g,{id:`slider-color-danger`,className:`color_danger slider_fit`,label:`Danger`,value:40,showValue:!0}),(0,w.jsx)(g,{id:`slider-color-warning`,className:`color_warning slider_fit`,label:`Warning`,value:80,showValue:!0})]}))},L={name:`상태`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`비활성·오류(is-error) 상태를 지원합니다.`},source:{code:`import Slider from '@uxkm/react/slider';

export function StateExample() {
  return (
    <>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,{className:`slider_fit`,label:`기본`,value:50,showValue:!0}),(0,w.jsx)(g,{className:`slider_fit`,label:`비활성`,value:30,disabled:!0,showValue:!0})]}))},R={name:`폼 레이아웃`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`form_field · form_vertical · form_horizontal과 함께 사용합니다.`},source:{code:`import FormLayout from '@uxkm/react/form-layout';
import Slider from '@uxkm/react/slider';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" value={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            value={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" value={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
        </div>
      </FormLayout>
    </>
  );
}`,language:`tsx`}}},render:T((0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(l,{layout:`vertical`,fit:!0,children:[(0,w.jsxs)(`div`,{className:`form_field`,children:[(0,w.jsx)(`label`,{className:`form_field-label`,htmlFor:`slider-form-opacity`,children:`불투명도`}),(0,w.jsx)(g,{id:`slider-form-opacity`,value:85,"data-slider-suffix":`%`}),(0,w.jsx)(`p`,{className:`form_field-hint`,children:`0~100% 사이 값`})]}),(0,w.jsxs)(`div`,{className:`form_field`,children:[(0,w.jsx)(`label`,{className:`form_field-label`,htmlFor:`slider-form-zoom`,children:`확대 비율`}),(0,w.jsx)(g,{id:`slider-form-zoom`,label:`현재 값`,value:125,min:50,max:200,step:25,"data-slider-suffix":`%`,showValue:!0})]})]}),(0,w.jsx)(l,{layout:`horizontal`,fit:!0,children:(0,w.jsxs)(`div`,{className:`form_field`,children:[(0,w.jsx)(`label`,{className:`form_field-label`,htmlFor:`slider-form-horizontal`,children:`선 굵기`}),(0,w.jsx)(g,{id:`slider-form-horizontal`,value:3,min:1,max:10}),(0,w.jsx)(`p`,{className:`form_field-hint`,children:`1~10px`})]})})]}))},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
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
  }) => <Slider {...args} onChange={next => updateArgs({
    value: next
  })} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '유형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 \`label for\` 또는 \`aria-labelledby\`를, 레이블 없이 아이콘·단독 UI만 있으면 \`aria-label\`을 사용합니다. 보조 설명은 \`aria-describedby\`, 스크린 리더용 값 표현은 \`aria-valuetext\`와 \`output\`을 조합합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function TypeExample() {
  return (
    <>
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        value={40}
        showValue
      />
      <Slider className="slider_fit" value={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        value={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        value={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        value={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다.
      </p>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Slider id="slider-type-label" className="slider_fit" label="label + for — 기본" value={40} showValue />
      <Slider className="slider_fit" value={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider id="slider-type-labelledby" className="slider_fit" label="aria-labelledby — 외부 레이블" value={16} min={12} max={24} step={1} aria-describedby="slider-type-labelledby-hint" data-slider-valuetext-suffix="픽셀" showValue />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider id="slider-type-describedby" className="slider_fit" label="aria-describedby — 보조 설명" value={70} aria-describedby="slider-type-describedby-hint" data-slider-suffix="%" data-slider-valuetext-suffix="퍼센트" showValue />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider id="slider-type-valuetext" className="slider_fit" label="aria-valuetext — 읽기 쉬운 값" value={3} min={1} max={5} step={1} data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음" showValue />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적
        output은 <code>aria-hidden=&quot;true&quot;</code>로 중복 낭독을 줄일 수 있습니다.
      </p>
    </>)
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
        story: 'slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function BasicExample() {
  return <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />)
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '레이블 · 값 표시',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function LabelExample() {
  return (
    <>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" value={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        value={40}
        data-slider-suffix="%"
        showValue
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" value={60} showValue />
      <Slider id="slider-brightness" className="slider_fit" label="밝기" value={40} data-slider-suffix="%" showValue />
    </>)
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        story: 'slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function SizeExample() {
  return (
    <>
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        value={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        value={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        value={70}
        showValue
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Slider id="slider-size-sm" size="sm" className="slider_fit" label="Small — slider_sm" value={30} showValue />
      <Slider id="slider-size-md" className="slider_fit" label="Medium — 기본" value={50} showValue />
      <Slider id="slider-size-lg" size="lg" className="slider_fit" label="Large — slider_lg" value={70} showValue />
    </>)
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
        story: '기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function WidthExample() {
  return (
    <>
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        value={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        value={65}
        showValue
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Slider id="slider-width-fit" className="slider_fit" label="slider_fit — 최대 320px" value={45} showValue />
      <Slider id="slider-width-block" className="slider_block" style={{
      maxWidth: 480
    }} label="slider_block — 전체 너비" value={65} showValue />
    </>)
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '간격 · 눈금',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function StepExample() {
  return (
    <Slider className="slider_fit" label="step=10" value={50} step={10} showValue />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Slider className="slider_fit" label="step=10" value={50} step={10} showValue />)
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '스텝 버튼',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '모바일(768px 이하)에서 range 드래그가 어려운 경우 \`slider_stepper\`를 추가합니다. \`slider_control\` 안에 \`slider_step-decrease\` · \`slider_input\` · \`slider_step-increase\` 순으로 배치하며, 버튼 클릭 시 \`step\`만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 \`slider_stepper_always\`를 함께 사용합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function StepperExample() {
  return (
    <>
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        value={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        value={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        value={30}
        showValue
        disabled
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Slider className="slider_fit" stepper label="볼륨 — slider_stepper" value={60} showValue decreaseLabel="볼륨 줄이기" increaseLabel="볼륨 늘리기" hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요." />
      <Slider className="slider_fit" stepper stepperAlways label="밝기 — slider_stepper_always" value={40} step={5} valueSuffix="%" showValue decreaseLabel="밝기 줄이기" increaseLabel="밝기 늘리기" hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다." />
      <Slider className="slider_fit" stepper label="비활성" value={30} showValue disabled />
    </>)
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '색상',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function ColorExample() {
  return (
    <>
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        value={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        value={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        value={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        value={80}
        showValue
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Slider id="slider-color-primary" className="color_primary slider_fit" label="Primary" value={60} showValue />
      <Slider id="slider-color-success" className="color_success slider_fit" label="Success" value={70} showValue />
      <Slider id="slider-color-danger" className="color_danger slider_fit" label="Danger" value={40} showValue />
      <Slider id="slider-color-warning" className="color_warning slider_fit" label="Warning" value={80} showValue />
    </>)
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '비활성·오류(is-error) 상태를 지원합니다.'
      },
      source: {
        code: \`import Slider from '@uxkm/react/slider';

export function StateExample() {
  return (
    <>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
    </>)
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
        story: 'form_field · form_vertical · form_horizontal과 함께 사용합니다.'
      },
      source: {
        code: \`import FormLayout from '@uxkm/react/form-layout';
import Slider from '@uxkm/react/slider';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" value={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            value={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" value={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
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
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" value={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider id="slider-form-zoom" label="현재 값" value={125} min={50} max={200} step={25} data-slider-suffix="%" showValue />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" value={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
        </div>
      </FormLayout>
    </>)
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`Type`,`Basic`,`Label`,`Size`,`Width`,`Step`,`Stepper`,`Color`,`State`,`Form`]})))()}export{M as a,P as c,N as d,B as f,j as i,F as l,p as m,I as n,S as o,m as p,R as r,L as s,A as t,k as u};
import{r,d as Te,u as Be,c as Oe,n as qe,j as e,B as J,I as K,a as He,b as Ue}from"./iframe-ifEc15ad.js";import{F as Q}from"./FormLayout-BSDQd5Xp.js";import{w as a}from"./story-renders-Hdz_JUlO.js";import{f as $e,a as Ze}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const Ge=new Set(["sm","md","lg"]),Je=Ue("Slider",{defaults:{min:0,max:100,value:50,size:"md"},booleanProps:new Set(["disabled","vertical","showValue","stepper","stepperAlways"]),skipProps:["modelValue"],selfClosing:!0});function l({ripple:i,min:N=0,max:V=100,value:d=50,step:j,disabled:t,vertical:k,label:o,showValue:z,stepper:n,stepperAlways:L,valueSuffix:R,hint:C,decreaseLabel:D,increaseLabel:I,size:A="md",id:W,children:M,className:T,style:B,onChange:c,...O}){const q=r.useRef(null),{rippleAttrs:Fe,childRippleAttrs:H}=Te({ripple:i},{mode:"container"}),Pe=r.useId(),F=W||Pe,m=Ge.has(A)?A:"md",P=Number(N),E=Number(V),[Ee,U]=r.useState(()=>Number(d));r.useEffect(()=>{d!==void 0&&U(Number(d))},[d]);const u=Ee,Re=`${u}${R??""}`;Be(Je,{ripple:i,min:P,max:E,value:u,step:j,disabled:t,vertical:k,label:o,showValue:z,stepper:n,stepperAlways:L,valueSuffix:R,hint:C,decreaseLabel:D,increaseLabel:I,size:m},Oe({default:M}),q,{className:T,style:B,id:W,onChange:c,...O});const De=r.useMemo(()=>{const s=["slider"];return m==="sm"&&s.push("slider_sm"),m==="lg"&&s.push("slider_lg"),k&&s.push("slider_vertical"),n&&s.push("slider_stepper"),L&&s.push("slider_stepper_always"),s},[m,k,n,L]),{class:ol,id:nl,value:cl,style:ml,onChange:ul,onInput:pl,...Ie}=O,Ae=qe(Ie);function $(s){U(s),c==null||c(s)}function We(s){$(Number(s.target.value))}function Z(s){const Me=Math.min(E,Math.max(P,u+s*(j??1)));$(Me)}const G=e.jsx("input",{id:F,type:"range",className:"slider_input",min:P,max:E,step:j,value:u,disabled:t,...Ae,onChange:We});return e.jsxs("div",{ref:q,className:He(De,T),style:B,...Fe,children:[o||z?e.jsxs("div",{className:"slider_header",children:[o?e.jsx("label",{className:"slider_label",htmlFor:F,children:o}):null,z?e.jsx("output",{className:"slider_value",htmlFor:F,children:Re}):null]}):null,n?e.jsxs("div",{className:"slider_control",children:[e.jsx(J,{variant:"ghost",size:"sm",iconOnly:!0,className:"slider_step slider_step-decrease",ariaLabel:D||"값 줄이기",disabled:t,iconBefore:e.jsx(K,{name:"minus",size:"sm",className:"slider_step-icon"}),onClick:()=>Z(-1),...H}),G,e.jsx(J,{variant:"ghost",size:"sm",iconOnly:!0,className:"slider_step slider_step-increase",ariaLabel:I||"값 늘리기",disabled:t,iconBefore:e.jsx(K,{name:"plus",size:"sm",className:"slider_step-icon"}),onClick:()=>Z(1),...H})]}):G,C?e.jsx("p",{className:"slider_hint",children:C}):null,M]})}l.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},value:{defaultValue:{value:"50",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const Ke=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"model-value",type:"number",default:"—",description:"v-model 바인딩 값"},{name:"value",type:"number",default:"50",description:"model-value 없을 때 기본값"},{name:"min",type:"number",default:"0",description:"최솟값"},{name:"max",type:"number",default:"100",description:"최댓값"},{name:"step",type:"number",default:"—",description:"증감 단위"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"slider_sm · slider_lg"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"vertical",type:"boolean",default:"false",description:"세로 슬라이더"},{name:"label",type:"string",default:"—",description:"상단 라벨"},{name:"show-value",type:"boolean",default:"false",description:"현재 값 output 표시"},{name:"value-suffix",type:"string",default:"—",description:"값 뒤 단위 (%, px 등)"},{name:"hint",type:"string",default:"—",description:"하단 힌트 텍스트"},{name:"stepper",type:"boolean",default:"false",description:"± 스텝 버튼 (slider_stepper)"},{name:"stepper-always",type:"boolean",default:"false",description:"스텝 버튼 항상 표시"},{name:"decrease-label",type:"string",default:"값 줄이기",description:"감소 버튼 aria-label"},{name:"increase-label",type:"string",default:"값 늘리기",description:"증가 버튼 aria-label"},$e],Xe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ye=[{name:"slider",description:"슬라이더 루트"},{name:"slider_sm · slider_lg · slider_vertical",description:"크기·방향"},{name:"slider_stepper · slider_stepper_always",description:"스텝 버튼 모드"},{name:"slider_header · slider_label · slider_value · slider_hint",description:"헤더·힌트"},{name:"slider_input · slider_control · slider_step",description:"range·스텝 버튼"},{name:"slider_ticks · slider_tick",description:"눈금 (HTML 마크업)"},...Ze],el=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],ll=[{name:"update:modelValue",description:"값 변경 시 (v-model)"}],sl=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],al=[{name:"--slider-track-height · --slider-thumb-size",default:"4px · 14px",description:"트랙·썸 크기 (md)"},{name:"--slider-max-width",default:"var(--input-max-width)",description:"최대 너비"},{name:"--slider-step-size",default:"2.25rem",description:"스텝 버튼 크기"}],rl=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],il=[{name:"children",description:"추가 콘텐츠 (눈금 등). Vue default 슬롯 대응"}],dl=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 model-value · show-value · value-suffix · stepper-always는 value · onChange · showValue · valueSuffix · stepperAlways로 다룹니다.",tables:[{columns:Ke,rows:Qe,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:rl,rows:il,codeColumn:"name"}]},{title:"API · Events",description:"Vue update:modelValue는 React onChange(number)에 대응합니다.",tables:[{columns:el,rows:ll,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Xe,rows:Ye,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:sl,rows:al,codeColumn:"name"}]}],tl={min:0,max:100,value:50,step:1,disabled:!1,vertical:!1,label:"라벨",showValue:!1,stepper:!1,stepperAlways:!1,valueSuffix:"",hint:"",decreaseLabel:"",increaseLabel:"",size:"md"},yl={title:"Components/폼/Slider",id:"components-slider",component:l,tags:["autodocs"],argTypes:{min:{control:"number",type:{name:"number",summary:"number"}},max:{control:"number",type:{name:"number",summary:"number"}},value:{control:"number",type:{name:"number",summary:"number"}},step:{control:"number",type:{name:"number",summary:"number"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},showValue:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stepper:{control:"boolean",type:{name:"boolean",summary:"boolean"}},stepperAlways:{control:"boolean",type:{name:"boolean",summary:"boolean"}},valueSuffix:{control:"text",type:{name:"string",summary:"string"}},hint:{control:"text",type:{name:"string",summary:"string"}},decreaseLabel:{control:"text",type:{name:"string",summary:"string"}},increaseLabel:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:dl,docs:{description:{component:"범위 값을 조절하는 Slider 컴포넌트입니다."}}}},p={parameters:{controls:{disable:!1}},args:{...tl},render:(i,{updateArgs:N})=>e.jsx(l,{...i,onChange:V=>N({value:V})})},f={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 `label for` 또는 `aria-labelledby`를, 레이블 없이 아이콘·단독 UI만 있으면 `aria-label`을 사용합니다. 보조 설명은 `aria-describedby`, 스크린 리더용 값 표현은 `aria-valuetext`와 `output`을 조합합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"slider-type-label",className:"slider_fit",label:"label + for — 기본",value:40,showValue:!0}),e.jsx(l,{className:"slider_fit",value:55,"aria-label":"단독 슬라이더 — aria-label"}),e.jsxs("p",{className:"slider_hint",children:["레이블 없이 사용할 때는 ",e.jsx("code",{children:"aria-label"}),"로 접근 가능한 이름을 지정합니다."]}),e.jsx(l,{id:"slider-type-labelledby",className:"slider_fit",label:"aria-labelledby — 외부 레이블",value:16,min:12,max:24,step:1,"aria-describedby":"slider-type-labelledby-hint","data-slider-valuetext-suffix":"픽셀",showValue:!0}),e.jsx("p",{className:"slider_hint",id:"slider-type-labelledby-hint",children:"12~24px 사이 글자 크기"}),e.jsx(l,{id:"slider-type-describedby",className:"slider_fit",label:"aria-describedby — 보조 설명",value:70,"aria-describedby":"slider-type-describedby-hint","data-slider-suffix":"%","data-slider-valuetext-suffix":"퍼센트",showValue:!0}),e.jsxs("p",{className:"slider_hint",id:"slider-type-describedby-hint",children:["0%는 최소, 100%는 최대 대비입니다. 힌트 id를 ",e.jsx("code",{children:"aria-describedby"}),"에 연결합니다."]}),e.jsx(l,{id:"slider-type-valuetext",className:"slider_fit",label:"aria-valuetext — 읽기 쉬운 값",value:3,min:1,max:5,step:1,"data-slider-valuetext-map":"1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음",showValue:!0}),e.jsxs("p",{className:"slider_hint",children:["숫자 대신 ",e.jsx("code",{children:"aria-valuetext"}),"로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적 output은 ",e.jsx("code",{children:'aria-hidden="true"'}),"로 중복 낭독을 줄일 수 있습니다."]})]}))},b={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

export function BasicExample() {
  return <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />;
}`,language:"tsx"}}},render:a(e.jsx(l,{className:"slider_fit",value:30,"aria-label":"기본 슬라이더"}))},x={name:"레이블 · 값 표시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"slider-volume",className:"slider_fit",label:"볼륨",value:60,showValue:!0}),e.jsx(l,{id:"slider-brightness",className:"slider_fit",label:"밝기",value:40,"data-slider-suffix":"%",showValue:!0})]}))},_={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"slider-size-sm",size:"sm",className:"slider_fit",label:"Small — slider_sm",value:30,showValue:!0}),e.jsx(l,{id:"slider-size-md",className:"slider_fit",label:"Medium — 기본",value:50,showValue:!0}),e.jsx(l,{id:"slider-size-lg",size:"lg",className:"slider_fit",label:"Large — slider_lg",value:70,showValue:!0})]}))},h={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"slider-width-fit",className:"slider_fit",label:"slider_fit — 최대 320px",value:45,showValue:!0}),e.jsx(l,{id:"slider-width-block",className:"slider_block",style:{maxWidth:480},label:"slider_block — 전체 너비",value:65,showValue:!0})]}))},v={name:"간격 · 눈금",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

export function StepExample() {
  return (
    <Slider className="slider_fit" label="step=10" value={50} step={10} showValue />
  );
}`,language:"tsx"}}},render:a(e.jsx(l,{className:"slider_fit",label:"step=10",value:50,step:10,showValue:!0}))},y={name:"스텝 버튼",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"모바일(768px 이하)에서 range 드래그가 어려운 경우 `slider_stepper`를 추가합니다. `slider_control` 안에 `slider_step-decrease` · `slider_input` · `slider_step-increase` 순으로 배치하며, 버튼 클릭 시 `step`만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 `slider_stepper_always`를 함께 사용합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{className:"slider_fit",stepper:!0,label:"볼륨 — slider_stepper",value:60,showValue:!0,decreaseLabel:"볼륨 줄이기",increaseLabel:"볼륨 늘리기",hint:"모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."}),e.jsx(l,{className:"slider_fit",stepper:!0,stepperAlways:!0,label:"밝기 — slider_stepper_always",value:40,step:5,valueSuffix:"%",showValue:!0,decreaseLabel:"밝기 줄이기",increaseLabel:"밝기 늘리기",hint:"모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."}),e.jsx(l,{className:"slider_fit",stepper:!0,label:"비활성",value:30,showValue:!0,disabled:!0})]}))},S={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"slider-color-primary",className:"color_primary slider_fit",label:"Primary",value:60,showValue:!0}),e.jsx(l,{id:"slider-color-success",className:"color_success slider_fit",label:"Success",value:70,showValue:!0}),e.jsx(l,{id:"slider-color-danger",className:"color_danger slider_fit",label:"Danger",value:40,showValue:!0}),e.jsx(l,{id:"slider-color-warning",className:"color_warning slider_fit",label:"Warning",value:80,showValue:!0})]}))},w={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"비활성·오류(is-error) 상태를 지원합니다."},source:{code:`import Slider from '@uxkm/ui-react/components/Slider.jsx';

export function StateExample() {
  return (
    <>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(l,{className:"slider_fit",label:"기본",value:50,showValue:!0}),e.jsx(l,{className:"slider_fit",label:"비활성",value:30,disabled:!0,showValue:!0})]}))},g={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_field · form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs(Q,{layout:"vertical",fit:!0,children:[e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"slider-form-opacity",children:"불투명도"}),e.jsx(l,{id:"slider-form-opacity",value:85,"data-slider-suffix":"%"}),e.jsx("p",{className:"form_field-hint",children:"0~100% 사이 값"})]}),e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"slider-form-zoom",children:"확대 비율"}),e.jsx(l,{id:"slider-form-zoom",label:"현재 값",value:125,min:50,max:200,step:25,"data-slider-suffix":"%",showValue:!0})]})]}),e.jsx(Q,{layout:"horizontal",fit:!0,children:e.jsxs("div",{className:"form_field",children:[e.jsx("label",{className:"form_field-label",htmlFor:"slider-form-horizontal",children:"선 굵기"}),e.jsx(l,{id:"slider-form-horizontal",value:3,min:1,max:10}),e.jsx("p",{className:"form_field-hint",children:"1~10px"})]})})]}))};var X,Y,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var le,se,ae;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(ae=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,ie,de;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

export function BasicExample() {
  return <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />;
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />)
}`,...(de=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var te,oe,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ce,me,ue;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(ue=(me=_.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,fe,be;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(be=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var xe,_e,he;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(he=(_e=v.parameters)==null?void 0:_e.docs)==null?void 0:he.source}}};var ve,ye,Se;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(Se=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var we,ge,Ne;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(Ne=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Ne.source}}};var Ve,je,ke;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
        code: \`import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(ke=(je=w.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var ze,Le,Ce;g.parameters={...g.parameters,docs:{...(ze=g.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
        code: \`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Slider from '@uxkm/ui-react/components/Slider.jsx';

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
}`,...(Ce=(Le=g.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source}}};const Sl=["Playground","Type","Basic","Label","Size","Width","Step","Stepper","Color","State","Form"];export{b as Basic,S as Color,g as Form,x as Label,p as Playground,_ as Size,w as State,v as Step,y as Stepper,f as Type,h as Width,Sl as __namedExportsOrder,yl as default};

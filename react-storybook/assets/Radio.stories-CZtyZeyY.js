import{d as La,r as M,u as Pa,c as Fa,n as Ma,j as a,a as D,b as Da}from"./iframe-ifEc15ad.js";import{F as A}from"./FormLayout-BSDQd5Xp.js";import{w as r}from"./story-renders-Hdz_JUlO.js";import{e as Ia,a as Ba}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const Ta=Da("Radio",{booleanProps:new Set(["checked","disabled","labelEnd","button","ripple"]),selfClosing:!0});function e({ripple:d,label:l,name:i,checked:n,defaultChecked:t,disabled:m,value:p,labelEnd:s,button:o,ariaLabel:u,children:c,className:b,onChange:E,id:B,...T}){const{rippleAttrs:za}=La({ripple:d},{defaultEnabled:!1}),_=M.useRef(null),h=c??l,L=!(!!l||c!=null&&c!==""),W=M.useMemo(()=>d===!1?{"data-ripple":"false"}:d===!0||L||o?{"data-ripple":"true"}:{},[d,L,o]);Pa(Ta,{ripple:d,label:l,name:i,checked:n,disabled:m,value:p,labelEnd:s,button:o,ariaLabel:u},Fa({default:h}),_,{className:b,id:B,onChange:E,...T});const U=M.useMemo(()=>{const F=["radio"];return s&&F.push("radio_label-end"),o&&F.push("radio_button"),F},[s,o]),{class:Qa,...Sa}=T,Ca=Ma(Sa),Ea=E!=null?{checked:!!n,onChange:E}:n!=null?{defaultChecked:!!n}:t!=null?{defaultChecked:!!t}:{},P=a.jsx("input",{id:B,type:"radio",className:"radio_input",name:i,value:p,disabled:m,...Ea,...Ca});return L?a.jsxs("label",{ref:_,className:D("radio_control",b),"aria-label":u,...W,children:[P,a.jsx("span",{className:"radio_box","aria-hidden":"true"})]}):o?a.jsxs("label",{ref:_,className:D(U,b),...W,children:[P,a.jsx("span",{className:"radio_label",children:h})]}):a.jsxs("label",{ref:_,className:D(U,b),...za,children:[s?a.jsx("span",{className:"radio_label",children:h}):null,a.jsxs("span",{className:"radio_control",children:[P,a.jsx("span",{className:"radio_box","aria-hidden":"true"})]}),s?null:a.jsx("span",{className:"radio_label",children:h})]})}e.__docgenInfo={description:"",methods:[],displayName:"Radio"};const Wa=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ua=[{name:"label",type:"string",default:"—",description:"라벨 텍스트. default 슬롯으로 대체"},{name:"name",type:"string",default:"—",description:"radio 그룹 name 속성"},{name:"value",type:"string",default:"—",description:"radio value 속성"},{name:"checked",type:"boolean",default:"false",description:"선택 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"label-end",type:"boolean",default:"false",description:"라벨을 라디오 앞에 배치"},{name:"button",type:"boolean",default:"false",description:"버튼형 (radio_button)"},{name:"aria-label",type:"string",default:"—",description:"라벨 없는 단독 라디오 시 필수"},Ia],Aa=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Va=[{name:"radio",description:"라디오 래퍼"},{name:"radio_control · radio_input · radio_box",description:"입력·커스텀 원"},{name:"radio_label",description:"라벨"},{name:"radio_label-end · radio_button",description:"레이아웃 변형"},{name:"radio_group",description:"fieldset 그룹"},{name:"radio_card · radio_card-clickable",description:"카드형 — clickable은 data-ripple + JS 위임"},...Ba],Ga=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Xa=[{name:"--radio-size · --radio-size-sm · --radio-size-lg",default:"var(--checkbox-size) · … · …",description:"라디오 원 크기 (checkbox 토큰 참조)"},{name:"--radio-gap · --radio-gap-sm · --radio-gap-lg",default:"var(--checkbox-gap) · … · …",description:"라벨 간격"},{name:"--radio-font-size · --radio-line-height",default:"var(--checkbox-font-size) · var(--checkbox-line-height)",description:"라벨 타이포"},{name:"--radio-label-weight · --radio-hint-size",default:"var(--checkbox-label-weight) · var(--checkbox-hint-size)",description:"라벨·힌트"},{name:"--radio-control-offset",default:"var(--checkbox-control-offset)",description:"원 수직 정렬"},{name:"--radio-group-gap",default:"var(--checkbox-group-gap)",description:"그룹 간격"},{name:"--radio-button-padding-y · --radio-button-padding-x",default:"var(--checkbox-button-padding-y) · var(--checkbox-button-padding-x)",description:"버튼형 패딩"}],Ja=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Oa=[{name:"label",description:"라벨 텍스트. children으로 대체 가능"},{name:"children",description:"라벨 텍스트 (label prop 대체, Vue default 슬롯 대응). radio_content · radio_hint 조합 가능"}],Ha=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: label-end, aria-label)와 동일한 의미입니다.",tables:[{columns:Wa,rows:Ua,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React label·children prop입니다.",tables:[{columns:Ja,rows:Oa,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Aa,rows:Va,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ga,rows:Xa,codeColumn:"name"}]}],$a={label:"라벨",name:"playground",checked:!1,disabled:!1,value:"1",labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},de={title:"Components/폼/Radio",id:"components-radio",component:e,tags:["autodocs"],argTypes:{label:{control:"text",type:{name:"string",summary:"string"}},name:{control:"text",type:{name:"string",summary:"string"}},checked:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},value:{control:"text",type:{name:"string",summary:"string"}},labelEnd:{control:"boolean",type:{name:"boolean",summary:"boolean"}},button:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ha,docs:{description:{component:"단일 선택이 가능한 라디오 버튼 컴포넌트입니다."}}}},g={parameters:{controls:{disable:!1}},args:{...$a},render:(d,{updateArgs:l})=>a.jsx(e,{...d,onChange:i=>l({checked:i.target.checked})})},f={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 wrapping `label.radio` 안에 `span.radio_control` + `span.radio_label` 순서입니다. 보이는 레이블이 없으면 `label.radio_control`로 input을 암묵 연결합니다. `radio_label-end`는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function TypeExample() {
  return (
    <>
      <Radio name="radio-type-basic" checked label="기본 — radio" />
      <Radio name="radio-type-label-end" labelEnd label="레이블 뒤 — radio_label-end" />
      <fieldset className="radio_group radio_group_horizontal">
        <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
        <Radio button name="radio-type-btn" value="b" label="UI" />
        <Radio button name="radio-type-btn" value="c" label="UX" />
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(e,{name:"radio-type-basic",checked:!0,label:"기본 — radio"}),a.jsx(e,{name:"radio-type-label-end",labelEnd:!0,label:"레이블 뒤 — radio_label-end"}),a.jsxs("fieldset",{className:"radio_group radio_group_horizontal",children:[a.jsx(e,{button:!0,name:"radio-type-btn",checked:!0,value:"a",label:"버튼형"}),a.jsx(e,{button:!0,name:"radio-type-btn",value:"b",label:"UI"}),a.jsx(e,{button:!0,name:"radio-type-btn",value:"c",label:"UX"})]})]}))},x={name:"레이블 뒤",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`radio_label-end`는 `radio_label` → `radio_control` 순으로 마크업합니다. 전체 너비가 필요하면 `radio_block` 또는 `radio_group_block`을 추가합니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function LabelEndExample() {
  return (
    <>
      <Radio name="radio-label-end-pay" labelEnd checked label="신용카드" />
      <Radio name="radio-label-end-pay2" labelEnd>
        <span className="radio_content">
          <span className="radio_label">계좌이체</span>
          <span className="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(e,{name:"radio-label-end-pay",labelEnd:!0,checked:!0,label:"신용카드"}),a.jsx(e,{name:"radio-label-end-pay2",labelEnd:!0,children:a.jsxs("span",{className:"radio_content",children:[a.jsx("span",{className:"radio_label",children:"계좌이체"}),a.jsx("span",{className:"radio_hint",children:"등록된 계좌로 결제합니다."})]})}),a.jsxs("fieldset",{className:"radio_group radio_group_block",style:{maxWidth:360,width:"100%"},children:[a.jsx("legend",{className:"radio_group-legend",children:"배송 방법 — radio_group_block"}),a.jsx(e,{name:"radio-label-end-ship",labelEnd:!0,checked:!0,value:"standard",label:"일반 배송"}),a.jsx(e,{name:"radio-label-end-ship",labelEnd:!0,value:"express",label:"빠른 배송"})]}),a.jsx(e,{className:"radio_sm",name:"radio-label-end-size",labelEnd:!0,checked:!0,label:"Small — radio_sm"}),a.jsx(e,{className:"radio_lg",name:"radio-label-end-size2",labelEnd:!0,checked:!0,label:"Large — radio_lg"})]}))},v={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="radio-pay-label">
        결제 수단
      </span>
      <fieldset className="radio_group" aria-labelledby="radio-pay-label">
        <Radio name="radio-pay" checked value="card">
          <span className="radio_content">
            <span className="radio_label">신용카드</span>
            <span className="radio_hint">Visa · Mastercard · 국내 카드</span>
          </span>
        </Radio>
        <Radio name="radio-pay" value="bank">
          <span className="radio_content">
            <span className="radio_label">계좌이체</span>
            <span className="radio_hint">등록된 계좌로 결제합니다.</span>
          </span>
        </Radio>
      </fieldset>
    </div>
  );
}`,language:"tsx"}}},render:r(a.jsxs("div",{className:"form_field",children:[a.jsx("span",{className:"form_field-label",id:"radio-pay-label",children:"결제 수단"}),a.jsxs("fieldset",{className:"radio_group","aria-labelledby":"radio-pay-label",children:[a.jsx(e,{name:"radio-pay",checked:!0,value:"card",children:a.jsxs("span",{className:"radio_content",children:[a.jsx("span",{className:"radio_label",children:"신용카드"}),a.jsx("span",{className:"radio_hint",children:"Visa · Mastercard · 국내 카드"})]})}),a.jsx(e,{name:"radio-pay",value:"bank",children:a.jsxs("span",{className:"radio_content",children:[a.jsx("span",{className:"radio_label",children:"계좌이체"}),a.jsx("span",{className:"radio_hint",children:"등록된 계좌로 결제합니다."})]})})]})]}))},N={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function StandaloneExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" ariaLabel="항목 선택" />
      <Radio name="radio-standalone" checked ariaLabel="선택됨" />
      <Radio name="radio-standalone-disabled" disabled ariaLabel="비활성" />
    </div>
  );
}`,language:"tsx"}}},render:r(a.jsxs("div",{className:"radio_group radio_group_horizontal",children:[a.jsx(e,{name:"radio-standalone",ariaLabel:"항목 선택"}),a.jsx(e,{name:"radio-standalone",checked:!0,ariaLabel:"선택됨"}),a.jsx(e,{name:"radio-standalone-disabled",disabled:!0,ariaLabel:"비활성"})]}))},k={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function SizeExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio className="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio className="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>
  );
}`,language:"tsx"}}},render:r(a.jsxs("div",{className:"radio_group radio_group_horizontal",children:[a.jsx(e,{className:"radio_sm",name:"radio-size",checked:!0,label:"Small — radio_sm"}),a.jsx(e,{name:"radio-size",label:"Medium — 기본"}),a.jsx(e,{className:"radio_lg",name:"radio-size",label:"Large — radio_lg"})]}))},R={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function WidthExample() {
  return (
    <>
      <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
      <Radio name="radio-width-block" className="radio_block" checked label="radio_block — 전체 너비" />
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(e,{name:"radio-width-inline",checked:!0,label:"기본 — 인라인 너비"}),a.jsx(e,{name:"radio-width-block",className:"radio_block",checked:!0,label:"radio_block — 전체 너비"}),a.jsxs("fieldset",{className:"radio_group radio_group_block",style:{maxWidth:360,width:"100%"},children:[a.jsx("legend",{className:"radio_group-legend",children:"radio_group_block"}),a.jsx(e,{name:"radio-width-g1",checked:!0,label:"항목 1"}),a.jsx(e,{name:"radio-width-g1",label:"항목 2"})]})]}))},y={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function ColorExample() {
  return (
    <>
      <Radio className="color_primary" name="radio-color-primary" checked label="Primary" />
      <Radio className="color_success" name="radio-color-success" checked label="Success" />
      <Radio className="color_danger" name="radio-color-danger" checked label="Danger" />
      <Radio className="color_warning" name="radio-color-warning" checked label="Warning" />
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(e,{className:"color_primary",name:"radio-color-primary",checked:!0,label:"Primary"}),a.jsx(e,{className:"color_success",name:"radio-color-success",checked:!0,label:"Success"}),a.jsx(e,{className:"color_danger",name:"radio-color-danger",checked:!0,label:"Danger"}),a.jsx(e,{className:"color_warning",name:"radio-color-warning",checked:!0,label:"Warning"})]}))},j={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"선택·미선택·비활성·오류(is-error) 상태를 지원합니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function StateExample() {
  return (
    <>
      <Radio name="radio-state" label="미선택" />
      <Radio name="radio-state" checked label="선택됨" />
      <Radio name="radio-state-disabled" disabled label="비활성" />
      <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(e,{name:"radio-state",label:"미선택"}),a.jsx(e,{name:"radio-state",checked:!0,label:"선택됨"}),a.jsx(e,{name:"radio-state-disabled",disabled:!0,label:"비활성"}),a.jsx(e,{name:"radio-state-disabled",checked:!0,disabled:!0,label:"선택됨 (비활성)"})]}))},w={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function GroupExample() {
  return (
    <>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">배송 방법 (세로)</legend>
        <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
        <Radio name="radio-group-ship" value="express" label="빠른 배송" />
        <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
      </fieldset>
      <fieldset className="radio_group radio_group_horizontal">
        <legend className="radio_group-legend">크기 (가로)</legend>
        <Radio button name="radio-group-size" checked value="s" label="S" />
        <Radio button name="radio-group-size" value="m" label="M" />
        <Radio button name="radio-group-size" value="l" label="L" />
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsxs("fieldset",{className:"radio_group",children:[a.jsx("legend",{className:"radio_group-legend",children:"배송 방법 (세로)"}),a.jsx(e,{name:"radio-group-ship",checked:!0,value:"standard",label:"일반 배송"}),a.jsx(e,{name:"radio-group-ship",value:"express",label:"빠른 배송"}),a.jsx(e,{name:"radio-group-ship",value:"pickup",label:"매장 픽업"})]}),a.jsxs("fieldset",{className:"radio_group radio_group_horizontal",children:[a.jsx("legend",{className:"radio_group-legend",children:"크기 (가로)"}),a.jsx(e,{button:!0,name:"radio-group-size",checked:!0,value:"s",label:"S"}),a.jsx(e,{button:!0,name:"radio-group-size",value:"m",label:"M"}),a.jsx(e,{button:!0,name:"radio-group-size",value:"l",label:"L"})]})]}))},z={name:"버튼형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function ButtonTypeExample() {
  return (
    <fieldset className="radio_group radio_group_horizontal">
      <Radio button name="radio-btn-filter" checked value="all" label="전체" />
      <Radio button name="radio-btn-filter" value="active" label="진행 중" />
      <Radio button name="radio-btn-filter" value="done" label="완료" />
      <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
    </fieldset>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsxs("fieldset",{className:"radio_group radio_group_horizontal",children:[a.jsx(e,{button:!0,name:"radio-btn-filter",checked:!0,value:"all",label:"전체"}),a.jsx(e,{button:!0,name:"radio-btn-filter",value:"active",label:"진행 중"}),a.jsx(e,{button:!0,name:"radio-btn-filter",value:"done",label:"완료"}),a.jsx(e,{button:!0,name:"radio-btn-filter",disabled:!0,value:"hold",label:"보류 (비활성)"})]}),a.jsxs("fieldset",{className:"radio_group radio_group_horizontal",children:[a.jsx(e,{button:!0,className:"radio_sm color_success",name:"radio-btn-size",checked:!0,value:"sm",label:"Small"}),a.jsx(e,{button:!0,className:"color_success",name:"radio-btn-size",checked:!0,value:"md",label:"Medium"}),a.jsx(e,{button:!0,className:"radio_lg color_success",name:"radio-btn-size",checked:!0,value:"lg",label:"Large"})]})]}))};function I({id:d,titleId:l,descId:i,title:n,subtitle:t,desc:m,value:p,checked:s,disabled:o,colorClass:u,name:c="radio-plan"}){return a.jsx("div",{className:qa(u),children:a.jsxs("article",{className:"card card_compact card_shadow",children:[a.jsxs("div",{className:"card_header",children:[a.jsxs("div",{className:"card_header-main",children:[a.jsx("h3",{className:"card_title",id:l,children:n}),a.jsx("p",{className:"card_subtitle",children:t})]}),a.jsx("div",{className:"card_extra",children:a.jsx(e,{id:d,name:c,value:p,checked:s,disabled:o,"aria-labelledby":`${l} ${i}`})})]}),a.jsx("div",{className:"card_body",id:i,children:m})]})})}function qa(d,l){return["radio_card",d,l].filter(Boolean).join(" ")}const S={name:"카드형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`div.radio_card` + `article.card` 조합입니다. `card_extra`에는 `label.radio_control`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 `div.radio_card.radio_card-clickable`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 `aria-labelledby`로 card_title · card_body에 연결합니다."},source:{code:`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function CardTypeExample() {
  return (
    <fieldset className="radio_group">
      <legend className="radio_group-legend">요금제 선택</legend>
      <div className="card_deck card_deck-2">
        <div className="radio_card">
          <article className="card card_compact card_shadow">
            {/* … */}
          </article>
        </div>
      </div>
    </fieldset>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsxs("fieldset",{className:"radio_group",children:[a.jsx("legend",{className:"radio_group-legend",children:"요금제 선택"}),a.jsxs("div",{className:"card_deck card_deck-2",children:[a.jsx(I,{id:"radio-plan-basic",titleId:"radio-plan-basic-title",descId:"radio-plan-basic-desc",title:"Basic",subtitle:"월 9,000원",desc:"개인 프로젝트에 적합합니다.",value:"basic",checked:!0}),a.jsx(I,{id:"radio-plan-pro",titleId:"radio-plan-pro-title",descId:"radio-plan-pro-desc",title:"Pro",subtitle:"월 29,000원",desc:"팀 협업과 고급 기능을 제공합니다.",value:"pro",colorClass:"color_primary"}),a.jsx(I,{id:"radio-plan-enterprise",titleId:"radio-plan-enterprise-title",descId:"radio-plan-enterprise-desc",title:"Enterprise",subtitle:"별도 문의",desc:"대규모 조직용 맞춤 플랜입니다. (비활성)",value:"enterprise",disabled:!0})]})]}),a.jsxs("fieldset",{className:"radio_group",children:[a.jsx("legend",{className:"radio_group-legend",children:"기본 권한 (가로)"}),a.jsxs("div",{className:"card_deck card_deck-3",children:[a.jsx("div",{className:"radio_card color_success",children:a.jsxs("article",{className:"card card_compact",children:[a.jsxs("div",{className:"card_header",children:[a.jsx("div",{className:"card_header-main",children:a.jsx("h3",{className:"card_title",id:"radio-role-read-title",children:"읽기"})}),a.jsx("div",{className:"card_extra",children:a.jsx(e,{id:"radio-role-read",name:"radio-role",value:"read",checked:!0,"aria-labelledby":"radio-role-read-title radio-role-read-desc"})})]}),a.jsx("div",{className:"card_body",id:"radio-role-read-desc",children:"조회 권한"})]})}),a.jsx("div",{className:"radio_card color_success",children:a.jsxs("article",{className:"card card_compact",children:[a.jsxs("div",{className:"card_header",children:[a.jsx("div",{className:"card_header-main",children:a.jsx("h3",{className:"card_title",id:"radio-role-write-title",children:"쓰기"})}),a.jsx("div",{className:"card_extra",children:a.jsx(e,{id:"radio-role-write",name:"radio-role",value:"write","aria-labelledby":"radio-role-write-title radio-role-write-desc"})})]}),a.jsx("div",{className:"card_body",id:"radio-role-write-desc",children:"수정 권한"})]})}),a.jsx("div",{className:"radio_card",children:a.jsxs("article",{className:"card card_compact",children:[a.jsxs("div",{className:"card_header",children:[a.jsx("div",{className:"card_header-main",children:a.jsx("h3",{className:"card_title",id:"radio-role-admin-title",children:"관리"})}),a.jsx("div",{className:"card_extra",children:a.jsx(e,{id:"radio-role-admin",name:"radio-role",value:"admin","aria-labelledby":"radio-role-admin-title radio-role-admin-desc"})})]}),a.jsx("div",{className:"card_body",id:"radio-role-admin-desc",children:"전체 관리 권한"})]})})]})]}),a.jsxs("fieldset",{className:"radio_group",children:[a.jsx("legend",{className:"radio_group-legend",children:"요금제 선택 — 카드 전체 클릭 (radio_card-clickable)"}),a.jsxs("div",{className:"card_deck card_deck-2",children:[a.jsx("div",{className:"radio_card radio_card-clickable","data-ripple":"",children:a.jsxs("article",{className:"card card_compact card_shadow",children:[a.jsxs("div",{className:"card_header",children:[a.jsxs("div",{className:"card_header-main",children:[a.jsx("h3",{className:"card_title",id:"radio-plan-full-basic-title",children:"Basic"}),a.jsx("p",{className:"card_subtitle",children:"월 9,000원"})]}),a.jsx("div",{className:"card_extra",children:a.jsx(e,{id:"radio-plan-full-basic",name:"radio-plan-clickable",value:"basic",checked:!0,"aria-labelledby":"radio-plan-full-basic-title radio-plan-full-basic-desc"})})]}),a.jsx("div",{className:"card_body",id:"radio-plan-full-basic-desc",children:"카드 어디를 눌러도 선택됩니다."})]})}),a.jsx("div",{className:"radio_card radio_card-clickable color_primary","data-ripple":"",children:a.jsxs("article",{className:"card card_compact card_shadow",children:[a.jsxs("div",{className:"card_header",children:[a.jsxs("div",{className:"card_header-main",children:[a.jsx("h3",{className:"card_title",id:"radio-plan-full-pro-title",children:"Pro"}),a.jsx("p",{className:"card_subtitle",children:"월 29,000원"})]}),a.jsx("div",{className:"card_extra",children:a.jsx(e,{id:"radio-plan-full-pro",name:"radio-plan-clickable",value:"pro","aria-labelledby":"radio-plan-full-pro-title radio-plan-full-pro-desc"})})]}),a.jsx("div",{className:"card_body",id:"radio-plan-full-pro-desc",children:"제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다."})]})}),a.jsx("div",{className:"radio_card radio_card-clickable","data-ripple":"",children:a.jsxs("article",{className:"card card_compact card_shadow",children:[a.jsxs("div",{className:"card_header",children:[a.jsxs("div",{className:"card_header-main",children:[a.jsx("h3",{className:"card_title",id:"radio-plan-full-enterprise-title",children:"Enterprise"}),a.jsx("p",{className:"card_subtitle",children:"별도 문의"})]}),a.jsx("div",{className:"card_extra",children:a.jsx(e,{id:"radio-plan-full-enterprise",name:"radio-plan-clickable",value:"enterprise",disabled:!0,"aria-labelledby":"radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"})})]}),a.jsx("div",{className:"card_body",id:"radio-plan-full-enterprise-desc",children:"대규모 조직용 맞춤 플랜입니다. (비활성)"})]})})]})]})]}))},C={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-vertical-label">
            수신 채널
          </span>
          <fieldset className="radio_group" aria-labelledby="radio-form-vertical-label">
            <Radio name="radio-form-channel" checked value="email" label="이메일" />
            <Radio name="radio-form-channel" value="sms" label="SMS" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-horizontal-label">
            역할
          </span>
          <fieldset
            className="radio_group radio_group_horizontal"
            aria-labelledby="radio-form-horizontal-label"
          >
            <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
            <Radio button name="radio-form-role" value="editor" label="편집자" />
          </fieldset>
        </div>
      </FormLayout>
    </>
  );
}`,language:"tsx"}}},render:r(a.jsxs(a.Fragment,{children:[a.jsx(A,{layout:"vertical",fit:!0,children:a.jsxs("div",{className:"form_field",children:[a.jsx("span",{className:"form_field-label",id:"radio-form-vertical-label",children:"수신 채널"}),a.jsxs("fieldset",{className:"radio_group","aria-labelledby":"radio-form-vertical-label",children:[a.jsx(e,{name:"radio-form-channel",checked:!0,value:"email",label:"이메일"}),a.jsx(e,{name:"radio-form-channel",value:"sms",label:"SMS"})]})]})}),a.jsx(A,{layout:"horizontal",fit:!0,children:a.jsxs("div",{className:"form_field",children:[a.jsx("span",{className:"form_field-label",id:"radio-form-horizontal-label",children:"역할"}),a.jsxs("fieldset",{className:"radio_group radio_group_horizontal","aria-labelledby":"radio-form-horizontal-label",children:[a.jsx(e,{button:!0,name:"radio-form-role",checked:!0,value:"viewer",label:"뷰어"}),a.jsx(e,{button:!0,name:"radio-form-role",value:"editor",label:"편집자"})]})]})})]}))};var V,G,X;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  }) => <Radio {...args} onChange={event => updateArgs({
    checked: event.target.checked
  })} />
}`,...(X=(G=g.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var J,O,H;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        story: '기본은 wrapping \`label.radio\` 안에 \`span.radio_control\` + \`span.radio_label\` 순서입니다. 보이는 레이블이 없으면 \`label.radio_control\`로 input을 암묵 연결합니다. \`radio_label-end\`는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function TypeExample() {
  return (
    <>
      <Radio name="radio-type-basic" checked label="기본 — radio" />
      <Radio name="radio-type-label-end" labelEnd label="레이블 뒤 — radio_label-end" />
      <fieldset className="radio_group radio_group_horizontal">
        <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
        <Radio button name="radio-type-btn" value="b" label="UI" />
        <Radio button name="radio-type-btn" value="c" label="UX" />
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Radio name="radio-type-basic" checked label="기본 — radio" />
      <Radio name="radio-type-label-end" labelEnd label="레이블 뒤 — radio_label-end" />
      <fieldset className="radio_group radio_group_horizontal">
        <Radio button name="radio-type-btn" checked value="a" label="버튼형" />
        <Radio button name="radio-type-btn" value="b" label="UI" />
        <Radio button name="radio-type-btn" value="c" label="UX" />
      </fieldset>
    </>)
}`,...(H=(O=f.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var $,q,K;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '레이블 뒤',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`radio_label-end\`는 \`radio_label\` → \`radio_control\` 순으로 마크업합니다. 전체 너비가 필요하면 \`radio_block\` 또는 \`radio_group_block\`을 추가합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function LabelEndExample() {
  return (
    <>
      <Radio name="radio-label-end-pay" labelEnd checked label="신용카드" />
      <Radio name="radio-label-end-pay2" labelEnd>
        <span className="radio_content">
          <span className="radio_label">계좌이체</span>
          <span className="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Radio name="radio-label-end-pay" labelEnd checked label="신용카드" />
      <Radio name="radio-label-end-pay2" labelEnd>
        <span className="radio_content">
          <span className="radio_label">계좌이체</span>
          <span className="radio_hint">등록된 계좌로 결제합니다.</span>
        </span>
      </Radio>
      <fieldset className="radio_group radio_group_block" style={{
      maxWidth: 360,
      width: '100%'
    }}>
        <legend className="radio_group-legend">배송 방법 — radio_group_block</legend>
        <Radio name="radio-label-end-ship" labelEnd checked value="standard" label="일반 배송" />
        <Radio name="radio-label-end-ship" labelEnd value="express" label="빠른 배송" />
      </fieldset>
      <Radio className="radio_sm" name="radio-label-end-size" labelEnd checked label="Small — radio_sm" />
      <Radio className="radio_lg" name="radio-label-end-size2" labelEnd checked label="Large — radio_lg" />
    </>)
}`,...(K=(q=x.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,Y,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        story: '레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="radio-pay-label">
        결제 수단
      </span>
      <fieldset className="radio_group" aria-labelledby="radio-pay-label">
        <Radio name="radio-pay" checked value="card">
          <span className="radio_content">
            <span className="radio_label">신용카드</span>
            <span className="radio_hint">Visa · Mastercard · 국내 카드</span>
          </span>
        </Radio>
        <Radio name="radio-pay" value="bank">
          <span className="radio_content">
            <span className="radio_label">계좌이체</span>
            <span className="radio_hint">등록된 계좌로 결제합니다.</span>
          </span>
        </Radio>
      </fieldset>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <span className="form_field-label" id="radio-pay-label">
        결제 수단
      </span>
      <fieldset className="radio_group" aria-labelledby="radio-pay-label">
        <Radio name="radio-pay" checked value="card">
          <span className="radio_content">
            <span className="radio_label">신용카드</span>
            <span className="radio_hint">Visa · Mastercard · 국내 카드</span>
          </span>
        </Radio>
        <Radio name="radio-pay" value="bank">
          <span className="radio_content">
            <span className="radio_label">계좌이체</span>
            <span className="radio_hint">등록된 계좌로 결제합니다.</span>
          </span>
        </Radio>
      </fieldset>
    </div>)
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,ea,ra;N.parameters={...N.parameters,docs:{...(aa=N.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
        story: '레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function StandaloneExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" ariaLabel="항목 선택" />
      <Radio name="radio-standalone" checked ariaLabel="선택됨" />
      <Radio name="radio-standalone-disabled" disabled ariaLabel="비활성" />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" ariaLabel="항목 선택" />
      <Radio name="radio-standalone" checked ariaLabel="선택됨" />
      <Radio name="radio-standalone-disabled" disabled ariaLabel="비활성" />
    </div>)
}`,...(ra=(ea=N.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var da,la,oa;k.parameters={...k.parameters,docs:{...(da=k.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
        story: 'radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function SizeExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio className="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio className="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="radio_group radio_group_horizontal">
      <Radio className="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio className="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>)
}`,...(oa=(la=k.parameters)==null?void 0:la.docs)==null?void 0:oa.source}}};var ia,sa,na;R.parameters={...R.parameters,docs:{...(ia=R.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
        story: '기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function WidthExample() {
  return (
    <>
      <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
      <Radio name="radio-width-block" className="radio_block" checked label="radio_block — 전체 너비" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
      <Radio name="radio-width-block" className="radio_block" checked label="radio_block — 전체 너비" />
      <fieldset className="radio_group radio_group_block" style={{
      maxWidth: 360,
      width: '100%'
    }}>
        <legend className="radio_group-legend">radio_group_block</legend>
        <Radio name="radio-width-g1" checked label="항목 1" />
        <Radio name="radio-width-g1" label="항목 2" />
      </fieldset>
    </>)
}`,...(na=(sa=R.parameters)==null?void 0:sa.docs)==null?void 0:na.source}}};var ca,ta,ma;y.parameters={...y.parameters,docs:{...(ca=y.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
        story: 'color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function ColorExample() {
  return (
    <>
      <Radio className="color_primary" name="radio-color-primary" checked label="Primary" />
      <Radio className="color_success" name="radio-color-success" checked label="Success" />
      <Radio className="color_danger" name="radio-color-danger" checked label="Danger" />
      <Radio className="color_warning" name="radio-color-warning" checked label="Warning" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Radio className="color_primary" name="radio-color-primary" checked label="Primary" />
      <Radio className="color_success" name="radio-color-success" checked label="Success" />
      <Radio className="color_danger" name="radio-color-danger" checked label="Danger" />
      <Radio className="color_warning" name="radio-color-warning" checked label="Warning" />
    </>)
}`,...(ma=(ta=y.parameters)==null?void 0:ta.docs)==null?void 0:ma.source}}};var pa,ua,ba;j.parameters={...j.parameters,docs:{...(pa=j.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
        story: '선택·미선택·비활성·오류(is-error) 상태를 지원합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function StateExample() {
  return (
    <>
      <Radio name="radio-state" label="미선택" />
      <Radio name="radio-state" checked label="선택됨" />
      <Radio name="radio-state-disabled" disabled label="비활성" />
      <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Radio name="radio-state" label="미선택" />
      <Radio name="radio-state" checked label="선택됨" />
      <Radio name="radio-state-disabled" disabled label="비활성" />
      <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
    </>)
}`,...(ba=(ua=j.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var _a,ha,ga;w.parameters={...w.parameters,docs:{...(_a=w.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
        story: 'radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function GroupExample() {
  return (
    <>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">배송 방법 (세로)</legend>
        <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
        <Radio name="radio-group-ship" value="express" label="빠른 배송" />
        <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
      </fieldset>
      <fieldset className="radio_group radio_group_horizontal">
        <legend className="radio_group-legend">크기 (가로)</legend>
        <Radio button name="radio-group-size" checked value="s" label="S" />
        <Radio button name="radio-group-size" value="m" label="M" />
        <Radio button name="radio-group-size" value="l" label="L" />
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">배송 방법 (세로)</legend>
        <Radio name="radio-group-ship" checked value="standard" label="일반 배송" />
        <Radio name="radio-group-ship" value="express" label="빠른 배송" />
        <Radio name="radio-group-ship" value="pickup" label="매장 픽업" />
      </fieldset>
      <fieldset className="radio_group radio_group_horizontal">
        <legend className="radio_group-legend">크기 (가로)</legend>
        <Radio button name="radio-group-size" checked value="s" label="S" />
        <Radio button name="radio-group-size" value="m" label="M" />
        <Radio button name="radio-group-size" value="l" label="L" />
      </fieldset>
    </>)
}`,...(ga=(ha=w.parameters)==null?void 0:ha.docs)==null?void 0:ga.source}}};var fa,xa,va;z.parameters={...z.parameters,docs:{...(fa=z.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: '버튼형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function ButtonTypeExample() {
  return (
    <fieldset className="radio_group radio_group_horizontal">
      <Radio button name="radio-btn-filter" checked value="all" label="전체" />
      <Radio button name="radio-btn-filter" value="active" label="진행 중" />
      <Radio button name="radio-btn-filter" value="done" label="완료" />
      <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
    </fieldset>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <fieldset className="radio_group radio_group_horizontal">
        <Radio button name="radio-btn-filter" checked value="all" label="전체" />
        <Radio button name="radio-btn-filter" value="active" label="진행 중" />
        <Radio button name="radio-btn-filter" value="done" label="완료" />
        <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
      </fieldset>
      <fieldset className="radio_group radio_group_horizontal">
        <Radio button className="radio_sm color_success" name="radio-btn-size" checked value="sm" label="Small" />
        <Radio button className="color_success" name="radio-btn-size" checked value="md" label="Medium" />
        <Radio button className="radio_lg color_success" name="radio-btn-size" checked value="lg" label="Large" />
      </fieldset>
    </>)
}`,...(va=(xa=z.parameters)==null?void 0:xa.docs)==null?void 0:va.source}}};var Na,ka,Ra;S.parameters={...S.parameters,docs:{...(Na=S.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  name: '카드형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`div.radio_card\` + \`article.card\` 조합입니다. \`card_extra\`에는 \`label.radio_control\`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 \`div.radio_card.radio_card-clickable\`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 \`aria-labelledby\`로 card_title · card_body에 연결합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function CardTypeExample() {
  return (
    <fieldset className="radio_group">
      <legend className="radio_group-legend">요금제 선택</legend>
      <div className="card_deck card_deck-2">
        <div className="radio_card">
          <article className="card card_compact card_shadow">
            {/* … */}
          </article>
        </div>
      </div>
    </fieldset>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">요금제 선택</legend>
        <div className="card_deck card_deck-2">
          <PlanCard id="radio-plan-basic" titleId="radio-plan-basic-title" descId="radio-plan-basic-desc" title="Basic" subtitle="월 9,000원" desc="개인 프로젝트에 적합합니다." value="basic" checked />
          <PlanCard id="radio-plan-pro" titleId="radio-plan-pro-title" descId="radio-plan-pro-desc" title="Pro" subtitle="월 29,000원" desc="팀 협업과 고급 기능을 제공합니다." value="pro" colorClass="color_primary" />
          <PlanCard id="radio-plan-enterprise" titleId="radio-plan-enterprise-title" descId="radio-plan-enterprise-desc" title="Enterprise" subtitle="별도 문의" desc="대규모 조직용 맞춤 플랜입니다. (비활성)" value="enterprise" disabled />
        </div>
      </fieldset>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">기본 권한 (가로)</legend>
        <div className="card_deck card_deck-3">
          <div className="radio_card color_success">
            <article className="card card_compact">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="radio-role-read-title">
                    읽기
                  </h3>
                </div>
                <div className="card_extra">
                  <Radio id="radio-role-read" name="radio-role" value="read" checked aria-labelledby="radio-role-read-title radio-role-read-desc" />
                </div>
              </div>
              <div className="card_body" id="radio-role-read-desc">
                조회 권한
              </div>
            </article>
          </div>
          <div className="radio_card color_success">
            <article className="card card_compact">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="radio-role-write-title">
                    쓰기
                  </h3>
                </div>
                <div className="card_extra">
                  <Radio id="radio-role-write" name="radio-role" value="write" aria-labelledby="radio-role-write-title radio-role-write-desc" />
                </div>
              </div>
              <div className="card_body" id="radio-role-write-desc">
                수정 권한
              </div>
            </article>
          </div>
          <div className="radio_card">
            <article className="card card_compact">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="radio-role-admin-title">
                    관리
                  </h3>
                </div>
                <div className="card_extra">
                  <Radio id="radio-role-admin" name="radio-role" value="admin" aria-labelledby="radio-role-admin-title radio-role-admin-desc" />
                </div>
              </div>
              <div className="card_body" id="radio-role-admin-desc">
                전체 관리 권한
              </div>
            </article>
          </div>
        </div>
      </fieldset>
      <fieldset className="radio_group">
        <legend className="radio_group-legend">
          요금제 선택 — 카드 전체 클릭 (radio_card-clickable)
        </legend>
        <div className="card_deck card_deck-2">
          <div className="radio_card radio_card-clickable" data-ripple="">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="radio-plan-full-basic-title">
                    Basic
                  </h3>
                  <p className="card_subtitle">월 9,000원</p>
                </div>
                <div className="card_extra">
                  <Radio id="radio-plan-full-basic" name="radio-plan-clickable" value="basic" checked aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc" />
                </div>
              </div>
              <div className="card_body" id="radio-plan-full-basic-desc">
                카드 어디를 눌러도 선택됩니다.
              </div>
            </article>
          </div>
          <div className="radio_card radio_card-clickable color_primary" data-ripple="">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="radio-plan-full-pro-title">
                    Pro
                  </h3>
                  <p className="card_subtitle">월 29,000원</p>
                </div>
                <div className="card_extra">
                  <Radio id="radio-plan-full-pro" name="radio-plan-clickable" value="pro" aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc" />
                </div>
              </div>
              <div className="card_body" id="radio-plan-full-pro-desc">
                제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.
              </div>
            </article>
          </div>
          <div className="radio_card radio_card-clickable" data-ripple="">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="radio-plan-full-enterprise-title">
                    Enterprise
                  </h3>
                  <p className="card_subtitle">별도 문의</p>
                </div>
                <div className="card_extra">
                  <Radio id="radio-plan-full-enterprise" name="radio-plan-clickable" value="enterprise" disabled aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc" />
                </div>
              </div>
              <div className="card_body" id="radio-plan-full-enterprise-desc">
                대규모 조직용 맞춤 플랜입니다. (비활성)
              </div>
            </article>
          </div>
        </div>
      </fieldset>
    </>)
}`,...(Ra=(ka=S.parameters)==null?void 0:ka.docs)==null?void 0:Ra.source}}};var ya,ja,wa;C.parameters={...C.parameters,docs:{...(ya=C.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
import Radio from '@uxkm/ui-react/components/Radio.jsx';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-vertical-label">
            수신 채널
          </span>
          <fieldset className="radio_group" aria-labelledby="radio-form-vertical-label">
            <Radio name="radio-form-channel" checked value="email" label="이메일" />
            <Radio name="radio-form-channel" value="sms" label="SMS" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-horizontal-label">
            역할
          </span>
          <fieldset
            className="radio_group radio_group_horizontal"
            aria-labelledby="radio-form-horizontal-label"
          >
            <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
            <Radio button name="radio-form-role" value="editor" label="편집자" />
          </fieldset>
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
          <span className="form_field-label" id="radio-form-vertical-label">
            수신 채널
          </span>
          <fieldset className="radio_group" aria-labelledby="radio-form-vertical-label">
            <Radio name="radio-form-channel" checked value="email" label="이메일" />
            <Radio name="radio-form-channel" value="sms" label="SMS" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="radio-form-horizontal-label">
            역할
          </span>
          <fieldset className="radio_group radio_group_horizontal" aria-labelledby="radio-form-horizontal-label">
            <Radio button name="radio-form-role" checked value="viewer" label="뷰어" />
            <Radio button name="radio-form-role" value="editor" label="편집자" />
          </fieldset>
        </div>
      </FormLayout>
    </>)
}`,...(wa=(ja=C.parameters)==null?void 0:ja.docs)==null?void 0:wa.source}}};const le=["Playground","Type","LabelEnd","Basic","Standalone","Size","Width","Color","State","Group","ButtonType","CardType","Form"];export{v as Basic,z as ButtonType,S as CardType,y as Color,C as Form,w as Group,x as LabelEnd,g as Playground,k as Size,N as Standalone,j as State,f as Type,R as Width,le as __namedExportsOrder,de as default};

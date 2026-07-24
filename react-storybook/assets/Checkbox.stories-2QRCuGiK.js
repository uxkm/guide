import{d as Le,r,u as Re,c as De,n as We,j as e,a as W,b as Be}from"./iframe-DbjMrqYU.js";import{w as a}from"./story-renders-CrEYzOkG.js";import{c as Fe,a as Te}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const Me=Be("Checkbox",{booleanProps:new Set(["checked","disabled","indeterminate","labelEnd","button","ripple"]),selfClosing:!0});function c({ripple:l,label:d,checked:s,defaultChecked:B,disabled:F,indeterminate:w,labelEnd:n,button:o,ariaLabel:T,children:E,className:t,onChange:S,id:z,...M}){const{rippleAttrs:we}=Le({ripple:l},{defaultEnabled:!1}),i=r.useRef(null),P=r.useRef(null),Ee=r.useId(),L=z??Ee,b=E??d,h=!(!!d||E!=null&&E!==""),I=r.useMemo(()=>l===!1?{"data-ripple":"false"}:l===!0||h||o?{"data-ripple":"true"}:{},[l,h,o]);Re(Me,{ripple:l,label:d,checked:s,disabled:F,indeterminate:w,labelEnd:n,button:o,ariaLabel:T},De({default:b}),i,{className:t,id:z,onChange:S,...M}),r.useEffect(()=>{P.current&&(P.current.indeterminate=!!w)},[w]);const U=r.useMemo(()=>{const D=["checkbox"];return n&&D.push("checkbox_label-end"),o&&D.push("checkbox_button"),D},[n,o]),{class:Qe,...Se}=M,ze=We(Se),Pe=S!=null?{checked:!!s,onChange:S}:s!=null?{defaultChecked:!!s}:B!=null?{defaultChecked:!!B}:{},R={ref:P,type:"checkbox",className:"checkbox_input",disabled:F,id:h?z:L,...Pe,...ze};return h?e.jsxs("label",{ref:i,className:W("checkbox_control",t),"aria-label":T,...I,children:[e.jsx("input",{...R}),e.jsx("span",{className:"checkbox_box","aria-hidden":"true"})]}):o?e.jsxs("label",{ref:i,className:W(U,t),...I,children:[e.jsx("input",{...R}),e.jsx("span",{className:"checkbox_label",children:b})]}):e.jsxs("div",{ref:i,className:W(U,t),...we,children:[n?e.jsx("label",{className:"checkbox_label",htmlFor:L,children:b}):null,e.jsxs("span",{className:"checkbox_control",children:[e.jsx("input",{...R}),e.jsx("span",{className:"checkbox_box","aria-hidden":"true"})]}),n?null:e.jsx("label",{className:"checkbox_label",htmlFor:L,children:b})]})}c.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const Ie=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ue=[{name:"label",type:"string",default:"—",description:"라벨 텍스트. default 슬롯으로 대체"},{name:"checked",type:"boolean",default:"false",description:"체크 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성"},{name:"indeterminate",type:"boolean",default:"false",description:"부분 선택 (전체 선택 등)"},{name:"label-end",type:"boolean",default:"false",description:"라벨을 체크박스 앞에 배치"},{name:"button",type:"boolean",default:"false",description:"버튼형 토글 (checkbox_button)"},{name:"aria-label",type:"string",default:"—",description:"라벨 없는 단독 체크박스 시 필수"},Fe],Ae=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Je=[{name:"checkbox",description:"체크박스 래퍼"},{name:"checkbox_control · checkbox_input · checkbox_box",description:"입력·커스텀 박스"},{name:"checkbox_label",description:"라벨"},{name:"checkbox_label-end · checkbox_button",description:"레이아웃 변형"},{name:"checkbox_group",description:"여러 체크박스 묶음"},{name:"checkbox_card · checkbox_card-clickable",description:"카드형 — clickable은 data-ripple + JS 위임"},{name:"is-checked · is-disabled",description:"상태 (CSS·JS 토글)"},...Te],Ge=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Xe=[{name:"--checkbox-size · --checkbox-size-sm · --checkbox-size-lg",default:"1rem · 0.875rem · 1.125rem",description:"체크박스 박스 크기"},{name:"--checkbox-border-width · --checkbox-radius",default:"1px · 4px",description:"테두리·모서리"},{name:"--checkbox-gap · --checkbox-gap-sm · --checkbox-gap-lg",default:"var(--space-sm) · 0.375rem · 0.625rem",description:"라벨 간격"},{name:"--checkbox-font-size · --checkbox-line-height",default:"var(--text-size-base) · 1.5",description:"라벨 타이포(md)"},{name:"--checkbox-label-weight",default:"400",description:"라벨 두께"},{name:"--checkbox-hint-size",default:"var(--text-size-sm)",description:"힌트 텍스트"},{name:"--checkbox-control-offset",default:"0.125rem",description:"박스 수직 정렬"},{name:"--checkbox-group-gap",default:"var(--space-sm)",description:"그룹 간격"},{name:"--checkbox-button-padding-y · --checkbox-button-padding-x",default:"0.35rem · 0.75rem",description:"버튼형 패딩"}],Oe=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Ve=[{name:"label",description:"라벨 텍스트. children으로 대체 가능"},{name:"children",description:"라벨 텍스트 (label prop 대체, Vue default 슬롯 대응). checkbox_content · checkbox_hint 조합 가능"}],He=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: label-end, aria-label)와 동일한 의미입니다.",tables:[{columns:Ie,rows:Ue,codeColumn:"name"}]},{title:"API · Children",description:"Vue default 슬롯에 대응하는 React label·children prop입니다.",tables:[{columns:Oe,rows:Ve,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ae,rows:Je,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ge,rows:Xe,codeColumn:"name"}]}],qe={label:"라벨",checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:"접근성 라벨"},cc={title:"Components/폼/Checkbox",id:"components-checkbox",component:c,tags:["autodocs"],argTypes:{label:{control:"text",type:{name:"string",summary:"string"}},checked:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},indeterminate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelEnd:{control:"boolean",type:{name:"boolean",summary:"boolean"}},button:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:He,docs:{description:{component:"다중 선택이 가능한 체크박스 컴포넌트입니다."}}}},x={parameters:{controls:{disable:!1}},args:{...qe},render:(l,{updateArgs:d})=>e.jsx(c,{...l,onChange:s=>d({checked:s.target.checked})})},m={name:"유형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 `span.checkbox_control` + `label.checkbox_label for`(명시 연결) 순서입니다. 보이는 레이블이 없으면 `label.checkbox_control`로 input을 암묵 연결합니다. `checkbox_label-end`는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function TypeExample() {
  return (
    <>
      <Checkbox checked label="기본 — checkbox" />
      <Checkbox labelEnd label="레이블 뒤 — checkbox_label-end" />
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="버튼형" />
        <Checkbox button label="UI" />
        <Checkbox button label="UX" />
      </fieldset>
      <div className="checkbox_card" style={{ maxWidth: 360 }}>
        <article className="card card_compact">
          <div className="card_header">
            <div className="card_header-main">
              <h3 className="card_title" id="checkbox-type-card-title">
                카드형 — checkbox_card
              </h3>
            </div>
            <div className="card_extra">
              <Checkbox
                id="checkbox-type-card"
                checked
                aria-labelledby="checkbox-type-card-title checkbox-type-card-desc"
              />
            </div>
          </div>
          <div className="card_body" id="checkbox-type-card-desc">
            card 컴포넌트와 조합해 제목·설명을 표시합니다.
          </div>
        </article>
      </div>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(c,{checked:!0,label:"기본 — checkbox"}),e.jsx(c,{labelEnd:!0,label:"레이블 뒤 — checkbox_label-end"}),e.jsxs("fieldset",{className:"checkbox_group checkbox_group_horizontal",children:[e.jsx(c,{button:!0,checked:!0,label:"버튼형"}),e.jsx(c,{button:!0,label:"UI"}),e.jsx(c,{button:!0,label:"UX"})]}),e.jsx("div",{className:"checkbox_card",style:{maxWidth:360},children:e.jsxs("article",{className:"card card_compact",children:[e.jsxs("div",{className:"card_header",children:[e.jsx("div",{className:"card_header-main",children:e.jsx("h3",{className:"card_title",id:"checkbox-type-card-title",children:"카드형 — checkbox_card"})}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-type-card",checked:!0,"aria-labelledby":"checkbox-type-card-title checkbox-type-card-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-type-card-desc",children:"card 컴포넌트와 조합해 제목·설명을 표시합니다."})]})})]}))},k={name:"레이블 뒤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`checkbox_label-end`는 `checkbox_label` → `checkbox_control` 순으로 마크업합니다. 전체 너비가 필요하면 `checkbox_block` 또는 `checkbox_group_block`을 추가합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function LabelEndExample() {
  return (
    <>
      <Checkbox labelEnd checked label="푸시 알림 받기" />
      <Checkbox labelEnd>
        <span className="checkbox_content">
          <span className="checkbox_label">마케팅 정보 수신</span>
          <span className="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Checkbox>
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
        <Checkbox labelEnd checked label="이메일 알림" />
        <Checkbox labelEnd checked label="푸시 알림" />
        <Checkbox labelEnd label="SMS 알림" />
      </fieldset>
      <Checkbox className="checkbox_sm" labelEnd checked label="Small — checkbox_sm" />
      <Checkbox className="checkbox_lg" labelEnd checked label="Large — checkbox_lg" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(c,{labelEnd:!0,checked:!0,label:"푸시 알림 받기"}),e.jsx(c,{labelEnd:!0,children:e.jsxs("span",{className:"checkbox_content",children:[e.jsx("span",{className:"checkbox_label",children:"마케팅 정보 수신"}),e.jsx("span",{className:"checkbox_hint",children:"이벤트·할인 소식을 이메일로 받습니다."})]})}),e.jsxs("fieldset",{className:"checkbox_group checkbox_group_block",style:{maxWidth:360,width:"100%"},children:[e.jsx("legend",{className:"checkbox_group-legend",children:"알림 설정 — checkbox_group_block"}),e.jsx(c,{labelEnd:!0,checked:!0,label:"이메일 알림"}),e.jsx(c,{labelEnd:!0,checked:!0,label:"푸시 알림"}),e.jsx(c,{labelEnd:!0,label:"SMS 알림"})]}),e.jsx(c,{className:"checkbox_sm",labelEnd:!0,checked:!0,label:"Small — checkbox_sm"}),e.jsx(c,{className:"checkbox_lg",labelEnd:!0,checked:!0,label:"Large — checkbox_lg"})]}))},p={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="checkbox-notify-label">
        알림 설정
      </span>
      <fieldset className="checkbox_group" aria-labelledby="checkbox-notify-label">
        <Checkbox checked>
          <span className="checkbox_content">
            <span className="checkbox_label">이메일 알림</span>
            <span className="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
          </span>
        </Checkbox>
        <Checkbox>
          <span className="checkbox_content">
            <span className="checkbox_label">푸시 알림</span>
            <span className="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
          </span>
        </Checkbox>
      </fieldset>
    </div>
  );
}`,language:"tsx"}}},render:a(e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"checkbox-notify-label",children:"알림 설정"}),e.jsxs("fieldset",{className:"checkbox_group","aria-labelledby":"checkbox-notify-label",children:[e.jsx(c,{checked:!0,children:e.jsxs("span",{className:"checkbox_content",children:[e.jsx("span",{className:"checkbox_label",children:"이메일 알림"}),e.jsx("span",{className:"checkbox_hint",children:"중요 공지와 계정 관련 메일을 받습니다."})]})}),e.jsx(c,{children:e.jsxs("span",{className:"checkbox_content",children:[e.jsx("span",{className:"checkbox_label",children:"푸시 알림"}),e.jsx("span",{className:"checkbox_hint",children:"모바일·브라우저 푸시를 허용합니다."})]})})]})]}))},u={name:"단독 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function StandaloneExample() {
  return (
    <>
      <Checkbox ariaLabel="항목 선택" />
      <Checkbox checked ariaLabel="선택됨" />
      <Checkbox disabled ariaLabel="비활성" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(c,{ariaLabel:"항목 선택"}),e.jsx(c,{checked:!0,ariaLabel:"선택됨"}),e.jsx(c,{disabled:!0,ariaLabel:"비활성"})]}))},_={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function SizeExample() {
  return (
    <>
      <Checkbox className="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox className="checkbox_lg" checked label="Large — checkbox_lg" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"checkbox_sm",checked:!0,label:"Small — checkbox_sm"}),e.jsx(c,{checked:!0,label:"Medium — 기본"}),e.jsx(c,{className:"checkbox_lg",checked:!0,label:"Large — checkbox_lg"})]}))},N={name:"너비",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function WidthExample() {
  return (
    <>
      <Checkbox checked label="기본 — 인라인 너비" />
      <Checkbox className="checkbox_block" checked label="checkbox_block — 전체 너비" />
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">checkbox_group_block</legend>
        <Checkbox checked label="항목 1" />
        <Checkbox label="항목 2" />
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(c,{checked:!0,label:"기본 — 인라인 너비"}),e.jsx(c,{className:"checkbox_block",checked:!0,label:"checkbox_block — 전체 너비"}),e.jsxs("fieldset",{className:"checkbox_group checkbox_group_block",style:{maxWidth:360,width:"100%"},children:[e.jsx("legend",{className:"checkbox_group-legend",children:"checkbox_group_block"}),e.jsx(c,{checked:!0,label:"항목 1"}),e.jsx(c,{label:"항목 2"})]})]}))},f={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function ColorExample() {
  return (
    <>
      <Checkbox className="color_primary" checked label="Primary" />
      <Checkbox className="color_success" checked label="Success" />
      <Checkbox className="color_danger" checked label="Danger" />
      <Checkbox className="color_warning" checked label="Warning" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"color_primary",checked:!0,label:"Primary"}),e.jsx(c,{className:"color_success",checked:!0,label:"Success"}),e.jsx(c,{className:"color_danger",checked:!0,label:"Danger"}),e.jsx(c,{className:"color_warning",checked:!0,label:"Warning"})]}))},g={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function StateExample() {
  return (
    <>
      <Checkbox label="미선택" />
      <Checkbox checked label="선택됨" />
      <Checkbox checked indeterminate label="불확정" />
      <Checkbox disabled label="비활성" />
      <Checkbox checked disabled label="선택됨 (비활성)" />
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"미선택"}),e.jsx(c,{checked:!0,label:"선택됨"}),e.jsx(c,{checked:!0,indeterminate:!0,label:"불확정"}),e.jsx(c,{disabled:!0,label:"비활성"}),e.jsx(c,{checked:!0,disabled:!0,label:"선택됨 (비활성)"})]}))},v={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function GroupExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">관심 분야 (세로)</legend>
        <Checkbox checked label="디자인" />
        <Checkbox label="개발" />
        <Checkbox label="기획" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <legend className="checkbox_group-legend">언어 (가로)</legend>
        <Checkbox button checked label="한국어" />
        <Checkbox button checked label="English" />
        <Checkbox button label="日本語" />
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("fieldset",{className:"checkbox_group",children:[e.jsx("legend",{className:"checkbox_group-legend",children:"관심 분야 (세로)"}),e.jsx(c,{checked:!0,label:"디자인"}),e.jsx(c,{label:"개발"}),e.jsx(c,{label:"기획"})]}),e.jsxs("fieldset",{className:"checkbox_group checkbox_group_horizontal",children:[e.jsx("legend",{className:"checkbox_group-legend",children:"언어 (가로)"}),e.jsx(c,{button:!0,checked:!0,label:"한국어"}),e.jsx(c,{button:!0,checked:!0,label:"English"}),e.jsx(c,{button:!0,label:"日本語"})]})]}))},C={name:"버튼형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function ButtonTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="전체" />
        <Checkbox button label="진행 중" />
        <Checkbox button label="완료" />
        <Checkbox button disabled label="보류 (비활성)" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button className="checkbox_sm color_success" checked label="Small" />
        <Checkbox button className="color_success" checked label="Medium" />
        <Checkbox button className="checkbox_lg color_success" checked label="Large" />
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("fieldset",{className:"checkbox_group checkbox_group_horizontal",children:[e.jsx(c,{button:!0,checked:!0,label:"전체"}),e.jsx(c,{button:!0,label:"진행 중"}),e.jsx(c,{button:!0,label:"완료"}),e.jsx(c,{button:!0,disabled:!0,label:"보류 (비활성)"})]}),e.jsxs("fieldset",{className:"checkbox_group checkbox_group_horizontal",children:[e.jsx(c,{button:!0,className:"checkbox_sm color_success",checked:!0,label:"Small"}),e.jsx(c,{button:!0,className:"color_success",checked:!0,label:"Medium"}),e.jsx(c,{button:!0,className:"checkbox_lg color_success",checked:!0,label:"Large"})]})]}))},j={name:"카드형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`div.checkbox_card` + `article.card` 조합입니다. `card_extra`에는 `label.checkbox_control`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 `div.checkbox_card.checkbox_card-clickable`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 `aria-labelledby`로 card_title · card_body에 연결합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function CardTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">요금제 선택 (다중)</legend>
        <div className="card_deck card_deck-2">
          <div className="checkbox_card">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-basic-title">
                    Basic
                  </h3>
                  <p className="card_subtitle">월 9,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox
                    id="checkbox-plan-basic"
                    name="plan"
                    value="basic"
                    checked
                    aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc"
                  />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-basic-desc">
                개인 프로젝트에 적합합니다.
              </div>
            </article>
          </div>
          {/* … Pro · Enterprise · 권한 · clickable 카드 … */}
        </div>
      </fieldset>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsxs("fieldset",{className:"checkbox_group",children:[e.jsx("legend",{className:"checkbox_group-legend",children:"요금제 선택 (다중)"}),e.jsxs("div",{className:"card_deck card_deck-2",children:[e.jsx("div",{className:"checkbox_card",children:e.jsxs("article",{className:"card card_compact card_shadow",children:[e.jsxs("div",{className:"card_header",children:[e.jsxs("div",{className:"card_header-main",children:[e.jsx("h3",{className:"card_title",id:"checkbox-plan-basic-title",children:"Basic"}),e.jsx("p",{className:"card_subtitle",children:"월 9,000원"})]}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-plan-basic",name:"plan",value:"basic",checked:!0,"aria-labelledby":"checkbox-plan-basic-title checkbox-plan-basic-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-plan-basic-desc",children:"개인 프로젝트에 적합합니다."})]})}),e.jsx("div",{className:"checkbox_card color_primary",children:e.jsxs("article",{className:"card card_compact card_shadow",children:[e.jsxs("div",{className:"card_header",children:[e.jsxs("div",{className:"card_header-main",children:[e.jsx("h3",{className:"card_title",id:"checkbox-plan-pro-title",children:"Pro"}),e.jsx("p",{className:"card_subtitle",children:"월 29,000원"})]}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-plan-pro",name:"plan",value:"pro","aria-labelledby":"checkbox-plan-pro-title checkbox-plan-pro-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-plan-pro-desc",children:"팀 협업과 고급 기능을 제공합니다."})]})}),e.jsx("div",{className:"checkbox_card",children:e.jsxs("article",{className:"card card_compact card_shadow",children:[e.jsxs("div",{className:"card_header",children:[e.jsxs("div",{className:"card_header-main",children:[e.jsx("h3",{className:"card_title",id:"checkbox-plan-enterprise-title",children:"Enterprise"}),e.jsx("p",{className:"card_subtitle",children:"별도 문의"})]}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-plan-enterprise",name:"plan",value:"enterprise",disabled:!0,"aria-labelledby":"checkbox-plan-enterprise-title checkbox-plan-enterprise-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-plan-enterprise-desc",children:"대규모 조직용 맞춤 플랜입니다. (비활성)"})]})})]})]}),e.jsxs("fieldset",{className:"checkbox_group",children:[e.jsx("legend",{className:"checkbox_group-legend",children:"권한 (가로)"}),e.jsxs("div",{className:"card_deck card_deck-3",children:[e.jsx("div",{className:"checkbox_card color_success",children:e.jsxs("article",{className:"card card_compact",children:[e.jsxs("div",{className:"card_header",children:[e.jsx("div",{className:"card_header-main",children:e.jsx("h3",{className:"card_title",id:"checkbox-perm-read-title",children:"읽기"})}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-perm-read",checked:!0,"aria-labelledby":"checkbox-perm-read-title checkbox-perm-read-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-perm-read-desc",children:"조회 권한"})]})}),e.jsx("div",{className:"checkbox_card color_success",children:e.jsxs("article",{className:"card card_compact",children:[e.jsxs("div",{className:"card_header",children:[e.jsx("div",{className:"card_header-main",children:e.jsx("h3",{className:"card_title",id:"checkbox-perm-write-title",children:"쓰기"})}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-perm-write",checked:!0,"aria-labelledby":"checkbox-perm-write-title checkbox-perm-write-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-perm-write-desc",children:"수정 권한"})]})}),e.jsx("div",{className:"checkbox_card",children:e.jsxs("article",{className:"card card_compact",children:[e.jsxs("div",{className:"card_header",children:[e.jsx("div",{className:"card_header-main",children:e.jsx("h3",{className:"card_title",id:"checkbox-perm-delete-title",children:"삭제"})}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-perm-delete","aria-labelledby":"checkbox-perm-delete-title checkbox-perm-delete-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-perm-delete-desc",children:"삭제 권한"})]})})]})]}),e.jsxs("fieldset",{className:"checkbox_group",children:[e.jsx("legend",{className:"checkbox_group-legend",children:"요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)"}),e.jsxs("div",{className:"card_deck card_deck-2",children:[e.jsx("div",{className:"checkbox_card checkbox_card-clickable","data-ripple":"",children:e.jsxs("article",{className:"card card_compact card_shadow",children:[e.jsxs("div",{className:"card_header",children:[e.jsxs("div",{className:"card_header-main",children:[e.jsx("h3",{className:"card_title",id:"checkbox-plan-full-basic-title",children:"Basic"}),e.jsx("p",{className:"card_subtitle",children:"월 9,000원"})]}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-plan-full-basic",name:"plan-clickable",value:"basic",checked:!0,"aria-labelledby":"checkbox-plan-full-basic-title checkbox-plan-full-basic-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-plan-full-basic-desc",children:"카드 어디를 눌러도 선택됩니다."})]})}),e.jsx("div",{className:"checkbox_card checkbox_card-clickable color_primary","data-ripple":"",children:e.jsxs("article",{className:"card card_compact card_shadow",children:[e.jsxs("div",{className:"card_header",children:[e.jsxs("div",{className:"card_header-main",children:[e.jsx("h3",{className:"card_title",id:"checkbox-plan-full-pro-title",children:"Pro"}),e.jsx("p",{className:"card_subtitle",children:"월 29,000원"})]}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-plan-full-pro",name:"plan-clickable",value:"pro","aria-labelledby":"checkbox-plan-full-pro-title checkbox-plan-full-pro-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-plan-full-pro-desc",children:"제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다."})]})}),e.jsx("div",{className:"checkbox_card checkbox_card-clickable","data-ripple":"",children:e.jsxs("article",{className:"card card_compact card_shadow",children:[e.jsxs("div",{className:"card_header",children:[e.jsxs("div",{className:"card_header-main",children:[e.jsx("h3",{className:"card_title",id:"checkbox-plan-full-enterprise-title",children:"Enterprise"}),e.jsx("p",{className:"card_subtitle",children:"별도 문의"})]}),e.jsx("div",{className:"card_extra",children:e.jsx(c,{id:"checkbox-plan-full-enterprise",name:"plan-clickable",value:"enterprise",disabled:!0,"aria-labelledby":"checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc"})})]}),e.jsx("div",{className:"card_body",id:"checkbox-plan-full-enterprise-desc",children:"대규모 조직용 맞춤 플랜입니다. (비활성)"})]})})]})]})]}))},y={name:"폼 레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"form_vertical · form_horizontal과 함께 사용합니다."},source:{code:`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function FormExample() {
  return (
    <>
      <form className="form form_vertical form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-vertical-label">
            수신 동의
          </span>
          <fieldset className="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
            <Checkbox checked label="마케팅 정보 수신" />
            <Checkbox label="뉴스레터 구독" />
          </fieldset>
        </div>
      </form>
      <form className="form form_horizontal form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-horizontal-label">
            권한
          </span>
          <fieldset
            className="checkbox_group checkbox_group_horizontal"
            aria-labelledby="checkbox-form-horizontal-label"
          >
            <Checkbox button checked label="조회" />
            <Checkbox button label="편집" />
          </fieldset>
        </div>
      </form>
    </>
  );
}`,language:"tsx"}}},render:a(e.jsxs(e.Fragment,{children:[e.jsx("form",{className:"form form_vertical form_fit",children:e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"checkbox-form-vertical-label",children:"수신 동의"}),e.jsxs("fieldset",{className:"checkbox_group","aria-labelledby":"checkbox-form-vertical-label",children:[e.jsx(c,{checked:!0,label:"마케팅 정보 수신"}),e.jsx(c,{label:"뉴스레터 구독"})]})]})}),e.jsx("form",{className:"form form_horizontal form_fit",children:e.jsxs("div",{className:"form_field",children:[e.jsx("span",{className:"form_field-label",id:"checkbox-form-horizontal-label",children:"권한"}),e.jsxs("fieldset",{className:"checkbox_group checkbox_group_horizontal","aria-labelledby":"checkbox-form-horizontal-label",children:[e.jsx(c,{button:!0,checked:!0,label:"조회"}),e.jsx(c,{button:!0,label:"편집"})]})]})})]}))};var A,J,G;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }) => <Checkbox {...args} onChange={event => updateArgs({
    checked: event.target.checked
  })} />
}`,...(G=(J=x.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var X,O,V;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        story: '기본은 \`span.checkbox_control\` + \`label.checkbox_label for\`(명시 연결) 순서입니다. 보이는 레이블이 없으면 \`label.checkbox_control\`로 input을 암묵 연결합니다. \`checkbox_label-end\`는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function TypeExample() {
  return (
    <>
      <Checkbox checked label="기본 — checkbox" />
      <Checkbox labelEnd label="레이블 뒤 — checkbox_label-end" />
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="버튼형" />
        <Checkbox button label="UI" />
        <Checkbox button label="UX" />
      </fieldset>
      <div className="checkbox_card" style={{ maxWidth: 360 }}>
        <article className="card card_compact">
          <div className="card_header">
            <div className="card_header-main">
              <h3 className="card_title" id="checkbox-type-card-title">
                카드형 — checkbox_card
              </h3>
            </div>
            <div className="card_extra">
              <Checkbox
                id="checkbox-type-card"
                checked
                aria-labelledby="checkbox-type-card-title checkbox-type-card-desc"
              />
            </div>
          </div>
          <div className="card_body" id="checkbox-type-card-desc">
            card 컴포넌트와 조합해 제목·설명을 표시합니다.
          </div>
        </article>
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Checkbox checked label="기본 — checkbox" />
      <Checkbox labelEnd label="레이블 뒤 — checkbox_label-end" />
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="버튼형" />
        <Checkbox button label="UI" />
        <Checkbox button label="UX" />
      </fieldset>
      <div className="checkbox_card" style={{
      maxWidth: 360
    }}>
        <article className="card card_compact">
          <div className="card_header">
            <div className="card_header-main">
              <h3 className="card_title" id="checkbox-type-card-title">
                카드형 — checkbox_card
              </h3>
            </div>
            <div className="card_extra">
              <Checkbox id="checkbox-type-card" checked aria-labelledby="checkbox-type-card-title checkbox-type-card-desc" />
            </div>
          </div>
          <div className="card_body" id="checkbox-type-card-desc">
            card 컴포넌트와 조합해 제목·설명을 표시합니다.
          </div>
        </article>
      </div>
    </>)
}`,...(V=(O=m.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var H,q,K;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        story: '\`checkbox_label-end\`는 \`checkbox_label\` → \`checkbox_control\` 순으로 마크업합니다. 전체 너비가 필요하면 \`checkbox_block\` 또는 \`checkbox_group_block\`을 추가합니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function LabelEndExample() {
  return (
    <>
      <Checkbox labelEnd checked label="푸시 알림 받기" />
      <Checkbox labelEnd>
        <span className="checkbox_content">
          <span className="checkbox_label">마케팅 정보 수신</span>
          <span className="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Checkbox>
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
        <Checkbox labelEnd checked label="이메일 알림" />
        <Checkbox labelEnd checked label="푸시 알림" />
        <Checkbox labelEnd label="SMS 알림" />
      </fieldset>
      <Checkbox className="checkbox_sm" labelEnd checked label="Small — checkbox_sm" />
      <Checkbox className="checkbox_lg" labelEnd checked label="Large — checkbox_lg" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Checkbox labelEnd checked label="푸시 알림 받기" />
      <Checkbox labelEnd>
        <span className="checkbox_content">
          <span className="checkbox_label">마케팅 정보 수신</span>
          <span className="checkbox_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Checkbox>
      <fieldset className="checkbox_group checkbox_group_block" style={{
      maxWidth: 360,
      width: '100%'
    }}>
        <legend className="checkbox_group-legend">알림 설정 — checkbox_group_block</legend>
        <Checkbox labelEnd checked label="이메일 알림" />
        <Checkbox labelEnd checked label="푸시 알림" />
        <Checkbox labelEnd label="SMS 알림" />
      </fieldset>
      <Checkbox className="checkbox_sm" labelEnd checked label="Small — checkbox_sm" />
      <Checkbox className="checkbox_lg" labelEnd checked label="Large — checkbox_lg" />
    </>)
}`,...(K=(q=k.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,Y,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        story: '레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function BasicExample() {
  return (
    <div className="form_field">
      <span className="form_field-label" id="checkbox-notify-label">
        알림 설정
      </span>
      <fieldset className="checkbox_group" aria-labelledby="checkbox-notify-label">
        <Checkbox checked>
          <span className="checkbox_content">
            <span className="checkbox_label">이메일 알림</span>
            <span className="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
          </span>
        </Checkbox>
        <Checkbox>
          <span className="checkbox_content">
            <span className="checkbox_label">푸시 알림</span>
            <span className="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
          </span>
        </Checkbox>
      </fieldset>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<div className="form_field">
      <span className="form_field-label" id="checkbox-notify-label">
        알림 설정
      </span>
      <fieldset className="checkbox_group" aria-labelledby="checkbox-notify-label">
        <Checkbox checked>
          <span className="checkbox_content">
            <span className="checkbox_label">이메일 알림</span>
            <span className="checkbox_hint">중요 공지와 계정 관련 메일을 받습니다.</span>
          </span>
        </Checkbox>
        <Checkbox>
          <span className="checkbox_content">
            <span className="checkbox_label">푸시 알림</span>
            <span className="checkbox_hint">모바일·브라우저 푸시를 허용합니다.</span>
          </span>
        </Checkbox>
      </fieldset>
    </div>)
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ce;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        story: '레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function StandaloneExample() {
  return (
    <>
      <Checkbox ariaLabel="항목 선택" />
      <Checkbox checked ariaLabel="선택됨" />
      <Checkbox disabled ariaLabel="비활성" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Checkbox ariaLabel="항목 선택" />
      <Checkbox checked ariaLabel="선택됨" />
      <Checkbox disabled ariaLabel="비활성" />
    </>)
}`,...(ce=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ce.source}}};var ae,le,se;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        story: 'checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function SizeExample() {
  return (
    <>
      <Checkbox className="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox className="checkbox_lg" checked label="Large — checkbox_lg" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Checkbox className="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox className="checkbox_lg" checked label="Large — checkbox_lg" />
    </>)
}`,...(se=(le=_.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var oe,re,de;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        story: '기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function WidthExample() {
  return (
    <>
      <Checkbox checked label="기본 — 인라인 너비" />
      <Checkbox className="checkbox_block" checked label="checkbox_block — 전체 너비" />
      <fieldset
        className="checkbox_group checkbox_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="checkbox_group-legend">checkbox_group_block</legend>
        <Checkbox checked label="항목 1" />
        <Checkbox label="항목 2" />
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Checkbox checked label="기본 — 인라인 너비" />
      <Checkbox className="checkbox_block" checked label="checkbox_block — 전체 너비" />
      <fieldset className="checkbox_group checkbox_group_block" style={{
      maxWidth: 360,
      width: '100%'
    }}>
        <legend className="checkbox_group-legend">checkbox_group_block</legend>
        <Checkbox checked label="항목 1" />
        <Checkbox label="항목 2" />
      </fieldset>
    </>)
}`,...(de=(re=N.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ne,te,ie;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function ColorExample() {
  return (
    <>
      <Checkbox className="color_primary" checked label="Primary" />
      <Checkbox className="color_success" checked label="Success" />
      <Checkbox className="color_danger" checked label="Danger" />
      <Checkbox className="color_warning" checked label="Warning" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Checkbox className="color_primary" checked label="Primary" />
      <Checkbox className="color_success" checked label="Success" />
      <Checkbox className="color_danger" checked label="Danger" />
      <Checkbox className="color_warning" checked label="Warning" />
    </>)
}`,...(ie=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var be,he,xe;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
        story: '선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function StateExample() {
  return (
    <>
      <Checkbox label="미선택" />
      <Checkbox checked label="선택됨" />
      <Checkbox checked indeterminate label="불확정" />
      <Checkbox disabled label="비활성" />
      <Checkbox checked disabled label="선택됨 (비활성)" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Checkbox label="미선택" />
      <Checkbox checked label="선택됨" />
      <Checkbox checked indeterminate label="불확정" />
      <Checkbox disabled label="비활성" />
      <Checkbox checked disabled label="선택됨 (비활성)" />
    </>)
}`,...(xe=(he=g.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var me,ke,pe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
        story: 'checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function GroupExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">관심 분야 (세로)</legend>
        <Checkbox checked label="디자인" />
        <Checkbox label="개발" />
        <Checkbox label="기획" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <legend className="checkbox_group-legend">언어 (가로)</legend>
        <Checkbox button checked label="한국어" />
        <Checkbox button checked label="English" />
        <Checkbox button label="日本語" />
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">관심 분야 (세로)</legend>
        <Checkbox checked label="디자인" />
        <Checkbox label="개발" />
        <Checkbox label="기획" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <legend className="checkbox_group-legend">언어 (가로)</legend>
        <Checkbox button checked label="한국어" />
        <Checkbox button checked label="English" />
        <Checkbox button label="日本語" />
      </fieldset>
    </>)
}`,...(pe=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:pe.source}}};var ue,_e,Ne;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
        story: 'checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function ButtonTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="전체" />
        <Checkbox button label="진행 중" />
        <Checkbox button label="완료" />
        <Checkbox button disabled label="보류 (비활성)" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button className="checkbox_sm color_success" checked label="Small" />
        <Checkbox button className="color_success" checked label="Medium" />
        <Checkbox button className="checkbox_lg color_success" checked label="Large" />
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button checked label="전체" />
        <Checkbox button label="진행 중" />
        <Checkbox button label="완료" />
        <Checkbox button disabled label="보류 (비활성)" />
      </fieldset>
      <fieldset className="checkbox_group checkbox_group_horizontal">
        <Checkbox button className="checkbox_sm color_success" checked label="Small" />
        <Checkbox button className="color_success" checked label="Medium" />
        <Checkbox button className="checkbox_lg color_success" checked label="Large" />
      </fieldset>
    </>)
}`,...(Ne=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var fe,ge,ve;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
        story: '\`div.checkbox_card\` + \`article.card\` 조합입니다. \`card_extra\`에는 \`label.checkbox_control\`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 \`div.checkbox_card.checkbox_card-clickable\`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 \`aria-labelledby\`로 card_title · card_body에 연결합니다.'
      },
      source: {
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function CardTypeExample() {
  return (
    <>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">요금제 선택 (다중)</legend>
        <div className="card_deck card_deck-2">
          <div className="checkbox_card">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-basic-title">
                    Basic
                  </h3>
                  <p className="card_subtitle">월 9,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox
                    id="checkbox-plan-basic"
                    name="plan"
                    value="basic"
                    checked
                    aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc"
                  />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-basic-desc">
                개인 프로젝트에 적합합니다.
              </div>
            </article>
          </div>
          {/* … Pro · Enterprise · 권한 · clickable 카드 … */}
        </div>
      </fieldset>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">요금제 선택 (다중)</legend>
        <div className="card_deck card_deck-2">
          <div className="checkbox_card">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-basic-title">
                    Basic
                  </h3>
                  <p className="card_subtitle">월 9,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-plan-basic" name="plan" value="basic" checked aria-labelledby="checkbox-plan-basic-title checkbox-plan-basic-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-basic-desc">
                개인 프로젝트에 적합합니다.
              </div>
            </article>
          </div>
          <div className="checkbox_card color_primary">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-pro-title">
                    Pro
                  </h3>
                  <p className="card_subtitle">월 29,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-plan-pro" name="plan" value="pro" aria-labelledby="checkbox-plan-pro-title checkbox-plan-pro-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-pro-desc">
                팀 협업과 고급 기능을 제공합니다.
              </div>
            </article>
          </div>
          <div className="checkbox_card">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-enterprise-title">
                    Enterprise
                  </h3>
                  <p className="card_subtitle">별도 문의</p>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-plan-enterprise" name="plan" value="enterprise" disabled aria-labelledby="checkbox-plan-enterprise-title checkbox-plan-enterprise-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-enterprise-desc">
                대규모 조직용 맞춤 플랜입니다. (비활성)
              </div>
            </article>
          </div>
        </div>
      </fieldset>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">권한 (가로)</legend>
        <div className="card_deck card_deck-3">
          <div className="checkbox_card color_success">
            <article className="card card_compact">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-perm-read-title">
                    읽기
                  </h3>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-perm-read" checked aria-labelledby="checkbox-perm-read-title checkbox-perm-read-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-perm-read-desc">
                조회 권한
              </div>
            </article>
          </div>
          <div className="checkbox_card color_success">
            <article className="card card_compact">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-perm-write-title">
                    쓰기
                  </h3>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-perm-write" checked aria-labelledby="checkbox-perm-write-title checkbox-perm-write-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-perm-write-desc">
                수정 권한
              </div>
            </article>
          </div>
          <div className="checkbox_card">
            <article className="card card_compact">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-perm-delete-title">
                    삭제
                  </h3>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-perm-delete" aria-labelledby="checkbox-perm-delete-title checkbox-perm-delete-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-perm-delete-desc">
                삭제 권한
              </div>
            </article>
          </div>
        </div>
      </fieldset>
      <fieldset className="checkbox_group">
        <legend className="checkbox_group-legend">
          요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)
        </legend>
        <div className="card_deck card_deck-2">
          <div className="checkbox_card checkbox_card-clickable" data-ripple="">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-full-basic-title">
                    Basic
                  </h3>
                  <p className="card_subtitle">월 9,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-plan-full-basic" name="plan-clickable" value="basic" checked aria-labelledby="checkbox-plan-full-basic-title checkbox-plan-full-basic-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-full-basic-desc">
                카드 어디를 눌러도 선택됩니다.
              </div>
            </article>
          </div>
          <div className="checkbox_card checkbox_card-clickable color_primary" data-ripple="">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-full-pro-title">
                    Pro
                  </h3>
                  <p className="card_subtitle">월 29,000원</p>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-plan-full-pro" name="plan-clickable" value="pro" aria-labelledby="checkbox-plan-full-pro-title checkbox-plan-full-pro-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-full-pro-desc">
                제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.
              </div>
            </article>
          </div>
          <div className="checkbox_card checkbox_card-clickable" data-ripple="">
            <article className="card card_compact card_shadow">
              <div className="card_header">
                <div className="card_header-main">
                  <h3 className="card_title" id="checkbox-plan-full-enterprise-title">
                    Enterprise
                  </h3>
                  <p className="card_subtitle">별도 문의</p>
                </div>
                <div className="card_extra">
                  <Checkbox id="checkbox-plan-full-enterprise" name="plan-clickable" value="enterprise" disabled aria-labelledby="checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc" />
                </div>
              </div>
              <div className="card_body" id="checkbox-plan-full-enterprise-desc">
                대규모 조직용 맞춤 플랜입니다. (비활성)
              </div>
            </article>
          </div>
        </div>
      </fieldset>
    </>)
}`,...(ve=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var Ce,je,ye;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/ui-react/components/Checkbox.jsx';

export function FormExample() {
  return (
    <>
      <form className="form form_vertical form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-vertical-label">
            수신 동의
          </span>
          <fieldset className="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
            <Checkbox checked label="마케팅 정보 수신" />
            <Checkbox label="뉴스레터 구독" />
          </fieldset>
        </div>
      </form>
      <form className="form form_horizontal form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-horizontal-label">
            권한
          </span>
          <fieldset
            className="checkbox_group checkbox_group_horizontal"
            aria-labelledby="checkbox-form-horizontal-label"
          >
            <Checkbox button checked label="조회" />
            <Checkbox button label="편집" />
          </fieldset>
        </div>
      </form>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <form className="form form_vertical form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-vertical-label">
            수신 동의
          </span>
          <fieldset className="checkbox_group" aria-labelledby="checkbox-form-vertical-label">
            <Checkbox checked label="마케팅 정보 수신" />
            <Checkbox label="뉴스레터 구독" />
          </fieldset>
        </div>
      </form>
      <form className="form form_horizontal form_fit">
        <div className="form_field">
          <span className="form_field-label" id="checkbox-form-horizontal-label">
            권한
          </span>
          <fieldset className="checkbox_group checkbox_group_horizontal" aria-labelledby="checkbox-form-horizontal-label">
            <Checkbox button checked label="조회" />
            <Checkbox button label="편집" />
          </fieldset>
        </div>
      </form>
    </>)
}`,...(ye=(je=y.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};const ac=["Playground","Type","LabelEnd","Basic","Standalone","Size","Width","Color","State","Group","ButtonType","CardType","Form"];export{p as Basic,C as ButtonType,j as CardType,f as Color,y as Form,v as Group,k as LabelEnd,x as Playground,_ as Size,u as Standalone,g as State,m as Type,N as Width,ac as __namedExportsOrder,cc as default};

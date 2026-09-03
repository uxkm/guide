import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,g as i,l as a}from"./iframe-BkSPibU3.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{i as s,r as c}from"./FormLayout-DqL6i1n7.js";function l({label:e,name:t,value:n,checked:r,defaultChecked:i,disabled:a=!1,labelEnd:o=!1,button:s=!1,ripple:c=!0,ariaLabel:l,children:d,className:f=``,onChange:p,id:m,...h}){let g=d??e,_=g==null||g===``,v=[`radio`,o&&`radio_label-end`,s&&`radio_button`,f].filter(Boolean).join(` `),y=p?{checked:!!r,onChange:p}:r==null?{defaultChecked:i}:{defaultChecked:!!r},b=(0,u.jsx)(`input`,{...h,id:m,type:`radio`,className:`radio_input`,name:t,value:n,disabled:a,...y,"data-component":`Radio`}),x={"data-ripple":c?`true`:`false`};return _?(0,u.jsxs)(`label`,{className:[`radio_control`,f].filter(Boolean).join(` `),"aria-label":l,...x,children:[b,(0,u.jsx)(`span`,{className:`radio_box`,"aria-hidden":`true`})]}):s?(0,u.jsxs)(`label`,{className:v,...x,children:[b,(0,u.jsx)(`span`,{className:`radio_label`,children:g})]}):(0,u.jsxs)(`label`,{className:v,...x,children:[o&&(0,u.jsx)(`span`,{className:`radio_label`,children:g}),(0,u.jsxs)(`span`,{className:`radio_control`,children:[b,(0,u.jsx)(`span`,{className:`radio_box`,"aria-hidden":`true`})]}),!o&&(0,u.jsx)(`span`,{className:`radio_label`,children:g})]})}var u;function d(){return(d=e((()=>{u=o(),l.__docgenInfo={description:`Radio 원본 구현.
폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.`,methods:[],displayName:`Radio`,props:{disabled:{defaultValue:{value:`false`,computed:!1},required:!1},labelEnd:{defaultValue:{value:`false`,computed:!1},required:!1},button:{defaultValue:{value:`false`,computed:!1},required:!1},ripple:{defaultValue:{value:`true`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var f=t({Basic:()=>w,ButtonType:()=>j,CardType:()=>M,Color:()=>O,Form:()=>N,Group:()=>A,LabelEnd:()=>C,Playground:()=>x,Size:()=>E,Standalone:()=>T,State:()=>k,Type:()=>S,Width:()=>D,__namedExportsOrder:()=>P,default:()=>b});function p({id:e,titleId:t,descId:n,title:r,subtitle:i,desc:a,value:o,checked:s,disabled:c,colorClass:u,name:d=`radio-plan`}){return(0,g.jsx)(`div`,{className:m(u),children:(0,g.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,g.jsxs)(`div`,{className:`card_header`,children:[(0,g.jsxs)(`div`,{className:`card_header-main`,children:[(0,g.jsx)(`h3`,{className:`card_title`,id:t,children:r}),(0,g.jsx)(`p`,{className:`card_subtitle`,children:i})]}),(0,g.jsx)(`div`,{className:`card_extra`,children:(0,g.jsx)(l,{id:e,name:d,value:o,checked:s,disabled:c,"aria-labelledby":`${t} ${n}`})})]}),(0,g.jsx)(`div`,{className:`card_body`,id:n,children:a})]})})}function m(e,t){return[`radio_card`,e,t&&`radio_card-clickable`].filter(Boolean).join(` `)}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{h=n(),r(),s(),d(),g=o(),_=e=>()=>(0,g.jsx)(`div`,{className:`demo-stack`,children:e}),v=({checked:e,label:t,name:n,value:r,...i})=>i,y={label:`라벨`,name:`playground`,checked:!1,disabled:!1,value:`1`,labelEnd:!1,button:!1,ripple:!0,className:``,ariaLabel:`접근성 라벨`},b={title:`폼/Radio`,id:`components-radio`,component:l,tags:[`autodocs`],args:{...y},argTypes:{...i,label:{control:`text`,type:{name:`string`,summary:`string`}},name:{control:`text`,type:{name:`string`,summary:`string`}},checked:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},disabled:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},value:{control:`text`,type:{name:`string`,summary:`string`}},labelEnd:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},button:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},ripple:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},className:{control:`select`,options:[``,`radio_sm`,`radio_lg`,`radio_block`,`color_primary`,`color_success`,`color_warning`,`color_danger`],type:{name:`string`,summary:`string`}},ariaLabel:{control:`text`,type:{name:`string`,summary:`string`}},id:{control:`text`,type:{name:`string`,summary:`string`}},defaultChecked:a,onChange:{table:{disable:!0}}},parameters:{controls:{disable:!1},layout:`padded`,docs:{description:{component:`단일 선택이 가능한 라디오 버튼 컴포넌트입니다.`}}}},x={name:`Playground`,parameters:{controls:{disable:!1}},args:{...y},argTypes:{checked:{control:!1,table:{disable:!0}},label:{control:!1,table:{disable:!0}},name:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}}},render:function(e){let t=v(e),n=`playground-preview`,[r,i]=(0,h.useState)(`on`),a=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{...t,name:n,value:`off`,label:`미선택`,checked:r===`off`,onChange:()=>i(`off`)}),(0,g.jsx)(l,{...t,name:n,value:`on`,label:`선택됨`,checked:r===`on`,onChange:()=>i(`on`)})]});return(0,g.jsx)(`div`,{className:`demo-stack`,children:e.button?(0,g.jsx)(`fieldset`,{className:`radio_group radio_group_horizontal`,children:a}):a})}},S={name:`유형`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"기본은 wrapping `label.radio` 안에 `span.radio_control` + `span.radio_label` 순서입니다. 보이는 레이블이 없으면 `label.radio_control`로 input을 암묵 연결합니다. `radio_label-end`는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다."},source:{code:`import Radio from '@uxkm/react/radio';

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
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{name:`radio-type-basic`,checked:!0,label:`기본 — radio`}),(0,g.jsx)(l,{name:`radio-type-label-end`,labelEnd:!0,label:`레이블 뒤 — radio_label-end`}),(0,g.jsxs)(`fieldset`,{className:`radio_group radio_group_horizontal`,children:[(0,g.jsx)(l,{button:!0,name:`radio-type-btn`,checked:!0,value:`a`,label:`버튼형`}),(0,g.jsx)(l,{button:!0,name:`radio-type-btn`,value:`b`,label:`UI`}),(0,g.jsx)(l,{button:!0,name:`radio-type-btn`,value:`c`,label:`UX`})]})]}))},C={name:`레이블 뒤`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"`radio_label-end`는 `radio_label` → `radio_control` 순으로 마크업합니다. 전체 너비가 필요하면 `radio_block` 또는 `radio_group_block`을 추가합니다."},source:{code:`import Radio from '@uxkm/react/radio';

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
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{name:`radio-label-end-pay`,labelEnd:!0,checked:!0,label:`신용카드`}),(0,g.jsx)(l,{name:`radio-label-end-pay2`,labelEnd:!0,children:(0,g.jsxs)(`span`,{className:`radio_content`,children:[(0,g.jsx)(`span`,{className:`radio_label`,children:`계좌이체`}),(0,g.jsx)(`span`,{className:`radio_hint`,children:`등록된 계좌로 결제합니다.`})]})}),(0,g.jsxs)(`fieldset`,{className:`radio_group radio_group_block`,style:{maxWidth:360,width:`100%`},children:[(0,g.jsx)(`legend`,{className:`radio_group-legend`,children:`배송 방법 — radio_group_block`}),(0,g.jsx)(l,{name:`radio-label-end-ship`,labelEnd:!0,checked:!0,value:`standard`,label:`일반 배송`}),(0,g.jsx)(l,{name:`radio-label-end-ship`,labelEnd:!0,value:`express`,label:`빠른 배송`})]}),(0,g.jsx)(l,{className:`radio_sm`,name:`radio-label-end-size`,labelEnd:!0,checked:!0,label:`Small — radio_sm`}),(0,g.jsx)(l,{className:`radio_lg`,name:`radio-label-end-size2`,labelEnd:!0,checked:!0,label:`Large — radio_lg`})]}))},w={name:`기본`,parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:`레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다.`},source:{code:`import Radio from '@uxkm/react/radio';

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
}`,language:`tsx`}}},render:_((0,g.jsxs)(`div`,{className:`form_field`,children:[(0,g.jsx)(`span`,{className:`form_field-label`,id:`radio-pay-label`,children:`결제 수단`}),(0,g.jsxs)(`fieldset`,{className:`radio_group`,"aria-labelledby":`radio-pay-label`,children:[(0,g.jsx)(l,{name:`radio-pay`,checked:!0,value:`card`,children:(0,g.jsxs)(`span`,{className:`radio_content`,children:[(0,g.jsx)(`span`,{className:`radio_label`,children:`신용카드`}),(0,g.jsx)(`span`,{className:`radio_hint`,children:`Visa · Mastercard · 국내 카드`})]})}),(0,g.jsx)(l,{name:`radio-pay`,value:`bank`,children:(0,g.jsxs)(`span`,{className:`radio_content`,children:[(0,g.jsx)(`span`,{className:`radio_label`,children:`계좌이체`}),(0,g.jsx)(`span`,{className:`radio_hint`,children:`등록된 계좌로 결제합니다.`})]})})]})]}))},T={name:`단독 사용`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:`레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.`},source:{code:`import Radio from '@uxkm/react/radio';

export function StandaloneExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio name="radio-standalone" ariaLabel="항목 선택" />
      <Radio name="radio-standalone" checked ariaLabel="선택됨" />
      <Radio name="radio-standalone-disabled" disabled ariaLabel="비활성" />
    </div>
  );
}`,language:`tsx`}}},render:_((0,g.jsxs)(`div`,{className:`radio_group radio_group_horizontal`,children:[(0,g.jsx)(l,{name:`radio-standalone`,ariaLabel:`항목 선택`}),(0,g.jsx)(l,{name:`radio-standalone`,checked:!0,ariaLabel:`선택됨`}),(0,g.jsx)(l,{name:`radio-standalone-disabled`,disabled:!0,ariaLabel:`비활성`})]}))},E={name:`크기`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:`radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다.`},source:{code:`import Radio from '@uxkm/react/radio';

export function SizeExample() {
  return (
    <div className="radio_group radio_group_horizontal">
      <Radio className="radio_sm" name="radio-size" checked label="Small — radio_sm" />
      <Radio name="radio-size" label="Medium — 기본" />
      <Radio className="radio_lg" name="radio-size" label="Large — radio_lg" />
    </div>
  );
}`,language:`tsx`}}},render:_((0,g.jsxs)(`div`,{className:`radio_group radio_group_horizontal`,children:[(0,g.jsx)(l,{className:`radio_sm`,name:`radio-size`,checked:!0,label:`Small — radio_sm`}),(0,g.jsx)(l,{name:`radio-size`,label:`Medium — 기본`}),(0,g.jsx)(l,{className:`radio_lg`,name:`radio-size`,label:`Large — radio_lg`})]}))},D={name:`너비`,parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:`기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다.`},source:{code:`import Radio from '@uxkm/react/radio';

export function WidthExample() {
  return (
    <>
      <Radio name="radio-width-inline" checked label="기본 — 인라인 너비" />
      <Radio name="radio-width-block" className="radio_block" checked label="radio_block — 전체 너비" />
    </>
  );
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{name:`radio-width-inline`,checked:!0,label:`기본 — 인라인 너비`}),(0,g.jsx)(l,{name:`radio-width-block`,className:`radio_block`,checked:!0,label:`radio_block — 전체 너비`}),(0,g.jsxs)(`fieldset`,{className:`radio_group radio_group_block`,style:{maxWidth:360,width:`100%`},children:[(0,g.jsx)(`legend`,{className:`radio_group-legend`,children:`radio_group_block`}),(0,g.jsx)(l,{name:`radio-width-g1`,checked:!0,label:`항목 1`}),(0,g.jsx)(l,{name:`radio-width-g1`,label:`항목 2`})]})]}))},O={name:`색상`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:`color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다.`},source:{code:`import Radio from '@uxkm/react/radio';

export function ColorExample() {
  return (
    <>
      <Radio className="color_primary" name="radio-color-primary" checked label="Primary" />
      <Radio className="color_success" name="radio-color-success" checked label="Success" />
      <Radio className="color_danger" name="radio-color-danger" checked label="Danger" />
      <Radio className="color_warning" name="radio-color-warning" checked label="Warning" />
    </>
  );
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{className:`color_primary`,name:`radio-color-primary`,checked:!0,label:`Primary`}),(0,g.jsx)(l,{className:`color_success`,name:`radio-color-success`,checked:!0,label:`Success`}),(0,g.jsx)(l,{className:`color_danger`,name:`radio-color-danger`,checked:!0,label:`Danger`}),(0,g.jsx)(l,{className:`color_warning`,name:`radio-color-warning`,checked:!0,label:`Warning`})]}))},k={name:`상태`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:`선택·미선택·비활성·오류(is-error) 상태를 지원합니다.`},source:{code:`import Radio from '@uxkm/react/radio';

export function StateExample() {
  return (
    <>
      <Radio name="radio-state" label="미선택" />
      <Radio name="radio-state" checked label="선택됨" />
      <Radio name="radio-state-disabled" disabled label="비활성" />
      <Radio name="radio-state-disabled" checked disabled label="선택됨 (비활성)" />
    </>
  );
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{name:`radio-state`,label:`미선택`}),(0,g.jsx)(l,{name:`radio-state`,checked:!0,label:`선택됨`}),(0,g.jsx)(l,{name:`radio-state-disabled`,disabled:!0,label:`비활성`}),(0,g.jsx)(l,{name:`radio-state-disabled`,checked:!0,disabled:!0,label:`선택됨 (비활성)`})]}))},A={name:`그룹`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:`radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다.`},source:{code:`import Radio from '@uxkm/react/radio';

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
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`fieldset`,{className:`radio_group`,children:[(0,g.jsx)(`legend`,{className:`radio_group-legend`,children:`배송 방법 (세로)`}),(0,g.jsx)(l,{name:`radio-group-ship`,checked:!0,value:`standard`,label:`일반 배송`}),(0,g.jsx)(l,{name:`radio-group-ship`,value:`express`,label:`빠른 배송`}),(0,g.jsx)(l,{name:`radio-group-ship`,value:`pickup`,label:`매장 픽업`})]}),(0,g.jsxs)(`fieldset`,{className:`radio_group radio_group_horizontal`,children:[(0,g.jsx)(`legend`,{className:`radio_group-legend`,children:`크기 (가로)`}),(0,g.jsx)(l,{button:!0,name:`radio-group-size`,checked:!0,value:`s`,label:`S`}),(0,g.jsx)(l,{button:!0,name:`radio-group-size`,value:`m`,label:`M`}),(0,g.jsx)(l,{button:!0,name:`radio-group-size`,value:`l`,label:`L`})]})]}))},j={name:`버튼형`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:`radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.`},source:{code:`import Radio from '@uxkm/react/radio';

export function ButtonTypeExample() {
  return (
    <fieldset className="radio_group radio_group_horizontal">
      <Radio button name="radio-btn-filter" checked value="all" label="전체" />
      <Radio button name="radio-btn-filter" value="active" label="진행 중" />
      <Radio button name="radio-btn-filter" value="done" label="완료" />
      <Radio button name="radio-btn-filter" disabled value="hold" label="보류 (비활성)" />
    </fieldset>
  );
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`fieldset`,{className:`radio_group radio_group_horizontal`,children:[(0,g.jsx)(l,{button:!0,name:`radio-btn-filter`,checked:!0,value:`all`,label:`전체`}),(0,g.jsx)(l,{button:!0,name:`radio-btn-filter`,value:`active`,label:`진행 중`}),(0,g.jsx)(l,{button:!0,name:`radio-btn-filter`,value:`done`,label:`완료`}),(0,g.jsx)(l,{button:!0,name:`radio-btn-filter`,disabled:!0,value:`hold`,label:`보류 (비활성)`})]}),(0,g.jsxs)(`fieldset`,{className:`radio_group radio_group_horizontal`,children:[(0,g.jsx)(l,{button:!0,className:`radio_sm color_success`,name:`radio-btn-size`,checked:!0,value:`sm`,label:`Small`}),(0,g.jsx)(l,{button:!0,className:`color_success`,name:`radio-btn-size`,checked:!0,value:`md`,label:`Medium`}),(0,g.jsx)(l,{button:!0,className:`radio_lg color_success`,name:`radio-btn-size`,checked:!0,value:`lg`,label:`Large`})]})]}))},M={name:`카드형`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"`div.radio_card` + `article.card` 조합입니다. `card_extra`에는 `label.radio_control`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 `div.radio_card.radio_card-clickable`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 `aria-labelledby`로 card_title · card_body에 연결합니다."},source:{code:`import Radio from '@uxkm/react/radio';

function PlanCard({
  id,
  titleId,
  descId,
  title,
  subtitle,
  desc,
  value,
  checked,
  disabled,
  colorClass,
  name = 'radio-plan',
}) {
  return (
    <div className={cnCard(colorClass)}>
      <article className="card card_compact card_shadow">
        <div className="card_header">
          <div className="card_header-main">
            <h3 className="card_title" id={titleId}>
              {title}
            </h3>
            <p className="card_subtitle">{subtitle}</p>
          </div>
          <div className="card_extra">
            <Radio
              id={id}
              name={name}
              value={value}
              checked={checked}
              disabled={disabled}
              aria-labelledby={\`\${titleId} \${descId}\`}
            />
          </div>
        </div>
        <div className="card_body" id={descId}>
          {desc}
        </div>
      </article>
    </div>
  );
}

function cnCard(colorClass, clickable) {
  return ['radio_card', colorClass, clickable && 'radio_card-clickable'].filter(Boolean).join(' ');
}

export function CardTypeExample() {
  return (
    <>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">요금제 선택</legend>
            <div className="card_deck card_deck-2">
              <PlanCard
                id="radio-plan-basic"
                titleId="radio-plan-basic-title"
                descId="radio-plan-basic-desc"
                title="Basic"
                subtitle="월 9,000원"
                desc="개인 프로젝트에 적합합니다."
                value="basic"
                checked
              />
              <PlanCard
                id="radio-plan-pro"
                titleId="radio-plan-pro-title"
                descId="radio-plan-pro-desc"
                title="Pro"
                subtitle="월 29,000원"
                desc="팀 협업과 고급 기능을 제공합니다."
                value="pro"
                colorClass="color_primary"
              />
              <PlanCard
                id="radio-plan-enterprise"
                titleId="radio-plan-enterprise-title"
                descId="radio-plan-enterprise-desc"
                title="Enterprise"
                subtitle="별도 문의"
                desc="대규모 조직용 맞춤 플랜입니다. (비활성)"
                value="enterprise"
                disabled
              />
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
                      <Radio
                        id="radio-role-read"
                        name="radio-role"
                        value="read"
                        checked
                        aria-labelledby="radio-role-read-title radio-role-read-desc"
                      />
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
                      <Radio
                        id="radio-role-write"
                        name="radio-role"
                        value="write"
                        aria-labelledby="radio-role-write-title radio-role-write-desc"
                      />
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
                      <Radio
                        id="radio-role-admin"
                        name="radio-role"
                        value="admin"
                        aria-labelledby="radio-role-admin-title radio-role-admin-desc"
                      />
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
                      <Radio
                        id="radio-plan-full-basic"
                        name="radio-plan-clickable"
                        value="basic"
                        checked
                        aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"
                      />
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
                      <Radio
                        id="radio-plan-full-pro"
                        name="radio-plan-clickable"
                        value="pro"
                        aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"
                      />
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
                      <Radio
                        id="radio-plan-full-enterprise"
                        name="radio-plan-clickable"
                        value="enterprise"
                        disabled
                        aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-enterprise-desc">
                    대규모 조직용 맞춤 플랜입니다. (비활성)
                  </div>
                </article>
              </div>
            </div>
          </fieldset>
        </>,
  );
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`fieldset`,{className:`radio_group`,children:[(0,g.jsx)(`legend`,{className:`radio_group-legend`,children:`요금제 선택`}),(0,g.jsxs)(`div`,{className:`card_deck card_deck-2`,children:[(0,g.jsx)(p,{id:`radio-plan-basic`,titleId:`radio-plan-basic-title`,descId:`radio-plan-basic-desc`,title:`Basic`,subtitle:`월 9,000원`,desc:`개인 프로젝트에 적합합니다.`,value:`basic`,checked:!0}),(0,g.jsx)(p,{id:`radio-plan-pro`,titleId:`radio-plan-pro-title`,descId:`radio-plan-pro-desc`,title:`Pro`,subtitle:`월 29,000원`,desc:`팀 협업과 고급 기능을 제공합니다.`,value:`pro`,colorClass:`color_primary`}),(0,g.jsx)(p,{id:`radio-plan-enterprise`,titleId:`radio-plan-enterprise-title`,descId:`radio-plan-enterprise-desc`,title:`Enterprise`,subtitle:`별도 문의`,desc:`대규모 조직용 맞춤 플랜입니다. (비활성)`,value:`enterprise`,disabled:!0})]})]}),(0,g.jsxs)(`fieldset`,{className:`radio_group`,children:[(0,g.jsx)(`legend`,{className:`radio_group-legend`,children:`기본 권한 (가로)`}),(0,g.jsxs)(`div`,{className:`card_deck card_deck-3`,children:[(0,g.jsx)(`div`,{className:`radio_card color_success`,children:(0,g.jsxs)(`article`,{className:`card card_compact`,children:[(0,g.jsxs)(`div`,{className:`card_header`,children:[(0,g.jsx)(`div`,{className:`card_header-main`,children:(0,g.jsx)(`h3`,{className:`card_title`,id:`radio-role-read-title`,children:`읽기`})}),(0,g.jsx)(`div`,{className:`card_extra`,children:(0,g.jsx)(l,{id:`radio-role-read`,name:`radio-role`,value:`read`,checked:!0,"aria-labelledby":`radio-role-read-title radio-role-read-desc`})})]}),(0,g.jsx)(`div`,{className:`card_body`,id:`radio-role-read-desc`,children:`조회 권한`})]})}),(0,g.jsx)(`div`,{className:`radio_card color_success`,children:(0,g.jsxs)(`article`,{className:`card card_compact`,children:[(0,g.jsxs)(`div`,{className:`card_header`,children:[(0,g.jsx)(`div`,{className:`card_header-main`,children:(0,g.jsx)(`h3`,{className:`card_title`,id:`radio-role-write-title`,children:`쓰기`})}),(0,g.jsx)(`div`,{className:`card_extra`,children:(0,g.jsx)(l,{id:`radio-role-write`,name:`radio-role`,value:`write`,"aria-labelledby":`radio-role-write-title radio-role-write-desc`})})]}),(0,g.jsx)(`div`,{className:`card_body`,id:`radio-role-write-desc`,children:`수정 권한`})]})}),(0,g.jsx)(`div`,{className:`radio_card`,children:(0,g.jsxs)(`article`,{className:`card card_compact`,children:[(0,g.jsxs)(`div`,{className:`card_header`,children:[(0,g.jsx)(`div`,{className:`card_header-main`,children:(0,g.jsx)(`h3`,{className:`card_title`,id:`radio-role-admin-title`,children:`관리`})}),(0,g.jsx)(`div`,{className:`card_extra`,children:(0,g.jsx)(l,{id:`radio-role-admin`,name:`radio-role`,value:`admin`,"aria-labelledby":`radio-role-admin-title radio-role-admin-desc`})})]}),(0,g.jsx)(`div`,{className:`card_body`,id:`radio-role-admin-desc`,children:`전체 관리 권한`})]})})]})]}),(0,g.jsxs)(`fieldset`,{className:`radio_group`,children:[(0,g.jsx)(`legend`,{className:`radio_group-legend`,children:`요금제 선택 — 카드 전체 클릭 (radio_card-clickable)`}),(0,g.jsxs)(`div`,{className:`card_deck card_deck-2`,children:[(0,g.jsx)(`div`,{className:`radio_card radio_card-clickable`,"data-ripple":``,children:(0,g.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,g.jsxs)(`div`,{className:`card_header`,children:[(0,g.jsxs)(`div`,{className:`card_header-main`,children:[(0,g.jsx)(`h3`,{className:`card_title`,id:`radio-plan-full-basic-title`,children:`Basic`}),(0,g.jsx)(`p`,{className:`card_subtitle`,children:`월 9,000원`})]}),(0,g.jsx)(`div`,{className:`card_extra`,children:(0,g.jsx)(l,{id:`radio-plan-full-basic`,name:`radio-plan-clickable`,value:`basic`,checked:!0,"aria-labelledby":`radio-plan-full-basic-title radio-plan-full-basic-desc`})})]}),(0,g.jsx)(`div`,{className:`card_body`,id:`radio-plan-full-basic-desc`,children:`카드 어디를 눌러도 선택됩니다.`})]})}),(0,g.jsx)(`div`,{className:`radio_card radio_card-clickable color_primary`,"data-ripple":``,children:(0,g.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,g.jsxs)(`div`,{className:`card_header`,children:[(0,g.jsxs)(`div`,{className:`card_header-main`,children:[(0,g.jsx)(`h3`,{className:`card_title`,id:`radio-plan-full-pro-title`,children:`Pro`}),(0,g.jsx)(`p`,{className:`card_subtitle`,children:`월 29,000원`})]}),(0,g.jsx)(`div`,{className:`card_extra`,children:(0,g.jsx)(l,{id:`radio-plan-full-pro`,name:`radio-plan-clickable`,value:`pro`,"aria-labelledby":`radio-plan-full-pro-title radio-plan-full-pro-desc`})})]}),(0,g.jsx)(`div`,{className:`card_body`,id:`radio-plan-full-pro-desc`,children:`제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.`})]})}),(0,g.jsx)(`div`,{className:`radio_card radio_card-clickable`,"data-ripple":``,children:(0,g.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,g.jsxs)(`div`,{className:`card_header`,children:[(0,g.jsxs)(`div`,{className:`card_header-main`,children:[(0,g.jsx)(`h3`,{className:`card_title`,id:`radio-plan-full-enterprise-title`,children:`Enterprise`}),(0,g.jsx)(`p`,{className:`card_subtitle`,children:`별도 문의`})]}),(0,g.jsx)(`div`,{className:`card_extra`,children:(0,g.jsx)(l,{id:`radio-plan-full-enterprise`,name:`radio-plan-clickable`,value:`enterprise`,disabled:!0,"aria-labelledby":`radio-plan-full-enterprise-title radio-plan-full-enterprise-desc`})})]}),(0,g.jsx)(`div`,{className:`card_body`,id:`radio-plan-full-enterprise-desc`,children:`대규모 조직용 맞춤 플랜입니다. (비활성)`})]})})]})]})]}))},N={name:`폼 레이아웃`,parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:`form_vertical · form_horizontal과 함께 사용합니다.`},source:{code:`import FormLayout from '@uxkm/react/form-layout';
import Radio from '@uxkm/react/radio';

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
}`,language:`tsx`}}},render:_((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{layout:`vertical`,fit:!0,children:(0,g.jsxs)(`div`,{className:`form_field`,children:[(0,g.jsx)(`span`,{className:`form_field-label`,id:`radio-form-vertical-label`,children:`수신 채널`}),(0,g.jsxs)(`fieldset`,{className:`radio_group`,"aria-labelledby":`radio-form-vertical-label`,children:[(0,g.jsx)(l,{name:`radio-form-channel`,checked:!0,value:`email`,label:`이메일`}),(0,g.jsx)(l,{name:`radio-form-channel`,value:`sms`,label:`SMS`})]})]})}),(0,g.jsx)(c,{layout:`horizontal`,fit:!0,children:(0,g.jsxs)(`div`,{className:`form_field`,children:[(0,g.jsx)(`span`,{className:`form_field-label`,id:`radio-form-horizontal-label`,children:`역할`}),(0,g.jsxs)(`fieldset`,{className:`radio_group radio_group_horizontal`,"aria-labelledby":`radio-form-horizontal-label`,children:[(0,g.jsx)(l,{button:!0,name:`radio-form-role`,checked:!0,value:`viewer`,label:`뷰어`}),(0,g.jsx)(l,{button:!0,name:`radio-form-role`,value:`editor`,label:`편집자`})]})]})})]}))},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  argTypes: {
    checked: {
      control: false,
      table: {
        disable: true
      }
    },
    label: {
      control: false,
      table: {
        disable: true
      }
    },
    name: {
      control: false,
      table: {
        disable: true
      }
    },
    value: {
      control: false,
      table: {
        disable: true
      }
    }
  },
  render: function PlaygroundRender(args) {
    const style = playgroundStyleArgs(args);
    const groupName = 'playground-preview';
    const [selected, setSelected] = useState('on');
    const items = <>
        <Radio {...style} name={groupName} value="off" label="미선택" checked={selected === 'off'} onChange={() => setSelected('off')} />
        <Radio {...style} name={groupName} value="on" label="선택됨" checked={selected === 'on'} onChange={() => setSelected('on')} />
      </>;
    return <div className="demo-stack">
        {args.button ? <fieldset className="radio_group radio_group_horizontal">{items}</fieldset> : items}
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '유형',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '기본은 wrapping \`label.radio\` 안에 \`span.radio_control\` + \`span.radio_label\` 순서입니다. 보이는 레이블이 없으면 \`label.radio_control\`로 input을 암묵 연결합니다. \`radio_label-end\`는 레이블 → 라디오 순서이며, 기본 너비는 콘텐츠 기준입니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '레이블 뒤',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`radio_label-end\`는 \`radio_label\` → \`radio_control\` 순으로 마크업합니다. 전체 너비가 필요하면 \`radio_block\` 또는 \`radio_group_block\`을 추가합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '레이블과 보조 설명(radio_hint)을 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '단독 사용',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '레이블 없이 라디오만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'radio_sm · radio(기본) · radio_lg로 박스·텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '너비',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '기본은 인라인(콘텐츠) 너비입니다. radio_block · radio_group_block으로 전체 너비를 사용합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '색상',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '상태',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '선택·미선택·비활성·오류(is-error) 상태를 지원합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '그룹',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'radio_group으로 여러 항목을 묶습니다. radio_group_horizontal로 가로 배치, radio_group_compact로 간격을 줄입니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '버튼형',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'radio_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '카드형',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '\`div.radio_card\` + \`article.card\` 조합입니다. \`card_extra\`에는 \`label.radio_control\`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 \`div.radio_card.radio_card-clickable\`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 \`aria-labelledby\`로 card_title · card_body에 연결합니다.'
      },
      source: {
        code: \`import Radio from '@uxkm/react/radio';

function PlanCard({
  id,
  titleId,
  descId,
  title,
  subtitle,
  desc,
  value,
  checked,
  disabled,
  colorClass,
  name = 'radio-plan',
}) {
  return (
    <div className={cnCard(colorClass)}>
      <article className="card card_compact card_shadow">
        <div className="card_header">
          <div className="card_header-main">
            <h3 className="card_title" id={titleId}>
              {title}
            </h3>
            <p className="card_subtitle">{subtitle}</p>
          </div>
          <div className="card_extra">
            <Radio
              id={id}
              name={name}
              value={value}
              checked={checked}
              disabled={disabled}
              aria-labelledby={\\\`\\\${titleId} \\\${descId}\\\`}
            />
          </div>
        </div>
        <div className="card_body" id={descId}>
          {desc}
        </div>
      </article>
    </div>
  );
}

function cnCard(colorClass, clickable) {
  return ['radio_card', colorClass, clickable && 'radio_card-clickable'].filter(Boolean).join(' ');
}

export function CardTypeExample() {
  return (
    <>
          <fieldset className="radio_group">
            <legend className="radio_group-legend">요금제 선택</legend>
            <div className="card_deck card_deck-2">
              <PlanCard
                id="radio-plan-basic"
                titleId="radio-plan-basic-title"
                descId="radio-plan-basic-desc"
                title="Basic"
                subtitle="월 9,000원"
                desc="개인 프로젝트에 적합합니다."
                value="basic"
                checked
              />
              <PlanCard
                id="radio-plan-pro"
                titleId="radio-plan-pro-title"
                descId="radio-plan-pro-desc"
                title="Pro"
                subtitle="월 29,000원"
                desc="팀 협업과 고급 기능을 제공합니다."
                value="pro"
                colorClass="color_primary"
              />
              <PlanCard
                id="radio-plan-enterprise"
                titleId="radio-plan-enterprise-title"
                descId="radio-plan-enterprise-desc"
                title="Enterprise"
                subtitle="별도 문의"
                desc="대규모 조직용 맞춤 플랜입니다. (비활성)"
                value="enterprise"
                disabled
              />
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
                      <Radio
                        id="radio-role-read"
                        name="radio-role"
                        value="read"
                        checked
                        aria-labelledby="radio-role-read-title radio-role-read-desc"
                      />
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
                      <Radio
                        id="radio-role-write"
                        name="radio-role"
                        value="write"
                        aria-labelledby="radio-role-write-title radio-role-write-desc"
                      />
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
                      <Radio
                        id="radio-role-admin"
                        name="radio-role"
                        value="admin"
                        aria-labelledby="radio-role-admin-title radio-role-admin-desc"
                      />
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
                      <Radio
                        id="radio-plan-full-basic"
                        name="radio-plan-clickable"
                        value="basic"
                        checked
                        aria-labelledby="radio-plan-full-basic-title radio-plan-full-basic-desc"
                      />
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
                      <Radio
                        id="radio-plan-full-pro"
                        name="radio-plan-clickable"
                        value="pro"
                        aria-labelledby="radio-plan-full-pro-title radio-plan-full-pro-desc"
                      />
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
                      <Radio
                        id="radio-plan-full-enterprise"
                        name="radio-plan-clickable"
                        value="enterprise"
                        disabled
                        aria-labelledby="radio-plan-full-enterprise-title radio-plan-full-enterprise-desc"
                      />
                    </div>
                  </div>
                  <div className="card_body" id="radio-plan-full-enterprise-desc">
                    대규모 조직용 맞춤 플랜입니다. (비활성)
                  </div>
                </article>
              </div>
            </div>
          </fieldset>
        </>,
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '폼 레이아웃',
  parameters: {
    controls: {
      disable: true
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
import Radio from '@uxkm/react/radio';

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
}`,...N.parameters?.docs?.source}}},P=[`Playground`,`Type`,`LabelEnd`,`Basic`,`Standalone`,`Size`,`Width`,`Color`,`State`,`Group`,`ButtonType`,`CardType`,`Form`]})))()}export{N as a,f as c,k as d,S as f,O as i,E as l,F as m,j as n,A as o,D as p,M as r,C as s,w as t,T as u};
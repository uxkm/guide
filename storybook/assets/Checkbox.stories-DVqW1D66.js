import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-IZ4Y9eS7.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i({label:e,checked:t,defaultChecked:n,disabled:r=!1,indeterminate:i=!1,labelEnd:s=!1,button:c=!1,ripple:l=!0,ariaLabel:u,children:d,className:f=``,onChange:p,id:m,...h}){let g=(0,a.useId)(),_=(0,a.useRef)(null),v=m??g,y=d??e,b=y==null||y===``,x=[`checkbox`,s&&`checkbox_label-end`,c&&`checkbox_button`,f].filter(Boolean).join(` `),S=p?{checked:!!t,onChange:p}:t==null?{defaultChecked:n}:{defaultChecked:!!t},C=(0,o.jsx)(`input`,{...h,ref:_,id:b?m:v,type:`checkbox`,className:`checkbox_input`,disabled:r,...S,"data-component":`Checkbox`}),w={"data-ripple":l?`true`:`false`};return(0,a.useEffect)(()=>{_.current&&(_.current.indeterminate=!!i)},[i]),b?(0,o.jsxs)(`label`,{className:[`checkbox_control`,f].filter(Boolean).join(` `),"aria-label":u,...w,children:[C,(0,o.jsx)(`span`,{className:`checkbox_box`,"aria-hidden":`true`})]}):c?(0,o.jsxs)(`label`,{className:x,...w,children:[C,(0,o.jsx)(`span`,{className:`checkbox_label`,children:y})]}):(0,o.jsxs)(`div`,{className:x,...w,children:[s&&(0,o.jsx)(`label`,{className:`checkbox_label`,htmlFor:v,children:y}),(0,o.jsxs)(`span`,{className:`checkbox_control`,children:[C,(0,o.jsx)(`span`,{className:`checkbox_box`,"aria-hidden":`true`})]}),!s&&(0,o.jsx)(`label`,{className:`checkbox_label`,htmlFor:v,children:y})]})}var a,o;function s(){return(s=e((()=>{a=n(),o=r(),i.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{disabled:{defaultValue:{value:`false`,computed:!1},required:!1},indeterminate:{defaultValue:{value:`false`,computed:!1},required:!1},labelEnd:{defaultValue:{value:`false`,computed:!1},required:!1},button:{defaultValue:{value:`false`,computed:!1},required:!1},ripple:{defaultValue:{value:`true`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var c=t({Basic:()=>g,ButtonType:()=>C,CardType:()=>w,Color:()=>b,Form:()=>T,Group:()=>S,LabelEnd:()=>h,Playground:()=>p,Size:()=>v,Standalone:()=>_,State:()=>x,Type:()=>m,Width:()=>y,__namedExportsOrder:()=>E,default:()=>f}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),s(),l=r(),u=e=>()=>(0,l.jsx)(`div`,{className:`demo-stack`,children:e}),d={label:`라벨`,checked:!1,disabled:!1,indeterminate:!1,labelEnd:!1,button:!1,ariaLabel:`접근성 라벨`},f={title:`폼/Checkbox`,id:`components-checkbox`,component:i,tags:[`autodocs`],argTypes:{label:{control:`text`,type:{name:`string`,summary:`string`}},checked:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},disabled:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},indeterminate:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},labelEnd:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},button:{control:`boolean`,type:{name:`boolean`,summary:`boolean`}},ariaLabel:{control:`text`,type:{name:`string`,summary:`string`}}},parameters:{controls:{disable:!1},layout:`padded`,docs:{description:{component:`다중 선택이 가능한 체크박스 컴포넌트입니다.`}}}},p={parameters:{controls:{disable:!1}},args:{...d},render:(e,{updateArgs:t})=>(0,l.jsx)(i,{...e,onChange:e=>t({checked:e.target.checked})})},m={name:`유형`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"기본은 `span.checkbox_control` + `label.checkbox_label for`(명시 연결) 순서입니다. 보이는 레이블이 없으면 `label.checkbox_control`로 input을 암묵 연결합니다. `checkbox_label-end`는 레이블 → 체크박스 순서이며, 기본 너비는 콘텐츠 기준입니다."},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{checked:!0,label:`기본 — checkbox`}),(0,l.jsx)(i,{labelEnd:!0,label:`레이블 뒤 — checkbox_label-end`}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group checkbox_group_horizontal`,children:[(0,l.jsx)(i,{button:!0,checked:!0,label:`버튼형`}),(0,l.jsx)(i,{button:!0,label:`UI`}),(0,l.jsx)(i,{button:!0,label:`UX`})]}),(0,l.jsx)(`div`,{className:`checkbox_card`,style:{maxWidth:360},children:(0,l.jsxs)(`article`,{className:`card card_compact`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsx)(`div`,{className:`card_header-main`,children:(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-type-card-title`,children:`카드형 — checkbox_card`})}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-type-card`,checked:!0,"aria-labelledby":`checkbox-type-card-title checkbox-type-card-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-type-card-desc`,children:`card 컴포넌트와 조합해 제목·설명을 표시합니다.`})]})})]}))},h={name:`레이블 뒤`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"`checkbox_label-end`는 `checkbox_label` → `checkbox_control` 순으로 마크업합니다. 전체 너비가 필요하면 `checkbox_block` 또는 `checkbox_group_block`을 추가합니다."},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{labelEnd:!0,checked:!0,label:`푸시 알림 받기`}),(0,l.jsx)(i,{labelEnd:!0,children:(0,l.jsxs)(`span`,{className:`checkbox_content`,children:[(0,l.jsx)(`span`,{className:`checkbox_label`,children:`마케팅 정보 수신`}),(0,l.jsx)(`span`,{className:`checkbox_hint`,children:`이벤트·할인 소식을 이메일로 받습니다.`})]})}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group checkbox_group_block`,style:{maxWidth:360,width:`100%`},children:[(0,l.jsx)(`legend`,{className:`checkbox_group-legend`,children:`알림 설정 — checkbox_group_block`}),(0,l.jsx)(i,{labelEnd:!0,checked:!0,label:`이메일 알림`}),(0,l.jsx)(i,{labelEnd:!0,checked:!0,label:`푸시 알림`}),(0,l.jsx)(i,{labelEnd:!0,label:`SMS 알림`})]}),(0,l.jsx)(i,{className:`checkbox_sm`,labelEnd:!0,checked:!0,label:`Small — checkbox_sm`}),(0,l.jsx)(i,{className:`checkbox_lg`,labelEnd:!0,checked:!0,label:`Large — checkbox_lg`})]}))},g={name:`기본`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`레이블과 보조 설명(checkbox_hint)을 함께 사용할 수 있습니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(`div`,{className:`form_field`,children:[(0,l.jsx)(`span`,{className:`form_field-label`,id:`checkbox-notify-label`,children:`알림 설정`}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group`,"aria-labelledby":`checkbox-notify-label`,children:[(0,l.jsx)(i,{checked:!0,children:(0,l.jsxs)(`span`,{className:`checkbox_content`,children:[(0,l.jsx)(`span`,{className:`checkbox_label`,children:`이메일 알림`}),(0,l.jsx)(`span`,{className:`checkbox_hint`,children:`중요 공지와 계정 관련 메일을 받습니다.`})]})}),(0,l.jsx)(i,{children:(0,l.jsxs)(`span`,{className:`checkbox_content`,children:[(0,l.jsx)(`span`,{className:`checkbox_label`,children:`푸시 알림`}),(0,l.jsx)(`span`,{className:`checkbox_hint`,children:`모바일·브라우저 푸시를 허용합니다.`})]})})]})]}))},_={name:`단독 사용`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`레이블 없이 체크박스만 사용할 수 있습니다. aria-label로 접근 가능한 이름을 지정합니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

export function StandaloneExample() {
  return (
    <>
      <Checkbox ariaLabel="항목 선택" />
      <Checkbox checked ariaLabel="선택됨" />
      <Checkbox disabled ariaLabel="비활성" />
    </>
  );
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{ariaLabel:`항목 선택`}),(0,l.jsx)(i,{checked:!0,ariaLabel:`선택됨`}),(0,l.jsx)(i,{disabled:!0,ariaLabel:`비활성`})]}))},v={name:`크기`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`checkbox_sm · checkbox(기본) · checkbox_lg로 박스·텍스트 크기를 조절합니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

export function SizeExample() {
  return (
    <>
      <Checkbox className="checkbox_sm" checked label="Small — checkbox_sm" />
      <Checkbox checked label="Medium — 기본" />
      <Checkbox className="checkbox_lg" checked label="Large — checkbox_lg" />
    </>
  );
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{className:`checkbox_sm`,checked:!0,label:`Small — checkbox_sm`}),(0,l.jsx)(i,{checked:!0,label:`Medium — 기본`}),(0,l.jsx)(i,{className:`checkbox_lg`,checked:!0,label:`Large — checkbox_lg`})]}))},y={name:`너비`,parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:`기본은 인라인(콘텐츠) 너비입니다. checkbox_block · checkbox_group_block으로 전체 너비를 사용합니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{checked:!0,label:`기본 — 인라인 너비`}),(0,l.jsx)(i,{className:`checkbox_block`,checked:!0,label:`checkbox_block — 전체 너비`}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group checkbox_group_block`,style:{maxWidth:360,width:`100%`},children:[(0,l.jsx)(`legend`,{className:`checkbox_group-legend`,children:`checkbox_group_block`}),(0,l.jsx)(i,{checked:!0,label:`항목 1`}),(0,l.jsx)(i,{label:`항목 2`})]})]}))},b={name:`색상`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`color_primary(기본) · color_success · color_danger · color_warning으로 선택 색을 지정합니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

export function ColorExample() {
  return (
    <>
      <Checkbox className="color_primary" checked label="Primary" />
      <Checkbox className="color_success" checked label="Success" />
      <Checkbox className="color_danger" checked label="Danger" />
      <Checkbox className="color_warning" checked label="Warning" />
    </>
  );
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{className:`color_primary`,checked:!0,label:`Primary`}),(0,l.jsx)(i,{className:`color_success`,checked:!0,label:`Success`}),(0,l.jsx)(i,{className:`color_danger`,checked:!0,label:`Danger`}),(0,l.jsx)(i,{className:`color_warning`,checked:!0,label:`Warning`})]}))},x={name:`상태`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`선택·미선택·불확정(indeterminate)·비활성·오류(is-error) 상태를 지원합니다. 불확정은 JS로 input.indeterminate = true를 설정합니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{label:`미선택`}),(0,l.jsx)(i,{checked:!0,label:`선택됨`}),(0,l.jsx)(i,{checked:!0,indeterminate:!0,label:`불확정`}),(0,l.jsx)(i,{disabled:!0,label:`비활성`}),(0,l.jsx)(i,{checked:!0,disabled:!0,label:`선택됨 (비활성)`})]}))},S={name:`그룹`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`checkbox_group으로 여러 항목을 묶습니다. checkbox_group_horizontal로 가로 배치, checkbox_group_compact로 간격을 줄입니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`fieldset`,{className:`checkbox_group`,children:[(0,l.jsx)(`legend`,{className:`checkbox_group-legend`,children:`관심 분야 (세로)`}),(0,l.jsx)(i,{checked:!0,label:`디자인`}),(0,l.jsx)(i,{label:`개발`}),(0,l.jsx)(i,{label:`기획`})]}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group checkbox_group_horizontal`,children:[(0,l.jsx)(`legend`,{className:`checkbox_group-legend`,children:`언어 (가로)`}),(0,l.jsx)(i,{button:!0,checked:!0,label:`한국어`}),(0,l.jsx)(i,{button:!0,checked:!0,label:`English`}),(0,l.jsx)(i,{button:!0,label:`日本語`})]})]}))},C={name:`버튼형`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`checkbox_button은 태그·필터 UI에 적합합니다. 크기·색상 변형과 함께 사용할 수 있습니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`fieldset`,{className:`checkbox_group checkbox_group_horizontal`,children:[(0,l.jsx)(i,{button:!0,checked:!0,label:`전체`}),(0,l.jsx)(i,{button:!0,label:`진행 중`}),(0,l.jsx)(i,{button:!0,label:`완료`}),(0,l.jsx)(i,{button:!0,disabled:!0,label:`보류 (비활성)`})]}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group checkbox_group_horizontal`,children:[(0,l.jsx)(i,{button:!0,className:`checkbox_sm color_success`,checked:!0,label:`Small`}),(0,l.jsx)(i,{button:!0,className:`color_success`,checked:!0,label:`Medium`}),(0,l.jsx)(i,{button:!0,className:`checkbox_lg color_success`,checked:!0,label:`Large`})]})]}))},w={name:`카드형`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"`div.checkbox_card` + `article.card` 조합입니다. `card_extra`에는 `label.checkbox_control`로 input을 암묵 연결합니다. 카드 전체를 눌러 선택하려면 `div.checkbox_card.checkbox_card-clickable`을 쓰고 클릭은 JS로 위임합니다. 접근 가능한 이름은 `aria-labelledby`로 card_title · card_body에 연결합니다."},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`fieldset`,{className:`checkbox_group`,children:[(0,l.jsx)(`legend`,{className:`checkbox_group-legend`,children:`요금제 선택 (다중)`}),(0,l.jsxs)(`div`,{className:`card_deck card_deck-2`,children:[(0,l.jsx)(`div`,{className:`checkbox_card`,children:(0,l.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsxs)(`div`,{className:`card_header-main`,children:[(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-plan-basic-title`,children:`Basic`}),(0,l.jsx)(`p`,{className:`card_subtitle`,children:`월 9,000원`})]}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-plan-basic`,name:`plan`,value:`basic`,checked:!0,"aria-labelledby":`checkbox-plan-basic-title checkbox-plan-basic-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-plan-basic-desc`,children:`개인 프로젝트에 적합합니다.`})]})}),(0,l.jsx)(`div`,{className:`checkbox_card color_primary`,children:(0,l.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsxs)(`div`,{className:`card_header-main`,children:[(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-plan-pro-title`,children:`Pro`}),(0,l.jsx)(`p`,{className:`card_subtitle`,children:`월 29,000원`})]}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-plan-pro`,name:`plan`,value:`pro`,"aria-labelledby":`checkbox-plan-pro-title checkbox-plan-pro-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-plan-pro-desc`,children:`팀 협업과 고급 기능을 제공합니다.`})]})}),(0,l.jsx)(`div`,{className:`checkbox_card`,children:(0,l.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsxs)(`div`,{className:`card_header-main`,children:[(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-plan-enterprise-title`,children:`Enterprise`}),(0,l.jsx)(`p`,{className:`card_subtitle`,children:`별도 문의`})]}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-plan-enterprise`,name:`plan`,value:`enterprise`,disabled:!0,"aria-labelledby":`checkbox-plan-enterprise-title checkbox-plan-enterprise-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-plan-enterprise-desc`,children:`대규모 조직용 맞춤 플랜입니다. (비활성)`})]})})]})]}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group`,children:[(0,l.jsx)(`legend`,{className:`checkbox_group-legend`,children:`권한 (가로)`}),(0,l.jsxs)(`div`,{className:`card_deck card_deck-3`,children:[(0,l.jsx)(`div`,{className:`checkbox_card color_success`,children:(0,l.jsxs)(`article`,{className:`card card_compact`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsx)(`div`,{className:`card_header-main`,children:(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-perm-read-title`,children:`읽기`})}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-perm-read`,checked:!0,"aria-labelledby":`checkbox-perm-read-title checkbox-perm-read-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-perm-read-desc`,children:`조회 권한`})]})}),(0,l.jsx)(`div`,{className:`checkbox_card color_success`,children:(0,l.jsxs)(`article`,{className:`card card_compact`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsx)(`div`,{className:`card_header-main`,children:(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-perm-write-title`,children:`쓰기`})}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-perm-write`,checked:!0,"aria-labelledby":`checkbox-perm-write-title checkbox-perm-write-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-perm-write-desc`,children:`수정 권한`})]})}),(0,l.jsx)(`div`,{className:`checkbox_card`,children:(0,l.jsxs)(`article`,{className:`card card_compact`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsx)(`div`,{className:`card_header-main`,children:(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-perm-delete-title`,children:`삭제`})}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-perm-delete`,"aria-labelledby":`checkbox-perm-delete-title checkbox-perm-delete-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-perm-delete-desc`,children:`삭제 권한`})]})})]})]}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group`,children:[(0,l.jsx)(`legend`,{className:`checkbox_group-legend`,children:`요금제 선택 — 카드 전체 클릭 (checkbox_card-clickable)`}),(0,l.jsxs)(`div`,{className:`card_deck card_deck-2`,children:[(0,l.jsx)(`div`,{className:`checkbox_card checkbox_card-clickable`,"data-ripple":``,children:(0,l.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsxs)(`div`,{className:`card_header-main`,children:[(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-plan-full-basic-title`,children:`Basic`}),(0,l.jsx)(`p`,{className:`card_subtitle`,children:`월 9,000원`})]}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-plan-full-basic`,name:`plan-clickable`,value:`basic`,checked:!0,"aria-labelledby":`checkbox-plan-full-basic-title checkbox-plan-full-basic-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-plan-full-basic-desc`,children:`카드 어디를 눌러도 선택됩니다.`})]})}),(0,l.jsx)(`div`,{className:`checkbox_card checkbox_card-clickable color_primary`,"data-ripple":``,children:(0,l.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsxs)(`div`,{className:`card_header-main`,children:[(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-plan-full-pro-title`,children:`Pro`}),(0,l.jsx)(`p`,{className:`card_subtitle`,children:`월 29,000원`})]}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-plan-full-pro`,name:`plan-clickable`,value:`pro`,"aria-labelledby":`checkbox-plan-full-pro-title checkbox-plan-full-pro-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-plan-full-pro-desc`,children:`제목·설명·여백을 포함한 전체 영역이 클릭 대상입니다.`})]})}),(0,l.jsx)(`div`,{className:`checkbox_card checkbox_card-clickable`,"data-ripple":``,children:(0,l.jsxs)(`article`,{className:`card card_compact card_shadow`,children:[(0,l.jsxs)(`div`,{className:`card_header`,children:[(0,l.jsxs)(`div`,{className:`card_header-main`,children:[(0,l.jsx)(`h3`,{className:`card_title`,id:`checkbox-plan-full-enterprise-title`,children:`Enterprise`}),(0,l.jsx)(`p`,{className:`card_subtitle`,children:`별도 문의`})]}),(0,l.jsx)(`div`,{className:`card_extra`,children:(0,l.jsx)(i,{id:`checkbox-plan-full-enterprise`,name:`plan-clickable`,value:`enterprise`,disabled:!0,"aria-labelledby":`checkbox-plan-full-enterprise-title checkbox-plan-full-enterprise-desc`})})]}),(0,l.jsx)(`div`,{className:`card_body`,id:`checkbox-plan-full-enterprise-desc`,children:`대규모 조직용 맞춤 플랜입니다. (비활성)`})]})})]})]})]}))},T={name:`폼 레이아웃`,parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:`form_vertical · form_horizontal과 함께 사용합니다.`},source:{code:`import Checkbox from '@uxkm/react/checkbox';

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
}`,language:`tsx`}}},render:u((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`form`,{className:`form form_vertical form_fit`,children:(0,l.jsxs)(`div`,{className:`form_field`,children:[(0,l.jsx)(`span`,{className:`form_field-label`,id:`checkbox-form-vertical-label`,children:`수신 동의`}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group`,"aria-labelledby":`checkbox-form-vertical-label`,children:[(0,l.jsx)(i,{checked:!0,label:`마케팅 정보 수신`}),(0,l.jsx)(i,{label:`뉴스레터 구독`})]})]})}),(0,l.jsx)(`form`,{className:`form form_horizontal form_fit`,children:(0,l.jsxs)(`div`,{className:`form_field`,children:[(0,l.jsx)(`span`,{className:`form_field-label`,id:`checkbox-form-horizontal-label`,children:`권한`}),(0,l.jsxs)(`fieldset`,{className:`checkbox_group checkbox_group_horizontal`,"aria-labelledby":`checkbox-form-horizontal-label`,children:[(0,l.jsx)(i,{button:!0,checked:!0,label:`조회`}),(0,l.jsx)(i,{button:!0,label:`편집`})]})]})})]}))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        code: \`import Checkbox from '@uxkm/react/checkbox';

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
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`Type`,`LabelEnd`,`Basic`,`Standalone`,`Size`,`Width`,`Color`,`State`,`Group`,`ButtonType`,`CardType`,`Form`]})))()}export{b as a,h as c,x as d,m as f,c as i,v as l,D as m,C as n,T as o,y as p,w as r,S as s,g as t,_ as u};
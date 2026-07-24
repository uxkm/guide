import{r,u as ge,c as ve,n as je,j as e,a as we,b as ye,d as Ce,I as U}from"./iframe-ifEc15ad.js";import{w as o}from"./story-renders-Hdz_JUlO.js";import{r as Pe,a as ze}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const _e=r.createContext(null),Ee=new Set(["horizontal","vertical"]),Ne=new Set(["sm","md","lg"]),De=new Set(["","center"]),Re=ye("Steps",{defaults:{direction:"horizontal",size:"md"},booleanProps:new Set(["dot","iconStyle","navigable"]),selfClosing:!1});function s({current:n,direction:p="horizontal",size:c="md",dot:u,iconStyle:S,navigable:l,align:f="",ariaLabel:x,children:I,className:h,...g}){const b=r.useRef(null),m=Ee.has(p)?p:"horizontal",d=Ne.has(c)?c:"md",a=De.has(f)?f:"";ge(Re,{current:n,direction:m,size:d,dot:u,iconStyle:S,navigable:l,align:a||void 0,ariaLabel:x},ve({default:I}),b,{className:h,...g});const v=r.useMemo(()=>{const i=["steps"];return m==="vertical"&&i.push("steps_vertical"),d==="sm"&&i.push("steps_sm"),d==="lg"&&i.push("steps_lg"),u&&i.push("steps_dot"),S&&i.push("steps_icon-style"),l&&i.push("steps_navigable"),a==="center"&&i.push("steps_align-center"),i},[m,d,u,S,l,a]),R=r.useMemo(()=>({navigable:!!l}),[l]),{class:Le,...A}=g,V=je(A),j=r.Children.toArray(I).filter(r.isValidElement);return e.jsx(_e.Provider,{value:R,children:e.jsx("ol",{ref:b,className:we(v,h),"aria-label":x,...V,children:j.map((i,T)=>r.cloneElement(i,{index:i.props.index??T+1,isLast:T===j.length-1}))})})}s.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{direction:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},align:{defaultValue:{value:"''",computed:!1},required:!1}}};const Ae=new Set(["finished","active","wait","error"]),Ve=ye("StepsItem",{defaults:{status:"wait"},booleanProps:new Set(["ripple"]),skipProps:["index","isLast"],labelProp:"title",selfClosing:!0});function F({status:n,stepIndex:p}){return n==="finished"?e.jsx(U,{name:"check",className:"steps_icon"}):n==="error"?e.jsx(U,{name:"close",className:"steps_icon"}):e.jsx("span",{className:"steps_index",children:p})}function t({ripple:n,title:p,description:c,status:u="wait",index:S,isLast:l,children:f,className:x,onClick:I,...h}){const{rippleAttrs:g}=Ce({ripple:n}),b=r.useRef(null),m=r.useContext(_e),d=(m==null?void 0:m.navigable)??!1,a=Ae.has(u)?u:"wait",v=S??0;ge(Ve,{ripple:n,title:p,description:c,status:a,index:S},ve({}),b,{className:x,onClick:I,...h});const R=r.useMemo(()=>["steps_item",`is-${a}`],[a]),{class:Le,...A}=h,V=je(A),j=e.jsxs("span",{className:"steps_head",children:[e.jsx("span",{className:"steps_indicator","aria-hidden":"true",children:e.jsx(F,{status:a,stepIndex:v})}),l?null:e.jsx("span",{className:"steps_tail","aria-hidden":"true"})]}),i=e.jsxs("span",{className:"steps_content",children:[e.jsx("span",{className:"steps_title",children:p}),c?e.jsx("span",{className:"steps_desc",children:c}):null]});return e.jsx("li",{ref:b,className:we(R,x),"aria-current":!d&&a==="active"?"step":void 0,...V,children:d?e.jsxs("button",{type:"button",className:"steps_trigger",disabled:a==="wait","aria-current":a==="active"?"step":void 0,onClick:I,...g,children:[j,i]}):f??e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"steps_head",children:[e.jsx("span",{className:"steps_indicator","aria-hidden":"true",children:e.jsx(F,{status:a,stepIndex:v})}),l?null:e.jsx("span",{className:"steps_tail","aria-hidden":"true"})]}),e.jsxs("div",{className:"steps_content",children:[e.jsx("p",{className:"steps_title",children:p}),c?e.jsx("p",{className:"steps_desc",children:c}):null]})]})})}t.__docgenInfo={description:"",methods:[],displayName:"StepsItem",props:{status:{defaultValue:{value:"'wait'",computed:!1},required:!1}}};const ke=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Te=[{name:"current",type:"number",default:"—",description:"현재 단계 인덱스 (0-based, 선택)"},{name:"direction",type:"'horizontal' | 'vertical'",default:"horizontal",description:"steps_vertical"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"steps_sm · steps_lg"},{name:"dot",type:"boolean",default:"false",description:"steps_dot — 원형 마커"},{name:"icon-style",type:"boolean",default:"false",description:"steps_icon-style"},{name:"navigable",type:"boolean",default:"false",description:"steps_navigable — 완료 단계 클릭"},{name:"align",type:"'' | 'center'",default:"—",description:"steps_align-center"},{name:"aria-label",type:"string",default:"—",description:"ol aria-label"}],Ue=ke,Fe=[{name:"title",type:"string",default:"—",description:"단계 제목 (필수)"},{name:"description",type:"string",default:"—",description:"단계 설명"},{name:"status",type:"'finished' | 'active' | 'wait' | 'error'",default:"wait",description:"is-finished · is-active · is-wait · is-error"},{name:"index",type:"number",default:"—",description:"단계 번호 (자동 할당)"},Pe],Be=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ge=[{name:"default",description:"StepsItem 나열"}],qe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Me=[{name:"steps · steps_item · steps_head · steps_indicator",description:"루트·항목·헤드·인디케이터"},{name:"steps_title · steps_desc · steps_tail",description:"제목·설명·연결선"},{name:"steps_trigger",description:"navigable 모드 클릭 버튼"},{name:"steps_vertical · steps_dot · steps_icon-style · steps_navigable",description:"레이아웃·스타일"},{name:"steps_sm · steps_lg · steps_align-center",description:"크기·정렬"},{name:"is-finished · is-active · is-wait · is-error",description:"단계 상태"},{name:'aria-current="step"',description:"현재 단계"},...ze],Oe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"--steps-indicator-size · --steps-gap",default:"—",description:"인디케이터·간격"},{name:"--steps-title-size · --steps-desc-size",default:"—",description:"타이포"},{name:"--steps-tail-color",default:"—",description:"연결선 색"},{name:"--steps-pulse-duration",default:"1.5s",description:"is-active 인디케이터 파장 애니메이션"}],B=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],$e=[{name:"children",description:"StepsItem 나열 (Vue default 슬롯)"}],He=[{name:"children",description:"커스텀 항목 마크업 (navigable이 아닐 때)"}],Ze=[{title:"API · Steps Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 icon-style · aria-label은 iconStyle · ariaLabel입니다.",tables:[{columns:ke,rows:Te,codeColumn:"name"}]},{title:"API · StepsItem Props",tables:[{columns:Ue,rows:Fe,codeColumn:"name"}]},{title:"API · Steps Children",description:"Vue default 슬롯은 React children으로 다룹니다.",tables:[{columns:Be,rows:Ge,codeColumn:"name"},{columns:B,rows:$e,codeColumn:"name"}]},{title:"API · StepsItem Children",tables:[{columns:B,rows:He,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:qe,rows:Me,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Oe,rows:Qe,codeColumn:"name"}]}],Je={current:1,direction:"horizontal",size:"md",dot:!1,iconStyle:!1,navigable:!1,align:"center",ariaLabel:"접근성 라벨"},et={title:"Components/네비게이션/Steps",id:"components-steps",component:s,subcomponents:{StepsItem:t},tags:["autodocs"],argTypes:{current:{control:"number",type:{name:"number",summary:"number"}},direction:{control:"select",options:["horizontal","vertical"],type:{name:"enum",summary:"'horizontal' | 'vertical'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},dot:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconStyle:{control:"boolean",type:{name:"boolean",summary:"boolean"}},navigable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},align:{control:"select",options:["","center"],type:{name:"enum",summary:"'' | 'center'"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ze,docs:{description:{component:"프로세스·마법사 진행 단계를 표시하는 Steps 컴포넌트입니다."}}}},w={parameters:{controls:{disable:!1}},args:{...Je},render:n=>e.jsxs(s,{...n,current:1,children:[e.jsx(t,{title:"단계 1",description:"설명"}),e.jsx(t,{title:"단계 2",description:"설명"})]})},y={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function BasicExample() {
  return (
    <Steps ariaLabel="주문 진행 단계">
      <StepsItem title="장바구니" description="상품 확인" status="finished" />
      <StepsItem title="배송 정보" description="주소 입력" status="finished" />
      <StepsItem title="결제" description="결제 수단 선택" status="active" />
      <StepsItem title="완료" description="주문 확인" status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{ariaLabel:"주문 진행 단계",children:[e.jsx(t,{title:"장바구니",description:"상품 확인",status:"finished"}),e.jsx(t,{title:"배송 정보",description:"주소 입력",status:"finished"}),e.jsx(t,{title:"결제",description:"결제 수단 선택",status:"active"}),e.jsx(t,{title:"완료",description:"주문 확인",status:"wait"})]}))},_={name:"간단",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function SimpleExample() {
  return (
    <Steps ariaLabel="회원가입 단계">
      <StepsItem title="이메일 인증" status="finished" />
      <StepsItem title="프로필 설정" status="active" />
      <StepsItem title="완료" status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{ariaLabel:"회원가입 단계",children:[e.jsx(t,{title:"이메일 인증",status:"finished"}),e.jsx(t,{title:"프로필 설정",status:"active"}),e.jsx(t,{title:"완료",status:"wait"})]}))},k={name:"세로형",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function VerticalExample() {
  return (
    <Steps direction="vertical" className="steps_demo-narrow" ariaLabel="프로젝트 생성 단계">
      <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
      <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
      <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
      <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{direction:"vertical",className:"steps_demo-narrow",ariaLabel:"프로젝트 생성 단계",children:[e.jsx(t,{title:"기본 정보",description:"프로젝트 이름과 설명을 입력합니다.",status:"finished"}),e.jsx(t,{title:"팀 구성",description:"멤버를 초대하고 역할을 지정합니다.",status:"active"}),e.jsx(t,{title:"저장소 연결",description:"Git 저장소를 연동합니다.",status:"wait"}),e.jsx(t,{title:"검토 및 생성",description:"설정을 확인하고 프로젝트를 만듭니다.",status:"wait"})]}))},L={name:"도트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function DotExample() {
  return (
    <Steps dot ariaLabel="배송 추적 단계">
      <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
      <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
      <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
      <StepsItem title="배송 완료" description="대기 중" status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{dot:!0,ariaLabel:"배송 추적 단계",children:[e.jsx(t,{title:"주문 접수",description:"6월 20일 09:12",status:"finished"}),e.jsx(t,{title:"배송 준비",description:"6월 20일 14:30",status:"finished"}),e.jsx(t,{title:"배송 중",description:"예상 도착 6월 21일",status:"active"}),e.jsx(t,{title:"배송 완료",description:"대기 중",status:"wait"})]}))},C={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function IconStyleExample() {
  return (
    <Steps iconStyle ariaLabel="온보딩 단계">
      <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
      <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
      <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{iconStyle:!0,ariaLabel:"온보딩 단계",children:[e.jsx(t,{title:"계정 생성",description:"이메일 인증 완료",status:"finished"}),e.jsx(t,{title:"팀 초대",description:"동료를 초대하세요",status:"active"}),e.jsx(t,{title:"첫 프로젝트",description:"프로젝트를 만드세요",status:"wait"})]}))},P={name:"탐색 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function NavigableExample() {
  return (
    <Steps navigable ariaLabel="설정 마법사 — 탐색 가능">
      <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
      <StepsItem title="알림" description="수신 채널 설정" status="active" />
      <StepsItem title="확인" description="설정 검토" status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{navigable:!0,ariaLabel:"설정 마법사 — 탐색 가능",children:[e.jsx(t,{title:"환경",description:"개발 · 스테이징",status:"finished"}),e.jsx(t,{title:"알림",description:"수신 채널 설정",status:"active"}),e.jsx(t,{title:"확인",description:"설정 검토",status:"wait"})]}))},z={name:"오류",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function ErrorExample() {
  return (
    <Steps ariaLabel="결제 단계 — 오류">
      <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
      <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
      <StepsItem title="완료" description="주문 접수" status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{ariaLabel:"결제 단계 — 오류",children:[e.jsx(t,{title:"주문 확인",description:"상품 및 수량 확인",status:"finished"}),e.jsx(t,{title:"결제 실패",description:"카드 승인이 거절되었습니다",status:"error"}),e.jsx(t,{title:"완료",description:"주문 접수",status:"wait"})]}))},E={name:"가운데 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function AlignExample() {
  return (
    <Steps align="center" ariaLabel="출시 단계">
      <StepsItem title="기획" description="요구사항 정의" status="finished" />
      <StepsItem title="개발" description="기능 구현" status="finished" />
      <StepsItem title="QA" description="품질 검증" status="active" />
      <StepsItem title="출시" description="프로덕션 배포" status="wait" />
    </Steps>
  );
}`,language:"tsx"}}},render:o(e.jsxs(s,{align:"center",ariaLabel:"출시 단계",children:[e.jsx(t,{title:"기획",description:"요구사항 정의",status:"finished"}),e.jsx(t,{title:"개발",description:"기능 구현",status:"finished"}),e.jsx(t,{title:"QA",description:"품질 검증",status:"active"}),e.jsx(t,{title:"출시",description:"프로덕션 배포",status:"wait"})]}))},N={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다."},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function SizeExample() {
  return (
    <>
      <Steps size="sm" ariaLabel="Small 단계">
        <StepsItem title="1단계" status="finished" />
        <StepsItem title="2단계" status="active" />
        <StepsItem title="3단계" status="wait" />
      </Steps>
      <Steps size="lg" ariaLabel="Large 단계">
        <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
        <StepsItem title="디자인" description="UI 키트 제작" status="active" />
        <StepsItem title="개발" description="구현 및 테스트" status="wait" />
      </Steps>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsxs(s,{size:"sm",ariaLabel:"Small 단계",children:[e.jsx(t,{title:"1단계",status:"finished"}),e.jsx(t,{title:"2단계",status:"active"}),e.jsx(t,{title:"3단계",status:"wait"})]}),e.jsxs(s,{size:"lg",ariaLabel:"Large 단계",children:[e.jsx(t,{title:"요구사항",description:"범위 및 일정 확정",status:"finished"}),e.jsx(t,{title:"디자인",description:"UI 키트 제작",status:"active"}),e.jsx(t,{title:"개발",description:"구현 및 테스트",status:"wait"})]})]}))},D={name:"상태 요약",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'각 상태 클래스의 시각적 의미입니다. 현재 단계에는 `aria-current="step"`을 함께 지정합니다.'},source:{code:`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function StateExample() {
  return (
    <>
      <Steps ariaLabel="상태 예시 — 완료">
        <StepsItem title="is-finished" description="완료된 단계" status="finished" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 진행 중">
        <StepsItem title="is-active" description="현재 진행 단계" status="active" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 대기">
        <StepsItem title="is-wait" description="아직 도달하지 않은 단계" status="wait" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 오류">
        <StepsItem title="is-error" description="오류가 발생한 단계" status="error" />
      </Steps>
    </>
  );
}`,language:"tsx"}}},render:o(e.jsxs(e.Fragment,{children:[e.jsx(s,{ariaLabel:"상태 예시 — 완료",children:e.jsx(t,{title:"is-finished",description:"완료된 단계",status:"finished"})}),e.jsx(s,{ariaLabel:"상태 예시 — 진행 중",children:e.jsx(t,{title:"is-active",description:"현재 진행 단계",status:"active"})}),e.jsx(s,{ariaLabel:"상태 예시 — 대기",children:e.jsx(t,{title:"is-wait",description:"아직 도달하지 않은 단계",status:"wait"})}),e.jsx(s,{ariaLabel:"상태 예시 — 오류",children:e.jsx(t,{title:"is-error",description:"오류가 발생한 단계",status:"error"})})]}))};var G,q,M;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Steps {...args} current={1}>
      <StepsItem title="단계 1" description="설명" />
      <StepsItem title="단계 2" description="설명" />
    </Steps>
}`,...(M=(q=w.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var O,Q,$;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        story: '가로형 단계 표시입니다. is-finished · is-active · is-wait로 진행 상태를 구분합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function BasicExample() {
  return (
    <Steps ariaLabel="주문 진행 단계">
      <StepsItem title="장바구니" description="상품 확인" status="finished" />
      <StepsItem title="배송 정보" description="주소 입력" status="finished" />
      <StepsItem title="결제" description="결제 수단 선택" status="active" />
      <StepsItem title="완료" description="주문 확인" status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps ariaLabel="주문 진행 단계">
      <StepsItem title="장바구니" description="상품 확인" status="finished" />
      <StepsItem title="배송 정보" description="주소 입력" status="finished" />
      <StepsItem title="결제" description="결제 수단 선택" status="active" />
      <StepsItem title="완료" description="주문 확인" status="wait" />
    </Steps>)
}`,...($=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var H,Z,J;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '간단',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function SimpleExample() {
  return (
    <Steps ariaLabel="회원가입 단계">
      <StepsItem title="이메일 인증" status="finished" />
      <StepsItem title="프로필 설정" status="active" />
      <StepsItem title="완료" status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps ariaLabel="회원가입 단계">
      <StepsItem title="이메일 인증" status="finished" />
      <StepsItem title="프로필 설정" status="active" />
      <StepsItem title="완료" status="wait" />
    </Steps>)
}`,...(J=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,W,X;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '세로형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'steps_vertical로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function VerticalExample() {
  return (
    <Steps direction="vertical" className="steps_demo-narrow" ariaLabel="프로젝트 생성 단계">
      <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
      <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
      <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
      <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps direction="vertical" className="steps_demo-narrow" ariaLabel="프로젝트 생성 단계">
      <StepsItem title="기본 정보" description="프로젝트 이름과 설명을 입력합니다." status="finished" />
      <StepsItem title="팀 구성" description="멤버를 초대하고 역할을 지정합니다." status="active" />
      <StepsItem title="저장소 연결" description="Git 저장소를 연동합니다." status="wait" />
      <StepsItem title="검토 및 생성" description="설정을 확인하고 프로젝트를 만듭니다." status="wait" />
    </Steps>)
}`,...(X=(W=k.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,te;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '도트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'steps_dot으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function DotExample() {
  return (
    <Steps dot ariaLabel="배송 추적 단계">
      <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
      <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
      <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
      <StepsItem title="배송 완료" description="대기 중" status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps dot ariaLabel="배송 추적 단계">
      <StepsItem title="주문 접수" description="6월 20일 09:12" status="finished" />
      <StepsItem title="배송 준비" description="6월 20일 14:30" status="finished" />
      <StepsItem title="배송 중" description="예상 도착 6월 21일" status="active" />
      <StepsItem title="배송 완료" description="대기 중" status="wait" />
    </Steps>)
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ie,ae;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '아이콘',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'steps_icon-style로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function IconStyleExample() {
  return (
    <Steps iconStyle ariaLabel="온보딩 단계">
      <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
      <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
      <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps iconStyle ariaLabel="온보딩 단계">
      <StepsItem title="계정 생성" description="이메일 인증 완료" status="finished" />
      <StepsItem title="팀 초대" description="동료를 초대하세요" status="active" />
      <StepsItem title="첫 프로젝트" description="프로젝트를 만드세요" status="wait" />
    </Steps>)
}`,...(ae=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var re,oe,ne;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '탐색 가능',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'steps_navigable과 steps_trigger로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function NavigableExample() {
  return (
    <Steps navigable ariaLabel="설정 마법사 — 탐색 가능">
      <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
      <StepsItem title="알림" description="수신 채널 설정" status="active" />
      <StepsItem title="확인" description="설정 검토" status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps navigable ariaLabel="설정 마법사 — 탐색 가능">
      <StepsItem title="환경" description="개발 · 스테이징" status="finished" />
      <StepsItem title="알림" description="수신 채널 설정" status="active" />
      <StepsItem title="확인" description="설정 검토" status="wait" />
    </Steps>)
}`,...(ne=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var pe,ce,le;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '오류',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'is-error로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function ErrorExample() {
  return (
    <Steps ariaLabel="결제 단계 — 오류">
      <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
      <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
      <StepsItem title="완료" description="주문 접수" status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps ariaLabel="결제 단계 — 오류">
      <StepsItem title="주문 확인" description="상품 및 수량 확인" status="finished" />
      <StepsItem title="결제 실패" description="카드 승인이 거절되었습니다" status="error" />
      <StepsItem title="완료" description="주문 접수" status="wait" />
    </Steps>)
}`,...(le=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,de,ue;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: '가운데 정렬',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'steps_align-center로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function AlignExample() {
  return (
    <Steps align="center" ariaLabel="출시 단계">
      <StepsItem title="기획" description="요구사항 정의" status="finished" />
      <StepsItem title="개발" description="기능 구현" status="finished" />
      <StepsItem title="QA" description="품질 검증" status="active" />
      <StepsItem title="출시" description="프로덕션 배포" status="wait" />
    </Steps>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Steps align="center" ariaLabel="출시 단계">
      <StepsItem title="기획" description="요구사항 정의" status="finished" />
      <StepsItem title="개발" description="기능 구현" status="finished" />
      <StepsItem title="QA" description="품질 검증" status="active" />
      <StepsItem title="출시" description="프로덕션 배포" status="wait" />
    </Steps>)
}`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var Se,fe,xe;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
        story: 'steps_sm · steps_lg로 인디케이터와 텍스트 스케일을 조절합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function SizeExample() {
  return (
    <>
      <Steps size="sm" ariaLabel="Small 단계">
        <StepsItem title="1단계" status="finished" />
        <StepsItem title="2단계" status="active" />
        <StepsItem title="3단계" status="wait" />
      </Steps>
      <Steps size="lg" ariaLabel="Large 단계">
        <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
        <StepsItem title="디자인" description="UI 키트 제작" status="active" />
        <StepsItem title="개발" description="구현 및 테스트" status="wait" />
      </Steps>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Steps size="sm" ariaLabel="Small 단계">
        <StepsItem title="1단계" status="finished" />
        <StepsItem title="2단계" status="active" />
        <StepsItem title="3단계" status="wait" />
      </Steps>
      <Steps size="lg" ariaLabel="Large 단계">
        <StepsItem title="요구사항" description="범위 및 일정 확정" status="finished" />
        <StepsItem title="디자인" description="UI 키트 제작" status="active" />
        <StepsItem title="개발" description="구현 및 테스트" status="wait" />
      </Steps>
    </>)
}`,...(xe=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Ie,he,be;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: '상태 요약',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '각 상태 클래스의 시각적 의미입니다. 현재 단계에는 \`aria-current="step"\`을 함께 지정합니다.'
      },
      source: {
        code: \`import Steps from '@uxkm/ui-react/components/Steps.jsx';
import StepsItem from '@uxkm/ui-react/components/StepsItem.jsx';

export function StateExample() {
  return (
    <>
      <Steps ariaLabel="상태 예시 — 완료">
        <StepsItem title="is-finished" description="완료된 단계" status="finished" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 진행 중">
        <StepsItem title="is-active" description="현재 진행 단계" status="active" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 대기">
        <StepsItem title="is-wait" description="아직 도달하지 않은 단계" status="wait" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 오류">
        <StepsItem title="is-error" description="오류가 발생한 단계" status="error" />
      </Steps>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Steps ariaLabel="상태 예시 — 완료">
        <StepsItem title="is-finished" description="완료된 단계" status="finished" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 진행 중">
        <StepsItem title="is-active" description="현재 진행 단계" status="active" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 대기">
        <StepsItem title="is-wait" description="아직 도달하지 않은 단계" status="wait" />
      </Steps>
      <Steps ariaLabel="상태 예시 — 오류">
        <StepsItem title="is-error" description="오류가 발생한 단계" status="error" />
      </Steps>
    </>)
}`,...(be=(he=D.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};const tt=["Playground","Basic","Simple","Vertical","Dot","IconStyle","Navigable","Error","Align","Size","State"];export{E as Align,y as Basic,L as Dot,z as Error,C as IconStyle,P as Navigable,w as Playground,_ as Simple,N as Size,D as State,k as Vertical,tt as __namedExportsOrder,et as default};

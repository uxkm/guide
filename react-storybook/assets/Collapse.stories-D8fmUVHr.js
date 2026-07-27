import{r as l,a5 as Re,n as ye,j as e,a as G,d as je,a6 as Ne,B as we,I as ke}from"./iframe-D4Ohfm8F.js";import{s as ve}from"./slide-region-DVEYa47E.js";import{w}from"./story-renders-2GFxWX0H.js";import{r as _e}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const Se=l.createContext(null),Ie=new Set(["bordered","ghost","card"]),De=new Set(["sm","md","lg"]);function m({variant:g="bordered",size:x="md",accordion:p,narrow:i,effect:t,children:P,className:h,...E}){const k=l.useRef(null),d=l.useRef(new Map),[R,f]=l.useState([]),u=l.useRef(R);u.current=R;const b=Ie.has(g)?g:"bordered",n=De.has(x)?x:"md",c=l.useRef(p);c.current=p,Re({variant:b,size:n,accordion:p,narrow:i,effect:t},u,k,{className:h,...E});const s=l.useCallback(()=>{f([...d.current.values()].map(a=>({id:a.id,label:a.label,content:a.content,open:a.open,disabled:a.disabled,hasExtra:a.hasExtra,extraCode:a.extraCode,isOpen:{get value(){return a.getIsOpen()}}})))},[]),v=l.useCallback(a=>{d.current.set(a.id,a),s()},[s]),C=l.useCallback(a=>{d.current.delete(a),s()},[s]),_=l.useCallback((a,r)=>{const I=d.current.get(a);I&&(d.current.set(a,{...I,...r}),s())},[s]),S=l.useCallback(a=>{const r=d.current.get(a);if(!r||r.disabled)return;const I=!r.getIsOpen();if(c.current&&I)for(const[Ee,J]of d.current)Ee!==a&&!J.disabled&&J.setIsOpen(!1);r.setIsOpen(I),s()},[s]),y=l.useMemo(()=>({effect:t,registerPanel:v,unregisterPanel:C,updatePanelMeta:_,togglePanel:S}),[t,v,C,_,S]),j=l.useMemo(()=>{const a=["collapse_group",`collapse_${b}`];return n==="sm"&&a.push("collapse_sm"),n==="lg"&&a.push("collapse_lg"),i&&a.push("collapse_demo-narrow"),a},[b,n,i]),{class:$,...N}=E,D=ye(N);return e.jsx(Se.Provider,{value:y,children:e.jsx("div",{ref:k,className:G(j,h),"data-effect":t==="slide"?"slide":void 0,...D,children:P})})}m.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{variant:{defaultValue:{value:"'bordered'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function H({ripple:g,triggerLabel:x,narrow:p,boxed:i=!0,open:t,effect:P,lead:h,children:E,className:k,...d}){const{rippleAttrs:R}=je({ripple:g}),f=l.useRef(null),u=l.useRef(null),b=l.useRef(!0),n=`collapse-ext-${l.useId().replace(/:/g,"")}`,[c,s]=l.useState(()=>!!t),v=l.useRef(c);v.current=c;const C=P==="slide",_=l.useMemo(()=>({get value(){return v.current}}),[]);Ne({triggerLabel:x,narrow:p,boxed:i,open:t,effect:P},f,{className:k,...d},_),l.useLayoutEffect(()=>{if(!C)return;const a=!b.current;b.current=!1,ve(u.current,c,a)},[C,c]);const S=l.useMemo(()=>i?{marginTop:"var(--space-sm)"}:void 0,[i]),y=l.useMemo(()=>i?{padding:"var(--space-lg)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",background:"var(--color-surface-raised)"}:void 0,[i]);function j(){s(a=>!a)}const{class:$,...N}=d,D=ye(N);return e.jsxs("div",{ref:f,className:G(p&&"collapse_demo-narrow",k),...D,children:[h!=null?e.jsx("div",{"data-demo-slot":"lead",children:h}):null,e.jsx(we,{variant:"ghost",size:"sm",expanded:c,"aria-controls":n,onClick:j,iconAfter:e.jsx(ke,{name:"chevron-down",size:"sm"}),...R,children:e.jsx("span",{className:"btn_label",children:x})}),e.jsx("div",{ref:C?u:void 0,id:n,className:G("collapse",c&&"is-open"),"data-effect":C?"slide":void 0,"data-demo-slot":"default",style:S,hidden:C?void 0:!c||void 0,children:e.jsx("div",{style:y,children:E})})]})}H.__docgenInfo={description:"",methods:[],displayName:"CollapseExternal",props:{boxed:{defaultValue:{value:"true",computed:!1},required:!1}}};function o({ripple:g,label:x,content:p,open:i,disabled:t,extraCode:P,extra:h,children:E,className:k,...d}){const{rippleAttrs:R}=je({ripple:g}),f=l.useContext(Se),u=l.useRef(f);u.current=f;const b=l.useId().replace(/:/g,""),n=`collapse-trigger-${b}`,c=`collapse-body-${b}`,[s,v]=l.useState(()=>!!i),C=l.useRef(s);C.current=s;const _=l.useRef(null),S=l.useRef(!0),y=(f==null?void 0:f.effect)==="slide",j=h!=null;l.useEffect(()=>{const r=u.current;if(r)return r.registerPanel({id:n,label:x,content:p,open:!!i,disabled:!!t,hasExtra:j,extraCode:P,getIsOpen:()=>C.current,setIsOpen:v}),()=>r.unregisterPanel(n)},[n]),l.useEffect(()=>{const r=u.current;r&&r.updatePanelMeta(n,{label:x,content:p,disabled:!!t,hasExtra:j,extraCode:P})},[n,x,p,t,j,P]),l.useLayoutEffect(()=>{if(!y)return;const r=!S.current;S.current=!1,ve(_.current,s,r)},[y,s]);const $=l.useMemo(()=>["collapse_panel",s&&"is-open",t&&"is-disabled"],[s,t]);function N(){t||!u.current||u.current.togglePanel(n)}const{class:D,...a}=d;return e.jsxs("div",{className:G($,k),...a,children:[e.jsx("div",{className:"collapse_header",children:e.jsxs(we,{id:n,variant:"text",className:"collapse_trigger",expanded:s,"aria-controls":c,disabled:t,onClick:N,iconAfter:e.jsx(ke,{name:"chevron-down",className:"collapse_icon"}),...R,children:[e.jsx("span",{className:"collapse_label",children:x}),j?e.jsx("span",{className:"collapse_extra",children:h}):null]})}),e.jsx("div",{ref:y?_:void 0,id:c,className:"collapse_body",role:"region","aria-labelledby":n,hidden:y?void 0:!s||void 0,children:e.jsx("div",{className:"collapse_content",children:E??(p?e.jsx("p",{children:p}):null)})})]})}o.__docgenInfo={description:"",methods:[],displayName:"CollapsePanel"};const Oe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ze=[{name:"variant",type:"'bordered' | 'ghost' | 'card'",default:"bordered",description:"패널 그룹 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"accordion",type:"boolean",default:"false",description:"한 번에 하나의 패널만 열기 (아코디언 모드)"},{name:"effect",type:"'slide'",default:"—",description:'펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")'},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (collapse_demo-narrow)"}],Le=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Me=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 패널 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},_e],Ae=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Be=[{name:"trigger-label",type:"string",default:"—",description:"외부 트리거 버튼 텍스트"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한"},{name:"boxed",type:"boolean",default:"true",description:"접힘 영역에 테두리·배경 스타일 적용"},{name:"effect",type:"'slide'",default:"—",description:'펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")'},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},_e],Z=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ve=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보"}],Fe=[{name:"lead",description:"트리거 위 안내 텍스트"},{name:"default",description:"접히는 본문 영역"}],Te=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ge=[{name:"collapse",description:"독립 접힘 영역 (외부 트리거 대상)"},{name:"collapse_group",description:"패널 그룹 컨테이너"},{name:"collapse_panel · collapse_trigger · collapse_body",description:"패널 그룹 내부 파트"},{name:"collapse_label · collapse_extra · collapse_icon",description:"트리거 파트"},{name:"collapse_content",description:"패널 본문 래퍼"},{name:"collapse_bordered",description:"외곽 테두리 스킨 (기본)"},{name:"collapse_ghost",description:"배경 강조 고스트 스킨"},{name:"collapse_card",description:"패널별 카드 분리 스킨"},{name:"collapse_sm · collapse_lg",description:"크기 변형"},{name:"data-collapse",description:"HTML 패널 그룹 JS 초기화"},{name:"data-collapse-trigger",description:"HTML 외부 트리거 JS 초기화"},{name:"data-collapse-accordion",description:"HTML 단일 패널만 열기"},{name:'data-effect="slide"',description:"펼침·접힘 높이 슬라이드 애니메이션"},{name:"is-open · is-disabled",description:"상태 클래스"}],q=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],He=[{name:"children",description:"CollapsePanel 나열"}],$e=[{name:"children",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보"}],qe=[{name:"lead",description:"트리거 위 안내 텍스트"},{name:"children",description:"접히는 본문 영역"}],Je=[{title:"API · CollapseExternal Props",description:"React에서는 camelCase prop을 사용합니다. (trigger-label → triggerLabel)",tables:[{columns:Ae,rows:Be,codeColumn:"name"}]},{title:"API · CollapseExternal Children",description:"Vue 슬롯은 React lead · children prop으로 다룹니다.",tables:[{columns:Z,rows:Fe,codeColumn:"name"},{columns:q,rows:qe,codeColumn:"name"}]},{title:"API · Collapse Props",tables:[{columns:Oe,rows:ze,codeColumn:"name"}]},{title:"API · CollapsePanel Props",description:"Vue의 extra-code는 React extraCode입니다.",tables:[{columns:Le,rows:Me,codeColumn:"name"}]},{title:"API · CollapsePanel Children",description:"Vue 슬롯은 React children · extra prop으로 다룹니다.",tables:[{columns:Z,rows:Ve,codeColumn:"name"},{columns:q,rows:$e,codeColumn:"name"}]},{title:"API · Collapse Children",tables:[{columns:q,rows:He,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Te,rows:Ge,codeColumn:"name"}]}],Ze={variant:"bordered",size:"md",accordion:!1,narrow:!1};function Ke(){return e.jsxs("dl",{className:"list list_definition list_inline list_block list_compact",style:{"--list-inline-label-width":"auto","--list-inline-gap":"1rem"},children:[e.jsx("dt",{className:"list_title",children:"주문번호"}),e.jsx("dd",{className:"list_desc",children:"ORD-2024-0815"}),e.jsx("dt",{className:"list_title",children:"결제금액"}),e.jsx("dd",{className:"list_desc",children:"₩42,000"}),e.jsx("dt",{className:"list_title",children:"배송지"}),e.jsx("dd",{className:"list_desc",children:"서울특별시 강남구 테헤란로 123"})]})}const el={title:"Components/기타/Collapse",id:"components-collapse",component:m,subcomponents:{CollapsePanel:o,CollapseExternal:H},tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","ghost","card"],type:{name:"enum",summary:"'bordered' | 'ghost' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},accordion:{control:"boolean",type:{name:"boolean",summary:"boolean"}},effect:{control:"select",options:[void 0,"slide"],type:{name:"enum",summary:"'slide'"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Je,docs:{description:{component:"접이식 패널 그룹 Collapse 컴포넌트입니다."}}}},O={parameters:{controls:{disable:!1}},args:{...Ze},render:g=>e.jsxs(m,{...g,children:[e.jsx(o,{label:"패널 1",open:!0,content:"내용 1"}),e.jsx(o,{label:"패널 2",content:"내용 2"})]})},z={name:"외부 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."},source:{code:`import CollapseExternal from '@uxkm/ui-react/components/CollapseExternal.jsx';

export function StandaloneExample() {
  return (
    <CollapseExternal
      triggerLabel="주문 상세 보기"
      narrow
      lead={
        <p style={{ margin: '0 0 var(--space-md)' }}>
          주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
        </p>
      }
    >
      <dl
        className="list list_definition list_inline list_block list_compact"
        style={{
          '--list-inline-label-width': 'auto',
          '--list-inline-gap': '1rem',
        }}
      >
        <dt className="list_title">주문번호</dt>
        <dd className="list_desc">ORD-2024-0815</dd>
        <dt className="list_title">결제금액</dt>
        <dd className="list_desc">₩42,000</dd>
        <dt className="list_title">배송지</dt>
        <dd className="list_desc">서울특별시 강남구 테헤란로 123</dd>
      </dl>
    </CollapseExternal>
  );
}`,language:"tsx"}}},render:w(e.jsx(H,{triggerLabel:"주문 상세 보기",narrow:!0,lead:e.jsx("p",{style:{margin:"0 0 var(--space-md)"},children:"주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다."}),children:e.jsx(Ke,{})}))},L={name:"패널 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function BasicExample() {
  return (
    <Collapse narrow>
      <CollapsePanel
        label="배송 정보"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <CollapsePanel
        label="결제 수단"
        content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
      />
      <CollapsePanel
        label="교환·반품 안내"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
    </Collapse>
  );
}`,language:"tsx"}}},render:w(e.jsxs(m,{narrow:!0,children:[e.jsx(o,{label:"배송 정보",open:!0,content:"평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."}),e.jsx(o,{label:"결제 수단",content:"신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."}),e.jsx(o,{label:"교환·반품 안내",content:"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."})]}))},M={name:"아코디언 모드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function AccordionModeExample() {
  return (
    <Collapse narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>
  );
}`,language:"tsx"}}},render:w(e.jsxs(m,{narrow:!0,accordion:!0,children:[e.jsx(o,{label:"알림 설정",open:!0,content:"이메일·푸시·SMS 알림 수신 여부를 설정합니다."}),e.jsx(o,{label:"개인정보",content:"프로필 공개 범위와 데이터 다운로드를 관리합니다."}),e.jsx(o,{label:"보안",content:"비밀번호 변경과 2단계 인증을 설정합니다."})]}))},A={name:"스킨",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"collapse_ghost · collapse_card로 외형을 조절합니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SkinExample() {
  return (
    <>
      <Collapse variant="ghost" narrow>
        <CollapsePanel
          label="Ghost"
          open
          content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>
    </>
  );
}`,language:"tsx"}}},render:w(e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"ghost",narrow:!0,children:e.jsx(o,{label:"Ghost",open:!0,content:"배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."})}),e.jsxs(m,{variant:"card",narrow:!0,children:[e.jsx(o,{label:"Card",open:!0,content:"패널마다 카드 형태로 분리됩니다."}),e.jsx(o,{label:"두 번째 패널",content:"카드 스킨의 두 번째 패널입니다."})]})]}))},B={name:"보조 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra prop으로 트리거 오른쪽에 메타 정보를 표시합니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function ExtraExample() {
  return (
    <Collapse narrow>
      <CollapsePanel
        label="진행 중"
        open
        content="현재 처리 중인 요청 3건입니다."
        extraCode="3건"
        extra="3건"
      />
      <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Collapse>
  );
}`,language:"tsx"}}},render:w(e.jsxs(m,{narrow:!0,children:[e.jsx(o,{label:"진행 중",open:!0,content:"현재 처리 중인 요청 3건입니다.",extraCode:"3건",extra:"3건"}),e.jsx(o,{label:"처리 완료",content:"최근 일주일간 완료된 요청 12건입니다.",extraCode:"지난 7일",extra:"지난 7일"})]}))},V={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function DisabledExample() {
  return (
    <Collapse narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Collapse>
  );
}`,language:"tsx"}}},render:w(e.jsxs(m,{narrow:!0,children:[e.jsx(o,{label:"공개 문서",open:!0,content:"누구나 열람할 수 있는 가이드 문서입니다."}),e.jsx(o,{label:"팀 전용 (권한 없음)",disabled:!0,content:"팀 멤버만 접근할 수 있는 내부 문서입니다."})]}))},F={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SizeExample() {
  return (
    <>
      <Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>
    </>
  );
}`,language:"tsx"}}},render:w(e.jsxs(e.Fragment,{children:[e.jsx(m,{size:"sm",narrow:!0,children:e.jsx(o,{label:"Small",open:!0,content:"작은 콜랩스 — 좁은 패딩."})}),e.jsx(m,{size:"lg",narrow:!0,children:e.jsx(o,{label:"Large",open:!0,content:"큰 콜랩스 — 넓은 패딩과 큰 글자."})})]}))},T={name:"슬라이드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 패널 그룹·외부 트리거 모두 동일합니다.'},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapseExternal from '@uxkm/ui-react/components/CollapseExternal.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SlideExample() {
  return (
    <>
      <Collapse narrow effect="slide">
        <CollapsePanel
          label="배송 정보"
          open
          content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
        />
        <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
      </Collapse>
      <CollapseExternal triggerLabel="상세 보기" narrow effect="slide">
        <p style={{ margin: 0 }}>외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
      </CollapseExternal>
    </>
  );
}`,language:"tsx"}}},render:w(e.jsxs(e.Fragment,{children:[e.jsxs(m,{narrow:!0,effect:"slide",children:[e.jsx(o,{label:"배송 정보",open:!0,content:"평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."}),e.jsx(o,{label:"결제 수단",content:"신용카드, 계좌이체, 간편결제를 지원합니다."})]}),e.jsx(H,{triggerLabel:"상세 보기",narrow:!0,effect:"slide",children:e.jsx("p",{style:{margin:0},children:"외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다."})})]}))};var K,Q,U;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Collapse {...args}>
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </Collapse>
}`,...(U=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;z.parameters={...z.parameters,docs:{...(W=z.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '외부 트리거',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다.'
      },
      source: {
        code: \`import CollapseExternal from '@uxkm/ui-react/components/CollapseExternal.jsx';

export function StandaloneExample() {
  return (
    <CollapseExternal
      triggerLabel="주문 상세 보기"
      narrow
      lead={
        <p style={{ margin: '0 0 var(--space-md)' }}>
          주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
        </p>
      }
    >
      <dl
        className="list list_definition list_inline list_block list_compact"
        style={{
          '--list-inline-label-width': 'auto',
          '--list-inline-gap': '1rem',
        }}
      >
        <dt className="list_title">주문번호</dt>
        <dd className="list_desc">ORD-2024-0815</dd>
        <dt className="list_title">결제금액</dt>
        <dd className="list_desc">₩42,000</dd>
        <dt className="list_title">배송지</dt>
        <dd className="list_desc">서울특별시 강남구 테헤란로 123</dd>
      </dl>
    </CollapseExternal>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<CollapseExternal triggerLabel="주문 상세 보기" narrow lead={<p style={{
    margin: '0 0 var(--space-md)'
  }}>
          주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
        </p>}>
      <OrderDetailList />
    </CollapseExternal>)
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,le,ae;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '패널 그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다.'
      },
      source: {
        code: \`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function BasicExample() {
  return (
    <Collapse narrow>
      <CollapsePanel
        label="배송 정보"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <CollapsePanel
        label="결제 수단"
        content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
      />
      <CollapsePanel
        label="교환·반품 안내"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
    </Collapse>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Collapse narrow>
      <CollapsePanel label="배송 정보" open content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다." />
      <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다." />
      <CollapsePanel label="교환·반품 안내" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다." />
    </Collapse>)
}`,...(ae=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,se,ne;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: '아코디언 모드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'accordion prop을 지정하면 한 번에 하나의 패널만 열립니다.'
      },
      source: {
        code: \`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function AccordionModeExample() {
  return (
    <Collapse narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Collapse narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>)
}`,...(ne=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,re,ce;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '스킨',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'collapse_ghost · collapse_card로 외형을 조절합니다.'
      },
      source: {
        code: \`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SkinExample() {
  return (
    <>
      <Collapse variant="ghost" narrow>
        <CollapsePanel
          label="Ghost"
          open
          content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Collapse variant="ghost" narrow>
        <CollapsePanel label="Ghost" open content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다." />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>
    </>)
}`,...(ce=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var pe,ie,de;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: '보조 텍스트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'extra prop으로 트리거 오른쪽에 메타 정보를 표시합니다.'
      },
      source: {
        code: \`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function ExtraExample() {
  return (
    <Collapse narrow>
      <CollapsePanel
        label="진행 중"
        open
        content="현재 처리 중인 요청 3건입니다."
        extraCode="3건"
        extra="3건"
      />
      <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Collapse>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Collapse narrow>
      <CollapsePanel label="진행 중" open content="현재 처리 중인 요청 3건입니다." extraCode="3건" extra="3건" />
      <CollapsePanel label="처리 완료" content="최근 일주일간 완료된 요청 12건입니다." extraCode="지난 7일" extra="지난 7일" />
    </Collapse>)
}`,...(de=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ue,Ce;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: '비활성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다.'
      },
      source: {
        code: \`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function DisabledExample() {
  return (
    <Collapse narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Collapse>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Collapse narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel label="팀 전용 (권한 없음)" disabled content="팀 멤버만 접근할 수 있는 내부 문서입니다." />
    </Collapse>)
}`,...(Ce=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:Ce.source}}};var xe,fe,be;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
        story: 'size prop으로 트리거와 본문 패딩을 조절합니다.'
      },
      source: {
        code: \`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SizeExample() {
  return (
    <>
      <Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>
    </>)
}`,...(be=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ge,Pe,he;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: '슬라이드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 패널 그룹·외부 트리거 모두 동일합니다.'
      },
      source: {
        code: \`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapseExternal from '@uxkm/ui-react/components/CollapseExternal.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SlideExample() {
  return (
    <>
      <Collapse narrow effect="slide">
        <CollapsePanel
          label="배송 정보"
          open
          content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다."
        />
        <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
      </Collapse>
      <CollapseExternal triggerLabel="상세 보기" narrow effect="slide">
        <p style={{ margin: 0 }}>외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
      </CollapseExternal>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Collapse narrow effect="slide">
        <CollapsePanel label="배송 정보" open content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 슬라이드됩니다." />
        <CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." />
      </Collapse>
      <CollapseExternal triggerLabel="상세 보기" narrow effect="slide">
        <p style={{
        margin: 0
      }}>외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p>
      </CollapseExternal>
    </>)
}`,...(he=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:he.source}}};const ll=["Playground","Standalone","Basic","AccordionMode","Skin","Extra","Disabled","Size","Slide"];export{M as AccordionMode,L as Basic,V as Disabled,B as Extra,O as Playground,F as Size,A as Skin,T as Slide,z as Standalone,ll as __namedExportsOrder,el as default};

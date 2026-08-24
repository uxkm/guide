import{r,Y as ye,n as ke,j as e,a as he,d as _e,B as Ce,I as Se}from"./iframe-Ec8Bs185.js";import{s as Re}from"./slide-region-DVEYa47E.js";import{w as f}from"./story-renders-Bo_F9MSp.js";import{r as Pe,a as ze}from"./ripple-api-CjGOCEZT.js";import"./preload-helper-DUxc-Dqw.js";const we=r.createContext(null),Ee=new Set(["bordered","flush","card"]),De=new Set(["sm","md","lg"]);function d({variant:I="bordered",size:A="md",multiple:m,narrow:h,effect:i,children:j,className:v,...P}){const y=r.useRef(null),l=r.useRef(new Map),[z,x]=r.useState([]),p=r.useRef(z);p.current=z;const w=Ee.has(I)?I:"bordered",a=De.has(A)?A:"md",k=r.useRef(m);k.current=m,ye({variant:w,size:a,multiple:m,narrow:h,effect:i},p,y,{className:v,...P});const c=r.useCallback(()=>{x([...l.current.values()].map(o=>({id:o.id,label:o.label,content:o.content,open:o.open,disabled:o.disabled,hasExtra:o.hasExtra,extraCode:o.extraCode,isOpen:{get value(){return o.getIsOpen()}}})))},[]),E=r.useCallback(o=>{l.current.set(o.id,o),c()},[c]),_=r.useCallback(o=>{l.current.delete(o),c()},[c]),C=r.useCallback((o,s)=>{const t=l.current.get(o);t&&(l.current.set(o,{...t,...s}),c())},[c]),S=r.useCallback(o=>{const s=l.current.get(o);if(!s||s.disabled)return;const t=!s.getIsOpen();if(!k.current&&t)for(const[R,u]of l.current)R!==o&&!u.disabled&&u.setIsOpen(!1);s.setIsOpen(t),c()},[c]),b=r.useCallback(()=>[...l.current.values()].filter(o=>!o.disabled).map(o=>o.id),[]),g=r.useCallback(o=>{var s,t;(t=(s=y.current)==null?void 0:s.querySelector(`#${CSS.escape(o)}`))==null||t.focus()},[]),H=r.useMemo(()=>({effect:i,registerItem:E,unregisterItem:_,updateItemMeta:C,toggleItem:S,getTriggers:b,focusTrigger:g}),[i,E,_,C,S,b,g]),Q=r.useMemo(()=>{const o=["accordion",`accordion_${w}`];return a==="sm"&&o.push("accordion_sm"),a==="lg"&&o.push("accordion_lg"),h&&o.push("accordion_demo-narrow"),o},[w,a,h]),{class:q,...U}=P,$=ke(U);return e.jsx(we.Provider,{value:H,children:e.jsx("div",{ref:y,className:he(Q,v),"data-effect":i==="slide"?"slide":void 0,...$,children:j})})}d.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{variant:{defaultValue:{value:"'bordered'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function n({ripple:I,label:A,content:m,open:h,disabled:i,extraCode:j,extra:v,children:P,className:y,...l}){const{rippleAttrs:z}=_e({ripple:I}),x=r.useContext(we),p=r.useRef(x);p.current=x;const w=r.useId().replace(/:/g,""),a=`accordion-trigger-${w}`,k=`accordion-panel-${w}`,[c,E]=r.useState(()=>!!h),_=r.useRef(c);_.current=c;const C=r.useRef(null),S=r.useRef(!0),b=(x==null?void 0:x.effect)==="slide",g=v!=null;r.useEffect(()=>{const o=p.current;if(o)return o.registerItem({id:a,label:A,content:m,open:!!h,disabled:!!i,hasExtra:g,extraCode:j,getIsOpen:()=>_.current,setIsOpen:E}),()=>o.unregisterItem(a)},[a]),r.useEffect(()=>{const o=p.current;o&&o.updateItemMeta(a,{label:A,content:m,disabled:!!i,hasExtra:g,extraCode:j})},[a,A,m,i,g,j]),r.useLayoutEffect(()=>{if(!b)return;const o=!S.current;S.current=!1,Re(C.current,c,o)},[b,c]);const H=r.useMemo(()=>["accordion_item",c&&"is-open",i&&"is-disabled"],[c,i]);function Q(){i||!p.current||p.current.toggleItem(a)}function q(o){const s=p.current;if(!s)return;const t=s.getTriggers(),R=t.indexOf(a);if(R===-1)return;let u=null;o.key==="ArrowDown"?u=(R+1)%t.length:o.key==="ArrowUp"?u=(R-1+t.length)%t.length:o.key==="Home"?u=0:o.key==="End"&&(u=t.length-1),u!==null&&(o.preventDefault(),s.focusTrigger(t[u]))}const{class:U,...$}=l;return e.jsxs("div",{className:he(H,y),...$,children:[e.jsx("div",{className:"accordion_heading",role:"heading","aria-level":3,children:e.jsxs(Ce,{id:a,variant:"text",className:"accordion_trigger",expanded:c,"aria-controls":k,disabled:i,onClick:Q,onKeyDown:q,iconAfter:e.jsx(Se,{name:"chevron-down",className:"accordion_icon"}),...z,children:[e.jsx("span",{className:"accordion_label",children:A}),g?e.jsx("span",{className:"accordion_extra",children:v}):null]})}),e.jsx("div",{ref:b?C:void 0,id:k,className:"accordion_panel",role:"region","aria-labelledby":a,hidden:b?void 0:!c||void 0,children:e.jsx("div",{className:"accordion_content",children:P??(m?e.jsx("p",{children:m}):null)})})]})}n.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};const je=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ne=[{name:"variant",type:"'bordered' | 'flush' | 'card'",default:"bordered",description:"아코디언 스킨 — bordered(붙임) · flush · card(항목 간격, FAQ)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"multiple",type:"boolean",default:"false",description:"여러 패널 동시 열기 허용"},{name:"effect",type:"'slide'",default:"—",description:'펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")'},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (accordion_demo-narrow)"},{name:"children",type:"ReactNode",default:"—",description:"AccordionItem 나열"},{name:"className",type:"string",default:"—",description:"루트 요소 추가 클래스"}],Oe=je,Be=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). children으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 항목 (is-disabled + trigger disabled)"},{name:"extra",type:"ReactNode",default:"—",description:"트리거 오른쪽 보조 정보 (배지·메타 텍스트)"},{name:"extraCode",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},{name:"children",type:"ReactNode",default:"—",description:"패널 본문 (content prop 대체)"},{name:"className",type:"string",default:"—",description:"루트 요소 추가 클래스"},Pe],ve=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Me=[{name:"children",description:"AccordionItem 나열"}],Fe=ve,Te=[{name:"children",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보 (배지·메타 텍스트)"}],Le=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ve=[{name:"accordion",description:"루트 구조 클래스"},{name:"accordion_bordered",description:"외곽 테두리로 항목을 한 덩어리로 붙인 스킨"},{name:"accordion_flush",description:"구분선만 있는 플러시 스킨"},{name:"accordion_card",description:"항목 사이 간격·독립 카드 스킨 (FAQ 기본 예시)"},{name:"accordion_sm · accordion_lg",description:"크기 변형"},{name:"accordion_item · accordion_trigger · accordion_panel",description:"내부 파트"},{name:"accordion_heading",description:'role="heading" aria-level="3" 헤딩 래퍼'},{name:"accordion_label · accordion_extra · accordion_icon",description:"트리거 파트"},{name:"accordion_content",description:"패널 본문 래퍼"},{name:"data-accordion",description:"HTML 마크업 JS 초기화 대상"},{name:"data-accordion-multiple",description:"HTML 마크업 다중 열기 허용"},{name:'data-effect="slide"',description:"펼침·접힘 높이 슬라이드 애니메이션"},{name:"is-open · is-disabled",description:"상태 클래스"},...ze],He=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Qe=[{name:"--accordion-font-size",default:"var(--text-size-sm)",description:"기본(md) 본문 크기"},{name:"--accordion-trigger-font-weight · --accordion-trigger-gap",default:"600 · var(--space-sm)",description:"트리거 타이포·간격"},{name:"--accordion-trigger-padding-y · --accordion-trigger-padding-x",default:"0.875rem · var(--space-lg)",description:"트리거 패딩(md)"},{name:"--accordion-content-font-size",default:"var(--text-size-sm)",description:"콘텐츠 글자 크기"},{name:"--accordion-content-padding-y · --accordion-content-padding-x",default:"var(--space-lg) · var(--space-lg)",description:"콘텐츠 상하·좌우 패딩(동일)"},{name:"--accordion-icon-size",default:"1rem",description:"펼침 아이콘(md)"},{name:"--accordion-card-gap",default:"0",description:"카드형 아코디언 항목 간격"},{name:"--accordion-card-trigger-bg",default:"var(--color-surface-raised)",description:"카드형 트리거 배경"},{name:"--accordion-font-size-sm · --accordion-trigger-padding-y-sm · --accordion-trigger-padding-x-sm",default:"var(--text-size-xs) · 0.625rem · var(--space-md)",description:"sm 크기"},{name:"--accordion-icon-size-sm",default:"0.875rem",description:"sm 아이콘"},{name:"--accordion-font-size-lg · --accordion-trigger-padding-y-lg · --accordion-trigger-padding-x-lg",default:"var(--text-size-base) · 1rem · var(--space-xl)",description:"lg 크기"},{name:"--accordion-icon-size-lg",default:"1.125rem",description:"lg 아이콘"},{name:"--accordion-slide-duration · --accordion-slide-easing",default:"0.28s · ease",description:"슬라이드 전환"}],$e=[{title:"API · Accordion Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:je,rows:Ne,codeColumn:"name"}]},{title:"API · AccordionItem Props",description:"Vue의 extra-code는 React extraCode입니다. Vue 슬롯은 children · extra prop으로 다룹니다.",tables:[{columns:Oe,rows:Be,codeColumn:"name"}]},{title:"API · Accordion Children",tables:[{columns:ve,rows:Me,codeColumn:"name"}]},{title:"API · AccordionItem Children",tables:[{columns:Fe,rows:Te,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Le,rows:Ve,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:He,rows:Qe,codeColumn:"name"}]}],qe={variant:"card",size:"md",multiple:!1,narrow:!1},Ge={title:"Components/기타/Accordion",id:"components-accordion",component:d,subcomponents:{AccordionItem:n},tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","flush","card"],type:{name:"enum",summary:"'bordered' | 'flush' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},multiple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},effect:{control:"select",options:[void 0,"slide"],type:{name:"enum",summary:"'slide'"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:$e,docs:{description:{component:"접이식 패널 그룹 Accordion 컴포넌트입니다."}}}},D={parameters:{controls:{disable:!1}},args:{...qe},render:I=>e.jsxs(d,{...I,children:[e.jsx(n,{label:"섹션 1",open:!0,content:"Controls로 속성을 조절해 보세요."}),e.jsx(n,{label:"섹션 2",content:"두 번째 패널"})]})},N={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function BasicExample() {
  return (
    <Accordion variant="card" narrow>
      <AccordionItem
        label="배송은 얼마나 걸리나요?"
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        open
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
      <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
      />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{variant:"card",narrow:!0,children:[e.jsx(n,{label:"배송은 얼마나 걸리나요?",content:"평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."}),e.jsx(n,{label:"교환·반품은 어떻게 하나요?",open:!0,content:"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."}),e.jsx(n,{label:"해외 배송이 가능한가요?",content:"현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."})]}))},O={name:"다중 열기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function MultipleExample() {
  return (
    <Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{narrow:!0,multiple:!0,children:[e.jsx(n,{label:"알림",open:!0,content:"이메일·푸시 알림 수신 여부를 설정합니다."}),e.jsx(n,{label:"개인정보",open:!0,content:"프로필 공개 범위와 데이터 다운로드를 관리합니다."}),e.jsx(n,{label:"보안",content:"비밀번호 변경과 2단계 인증을 설정합니다."})]}))},B={name:"플러시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function FlushExample() {
  return (
    <Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{variant:"flush",narrow:!0,children:[e.jsx(n,{label:"일반",open:!0,content:"언어, 시간대, 테마 등 기본 환경 설정입니다."}),e.jsx(n,{label:"접근성",content:"고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다."}),e.jsx(n,{label:"고급",content:"개발자 도구와 실험 기능을 켜거나 끕니다."})]}))},M={name:"보더",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function BorderedExample() {
  return (
    <Accordion variant="bordered" narrow>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{variant:"bordered",narrow:!0,children:[e.jsx(n,{label:"알림",open:!0,content:"이메일·푸시 알림 수신 여부를 설정합니다."}),e.jsx(n,{label:"개인정보",content:"프로필 공개 범위와 데이터 다운로드를 관리합니다."}),e.jsx(n,{label:"보안",content:"비밀번호 변경과 2단계 인증을 설정합니다."})]}))},F={name:"보조 정보",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra prop으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function ExtraExample() {
  return (
    <Accordion narrow>
      <AccordionItem
        label="미해결 문의"
        open
        content="답변이 필요한 고객 문의 3건이 있습니다."
        extraCode='<span class="badge badge_count color_danger badge_sm">3</span>'
        extra={<span className="badge badge_count color_danger badge_sm">3</span>}
      />
      <AccordionItem
        label="처리 완료"
        content="최근 일주일간 완료된 문의 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{narrow:!0,children:[e.jsx(n,{label:"미해결 문의",open:!0,content:"답변이 필요한 고객 문의 3건이 있습니다.",extraCode:'<span class="badge badge_count color_danger badge_sm">3</span>',extra:e.jsx("span",{className:"badge badge_count color_danger badge_sm",children:"3"})}),e.jsx(n,{label:"처리 완료",content:"최근 일주일간 완료된 문의 12건입니다.",extraCode:"지난 7일",extra:"지난 7일"})]}))},T={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function DisabledExample() {
  return (
    <Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{narrow:!0,children:[e.jsx(n,{label:"공개 문서",open:!0,content:"누구나 열람할 수 있는 가이드 문서입니다."}),e.jsx(n,{label:"팀 전용 (권한 없음)",disabled:!0,content:"팀 멤버만 접근할 수 있는 내부 문서입니다."})]}))},L={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function SizeExample() {
  return (
    <>
      <Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>
    </>
  );
}`,language:"tsx"}}},render:f(e.jsxs(e.Fragment,{children:[e.jsx(d,{size:"sm",narrow:!0,children:e.jsx(n,{label:"Small",open:!0,content:"작은 아코디언 — 좁은 패딩."})}),e.jsx(d,{size:"lg",narrow:!0,children:e.jsx(n,{label:"Large",open:!0,content:"큰 아코디언 — 넓은 패딩과 큰 글자."})})]}))},V={name:"슬라이드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 닫힌 패널은 hidden으로 숨기고, 토글 시에만 높이를 애니메이션합니다.'},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function SlideExample() {
  return (
    <Accordion variant="card" narrow effect="slide">
      <AccordionItem
        label="배송 안내"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다."
      />
      <AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." />
      <AccordionItem
        label="고객센터"
        content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다."
      />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{variant:"card",narrow:!0,effect:"slide",children:[e.jsx(n,{label:"배송 안내",open:!0,content:"평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다."}),e.jsx(n,{label:"교환·반품",content:"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다."}),e.jsx(n,{label:"고객센터",content:"1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다."})]}))};var K,J,Y;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Accordion {...args}>
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>
}`,...(Y=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,G,W;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
        story: 'FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다.'
      },
      source: {
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function BasicExample() {
  return (
    <Accordion variant="card" narrow>
      <AccordionItem
        label="배송은 얼마나 걸리나요?"
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        open
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
      <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
      />
    </Accordion>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Accordion variant="card" narrow>
      <AccordionItem label="배송은 얼마나 걸리나요?" content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다." />
      <AccordionItem label="교환·반품은 어떻게 하나요?" open content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다." />
      <AccordionItem label="해외 배송이 가능한가요?" content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다." />
    </Accordion>)
}`,...(W=(G=N.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var X,ee,oe;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '다중 열기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다.'
      },
      source: {
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function MultipleExample() {
  return (
    <Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>)
}`,...(oe=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,ce;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '플러시',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다.'
      },
      source: {
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function FlushExample() {
  return (
    <Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>)
}`,...(ce=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var te,ae,se;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '보더',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다.'
      },
      source: {
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function BorderedExample() {
  return (
    <Accordion variant="bordered" narrow>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Accordion variant="bordered" narrow>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>)
}`,...(se=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,de,le;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: '보조 정보',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'extra prop으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다.'
      },
      source: {
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function ExtraExample() {
  return (
    <Accordion narrow>
      <AccordionItem
        label="미해결 문의"
        open
        content="답변이 필요한 고객 문의 3건이 있습니다."
        extraCode='<span class="badge badge_count color_danger badge_sm">3</span>'
        extra={<span className="badge badge_count color_danger badge_sm">3</span>}
      />
      <AccordionItem
        label="처리 완료"
        content="최근 일주일간 완료된 문의 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Accordion>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Accordion narrow>
      <AccordionItem label="미해결 문의" open content="답변이 필요한 고객 문의 3건이 있습니다." extraCode='<span class="badge badge_count color_danger badge_sm">3</span>' extra={<span className="badge badge_count color_danger badge_sm">3</span>} />
      <AccordionItem label="처리 완료" content="최근 일주일간 완료된 문의 12건입니다." extraCode="지난 7일" extra="지난 7일" />
    </Accordion>)
}`,...(le=(de=F.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var me,pe,ue;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function DisabledExample() {
  return (
    <Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Accordion>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem label="팀 전용 (권한 없음)" disabled content="팀 멤버만 접근할 수 있는 내부 문서입니다." />
    </Accordion>)
}`,...(ue=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var fe,Ae,xe;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function SizeExample() {
  return (
    <>
      <Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>
    </>)
}`,...(xe=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};var be,ge,Ie;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '슬라이드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'effect="slide"로 펼침·접힘 시 높이 슬라이드 애니메이션을 적용합니다. 닫힌 패널은 hidden으로 숨기고, 토글 시에만 높이를 애니메이션합니다.'
      },
      source: {
        code: \`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function SlideExample() {
  return (
    <Accordion variant="card" narrow effect="slide">
      <AccordionItem
        label="배송 안내"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다."
      />
      <AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." />
      <AccordionItem
        label="고객센터"
        content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다."
      />
    </Accordion>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Accordion variant="card" narrow effect="slide">
      <AccordionItem label="배송 안내" open content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다." />
      <AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." />
      <AccordionItem label="고객센터" content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다." />
    </Accordion>)
}`,...(Ie=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:Ie.source}}};const We=["Playground","Basic","Multiple","Flush","Bordered","Extra","Disabled","Size","Slide"];export{N as Basic,M as Bordered,T as Disabled,F as Extra,B as Flush,O as Multiple,D as Playground,L as Size,V as Slide,We as __namedExportsOrder,Ge as default};

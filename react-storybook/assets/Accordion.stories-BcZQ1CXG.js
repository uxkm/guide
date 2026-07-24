import{r,a2 as fe,n as Ie,j as e,a as xe,d as he,B as we,I as ke}from"./iframe-ifEc15ad.js";import{w as f}from"./story-renders-Hdz_JUlO.js";import{r as je}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const Ae=r.createContext(null),ye=new Set(["bordered","flush","card"]),_e=new Set(["sm","md","lg"]);function d({variant:I="bordered",size:x="md",multiple:p,narrow:h,children:u,className:w,...k}){const j=r.useRef(null),l=r.useRef(new Map),[C,F]=r.useState([]),y=r.useRef(C);y.current=C;const m=ye.has(I)?I:"bordered",A=_e.has(x)?x:"md",s=r.useRef(p);s.current=p,fe({variant:m,size:A,multiple:p,narrow:h},y,j,{className:w,...k});const i=r.useCallback(()=>{F([...l.current.values()].map(o=>({id:o.id,label:o.label,content:o.content,open:o.open,disabled:o.disabled,hasExtra:o.hasExtra,extraCode:o.extraCode,isOpen:{get value(){return o.getIsOpen()}}})))},[]),b=r.useCallback(o=>{l.current.set(o.id,o),i()},[i]),S=r.useCallback(o=>{l.current.delete(o),i()},[i]),_=r.useCallback((o,a)=>{const c=l.current.get(o);c&&(l.current.set(o,{...c,...a}),i())},[i]),g=r.useCallback(o=>{const a=l.current.get(o);if(!a||a.disabled)return;const c=!a.getIsOpen();if(!s.current&&c)for(const[ge,Q]of l.current)ge!==o&&!Q.disabled&&Q.setIsOpen(!1);a.setIsOpen(c),i()},[i]),P=r.useCallback(()=>[...l.current.values()].filter(o=>!o.disabled).map(o=>o.id),[]),z=r.useCallback(o=>{var a,c;(c=(a=j.current)==null?void 0:a.querySelector(`#${CSS.escape(o)}`))==null||c.focus()},[]),L=r.useMemo(()=>({registerItem:b,unregisterItem:S,updateItemMeta:_,toggleItem:g,getTriggers:P,focusTrigger:z}),[b,S,_,g,P,z]),V=r.useMemo(()=>{const o=["accordion",`accordion_${m}`];return A==="sm"&&o.push("accordion_sm"),A==="lg"&&o.push("accordion_lg"),h&&o.push("accordion_demo-narrow"),o},[m,A,h]),{class:H,...t}=k,v=Ie(t);return e.jsx(Ae.Provider,{value:L,children:e.jsx("div",{ref:j,className:xe(V,w),...v,children:u})})}d.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{variant:{defaultValue:{value:"'bordered'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function n({ripple:I,label:x,content:p,open:h,disabled:u,extraCode:w,extra:k,children:j,className:l,...C}){const{rippleAttrs:F}=he({ripple:I}),y=r.useContext(Ae),m=r.useRef(y);m.current=y;const A=r.useId().replace(/:/g,""),s=`accordion-trigger-${A}`,i=`accordion-panel-${A}`,[b,S]=r.useState(()=>!!h),_=r.useRef(b);_.current=b;const g=k!=null;r.useEffect(()=>{const t=m.current;if(t)return t.registerItem({id:s,label:x,content:p,open:!!h,disabled:!!u,hasExtra:g,extraCode:w,getIsOpen:()=>_.current,setIsOpen:S}),()=>t.unregisterItem(s)},[s]),r.useEffect(()=>{const t=m.current;t&&t.updateItemMeta(s,{label:x,content:p,disabled:!!u,hasExtra:g,extraCode:w})},[s,x,p,u,g,w]);const P=r.useMemo(()=>["accordion_item",b&&"is-open",u&&"is-disabled"],[b,u]);function z(){u||!m.current||m.current.toggleItem(s)}function L(t){const v=m.current;if(!v)return;const o=v.getTriggers(),a=o.indexOf(s);if(a===-1)return;let c=null;t.key==="ArrowDown"?c=(a+1)%o.length:t.key==="ArrowUp"?c=(a-1+o.length)%o.length:t.key==="Home"?c=0:t.key==="End"&&(c=o.length-1),c!==null&&(t.preventDefault(),v.focusTrigger(o[c]))}const{class:V,...H}=C;return e.jsxs("div",{className:xe(P,l),...H,children:[e.jsx("div",{className:"accordion_heading",role:"heading","aria-level":3,children:e.jsxs(we,{id:s,variant:"text",className:"accordion_trigger",expanded:b,"aria-controls":i,disabled:u,onClick:z,onKeyDown:L,iconAfter:e.jsx(ke,{name:"chevron-down",className:"accordion_icon"}),...F,children:[e.jsx("span",{className:"accordion_label",children:x}),g?e.jsx("span",{className:"accordion_extra",children:k}):null]})}),e.jsx("div",{id:i,className:"accordion_panel",role:"region","aria-labelledby":s,hidden:!b||void 0,children:e.jsx("div",{className:"accordion_content",children:j??(p?e.jsx("p",{children:p}):null)})})]})}n.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};const ve=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ce=[{name:"variant",type:"'bordered' | 'flush' | 'card'",default:"bordered",description:"아코디언 스킨 — bordered(붙임) · flush · card(항목 간격, FAQ)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"multiple",type:"boolean",default:"false",description:"여러 패널 동시 열기 허용"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (accordion_demo-narrow)"}],Se=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Pe=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 항목 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},je],ze=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Re=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보 (배지·메타 텍스트)"}],Ee=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],De=[{name:"accordion",description:"루트 구조 클래스"},{name:"accordion_bordered",description:"외곽 테두리로 항목을 한 덩어리로 붙인 스킨"},{name:"accordion_flush",description:"구분선만 있는 플러시 스킨"},{name:"accordion_card",description:"항목 사이 간격·독립 카드 스킨 (FAQ 기본 예시)"},{name:"accordion_sm · accordion_lg",description:"크기 변형"},{name:"accordion_item · accordion_trigger · accordion_panel",description:"내부 파트"},{name:"accordion_heading",description:'role="heading" aria-level="3" 헤딩 래퍼'},{name:"accordion_label · accordion_extra · accordion_icon",description:"트리거 파트"},{name:"accordion_content",description:"패널 본문 래퍼"},{name:"data-accordion",description:"HTML 마크업 JS 초기화 대상"},{name:"data-accordion-multiple",description:"HTML 마크업 다중 열기 허용"},{name:"is-open · is-disabled",description:"상태 클래스"}],Ne=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Be=[{name:"--accordion-font-size",default:"var(--text-size-sm)",description:"기본(md) 본문 크기"},{name:"--accordion-trigger-font-weight · --accordion-trigger-gap",default:"600 · var(--space-sm)",description:"트리거 타이포·간격"},{name:"--accordion-trigger-padding-y · --accordion-trigger-padding-x",default:"0.875rem · var(--space-lg)",description:"트리거 패딩(md)"},{name:"--accordion-content-font-size",default:"var(--text-size-sm)",description:"콘텐츠 글자 크기"},{name:"--accordion-content-padding-y · --accordion-content-padding-x",default:"var(--space-lg) · var(--space-lg)",description:"콘텐츠 상하·좌우 패딩(동일)"},{name:"--accordion-icon-size",default:"1rem",description:"펼침 아이콘(md)"},{name:"--accordion-card-gap",default:"0",description:"카드형 아코디언 항목 간격"},{name:"--accordion-card-trigger-bg",default:"var(--color-surface-raised)",description:"카드형 트리거 배경"},{name:"--accordion-font-size-sm · --accordion-trigger-padding-y-sm · --accordion-trigger-padding-x-sm",default:"var(--text-size-xs) · 0.625rem · var(--space-md)",description:"sm 크기"},{name:"--accordion-icon-size-sm",default:"0.875rem",description:"sm 아이콘"},{name:"--accordion-font-size-lg · --accordion-trigger-padding-y-lg · --accordion-trigger-padding-x-lg",default:"var(--text-size-base) · 1rem · var(--space-xl)",description:"lg 크기"},{name:"--accordion-icon-size-lg",default:"1.125rem",description:"lg 아이콘"}],$=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Me=[{name:"children",description:"AccordionItem 나열"}],Oe=[{name:"children",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보 (배지·메타 텍스트)"}],Te=[{title:"API · Accordion Props",description:"React에서는 camelCase prop을 사용합니다.",tables:[{columns:ve,rows:Ce,codeColumn:"name"}]},{title:"API · AccordionItem Props",description:"Vue의 extra-code는 React extraCode입니다.",tables:[{columns:Se,rows:Pe,codeColumn:"name"}]},{title:"API · Accordion Children",tables:[{columns:$,rows:Me,codeColumn:"name"}]},{title:"API · AccordionItem Children / Slots",description:"Vue 슬롯은 React children · extra prop으로 다룹니다.",tables:[{columns:ze,rows:Re,codeColumn:"name"},{columns:$,rows:Oe,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ee,rows:De,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ne,rows:Be,codeColumn:"name"}]}],Fe={variant:"card",size:"md",multiple:!1,narrow:!1},$e={title:"Components/기타/Accordion",id:"components-accordion",component:d,subcomponents:{AccordionItem:n},tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","flush","card"],type:{name:"enum",summary:"'bordered' | 'flush' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},multiple:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Te,docs:{description:{component:"접이식 패널 그룹 Accordion 컴포넌트입니다."}}}},R={parameters:{controls:{disable:!1}},args:{...Fe},render:I=>e.jsxs(d,{...I,children:[e.jsx(n,{label:"섹션 1",open:!0,content:"Controls로 속성을 조절해 보세요."}),e.jsx(n,{label:"섹션 2",content:"두 번째 패널"})]})},E={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
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
}`,language:"tsx"}}},render:f(e.jsxs(d,{variant:"card",narrow:!0,children:[e.jsx(n,{label:"배송은 얼마나 걸리나요?",content:"평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."}),e.jsx(n,{label:"교환·반품은 어떻게 하나요?",open:!0,content:"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."}),e.jsx(n,{label:"해외 배송이 가능한가요?",content:"현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."})]}))},D={name:"다중 열기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function MultipleExample() {
  return (
    <Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{narrow:!0,multiple:!0,children:[e.jsx(n,{label:"알림",open:!0,content:"이메일·푸시 알림 수신 여부를 설정합니다."}),e.jsx(n,{label:"개인정보",open:!0,content:"프로필 공개 범위와 데이터 다운로드를 관리합니다."}),e.jsx(n,{label:"보안",content:"비밀번호 변경과 2단계 인증을 설정합니다."})]}))},N={name:"플러시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function FlushExample() {
  return (
    <Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{variant:"flush",narrow:!0,children:[e.jsx(n,{label:"일반",open:!0,content:"언어, 시간대, 테마 등 기본 환경 설정입니다."}),e.jsx(n,{label:"접근성",content:"고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다."}),e.jsx(n,{label:"고급",content:"개발자 도구와 실험 기능을 켜거나 끕니다."})]}))},B={name:"보더",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function BorderedExample() {
  return (
    <Accordion variant="bordered" narrow>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}`,language:"tsx"}}},render:f(e.jsxs(d,{variant:"bordered",narrow:!0,children:[e.jsx(n,{label:"알림",open:!0,content:"이메일·푸시 알림 수신 여부를 설정합니다."}),e.jsx(n,{label:"개인정보",content:"프로필 공개 범위와 데이터 다운로드를 관리합니다."}),e.jsx(n,{label:"보안",content:"비밀번호 변경과 2단계 인증을 설정합니다."})]}))},M={name:"보조 정보",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra prop으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
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
}`,language:"tsx"}}},render:f(e.jsxs(d,{narrow:!0,children:[e.jsx(n,{label:"미해결 문의",open:!0,content:"답변이 필요한 고객 문의 3건이 있습니다.",extraCode:'<span class="badge badge_count color_danger badge_sm">3</span>',extra:e.jsx("span",{className:"badge badge_count color_danger badge_sm",children:"3"})}),e.jsx(n,{label:"처리 완료",content:"최근 일주일간 완료된 문의 12건입니다.",extraCode:"지난 7일",extra:"지난 7일"})]}))},O={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
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
}`,language:"tsx"}}},render:f(e.jsxs(d,{narrow:!0,children:[e.jsx(n,{label:"공개 문서",open:!0,content:"누구나 열람할 수 있는 가이드 문서입니다."}),e.jsx(n,{label:"팀 전용 (권한 없음)",disabled:!0,content:"팀 멤버만 접근할 수 있는 내부 문서입니다."})]}))},T={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
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
}`,language:"tsx"}}},render:f(e.jsxs(e.Fragment,{children:[e.jsx(d,{size:"sm",narrow:!0,children:e.jsx(n,{label:"Small",open:!0,content:"작은 아코디언 — 좁은 패딩."})}),e.jsx(d,{size:"lg",narrow:!0,children:e.jsx(n,{label:"Large",open:!0,content:"큰 아코디언 — 넓은 패딩과 큰 글자."})})]}))};var q,U,K;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(U=R.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var J,Z,G;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(G=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var W,X,Y;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,oe,re;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,ce,te;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var ae,se,ie;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,le,me;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(le=O.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,ue,be;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const qe=["Playground","Basic","Multiple","Flush","Bordered","Extra","Disabled","Size"];export{E as Basic,B as Bordered,O as Disabled,M as Extra,N as Flush,D as Multiple,R as Playground,T as Size,qe as __namedExportsOrder,$e as default};

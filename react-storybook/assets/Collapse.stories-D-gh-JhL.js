import{r as l,X as ye,n as xe,j as e,a as B,d as be,Y as _e,v as fe,I as ge}from"./iframe-DbjMrqYU.js";import{w}from"./story-renders-CrEYzOkG.js";import{r as Pe}from"./ripple-api-B9h0vjZK.js";import"./preload-helper-DUxc-Dqw.js";const he=l.createContext(null),ke=new Set(["bordered","ghost","card"]),ve=new Set(["sm","md","lg"]);function d({variant:f="bordered",size:m="md",accordion:r,narrow:u,children:c,className:C,...h}){const j=l.useRef(null),p=l.useRef(new Map),[y,_]=l.useState([]),g=l.useRef(y);g.current=y;const s=ke.has(f)?f:"bordered",x=ve.has(m)?m:"md",n=l.useRef(r);n.current=r,ye({variant:s,size:x,accordion:r,narrow:u},g,j,{className:C,...h});const t=l.useCallback(()=>{_([...p.current.values()].map(a=>({id:a.id,label:a.label,content:a.content,open:a.open,disabled:a.disabled,hasExtra:a.hasExtra,extraCode:a.extraCode,isOpen:{get value(){return a.getIsOpen()}}})))},[]),i=l.useCallback(a=>{p.current.set(a.id,a),t()},[t]),k=l.useCallback(a=>{p.current.delete(a),t()},[t]),v=l.useCallback((a,S)=>{const N=p.current.get(a);N&&(p.current.set(a,{...N,...S}),t())},[t]),b=l.useCallback(a=>{const S=p.current.get(a);if(!S||S.disabled)return;const N=!S.getIsOpen();if(n.current&&N)for(const[we,H]of p.current)we!==a&&!H.disabled&&H.setIsOpen(!1);S.setIsOpen(N),t()},[t]),E=l.useMemo(()=>({registerPanel:i,unregisterPanel:k,updatePanelMeta:v,togglePanel:b}),[i,k,v,b]),R=l.useMemo(()=>{const a=["collapse_group",`collapse_${s}`];return x==="sm"&&a.push("collapse_sm"),x==="lg"&&a.push("collapse_lg"),u&&a.push("collapse_demo-narrow"),a},[s,x,u]),{class:je,...T}=h,P=xe(T);return e.jsx(he.Provider,{value:E,children:e.jsx("div",{ref:j,className:B(R,C),...P,children:c})})}d.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{variant:{defaultValue:{value:"'bordered'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function F({ripple:f,triggerLabel:m,narrow:r,boxed:u=!0,open:c,lead:C,children:h,className:j,...p}){const{rippleAttrs:y}=be({ripple:f}),_=l.useRef(null),g=`collapse-ext-${l.useId().replace(/:/g,"")}`,[s,x]=l.useState(()=>!!c),n=l.useRef(s);n.current=s;const t=l.useMemo(()=>({get value(){return n.current}}),[]);_e({triggerLabel:m,narrow:r,boxed:u,open:c},_,{className:j,...p},t);const i=l.useMemo(()=>u?{marginTop:"var(--space-sm)",padding:"var(--space-lg)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",background:"var(--color-surface-raised)"}:void 0,[u]);function k(){x(R=>!R)}const{class:v,...b}=p,E=xe(b);return e.jsxs("div",{ref:_,className:B(r&&"collapse_demo-narrow",j),...E,children:[C!=null?e.jsx("div",{"data-demo-slot":"lead",children:C}):null,e.jsx(fe,{variant:"ghost",size:"sm",expanded:s,"aria-controls":g,onClick:k,iconAfter:e.jsx(ge,{name:"chevron-down",size:"sm"}),...y,children:e.jsx("span",{className:"btn_label",children:m})}),e.jsx("div",{id:g,className:B("collapse",s&&"is-open"),"data-demo-slot":"default",style:i,hidden:!s||void 0,children:h})]})}F.__docgenInfo={description:"",methods:[],displayName:"CollapseExternal",props:{boxed:{defaultValue:{value:"true",computed:!1},required:!1}}};function o({ripple:f,label:m,content:r,open:u,disabled:c,extraCode:C,extra:h,children:j,className:p,...y}){const{rippleAttrs:_}=be({ripple:f}),g=l.useContext(he),s=l.useRef(g);s.current=g;const x=l.useId().replace(/:/g,""),n=`collapse-trigger-${x}`,t=`collapse-body-${x}`,[i,k]=l.useState(()=>!!u),v=l.useRef(i);v.current=i;const b=h!=null;l.useEffect(()=>{const P=s.current;if(P)return P.registerPanel({id:n,label:m,content:r,open:!!u,disabled:!!c,hasExtra:b,extraCode:C,getIsOpen:()=>v.current,setIsOpen:k}),()=>P.unregisterPanel(n)},[n]),l.useEffect(()=>{const P=s.current;P&&P.updatePanelMeta(n,{label:m,content:r,disabled:!!c,hasExtra:b,extraCode:C})},[n,m,r,c,b,C]);const E=l.useMemo(()=>["collapse_panel",i&&"is-open",c&&"is-disabled"],[i,c]);function R(){c||!s.current||s.current.togglePanel(n)}const{class:je,...T}=y;return e.jsxs("div",{className:B(E,p),...T,children:[e.jsx("div",{className:"collapse_header",children:e.jsxs(fe,{id:n,variant:"text",className:"collapse_trigger",expanded:i,"aria-controls":t,disabled:c,onClick:R,iconAfter:e.jsx(ge,{name:"chevron-down",className:"collapse_icon"}),..._,children:[e.jsx("span",{className:"collapse_label",children:m}),b?e.jsx("span",{className:"collapse_extra",children:h}):null]})}),e.jsx("div",{id:t,className:"collapse_body",role:"region","aria-labelledby":n,hidden:!i||void 0,children:e.jsx("div",{className:"collapse_content",children:j??(r?e.jsx("p",{children:r}):null)})})]})}o.__docgenInfo={description:"",methods:[],displayName:"CollapsePanel"};const Se=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ee=[{name:"variant",type:"'bordered' | 'ghost' | 'card'",default:"bordered",description:"패널 그룹 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"트리거·본문 패딩 크기"},{name:"accordion",type:"boolean",default:"false",description:"한 번에 하나의 패널만 열기 (아코디언 모드)"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한 (collapse_demo-narrow)"}],Re=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ne=[{name:"label",type:"string",default:"—",description:"트리거에 표시할 제목"},{name:"content",type:"string",default:"—",description:"패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},{name:"disabled",type:"boolean",default:"false",description:"비활성 패널 (is-disabled + trigger disabled)"},{name:"extra-code",type:"string",default:"—",description:"코드 예시용 extra 슬롯 마크업 (데모 코드 생성)"},Pe],Ie=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],De=[{name:"trigger-label",type:"string",default:"—",description:"외부 트리거 버튼 텍스트"},{name:"narrow",type:"boolean",default:"false",description:"데모용 최대 너비 제한"},{name:"boxed",type:"boolean",default:"true",description:"접힘 영역에 테두리·배경 스타일 적용"},{name:"open",type:"boolean",default:"false",description:"초기 열림 상태"},Pe],$=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ze=[{name:"default",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보"}],Oe=[{name:"lead",description:"트리거 위 안내 텍스트"},{name:"default",description:"접히는 본문 영역"}],Me=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ae=[{name:"collapse",description:"독립 접힘 영역 (외부 트리거 대상)"},{name:"collapse_group",description:"패널 그룹 컨테이너"},{name:"collapse_panel · collapse_trigger · collapse_body",description:"패널 그룹 내부 파트"},{name:"collapse_label · collapse_extra · collapse_icon",description:"트리거 파트"},{name:"collapse_content",description:"패널 본문 래퍼"},{name:"collapse_bordered",description:"외곽 테두리 스킨 (기본)"},{name:"collapse_ghost",description:"배경 강조 고스트 스킨"},{name:"collapse_card",description:"패널별 카드 분리 스킨"},{name:"collapse_sm · collapse_lg",description:"크기 변형"},{name:"data-collapse",description:"HTML 패널 그룹 JS 초기화"},{name:"data-collapse-trigger",description:"HTML 외부 트리거 JS 초기화"},{name:"data-collapse-accordion",description:"HTML 단일 패널만 열기"},{name:"is-open · is-disabled",description:"상태 클래스"}],G=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Le=[{name:"children",description:"CollapsePanel 나열"}],Ve=[{name:"children",description:"패널 본문 (content prop 대체)"},{name:"extra",description:"트리거 오른쪽 보조 정보"}],Be=[{name:"lead",description:"트리거 위 안내 텍스트"},{name:"children",description:"접히는 본문 영역"}],Te=[{title:"API · CollapseExternal Props",description:"React에서는 camelCase prop을 사용합니다. (trigger-label → triggerLabel)",tables:[{columns:Ie,rows:De,codeColumn:"name"}]},{title:"API · CollapseExternal Children",description:"Vue 슬롯은 React lead · children prop으로 다룹니다.",tables:[{columns:$,rows:Oe,codeColumn:"name"},{columns:G,rows:Be,codeColumn:"name"}]},{title:"API · Collapse Props",tables:[{columns:Se,rows:Ee,codeColumn:"name"}]},{title:"API · CollapsePanel Props",description:"Vue의 extra-code는 React extraCode입니다.",tables:[{columns:Re,rows:Ne,codeColumn:"name"}]},{title:"API · CollapsePanel Children",description:"Vue 슬롯은 React children · extra prop으로 다룹니다.",tables:[{columns:$,rows:ze,codeColumn:"name"},{columns:G,rows:Ve,codeColumn:"name"}]},{title:"API · Collapse Children",tables:[{columns:G,rows:Le,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Me,rows:Ae,codeColumn:"name"}]}],Ge={variant:"bordered",size:"md",accordion:!1,narrow:!1};function Fe(){return e.jsxs("dl",{className:"list list_definition list_inline list_block list_compact",style:{"--list-inline-label-width":"auto","--list-inline-gap":"1rem"},children:[e.jsx("dt",{className:"list_title",children:"주문번호"}),e.jsx("dd",{className:"list_desc",children:"ORD-2024-0815"}),e.jsx("dt",{className:"list_title",children:"결제금액"}),e.jsx("dd",{className:"list_desc",children:"₩42,000"}),e.jsx("dt",{className:"list_title",children:"배송지"}),e.jsx("dd",{className:"list_desc",children:"서울특별시 강남구 테헤란로 123"})]})}const Xe={title:"Components/기타/Collapse",id:"components-collapse",component:d,subcomponents:{CollapsePanel:o,CollapseExternal:F},tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","ghost","card"],type:{name:"enum",summary:"'bordered' | 'ghost' | 'card'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},accordion:{control:"boolean",type:{name:"boolean",summary:"boolean"}},narrow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Te,docs:{description:{component:"접이식 패널 그룹 Collapse 컴포넌트입니다."}}}},I={parameters:{controls:{disable:!1}},args:{...Ge},render:f=>e.jsxs(d,{...f,children:[e.jsx(o,{label:"패널 1",open:!0,content:"내용 1"}),e.jsx(o,{label:"패널 2",content:"내용 2"})]})},D={name:"외부 트리거",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다."},source:{code:`import CollapseExternal from '@uxkm/ui-react/components/CollapseExternal.jsx';

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
}`,language:"tsx"}}},render:w(e.jsx(F,{triggerLabel:"주문 상세 보기",narrow:!0,lead:e.jsx("p",{style:{margin:"0 0 var(--space-md)"},children:"주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다."}),children:e.jsx(Fe,{})}))},z={name:"패널 그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
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
}`,language:"tsx"}}},render:w(e.jsxs(d,{narrow:!0,children:[e.jsx(o,{label:"배송 정보",open:!0,content:"평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."}),e.jsx(o,{label:"결제 수단",content:"신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."}),e.jsx(o,{label:"교환·반품 안내",content:"수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."})]}))},O={name:"아코디언 모드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"accordion prop을 지정하면 한 번에 하나의 패널만 열립니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function AccordionModeExample() {
  return (
    <Collapse narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>
  );
}`,language:"tsx"}}},render:w(e.jsxs(d,{narrow:!0,accordion:!0,children:[e.jsx(o,{label:"알림 설정",open:!0,content:"이메일·푸시·SMS 알림 수신 여부를 설정합니다."}),e.jsx(o,{label:"개인정보",content:"프로필 공개 범위와 데이터 다운로드를 관리합니다."}),e.jsx(o,{label:"보안",content:"비밀번호 변경과 2단계 인증을 설정합니다."})]}))},M={name:"스킨",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"collapse_ghost · collapse_card로 외형을 조절합니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
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
}`,language:"tsx"}}},render:w(e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"ghost",narrow:!0,children:e.jsx(o,{label:"Ghost",open:!0,content:"배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."})}),e.jsxs(d,{variant:"card",narrow:!0,children:[e.jsx(o,{label:"Card",open:!0,content:"패널마다 카드 형태로 분리됩니다."}),e.jsx(o,{label:"두 번째 패널",content:"카드 스킨의 두 번째 패널입니다."})]})]}))},A={name:"보조 텍스트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"extra prop으로 트리거 오른쪽에 메타 정보를 표시합니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
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
}`,language:"tsx"}}},render:w(e.jsxs(d,{narrow:!0,children:[e.jsx(o,{label:"진행 중",open:!0,content:"현재 처리 중인 요청 3건입니다.",extraCode:"3건",extra:"3건"}),e.jsx(o,{label:"처리 완료",content:"최근 일주일간 완료된 요청 12건입니다.",extraCode:"지난 7일",extra:"지난 7일"})]}))},L={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
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
}`,language:"tsx"}}},render:w(e.jsxs(d,{narrow:!0,children:[e.jsx(o,{label:"공개 문서",open:!0,content:"누구나 열람할 수 있는 가이드 문서입니다."}),e.jsx(o,{label:"팀 전용 (권한 없음)",disabled:!0,content:"팀 멤버만 접근할 수 있는 내부 문서입니다."})]}))},V={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"size prop으로 트리거와 본문 패딩을 조절합니다."},source:{code:`import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
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
}`,language:"tsx"}}},render:w(e.jsxs(e.Fragment,{children:[e.jsx(d,{size:"sm",narrow:!0,children:e.jsx(o,{label:"Small",open:!0,content:"작은 콜랩스 — 좁은 패딩."})}),e.jsx(d,{size:"lg",narrow:!0,children:e.jsx(o,{label:"Large",open:!0,content:"큰 콜랩스 — 넓은 패딩과 큰 글자."})})]}))};var q,J,X;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(J=I.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,K;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,U,W;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=z.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var ee,le,ae;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(le=O.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,se,ne;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,re,ce;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ce=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var pe,ie,de;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ue,Ce;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(Ce=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:Ce.source}}};const Ye=["Playground","Standalone","Basic","AccordionMode","Skin","Extra","Disabled","Size"];export{O as AccordionMode,z as Basic,L as Disabled,A as Extra,I as Playground,V as Size,M as Skin,D as Standalone,Ye as __namedExportsOrder,Xe as default};

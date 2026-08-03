import{n as Qe,j as e,a as Ue,t as ga,r as s,d as fa,u as ka,c as Sa,I as fe,B as d,b as xa}from"./iframe-Ec8Bs185.js";import{w as te}from"./story-renders-Bo_F9MSp.js";import{h as ha,a as ya}from"./ripple-api-CjGOCEZT.js";import"./preload-helper-DUxc-Dqw.js";const We=s.createContext("bottom-center"),L=["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"],va=new Set(L);function Ye({placement:n="bottom-center",label:u,children:k,className:p,...b}){const g=va.has(n)?n:"bottom-center",f=Qe(b),l=e.jsx(We.Provider,{value:g,children:e.jsx("div",{className:Ue("snackbar_region",`snackbar_region-${g}`,p),"aria-label":u,...f,children:k})});return typeof document<"u"?ga.createPortal(l,document.body):l}Ye.__docgenInfo={description:"",methods:[],displayName:"SnackbarRegion",props:{placement:{defaultValue:{value:"'bottom-center'",computed:!1},required:!1}}};const wa=new Set(["info","success","warning","danger"]),ja=new Set(["sm","md","lg"]),Ca=new Set(["fade","slide","none"]),_a=new Set(L),ke=300,Pa={info:"info",success:"check-circle",warning:"alert-triangle",danger:"x-circle"},Ea=xa("Snackbar",{defaults:{color:"info",size:"md",role:"status",duration:0,motion:"fade"},booleanProps:new Set(["closable","showIcon","round","ripple"]),skipProps:["role"]});function o({ripple:n,color:u="info",message:k,closable:p,closeLabel:b="알림 닫기",showIcon:g=!0,round:f,size:l="md",duration:S=0,motion:w="fade",placement:_,role:P="status",icon:j,action:r,children:c,className:t,onClose:m,onMouseEnter:i,onMouseLeave:h,onFocusCapture:y,onBlurCapture:A,onKeyDown:T,onAnimationEnd:$,...ce}){const le=s.useRef(null),C=s.useRef(null),O=s.useRef(null),B=s.useRef(null),ne=s.useRef(null),ie=s.useRef(0),E=s.useRef(0),D=s.useRef(new Set),M=s.useRef(m),aa=s.useContext(We),{rippleAttrs:na}=fa({ripple:n}),[V,ra]=s.useState(!0),[x,F]=s.useState("entering"),N=wa.has(u)?u:"info",q=ja.has(l)?l:"md",v=Ca.has(w)?w:"fade",me=_a.has(_)?_:aa,X=Number.isFinite(Number(S))?Math.max(0,Number(S)):0,sa=c??k;M.current=m,ka(Ea,{ripple:n,color:N,message:k,closable:p,closeLabel:b,showIcon:g,round:f,size:q,duration:X,motion:v,placement:_,role:P},Sa({default:c,icon:j,action:r}),le,{className:t,onClose:m,onMouseEnter:i,onMouseLeave:h,onFocusCapture:y,onBlurCapture:A,onKeyDown:T,onAnimationEnd:$,...ce});function z(){C.current!=null&&(window.clearTimeout(C.current),C.current=null)}function de(){B.current!=null&&(window.clearTimeout(B.current),B.current=null)}function re(){O.current!=null&&(window.clearTimeout(O.current),O.current=null)}function se(){var R;z(),re(),de(),ra(!1);const a=ne.current;ne.current=null,(R=M.current)==null||R.call(M,(a==null?void 0:a.reason)??"close",a==null?void 0:a.event)}function Z(a,R){if(!(x==="leaving"||!V)){if(z(),ne.current={reason:a,event:R},v==="none"){se();return}F("leaving"),B.current=window.setTimeout(se,ke)}}function ue(){!V||X===0||E.current<=0||D.current.size>0||C.current!=null||(ie.current=Date.now(),C.current=window.setTimeout(()=>{C.current=null,E.current=0,Z("timeout")},E.current))}function pe(a){if(D.current.add(a),C.current==null)return;const R=Date.now()-ie.current;E.current=Math.max(0,E.current-R),z()}function be(a){D.current.delete(a),ue()}s.useEffect(()=>{v==="none"&&F("open")},[v]),s.useEffect(()=>{if(!(x!=="entering"||v==="none"))return O.current=window.setTimeout(()=>F("open"),ke),re},[x,v]),s.useEffect(()=>{if(x==="open")return E.current=X,D.current.clear(),z(),ue(),z},[x,X,V]),s.useEffect(()=>()=>{z(),re(),de()},[]);const oa=s.useMemo(()=>{const a=["snackbar",N==="danger"?"color_error":`color_${N}`];return q==="sm"&&a.push("snackbar_sm"),q==="lg"&&a.push("snackbar_lg"),f&&a.push("snackbar_round"),a.push(`snackbar_motion-${v}`),a.push(`snackbar_placement-${me}`),a.push(`is-${x}`),a},[x,N,v,me,q,f]),{class:Va,role:Fa,...ta}=ce,ca=Qe(ta);function la(a){Z("close",a)}function ia(a){p&&a.key==="Escape"&&(a.preventDefault(),Z("close",a)),T==null||T(a)}function ma(a){(a.currentTarget===a.target||!a.currentTarget.contains(a.relatedTarget))&&pe("focus"),y==null||y(a)}function da(a){a.currentTarget.contains(a.relatedTarget)||be("focus"),A==null||A(a)}function ua(a){pe("hover"),i==null||i(a)}function pa(a){be("hover"),h==null||h(a)}function ba(a){a.currentTarget===a.target&&(x==="entering"?F("open"):x==="leaving"&&se(),$==null||$(a))}const ge=typeof r=="function"?r({close:a=>Z("action",a)}):r;return V?e.jsxs("div",{ref:le,className:Ue(oa,t),role:P,"aria-live":P==="alert"?"assertive":"polite","aria-atomic":"true","aria-relevant":"additions text",onMouseEnter:ua,onMouseLeave:pa,onFocusCapture:ma,onBlurCapture:da,onKeyDown:ia,onAnimationEnd:ba,...ca,children:[g?e.jsx("span",{className:"snackbar_icon-wrap","data-demo-slot":"icon","aria-hidden":"true",children:j??e.jsx(fe,{name:Pa[N]??"info",className:"snackbar_icon"})}):null,e.jsx("div",{className:"snackbar_message",children:sa}),ge!=null?e.jsx("div",{className:"snackbar_action","data-demo-slot":"action",children:ge}):null,p?e.jsx(d,{variant:"ghost",iconOnly:!0,className:"snackbar_close",ariaLabel:b,iconBefore:e.jsx(fe,{name:"close",size:"sm"}),onClick:la,...na}):null]}):null}o.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{color:{defaultValue:{value:"'info'",computed:!1},required:!1},closeLabel:{defaultValue:{value:"'알림 닫기'",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},duration:{defaultValue:{value:"0",computed:!1},required:!1},motion:{defaultValue:{value:"'fade'",computed:!1},required:!1},role:{defaultValue:{value:"'status'",computed:!1},required:!1}}};const oe={"top-start":"상단 좌측","top-center":"상단 가운데","top-end":"상단 우측","middle-start":"중간 좌측","middle-end":"중간 우측","bottom-start":"하단 좌측","bottom-center":"하단 가운데","bottom-end":"하단 우측"},Se=["info","success","warning","danger"];function ea({openOnLoad:n=!1,openOnLoadPlacement:u="bottom-center",openOnLoadCount:k=1,openOnLoadRound:p=!1,openOnLoadMotion:b="slide"}){const g=s.useRef(0),f=s.useRef(!1),[l,S]=s.useState([]);function w(r){S(c=>c.filter(t=>t.id!==r))}function _(r,c=0,t=!1,m="fade"){g.current+=1;const i=g.current;return{id:i,placement:r,color:Se[(i-1)%Se.length],message:`${oe[r]} 알림${c?` ${c}`:""}`,round:t,motion:m}}function P(r,c=1,t=!1,m="slide"){const i=Array.from({length:c},(h,y)=>_(r,c>1?y+1:0,t,m));S(h=>[...h,...i])}function j(r=1,c=!1,t="fade"){const m=L.flatMap(i=>Array.from({length:r},(h,y)=>_(i,r>1?y+1:0,c,t)));S(i=>[...i,...m])}return s.useEffect(()=>{if(!n||f.current)return;f.current=!0;const r=L.includes(u)?u:"bottom-center",c=Math.min(10,Math.max(1,Number(k)||1));P(r,c,p,b)},[n,k,b,u,p]),e.jsxs("div",{className:"snackbar_playground",children:[e.jsx("div",{className:"snackbar_playground-controls","aria-label":"Snackbar 위치 테스트",children:L.map(r=>e.jsx(d,{variant:"outline",size:"sm",label:oe[r],onClick:()=>P(r)},r))}),e.jsxs("div",{className:"snackbar_playground-actions",children:[e.jsx(d,{variant:"filled",color:"primary",label:"모든 위치에 1개",onClick:()=>j()}),e.jsx(d,{variant:"filled",color:"success",label:"각 위치에 3개씩",onClick:()=>j(3)}),e.jsx(d,{variant:"outline",label:"모든 위치에 라운드",onClick:()=>j(1,!0)}),e.jsx(d,{variant:"outline",label:"모든 위치 Slide",onClick:()=>j(1,!1,"slide")}),e.jsx(d,{variant:"ghost",label:`전체 닫기${l.length?` (${l.length})`:""}`,disabled:!l.length,onClick:()=>S([])})]}),L.map(r=>{const c=l.filter(t=>t.placement===r);return c.length?e.jsx(Ye,{placement:r,label:`${oe[r]} Snackbar 영역`,children:c.map(t=>e.jsx(o,{color:t.color,message:t.message,round:t.round,motion:t.motion,closable:!0,duration:8e3,action:({close:m})=>e.jsx(d,{variant:"ghost",size:"sm",label:"확인",onClick:m}),onClose:()=>w(t.id)},t.id))},r):null})]})}ea.__docgenInfo={description:"",methods:[],displayName:"SnackbarPlayground",props:{openOnLoad:{defaultValue:{value:"false",computed:!1},required:!1},openOnLoadPlacement:{defaultValue:{value:"'bottom-center'",computed:!1},required:!1},openOnLoadCount:{defaultValue:{value:"1",computed:!1},required:!1},openOnLoadRound:{defaultValue:{value:"false",computed:!1},required:!1},openOnLoadMotion:{defaultValue:{value:"'slide'",computed:!1},required:!1}}};const xe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],za=[{name:"color",type:"'info' | 'success' | 'warning' | 'danger'",default:"info",description:"의미 색상. danger는 color_error"},{name:"message",type:"ReactNode",default:"—",description:"메시지. children이 있으면 대체됨"},{name:"closable",type:"boolean",default:"false",description:"닫기 버튼과 내부 포커스 상태의 Escape 닫기 지원"},{name:"closeLabel",type:"string",default:"알림 닫기",description:"닫기 버튼의 접근성 라벨"},{name:"showIcon",type:"boolean",default:"true",description:"의미 색상에 대응하는 기본 아이콘 표시"},{name:"round",type:"boolean",default:"false",description:"높이 비율에 맞춘 캡슐형 모서리와 가로 패딩 적용"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"snackbar_sm · snackbar_lg"},{name:"duration",type:"number",default:"0",description:"자동 닫기 시간(ms). 0이면 유지하며, 호버·내부 포커스 중에는 타이머 일시정지"},{name:"motion",type:"'fade' | 'slide' | 'none'",default:"fade",description:"호출·닫기 효과. slide는 placement 방향을 따름"},{name:"placement",type:"SnackbarPlacement",default:"상위 Region 값",description:"Region 없이 사용하거나 Slide 방향을 직접 재정의할 때 지정"},{name:"role",type:"string",default:"status",description:"status는 polite, alert는 assertive 라이브 영역으로 설정"},{name:"icon",type:"ReactNode",default:"—",description:"기본 아이콘을 대체하는 콘텐츠"},{name:"action",type:"ReactNode | ({ close }) => ReactNode",default:"—",description:"후속 동작. render 함수의 close로 퇴장 효과 실행"},{name:"className",type:"string",default:"—",description:"snackbar 루트에 추가 클래스"},ha],Ra=[{name:"placement",type:"'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'",default:"bottom-center",description:"document.body에 포털 렌더링되는 고정 위치. start와 end는 RTL에서도 논리 방향을 따름"},{name:"label",type:"string",default:"—",description:"Snackbar 영역의 접근성 라벨"},{name:"children",type:"ReactNode",default:"—",description:"같은 위치에 세로로 쌓을 Snackbar 목록"},{name:"className",type:"string",default:"—",description:"snackbar_region에 추가 클래스"}],La=[{key:"name",label:"Children"},{key:"description",label:"설명"}],Ia=[{name:"children",description:"메시지 콘텐츠 (message prop 대체)"},{name:"icon",description:"커스텀 아이콘"},{name:"action",description:"버튼·링크 등 후속 동작"}],Na=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],Aa=[{name:"onClose(reason, event)",description:"퇴장 효과 후 호출. reason은 'close' · 'action' · 'timeout'"}],Ta=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],$a=[{name:"snackbar",description:"Snackbar 루트"},{name:"snackbar_sm · snackbar_lg",description:"크기 변형"},{name:"snackbar_round",description:"높이 비율에 맞춘 캡슐형 모서리"},{name:"snackbar_motion-fade · snackbar_motion-slide",description:"호출·닫기 모션 유형"},{name:"snackbar_placement-{placement}",description:"Slide 진입·퇴장 방향"},{name:"is-entering · is-open · is-leaving",description:"Snackbar 모션 생명주기 상태"},{name:"snackbar_icon-wrap · snackbar_icon",description:"아이콘 영역"},{name:"snackbar_message",description:"메시지 영역"},{name:"snackbar_action · snackbar_close",description:"액션·닫기 영역"},{name:"snackbar_region",description:"document.body에 포털 렌더링되는 고정 위치와 다중 Snackbar 스택 컨테이너"},{name:"snackbar_region-{placement}",description:"상단·중간·하단의 8개 위치 변형"},{name:"color_info · color_success · color_warning · color_error",description:"의미 색상"},{name:"aria-live · aria-atomic · aria-relevant",description:"메시지 전체를 스크린 리더에 알리는 라이브 영역 속성"},...ya],Oa=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ba=[{name:"--color-snackbar-info-bg · --color-snackbar-success-bg",default:"테마별 불투명 색상",description:"정보·성공 Snackbar 불투명 배경"},{name:"--color-snackbar-warning-bg · --color-snackbar-error-bg",default:"테마별 불투명 색상",description:"경고·오류 Snackbar 불투명 배경"},{name:"--color-snackbar-*-border",default:"테마별 불투명 색상",description:"의미 색상별 불투명 테두리"},{name:"--snackbar-min-width · --snackbar-max-width",default:"18rem · 36rem",description:"기본 최소·최대 너비"},{name:"--snackbar-padding-y · --snackbar-padding-x",default:"var(--space-sm) · var(--space-md)",description:"기본 패딩"},{name:"--snackbar-gap · --snackbar-action-gap",default:"var(--space-sm)",description:"콘텐츠·액션 간격"},{name:"--snackbar-font-size · --snackbar-line-height",default:"var(--text-size-base) · 1.5",description:"기본 타이포"},{name:"--snackbar-icon-size · --snackbar-close-size",default:"1.25rem · 2rem",description:"아이콘·닫기 버튼 크기"},{name:"--snackbar-round-padding-x",default:"var(--space-lg)",description:"기본 round 유형 가로 패딩"},{name:"--snackbar-round-padding-x-sm · --snackbar-round-padding-x-lg",default:"var(--space-md) · var(--space-xl)",description:"sm·lg round 유형 가로 패딩"},{name:"--snackbar-motion-duration · --snackbar-motion-distance",default:"200ms · 1rem",description:"Fade·Slide 시간과 이동 거리"},{name:"--snackbar-motion-easing",default:"cubic-bezier(0.2, 0, 0, 1)",description:"호출·닫기 가속 곡선"},{name:"--snackbar-region-offset · --snackbar-region-gap",default:"var(--space-md) · var(--space-sm)",description:"화면 가장자리 간격·Snackbar 사이 간격"},{name:"--snackbar-region-inset-block-start · --snackbar-region-inset-block-end",default:"var(--snackbar-region-offset)",description:"상단·하단 안전 영역"},{name:"--snackbar-region-inset-inline-start · --snackbar-region-inset-inline-end",default:"var(--snackbar-region-offset)",description:"좌측·우측 안전 영역"},{name:"--snackbar-region-z-index",default:"1200",description:"고정 Snackbar 스택 레이어"},{name:"--snackbar-padding-y-sm · --snackbar-padding-x-sm · --snackbar-font-size-sm",default:"var(--space-xs) · var(--space-sm) · var(--text-size-sm)",description:"sm 크기"},{name:"--snackbar-padding-y-lg · --snackbar-padding-x-lg · --snackbar-font-size-lg",default:"var(--space-md) · var(--space-lg) · var(--text-size-lg)",description:"lg 크기"}],Da=[{title:"접근성",description:`Snackbar는 포커스를 강제로 이동하지 않고 라이브 영역으로 상태 변화를 전달합니다.

- 일반적인 작업 결과는 \`role="status"\`로 정중하게 알리고, 즉시 확인해야 하는 오류에만 \`role="alert"\`를 사용합니다.
- 자동 닫기는 기본적으로 비활성화되어 있습니다. 사용하는 경우에도 내용을 읽고 액션을 수행할 충분한 시간을 제공하세요.
- 호버 또는 Snackbar 내부 포커스 중에는 자동 닫기 타이머가 멈춥니다. 닫기 가능한 Snackbar는 내부 포커스 상태에서 Esc로도 닫을 수 있습니다.
- 운영체제에서 모션 감소를 설정한 경우 Fade·Slide 시간을 최소화해 움직임을 줄입니다.
- 아이콘은 장식 요소로 숨겨지므로 상태를 색상이나 아이콘에만 의존하지 말고 메시지 텍스트로 명확하게 설명하세요.
- 액션은 하나의 짧고 명확한 동작으로 제공하고, 닫기 버튼에는 구체적인 \`closeLabel\`을 사용하세요.`,tables:[]},{title:"API · Props",tables:[{columns:xe,rows:za,codeColumn:"name"}]},{title:"API · SnackbarRegion",tables:[{columns:xe,rows:Ra,codeColumn:"name"}]},{title:"API · Children",tables:[{columns:La,rows:Ia,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:Na,rows:Aa,codeColumn:"name"}]},{title:"클래스 · 속성",tables:[{columns:Ta,rows:$a,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Oa,rows:Ba,codeColumn:"name"}]}],I=n=>te(n,n);function Ma(n){const[u,k]=s.useState(1),[p,b]=s.useState(!0);function g(){k(l=>l+1),b(!0)}function f(l,S){var w;b(!1),(w=n.onClose)==null||w.call(n,l,S)}return e.jsxs("div",{className:"snackbar_playground",children:[e.jsx("div",{className:"snackbar_playground-actions",style:{marginTop:0},children:e.jsx(d,{variant:"filled",color:"primary",label:"Snackbar 호출",onClick:g})}),p?e.jsx("div",{style:{marginTop:"var(--space-md)"},children:e.jsx(o,{...n,onClose:f},u)}):null]})}const Ha={title:"Components/피드백/Snackbar",id:"components-snackbar",component:o,tags:["autodocs"],argTypes:{color:{control:"select",options:["info","success","warning","danger"]},message:{control:"text"},closable:{control:"boolean"},closeLabel:{control:"text"},showIcon:{control:"boolean"},round:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]},duration:{control:{type:"number",min:0,step:500}},motion:{control:"select",options:["fade","slide","none"]},placement:{control:"select",options:["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"]},role:{control:"select",options:["status","alert"]},ripple:{control:"boolean"},action:{control:!1},icon:{control:!1},onClose:{action:"close"}},parameters:{layout:"padded",apiSections:Da,docs:{description:{component:"작업 결과나 짧은 상태 메시지를 일시적으로 전달하는 Snackbar 컴포넌트입니다."}}}},G={args:{color:"info",message:"새로운 업데이트가 있습니다.",closable:!1,closeLabel:"알림 닫기",showIcon:!0,round:!1,size:"md",duration:0,motion:"fade",placement:"bottom-center",role:"status"},render:n=>e.jsx(Ma,{...n})},H={name:"기본",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"네 가지 의미 색상으로 짧은 피드백을 전달합니다."},source:{language:"tsx",code:`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function BasicExample() {
  return (
    <>
      <Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
    </>
  );
}`}}},render:I(e.jsxs(e.Fragment,{children:[e.jsx(o,{color:"info",message:"새로운 업데이트가 있습니다."}),e.jsx(o,{color:"success",message:"변경 사항을 저장했습니다."}),e.jsx(o,{color:"warning",message:"세션이 곧 만료됩니다."}),e.jsx(o,{color:"danger",role:"alert",message:"저장하지 못했습니다."})]}))},J={name:"위치 · 여러 개 동작 테스트",parameters:{controls:{disable:!0},docs:{description:{story:"8개 위치는 본문이 아닌 브라우저 뷰포트를 기준으로 계산되며, 같은 위치의 Snackbar는 독립적으로 쌓입니다."},source:{language:"tsx",code:`import SnackbarPlayground from '@uxkm/ui-react/components/SnackbarPlayground.jsx';

export function PlacementExample() {
  return (
    <SnackbarPlayground
      openOnLoad
      openOnLoadPlacement="bottom-center"
      openOnLoadCount={1}
      openOnLoadMotion="slide"
    />
  );
}`}}},render:()=>e.jsx(ea,{openOnLoad:!0,openOnLoadPlacement:"bottom-center",openOnLoadCount:1,openOnLoadMotion:"slide"})},K={name:"간단한 메시지",parameters:{controls:{disable:!0},docs:{description:{story:"showIcon을 끄고 children으로 메시지를 전달할 수 있습니다."},source:{language:"tsx",code:`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function SimpleExample() {
  return <Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>;
}`}}},render:I(e.jsx(o,{showIcon:!1,children:"인터넷 연결이 복구되었습니다."}))},Q={name:"형태",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"기본 radius-md 유형과 높이 비율에 맞춘 캡슐형 round 유형을 제공합니다."},source:{language:"tsx",code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function ShapeExample() {
  return (
    <>
      <Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar
        round
        color="warning"
        message="액션과 닫기가 포함된 라운드"
        closable
        action={<Button variant="ghost" size="sm" label="확인" />}
      />
    </>
  );
}`}}},render:I(e.jsxs(e.Fragment,{children:[e.jsx(o,{message:"기본 스퀘어 라운드"}),e.jsx(o,{round:!0,color:"success",message:"비율형 캡슐 라운드"}),e.jsx(o,{round:!0,color:"warning",message:"액션과 닫기가 포함된 라운드",closable:!0,action:e.jsx(d,{variant:"ghost",size:"sm",label:"확인"})})]}))},U={name:"호출 · 닫기 효과",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"fade, 배치 방향을 따르는 slide, 전환이 없는 none 모션을 제공합니다."},source:{language:"tsx",code:`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function MotionExample() {
  return (
    <>
      <Snackbar motion="fade" message="Fade 효과" />
      <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
      <Snackbar motion="none" message="전환 효과 없음" />
    </>
  );
}`}}},render:I(e.jsxs(e.Fragment,{children:[e.jsx(o,{motion:"fade",message:"Fade 효과"}),e.jsx(o,{motion:"slide",placement:"middle-end",message:"우측 Slide 효과"}),e.jsx(o,{motion:"none",message:"전환 효과 없음"})]}))},W={name:"크기",parameters:{controls:{disable:!0},demoPreview:{stack:!0},docs:{description:{story:"sm · md · lg 세 가지 크기를 제공합니다."},source:{language:"tsx",code:`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function SizeExample() {
  return (
    <>
      <Snackbar size="sm" message="Small Snackbar" />
      <Snackbar message="Medium Snackbar" />
      <Snackbar size="lg" message="Large Snackbar" />
    </>
  );
}`}}},render:I(e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",message:"Small Snackbar"}),e.jsx(o,{message:"Medium Snackbar"}),e.jsx(o,{size:"lg",message:"Large Snackbar"})]}))},Y={name:"액션",parameters:{controls:{disable:!0},docs:{description:{story:"action 영역에 하나의 명확한 후속 동작을 배치합니다."},source:{language:"tsx",code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function ActionExample() {
  return (
    <Snackbar
      color="success"
      message="항목을 삭제했습니다."
      action={({ close }) => (
        <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />
      )}
    />
  );
}`}}},render:I(e.jsx(o,{color:"success",message:"항목을 삭제했습니다.",action:({close:n})=>e.jsx(d,{variant:"ghost",size:"sm",label:"실행 취소",onClick:n})}))},ee={name:"닫기 가능",args:{color:"warning",message:"브라우저를 최신 버전으로 업데이트해 주세요.",closable:!0,closeLabel:"알림 닫기",showIcon:!0,size:"md",duration:0,motion:"fade",placement:"bottom-center",role:"status"},parameters:{docs:{description:{story:"닫기 버튼은 onClose에 close 사유와 클릭 이벤트를 전달하며, 내부 포커스 상태에서는 Esc도 지원합니다."},source:{language:"tsx",code:`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function CloseExample() {
  return (
    <Snackbar
      closable
      color="warning"
      message="브라우저를 최신 버전으로 업데이트해 주세요."
      onClose={(reason) => console.log(reason)}
    />
  );
}`}}},render:te(e.jsx(o,{closable:!0,color:"warning",message:"브라우저를 최신 버전으로 업데이트해 주세요."}),n=>e.jsx(o,{...n},`${n.color}-${n.message}-${n.closable}-${n.motion}`))},ae={name:"자동 닫기",args:{color:"success",message:"4초 후 자동으로 닫힙니다.",closable:!1,closeLabel:"알림 닫기",showIcon:!0,size:"md",duration:4e3,motion:"fade",placement:"bottom-center",role:"status"},parameters:{docs:{description:{story:"duration 이후 timeout 사유로 닫히며, 호버하거나 내부 요소에 포커스하면 남은 시간이 일시정지됩니다."},source:{language:"tsx",code:`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function TimedExample() {
  return (
    <Snackbar
      duration={4000}
      color="success"
      message="4초 후 자동으로 닫힙니다."
      onClose={(reason) => console.log(reason)}
    />
  );
}`}}},render:te(e.jsx(o,{color:"success",message:"실제 서비스에서는 duration={4000}처럼 자동 닫기를 설정할 수 있습니다."}),n=>e.jsx(o,{...n},`${n.color}-${n.message}-${n.duration}-${n.motion}`))};var he,ye,ve;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    color: 'info',
    message: '새로운 업데이트가 있습니다.',
    closable: false,
    closeLabel: '알림 닫기',
    showIcon: true,
    round: false,
    size: 'md',
    duration: 0,
    motion: 'fade',
    placement: 'bottom-center',
    role: 'status'
  },
  render: args => <SnackbarStoryPlayground {...args} />
}`,...(ve=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var we,je,Ce;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '네 가지 의미 색상으로 짧은 피드백을 전달합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function BasicExample() {
  return (
    <>
      <Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
    </>
  );
}\`
      }
    }
  },
  render: staticExample(<>
      <Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
    </>)
}`,...(Ce=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var _e,Pe,Ee;J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: '위치 · 여러 개 동작 테스트',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '8개 위치는 본문이 아닌 브라우저 뷰포트를 기준으로 계산되며, 같은 위치의 Snackbar는 독립적으로 쌓입니다.'
      },
      source: {
        language: 'tsx',
        code: \`import SnackbarPlayground from '@uxkm/ui-react/components/SnackbarPlayground.jsx';

export function PlacementExample() {
  return (
    <SnackbarPlayground
      openOnLoad
      openOnLoadPlacement="bottom-center"
      openOnLoadCount={1}
      openOnLoadMotion="slide"
    />
  );
}\`
      }
    }
  },
  render: () => <SnackbarPlayground openOnLoad openOnLoadPlacement="bottom-center" openOnLoadCount={1} openOnLoadMotion="slide" />
}`,...(Ee=(Pe=J.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var ze,Re,Le;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: '간단한 메시지',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'showIcon을 끄고 children으로 메시지를 전달할 수 있습니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function SimpleExample() {
  return <Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>;
}\`
      }
    }
  },
  render: staticExample(<Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>)
}`,...(Le=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var Ie,Ne,Ae;Q.parameters={...Q.parameters,docs:{...(Ie=Q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: '형태',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '기본 radius-md 유형과 높이 비율에 맞춘 캡슐형 round 유형을 제공합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function ShapeExample() {
  return (
    <>
      <Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar
        round
        color="warning"
        message="액션과 닫기가 포함된 라운드"
        closable
        action={<Button variant="ghost" size="sm" label="확인" />}
      />
    </>
  );
}\`
      }
    }
  },
  render: staticExample(<>
      <Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar round color="warning" message="액션과 닫기가 포함된 라운드" closable action={<Button variant="ghost" size="sm" label="확인" />} />
    </>)
}`,...(Ae=(Ne=Q.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Te,$e,Oe;U.parameters={...U.parameters,docs:{...(Te=U.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: '호출 · 닫기 효과',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'fade, 배치 방향을 따르는 slide, 전환이 없는 none 모션을 제공합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function MotionExample() {
  return (
    <>
      <Snackbar motion="fade" message="Fade 효과" />
      <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
      <Snackbar motion="none" message="전환 효과 없음" />
    </>
  );
}\`
      }
    }
  },
  render: staticExample(<>
      <Snackbar motion="fade" message="Fade 효과" />
      <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
      <Snackbar motion="none" message="전환 효과 없음" />
    </>)
}`,...(Oe=($e=U.parameters)==null?void 0:$e.docs)==null?void 0:Oe.source}}};var Be,De,Me;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
        story: 'sm · md · lg 세 가지 크기를 제공합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function SizeExample() {
  return (
    <>
      <Snackbar size="sm" message="Small Snackbar" />
      <Snackbar message="Medium Snackbar" />
      <Snackbar size="lg" message="Large Snackbar" />
    </>
  );
}\`
      }
    }
  },
  render: staticExample(<>
      <Snackbar size="sm" message="Small Snackbar" />
      <Snackbar message="Medium Snackbar" />
      <Snackbar size="lg" message="Large Snackbar" />
    </>)
}`,...(Me=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var Ve,Fe,qe;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: '액션',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'action 영역에 하나의 명확한 후속 동작을 배치합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function ActionExample() {
  return (
    <Snackbar
      color="success"
      message="항목을 삭제했습니다."
      action={({ close }) => (
        <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />
      )}
    />
  );
}\`
      }
    }
  },
  render: staticExample(<Snackbar color="success" message="항목을 삭제했습니다." action={({
    close
  }) => <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />} />)
}`,...(qe=(Fe=Y.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Xe,Ze,Ge;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: '닫기 가능',
  args: {
    color: 'warning',
    message: '브라우저를 최신 버전으로 업데이트해 주세요.',
    closable: true,
    closeLabel: '알림 닫기',
    showIcon: true,
    size: 'md',
    duration: 0,
    motion: 'fade',
    placement: 'bottom-center',
    role: 'status'
  },
  parameters: {
    docs: {
      description: {
        story: '닫기 버튼은 onClose에 close 사유와 클릭 이벤트를 전달하며, 내부 포커스 상태에서는 Esc도 지원합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function CloseExample() {
  return (
    <Snackbar
      closable
      color="warning"
      message="브라우저를 최신 버전으로 업데이트해 주세요."
      onClose={(reason) => console.log(reason)}
    />
  );
}\`
      }
    }
  },
  render: withDocsCanvasRender(<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." />, args => <Snackbar key={\`\${args.color}-\${args.message}-\${args.closable}-\${args.motion}\`} {...args} />)
}`,...(Ge=(Ze=ee.parameters)==null?void 0:Ze.docs)==null?void 0:Ge.source}}};var He,Je,Ke;ae.parameters={...ae.parameters,docs:{...(He=ae.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: '자동 닫기',
  args: {
    color: 'success',
    message: '4초 후 자동으로 닫힙니다.',
    closable: false,
    closeLabel: '알림 닫기',
    showIcon: true,
    size: 'md',
    duration: 4000,
    motion: 'fade',
    placement: 'bottom-center',
    role: 'status'
  },
  parameters: {
    docs: {
      description: {
        story: 'duration 이후 timeout 사유로 닫히며, 호버하거나 내부 요소에 포커스하면 남은 시간이 일시정지됩니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function TimedExample() {
  return (
    <Snackbar
      duration={4000}
      color="success"
      message="4초 후 자동으로 닫힙니다."
      onClose={(reason) => console.log(reason)}
    />
  );
}\`
      }
    }
  },
  render: withDocsCanvasRender(<Snackbar color="success" message="실제 서비스에서는 duration={4000}처럼 자동 닫기를 설정할 수 있습니다." />, args => <Snackbar key={\`\${args.color}-\${args.message}-\${args.duration}-\${args.motion}\`} {...args} />)
}`,...(Ke=(Je=ae.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const Ja=["Playground","Basic","Placement","Simple","Shape","Motion","Size","Action","Closable","Duration"];export{Y as Action,H as Basic,ee as Closable,ae as Duration,U as Motion,J as Placement,G as Playground,Q as Shape,K as Simple,W as Size,Ja as __namedExportsOrder,Ha as default};

import{r as N,u as se,c as ie,n as re,j as e,a as O,b as oe,B as u}from"./iframe-ifEc15ad.js";import{w as ne}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";function D(a,o){const t=parseInt(a,10);return Number.isFinite(t)?t:o}function le(a){let o=a.parentElement;for(;o;){const t=getComputedStyle(o),p=t.transform,f=t.filter,m=t.backdropFilter||t.webkitBackdropFilter,s=t.perspective,r=t.contain,n=t.willChange,c=!!(p&&p!=="none"),h=!!(f&&f!=="none"||m&&m!=="none"),g=!!(s&&s!=="none"),y=!!(r&&/paint|layout|strict|content/.test(r)),k=!!(n&&/transform|filter|perspective/.test(n));if(c||h||g||y||k)return o.getBoundingClientRect();if(o===document.documentElement)break;o=o.parentElement}return{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function fe(a){if(a.dataset.affixInit)return()=>{};const o=a.getAttribute("data-target");let t=null;if(o)try{t=document.querySelector(o)}catch{t=null}const p=D(a.getAttribute("data-offset-top"),0),f=a.hasAttribute("data-offset-bottom"),m=f?D(a.getAttribute("data-offset-bottom"),0):0,s=a.querySelector(".affix_target");if(!s)return()=>{};a.dataset.affixInit="1";let r=a.querySelector(".affix_placeholder");r||(r=document.createElement("div"),r.className="affix_placeholder",r.setAttribute("aria-hidden","true"),a.insertBefore(r,s));let n=!1,c=!1;function h(){return t?t.getBoundingClientRect():{top:0,bottom:window.innerHeight,left:0,right:window.innerWidth}}function g(){s.style.position="",s.style.top="",s.style.bottom="",s.style.left="",s.style.width="",s.style.zIndex=""}function y(i,l,d){const _=le(s),E=f?i.bottom-s.offsetHeight-m:i.top+p;s.style.position="fixed",s.style.width=`${l}px`,s.style.left=`${d-_.left}px`,s.style.top=`${E-_.top}px`,s.style.bottom="",s.style.zIndex=getComputedStyle(a).getPropertyValue("--affix-z-index").trim()||"10"}function k(i,l){if(i===n){i&&l&&y(l.targetRect,l.width,l.left);return}if(n=i,a.classList.toggle("is-affixed",n),s.classList.toggle("is-fixed",n),n){const d=s.offsetHeight;r.style.height=`${d}px`,r.style.width=`${l.width}px`,r.hidden=!1,y(l.targetRect,l.width,l.left)}else r.hidden=!0,r.style.height="",r.style.width="",g()}function x(){c||(c=!0,requestAnimationFrame(()=>{c=!1;const i=h(),l=a.getBoundingClientRect(),d=n?r.getBoundingClientRect():l,_=d.width||l.width,E=d.left,ee={targetRect:i,width:_,left:E};let v=n;if(f){if(v=i.bottom-d.bottom<=m,v&&t){const R=s.offsetHeight;d.bottom-i.top<R+m&&(v=!1)}}else if(v=d.top-i.top<=p,v&&t){const R=s.offsetHeight;i.bottom-d.top<R+p&&(v=!1)}k(v,ee)}))}const w=t||window;return w.addEventListener("scroll",x,{passive:!0}),t&&window.addEventListener("scroll",x,{passive:!0,capture:!0}),window.addEventListener("resize",x,{passive:!0}),x(),()=>{w.removeEventListener("scroll",x),t&&window.removeEventListener("scroll",x,{capture:!0}),window.removeEventListener("resize",x),delete a.dataset.affixInit,a.classList.remove("is-affixed"),s.classList.remove("is-fixed"),r.hidden=!0,r.style.height="",r.style.width="",g()}}const ce=new Set(["","bar","anchor"]),de=oe("Affix",{defaults:{offsetTop:0,interactive:!0},booleanProps:new Set(["interactive"]),selfClosing:!1});function b({target:a,offsetTop:o=0,offsetBottom:t,skin:p="",interactive:f=!0,children:m,className:s,style:r,...n}){const c=N.useRef(null),h=ce.has(p)?p:"";se(de,{target:a,offsetTop:o,offsetBottom:t,skin:h||void 0,interactive:f},ie({default:m}),c,{className:s,style:r,...n});const g=N.useMemo(()=>{const i=["affix_target"];return h==="bar"&&i.push("affix_bar"),h==="anchor"&&i.push("affix_anchor"),i},[h]),y=N.useMemo(()=>{const i={};return f&&(i["data-affix"]=""),a&&(i["data-target"]=a),o!=null&&Number(o)!==0&&(i["data-offset-top"]=String(o)),t!=null&&t!==""&&(i["data-offset-bottom"]=String(t)),i},[f,a,o,t]);N.useEffect(()=>{if(!(!f||!c.current))return fe(c.current)},[f,a,o,t]);const{class:k,...x}=n,w=re(x);return e.jsxs("div",{ref:c,className:O("affix",s),style:r,...y,...w,children:[e.jsx("div",{className:"affix_placeholder","aria-hidden":"true",hidden:!0}),e.jsx("div",{className:O(g),children:m})]})}b.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{defaultValue:{value:"0",computed:!1},required:!1},skin:{defaultValue:{value:"''",computed:!1},required:!1},interactive:{defaultValue:{value:"true",computed:!1},required:!1}}};const pe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],me=[{name:"target",type:"string",default:"—",description:"스크롤 컨테이너 선택자 (data-target). 생략 시 window"},{name:"offset-top",type:"number | string",default:"0",description:"상단 고정 시 상단 여백(px, data-offset-top)"},{name:"offset-bottom",type:"number | string",default:"—",description:"하단 고정 시 하단 여백(px, data-offset-bottom). 지정 시 하단 고정 모드"},{name:"skin",type:"'' | 'bar' | 'anchor'",default:"—",description:"affix_bar · affix_anchor 스킨"},{name:"interactive",type:"boolean",default:"true",description:"false면 data-affix 미부여(초기화 비활성)"}],xe=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ue=[{name:"default",description:"고정 대상 콘텐츠 (라벨·버튼·앵커 링크 등)"}],he=[{key:"name",label:"속성"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],be=[{name:"data-affix",type:"boolean",default:"—",description:"Affix 활성화. 루트 .affix 요소에 지정"},{name:"data-target",type:"string",default:"window",description:"스크롤 컨테이너 CSS 선택자. 생략 시 window 스크롤 기준"},{name:"data-offset-top",type:"number",default:"0",description:"상단 고정 시 뷰포트·컨테이너 상단과의 간격(px)"},{name:"data-offset-bottom",type:"number",default:"0",description:"하단 고정 시 하단과의 간격(px). 속성을 지정하면 하단 고정 모드"}],ve=[{key:"name",label:"요소"},{key:"description",label:"설명"}],ge=[{name:".affix",description:"루트 래퍼. data-affix · data-target · data-offset-* 속성을 지정"},{name:".affix_placeholder",description:'고정 시 레이아웃 점프 방지용 플레이스홀더 (aria-hidden="true", hidden)'},{name:".affix_target",description:"실제 고정·해제되는 대상. affix_bar 또는 affix_anchor 스킨과 조합"}],ye=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],je=[{name:"affix_bar",description:"액션 바 스킨. 라벨 + 버튼 영역"},{name:"affix_bar-label",description:"바 좌측 라벨"},{name:"affix_bar-actions",description:"바 우측 버튼 그룹. Button 컴포넌트 조합"},{name:"affix_anchor",description:"섹션 앵커 링크 내비게이션 스킨"},{name:"is-affixed",description:"고정 상태 (루트 .affix에 JS가 자동 추가)"},{name:"is-fixed",description:"고정 상태 (.affix_target에 JS가 자동 추가)"}],ke=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],we=[{name:"--affix-z-index",default:"10",description:"고정 바 z-index"},{name:"--affix-bar-gap",default:"var(--space-sm)",description:"바 내부 간격"},{name:"--affix-bar-padding-y · --affix-bar-padding-x",default:"var(--space-sm) · var(--space-md)",description:"바 패딩"},{name:"--affix-bar-bg",default:"var(--color-surface)",description:"바 배경"},{name:"--affix-bar-border",default:"var(--color-border-subtle)",description:"바 테두리"},{name:"--affix-bar-shadow",default:"0 1px 4px rgb(0 0 0 / 0.08)",description:"바 그림자"}],_e=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],Ne=[{name:"children",description:"고정 대상 콘텐츠 (라벨·버튼·앵커 링크 등)"}],Ae=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 offset-top · offset-bottom은 offsetTop · offsetBottom입니다.",tables:[{columns:pe,rows:me,codeColumn:"name"}]},{title:"API · Children / Slots",description:"Vue default 슬롯은 React children으로 다룹니다.",tables:[{columns:xe,rows:ue,codeColumn:"name"},{columns:_e,rows:Ne,codeColumn:"name"}]},{title:"API · Data Attributes",tables:[{columns:he,rows:be,codeColumn:"name"}]},{title:"API · 마크업 구조",tables:[{columns:ve,rows:ge,codeColumn:"name"}]},{title:"클래스 · 스킨",description:"OOCSS 구조 클래스와 스킨 클래스입니다. affix_bar-actions 안의 버튼은 Button 컴포넌트로 조합합니다.",tables:[{columns:ye,rows:je,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ke,rows:we,codeColumn:"name"}]}];function j(a){return ne(a,a)}const Be={offsetTop:0,skin:"bar",interactive:!0},Pe={title:"Components/기타/Affix",id:"components-affix",component:b,tags:["autodocs"],parameters:{controls:{disable:!1},layout:"padded",docs:{description:{component:"스크롤 시 지정한 위치에 요소를 고정하는 컴포넌트입니다. 툴바·앵커 내비게이션·액션 버튼 등에 사용하며, target으로 스크롤 컨테이너를 지정할 수 있습니다."}},apiSections:Ae},argTypes:{target:{control:"text",description:"스크롤 컨테이너 선택자 (data-target). 생략 시 window",type:{name:"string",summary:"string"}},offsetTop:{control:"number",description:"상단 고정 시 상단 여백(px)",type:{name:"number",summary:"number | string"}},offsetBottom:{control:"number",description:"하단 고정 시 하단 여백(px). 지정 시 하단 고정 모드",type:{name:"number",summary:"number | string"}},skin:{control:"select",options:["bar","anchor"],description:"affix_bar · affix_anchor 스킨",type:{name:"enum",summary:"'bar' | 'anchor'"}},interactive:{control:"boolean",description:"false면 data-affix 미부여(초기화 비활성)",type:{name:"boolean",summary:"boolean"}}}},A={parameters:{controls:{disable:!1}},args:{...Be},render:a=>e.jsx("div",{className:"affix_demo-narrow",children:e.jsx("div",{id:"affix-scroll-playground",className:"affix_demo-scroll",children:e.jsxs("div",{className:"affix_demo-content",children:[e.jsx("p",{children:"스크롤하면 상단에 고정됩니다. Controls로 offsetTop · skin을 조절하세요."}),e.jsxs(b,{...a,target:"#affix-scroll-playground",children:[e.jsx("span",{className:"affix_bar-label",children:"주문 #ORD-2024"}),e.jsxs("div",{className:"affix_bar-actions",children:[e.jsx(u,{variant:"outline",size:"sm",label:"취소"}),e.jsx(u,{variant:"filled",color:"primary",size:"sm",label:"결제"})]})]}),e.jsx("p",{children:"추가 콘텐츠 — 스크롤해 보세요."}),e.jsx("p",{children:"배송지 · 결제 수단 · 상품 정보"}),e.jsx("p",{children:"교환·반품 안내"}),e.jsx("p",{children:"고객센터 · FAQ · 이용약관"})]})})})},B={name:"기본",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`data-affix`와 `data-target`으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 `.affix_target`이 상단에 고정됩니다."},source:{language:"tsx",code:`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function BasicExample() {
  return (
    <div className="affix_demo-narrow">
      <div id="affix-scroll-basic" className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <Affix target="#affix-scroll-basic" skin="bar">
            <span className="affix_bar-label">주문 #ORD-2024-0815</span>
            <div className="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>
          <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
        </div>
      </div>
    </div>
  );
}`}}},render:j(e.jsx("div",{className:"affix_demo-narrow",children:e.jsx("div",{id:"affix-scroll-basic",className:"affix_demo-scroll",children:e.jsxs("div",{className:"affix_demo-content",children:[e.jsx("p",{children:"주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다."}),e.jsx("p",{children:"배송지: 서울특별시 강남구 테헤란로 123, 4층"}),e.jsx("p",{children:"결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000"}),e.jsxs(b,{target:"#affix-scroll-basic",skin:"bar",children:[e.jsx("span",{className:"affix_bar-label",children:"주문 #ORD-2024-0815"}),e.jsxs("div",{className:"affix_bar-actions",children:[e.jsx(u,{variant:"outline",size:"sm",label:"취소"}),e.jsx(u,{variant:"filled",color:"primary",size:"sm",label:"결제"})]})]}),e.jsx("p",{children:"상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000"}),e.jsx("p",{children:"배송비: ₩3,000 · 예상 도착: 2~3 영업일"}),e.jsx("p",{children:"요청 사항: 부재 시 경비실에 맡겨 주세요."}),e.jsx("p",{children:"교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다."}),e.jsx("p",{children:"문의: 고객센터 1588-0000 (평일 09:00–18:00)"}),e.jsx("p",{children:"주문 메모 · 선물 포장 · 세금계산서 요청"}),e.jsx("p",{children:"관련 상품 · 최근 본 상품 · 위시리스트"})]})})}))},C={name:"상단 오프셋",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`offsetTop`으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다."},source:{language:"tsx",code:`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function OffsetExample() {
  return (
    <Affix target="#affix-scroll-offset" offsetTop={12} skin="bar">
      <Button variant="ghost" size="sm" iconOnly ariaLabel="굵게" iconBefore={/* ... */} />
    </Affix>
  );
}`}}},render:j(e.jsx("div",{className:"affix_demo-narrow",children:e.jsx("div",{id:"affix-scroll-offset",className:"affix_demo-scroll",children:e.jsxs("div",{className:"affix_demo-content",children:[e.jsx("p",{children:"문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다."}),e.jsx("p",{children:"제목: 2024년 3분기 실적 보고서"}),e.jsx("p",{children:"작성자: 기획팀 · 최종 수정: 2024-08-15"}),e.jsxs(b,{target:"#affix-scroll-offset",offsetTop:12,skin:"bar",children:[e.jsx(u,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"굵게",iconBefore:e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}),e.jsx("path",{d:"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"})]})}),e.jsx(u,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"기울임",iconBefore:e.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M19 4h-9M14 20H5M15 4 9 20"})})}),e.jsx(u,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"밑줄",iconBefore:e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M6 3v7a6 6 0 0 0 12 0V3"}),e.jsx("path",{d:"M4 21h16"})]})}),e.jsx("span",{className:"affix_bar-label",style:{fontWeight:400,color:"var(--color-text-muted)"},children:"서식"})]}),e.jsx("p",{children:"1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다."}),e.jsx("p",{children:"2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다."}),e.jsx("p",{children:"3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다."}),e.jsx("p",{children:"4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다."}),e.jsx("p",{children:"5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요."}),e.jsx("p",{children:"6. 참고 — 내부 지표 정의와 집계 기준은 별도 문서를 따릅니다."}),e.jsx("p",{children:"7. 문의 — 지표 해석은 기획팀으로 연락해 주세요."})]})})}))},z={name:"앵커 내비게이션",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`affix_anchor` 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다."},source:{language:"tsx",code:`import Affix from '@uxkm/ui-react/components/Affix.jsx';

export function AnchorExample() {
  return (
    <Affix target="#affix-scroll-anchor" skin="anchor">
      <nav aria-label="설정 섹션">
        <a href="#affix-sec-profile" className="link color_primary">프로필</a>
        <a href="#affix-sec-security" className="link">보안</a>
      </nav>
    </Affix>
  );
}`}}},render:j(e.jsx("div",{className:"affix_demo-narrow",children:e.jsx("div",{id:"affix-scroll-anchor",className:"affix_demo-scroll",children:e.jsxs("div",{className:"affix_demo-content",children:[e.jsx("p",{children:"설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다."}),e.jsx(b,{target:"#affix-scroll-anchor",skin:"anchor",children:e.jsxs("nav",{"aria-label":"설정 섹션",children:[e.jsx("a",{href:"#affix-sec-profile",className:"link color_primary",children:"프로필"}),e.jsx("a",{href:"#affix-sec-security",className:"link",children:"보안"}),e.jsx("a",{href:"#affix-sec-notify",className:"link",children:"알림"}),e.jsx("a",{href:"#affix-sec-billing",className:"link",children:"결제"})]})}),e.jsxs("p",{id:"affix-sec-profile",children:[e.jsx("strong",{children:"프로필"})," — 이름, 아바타, 소개 문구를 수정합니다."]}),e.jsxs("p",{id:"affix-sec-security",children:[e.jsx("strong",{children:"보안"})," — 비밀번호 변경과 2단계 인증을 설정합니다."]}),e.jsxs("p",{id:"affix-sec-notify",children:[e.jsx("strong",{children:"알림"})," — 이메일·푸시·SMS 수신 여부를 관리합니다."]}),e.jsxs("p",{id:"affix-sec-billing",children:[e.jsx("strong",{children:"결제"})," — 등록된 카드와 청구 내역을 확인합니다."]}),e.jsx("p",{children:"모든 변경 사항은 저장 버튼을 눌러야 반영됩니다."}),e.jsx("p",{children:"연동 계정 · 로그인 기록 · 세션 관리"}),e.jsx("p",{children:"데이터 내보내기 · 계정 삭제 요청"})]})})}))},S={name:"하단 고정",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`offsetBottom`을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다."},source:{language:"tsx",code:`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function BottomExample() {
  return (
    <Affix target="#affix-scroll-bottom" offsetBottom={0} skin="bar">
      <span className="affix_bar-label">합계 ₩78,000</span>
      <div className="affix_bar-actions">
        <Button variant="filled" color="primary" block label="결제하기" style={{ minWidth: '7rem' }} />
      </div>
    </Affix>
  );
}`}}},render:j(e.jsx("div",{className:"affix_demo-narrow",children:e.jsx("div",{id:"affix-scroll-bottom",className:"affix_demo-scroll",children:e.jsxs("div",{className:"affix_demo-content",children:[e.jsx("p",{children:"장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다."}),e.jsx("p",{children:"무선 이어폰 Pro × 1 — ₩39,000"}),e.jsx("p",{children:"USB-C 케이블 × 2 — ₩12,000"}),e.jsx("p",{children:"보조배터리 10,000mAh × 1 — ₩29,000"}),e.jsx("p",{children:"배송비 — ₩3,000"}),e.jsx("p",{children:"쿠폰 할인 — −₩5,000"}),e.jsx("p",{children:"결제 수단은 다음 단계에서 선택합니다."}),e.jsx("p",{children:"적립 예정 포인트: 780P"}),e.jsx("p",{children:"무료 배송 기준 · 오늘 도착 가능 여부"}),e.jsx("p",{children:"장바구니에 담은 상품은 30일간 보관됩니다."}),e.jsxs(b,{target:"#affix-scroll-bottom",offsetBottom:0,skin:"bar",children:[e.jsx("span",{className:"affix_bar-label",children:"합계 ₩78,000"}),e.jsx("div",{className:"affix_bar-actions",children:e.jsx(u,{variant:"filled",color:"primary",block:!0,label:"결제하기",style:{minWidth:"7rem"}})})]})]})})}))},P={name:"페이지 스크롤",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`target`을 생략하면 window 스크롤을 기준으로 동작합니다. Docs에서는 미리보기 안에서 확인할 수 있도록 페이지형 스크롤 영역으로 시연합니다."},source:{language:"tsx",code:`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function WindowExample() {
  return (
    <Affix
      offsetTop={64}
      skin="bar"
      style={{
        ['--affix-bar-bg']:
          'color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))',
      }}
    >
      <span className="affix_bar-label" style={{ color: 'var(--color-accent-text)' }}>
        신규 컴포넌트 가이드가 업데이트되었습니다
      </span>
      <div className="affix_bar-actions">
        <Button tag="a" href="/getting-started" variant="filled" color="primary" size="sm" label="시작하기" />
      </div>
    </Affix>
  );
}`}}},render:j(e.jsxs("div",{className:"affix_demo-narrow",children:[e.jsxs("p",{style:{margin:"0 0 var(--space-md)",fontSize:"var(--text-size-sm)",color:"var(--color-text-muted)"},children:["아래 영역을 스크롤하면 배너가 상단에 고정됩니다. 실서비스에서는"," ",e.jsx("code",{className:"typo_code",children:"target"}),"을 생략해 window 스크롤에 연결합니다."]}),e.jsx("div",{id:"affix-scroll-window",className:"affix_demo-page",children:e.jsxs("div",{className:"affix_demo-content",children:[e.jsx("p",{children:"공지 배너가 스크롤에 따라 상단에 붙는지 확인해 보세요."}),e.jsxs(b,{target:"#affix-scroll-window",offsetTop:0,skin:"bar",style:{"--affix-bar-bg":"color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))"},children:[e.jsx("span",{className:"affix_bar-label",style:{color:"var(--color-accent-text)"},children:"신규 컴포넌트 가이드가 업데이트되었습니다"}),e.jsx("div",{className:"affix_bar-actions",children:e.jsx(u,{tag:"a",href:"/getting-started",variant:"filled",color:"primary",size:"sm",label:"시작하기"})})]}),e.jsx("p",{children:"섹션 1 — 설치 가이드와 디자인 토큰 문서를 먼저 확인하세요."}),e.jsx("p",{children:"섹션 2 — 컴포넌트 API · 슬롯 · 클래스를 함께 살펴봅니다."}),e.jsx("p",{children:"섹션 3 — 접근성: 키보드 포커스와 충분한 터치 영역을 유지합니다."}),e.jsx("p",{children:"섹션 4 — 반응형: 좁은 화면에서는 액션을 아이콘 버튼으로 줄일 수 있습니다."}),e.jsx("p",{children:"섹션 5 — 테마: accent 색이 바뀌어도 배너 대비를 확인하세요."}),e.jsx("p",{children:"섹션 6 — 스크롤을 계속하면 배너가 영역 상단에 고정된 상태를 유지합니다."}),e.jsx("p",{children:"섹션 7 — 영역 끝으로 가면 고정이 해제되거나 콘텐츠와 함께 이동합니다."}),e.jsx("p",{children:"섹션 8 — 실서비스 페이지에서는 window 스크롤에 동일하게 동작합니다."})]})})]}))};var T,M,W;A.parameters={...A.parameters,docs:{...(T=A.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <div className="affix_demo-narrow">
      <div id="affix-scroll-playground" className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>스크롤하면 상단에 고정됩니다. Controls로 offsetTop · skin을 조절하세요.</p>
          <Affix {...args} target="#affix-scroll-playground">
            <span className="affix_bar-label">주문 #ORD-2024</span>
            <div className="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>
          <p>추가 콘텐츠 — 스크롤해 보세요.</p>
          <p>배송지 · 결제 수단 · 상품 정보</p>
          <p>교환·반품 안내</p>
          <p>고객센터 · FAQ · 이용약관</p>
        </div>
      </div>
    </div>
}`,...(W=(M=A.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var L,H,I;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        story: '\`data-affix\`와 \`data-target\`으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 \`.affix_target\`이 상단에 고정됩니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function BasicExample() {
  return (
    <div className="affix_demo-narrow">
      <div id="affix-scroll-basic" className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <Affix target="#affix-scroll-basic" skin="bar">
            <span className="affix_bar-label">주문 #ORD-2024-0815</span>
            <div className="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>
          <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
        </div>
      </div>
    </div>
  );
}\`
      }
    }
  },
  render: affixDemo(<div className="affix_demo-narrow">
      <div id="affix-scroll-basic" className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
          <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>
          <Affix target="#affix-scroll-basic" skin="bar">
            <span className="affix_bar-label">주문 #ORD-2024-0815</span>
            <div className="affix_bar-actions">
              <Button variant="outline" size="sm" label="취소" />
              <Button variant="filled" color="primary" size="sm" label="결제" />
            </div>
          </Affix>
          <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
          <p>배송비: ₩3,000 · 예상 도착: 2~3 영업일</p>
          <p>요청 사항: 부재 시 경비실에 맡겨 주세요.</p>
          <p>교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>
          <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
          <p>주문 메모 · 선물 포장 · 세금계산서 요청</p>
          <p>관련 상품 · 최근 본 상품 · 위시리스트</p>
        </div>
      </div>
    </div>)
}`,...(I=(H=B.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var F,V,G;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '상단 오프셋',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`offsetTop\`으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function OffsetExample() {
  return (
    <Affix target="#affix-scroll-offset" offsetTop={12} skin="bar">
      <Button variant="ghost" size="sm" iconOnly ariaLabel="굵게" iconBefore={/* ... */} />
    </Affix>
  );
}\`
      }
    }
  },
  render: affixDemo(<div className="affix_demo-narrow">
      <div id="affix-scroll-offset" className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
          <p>제목: 2024년 3분기 실적 보고서</p>
          <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>
          <Affix target="#affix-scroll-offset" offsetTop={12} skin="bar">
            <Button variant="ghost" size="sm" iconOnly ariaLabel="굵게" iconBefore={<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                  <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                </svg>} />
            <Button variant="ghost" size="sm" iconOnly ariaLabel="기울임" iconBefore={<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M19 4h-9M14 20H5M15 4 9 20" />
                </svg>} />
            <Button variant="ghost" size="sm" iconOnly ariaLabel="밑줄" iconBefore={<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                  <path d="M4 21h16" />
                </svg>} />
            <span className="affix_bar-label" style={{
            fontWeight: 400,
            color: 'var(--color-text-muted)'
          }}>
              서식
            </span>
          </Affix>
          <p>1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.</p>
          <p>2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.</p>
          <p>3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.</p>
          <p>4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.</p>
          <p>5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.</p>
          <p>6. 참고 — 내부 지표 정의와 집계 기준은 별도 문서를 따릅니다.</p>
          <p>7. 문의 — 지표 해석은 기획팀으로 연락해 주세요.</p>
        </div>
      </div>
    </div>)
}`,...(G=(V=C.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var q,$,J;z.parameters={...z.parameters,docs:{...(q=z.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '앵커 내비게이션',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`affix_anchor\` 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Affix from '@uxkm/ui-react/components/Affix.jsx';

export function AnchorExample() {
  return (
    <Affix target="#affix-scroll-anchor" skin="anchor">
      <nav aria-label="설정 섹션">
        <a href="#affix-sec-profile" className="link color_primary">프로필</a>
        <a href="#affix-sec-security" className="link">보안</a>
      </nav>
    </Affix>
  );
}\`
      }
    }
  },
  render: affixDemo(<div className="affix_demo-narrow">
      <div id="affix-scroll-anchor" className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>
          <Affix target="#affix-scroll-anchor" skin="anchor">
            <nav aria-label="설정 섹션">
              <a href="#affix-sec-profile" className="link color_primary">
                프로필
              </a>
              <a href="#affix-sec-security" className="link">
                보안
              </a>
              <a href="#affix-sec-notify" className="link">
                알림
              </a>
              <a href="#affix-sec-billing" className="link">
                결제
              </a>
            </nav>
          </Affix>
          <p id="affix-sec-profile">
            <strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.
          </p>
          <p id="affix-sec-security">
            <strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.
          </p>
          <p id="affix-sec-notify">
            <strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.
          </p>
          <p id="affix-sec-billing">
            <strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.
          </p>
          <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
          <p>연동 계정 · 로그인 기록 · 세션 관리</p>
          <p>데이터 내보내기 · 계정 삭제 요청</p>
        </div>
      </div>
    </div>)
}`,...(J=($=z.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,U,K;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '하단 고정',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`offsetBottom\`을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function BottomExample() {
  return (
    <Affix target="#affix-scroll-bottom" offsetBottom={0} skin="bar">
      <span className="affix_bar-label">합계 ₩78,000</span>
      <div className="affix_bar-actions">
        <Button variant="filled" color="primary" block label="결제하기" style={{ minWidth: '7rem' }} />
      </div>
    </Affix>
  );
}\`
      }
    }
  },
  render: affixDemo(<div className="affix_demo-narrow">
      <div id="affix-scroll-bottom" className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.</p>
          <p>무선 이어폰 Pro × 1 — ₩39,000</p>
          <p>USB-C 케이블 × 2 — ₩12,000</p>
          <p>보조배터리 10,000mAh × 1 — ₩29,000</p>
          <p>배송비 — ₩3,000</p>
          <p>쿠폰 할인 — −₩5,000</p>
          <p>결제 수단은 다음 단계에서 선택합니다.</p>
          <p>적립 예정 포인트: 780P</p>
          <p>무료 배송 기준 · 오늘 도착 가능 여부</p>
          <p>장바구니에 담은 상품은 30일간 보관됩니다.</p>
          <Affix target="#affix-scroll-bottom" offsetBottom={0} skin="bar">
            <span className="affix_bar-label">합계 ₩78,000</span>
            <div className="affix_bar-actions">
              <Button variant="filled" color="primary" block label="결제하기" style={{
              minWidth: '7rem'
            }} />
            </div>
          </Affix>
        </div>
      </div>
    </div>)
}`,...(K=(U=S.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var X,Y,Z;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '페이지 스크롤',
  parameters: {
    controls: {
      disable: true
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '\`target\`을 생략하면 window 스크롤을 기준으로 동작합니다. Docs에서는 미리보기 안에서 확인할 수 있도록 페이지형 스크롤 영역으로 시연합니다.'
      },
      source: {
        language: 'tsx',
        code: \`import Affix from '@uxkm/ui-react/components/Affix.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';

export function WindowExample() {
  return (
    <Affix
      offsetTop={64}
      skin="bar"
      style={{
        ['--affix-bar-bg']:
          'color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))',
      }}
    >
      <span className="affix_bar-label" style={{ color: 'var(--color-accent-text)' }}>
        신규 컴포넌트 가이드가 업데이트되었습니다
      </span>
      <div className="affix_bar-actions">
        <Button tag="a" href="/getting-started" variant="filled" color="primary" size="sm" label="시작하기" />
      </div>
    </Affix>
  );
}\`
      }
    }
  },
  render: affixDemo(<div className="affix_demo-narrow">
      <p style={{
      margin: '0 0 var(--space-md)',
      fontSize: 'var(--text-size-sm)',
      color: 'var(--color-text-muted)'
    }}>
        아래 영역을 스크롤하면 배너가 상단에 고정됩니다. 실서비스에서는{' '}
        <code className="typo_code">target</code>을 생략해 window 스크롤에 연결합니다.
      </p>
      <div id="affix-scroll-window" className="affix_demo-page">
        <div className="affix_demo-content">
          <p>공지 배너가 스크롤에 따라 상단에 붙는지 확인해 보세요.</p>
          <Affix target="#affix-scroll-window" offsetTop={0} skin="bar" style={{
          ['--affix-bar-bg']: 'color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))'
        }}>
            <span className="affix_bar-label" style={{
            color: 'var(--color-accent-text)'
          }}>
              신규 컴포넌트 가이드가 업데이트되었습니다
            </span>
            <div className="affix_bar-actions">
              <Button tag="a" href="/getting-started" variant="filled" color="primary" size="sm" label="시작하기" />
            </div>
          </Affix>
          <p>섹션 1 — 설치 가이드와 디자인 토큰 문서를 먼저 확인하세요.</p>
          <p>섹션 2 — 컴포넌트 API · 슬롯 · 클래스를 함께 살펴봅니다.</p>
          <p>섹션 3 — 접근성: 키보드 포커스와 충분한 터치 영역을 유지합니다.</p>
          <p>섹션 4 — 반응형: 좁은 화면에서는 액션을 아이콘 버튼으로 줄일 수 있습니다.</p>
          <p>섹션 5 — 테마: accent 색이 바뀌어도 배너 대비를 확인하세요.</p>
          <p>섹션 6 — 스크롤을 계속하면 배너가 영역 상단에 고정된 상태를 유지합니다.</p>
          <p>섹션 7 — 영역 끝으로 가면 고정이 해제되거나 콘텐츠와 함께 이동합니다.</p>
          <p>섹션 8 — 실서비스 페이지에서는 window 스크롤에 동일하게 동작합니다.</p>
        </div>
      </div>
    </div>)
}`,...(Z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ee=["Playground","Basic","Offset","Anchor","Bottom","Window"];export{z as Anchor,B as Basic,S as Bottom,C as Offset,A as Playground,P as Window,Ee as __namedExportsOrder,Pe as default};

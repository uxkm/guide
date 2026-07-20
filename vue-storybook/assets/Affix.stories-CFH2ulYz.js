import{u as tu,a as eu,b as nu,a4 as au,af as ou,c as iu,d as M,r as su,n as ru,p as fu,i as lu,g as b,o as Bu,j as pu,q as x}from"./iframe-CAswI7Qe.js";import{s as cu,w as du}from"./story-renders-DjeoaiCa.js";import"./preload-helper-PMqzWbAN.js";function H(C,u){const e=parseInt(C,10);return Number.isFinite(e)?e:u}function mu(C){let u=C.parentElement;for(;u;){const e=getComputedStyle(u),r=e.transform,f=e.filter,c=e.backdropFilter||e.webkitBackdropFilter,t=e.perspective,n=e.contain,i=e.willChange,d=!!(r&&r!=="none"),B=!!(f&&f!=="none"||c&&c!=="none"),a=!!(t&&t!=="none"),p=!!(n&&/paint|layout|strict|content/.test(n)),F=!!(i&&/transform|filter|perspective/.test(i));if(d||B||a||p||F)return u.getBoundingClientRect();if(u===document.documentElement)break;u=u.parentElement}return{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function Du(C){if(C.dataset.affixInit)return()=>{};const u=C.getAttribute("data-target");let e=null;if(u)try{e=document.querySelector(u)}catch{e=null}const r=H(C.getAttribute("data-offset-top"),0),f=C.hasAttribute("data-offset-bottom"),c=f?H(C.getAttribute("data-offset-bottom"),0):0,t=C.querySelector(".affix_target");if(!t)return()=>{};C.dataset.affixInit="1";let n=C.querySelector(".affix_placeholder");n||(n=document.createElement("div"),n.className="affix_placeholder",n.setAttribute("aria-hidden","true"),C.insertBefore(n,t));let i=!1,d=!1;function B(){return e?e.getBoundingClientRect():{top:0,bottom:window.innerHeight,left:0,right:window.innerWidth}}function a(){t.style.position="",t.style.top="",t.style.bottom="",t.style.left="",t.style.width="",t.style.zIndex=""}function p(s,o,l){const E=mu(t),z=f?s.bottom-t.offsetHeight-c:s.top+r;t.style.position="fixed",t.style.width=`${o}px`,t.style.left=`${l-E.left}px`,t.style.top=`${z-E.top}px`,t.style.bottom="",t.style.zIndex=getComputedStyle(C).getPropertyValue("--affix-z-index").trim()||"10"}function F(s,o){if(s===i){s&&o&&p(o.targetRect,o.width,o.left);return}if(i=s,C.classList.toggle("is-affixed",i),t.classList.toggle("is-fixed",i),i){const l=t.offsetHeight;n.style.height=`${l}px`,n.style.width=`${o.width}px`,n.hidden=!1,p(o.targetRect,o.width,o.left)}else n.hidden=!0,n.style.height="",n.style.width="",a()}function m(){d||(d=!0,requestAnimationFrame(()=>{d=!1;const s=B(),o=C.getBoundingClientRect(),l=i?n.getBoundingClientRect():o,E=l.width||o.width,z=l.left,Z={targetRect:s,width:E,left:z};let D=i;if(f){if(D=s.bottom-l.bottom<=c,D&&e){const S=t.offsetHeight;l.bottom-s.top<S+c&&(D=!1)}}else if(D=l.top-s.top<=r,D&&e){const S=t.offsetHeight;s.bottom-l.top<S+r&&(D=!1)}F(D,Z)}))}const P=e||window;return P.addEventListener("scroll",m,{passive:!0}),e&&window.addEventListener("scroll",m,{passive:!0,capture:!0}),window.addEventListener("resize",m,{passive:!0}),m(),()=>{P.removeEventListener("scroll",m),e&&window.removeEventListener("scroll",m,{capture:!0}),window.removeEventListener("resize",m),delete C.dataset.affixInit,C.classList.remove("is-affixed"),t.classList.remove("is-fixed"),n.hidden=!0,n.style.height="",n.style.width="",a()}}const A=Object.assign({inheritAttrs:!1},{__name:"Affix",props:{target:String,offsetTop:{type:[Number,String],default:0},offsetBottom:[Number,String],skin:{type:String,default:"",validator:C=>["","bar","anchor"].includes(C)},interactive:{type:Boolean,default:!0}},setup(C){const u=C,e=tu(),r=eu(),f=lu(null),c=pu("Affix",{defaults:{offsetTop:0,interactive:!0},booleanProps:new Set(["interactive"]),selfClosing:!1});nu(c,u,e,f,r);const t=b(()=>{const a=["affix"];return r.class&&a.push(r.class),a}),n=b(()=>{const a=["affix_target"];return u.skin==="bar"&&a.push("affix_bar"),u.skin==="anchor"&&a.push("affix_anchor"),a}),i=b(()=>{const a={};return u.interactive&&(a["data-affix"]=""),u.target&&(a["data-target"]=u.target),u.offsetTop&&Number(u.offsetTop)!==0&&(a["data-offset-top"]=String(u.offsetTop)),u.offsetBottom!==void 0&&u.offsetBottom!==null&&u.offsetBottom!==""&&(a["data-offset-bottom"]=String(u.offsetBottom)),a}),d=b(()=>{const{class:a,...p}=r;return p});let B=null;return au(()=>{!u.interactive||!f.value||(B=Du(f.value))}),ou(()=>{B==null||B(),B=null}),(a,p)=>(Bu(),iu("div",fu({ref_key:"rootRef",ref:f,class:t.value},{...d.value,...i.value}),[p[0]||(p[0]=M("div",{class:"affix_placeholder","aria-hidden":"true",hidden:""},null,-1)),M("div",{class:ru(n.value)},[su(a.$slots,"default")],2)],16))}}),Au=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xu=[{name:"target",type:"string",default:"—",description:"스크롤 컨테이너 선택자 (data-target). 생략 시 window"},{name:"offset-top",type:"number | string",default:"0",description:"상단 고정 시 상단 여백(px, data-offset-top)"},{name:"offset-bottom",type:"number | string",default:"—",description:"하단 고정 시 하단 여백(px, data-offset-bottom). 지정 시 하단 고정 모드"},{name:"skin",type:"'' | 'bar' | 'anchor'",default:"—",description:"affix_bar · affix_anchor 스킨"},{name:"interactive",type:"boolean",default:"true",description:"false면 data-affix 미부여(초기화 비활성)"}],vu=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Eu=[{name:"default",description:"고정 대상 콘텐츠 (라벨·버튼·앵커 링크 등)"}],bu=[{key:"name",label:"속성"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],gu=[{name:"data-affix",type:"boolean",default:"—",description:"Affix 활성화. 루트 .affix 요소에 지정"},{name:"data-target",type:"string",default:"window",description:"스크롤 컨테이너 CSS 선택자. 생략 시 window 스크롤 기준"},{name:"data-offset-top",type:"number",default:"0",description:"상단 고정 시 뷰포트·컨테이너 상단과의 간격(px)"},{name:"data-offset-bottom",type:"number",default:"0",description:"하단 고정 시 하단과의 간격(px). 속성을 지정하면 하단 고정 모드"}],hu=[{key:"name",label:"요소"},{key:"description",label:"설명"}],yu=[{name:".affix",description:"루트 래퍼. data-affix · data-target · data-offset-* 속성을 지정"},{name:".affix_placeholder",description:'고정 시 레이아웃 점프 방지용 플레이스홀더 (aria-hidden="true", hidden)'},{name:".affix_target",description:"실제 고정·해제되는 대상. affix_bar 또는 affix_anchor 스킨과 조합"}],wu=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],_u=[{name:"affix_bar",description:"액션 바 스킨. 라벨 + 버튼 영역"},{name:"affix_bar-label",description:"바 좌측 라벨"},{name:"affix_bar-actions",description:"바 우측 버튼 그룹. Button 컴포넌트 조합"},{name:"affix_anchor",description:"섹션 앵커 링크 내비게이션 스킨"},{name:"is-affixed",description:"고정 상태 (루트 .affix에 JS가 자동 추가)"},{name:"is-fixed",description:"고정 상태 (.affix_target에 JS가 자동 추가)"}],ku=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Fu=[{name:"--affix-z-index",default:"10",description:"고정 바 z-index"},{name:"--affix-bar-gap",default:"var(--space-sm)",description:"바 내부 간격"},{name:"--affix-bar-padding-y · --affix-bar-padding-x",default:"var(--space-sm) · var(--space-md)",description:"바 패딩"},{name:"--affix-bar-bg",default:"var(--color-surface)",description:"바 배경"},{name:"--affix-bar-border",default:"var(--color-border-subtle)",description:"바 테두리"},{name:"--affix-bar-shadow",default:"0 1px 4px rgb(0 0 0 / 0.08)",description:"바 그림자"}],zu=[{title:"API · Props",tables:[{columns:Au,rows:xu,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:vu,rows:Eu,codeColumn:"name"}]},{title:"API · Data Attributes",tables:[{columns:bu,rows:gu,codeColumn:"name"}]},{title:"API · 마크업 구조",tables:[{columns:hu,rows:yu,codeColumn:"name"}]},{title:"클래스 · 스킨",description:"OOCSS 구조 클래스와 스킨 클래스입니다. affix_bar-actions 안의 버튼은 Button 컴포넌트로 조합합니다.",tables:[{columns:wu,rows:_u,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ku,rows:Fu,codeColumn:"name"}]}];function v(C){return du(C,C)}const Hu={title:"Components/기타/Affix",id:"components-affix",component:A,tags:["autodocs"],parameters:{controls:{disable:!1},layout:"padded",docs:{description:{component:"스크롤 시 지정한 위치에 요소를 고정하는 컴포넌트입니다. 툴바·앵커 내비게이션·액션 버튼 등에 사용하며, `data-target`으로 스크롤 컨테이너를 지정할 수 있습니다."}},apiSections:zu},argTypes:{target:{control:"text",description:"스크롤 컨테이너 선택자 (data-target). 생략 시 window",type:{name:"string",summary:"string"}},offsetTop:{control:"number",description:"상단 고정 시 상단 여백(px)",type:{name:"number",summary:"number | string"}},offsetBottom:{control:"number",description:"하단 고정 시 하단 여백(px). 지정 시 하단 고정 모드",type:{name:"number",summary:"number | string"}},skin:{control:"select",options:["bar","anchor"],description:"affix_bar · affix_anchor 스킨",type:{name:"enum",summary:"'bar' | 'anchor'"}},interactive:{control:"boolean",description:"false면 data-affix 미부여(초기화 비활성)",type:{name:"boolean",summary:"boolean"}}}},g={parameters:{controls:{disable:!1}},args:{offsetTop:0,skin:"bar",interactive:!0},render:(C,u)=>({components:{Affix:A,Button:x},setup(){return{args:cu(u)}},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-playground" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>스크롤하면 상단에 고정됩니다. Controls로 offsetTop · skin을 조절하세요.</p>
          <Affix v-bind="args" target="#affix-scroll-playground">
            <span class="affix_bar-label">주문 #ORD-2024</span>
            <div class="affix_bar-actions">
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
    </div>`})},h={name:"기본",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`data-affix`와 `data-target`으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 `.affix_target`이 상단에 고정됩니다."},source:{language:"vue",code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-basic" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
        <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
        <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>
        <Affix target="#affix-scroll-basic" skin="bar">
          <span class="affix_bar-label">주문 #ORD-2024-0815</span>
          <div class="affix_bar-actions">
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
  </div>
</template>`}}},render:v(()=>({components:{Affix:A,Button:x},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-basic" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
          <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>
          <Affix target="#affix-scroll-basic" skin="bar">
            <span class="affix_bar-label">주문 #ORD-2024-0815</span>
            <div class="affix_bar-actions">
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
    </div>`}))},y={name:"상단 오프셋",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`data-offset-top`으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다."},source:{language:"vue",code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-offset" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
        <p>제목: 2024년 3분기 실적 보고서</p>
        <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>
        <Affix target="#affix-scroll-offset" :offset-top="12" skin="bar">
          <Button variant="ghost" size="sm" icon-only aria-label="굵게">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
              </svg>
            </template>
          </Button>
          <Button variant="ghost" size="sm" icon-only aria-label="기울임">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M19 4h-9M14 20H5M15 4 9 20" />
              </svg>
            </template>
          </Button>
          <Button variant="ghost" size="sm" icon-only aria-label="밑줄">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                <path d="M4 21h16" />
              </svg>
            </template>
          </Button>
          <span class="affix_bar-label" style="font-weight: 400; color: var(--color-text-muted)">서식</span>
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
  </div>
</template>`}}},render:v(()=>({components:{Affix:A,Button:x},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-offset" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
          <p>제목: 2024년 3분기 실적 보고서</p>
          <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>
          <Affix target="#affix-scroll-offset" :offset-top="12" skin="bar">
            <Button variant="ghost" size="sm" icon-only aria-label="굵게">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                  <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                </svg>
              </template>
            </Button>
            <Button variant="ghost" size="sm" icon-only aria-label="기울임">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M19 4h-9M14 20H5M15 4 9 20" />
                </svg>
              </template>
            </Button>
            <Button variant="ghost" size="sm" icon-only aria-label="밑줄">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                  <path d="M4 21h16" />
                </svg>
              </template>
            </Button>
            <span class="affix_bar-label" style="font-weight: 400; color: var(--color-text-muted)">서식</span>
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
    </div>`}))},w={name:"앵커 내비게이션",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`affix_anchor` 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다."},source:{language:"vue",code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-anchor" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>
        <Affix target="#affix-scroll-anchor" skin="anchor">
          <nav aria-label="설정 섹션">
            <a href="#affix-sec-profile" class="link color_primary">프로필</a>
            <a href="#affix-sec-security" class="link">보안</a>
            <a href="#affix-sec-notify" class="link">알림</a>
            <a href="#affix-sec-billing" class="link">결제</a>
          </nav>
        </Affix>
        <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
        <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
        <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
        <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
        <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
        <p>연동 계정 · 로그인 기록 · 세션 관리</p>
        <p>데이터 내보내기 · 계정 삭제 요청</p>
      </div>
    </div>
  </div>
</template>`}}},render:v(()=>({components:{Affix:A},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-anchor" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>
          <Affix target="#affix-scroll-anchor" skin="anchor">
            <nav aria-label="설정 섹션">
              <a href="#affix-sec-profile" class="link color_primary">프로필</a>
              <a href="#affix-sec-security" class="link">보안</a>
              <a href="#affix-sec-notify" class="link">알림</a>
              <a href="#affix-sec-billing" class="link">결제</a>
            </nav>
          </Affix>
          <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
          <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
          <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
          <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
          <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
          <p>연동 계정 · 로그인 기록 · 세션 관리</p>
          <p>데이터 내보내기 · 계정 삭제 요청</p>
        </div>
      </div>
    </div>`}))},_={name:"하단 고정",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`data-offset-bottom`을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다."},source:{language:"vue",code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-bottom" class="affix_demo-scroll">
      <div class="affix_demo-content">
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
        <Affix target="#affix-scroll-bottom" :offset-bottom="0" skin="bar">
          <span class="affix_bar-label">합계 ₩78,000</span>
          <div class="affix_bar-actions">
            <Button variant="filled" color="primary" block label="결제하기" style="min-width: 7rem" />
          </div>
        </Affix>
      </div>
    </div>
  </div>
</template>`}}},render:v(()=>({components:{Affix:A,Button:x},template:`<div class="affix_demo-narrow">
      <div id="affix-scroll-bottom" class="affix_demo-scroll">
        <div class="affix_demo-content">
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
          <Affix target="#affix-scroll-bottom" :offset-bottom="0" skin="bar">
            <span class="affix_bar-label">합계 ₩78,000</span>
            <div class="affix_bar-actions">
              <Button variant="filled" color="primary" block label="결제하기" style="min-width: 7rem" />
            </div>
          </Affix>
        </div>
      </div>
    </div>`}))},k={name:"페이지 스크롤",parameters:{controls:{disable:!0},demoPreview:{stack:!1},docs:{description:{story:"`data-target`을 생략하면 window 스크롤을 기준으로 동작합니다. Docs에서는 미리보기 안에서 확인할 수 있도록 페이지형 스크롤 영역으로 시연합니다."},source:{language:"vue",code:`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <!-- 실서비스: target 생략 시 window 스크롤 기준 -->
  <Affix
    :offset-top="64"
    skin="bar"
    style="--affix-bar-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))"
  >
    <span class="affix_bar-label" style="color: var(--color-accent-text)">
      신규 컴포넌트 가이드가 업데이트되었습니다
    </span>
    <div class="affix_bar-actions">
      <Button tag="a" href="/getting-started" variant="filled" color="primary" size="sm" label="시작하기" />
    </div>
  </Affix>
</template>`}}},render:v(()=>({components:{Affix:A,Button:x},template:`<div class="affix_demo-narrow">
      <p style="margin: 0 0 var(--space-md); font-size: var(--text-size-sm); color: var(--color-text-muted)">
        아래 영역을 스크롤하면 배너가 상단에 고정됩니다. 실서비스에서는 <code class="typo_code">target</code>을 생략해 window 스크롤에 연결합니다.
      </p>
      <div id="affix-scroll-window" class="affix_demo-page">
        <div class="affix_demo-content">
          <p>공지 배너가 스크롤에 따라 상단에 붙는지 확인해 보세요.</p>
          <Affix
            target="#affix-scroll-window"
            :offset-top="0"
            skin="bar"
            style="--affix-bar-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))"
          >
            <span class="affix_bar-label" style="color: var(--color-accent-text)">
              신규 컴포넌트 가이드가 업데이트되었습니다
            </span>
            <div class="affix_bar-actions">
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
    </div>`}))};var R,T,O;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    offsetTop: 0,
    skin: 'bar',
    interactive: true
  },
  render: (_args, context) => ({
    components: {
      Affix,
      Button
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-playground" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>스크롤하면 상단에 고정됩니다. Controls로 offsetTop · skin을 조절하세요.</p>
          <Affix v-bind="args" target="#affix-scroll-playground">
            <span class="affix_bar-label">주문 #ORD-2024</span>
            <div class="affix_bar-actions">
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
    </div>\`
  })
}`,...(O=(T=g.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var I,L,G;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        language: 'vue',
        code: \`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-basic" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
        <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
        <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>
        <Affix target="#affix-scroll-basic" skin="bar">
          <span class="affix_bar-label">주문 #ORD-2024-0815</span>
          <div class="affix_bar-actions">
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
  </div>
</template>\`
      }
    }
  },
  render: affixDemo(() => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-basic" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
          <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
          <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>
          <Affix target="#affix-scroll-basic" skin="bar">
            <span class="affix_bar-label">주문 #ORD-2024-0815</span>
            <div class="affix_bar-actions">
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
    </div>\`
  }))
}`,...(G=(L=h.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var $,N,V;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        story: '\`data-offset-top\`으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다.'
      },
      source: {
        language: 'vue',
        code: \`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-offset" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
        <p>제목: 2024년 3분기 실적 보고서</p>
        <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>
        <Affix target="#affix-scroll-offset" :offset-top="12" skin="bar">
          <Button variant="ghost" size="sm" icon-only aria-label="굵게">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
              </svg>
            </template>
          </Button>
          <Button variant="ghost" size="sm" icon-only aria-label="기울임">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M19 4h-9M14 20H5M15 4 9 20" />
              </svg>
            </template>
          </Button>
          <Button variant="ghost" size="sm" icon-only aria-label="밑줄">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                <path d="M4 21h16" />
              </svg>
            </template>
          </Button>
          <span class="affix_bar-label" style="font-weight: 400; color: var(--color-text-muted)">서식</span>
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
  </div>
</template>\`
      }
    }
  },
  render: affixDemo(() => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-offset" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
          <p>제목: 2024년 3분기 실적 보고서</p>
          <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>
          <Affix target="#affix-scroll-offset" :offset-top="12" skin="bar">
            <Button variant="ghost" size="sm" icon-only aria-label="굵게">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                  <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                </svg>
              </template>
            </Button>
            <Button variant="ghost" size="sm" icon-only aria-label="기울임">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M19 4h-9M14 20H5M15 4 9 20" />
                </svg>
              </template>
            </Button>
            <Button variant="ghost" size="sm" icon-only aria-label="밑줄">
              <template #icon-before>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                  <path d="M4 21h16" />
                </svg>
              </template>
            </Button>
            <span class="affix_bar-label" style="font-weight: 400; color: var(--color-text-muted)">서식</span>
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
    </div>\`
  }))
}`,...(V=(N=y.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var W,q,U;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        language: 'vue',
        code: \`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-anchor" class="affix_demo-scroll">
      <div class="affix_demo-content">
        <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>
        <Affix target="#affix-scroll-anchor" skin="anchor">
          <nav aria-label="설정 섹션">
            <a href="#affix-sec-profile" class="link color_primary">프로필</a>
            <a href="#affix-sec-security" class="link">보안</a>
            <a href="#affix-sec-notify" class="link">알림</a>
            <a href="#affix-sec-billing" class="link">결제</a>
          </nav>
        </Affix>
        <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
        <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
        <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
        <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
        <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
        <p>연동 계정 · 로그인 기록 · 세션 관리</p>
        <p>데이터 내보내기 · 계정 삭제 요청</p>
      </div>
    </div>
  </div>
</template>\`
      }
    }
  },
  render: affixDemo(() => ({
    components: {
      Affix
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-anchor" class="affix_demo-scroll">
        <div class="affix_demo-content">
          <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>
          <Affix target="#affix-scroll-anchor" skin="anchor">
            <nav aria-label="설정 섹션">
              <a href="#affix-sec-profile" class="link color_primary">프로필</a>
              <a href="#affix-sec-security" class="link">보안</a>
              <a href="#affix-sec-notify" class="link">알림</a>
              <a href="#affix-sec-billing" class="link">결제</a>
            </nav>
          </Affix>
          <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
          <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
          <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
          <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
          <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
          <p>연동 계정 · 로그인 기록 · 세션 관리</p>
          <p>데이터 내보내기 · 계정 삭제 요청</p>
        </div>
      </div>
    </div>\`
  }))
}`,...(U=(q=w.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var j,J,Q;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        story: '\`data-offset-bottom\`을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다.'
      },
      source: {
        language: 'vue',
        code: \`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <div class="affix_demo-narrow">
    <div id="affix-scroll-bottom" class="affix_demo-scroll">
      <div class="affix_demo-content">
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
        <Affix target="#affix-scroll-bottom" :offset-bottom="0" skin="bar">
          <span class="affix_bar-label">합계 ₩78,000</span>
          <div class="affix_bar-actions">
            <Button variant="filled" color="primary" block label="결제하기" style="min-width: 7rem" />
          </div>
        </Affix>
      </div>
    </div>
  </div>
</template>\`
      }
    }
  },
  render: affixDemo(() => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <div id="affix-scroll-bottom" class="affix_demo-scroll">
        <div class="affix_demo-content">
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
          <Affix target="#affix-scroll-bottom" :offset-bottom="0" skin="bar">
            <span class="affix_bar-label">합계 ₩78,000</span>
            <div class="affix_bar-actions">
              <Button variant="filled" color="primary" block label="결제하기" style="min-width: 7rem" />
            </div>
          </Affix>
        </div>
      </div>
    </div>\`
  }))
}`,...(Q=(J=_.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var K,X,Y;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        story: '\`data-target\`을 생략하면 window 스크롤을 기준으로 동작합니다. Docs에서는 미리보기 안에서 확인할 수 있도록 페이지형 스크롤 영역으로 시연합니다.'
      },
      source: {
        language: 'vue',
        code: \`<script setup>
import Affix from '@uxkm/ui/components/Affix.vue';
import Button from '@uxkm/ui/components/Button.vue';
<\/script>

<template>
  <!-- 실서비스: target 생략 시 window 스크롤 기준 -->
  <Affix
    :offset-top="64"
    skin="bar"
    style="--affix-bar-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))"
  >
    <span class="affix_bar-label" style="color: var(--color-accent-text)">
      신규 컴포넌트 가이드가 업데이트되었습니다
    </span>
    <div class="affix_bar-actions">
      <Button tag="a" href="/getting-started" variant="filled" color="primary" size="sm" label="시작하기" />
    </div>
  </Affix>
</template>\`
      }
    }
  },
  render: affixDemo(() => ({
    components: {
      Affix,
      Button
    },
    template: \`<div class="affix_demo-narrow">
      <p style="margin: 0 0 var(--space-md); font-size: var(--text-size-sm); color: var(--color-text-muted)">
        아래 영역을 스크롤하면 배너가 상단에 고정됩니다. 실서비스에서는 <code class="typo_code">target</code>을 생략해 window 스크롤에 연결합니다.
      </p>
      <div id="affix-scroll-window" class="affix_demo-page">
        <div class="affix_demo-content">
          <p>공지 배너가 스크롤에 따라 상단에 붙는지 확인해 보세요.</p>
          <Affix
            target="#affix-scroll-window"
            :offset-top="0"
            skin="bar"
            style="--affix-bar-bg: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))"
          >
            <span class="affix_bar-label" style="color: var(--color-accent-text)">
              신규 컴포넌트 가이드가 업데이트되었습니다
            </span>
            <div class="affix_bar-actions">
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
    </div>\`
  }))
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ru=["Playground","Basic","Offset","Anchor","Bottom","Window"];export{w as Anchor,h as Basic,_ as Bottom,y as Offset,g as Playground,k as Window,Ru as __namedExportsOrder,Hu as default};

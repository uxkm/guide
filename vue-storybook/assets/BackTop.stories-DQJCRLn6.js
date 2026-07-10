import{u as Q,b as R,C as X,D as $,c as A,h as k,j,m as v,e as M,a as W,f as _,o as g,r as J,t as U,q as Y}from"./vue.esm-bundler-BaZlnz8B.js";import{_ as G}from"./Button-C3SXv-sJ.js";import{_ as K}from"./Icon-D97OEunV.js";import{r as Z,u as uu}from"./useRipple-oORGvIsP.js";import{u as Cu,c as tu}from"./useDemoCode-B9b0dRAo.js";import{r as ou,a as eu}from"./ripple-api-C5ZjLJl-.js";function au(u,C){const o=parseInt(u,10);return Number.isFinite(o)?o:C}function pu(u){if(u.dataset.backTopInit)return()=>{};const C=u.getAttribute("data-target"),o=C?document.querySelector(C):null,b=au(u.getAttribute("data-visibility-height"),400),e=u.querySelector(".back_top_btn");if(!e)return()=>{};u.dataset.backTopInit="1";function p(){return o?o.scrollTop:window.scrollY||document.documentElement.scrollTop}function c(){o?o.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}function n(){u.classList.toggle("is-visible",p()>=b)}e.addEventListener("click",c);const i=o||window;return i.addEventListener("scroll",n,{passive:!0}),n(),()=>{e.removeEventListener("click",c),i.removeEventListener("scroll",n),delete u.dataset.backTopInit,u.classList.remove("is-visible")}}const nu={key:0,class:"back_top_label"},a=Object.assign({inheritAttrs:!1},{__name:"BackTop",props:{ripple:Z,target:String,visibilityHeight:{type:[Number,String],default:400},size:{type:String,default:"md",validator:u=>["sm","md","lg"].includes(u)},color:{type:String,default:"",validator:u=>["","primary","ghost"].includes(u)},label:String,ariaLabel:{type:String,default:"맨 위로"},interactive:{type:Boolean,default:!0}},setup(u){const C=u,{rippleAttrs:o}=uu(C),b=Q(),e=R(),p=W(null),c=tu("BackTop",{defaults:{visibilityHeight:400,size:"md",ariaLabel:"맨 위로",interactive:!0},booleanProps:new Set(["interactive","ripple"]),selfClosing:!1});Cu(c,C,b,p,e);const n=_(()=>{const t=["back_top"];return C.size==="sm"&&t.push("back_top_sm"),C.size==="lg"&&t.push("back_top_lg"),C.color==="primary"&&t.push("back_top_primary"),C.color==="ghost"&&t.push("back_top_ghost"),e.class&&t.push(e.class),t}),i=_(()=>{const t={};return C.interactive&&(t["data-back-top"]=""),C.target&&(t["data-target"]=C.target),C.visibilityHeight!==400&&(t["data-visibility-height"]=String(C.visibilityHeight)),t});let s=null;return X(()=>{!C.interactive||!p.value||(s=pu(p.value))}),$(()=>{s==null||s(),s=null}),(t,bu)=>(g(),A("div",v({ref_key:"rootRef",ref:p,class:n.value},i.value),[k(G,v({variant:"ghost",class:"back_top_btn","aria-label":u.ariaLabel},M(o)),{default:j(()=>[J(t.$slots,"default",{},()=>[k(K,{name:"arrow-up",class:"back_top_icon"}),u.label?(g(),A("span",nu,U(u.label),1)):Y("",!0)])]),_:3},16,["aria-label"])],16))}}),su=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],cu=[{name:"target",type:"string",default:"—",description:"스크롤 컨테이너 선택자 (data-target). 생략 시 window"},{name:"visibility-height",type:"number | string",default:"400",description:"버튼 표시 임계 스크롤(px, data-visibility-height)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"back_top_sm · back_top_lg"},{name:"color",type:"'' | 'primary' | 'ghost'",default:"—",description:"back_top_primary · back_top_ghost"},{name:"label",type:"string",default:"—",description:"버튼 텍스트 (back_top_label)"},{name:"aria-label",type:"string",default:"맨 위로",description:"접근성 라벨"},{name:"interactive",type:"boolean",default:"true",description:"false면 data-back-top 미부여"},ou],iu=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Bu=[{name:"default",description:"버튼 콘텐츠 (아이콘·텍스트)"}],ru=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],lu=[{name:"back_top · back_top_btn · back_top_icon · back_top_label",description:"루트·버튼·아이콘·텍스트"},{name:"back_top_sm · back_top_lg · back_top_primary · back_top_ghost",description:"크기·색상"},{name:"is-visible",description:"스크롤 임계 초과 시 표시"},{name:"data-back-top · data-target · data-visibility-height",description:"JS 연동"},...eu],Du=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],du=[{name:"--back-top-size · --back-top-size-sm · --back-top-size-lg",default:"—",description:"버튼 크기"},{name:"--back-top-offset-bottom · --back-top-offset-right",default:"—",description:"플로팅 위치"},{name:"--back-top-z-index",default:"—",description:"레이어 순서"}],mu=[{title:"API · Props",tables:[{columns:su,rows:cu,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:iu,rows:Bu,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ru,rows:lu,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Du,rows:du,codeColumn:"name"}]}],yu={title:"Components/기타/BackTop",id:"components-back-top",component:a,tags:["autodocs"],argTypes:{target:{control:"text",type:{name:"string",summary:"string"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},color:{control:"select",options:["primary","ghost"],type:{name:"enum",summary:"'primary' | 'ghost'"}},label:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},interactive:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:mu}},B={args:{target:"값",visibilityHeight:400,size:"md",color:"primary",label:"라벨",ariaLabel:"맨 위로",interactive:!0},render:u=>({components:{BackTop:a},setup(){return{args:u}},template:`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-playground">
        <div class="back_top_demo-content">
          <p>아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
          <p>상품 설명 · 리뷰 · 배송 안내</p>
          <p>교환·반품 · 문의처</p>
        </div>
      </div>
      <BackTop v-bind="args" target="#back-top-scroll-playground" :visibility-height="80" />
    </div>`})},r={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>data-back-top</code>과 <code class=&quot;typo_code&quot;>data-target</code>으로 스크롤 영역을 연결합니다. 영역을 일정 이상 스크롤하면 우측 하단에 버튼이 나타납니다."},source:{code:`<script setup>
import BackTop from '@uxkm/ui/components/BackTop.vue';
<\/script>

<template>
  <div class="back_top_demo-wrap">
    <div class="back_top_demo-scroll" id="back-top-scroll-basic">
      <div class="back_top_demo-content">
        <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
        <p>무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수</p>
        <p>색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착</p>
        <p>상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.</p>
        <p>리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상</p>
        <p>함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블</p>
        <p>교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.</p>
        <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
      </div>
    </div>
    <BackTop target="#back-top-scroll-basic" :visibility-height="80" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{BackTop:a},template:`<div class="back_top_demo-wrap">
          <div class="back_top_demo-scroll" id="back-top-scroll-basic">
            <div class="back_top_demo-content">
              <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
              <p>무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수</p>
              <p>색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착</p>
              <p>상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.</p>
              <p>리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상</p>
              <p>함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블</p>
              <p>교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.</p>
              <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
            </div>
          </div>
    
          <BackTop target="#back-top-scroll-basic" :visibility-height="80" />
        </div>`})},l={name:"표시 임계값",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>data-visibility-height</code>으로 버튼이 나타나는 스크롤 거리(px)를 지정합니다. 기본값은 400px입니다."},source:{code:`<script setup>
import BackTop from '@uxkm/ui/components/BackTop.vue';
<\/script>

<template>
  <div class="back_top_demo-wrap">
    <div class="back_top_demo-scroll" id="back-top-scroll-visibility">
      <div class="back_top_demo-content">
        <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
        <p>[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00</p>
        <p>[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지</p>
        <p>[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정</p>
        <p>[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역</p>
        <p>[공지] 개인정보 처리방침 개정 — 4/1 시행</p>
        <p>[이벤트] 봄맞이 세일 — 최대 50% 할인</p>
        <p>[안내] 고객센터 운영 시간 변경 — 공휴일 휴무</p>
      </div>
    </div>
    <BackTop target="#back-top-scroll-visibility" :visibility-height="200" color="primary" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{BackTop:a},template:`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div class="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
          <p>[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00</p>
          <p>[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지</p>
          <p>[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정</p>
          <p>[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역</p>
          <p>[공지] 개인정보 처리방침 개정 — 4/1 시행</p>
          <p>[이벤트] 봄맞이 세일 — 최대 50% 할인</p>
          <p>[안내] 고객센터 운영 시간 변경 — 공휴일 휴무</p>
        </div>
      </div>

      <BackTop target="#back-top-scroll-visibility" :visibility-height="200" color="primary" />
    </div>`})},D={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"<code class=&quot;typo_code&quot;>back_top_sm</code> · <code class=&quot;typo_code&quot;>back_top_lg</code> 클래스로 버튼 크기를 조절합니다."},source:{code:`<script setup>
import BackTop from '@uxkm/ui/components/BackTop.vue';
<\/script>

<template>
  <div class="back_top_demo-wrap">
    <div class="back_top_demo-scroll" id="back-top-scroll-sm">
      <div class="back_top_demo-content">
        <p>Small 크기 예시입니다. 스크롤해 보세요.</p>
        <p>1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.</p>
        <p>2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.</p>
        <p>3. 참고 — 터치 영역은 최소 44px을 권장합니다.</p>
        <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
      </div>
    </div>
    <BackTop target="#back-top-scroll-sm" size="sm" :visibility-height="60" />
  </div>
  <div class="back_top_demo-wrap">
    <div class="back_top_demo-scroll" id="back-top-scroll-lg">
      <div class="back_top_demo-content">
        <p>Large 크기 예시입니다. 스크롤해 보세요.</p>
        <p>1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.</p>
        <p>2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.</p>
        <p>3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.</p>
        <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
      </div>
    </div>
    <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" :visibility-height="60" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{BackTop:a},template:`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-sm">
        <div class="back_top_demo-content">
          <p>Small 크기 예시입니다. 스크롤해 보세요.</p>
          <p>1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.</p>
          <p>2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.</p>
          <p>3. 참고 — 터치 영역은 최소 44px을 권장합니다.</p>
          <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
        </div>
      </div>

      <BackTop target="#back-top-scroll-sm" size="sm" :visibility-height="60" />
    </div>

    <div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-lg">
        <div class="back_top_demo-content">
          <p>Large 크기 예시입니다. 스크롤해 보세요.</p>
          <p>1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.</p>
          <p>2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.</p>
          <p>3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.</p>
          <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
        </div>
      </div>

      <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" :visibility-height="60" />
    </div>`})},d={name:"커스텀 콘텐츠",parameters:{demoPreview:{stack:!1},docs:{description:{story:"버튼 안에 아이콘과 텍스트를 함께 넣을 수 있습니다. pill 형태로 자동 확장됩니다."},source:{code:`<script setup>
import BackTop from '@uxkm/ui/components/BackTop.vue';
<\/script>

<template>
  <div class="back_top_demo-wrap">
    <div class="back_top_demo-scroll" id="back-top-scroll-custom">
      <div class="back_top_demo-content">
        <p>긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.</p>
        <p>제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.</p>
        <p>제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.</p>
        <p>제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.</p>
        <p>제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.</p>
        <p>제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.</p>
        <p>제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.</p>
        <p>제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.</p>
      </div>
    </div>
    <BackTop
    target="#back-top-scroll-custom"
    color="primary"
    label="TOP"
    :visibility-height="100"
    style="--back-top-offset-bottom: var(--space-md); --back-top-offset-right: var(--space-md);"
    />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{BackTop:a},template:`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-custom">
        <div class="back_top_demo-content">
          <p>긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.</p>
          <p>제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.</p>
          <p>제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.</p>
          <p>제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.</p>
          <p>제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.</p>
          <p>제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.</p>
          <p>제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.</p>
          <p>제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.</p>
        </div>
      </div>

      <BackTop
        target="#back-top-scroll-custom"
        color="primary"
        label="TOP"
        :visibility-height="100"
        style="--back-top-offset-bottom: var(--space-md); --back-top-offset-right: var(--space-md);"
      />
    </div>`})},m={name:"페이지 스크롤",parameters:{demoPreview:{stack:!1},docs:{description:{story:"<code class=&quot;typo_code&quot;>data-target</code>을 생략하면 window 스크롤을 기준으로 동작합니다. 이 페이지를 아래로 스크롤하면 우측 하단에 버튼이 나타납니다."},source:{code:`<script setup>
import BackTop from '@uxkm/ui/components/BackTop.vue';
<\/script>

<template>
  <p style="margin: 0; font-size: var(--text-size-sm); color: var(--color-text-muted);">페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요. 클릭하면 페이지 최상단으로 부드럽게 이동합니다.</p>
  <BackTop color="primary" />
</template>`,language:"vue"}}},render:()=>({components:{BackTop:a},template:`<p style="margin: 0; font-size: var(--text-size-sm); color: var(--color-text-muted);">페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요. 클릭하면 페이지 최상단으로 부드럽게 이동합니다.</p>
    <BackTop color="primary" />`})};var E,y,f;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    target: "값",
    visibilityHeight: 400,
    size: "md",
    color: "primary",
    label: "라벨",
    ariaLabel: "맨 위로",
    interactive: true
  },
  render: args => ({
    components: {
      BackTop
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-playground">
        <div class="back_top_demo-content">
          <p>아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
          <p>상품 설명 · 리뷰 · 배송 안내</p>
          <p>교환·반품 · 문의처</p>
        </div>
      </div>
      <BackTop v-bind="args" target="#back-top-scroll-playground" :visibility-height="80" />
    </div>\`
  })
}`,...(f=(y=B.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,T,F;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>data-back-top</code>과 <code class=&quot;typo_code&quot;>data-target</code>으로 스크롤 영역을 연결합니다. 영역을 일정 이상 스크롤하면 우측 하단에 버튼이 나타납니다."
      },
      source: {
        code: "<script setup>\\nimport BackTop from '@uxkm/ui/components/BackTop.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"back_top_demo-wrap\\">\\n    <div class=\\"back_top_demo-scroll\\" id=\\"back-top-scroll-basic\\">\\n      <div class=\\"back_top_demo-content\\">\\n        <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>\\n        <p>무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수</p>\\n        <p>색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착</p>\\n        <p>상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.</p>\\n        <p>리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상</p>\\n        <p>함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블</p>\\n        <p>교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.</p>\\n        <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>\\n      </div>\\n    </div>\\n    <BackTop target=\\"#back-top-scroll-basic\\" :visibility-height=\\"80\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      BackTop
    },
    template: \`<div class="back_top_demo-wrap">
          <div class="back_top_demo-scroll" id="back-top-scroll-basic">
            <div class="back_top_demo-content">
              <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
              <p>무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수</p>
              <p>색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착</p>
              <p>상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.</p>
              <p>리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상</p>
              <p>함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블</p>
              <p>교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.</p>
              <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
            </div>
          </div>
    
          <BackTop target="#back-top-scroll-basic" :visibility-height="80" />
        </div>\`
  })
}`,...(F=(T=r.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var x,w,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "표시 임계값",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>data-visibility-height</code>으로 버튼이 나타나는 스크롤 거리(px)를 지정합니다. 기본값은 400px입니다."
      },
      source: {
        code: "<script setup>\\nimport BackTop from '@uxkm/ui/components/BackTop.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"back_top_demo-wrap\\">\\n    <div class=\\"back_top_demo-scroll\\" id=\\"back-top-scroll-visibility\\">\\n      <div class=\\"back_top_demo-content\\">\\n        <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>\\n        <p>[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00</p>\\n        <p>[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지</p>\\n        <p>[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정</p>\\n        <p>[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역</p>\\n        <p>[공지] 개인정보 처리방침 개정 — 4/1 시행</p>\\n        <p>[이벤트] 봄맞이 세일 — 최대 50% 할인</p>\\n        <p>[안내] 고객센터 운영 시간 변경 — 공휴일 휴무</p>\\n      </div>\\n    </div>\\n    <BackTop target=\\"#back-top-scroll-visibility\\" :visibility-height=\\"200\\" color=\\"primary\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      BackTop
    },
    template: \`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div class="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
          <p>[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00</p>
          <p>[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지</p>
          <p>[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정</p>
          <p>[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역</p>
          <p>[공지] 개인정보 처리방침 개정 — 4/1 시행</p>
          <p>[이벤트] 봄맞이 세일 — 최대 50% 할인</p>
          <p>[안내] 고객센터 운영 시간 변경 — 공휴일 휴무</p>
        </div>
      </div>

      <BackTop target="#back-top-scroll-visibility" :visibility-height="200" color="primary" />
    </div>\`
  })
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var P,z,q;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>back_top_sm</code> · <code class=&quot;typo_code&quot;>back_top_lg</code> 클래스로 버튼 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport BackTop from '@uxkm/ui/components/BackTop.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"back_top_demo-wrap\\">\\n    <div class=\\"back_top_demo-scroll\\" id=\\"back-top-scroll-sm\\">\\n      <div class=\\"back_top_demo-content\\">\\n        <p>Small 크기 예시입니다. 스크롤해 보세요.</p>\\n        <p>1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.</p>\\n        <p>2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.</p>\\n        <p>3. 참고 — 터치 영역은 최소 44px을 권장합니다.</p>\\n        <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>\\n      </div>\\n    </div>\\n    <BackTop target=\\"#back-top-scroll-sm\\" size=\\"sm\\" :visibility-height=\\"60\\" />\\n  </div>\\n  <div class=\\"back_top_demo-wrap\\">\\n    <div class=\\"back_top_demo-scroll\\" id=\\"back-top-scroll-lg\\">\\n      <div class=\\"back_top_demo-content\\">\\n        <p>Large 크기 예시입니다. 스크롤해 보세요.</p>\\n        <p>1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.</p>\\n        <p>2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.</p>\\n        <p>3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.</p>\\n        <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>\\n      </div>\\n    </div>\\n    <BackTop target=\\"#back-top-scroll-lg\\" size=\\"lg\\" color=\\"ghost\\" :visibility-height=\\"60\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      BackTop
    },
    template: \`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-sm">
        <div class="back_top_demo-content">
          <p>Small 크기 예시입니다. 스크롤해 보세요.</p>
          <p>1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.</p>
          <p>2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.</p>
          <p>3. 참고 — 터치 영역은 최소 44px을 권장합니다.</p>
          <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
        </div>
      </div>

      <BackTop target="#back-top-scroll-sm" size="sm" :visibility-height="60" />
    </div>

    <div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-lg">
        <div class="back_top_demo-content">
          <p>Large 크기 예시입니다. 스크롤해 보세요.</p>
          <p>1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.</p>
          <p>2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.</p>
          <p>3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.</p>
          <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
        </div>
      </div>

      <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" :visibility-height="60" />
    </div>\`
  })
}`,...(q=(z=D.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var L,I,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "커스텀 콘텐츠",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "버튼 안에 아이콘과 텍스트를 함께 넣을 수 있습니다. pill 형태로 자동 확장됩니다."
      },
      source: {
        code: "<script setup>\\nimport BackTop from '@uxkm/ui/components/BackTop.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"back_top_demo-wrap\\">\\n    <div class=\\"back_top_demo-scroll\\" id=\\"back-top-scroll-custom\\">\\n      <div class=\\"back_top_demo-content\\">\\n        <p>긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.</p>\\n        <p>제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.</p>\\n        <p>제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.</p>\\n        <p>제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.</p>\\n        <p>제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.</p>\\n        <p>제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.</p>\\n        <p>제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.</p>\\n        <p>제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.</p>\\n      </div>\\n    </div>\\n    <BackTop\\n    target=\\"#back-top-scroll-custom\\"\\n    color=\\"primary\\"\\n    label=\\"TOP\\"\\n    :visibility-height=\\"100\\"\\n    style=\\"--back-top-offset-bottom: var(--space-md); --back-top-offset-right: var(--space-md);\\"\\n    />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      BackTop
    },
    template: \`<div class="back_top_demo-wrap">
      <div class="back_top_demo-scroll" id="back-top-scroll-custom">
        <div class="back_top_demo-content">
          <p>긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.</p>
          <p>제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.</p>
          <p>제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.</p>
          <p>제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.</p>
          <p>제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.</p>
          <p>제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.</p>
          <p>제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.</p>
          <p>제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.</p>
        </div>
      </div>

      <BackTop
        target="#back-top-scroll-custom"
        color="primary"
        label="TOP"
        :visibility-height="100"
        style="--back-top-offset-bottom: var(--space-md); --back-top-offset-right: var(--space-md);"
      />
    </div>\`
  })
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var H,V,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "페이지 스크롤",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "<code class=&quot;typo_code&quot;>data-target</code>을 생략하면 window 스크롤을 기준으로 동작합니다. 이 페이지를 아래로 스크롤하면 우측 하단에 버튼이 나타납니다."
      },
      source: {
        code: "<script setup>\\nimport BackTop from '@uxkm/ui/components/BackTop.vue';\\n<\/script>\\n\\n<template>\\n  <p style=\\"margin: 0; font-size: var(--text-size-sm); color: var(--color-text-muted);\\">페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요. 클릭하면 페이지 최상단으로 부드럽게 이동합니다.</p>\\n  <BackTop color=\\"primary\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      BackTop
    },
    template: \`<p style="margin: 0; font-size: var(--text-size-sm); color: var(--color-text-muted);">페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요. 클릭하면 페이지 최상단으로 부드럽게 이동합니다.</p>
    <BackTop color="primary" />\`
  })
}`,...(N=(V=m.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const fu=["Playground","Basic","Visibility","Size","Custom","Window"];export{r as Basic,d as Custom,B as Playground,D as Size,l as Visibility,m as Window,fu as __namedExportsOrder,yu as default};

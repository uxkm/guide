import{B as e,F as t,G as n,L as r,U as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,p,q as m,s as h,st as g,u as _,wt as v,y}from"./CCnt5OSV.js";import{F as b,l as x,t as S,v as C}from"./DkmWXf_S.js";import{n as w,t as T}from"./D01l-9yr.js";import{t as E}from"./D5AUKneU.js";import{t as D}from"./gHQDdAlU.js";import{t as O}from"./DD3RWXAt.js";import{l as k,t as A}from"./D6IbhUhQ.js";import{n as j}from"./Dp1rIjyN.js";var M={key:0,class:`back_top_label`},N=Object.assign({inheritAttrs:!1},{__name:`BackTop`,props:{ripple:T,target:String,visibilityHeight:{type:[Number,String],default:400},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},color:{type:String,default:``,validator:e=>[``,`primary`,`ghost`].includes(e)},label:String,ariaLabel:{type:String,default:`맨 위로`},interactive:{type:Boolean,default:!0}},setup(l){let y=new Set([`sm`,`md`,`lg`]),x=new Set([``,`primary`,`ghost`]),S=l,{rippleAttrs:T}=w(S),O=n(),k=i(),A=f(null),N=f(!1),P=_(()=>y.has(S.size)?S.size:`md`),F=_(()=>x.has(S.color)?S.color:``),I=_(()=>!!S.target||!N.value),L=b(`BackTop`,{defaults:{visibilityHeight:400,size:`md`,ariaLabel:`맨 위로`,interactive:!0},booleanProps:new Set([`interactive`,`ripple`]),selfClosing:!1});C(L,()=>({...S,size:P.value,color:F.value||void 0}),O,A,k);let R=_(()=>{let e=[`back_top`];return P.value===`sm`&&e.push(`back_top_sm`),P.value===`lg`&&e.push(`back_top_lg`),F.value===`primary`&&e.push(`back_top_primary`),F.value===`ghost`&&e.push(`back_top_ghost`),k.class&&e.push(k.class),e}),z=_(()=>{let e={};return S.interactive&&(e[`data-back-top`]=``),S.target&&(e[`data-target`]=S.target),Number(S.visibilityHeight)!==400&&(e[`data-visibility-height`]=String(S.visibilityHeight)),e}),B=_(()=>{let{class:e,...t}=k;return t}),V=_(()=>({...z.value,...B.value}));return t(()=>{N.value=!0}),m(e=>{S.target,S.visibilityHeight,I.value,!(!S.interactive||!A.value)&&e(j(A.value))},{flush:`post`}),(t,n)=>(r(),c(h,{to:`body`,disabled:I.value},[s(`div`,u({ref_key:`rootRef`,ref:A,class:R.value},V.value),[o(D,u({variant:`ghost`,class:`back_top_btn`,"aria-label":l.ariaLabel},g(T)),{default:a(()=>[e(t.$slots,`default`,{},()=>[o(E,{name:`arrow-up`,class:`back_top_icon`}),l.label?(r(),d(`span`,M,v(l.label),1)):p(``,!0)])]),_:3},16,[`aria-label`])],16)],8,[`disabled`]))}}),P=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`target`,type:`string`,default:`—`,description:`스크롤 컨테이너 선택자 (data-target). 생략 시 window`},{name:`visibility-height`,type:`number | string`,default:`400`,description:`버튼 표시 임계 스크롤(px, data-visibility-height)`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`back_top_sm · back_top_lg`},{name:`color`,type:`'' | 'primary' | 'ghost'`,default:`—`,description:`back_top_primary · back_top_ghost`},{name:`label`,type:`string`,default:`—`,description:`버튼 텍스트 (back_top_label)`},{name:`aria-label`,type:`string`,default:`맨 위로`,description:`접근성 라벨`},{name:`interactive`,type:`boolean`,default:`true`,description:`false면 data-back-top 미부여`},k],I=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],L=[{name:`default`,description:`버튼 콘텐츠 (아이콘·텍스트)`}],R=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],z=[{name:`back_top · back_top_btn · back_top_icon · back_top_label`,description:`루트·버튼·아이콘·텍스트`},{name:`back_top_sm · back_top_lg · back_top_primary · back_top_ghost`,description:`크기·색상`},{name:`is-visible`,description:`스크롤 임계 초과 시 표시`},{name:`data-back-top · data-target · data-visibility-height`,description:`JS 연동`},...A],B=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],V=[{name:`--back-top-size · --back-top-size-sm · --back-top-size-lg`,default:`—`,description:`버튼 크기`},{name:`--back-top-offset-bottom · --back-top-offset-right`,default:`—`,description:`플로팅 위치`},{name:`--back-top-z-index`,default:`—`,description:`레이어 순서`}],H={class:`back_top_demo-wrap`},U={class:`back_top_demo-wrap`},W={class:`back_top_demo-wrap`},G={class:`back_top_demo-wrap`},K={class:`back_top_demo-wrap`},q={title:`Back Top | UXKM Guide`,activeNav:`back-top`,pageTitle:`Back Top`},J={__name:`back-top`,setup(e){return(e,t)=>(r(),d(l,null,[t[6]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Back Top`),s(`p`,{class:`lead`},[y(`긴 콘텐츠를 스크롤한 뒤 페이지(또는 지정 영역) 맨 위로 빠르게 이동하는 Nuxt 플로팅 버튼입니다. `),s(`code`,{class:`typo_code`},`target`),y(`으로 스크롤 컨테이너를 지정하고, `),s(`code`,{class:`typo_code`},`visibility-height`),y(`으로 표시 임계값을 조절할 수 있습니다.`)])],-1),o(O,{"heading-id":`basic-heading`,title:`기본`,description:`<code class="typo_code">target</code>으로 스크롤 영역을 연결합니다. 영역을 일정 이상 스크롤하면 우측 하단에 버튼이 나타납니다.`,code:`<script setup>
import BackTop from '@/components/BackTop.vue';
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
</template>`},{default:a(()=>[s(`div`,H,[t[0]||=s(`div`,{class:`back_top_demo-scroll`,id:`back-top-scroll-basic`},[s(`div`,{class:`back_top_demo-content`},[s(`p`,null,`상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.`),s(`p`,null,`무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수`),s(`p`,null,`색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착`),s(`p`,null,`상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.`),s(`p`,null,`리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상`),s(`p`,null,`함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블`),s(`p`,null,`교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.`),s(`p`,null,`문의: 고객센터 1588-0000 (평일 09:00–18:00)`)])],-1),o(N,{target:`#back-top-scroll-basic`,"visibility-height":80})])]),_:1}),o(O,{"heading-id":`visibility-heading`,title:`표시 임계값`,description:`<code class="typo_code">visibility-height</code>으로 버튼이 나타나는 스크롤 거리(px)를 지정합니다. 기본값은 400px입니다.`,code:`<script setup>
import BackTop from '@/components/BackTop.vue';
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
</template>`},{default:a(()=>[s(`div`,U,[t[1]||=s(`div`,{class:`back_top_demo-scroll`,id:`back-top-scroll-visibility`},[s(`div`,{class:`back_top_demo-content`},[s(`p`,null,`공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.`),s(`p`,null,`[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00`),s(`p`,null,`[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지`),s(`p`,null,`[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정`),s(`p`,null,`[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역`),s(`p`,null,`[공지] 개인정보 처리방침 개정 — 4/1 시행`),s(`p`,null,`[이벤트] 봄맞이 세일 — 최대 50% 할인`),s(`p`,null,`[안내] 고객센터 운영 시간 변경 — 공휴일 휴무`)])],-1),o(N,{target:`#back-top-scroll-visibility`,"visibility-height":200,color:`primary`})])]),_:1}),o(O,{"heading-id":`size-heading`,title:`크기`,description:`<code class="typo_code">back_top_sm</code> · <code class="typo_code">back_top_lg</code> 클래스로 버튼 크기를 조절합니다.`,stack:``,code:`<script setup>
import BackTop from '@/components/BackTop.vue';
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
</template>`},{default:a(()=>[s(`div`,W,[t[2]||=s(`div`,{class:`back_top_demo-scroll`,id:`back-top-scroll-sm`},[s(`div`,{class:`back_top_demo-content`},[s(`p`,null,`Small 크기 예시입니다. 스크롤해 보세요.`),s(`p`,null,`1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.`),s(`p`,null,`2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.`),s(`p`,null,`3. 참고 — 터치 영역은 최소 44px을 권장합니다.`),s(`p`,null,`4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.`)])],-1),o(N,{target:`#back-top-scroll-sm`,size:`sm`,"visibility-height":60})]),s(`div`,G,[t[3]||=s(`div`,{class:`back_top_demo-scroll`,id:`back-top-scroll-lg`},[s(`div`,{class:`back_top_demo-content`},[s(`p`,null,`Large 크기 예시입니다. 스크롤해 보세요.`),s(`p`,null,`1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.`),s(`p`,null,`2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.`),s(`p`,null,`3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.`),s(`p`,null,`4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.`)])],-1),o(N,{target:`#back-top-scroll-lg`,size:`lg`,color:`ghost`,"visibility-height":60})])]),_:1}),o(O,{"heading-id":`custom-heading`,title:`커스텀 콘텐츠`,description:`버튼 안에 아이콘과 텍스트를 함께 넣을 수 있습니다. pill 형태로 자동 확장됩니다.`,code:`<script setup>
import BackTop from '@/components/BackTop.vue';
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
</template>`},{default:a(()=>[s(`div`,K,[t[4]||=s(`div`,{class:`back_top_demo-scroll`,id:`back-top-scroll-custom`},[s(`div`,{class:`back_top_demo-content`},[s(`p`,null,`긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.`),s(`p`,null,`제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.`),s(`p`,null,`제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.`),s(`p`,null,`제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.`),s(`p`,null,`제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.`),s(`p`,null,`제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.`),s(`p`,null,`제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.`),s(`p`,null,`제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.`)])],-1),o(N,{target:`#back-top-scroll-custom`,color:`primary`,label:`TOP`,"visibility-height":100,style:{"--back-top-offset-bottom":`var(--space-md)`,"--back-top-offset-right":`var(--space-md)`}})])]),_:1}),o(O,{"heading-id":`window-heading`,title:`페이지 스크롤`,description:`<code class="typo_code">target</code>을 생략하면 window 스크롤을 기준으로 동작합니다. 이 페이지를 아래로 스크롤하면 우측 하단에 버튼이 나타납니다.`,code:`<script setup>
import BackTop from '@/components/BackTop.vue';
<\/script>

<template>
  <p style="margin: 0; font-size: var(--text-size-sm); color: var(--color-text-muted);">
    페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요. 클릭하면 페이지 최상단으로 부드럽게 이동합니다.
  </p>
  <BackTop color="primary" />
</template>`},{default:a(()=>[t[5]||=s(`p`,{style:{margin:`0`,"font-size":`var(--text-size-sm)`,color:`var(--color-text-muted)`}},`페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요. 클릭하면 페이지 최상단으로 부드럽게 이동합니다.`,-1),o(N,{color:`primary`})]),_:1}),o(x,{"heading-id":`api-props-heading`,title:`API · Props`},{default:a(()=>[o(S,{columns:g(P),rows:g(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(x,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:a(()=>[o(S,{columns:g(I),rows:g(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(x,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(S,{columns:g(R),rows:g(z),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(x,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(S,{columns:g(B),rows:g(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{J as default,q as docMeta};
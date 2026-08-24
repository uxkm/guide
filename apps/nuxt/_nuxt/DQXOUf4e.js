import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,q as d,st as f,u as p,xt as m,y as h}from"./CCnt5OSV.js";import{F as g,l as _,t as v,v as y}from"./DkmWXf_S.js";import{t as b}from"./gHQDdAlU.js";import{t as x}from"./DD3RWXAt.js";import{n as S}from"./Cozo2iiF.js";var C=Object.assign({inheritAttrs:!1},{__name:`Affix`,props:{target:String,offsetTop:{type:[Number,String],default:0},offsetBottom:[Number,String],skin:{type:String,default:``,validator:e=>[``,`bar`,`anchor`].includes(e)},interactive:{type:Boolean,default:!0}},setup(i){let a=new Set([``,`bar`,`anchor`]),s=i,f=t(),h=r(),_=u(null),v=p(()=>a.has(s.skin)?s.skin:``),b=g(`Affix`,{defaults:{offsetTop:0,interactive:!0},booleanProps:new Set([`interactive`]),selfClosing:!1});y(b,()=>({...s,skin:v.value||void 0}),f,_,h);let x=p(()=>{let e=[`affix`];return h.class&&e.push(h.class),e}),C=p(()=>{let e=[`affix_target`];return v.value===`bar`&&e.push(`affix_bar`),v.value===`anchor`&&e.push(`affix_anchor`),e}),w=p(()=>{let e={};return s.interactive&&(e[`data-affix`]=``),s.target&&(e[`data-target`]=s.target),s.offsetTop!==void 0&&s.offsetTop!==null&&Number(s.offsetTop)!==0&&(e[`data-offset-top`]=String(s.offsetTop)),s.offsetBottom!==void 0&&s.offsetBottom!==null&&s.offsetBottom!==``&&(e[`data-offset-bottom`]=String(s.offsetBottom)),e}),T=p(()=>{let{class:e,...t}=h;return t});return d(e=>{s.target,s.offsetTop,s.offsetBottom,!(!s.interactive||!_.value)&&e(S(_.value))},{flush:`post`}),(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:_,class:x.value},{...T.value,...w.value}),[r[0]||=o(`div`,{class:`affix_placeholder`,"aria-hidden":`true`,hidden:``},null,-1),o(`div`,{class:m(C.value)},[e(t.$slots,`default`)],2)],16))}}),w=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],T=[{name:`target`,type:`string`,default:`—`,description:`스크롤 컨테이너 선택자 (data-target). 생략 시 window`},{name:`offset-top`,type:`number | string`,default:`0`,description:`상단 고정 시 상단 여백(px, data-offset-top)`},{name:`offset-bottom`,type:`number | string`,default:`—`,description:`하단 고정 시 하단 여백(px, data-offset-bottom). 지정 시 하단 고정 모드`},{name:`skin`,type:`'' | 'bar' | 'anchor'`,default:`—`,description:`affix_bar · affix_anchor 스킨`},{name:`interactive`,type:`boolean`,default:`true`,description:`false면 data-affix 미부여(초기화 비활성)`}],E=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],D=[{name:`default`,description:`고정 대상 콘텐츠 (라벨·버튼·앵커 링크 등)`}],O=[{key:`name`,label:`속성`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],k=[{name:`data-affix`,type:`boolean`,default:`—`,description:`Affix 활성화. 루트 .affix 요소에 지정`},{name:`data-target`,type:`string`,default:`window`,description:`스크롤 컨테이너 CSS 선택자. 생략 시 window 스크롤 기준`},{name:`data-offset-top`,type:`number`,default:`0`,description:`상단 고정 시 뷰포트·컨테이너 상단과의 간격(px)`},{name:`data-offset-bottom`,type:`number`,default:`0`,description:`하단 고정 시 하단과의 간격(px). 속성을 지정하면 하단 고정 모드`}],A=[{key:`name`,label:`요소`},{key:`description`,label:`설명`}],j=[{name:`.affix`,description:`루트 래퍼. data-affix · data-target · data-offset-* 속성을 지정`},{name:`.affix_placeholder`,description:`고정 시 레이아웃 점프 방지용 플레이스홀더 (aria-hidden="true", hidden)`},{name:`.affix_target`,description:`실제 고정·해제되는 대상. affix_bar 또는 affix_anchor 스킨과 조합`}],M=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],N=[{name:`affix_bar`,description:`액션 바 스킨. 라벨 + 버튼 영역`},{name:`affix_bar-label`,description:`바 좌측 라벨`},{name:`affix_bar-actions`,description:`바 우측 버튼 그룹. Button 컴포넌트 조합`},{name:`affix_anchor`,description:`섹션 앵커 링크 내비게이션 스킨`},{name:`is-affixed`,description:`고정 상태 (루트 .affix에 JS가 자동 추가)`},{name:`is-fixed`,description:`고정 상태 (.affix_target에 JS가 자동 추가)`}],P=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`--affix-z-index`,default:`10`,description:`고정 바 z-index`},{name:`--affix-bar-gap`,default:`var(--space-sm)`,description:`바 내부 간격`},{name:`--affix-bar-padding-y · --affix-bar-padding-x`,default:`var(--space-sm) · var(--space-md)`,description:`바 패딩`},{name:`--affix-bar-bg`,default:`var(--color-surface)`,description:`바 배경`},{name:`--affix-bar-border`,default:`var(--color-border-subtle)`,description:`바 테두리`},{name:`--affix-bar-shadow`,default:`0 1px 4px rgb(0 0 0 / 0.08)`,description:`바 그림자`}],I={class:`affix_demo-narrow`},L={id:`affix-scroll-basic`,class:`affix_demo-scroll`},R={class:`affix_demo-content`},z={class:`affix_bar-actions`},B={class:`affix_demo-narrow`},V={id:`affix-scroll-offset`,class:`affix_demo-scroll`},H={class:`affix_demo-content`},U={class:`affix_demo-narrow`},W={id:`affix-scroll-anchor`,class:`affix_demo-scroll`},G={class:`affix_demo-content`},K={class:`affix_demo-narrow`},q={id:`affix-scroll-bottom`,class:`affix_demo-scroll`},J={class:`affix_demo-content`},Y={class:`affix_bar-actions`},X={class:`affix_demo-narrow`},Z={class:`affix_bar-actions`},Q={title:`Affix | UXKM Guide`,activeNav:`affix`,pageTitle:`Affix`},$={__name:`affix`,setup(e){return(e,t)=>(n(),l(s,null,[t[49]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Affix`),o(`p`,{class:`lead`},[h(` 스크롤 시 지정한 위치에 요소를 고정하는 Nuxt 컴포넌트입니다. 툴바·앵커 내비게이션·액션 버튼 등에 사용하며, `),o(`code`,{class:`typo_code`},`target`),h(`으로 스크롤 컨테이너를 지정할 수 있습니다. `)])],-1),a(x,{"heading-id":`basic-heading`,title:`기본`,description:`<code class="typo_code">target</code>으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 <code class="typo_code">.affix_target</code>이 상단에 고정됩니다.`,code:`<script setup>
import Affix from '@/components/Affix.vue';
import Button from '@/components/Button.vue';
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
</template>`},{default:i(()=>[o(`div`,I,[o(`div`,L,[o(`div`,R,[t[1]||=o(`p`,null,`주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.`,-1),t[2]||=o(`p`,null,`배송지: 서울특별시 강남구 테헤란로 123, 4층`,-1),t[3]||=o(`p`,null,`결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000`,-1),a(C,{target:`#affix-scroll-basic`,skin:`bar`},{default:i(()=>[t[0]||=o(`span`,{class:`affix_bar-label`},`주문 #ORD-2024-0815`,-1),o(`div`,z,[a(b,{variant:`outline`,size:`sm`,label:`취소`}),a(b,{variant:`filled`,color:`primary`,size:`sm`,label:`결제`})])]),_:1}),t[4]||=o(`p`,null,`상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000`,-1),t[5]||=o(`p`,null,`배송비: ₩3,000 · 예상 도착: 2~3 영업일`,-1),t[6]||=o(`p`,null,`요청 사항: 부재 시 경비실에 맡겨 주세요.`,-1),t[7]||=o(`p`,null,`교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.`,-1),t[8]||=o(`p`,null,`문의: 고객센터 1588-0000 (평일 09:00–18:00)`,-1),t[9]||=o(`p`,null,`주문 메모 · 선물 포장 · 세금계산서 요청`,-1),t[10]||=o(`p`,null,`관련 상품 · 최근 본 상품 · 위시리스트`,-1)])])])]),_:1}),a(x,{"heading-id":`offset-heading`,title:`상단 오프셋`,description:`<code class="typo_code">offset-top</code>으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다.`,code:`<script setup>
import Affix from '@/components/Affix.vue';
import Button from '@/components/Button.vue';
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
</template>`},{default:i(()=>[o(`div`,B,[o(`div`,V,[o(`div`,H,[t[15]||=o(`p`,null,`문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.`,-1),t[16]||=o(`p`,null,`제목: 2024년 3분기 실적 보고서`,-1),t[17]||=o(`p`,null,`작성자: 기획팀 · 최종 수정: 2024-08-15`,-1),a(C,{target:`#affix-scroll-offset`,"offset-top":12,skin:`bar`},{default:i(()=>[a(b,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":`굵게`},{"icon-before":i(()=>[...t[11]||=[o(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z`}),o(`path`,{d:`M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z`})],-1)]]),_:1}),a(b,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":`기울임`},{"icon-before":i(()=>[...t[12]||=[o(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M19 4h-9M14 20H5M15 4 9 20`})],-1)]]),_:1}),a(b,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":`밑줄`},{"icon-before":i(()=>[...t[13]||=[o(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[o(`path`,{d:`M6 3v7a6 6 0 0 0 12 0V3`}),o(`path`,{d:`M4 21h16`})],-1)]]),_:1}),t[14]||=o(`span`,{class:`affix_bar-label`,style:{"font-weight":`400`,color:`var(--color-text-muted)`}},` 서식 `,-1)]),_:1}),t[18]||=o(`p`,null,`1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.`,-1),t[19]||=o(`p`,null,`2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.`,-1),t[20]||=o(`p`,null,`3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.`,-1),t[21]||=o(`p`,null,`4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.`,-1),t[22]||=o(`p`,null,`5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.`,-1),t[23]||=o(`p`,null,`6. 참고 — 내부 지표 정의와 집계 기준은 별도 문서를 따릅니다.`,-1),t[24]||=o(`p`,null,`7. 문의 — 지표 해석은 기획팀으로 연락해 주세요.`,-1)])])])]),_:1}),a(x,{"heading-id":`anchor-heading`,title:`앵커 내비게이션`,description:`<code class="typo_code">affix_anchor</code> 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다.`,code:`<script setup>
import Affix from '@/components/Affix.vue';
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
</template>`},{default:i(()=>[o(`div`,U,[o(`div`,W,[o(`div`,G,[t[26]||=o(`p`,null,`설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.`,-1),a(C,{target:`#affix-scroll-anchor`,skin:`anchor`},{default:i(()=>[...t[25]||=[o(`nav`,{"aria-label":`설정 섹션`},[o(`a`,{href:`#affix-sec-profile`,class:`link color_primary`},`프로필`),o(`a`,{href:`#affix-sec-security`,class:`link`},`보안`),o(`a`,{href:`#affix-sec-notify`,class:`link`},`알림`),o(`a`,{href:`#affix-sec-billing`,class:`link`},`결제`)],-1)]]),_:1}),t[27]||=o(`p`,{id:`affix-sec-profile`},[o(`strong`,null,`프로필`),h(` — 이름, 아바타, 소개 문구를 수정합니다.`)],-1),t[28]||=o(`p`,{id:`affix-sec-security`},[o(`strong`,null,`보안`),h(` — 비밀번호 변경과 2단계 인증을 설정합니다.`)],-1),t[29]||=o(`p`,{id:`affix-sec-notify`},[o(`strong`,null,`알림`),h(` — 이메일·푸시·SMS 수신 여부를 관리합니다.`)],-1),t[30]||=o(`p`,{id:`affix-sec-billing`},[o(`strong`,null,`결제`),h(` — 등록된 카드와 청구 내역을 확인합니다.`)],-1),t[31]||=o(`p`,null,`모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.`,-1),t[32]||=o(`p`,null,`연동 계정 · 로그인 기록 · 세션 관리`,-1),t[33]||=o(`p`,null,`데이터 내보내기 · 계정 삭제 요청`,-1)])])])]),_:1}),a(x,{"heading-id":`bottom-heading`,title:`하단 고정`,description:`<code class="typo_code">offset-bottom</code>을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다.`,code:`<script setup>
import Affix from '@/components/Affix.vue';
import Button from '@/components/Button.vue';
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
</template>`},{default:i(()=>[o(`div`,K,[o(`div`,q,[o(`div`,J,[t[35]||=o(`p`,null,`장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.`,-1),t[36]||=o(`p`,null,`무선 이어폰 Pro × 1 — ₩39,000`,-1),t[37]||=o(`p`,null,`USB-C 케이블 × 2 — ₩12,000`,-1),t[38]||=o(`p`,null,`보조배터리 10,000mAh × 1 — ₩29,000`,-1),t[39]||=o(`p`,null,`배송비 — ₩3,000`,-1),t[40]||=o(`p`,null,`쿠폰 할인 — −₩5,000`,-1),t[41]||=o(`p`,null,`결제 수단은 다음 단계에서 선택합니다.`,-1),t[42]||=o(`p`,null,`적립 예정 포인트: 780P`,-1),t[43]||=o(`p`,null,`무료 배송 기준 · 오늘 도착 가능 여부`,-1),t[44]||=o(`p`,null,`장바구니에 담은 상품은 30일간 보관됩니다.`,-1),a(C,{target:`#affix-scroll-bottom`,"offset-bottom":0,skin:`bar`},{default:i(()=>[t[34]||=o(`span`,{class:`affix_bar-label`},`합계 ₩78,000`,-1),o(`div`,Y,[a(b,{variant:`filled`,color:`primary`,block:``,label:`결제하기`,style:{"min-width":`7rem`}})])]),_:1})])])])]),_:1}),a(x,{"heading-id":`window-heading`,title:`페이지 스크롤`,description:`<code class="typo_code">target</code>을 생략하면 window 스크롤을 기준으로 동작합니다. 이 섹션 아래로 페이지를 스크롤하면 배너가 상단에 고정됩니다.`,code:`<script setup>
import Affix from '@/components/Affix.vue';
import Button from '@/components/Button.vue';
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
</template>`},{default:i(()=>[o(`div`,X,[t[46]||=o(`p`,{style:{margin:`0 0 var(--space-md)`,"font-size":`var(--text-size-sm)`,color:`var(--color-text-muted)`}},` 아래 배너가 페이지 스크롤 시 상단(오프셋 64px)에 고정됩니다. 가이드 헤더 높이를 고려한 예시입니다. `,-1),a(C,{"offset-top":64,skin:`bar`,style:{"--affix-bar-bg":`color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))`}},{default:i(()=>[t[45]||=o(`span`,{class:`affix_bar-label`,style:{color:`var(--color-accent-text)`}},` 신규 컴포넌트 가이드가 업데이트되었습니다 `,-1),o(`div`,Z,[a(b,{tag:`a`,href:`/getting-started`,variant:`filled`,color:`primary`,size:`sm`,label:`시작하기`})])]),_:1}),t[47]||=o(`p`,{style:{margin:`var(--space-md) 0 0`,"font-size":`var(--text-size-sm)`,color:`var(--color-text-muted)`}},` 페이지를 계속 스크롤하여 고정·해제 동작을 확인하세요. `,-1)])]),_:1}),a(_,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(v,{columns:f(w),rows:f(T),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(v,{columns:f(E),rows:f(D),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`api-attrs-heading`,title:`API · Data Attributes`},{default:i(()=>[a(v,{columns:f(O),rows:f(k),"code-column":`name`},null,8,[`columns`,`rows`]),t[48]||=o(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[h(` HTML 마크업에서는 JS 초기화 방식을 사용합니다. Nuxt 앱에서는 컴포넌트가 `),o(`code`,{class:`typo_code`},`initAffix`),h(`를 자동으로 관리하며, 일반 문서 로드 시 `),o(`code`,{class:`typo_code`},`initAffixAll`),h(`이 `),o(`code`,{class:`typo_code`},`[data-affix]`),h(` 요소를 초기화합니다. `)],-1)]),_:1}),a(_,{"heading-id":`api-markup-heading`,title:`API · 마크업 구조`},{default:i(()=>[a(v,{columns:f(A),rows:f(j),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`api-classes-heading`,title:`클래스 · 스킨`,description:`OOCSS 구조 클래스와 스킨 클래스입니다. affix_bar-actions 안의 버튼은 Button 컴포넌트로 조합합니다.`},{default:i(()=>[a(v,{columns:f(M),rows:f(N),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(_,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(v,{columns:f(P),rows:f(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{$ as default,Q as docMeta};
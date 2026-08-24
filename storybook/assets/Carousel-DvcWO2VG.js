import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,g as o,h as s,i as ee,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Carousel.stories-Cydo65AV.js";import{i as _,r as v}from"./react-DSvVgjCn.js";import{c as y,r as b,u as x}from"./blocks-CkHyEh4O.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-D9Q6nkXJ.js";function E(e){return[e.effect&&`data-swiper-effect="${e.effect}"`,e.coverflowStyle&&`data-swiper-coverflow-style="${e.coverflowStyle}"`,e.coverflowSides&&`data-swiper-coverflow-sides="${e.coverflowSides}"`,e.autoplay&&`data-swiper-autoplay`,e.delay&&`data-swiper-delay="${e.delay}"`,e.loop&&`data-swiper-loop`,e.initialSlide&&`data-swiper-initial-slide="${e.initialSlide}"`,e.centered&&`data-swiper-centered`,e.slidesPerView&&`data-swiper-slides-per-view="${e.slidesPerView}"`,e.slidesPerGroup&&`data-swiper-slides-per-group="${e.slidesPerGroup}"`,e.spaceBetween&&`data-swiper-space-between="${e.spaceBetween}"`,typeof e.pagination==`string`&&`data-swiper-pagination="${e.pagination}"`,e.gridRows&&`data-swiper-grid-rows="${e.gridRows}"`].filter(Boolean).join(` `)}function D(e){return[`carousel`,e.multi&&`carousel_multi`,e.effect===`coverflow`&&`carousel_coverflow`,e.coverflowStyle===`rise`&&`carousel_coverflow-rise`,Number(e.gridRows)>1&&`carousel_grid`,e.pagination===`custom`&&`carousel_pagination-custom`,e.pagination===`progressbar`&&`carousel_pagination-progress`].filter(Boolean).join(` `)}function O(e,t,n=``,r=``,i=`<div class="swiper-wrapper" data-carousel-slides></div>`){return`<div id="${t}" class="${D(e)}${r}" data-component="Carousel">
  <div class="swiper" data-swiper ${E(e)}${n?` ${n}`:``} role="region" aria-roledescription="carousel" aria-label="콘텐츠 슬라이드">
    ${i}
    ${e.navigation===!1?``:`<div class="swiper-button-prev" aria-label="이전 슬라이드" data-ripple="surface"></div>
    <div class="swiper-button-next" aria-label="다음 슬라이드" data-ripple="surface"></div>`}
    ${e.pagination===!1?``:`<div class="swiper-pagination"></div>`}
  </div>
</div>`}function k(e,t){if(e==="default")return O(F.default,`carousel-default`,``,``,z);let n=e===`thumbs`?`<div id="carousel-gallery" class="carousel_gallery">
  ${O({pagination:!1},`carousel-main`,`data-swiper-thumbs="#carousel-thumbs-swiper"`)}
  ${O({slidesPerView:4,spaceBetween:8,pagination:!1,navigation:!1},`carousel-thumbs`,`id="carousel-thumbs-swiper" data-swiper-watch-slides-progress`,` carousel_thumbs`)}
</div>`:t.map((t,n)=>O(t,`carousel-${e}-${n+1}`)).join(`

`),r=e===`thumbs`?`['#carousel-main', '#carousel-thumbs']`:`[${t.map((t,n)=>`'#carousel-${e}-${n+1}'`).join(`, `)}]`;return`${n}

${e===`fade`?`<script type="application/json" id="carousel-slides-data">
${L}
<\/script>`:``}

<script type="module">
import { initCarousel } from './carousel.js';
${e===`fade`?`const carouselSlides = JSON.parse(document.querySelector('#carousel-slides-data').textContent);`:`import { carouselSlides } from './data/carousel-slides.js';`}

for (const selector of ${r}) {
  const carousel = document.querySelector(selector);
  const wrapper = carousel.querySelector('[data-carousel-slides]');

  for (const slide of carouselSlides.slice(0, ${I(e)})) {
    wrapper.insertAdjacentHTML('beforeend', \`
      <div class="swiper-slide">
        <article class="card card_accent color_\${slide.color}">
          <div class="card_body">
            <p class="typo_overline">\${slide.overline}</p>
            <h3 class="card_title">\${slide.title}</h3>
            <p class="typo_lead">\${slide.body}</p>
          </div>
        </article>
      </div>
    \`);
  }

}

initCarousel(document);
<\/script>`}function A(e,t,n){let r=Object.entries(e).map(([e,t])=>`  ${e}: ${typeof t==`string`?`'${t}'`:t}`).join(`,
`);return`{% include "components/miscellaneous/Carousel/carousel.njk" with {
  id: 'carousel-${t+1}',
  slides: carousel.slides,
  slideLimit: ${n}${r?`,\n${r}`:``}
} %}`}function j(e,t){return e==="default"?O(F.default,`carousel-default`,``,``,z):e===`fade`?`{% set slides = ${L} %}

{% include "components/miscellaneous/Carousel/carousel.njk" with {
  id: 'carousel-fade',
  slides: slides,
  effect: 'fade'
} %}`:`{# apps/gulp/src/data/carousel.json 데이터를 호출합니다. #}
${e===`thumbs`?`{% include "components/miscellaneous/Carousel/carousel.njk" with { id: 'carousel-main', slides: carousel.slides, slideLimit: 8, thumbs: '#carousel-thumbs', pagination: false } %}
{% include "components/miscellaneous/Carousel/carousel.njk" with { id: 'carousel-thumbs', slides: carousel.slides, slideLimit: 8, slidesPerView: 4, spaceBetween: 8, pagination: false, navigation: false, thumbsControl: true, watchSlidesProgress: true } %}`:t.map((t,n)=>A(t,n,I(e))).join(`

`)}`}function te(e,t,n=!1){if(t===!0)return e.replace(/[A-Z]/g,e=>n?`-${e.toLowerCase()}`:e);if(t===!1)return n?`:${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}="false"`:`${e}={false}`;let r=n?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e;return typeof t==`number`?n?`:${r}="${t}"`:`${r}={${t}}`:`${r}="${t}"`}function M(e,t,n=!1){let r=Object.entries(t).map(([e,t])=>te(e,t,n)).join(` `);return`<Carousel ${n?`aria-label`:`ariaLabel`}="콘텐츠 슬라이드"${r?` ${r}`:``}>
  ${e==="default"?n?U:H:n?V(I(e)):B(I(e))}
</Carousel>`}function N(e){let t=e===`grid`?[{slidesPerView:3,gridRows:2,spaceBetween:16},{slidesPerView:3,slidesPerGroup:6,gridRows:2,spaceBetween:16}]:e===`coverflowRise`?[1,1.5,2].map(e=>({effect:`coverflow`,coverflowStyle:`rise`,coverflowSides:e,spaceBetween:16,loop:!0,pagination:!1})):[F[e]],n=t.map(t=>M(e,t)).join(`

`),r=t.map(t=>M(e,t,!0)).join(`

`),i=e===`thumbs`?`const [thumbs, setThumbs] = useState(null);
  return <div className="carousel_gallery">
    <Carousel ariaLabel="갤러리 메인" thumbs={thumbs} pagination={false}>${B(8)}</Carousel>
    <Carousel ariaLabel="썸네일" slidesPerView={4} pagination={false} navigation={false} thumbsControl watchSlidesProgress onSwiper={setThumbs}>${B(8,!0)}</Carousel>
  </div>;`:t.length>1?`return <>\n${n}\n</>;`:`return ${n};`,a=e===`thumbs`?`<div class="carousel_gallery">
    <Carousel aria-label="갤러리 메인" :thumbs="thumbs" :pagination="false">${V(8)}</Carousel>
    <Carousel aria-label="썸네일" :slides-per-view="4" :pagination="false" :navigation="false" thumbs-control watch-slides-progress @swiper="thumbs = $event">${V(8,!0)}</Carousel>
  </div>`:r,o=`import { Carousel, CarouselSlide } from '@uxkm/react/carousel';${e===`thumbs`?`
import { useState } from 'react';`:``}${e==="default"||e===`fade`?``:`
import { carouselSlides } from './data/carousel-slides';`}${e===`fade`?`\n\n${R}`:``}

export function Example() {
  ${i}
}`,s=`<script setup>
${e===`thumbs`?`import { ref } from 'vue';
const thumbs = ref(null);
`:``}import { Carousel, CarouselSlide } from '@uxkm/vue/carousel';${e==="default"||e===`fade`?``:`
import { carouselSlides } from './data/carousel-slides';`}${e===`fade`?`\n\n${R}`:``}
<\/script>

<template>
  ${a}
</template>`;return[{id:`html`,label:`HTML`,fileName:`Carousel.html · ${e}`,code:k(e,t)},{id:`gulp`,label:`Gulp`,fileName:`carousel.njk · ${e}`,code:j(e,t)},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/carousel · ${e}`,code:s},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/carousel · ${e}`,code:s},{id:`react`,label:`React`,fileName:`@uxkm/react/carousel · ${e}`,code:o},{id:`next`,label:`Next`,fileName:`@uxkm/react/carousel · ${e}`,code:o}]}var P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{P=[`default`,`fade`,`autoplay`,`loop`,`multi`,`space`,`pagination`,`fraction`,`progress`,`custom`,`grid`,`coverflow`,`coverflowRise`,`thumbs`],F={default:{},fade:{effect:`fade`},autoplay:{autoplay:!0,delay:4e3,loop:!0,dotsOutside:!0},loop:{loop:!0},multi:{multi:!0,slidesPerView:`auto`,spaceBetween:16,centered:!0,navigation:!1},space:{spaceBetween:12,loop:!0},pagination:{loop:!0,navigation:!1},fraction:{pagination:`fraction`},progress:{pagination:`progressbar`,loop:!0},custom:{pagination:`custom`,loop:!0,navigation:!1},grid:{slidesPerView:3,slidesPerGroup:6,gridRows:2,spaceBetween:16},coverflow:{effect:`coverflow`,coverflowSides:1,spaceBetween:16,loop:!0,pagination:!1},coverflowRise:{effect:`coverflow`,coverflowStyle:`rise`,coverflowSides:2,spaceBetween:12,loop:!0,pagination:!1},thumbs:{}},I=e=>e===`grid`||e.startsWith(`coverflow`)||e===`thumbs`?12:e===`multi`||e===`custom`?4:3,L=`[
  { "id": 1, "overline": "이벤트", "title": "신규 가입 혜택", "body": "첫 주문 20% 할인 쿠폰을 드립니다.", "color": "primary" },
  { "id": 2, "overline": "혜택", "title": "무료 배송", "body": "3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.", "color": "success" },
  { "id": 3, "overline": "세일", "title": "시즌 세일", "body": "베스트셀러 상품을 최대 50% 할인합니다.", "color": "warning" }
]`,R=`const carouselSlides = ${L};`,z=`<div class="swiper-wrapper">
      <div class="swiper-slide"><article class="card card_accent color_primary"><div class="card_body"><p class="typo_overline">이벤트</p><h3 class="card_title">신규 가입 혜택</h3><p class="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article></div>
      <div class="swiper-slide"><article class="card card_accent color_success"><div class="card_body"><p class="typo_overline">혜택</p><h3 class="card_title">무료 배송</h3><p class="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article></div>
      <div class="swiper-slide"><article class="card card_accent color_warning"><div class="card_body"><p class="typo_overline">세일</p><h3 class="card_title">시즌 세일</h3><p class="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article></div>
    </div>`,B=(e,t=!1)=>`{carouselSlides.slice(0, ${e}).map((slide) => (
    <CarouselSlide key={slide.id}>
      <article className={\`card card_accent color_\${slide.color}\`}>
        <div className="card_body">
          <p className="typo_overline">{slide.overline}</p>
          <h3 className="card_title">{slide.title}</h3>
          <p className="${t?`card_subtitle`:`typo_lead`}">{slide.body}</p>
        </div>
      </article>
    </CarouselSlide>
  ))}`,V=(e,t=!1)=>`<CarouselSlide v-for="slide in carouselSlides.slice(0, ${e})" :key="slide.id">
    <article :class="['card', 'card_accent', \`color_\${slide.color}\`]">
      <div class="card_body">
        <p class="typo_overline">{{ slide.overline }}</p>
        <h3 class="card_title">{{ slide.title }}</h3>
        <p class="${t?`card_subtitle`:`typo_lead`}">{{ slide.body }}</p>
      </div>
    </article>
  </CarouselSlide>`,H=`<CarouselSlide>
    <article className="card card_accent color_primary"><div className="card_body"><p className="typo_overline">이벤트</p><h3 className="card_title">신규 가입 혜택</h3><p className="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article className="card card_accent color_success"><div className="card_body"><p className="typo_overline">혜택</p><h3 className="card_title">무료 배송</h3><p className="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article className="card card_accent color_warning"><div className="card_body"><p className="typo_overline">세일</p><h3 className="card_title">시즌 세일</h3><p className="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article>
  </CarouselSlide>`,U=`<CarouselSlide>
    <article class="card card_accent color_primary"><div class="card_body"><p class="typo_overline">이벤트</p><h3 class="card_title">신규 가입 혜택</h3><p class="typo_lead">첫 주문 20% 할인 쿠폰을 드립니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article class="card card_accent color_success"><div class="card_body"><p class="typo_overline">혜택</p><h3 class="card_title">무료 배송</h3><p class="typo_lead">3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.</p></div></article>
  </CarouselSlide>
  <CarouselSlide>
    <article class="card card_accent color_warning"><div class="card_body"><p class="typo_overline">세일</p><h3 class="card_title">시즌 세일</h3><p class="typo_lead">베스트셀러 상품을 최대 50% 할인합니다.</p></div></article>
  </CarouselSlide>`,W=Object.fromEntries(P.map(e=>[e,N(e)]))})))()}var K,q,J;function Y(){return(Y=e((()=>{K=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],q=(e,t)=>({title:e,tables:[{columns:K,rows:t}]}),J=[q(`Carousel API · 기본`,[{name:`ariaLabel`,type:`string`,default:`'콘텐츠 슬라이드'`,description:`캐러셀 영역의 접근성 이름입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`높이와 내비게이션 크기입니다.`},{name:`effect`,type:`'fade' | 'coverflow'`,default:`—`,description:`슬라이드 전환 효과입니다.`},{name:`loop`,type:`boolean`,default:`false`,description:`마지막과 첫 슬라이드를 순환합니다.`},{name:`initialSlide`,type:`number`,default:`0`,description:`처음 표시할 슬라이드 인덱스입니다.`},{name:`navigation`,type:`boolean`,default:`true`,description:`이전·다음 버튼을 표시합니다.`},{name:`pagination`,type:`boolean | 'fraction' | 'progressbar' | 'custom'`,default:`true`,description:`페이지네이션 유형을 선택합니다.`},{name:`dotsOutside`,type:`boolean`,default:`false`,description:`페이지네이션을 슬라이드 영역 밖에 표시합니다.`}]),q(`Carousel API · 레이아웃`,[{name:`slidesPerView`,type:`number | 'auto'`,default:`1`,description:`한 화면에 표시할 슬라이드 수입니다.`},{name:`slidesPerGroup`,type:`number`,default:`1`,description:`한 번에 이동할 슬라이드 수입니다.`},{name:`spaceBetween`,type:`number`,default:`0`,description:`슬라이드 사이 간격(px)입니다.`},{name:`multi`,type:`boolean`,default:`false`,description:`자동 너비 다중 슬라이드 레이아웃입니다.`},{name:`centered`,type:`boolean`,default:`false`,description:`활성 슬라이드를 가운데 정렬합니다.`},{name:`gridRows`,type:`number`,default:`1`,description:`2 이상이면 다행 그리드를 사용합니다.`},{name:`gridFill`,type:`'row' | 'column'`,default:`'row'`,description:`그리드 채움 방향입니다.`}]),q(`Carousel API · 자동 재생과 효과`,[{name:`autoplay`,type:`boolean`,default:`false`,description:`슬라이드를 자동 재생합니다.`},{name:`delay`,type:`number`,default:`4000`,description:`자동 재생 간격(ms)입니다.`},{name:`autoplayToggle`,type:`boolean`,default:`false`,description:`재생·정지 버튼을 표시합니다.`},{name:`coverflowStyle`,type:`'tilt' | 'rise'`,default:`'tilt'`,description:`커버플로우의 회전 또는 축소 스타일입니다.`},{name:`coverflowSides`,type:`1 | 1.5 | 2 | 'auto'`,default:`1.5`,description:`활성 슬라이드 좌우 노출 범위입니다.`},{name:`coverflowEffect`,type:`object`,default:`—`,description:`Swiper 커버플로우 상세 옵션입니다.`}]),q(`Carousel API · 썸네일`,[{name:`thumbs`,type:`Swiper`,default:`—`,description:`연결할 썸네일 Swiper 인스턴스입니다.`},{name:`thumbsControl`,type:`boolean`,default:`false`,description:`썸네일 컨트롤 캐러셀로 동작합니다.`},{name:`watchSlidesProgress`,type:`boolean`,default:`false`,description:`썸네일 연결을 위해 진행 상태를 감시합니다.`},{name:`freeMode`,type:`boolean`,default:`false`,description:`자유 스크롤 모드를 사용합니다.`},{name:`onSwiper · @swiper`,type:`callback`,default:`—`,description:`생성된 Swiper 인스턴스를 전달합니다.`}]),q(`CarouselSlide · HTML`,[{name:`children · default slot`,type:`ReactNode`,default:`—`,description:`슬라이드 콘텐츠입니다.`},{name:`data-swiper`,type:`attribute`,default:`—`,description:`HTML/Gulp 캐러셀 초기화 대상입니다.`},{name:`data-swiper-effect · data-swiper-loop · data-swiper-autoplay`,type:`attribute`,default:`—`,description:`HTML/Gulp 효과와 동작을 설정합니다.`},{name:`data-swiper-slides-per-view · data-swiper-space-between`,type:`attribute`,default:`—`,description:`HTML/Gulp 슬라이드 배치를 설정합니다.`},{name:`data-swiper-grid-rows · data-swiper-thumbs`,type:`attribute`,default:`—`,description:`HTML/Gulp 그리드와 썸네일 연결을 설정합니다.`}]),q(`디자인 토큰`,[{name:`--carousel-height · --carousel-radius`,type:`length`,default:`16rem · radius-lg`,description:`슬라이드 영역 높이와 모서리입니다.`},{name:`--carousel-nav-size · --carousel-nav-offset`,type:`length`,default:`2.25rem · space-md`,description:`내비게이션 크기와 위치입니다.`},{name:`--carousel-dot-size · --carousel-dot-size-active`,type:`length`,default:`0.5rem · 1.25rem`,description:`페이지네이션 점 크기입니다.`},{name:`--carousel-toggle-size`,type:`length`,default:`2rem`,description:`재생·정지 버튼 크기입니다.`}])]})))()}function X(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,..._(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(y,{of:u}),`
`,(0,Q.jsx)(t.h1,{id:`carousel`,children:`Carousel`}),`
`,(0,Q.jsx)(t.p,{children:`여러 콘텐츠를 가로로 탐색하는 Swiper 기반 캐러셀입니다. 키보드·터치 탐색과 다양한 전환 효과, 페이지네이션, 자동 재생을 지원합니다.`}),`
`,(0,Q.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,Q.jsx)(b,{of:d,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.default}),`
`,(0,Q.jsx)(t.h2,{id:`페이드`,children:`페이드`}),`
`,(0,Q.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.fade}),`
`,(0,Q.jsx)(t.h2,{id:`자동-재생`,children:`자동 재생`}),`
`,(0,Q.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.autoplay}),`
`,(0,Q.jsx)(t.h2,{id:`무한-루프`,children:`무한 루프`}),`
`,(0,Q.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.loop}),`
`,(0,Q.jsx)(t.h2,{id:`슬라이드-per-view`,children:`슬라이드 per view`}),`
`,(0,Q.jsx)(b,{of:i,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.multi}),`
`,(0,Q.jsx)(t.h2,{id:`슬라이드-간격`,children:`슬라이드 간격`}),`
`,(0,Q.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.space}),`
`,(0,Q.jsx)(t.h2,{id:`페이지네이션`,children:`페이지네이션`}),`
`,(0,Q.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.pagination}),`
`,(0,Q.jsx)(t.h2,{id:`분수-페이지네이션`,children:`분수 페이지네이션`}),`
`,(0,Q.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.fraction}),`
`,(0,Q.jsx)(t.h2,{id:`프로그레스-페이지네이션`,children:`프로그레스 페이지네이션`}),`
`,(0,Q.jsx)(b,{of:f,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.progress}),`
`,(0,Q.jsx)(t.h2,{id:`커스텀-페이지네이션`,children:`커스텀 페이지네이션`}),`
`,(0,Q.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.custom}),`
`,(0,Q.jsx)(t.h2,{id:`그리드`,children:`그리드`}),`
`,(0,Q.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.grid}),`
`,(0,Q.jsx)(t.h2,{id:`커버플로우`,children:`커버플로우`}),`
`,(0,Q.jsx)(b,{of:p,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.coverflow}),`
`,(0,Q.jsx)(t.h2,{id:`커버플로우--축소`,children:`커버플로우 · 축소`}),`
`,(0,Q.jsx)(b,{of:ee,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.coverflowRise}),`
`,(0,Q.jsx)(t.h2,{id:`썸네일-갤러리`,children:`썸네일 갤러리`}),`
`,(0,Q.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,Q.jsx)(w,{examples:W.thumbs}),`
`,(0,Q.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,Q.jsxs)(t.p,{children:[`루트 슬라이더는 `,(0,Q.jsx)(t.code,{children:`role="region"`}),`, `,(0,Q.jsx)(t.code,{children:`aria-roledescription="carousel"`}),`, `,(0,Q.jsx)(t.code,{children:`aria-label`}),`을 제공합니다. 이전·다음 버튼, 페이지네이션, 자동 재생 토글은 키보드로 조작할 수 있습니다.`]}),`
`,(0,Q.jsx)(T,{sections:J})]})}function Z(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(X,{...e})}):X(e)}var Q;function $(){return($=e((()=>{Q=t(),v(),x(),S(),C(),G(),Y(),o()})))()}$();export{Z as default};
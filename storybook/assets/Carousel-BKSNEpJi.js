import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./Carousel.stories-C97077oY.js";import{i as v,r as y}from"./react-DPG3xyh1.js";import{c as b,r as x,u as S}from"./blocks-BXsfpknd.js";import{i as C,n as w,r as T,t as E}from"./ComponentApiDocs-BKc5okVC.js";import{c as D,d as O,s as k}from"./miscellaneousDocumentationExamples-Ba9fQW5W.js";var A,j,M;function N(){return(N=e((()=>{A=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],j=(e,t,n)=>({title:e,description:n,tables:[{columns:A,rows:t}]}),M=[j(`Carousel API · 기본`,[{name:`ariaLabel`,type:`string`,default:`'콘텐츠 슬라이드'`,description:`캐러셀 영역의 접근성 이름입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`높이와 내비게이션 크기입니다.`},{name:`effect`,type:`'fade' | 'coverflow'`,default:`—`,description:`슬라이드 전환 효과입니다.`},{name:`loop`,type:`boolean`,default:`false`,description:`마지막과 첫 슬라이드를 순환합니다.`},{name:`initialSlide`,type:`number`,default:`0`,description:`처음 표시할 슬라이드 인덱스입니다.`},{name:`navigation`,type:`boolean`,default:`true`,description:`이전·다음 버튼을 표시합니다.`},{name:`pagination`,type:`boolean | 'fraction' | 'progressbar' | 'custom'`,default:`true`,description:`페이지네이션 유형을 선택합니다.`},{name:`dotsOutside`,type:`boolean`,default:`false`,description:`페이지네이션을 슬라이드 영역 밖에 표시합니다.`}]),j(`Carousel API · 레이아웃`,[{name:`slidesPerView`,type:`number | 'auto'`,default:`1`,description:`한 화면에 표시할 슬라이드 수입니다.`},{name:`slidesPerGroup`,type:`number`,default:`1`,description:`한 번에 이동할 슬라이드 수입니다.`},{name:`spaceBetween`,type:`number`,default:`0`,description:`슬라이드 사이 간격(px)입니다.`},{name:`multi`,type:`boolean`,default:`false`,description:`자동 너비 다중 슬라이드 레이아웃입니다.`},{name:`centered`,type:`boolean`,default:`false`,description:`활성 슬라이드를 가운데 정렬합니다.`},{name:`gridRows`,type:`number`,default:`1`,description:`2 이상이면 다행 그리드를 사용합니다.`},{name:`gridFill`,type:`'row' | 'column'`,default:`'row'`,description:`그리드 채움 방향입니다.`}]),j(`Carousel API · 자동 재생과 효과`,[{name:`autoplay`,type:`boolean`,default:`false`,description:`슬라이드를 자동 재생합니다.`},{name:`delay`,type:`number`,default:`4000`,description:`자동 재생 간격(ms)입니다.`},{name:`autoplayToggle`,type:`boolean`,default:`false`,description:`재생·정지 버튼을 표시합니다.`},{name:`coverflowStyle`,type:`'tilt' | 'rise'`,default:`'tilt'`,description:`커버플로우의 회전 또는 축소 스타일입니다.`},{name:`coverflowSides`,type:`1 | 1.5 | 2 | 'auto'`,default:`1.5`,description:`활성 슬라이드 좌우 노출 범위입니다.`},{name:`coverflowEffect`,type:`object`,default:`—`,description:`Swiper 커버플로우 상세 옵션입니다.`}]),j(`Carousel API · 썸네일`,[{name:`thumbs`,type:`Swiper`,default:`—`,description:`연결할 썸네일 Swiper 인스턴스입니다.`},{name:`thumbsControl`,type:`boolean`,default:`false`,description:`썸네일 컨트롤 캐러셀로 동작합니다.`},{name:`watchSlidesProgress`,type:`boolean`,default:`false`,description:`썸네일 연결을 위해 진행 상태를 감시합니다.`},{name:`freeMode`,type:`boolean`,default:`false`,description:`자유 스크롤 모드를 사용합니다.`},{name:`onSwiper · @swiper`,type:`callback`,default:`—`,description:`생성된 Swiper 인스턴스를 전달합니다.`}]),j(`CarouselSlide · HTML`,[{name:`children · default slot`,type:`ReactNode`,default:`—`,description:`슬라이드 콘텐츠입니다.`},{name:`data-swiper`,type:`attribute`,default:`—`,description:`HTML/Gulp 캐러셀 초기화 대상입니다.`},{name:`data-swiper-effect · data-swiper-loop · data-swiper-autoplay`,type:`attribute`,default:`—`,description:`HTML/Gulp 효과와 동작을 설정합니다.`},{name:`data-swiper-slides-per-view · data-swiper-space-between`,type:`attribute`,default:`—`,description:`HTML/Gulp 슬라이드 배치를 설정합니다.`},{name:`data-swiper-grid-rows · data-swiper-thumbs`,type:`attribute`,default:`—`,description:`HTML/Gulp 그리드와 썸네일 연결을 설정합니다.`}]),j(`디자인 토큰`,[{name:`--carousel-height · --carousel-radius`,type:`length`,default:`16rem · radius-lg`,description:`슬라이드 영역 높이와 모서리입니다.`},{name:`--carousel-nav-size · --carousel-nav-offset`,type:`length`,default:`2.25rem · space-md`,description:`내비게이션 크기와 위치입니다.`},{name:`--carousel-dot-size · --carousel-dot-size-active`,type:`length`,default:`0.5rem · 1.25rem`,description:`페이지네이션 점 크기입니다.`},{name:`--carousel-toggle-size`,type:`length`,default:`2rem`,description:`재생·정지 버튼 크기입니다.`}]),j(`WebSquare API · XML`,[{name:`w2:group.carousel`,type:`XML element · class`,default:`role='region'`,description:`Carousel 루트입니다. aria-roledescription="carousel"과 aria-label을 함께 사용합니다.`},{name:`swiper-wrapper · swiper-slide`,type:`class`,default:`—`,description:`슬라이드 래퍼와 개별 슬라이드입니다.`},{name:`data-swiper-effect · data-swiper-loop · data-swiper-autoplay`,type:`attribute`,default:`—`,description:`전환 효과, 루프, 자동 재생 설정입니다.`},{name:`xf:trigger.carousel_prev · carousel_next`,type:`XML element · class`,default:`—`,description:`이전·다음 내비게이션 버튼입니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`슬라이드 이동을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function P(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...v(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b,{of:d}),`
`,(0,I.jsx)(t.h1,{id:`carousel`,children:`Carousel`}),`
`,(0,I.jsx)(t.p,{children:`여러 콘텐츠를 가로로 탐색하는 Swiper 기반 캐러셀입니다. 키보드·터치 탐색과 다양한 전환 효과, 페이지네이션, 자동 재생을 지원합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,I.jsxs)(t.p,{children:[`루트 슬라이더는 `,(0,I.jsx)(t.code,{children:`role="region"`}),`, `,(0,I.jsx)(t.code,{children:`aria-roledescription="carousel"`}),`, `,(0,I.jsx)(t.code,{children:`aria-label`}),`을 제공합니다. 이전·다음 버튼, 페이지네이션, 자동 재생 토글은 키보드로 조작할 수 있습니다.`]}),`
`,(0,I.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,I.jsx)(t.code,{children:`w2:group.carousel`}),`, 슬라이드를 `,(0,I.jsx)(t.code,{children:`w2:group.swiper-slide`}),`, 이전·다음을 `,(0,I.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,I.jsx)(t.code,{children:`w2`}),`, `,(0,I.jsx)(t.code,{children:`xf`}),`, `,(0,I.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,I.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,I.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Carousel과 CarouselSlide의 실제 원본 구현입니다. React와 Vue는 페이드·커버플로우, 자동 재생, 다중 슬라이드, 페이지네이션과 썸네일 연결을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.code,{children:`effect`}),`로 fade·coverflow 전환을 선택합니다.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.code,{children:`pagination`}),`은 bullets·fraction·progressbar·custom을 지원합니다.`]}),`
`,(0,I.jsxs)(t.li,{children:[`루트는 `,(0,I.jsx)(t.code,{children:`role="region"`}),`과 `,(0,I.jsx)(t.code,{children:`aria-roledescription="carousel"`}),`을 사용합니다.`]}),`
`]}),`
`,(0,I.jsx)(T,{examples:k,showFullCode:!0}),`
`,(0,I.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,I.jsxs)(t.p,{children:[(0,I.jsx)(t.code,{children:`w2:group.carousel`}),`에 `,(0,I.jsx)(t.code,{children:`role="region"`}),`과 `,(0,I.jsx)(t.code,{children:`aria-label`}),`을 적용하고 슬라이드를 `,(0,I.jsx)(t.code,{children:`swiper-wrapper`}),` 안에 배치합니다. 이전·다음은 `,(0,I.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,I.jsx)(t.code,{children:`ev:onclick`}),`에서 화면 스크립트로 이동합니다.`]}),`
`,(0,I.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,I.jsx)(x,{of:f,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.default}),`
`,(0,I.jsx)(t.h2,{id:`페이드`,children:`페이드`}),`
`,(0,I.jsx)(x,{of:h,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.fade}),`
`,(0,I.jsx)(t.h2,{id:`자동-재생`,children:`자동 재생`}),`
`,(0,I.jsx)(x,{of:g,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.autoplay}),`
`,(0,I.jsx)(t.h2,{id:`무한-루프`,children:`무한 루프`}),`
`,(0,I.jsx)(x,{of:_,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.loop}),`
`,(0,I.jsx)(t.h2,{id:`슬라이드-per-view`,children:`슬라이드 per view`}),`
`,(0,I.jsx)(x,{of:i,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.multi}),`
`,(0,I.jsx)(t.h2,{id:`슬라이드-간격`,children:`슬라이드 간격`}),`
`,(0,I.jsx)(x,{of:u,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.space}),`
`,(0,I.jsx)(t.h2,{id:`페이지네이션`,children:`페이지네이션`}),`
`,(0,I.jsx)(x,{of:a,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.pagination}),`
`,(0,I.jsx)(t.h2,{id:`분수-페이지네이션`,children:`분수 페이지네이션`}),`
`,(0,I.jsx)(x,{of:r,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.fraction}),`
`,(0,I.jsx)(t.h2,{id:`프로그레스-페이지네이션`,children:`프로그레스 페이지네이션`}),`
`,(0,I.jsx)(x,{of:p,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.progress}),`
`,(0,I.jsx)(t.h2,{id:`커스텀-페이지네이션`,children:`커스텀 페이지네이션`}),`
`,(0,I.jsx)(x,{of:n,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.custom}),`
`,(0,I.jsx)(t.h2,{id:`그리드`,children:`그리드`}),`
`,(0,I.jsx)(x,{of:l,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.grid}),`
`,(0,I.jsx)(t.h2,{id:`커버플로우`,children:`커버플로우`}),`
`,(0,I.jsx)(x,{of:m,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.coverflow}),`
`,(0,I.jsx)(t.h2,{id:`커버플로우--축소`,children:`커버플로우 · 축소`}),`
`,(0,I.jsx)(x,{of:c,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.coverflowRise}),`
`,(0,I.jsx)(t.h2,{id:`썸네일-갤러리`,children:`썸네일 갤러리`}),`
`,(0,I.jsx)(x,{of:s,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:D.thumbs}),`
`,(0,I.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,I.jsxs)(t.p,{children:[`루트 슬라이더는 `,(0,I.jsx)(t.code,{children:`role="region"`}),`, `,(0,I.jsx)(t.code,{children:`aria-roledescription="carousel"`}),`, `,(0,I.jsx)(t.code,{children:`aria-label`}),`을 제공합니다. 이전·다음 버튼, 페이지네이션, 자동 재생 토글은 키보드로 조작할 수 있습니다.`]}),`
`,(0,I.jsx)(E,{sections:M})]})}function F(e={}){let{wrapper:t}={...v(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),y(),S(),C(),w(),O(),N(),o()})))()}L();export{F as default};
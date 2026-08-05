import{A as e,B as t,D as n,F as r,H as i,I as a,K as o,L as s,M as ee,R as te,U as c,Y as l,b as u,d,f,i as p,k as m,m as h,nt as g,p as _,st as v,u as y,v as ne,wt as b,xt as x,y as S,z as C}from"./CCnt5OSV.js";/* empty css        */import{n as re}from"./v7S0VfYa.js";import{h as ie,l as w,t as T}from"./DkmWXf_S.js";import{n as ae,t as E}from"./D01l-9yr.js";import{t as D}from"./gHQDdAlU.js";import{t as O}from"./DD3RWXAt.js";import{r as k,t as A}from"./D6IbhUhQ.js";import{t as j}from"./COzQg8iZ.js";import{t as M}from"./-gIuMC1U.js";import{t as N}from"./Bal4U0O22.js";import{t as P}from"./DUv9yuh62.js";import{t as F}from"./7ZvA7D642.js";import{t as I}from"./CT_IFTmY2.js";import{t as L}from"./AUxlN8ez2.js";var oe=[`aria-label`,`data-swiper-space-between`,`data-swiper-effect`,`data-swiper-coverflow-style`,`data-swiper-coverflow-sides`,`data-swiper-pagination`,`data-swiper-grid-rows`,`data-swiper-slides-per-group`,`data-swiper-initial-slide`],se={class:`swiper-wrapper`},ce={key:0,class:`swiper-button-prev`,"aria-label":`이전 슬라이드`},le={key:1,class:`swiper-button-next`,"aria-label":`다음 슬라이드`},ue={key:2,class:`swiper-pagination`},de={key:0,class:`swiper-pagination`},fe=[`aria-label`,`aria-pressed`],R=Object.assign({inheritAttrs:!1},{__name:`Carousel`,props:{ripple:E,ariaLabel:{type:String,required:!0},demo:{type:Boolean,default:!0},multi:Boolean,dotsOutside:Boolean,autoplayToggle:Boolean,effect:String,autoplay:Boolean,delay:{type:Number,default:4e3},loop:Boolean,initialSlide:{type:Number,default:0},slidesPerView:{type:[Number,String],default:1},slidesPerGroup:{type:Number,default:1},spaceBetween:{type:Number,default:0},centered:Boolean,pagination:{type:[Boolean,String],default:!0},navigation:{type:Boolean,default:!0},gridRows:{type:Number,default:1},gridFill:{type:String,default:`row`},coverflowStyle:{type:String,default:`tilt`},coverflowSides:{type:[Number,String],default:1.5},coverflowEffect:{type:Object,default:null},thumbs:{type:Object,default:null},thumbsControl:Boolean,watchSlidesProgress:Boolean,freeMode:Boolean},emits:[`swiper`],setup(n,{expose:i,emit:a}){let l=n,u=a,{rippleAttrs:f,childRippleAttrs:p}=ae(l,{mode:`container`}),b=c(),x=g(null),S=g(null),C=g(null),w=g(!0),T=g(0),E=null,D=y(()=>[l.loop,l.initialSlide,T.value,l.multi,l.dotsOutside,l.slidesPerView,l.slidesPerGroup,l.spaceBetween,l.centered,l.effect,l.autoplay,l.delay,l.pagination,l.navigation,l.gridRows,l.gridFill,l.coverflowStyle,l.coverflowSides,l.coverflowEffect,l.thumbs,l.thumbsControl,l.watchSlidesProgress,l.freeMode]),O=y(()=>l.navigation!==!1),k=y(()=>l.pagination!==!1),A=y(()=>l.autoplay||l.autoplayToggle),j=y(()=>l.effect===`coverflow`),M=y(()=>j.value&&l.coverflowStyle===`rise`),N=y(()=>l.gridRows>1),P=y(()=>l.pagination===`custom`),F=y(()=>l.pagination===`progressbar`),I=y(()=>{let e=l.coverflowSides;return e===`1`||Number(e)===1?1:e===`2`||Number(e)===2?2:e===`auto`||e===`1.5`||Number(e)===1.5?1.5:e===`2.5`||Number(e)===2.5?2:1.5}),L=y(()=>j.value||l.multi||l.slidesPerView===`auto`?`auto`:l.slidesPerView),R=y(()=>{if(!j.value)return null;let e=I.value;return e===1?`carousel_coverflow-sides-1`:e===2?`carousel_coverflow-sides-2`:`carousel_coverflow-sides-15`}),z=g(``),B=g(null),pe=y(()=>{if(!j.value)return;let e={"--carousel-coverflow-gap":`${l.spaceBetween}px`};return z.value&&(e[`--carousel-coverflow-slide-width`]=z.value),e});function V(){if(!j.value||!x.value){z.value=``,B.value=null;return}let e=(S.value||x.value).clientWidth;if(!e)return;let t=I.value,n=(e-(Number(l.spaceBetween)||0)*2)/3,r=(e-n)/(2*t)-n;z.value=`${Math.round(n*100)/100}px`,B.value=Math.round(r*100)/100;let i=C.value;i&&!i.destroyed&&(i.params.spaceBetween=B.value)}let me=y(()=>[`carousel`,l.demo?`carousel_demo`:null,l.multi?`carousel_multi`:null,l.dotsOutside?`carousel_dots-outside`:null,j.value?`carousel_coverflow`:null,M.value?`carousel_coverflow-rise`:null,R.value,N.value?`carousel_grid`:null,P.value?`carousel_pagination-custom`:null,F.value?`carousel_pagination-progress`:null,l.thumbsControl?`carousel_thumbs`:null,A.value&&!w.value?`is-autoplay-paused`:null,b.class]),he=y(()=>{let{class:e,...t}=b;return{...t,...f.value}}),ge=y(()=>l.pagination===`fraction`?`fraction`:l.pagination===`progressbar`?`progressbar`:`bullets`),H={rotate:24,stretch:0,depth:140,modifier:1,slideShadows:!0},U={rotate:0,stretch:0,depth:28,scale:.92,modifier:1,slideShadows:!1};function W(){T.value+=1}function _e(){T.value=Math.max(0,T.value-1)}function ve(){let e=C.value;e?.autoplay&&(e.autoplay.running?(e.autoplay.stop(),w.value=!1):(e.autoplay.start(),w.value=!0))}function G(){C.value?.destroy(!0,!0),C.value=null}function ye(){let e=I.value;return e===1?6:e===1.5?8:10}function be(){if(!l.loop||T.value<2||N.value)return!1;let e=L.value;if(j.value)return T.value>=ye();if(e===`auto`||l.multi||l.slidesPerView===`auto`)return T.value>=4;let t=(typeof e==`number`?e:1)+1+ +!!l.centered;return T.value>=t}function K(){let e=l.thumbs;return!e||e.destroyed?null:e}function xe(){let e=x.value?.querySelector(`.swiper-pagination`),t=x.value?.querySelector(`.swiper-button-next`),n=x.value?.querySelector(`.swiper-button-prev`),r={loop:be(),initialSlide:l.initialSlide,slidesPerView:L.value,spaceBetween:j.value&&B.value!=null?B.value:l.spaceBetween,centeredSlides:l.centered||j.value,grabCursor:!0,keyboard:{enabled:!0},observer:!0,observeParents:!0,watchOverflow:!j.value,watchSlidesProgress:l.watchSlidesProgress||l.thumbsControl||j.value};if(j.value&&(r.centeredSlides=!0,r.loop&&(r.loopAdditionalSlides=0,r.loopAddBlankSlides=!1)),l.slidesPerGroup>1&&(r.slidesPerGroup=l.slidesPerGroup),l.freeMode&&(r.freeMode=!0),l.thumbsControl&&(r.slideToClickedSlide=!0),l.effect===`fade`&&(r.effect=`fade`,r.fadeEffect={crossFade:!0}),j.value&&(r.effect=`coverflow`,r.coverflowEffect=M.value?{...U,...l.coverflowEffect||{}}:{...H,...l.coverflowEffect||{}}),N.value&&(r.grid={rows:l.gridRows,fill:l.gridFill===`column`?`column`:`row`}),l.autoplay&&(r.autoplay={delay:l.delay,disableOnInteraction:!1}),k.value&&e){let t={el:e,clickable:!0,type:ge.value};P.value&&(t.renderBullet=(e,t)=>`<span class="${t}">${e+1}</span>`),r.pagination=t}O.value&&t&&n&&(r.navigation={nextEl:t,prevEl:n});let i=K();return i&&(r.thumbs={swiper:i,autoScrollOffset:0}),r}function Se(e,t){if(!e||e.destroyed)return;e.updateSize?.(),e.updateSlides?.();let n=e.slides?.length??0;if(!n||!e.size)return;let r=Math.max(0,Math.min(t,n-1)),i=e.slides[r];if(!i)return;let a=e.slidesGrid?.[r],o=e.slidesSizesGrid?.[r];(a==null||o==null)&&(a=i.offsetLeft??0,o=i.offsetWidth??0);let s=-(a-e.size/2+o/2),ee=e.minTranslate(),te=e.maxTranslate();s=Math.min(ee,Math.max(te,s));let c=typeof e.getTranslate==`function`?e.getTranslate():0;Math.abs(c-s)<.5||(e.setTransition(e.params.speed??300),e.setTranslate(s),e.updateProgress(s),e.updateActiveIndex?.(),e.updateSlidesClasses?.())}function q(e,t){!e||e.destroyed||requestAnimationFrame(()=>{requestAnimationFrame(()=>{Se(e,t)})})}function Ce(e){if(!e||e.destroyed)return;let t=()=>{let t=Array.from(e.slides).find(e=>e.classList?.contains(`swiper-slide-thumb-active`));return t?e.slides.indexOf(t):e.clickedIndex??e.activeIndex},n=()=>{q(e,t())};e.on(`click`,()=>{e.clickedIndex!=null&&q(e,e.clickedIndex)}),e.on(`slideChange`,n),e.on(`slideChangeTransitionEnd`,n),requestAnimationFrame(()=>{e.destroyed||(e.setTransition(0),e.setTranslate(0),e.updateProgress(0))})}function J(e){if(!e||e.destroyed)return;let t=K();if(!t||t.destroyed)return;let n=()=>{let n=e.realIndex??e.activeIndex??0;q(t,n)};e.on(`slideChange`,n),e.on(`slideChangeTransitionStart`,n),e.on(`slideChangeTransitionEnd`,n)}async function Y(){!S.value||T.value===0||(V(),await e(),G(),C.value=new re(S.value,xe()),w.value=!!l.autoplay,u(`swiper`,C.value),l.thumbsControl?Ce(C.value):K()&&J(C.value),await e(),requestAnimationFrame(()=>{let e=C.value;if(!(!e||e.destroyed)){if(V(),e.update(),j.value&&e.params.loop){let t=l.initialSlide||0;typeof e.slideToLoop==`function`&&e.slideToLoop(t,0,!1)}if(!l.thumbsControl&&K()){let t=e.realIndex??0;q(K(),t)}}}))}return te(`carousel`,{registerSlide:W,unregisterSlide:_e}),i({swiper:C}),ie(()=>l,T,x,b),o(D,async()=>{T.value!==0&&(await e(),Y())},{flush:`post`}),r(async()=>{await e(),V(),Y(),x.value&&typeof ResizeObserver<`u`&&(E=new ResizeObserver(()=>{V(),C.value?.update()}),E.observe(x.value))}),ee(()=>{E?.disconnect(),E=null,G()}),(e,r)=>(s(),h(`div`,m({ref_key:`rootRef`,ref:x,class:me.value,style:pe.value},he.value),[d(`div`,{ref_key:`swiperEl`,ref:S,class:`swiper`,role:`region`,"aria-roledescription":`carousel`,"aria-label":n.ariaLabel,"data-swiper-space-between":n.spaceBetween>0?String(n.spaceBetween):void 0,"data-swiper-effect":n.effect||void 0,"data-swiper-coverflow-style":j.value&&n.coverflowStyle!==`tilt`?n.coverflowStyle:void 0,"data-swiper-coverflow-sides":j.value?String(I.value):void 0,"data-swiper-pagination":typeof n.pagination==`string`?n.pagination:void 0,"data-swiper-grid-rows":n.gridRows>1?String(n.gridRows):void 0,"data-swiper-slides-per-group":n.slidesPerGroup>1?String(n.slidesPerGroup):void 0,"data-swiper-initial-slide":n.initialSlide>0?String(n.initialSlide):void 0},[d(`div`,se,[t(e.$slots,`default`)]),O.value?(s(),h(`div`,ce)):_(``,!0),O.value?(s(),h(`div`,le)):_(``,!0),k.value&&!n.dotsOutside?(s(),h(`div`,ue)):_(``,!0)],8,oe),k.value&&n.dotsOutside?(s(),h(`div`,de)):_(``,!0),A.value?(s(),h(`button`,m({key:1},v(p),{type:`button`,class:`carousel_toggle`,"data-carousel-autoplay-toggle":``,"aria-label":w.value?`슬라이드 정지`:`슬라이드 재생`,"aria-pressed":String(w.value),onClick:ve}),[...r[0]||=[ne(`<svg class="carousel_toggle-icon carousel_toggle-icon-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg><svg class="carousel_toggle-icon carousel_toggle-icon-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>`,2)]],16,fe)):_(``,!0)],16))}}),z={class:`swiper-slide`},B={__name:`CarouselSlide`,setup(e){let i=n(`carousel`,null);return r(()=>{i?.registerSlide?.()}),a(()=>{i?.unregisterSlide?.()}),(e,n)=>(s(),h(`div`,z,[t(e.$slots,`default`)]))}},pe=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],V=[{name:`aria-label`,type:`string`,default:`—`,description:`캐러셀 접근성 라벨 (필수)`},{name:`demo`,type:`boolean`,default:`true`,description:`carousel_demo 클래스 적용`},{name:`multi`,type:`boolean`,default:`false`,description:`carousel_multi — slides per view auto 레이아웃`},{name:`dots-outside`,type:`boolean`,default:`false`,description:`carousel_dots-outside — 페이지네이션을 뷰포트 밖에 배치`},{name:`autoplay-toggle`,type:`boolean`,default:`false`,description:`재생·정지 버튼 표시. autoplay가 활성이면 기본으로 함께 표시됩니다.`},{name:`effect`,type:`'fade' | 'coverflow'`,default:`—`,description:`전환 효과. 생략 시 슬라이드`},{name:`autoplay`,type:`boolean`,default:`false`,description:`자동 재생. 재생·정지 버튼이 함께 표시됩니다.`},{name:`delay`,type:`number`,default:`4000`,description:`자동 재생 간격(ms)`},{name:`loop`,type:`boolean`,default:`false`,description:`무한 루프`},{name:`initial-slide`,type:`number`,default:`0`,description:`시작 슬라이드 인덱스 (0부터). 커버플로우·축소 기본은 첫 슬라이드(0), 예: :initial-slide="2"`},{name:`slides-per-view`,type:`number | 'auto'`,default:`1`,description:`동시 표시 슬라이드 수`},{name:`slides-per-group`,type:`number`,default:`1`,description:`한 번에 이동하는 슬라이드 수. 그리드에서는 slides-per-view × grid-rows(예: 3×2=6)로 페이지 단위 이동`},{name:`space-between`,type:`number`,default:`0`,description:`슬라이드 간격(px). Swiper spaceBetween에 전달. multi·grid·coverflow와 함께 사용`},{name:`centered`,type:`boolean`,default:`false`,description:`활성 슬라이드 중앙 정렬. coverflow일 때 자동 적용`},{name:`pagination`,type:`boolean | 'fraction' | 'progressbar' | 'custom'`,default:`true`,description:`페이지네이션 표시. fraction·progressbar·custom(번호) 지원`},{name:`navigation`,type:`boolean`,default:`true`,description:`이전·다음 화살표 표시`},{name:`grid-rows`,type:`number`,default:`1`,description:`Grid 행 수. 2 이상이면 Grid 레이아웃`},{name:`grid-fill`,type:`'row' | 'column'`,default:`'row'`,description:`Grid 채움 방향`},{name:`coverflow-style`,type:`'tilt' | 'rise'`,default:`'tilt'`,description:`coverflow 스타일. tilt는 좌우 기울임, rise는 기울임 없이 측면 슬라이드만 축소`},{name:`coverflow-sides`,type:`1 | 1.5 | 2 | 'auto'`,default:`1.5`,description:`활성 기준 좌·우 노출 수. 슬라이드 크기는 항상 1 기준(동일). 1.5·2는 간격을 좁혀 peek만 늘림`},{name:`coverflow-effect`,type:`object`,default:`—`,description:`coverflow/rise 효과 세부 옵션. 지정 시 스타일 프리셋에 병합`},{name:`thumbs`,type:`Swiper`,default:`—`,description:`Thumbs로 연결할 썸네일 Swiper 인스턴스`},{name:`thumbs-control`,type:`boolean`,default:`false`,description:`썸네일 컨트롤 캐러셀. 탭 네비처럼 시작 좌측 정렬, 중간은 활성 가운데, 끝은 우측(잘림 없이 클램프)`},{name:`watch-slides-progress`,type:`boolean`,default:`false`,description:`슬라이드 진행 상태 감시 (Thumbs 연동용)`},{name:`free-mode`,type:`boolean`,default:`false`,description:`Free mode. thumbs-control과 함께 쓰면 가운데 스냅이 약해질 수 있음`},k],me=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],he=[{name:`default`,description:`CarouselSlide 자식 슬라이드`}],ge=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],H=[{name:`carousel`,description:`루트 래퍼 (디자인 토큰·레이아웃)`},{name:`carousel_demo`,description:`데모 영역 전체 너비`},{name:`carousel_multi`,description:`slides per view auto 레이아웃`},{name:`carousel_toggle`,description:`자동 재생 재생·정지 버튼`},{name:`carousel_dots-outside`,description:`페이지네이션을 뷰포트 밖에 배치`},{name:`carousel_coverflow`,description:`coverflow 효과 레이아웃`},{name:`carousel_coverflow-rise`,description:`coverflow rise — 기울임 없이 측면 슬라이드 축소`},{name:`carousel_coverflow-sides-1 · sides-15 · sides-2`,description:`coverflow 좌·우 노출 개수 (1 / 1.5 / 2)`},{name:`carousel_grid`,description:`Grid 다행 레이아웃`},{name:`carousel_gallery`,description:`메인+썸네일 갤러리 래퍼`},{name:`carousel_thumbs`,description:`썸네일 컨트롤 캐러셀`},{name:`carousel_pagination-progress`,description:`progressbar 페이지네이션`},{name:`carousel_pagination-custom`,description:`번호 커스텀 페이지네이션`},{name:`swiper · swiper-wrapper · swiper-slide`,description:`Swiper 표준 구조`},{name:`data-swiper`,description:`HTML 마크업 Swiper 초기화 대상`},{name:`data-swiper-effect`,description:`HTML 전환 효과 (fade · coverflow)`},{name:`data-swiper-coverflow-style`,description:`HTML coverflow 스타일 (tilt · rise)`},{name:`data-swiper-coverflow-sides`,description:`HTML coverflow 좌·우 노출 수 (1 · 1.5 · 2)`},{name:`data-swiper-autoplay · data-swiper-delay`,description:`HTML 자동 재생`},{name:`data-swiper-loop`,description:`HTML 무한 루프`},{name:`data-swiper-initial-slide`,description:`HTML 시작 슬라이드 인덱스`},{name:`data-swiper-slides-per-view · data-swiper-space-between`,description:`HTML 슬라이드 레이아웃`},{name:`data-swiper-slides-per-group`,description:`HTML 한 번에 이동하는 슬라이드 수 (그룹 이동)`},{name:`data-swiper-centered`,description:`HTML 중앙 정렬`},{name:`data-swiper-pagination`,description:`HTML 페이지네이션 유형 (fraction · progressbar · custom)`},{name:`data-swiper-grid-rows · data-swiper-grid-fill`,description:`HTML Grid 행·채움 방향`},{name:`data-swiper-thumbs`,description:`HTML Thumbs 대상 셀렉터`},{name:`is-autoplay-paused`,description:`사용자가 정지한 자동 재생 상태`},...A],U=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],W=[{name:`--carousel-height · --carousel-radius · --carousel-bg`,default:`16rem · var(--radius-lg) · var(--color-surface-raised)`,description:`슬라이드 영역(md)`},{name:`--carousel-font-size · --carousel-transition`,default:`var(--text-size-sm) · 0.35s ease`,description:`타이포·전환`},{name:`--carousel-nav-size · --carousel-nav-icon-size · --carousel-nav-offset`,default:`2.25rem · 0.875rem · var(--space-md)`,description:`이전/다음 버튼(md)`},{name:`--carousel-nav-bg · --carousel-nav-color`,default:`var(--color-surface) · var(--color-text)`,description:`네비게이션 색`},{name:`--carousel-dot-gap · --carousel-dot-size · --carousel-dot-size-active`,default:`0.375rem · 0.5rem · 1.25rem`,description:`인디케이터 점`},{name:`--carousel-dot-bg · --carousel-dot-bg-active`,default:`var(--color-border) · var(--color-accent)`,description:`점 색상`},{name:`--carousel-dots-padding-y · --carousel-dots-padding-x`,default:`var(--space-md) · var(--space-md)`,description:`인디케이터 영역 패딩`},{name:`--carousel-toggle-size · --carousel-toggle-icon-size`,default:`2rem · 1rem`,description:`재생/일시정지 토글`},{name:`--carousel-height-sm · --carousel-nav-size-sm`,default:`11rem · 1.875rem`,description:`sm 크기`},{name:`--carousel-height-lg · --carousel-nav-size-lg`,default:`20rem · 2.75rem`,description:`lg 크기`}],_e=[{title:`신규 가입 혜택`,mediaLabel:`신규 가입 혜택`,iconParts:[{el:`path`,attrs:{d:`M20 12v10H4V12`}},{el:`path`,attrs:{d:`M2 7h20v5H2z`}},{el:`path`,attrs:{d:`M12 22V7`}}],tag:{variant:`solid`,color:`primary`,label:`이벤트`},body:`지금 가입하면 첫 주문 20% 할인 쿠폰을 드립니다.`,footer:{type:`button`,label:`혜택 받기`}},{title:`무료 배송`,mediaLabel:`무료 배송`,iconParts:[{el:`rect`,attrs:{x:1,y:3,width:15,height:13}},{el:`polygon`,attrs:{points:`16 8 20 8 23 11 23 16 16 16 16 8`}}],tag:{variant:`solid`,color:`success`,label:`혜택`},body:`3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.`},{title:`시즌 세일`,mediaLabel:`시즌 세일`,iconParts:[{el:`path`,attrs:{d:`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z`}}],tag:{variant:`solid`,color:`warning`,label:`세일`},body:`베스트셀러 상품 최대 50% 할인. 이번 주말까지 진행됩니다.`}],ve=[{overline:`업데이트`,title:`디자인 시스템 v2`,lead:`새로운 토큰과 컴포넌트로 일관된 UI를 구축하세요.`,accentClass:`card_accent color_primary card_elevated`,footer:{type:`between`,link:{href:`#`,label:`자세히 보기`},button:{label:`시작하기`,variant:`filled`}}},{overline:`테마`,title:`다크 모드 지원`,lead:`라이트·다크 테마를 자동으로 전환합니다.`,accentClass:`card_accent color_info card_elevated`,footer:{type:`button`,label:`미리보기`,variant:`outline`}},{overline:`접근성`,title:`접근성 우선`,lead:`키보드·스와이프·ARIA 속성을 기본 제공합니다.`,accentClass:`card_accent color_success card_elevated`}],G=[{title:`오늘의 추천`,badge:{color:`primary`,dot:!0,label:`HOT`},body:`인기 상품을 슬라이드 전환으로 자동 재생합니다.`,footer:{type:`button`,label:`보러 가기`}},{title:`타임 세일`,tag:{size:`sm`,color:`warning`,label:`24h`},body:`한정 수량 특가. 슬라이드로 넘기며 확인하세요.`},{title:`신규 입고`,tag:{size:`sm`,color:`success`,label:`NEW`},body:`이번 주 새로 들어온 상품을 만나보세요.`}],ye=[{title:`무선 이어폰 Pro`,body:`노이즈 캔슬링과 30시간 배터리.`,price:`₩189,000`,tag:{size:`sm`,color:`primary`,label:`신상품`}},{title:`스마트 워치 S3`,body:`건강 모니터링과 GPS 추적.`,price:`₩329,000`,tag:{size:`sm`,color:`success`,label:`베스트`}},{title:`휴대용 스피커 Mini`,body:`방수 IPX7 · 12시간 재생.`,price:`₩79,000`,tag:{size:`sm`,color:`warning`,label:`할인`}}],be=[{title:`프론트엔드`,subtitle:`컴포넌트 기반 UI`,tag:{size:`sm`,color:`primary`,label:`React`}},{title:`백엔드`,subtitle:`REST · GraphQL`,tag:{size:`sm`,color:`success`,label:`API`}},{title:`디자인`,subtitle:`토큰 · 시스템`,tag:{size:`sm`,color:`warning`,label:`Design`}},{title:`접근성`,subtitle:`WCAG 2.2`,tag:{size:`sm`,color:`info`,label:`A11y`}}],K=[{title:`슬라이드 A`,subtitle:`12px 간격`},{title:`슬라이드 B`,subtitle:`카드 조합`},{title:`슬라이드 C`,subtitle:`스와이프 지원`}],xe=[{title:`슬라이드 1`,subtitle:`터치·스와이프로 전환합니다.`},{title:`슬라이드 2`,subtitle:`도트를 클릭해 이동할 수 있습니다.`},{title:`슬라이드 3`,subtitle:`grab cursor가 적용됩니다.`}],Se=[{title:`1 / 3`,lead:`분수 형식으로 진행 상태를 표시합니다.`,accentClass:`card_accent color_primary card_elevated`},{title:`2 / 3`,lead:`내비게이션 화살표와 함께 사용할 수 있습니다.`,accentClass:`card_accent color_info card_elevated`},{title:`3 / 3`,lead:`Swiper 공식 API를 그대로 따릅니다.`,accentClass:`card_accent color_success card_elevated`}],q=[{title:`프로그레스 바`,lead:`pagination="progressbar"로 진행률을 표시합니다.`,accentClass:`card_accent color_primary card_elevated`},{title:`하단 인디케이터`,lead:`슬라이드 하단에 진행 바가 채워집니다.`,accentClass:`card_accent color_info card_elevated`},{title:`터치·스와이프`,lead:`스와이프와 함께 진행 상태가 갱신됩니다.`,accentClass:`card_accent color_success card_elevated`}],Ce=[{title:`슬라이드 1`,subtitle:`번호 불릿으로 이동합니다.`},{title:`슬라이드 2`,subtitle:`커스텀 renderBullet을 사용합니다.`},{title:`슬라이드 3`,subtitle:`활성 번호가 강조됩니다.`},{title:`슬라이드 4`,subtitle:`접근성 라벨과 함께 사용하세요.`}],J=[{title:`그리드 A`,subtitle:`페이지 1 · 상품 목록`},{title:`그리드 B`,subtitle:`페이지 1 · 카탈로그`},{title:`그리드 C`,subtitle:`페이지 1 · 갤러리`},{title:`그리드 D`,subtitle:`페이지 1 · 포트폴리오`},{title:`그리드 E`,subtitle:`페이지 1 · 추천`},{title:`그리드 F`,subtitle:`페이지 1 · 신상품`},{title:`그리드 G`,subtitle:`페이지 2 · 베스트`},{title:`그리드 H`,subtitle:`페이지 2 · 특가`},{title:`그리드 I`,subtitle:`페이지 2 · 이벤트`},{title:`그리드 J`,subtitle:`페이지 2 · 컬렉션`},{title:`그리드 K`,subtitle:`페이지 2 · 시즌`},{title:`그리드 L`,subtitle:`페이지 2 · 인기`},{title:`그리드 M`,subtitle:`페이지 3 · 디지털`},{title:`그리드 N`,subtitle:`페이지 3 · 리빙`},{title:`그리드 O`,subtitle:`페이지 3 · 패션`},{title:`그리드 P`,subtitle:`페이지 3 · 뷰티`},{title:`그리드 Q`,subtitle:`페이지 3 · 스포츠`},{title:`그리드 R`,subtitle:`페이지 3 · 키즈`}],Y=[{title:`커버플로우 1`,mediaLabel:`커버플로우 1`,tag:{size:`sm`,color:`primary`,label:`Featured`},body:`중앙 슬라이드가 돋보이는 3D 효과입니다.`},{title:`커버플로우 2`,mediaLabel:`커버플로우 2`,tag:{size:`sm`,color:`success`,label:`Popular`},body:`좌우 슬라이드가 회전·깊이감으로 배치됩니다.`},{title:`커버플로우 3`,mediaLabel:`커버플로우 3`,tag:{size:`sm`,color:`warning`,label:`New`},body:`effect="coverflow"·loop로 끝단에서도 좌우가 균형 있게 보입니다.`},{title:`커버플로우 4`,mediaLabel:`커버플로우 4`,tag:{size:`sm`,color:`info`,label:`Pick`},body:`coverflow-sides로 좌·우 노출 개수를 조절합니다.`},{title:`커버플로우 5`,mediaLabel:`커버플로우 5`,tag:{size:`sm`,color:`primary`,label:`Best`},body:`상품·앨범 갤러리 UI에 적합합니다.`},{title:`커버플로우 6`,mediaLabel:`커버플로우 6`,tag:{size:`sm`,color:`success`,label:`Sale`},body:`loop 시 첫·끝 슬라이드에서도 이전·다음이 함께 보입니다.`},{title:`커버플로우 7`,mediaLabel:`커버플로우 7`,tag:{size:`sm`,color:`warning`,label:`Hot`},body:`활성 슬라이드는 항상 가운데에 정렬됩니다.`},{title:`커버플로우 8`,mediaLabel:`커버플로우 8`,tag:{size:`sm`,color:`info`,label:`More`},body:`슬라이드를 충분히 두어 loop·peek가 안정적으로 동작합니다.`},{title:`커버플로우 9`,mediaLabel:`커버플로우 9`,tag:{size:`sm`,color:`primary`,label:`Extra`},body:`coverflow-sides는 크기를 유지한 채 간격으로 peek만 조절합니다.`},{title:`커버플로우 10`,mediaLabel:`커버플로우 10`,tag:{size:`sm`,color:`success`,label:`Extra`},body:`여유 슬라이드로 첫·끝 로드에서도 좌우 peek가 유지됩니다.`},{title:`커버플로우 11`,mediaLabel:`커버플로우 11`,tag:{size:`sm`,color:`warning`,label:`Extra`},body:`sides=2 loop에 필요한 최소 장수를 맞춥니다.`},{title:`커버플로우 12`,mediaLabel:`커버플로우 12`,tag:{size:`sm`,color:`info`,label:`Extra`},body:`시작 슬라이드는 항상 1번(가운데)부터 보입니다.`}],we=[{title:`갤러리 1`,mediaLabel:`갤러리 메인 1`,thumbLabel:`썸네일 1`,body:`메인 슬라이드와 하단 썸네일이 양방향 연동됩니다.`,accentClass:`card_accent color_primary card_elevated`},{title:`갤러리 2`,mediaLabel:`갤러리 메인 2`,thumbLabel:`썸네일 2`,body:`썸네일을 클릭하면 메인 슬라이드가 이동합니다.`,accentClass:`card_accent color_info card_elevated`},{title:`갤러리 3`,mediaLabel:`갤러리 메인 3`,thumbLabel:`썸네일 3`,body:`thumbs prop과 @swiper 이벤트로 연결합니다.`,accentClass:`card_accent color_success card_elevated`},{title:`갤러리 4`,mediaLabel:`갤러리 메인 4`,thumbLabel:`썸네일 4`,body:`thumbs-control로 썸네일 캐러셀을 구성합니다.`,accentClass:`card_accent color_warning card_elevated`},{title:`갤러리 5`,mediaLabel:`갤러리 메인 5`,thumbLabel:`썸네일 5`,body:`한 화면에 4개만 보이므로 스와이프로 추가 썸네일을 확인할 수 있습니다.`,accentClass:`card_accent color_danger card_elevated`},{title:`갤러리 6`,mediaLabel:`갤러리 메인 6`,thumbLabel:`썸네일 6`,body:`메인 전환 시 활성 썸네일이 따라 이동합니다.`,accentClass:`card_accent color_primary card_elevated`},{title:`갤러리 7`,mediaLabel:`갤러리 메인 7`,thumbLabel:`썸네일 7`,body:`썸네일 영역을 스와이프해 이동을 확인해 보세요.`,accentClass:`card_accent color_info card_elevated`},{title:`갤러리 8`,mediaLabel:`갤러리 메인 8`,thumbLabel:`썸네일 8`,body:`slides-per-view보다 많은 썸네일로 가로 스크롤이 생깁니다.`,accentClass:`card_accent color_success card_elevated`}],Te=`import {
  carouselAutoplaySlides,
  carouselCoverflowSlides,
  carouselCustomPaginationSlides,
  carouselDefaultSlides,
  carouselFadeSlides,
  carouselFractionSlides,
  carouselGridSlides,
  carouselLoopSlides,
  carouselMultiSlides,
  carouselPaginationSlides,
  carouselPlaygroundSlides,
  carouselProgressSlides,
  carouselSpaceSlides,
  carouselThumbsSlides,
} from '@/doc/data/carousel-demos';`,Ee=`import Badge from '@/components/Badge.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
import Link from '@/components/Link.vue';
import Tag from '@/components/Tag.vue';`,X=`<script setup>
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide.vue';
${Ee}
${Te}
<\/script>

`,De=`<Card class="card_borderless card_elevated">
  <template #media>
    <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <component
          v-for="(part, index) in slide.iconParts"
          :key="index"
          :is="part.el"
          v-bind="part.attrs"
        />
      </svg>
    </div>
  </template>
  <CardHeader>
    <div class="card_header-row">
      <h3 class="card_title">{{ slide.title }}</h3>
      <Tag v-bind="slide.tag" />
    </div>
  </CardHeader>
  <CardBody>{{ slide.body }}</CardBody>
  <CardFooter v-if="slide.footer">
    <Button variant="filled" color="primary" size="sm" :label="slide.footer.label" />
  </CardFooter>
</Card>`,Oe=`<Card :class="slide.accentClass">
  <CardBody>
    <p class="typo_overline">{{ slide.overline }}</p>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.lead }}</p>
  </CardBody>
  <CardFooter v-if="slide.footer" :between="slide.footer.type === 'between'">
    <Link
      v-if="slide.footer.link"
      :href="slide.footer.link.href"
      color="primary"
      size="sm"
      :label="slide.footer.link.label"
    />
    <Button
      v-if="slide.footer.button"
      :variant="slide.footer.button.variant"
      color="primary"
      size="sm"
      :label="slide.footer.button.label"
    />
  </CardFooter>
</Card>`,ke=`<Card class="card_borderless card_elevated">
  <CardHeader>
    <div class="card_header-row">
      <h3 class="card_title">{{ slide.title }}</h3>
      <Badge v-if="slide.badge" v-bind="slide.badge" />
      <Tag v-else-if="slide.tag" v-bind="slide.tag" />
    </div>
  </CardHeader>
  <CardBody>{{ slide.body }}</CardBody>
  <CardFooter v-if="slide.footer">
    <Button
      v-if="slide.footer.type === 'button'"
      variant="filled"
      color="primary"
      size="sm"
      :label="slide.footer.label"
    />
    <Link
      v-else-if="slide.footer.type === 'link'"
      :href="slide.footer.href"
      color="primary"
      size="sm"
      :label="slide.footer.label"
    />
  </CardFooter>
</Card>`,Ae=`<Card variant="shadow">
  <CardHeader :title="slide.title" />
  <CardBody>{{ slide.body }}</CardBody>
  <CardFooter between>
    <strong>{{ slide.price }}</strong>
    <Tag v-bind="slide.tag" />
  </CardFooter>
</Card>`,je=`<Card variant="shadow">
  <CardBody>
    <Tag v-bind="slide.tag" />
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="card_subtitle">{{ slide.subtitle }}</p>
  </CardBody>
</Card>`,Z=`<Card variant="shadow">
  <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
</Card>`,Me=`<Card :class="slide.accentClass">
  <CardBody>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.lead }}</p>
  </CardBody>
</Card>`,Q=`<Card class="card_borderless card_elevated">
  <template #media>
    <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
      <span class="typo_overline">{{ slide.title }}</span>
    </div>
  </template>
  <CardHeader>
    <div class="card_header-row">
      <h3 class="card_title">{{ slide.title }}</h3>
      <Tag v-bind="slide.tag" />
    </div>
  </CardHeader>
  <CardBody>{{ slide.body }}</CardBody>
</Card>`,Ne=`<Card :class="slide.accentClass">
  <CardBody>
    <p class="typo_overline">{{ slide.mediaLabel }}</p>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.body }}</p>
  </CardBody>
</Card>`,Pe=`<Card variant="shadow">
  <CardHeader :title="slide.thumbLabel" />
</Card>`;function $(e,t){return`<CarouselSlide v-for="slide in ${e}" :key="slide.title">
      ${t}
    </CarouselSlide>`}var Fe=`${X}<template>
  <Carousel aria-label="프로모션 슬라이드">
    ${$(`carouselDefaultSlides`,De)}
  </Carousel>
</template>`,Ie=`${X}<template>
  <Carousel aria-label="페이드 슬라이드" effect="fade">
    ${$(`carouselFadeSlides`,Oe)}
  </Carousel>
</template>`,Le=`${X}<template>
  <Carousel
    aria-label="슬라이드 자동 재생"
    autoplay
    :delay="4000"
    loop
    dots-outside
  >
    ${$(`carouselAutoplaySlides`,ke)}
  </Carousel>
</template>`,Re=`${X}<template>
  <Carousel aria-label="루프 슬라이드" loop>
    ${$(`carouselLoopSlides`,Ae)}
  </Carousel>
</template>`,ze=`${X}<template>
  <Carousel
    aria-label="다중 슬라이드"
    multi
    slides-per-view="auto"
    :space-between="16"
    centered
    :navigation="false"
  >
    ${$(`carouselMultiSlides`,je)}
  </Carousel>
</template>`,Be=`${X}<template>
  <Carousel aria-label="기본 간격" :space-between="12" loop>
    ${$(`carouselSpaceSlides`,Z)}
  </Carousel>
</template>`,Ve=`${X}<template>
  <Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
    ${$(`carouselPaginationSlides`,Z)}
  </Carousel>
</template>`,He=`${X}<template>
  <Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
    ${$(`carouselFractionSlides`,Me)}
  </Carousel>
</template>`,Ue=`${X}<template>
  <Carousel aria-label="프로그레스 페이지네이션" pagination="progressbar" loop>
    ${$(`carouselProgressSlides`,Me)}
  </Carousel>
</template>`,We=`${X}<template>
  <Carousel
    aria-label="커스텀 페이지네이션"
    pagination="custom"
    loop
    :navigation="false"
  >
    ${$(`carouselCustomPaginationSlides`,Z)}
  </Carousel>
</template>`,Ge=`${X}<template>
  <div class="demo_preview-block">
    <h3 class="typo_overline">1장씩 이동</h3>
    <p class="typo_caption">slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p>
    <Carousel
      aria-label="그리드 1장씩"
      :slides-per-view="3"
      :grid-rows="2"
      :space-between="16"
    >
      ${$(`carouselGridSlides`,Z)}
    </Carousel>
  </div>

  <div class="demo_preview-block">
    <h3 class="typo_overline">그룹 이동</h3>
    <p class="typo_caption">:slides-per-group="6" — 한 화면(2행 × 3열) 단위로 페이지처럼 이동합니다.</p>
    <Carousel
      aria-label="그리드 그룹 이동"
      :slides-per-view="3"
      :grid-rows="2"
      :slides-per-group="6"
      :space-between="16"
    >
      ${$(`carouselGridSlides`,Z)}
    </Carousel>
  </div>
</template>`,Ke=`${X}<template>
  <Carousel
    aria-label="커버플로우 슬라이드"
    effect="coverflow"
    :coverflow-sides="1"
    :space-between="16"
    loop
    :pagination="false"
  >
    ${$(`carouselCoverflowSlides`,Q)}
  </Carousel>
</template>`,qe=`${X}<template>
  <div class="demo_preview-block">
    <h3 class="typo_overline">좌우 1개씩</h3>
    <p class="typo_caption">:coverflow-sides="1" — 슬라이드 크기 기준. 좌·우에 1개씩.</p>
    <Carousel
      aria-label="커버플로우 축소 좌우 1"
      effect="coverflow"
      coverflow-style="rise"
      :coverflow-sides="1"
      :space-between="16"
      loop
      :pagination="false"
    >
      ${$(`carouselCoverflowSlides`,Q)}
    </Carousel>
  </div>

  <div class="demo_preview-block">
    <h3 class="typo_overline">좌우 약 1.5개 (기본)</h3>
    <p class="typo_caption">:coverflow-sides="1.5" — 크기는 1과 동일, 간격으로 좌·우 약 1.5개 peek.</p>
    <Carousel
      aria-label="커버플로우 축소 좌우 1.5"
      effect="coverflow"
      coverflow-style="rise"
      :coverflow-sides="1.5"
      :space-between="16"
      loop
      :pagination="false"
    >
      ${$(`carouselCoverflowSlides`,Q)}
    </Carousel>
  </div>

  <div class="demo_preview-block">
    <h3 class="typo_overline">좌우 2개씩</h3>
    <p class="typo_caption">:coverflow-sides="2" — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.</p>
    <Carousel
      aria-label="커버플로우 축소 좌우 2"
      effect="coverflow"
      coverflow-style="rise"
      :coverflow-sides="2"
      :space-between="16"
      loop
      :pagination="false"
    >
      ${$(`carouselCoverflowSlides`,Q)}
    </Carousel>
  </div>
</template>`,Je=`${`<script setup>
import { ref } from 'vue';
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide.vue';
${Ee}
import { carouselThumbsSlides } from '@/doc/data/carousel-demos';

const thumbsSwiper = ref(null);
<\/script>

`}<template>
  <div class="carousel_gallery">
    <Carousel
      aria-label="갤러리 메인"
      :thumbs="thumbsSwiper"
      :pagination="false"
    >
      ${$(`carouselThumbsSlides`,Ne)}
    </Carousel>
    <Carousel
      aria-label="갤러리 썸네일"
      thumbs-control
      :slides-per-view="4"
      :space-between="8"
      :navigation="false"
      :pagination="false"
      @swiper="(swiper) => (thumbsSwiper = swiper)"
    >
      ${$(`carouselThumbsSlides`,Pe)}
    </Carousel>
  </div>
</template>`;`${X}${$(`carouselPlaygroundSlides`,Z)}`;var Ye=[`aria-label`],Xe={class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"aria-hidden":`true`},Ze={class:`card_header-row`},Qe={class:`card_title`},$e={class:`typo_overline`},et={class:`card_title`},tt={class:`typo_lead`},nt={class:`card_header-row`},rt={class:`card_title`},it={class:`card_title`},at={class:`card_subtitle`},ot={class:`card_title`},st={class:`typo_lead`},ct={class:`card_title`},lt={class:`typo_lead`},ut={class:`demo_preview-block`},dt={class:`demo_preview-block`},ft=[`aria-label`],pt={class:`typo_overline`},mt={class:`card_header-row`},ht={class:`card_title`},gt={class:`demo_preview-block`},_t=[`aria-label`],vt={class:`typo_overline`},yt={class:`card_header-row`},bt={class:`card_title`},xt={class:`demo_preview-block`},St=[`aria-label`],Ct={class:`typo_overline`},wt={class:`card_header-row`},Tt={class:`card_title`},Et={class:`demo_preview-block`},Dt=[`aria-label`],Ot={class:`typo_overline`},kt={class:`card_header-row`},At={class:`card_title`},jt={class:`carousel_gallery`},Mt={class:`typo_overline`},Nt={class:`card_title`},Pt={class:`typo_lead`},Ft={title:`Carousel | UXKM Guide`,activeNav:`carousel`,pageTitle:`Carousel`},It={__name:`carousel`,setup(e){let t=g(null);return(e,n)=>(s(),h(p,null,[n[12]||=ne(`<div class="page_intro"><h1>Carousel</h1><p class="lead"><a href="https://swiperjs.com/demos" class="link color_primary" target="_blank" rel="noopener noreferrer">Swiper</a> 라이브러리 기반 Nuxt 컴포넌트입니다. Swiper 인스턴스는 클라이언트 마운트 후 초기화되며, 표준 <code class="typo_code">swiper</code> · <code class="typo_code">swiper-wrapper</code> · <code class="typo_code">swiper-slide</code> 마크업을 사용하며, 슬라이드 콘텐츠는 <code class="typo_code">Card</code> · <code class="typo_code">Tag</code> · <code class="typo_code">Button</code> 등 기존 컴포넌트를 조합합니다. </p></div>`,1),u(O,{"heading-id":`default-heading`,title:`기본`,description:`Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다.`,code:v(Fe)},{default:l(()=>[u(R,{"aria-label":`프로모션 슬라이드`},{default:l(()=>[(s(!0),h(p,null,C(v(_e),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:`card_borderless card_elevated`},{media:l(()=>[d(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":e.mediaLabel},[(s(),h(`svg`,Xe,[(s(!0),h(p,null,C(e.iconParts,(e,t)=>(s(),f(i(e.el),m({key:t},{ref_for:!0},e.attrs),null,16))),128))]))],8,Ye)]),default:l(()=>[u(I,null,{default:l(()=>[d(`div`,Ze,[d(`h3`,Qe,b(e.title),1),u(L,m({ref_for:!0},e.tag),null,16)])]),_:2},1024),u(P,null,{default:l(()=>[S(b(e.body),1)]),_:2},1024),e.footer?(s(),f(F,{key:0},{default:l(()=>[u(D,{variant:`filled`,color:`primary`,size:`sm`,label:e.footer.label},null,8,[`label`])]),_:2},1024)):_(``,!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`fade-heading`,title:`페이드`,description:`Swiper Effect fade 데모입니다. effect="fade" prop으로 페이드 전환을 적용합니다.`,code:v(Ie)},{default:l(()=>[u(R,{"aria-label":`페이드 슬라이드`,effect:`fade`},{default:l(()=>[(s(!0),h(p,null,C(v(ve),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:x(e.accentClass)},{default:l(()=>[u(P,null,{default:l(()=>[d(`p`,$e,b(e.overline),1),d(`h3`,et,b(e.title),1),d(`p`,tt,b(e.lead),1)]),_:2},1024),e.footer?(s(),f(F,{key:0,between:e.footer.type===`between`},{default:l(()=>[e.footer.link?(s(),f(j,{key:0,href:e.footer.link.href,color:`primary`,size:`sm`,label:e.footer.link.label},null,8,[`href`,`label`])):_(``,!0),e.footer.button?(s(),f(D,{key:1,variant:e.footer.button.variant,color:`primary`,size:`sm`,label:e.footer.button.label},null,8,[`variant`,`label`])):_(``,!0)]),_:2},1032,[`between`])):_(``,!0)]),_:2},1032,[`class`])]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`autoplay-heading`,title:`자동 재생`,description:`autoplay prop으로 자동 재생과 재생·정지 버튼을 제공합니다. 페이드 전환은 페이드 섹션을 참고하세요.`,code:v(Le)},{default:l(()=>[u(R,{"aria-label":`슬라이드 자동 재생`,autoplay:``,delay:4e3,loop:``,"dots-outside":``},{default:l(()=>[(s(!0),h(p,null,C(v(G),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:`card_borderless card_elevated`},{default:l(()=>[u(I,null,{default:l(()=>[d(`div`,nt,[d(`h3`,rt,b(e.title),1),e.badge?(s(),f(M,m({key:0,ref_for:!0},e.badge),null,16)):e.tag?(s(),f(L,m({key:1,ref_for:!0},e.tag),null,16)):_(``,!0)])]),_:2},1024),u(P,null,{default:l(()=>[S(b(e.body),1)]),_:2},1024),e.footer?(s(),f(F,{key:0},{default:l(()=>[e.footer.type===`button`?(s(),f(D,{key:0,variant:`filled`,color:`primary`,size:`sm`,label:e.footer.label},null,8,[`label`])):_(``,!0)]),_:2},1024)):_(``,!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`loop-heading`,title:`무한 루프`,description:`loop prop으로 슬라이드를 순환합니다.`,code:v(Re)},{default:l(()=>[u(R,{"aria-label":`루프 슬라이드`,loop:``},{default:l(()=>[(s(!0),h(p,null,C(v(ye),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(I,{title:e.title},null,8,[`title`]),u(P,null,{default:l(()=>[S(b(e.body),1)]),_:2},1024),u(F,{between:``},{default:l(()=>[d(`strong`,null,b(e.price),1),u(L,m({ref_for:!0},e.tag),null,16)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`multi-heading`,title:`슬라이드 per view`,description:`slides-per-view="auto"로 여러 카드가 동시에 보입니다.`,code:v(ze)},{default:l(()=>[u(R,{"aria-label":`다중 슬라이드`,multi:``,"slides-per-view":`auto`,"space-between":16,centered:``,navigation:!1},{default:l(()=>[(s(!0),h(p,null,C(v(be),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(P,null,{default:l(()=>[u(L,m({ref_for:!0},e.tag),null,16),d(`h3`,it,b(e.title),1),d(`p`,at,b(e.subtitle),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`space-heading`,title:`슬라이드 간격`,description:`space-between prop으로 슬라이드 사이 간격(px)을 지정합니다. 다중·그리드·커버플로우에서의 간격은 각 전용 섹션을 참고하세요. HTML 마크업은 data-swiper-space-between 속성을 사용합니다.`,code:v(Be)},{default:l(()=>[u(R,{"aria-label":`기본 간격`,"space-between":12,loop:``},{default:l(()=>[(s(!0),h(p,null,C(v(K),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(I,{title:e.title,subtitle:e.subtitle},null,8,[`title`,`subtitle`])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`pagination-heading`,title:`페이지네이션`,description:`화살표 없이 도트만 사용합니다.`,code:v(Ve)},{default:l(()=>[u(R,{"aria-label":`페이지네이션 슬라이드`,loop:``,navigation:!1},{default:l(()=>[(s(!0),h(p,null,C(v(xe),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(I,{title:e.title,subtitle:e.subtitle},null,8,[`title`,`subtitle`])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`fraction-heading`,title:`분수 페이지네이션`,description:`pagination="fraction" prop으로 현재/전체 슬라이드 번호를 표시합니다.`,code:v(He)},{default:l(()=>[u(R,{"aria-label":`분수 페이지네이션 슬라이드`,pagination:`fraction`},{default:l(()=>[(s(!0),h(p,null,C(v(Se),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:x(e.accentClass)},{default:l(()=>[u(P,null,{default:l(()=>[d(`h3`,ot,b(e.title),1),d(`p`,st,b(e.lead),1)]),_:2},1024)]),_:2},1032,[`class`])]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`progress-heading`,title:`프로그레스 페이지네이션`,description:`pagination="progressbar" prop으로 진행률 바를 표시합니다.`,code:v(Ue)},{default:l(()=>[u(R,{"aria-label":`프로그레스 페이지네이션`,pagination:`progressbar`,loop:``},{default:l(()=>[(s(!0),h(p,null,C(v(q),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:x(e.accentClass)},{default:l(()=>[u(P,null,{default:l(()=>[d(`h3`,ct,b(e.title),1),d(`p`,lt,b(e.lead),1)]),_:2},1024)]),_:2},1032,[`class`])]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`custom-pagination-heading`,title:`커스텀 페이지네이션`,description:`pagination="custom" prop으로 번호 불릿을 표시합니다.`,code:v(We)},{default:l(()=>[u(R,{"aria-label":`커스텀 페이지네이션`,pagination:`custom`,loop:``,navigation:!1},{default:l(()=>[(s(!0),h(p,null,C(v(Ce),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(I,{title:e.title,subtitle:e.subtitle},null,8,[`title`,`subtitle`])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`grid-heading`,title:`그리드`,description:`grid-rows prop으로 다행 그리드 레이아웃을 구성합니다. slides-per-group으로 1장씩 또는 한 화면(그룹) 단위 이동을 선택할 수 있습니다. 2행 × 3열이면 :slides-per-group="6"이 페이지 이동입니다.`,stack:``,code:v(Ge)},{default:l(()=>[d(`div`,ut,[n[1]||=d(`h3`,{class:`typo_overline`},`1장씩 이동`,-1),n[2]||=d(`p`,{class:`typo_caption`},`slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.`,-1),u(R,{"aria-label":`그리드 1장씩`,"slides-per-view":3,"grid-rows":2,"space-between":16},{default:l(()=>[(s(!0),h(p,null,C(v(J),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(I,{title:e.title,subtitle:e.subtitle},null,8,[`title`,`subtitle`])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),d(`div`,dt,[n[3]||=d(`h3`,{class:`typo_overline`},`그룹 이동`,-1),n[4]||=d(`p`,{class:`typo_caption`},`:slides-per-group="6" — 한 화면(2행 × 3열) 단위로 페이지처럼 이동합니다.`,-1),u(R,{"aria-label":`그리드 그룹 이동`,"slides-per-view":3,"grid-rows":2,"slides-per-group":6,"space-between":16},{default:l(()=>[(s(!0),h(p,null,C(v(J),e=>(s(),f(B,{key:`group-${e.title}`},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(I,{title:e.title,subtitle:e.subtitle},null,8,[`title`,`subtitle`])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,[`code`]),u(O,{"heading-id":`coverflow-heading`,title:`커버플로우`,description:`effect="coverflow" prop으로 3D 커버플로우 효과를 적용합니다. 활성 슬라이드는 가운데 정렬되며, coverflow-sides="1"로 좌·우 1개씩 peek합니다. loop로 첫·끝에서도 균형 있게 보입니다.`,code:v(Ke)},{default:l(()=>[u(R,{"aria-label":`커버플로우 슬라이드`,effect:`coverflow`,"coverflow-sides":1,"space-between":16,loop:``,pagination:!1},{default:l(()=>[(s(!0),h(p,null,C(v(Y),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:`card_borderless card_elevated`},{media:l(()=>[d(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":e.mediaLabel},[d(`span`,pt,b(e.title),1)],8,ft)]),default:l(()=>[u(I,null,{default:l(()=>[d(`div`,mt,[d(`h3`,ht,b(e.title),1),u(L,m({ref_for:!0},e.tag),null,16)])]),_:2},1024),u(P,null,{default:l(()=>[S(b(e.body),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`code`]),u(O,{"heading-id":`coverflow-rise-heading`,title:`커버플로우 · 축소`,description:`coverflow-style="rise"로 측면만 축소합니다. 슬라이드 크기는 coverflow-sides와 관계없이 동일하며, 좌·우 노출(1 · 1.5 · 2)은 간격으로 조절합니다.`,stack:``,code:v(qe)},{default:l(()=>[d(`div`,gt,[n[5]||=d(`h3`,{class:`typo_overline`},`좌우 1개씩`,-1),n[6]||=d(`p`,{class:`typo_caption`},`:coverflow-sides="1" — 슬라이드 크기 기준. 좌·우에 1개씩.`,-1),u(R,{"aria-label":`커버플로우 축소 좌우 1`,effect:`coverflow`,"coverflow-style":`rise`,"coverflow-sides":1,"space-between":16,loop:``,pagination:!1},{default:l(()=>[(s(!0),h(p,null,C(v(Y),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:`card_borderless card_elevated`},{media:l(()=>[d(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":e.mediaLabel},[d(`span`,vt,b(e.title),1)],8,_t)]),default:l(()=>[u(I,null,{default:l(()=>[d(`div`,yt,[d(`h3`,bt,b(e.title),1),u(L,m({ref_for:!0},e.tag),null,16)])]),_:2},1024),u(P,null,{default:l(()=>[S(b(e.body),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),d(`div`,xt,[n[7]||=d(`h3`,{class:`typo_overline`},`좌우 약 1.5개 (기본)`,-1),n[8]||=d(`p`,{class:`typo_caption`},`:coverflow-sides="1.5" — 크기는 1과 동일, 간격으로 좌·우 약 1.5개 peek.`,-1),u(R,{"aria-label":`커버플로우 축소 좌우 1.5`,effect:`coverflow`,"coverflow-style":`rise`,"coverflow-sides":1.5,"space-between":16,loop:``,pagination:!1},{default:l(()=>[(s(!0),h(p,null,C(v(Y),e=>(s(),f(B,{key:`sides15-${e.title}`},{default:l(()=>[u(N,{class:`card_borderless card_elevated`},{media:l(()=>[d(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":e.mediaLabel},[d(`span`,Ct,b(e.title),1)],8,St)]),default:l(()=>[u(I,null,{default:l(()=>[d(`div`,wt,[d(`h3`,Tt,b(e.title),1),u(L,m({ref_for:!0},e.tag),null,16)])]),_:2},1024),u(P,null,{default:l(()=>[S(b(e.body),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),d(`div`,Et,[n[9]||=d(`h3`,{class:`typo_overline`},`좌우 2개씩`,-1),n[10]||=d(`p`,{class:`typo_caption`},`:coverflow-sides="2" — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.`,-1),u(R,{"aria-label":`커버플로우 축소 좌우 2`,effect:`coverflow`,"coverflow-style":`rise`,"coverflow-sides":2,"space-between":16,loop:``,pagination:!1},{default:l(()=>[(s(!0),h(p,null,C(v(Y),e=>(s(),f(B,{key:`sides2-${e.title}`},{default:l(()=>[u(N,{class:`card_borderless card_elevated`},{media:l(()=>[d(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":e.mediaLabel},[d(`span`,Ot,b(e.title),1)],8,Dt)]),default:l(()=>[u(I,null,{default:l(()=>[d(`div`,kt,[d(`h3`,At,b(e.title),1),u(L,m({ref_for:!0},e.tag),null,16)])]),_:2},1024),u(P,null,{default:l(()=>[S(b(e.body),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,[`code`]),u(O,{"heading-id":`thumbs-heading`,title:`썸네일 갤러리`,description:`메인 캐러셀과 썸네일 캐러셀을 thumbs · @swiper로 양방향 연동합니다. 하단 썸네일은 탭 네비처럼 동작합니다 — 시작은 좌측 정렬, 중간은 활성 항목 가운데, 끝에서는 우측으로 활성화됩니다.`,code:v(Je)},{default:l(()=>[d(`div`,jt,[u(R,{"aria-label":`갤러리 메인`,thumbs:t.value,pagination:!1},{default:l(()=>[(s(!0),h(p,null,C(v(we),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{class:x(e.accentClass)},{default:l(()=>[u(P,null,{default:l(()=>[d(`p`,Mt,b(e.mediaLabel),1),d(`h3`,Nt,b(e.title),1),d(`p`,Pt,b(e.body),1)]),_:2},1024)]),_:2},1032,[`class`])]),_:2},1024))),128))]),_:1},8,[`thumbs`]),u(R,{"aria-label":`갤러리 썸네일`,"thumbs-control":``,"slides-per-view":4,"space-between":8,navigation:!1,pagination:!1,onSwiper:n[0]||=e=>t.value=e},{default:l(()=>[(s(!0),h(p,null,C(v(we),e=>(s(),f(B,{key:e.title},{default:l(()=>[u(N,{variant:`shadow`},{default:l(()=>[u(I,{title:e.thumbLabel},null,8,[`title`])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,[`code`]),u(w,{"heading-id":`api-props-heading`,title:`API · Props`},{default:l(()=>[u(T,{columns:v(pe),rows:v(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),u(w,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:l(()=>[u(T,{columns:v(me),rows:v(he),"code-column":`name`},null,8,[`columns`,`rows`]),n[11]||=d(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[S(` 슬라이드 콘텐츠는 `),d(`code`,{class:`typo_code`},`CarouselSlide`),S(`로 감싸 `),d(`code`,{class:`typo_code`},`Card`),S(` 등 기존 컴포넌트를 배치합니다. `)],-1)]),_:1}),u(w,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:l(()=>[u(T,{columns:v(ge),rows:v(H),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),u(w,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:l(()=>[u(T,{columns:v(U),rows:v(W),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{It as default,Ft as docMeta};
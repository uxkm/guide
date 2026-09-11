import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i}from"./blocks-DKrjMPN_.js";import{n as a,t as o}from"./FrameworkTabs-duseEU1T.js";import{a as s,c,d as l,f as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./Drawer.stories-C6aapbpT.js";import{i as S,r as C}from"./react-CQ14Jk9E.js";import{n as w,t as T}from"./ComponentApiDocs-C9VNL7Yh.js";import{i as E,r as D,s as O}from"./feedbackDocumentationExamples-kHmpSFyY.js";var k,A,j;function M(){return(M=e((()=>{k=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],A=(e,t,n)=>({title:e,description:n,tables:[{columns:k,rows:t}]}),j=[A(`React · Next.js API`,[{name:`open · defaultOpen · openOnLoad`,type:`boolean`,default:`— · false · false`,description:`제어·비제어 및 로드 시 열림 상태입니다.`},{name:`title · header · extra · children · footer`,type:`ReactNode`,default:`—`,description:`헤더, 추가 영역, 본문, 푸터 콘텐츠입니다.`},{name:`placement`,type:`'left' | 'right' | 'top' | 'bottom'`,default:`'right'`,description:`패널이 열리는 방향입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`패널 크기입니다.`},{name:`motion · speed`,type:`'slide' | 'fade' · 'fast' | 'normal' | 'slow'`,default:`'slide' · 'normal'`,description:`열·닫힘 전환 효과와 속도 프리셋입니다.`},{name:`backdrop · noBackdrop · draggable`,type:`boolean`,default:`true · false · false`,description:`백드롭과 하단 핸들 옵션입니다.`},{name:`footerAlign · footerRatio · footerNoPadBottom`,type:`string · string · boolean`,default:`'end' · '1-1' · false`,description:`푸터 액션 배치입니다.`},{name:`onClose`,type:`(reason, event) => void`,default:`—`,description:`close · backdrop · escape · drag 사유를 전달합니다.`}],`Next.js는 @uxkm/react/drawer를 재사용합니다.`),A(`Vue · Nuxt API`,[{name:`open · default-open · open-on-load`,type:`boolean`,default:`false`,description:`표시 상태입니다.`},{name:`title · placement · size`,type:`string`,default:`— · 'right' · 'md'`,description:`콘텐츠와 패널 배치입니다.`},{name:`motion · speed`,type:`'slide' | 'fade' · 'fast' | 'normal' | 'slow'`,default:`'slide' · 'normal'`,description:`열·닫힘 전환 효과와 속도 프리셋입니다.`},{name:`header · extra · default · footer`,type:`slot`,default:`—`,description:`Drawer 콘텐츠 슬롯입니다.`},{name:`@close`,type:`event`,default:`—`,description:`닫기 사유와 원본 이벤트입니다.`}],`Nuxt는 @uxkm/vue/drawer를 재사용합니다.`),A(`HTML · Gulp`,[{name:`drawer · drawer_backdrop · drawer_panel`,type:`class`,default:`—`,description:`루트, 백드롭, 패널입니다.`},{name:`drawer_header · drawer_body · drawer_footer`,type:`class`,default:`—`,description:`구조 영역입니다.`},{name:`drawer_placement-* · drawer_sm · drawer_lg`,type:`class`,default:`—`,description:`방향과 크기 변형입니다.`},{name:`drawer_motion-slide · drawer_motion-fade`,type:`class`,default:`—`,description:`열·닫힘 전환 효과입니다.`},{name:`data-drawer-trigger · data-drawer-close · data-drawer-motion · data-drawer-speed`,type:`attribute`,default:`—`,description:`열기·닫기 트리거와 전환 옵션입니다.`}]),A(`디자인 토큰`,[{name:`--drawer-z-index · --drawer-width · --drawer-height`,type:`number · length`,default:`250 · 24rem · 18rem`,description:`레이어와 패널 크기입니다.`},{name:`--drawer-bg · --drawer-shadow`,type:`color · shadow`,default:`테마별 값`,description:`패널 표면과 그림자입니다.`}]),A(`WebSquare API · XML`,[{name:`w2:group.drawer`,type:`XML element · class`,default:`role='dialog'`,description:`Drawer 루트입니다. drawer_placement-*와 is-open, aria-modal을 함께 사용합니다.`},{name:`drawer_backdrop · drawer_panel · drawer_header · drawer_body · drawer_footer`,type:`class`,default:`—`,description:`백드롭과 패널 구조 영역입니다.`},{name:`drawer_sm · drawer_lg · drawer_draggable · drawer_handle`,type:`class`,default:`—`,description:`크기와 하단 드래그 시트 변형입니다.`},{name:`xf:trigger.drawer_close · drawer_footer`,type:`XML element · class`,default:`—`,description:`닫기·저장·취소 액션을 구성합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`열기·닫기·확인 동작을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function N(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...S(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i,{of:v}),`
`,(0,F.jsx)(t.h1,{id:`drawer`,children:`Drawer`}),`
`,(0,F.jsx)(t.p,{children:`보조 작업과 상세 정보를 전체 브라우저 계층자리에서 열리는 패널로 제공합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,F.jsx)(t.p,{children:`왼쪽·오른쪽·상단·하단 배치를 지원하며 Esc, 백드롭, 닫기 버튼으로 닫은 뒤 기존 포커스를 복원합니다. Drawer는 대화상자 제목을 연결하고 열릴 때 내부로 포커스를 이동합니다.`}),`
`,(0,F.jsxs)(t.p,{children:[`WebSquare는 패널을 `,(0,F.jsx)(t.code,{children:`w2:group.drawer`}),`, 백드롭·헤더·본문·푸터를 `,(0,F.jsx)(t.code,{children:`w2:group`}),`, 열기·닫기를 `,(0,F.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,F.jsx)(t.code,{children:`w2`}),`, `,(0,F.jsx)(t.code,{children:`xf`}),`, `,(0,F.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,F.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Drawer 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 열림 상태, 배치, 크기, 백드롭, 드래그 시트와 포커스 트랩을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`placement`}),`는 `,(0,F.jsx)(t.code,{children:`drawer_placement-*`}),` 클래스로 변환합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,F.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,F.jsx)(t.code,{children:`drawer_sm`}),`·`,(0,F.jsx)(t.code,{children:`drawer_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`motion`}),`은 `,(0,F.jsx)(t.code,{children:`drawer_motion-slide`}),`·`,(0,F.jsx)(t.code,{children:`drawer_motion-fade`}),`, `,(0,F.jsx)(t.code,{children:`speed`}),`는 `,(0,F.jsx)(t.code,{children:`data-drawer-speed`}),`와 `,(0,F.jsx)(t.code,{children:`--drawer-motion-scale`}),`로 반영합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[`하단 `,(0,F.jsx)(t.code,{children:`draggable`}),`은 핸들로 모바일 액션 시트 형태를 제공합니다.`]}),`
`,(0,F.jsx)(t.li,{children:`중첩 시 최상위 패널만 조작합니다.`}),`
`]}),`
`,(0,F.jsx)(o,{examples:D,showFullCode:!0}),`
`,(0,F.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`w2:group`}),`에 `,(0,F.jsx)(t.code,{children:`drawer`}),`와 `,(0,F.jsx)(t.code,{children:`drawer_placement-*`}),`를 적용하고 `,(0,F.jsx)(t.code,{children:`role="dialog"`}),`·`,(0,F.jsx)(t.code,{children:`aria-modal="true"`}),`·`,(0,F.jsx)(t.code,{children:`aria-labelledby`}),`로 제목을 연결합니다. 백드롭과 닫기 버튼은 `,(0,F.jsx)(t.code,{children:`ev:onclick`}),`에서 `,(0,F.jsx)(t.code,{children:`scwin.drawer_close`}),`를 호출합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`크기·푸터 정렬은 `,(0,F.jsx)(t.code,{children:`drawer_sm`}),`·`,(0,F.jsx)(t.code,{children:`drawer_lg`}),`·`,(0,F.jsx)(t.code,{children:`drawer_footer-*`}),` 클래스로 표현하고, 하단 드래그 시트는 `,(0,F.jsx)(t.code,{children:`drawer_draggable`}),`과 핸들 영역을 함께 구성합니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,F.jsx)(t.p,{children:`오른쪽에서 열리는 기본 Drawer입니다.`}),`
`,(0,F.jsx)(r,{of:b,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.basic}),`
`,(0,F.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`defaultOpen`}),`, `,(0,F.jsx)(t.code,{children:`openOnLoad`}),` 또는 `,(0,F.jsx)(t.code,{children:`open`}),`으로 로드 시 열린 상태를 제공합니다.`]}),`
`,(0,F.jsx)(r,{of:l,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.open}),`
`,(0,F.jsx)(t.h2,{id:`위치`,children:`위치`}),`
`,(0,F.jsx)(t.p,{children:`왼쪽·오른쪽·상단·하단 배치를 제공합니다.`}),`
`,(0,F.jsx)(r,{of:u,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.placement}),`
`,(0,F.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`sm`}),`, `,(0,F.jsx)(t.code,{children:`md`}),`, `,(0,F.jsx)(t.code,{children:`lg`}),` 패널 크기를 제공합니다.`]}),`
`,(0,F.jsx)(r,{of:_,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.size}),`
`,(0,F.jsx)(t.h2,{id:`헤더푸터`,children:`헤더·푸터`}),`
`,(0,F.jsx)(t.p,{children:`제목, 본문, 액션 푸터로 구성합니다.`}),`
`,(0,F.jsx)(r,{of:s,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.footer}),`
`,(0,F.jsx)(t.h2,{id:`푸터-정렬`,children:`푸터 정렬`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`start`}),`, `,(0,F.jsx)(t.code,{children:`center`}),`, `,(0,F.jsx)(t.code,{children:`end`}),`, `,(0,F.jsx)(t.code,{children:`between`}),`, `,(0,F.jsx)(t.code,{children:`even`}),` 정렬을 제공합니다.`]}),`
`,(0,F.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.footerAlign}),`
`,(0,F.jsx)(t.h2,{id:`헤더-추가-영역`,children:`헤더 추가 영역`}),`
`,(0,F.jsx)(t.p,{children:`제목 옆에 상태 태그 등 추가 콘텐츠를 배치합니다.`}),`
`,(0,F.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.extra}),`
`,(0,F.jsx)(t.h2,{id:`메뉴`,children:`메뉴`}),`
`,(0,F.jsx)(t.p,{children:`왼쪽 Drawer에 탐색 메뉴를 조합할 수 있습니다.`}),`
`,(0,F.jsx)(r,{of:y,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.menu}),`
`,(0,F.jsx)(t.h2,{id:`중첩-drawer`,children:`중첩 Drawer`}),`
`,(0,F.jsx)(t.p,{children:`중첩된 경우 최상위 패널만 조작합니다.`}),`
`,(0,F.jsx)(r,{of:p,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.nested}),`
`,(0,F.jsx)(t.h2,{id:`하단-드래그-시트`,children:`하단 드래그 시트`}),`
`,(0,F.jsx)(t.p,{children:`하단 배치와 드래그 핸들을 조합해 모바일 액션 시트 형태로 제공합니다.`}),`
`,(0,F.jsx)(r,{of:h,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.dragSheet}),`
`,(0,F.jsx)(t.h2,{id:`백드롭-없음`,children:`백드롭 없음`}),`
`,(0,F.jsx)(t.p,{children:`배경 맥락을 유지해야 하는 제한적인 상황에서만 사용합니다.`}),`
`,(0,F.jsx)(r,{of:x,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.noBackdrop}),`
`,(0,F.jsx)(t.h2,{id:`전환-효과--속도`,children:`전환 효과 · 속도`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`motion`}),`은 `,(0,F.jsx)(t.code,{children:`slide`}),`·`,(0,F.jsx)(t.code,{children:`fade`}),`, `,(0,F.jsx)(t.code,{children:`speed`}),`는 `,(0,F.jsx)(t.code,{children:`fast`}),`·`,(0,F.jsx)(t.code,{children:`normal`}),`·`,(0,F.jsx)(t.code,{children:`slow`}),`입니다. 기본은 slide / normal입니다. `,(0,F.jsx)(t.code,{children:`prefers-reduced-motion`}),` 환경에서는 전환을 줄입니다.`]}),`
`,(0,F.jsx)(r,{of:c,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.motion}),`
`,(0,F.jsx)(r,{of:m,sourceState:`none`}),`
`,(0,F.jsx)(o,{examples:E.speed}),`
`,(0,F.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,F.jsx)(t.p,{children:`Drawer는 대화상자 제목을 연결하고 열릴 때 내부로 포커스를 이동합니다. Tab 키는 패널 안에서 순환하며 Esc, 백드롭, 닫기 버튼으로 닫은 뒤 기존 포커스를 복원합니다.`}),`
`,(0,F.jsx)(T,{sections:j})]})}function P(e={}){let{wrapper:t}={...S(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),C(),n(),a(),w(),O(),M(),d()})))()}I();export{P as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./Drawer.stories-C7YXHz7L.js";import{i as h,r as g}from"./react-CJGa1lBW.js";import{c as _,r as v,u as y}from"./blocks-SMgDWto2.js";import{i as b,n as x,r as S,t as C}from"./ComponentApiDocs-DtZNZjDp.js";import{i as w,r as T,s as E}from"./feedbackDocumentationExamples-BjU6qeOK.js";var D,O,k;function A(){return(A=e((()=>{D=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],O=(e,t,n)=>({title:e,description:n,tables:[{columns:D,rows:t}]}),k=[O(`React · Next.js API`,[{name:`open · defaultOpen · openOnLoad`,type:`boolean`,default:`— · false · false`,description:`제어·비제어 및 로드 시 열림 상태입니다.`},{name:`title · header · extra · children · footer`,type:`ReactNode`,default:`—`,description:`헤더, 추가 영역, 본문, 푸터 콘텐츠입니다.`},{name:`placement`,type:`'left' | 'right' | 'top' | 'bottom'`,default:`'right'`,description:`패널이 열리는 방향입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`패널 크기입니다.`},{name:`backdrop · noBackdrop · draggable`,type:`boolean`,default:`true · false · false`,description:`백드롭과 하단 핸들 옵션입니다.`},{name:`footerAlign · footerRatio · footerNoPadBottom`,type:`string · string · boolean`,default:`'end' · '1-1' · false`,description:`푸터 액션 배치입니다.`},{name:`onClose`,type:`(reason, event) => void`,default:`—`,description:`close · backdrop · escape · drag 사유를 전달합니다.`}],`Next.js는 @uxkm/react/drawer를 재사용합니다.`),O(`Vue · Nuxt API`,[{name:`open · default-open · open-on-load`,type:`boolean`,default:`false`,description:`표시 상태입니다.`},{name:`title · placement · size`,type:`string`,default:`— · 'right' · 'md'`,description:`콘텐츠와 패널 배치입니다.`},{name:`header · extra · default · footer`,type:`slot`,default:`—`,description:`Drawer 콘텐츠 슬롯입니다.`},{name:`@close`,type:`event`,default:`—`,description:`닫기 사유와 원본 이벤트입니다.`}],`Nuxt는 @uxkm/vue/drawer를 재사용합니다.`),O(`HTML · Gulp`,[{name:`drawer · drawer_backdrop · drawer_panel`,type:`class`,default:`—`,description:`루트, 백드롭, 패널입니다.`},{name:`drawer_header · drawer_body · drawer_footer`,type:`class`,default:`—`,description:`구조 영역입니다.`},{name:`drawer_placement-* · drawer_sm · drawer_lg`,type:`class`,default:`—`,description:`방향과 크기 변형입니다.`},{name:`data-drawer-trigger · data-drawer-close`,type:`attribute`,default:`—`,description:`열기와 닫기 트리거입니다.`}]),O(`디자인 토큰`,[{name:`--drawer-z-index · --drawer-width · --drawer-height`,type:`number · length`,default:`250 · 24rem · 18rem`,description:`레이어와 패널 크기입니다.`},{name:`--drawer-bg · --drawer-shadow`,type:`color · shadow`,default:`테마별 값`,description:`패널 표면과 그림자입니다.`}]),O(`WebSquare API · XML`,[{name:`w2:group.drawer`,type:`XML element · class`,default:`role='dialog'`,description:`Drawer 루트입니다. drawer_placement-*와 is-open, aria-modal을 함께 사용합니다.`},{name:`drawer_backdrop · drawer_panel · drawer_header · drawer_body · drawer_footer`,type:`class`,default:`—`,description:`백드롭과 패널 구조 영역입니다.`},{name:`drawer_sm · drawer_lg · drawer_draggable · drawer_handle`,type:`class`,default:`—`,description:`크기와 하단 드래그 시트 변형입니다.`},{name:`xf:trigger.drawer_close · drawer_footer`,type:`XML element · class`,default:`—`,description:`닫기·저장·취소 액션을 구성합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`열기·닫기·확인 동작을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function j(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...h(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_,{of:d}),`
`,(0,N.jsx)(t.h1,{id:`drawer`,children:`Drawer`}),`
`,(0,N.jsx)(t.p,{children:`보조 작업과 상세 정보를 전체 브라우저 계층자리에서 열리는 패널로 제공합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,N.jsx)(t.p,{children:`왼쪽·오른쪽·상단·하단 배치를 지원하며 Esc, 백드롭, 닫기 버튼으로 닫은 뒤 기존 포커스를 복원합니다. Drawer는 대화상자 제목을 연결하고 열릴 때 내부로 포커스를 이동합니다.`}),`
`,(0,N.jsxs)(t.p,{children:[`WebSquare는 패널을 `,(0,N.jsx)(t.code,{children:`w2:group.drawer`}),`, 백드롭·헤더·본문·푸터를 `,(0,N.jsx)(t.code,{children:`w2:group`}),`, 열기·닫기를 `,(0,N.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,N.jsx)(t.code,{children:`w2`}),`, `,(0,N.jsx)(t.code,{children:`xf`}),`, `,(0,N.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,N.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,N.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Drawer 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 열림 상태, 배치, 크기, 백드롭, 드래그 시트와 포커스 트랩을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`placement`}),`는 `,(0,N.jsx)(t.code,{children:`drawer_placement-*`}),` 클래스로 변환합니다.`]}),`
`,(0,N.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,N.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,N.jsx)(t.code,{children:`drawer_sm`}),`·`,(0,N.jsx)(t.code,{children:`drawer_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,N.jsxs)(t.li,{children:[`하단 `,(0,N.jsx)(t.code,{children:`draggable`}),`은 핸들로 모바일 액션 시트 형태를 제공합니다.`]}),`
`,(0,N.jsx)(t.li,{children:`중첩 시 최상위 패널만 조작합니다.`}),`
`]}),`
`,(0,N.jsx)(S,{examples:T,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`w2:group`}),`에 `,(0,N.jsx)(t.code,{children:`drawer`}),`와 `,(0,N.jsx)(t.code,{children:`drawer_placement-*`}),`를 적용하고 `,(0,N.jsx)(t.code,{children:`role="dialog"`}),`·`,(0,N.jsx)(t.code,{children:`aria-modal="true"`}),`·`,(0,N.jsx)(t.code,{children:`aria-labelledby`}),`로 제목을 연결합니다. 백드롭과 닫기 버튼은 `,(0,N.jsx)(t.code,{children:`ev:onclick`}),`에서 `,(0,N.jsx)(t.code,{children:`scwin.drawer_close`}),`를 호출합니다.`]}),`
`,(0,N.jsxs)(t.p,{children:[`크기·푸터 정렬은 `,(0,N.jsx)(t.code,{children:`drawer_sm`}),`·`,(0,N.jsx)(t.code,{children:`drawer_lg`}),`·`,(0,N.jsx)(t.code,{children:`drawer_footer-*`}),` 클래스로 표현하고, 하단 드래그 시트는 `,(0,N.jsx)(t.code,{children:`drawer_draggable`}),`과 핸들 영역을 함께 구성합니다.`]}),`
`,(0,N.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,N.jsx)(t.p,{children:`오른쪽에서 열리는 기본 Drawer입니다.`}),`
`,(0,N.jsx)(v,{of:p,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.basic}),`
`,(0,N.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`defaultOpen`}),`, `,(0,N.jsx)(t.code,{children:`openOnLoad`}),` 또는 `,(0,N.jsx)(t.code,{children:`open`}),`으로 로드 시 열린 상태를 제공합니다.`]}),`
`,(0,N.jsx)(v,{of:m,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.open}),`
`,(0,N.jsx)(t.h2,{id:`위치`,children:`위치`}),`
`,(0,N.jsx)(t.p,{children:`왼쪽·오른쪽·상단·하단 배치를 제공합니다.`}),`
`,(0,N.jsx)(v,{of:i,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.placement}),`
`,(0,N.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`sm`}),`, `,(0,N.jsx)(t.code,{children:`md`}),`, `,(0,N.jsx)(t.code,{children:`lg`}),` 패널 크기를 제공합니다.`]}),`
`,(0,N.jsx)(v,{of:a,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.size}),`
`,(0,N.jsx)(t.h2,{id:`헤더푸터`,children:`헤더·푸터`}),`
`,(0,N.jsx)(t.p,{children:`제목, 본문, 액션 푸터로 구성합니다.`}),`
`,(0,N.jsx)(v,{of:n,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.footer}),`
`,(0,N.jsx)(t.h2,{id:`푸터-정렬`,children:`푸터 정렬`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`start`}),`, `,(0,N.jsx)(t.code,{children:`center`}),`, `,(0,N.jsx)(t.code,{children:`end`}),`, `,(0,N.jsx)(t.code,{children:`between`}),`, `,(0,N.jsx)(t.code,{children:`even`}),` 정렬을 제공합니다.`]}),`
`,(0,N.jsx)(v,{of:l,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.footerAlign}),`
`,(0,N.jsx)(t.h2,{id:`헤더-추가-영역`,children:`헤더 추가 영역`}),`
`,(0,N.jsx)(t.p,{children:`제목 옆에 상태 태그 등 추가 콘텐츠를 배치합니다.`}),`
`,(0,N.jsx)(v,{of:o,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.extra}),`
`,(0,N.jsx)(t.h2,{id:`메뉴`,children:`메뉴`}),`
`,(0,N.jsx)(t.p,{children:`왼쪽 Drawer에 탐색 메뉴를 조합할 수 있습니다.`}),`
`,(0,N.jsx)(v,{of:f,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.menu}),`
`,(0,N.jsx)(t.h2,{id:`중첩-drawer`,children:`중첩 Drawer`}),`
`,(0,N.jsx)(t.p,{children:`중첩된 경우 최상위 패널만 조작합니다.`}),`
`,(0,N.jsx)(v,{of:r,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.nested}),`
`,(0,N.jsx)(t.h2,{id:`하단-드래그-시트`,children:`하단 드래그 시트`}),`
`,(0,N.jsx)(t.p,{children:`하단 배치와 드래그 핸들을 조합해 모바일 액션 시트 형태로 제공합니다.`}),`
`,(0,N.jsx)(v,{of:c,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.dragSheet}),`
`,(0,N.jsx)(t.h2,{id:`백드롭-없음`,children:`백드롭 없음`}),`
`,(0,N.jsx)(t.p,{children:`배경 맥락을 유지해야 하는 제한적인 상황에서만 사용합니다.`}),`
`,(0,N.jsx)(v,{of:s,sourceState:`none`}),`
`,(0,N.jsx)(S,{examples:w.noBackdrop}),`
`,(0,N.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,N.jsx)(t.p,{children:`Drawer는 대화상자 제목을 연결하고 열릴 때 내부로 포커스를 이동합니다. Tab 키는 패널 안에서 순환하며 Esc, 백드롭, 닫기 버튼으로 닫은 뒤 기존 포커스를 복원합니다.`}),`
`,(0,N.jsx)(C,{sections:k})]})}function M(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=t(),g(),y(),b(),x(),E(),A(),u()})))()}P();export{M as default};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{T as n,_ as r,g as i,o as a,r as o}from"./iframe-BkSPibU3.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-Bdofg9ij.js";import{r as u,t as d}from"./Icon-CS3T14bP.js";function f({children:e,equal:t=!1,align:n}){return(0,p.jsx)(`div`,{className:t?`btn_row-equal`:`btn_row btn_row-wrap${n?` btn_row-${n}`:``}`,children:e})}var p;function m(){return(m=e((()=>{p=s(),p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,p.Fragment,f.__docgenInfo={description:``,methods:[],displayName:`DemoRow`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},equal:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`}]},description:``}}}})))()}var h=t({Basic:()=>w,ColorVariants:()=>N,Groups:()=>R,IconOnly:()=>j,IconOnlySize:()=>M,IconText:()=>D,Playground:()=>C,RootTag:()=>z,RoundShape:()=>F,SelectType:()=>T,Sizes:()=>P,States:()=>L,TextIcon:()=>A,TextType:()=>E,VerticalEqual:()=>k,VerticalIconText:()=>O,Width:()=>I,__namedExportsOrder:()=>B,default:()=>b});function g(e){let t=typeof e.href==`string`&&e.href?e.href:void 0,n=typeof e.role==`string`&&e.role?e.role:void 0,r=typeof e.ariaLabel==`string`&&e.ariaLabel?e.ariaLabel:void 0,i=e.haspopup,a=i===`true`?!0:i===`listbox`||i===`menu`||i===`dialog`?i:void 0,o=e.grow===`true`||e.grow===`2`&&`2`;return{label:typeof e.label==`string`?e.label:void 0,variant:e.variant,color:e.color,size:e.size,tag:e.tag,type:e.type,ripple:e.ripple!==!1,iconOnly:e.iconOnly===!0,vertical:e.vertical===!0,round:e.round===!0,block:e.block===!0,fit:e.fit===!0,loading:e.loading===!0,open:e.open===!0,error:e.error===!0,placeholder:e.placeholder===!0,selectText:e.selectText===!0,selectCaret:e.selectCaret===!0,disabled:e.disabled===!0,ariaDisabled:e.ariaDisabled===!0,invalid:e.invalid===!0,expanded:e.expanded===!0,grow:o,...t?{href:t}:{},...n?{role:n}:{},...r?{ariaLabel:r}:{},...a===void 0?{}:{haspopup:a}}}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{c(),u(),r(),m(),_=s(),v=l,y=d,b={title:`기본 요소/Button`,component:v,parameters:{layout:`fullscreen`,controls:{include:[...`label.variant.color.size.tag.type.href.role.ariaLabel.haspopup.grow.ripple.iconOnly.vertical.round.block.fit.loading.open.error.placeholder.selectText.selectCaret.disabled.ariaDisabled.invalid.expanded`.split(`.`)]},docs:{extractArgTypes:()=>({})}},args:{label:`Controls로 속성을 조절해 보세요.`,variant:`filled`,color:`primary`,size:`md`,ripple:!0,iconOnly:!1,vertical:!1,round:!1,block:!1,fit:!1,loading:!1,open:!1,error:!1,placeholder:!1,selectText:!1,selectCaret:!1,disabled:!1,ariaDisabled:!1,invalid:!1,expanded:!1,tag:`button`,type:`button`,href:``,role:``,ariaLabel:``,haspopup:`none`,grow:`false`},argTypes:{...i,label:{...n,description:`버튼 텍스트`},variant:{control:`select`,options:[`filled`,`outline`,`ghost`,`text`,`select`],type:`string`,description:`버튼 스킨`},color:{control:`select`,options:[`primary`,`default`,`success`,`warning`,`danger`,`muted`],type:`string`,description:`색상 (ghost 제외)`},size:{control:`select`,options:[`sm`,`md`,`lg`],type:`string`,description:`크기`},tag:{control:`select`,options:[`button`,`a`,`div`],type:`string`,description:`루트 태그`},type:{control:`select`,options:[`button`,`submit`,`reset`],type:`string`,description:`button type`},href:{...n,description:`tag=a일 때 링크 주소`},role:{...n,description:`명시적 role`},ariaLabel:{...o,description:`아이콘 전용 등 접근성 이름`},haspopup:{control:`select`,options:[`none`,`true`,`listbox`,`menu`,`dialog`],type:`string`,description:`aria-haspopup`},grow:{control:`select`,options:[`false`,`true`,`2`],labels:{false:`없음`,true:`grow`,2:`grow ×2`},type:`string`,description:`flex grow`},ripple:{...a,description:`클릭 리플 효과`},iconOnly:{...a,description:`아이콘만 표시`},vertical:{...a,description:`아이콘 위·텍스트 아래`},round:{...a,description:`pill 형태`},block:{...a,description:`전체 너비`},fit:{...a,description:`콘텐츠 너비 유지`},loading:{...a,description:`로딩 스피너`},open:{...a,description:`셀렉트·팝오버 열림`},error:{...a,description:`오류 상태`},placeholder:{...a,description:`셀렉트 플레이스홀더`},selectText:{...a,description:`셀렉트 텍스트형`},selectCaret:{...a,description:`캐럿 강제 표시`},disabled:{...a,description:`네이티브 disabled`},ariaDisabled:{...a,description:`is-disabled 스타일`},invalid:{...a,description:`aria-invalid`},expanded:{...a,description:`aria-expanded`},iconBefore:{table:{disable:!0}},iconAfter:{table:{disable:!0}},onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}}}},x=({children:e})=>(0,_.jsx)(`div`,{className:`btn-demo`,children:e}),S=e=>(0,_.jsx)(y,{name:e}),C={name:`Playground`,render:e=>(0,_.jsx)(x,{children:(0,_.jsx)(v,{...g(e)})})},w={name:`기본 유형`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{label:`Filled Primary`,variant:`filled`,color:`primary`}),(0,_.jsx)(v,{label:`Filled Default`,variant:`filled`,color:`default`}),(0,_.jsx)(v,{label:`Outline`,variant:`outline`,color:`primary`}),(0,_.jsx)(v,{label:`Ghost`,variant:`ghost`}),(0,_.jsx)(v,{label:`Text`,variant:`text`,color:`primary`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{color:`success`,label:`Success`}),(0,_.jsx)(v,{color:`warning`,label:`Warning`}),(0,_.jsx)(v,{color:`danger`,label:`Danger`}),(0,_.jsx)(v,{variant:`text`,color:`muted`,label:`Text Muted`}),(0,_.jsx)(v,{variant:`text`,color:`danger`,label:`Text Danger`})]})]})},T={name:`셀렉트 박스형`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`select`,label:`서울특별시`,haspopup:`listbox`}),(0,_.jsx)(v,{variant:`select`,placeholder:!0,label:`옵션을 선택하세요`,haspopup:`listbox`}),(0,_.jsx)(v,{variant:`select`,open:!0,label:`카테고리`,haspopup:`listbox`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`select`,size:`sm`,label:`Small`}),(0,_.jsx)(v,{variant:`select`,label:`Medium`}),(0,_.jsx)(v,{variant:`select`,size:`lg`,label:`Large`}),(0,_.jsx)(v,{variant:`select`,disabled:!0,label:`비활성`}),(0,_.jsx)(v,{variant:`select`,error:!0,invalid:!0,label:`필수 선택`})]}),(0,_.jsx)(v,{variant:`select`,block:!0,label:`전체 너비 셀렉트 트리거`}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`select`,selectText:!0,label:`최신순`}),(0,_.jsx)(v,{variant:`select`,selectText:!0,placeholder:!0,label:`정렬 기준`}),(0,_.jsx)(v,{variant:`select`,selectText:!0,open:!0,label:`필터`}),(0,_.jsx)(v,{variant:`select`,selectText:!0,size:`sm`,label:`Small`}),(0,_.jsx)(v,{variant:`select`,selectText:!0,disabled:!0,label:`비활성`})]})]})},E={name:`텍스트 버튼`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`text`,label:`Primary`}),(0,_.jsx)(v,{variant:`text`,color:`muted`,label:`Muted`}),(0,_.jsx)(v,{variant:`text`,color:`danger`,label:`Danger`}),(0,_.jsx)(v,{variant:`text`,color:`success`,label:`Success`}),(0,_.jsx)(v,{variant:`text`,color:`warning`,label:`Warning`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`text`,color:`danger`,label:`삭제`,iconBefore:S(`trash`)}),(0,_.jsx)(v,{variant:`text`,color:`success`,label:`완료`,iconBefore:S(`check`)}),(0,_.jsx)(v,{variant:`text`,color:`warning`,label:`주의`,iconAfter:S(`warning`)}),(0,_.jsx)(v,{variant:`text`,color:`muted`,label:`자세히`,iconAfter:S(`chevron`)})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`text`,label:`더 보기`}),(0,_.jsx)(v,{variant:`text`,label:`링크 복사`}),(0,_.jsx)(v,{variant:`text`,label:`취소`}),(0,_.jsx)(v,{variant:`text`,label:`건너뛰기`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`text`,label:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{variant:`text`,label:`다운로드`,iconBefore:S(`download`)}),(0,_.jsx)(v,{variant:`text`,label:`링크 열기`,iconBefore:S(`external`)}),(0,_.jsx)(v,{variant:`text`,label:`설정`,iconBefore:S(`settings`)})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`text`,label:`다음`,iconAfter:S(`chevron`)}),(0,_.jsx)(v,{variant:`text`,label:`전체 보기`,iconAfter:S(`chevron`)}),(0,_.jsx)(v,{variant:`text`,label:`삭제`,iconAfter:S(`trash`)}),(0,_.jsx)(v,{variant:`text`,label:`새로고침`,iconAfter:S(`refresh`)})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`text`,size:`sm`,label:`Small`}),(0,_.jsx)(v,{variant:`text`,label:`Medium`}),(0,_.jsx)(v,{variant:`text`,size:`lg`,label:`Large`}),(0,_.jsx)(v,{variant:`text`,size:`sm`,label:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{variant:`text`,size:`lg`,label:`다음`,iconAfter:S(`chevron`)})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`text`,iconOnly:!0,ariaLabel:`검색`,iconBefore:S(`search`)}),(0,_.jsx)(v,{variant:`text`,iconOnly:!0,ariaLabel:`편집`,iconBefore:S(`edit`)}),(0,_.jsx)(v,{variant:`text`,iconOnly:!0,size:`sm`,ariaLabel:`닫기`,iconBefore:S(`close`)}),(0,_.jsx)(v,{variant:`text`,disabled:!0,label:`비활성`}),(0,_.jsx)(v,{variant:`text`,ariaDisabled:!0,label:`is-disabled`,iconAfter:S(`chevron`)})]}),(0,_.jsx)(v,{variant:`text`,block:!0,label:`전체 너비 텍스트 버튼`})]})},D={name:`아이콘 + 텍스트`,render:()=>(0,_.jsx)(x,{children:(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{label:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{color:`default`,label:`다운로드`,iconBefore:S(`download`)}),(0,_.jsx)(v,{variant:`outline`,label:`새 항목`,iconBefore:S(`plus`)})]})})},O={name:`아이콘 + 텍스트 (세로)`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{vertical:!0,label:`홈`,iconBefore:S(`home`)}),(0,_.jsx)(v,{color:`default`,vertical:!0,label:`검색`,iconBefore:S(`search`)}),(0,_.jsx)(v,{variant:`ghost`,vertical:!0,label:`마이`,iconBefore:S(`user`)}),(0,_.jsx)(v,{variant:`text`,vertical:!0,label:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{variant:`outline`,vertical:!0,label:`다운로드`,iconBefore:S(`download`)})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{vertical:!0,size:`sm`,label:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{vertical:!0,label:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{vertical:!0,size:`lg`,label:`추가`,iconBefore:S(`plus`)})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{color:`default`,vertical:!0,round:!0,label:`가이드`,iconBefore:S(`book`)}),(0,_.jsx)(v,{vertical:!0,round:!0,label:`즐겨찾기`,iconBefore:S(`star`)}),(0,_.jsx)(v,{variant:`ghost`,vertical:!0,disabled:!0,label:`삭제`,iconBefore:S(`trash`)}),(0,_.jsx)(v,{vertical:!0,loading:!0,label:`저장 중`})]})]})},k={name:`아이콘 + 텍스트 (세로) · 균등 배분`,render:()=>(0,_.jsx)(x,{children:(0,_.jsxs)(f,{equal:!0,children:[(0,_.jsx)(v,{variant:`text`,vertical:!0,label:`홈`,iconBefore:S(`home`)}),(0,_.jsx)(v,{variant:`text`,vertical:!0,label:`카테고리`,iconBefore:S(`grid`)}),(0,_.jsx)(v,{vertical:!0,label:`장바구니`,iconBefore:S(`cart`)}),(0,_.jsx)(v,{variant:`text`,vertical:!0,label:`마이`,iconBefore:S(`user`)})]})})},A={name:`텍스트 + 아이콘`,render:()=>(0,_.jsx)(x,{children:(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{label:`다음`,iconAfter:S(`chevron`)}),(0,_.jsx)(v,{color:`default`,label:`자세히 보기`,iconAfter:S(`external`)}),(0,_.jsx)(v,{variant:`text`,label:`링크 이동`,iconAfter:S(`chevron`)})]})})},j={name:`아이콘 버튼`,render:()=>(0,_.jsx)(x,{children:(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{iconOnly:!0,ariaLabel:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{color:`default`,iconOnly:!0,ariaLabel:`설정`,iconBefore:S(`settings`)}),(0,_.jsx)(v,{variant:`ghost`,iconOnly:!0,ariaLabel:`검색`,iconBefore:S(`search`)}),(0,_.jsx)(v,{variant:`outline`,iconOnly:!0,ariaLabel:`편집`,iconBefore:S(`edit`)}),(0,_.jsx)(v,{color:`danger`,iconOnly:!0,ariaLabel:`삭제`,iconBefore:S(`trash`)}),(0,_.jsx)(v,{iconOnly:!0,disabled:!0,ariaLabel:`추가`,iconBefore:S(`plus`)})]})})},M={name:`아이콘 버튼 크기`,render:()=>(0,_.jsx)(x,{children:(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{iconOnly:!0,size:`sm`,ariaLabel:`추가 (small)`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{iconOnly:!0,ariaLabel:`추가 (medium)`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{iconOnly:!0,size:`lg`,ariaLabel:`추가 (large)`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{color:`default`,iconOnly:!0,size:`sm`,ariaLabel:`다운로드 (small)`,iconBefore:S(`download`)}),(0,_.jsx)(v,{color:`default`,iconOnly:!0,ariaLabel:`다운로드 (medium)`,iconBefore:S(`download`)}),(0,_.jsx)(v,{color:`default`,iconOnly:!0,size:`lg`,ariaLabel:`다운로드 (large)`,iconBefore:S(`download`)})]})})},N={name:`색상 변형`,render:()=>(0,_.jsx)(x,{children:(0,_.jsxs)(f,{children:[[`success`,`danger`,`warning`].map(e=>(0,_.jsx)(v,{color:e,label:e[0].toUpperCase()+e.slice(1)},e)),(0,_.jsx)(v,{variant:`outline`,label:`Outline`})]})})},P={name:`크기`,render:()=>(0,_.jsx)(x,{children:(0,_.jsx)(f,{children:[`sm`,`md`,`lg`].map(e=>(0,_.jsx)(v,{size:e,label:e===`sm`?`Small`:e===`lg`?`Large`:`Medium`},e))})})},F={name:`라운드`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{round:!0,label:`Primary`}),(0,_.jsx)(v,{color:`default`,round:!0,label:`Default`}),(0,_.jsx)(v,{variant:`ghost`,round:!0,label:`Ghost`}),(0,_.jsx)(v,{variant:`outline`,round:!0,label:`Outline`}),(0,_.jsx)(v,{color:`success`,round:!0,label:`Success`}),(0,_.jsx)(v,{color:`danger`,round:!0,label:`Danger`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{round:!0,size:`sm`,label:`Small`}),(0,_.jsx)(v,{round:!0,label:`Medium`}),(0,_.jsx)(v,{round:!0,size:`lg`,label:`Large`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{round:!0,label:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{color:`default`,round:!0,label:`다음`,iconAfter:S(`chevron`)}),(0,_.jsx)(v,{variant:`text`,round:!0,label:`더 보기`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{round:!0,iconOnly:!0,ariaLabel:`추가`,iconBefore:S(`plus`)}),(0,_.jsx)(v,{color:`default`,round:!0,iconOnly:!0,ariaLabel:`설정`,iconBefore:S(`settings`)}),(0,_.jsx)(v,{variant:`outline`,round:!0,iconOnly:!0,size:`sm`,ariaLabel:`검색`,iconBefore:S(`search`)}),(0,_.jsx)(v,{color:`danger`,round:!0,iconOnly:!0,size:`lg`,ariaLabel:`삭제`,iconBefore:S(`trash`)})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-round btn_group-fit`,children:[(0,_.jsx)(v,{color:`default`,label:`일`}),(0,_.jsx)(v,{color:`default`,label:`주`}),(0,_.jsx)(v,{label:`월`}),(0,_.jsx)(v,{color:`default`,label:`년`})]})]})},I={name:`너비`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsx)(v,{block:!0,label:`전체 너비 버튼`}),(0,_.jsxs)(f,{equal:!0,children:[(0,_.jsx)(v,{color:`default`,label:`취소`}),(0,_.jsx)(v,{label:`확인`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{color:`default`,grow:!0,label:`취소`}),(0,_.jsx)(v,{grow:!0,label:`확인`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{color:`default`,grow:!0,label:`옵션 A`}),(0,_.jsx)(v,{color:`default`,grow:!0,label:`옵션 B`}),(0,_.jsx)(v,{grow:!0,label:`옵션 C`})]}),(0,_.jsxs)(f,{align:`start`,children:[(0,_.jsx)(v,{variant:`ghost`,fit:!0,label:`뒤로`}),(0,_.jsx)(v,{color:`default`,fit:!0,label:`취소`}),(0,_.jsx)(v,{fit:!0,label:`저장`})]}),(0,_.jsxs)(f,{align:`end`,children:[(0,_.jsx)(v,{variant:`ghost`,fit:!0,label:`뒤로`}),(0,_.jsx)(v,{color:`default`,fit:!0,label:`취소`}),(0,_.jsx)(v,{fit:!0,label:`저장`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{variant:`ghost`,fit:!0,label:`뒤로`}),(0,_.jsx)(v,{color:`default`,grow:!0,label:`임시 저장`}),(0,_.jsx)(v,{grow:!0,label:`제출`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{color:`default`,grow:!0,label:`본문 영역`}),(0,_.jsx)(v,{fit:!0,label:`확인`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{color:`default`,grow:`2`,label:`2배 너비`}),(0,_.jsx)(v,{grow:!0,label:`1배 너비`})]}),(0,_.jsx)(v,{block:!0,label:`전체 너비 다운로드`,iconBefore:S(`download`)})]})},L={name:`상태`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{disabled:!0,label:`Primary`}),(0,_.jsx)(v,{color:`default`,disabled:!0,label:`Default`}),(0,_.jsx)(v,{variant:`outline`,disabled:!0,label:`Outline`}),(0,_.jsx)(v,{variant:`ghost`,disabled:!0,label:`Ghost`}),(0,_.jsx)(v,{variant:`text`,disabled:!0,label:`Text`}),(0,_.jsx)(v,{color:`danger`,disabled:!0,label:`Danger`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{ariaDisabled:!0,label:`is-disabled`}),(0,_.jsx)(v,{color:`default`,ariaDisabled:!0,label:`is-disabled`}),(0,_.jsx)(v,{variant:`outline`,ariaDisabled:!0,label:`is-disabled`})]}),(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{loading:!0,label:`저장 중`}),(0,_.jsx)(v,{color:`default`,loading:!0,label:`처리 중`}),(0,_.jsx)(v,{variant:`outline`,loading:!0,label:`업로드 중`}),(0,_.jsx)(v,{iconOnly:!0,loading:!0,ariaLabel:`저장 중`})]}),(0,_.jsx)(v,{block:!0,loading:!0,label:`전체 너비 로딩`})]})},R={name:`버튼 그룹`,render:()=>(0,_.jsxs)(x,{children:[(0,_.jsxs)(`div`,{className:`btn_group btn_group-fit btn_group-align-start`,children:[(0,_.jsx)(v,{color:`default`,size:`sm`,label:`Left`}),(0,_.jsx)(v,{color:`default`,size:`sm`,label:`Middle`}),(0,_.jsx)(v,{color:`default`,size:`sm`,label:`Right`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-fit btn_group-align-start`,children:[(0,_.jsx)(v,{color:`default`,label:`Left`}),(0,_.jsx)(v,{color:`default`,label:`Middle`}),(0,_.jsx)(v,{color:`default`,label:`Right`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-fit btn_group-align-start`,children:[(0,_.jsx)(v,{color:`default`,size:`lg`,label:`Left`}),(0,_.jsx)(v,{color:`default`,size:`lg`,label:`Middle`}),(0,_.jsx)(v,{color:`default`,size:`lg`,label:`Right`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-fit btn_group-align-center`,children:[(0,_.jsx)(v,{color:`default`,label:`Left`}),(0,_.jsx)(v,{color:`default`,label:`Middle`}),(0,_.jsx)(v,{color:`default`,label:`Right`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-fit btn_group-align-end`,children:[(0,_.jsx)(v,{color:`default`,label:`Left`}),(0,_.jsx)(v,{color:`default`,label:`Middle`}),(0,_.jsx)(v,{color:`default`,label:`Right`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-block`,children:[(0,_.jsx)(v,{color:`default`,label:`Left`}),(0,_.jsx)(v,{label:`Middle`}),(0,_.jsx)(v,{color:`default`,label:`Right`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-vertical btn_group-fit btn_group-align-start`,children:[(0,_.jsx)(v,{color:`default`,label:`상단`}),(0,_.jsx)(v,{color:`default`,label:`중간`}),(0,_.jsx)(v,{color:`default`,label:`하단`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-vertical btn_group-fit btn_group-align-center`,children:[(0,_.jsx)(v,{color:`default`,label:`상단`}),(0,_.jsx)(v,{color:`default`,label:`중간`}),(0,_.jsx)(v,{color:`default`,label:`하단`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-vertical btn_group-fit btn_group-align-end`,children:[(0,_.jsx)(v,{color:`default`,label:`상단`}),(0,_.jsx)(v,{color:`default`,label:`중간`}),(0,_.jsx)(v,{color:`default`,label:`하단`})]}),(0,_.jsxs)(`div`,{className:`btn_group btn_group-vertical btn_group-block`,children:[(0,_.jsx)(v,{color:`default`,label:`상단`}),(0,_.jsx)(v,{color:`default`,label:`중간`}),(0,_.jsx)(v,{color:`default`,label:`하단`})]}),(0,_.jsxs)(`div`,{className:`btn_stack`,children:[(0,_.jsx)(v,{block:!0,label:`로그인`}),(0,_.jsx)(v,{color:`default`,block:!0,label:`회원가입`})]}),(0,_.jsxs)(`div`,{className:`btn_stack`,children:[(0,_.jsx)(v,{block:!0,label:`결제하기`}),(0,_.jsx)(v,{variant:`text`,label:`쿠폰 적용`})]}),(0,_.jsxs)(`div`,{className:`btn_stack`,children:[(0,_.jsx)(v,{block:!0,label:`다운로드`,iconBefore:S(`download`)}),(0,_.jsxs)(`p`,{className:`btn_stack-text`,children:[`최신 버전 v2.0 · `,(0,_.jsx)(`a`,{href:`#release`,children:`릴리스 노트`})]})]})]})},z={name:`루트 태그`,render:()=>(0,_.jsx)(x,{children:(0,_.jsxs)(f,{children:[(0,_.jsx)(v,{label:`button`}),(0,_.jsx)(v,{tag:`a`,href:`#`,variant:`outline`,label:`a + href`}),(0,_.jsx)(v,{tag:`div`,variant:`ghost`,label:`div → role=button`}),(0,_.jsx)(v,{tag:`a`,role:`link`,variant:`text`,label:`a, role=link`})]})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo>
      <B {...buttonPropsFromArgs(args)} />
    </Demo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '기본 유형',
  render: () => <Demo>
      <Row>
        <B label="Filled Primary" variant="filled" color="primary" />
        <B label="Filled Default" variant="filled" color="default" />
        <B label="Outline" variant="outline" color="primary" />
        <B label="Ghost" variant="ghost" />
        <B label="Text" variant="text" color="primary" />
      </Row>
      <Row>
        <B color="success" label="Success" />
        <B color="warning" label="Warning" />
        <B color="danger" label="Danger" />
        <B variant="text" color="muted" label="Text Muted" />
        <B variant="text" color="danger" label="Text Danger" />
      </Row>
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '셀렉트 박스형',
  render: () => <Demo>
      <Row>
        <B variant="select" label="서울특별시" haspopup="listbox" />
        <B variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
        <B variant="select" open label="카테고리" haspopup="listbox" />
      </Row>
      <Row>
        <B variant="select" size="sm" label="Small" />
        <B variant="select" label="Medium" />
        <B variant="select" size="lg" label="Large" />
        <B variant="select" disabled label="비활성" />
        <B variant="select" error invalid label="필수 선택" />
      </Row>
      <B variant="select" block label="전체 너비 셀렉트 트리거" />
      <Row>
        <B variant="select" selectText label="최신순" />
        <B variant="select" selectText placeholder label="정렬 기준" />
        <B variant="select" selectText open label="필터" />
        <B variant="select" selectText size="sm" label="Small" />
        <B variant="select" selectText disabled label="비활성" />
      </Row>
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '텍스트 버튼',
  render: () => <Demo>
      <Row>
        <B variant="text" label="Primary" />
        <B variant="text" color="muted" label="Muted" />
        <B variant="text" color="danger" label="Danger" />
        <B variant="text" color="success" label="Success" />
        <B variant="text" color="warning" label="Warning" />
      </Row>
      <Row>
        <B variant="text" color="danger" label="삭제" iconBefore={icon('trash')} />
        <B variant="text" color="success" label="완료" iconBefore={icon('check')} />
        <B variant="text" color="warning" label="주의" iconAfter={icon('warning')} />
        <B variant="text" color="muted" label="자세히" iconAfter={icon('chevron')} />
      </Row>
      <Row>
        <B variant="text" label="더 보기" />
        <B variant="text" label="링크 복사" />
        <B variant="text" label="취소" />
        <B variant="text" label="건너뛰기" />
      </Row>
      <Row>
        <B variant="text" label="추가" iconBefore={icon('plus')} />
        <B variant="text" label="다운로드" iconBefore={icon('download')} />
        <B variant="text" label="링크 열기" iconBefore={icon('external')} />
        <B variant="text" label="설정" iconBefore={icon('settings')} />
      </Row>
      <Row>
        <B variant="text" label="다음" iconAfter={icon('chevron')} />
        <B variant="text" label="전체 보기" iconAfter={icon('chevron')} />
        <B variant="text" label="삭제" iconAfter={icon('trash')} />
        <B variant="text" label="새로고침" iconAfter={icon('refresh')} />
      </Row>
      <Row>
        <B variant="text" size="sm" label="Small" />
        <B variant="text" label="Medium" />
        <B variant="text" size="lg" label="Large" />
        <B variant="text" size="sm" label="추가" iconBefore={icon('plus')} />
        <B variant="text" size="lg" label="다음" iconAfter={icon('chevron')} />
      </Row>
      <Row>
        <B variant="text" iconOnly ariaLabel="검색" iconBefore={icon('search')} />
        <B variant="text" iconOnly ariaLabel="편집" iconBefore={icon('edit')} />
        <B variant="text" iconOnly size="sm" ariaLabel="닫기" iconBefore={icon('close')} />
        <B variant="text" disabled label="비활성" />
        <B variant="text" ariaDisabled label="is-disabled" iconAfter={icon('chevron')} />
      </Row>
      <B variant="text" block label="전체 너비 텍스트 버튼" />
    </Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트',
  render: () => <Demo>
      <Row>
        <B label="추가" iconBefore={icon('plus')} />
        <B color="default" label="다운로드" iconBefore={icon('download')} />
        <B variant="outline" label="새 항목" iconBefore={icon('plus')} />
      </Row>
    </Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트 (세로)',
  render: () => <Demo>
      <Row>
        <B vertical label="홈" iconBefore={icon('home')} />
        <B color="default" vertical label="검색" iconBefore={icon('search')} />
        <B variant="ghost" vertical label="마이" iconBefore={icon('user')} />
        <B variant="text" vertical label="추가" iconBefore={icon('plus')} />
        <B variant="outline" vertical label="다운로드" iconBefore={icon('download')} />
      </Row>
      <Row>
        <B vertical size="sm" label="추가" iconBefore={icon('plus')} />
        <B vertical label="추가" iconBefore={icon('plus')} />
        <B vertical size="lg" label="추가" iconBefore={icon('plus')} />
      </Row>
      <Row>
        <B color="default" vertical round label="가이드" iconBefore={icon('book')} />
        <B vertical round label="즐겨찾기" iconBefore={icon('star')} />
        <B variant="ghost" vertical disabled label="삭제" iconBefore={icon('trash')} />
        <B vertical loading label="저장 중" />
      </Row>
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트 (세로) · 균등 배분',
  render: () => <Demo>
      <Row equal>
        <B variant="text" vertical label="홈" iconBefore={icon('home')} />
        <B variant="text" vertical label="카테고리" iconBefore={icon('grid')} />
        <B vertical label="장바구니" iconBefore={icon('cart')} />
        <B variant="text" vertical label="마이" iconBefore={icon('user')} />
      </Row>
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '텍스트 + 아이콘',
  render: () => <Demo>
      <Row>
        <B label="다음" iconAfter={icon('chevron')} />
        <B color="default" label="자세히 보기" iconAfter={icon('external')} />
        <B variant="text" label="링크 이동" iconAfter={icon('chevron')} />
      </Row>
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '아이콘 버튼',
  render: () => <Demo>
      <Row>
        <B iconOnly ariaLabel="추가" iconBefore={icon('plus')} />
        <B color="default" iconOnly ariaLabel="설정" iconBefore={icon('settings')} />
        <B variant="ghost" iconOnly ariaLabel="검색" iconBefore={icon('search')} />
        <B variant="outline" iconOnly ariaLabel="편집" iconBefore={icon('edit')} />
        <B color="danger" iconOnly ariaLabel="삭제" iconBefore={icon('trash')} />
        <B iconOnly disabled ariaLabel="추가" iconBefore={icon('plus')} />
      </Row>
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '아이콘 버튼 크기',
  render: () => <Demo>
      <Row>
        <B iconOnly size="sm" ariaLabel="추가 (small)" iconBefore={icon('plus')} />
        <B iconOnly ariaLabel="추가 (medium)" iconBefore={icon('plus')} />
        <B iconOnly size="lg" ariaLabel="추가 (large)" iconBefore={icon('plus')} />
        <B color="default" iconOnly size="sm" ariaLabel="다운로드 (small)" iconBefore={icon('download')} />
        <B color="default" iconOnly ariaLabel="다운로드 (medium)" iconBefore={icon('download')} />
        <B color="default" iconOnly size="lg" ariaLabel="다운로드 (large)" iconBefore={icon('download')} />
      </Row>
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '색상 변형',
  render: () => <Demo>
      <Row>
        {(['success', 'danger', 'warning'] as const).map(color => <B key={color} color={color} label={color[0].toUpperCase() + color.slice(1)} />)}
        <B variant="outline" label="Outline" />
      </Row>
    </Demo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Demo>
      <Row>
        {(['sm', 'md', 'lg'] as const).map(size => <B key={size} size={size} label={size === 'sm' ? 'Small' : size === 'lg' ? 'Large' : 'Medium'} />)}
      </Row>
    </Demo>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '라운드',
  render: () => <Demo>
      <Row>
        <B round label="Primary" />
        <B color="default" round label="Default" />
        <B variant="ghost" round label="Ghost" />
        <B variant="outline" round label="Outline" />
        <B color="success" round label="Success" />
        <B color="danger" round label="Danger" />
      </Row>
      <Row>
        <B round size="sm" label="Small" />
        <B round label="Medium" />
        <B round size="lg" label="Large" />
      </Row>
      <Row>
        <B round label="추가" iconBefore={icon('plus')} />
        <B color="default" round label="다음" iconAfter={icon('chevron')} />
        <B variant="text" round label="더 보기" />
      </Row>
      <Row>
        <B round iconOnly ariaLabel="추가" iconBefore={icon('plus')} />
        <B color="default" round iconOnly ariaLabel="설정" iconBefore={icon('settings')} />
        <B variant="outline" round iconOnly size="sm" ariaLabel="검색" iconBefore={icon('search')} />
        <B color="danger" round iconOnly size="lg" ariaLabel="삭제" iconBefore={icon('trash')} />
      </Row>
      <div className="btn_group btn_group-round btn_group-fit">
        <B color="default" label="일" />
        <B color="default" label="주" />
        <B label="월" />
        <B color="default" label="년" />
      </div>
    </Demo>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '너비',
  render: () => <Demo>
      <B block label="전체 너비 버튼" />
      <Row equal>
        <B color="default" label="취소" />
        <B label="확인" />
      </Row>
      <Row>
        <B color="default" grow label="취소" />
        <B grow label="확인" />
      </Row>
      <Row>
        <B color="default" grow label="옵션 A" />
        <B color="default" grow label="옵션 B" />
        <B grow label="옵션 C" />
      </Row>
      <Row align="start">
        <B variant="ghost" fit label="뒤로" />
        <B color="default" fit label="취소" />
        <B fit label="저장" />
      </Row>
      <Row align="end">
        <B variant="ghost" fit label="뒤로" />
        <B color="default" fit label="취소" />
        <B fit label="저장" />
      </Row>
      <Row>
        <B variant="ghost" fit label="뒤로" />
        <B color="default" grow label="임시 저장" />
        <B grow label="제출" />
      </Row>
      <Row>
        <B color="default" grow label="본문 영역" />
        <B fit label="확인" />
      </Row>
      <Row>
        <B color="default" grow="2" label="2배 너비" />
        <B grow label="1배 너비" />
      </Row>
      <B block label="전체 너비 다운로드" iconBefore={icon('download')} />
    </Demo>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '상태',
  render: () => <Demo>
      <Row>
        <B disabled label="Primary" />
        <B color="default" disabled label="Default" />
        <B variant="outline" disabled label="Outline" />
        <B variant="ghost" disabled label="Ghost" />
        <B variant="text" disabled label="Text" />
        <B color="danger" disabled label="Danger" />
      </Row>
      <Row>
        <B ariaDisabled label="is-disabled" />
        <B color="default" ariaDisabled label="is-disabled" />
        <B variant="outline" ariaDisabled label="is-disabled" />
      </Row>
      <Row>
        <B loading label="저장 중" />
        <B color="default" loading label="처리 중" />
        <B variant="outline" loading label="업로드 중" />
        <B iconOnly loading ariaLabel="저장 중" />
      </Row>
      <B block loading label="전체 너비 로딩" />
    </Demo>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '버튼 그룹',
  render: () => <Demo>
      <div className="btn_group btn_group-fit btn_group-align-start">
        <B color="default" size="sm" label="Left" />
        <B color="default" size="sm" label="Middle" />
        <B color="default" size="sm" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start">
        <B color="default" label="Left" />
        <B color="default" label="Middle" />
        <B color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-start">
        <B color="default" size="lg" label="Left" />
        <B color="default" size="lg" label="Middle" />
        <B color="default" size="lg" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-center">
        <B color="default" label="Left" />
        <B color="default" label="Middle" />
        <B color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-fit btn_group-align-end">
        <B color="default" label="Left" />
        <B color="default" label="Middle" />
        <B color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-block">
        <B color="default" label="Left" />
        <B label="Middle" />
        <B color="default" label="Right" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-start">
        <B color="default" label="상단" />
        <B color="default" label="중간" />
        <B color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-center">
        <B color="default" label="상단" />
        <B color="default" label="중간" />
        <B color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-end">
        <B color="default" label="상단" />
        <B color="default" label="중간" />
        <B color="default" label="하단" />
      </div>
      <div className="btn_group btn_group-vertical btn_group-block">
        <B color="default" label="상단" />
        <B color="default" label="중간" />
        <B color="default" label="하단" />
      </div>
      <div className="btn_stack">
        <B block label="로그인" />
        <B color="default" block label="회원가입" />
      </div>
      <div className="btn_stack">
        <B block label="결제하기" />
        <B variant="text" label="쿠폰 적용" />
      </div>
      <div className="btn_stack">
        <B block label="다운로드" iconBefore={icon('download')} />
        <p className="btn_stack-text">
          최신 버전 v2.0 · <a href="#release">릴리스 노트</a>
        </p>
      </div>
    </Demo>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '루트 태그',
  render: () => <Demo>
      <Row>
        <B label="button" />
        <B tag="a" href="#" variant="outline" label="a + href" />
        <B tag="div" variant="ghost" label="div → role=button" />
        <B tag="a" role="link" variant="text" label="a, role=link" />
      </Row>
    </Demo>
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`Basic`,`SelectType`,`TextType`,`IconText`,`VerticalIconText`,`VerticalEqual`,`TextIcon`,`IconOnly`,`IconOnlySize`,`ColorVariants`,`Sizes`,`RoundShape`,`Width`,`States`,`Groups`,`RootTag`]})))()}export{I as _,j as a,z as c,P as d,L as f,O as g,k as h,R as i,F as l,E as m,h as n,M as o,A as p,N as r,D as s,w as t,T as u,V as v};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,b as i,c as a,g as o,n as s,r as c,v as l,y as ee}from"./iframe-BkSPibU3.js";import{t as u}from"./jsx-runtime-DeHZSEgm.js";import{n as d,t as f}from"./Button-Bdofg9ij.js";import{r as p,t as m}from"./Icon-CS3T14bP.js";import{r as h,t as g}from"./Badge-DnOgmC2a.js";import{n as _,t as te}from"./Input-_-ctMqx3.js";function v({brand:e,brandSrc:t,brandAlt:n,brandBackground:r,ariaLabel:i,size:a=`md`,borderless:o=!1,dark:s=!1,sticky:c=!1,responsive:l=!1,collapseId:ee,brandContent:u,brandIcon:d,items:p,search:h,actions:g,children:_,className:te=``,...v}){let S=(0,y.useId)().replaceAll(`:`,``),C=ee||`navbar-collapse-${S}`,[w,T]=(0,y.useState)(!1),E=x.has(a)?a:`md`,D=[`navbar`,E!==`md`&&`navbar_${E}`,o&&`navbar_borderless`,s&&`navbar_dark`,c&&`navbar_sticky`,w&&`is-open`,te].filter(Boolean).join(` `),O=p??(_?(0,b.jsx)(`ul`,{className:`navbar_list`,children:_}):null),k=typeof e==`string`?e:``,A=i||n||k||`사이트`,j=[`navbar_brand`,r&&`navbar_brand-bg`].filter(Boolean).join(` `),M=r?{"--navbar-brand-bg-image":`url("${r}")`}:void 0,N=r&&!k?A:void 0,P=r?k?(0,b.jsx)(`span`,{className:`navbar_brand-sr`,children:k}):null:(0,b.jsxs)(b.Fragment,{children:[t?(0,b.jsx)(`img`,{className:`navbar_brand-image`,src:t,alt:n??k}):d,t?k?(0,b.jsx)(`span`,{className:`navbar_brand-text`,children:k}):null:e]});return(0,b.jsx)(`header`,{...v,className:D,"aria-label":v.role===`presentation`?void 0:A,"data-component":`Navbar`,"data-navbar":l||void 0,children:(0,b.jsxs)(`div`,{className:`navbar_container`,children:[(0,b.jsx)(`a`,{href:`#`,className:j,style:M,"aria-label":N,onClick:e=>e.preventDefault(),children:u??P}),l&&(0,b.jsx)(f,{variant:`ghost`,iconOnly:!0,className:`navbar_toggle`,ariaLabel:w?`메뉴 닫기`:`메뉴 열기`,"aria-expanded":w,"aria-controls":C,onClick:()=>T(e=>!e),iconBefore:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{name:`menu`,size:`sm`,className:`navbar_toggle-icon-open`}),(0,b.jsx)(m,{name:`close`,size:`sm`,className:`navbar_toggle-icon-close`})]})}),(0,b.jsxs)(`div`,{className:`navbar_collapse`,id:C,children:[(0,b.jsx)(`nav`,{className:`navbar_nav`,"aria-label":`${A} 주요 메뉴`,children:O}),h&&(0,b.jsx)(`div`,{className:`navbar_search`,children:h}),g&&(0,b.jsx)(`div`,{className:`navbar_actions`,children:g})]})]})})}var y,b,x;function S(){return(S=e((()=>{y=n(),d(),p(),b=u(),x=new Set([`sm`,`md`,`lg`]),v.__docgenInfo={description:``,methods:[],displayName:`Navbar`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},borderless:{defaultValue:{value:`false`,computed:!1},required:!1},dark:{defaultValue:{value:`false`,computed:!1},required:!1},sticky:{defaultValue:{value:`false`,computed:!1},required:!1},responsive:{defaultValue:{value:`false`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}function C({label:e,href:t=`#`,active:n=!1,badge:r,children:i,className:a=``,onClick:o,...s}){return(0,w.jsx)(`li`,{...s,className:[`navbar_item`,a].filter(Boolean).join(` `),children:(0,w.jsxs)(`a`,{href:t,className:[`navbar_link`,n&&`is-active`].filter(Boolean).join(` `),"aria-current":n?`page`:void 0,onClick:e=>{e.preventDefault(),o?.(e)},children:[i??e,r]})})}var w;function T(){return(T=e((()=>{w=u(),C.__docgenInfo={description:`NavbarItem 원본 구현.
현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.`,methods:[],displayName:`NavbarItem`,props:{href:{defaultValue:{value:`'#'`,computed:!1},required:!1},active:{defaultValue:{value:`false`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}function E({children:e,className:t=``,...n}){return(0,D.jsx)(`ul`,{...n,className:[`navbar_list`,t].filter(Boolean).join(` `),children:e})}var D;function O(){return(O=e((()=>{D=u(),E.__docgenInfo={description:`NavbarList 원본 구현.
현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.`,methods:[],displayName:`NavbarList`,props:{className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var k=t({Actions:()=>J,BadgeDemo:()=>Q,Basic:()=>W,Brand:()=>G,BrandBackground:()=>q,BrandImage:()=>K,Playground:()=>U,Responsive:()=>$,Search:()=>Y,Size:()=>X,Variant:()=>Z,__namedExportsOrder:()=>ne,default:()=>H}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ne;function re(){return(re=e((()=>{r(),S(),T(),O(),d(),p(),_(),h(),A=u(),j=v,M=C,N=E,P=f,F=m,I=te,L=g,R=({children:e})=>(0,A.jsx)(N,{children:e}),z=({label:e,active:t=!1,badge:n})=>(0,A.jsx)(M,{label:e,active:t,badge:n}),B=(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`가이드`,active:!0}),(0,A.jsx)(z,{label:`리소스`})]}),V=(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`홈`,active:!0}),(0,A.jsx)(z,{label:`컴포넌트`}),(0,A.jsx)(z,{label:`토큰`})]}),H={title:`네비게이션/Navbar`,component:j,subcomponents:{NavbarItem:M,NavbarList:N},decorators:[e=>(0,A.jsx)(`div`,{className:`navbar-story-demo`,children:(0,A.jsx)(e,{})})],parameters:{layout:`fullscreen`},args:{size:`md`,borderless:!1,dark:!1,sticky:!1,responsive:!1,collapseId:``,ariaLabel:``},argTypes:{...o,size:{control:`select`,options:[`sm`,`md`,`lg`]},borderless:{control:`boolean`},dark:{control:`boolean`},sticky:{control:`boolean`},responsive:{control:`boolean`},brandMode:i,brandImage:{...ee,description:`브랜드 로고 이미지 경로`},brandImageCustom:{control:`text`,type:{name:`string`,summary:`string`},description:`직접 입력 URL (이미지 경로가 "직접 입력"일 때)`,if:{arg:`brandImage`,eq:s}},brand:{control:`text`,type:{name:`string`,summary:`string`},description:`브랜드 텍스트`,if:{arg:`brandMode`,eq:`text`}},brandAlt:{control:`text`,type:{name:`string`,summary:`string`},description:`로고 이미지 대체 텍스트`,if:{arg:`brandMode`,neq:`text`}},brandSrc:{table:{disable:!0}},brandBackground:{table:{disable:!0}},ariaLabel:c,collapseId:a}},U={name:`Playground`,args:{brandMode:`image`,brandImage:`/images/brand/uxkm_logo_hand.svg`,brandImageCustom:``,brand:`UXKM`,brandAlt:`UXKM`,ariaLabel:`UXKM`},render:e=>(0,A.jsx)(j,{...l(e),items:V})},W={name:`기본`,args:{brandMode:`text`,brand:`UXKM`},render:e=>(0,A.jsx)(j,{...l(e),items:(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`홈`,active:!0}),(0,A.jsx)(z,{label:`컴포넌트`}),(0,A.jsx)(z,{label:`토큰`}),(0,A.jsx)(z,{label:`접근성`})]})})},G={name:`브랜드`,args:{brandMode:`text`,brand:`HTML Components`},render:e=>(0,A.jsx)(j,{...l(e),brandIcon:(0,A.jsx)(F,{name:`grid`,className:`navbar_brand-icon`}),items:B})},K={name:`브랜드 이미지`,args:{brandMode:`image`,brandImage:`/images/brand/uxkm_logo_hand.svg`,brandAlt:`UXKM`,ariaLabel:`UXKM`,brand:``},render:e=>(0,A.jsx)(j,{...l(e),items:B})},q={name:`브랜드 배경`,args:{brandMode:`background`,brandImage:`/images/brand/uxkm_logo_hand.svg`,ariaLabel:`UXKM`,brand:``},render:e=>(0,A.jsx)(j,{...l(e),items:B})},J={name:`액션 영역`,render:e=>(0,A.jsx)(j,{brand:`Dashboard`,items:(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`개요`,active:!0}),(0,A.jsx)(z,{label:`분석`}),(0,A.jsx)(z,{label:`설정`})]}),actions:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(P,{variant:`ghost`,size:`sm`,iconOnly:!0,ariaLabel:`알림`,iconBefore:(0,A.jsx)(F,{name:`bell`})}),(0,A.jsx)(P,{variant:`outline`,size:`sm`,label:`로그인`}),(0,A.jsx)(P,{variant:`filled`,color:`primary`,size:`sm`,label:`가입`})]})})},Y={name:`검색`,render:e=>(0,A.jsx)(j,{brand:`Docs`,items:(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`시작하기`}),(0,A.jsx)(z,{label:`컴포넌트`,active:!0}),(0,A.jsx)(z,{label:`패턴`})]}),search:(0,A.jsx)(I,{type:`search`,id:`navbar-search-demo`,size:`sm`,placeholder:`문서 검색…`,autoComplete:`off`,"aria-label":`문서 검색`}),actions:(0,A.jsx)(P,{variant:`filled`,color:`primary`,size:`sm`,label:`GitHub`})})},X={name:`크기`,render:e=>(0,A.jsxs)(`div`,{className:`navbar-stack-demo`,children:[(0,A.jsx)(j,{role:`presentation`,brand:`Small`,size:`sm`,items:(0,A.jsx)(R,{children:(0,A.jsx)(z,{label:`메뉴`,active:!0})})}),(0,A.jsx)(j,{role:`presentation`,brand:`Default`,items:(0,A.jsx)(R,{children:(0,A.jsx)(z,{label:`메뉴`,active:!0})})}),(0,A.jsx)(j,{role:`presentation`,brand:`Large`,size:`lg`,items:(0,A.jsx)(R,{children:(0,A.jsx)(z,{label:`메뉴`,active:!0})})})]})},Z={name:`스타일 변형`,render:e=>(0,A.jsxs)(`div`,{className:`navbar-stack-demo`,children:[(0,A.jsx)(j,{role:`presentation`,brand:`Borderless`,borderless:!0,items:(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`홈`,active:!0}),(0,A.jsx)(z,{label:`소개`})]})}),(0,A.jsx)(j,{role:`presentation`,brand:`Dark Surface`,dark:!0,items:(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`홈`,active:!0}),(0,A.jsx)(z,{label:`소개`})]})}),(0,A.jsxs)(`div`,{className:`navbar-scroll-demo`,children:[(0,A.jsx)(j,{role:`presentation`,brand:`Sticky`,sticky:!0,items:(0,A.jsx)(R,{children:(0,A.jsx)(z,{label:`고정`,active:!0})})}),(0,A.jsxs)(`div`,{className:`navbar-scroll-content`,children:[(0,A.jsx)(`p`,{children:`스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.`}),(0,A.jsx)(`p`,{children:`콘텐츠 영역 예시입니다.`}),(0,A.jsx)(`p`,{children:`추가 콘텐츠…`}),(0,A.jsx)(`p`,{children:`추가 콘텐츠…`})]})]})]})},Q={name:`배지`,render:e=>(0,A.jsx)(j,{brand:`Inbox`,items:(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`받은편지함`,active:!0}),(0,A.jsx)(z,{label:`알림`,badge:(0,A.jsx)(L,{color:`danger`,label:`3`})}),(0,A.jsx)(z,{label:`보관함`})]})})},$={name:`반응형`,args:{brandMode:`text`,brand:`Mobile`,responsive:!0,collapseId:`navbar-responsive-demo`},render:e=>(0,A.jsx)(`div`,{className:`navbar-responsive-demo`,children:(0,A.jsx)(j,{...l(e),items:(0,A.jsxs)(R,{children:[(0,A.jsx)(z,{label:`홈`,active:!0}),(0,A.jsx)(z,{label:`제품`}),(0,A.jsx)(z,{label:`가격`}),(0,A.jsx)(z,{label:`문의`})]}),actions:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(P,{variant:`outline`,size:`sm`,label:`로그인`}),(0,A.jsx)(P,{variant:`filled`,color:`primary`,size:`sm`,label:`시작하기`})]})})})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    brandMode: 'image',
    brandImage: '/images/brand/uxkm_logo_hand.svg',
    brandImageCustom: '',
    brand: 'UXKM',
    brandAlt: 'UXKM',
    ariaLabel: 'UXKM'
  },
  render: args => <Navbar {...mapNavbarBrandArgs(args)} items={playgroundMenu} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '기본',
  args: {
    brandMode: 'text',
    brand: 'UXKM'
  },
  render: args => <Navbar {...mapNavbarBrandArgs(args)} items={<Menu>
          <Item label="홈" active />
          <Item label="컴포넌트" />
          <Item label="토큰" />
          <Item label="접근성" />
        </Menu>} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '브랜드',
  args: {
    brandMode: 'text',
    brand: 'HTML Components'
  },
  render: args => <Navbar {...mapNavbarBrandArgs(args)} brandIcon={<Icon name="grid" className="navbar_brand-icon" />} items={demoMenu} />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '브랜드 이미지',
  args: {
    brandMode: 'image',
    brandImage: '/images/brand/uxkm_logo_hand.svg',
    brandAlt: 'UXKM',
    ariaLabel: 'UXKM',
    brand: ''
  },
  render: args => <Navbar {...mapNavbarBrandArgs(args)} items={demoMenu} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '브랜드 배경',
  args: {
    brandMode: 'background',
    brandImage: '/images/brand/uxkm_logo_hand.svg',
    ariaLabel: 'UXKM',
    brand: ''
  },
  render: args => <Navbar {...mapNavbarBrandArgs(args)} items={demoMenu} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '액션 영역',
  render: args => <Navbar brand="Dashboard" items={<Menu><Item label="개요" active /><Item label="분석" /><Item label="설정" /></Menu>} actions={<><Button variant="ghost" size="sm" iconOnly ariaLabel="알림" iconBefore={<Icon name="bell" />} /><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></>} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '검색',
  render: args => <Navbar brand="Docs" items={<Menu><Item label="시작하기" /><Item label="컴포넌트" active /><Item label="패턴" /></Menu>} search={<Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autoComplete="off" aria-label="문서 검색" />} actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: args => <div className="navbar-stack-demo"><Navbar role="presentation" brand="Small" size="sm" items={<Menu><Item label="메뉴" active /></Menu>} /><Navbar role="presentation" brand="Default" items={<Menu><Item label="메뉴" active /></Menu>} /><Navbar role="presentation" brand="Large" size="lg" items={<Menu><Item label="메뉴" active /></Menu>} /></div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '스타일 변형',
  render: args => <div className="navbar-stack-demo"><Navbar role="presentation" brand="Borderless" borderless items={<Menu><Item label="홈" active /><Item label="소개" /></Menu>} /><Navbar role="presentation" brand="Dark Surface" dark items={<Menu><Item label="홈" active /><Item label="소개" /></Menu>} /><div className="navbar-scroll-demo"><Navbar role="presentation" brand="Sticky" sticky items={<Menu><Item label="고정" active /></Menu>} /><div className="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div></div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '배지',
  render: args => <Navbar brand="Inbox" items={<Menu><Item label="받은편지함" active /><Item label="알림" badge={<Badge color="danger" label="3" />} /><Item label="보관함" /></Menu>} />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '반응형',
  args: {
    brandMode: 'text',
    brand: 'Mobile',
    responsive: true,
    collapseId: 'navbar-responsive-demo'
  },
  render: args => <div className="navbar-responsive-demo">
      <Navbar {...mapNavbarBrandArgs(args)} items={<Menu>
            <Item label="홈" active />
            <Item label="제품" />
            <Item label="가격" />
            <Item label="문의" />
          </Menu>} actions={<>
            <Button variant="outline" size="sm" label="로그인" />
            <Button variant="filled" color="primary" size="sm" label="시작하기" />
          </>} />
    </div>
}`,...$.parameters?.docs?.source}}},ne=[`Playground`,`Basic`,`Brand`,`BrandImage`,`BrandBackground`,`Actions`,`Search`,`Size`,`Variant`,`BadgeDemo`,`Responsive`]})))()}export{q as a,$ as c,Z as d,re as f,G as i,Y as l,Q as n,K as o,W as r,k as s,J as t,X as u};
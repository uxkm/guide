import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{T as n,_ as r,g as i,o as a,r as o}from"./iframe-BkSPibU3.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{r as c,t as l}from"./Icon-CS3T14bP.js";import{n as u,t as d}from"./Link-BNuNoDLM.js";var f=t({Basic:()=>C,BlockGroup:()=>k,Colors:()=>T,Context:()=>P,CustomContent:()=>w,Disabled:()=>N,External:()=>M,IconOnly:()=>A,Navigation:()=>O,Playground:()=>S,Sizes:()=>E,Styles:()=>D,WithIcon:()=>j,__namedExportsOrder:()=>F,default:()=>y});function p(e){let t=typeof e.target==`string`&&e.target?e.target:void 0,n=typeof e.rel==`string`&&e.rel?e.rel:void 0,r=typeof e.ariaLabel==`string`&&e.ariaLabel?e.ariaLabel:void 0;return{label:typeof e.label==`string`?e.label:void 0,href:typeof e.href==`string`?e.href:void 0,as:e.as===`button`?`button`:`a`,color:e.color,size:e.size===`sm`||e.size===`lg`||e.size===`xl`?e.size:``,ripple:e.ripple!==!1,underline:e.underline===!0,noUnderline:e.noUnderline===!0,standalone:e.standalone===!0,nav:e.nav===!0,block:e.block===!0,back:e.back===!0,iconOnly:e.iconOnly===!0,active:e.active===!0,disabled:e.disabled===!0,...t?{target:t}:{},...n?{rel:n}:{},...r?{ariaLabel:r}:{}}}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{c(),u(),r(),m=s(),h=d,g=l,_=e=>(0,m.jsx)(g,{className:`link_icon`,name:e}),v=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%228%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2212%22%20r%3D%225%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M7%2029a9%209%200%200%201%2018%200%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E`,y={title:`기본 요소/Link`,component:h,parameters:{layout:`fullscreen`,controls:{include:[`label`,`href`,`as`,`color`,`size`,`target`,`rel`,`ariaLabel`,`ripple`,`underline`,`noUnderline`,`standalone`,`nav`,`block`,`back`,`iconOnly`,`active`,`disabled`]},docs:{extractArgTypes:()=>({})}},args:{label:`Controls로 속성을 조절해 보세요.`,href:`#`,color:`primary`,size:``,target:``,rel:``,ariaLabel:``,ripple:!0,underline:!1,noUnderline:!1,standalone:!1,nav:!1,block:!1,back:!1,iconOnly:!1,active:!1,disabled:!1,as:`a`},argTypes:{...i,label:{...n,description:`링크 텍스트`},href:{...n,description:`링크 주소`},as:{control:`select`,options:[`a`,`button`],type:`string`,description:`루트 요소`},color:{control:`select`,options:[`primary`,`muted`,`success`,`warning`,`danger`,`info`],type:`string`,description:`색상`},size:{control:`select`,options:[``,`sm`,`lg`,`xl`],labels:{"":`기본`},type:`string`,description:`크기`},target:{...n,description:`target 속성`},rel:{...n,description:`rel 속성`},ariaLabel:{...o,description:`아이콘 전용 접근성 이름`},ripple:{...a,description:`클릭 리플 효과`},underline:{...a,description:`항상 밑줄`},noUnderline:{...a,description:`밑줄 없음`},standalone:{...a,description:`터치 영역 확대`},nav:{...a,description:`내비게이션 스타일`},block:{...a,description:`블록형`},back:{...a,description:`뒤로가기 스타일`},iconOnly:{...a,description:`아이콘만 표시`},active:{...a,description:`현재 페이지 활성`},disabled:{...a,description:`비활성`},icon:{table:{disable:!0}},iconAfter:{table:{disable:!0}},onClick:{table:{disable:!0}}}},b=({children:e})=>(0,m.jsx)(`div`,{className:`btn-demo`,children:e}),x=({children:e})=>(0,m.jsx)(`div`,{className:`link_row`,children:e}),S={name:`Playground`,render:e=>(0,m.jsx)(b,{children:(0,m.jsx)(h,{...p(e)})})},C={name:`기본`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{href:`#`,children:`더 보기`}),(0,m.jsx)(h,{href:`#`,children:`가이드 문서`}),(0,m.jsx)(h,{href:`#`,underline:!0,children:`항상 밑줄`})]})})},w={name:`이미지 · 아이콘 · 커스텀 요소`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{href:`#`,icon:_(`user`),children:`프로필`}),(0,m.jsxs)(h,{href:`#`,children:[(0,m.jsx)(`img`,{alt:``,className:`link_media`,src:v}),` 사용자 정보`]}),(0,m.jsx)(h,{as:`button`,icon:_(`settings`),children:`설정 열기`})]})})},T={name:`색상`,render:()=>(0,m.jsx)(b,{children:(0,m.jsx)(x,{children:[`primary`,`muted`,`success`,`warning`,`danger`,`info`].map(e=>(0,m.jsx)(h,{href:`#`,color:e,children:e[0].toUpperCase()+e.slice(1)},e))})})},E={name:`크기`,render:()=>(0,m.jsx)(b,{children:(0,m.jsx)(x,{children:[[`sm`,`Small`],[``,`Base`],[`lg`,`Large`],[`xl`,`Extra Large`]].map(([e,t])=>(0,m.jsx)(h,{href:`#`,size:e,children:t},e||`base`))})})},D={name:`스타일`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{href:`#`,children:`기본 (hover 밑줄)`}),(0,m.jsx)(h,{href:`#`,underline:!0,children:`항상 밑줄`}),(0,m.jsx)(h,{href:`#`,noUnderline:!0,children:`밑줄 없음`}),(0,m.jsx)(h,{href:`#`,standalone:!0,children:`터치 영역 확대`})]})})},O={name:`내비게이션`,render:()=>(0,m.jsxs)(b,{children:[(0,m.jsxs)(`nav`,{"aria-label":`섹션 내비게이션`,className:`link_group-inline`,children:[(0,m.jsx)(h,{href:`#`,nav:!0,active:!0,children:`개요`}),(0,m.jsx)(h,{href:`#`,nav:!0,children:`컴포넌트`}),(0,m.jsx)(h,{href:`#`,nav:!0,children:`토큰`}),(0,m.jsx)(h,{href:`#`,nav:!0,children:`접근성`})]}),(0,m.jsx)(h,{href:`#`,back:!0,icon:_(`arrow-left`),children:`목록으로 돌아가기`})]})},k={name:`블록 · 그룹`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(`div`,{className:`link_group`,style:{maxWidth:280,width:`100%`},children:[(0,m.jsx)(h,{href:`#`,block:!0,icon:_(`book`),children:`가이드 시작하기`}),(0,m.jsx)(h,{href:`#`,block:!0,icon:_(`download`),children:`파일 다운로드`}),(0,m.jsx)(h,{href:`#`,block:!0,color:`muted`,icon:_(`settings`),children:`환경 설정`})]})})},A={name:`아이콘 전용`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{href:`#`,ariaLabel:`검색`,icon:_(`search`),iconOnly:!0}),(0,m.jsx)(h,{href:`#`,ariaLabel:`편집`,icon:_(`edit`),iconOnly:!0}),(0,m.jsx)(h,{href:`#`,ariaLabel:`더 보기`,color:`muted`,icon:_(`settings`),iconOnly:!0})]})})},j={name:`아이콘`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{href:`#`,icon:_(`download`),children:`다운로드`}),(0,m.jsx)(h,{href:`#`,iconAfter:_(`external`),children:`외부 링크`}),(0,m.jsx)(h,{href:`#`,back:!0,icon:_(`arrow-left`),children:`이전 페이지`})]})})},M={name:`새 창 열기`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(h,{href:`https://example.com`,iconAfter:_(`external`),rel:`noopener noreferrer`,target:`_blank`,children:[`외부 사이트 열기 `,(0,m.jsx)(`span`,{className:`sr_only`,children:`(새 창)`})]})})},N={name:`비활성`,render:()=>(0,m.jsx)(b,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{href:`#`,disabled:!0,children:`비활성 링크`}),(0,m.jsx)(h,{as:`button`,disabled:!0,children:`비활성 버튼형 링크`})]})})},P={name:`문맥 속 사용`,render:()=>(0,m.jsxs)(b,{children:[(0,m.jsx)(`div`,{className:`alert color_info`,role:`status`,children:(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:`업데이트 안내`}),(0,m.jsx)(`p`,{children:`새 버전의 변경 사항을 확인하세요.`}),(0,m.jsx)(h,{href:`#`,size:`sm`,children:`릴리스 노트 보기`})]})}),(0,m.jsxs)(`p`,{children:[`아직 계정이 없나요? `,(0,m.jsx)(h,{href:`#`,children:`회원가입`})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo>
      <Link {...linkPropsFromArgs(args)} />
    </Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo>
      <Row>
        <Link href="#">더 보기</Link>
        <Link href="#">가이드 문서</Link>
        <Link href="#" underline>
          항상 밑줄
        </Link>
      </Row>
    </Demo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '이미지 · 아이콘 · 커스텀 요소',
  render: () => <Demo>
      <Row>
        <Link href="#" icon={icon('user')}>
          프로필
        </Link>
        <Link href="#">
          <img alt="" className="link_media" src={avatar} /> 사용자 정보
        </Link>
        <Link as="button" icon={icon('settings')}>
          설정 열기
        </Link>
      </Row>
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: () => <Demo>
      <Row>
        {(['primary', 'muted', 'success', 'warning', 'danger', 'info'] as const).map(color => <Link key={color} href="#" color={color}>
            {color[0].toUpperCase() + color.slice(1)}
          </Link>)}
      </Row>
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Demo>
      <Row>
        {([['sm', 'Small'], ['', 'Base'], ['lg', 'Large'], ['xl', 'Extra Large']] as const).map(([size, text]) => <Link key={size || 'base'} href="#" size={size}>
            {text}
          </Link>)}
      </Row>
    </Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '스타일',
  render: () => <Demo>
      <Row>
        <Link href="#">기본 (hover 밑줄)</Link>
        <Link href="#" underline>
          항상 밑줄
        </Link>
        <Link href="#" noUnderline>
          밑줄 없음
        </Link>
        <Link href="#" standalone>
          터치 영역 확대
        </Link>
      </Row>
    </Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '내비게이션',
  render: () => <Demo>
      <nav aria-label="섹션 내비게이션" className="link_group-inline">
        <Link href="#" nav active>
          개요
        </Link>
        <Link href="#" nav>
          컴포넌트
        </Link>
        <Link href="#" nav>
          토큰
        </Link>
        <Link href="#" nav>
          접근성
        </Link>
      </nav>
      <Link href="#" back icon={icon('arrow-left')}>
        목록으로 돌아가기
      </Link>
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '블록 · 그룹',
  render: () => <Demo>
      <div className="link_group" style={{
      maxWidth: 280,
      width: '100%'
    }}>
        <Link href="#" block icon={icon('book')}>
          가이드 시작하기
        </Link>
        <Link href="#" block icon={icon('download')}>
          파일 다운로드
        </Link>
        <Link href="#" block color="muted" icon={icon('settings')}>
          환경 설정
        </Link>
      </div>
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '아이콘 전용',
  render: () => <Demo>
      <Row>
        <Link href="#" ariaLabel="검색" icon={icon('search')} iconOnly />
        <Link href="#" ariaLabel="편집" icon={icon('edit')} iconOnly />
        <Link href="#" ariaLabel="더 보기" color="muted" icon={icon('settings')} iconOnly />
      </Row>
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => <Demo>
      <Row>
        <Link href="#" icon={icon('download')}>
          다운로드
        </Link>
        <Link href="#" iconAfter={icon('external')}>
          외부 링크
        </Link>
        <Link href="#" back icon={icon('arrow-left')}>
          이전 페이지
        </Link>
      </Row>
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '새 창 열기',
  render: () => <Demo>
      <Link href="https://example.com" iconAfter={icon('external')} rel="noopener noreferrer" target="_blank">
        외부 사이트 열기 <span className="sr_only">(새 창)</span>
      </Link>
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <Demo>
      <Row>
        <Link href="#" disabled>
          비활성 링크
        </Link>
        <Link as="button" disabled>
          비활성 버튼형 링크
        </Link>
      </Row>
    </Demo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '문맥 속 사용',
  render: () => <Demo>
      <div className="alert color_info" role="status">
        <div>
          <strong>업데이트 안내</strong>
          <p>새 버전의 변경 사항을 확인하세요.</p>
          <Link href="#" size="sm">
            릴리스 노트 보기
          </Link>
        </div>
      </div>
      <p>
        아직 계정이 없나요? <Link href="#">회원가입</Link>
      </p>
    </Demo>
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`Basic`,`CustomContent`,`Colors`,`Sizes`,`Styles`,`Navigation`,`BlockGroup`,`IconOnly`,`WithIcon`,`External`,`Disabled`,`Context`]})))()}export{w as a,A as c,E as d,D as f,P as i,f as l,I as m,k as n,N as o,j as p,T as r,M as s,C as t,O as u};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o,t as s}from"./Icon-CS3T14bP.js";var c=t({Background:()=>x,Basic:()=>g,Colors:()=>y,CustomSvg:()=>_,Gallery:()=>E,Group:()=>w,IconButton:()=>S,Inline:()=>b,Playground:()=>h,Pulse:()=>C,Sizes:()=>v,Spin:()=>T,__namedExportsOrder:()=>D,default:()=>d}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),o(),l=i(),u=s,d={title:`기본 요소/Icon`,component:u,parameters:{layout:`fullscreen`},args:{name:`search`,size:`md`,color:``,inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ripple:!0,ariaLabel:``,title:``,className:``},argTypes:{...r,name:{control:`select`,options:a,description:`등록된 아이콘 이름`},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`크기`},color:{control:`select`,options:[``,`default`,`primary`,`success`,`warning`,`danger`,`info`,`muted`],description:`색상`},ariaLabel:{control:`text`,description:`접근성 이름`},title:{control:`text`,description:`SVG title`},inline:{control:`boolean`,description:`텍스트 인라인 정렬`},spin:{control:`boolean`,description:`회전 애니메이션`},button:{control:`boolean`,description:`button 래퍼`},circle:{control:`boolean`,description:`원형 배경`},square:{control:`boolean`,description:`사각형 배경`},pulse:{control:`boolean`,description:`펄스 효과 (circle)`},ripple:{control:`boolean`,description:`button일 때 리플`},className:{control:`text`,description:`사용자 정의 클래스`},children:{table:{disable:!0},description:`커스텀 SVG 도형`}}},f=({children:e})=>(0,l.jsx)(`div`,{className:`btn-demo`,children:e}),p=({children:e})=>(0,l.jsx)(`div`,{className:`icon_group`,children:e}),m=({children:e,...t})=>t,h={name:`Playground`,args:{name:`search`,ariaLabel:`검색`},render:e=>(0,l.jsx)(f,{children:(0,l.jsx)(u,{...e})})},g={name:`기본`,render:e=>(0,l.jsx)(f,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)(u,{...m(e),name:`search`}),(0,l.jsx)(u,{...m(e),name:`edit`}),(0,l.jsx)(u,{...m(e),name:`trash`})]})})},_={name:`커스텀 SVG`,render:e=>(0,l.jsx)(f,{children:(0,l.jsxs)(p,{children:[(0,l.jsxs)(u,{...m(e),children:[(0,l.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,l.jsx)(`path`,{d:`m21 21-4.35-4.35`})]}),(0,l.jsxs)(u,{...m(e),children:[(0,l.jsx)(`path`,{d:`M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`}),(0,l.jsx)(`path`,{d:`M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z`})]})]})})},v={name:`크기`,render:e=>(0,l.jsx)(f,{children:(0,l.jsx)(p,{children:[`sm`,`md`,`lg`,`xl`].map(t=>(0,l.jsx)(u,{...m(e),name:`plus`,size:t,ariaLabel:e.size===t?`Controls 적용 중`:void 0},t))})})},y={name:`색상`,render:e=>(0,l.jsx)(f,{children:(0,l.jsx)(p,{children:[[`star`,`default`],[`star`,`primary`],[`check-circle`,`success`],[`alert-triangle`,`warning`],[`x-circle`,`danger`]].map(([t,n])=>(0,l.jsx)(u,{...m(e),name:t,color:n,ariaLabel:e.color===n?`Controls 적용 중`:void 0},`${t}-${n}`))})})},b={name:`텍스트 인라인`,render:e=>(0,l.jsxs)(f,{children:[(0,l.jsxs)(`p`,{children:[(0,l.jsx)(u,{...m(e),name:`info`,inline:!0,color:`info`,ariaLabel:`안내`}),` `,(0,l.jsx)(`span`,{children:`변경 사항이 자동 저장됩니다.`})]}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(u,{...m(e),name:`check-circle`,inline:!0,color:`success`,ariaLabel:`완료`}),` `,(0,l.jsx)(`span`,{children:`업로드가 완료되었습니다.`})]})]})},x={name:`원형 · 사각형 배경`,render:e=>(0,l.jsx)(f,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)(u,{...m(e),name:`plus`,circle:!0,color:`primary`,size:`sm`}),(0,l.jsx)(u,{...m(e),name:`check-circle`,circle:!0,color:`success`,size:`sm`}),(0,l.jsx)(u,{...m(e),name:`trash`,circle:!0,color:`danger`,size:`lg`}),(0,l.jsx)(u,{...m(e),name:`edit`,square:!0,color:`primary`})]})})},S={name:`아이콘 버튼`,render:e=>(0,l.jsx)(f,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)(u,{...m(e),name:`search`,button:!0,color:`primary`,ariaLabel:`검색`}),(0,l.jsx)(u,{...m(e),name:`settings`,button:!0,color:`muted`,ariaLabel:`설정`}),(0,l.jsx)(u,{...m(e),name:`close`,button:!0,color:`danger`,ariaLabel:`삭제`})]})})},C={name:`펄스`,render:e=>(0,l.jsx)(f,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)(u,{...m(e),name:`bell`,circle:!0,pulse:!0,color:`primary`,size:`sm`}),(0,l.jsx)(u,{...m(e),circle:!0,pulse:!0,color:`danger`,size:`sm`,children:(0,l.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`,fill:`currentColor`,stroke:`none`})})]})})},w={name:`그룹`,render:e=>(0,l.jsxs)(f,{children:[(0,l.jsxs)(p,{children:[(0,l.jsx)(u,{...m(e),name:`upload`,color:`muted`}),(0,l.jsx)(u,{...m(e),name:`download`,color:`muted`}),(0,l.jsx)(u,{...m(e),name:`trash`,color:`muted`})]}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(u,{...m(e),name:`user`,circle:!0,color:`primary`,size:`sm`}),` `,(0,l.jsx)(`span`,{className:`color_muted`,children:`홍길동님이 댓글을 남겼습니다.`})]})]})},T={name:`회전`,render:e=>(0,l.jsx)(f,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)(u,{...m(e),name:`loader`,spin:!0,color:`primary`}),(0,l.jsx)(u,{...m(e),name:`loader`,spin:!0,size:`lg`,color:`muted`})]})})},E={name:`아이콘 유형`,render:e=>(0,l.jsx)(`div`,{className:`icon_grid`,children:a.map(t=>(0,l.jsxs)(`div`,{className:`icon_grid-item`,children:[(0,l.jsx)(u,{...m(e),name:t,size:`lg`,ariaLabel:e.name===t?`Controls 적용 중`:void 0}),(0,l.jsxs)(`span`,{children:[t,e.name===t?` · Controls 적용 중`:``]})]},t))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    name: 'search',
    ariaLabel: '검색'
  },
  render: args => <Demo>
      <Icon {...args} />
    </Demo>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="search" />
        <Icon {...spreadArgs(args)} name="edit" />
        <Icon {...spreadArgs(args)} name="trash" />
      </Row>
    </Demo>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '커스텀 SVG',
  render: args => <Demo>
      <Row>
        <Icon {...spreadArgs(args)}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </Icon>
        <Icon {...spreadArgs(args)}>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
        </Icon>
      </Row>
    </Demo>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: args => <Demo>
      <Row>
        {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Icon key={size} {...spreadArgs(args)} name="plus" size={size} ariaLabel={args.size === size ? 'Controls 적용 중' : undefined} />)}
      </Row>
    </Demo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: args => <Demo>
      <Row>
        {([['star', 'default'], ['star', 'primary'], ['check-circle', 'success'], ['alert-triangle', 'warning'], ['x-circle', 'danger']] as const).map(([name, color]) => <Icon key={\`\${name}-\${color}\`} {...spreadArgs(args)} name={name} color={color} ariaLabel={args.color === color ? 'Controls 적용 중' : undefined} />)}
      </Row>
    </Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '텍스트 인라인',
  render: args => <Demo>
      <p>
        <Icon {...spreadArgs(args)} name="info" inline color="info" ariaLabel="안내" />{' '}
        <span>변경 사항이 자동 저장됩니다.</span>
      </p>
      <p>
        <Icon {...spreadArgs(args)} name="check-circle" inline color="success" ariaLabel="완료" />{' '}
        <span>업로드가 완료되었습니다.</span>
      </p>
    </Demo>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '원형 · 사각형 배경',
  render: args => <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="plus" circle color="primary" size="sm" />
        <Icon {...spreadArgs(args)} name="check-circle" circle color="success" size="sm" />
        <Icon {...spreadArgs(args)} name="trash" circle color="danger" size="lg" />
        <Icon {...spreadArgs(args)} name="edit" square color="primary" />
      </Row>
    </Demo>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '아이콘 버튼',
  render: args => <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="search" button color="primary" ariaLabel="검색" />
        <Icon {...spreadArgs(args)} name="settings" button color="muted" ariaLabel="설정" />
        <Icon {...spreadArgs(args)} name="close" button color="danger" ariaLabel="삭제" />
      </Row>
    </Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '펄스',
  render: args => <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="bell" circle pulse color="primary" size="sm" />
        <Icon {...spreadArgs(args)} circle pulse color="danger" size="sm">
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </Icon>
      </Row>
    </Demo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '그룹',
  render: args => <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="upload" color="muted" />
        <Icon {...spreadArgs(args)} name="download" color="muted" />
        <Icon {...spreadArgs(args)} name="trash" color="muted" />
      </Row>
      <p>
        <Icon {...spreadArgs(args)} name="user" circle color="primary" size="sm" />{' '}
        <span className="color_muted">홍길동님이 댓글을 남겼습니다.</span>
      </p>
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '회전',
  render: args => <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="loader" spin color="primary" />
        <Icon {...spreadArgs(args)} name="loader" spin size="lg" color="muted" />
      </Row>
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '아이콘 유형',
  render: args => <div className="icon_grid">
      {iconNames.map(name => <div className="icon_grid-item" key={name}>
          <Icon {...spreadArgs(args)} name={name} size="lg" ariaLabel={args.name === name ? 'Controls 적용 중' : undefined} />
          <span>
            {name}
            {args.name === name ? ' · Controls 적용 중' : ''}
          </span>
        </div>)}
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Basic`,`CustomSvg`,`Sizes`,`Colors`,`Inline`,`Background`,`IconButton`,`Pulse`,`Group`,`Spin`,`Gallery`]})))()}export{E as a,c,v as d,T as f,_ as i,b as l,g as n,w as o,O as p,y as r,S as s,x as t,C as u};
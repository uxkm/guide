import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-Bdofg9ij.js";import{r as s,t as c}from"./Icon-CS3T14bP.js";import{r as l,t as u}from"./Avatar-oJFAt54Z.js";import{n as d,r as f,t as p}from"./Badge-DnOgmC2a.js";var m=t({Basic:()=>T,Count:()=>O,Dot:()=>D,Overlay:()=>k,Playground:()=>w,Sizes:()=>E,__namedExportsOrder:()=>A,default:()=>x}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{n(),l(),f(),a(),s(),h=i(),g=u,_=p,v=d,y=o,b=c,x={title:`데이터 표시/Badge`,component:_,parameters:{layout:`fullscreen`},args:{label:`Badge`,color:`primary`,size:`md`,dot:!1,count:!1,dotOnly:!1,ariaLabel:``,className:``},argTypes:{...r,label:{control:`text`,description:`배지 텍스트`},color:{control:`select`,options:[`default`,`primary`,`success`,`warning`,`danger`,`info`],description:`색상`},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`크기`},dot:{control:`boolean`,description:`상태 점 변형`},count:{control:`boolean`,description:`카운트형 스타일`},dotOnly:{control:`boolean`,description:`텍스트 없는 상태 점`},ariaLabel:{control:`text`,description:`접근성 이름`},className:{control:`text`,description:`사용자 정의 클래스`},children:{table:{disable:!0},description:`배지 콘텐츠`}}},S=({children:e})=>(0,h.jsx)(`div`,{className:`btn-demo`,children:(0,h.jsx)(`div`,{className:`icon_group`,children:e})}),C=({children:e,...t})=>t,w={name:`Playground`,args:{label:`Controls로 속성을 조절해 보세요.`},render:e=>(0,h.jsx)(S,{children:(0,h.jsx)(_,{...e})})},T={name:`기본`,render:e=>(0,h.jsx)(S,{children:[`default`,`primary`,`success`,`warning`,`danger`,`info`].map(t=>(0,h.jsx)(_,{...C(e),color:t,label:t[0].toUpperCase()+t.slice(1)+(e.color===t?` · Controls 적용 중`:``)},t))})},E={name:`크기`,render:e=>(0,h.jsx)(S,{children:[[`sm`,`Small`],[`md`,`Medium`],[`lg`,`Large`]].map(([t,n])=>(0,h.jsx)(_,{...C(e),size:t,label:`${n}${e.size===t?` · Controls 적용 중`:``}`},t))})},D={name:`상태 점`,render:e=>(0,h.jsxs)(S,{children:[(0,h.jsx)(_,{...C(e),dot:!0,color:`primary`,label:`Online`}),(0,h.jsx)(_,{...C(e),dot:!0,color:`success`,label:`Active`}),(0,h.jsx)(_,{...C(e),dot:!0,color:`warning`,label:`Away`}),(0,h.jsx)(_,{...C(e),dot:!0,color:`danger`,label:`Offline`})]})},O={name:`카운트`,render:e=>(0,h.jsxs)(S,{children:[(0,h.jsx)(_,{...C(e),count:!0,color:`danger`,label:`3`}),(0,h.jsx)(_,{...C(e),count:!0,label:`12`}),(0,h.jsx)(_,{...C(e),count:!0,color:`success`,label:`99+`}),(0,h.jsx)(_,{...C(e),count:!0,size:`sm`,color:`danger`,label:`5`}),(0,h.jsx)(_,{...C(e),count:!0,size:`lg`,label:`New`})]})},k={name:`겹침`,render:e=>(0,h.jsxs)(S,{children:[(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{label:`알림`}),(0,h.jsx)(_,{...C(e),count:!0,color:`danger`,ariaLabel:`읽지 않은 알림 5건`,label:`5`})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{variant:`ghost`,iconOnly:!0,ariaLabel:`메시지`,iconBefore:(0,h.jsx)(b,{name:`mail`})}),(0,h.jsx)(_,{...C(e),count:!0,color:`danger`,ariaLabel:`새 메시지 12건`,label:`12`})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(g,{color:`primary`,initials:`홍`,ariaHidden:!0}),(0,h.jsx)(_,{...C(e),dotOnly:!0,color:`success`,ariaLabel:`온라인`})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Controls로 속성을 조절해 보세요.'
  },
  render: args => <Demo>
      <Badge {...args} />
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Demo>
      {(['default', 'primary', 'success', 'warning', 'danger', 'info'] as const).map(color => <Badge key={color} {...spreadArgs(args)} color={color} label={color[0].toUpperCase() + color.slice(1) + (args.color === color ? ' · Controls 적용 중' : '')} />)}
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: args => <Demo>
      {([['sm', 'Small'], ['md', 'Medium'], ['lg', 'Large']] as const).map(([size, text]) => <Badge key={size} {...spreadArgs(args)} size={size} label={\`\${text}\${args.size === size ? ' · Controls 적용 중' : ''}\`} />)}
    </Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '상태 점',
  render: args => <Demo>
      <Badge {...spreadArgs(args)} dot color="primary" label="Online" />
      <Badge {...spreadArgs(args)} dot color="success" label="Active" />
      <Badge {...spreadArgs(args)} dot color="warning" label="Away" />
      <Badge {...spreadArgs(args)} dot color="danger" label="Offline" />
    </Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '카운트',
  render: args => <Demo>
      <Badge {...spreadArgs(args)} count color="danger" label="3" />
      <Badge {...spreadArgs(args)} count label="12" />
      <Badge {...spreadArgs(args)} count color="success" label="99+" />
      <Badge {...spreadArgs(args)} count size="sm" color="danger" label="5" />
      <Badge {...spreadArgs(args)} count size="lg" label="New" />
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '겹침',
  render: args => <Demo>
      <BadgeWrap>
        <Button label="알림" />
        <Badge {...spreadArgs(args)} count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
      </BadgeWrap>
      <BadgeWrap>
        <Button variant="ghost" iconOnly ariaLabel="메시지" iconBefore={<Icon name="mail" />} />
        <Badge {...spreadArgs(args)} count color="danger" ariaLabel="새 메시지 12건" label="12" />
      </BadgeWrap>
      <BadgeWrap>
        <Avatar color="primary" initials="홍" ariaHidden />
        <Badge {...spreadArgs(args)} dotOnly color="success" ariaLabel="온라인" />
      </BadgeWrap>
    </Demo>
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`Basic`,`Sizes`,`Dot`,`Count`,`Overlay`]})))()}export{k as a,D as i,T as n,E as o,O as r,j as s,m as t};
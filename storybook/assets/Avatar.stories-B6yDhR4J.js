import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{r as a,t as o}from"./Icon-CS3T14bP.js";import{n as s,t as c}from"./url-BJUrBafP.js";import{n as l,r as u,t as d}from"./Avatar-oJFAt54Z.js";var f=t({Basic:()=>S,Colors:()=>T,Group:()=>D,Playground:()=>x,Shapes:()=>w,Sizes:()=>C,StatusBadge:()=>E,__namedExportsOrder:()=>O,default:()=>v}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),s(),u(),a(),p=i(),m=d,h=l,g=o,_=c(`images/samples/avatar/avatar-sample.svg`),v={title:`데이터 표시/Avatar`,component:m,parameters:{layout:`fullscreen`},args:{initials:`홍`,color:`primary`,size:`md`,src:``,alt:``,square:!1,badgeColor:``,badgeLabel:``,ariaHidden:!1,className:``},argTypes:{...r,initials:{control:`text`,description:`이니셜 텍스트`},src:{control:`text`,description:`이미지 주소`},alt:{control:`text`,description:`이미지 대체 텍스트`},color:{control:`select`,options:[``,`default`,`primary`,`success`,`warning`,`danger`],description:`배경 색상`},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`크기`},square:{control:`boolean`,description:`사각형 변형`},badgeColor:{control:`select`,options:[``,`success`,`warning`,`danger`,`primary`],description:`상태 점 색상`},badgeLabel:{control:`text`,description:`상태 점 접근성 이름`},ariaHidden:{control:`boolean`,description:`장식용 숨김`},className:{control:`text`,description:`사용자 정의 클래스`},icon:{table:{disable:!0},description:`fallback 아이콘`},children:{table:{disable:!0},description:`fallback 콘텐츠`}}},y=({children:e})=>(0,p.jsx)(`div`,{className:`btn-demo`,children:(0,p.jsx)(`div`,{className:`icon_group`,children:e})}),b=({icon:e,children:t,...n})=>n,x={name:`Playground`,args:{initials:`홍`,color:`primary`,ariaHidden:!0},render:e=>(0,p.jsx)(y,{children:(0,p.jsx)(m,{...e})})},S={name:`기본`,render:e=>(0,p.jsxs)(y,{children:[(0,p.jsx)(m,{...b(e),src:_,alt:`홍길동`}),(0,p.jsx)(m,{...b(e),color:`primary`,initials:`홍`,ariaHidden:!0}),(0,p.jsx)(m,{...b(e),color:`default`,icon:(0,p.jsx)(g,{name:`user`,className:`avatar_icon`}),ariaHidden:!0})]})},C={name:`크기`,render:e=>(0,p.jsx)(y,{children:[[`sm`,`A`],[`md`,`B`],[`lg`,`C`],[`xl`,`D`]].map(([t,n])=>(0,p.jsx)(m,{...b(e),size:t,color:`primary`,initials:n,ariaHidden:!0,badgeLabel:e.size===t?`Controls 적용 중`:void 0},t))})},w={name:`형태`,render:e=>(0,p.jsxs)(y,{children:[(0,p.jsx)(m,{...b(e),color:`primary`,initials:`원`,ariaHidden:!0}),(0,p.jsx)(m,{...b(e),square:!0,color:`primary`,initials:`각`,ariaHidden:!0}),(0,p.jsx)(m,{...b(e),square:!0,src:_,alt:`홍길동`})]})},T={name:`색상`,render:e=>(0,p.jsx)(y,{children:[[`default`,`D`],[`primary`,`P`],[`success`,`S`],[`warning`,`W`],[`danger`,`E`]].map(([t,n])=>(0,p.jsx)(m,{...b(e),color:t,initials:n,ariaHidden:!0,badgeLabel:e.color===t?`Controls 적용 중`:void 0},t))})},E={name:`상태 배지`,render:e=>(0,p.jsxs)(y,{children:[(0,p.jsx)(m,{...b(e),color:`primary`,initials:`온`,badgeColor:`success`,badgeLabel:`온라인`}),(0,p.jsx)(m,{...b(e),color:`default`,initials:`대`,badgeColor:`warning`,badgeLabel:`자리 비움`}),(0,p.jsx)(m,{...b(e),color:`default`,initials:`오`,badgeColor:`danger`,badgeLabel:`오프라인`})]})},D={name:`그룹`,render:e=>(0,p.jsxs)(`div`,{className:`btn-demo`,children:[(0,p.jsxs)(h,{ariaLabel:`팀 멤버 4명`,children:[(0,p.jsx)(m,{...b(e),color:`primary`,initials:`김`,ariaHidden:!0}),(0,p.jsx)(m,{...b(e),color:`success`,initials:`이`,ariaHidden:!0}),(0,p.jsx)(m,{...b(e),color:`warning`,initials:`박`,ariaHidden:!0}),(0,p.jsx)(m,{...b(e),color:`danger`,initials:`최`,ariaHidden:!0})]}),(0,p.jsxs)(h,{ariaLabel:`팀 멤버 3명`,children:[(0,p.jsx)(m,{...b(e),src:_,alt:`홍길동`}),(0,p.jsx)(m,{...b(e),color:`primary`,initials:`홍`,ariaHidden:!0}),(0,p.jsx)(m,{...b(e),color:`default`,icon:(0,p.jsx)(g,{name:`plus`,className:`avatar_icon`}),ariaHidden:!0})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    initials: '홍',
    color: 'primary',
    ariaHidden: true
  },
  render: args => <Demo>
      <Avatar {...args} />
    </Demo>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Demo>
      <Avatar {...spreadArgs(args)} src={sample} alt="홍길동" />
      <Avatar {...spreadArgs(args)} color="primary" initials="홍" ariaHidden />
      <Avatar {...spreadArgs(args)} color="default" icon={<Icon name="user" className="avatar_icon" />} ariaHidden />
    </Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: args => <Demo>
      {([['sm', 'A'], ['md', 'B'], ['lg', 'C'], ['xl', 'D']] as const).map(([size, initial]) => <Avatar key={size} {...spreadArgs(args)} size={size} color="primary" initials={initial} ariaHidden badgeLabel={args.size === size ? 'Controls 적용 중' : undefined} />)}
    </Demo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '형태',
  render: args => <Demo>
      <Avatar {...spreadArgs(args)} color="primary" initials="원" ariaHidden />
      <Avatar {...spreadArgs(args)} square color="primary" initials="각" ariaHidden />
      <Avatar {...spreadArgs(args)} square src={sample} alt="홍길동" />
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: args => <Demo>
      {([['default', 'D'], ['primary', 'P'], ['success', 'S'], ['warning', 'W'], ['danger', 'E']] as const).map(([color, initial]) => <Avatar key={color} {...spreadArgs(args)} color={color} initials={initial} ariaHidden badgeLabel={args.color === color ? 'Controls 적용 중' : undefined} />)}
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '상태 배지',
  render: args => <Demo>
      <Avatar {...spreadArgs(args)} color="primary" initials="온" badgeColor="success" badgeLabel="온라인" />
      <Avatar {...spreadArgs(args)} color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" />
      <Avatar {...spreadArgs(args)} color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" />
    </Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '그룹',
  render: args => <div className="btn-demo">
      <AvatarGroup ariaLabel="팀 멤버 4명">
        <Avatar {...spreadArgs(args)} color="primary" initials="김" ariaHidden />
        <Avatar {...spreadArgs(args)} color="success" initials="이" ariaHidden />
        <Avatar {...spreadArgs(args)} color="warning" initials="박" ariaHidden />
        <Avatar {...spreadArgs(args)} color="danger" initials="최" ariaHidden />
      </AvatarGroup>
      <AvatarGroup ariaLabel="팀 멤버 3명">
        <Avatar {...spreadArgs(args)} src={sample} alt="홍길동" />
        <Avatar {...spreadArgs(args)} color="primary" initials="홍" ariaHidden />
        <Avatar {...spreadArgs(args)} color="default" icon={<Icon name="plus" className="avatar_icon" />} ariaHidden />
      </AvatarGroup>
    </div>
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`Basic`,`Sizes`,`Shapes`,`Colors`,`StatusBadge`,`Group`]})))()}export{w as a,k as c,D as i,S as n,C as o,T as r,E as s,f as t};
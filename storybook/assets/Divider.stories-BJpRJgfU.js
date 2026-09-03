import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o,r as s,t as c}from"./Space-B9LKwA9P.js";var l=t({Basic:()=>_,Dashed:()=>v,Orient:()=>b,Playground:()=>g,Text:()=>y,Vertical:()=>x,__namedExportsOrder:()=>S,default:()=>m}),u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),a(),o(),u=i(),d=s,f=c,p={left:`왼쪽`,"":`가운데`,right:`오른쪽`},m={title:`레이아웃/Divider`,component:d,parameters:{layout:`fullscreen`},args:{tag:`auto`,vertical:!1,dashed:!1,plain:!1,orient:``,label:``,className:``},argTypes:{...r,as:{table:{disable:!0},description:`루트 요소 (tag로 대체)`},tag:{control:`select`,options:[`auto`,`hr`,`div`,`span`],description:`루트 태그 모드 (auto면 내용·방향에 따라 자동 선택)`},vertical:{control:`boolean`,description:`세로 구분선으로 표시`},dashed:{control:`boolean`,description:`점선 스타일 적용`},plain:{control:`boolean`,description:`레이블 굵기를 낮춤`},orient:{control:`select`,options:[``,`left`,`right`],description:`레이블 위치`},orientation:{control:`select`,options:[``,`left`,`right`],description:`orient의 이전 호환 이름`},label:{control:`text`,description:`children이 없을 때 표시할 레이블`},children:{table:{disable:!0},description:`구분선 가운데 표시할 콘텐츠`},className:{control:`text`,description:`사용자 정의 클래스`}}},h=({children:e})=>(0,u.jsx)(`div`,{className:`btn-demo`,children:e}),g={name:`Playground`,args:{label:`Controls로 속성을 조절해 보세요.`},render:e=>(0,u.jsx)(h,{children:(0,u.jsx)(d,{...e})})},_={name:`기본`,render:e=>(0,u.jsxs)(h,{children:[(0,u.jsx)(`p`,{children:`위 콘텐츠`}),(0,u.jsx)(d,{...e}),(0,u.jsx)(`p`,{children:`아래 콘텐츠`})]})},v={name:`점선`,args:{dashed:!0},render:e=>(0,u.jsxs)(h,{children:[(0,u.jsx)(`p`,{children:`위 콘텐츠`}),(0,u.jsx)(d,{...e,dashed:!0}),(0,u.jsxs)(`p`,{children:[`아래 콘텐츠`,e.dashed?` · Controls 적용 중`:``]})]})},y={name:`텍스트 레이블`,args:{label:`섹션 제목`},render:e=>(0,u.jsxs)(h,{children:[(0,u.jsx)(d,{...e,label:e.label||`섹션 제목`,plain:!1,children:e.children}),(0,u.jsx)(d,{...e,plain:!0,label:`보조 설명`,children:void 0}),e.plain?(0,u.jsx)(`p`,{children:`보조 설명 · Controls 적용 중`}):null]})},b={name:`레이블 정렬`,args:{orient:`left`},render:e=>(0,u.jsx)(h,{children:[`left`,``,`right`].map(t=>(0,u.jsx)(d,{...e,orient:t,label:`${p[t]}${e.orient===t?` · Controls 적용 중`:``}`},t||`center`))})},x={name:`세로`,args:{vertical:!0},render:e=>(0,u.jsx)(h,{children:(0,u.jsxs)(f,{children:[(0,u.jsx)(`span`,{children:`항목 A`}),(0,u.jsx)(d,{...e,vertical:!0,dashed:!1}),(0,u.jsxs)(`span`,{children:[`항목 B`,e.vertical&&!e.dashed?` · Controls 적용 중`:``]}),(0,u.jsx)(d,{...e,vertical:!0,dashed:!0}),(0,u.jsxs)(`span`,{children:[`항목 C`,e.vertical&&e.dashed?` · Controls 적용 중`:``]})]})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Controls로 속성을 조절해 보세요.'
  },
  render: args => <Demo>
      <Divider {...args} />
    </Demo>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Demo>
      <p>위 콘텐츠</p>
      <Divider {...args} />
      <p>아래 콘텐츠</p>
    </Demo>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '점선',
  args: {
    dashed: true
  },
  render: args => <Demo>
      <p>위 콘텐츠</p>
      <Divider {...args} dashed />
      <p>아래 콘텐츠{args.dashed ? ' · Controls 적용 중' : ''}</p>
    </Demo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '텍스트 레이블',
  args: {
    label: '섹션 제목'
  },
  render: args => <Demo>
      <Divider {...args} label={args.label || '섹션 제목'} plain={false}>
        {args.children}
      </Divider>
      <Divider {...args} plain label="보조 설명">
        {undefined}
      </Divider>
      {args.plain ? <p>보조 설명 · Controls 적용 중</p> : null}
    </Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '레이블 정렬',
  args: {
    orient: 'left'
  },
  render: args => <Demo>
      {(['left', '', 'right'] as const).map(orient => <Divider key={orient || 'center'} {...args} orient={orient} label={\`\${ORIENT_LABELS[orient]}\${args.orient === orient ? ' · Controls 적용 중' : ''}\`} />)}
    </Demo>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '세로',
  args: {
    vertical: true
  },
  render: args => <Demo>
      <Space>
        <span>항목 A</span>
        <Divider {...args} vertical dashed={false} />
        <span>
          항목 B
          {args.vertical && !args.dashed ? ' · Controls 적용 중' : ''}
        </span>
        <Divider {...args} vertical dashed />
        <span>
          항목 C
          {args.vertical && args.dashed ? ' · Controls 적용 중' : ''}
        </span>
      </Space>
    </Demo>
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Basic`,`Dashed`,`Text`,`Orient`,`Vertical`]})))()}export{g as a,C as c,b as i,v as n,y as o,l as r,x as s,_ as t};
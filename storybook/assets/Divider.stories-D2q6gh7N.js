import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-CiBkfj5k.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o,r as s,t as c}from"./Space-BKqvTDoM.js";var l=t({Dashed:()=>v,MarginY:()=>y,Orient:()=>S,Playground:()=>_,Text:()=>x,Thickness:()=>b,Vertical:()=>C,__namedExportsOrder:()=>w,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),a(),o(),u=i(),d=s,f=c,p={left:`왼쪽`,"":`가운데`,right:`오른쪽`},m={none:`none`,xs:`xs`,sm:`sm`,"":`기본`,md:`md`,lg:`lg`,xl:`xl`},h={title:`레이아웃/Divider`,component:d,parameters:{layout:`fullscreen`},args:{tag:`auto`,vertical:!1,dashed:!1,plain:!1,orient:``,marginY:``,thickness:``,height:``,label:``,className:``},argTypes:{...r,as:{table:{disable:!0},description:`루트 요소 (tag로 대체)`},tag:{control:`select`,options:[`auto`,`hr`,`div`,`span`],description:`루트 태그 모드 (auto면 내용·방향에 따라 자동 선택)`},vertical:{control:`boolean`,description:`세로 구분선으로 표시`},dashed:{control:`boolean`,description:`점선 스타일 적용`},plain:{control:`boolean`,description:`레이블 굵기를 낮춤`},orient:{control:`select`,options:[``,`left`,`right`],description:`레이블 위치`},orientation:{control:`select`,options:[``,`left`,`right`],description:`orient의 이전 호환 이름`},marginY:{control:`text`,description:`가로=상·하 / 세로=좌·우 간격 (xs·sm·md·lg·xl·none / rem 숫자 / CSS 길이)`},thickness:{control:`text`,description:`선 두께 (xs·sm·md·lg·xl·none / rem 숫자 / CSS 길이)`},height:{control:`text`,description:`세로 구분선 길이 (xs·sm·md·lg·xl / rem 숫자 / CSS 길이)`},label:{control:`text`,description:`children이 없을 때 표시할 레이블`},children:{table:{disable:!0},description:`구분선 가운데 표시할 콘텐츠`},className:{control:`text`,description:`사용자 정의 클래스`}}},g=({children:e})=>(0,u.jsx)(`div`,{className:`btn-demo`,children:e}),_={name:`Playground`,render:e=>(0,u.jsx)(g,{children:e.vertical?(0,u.jsxs)(f,{children:[(0,u.jsx)(`span`,{children:`항목 A`}),(0,u.jsx)(d,{...e}),(0,u.jsx)(`span`,{children:`항목 B`})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{children:`위 콘텐츠`}),(0,u.jsx)(d,{...e}),(0,u.jsx)(`p`,{children:`아래 콘텐츠`})]})})},v={name:`점선`,args:{dashed:!0},render:e=>(0,u.jsxs)(g,{children:[(0,u.jsx)(`p`,{children:`위 콘텐츠`}),(0,u.jsx)(d,{...e,dashed:!0}),(0,u.jsxs)(`p`,{children:[`아래 콘텐츠`,e.dashed?` · Controls 적용 중`:``]})]})},y={name:`간격`,args:{marginY:`sm`},render:e=>(0,u.jsxs)(g,{children:[(0,u.jsx)(`p`,{children:`가로 · 상·하 간격`}),[`none`,`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`p`,{children:[`marginY `,m[t],!e.vertical&&String(e.marginY??``)===t?` · Controls 적용 중`:``]}),(0,u.jsx)(d,{...e,vertical:!1,marginY:t}),(0,u.jsx)(`p`,{children:`아래 콘텐츠`})]},t)),(0,u.jsx)(`p`,{children:`세로 · 좌·우 간격`}),(0,u.jsx)(f,{children:[`none`,`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,u.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,u.jsx)(`span`,{children:m[t]}),(0,u.jsx)(d,{...e,vertical:!0,marginY:t,height:`md`})]},t))})]})},b={name:`두께`,args:{thickness:`lg`},render:e=>(0,u.jsxs)(g,{children:[[`none`,`xs`,`sm`,``,`lg`,`xl`].map(t=>(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`p`,{children:[`thickness `,m[t],String(e.thickness??``)===String(t)?` · Controls 적용 중`:``]}),(0,u.jsx)(d,{...e,thickness:t||void 0})]},t||`md`)),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`p`,{children:[`thickness 3px`,String(e.thickness)===`3px`?` · Controls 적용 중`:``]}),(0,u.jsx)(d,{...e,thickness:`3px`})]})]})},x={name:`텍스트 레이블`,args:{label:`섹션 제목`},render:e=>(0,u.jsxs)(g,{children:[(0,u.jsx)(d,{...e,label:e.label||`섹션 제목`,plain:!1,children:e.children}),(0,u.jsx)(d,{...e,plain:!0,label:`보조 설명`,children:void 0}),e.plain?(0,u.jsx)(`p`,{children:`보조 설명 · Controls 적용 중`}):null]})},S={name:`레이블 정렬`,args:{orient:`left`},render:e=>(0,u.jsx)(g,{children:[`left`,``,`right`].map(t=>(0,u.jsx)(d,{...e,orient:t,label:`${p[t]}${e.orient===t?` · Controls 적용 중`:``}`},t||`center`))})},C={name:`세로`,args:{vertical:!0,height:`md`},render:e=>(0,u.jsxs)(g,{children:[(0,u.jsxs)(f,{children:[(0,u.jsx)(`span`,{children:`항목 A`}),(0,u.jsx)(d,{...e,vertical:!0,dashed:!1}),(0,u.jsxs)(`span`,{children:[`항목 B`,e.vertical&&!e.dashed?` · Controls 적용 중`:``]}),(0,u.jsx)(d,{...e,vertical:!0,dashed:!0}),(0,u.jsxs)(`span`,{children:[`항목 C`,e.vertical&&e.dashed?` · Controls 적용 중`:``]})]}),(0,u.jsx)(`p`,{children:`세로 길이`}),(0,u.jsxs)(f,{align:`end`,children:[[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,u.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`flex-end`,gap:`0.35rem`},children:[(0,u.jsx)(`span`,{children:t}),(0,u.jsx)(d,{...e,vertical:!0,height:t,marginY:`sm`})]},t)),(0,u.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`flex-end`,gap:`0.35rem`},children:[(0,u.jsx)(`span`,{children:`3rem`}),(0,u.jsx)(d,{...e,vertical:!0,height:`3rem`,marginY:`sm`})]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo>
      {args.vertical ? <Space>
          <span>항목 A</span>
          <Divider {...args} />
          <span>항목 B</span>
        </Space> : <>
          <p>위 콘텐츠</p>
          <Divider {...args} />
          <p>아래 콘텐츠</p>
        </>}
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
  name: '간격',
  args: {
    marginY: 'sm'
  },
  render: args => <Demo>
      <p>가로 · 상·하 간격</p>
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(marginY => <div key={marginY}>
          <p>
            marginY {PRESET_LABELS[marginY]}
            {!args.vertical && String(args.marginY ?? '') === marginY ? ' · Controls 적용 중' : ''}
          </p>
          <Divider {...args} vertical={false} marginY={marginY} />
          <p>아래 콘텐츠</p>
        </div>)}
      <p>세로 · 좌·우 간격</p>
      <Space>
        {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(marginY => <span key={marginY} style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
            <span>{PRESET_LABELS[marginY]}</span>
            <Divider {...args} vertical marginY={marginY} height="md" />
          </span>)}
      </Space>
    </Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '두께',
  args: {
    thickness: 'lg'
  },
  render: args => <Demo>
      {(['none', 'xs', 'sm', '', 'lg', 'xl'] as const).map(thickness => <div key={thickness || 'md'}>
          <p>
            thickness {PRESET_LABELS[thickness]}
            {String(args.thickness ?? '') === String(thickness) ? ' · Controls 적용 중' : ''}
          </p>
          <Divider {...args} thickness={thickness || undefined} />
        </div>)}
      <div>
        <p>
          thickness 3px
          {String(args.thickness) === '3px' ? ' · Controls 적용 중' : ''}
        </p>
        <Divider {...args} thickness="3px" />
      </div>
    </Demo>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '레이블 정렬',
  args: {
    orient: 'left'
  },
  render: args => <Demo>
      {(['left', '', 'right'] as const).map(orient => <Divider key={orient || 'center'} {...args} orient={orient} label={\`\${ORIENT_LABELS[orient]}\${args.orient === orient ? ' · Controls 적용 중' : ''}\`} />)}
    </Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '세로',
  args: {
    vertical: true,
    height: 'md'
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
      <p>세로 길이</p>
      <Space align="end">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(height => <span key={height} style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap: '0.35rem'
      }}>
            <span>{height}</span>
            <Divider {...args} vertical height={height} marginY="sm" />
          </span>)}
        <span style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap: '0.35rem'
      }}>
          <span>3rem</span>
          <Divider {...args} vertical height="3rem" marginY="sm" />
        </span>
      </Space>
    </Demo>
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Dashed`,`MarginY`,`Thickness`,`Text`,`Orient`,`Vertical`]})))()}export{_ as a,C as c,S as i,T as l,l as n,x as o,y as r,b as s,v as t};
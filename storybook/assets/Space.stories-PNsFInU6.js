import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-Bdofg9ij.js";import{i as s,n as c,r as l,t as u}from"./Space-B9LKwA9P.js";var d=t({Align:()=>E,Basic:()=>S,Combo:()=>D,Gap:()=>w,Playground:()=>x,Vertical:()=>C,Wrap:()=>T,__namedExportsOrder:()=>O,default:()=>_}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),a(),s(),c(),f=i(),p=o,m=l,h=u,g={xs:`xs`,sm:`sm`,md:`md`,lg:`lg`,xl:`xl`},_={title:`레이아웃/Space`,component:h,parameters:{layout:`fullscreen`},args:{as:`div`,gap:`md`,vertical:!1,wrap:!1,block:!1,align:``,justify:``,className:``},argTypes:{...r,as:{control:`select`,options:[`div`,`section`,`main`,`article`,`aside`,`header`,`footer`,`nav`],description:`루트 요소`},gap:{control:`select`,options:[``,`xs`,`sm`,`md`,`lg`,`xl`],description:`자식 사이 간격`},size:{control:`select`,options:[``,`xs`,`sm`,`md`,`lg`,`xl`],description:`gap의 이전 호환 이름`},vertical:{control:`boolean`,description:`세로 배치`},wrap:{control:`boolean`,description:`줄바꿈 허용`},block:{control:`boolean`,description:`부모 너비를 채우는 block flex`},align:{control:`select`,options:[``,`start`,`center`,`end`,`baseline`,`stretch`],description:`교차축 정렬`},justify:{control:`select`,options:[``,`start`,`center`,`end`,`between`],description:`주축 정렬`},className:{control:`text`,description:`사용자 정의 클래스`},children:{table:{disable:!0},description:`자식 콘텐츠`},style:{table:{disable:!0}}}},v=({children:e})=>(0,f.jsx)(`div`,{className:`btn-demo`,children:e}),y=(e=`항목`)=>[1,2,3].map(t=>(0,f.jsxs)(`div`,{className:`space_demo-box`,children:[e,` `,t]},t)),b=e=>e.gap||`md`,x={name:`Playground`,render:e=>(0,f.jsx)(v,{children:(0,f.jsx)(h,{...e,children:y()})})},S={name:`기본`,render:e=>(0,f.jsx)(v,{children:(0,f.jsx)(h,{...e,children:y()})})},C={name:`세로`,args:{vertical:!0},render:e=>(0,f.jsx)(v,{children:(0,f.jsx)(h,{...e,vertical:!0,children:y(e.vertical?`세로 · Controls 적용 중`:`항목`)})})},w={name:`간격`,args:{gap:`sm`},render:e=>(0,f.jsx)(v,{children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,f.jsx)(h,{...e,gap:t,children:y(`${g[t]}${b(e)===t?` · Controls 적용 중`:``}`)},t))})},T={name:`줄바꿈`,args:{block:!0,wrap:!0},render:e=>(0,f.jsx)(v,{children:(0,f.jsx)(h,{...e,block:!0,wrap:!0,children:[1,2,3,4,5].map(t=>(0,f.jsxs)(`div`,{className:`space_demo-box`,style:{minWidth:`8rem`},children:[`항목 `,t,e.wrap&&e.block?` · Controls 적용 중`:``]},t))})})},E={name:`정렬`,args:{block:!0,align:`center`},render:e=>(0,f.jsxs)(v,{children:[(0,f.jsxs)(h,{...e,block:!0,align:`center`,style:{minHeight:`5rem`,background:`var(--color-surface-raised)`,borderRadius:`var(--radius-sm)`,padding:`var(--space-md)`},children:[(0,f.jsxs)(`div`,{className:`space_demo-box`,children:[`align center`,e.align===`center`?` · Controls 적용 중`:``]}),(0,f.jsx)(`div`,{className:`space_demo-box`,style:{paddingBlock:`var(--space-xl)`},children:`높이 다름`}),(0,f.jsx)(`div`,{className:`space_demo-box`,children:`align center`})]}),(0,f.jsxs)(h,{...e,block:!0,justify:`between`,style:{background:`var(--color-surface-raised)`,borderRadius:`var(--radius-sm)`,padding:`var(--space-md)`},children:[(0,f.jsxs)(`div`,{className:`space_demo-box`,children:[`justify between`,e.justify===`between`?` · Controls 적용 중`:``]}),(0,f.jsx)(`div`,{className:`space_demo-box`,children:`양 끝`})]})]})},D={name:`조합 예시`,render:e=>(0,f.jsx)(v,{children:(0,f.jsxs)(h,{...e,children:[(0,f.jsx)(p,{variant:`outline`,label:`취소`}),(0,f.jsx)(p,{variant:`filled`,color:`primary`,label:`저장`}),(0,f.jsx)(m,{vertical:!0}),(0,f.jsx)(p,{variant:`text`,label:`더보기`})]})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo>
      <Space {...args}>{boxes()}</Space>
    </Demo>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Demo>
      <Space {...args}>{boxes()}</Space>
    </Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '세로',
  args: {
    vertical: true
  },
  render: args => <Demo>
      <Space {...args} vertical>
        {boxes(args.vertical ? '세로 · Controls 적용 중' : '항목')}
      </Space>
    </Demo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '간격',
  args: {
    gap: 'sm'
  },
  render: args => <Demo>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => <Space key={gap} {...args} gap={gap}>
          {boxes(\`\${GAP_LABELS[gap]}\${resolvedGap(args) === gap ? ' · Controls 적용 중' : ''}\`)}
        </Space>)}
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '줄바꿈',
  args: {
    block: true,
    wrap: true
  },
  render: args => <Demo>
      <Space {...args} block wrap>
        {[1, 2, 3, 4, 5].map(number => <div className="space_demo-box" style={{
        minWidth: '8rem'
      }} key={number}>
            항목 {number}
            {args.wrap && args.block ? ' · Controls 적용 중' : ''}
          </div>)}
      </Space>
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '정렬',
  args: {
    block: true,
    align: 'center'
  },
  render: args => <Demo>
      <Space {...args} block align="center" style={{
      minHeight: '5rem',
      background: 'var(--color-surface-raised)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-md)'
    }}>
        <div className="space_demo-box">
          align center{args.align === 'center' ? ' · Controls 적용 중' : ''}
        </div>
        <div className="space_demo-box" style={{
        paddingBlock: 'var(--space-xl)'
      }}>
          높이 다름
        </div>
        <div className="space_demo-box">align center</div>
      </Space>
      <Space {...args} block justify="between" style={{
      background: 'var(--color-surface-raised)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-md)'
    }}>
        <div className="space_demo-box">
          justify between{args.justify === 'between' ? ' · Controls 적용 중' : ''}
        </div>
        <div className="space_demo-box">양 끝</div>
      </Space>
    </Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '조합 예시',
  render: args => <Demo>
      <Space {...args}>
        <Button variant="outline" label="취소" />
        <Button variant="filled" color="primary" label="저장" />
        <Divider vertical />
        <Button variant="text" label="더보기" />
      </Space>
    </Demo>
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`Basic`,`Vertical`,`Gap`,`Wrap`,`Align`,`Combo`]})))()}export{x as a,T as c,w as i,k as l,S as n,d as o,D as r,C as s,E as t};
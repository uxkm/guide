import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{r as a,t as o}from"./Icon-CS3T14bP.js";import{n as s,t as c}from"./Stat-Cpid6qsO.js";var l=t({Basic:()=>g,Group:()=>C,Layouts:()=>b,Playground:()=>h,PrefixSuffix:()=>_,Sizes:()=>y,Skins:()=>S,Trend:()=>v,WithIcon:()=>x,__namedExportsOrder:()=>w,default:()=>p}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),s(),a(),u=i(),d=c,f=o,p={title:`데이터 표시/Stat`,component:d,parameters:{layout:`fullscreen`},args:{title:`총 사용자`,value:`12,480`,prefix:``,suffix:``,description:``,trend:``,trendColor:``,size:`md`,card:!1,shadow:!1,className:``},argTypes:{...r,title:{control:`text`,description:`통계 라벨`},value:{control:`text`,description:`주요 수치`},prefix:{control:`text`,description:`수치 앞 접두어`},suffix:{control:`text`,description:`수치 뒤 접미어`},description:{control:`text`,description:`보조 설명`},trend:{control:`text`,description:`추세 텍스트`},trendColor:{control:`select`,options:[``,`success`,`danger`,`warning`,`primary`,`muted`,`info`],description:`추세 색상`},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`크기`},card:{control:`boolean`,description:`카드형 외형`},shadow:{control:`boolean`,description:`그림자 카드`},className:{control:`text`,description:`사용자 정의 클래스`},children:{table:{disable:!0},description:`커스텀 본문`},trendIcon:{table:{disable:!0},description:`추세 아이콘`}}},m=({children:e})=>(0,u.jsx)(`div`,{className:`btn-demo`,children:e}),h={name:`Playground`,args:{description:`지난 30일 기준`,card:!0},render:e=>(0,u.jsx)(m,{children:(0,u.jsx)(d,{...e})})},g={name:`기본`,args:{description:`지난 30일 기준`},render:e=>(0,u.jsx)(m,{children:(0,u.jsx)(d,{...e})})},_={name:`접두·접미`,render:e=>(0,u.jsx)(m,{children:(0,u.jsxs)(`div`,{className:`stat_group stat_group-3`,children:[(0,u.jsx)(d,{...e,title:`총 매출`,prefix:`₩`,value:`4,280,000`,description:`+8.2%`,trendColor:`success`}),(0,u.jsx)(d,{...e,title:`전환율`,value:`3.6`,suffix:`%`,description:`-0.4%p`,trendColor:`danger`}),(0,u.jsx)(d,{...e,title:`평균 응답 시간`,value:`128`,suffix:`ms`})]})})},v={name:`추세`,render:e=>(0,u.jsx)(m,{children:(0,u.jsxs)(`div`,{className:`stat_group stat_group-2`,children:[(0,u.jsx)(d,{...e,title:`신규 가입`,value:`1,234`,trend:`+15.3%`,trendColor:`success`}),(0,u.jsx)(d,{...e,title:`이탈률`,value:`2.4%`,trend:`+0.3%p`,trendColor:`danger`,trendIcon:(0,u.jsx)(f,{name:`warning`})})]})})},y={name:`크기`,args:{card:!0},render:e=>(0,u.jsx)(m,{children:(0,u.jsxs)(`div`,{className:`stat_group stat_group-3`,children:[(0,u.jsx)(d,{...e,size:`sm`,title:`Small`,value:`1,024`}),(0,u.jsx)(d,{...e,title:`Medium`,value:`8,192`}),(0,u.jsx)(d,{...e,size:`lg`,title:`Large`,value:`64K`})]})})},b={name:`레이아웃`,args:{card:!0},render:e=>(0,u.jsxs)(m,{children:[(0,u.jsx)(d,{...e,className:`stat_horizontal`,title:`활성 세션`,value:`342`}),(0,u.jsx)(d,{...e,className:`stat_inline`,title:`CPU 사용률`,value:`68`,suffix:`%`}),(0,u.jsxs)(d,{...e,className:`stat_row`,shadow:!0,children:[(0,u.jsx)(`span`,{className:`stat_icon-wrap color_primary`,children:(0,u.jsx)(f,{name:`user`})}),(0,u.jsxs)(`div`,{className:`stat_body`,children:[(0,u.jsx)(`span`,{className:`stat_label`,children:`신규 사용자`}),(0,u.jsx)(`span`,{className:`stat_value`,children:`1,284`})]})]})]})},x={name:`아이콘`,args:{card:!0},render:e=>(0,u.jsx)(m,{children:(0,u.jsxs)(`div`,{className:`stat_group stat_group-2`,children:[(0,u.jsxs)(d,{...e,children:[(0,u.jsx)(`span`,{className:`stat_icon`,children:(0,u.jsx)(f,{name:`star`})}),(0,u.jsx)(`span`,{className:`stat_label`,children:`즐겨찾기`}),(0,u.jsx)(`span`,{className:`stat_value`,children:`128`})]}),(0,u.jsxs)(d,{...e,className:`stat_row`,children:[(0,u.jsx)(`span`,{className:`stat_icon-wrap color_success`,children:(0,u.jsx)(f,{name:`check`})}),(0,u.jsxs)(`div`,{className:`stat_body`,children:[(0,u.jsx)(`span`,{className:`stat_label`,children:`완료`}),(0,u.jsx)(`span`,{className:`stat_value`,children:`84`})]})]})]})})},S={name:`카드 스킨`,args:{card:!0},render:e=>(0,u.jsx)(m,{children:(0,u.jsxs)(`div`,{className:`stat_group stat_group-4`,children:[(0,u.jsx)(d,{...e,title:`기본 카드`,value:`1,200`}),(0,u.jsx)(d,{...e,shadow:!0,title:`Shadow`,value:`980`}),(0,u.jsx)(d,{...e,className:`stat_borderless`,title:`Borderless`,value:`456`}),(0,u.jsx)(d,{...e,className:`stat_accent color_primary`,title:`Accent`,value:`789`,description:`강조 지표`})]})})},C={name:`그룹`,render:e=>(0,u.jsxs)(m,{children:[(0,u.jsxs)(`div`,{className:`stat_group stat_group-4`,children:[(0,u.jsx)(d,{...e,card:!0,shadow:!0,title:`총 매출`,prefix:`₩`,value:`4.2M`,description:`+8.2%`,trendColor:`success`}),(0,u.jsx)(d,{...e,card:!0,shadow:!0,title:`신규 가입`,value:`1,234`,description:`+15.3%`,trendColor:`success`}),(0,u.jsx)(d,{...e,card:!0,shadow:!0,title:`이탈률`,value:`2.4`,suffix:`%`,description:`+0.3%p`,trendColor:`danger`}),(0,u.jsx)(d,{...e,card:!0,shadow:!0,title:`활성 사용자`,value:`8,901`,description:`변동 없음`,trendColor:`muted`})]}),(0,u.jsxs)(`div`,{className:`stat_group stat_group-4 stat_group-divider`,children:[(0,u.jsx)(d,{...e,title:`방문`,value:`24.5K`}),(0,u.jsx)(d,{...e,title:`페이지뷰`,value:`89.2K`}),(0,u.jsx)(d,{...e,title:`전환`,value:`1,842`}),(0,u.jsx)(d,{...e,title:`매출`,value:`₩12M`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    description: '지난 30일 기준',
    card: true
  },
  render: args => <Demo>
      <Stat {...args} />
    </Demo>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '기본',
  args: {
    description: '지난 30일 기준'
  },
  render: args => <Demo>
      <Stat {...args} />
    </Demo>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '접두·접미',
  render: args => <Demo>
      <div className="stat_group stat_group-3">
        <Stat {...args} title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
        <Stat {...args} title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
        <Stat {...args} title="평균 응답 시간" value="128" suffix="ms" />
      </div>
    </Demo>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '추세',
  render: args => <Demo>
      <div className="stat_group stat_group-2">
        <Stat {...args} title="신규 가입" value="1,234" trend="+15.3%" trendColor="success" />
        <Stat {...args} title="이탈률" value="2.4%" trend="+0.3%p" trendColor="danger" trendIcon={<Icon name="warning" />} />
      </div>
    </Demo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '크기',
  args: {
    card: true
  },
  render: args => <Demo>
      <div className="stat_group stat_group-3">
        <Stat {...args} size="sm" title="Small" value="1,024" />
        <Stat {...args} title="Medium" value="8,192" />
        <Stat {...args} size="lg" title="Large" value="64K" />
      </div>
    </Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '레이아웃',
  args: {
    card: true
  },
  render: args => <Demo>
      <Stat {...args} className="stat_horizontal" title="활성 세션" value="342" />
      <Stat {...args} className="stat_inline" title="CPU 사용률" value="68" suffix="%" />
      <Stat {...args} className="stat_row" shadow>
        <span className="stat_icon-wrap color_primary"><Icon name="user" /></span>
        <div className="stat_body">
          <span className="stat_label">신규 사용자</span>
          <span className="stat_value">1,284</span>
        </div>
      </Stat>
    </Demo>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '아이콘',
  args: {
    card: true
  },
  render: args => <Demo>
      <div className="stat_group stat_group-2">
        <Stat {...args}>
          <span className="stat_icon"><Icon name="star" /></span>
          <span className="stat_label">즐겨찾기</span>
          <span className="stat_value">128</span>
        </Stat>
        <Stat {...args} className="stat_row">
          <span className="stat_icon-wrap color_success"><Icon name="check" /></span>
          <div className="stat_body">
            <span className="stat_label">완료</span>
            <span className="stat_value">84</span>
          </div>
        </Stat>
      </div>
    </Demo>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '카드 스킨',
  args: {
    card: true
  },
  render: args => <Demo>
      <div className="stat_group stat_group-4">
        <Stat {...args} title="기본 카드" value="1,200" />
        <Stat {...args} shadow title="Shadow" value="980" />
        <Stat {...args} className="stat_borderless" title="Borderless" value="456" />
        <Stat {...args} className="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
      </div>
    </Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '그룹',
  render: args => <Demo>
      <div className="stat_group stat_group-4">
        <Stat {...args} card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat {...args} card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat {...args} card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat {...args} card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div className="stat_group stat_group-4 stat_group-divider">
        <Stat {...args} title="방문" value="24.5K" />
        <Stat {...args} title="페이지뷰" value="89.2K" />
        <Stat {...args} title="전환" value="1,842" />
        <Stat {...args} title="매출" value="₩12M" />
      </div>
    </Demo>
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Basic`,`PrefixSuffix`,`Trend`,`Sizes`,`Layouts`,`WithIcon`,`Skins`,`Group`]})))()}export{y as a,v as c,_ as i,x as l,C as n,S as o,b as r,l as s,g as t,T as u};
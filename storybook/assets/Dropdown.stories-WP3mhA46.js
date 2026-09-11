import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,f as i,p as a}from"./iframe-CajaJMfA.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-Bdofg9ij.js";import{r as l,t as u}from"./Icon-CS3T14bP.js";import{r as d,t as f}from"./Avatar-CXbn8GgE.js";import{r as ee,t as p}from"./Badge-DnOgmC2a.js";import{n as m,t as h}from"./Dropdown-CcFGvpZa.js";import{a as g,i as _,n as v,o as y,r as b,t as te}from"./MenuGroup-hf04OHyh.js";import{n as x,t as ne}from"./MenuDivider-Bn0szd1L.js";var S=t({Basic:()=>U,Disabled:()=>X,Example:()=>Z,MenuDemo:()=>J,Open:()=>W,Placement:()=>q,Playground:()=>H,Scroll:()=>Y,SelectTrigger:()=>K,TriggerDemo:()=>G,__namedExportsOrder:()=>Q,default:()=>V});function C({sort:e=!1}){let t=e?[`최신순`,`인기순`,`가격 낮은순`,`가격 높은순`]:[`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`],[n,r]=(0,D.useState)(t[0]);return(0,O.jsx)(k,{fit:!e,onSelect:r,triggerContent:(0,O.jsx)(A,{variant:`select`,selectText:e,label:n}),children:(0,O.jsx)(R,{ariaLabel:e?`정렬`:`지역 선택`,children:t.map(e=>(0,O.jsx)(N,{label:e,active:e===n},e))})})}function w(e){if(typeof e==`number`&&Number.isFinite(e)&&e>0)return e;if(typeof e==`string`&&e.trim()!==``){let t=Number(e);if(Number.isFinite(t)&&t>0)return t}}function T(e,t={}){let{open:n,maxVisibleItems:r,menuWidth:i,menuMinWidth:a,onOpenChange:o,onSelect:s,triggerContent:c,...l}=e,u=w(r),d=w(i),f=w(a);return{...l,...t.uncontrolled||n===void 0?{}:{open:!!n},...u==null?{}:{maxVisibleItems:u},...d==null?{}:{menuWidth:d},...f==null?{}:{menuMinWidth:f}}}function E({args:e,updateArgs:t}){let{open:n,triggerLabel:r=`작업`,onOpenChange:i,...a}=e,[o,s]=(0,D.useState)(!!n);(0,D.useEffect)(()=>{s(!!n)},[n]);let c=e=>{s(e),t?.({open:e})};return(0,O.jsx)(k,{...T(a),open:o,onOpenChange:c,triggerContent:(0,O.jsx)(z,{label:String(r)}),children:(0,O.jsx)(R,{ariaLabel:`도시 목록`,children:B.map((e,t)=>(0,O.jsx)(N,{label:e,active:t===0},e))})})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{D=n(),r(),m(),s(),l(),y(),_(),v(),x(),ee(),d(),O=o(),k=h,A=c,j=u,M=g,N=b,P=te,F=ne,I=p,L=f,R=({children:e,ariaLabel:t=`메뉴`})=>(0,O.jsx)(M,{compact:!0,ariaLabel:t,children:e}),z=({label:e,variant:t=`outline`,color:n=`default`,iconAfter:r=!0,...i})=>(0,O.jsx)(A,{variant:t,color:n,label:e,iconAfter:r?(0,O.jsx)(j,{name:`chevron-down`}):void 0,...i}),B=[`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`,`울산광역시`,`세종특별자치시`],V={title:`네비게이션/Dropdown`,component:k,decorators:[e=>(0,O.jsx)(`div`,{className:`dropdown-story-demo`,children:(0,O.jsx)(e,{})})],parameters:{layout:`padded`,controls:{include:[...a]},docs:{extractArgTypes:()=>({})}},args:{open:!1,disabled:!1,placement:`start`,fit:!1,closeOnSelect:!0,triggerLabel:`메뉴`,menuWidth:0},argTypes:{...i,menuWidth:{control:`number`,type:`number`,description:`메뉴 너비 (rem). 0이면 미적용`}}},H={name:`Playground`,args:{open:!0,triggerLabel:`도시 선택`,maxVisibleItems:4,menuWidth:0,menuMinWidth:10},render:(e,{updateArgs:t})=>(0,O.jsx)(E,{args:e,updateArgs:t})},U={name:`기본`,render:e=>(0,O.jsx)(k,{...T(e,{uncontrolled:!0}),triggerContent:(0,O.jsx)(z,{label:`작업`}),children:(0,O.jsxs)(R,{ariaLabel:`작업 메뉴`,children:[(0,O.jsx)(N,{label:`복사`}),(0,O.jsx)(N,{label:`이동`}),(0,O.jsx)(N,{label:`공유`})]})})},W={name:`열린 상태`,render:()=>(0,O.jsx)(k,{open:!0,triggerContent:(0,O.jsx)(z,{label:`카테고리`,variant:`filled`,color:`primary`}),children:(0,O.jsxs)(R,{ariaLabel:`카테고리`,children:[(0,O.jsx)(N,{label:`전체`,active:!0}),(0,O.jsx)(N,{label:`디자인`}),(0,O.jsx)(N,{label:`개발`}),(0,O.jsx)(N,{label:`마케팅`})]})})},G={name:`트리거 유형`,render:()=>(0,O.jsxs)(`div`,{className:`dropdown_row`,children:[(0,O.jsx)(k,{triggerContent:(0,O.jsx)(z,{label:`Filled`,variant:`filled`,color:`primary`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`항목 1`}),(0,O.jsx)(N,{label:`항목 2`})]})}),(0,O.jsx)(k,{triggerContent:(0,O.jsx)(z,{label:`Outline`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`항목 1`}),(0,O.jsx)(N,{label:`항목 2`})]})}),(0,O.jsx)(k,{triggerContent:(0,O.jsx)(z,{label:`Ghost`,variant:`ghost`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`항목 1`}),(0,O.jsx)(N,{label:`항목 2`})]})}),(0,O.jsx)(k,{triggerContent:(0,O.jsx)(z,{label:`Text`,variant:`text`,color:`primary`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`항목 1`}),(0,O.jsx)(N,{label:`항목 2`})]})}),(0,O.jsx)(k,{triggerContent:(0,O.jsx)(A,{variant:`ghost`,iconOnly:!0,ariaLabel:`더보기`,iconBefore:(0,O.jsx)(j,{name:`menu`})}),children:(0,O.jsxs)(R,{ariaLabel:`더보기`,children:[(0,O.jsx)(N,{label:`편집`}),(0,O.jsx)(N,{label:`복제`}),(0,O.jsx)(N,{label:`삭제`,color:`danger`})]})})]})},K={name:`셀렉트 트리거`,render:()=>(0,O.jsxs)(`div`,{className:`dropdown-stack-demo`,children:[(0,O.jsxs)(`div`,{className:`dropdown_row`,children:[(0,O.jsx)(C,{}),(0,O.jsx)(C,{sort:!0})]}),(0,O.jsx)(`p`,{className:`form_field-hint`,children:`메뉴를 선택하면 트리거 텍스트가 변경됩니다.`})]})},q={name:`정렬`,render:()=>(0,O.jsxs)(`div`,{className:`dropdown-placement-demo`,children:[(0,O.jsxs)(`div`,{className:`dropdown_row dropdown-placement-row`,children:[(0,O.jsx)(k,{triggerContent:(0,O.jsx)(z,{label:`왼쪽 정렬`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`항목 A`}),(0,O.jsx)(N,{label:`항목 B`})]})}),(0,O.jsx)(k,{placement:`end`,triggerContent:(0,O.jsx)(z,{label:`오른쪽 정렬`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`항목 A`}),(0,O.jsx)(N,{label:`항목 B`})]})})]}),(0,O.jsx)(`div`,{className:`dropdown-placement-top`,children:(0,O.jsx)(k,{placement:`top`,triggerContent:(0,O.jsx)(z,{label:`위로 열기`,variant:`ghost`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`위쪽 패널`}),(0,O.jsx)(N,{label:`항목 2`})]})})})]})},J={name:`메뉴 구성`,render:()=>(0,O.jsx)(k,{open:!0,triggerContent:(0,O.jsx)(z,{label:`계정`}),children:(0,O.jsxs)(R,{ariaLabel:`계정 메뉴`,children:[(0,O.jsx)(P,{title:`계정`}),(0,O.jsx)(N,{label:`프로필`,icon:(0,O.jsx)(j,{name:`user`,className:`menu_icon`})}),(0,O.jsx)(N,{label:`보안`,icon:(0,O.jsx)(j,{name:`settings`,className:`menu_icon`})}),(0,O.jsx)(F,{}),(0,O.jsx)(P,{title:`앱`}),(0,O.jsx)(N,{label:`알림`,icon:(0,O.jsx)(j,{name:`bell`,className:`menu_icon`}),extra:(0,O.jsx)(I,{count:!0,size:`sm`,label:`3`})}),(0,O.jsx)(N,{label:`설정`,icon:(0,O.jsx)(j,{name:`settings`,className:`menu_icon`})}),(0,O.jsx)(F,{}),(0,O.jsx)(N,{label:`로그아웃`,color:`danger`})]})})},Y={name:`스크롤 · 너비`,render:()=>(0,O.jsxs)(`div`,{className:`dropdown-stack-demo`,children:[(0,O.jsxs)(`div`,{className:`dropdown_row`,children:[(0,O.jsx)(k,{open:!0,maxVisibleItems:4,triggerContent:(0,O.jsx)(z,{label:`도시 선택`}),children:(0,O.jsx)(R,{ariaLabel:`도시 목록`,children:[`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`,`울산광역시`,`세종특별자치시`].map((e,t)=>(0,O.jsx)(N,{label:e,active:t===0},e))})}),(0,O.jsx)(k,{open:!0,maxVisibleItems:4,menuWidth:18,triggerContent:(0,O.jsx)(z,{label:`넓은 패널`}),children:(0,O.jsx)(R,{ariaLabel:`긴 라벨 메뉴`,children:[`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`,`결제 및 구독 관리`].map(e=>(0,O.jsx)(N,{label:e},e))})})]}),(0,O.jsx)(`p`,{className:`form_field-hint`,children:`패널 내부에서 목록을 스크롤할 수 있습니다.`})]})},X={name:`비활성`,render:()=>(0,O.jsxs)(`div`,{className:`dropdown_row`,children:[(0,O.jsx)(k,{disabled:!0,triggerContent:(0,O.jsx)(z,{label:`비활성 드롭다운`,disabled:!0}),children:(0,O.jsx)(R,{children:(0,O.jsx)(N,{label:`항목`})})}),(0,O.jsx)(k,{open:!0,triggerContent:(0,O.jsx)(z,{label:`일부 비활성`}),children:(0,O.jsxs)(R,{children:[(0,O.jsx)(N,{label:`조회`}),(0,O.jsx)(N,{label:`편집`}),(0,O.jsx)(N,{label:`삭제`,disabled:!0}),(0,O.jsx)(N,{label:`관리자 설정`,disabled:!0})]})})]})},Z={name:`조합 예시`,render:()=>(0,O.jsxs)(`div`,{className:`dropdown_demo-toolbar`,children:[(0,O.jsxs)(A,{variant:`ghost`,size:`sm`,iconBefore:(0,O.jsx)(j,{name:`bell`}),children:[`알림 `,(0,O.jsx)(I,{count:!0,size:`sm`,color:`danger`,label:`2`,ariaLabel:`읽지 않은 알림 2건`})]}),(0,O.jsx)(k,{placement:`end`,triggerContent:(0,O.jsxs)(A,{variant:`ghost`,size:`sm`,iconAfter:(0,O.jsx)(j,{name:`chevron-down`}),children:[(0,O.jsx)(L,{size:`sm`,color:`primary`,initials:`김`,ariaHidden:!0}),` 김가이드`]}),children:(0,O.jsxs)(R,{ariaLabel:`사용자 메뉴`,children:[(0,O.jsx)(N,{label:`내 프로필`,icon:(0,O.jsx)(j,{name:`user`,className:`menu_icon`})}),(0,O.jsx)(N,{label:`내 문서`,icon:(0,O.jsx)(j,{name:`book`,className:`menu_icon`})}),(0,O.jsx)(F,{}),(0,O.jsx)(N,{label:`로그아웃`,color:`danger`})]})})]})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    open: true,
    triggerLabel: '도시 선택',
    maxVisibleItems: 4,
    menuWidth: 0,
    menuMinWidth: 10
  },
  render: (args, {
    updateArgs
  }) => <DropdownPlayground args={args} updateArgs={updateArgs} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Dropdown {...mapDropdownArgs(args, {
    uncontrolled: true
  })} triggerContent={<Trigger label="작업" />}>
      <MenuShell ariaLabel="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </MenuShell>
    </Dropdown>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => <Dropdown open triggerContent={<Trigger label="카테고리" variant="filled" color="primary" />}>
      <MenuShell ariaLabel="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </MenuShell>
    </Dropdown>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => <div className="dropdown_row">
      <Dropdown triggerContent={<Trigger label="Filled" variant="filled" color="primary" />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Trigger label="Outline" />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Trigger label="Ghost" variant="ghost" />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Trigger label="Text" variant="text" color="primary" />}>
        <MenuShell>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </MenuShell>
      </Dropdown>
      <Dropdown triggerContent={<Button variant="ghost" iconOnly ariaLabel="더보기" iconBefore={<Icon name="menu" />} />}>
        <MenuShell ariaLabel="더보기">
          <MenuItem label="편집" />
          <MenuItem label="복제" />
          <MenuItem label="삭제" color="danger" />
        </MenuShell>
      </Dropdown>
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '셀렉트 트리거',
  render: () => <div className="dropdown-stack-demo">
      <div className="dropdown_row">
        <SelectDropdown />
        <SelectDropdown sort />
      </div>
      <p className="form_field-hint">메뉴를 선택하면 트리거 텍스트가 변경됩니다.</p>
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '정렬',
  render: () => <div className="dropdown-placement-demo">
      <div className="dropdown_row dropdown-placement-row">
        <Dropdown triggerContent={<Trigger label="왼쪽 정렬" />}>
          <MenuShell>
            <MenuItem label="항목 A" />
            <MenuItem label="항목 B" />
          </MenuShell>
        </Dropdown>
        <Dropdown placement="end" triggerContent={<Trigger label="오른쪽 정렬" />}>
          <MenuShell>
            <MenuItem label="항목 A" />
            <MenuItem label="항목 B" />
          </MenuShell>
        </Dropdown>
      </div>
      <div className="dropdown-placement-top">
        <Dropdown placement="top" triggerContent={<Trigger label="위로 열기" variant="ghost" />}>
          <MenuShell>
            <MenuItem label="위쪽 패널" />
            <MenuItem label="항목 2" />
          </MenuShell>
        </Dropdown>
      </div>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '메뉴 구성',
  render: () => <Dropdown open triggerContent={<Trigger label="계정" />}>
      <MenuShell ariaLabel="계정 메뉴">
        <MenuGroup title="계정" />
        <MenuItem label="프로필" icon={<Icon name="user" className="menu_icon" />} />
        <MenuItem label="보안" icon={<Icon name="settings" className="menu_icon" />} />
        <MenuDivider />
        <MenuGroup title="앱" />
        <MenuItem label="알림" icon={<Icon name="bell" className="menu_icon" />} extra={<Badge count size="sm" label="3" />} />
        <MenuItem label="설정" icon={<Icon name="settings" className="menu_icon" />} />
        <MenuDivider />
        <MenuItem label="로그아웃" color="danger" />
      </MenuShell>
    </Dropdown>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '스크롤 · 너비',
  render: () => <div className="dropdown-stack-demo">
      <div className="dropdown_row">
        <Dropdown open maxVisibleItems={4} triggerContent={<Trigger label="도시 선택" />}>
          <MenuShell ariaLabel="도시 목록">
            {['서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시'].map((label, index) => <MenuItem key={label} label={label} active={index === 0} />)}
          </MenuShell>
        </Dropdown>
        <Dropdown open maxVisibleItems={4} menuWidth={18} triggerContent={<Trigger label="넓은 패널" />}>
          <MenuShell ariaLabel="긴 라벨 메뉴">
            {['프로젝트 대시보드', '팀 협업 워크스페이스', '문서 보관함 및 템플릿', '알림 및 활동 기록', '계정 및 보안 설정', '결제 및 구독 관리'].map(label => <MenuItem key={label} label={label} />)}
          </MenuShell>
        </Dropdown>
      </div>
      <p className="form_field-hint">패널 내부에서 목록을 스크롤할 수 있습니다.</p>
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <div className="dropdown_row">
      <Dropdown disabled triggerContent={<Trigger label="비활성 드롭다운" disabled />}>
        <MenuShell>
          <MenuItem label="항목" />
        </MenuShell>
      </Dropdown>
      <Dropdown open triggerContent={<Trigger label="일부 비활성" />}>
        <MenuShell>
          <MenuItem label="조회" />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </MenuShell>
      </Dropdown>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => <div className="dropdown_demo-toolbar">
      <Button variant="ghost" size="sm" iconBefore={<Icon name="bell" />}>
        알림 <Badge count size="sm" color="danger" label="2" ariaLabel="읽지 않은 알림 2건" />
      </Button>
      <Dropdown placement="end" triggerContent={<Button variant="ghost" size="sm" iconAfter={<Icon name="chevron-down" />}>
            <Avatar size="sm" color="primary" initials="김" ariaHidden /> 김가이드
          </Button>}>
        <MenuShell ariaLabel="사용자 메뉴">
          <MenuItem label="내 프로필" icon={<Icon name="user" className="menu_icon" />} />
          <MenuItem label="내 문서" icon={<Icon name="book" className="menu_icon" />} />
          <MenuDivider />
          <MenuItem label="로그아웃" color="danger" />
        </MenuShell>
      </Dropdown>
    </div>
}`,...Z.parameters?.docs?.source}}},Q=[`Playground`,`Basic`,`Open`,`TriggerDemo`,`SelectTrigger`,`Placement`,`MenuDemo`,`Scroll`,`Disabled`,`Example`]})))()}export{J as a,Y as c,$ as d,Z as i,K as l,X as n,W as o,S as r,q as s,U as t,G as u};
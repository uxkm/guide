import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,f as i,p as a}from"./iframe-BkSPibU3.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-Bdofg9ij.js";import{r as l,t as u}from"./Icon-CS3T14bP.js";import{r as d,t as f}from"./Avatar-oJFAt54Z.js";import{r as p,t as m}from"./Badge-DnOgmC2a.js";import{a as ee,c as te,i as ne,n as h,o as g,r as re,s as ie,t as _}from"./MenuDivider-CCKfdxNt.js";function v({open:e,defaultOpen:t=!1,disabled:n=!1,placement:r=`start`,fit:i=!1,maxVisibleItems:a,menuWidth:o,menuMinWidth:s,triggerContent:l,triggerLabel:d=`메뉴`,children:f,className:p=``,closeOnSelect:m=!0,onOpenChange:ee,onSelect:te,...ne}){let h=(0,y.useRef)(null),g=`dropdown-menu-${(0,y.useId)().replaceAll(`:`,``)}`,[re,ie]=(0,y.useState)(t),_=e!==void 0,v=_?e:re,C=x.includes(r)?r:`start`,w=e=>{n||(_||ie(e),ee?.(e))},T=(e=0)=>requestAnimationFrame(()=>{[...h.current?.querySelectorAll(`.dropdown_menu .menu_link:not(.is-disabled):not([aria-disabled="true"])`)??[]].at(e)?.focus()});(0,y.useEffect)(()=>{if(!v)return;let e=e=>{h.current?.contains(e.target)||w(!1)},t=e=>{e.key===`Escape`&&(w(!1),h.current?.querySelector(`.dropdown_trigger`)?.focus())};return document.addEventListener(`pointerdown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`keydown`,t)}},[v]);let E={className:[`dropdown_trigger`,l?.props?.className].filter(Boolean).join(` `),haspopup:l?.props?.haspopup??`menu`,expanded:v,"aria-controls":g,disabled:n||l?.props?.disabled,onClick:e=>{l?.props?.onClick?.(e),w(!v)},onKeyDown:e=>{l?.props?.onKeyDown?.(e),e.key===`ArrowDown`&&(e.preventDefault(),v||w(!0),T(0))}},D=(0,y.isValidElement)(l)?(0,y.cloneElement)(l,E):(0,b.jsx)(c,{...E,variant:`outline`,label:d,iconAfter:(0,b.jsx)(u,{name:`chevron-down`})}),O={...a==null?{}:{"--dropdown-max-visible-items":a},...o==null?{}:{width:S(o)},...s==null?{}:{minWidth:S(s)}},k=e=>{let t=[...e.currentTarget.querySelectorAll(`.menu_link:not(.is-disabled):not([aria-disabled="true"])`)],n=t.indexOf(document.activeElement),r=n;if(e.key===`ArrowDown`)r=(n+1)%t.length;else if(e.key===`ArrowUp`)r=(n-1+t.length)%t.length;else if(e.key===`Home`)r=0;else if(e.key===`End`)r=t.length-1;else if(e.key===`Tab`){w(!1);return}else return;e.preventDefault(),t[r]?.focus()},A=e=>{let t=e.target.closest(`.menu_link`);!t||t.classList.contains(`is-disabled`)||t.getAttribute(`aria-disabled`)===`true`||(te?.(t.dataset.value??t.textContent?.trim(),e),m&&(w(!1),requestAnimationFrame(()=>h.current?.querySelector(`.dropdown_trigger`)?.focus())))};return(0,b.jsxs)(`div`,{...ne,ref:h,className:[`dropdown`,v&&`is-open`,n&&`is-disabled`,C===`end`&&`dropdown_placement-end`,C===`top`&&`dropdown_placement-top`,i&&`dropdown_fit`,p].filter(Boolean).join(` `),"data-component":`Dropdown`,"data-dropdown":!0,children:[D,(0,b.jsx)(`div`,{id:g,className:[`dropdown_menu`,a!=null&&`dropdown_menu-scrollable`].filter(Boolean).join(` `),style:O,"aria-hidden":!v,onClick:A,onKeyDown:k,children:f})]})}var y,b,x,S;function C(){return(C=e((()=>{y=n(),s(),l(),b=o(),x=[`start`,`end`,`top`],S=e=>typeof e==`number`?`${e}rem`:e,v.__docgenInfo={description:``,methods:[],displayName:`Dropdown`,props:{defaultOpen:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},placement:{defaultValue:{value:`'start'`,computed:!1},required:!1},fit:{defaultValue:{value:`false`,computed:!1},required:!1},triggerLabel:{defaultValue:{value:`'메뉴'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1},closeOnSelect:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var w=t({Basic:()=>G,Disabled:()=>Q,Example:()=>$,MenuDemo:()=>X,Open:()=>K,Placement:()=>Y,Playground:()=>W,Scroll:()=>Z,SelectTrigger:()=>J,TriggerDemo:()=>q,__namedExportsOrder:()=>ae,default:()=>U});function T({sort:e=!1}){let t=e?[`최신순`,`인기순`,`가격 낮은순`,`가격 높은순`]:[`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`],[n,r]=(0,k.useState)(t[0]);return(0,A.jsx)(j,{fit:!e,onSelect:r,triggerContent:(0,A.jsx)(M,{variant:`select`,selectText:e,label:n}),children:(0,A.jsx)(B,{ariaLabel:e?`정렬`:`지역 선택`,children:t.map(e=>(0,A.jsx)(F,{label:e,active:e===n},e))})})}function E(e){if(typeof e==`number`&&Number.isFinite(e)&&e>0)return e;if(typeof e==`string`&&e.trim()!==``){let t=Number(e);if(Number.isFinite(t)&&t>0)return t}}function D(e,t={}){let{open:n,maxVisibleItems:r,menuWidth:i,menuMinWidth:a,onOpenChange:o,onSelect:s,triggerContent:c,...l}=e,u=E(r),d=E(i),f=E(a);return{...l,...t.uncontrolled||n===void 0?{}:{open:!!n},...u==null?{}:{maxVisibleItems:u},...d==null?{}:{menuWidth:d},...f==null?{}:{menuMinWidth:f}}}function O({args:e,updateArgs:t}){let{open:n,triggerLabel:r=`작업`,onOpenChange:i,...a}=e,[o,s]=(0,k.useState)(!!n);(0,k.useEffect)(()=>{s(!!n)},[n]);let c=e=>{s(e),t?.({open:e})};return(0,A.jsx)(j,{...D(a),open:o,onOpenChange:c,triggerContent:(0,A.jsx)(V,{label:String(r)}),children:(0,A.jsx)(B,{ariaLabel:`도시 목록`,children:H.map((e,t)=>(0,A.jsx)(F,{label:e,active:t===0},e))})})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ae;function oe(){return(oe=e((()=>{k=n(),r(),C(),s(),l(),te(),g(),ne(),h(),p(),d(),A=o(),j=v,M=c,N=u,P=ie,F=ee,I=re,L=_,R=m,z=f,B=({children:e,ariaLabel:t=`메뉴`})=>(0,A.jsx)(P,{compact:!0,ariaLabel:t,children:e}),V=({label:e,variant:t=`outline`,color:n=`default`,iconAfter:r=!0,...i})=>(0,A.jsx)(M,{variant:t,color:n,label:e,iconAfter:r?(0,A.jsx)(N,{name:`chevron-down`}):void 0,...i}),H=[`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`,`울산광역시`,`세종특별자치시`],U={title:`네비게이션/Dropdown`,component:j,decorators:[e=>(0,A.jsx)(`div`,{className:`dropdown-story-demo`,children:(0,A.jsx)(e,{})})],parameters:{layout:`padded`,controls:{include:[...a]},docs:{extractArgTypes:()=>({})}},args:{open:!1,disabled:!1,placement:`start`,fit:!1,closeOnSelect:!0,triggerLabel:`메뉴`,menuWidth:0},argTypes:{...i,menuWidth:{control:`number`,type:`number`,description:`메뉴 너비 (rem). 0이면 미적용`}}},W={name:`Playground`,args:{open:!0,triggerLabel:`도시 선택`,maxVisibleItems:4,menuWidth:0,menuMinWidth:10},render:(e,{updateArgs:t})=>(0,A.jsx)(O,{args:e,updateArgs:t})},G={name:`기본`,render:e=>(0,A.jsx)(j,{...D(e,{uncontrolled:!0}),triggerContent:(0,A.jsx)(V,{label:`작업`}),children:(0,A.jsxs)(B,{ariaLabel:`작업 메뉴`,children:[(0,A.jsx)(F,{label:`복사`}),(0,A.jsx)(F,{label:`이동`}),(0,A.jsx)(F,{label:`공유`})]})})},K={name:`열린 상태`,render:()=>(0,A.jsx)(j,{open:!0,triggerContent:(0,A.jsx)(V,{label:`카테고리`,variant:`filled`,color:`primary`}),children:(0,A.jsxs)(B,{ariaLabel:`카테고리`,children:[(0,A.jsx)(F,{label:`전체`,active:!0}),(0,A.jsx)(F,{label:`디자인`}),(0,A.jsx)(F,{label:`개발`}),(0,A.jsx)(F,{label:`마케팅`})]})})},q={name:`트리거 유형`,render:()=>(0,A.jsxs)(`div`,{className:`dropdown_row`,children:[(0,A.jsx)(j,{triggerContent:(0,A.jsx)(V,{label:`Filled`,variant:`filled`,color:`primary`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`항목 1`}),(0,A.jsx)(F,{label:`항목 2`})]})}),(0,A.jsx)(j,{triggerContent:(0,A.jsx)(V,{label:`Outline`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`항목 1`}),(0,A.jsx)(F,{label:`항목 2`})]})}),(0,A.jsx)(j,{triggerContent:(0,A.jsx)(V,{label:`Ghost`,variant:`ghost`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`항목 1`}),(0,A.jsx)(F,{label:`항목 2`})]})}),(0,A.jsx)(j,{triggerContent:(0,A.jsx)(V,{label:`Text`,variant:`text`,color:`primary`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`항목 1`}),(0,A.jsx)(F,{label:`항목 2`})]})}),(0,A.jsx)(j,{triggerContent:(0,A.jsx)(M,{variant:`ghost`,iconOnly:!0,ariaLabel:`더보기`,iconBefore:(0,A.jsx)(N,{name:`menu`})}),children:(0,A.jsxs)(B,{ariaLabel:`더보기`,children:[(0,A.jsx)(F,{label:`편집`}),(0,A.jsx)(F,{label:`복제`}),(0,A.jsx)(F,{label:`삭제`,color:`danger`})]})})]})},J={name:`셀렉트 트리거`,render:()=>(0,A.jsxs)(`div`,{className:`dropdown-stack-demo`,children:[(0,A.jsxs)(`div`,{className:`dropdown_row`,children:[(0,A.jsx)(T,{}),(0,A.jsx)(T,{sort:!0})]}),(0,A.jsx)(`p`,{className:`form_field-hint`,children:`메뉴를 선택하면 트리거 텍스트가 변경됩니다.`})]})},Y={name:`정렬`,render:()=>(0,A.jsxs)(`div`,{className:`dropdown-placement-demo`,children:[(0,A.jsxs)(`div`,{className:`dropdown_row dropdown-placement-row`,children:[(0,A.jsx)(j,{triggerContent:(0,A.jsx)(V,{label:`왼쪽 정렬`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`항목 A`}),(0,A.jsx)(F,{label:`항목 B`})]})}),(0,A.jsx)(j,{placement:`end`,triggerContent:(0,A.jsx)(V,{label:`오른쪽 정렬`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`항목 A`}),(0,A.jsx)(F,{label:`항목 B`})]})})]}),(0,A.jsx)(`div`,{className:`dropdown-placement-top`,children:(0,A.jsx)(j,{placement:`top`,triggerContent:(0,A.jsx)(V,{label:`위로 열기`,variant:`ghost`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`위쪽 패널`}),(0,A.jsx)(F,{label:`항목 2`})]})})})]})},X={name:`메뉴 구성`,render:()=>(0,A.jsx)(j,{open:!0,triggerContent:(0,A.jsx)(V,{label:`계정`}),children:(0,A.jsxs)(B,{ariaLabel:`계정 메뉴`,children:[(0,A.jsx)(I,{title:`계정`}),(0,A.jsx)(F,{label:`프로필`,icon:(0,A.jsx)(N,{name:`user`,className:`menu_icon`})}),(0,A.jsx)(F,{label:`보안`,icon:(0,A.jsx)(N,{name:`settings`,className:`menu_icon`})}),(0,A.jsx)(L,{}),(0,A.jsx)(I,{title:`앱`}),(0,A.jsx)(F,{label:`알림`,icon:(0,A.jsx)(N,{name:`bell`,className:`menu_icon`}),extra:(0,A.jsx)(R,{count:!0,size:`sm`,label:`3`})}),(0,A.jsx)(F,{label:`설정`,icon:(0,A.jsx)(N,{name:`settings`,className:`menu_icon`})}),(0,A.jsx)(L,{}),(0,A.jsx)(F,{label:`로그아웃`,color:`danger`})]})})},Z={name:`스크롤 · 너비`,render:()=>(0,A.jsxs)(`div`,{className:`dropdown-stack-demo`,children:[(0,A.jsxs)(`div`,{className:`dropdown_row`,children:[(0,A.jsx)(j,{open:!0,maxVisibleItems:4,triggerContent:(0,A.jsx)(V,{label:`도시 선택`}),children:(0,A.jsx)(B,{ariaLabel:`도시 목록`,children:[`서울특별시`,`부산광역시`,`대구광역시`,`인천광역시`,`광주광역시`,`대전광역시`,`울산광역시`,`세종특별자치시`].map((e,t)=>(0,A.jsx)(F,{label:e,active:t===0},e))})}),(0,A.jsx)(j,{open:!0,maxVisibleItems:4,menuWidth:18,triggerContent:(0,A.jsx)(V,{label:`넓은 패널`}),children:(0,A.jsx)(B,{ariaLabel:`긴 라벨 메뉴`,children:[`프로젝트 대시보드`,`팀 협업 워크스페이스`,`문서 보관함 및 템플릿`,`알림 및 활동 기록`,`계정 및 보안 설정`,`결제 및 구독 관리`].map(e=>(0,A.jsx)(F,{label:e},e))})})]}),(0,A.jsx)(`p`,{className:`form_field-hint`,children:`패널 내부에서 목록을 스크롤할 수 있습니다.`})]})},Q={name:`비활성`,render:()=>(0,A.jsxs)(`div`,{className:`dropdown_row`,children:[(0,A.jsx)(j,{disabled:!0,triggerContent:(0,A.jsx)(V,{label:`비활성 드롭다운`,disabled:!0}),children:(0,A.jsx)(B,{children:(0,A.jsx)(F,{label:`항목`})})}),(0,A.jsx)(j,{open:!0,triggerContent:(0,A.jsx)(V,{label:`일부 비활성`}),children:(0,A.jsxs)(B,{children:[(0,A.jsx)(F,{label:`조회`}),(0,A.jsx)(F,{label:`편집`}),(0,A.jsx)(F,{label:`삭제`,disabled:!0}),(0,A.jsx)(F,{label:`관리자 설정`,disabled:!0})]})})]})},$={name:`조합 예시`,render:()=>(0,A.jsxs)(`div`,{className:`dropdown_demo-toolbar`,children:[(0,A.jsxs)(M,{variant:`ghost`,size:`sm`,iconBefore:(0,A.jsx)(N,{name:`bell`}),children:[`알림 `,(0,A.jsx)(R,{count:!0,size:`sm`,color:`danger`,label:`2`,ariaLabel:`읽지 않은 알림 2건`})]}),(0,A.jsx)(j,{placement:`end`,triggerContent:(0,A.jsxs)(M,{variant:`ghost`,size:`sm`,iconAfter:(0,A.jsx)(N,{name:`chevron-down`}),children:[(0,A.jsx)(z,{size:`sm`,color:`primary`,initials:`김`,ariaHidden:!0}),` 김가이드`]}),children:(0,A.jsxs)(B,{ariaLabel:`사용자 메뉴`,children:[(0,A.jsx)(F,{label:`내 프로필`,icon:(0,A.jsx)(N,{name:`user`,className:`menu_icon`})}),(0,A.jsx)(F,{label:`내 문서`,icon:(0,A.jsx)(N,{name:`book`,className:`menu_icon`})}),(0,A.jsx)(L,{}),(0,A.jsx)(F,{label:`로그아웃`,color:`danger`})]})})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => <Dropdown open triggerContent={<Trigger label="카테고리" variant="filled" color="primary" />}>
      <MenuShell ariaLabel="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </MenuShell>
    </Dropdown>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '셀렉트 트리거',
  render: () => <div className="dropdown-stack-demo">
      <div className="dropdown_row">
        <SelectDropdown />
        <SelectDropdown sort />
      </div>
      <p className="form_field-hint">메뉴를 선택하면 트리거 텍스트가 변경됩니다.</p>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ae=[`Playground`,`Basic`,`Open`,`TriggerDemo`,`SelectTrigger`,`Placement`,`MenuDemo`,`Scroll`,`Disabled`,`Example`]})))()}export{X as a,Z as c,oe as d,$ as i,J as l,Q as n,K as o,w as r,Y as s,G as t,q as u};
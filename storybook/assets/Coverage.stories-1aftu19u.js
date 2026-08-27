import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BnaKUpFX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,n as a,r as o,t as s}from"./AccordionItem-D-9NY3Ib.js";import{n as ee,t as c}from"./Button-Bdofg9ij.js";import{n as l,t as u}from"./Affix-CBK8PVBo.js";import{n as d,t as f}from"./Alert-CwXSUYdC.js";import{n as p,t as m}from"./Link-CdmlgHEu.js";import{n as te,r as h,t as g}from"./Avatar-AM3_QytI.js";import{n as ne,t as re}from"./BackTop-BWybpUiE.js";import{c as _,d as v,f as ie,i as y,l as ae,n as oe,o as se,r as ce,s as le,t as ue,u as de}from"./Calendar-MrvnPowC.js";import{a as fe,i as pe,n as me,o as he,r as ge,t as b}from"./Card-XUKjkX8t.js";import{n as _e,r as ve,t as x}from"./Tag-cuzOvNxC.js";import{a as ye,i as be,n as xe,o as Se,r as S,t as Ce}from"./CarouselSlide-e9p1JTLI.js";import{a as we,i as Te,n as Ee,o as De,r as C,s as Oe,t as ke}from"./CollapseExternal-CvK8q_sQ.js";import{n as Ae,r as je,t as w}from"./Typography-C13p1y1K.js";import{n as Me,t as Ne}from"./Table-B9IGiJIP.js";import{n as T,r as Pe,t as Fe}from"./List-CZvbPzgE.js";import{n as E,r as Ie,t as Le}from"./Tree-BawdVgjl.js";import{n as Re,t as D}from"./Skeleton-B9dPsEhE.js";import{n as ze,r as Be,t as O}from"./Drawer-BLRvfcip.js";import{n as Ve,t as k}from"./Input-U9H4JZxu.js";import{n as He,r as Ue,t as A}from"./Modal-DWOpKKng.js";import{a as We,i as Ge,n as Ke,r as qe,t as j}from"./Popover-C7sdmFFz.js";import{a as Je,i as Ye,n as Xe,r as Ze,t as M}from"./Snackbar-Bipy5qCu.js";import{a as Qe,i as $e,n as et,r as tt,t as N}from"./Tooltip-Bflhicrk.js";import{n as nt,t as rt}from"./DatePicker-DkHZE9Ve.js";import{n as it,t as at}from"./Rate-DL6ZuaYL.js";import{n as ot,t as st}from"./Slider-DzS5ytCW.js";import{n as ct,t as lt}from"./Textarea-0TJe3CER.js";import{n as ut,r as dt,t as P}from"./Upload-DRYeQO6-.js";import{n as ft,t as pt}from"./Dropdown-BVHdz3AE.js";import{i as mt,n as ht,r as gt,t as F}from"./MenuItem-tYuItNbA.js";import{n as _t,t as vt}from"./MenuSubmenu-DM8BhGpb.js";import{i as yt,n as bt,r as xt,t as St}from"./NavbarItem-BPXQW9iH.js";import{n as Ct,t as wt}from"./Pagination-DjrBnOjL.js";import{i as Tt,n as Et,r as Dt,t as Ot}from"./Steps-D5rcR_jL.js";import{a as I,i as kt,n as At,o as jt,r as Mt,t as Nt}from"./TabPanel-Bv7xF35s.js";function L(e){try{return e.ownerDocument.defaultView?.top?.document??e.ownerDocument}catch{return e.ownerDocument}}function R(e,t){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,`value`)?.set?.call(e,t),e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.dispatchEvent(new Event(`change`,{bubbles:!0}))}function z(e,t,n=!1){e.dispatchEvent(new KeyboardEvent(`keydown`,{bubbles:!0,cancelable:!0,key:t,shiftKey:n}))}function B(e,t,n={}){e.dispatchEvent(new PointerEvent(t,{bubbles:!0,cancelable:!0,pointerId:1,button:0,...n}))}function V(e){let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0});t.preventDefault(),e.dispatchEvent(t)}function Pt(){let[e,t]=(0,H.useState)(`12`);return(0,U.jsxs)(`div`,{className:`demo-stack`,children:[(0,U.jsxs)(`label`,{children:[`숫자 제한`,(0,U.jsx)(k,{"aria-label":`숫자 제한`,inputMode:`numeric`,maxLength:4,clearable:!0,defaultValue:`12a`,onChange:e=>t(e.target.value),onPaste:()=>void 0,onClear:()=>void 0})]}),(0,U.jsxs)(`label`,{children:[`숫자 무제한`,(0,U.jsx)(k,{"aria-label":`숫자 무제한`,inputMode:`numeric`,defaultValue:``})]}),(0,U.jsxs)(`label`,{children:[`number`,(0,U.jsx)(k,{"aria-label":`number`,type:`number`,defaultValue:``})]}),(0,U.jsxs)(`label`,{children:[`제어 입력`,(0,U.jsx)(k,{"aria-label":`제어 입력`,value:e,onChange:e=>t(e.target.value),clearable:!0,prefix:`₩`,suffix:`원`,size:`invalid`,block:!0,error:!0})]}),(0,U.jsxs)(`label`,{children:[`읽기 전용`,(0,U.jsx)(k,{"aria-label":`읽기 전용`,clearable:!0,defaultValue:`read`,readOnly:!0})]}),(0,U.jsxs)(`label`,{children:[`비활성`,(0,U.jsx)(k,{"aria-label":`비활성`,clearable:!0,defaultValue:`disabled`,disabled:!0})]}),(0,U.jsxs)(o,{variant:`invalid`,size:`invalid`,children:[(0,U.jsx)(Rt,{}),(0,U.jsx)(s,{label:`첫째`,content:`첫째 내용`,open:!0,extra:`추가`}),(0,U.jsx)(s,{title:`둘째`,disabled:!0,children:`둘째 내용`}),(0,U.jsx)(s,{label:`셋째`,content:`셋째 내용`})]}),(0,U.jsxs)(o,{multiple:!0,effect:`slide`,variant:`card`,size:`sm`,children:[(0,U.jsx)(s,{label:`슬라이드 하나`,content:`내용`}),(0,U.jsx)(s,{label:`슬라이드 둘`,content:`내용`})]}),(0,U.jsxs)(we,{variant:`invalid`,size:`invalid`,accordion:!0,children:[(0,U.jsx)(zt,{}),(0,U.jsx)(C,{label:`접기 첫째`,content:`첫째 내용`,open:!0,extra:`추가`}),(0,U.jsx)(C,{title:`접기 둘째`,disabled:!0,children:`둘째 내용`}),(0,U.jsx)(C,{label:`접기 셋째`,content:`셋째 내용`})]}),(0,U.jsxs)(we,{variant:`ghost`,size:`lg`,effect:`slide`,children:[(0,U.jsx)(C,{label:`슬라이드 접기`,content:`내용`}),(0,U.jsx)(C,{label:`슬라이드 접기 둘`,content:`내용`})]}),(0,U.jsx)(ke,{triggerLabel:`외부 기본`,lead:`설명`,open:!0,children:`외부 내용`}),(0,U.jsx)(ke,{triggerLabel:`외부 슬라이드`,effect:`slide`,boxed:!1,children:`외부 슬라이드 내용`})]})}function Ft(){let e=(0,U.jsx)(`button`,{type:`button`,children:`푸터 버튼`});return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`button`,{type:`button`,children:`이전 초점`}),(0,U.jsx)(A,{open:!0,id:`coverage-modal-main`,title:`기본 모달`,size:`invalid`,scrollable:!0,footer:e,footerAlign:`even`,footerRatio:`2-1`,footerNoPadBottom:!0,onClose:()=>void 0,children:`본문`}),(0,U.jsx)(A,{open:!0,id:`coverage-modal-empty`,header:(0,U.jsx)(`h2`,{id:`coverage-modal-empty-title`,children:`빈 모달`}),"aria-labelledby":`coverage-modal-empty-title`,backdrop:!1,size:`fullscreen`,onClose:()=>void 0,children:`초점 요소 없음`}),(0,U.jsx)(A,{defaultOpen:!0,id:`coverage-modal-internal`,title:`내부 모달`,onClose:G,children:`내부 상태`}),(0,U.jsx)(O,{open:!0,id:`coverage-drawer-main`,title:`기본 드로어`,size:`invalid`,placement:`invalid`,footer:e,footerAlign:`even`,footerRatio:`2-1`,footerNoPadBottom:!0,extra:`추가`,onClose:()=>void 0,children:`본문`}),(0,U.jsx)(O,{open:!0,id:`coverage-drawer-empty`,header:(0,U.jsx)(`h2`,{id:`coverage-drawer-empty-title`,children:`빈 드로어`}),"aria-labelledby":`coverage-drawer-empty-title`,noBackdrop:!0,placement:`left`,size:`sm`,onClose:()=>void 0,children:`초점 요소 없음`}),(0,U.jsx)(O,{open:!0,id:`coverage-drawer-drag`,title:`드래그 드로어`,placement:`bottom`,size:`lg`,draggable:!0,onClose:()=>void 0,children:`드래그 본문`}),(0,U.jsx)(O,{defaultOpen:!0,id:`coverage-drawer-internal`,title:`내부 드로어`,onClose:G,children:`내부 상태`})]})}function It(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(A,{open:!0,"aria-label":`초점 없는 모달`,onClose:G,children:`초점 가능한 요소 없음`}),(0,U.jsx)(O,{open:!0,"aria-label":`초점 없는 드로어`,onClose:G,children:`초점 가능한 요소 없음`})]})}function Lt(){return(0,U.jsxs)(`div`,{className:`demo-stack`,children:[(0,U.jsxs)(Ze,{placement:`invalid`,label:`기본 알림 영역`,className:`coverage-region`,children:[(0,U.jsx)(M,{message:`기본`,color:`invalid`,size:`invalid`,motion:`invalid`,placement:`invalid`,duration:`invalid`}),(0,U.jsx)(M,{message:`닫기`,closable:!0,duration:1e3,onClose:()=>void 0,onMouseEnter:()=>void 0,onMouseLeave:()=>void 0,onFocusCapture:()=>void 0,onBlurCapture:()=>void 0,onKeyDown:()=>void 0,onAnimationEnd:()=>void 0}),(0,U.jsx)(M,{message:`빠른 자동 닫기`,motion:`none`,duration:10,onClose:()=>void 0}),(0,U.jsx)(M,{role:`alert`,color:`danger`,size:`sm`,motion:`none`,round:!0,closable:!0,icon:(0,U.jsx)(`span`,{children:`!`}),action:({close:e})=>(0,U.jsx)(`button`,{type:`button`,onClick:e,children:`실행`}),onClose:()=>void 0,children:`즉시 닫기`}),(0,U.jsx)(M,{message:`애니메이션 닫기`,motion:`slide`,closable:!0,onClose:()=>void 0})]}),(0,U.jsx)(N,{content:`호버 도움말`,defaultOpen:!0,placement:`invalid`,size:`invalid`,offset:`lg`,offsetTop:`sm`,offsetRight:`lg`,offsetBottom:`sm`,offsetLeft:`lg`,inverse:!0,noArrow:!0,className:`coverage-tooltip`,children:(0,U.jsx)(`button`,{type:`button`,children:`호버 대상`})}),(0,U.jsx)(N,{content:`클릭 도움말`,trigger:`click`,placement:`right`,arrowAnchor:`target`,arrowTargetAlign:`bottom`,panelAlign:`end`,closable:!0,children:(0,U.jsx)(`button`,{type:`button`,children:`클릭 대상`})}),(0,U.jsx)(N,{content:`혼합 도움말`,defaultOpen:!0,placement:`top-start`,arrowAnchor:`mixed`,arrowTargetAlign:`left`,panelAlign:`start`,children:(0,U.jsx)(`button`,{type:`button`,children:`혼합 대상`})}),(0,U.jsx)(N,{content:`왼쪽 도움말`,defaultOpen:!0,placement:`left`,arrowAnchor:`mixed`,arrowTargetAlign:`right`,panelAlign:`end`,children:(0,U.jsx)(`button`,{type:`button`,children:`왼쪽 대상`})}),(0,U.jsx)(N,{content:`오른쪽 도움말`,defaultOpen:!0,placement:`right`,arrowAnchor:`mixed`,panelAlign:`center`,children:(0,U.jsx)(`button`,{type:`button`,children:`오른쪽 대상`})}),(0,U.jsx)(N,{content:`아래 도움말`,defaultOpen:!0,placement:`end`,arrowAnchor:`mixed`,panelAlign:`center`,children:(0,U.jsx)(`button`,{type:`button`,children:`아래 대상`})}),(0,U.jsx)(N,{content:`비활성 도움말`,disabled:!0,defaultOpen:!0,children:(0,U.jsx)(`button`,{type:`button`,children:`비활성 대상`})}),(0,U.jsx)(N,{content:`문자 트리거`,triggerContent:`문자`})]})}function Rt(){let e=(0,H.useContext)(i);return(0,H.useEffect)(()=>{e?.toggleItem(`missing-accordion-item`),requestAnimationFrame(()=>{let t=document.querySelector(`.accordion_trigger:disabled`)?.id;t&&e?.toggleItem(t)})},[e]),null}function zt(){let e=(0,H.useContext)(De);return(0,H.useEffect)(()=>{e?.togglePanel(`missing-collapse-panel`),requestAnimationFrame(()=>{let t=document.querySelector(`.collapse_trigger:disabled`)?.id;t&&e?.togglePanel(t)})},[e]),null}function Bt(){let[e,t]=(0,H.useState)(`controlled`);return(0,U.jsxs)(`div`,{className:`demo-stack`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(c,{label:`일반`,onClick:G,onKeyDown:G}),(0,U.jsx)(c,{tag:`div`,label:`div 버튼`,onClick:G,onKeyDown:G}),(0,U.jsx)(c,{tag:`a`,label:`링크 역할 버튼`,onClick:G,onKeyDown:G}),(0,U.jsx)(c,{tag:`a`,href:`#button-link`,label:`링크 버튼`}),(0,U.jsx)(c,{disabled:!0,label:`비활성`,onClick:G,onKeyDown:G}),(0,U.jsx)(c,{tag:`div`,ariaDisabled:!0,label:`aria 비활성`,onClick:G,onKeyDown:G}),(0,U.jsx)(c,{loading:!0,label:`로딩`,onClick:G,onKeyDown:G}),(0,U.jsx)(c,{variant:`select`,selectCaret:!0,selectText:!0,placeholder:!0,iconBefore:`앞`,iconAfter:`뒤`,vertical:!0,round:!0,block:!0,grow:!0,fit:!0,open:!0,error:!0,invalid:!0,children:`선택`}),(0,U.jsx)(c,{grow:`2`,size:`lg`,variant:`ghost`,iconOnly:!0,children:`아이콘`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(m,{label:`기본 링크`,onClick:G}),(0,U.jsx)(m,{href:`/real`,label:`실제 링크`,target:`_blank`,rel:`noreferrer`,onClick:Gt}),(0,U.jsx)(m,{as:`button`,disabled:!0,label:`비활성 링크`,onClick:G}),(0,U.jsx)(m,{as:`div`,disabled:!0,label:`비활성 div 링크`,onClick:G}),(0,U.jsx)(m,{as:`div`,href:`#`,label:`div 링크`,color:`invalid`,size:`invalid`,underline:!0,noUnderline:!0,standalone:!0,nav:!0,block:!0,back:!0,active:!0,icon:`앞`,iconAfter:`뒤`,onClick:G}),(0,U.jsx)(m,{iconOnly:!0,icon:`아이콘`,ariaLabel:`아이콘 링크`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(Ae,{level:`invalid`,color:`primary`,label:`제목`}),(0,U.jsx)(Ae,{level:`2`,children:`제목 2`}),(0,U.jsx)(w,{variant:`link`,label:`타이포 링크`,onClick:G}),(0,U.jsx)(w,{variant:`link`,href:`/real`,label:`타이포 실제 링크`,onClick:Gt}),(0,U.jsx)(w,{variant:`blockquote`,cite:`출처`,ellipsis:2,size:`invalid`,children:`인용`}),(0,U.jsx)(w,{variant:`invalid`,tag:`span`,ellipsis:1,size:`xl`,children:`사용자 태그`}),(0,U.jsx)(w,{ellipsis:3,size:`sm`,children:`세 줄`})]}),(0,U.jsxs)(ge,{columns:2,children:[(0,U.jsx)(b,{title:`카드`,subtitle:`부제`,extra:`추가`,media:`미디어`,horizontal:!0,compact:!0,hoverable:!0,accent:!0,color:`info`,size:`invalid`,variant:`invalid`,children:(0,U.jsx)(me,{children:`본문`})}),(0,U.jsx)(b,{header:(0,U.jsx)(fe,{title:`헤더`,subtitle:`부제`,extra:`추가`}),variant:`flat`})]}),(0,U.jsxs)(ge,{columns:4,children:[(0,U.jsx)(b,{href:`#card`,title:`링크 카드`,onClick:G}),(0,U.jsx)(b,{onClick:G,disabled:!0,title:`비활성 카드`}),(0,U.jsx)(b,{href:`#disabled-card`,disabled:!0,title:`비활성 링크 카드`,onClick:G}),(0,U.jsxs)(b,{as:`section`,children:[(0,U.jsx)(fe,{children:(0,U.jsx)(`b`,{children:`직접 헤더`})}),(0,U.jsx)(me,{children:`본문`}),(0,U.jsx)(pe,{between:!0,children:`푸터`})]})]}),(0,U.jsxs)(_e,{tight:!0,ariaLabel:`태그 모음`,children:[(0,U.jsx)(x,{label:`일반`,icon:`아이콘`,closable:!0,onClose:G}),(0,U.jsx)(x,{label:`체크`,checkable:!0,selected:!0,closable:!0,onClick:G,onClose:G,variant:`invalid`,size:`invalid`}),(0,U.jsx)(x,{label:`추가`,add:!0,closable:!0,onClick:G,onClose:G}),(0,U.jsx)(x,{label:`링크`,href:`#tag`,closable:!0,onClick:G,onClose:G}),(0,U.jsx)(x,{label:`비활성`,href:`#tag-disabled`,disabled:!0,closable:!0,onClick:G,onClose:G}),(0,U.jsx)(x,{closable:!0,closeLabel:`복합 태그 제거`,children:(0,U.jsx)(`span`,{children:`복합`})})]}),(0,U.jsxs)(Le,{ariaLabel:`테스트 트리`,bordered:!0,lines:!0,compact:!0,multiselectable:!0,children:[(0,U.jsx)(E,{label:`부모`,toggleLabel:`부모 펼치기`,selected:!0,plusToggle:!0,meta:`2`,prefix:`앞`,icon:`폴더`,onExpandedChange:G,children:(0,U.jsx)(E,{label:`자식`,link:!0,metaSlot:(0,U.jsx)(`span`,{children:`메타`}),labelSlot:(0,U.jsx)(`span`,{className:`tree_label`,children:`슬롯`})})}),(0,U.jsx)(E,{label:`제어 부모`,expanded:!1,expandable:!0,toggleLabel:`제어 펼치기`,children:(0,U.jsx)(E,{label:`숨김 자식`})}),(0,U.jsx)(E,{label:`비활성`,disabled:!0,expandable:!0,toggleLabel:`비활성 펼치기`}),(0,U.jsx)(E,{label:`말단`})]}),(0,U.jsx)(Ne,{wrap:!1,"aria-label":`래퍼 없는 표`,children:(0,U.jsx)(`tbody`,{children:(0,U.jsx)(`tr`,{children:(0,U.jsx)(`td`,{children:`셀`})})})}),(0,U.jsx)(f,{title:`닫기 경고`,description:`설명`,closable:!0,color:`invalid`,size:`sm`,banner:!0,actions:(0,U.jsx)(`button`,{type:`button`,children:`액션`}),onClose:G}),(0,U.jsx)(f,{showIcon:!1,role:`status`,children:`사용자 내용`}),(0,U.jsx)(f,{icon:(0,U.jsx)(`span`,{children:`!`}),color:`danger`,title:`아이콘`,children:`내용`}),(0,U.jsx)(lt,{"aria-label":`일반 텍스트`,defaultValue:`a`,onChange:G,fit:!0,size:`invalid`,resize:`invalid`}),(0,U.jsx)(lt,{"aria-label":`카운트 텍스트`,value:e,onChange:e=>t(e.target.value),showCount:!0,maxLength:10,fit:!0,error:!0,wrapperClassName:`wrap`,"aria-describedby":`hint`}),(0,U.jsx)(lt,{"aria-label":`무제한 카운트`,defaultValue:`abc`,showCount:!0})]})}function Vt(){let[e,t]=(0,H.useState)(`2026-08-25`),[n,r]=(0,H.useState)(`one`),[i,a]=(0,H.useState)(!0);return(0,U.jsxs)(`div`,{className:`demo-stack`,children:[(0,U.jsx)(rt,{id:`coverage-date`,value:e,onChange:t,name:`date`,min:`2026-08-01`,max:`2026-09-30`,panelAlign:`end`,size:`lg`,fit:!0,block:!0,error:!0,success:!0,required:!0}),(0,U.jsx)(rt,{id:`coverage-date-disabled`,defaultValue:`invalid`,disabled:!0,clearable:!1,ariaLabel:`비활성 날짜`}),(0,U.jsx)(rt,{id:`coverage-date-uncontrolled`,defaultValue:`2026-08-20`,ariaLabel:`비제어 날짜`}),(0,U.jsx)(at,{defaultValue:2.5,count:3,allowHalf:!0,clearable:!0,legend:`별점`,size:`invalid`,onChange:G}),(0,U.jsx)(at,{value:1,count:0,onChange:G}),(0,U.jsx)(at,{readOnly:!0,value:2.5,count:3,allowHalf:!0,"aria-label":`읽기 별점`}),(0,U.jsx)(at,{readonly:!0,count:3,"aria-label":`빈 읽기 별점`}),(0,U.jsx)(st,{label:`범위`,min:0,max:10,defaultValue:20,step:2,stepper:!0,stepperAlways:!0,showValue:!0,valueSuffix:`점`,hint:`힌트`,size:`invalid`,onChange:G,"data-slider-valuetext-map":`0:없음,10:최대`}),(0,U.jsx)(st,{"aria-label":`고정 범위`,min:5,max:5,value:5,onChange:G,vertical:!0,size:`lg`,"data-slider-valuetext-suffix":`단계`}),(0,U.jsx)(st,{"aria-label":`텍스트 범위`,defaultValue:30,"aria-valuetext":`삼십`,"data-slider-suffix":`%`}),i&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(P,{id:`upload-button`,defaultFiles:Kt,hint:`업로드 힌트`,onChange:G}),(0,U.jsx)(P,{id:`upload-drag`,variant:`dropzone`,accept:`image/*,.txt`,multiple:!0,maxFiles:3,maxSize:100,description:`설명`,hint:`힌트`,onChange:G,onError:G}),(0,U.jsx)(P,{id:`upload-card`,variant:`cards`,defaultFiles:[{name:`card.txt`,size:20,type:`text/plain`,url:``,status:`done`}],cards:(0,U.jsx)(`span`,{children:`카드 앞`}),onChange:G}),(0,U.jsx)(P,{id:`upload-avatar`,variant:`avatar`,avatarSrc:`data:image/gif;base64,R0lGODlhAQABAAAAACw=`,onChange:G}),(0,U.jsx)(P,{id:`upload-list`,variant:`list`,defaultFiles:Kt,onChange:G,children:`목록 전용`}),(0,U.jsx)(P,{id:`upload-disabled`,disabled:!0,trigger:(0,U.jsx)(`span`,{children:`비활성 트리거`})})]}),(0,U.jsx)(`button`,{type:`button`,onClick:()=>a(!1),children:`업로드 제거`}),(0,U.jsxs)(gt,{mode:`invalid`,bordered:!0,compact:!0,dark:!0,ariaLabel:`테스트 메뉴`,onClick:G,children:[(0,U.jsx)(F,{label:`활성`,active:!0,href:`#active`,icon:`아이콘`,extra:`추가`,onClick:G}),(0,U.jsx)(F,{label:`버튼`,onClick:G}),(0,U.jsx)(F,{label:`비활성`,disabled:!0,onClick:G}),(0,U.jsx)(vt,{label:`하위`,expanded:!0,icon:`아이콘`,children:(0,U.jsx)(F,{label:`하위 항목`})})]}),(0,U.jsx)(pt,{defaultOpen:!0,placement:`invalid`,fit:!0,maxVisibleItems:3,menuWidth:12,menuMinWidth:`8rem`,triggerContent:(0,U.jsx)(c,{label:`사용자 트리거`,onClick:G,onKeyDown:G}),onOpenChange:G,onSelect:G,children:(0,U.jsxs)(gt,{ariaLabel:`드롭다운 메뉴`,children:[(0,U.jsx)(F,{label:`첫째`}),(0,U.jsx)(F,{label:`비활성`,disabled:!0}),(0,U.jsx)(F,{label:`셋째`})]})}),(0,U.jsx)(pt,{triggerLabel:`기본 드롭다운`,placement:`end`,closeOnSelect:!1,children:(0,U.jsx)(gt,{ariaLabel:`두 번째 메뉴`,children:(0,U.jsx)(F,{label:`유지`})})}),(0,U.jsx)(pt,{triggerLabel:`비활성 드롭다운`,disabled:!0,placement:`top`,children:(0,U.jsx)(gt,{ariaLabel:`비활성 메뉴`,children:(0,U.jsx)(F,{label:`항목`})})}),(0,U.jsx)(xt,{brand:`브랜드`,responsive:!0,size:`invalid`,borderless:!0,dark:!0,sticky:!0,items:(0,U.jsxs)(`ul`,{className:`navbar_list`,children:[(0,U.jsx)(St,{label:`홈`,active:!0,badge:`1`,onClick:G}),(0,U.jsx)(St,{href:`/next`,children:`다음`})]}),search:(0,U.jsx)(`input`,{"aria-label":`탐색 검색`}),actions:(0,U.jsx)(`button`,{type:`button`,children:`액션`})}),(0,U.jsx)(xt,{role:`presentation`,brandContent:(0,U.jsx)(`span`,{children:`로고`}),brandIcon:`아이콘`,children:(0,U.jsx)(St,{label:`자식 메뉴`})}),(0,U.jsx)(wt,{current:5,total:200,pageSize:10,round:!0,size:`invalid`,onChange:G}),(0,U.jsx)(wt,{current:1,total:30,simple:!0,minimal:!0,size:`sm`,onChange:G,ariaLabel:`간단 페이지`}),(0,U.jsx)(wt,{current:20,total:200,pageSize:10,onChange:G,ariaLabel:`끝 페이지`}),(0,U.jsx)(Ot,{current:2,navigable:!0,direction:`invalid`,size:`invalid`,dot:!0,iconStyle:!0,align:`center`,ariaLabel:`진행 단계`,onChange:G,items:[{title:`첫째`,onClick:G},{title:`둘째`},{title:`셋째`}]}),(0,U.jsxs)(Ot,{ariaLabel:`자식 단계`,children:[(0,U.jsx)(Dt,{title:`대기`}),(0,U.jsx)(Dt,{title:`완료`,status:`finished`,onClick:G})]}),(0,U.jsx)(I,{value:n,onChange:r,variant:`invalid`,size:`invalid`,layout:`invalid`,indicator:`invalid`,ariaLabel:`기본 탭`,extra:`추가`,items:[{key:`one`,label:`하나`,content:`하나 내용`},{key:`disabled`,label:`비활성`,disabled:!0,content:`숨김`},{key:`two`,label:`둘`,badge:`2`,icon:`I`,content:`둘 내용`}]}),(0,U.jsx)(I,{mode:`dynamic`,defaultValue:`a`,variant:`pill`,layout:`scroll`,indicator:`slide`,ariaLabel:`동적 탭`,panel:({value:e})=>`${e} 패널`,items:[{key:`a`,label:`A`},{key:`b`,label:`B`},{key:`c`,label:`C`}]}),(0,U.jsxs)(I,{vertical:!0,variant:`card`,size:`lg`,layout:`equal`,scrollable:!0,ariaLabel:`자식 탭`,children:[(0,U.jsx)(Nt,{value:`panel`,label:`패널`,children:`패널 내용`}),(0,U.jsx)(Mt,{value:`menu`,label:`메뉴`})]}),(0,U.jsx)(Nt,{}),(0,U.jsx)(Mt,{})]})}function Ht(){return(0,U.jsxs)(`div`,{className:`demo-stack`,children:[(0,U.jsx)(j,{defaultOpen:!0,title:`기본 팝오버`,footer:`푸터`,placement:`invalid`,size:`invalid`,offset:`lg`,offsetTop:`sm`,offsetRight:`lg`,offsetBottom:`sm`,offsetLeft:`lg`,panelAlign:`center`,arrowAnchor:`target`,arrowTargetAlign:`right`,className:`coverage-popover`,children:(0,U.jsx)(`button`,{type:`button`,children:`기본 대상`})}),(0,U.jsx)(j,{defaultOpen:!0,panelLabel:`혼합 팝오버`,trigger:`hover`,placement:`left`,arrowAnchor:`mixed`,arrowTargetAlign:`left`,noArrow:!0,closable:!0,children:(0,U.jsx)(`button`,{type:`button`,children:`호버 대상`})}),(0,U.jsx)(j,{panelLabel:`클릭 팝오버`,triggerContent:(0,U.jsx)(`button`,{type:`button`,children:`클릭 대상`}),onOpenChange:G,children:`클릭 내용`}),(0,U.jsx)(j,{panelLabel:`비활성 팝오버`,disabled:!0,defaultOpen:!0,children:(0,U.jsx)(`button`,{type:`button`,children:`비활성 대상`})}),(0,U.jsx)(j,{panelLabel:`문자 팝오버`,triggerContent:`문자`}),(0,U.jsx)(j,{defaultOpen:!0,"aria-label":`플로팅 팝오버`,children:(0,U.jsx)(`button`,{type:`button`,children:`플로팅 대상`})})]})}function Ut(){let e=Array.from({length:6},(e,t)=>(0,U.jsxs)(Ce,{children:[`슬라이드 `,t+1]},t));return(0,U.jsxs)(`div`,{className:`demo-stack`,children:[(0,U.jsxs)(te,{ariaLabel:`아바타 그룹`,children:[(0,U.jsx)(g,{src:`/missing-avatar.png`,alt:`깨진 아바타`,initials:`AB`,badgeColor:`success`,badgeLabel:`온라인`,size:`invalid`,square:!0}),(0,U.jsx)(g,{icon:`아이콘`,ariaHidden:!0}),(0,U.jsx)(g,{children:`자식`})]}),(0,U.jsx)(D,{avatar:!0,paragraph:5}),(0,U.jsx)(D,{avatar:!0,paragraph:0,active:!1}),(0,U.jsx)(D,{paragraph:!0}),(0,U.jsx)(D,{round:!0}),(0,U.jsx)(D,{paragraph:!1,children:`추가`}),(0,U.jsx)(Fe,{layout:`inline`,inlineGap:`1rem`,inlineLabelWidth:`5rem`,children:(0,U.jsx)(T,{title:`인라인`,description:`설명`})}),(0,U.jsxs)(Fe,{variant:`definition`,children:[(0,U.jsx)(T,{title:`용어만`}),(0,U.jsx)(T,{description:`설명만`})]}),(0,U.jsx)(Fe,{tag:`div`,children:(0,U.jsx)(T,{title:`div 항목`})}),(0,U.jsx)(Ne,{columns:[{width:10,minWidth:`5rem`,maxWidth:20,padding:`1rem`,nowrap:!0}],stickyLeft:!0,stickyCols:9,stickyLeftOffsets:{1:`0`,2:``,3:null},children:(0,U.jsx)(`tbody`,{children:(0,U.jsx)(`tr`,{children:(0,U.jsx)(`td`,{children:`열`})})})}),(0,U.jsx)(u,{interactive:!1,skin:`invalid`,children:`고정 안 함`}),(0,U.jsx)(re,{interactive:!1,target:`#coverage-scroll`,size:`invalid`,color:`invalid`,label:`위로`}),(0,U.jsx)(Wt,{}),(0,U.jsxs)(ue,{title:`달력 제목`,ariaLabel:`전체 달력`,minimal:!0,compact:!0,borderless:!0,shadow:!0,ghost:!0,week:!0,readonly:!0,disabled:!0,weekends:!0,agenda:!0,size:`sm`,children:[(0,U.jsx)(se,{title:`헤더`,showPrev:!1,showNext:!0,children:`추가`}),(0,U.jsx)(ae,{labels:[`일`,`월`]}),(0,U.jsx)(le,{partial:!0,weekends:!0,rangeStart:3,rangeEnd:7,events:[5],disabled:[4],readonly:!0}),(0,U.jsx)(ce,{children:`사용자 푸터`})]}),(0,U.jsxs)(ue,{noHeader:!0,title:`숨긴 제목`,ariaLabel:`사용자 날짜`,children:[(0,U.jsx)(_,{label:`이번 주`}),(0,U.jsxs)(y,{week:!0,children:[(0,U.jsx)(oe,{day:1,otherMonth:!0,selected:!0}),(0,U.jsx)(oe,{day:2,otherMonth:!0,inRange:!0}),(0,U.jsx)(oe,{day:3,otherMonth:!0}),(0,U.jsx)(oe,{day:4,today:!0,selected:!0,sunday:!0,saturday:!0,rangeStart:!0,rangeEnd:!0,event:!0})]})]}),(0,U.jsx)(de,{title:`휠`,cancelLabel:`취소`,confirmLabel:`확인`,ariaLabel:`날짜 휠`,footer:!0,footerContent:`휠 푸터`,children:(0,U.jsx)(v,{label:`날짜`,items:[1,2,3],selected:2})}),(0,U.jsx)(de,{toolbarContent:`사용자 툴바`,ariaLabel:`사용자 휠`,children:(0,U.jsx)(v,{label:`빈 휠`,items:[],showSteps:!1})}),(0,U.jsx)(S,{ariaLabel:`자동 재생 커버리지`,autoplay:!0,autoplayToggle:!0,delay:1e4,loop:!0,initialSlide:-1,onSwiper:G,children:e}),(0,U.jsx)(S,{ariaLabel:`자동 너비 캐러셀`,slidesPerView:`auto`,loop:!0,freeMode:!0,children:e.slice(0,4)}),(0,U.jsx)(S,{ariaLabel:`커버플로 너비 없음`,effect:`coverflow`,coverflowSides:2,children:e}),(0,U.jsx)(S,{ariaLabel:`즉시 파기 캐러셀`,onSwiper:e=>e.destroy(!0,!0),children:e.slice(0,2)}),(0,U.jsx)(S,{ariaLabel:`빈 캐러셀`,autoplayToggle:!0,pagination:!1,navigation:!1})]})}function Wt(){let[e,t]=(0,H.useState)([{key:`old`,label:`이전`,content:`이전 내용`}]);return(0,H.useEffect)(()=>{t([{key:`new`,label:`새 탭`,content:`새 내용`}])},[]),(0,U.jsx)(I,{ariaLabel:`항목 교체 탭`,items:e})}var H,U,W,G,Gt,Kt,qt,K,q,J,Y,X,Z,Q,$,Jt;function Yt(){return(Yt=e((()=>{H=t(),ee(),p(),je(),he(),h(),ie(),ve(),Me(),Pe(),Ie(),d(),Re(),r(),l(),ne(),be(),xe(),a(),Oe(),Ee(),Te(),Be(),Ve(),Ue(),qe(),Xe(),Je(),tt(),nt(),it(),ot(),ct(),ut(),ft(),mt(),ht(),_t(),yt(),bt(),Ct(),Et(),Tt(),jt(),kt(),At(),U=n(),W=(e=0)=>new Promise(t=>window.setTimeout(t,e)),G=()=>void 0,Gt=e=>e.preventDefault(),Kt=[{name:`done.txt`,size:10,type:`text/plain`,status:`done`},{name:`error.txt`,size:2048,type:`text/plain`,status:`error`,error:`실패`},{name:`uploading.txt`,size:2e6,type:`text/plain`,status:`uploading`,progress:30}],qt={title:`테스트/전체 커버리지`,parameters:{layout:`padded`},tags:[`test`]},K={render:()=>(0,U.jsx)(Pt,{}),play:async({canvasElement:e,userEvent:t})=>{let n=[...e.querySelectorAll(`input`)];R(n[0],`a12b345`),R(n[1],`a1b2`),R(n[2],`1e+ab-2`),await t.type(n[2],`12`),R(n[3],`99`),n[0].setSelectionRange(1,2),n[0].dispatchEvent(new ClipboardEvent(`paste`,{bubbles:!0,cancelable:!0,clipboardData:new DataTransfer}));let r=new Event(`paste`,{bubbles:!0,cancelable:!0});r.clipboardData={getData:()=>`x98y`},n[0].dispatchEvent(r);let i=new Event(`paste`,{bubbles:!0,cancelable:!0});i.clipboardData={getData:()=>`abc`},n[1].dispatchEvent(i);let a=new Event(`paste`,{bubbles:!0,cancelable:!0});a.preventDefault(),n[0].dispatchEvent(a);for(let n of e.querySelectorAll(`.input_clear:not([hidden])`))await t.click(n);for(let t of e.querySelectorAll(`.input_clear[hidden]`))V(t);let o=[...e.querySelectorAll(`.accordion_trigger`)];await t.click(o[2]),await t.click(o[0]),await t.click(o[3]),await t.click(o[4]);for(let e of[`ArrowDown`,`ArrowUp`,`Home`,`End`,`PageDown`])z(o[0],e);let s=[...e.querySelectorAll(`.collapse_trigger`)];await t.click(s[2]),await t.click(s[0]),await t.click(s[3]),await t.click(s[4]);for(let e of[`ArrowDown`,`ArrowUp`,`Home`,`End`,`PageDown`])z(s[0],e);for(let n of e.querySelectorAll(`[aria-controls^="collapse-external"]`))await t.click(n)}},q={render:()=>(0,U.jsx)(Ft,{}),play:async({canvasElement:e,userEvent:t})=>{await W(30);let n=L(e),r=[...n.querySelectorAll(`.modal.is-open`)],i=[...n.querySelectorAll(`.drawer.is-open`)];for(let e of[...r,...i]){e.querySelector(`button`)?.focus(),z(n,`Tab`,!0);let t=e.querySelectorAll(`button`);t[t.length-1]?.focus(),z(n,`Tab`)}z(n,`Escape`),r[0]?.querySelector(`.modal_backdrop`)?.click(),r[1]?.querySelector(`.modal_backdrop`)?.click(),i[0]?.querySelector(`.drawer_backdrop`)?.click(),i[1]?.querySelector(`.drawer_backdrop`)?.click(),await t.click(r[0].querySelector(`.modal_close`)),await t.click(i[0].querySelector(`.drawer_close`)),n.querySelector(`#coverage-modal-internal .modal_close`)?.click(),n.querySelector(`#coverage-drawer-internal .drawer_close`)?.click();let a=i[2]?.querySelector(`.drawer_handle`);if(a){let e=i[2].querySelector(`.drawer_panel`);B(i[2].querySelector(`.drawer_close`),`pointerdown`,{clientY:300}),e.getBoundingClientRect=()=>({width:300,height:300,top:0,right:300,bottom:300,left:0,x:0,y:0,toJSON:()=>({})}),B(a,`pointerdown`,{clientY:300}),B(a,`pointermove`,{clientY:200}),B(a,`pointerup`,{clientY:200}),B(a,`pointerdown`,{clientY:300}),B(a,`pointermove`,{clientY:290}),B(a,`pointerup`,{clientY:290}),B(a,`pointerdown`,{clientY:200,button:1}),B(a,`pointermove`,{clientY:100,pointerId:2}),B(a,`pointerup`,{clientY:100,pointerId:2}),B(a,`pointerdown`,{clientY:200}),B(a,`pointermove`,{clientY:500}),e.getBoundingClientRect=()=>({width:300,height:100,top:0,right:300,bottom:100,left:0,x:0,y:0,toJSON:()=>({})}),B(a,`pointercancel`,{clientY:500})}}},J={render:()=>(0,U.jsx)(It,{}),play:async({canvasElement:e})=>{await W(30),z(L(e),`Tab`)}},Y={render:()=>(0,U.jsx)(Lt,{}),play:async({canvasElement:e,userEvent:t})=>{let n=L(e);await W(20);let r=[...n.querySelectorAll(`.snackbar`)];r[0]?.dispatchEvent(new AnimationEvent(`animationend`,{bubbles:!0}));let i=r[r.length-1];i?.querySelector(`.snackbar_close`)?.click(),await W(),i?.querySelector(`.snackbar_close`)?.click(),i?.dispatchEvent(new AnimationEvent(`animationend`,{bubbles:!0})),await W(300);let a=[...n.querySelectorAll(`.snackbar`)];a[1]?.dispatchEvent(new MouseEvent(`mouseover`,{bubbles:!0})),a[1]?.dispatchEvent(new FocusEvent(`focusin`,{bubbles:!0})),a[1]?.dispatchEvent(new MouseEvent(`mouseout`,{bubbles:!0,relatedTarget:n.body})),a[1]?.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0,relatedTarget:n.body})),z(a[1],`Escape`),a[1]?.dispatchEvent(new AnimationEvent(`animationend`,{bubbles:!0})),await t.click(a[2].querySelector(`button`)),a[3]?.querySelector(`.snackbar_close`)?.click(),a[3]?.dispatchEvent(new AnimationEvent(`animationend`,{bubbles:!0}));let o=[...e.querySelectorAll(`.tooltip_trigger`)];try{Object.defineProperty(e.ownerDocument.defaultView,"frameElement",{configurable:!0,value:{getBoundingClientRect:()=>({top:10,left:20,width:0,height:0})}})}catch{}o[0]?.dispatchEvent(new MouseEvent(`mouseover`,{bubbles:!0})),o[0]?.dispatchEvent(new FocusEvent(`focusin`,{bubbles:!0})),o[0]?.dispatchEvent(new MouseEvent(`mouseout`,{bubbles:!0,relatedTarget:n.body})),o[0]?.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0})),await t.click(o[1]),n.querySelector(`.tooltip_close`)?.click(),await t.click(o[1]),window.dispatchEvent(new Event(`resize`)),window.dispatchEvent(new Event(`scroll`)),z(n,`Escape`),await t.click(o[1]),n.body.dispatchEvent(new PointerEvent(`pointerdown`,{bubbles:!0})),o[4]?.dispatchEvent(new MouseEvent(`mouseover`,{bubbles:!0})),await W(320)}},X={render:()=>(0,U.jsx)(Bt,{}),play:async({canvasElement:e,userEvent:t})=>{let n=[...e.querySelectorAll(`[data-component="Button"]`)];for(let e of n.slice(0,7))V(e),z(e,`Enter`),z(e,` `),z(e,`ArrowDown`);for(let t of e.querySelectorAll(`[data-component="Link"], [data-component="TypoText"][href]`))V(t);for(let t of e.querySelectorAll(`.card_clickable`))V(t);for(let t of e.querySelectorAll(`[data-component="Tag"] button, [data-component="Tag"] a`))V(t);for(let t of e.querySelectorAll(`.tag_close`))V(t);for(let t of e.querySelectorAll(`.tree_toggle:not(.tree_toggle_placeholder)`))t.click();e.querySelector(`.alert_close`)?.click();let r=[...e.querySelectorAll(`textarea`)];await t.clear(r[0]),await t.type(r[0],`changed`),await t.clear(r[1]),await t.type(r[1],`1234567890`)}},Z={render:()=>(0,U.jsx)(Vt,{}),play:async({canvasElement:e,userEvent:t})=>{let n=e.querySelector(`#coverage-date`);await t.click(n);let r=e.querySelector(`#coverage-date`).parentElement.querySelector(`.date_picker_btn`);await t.click(r),await t.click(r),await t.click(n),await t.click(e.querySelector(`[aria-label="이전 달"]`)),await t.click(e.querySelector(`[aria-label="다음 달"]`));let i=[...e.querySelectorAll(`.calendar_day:not(:disabled)`)].find(e=>!e.classList.contains(`is-selected`));i&&await t.click(i);let a=e.querySelector(`.date_picker_clear`);a&&await t.click(a),await t.click(n);let o=[...e.querySelectorAll(`.calendar_day:not(:disabled)`)].find(e=>!e.classList.contains(`is-selected`));o&&await t.click(o),await t.click(n),await t.click(e.querySelector(`.calendar_footer .btn`)),await t.click(n);let s=e.querySelectorAll(`.calendar_footer .btn`);s[1]&&await t.click(s[1]);let ee=e.querySelector(`.date_picker_clear`);ee&&await t.click(ee);let c=e.querySelector(`#coverage-date-uncontrolled`)?.parentElement?.querySelector(`.date_picker_clear`);c&&await t.click(c),e.querySelector(`#coverage-date-disabled + .date_picker_btn`)?.click(),z(e.querySelector(`.date_picker`),`Escape`);for(let t of e.querySelectorAll(`.rate_input:not(:disabled)`))t.click();for(let t of e.querySelectorAll(`.rate_star-half:not(:disabled)`))t.click();e.querySelector(`.rate_clear`)?.click();for(let n of e.querySelectorAll(`.slider_step:not(:disabled)`))await t.click(n);let l=e.querySelector(`.slider_step-increase:not(:disabled)`);l&&await t.click(l),R(e.querySelector(`.slider_input`),`7`);let u=new File([`hello`],`hello.txt`,{type:`text/plain`}),d=new File([`image`],`image.png`,{type:`image/png`}),f=new File([`image-two`],`image-two.png`,{type:`image/png`}),p=new File([`x`.repeat(150)],`large.txt`,{type:`text/plain`}),m=new File([`x`],`bad.pdf`,{type:`application/pdf`}),te=e.querySelector(`#upload-drag`);for(let e of[[m],[p],[u,d],[u],[d,f]]){let t=new DataTransfer;e.forEach(e=>t.items.add(e)),Object.defineProperty(te,"files",{configurable:!0,value:t.files}),te.dispatchEvent(new Event(`change`,{bubbles:!0})),await W()}let h=e.querySelector(`.upload_dropzone`);h.dispatchEvent(new DragEvent(`dragenter`,{bubbles:!0,cancelable:!0})),h.dispatchEvent(new DragEvent(`dragover`,{bubbles:!0,cancelable:!0})),h.dispatchEvent(new DragEvent(`dragleave`,{bubbles:!0,cancelable:!0,relatedTarget:e}));let g=new DataTransfer;g.items.add(u),h.dispatchEvent(new DragEvent(`drop`,{bubbles:!0,cancelable:!0,dataTransfer:g})),z(h,`Enter`),z(h,` `),z(h,`Escape`),z(e.querySelector(`.upload_card-trigger`),`Enter`),z(e.querySelector(`.upload_avatar`),` `),z(e.querySelector(`#upload-disabled`).parentElement,`Enter`);for(let t of e.querySelectorAll(`[data-component="Upload"]`))if(!t.querySelector(`#upload-drag`))for(let e of t.querySelectorAll(`.upload_item-action, .upload_card-actions button`))e.click();let ne=e.querySelectorAll(`[data-component="Upload"]:has(#upload-drag) .upload_item-action`);(ne[1]??ne[0])?.click();let re=e.querySelector(`#upload-disabled`);re&&re.dispatchEvent(new Event(`change`,{bubbles:!0})),await t.click([...e.querySelectorAll(`button`)].find(e=>e.textContent===`업로드 제거`)),[...e.querySelectorAll(`.menu > .menu_list > .menu_item > .menu_link`)].forEach(e=>e.click()),e.querySelector(`.menu_item-submenu .menu_link`)?.click();let _=[...e.querySelectorAll(`.dropdown`)],v=_[0].querySelector(`.dropdown_menu`);for(let e of[`ArrowDown`,`ArrowUp`,`Home`,`End`,`PageDown`])z(v,e);v.querySelector(`.menu_link.is-disabled`)?.click(),v.querySelectorAll(`.menu_link`)[2]?.click(),z(_[0].querySelector(`.dropdown_trigger`),`ArrowDown`),z(v,`Tab`),_[1].querySelector(`.dropdown_trigger`)?.click(),_[1].querySelector(`.menu_link`)?.click(),_[2].querySelector(`.dropdown_trigger`)?.click(),_[0].querySelector(`.dropdown_trigger`)?.click(),await W(),z(e.ownerDocument,`Escape`),_[0].querySelector(`.dropdown_trigger`)?.click(),e.ownerDocument.body.dispatchEvent(new PointerEvent(`pointerdown`,{bubbles:!0})),e.querySelector(`.navbar_brand`)?.click(),e.querySelector(`.navbar_toggle`)?.click(),e.querySelector(`.navbar_toggle`)?.click();for(let t of e.querySelectorAll(`.navbar_link`))t.click();for(let t of e.querySelectorAll(`.pagination button:not(:disabled)`))t.click();for(let t of e.querySelectorAll(`.steps_navigable .steps_item:not(.is-wait) button, .steps_navigable .steps_item:not(.is-wait) a`))t.click();let ie=[...e.querySelectorAll(`.tabs_list`)],y=ie.find(e=>e.closest(`.tabs_scroll-nav`));y&&(Object.defineProperty(y,"scrollWidth",{configurable:!0,value:900}),Object.defineProperty(y,"clientWidth",{configurable:!0,value:200}),Object.defineProperty(y,"scrollLeft",{configurable:!0,writable:!0,value:100}),y.scrollBy=({left:e})=>{y.scrollLeft+=Number(e||0),y.dispatchEvent(new Event(`scroll`))});for(let e of ie){let t=[...e.querySelectorAll(`[role="tab"]`)];for(let e of t)e.click();for(let e of[`ArrowRight`,`ArrowLeft`,`ArrowDown`,`ArrowUp`,`Home`,`End`,`PageDown`])z(t[0],e);e.dispatchEvent(new Event(`scroll`))}window.dispatchEvent(new Event(`resize`)),await W(40);for(let t of e.querySelectorAll(`.tabs_nav:not(:disabled)`))t.click()}},Q={render:()=>(0,U.jsx)(Ht,{}),play:async({canvasElement:e,userEvent:t})=>{let n=L(e);await W(20);try{Object.defineProperty(e.ownerDocument.defaultView,"frameElement",{configurable:!0,value:{getBoundingClientRect:()=>({top:10,left:20,width:0,height:0})}})}catch{}n.querySelector(`.popover_close-floating`)?.click();let r=[...e.querySelectorAll(`.popover_trigger`)];r[1].dispatchEvent(new MouseEvent(`mouseover`,{bubbles:!0})),r[1].dispatchEvent(new FocusEvent(`focusin`,{bubbles:!0})),r[1].dispatchEvent(new MouseEvent(`mouseout`,{bubbles:!0,relatedTarget:n.body})),r[1].dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0})),await t.click(r[2]),window.dispatchEvent(new Event(`resize`)),window.dispatchEvent(new Event(`scroll`)),z(n,`Escape`),await t.click(r[2]),n.body.dispatchEvent(new PointerEvent(`pointerdown`,{bubbles:!0})),r[3].dispatchEvent(new MouseEvent(`mouseover`,{bubbles:!0}));for(let e of n.querySelectorAll(`.popover_close`))V(e);await W(120)}},$={render:()=>(0,U.jsx)(Ut,{}),play:async({canvasElement:e,userEvent:t})=>{let n=e.ownerDocument,r={top:null,addEventListener:G};ze(null,null),ze(n,r),He(null,null),He(n,r),Ke(null,null),Ke(n,r),et(null,null),et(n,r),Ye(null,null),Ye(n,r);let i=n.implementation.createHTMLDocument(`portal`),a=i.createElement(`base`);a.href=n.baseURI,i.head.appendChild(a);let o=[],s={top:{document:i},addEventListener:(e,t)=>o.push(t)};ze(n,s),He(n,s),o.forEach(e=>e());let ee={top:1,left:2,width:3,height:4},c={ownerDocument:n,getBoundingClientRect:()=>ee};We(c,{top:{document:n}}),We(c,{top:{document:{}},frameElement:{getBoundingClientRect:()=>({top:10,left:20})}}),We(c,{top:{document:{}},frameElement:null}),Qe(c,{top:{document:n}}),Qe(c,{top:{document:{}},frameElement:{getBoundingClientRect:()=>({top:10,left:20})}}),Qe(c,{top:{document:{}},frameElement:null});let l=n.createElement(`span`),u=n.createElement(`button`);u.className=`btn`,l.appendChild(u),Ge(null),Ge(u),Ge(l),$e(l),ye(0,0,!1),Se(null,null,!1,4,1.5);let d=n.createElement(`div`),f=n.createElement(`div`);Se(d,f,!0,4,1.5),dt(new Set([`blob:coverage-test`])),e.querySelector(`.avatar_image`)?.dispatchEvent(new Event(`error`));let p=e.querySelector(`.calendar_wheel-column`);p.querySelector(`.calendar_wheel-step-prev`)?.click(),p.querySelector(`.calendar_wheel-step-next`)?.click();for(let e of p.querySelectorAll(`[role="option"]`))e.click();await W(30);let m=[...e.querySelectorAll(`.carousel_toggle`)];for(let e of m)await t.click(e),await t.click(e);window.dispatchEvent(new Event(`resize`)),await W(30)}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <FormsHarness />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const inputs = [...canvasElement.querySelectorAll<HTMLInputElement>('input')];
    setInputValue(inputs[0], 'a12b345');
    setInputValue(inputs[1], 'a1b2');
    setInputValue(inputs[2], '1e+ab-2');
    await userEvent.type(inputs[2], '12');
    setInputValue(inputs[3], '99');
    inputs[0].setSelectionRange(1, 2);
    inputs[0].dispatchEvent(new ClipboardEvent('paste', {
      bubbles: true,
      cancelable: true,
      clipboardData: new DataTransfer()
    }));
    const paste = new Event('paste', {
      bubbles: true,
      cancelable: true
    }) as any;
    paste.clipboardData = {
      getData: () => 'x98y'
    };
    inputs[0].dispatchEvent(paste);
    const emptyPaste = new Event('paste', {
      bubbles: true,
      cancelable: true
    }) as any;
    emptyPaste.clipboardData = {
      getData: () => 'abc'
    };
    inputs[1].dispatchEvent(emptyPaste);
    const preventedPaste = new Event('paste', {
      bubbles: true,
      cancelable: true
    });
    preventedPaste.preventDefault();
    inputs[0].dispatchEvent(preventedPaste);
    for (const clear of canvasElement.querySelectorAll<HTMLButtonElement>('.input_clear:not([hidden])')) await userEvent.click(clear);
    for (const clear of canvasElement.querySelectorAll<HTMLButtonElement>('.input_clear[hidden]')) clickPrevented(clear);
    const accordionButtons = [...canvasElement.querySelectorAll<HTMLButtonElement>('.accordion_trigger')];
    await userEvent.click(accordionButtons[2]);
    await userEvent.click(accordionButtons[0]);
    await userEvent.click(accordionButtons[3]);
    await userEvent.click(accordionButtons[4]);
    for (const key of ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(accordionButtons[0], key);
    const collapseButtons = [...canvasElement.querySelectorAll<HTMLButtonElement>('.collapse_trigger')];
    await userEvent.click(collapseButtons[2]);
    await userEvent.click(collapseButtons[0]);
    await userEvent.click(collapseButtons[3]);
    await userEvent.click(collapseButtons[4]);
    for (const key of ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(collapseButtons[0], key);
    for (const button of canvasElement.querySelectorAll<HTMLButtonElement>('[aria-controls^="collapse-external"]')) await userEvent.click(button);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <OverlayHarness />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    await wait(30);
    const doc = portalDocument(canvasElement);
    const modals = [...doc.querySelectorAll<HTMLElement>('.modal.is-open')];
    const drawers = [...doc.querySelectorAll<HTMLElement>('.drawer.is-open')];
    for (const root of [...modals, ...drawers]) {
      root.querySelector<HTMLElement>('button')?.focus();
      keyboard(doc, 'Tab', true);
      const buttons = root.querySelectorAll<HTMLElement>('button');
      buttons[buttons.length - 1]?.focus();
      keyboard(doc, 'Tab');
    }
    keyboard(doc, 'Escape');
    modals[0]?.querySelector<HTMLElement>('.modal_backdrop')?.click();
    modals[1]?.querySelector<HTMLElement>('.modal_backdrop')?.click();
    drawers[0]?.querySelector<HTMLElement>('.drawer_backdrop')?.click();
    drawers[1]?.querySelector<HTMLElement>('.drawer_backdrop')?.click();
    await userEvent.click(modals[0].querySelector<HTMLButtonElement>('.modal_close')!);
    await userEvent.click(drawers[0].querySelector<HTMLButtonElement>('.drawer_close')!);
    doc.querySelector<HTMLElement>('#coverage-modal-internal .modal_close')?.click();
    doc.querySelector<HTMLElement>('#coverage-drawer-internal .drawer_close')?.click();
    const handle = drawers[2]?.querySelector<HTMLElement>('.drawer_handle');
    if (handle) {
      const panel = drawers[2].querySelector<HTMLElement>('.drawer_panel')!;
      pointer(drawers[2].querySelector<HTMLElement>('.drawer_close')!, 'pointerdown', {
        clientY: 300
      });
      panel.getBoundingClientRect = () => ({
        width: 300,
        height: 300,
        top: 0,
        right: 300,
        bottom: 300,
        left: 0,
        x: 0,
        y: 0,
        toJSON: () => ({})
      });
      pointer(handle, 'pointerdown', {
        clientY: 300
      });
      pointer(handle, 'pointermove', {
        clientY: 200
      });
      pointer(handle, 'pointerup', {
        clientY: 200
      });
      pointer(handle, 'pointerdown', {
        clientY: 300
      });
      pointer(handle, 'pointermove', {
        clientY: 290
      });
      pointer(handle, 'pointerup', {
        clientY: 290
      });
      pointer(handle, 'pointerdown', {
        clientY: 200,
        button: 1
      });
      pointer(handle, 'pointermove', {
        clientY: 100,
        pointerId: 2
      });
      pointer(handle, 'pointerup', {
        clientY: 100,
        pointerId: 2
      });
      pointer(handle, 'pointerdown', {
        clientY: 200
      });
      pointer(handle, 'pointermove', {
        clientY: 500
      });
      panel.getBoundingClientRect = () => ({
        width: 300,
        height: 100,
        top: 0,
        right: 300,
        bottom: 100,
        left: 0,
        x: 0,
        y: 0,
        toJSON: () => ({})
      });
      pointer(handle, 'pointercancel', {
        clientY: 500
      });
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <FocuslessOverlayHarness />,
  play: async ({
    canvasElement
  }) => {
    await wait(30);
    const doc = portalDocument(canvasElement);
    keyboard(doc, 'Tab');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <FeedbackHarness />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const doc = portalDocument(canvasElement);
    await wait(20);
    const enteringSnackbars = [...doc.querySelectorAll<HTMLElement>('.snackbar')];
    enteringSnackbars[0]?.dispatchEvent(new AnimationEvent('animationend', {
      bubbles: true
    }));
    const leavingSnackbar = enteringSnackbars[enteringSnackbars.length - 1];
    leavingSnackbar?.querySelector<HTMLElement>('.snackbar_close')?.click();
    await wait();
    leavingSnackbar?.querySelector<HTMLElement>('.snackbar_close')?.click();
    leavingSnackbar?.dispatchEvent(new AnimationEvent('animationend', {
      bubbles: true
    }));
    await wait(300);
    const snackbars = [...doc.querySelectorAll<HTMLElement>('.snackbar')];
    snackbars[1]?.dispatchEvent(new MouseEvent('mouseover', {
      bubbles: true
    }));
    snackbars[1]?.dispatchEvent(new FocusEvent('focusin', {
      bubbles: true
    }));
    snackbars[1]?.dispatchEvent(new MouseEvent('mouseout', {
      bubbles: true,
      relatedTarget: doc.body
    }));
    snackbars[1]?.dispatchEvent(new FocusEvent('focusout', {
      bubbles: true,
      relatedTarget: doc.body
    }));
    keyboard(snackbars[1], 'Escape');
    snackbars[1]?.dispatchEvent(new AnimationEvent('animationend', {
      bubbles: true
    }));
    await userEvent.click(snackbars[2].querySelector<HTMLButtonElement>('button')!);
    snackbars[3]?.querySelector<HTMLElement>('.snackbar_close')?.click();
    snackbars[3]?.dispatchEvent(new AnimationEvent('animationend', {
      bubbles: true
    }));
    const triggers = [...canvasElement.querySelectorAll<HTMLElement>('.tooltip_trigger')];
    try {
      Object.defineProperty(canvasElement.ownerDocument.defaultView, 'frameElement', {
        configurable: true,
        value: {
          getBoundingClientRect: () => ({
            top: 10,
            left: 20,
            width: 0,
            height: 0
          })
        }
      });
    } catch {/* 테스트 브라우저가 frameElement 재정의를 막으면 기본 좌표 경로를 사용합니다. */}
    triggers[0]?.dispatchEvent(new MouseEvent('mouseover', {
      bubbles: true
    }));
    triggers[0]?.dispatchEvent(new FocusEvent('focusin', {
      bubbles: true
    }));
    triggers[0]?.dispatchEvent(new MouseEvent('mouseout', {
      bubbles: true,
      relatedTarget: doc.body
    }));
    triggers[0]?.dispatchEvent(new FocusEvent('focusout', {
      bubbles: true
    }));
    await userEvent.click(triggers[1]);
    doc.querySelector<HTMLButtonElement>('.tooltip_close')?.click();
    await userEvent.click(triggers[1]);
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new Event('scroll'));
    keyboard(doc, 'Escape');
    await userEvent.click(triggers[1]);
    doc.body.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true
    }));
    triggers[4]?.dispatchEvent(new MouseEvent('mouseover', {
      bubbles: true
    }));
    await wait(320);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <ElementsHarness />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const buttons = [...canvasElement.querySelectorAll<HTMLElement>('[data-component="Button"]')];
    for (const button of buttons.slice(0, 7)) {
      clickPrevented(button);
      keyboard(button, 'Enter');
      keyboard(button, ' ');
      keyboard(button, 'ArrowDown');
    }
    for (const link of canvasElement.querySelectorAll<HTMLElement>('[data-component="Link"], [data-component="TypoText"][href]')) clickPrevented(link);
    for (const card of canvasElement.querySelectorAll<HTMLElement>('.card_clickable')) clickPrevented(card);
    for (const tag of canvasElement.querySelectorAll<HTMLElement>('[data-component="Tag"] button, [data-component="Tag"] a')) clickPrevented(tag);
    for (const close of canvasElement.querySelectorAll<HTMLButtonElement>('.tag_close')) clickPrevented(close);
    for (const toggle of canvasElement.querySelectorAll<HTMLButtonElement>('.tree_toggle:not(.tree_toggle_placeholder)')) toggle.click();
    canvasElement.querySelector<HTMLButtonElement>('.alert_close')?.click();
    const areas = [...canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea')];
    await userEvent.clear(areas[0]);
    await userEvent.type(areas[0], 'changed');
    await userEvent.clear(areas[1]);
    await userEvent.type(areas[1], '1234567890');
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <FormsNavigationHarness />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const date = canvasElement.querySelector<HTMLElement>('#coverage-date')!;
    await userEvent.click(date);
    const calendarToggle = canvasElement.querySelector<HTMLButtonElement>('#coverage-date')!.parentElement!.querySelector<HTMLButtonElement>('.date_picker_btn')!;
    await userEvent.click(calendarToggle);
    await userEvent.click(calendarToggle);
    await userEvent.click(date);
    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('[aria-label="이전 달"]')!);
    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('[aria-label="다음 달"]')!);
    const day = [...canvasElement.querySelectorAll<HTMLButtonElement>('.calendar_day:not(:disabled)')].find(item => !item.classList.contains('is-selected'));
    if (day) await userEvent.click(day);
    const clearAfterDay = canvasElement.querySelector<HTMLButtonElement>('.date_picker_clear');
    if (clearAfterDay) await userEvent.click(clearAfterDay);
    await userEvent.click(date);
    const anotherDay = [...canvasElement.querySelectorAll<HTMLButtonElement>('.calendar_day:not(:disabled)')].find(item => !item.classList.contains('is-selected'));
    if (anotherDay) await userEvent.click(anotherDay);
    await userEvent.click(date);
    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.calendar_footer .btn')!);
    await userEvent.click(date);
    const footerButtons = canvasElement.querySelectorAll<HTMLButtonElement>('.calendar_footer .btn');
    if (footerButtons[1]) await userEvent.click(footerButtons[1]);
    const finalClear = canvasElement.querySelector<HTMLButtonElement>('.date_picker_clear');
    if (finalClear) await userEvent.click(finalClear);
    const uncontrolledClear = canvasElement.querySelector<HTMLButtonElement>('#coverage-date-uncontrolled')?.parentElement?.querySelector<HTMLButtonElement>('.date_picker_clear');
    if (uncontrolledClear) await userEvent.click(uncontrolledClear);
    canvasElement.querySelector<HTMLButtonElement>('#coverage-date-disabled + .date_picker_btn')?.click();
    keyboard(canvasElement.querySelector<HTMLElement>('.date_picker')!, 'Escape');
    for (const radio of canvasElement.querySelectorAll<HTMLInputElement>('.rate_input:not(:disabled)')) radio.click();
    for (const half of canvasElement.querySelectorAll<HTMLButtonElement>('.rate_star-half:not(:disabled)')) half.click();
    canvasElement.querySelector<HTMLButtonElement>('.rate_clear')?.click();
    for (const step of canvasElement.querySelectorAll<HTMLButtonElement>('.slider_step:not(:disabled)')) await userEvent.click(step);
    const increase = canvasElement.querySelector<HTMLButtonElement>('.slider_step-increase:not(:disabled)');
    if (increase) await userEvent.click(increase);
    const range = canvasElement.querySelector<HTMLInputElement>('.slider_input')!;
    setInputValue(range, '7');
    const file = new File(['hello'], 'hello.txt', {
      type: 'text/plain'
    });
    const image = new File(['image'], 'image.png', {
      type: 'image/png'
    });
    const imageTwo = new File(['image-two'], 'image-two.png', {
      type: 'image/png'
    });
    const large = new File(['x'.repeat(150)], 'large.txt', {
      type: 'text/plain'
    });
    const invalid = new File(['x'], 'bad.pdf', {
      type: 'application/pdf'
    });
    const uploadInput = canvasElement.querySelector<HTMLInputElement>('#upload-drag')!;
    for (const selected of [[invalid], [large], [file, image], [file], [image, imageTwo]]) {
      const transfer = new DataTransfer();
      selected.forEach(item => transfer.items.add(item));
      Object.defineProperty(uploadInput, 'files', {
        configurable: true,
        value: transfer.files
      });
      uploadInput.dispatchEvent(new Event('change', {
        bubbles: true
      }));
      await wait();
    }
    const dropzone = canvasElement.querySelector<HTMLElement>('.upload_dropzone')!;
    dropzone.dispatchEvent(new DragEvent('dragenter', {
      bubbles: true,
      cancelable: true
    }));
    dropzone.dispatchEvent(new DragEvent('dragover', {
      bubbles: true,
      cancelable: true
    }));
    dropzone.dispatchEvent(new DragEvent('dragleave', {
      bubbles: true,
      cancelable: true,
      relatedTarget: canvasElement
    }));
    const dropTransfer = new DataTransfer();
    dropTransfer.items.add(file);
    dropzone.dispatchEvent(new DragEvent('drop', {
      bubbles: true,
      cancelable: true,
      dataTransfer: dropTransfer
    }));
    keyboard(dropzone, 'Enter');
    keyboard(dropzone, ' ');
    keyboard(dropzone, 'Escape');
    keyboard(canvasElement.querySelector<HTMLElement>('.upload_card-trigger')!, 'Enter');
    keyboard(canvasElement.querySelector<HTMLElement>('.upload_avatar')!, ' ');
    keyboard(canvasElement.querySelector<HTMLElement>('#upload-disabled')!.parentElement!, 'Enter');
    for (const root of canvasElement.querySelectorAll<HTMLElement>('[data-component="Upload"]')) {
      if (root.querySelector('#upload-drag')) continue;
      for (const remove of root.querySelectorAll<HTMLButtonElement>('.upload_item-action, .upload_card-actions button')) remove.click();
    }
    const dragRemoveButtons = canvasElement.querySelectorAll<HTMLElement>('[data-component="Upload"]:has(#upload-drag) .upload_item-action');
    (dragRemoveButtons[1] ?? dragRemoveButtons[0])?.click();
    const disabledUpload = canvasElement.querySelector<HTMLInputElement>('#upload-disabled');
    if (disabledUpload) disabledUpload.dispatchEvent(new Event('change', {
      bubbles: true
    }));
    await userEvent.click([...canvasElement.querySelectorAll<HTMLButtonElement>('button')].find(button => button.textContent === '업로드 제거')!);
    const menuLinks = [...canvasElement.querySelectorAll<HTMLElement>('.menu > .menu_list > .menu_item > .menu_link')];
    menuLinks.forEach(link => link.click());
    canvasElement.querySelector<HTMLElement>('.menu_item-submenu .menu_link')?.click();
    const dropdowns = [...canvasElement.querySelectorAll<HTMLElement>('.dropdown')];
    const firstMenu = dropdowns[0].querySelector<HTMLElement>('.dropdown_menu')!;
    for (const key of ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(firstMenu, key);
    firstMenu.querySelector<HTMLElement>('.menu_link.is-disabled')?.click();
    firstMenu.querySelectorAll<HTMLElement>('.menu_link')[2]?.click();
    keyboard(dropdowns[0].querySelector<HTMLElement>('.dropdown_trigger')!, 'ArrowDown');
    keyboard(firstMenu, 'Tab');
    dropdowns[1].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    dropdowns[1].querySelector<HTMLElement>('.menu_link')?.click();
    dropdowns[2].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    dropdowns[0].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    await wait();
    keyboard(canvasElement.ownerDocument, 'Escape');
    dropdowns[0].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    canvasElement.ownerDocument.body.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true
    }));
    canvasElement.querySelector<HTMLElement>('.navbar_brand')?.click();
    canvasElement.querySelector<HTMLElement>('.navbar_toggle')?.click();
    canvasElement.querySelector<HTMLElement>('.navbar_toggle')?.click();
    for (const item of canvasElement.querySelectorAll<HTMLElement>('.navbar_link')) item.click();
    for (const page of canvasElement.querySelectorAll<HTMLElement>('.pagination button:not(:disabled)')) page.click();
    for (const step of canvasElement.querySelectorAll<HTMLElement>('.steps_navigable .steps_item:not(.is-wait) button, .steps_navigable .steps_item:not(.is-wait) a')) step.click();
    const tabLists = [...canvasElement.querySelectorAll<HTMLElement>('.tabs_list')];
    const scrollList = tabLists.find(list => list.closest('.tabs_scroll-nav'));
    if (scrollList) {
      Object.defineProperty(scrollList, 'scrollWidth', {
        configurable: true,
        value: 900
      });
      Object.defineProperty(scrollList, 'clientWidth', {
        configurable: true,
        value: 200
      });
      Object.defineProperty(scrollList, 'scrollLeft', {
        configurable: true,
        writable: true,
        value: 100
      });
      scrollList.scrollBy = ({
        left
      }: any) => {
        scrollList.scrollLeft += Number(left || 0);
        scrollList.dispatchEvent(new Event('scroll'));
      };
    }
    for (const list of tabLists) {
      const tabs = [...list.querySelectorAll<HTMLElement>('[role="tab"]')];
      for (const tabButton of tabs) tabButton.click();
      for (const key of ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(tabs[0], key);
      list.dispatchEvent(new Event('scroll'));
    }
    window.dispatchEvent(new Event('resize'));
    await wait(40);
    for (const nav of canvasElement.querySelectorAll<HTMLButtonElement>('.tabs_nav:not(:disabled)')) nav.click();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <PopoverHarness />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const doc = portalDocument(canvasElement);
    await wait(20);
    try {
      Object.defineProperty(canvasElement.ownerDocument.defaultView, 'frameElement', {
        configurable: true,
        value: {
          getBoundingClientRect: () => ({
            top: 10,
            left: 20,
            width: 0,
            height: 0
          })
        }
      });
    } catch {/* 테스트 브라우저가 frameElement 재정의를 막으면 기본 좌표 경로를 사용합니다. */}
    doc.querySelector<HTMLButtonElement>('.popover_close-floating')?.click();
    const triggers = [...canvasElement.querySelectorAll<HTMLElement>('.popover_trigger')];
    triggers[1].dispatchEvent(new MouseEvent('mouseover', {
      bubbles: true
    }));
    triggers[1].dispatchEvent(new FocusEvent('focusin', {
      bubbles: true
    }));
    triggers[1].dispatchEvent(new MouseEvent('mouseout', {
      bubbles: true,
      relatedTarget: doc.body
    }));
    triggers[1].dispatchEvent(new FocusEvent('focusout', {
      bubbles: true
    }));
    await userEvent.click(triggers[2]);
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new Event('scroll'));
    keyboard(doc, 'Escape');
    await userEvent.click(triggers[2]);
    doc.body.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true
    }));
    triggers[3].dispatchEvent(new MouseEvent('mouseover', {
      bubbles: true
    }));
    for (const close of doc.querySelectorAll<HTMLButtonElement>('.popover_close')) clickPrevented(close);
    await wait(120);
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <RemainderHarness />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const doc = canvasElement.ownerDocument;
    const localWindow = {
      top: null,
      addEventListener: noop
    } as any;
    getDrawerPortalRoot(null, null);
    getDrawerPortalRoot(doc, localWindow);
    getModalPortalRoot(null, null);
    getModalPortalRoot(doc, localWindow);
    getPopoverPortalRoot(null, null);
    getPopoverPortalRoot(doc, localWindow);
    getTooltipPortalRoot(null, null);
    getTooltipPortalRoot(doc, localWindow);
    getSnackbarPortalRoot(null, null);
    getSnackbarPortalRoot(doc, localWindow);
    const foreignDocument = doc.implementation.createHTMLDocument('portal');
    const base = foreignDocument.createElement('base');
    base.href = doc.baseURI;
    foreignDocument.head.appendChild(base);
    const pagehideCallbacks: Array<() => void> = [];
    const crossWindow = {
      top: {
        document: foreignDocument
      },
      addEventListener: (_type: string, callback: () => void) => pagehideCallbacks.push(callback)
    } as any;
    getDrawerPortalRoot(doc, crossWindow);
    getModalPortalRoot(doc, crossWindow);
    pagehideCallbacks.forEach(callback => callback());
    const rect = {
      top: 1,
      left: 2,
      width: 3,
      height: 4
    };
    const element = {
      ownerDocument: doc,
      getBoundingClientRect: () => rect
    } as any;
    topViewportRect(element, {
      top: {
        document: doc
      }
    } as any);
    topViewportRect(element, {
      top: {
        document: {}
      },
      frameElement: {
        getBoundingClientRect: () => ({
          top: 10,
          left: 20
        })
      }
    } as any);
    topViewportRect(element, {
      top: {
        document: {}
      },
      frameElement: null
    } as any);
    viewportRect(element, {
      top: {
        document: doc
      }
    } as any);
    viewportRect(element, {
      top: {
        document: {}
      },
      frameElement: {
        getBoundingClientRect: () => ({
          top: 10,
          left: 20
        })
      }
    } as any);
    viewportRect(element, {
      top: {
        document: {}
      },
      frameElement: null
    } as any);
    const triggerWrap = doc.createElement('span');
    const triggerButton = doc.createElement('button');
    triggerButton.className = 'btn';
    triggerWrap.appendChild(triggerButton);
    resolveTriggerAnchor(null);
    resolveTriggerAnchor(triggerButton);
    resolveTriggerAnchor(triggerWrap);
    resolveTooltipTriggerAnchor(triggerWrap);
    normalizeInitialSlide(0, 0, false);
    updateCoverflowStyles(null, null, false, 4, 1.5);
    const layoutRoot = doc.createElement('div');
    const layoutSwiper = doc.createElement('div');
    updateCoverflowStyles(layoutRoot, layoutSwiper, true, 4, 1.5);
    revokeUploadObjectUrls(new Set(['blob:coverage-test']));
    const avatarImage = canvasElement.querySelector<HTMLImageElement>('.avatar_image');
    avatarImage?.dispatchEvent(new Event('error'));
    const wheel = canvasElement.querySelector<HTMLElement>('.calendar_wheel-column')!;
    wheel.querySelector<HTMLButtonElement>('.calendar_wheel-step-prev')?.click();
    wheel.querySelector<HTMLButtonElement>('.calendar_wheel-step-next')?.click();
    for (const item of wheel.querySelectorAll<HTMLButtonElement>('[role="option"]')) item.click();
    await wait(30);
    const toggles = [...canvasElement.querySelectorAll<HTMLButtonElement>('.carousel_toggle')];
    for (const toggle of toggles) {
      await userEvent.click(toggle);
      await userEvent.click(toggle);
    }
    window.dispatchEvent(new Event('resize'));
    await wait(30);
  }
}`,...$.parameters?.docs?.source}}},Jt=[`FormsAndDisclosures`,`Overlays`,`FocuslessOverlays`,`Feedback`,`Elements`,`FormsAndNavigation`,`Popovers`,`Remainders`]})))()}Yt();export{X as Elements,Y as Feedback,J as FocuslessOverlays,K as FormsAndDisclosures,Z as FormsAndNavigation,q as Overlays,Q as Popovers,$ as Remainders,Jt as __namedExportsOrder,qt as default};
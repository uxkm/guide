import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,T as r,_ as i,g as a,o,x as s}from"./iframe-BkSPibU3.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";function l(e,t=0){let n=Number.parseInt(e??``,10);return Number.isFinite(n)?n:t}function u(e){let t=e.parentElement;for(;t&&t!==document.documentElement;){let e=getComputedStyle(t);if(e.transform&&e.transform!==`none`||e.filter&&e.filter!==`none`||e.perspective&&e.perspective!==`none`||/paint|layout|strict|content/.test(e.contain)||/transform|filter|perspective/.test(e.willChange))return t.getBoundingClientRect();t=t.parentElement}return{left:0,top:0}}function d(e){if(!e||e.dataset.affixInit===`true`)return()=>{};let t=null,n=e.dataset.target;if(n)try{t=document.querySelector(n)}catch{t=null}let r=e.querySelector(`.affix_target`);if(!r)return()=>{};let i=e.querySelector(`.affix_placeholder`);i||(i=document.createElement(`div`),i.className=`affix_placeholder`,i.hidden=!0,i.setAttribute(`aria-hidden`,`true`),e.insertBefore(i,r));let a=l(e.dataset.offsetTop),o=e.hasAttribute(`data-offset-bottom`),s=l(e.dataset.offsetBottom),c=t||window,d=!1,f=0,p=()=>t?.getBoundingClientRect()??{top:0,bottom:window.innerHeight},m=()=>Object.assign(r.style,{position:``,top:``,bottom:``,left:``,width:``,zIndex:``});function h(t,n){let i=u(r),c=o?t.bottom-r.offsetHeight-s:t.top+a;Object.assign(r.style,{position:`fixed`,top:`${c-i.top}px`,bottom:``,left:`${n.left-i.left}px`,width:`${n.width}px`,zIndex:getComputedStyle(e).getPropertyValue(`--affix-z-index`).trim()||`10`})}function g(t,n,a){d=t,e.classList.toggle(`is-affixed`,t),r.classList.toggle(`is-fixed`,t),t?(i.hidden=!1,i.style.height=`${r.offsetHeight}px`,i.style.width=`${a.width}px`,h(n,a)):(i.hidden=!0,i.style.height=``,i.style.width=``,m())}function _(){f||=requestAnimationFrame(()=>{f=0;let n=p(),c=e.getBoundingClientRect(),l=d?i.getBoundingClientRect():c,u=o?n.bottom-l.bottom<=s:l.top-n.top<=a;u&&t&&(u=o?l.bottom-n.top>=r.offsetHeight+s:n.bottom-l.top>=r.offsetHeight+a),g(u,n,l)})}return e.dataset.affixInit=`true`,c.addEventListener(`scroll`,_,{passive:!0}),t&&window.addEventListener(`scroll`,_,{passive:!0,capture:!0}),window.addEventListener(`resize`,_,{passive:!0}),_(),()=>{cancelAnimationFrame(f),c.removeEventListener(`scroll`,_),t&&window.removeEventListener(`scroll`,_,{capture:!0}),window.removeEventListener(`resize`,_),delete e.dataset.affixInit,g(!1,p(),e.getBoundingClientRect())}}function f({target:e,offsetTop:t=0,offsetBottom:n,skin:r=``,interactive:i=!0,children:a,className:o=``,style:s,...c}){let l=(0,p.useRef)(null),u=h.includes(r)?r:``,f=(0,p.useMemo)(()=>[`affix_target`,u&&`affix_${u}`].filter(Boolean).join(` `),[u]);return(0,p.useEffect)(()=>{if(!(!i||!l.current))return d(l.current)},[i,n,t,e]),(0,m.jsxs)(`div`,{...c,ref:l,className:[`affix`,o].filter(Boolean).join(` `),style:s,"data-component":`Affix`,"data-affix":i?``:void 0,"data-target":e||void 0,"data-offset-top":Number(t)===0?void 0:t,"data-offset-bottom":n!=null&&n!==``?n:void 0,children:[(0,m.jsx)(`div`,{className:`affix_placeholder`,"aria-hidden":`true`,hidden:!0}),(0,m.jsx)(`div`,{className:f,children:a})]})}var p,m,h;function g(){return(g=e((()=>{p=n(),m=c(),h=[``,`bar`,`anchor`],f.__docgenInfo={description:``,methods:[],displayName:`Affix`,props:{offsetTop:{defaultValue:{value:`0`,computed:!1},required:!1},skin:{defaultValue:{value:`''`,computed:!1},required:!1},interactive:{defaultValue:{value:`true`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var _=t({Anchor:()=>O,Basic:()=>E,Bottom:()=>k,Offset:()=>D,Playground:()=>T,WindowScroll:()=>A,__namedExportsOrder:()=>j,default:()=>w});function v({label:e=`주문 #ORD-2024-0815`}){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{className:`affix_bar-label`,children:e}),(0,x.jsxs)(`div`,{className:`affix_bar-actions`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn btn_outline btn_sm`,children:`취소`}),(0,x.jsx)(`button`,{type:`button`,className:`btn btn_filled color_primary btn_sm`,children:`확인`})]})]})}function y({id:e,children:t,bottom:n=!1}){return(0,x.jsx)(`div`,{className:`affix_demo-narrow`,children:(0,x.jsx)(`div`,{id:e,className:`affix_demo-scroll`,children:(0,x.jsxs)(`div`,{className:`affix_demo-content`,children:[(0,x.jsx)(`p`,{children:`아래 영역을 스크롤해 고정 동작을 확인하세요.`}),n?C.map((e,t)=>(0,x.jsx)(`p`,{children:e},t)):null,t,n?null:C.map((e,t)=>(0,x.jsx)(`p`,{children:e},t))]})})})}function b(e){let{children:t,style:n,offsetTop:r,offsetBottom:i,...a}=e,o=typeof r==`number`&&Number.isFinite(r)?r:Number(r)||0,s=i===``||i==null?void 0:typeof i==`number`&&Number.isFinite(i)?i:Number(i);return{...a,offsetTop:o,...Number.isFinite(s)&&s!==0?{offsetBottom:s}:{}}}var x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{i(),g(),x=c(),S=f,C=[`배송지와 결제 정보를 확인하세요.`,`상품 정보 · 배송비 · 요청 사항`,`교환·반품 안내`,`고객센터 · FAQ`,`관련 상품 · 최근 본 상품`,`알림 설정 · 로그인 기록`],w={title:`기타/Affix`,component:S,parameters:{layout:`padded`,controls:{include:[`skin`,`offsetTop`,`offsetBottom`,`interactive`]},docs:{extractArgTypes:()=>({})}},decorators:[e=>(0,x.jsx)(`div`,{className:`affix-story-demo`,children:(0,x.jsx)(e,{})})],args:{skin:`bar`,offsetTop:0,offsetBottom:0,interactive:!0},argTypes:{...a,skin:{control:`select`,options:[``,`bar`,`anchor`],labels:{"":`없음`,bar:`bar`,anchor:`anchor`},type:`string`},offsetTop:{...s,description:`상단 고정 오프셋 (px)`},offsetBottom:{...s,description:`하단 고정 오프셋 (px). 0이면 미적용`},interactive:o,target:{...r,table:{disable:!0}}}},T={name:`Playground`,args:{skin:`bar`,offsetTop:0,offsetBottom:0,interactive:!0},render:e=>(0,x.jsx)(y,{id:`affix-playground`,children:(0,x.jsx)(S,{...b(e),target:`#affix-playground`,children:(0,x.jsx)(v,{})})})},E={name:`기본`,render:()=>(0,x.jsx)(y,{id:`affix-basic`,children:(0,x.jsx)(S,{target:`#affix-basic`,skin:`bar`,children:(0,x.jsx)(v,{})})})},D={name:`상단 오프셋`,render:()=>(0,x.jsx)(y,{id:`affix-offset`,children:(0,x.jsx)(S,{target:`#affix-offset`,offsetTop:12,skin:`bar`,children:(0,x.jsx)(v,{label:`상단에서 12px 떨어진 툴바`})})})},O={name:`앵커 내비게이션`,render:()=>(0,x.jsx)(y,{id:`affix-anchor`,children:(0,x.jsx)(S,{target:`#affix-anchor`,skin:`anchor`,children:(0,x.jsxs)(`nav`,{"aria-label":`설정 섹션`,children:[(0,x.jsx)(`a`,{className:`link color_primary`,href:`#profile`,children:`프로필`}),(0,x.jsx)(`a`,{className:`link`,href:`#security`,children:`보안`}),(0,x.jsx)(`a`,{className:`link`,href:`#notice`,children:`알림`}),(0,x.jsx)(`a`,{className:`link`,href:`#billing`,children:`결제`})]})})})},k={name:`하단 고정`,render:()=>(0,x.jsx)(y,{id:`affix-bottom`,bottom:!0,children:(0,x.jsx)(S,{target:`#affix-bottom`,offsetBottom:0,skin:`bar`,children:(0,x.jsx)(v,{label:`합계 ₩78,000`})})})},A={name:`페이지 스크롤`,render:()=>(0,x.jsx)(y,{id:`affix-page`,children:(0,x.jsx)(S,{target:`#affix-page`,skin:`bar`,style:{"--affix-bar-bg":`color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))`},children:(0,x.jsx)(v,{label:`신규 컴포넌트 가이드가 업데이트되었습니다`})})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    skin: 'bar',
    offsetTop: 0,
    offsetBottom: 0,
    interactive: true
  },
  render: args => <Demo id="affix-playground">
      <Affix {...mapAffixArgs(args)} target="#affix-playground">
        <Bar />
      </Affix>
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo id="affix-basic">
      <Affix target="#affix-basic" skin="bar">
        <Bar />
      </Affix>
    </Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '상단 오프셋',
  render: () => <Demo id="affix-offset">
      <Affix target="#affix-offset" offsetTop={12} skin="bar">
        <Bar label="상단에서 12px 떨어진 툴바" />
      </Affix>
    </Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '앵커 내비게이션',
  render: () => <Demo id="affix-anchor">
      <Affix target="#affix-anchor" skin="anchor">
        <nav aria-label="설정 섹션">
          <a className="link color_primary" href="#profile">
            프로필
          </a>
          <a className="link" href="#security">
            보안
          </a>
          <a className="link" href="#notice">
            알림
          </a>
          <a className="link" href="#billing">
            결제
          </a>
        </nav>
      </Affix>
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '하단 고정',
  render: () => <Demo id="affix-bottom" bottom>
      <Affix target="#affix-bottom" offsetBottom={0} skin="bar">
        <Bar label="합계 ₩78,000" />
      </Affix>
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '페이지 스크롤',
  render: () => <Demo id="affix-page">
      <Affix target="#affix-page" skin="bar" style={{
      '--affix-bar-bg': 'color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))'
    } as React.CSSProperties}>
        <Bar label="신규 컴포넌트 가이드가 업데이트되었습니다" />
      </Affix>
    </Demo>
}`,...A.parameters?.docs?.source}}},j=[`Playground`,`Basic`,`Offset`,`Anchor`,`Bottom`,`WindowScroll`]})))()}export{D as a,k as i,O as n,A as o,E as r,M as s,_ as t};
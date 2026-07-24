import{r as i,u as z,c as F,n as B,j as e,a as P,b as R,d as ra,B as L,I,Q as ca,X as ia,Y as ma,Z as pa,a0 as ua}from"./iframe-ifEc15ad.js";import{p as Ca,j as ha,W as fa,b as xa,a as ya,d as ga,J as T,c as Ce,E as ba}from"./calendar-demo-BOe-Cb6U.js";import{w as _a}from"./story-renders-Hdz_JUlO.js";import{r as va,f as ka}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const wa=new Set(["","sm","lg"]),ja=R("Calendar",{defaults:{role:"application"},booleanProps:new Set(["noHeader","minimal","compact","borderless","shadow","ghost","week","readonly","disabled","weekends","agenda","wheel"]),selfClosing:!1});function C({ref:a,title:n,ariaLabel:s,noHeader:r,minimal:d,compact:l,borderless:t,shadow:m,ghost:u,week:h,readonly:x,disabled:o,weekends:c,agenda:p,wheel:f,size:_="",role:j="application",header:W,weekdays:E,footer:A,children:N,className:H,...k}){const Y=i.useRef(null),U=wa.has(_)?_:"";function y(g){Y.current=g,typeof a=="function"?a(g):a&&typeof a=="object"&&(a.current=g)}z(ja,{title:n,ariaLabel:s,noHeader:r,minimal:d,compact:l,borderless:t,shadow:m,ghost:u,week:h,readonly:x,disabled:o,weekends:c,agenda:p,wheel:f,size:U,role:j},F({default:N,header:W,weekdays:E,footer:A}),Y,{className:H,...k},{when:g=>!g.wheel});const V=i.useMemo(()=>{const g=["calendar"];return r&&g.push("calendar_no-header"),d&&g.push("calendar_minimal"),l&&g.push("calendar_compact"),t&&g.push("calendar_borderless"),m&&g.push("calendar_shadow"),u&&g.push("calendar_ghost"),h&&g.push("calendar_week"),x&&g.push("calendar_readonly"),o&&g.push("is-disabled"),c&&g.push("calendar_weekends"),p&&g.push("calendar_agenda"),f&&g.push("calendar_wheel"),U==="sm"&&g.push("calendar_sm"),U==="lg"&&g.push("calendar_lg"),g},[r,d,l,t,m,u,h,x,o,c,p,f,U]),{class:gn,...da}=k,ta=B(da),oa=n&&!r&&!d?e.jsx("div",{className:"calendar_header",children:e.jsx("span",{className:"calendar_title",children:n})}):null;return e.jsxs("div",{ref:y,className:P(V,H),role:j,"aria-label":s,"aria-disabled":o?"true":void 0,...ta,children:[W!==void 0?W:oa,E,N,A]})}C.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{size:{defaultValue:{value:"''",computed:!1},required:!1},role:{defaultValue:{value:"'application'",computed:!1},required:!1}}};function me({ripple:a,day:n,otherMonth:s,today:r,selected:d,disabled:l,sunday:t,saturday:m,rangeStart:u,rangeEnd:h,inRange:x,event:o,readonly:c,className:p,...f}){const{rippleAttrs:_}=ra({ripple:a}),j=i.useMemo(()=>{const k=["calendar_day"];return s&&k.push("is-other-month"),r&&k.push("is-today"),d&&k.push("is-selected"),l&&k.push("is-disabled"),t&&k.push("is-sunday"),m&&k.push("is-saturday"),u&&k.push("is-range-start"),h&&k.push("is-range-end"),x&&k.push("is-in-range"),o&&k.push("has-event"),k},[s,r,d,l,t,m,u,h,x,o]),E=!!(l||s&&!(d||x||u||h)),{class:A,...N}=f,H=B(N);return e.jsx("button",{type:"button",className:P(j,p),disabled:E||void 0,"aria-current":r?"date":void 0,"aria-selected":d?"true":void 0,..._,...H,children:n})}me.__docgenInfo={description:"",methods:[],displayName:"CalendarDay"};const Na=R("CalendarFooter",{selfClosing:!1});function pe({children:a,className:n,...s}){const r=i.useRef(null);z(Na,{},F({default:a}),r,{className:n,...s});const{class:d,...l}=s,t=B(l);return e.jsxs("div",{ref:r,className:P("calendar_footer",n),...t,children:[e.jsx(L,{variant:"text",color:"primary",size:"sm",label:"오늘"}),e.jsx("div",{className:"calendar_footer-actions",children:a??e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"ghost",size:"sm",label:"초기화"}),e.jsx(L,{variant:"filled",color:"primary",size:"sm",label:"확인"})]})})]})}pe.__docgenInfo={description:"",methods:[],displayName:"CalendarFooter"};function ue({week:a,children:n,className:s,...r}){const d=i.useMemo(()=>["calendar_grid",a&&"calendar_grid-week"],[a]),{class:l,...t}=r,m=B(t);return e.jsx("div",{className:P(d,s),role:"grid",...m,children:n})}ue.__docgenInfo={description:"",methods:[],displayName:"CalendarGrid"};const La=R("CalendarGroup",{selfClosing:!1});function $({children:a,className:n,...s}){const r=i.useRef(null);z(La,{},F({default:a}),r,{className:n,...s});const{class:d,...l}=s,t=B(l);return e.jsx("div",{ref:r,className:P("calendar_group",n),...t,children:a})}$.__docgenInfo={description:"",methods:[],displayName:"CalendarGroup"};const Wa=R("CalendarHeader",{selfClosing:!1});function w({title:a,prevLabel:n="이전 달",nextLabel:s="다음 달",showNav:r=!0,showPrev:d,showNext:l,children:t,className:m,...u}){const h=i.useRef(null),x=d??r,o=l??r;z(Wa,{title:a,prevLabel:n,nextLabel:s,showNav:r,showPrev:d,showNext:l},F({default:t}),h,{className:m,...u});const{class:c,...p}=u,f=B(p);return e.jsxs("div",{ref:h,className:P("calendar_header",m),...f,children:[x?e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:n,iconBefore:e.jsx(I,{name:"chevron-left",size:"sm"})}):null,e.jsx("span",{className:"calendar_title",children:a}),o?e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:s,iconBefore:e.jsx(I,{name:"chevron-right",size:"sm"})}):null,t]})}w.__docgenInfo={description:"",methods:[],displayName:"CalendarHeader",props:{prevLabel:{defaultValue:{value:"'이전 달'",computed:!1},required:!1},nextLabel:{defaultValue:{value:"'다음 달'",computed:!1},required:!1},showNav:{defaultValue:{value:"true",computed:!1},required:!1}}};function Ea(a,n={}){return ca("CalendarMonth",a,{},n,{booleanProps:new Set(["weekends","week","readonly"]),skipProps:["preset"],selfClosing:!0,arrayPropPlaceholders:{days:"days",events:"EVENT_DAYS",disabled:"disabledDays"}})}function b({days:a,preset:n="",selected:s,today:r,disabled:d,events:l,rangeStart:t,rangeEnd:m,weekends:u,partial:h,week:x,readonly:o,className:c,...p}){const f=i.useRef(null);z((N,H,k)=>Ea(N,k),{days:a,preset:n,selected:s,today:r,disabled:d,events:l,rangeStart:t,rangeEnd:m,weekends:u,partial:h,week:x,readonly:o},{},f,{className:c,...p});const _=i.useMemo(()=>a!=null&&a.length?a:h?Ca(h,{today:r,selected:s}):n==="june2024"||!n?ha({selected:s,today:r,disabled:d,events:l,rangeStart:t,rangeEnd:m}):[],[a,h,n,s,r,d,l,t,m]),j=i.useMemo(()=>u?_.map((N,H)=>({...N,sunday:N.sunday??H%7===0,saturday:N.saturday??H%7===6})):_,[_,u]),{class:W,...E}=p,A=B(E);return e.jsx("div",{ref:f,className:P("calendar_month",c),style:{display:"contents"},...A,children:e.jsx(ue,{week:x,children:j.map((N,H)=>e.jsx(me,{...N,readonly:o},`${N.day}-${H}`))})})}b.__docgenInfo={description:"",methods:[],displayName:"CalendarMonth",props:{preset:{defaultValue:{value:"''",computed:!1},required:!1}}};const Ma=R("CalendarNav",{selfClosing:!1});function ce({label:a,prevLabel:n="이전 주",nextLabel:s="다음 주",className:r,...d}){const l=i.useRef(null);z(Ma,{label:a,prevLabel:n,nextLabel:s},F({}),l,{className:r,...d});const{class:t,...m}=d,u=B(m);return e.jsxs("div",{ref:l,className:P("calendar_nav",r),...u,children:[e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:n,iconBefore:e.jsx(I,{name:"chevron-left",size:"sm"})}),e.jsx("span",{className:"calendar_nav-label",children:a}),e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:s,iconBefore:e.jsx(I,{name:"chevron-right",size:"sm"})})]})}ce.__docgenInfo={description:"",methods:[],displayName:"CalendarNav",props:{prevLabel:{defaultValue:{value:"'이전 주'",computed:!1},required:!1},nextLabel:{defaultValue:{value:"'다음 주'",computed:!1},required:!1}}};const Da=R("CalendarWeekdays",{selfClosing:!1});function v({labels:a=fa,className:n,...s}){const r=i.useRef(null);z(Da,{labels:a},F({}),r,{className:n,...s});const{class:d,...l}=s,t=B(l);return e.jsx("div",{ref:r,className:P("calendar_weekdays",n),"aria-hidden":"true",...t,children:a.map(m=>e.jsx("span",{className:"calendar_weekday",children:m},m))})}v.__docgenInfo={description:"",methods:[],displayName:"CalendarWeekdays",props:{labels:{defaultValue:{value:"WEEKDAYS",computed:!0},required:!1}}};const Sa=R("CalendarWheel",{booleanProps:new Set(["shadow","borderless","footer","toolbar"]),selfClosing:!1});function J({title:a,shadow:n,borderless:s,footer:r=!1,toolbar:d=!0,cancelLabel:l,confirmLabel:t,ariaLabel:m,toolbarContent:u,footerContent:h,children:x,className:o,...c}){const p=i.useRef(null);z(Sa,{title:a,shadow:n,borderless:s,footer:r,toolbar:d,cancelLabel:l,confirmLabel:t,ariaLabel:m},F({default:x,toolbar:u,footer:h}),p,{className:o,...c});const f=!!(d&&(u||a||l||t)),_=!!(r||h),{class:j,...W}=c,E=B(W),A=e.jsxs(e.Fragment,{children:[l?e.jsx(L,{variant:"text",size:"sm",label:l}):null,a?e.jsx("span",{className:"calendar_wheel-title",children:a}):null,t?e.jsx(L,{variant:"text",color:"primary",size:"sm",label:t}):null]});return e.jsxs(C,{ref:p,wheel:!0,shadow:n,borderless:s,role:"group",ariaLabel:m,className:o,...E,children:[f?e.jsx("div",{className:"calendar_wheel-toolbar","data-demo-slot":"toolbar",children:u??A}):null,e.jsxs("div",{className:"calendar_wheel-body",children:[e.jsx("div",{className:"calendar_wheel-highlight","aria-hidden":"true"}),e.jsx("div",{className:"calendar_wheel-columns",children:x}),e.jsx("div",{className:"calendar_wheel-fade","aria-hidden":"true"})]}),_?e.jsx("div",{className:"calendar_wheel-footer","data-demo-slot":"footer",children:h}):null]})}J.__docgenInfo={description:"",methods:[],displayName:"CalendarWheel",props:{footer:{defaultValue:{value:"false",computed:!1},required:!1},toolbar:{defaultValue:{value:"true",computed:!1},required:!1}}};function ie(a){return[...a.querySelectorAll(".calendar_wheel-item")]}function la(a){const n=a.getBoundingClientRect();return n.top+n.height/2}function sa(a){const n=a.getBoundingClientRect();return n.top+n.height/2}function Ha(a){const n=ie(a),s=la(a);let r=null,d=1/0;return n.forEach(l=>{const t=Math.abs(sa(l)-s);t<d&&(d=t,r=l)}),r}function Aa(a,{onSelect:n}={}){const s=i.useRef(!1),r=i.useRef(null),d=i.useRef(n);d.current=n;const l=i.useCallback((o,{skipScroll:c=!1}={})=>{var _,j;const p=a.current;if(!p||!o)return;if(!c){const W=sa(o)-la(p);Math.abs(W)>1&&(s.current=!0,p.scrollTop+=W,requestAnimationFrame(()=>{s.current=!1}))}const f=(_=o.textContent)==null?void 0:_.trim();f&&((j=d.current)==null||j.call(d,f))},[a]),t=i.useCallback(({skipScroll:o=!1}={})=>{const c=a.current;if(!c)return;const p=Ha(c);p&&l(p,{skipScroll:o})},[a,l]),m=i.useCallback(()=>{t()},[t]),u=i.useCallback(()=>{const o=a.current;if(!o)return;const c=o.querySelector(".calendar_wheel-item.is-selected");c&&requestAnimationFrame(()=>l(c))},[a,l]),h=i.useCallback(o=>{const c=a.current;if(!c)return;const f=ie(c)[o];f&&l(f)},[a,l]),x=i.useCallback(o=>{const c=a.current;if(!c)return;const p=ie(c),f=c.querySelector(".calendar_wheel-item.is-selected"),j=p.indexOf(f)+o;j<0||j>=p.length||l(p[j])},[a,l]);return i.useEffect(()=>{const o=a.current;if(!o)return;function c(){s.current||(t({skipScroll:!0}),clearTimeout(r.current),r.current=setTimeout(m,80))}return o.addEventListener("scroll",c,{passive:!0}),requestAnimationFrame(()=>u()),()=>{o.removeEventListener("scroll",c),clearTimeout(r.current)}},[a,t,m,u]),{scrollToSelected:u,selectByIndex:h,moveSelection:x}}const Pa=R("CalendarWheelColumn",{booleanProps:new Set(["showSteps"]),selfClosing:!1});function M({ripple:a,label:n,items:s=[],selected:r,showSteps:d=!0,prevLabel:l,nextLabel:t,className:m,...u}){const{rippleAttrs:h,childRippleAttrs:x}=ra({ripple:a},{mode:"container"}),o=i.useRef(null),c=i.useRef(null),[p,f]=i.useState(r);z(Pa,{ripple:a,label:n,items:s,selected:r,showSteps:d,prevLabel:l,nextLabel:t},F({}),o,{className:m,...u});const{scrollToSelected:_,selectByIndex:j,moveSelection:W}=Aa(c,{onSelect(y){f(y)}});i.useEffect(()=>{f(r);const y=requestAnimationFrame(()=>_());return()=>cancelAnimationFrame(y)},[r,_]),i.useEffect(()=>{const y=requestAnimationFrame(()=>_());return()=>cancelAnimationFrame(y)},[s,_]);const E=i.useMemo(()=>s.map(y=>{if(typeof y=="string"||typeof y=="number"){const V=String(y);return{label:V,selected:V===String(p)}}return{label:y.label,selected:y.selected??y.label===String(p)}}),[s,p]),A=i.useMemo(()=>E.findIndex(y=>y.selected),[E]),N=A<=0,H=A<0||A>=E.length-1,{class:k,...Y}=u,U=B(Y);return e.jsxs("div",{ref:o,className:P("calendar_wheel-column",m),...h,...U,children:[d&&l?e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,className:"calendar_wheel-step calendar_wheel-step-prev",ariaLabel:l,disabled:N,iconBefore:e.jsx(I,{name:"chevron-up",size:"sm"}),onClick:()=>W(-1),...x}):null,e.jsx("ul",{ref:c,className:"calendar_wheel-list",role:"listbox","aria-label":n,"data-wheel":"",children:E.map((y,V)=>e.jsx("li",{children:e.jsx("button",{type:"button",className:P("calendar_wheel-item",y.selected&&"is-selected"),"aria-selected":y.selected?"true":void 0,onClick:()=>j(V),...x,children:y.label})},y.label))}),d&&t?e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,className:"calendar_wheel-step calendar_wheel-step-next",ariaLabel:t,disabled:H,iconBefore:e.jsx(I,{name:"chevron-down",size:"sm"}),onClick:()=>W(1),...x}):null]})}M.__docgenInfo={description:"",methods:[],displayName:"CalendarWheelColumn",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1},showSteps:{defaultValue:{value:"true",computed:!1},required:!1}}};const G=ia,Ba=ma,za=G,Ga=[{name:"title",type:"string",default:"—",description:"내장 헤더 제목 (header 슬롯 없을 때)"},{name:"aria-label",type:"string",default:"—",description:"캘린더 접근성 라벨 (권장)"},{name:"role",type:"string",default:"application",description:"루트 role 속성"},{name:"size",type:"'sm' | 'lg'",default:"—",description:"calendar_sm · calendar_lg"},{name:"no-header",type:"boolean",default:"false",description:"헤더 영역 숨김"},{name:"minimal",type:"boolean",default:"false",description:"최소 스타일 (calendar_minimal)"},{name:"compact",type:"boolean",default:"false",description:"좁은 셀 (calendar_compact)"},{name:"borderless",type:"boolean",default:"false",description:"테두리 없음"},{name:"shadow",type:"boolean",default:"false",description:"그림자 (calendar_shadow)"},{name:"ghost",type:"boolean",default:"false",description:"투명 배경 (calendar_ghost)"},{name:"week",type:"boolean",default:"false",description:"주간 뷰 레이아웃"},{name:"weekends",type:"boolean",default:"false",description:"주말 강조 (calendar_weekends)"},{name:"agenda",type:"boolean",default:"false",description:"아젠다 레이아웃"},{name:"wheel",type:"boolean",default:"false",description:"휠 피커 레이아웃"},{name:"readonly",type:"boolean",default:"false",description:"날짜 선택 불가"},{name:"disabled",type:"boolean",default:"false",description:"전체 비활성 (is-disabled)"}],Ia=G,Fa=[{name:"title",type:"string",default:"—",description:"월·기간 제목 (calendar_title)"},{name:"prev-label",type:"string",default:"이전 달",description:"이전 버튼 aria-label"},{name:"next-label",type:"string",default:"다음 달",description:"다음 버튼 aria-label"},{name:"show-nav",type:"boolean",default:"true",description:"이전·다음 네비게이션 표시"},{name:"show-prev",type:"boolean",default:"—",description:"이전 버튼만 제어 (show-nav 대체)"},{name:"show-next",type:"boolean",default:"—",description:"다음 버튼만 제어"}],Ra=G,Ja=[{name:"label",type:"string",default:"—",description:"주간 네비 라벨"},{name:"prev-label",type:"string",default:"이전 주",description:"이전 버튼 aria-label"},{name:"next-label",type:"string",default:"다음 주",description:"다음 버튼 aria-label"}],Ua=G,Va=[{name:"labels",type:"string[]",default:"일~토",description:"요일 라벨 배열"}],Ka=G,$a=[{name:"days",type:"object[]",default:"—",description:"CalendarDay용 셀 데이터 배열"},{name:"preset",type:"string",default:"june2024",description:"데모용 월 프리셋"},{name:"selected",type:"number",default:"—",description:"선택일 (프리셋·partial용)"},{name:"today",type:"number",default:"—",description:"오늘 날짜 (프리셋·partial용)"},{name:"disabled",type:"number[]",default:"—",description:"비활성 날짜 목록"},{name:"events",type:"number[]",default:"—",description:"이벤트 표시 날짜"},{name:"range-start",type:"number",default:"—",description:"범위 시작일"},{name:"range-end",type:"number",default:"—",description:"범위 종료일"},{name:"weekends",type:"boolean",default:"false",description:"주말 셀 표시"},{name:"partial",type:"number",default:"—",description:"부분 월 데모 일수"},{name:"week",type:"boolean",default:"false",description:"주간 그리드"},{name:"readonly",type:"boolean",default:"false",description:"날짜 버튼 비활성"}],Ya=G,Ta=[{name:"week",type:"boolean",default:"false",description:"7열 주간 그리드 (calendar_grid-week)"}],Oa=G,qa=[{name:"day",type:"number | string",default:"—",description:"날짜 숫자 (필수)"},{name:"other-month",type:"boolean",default:"false",description:"다른 달 (is-other-month)"},{name:"today",type:"boolean",default:"false",description:"오늘 (is-today)"},{name:"selected",type:"boolean",default:"false",description:"선택 (is-selected)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"sunday",type:"boolean",default:"false",description:"일요일 (is-sunday)"},{name:"saturday",type:"boolean",default:"false",description:"토요일 (is-saturday)"},{name:"range-start",type:"boolean",default:"false",description:"범위 시작 (is-range-start)"},{name:"range-end",type:"boolean",default:"false",description:"범위 끝 (is-range-end)"},{name:"in-range",type:"boolean",default:"false",description:"범위 내 (is-in-range)"},{name:"event",type:"boolean",default:"false",description:"이벤트 점 (has-event)"},{name:"readonly",type:"boolean",default:"false",description:"클릭 불가"},va],Qa=G,Za=[{name:"title",type:"string",default:"—",description:"툴바 제목"},{name:"aria-label",type:"string",default:"—",description:"휠 피커 접근성 라벨"},{name:"shadow",type:"boolean",default:"false",description:"Calendar에 전달"},{name:"borderless",type:"boolean",default:"false",description:"Calendar에 전달"},{name:"footer",type:"boolean",default:"false",description:"하단 푸터 영역 표시"},{name:"toolbar",type:"boolean",default:"true",description:"상단 툴바 표시"},{name:"cancel-label",type:"string",default:"—",description:"취소 버튼 텍스트"},{name:"confirm-label",type:"string",default:"—",description:"확인 버튼 텍스트"}],Xa=G,en=[{name:"label",type:"string",default:"—",description:"listbox aria-label"},{name:"items",type:"array",default:"[]",description:"문자열·숫자 또는 { label, selected } 객체"},{name:"selected",type:"string | number",default:"—",description:"선택 값"},{name:"show-steps",type:"boolean",default:"true",description:"위·아래 스텝 버튼"},{name:"prev-label",type:"string",default:"—",description:"이전 스텝 aria-label"},{name:"next-label",type:"string",default:"—",description:"다음 스텝 aria-label"},ka],K=Ba,an=[{name:"header",description:"헤더 (CalendarHeader)"},{name:"weekdays",description:"요일 행 (CalendarWeekdays)"},{name:"default",description:"월 그리드·휠 등 본문"},{name:"footer",description:"푸터 (CalendarFooter)"}],nn=[{name:"default",description:"헤더 우측 추가 콘텐츠"}],rn=[{name:"default",description:"CalendarDay 자식"}],ln=[{name:"default",description:"푸터 액션 (기본: 초기화·확인)"}],sn=[{name:"default",description:"여러 Calendar 나란히"}],dn=[{name:"toolbar",description:"상단 툴바 커스텀"},{name:"default",description:"CalendarWheelColumn 목록"},{name:"footer",description:"하단 푸터"}],tn=pa,on=[{name:"calendar",description:"캘린더 루트"},{name:"calendar_sm · calendar_lg · calendar_compact",description:"크기"},{name:"calendar_borderless · calendar_shadow · calendar_ghost · calendar_minimal",description:"스킨"},{name:"calendar_week · calendar_weekends · calendar_agenda · calendar_wheel",description:"레이아웃 모드"},{name:"calendar_header · calendar_title · calendar_nav",description:"헤더·네비"},{name:"calendar_weekdays · calendar_weekday",description:"요일 행"},{name:"calendar_grid · calendar_grid-week",description:"날짜 그리드"},{name:"calendar_day",description:"날짜 셀 버튼"},{name:"calendar_footer · calendar_group",description:"푸터·다중 캘린더"},{name:"calendar_wheel-*",description:"휠 피커 파트"},{name:"is-today · is-selected · is-in-range · is-range-start · is-range-end",description:"날짜 상태"},{name:"is-other-month · is-sunday · is-saturday · is-disabled · has-event",description:"날짜 상태"}],cn=ua,mn=[{name:"--calendar-cell-size · --calendar-cell-size-sm · --calendar-cell-size-lg",default:"—",description:"날짜 셀 크기"},{name:"--calendar-gap",default:"2px",description:"그리드 간격"},{name:"--calendar-wheel-height · --calendar-wheel-row-height",default:"—",description:"휠 피커 높이"},{name:"--calendar-agenda-gap · --calendar-agenda-date-width",default:"—",description:"아젠다 레이아웃"}],pn=[{title:"API · Calendar Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 aria-label · no-header는 ariaLabel · noHeader로 다룹니다.",tables:[{columns:za,rows:Ga,codeColumn:"name"}]},{title:"API · CalendarHeader Props",tables:[{columns:Ia,rows:Fa,codeColumn:"name"}]},{title:"API · CalendarNav Props",tables:[{columns:Ra,rows:Ja,codeColumn:"name"}]},{title:"API · CalendarWeekdays Props",tables:[{columns:Ua,rows:Va,codeColumn:"name"}]},{title:"API · CalendarMonth Props",tables:[{columns:Ka,rows:$a,codeColumn:"name"}]},{title:"API · CalendarGrid Props",tables:[{columns:Ya,rows:Ta,codeColumn:"name"}]},{title:"API · CalendarDay Props",tables:[{columns:Oa,rows:qa,codeColumn:"name"}]},{title:"API · CalendarWheel Props",description:"Vue toolbar · footer 슬롯은 React toolbarContent · footerContent prop에 대응합니다.",tables:[{columns:Qa,rows:Za,codeColumn:"name"}]},{title:"API · CalendarWheelColumn Props",tables:[{columns:Xa,rows:en,codeColumn:"name"}]},{title:"API · Calendar Children / Slots",description:"Vue header · weekdays · footer 슬롯은 React header · weekdays · footer prop에 대응합니다.",tables:[{columns:K,rows:an,codeColumn:"name"}]},{title:"API · CalendarHeader · Footer · Group Slots",tables:[{columns:K,rows:nn,codeColumn:"name"},{columns:K,rows:ln,codeColumn:"name"},{columns:K,rows:sn,codeColumn:"name"}]},{title:"API · CalendarGrid · CalendarWheel Slots",tables:[{columns:K,rows:rn,codeColumn:"name"},{columns:K,rows:dn,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:tn,rows:on,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:cn,rows:mn,codeColumn:"name"}]}],D=a=>_a(a,a),un=Array.from({length:11},(a,n)=>`${2019+n}년`),Cn=Array.from({length:12},(a,n)=>`${n+1}월`),hn=Array.from({length:31},(a,n)=>`${n+1}일`),fn=xa(),xn=ya(),yn=ga(14,{today:7,selected:9}),S={title:"제목",ariaLabel:"접근성 라벨",noHeader:!1,minimal:!1,compact:!1,borderless:!1,shadow:!1,ghost:!1,week:!1,readonly:!1,disabled:!1,weekends:!1,agenda:!1,wheel:!1,size:"sm",role:"application"},jn={title:"Components/데이터 표시/Calendar",id:"components-calendar",component:C,subcomponents:{CalendarDay:me,CalendarFooter:pe,CalendarGrid:ue,CalendarGroup:$,CalendarHeader:w,CalendarMonth:b,CalendarNav:ce,CalendarWeekdays:v,CalendarWheel:J,CalendarWheelColumn:M},tags:["autodocs"],argTypes:{title:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},noHeader:{control:"boolean",type:{name:"boolean",summary:"boolean"}},minimal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},compact:{control:"boolean",type:{name:"boolean",summary:"boolean"}},borderless:{control:"boolean",type:{name:"boolean",summary:"boolean"}},shadow:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ghost:{control:"boolean",type:{name:"boolean",summary:"boolean"}},week:{control:"boolean",type:{name:"boolean",summary:"boolean"}},readonly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},weekends:{control:"boolean",type:{name:"boolean",summary:"boolean"}},agenda:{control:"boolean",type:{name:"boolean",summary:"boolean"}},wheel:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","lg"],type:{name:"enum",summary:"'sm' | 'lg'"}},role:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:pn}},O={parameters:{controls:{disable:!1}},args:{...S},render:a=>e.jsx(C,{...a,ariaLabel:"2024년 6월",header:e.jsx(w,{title:"2024년 6월"}),weekdays:e.jsx(v,{}),children:e.jsx(b,{})})},q={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function BasicExample() {
  return (
    <Calendar
      ariaLabel="2024년 6월"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth />
    </Calendar>
  );
}`,language:"tsx"}}},args:{title:"제목",ariaLabel:"접근성 라벨",size:"sm",role:"application"},render:D(e.jsx(C,{ariaLabel:"2024년 6월",header:e.jsx(w,{title:"2024년 6월"}),weekdays:e.jsx(v,{}),children:e.jsx(b,{})}))},Q={name:"헤더 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function NoHeaderExample() {
  return (
    <Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}>
      <CalendarMonth />
    </Calendar>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsx(C,{noHeader:!0,ariaLabel:"2024년 6월",weekdays:e.jsx(v,{}),children:e.jsx(b,{})}))},Z={name:"날짜만",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';

export function MinimalExample() {
  return (
    <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsx(C,{minimal:!0,compact:!0,borderless:!0,ariaLabel:"2024년 6월 날짜만",children:e.jsx(b,{})}))},X={name:"주간",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarNav from '@uxkm/ui-react/components/CalendarNav.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL } from '@uxkm/ui/data/calendar-demo';

export function WeekExample() {
  return (
    <>
      <Calendar week shadow ariaLabel={\`2024년 \${JUNE_WEEK_LABEL}\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarWeekdays />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
      <Calendar week compact borderless ariaLabel={\`2024년 \${JUNE_WEEK_LABEL} (컴팩트)\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
    </>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsxs(e.Fragment,{children:[e.jsxs(C,{week:!0,shadow:!0,ariaLabel:`2024년 ${T}`,children:[e.jsx(ce,{label:T}),e.jsx(v,{}),e.jsx(b,{week:!0,days:Ce})]}),e.jsxs(C,{week:!0,compact:!0,borderless:!0,ariaLabel:`2024년 ${T} (컴팩트)`,children:[e.jsx(ce,{label:T}),e.jsx(b,{week:!0,days:Ce})]})]}))},ee={name:"휠 (iOS 스타일)",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarWheel from '@uxkm/ui-react/components/CalendarWheel.jsx';
import CalendarWheelColumn from '@uxkm/ui-react/components/CalendarWheelColumn.jsx';

const wheelYears = Array.from({ length: 11 }, (_, i) => \`\${2019 + i}년\`);
const wheelMonths = Array.from({ length: 12 }, (_, i) => \`\${i + 1}월\`);
const wheelDays = Array.from({ length: 31 }, (_, i) => \`\${i + 1}일\`);

export function WheelExample() {
  return (
    <>
      <CalendarWheel
        shadow
        title="날짜 선택"
        cancelLabel="취소"
        confirmLabel="완료"
        ariaLabel="날짜 휠 선택"
      >
        <CalendarWheelColumn
          label="년"
          items={wheelYears}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={wheelMonths}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={wheelDays}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarWheel
        borderless
        footer
        toolbar={false}
        ariaLabel="날짜 휠 선택 (하단 버튼)"
        footerContent={
          <>
            <Button variant="ghost" size="sm" label="취소" />
            <Button variant="filled" color="primary" size="sm" label="확인" />
          </>
        }
      >
        <CalendarWheelColumn
          label="년"
          items={['2024년']}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={['6월']}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={['15일']}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarGroup className="calendar_group-center">
        <CalendarWheel shadow title="년도" ariaLabel="년도 선택">
          <CalendarWheelColumn
            label="년"
            items={['2024년']}
            selected="2024년"
            prevLabel="이전 년"
            nextLabel="다음 년"
          />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="년·월"
          ariaLabel="년·월 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">년·월</span>}
        >
          <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" showSteps={false} />
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="월·일"
          ariaLabel="월·일 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">월·일</span>}
        >
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
          <CalendarWheelColumn label="일" items={['15일']} selected="15일" showSteps={false} />
        </CalendarWheel>
      </CalendarGroup>
    </>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsxs(e.Fragment,{children:[e.jsxs(J,{shadow:!0,title:"날짜 선택",cancelLabel:"취소",confirmLabel:"완료",ariaLabel:"날짜 휠 선택",children:[e.jsx(M,{label:"년",items:un,selected:"2024년",prevLabel:"이전 년",nextLabel:"다음 년"}),e.jsx(M,{label:"월",items:Cn,selected:"6월",prevLabel:"이전 월",nextLabel:"다음 월"}),e.jsx(M,{label:"일",items:hn,selected:"15일",prevLabel:"이전 일",nextLabel:"다음 일"})]}),e.jsxs(J,{borderless:!0,footer:!0,toolbar:!1,ariaLabel:"날짜 휠 선택 (하단 버튼)",footerContent:e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"ghost",size:"sm",label:"취소"}),e.jsx(L,{variant:"filled",color:"primary",size:"sm",label:"확인"})]}),children:[e.jsx(M,{label:"년",items:["2024년"],selected:"2024년",prevLabel:"이전 년",nextLabel:"다음 년"}),e.jsx(M,{label:"월",items:["6월"],selected:"6월",prevLabel:"이전 월",nextLabel:"다음 월"}),e.jsx(M,{label:"일",items:["15일"],selected:"15일",prevLabel:"이전 일",nextLabel:"다음 일"})]}),e.jsxs($,{className:"calendar_group-center",children:[e.jsx(J,{shadow:!0,title:"년도",ariaLabel:"년도 선택",children:e.jsx(M,{label:"년",items:["2024년"],selected:"2024년",prevLabel:"이전 년",nextLabel:"다음 년"})}),e.jsxs(J,{shadow:!0,title:"년·월",ariaLabel:"년·월 선택",toolbar:!0,toolbarContent:e.jsx("span",{className:"calendar_wheel-title",children:"년·월"}),children:[e.jsx(M,{label:"년",items:["2024년"],selected:"2024년",showSteps:!1}),e.jsx(M,{label:"월",items:["6월"],selected:"6월",showSteps:!1})]}),e.jsxs(J,{shadow:!0,title:"월·일",ariaLabel:"월·일 선택",toolbar:!0,toolbarContent:e.jsx("span",{className:"calendar_wheel-title",children:"월·일"}),children:[e.jsx(M,{label:"월",items:["6월"],selected:"6월",showSteps:!1}),e.jsx(M,{label:"일",items:["15일"],selected:"15일",showSteps:!1})]})]})]}))},ae={name:"범위 선택",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function RangeExample() {
  return (
    <Calendar
      ariaLabel="2024년 6월 범위 선택"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth rangeStart={10} rangeEnd={18} />
    </Calendar>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsx(C,{ariaLabel:"2024년 6월 범위 선택",header:e.jsx(w,{title:"2024년 6월"}),weekdays:e.jsx(v,{}),children:e.jsx(b,{rangeStart:10,rangeEnd:18})}))},ne={name:"이벤트 마커",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { EVENT_DAYS } from '@uxkm/ui/data/calendar-demo';

export function EventExample() {
  return (
    <Calendar
      weekends
      ariaLabel="2024년 6월 이벤트"
      header={<CalendarHeader title="2024년 6월" showNav={false} />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth events={EVENT_DAYS} weekends />
    </Calendar>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsx(C,{weekends:!0,ariaLabel:"2024년 6월 이벤트",header:e.jsx(w,{title:"2024년 6월",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{events:ba,weekends:!0})}))},re={name:"스킨",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function SkinExample() {
  return (
    <CalendarGroup>
      <Calendar
        borderless
        ariaLabel="Borderless"
        header={<CalendarHeader title="Borderless" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        ghost
        ariaLabel="Ghost"
        header={<CalendarHeader title="Ghost" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        shadow
        ariaLabel="Shadow"
        header={<CalendarHeader title="Shadow" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
    </CalendarGroup>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsxs($,{children:[e.jsx(C,{borderless:!0,ariaLabel:"Borderless",header:e.jsx(w,{title:"Borderless",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{partial:14,today:8,selected:10})}),e.jsx(C,{ghost:!0,ariaLabel:"Ghost",header:e.jsx(w,{title:"Ghost",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{partial:14,today:8,selected:10})}),e.jsx(C,{shadow:!0,ariaLabel:"Shadow",header:e.jsx(w,{title:"Shadow",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{partial:14,today:8,selected:10})})]}))},le={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function SizeExample() {
  return (
    <CalendarGroup>
      <Calendar
        size="sm"
        ariaLabel="Small"
        header={<CalendarHeader title="Small" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        compact
        ariaLabel="Compact"
        header={<CalendarHeader title="Compact" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        size="lg"
        ariaLabel="Large"
        header={<CalendarHeader title="Large" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
    </CalendarGroup>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsxs($,{children:[e.jsx(C,{size:"sm",ariaLabel:"Small",header:e.jsx(w,{title:"Small",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{partial:14,today:7,selected:9})}),e.jsx(C,{compact:!0,ariaLabel:"Compact",header:e.jsx(w,{title:"Compact",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{partial:14,today:7,selected:9})}),e.jsx(C,{size:"lg",ariaLabel:"Large",header:e.jsx(w,{title:"Large",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{partial:14,today:7,selected:9})})]}))},se={name:"푸터",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarFooter from '@uxkm/ui-react/components/CalendarFooter.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function FooterExample() {
  return (
    <Calendar
      shadow
      ariaLabel="2024년 6월 푸터 포함"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
      footer={<CalendarFooter />}
    >
      <CalendarMonth />
    </Calendar>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsx(C,{shadow:!0,ariaLabel:"2024년 6월 푸터 포함",header:e.jsx(w,{title:"2024년 6월"}),weekdays:e.jsx(v,{}),footer:e.jsx(pe,{}),children:e.jsx(b,{})}))},de={name:"이중 패널",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';

const dualJuneDays = juneDualDays();
const dualJulyDays = julyDualDays();

export function DualExample() {
  return (
    <CalendarGroup>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 6월"
        header={
          <div className="calendar_header">
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="이전 달"
              iconBefore={<Icon name="chevron-left" size="sm" />}
            />
            <span className="calendar_title">2024년 6월</span>
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJuneDays} weekends />
      </Calendar>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 7월"
        header={
          <div className="calendar_header">
            <span className="calendar_title">2024년 7월</span>
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="다음 달"
              iconBefore={<Icon name="chevron-right" size="sm" />}
            />
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJulyDays} weekends />
      </Calendar>
    </CalendarGroup>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsxs($,{children:[e.jsx(C,{compact:!0,shadow:!0,weekends:!0,ariaLabel:"2024년 6월",header:e.jsxs("div",{className:"calendar_header",children:[e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"이전 달",iconBefore:e.jsx(I,{name:"chevron-left",size:"sm"})}),e.jsx("span",{className:"calendar_title",children:"2024년 6월"})]}),weekdays:e.jsx(v,{}),children:e.jsx(b,{days:fn,weekends:!0})}),e.jsx(C,{compact:!0,shadow:!0,weekends:!0,ariaLabel:"2024년 7월",header:e.jsxs("div",{className:"calendar_header",children:[e.jsx("span",{className:"calendar_title",children:"2024년 7월"}),e.jsx(L,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"다음 달",iconBefore:e.jsx(I,{name:"chevron-right",size:"sm"})})]}),weekdays:e.jsx(v,{}),children:e.jsx(b,{days:xn,weekends:!0})})]}))},te={name:"세로 일정",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';

export function AgendaExample() {
  return (
    <>
      <Calendar
        agenda
        shadow
        role="feed"
        ariaLabel="2024년 6월 일정"
        header={<CalendarHeader title="6월 14일 ~ 20일" prevLabel="이전 주" nextLabel="다음 주" />}
      >
        <ol className="calendar_agenda-list">{/* … */}</ol>
      </Calendar>
      <Calendar
        agenda
        borderless
        className="calendar_agenda_compact"
        role="feed"
        ariaLabel="2024년 6월 15일 일정 (컴팩트)"
        header={<CalendarHeader title="6월 15일 (토)" showNav={false} />}
      >
        <ol className="calendar_agenda-list">{/* … */}</ol>
      </Calendar>
    </>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsxs(e.Fragment,{children:[e.jsx(C,{agenda:!0,shadow:!0,role:"feed",ariaLabel:"2024년 6월 일정",header:e.jsx(w,{title:"6월 14일 ~ 20일",prevLabel:"이전 주",nextLabel:"다음 주"}),children:e.jsxs("ol",{className:"calendar_agenda-list",children:[e.jsxs("li",{className:"calendar_agenda-day",children:[e.jsxs("div",{className:"calendar_agenda-date",children:[e.jsx("span",{className:"calendar_agenda-weekday",children:"금"}),e.jsx("span",{className:"calendar_agenda-daynum",children:"14"})]}),e.jsx("div",{className:"calendar_agenda-body",children:e.jsx("ul",{className:"calendar_agenda-events",children:e.jsxs("li",{className:"calendar_agenda-event color_primary",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"14:00"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"디자인 리뷰"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"컴포넌트 가이드 UI 시안 검토"})]})]})})})]}),e.jsxs("li",{className:"calendar_agenda-day is-saturday is-today","aria-current":"date",children:[e.jsxs("div",{className:"calendar_agenda-date",children:[e.jsx("span",{className:"calendar_agenda-weekday",children:"토"}),e.jsx("span",{className:"calendar_agenda-daynum",children:"15"})]}),e.jsx("div",{className:"calendar_agenda-body",children:e.jsxs("ul",{className:"calendar_agenda-events",children:[e.jsxs("li",{className:"calendar_agenda-event color_success",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"09:00"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"팀 스탠드업"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"주간 진행 상황 공유"})]})]}),e.jsxs("li",{className:"calendar_agenda-event color_warning",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"15:30"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"QA 일정 점검"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"캘린더 컴포넌트 데모 확인"}),e.jsx("div",{className:"calendar_agenda-event-meta",children:e.jsx("span",{className:"tag tag_sm color_warning",children:"진행 중"})})]})]})]})})]}),e.jsxs("li",{className:"calendar_agenda-day is-sunday is-empty",children:[e.jsxs("div",{className:"calendar_agenda-date",children:[e.jsx("span",{className:"calendar_agenda-weekday",children:"일"}),e.jsx("span",{className:"calendar_agenda-daynum",children:"16"})]}),e.jsx("div",{className:"calendar_agenda-body",children:e.jsx("p",{className:"calendar_agenda-empty",children:"일정 없음"})})]}),e.jsxs("li",{className:"calendar_agenda-day is-selected","aria-selected":"true",children:[e.jsxs("div",{className:"calendar_agenda-date",children:[e.jsx("span",{className:"calendar_agenda-weekday",children:"월"}),e.jsx("span",{className:"calendar_agenda-daynum",children:"17"})]}),e.jsx("div",{className:"calendar_agenda-body",children:e.jsxs("ul",{className:"calendar_agenda-events",children:[e.jsxs("li",{className:"calendar_agenda-event color_primary",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"10:00"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"기획 회의"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"3분기 로드맵 논의"})]})]}),e.jsxs("li",{className:"calendar_agenda-event color_info",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"13:00"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"점심 미팅"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"파트너사 담당자"})]})]}),e.jsxs("li",{className:"calendar_agenda-event color_danger",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"18:00"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"배포 마감"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"v2.4.0 릴리스"})]})]})]})})]}),e.jsxs("li",{className:"calendar_agenda-day",children:[e.jsxs("div",{className:"calendar_agenda-date",children:[e.jsx("span",{className:"calendar_agenda-weekday",children:"화"}),e.jsx("span",{className:"calendar_agenda-daynum",children:"18"})]}),e.jsx("div",{className:"calendar_agenda-body",children:e.jsx("ul",{className:"calendar_agenda-events",children:e.jsxs("li",{className:"calendar_agenda-event color_success",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"종일"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"워크숍"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"디자인 시스템 심화 과정"})]})]})})})]})]})}),e.jsx(C,{agenda:!0,borderless:!0,className:"calendar_agenda_compact",role:"feed",ariaLabel:"2024년 6월 15일 일정 (컴팩트)",header:e.jsx(w,{title:"6월 15일 (토)",showNav:!1}),children:e.jsx("ol",{className:"calendar_agenda-list",children:e.jsxs("li",{className:"calendar_agenda-day is-saturday is-today","aria-current":"date",children:[e.jsxs("div",{className:"calendar_agenda-date",children:[e.jsx("span",{className:"calendar_agenda-weekday",children:"토"}),e.jsx("span",{className:"calendar_agenda-daynum",children:"15"})]}),e.jsx("div",{className:"calendar_agenda-body",children:e.jsxs("ul",{className:"calendar_agenda-events",children:[e.jsxs("li",{className:"calendar_agenda-event color_primary",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"09:00"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"팀 스탠드업"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"15분 · Zoom"})]})]}),e.jsxs("li",{className:"calendar_agenda-event color_warning",children:[e.jsx("span",{className:"calendar_agenda-event-time",children:"15:30"}),e.jsxs("div",{className:"calendar_agenda-event-main",children:[e.jsx("span",{className:"calendar_agenda-event-title",children:"QA 점검"}),e.jsx("span",{className:"calendar_agenda-event-desc",children:"회의실 B"})]})]})]})})]})})})]}))},oe={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다."},source:{code:`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { disabledPartialDays } from '@uxkm/ui/data/calendar-demo';

const disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });

export function StateExample() {
  return (
    <>
      <Calendar
        readonly
        ariaLabel="읽기 전용 캘린더"
        header={<CalendarHeader title="읽기 전용" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} readonly />
      </Calendar>
      <Calendar
        disabled
        ariaLabel="비활성 캘린더"
        header={<CalendarHeader title="비활성" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={disabledDays} />
      </Calendar>
    </>
  );
}`,language:"tsx"}}},args:{...S},render:D(e.jsxs(e.Fragment,{children:[e.jsx(C,{readonly:!0,ariaLabel:"읽기 전용 캘린더",header:e.jsx(w,{title:"읽기 전용",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{partial:14,today:7,selected:9,readonly:!0})}),e.jsx(C,{disabled:!0,ariaLabel:"비활성 캘린더",header:e.jsx(w,{title:"비활성",showNav:!1}),weekdays:e.jsx(v,{}),children:e.jsx(b,{days:yn})})]}))};var he,fe,xe;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Calendar {...args} ariaLabel="2024년 6월" header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}>
      <CalendarMonth />
    </Calendar>
}`,...(xe=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ye,ge,be;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_header · calendar_weekdays · calendar_grid로 월간 뷰를 구성합니다. is-today · is-selected · is-disabled · is-other-month로 날짜 상태를 표현합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function BasicExample() {
  return (
    <Calendar
      ariaLabel="2024년 6월"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth />
    </Calendar>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    title: '제목',
    ariaLabel: '접근성 라벨',
    size: 'sm',
    role: 'application'
  },
  render: calendarDemo(<Calendar ariaLabel="2024년 6월" header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}>
      <CalendarMonth />
    </Calendar>)
}`,...(be=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var _e,ve,ke;Q.parameters={...Q.parameters,docs:{...(_e=Q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: '헤더 없음',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_no-header로 월·요일 제목 없이 요일 행과 날짜 그리드만 표시합니다. 팝오버·사이드 패널 등 상위 UI에서 제목을 제공할 때 사용합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function NoHeaderExample() {
  return (
    <Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}>
      <CalendarMonth />
    </Calendar>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<Calendar noHeader ariaLabel="2024년 6월" weekdays={<CalendarWeekdays />}>
      <CalendarMonth />
    </Calendar>)
}`,...(ke=(ve=Q.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var we,je,Ne;Z.parameters={...Z.parameters,docs:{...(we=Z.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: '날짜만',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_minimal로 헤더·요일 행 없이 날짜 그리드만 표시합니다. 인라인 날짜 선택·좁은 공간에 적합합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';

export function MinimalExample() {
  return (
    <Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<Calendar minimal compact borderless ariaLabel="2024년 6월 날짜만">
      <CalendarMonth />
    </Calendar>)
}`,...(Ne=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Le,We,Ee;X.parameters={...X.parameters,docs:{...(Le=X.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: '주간',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'calendar_week · calendar_nav으로 한 주만 표시하고 이전·다음 주 버튼으로 이동합니다. calendar_grid-week는 7열 단일 행 그리드입니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarNav from '@uxkm/ui-react/components/CalendarNav.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { JUNE_WEEK_DAYS, JUNE_WEEK_LABEL } from '@uxkm/ui/data/calendar-demo';

export function WeekExample() {
  return (
    <>
      <Calendar week shadow ariaLabel={\\\`2024년 \\\${JUNE_WEEK_LABEL}\\\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarWeekdays />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
      <Calendar week compact borderless ariaLabel={\\\`2024년 \\\${JUNE_WEEK_LABEL} (컴팩트)\\\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<>
      <Calendar week shadow ariaLabel={\`2024년 \${JUNE_WEEK_LABEL}\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarWeekdays />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
      <Calendar week compact borderless ariaLabel={\`2024년 \${JUNE_WEEK_LABEL} (컴팩트)\`}>
        <CalendarNav label={JUNE_WEEK_LABEL} />
        <CalendarMonth week days={JUNE_WEEK_DAYS} />
      </Calendar>
    </>)
}`,...(Ee=(We=X.parameters)==null?void 0:We.docs)==null?void 0:Ee.source}}};var Me,De,Se;ee.parameters={...ee.parameters,docs:{...(Me=ee.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: '휠 (iOS 스타일)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'calendar_wheel · calendar_wheel-step(이전/다음) · calendar_wheel-columns으로 년·월·일 휠 피커를 구성합니다. 필요한 열만 배치하면 열 수에 맞춰 가로 너비가 줄고 가운데 정렬됩니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarWheel from '@uxkm/ui-react/components/CalendarWheel.jsx';
import CalendarWheelColumn from '@uxkm/ui-react/components/CalendarWheelColumn.jsx';

const wheelYears = Array.from({ length: 11 }, (_, i) => \\\`\\\${2019 + i}년\\\`);
const wheelMonths = Array.from({ length: 12 }, (_, i) => \\\`\\\${i + 1}월\\\`);
const wheelDays = Array.from({ length: 31 }, (_, i) => \\\`\\\${i + 1}일\\\`);

export function WheelExample() {
  return (
    <>
      <CalendarWheel
        shadow
        title="날짜 선택"
        cancelLabel="취소"
        confirmLabel="완료"
        ariaLabel="날짜 휠 선택"
      >
        <CalendarWheelColumn
          label="년"
          items={wheelYears}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={wheelMonths}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={wheelDays}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarWheel
        borderless
        footer
        toolbar={false}
        ariaLabel="날짜 휠 선택 (하단 버튼)"
        footerContent={
          <>
            <Button variant="ghost" size="sm" label="취소" />
            <Button variant="filled" color="primary" size="sm" label="확인" />
          </>
        }
      >
        <CalendarWheelColumn
          label="년"
          items={['2024년']}
          selected="2024년"
          prevLabel="이전 년"
          nextLabel="다음 년"
        />
        <CalendarWheelColumn
          label="월"
          items={['6월']}
          selected="6월"
          prevLabel="이전 월"
          nextLabel="다음 월"
        />
        <CalendarWheelColumn
          label="일"
          items={['15일']}
          selected="15일"
          prevLabel="이전 일"
          nextLabel="다음 일"
        />
      </CalendarWheel>
      <CalendarGroup className="calendar_group-center">
        <CalendarWheel shadow title="년도" ariaLabel="년도 선택">
          <CalendarWheelColumn
            label="년"
            items={['2024년']}
            selected="2024년"
            prevLabel="이전 년"
            nextLabel="다음 년"
          />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="년·월"
          ariaLabel="년·월 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">년·월</span>}
        >
          <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" showSteps={false} />
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
        </CalendarWheel>
        <CalendarWheel
          shadow
          title="월·일"
          ariaLabel="월·일 선택"
          toolbar
          toolbarContent={<span className="calendar_wheel-title">월·일</span>}
        >
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
          <CalendarWheelColumn label="일" items={['15일']} selected="15일" showSteps={false} />
        </CalendarWheel>
      </CalendarGroup>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<>
      <CalendarWheel shadow title="날짜 선택" cancelLabel="취소" confirmLabel="완료" ariaLabel="날짜 휠 선택">
        <CalendarWheelColumn label="년" items={wheelYears} selected="2024년" prevLabel="이전 년" nextLabel="다음 년" />
        <CalendarWheelColumn label="월" items={wheelMonths} selected="6월" prevLabel="이전 월" nextLabel="다음 월" />
        <CalendarWheelColumn label="일" items={wheelDays} selected="15일" prevLabel="이전 일" nextLabel="다음 일" />
      </CalendarWheel>
      <CalendarWheel borderless footer toolbar={false} ariaLabel="날짜 휠 선택 (하단 버튼)" footerContent={<>
            <Button variant="ghost" size="sm" label="취소" />
            <Button variant="filled" color="primary" size="sm" label="확인" />
          </>}>
        <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" prevLabel="이전 년" nextLabel="다음 년" />
        <CalendarWheelColumn label="월" items={['6월']} selected="6월" prevLabel="이전 월" nextLabel="다음 월" />
        <CalendarWheelColumn label="일" items={['15일']} selected="15일" prevLabel="이전 일" nextLabel="다음 일" />
      </CalendarWheel>
      <CalendarGroup className="calendar_group-center">
        <CalendarWheel shadow title="년도" ariaLabel="년도 선택">
          <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" prevLabel="이전 년" nextLabel="다음 년" />
        </CalendarWheel>
        <CalendarWheel shadow title="년·월" ariaLabel="년·월 선택" toolbar toolbarContent={<span className="calendar_wheel-title">년·월</span>}>
          <CalendarWheelColumn label="년" items={['2024년']} selected="2024년" showSteps={false} />
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
        </CalendarWheel>
        <CalendarWheel shadow title="월·일" ariaLabel="월·일 선택" toolbar toolbarContent={<span className="calendar_wheel-title">월·일</span>}>
          <CalendarWheelColumn label="월" items={['6월']} selected="6월" showSteps={false} />
          <CalendarWheelColumn label="일" items={['15일']} selected="15일" showSteps={false} />
        </CalendarWheel>
      </CalendarGroup>
    </>)
}`,...(Se=(De=ee.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var He,Ae,Pe;ae.parameters={...ae.parameters,docs:{...(He=ae.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: '범위 선택',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'is-range-start · is-in-range · is-range-end로 기간 선택을 표현합니다. 시작·종료일은 is-selected와 함께 사용합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function RangeExample() {
  return (
    <Calendar
      ariaLabel="2024년 6월 범위 선택"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth rangeStart={10} rangeEnd={18} />
    </Calendar>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<Calendar ariaLabel="2024년 6월 범위 선택" header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />}>
      <CalendarMonth rangeStart={10} rangeEnd={18} />
    </Calendar>)
}`,...(Pe=(Ae=ae.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Be,ze,Ge;ne.parameters={...ne.parameters,docs:{...(Be=ne.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: '이벤트 마커',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'has-event로 일정이 있는 날짜에 점 표시를 추가합니다. 선택·범위 상태와 함께 사용할 수 있습니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { EVENT_DAYS } from '@uxkm/ui/data/calendar-demo';

export function EventExample() {
  return (
    <Calendar
      weekends
      ariaLabel="2024년 6월 이벤트"
      header={<CalendarHeader title="2024년 6월" showNav={false} />}
      weekdays={<CalendarWeekdays />}
    >
      <CalendarMonth events={EVENT_DAYS} weekends />
    </Calendar>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<Calendar weekends ariaLabel="2024년 6월 이벤트" header={<CalendarHeader title="2024년 6월" showNav={false} />} weekdays={<CalendarWeekdays />}>
      <CalendarMonth events={EVENT_DAYS} weekends />
    </Calendar>)
}`,...(Ge=(ze=ne.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Ie,Fe,Re;re.parameters={...re.parameters,docs:{...(Ie=re.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: '스킨',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_borderless · calendar_ghost · calendar_shadow로 외형을 조절합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function SkinExample() {
  return (
    <CalendarGroup>
      <Calendar
        borderless
        ariaLabel="Borderless"
        header={<CalendarHeader title="Borderless" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        ghost
        ariaLabel="Ghost"
        header={<CalendarHeader title="Ghost" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar
        shadow
        ariaLabel="Shadow"
        header={<CalendarHeader title="Shadow" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
    </CalendarGroup>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<CalendarGroup>
      <Calendar borderless ariaLabel="Borderless" header={<CalendarHeader title="Borderless" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar ghost ariaLabel="Ghost" header={<CalendarHeader title="Ghost" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
      <Calendar shadow ariaLabel="Shadow" header={<CalendarHeader title="Shadow" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth partial={14} today={8} selected={10} />
      </Calendar>
    </CalendarGroup>)
}`,...(Re=(Fe=re.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var Je,Ue,Ve;le.parameters={...le.parameters,docs:{...(Je=le.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_sm · calendar_compact · calendar_lg로 셀 크기와 패딩을 조절합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function SizeExample() {
  return (
    <CalendarGroup>
      <Calendar
        size="sm"
        ariaLabel="Small"
        header={<CalendarHeader title="Small" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        compact
        ariaLabel="Compact"
        header={<CalendarHeader title="Compact" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar
        size="lg"
        ariaLabel="Large"
        header={<CalendarHeader title="Large" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
    </CalendarGroup>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<CalendarGroup>
      <Calendar size="sm" ariaLabel="Small" header={<CalendarHeader title="Small" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar compact ariaLabel="Compact" header={<CalendarHeader title="Compact" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
      <Calendar size="lg" ariaLabel="Large" header={<CalendarHeader title="Large" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth partial={14} today={7} selected={9} />
      </Calendar>
    </CalendarGroup>)
}`,...(Ve=(Ue=le.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var Ke,$e,Ye;se.parameters={...se.parameters,docs:{...(Ke=se.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: '푸터',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_footer로 오늘 이동·초기화·확인 등 하단 액션을 배치합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarFooter from '@uxkm/ui-react/components/CalendarFooter.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';

export function FooterExample() {
  return (
    <Calendar
      shadow
      ariaLabel="2024년 6월 푸터 포함"
      header={<CalendarHeader title="2024년 6월" />}
      weekdays={<CalendarWeekdays />}
      footer={<CalendarFooter />}
    >
      <CalendarMonth />
    </Calendar>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<Calendar shadow ariaLabel="2024년 6월 푸터 포함" header={<CalendarHeader title="2024년 6월" />} weekdays={<CalendarWeekdays />} footer={<CalendarFooter />}>
      <CalendarMonth />
    </Calendar>)
}`,...(Ye=($e=se.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source}}};var Te,Oe,qe;de.parameters={...de.parameters,docs:{...(Te=de.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: '이중 패널',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'calendar_group으로 두 달을 나란히 배치합니다. 기간 선택·예약 UI에 사용합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarGroup from '@uxkm/ui-react/components/CalendarGroup.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { julyDualDays, juneDualDays } from '@uxkm/ui/data/calendar-demo';

const dualJuneDays = juneDualDays();
const dualJulyDays = julyDualDays();

export function DualExample() {
  return (
    <CalendarGroup>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 6월"
        header={
          <div className="calendar_header">
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="이전 달"
              iconBefore={<Icon name="chevron-left" size="sm" />}
            />
            <span className="calendar_title">2024년 6월</span>
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJuneDays} weekends />
      </Calendar>
      <Calendar
        compact
        shadow
        weekends
        ariaLabel="2024년 7월"
        header={
          <div className="calendar_header">
            <span className="calendar_title">2024년 7월</span>
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              ariaLabel="다음 달"
              iconBefore={<Icon name="chevron-right" size="sm" />}
            />
          </div>
        }
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={dualJulyDays} weekends />
      </Calendar>
    </CalendarGroup>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<CalendarGroup>
      <Calendar compact shadow weekends ariaLabel="2024년 6월" header={<div className="calendar_header">
            <Button variant="ghost" size="sm" iconOnly ariaLabel="이전 달" iconBefore={<Icon name="chevron-left" size="sm" />} />
            <span className="calendar_title">2024년 6월</span>
          </div>} weekdays={<CalendarWeekdays />}>
        <CalendarMonth days={dualJuneDays} weekends />
      </Calendar>
      <Calendar compact shadow weekends ariaLabel="2024년 7월" header={<div className="calendar_header">
            <span className="calendar_title">2024년 7월</span>
            <Button variant="ghost" size="sm" iconOnly ariaLabel="다음 달" iconBefore={<Icon name="chevron-right" size="sm" />} />
          </div>} weekdays={<CalendarWeekdays />}>
        <CalendarMonth days={dualJulyDays} weekends />
      </Calendar>
    </CalendarGroup>)
}`,...(qe=(Oe=de.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Qe,Ze,Xe;te.parameters={...te.parameters,docs:{...(Qe=te.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: '세로 일정',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'calendar_agenda · calendar_agenda-list · calendar_agenda-day로 날짜별 일정을 세로로 표시합니다. calendar_agenda-event에 시간·제목·설명을 담습니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';

export function AgendaExample() {
  return (
    <>
      <Calendar
        agenda
        shadow
        role="feed"
        ariaLabel="2024년 6월 일정"
        header={<CalendarHeader title="6월 14일 ~ 20일" prevLabel="이전 주" nextLabel="다음 주" />}
      >
        <ol className="calendar_agenda-list">{/* … */}</ol>
      </Calendar>
      <Calendar
        agenda
        borderless
        className="calendar_agenda_compact"
        role="feed"
        ariaLabel="2024년 6월 15일 일정 (컴팩트)"
        header={<CalendarHeader title="6월 15일 (토)" showNav={false} />}
      >
        <ol className="calendar_agenda-list">{/* … */}</ol>
      </Calendar>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<>
      <Calendar agenda shadow role="feed" ariaLabel="2024년 6월 일정" header={<CalendarHeader title="6월 14일 ~ 20일" prevLabel="이전 주" nextLabel="다음 주" />}>
        <ol className="calendar_agenda-list">
          <li className="calendar_agenda-day">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">금</span>
              <span className="calendar_agenda-daynum">14</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_primary">
                  <span className="calendar_agenda-event-time">14:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">디자인 리뷰</span>
                    <span className="calendar_agenda-event-desc">컴포넌트 가이드 UI 시안 검토</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="calendar_agenda-day is-saturday is-today" aria-current="date">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">토</span>
              <span className="calendar_agenda-daynum">15</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_success">
                  <span className="calendar_agenda-event-time">09:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">팀 스탠드업</span>
                    <span className="calendar_agenda-event-desc">주간 진행 상황 공유</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_warning">
                  <span className="calendar_agenda-event-time">15:30</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">QA 일정 점검</span>
                    <span className="calendar_agenda-event-desc">캘린더 컴포넌트 데모 확인</span>
                    <div className="calendar_agenda-event-meta">
                      <span className="tag tag_sm color_warning">진행 중</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="calendar_agenda-day is-sunday is-empty">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">일</span>
              <span className="calendar_agenda-daynum">16</span>
            </div>
            <div className="calendar_agenda-body">
              <p className="calendar_agenda-empty">일정 없음</p>
            </div>
          </li>
          <li className="calendar_agenda-day is-selected" aria-selected="true">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">월</span>
              <span className="calendar_agenda-daynum">17</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_primary">
                  <span className="calendar_agenda-event-time">10:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">기획 회의</span>
                    <span className="calendar_agenda-event-desc">3분기 로드맵 논의</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_info">
                  <span className="calendar_agenda-event-time">13:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">점심 미팅</span>
                    <span className="calendar_agenda-event-desc">파트너사 담당자</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_danger">
                  <span className="calendar_agenda-event-time">18:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">배포 마감</span>
                    <span className="calendar_agenda-event-desc">v2.4.0 릴리스</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="calendar_agenda-day">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">화</span>
              <span className="calendar_agenda-daynum">18</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_success">
                  <span className="calendar_agenda-event-time">종일</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">워크숍</span>
                    <span className="calendar_agenda-event-desc">디자인 시스템 심화 과정</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </Calendar>
      <Calendar agenda borderless className="calendar_agenda_compact" role="feed" ariaLabel="2024년 6월 15일 일정 (컴팩트)" header={<CalendarHeader title="6월 15일 (토)" showNav={false} />}>
        <ol className="calendar_agenda-list">
          <li className="calendar_agenda-day is-saturday is-today" aria-current="date">
            <div className="calendar_agenda-date">
              <span className="calendar_agenda-weekday">토</span>
              <span className="calendar_agenda-daynum">15</span>
            </div>
            <div className="calendar_agenda-body">
              <ul className="calendar_agenda-events">
                <li className="calendar_agenda-event color_primary">
                  <span className="calendar_agenda-event-time">09:00</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">팀 스탠드업</span>
                    <span className="calendar_agenda-event-desc">15분 · Zoom</span>
                  </div>
                </li>
                <li className="calendar_agenda-event color_warning">
                  <span className="calendar_agenda-event-time">15:30</span>
                  <div className="calendar_agenda-event-main">
                    <span className="calendar_agenda-event-title">QA 점검</span>
                    <span className="calendar_agenda-event-desc">회의실 B</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </Calendar>
    </>)
}`,...(Xe=(Ze=te.parameters)==null?void 0:Ze.docs)==null?void 0:Xe.source}}};var ea,aa,na;oe.parameters={...oe.parameters,docs:{...(ea=oe.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: '상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'calendar_readonly는 날짜 선택을 막고, is-disabled는 캘린더 전체를 비활성화합니다.'
      },
      source: {
        code: \`import Calendar from '@uxkm/ui-react/components/Calendar.jsx';
import CalendarHeader from '@uxkm/ui-react/components/CalendarHeader.jsx';
import CalendarMonth from '@uxkm/ui-react/components/CalendarMonth.jsx';
import CalendarWeekdays from '@uxkm/ui-react/components/CalendarWeekdays.jsx';
import { disabledPartialDays } from '@uxkm/ui/data/calendar-demo';

const disabledDays = disabledPartialDays(14, { today: 7, selected: 9 });

export function StateExample() {
  return (
    <>
      <Calendar
        readonly
        ariaLabel="읽기 전용 캘린더"
        header={<CalendarHeader title="읽기 전용" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth partial={14} today={7} selected={9} readonly />
      </Calendar>
      <Calendar
        disabled
        ariaLabel="비활성 캘린더"
        header={<CalendarHeader title="비활성" showNav={false} />}
        weekdays={<CalendarWeekdays />}
      >
        <CalendarMonth days={disabledDays} />
      </Calendar>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: calendarDemo(<>
      <Calendar readonly ariaLabel="읽기 전용 캘린더" header={<CalendarHeader title="읽기 전용" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth partial={14} today={7} selected={9} readonly />
      </Calendar>
      <Calendar disabled ariaLabel="비활성 캘린더" header={<CalendarHeader title="비활성" showNav={false} />} weekdays={<CalendarWeekdays />}>
        <CalendarMonth days={disabledDays} />
      </Calendar>
    </>)
}`,...(na=(aa=oe.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};const Nn=["Playground","Basic","NoHeader","Minimal","Week","Wheel","Range","Event","Skin","Size","Footer","Dual","Agenda","State"];export{te as Agenda,q as Basic,de as Dual,ne as Event,se as Footer,Z as Minimal,Q as NoHeader,O as Playground,ae as Range,le as Size,re as Skin,oe as State,X as Week,ee as Wheel,Nn as __namedExportsOrder,jn as default};

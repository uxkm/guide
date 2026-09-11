import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,g as i}from"./iframe-CajaJMfA.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./FrameworkTabs-duseEU1T.js";function c(e=`auto`,t=0){return e===`none`?`none`:u.includes(e)?e:u[t%u.length]}function l(e=`auto`,t=`auto`,n=!1){let r=[`color`,`pattern`,`monochrome`].includes(e);return{overridePatterns:r,monochrome:r?e===`monochrome`:n,pattern:e===`color`?`none`:r?u.includes(t)?t:`auto`:t}}function ee(e,t){let n=[{tag:`rect`,attrs:{width:12,height:12,fill:`var(--chart-pattern-bg, var(--color-surface, #fff))`}}];if(e===`dots`)return n.push({tag:`circle`,attrs:{cx:6,cy:6,r:2.2,fill:t}}),n;let r={diagonal:`M-3 3 L3 -3 M0 12 L12 0 M9 15 L15 9`,"reverse-diagonal":`M-3 9 L3 15 M0 0 L12 12 M9 -3 L15 3`,crosshatch:`M0 0 L12 12 M0 12 L12 0`,horizontal:`M0 3 H12 M0 9 H12`,vertical:`M3 0 V12 M9 0 V12`};return n.push({tag:`path`,attrs:{d:r[e]||r.diagonal,fill:`none`,stroke:t,strokeWidth:`var(--chart-pattern-stroke-width, 1.5)`}}),n}var u;function d(){return(d=e((()=>{u=[`diagonal`,`reverse-diagonal`,`crosshatch`,`dots`,`horizontal`,`vertical`]})))()}function f({data:e=[],type:t=`bar`,title:n=`차트`,description:r=``,unit:i=``,height:a=320,color:o=`var(--chart-color, #2563eb)`,pattern:s=`auto`,monochrome:u=!1,displayStyle:d=`auto`,showLegend:f=!0,showGrid:_=!0,emptyMessage:v=`표시할 데이터가 없습니다.`,className:te=``,...ne}){let re=(0,p.useId)(),y=(0,p.useId)(),b=(0,p.useId)(),ie=(0,p.useId)(),[x,ae]=(0,p.useState)(null),[S,C]=(0,p.useState)(null),[w,T]=(0,p.useState)(!1),E=(0,p.useRef)(null),D=(0,p.useRef)(null),O=(0,p.useRef)(null),oe=(0,p.useRef)(null),[k,A]=(0,p.useState)({left:0,top:0});(0,p.useEffect)(()=>()=>clearTimeout(E.current),[]),(0,p.useEffect)(()=>{clearTimeout(E.current),ae(null),C(null),T(!1)},[e,t]);let j=()=>clearTimeout(E.current),M=()=>{j(),E.current=setTimeout(()=>ae(null),150)},N=[`bar`,`line`,`area`,`donut`,`arc`].includes(t)?t:`bar`,P=Array.isArray(e)?e.filter(e=>e&&typeof e.label==`string`&&Number.isFinite(e.value)):[],F=N===`donut`,I=N===`arc`,L=F||I,se=L||N===`bar`,ce=l(d,s,u),R=(e,t)=>se?c(ce.overridePatterns?ce.pattern:e.pattern??s,t):`none`,z=(e,t)=>ce.monochrome?`var(--chart-pattern-ink, var(--color-text, #182131))`:e.color||(L?h[t%h.length]:o),B=(e,t)=>R(e,t)===`none`?z(e,t):`url(#${ie}-${t})`,V=L&&P.some(e=>e.value<0),H=Math.max(1,...P.map(e=>Math.abs(e.value))),U=P.map(e=>e.value/H),W=U.reduce((e,t)=>e+t,0),G=!P.length||L&&W===0,K=w?null:x??S,q=K?.index??null,J=!G&&!V&&q!==null?P[q]:null,le=e=>{let t=O.current,n=t?.getScreenCTM();if(!n)return{x:0,y:0};let r=t.createSVGPoint();r.x=e.clientX,r.y=e.clientY;let i=r.matrixTransform(n.inverse());return{x:i.x,y:i.y}},ue=(e,t,n)=>({className:`chart_point`,tabIndex:0,role:`img`,"aria-label":`${e.label}: ${g(e.value)}${i}`,"aria-describedby":J&&q===t?b:void 0,onMouseEnter:e=>{j(),ae({index:t,anchor:le(e)}),T(!1)},onMouseLeave:M,onFocus:()=>{j(),ae(null),C({index:t,anchor:n}),T(!1)},onBlur:()=>C(null)});(0,p.useLayoutEffect)(()=>{if(!J||!K)return;let e=D.current,t=O.current,n=oe.current;if(!e||!t||!n)return;let r=()=>{let r=t.getScreenCTM();if(!r)return;let i=t.createSVGPoint();i.x=K.anchor.x,i.y=K.anchor.y;let a=i.matrixTransform(r),o=e.getBoundingClientRect(),s=n.getBoundingClientRect(),c=a.x-o.left,l=a.y-o.top,ee=l-s.height-12,u=(e,t)=>Math.max(8,Math.min(e,t-8));A({left:u(c-s.width/2,o.width-s.width),top:u(ee>=8?ee:l+12,o.height-s.height)})};r();let i=new ResizeObserver(r);return i.observe(e),i.observe(t),i.observe(n),()=>i.disconnect()},[K,J,a]),(0,p.useEffect)(()=>{if(!J)return;let e=e=>{e.key===`Escape`&&T(!0)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[J]);let Y=Math.min(0,...U),X=Math.max(0,...U)||+(Y===0),Z=e=>24+(X-e)/(X-Y)*220,Q=520/Math.max(P.length,1),$=e=>64+Q*(e+.5),de=U.map((e,t)=>`${t?`L`:`M`} ${$(t)} ${Z(e)}`).join(` `),fe=0;return(0,m.jsxs)(`figure`,{...ne,className:`chart chart_${N} ${te}`,"data-component":`Chart`,"data-monochrome":ce.monochrome,children:[(0,m.jsxs)(`figcaption`,{children:[(0,m.jsx)(`strong`,{id:re,className:`chart_title`,children:n}),r&&(0,m.jsx)(`p`,{className:`chart_description`,children:r})]}),V||G?(0,m.jsx)(`div`,{className:`chart_empty`,role:`status`,children:V?`${I?`아크`:`도넛`} 차트에는 0 이상의 값이 필요합니다.`:v}):(0,m.jsxs)(`div`,{className:`chart_visual`,ref:D,children:[(0,m.jsxs)(`svg`,{ref:O,className:`chart_plot`,viewBox:I?`160 0 300 180`:L?`160 0 300 300`:`0 0 620 300`,preserveAspectRatio:L?`xMidYMid meet`:`none`,style:{height:a},role:`group`,"aria-labelledby":re,"aria-describedby":y,children:[(0,m.jsxs)(`desc`,{id:y,children:[r?`${r}. `:``,`Tab 키로 항목을 이동하면 값이 표시됩니다. Escape 키로 툴팁을 닫습니다. 전체 값은 아래 데이터 표에서 확인할 수 있습니다.`]}),(0,m.jsx)(`defs`,{children:P.map((e,t)=>R(e,t)!==`none`&&(0,m.jsx)(`pattern`,{id:`${ie}-${t}`,patternUnits:`userSpaceOnUse`,width:`12`,height:`12`,children:ee(R(e,t),z(e,t)).map(({tag:e,attrs:t},n)=>(0,m.jsx)(e,{...t},n))},t))}),L?P.map((e,t)=>{if(e.value===0)return null;let n=U[t]/W,r=fe;fe+=n*100;let i=(I?-Math.PI:-Math.PI/2)+(r/100+n/2)*(I?Math.PI:Math.PI*2),a=I?120:100,o=Math.min(.6,n*10);return(0,m.jsxs)(`g`,{...ue(e,t,{x:310+a*Math.cos(i),y:150+a*Math.sin(i)}),children:[(0,m.jsx)(`path`,{...I?{d:`M 190 150 A 120 120 0 0 1 430 150`}:{d:`M310 50 A100 100 0 1 1 310 250 A100 100 0 1 1 310 50`},fill:`none`,stroke:B(e,t),"data-pattern":R(e,t),strokeWidth:`44`,pathLength:`100`,strokeDasharray:`${n*100-o} ${100-n*100+o}`,strokeDashoffset:-r-o/2}),(0,m.jsx)(`circle`,{className:`chart_focus-indicator`,"aria-hidden":`true`,cx:310+a*Math.cos(i),cy:150+a*Math.sin(i),r:`7`})]},t)}):(0,m.jsxs)(m.Fragment,{children:[Array.from({length:5},(e,t)=>{let n=Y+(X-Y)*t/4;return(0,m.jsxs)(`g`,{children:[_&&(0,m.jsx)(`line`,{className:`chart_grid`,x1:`64`,x2:`584`,y1:Z(n),y2:Z(n)}),(0,m.jsx)(`text`,{className:`chart_tick`,x:`56`,y:Z(n),textAnchor:`end`,dominantBaseline:`middle`,children:g(n*H)})]},t)}),(0,m.jsx)(`line`,{className:`chart_axis`,x1:`64`,x2:`584`,y1:Z(0),y2:Z(0)}),N===`area`&&(0,m.jsx)(`path`,{d:`${de} L ${$(P.length-1)} ${Z(0)} L ${$(0)} ${Z(0)} Z`,fill:o,fillOpacity:`0.16`}),N!==`bar`&&(0,m.jsx)(`path`,{d:de,fill:`none`,stroke:o,strokeWidth:`3`,strokeLinejoin:`round`}),P.map((e,t)=>(0,m.jsxs)(`g`,{...ue(e,t,{x:$(t),y:Z(U[t])}),children:[N===`bar`?(0,m.jsx)(`rect`,{x:$(t)-Q*.3,y:Math.min(Z(U[t]),Z(0)),width:Q*.6,height:Math.abs(Z(U[t])-Z(0)),fill:B(e,t),"data-pattern":R(e,t),stroke:z(e,t),strokeWidth:`1`}):(0,m.jsx)(`circle`,{cx:$(t),cy:Z(U[t]),r:`4`,fill:o}),(0,m.jsx)(`rect`,{x:$(t)-Q/2,y:`20`,width:Q,height:`260`,fill:`transparent`}),(0,m.jsx)(`text`,{className:`chart_tick`,x:$(t),y:`272`,textAnchor:`middle`,children:e.label.length>8?`${e.label.slice(0,7)}…`:e.label})]},t)),i&&(0,m.jsxs)(`text`,{className:`chart_tick`,x:`64`,y:`12`,children:[`단위: `,i]})]})]}),J&&(0,m.jsxs)(`div`,{id:b,role:`tooltip`,className:`chart_tooltip`,ref:oe,style:k,onMouseEnter:()=>{j(),K&&ae(K)},onMouseLeave:M,children:[(0,m.jsx)(`strong`,{children:J.label}),(0,m.jsxs)(`span`,{children:[g(J.value),i]})]})]}),se&&f&&!G&&!V&&(0,m.jsx)(`ul`,{className:`chart_legend`,children:P.map((e,t)=>(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`svg`,{className:`chart_swatch`,"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 24 24`,children:(0,m.jsx)(`rect`,{x:`1`,y:`1`,width:`22`,height:`22`,fill:B(e,t),stroke:z(e,t),"data-pattern":R(e,t)})}),e.label,` · `,g(e.value),i]},t))}),P.length>0&&(0,m.jsxs)(`details`,{className:`chart_data`,children:[(0,m.jsx)(`summary`,{tabIndex:0,"aria-label":`${n} 데이터 표 보기`,children:`데이터 표 보기`}),(0,m.jsx)(`div`,{className:`chart_table-wrap table_wrap`,children:(0,m.jsxs)(`table`,{className:`table`,children:[(0,m.jsxs)(`caption`,{children:[n,` 데이터`]}),(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{scope:`col`,children:`항목`}),(0,m.jsxs)(`th`,{scope:`col`,children:[`값`,i&&` (${i})`]})]})}),(0,m.jsx)(`tbody`,{children:P.map((e,t)=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{scope:`row`,children:e.label}),(0,m.jsx)(`td`,{children:g(e.value)})]},t))})]})})]})]})}var p,m,h,g;function _(){return(_=e((()=>{p=n(),d(),m=a(),h=[`var(--chart-series-1, #2563eb)`,`var(--chart-series-2, #0d9488)`,`var(--chart-series-3, #9333ea)`,`var(--chart-series-4, #c2410c)`,`var(--chart-series-5, #be185d)`,`var(--chart-series-6, #4f46e5)`],g=e=>new Intl.NumberFormat(`ko-KR`,{maximumFractionDigits:2}).format(e),f.__docgenInfo={description:`단일 계열 SVG 차트. 원본 수치는 키보드로 열 수 있는 데이터 표로 제공합니다.`,methods:[],displayName:`Chart`,props:{data:{defaultValue:{value:`[]`,computed:!1},required:!1},type:{defaultValue:{value:`"bar"`,computed:!1},required:!1},title:{defaultValue:{value:`"차트"`,computed:!1},required:!1},description:{defaultValue:{value:`""`,computed:!1},required:!1},unit:{defaultValue:{value:`""`,computed:!1},required:!1},height:{defaultValue:{value:`320`,computed:!1},required:!1},color:{defaultValue:{value:`"var(--chart-color, #2563eb)"`,computed:!1},required:!1},pattern:{defaultValue:{value:`"auto"`,computed:!1},required:!1},monochrome:{defaultValue:{value:`false`,computed:!1},required:!1},displayStyle:{defaultValue:{value:`"auto"`,computed:!1},required:!1},showLegend:{defaultValue:{value:`true`,computed:!1},required:!1},showGrid:{defaultValue:{value:`true`,computed:!1},required:!1},emptyMessage:{defaultValue:{value:`"표시할 데이터가 없습니다."`,computed:!1},required:!1},className:{defaultValue:{value:`""`,computed:!1},required:!1}}}})))()}function v(e,t={}){y.get(e)?.();let{data:n=[],title:r=`차트`,description:i=``,unit:a=``,height:o=320,color:s=`var(--chart-color, #2563eb)`,pattern:u=`auto`,monochrome:d=!1,displayStyle:f=`auto`,showLegend:p=!0,showGrid:m=!0,emptyMessage:h=`표시할 데이터가 없습니다.`}=t,g=[`bar`,`line`,`area`,`donut`,`arc`].includes(t.type)?t.type:`bar`,_=g===`donut`||g===`arc`,v=g===`arc`,b=Array.isArray(n)?n.filter(e=>e&&typeof e.label==`string`&&Number.isFinite(e.value)):[],ie=Math.max(1,...b.map(e=>Math.abs(e.value))),x=b.map(e=>e.value/ie),ae=x.reduce((e,t)=>e+t,0),S=_&&x.some(e=>e<0),C=!b.length||_&&ae===0,w=`chart-dom-${++re}`,T=_||g===`bar`,E=l(f,u,d),D=(e,t)=>T?c(E.overridePatterns?E.pattern:e.pattern??u,t):`none`,O=(e,t)=>E.monochrome?`var(--chart-pattern-ink, var(--color-text, #182131))`:e.color||(_?te[t%te.length]:s),oe=(e,t)=>D(e,t)===`none`?O(e,t):`url(#${w}-pattern-${t})`,k=e.ownerDocument,A=(e,t={},n,r=!1)=>{let i=r?k.createElementNS(`http://www.w3.org/2000/svg`,e):k.createElement(e);return Object.entries(t).forEach(([e,t])=>i.setAttribute(e,String(t))),n!==void 0&&(i.textContent=n),i},j=(e,t,n)=>A(e,t,n,!0),M=A(`figure`,{class:`chart chart_${g}`,"data-component":`Chart`,"data-monochrome":E.monochrome}),N=A(`figcaption`);N.append(A(`strong`,{class:`chart_title`,id:`${w}-title`},r)),i&&N.append(A(`p`,{class:`chart_description`},i)),M.append(N),e.replaceChildren(M);let P,F,I=()=>{};if(C||S)M.append(A(`div`,{class:`chart_empty`,role:`status`},S?`${v?`아크`:`도넛`} 차트에는 0 이상의 값이 필요합니다.`:h));else{let e=A(`div`,{class:`chart_visual`}),t=j(`svg`,{class:`chart_plot`,viewBox:v?`160 0 300 180`:_?`160 0 300 300`:`0 0 620 300`,preserveAspectRatio:_?`xMidYMid meet`:`none`,role:`group`,"aria-labelledby":`${w}-title`,"aria-describedby":`${w}-description`});t.style.height=typeof o==`number`?`${o}px`:o,t.append(j(`desc`,{id:`${w}-description`},`${i?i+`. `:``}Tab 키로 항목을 이동하면 값이 표시됩니다. Escape 키로 툴팁을 닫습니다. 전체 값은 아래 데이터 표에서 확인할 수 있습니다.`));let n=j(`defs`);b.forEach((e,t)=>{if(D(e,t)===`none`)return;let r=j(`pattern`,{id:`${w}-pattern-${t}`,patternUnits:`userSpaceOnUse`,width:12,height:12});ee(D(e,t),O(e,t)).forEach(({tag:e,attrs:t})=>{r.append(j(e,Object.fromEntries(Object.entries(t).map(([e,t])=>[e===`strokeWidth`?`stroke-width`:e,t]))))}),n.append(r)}),t.append(n),e.append(t),M.append(e);let r=A(`div`,{class:`chart_tooltip`,role:`tooltip`,id:`${w}-tooltip`}),c=null,l=null,u=null,d=!1,f=()=>{if(!u||!r.isConnected)return;let n=t.getScreenCTM();if(!n)return;let i=t.createSVGPoint();Object.assign(i,u.anchor);let a=i.matrixTransform(n),o=e.getBoundingClientRect(),s=r.getBoundingClientRect(),c=a.y-o.top-s.height-12,l=(e,t)=>Math.max(8,Math.min(e,t-8));r.style.left=`${l(a.x-o.left-s.width/2,o.width-s.width)}px`,r.style.top=`${l(c>=8?c:a.y-o.top+12,o.height-s.height)}px`},p=()=>{if(u?.element.removeAttribute(`aria-describedby`),u=d?null:c||l,!u){r.remove();return}r.replaceChildren(A(`strong`,{},u.item.label),A(`span`,{},`${ne(u.item.value)}${a}`)),u.element.setAttribute(`aria-describedby`,r.id),e.append(r),f()},h=()=>{clearTimeout(F),F=setTimeout(()=>{c=null,p()},150)};r.onmouseenter=()=>{clearTimeout(F),u&&(c=u)},r.onmouseleave=h,I=e=>{e.key===`Escape`&&(d=!0,p())},k.addEventListener(`keydown`,I),P=new ResizeObserver(f),P.observe(e),P.observe(t),P.observe(r);let te=(e,n,r)=>{e.setAttribute(`class`,`chart_point`),e.setAttribute(`tabindex`,`0`),e.setAttribute(`role`,`img`),e.setAttribute(`aria-label`,`${n.label}: ${ne(n.value)}${a}`);let i=r=>{let i=t.getScreenCTM();if(!i)return;let a=t.createSVGPoint();a.x=r.clientX,a.y=r.clientY;let o=a.matrixTransform(i.inverse());c={element:e,item:n,anchor:{x:o.x,y:o.y}},p()};e.onmouseenter=e=>{clearTimeout(F),d=!1,i(e)},e.onmouseleave=h,e.onfocus=()=>{clearTimeout(F),c=null,l={element:e,item:n,anchor:r},d=!1,p()},e.onblur=()=>{l=null,p()}},re=Math.min(0,...x),y=Math.max(0,...x)||+(re===0),S=e=>24+(y-e)/(y-re)*220,C=520/b.length,T=e=>64+C*(e+.5);if(_){let e=0;b.forEach((n,r)=>{if(!n.value)return;let i=x[r]/ae,a=(v?-Math.PI:-Math.PI/2)+(e/100+i/2)*(v?Math.PI:2*Math.PI),o=v?120:100,s=Math.min(.6,i*10),c=j(`g`);c.append(j(`path`,{...v?{d:`M 190 150 A 120 120 0 0 1 430 150`}:{d:`M310 50 A100 100 0 1 1 310 250 A100 100 0 1 1 310 50`},fill:`none`,stroke:oe(n,r),"data-pattern":D(n,r),"stroke-width":44,pathLength:100,"stroke-dasharray":`${i*100-s} ${100-i*100+s}`,"stroke-dashoffset":-e-s/2})),c.append(j(`circle`,{class:`chart_focus-indicator`,"aria-hidden":`true`,cx:310+o*Math.cos(a),cy:150+o*Math.sin(a),r:7})),e+=i*100,te(c,n,{x:310+o*Math.cos(a),y:150+o*Math.sin(a)}),t.append(c)})}else{for(let e=0;e<5;e++){let n=re+(y-re)*e/4;m&&t.append(j(`line`,{class:`chart_grid`,x1:64,x2:584,y1:S(n),y2:S(n)})),t.append(j(`text`,{class:`chart_tick`,x:56,y:S(n),"text-anchor":`end`,"dominant-baseline":`middle`},ne(n*ie)))}t.append(j(`line`,{class:`chart_axis`,x1:64,x2:584,y1:S(0),y2:S(0)}));let e=x.map((e,t)=>`${t?`L`:`M`} ${T(t)} ${S(e)}`).join(` `);g===`area`&&t.append(j(`path`,{d:`${e} L ${T(b.length-1)} ${S(0)} L ${T(0)} ${S(0)} Z`,fill:s,"fill-opacity":.16})),g!==`bar`&&t.append(j(`path`,{d:e,fill:`none`,stroke:s,"stroke-width":3,"stroke-linejoin":`round`})),b.forEach((e,n)=>{let r=j(`g`);r.append(g===`bar`?j(`rect`,{x:T(n)-C*.3,y:Math.min(S(x[n]),S(0)),width:C*.6,height:Math.abs(S(x[n])-S(0)),fill:oe(e,n),"data-pattern":D(e,n),stroke:O(e,n),"stroke-width":1}):j(`circle`,{cx:T(n),cy:S(x[n]),r:4,fill:s})),r.append(j(`rect`,{x:T(n)-C/2,y:20,width:C,height:260,fill:`transparent`})),r.append(j(`text`,{class:`chart_tick`,x:T(n),y:272,"text-anchor":`middle`},e.label.length>8?`${e.label.slice(0,7)}…`:e.label)),te(r,e,{x:T(n),y:S(x[n])}),t.append(r)}),a&&t.append(j(`text`,{class:`chart_tick`,x:64,y:12},`단위: ${a}`))}}if(T&&p&&!C&&!S){let e=A(`ul`,{class:`chart_legend`});b.forEach((t,n)=>{let r=A(`li`),i=j(`svg`,{class:`chart_swatch`,"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 24 24`});i.append(j(`rect`,{x:1,y:1,width:22,height:22,fill:oe(t,n),stroke:O(t,n),"data-pattern":D(t,n)})),r.append(i,k.createTextNode(`${t.label} · ${ne(t.value)}${a}`)),e.append(r)}),M.append(e)}if(b.length){let e=A(`details`,{class:`chart_data`});e.append(A(`summary`,{tabindex:0,"aria-label":`${r} 데이터 표 보기`},`데이터 표 보기`));let t=A(`div`,{class:`chart_table-wrap table_wrap`}),n=A(`table`,{class:`table`});n.append(A(`caption`,{},`${r} 데이터`));let i=A(`thead`),o=A(`tr`);o.append(A(`th`,{scope:`col`},`항목`),A(`th`,{scope:`col`},`값${a?` (${a})`:``}`)),i.append(o);let s=A(`tbody`);b.forEach(e=>{let t=A(`tr`);t.append(A(`th`,{scope:`row`},e.label),A(`td`,{},ne(e.value))),s.append(t)}),n.append(i,s),t.append(n),e.append(t),M.append(e)}let L=()=>{clearTimeout(F),P?.disconnect(),k.removeEventListener(`keydown`,I),M.remove(),y.delete(e)};return y.set(e,L),L}var te,ne,re,y;function b(){return(b=e((()=>{d(),te=[`var(--chart-series-1, #2563eb)`,`var(--chart-series-2, #0d9488)`,`var(--chart-series-3, #9333ea)`,`var(--chart-series-4, #c2410c)`,`var(--chart-series-5, #be185d)`,`var(--chart-series-6, #4f46e5)`],ne=e=>new Intl.NumberFormat(`ko-KR`,{maximumFractionDigits:2}).format(e),re=0,y=new WeakMap})))()}function ie(e,t=`Example`){let n=JSON.stringify(e,null,2),r=n.replace(/&/g,`&amp;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),i=Object.entries(e).map(([e,t])=>`  ${e}=${JSON.stringify(t)}`).join(`,
`);return[{id:`html`,label:`HTML`,fileName:`Chart 예제 · ${t}.html`,code:`<!-- data-chart-options의 JSON으로 차트 유형과 데이터를 지정합니다. -->\n<div\n  data-chart-options='${r}'\n  style="width: 100%; min-width: 0"\n></div>\n\n<!-- 페이지에서 한 번 로드: main.js에 initCharts()가 등록되어 있습니다. -->\n<script type="module" src="/src/scripts/main.js"><\/script>`},{id:`gulp`,label:`Gulp`,fileName:`Chart 예제 · ${t}.njk`,code:`{% from "components/data-display/Chart/chart.njk" import chart %}\n\n{{ chart(\n${i}\n) }}\n\n{# 레이아웃에서 한 번 로드: main.js에 initCharts()가 등록되어 있습니다. #}\n<script type="module" src="/scripts/main.js"><\/script>`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/chart · ${t}.vue`,code:`<script setup>\nimport Chart from '@uxkm/vue/chart';\n\nconst options = ${n};\n<\/script>\n\n<template>\n  <Chart v-bind="options" />\n</template>`},{id:`react`,label:`React`,fileName:`@uxkm/react/chart · ${t}.jsx`,code:`import Chart from '@uxkm/react/chart';\n\nconst options = ${n};\n\nexport default function Example() {\n  return <Chart {...options} />;\n}`}]}function x(){return(x=e((()=>{})))()}function ae({options:e}){let t=(0,C.useRef)(null);return(0,C.useEffect)(()=>t.current?v(t.current,e):void 0,[e]),(0,w.jsx)(`div`,{ref:t})}function S({runtime:e=!1,showCode:t=!0}){let n=(0,C.useId)(),[r,i]=(0,C.useState)(`donut`),[a,o]=(0,C.useState)(`pattern`),[c,l]=(0,C.useState)(`auto`),[ee,d]=(0,C.useState)(E),f={type:r,displayStyle:a,pattern:c,data:ee,title:`유입 경로`,unit:`명`,showLegend:!0};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`chart-style-playground`,children:[(0,w.jsxs)(`fieldset`,{className:`chart-style-playground_controls`,children:[(0,w.jsx)(`legend`,{children:`차트 스타일 설정`}),(0,w.jsxs)(`label`,{children:[`차트 유형`,(0,w.jsxs)(`select`,{value:r,onChange:e=>i(e.target.value),children:[(0,w.jsx)(`option`,{value:`bar`,children:`막대`}),(0,w.jsx)(`option`,{value:`donut`,children:`도넛`}),(0,w.jsx)(`option`,{value:`arc`,children:`아크`})]})]}),(0,w.jsxs)(`fieldset`,{className:`chart-style-playground_modes`,children:[(0,w.jsx)(`legend`,{children:`표시 스타일`}),[[`color`,`색상 채움`],[`pattern`,`컬러 패턴`],[`monochrome`,`흑백 패턴`]].map(([e,t])=>(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`input`,{type:`radio`,name:`${n}-style`,value:e,checked:a===e,onChange:()=>o(e)}),t]},e))]}),(0,w.jsxs)(`label`,{children:[`패턴 종류`,(0,w.jsxs)(`select`,{value:c,disabled:a===`color`,onChange:e=>l(e.target.value),children:[(0,w.jsx)(`option`,{value:`auto`,children:`항목마다 다르게`}),u.map((e,t)=>(0,w.jsx)(`option`,{value:e,children:D[t]},e))]})]}),(0,w.jsxs)(`fieldset`,{className:`chart-style-playground_colors`,disabled:a===`monochrome`,children:[(0,w.jsx)(`legend`,{children:`항목별 색상`}),ee.map((e,t)=>(0,w.jsxs)(`label`,{children:[e.label,(0,w.jsx)(`input`,{type:`color`,value:e.color,onChange:e=>d(n=>n.map((n,r)=>r===t?{...n,color:e.target.value}:n))})]},e.label))]})]}),t?(0,w.jsx)(`p`,{children:`선택한 스타일과 색상은 미리보기와 아래 코드에 바로 반영됩니다. 항목 구분에는 라벨과 범례도 함께 사용하세요.`}):null,e?(0,w.jsx)(ae,{options:f}):(0,w.jsx)(T,{...f})]}),t?(0,w.jsx)(s,{examples:ie(f,`StylePlayground`)}):null]})}var C,w,T,E,D;function O(){return(O=e((()=>{C=n(),_(),b(),d(),o(),w=a(),T=f,E=[{label:`검색`,value:480,color:`#2563eb`,pattern:`diagonal`},{label:`직접 방문`,value:260,color:`#0d9488`,pattern:`dots`},{label:`소셜`,value:180,color:`#9333ea`,pattern:`crosshatch`},{label:`기타`,value:80,color:`#c2410c`,pattern:`horizontal`}],D=[`사선`,`역사선`,`교차 빗금`,`점`,`가로선`,`세로선`],S.__docgenInfo={description:`선택한 값은 실제 미리보기와 네 프레임워크의 복사 가능한 코드에 동시에 반영됩니다.`,methods:[],displayName:`ChartStylePlayground`,props:{runtime:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},showCode:{required:!1,tsType:{name:`boolean`},description:`Docs에서는 Canvas 밖 형제 노드로 코드를 두고, 스토리 미리보기에서는 숨깁니다.`,defaultValue:{value:`true`,computed:!1}}}}})))()}var oe=t({Arc:()=>K,Area:()=>W,Bar:()=>H,CustomEmpty:()=>X,DarkTheme:()=>pe,Donut:()=>G,Empty:()=>Y,FocusedTooltip:()=>fe,GulpVueRuntime:()=>me,InvalidDonut:()=>$,Line:()=>U,Mobile:()=>de,MonochromeArc:()=>le,MonochromeBar:()=>q,MonochromeDonut:()=>J,NegativeValues:()=>ue,Playground:()=>z,SharedStylePlayground:()=>V,SinglePoint:()=>Q,StylePlayground:()=>B,ZeroValues:()=>Z,__namedExportsOrder:()=>he,default:()=>R});async function k(e){let t=L(e),n=t.queryAllByRole(`img`);if(!n.length)return;let r=e.ownerDocument.documentElement,i=r.dataset.theme,a=t=>{let n=getComputedStyle(t),r=n.fill===`none`?n.stroke:n.fill,i=r.match(/#([^)'"\s]+)/)?.[1];if(!i)return r;let a=e.ownerDocument.getElementById(i),o=getComputedStyle(a.querySelector(`path, circle`));return o.fill===`none`?o.stroke:o.fill},o=e=>{let t=e.match(/[\d.]+/g).slice(0,3).map(Number).map(e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4});return t[0]*.2126+t[1]*.7152+t[2]*.0722};try{for(let t of[`light`,`dark`]){r.dataset.theme=t;let i=o(getComputedStyle(e.querySelector(`.chart_visual`)).backgroundColor);for(let e of n){let t=e.firstElementChild,n=o(a(t));await P((Math.max(i,n)+.05)/(Math.min(i,n)+.05)).toBeGreaterThanOrEqual(3)}}}finally{i?r.dataset.theme=i:delete r.dataset.theme}let s=e.querySelector(`.chart_donut, .chart_arc`);if(e.querySelector(`[data-monochrome="true"]`)){let e=n.map(e=>e.firstElementChild);await P(new Set(e.map(a)).size).toBe(1),await P(new Set(e.map(e=>e.getAttribute(`data-pattern`))).size).toBe(Math.min(6,e.length))}let c=[...e.ownerDocument.querySelectorAll(`pattern[id]`)].map(e=>e.id);if(await P(new Set(c).size).toBe(c.length),s&&s.getAttribute(`data-monochrome`)!==`true`){let t=e.ownerDocument.documentElement.style,n=t.getPropertyValue(`--chart-series-1`),r=t.getPropertyPriority(`--chart-series-1`);try{t.setProperty(`--chart-series-1`,`#e11d48`);let e=s.querySelector(`.chart_point > circle, .chart_point > path`),n=s.querySelector(`.chart_swatch rect`);await P(a(e)).toBe(`rgb(225, 29, 72)`),await P(a(n)).toBe(`rgb(225, 29, 72)`)}finally{n?t.setProperty(`--chart-series-1`,n,r):t.removeProperty(`--chart-series-1`)}}for(let[t,r]of n.entries()){let n=r.firstElementChild,i=n.getAttribute(`data-pattern`);if(i&&i!==`none`){let r=n.getAttribute(`fill`)===`none`?n.getAttribute(`stroke`):n.getAttribute(`fill`),a=e.querySelectorAll(`.chart_swatch rect`)[t];a&&(await P(a).toHaveAttribute(`fill`,r),await P(a).toHaveAttribute(`data-pattern`,i));let o=r.match(/#([^)]*)/)[1];await P(e.ownerDocument.getElementById(o)).not.toBeNull()}}let l=n[0];await F.hover(l);let ee=t.getByRole(`tooltip`).getBoundingClientRect();l.dispatchEvent(new MouseEvent(`mousemove`,{bubbles:!0,clientX:100,clientY:100})),await P(t.getByRole(`tooltip`).getBoundingClientRect().left).toBe(ee.left),await P(t.getByRole(`tooltip`).getBoundingClientRect().top).toBe(ee.top),await P(t.getByRole(`tooltip`)).toBeVisible(),await P(l).toHaveAttribute(`aria-describedby`,t.getByRole(`tooltip`).id),await F.unhover(l),await F.hover(t.getByRole(`tooltip`)),await P(t.getByRole(`tooltip`)).toBeVisible(),await F.unhover(t.getByRole(`tooltip`)),await I(()=>P(t.queryByRole(`tooltip`)).not.toBeInTheDocument()),l.focus(),await I(()=>P(t.getByRole(`tooltip`)).toBeVisible()),await F.hover(t.getByRole(`tooltip`)),l.blur(),await P(t.getByRole(`tooltip`)).toBeVisible(),await F.unhover(t.getByRole(`tooltip`)),await I(()=>P(t.queryByRole(`tooltip`)).not.toBeInTheDocument()),l.focus(),await I(()=>P(t.getByRole(`tooltip`)).toBeVisible()),await P(l).toHaveFocus();let u=t.getByRole(`tooltip`),d=u.getBoundingClientRect(),f=u.parentElement,p=()=>{let e=f.getBoundingClientRect(),t=u.getBoundingClientRect();P(t.left).toBeGreaterThanOrEqual(e.left),P(t.right).toBeLessThanOrEqual(e.right+1),P(t.top).toBeGreaterThanOrEqual(e.top),P(t.bottom).toBeLessThanOrEqual(e.bottom+1)};p(),await P(l).toHaveAccessibleDescription(l.getAttribute(`aria-label`)?.replace(`: `,` `)),n.length>1&&(await F.hover(l),await F.tab(),await P(n[1]).toHaveFocus(),await P(n[1]).toHaveAttribute(`aria-describedby`,u.id),await P(l).not.toHaveAttribute(`aria-describedby`),await P(n[1]).toHaveAccessibleDescription(n[1].getAttribute(`aria-label`)?.replace(`: `,` `)),await F.unhover(l),await I(()=>{let e=u.getBoundingClientRect();P(Math.abs(e.left-d.left)+Math.abs(e.top-d.top)).toBeGreaterThan(1)}),p());let m=f.style.width;f.style.width=`280px`,await I(p),f.style.width=m,await F.keyboard(`{Escape}`),await P(t.queryByRole(`tooltip`)).not.toBeInTheDocument(),await P(n.length>1?n[1]:l).toHaveFocus();for(let e=n.length>1?2:1;e<n.length;e++)await F.tab(),await P(n[e]).toHaveFocus();await F.tab();let h=t.getByText(`데이터 표 보기`);await P(h).toHaveFocus(),await P(h).toHaveAccessibleName(/데이터 표 보기/),h.blur();for(let e of n)await P(e).toHaveAccessibleName(),await P(e).not.toHaveAttribute(`aria-describedby`)}async function A(e){let t=L(e),n=()=>[...e.querySelectorAll(`.chart_point > [data-pattern]`)];await I(()=>P(n()).toHaveLength(4)),await F.click(t.getByRole(`radio`,{name:`색상 채움`})),await I(()=>P(n().every(e=>e.getAttribute(`data-pattern`)===`none`)).toBe(!0)),await P(t.getByRole(`combobox`,{name:`패턴 종류`})).toBeDisabled(),await F.selectOptions(t.getByRole(`combobox`,{name:`차트 유형`}),`bar`),await P(e.querySelector(`.chart_bar`)).not.toBeNull(),await F.click(t.getByRole(`radio`,{name:`흑백 패턴`})),await F.selectOptions(t.getByRole(`combobox`,{name:`패턴 종류`}),`dots`),await I(()=>P(n().every(e=>e.getAttribute(`data-pattern`)===`dots`)).toBe(!0)),await P(t.getByLabelText(`검색`,{exact:!0})).toBeDisabled(),await P(e.querySelector(`[data-monochrome="true"]`)).not.toBeNull(),await F.click(t.getByRole(`radio`,{name:`컬러 패턴`})),await F.selectOptions(t.getByRole(`combobox`,{name:`패턴 종류`}),`crosshatch`),await I(()=>P(n().every(e=>e.getAttribute(`data-pattern`)===`crosshatch`)).toBe(!0)),await P(t.getByLabelText(`검색`,{exact:!0})).toBeEnabled(),await P(e.querySelector(`[data-monochrome="false"]`)).not.toBeNull()}function j({type:e,monochrome:t=!1}){let n=(0,M.useRef)(null);return(0,M.useEffect)(()=>{if(n.current)return v(n.current,{data:ce,type:e,title:`${e} 공통 런타임`,unit:`만원`,monochrome:t})},[e,t]),(0,N.jsx)(`div`,{ref:n,"data-runtime-chart":e})}var M,N,P,F,I,L,se,ce,R,z,B,V,H,U,W,G,K,q,J,le,ue,Y,X,Z,Q,$,de,fe,pe,me,he;function ge(){return(ge=e((()=>{_(),r(),M=n(),b(),d(),O(),N=a(),{expect:P,userEvent:F,waitFor:I,within:L}=__STORYBOOK_MODULE_TEST__,se=f,ce=[{label:`1월`,value:120},{label:`2월`,value:180},{label:`3월`,value:150},{label:`4월`,value:240},{label:`5월`,value:210},{label:`6월`,value:320}],R={title:`데이터 표시/Chart`,component:se,play:async({canvasElement:e})=>k(e),parameters:{layout:`padded`},decorators:[e=>(0,N.jsx)(`div`,{style:{width:`100%`,minWidth:0},children:(0,N.jsx)(e,{})})],args:{data:ce,type:`bar`,title:`월별 매출`,description:`상반기 매출 추이`,unit:`만원`,height:320,color:`var(--chart-color, #2563eb)`,pattern:`auto`,monochrome:!1,displayStyle:`auto`,showLegend:!0,showGrid:!0,emptyMessage:`표시할 데이터가 없습니다.`},argTypes:{...i,displayStyle:{control:`select`,options:[`auto`,`color`,`pattern`,`monochrome`],description:`표시 스타일. auto는 개별 설정 유지, 나머지는 항목별 패턴보다 우선합니다.`},data:{control:`object`,description:`{ label: string, value: number, color?: string, pattern?: string } 배열. 항목별 색상·패턴을 지정합니다.`},type:{control:`select`,options:[`bar`,`line`,`area`,`donut`,`arc`],description:`차트 유형`},title:{control:`text`,description:`차트 제목과 접근성 이름`},description:{control:`text`},unit:{control:`text`,description:`값의 단위`},height:{control:{type:`range`,min:200,max:600,step:20}},color:{control:`color`,description:`막대·선·영역 색상. 도넛·아크는 항목별 color를 사용합니다.`},pattern:{control:`select`,options:[`auto`,`none`,...u],description:`막대·도넛·아크 패턴. 항목의 pattern이 우선합니다.`},monochrome:{control:`boolean`,description:`막대·도넛·아크를 공통 잉크 색상으로 표시합니다.`},showLegend:{control:`boolean`,description:`막대·도넛·아크 범례 표시`},showGrid:{control:`boolean`,description:`직교 좌표 차트의 격자 표시`},emptyMessage:{control:`text`,description:`빈 데이터 안내 내용. 문자열 또는 ReactNode를 전달하며, 생략하면 기본 문구를 표시합니다.`}}},z={},B={name:`스타일 직접 선택`,render:()=>(0,N.jsx)(S,{showCode:!1}),play:async({canvasElement:e})=>A(e)},V={name:`HTML · Gulp · Vue 스타일 선택`,render:()=>(0,N.jsx)(S,{runtime:!0,showCode:!1}),play:async({canvasElement:e})=>A(e)},H={name:`막대`,play:async({canvasElement:e})=>{let t=L(e);await k(e),await P(t.getByRole(`group`,{name:`월별 매출`})).toBeVisible();let n=t.getByText(`데이터 표 보기`);n.focus(),await P(n).toHaveFocus(),await F.click(n),await P(t.getByRole(`table`,{name:`월별 매출 데이터`})).toBeVisible(),await P(t.getAllByRole(`row`)).toHaveLength(7)}},U={name:`선`,args:{type:`line`}},W={name:`영역`,args:{type:`area`,color:`#0d9488`}},G={name:`도넛`,args:{type:`donut`,title:`유입 경로`,description:`채널별 방문 수`,unit:`명`,data:[{label:`검색`,value:480,color:`var(--chart-series-1, #2563eb)`,pattern:`diagonal`},{label:`직접 방문`,value:260,color:`var(--chart-series-2, #0d9488)`,pattern:`dots`},{label:`소셜`,value:180,color:`var(--chart-series-3, #9333ea)`,pattern:`crosshatch`},{label:`기타`,value:80,color:`var(--chart-series-4, #c2410c)`,pattern:`horizontal`}]}},K={name:`아크`,args:{type:`arc`,title:`목표 달성 현황`,description:`전체 목표 대비 완료와 잔여 비율`,unit:`%`,data:[{label:`완료`,value:72,color:`var(--chart-series-1, #2563eb)`,pattern:`diagonal`},{label:`잔여`,value:28,color:`var(--chart-track-color, #64748b)`,pattern:`dots`}]},play:async({canvasElement:e})=>{let t=L(e);await k(e),await P(t.getByRole(`group`,{name:`목표 달성 현황`})).toBeVisible(),await P(t.getByRole(`list`)).toHaveTextContent(`완료 · 72%`),await F.click(t.getByText(`데이터 표 보기`)),await P(t.getByRole(`table`,{name:`목표 달성 현황 데이터`})).toBeVisible()}},q={name:`흑백 패턴 · 막대 6종`,args:{monochrome:!0,type:`bar`,title:`패턴별 수량`,description:`동일한 잉크 색상에서 무늬로 항목을 구분합니다.`,unit:`개`,data:u.map((e,t)=>({label:[`사선`,`역사선`,`교차 빗금`,`점`,`가로선`,`세로선`][t],value:[120,180,150,240,210,320][t],pattern:e}))}},J={name:`흑백 패턴 · 도넛`,args:{...G.args,monochrome:!0}},le={name:`흑백 패턴 · 아크`,args:{...K.args,monochrome:!0}},ue={name:`음수 · 0`,args:{title:`월별 손익`,description:`0 기준선 위아래로 손익을 표시합니다.`,data:[{label:`1월`,value:-80},{label:`2월`,value:0},{label:`3월`,value:120}]}},Y={name:`빈 데이터`,args:{data:[]},play:async({canvasElement:e})=>{let t=L(e);await P(t.getByRole(`status`)).toHaveTextContent(`표시할 데이터가 없습니다.`),await P(t.queryByRole(`img`)).not.toBeInTheDocument()}},X={name:`빈 데이터 문구 변경`,args:{data:[],emptyMessage:`선택한 기간의 매출 데이터가 없습니다.`}},Z={name:`모든 값이 0`,args:{data:[{label:`1월`,value:0},{label:`2월`,value:0}]}},Q={name:`단일 데이터`,args:{type:`line`,data:[{label:`1월`,value:120}]}},$={name:`도넛 음수 안내`,args:{type:`donut`,data:[{label:`손실`,value:-20},{label:`이익`,value:80}]},play:async({canvasElement:e})=>{await P(L(e).getByRole(`status`)).toHaveTextContent(`도넛 차트에는 0 이상의 값이 필요합니다.`)}},de={name:`좁은 너비`,globals:{viewport:{value:`mobileSmall`,isRotated:!1}}},fe={name:`접근성 · 열린 툴팁`,args:{...K.args,title:`목표 달성 현황 상세`,data:[{label:`완료한 업무와 검토를 마친 항목`,value:72},{label:`아직 진행 중인 업무`,value:28}]},play:async({canvasElement:e})=>{await k(e),L(e).getAllByRole(`img`)[0].focus(),await I(()=>P(L(e).getByRole(`tooltip`)).toBeVisible())}},pe={...fe,name:`접근성 · 다크 테마`,globals:{theme:`dark`}},me={name:`Gulp · Vue 공통 렌더링`,render:()=>(0,N.jsxs)(`div`,{style:{display:`grid`,gap:32},children:[[`bar`,`line`,`area`,`donut`,`arc`].map(e=>(0,N.jsx)(j,{type:e},e)),[`bar`,`donut`,`arc`].map(e=>(0,N.jsx)(j,{type:e,monochrome:!0},`mono-${e}`))]}),play:async({canvasElement:e})=>{for(let t of e.querySelectorAll(`[data-runtime-chart]`))await I(()=>P(L(t).getAllByRole(`img`)).toHaveLength(6)),await k(t)}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "스타일 직접 선택",
  render: () => <ChartStylePlayground showCode={false} />,
  play: async ({
    canvasElement
  }) => checkStyleOptions(canvasElement)
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "HTML · Gulp · Vue 스타일 선택",
  render: () => <ChartStylePlayground runtime showCode={false} />,
  play: async ({
    canvasElement
  }) => checkStyleOptions(canvasElement)
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "막대",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await checkTooltips(canvasElement);
    await expect(canvas.getByRole("group", {
      name: "월별 매출"
    })).toBeVisible();
    const summary = canvas.getByText("데이터 표 보기");
    summary.focus();
    await expect(summary).toHaveFocus();
    await userEvent.click(summary);
    await expect(canvas.getByRole("table", {
      name: "월별 매출 데이터"
    })).toBeVisible();
    await expect(canvas.getAllByRole("row")).toHaveLength(7);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "선",
  args: {
    type: "line"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "영역",
  args: {
    type: "area",
    color: "#0d9488"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "도넛",
  args: {
    type: "donut",
    title: "유입 경로",
    description: "채널별 방문 수",
    unit: "명",
    data: [{
      label: "검색",
      value: 480,
      color: "var(--chart-series-1, #2563eb)",
      pattern: "diagonal"
    }, {
      label: "직접 방문",
      value: 260,
      color: "var(--chart-series-2, #0d9488)",
      pattern: "dots"
    }, {
      label: "소셜",
      value: 180,
      color: "var(--chart-series-3, #9333ea)",
      pattern: "crosshatch"
    }, {
      label: "기타",
      value: 80,
      color: "var(--chart-series-4, #c2410c)",
      pattern: "horizontal"
    }]
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "아크",
  args: {
    type: "arc",
    title: "목표 달성 현황",
    description: "전체 목표 대비 완료와 잔여 비율",
    unit: "%",
    data: [{
      label: "완료",
      value: 72,
      color: "var(--chart-series-1, #2563eb)",
      pattern: "diagonal"
    }, {
      label: "잔여",
      value: 28,
      color: "var(--chart-track-color, #64748b)",
      pattern: "dots"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await checkTooltips(canvasElement);
    await expect(canvas.getByRole("group", {
      name: "목표 달성 현황"
    })).toBeVisible();
    await expect(canvas.getByRole("list")).toHaveTextContent("완료 · 72%");
    await userEvent.click(canvas.getByText("데이터 표 보기"));
    await expect(canvas.getByRole("table", {
      name: "목표 달성 현황 데이터"
    })).toBeVisible();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "흑백 패턴 · 막대 6종",
  args: {
    monochrome: true,
    type: "bar",
    title: "패턴별 수량",
    description: "동일한 잉크 색상에서 무늬로 항목을 구분합니다.",
    unit: "개",
    data: chartPatterns.map((pattern, index) => ({
      label: ["사선", "역사선", "교차 빗금", "점", "가로선", "세로선"][index],
      value: [120, 180, 150, 240, 210, 320][index],
      pattern
    }))
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "흑백 패턴 · 도넛",
  args: {
    ...Donut.args,
    monochrome: true
  }
}`,...J.parameters?.docs?.source}}},le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  name: "흑백 패턴 · 아크",
  args: {
    ...Arc.args,
    monochrome: true
  }
}`,...le.parameters?.docs?.source}}},ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  name: "음수 · 0",
  args: {
    title: "월별 손익",
    description: "0 기준선 위아래로 손익을 표시합니다.",
    data: [{
      label: "1월",
      value: -80
    }, {
      label: "2월",
      value: 0
    }, {
      label: "3월",
      value: 120
    }]
  }
}`,...ue.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "빈 데이터",
  args: {
    data: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("표시할 데이터가 없습니다.");
    await expect(canvas.queryByRole("img")).not.toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "빈 데이터 문구 변경",
  args: {
    data: [],
    emptyMessage: "선택한 기간의 매출 데이터가 없습니다."
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "모든 값이 0",
  args: {
    data: [{
      label: "1월",
      value: 0
    }, {
      label: "2월",
      value: 0
    }]
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "단일 데이터",
  args: {
    type: "line",
    data: [{
      label: "1월",
      value: 120
    }]
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "도넛 음수 안내",
  args: {
    type: "donut",
    data: [{
      label: "손실",
      value: -20
    }, {
      label: "이익",
      value: 80
    }]
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("status")).toHaveTextContent("도넛 차트에는 0 이상의 값이 필요합니다.");
  }
}`,...$.parameters?.docs?.source}}},de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  name: "좁은 너비",
  globals: {
    viewport: {
      value: "mobileSmall",
      isRotated: false
    }
  }
}`,...de.parameters?.docs?.source}}},fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  name: "접근성 · 열린 툴팁",
  args: {
    ...Arc.args,
    title: "목표 달성 현황 상세",
    data: [{
      label: "완료한 업무와 검토를 마친 항목",
      value: 72
    }, {
      label: "아직 진행 중인 업무",
      value: 28
    }]
  },
  play: async ({
    canvasElement
  }) => {
    await checkTooltips(canvasElement);
    within(canvasElement).getAllByRole("img")[0].focus();
    await waitFor(() => expect(within(canvasElement).getByRole("tooltip")).toBeVisible());
  }
}`,...fe.parameters?.docs?.source}}},pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  ...FocusedTooltip,
  name: "접근성 · 다크 테마",
  globals: {
    theme: "dark"
  }
}`,...pe.parameters?.docs?.source}}},me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  name: "Gulp · Vue 공통 렌더링",
  render: () => <div style={{
    display: "grid",
    gap: 32
  }}>
      {["bar", "line", "area", "donut", "arc"].map(type => <RuntimeExample key={type} type={type} />)}
      {["bar", "donut", "arc"].map(type => <RuntimeExample key={\`mono-\${type}\`} type={type} monochrome />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    for (const host of canvasElement.querySelectorAll<HTMLElement>("[data-runtime-chart]")) {
      await waitFor(() => expect(within(host).getAllByRole("img")).toHaveLength(6));
      await checkTooltips(host);
    }
  }
}`,...me.parameters?.docs?.source}}},he=[`Playground`,`StylePlayground`,`SharedStylePlayground`,`Bar`,`Line`,`Area`,`Donut`,`Arc`,`MonochromeBar`,`MonochromeDonut`,`MonochromeArc`,`NegativeValues`,`Empty`,`CustomEmpty`,`ZeroValues`,`SinglePoint`,`InvalidDonut`,`Mobile`,`FocusedTooltip`,`DarkTheme`,`GulpVueRuntime`]})))()}export{ie as _,X as a,U as c,J as d,ue as f,O as g,S as h,oe as i,le as l,R as m,W as n,G as o,ge as p,H as r,Y as s,K as t,q as u,x as v};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e){let t=[],n=/:([\w-]+)="([^"]*)"|([\w-]+)(?:="([^"]*)")?/g,r;for(;r=n.exec(e);){if(r[1]){let e=x[r[1]]??r[1];t.push(`${e}=${r[2]}`);continue}let e=r[3],n=r[4],i=x[e]??e;n==null?t.push(`${i}=true`):/^-?\d+(\.\d+)?$/.test(n)?t.push(`${i}=${n}`):t.push(`${i}='${n}'`)}return t.join(`, `)}function n(e,t){let n=RegExp(`<div class="${t}">(\\d+)<\\/div>`,`g`),r=[...e.matchAll(n)];if(r.length<4)return e;let i=r.map(e=>Number(e[1])),a=Array.from({length:i.length},(e,t)=>t+1);return i.join(`,`)===a.join(`,`)?`{% for n in [${i.join(`, `)}] %}\n  <div class="${t}">{{ n }}</div>\n{% endfor %}`:e}function r(e,t){let n=` `.repeat(t);return e.split(`
`).map(e=>e.trim()?`${n}${e}`:``).join(`
`)}function i(e){return e.replace(/>\s*</g,`>
<`).replace(/(<\/[\w:-]+>)\s*(\{\{)/g,`$1
$2`).replace(/(\}\})\s*(<\/?[A-Za-z])/g,`$1
$2`).replace(/(\}\})\s*(\{\{)/g,`$1
$2`).split(`
`).map(e=>e.trim()).join(`
`).replace(/\n{3,}/g,`

`).trim()}function a(e,t){return`{% from "${t.fromPath}" import ${t.importNames} %}\n\n${o(e,t).replace(/\n{3,}/g,`

`).trim()}`}function o(e,a){let s=a.tags.map(e=>e.tag).join(`|`),c=Object.fromEntries(a.tags.map(e=>[e.tag,e.macro])),l=RegExp(`^<(${s})\\b([^>]*)>`),u=RegExp(`<(${s})\\b`),d=``,f=0;for(;f<e.length;){let s=e.slice(f),p=s.match(l);if(p){let i=p[1],s=c[i],l=t(p[2].trim()),u=f+p[0].length,m=1,h=RegExp(`</?${i}\\b[^>]*>`,`g`);h.lastIndex=u;let g=e.length,_;for(;_=h.exec(e);)if(_[0].startsWith(`</${i}`)?--m:m+=1,m===0){g=_.index;break}let v=r(n(o(e.slice(u,g),a).trim(),a.cellClass),2),y=l?`{% call ${s}(${l}) %}\n${v}\n{% endcall %}`:`{% call ${s}() %}\n${v}\n{% endcall %}`;d&&!d.endsWith(`
`)&&(d+=`
`),d+=y,f=g+`</${i}>`.length;continue}let m=s.search(u),h=m<0?s:s.slice(0,m);if(/^\s*$/.test(h))d&&m>=0&&!d.endsWith(`
`)&&(d+=`
`);else{let e=i(h);e?(d&&!d.endsWith(`
`)&&(d+=`
`),d+=e,m>=0&&(d+=`
`)):d&&m>=0&&!d.endsWith(`
`)&&(d+=`
`)}f=m<0?e.length:f+m}return d}function s(e){return a(e,{fromPath:`components/layout/Grid/grid.njk`,importNames:`grid, gridCol`,tags:[{tag:`Grid`,macro:`grid`},{tag:`GridCol`,macro:`gridCol`}],cellClass:`grid_demo-cell`})}function c(e){return a(e,{fromPath:`components/layout/Flex/flex.njk`,importNames:`flex, flexItem`,tags:[{tag:`Flex`,macro:`flex`},{tag:`FlexItem`,macro:`flexItem`}],cellClass:`flex_demo-cell`})}function l(e){let t=u(e.replace(/\r\n?/g,`
`)),n=[`{% from "components/layout/Divider/divider.njk" import divider %}`];return/<Space\b/.test(t)?(t=o(t,S),n.unshift(`{% from "components/layout/Space/space.njk" import space %}`)):t=t.replace(/>\s*</g,`>
<`).replace(/\}\}\s*</g,`}}
<`).replace(/>\s*\{\{/g,`>
{{`).replace(/\}\}\s*\{\{/g,`}}
{{`),`${n.join(`
`)}\n\n${t.replace(/\n{3,}/g,`

`).trim()}`}function u(e){let n=e.replace(/<Divider\b([^>]*)\/>/g,(e,n)=>{let r=t(n.trim());return r?`{{ divider(${r}) }}`:`{{ divider() }}`});return n=n.replace(/<Divider\b([^>]*)>([\s\S]*?)<\/Divider>/g,(e,n,i)=>{let a=t(n.trim()),o=i.trim();if(!o)return a?`{{ divider(${a}) }}`:`{{ divider() }}`;let s=r(o,2);return a?`{% call divider(${a}) %}\n${s}\n{% endcall %}`:`{% call divider() %}\n${s}\n{% endcall %}`}),n}function d(e){return e.replace(/<Button\b([^>]*)\/>/g,(e,n)=>{let r=t(n.trim());return r?`{{ button(${r}) }}`:`{{ button() }}`})}function f(e){let t=d(u(e.replace(/\r\n?/g,`
`))),n=[`{% from "components/layout/Space/space.njk" import space %}`];return(t.includes(`{{ divider(`)||t.includes(`{% call divider`))&&n.push(`{% from "components/layout/Divider/divider.njk" import divider %}`),t.includes(`{{ button(`)&&n.push(`{% from "components/basic/Button/button.njk" import button %}`),t=o(t,S),`${n.join(`
`)}\n\n${t.replace(/\n{3,}/g,`

`).trim()}`}function p(e){return e.replace(/class=/g,`className=`).replace(/columns-md=/g,`columnsMd=`).replace(/columns-lg=/g,`columnsLg=`).replace(/cols-md=/g,`colsMd=`).replace(/cols-lg=/g,`colsLg=`).replace(/item-span-md=/g,`itemSpanMd=`).replace(/item-span-lg=/g,`itemSpanLg=`).replace(/item-span=/g,`itemSpan=`).replace(/span-md=/g,`spanMd=`).replace(/span-lg=/g,`spanLg=`).replace(/grow-factor=/g,`growFactor=`).replace(/margin-y=/g,`marginY=`).replace(/:([\w]+)="([^"]*)"/g,(e,t,n)=>/^-?\d+(\.\d+)?$/.test(n)?`${t}={${n}}`:`${t}="${n}"`).replace(/style="min-width: 8rem;"/g,`style={{ minWidth: '8rem' }}`).replace(/style="min-height: 5rem; padding: 1rem;"/g,`style={{ minHeight: '5rem', padding: '1rem' }}`).replace(/style="padding-block: 2rem;"/g,`style={{ paddingBlock: '2rem' }}`).replace(/style="padding: 1rem;"/g,`style={{ padding: '1rem' }}`).replace(/auto-fit/g,`autoFit`).replace(/auto-fill/g,`autoFill`).replace(/equal-columns/g,`equalColumns`).replace(/direction-md=/g,`directionMd=`).replace(/direction-lg=/g,`directionLg=`)}function m(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function h(e){let t=[];return e.replace(/<(\/)?(Grid|GridCol|Flex|FlexItem)\b([^>]*)>/g,(e,n,r,i)=>{if(n)return`</${t.pop()||`div`}>`;let a=m(i),o=typeof a.as==`string`?a.as:`div`,s=[];return r===`Grid`&&s.push(`grid`,a.cols&&`grid_cols-${a.cols}`,a[`cols-md`]&&`grid_cols-md-${a[`cols-md`]}`,a[`cols-lg`]&&`grid_cols-lg-${a[`cols-lg`]}`,a.ratio&&`grid_ratio-${a.ratio}`,a[`item-span`]&&`grid_item-span-${a[`item-span`]}`,a[`item-span-md`]&&`grid_item-span-md-${a[`item-span-md`]}`,a[`item-span-lg`]&&`grid_item-span-lg-${a[`item-span-lg`]}`,a.gap&&`grid_gap-${a.gap}`,a[`auto-fit`]&&`grid_auto-fit`,a[`auto-fill`]&&`grid_auto-fill`,a[`equal-columns`]&&`grid_equal-columns`,a.align&&`grid_align-${a.align}`),r===`GridCol`&&s.push(a.span&&`grid_col-span-${a.span}`,a[`span-md`]&&`grid_col-span-md-${a[`span-md`]}`,a[`span-lg`]&&`grid_col-span-lg-${a[`span-lg`]}`),r===`Flex`&&s.push(`flex`,`flex_${a.direction===`column`?`col`:a.direction||`row`}`,a[`direction-md`]&&`flex_${a[`direction-md`]===`column`?`col`:a[`direction-md`]}-md`,a[`direction-lg`]&&`flex_${a[`direction-lg`]===`column`?`col`:a[`direction-lg`]}-lg`,a.wrap&&`flex_wrap`,a.cols&&`flex_cols-${a.cols}`,a[`cols-md`]&&`flex_cols-md-${a[`cols-md`]}`,a[`cols-lg`]&&`flex_cols-lg-${a[`cols-lg`]}`,a.ratio&&`flex_ratio-${a.ratio}`,a[`item-span`]&&`flex_items-span-${a[`item-span`]}`,a[`item-span-md`]&&`flex_items-span-md-${a[`item-span-md`]}`,a[`item-span-lg`]&&`flex_items-span-lg-${a[`item-span-lg`]}`,a.gap&&`flex_gap-${a.gap}`,`flex_align-${a.align||`stretch`}`,a.justify&&`flex_justify-${a.justify}`,a.equal&&`flex_equal`,a[`auto-fit`]&&`flex_auto-fit`),r===`FlexItem`&&s.push(a.span&&`flex_item-span-${a.span}`,a[`span-md`]&&`flex_item-span-md-${a[`span-md`]}`,a[`span-lg`]&&`flex_item-span-lg-${a[`span-lg`]}`,a.grow&&(a[`grow-factor`]===`2`?`flex_grow-2`:`flex_grow`),a.fit&&`flex_fit`,a.align&&`flex_self-${a.align}`,a.order&&`flex_order-${a.order}`),typeof a.class==`string`&&s.push(a.class),t.push(o),`<${o} class="${s.filter(Boolean).join(` `)}" data-component="${r}">`})}function g(e,t,n,r){let i=[],a=0,o=e.replace(/<(\/)?([\w-]+)\b([^>]*)>/g,(e,o,s,c)=>{if(o){let t=i.pop();return t?.component&&t.name===s?`</w2:group>`:e}let l=c.match(/\sdata-component="([^"]+)"/)?.[1],u=!!(l&&r.includes(l));if(i.push({name:s,component:u}),!u)return e;a+=1;let d=c.match(/\sclass="([^"]*)"/)?.[1]??``,f=s===`div`?``:`\n    tagname="${s}"`,p=c.replace(/\sclass="[^"]*"/,``).replace(/\sdata-component="[^"]*"/,``).trim(),m=p?`\n    ${p}`:``;return`<w2:group\n    id="${n}${t[0].toUpperCase()}${t.slice(1)}${a}"${f}\n    class="${d}"${m}>`});return`<w2:group
  id="${n}${t[0].toUpperCase()}${t.slice(1)}Example">
${o.split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}function _(e,t,n){let r=e.toLowerCase(),i=e===`Grid`?`GridCol`:e===`Flex`?`FlexItem`:``,a=i&&n.body.includes(`<${i}`),o=[`Button`,`Divider`,`Space`].filter(t=>t!==e&&n.body.includes(`<${t}`)),u=`<script setup>\n${[`import ${e}${a?`, { ${i} }`:``} from '@uxkm/vue/${r}';`,...o.map(e=>`import ${e} from '@uxkm/vue/${e.toLowerCase()}';`)].join(`
`)}\n<\/script>\n\n<template>\n${n.body.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`,d=p(n.body),m=`${[`import ${e}${a?`, { ${i} }`:``} from '@uxkm/react/${r}';`,...o.map(e=>`import ${e} from '@uxkm/react/${e.toLowerCase()}';`)].join(`
`)}\n\nexport function Example() {\n  return (\n  <>\n${d.split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`,_=n.html??h(n.body),v=e===`Grid`?s(n.body):e===`Flex`?c(n.body):e===`Divider`?l(n.body):e===`Space`?f(n.body):`{# ${e} · ${t} #}\n${_}`,y=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/layout/${e}/${e}.html · ${t}`,code:_},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/layout/${e}/${r}.njk · ${t}`,code:v},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/${r} → apps/vue/src/components/layout/${e}/${e}.vue · ${t}`,code:u},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${r} → apps/vue/src/components/layout/${e}/${e}.vue · ${t}`,code:u},{id:`react`,label:`React`,fileName:`@uxkm/react/${r} → apps/react/src/components/layout/${e}/${e}.jsx · ${t}`,code:m},{id:`next`,label:`Next`,fileName:`@uxkm/react/${r} → apps/react/src/components/layout/${e}/${e}.jsx · ${t}`,code:m}];if(e===`Grid`&&y.push({id:`websquare`,label:`WebSquare`,fileName:`screen.xml · Grid ${t}`,code:g(_,t,`grid`,[`Grid`,`GridCol`])}),e===`Flex`&&y.push({id:`websquare`,label:`WebSquare`,fileName:`screen.xml · Flex ${t}`,code:g(_,t,`flex`,[`Flex`,`FlexItem`])}),e===`Divider`&&y.push({id:`websquare`,label:`WebSquare`,fileName:`Divider.xml · ${t}`,code:ne[t]}),e===`Space`){let e=_.replace(/<([a-z][\w-]*) class="(space(?:\s[^"]*)?)"/g,`<$1 class="$2" data-component="Space"`);y.push({id:`websquare`,label:`WebSquare`,fileName:`Space.xml · ${t}`,code:g(e,t,`space`,[`Space`])})}return y}function v(e,t){return Object.fromEntries(Object.entries(t).map(([t,n])=>[t,_(e,t,n)]))}var y,ee,te,b,x,S,ne,re,ie,ae,oe,se,ce,le,ue;function C(){return(C=e((()=>{y=`<!-- grid 클래스에 열 수, 간격, 비율 등의 부모 변형 클래스를 함께 적용합니다. -->
<div class="grid grid_cols-3" data-component="Grid">
  <!-- 모든 자식은 부모가 만든 Grid 트랙에 자동으로 배치됩니다. -->
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- 자식마다 폭이 다를 때만 grid_col-span-* 클래스를 지정합니다. -->
<div class="grid" data-component="Grid">
  <div class="grid_col-span-8" data-component="GridCol">8 columns</div>
  <div class="grid_col-span-4" data-component="GridCol">4 columns</div>
</div>`,`${y}`,ee=`<!-- flex 클래스와 기본 행 방향 클래스를 루트에 적용합니다. -->
<div class="flex flex_row" data-component="Flex">
  <!-- 직계 자식은 Flex 항목으로 한 방향에 배치됩니다. -->
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- 자식마다 너비나 확장 방식이 다를 때만 FlexItem 클래스를 지정합니다. -->
<div class="flex flex_wrap" data-component="Flex">
  <div class="flex_item-span-8" data-component="FlexItem">8 / 12</div>
  <div class="flex_item-span-4 flex_fit" data-component="FlexItem">4 / 12</div>
</div>`,`${ee}`,te=`<!-- 레이블이 없는 의미 있는 수평 구분선은 hr에 divider 클래스를 적용합니다. -->
<hr class="divider" data-component="Divider" />

<!-- 점선은 divider_dashed를 함께 지정합니다. -->
<hr class="divider divider_dashed" data-component="Divider" />

<!-- 레이블형 구분선은 div에 텍스트를 넣고 양쪽 선은 CSS로 그립니다. -->
<div class="divider" data-component="Divider">섹션 제목</div>

<!-- plain은 레이블 굵기를 낮추고, orient는 레이블 위치를 바꿉니다. -->
<div class="divider divider_plain divider_orient-left" data-component="Divider">왼쪽 보조 설명</div>

<!-- 세로 구분선은 장식용이므로 span에 aria-hidden을 지정합니다. -->
<span class="divider divider_vertical" data-component="Divider" aria-hidden="true"></span>`,`${te}`,b=`<!-- space 클래스로 기본 inline-flex 간격 컨테이너를 만듭니다. 기본 간격은 md입니다. -->
<div class="space" data-component="Space">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- gap·방향·줄바꿈·너비·정렬 변형 클래스를 조합합니다. -->
<div class="space space_gap-sm space_vertical space_align-stretch" data-component="Space">
  <div>첫 번째</div>
  <div>두 번째</div>
</div>

<!-- 부모 너비를 채우고 줄바꿈하려면 space_block과 space_wrap을 함께 지정합니다. -->
<div class="space space_block space_wrap space_justify-between" data-component="Space">
  <div>시작</div>
  <div>끝</div>
</div>`,`${b}`,x={"cols-md":`colsMd`,"cols-lg":`colsLg`,"item-span":`itemSpan`,"item-span-md":`itemSpanMd`,"item-span-lg":`itemSpanLg`,"span-md":`spanMd`,"span-lg":`spanLg`,"auto-fit":`autoFit`,"auto-fill":`autoFill`,"equal-columns":`equalColumns`,"direction-md":`directionMd`,"direction-lg":`directionLg`,"grow-factor":`growFactor`,"margin-y":`marginY`,"icon-before":`iconBefore`,"icon-after":`iconAfter`,"icon-only":`iconOnly`,"select-text":`selectText`,"select-caret":`selectCaret`,"aria-disabled":`ariaDisabled`,"aria-label":`ariaLabel`,class:`className`},S={fromPath:`components/layout/Space/space.njk`,importNames:`space`,tags:[{tag:`Space`,macro:`space`}],cellClass:`space_demo-box`},ne={playground:`<w2:group
  id="dividerPlaygroundExample">
  <p>위 콘텐츠</p>
  <hr class="divider" />
  <p>아래 콘텐츠</p>
</w2:group>`,dashed:`<w2:group
  id="dividerDashedExample">
  <p>위 콘텐츠</p>
  <hr class="divider divider_dashed" />
  <p>아래 콘텐츠</p>
</w2:group>`,marginY:`<w2:group
  id="dividerMarginYExample">
  <p>marginY sm</p>
  <hr class="divider divider_margin-sm" />
  <p>아래 콘텐츠</p>
  <p>marginY 1.5rem</p>
  <hr class="divider" style="--divider-current-margin-y: 1.5rem;" />
  <p>아래 콘텐츠</p>
  <w2:group id="dividerMarginYVertical" class="space">
    <w2:textbox id="dividerMarginYItemA" label="A"></w2:textbox>
    <span class="divider divider_vertical divider_margin-lg divider_height-md" aria-hidden="true"></span>
    <w2:textbox id="dividerMarginYItemB" label="B"></w2:textbox>
  </w2:group>
</w2:group>`,thickness:`<w2:group
  id="dividerThicknessExample">
  <p>thickness lg</p>
  <hr class="divider divider_thickness-lg" />
  <p>thickness 3px</p>
  <hr class="divider" style="--divider-current-thickness: 3px;" />
</w2:group>`,text:`<w2:group
  id="dividerTextExample">
  <w2:group id="dividerTextTitle" tagname="div" class="divider">
    <w2:textbox id="dividerTextTitleLabel" label="섹션 제목"></w2:textbox>
  </w2:group>
  <w2:group id="dividerTextDescription" tagname="div" class="divider divider_plain">
    <w2:textbox id="dividerTextDescriptionLabel" label="보조 설명"></w2:textbox>
  </w2:group>
</w2:group>`,orient:`<w2:group
  id="dividerOrientExample">
  <w2:group id="dividerOrientLeft" tagname="div" class="divider divider_orient-left">
    <w2:textbox id="dividerOrientLeftLabel" label="왼쪽"></w2:textbox>
  </w2:group>
  <w2:group id="dividerOrientCenter" tagname="div" class="divider">
    <w2:textbox id="dividerOrientCenterLabel" label="가운데"></w2:textbox>
  </w2:group>
  <w2:group id="dividerOrientRight" tagname="div" class="divider divider_orient-right">
    <w2:textbox id="dividerOrientRightLabel" label="오른쪽"></w2:textbox>
  </w2:group>
</w2:group>`,vertical:`<w2:group
  id="dividerVerticalExample"
  class="space">
  <w2:textbox id="dividerVerticalItemA" label="항목 A"></w2:textbox>
  <span class="divider divider_vertical divider_height-md" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemB" label="항목 B"></w2:textbox>
  <span class="divider divider_vertical divider_dashed divider_height-lg" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemC" label="항목 C"></w2:textbox>
</w2:group>`},re={playground:{body:`<Grid cols="3" gap="sm">
  <div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">3</div>
</Grid>`},basicLayout:{body:`<Grid gap="sm">
  <GridCol as="header" span="12" class="grid_demo-cell">Header</GridCol>
  <GridCol as="aside" span="12" span-md="3" class="grid_demo-cell">Sidebar</GridCol>
  <GridCol as="main" span="12" span-md="9" class="grid_demo-cell">Main content</GridCol>
  <GridCol as="footer" span="12" class="grid_demo-cell">Footer</GridCol>
</Grid>`},contentLayout:{body:`<Grid gap="sm">
  <GridCol as="header" span="12" class="grid_demo-cell">Header</GridCol>
  <GridCol as="aside" span="12" span-md="3" class="grid_demo-cell">Sidebar</GridCol>
  <GridCol as="main" span="12" span-md="9" class="grid_demo-cell">
    <h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
    <Grid cols="1" cols-lg="2" gap="sm"><article class="component_stub">Content section</article><article class="component_stub">Content section</article></Grid>
  </GridCol>
  <GridCol as="footer" span="12" class="grid_demo-cell">Footer</GridCol>
</Grid>`},twelveColumns:{body:`<Grid item-span="1" gap="sm">
  <div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">3</div><div class="grid_demo-cell">4</div><div class="grid_demo-cell">5</div><div class="grid_demo-cell">6</div>
  <div class="grid_demo-cell">7</div><div class="grid_demo-cell">8</div><div class="grid_demo-cell">9</div><div class="grid_demo-cell">10</div><div class="grid_demo-cell">11</div><div class="grid_demo-cell">12</div>
</Grid>`},parent:{body:`<Grid cols="3"><div class="grid_demo-cell">grid_cols-3</div><div class="grid_demo-cell">grid_cols-3</div><div class="grid_demo-cell">grid_cols-3</div></Grid>
<Grid ratio="2-1"><div class="grid_demo-cell">grid_ratio-2-1</div><div class="grid_demo-cell">grid_ratio-2-1</div></Grid>
<Grid item-span="4"><div class="grid_demo-cell">grid_item-span-4</div><div class="grid_demo-cell">grid_item-span-4</div><div class="grid_demo-cell">grid_item-span-4</div></Grid>`},equal:{body:`<Grid cols="2"><div class="grid_demo-cell">cols 2</div><div class="grid_demo-cell">cols 2</div></Grid>
<Grid cols="4"><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div><div class="grid_demo-cell">cols 4</div></Grid>`},ratio:{body:`<Grid ratio="1-2"><div class="grid_demo-cell">1 : 2</div><div class="grid_demo-cell">1 : 2</div></Grid>
<Grid ratio="1-2-1"><div class="grid_demo-cell">1</div><div class="grid_demo-cell">2</div><div class="grid_demo-cell">1</div></Grid>`},itemSpan:{body:`<Grid item-span="6"><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div><div class="grid_demo-cell">span 6</div></Grid>
<Grid item-span="3"><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div><div class="grid_demo-cell">span 3</div></Grid>`},child:{body:`<Grid>
  <GridCol span="8"><div class="grid_demo-cell">span 8</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol>
  <GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol><GridCol span="4"><div class="grid_demo-cell">span 4</div></GridCol>
</Grid>`},gap:{body:`<Grid cols="3" gap="sm"><div class="grid_demo-cell">gap sm</div><div class="grid_demo-cell">gap sm</div><div class="grid_demo-cell">gap sm</div></Grid>
<Grid cols="3" gap="lg"><div class="grid_demo-cell">gap lg</div><div class="grid_demo-cell">gap lg</div><div class="grid_demo-cell">gap lg</div></Grid>
<Grid cols="3" :gap="1.5"><div class="grid_demo-cell">gap 1.5rem</div><div class="grid_demo-cell">gap 1.5rem</div><div class="grid_demo-cell">gap 1.5rem</div></Grid>`},responsive:{body:`<Grid cols="1" cols-md="2" cols-lg="3"><div class="grid_demo-cell">1 → md 2 → lg 3열</div><div class="grid_demo-cell">1 → md 2 → lg 3열</div><div class="grid_demo-cell">1 → md 2 → lg 3열</div></Grid>
<Grid item-span="12" item-span-md="6" item-span-lg="4"><div class="grid_demo-cell">span 12 → md 6 → lg 4</div><div class="grid_demo-cell">span 12 → md 6 → lg 4</div><div class="grid_demo-cell">span 12 → md 6 → lg 4</div></Grid>
<Grid><GridCol span="12" span-md="8" span-lg="9"><div class="grid_demo-cell">개별 span 12 → md 8 → lg 9</div></GridCol><GridCol span="12" span-md="4" span-lg="3"><div class="grid_demo-cell">개별 span 12 → md 4 → lg 3</div></GridCol></Grid>`},auto:{body:`<Grid auto-fit>
  <div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div>
  <div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div><div class="grid_demo-cell">auto-fit</div>
</Grid>
<Grid auto-fill>
  <div class="grid_demo-cell">auto-fill</div><div class="grid_demo-cell">auto-fill</div><div class="grid_demo-cell">auto-fill</div>
</Grid>
<Grid equal-columns>
  <div class="grid_demo-cell">equal</div><div class="grid_demo-cell">equal</div><div class="grid_demo-cell">equal</div>
</Grid>`}},ie={playground:{body:`<Flex direction="row" cols="3" gap="sm" align="stretch"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">3</div></Flex>`},pageLayout:{body:`<Flex wrap gap="sm">
  <FlexItem as="header" span="12" class="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span="12" span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
  <FlexItem as="main" span="12" span-md="9" class="flex_demo-cell">Main content</FlexItem><FlexItem as="footer" span="12" class="flex_demo-cell">Footer</FlexItem>
</Flex>`},contentLayout:{body:`<Flex wrap gap="sm" align="stretch">
  <FlexItem as="header" span="12" class="flex_demo-cell">Header</FlexItem><FlexItem as="aside" span="12" span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
  <FlexItem as="main" span="12" span-md="9" class="flex_demo-cell"><h3>Main content</h3><p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p><Flex cols="1" cols-lg="2" gap="sm"><article class="component_stub">Content section</article><article class="component_stub">Content section</article></Flex></FlexItem>
  <FlexItem as="footer" span="12" class="flex_demo-cell">Footer</FlexItem>
</Flex>`},parent:{body:`<Flex cols="3"><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div><div class="flex_demo-cell">flex_cols-3</div></Flex>
<Flex ratio="2-1"><div class="flex_demo-cell">flex_ratio-2-1</div><div class="flex_demo-cell">flex_ratio-2-1</div></Flex>
<Flex item-span="4"><div class="flex_demo-cell">flex_items-span-4</div><div class="flex_demo-cell">flex_items-span-4</div><div class="flex_demo-cell">flex_items-span-4</div></Flex>`},twelveColumns:{body:`<Flex item-span="1" gap="sm">
  <div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">3</div><div class="flex_demo-cell">4</div><div class="flex_demo-cell">5</div><div class="flex_demo-cell">6</div>
  <div class="flex_demo-cell">7</div><div class="flex_demo-cell">8</div><div class="flex_demo-cell">9</div><div class="flex_demo-cell">10</div><div class="flex_demo-cell">11</div><div class="flex_demo-cell">12</div>
</Flex>`},equal:{body:`<Flex cols="2"><div class="flex_demo-cell">cols 2</div><div class="flex_demo-cell">cols 2</div></Flex>
<Flex cols="4"><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div><div class="flex_demo-cell">cols 4</div></Flex>`},ratio:{body:`<Flex ratio="1-2"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div></Flex>
<Flex ratio="1-2-1"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>`},itemSpan:{body:`<Flex item-span="6"><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div><div class="flex_demo-cell">span 6</div></Flex>
<Flex item-span="3"><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div><div class="flex_demo-cell">span 3</div></Flex>`},childSpan:{body:`<Flex wrap>
  <FlexItem span="8" class="flex_demo-cell">span 8</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem>
  <FlexItem span="4" class="flex_demo-cell">span 4</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem><FlexItem span="4" class="flex_demo-cell">span 4</FlexItem>
</Flex>`},itemSizing:{body:`<Flex gap="sm">
  <FlexItem fit class="flex_demo-cell">fit</FlexItem>
  <FlexItem grow class="flex_demo-cell">grow 1</FlexItem>
  <FlexItem grow grow-factor="2" class="flex_demo-cell">grow 2</FlexItem>
</Flex>`},gap:{body:`<Flex cols="3" gap="sm"><div class="flex_demo-cell">gap sm</div><div class="flex_demo-cell">gap sm</div><div class="flex_demo-cell">gap sm</div></Flex>
<Flex cols="3" gap="lg"><div class="flex_demo-cell">gap lg</div><div class="flex_demo-cell">gap lg</div><div class="flex_demo-cell">gap lg</div></Flex>
<Flex cols="3" :gap="1.5"><div class="flex_demo-cell">gap 1.5rem</div><div class="flex_demo-cell">gap 1.5rem</div><div class="flex_demo-cell">gap 1.5rem</div></Flex>`},responsive:{body:`<Flex cols="1" cols-md="2" cols-lg="3" gap="sm"><div class="flex_demo-cell">1 → md 2 → lg 3개</div><div class="flex_demo-cell">1 → md 2 → lg 3개</div><div class="flex_demo-cell">1 → md 2 → lg 3개</div></Flex>
<Flex item-span="12" item-span-md="6" item-span-lg="4"><div class="flex_demo-cell">span 12 → md 6 → lg 4</div><div class="flex_demo-cell">span 12 → md 6 → lg 4</div><div class="flex_demo-cell">span 12 → md 6 → lg 4</div></Flex>
<Flex wrap><FlexItem span="12" span-md="8" span-lg="9" class="flex_demo-cell">개별 span 12 → md 8 → lg 9</FlexItem><FlexItem span="12" span-md="4" span-lg="3" class="flex_demo-cell">개별 span 12 → md 4 → lg 3</FlexItem></Flex>`},auto:{body:`<Flex auto-fit><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div><div class="flex_demo-cell">auto-fit</div></Flex>`},alignmentAndRatio:{body:`<Flex justify="between" gap="sm"><div class="flex_demo-cell">Start</div><div class="flex_demo-cell">End</div></Flex>
<Flex ratio="2-1" gap="sm"><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>`}},ae={playground:{body:`<p>위 콘텐츠</p>
<Divider />
<p>아래 콘텐츠</p>`,html:`<p>위 콘텐츠</p>
<hr class="divider" />
<p>아래 콘텐츠</p>`},dashed:{body:`<p>위 콘텐츠</p>
<Divider dashed />
<p>아래 콘텐츠</p>`,html:`<p>위 콘텐츠</p>
<hr class="divider divider_dashed" />
<p>아래 콘텐츠</p>`},marginY:{body:`<p>가로 · 상·하</p>
<p>marginY sm</p>
<Divider margin-y="sm" />
<p>아래 콘텐츠</p>
<p>세로 · 좌·우</p>
<Space>
  <span>A</span><Divider vertical margin-y="lg" height="md" /><span>B</span>
</Space>`,html:`<p>가로 · 상·하</p>
<p>marginY sm</p>
<hr class="divider divider_margin-sm" />
<p>아래 콘텐츠</p>
<p>세로 · 좌·우</p>
<div class="space">
  <span>A</span><span class="divider divider_vertical divider_margin-lg divider_height-md" aria-hidden="true"></span><span>B</span>
</div>`},thickness:{body:`<p>thickness lg</p>
<Divider thickness="lg" />
<p>thickness 3px</p>
<Divider thickness="3px" />`,html:`<p>thickness lg</p>
<hr class="divider divider_thickness-lg" />
<p>thickness 3px</p>
<hr class="divider" style="--divider-current-thickness: 3px;" />`},text:{body:`<Divider label="섹션 제목" />
<Divider plain label="보조 설명" />`,html:`<div class="divider">섹션 제목</div>
<div class="divider divider_plain">보조 설명</div>`},orient:{body:`<Divider orient="left" label="왼쪽" />
<Divider label="가운데" />
<Divider orient="right" label="오른쪽" />`,html:`<div class="divider divider_orient-left">왼쪽</div>
<div class="divider">가운데</div>
<div class="divider divider_orient-right">오른쪽</div>`},vertical:{body:`<Space>
  <span>항목 A</span><Divider vertical height="md" /><span>항목 B</span><Divider vertical dashed height="lg" /><span>항목 C</span>
</Space>`,html:`<div class="space">
  <span>항목 A</span><span class="divider divider_vertical divider_height-md" aria-hidden="true"></span>
  <span>항목 B</span><span class="divider divider_vertical divider_dashed divider_height-lg" aria-hidden="true"></span><span>항목 C</span>
</div>`}},oe={playground:{body:`<Space><div class="space_demo-box">항목 1</div><div class="space_demo-box">항목 2</div><div class="space_demo-box">항목 3</div></Space>`,html:`<div class="space"><div>항목 1</div><div>항목 2</div><div>항목 3</div></div>`},vertical:{body:`<Space vertical align="stretch">
  <div class="space_demo-box">첫 번째</div><div class="space_demo-box">두 번째</div><div class="space_demo-box">세 번째</div>
</Space>`,html:`<div class="space space_vertical space_align-stretch">
  <div>첫 번째</div><div>두 번째</div><div>세 번째</div>
</div>`},gap:{body:`<Space gap="xs"><div class="space_demo-box">xs</div><div class="space_demo-box">xs</div><div class="space_demo-box">xs</div></Space>
<Space gap="sm"><div class="space_demo-box">sm</div><div class="space_demo-box">sm</div><div class="space_demo-box">sm</div></Space>
<Space><div class="space_demo-box">md</div><div class="space_demo-box">md</div><div class="space_demo-box">md</div></Space>
<Space gap="lg"><div class="space_demo-box">lg</div><div class="space_demo-box">lg</div><div class="space_demo-box">lg</div></Space>
<Space gap="xl"><div class="space_demo-box">xl</div><div class="space_demo-box">xl</div><div class="space_demo-box">xl</div></Space>`,html:`<div class="space space_gap-xs"><div>xs</div><div>xs</div><div>xs</div></div>
<div class="space space_gap-sm"><div>sm</div><div>sm</div><div>sm</div></div>
<div class="space"><div>md</div><div>md</div><div>md</div></div>
<div class="space space_gap-lg"><div>lg</div><div>lg</div><div>lg</div></div>
<div class="space space_gap-xl"><div>xl</div><div>xl</div><div>xl</div></div>`},wrap:{body:`<Space block wrap>
  <div class="space_demo-box" style="min-width: 8rem;">항목 1</div><div class="space_demo-box" style="min-width: 8rem;">항목 2</div><div class="space_demo-box" style="min-width: 8rem;">항목 3</div><div class="space_demo-box" style="min-width: 8rem;">항목 4</div><div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
</Space>`,html:`<div class="space space_block space_wrap">
  <div style="min-width: 8rem;">항목 1</div><div style="min-width: 8rem;">항목 2</div><div style="min-width: 8rem;">항목 3</div><div style="min-width: 8rem;">항목 4</div><div style="min-width: 8rem;">항목 5</div>
</div>`},align:{body:`<Space block align="center" style="min-height: 5rem; padding: 1rem;">
  <div class="space_demo-box">align center</div><div class="space_demo-box" style="padding-block: 2rem;">높이 다름</div><div class="space_demo-box">align center</div>
</Space>
<Space block justify="between" style="padding: 1rem;"><div class="space_demo-box">justify between</div><div class="space_demo-box">양 끝</div></Space>`,html:`<div class="space space_block space_align-center" style="min-height: 5rem; padding: 1rem;"><div>align center</div><div style="padding-block: 2rem;">높이 다름</div><div>align center</div></div>
<div class="space space_block space_justify-between" style="padding: 1rem;"><div>justify between</div><div>양 끝</div></div>`},combo:{body:`<Space>
  <Button variant="outline" label="취소" />
  <Button variant="filled" color="primary" label="저장" />
  <Divider vertical />
  <Button variant="text" label="더보기" />
</Space>`,html:`<div class="space">
  <button class="btn btn_outline color_primary" type="button">취소</button>
  <button class="btn btn_filled color_primary" type="button">저장</button>
  <span class="divider divider_vertical" aria-hidden="true"></span>
  <button class="btn btn_text color_primary" type="button">더보기</button>
</div>`}},se=v(`Grid`,re),ce=v(`Flex`,ie),le=v(`Divider`,ae),ue=v(`Space`,oe)})))()}var w;function T(){return(T=e((()=>{w=`<!-- Grid 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. -->
<!-- grid 클래스에 열 수, 간격, 비율 등의 부모 변형 클래스를 함께 적용합니다. -->
<div class="grid grid_cols-3" data-component="Grid">
  <!-- 모든 자식은 부모가 만든 Grid 트랙에 자동으로 배치됩니다. -->
  <div class="grid_demo-cell">1</div>
  <div class="grid_demo-cell">2</div>
  <div class="grid_demo-cell">3</div>
</div>
`})))()}var E;function D(){return(D=e((()=>{E=`{# Grid 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. #}
{# grid · gridCol macro로 열·간격·span·자동 배치를 조합합니다. #}

{% macro grid(
  as = 'div',
  cols = '',
  colsMd = '',
  colsLg = '',
  gap = '',
  ratio = '',
  align = '',
  itemSpan = '',
  itemSpanMd = '',
  itemSpanLg = '',
  autoFit = false,
  autoFill = false,
  equalColumns = false,
  className = '',
  style = ''
) %}
{%- set tag = as -%}
{%- set gapPresets = ['sm', 'lg', 'none'] -%}
{%- set gapClass = (' grid_gap-' + gap) if gap in gapPresets else '' -%}
{%- set gapStyle = style -%}
{%- if gap and gap not in gapPresets -%}
  {%- set gapValue = (gap ~ 'rem') if gap is number else gap -%}
  {%- set gapStyle = ((style + '; ') if style else '') + '--grid-current-gap: ' + gapValue -%}
{%- endif -%}
{%- set classes =
  'grid'
  + ((' grid_cols-' + cols) if cols else '')
  + ((' grid_cols-md-' + colsMd) if colsMd else '')
  + ((' grid_cols-lg-' + colsLg) if colsLg else '')
  + gapClass
  + ((' grid_ratio-' + ratio) if ratio else '')
  + ((' grid_item-span-' + itemSpan) if itemSpan else '')
  + ((' grid_item-span-md-' + itemSpanMd) if itemSpanMd else '')
  + ((' grid_item-span-lg-' + itemSpanLg) if itemSpanLg else '')
  + (' grid_auto-fit' if autoFit else '')
  + (' grid_auto-fill' if autoFill else '')
  + (' grid_equal-columns' if equalColumns else '')
  + ((' grid_align-' + align) if align else '')
  + ((' ' + className) if className else '')
-%}
<{{ tag }} class="{{ classes }}" data-component="Grid"{% if gapStyle %} style="{{ gapStyle }}"{% endif %}>
  {%- if caller -%}
  {{ caller() }}
  {%- else -%}
  {{ content | default('') | safe }}
  {%- endif -%}
</{{ tag }}>
{% endmacro %}

{% macro gridCol(
  as = 'div',
  span = '',
  spanMd = '',
  spanLg = '',
  className = '',
  style = ''
) %}
{%- set tag = as -%}
{%- set classes =
  (('grid_col-span-' + span) if span else '')
  + ((' grid_col-span-md-' + spanMd) if spanMd else '')
  + ((' grid_col-span-lg-' + spanLg) if spanLg else '')
  + ((' ' + className) if className else '')
-%}
<{{ tag }} class="{{ classes | trim }}" data-component="GridCol"{% if style %} style="{{ style }}"{% endif %}>
  {%- if caller -%}
  {{ caller() }}
  {%- else -%}
  {{ content | default('') | safe }}
  {%- endif -%}
</{{ tag }}>
{% endmacro %}

{# include 시 기본 데모 한 번 렌더 (from import 시에는 실행되지 않음) #}
{% call grid(cols=3) %}
  <div class="grid_demo-cell">1</div>
  <div class="grid_demo-cell">2</div>
  <div class="grid_demo-cell">3</div>
{% endcall %}
`})))()}var O;function k(){return(k=e((()=>{O=`/**
 * Grid 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 12열 Grid에서 사용할 수 있도록 숫자를 1~12 범위로 제한합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const GAPS = ['', 'sm', 'lg', 'none']; // 지원하는 간격 이름입니다.
const RATIOS = ['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']; // 지원하는 열 비율입니다.
const ALIGNS = ['', 'center', 'end']; // 기본 stretch 외에 선택할 수 있는 정렬입니다.

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 --grid-current-gap으로 적용합니다. */
function resolveGap(gap) {
  if (GAPS.includes(gap)) {
    return { className: gap ? \`grid_gap-\${gap}\` : '', style: undefined };
  }
  if (gap === '' || gap == null) return { className: '', style: undefined };
  const value =
    typeof gap === 'number' && Number.isFinite(gap) && gap >= 0 ? \`\${gap}rem\` : String(gap).trim();
  if (!value) return { className: '', style: undefined };
  return { className: '', style: { '--grid-current-gap': value } };
}

export function Grid({
  as: Root = 'div', // Grid의 루트 요소 또는 컴포넌트를 지정합니다.

  cols, // 기본 화면의 균등 열 수를 1~12로 지정합니다.
  colsMd, // md 이상에서 적용할 균등 열 수입니다.
  colsLg, // lg 이상에서 적용할 균등 열 수입니다.
  columns, // cols의 이전 호환 이름입니다.
  columnsMd, // colsMd의 이전 호환 이름입니다.
  columnsLg, // colsLg의 이전 호환 이름입니다.

  gap = '', // sm · lg · none 프리셋, rem 숫자, 또는 CSS 길이입니다.
  ratio = '', // 미리 정의된 열 너비 비율을 선택합니다.
  align = '', // 교차축에서 항목의 정렬 방식을 지정합니다.

  itemSpan, // 모든 직계 자식에 적용할 기본 12열 span입니다.
  itemSpanMd, // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg, // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  autoFit = false, // 빈 트랙을 접으며 가능한 수만큼 열을 자동 배치합니다.
  autoFill = false, // 빈 트랙을 유지하며 가능한 수만큼 열을 자동 생성합니다.
  equalColumns = false, // 자식 수만큼 동일한 너비의 열을 생성합니다.

  children = 'Grid', // Grid 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  style, // 인라인 스타일입니다. 수치 gap은 CSS 변수와 병합합니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
  const resolvedCols = cols ?? columns; // 기본 구간의 최종 열 수입니다.
  const resolvedColsMd = colsMd ?? columnsMd; // md 구간의 최종 열 수입니다.
  const resolvedColsLg = colsLg ?? columnsLg; // lg 구간의 최종 열 수입니다.
  const resolvedGap = resolveGap(gap); // 프리셋 클래스 또는 수치 CSS 변수입니다.

  // 기본·반응형 열, 간격, 비율, span, 자동 배치, 정렬 클래스를 조합합니다.
  const classes = [
    'grid', // CSS Grid 레이아웃을 활성화하는 필수 클래스입니다.
    range(resolvedCols) && \`grid_cols-\${range(resolvedCols)}\`, // 기본 균등 열 수입니다.
    range(resolvedColsMd) && \`grid_cols-md-\${range(resolvedColsMd)}\`, // md 이상 균등 열 수입니다.
    range(resolvedColsLg) && \`grid_cols-lg-\${range(resolvedColsLg)}\`, // lg 이상 균등 열 수입니다.

    resolvedGap.className, // 검증된 간격 프리셋 클래스입니다.
    RATIOS.includes(ratio) && ratio && \`grid_ratio-\${ratio}\`, // 검증된 열 비율 클래스입니다.

    range(itemSpan) && \`grid_item-span-\${range(itemSpan)}\`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && \`grid_item-span-md-\${range(itemSpanMd)}\`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && \`grid_item-span-lg-\${range(itemSpanLg)}\`, // 모든 자식의 lg span입니다.

    autoFit && 'grid_auto-fit', // 남는 빈 트랙을 접는 자동 열 모드입니다.
    autoFill && 'grid_auto-fill', // 남는 빈 트랙을 유지하는 자동 열 모드입니다.
    equalColumns && 'grid_equal-columns', // 자식 수 기준의 동일 너비 열 모드입니다.

    ALIGNS.includes(align) && align && \`grid_align-\${align}\`, // 검증된 항목 정렬 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  const rootStyle =
    resolvedGap.style || style ? { ...style, ...resolvedGap.style } : undefined;

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="Grid" style={rootStyle} {...props}>
      {children}
    </Root>
  );
}

export default Grid;
`})))()}var A;function j(){return(j=e((()=>{A=`/**
 * GridCol 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 개별 열의 span 값을 12열 범위로 제한합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

export function GridCol({
  as: Root = 'div', // GridCol의 루트 요소 또는 컴포넌트를 지정합니다.

  span, // 기본 화면에서 차지할 열 수를 1~12로 지정합니다.
  spanMd, // md 이상에서 차지할 열 수입니다.
  spanLg, // lg 이상에서 차지할 열 수입니다.

  children, // GridCol 내부에 배치할 콘텐츠입니다.
  className = '', // span 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 기본·md·lg 구간의 개별 span 클래스와 사용자 클래스를 조합합니다.
  const classes = [
    range(span) && \`grid_col-span-\${range(span)}\`, // 기본 구간에서 차지할 열 수입니다.
    range(spanMd) && \`grid_col-span-md-\${range(spanMd)}\`, // md 이상에서 차지할 열 수입니다.
    range(spanLg) && \`grid_col-span-lg-\${range(spanLg)}\`, // lg 이상에서 차지할 열 수입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="GridCol" {...props}>
      {children}
    </Root>
  );
}

export default GridCol;
`})))()}var M;function N(){return(N=e((()=>{M=`<!--
  Grid 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Grid 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmGrid', inheritAttrs: false });

// 열, 간격, 비율, span, 자동 배치와 정렬 방식을 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Grid의 루트 요소 또는 컴포넌트를 지정합니다.

  cols: [String, Number], // 기본 화면의 균등 열 수를 1~12로 지정합니다.
  colsMd: [String, Number], // md 이상에서 적용할 균등 열 수입니다.
  colsLg: [String, Number], // lg 이상에서 적용할 균등 열 수입니다.
  columns: [String, Number], // cols의 이전 호환 이름입니다.
  columnsMd: [String, Number], // colsMd의 이전 호환 이름입니다.
  columnsLg: [String, Number], // colsLg의 이전 호환 이름입니다.

  gap: { type: [String, Number], default: '' }, // sm · lg · none 프리셋, rem 숫자, 또는 CSS 길이입니다.
  ratio: { type: String, default: '' }, // 미리 정의된 열 너비 비율을 선택합니다.
  align: { type: String, default: '' }, // 교차축에서 항목의 정렬 방식을 지정합니다.

  itemSpan: [String, Number], // 모든 직계 자식에 적용할 기본 12열 span입니다.
  itemSpanMd: [String, Number], // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg: [String, Number], // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  autoFit: Boolean, // 빈 트랙을 접으며 가능한 수만큼 열을 자동 배치합니다.
  autoFill: Boolean, // 빈 트랙을 유지하며 가능한 수만큼 열을 자동 생성합니다.
  equalColumns: Boolean, // 자식 수만큼 동일한 너비의 열을 생성합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 숫자와 문자열 prop이 지원 범위를 벗어나 CSS 클래스로 전달되지 않도록 검증합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const gaps = ['', 'sm', 'lg', 'none']; // 지원하는 간격 이름입니다.
const ratios = ['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']; // 지원하는 열 비율입니다.
const aligns = ['', 'center', 'end']; // 기본 stretch 외에 선택할 수 있는 정렬입니다.

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 --grid-current-gap으로 적용합니다. */
function resolveGap(gap) {
  if (gaps.includes(gap)) {
    return { className: gap ? \`grid_gap-\${gap}\` : '', style: undefined };
  }
  if (gap === '' || gap == null) return { className: '', style: undefined };
  const value =
    typeof gap === 'number' && Number.isFinite(gap) && gap >= 0 ? \`\${gap}rem\` : String(gap).trim();
  if (!value) return { className: '', style: undefined };
  return { className: '', style: { '--grid-current-gap': value } };
}

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
const resolvedCols = computed(() => props.cols ?? props.columns); // 기본 구간의 최종 열 수입니다.
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd); // md 구간의 최종 열 수입니다.
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg); // lg 구간의 최종 열 수입니다.
const resolvedGap = computed(() => resolveGap(props.gap)); // 프리셋 클래스 또는 수치 CSS 변수입니다.

// 상태에 맞는 기본·반응형 Grid 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'grid', // CSS Grid 레이아웃을 활성화하는 필수 클래스입니다.
    range(resolvedCols.value) && \`grid_cols-\${range(resolvedCols.value)}\`, // 기본 균등 열 수입니다.
    range(resolvedColsMd.value) && \`grid_cols-md-\${range(resolvedColsMd.value)}\`, // md 이상 균등 열 수입니다.
    range(resolvedColsLg.value) && \`grid_cols-lg-\${range(resolvedColsLg.value)}\`, // lg 이상 균등 열 수입니다.

    resolvedGap.value.className, // 검증된 간격 프리셋 클래스입니다.
    ratios.includes(props.ratio) && props.ratio && \`grid_ratio-\${props.ratio}\`, // 검증된 열 비율 클래스입니다.

    range(props.itemSpan) && \`grid_item-span-\${range(props.itemSpan)}\`, // 모든 자식의 기본 span입니다.
    range(props.itemSpanMd) && \`grid_item-span-md-\${range(props.itemSpanMd)}\`, // 모든 자식의 md span입니다.
    range(props.itemSpanLg) && \`grid_item-span-lg-\${range(props.itemSpanLg)}\`, // 모든 자식의 lg span입니다.

    props.autoFit && 'grid_auto-fit', // 남는 빈 트랙을 접는 자동 열 모드입니다.
    props.autoFill && 'grid_auto-fill', // 남는 빈 트랙을 유지하는 자동 열 모드입니다.
    props.equalColumns && 'grid_equal-columns', // 자식 수 기준의 동일 너비 열 모드입니다.

    aligns.includes(props.align) && props.align && \`grid_align-\${props.align}\`, // 검증된 항목 정렬 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // false, 빈 문자열 등 적용되지 않는 항목을 제거합니다.

// 수치 gap CSS 변수와 전달된 style을 병합합니다.
const rootStyle = computed(() => {
  const gapStyle = resolvedGap.value.style;
  const attrStyle = typeof attrs.style === 'object' && attrs.style ? attrs.style : {};
  if (!gapStyle && !Object.keys(attrStyle).length) return undefined;
  return { ...attrStyle, ...gapStyle };
});

// class·style은 별도 바인딩하므로 fallthrough에서 제외합니다.
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component
    :is="as"
    v-bind="fallthroughAttrs"
    :class="classes"
    :style="rootStyle"
    data-component="Grid"
  >
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Grid</slot>
  </component>
</template>
`})))()}var P;function F(){return(F=e((()=>{P=`<!--
  GridCol 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 GridCol 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmGridCol', inheritAttrs: false });

// 루트 요소와 기본·md·lg 구간의 개별 span 값을 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // GridCol의 루트 요소 또는 컴포넌트를 지정합니다.

  span: [String, Number], // 기본 화면에서 차지할 열 수를 1~12로 지정합니다.
  spanMd: [String, Number], // md 이상에서 차지할 열 수입니다.
  spanLg: [String, Number], // lg 이상에서 차지할 열 수입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집하고 span을 12열 범위로 제한합니다.
const attrs = useAttrs();
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 반응형 span 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    range(props.span) && \`grid_col-span-\${range(props.span)}\`, // 기본 구간에서 차지할 열 수입니다.
    range(props.spanMd) && \`grid_col-span-md-\${range(props.spanMd)}\`, // md 이상에서 차지할 열 수입니다.
    range(props.spanLg) && \`grid_col-span-lg-\${range(props.spanLg)}\`, // lg 이상에서 차지할 열 수입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
<\/script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="GridCol">
    <!-- 호출 위치에서 전달한 GridCol 콘텐츠를 렌더링합니다. -->
    <slot />
  </component>
</template>
`})))()}var I;function L(){return(L=e((()=>{I=`<!-- Flex 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. -->
<!-- flex 클래스와 기본 행 방향 클래스를 루트에 적용합니다. -->
<div class="flex flex_row" data-component="Flex">
  <!-- 직계 자식은 Flex 항목으로 한 방향에 배치됩니다. -->
  <div class="flex_demo-cell">1</div>
  <div class="flex_demo-cell">2</div>
  <div class="flex_demo-cell">3</div>
</div>
`})))()}var R;function z(){return(z=e((()=>{R=`{# Flex 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. #}
{# flex · flexItem macro로 방향·간격·span·정렬을 조합합니다. #}

{% macro flex(
  as = 'div',
  direction = 'row',
  directionMd = '',
  directionLg = '',
  wrap = false,
  cols = '',
  colsMd = '',
  colsLg = '',
  gap = '',
  ratio = '',
  align = 'stretch',
  justify = '',
  itemSpan = '',
  itemSpanMd = '',
  itemSpanLg = '',
  equal = false,
  autoFit = false,
  className = '',
  style = ''
) %}
{%- set tag = as -%}
{%- set gapPresets = ['sm', 'lg', 'none'] -%}
{%- set gapClass = (' flex_gap-' + gap) if gap in gapPresets else '' -%}
{%- set gapStyle = style -%}
{%- if gap and gap not in gapPresets -%}
  {%- set gapValue = (gap ~ 'rem') if gap is number else gap -%}
  {%- set gapStyle = ((style + '; ') if style else '') + '--flex-current-gap: ' + gapValue -%}
{%- endif -%}
{%- set dirBase = 'col' if direction in ['column', 'col'] else direction -%}
{%- set dirMd = 'col' if directionMd in ['column', 'col'] else directionMd -%}
{%- set dirLg = 'col' if directionLg in ['column', 'col'] else directionLg -%}
{%- set classes =
  'flex'
  + ((' flex_' + dirBase) if dirBase else '')
  + ((' flex_' + dirMd + '-md') if dirMd else '')
  + ((' flex_' + dirLg + '-lg') if dirLg else '')
  + (' flex_wrap' if wrap else '')
  + gapClass
  + ((' flex_cols-' + cols) if cols else '')
  + ((' flex_cols-md-' + colsMd) if colsMd else '')
  + ((' flex_cols-lg-' + colsLg) if colsLg else '')
  + ((' flex_ratio-' + ratio) if ratio else '')
  + ((' flex_items-span-' + itemSpan) if itemSpan else '')
  + ((' flex_items-span-md-' + itemSpanMd) if itemSpanMd else '')
  + ((' flex_items-span-lg-' + itemSpanLg) if itemSpanLg else '')
  + (' flex_equal' if equal else '')
  + (' flex_auto-fit' if autoFit else '')
  + ((' flex_align-' + align) if align else '')
  + ((' flex_justify-' + justify) if justify else '')
  + ((' ' + className) if className else '')
-%}
<{{ tag }} class="{{ classes }}" data-component="Flex"{% if gapStyle %} style="{{ gapStyle }}"{% endif %}>
  {%- if caller -%}
  {{ caller() }}
  {%- else -%}
  {{ content | default('') | safe }}
  {%- endif -%}
</{{ tag }}>
{% endmacro %}

{% macro flexItem(
  as = 'div',
  span = '',
  spanMd = '',
  spanLg = '',
  grow = false,
  growFactor = 1,
  fit = false,
  align = '',
  order = '',
  className = '',
  style = ''
) %}
{%- set tag = as -%}
{%- set growClass = 'flex_grow-2' if grow and growFactor == 2 else ('flex_grow' if grow else '') -%}
{%- set classes =
  (('flex_item-span-' + span) if span else '')
  + ((' flex_item-span-md-' + spanMd) if spanMd else '')
  + ((' flex_item-span-lg-' + spanLg) if spanLg else '')
  + ((' ' + growClass) if growClass else '')
  + (' flex_fit' if fit else '')
  + ((' flex_self-' + align) if align else '')
  + ((' flex_order-' + order) if order else '')
  + ((' ' + className) if className else '')
-%}
<{{ tag }} class="{{ classes | trim }}" data-component="FlexItem"{% if style %} style="{{ style }}"{% endif %}>
  {%- if caller -%}
  {{ caller() }}
  {%- else -%}
  {{ content | default('') | safe }}
  {%- endif -%}
</{{ tag }}>
{% endmacro %}

{# include 시 기본 데모 한 번 렌더 (from import 시에는 실행되지 않음) #}
{% call flex(cols=3, gap='sm') %}
  <div class="flex_demo-cell">1</div>
  <div class="flex_demo-cell">2</div>
  <div class="flex_demo-cell">3</div>
{% endcall %}
`})))()}var B;function V(){return(V=e((()=>{B=`/**
 * Flex 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 12단위 Flex 너비와 순서에 사용할 숫자를 1~12 범위로 제한합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const DIRECTIONS = ['', 'row', 'col', 'column']; // 지원하는 배치 방향입니다.
const GAPS = ['', 'sm', 'lg', 'none']; // 지원하는 항목 간격입니다.
const RATIOS = ['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']; // 지원하는 항목 너비 비율입니다.
const ALIGNS = ['', 'start', 'center', 'end', 'stretch', 'baseline']; // 지원하는 교차축 정렬입니다.
const JUSTIFIES = ['', 'start', 'center', 'end', 'between', 'around', 'evenly']; // 지원하는 주축 정렬입니다.

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 --flex-current-gap으로 적용합니다. */
function resolveGap(gap) {
  if (GAPS.includes(gap)) {
    return { className: gap ? \`flex_gap-\${gap}\` : '', style: undefined };
  }
  if (gap === '' || gap == null) return { className: '', style: undefined };
  const value =
    typeof gap === 'number' && Number.isFinite(gap) && gap >= 0 ? \`\${gap}rem\` : String(gap).trim();
  if (!value) return { className: '', style: undefined };
  return { className: '', style: { '--flex-current-gap': value } };
}

export function Flex({
  as: Root = 'div', // Flex의 루트 요소 또는 컴포넌트를 지정합니다.

  direction = 'row', // 기본 화면의 배치 방향을 지정합니다.
  directionMd = '', // md 이상에서 적용할 배치 방향입니다.
  directionLg = '', // lg 이상에서 적용할 배치 방향입니다.
  wrap = false, // 항목이 한 줄을 넘으면 다음 줄로 배치합니다.

  cols, // 기본 화면에서 한 행에 배치할 균등 항목 수를 지정합니다.
  colsMd, // md 이상에서 적용할 균등 항목 수입니다.
  colsLg, // lg 이상에서 적용할 균등 항목 수입니다.
  columns, // cols의 이전 호환 이름입니다.
  columnsMd, // colsMd의 이전 호환 이름입니다.
  columnsLg, // colsLg의 이전 호환 이름입니다.

  gap = '', // sm · lg · none 프리셋, rem 숫자, 또는 CSS 길이입니다.
  ratio = '', // 미리 정의된 항목 너비 비율을 선택합니다.
  align = 'stretch', // 교차축에서 항목의 정렬 방식을 지정합니다.
  justify = '', // 주축에서 항목을 배치하는 방식을 지정합니다.

  itemSpan, // 모든 직계 자식에 적용할 기본 12단위 span입니다.
  itemSpanMd, // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg, // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  equal = false, // 모든 직계 자식을 동일한 너비로 확장합니다.
  autoFit = false, // 최소 너비를 기준으로 가능한 수만큼 항목을 자동 배치합니다.

  children = 'Flex', // Flex 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  style, // 인라인 스타일입니다. 수치 gap은 CSS 변수와 병합합니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // column 이름을 CSS 클래스에서 사용하는 col로 변환하고 반응형 접미사를 붙입니다.
  const directionClass = (value, breakpoint = '') =>
    value && \`flex_\${value === 'column' ? 'col' : value}\${breakpoint}\`;

  // columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
  const resolvedCols = cols ?? columns; // 기본 구간의 최종 항목 수입니다.
  const resolvedColsMd = colsMd ?? columnsMd; // md 구간의 최종 항목 수입니다.
  const resolvedColsLg = colsLg ?? columnsLg; // lg 구간의 최종 항목 수입니다.
  const resolvedGap = resolveGap(gap); // 프리셋 클래스 또는 수치 CSS 변수입니다.

  // 방향, 줄바꿈, 크기, 간격과 정렬 상태를 공통 CSS 클래스로 조합합니다.
  const classes = [
    'flex', // Flexbox 레이아웃을 활성화하는 필수 클래스입니다.
    DIRECTIONS.includes(direction) && directionClass(direction), // 기본 배치 방향입니다.
    DIRECTIONS.includes(directionMd) && directionClass(directionMd, '-md'), // md 이상 배치 방향입니다.
    DIRECTIONS.includes(directionLg) && directionClass(directionLg, '-lg'), // lg 이상 배치 방향입니다.
    wrap && 'flex_wrap', // 여러 줄 배치를 허용합니다.

    resolvedGap.className, // 검증된 간격 프리셋 클래스입니다.
    range(resolvedCols) && \`flex_cols-\${range(resolvedCols)}\`, // 기본 균등 항목 수입니다.
    range(resolvedColsMd) && \`flex_cols-md-\${range(resolvedColsMd)}\`, // md 이상 균등 항목 수입니다.
    range(resolvedColsLg) && \`flex_cols-lg-\${range(resolvedColsLg)}\`, // lg 이상 균등 항목 수입니다.
    RATIOS.includes(ratio) && ratio && \`flex_ratio-\${ratio}\`, // 검증된 항목 너비 비율입니다.

    range(itemSpan) && \`flex_items-span-\${range(itemSpan)}\`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && \`flex_items-span-md-\${range(itemSpanMd)}\`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && \`flex_items-span-lg-\${range(itemSpanLg)}\`, // 모든 자식의 lg span입니다.
    equal && 'flex_equal', // 모든 자식을 같은 너비로 확장합니다.
    autoFit && 'flex_auto-fit', // 최소 너비 기반 자동 배치를 적용합니다.

    ALIGNS.includes(align) && align && \`flex_align-\${align}\`, // 검증된 교차축 정렬입니다.
    JUSTIFIES.includes(justify) && justify && \`flex_justify-\${justify}\`, // 검증된 주축 정렬입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  const rootStyle =
    resolvedGap.style || style ? { ...style, ...resolvedGap.style } : undefined;

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="Flex" style={rootStyle} {...props}>
      {children}
    </Root>
  );
}

export default Flex;
`})))()}var H;function U(){return(U=e((()=>{H=`/**
 * FlexItem 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// FlexItem의 span과 표시 순서를 1~12 범위로 제한합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 개별 교차축 정렬만 CSS 클래스로 전달합니다.
const ALIGNS = ['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline'];

export function FlexItem({
  as: Root = 'div', // FlexItem의 루트 요소 또는 컴포넌트를 지정합니다.

  span, // 기본 화면에서 차지할 12단위 너비를 지정합니다.
  spanMd, // md 이상에서 차지할 12단위 너비입니다.
  spanLg, // lg 이상에서 차지할 12단위 너비입니다.

  grow = false, // 남는 공간을 채우도록 항목을 확장합니다.
  growFactor = 1, // grow 사용 시 1 또는 2의 확장 비율을 지정합니다.
  fit = false, // 콘텐츠 너비를 유지하고 불필요한 확장을 막습니다.
  align = '', // 이 항목만 적용할 교차축 정렬을 지정합니다.
  order, // 화면에 표시할 순서를 1~12로 지정합니다.

  children, // FlexItem 내부에 배치할 콘텐츠입니다.
  className = '', // 상태 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // grow가 켜진 경우 growFactor가 2일 때만 두 배 확장 클래스를 사용합니다.
  const resolvedGrow = grow && Number(growFactor) === 2 ? 'flex_grow-2' : grow ? 'flex_grow' : '';

  // 반응형 span, 크기, 정렬, 순서와 사용자 정의 클래스를 조합합니다.
  const classes = [
    range(span) && \`flex_item-span-\${range(span)}\`, // 기본 구간에서 차지할 너비입니다.
    range(spanMd) && \`flex_item-span-md-\${range(spanMd)}\`, // md 이상에서 차지할 너비입니다.
    range(spanLg) && \`flex_item-span-lg-\${range(spanLg)}\`, // lg 이상에서 차지할 너비입니다.

    resolvedGrow, // 남는 공간을 1배 또는 2배 비율로 채웁니다.
    fit && 'flex_fit', // 콘텐츠 기준 너비를 유지합니다.
    ALIGNS.includes(align) && align && \`flex_self-\${align}\`, // 검증된 개별 교차축 정렬입니다.
    range(order) && \`flex_order-\${range(order)}\`, // 검증된 화면 표시 순서입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="FlexItem" {...props}>
      {children}
    </Root>
  );
}

export default FlexItem;
`})))()}var de;function fe(){return(fe=e((()=>{de=`<!--
  Flex 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Flex 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFlex', inheritAttrs: false });

// 방향, 줄바꿈, 크기, 간격과 정렬 방식을 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Flex의 루트 요소 또는 컴포넌트를 지정합니다.

  direction: { type: String, default: 'row' }, // 기본 화면의 배치 방향을 지정합니다.
  directionMd: { type: String, default: '' }, // md 이상에서 적용할 배치 방향입니다.
  directionLg: { type: String, default: '' }, // lg 이상에서 적용할 배치 방향입니다.
  wrap: Boolean, // 항목이 한 줄을 넘으면 다음 줄로 배치합니다.

  cols: [String, Number], // 기본 화면에서 한 행에 배치할 균등 항목 수를 지정합니다.
  colsMd: [String, Number], // md 이상에서 적용할 균등 항목 수입니다.
  colsLg: [String, Number], // lg 이상에서 적용할 균등 항목 수입니다.
  columns: [String, Number], // cols의 이전 호환 이름입니다.
  columnsMd: [String, Number], // colsMd의 이전 호환 이름입니다.
  columnsLg: [String, Number], // colsLg의 이전 호환 이름입니다.

  gap: { type: [String, Number], default: '' }, // sm · lg · none 프리셋, rem 숫자, 또는 CSS 길이입니다.
  ratio: { type: String, default: '' }, // 미리 정의된 항목 너비 비율을 선택합니다.
  align: { type: String, default: 'stretch' }, // 교차축에서 항목의 정렬 방식을 지정합니다.
  justify: { type: String, default: '' }, // 주축에서 항목을 배치하는 방식을 지정합니다.

  itemSpan: [String, Number], // 모든 직계 자식에 적용할 기본 12단위 span입니다.
  itemSpanMd: [String, Number], // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg: [String, Number], // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  equal: Boolean, // 모든 직계 자식을 동일한 너비로 확장합니다.
  autoFit: Boolean, // 최소 너비를 기준으로 가능한 수만큼 항목을 자동 배치합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 숫자와 문자열 prop이 지원 범위를 벗어나 CSS 클래스로 전달되지 않도록 검증합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const directions = ['', 'row', 'col', 'column']; // 지원하는 배치 방향입니다.
const gaps = ['', 'sm', 'lg', 'none']; // 지원하는 항목 간격입니다.
const ratios = ['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']; // 지원하는 항목 너비 비율입니다.
const aligns = ['', 'start', 'center', 'end', 'stretch', 'baseline']; // 지원하는 교차축 정렬입니다.
const justifies = ['', 'start', 'center', 'end', 'between', 'around', 'evenly']; // 지원하는 주축 정렬입니다.

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 --flex-current-gap으로 적용합니다. */
function resolveGap(gap) {
  if (gaps.includes(gap)) {
    return { className: gap ? \`flex_gap-\${gap}\` : '', style: undefined };
  }
  if (gap === '' || gap == null) return { className: '', style: undefined };
  const value =
    typeof gap === 'number' && Number.isFinite(gap) && gap >= 0 ? \`\${gap}rem\` : String(gap).trim();
  if (!value) return { className: '', style: undefined };
  return { className: '', style: { '--flex-current-gap': value } };
}

// column 이름을 CSS 클래스에서 사용하는 col로 변환하고 반응형 접미사를 붙입니다.
const directionClass = (value, breakpoint = '') =>
  value && \`flex_\${value === 'column' ? 'col' : value}\${breakpoint}\`;

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
const resolvedCols = computed(() => props.cols ?? props.columns); // 기본 구간의 최종 항목 수입니다.
const resolvedColsMd = computed(() => props.colsMd ?? props.columnsMd); // md 구간의 최종 항목 수입니다.
const resolvedColsLg = computed(() => props.colsLg ?? props.columnsLg); // lg 구간의 최종 항목 수입니다.
const resolvedGap = computed(() => resolveGap(props.gap)); // 프리셋 클래스 또는 수치 CSS 변수입니다.

// 방향, 줄바꿈, 크기, 간격과 정렬 상태를 공통 CSS 클래스로 조합합니다.
const classes = computed(() =>
  [
    'flex', // Flexbox 레이아웃을 활성화하는 필수 클래스입니다.
    directions.includes(props.direction) && directionClass(props.direction), // 기본 배치 방향입니다.
    directions.includes(props.directionMd) && directionClass(props.directionMd, '-md'), // md 이상 배치 방향입니다.
    directions.includes(props.directionLg) && directionClass(props.directionLg, '-lg'), // lg 이상 배치 방향입니다.
    props.wrap && 'flex_wrap', // 여러 줄 배치를 허용합니다.

    resolvedGap.value.className, // 검증된 간격 프리셋 클래스입니다.
    range(resolvedCols.value) && \`flex_cols-\${range(resolvedCols.value)}\`, // 기본 균등 항목 수입니다.
    range(resolvedColsMd.value) && \`flex_cols-md-\${range(resolvedColsMd.value)}\`, // md 이상 균등 항목 수입니다.
    range(resolvedColsLg.value) && \`flex_cols-lg-\${range(resolvedColsLg.value)}\`, // lg 이상 균등 항목 수입니다.
    ratios.includes(props.ratio) && props.ratio && \`flex_ratio-\${props.ratio}\`, // 검증된 항목 너비 비율입니다.

    range(props.itemSpan) && \`flex_items-span-\${range(props.itemSpan)}\`, // 모든 자식의 기본 span입니다.
    range(props.itemSpanMd) && \`flex_items-span-md-\${range(props.itemSpanMd)}\`, // 모든 자식의 md span입니다.
    range(props.itemSpanLg) && \`flex_items-span-lg-\${range(props.itemSpanLg)}\`, // 모든 자식의 lg span입니다.
    props.equal && 'flex_equal', // 모든 자식을 같은 너비로 확장합니다.
    props.autoFit && 'flex_auto-fit', // 최소 너비 기반 자동 배치를 적용합니다.

    aligns.includes(props.align) && props.align && \`flex_align-\${props.align}\`, // 검증된 교차축 정렬입니다.
    justifies.includes(props.justify) && props.justify && \`flex_justify-\${props.justify}\`, // 검증된 주축 정렬입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // false, 빈 문자열 등 적용되지 않는 항목을 제거합니다.

// 수치 gap CSS 변수와 전달된 style을 병합합니다.
const rootStyle = computed(() => {
  const gapStyle = resolvedGap.value.style;
  const attrStyle = typeof attrs.style === 'object' && attrs.style ? attrs.style : {};
  if (!gapStyle && !Object.keys(attrStyle).length) return undefined;
  return { ...attrStyle, ...gapStyle };
});

// class·style은 별도 바인딩하므로 fallthrough에서 제외합니다.
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component
    :is="as"
    v-bind="fallthroughAttrs"
    :class="classes"
    :style="rootStyle"
    data-component="Flex"
  >
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Flex</slot>
  </component>
</template>
`})))()}var pe;function me(){return(me=e((()=>{pe=`<!--
  FlexItem 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 FlexItem 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmFlexItem', inheritAttrs: false });

// 루트 요소, 반응형 너비, 확장, 정렬과 표시 순서를 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // FlexItem의 루트 요소 또는 컴포넌트를 지정합니다.

  span: [String, Number], // 기본 화면에서 차지할 12단위 너비를 지정합니다.
  spanMd: [String, Number], // md 이상에서 차지할 12단위 너비입니다.
  spanLg: [String, Number], // lg 이상에서 차지할 12단위 너비입니다.

  grow: Boolean, // 남는 공간을 채우도록 항목을 확장합니다.
  growFactor: { type: [String, Number], default: 1 }, // grow 사용 시 1 또는 2의 확장 비율을 지정합니다.
  fit: Boolean, // 콘텐츠 너비를 유지하고 불필요한 확장을 막습니다.
  align: { type: String, default: '' }, // 이 항목만 적용할 교차축 정렬을 지정합니다.
  order: [String, Number], // 화면에 표시할 순서를 1~12로 지정합니다.
});

// 선언하지 않은 속성을 수집하고 숫자 prop을 1~12 범위로 제한합니다.
const attrs = useAttrs();
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 개별 교차축 정렬만 CSS 클래스로 전달합니다.
const aligns = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);

// grow가 켜진 경우 growFactor가 2일 때만 두 배 확장 클래스를 사용합니다.
const resolvedGrow = computed(() =>
  props.grow && Number(props.growFactor) === 2 ? 'flex_grow-2' : props.grow ? 'flex_grow' : '',
);

// 반응형 span, 크기, 정렬, 순서와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    range(props.span) && \`flex_item-span-\${range(props.span)}\`, // 기본 구간에서 차지할 너비입니다.
    range(props.spanMd) && \`flex_item-span-md-\${range(props.spanMd)}\`, // md 이상에서 차지할 너비입니다.
    range(props.spanLg) && \`flex_item-span-lg-\${range(props.spanLg)}\`, // lg 이상에서 차지할 너비입니다.

    resolvedGrow.value, // 남는 공간을 1배 또는 2배 비율로 채웁니다.
    props.fit && 'flex_fit', // 콘텐츠 기준 너비를 유지합니다.
    aligns.has(props.align) && props.align && \`flex_self-\${props.align}\`, // 검증된 개별 교차축 정렬입니다.
    range(props.order) && \`flex_order-\${range(props.order)}\`, // 검증된 화면 표시 순서입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
<\/script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="FlexItem">
    <!-- 호출 위치에서 전달한 FlexItem 콘텐츠를 렌더링합니다. -->
    <slot />
  </component>
</template>
`})))()}var he;function ge(){return(ge=e((()=>{he=`<!-- Divider 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. -->
<!-- 레이블이 없는 의미 있는 수평 구분선은 hr에 divider 클래스를 적용합니다. -->
<hr class="divider" data-component="Divider" />

<!-- 점선은 divider_dashed를 함께 지정합니다. -->
<hr class="divider divider_dashed" data-component="Divider" />

<!-- 간격·두께는 divider_margin-* · divider_thickness-* 또는 CSS 변수로 조절합니다. -->
<hr class="divider divider_margin-sm divider_thickness-lg" data-component="Divider" />
<hr class="divider" data-component="Divider" style="--divider-current-margin-y: 1.5rem; --divider-current-thickness: 3px;" />

<!-- 레이블형 구분선은 div에 텍스트를 넣고 양쪽 선은 CSS로 그립니다. -->
<div class="divider" data-component="Divider">섹션 제목</div>

<!-- plain은 레이블 굵기를 낮추고, orient는 레이블 위치를 바꿉니다. -->
<div class="divider divider_plain divider_orient-left" data-component="Divider">왼쪽 보조 설명</div>

<!-- 세로 구분선은 좌·우 간격·두께·길이를 함께 지정할 수 있습니다. -->
<span class="divider divider_vertical divider_margin-lg divider_thickness-sm divider_height-md" data-component="Divider" aria-hidden="true"></span>
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`{# Divider 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. #}
{# divider macro로 선·점선·레이블·세로·간격·두께·길이를 조합합니다. #}

{% macro divider(
  as = '',
  tag = 'auto',
  vertical = false,
  dashed = false,
  plain = false,
  orient = '',
  orientation = '',
  marginY = '',
  thickness = '',
  height = '',
  label = '',
  className = '',
  style = ''
) %}
{%- set resolvedOrient = orient if orient else orientation -%}
{%- if caller -%}
  {%- set content = caller() -%}
{%- else -%}
  {%- set content = label -%}
{%- endif -%}
{%- if as -%}
  {%- set root = as -%}
{%- elif tag != 'auto' -%}
  {%- set root = tag -%}
{%- elif vertical -%}
  {%- set root = 'span' -%}
{%- elif content -%}
  {%- set root = 'div' -%}
{%- else -%}
  {%- set root = 'hr' -%}
{%- endif -%}
{%- set marginPresets = ['xs', 'sm', 'md', 'lg', 'xl', 'none'] -%}
{%- set thicknessPresets = ['xs', 'sm', 'lg', 'xl', 'none'] -%}
{%- set heightPresets = ['xs', 'sm', 'md', 'lg', 'xl'] -%}
{%- set marginClass = (' divider_margin-' + marginY) if marginY in marginPresets else '' -%}
{%- set thicknessClass = (' divider_thickness-' + thickness) if thickness in thicknessPresets else '' -%}
{%- set heightClass = (' divider_height-' + height) if vertical and height in heightPresets else '' -%}
{%- set rootStyle = style -%}
{%- if marginY and marginY not in marginPresets -%}
  {%- set marginValue = (marginY ~ 'rem') if marginY is number else marginY -%}
  {%- set marginVar = '--divider-current-margin-x' if vertical else '--divider-current-margin-y' -%}
  {%- set rootStyle = ((rootStyle + '; ') if rootStyle else '') + marginVar + ': ' + marginValue -%}
{%- endif -%}
{%- if thickness and thickness not in ['', 'md'] and thickness not in thicknessPresets -%}
  {%- set thicknessValue = (thickness ~ 'rem') if thickness is number else thickness -%}
  {%- set rootStyle = ((rootStyle + '; ') if rootStyle else '') + '--divider-current-thickness: ' + thicknessValue -%}
{%- endif -%}
{%- if vertical and height and height not in heightPresets -%}
  {%- set heightValue = (height ~ 'rem') if height is number else height -%}
  {%- set rootStyle = ((rootStyle + '; ') if rootStyle else '') + '--divider-current-height: ' + heightValue -%}
{%- endif -%}
{%- set classes =
  'divider'
  + (' divider_vertical' if vertical else '')
  + (' divider_dashed' if dashed else '')
  + (' divider_plain' if plain else '')
  + ((' divider_orient-' + resolvedOrient) if resolvedOrient else '')
  + marginClass
  + thicknessClass
  + heightClass
  + ((' ' + className) if className else '')
-%}
{%- if root == 'hr' -%}
<hr class="{{ classes }}" data-component="Divider"{% if rootStyle %} style="{{ rootStyle }}"{% endif %} />
{%- else -%}
<{{ root }} class="{{ classes }}" data-component="Divider"{% if vertical %} aria-hidden="true"{% endif %}{% if rootStyle %} style="{{ rootStyle }}"{% endif %}>{% if not vertical %}{{ content | safe }}{% endif %}</{{ root }}>
{%- endif -%}
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{{ divider() }}
{{ divider(dashed=true) }}
{{ divider(label='섹션 제목') }}
{{ divider(plain=true, orient='left', label='왼쪽 보조 설명') }}
{{ divider(vertical=true) }}
`})))()}var ye;function be(){return(be=e((()=>{ye=`/**
 * Divider 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 레이블 정렬과 루트 태그로 허용하는 값만 CSS·요소 선택에 반영합니다.
const ORIENTATIONS = new Set(['', 'left', 'right']); // 지원하는 레이블 위치입니다.
const TAGS = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 모드입니다.
const MARGINS = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'none']; // 간격 프리셋입니다.
const THICKNESSES = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'none']; // 두께 프리셋입니다.
const HEIGHTS = ['', 'xs', 'sm', 'md', 'lg', 'xl']; // 세로 길이 프리셋입니다.

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 CSS 변수로 적용합니다. */
function resolveLength(value, { presets, classPrefix, cssVar, skip = ['', 'md'] }) {
  if (presets.includes(value)) {
    return {
      className: value && !skip.includes(value) ? \`\${classPrefix}-\${value}\` : '',
      style: undefined,
    };
  }
  if (value === '' || value == null) return { className: '', style: undefined };
  const resolved =
    typeof value === 'number' && Number.isFinite(value) && value >= 0
      ? \`\${value}rem\`
      : String(value).trim();
  if (!resolved) return { className: '', style: undefined };
  return { className: '', style: { [cssVar]: resolved } };
}

export function Divider({
  as, // 지정하면 루트 요소를 강제로 바꿉니다.
  tag = 'auto', // auto면 내용·방향에 따라 hr/div/span을 고릅니다.
  vertical = false, // 세로 구분선으로 표시합니다.
  dashed = false, // 점선 스타일을 적용합니다.
  plain = false, // 레이블 굵기를 낮춥니다.
  orient, // 레이블 위치(left·right)를 지정합니다.
  orientation = '', // orient의 이전 호환 이름입니다.
  marginY = '', // 가로면 상·하, 세로면 좌·우 간격입니다.
  thickness = '', // 선 두께입니다. 프리셋·rem 숫자·CSS 길이를 받습니다.
  height = '', // 세로 구분선 길이입니다. 프리셋·rem 숫자·CSS 길이를 받습니다.
  label, // children이 없을 때 표시할 레이블입니다.
  children, // 구분선 가운데 표시할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  style, // 인라인 스타일입니다. 수치 prop은 CSS 변수와 병합합니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // children이 있으면 우선하고, 없으면 label을 사용합니다.
  const content = children ?? label;
  // orient가 있으면 우선하고, 없으면 orientation 별칭을 사용합니다.
  const resolvedOrient = orient ?? orientation;
  const resolvedTag = TAGS.has(tag) ? tag : 'auto';
  // as가 있으면 최우선이고, 아니면 tag·vertical·content로 루트 태그를 결정합니다.
  const Root =
    as || (resolvedTag !== 'auto' ? resolvedTag : vertical ? 'span' : content ? 'div' : 'hr');

  // 가로에서는 상·하, 세로에서는 좌·우 CSS 변수에 간격을 연결합니다.
  const resolvedMargin = resolveLength(marginY, {
    presets: MARGINS,
    classPrefix: 'divider_margin',
    cssVar: vertical ? '--divider-current-margin-x' : '--divider-current-margin-y',
    skip: [''],
  });
  const resolvedThickness = resolveLength(thickness, {
    presets: THICKNESSES,
    classPrefix: 'divider_thickness',
    cssVar: '--divider-current-thickness',
  });
  const resolvedHeight = vertical
    ? resolveLength(height, {
        presets: HEIGHTS,
        classPrefix: 'divider_height',
        cssVar: '--divider-current-height',
        skip: [''],
      })
    : { className: '', style: undefined };

  // 방향·점선·plain·레이블 위치·간격·두께·길이 클래스를 조합합니다.
  const classes = [
    'divider', // 구분선 기본 클래스입니다.
    vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    dashed && 'divider_dashed', // 점선 변형입니다.
    plain && 'divider_plain', // 레이블 굵기를 낮추는 변형입니다.
    ORIENTATIONS.has(resolvedOrient) && resolvedOrient && \`divider_orient-\${resolvedOrient}\`, // 검증된 레이블 위치입니다.
    resolvedMargin.className, // 검증된 간격 프리셋 클래스입니다.
    resolvedThickness.className, // 검증된 두께 프리셋 클래스입니다.
    resolvedHeight.className, // 검증된 세로 길이 프리셋 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 세로선은 장식 요소로 보조 기술에서 제외합니다.
  const accessibility = vertical ? { 'aria-hidden': 'true' } : {};
  const mergedStyle = {
    ...style,
    ...resolvedMargin.style,
    ...resolvedThickness.style,
    ...resolvedHeight.style,
  };
  const rootStyle = Object.keys(mergedStyle).length ? mergedStyle : undefined;

  // hr에는 자식을 두지 않고, 그 외에는 콘텐츠를 렌더링합니다.
  return (
    <Root className={classes} data-component="Divider" style={rootStyle} {...accessibility} {...props}>
      {Root === 'hr' ? null : content}
    </Root>
  );
}

export default Divider;
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`<!--
  Divider 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 Divider 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDivider', inheritAttrs: false });

// 방향, 점선, plain, 레이블 위치, 간격·두께·길이와 루트 태그를 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: undefined }, // 지정하면 루트 요소를 강제로 바꿉니다.
  tag: { type: String, default: 'auto' }, // auto면 내용·방향에 따라 hr/div/span을 고릅니다.
  vertical: Boolean, // 세로 구분선으로 표시합니다.
  dashed: Boolean, // 점선 스타일을 적용합니다.
  plain: Boolean, // 레이블 굵기를 낮춥니다.
  orient: { type: String, default: undefined }, // 레이블 위치(left·right)를 지정합니다.
  orientation: { type: String, default: '' }, // orient의 이전 호환 이름입니다.
  marginY: { type: [String, Number], default: '' }, // 가로면 상·하, 세로면 좌·우 간격입니다.
  thickness: { type: [String, Number], default: '' }, // 선 두께입니다. 프리셋·rem 숫자·CSS 길이입니다.
  height: { type: [String, Number], default: '' }, // 세로 구분선 길이입니다. 프리셋·rem 숫자·CSS 길이입니다.
  label: String, // slot이 없을 때 표시할 레이블입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();

const orientations = new Set(['', 'left', 'right']); // 지원하는 레이블 위치입니다.
const tags = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 모드입니다.
const margins = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'none']; // 간격 프리셋입니다.
const thicknesses = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'none']; // 두께 프리셋입니다.
const heights = ['', 'xs', 'sm', 'md', 'lg', 'xl']; // 세로 길이 프리셋입니다.

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 CSS 변수로 적용합니다. */
function resolveLength(value, { presets, classPrefix, cssVar, skip = ['', 'md'] }) {
  if (presets.includes(value)) {
    return {
      className: value && !skip.includes(value) ? \`\${classPrefix}-\${value}\` : '',
      style: undefined,
    };
  }
  if (value === '' || value == null) return { className: '', style: undefined };
  const resolved =
    typeof value === 'number' && Number.isFinite(value) && value >= 0
      ? \`\${value}rem\`
      : String(value).trim();
  if (!resolved) return { className: '', style: undefined };
  return { className: '', style: { [cssVar]: resolved } };
}

// slot 또는 label이 있으면 레이블형 구분선입니다.
const hasContent = computed(() => Boolean(slots.default) || Boolean(props.label));
// orient가 있으면 우선하고, 없으면 orientation 별칭을 사용합니다.
const resolvedOrient = computed(() => props.orient ?? props.orientation);
const resolvedTag = computed(() => (tags.has(props.tag) ? props.tag : 'auto'));
// as가 있으면 최우선이고, 아니면 tag·vertical·content로 루트 태그를 결정합니다.
const rootTag = computed(
  () =>
    props.as ||
    (resolvedTag.value !== 'auto'
      ? resolvedTag.value
      : props.vertical
        ? 'span'
        : hasContent.value
          ? 'div'
          : 'hr'),
);

// 가로에서는 상·하, 세로에서는 좌·우 CSS 변수에 간격을 연결합니다.
const resolvedMargin = computed(() =>
  resolveLength(props.marginY, {
    presets: margins,
    classPrefix: 'divider_margin',
    cssVar: props.vertical ? '--divider-current-margin-x' : '--divider-current-margin-y',
    skip: [''],
  }),
);
const resolvedThickness = computed(() =>
  resolveLength(props.thickness, {
    presets: thicknesses,
    classPrefix: 'divider_thickness',
    cssVar: '--divider-current-thickness',
  }),
);
const resolvedHeight = computed(() =>
  props.vertical
    ? resolveLength(props.height, {
        presets: heights,
        classPrefix: 'divider_height',
        cssVar: '--divider-current-height',
        skip: [''],
      })
    : { className: '', style: undefined },
);

// 방향·점선·plain·레이블 위치·간격·두께·길이 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'divider', // 구분선 기본 클래스입니다.
    props.vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    props.dashed && 'divider_dashed', // 점선 변형입니다.
    props.plain && 'divider_plain', // 레이블 굵기를 낮추는 변형입니다.
    orientations.has(resolvedOrient.value) &&
      resolvedOrient.value &&
      \`divider_orient-\${resolvedOrient.value}\`, // 검증된 레이블 위치입니다.
    resolvedMargin.value.className, // 검증된 간격 프리셋 클래스입니다.
    resolvedThickness.value.className, // 검증된 두께 프리셋 클래스입니다.
    resolvedHeight.value.className, // 검증된 세로 길이 프리셋 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// 수치 prop CSS 변수와 전달된 style을 병합합니다.
const rootStyle = computed(() => {
  const next = {
    ...(typeof attrs.style === 'object' && attrs.style ? attrs.style : {}),
    ...resolvedMargin.value.style,
    ...resolvedThickness.value.style,
    ...resolvedHeight.value.style,
  };
  return Object.keys(next).length ? next : undefined;
});

// class·style은 별도 바인딩하므로 fallthrough에서 제외합니다.
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});
<\/script>

<template>
  <!-- 루트 태그를 결정하고 속성·클래스·세로선 aria-hidden을 전달합니다. -->
  <component
    :is="rootTag"
    v-bind="fallthroughAttrs"
    :class="classes"
    :style="rootStyle"
    data-component="Divider"
    :aria-hidden="vertical ? 'true' : undefined"
  >
    <!-- hr에는 자식을 두지 않고, 그 외에는 slot 또는 label을 렌더링합니다. -->
    <slot v-if="rootTag !== 'hr'">{{ label }}</slot>
  </component>
</template>
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`<!-- Space 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. -->
<!-- space 클래스로 기본 inline-flex 간격 컨테이너를 만듭니다. 기본 간격은 md입니다. -->
<div class="space" data-component="Space">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- gap·방향·줄바꿈·너비·정렬 변형 클래스를 조합합니다. -->
<div class="space space_gap-sm space_vertical space_align-stretch" data-component="Space">
  <div>첫 번째</div>
  <div>두 번째</div>
</div>

<!-- 부모 너비를 채우고 줄바꿈하려면 space_block과 space_wrap을 함께 지정합니다. -->
<div class="space space_block space_wrap space_justify-between" data-component="Space">
  <div>시작</div>
  <div>끝</div>
</div>`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`{# Space 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. #}
{# space macro로 간격·방향·줄바꿈·정렬을 조합합니다. #}

{% macro space(
  as = 'div',
  gap = '',
  size = '',
  vertical = false,
  wrap = false,
  block = false,
  align = '',
  justify = '',
  className = '',
  style = ''
) %}
{%- set tag = as -%}
{%- set resolved = gap if gap else (size if size else 'md') -%}
{%- set gapClass = (' space_gap-' + resolved) if resolved and resolved != 'md' else '' -%}
{%- set classes =
  'space'
  + gapClass
  + (' space_vertical' if vertical else '')
  + (' space_wrap' if wrap else '')
  + (' space_block' if block else '')
  + ((' space_align-' + align) if align else '')
  + ((' space_justify-' + justify) if justify else '')
  + ((' ' + className) if className else '')
-%}
<{{ tag }} class="{{ classes }}" data-component="Space"{% if style %} style="{{ style }}"{% endif %}>
  {%- if caller -%}
  {{ caller() }}
  {%- else -%}
  {{ content | default('') | safe }}
  {%- endif -%}
</{{ tag }}>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{% call space() %}
  <div class="space_demo-box">1</div>
  <div class="space_demo-box">2</div>
  <div class="space_demo-box">3</div>
{% endcall %}
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`/**
 * Space 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 간격·정렬 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const SIZES = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']); // 지원하는 간격 크기입니다.
const ALIGNS = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']); // 지원하는 교차축 정렬입니다.
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between']); // 지원하는 주축 정렬입니다.

export function Space({
  as: Root = 'div', // Space의 루트 요소 또는 컴포넌트를 지정합니다.

  gap, // 자식 사이 간격을 지정합니다.
  size = '', // gap의 이전 호환 이름입니다.
  vertical = false, // 자식을 세로로 배치합니다.
  wrap = false, // 자식 줄바꿈을 허용합니다.
  block = false, // 부모 너비를 채우는 block flex로 표시합니다.

  align = '', // 교차축에서 자식의 정렬 방식을 지정합니다.
  justify = '', // 주축에서 자식을 배치하는 방식을 지정합니다.

  children = 'Space', // Space 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // gap이 있으면 우선하고, 없으면 size 별칭을 사용하며 최종 기본값은 md입니다.
  const resolvedSize = (gap ?? size) || 'md';

  // 간격·방향·줄바꿈·너비·정렬 상태를 공통 CSS 클래스로 조합합니다.
  const classes = [
    'space', // inline-flex 간격 컨테이너를 활성화하는 필수 클래스입니다.
    SIZES.has(resolvedSize) && resolvedSize !== 'md' && \`space_gap-\${resolvedSize}\`, // md가 아닐 때만 간격 클래스를 붙입니다.
    vertical && 'space_vertical', // 세로 배치 변형입니다.
    wrap && 'space_wrap', // 줄바꿈 변형입니다.
    block && 'space_block', // 전체 너비 block flex 변형입니다.
    ALIGNS.has(align) && align && \`space_align-\${align}\`, // 검증된 교차축 정렬입니다.
    JUSTIFIES.has(justify) && justify && \`space_justify-\${justify}\`, // 검증된 주축 정렬입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="Space" {...props}>
      {children}
    </Root>
  );
}

export default Space;
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`<!--
  Space 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 계산된 Space 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSpace', inheritAttrs: false });

// 간격, 방향, 줄바꿈, 너비와 정렬 방식을 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Space의 루트 요소 또는 컴포넌트를 지정합니다.
  gap: { type: String, default: undefined }, // 자식 사이 간격을 지정합니다.
  size: { type: String, default: '' }, // gap의 이전 호환 이름입니다.
  vertical: Boolean, // 자식을 세로로 배치합니다.
  wrap: Boolean, // 자식 줄바꿈을 허용합니다.
  block: Boolean, // 부모 너비를 채우는 block flex로 표시합니다.
  align: { type: String, default: '' }, // 교차축에서 자식의 정렬 방식을 지정합니다.
  justify: { type: String, default: '' }, // 주축에서 자식을 배치하는 방식을 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 간격·정렬 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const sizes = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']); // 지원하는 간격 크기입니다.
const aligns = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']); // 지원하는 교차축 정렬입니다.
const justifies = new Set(['', 'start', 'center', 'end', 'between']); // 지원하는 주축 정렬입니다.

// gap이 있으면 우선하고, 없으면 size 별칭을 사용하며 최종 기본값은 md입니다.
const resolvedSize = computed(() => (props.gap ?? props.size) || 'md');

// 간격·방향·줄바꿈·너비·정렬 상태와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'space', // inline-flex 간격 컨테이너를 활성화하는 필수 클래스입니다.
    sizes.has(resolvedSize.value) &&
      resolvedSize.value !== 'md' &&
      \`space_gap-\${resolvedSize.value}\`, // md가 아닐 때만 간격 클래스를 붙입니다.
    props.vertical && 'space_vertical', // 세로 배치 변형입니다.
    props.wrap && 'space_wrap', // 줄바꿈 변형입니다.
    props.block && 'space_block', // 전체 너비 block flex 변형입니다.
    aligns.has(props.align) && props.align && \`space_align-\${props.align}\`, // 검증된 교차축 정렬입니다.
    justifies.has(props.justify) && props.justify && \`space_justify-\${props.justify}\`, // 검증된 주축 정렬입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
<\/script>

<template>
  <!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Space">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    <slot>Space</slot>
  </component>
</template>
`})))()}function W(e,t,n,r={}){let i=r.reactFile??`${e}.jsx`,a=r.vueFile??`${e}.vue`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/layout/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/layout/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/layout/${e}/${a}`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${a}`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/layout/${e}/${i}`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${i}`,code:n.react}]}var G,je,Me,Ne,Pe;function Fe(){return(Fe=e((()=>{C(),T(),D(),k(),j(),N(),F(),L(),z(),V(),U(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),Ae(),G=(...e)=>e.join(`

`),je=W(`Grid`,`grid`,{html:w,gulp:E,react:G(O,`<!-- GridCol.jsx -->\n${A}`),vue:G(M,`<!-- GridCol.vue -->\n${P}`)},{reactFile:`Grid.jsx · GridCol.jsx`,vueFile:`Grid.vue · GridCol.vue`}),Me=W(`Flex`,`flex`,{html:I,gulp:R,react:G(B,`<!-- FlexItem.jsx -->\n${H}`),vue:G(de,`<!-- FlexItem.vue -->\n${pe}`)},{reactFile:`Flex.jsx · FlexItem.jsx`,vueFile:`Flex.vue · FlexItem.vue`}),Ne=W(`Divider`,`divider`,{html:he,gulp:_e,react:ye,vue:xe}),Pe=W(`Space`,`space`,{html:Ce,gulp:Te,react:De,vue:ke})})))()}function K(e,t,n,r,i,a=[],o=`컴포넌트 이름`){let s=Re.map(e=>e.name===`children`?{...e,default:o}:e),c=Be.map(e=>({...e,default:o}));return[{title:`React · Next.js API · Props`,description:`Next.js는 \`@uxkm/react/${t}\`를 재사용합니다.`,tables:[{columns:q,rows:[...n,...s]}]},{title:`Vue · Nuxt API · Props`,description:`Nuxt는 \`@uxkm/vue/${t}\`를 재사용합니다.`,tables:[{columns:q,rows:[...Le(n),...ze]}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:q,rows:c}]},{title:`HTML · Gulp API · Markup`,description:`HTML과 Gulp는 ${e} OOCSS 클래스를 직접 적용합니다.`,tables:[{columns:q,rows:Ve}]},{title:`공통 API · 클래스`,tables:[{columns:q,rows:r}]},{title:`공통 API · 디자인 토큰`,tables:[{columns:q,rows:i}]},...a]}var q,Ie,Le,Re,ze,Be,Ve,J,He,Ue,We,Ge,Ke,qe,Y,Je,Ye,Xe,Ze,Qe,$e,et,tt,X,nt,rt,Z,it,at,ot,st,Q,ct,lt,ut,dt,ft,pt,mt,$,ht,gt;function _t(){return(_t=e((()=>{q=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],Ie=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Le=e=>e.map(e=>({...e,name:Ie(e.name)})),Re=[{name:`children`,type:`ReactNode`,default:`컴포넌트 이름`,description:`내부 콘텐츠입니다.`},{name:`className`,type:`string`,default:`''`,description:`루트에 추가할 클래스입니다.`},{name:`...props`,type:`HTML attributes`,default:`—`,description:`루트 요소에 전달할 네이티브 속성입니다.`}],ze=[{name:`class`,type:`string | object | array`,default:`—`,description:`루트에 추가할 클래스 바인딩입니다.`},{name:`v-bind`,type:`HTML attributes`,default:`—`,description:`루트 요소에 전달할 네이티브 속성입니다.`}],Be=[{name:`default`,type:`slot`,default:`컴포넌트 이름`,description:`내부 콘텐츠입니다.`}],Ve=[{name:`class`,type:`string`,default:`루트 클래스`,description:`루트 클래스와 변형 클래스를 마크업에 직접 조합합니다.`},{name:`data-component`,type:`string`,default:`—`,description:`컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.`}],J={name:`as`,type:`string | component`,default:`'div'`,description:`렌더링할 루트 요소 또는 컴포넌트입니다.`},He=[J,{name:`cols`,type:`1~12`,default:`—`,description:`기본 화면의 열 수입니다. columns 별칭도 지원합니다.`},{name:`colsMd`,type:`1~12`,default:`—`,description:`md 이상 화면의 열 수입니다. columnsMd 별칭도 지원합니다.`},{name:`colsLg`,type:`1~12`,default:`—`,description:`lg 이상 화면의 열 수입니다. columnsLg 별칭도 지원합니다.`},{name:`gap`,type:`'' | 'sm' | 'lg' | 'none' | number | CSS length`,default:`''`,description:`열과 행 사이 간격입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 --grid-current-gap으로 적용합니다.`},{name:`ratio`,type:`'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`,default:`—`,description:`미리 정의된 열 비율입니다.`},{name:`itemSpan`,type:`1~12`,default:`—`,description:`모든 직계 자식에 적용할 12열 기준 span입니다.`},{name:`itemSpanMd`,type:`1~12`,default:`—`,description:`md 이상에서 모든 자식에 적용할 span입니다.`},{name:`itemSpanLg`,type:`1~12`,default:`—`,description:`lg 이상에서 모든 자식에 적용할 span입니다.`},{name:`autoFit`,type:`boolean`,default:`false`,description:`가능한 만큼 자동 열을 배치하고 빈 공간을 채웁니다.`},{name:`autoFill`,type:`boolean`,default:`false`,description:`최소 너비 기준의 열 트랙을 자동 생성합니다.`},{name:`equalColumns`,type:`boolean`,default:`false`,description:`자식 수만큼 같은 너비의 자동 열을 만듭니다.`},{name:`align`,type:`'' | 'center' | 'end'`,default:`''`,description:`자식의 교차축 정렬입니다.`}],Ue=[{name:`grid`,type:`class`,default:`—`,description:`12열 기본 Grid 루트입니다.`},{name:`grid_cols-1~12 · grid_cols-md-* · grid_cols-lg-*`,type:`class`,default:`—`,description:`기본·반응형 열 수입니다.`},{name:`grid_col-span-1~12 · grid_col-span-md-* · grid_col-span-lg-*`,type:`class`,default:`—`,description:`개별 자식의 열 span입니다.`},{name:`grid_item-span-1~12 · grid_item-span-md-* · grid_item-span-lg-*`,type:`class`,default:`—`,description:`모든 직계 자식의 열 span입니다.`},{name:`grid_ratio-*`,type:`class`,default:`—`,description:`1-1, 2-1, 1-2, 3-1, 1-1-1, 1-2-1 비율입니다.`},{name:`grid_gap-sm · grid_gap-lg · grid_gap-none`,type:`class`,default:`—`,description:`간격 변형입니다.`},{name:`grid_auto-fit · grid_auto-fill · grid_equal-columns`,type:`class`,default:`—`,description:`자동 열 배치 방식입니다.`},{name:`grid_align-center · grid_align-end`,type:`class`,default:`—`,description:`자식 정렬입니다.`}],We=[{name:`--grid-columns`,type:`number`,default:`12`,description:`기본 열 수입니다.`},{name:`--grid-gap · --grid-gap-sm · --grid-gap-lg`,type:`length`,default:`space-md · space-sm · space-lg`,description:`기본·크기별 간격입니다.`},{name:`--grid-current-gap`,type:`length`,default:`var(--grid-gap)`,description:`실제 적용 간격입니다. 수치·CSS 길이 gap이 이 변수를 덮어씁니다.`},{name:`--grid-auto-min`,type:`length`,default:`10rem`,description:`자동 배치 열의 최소 너비입니다.`}],Ge=[{name:`as`,type:`string | component`,default:`'div'`,description:`GridCol의 루트 요소입니다.`},{name:`span`,type:`1~12`,default:`—`,description:`기본 화면의 개별 열 span입니다.`},{name:`spanMd`,type:`1~12`,default:`—`,description:`md 이상 개별 열 span입니다.`},{name:`spanLg`,type:`1~12`,default:`—`,description:`lg 이상 개별 열 span입니다.`},{name:`children / default`,type:`ReactNode / slot`,default:`—`,description:`GridCol 내부 콘텐츠입니다.`}],Ke=[{name:`class`,type:`string`,default:`'grid'`,description:`grid와 열·간격·비율·자동 배치 변형 클래스를 마크업에 직접 조합합니다.`},{name:`data-component`,type:`'Grid' | 'GridCol'`,default:`—`,description:`컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.`},{name:`div · header · aside · main · footer`,type:`element`,default:`div`,description:`콘텐츠 구조에 알맞은 시맨틱 루트 요소를 선택합니다.`}],qe=[{name:`grid · gridCol`,type:`macro`,default:`—`,description:'`{% from "components/layout/Grid/grid.njk" import grid, gridCol %}`로 한 번 import한 뒤 `{% call %}`로 인스턴스를 만듭니다.'},{name:`as`,type:`string`,default:`'div'`,description:`루트 태그 이름입니다. header · aside · main · footer 등 시맨틱 요소를 지정할 수 있습니다.`},{name:`cols · colsMd · colsLg`,type:`1~12`,default:`''`,description:`기본·반응형 열 수입니다. grid_cols-* 클래스로 변환됩니다.`},{name:`gap`,type:`'' | 'sm' | 'lg' | 'none' | number | CSS length`,default:`''`,description:`프리셋은 클래스, 숫자(rem)·CSS 길이는 --grid-current-gap 스타일로 적용합니다.`},{name:`ratio · itemSpan · itemSpanMd · itemSpanLg`,type:`string | 1~12`,default:`''`,description:`열 비율·자식 일괄 span입니다.`},{name:`autoFit · autoFill · equalColumns`,type:`boolean`,default:`false`,description:`자동 열 배치 모드입니다. 참이면 해당 클래스를 추가합니다.`},{name:`align`,type:`'' | 'center' | 'end'`,default:`''`,description:`교차축 정렬입니다.`},{name:`span · spanMd · spanLg`,type:`1~12`,default:`''`,description:`gridCol 전용 개별 열 span입니다.`},{name:`className · style`,type:`string`,default:`''`,description:`루트에 추가할 클래스와 인라인 스타일입니다.`},{name:`caller()`,type:`block`,default:`—`,description:"`{% call grid(...) %}…{% endcall %}` 본문이 루트 안으로 렌더됩니다."}],Y=K(`Grid`,`grid`,He,Ue,We),Je=[{name:`w2:group`,type:`component`,default:`—`,description:`Grid와 GridCol의 WebSquare 레이아웃 루트입니다. 중첩 group으로 부모·자식 구조를 표현합니다.`},{name:`class`,type:`string`,default:`'grid'`,description:`Grid에는 grid와 배치 변형을, GridCol에는 grid_col-span-* 변형을 조합합니다.`},{name:`tagname`,type:`string`,default:`'div'`,description:`header, aside, main, footer 등 콘텐츠 의미에 맞는 HTML 태그를 지정합니다.`},{name:`id`,type:`string`,default:`—`,description:`WebSquare 화면 안에서 중복되지 않는 Grid 또는 GridCol ID를 지정합니다.`}],Ye=[...Y.slice(0,3),{title:`HTML API · Markup`,description:`HTML은 공통 OOCSS 클래스를 마크업에 직접 적용합니다.`,tables:[{columns:q,rows:Ke}]},{title:`Gulp API · Nunjucks`,description:"`grid` · `gridCol` macro를 import하고 `{% call %}`로 레이아웃을 조합합니다.",tables:[{columns:q,rows:qe}]},{title:`WebSquare API · XML`,description:`Grid는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.`,tables:[{columns:q,rows:Je}]},...Y.slice(4),{title:`React · Vue 공통 API · GridCol`,description:`혼합 열 레이아웃에서 개별 자식의 span을 지정합니다.`,tables:[{columns:q,rows:Ge}]}],Xe=[J,{name:`direction`,type:`'row' | 'column'`,default:`'row'`,description:`기본 배치 방향입니다. col 별칭도 지원합니다.`},{name:`directionMd`,type:`'row' | 'column'`,default:`—`,description:`md 이상 배치 방향입니다.`},{name:`directionLg`,type:`'row' | 'column'`,default:`—`,description:`lg 이상 배치 방향입니다.`},{name:`wrap`,type:`boolean`,default:`false`,description:`자식 줄바꿈을 허용합니다.`},{name:`gap`,type:`'' | 'sm' | 'lg' | 'none' | number | CSS length`,default:`''`,description:`자식 간 간격입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 --flex-current-gap으로 적용합니다.`},{name:`cols · colsMd · colsLg`,type:`1~12`,default:`—`,description:`기본·반응형 화면에서 한 행의 균등한 자식 수입니다. columns 계열 별칭도 지원합니다.`},{name:`ratio`,type:`'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`,default:`—`,description:`직계 자식의 미리 정의된 flex 비율입니다.`},{name:`itemSpan · itemSpanMd · itemSpanLg`,type:`1~12`,default:`—`,description:`기본·반응형 화면에서 모든 직계 자식의 12단위 span입니다.`},{name:`equal`,type:`boolean`,default:`false`,description:`모든 직계 자식을 같은 비율로 확장합니다.`},{name:`autoFit`,type:`boolean`,default:`false`,description:`최소 너비 기준으로 자식을 자동 줄바꿈합니다.`},{name:`align`,type:`'start' | 'center' | 'end' | 'stretch' | 'baseline'`,default:`—`,description:`교차축 정렬입니다.`},{name:`justify`,type:`'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'`,default:`—`,description:`주축 정렬입니다.`}],Ze=[{name:`flex · flex_row · flex_col`,type:`class`,default:`—`,description:`루트와 배치 방향입니다.`},{name:`flex_row-md/lg · flex_col-md/lg · flex_wrap`,type:`class`,default:`—`,description:`반응형 방향과 줄바꿈입니다.`},{name:`flex_cols-1~12 · flex_cols-md-* · flex_cols-lg-*`,type:`class`,default:`—`,description:`행별 균등 자식 수입니다.`},{name:`flex_item-span-* · flex_items-span-*`,type:`class`,default:`—`,description:`개별·전체 자식 span이며 md, lg 변형을 지원합니다.`},{name:`flex_ratio-* · flex_equal · flex_auto-fit`,type:`class`,default:`—`,description:`자식 너비 분배 방식입니다.`},{name:`flex_align-* · flex_justify-* · flex_self-*`,type:`class`,default:`—`,description:`부모·개별 자식 정렬입니다.`},{name:`flex_grow · flex_grow-2 · flex_fit · flex_order-1~12`,type:`class`,default:`—`,description:`개별 자식의 확장·고정·순서입니다.`},{name:`flex_gap-sm · flex_gap-lg · flex_gap-none`,type:`class`,default:`—`,description:`간격 변형입니다.`}],Qe=[{name:`--flex-gap · --flex-gap-sm · --flex-gap-lg`,type:`length`,default:`space-md · space-sm · space-lg`,description:`기본·크기별 간격입니다.`},{name:`--flex-current-gap`,type:`length`,default:`var(--flex-gap)`,description:`실제 적용 간격입니다. 수치·CSS 길이 gap이 이 변수를 덮어씁니다.`},{name:`--flex-auto-min`,type:`length`,default:`10rem`,description:`자동 배치 자식의 최소 너비입니다.`}],$e=[{name:`as`,type:`string | component`,default:`'div'`,description:`FlexItem의 루트 요소입니다.`},{name:`span · spanMd · spanLg`,type:`1~12`,default:`—`,description:`기본·md·lg 화면의 개별 항목 span입니다.`},{name:`grow`,type:`boolean`,default:`false`,description:`남는 공간을 채우도록 확장합니다.`},{name:`growFactor`,type:`1 | 2`,default:`1`,description:`grow 항목의 확장 비율입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비를 유지합니다.`},{name:`align`,type:`'auto' | 'start' | 'center' | 'end' | 'stretch' | 'baseline'`,default:`—`,description:`개별 항목의 교차축 정렬입니다.`},{name:`order`,type:`1~12`,default:`—`,description:`항목 표시 순서입니다.`},{name:`children / default`,type:`ReactNode / slot`,default:`—`,description:`FlexItem 내부 콘텐츠입니다.`}],et=[{name:`class`,type:`string`,default:`'flex flex_row'`,description:`flex와 방향·간격·비율·정렬 변형 클래스를 마크업에 직접 조합합니다.`},{name:`data-component`,type:`'Flex' | 'FlexItem'`,default:`—`,description:`컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.`},{name:`div · header · aside · main · footer`,type:`element`,default:`div`,description:`콘텐츠 구조에 알맞은 시맨틱 루트 요소를 선택합니다.`}],tt=[{name:`flex · flexItem`,type:`macro`,default:`—`,description:'`{% from "components/layout/Flex/flex.njk" import flex, flexItem %}`로 한 번 import한 뒤 `{% call %}`로 인스턴스를 만듭니다.'},{name:`as`,type:`string`,default:`'div'`,description:`루트 태그 이름입니다. header · aside · main · footer 등 시맨틱 요소를 지정할 수 있습니다.`},{name:`direction · directionMd · directionLg`,type:`'row' | 'column' | 'col'`,default:`'row'`,description:`기본·반응형 배치 방향입니다. column/col은 flex_col* 클래스로 변환됩니다.`},{name:`wrap`,type:`boolean`,default:`false`,description:`true면 flex_wrap을 추가합니다.`},{name:`cols · colsMd · colsLg`,type:`1~12`,default:`''`,description:`한 행의 균등 항목 수입니다.`},{name:`gap`,type:`'' | 'sm' | 'lg' | 'none' | number | CSS length`,default:`''`,description:`프리셋은 클래스, 숫자(rem)·CSS 길이는 --flex-current-gap 스타일로 적용합니다.`},{name:`ratio · itemSpan · itemSpanMd · itemSpanLg`,type:`string | 1~12`,default:`''`,description:`항목 비율·자식 일괄 span입니다.`},{name:`equal · autoFit`,type:`boolean`,default:`false`,description:`동일 너비 확장·최소 너비 자동 배치입니다.`},{name:`align · justify`,type:`string`,default:`align 'stretch'`,description:`교차축·주축 정렬입니다.`},{name:`span · spanMd · spanLg · grow · growFactor · fit · order`,type:`mixed`,default:`—`,description:`flexItem 전용 개별 크기·확장·순서입니다.`},{name:`className · style`,type:`string`,default:`''`,description:`루트에 추가할 클래스와 인라인 스타일입니다.`},{name:`caller()`,type:`block`,default:`—`,description:"`{% call flex(...) %}…{% endcall %}` 본문이 루트 안으로 렌더됩니다."}],X=K(`Flex`,`flex`,Xe,Ze,Qe),nt=[{name:`w2:group`,type:`component`,default:`—`,description:`Flex와 FlexItem의 WebSquare 레이아웃 루트입니다. 중첩 group으로 부모·자식 구조를 표현합니다.`},{name:`class`,type:`string`,default:`'flex flex_row'`,description:`Flex에는 방향·정렬·배치 클래스를, FlexItem에는 span·grow·fit·self 클래스를 조합합니다.`},{name:`tagname`,type:`string`,default:`'div'`,description:`header, aside, main, footer 등 콘텐츠 의미에 맞는 HTML 태그를 지정합니다.`},{name:`id`,type:`string`,default:`—`,description:`WebSquare 화면 안에서 중복되지 않는 Flex 또는 FlexItem ID를 지정합니다.`}],rt=[...X.slice(0,3),{title:`HTML API · Markup`,description:`HTML은 공통 OOCSS 클래스를 마크업에 직접 적용합니다.`,tables:[{columns:q,rows:et}]},{title:`Gulp API · Nunjucks`,description:"`flex` · `flexItem` macro를 import하고 `{% call %}`로 레이아웃을 조합합니다.",tables:[{columns:q,rows:tt}]},{title:`WebSquare API · XML`,description:`Flex는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.`,tables:[{columns:q,rows:nt}]},...X.slice(4),{title:`React · Vue 공통 API · FlexItem`,description:`혼합 레이아웃에서 개별 항목의 span·확장·정렬·순서를 지정합니다.`,tables:[{columns:q,rows:$e}]}],Z=[{name:`tag`,type:`'auto' | 'hr' | 'div' | 'span'`,default:`'auto'`,description:`루트 태그입니다. auto는 선 hr, 레이블 div, 세로선 span을 선택합니다.`},{name:`as`,type:`string | component`,default:`—`,description:`tag보다 우선하는 루트 요소 호환 prop입니다.`},{name:`vertical`,type:`boolean`,default:`false`,description:`세로 구분선을 사용합니다.`},{name:`dashed`,type:`boolean`,default:`false`,description:`선을 dashed 스타일로 표시합니다.`},{name:`plain`,type:`boolean`,default:`false`,description:`레이블 굵기를 일반 두께로 표시합니다.`},{name:`orient`,type:`'' | 'left' | 'right'`,default:`''`,description:`레이블의 수평 위치입니다. orientation 별칭도 지원합니다.`},{name:`marginY`,type:`'' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' | number | CSS length`,default:`''`,description:`가로에서는 상·하, 세로에서는 좌·우 간격입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 각각 --divider-current-margin-y / --divider-current-margin-x로 적용합니다.`},{name:`thickness`,type:`'' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' | number | CSS length`,default:`''`,description:`선 두께입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 --divider-current-thickness로 적용합니다. 빈 값과 md는 기본 1px입니다.`},{name:`height`,type:`'' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | CSS length`,default:`''`,description:`세로 구분선 길이입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 --divider-current-height로 적용합니다. 비우면 stretch·min-height 1em을 유지합니다.`},{name:`label`,type:`string`,default:`—`,description:`children 또는 기본 슬롯 대신 사용할 레이블입니다.`}],it=[{name:`divider`,type:`class`,default:`—`,description:`기본 수평 구분선이며 콘텐츠가 있으면 양쪽 선과 레이블로 표시됩니다.`},{name:`divider_dashed · divider_plain`,type:`class`,default:`—`,description:`점선과 일반 굵기 레이블입니다.`},{name:`divider_orient-left · divider_orient-right`,type:`class`,default:`—`,description:`레이블 위치입니다.`},{name:`divider_margin-xs · sm · md · lg · xl · none`,type:`class`,default:`—`,description:`가로 상·하 / 세로 좌·우 간격 변형입니다.`},{name:`divider_thickness-xs · sm · lg · xl · none`,type:`class`,default:`—`,description:`선 두께 변형입니다. md는 기본값이라 별도 클래스가 없습니다.`},{name:`divider_height-xs · sm · md · lg · xl`,type:`class`,default:`—`,description:`세로 구분선 길이 변형입니다.`},{name:`divider_vertical`,type:`class`,default:`—`,description:`세로 구분선입니다.`}],at=[{name:`--divider-color`,type:`color`,default:`border-subtle`,description:`선 색상입니다.`},{name:`--divider-thickness · --divider-thickness-xs/sm/lg/xl`,type:`length`,default:`1px · 1/2/3/4px`,description:`기본·프리셋 선 두께입니다.`},{name:`--divider-current-thickness`,type:`length`,default:`var(--divider-thickness)`,description:`실제 적용 두께입니다. 수치·CSS 길이 thickness가 덮어씁니다.`},{name:`--divider-margin-y · --divider-margin-x`,type:`length`,default:`space-md · space-sm`,description:`가로 상·하 / 세로 좌·우 기본 간격입니다.`},{name:`--divider-current-margin-y · --divider-current-margin-x`,type:`length`,default:`margin-y · margin-x`,description:`실제 적용 간격입니다. marginY가 방향에 맞게 덮어씁니다.`},{name:`--divider-height-xs~xl · --divider-current-height`,type:`length`,default:`1~4rem · auto`,description:`세로 구분선 길이 프리셋과 실제 적용 값입니다.`},{name:`--divider-text-gap · --divider-orient-inset`,type:`length`,default:`space-md · 5%`,description:`레이블과 선 간격 및 좌우 inset입니다.`}],ot=[{name:`class`,type:`string`,default:`'divider'`,description:`divider와 dashed·plain·orient·vertical 변형 클래스를 마크업에 직접 조합합니다.`},{name:`data-component`,type:`'Divider'`,default:`—`,description:`컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.`},{name:`hr · div · span`,type:`element`,default:`내용에 따라 선택`,description:`레이블 없는 선은 hr, 레이블형은 div, 세로선은 span을 사용합니다.`}],st=[{name:`divider`,type:`macro`,default:`—`,description:'`{% from "components/layout/Divider/divider.njk" import divider %}`로 import한 뒤 `{{ divider(...) }}` 또는 `{% call %}`로 인스턴스를 만듭니다.'},{name:`as · tag`,type:`string`,default:`tag 'auto'`,description:`as가 있으면 우선하고, tag가 auto이면 내용·vertical에 따라 hr/div/span을 고릅니다.`},{name:`vertical · dashed · plain`,type:`boolean`,default:`false`,description:`세로·점선·plain 레이블 변형입니다.`},{name:`orient · orientation`,type:`'' | 'left' | 'right'`,default:`''`,description:`레이블 위치입니다. orient가 우선합니다.`},{name:`marginY`,type:`'' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' | number | CSS length`,default:`''`,description:`가로면 상·하, 세로면 좌·우 간격입니다.`},{name:`thickness`,type:`'' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' | number | CSS length`,default:`''`,description:`선 두께입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 --divider-current-thickness로 적용합니다.`},{name:`height`,type:`'' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | CSS length`,default:`''`,description:`세로 구분선 길이입니다. vertical일 때만 적용됩니다.`},{name:`label`,type:`string`,default:`''`,description:"레이블 텍스트입니다. `{% call %}` 본문이 있으면 본문이 우선합니다."},{name:`className · style`,type:`string`,default:`''`,description:`루트에 추가할 클래스와 인라인 스타일입니다.`}],Q=K(`Divider`,`divider`,Z,it,at,[],`—`),ct=[{name:`hr`,type:`XHTML element`,default:`—`,description:`레이블 없는 의미 있는 수평 구분선입니다. divider 클래스를 직접 적용합니다.`},{name:`w2:group + w2:textbox`,type:`component`,default:`—`,description:`레이블형 Divider입니다. group에 divider 변형 클래스를, textbox의 label에 텍스트를 지정합니다.`},{name:`span[aria-hidden="true"]`,type:`XHTML element`,default:`—`,description:`장식용 세로 구분선입니다. divider_vertical 클래스를 적용하고 접근성 트리에서 숨깁니다.`},{name:`id`,type:`string`,default:`—`,description:`w2:group과 w2:textbox에는 화면 안에서 중복되지 않는 ID를 지정합니다.`}],lt=[...Q.slice(0,3),{title:`HTML API · Markup`,description:`HTML은 공통 OOCSS 클래스를 마크업에 직접 적용합니다.`,tables:[{columns:q,rows:ot}]},{title:`Gulp API · Nunjucks`,description:"`divider` macro를 import하고 `{{ divider(...) }}`로 구분선을 만듭니다.",tables:[{columns:q,rows:st}]},{title:`WebSquare API · XML`,description:`Divider의 의미와 렌더링 방식에 따라 XHTML hr·span과 WebSquare group·textbox를 구분해 사용합니다. 이벤트와 데이터 바인딩은 필요하지 않습니다.`,tables:[{columns:q,rows:ct}]},...Q.slice(4)],ut=[J,{name:`gap`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,default:`'md'`,description:`자식 사이 간격입니다. size 별칭도 지원합니다.`},{name:`vertical`,type:`boolean`,default:`false`,description:`자식을 세로로 배치합니다.`},{name:`wrap`,type:`boolean`,default:`false`,description:`자식 줄바꿈을 허용합니다.`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비를 채우는 block flex로 표시합니다.`},{name:`align`,type:`'start' | 'center' | 'end' | 'baseline' | 'stretch'`,default:`center`,description:`교차축 정렬입니다.`},{name:`justify`,type:`'start' | 'center' | 'end' | 'between'`,default:`—`,description:`주축 정렬입니다.`}],dt=[{name:`space`,type:`class`,default:`—`,description:`기본 inline-flex 간격 컨테이너입니다.`},{name:`space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl`,type:`class`,default:`—`,description:`간격 크기입니다.`},{name:`space_vertical · space_wrap · space_block`,type:`class`,default:`—`,description:`방향·줄바꿈·너비 변형입니다.`},{name:`space_align-* · space_justify-*`,type:`class`,default:`—`,description:`교차축·주축 정렬입니다.`}],ft=[{name:`--space-gap`,type:`length`,default:`var(--space-md)`,description:`기본 자식 간격입니다.`},{name:`--space-xs · --space-sm · --space-lg · --space-xl`,type:`length`,default:`공통 spacing token`,description:`크기별 간격에 사용하는 공통 토큰입니다.`}],pt=[{name:`class`,type:`string`,default:`'space'`,description:`space와 gap·vertical·wrap·block·align·justify 변형 클래스를 마크업에 직접 조합합니다.`},{name:`data-component`,type:`'Space'`,default:`—`,description:`컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.`},{name:`div · ul · nav`,type:`element`,default:`div`,description:`콘텐츠 구조에 알맞은 시맨틱 루트 요소를 선택합니다.`}],mt=[{name:`space`,type:`macro`,default:`—`,description:'`{% from "components/layout/Space/space.njk" import space %}`로 import한 뒤 `{% call space(...) %}`로 인스턴스를 만듭니다.'},{name:`as`,type:`string`,default:`'div'`,description:`루트 태그 이름입니다.`},{name:`gap · size`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,default:`'md'`,description:`자식 간격입니다. gap이 우선하고, md일 때는 space_gap-* 클래스를 붙이지 않습니다.`},{name:`vertical · wrap · block`,type:`boolean`,default:`false`,description:`세로 배치·줄바꿈·전체 너비 block flex 변형입니다.`},{name:`align · justify`,type:`string`,default:`''`,description:`교차축·주축 정렬입니다.`},{name:`className · style`,type:`string`,default:`''`,description:`루트에 추가할 클래스와 인라인 스타일입니다.`},{name:`caller()`,type:`block`,default:`—`,description:"`{% call space(...) %}…{% endcall %}` 본문이 루트 안으로 렌더됩니다."}],$=K(`Space`,`space`,ut,dt,ft),ht=[{name:`w2:group`,type:`component`,default:`—`,description:`Space의 WebSquare 루트입니다. 자식 컴포넌트를 순서대로 배치하는 레이아웃 그룹으로 사용합니다.`},{name:`class`,type:`string`,default:`'space'`,description:`space와 gap·vertical·wrap·block·align·justify 변형 클래스를 조합합니다.`},{name:`tagname`,type:`string`,default:`'div'`,description:`목록이나 도구 모음 등 콘텐츠 구조에 맞는 HTML 루트 태그가 필요할 때 지정합니다.`},{name:`id`,type:`string`,default:`—`,description:`WebSquare 화면 안에서 중복되지 않는 Space ID를 지정합니다.`}],gt=[...$.slice(0,3),{title:`HTML API · Markup`,description:`HTML은 공통 OOCSS 클래스를 마크업에 직접 적용합니다.`,tables:[{columns:q,rows:pt}]},{title:`Gulp API · Nunjucks`,description:"`space` macro를 import하고 `{% call %}`로 간격을 조합합니다.",tables:[{columns:q,rows:mt}]},{title:`WebSquare API · XML`,description:`Space는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.`,tables:[{columns:q,rows:ht}]},...$.slice(4)]})))()}export{gt as a,je as c,le as d,ce as f,ue as h,_t as i,Fe as l,C as m,rt as n,Ne as o,se as p,Ye as r,Me as s,lt as t,Pe as u};
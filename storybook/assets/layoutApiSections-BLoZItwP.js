import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e){return e.replace(/class=/g,`className=`).replace(/columns-md=/g,`columnsMd=`).replace(/columns-lg=/g,`columnsLg=`).replace(/cols-md=/g,`colsMd=`).replace(/cols-lg=/g,`colsLg=`).replace(/item-span-md=/g,`itemSpanMd=`).replace(/item-span-lg=/g,`itemSpanLg=`).replace(/item-span=/g,`itemSpan=`).replace(/span-md=/g,`spanMd=`).replace(/span-lg=/g,`spanLg=`).replace(/grow-factor=/g,`growFactor=`).replace(/style="min-width: 8rem;"/g,`style={{ minWidth: '8rem' }}`).replace(/style="min-height: 5rem; padding: 1rem;"/g,`style={{ minHeight: '5rem', padding: '1rem' }}`).replace(/style="padding-block: 2rem;"/g,`style={{ paddingBlock: '2rem' }}`).replace(/style="padding: 1rem;"/g,`style={{ padding: '1rem' }}`).replace(/auto-fit/g,`autoFit`).replace(/auto-fill/g,`autoFill`).replace(/equal-columns/g,`equalColumns`).replace(/direction-md=/g,`directionMd=`).replace(/direction-lg=/g,`directionLg=`)}function n(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function r(e){let t=[];return e.replace(/<(\/)?(Grid|GridCol|Flex|FlexItem)\b([^>]*)>/g,(e,r,i,a)=>{if(r)return`</${t.pop()||`div`}>`;let o=n(a),s=typeof o.as==`string`?o.as:`div`,c=[];return i===`Grid`&&c.push(`grid`,o.cols&&`grid_cols-${o.cols}`,o[`cols-md`]&&`grid_cols-md-${o[`cols-md`]}`,o[`cols-lg`]&&`grid_cols-lg-${o[`cols-lg`]}`,o.ratio&&`grid_ratio-${o.ratio}`,o[`item-span`]&&`grid_item-span-${o[`item-span`]}`,o[`item-span-md`]&&`grid_item-span-md-${o[`item-span-md`]}`,o[`item-span-lg`]&&`grid_item-span-lg-${o[`item-span-lg`]}`,o.gap&&`grid_gap-${o.gap}`,o[`auto-fit`]&&`grid_auto-fit`,o[`auto-fill`]&&`grid_auto-fill`,o[`equal-columns`]&&`grid_equal-columns`,o.align&&`grid_align-${o.align}`),i===`GridCol`&&c.push(o.span&&`grid_col-span-${o.span}`,o[`span-md`]&&`grid_col-span-md-${o[`span-md`]}`,o[`span-lg`]&&`grid_col-span-lg-${o[`span-lg`]}`),i===`Flex`&&c.push(`flex`,`flex_${o.direction===`column`?`col`:o.direction||`row`}`,o[`direction-md`]&&`flex_${o[`direction-md`]===`column`?`col`:o[`direction-md`]}-md`,o[`direction-lg`]&&`flex_${o[`direction-lg`]===`column`?`col`:o[`direction-lg`]}-lg`,o.wrap&&`flex_wrap`,o.cols&&`flex_cols-${o.cols}`,o[`cols-md`]&&`flex_cols-md-${o[`cols-md`]}`,o[`cols-lg`]&&`flex_cols-lg-${o[`cols-lg`]}`,o.ratio&&`flex_ratio-${o.ratio}`,o[`item-span`]&&`flex_items-span-${o[`item-span`]}`,o[`item-span-md`]&&`flex_items-span-md-${o[`item-span-md`]}`,o[`item-span-lg`]&&`flex_items-span-lg-${o[`item-span-lg`]}`,o.gap&&`flex_gap-${o.gap}`,`flex_align-${o.align||`stretch`}`,o.justify&&`flex_justify-${o.justify}`,o.equal&&`flex_equal`,o[`auto-fit`]&&`flex_auto-fit`),i===`FlexItem`&&c.push(o.span&&`flex_item-span-${o.span}`,o[`span-md`]&&`flex_item-span-md-${o[`span-md`]}`,o[`span-lg`]&&`flex_item-span-lg-${o[`span-lg`]}`,o.grow&&(o[`grow-factor`]===`2`?`flex_grow-2`:`flex_grow`),o.fit&&`flex_fit`,o.align&&`flex_self-${o.align}`,o.order&&`flex_order-${o.order}`),typeof o.class==`string`&&c.push(o.class),t.push(s),`<${s} class="${c.filter(Boolean).join(` `)}" data-component="${i}">`})}function i(e,t,n,r){let i=[],a=0,o=e.replace(/<(\/)?([\w-]+)\b([^>]*)>/g,(e,o,s,c)=>{if(o){let t=i.pop();return t?.component&&t.name===s?`</w2:group>`:e}let l=c.match(/\sdata-component="([^"]+)"/)?.[1],u=!!(l&&r.includes(l));if(i.push({name:s,component:u}),!u)return e;a+=1;let d=c.match(/\sclass="([^"]*)"/)?.[1]??``,f=s===`div`?``:`\n    tagname="${s}"`,p=c.replace(/\sclass="[^"]*"/,``).replace(/\sdata-component="[^"]*"/,``).trim(),m=p?`\n    ${p}`:``;return`<w2:group\n    id="${n}${t[0].toUpperCase()}${t.slice(1)}${a}"${f}\n    class="${d}"${m}>`});return`<w2:group
  id="${n}${t[0].toUpperCase()}${t.slice(1)}Example">
${o.split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}function a(e,n,a){let o=e.toLowerCase(),s=e===`Grid`?`GridCol`:e===`Flex`?`FlexItem`:``,c=s&&a.body.includes(`<${s}`),l=[`Button`,`Divider`,`Space`].filter(t=>t!==e&&a.body.includes(`<${t}`)),u=`<script setup>\n${[`import ${e}${c?`, { ${s} }`:``} from '@uxkm/vue/${o}';`,...l.map(e=>`import ${e} from '@uxkm/vue/${e.toLowerCase()}';`)].join(`
`)}\n<\/script>\n\n<template>\n${a.body.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`,f=t(a.body),p=`${[`import ${e}${c?`, { ${s} }`:``} from '@uxkm/react/${o}';`,...l.map(e=>`import ${e} from '@uxkm/react/${e.toLowerCase()}';`)].join(`
`)}\n\nexport function Example() {\n  return (\n  <>\n${f.split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`,m=a.html??r(a.body),h=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/layout/${e}/${e}.html · ${n}`,code:m},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/layout/${e}/${o}.njk · ${n}`,code:`{# ${e} · ${n} #}\n${m}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/${o} → apps/vue/src/components/layout/${e}/${e}.vue · ${n}`,code:u},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${o} → apps/vue/src/components/layout/${e}/${e}.vue · ${n}`,code:u},{id:`react`,label:`React`,fileName:`@uxkm/react/${o} → apps/react/src/components/layout/${e}/${e}.jsx · ${n}`,code:p},{id:`next`,label:`Next`,fileName:`@uxkm/react/${o} → apps/react/src/components/layout/${e}/${e}.jsx · ${n}`,code:p}];if(e===`Grid`&&h.push({id:`websquare`,label:`WebSquare`,fileName:`screen.xml · Grid ${n}`,code:i(m,n,`grid`,[`Grid`,`GridCol`])}),e===`Flex`&&h.push({id:`websquare`,label:`WebSquare`,fileName:`screen.xml · Flex ${n}`,code:i(m,n,`flex`,[`Flex`,`FlexItem`])}),e===`Divider`&&h.push({id:`websquare`,label:`WebSquare`,fileName:`Divider.xml · ${n}`,code:d[n]}),e===`Space`){let e=m.replace(/<([a-z][\w-]*) class="(space(?:\s[^"]*)?)"/g,`<$1 class="$2" data-component="Space"`);h.push({id:`websquare`,label:`WebSquare`,fileName:`Space.xml · ${n}`,code:i(e,n,`space`,[`Space`])})}return h}function o(e,t){return Object.fromEntries(Object.entries(t).map(([t,n])=>[t,a(e,t,n)]))}var s,c,l,u,d,f,p,m,h,ee,te,ne,re;function g(){return(g=e((()=>{s=`<!-- grid 클래스에 열 수, 간격, 비율 등의 부모 변형 클래스를 함께 적용합니다. -->
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
</div>`,`${s}`,c=`<!-- flex 클래스와 기본 행 방향 클래스를 루트에 적용합니다. -->
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
</div>`,`${c}`,l=`<!-- 레이블이 없는 의미 있는 수평 구분선은 hr에 divider 클래스를 적용합니다. -->
<hr class="divider" data-component="Divider" />

<!-- 점선은 divider_dashed를 함께 지정합니다. -->
<hr class="divider divider_dashed" data-component="Divider" />

<!-- 레이블형 구분선은 div에 텍스트를 넣고 양쪽 선은 CSS로 그립니다. -->
<div class="divider" data-component="Divider">섹션 제목</div>

<!-- plain은 레이블 굵기를 낮추고, orient는 레이블 위치를 바꿉니다. -->
<div class="divider divider_plain divider_orient-left" data-component="Divider">왼쪽 보조 설명</div>

<!-- 세로 구분선은 장식용이므로 span에 aria-hidden을 지정합니다. -->
<span class="divider divider_vertical" data-component="Divider" aria-hidden="true"></span>`,`${l}`,u=`<!-- space 클래스로 기본 inline-flex 간격 컨테이너를 만듭니다. 기본 간격은 md입니다. -->
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
</div>`,`${u}`,d={playground:`<w2:group
  id="dividerPlayground"
  tagname="div"
  class="divider">
  <w2:textbox id="dividerPlaygroundLabel" label="라벨"></w2:textbox>
</w2:group>`,basic:`<w2:group
  id="dividerBasicExample">
  <p>위 콘텐츠</p>
  <hr class="divider" />
  <p>아래 콘텐츠</p>
</w2:group>`,dashed:`<w2:group
  id="dividerDashedExample">
  <p>위 콘텐츠</p>
  <hr class="divider divider_dashed" />
  <p>아래 콘텐츠</p>
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
  <span class="divider divider_vertical" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemB" label="항목 B"></w2:textbox>
  <span class="divider divider_vertical divider_dashed" aria-hidden="true"></span>
  <w2:textbox id="dividerVerticalItemC" label="항목 C"></w2:textbox>
</w2:group>`},f={playground:{body:`<Grid cols="3" gap="sm">
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
</Grid>`}},p={playground:{body:`<Flex direction="row" cols="3" gap="sm" align="stretch"><div class="flex_demo-cell">1</div><div class="flex_demo-cell">2</div><div class="flex_demo-cell">3</div></Flex>`},pageLayout:{body:`<Flex wrap gap="sm">
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
<Flex ratio="2-1" gap="sm"><div class="flex_demo-cell">2</div><div class="flex_demo-cell">1</div></Flex>`}},m={playground:{body:`<Divider label="라벨" />`,html:`<div class="divider">라벨</div>`},basic:{body:`<p>위 콘텐츠</p>
<Divider />
<p>아래 콘텐츠</p>`,html:`<p>위 콘텐츠</p>
<hr class="divider" />
<p>아래 콘텐츠</p>`},dashed:{body:`<p>위 콘텐츠</p>
<Divider dashed />
<p>아래 콘텐츠</p>`,html:`<p>위 콘텐츠</p>
<hr class="divider divider_dashed" />
<p>아래 콘텐츠</p>`},text:{body:`<Divider label="섹션 제목" />
<Divider plain label="보조 설명" />`,html:`<div class="divider">섹션 제목</div>
<div class="divider divider_plain">보조 설명</div>`},orient:{body:`<Divider orient="left" label="왼쪽" />
<Divider label="가운데" />
<Divider orient="right" label="오른쪽" />`,html:`<div class="divider divider_orient-left">왼쪽</div>
<div class="divider">가운데</div>
<div class="divider divider_orient-right">오른쪽</div>`},vertical:{body:`<Space>
  <span>항목 A</span><Divider vertical /><span>항목 B</span><Divider vertical dashed /><span>항목 C</span>
</Space>`,html:`<div class="space">
  <span>항목 A</span><span class="divider divider_vertical" aria-hidden="true"></span>
  <span>항목 B</span><span class="divider divider_vertical divider_dashed" aria-hidden="true"></span><span>항목 C</span>
</div>`}},h={playground:{body:`<Space gap="md"><div class="space_demo-box">항목 1</div><div class="space_demo-box">항목 2</div><div class="space_demo-box">항목 3</div></Space>`,html:`<div class="space"><div>항목 1</div><div>항목 2</div><div>항목 3</div></div>`},basic:{body:`<Space><div class="space_demo-box">항목 1</div><div class="space_demo-box">항목 2</div><div class="space_demo-box">항목 3</div></Space>`,html:`<div class="space"><div>항목 1</div><div>항목 2</div><div>항목 3</div></div>`},vertical:{body:`<Space vertical align="stretch">
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
</div>`}},ee=o(`Grid`,f),te=o(`Flex`,p),ne=o(`Divider`,m),re=o(`Space`,h)})))()}var ie;function ae(){return(ae=e((()=>{ie=`<!-- Grid 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. -->
<!-- grid 클래스에 열 수, 간격, 비율 등의 부모 변형 클래스를 함께 적용합니다. -->
<div class="grid grid_cols-3" data-component="Grid">
  <!-- 모든 자식은 부모가 만든 Grid 트랙에 자동으로 배치됩니다. -->
  <div class="grid_demo-cell">1</div>
  <div class="grid_demo-cell">2</div>
  <div class="grid_demo-cell">3</div>
</div>
`})))()}var oe;function se(){return(se=e((()=>{oe=`{# Grid 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# grid 클래스에 열 수, 간격, 비율 등의 부모 변형 클래스를 함께 적용합니다. #}
<div class="grid grid_cols-3" data-component="Grid">
  {# 모든 자식은 부모가 만든 Grid 트랙에 자동으로 배치됩니다. #}
  <div class="grid_demo-cell">1</div>
  <div class="grid_demo-cell">2</div>
  <div class="grid_demo-cell">3</div>
</div>
`})))()}var ce;function le(){return(le=e((()=>{ce=`/**
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
`})))()}var ue;function _(){return(_=e((()=>{ue=`/**
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
`})))()}var v;function y(){return(y=e((()=>{v=`<!--
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
`})))()}var b;function x(){return(x=e((()=>{b=`<!--
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
`})))()}var S;function C(){return(C=e((()=>{S=`<!-- Flex 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. -->
<!-- flex 클래스와 기본 행 방향 클래스를 루트에 적용합니다. -->
<div class="flex flex_row" data-component="Flex">
  <!-- 직계 자식은 Flex 항목으로 한 방향에 배치됩니다. -->
  <div class="flex_demo-cell">1</div>
  <div class="flex_demo-cell">2</div>
  <div class="flex_demo-cell">3</div>
</div>
`})))()}var w;function T(){return(T=e((()=>{w=`{# Flex 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
{# flex 클래스와 기본 행 방향 클래스를 루트에 적용합니다. #}
<div class="flex flex_row" data-component="Flex">
  {# 직계 자식은 Flex 항목으로 한 방향에 배치됩니다. #}
  <div class="flex_demo-cell">1</div>
  <div class="flex_demo-cell">2</div>
  <div class="flex_demo-cell">3</div>
</div>
`})))()}var E;function D(){return(D=e((()=>{E=`/**
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
`})))()}var O;function k(){return(k=e((()=>{O=`/**
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
`})))()}var A;function j(){return(j=e((()=>{A=`<!--
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
`})))()}var M;function N(){return(N=e((()=>{M=`<!--
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
`})))()}var P;function F(){return(F=e((()=>{P=`<!-- Divider 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. -->
<!-- 레이블이 없는 의미 있는 수평 구분선은 hr에 divider 클래스를 적용합니다. -->
<hr class="divider" data-component="Divider" />

<!-- 점선은 divider_dashed를 함께 지정합니다. -->
<hr class="divider divider_dashed" data-component="Divider" />

<!-- 레이블형 구분선은 div에 텍스트를 넣고 양쪽 선은 CSS로 그립니다. -->
<div class="divider" data-component="Divider">섹션 제목</div>

<!-- plain은 레이블 굵기를 낮추고, orient는 레이블 위치를 바꿉니다. -->
<div class="divider divider_plain divider_orient-left" data-component="Divider">왼쪽 보조 설명</div>

<!-- 세로 구분선은 장식용이므로 span에 aria-hidden을 지정합니다. -->
<span class="divider divider_vertical" data-component="Divider" aria-hidden="true"></span>`})))()}var I;function L(){return(L=e((()=>{I=`{# Divider 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. #}
{# 레이블이 없는 의미 있는 수평 구분선은 hr에 divider 클래스를 적용합니다. #}
<hr class="divider" data-component="Divider" />

{# 점선은 divider_dashed를 함께 지정합니다. #}
<hr class="divider divider_dashed" data-component="Divider" />

{# 레이블형 구분선은 div에 텍스트를 넣고 양쪽 선은 CSS로 그립니다. #}
<div class="divider" data-component="Divider">섹션 제목</div>

{# plain은 레이블 굵기를 낮추고, orient는 레이블 위치를 바꿉니다. #}
<div class="divider divider_plain divider_orient-left" data-component="Divider">왼쪽 보조 설명</div>

{# 세로 구분선은 장식용이므로 span에 aria-hidden을 지정합니다. #}
<span class="divider divider_vertical" data-component="Divider" aria-hidden="true"></span>`})))()}var R;function z(){return(z=e((()=>{R=`/**
 * Divider 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 레이블 정렬과 루트 태그로 허용하는 값만 CSS·요소 선택에 반영합니다.
const ORIENTATIONS = new Set(['', 'left', 'right']); // 지원하는 레이블 위치입니다.
const TAGS = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 모드입니다.

export function Divider({
  as, // 지정하면 루트 요소를 강제로 바꿉니다.
  tag = 'auto', // auto면 내용·방향에 따라 hr/div/span을 고릅니다.
  vertical = false, // 세로 구분선으로 표시합니다.
  dashed = false, // 점선 스타일을 적용합니다.
  plain = false, // 레이블 굵기를 낮춥니다.
  orient, // 레이블 위치(left·right)를 지정합니다.
  orientation = '', // orient의 이전 호환 이름입니다.
  label, // children이 없을 때 표시할 레이블입니다.
  children, // 구분선 가운데 표시할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
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

  // 방향·점선·plain·레이블 위치 클래스를 조합합니다.
  const classes = [
    'divider', // 구분선 기본 클래스입니다.
    vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    dashed && 'divider_dashed', // 점선 변형입니다.
    plain && 'divider_plain', // 레이블 굵기를 낮추는 변형입니다.
    ORIENTATIONS.has(resolvedOrient) && resolvedOrient && \`divider_orient-\${resolvedOrient}\`, // 검증된 레이블 위치입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 세로선은 장식 요소로 보조 기술에서 제외합니다.
  const accessibility = vertical ? { 'aria-hidden': 'true' } : {};

  // hr에는 자식을 두지 않고, 그 외에는 콘텐츠를 렌더링합니다.
  return (
    <Root className={classes} data-component="Divider" {...accessibility} {...props}>
      {Root === 'hr' ? null : content}
    </Root>
  );
}

export default Divider;
`})))()}var B;function V(){return(V=e((()=>{B=`<!--
  Divider 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 Divider 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDivider', inheritAttrs: false });

// 방향, 점선, plain, 레이블 위치와 루트 태그를 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: undefined }, // 지정하면 루트 요소를 강제로 바꿉니다.
  tag: { type: String, default: 'auto' }, // auto면 내용·방향에 따라 hr/div/span을 고릅니다.
  vertical: Boolean, // 세로 구분선으로 표시합니다.
  dashed: Boolean, // 점선 스타일을 적용합니다.
  plain: Boolean, // 레이블 굵기를 낮춥니다.
  orient: { type: String, default: undefined }, // 레이블 위치(left·right)를 지정합니다.
  orientation: { type: String, default: '' }, // orient의 이전 호환 이름입니다.
  label: String, // slot이 없을 때 표시할 레이블입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();

const orientations = new Set(['', 'left', 'right']); // 지원하는 레이블 위치입니다.
const tags = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 모드입니다.

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

// 방향·점선·plain·레이블 위치 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'divider', // 구분선 기본 클래스입니다.
    props.vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    props.dashed && 'divider_dashed', // 점선 변형입니다.
    props.plain && 'divider_plain', // 레이블 굵기를 낮추는 변형입니다.
    orientations.has(resolvedOrient.value) &&
      resolvedOrient.value &&
      \`divider_orient-\${resolvedOrient.value}\`, // 검증된 레이블 위치입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
<\/script>

<template>
  <!-- 루트 태그를 결정하고 속성·클래스·세로선 aria-hidden을 전달합니다. -->
  <component
    :is="rootTag"
    v-bind="attrs"
    :class="classes"
    data-component="Divider"
    :aria-hidden="vertical ? 'true' : undefined"
  >
    <!-- hr에는 자식을 두지 않고, 그 외에는 slot 또는 label을 렌더링합니다. -->
    <slot v-if="rootTag !== 'hr'">{{ label }}</slot>
  </component>
</template>
`})))()}var H;function U(){return(U=e((()=>{H=`<!-- Space 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. -->
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
</div>`})))()}var de;function fe(){return(fe=e((()=>{de=`{# Space 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. #}
{# space 클래스로 기본 inline-flex 간격 컨테이너를 만듭니다. 기본 간격은 md입니다. #}
<div class="space" data-component="Space">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

{# gap·방향·줄바꿈·너비·정렬 변형 클래스를 조합합니다. #}
<div class="space space_gap-sm space_vertical space_align-stretch" data-component="Space">
  <div>첫 번째</div>
  <div>두 번째</div>
</div>

{# 부모 너비를 채우고 줄바꿈하려면 space_block과 space_wrap을 함께 지정합니다. #}
<div class="space space_block space_wrap space_justify-between" data-component="Space">
  <div>시작</div>
  <div>끝</div>
</div>`})))()}var pe;function me(){return(me=e((()=>{pe=`/**
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
`})))()}var he;function ge(){return(ge=e((()=>{he=`<!--
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
`})))()}function W(e,t,n,r={}){let i=r.reactFile??`${e}.jsx`,a=r.vueFile??`${e}.vue`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/layout/${e}/${e}.html`,code:n.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/layout/${e}/${t}.njk`,code:n.gulp},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/layout/${e}/${a}`,code:n.vue},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/${t} → ${a}`,code:n.vue},{id:`react`,label:`React`,fileName:`apps/react/src/components/layout/${e}/${i}`,code:n.react},{id:`next`,label:`Next`,fileName:`@uxkm/react/${t} → ${i}`,code:n.react}]}var G,_e,K,ve,ye;function be(){return(be=e((()=>{g(),ae(),se(),le(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),z(),V(),U(),fe(),me(),ge(),G=(...e)=>e.join(`

`),_e=W(`Grid`,`grid`,{html:ie,gulp:oe,react:G(ce,`<!-- GridCol.jsx -->\n${ue}`),vue:G(v,`<!-- GridCol.vue -->\n${b}`)},{reactFile:`Grid.jsx · GridCol.jsx`,vueFile:`Grid.vue · GridCol.vue`}),K=W(`Flex`,`flex`,{html:S,gulp:w,react:G(E,`<!-- FlexItem.jsx -->\n${O}`),vue:G(A,`<!-- FlexItem.vue -->\n${M}`)},{reactFile:`Flex.jsx · FlexItem.jsx`,vueFile:`Flex.vue · FlexItem.vue`}),ve=W(`Divider`,`divider`,{html:P,gulp:I,react:R,vue:B}),ye=W(`Space`,`space`,{html:H,gulp:de,react:pe,vue:he})})))()}function q(e,t,n,r,i,a=[],o=`컴포넌트 이름`){let s=Ce.map(e=>e.name===`children`?{...e,default:o}:e),c=Te.map(e=>({...e,default:o}));return[{title:`React · Next.js API · Props`,description:`Next.js는 \`@uxkm/react/${t}\`를 재사용합니다.`,tables:[{columns:J,rows:[...n,...s]}]},{title:`Vue · Nuxt API · Props`,description:`Nuxt는 \`@uxkm/vue/${t}\`를 재사용합니다.`,tables:[{columns:J,rows:[...Se(n),...we]}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:J,rows:c}]},{title:`HTML · Gulp API · Markup`,description:`HTML과 Gulp는 ${e} OOCSS 클래스를 직접 적용합니다.`,tables:[{columns:J,rows:Ee}]},{title:`공통 API · 클래스`,tables:[{columns:J,rows:r}]},{title:`공통 API · 디자인 토큰`,tables:[{columns:J,rows:i}]},...a]}var J,xe,Se,Ce,we,Te,Ee,Y,De,Oe,ke,Ae,X,je,Me,Ne,Pe,Fe,Ie,Z,Le,Re,Q,ze,Be,$,Ve,He;function Ue(){return(Ue=e((()=>{J=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],xe=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Se=e=>e.map(e=>({...e,name:xe(e.name)})),Ce=[{name:`children`,type:`ReactNode`,default:`컴포넌트 이름`,description:`내부 콘텐츠입니다.`},{name:`className`,type:`string`,default:`''`,description:`루트에 추가할 클래스입니다.`},{name:`...props`,type:`HTML attributes`,default:`—`,description:`루트 요소에 전달할 네이티브 속성입니다.`}],we=[{name:`class`,type:`string | object | array`,default:`—`,description:`루트에 추가할 클래스 바인딩입니다.`},{name:`v-bind`,type:`HTML attributes`,default:`—`,description:`루트 요소에 전달할 네이티브 속성입니다.`}],Te=[{name:`default`,type:`slot`,default:`컴포넌트 이름`,description:`내부 콘텐츠입니다.`}],Ee=[{name:`class`,type:`string`,default:`루트 클래스`,description:`루트 클래스와 변형 클래스를 마크업에 직접 조합합니다.`},{name:`data-component`,type:`string`,default:`—`,description:`컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.`}],Y={name:`as`,type:`string | component`,default:`'div'`,description:`렌더링할 루트 요소 또는 컴포넌트입니다.`},De=[Y,{name:`cols`,type:`1~12`,default:`—`,description:`기본 화면의 열 수입니다. columns 별칭도 지원합니다.`},{name:`colsMd`,type:`1~12`,default:`—`,description:`md 이상 화면의 열 수입니다. columnsMd 별칭도 지원합니다.`},{name:`colsLg`,type:`1~12`,default:`—`,description:`lg 이상 화면의 열 수입니다. columnsLg 별칭도 지원합니다.`},{name:`gap`,type:`'' | 'sm' | 'lg' | 'none' | number | CSS length`,default:`''`,description:`열과 행 사이 간격입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 --grid-current-gap으로 적용합니다.`},{name:`ratio`,type:`'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`,default:`—`,description:`미리 정의된 열 비율입니다.`},{name:`itemSpan`,type:`1~12`,default:`—`,description:`모든 직계 자식에 적용할 12열 기준 span입니다.`},{name:`itemSpanMd`,type:`1~12`,default:`—`,description:`md 이상에서 모든 자식에 적용할 span입니다.`},{name:`itemSpanLg`,type:`1~12`,default:`—`,description:`lg 이상에서 모든 자식에 적용할 span입니다.`},{name:`autoFit`,type:`boolean`,default:`false`,description:`가능한 만큼 자동 열을 배치하고 빈 공간을 채웁니다.`},{name:`autoFill`,type:`boolean`,default:`false`,description:`최소 너비 기준의 열 트랙을 자동 생성합니다.`},{name:`equalColumns`,type:`boolean`,default:`false`,description:`자식 수만큼 같은 너비의 자동 열을 만듭니다.`},{name:`align`,type:`'' | 'center' | 'end'`,default:`''`,description:`자식의 교차축 정렬입니다.`}],Oe=[{name:`grid`,type:`class`,default:`—`,description:`12열 기본 Grid 루트입니다.`},{name:`grid_cols-1~12 · grid_cols-md-* · grid_cols-lg-*`,type:`class`,default:`—`,description:`기본·반응형 열 수입니다.`},{name:`grid_col-span-1~12 · grid_col-span-md-* · grid_col-span-lg-*`,type:`class`,default:`—`,description:`개별 자식의 열 span입니다.`},{name:`grid_item-span-1~12 · grid_item-span-md-* · grid_item-span-lg-*`,type:`class`,default:`—`,description:`모든 직계 자식의 열 span입니다.`},{name:`grid_ratio-*`,type:`class`,default:`—`,description:`1-1, 2-1, 1-2, 3-1, 1-1-1, 1-2-1 비율입니다.`},{name:`grid_gap-sm · grid_gap-lg · grid_gap-none`,type:`class`,default:`—`,description:`간격 변형입니다.`},{name:`grid_auto-fit · grid_auto-fill · grid_equal-columns`,type:`class`,default:`—`,description:`자동 열 배치 방식입니다.`},{name:`grid_align-center · grid_align-end`,type:`class`,default:`—`,description:`자식 정렬입니다.`}],ke=[{name:`--grid-columns`,type:`number`,default:`12`,description:`기본 열 수입니다.`},{name:`--grid-gap · --grid-gap-sm · --grid-gap-lg`,type:`length`,default:`space-md · space-sm · space-lg`,description:`기본·크기별 간격입니다.`},{name:`--grid-current-gap`,type:`length`,default:`var(--grid-gap)`,description:`실제 적용 간격입니다. 수치·CSS 길이 gap이 이 변수를 덮어씁니다.`},{name:`--grid-auto-min`,type:`length`,default:`10rem`,description:`자동 배치 열의 최소 너비입니다.`}],Ae=[{name:`as`,type:`string | component`,default:`'div'`,description:`GridCol의 루트 요소입니다.`},{name:`span`,type:`1~12`,default:`—`,description:`기본 화면의 개별 열 span입니다.`},{name:`spanMd`,type:`1~12`,default:`—`,description:`md 이상 개별 열 span입니다.`},{name:`spanLg`,type:`1~12`,default:`—`,description:`lg 이상 개별 열 span입니다.`},{name:`children / default`,type:`ReactNode / slot`,default:`—`,description:`GridCol 내부 콘텐츠입니다.`}],X=q(`Grid`,`grid`,De,Oe,ke),je=[{name:`w2:group`,type:`component`,default:`—`,description:`Grid와 GridCol의 WebSquare 레이아웃 루트입니다. 중첩 group으로 부모·자식 구조를 표현합니다.`},{name:`class`,type:`string`,default:`'grid'`,description:`Grid에는 grid와 배치 변형을, GridCol에는 grid_col-span-* 변형을 조합합니다.`},{name:`tagname`,type:`string`,default:`'div'`,description:`header, aside, main, footer 등 콘텐츠 의미에 맞는 HTML 태그를 지정합니다.`},{name:`id`,type:`string`,default:`—`,description:`WebSquare 화면 안에서 중복되지 않는 Grid 또는 GridCol ID를 지정합니다.`}],Me=[...X.slice(0,4),{title:`WebSquare API · XML`,description:`Grid는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.`,tables:[{columns:J,rows:je}]},...X.slice(4),{title:`React · Vue 공통 API · GridCol`,description:`혼합 열 레이아웃에서 개별 자식의 span을 지정합니다.`,tables:[{columns:J,rows:Ae}]}],Ne=[Y,{name:`direction`,type:`'row' | 'column'`,default:`'row'`,description:`기본 배치 방향입니다. col 별칭도 지원합니다.`},{name:`directionMd`,type:`'row' | 'column'`,default:`—`,description:`md 이상 배치 방향입니다.`},{name:`directionLg`,type:`'row' | 'column'`,default:`—`,description:`lg 이상 배치 방향입니다.`},{name:`wrap`,type:`boolean`,default:`false`,description:`자식 줄바꿈을 허용합니다.`},{name:`gap`,type:`'' | 'sm' | 'lg' | 'none' | number | CSS length`,default:`''`,description:`자식 간 간격입니다. 프리셋은 클래스, 숫자(rem)·CSS 길이는 --flex-current-gap으로 적용합니다.`},{name:`cols · colsMd · colsLg`,type:`1~12`,default:`—`,description:`기본·반응형 화면에서 한 행의 균등한 자식 수입니다. columns 계열 별칭도 지원합니다.`},{name:`ratio`,type:`'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`,default:`—`,description:`직계 자식의 미리 정의된 flex 비율입니다.`},{name:`itemSpan · itemSpanMd · itemSpanLg`,type:`1~12`,default:`—`,description:`기본·반응형 화면에서 모든 직계 자식의 12단위 span입니다.`},{name:`equal`,type:`boolean`,default:`false`,description:`모든 직계 자식을 같은 비율로 확장합니다.`},{name:`autoFit`,type:`boolean`,default:`false`,description:`최소 너비 기준으로 자식을 자동 줄바꿈합니다.`},{name:`align`,type:`'start' | 'center' | 'end' | 'stretch' | 'baseline'`,default:`—`,description:`교차축 정렬입니다.`},{name:`justify`,type:`'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'`,default:`—`,description:`주축 정렬입니다.`}],Pe=[{name:`flex · flex_row · flex_col`,type:`class`,default:`—`,description:`루트와 배치 방향입니다.`},{name:`flex_row-md/lg · flex_col-md/lg · flex_wrap`,type:`class`,default:`—`,description:`반응형 방향과 줄바꿈입니다.`},{name:`flex_cols-1~12 · flex_cols-md-* · flex_cols-lg-*`,type:`class`,default:`—`,description:`행별 균등 자식 수입니다.`},{name:`flex_item-span-* · flex_items-span-*`,type:`class`,default:`—`,description:`개별·전체 자식 span이며 md, lg 변형을 지원합니다.`},{name:`flex_ratio-* · flex_equal · flex_auto-fit`,type:`class`,default:`—`,description:`자식 너비 분배 방식입니다.`},{name:`flex_align-* · flex_justify-* · flex_self-*`,type:`class`,default:`—`,description:`부모·개별 자식 정렬입니다.`},{name:`flex_grow · flex_grow-2 · flex_fit · flex_order-1~12`,type:`class`,default:`—`,description:`개별 자식의 확장·고정·순서입니다.`},{name:`flex_gap-sm · flex_gap-lg · flex_gap-none`,type:`class`,default:`—`,description:`간격 변형입니다.`}],Fe=[{name:`--flex-gap · --flex-gap-sm · --flex-gap-lg`,type:`length`,default:`space-md · space-sm · space-lg`,description:`기본·크기별 간격입니다.`},{name:`--flex-current-gap`,type:`length`,default:`var(--flex-gap)`,description:`실제 적용 간격입니다. 수치·CSS 길이 gap이 이 변수를 덮어씁니다.`},{name:`--flex-auto-min`,type:`length`,default:`10rem`,description:`자동 배치 자식의 최소 너비입니다.`}],Ie=[{name:`as`,type:`string | component`,default:`'div'`,description:`FlexItem의 루트 요소입니다.`},{name:`span · spanMd · spanLg`,type:`1~12`,default:`—`,description:`기본·md·lg 화면의 개별 항목 span입니다.`},{name:`grow`,type:`boolean`,default:`false`,description:`남는 공간을 채우도록 확장합니다.`},{name:`growFactor`,type:`1 | 2`,default:`1`,description:`grow 항목의 확장 비율입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비를 유지합니다.`},{name:`align`,type:`'auto' | 'start' | 'center' | 'end' | 'stretch' | 'baseline'`,default:`—`,description:`개별 항목의 교차축 정렬입니다.`},{name:`order`,type:`1~12`,default:`—`,description:`항목 표시 순서입니다.`},{name:`children / default`,type:`ReactNode / slot`,default:`—`,description:`FlexItem 내부 콘텐츠입니다.`}],Z=q(`Flex`,`flex`,Ne,Pe,Fe),Le=[{name:`w2:group`,type:`component`,default:`—`,description:`Flex와 FlexItem의 WebSquare 레이아웃 루트입니다. 중첩 group으로 부모·자식 구조를 표현합니다.`},{name:`class`,type:`string`,default:`'flex flex_row'`,description:`Flex에는 방향·정렬·배치 클래스를, FlexItem에는 span·grow·fit·self 클래스를 조합합니다.`},{name:`tagname`,type:`string`,default:`'div'`,description:`header, aside, main, footer 등 콘텐츠 의미에 맞는 HTML 태그를 지정합니다.`},{name:`id`,type:`string`,default:`—`,description:`WebSquare 화면 안에서 중복되지 않는 Flex 또는 FlexItem ID를 지정합니다.`}],Re=[...Z.slice(0,4),{title:`WebSquare API · XML`,description:`Flex는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.`,tables:[{columns:J,rows:Le}]},...Z.slice(4),{title:`React · Vue 공통 API · FlexItem`,description:`혼합 레이아웃에서 개별 항목의 span·확장·정렬·순서를 지정합니다.`,tables:[{columns:J,rows:Ie}]}],Q=q(`Divider`,`divider`,[{name:`tag`,type:`'auto' | 'hr' | 'div' | 'span'`,default:`'auto'`,description:`루트 태그입니다. auto는 선 hr, 레이블 div, 세로선 span을 선택합니다.`},{name:`as`,type:`string | component`,default:`—`,description:`tag보다 우선하는 루트 요소 호환 prop입니다.`},{name:`vertical`,type:`boolean`,default:`false`,description:`세로 구분선을 사용합니다.`},{name:`dashed`,type:`boolean`,default:`false`,description:`선을 dashed 스타일로 표시합니다.`},{name:`plain`,type:`boolean`,default:`false`,description:`레이블 굵기를 일반 두께로 표시합니다.`},{name:`orient`,type:`'' | 'left' | 'right'`,default:`''`,description:`레이블의 수평 위치입니다. orientation 별칭도 지원합니다.`},{name:`label`,type:`string`,default:`—`,description:`children 또는 기본 슬롯 대신 사용할 레이블입니다.`}],[{name:`divider`,type:`class`,default:`—`,description:`기본 수평 구분선이며 콘텐츠가 있으면 양쪽 선과 레이블로 표시됩니다.`},{name:`divider_dashed · divider_plain`,type:`class`,default:`—`,description:`점선과 일반 굵기 레이블입니다.`},{name:`divider_orient-left · divider_orient-right`,type:`class`,default:`—`,description:`레이블 위치입니다.`},{name:`divider_vertical`,type:`class`,default:`—`,description:`세로 구분선입니다.`}],[{name:`--divider-color · --divider-thickness`,type:`color · length`,default:`border-subtle · 1px`,description:`선 색상과 두께입니다.`},{name:`--divider-margin-y · --divider-margin-x`,type:`length`,default:`space-md · space-sm`,description:`수평·세로 구분선 외부 간격입니다.`},{name:`--divider-text-gap · --divider-orient-inset`,type:`length`,default:`space-md · 5%`,description:`레이블과 선 간격 및 좌우 inset입니다.`}],[],`—`),ze=[{name:`hr`,type:`XHTML element`,default:`—`,description:`레이블 없는 의미 있는 수평 구분선입니다. divider 클래스를 직접 적용합니다.`},{name:`w2:group + w2:textbox`,type:`component`,default:`—`,description:`레이블형 Divider입니다. group에 divider 변형 클래스를, textbox의 label에 텍스트를 지정합니다.`},{name:`span[aria-hidden="true"]`,type:`XHTML element`,default:`—`,description:`장식용 세로 구분선입니다. divider_vertical 클래스를 적용하고 접근성 트리에서 숨깁니다.`},{name:`id`,type:`string`,default:`—`,description:`w2:group과 w2:textbox에는 화면 안에서 중복되지 않는 ID를 지정합니다.`}],Be=[...Q.slice(0,4),{title:`WebSquare API · XML`,description:`Divider의 의미와 렌더링 방식에 따라 XHTML hr·span과 WebSquare group·textbox를 구분해 사용합니다. 이벤트와 데이터 바인딩은 필요하지 않습니다.`,tables:[{columns:J,rows:ze}]},...Q.slice(4)],$=q(`Space`,`space`,[Y,{name:`gap`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,default:`'md'`,description:`자식 사이 간격입니다. size 별칭도 지원합니다.`},{name:`vertical`,type:`boolean`,default:`false`,description:`자식을 세로로 배치합니다.`},{name:`wrap`,type:`boolean`,default:`false`,description:`자식 줄바꿈을 허용합니다.`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비를 채우는 block flex로 표시합니다.`},{name:`align`,type:`'start' | 'center' | 'end' | 'baseline' | 'stretch'`,default:`center`,description:`교차축 정렬입니다.`},{name:`justify`,type:`'start' | 'center' | 'end' | 'between'`,default:`—`,description:`주축 정렬입니다.`}],[{name:`space`,type:`class`,default:`—`,description:`기본 inline-flex 간격 컨테이너입니다.`},{name:`space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl`,type:`class`,default:`—`,description:`간격 크기입니다.`},{name:`space_vertical · space_wrap · space_block`,type:`class`,default:`—`,description:`방향·줄바꿈·너비 변형입니다.`},{name:`space_align-* · space_justify-*`,type:`class`,default:`—`,description:`교차축·주축 정렬입니다.`}],[{name:`--space-gap`,type:`length`,default:`var(--space-md)`,description:`기본 자식 간격입니다.`},{name:`--space-xs · --space-sm · --space-lg · --space-xl`,type:`length`,default:`공통 spacing token`,description:`크기별 간격에 사용하는 공통 토큰입니다.`}]),Ve=[{name:`w2:group`,type:`component`,default:`—`,description:`Space의 WebSquare 루트입니다. 자식 컴포넌트를 순서대로 배치하는 레이아웃 그룹으로 사용합니다.`},{name:`class`,type:`string`,default:`'space'`,description:`space와 gap·vertical·wrap·block·align·justify 변형 클래스를 조합합니다.`},{name:`tagname`,type:`string`,default:`'div'`,description:`목록이나 도구 모음 등 콘텐츠 구조에 맞는 HTML 루트 태그가 필요할 때 지정합니다.`},{name:`id`,type:`string`,default:`—`,description:`WebSquare 화면 안에서 중복되지 않는 Space ID를 지정합니다.`}],He=[...$.slice(0,4),{title:`WebSquare API · XML`,description:`Space는 CSS 기반 구조 컴포넌트이므로 scwin 이벤트나 DataList 바인딩 없이 w2:group에 공통 클래스를 적용합니다.`,tables:[{columns:J,rows:Ve}]},...$.slice(4)]})))()}export{He as a,_e as c,ne as d,te as f,re as h,Ue as i,be as l,g as m,Re as n,ve as o,ee as p,Me as r,K as s,Be as t,ye as u};
import{B as e,G as t,H as n,L as r,U as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,st as p,u as m,wt as h,y as g,z as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{t as S}from"./DD3RWXAt.js";var C=Object.assign({inheritAttrs:!1},{__name:`Flex`,props:{direction:{type:String,default:`row`,validator:e=>[`row`,`column`].includes(e)},directionMd:{type:String,validator:e=>[`row`,`column`].includes(e)},directionLg:{type:String,validator:e=>[`row`,`column`].includes(e)},wrap:Boolean,cols:[Number,String],colsMd:[Number,String],colsLg:[Number,String],ratio:String,itemSpan:[Number,String],itemSpanMd:[Number,String],itemSpanLg:[Number,String],gap:{type:String,default:``,validator:e=>[``,`sm`,`lg`,`none`].includes(e)},align:{type:String,default:`stretch`,validator:e=>[`start`,`center`,`end`,`stretch`,`baseline`].includes(e)},justify:{type:String,validator:e=>[`start`,`center`,`end`,`between`,`around`,`evenly`].includes(e)},equal:Boolean,autoFit:Boolean},setup(n){let a=n,o=t(),s=i(),c=f(null),l=v(`Flex`,{defaults:{direction:`row`,align:`stretch`},booleanProps:new Set([`wrap`,`equal`,`autoFit`]),selfClosing:!1});x(l,a,o,c,s);let h=(e,t=``)=>`flex_${e===`column`?`col`:`row`}${t}`,g=m(()=>{let e=[`flex`,h(a.direction)];return a.directionMd&&e.push(h(a.directionMd,`-md`)),a.directionLg&&e.push(h(a.directionLg,`-lg`)),a.wrap&&e.push(`flex_wrap`),a.cols!=null&&e.push(`flex_cols-${a.cols}`),a.colsMd!=null&&e.push(`flex_cols-md-${a.colsMd}`),a.colsLg!=null&&e.push(`flex_cols-lg-${a.colsLg}`),a.ratio&&e.push(`flex_ratio-${a.ratio}`),a.itemSpan!=null&&e.push(`flex_items-span-${a.itemSpan}`),a.itemSpanMd!=null&&e.push(`flex_items-span-md-${a.itemSpanMd}`),a.itemSpanLg!=null&&e.push(`flex_items-span-lg-${a.itemSpanLg}`),a.gap&&e.push(`flex_gap-${a.gap}`),a.align&&e.push(`flex_align-${a.align}`),a.justify&&e.push(`flex_justify-${a.justify}`),a.equal&&e.push(`flex_equal`),a.autoFit&&e.push(`flex_auto-fit`),e});return(t,n)=>(r(),d(`div`,u({ref_key:`rootRef`,ref:c},p(s),{class:g.value}),[e(t.$slots,`default`)],16))}}),w=Object.assign({inheritAttrs:!1},{__name:`FlexItem`,props:{as:{type:String,default:`div`},span:[Number,String],spanMd:[Number,String],spanLg:[Number,String],grow:Boolean,fit:Boolean,align:{type:String,validator:e=>[`auto`,`start`,`center`,`end`,`stretch`,`baseline`].includes(e)},order:[Number,String]},setup(o){let s=o,l=t(),d=i(),h=f(null),g=v(`FlexItem`,{defaults:{as:`div`},booleanProps:new Set([`grow`,`fit`]),selfClosing:!1});x(g,s,l,h,d);let _=m(()=>{let e=[];return s.span!=null&&e.push(`flex_item-span-${s.span}`),s.spanMd!=null&&e.push(`flex_item-span-md-${s.spanMd}`),s.spanLg!=null&&e.push(`flex_item-span-lg-${s.spanLg}`),s.grow&&e.push(`flex_grow`),s.fit&&e.push(`flex_fit`),s.align&&e.push(`flex_self-${s.align}`),s.order!=null&&e.push(`flex_order-${s.order}`),e});return(t,i)=>(r(),c(n(s.as),u({ref_key:`rootRef`,ref:h},p(d),{class:_.value}),{default:a(()=>[e(t.$slots,`default`)]),_:3},16,[`class`]))}}),T=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],E=[{name:`direction`,type:`'row' | 'column'`,default:`'row'`,description:`기본 배치 방향`},{name:`direction-md`,type:`'row' | 'column'`,default:`—`,description:`md 이상 배치 방향`},{name:`direction-lg`,type:`'row' | 'column'`,default:`—`,description:`lg 이상 배치 방향`},{name:`wrap`,type:`boolean`,default:`false`,description:`자식 줄바꿈 (flex_wrap)`},{name:`cols`,type:`number | string`,default:`—`,description:`균등 항목 수 (flex_cols-*)`},{name:`cols-md`,type:`number | string`,default:`—`,description:`md 이상 균등 항목 수`},{name:`cols-lg`,type:`number | string`,default:`—`,description:`lg 이상 균등 항목 수`},{name:`ratio`,type:`'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`,default:`—`,description:`2~3개 자식의 grow 비율`},{name:`item-span`,type:`number | string`,default:`—`,description:`모든 자식의 12단위 너비 (flex_items-span-*)`},{name:`item-span-md`,type:`number | string`,default:`—`,description:`md 이상 자식 일괄 너비`},{name:`item-span-lg`,type:`number | string`,default:`—`,description:`lg 이상 자식 일괄 너비`},{name:`gap`,type:`'sm' | 'lg' | 'none'`,default:`—`,description:`항목 간격. 생략 시 --flex-gap`},{name:`align`,type:`'start' | 'center' | 'end' | 'stretch' | 'baseline'`,default:`'stretch'`,description:`교차축 정렬`},{name:`justify`,type:`'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'`,default:`—`,description:`주축 정렬`},{name:`equal`,type:`boolean`,default:`false`,description:`모든 자식에 동일 grow 적용`},{name:`auto-fit`,type:`boolean`,default:`false`,description:`최소 너비를 기준으로 항목 자동 배치`}],D=T,O=[{name:`as`,type:`string`,default:`'div'`,description:`렌더링할 HTML 요소`},{name:`span`,type:`number | string`,default:`—`,description:`12단위 개별 너비`},{name:`span-md`,type:`number | string`,default:`—`,description:`md 이상 개별 너비`},{name:`span-lg`,type:`number | string`,default:`—`,description:`lg 이상 개별 너비`},{name:`grow`,type:`boolean`,default:`false`,description:`남는 공간 채우기 (flex_grow)`},{name:`fit`,type:`boolean`,default:`false`,description:`콘텐츠 너비 유지 (flex_fit)`},{name:`align`,type:`'auto' | 'start' | 'center' | 'end' | 'stretch' | 'baseline'`,default:`—`,description:`해당 항목의 교차축 정렬`},{name:`order`,type:`1–12`,default:`—`,description:`시각적 배치 순서`}],k=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],A=[{name:`default`,description:`Flex 자식 콘텐츠`}],j=k,M=[{name:`default`,description:`Flex 항목 내부 콘텐츠`}],N=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],P=[{name:`flex · flex_row · flex_col`,description:`Flex 루트와 배치 방향`},{name:`flex_row-md · flex_col-md · flex_row-lg · flex_col-lg`,description:`반응형 배치 방향`},{name:`flex_wrap`,description:`항목 줄바꿈`},{name:`flex_cols-* · flex_cols-md-* · flex_cols-lg-*`,description:`균등 항목 수`},{name:`flex_ratio-* · flex_equal`,description:`자식 비율 · 균등 grow`},{name:`flex_auto-fit`,description:`최소 너비 기반 자동 줄바꿈 배치`},{name:`flex_items-span-* · flex_items-span-md-* · flex_items-span-lg-*`,description:`모든 자식의 12단위 너비`},{name:`flex_item-span-* · flex_item-span-md-* · flex_item-span-lg-*`,description:`개별 자식의 12단위 너비`},{name:`flex_gap-sm · flex_gap-lg · flex_gap-none`,description:`간격 변형`},{name:`flex_align-* · flex_justify-* · flex_self-*`,description:`부모·자식 정렬`},{name:`flex_grow · flex_fit · flex_order-*`,description:`자식 grow · 고정 너비 · 순서`}],F=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],I=[{name:`--flex-gap`,default:`var(--space-md)`,description:`기본 간격`},{name:`--flex-gap-sm · --flex-gap-lg`,default:`var(--space-sm) · var(--space-lg)`,description:`간격 변형`},{name:`--flex-auto-min`,default:`10rem`,description:`자동 배치 항목의 최소 너비`}],L={title:`Flex | UXKM Guide`,activeNav:`flex`,pageTitle:`Flex`},R={__name:`flex`,setup(e){return(e,t)=>(r(),d(l,null,[t[18]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Flex`),s(`p`,{class:`lead`},` CSS Flexbox 기반의 1차원 레이아웃 시스템입니다. Grid와 같은 방식으로 부모에서 균등 배치·비율·간격·반응형 크기를 제어하고, 필요한 경우에만 FlexItem을 사용합니다. `)],-1),o(S,{"heading-id":`basic-layout-heading`,title:`기본 페이지 레이아웃`,description:`헤더와 푸터는 전체 너비를 사용하고, 본문은 md 이상에서 사이드바 3/12와 콘텐츠 9/12로 나눕니다.`,stack:``,code:`<template>
  <Flex wrap gap="sm">
    <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
    <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
    <FlexItem as="section" :span="12" :span-md="9" class="flex_demo-cell">
      Main content
    </FlexItem>
    <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
  </Flex>
</template>`},{default:a(()=>[o(C,{wrap:``,gap:`sm`},{default:a(()=>[o(w,{as:`header`,span:12,class:`flex_demo-cell`},{default:a(()=>[...t[0]||=[g(`Header`,-1)]]),_:1}),o(w,{as:`aside`,span:12,"span-md":3,class:`flex_demo-cell`},{default:a(()=>[...t[1]||=[g(`Sidebar`,-1)]]),_:1}),o(w,{as:`section`,span:12,"span-md":9,class:`flex_demo-cell`,"aria-label":`Main content`},{default:a(()=>[...t[2]||=[g(`Main content`,-1)]]),_:1}),o(w,{as:`footer`,span:12,class:`flex_demo-cell`},{default:a(()=>[...t[3]||=[g(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),o(S,{"heading-id":`content-layout-heading`,title:`콘텐츠가 있는 페이지 레이아웃`,description:`기본 레이아웃의 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다.`,stack:``,code:`<template>
  <Flex wrap gap="sm" align="stretch">
    <FlexItem as="header" :span="12" class="flex_demo-cell">Header</FlexItem>
    <FlexItem as="aside" :span="12" :span-md="3" class="flex_demo-cell">Sidebar</FlexItem>
    <FlexItem
      as="section"
      :span="12"
      :span-md="9"
      class="flex_demo-cell"
      aria-label="Main content"
    >
      <h3>Main content</h3>
      <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
      <Flex :cols="1" :cols-lg="2" gap="sm">
        <article class="component_stub">
          <h4>Content section</h4>
          <p>주요 정보나 기능을 배치합니다.</p>
        </article>
        <article class="component_stub">
          <h4>Content section</h4>
          <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
        </article>
      </Flex>
    </FlexItem>
    <FlexItem as="footer" :span="12" class="flex_demo-cell">Footer</FlexItem>
  </Flex>
</template>`},{default:a(()=>[o(C,{wrap:``,gap:`sm`,align:`stretch`},{default:a(()=>[o(w,{as:`header`,span:12,class:`flex_demo-cell`},{default:a(()=>[...t[4]||=[g(`Header`,-1)]]),_:1}),o(w,{as:`aside`,span:12,"span-md":3,class:`flex_demo-cell`},{default:a(()=>[...t[5]||=[g(`Sidebar`,-1)]]),_:1}),o(w,{as:`section`,span:12,"span-md":9,class:`flex_demo-cell`,"aria-label":`Main content`},{default:a(()=>[t[7]||=s(`h3`,null,`Main content`,-1),t[8]||=s(`p`,null,`페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.`,-1),o(C,{cols:1,"cols-lg":2,gap:`sm`},{default:a(()=>[...t[6]||=[s(`article`,{class:`component_stub`},[s(`h4`,null,`Content section`),s(`p`,null,`주요 정보나 기능을 배치합니다.`)],-1),s(`article`,{class:`component_stub`},[s(`h4`,null,`Content section`),s(`p`,null,`관련 정보나 보조 콘텐츠를 배치합니다.`)],-1)]]),_:1})]),_:1}),o(w,{as:`footer`,span:12,class:`flex_demo-cell`},{default:a(()=>[...t[9]||=[g(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),o(S,{"heading-id":`parent-heading`,title:`부모에서 제어`,description:`방향·비율·자식 일괄 span은 부모 Flex에 지정합니다.`,stack:``,code:`<template>
  <Flex :cols="3">
    <div class="flex_demo-cell">flex_cols-3</div>
    <div class="flex_demo-cell">flex_cols-3</div>
    <div class="flex_demo-cell">flex_cols-3</div>
  </Flex>
  <Flex ratio="2-1">
    <div class="flex_demo-cell">flex_ratio-2-1</div>
    <div class="flex_demo-cell">flex_ratio-2-1</div>
  </Flex>
  <Flex :item-span="4">
    <div v-for="item in 6" :key="item" class="flex_demo-cell">
      flex_items-span-4
    </div>
  </Flex>
</template>`},{default:a(()=>[o(C,{cols:3},{default:a(()=>[(r(),d(l,null,_(3,e=>s(`div`,{key:e,class:`flex_demo-cell`},`flex_cols-3`)),64))]),_:1}),o(C,{ratio:`2-1`},{default:a(()=>[...t[10]||=[s(`div`,{class:`flex_demo-cell`},`1`,-1),s(`div`,{class:`flex_demo-cell`},`2`,-1)]]),_:1}),o(C,{"item-span":4},{default:a(()=>[(r(),d(l,null,_(6,e=>s(`div`,{key:e,class:`flex_demo-cell`},`flex_items-span-4`)),64))]),_:1})]),_:1}),o(S,{"heading-id":`twelve-columns-heading`,title:`12열 전체 활용`,description:`item-span=1을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다.`,stack:``,code:`<template>
  <Flex :item-span="1" gap="sm">
    <div v-for="item in 12" :key="item" class="flex_demo-cell">
      {{ item }}
    </div>
  </Flex>
</template>`},{default:a(()=>[o(C,{"item-span":1,gap:`sm`},{default:a(()=>[(r(),d(l,null,_(12,e=>s(`div`,{key:e,class:`flex_demo-cell`},h(e),1)),64))]),_:1})]),_:1}),o(S,{"heading-id":`equal-heading`,title:`균등 항목`,description:`cols로 동일 너비 항목 수를 지정하고 간격을 제외한 공간을 균등 분할합니다.`,stack:``,code:`<template>
  <Flex :cols="2">
    <div class="flex_demo-cell">cols 2</div>
    <div class="flex_demo-cell">cols 2</div>
  </Flex>
  <Flex :cols="4">
    <div v-for="item in 4" :key="item" class="flex_demo-cell">cols 4</div>
  </Flex>
</template>`},{default:a(()=>[o(C,{cols:2},{default:a(()=>[(r(),d(l,null,_(2,e=>s(`div`,{key:e,class:`flex_demo-cell`},`cols 2`)),64))]),_:1}),o(C,{cols:4},{default:a(()=>[(r(),d(l,null,_(4,e=>s(`div`,{key:e,class:`flex_demo-cell`},`cols 4`)),64))]),_:1})]),_:1}),o(S,{"heading-id":`ratio-heading`,title:`비율 항목`,description:`ratio로 2~3개 항목의 grow 비율을 부모에서 지정합니다.`,stack:``,code:`<template>
  <Flex ratio="1-2">
    <div class="flex_demo-cell">1</div>
    <div class="flex_demo-cell">2</div>
  </Flex>
  <Flex ratio="1-2-1">
    <div class="flex_demo-cell">1</div>
    <div class="flex_demo-cell">2</div>
    <div class="flex_demo-cell">1</div>
  </Flex>
</template>`},{default:a(()=>[o(C,{ratio:`1-2`},{default:a(()=>[...t[11]||=[s(`div`,{class:`flex_demo-cell`},`1`,-1),s(`div`,{class:`flex_demo-cell`},`2`,-1)]]),_:1}),o(C,{ratio:`1-2-1`},{default:a(()=>[...t[12]||=[s(`div`,{class:`flex_demo-cell`},`1`,-1),s(`div`,{class:`flex_demo-cell`},`2`,-1),s(`div`,{class:`flex_demo-cell`},`1`,-1)]]),_:1})]),_:1}),o(S,{"heading-id":`item-span-heading`,title:`자식 일괄 span (12단위)`,description:`모든 자식이 같은 너비일 때 item-span을 부모에 지정합니다.`,stack:``,code:`<template>
  <Flex :item-span="6">
    <div v-for="item in 4" :key="item" class="flex_demo-cell">span 6</div>
  </Flex>
  <Flex :item-span="3">
    <div v-for="item in 4" :key="item" class="flex_demo-cell">span 3</div>
  </Flex>
</template>`},{default:a(()=>[o(C,{"item-span":6},{default:a(()=>[(r(),d(l,null,_(4,e=>s(`div`,{key:e,class:`flex_demo-cell`},`span 6`)),64))]),_:1}),o(C,{"item-span":3},{default:a(()=>[(r(),d(l,null,_(4,e=>s(`div`,{key:e,class:`flex_demo-cell`},`span 3`)),64))]),_:1})]),_:1}),o(S,{"heading-id":`child-heading`,title:`자식별 span (혼합 레이아웃)`,description:`항목마다 너비가 다를 때 FlexItem의 span을 사용합니다.`,stack:``,code:`<template>
  <Flex wrap>
    <FlexItem :span="8" class="flex_demo-cell">span 8</FlexItem>
    <FlexItem :span="4" class="flex_demo-cell">span 4</FlexItem>
    <FlexItem v-for="item in 3" :key="item" :span="4" class="flex_demo-cell">
      span 4
    </FlexItem>
  </Flex>
</template>`},{default:a(()=>[o(C,{wrap:``},{default:a(()=>[o(w,{span:8,class:`flex_demo-cell`},{default:a(()=>[...t[13]||=[g(`span 8`,-1)]]),_:1}),o(w,{span:4,class:`flex_demo-cell`},{default:a(()=>[...t[14]||=[g(`span 4`,-1)]]),_:1}),(r(),d(l,null,_(3,e=>o(w,{key:e,span:4,class:`flex_demo-cell`},{default:a(()=>[...t[15]||=[g(`span 4`,-1)]]),_:1})),64))]),_:1})]),_:1}),o(S,{"heading-id":`gap-heading`,title:`간격`,description:`gap으로 기본 간격을 sm·lg·none 중에서 선택합니다.`,stack:``,code:`<template>
  <Flex :cols="3" gap="sm">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">gap sm</div>
  </Flex>
  <Flex :cols="3" gap="lg">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">gap lg</div>
  </Flex>
</template>`},{default:a(()=>[o(C,{cols:3,gap:`sm`},{default:a(()=>[(r(),d(l,null,_(3,e=>s(`div`,{key:e,class:`flex_demo-cell`},`gap sm`)),64))]),_:1}),o(C,{cols:3,gap:`lg`},{default:a(()=>[(r(),d(l,null,_(3,e=>s(`div`,{key:e,class:`flex_demo-cell`},`gap lg`)),64))]),_:1})]),_:1}),o(S,{"heading-id":`responsive-heading`,title:`반응형`,description:`Flex와 FlexItem의 md·lg props로 반응형 배치를 제어합니다.`,stack:``,code:`<template>
  <Flex :cols="1" :cols-md="2" :cols-lg="3">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">1 → md 2 → lg 3개</div>
  </Flex>
  <Flex :item-span="12" :item-span-md="6" :item-span-lg="4">
    <div v-for="item in 3" :key="item" class="flex_demo-cell">span 12 → md 6 → lg 4</div>
  </Flex>
  <Flex wrap>
    <FlexItem :span="12" :span-md="8" :span-lg="9" class="flex_demo-cell">
      개별 span 12 → md 8 → lg 9
    </FlexItem>
    <FlexItem :span="12" :span-md="4" :span-lg="3" class="flex_demo-cell">
      개별 span 12 → md 4 → lg 3
    </FlexItem>
  </Flex>
</template>`},{default:a(()=>[o(C,{cols:1,"cols-md":2,"cols-lg":3},{default:a(()=>[(r(),d(l,null,_(3,e=>s(`div`,{key:e,class:`flex_demo-cell`},`1 → md 2 → lg 3개`)),64))]),_:1}),o(C,{"item-span":12,"item-span-md":6,"item-span-lg":4},{default:a(()=>[(r(),d(l,null,_(3,e=>s(`div`,{key:e,class:`flex_demo-cell`},`span 12 → md 6 → lg 4`)),64))]),_:1}),o(C,{wrap:``},{default:a(()=>[o(w,{span:12,"span-md":8,"span-lg":9,class:`flex_demo-cell`},{default:a(()=>[...t[16]||=[g(`개별 span 12 → md 8 → lg 9`,-1)]]),_:1}),o(w,{span:12,"span-md":4,"span-lg":3,class:`flex_demo-cell`},{default:a(()=>[...t[17]||=[g(`개별 span 12 → md 4 → lg 3`,-1)]]),_:1})]),_:1})]),_:1}),o(S,{"heading-id":`auto-heading`,title:`자동 배치`,description:`auto-fit은 --flex-auto-min을 기준으로 항목을 자동 줄바꿈하고 남는 공간을 채웁니다.`,stack:``,code:`<template>
  <Flex auto-fit>
    <div v-for="item in 6" :key="item" class="flex_demo-cell">auto-fit</div>
  </Flex>
</template>`},{default:a(()=>[o(C,{"auto-fit":``},{default:a(()=>[(r(),d(l,null,_(6,e=>s(`div`,{key:e,class:`flex_demo-cell`},`auto-fit`)),64))]),_:1})]),_:1}),o(y,{"heading-id":`api-props-heading`,title:`API · Flex Props`},{default:a(()=>[o(b,{columns:p(T),rows:p(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-item-props-heading`,title:`API · FlexItem Props`},{default:a(()=>[o(b,{columns:p(D),rows:p(O),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-slots-heading`,title:`API · Flex Slots`},{default:a(()=>[o(b,{columns:p(k),rows:p(A),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-item-slots-heading`,title:`API · FlexItem Slots`},{default:a(()=>[o(b,{columns:p(j),rows:p(M),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(b,{columns:p(N),rows:p(P),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(b,{columns:p(F),rows:p(I),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{R as default,L as docMeta};
import{B as e,G as t,H as n,L as r,U as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,st as p,u as m,y as h}from"./CCnt5OSV.js";import{F as g,l as _,t as v,v as y}from"./DkmWXf_S.js";import{t as b}from"./DD3RWXAt.js";import{t as x}from"./BX_n_gsO.js";var S=Object.assign({inheritAttrs:!1},{__name:`GridCol`,props:{as:{type:String,default:`div`},span:[Number,String],spanMd:[Number,String],spanLg:[Number,String]},setup(o){let s=o,l=t(),d=i(),h=f(null),_=g(`GridCol`,{defaults:{as:`div`},selfClosing:!1});y(_,s,l,h,d);let v=m(()=>{let e=[];return s.span!=null&&e.push(`grid_col-span-${s.span}`),s.spanMd!=null&&e.push(`grid_col-span-md-${s.spanMd}`),s.spanLg!=null&&e.push(`grid_col-span-lg-${s.spanLg}`),e});return(t,i)=>(r(),c(n(s.as),u({ref_key:`rootRef`,ref:h},p(d),{class:v.value}),{default:a(()=>[e(t.$slots,`default`)]),_:3},16,[`class`]))}}),C=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],w=[{name:`cols`,type:`number | string`,default:`—`,description:`균등 열 수 (grid_cols-*)`},{name:`cols-md`,type:`number | string`,default:`—`,description:`md 브레이크포인트 이상 균등 열 수`},{name:`cols-lg`,type:`number | string`,default:`—`,description:`lg 브레이크포인트 이상 균등 열 수`},{name:`ratio`,type:`'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`,default:`—`,description:`2~3열 비율 레이아웃 (grid_ratio-*)`},{name:`item-span`,type:`number | string`,default:`—`,description:`모든 자식에 동일 span 적용 (12열 기준, grid_item-span-*)`},{name:`item-span-md`,type:`number | string`,default:`—`,description:`md 이상 자식 일괄 span`},{name:`item-span-lg`,type:`number | string`,default:`—`,description:`lg 이상 자식 일괄 span`},{name:`gap`,type:`'sm' | 'lg' | 'none'`,default:`—`,description:`열·행 간격. 생략 시 --grid-gap (md)`},{name:`auto-fit`,type:`boolean`,default:`false`,description:`auto-fit 반복 열 (grid_auto-fit)`},{name:`auto-fill`,type:`boolean`,default:`false`,description:`auto-fill 반복 열 (grid_auto-fill)`}],T=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],E=[{name:`as`,type:`string`,default:`'div'`,description:`GridCol이 렌더링할 HTML 요소 (예: header, aside, section, footer)`},{name:`span`,type:`number | string`,default:`—`,description:`12열 기준 개별 열 span (grid_col-span-*)`},{name:`span-md`,type:`number | string`,default:`—`,description:`md 이상 개별 열 span (grid_col-span-md-*)`},{name:`span-lg`,type:`number | string`,default:`—`,description:`lg 이상 개별 열 span (grid_col-span-lg-*)`}],D=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],O=[{name:`default`,description:`그리드 자식 콘텐츠`}],k=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],A=[{name:`default`,description:`열 셀 내부 콘텐츠`}],j=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],M=[{name:`grid`,description:`12열 CSS Grid 루트`},{name:`grid_cols-* · grid_cols-md-* · grid_cols-lg-*`,description:`균등 열 수`},{name:`grid_ratio-*`,description:`비율 열 (2-1, 1-2-1 등)`},{name:`grid_item-span-* · grid_item-span-md-* · grid_item-span-lg-*`,description:`자식 일괄 span`},{name:`grid_col-span-* · grid_col-span-md-* · grid_col-span-lg-*`,description:`자식별 개별 span (혼합 레이아웃)`},{name:`grid_gap-sm · grid_gap-lg · grid_gap-none`,description:`간격 변형`},{name:`grid_auto-fit · grid_auto-fill`,description:`자동 반복 열`},{name:`grid_equal-columns`,description:`균등 열 자동 흐름`},{name:`grid_align-center · grid_align-end`,description:`교차축 정렬`}],N=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],P=[{name:`--grid-columns`,default:`12`,description:`기본 열 수`},{name:`--grid-gap`,default:`var(--space-md)`,description:`기본 간격`},{name:`--grid-gap-sm · --grid-gap-lg`,default:`var(--space-sm) · var(--space-lg)`,description:`간격 변형`},{name:`--grid-auto-min`,default:`10rem`,description:`auto-fit · auto-fill 최소 열 너비`}],F={title:`Grid | HTML Components`,activeNav:`grid`,pageTitle:`Grid`},I={__name:`grid`,setup(e){return(e,t)=>(r(),d(l,null,[t[32]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Grid`),s(`p`,{class:`lead`},[h(` 12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 `),s(`strong`,null,`부모 .grid`),h(`에 클래스만 지정하고, 자식은 마크업 콘텐츠만 두면 됩니다. `)])],-1),o(b,{"heading-id":`basic-layout-heading`,title:`기본 페이지 레이아웃`,description:`헤더와 푸터는 전체 12열을 사용하고, 본문 영역은 md 이상에서 사이드바 3열과 콘텐츠 9열로 나눕니다. 작은 화면에서는 모든 영역이 한 열로 쌓입니다.`,stack:``,code:`<template>
  <Grid gap="sm">
    <GridCol as="header" :span="12" class="grid_demo-cell">
      Header
    </GridCol>
    <GridCol as="aside" :span="12" :span-md="3" class="grid_demo-cell">
      Sidebar
    </GridCol>
    <GridCol
      as="section"
      :span="12"
      :span-md="9"
      class="grid_demo-cell"
      aria-label="Main content"
    >
      Main content
    </GridCol>
    <GridCol as="footer" :span="12" class="grid_demo-cell">
      Footer
    </GridCol>
  </Grid>
</template>`},{default:a(()=>[o(x,{gap:`sm`},{default:a(()=>[o(S,{as:`header`,span:12,class:`grid_demo-cell`},{default:a(()=>[...t[0]||=[h(` Header `,-1)]]),_:1}),o(S,{as:`aside`,span:12,"span-md":3,class:`grid_demo-cell`},{default:a(()=>[...t[1]||=[h(` Sidebar `,-1)]]),_:1}),o(S,{as:`section`,span:12,"span-md":9,class:`grid_demo-cell`,"aria-label":`Main content`},{default:a(()=>[...t[2]||=[h(` Main content `,-1)]]),_:1}),o(S,{as:`footer`,span:12,class:`grid_demo-cell`},{default:a(()=>[...t[3]||=[h(` Footer `,-1)]]),_:1})]),_:1})]),_:1}),o(b,{"heading-id":`content-layout-heading`,title:`콘텐츠가 있는 페이지 레이아웃`,description:`기본 페이지 레이아웃을 바탕으로 Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다.`,stack:``,code:`<template>
  <Grid gap="sm">
    <GridCol as="header" :span="12" class="grid_demo-cell">
      Header
    </GridCol>
    <GridCol as="aside" :span="12" :span-md="3" class="grid_demo-cell">
      Sidebar
    </GridCol>
    <GridCol
      as="section"
      :span="12"
      :span-md="9"
      class="grid_demo-cell"
      aria-label="Main content"
    >
      <h3>Main content</h3>
      <p>페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.</p>
      <Grid :cols="1" :cols-lg="2" gap="sm">
        <article class="component_stub">
          <h4>Content section</h4>
          <p>주요 정보나 기능을 배치합니다.</p>
        </article>
        <article class="component_stub">
          <h4>Content section</h4>
          <p>관련 정보나 보조 콘텐츠를 배치합니다.</p>
        </article>
      </Grid>
    </GridCol>
    <GridCol as="footer" :span="12" class="grid_demo-cell">
      Footer
    </GridCol>
  </Grid>
</template>`},{default:a(()=>[o(x,{gap:`sm`},{default:a(()=>[o(S,{as:`header`,span:12,class:`grid_demo-cell`},{default:a(()=>[...t[4]||=[h(` Header `,-1)]]),_:1}),o(S,{as:`aside`,span:12,"span-md":3,class:`grid_demo-cell`},{default:a(()=>[...t[5]||=[h(` Sidebar `,-1)]]),_:1}),o(S,{as:`section`,span:12,"span-md":9,class:`grid_demo-cell`,"aria-label":`Main content`},{default:a(()=>[t[7]||=s(`h3`,null,`Main content`,-1),t[8]||=s(`p`,null,`페이지 제목과 설명이 들어가는 기본 콘텐츠 영역입니다.`,-1),o(x,{cols:1,"cols-lg":2,gap:`sm`},{default:a(()=>[...t[6]||=[s(`article`,{class:`component_stub`},[s(`h4`,null,`Content section`),s(`p`,null,`주요 정보나 기능을 배치합니다.`)],-1),s(`article`,{class:`component_stub`},[s(`h4`,null,`Content section`),s(`p`,null,`관련 정보나 보조 콘텐츠를 배치합니다.`)],-1)]]),_:1})]),_:1}),o(S,{as:`footer`,span:12,class:`grid_demo-cell`},{default:a(()=>[...t[9]||=[h(` Footer `,-1)]]),_:1})]),_:1})]),_:1}),o(b,{"heading-id":`parent-heading`,title:`부모 클래스로 제어`,description:`열 수·간격·비율·자식 일괄 span은 부모에만 클래스를 부여합니다. 자식에 grid 관련 클래스가 필요 없습니다.`,stack:``,code:`<template>
  <Grid :cols="3">
    <div class="grid_demo-cell">grid_cols-3</div>
    <div class="grid_demo-cell">grid_cols-3</div>
    <div class="grid_demo-cell">grid_cols-3</div>
  </Grid>
  <Grid ratio="2-1">
    <div class="grid_demo-cell">grid_ratio-2-1</div>
    <div class="grid_demo-cell">grid_ratio-2-1</div>
  </Grid>
  <Grid :item-span="4">
    <div class="grid_demo-cell">grid_item-span-4 (12열 기준 3개/행)</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
    <div class="grid_demo-cell">grid_item-span-4</div>
  </Grid>
</template>`},{default:a(()=>[o(x,{cols:3},{default:a(()=>[...t[10]||=[s(`div`,{class:`grid_demo-cell`},`grid_cols-3`,-1),s(`div`,{class:`grid_demo-cell`},`grid_cols-3`,-1),s(`div`,{class:`grid_demo-cell`},`grid_cols-3`,-1)]]),_:1}),o(x,{ratio:`2-1`},{default:a(()=>[...t[11]||=[s(`div`,{class:`grid_demo-cell`},`grid_ratio-2-1`,-1),s(`div`,{class:`grid_demo-cell`},`grid_ratio-2-1`,-1)]]),_:1}),o(x,{"item-span":4},{default:a(()=>[...t[12]||=[s(`div`,{class:`grid_demo-cell`},`grid_item-span-4 (12열 기준 3개/행)`,-1),s(`div`,{class:`grid_demo-cell`},`grid_item-span-4`,-1),s(`div`,{class:`grid_demo-cell`},`grid_item-span-4`,-1),s(`div`,{class:`grid_demo-cell`},`grid_item-span-4`,-1),s(`div`,{class:`grid_demo-cell`},`grid_item-span-4`,-1),s(`div`,{class:`grid_demo-cell`},`grid_item-span-4`,-1)]]),_:1})]),_:1}),o(b,{"heading-id":`twelve-columns-heading`,title:`12열 전체 활용`,description:`12열 시스템의 각 열을 하나씩 사용합니다. item-span=1을 부모에 지정하면 12개 항목이 한 행의 전체 열을 채웁니다.`,stack:``,code:`<template>
  <Grid :item-span="1" gap="sm">
    <div class="grid_demo-cell">1</div>
    <div class="grid_demo-cell">2</div>
    <div class="grid_demo-cell">3</div>
    <div class="grid_demo-cell">4</div>
    <div class="grid_demo-cell">5</div>
    <div class="grid_demo-cell">6</div>
    <div class="grid_demo-cell">7</div>
    <div class="grid_demo-cell">8</div>
    <div class="grid_demo-cell">9</div>
    <div class="grid_demo-cell">10</div>
    <div class="grid_demo-cell">11</div>
    <div class="grid_demo-cell">12</div>
  </Grid>
</template>`},{default:a(()=>[o(x,{"item-span":1,gap:`sm`},{default:a(()=>[...t[13]||=[s(`div`,{class:`grid_demo-cell`},`1`,-1),s(`div`,{class:`grid_demo-cell`},`2`,-1),s(`div`,{class:`grid_demo-cell`},`3`,-1),s(`div`,{class:`grid_demo-cell`},`4`,-1),s(`div`,{class:`grid_demo-cell`},`5`,-1),s(`div`,{class:`grid_demo-cell`},`6`,-1),s(`div`,{class:`grid_demo-cell`},`7`,-1),s(`div`,{class:`grid_demo-cell`},`8`,-1),s(`div`,{class:`grid_demo-cell`},`9`,-1),s(`div`,{class:`grid_demo-cell`},`10`,-1),s(`div`,{class:`grid_demo-cell`},`11`,-1),s(`div`,{class:`grid_demo-cell`},`12`,-1)]]),_:1})]),_:1}),o(b,{"heading-id":`equal-heading`,title:`균등 열`,description:`grid_cols-*로 동일 너비 열을 지정합니다. 12열 시스템과 무관하게 fr 기반으로 분할됩니다.`,stack:``,code:`<template>
  <Grid :cols="2">
    <div class="grid_demo-cell">cols 2</div>
    <div class="grid_demo-cell">cols 2</div>
  </Grid>
  <Grid :cols="4">
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
    <div class="grid_demo-cell">cols 4</div>
  </Grid>
</template>`},{default:a(()=>[o(x,{cols:2},{default:a(()=>[...t[14]||=[s(`div`,{class:`grid_demo-cell`},`cols 2`,-1),s(`div`,{class:`grid_demo-cell`},`cols 2`,-1)]]),_:1}),o(x,{cols:4},{default:a(()=>[...t[15]||=[s(`div`,{class:`grid_demo-cell`},`cols 4`,-1),s(`div`,{class:`grid_demo-cell`},`cols 4`,-1),s(`div`,{class:`grid_demo-cell`},`cols 4`,-1),s(`div`,{class:`grid_demo-cell`},`cols 4`,-1)]]),_:1})]),_:1}),o(b,{"heading-id":`ratio-heading`,title:`비율 열`,description:`grid_ratio-*로 2~3열 비율 레이아웃을 부모에서 한 번에 지정합니다.`,stack:``,code:`<template>
  <Grid ratio="1-2">
    <div class="grid_demo-cell">1 : 2</div>
    <div class="grid_demo-cell">1 : 2</div>
  </Grid>
  <Grid ratio="1-2-1">
    <div class="grid_demo-cell">1</div>
    <div class="grid_demo-cell">2</div>
    <div class="grid_demo-cell">1</div>
  </Grid>
</template>`},{default:a(()=>[o(x,{ratio:`1-2`},{default:a(()=>[...t[16]||=[s(`div`,{class:`grid_demo-cell`},`1 : 2`,-1),s(`div`,{class:`grid_demo-cell`},`1 : 2`,-1)]]),_:1}),o(x,{ratio:`1-2-1`},{default:a(()=>[...t[17]||=[s(`div`,{class:`grid_demo-cell`},`1`,-1),s(`div`,{class:`grid_demo-cell`},`2`,-1),s(`div`,{class:`grid_demo-cell`},`1`,-1)]]),_:1})]),_:1}),o(b,{"heading-id":`item-span-heading`,title:`자식 일괄 span (12열)`,description:`모든 자식이 같은 열 비율일 때 grid_item-span-*을 부모에 지정합니다. grid_item-span-6이면 한 행에 2개씩 배치됩니다.`,stack:``,code:`<template>
  <Grid :item-span="6">
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
    <div class="grid_demo-cell">span 6</div>
  </Grid>
  <Grid :item-span="3">
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
    <div class="grid_demo-cell">span 3</div>
  </Grid>
</template>`},{default:a(()=>[o(x,{"item-span":6},{default:a(()=>[...t[18]||=[s(`div`,{class:`grid_demo-cell`},`span 6`,-1),s(`div`,{class:`grid_demo-cell`},`span 6`,-1),s(`div`,{class:`grid_demo-cell`},`span 6`,-1),s(`div`,{class:`grid_demo-cell`},`span 6`,-1)]]),_:1}),o(x,{"item-span":3},{default:a(()=>[...t[19]||=[s(`div`,{class:`grid_demo-cell`},`span 3`,-1),s(`div`,{class:`grid_demo-cell`},`span 3`,-1),s(`div`,{class:`grid_demo-cell`},`span 3`,-1),s(`div`,{class:`grid_demo-cell`},`span 3`,-1)]]),_:1})]),_:1}),o(b,{"heading-id":`child-heading`,title:`자식별 span (혼합 레이아웃)`,description:`행마다 열 비율이 다를 때만 자식에 grid_col-span-*을 지정합니다. 8+4, 4+4+4처럼 개별 제어가 필요한 경우에 사용합니다.`,stack:``,code:`<template>
  <Grid>
    <GridCol :span="8">
      <div class="grid_demo-cell">span 8</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
    <GridCol :span="4">
      <div class="grid_demo-cell">span 4</div>
    </GridCol>
  </Grid>
</template>`},{default:a(()=>[o(x,null,{default:a(()=>[o(S,{span:8},{default:a(()=>[...t[20]||=[s(`div`,{class:`grid_demo-cell`},`span 8`,-1)]]),_:1}),o(S,{span:4},{default:a(()=>[...t[21]||=[s(`div`,{class:`grid_demo-cell`},`span 4`,-1)]]),_:1}),o(S,{span:4},{default:a(()=>[...t[22]||=[s(`div`,{class:`grid_demo-cell`},`span 4`,-1)]]),_:1}),o(S,{span:4},{default:a(()=>[...t[23]||=[s(`div`,{class:`grid_demo-cell`},`span 4`,-1)]]),_:1}),o(S,{span:4},{default:a(()=>[...t[24]||=[s(`div`,{class:`grid_demo-cell`},`span 4`,-1)]]),_:1})]),_:1})]),_:1}),o(b,{"heading-id":`gap-heading`,title:`간격`,description:`grid_gap-sm · grid_gap-lg · grid_gap-none은 부모에 지정합니다.`,stack:``,code:`<template>
  <Grid :cols="3" gap="sm">
    <div class="grid_demo-cell">gap sm</div>
    <div class="grid_demo-cell">gap sm</div>
    <div class="grid_demo-cell">gap sm</div>
  </Grid>
  <Grid :cols="3" gap="lg">
    <div class="grid_demo-cell">gap lg</div>
    <div class="grid_demo-cell">gap lg</div>
    <div class="grid_demo-cell">gap lg</div>
  </Grid>
</template>`},{default:a(()=>[o(x,{cols:3,gap:`sm`},{default:a(()=>[...t[25]||=[s(`div`,{class:`grid_demo-cell`},`gap sm`,-1),s(`div`,{class:`grid_demo-cell`},`gap sm`,-1),s(`div`,{class:`grid_demo-cell`},`gap sm`,-1)]]),_:1}),o(x,{cols:3,gap:`lg`},{default:a(()=>[...t[26]||=[s(`div`,{class:`grid_demo-cell`},`gap lg`,-1),s(`div`,{class:`grid_demo-cell`},`gap lg`,-1),s(`div`,{class:`grid_demo-cell`},`gap lg`,-1)]]),_:1})]),_:1}),o(b,{"heading-id":`responsive-heading`,title:`반응형`,description:`Grid의 cols-md · cols-lg와 item-span-md · item-span-lg로 전체 배치를, GridCol의 span-md · span-lg로 자식별 배치를 제어합니다.`,stack:``,code:`<template>
  <Grid :cols="1" :cols-md="2" :cols-lg="3">
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
    <div class="grid_demo-cell">1 → md 2 → lg 3열</div>
  </Grid>
  <Grid :item-span="12" :item-span-md="6" :item-span-lg="4">
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
    <div class="grid_demo-cell">span 12 → md 6 → lg 4</div>
  </Grid>
  <Grid>
    <GridCol :span="12" :span-md="8" :span-lg="9">
      <div class="grid_demo-cell">개별 span 12 → md 8 → lg 9</div>
    </GridCol>
    <GridCol :span="12" :span-md="4" :span-lg="3">
      <div class="grid_demo-cell">개별 span 12 → md 4 → lg 3</div>
    </GridCol>
  </Grid>
</template>`},{default:a(()=>[o(x,{cols:1,"cols-md":2,"cols-lg":3},{default:a(()=>[...t[27]||=[s(`div`,{class:`grid_demo-cell`},`1 → md 2 → lg 3열`,-1),s(`div`,{class:`grid_demo-cell`},`1 → md 2 → lg 3열`,-1),s(`div`,{class:`grid_demo-cell`},`1 → md 2 → lg 3열`,-1)]]),_:1}),o(x,{"item-span":12,"item-span-md":6,"item-span-lg":4},{default:a(()=>[...t[28]||=[s(`div`,{class:`grid_demo-cell`},`span 12 → md 6 → lg 4`,-1),s(`div`,{class:`grid_demo-cell`},`span 12 → md 6 → lg 4`,-1),s(`div`,{class:`grid_demo-cell`},`span 12 → md 6 → lg 4`,-1)]]),_:1}),o(x,null,{default:a(()=>[o(S,{span:12,"span-md":8,"span-lg":9},{default:a(()=>[...t[29]||=[s(`div`,{class:`grid_demo-cell`},`개별 span 12 → md 8 → lg 9`,-1)]]),_:1}),o(S,{span:12,"span-md":4,"span-lg":3},{default:a(()=>[...t[30]||=[s(`div`,{class:`grid_demo-cell`},`개별 span 12 → md 4 → lg 3`,-1)]]),_:1})]),_:1})]),_:1}),o(b,{"heading-id":`auto-heading`,title:`자동 배치`,description:`grid_auto-fit · grid_auto-fill은 부모에 지정합니다.`,stack:``,code:`<template>
  <Grid auto-fit>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
    <div class="grid_demo-cell">auto-fit</div>
  </Grid>
</template>`},{default:a(()=>[o(x,{"auto-fit":``},{default:a(()=>[...t[31]||=[s(`div`,{class:`grid_demo-cell`},`auto-fit`,-1),s(`div`,{class:`grid_demo-cell`},`auto-fit`,-1),s(`div`,{class:`grid_demo-cell`},`auto-fit`,-1),s(`div`,{class:`grid_demo-cell`},`auto-fit`,-1),s(`div`,{class:`grid_demo-cell`},`auto-fit`,-1),s(`div`,{class:`grid_demo-cell`},`auto-fit`,-1)]]),_:1})]),_:1}),o(_,{"heading-id":`api-props-heading`,title:`API · Grid Props`},{default:a(()=>[o(v,{columns:p(C),rows:p(w),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(_,{"heading-id":`api-col-props-heading`,title:`API · GridCol Props`},{default:a(()=>[o(v,{columns:p(T),rows:p(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(_,{"heading-id":`api-slots-heading`,title:`API · Grid Slots`},{default:a(()=>[o(v,{columns:p(D),rows:p(O),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(_,{"heading-id":`api-col-slots-heading`,title:`API · GridCol Slots`},{default:a(()=>[o(v,{columns:p(k),rows:p(A),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(_,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(v,{columns:p(j),rows:p(M),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(_,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(v,{columns:p(N),rows:p(P),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{I as default,F as docMeta};
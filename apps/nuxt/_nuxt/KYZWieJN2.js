import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,st as d,u as f}from"./CCnt5OSV.js";import{F as p,l as m,t as h,v as g}from"./DkmWXf_S.js";import{t as _}from"./DD3RWXAt.js";var v=Object.assign({inheritAttrs:!1},{__name:`Container`,props:{fluid:Boolean,size:{type:String,default:``,validator:e=>[``,`sm`,`md`,`lg`,`xl`].includes(e)}},setup(i){let a=i,o=t(),s=r(),m=u(null),h=p(`Container`,{booleanProps:new Set([`fluid`])});g(h,a,o,m,s);let _=f(()=>{let e=[`container`];return a.fluid&&e.push(`container_fluid`),a.size&&e.push(`container_${a.size}`),e});return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:m},d(s),{class:_.value}),[e(t.$slots,`default`)],16))}}),y=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],b=[{name:`fluid`,type:`boolean`,default:`false`,description:`최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid). size와 함께 지정하면 fluid가 우선합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'xl'`,default:`—`,description:`고정 최대 너비 변형 (container_sm · container_md · container_lg · container_xl)`}],x=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],S=[{name:`default`,description:`컨테이너 내부 콘텐츠`}],C=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],w=[{name:`container`,description:`중앙 정렬·기본 max-width·좌우 패딩`},{name:`container_fluid`,description:`max-width 제한 해제`},{name:`container_sm · container_md · container_lg · container_xl`,description:`고정 최대 너비 변형`}],T=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],E=[{name:`--container-max-width`,default:`72rem`,description:`기본 최대 너비`},{name:`--container-max-width-sm`,default:`36rem`,description:`container_sm`},{name:`--container-max-width-md`,default:`48rem`,description:`container_md`},{name:`--container-max-width-lg`,default:`64rem`,description:`container_lg`},{name:`--container-max-width-xl`,default:`80rem`,description:`container_xl`},{name:`--container-padding-x`,default:`var(--space-xl)`,description:`좌우 패딩`}],D={class:`container_demo-sizes`},O={title:`Container | HTML Components`,activeNav:`container`,pageTitle:`Container`},k={__name:`container`,setup(e){return(e,t)=>(n(),l(s,null,[t[9]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Container`),o(`p`,{class:`lead`},`Nuxt에서 자동 등록되어, 콘텐츠의 최대 너비와 좌우 여백을 일관되게 제한하는 레이아웃 컨테이너입니다.`)],-1),a(_,{"heading-id":`basic-heading`,title:`기본`,description:`container 클래스로 중앙 정렬·최대 너비·좌우 패딩을 적용합니다. 뷰포트가 넓어지면 max-width에서 멈춥니다.`,stack:``,code:`<template>
  <Container>
    <div class="container_demo-fill">container — 기본 최대 너비</div>
  </Container>
</template>`},{default:i(()=>[a(v,null,{default:i(()=>[...t[0]||=[o(`div`,{class:`container_demo-fill`},`container — 기본 최대 너비`,-1)]]),_:1})]),_:1}),a(_,{"heading-id":`attrs-heading`,title:`HTML 속성`,description:`id·style·aria-* 및 이벤트 리스너는 컨테이너의 루트 요소에 전달됩니다. class는 기본·변형 클래스와 병합됩니다.`,stack:``,code:`<template>
  <Container id="main-content" size="lg" aria-label="주요 콘텐츠">
    <div class="container_demo-fill">HTML 속성 전달</div>
  </Container>
</template>`},{default:i(()=>[a(v,{id:`main-content`,size:`lg`,"aria-label":`주요 콘텐츠`},{default:i(()=>[...t[1]||=[o(`div`,{class:`container_demo-fill`},`HTML 속성 전달`,-1)]]),_:1})]),_:1}),a(_,{"heading-id":`fluid-heading`,title:`Fluid`,description:`container_fluid는 최대 너비 제한 없이 부모 너비 전체를 사용합니다. 좌우 패딩만 유지됩니다.`,stack:``,code:`<template>
  <Container fluid>
    <div class="container_demo-fill">container container_fluid — 전체 너비</div>
  </Container>
</template>`},{default:i(()=>[a(v,{fluid:``},{default:i(()=>[...t[2]||=[o(`div`,{class:`container_demo-fill`},`container container_fluid — 전체 너비`,-1)]]),_:1})]),_:1}),a(_,{"heading-id":`size-heading`,title:`크기`,description:`container_sm · container_md · container_lg · container_xl로 고정 최대 너비를 지정합니다.`,stack:``,code:`<template>
  <Container size="sm">
    <div class="container_demo-fill">container_sm (36rem)</div>
  </Container>
  <Container size="md">
    <div class="container_demo-fill">container_md (48rem)</div>
  </Container>
  <Container size="lg">
    <div class="container_demo-fill">container_lg (64rem)</div>
  </Container>
  <Container size="xl">
    <div class="container_demo-fill">container_xl (80rem)</div>
  </Container>
</template>`},{default:i(()=>[o(`div`,D,[a(v,{size:`sm`},{default:i(()=>[...t[3]||=[o(`div`,{class:`container_demo-fill`},`container_sm (36rem)`,-1)]]),_:1}),a(v,{size:`md`},{default:i(()=>[...t[4]||=[o(`div`,{class:`container_demo-fill`},`container_md (48rem)`,-1)]]),_:1}),a(v,{size:`lg`},{default:i(()=>[...t[5]||=[o(`div`,{class:`container_demo-fill`},`container_lg (64rem)`,-1)]]),_:1}),a(v,{size:`xl`},{default:i(()=>[...t[6]||=[o(`div`,{class:`container_demo-fill`},`container_xl (80rem)`,-1)]]),_:1})])]),_:1}),a(_,{"heading-id":`nested-heading`,title:`중첩 사용`,description:`페이지 루트에 container를 두고, 섹션별로 다른 크기를 조합할 수 있습니다.`,stack:``,code:`<template>
  <Container fluid>
    <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
    <Container size="md">
      <div class="container_demo-fill">안쪽 — md</div>
    </Container>
  </Container>
</template>`},{default:i(()=>[a(v,{fluid:``},{default:i(()=>[t[8]||=o(`div`,{class:`container_demo-fill`,style:{"margin-bottom":`var(--space-md)`}},`바깥 — fluid`,-1),a(v,{size:`md`},{default:i(()=>[...t[7]||=[o(`div`,{class:`container_demo-fill`},`안쪽 — md`,-1)]]),_:1})]),_:1})]),_:1}),a(m,{"heading-id":`api-props-heading`,title:`API · Props`},{default:i(()=>[a(h,{columns:d(y),rows:d(b),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:i(()=>[a(h,{columns:d(x),rows:d(S),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(h,{columns:d(C),rows:d(w),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(m,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(h,{columns:d(T),rows:d(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{k as default,O as docMeta};
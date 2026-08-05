import{L as e,Y as t,b as n,d as r,i,m as a,st as o}from"./CCnt5OSV.js";import{l as s,t as c}from"./DkmWXf_S.js";import{t as l}from"./gHQDdAlU.js";import{t as u}from"./DD3RWXAt.js";import{n as d,t as f}from"./Cv5hWJXi2.js";var p=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],m=[{name:`vertical`,type:`boolean`,default:`false`,description:`세로 방향 배치 (space_vertical)`},{name:`wrap`,type:`boolean`,default:`false`,description:`줄바꿈 허용 (space_wrap)`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100% flex (space_block)`},{name:`gap`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,default:`md`,description:`자식 간 간격. md는 클래스 없이 --space-gap 사용`},{name:`align`,type:`'start' | 'center' | 'end' | 'baseline' | 'stretch'`,default:`—`,description:`교차축 정렬 (space_align-*)`},{name:`justify`,type:`'start' | 'center' | 'end' | 'between'`,default:`—`,description:`주축 정렬 (space_justify-*)`}],h=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],g=[{name:`default`,description:`간격을 둘 자식 요소`}],_=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],v=[{name:`space`,description:`inline-flex 루트, 기본 가로 배치`},{name:`space_vertical`,description:`세로 방향`},{name:`space_wrap`,description:`줄바꿈`},{name:`space_block`,description:`display flex + width 100%`},{name:`space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl`,description:`간격 변형 (md는 기본)`},{name:`space_align-start · space_align-center · space_align-end · space_align-baseline · space_align-stretch`,description:`교차축 정렬`},{name:`space_justify-start · space_justify-center · space_justify-end · space_justify-between`,description:`주축 정렬`}],y=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],b=[{name:`--space-gap`,default:`var(--space-md)`,description:`기본 자식 간 간격 (gap md)`}],x={title:`Space | HTML Components`,activeNav:`space`,pageTitle:`Space`},S={__name:`space`,setup(x){return(x,S)=>(e(),a(i,null,[S[10]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Space`),r(`p`,{class:`lead`},`자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 유틸리티입니다. gap·방향·정렬·줄바꿈을 클래스로 조합합니다.`)],-1),n(u,{"heading-id":`basic-heading`,title:`기본`,description:`space는 가로 inline-flex이며 기본 간격은 --space-gap (md)입니다.`,code:`<script setup>
import Space from '@/components/Space.vue';
<\/script>

<template>
  <Space>
    <div class="space_demo-box">항목 1</div>
    <div class="space_demo-box">항목 2</div>
    <div class="space_demo-box">항목 3</div>
  </Space>
</template>`},{default:t(()=>[n(f,null,{default:t(()=>[...S[0]||=[r(`div`,{class:`space_demo-box`},`항목 1`,-1),r(`div`,{class:`space_demo-box`},`항목 2`,-1),r(`div`,{class:`space_demo-box`},`항목 3`,-1)]]),_:1})]),_:1}),n(u,{"heading-id":`vertical-heading`,title:`세로`,description:`space_vertical로 세로 방향 배치를 지정합니다.`,code:`<script setup>
import Space from '@/components/Space.vue';
<\/script>

<template>
  <Space vertical>
    <div class="space_demo-box">항목 1</div>
    <div class="space_demo-box">항목 2</div>
    <div class="space_demo-box">항목 3</div>
  </Space>
</template>`},{default:t(()=>[n(f,{vertical:``},{default:t(()=>[...S[1]||=[r(`div`,{class:`space_demo-box`},`항목 1`,-1),r(`div`,{class:`space_demo-box`},`항목 2`,-1),r(`div`,{class:`space_demo-box`},`항목 3`,-1)]]),_:1})]),_:1}),n(u,{"heading-id":`gap-heading`,title:`간격`,description:`space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl로 gap 크기를 변경합니다.`,stack:``,code:`<script setup>
import Space from '@/components/Space.vue';
<\/script>

<template>
  <Space gap="xs">
    <div class="space_demo-box">xs</div>
    <div class="space_demo-box">xs</div>
    <div class="space_demo-box">xs</div>
  </Space>
  <Space gap="sm">
    <div class="space_demo-box">sm</div>
    <div class="space_demo-box">sm</div>
    <div class="space_demo-box">sm</div>
  </Space>
  <Space>
    <div class="space_demo-box">md (기본)</div>
    <div class="space_demo-box">md</div>
    <div class="space_demo-box">md</div>
  </Space>
  <Space gap="lg">
    <div class="space_demo-box">lg</div>
    <div class="space_demo-box">lg</div>
    <div class="space_demo-box">lg</div>
  </Space>
  <Space gap="xl">
    <div class="space_demo-box">xl</div>
    <div class="space_demo-box">xl</div>
    <div class="space_demo-box">xl</div>
  </Space>
</template>`},{default:t(()=>[n(f,{gap:`xs`},{default:t(()=>[...S[2]||=[r(`div`,{class:`space_demo-box`},`xs`,-1),r(`div`,{class:`space_demo-box`},`xs`,-1),r(`div`,{class:`space_demo-box`},`xs`,-1)]]),_:1}),n(f,{gap:`sm`},{default:t(()=>[...S[3]||=[r(`div`,{class:`space_demo-box`},`sm`,-1),r(`div`,{class:`space_demo-box`},`sm`,-1),r(`div`,{class:`space_demo-box`},`sm`,-1)]]),_:1}),n(f,null,{default:t(()=>[...S[4]||=[r(`div`,{class:`space_demo-box`},`md (기본)`,-1),r(`div`,{class:`space_demo-box`},`md`,-1),r(`div`,{class:`space_demo-box`},`md`,-1)]]),_:1}),n(f,{gap:`lg`},{default:t(()=>[...S[5]||=[r(`div`,{class:`space_demo-box`},`lg`,-1),r(`div`,{class:`space_demo-box`},`lg`,-1),r(`div`,{class:`space_demo-box`},`lg`,-1)]]),_:1}),n(f,{gap:`xl`},{default:t(()=>[...S[6]||=[r(`div`,{class:`space_demo-box`},`xl`,-1),r(`div`,{class:`space_demo-box`},`xl`,-1),r(`div`,{class:`space_demo-box`},`xl`,-1)]]),_:1})]),_:1}),n(u,{"heading-id":`wrap-heading`,title:`줄바꿈`,description:`space_wrap과 space_block을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다.`,stack:``,code:`<script setup>
import Space from '@/components/Space.vue';
<\/script>

<template>
  <Space block wrap>
    <div class="space_demo-box" style="min-width: 8rem;">항목 1</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 2</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 3</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 4</div>
    <div class="space_demo-box" style="min-width: 8rem;">항목 5</div>
  </Space>
</template>`},{default:t(()=>[n(f,{block:``,wrap:``},{default:t(()=>[...S[7]||=[r(`div`,{class:`space_demo-box`,style:{"min-width":`8rem`}},`항목 1`,-1),r(`div`,{class:`space_demo-box`,style:{"min-width":`8rem`}},`항목 2`,-1),r(`div`,{class:`space_demo-box`,style:{"min-width":`8rem`}},`항목 3`,-1),r(`div`,{class:`space_demo-box`,style:{"min-width":`8rem`}},`항목 4`,-1),r(`div`,{class:`space_demo-box`,style:{"min-width":`8rem`}},`항목 5`,-1)]]),_:1})]),_:1}),n(u,{"heading-id":`align-heading`,title:`정렬`,description:`space_align-* · space_justify-*로 교차축·주축 정렬을 지정합니다.`,stack:``,code:`<script setup>
import Space from '@/components/Space.vue';
<\/script>

<template>
  <Space
    block
    align="center"
    style="min-height: 5rem; background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
  >
    <div class="space_demo-box">align center</div>
    <div class="space_demo-box" style="padding-block: var(--space-xl);">높이 다름</div>
    <div class="space_demo-box">align center</div>
  </Space>
  <Space
    block
    justify="between"
    style="background: var(--color-surface-raised); border-radius: var(--radius-sm); padding: var(--space-md);"
  >
    <div class="space_demo-box">justify between</div>
    <div class="space_demo-box">양 끝</div>
  </Space>
</template>`},{default:t(()=>[n(f,{block:``,align:`center`,style:{"min-height":`5rem`,background:`var(--color-surface-raised)`,"border-radius":`var(--radius-sm)`,padding:`var(--space-md)`}},{default:t(()=>[...S[8]||=[r(`div`,{class:`space_demo-box`},`align center`,-1),r(`div`,{class:`space_demo-box`,style:{"padding-block":`var(--space-xl)`}},`높이 다름`,-1),r(`div`,{class:`space_demo-box`},`align center`,-1)]]),_:1}),n(f,{block:``,justify:`between`,style:{background:`var(--color-surface-raised)`,"border-radius":`var(--radius-sm)`,padding:`var(--space-md)`}},{default:t(()=>[...S[9]||=[r(`div`,{class:`space_demo-box`},`justify between`,-1),r(`div`,{class:`space_demo-box`},`양 끝`,-1)]]),_:1})]),_:1}),n(u,{"heading-id":`combo-heading`,title:`조합 예시`,description:`버튼·구분선 등 실제 컴포넌트와 함께 사용하는 패턴입니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Divider from '@/components/Divider.vue';
import Space from '@/components/Space.vue';
<\/script>

<template>
  <Space>
    <Button variant="outline" label="취소" />
    <Button variant="filled" color="primary" label="저장" />
    <Divider vertical />
    <Button variant="text" label="더보기" />
  </Space>
</template>`},{default:t(()=>[n(f,null,{default:t(()=>[n(l,{variant:`outline`,label:`취소`}),n(l,{variant:`filled`,color:`primary`,label:`저장`}),n(d,{vertical:``}),n(l,{variant:`text`,label:`더보기`})]),_:1})]),_:1}),n(s,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(c,{columns:o(p),rows:o(m),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(s,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(c,{columns:o(h),rows:o(g),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(s,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합하며, id · style · aria-* 등 전달 속성은 루트 요소에 적용됩니다.`},{default:t(()=>[n(c,{columns:o(_),rows:o(v),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(s,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(c,{columns:o(y),rows:o(b),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{S as default,x as docMeta};
import{L as e,Y as t,b as n,d as r,i,m as a,st as o}from"./CCnt5OSV.js";import{l as s,t as c}from"./DkmWXf_S.js";import{t as l}from"./DD3RWXAt.js";import{n as u,t as d}from"./Cv5hWJXi2.js";var f=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],p=[{name:`dashed`,type:`boolean`,default:`false`,description:`점선 스타일 (divider_dashed)`},{name:`plain`,type:`boolean`,default:`false`,description:`레이블 보조 톤 (divider_plain)`},{name:`vertical`,type:`boolean`,default:`false`,description:`세로 구분선 (divider_vertical)`},{name:`orient`,type:`'left' | 'right'`,default:`—`,description:`레이블 정렬. 생략 시 가운데`},{name:`label`,type:`string`,default:`—`,description:`가운데 레이블 텍스트. default 슬롯으로 대체 가능`},{name:`tag`,type:`'auto' | 'hr' | 'div' | 'span'`,default:`auto`,description:`루트 태그. auto는 vertical·레이블 유무에 따라 hr · div · span 선택`}],m=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],h=[{name:`default`,description:`레이블 텍스트 (label prop 대체)`}],g=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],_=[{name:`divider`,description:`가로·세로 구분선 루트`},{name:`divider_dashed`,description:`점선 스타일`},{name:`divider_plain`,description:`보조 톤 레이블`},{name:`divider_vertical`,description:`세로 구분선 (인라인·flex 행)`},{name:`divider_orient-left · divider_orient-right`,description:`레이블 좌·우 정렬`},{name:`role="separator"`,description:`hr가 아닌 루트에 자동 적용되는 구분선 역할`},{name:`aria-orientation="vertical"`,description:`vertical일 때 자동 적용되는 세로 방향 정보`}],v=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],y=[{name:`--divider-color`,default:`var(--color-border-subtle)`,description:`선 색상`},{name:`--divider-thickness`,default:`1px`,description:`선 두께`},{name:`--divider-margin-y`,default:`var(--space-md)`,description:`가로 구분선 상하 여백`},{name:`--divider-margin-x`,default:`var(--space-sm)`,description:`세로 구분선 좌우 여백`},{name:`--divider-text-gap`,default:`var(--space-md)`,description:`레이블·선 사이 간격`},{name:`--divider-orient-inset`,default:`5%`,description:`orient-left · orient-right 선 길이`}],b={title:`Divider | HTML Components`,activeNav:`divider`,pageTitle:`Divider`},x={__name:`divider`,setup(b){return(b,x)=>(e(),a(i,null,[x[7]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Divider`),r(`p`,{class:`lead`},`콘텐츠를 시각적·의미적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 유틸리티 클래스로 조합합니다.`)],-1),n(l,{"heading-id":`basic-heading`,title:`기본`,description:`divider 클래스로 가로 구분선을 그립니다. hr 또는 div에 사용할 수 있습니다.`,stack:``,code:`<script setup>
import Divider from '@/components/Divider.vue';
<\/script>

<template>
  <p>위 콘텐츠</p>
  <Divider />
  <p>아래 콘텐츠</p>
</template>`},{default:t(()=>[x[0]||=r(`p`,null,`위 콘텐츠`,-1),n(u),x[1]||=r(`p`,null,`아래 콘텐츠`,-1)]),_:1}),n(l,{"heading-id":`dashed-heading`,title:`점선`,description:`divider_dashed로 점선 스타일을 적용합니다.`,stack:``,code:`<script setup>
import Divider from '@/components/Divider.vue';
<\/script>

<template>
  <p>위 콘텐츠</p>
  <Divider dashed />
  <p>아래 콘텐츠</p>
</template>`},{default:t(()=>[x[2]||=r(`p`,null,`위 콘텐츠`,-1),n(u,{dashed:``}),x[3]||=r(`p`,null,`아래 콘텐츠`,-1)]),_:1}),n(l,{"heading-id":`text-heading`,title:`텍스트 레이블`,description:`요소 안에 텍스트가 있으면 양쪽 선과 가운데 레이블로 자동 전환됩니다.`,stack:``,code:`<script setup>
import Divider from '@/components/Divider.vue';
<\/script>

<template>
  <Divider label="섹션 제목" />
  <Divider plain label="보조 설명" />
</template>`},{default:t(()=>[n(u,{label:`섹션 제목`}),n(u,{plain:``,label:`보조 설명`})]),_:1}),n(l,{"heading-id":`orient-heading`,title:`레이블 정렬`,description:`divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다.`,stack:``,code:`<script setup>
import Divider from '@/components/Divider.vue';
<\/script>

<template>
  <Divider orient="left" label="왼쪽" />
  <Divider label="가운데" />
  <Divider orient="right" label="오른쪽" />
</template>`},{default:t(()=>[n(u,{orient:`left`,label:`왼쪽`}),n(u,{label:`가운데`}),n(u,{orient:`right`,label:`오른쪽`})]),_:1}),n(l,{"heading-id":`vertical-heading`,title:`세로`,description:`divider_vertical은 인라인·flex 행 안에서 세로 구분선으로 사용합니다. 스크린리더에는 세로 separator로 전달됩니다. 장식용으로만 사용할 때는 aria-hidden을 true로 지정합니다.`,code:`<script setup>
import Divider from '@/components/Divider.vue';
import Space from '@/components/Space.vue';
<\/script>

<template>
  <Space>
    <span>항목 A</span>
    <Divider vertical />
    <span>항목 B</span>
    <Divider vertical dashed />
    <span>항목 C</span>
  </Space>
</template>`},{default:t(()=>[n(d,null,{default:t(()=>[x[4]||=r(`span`,null,`항목 A`,-1),n(u,{vertical:``}),x[5]||=r(`span`,null,`항목 B`,-1),n(u,{vertical:``,dashed:``}),x[6]||=r(`span`,null,`항목 C`,-1)]),_:1})]),_:1}),n(s,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(c,{columns:o(f),rows:o(p),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(s,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(c,{columns:o(m),rows:o(h),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(s,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(c,{columns:o(g),rows:o(_),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(s,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(c,{columns:o(v),rows:o(y),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{x as default,b as docMeta};
import{L as e,Y as t,b as n,d as r,i,m as a,st as o}from"./CCnt5OSV.js";import{a as s}from"./jFoqhwDN.js";import{l as c,t as l}from"./DkmWXf_S.js";import{t as u}from"./DD3RWXAt.js";import{t as d}from"./Bal4U0O22.js";import{t as f}from"./DUv9yuh62.js";import{t as p}from"./7ZvA7D642.js";import{t as m}from"./CT_IFTmY2.js";import{t as h}from"./Dq2x-BSn2.js";var g=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],_=[{name:`title`,type:`string`,default:`—`,description:`지표 라벨 (stat_label)`},{name:`value`,type:`string | number`,default:`—`,description:`주요 수치 (stat_value)`},{name:`prefix`,type:`string | number`,default:`—`,description:`값 앞 접두 (stat_prefix)`},{name:`suffix`,type:`string | number`,default:`—`,description:`값 뒤 접미 (stat_suffix)`},{name:`description`,type:`string`,default:`—`,description:`보조 설명 (stat_desc)`},{name:`trend`,type:`string`,default:`—`,description:`증감 텍스트 (stat_trend)`},{name:`trend-color`,type:`string`,default:`—`,description:`trend·description 색상 color_*`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`stat_sm · stat_lg`},{name:`card`,type:`boolean`,default:`false`,description:`카드형 배경 (stat_card)`},{name:`shadow`,type:`boolean`,default:`false`,description:`그림자 (stat_shadow)`}],v=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],y=[{name:`value`,description:`수치 커스텀 (value prop 대체)`},{name:`trend-icon`,description:`증감 아이콘`},{name:`default`,description:`추가 콘텐츠`}],b=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],x=[{name:`stat`,description:`지표 루트`},{name:`stat_sm · stat_lg`,description:`크기 변형`},{name:`stat_card · stat_shadow`,description:`카드·그림자`},{name:`stat_header · stat_label · stat_value-row`,description:`레이아웃 파트`},{name:`stat_value · stat_prefix · stat_suffix · stat_desc · stat_trend`,description:`값·설명 파트`},{name:`stat_group · stat_group-2 · stat_group-3 · stat_group-4`,description:`지표 그리드`},{name:`stat_horizontal`,description:`아이콘+값 가로 배치`}],S=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],C=[{name:`--stat-value-size · --stat-value-size-sm · --stat-value-size-lg`,default:`1.75rem · 1.25rem · 2.25rem`,description:`수치 크기`},{name:`--stat-label-size · --stat-desc-size`,default:`var(--text-size-sm)`,description:`라벨·설명 크기`},{name:`--stat-group-gap · --stat-card-padding`,default:`var(--space-lg) · var(--space-lg)`,description:`그룹 간격·카드 패딩`}],w={class:`stat_group stat_group-2`},T={class:`stat_group`},E={class:`stat_group stat_group-4 stat_group-divider stat_card stat_shadow`,style:{padding:`var(--space-lg)`}},D={class:`stat_group stat_group-3`},O={title:`Stat | HTML Components`,activeNav:`stat`,pageTitle:`Stat`},k={__name:`stat`,setup(O){return(O,k)=>(e(),a(i,null,[k[6]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Stat`),r(`p`,{class:`lead`},`핵심 수치와 지표를 강조하여 표시하는 통계 컴포넌트입니다. 대시보드·요약 카드·KPI 영역에 사용합니다.`)],-1),n(u,{"heading-id":`basic-heading`,title:`기본`,description:`title · value · description으로 지표를 구성합니다.`,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <Stat
  title="총 사용자"
  value="12,345"
  description="+12.5% 지난 달 대비"
  trend-color="success"
  />
</template>`},{default:t(()=>[n(h,{title:`총 사용자`,value:`12,345`,description:`+12.5% 지난 달 대비`,"trend-color":`success`})]),_:1}),n(u,{"heading-id":`prefix-heading`,title:`접두 · 접미`,description:`prefix · suffix로 통화·단위를 표시합니다.`,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />
  <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />
  <Stat title="평균 응답 시간" value="128" suffix="ms" />
</template>`},{default:t(()=>[n(h,{title:`총 매출`,prefix:`₩`,value:`4,280,000`,description:`+8.2%`,"trend-color":`success`}),n(h,{title:`전환율`,value:`3.6`,suffix:`%`,description:`-0.4%p`,"trend-color":`danger`}),n(h,{title:`평균 응답 시간`,value:`128`,suffix:`ms`})]),_:1}),n(u,{"heading-id":`trend-heading`,title:`추세`,description:`trend로 증감 방향을 아이콘과 함께 표시합니다.`,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <Stat
  title="월간 매출"
  prefix="₩"
  value="4.2M"
  trend="+8.2%"
  trend-color="success"
  description="전월 대비"
  card
  shadow
  />
  <Stat
  title="이탈률"
  value="2.4"
  suffix="%"
  trend="+0.3%p"
  trend-color="danger"
  card
  shadow
  >
  <template #trend-icon>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </template>
  </Stat>
</template>`},{default:t(()=>[n(h,{title:`월간 매출`,prefix:`₩`,value:`4.2M`,trend:`+8.2%`,"trend-color":`success`,description:`전월 대비`,card:``,shadow:``}),n(h,{title:`이탈률`,value:`2.4`,suffix:`%`,trend:`+0.3%p`,"trend-color":`danger`,card:``,shadow:``},{"trend-icon":t(()=>[...k[1]||=[r(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[r(`path`,{d:`m6 9 6 6 6-6`})],-1)]]),_:1})]),_:1}),n(u,{"heading-id":`size-heading`,title:`크기`,description:`size로 수치 스케일을 조절합니다.`,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <Stat size="sm" card title="Small" value="1,024" />
  <Stat card title="Medium" value="8,192" />
  <Stat size="lg" card title="Large" value="64K" />
</template>`},{default:t(()=>[n(h,{size:`sm`,card:``,title:`Small`,value:`1,024`}),n(h,{card:``,title:`Medium`,value:`8,192`}),n(h,{size:`lg`,card:``,title:`Large`,value:`64K`})]),_:1}),n(u,{"heading-id":`layout-heading`,title:`레이아웃`,description:`stat_horizontal · stat_inline · stat_row로 배치를 변경합니다.`,stack:``,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <Stat class="stat_horizontal" card title="활성 세션" value="342" />
  <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
  <Stat class="stat_row" card shadow>
    <span class="stat_icon-wrap color_primary" aria-hidden="true">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    </span>
    <div class="stat_body">
      <span class="stat_label">팀 멤버</span>
      <span class="stat_value">48</span>
      <span class="stat_desc color_success">4명 신규 합류</span>
    </div>
  </Stat>
</template>`},{default:t(()=>[n(h,{class:`stat_horizontal`,card:``,title:`활성 세션`,value:`342`}),n(h,{class:`stat_inline`,card:``,title:`CPU 사용률`,value:`68`,suffix:`%`}),n(h,{class:`stat_row`,card:``,shadow:``},{default:t(()=>[...k[2]||=[r(`span`,{class:`stat_icon-wrap color_primary`,"aria-hidden":`true`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`}),r(`circle`,{cx:`9`,cy:`7`,r:`4`}),r(`path`,{d:`M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75`})])],-1),r(`div`,{class:`stat_body`},[r(`span`,{class:`stat_label`},`팀 멤버`),r(`span`,{class:`stat_value`},`48`),r(`span`,{class:`stat_desc color_success`},`4명 신규 합류`)],-1)]]),_:1})]),_:1}),n(u,{"heading-id":`icon-heading`,title:`아이콘`,description:`stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다.`,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <Stat card>
    <span class="stat_icon color_primary">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </span>
    <span class="stat_label">다운로드</span>
    <span class="stat_value">2,847</span>
    <span class="stat_desc color_success">+24%</span>
  </Stat>
  <Stat class="stat_row" card>
    <span class="stat_icon-wrap color_success" aria-hidden="true">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    </span>
    <div class="stat_body">
      <span class="stat_label">완료율</span>
      <div class="stat_value-row">
        <span class="stat_value">94</span>
        <span class="stat_suffix">%</span>
      </div>
    </div>
  </Stat>
</template>`},{default:t(()=>[n(h,{card:``},{default:t(()=>[...k[3]||=[r(`span`,{class:`stat_icon color_primary`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[r(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),r(`polyline`,{points:`7 10 12 15 17 10`}),r(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})])],-1),r(`span`,{class:`stat_label`},`다운로드`,-1),r(`span`,{class:`stat_value`},`2,847`,-1),r(`span`,{class:`stat_desc color_success`},`+24%`,-1)]]),_:1}),n(h,{class:`stat_row`,card:``},{default:t(()=>[...k[4]||=[r(`span`,{class:`stat_icon-wrap color_success`,"aria-hidden":`true`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`}),r(`path`,{d:`M22 4 12 14.01l-3-3`})])],-1),r(`div`,{class:`stat_body`},[r(`span`,{class:`stat_label`},`완료율`),r(`div`,{class:`stat_value-row`},[r(`span`,{class:`stat_value`},`94`),r(`span`,{class:`stat_suffix`},`%`)])],-1)]]),_:1})]),_:1}),n(u,{"heading-id":`skin-heading`,title:`스킨`,description:`card · shadow · stat_borderless · stat_accent로 외형을 조절합니다.`,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <div class="stat_group stat_group-2">
    <Stat card title="기본 카드" value="1,200" />
    <Stat card shadow title="Shadow" value="980" />
    <Stat card class="stat_borderless" title="Borderless" value="456" />
    <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" trend-color="primary" />
  </div>
</template>`},{default:t(()=>[r(`div`,w,[n(h,{card:``,title:`기본 카드`,value:`1,200`}),n(h,{card:``,shadow:``,title:`Shadow`,value:`980`}),n(h,{card:``,class:`stat_borderless`,title:`Borderless`,value:`456`}),n(h,{card:``,class:`stat_accent color_primary`,title:`Accent`,value:`789`,description:`강조 지표`,"trend-color":`primary`})])]),_:1}),n(u,{"heading-id":`group-heading`,title:`그룹`,description:`stat_group으로 여러 지표를 그리드로 배치합니다.`,stack:``,code:`<script setup>
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <div class="stat_group">
    <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trend-color="success" />
    <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trend-color="success" />
    <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trend-color="danger" />
    <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trend-color="muted" />
  </div>
  <div class="stat_group stat_group-4 stat_group-divider stat_card stat_shadow" style="padding: var(--space-lg);">
    <Stat title="방문" value="24.5K" />
    <Stat title="페이지뷰" value="89.2K" />
    <Stat title="전환" value="1,842" />
    <Stat title="매출" value="₩12M" />
  </div>
</template>`},{default:t(()=>[r(`div`,T,[n(h,{card:``,shadow:``,title:`총 매출`,prefix:`₩`,value:`4.2M`,description:`+8.2%`,"trend-color":`success`}),n(h,{card:``,shadow:``,title:`신규 가입`,value:`1,234`,description:`+15.3%`,"trend-color":`success`}),n(h,{card:``,shadow:``,title:`이탈률`,value:`2.4`,suffix:`%`,description:`+0.3%p`,"trend-color":`danger`}),n(h,{card:``,shadow:``,title:`활성 사용자`,value:`8,901`,description:`변동 없음`,"trend-color":`muted`})]),r(`div`,E,[n(h,{title:`방문`,value:`24.5K`}),n(h,{title:`페이지뷰`,value:`89.2K`}),n(h,{title:`전환`,value:`1,842`}),n(h,{title:`매출`,value:`₩12M`})])]),_:1}),n(u,{"heading-id":`context-heading`,title:`카드 혼합`,description:`card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <Card variant="shadow">
    <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
    <CardBody>
      <div class="stat_group stat_group-3">
        <Stat title="매출" prefix="₩" value="12M" trend="+18%" trend-color="success" />
        <Stat title="주문" value="3,456" description="+9.1%" trend-color="success" />
        <Stat title="환불" value="42" description="+3건" trend-color="danger" />
      </div>
    </CardBody>
    <CardFooter between>
      <span class="color_muted size_sm">실시간 갱신</span>
      <a href="#" class="link color_primary size_sm" @click.prevent>상세 보기</a>
    </CardFooter>
  </Card>
</template>`},{default:t(()=>[n(d,{variant:`shadow`},{default:t(()=>[n(m,{title:`이번 달 요약`,subtitle:`2024년 6월`}),n(f,null,{default:t(()=>[r(`div`,D,[n(h,{title:`매출`,prefix:`₩`,value:`12M`,trend:`+18%`,"trend-color":`success`}),n(h,{title:`주문`,value:`3,456`,description:`+9.1%`,"trend-color":`success`}),n(h,{title:`환불`,value:`42`,description:`+3건`,"trend-color":`danger`})])]),_:1}),n(p,{between:``},{default:t(()=>[k[5]||=r(`span`,{class:`color_muted size_sm`},`실시간 갱신`,-1),r(`a`,{href:`#`,class:`link color_primary size_sm`,onClick:k[0]||=s(()=>{},[`prevent`])},`상세 보기`)]),_:1})]),_:1})]),_:1}),n(c,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(l,{columns:o(g),rows:o(_),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(l,{columns:o(v),rows:o(y),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(l,{columns:o(b),rows:o(x),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(l,{columns:o(S),rows:o(C),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{k as default,O as docMeta};
import{_ as t}from"./Stat-SCI-MIMc.js";import{_ as a}from"./Card-CnKjvY8r.js";import{_ as e}from"./CardBody-Qf4M-sZS.js";import{_ as n}from"./CardFooter-CItW5fyM.js";import{_ as s}from"./CardHeader-Chkk5for.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./Icon-D97OEunV.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";const J=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],N=[{name:"title",type:"string",default:"—",description:"지표 라벨 (stat_label)"},{name:"value",type:"string",default:"—",description:"주요 수치 (stat_value)"},{name:"prefix",type:"string",default:"—",description:"값 앞 접두 (stat_prefix)"},{name:"suffix",type:"string",default:"—",description:"값 뒤 접미 (stat_suffix)"},{name:"description",type:"string",default:"—",description:"보조 설명 (stat_desc)"},{name:"trend",type:"string",default:"—",description:"증감 텍스트 (stat_trend)"},{name:"trend-color",type:"string",default:"—",description:"trend·description 색상 color_*"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"stat_sm · stat_lg"},{name:"card",type:"boolean",default:"false",description:"카드형 배경 (stat_card)"},{name:"shadow",type:"boolean",default:"false",description:"그림자 (stat_shadow)"}],Q=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],R=[{name:"value",description:"수치 커스텀 (value prop 대체)"},{name:"trend-icon",description:"증감 아이콘"},{name:"default",description:"추가 콘텐츠"}],W=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],X=[{name:"stat",description:"지표 루트"},{name:"stat_sm · stat_lg",description:"크기 변형"},{name:"stat_card · stat_shadow",description:"카드·그림자"},{name:"stat_header · stat_label · stat_value-row",description:"레이아웃 파트"},{name:"stat_value · stat_prefix · stat_suffix · stat_desc · stat_trend",description:"값·설명 파트"},{name:"stat_group · stat_group-2 · stat_group-3 · stat_group-4",description:"지표 그리드"},{name:"stat_horizontal",description:"아이콘+값 가로 배치"}],Y=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Z=[{name:"--stat-value-size · --stat-value-size-sm · --stat-value-size-lg",default:"1.75rem · 1.25rem · 2.25rem",description:"수치 크기"},{name:"--stat-label-size · --stat-desc-size",default:"var(--text-size-sm)",description:"라벨·설명 크기"},{name:"--stat-group-gap · --stat-card-padding",default:"var(--space-lg) · var(--space-lg)",description:"그룹 간격·카드 패딩"}],tt=[{title:"API · Props",tables:[{columns:J,rows:N,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Q,rows:R,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:W,rows:X,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Y,rows:Z,codeColumn:"name"}]}],it={title:"Components/데이터 표시/Stat",id:"components-stat",component:t,tags:["autodocs"],argTypes:{title:{control:"text",type:{name:"string",summary:"string"}},value:{control:"text",type:{name:"string",summary:"string"}},prefix:{control:"text",type:{name:"string",summary:"string"}},suffix:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},trend:{control:"text",type:{name:"string",summary:"string"}},trendColor:{control:"select",options:["success","warning","danger"],type:{name:"enum",summary:"'success' | 'warning' | 'danger'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},card:{control:"boolean",type:{name:"boolean",summary:"boolean"}},shadow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{layout:"padded",apiSections:tt}},r={args:{title:"제목",value:"1",prefix:"값",suffix:"값",description:"설명 텍스트입니다.",trend:"값",trendColor:"값",size:"md",card:!1,shadow:!1},render:q=>({components:{Stat:t},setup(){return{args:q}},template:'<Stat v-bind="args" />'})},o={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"title · value · description으로 지표를 구성합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
<\/script>

<template>
  <Stat
  title="총 사용자"
  value="12,345"
  description="+12.5% 지난 달 대비"
  trend-color="success"
  />
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trend-color="success"
    />`})},u={name:"접두 · 접미",parameters:{demoPreview:{stack:!1},docs:{description:{story:"prefix · suffix로 통화·단위를 표시합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
<\/script>

<template>
  <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />
  <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />
  <Stat title="평균 응답 시간" value="128" suffix="ms" />
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />

    <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />

    <Stat title="평균 응답 시간" value="128" suffix="ms" />`})},c={name:"추세",parameters:{demoPreview:{stack:!1},docs:{description:{story:"trend로 증감 방향을 아이콘과 함께 표시합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<Stat
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
    </Stat>`})},d={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"size로 수치 스케일을 조절합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
<\/script>

<template>
  <Stat size="sm" card title="Small" value="1,024" />
  <Stat card title="Medium" value="8,192" />
  <Stat size="lg" card title="Large" value="64K" />
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<Stat size="sm" card title="Small" value="1,024" />
    <Stat card title="Medium" value="8,192" />
    <Stat size="lg" card title="Large" value="64K" />`})},i={name:"레이아웃",parameters:{demoPreview:{stack:!0},docs:{description:{story:"stat_horizontal · stat_inline · stat_row로 배치를 변경합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<Stat class="stat_horizontal" card title="활성 세션" value="342" />

    <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />

    <Stat class="stat_row" card shadow>
      <span class="stat_icon-wrap color_primary" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">팀 멤버</span>
        <span class="stat_value">48</span>
        <span class="stat_desc color_success">4명 신규 합류</span>
      </div>
    </Stat>`})},l={name:"아이콘",parameters:{demoPreview:{stack:!1},docs:{description:{story:"stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<Stat card>
      <span class="stat_icon color_primary">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </span>
      <span class="stat_label">다운로드</span>
      <span class="stat_value">2,847</span>
      <span class="stat_desc color_success">+24%</span>
    </Stat>

    <Stat class="stat_row" card>
      <span class="stat_icon-wrap color_success" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" />
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">완료율</span>
        <div class="stat_value-row">
          <span class="stat_value">94</span>
          <span class="stat_suffix">%</span>
        </div>
      </div>
    </Stat>`})},p={name:"스킨",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card · shadow · stat_borderless · stat_accent로 외형을 조절합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
<\/script>

<template>
  <div class="stat_group stat_group-2">
    <Stat card title="기본 카드" value="1,200" />
    <Stat card shadow title="Shadow" value="980" />
    <Stat card class="stat_borderless" title="Borderless" value="456" />
    <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" trend-color="primary" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<div class="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card class="stat_borderless" title="Borderless" value="456" />
      <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" trend-color="primary" />
    </div>`})},C={name:"그룹",parameters:{demoPreview:{stack:!0},docs:{description:{story:"stat_group으로 여러 지표를 그리드로 배치합니다."},source:{code:`<script setup>
import Stat from '@uxkm/ui/components/Stat.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<div class="stat_group">
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
    </div>`})},m={name:"카드 혼합",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import Stat from '@uxkm/ui/components/Stat.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Stat:t,Card:a,CardBody:e,CardFooter:n,CardHeader:s},template:`<Card variant="shadow">
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
    </Card>`})};var v,_,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "제목",
    value: "1",
    prefix: "값",
    suffix: "값",
    description: "설명 텍스트입니다.",
    trend: "값",
    trendColor: "값",
    size: "md",
    card: false,
    shadow: false
  },
  render: args => ({
    components: {
      Stat
    },
    setup() {
      return {
        args
      };
    },
    template: '<Stat v-bind="args" />'
  })
}`,...(S=(_=r.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var B,g,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "title · value · description으로 지표를 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <Stat\\n  title=\\"총 사용자\\"\\n  value=\\"12,345\\"\\n  description=\\"+12.5% 지난 달 대비\\"\\n  trend-color=\\"success\\"\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trend-color="success"
    />\`
  })
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,w,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "접두 · 접미",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "prefix · suffix로 통화·단위를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <Stat title=\\"총 매출\\" prefix=\\"₩\\" value=\\"4,280,000\\" description=\\"+8.2%\\" trend-color=\\"success\\" />\\n  <Stat title=\\"전환율\\" value=\\"3.6\\" suffix=\\"%\\" description=\\"-0.4%p\\" trend-color=\\"danger\\" />\\n  <Stat title=\\"평균 응답 시간\\" value=\\"128\\" suffix=\\"ms\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />

    <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />

    <Stat title="평균 응답 시간" value="128" suffix="ms" />\`
  })
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var D,h,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "추세",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "trend로 증감 방향을 아이콘과 함께 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <Stat\\n  title=\\"월간 매출\\"\\n  prefix=\\"₩\\"\\n  value=\\"4.2M\\"\\n  trend=\\"+8.2%\\"\\n  trend-color=\\"success\\"\\n  description=\\"전월 대비\\"\\n  card\\n  shadow\\n  />\\n  <Stat\\n  title=\\"이탈률\\"\\n  value=\\"2.4\\"\\n  suffix=\\"%\\"\\n  trend=\\"+0.3%p\\"\\n  trend-color=\\"danger\\"\\n  card\\n  shadow\\n  >\\n  <template #trend-icon>\\n    <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n      <path d=\\"m6 9 6 6 6-6\\" />\\n    </svg>\\n  </template>\\n  </Stat>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<Stat
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
    </Stat>\`
  })
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var A,b,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "size로 수치 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <Stat size=\\"sm\\" card title=\\"Small\\" value=\\"1,024\\" />\\n  <Stat card title=\\"Medium\\" value=\\"8,192\\" />\\n  <Stat size=\\"lg\\" card title=\\"Large\\" value=\\"64K\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<Stat size="sm" card title="Small" value="1,024" />
    <Stat card title="Medium" value="8,192" />
    <Stat size="lg" card title="Large" value="64K" />\`
  })
}`,...(E=(b=d.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var F,M,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "레이아웃",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "stat_horizontal · stat_inline · stat_row로 배치를 변경합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <Stat class=\\"stat_horizontal\\" card title=\\"활성 세션\\" value=\\"342\\" />\\n  <Stat class=\\"stat_inline\\" card title=\\"CPU 사용률\\" value=\\"68\\" suffix=\\"%\\" />\\n  <Stat class=\\"stat_row\\" card shadow>\\n    <span class=\\"stat_icon-wrap color_primary\\" aria-hidden=\\"true\\">\\n      <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <path d=\\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\" />\\n        <circle cx=\\"9\\" cy=\\"7\\" r=\\"4\\" />\\n        <path d=\\"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75\\" />\\n      </svg>\\n    </span>\\n    <div class=\\"stat_body\\">\\n      <span class=\\"stat_label\\">팀 멤버</span>\\n      <span class=\\"stat_value\\">48</span>\\n      <span class=\\"stat_desc color_success\\">4명 신규 합류</span>\\n    </div>\\n  </Stat>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<Stat class="stat_horizontal" card title="활성 세션" value="342" />

    <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />

    <Stat class="stat_row" card shadow>
      <span class="stat_icon-wrap color_primary" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">팀 멤버</span>
        <span class="stat_value">48</span>
        <span class="stat_desc color_success">4명 신규 합류</span>
      </div>
    </Stat>\`
  })
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var H,P,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <Stat card>\\n    <span class=\\"stat_icon color_primary\\">\\n      <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n        <path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\" />\\n        <polyline points=\\"7 10 12 15 17 10\\" />\\n        <line x1=\\"12\\" y1=\\"15\\" x2=\\"12\\" y2=\\"3\\" />\\n      </svg>\\n    </span>\\n    <span class=\\"stat_label\\">다운로드</span>\\n    <span class=\\"stat_value\\">2,847</span>\\n    <span class=\\"stat_desc color_success\\">+24%</span>\\n  </Stat>\\n  <Stat class=\\"stat_row\\" card>\\n    <span class=\\"stat_icon-wrap color_success\\" aria-hidden=\\"true\\">\\n      <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\" />\\n        <path d=\\"M22 4 12 14.01l-3-3\\" />\\n      </svg>\\n    </span>\\n    <div class=\\"stat_body\\">\\n      <span class=\\"stat_label\\">완료율</span>\\n      <div class=\\"stat_value-row\\">\\n        <span class=\\"stat_value\\">94</span>\\n        <span class=\\"stat_suffix\\">%</span>\\n      </div>\\n    </div>\\n  </Stat>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<Stat card>
      <span class="stat_icon color_primary">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </span>
      <span class="stat_label">다운로드</span>
      <span class="stat_value">2,847</span>
      <span class="stat_desc color_success">+24%</span>
    </Stat>

    <Stat class="stat_row" card>
      <span class="stat_icon-wrap color_success" aria-hidden="true">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" />
        </svg>
      </span>
      <div class="stat_body">
        <span class="stat_label">완료율</span>
        <div class="stat_value-row">
          <span class="stat_value">94</span>
          <span class="stat_suffix">%</span>
        </div>
      </div>
    </Stat>\`
  })
}`,...(K=(P=l.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var L,T,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "스킨",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card · shadow · stat_borderless · stat_accent로 외형을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"stat_group stat_group-2\\">\\n    <Stat card title=\\"기본 카드\\" value=\\"1,200\\" />\\n    <Stat card shadow title=\\"Shadow\\" value=\\"980\\" />\\n    <Stat card class=\\"stat_borderless\\" title=\\"Borderless\\" value=\\"456\\" />\\n    <Stat card class=\\"stat_accent color_primary\\" title=\\"Accent\\" value=\\"789\\" description=\\"강조 지표\\" trend-color=\\"primary\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<div class="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card class="stat_borderless" title="Borderless" value="456" />
      <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" trend-color="primary" />
    </div>\`
  })
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var I,U,$;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "그룹",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "stat_group으로 여러 지표를 그리드로 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"stat_group\\">\\n    <Stat card shadow title=\\"총 매출\\" prefix=\\"₩\\" value=\\"4.2M\\" description=\\"+8.2%\\" trend-color=\\"success\\" />\\n    <Stat card shadow title=\\"신규 가입\\" value=\\"1,234\\" description=\\"+15.3%\\" trend-color=\\"success\\" />\\n    <Stat card shadow title=\\"이탈률\\" value=\\"2.4\\" suffix=\\"%\\" description=\\"+0.3%p\\" trend-color=\\"danger\\" />\\n    <Stat card shadow title=\\"활성 사용자\\" value=\\"8,901\\" description=\\"변동 없음\\" trend-color=\\"muted\\" />\\n  </div>\\n  <div class=\\"stat_group stat_group-4 stat_group-divider stat_card stat_shadow\\" style=\\"padding: var(--space-lg);\\">\\n    <Stat title=\\"방문\\" value=\\"24.5K\\" />\\n    <Stat title=\\"페이지뷰\\" value=\\"89.2K\\" />\\n    <Stat title=\\"전환\\" value=\\"1,842\\" />\\n    <Stat title=\\"매출\\" value=\\"₩12M\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<div class="stat_group">
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
    </div>\`
  })
}`,...($=(U=C.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var O,G,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "카드 혼합",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardFooter from '@uxkm/ui/components/CardFooter.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <Card variant=\\"shadow\\">\\n    <CardHeader title=\\"이번 달 요약\\" subtitle=\\"2024년 6월\\" />\\n    <CardBody>\\n      <div class=\\"stat_group stat_group-3\\">\\n        <Stat title=\\"매출\\" prefix=\\"₩\\" value=\\"12M\\" trend=\\"+18%\\" trend-color=\\"success\\" />\\n        <Stat title=\\"주문\\" value=\\"3,456\\" description=\\"+9.1%\\" trend-color=\\"success\\" />\\n        <Stat title=\\"환불\\" value=\\"42\\" description=\\"+3건\\" trend-color=\\"danger\\" />\\n      </div>\\n    </CardBody>\\n    <CardFooter between>\\n      <span class=\\"color_muted size_sm\\">실시간 갱신</span>\\n      <a href=\\"#\\" class=\\"link color_primary size_sm\\" @click.prevent>상세 보기</a>\\n    </CardFooter>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Stat,
      Card,
      CardBody,
      CardFooter,
      CardHeader
    },
    template: \`<Card variant="shadow">
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
    </Card>\`
  })
}`,...(j=(G=m.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};const lt=["Playground","Basic","Prefix","Trend","Size","Layout","Icon","Skin","Group","Context"];export{o as Basic,m as Context,C as Group,l as Icon,i as Layout,r as Playground,u as Prefix,d as Size,p as Skin,c as Trend,lt as __namedExportsOrder,it as default};

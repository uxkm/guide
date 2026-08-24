import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./Stat.stories-Dampj0t9.js";import{i as f,r as p}from"./react-DSvVgjCn.js";import{c as m,r as h,u as g}from"./blocks-CkHyEh4O.js";import{i as _,n as v,r as y,t as b}from"./ComponentApiDocs-D9Q6nkXJ.js";import{r as x,t as S}from"./dataDisplayAdvancedApiSections-Bbj3q4fV.js";function C(e,t){let n=`import { Stat } from '@uxkm/react/stat';
import Icon from '@uxkm/react/icon';

export function Example() {
  return (
${t.react}
  );
}`,r=`<script setup>
import { Stat } from '@uxkm/vue/stat';
import Icon from '@uxkm/vue/icon';
<\/script>

<template>
${t.vue}
</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Stat/Stat.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Stat/stat.njk · ${e}`,code:`{# Stat · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/stat · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/stat · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/stat · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/stat · ${e}`,code:n}]}var w,T;function E(){return(E=e((()=>{w=e=>`<svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="${e}"></path></svg>`,T={basic:C(`basic`,{html:`<div class="stat">
  <span class="stat_label">총 사용자</span>
  <span class="stat_value">12,480</span>
  <span class="stat_desc">지난 30일 기준</span>
</div>`,react:`    <Stat title="총 사용자" value="12,480" description="지난 30일 기준" />`,vue:`  <Stat title="총 사용자" value="12,480" description="지난 30일 기준" />`}),prefixSuffix:C(`prefixSuffix`,{html:`<div class="stat_group stat_group-3">
  <div class="stat"><span class="stat_label">총 매출</span><div class="stat_value-row"><span class="stat_prefix">₩</span><span class="stat_value">4,280,000</span></div><span class="stat_desc color_success">+8.2%</span></div>
  <div class="stat"><span class="stat_label">전환율</span><div class="stat_value-row"><span class="stat_value">3.6</span><span class="stat_suffix">%</span></div><span class="stat_desc color_danger">-0.4%p</span></div>
  <div class="stat"><span class="stat_label">평균 응답 시간</span><div class="stat_value-row"><span class="stat_value">128</span><span class="stat_suffix">ms</span></div></div>
</div>`,react:`    <div className="stat_group stat_group-3">
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
    </div>`,vue:`  <div class="stat_group stat_group-3">
    <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trend-color="success" />
    <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trend-color="danger" />
    <Stat title="평균 응답 시간" value="128" suffix="ms" />
  </div>`}),trend:C(`trend`,{html:`<div class="stat_group stat_group-2">
  <div class="stat"><div class="stat_header"><span class="stat_label">신규 가입</span><span class="stat_trend color_success">${w(`m6 15 6-6 6 6`)}+15.3%</span></div><span class="stat_value">1,234</span></div>
  <div class="stat"><div class="stat_header"><span class="stat_label">이탈률</span><span class="stat_trend color_danger">${w(`M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01`)}+0.3%p</span></div><span class="stat_value">2.4%</span></div>
</div>`,react:`    <div className="stat_group stat_group-2">
      <Stat title="신규 가입" value="1,234" trend="+15.3%" trendColor="success" />
      <Stat title="이탈률" value="2.4%" trend="+0.3%p" trendColor="danger" trendIcon={<Icon name="warning" />} />
    </div>`,vue:`  <div class="stat_group stat_group-2">
    <Stat title="신규 가입" value="1,234" trend="+15.3%" trend-color="success" />
    <Stat title="이탈률" value="2.4%" trend="+0.3%p" trend-color="danger"><template #trend-icon><Icon name="warning" /></template></Stat>
  </div>`}),sizes:C(`sizes`,{html:`<div class="stat_group stat_group-3">
  <div class="stat stat_sm stat_card"><span class="stat_label">Small</span><span class="stat_value">1,024</span></div>
  <div class="stat stat_card"><span class="stat_label">Medium</span><span class="stat_value">8,192</span></div>
  <div class="stat stat_lg stat_card"><span class="stat_label">Large</span><span class="stat_value">64K</span></div>
</div>`,react:`    <div className="stat_group stat_group-3">
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
    </div>`,vue:`  <div class="stat_group stat_group-3">
    <Stat size="sm" card title="Small" value="1,024" />
    <Stat card title="Medium" value="8,192" />
    <Stat size="lg" card title="Large" value="64K" />
  </div>`}),layouts:C(`layouts`,{html:`<div class="stat stat_horizontal stat_card"><span class="stat_label">활성 세션</span><span class="stat_value">342</span></div>
<div class="stat stat_inline stat_card"><span class="stat_label">CPU 사용률</span><div class="stat_value-row"><span class="stat_value">68</span><span class="stat_suffix">%</span></div></div>
<div class="stat stat_row stat_card stat_shadow"><span class="stat_icon-wrap color_primary">${w(`M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0`)}</span><div class="stat_body"><span class="stat_label">신규 사용자</span><span class="stat_value">1,284</span></div></div>`,react:`    <>
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow><span className="stat_icon-wrap color_primary"><Icon name="user" /></span><div className="stat_body"><span className="stat_label">신규 사용자</span><span className="stat_value">1,284</span></div></Stat>
    </>`,vue:`  <Stat class="stat_horizontal" card title="활성 세션" value="342" />
  <Stat class="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
  <Stat class="stat_row" card shadow><span class="stat_icon-wrap color_primary"><Icon name="user" /></span><div class="stat_body"><span class="stat_label">신규 사용자</span><span class="stat_value">1,284</span></div></Stat>`}),icon:C(`icon`,{html:`<div class="stat_group stat_group-2">
  <div class="stat stat_card"><span class="stat_icon">${w(`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z`)}</span><span class="stat_label">즐겨찾기</span><span class="stat_value">128</span></div>
  <div class="stat stat_row stat_card"><span class="stat_icon-wrap color_success">${w(`m5 12 4 4L19 6`)}</span><div class="stat_body"><span class="stat_label">완료</span><span class="stat_value">84</span></div></div>
</div>`,react:`    <div className="stat_group stat_group-2">
      <Stat card><span className="stat_icon"><Icon name="star" /></span><span className="stat_label">즐겨찾기</span><span className="stat_value">128</span></Stat>
      <Stat className="stat_row" card><span className="stat_icon-wrap color_success"><Icon name="check" /></span><div className="stat_body"><span className="stat_label">완료</span><span className="stat_value">84</span></div></Stat>
    </div>`,vue:`  <div class="stat_group stat_group-2">
    <Stat card><span class="stat_icon"><Icon name="star" /></span><span class="stat_label">즐겨찾기</span><span class="stat_value">128</span></Stat>
    <Stat class="stat_row" card><span class="stat_icon-wrap color_success"><Icon name="check" /></span><div class="stat_body"><span class="stat_label">완료</span><span class="stat_value">84</span></div></Stat>
  </div>`}),skins:C(`skins`,{html:`<div class="stat_group stat_group-4">
  <div class="stat stat_card"><span class="stat_label">기본 카드</span><span class="stat_value">1,200</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">Shadow</span><span class="stat_value">980</span></div>
  <div class="stat stat_card stat_borderless"><span class="stat_label">Borderless</span><span class="stat_value">456</span></div>
  <div class="stat stat_card stat_accent color_primary"><span class="stat_label">Accent</span><span class="stat_value">789</span><span class="stat_desc">강조 지표</span></div>
</div>`,react:`    <div className="stat_group stat_group-4">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat card className="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
    </div>`,vue:`  <div class="stat_group stat_group-4">
    <Stat card title="기본 카드" value="1,200" />
    <Stat card shadow title="Shadow" value="980" />
    <Stat card class="stat_borderless" title="Borderless" value="456" />
    <Stat card class="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
  </div>`}),group:C(`group`,{html:`<div class="stat_group stat_group-4">
  <div class="stat stat_card stat_shadow"><span class="stat_label">총 매출</span><div class="stat_value-row"><span class="stat_prefix">₩</span><span class="stat_value">4.2M</span></div><span class="stat_desc color_success">+8.2%</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">신규 가입</span><span class="stat_value">1,234</span><span class="stat_desc color_success">+15.3%</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">이탈률</span><div class="stat_value-row"><span class="stat_value">2.4</span><span class="stat_suffix">%</span></div><span class="stat_desc color_danger">+0.3%p</span></div>
  <div class="stat stat_card stat_shadow"><span class="stat_label">활성 사용자</span><span class="stat_value">8,901</span><span class="stat_desc color_muted">변동 없음</span></div>
</div>
<div class="stat_group stat_group-4 stat_group-divider">
  <div class="stat"><span class="stat_label">방문</span><span class="stat_value">24.5K</span></div>
  <div class="stat"><span class="stat_label">페이지뷰</span><span class="stat_value">89.2K</span></div>
  <div class="stat"><span class="stat_label">전환</span><span class="stat_value">1,842</span></div>
  <div class="stat"><span class="stat_label">매출</span><span class="stat_value">₩12M</span></div>
</div>`,react:`    <>
      <div className="stat_group stat_group-4">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div className="stat_group stat_group-4 stat_group-divider">
        <Stat title="방문" value="24.5K" /><Stat title="페이지뷰" value="89.2K" /><Stat title="전환" value="1,842" /><Stat title="매출" value="₩12M" />
      </div>
    </>`,vue:`  <div class="stat_group stat_group-4">
    <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trend-color="success" />
    <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trend-color="success" />
    <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trend-color="danger" />
    <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trend-color="muted" />
  </div>
  <div class="stat_group stat_group-4 stat_group-divider">
    <Stat title="방문" value="24.5K" /><Stat title="페이지뷰" value="89.2K" /><Stat title="전환" value="1,842" /><Stat title="매출" value="₩12M" />
  </div>`})}})))()}function D(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...f(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m,{of:l}),`
`,(0,k.jsx)(t.h1,{id:`stat`,children:`Stat`}),`
`,(0,k.jsx)(t.p,{children:`핵심 수치와 라벨, 설명, 추세를 강조해 표시합니다. 크기·접두·접미·아이콘·레이아웃·카드 스킨과 반응형 그룹을 제공합니다.`}),`
`,(0,k.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,k.jsx)(t.code,{children:`@uxkm/vue/stat`}),`, `,(0,k.jsx)(t.code,{children:`@uxkm/react/stat`}),`으로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,k.jsx)(h,{of:u,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.basic}),`
`,(0,k.jsx)(t.h2,{id:`접두접미`,children:`접두·접미`}),`
`,(0,k.jsx)(t.p,{children:`통화·백분율·단위 등을 값과 분리해 표현합니다.`}),`
`,(0,k.jsx)(h,{of:i,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.prefixSuffix}),`
`,(0,k.jsx)(t.h2,{id:`추세`,children:`추세`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.code,{children:`trend`}),`, `,(0,k.jsx)(t.code,{children:`trendColor`}),`, `,(0,k.jsx)(t.code,{children:`trendIcon`}),`으로 증감 정보를 표시합니다.`]}),`
`,(0,k.jsx)(h,{of:r,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.trend}),`
`,(0,k.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,k.jsx)(t.p,{children:`small, medium, large 세 가지 수치 크기를 제공합니다.`}),`
`,(0,k.jsx)(h,{of:n,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.sizes}),`
`,(0,k.jsx)(t.h2,{id:`레이아웃`,children:`레이아웃`}),`
`,(0,k.jsx)(t.p,{children:`horizontal, inline, row 클래스로 콘텐츠 관계에 맞는 배치를 선택합니다.`}),`
`,(0,k.jsx)(h,{of:c,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.layouts}),`
`,(0,k.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,k.jsx)(t.p,{children:`기본 슬롯·자식 콘텐츠로 아이콘과 커스텀 본문을 조합합니다.`}),`
`,(0,k.jsx)(h,{of:a,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.icon}),`
`,(0,k.jsx)(t.h2,{id:`카드-스킨`,children:`카드 스킨`}),`
`,(0,k.jsx)(t.p,{children:`기본, 그림자, 배경형, 좌측 강조 스킨을 조합합니다.`}),`
`,(0,k.jsx)(h,{of:s,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.skins}),`
`,(0,k.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.code,{children:`stat_group-2`}),`부터 `,(0,k.jsx)(t.code,{children:`stat_group-4`}),`, `,(0,k.jsx)(t.code,{children:`stat_group-divider`}),`까지 반응형 지표 묶음을 제공합니다.`]}),`
`,(0,k.jsx)(h,{of:o,sourceState:`none`}),`
`,(0,k.jsx)(y,{examples:T.group}),`
`,(0,k.jsx)(b,{sections:x})]})}function O(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),p(),g(),_(),v(),E(),S(),d()})))()}A();export{O as default};
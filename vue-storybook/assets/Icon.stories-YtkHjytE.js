import{_ as n,c as o}from"./Icon-D97OEunV.js";import{_ as e}from"./TypoText-DRTgUpaX.js";import{e as Q,a as U}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";const W=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],X=[{name:"name",type:"string",default:"—",description:"common-icons 갤러리 키. 지정 시 기본 슬롯 대신 미리 정의된 stroke 경로를 렌더합니다"},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"아이콘 크기. md는 icon만, 나머지는 icon_sm · icon_lg · icon_xl"},{name:"color",type:"string",default:"—",description:"공통 color_* 클래스 (currentColor 상속)"},{name:"inline",type:"boolean",default:"false",description:"텍스트와 수직 정렬 (icon_inline)"},{name:"spin",type:"boolean",default:"false",description:"회전 애니메이션 (icon_spin)"},{name:"button",type:"boolean",default:"false",description:"클릭 가능한 아이콘 버튼 (icon_button + button 태그)"},{name:"circle",type:"boolean",default:"false",description:"원형 배경 (icon_circle)"},{name:"square",type:"boolean",default:"false",description:"사각 배경 (icon_square)"},{name:"pulse",type:"boolean",default:"false",description:"펄스 애니메이션 (icon_pulse, circle과 함께)"},{name:"aria-label",type:"string",default:"—",description:"button·의미 있는 아이콘 시 접근성 라벨"},Q],Y=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Z=[{name:"default",description:"SVG path·circle 등 자식 요소"}],nn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],on=[{name:"icon",description:"SVG 루트 기본 크기"},{name:"icon_sm · icon_lg · icon_xl",description:"크기 변형"},{name:"icon_inline",description:"텍스트 인라인 정렬"},{name:"icon_spin",description:"회전 애니메이션"},{name:"icon_button",description:"아이콘 버튼 래퍼"},{name:"icon_circle · icon_square",description:"배경 형태"},{name:"icon_circle-sm · icon_circle-lg",description:"원형 배경 크기"},{name:"icon_pulse",description:"펄스 강조"},{name:"icon_group",description:"여러 아이콘 가로 배치 컨테이너"},{name:"color_*",description:"공통 색상 유틸"},...U],en=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],cn=[{name:"--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl",default:"1rem · 1.25rem · 1.5rem · 2rem",description:"아이콘 지름"},{name:"--icon-spin-duration",default:"0.8s",description:"회전 주기"},{name:"--icon-circle-size · --icon-circle-size-sm · --icon-circle-size-lg",default:"2.25rem · 1.75rem · 2.75rem",description:"원형 배경 크기"},{name:"--icon-pulse-duration",default:"1.5s",description:"펄스 애니메이션 주기"}],rn=[{title:"API · Props",tables:[{columns:W,rows:X,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:Y,rows:Z,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:nn,rows:on,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:en,rows:cn,codeColumn:"name"}]}],mn={title:"Components/기본 요소/Icon",id:"components-icon",component:n,tags:["autodocs"],argTypes:{name:{control:"select",options:["search","plus","minus","close","check","edit","trash","delete","copy","save","download","upload","share","link","external-link","filter","refresh","undo","redo","printer","paperclip","arrow-left","arrow-right","arrow-up","arrow-down","chevron-left","chevron-right","chevron-up","chevron-down","menu","more-vertical","more-horizontal","grid","list","home","settings","user","users","mail","phone","bell","message","send","info","help-circle","alert-circle","alert-triangle","check-circle","x-circle","star","heart","bookmark","thumb-up","eye","eye-off","lock","unlock","log-in","log-out","calendar","clock","folder","file","image","camera","map-pin","globe","cart","credit-card","tag","sun","moon","cloud","book","zoom-in","zoom-out","maximize"],type:{name:"enum",summary:"common-icons 갤러리 키"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg","xl"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},inline:{control:"boolean",type:{name:"boolean",summary:"boolean"}},spin:{control:"boolean",type:{name:"boolean",summary:"boolean"}},button:{control:"boolean",type:{name:"boolean",summary:"boolean"}},circle:{control:"boolean",type:{name:"boolean",summary:"boolean"}},square:{control:"boolean",type:{name:"boolean",summary:"boolean"}},pulse:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:rn}},c={args:{name:"search",color:"값",size:"md",inline:!1,spin:!1,button:!1,circle:!1,square:!1,pulse:!1,ariaLabel:"접근성 라벨"},render:N=>({components:{Icon:n},setup(){return{args:N}},template:'<Icon v-bind="args" />'})},r={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"svg 태그에 icon 클래스를 적용합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </Icon>
  <Icon>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Icon>
  <Icon>
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </Icon>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<Icon>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
    <Icon>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Icon>
    <Icon>
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Icon>`})},a={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon size="sm">
    <path d="M12 5v14M5 12h14" />
  </Icon>
  <Icon>
    <path d="M12 5v14M5 12h14" />
  </Icon>
  <Icon size="lg">
    <path d="M12 5v14M5 12h14" />
  </Icon>
  <Icon size="xl">
    <path d="M12 5v14M5 12h14" />
  </Icon>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<Icon size="sm">
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon>
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon size="lg">
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon size="xl">
      <path d="M12 5v14M5 12h14" />
    </Icon>`})},t={name:"색상",parameters:{demoPreview:{stack:!1},docs:{description:{story:"공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon color="default">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Icon>
  <Icon color="primary">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Icon>
  <Icon color="success">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </Icon>
  <Icon color="warning">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
  </Icon>
  <Icon color="danger">
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6M9 9l6 6" />
  </Icon>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<Icon color="default">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Icon>
    <Icon color="primary">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Icon>
    <Icon color="success">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </Icon>
    <Icon color="warning">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </Icon>
    <Icon color="danger">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </Icon>`})},s={name:"텍스트와 함께",parameters:{demoPreview:{stack:!0},docs:{description:{story:"icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <p>
    <Icon inline color="info">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
    </Icon>
    <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
  </p>
  <p>
    <Icon inline color="success">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </Icon>
    <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
  </p>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<p>
      <Icon inline color="info">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
      </Icon>
      <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
    </p>
    <p>
      <Icon inline color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
    </p>`})},u={name:"원형 · 사각 배경",parameters:{demoPreview:{stack:!1},docs:{description:{story:"icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon circle color="primary" size="sm">
    <path d="M12 5v14M5 12h14" />
  </Icon>
  <Icon circle color="success" size="sm">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </Icon>
  <Icon circle color="danger" size="lg">
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </Icon>
  <Icon square color="primary" size="sm">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Icon>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<Icon circle color="primary" size="sm">
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon circle color="success" size="sm">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </Icon>
    <Icon circle color="danger" size="lg">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Icon>
    <Icon square color="primary" size="sm">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Icon>`})},l={name:"아이콘 버튼",parameters:{demoPreview:{stack:!1},docs:{description:{story:"icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon button color="primary" aria-label="검색">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </Icon>
  <Icon button color="muted" aria-label="설정">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </Icon>
  <Icon button color="danger" aria-label="삭제">
    <path d="M18 6 6 18M6 6l12 12" />
  </Icon>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<Icon button color="primary" aria-label="검색">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
    <Icon button color="muted" aria-label="설정">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </Icon>
    <Icon button color="danger" aria-label="삭제">
      <path d="M18 6 6 18M6 6l12 12" />
    </Icon>`})},p={name:"펄스",parameters:{demoPreview:{stack:!1},docs:{description:{story:"icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon circle pulse color="primary" size="sm">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </Icon>
  <Icon circle pulse color="danger" size="sm">
    <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
  </Icon>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<Icon circle pulse color="primary" size="sm">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Icon>
    <Icon circle pulse color="danger" size="sm">
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </Icon>`})},i={name:"그룹",parameters:{demoPreview:{stack:!0},docs:{description:{story:"icon_group으로 여러 아이콘을 나란히 배치합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <div class="icon_group">
    <Icon color="muted">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </Icon>
    <Icon color="muted">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </Icon>
    <Icon color="muted">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Icon>
  </div>
  <p>
    <Icon circle color="primary" size="sm">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </Icon>
    <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
  </p>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<div class="icon_group">
      <Icon color="muted">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </Icon>
      <Icon color="muted">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </Icon>
      <Icon color="muted">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
    </div>

    <p>
      <Icon circle color="primary" size="sm">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </Icon>
      <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
    </p>`})},m={name:"로딩",parameters:{demoPreview:{stack:!1},docs:{description:{story:"icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon spin color="primary">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </Icon>
  <Icon spin size="lg" color="muted">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </Icon>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<Icon spin color="primary">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </Icon>
    <Icon spin size="lg" color="muted">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </Icon>`})},d={name:"아이콘 유형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';
<\/script>

<template>
  <div class="icon_grid">
    <div
    v-for="name in commonIconGallery"
    :key="name"
    class="icon_grid-item"
    >
    <Icon :name="name" class="icon_lg" />
    <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
  </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Icon:n,TypoText:e},setup(){return{commonIconGallery:o}},template:`<div class="icon_grid">
      <div
        v-for="name in commonIconGallery"
        :key="name"
        class="icon_grid-item"
      >
        <Icon :name="name" class="icon_lg" />
        <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
      </div>
    </div>`})};var C,I,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: "search",
    color: "값",
    size: "md",
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ariaLabel: "접근성 라벨"
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Icon v-bind="args" />\`
  })
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var h,v,M;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "svg 태그에 icon 클래스를 적용합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon>\\n    <circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\" />\\n    <path d=\\"m21 21-4.35-4.35\\" />\\n  </Icon>\\n  <Icon>\\n    <path d=\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\" />\\n    <path d=\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\\" />\\n  </Icon>\\n  <Icon>\\n    <path d=\\"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\" />\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<Icon>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
    <Icon>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Icon>
    <Icon>
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Icon>\`
  })
}`,...(M=(v=r.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var B,x,g;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon size=\\"sm\\">\\n    <path d=\\"M12 5v14M5 12h14\\" />\\n  </Icon>\\n  <Icon>\\n    <path d=\\"M12 5v14M5 12h14\\" />\\n  </Icon>\\n  <Icon size=\\"lg\\">\\n    <path d=\\"M12 5v14M5 12h14\\" />\\n  </Icon>\\n  <Icon size=\\"xl\\">\\n    <path d=\\"M12 5v14M5 12h14\\" />\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<Icon size="sm">
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon>
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon size="lg">
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon size="xl">
      <path d="M12 5v14M5 12h14" />
    </Icon>\`
  })
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,f,D;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "색상",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon color=\\"default\\">\\n    <path d=\\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\\" />\\n  </Icon>\\n  <Icon color=\\"primary\\">\\n    <path d=\\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\\" />\\n  </Icon>\\n  <Icon color=\\"success\\">\\n    <path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\" />\\n    <path d=\\"M22 4 12 14.01l-3-3\\" />\\n  </Icon>\\n  <Icon color=\\"warning\\">\\n    <path d=\\"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\" />\\n  </Icon>\\n  <Icon color=\\"danger\\">\\n    <circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" />\\n    <path d=\\"m15 9-6 6M9 9l6 6\\" />\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<Icon color="default">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Icon>
    <Icon color="primary">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Icon>
    <Icon color="success">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </Icon>
    <Icon color="warning">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </Icon>
    <Icon color="danger">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </Icon>\`
  })
}`,...(D=(f=t.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var k,z,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "텍스트와 함께",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    <Icon inline color=\\"info\\">\\n      <circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" />\\n      <path d=\\"M12 16v-4\\" />\\n      <circle cx=\\"12\\" cy=\\"8\\" r=\\"1\\" fill=\\"currentColor\\" stroke=\\"none\\" />\\n    </Icon>\\n    <TypoText tag=\\"span\\" class=\\"ml_sm\\">변경 사항이 자동 저장됩니다.</TypoText>\\n  </p>\\n  <p>\\n    <Icon inline color=\\"success\\">\\n      <path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\" />\\n      <path d=\\"M22 4 12 14.01l-3-3\\" />\\n    </Icon>\\n    <TypoText tag=\\"span\\" class=\\"ml_sm\\">업로드가 완료되었습니다.</TypoText>\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<p>
      <Icon inline color="info">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
      </Icon>
      <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
    </p>
    <p>
      <Icon inline color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
    </p>\`
  })
}`,...(b=(z=s.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var _,A,L;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "원형 · 사각 배경",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon circle color=\\"primary\\" size=\\"sm\\">\\n    <path d=\\"M12 5v14M5 12h14\\" />\\n  </Icon>\\n  <Icon circle color=\\"success\\" size=\\"sm\\">\\n    <path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\" />\\n    <path d=\\"M22 4 12 14.01l-3-3\\" />\\n  </Icon>\\n  <Icon circle color=\\"danger\\" size=\\"lg\\">\\n    <path d=\\"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\" />\\n  </Icon>\\n  <Icon square color=\\"primary\\" size=\\"sm\\">\\n    <path d=\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\" />\\n    <path d=\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\\" />\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<Icon circle color="primary" size="sm">
      <path d="M12 5v14M5 12h14" />
    </Icon>
    <Icon circle color="success" size="sm">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </Icon>
    <Icon circle color="danger" size="lg">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Icon>
    <Icon square color="primary" size="sm">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Icon>\`
  })
}`,...(L=(A=u.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var E,w,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "아이콘 버튼",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon button color=\\"primary\\" aria-label=\\"검색\\">\\n    <circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\" />\\n    <path d=\\"m21 21-4.35-4.35\\" />\\n  </Icon>\\n  <Icon button color=\\"muted\\" aria-label=\\"설정\\">\\n    <circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\" />\\n    <path d=\\"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42\\" />\\n  </Icon>\\n  <Icon button color=\\"danger\\" aria-label=\\"삭제\\">\\n    <path d=\\"M18 6 6 18M6 6l12 12\\" />\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<Icon button color="primary" aria-label="검색">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
    <Icon button color="muted" aria-label="설정">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </Icon>
    <Icon button color="danger" aria-label="삭제">
      <path d="M18 6 6 18M6 6l12 12" />
    </Icon>\`
  })
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var P,H,G;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "펄스",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon circle pulse color=\\"primary\\" size=\\"sm\\">\\n    <path d=\\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\\" />\\n    <path d=\\"M13.73 21a2 2 0 0 1-3.46 0\\" />\\n  </Icon>\\n  <Icon circle pulse color=\\"danger\\" size=\\"sm\\">\\n    <circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\" fill=\\"currentColor\\" stroke=\\"none\\" />\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<Icon circle pulse color="primary" size="sm">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Icon>
    <Icon circle pulse color="danger" size="sm">
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </Icon>\`
  })
}`,...(G=(H=p.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var S,F,q;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "그룹",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "icon_group으로 여러 아이콘을 나란히 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"icon_group\\">\\n    <Icon color=\\"muted\\">\\n      <path d=\\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\\" />\\n      <polyline points=\\"16 6 12 2 8 6\\" />\\n      <line x1=\\"12\\" y1=\\"2\\" x2=\\"12\\" y2=\\"15\\" />\\n    </Icon>\\n    <Icon color=\\"muted\\">\\n      <path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\" />\\n      <polyline points=\\"7 10 12 15 17 10\\" />\\n      <line x1=\\"12\\" y1=\\"15\\" x2=\\"12\\" y2=\\"3\\" />\\n    </Icon>\\n    <Icon color=\\"muted\\">\\n      <path d=\\"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\" />\\n    </Icon>\\n  </div>\\n  <p>\\n    <Icon circle color=\\"primary\\" size=\\"sm\\">\\n      <path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\" />\\n      <circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\" />\\n    </Icon>\\n    <TypoText tag=\\"span\\" color=\\"muted\\" size=\\"sm\\" class=\\"ml_sm\\">홍길동님이 댓글을 남겼습니다.</TypoText>\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<div class="icon_group">
      <Icon color="muted">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </Icon>
      <Icon color="muted">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </Icon>
      <Icon color="muted">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
    </div>

    <p>
      <Icon circle color="primary" size="sm">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </Icon>
      <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
    </p>\`
  })
}`,...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var O,R,$;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "로딩",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\n<\/script>\\n\\n<template>\\n  <Icon spin color=\\"primary\\">\\n    <path d=\\"M21 12a9 9 0 1 1-6.219-8.56\\" />\\n  </Icon>\\n  <Icon spin size=\\"lg\\" color=\\"muted\\">\\n    <path d=\\"M21 12a9 9 0 1 1-6.219-8.56\\" />\\n  </Icon>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<Icon spin color="primary">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </Icon>
    <Icon spin size="lg" color="muted">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </Icon>\`
  })
}`,...($=(R=m.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var j,J,K;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "아이콘 유형",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\nimport { commonIconGallery } from '@uxkm/ui/data/common-icons';\\n<\/script>\\n\\n<template>\\n  <div class=\\"icon_grid\\">\\n    <div\\n    v-for=\\"name in commonIconGallery\\"\\n    :key=\\"name\\"\\n    class=\\"icon_grid-item\\"\\n    >\\n    <Icon :name=\\"name\\" class=\\"icon_lg\\" />\\n    <TypoText tag=\\"span\\" size=\\"sm\\" color=\\"muted\\">{{ name }}</TypoText>\\n  </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Icon,
      TypoText
    },
    setup() {
      return {
        commonIconGallery
      };
    },
    template: \`<div class="icon_grid">
      <div
        v-for="name in commonIconGallery"
        :key="name"
        class="icon_grid-item"
      >
        <Icon :name="name" class="icon_lg" />
        <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
      </div>
    </div>\`
  })
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const dn=["Playground","Basic","Size","Color","Inline","Circle","Button","Pulse","Group","Spin","Gallery"];export{r as Basic,l as Button,u as Circle,t as Color,d as Gallery,i as Group,s as Inline,c as Playground,p as Pulse,a as Size,m as Spin,dn as __namedExportsOrder,mn as default};

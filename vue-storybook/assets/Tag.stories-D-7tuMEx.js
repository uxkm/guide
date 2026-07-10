import{_ as e}from"./Tag-CUzyky8W.js";import{_ as a}from"./TagGroup-BsIpowN9.js";import{g as ae,a as le}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./Button-C3SXv-sJ.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";import"./Icon-D97OEunV.js";const oe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ne=[{name:"color",type:"string",default:"primary",description:"공통 color_* 클래스"},{name:"variant",type:"'filled' | 'solid' | 'outline' | 'borderless'",default:"filled",description:"태그 스킨"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tag_sm · tag_lg"},{name:"round",type:"boolean",default:"false",description:"pill 형태 (tag_round)"},{name:"checkable",type:"boolean",default:"false",description:"토글 버튼 (tag_checkable)"},{name:"add",type:"boolean",default:"false",description:"추가 버튼 (tag_add)"},{name:"closable",type:"boolean",default:"false",description:"닫기 버튼 표시"},{name:"selected",type:"boolean",default:"false",description:"선택 상태 (is-selected)"},{name:"disabled",type:"boolean",default:"false",description:"비활성 (is-disabled)"},{name:"label",type:"string",default:"—",description:"태그 텍스트. default 슬롯으로 대체 가능"},{name:"href",type:"string",default:"—",description:"링크 태그일 때 href (a 태그)"},{name:"close-label",type:"string",default:"—",description:"닫기 버튼 aria-label"},ae],re=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],te=[{name:"tight",type:"boolean",default:"false",description:"좁은 간격 (tag_group-tight)"},{name:"aria-label",type:"string",default:"—",description:"그룹 접근성 라벨"}],ue=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],se=[{name:"default",description:"태그 텍스트 (label prop 대체)"},{name:"icon",description:"텍스트 앞 아이콘 (tag_icon)"}],ce=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],ie=[{name:"default",description:"Tag 자식 목록"}],ge=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],de=[{name:"tag",description:"태그 루트"},{name:"tag_solid · tag_outline · tag_borderless",description:"스킨 변형"},{name:"tag_sm · tag_lg · tag_round",description:"크기·형태"},{name:"tag_checkable · tag_add",description:"인터랙션 변형"},{name:"tag_icon · tag_close",description:"내부 파트"},{name:"tag_group · tag_group-tight",description:"태그 묶음"},{name:"is-selected · is-disabled",description:"상태 클래스"},{name:"color_*",description:"공통 색상 유틸"},...le],pe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],me=[{name:"--tag-font-size · --tag-padding-y · --tag-padding-x",default:"—",description:"기본 태그 타이포·패딩"},{name:"--tag-gap",default:"var(--space-xs)",description:"아이콘·텍스트 간격"},{name:"--tag-close-size",default:"0.875rem",description:"닫기 버튼 크기"},{name:"--tag-add-border-style",default:"dashed",description:"추가 태그 테두리"}],Te=[{title:"API · Tag Props",tables:[{columns:oe,rows:ne,codeColumn:"name"}]},{title:"API · TagGroup Props",tables:[{columns:re,rows:te,codeColumn:"name"}]},{title:"API · Tag Slots",tables:[{columns:ue,rows:se,codeColumn:"name"}]},{title:"API · TagGroup Slots",tables:[{columns:ce,rows:ie,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ge,rows:de,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:pe,rows:me,codeColumn:"name"}]}],ke={title:"Components/데이터 표시/Tag",id:"components-tag",component:e,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},variant:{control:"select",options:["filled","solid","outline","borderless"],type:{name:"enum",summary:"'filled' | 'solid' | 'outline' | 'borderless'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},round:{control:"boolean",type:{name:"boolean",summary:"boolean"}},checkable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},add:{control:"boolean",type:{name:"boolean",summary:"boolean"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},selected:{control:"boolean",type:{name:"boolean",summary:"boolean"}},disabled:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},href:{control:"text",type:{name:"string",summary:"string"}},closeLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:Te}},l={args:{color:"primary",variant:"filled",size:"md",round:!1,checkable:!1,add:!1,closable:!1,selected:!1,disabled:!1,label:"라벨",href:"#",closeLabel:"라벨"},render:ee=>({components:{Tag:e},setup(){return{args:ee}},template:'<Tag v-bind="args" />'})},o={name:"기본 (Filled)",parameters:{demoPreview:{stack:!1},docs:{description:{story:"연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag color="default" label="Default" />
  <Tag color="primary" label="Primary" />
  <Tag color="success" label="Success" />
  <Tag color="warning" label="Warning" />
  <Tag color="danger" label="Danger" />
  <Tag color="info" label="Info" />
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag color="default" label="Default" />
    <Tag color="primary" label="Primary" />
    <Tag color="success" label="Success" />
    <Tag color="warning" label="Warning" />
    <Tag color="danger" label="Danger" />
    <Tag color="info" label="Info" />`})},n={name:"솔리드",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tag_solid로 채움 배경·대비 텍스트를 적용합니다. 강조가 필요한 레이블에 사용합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag variant="solid" color="default" label="Default" />
  <Tag variant="solid" color="primary" label="Primary" />
  <Tag variant="solid" color="success" label="Success" />
  <Tag variant="solid" color="warning" label="Warning" />
  <Tag variant="solid" color="danger" label="Danger" />
  <Tag variant="solid" color="info" label="Info" />
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag variant="solid" color="default" label="Default" />
    <Tag variant="solid" color="primary" label="Primary" />
    <Tag variant="solid" color="success" label="Success" />
    <Tag variant="solid" color="warning" label="Warning" />
    <Tag variant="solid" color="danger" label="Danger" />
    <Tag variant="solid" color="info" label="Info" />`})},r={name:"아웃라인",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tag_outline으로 배경 없이 테두리만 표시합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag variant="outline" color="default" label="Default" />
  <Tag variant="outline" color="primary" label="Primary" />
  <Tag variant="outline" color="success" label="Success" />
  <Tag variant="outline" color="warning" label="Warning" />
  <Tag variant="outline" color="danger" label="Danger" />
  <Tag variant="outline" color="info" label="Info" />
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag variant="outline" color="default" label="Default" />
    <Tag variant="outline" color="primary" label="Primary" />
    <Tag variant="outline" color="success" label="Success" />
    <Tag variant="outline" color="warning" label="Warning" />
    <Tag variant="outline" color="danger" label="Danger" />
    <Tag variant="outline" color="info" label="Info" />`})},t={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"tag_sm · tag_lg로 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
import TagGroup from '@uxkm/ui/components/TagGroup.vue';
<\/script>

<template>
  <TagGroup tight>
    <Tag size="sm" color="primary" label="Small" />
    <Tag color="primary" label="Medium" />
    <Tag size="lg" color="primary" label="Large" />
  </TagGroup>
  <TagGroup tight>
    <Tag size="sm" variant="outline" color="success" label="Small" />
    <Tag variant="outline" color="success" label="Medium" />
    <Tag size="lg" variant="outline" color="success" label="Large" />
  </TagGroup>
  <TagGroup tight>
    <Tag size="sm" variant="solid" color="danger" label="Small" />
    <Tag variant="solid" color="danger" label="Medium" />
    <Tag size="lg" variant="solid" color="danger" label="Large" />
  </TagGroup>
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<TagGroup tight>
      <Tag size="sm" color="primary" label="Small" />
      <Tag color="primary" label="Medium" />
      <Tag size="lg" color="primary" label="Large" />
    </TagGroup>
    <TagGroup tight>
      <Tag size="sm" variant="outline" color="success" label="Small" />
      <Tag variant="outline" color="success" label="Medium" />
      <Tag size="lg" variant="outline" color="success" label="Large" />
    </TagGroup>
    <TagGroup tight>
      <Tag size="sm" variant="solid" color="danger" label="Small" />
      <Tag variant="solid" color="danger" label="Medium" />
      <Tag size="lg" variant="solid" color="danger" label="Large" />
    </TagGroup>`})},u={name:"둥근",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tag_round로 pill 형태의 모서리를 적용합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag round color="primary" label="Filled" />
  <Tag round variant="outline" color="primary" label="Outline" />
  <Tag round variant="solid" color="primary" label="Solid" />
  <Tag round variant="borderless" color="default" label="Borderless" />
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag round color="primary" label="Filled" />
    <Tag round variant="outline" color="primary" label="Outline" />
    <Tag round variant="solid" color="primary" label="Solid" />
    <Tag round variant="borderless" color="default" label="Borderless" />`})},s={name:"아이콘",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tag_icon으로 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag color="primary" label="Design">
    <template #icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    </template>
  </Tag>
  <Tag variant="outline" color="success" label="Verified">
    <template #icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    </template>
  </Tag>
  <Tag variant="solid" color="danger" label="Error">
    <template #icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    </template>
  </Tag>
  <Tag size="sm" round color="default" label="User">
    <template #icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </template>
  </Tag>
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag color="primary" label="Design">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      </template>
    </Tag>
    <Tag variant="outline" color="success" label="Verified">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      </template>
    </Tag>
    <Tag variant="solid" color="danger" label="Error">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </template>
    </Tag>
    <Tag size="sm" round color="default" label="User">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </template>
    </Tag>`})},c={name:"닫기 가능",parameters:{demoPreview:{stack:!0},docs:{description:{story:"tag_close 버튼으로 제거 가능한 태그를 만듭니다. Filled · Outline · Solid · 아이콘 조합이 가능합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
import TagGroup from '@uxkm/ui/components/TagGroup.vue';
<\/script>

<template>
  <TagGroup tight>
    <Tag closable color="primary" label="React" close-label="React 태그 제거" />
    <Tag closable variant="outline" color="default" label="Svelte" close-label="Svelte 태그 제거" />
    <Tag closable variant="solid" color="danger" label="Deprecated" close-label="Deprecated 태그 제거" />
  </TagGroup>
  <TagGroup tight>
    <Tag closable round color="success" label="Frontend" close-label="Frontend 태그 제거">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        </svg>
      </template>
    </Tag>
  </TagGroup>
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<TagGroup tight>
      <Tag closable color="primary" label="React" close-label="React 태그 제거" />
      <Tag closable variant="outline" color="default" label="Svelte" close-label="Svelte 태그 제거" />
      <Tag closable variant="solid" color="danger" label="Deprecated" close-label="Deprecated 태그 제거" />
    </TagGroup>
    <TagGroup tight>
      <Tag closable round color="success" label="Frontend" close-label="Frontend 태그 제거">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          </svg>
        </template>
      </Tag>
    </TagGroup>`})},i={name:"선택 가능",parameters:{demoPreview:{stack:!0},docs:{description:{story:"tag_checkable로 필터·토글 태그를 만듭니다. is-selected로 선택 상태를 표시합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
import TagGroup from '@uxkm/ui/components/TagGroup.vue';
<\/script>

<template>
  <TagGroup aria-label="카테고리 필터">
    <Tag checkable selected color="default" label="전체" />
    <Tag checkable color="default" label="UI" />
    <Tag checkable color="default" label="UX" />
    <Tag checkable color="default" label="개발" />
  </TagGroup>
  <TagGroup aria-label="상태 필터">
    <Tag checkable round selected color="primary" label="진행 중" />
    <Tag checkable round selected color="success" label="완료" />
    <Tag checkable round color="warning" label="보류" />
    <Tag checkable round color="danger" label="취소" />
  </TagGroup>
  <TagGroup tight>
    <Tag checkable size="sm" selected color="default" label="S" />
    <Tag checkable size="sm" color="default" label="M" />
    <Tag checkable size="sm" color="default" label="L" />
    <Tag checkable size="sm" color="default" label="XL" />
  </TagGroup>
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<TagGroup aria-label="카테고리 필터">
      <Tag checkable selected color="default" label="전체" />
      <Tag checkable color="default" label="UI" />
      <Tag checkable color="default" label="UX" />
      <Tag checkable color="default" label="개발" />
    </TagGroup>

    <TagGroup aria-label="상태 필터">
      <Tag checkable round selected color="primary" label="진행 중" />
      <Tag checkable round selected color="success" label="완료" />
      <Tag checkable round color="warning" label="보류" />
      <Tag checkable round color="danger" label="취소" />
    </TagGroup>

    <TagGroup tight>
      <Tag checkable size="sm" selected color="default" label="S" />
      <Tag checkable size="sm" color="default" label="M" />
      <Tag checkable size="sm" color="default" label="L" />
      <Tag checkable size="sm" color="default" label="XL" />
    </TagGroup>`})},g={name:"추가",parameters:{demoPreview:{stack:!1},docs:{description:{story:"tag_add로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag add round label="태그 추가">
    <template #icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </template>
  </Tag>
  <Tag add size="sm" label="+ New Tag" />
  <Tag add size="lg" round label="+ 카테고리 추가" />
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag add round label="태그 추가">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </template>
    </Tag>
    <Tag add size="sm" label="+ New Tag" />
    <Tag add size="lg" round label="+ 카테고리 추가" />`})},d={name:"링크",parameters:{demoPreview:{stack:!1},docs:{description:{story:"a 태그에 .tag 클래스를 적용해 클릭 가능한 태그 링크를 만듭니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag href="#" color="primary" label="문서 보기" />
  <Tag href="#" variant="outline" color="primary" label="가이드" />
  <Tag href="#" variant="solid" color="primary" label="바로가기" />
  <Tag href="#" round variant="outline" color="success" label="외부 링크">
    <template #icon>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <path d="M15 3h6v6" />
        <path d="M10 14L21 3" />
      </svg>
    </template>
  </Tag>
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag href="#" color="primary" label="문서 보기" />
    <Tag href="#" variant="outline" color="primary" label="가이드" />
    <Tag href="#" variant="solid" color="primary" label="바로가기" />
    <Tag href="#" round variant="outline" color="success" label="외부 링크">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </template>
    </Tag>`})},p={name:"비활성",parameters:{demoPreview:{stack:!1},docs:{description:{story:"is-disabled로 비활성 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
<\/script>

<template>
  <Tag disabled color="primary" label="Filled" />
  <Tag disabled variant="outline" color="success" label="Outline" />
  <Tag disabled variant="solid" color="danger" label="Solid" />
  <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
  <Tag add disabled label="태그 추가 (비활성)" />
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<Tag disabled color="primary" label="Filled" />
    <Tag disabled variant="outline" color="success" label="Outline" />
    <Tag disabled variant="solid" color="danger" label="Solid" />
    <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
    <Tag add disabled label="태그 추가 (비활성)" />`})},m={name:"그룹",parameters:{demoPreview:{stack:!0},docs:{description:{story:"tag_group으로 여러 태그를 묶어 표시합니다. tag_group-tight로 간격을 줄일 수 있습니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
import TagGroup from '@uxkm/ui/components/TagGroup.vue';
<\/script>

<template>
  <TagGroup>
    <Tag color="primary" label="HTML" />
    <Tag color="primary" label="CSS" />
    <Tag color="primary" label="JavaScript" />
    <Tag color="default" label="TypeScript" />
    <Tag color="success" label="SCSS" />
  </TagGroup>
  <div>
    <p class="color_muted size_sm" style="margin-bottom: 0.5rem;">선택된 기술 스택</p>
    <TagGroup tight>
      <Tag closable round color="primary" label="React" close-label="React 태그 제거" />
      <Tag closable round color="primary" label="Next.js" close-label="Next.js 태그 제거" />
      <Tag add round size="sm" label="+ 추가" />
    </TagGroup>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Tag:e,TagGroup:a},template:`<TagGroup>
      <Tag color="primary" label="HTML" />
      <Tag color="primary" label="CSS" />
      <Tag color="primary" label="JavaScript" />
      <Tag color="default" label="TypeScript" />
      <Tag color="success" label="SCSS" />
    </TagGroup>

    <div>
      <p class="color_muted size_sm" style="margin-bottom: 0.5rem;">선택된 기술 스택</p>
      <TagGroup tight>
        <Tag closable round color="primary" label="React" close-label="React 태그 제거" />
        <Tag closable round color="primary" label="Next.js" close-label="Next.js 태그 제거" />
        <Tag add round size="sm" label="+ 추가" />
      </TagGroup>
    </div>`})};var T,b,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "md",
    round: false,
    checkable: false,
    add: false,
    closable: false,
    selected: false,
    disabled: false,
    label: "라벨",
    href: "#",
    closeLabel: "라벨"
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      return {
        args
      };
    },
    template: '<Tag v-bind="args" />'
  })
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var v,f,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "기본 (Filled)",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag color=\\"default\\" label=\\"Default\\" />\\n  <Tag color=\\"primary\\" label=\\"Primary\\" />\\n  <Tag color=\\"success\\" label=\\"Success\\" />\\n  <Tag color=\\"warning\\" label=\\"Warning\\" />\\n  <Tag color=\\"danger\\" label=\\"Danger\\" />\\n  <Tag color=\\"info\\" label=\\"Info\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag color="default" label="Default" />
    <Tag color="primary" label="Primary" />
    <Tag color="success" label="Success" />
    <Tag color="warning" label="Warning" />
    <Tag color="danger" label="Danger" />
    <Tag color="info" label="Info" />\`
  })
}`,...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var y,B,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "솔리드",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tag_solid로 채움 배경·대비 텍스트를 적용합니다. 강조가 필요한 레이블에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag variant=\\"solid\\" color=\\"default\\" label=\\"Default\\" />\\n  <Tag variant=\\"solid\\" color=\\"primary\\" label=\\"Primary\\" />\\n  <Tag variant=\\"solid\\" color=\\"success\\" label=\\"Success\\" />\\n  <Tag variant=\\"solid\\" color=\\"warning\\" label=\\"Warning\\" />\\n  <Tag variant=\\"solid\\" color=\\"danger\\" label=\\"Danger\\" />\\n  <Tag variant=\\"solid\\" color=\\"info\\" label=\\"Info\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag variant="solid" color="default" label="Default" />
    <Tag variant="solid" color="primary" label="Primary" />
    <Tag variant="solid" color="success" label="Success" />
    <Tag variant="solid" color="warning" label="Warning" />
    <Tag variant="solid" color="danger" label="Danger" />
    <Tag variant="solid" color="info" label="Info" />\`
  })
}`,...(h=(B=n.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var k,A,G;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "아웃라인",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tag_outline으로 배경 없이 테두리만 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag variant=\\"outline\\" color=\\"default\\" label=\\"Default\\" />\\n  <Tag variant=\\"outline\\" color=\\"primary\\" label=\\"Primary\\" />\\n  <Tag variant=\\"outline\\" color=\\"success\\" label=\\"Success\\" />\\n  <Tag variant=\\"outline\\" color=\\"warning\\" label=\\"Warning\\" />\\n  <Tag variant=\\"outline\\" color=\\"danger\\" label=\\"Danger\\" />\\n  <Tag variant=\\"outline\\" color=\\"info\\" label=\\"Info\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag variant="outline" color="default" label="Default" />
    <Tag variant="outline" color="primary" label="Primary" />
    <Tag variant="outline" color="success" label="Success" />
    <Tag variant="outline" color="warning" label="Warning" />
    <Tag variant="outline" color="danger" label="Danger" />
    <Tag variant="outline" color="info" label="Info" />\`
  })
}`,...(G=(A=r.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var x,w,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tag_sm · tag_lg로 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\\n<\/script>\\n\\n<template>\\n  <TagGroup tight>\\n    <Tag size=\\"sm\\" color=\\"primary\\" label=\\"Small\\" />\\n    <Tag color=\\"primary\\" label=\\"Medium\\" />\\n    <Tag size=\\"lg\\" color=\\"primary\\" label=\\"Large\\" />\\n  </TagGroup>\\n  <TagGroup tight>\\n    <Tag size=\\"sm\\" variant=\\"outline\\" color=\\"success\\" label=\\"Small\\" />\\n    <Tag variant=\\"outline\\" color=\\"success\\" label=\\"Medium\\" />\\n    <Tag size=\\"lg\\" variant=\\"outline\\" color=\\"success\\" label=\\"Large\\" />\\n  </TagGroup>\\n  <TagGroup tight>\\n    <Tag size=\\"sm\\" variant=\\"solid\\" color=\\"danger\\" label=\\"Small\\" />\\n    <Tag variant=\\"solid\\" color=\\"danger\\" label=\\"Medium\\" />\\n    <Tag size=\\"lg\\" variant=\\"solid\\" color=\\"danger\\" label=\\"Large\\" />\\n  </TagGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<TagGroup tight>
      <Tag size="sm" color="primary" label="Small" />
      <Tag color="primary" label="Medium" />
      <Tag size="lg" color="primary" label="Large" />
    </TagGroup>
    <TagGroup tight>
      <Tag size="sm" variant="outline" color="success" label="Small" />
      <Tag variant="outline" color="success" label="Medium" />
      <Tag size="lg" variant="outline" color="success" label="Large" />
    </TagGroup>
    <TagGroup tight>
      <Tag size="sm" variant="solid" color="danger" label="Small" />
      <Tag variant="solid" color="danger" label="Medium" />
      <Tag size="lg" variant="solid" color="danger" label="Large" />
    </TagGroup>\`
  })
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var z,E,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "둥근",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tag_round로 pill 형태의 모서리를 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag round color=\\"primary\\" label=\\"Filled\\" />\\n  <Tag round variant=\\"outline\\" color=\\"primary\\" label=\\"Outline\\" />\\n  <Tag round variant=\\"solid\\" color=\\"primary\\" label=\\"Solid\\" />\\n  <Tag round variant=\\"borderless\\" color=\\"default\\" label=\\"Borderless\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag round color="primary" label="Filled" />
    <Tag round variant="outline" color="primary" label="Outline" />
    <Tag round variant="solid" color="primary" label="Solid" />
    <Tag round variant="borderless" color="default" label="Borderless" />\`
  })
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var _,M,P;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tag_icon으로 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag color=\\"primary\\" label=\\"Design\\">\\n    <template #icon>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <path d=\\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\\" />\\n        <circle cx=\\"7\\" cy=\\"7\\" r=\\"1\\" fill=\\"currentColor\\" stroke=\\"none\\" />\\n      </svg>\\n    </template>\\n  </Tag>\\n  <Tag variant=\\"outline\\" color=\\"success\\" label=\\"Verified\\">\\n    <template #icon>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\" />\\n        <path d=\\"M22 4L12 14.01l-3-3\\" />\\n      </svg>\\n    </template>\\n  </Tag>\\n  <Tag variant=\\"solid\\" color=\\"danger\\" label=\\"Error\\">\\n    <template #icon>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" />\\n        <line x1=\\"15\\" y1=\\"9\\" x2=\\"9\\" y2=\\"15\\" />\\n        <line x1=\\"9\\" y1=\\"9\\" x2=\\"15\\" y2=\\"15\\" />\\n      </svg>\\n    </template>\\n  </Tag>\\n  <Tag size=\\"sm\\" round color=\\"default\\" label=\\"User\\">\\n    <template #icon>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\" />\\n        <circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\" />\\n      </svg>\\n    </template>\\n  </Tag>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag color="primary" label="Design">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      </template>
    </Tag>
    <Tag variant="outline" color="success" label="Verified">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      </template>
    </Tag>
    <Tag variant="solid" color="danger" label="Error">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </template>
    </Tag>
    <Tag size="sm" round color="default" label="User">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </template>
    </Tag>\`
  })
}`,...(P=(M=s.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var L,I,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "닫기 가능",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tag_close 버튼으로 제거 가능한 태그를 만듭니다. Filled · Outline · Solid · 아이콘 조합이 가능합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\\n<\/script>\\n\\n<template>\\n  <TagGroup tight>\\n    <Tag closable color=\\"primary\\" label=\\"React\\" close-label=\\"React 태그 제거\\" />\\n    <Tag closable variant=\\"outline\\" color=\\"default\\" label=\\"Svelte\\" close-label=\\"Svelte 태그 제거\\" />\\n    <Tag closable variant=\\"solid\\" color=\\"danger\\" label=\\"Deprecated\\" close-label=\\"Deprecated 태그 제거\\" />\\n  </TagGroup>\\n  <TagGroup tight>\\n    <Tag closable round color=\\"success\\" label=\\"Frontend\\" close-label=\\"Frontend 태그 제거\\">\\n      <template #icon>\\n        <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n          <path d=\\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\\" />\\n        </svg>\\n      </template>\\n    </Tag>\\n  </TagGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<TagGroup tight>
      <Tag closable color="primary" label="React" close-label="React 태그 제거" />
      <Tag closable variant="outline" color="default" label="Svelte" close-label="Svelte 태그 제거" />
      <Tag closable variant="solid" color="danger" label="Deprecated" close-label="Deprecated 태그 제거" />
    </TagGroup>
    <TagGroup tight>
      <Tag closable round color="success" label="Frontend" close-label="Frontend 태그 제거">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          </svg>
        </template>
      </Tag>
    </TagGroup>\`
  })
}`,...(V=(I=c.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var R,O,H;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "선택 가능",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tag_checkable로 필터·토글 태그를 만듭니다. is-selected로 선택 상태를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\\n<\/script>\\n\\n<template>\\n  <TagGroup aria-label=\\"카테고리 필터\\">\\n    <Tag checkable selected color=\\"default\\" label=\\"전체\\" />\\n    <Tag checkable color=\\"default\\" label=\\"UI\\" />\\n    <Tag checkable color=\\"default\\" label=\\"UX\\" />\\n    <Tag checkable color=\\"default\\" label=\\"개발\\" />\\n  </TagGroup>\\n  <TagGroup aria-label=\\"상태 필터\\">\\n    <Tag checkable round selected color=\\"primary\\" label=\\"진행 중\\" />\\n    <Tag checkable round selected color=\\"success\\" label=\\"완료\\" />\\n    <Tag checkable round color=\\"warning\\" label=\\"보류\\" />\\n    <Tag checkable round color=\\"danger\\" label=\\"취소\\" />\\n  </TagGroup>\\n  <TagGroup tight>\\n    <Tag checkable size=\\"sm\\" selected color=\\"default\\" label=\\"S\\" />\\n    <Tag checkable size=\\"sm\\" color=\\"default\\" label=\\"M\\" />\\n    <Tag checkable size=\\"sm\\" color=\\"default\\" label=\\"L\\" />\\n    <Tag checkable size=\\"sm\\" color=\\"default\\" label=\\"XL\\" />\\n  </TagGroup>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<TagGroup aria-label="카테고리 필터">
      <Tag checkable selected color="default" label="전체" />
      <Tag checkable color="default" label="UI" />
      <Tag checkable color="default" label="UX" />
      <Tag checkable color="default" label="개발" />
    </TagGroup>

    <TagGroup aria-label="상태 필터">
      <Tag checkable round selected color="primary" label="진행 중" />
      <Tag checkable round selected color="success" label="완료" />
      <Tag checkable round color="warning" label="보류" />
      <Tag checkable round color="danger" label="취소" />
    </TagGroup>

    <TagGroup tight>
      <Tag checkable size="sm" selected color="default" label="S" />
      <Tag checkable size="sm" color="default" label="M" />
      <Tag checkable size="sm" color="default" label="L" />
      <Tag checkable size="sm" color="default" label="XL" />
    </TagGroup>\`
  })
}`,...(H=(O=i.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var N,U,W;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "추가",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tag_add로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag add round label=\\"태그 추가\\">\\n    <template #icon>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <path d=\\"M12 5v14M5 12h14\\" />\\n      </svg>\\n    </template>\\n  </Tag>\\n  <Tag add size=\\"sm\\" label=\\"+ New Tag\\" />\\n  <Tag add size=\\"lg\\" round label=\\"+ 카테고리 추가\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag add round label="태그 추가">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </template>
    </Tag>
    <Tag add size="sm" label="+ New Tag" />
    <Tag add size="lg" round label="+ 카테고리 추가" />\`
  })
}`,...(W=(U=g.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var j,X,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "링크",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "a 태그에 .tag 클래스를 적용해 클릭 가능한 태그 링크를 만듭니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag href=\\"#\\" color=\\"primary\\" label=\\"문서 보기\\" />\\n  <Tag href=\\"#\\" variant=\\"outline\\" color=\\"primary\\" label=\\"가이드\\" />\\n  <Tag href=\\"#\\" variant=\\"solid\\" color=\\"primary\\" label=\\"바로가기\\" />\\n  <Tag href=\\"#\\" round variant=\\"outline\\" color=\\"success\\" label=\\"외부 링크\\">\\n    <template #icon>\\n      <svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n        <path d=\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\\" />\\n        <path d=\\"M15 3h6v6\\" />\\n        <path d=\\"M10 14L21 3\\" />\\n      </svg>\\n    </template>\\n  </Tag>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag href="#" color="primary" label="문서 보기" />
    <Tag href="#" variant="outline" color="primary" label="가이드" />
    <Tag href="#" variant="solid" color="primary" label="바로가기" />
    <Tag href="#" round variant="outline" color="success" label="외부 링크">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </template>
    </Tag>\`
  })
}`,...(J=(X=d.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var $,q,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "is-disabled로 비활성 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Tag disabled color=\\"primary\\" label=\\"Filled\\" />\\n  <Tag disabled variant=\\"outline\\" color=\\"success\\" label=\\"Outline\\" />\\n  <Tag disabled variant=\\"solid\\" color=\\"danger\\" label=\\"Solid\\" />\\n  <Tag checkable selected disabled color=\\"default\\" label=\\"선택됨 (비활성)\\" />\\n  <Tag add disabled label=\\"태그 추가 (비활성)\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<Tag disabled color="primary" label="Filled" />
    <Tag disabled variant="outline" color="success" label="Outline" />
    <Tag disabled variant="solid" color="danger" label="Solid" />
    <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
    <Tag add disabled label="태그 추가 (비활성)" />\`
  })
}`,...(K=(q=p.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,Y,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "그룹",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tag_group으로 여러 태그를 묶어 표시합니다. tag_group-tight로 간격을 줄일 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\nimport TagGroup from '@uxkm/ui/components/TagGroup.vue';\\n<\/script>\\n\\n<template>\\n  <TagGroup>\\n    <Tag color=\\"primary\\" label=\\"HTML\\" />\\n    <Tag color=\\"primary\\" label=\\"CSS\\" />\\n    <Tag color=\\"primary\\" label=\\"JavaScript\\" />\\n    <Tag color=\\"default\\" label=\\"TypeScript\\" />\\n    <Tag color=\\"success\\" label=\\"SCSS\\" />\\n  </TagGroup>\\n  <div>\\n    <p class=\\"color_muted size_sm\\" style=\\"margin-bottom: 0.5rem;\\">선택된 기술 스택</p>\\n    <TagGroup tight>\\n      <Tag closable round color=\\"primary\\" label=\\"React\\" close-label=\\"React 태그 제거\\" />\\n      <Tag closable round color=\\"primary\\" label=\\"Next.js\\" close-label=\\"Next.js 태그 제거\\" />\\n      <Tag add round size=\\"sm\\" label=\\"+ 추가\\" />\\n    </TagGroup>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Tag,
      TagGroup
    },
    template: \`<TagGroup>
      <Tag color="primary" label="HTML" />
      <Tag color="primary" label="CSS" />
      <Tag color="primary" label="JavaScript" />
      <Tag color="default" label="TypeScript" />
      <Tag color="success" label="SCSS" />
    </TagGroup>

    <div>
      <p class="color_muted size_sm" style="margin-bottom: 0.5rem;">선택된 기술 스택</p>
      <TagGroup tight>
        <Tag closable round color="primary" label="React" close-label="React 태그 제거" />
        <Tag closable round color="primary" label="Next.js" close-label="Next.js 태그 제거" />
        <Tag add round size="sm" label="+ 추가" />
      </TagGroup>
    </div>\`
  })
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ae=["Playground","Basic","Solid","Outline","Size","Round","Icon","Close","Checkable","Add","Link","Disabled","Group"];export{g as Add,o as Basic,i as Checkable,c as Close,p as Disabled,m as Group,s as Icon,d as Link,r as Outline,l as Playground,u as Round,t as Size,n as Solid,Ae as __namedExportsOrder,ke as default};

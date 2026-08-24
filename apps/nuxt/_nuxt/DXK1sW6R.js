import{B as e,G as t,L as n,U as r,Y as i,b as a,d as o,i as s,k as c,m as l,nt as u,st as d,u as f,y as p}from"./CCnt5OSV.js";import{F as m,l as h,t as g,v as _}from"./DkmWXf_S.js";import{t as v}from"./DD3RWXAt.js";import{c as y,t as b}from"./D6IbhUhQ.js";import{t as x}from"./AUxlN8ez2.js";var S=[`aria-label`,`role`],C=Object.assign({inheritAttrs:!1},{__name:`TagGroup`,props:{tight:Boolean,ariaLabel:String},setup(i){let a=i,o=u(null),s=r(),p=t(),h=m(`TagGroup`,{booleanProps:new Set([`tight`]),selfClosing:!1});_(h,a,p,o,s);let g=f(()=>[`tag_group`,{"tag_group-tight":a.tight},s.class]),v=f(()=>{let{class:e,role:t,"aria-label":n,...r}=s;return r});return(t,r)=>(n(),l(`div`,c({ref_key:`rootRef`,ref:o},v.value,{class:g.value,"aria-label":i.ariaLabel??d(s)[`aria-label`],role:d(s).role??`group`}),[e(t.$slots,`default`)],16,S))}}),w=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],T=[{name:`as`,type:`string | Component`,default:`span`,description:`일반 Tag의 루트 요소 또는 커스텀 컴포넌트. 인터랙션 태그는 button·a를 자동 사용`},{name:`color`,type:`string`,default:`primary`,description:`공통 color_* 클래스`},{name:`variant`,type:`'filled' | 'solid' | 'outline' | 'borderless'`,default:`filled`,description:`태그 스킨`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`tag_sm · tag_lg`},{name:`round`,type:`boolean`,default:`false`,description:`pill 형태 (tag_round)`},{name:`checkable`,type:`boolean`,default:`false`,description:`토글 버튼 (tag_checkable)`},{name:`add`,type:`boolean`,default:`false`,description:`추가 버튼 (tag_add)`},{name:`closable`,type:`boolean`,default:`false`,description:`닫기 버튼 표시`},{name:`selected`,type:`boolean`,default:`false`,description:`선택 상태 (is-selected)`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 (is-disabled)`},{name:`label`,type:`string`,default:`—`,description:`태그 텍스트. default 슬롯으로 대체 가능`},{name:`href`,type:`string`,default:`—`,description:`링크 태그일 때 href (a 태그)`},{name:`close-label`,type:`string`,default:`—`,description:`닫기 버튼 aria-label`},y],E=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],D=[{name:`tight`,type:`boolean`,default:`false`,description:`좁은 간격 (tag_group-tight)`},{name:`aria-label`,type:`string`,default:`—`,description:`그룹 접근성 라벨`}],O=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],k=[{name:`default`,description:`태그 텍스트 (label prop 대체)`},{name:`icon`,description:`텍스트 앞 아이콘 (tag_icon)`}],A=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],j=[{name:`default`,description:`Tag 자식 목록`}],M=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],N=[{name:`tag`,description:`태그 루트`},{name:`tag_solid · tag_outline · tag_borderless`,description:`스킨 변형`},{name:`tag_sm · tag_lg · tag_round`,description:`크기·형태`},{name:`tag_checkable · tag_add`,description:`인터랙션 변형`},{name:`tag_icon · tag_close`,description:`내부 파트`},{name:`tag_group · tag_group-tight`,description:`태그 묶음`},{name:`is-selected · is-disabled`,description:`상태 클래스`},{name:`color_*`,description:`공통 색상 유틸`},...b],P=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`--tag-font-size · --tag-padding-y · --tag-padding-x`,default:`—`,description:`기본 태그 타이포·패딩`},{name:`--tag-gap`,default:`var(--space-xs)`,description:`아이콘·텍스트 간격`},{name:`--tag-close-size`,default:`0.875rem`,description:`닫기 버튼 크기`},{name:`--tag-add-border-style`,default:`dashed`,description:`추가 태그 테두리`}],I={class:`tag_group`,"aria-label":`기술 분류`},L={title:`Tag | HTML Components`,activeNav:`tag`,pageTitle:`Tag`},R={__name:`tag`,setup(e){return(e,t)=>(n(),l(s,null,[t[10]||=o(`div`,{class:`page_intro`},[o(`h1`,null,`Tag`),o(`p`,{class:`lead`},`카테고리, 필터, 선택 항목을 표시하는 태그 컴포넌트입니다.`)],-1),a(v,{"heading-id":`basic-heading`,title:`기본 (Filled)`,description:`연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Tag color="default" label="Default" />
  <Tag color="primary" label="Primary" />
  <Tag color="success" label="Success" />
  <Tag color="warning" label="Warning" />
  <Tag color="danger" label="Danger" />
  <Tag color="info" label="Info" />
</template>`},{default:i(()=>[a(x,{color:`default`,label:`Default`}),a(x,{color:`primary`,label:`Primary`}),a(x,{color:`success`,label:`Success`}),a(x,{color:`warning`,label:`Warning`}),a(x,{color:`danger`,label:`Danger`}),a(x,{color:`info`,label:`Info`})]),_:1}),a(v,{"heading-id":`semantic-heading`,title:`시맨틱 요소`,description:`일반 Tag는 기본적으로 span을 사용하며, as prop으로 콘텐츠 구조와 의미에 맞는 HTML 요소 또는 커스텀 컴포넌트를 지정합니다. checkable·add·href 사용 시에는 접근성을 위해 button 또는 a를 자동으로 사용합니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <ul class="tag_group" aria-label="기술 분류">
    <Tag as="li" color="primary" label="Vue" />
    <Tag as="li" color="success" label="Nuxt" />
  </ul>
  <p>
    <Tag as="strong" color="warning" label="추천" /> 항목입니다.
  </p>
</template>`},{default:i(()=>[o(`ul`,I,[a(x,{as:`li`,color:`primary`,label:`Vue`}),a(x,{as:`li`,color:`success`,label:`Nuxt`})]),o(`p`,null,[a(x,{as:`strong`,color:`warning`,label:`추천`}),t[0]||=p(` 항목입니다. `,-1)])]),_:1}),a(v,{"heading-id":`solid-heading`,title:`솔리드`,description:`variant="solid"로 tag_solid 채움 배경·대비 텍스트를 적용합니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Tag variant="solid" color="default" label="Default" />
  <Tag variant="solid" color="primary" label="Primary" />
  <Tag variant="solid" color="success" label="Success" />
  <Tag variant="solid" color="warning" label="Warning" />
  <Tag variant="solid" color="danger" label="Danger" />
  <Tag variant="solid" color="info" label="Info" />
</template>`},{default:i(()=>[a(x,{variant:`solid`,color:`default`,label:`Default`}),a(x,{variant:`solid`,color:`primary`,label:`Primary`}),a(x,{variant:`solid`,color:`success`,label:`Success`}),a(x,{variant:`solid`,color:`warning`,label:`Warning`}),a(x,{variant:`solid`,color:`danger`,label:`Danger`}),a(x,{variant:`solid`,color:`info`,label:`Info`})]),_:1}),a(v,{"heading-id":`outline-heading`,title:`아웃라인`,description:`variant="outline"으로 배경 없이 테두리만 표시합니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Tag variant="outline" color="default" label="Default" />
  <Tag variant="outline" color="primary" label="Primary" />
  <Tag variant="outline" color="success" label="Success" />
  <Tag variant="outline" color="warning" label="Warning" />
  <Tag variant="outline" color="danger" label="Danger" />
  <Tag variant="outline" color="info" label="Info" />
</template>`},{default:i(()=>[a(x,{variant:`outline`,color:`default`,label:`Default`}),a(x,{variant:`outline`,color:`primary`,label:`Primary`}),a(x,{variant:`outline`,color:`success`,label:`Success`}),a(x,{variant:`outline`,color:`warning`,label:`Warning`}),a(x,{variant:`outline`,color:`danger`,label:`Danger`}),a(x,{variant:`outline`,color:`info`,label:`Info`})]),_:1}),a(v,{"heading-id":`size-heading`,title:`크기`,description:`size prop으로 tag_sm · tag_lg 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다.`,stack:``,code:`<script setup>
import Tag from '@/components/Tag.vue';
import TagGroup from '@/components/TagGroup.vue';
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
</template>`},{default:i(()=>[a(C,{tight:``},{default:i(()=>[a(x,{size:`sm`,color:`primary`,label:`Small`}),a(x,{color:`primary`,label:`Medium`}),a(x,{size:`lg`,color:`primary`,label:`Large`})]),_:1}),a(C,{tight:``},{default:i(()=>[a(x,{size:`sm`,variant:`outline`,color:`success`,label:`Small`}),a(x,{variant:`outline`,color:`success`,label:`Medium`}),a(x,{size:`lg`,variant:`outline`,color:`success`,label:`Large`})]),_:1}),a(C,{tight:``},{default:i(()=>[a(x,{size:`sm`,variant:`solid`,color:`danger`,label:`Small`}),a(x,{variant:`solid`,color:`danger`,label:`Medium`}),a(x,{size:`lg`,variant:`solid`,color:`danger`,label:`Large`})]),_:1})]),_:1}),a(v,{"heading-id":`round-heading`,title:`둥근`,description:`round prop으로 tag_round pill 형태의 모서리를 적용합니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Tag round color="primary" label="Filled" />
  <Tag round variant="outline" color="primary" label="Outline" />
  <Tag round variant="solid" color="primary" label="Solid" />
  <Tag round variant="borderless" color="default" label="Borderless" />
</template>`},{default:i(()=>[a(x,{round:``,color:`primary`,label:`Filled`}),a(x,{round:``,variant:`outline`,color:`primary`,label:`Outline`}),a(x,{round:``,variant:`solid`,color:`primary`,label:`Solid`}),a(x,{round:``,variant:`borderless`,color:`default`,label:`Borderless`})]),_:1}),a(v,{"heading-id":`icon-heading`,title:`아이콘`,description:`icon 슬롯으로 텍스트 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
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
</template>`},{default:i(()=>[a(x,{color:`primary`,label:`Design`},{icon:i(()=>[...t[1]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[o(`path`,{d:`M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z`}),o(`circle`,{cx:`7`,cy:`7`,r:`1`,fill:`currentColor`,stroke:`none`})],-1)]]),_:1}),a(x,{variant:`outline`,color:`success`,label:`Verified`},{icon:i(()=>[...t[2]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[o(`path`,{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`}),o(`path`,{d:`M22 4L12 14.01l-3-3`})],-1)]]),_:1}),a(x,{variant:`solid`,color:`danger`,label:`Error`},{icon:i(()=>[...t[3]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[o(`circle`,{cx:`12`,cy:`12`,r:`10`}),o(`line`,{x1:`15`,y1:`9`,x2:`9`,y2:`15`}),o(`line`,{x1:`9`,y1:`9`,x2:`15`,y2:`15`})],-1)]]),_:1}),a(x,{size:`sm`,round:``,color:`default`,label:`User`},{icon:i(()=>[...t[4]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[o(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),o(`circle`,{cx:`12`,cy:`7`,r:`4`})],-1)]]),_:1})]),_:1}),a(v,{"heading-id":`close-heading`,title:`닫기 가능`,description:`closable prop과 close-label로 제거 가능한 태그를 만듭니다.`,stack:``,code:`<script setup>
import Tag from '@/components/Tag.vue';
import TagGroup from '@/components/TagGroup.vue';
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
</template>`},{default:i(()=>[a(C,{tight:``},{default:i(()=>[a(x,{closable:``,color:`primary`,label:`React`,"close-label":`React 태그 제거`}),a(x,{closable:``,variant:`outline`,color:`default`,label:`Svelte`,"close-label":`Svelte 태그 제거`}),a(x,{closable:``,variant:`solid`,color:`danger`,label:`Deprecated`,"close-label":`Deprecated 태그 제거`})]),_:1}),a(C,{tight:``},{default:i(()=>[a(x,{closable:``,round:``,color:`success`,label:`Frontend`,"close-label":`Frontend 태그 제거`},{icon:i(()=>[...t[5]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[o(`path`,{d:`M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z`})],-1)]]),_:1})]),_:1})]),_:1}),a(v,{"heading-id":`checkable-heading`,title:`선택 가능`,description:`checkable prop으로 필터·토글 태그를 만듭니다. selected prop으로 is-selected 상태를 표시합니다.`,stack:``,code:`<script setup>
import Tag from '@/components/Tag.vue';
import TagGroup from '@/components/TagGroup.vue';
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
</template>`},{default:i(()=>[a(C,{"aria-label":`카테고리 필터`},{default:i(()=>[a(x,{checkable:``,selected:``,color:`default`,label:`전체`}),a(x,{checkable:``,color:`default`,label:`UI`}),a(x,{checkable:``,color:`default`,label:`UX`}),a(x,{checkable:``,color:`default`,label:`개발`})]),_:1}),a(C,{"aria-label":`상태 필터`},{default:i(()=>[a(x,{checkable:``,round:``,selected:``,color:`primary`,label:`진행 중`}),a(x,{checkable:``,round:``,selected:``,color:`success`,label:`완료`}),a(x,{checkable:``,round:``,color:`warning`,label:`보류`}),a(x,{checkable:``,round:``,color:`danger`,label:`취소`})]),_:1}),a(C,{tight:``},{default:i(()=>[a(x,{checkable:``,size:`sm`,selected:``,color:`default`,label:`S`}),a(x,{checkable:``,size:`sm`,color:`default`,label:`M`}),a(x,{checkable:``,size:`sm`,color:`default`,label:`L`}),a(x,{checkable:``,size:`sm`,color:`default`,label:`XL`})]),_:1})]),_:1}),a(v,{"heading-id":`add-heading`,title:`추가`,description:`add prop으로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
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
</template>`},{default:i(()=>[a(x,{add:``,round:``,label:`태그 추가`},{icon:i(()=>[...t[6]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[o(`path`,{d:`M12 5v14M5 12h14`})],-1)]]),_:1}),a(x,{add:``,size:`sm`,label:`+ New Tag`}),a(x,{add:``,size:`lg`,round:``,label:`+ 카테고리 추가`})]),_:1}),a(v,{"heading-id":`link-heading`,title:`링크`,description:`href prop으로 클릭 가능한 태그 링크(a.tag)를 만듭니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
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
</template>`},{default:i(()=>[a(x,{href:`#`,color:`primary`,label:`문서 보기`}),a(x,{href:`#`,variant:`outline`,color:`primary`,label:`가이드`}),a(x,{href:`#`,variant:`solid`,color:`primary`,label:`바로가기`}),a(x,{href:`#`,round:``,variant:`outline`,color:`success`,label:`외부 링크`},{icon:i(()=>[...t[7]||=[o(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[o(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}),o(`path`,{d:`M15 3h6v6`}),o(`path`,{d:`M10 14L21 3`})],-1)]]),_:1})]),_:1}),a(v,{"heading-id":`disabled-heading`,title:`비활성`,description:`disabled prop으로 is-disabled 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다.`,code:`<script setup>
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Tag disabled color="primary" label="Filled" />
  <Tag disabled variant="outline" color="success" label="Outline" />
  <Tag disabled variant="solid" color="danger" label="Solid" />
  <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
  <Tag add disabled label="태그 추가 (비활성)" />
</template>`},{default:i(()=>[a(x,{disabled:``,color:`primary`,label:`Filled`}),a(x,{disabled:``,variant:`outline`,color:`success`,label:`Outline`}),a(x,{disabled:``,variant:`solid`,color:`danger`,label:`Solid`}),a(x,{checkable:``,selected:``,disabled:``,color:`default`,label:`선택됨 (비활성)`}),a(x,{add:``,disabled:``,label:`태그 추가 (비활성)`})]),_:1}),a(v,{"heading-id":`group-heading`,title:`그룹`,description:`TagGroup으로 여러 태그를 묶어 표시합니다. tight prop으로 tag_group-tight 간격을 줄일 수 있습니다.`,stack:``,code:`<script setup>
import Tag from '@/components/Tag.vue';
import TagGroup from '@/components/TagGroup.vue';
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
</template>`},{default:i(()=>[a(C,null,{default:i(()=>[a(x,{color:`primary`,label:`HTML`}),a(x,{color:`primary`,label:`CSS`}),a(x,{color:`primary`,label:`JavaScript`}),a(x,{color:`default`,label:`TypeScript`}),a(x,{color:`success`,label:`SCSS`})]),_:1}),o(`div`,null,[t[8]||=o(`p`,{class:`color_muted size_sm`,style:{"margin-bottom":`0.5rem`}},`선택된 기술 스택`,-1),a(C,{tight:``},{default:i(()=>[a(x,{closable:``,round:``,color:`primary`,label:`React`,"close-label":`React 태그 제거`}),a(x,{closable:``,round:``,color:`primary`,label:`Next.js`,"close-label":`Next.js 태그 제거`}),a(x,{add:``,round:``,size:`sm`,label:`+ 추가`})]),_:1})])]),_:1}),a(h,{"heading-id":`api-props-heading`,title:`API · Tag Props`},{default:i(()=>[a(g,{columns:d(w),rows:d(T),"code-column":`name`},null,8,[`columns`,`rows`]),t[9]||=o(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[o(`code`,{class:`typo_code`},`closable`),p(` 태그는 `),o(`code`,{class:`typo_code`},`@close`),p(` 이벤트를 발생시킵니다. `)],-1)]),_:1}),a(h,{"heading-id":`api-group-props-heading`,title:`API · TagGroup Props`},{default:i(()=>[a(g,{columns:d(E),rows:d(D),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`api-slots-heading`,title:`API · Tag Slots`},{default:i(()=>[a(g,{columns:d(O),rows:d(k),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`api-group-slots-heading`,title:`API · TagGroup Slots`},{default:i(()=>[a(g,{columns:d(A),rows:d(j),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:i(()=>[a(g,{columns:d(M),rows:d(N),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),a(h,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:i(()=>[a(g,{columns:d(P),rows:d(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{R as default,L as docMeta};
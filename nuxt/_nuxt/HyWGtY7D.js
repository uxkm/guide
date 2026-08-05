import{L as e,Y as t,b as n,d as r,i,m as a,st as o,wt as s,y as c,z as l}from"./CCnt5OSV.js";import{l as u,t as d}from"./DkmWXf_S.js";import{n as f,t as p}from"./D5AUKneU.js";import{t as m}from"./DD3RWXAt.js";import{i as h,t as g}from"./D6IbhUhQ.js";import{t as _}from"./DOBgEly8.js";import{t as v}from"./Ca85r0nz2.js";var y=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],b=[{name:`name`,type:`string`,default:`—`,description:`common-icons 갤러리 키. 지정 시 기본 슬롯 대신 미리 정의된 stroke 경로를 렌더합니다`},{name:`src`,type:`string | object`,default:`—`,description:`이미지 아이콘 경로. 단독 사용하거나 as="img"와 조합합니다`},{name:`alt`,type:`string`,default:`''`,description:`src 이미지의 대체 텍스트. 장식용 이미지는 빈 문자열을 사용합니다`},{name:`as`,type:`string | Component`,default:`—`,description:`img 또는 커스텀 루트 요소. 커스텀 요소에서는 기본 슬롯으로 임의 콘텐츠를 전달합니다`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'xl'`,default:`md`,description:`아이콘 크기. md는 icon만, 나머지는 icon_sm · icon_lg · icon_xl`},{name:`color`,type:`string`,default:`—`,description:`공통 color_* 클래스 (currentColor 상속)`},{name:`inline`,type:`boolean`,default:`false`,description:`텍스트와 수직 정렬 (icon_inline)`},{name:`spin`,type:`boolean`,default:`false`,description:`회전 애니메이션 (icon_spin)`},{name:`button`,type:`boolean`,default:`false`,description:`클릭 가능한 아이콘 버튼 (icon_button + button 태그)`},{name:`circle`,type:`boolean`,default:`false`,description:`원형 배경 (icon_circle)`},{name:`square`,type:`boolean`,default:`false`,description:`사각 배경 (icon_square)`},{name:`pulse`,type:`boolean`,default:`false`,description:`펄스 애니메이션 (icon_pulse, circle과 함께)`},{name:`aria-label`,type:`string`,default:`—`,description:`button·의미 있는 아이콘 시 접근성 라벨`},h],x=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],S=[{name:`default`,description:`기본 모드에서는 SVG path·circle, as 모드에서는 img·svg·컴포넌트 등 임의 콘텐츠`},{name:`path`,description:`커스텀 SVG 도형 슬롯. name보다 우선합니다`},{name:`image`,description:`img 등 이미지 슬롯. path·name보다 우선합니다`}],C=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],w=[{name:`icon`,description:`SVG·img·커스텀 루트 기본 크기`},{name:`icon_sm · icon_lg · icon_xl`,description:`크기 변형`},{name:`icon_inline`,description:`텍스트 인라인 정렬`},{name:`icon_spin`,description:`회전 애니메이션`},{name:`icon_button`,description:`아이콘 버튼 래퍼`},{name:`icon_circle · icon_square`,description:`배경 형태`},{name:`icon_circle-sm · icon_circle-lg`,description:`원형 배경 크기`},{name:`icon_pulse`,description:`펄스 강조`},{name:`icon_group`,description:`여러 아이콘 가로 배치 컨테이너`},{name:`color_*`,description:`공통 색상 유틸`},...g],T=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],E=[{name:`--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl`,default:`1rem · 1.25rem · 1.5rem · 2rem`,description:`아이콘 지름`},{name:`--icon-spin-duration`,default:`0.8s`,description:`회전 주기`},{name:`--icon-circle-size · --icon-circle-size-sm · --icon-circle-size-lg`,default:`2.25rem · 1.75rem · 2.75rem`,description:`원형 배경 크기`},{name:`--icon-pulse-duration`,default:`1.5s`,description:`펄스 애니메이션 주기`}],D=[`src`],O={class:`icon_group`},k={class:`icon_grid`},A={title:`Icon | UXKM Guide`,activeNav:`icon`,pageTitle:`Icon`},j={__name:`icon`,setup(h){return(h,g)=>(e(),a(i,null,[g[5]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Icon`),r(`p`,{class:`lead`},`이름, 이미지, 커스텀 요소를 같은 크기와 정렬 규칙으로 표시하는 기본 요소입니다.`)],-1),n(m,{"heading-id":`basic-heading`,title:`이름으로 사용`,description:`name prop에 common-icons 키를 지정하는 방식을 권장합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Icon name="search" />
  <Icon name="edit" />
  <Icon name="trash" />
</template>`},{default:t(()=>[n(p,{name:`search`}),n(p,{name:`edit`}),n(p,{name:`trash`})]),_:1}),n(m,{"heading-id":`source-heading`,title:`이미지 · 커스텀 요소`,description:`src로 이미지 아이콘을 렌더하거나, as로 루트 요소를 지정하고 img·svg·컴포넌트를 기본 슬롯으로 전달할 수 있습니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Icon as="img" :src="avatarSample" alt="프로필" size="lg" />
  <Icon as="span" size="lg" aria-label="프로필">
    <img :src="avatarSample" alt="" />
  </Icon>
</template>`},{default:t(()=>[n(p,{as:`img`,src:o(_),alt:`프로필`,size:`lg`},null,8,[`src`]),n(p,{as:`span`,size:`lg`,"aria-label":`프로필`},{default:t(()=>[r(`img`,{src:o(_),alt:``},null,8,D)]),_:1})]),_:1}),n(m,{"heading-id":`size-heading`,title:`크기`,description:`기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Icon name="plus" size="sm" />
  <Icon name="plus" />
  <Icon name="plus" size="lg" />
  <Icon name="plus" size="xl" />
</template>`},{default:t(()=>[n(p,{name:`plus`,size:`sm`}),n(p,{name:`plus`}),n(p,{name:`plus`,size:`lg`}),n(p,{name:`plus`,size:`xl`})]),_:1}),n(m,{"heading-id":`color-heading`,title:`색상`,description:`공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Icon name="star" color="default" />
  <Icon name="star" color="primary" />
  <Icon name="check-circle" color="success" />
  <Icon name="alert-triangle" color="warning" />
  <Icon name="x-circle" color="danger" />
</template>`},{default:t(()=>[n(p,{name:`star`,color:`default`}),n(p,{name:`star`,color:`primary`}),n(p,{name:`check-circle`,color:`success`}),n(p,{name:`alert-triangle`,color:`warning`}),n(p,{name:`x-circle`,color:`danger`})]),_:1}),n(m,{"heading-id":`inline-heading`,title:`텍스트와 함께`,description:`icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import TypoText from '@/components/TypoText.vue';
<\/script>

<template>
  <p>
    <Icon name="info" inline color="info" />
    <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
  </p>
  <p>
    <Icon name="check-circle" inline color="success" />
    <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
  </p>
</template>`},{default:t(()=>[r(`p`,null,[n(p,{name:`info`,inline:``,color:`info`}),n(v,{tag:`span`,class:`ml_sm`},{default:t(()=>[...g[0]||=[c(`변경 사항이 자동 저장됩니다.`,-1)]]),_:1})]),r(`p`,null,[n(p,{name:`check-circle`,inline:``,color:`success`}),n(v,{tag:`span`,class:`ml_sm`},{default:t(()=>[...g[1]||=[c(`업로드가 완료되었습니다.`,-1)]]),_:1})])]),_:1}),n(m,{"heading-id":`circle-heading`,title:`원형 · 사각 배경`,description:`icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Icon name="plus" circle color="primary" size="sm" />
  <Icon name="check-circle" circle color="success" size="sm" />
  <Icon name="trash" circle color="danger" size="lg" />
  <Icon name="edit" square color="primary" size="sm" />
</template>`},{default:t(()=>[n(p,{name:`plus`,circle:``,color:`primary`,size:`sm`}),n(p,{name:`check-circle`,circle:``,color:`success`,size:`sm`}),n(p,{name:`trash`,circle:``,color:`danger`,size:`lg`}),n(p,{name:`edit`,square:``,color:`primary`,size:`sm`})]),_:1}),n(m,{"heading-id":`button-heading`,title:`아이콘 버튼`,description:`icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Icon name="search" button color="primary" aria-label="검색" />
  <Icon name="settings" button color="muted" aria-label="설정" />
  <Icon name="close" button color="danger" aria-label="삭제" />
</template>`},{default:t(()=>[n(p,{name:`search`,button:``,color:`primary`,"aria-label":`검색`}),n(p,{name:`settings`,button:``,color:`muted`,"aria-label":`설정`}),n(p,{name:`close`,button:``,color:`danger`,"aria-label":`삭제`})]),_:1}),n(m,{"heading-id":`pulse-heading`,title:`펄스`,description:`icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Icon name="bell" circle pulse color="primary" size="sm" />
  <Icon circle pulse color="danger" size="sm">
    <template #path>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </template>
  </Icon>
</template>`},{default:t(()=>[n(p,{name:`bell`,circle:``,pulse:``,color:`primary`,size:`sm`}),n(p,{circle:``,pulse:``,color:`danger`,size:`sm`},{path:t(()=>[...g[2]||=[r(`circle`,{cx:`12`,cy:`12`,r:`4`,fill:`currentColor`,stroke:`none`},null,-1)]]),_:1})]),_:1}),n(m,{"heading-id":`group-heading`,title:`그룹`,description:`icon_group으로 여러 아이콘을 나란히 배치합니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import TypoText from '@/components/TypoText.vue';
<\/script>

<template>
  <div class="icon_group">
    <Icon name="upload" color="muted" />
    <Icon name="download" color="muted" />
    <Icon name="trash" color="muted" />
  </div>
  <p>
    <Icon name="user" circle color="primary" size="sm" />
    <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
  </p>
</template>`},{default:t(()=>[r(`div`,O,[n(p,{name:`upload`,color:`muted`}),n(p,{name:`download`,color:`muted`}),n(p,{name:`trash`,color:`muted`})]),r(`p`,null,[n(p,{name:`user`,circle:``,color:`primary`,size:`sm`}),n(v,{tag:`span`,color:`muted`,size:`sm`,class:`ml_sm`},{default:t(()=>[...g[3]||=[c(`홍길동님이 댓글을 남겼습니다.`,-1)]]),_:1})])]),_:1}),n(m,{"heading-id":`spin-heading`,title:`로딩`,description:`icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
<\/script>

<template>
  <Icon name="loader" spin color="primary" />
  <Icon name="loader" spin size="lg" color="muted" />
</template>`},{default:t(()=>[n(p,{name:`loader`,spin:``,color:`primary`}),n(p,{name:`loader`,spin:``,size:`lg`,color:`muted`})]),_:1}),n(m,{"heading-id":`gallery-heading`,title:`아이콘 유형`,description:`프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import TypoText from '@/components/TypoText.vue';
import { commonIconGallery } from '@/data/common-icons';
<\/script>

<template>
  <div class="icon_grid">
    <div
      v-for="name in commonIconGallery"
      :key="name"
      class="icon_grid-item"
    >
      <Icon :name="name" size="lg" />
      <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
    </div>
  </div>
</template>`},{default:t(()=>[r(`div`,k,[(e(!0),a(i,null,l(o(f),r=>(e(),a(`div`,{key:r,class:`icon_grid-item`},[n(p,{name:r,size:`lg`},null,8,[`name`]),n(v,{tag:`span`,size:`sm`,color:`muted`},{default:t(()=>[c(s(r),1)]),_:2},1024)]))),128))])]),_:1}),n(u,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(d,{columns:o(y),rows:o(b),"code-column":`name`},null,8,[`columns`,`rows`]),g[4]||=r(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[c(` 장식용 아이콘은 `),r(`code`,{class:`typo_code`},`aria-hidden="true"`),c(`가 자동 적용됩니다. 의미 있는 아이콘·버튼은 `),r(`code`,{class:`typo_code`},`aria-label`),c(`을 지정하세요. `)],-1)]),_:1}),n(u,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(d,{columns:o(x),rows:o(S),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(d,{columns:o(C),rows:o(w),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(d,{columns:o(T),rows:o(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{j as default,A as docMeta};
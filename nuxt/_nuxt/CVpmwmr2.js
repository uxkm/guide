import{L as e,Y as t,b as n,d as r,i,m as a,st as o,y as s}from"./CCnt5OSV.js";import{l as c,t as l}from"./DkmWXf_S.js";import{t as u}from"./D5AUKneU.js";import{t as d}from"./DD3RWXAt.js";import{s as f,t as p}from"./D6IbhUhQ.js";import{t as m}from"./UFk9LiVn.js";import{t as h}from"./COzQg8iZ.js";import{t as g}from"./DOBgEly8.js";var _=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],v=[{name:`as`,type:`string | Component`,default:`a`,description:`루트 요소 또는 커스텀 링크 컴포넌트. button 등으로 변경할 수 있습니다`},{name:`color`,type:`'primary' | 'muted' | 'success' | 'warning' | 'danger'`,default:`primary`,description:`공통 color_* 클래스`},{name:`size`,type:`'sm' | 'lg' | 'xl'`,default:`—`,description:`공통 size_* 클래스`},{name:`underline`,type:`boolean`,default:`false`,description:`항상 밑줄 (link_underline)`},{name:`no-underline`,type:`boolean`,default:`false`,description:`밑줄 없음 (link_no-underline)`},{name:`standalone`,type:`boolean`,default:`false`,description:`터치 영역 확대 (link_standalone)`},{name:`nav`,type:`boolean`,default:`false`,description:`내비게이션 링크 스타일 (link_nav)`},{name:`block`,type:`boolean`,default:`false`,description:`블록 링크 (link_block)`},{name:`back`,type:`boolean`,default:`false`,description:`뒤로가기 링크 (link_back)`},{name:`icon-only`,type:`boolean`,default:`false`,description:`아이콘만 표시 (link_icon-only)`},{name:`active`,type:`boolean`,default:`false`,description:`현재 페이지·활성 상태 (is-active)`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 (is-disabled, aria-disabled, tabindex -1)`},{name:`label`,type:`string`,default:`—`,description:`링크 텍스트. default 슬롯으로 대체 가능`},{name:`href`,type:`string`,default:`#`,description:`이동 URL`},{name:`target`,type:`string`,default:`—`,description:`a target 속성 (예: _blank)`},{name:`rel`,type:`string`,default:`—`,description:`a rel 속성 (예: noopener noreferrer)`},{name:`aria-label`,type:`string`,default:`—`,description:`icon-only 등 텍스트 없을 때 접근성 라벨`},f],y=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],b=[{name:`default`,description:`label 대체 콘텐츠. 텍스트·이미지·아이콘·커스텀 컴포넌트를 함께 넣을 수 있음`},{name:`icon`,description:`텍스트 앞 아이콘 (link_icon)`}],x=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],S=[{name:`link`,description:`하이퍼링크 루트`},{name:`link_underline · link_no-underline · link_standalone`,description:`밑줄·터치 영역`},{name:`link_nav · link_back · link_block · link_icon-only`,description:`용도별 변형`},{name:`link_icon`,description:`링크 내 아이콘`},{name:`link_media`,description:`링크 내 이미지·미디어`},{name:`link_row · link_group · link_group-inline`,description:`링크 묶음 레이아웃`},{name:`is-active · is-disabled`,description:`상태 클래스`},{name:`color_* · size_*`,description:`공통 색상·크기 유틸`},...p],C=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],w=[{name:`--link-gap`,default:`var(--space-xs)`,description:`아이콘·텍스트 간격`},{name:`--link-font-weight`,default:`500`,description:`링크 두께`},{name:`--link-underline-offset`,default:`2px`,description:`밑줄 오프셋`},{name:`--link-nav-padding-y · --link-nav-padding-x`,default:`0.35rem · 0.5rem`,description:`네비 링크 패딩`},{name:`--link-standalone-padding-y · --link-standalone-padding-x`,default:`0.25rem · 0.15rem`,description:`독립 링크 터치 영역`},{name:`--link-icon-only-size`,default:`2rem`,description:`아이콘만 링크 크기`}],T=[`src`],E={class:`link_row`},D={class:`link_row`},O={class:`link_group-inline`,"aria-label":`섹션 내비게이션`},k={class:`link_group`,style:{"max-width":`280px`,width:`100%`}},A={class:`link_row`},j={class:`color_muted`},M={title:`Link | UXKM Guide`,activeNav:`link`,pageTitle:`Link`},N={__name:`link`,setup(f){return(f,p)=>(e(),a(i,null,[p[9]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Link`),r(`p`,{class:`lead`},[s(`페이지 이동·액션 트리거용 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 `),r(`code`,{class:`typo_code`},`typo_link`),s(`를 사용합니다.`)])],-1),n(d,{"heading-id":`basic-heading`,title:`기본`,description:`기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다.`,code:`<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link label="더 보기" />
  <Link label="가이드 문서" />
  <Link underline label="항상 밑줄" />
</template>`},{default:t(()=>[n(h,{label:`더 보기`}),n(h,{label:`가이드 문서`}),n(h,{underline:``,label:`항상 밑줄`})]),_:1}),n(d,{"heading-id":`source-heading`,title:`이미지 · 아이콘 · 커스텀 요소`,description:`기본 슬롯에 이미지·아이콘·컴포넌트를 조합하거나 as로 루트 요소를 변경할 수 있습니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Link href="/components/icon">
    <Icon name="link" class="link_icon" />
    아이콘 문서
  </Link>
  <Link href="/components/avatar">
    <img class="link_media" :src="avatarSample" alt="" />
    프로필
  </Link>
  <Link as="button" @click="console.log('action')">
    커스텀 액션
  </Link>
</template>`},{default:t(()=>[n(h,{href:`/components/icon`},{default:t(()=>[n(u,{name:`link`,class:`link_icon`}),p[0]||=s(` 아이콘 문서 `,-1)]),_:1}),n(h,{href:`/components/avatar`},{default:t(()=>[r(`img`,{class:`link_media`,src:o(g),alt:``},null,8,T),p[1]||=s(` 프로필 `,-1)]),_:1}),n(h,{as:`button`,onClick:()=>{}},{default:t(()=>[...p[2]||=[s(` 커스텀 액션 `,-1)]]),_:1})]),_:1}),n(d,{"heading-id":`color-heading`,title:`색상`,description:`공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.`,stack:``,code:`<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link color="primary" label="Primary" />
    <Link color="muted" label="Muted" />
    <Link color="success" label="Success" />
    <Link color="warning" label="Warning" />
    <Link color="danger" label="Danger" />
  </div>
</template>`},{default:t(()=>[r(`div`,E,[n(h,{color:`primary`,label:`Primary`}),n(h,{color:`muted`,label:`Muted`}),n(h,{color:`success`,label:`Success`}),n(h,{color:`warning`,label:`Warning`}),n(h,{color:`danger`,label:`Danger`})])]),_:1}),n(d,{"heading-id":`size-heading`,title:`크기`,description:`공통 size_* 클래스로 텍스트 크기를 조절합니다.`,code:`<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link size="sm" label="Small" />
  <Link label="Base" />
  <Link size="lg" label="Large" />
  <Link size="xl" label="Extra Large" />
</template>`},{default:t(()=>[n(h,{size:`sm`,label:`Small`}),n(h,{label:`Base`}),n(h,{size:`lg`,label:`Large`}),n(h,{size:`xl`,label:`Extra Large`})]),_:1}),n(d,{"heading-id":`style-heading`,title:`스타일`,description:`link_underline · link_no-underline · link_standalone으로 밑줄과 터치 영역을 조절합니다.`,stack:``,code:`<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link label="기본 (hover 밑줄)" />
    <Link underline label="항상 밑줄" />
    <Link no-underline label="밑줄 없음" />
    <Link standalone label="터치 영역 확대" />
  </div>
</template>`},{default:t(()=>[r(`div`,D,[n(h,{label:`기본 (hover 밑줄)`}),n(h,{underline:``,label:`항상 밑줄`}),n(h,{"no-underline":``,label:`밑줄 없음`}),n(h,{standalone:``,label:`터치 영역 확대`})])]),_:1}),n(d,{"heading-id":`nav-heading`,title:`내비게이션`,description:`link_nav · is-active로 메뉴·탭 링크를 표현합니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <nav class="link_group-inline" aria-label="섹션 내비게이션">
    <Link nav active label="개요" />
    <Link nav label="컴포넌트" />
    <Link nav label="토큰" />
    <Link nav label="접근성" />
  </nav>
  <Link back label="이전 페이지">
    <template #icon>
      <Icon name="arrow-left" class="link_icon" />
    </template>
  </Link>
</template>`},{default:t(()=>[r(`nav`,O,[n(h,{nav:``,active:``,label:`개요`}),n(h,{nav:``,label:`컴포넌트`}),n(h,{nav:``,label:`토큰`}),n(h,{nav:``,label:`접근성`})]),n(h,{back:``,label:`이전 페이지`},{icon:t(()=>[n(u,{name:`arrow-left`,class:`link_icon`})]),_:1})]),_:1}),n(d,{"heading-id":`block-heading`,title:`블록 · 그룹`,description:`link_block · link_group으로 세로 링크 목록을 구성합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_group" style="max-width: 280px; width: 100%;">
    <Link block label="시작하기">
      <template #icon><Icon name="file" class="link_icon" /></template>
    </Link>
    <Link block label="컴포넌트">
      <template #icon><Icon name="grid" class="link_icon" /></template>
    </Link>
    <Link block color="muted" label="도움말">
      <template #icon><Icon name="info" class="link_icon" /></template>
    </Link>
  </div>
</template>`},{default:t(()=>[r(`div`,k,[n(h,{block:``,label:`시작하기`},{icon:t(()=>[n(u,{name:`file`,class:`link_icon`})]),_:1}),n(h,{block:``,label:`컴포넌트`},{icon:t(()=>[n(u,{name:`grid`,class:`link_icon`})]),_:1}),n(h,{block:``,color:`muted`,label:`도움말`},{icon:t(()=>[n(u,{name:`info`,class:`link_icon`})]),_:1})])]),_:1}),n(d,{"heading-id":`icon-only-heading`,title:`아이콘 전용`,description:`link_icon-only으로 텍스트 없는 링크 버튼을 만듭니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link icon-only aria-label="검색">
    <template #icon><Icon name="search" class="link_icon" /></template>
  </Link>
  <Link icon-only aria-label="편집">
    <template #icon><Icon name="edit" class="link_icon" /></template>
  </Link>
  <Link icon-only color="muted" aria-label="더 보기">
    <template #icon><Icon name="more-horizontal" class="link_icon" /></template>
  </Link>
</template>`},{default:t(()=>[n(h,{"icon-only":``,"aria-label":`검색`},{icon:t(()=>[n(u,{name:`search`,class:`link_icon`})]),_:1}),n(h,{"icon-only":``,"aria-label":`편집`},{icon:t(()=>[n(u,{name:`edit`,class:`link_icon`})]),_:1}),n(h,{"icon-only":``,color:`muted`,"aria-label":`더 보기`},{icon:t(()=>[n(u,{name:`more-horizontal`,class:`link_icon`})]),_:1})]),_:1}),n(d,{"heading-id":`icon-heading`,title:`아이콘`,description:`link_icon으로 텍스트 앞·뒤에 아이콘을 배치합니다. 장식용 아이콘은 aria-hidden="true"를 지정합니다.`,stack:``,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link label="외부 링크">
      <template #icon><Icon name="external-link" class="link_icon" /></template>
    </Link>
    <Link>
      다운로드
      <Icon name="download" class="link_icon" />
    </Link>
    <Link label="다음 단계">
      <template #icon><Icon name="arrow-right" class="link_icon" /></template>
    </Link>
  </div>
</template>`},{default:t(()=>[r(`div`,A,[n(h,{label:`외부 링크`},{icon:t(()=>[n(u,{name:`external-link`,class:`link_icon`})]),_:1}),n(h,null,{default:t(()=>[p[3]||=s(` 다운로드 `,-1),n(u,{name:`download`,class:`link_icon`})]),_:1}),n(h,{label:`다음 단계`},{icon:t(()=>[n(u,{name:`arrow-right`,class:`link_icon`})]),_:1})])]),_:1}),n(d,{"heading-id":`external-heading`,title:`새 창 열기`,description:`target="_blank"과 rel="noopener noreferrer"를 함께 지정합니다. 스크린 리더용 안내 문구를 링크 텍스트에 포함합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  >
  공식 문서
  <span class="color_muted size_sm">(새 창)</span>
  <Icon name="external-link" class="link_icon" />
  </Link>
</template>`},{default:t(()=>[n(h,{href:`https://example.com`,target:`_blank`,rel:`noopener noreferrer`},{default:t(()=>[p[4]||=s(` 공식 문서 `,-1),p[5]||=r(`span`,{class:`color_muted size_sm`},`(새 창)`,-1),n(u,{name:`external-link`,class:`link_icon`})]),_:1})]),_:1}),n(d,{"heading-id":`disabled-heading`,title:`비활성`,description:`aria-disabled="true"와 tabindex="-1"로 비활성 링크를 표현합니다. 클릭 불가 시 href를 제거하거나 span으로 대체할 수 있습니다.`,code:`<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link disabled label="비활성 링크" />
  <Link disabled label="비활성 (span)" />
</template>`},{default:t(()=>[n(h,{disabled:``,label:`비활성 링크`}),n(h,{disabled:``,label:`비활성 (span)`})]),_:1}),n(d,{"heading-id":`context-heading`,title:`문맥 속 사용`,description:`알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다.`,stack:``,code:`<script setup>
import Alert from '@/components/Alert.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Alert title="업데이트 안내">
    새 버전이 출시되었습니다.
    <Link size="sm" label="릴리스 노트 보기" />
  </Alert>
  <p class="color_muted">
    계정이 없으신가요?
    <Link label="회원가입" />
  </p>
</template>`},{default:t(()=>[n(m,{title:`업데이트 안내`},{default:t(()=>[p[6]||=s(` 새 버전이 출시되었습니다. `,-1),n(h,{size:`sm`,label:`릴리스 노트 보기`})]),_:1}),r(`p`,j,[p[7]||=s(` 계정이 없으신가요? `,-1),n(h,{label:`회원가입`})])]),_:1}),n(c,{"heading-id":`api-props-heading`,title:`API · Props`},{default:t(()=>[n(l,{columns:o(_),rows:o(v),"code-column":`name`},null,8,[`columns`,`rows`]),p[8]||=r(`p`,{class:`form_field-hint`,style:{"margin-top":`var(--space-md)`}},[s(` 본문 안 인라인 링크는 Typography의 `),r(`code`,{class:`typo_code`},`typo_link`),s(`를 사용합니다. 이 Link 컴포넌트는 독립 액션·내비게이션 링크용입니다. `)],-1)]),_:1}),n(c,{"heading-id":`api-slots-heading`,title:`API · Slots`},{default:t(()=>[n(l,{columns:o(y),rows:o(b),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(l,{columns:o(x),rows:o(S),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(c,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(l,{columns:o(C),rows:o(w),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{N as default,M as docMeta};
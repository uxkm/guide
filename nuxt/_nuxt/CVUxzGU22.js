import{L as e,Y as t,b as n,d as r,i,m as a,st as o,wt as s,y as c}from"./CCnt5OSV.js";import{a as l}from"./jFoqhwDN.js";import{l as u,t as d}from"./DkmWXf_S.js";import{t as f}from"./gHQDdAlU.js";import{t as p}from"./DD3RWXAt.js";import{a as m,t as h}from"./D6IbhUhQ.js";import{t as ee}from"./Kdlvr--h.js";import{t as g}from"./Bal4U0O22.js";import{t as _}from"./DUv9yuh62.js";import{t as v}from"./7ZvA7D642.js";import{t as y}from"./CT_IFTmY2.js";import{t as b}from"./Dq2x-BSn2.js";import{t as x}from"./AUxlN8ez2.js";var S=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],C=[{name:`as`,type:`string | Component`,default:`article`,description:`루트 HTML 태그 또는 NuxtLink 같은 커스텀 컴포넌트`},{name:`variant`,type:`'bordered' | 'shadow' | 'flat'`,default:`bordered`,description:`카드 스킨. flat은 card_ghost`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'compact'`,default:`md`,description:`card_sm · card_lg · card_compact`},{name:`layout`,type:`'default' | 'webzine' | 'news' | 'product'`,default:`default`,description:`기본 · 웹진 · 뉴스 · 상품 리스트형 레이아웃`},{name:`mediaPosition`,type:`'top' | 'left' | 'right'`,default:`top`,description:`미디어 위치. news와 product는 기본 left`},{name:`mediaDivider`,type:`boolean`,default:`true`,description:`좌우 미디어와 콘텐츠 사이 구분선 표시`},{name:`hoverable`,type:`boolean`,default:`false`,description:`호버 상승 효과 (card_hover)`},{name:`title`,type:`string`,default:`—`,description:`내장 헤더 제목 (CardHeader 없이 사용 시)`},{name:`subtitle`,type:`string`,default:`—`,description:`내장 헤더 부제`},{name:`tag`,type:`string`,default:`article`,description:`하위 호환용 루트 HTML 태그. as가 우선합니다`},m],w=S,T=[{name:`title`,type:`string`,default:`—`,description:`제목 (card_title)`},{name:`subtitle`,type:`string`,default:`—`,description:`부제 (card_subtitle)`}],E=S,D=[{name:`lineClamp`,type:`1 | 2 | 3`,default:`—`,description:`본문을 지정한 줄 수 뒤에서 말줄임`}],O=S,k=[{name:`justify`,type:`'start' | 'center' | 'end' | 'between'`,default:`start`,description:`푸터 항목의 가로 정렬`},{name:`ratio`,type:`'1:1' | '1:2' | '2:1'`,default:`—`,description:`직접 자식 두 개의 균등·비율 분할`},{name:`full`,type:`boolean`,default:`false`,description:`단일 직접 자식을 100% 너비로 확장`},{name:`flush`,type:`boolean`,default:`false`,description:`푸터 패딩 제거`},{name:`between`,type:`boolean`,default:`false`,description:`하위 호환용 양끝 정렬. justify="between" 권장`}],A=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],j=[{name:`media`,description:`상단·좌측·우측 미디어 영역 (card_media)`},{name:`header`,description:`헤더 콘텐츠 (title·subtitle 대체)`},{name:`extra`,description:`헤더 우측 액션 (card_extra)`},{name:`default`,description:`본문·푸터 등 자식 (CardBody · CardFooter)`}],M=[{name:`default`,description:`헤더 메인 콘텐츠`},{name:`extra`,description:`헤더 우측 액션`}],N=[{name:`default`,description:`카드 본문`}],P=[{name:`default`,description:`카드 푸터`}],F=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],te=[{name:`card`,description:`카드 루트`},{name:`card_shadow · card_ghost · card_borderless`,description:`스킨 변형`},{name:`card_sm · card_lg · card_compact`,description:`크기·패딩`},{name:`card_webzine · card_news · card_product`,description:`웹진형 · 뉴스형 · 상품형`},{name:`card_news-list · card_product-list`,description:`뉴스 · 상품 목록 컨테이너`},{name:`card_media-left · card_media-right · card_media-no-divider`,description:`미디어 좌우 배치 · 구분선 제거`},{name:`card_hover · card_clickable · card_accent`,description:`인터랙션·강조`},{name:`card_header · card_body · card_footer · card_media`,description:`구조 파트`},{name:`card_title · card_subtitle · card_extra`,description:`헤더 파트`},{name:`card_body-clamp-1 · card_body-clamp-2 · card_body-clamp-3`,description:`본문 1·2·3줄 말줄임`},{name:`card_price · card_price-original`,description:`상품 현재가 · 원래 가격`},{name:`card_footer-start · card_footer-center · card_footer-end · card_footer-between`,description:`푸터 가로 정렬`},{name:`card_footer-full · card_footer-flush`,description:`단일 100% 확장 · 패딩 제거`},{name:`card_footer-ratio-1-1 · card_footer-ratio-1-2 · card_footer-ratio-2-1`,description:`푸터 직접 자식 비율 분할`},{name:`card_deck · card_deck-2 · card_deck-3`,description:`카드 그리드`},{name:`is-disabled`,description:`비활성 상태`},...h],I=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],L=[{name:`--card-padding · --card-padding-sm · --card-padding-lg`,default:`—`,description:`카드 패딩`},{name:`--card-radius · --card-border-color · --card-shadow`,default:`—`,description:`모서리·테두리·그림자`},{name:`--card-news-media-width · --card-product-media-width`,default:`10rem · 8.5rem`,description:`뉴스 · 상품 이미지 너비`},{name:`--card-webzine-media-ratio`,default:`3 / 2`,description:`웹진 이미지 비율`},{name:`--card-title-size · --card-subtitle-size`,default:`—`,description:`제목·부제 타이포`},{name:`--card-accent-width · --card-hover-translate`,default:`3px · -2px`,description:`강조선·호버 이동`}],R={class:`card_deck card_deck-2`},z={class:`card_deck card_deck-2`},B={class:`card_deck card_deck-2`},V={class:`card_header-row`},H={class:`card_inner`},U={class:`card_news-list`},W={class:`card_deck card_deck-2`},G={class:`card_product-list`},K={class:`card_deck card_deck-3`},q={class:`card_deck`},J={class:`card_header-row`},Y={class:`tag_group tag_group-tight`},X={class:`card_deck`},Z={class:`card_deck card_deck-2`},Q={class:`card_deck`},$={title:`Card | HTML Components`,activeNav:`card`,pageTitle:`Card`},ne={__name:`card`,setup(m){let h=`디자인 시스템은 제품 전반의 일관성을 높이고 반복되는 의사결정을 줄여 팀이 더 빠르게 사용자 문제에 집중하도록 돕습니다. 구성 요소와 사용 원칙을 하나의 언어로 정리하면 디자이너와 개발자가 같은 기준으로 협업할 수 있으며, 새로운 기능을 추가할 때도 품질을 안정적으로 유지할 수 있습니다.`;return(m,$)=>(e(),a(i,null,[$[53]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`Card`),r(`p`,{class:`lead`},`콘텐츠를 그룹화하여 표시하는 카드 컴포넌트입니다.`)],-1),n(p,{"heading-id":`basic-heading`,title:`기본`,description:`card_header · card_body · card_footer 구조를 가집니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <Card style="max-width: 360px; width: 100%;">
    <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
    <CardBody>
      카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.
    </CardBody>
    <CardFooter>
      <Button variant="filled" color="primary" size="sm" label="확인" />
      <Button variant="ghost" size="sm" label="취소" />
    </CardFooter>
  </Card>
</template>`},{default:t(()=>[n(g,{style:{"max-width":`360px`,width:`100%`}},{default:t(()=>[n(y,{title:`카드 제목`,subtitle:`부제목 또는 메타 정보`}),n(_,null,{default:t(()=>[...$[2]||=[c(` 카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다. `,-1)]]),_:1}),n(v,null,{default:t(()=>[n(f,{variant:`filled`,color:`primary`,size:`sm`,label:`확인`}),n(f,{variant:`ghost`,size:`sm`,label:`취소`})]),_:1})]),_:1})]),_:1}),n(p,{"heading-id":`simple-heading`,title:`간단`,description:`header나 footer 없이 body만 사용하는 단순 카드입니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <Card variant="shadow" size="compact" style="max-width: 280px; width: 100%;">
    <CardBody>
      <p class="card_title">알림</p>
      새로운 메시지가 도착했습니다. 확인해 주세요.
    </CardBody>
  </Card>
  <Card size="compact" style="max-width: 280px; width: 100%;">
    <CardBody>
      컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.
    </CardBody>
  </Card>
</template>`},{default:t(()=>[n(g,{variant:`shadow`,size:`compact`,style:{"max-width":`280px`,width:`100%`}},{default:t(()=>[n(_,null,{default:t(()=>[...$[3]||=[r(`p`,{class:`card_title`},`알림`,-1),c(` 새로운 메시지가 도착했습니다. 확인해 주세요. `,-1)]]),_:1})]),_:1}),n(g,{size:`compact`,style:{"max-width":`280px`,width:`100%`}},{default:t(()=>[n(_,null,{default:t(()=>[...$[4]||=[c(` 컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다. `,-1)]]),_:1})]),_:1})]),_:1}),n(p,{"heading-id":`skin-heading`,title:`스킨`,description:`기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card>
      <CardBody>기본 — 테두리 · 그림자</CardBody>
    </Card>
    <Card variant="shadow">
      <CardBody>Shadow — 그림자</CardBody>
    </Card>
    <Card class="card_elevated">
      <CardBody>Elevated — 강한 그림자</CardBody>
    </Card>
    <Card variant="flat">
      <CardBody>Ghost — 투명 배경</CardBody>
    </Card>
  </div>
</template>`},{default:t(()=>[r(`div`,R,[n(g,null,{default:t(()=>[n(_,null,{default:t(()=>[...$[5]||=[c(`기본 — 테두리 · 그림자`,-1)]]),_:1})]),_:1}),n(g,{variant:`shadow`},{default:t(()=>[n(_,null,{default:t(()=>[...$[6]||=[c(`Shadow — 그림자`,-1)]]),_:1})]),_:1}),n(g,{class:`card_elevated`},{default:t(()=>[n(_,null,{default:t(()=>[...$[7]||=[c(`Elevated — 강한 그림자`,-1)]]),_:1})]),_:1}),n(g,{variant:`flat`},{default:t(()=>[n(_,null,{default:t(()=>[...$[8]||=[c(`Ghost — 투명 배경`,-1)]]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`size-heading`,title:`크기`,description:`size로 패딩과 제목 크기를 조절합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card size="sm">
      <CardHeader title="Small" />
      <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
    </Card>
    <Card>
      <CardHeader title="Medium" />
      <CardBody>기본 크기 카드입니다.</CardBody>
    </Card>
    <Card size="lg">
      <CardHeader title="Large" />
      <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
    </Card>
  </div>
</template>`},{default:t(()=>[r(`div`,z,[n(g,{size:`sm`},{default:t(()=>[n(y,{title:`Small`}),n(_,null,{default:t(()=>[...$[9]||=[c(`작은 카드 — 좁은 패딩과 작은 제목.`,-1)]]),_:1})]),_:1}),n(g,null,{default:t(()=>[n(y,{title:`Medium`}),n(_,null,{default:t(()=>[...$[10]||=[c(`기본 크기 카드입니다.`,-1)]]),_:1})]),_:1}),n(g,{size:`lg`},{default:t(()=>[n(y,{title:`Large`}),n(_,null,{default:t(()=>[...$[11]||=[c(`큰 카드 — 넓은 패딩과 큰 제목.`,-1)]]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`accent-heading`,title:`강조 테두리`,description:`card_accent와 color_*로 왼쪽 강조선을 적용합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card class="card_accent color_primary">
      <CardBody>
        <p class="card_title">정보</p>
        시스템 업데이트가 예정되어 있습니다.
      </CardBody>
    </Card>
    <Card class="card_accent color_success">
      <CardBody>
        <p class="card_title">성공</p>
        작업이 정상적으로 완료되었습니다.
      </CardBody>
    </Card>
    <Card class="card_accent color_warning">
      <CardBody>
        <p class="card_title">주의</p>
        저장 공간이 부족합니다.
      </CardBody>
    </Card>
    <Card class="card_accent color_danger">
      <CardBody>
        <p class="card_title">오류</p>
        연결에 실패했습니다. 다시 시도해 주세요.
      </CardBody>
    </Card>
  </div>
</template>`},{default:t(()=>[r(`div`,B,[n(g,{class:`card_accent color_primary`},{default:t(()=>[n(_,null,{default:t(()=>[...$[12]||=[r(`p`,{class:`card_title`},`정보`,-1),c(` 시스템 업데이트가 예정되어 있습니다. `,-1)]]),_:1})]),_:1}),n(g,{class:`card_accent color_success`},{default:t(()=>[n(_,null,{default:t(()=>[...$[13]||=[r(`p`,{class:`card_title`},`성공`,-1),c(` 작업이 정상적으로 완료되었습니다. `,-1)]]),_:1})]),_:1}),n(g,{class:`card_accent color_warning`},{default:t(()=>[n(_,null,{default:t(()=>[...$[14]||=[r(`p`,{class:`card_title`},`주의`,-1),c(` 저장 공간이 부족합니다. `,-1)]]),_:1})]),_:1}),n(g,{class:`card_accent color_danger`},{default:t(()=>[n(_,null,{default:t(()=>[...$[15]||=[r(`p`,{class:`card_title`},`오류`,-1),c(` 연결에 실패했습니다. 다시 시도해 주세요. `,-1)]]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`media-heading`,title:`미디어`,description:`card_media로 상단 이미지·썸네일 영역을 추가합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Card hoverable variant="shadow" style="max-width: 320px; width: 100%;">
    <template #media>
      <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
    </template>
    <CardHeader>
      <div class="card_header-row">
        <h3 class="card_title">프로젝트 Alpha</h3>
        <Tag size="sm" color="primary" label="진행 중" />
      </div>
      <p class="card_subtitle">업데이트 · 2일 전</p>
    </CardHeader>
    <CardBody>
      디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.
    </CardBody>
    <CardFooter between>
      <span class="color_muted size_sm">3명 참여</span>
      <Button variant="text" color="primary" size="sm" label="자세히" />
    </CardFooter>
  </Card>
</template>`},{default:t(()=>[n(g,{hoverable:``,variant:`shadow`,style:{"max-width":`320px`,width:`100%`}},{media:t(()=>[...$[16]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`프로젝트 썸네일`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"aria-hidden":`true`},[r(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),r(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),r(`path`,{d:`M21 15l-5-5L5 21`})])],-1)]]),default:t(()=>[n(y,null,{default:t(()=>[r(`div`,V,[$[17]||=r(`h3`,{class:`card_title`},`프로젝트 Alpha`,-1),n(x,{size:`sm`,color:`primary`,label:`진행 중`})]),$[18]||=r(`p`,{class:`card_subtitle`},`업데이트 · 2일 전`,-1)]),_:1}),n(_,null,{default:t(()=>[...$[19]||=[c(` 디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다. `,-1)]]),_:1}),n(v,{between:``},{default:t(()=>[$[20]||=r(`span`,{class:`color_muted size_sm`},`3명 참여`,-1),n(f,{variant:`text`,color:`primary`,size:`sm`,label:`자세히`})]),_:1})]),_:1})]),_:1}),n(p,{"heading-id":`horizontal-heading`,title:`가로`,description:`card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <Card class="card_horizontal" variant="shadow" style="max-width: 480px; width: 100%;">
    <template #media>
      <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
      </div>
    </template>
    <div class="card_inner">
      <CardHeader title="가이드 문서" />
      <CardBody>
        HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.
      </CardBody>
      <CardFooter>
        <a href="#" class="link color_primary size_sm" @click.prevent>문서 보기</a>
      </CardFooter>
    </div>
  </Card>
</template>`},{default:t(()=>[n(g,{class:`card_horizontal`,variant:`shadow`,style:{"max-width":`480px`,width:`100%`}},{media:t(()=>[...$[21]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`문서 썸네일`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"aria-hidden":`true`},[r(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),r(`path`,{d:`M14 2v6h6`})])],-1)]]),default:t(()=>[r(`div`,H,[n(y,{title:`가이드 문서`}),n(_,null,{default:t(()=>[...$[22]||=[c(` HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요. `,-1)]]),_:1}),n(v,null,{default:t(()=>[r(`a`,{href:`#`,class:`link color_primary size_sm`,onClick:$[0]||=l(()=>{},[`prevent`])},`문서 보기`)]),_:1})])]),_:1})]),_:1}),n(p,{"heading-id":`webzine-heading`,title:`웹진형`,description:`layout="webzine"은 넓은 상단 이미지와 강조된 제목·본문으로 에디토리얼 콘텐츠를 구성합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <Card layout="webzine" variant="shadow" title="도시를 바꾸는 작은 디자인" subtitle="Design Journal · 2026.07.31">
    <template #media><div class="card_media card_media-placeholder" role="img" aria-label="웹진 대표 이미지" /></template>
    <CardBody>일상의 동선과 경험을 개선하는 공공 디자인 사례를 깊이 있게 소개합니다.</CardBody>
  </Card>
</template>`},{default:t(()=>[n(g,{layout:`webzine`,variant:`shadow`,title:`도시를 바꾸는 작은 디자인`,subtitle:`Design Journal · 2026.07.31`,style:{"max-width":`680px`,width:`100%`}},{media:t(()=>[...$[23]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`웹진 대표 이미지`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"aria-hidden":`true`},[r(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),r(`path`,{d:`M14 2v6h6`})])],-1)]]),default:t(()=>[n(_,null,{default:t(()=>[...$[24]||=[c(`일상의 동선과 경험을 개선하는 공공 디자인 사례를 깊이 있게 소개합니다.`,-1)]]),_:1})]),_:1})]),_:1}),n(p,{"heading-id":`news-list-heading`,title:`뉴스 리스트형`,description:`layout="news"는 밀도 높은 가로형 뉴스 항목을 만듭니다. 기본 이미지는 좌측이며 mediaPosition으로 우측 배치도 가능합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_news-list">
    <Card layout="news" title="디자인 시스템 업데이트" subtitle="제품 소식 · 10분 전">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="업데이트 뉴스 이미지" /></template>
      <CardBody>접근성 토큰과 컴포넌트 API가 개선되었습니다.</CardBody>
    </Card>
    <Card layout="news" media-position="right" title="새로운 가이드 공개" subtitle="가이드 · 1시간 전">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="가이드 뉴스 이미지" /></template>
      <CardBody>콘텐츠 작성과 레이아웃 원칙을 확인하세요.</CardBody>
    </Card>
  </div>
</template>`,stack:``},{default:t(()=>[r(`div`,U,[n(g,{layout:`news`,title:`디자인 시스템 업데이트`,subtitle:`제품 소식 · 10분 전`},{media:t(()=>[...$[25]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`업데이트 뉴스 이미지`},null,-1)]]),default:t(()=>[n(_,null,{default:t(()=>[...$[26]||=[c(`접근성 토큰과 컴포넌트 API가 개선되었습니다.`,-1)]]),_:1})]),_:1}),n(g,{layout:`news`,"media-position":`right`,title:`새로운 가이드 공개`,subtitle:`가이드 · 1시간 전`},{media:t(()=>[...$[27]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`가이드 뉴스 이미지`},null,-1)]]),default:t(()=>[n(_,null,{default:t(()=>[...$[28]||=[c(`콘텐츠 작성과 레이아웃 원칙을 확인하세요.`,-1)]]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`media-position-heading`,title:`이미지 좌측 · 우측`,description:`mediaPosition을 left 또는 right로 지정하면 Card가 미디어와 콘텐츠 래퍼를 자동으로 구성합니다. mediaDivider=false로 이미지 경계선을 제거할 수 있습니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card media-position="left" :media-divider="false" title="이미지 좌측 · 구분선 없음">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="좌측 배치 이미지" /></template>
      <CardBody>미디어 다음에 콘텐츠를 배치합니다.</CardBody>
    </Card>
    <Card media-position="right" :media-divider="false" title="이미지 우측 · 구분선 없음">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="우측 배치 이미지" /></template>
      <CardBody>콘텐츠 다음에 미디어를 배치합니다.</CardBody>
    </Card>
  </div>
</template>`,stack:``},{default:t(()=>[r(`div`,W,[n(g,{"media-position":`left`,"media-divider":!1,title:`이미지 좌측 · 구분선 없음`},{media:t(()=>[...$[29]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`좌측 배치 이미지`},null,-1)]]),default:t(()=>[n(_,null,{default:t(()=>[...$[30]||=[c(`미디어 다음에 콘텐츠를 배치합니다.`,-1)]]),_:1})]),_:1}),n(g,{"media-position":`right`,"media-divider":!1,title:`이미지 우측 · 구분선 없음`},{media:t(()=>[...$[31]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`우측 배치 이미지`},null,-1)]]),default:t(()=>[n(_,null,{default:t(()=>[...$[32]||=[c(`콘텐츠 다음에 미디어를 배치합니다.`,-1)]]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`product-list-heading`,title:`상품 리스트형`,description:`layout="product"는 상품 이미지·설명·가격·액션을 밀도 높은 가로 목록으로 구성합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
<\/script>

<template>
  <div class="card_product-list">
    <Card layout="product" :media-divider="false" title="라이트 러닝 재킷" subtitle="무료 배송">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="라이트 러닝 재킷 상품 이미지" /></template>
      <CardBody :line-clamp="2">가볍고 통기성이 좋은 데일리 러닝 재킷입니다. 생활 방수 소재를 적용했습니다.</CardBody>
      <CardFooter justify="between">
        <p class="card_price"><data value="89000">89,000원</data><del class="card_price-original">109,000원</del></p>
        <Button variant="filled" size="sm" label="담기" />
      </CardFooter>
    </Card>
    <Card layout="product" :media-divider="false" title="데일리 백팩" subtitle="오늘 출발">
      <template #media><div class="card_media card_media-placeholder" role="img" aria-label="데일리 백팩 상품 이미지" /></template>
      <CardBody :line-clamp="1">노트북 수납과 생활 방수를 지원하는 가벼운 데일리 백팩입니다.</CardBody>
      <CardFooter justify="between">
        <p class="card_price"><data value="64000">64,000원</data></p>
        <Button variant="outline" size="sm" label="상세보기" />
      </CardFooter>
    </Card>
  </div>
</template>`,stack:``},{default:t(()=>[r(`div`,G,[n(g,{layout:`product`,"media-divider":!1,title:`라이트 러닝 재킷`,subtitle:`무료 배송`},{media:t(()=>[...$[33]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`라이트 러닝 재킷 상품 이미지`},null,-1)]]),default:t(()=>[n(_,{"line-clamp":2},{default:t(()=>[...$[34]||=[c(`가볍고 통기성이 좋은 데일리 러닝 재킷입니다. 생활 방수 소재를 적용했습니다.`,-1)]]),_:1}),n(v,{justify:`between`},{default:t(()=>[$[35]||=r(`p`,{class:`card_price`},[r(`data`,{value:`89000`},`89,000원`),r(`del`,{class:`card_price-original`},[r(`data`,{value:`109000`},`109,000원`)])],-1),n(f,{variant:`filled`,size:`sm`,label:`담기`})]),_:1})]),_:1}),n(g,{layout:`product`,"media-divider":!1,title:`데일리 백팩`,subtitle:`오늘 출발`},{media:t(()=>[...$[36]||=[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`데일리 백팩 상품 이미지`},null,-1)]]),default:t(()=>[n(_,{"line-clamp":1},{default:t(()=>[...$[37]||=[c(`노트북 수납과 생활 방수를 지원하는 가벼운 데일리 백팩입니다.`,-1)]]),_:1}),n(v,{justify:`between`},{default:t(()=>[$[38]||=r(`p`,{class:`card_price`},[r(`data`,{value:`64000`},`64,000원`)],-1),n(f,{variant:`outline`,size:`sm`,label:`상세보기`})]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`line-clamp-heading`,title:`내용 말줄임`,description:`CardBody의 lineClamp로 내용 영역을 1줄·2줄·3줄까지 표시한 뒤 말줄임 처리합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardHeader from '@/components/CardHeader.vue';

const description = '디자인 시스템은 제품 전반의 일관성을 높이고 반복되는 의사결정을 줄여 팀이 더 빠르게 사용자 문제에 집중하도록 돕습니다.';
<\/script>

<template>
  <div class="card_deck card_deck-3">
    <Card><CardHeader title="한 줄 말줄임" /><CardBody :line-clamp="1">{{ description }}</CardBody></Card>
    <Card><CardHeader title="두 줄 말줄임" /><CardBody :line-clamp="2">{{ description }}</CardBody></Card>
    <Card><CardHeader title="세 줄 말줄임" /><CardBody :line-clamp="3">{{ description }}</CardBody></Card>
  </div>
</template>`,stack:``},{default:t(()=>[r(`div`,K,[n(g,null,{default:t(()=>[n(y,{title:`한 줄 말줄임`}),n(_,{"line-clamp":1},{default:t(()=>[c(s(h))]),_:1})]),_:1}),n(g,null,{default:t(()=>[n(y,{title:`두 줄 말줄임`}),n(_,{"line-clamp":2},{default:t(()=>[c(s(h))]),_:1})]),_:1}),n(g,null,{default:t(()=>[n(y,{title:`세 줄 말줄임`}),n(_,{"line-clamp":3},{default:t(()=>[c(s(h))]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`icon-heading`,title:`아이콘 · 통계`,description:`card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import Stat from '@/components/Stat.vue';
<\/script>

<template>
  <div class="card_deck">
    <Card variant="shadow" hoverable>
      <CardBody>
        <span class="card_icon color_primary" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </span>
        <h3 class="card_title">빠른 성능</h3>
        <p class="card_subtitle">가벼운 번들, 빠른 로딩</p>
      </CardBody>
    </Card>
    <Card variant="shadow" hoverable>
      <CardBody>
        <span class="card_icon color_success" aria-hidden="true">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <h3 class="card_title">접근성</h3>
        <p class="card_subtitle">WCAG 2.2 AA 기준</p>
      </CardBody>
    </Card>
    <Card variant="shadow">
      <CardBody>
        <Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trend-color="success" />
      </CardBody>
    </Card>
  </div>
</template>`},{default:t(()=>[r(`div`,q,[n(g,{variant:`shadow`,hoverable:``},{default:t(()=>[n(_,null,{default:t(()=>[...$[39]||=[r(`span`,{class:`card_icon color_primary`,"aria-hidden":`true`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M13 2L3 14h9l-1 8 10-12h-9l1-8z`})])],-1),r(`h3`,{class:`card_title`},`빠른 성능`,-1),r(`p`,{class:`card_subtitle`},`가벼운 번들, 빠른 로딩`,-1)]]),_:1})]),_:1}),n(g,{variant:`shadow`,hoverable:``},{default:t(()=>[n(_,null,{default:t(()=>[...$[40]||=[r(`span`,{class:`card_icon color_success`,"aria-hidden":`true`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`})])],-1),r(`h3`,{class:`card_title`},`접근성`,-1),r(`p`,{class:`card_subtitle`},`WCAG 2.2 AA 기준`,-1)]]),_:1})]),_:1}),n(g,{variant:`shadow`},{default:t(()=>[n(_,null,{default:t(()=>[n(b,{title:`월간 활성 사용자`,value:`24.5K`,description:`+18.2%`,"trend-color":`success`})]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`profile-heading`,title:`프로필`,description:`card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
import CardHeader from '@/components/CardHeader.vue';
import Tag from '@/components/Tag.vue';
<\/script>

<template>
  <Card variant="shadow" style="max-width: 320px; width: 100%;">
    <CardHeader>
      <div class="card_header-row">
        <Avatar color="primary" initials="홍" aria-hidden />
        <div>
          <h3 class="card_title">홍길동</h3>
          <p class="card_subtitle">프론트엔드 개발자</p>
        </div>
      </div>
      <template #extra>
        <Button variant="ghost" size="sm" icon-only aria-label="더 보기">
          <template #icon-before>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </template>
        </Button>
      </template>
    </CardHeader>
    <CardBody>
      <div class="tag_group tag_group-tight">
        <Tag size="sm" color="primary" label="React" />
        <Tag size="sm" color="primary" label="TypeScript" />
        <Tag size="sm" color="default" label="SCSS" />
      </div>
    </CardBody>
    <CardFooter ratio="2:1">
      <span class="color_muted size_sm">서울 · 온라인</span>
      <Button variant="outline" color="primary" size="sm" label="팔로우" />
    </CardFooter>
  </Card>
</template>`},{default:t(()=>[n(g,{variant:`shadow`,style:{"max-width":`320px`,width:`100%`}},{default:t(()=>[n(y,null,{extra:t(()=>[n(f,{variant:`ghost`,size:`sm`,"icon-only":``,"aria-label":`더 보기`},{"icon-before":t(()=>[...$[42]||=[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[r(`circle`,{cx:`12`,cy:`12`,r:`1`}),r(`circle`,{cx:`19`,cy:`12`,r:`1`}),r(`circle`,{cx:`5`,cy:`12`,r:`1`})],-1)]]),_:1})]),default:t(()=>[r(`div`,J,[n(ee,{color:`primary`,initials:`홍`,"aria-hidden":``}),$[41]||=r(`div`,null,[r(`h3`,{class:`card_title`},`홍길동`),r(`p`,{class:`card_subtitle`},`프론트엔드 개발자`)],-1)])]),_:1}),n(_,null,{default:t(()=>[r(`div`,Y,[n(x,{size:`sm`,color:`primary`,label:`React`}),n(x,{size:`sm`,color:`primary`,label:`TypeScript`}),n(x,{size:`sm`,color:`default`,label:`SCSS`})])]),_:1}),n(v,{ratio:`2:1`},{default:t(()=>[$[43]||=r(`span`,{class:`color_muted size_sm`},`서울 · 온라인`,-1),n(f,{variant:`outline`,color:`primary`,size:`sm`,label:`팔로우`})]),_:1})]),_:1})]),_:1}),n(p,{"heading-id":`footer-layout-heading`,title:`푸터 레이아웃`,description:`justify로 좌·중앙·우·양끝 정렬하고, full로 단일 항목을 100% 확장합니다. ratio는 1:1 · 1:2 · 2:1 분할을, flush는 패딩 제거를 적용합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardFooter from '@/components/CardFooter.vue';
<\/script>

<template>
  <div class="card_deck">
    <Card><CardBody>단일 액션</CardBody><CardFooter full justify="center"><Button variant="filled" label="전체 너비 액션" /></CardFooter></Card>
    <Card><CardBody>균등 분할</CardBody><CardFooter ratio="1:1" flush><Button variant="ghost" label="취소" /><Button variant="filled" label="확인" /></CardFooter></Card>
    <Card><CardBody>상황별 비율</CardBody><CardFooter ratio="1:2"><Button variant="ghost" label="이전" /><Button variant="filled" label="다음 단계" /></CardFooter></Card>
  </div>
</template>`,stack:``},{default:t(()=>[r(`div`,X,[n(g,null,{default:t(()=>[n(_,null,{default:t(()=>[...$[44]||=[c(`단일 액션`,-1)]]),_:1}),n(v,{full:``,justify:`center`},{default:t(()=>[n(f,{variant:`filled`,label:`전체 너비 액션`})]),_:1})]),_:1}),n(g,null,{default:t(()=>[n(_,null,{default:t(()=>[...$[45]||=[c(`균등 분할`,-1)]]),_:1}),n(v,{ratio:`1:1`,flush:``},{default:t(()=>[n(f,{variant:`ghost`,label:`취소`}),n(f,{variant:`filled`,label:`확인`})]),_:1})]),_:1}),n(g,null,{default:t(()=>[n(_,null,{default:t(()=>[...$[46]||=[c(`상황별 비율`,-1)]]),_:1}),n(v,{ratio:`1:2`},{default:t(()=>[n(f,{variant:`ghost`,label:`이전`}),n(f,{variant:`filled`,label:`다음 단계`})]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`clickable-heading`,title:`클릭 가능`,description:`as로 링크 또는 네이티브 button을 지정해 카드 전체를 올바른 링크·버튼으로 만듭니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card as="a" href="#" hoverable class="card_clickable" @click.prevent>
      <CardBody>
        <h3 class="card_title">링크 카드</h3>
        <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
      </CardBody>
    </Card>
    <Card as="button" type="button" hoverable variant="shadow" class="card_clickable">
      <CardBody>
        <h3 class="card_title">버튼 카드</h3>
        <p class="card_subtitle">네이티브 button으로 키보드 동작을 지원합니다.</p>
      </CardBody>
    </Card>
  </div>
</template>`},{default:t(()=>[r(`div`,Z,[n(g,{as:`a`,href:`#`,hoverable:``,class:`card_clickable`,onClick:$[1]||=l(()=>{},[`prevent`])},{default:t(()=>[n(_,null,{default:t(()=>[...$[47]||=[r(`h3`,{class:`card_title`},`링크 카드`,-1),r(`p`,{class:`card_subtitle`},`클릭하면 상세 페이지로 이동합니다.`,-1)]]),_:1})]),_:1}),n(g,{as:`button`,type:`button`,hoverable:``,variant:`shadow`,class:`card_clickable`},{default:t(()=>[n(_,null,{default:t(()=>[...$[48]||=[r(`h3`,{class:`card_title`},`버튼 카드`,-1),r(`p`,{class:`card_subtitle`},`네이티브 button으로 키보드 동작을 지원합니다.`,-1)]]),_:1})]),_:1})])]),_:1}),n(p,{"heading-id":`disabled-heading`,title:`비활성`,description:`is-disabled로 비활성 상태를 표시합니다.`,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
<\/script>

<template>
  <Card class="is-disabled" style="max-width: 280px; width: 100%;">
    <CardBody>
      <h3 class="card_title">비활성 카드</h3>
      <p class="card_subtitle">현재 이용할 수 없습니다.</p>
    </CardBody>
  </Card>
</template>`},{default:t(()=>[n(g,{class:`is-disabled`,style:{"max-width":`280px`,width:`100%`}},{default:t(()=>[n(_,null,{default:t(()=>[...$[49]||=[r(`h3`,{class:`card_title`},`비활성 카드`,-1),r(`p`,{class:`card_subtitle`},`현재 이용할 수 없습니다.`,-1)]]),_:1})]),_:1})]),_:1}),n(p,{"heading-id":`grid-heading`,title:`카드 그리드`,description:`card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다.`,stack:``,code:`<script setup>
import Card from '@/components/Card.vue';
import CardBody from '@/components/CardBody.vue';
import CardHeader from '@/components/CardHeader.vue';
<\/script>

<template>
  <div class="card_deck">
    <Card hoverable>
      <CardHeader title="Feature A" />
      <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
    </Card>
    <Card hoverable>
      <CardHeader title="Feature B" />
      <CardBody>접근성을 고려한 마크업 구조.</CardBody>
    </Card>
    <Card hoverable>
      <CardHeader title="Feature C" />
      <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
    </Card>
  </div>
</template>`},{default:t(()=>[r(`div`,Q,[n(g,{hoverable:``},{default:t(()=>[n(y,{title:`Feature A`}),n(_,null,{default:t(()=>[...$[50]||=[c(`빠른 성능과 가벼운 번들 크기.`,-1)]]),_:1})]),_:1}),n(g,{hoverable:``},{default:t(()=>[n(y,{title:`Feature B`}),n(_,null,{default:t(()=>[...$[51]||=[c(`접근성을 고려한 마크업 구조.`,-1)]]),_:1})]),_:1}),n(g,{hoverable:``},{default:t(()=>[n(y,{title:`Feature C`}),n(_,null,{default:t(()=>[...$[52]||=[c(`Pure SCSS로 커스터마이즈 가능.`,-1)]]),_:1})]),_:1})])]),_:1}),n(u,{"heading-id":`api-props-heading`,title:`API · Card Props`},{default:t(()=>[n(d,{columns:o(S),rows:o(C),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-header-props-heading`,title:`API · CardHeader Props`},{default:t(()=>[n(d,{columns:o(w),rows:o(T),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-body-props-heading`,title:`API · CardBody Props`},{default:t(()=>[n(d,{columns:o(E),rows:o(D),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-footer-props-heading`,title:`API · CardFooter Props`},{default:t(()=>[n(d,{columns:o(O),rows:o(k),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-slots-heading`,title:`API · Card Slots`},{default:t(()=>[n(d,{columns:o(A),rows:o(j),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-header-slots-heading`,title:`API · CardHeader Slots`},{default:t(()=>[n(d,{columns:o(A),rows:o(M),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-body-slots-heading`,title:`API · CardBody Slots`},{default:t(()=>[n(d,{columns:o(A),rows:o(N),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-footer-slots-heading`,title:`API · CardFooter Slots`},{default:t(()=>[n(d,{columns:o(A),rows:o(P),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:t(()=>[n(d,{columns:o(F),rows:o(te),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(u,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(d,{columns:o(I),rows:o(L),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{ne as default,$ as docMeta};
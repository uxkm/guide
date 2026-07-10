import{_ as a}from"./Card-CnKjvY8r.js";import{_ as n}from"./Avatar-De5lKVUK.js";import{_ as r}from"./Button-C3SXv-sJ.js";import{_ as e}from"./CardBody-Qf4M-sZS.js";import{_ as t}from"./CardFooter-CItW5fyM.js";import{_ as d}from"./CardHeader-Chkk5for.js";import{_ as o}from"./Stat-SCI-MIMc.js";import{_ as u}from"./Tag-CUzyky8W.js";import{d as sa,a as ca}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";import"./Icon-D97OEunV.js";const g=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ia=[{name:"variant",type:"'bordered' | 'shadow' | 'flat'",default:"bordered",description:"카드 스킨. flat은 card_ghost"},{name:"size",type:"'sm' | 'md' | 'lg' | 'compact'",default:"md",description:"card_sm · card_lg · card_compact"},{name:"hoverable",type:"boolean",default:"false",description:"호버 상승 효과 (card_hover)"},{name:"title",type:"string",default:"—",description:"내장 헤더 제목 (CardHeader 없이 사용 시)"},{name:"subtitle",type:"string",default:"—",description:"내장 헤더 부제"},{name:"tag",type:"string",default:"article",description:"루트 HTML 태그"},sa],la=g,ma=[{name:"title",type:"string",default:"—",description:"제목 (card_title)"},{name:"subtitle",type:"string",default:"—",description:"부제 (card_subtitle)"}],Ba=g,pa=[{name:"between",type:"boolean",default:"false",description:"양끝 정렬 (card_footer-between)"}],C=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],va=[{name:"media",description:"상단 미디어 영역 (card_media)"},{name:"header",description:"헤더 콘텐츠 (title·subtitle 대체)"},{name:"extra",description:"헤더 우측 액션 (card_extra)"},{name:"default",description:"본문·푸터 등 자식 (CardBody · CardFooter)"}],ya=[{name:"default",description:"헤더 메인 콘텐츠"},{name:"extra",description:"헤더 우측 액션"}],ha=[{name:"default",description:"카드 본문"}],_a=[{name:"default",description:"카드 푸터"}],Da=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Aa=[{name:"card",description:"카드 루트"},{name:"card_shadow · card_ghost · card_borderless",description:"스킨 변형"},{name:"card_sm · card_lg · card_compact",description:"크기·패딩"},{name:"card_hover · card_clickable · card_accent",description:"인터랙션·강조"},{name:"card_header · card_body · card_footer · card_media",description:"구조 파트"},{name:"card_title · card_subtitle · card_extra",description:"헤더 파트"},{name:"card_footer-between",description:"푸터 양끝 정렬"},{name:"card_deck · card_deck-2 · card_deck-3",description:"카드 그리드"},{name:"is-disabled",description:"비활성 상태"},...ca],ga=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ka=[{name:"--card-padding · --card-padding-sm · --card-padding-lg",default:"—",description:"카드 패딩"},{name:"--card-radius · --card-border-color · --card-shadow",default:"—",description:"모서리·테두리·그림자"},{name:"--card-title-size · --card-subtitle-size",default:"—",description:"제목·부제 타이포"},{name:"--card-accent-width · --card-hover-translate",default:"3px · -2px",description:"강조선·호버 이동"}],xa=[{title:"API · Card Props",tables:[{columns:g,rows:ia,codeColumn:"name"}]},{title:"API · CardHeader Props",tables:[{columns:la,rows:ma,codeColumn:"name"}]},{title:"API · CardFooter Props",tables:[{columns:Ba,rows:pa,codeColumn:"name"}]},{title:"API · Card Slots",tables:[{columns:C,rows:va,codeColumn:"name"}]},{title:"API · CardHeader Slots",tables:[{columns:C,rows:ya,codeColumn:"name"}]},{title:"API · CardBody Slots",tables:[{columns:C,rows:ha,codeColumn:"name"}]},{title:"API · CardFooter Slots",tables:[{columns:C,rows:_a,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Da,rows:Aa,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ga,rows:ka,codeColumn:"name"}]}],Ia={title:"Components/데이터 표시/Card",id:"components-card",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","shadow","flat"],type:{name:"enum",summary:"'bordered' | 'shadow' | 'flat'"}},size:{control:"select",options:["sm","md","lg","compact"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'compact'"}},hoverable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},subtitle:{control:"text",type:{name:"string",summary:"string"}},tag:{control:"select",options:["article","section","div"],type:{name:"enum",summary:"'article' | 'section' | 'div'"}}},parameters:{layout:"padded",apiSections:xa}},s={args:{variant:"bordered",size:"md",hoverable:!1,title:"제목",subtitle:"부제목",tag:"article"},render:Ca=>({components:{Card:a,CardHeader:d,CardBody:e,Button:r},setup(){return{args:Ca}},template:`<Card v-bind="args">
      <CardHeader title="카드 제목" />
      <CardBody><p>카드 본문입니다.</p></CardBody>
    </Card>`})},c={name:"기본",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card_header · card_body · card_footer 구조를 가집니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<Card style="max-width: 360px; width: 100%;">
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>
        카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.
      </CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>`})},i={name:"간단",parameters:{demoPreview:{stack:!1},docs:{description:{story:"header나 footer 없이 body만 사용하는 단순 카드입니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<Card variant="shadow" size="compact" style="max-width: 280px; width: 100%;">
      <CardBody>
        <p class="card_title">알림</p>
        새로운 메시지가 도착했습니다. 확인해 주세요.
      </CardBody>
    </Card>

    <Card size="compact" style="max-width: 280px; width: 100%;">
      <CardBody>
        컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.
      </CardBody>
    </Card>`})},l={name:"스킨",parameters:{demoPreview:{stack:!1},docs:{description:{story:"기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<div class="card_deck card_deck-2">
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
    </div>`})},m={name:"크기",parameters:{demoPreview:{stack:!1},docs:{description:{story:"size로 패딩과 제목 크기를 조절합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<div class="card_deck card_deck-2">
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
    </div>`})},B={name:"강조 테두리",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card_accent와 color_*로 왼쪽 강조선을 적용합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<div class="card_deck card_deck-2">
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
    </div>`})},p={name:"미디어",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card_media로 상단 이미지·썸네일 영역을 추가합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import Tag from '@uxkm/ui/components/Tag.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<Card hoverable variant="shadow" style="max-width: 320px; width: 100%;">
      <template #media>
        <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
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
    </Card>`})},v={name:"가로",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<Card class="card_horizontal" variant="shadow" style="max-width: 480px; width: 100%;">
      <template #media>
        <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" />
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
    </Card>`})},y={name:"아이콘 · 통계",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import Stat from '@uxkm/ui/components/Stat.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<div class="card_deck">
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
    </div>`})},h={name:"프로필",parameters:{demoPreview:{stack:!1},docs:{description:{story:"card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import Tag from '@uxkm/ui/components/Tag.vue';
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
    <CardFooter between>
      <span class="color_muted size_sm">서울 · 온라인</span>
      <Button variant="outline" color="primary" size="sm" label="팔로우" />
    </CardFooter>
  </Card>
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<Card variant="shadow" style="max-width: 320px; width: 100%;">
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
                <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
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
      <CardFooter between>
        <span class="color_muted size_sm">서울 · 온라인</span>
        <Button variant="outline" color="primary" size="sm" label="팔로우" />
      </CardFooter>
    </Card>`})},_={name:"클릭 가능",parameters:{demoPreview:{stack:!1},docs:{description:{story:"a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. hoverable과 함께 사용합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
<\/script>

<template>
  <div class="card_deck card_deck-2">
    <Card tag="a" href="#" hoverable class="card_clickable" @click.prevent>
      <CardBody>
        <h3 class="card_title">링크 카드</h3>
        <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
      </CardBody>
    </Card>
    <Card hoverable variant="shadow" class="card_clickable" tabindex="0" role="link">
      <CardBody>
        <h3 class="card_title">인터랙티브 카드</h3>
        <p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
      </CardBody>
    </Card>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<div class="card_deck card_deck-2">
      <Card tag="a" href="#" hoverable class="card_clickable" @click.prevent>
        <CardBody>
          <h3 class="card_title">링크 카드</h3>
          <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
      <Card hoverable variant="shadow" class="card_clickable" tabindex="0" role="link">
        <CardBody>
          <h3 class="card_title">인터랙티브 카드</h3>
          <p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
        </CardBody>
      </Card>
    </div>`})},D={name:"비활성",parameters:{demoPreview:{stack:!1},docs:{description:{story:"is-disabled로 비활성 상태를 표시합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
<\/script>

<template>
  <Card class="is-disabled" style="max-width: 280px; width: 100%;">
    <CardBody>
      <h3 class="card_title">비활성 카드</h3>
      <p class="card_subtitle">현재 이용할 수 없습니다.</p>
    </CardBody>
  </Card>
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<Card class="is-disabled" style="max-width: 280px; width: 100%;">
      <CardBody>
        <h3 class="card_title">비활성 카드</h3>
        <p class="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>`})},A={name:"카드 그리드",parameters:{demoPreview:{stack:!0},docs:{description:{story:"card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다."},source:{code:`<script setup>
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
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
</template>`,language:"vue"}}},render:()=>({components:{Card:a,Avatar:n,Button:r,CardBody:e,CardFooter:t,CardHeader:d,Stat:o,Tag:u},template:`<div class="card_deck">
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
    </div>`})};var k,x,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "bordered",
    size: "md",
    hoverable: false,
    title: "제목",
    subtitle: "부제목",
    tag: "article"
  },
  render: args => ({
    components: {
      Card,
      CardHeader,
      CardBody,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Card v-bind="args">
      <CardHeader title="카드 제목" />
      <CardBody><p>카드 본문입니다.</p></CardBody>
    </Card>\`
  })
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,f,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card_header · card_body · card_footer 구조를 가집니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardFooter from '@uxkm/ui/components/CardFooter.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\n<\/script>\\n\\n<template>\\n  <Card style=\\"max-width: 360px; width: 100%;\\">\\n    <CardHeader title=\\"카드 제목\\" subtitle=\\"부제목 또는 메타 정보\\" />\\n    <CardBody>\\n      카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.\\n    </CardBody>\\n    <CardFooter>\\n      <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"확인\\" />\\n      <Button variant=\\"ghost\\" size=\\"sm\\" label=\\"취소\\" />\\n    </CardFooter>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<Card style="max-width: 360px; width: 100%;">
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>
        카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.
      </CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>\`
  })
}`,...(F=(f=c.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var E,H,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "간단",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "header나 footer 없이 body만 사용하는 단순 카드입니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\n<\/script>\\n\\n<template>\\n  <Card variant=\\"shadow\\" size=\\"compact\\" style=\\"max-width: 280px; width: 100%;\\">\\n    <CardBody>\\n      <p class=\\"card_title\\">알림</p>\\n      새로운 메시지가 도착했습니다. 확인해 주세요.\\n    </CardBody>\\n  </Card>\\n  <Card size=\\"compact\\" style=\\"max-width: 280px; width: 100%;\\">\\n    <CardBody>\\n      컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.\\n    </CardBody>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<Card variant="shadow" size="compact" style="max-width: 280px; width: 100%;">
      <CardBody>
        <p class="card_title">알림</p>
        새로운 메시지가 도착했습니다. 확인해 주세요.
      </CardBody>
    </Card>

    <Card size="compact" style="max-width: 280px; width: 100%;">
      <CardBody>
        컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.
      </CardBody>
    </Card>\`
  })
}`,...(S=(H=i.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var z,T,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "스킨",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"card_deck card_deck-2\\">\\n    <Card>\\n      <CardBody>기본 — 테두리 · 그림자</CardBody>\\n    </Card>\\n    <Card variant=\\"shadow\\">\\n      <CardBody>Shadow — 그림자</CardBody>\\n    </Card>\\n    <Card class=\\"card_elevated\\">\\n      <CardBody>Elevated — 강한 그림자</CardBody>\\n    </Card>\\n    <Card variant=\\"flat\\">\\n      <CardBody>Ghost — 투명 배경</CardBody>\\n    </Card>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<div class="card_deck card_deck-2">
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
    </div>\`
  })
}`,...(P=(T=l.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var M,L,G;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "size로 패딩과 제목 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"card_deck card_deck-2\\">\\n    <Card size=\\"sm\\">\\n      <CardHeader title=\\"Small\\" />\\n      <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>\\n    </Card>\\n    <Card>\\n      <CardHeader title=\\"Medium\\" />\\n      <CardBody>기본 크기 카드입니다.</CardBody>\\n    </Card>\\n    <Card size=\\"lg\\">\\n      <CardHeader title=\\"Large\\" />\\n      <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>\\n    </Card>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<div class="card_deck card_deck-2">
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
    </div>\`
  })
}`,...(G=(L=m.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var I,V,$;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "강조 테두리",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card_accent와 color_*로 왼쪽 강조선을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"card_deck card_deck-2\\">\\n    <Card class=\\"card_accent color_primary\\">\\n      <CardBody>\\n        <p class=\\"card_title\\">정보</p>\\n        시스템 업데이트가 예정되어 있습니다.\\n      </CardBody>\\n    </Card>\\n    <Card class=\\"card_accent color_success\\">\\n      <CardBody>\\n        <p class=\\"card_title\\">성공</p>\\n        작업이 정상적으로 완료되었습니다.\\n      </CardBody>\\n    </Card>\\n    <Card class=\\"card_accent color_warning\\">\\n      <CardBody>\\n        <p class=\\"card_title\\">주의</p>\\n        저장 공간이 부족합니다.\\n      </CardBody>\\n    </Card>\\n    <Card class=\\"card_accent color_danger\\">\\n      <CardBody>\\n        <p class=\\"card_title\\">오류</p>\\n        연결에 실패했습니다. 다시 시도해 주세요.\\n      </CardBody>\\n    </Card>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<div class="card_deck card_deck-2">
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
    </div>\`
  })
}`,...($=(V=B.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var R,K,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "미디어",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card_media로 상단 이미지·썸네일 영역을 추가합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardFooter from '@uxkm/ui/components/CardFooter.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Card hoverable variant=\\"shadow\\" style=\\"max-width: 320px; width: 100%;\\">\\n    <template #media>\\n      <div class=\\"card_media card_media-placeholder\\" role=\\"img\\" aria-label=\\"프로젝트 썸네일\\">\\n        <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" aria-hidden=\\"true\\">\\n          <rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" />\\n          <circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\" />\\n          <path d=\\"M21 15l-5-5L5 21\\" />\\n        </svg>\\n      </div>\\n    </template>\\n    <CardHeader>\\n      <div class=\\"card_header-row\\">\\n        <h3 class=\\"card_title\\">프로젝트 Alpha</h3>\\n        <Tag size=\\"sm\\" color=\\"primary\\" label=\\"진행 중\\" />\\n      </div>\\n      <p class=\\"card_subtitle\\">업데이트 · 2일 전</p>\\n    </CardHeader>\\n    <CardBody>\\n      디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.\\n    </CardBody>\\n    <CardFooter between>\\n      <span class=\\"color_muted size_sm\\">3명 참여</span>\\n      <Button variant=\\"text\\" color=\\"primary\\" size=\\"sm\\" label=\\"자세히\\" />\\n    </CardFooter>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<Card hoverable variant="shadow" style="max-width: 320px; width: 100%;">
      <template #media>
        <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
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
    </Card>\`
  })
}`,...(O=(K=p.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var W,j,q;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "가로",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardFooter from '@uxkm/ui/components/CardFooter.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\n<\/script>\\n\\n<template>\\n  <Card class=\\"card_horizontal\\" variant=\\"shadow\\" style=\\"max-width: 480px; width: 100%;\\">\\n    <template #media>\\n      <div class=\\"card_media card_media-placeholder\\" role=\\"img\\" aria-label=\\"문서 썸네일\\">\\n        <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" aria-hidden=\\"true\\">\\n          <path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\" />\\n          <path d=\\"M14 2v6h6\\" />\\n        </svg>\\n      </div>\\n    </template>\\n    <div class=\\"card_inner\\">\\n      <CardHeader title=\\"가이드 문서\\" />\\n      <CardBody>\\n        HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.\\n      </CardBody>\\n      <CardFooter>\\n        <a href=\\"#\\" class=\\"link color_primary size_sm\\" @click.prevent>문서 보기</a>\\n      </CardFooter>\\n    </div>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<Card class="card_horizontal" variant="shadow" style="max-width: 480px; width: 100%;">
      <template #media>
        <div class="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" />
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
    </Card>\`
  })
}`,...(q=(j=v.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,N,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "아이콘 · 통계",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport Stat from '@uxkm/ui/components/Stat.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"card_deck\\">\\n    <Card variant=\\"shadow\\" hoverable>\\n      <CardBody>\\n        <span class=\\"card_icon color_primary\\" aria-hidden=\\"true\\">\\n          <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n            <path d=\\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\\" />\\n          </svg>\\n        </span>\\n        <h3 class=\\"card_title\\">빠른 성능</h3>\\n        <p class=\\"card_subtitle\\">가벼운 번들, 빠른 로딩</p>\\n      </CardBody>\\n    </Card>\\n    <Card variant=\\"shadow\\" hoverable>\\n      <CardBody>\\n        <span class=\\"card_icon color_success\\" aria-hidden=\\"true\\">\\n          <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\">\\n            <path d=\\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\\" />\\n          </svg>\\n        </span>\\n        <h3 class=\\"card_title\\">접근성</h3>\\n        <p class=\\"card_subtitle\\">WCAG 2.2 AA 기준</p>\\n      </CardBody>\\n    </Card>\\n    <Card variant=\\"shadow\\">\\n      <CardBody>\\n        <Stat title=\\"월간 활성 사용자\\" value=\\"24.5K\\" description=\\"+18.2%\\" trend-color=\\"success\\" />\\n      </CardBody>\\n    </Card>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<div class="card_deck">
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
    </div>\`
  })
}`,...(Q=(N=y.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "프로필",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardFooter from '@uxkm/ui/components/CardFooter.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\n<\/script>\\n\\n<template>\\n  <Card variant=\\"shadow\\" style=\\"max-width: 320px; width: 100%;\\">\\n    <CardHeader>\\n      <div class=\\"card_header-row\\">\\n        <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n        <div>\\n          <h3 class=\\"card_title\\">홍길동</h3>\\n          <p class=\\"card_subtitle\\">프론트엔드 개발자</p>\\n        </div>\\n      </div>\\n      <template #extra>\\n        <Button variant=\\"ghost\\" size=\\"sm\\" icon-only aria-label=\\"더 보기\\">\\n          <template #icon-before>\\n            <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" aria-hidden=\\"true\\">\\n              <circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\" />\\n              <circle cx=\\"19\\" cy=\\"12\\" r=\\"1\\" />\\n              <circle cx=\\"5\\" cy=\\"12\\" r=\\"1\\" />\\n            </svg>\\n          </template>\\n        </Button>\\n      </template>\\n    </CardHeader>\\n    <CardBody>\\n      <div class=\\"tag_group tag_group-tight\\">\\n        <Tag size=\\"sm\\" color=\\"primary\\" label=\\"React\\" />\\n        <Tag size=\\"sm\\" color=\\"primary\\" label=\\"TypeScript\\" />\\n        <Tag size=\\"sm\\" color=\\"default\\" label=\\"SCSS\\" />\\n      </div>\\n    </CardBody>\\n    <CardFooter between>\\n      <span class=\\"color_muted size_sm\\">서울 · 온라인</span>\\n      <Button variant=\\"outline\\" color=\\"primary\\" size=\\"sm\\" label=\\"팔로우\\" />\\n    </CardFooter>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<Card variant="shadow" style="max-width: 320px; width: 100%;">
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
                <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
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
      <CardFooter between>
        <span class="color_muted size_sm">서울 · 온라인</span>
        <Button variant="outline" color="primary" size="sm" label="팔로우" />
      </CardFooter>
    </Card>\`
  })
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,aa,ra;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "클릭 가능",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. hoverable과 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"card_deck card_deck-2\\">\\n    <Card tag=\\"a\\" href=\\"#\\" hoverable class=\\"card_clickable\\" @click.prevent>\\n      <CardBody>\\n        <h3 class=\\"card_title\\">링크 카드</h3>\\n        <p class=\\"card_subtitle\\">클릭하면 상세 페이지로 이동합니다.</p>\\n      </CardBody>\\n    </Card>\\n    <Card hoverable variant=\\"shadow\\" class=\\"card_clickable\\" tabindex=\\"0\\" role=\\"link\\">\\n      <CardBody>\\n        <h3 class=\\"card_title\\">인터랙티브 카드</h3>\\n        <p class=\\"card_subtitle\\">tabindex와 role로 키보드 접근을 지원합니다.</p>\\n      </CardBody>\\n    </Card>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<div class="card_deck card_deck-2">
      <Card tag="a" href="#" hoverable class="card_clickable" @click.prevent>
        <CardBody>
          <h3 class="card_title">링크 카드</h3>
          <p class="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
      <Card hoverable variant="shadow" class="card_clickable" tabindex="0" role="link">
        <CardBody>
          <h3 class="card_title">인터랙티브 카드</h3>
          <p class="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
        </CardBody>
      </Card>
    </div>\`
  })
}`,...(ra=(aa=_.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var ea,da,na;D.parameters={...D.parameters,docs:{...(ea=D.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "is-disabled로 비활성 상태를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\n<\/script>\\n\\n<template>\\n  <Card class=\\"is-disabled\\" style=\\"max-width: 280px; width: 100%;\\">\\n    <CardBody>\\n      <h3 class=\\"card_title\\">비활성 카드</h3>\\n      <p class=\\"card_subtitle\\">현재 이용할 수 없습니다.</p>\\n    </CardBody>\\n  </Card>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<Card class="is-disabled" style="max-width: 280px; width: 100%;">
      <CardBody>
        <h3 class="card_title">비활성 카드</h3>
        <p class="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>\`
  })
}`,...(na=(da=D.parameters)==null?void 0:da.docs)==null?void 0:na.source}}};var ta,oa,ua;A.parameters={...A.parameters,docs:{...(ta=A.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: "카드 그리드",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Card from '@uxkm/ui/components/Card.vue';\\nimport CardBody from '@uxkm/ui/components/CardBody.vue';\\nimport CardHeader from '@uxkm/ui/components/CardHeader.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"card_deck\\">\\n    <Card hoverable>\\n      <CardHeader title=\\"Feature A\\" />\\n      <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>\\n    </Card>\\n    <Card hoverable>\\n      <CardHeader title=\\"Feature B\\" />\\n      <CardBody>접근성을 고려한 마크업 구조.</CardBody>\\n    </Card>\\n    <Card hoverable>\\n      <CardHeader title=\\"Feature C\\" />\\n      <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>\\n    </Card>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Card,
      Avatar,
      Button,
      CardBody,
      CardFooter,
      CardHeader,
      Stat,
      Tag
    },
    template: \`<div class="card_deck">
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
    </div>\`
  })
}`,...(ua=(oa=A.parameters)==null?void 0:oa.docs)==null?void 0:ua.source}}};const Va=["Playground","Basic","Simple","Skin","Size","Accent","Media","Horizontal","Icon","Profile","Clickable","Disabled","Grid"];export{B as Accent,c as Basic,_ as Clickable,D as Disabled,A as Grid,v as Horizontal,y as Icon,p as Media,s as Playground,h as Profile,i as Simple,m as Size,l as Skin,Va as __namedExportsOrder,Ia as default};

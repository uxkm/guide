import{L as e,Y as t,b as n,d as r,i,m as a,st as o,y as s}from"./CCnt5OSV.js";import{a as c}from"./jFoqhwDN.js";import{l,t as u}from"./DkmWXf_S.js";import{t as d}from"./DD3RWXAt.js";import{t as f}from"./D6IbhUhQ.js";import{t as p}from"./Kdlvr--h.js";import{n as m,t as h}from"./B1RpTY2w2.js";var g=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],_=[{name:`bordered`,type:`boolean`,default:`false`,description:`테두리 (list_bordered)`},{name:`split`,type:`boolean`,default:`false`,description:`항목 구분선 (list_divider)`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비 100% (list_block, inline 레이아웃에서 auto 너비 덮어씀)`},{name:`size`,type:`'md' | 'compact'`,default:`md`,description:`compact는 list_compact`},{name:`variant`,type:`'default' | 'bullet' | 'ordered' | 'definition'`,default:`default`,description:`목록 유형 — bullet · ordered · definition 스킨 클래스 자동 적용`},{name:`tag`,type:`'ul' | 'ol' | 'dl' | 'div'`,default:`variant 기준`,description:`루트 태그 — 미지정 시 variant에 따라 ul · ol · dl 결정, div는 role="list"`},{name:`layout`,type:`'block' | 'inline'`,default:`block`,description:`block은 전체 너비 세로 배치, inline은 너비 auto + 제목·내용 가로 배치 (list_inline)`},{name:`inlineLabelWidth`,type:`string`,default:`—`,description:`인라인 정의 목록 dt 열 너비 (layout="inline"일 때, --list-inline-label-width)`},{name:`inlineGap`,type:`string`,default:`—`,description:`인라인 정의 목록 dt · dd 열 간격 (layout="inline"일 때, --list-inline-gap)`},{name:`descAlign`,type:`'left' | 'right'`,default:`left`,description:`정의 목록 dd 텍스트 정렬 (variant="definition"일 때, right는 list_desc-right)`}],v=g,y=[{name:`title`,type:`string`,default:`—`,description:`항목 제목 (list_title)`},{name:`description`,type:`string`,default:`—`,description:`설명 (list_desc)`},{name:`meta`,type:`string`,default:`—`,description:`보조 메타 (list_meta)`},{name:`tag`,type:`'auto' | 'li' | 'dt' | 'dd'`,default:`auto`,description:`항목 태그 — auto는 ul/ol→li, div→div+role=listitem, dl+title·description→dt·dd`}],b=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],x=[{name:`default`,description:`ListItem 자식`}],S=[{name:`prefix`,description:`앞쪽 아바타·아이콘 등`},{name:`default`,description:`본문 (title·description 대체)`},{name:`extra`,description:`우측 보조 텍스트 (list_extra)`},{name:`actions`,description:`우측 액션 (list_action)`}],C=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],w=[{name:`list`,description:`리스트 루트`},{name:`list_bordered · list_divider · list_compact`,description:`스타일 변형`},{name:`list_bullet · list_bullet-circle · list_bullet-square`,description:`불릿 목록 (ul)`},{name:`list_ordered · list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman`,description:`번호 목록 (ol) — 소문자·대문자 알파벳·로마 숫자`},{name:`list_ordered-outline · list_ordered-dash`,description:`계층 번호 — 뎁스별 1.1 · 1-1 형식 (중첩 ol에 동일 클래스 적용)`},{name:`list_ordered-depth`,description:`뎁스별 번호 형식 자동 전환 (1 → a → i → 1 …)`},{name:`list_definition`,description:`정의 목록 (dl) — dt · dd 용어-설명 쌍`},{name:`list_inline`,description:`인라인 배치 — width auto, 제목·내용 가로 (layout="inline")`},{name:`list_block`,description:`부모 너비 100% (block prop)`},{name:`list_desc-right`,description:`정의 목록 dd 우측 정렬 (descAlign="right")`},{name:`list_item`,description:`항목 (li · div[role=listitem])`},{name:`list_content · list_title · list_desc · list_meta`,description:`항목 콘텐츠 파트`},{name:`list_extra · list_action`,description:`우측 영역`},{name:`list_interactive`,description:`클릭 가능 항목`},{name:`list_link`,description:`항목 링크·버튼 — data-ripple 로 파장`},...f],T=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],E=[{name:`--list-gap`,default:`var(--space-xs)`,description:`항목 간격`},{name:`--list-item-padding-y · --list-item-padding-x`,default:`0.65rem · 1rem`,description:`항목 패딩`},{name:`--list-title-size · --list-desc-size · --list-meta-size`,default:`—`,description:`텍스트 크기`},{name:`--list-inline-label-width · --list-inline-gap`,default:`8rem · var(--space-md)`,description:`인라인 정의 목록 열 너비 · 열 간격`}],D={type:`button`,class:`list_link`,"data-ripple":``},O={type:`button`,class:`list_link`,"data-ripple":``},k={class:`card card_shadow`},A={class:`card_header`},j={class:`card_header-main`},M={class:`card_header-row`},N={class:`card_footer card_footer-between`},P={title:`List | HTML Components`,activeNav:`list`,pageTitle:`List`},F={__name:`list`,setup(f){return(f,P)=>(e(),a(i,null,[P[67]||=r(`div`,{class:`page_intro`},[r(`h1`,null,`List`),r(`p`,{class:`lead`},`항목을 세로 목록으로 표시하는 리스트 컴포넌트입니다. 불릿·번호 유형과 인터랙티브 항목을 지원합니다.`)],-1),n(d,{"heading-id":`basic-heading`,title:`기본`,description:`list_title · list_meta · list_desc로 항목 내용을 구성합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List>
    <ListItem title="홍길동" meta="프론트엔드 개발자">
      <template #prefix>
        <Avatar color="primary" initials="홍" aria-hidden />
      </template>
    </ListItem>
    <ListItem title="김철수" meta="백엔드 개발자">
      <template #prefix>
        <Avatar color="success" initials="김" aria-hidden />
      </template>
    </ListItem>
    <ListItem title="이영희" meta="UI/UX 디자이너">
      <template #prefix>
        <Avatar color="warning" initials="이" aria-hidden />
      </template>
    </ListItem>
  </List>
</template>`},{default:t(()=>[n(m,null,{default:t(()=>[n(h,{title:`홍길동`,meta:`프론트엔드 개발자`},{prefix:t(()=>[n(p,{color:`primary`,initials:`홍`,"aria-hidden":``})]),_:1}),n(h,{title:`김철수`,meta:`백엔드 개발자`},{prefix:t(()=>[n(p,{color:`success`,initials:`김`,"aria-hidden":``})]),_:1}),n(h,{title:`이영희`,meta:`UI/UX 디자이너`},{prefix:t(()=>[n(p,{color:`warning`,initials:`이`,"aria-hidden":``})]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`bullet-heading`,title:`불릿`,description:`class에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet">
    <ListItem>디자인 토큰 정의</ListItem>
    <ListItem>컴포넌트 문서화</ListItem>
    <ListItem>접근성 검토</ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{class:`list_bullet`},{default:t(()=>[n(h,null,{default:t(()=>[...P[1]||=[s(`디자인 토큰 정의`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[2]||=[s(`컴포넌트 문서화`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[3]||=[s(`접근성 검토`,-1)]]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`bullet-rich-heading`,title:`불릿 · 본문`,description:`title · description prop으로 제목·설명을 함께 표시합니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet">
    <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
    <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
    <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
  </List>
</template>`},{default:t(()=>[n(m,{class:`list_bullet`},{default:t(()=>[n(h,{title:`HTML 마크업`,description:`시맨틱 태그와 ARIA 속성을 사용합니다.`}),n(h,{title:`SCSS 스타일`,description:`OOCSS 패턴으로 구조와 스킨을 분리합니다.`}),n(h,{title:`접근성`,description:`WCAG 2.2 AA 기준을 준수합니다.`})]),_:1})]),_:1}),n(d,{"heading-id":`bullet-variant-heading`,title:`불릿 변형`,description:`circle · square 마커와 중첩 목록을 지원합니다.`,stack:``,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet list_bullet-circle">
    <ListItem>원형 마커 항목 A</ListItem>
    <ListItem>원형 마커 항목 B</ListItem>
  </List>
  <List class="list_bullet list_bullet-square">
    <ListItem>사각 마커 항목 A</ListItem>
    <ListItem>사각 마커 항목 B</ListItem>
  </List>
  <List class="list_bullet">
    <ListItem>
      레이아웃
      <List class="list_bullet">
        <ListItem>Container</ListItem>
        <ListItem>Grid</ListItem>
      </List>
    </ListItem>
    <ListItem>
      기본 요소
      <List class="list_bullet">
        <ListItem>Button</ListItem>
        <ListItem>Typography</ListItem>
      </List>
    </ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{class:`list_bullet list_bullet-circle`},{default:t(()=>[n(h,null,{default:t(()=>[...P[4]||=[s(`원형 마커 항목 A`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[5]||=[s(`원형 마커 항목 B`,-1)]]),_:1})]),_:1}),n(m,{class:`list_bullet list_bullet-square`},{default:t(()=>[n(h,null,{default:t(()=>[...P[6]||=[s(`사각 마커 항목 A`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[7]||=[s(`사각 마커 항목 B`,-1)]]),_:1})]),_:1}),n(m,{class:`list_bullet`},{default:t(()=>[n(h,null,{default:t(()=>[P[10]||=s(` 레이아웃 `,-1),n(m,{class:`list_bullet`},{default:t(()=>[n(h,null,{default:t(()=>[...P[8]||=[s(`Container`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[9]||=[s(`Grid`,-1)]]),_:1})]),_:1})]),_:1}),n(h,null,{default:t(()=>[P[13]||=s(` 기본 요소 `,-1),n(m,{class:`list_bullet`},{default:t(()=>[n(h,null,{default:t(()=>[...P[11]||=[s(`Button`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[12]||=[s(`Typography`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`ordered-heading`,title:`번호`,description:`tag="ol"과 list_ordered 클래스로 순서 목록을 만듭니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List tag="ol" class="list_ordered">
    <ListItem>요구사항 분석</ListItem>
    <ListItem>와이어프레임 작성</ListItem>
    <ListItem>프로토타입 검증</ListItem>
    <ListItem>개발 및 배포</ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{tag:`ol`,class:`list_ordered`},{default:t(()=>[n(h,null,{default:t(()=>[...P[14]||=[s(`요구사항 분석`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[15]||=[s(`와이어프레임 작성`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[16]||=[s(`프로토타입 검증`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[17]||=[s(`개발 및 배포`,-1)]]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`ordered-variant-heading`,title:`번호 변형`,description:`list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다.`,stack:``,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List tag="ol" class="list_ordered list_ordered-alpha">
    <ListItem>첫 번째 옵션</ListItem>
    <ListItem>두 번째 옵션</ListItem>
    <ListItem>세 번째 옵션</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-roman">
    <ListItem>서론</ListItem>
    <ListItem>본론</ListItem>
    <ListItem>결론</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-upper-alpha">
    <ListItem>항목 A</ListItem>
    <ListItem>항목 B</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-upper-roman">
    <ListItem>Chapter I</ListItem>
    <ListItem>Chapter II</ListItem>
  </List>
  <List tag="ol" class="list_ordered">
    <ListItem title="프로젝트 설정" description="저장소 클론 및 의존성 설치" />
    <ListItem title="개발 서버 실행" description="pnpm dev로 로컬 미리보기">
      <List tag="ol" class="list_ordered list_ordered-alpha">
        <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>
        <ListItem>pnpm install 실행</ListItem>
        <ListItem>pnpm dev 실행</ListItem>
      </List>
    </ListItem>
    <ListItem title="빌드" description="pnpm build로 .output/ 출력" />
  </List>
</template>`},{default:t(()=>[n(m,{tag:`ol`,class:`list_ordered list_ordered-alpha`},{default:t(()=>[n(h,null,{default:t(()=>[...P[18]||=[s(`첫 번째 옵션`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[19]||=[s(`두 번째 옵션`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[20]||=[s(`세 번째 옵션`,-1)]]),_:1})]),_:1}),n(m,{tag:`ol`,class:`list_ordered list_ordered-roman`},{default:t(()=>[n(h,null,{default:t(()=>[...P[21]||=[s(`서론`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[22]||=[s(`본론`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[23]||=[s(`결론`,-1)]]),_:1})]),_:1}),n(m,{tag:`ol`,class:`list_ordered list_ordered-upper-alpha`},{default:t(()=>[n(h,null,{default:t(()=>[...P[24]||=[s(`항목 A`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[25]||=[s(`항목 B`,-1)]]),_:1})]),_:1}),n(m,{tag:`ol`,class:`list_ordered list_ordered-upper-roman`},{default:t(()=>[n(h,null,{default:t(()=>[...P[26]||=[s(`Chapter I`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[27]||=[s(`Chapter II`,-1)]]),_:1})]),_:1}),n(m,{tag:`ol`,class:`list_ordered`},{default:t(()=>[n(h,{title:`프로젝트 설정`,description:`저장소 클론 및 의존성 설치`}),n(h,{title:`개발 서버 실행`,description:`pnpm dev로 로컬 미리보기`},{default:t(()=>[n(m,{tag:`ol`,class:`list_ordered list_ordered-alpha`},{default:t(()=>[n(h,null,{default:t(()=>[...P[28]||=[s(`터미널에서 프로젝트 폴더 이동`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[29]||=[s(`pnpm install 실행`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[30]||=[s(`pnpm dev 실행`,-1)]]),_:1})]),_:1})]),_:1}),n(h,{title:`빌드`,description:`pnpm build로 .output/ 출력`})]),_:1})]),_:1}),n(d,{"heading-id":`ordered-hierarchical-heading`,title:`번호 · 계층`,description:`list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다.`,stack:``,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List tag="ol" class="list_ordered list_ordered-outline">
    <ListItem>1단계 — 요구사항 정의</ListItem>
    <ListItem>
      설계
      <List tag="ol" class="list_ordered list_ordered-outline">
        <ListItem>정보 구조</ListItem>
        <ListItem>
          UI 설계
          <List tag="ol" class="list_ordered list_ordered-outline">
            <ListItem>와이어프레임</ListItem>
            <ListItem>프로토타입</ListItem>
          </List>
        </ListItem>
      </List>
    </ListItem>
    <ListItem>개발 및 배포</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-dash">
    <ListItem>1단계 — 환경 구성</ListItem>
    <ListItem>
      개발
      <List tag="ol" class="list_ordered list_ordered-dash">
        <ListItem>컴포넌트 구현</ListItem>
        <ListItem>
          문서화
          <List tag="ol" class="list_ordered list_ordered-dash">
            <ListItem>API 표</ListItem>
            <ListItem>데모 예제</ListItem>
          </List>
        </ListItem>
      </List>
    </ListItem>
    <ListItem>QA 및 릴리스</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-depth">
    <ListItem>레이아웃</ListItem>
    <ListItem>
      기본 요소
      <List tag="ol" class="list_ordered list_ordered-depth">
        <ListItem>Button</ListItem>
        <ListItem>
          Form
          <List tag="ol" class="list_ordered list_ordered-depth">
            <ListItem>Input</ListItem>
            <ListItem>Select</ListItem>
          </List>
        </ListItem>
      </List>
    </ListItem>
    <ListItem>피드백</ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{tag:`ol`,class:`list_ordered list_ordered-outline`},{default:t(()=>[n(h,null,{default:t(()=>[...P[31]||=[s(`1단계 — 요구사항 정의`,-1)]]),_:1}),n(h,null,{default:t(()=>[P[36]||=s(` 설계 `,-1),n(m,{tag:`ol`,class:`list_ordered list_ordered-outline`},{default:t(()=>[n(h,null,{default:t(()=>[...P[32]||=[s(`정보 구조`,-1)]]),_:1}),n(h,null,{default:t(()=>[P[35]||=s(` UI 설계 `,-1),n(m,{tag:`ol`,class:`list_ordered list_ordered-outline`},{default:t(()=>[n(h,null,{default:t(()=>[...P[33]||=[s(`와이어프레임`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[34]||=[s(`프로토타입`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(h,null,{default:t(()=>[...P[37]||=[s(`개발 및 배포`,-1)]]),_:1})]),_:1}),n(m,{tag:`ol`,class:`list_ordered list_ordered-dash`},{default:t(()=>[n(h,null,{default:t(()=>[...P[38]||=[s(`1단계 — 환경 구성`,-1)]]),_:1}),n(h,null,{default:t(()=>[P[43]||=s(` 개발 `,-1),n(m,{tag:`ol`,class:`list_ordered list_ordered-dash`},{default:t(()=>[n(h,null,{default:t(()=>[...P[39]||=[s(`컴포넌트 구현`,-1)]]),_:1}),n(h,null,{default:t(()=>[P[42]||=s(` 문서화 `,-1),n(m,{tag:`ol`,class:`list_ordered list_ordered-dash`},{default:t(()=>[n(h,null,{default:t(()=>[...P[40]||=[s(`API 표`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[41]||=[s(`데모 예제`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(h,null,{default:t(()=>[...P[44]||=[s(`QA 및 릴리스`,-1)]]),_:1})]),_:1}),n(m,{tag:`ol`,class:`list_ordered list_ordered-depth`},{default:t(()=>[n(h,null,{default:t(()=>[...P[45]||=[s(`레이아웃`,-1)]]),_:1}),n(h,null,{default:t(()=>[P[50]||=s(` 기본 요소 `,-1),n(m,{tag:`ol`,class:`list_ordered list_ordered-depth`},{default:t(()=>[n(h,null,{default:t(()=>[...P[46]||=[s(`Button`,-1)]]),_:1}),n(h,null,{default:t(()=>[P[49]||=s(` Form `,-1),n(m,{tag:`ol`,class:`list_ordered list_ordered-depth`},{default:t(()=>[n(h,null,{default:t(()=>[...P[47]||=[s(`Input`,-1)]]),_:1}),n(h,null,{default:t(()=>[...P[48]||=[s(`Select`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(h,null,{default:t(()=>[...P[51]||=[s(`피드백`,-1)]]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`bullet-link-heading`,title:`불릿 · 링크`,description:`불릿 목록에서도 li 안에 a.list_link를 사용합니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet">
    <ListItem>
      <a href="/components/button" class="list_link" data-ripple>
        <span class="list_title">Button</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="/components/typography" class="list_link" data-ripple>
        <span class="list_title">Typography</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="/components/icon" class="list_link" data-ripple>
        <span class="list_title">Icon</span>
      </a>
    </ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{class:`list_bullet`},{default:t(()=>[n(h,null,{default:t(()=>[...P[52]||=[r(`a`,{href:`/components/button`,class:`list_link`,"data-ripple":``},[r(`span`,{class:`list_title`},`Button`)],-1)]]),_:1}),n(h,null,{default:t(()=>[...P[53]||=[r(`a`,{href:`/components/typography`,class:`list_link`,"data-ripple":``},[r(`span`,{class:`list_title`},`Typography`)],-1)]]),_:1}),n(h,null,{default:t(()=>[...P[54]||=[r(`a`,{href:`/components/icon`,class:`list_link`,"data-ripple":``},[r(`span`,{class:`list_title`},`Icon`)],-1)]]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`bordered-heading`,title:`테두리`,description:`bordered prop으로 각 항목에 테두리를 적용합니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List bordered>
    <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
    <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
    <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
  </List>
</template>`},{default:t(()=>[n(m,{bordered:``},{default:t(()=>[n(h,{title:`알림 설정`,description:`이메일 및 푸시 알림을 관리합니다.`}),n(h,{title:`프로필 편집`,description:`이름, 사진, 소개를 변경합니다.`}),n(h,{title:`보안`,description:`비밀번호 및 2단계 인증을 설정합니다.`})]),_:1})]),_:1}),n(d,{"heading-id":`link-heading`,title:`링크`,description:`페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List split>
    <ListItem>
      <a href="/components/button" class="list_link" data-ripple>
        <div class="list_content">
          <span class="list_title">대시보드</span>
        </div>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="/components/card" class="list_link" data-ripple>
        <div class="list_content">
          <span class="list_title">프로젝트</span>
        </div>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="/getting-started" class="list_link" data-ripple>
        <div class="list_content">
          <span class="list_title">설정</span>
        </div>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </a>
    </ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{split:``},{default:t(()=>[n(h,null,{default:t(()=>[...P[55]||=[r(`a`,{href:`/components/button`,class:`list_link`,"data-ripple":``},[r(`div`,{class:`list_content`},[r(`span`,{class:`list_title`},`대시보드`)]),r(`span`,{class:`list_action color_muted`,"aria-hidden":`true`},`›`)],-1)]]),_:1}),n(h,null,{default:t(()=>[...P[56]||=[r(`a`,{href:`/components/card`,class:`list_link`,"data-ripple":``},[r(`div`,{class:`list_content`},[r(`span`,{class:`list_title`},`프로젝트`)]),r(`span`,{class:`list_action color_muted`,"aria-hidden":`true`},`›`)],-1)]]),_:1}),n(h,null,{default:t(()=>[...P[57]||=[r(`a`,{href:`/getting-started`,class:`list_link`,"data-ripple":``},[r(`div`,{class:`list_content`},[r(`span`,{class:`list_title`},`설정`)]),r(`span`,{class:`list_action color_muted`,"aria-hidden":`true`},`›`)],-1)]]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`button-heading`,title:`버튼`,description:`같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List bordered>
    <ListItem>
      <button type="button" class="list_link" data-ripple>
        <Avatar color="primary" initials="홍" aria-hidden />
        <span class="list_content">
          <span class="list_title">홍길동</span>
          <span class="list_meta">메시지 보내기</span>
        </span>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </button>
    </ListItem>
    <ListItem>
      <button type="button" class="list_link" data-ripple>
        <Avatar color="success" initials="김" aria-hidden />
        <span class="list_content">
          <span class="list_title">김철수</span>
          <span class="list_meta">메시지 보내기</span>
        </span>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </button>
    </ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{bordered:``},{default:t(()=>[n(h,null,{default:t(()=>[r(`button`,D,[n(p,{color:`primary`,initials:`홍`,"aria-hidden":``}),P[58]||=r(`span`,{class:`list_content`},[r(`span`,{class:`list_title`},`홍길동`),r(`span`,{class:`list_meta`},`메시지 보내기`)],-1),P[59]||=r(`span`,{class:`list_action color_muted`,"aria-hidden":`true`},`›`,-1)])]),_:1}),n(h,null,{default:t(()=>[r(`button`,O,[n(p,{color:`success`,initials:`김`,"aria-hidden":``}),P[60]||=r(`span`,{class:`list_content`},[r(`span`,{class:`list_title`},`김철수`),r(`span`,{class:`list_meta`},`메시지 보내기`)],-1),P[61]||=r(`span`,{class:`list_action color_muted`,"aria-hidden":`true`},`›`,-1)])]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`card-heading`,title:`카드 혼합`,description:`list_cards 클래스로 li 안에 card를 배치합니다.`,code:`<script setup>
import Avatar from '@/components/Avatar.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List class="list_cards">
    <ListItem>
      <a href="/components/card" class="card card_shadow card_clickable card_horizontal">
        <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <div class="card_inner">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title">프로젝트 Alpha</h3>
              <p class="card_subtitle">진행 중 · 2일 전</p>
            </div>
          </div>
          <div class="card_body">
            디자인 시스템 구축 및 컴포넌트 라이브러리 개발
          </div>
        </div>
      </a>
    </ListItem>
    <ListItem>
      <article class="card card_shadow">
        <div class="card_header">
          <div class="card_header-main">
            <div class="card_header-row">
              <Avatar color="warning" initials="이" aria-hidden />
              <div>
                <h3 class="card_title">이영희</h3>
                <p class="card_subtitle">UI/UX 디자이너</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card_body">
          <p class="list_desc">새 디자인 시안을 공유했습니다.</p>
        </div>
        <div class="card_footer card_footer-between">
          <span class="color_muted size_sm">10분 전</span>
          <a href="#" class="link color_primary size_sm" @click.prevent>보기</a>
        </div>
      </article>
    </ListItem>
    <ListItem>
      <a href="/components/list" class="card card_accent color_primary card_clickable">
        <div class="card_body">
          <p class="card_title" style="margin-bottom: 0.25rem;">알림</p>
          <p class="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
        </div>
      </a>
    </ListItem>
  </List>
</template>`},{default:t(()=>[n(m,{class:`list_cards`},{default:t(()=>[n(h,null,{default:t(()=>[...P[62]||=[r(`a`,{href:`/components/card`,class:`card card_shadow card_clickable card_horizontal`},[r(`div`,{class:`card_media card_media-placeholder`,role:`img`,"aria-label":`프로젝트 썸네일`},[r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`,"aria-hidden":`true`},[r(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),r(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),r(`path`,{d:`M21 15l-5-5L5 21`})])]),r(`div`,{class:`card_inner`},[r(`div`,{class:`card_header`},[r(`div`,{class:`card_header-main`},[r(`h3`,{class:`card_title`},`프로젝트 Alpha`),r(`p`,{class:`card_subtitle`},`진행 중 · 2일 전`)])]),r(`div`,{class:`card_body`},` 디자인 시스템 구축 및 컴포넌트 라이브러리 개발 `)])],-1)]]),_:1}),n(h,null,{default:t(()=>[r(`article`,k,[r(`div`,A,[r(`div`,j,[r(`div`,M,[n(p,{color:`warning`,initials:`이`,"aria-hidden":``}),P[63]||=r(`div`,null,[r(`h3`,{class:`card_title`},`이영희`),r(`p`,{class:`card_subtitle`},`UI/UX 디자이너`)],-1)])])]),P[65]||=r(`div`,{class:`card_body`},[r(`p`,{class:`list_desc`},`새 디자인 시안을 공유했습니다.`)],-1),r(`div`,N,[P[64]||=r(`span`,{class:`color_muted size_sm`},`10분 전`,-1),r(`a`,{href:`#`,class:`link color_primary size_sm`,onClick:P[0]||=c(()=>{},[`prevent`])},`보기`)])])]),_:1}),n(h,null,{default:t(()=>[...P[66]||=[r(`a`,{href:`/components/list`,class:`card card_accent color_primary card_clickable`},[r(`div`,{class:`card_body`},[r(`p`,{class:`card_title`,style:{"margin-bottom":`0.25rem`}},`알림`),r(`p`,{class:`list_desc`},`리스트와 카드를 함께 사용하는 패턴입니다.`)])],-1)]]),_:1})]),_:1})]),_:1}),n(d,{"heading-id":`definition-heading`,title:`정의 목록`,description:`variant="definition"으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List variant="definition" style="max-width: 28rem; width: 100%;">
    <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
    <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
    <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
  </List>
</template>`},{default:t(()=>[n(m,{variant:`definition`,style:{"max-width":`28rem`,width:`100%`}},{default:t(()=>[n(h,{title:`OOCSS`,description:`구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.`}),n(h,{title:`Design Token`,description:`색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.`}),n(h,{title:`WCAG`,description:`웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.`})]),_:1})]),_:1}),n(d,{"heading-id":`definition-inline-heading`,title:`정의 목록 · 인라인`,description:`layout="inline"으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List variant="definition" layout="inline" inline-label-width="auto" inline-gap="var(--space-md)">
    <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
    <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
    <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
  </List>
</template>`},{default:t(()=>[n(m,{variant:`definition`,layout:`inline`,"inline-label-width":`auto`,"inline-gap":`var(--space-md)`},{default:t(()=>[n(h,{title:`OOCSS`,description:`구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.`}),n(h,{title:`Design Token`,description:`색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.`}),n(h,{title:`WCAG`,description:`웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.`})]),_:1})]),_:1}),n(d,{"heading-id":`definition-desc-align-heading`,title:`정의 목록 · 값 우측 정렬`,description:`descAlign="right"로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다.`,code:`<script setup>
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';
<\/script>

<template>
  <List
  variant="definition"
  layout="inline"
  block
  size="compact"
  desc-align="right"
  inline-label-width="auto"
  inline-gap="1rem"
  >
  <ListItem title="주문번호" description="ORD-2024-0815" />
  <ListItem title="결제금액" description="₩42,000" />
  <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
  </List>
</template>`},{default:t(()=>[n(m,{variant:`definition`,layout:`inline`,block:``,size:`compact`,"desc-align":`right`,"inline-label-width":`auto`,"inline-gap":`1rem`},{default:t(()=>[n(h,{title:`주문번호`,description:`ORD-2024-0815`}),n(h,{title:`결제금액`,description:`₩42,000`}),n(h,{title:`배송지`,description:`서울특별시 강남구 테헤란로 123`})]),_:1})]),_:1}),n(l,{"heading-id":`api-props-heading`,title:`API · List Props`},{default:t(()=>[n(u,{columns:o(g),rows:o(_),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(l,{"heading-id":`api-item-props-heading`,title:`API · ListItem Props`},{default:t(()=>[n(u,{columns:o(v),rows:o(y),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(l,{"heading-id":`api-slots-heading`,title:`API · List Slots`},{default:t(()=>[n(u,{columns:o(b),rows:o(x),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(l,{"heading-id":`api-item-slots-heading`,title:`API · ListItem Slots`},{default:t(()=>[n(u,{columns:o(b),rows:o(S),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(l,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`List · ListItem이 렌더하는 OOCSS 클래스입니다. class prop으로 스킨 클래스를 조합합니다.`},{default:t(()=>[n(u,{columns:o(C),rows:o(w),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),n(l,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:t(()=>[n(u,{columns:o(T),rows:o(E),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{F as default,P as docMeta};
<script>
export const docMeta = {
  title: 'List | HTML Components',
  activeNav: 'list',
  pageTitle: 'List',
};
</script>

<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
import {
  listClassColumns,
  listClasses,
  listItemPropColumns,
  listItemProps,
  listItemSlots,
  listPropColumns,
  listProps,
  listSlotColumns,
  listSlots,
  listTokenColumns,
  listTokens,
} from '@/doc/data/list-api';
</script>

<template>
  <div class="page_intro">
    <h1>List</h1>
    <p class="lead">항목을 세로 목록으로 표시하는 리스트 컴포넌트입니다. 불릿·번호 유형과 인터랙티브 항목을 지원합니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="list_title · list_meta · list_desc로 항목 내용을 구성합니다."
  >
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
  </DemoSection>

  <DemoSection
    heading-id="bullet-heading"
    title="불릿"
    description="class에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다."
  >
    <List class="list_bullet">
      <ListItem>디자인 토큰 정의</ListItem>
      <ListItem>컴포넌트 문서화</ListItem>
      <ListItem>접근성 검토</ListItem>
    </List>
  </DemoSection>

  <DemoSection
    heading-id="bullet-rich-heading"
    title="불릿 · 본문"
    description="title · description prop으로 제목·설명을 함께 표시합니다."
  >
    <List class="list_bullet">
      <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
      <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
      <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
    </List>
  </DemoSection>

  <DemoSection
    heading-id="bullet-variant-heading"
    title="불릿 변형"
    description="circle · square 마커와 중첩 목록을 지원합니다."
    stack
  >
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
  </DemoSection>

  <DemoSection
    heading-id="ordered-heading"
    title="번호"
    description="tag=&quot;ol&quot;과 list_ordered 클래스로 순서 목록을 만듭니다."
  >
    <List tag="ol" class="list_ordered">
      <ListItem>요구사항 분석</ListItem>
      <ListItem>와이어프레임 작성</ListItem>
      <ListItem>프로토타입 검증</ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>
  </DemoSection>

  <DemoSection
    heading-id="ordered-variant-heading"
    title="번호 변형"
    description="list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다."
    stack
  >
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
      <ListItem title="빌드" description="pnpm build로 html/ 출력" />
    </List>
  </DemoSection>

  <DemoSection
    heading-id="ordered-hierarchical-heading"
    title="번호 · 계층"
    description="list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다."
    stack
  >
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
  </DemoSection>

  <DemoSection
    heading-id="bullet-link-heading"
    title="불릿 · 링크"
    description="불릿 목록에서도 li 안에 a.list_link를 사용합니다."
  >
    <List class="list_bullet">
      <ListItem>
        <a href="components/button.html" class="list_link" data-ripple>
          <span class="list_title">Button</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="components/typography.html" class="list_link" data-ripple>
          <span class="list_title">Typography</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="components/icon.html" class="list_link" data-ripple>
          <span class="list_title">Icon</span>
        </a>
      </ListItem>
    </List>
  </DemoSection>

  <DemoSection
    heading-id="bordered-heading"
    title="테두리"
    description="bordered prop으로 각 항목에 테두리를 적용합니다."
  >
    <List bordered>
      <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
      <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
      <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
    </List>
  </DemoSection>

  <DemoSection
    heading-id="link-heading"
    title="링크"
    description="페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다."
  >
    <List split>
      <ListItem>
        <a href="components/button.html" class="list_link" data-ripple>
          <div class="list_content">
            <span class="list_title">대시보드</span>
          </div>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="components/card.html" class="list_link" data-ripple>
          <div class="list_content">
            <span class="list_title">프로젝트</span>
          </div>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </a>
      </ListItem>
      <ListItem>
        <a href="getting-started.html" class="list_link" data-ripple>
          <div class="list_content">
            <span class="list_title">설정</span>
          </div>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </a>
      </ListItem>
    </List>
  </DemoSection>

  <DemoSection
    heading-id="button-heading"
    title="버튼"
    description="같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다."
  >
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
  </DemoSection>

  <DemoSection
    heading-id="card-heading"
    title="카드 혼합"
    description="list_cards 클래스로 li 안에 card를 배치합니다."
  >
    <List class="list_cards">
      <ListItem>
        <a href="components/card.html" class="card card_shadow card_clickable card_horizontal">
          <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
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
        <a href="components/list.html" class="card card_accent color_primary card_clickable">
          <div class="card_body">
            <p class="card_title" style="margin-bottom: 0.25rem;">알림</p>
            <p class="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
          </div>
        </a>
      </ListItem>
    </List>
  </DemoSection>

  <DemoSection
    heading-id="definition-heading"
    title="정의 목록"
    description="variant=&quot;definition&quot;으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다."
  >
    <List variant="definition" style="max-width: 28rem; width: 100%;">
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>
  </DemoSection>

  <DemoSection
    heading-id="definition-inline-heading"
    title="정의 목록 · 인라인"
    description="layout=&quot;inline&quot;으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다."
  >
    <List variant="definition" layout="inline" inline-label-width="auto" inline-gap="var(--space-md)">
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
    </List>
  </DemoSection>

  <DemoSection
    heading-id="definition-desc-align-heading"
    title="정의 목록 · 값 우측 정렬"
    description="descAlign=&quot;right&quot;로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다."
  >
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
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · List Props">
    <ApiTable :columns="listPropColumns" :rows="listProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-props-heading" title="API · ListItem Props">
    <ApiTable :columns="listItemPropColumns" :rows="listItemProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · List Slots">
    <ApiTable :columns="listSlotColumns" :rows="listSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-slots-heading" title="API · ListItem Slots">
    <ApiTable :columns="listSlotColumns" :rows="listItemSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="List · ListItem이 렌더하는 OOCSS 클래스입니다. class prop으로 스킨 클래스를 조합합니다."
  >
    <ApiTable :columns="listClassColumns" :rows="listClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="listTokenColumns" :rows="listTokens" code-column="name" />
  </ApiSection>
</template>

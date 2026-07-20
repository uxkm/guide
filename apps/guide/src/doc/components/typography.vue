<script>
export const docMeta = {
  title: 'Typography | HTML Components',
  activeNav: 'typography',
  pageTitle: 'Typography',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
import TypoTitle from '@uxkm/ui/components/TypoTitle.vue';
import {
  typographyClassColumns,
  typographyClasses,
  typographyTokenColumns,
  typographyTokens,
  typoTextPropColumns,
  typoTextProps,
  typoTextSlotColumns,
  typoTextSlots,
  typoTitlePropColumns,
  typoTitleProps,
  typoTitleSlotColumns,
  typoTitleSlots,
  buttonMarkupExample,
} from '@/doc/data/typography-api';
</script>

<template>
  <div class="page_intro">
    <h1>Typography</h1>
    <p class="lead">제목, 본문, 강조, 말줄임 등 텍스트 표현을 위한 타이포그래피 컴포넌트입니다.</p>
  </div>

  <DemoSection
    heading-id="title-heading"
    title="제목"
    description="typo_title-1 ~ typo_title-5 클래스로 5단계 제목 스케일을 적용합니다. 시맨틱 heading 태그와 함께 사용합니다."
    stack
  >
    <div class="typo_stack-lg">
      <TypoTitle :level="1" label="h1. 제목 레벨 1" />
      <TypoTitle :level="2" label="h2. 제목 레벨 2" />
      <TypoTitle :level="3" label="h3. 제목 레벨 3" />
      <TypoTitle :level="4" label="h4. 제목 레벨 4" />
      <TypoTitle :level="5" label="h5. 제목 레벨 5" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="text-heading"
    title="본문"
    description="기본 본문은 별도 클래스 없이 p 태그를 사용합니다. 단락 간격이 필요하면 typo_paragraph를 사용합니다."
    stack
  >
    <p>
      기본 본문 텍스트입니다. 인라인으로 <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
    </p>

    <div>
      <TypoText variant="paragraph" label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다." />
      <TypoText variant="paragraph" label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다." />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="color-heading"
    title="색상 타입"
    description="color_muted, color_success 등 공통 색상 클래스를 적용합니다. 버튼·배지·알림 등 모든 컴포넌트에서 동일한 클래스명을 사용합니다."
    stack
  >
    <TypoText color="default" label="기본 텍스트 (Default)" />
    <TypoText color="muted" label="보조 텍스트 (Muted)" />
    <TypoText color="success" label="성공 메시지 (Success)" />
    <TypoText color="warning" label="주의 메시지 (Warning)" />
    <TypoText color="danger" label="오류 메시지 (Danger)" />
    <TypoText color="primary" label="강조 텍스트 (Primary)" />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="base(0.875rem)는 클래스 없이 기본 적용됩니다. xs, sm, lg, xl만 size_* 클래스를 사용합니다."
    stack
  >
    <TypoText size="xs" label="Extra Small — 0.75rem" />
    <TypoText size="sm" label="Small — 0.8125rem" />
    <TypoText label="Base — 0.875rem (기본)" />
    <TypoText size="lg" label="Large — 1rem" />
    <TypoText size="xl" label="Extra Large — 1.125rem" />
  </DemoSection>

  <DemoSection
    heading-id="style-heading"
    title="텍스트 스타일"
    description="강조, 기울임, 밑줄, 취소선, 형광펜, 인라인 코드 등 인라인 스타일을 조합합니다."
    stack
  >
    <p>
      <TypoText variant="strong" label="굵은 텍스트" />와
      <TypoText variant="italic" label="기울임 텍스트" />,
      <TypoText variant="underline" label="밑줄 텍스트" />,
      <TypoText variant="delete" label="취소선 텍스트" />를 함께 사용할 수 있습니다.
    </p>

    <p>
      <TypoText variant="mark" label="형광펜 강조" />와
      <TypoText variant="code" label="inline code" /> 표현도 지원합니다.
    </p>

    <p class="color_muted">
      조합 예시:
      <TypoText variant="strong" color="danger" label="중요 경고" />,
      <TypoText variant="italic" color="primary" label="강조 설명" />,
      <TypoText variant="delete" color="muted" label="삭제된 항목" />
    </p>
  </DemoSection>

  <DemoSection
    heading-id="sub-sup-small-heading"
    title="아래첨자 · 위첨자 · 소문자"
    description="sub · sup · small 시맨틱 태그에 typo_sub · typo_sup · typo_small 클래스를 적용합니다."
    stack
  >
    <p>
      화학식 H<TypoText variant="sub" label="2" />O,
      수식 x<TypoText variant="sup" label="2" /> + y<TypoText variant="sup" label="2" /> = z<TypoText variant="sup" label="2" />처럼
      아래·위첨자를 표현합니다.
    </p>

    <p>
      각주<TypoText variant="sup" label="1" />나
      제곱미터 m<TypoText variant="sup" label="2" /> 단위에도 활용합니다.
    </p>

    <p>
      <TypoText variant="small" label="※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다." />
    </p>
  </DemoSection>

  <DemoSection
    heading-id="ellipsis-heading"
    title="말줄임"
    description="text_ellipsis로 1줄, text_ellipsis-2·3으로 여러 줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다."
    stack
  >
    <div style="max-width: 320px; width: 100%;">
      <TypoText :ellipsis="1" label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet." />
      <TypoText :ellipsis="2" label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다." />
      <TypoText :ellipsis="3" label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요." />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="blockquote-heading"
    title="인용"
    description="blockquote 태그에 typo_blockquote 클래스를 적용합니다."
    stack
  >
    <TypoText
      variant="blockquote"
      color="muted"
      cite="https://example.com"
      label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
    />
  </DemoSection>

  <DemoSection
    heading-id="list-heading"
    title="목록"
    description="본문 prose 목록은 ul · ol에 typo_list · typo_list-ordered 클래스를 적용합니다. UI 리스트(아바타, 인터랙티브 항목 등)는 List 컴포넌트를 사용하세요."
    stack
  >
    <ul class="typo_list">
      <li>디자인 토큰 정의</li>
      <li>컴포넌트 문서화</li>
      <li>접근성 검토</li>
    </ul>

    <ol class="typo_list-ordered">
      <li>요구사항 분석</li>
      <li>와이어프레임 작성</li>
      <li>프로토타입 검증</li>
    </ol>

    <p class="form_field-hint">
      용어 설명·구조화된 목록은 <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
    </p>
  </DemoSection>

  <DemoSection
    heading-id="link-heading"
    title="링크"
    description="본문 내 하이퍼링크에 typo_link 클래스를 사용합니다."
    stack
  >
    <TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.
      <TypoText tag="span" color="muted" label="또는" />
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>
  </DemoSection>

  <DemoSection
    heading-id="lead-heading"
    title="리드 · 캡션 · 레이블"
    description="typo_lead · typo_caption · typo_label · typo_overline로 보조 텍스트 위계를 표현합니다."
    stack
  >
    <div style="max-width: 32rem; width: 100%;">
      <div class="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle :level="3" label="HTML Components" />
        <TypoText variant="lead" label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다." />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>

      <div>
        <TypoText variant="label" html-for="demo-email" label="이메일" />
        <TypoText variant="caption" style="margin-top: 0.25rem;" label="가입 시 사용한 이메일 주소를 입력하세요." />
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="title-color-heading"
    title="제목 색상"
    description="제목에도 공통 color_* 클래스를 조합할 수 있습니다."
    stack
  >
    <TypoTitle :level="3" color="primary" label="Primary 제목" />
    <TypoTitle :level="3" color="success" label="Success 제목" />
    <TypoTitle :level="3" color="danger" label="Danger 제목" />
    <TypoTitle :level="3" color="muted" label="Muted 제목" />
  </DemoSection>

  <DemoSection
    heading-id="kbd-heading"
    title="키보드 · 코드 블록"
    description="typo_kbd · typo_pre · typo_code로 단축키와 코드를 표시합니다."
    stack
  >
    <p>
      저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> + <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요.
      검색은 <TypoText tag="kbd" variant="kbd" label="Ctrl" /> + <TypoText tag="kbd" variant="kbd" label="K" />입니다.
    </p>

    <TypoText variant="pre"><code>{{ buttonMarkupExample }}</code></TypoText>
  </DemoSection>

  <DemoSection
    heading-id="nested-list-heading"
    title="중첩 목록"
    description="typo_list · typo_list-ordered에 하위 ul · ol을 중첩할 수 있습니다."
    stack
  >
    <ul class="typo_list">
      <li>레이아웃
        <ul class="typo_list">
          <li>Container</li>
          <li>Grid</li>
        </ul>
      </li>
      <li>기본 요소
        <ul class="typo_list">
          <li>Button</li>
          <li>Typography</li>
        </ul>
      </li>
    </ul>
  </DemoSection>

  <DemoSection
    heading-id="stack-heading"
    title="제목 + 본문 조합"
    description="typo_stack, typo_stack-lg로 제목과 본문을 묶어 간격을 맞춥니다."
    stack
  >
    <div class="typo_stack-lg" style="max-width: 28rem;">
      <TypoTitle :level="3" label="섹션 제목" />
      <TypoText variant="paragraph" label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다." />
      <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
    </div>

    <div class="typo_stack" style="max-width: 28rem;">
      <TypoTitle :level="4" label="작은 스택" />
      <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
    </div>
  </DemoSection>

  <ApiSection heading-id="api-title-props-heading" title="API · TypoTitle Props">
    <ApiTable :columns="typoTitlePropColumns" :rows="typoTitleProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-text-props-heading" title="API · TypoText Props">
    <ApiTable :columns="typoTextPropColumns" :rows="typoTextProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-title-slots-heading" title="API · TypoTitle Slots">
    <ApiTable :columns="typoTitleSlotColumns" :rows="typoTitleSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-text-slots-heading" title="API · TypoText Slots">
    <ApiTable :columns="typoTextSlotColumns" :rows="typoTextSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="typographyClassColumns" :rows="typographyClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="typographyTokenColumns" :rows="typographyTokens" code-column="name" />
  </ApiSection>
</template>

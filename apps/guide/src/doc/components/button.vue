<script>
export const docMeta = {
  title: 'Button | HTML Components',
  activeNav: 'button',
  pageTitle: 'Button',
};
</script>

<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import {
  buttonClassColumns,
  buttonClasses,
  buttonPropColumns,
  buttonProps,
  buttonSlotColumns,
  buttonSlots,
  buttonTokenColumns,
  buttonTokens,
} from '@/doc/data/button-api';
</script>

<template>
  <div class="page_intro">
    <h1>Button</h1>
    <p class="lead">사용자 액션을 트리거하는 버튼 컴포넌트입니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본 유형"
    description="btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="Filled Primary" />
      <Button variant="filled" color="default" label="Filled Default" />
      <Button variant="outline" color="primary" label="Outline" />
      <Button variant="ghost" label="Ghost" />
      <Button variant="text" color="primary" label="Text" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="success" label="Success" />
      <Button variant="filled" color="warning" label="Warning" />
      <Button variant="filled" color="danger" label="Danger" />
      <Button variant="outline" color="danger" label="Outline Danger" />
      <Button variant="text" color="danger" label="Text Danger" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="type-select-heading"
    title="셀렉트 박스형"
    description="btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 aria-haspopup과 aria-expanded를 지정합니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="select" label="서울특별시" haspopup="listbox" />
      <Button variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" />
      <Button variant="select" open label="카테고리" haspopup="listbox" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="select" size="sm" label="Small" haspopup="listbox" />
      <Button variant="select" label="Medium" haspopup="listbox" />
      <Button variant="select" size="lg" label="Large" haspopup="listbox" />
      <Button variant="select" disabled label="비활성" haspopup="listbox" />
      <Button variant="select" error invalid label="필수 선택" haspopup="listbox" />
    </div>
    <Button variant="select" block label="전체 너비 셀렉트 트리거" haspopup="listbox" />
    <div class="btn_row btn_row-wrap">
      <Button variant="select" select-text label="최신순" haspopup="listbox" />
      <Button variant="select" select-text placeholder label="정렬 기준" haspopup="listbox" />
      <Button variant="select" select-text open label="필터" haspopup="listbox" />
      <Button variant="select" select-text size="sm" label="Small" haspopup="listbox" />
      <Button variant="select" select-text disabled label="비활성" haspopup="listbox" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="type-text-heading"
    title="텍스트 버튼"
    description="btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="Primary" />
      <Button variant="text" color="muted" label="Muted" />
      <Button variant="text" color="danger" label="Danger" />
      <Button variant="text" color="success" label="Success" />
      <Button variant="text" color="warning" label="Warning" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="danger" label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
      <Button variant="text" color="success" label="완료">
        <template #icon-before><Icon name="check-circle" /></template>
      </Button>
      <Button variant="text" color="warning" label="주의">
        <template #icon-after><Icon name="alert-triangle" /></template>
      </Button>
      <Button variant="text" color="muted" label="자세히">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="더 보기" />
      <Button variant="text" color="primary" label="링크 복사" />
      <Button variant="text" color="primary" label="취소" />
      <Button variant="text" color="primary" label="건너뛰기" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="text" color="primary" label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
      <Button variant="text" color="primary" label="링크 열기">
        <template #icon-before><Icon name="external-link" /></template>
      </Button>
      <Button variant="text" color="primary" label="설정">
        <template #icon-before><Icon name="settings" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" label="전체 보기">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" label="삭제">
        <template #icon-after><Icon name="trash" /></template>
      </Button>
      <Button variant="text" color="primary" label="새로고침">
        <template #icon-after><Icon name="refresh" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" size="sm" label="Small" />
      <Button variant="text" color="primary" label="Medium" />
      <Button variant="text" color="primary" size="lg" label="Large" />
      <Button variant="text" color="primary" size="sm" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="text" color="primary" size="lg" label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="text" color="primary" icon-only aria-label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="text" color="primary" icon-only aria-label="편집">
        <template #icon-before><Icon name="edit" /></template>
      </Button>
      <Button variant="text" color="primary" icon-only size="sm" aria-label="닫기">
        <template #icon-before><Icon name="close" /></template>
      </Button>
      <Button variant="text" color="primary" disabled label="비활성" />
      <Button variant="text" color="primary" disabled label="비활성">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" aria-disabled label="is-disabled">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
    <Button variant="text" color="primary" block label="전체 너비 텍스트 버튼" />
  </DemoSection>

  <DemoSection
    heading-id="type-icon-text-heading"
    title="아이콘 + 텍스트"
    description="아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다."
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
      <Button variant="outline" color="primary" label="새 항목">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="type-icon-text-vertical-heading"
    title="아이콘 + 텍스트 (세로)"
    description="btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" vertical label="홈">
        <template #icon-before><Icon name="home" /></template>
      </Button>
      <Button variant="filled" color="default" vertical label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="ghost" vertical label="마이">
        <template #icon-before><Icon name="user" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="outline" color="primary" vertical label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" vertical size="sm" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical size="lg" label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="default" vertical round label="가이드">
        <template #icon-before><Icon name="book" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical round label="즐겨찾기">
        <template #icon-before><Icon name="star" /></template>
      </Button>
      <Button variant="ghost" vertical disabled label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical loading label="저장 중" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="type-icon-text-vertical-equal-heading"
    title="아이콘 + 텍스트 (세로) · 균등 배분"
    description="btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다."
    stack
  >
    <div class="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
      <Button variant="text" color="primary" vertical label="홈">
        <template #icon-before><Icon name="home" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="카테고리">
        <template #icon-before><Icon name="grid" /></template>
      </Button>
      <Button variant="filled" color="primary" vertical label="장바구니">
        <template #icon-before><Icon name="cart" /></template>
      </Button>
      <Button variant="text" color="primary" vertical label="마이">
        <template #icon-before><Icon name="user" /></template>
      </Button>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="type-text-icon-heading"
    title="텍스트 + 아이콘"
    description="텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다."
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="filled" color="default" label="자세히 보기">
        <template #icon-after><Icon name="external-link" /></template>
      </Button>
      <Button variant="text" color="primary" label="링크 이동">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="type-icon-only-heading"
    title="아이콘 버튼"
    description="텍스트 없이 아이콘만 표시합니다. btn_icon-only와 함께 사용하며, 접근성을 위해 aria-label을 반드시 지정합니다."
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" icon-only aria-label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" icon-only aria-label="설정">
        <template #icon-before><Icon name="settings" /></template>
      </Button>
      <Button variant="ghost" icon-only aria-label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="outline" color="primary" icon-only aria-label="편집">
        <template #icon-before><Icon name="edit" /></template>
      </Button>
      <Button variant="filled" color="danger" icon-only aria-label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
      <Button variant="filled" color="primary" icon-only disabled aria-label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="type-icon-only-size-heading"
    title="아이콘 버튼 크기"
    description="btn_sm, medium, btn_lg 세 가지 크기를 지원합니다."
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" icon-only size="sm" aria-label="추가 (small)">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" icon-only aria-label="추가 (medium)">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="primary" icon-only size="lg" aria-label="추가 (large)">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" icon-only size="sm" aria-label="다운로드 (small)">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only aria-label="다운로드 (medium)">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    <Button variant="filled" color="default" icon-only size="lg" aria-label="다운로드 (large)">
      <template #icon-before><Icon name="download" /></template>
    </Button>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="variant-heading"
    title="색상 변형"
    description="상황에 맞는 색상 변형을 사용합니다."
  >
    <Button variant="filled" color="success" label="Success" />
    <Button variant="filled" color="danger" label="Danger" />
    <Button variant="filled" color="warning" label="Warning" />
    <Button variant="outline" color="primary" label="Outline" />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="small, medium, large 세 가지 크기를 지원합니다."
  >
    <Button variant="filled" color="primary" size="sm" label="Small" />
    <Button variant="filled" color="primary" label="Medium" />
    <Button variant="filled" color="primary" size="lg" label="Large" />
  </DemoSection>

  <DemoSection
    heading-id="shape-round-heading"
    title="라운드"
    description="btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round label="Primary" />
      <Button variant="filled" color="default" round label="Default" />
      <Button variant="ghost" round label="Ghost" />
      <Button variant="outline" color="primary" round label="Outline" />
      <Button variant="filled" color="success" round label="Success" />
      <Button variant="filled" color="danger" round label="Danger" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round size="sm" label="Small" />
      <Button variant="filled" color="primary" round label="Medium" />
      <Button variant="filled" color="primary" round size="lg" label="Large" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" round label="다음">
        <template #icon-after><Icon name="chevron-right" /></template>
      </Button>
      <Button variant="text" color="primary" round label="더 보기" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" round icon-only aria-label="추가">
        <template #icon-before><Icon name="plus" /></template>
      </Button>
      <Button variant="filled" color="default" round icon-only aria-label="설정">
        <template #icon-before><Icon name="settings" /></template>
      </Button>
      <Button variant="outline" color="primary" round icon-only size="sm" aria-label="검색">
        <template #icon-before><Icon name="search" /></template>
      </Button>
      <Button variant="filled" color="danger" round icon-only size="lg" aria-label="삭제">
        <template #icon-before><Icon name="trash" /></template>
      </Button>
    </div>
    <div class="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
      <Button variant="filled" color="default" label="일" />
      <Button variant="filled" color="default" label="주" />
      <Button variant="filled" color="primary" label="월" />
      <Button variant="filled" color="default" label="년" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="width-heading"
    title="너비"
    description="부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다."
    stack
  >
    <Button variant="filled" color="primary" block label="전체 너비 버튼" />
    <div class="btn_row-equal">
      <Button variant="filled" color="default" label="취소" />
      <Button variant="filled" color="primary" label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="취소" />
      <Button variant="filled" color="primary" grow label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="옵션 A" />
      <Button variant="filled" color="default" grow label="옵션 B" />
      <Button variant="filled" color="primary" grow label="옵션 C" />
    </div>
    <div class="btn_row btn_row-start">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" fit label="취소" />
      <Button variant="filled" color="primary" fit label="저장" />
    </div>
    <div class="btn_row btn_row-end">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" fit label="취소" />
      <Button variant="filled" color="primary" fit label="저장" />
    </div>
    <div class="btn_row">
      <Button variant="ghost" fit label="뒤로" />
      <Button variant="filled" color="default" grow label="임시 저장" />
      <Button variant="filled" color="primary" grow label="제출" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow label="본문 영역" />
      <Button variant="filled" color="primary" fit label="확인" />
    </div>
    <div class="btn_row">
      <Button variant="filled" color="default" grow="2" label="2배 너비" />
      <Button variant="filled" color="primary" grow label="1배 너비" />
    </div>
    <Button variant="filled" color="primary" block label="전체 너비 다운로드">
      <template #icon-before><Icon name="download" /></template>
    </Button>
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" disabled label="Primary" />
      <Button variant="filled" color="default" disabled label="Default" />
      <Button variant="outline" color="primary" disabled label="Outline" />
      <Button variant="ghost" disabled label="Ghost" />
      <Button variant="text" color="primary" disabled label="Text" />
      <Button variant="filled" color="danger" disabled label="Danger" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" aria-disabled label="is-disabled" />
      <Button variant="filled" color="default" aria-disabled label="is-disabled" />
      <Button variant="outline" color="primary" aria-disabled label="is-disabled" />
    </div>
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" loading label="저장 중" />
      <Button variant="filled" color="default" loading label="처리 중" />
      <Button variant="outline" color="primary" loading label="업로드 중" />
      <Button variant="filled" color="primary" icon-only loading aria-label="저장 중" />
    </div>
    <Button variant="filled" color="primary" block loading label="전체 너비 로딩" />
  </DemoSection>

  <DemoSection
    heading-id="group-heading"
    title="버튼 그룹"
    description="가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다."
    stack
  >
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
      <Button variant="filled" color="default" size="sm" label="Left" />
      <Button variant="filled" color="default" size="sm" label="Middle" />
      <Button variant="filled" color="default" size="sm" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
      <Button variant="filled" color="default" size="lg" label="Left" />
      <Button variant="filled" color="default" size="lg" label="Middle" />
      <Button variant="filled" color="default" size="lg" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
      <Button variant="filled" color="default" label="Left" />
      <Button variant="filled" color="default" label="Middle" />
      <Button variant="filled" color="default" label="Right" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
      <Button variant="filled" color="default" label="상단" />
      <Button variant="filled" color="default" label="중간" />
      <Button variant="filled" color="default" label="하단" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="로그인" />
      <Button variant="filled" color="default" block label="회원가입" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="결제하기" />
      <Button variant="text" color="primary" label="쿠폰 적용" />
    </div>
    <div class="btn_stack">
      <Button variant="filled" color="primary" block label="다운로드">
        <template #icon-before><Icon name="download" /></template>
      </Button>
      <p class="btn_stack-text">최신 버전 v2.0 · <a href="#">릴리스 노트</a></p>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="tag-heading"
    title="루트 태그"
    description="tag prop으로 button · a · div를 선택합니다. div와 href 없는 a는 role만으로 Tab 초점이 이동하지 않으므로 tabindex=0을 자동 부여합니다."
    stack
  >
    <div class="btn_row btn_row-wrap">
      <Button variant="filled" color="primary" label="button" />
      <Button tag="a" href="/getting-started" variant="outline" color="primary" label="a + href" />
      <Button tag="div" variant="ghost" label="div → role=button" />
      <Button tag="a" role="link" variant="text" color="primary" label="a, role=link" />
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="buttonPropColumns" :rows="buttonProps" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      선언되지 않은 HTML 속성·이벤트(<code class="typo_code">id</code>,
      <code class="typo_code">data-*</code>, <code class="typo_code">@click</code> 등)는
      <code class="typo_code">tag</code>로 지정한 루트 요소에 그대로 전달됩니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="buttonSlotColumns" :rows="buttonSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="buttonClassColumns" :rows="buttonClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="buttonTokenColumns" :rows="buttonTokens" code-column="name" />
  </ApiSection>
</template>

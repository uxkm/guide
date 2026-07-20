<script>
export const docMeta = {
  title: 'Dropdown | HTML Components',
  activeNav: 'dropdown',
  pageTitle: 'Dropdown',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import Avatar from '@uxkm/ui/components/Avatar.vue';
import Badge from '@uxkm/ui/components/Badge.vue';
import Button from '@uxkm/ui/components/Button.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Dropdown from '@uxkm/ui/components/Dropdown.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuDivider from '@uxkm/ui/components/MenuDivider.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
import {
  dropdownClassColumns,
  dropdownClasses,
  dropdownPropColumns,
  dropdownProps,
  dropdownSlotColumns,
  dropdownSlots,
  dropdownTokenColumns,
  dropdownTokens,
} from '@/doc/data/dropdown-api';
</script>

<template>
  <div class="page_intro">
  <h1>Dropdown</h1>
  <p class="lead">버튼·링크 등 트리거를 클릭하면 메뉴 패널이 표시되는 Dropdown 컴포넌트입니다. Menu 컴포넌트와 조합해 액션 목록·사용자 메뉴·필터 등에 사용합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="dropdown · dropdown_trigger · dropdown_menu으로 트리거와 패널을 구성합니다. 패널 안에는 menu_vertical · menu_compact를 배치합니다."
  >
    <Dropdown>
      <template #trigger>
        <Button variant="outline" class="dropdown_trigger" label="작업" aria-haspopup="menu" />
      </template>
      <Menu mode="vertical" compact aria-label="작업 메뉴">
        <MenuItem label="복사" />
        <MenuItem label="이동" />
        <MenuItem label="공유" />
      </Menu>
    </Dropdown>
  </DemoSection>

  <DemoSection
    heading-id="open-heading"
    title="열린 상태"
    description="is-open 클래스와 aria-expanded=&quot;true&quot;로 패널이 열린 상태를 표현합니다."
  >
    <Dropdown open>
      <template #trigger>
        <Button variant="filled" color="primary" class="dropdown_trigger" label="카테고리" aria-haspopup="menu" aria-expanded="true" />
      </template>
      <Menu mode="vertical" compact aria-label="카테고리">
        <MenuItem label="전체" active />
        <MenuItem label="디자인" />
        <MenuItem label="개발" />
        <MenuItem label="마케팅" />
      </Menu>
    </Dropdown>
  </DemoSection>

  <DemoSection
    heading-id="trigger-heading"
    title="트리거 유형"
    description="Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다."
    stack
  >
    <div class="dropdown_row">
      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="filled" color="primary" label="Filled" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="Outline" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" label="Ghost" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="text" color="primary" label="Text" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 1" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" icon-only aria-label="더보기" haspopup="menu">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
              </svg>
            </template>
          </Button>
        </template>
        <Menu mode="vertical" compact aria-label="더보기">
          <MenuItem label="편집" />
          <MenuItem label="복제" />
          <MenuItem label="삭제" color="danger" />
        </Menu>
      </Dropdown>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="select-trigger-heading"
    title="셀렉트 트리거"
    description="btn_select · btn_select-text를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다."
    stack
  >
    <div class="dropdown_row">
      <Dropdown fit>
        <template #trigger>
          <Button class="dropdown_trigger" variant="select" label="서울특별시" haspopup="listbox" />
        </template>
        <Menu mode="vertical" compact aria-label="지역 선택">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
        </Menu>
      </Dropdown>

      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="select" select-text label="최신순" haspopup="listbox" />
        </template>
        <Menu mode="vertical" compact aria-label="정렬">
          <MenuItem label="최신순" active />
          <MenuItem label="인기순" />
          <MenuItem label="가격 낮은순" />
          <MenuItem label="가격 높은순" />
        </Menu>
      </Dropdown>
    </div>

    <p class="form_field-hint">btn_select 상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>
  </DemoSection>

  <DemoSection
    heading-id="placement-heading"
    title="정렬"
    description="dropdown_placement-end · dropdown_placement-top으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다."
    stack
  >
    <div class="dropdown_row" style="width: 100%; justify-content: space-between;">
      <Dropdown>
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="왼쪽 정렬" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>

      <Dropdown placement="end">
        <template #trigger>
          <Button class="dropdown_trigger" variant="outline" label="오른쪽 정렬" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목 A" />
          <MenuItem label="항목 B" />
        </Menu>
      </Dropdown>
    </div>

    <div style="display: flex; justify-content: center; padding-top: 6rem;">
      <Dropdown placement="top">
        <template #trigger>
          <Button class="dropdown_trigger" variant="ghost" label="위로 열기" haspopup="menu" select-caret />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="위쪽 패널" />
          <MenuItem label="항목 2" />
        </Menu>
      </Dropdown>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="menu-heading"
    title="메뉴 구성"
    description="Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 dropdown_menu 안에서 그대로 사용합니다."
  >
    <Dropdown open>
      <template #trigger>
        <Button class="dropdown_trigger" variant="outline" label="계정" haspopup="menu" :expanded="true" select-caret />
      </template>
      <nav class="menu menu_vertical menu_compact" aria-label="계정 메뉴">
        <ul class="menu_list" role="none">
          <li class="menu_group" role="presentation">
            <span class="menu_group-title">계정</span>
          </li>
          <MenuItem label="프로필">
            <template #icon><Icon name="user" /></template>
          </MenuItem>
          <MenuItem label="보안">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </template>
          </MenuItem>
          <li class="menu_divider" role="separator" />
          <li class="menu_group" role="presentation">
            <span class="menu_group-title">앱</span>
          </li>
          <MenuItem label="알림">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
              </svg>
            </template>
            <template #extra>
              <Badge class="menu_extra" count color="primary">3</Badge>
            </template>
          </MenuItem>
          <MenuItem label="설정">
            <template #icon><Icon name="settings" /></template>
          </MenuItem>
          <li class="menu_divider" role="separator" />
          <MenuItem label="로그아웃" color="danger" />
        </ul>
      </nav>
    </Dropdown>
  </DemoSection>

  <DemoSection
    heading-id="scroll-heading"
    title="스크롤 · 너비"
    description="maxVisibleItems로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. menuWidth · menuMinWidth로 가로 너비를 조절할 수 있습니다."
    stack
  >
    <div class="dropdown_row">
      <Dropdown open :max-visible-items="4">
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="도시 선택" haspopup="listbox" :expanded="true" select-caret />
        </template>
        <Menu mode="vertical" compact aria-label="도시 목록">
          <MenuItem label="서울특별시" active />
          <MenuItem label="부산광역시" />
          <MenuItem label="대구광역시" />
          <MenuItem label="인천광역시" />
          <MenuItem label="광주광역시" />
          <MenuItem label="대전광역시" />
          <MenuItem label="울산광역시" />
          <MenuItem label="세종특별자치시" />
        </Menu>
      </Dropdown>

      <Dropdown open :max-visible-items="4" :menu-width="18">
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="넓은 패널" haspopup="menu" :expanded="true" select-caret />
        </template>
        <Menu mode="vertical" compact aria-label="긴 라벨 메뉴">
          <MenuItem label="프로젝트 대시보드" />
          <MenuItem label="팀 협업 워크스페이스" />
          <MenuItem label="문서 보관함 및 템플릿" />
          <MenuItem label="알림 및 활동 기록" />
          <MenuItem label="계정 및 보안 설정" />
          <MenuItem label="결제 및 구독 관리" />
        </Menu>
      </Dropdown>
    </div>

    <p class="form_field-hint">HTML 마크업에서는 <code>dropdown_menu-scrollable</code> 클래스와 <code>style="--dropdown-max-visible-items: 4"</code>로 동일하게 적용합니다.</p>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성"
    description="dropdown.is-disabled로 전체를 비활성화하거나, menu_item.is-disabled · menu_link.is-disabled로 개별 항목을 막습니다."
    stack
  >
    <div class="dropdown_row">
      <Dropdown disabled>
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" disabled label="비활성 드롭다운" haspopup="menu" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="항목" />
        </Menu>
      </Dropdown>

      <Dropdown open>
        <template #trigger>
          <Button variant="outline" class="dropdown_trigger" label="일부 비활성" haspopup="menu" :expanded="true" />
        </template>
        <Menu mode="vertical" compact>
          <MenuItem label="조회" />
          <MenuItem label="편집" />
          <MenuItem label="삭제" disabled />
          <MenuItem label="관리자 설정" disabled />
        </Menu>
      </Dropdown>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="example-heading"
    title="조합 예시"
    description="툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. data-dropdown으로 클릭·Esc·외부 클릭 시 닫힙니다."
  >
    <div class="dropdown_demo-toolbar">
      <Button variant="ghost" size="sm">
        <template #icon-before>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
          </svg>
        </template>
        알림
        <Badge count size="sm" color="danger" aria-label="읽지 않은 알림 2건">2</Badge>
      </Button>

      <Dropdown placement="end" data-dropdown-close-on-select>
        <template #trigger>
          <Button variant="ghost" size="sm" class="dropdown_trigger" haspopup="menu" select-caret>
            <Avatar size="sm" color="primary" initials="김" aria-hidden />
            김가이드
          </Button>
        </template>
        <Menu mode="vertical" compact aria-label="사용자 메뉴">
          <MenuItem label="내 프로필">
            <template #icon><Icon name="user" /></template>
          </MenuItem>
          <MenuItem label="내 문서">
            <template #icon>
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
              </svg>
            </template>
          </MenuItem>
          <MenuDivider />
          <MenuItem label="로그아웃" color="danger" />
        </Menu>
      </Dropdown>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="dropdownPropColumns" :rows="dropdownProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="dropdownSlotColumns" :rows="dropdownSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="dropdownClassColumns" :rows="dropdownClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="dropdownTokenColumns" :rows="dropdownTokens" code-column="name" />
  </ApiSection>
</template>

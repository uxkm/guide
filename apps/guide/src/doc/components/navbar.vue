<script>
export const docMeta = {
  title: 'Navbar | HTML Components',
  activeNav: 'navbar',
  pageTitle: 'Navbar',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import Badge from '@uxkm/ui/components/Badge.vue';
import Button from '@uxkm/ui/components/Button.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import Input from '@uxkm/ui/components/Input.vue';
import Menu from '@uxkm/ui/components/Menu.vue';
import MenuItem from '@uxkm/ui/components/MenuItem.vue';
import Navbar from '@uxkm/ui/components/Navbar.vue';
import NavbarItem from '@uxkm/ui/components/NavbarItem.vue';
import NavbarList from '@uxkm/ui/components/NavbarList.vue';
import {
  navbarClassColumns,
  navbarClasses,
  navbarItemPropColumns,
  navbarItemProps,
  navbarItemSlotColumns,
  navbarItemSlots,
  navbarPropColumns,
  navbarProps,
  navbarSlotColumns,
  navbarSlots,
  navbarTokenColumns,
  navbarTokens,
} from '@/doc/data/navbar-api';
</script>

<template>
  <div class="page_intro">
  <h1>Navbar</h1>
  <p class="lead">사이트 상단 내비게이션 바입니다. 브랜드·메뉴·검색·액션 버튼을 한 줄에 배치하며, 좁은 화면에서는 토글로 메뉴를 접습니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="UXKM">
        <template #items>
          <NavbarList>
            <NavbarItem label="홈" active />
            <NavbarItem label="컴포넌트" />
            <NavbarItem label="토큰" />
            <NavbarItem label="접근성" />
          </NavbarList>
        </template>
      </Navbar>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="brand-heading"
    title="브랜드"
    description="brand-icon 슬롯에 Icon 컴포넌트를 함께 배치할 수 있습니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="HTML Components">
        <template #brand-icon>
          <Icon class="navbar_brand-icon">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M9 3v18"/>
          </Icon>
        </template>
        <template #items>
          <NavbarList>
            <NavbarItem label="가이드" active />
            <NavbarItem label="리소스" />
          </NavbarList>
        </template>
      </Navbar>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="actions-heading"
    title="액션 영역"
    description="navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="Dashboard">
        <template #items>
          <NavbarList>
            <NavbarItem label="개요" active />
            <NavbarItem label="분석" />
            <NavbarItem label="설정" />
          </NavbarList>
        </template>
        <template #actions>
          <Button variant="ghost" size="sm" aria-label="알림">
            <template #icon-before>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </template>
          </Button>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="가입" />
        </template>
      </Navbar>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="search-heading"
    title="검색"
    description="navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="Docs">
        <template #items>
          <NavbarList>
            <NavbarItem label="시작하기" />
            <NavbarItem label="컴포넌트" active />
            <NavbarItem label="패턴" />
          </NavbarList>
        </template>
        <template #search>
          <Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autocomplete="off" aria-label="문서 검색" />
        </template>
        <template #actions>
          <Button variant="filled" color="primary" size="sm" label="GitHub" />
        </template>
      </Navbar>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="navbar_sm · navbar_lg로 높이를 조절합니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="Small" size="sm">
        <template #items>
          <NavbarList>
            <NavbarItem label="메뉴" active />
          </NavbarList>
        </template>
      </Navbar>
    </div>

    <div class="navbar_demo">
      <Navbar brand="Default">
        <template #items>
          <NavbarList>
            <NavbarItem label="메뉴" active />
          </NavbarList>
        </template>
      </Navbar>
    </div>

    <div class="navbar_demo">
      <Navbar brand="Large" size="lg">
        <template #items>
          <NavbarList>
            <NavbarItem label="메뉴" active />
          </NavbarList>
        </template>
      </Navbar>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="variant-heading"
    title="스타일 변형"
    description="navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="Borderless" borderless>
        <template #items>
          <NavbarList>
            <NavbarItem label="홈" active />
            <NavbarItem label="소개" />
          </NavbarList>
        </template>
      </Navbar>
    </div>

    <div class="navbar_demo">
      <Navbar brand="Dark Surface" dark>
        <template #items>
          <NavbarList>
            <NavbarItem label="홈" active />
            <NavbarItem label="소개" />
          </NavbarList>
        </template>
      </Navbar>
    </div>

    <div class="navbar_demo navbar_demo-scroll">
      <Navbar brand="Sticky" sticky>
        <template #items>
          <NavbarList>
            <NavbarItem label="고정" active />
          </NavbarList>
        </template>
      </Navbar>
      <div style="padding: var(--space-xl); color: var(--color-text-muted); font-size: var(--text-size-sm);">
        <p style="margin: 0 0 var(--space-md);">스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>
        <p style="margin: 0;">콘텐츠 영역 예시입니다.</p>
        <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
        <p style="margin: var(--space-md) 0 0;">추가 콘텐츠…</p>
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="badge-heading"
    title="배지"
    description="메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="Inbox">
        <template #items>
          <NavbarList>
            <NavbarItem label="받은편지함" active />
            <NavbarItem label="알림">
              <template #badge>
                <Badge color="danger">3</Badge>
              </template>
            </NavbarItem>
            <NavbarItem label="보관함" />
          </NavbarList>
        </template>
      </Navbar>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="responsive-heading"
    title="반응형"
    description="768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다."
    stack
  >
    <div class="navbar_demo">
      <Navbar brand="Mobile" responsive collapse-id="navbar-responsive-demo">
        <template #items>
          <NavbarList>
            <NavbarItem label="홈" active />
            <NavbarItem label="제품" />
            <NavbarItem label="가격" />
            <NavbarItem label="문의" />
          </NavbarList>
        </template>
        <template #actions>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </template>
      </Navbar>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Navbar Props">
    <ApiTable :columns="navbarPropColumns" :rows="navbarProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-props-heading" title="API · NavbarItem Props">
    <ApiTable :columns="navbarItemPropColumns" :rows="navbarItemProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Navbar Slots">
    <ApiTable :columns="navbarSlotColumns" :rows="navbarSlots" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-item-slots-heading" title="API · NavbarItem Slots">
    <ApiTable :columns="navbarItemSlotColumns" :rows="navbarItemSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="navbarClassColumns" :rows="navbarClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="navbarTokenColumns" :rows="navbarTokens" code-column="name" />
  </ApiSection>
</template>

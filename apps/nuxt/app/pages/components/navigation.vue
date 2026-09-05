<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">
          <NuxtLink class="link color_accent" to="/components">컴포넌트</NuxtLink>
          · Navigation
        </p>
        <h1>Navigation</h1>
        <p class="lead">내비게이션 컴포넌트를 Vue로 렌더합니다.</p>
      </header>

      <DemoSection id="breadcrumb" title="Breadcrumb" path="@uxkm/vue/breadcrumb">
        <Breadcrumb
          :items="[
            { label: '홈', href: '#' },
            { label: '컴포넌트', href: '#' },
            { label: 'Breadcrumb', current: true },
          ]"
        />
      </DemoSection>

      <DemoSection id="navbar" title="Navbar" path="@uxkm/vue/navbar">
        <Navbar brand="UXKM">
          <NavbarItem label="홈" href="#" active />
          <NavbarItem label="문서" href="#" />
          <NavbarItem label="데모" href="#" />
        </Navbar>
      </DemoSection>

      <DemoSection id="menu" title="Menu" path="@uxkm/vue/menu">
        <Menu aria-label="데모 메뉴">
          <MenuItem label="대시보드" href="#" active />
          <MenuItem label="설정" href="#" />
          <MenuItem label="도움말" href="#" />
        </Menu>
      </DemoSection>

      <DemoSection id="dropdown" title="Dropdown" path="@uxkm/vue/dropdown">
        <Dropdown trigger-label="메뉴" default-open>
          <MenuItem label="프로필" href="#" />
          <MenuItem label="설정" href="#" />
          <MenuItem label="로그아웃" href="#" />
        </Dropdown>
      </DemoSection>

      <DemoSection id="tabs" title="Tabs" path="@uxkm/vue/tabs">
        <Tabs>
          <TabPanel label="탭 1" value="1">첫 번째 패널</TabPanel>
          <TabPanel label="탭 2" value="2">두 번째 패널</TabPanel>
          <TabPanel label="탭 3" value="3">세 번째 패널</TabPanel>
        </Tabs>
      </DemoSection>

      <DemoSection id="steps" title="Steps" path="@uxkm/vue/steps">
        <Steps
          :current="2"
          :items="[
            { title: '시작' },
            { title: '진행' },
            { title: '완료' },
          ]"
        />
      </DemoSection>

      <DemoSection id="pagination" title="Pagination" path="@uxkm/vue/pagination">
        <Pagination :current="1" :total="50" :page-size="10" />
      </DemoSection>

      <p>
        <NuxtLink class="link color_primary" to="/components">← 컴포넌트 목록</NuxtLink>
      </p>
    </div>
  </main>
</template>

<script setup>
import Breadcrumb from '@uxkm/vue/breadcrumb';
import Dropdown from '@uxkm/vue/dropdown';
import Menu, { MenuItem } from '@uxkm/vue/menu';
import Navbar, { NavbarItem } from '@uxkm/vue/navbar';
import Pagination from '@uxkm/vue/pagination';
import Steps from '@uxkm/vue/steps';
import Tabs, { TabPanel } from '@uxkm/vue/tabs';
import DemoSection from '../../components/demo/DemoSection.vue';
</script>

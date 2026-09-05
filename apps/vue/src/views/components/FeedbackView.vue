<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">
          <a class="link color_accent" href="/components" @click.prevent="goComponents">컴포넌트</a>
          · Feedback
        </p>
        <h1>Feedback</h1>
        <p class="lead">피드백 컴포넌트를 Vue로 렌더합니다. Modal·Drawer는 열린 상태로 표시합니다.</p>
      </header>

      <DemoSection id="alert" title="Alert" path="@uxkm/vue/alert">
        <Alert description="알림 메시지 데모입니다." />
      </DemoSection>

      <DemoSection id="snackbar" title="Snackbar" path="@uxkm/vue/snackbar">
        <SnackbarRegion>
          <Snackbar message="저장되었습니다." />
        </SnackbarRegion>
      </DemoSection>

      <DemoSection id="empty" title="Empty" path="@uxkm/vue/empty">
        <Empty description="표시할 데이터가 없습니다." />
      </DemoSection>

      <DemoSection id="spin" title="Spin" path="@uxkm/vue/spin">
        <Spin />
      </DemoSection>

      <DemoSection id="skeleton" title="Skeleton" path="@uxkm/vue/skeleton">
        <Skeleton paragraph />
      </DemoSection>

      <DemoSection id="progress" title="Progress" path="@uxkm/vue/progress">
        <Progress :percent="64" />
      </DemoSection>

      <DemoSection id="tooltip" title="Tooltip" path="@uxkm/vue/tooltip">
        <Tooltip content="짧은 도움말입니다." :open="true">
          <template #trigger>
            <Button label="툴팁 데모" variant="outline" />
          </template>
        </Tooltip>
      </DemoSection>

      <DemoSection id="popover" title="Popover" path="@uxkm/vue/popover">
        <Popover title="Popover" :open="true">
          <template #trigger>
            <Button label="Popover 데모" variant="outline" />
          </template>
          Popover 본문 데모입니다.
        </Popover>
      </DemoSection>

      <DemoSection id="modal" title="Modal" path="@uxkm/vue/modal">
        <Modal title="Modal 데모" :open="true">
          Modal을 Vue로 불러온 상태입니다.
        </Modal>
      </DemoSection>

      <DemoSection id="drawer" title="Drawer" path="@uxkm/vue/drawer">
        <Drawer title="Drawer 데모" :open="true" placement="right">
          Drawer를 Vue로 불러온 상태입니다.
        </Drawer>
      </DemoSection>

      <p>
        <a class="link color_primary" href="/components" @click.prevent="goComponents"
          >← 컴포넌트 목록</a
        >
      </p>
    </div>
  </main>
</template>

<script setup>
import Alert from '@uxkm/vue/alert';
import Button from '@uxkm/vue/button';
import Drawer from '@uxkm/vue/drawer';
import Empty from '@uxkm/vue/empty';
import Modal from '@uxkm/vue/modal';
import Popover from '@uxkm/vue/popover';
import Progress from '@uxkm/vue/progress';
import Skeleton from '@uxkm/vue/skeleton';
import Snackbar from '@uxkm/vue/snackbar';
import SnackbarRegion from '@uxkm/vue/snackbar-region';
import Spin from '@uxkm/vue/spin';
import Tooltip from '@uxkm/vue/tooltip';
import DemoSection from '../../demo/DemoSection.vue';
import { navigate } from '../../router/index.js';

function goComponents() {
  navigate('/components');
}
</script>

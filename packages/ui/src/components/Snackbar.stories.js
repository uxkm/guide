import { onMounted, ref } from 'vue';
import Snackbar from './Snackbar.vue';
import SnackbarRegion from './SnackbarRegion.vue';
import Button from './Button.vue';
import { storyArgsRef, withDocsCanvasRender } from '@/storybook/story-renders.js';
import {
  snackbarClassColumns,
  snackbarClasses,
  snackbarEventColumns,
  snackbarEvents,
  snackbarPropColumns,
  snackbarProps,
  snackbarRegionProps,
  snackbarSlotColumns,
  snackbarSlots,
  snackbarTokenColumns,
  snackbarTokens,
} from '@doc-data/snackbar-api';

const apiSections = [
  { title: 'API · Props', tables: [{ columns: snackbarPropColumns, rows: snackbarProps, codeColumn: 'name' }] },
  { title: 'API · SnackbarRegion', tables: [{ columns: snackbarPropColumns, rows: snackbarRegionProps, codeColumn: 'name' }] },
  { title: 'API · Slots', tables: [{ columns: snackbarSlotColumns, rows: snackbarSlots, codeColumn: 'name' }] },
  { title: 'API · Events', tables: [{ columns: snackbarEventColumns, rows: snackbarEvents, codeColumn: 'name' }] },
  { title: '클래스 · 속성', tables: [{ columns: snackbarClassColumns, rows: snackbarClasses, codeColumn: 'name' }] },
  { title: '디자인 토큰', tables: [{ columns: snackbarTokenColumns, rows: snackbarTokens, codeColumn: 'name' }] },
];

export default {
  title: 'Components/피드백/Snackbar',
  id: 'components-snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    motion: { control: 'select', options: ['fade', 'slide', 'none'] },
    placement: { control: 'select', options: ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'] },
    duration: { control: 'number' },
  },
  parameters: { controls: { disable: false }, layout: 'padded', apiSections },
};

export const Playground = {
  args: {
    message: '새로운 업데이트가 있습니다.',
    color: 'info',
    size: 'md',
    round: false,
    showIcon: true,
    closable: true,
    closeLabel: '알림 닫기',
    actionLabel: '',
    closeOnAction: true,
    motion: 'fade',
    placement: 'bottom-center',
    duration: 0,
    role: 'status',
    ripple: true,
  },
  render: (_args, context) => ({
    components: { Snackbar },
    setup() { return { args: storyArgsRef(context) }; },
    template: '<Snackbar v-bind="args" />',
  }),
};

export const Basic = {
  name: '기본',
  parameters: {
    demoPreview: { stack: true },
    docs: { description: { story: 'info · success · warning · danger 의미 색상으로 짧은 피드백을 전달합니다.' } },
  },
  render: withDocsCanvasRender(() => ({
    components: { Snackbar },
    template: `<Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />`,
  })),
};

export const Placement = {
  name: '위치 · 여러 개 동작 테스트',
  parameters: {
    docs: { description: { story: '8개 위치는 브라우저 뷰포트를 기준으로 계산되며, 같은 위치의 Snackbar는 독립적으로 쌓입니다.' } },
  },
  render: withDocsCanvasRender(() => ({
    components: { Button, Snackbar, SnackbarRegion },
    setup() {
      const placements = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'];
      const labels = { 'top-start': '상단 좌측', 'top-center': '상단 가운데', 'top-end': '상단 우측', 'middle-start': '중간 좌측', 'middle-end': '중간 우측', 'bottom-start': '하단 좌측', 'bottom-center': '하단 가운데', 'bottom-end': '하단 우측' };
      const items = ref([]);
      let id = 0;
      const add = (placement, count = 1, round = false, motion = 'fade') => {
        items.value.push(...Array.from({ length: count }, (_, index) => ({ id: ++id, placement, round, motion, message: `${labels[placement]} Snackbar${count > 1 ? ` ${index + 1}` : ''}` })));
      };
      const addAll = (count = 1, round = false, motion = 'fade') => placements.forEach((placement) => add(placement, count, round, motion));
      const remove = (itemId) => { items.value = items.value.filter((item) => item.id !== itemId); };
      onMounted(() => add('bottom-center', 1, false, 'slide'));
      return { placements, labels, items, add, addAll, remove };
    },
    template: `<div class="snackbar_playground">
      <div class="snackbar_playground-controls" aria-label="Snackbar 위치 테스트">
        <Button v-for="placement in placements" :key="placement" variant="outline" size="sm" :label="labels[placement]" @click="add(placement)" />
      </div>
      <div class="snackbar_playground-actions">
        <Button label="모든 위치에 1개" @click="addAll()" />
        <Button color="success" label="각 위치에 3개씩" @click="addAll(3)" />
        <Button variant="outline" label="모든 위치에 라운드" @click="addAll(1, true)" />
        <Button variant="outline" label="모든 위치 Slide" @click="addAll(1, false, 'slide')" />
        <Button variant="ghost" label="전체 닫기" :disabled="!items.length" @click="items = []" />
      </div>
    </div>
    <SnackbarRegion v-for="placement in placements" :key="placement" :placement="placement">
      <Snackbar v-for="item in items.filter((entry) => entry.placement === placement)" :key="item.id" v-bind="item" :duration="8000" closable @close="remove(item.id)" />
    </SnackbarRegion>`,
  })),
};

export const Simple = {
  name: '간단한 메시지',
  render: withDocsCanvasRender(() => ({
    components: { Snackbar },
    template: '<Snackbar :show-icon="false">인터넷 연결이 복구되었습니다.</Snackbar>',
  })),
};

export const Shape = {
  name: '형태',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(() => ({
    components: { Button, Snackbar },
    template: `<Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar round color="warning" message="액션과 닫기가 포함된 라운드" closable>
        <template #action="{ close }"><Button variant="ghost" size="sm" label="확인" @click="close('action', $event)" /></template>
      </Snackbar>`,
  })),
};

export const Motion = {
  name: '호출 · 닫기 효과',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(() => ({
    components: { Snackbar },
    template: '<Snackbar motion="fade" message="Fade 효과" /><Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" /><Snackbar motion="none" message="전환 효과 없음" />',
  })),
};

export const Size = {
  name: '크기',
  parameters: { demoPreview: { stack: true } },
  render: withDocsCanvasRender(() => ({
    components: { Snackbar },
    template: '<Snackbar size="sm" message="Small Snackbar" /><Snackbar message="Medium Snackbar" /><Snackbar size="lg" message="Large Snackbar" />',
  })),
};

export const Action = {
  name: '액션',
  render: withDocsCanvasRender(() => ({
    components: { Button, Snackbar },
    template: '<Snackbar color="success" message="항목을 삭제했습니다."><template #action="{ close }"><Button variant="ghost" size="sm" label="실행 취소" @click="close(\'action\', $event)" /></template></Snackbar>',
  })),
};

export const Closable = {
  name: '닫기 가능',
  render: withDocsCanvasRender(() => ({
    components: { Snackbar },
    template: '<Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." />',
  })),
};

export const Duration = {
  name: '자동 닫기',
  render: withDocsCanvasRender(() => ({
    components: { Snackbar },
    template: '<Snackbar :duration="4000" color="success" message="실제 서비스에서는 duration=4000처럼 자동 닫기를 설정할 수 있습니다." />',
  })),
};

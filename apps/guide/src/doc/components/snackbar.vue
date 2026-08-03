<script>
export const docMeta = {
  title: 'Snackbar | HTML Components',
  activeNav: 'snackbar',
  pageTitle: 'Snackbar',
};
</script>

<script setup>
import { onMounted, ref } from 'vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Snackbar from '@uxkm/ui/components/Snackbar.vue';
import SnackbarRegion from '@uxkm/ui/components/SnackbarRegion.vue';
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
} from '@/doc/data/snackbar-api';

const placements = [
  'top-start', 'top-center', 'top-end',
  'middle-start', 'middle-end',
  'bottom-start', 'bottom-center', 'bottom-end',
];
const placementLabels = {
  'top-start': '상단 좌측',
  'top-center': '상단 가운데',
  'top-end': '상단 우측',
  'middle-start': '중간 좌측',
  'middle-end': '중간 우측',
  'bottom-start': '하단 좌측',
  'bottom-center': '하단 가운데',
  'bottom-end': '하단 우측',
};
const placementItems = ref([]);
let snackbarId = 0;

function addSnackbar(placement, count = 1, round = false, motion = 'fade') {
  const additions = Array.from({ length: count }, (_, index) => ({
    id: ++snackbarId,
    placement,
    message: `${placementLabels[placement]} Snackbar${count > 1 ? ` ${index + 1}` : ''}`,
    round,
    motion,
  }));
  placementItems.value.push(...additions);
}

function addToEveryPlacement(count = 1, round = false, motion = 'fade') {
  placements.forEach((placement) => addSnackbar(placement, count, round, motion));
}

function removeSnackbar(id) {
  placementItems.value = placementItems.value.filter((item) => item.id !== id);
}

onMounted(() => addSnackbar('bottom-center', 1, false, 'slide'));

const basicCode = `<script setup>
import Snackbar from '@uxkm/ui/components/Snackbar.vue';
<\/script>

<template>
  <Snackbar color="info" message="새로운 업데이트가 있습니다." />
  <Snackbar color="success" message="변경 사항을 저장했습니다." />
  <Snackbar color="warning" message="세션이 곧 만료됩니다." />
  <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
</template>`;

const placementCode = `<script setup>
import { ref } from 'vue';
import Snackbar from '@uxkm/ui/components/Snackbar.vue';
import SnackbarRegion from '@uxkm/ui/components/SnackbarRegion.vue';

const items = ref([]);
<\/script>

<template>
  <SnackbarRegion v-for="placement in placements" :key="placement" :placement="placement">
    <Snackbar
      v-for="item in items.filter((item) => item.placement === placement)"
      :key="item.id"
      :message="item.message"
      :motion="item.motion"
      :round="item.round"
      :duration="8000"
      closable
    />
  </SnackbarRegion>
</template>`;

const simpleCode = `<template>
  <Snackbar :show-icon="false">인터넷 연결이 복구되었습니다.</Snackbar>
</template>`;

const shapeCode = `<template>
  <Snackbar message="기본 스퀘어 라운드" />
  <Snackbar round color="success" message="비율형 캡슐 라운드" />
  <Snackbar round color="warning" message="액션과 닫기가 포함된 라운드" closable>
    <template #action="{ close }">
      <Button variant="ghost" size="sm" label="확인" @click="close('action', $event)" />
    </template>
  </Snackbar>
</template>`;

const motionCode = `<template>
  <Snackbar motion="fade" message="Fade 효과" />
  <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
  <Snackbar motion="none" message="전환 효과 없음" />
</template>`;

const sizeCode = `<template>
  <Snackbar size="sm" message="Small Snackbar" />
  <Snackbar message="Medium Snackbar" />
  <Snackbar size="lg" message="Large Snackbar" />
</template>`;

const actionCode = `<template>
  <Snackbar color="success" message="항목을 삭제했습니다.">
    <template #action="{ close }">
      <Button variant="ghost" size="sm" label="실행 취소" @click="close('action', $event)" />
    </template>
  </Snackbar>
</template>`;

const closeCode = `<template>
  <Snackbar
    closable
    color="warning"
    message="브라우저를 최신 버전으로 업데이트해 주세요."
    @close="(reason, event) => console.log(reason, event)"
  />
</template>`;

const durationCode = `<template>
  <Snackbar
    :duration="4000"
    color="success"
    message="4초 후 자동으로 닫힙니다."
    @close="(reason) => console.log(reason)"
  />
</template>`;
</script>

<template>
  <div class="page_intro">
    <h1>Snackbar</h1>
    <p class="lead">작업 결과나 짧은 상태 메시지를 일시적으로 전달하는 Vue 컴포넌트입니다.</p>
  </div>

  <DemoSection heading-id="basic-heading" title="기본" description="info · success · warning · danger 의미 색상으로 짧은 피드백을 전달합니다." stack :code="basicCode">
    <Snackbar color="info" message="새로운 업데이트가 있습니다." />
    <Snackbar color="success" message="변경 사항을 저장했습니다." />
    <Snackbar color="warning" message="세션이 곧 만료됩니다." />
    <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
  </DemoSection>

  <DemoSection
    heading-id="placement-heading"
    title="위치 · 여러 개 동작 테스트"
    description="8개 위치는 본문이 아닌 브라우저 뷰포트를 기준으로 계산됩니다. 이 데모는 처음 로드할 때 하단 가운데 Snackbar를 호출하며, 같은 위치에 여러 개가 생성되면 독립적으로 쌓입니다."
    :code="placementCode"
  >
    <div class="snackbar_playground">
      <div class="snackbar_playground-controls" aria-label="Snackbar 위치 테스트">
        <Button
          v-for="placement in placements"
          :key="placement"
          variant="outline"
          size="sm"
          :label="placementLabels[placement]"
          @click="addSnackbar(placement)"
        />
      </div>
      <div class="snackbar_playground-actions">
        <Button variant="filled" label="모든 위치에 1개" @click="addToEveryPlacement()" />
        <Button variant="filled" color="success" label="각 위치에 3개씩" @click="addToEveryPlacement(3)" />
        <Button variant="outline" label="모든 위치에 라운드" @click="addToEveryPlacement(1, true)" />
        <Button variant="outline" label="모든 위치 Slide" @click="addToEveryPlacement(1, false, 'slide')" />
        <Button variant="ghost" label="전체 닫기" :disabled="!placementItems.length" @click="placementItems = []" />
      </div>
    </div>
    <SnackbarRegion v-for="placement in placements" :key="placement" :placement="placement">
      <Snackbar
        v-for="item in placementItems.filter((entry) => entry.placement === placement)"
        :key="item.id"
        :message="item.message"
        :round="item.round"
        :motion="item.motion"
        :duration="8000"
        closable
        @close="removeSnackbar(item.id)"
      />
    </SnackbarRegion>
  </DemoSection>

  <DemoSection heading-id="simple-heading" title="간단한 메시지" description="showIcon을 끄고 default 슬롯으로 메시지를 전달할 수 있습니다." :code="simpleCode">
    <Snackbar :show-icon="false">인터넷 연결이 복구되었습니다.</Snackbar>
  </DemoSection>

  <DemoSection heading-id="shape-heading" title="형태" description="기본형은 radius-md를 사용하고, round 유형은 Snackbar 높이 비율에 맞춘 캡슐형 모서리와 크기별 가로 패딩을 적용합니다." stack :code="shapeCode">
    <Snackbar message="기본 스퀘어 라운드" />
    <Snackbar round color="success" message="비율형 캡슐 라운드" />
    <Snackbar round color="warning" message="액션과 닫기가 포함된 라운드" closable>
      <template #action="{ close }"><Button variant="ghost" size="sm" label="확인" @click="close('action', $event)" /></template>
    </Snackbar>
  </DemoSection>

  <DemoSection heading-id="motion-heading" title="호출 · 닫기 효과" description="fade는 제자리에서 투명도를 전환하고, slide는 상단·하단·중간 좌우 위치에 따라 가장 가까운 브라우저 가장자리 방향으로 호출·퇴장합니다. none은 즉시 표시하고 닫습니다." stack :code="motionCode">
    <Snackbar motion="fade" message="Fade 효과" />
    <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
    <Snackbar motion="none" message="전환 효과 없음" />
  </DemoSection>

  <DemoSection heading-id="size-heading" title="크기" description="sm · md · lg 세 가지 크기를 제공합니다." stack :code="sizeCode">
    <Snackbar size="sm" message="Small Snackbar" />
    <Snackbar message="Medium Snackbar" />
    <Snackbar size="lg" message="Large Snackbar" />
  </DemoSection>

  <DemoSection heading-id="action-heading" title="액션" description="action 영역에 실행 취소 등 하나의 명확한 후속 동작을 배치합니다." :code="actionCode">
    <Snackbar color="success" message="항목을 삭제했습니다.">
      <template #action="{ close }"><Button variant="ghost" size="sm" label="실행 취소" @click="close('action', $event)" /></template>
    </Snackbar>
  </DemoSection>

  <DemoSection heading-id="close-heading" title="닫기 가능" description="닫기 버튼은 close 이벤트에 close 사유와 클릭 이벤트를 전달합니다." :code="closeCode">
    <Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." />
  </DemoSection>

  <DemoSection heading-id="duration-heading" title="자동 닫기" description="duration을 밀리초로 지정하면 시간이 지난 뒤 close 이벤트에 timeout 사유를 전달합니다. 호버하거나 내부 요소에 포커스하면 남은 시간이 일시정지됩니다." :code="durationCode">
    <Snackbar :duration="4000" color="success" message="실제 서비스에서는 duration=4000처럼 자동 닫기를 설정할 수 있습니다." />
  </DemoSection>

  <ApiSection heading-id="accessibility-heading" title="접근성" description="Snackbar는 포커스를 강제로 이동하지 않고 라이브 영역으로 상태 변화를 전달합니다.">
    <ul class="typo_list">
      <li>일반적인 작업 결과는 <code class="typo_code">role="status"</code>로 정중하게 알리고, 즉시 확인해야 하는 오류에만 <code class="typo_code">role="alert"</code>를 사용합니다.</li>
      <li>자동 닫기는 기본적으로 비활성화되어 있습니다. 사용하는 경우에도 내용을 읽고 액션을 수행할 충분한 시간을 제공하세요.</li>
      <li>호버 또는 Snackbar 내부 포커스 중에는 자동 닫기 타이머가 멈춥니다. 닫기 가능한 Snackbar는 내부 포커스 상태에서 Esc로도 닫을 수 있습니다.</li>
      <li>운영체제에서 모션 감소를 설정한 경우 Fade·Slide 시간을 최소화해 움직임을 줄입니다.</li>
      <li>아이콘은 장식 요소로 숨겨지므로 상태를 색상이나 아이콘에만 의존하지 말고 메시지 텍스트로 명확하게 설명하세요.</li>
      <li>액션은 하나의 짧고 명확한 동작으로 제공하고, 닫기 버튼에는 구체적인 <code class="typo_code">close-label</code>을 사용하세요.</li>
    </ul>
  </ApiSection>

  <ApiSection heading-id="api-props-heading" title="API · Props"><ApiTable :columns="snackbarPropColumns" :rows="snackbarProps" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-region-heading" title="API · SnackbarRegion"><ApiTable :columns="snackbarPropColumns" :rows="snackbarRegionProps" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-slots-heading" title="API · Slots"><ApiTable :columns="snackbarSlotColumns" :rows="snackbarSlots" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-events-heading" title="API · Events"><ApiTable :columns="snackbarEventColumns" :rows="snackbarEvents" code-column="name" /></ApiSection>
  <ApiSection heading-id="api-classes-heading" title="클래스 · 속성"><ApiTable :columns="snackbarClassColumns" :rows="snackbarClasses" code-column="name" /></ApiSection>
  <ApiSection heading-id="tokens-heading" title="디자인 토큰"><ApiTable :columns="snackbarTokenColumns" :rows="snackbarTokens" code-column="name" /></ApiSection>
</template>

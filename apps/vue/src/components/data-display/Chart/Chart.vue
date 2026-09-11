<script setup>
// Vue는 prop과 수명 주기를 관리하고 SVG·툴팁 생성은 공통 렌더러에 맡깁니다.
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { renderChart } from "@uxkm/interactions/chart";

defineOptions({ name: "UxkmChart" });
const props = defineProps({
  data: { type: Array, default: () => [] }, // { label, value, color?, pattern? } 항목 배열입니다.
  type: { type: String, default: "bar" }, // bar · line · area · donut · arc 유형입니다.
  title: { type: String, default: "차트" }, // 화면 제목과 SVG 접근성 이름입니다.
  description: { type: String, default: "" }, // 제목 아래의 보조 설명입니다.
  unit: { type: String, default: "" }, // 수치 뒤에 붙일 단위입니다.
  height: { type: [Number, String], default: 320 }, // 숫자는 px, 문자열은 CSS 높이입니다.
  color: { type: String, default: "var(--chart-color, #2563eb)" }, // 막대·선·영역 색상입니다.
  pattern: { type: String, default: "auto" }, // data.pattern이 우선하며 auto는 여섯 패턴을 순환합니다.
  monochrome: { type: Boolean, default: false }, // 막대·원형을 공통 잉크 색상으로 표시합니다.
  displayStyle: { type: String, default: "auto" }, // auto · color · pattern · monochrome. 명시하면 항목별 패턴보다 우선합니다.
  showLegend: { type: Boolean, default: true }, // 막대·도넛·아크 범례 표시 여부입니다.
  showGrid: { type: Boolean, default: true }, // 좌표축 격자 표시 여부입니다.
  emptyMessage: { type: String, default: "표시할 데이터가 없습니다." }, // 빈 상태 안내 문자열입니다.
});
// host 내부 DOM은 렌더러가 관리하며 destroy로 이벤트·observer·DOM을 해제합니다.
const host = ref(null);
let destroy;
function render() {
  if (!host.value) return;
  destroy?.();
  destroy = renderChart(host.value, props);
}
// DOM이 있는 마운트 이후에 그립니다. 서버에서는 빈 host만 생성됩니다.
onMounted(render);
// 배열 내부 값 변경도 감지하며 Vue DOM 갱신 후 이전 차트를 정리하고 다시 그립니다.
watch(props, render, { deep: true, flush: "post" });
// 페이지 이동이나 조건부 제거 시 문서 이벤트와 크기 관찰이 남지 않게 합니다.
onBeforeUnmount(() => destroy?.());
</script>

<template>
  <!-- 부모 너비를 채우고 flex/grid 안에서도 축소될 수 있도록 최소 너비를 해제합니다. -->
  <div ref="host" style="width: 100%; min-width: 0" />
</template>

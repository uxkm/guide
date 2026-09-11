<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { renderChartEcharts } from "@uxkm/html/chart-echarts";

defineOptions({ name: "UxkmChartEcharts" });
const props = defineProps({
  data: { type: Array, default: () => [] },
  type: { type: String, default: "bar" }, // bar · line · area · donut · pie
  title: { type: String, default: "차트" },
  description: { type: String, default: "" },
  unit: { type: String, default: "" },
  height: { type: [Number, String], default: 320 },
  color: { type: String, default: "var(--chart-color, #2563eb)" },
  showLegend: { type: Boolean, default: true },
  showGrid: { type: Boolean, default: true },
  emptyMessage: { type: String, default: "표시할 데이터가 없습니다." },
  chartOptions: { type: Object, default: null }, // ECharts option 병합 객체입니다.
  className: { type: String, default: "" },
});
const host = ref(null);
let destroy;
function render() {
  if (!host.value) return;
  destroy?.();
  destroy = renderChartEcharts(host.value, props);
}
onMounted(render);
watch(props, render, { deep: true, flush: "post" });
onBeforeUnmount(() => destroy?.());
</script>

<template>
  <div ref="host" style="width: 100%; min-width: 0" />
</template>

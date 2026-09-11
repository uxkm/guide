<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { renderChartD3 } from "@uxkm/html/chart-d3";

defineOptions({ name: "UxkmChartD3" });
const props = defineProps({
  data: { type: Array, default: () => [] },
  type: { type: String, default: "bar" },
  title: { type: String, default: "차트" },
  description: { type: String, default: "" },
  unit: { type: String, default: "" },
  height: { type: [Number, String], default: 320 },
  color: { type: String, default: "var(--chart-color, #2563eb)" },
  showLegend: { type: Boolean, default: true },
  showGrid: { type: Boolean, default: true },
  emptyMessage: { type: String, default: "표시할 데이터가 없습니다." },
  chartOptions: { type: Object, default: null },
  className: { type: String, default: "" },
});
const host = ref(null);
let destroy;
function render() {
  if (!host.value) return;
  destroy?.();
  destroy = renderChartD3(host.value, props);
}
onMounted(render);
watch(props, render, { deep: true, flush: "post" });
onBeforeUnmount(() => destroy?.());
</script>

<template>
  <div ref="host" style="width: 100%; min-width: 0" />
</template>

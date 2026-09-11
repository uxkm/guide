import { chartEchartsUsageExamples } from "./chartEchartsUsageExamples";
import type { FrameworkExample } from "./FrameworkCode";
import * as stories from "./ChartEcharts.stories";
import reactSource from "../../react/src/components/data-display/ChartEcharts/ChartEcharts.jsx?raw";
import vueSource from "../../vue/src/components/data-display/ChartEcharts/ChartEcharts.vue?raw";
import gulpSource from "../../gulp/src/components/data-display/ChartEcharts/chart-echarts.njk?raw";
import runtimeSource from "../../html/src/components/data-display/ChartEcharts/chart-echarts.js?raw";
import htmlSource from "../../html/src/components/data-display/ChartEcharts/ChartEcharts.html?raw";

export const chartEchartsComponentExamples: FrameworkExample[] = [
  {
    id: "html",
    label: "HTML",
    fileName:
      "apps/html/src/components/data-display/ChartEcharts/ChartEcharts.html",
    code: htmlSource,
  },
  {
    id: "gulp",
    label: "Gulp",
    fileName: "ChartEcharts/chart-echarts.njk · @uxkm/html/chart-echarts",
    code: gulpSource,
  },
  {
    id: "vue",
    label: "Vue",
    fileName: "apps/vue/src/components/data-display/ChartEcharts/ChartEcharts.vue",
    code: vueSource,
  },
  {
    id: "react",
    label: "React",
    fileName:
      "apps/react/src/components/data-display/ChartEcharts/ChartEcharts.jsx",
    code: reactSource,
  },
];

export const chartEchartsRuntimeExamples: FrameworkExample[] = [
  {
    id: "javascript",
    label: "JavaScript",
    fileName: "apps/html/.../ChartEcharts/chart-echarts.js",
    code: runtimeSource,
  },
];

const keys = [
  "Bar",
  "Line",
  "Area",
  "Donut",
  "Pie",
  "Empty",
  "CustomEmpty",
] as const;

function makeExamples(key: (typeof keys)[number]): FrameworkExample[] {
  return chartEchartsUsageExamples(
    { ...stories.default.args, ...stories[key].args },
    key,
  );
}

export const chartEchartsFrameworkExamples = Object.fromEntries(
  keys.map((key) => [key, makeExamples(key)]),
) as Record<(typeof keys)[number], FrameworkExample[]>;

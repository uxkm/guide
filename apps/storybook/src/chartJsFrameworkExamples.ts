import { chartJsUsageExamples } from "./chartJsUsageExamples";
import type { FrameworkExample } from "./FrameworkCode";
import * as stories from "./ChartJs.stories";
import reactSource from "../../react/src/components/data-display/ChartJs/ChartJs.jsx?raw";
import vueSource from "../../vue/src/components/data-display/ChartJs/ChartJs.vue?raw";
import gulpSource from "../../gulp/src/components/data-display/ChartJs/chart-js.njk?raw";
import runtimeSource from "../../html/src/components/data-display/ChartJs/chart-js.js?raw";
import htmlSource from "../../html/src/components/data-display/ChartJs/ChartJs.html?raw";

export const chartJsComponentExamples: FrameworkExample[] = [
  {
    id: "html",
    label: "HTML",
    fileName: "apps/html/src/components/data-display/ChartJs/ChartJs.html",
    code: htmlSource,
  },
  {
    id: "gulp",
    label: "Gulp",
    fileName: "ChartJs/chart-js.njk · @uxkm/html/chart-js",
    code: gulpSource,
  },
  {
    id: "vue",
    label: "Vue",
    fileName: "apps/vue/src/components/data-display/ChartJs/ChartJs.vue",
    code: vueSource,
  },
  {
    id: "react",
    label: "React",
    fileName: "apps/react/src/components/data-display/ChartJs/ChartJs.jsx",
    code: reactSource,
  },
];

export const chartJsRuntimeExamples: FrameworkExample[] = [
  {
    id: "javascript",
    label: "JavaScript",
    fileName: "apps/html/.../ChartJs/chart-js.js",
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
  return chartJsUsageExamples(
    { ...stories.default.args, ...stories[key].args },
    key,
  );
}

export const chartJsFrameworkExamples = Object.fromEntries(
  keys.map((key) => [key, makeExamples(key)]),
) as Record<(typeof keys)[number], FrameworkExample[]>;

import { chartUsageExamples } from "./chartUsageExamples";
import type { FrameworkExample } from "./FrameworkCode";
import * as stories from "./Chart.stories";
import reactSource from "../../react/src/components/data-display/Chart/Chart.jsx?raw";
import vueSource from "../../vue/src/components/data-display/Chart/Chart.vue?raw";
import gulpSource from "../../gulp/src/components/data-display/Chart/chart.njk?raw";
import runtimeSource from "../../../packages/interactions/src/chart.js?raw";
import htmlSource from "../../html/src/components/data-display/Chart/Chart.html?raw";
import patternSource from "../../../packages/interactions/src/chart-patterns.js?raw";

export const chartComponentExamples: FrameworkExample[] = [
  {
    id: "html",
    label: "HTML",
    fileName: "apps/html/src/components/data-display/Chart/Chart.html",
    code: htmlSource,
  },
  {
    id: "gulp",
    label: "Gulp",
    fileName: "Chart/chart.njk · @uxkm/interactions/chart",
    code: gulpSource,
  },
  {
    id: "vue",
    label: "Vue",
    fileName: "apps/vue/src/components/data-display/Chart/Chart.vue",
    code: vueSource,
  },
  {
    id: "react",
    label: "React",
    fileName: "apps/react/src/components/data-display/Chart/Chart.jsx",
    code: reactSource,
  },
];

export const chartRuntimeExamples: FrameworkExample[] = [
  {
    id: "javascript",
    label: "JavaScript",
    fileName: "packages/interactions/src/chart-patterns.js · chart.js",
    code: `// chart-patterns.js — 패턴 정의\n${patternSource}\n\n// chart.js — 공통 렌더러\n${runtimeSource}`,
  },
];

const keys = [
  "Bar",
  "Line",
  "Area",
  "Donut",
  "Arc",
  "NegativeValues",
  "Empty",
  "CustomEmpty",
  "MonochromeBar",
  "MonochromeDonut",
  "MonochromeArc",
] as const;

function makeExamples(key: (typeof keys)[number]): FrameworkExample[] {
  return chartUsageExamples(
    { ...stories.default.args, ...stories[key].args },
    key,
  );
}

export const chartFrameworkExamples = Object.fromEntries(
  keys.map((key) => [key, makeExamples(key)]),
) as Record<(typeof keys)[number], FrameworkExample[]>;

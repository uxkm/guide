import {
  chartHighchartsUsageExamples,
  chartD3UsageExamples,
} from "./chartHighchartsD3UsageExamples";
import type { FrameworkExample } from "./FrameworkCode";
import * as highchartsStories from "./ChartHighcharts.stories";
import * as d3Stories from "./ChartD3.stories";
import highchartsReact from "../../react/src/components/data-display/ChartHighcharts/ChartHighcharts.jsx?raw";
import highchartsVue from "../../vue/src/components/data-display/ChartHighcharts/ChartHighcharts.vue?raw";
import highchartsGulp from "../../gulp/src/components/data-display/ChartHighcharts/chart-highcharts.njk?raw";
import highchartsRuntime from "../../html/src/components/data-display/ChartHighcharts/chart-highcharts.js?raw";
import highchartsHtml from "../../html/src/components/data-display/ChartHighcharts/ChartHighcharts.html?raw";
import d3React from "../../react/src/components/data-display/ChartD3/ChartD3.jsx?raw";
import d3Vue from "../../vue/src/components/data-display/ChartD3/ChartD3.vue?raw";
import d3Gulp from "../../gulp/src/components/data-display/ChartD3/chart-d3.njk?raw";
import d3Runtime from "../../html/src/components/data-display/ChartD3/chart-d3.js?raw";
import d3Html from "../../html/src/components/data-display/ChartD3/ChartD3.html?raw";

const keys = [
  "Bar",
  "Line",
  "Area",
  "Donut",
  "Pie",
  "Empty",
  "CustomEmpty",
] as const;

export const chartHighchartsComponentExamples: FrameworkExample[] = [
  {
    id: "html",
    label: "HTML",
    fileName: "ChartHighcharts/ChartHighcharts.html",
    code: highchartsHtml,
  },
  {
    id: "gulp",
    label: "Gulp",
    fileName: "chart-highcharts.njk",
    code: highchartsGulp,
  },
  {
    id: "vue",
    label: "Vue",
    fileName: "ChartHighcharts.vue",
    code: highchartsVue,
  },
  {
    id: "react",
    label: "React",
    fileName: "ChartHighcharts.jsx",
    code: highchartsReact,
  },
];

export const chartHighchartsRuntimeExamples: FrameworkExample[] = [
  {
    id: "javascript",
    label: "JavaScript",
    fileName: "chart-highcharts.js",
    code: highchartsRuntime,
  },
];

export const chartHighchartsFrameworkExamples = Object.fromEntries(
  keys.map((key) => [
    key,
    chartHighchartsUsageExamples(
      { ...highchartsStories.default.args, ...highchartsStories[key].args },
      key,
    ),
  ]),
) as Record<(typeof keys)[number], FrameworkExample[]>;

export const chartD3ComponentExamples: FrameworkExample[] = [
  {
    id: "html",
    label: "HTML",
    fileName: "ChartD3/ChartD3.html",
    code: d3Html,
  },
  { id: "gulp", label: "Gulp", fileName: "chart-d3.njk", code: d3Gulp },
  { id: "vue", label: "Vue", fileName: "ChartD3.vue", code: d3Vue },
  { id: "react", label: "React", fileName: "ChartD3.jsx", code: d3React },
];

export const chartD3RuntimeExamples: FrameworkExample[] = [
  {
    id: "javascript",
    label: "JavaScript",
    fileName: "chart-d3.js",
    code: d3Runtime,
  },
];

export const chartD3FrameworkExamples = Object.fromEntries(
  keys.map((key) => [
    key,
    chartD3UsageExamples(
      { ...d3Stories.default.args, ...d3Stories[key].args },
      key,
    ),
  ]),
) as Record<(typeof keys)[number], FrameworkExample[]>;

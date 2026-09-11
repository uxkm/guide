import type { FrameworkExample } from "./FrameworkCode";

export function chartEchartsUsageExamples(
  options: Record<string, unknown>,
  key = "Example",
): FrameworkExample[] {
  const json = JSON.stringify(options, null, 2);
  const htmlOptions = json
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const gulpArgs = Object.entries(options)
    .map(([name, value]) => `  ${name}=${JSON.stringify(value)}`)
    .join(",\n");
  return [
    {
      id: "html",
      label: "HTML",
      fileName: `ChartEcharts 예제 · ${key}.html`,
      code: `<!-- data-chart-echarts-options의 JSON으로 차트 유형과 데이터를 지정합니다. -->\n<div\n  data-chart-echarts-options='${htmlOptions}'\n  style="width: 100%; min-width: 0"\n></div>\n\n<script type="module" src="/src/scripts/main.js"></script>`,
    },
    {
      id: "gulp",
      label: "Gulp",
      fileName: `ChartEcharts 예제 · ${key}.njk`,
      code: `{% from "components/data-display/ChartEcharts/chart-echarts.njk" import chartEcharts %}\n\n{{ chartEcharts(\n${gulpArgs}\n) }}\n\n<script type="module" src="/scripts/main.js"></script>`,
    },
    {
      id: "vue",
      label: "Vue",
      fileName: `@uxkm/vue/chart-echarts · ${key}.vue`,
      code: `<script setup>\nimport ChartEcharts from '@uxkm/vue/chart-echarts';\n\nconst options = ${json};\n</script>\n\n<template>\n  <ChartEcharts v-bind="options" />\n</template>`,
    },
    {
      id: "react",
      label: "React",
      fileName: `@uxkm/react/chart-echarts · ${key}.jsx`,
      code: `import ChartEcharts from '@uxkm/react/chart-echarts';\n\nconst options = ${json};\n\nexport default function Example() {\n  return <ChartEcharts {...options} />;\n}`,
    },
  ];
}

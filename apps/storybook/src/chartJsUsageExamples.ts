import type { FrameworkExample } from "./FrameworkCode";

export function chartJsUsageExamples(
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
      fileName: `ChartJs 예제 · ${key}.html`,
      code: `<!-- data-chart-js-options의 JSON으로 차트 유형과 데이터를 지정합니다. -->\n<div\n  data-chart-js-options='${htmlOptions}'\n  style="width: 100%; min-width: 0"\n></div>\n\n<!-- 페이지에서 한 번 로드: main.js에 initChartJs()가 등록되어 있습니다. -->\n<script type="module" src="/src/scripts/main.js"></script>`,
    },
    {
      id: "gulp",
      label: "Gulp",
      fileName: `ChartJs 예제 · ${key}.njk`,
      code: `{% from "components/data-display/ChartJs/chart-js.njk" import chartJs %}\n\n{{ chartJs(\n${gulpArgs}\n) }}\n\n{# 레이아웃에서 한 번 로드: main.js에 initChartJs()가 등록되어 있습니다. #}\n<script type="module" src="/scripts/main.js"></script>`,
    },
    {
      id: "vue",
      label: "Vue",
      fileName: `@uxkm/vue/chart-js · ${key}.vue`,
      code: `<script setup>\nimport ChartJs from '@uxkm/vue/chart-js';\n\nconst options = ${json};\n</script>\n\n<template>\n  <ChartJs v-bind="options" />\n</template>`,
    },
    {
      id: "react",
      label: "React",
      fileName: `@uxkm/react/chart-js · ${key}.jsx`,
      code: `import ChartJs from '@uxkm/react/chart-js';\n\nconst options = ${json};\n\nexport default function Example() {\n  return <ChartJs {...options} />;\n}`,
    },
  ];
}

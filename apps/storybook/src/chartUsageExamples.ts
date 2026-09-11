import type { FrameworkExample } from "./FrameworkCode";

export function chartUsageExamples(
  options: Record<string, unknown>,
  key = "Example",
): FrameworkExample[] {
  const json = JSON.stringify(options, null, 2);
  // 작은따옴표로 감싼 HTML 속성에 JSON을 안전하게 넣습니다.
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
      fileName: `Chart 예제 · ${key}.html`,
      code: `<!-- data-chart-options의 JSON으로 차트 유형과 데이터를 지정합니다. -->\n<div\n  data-chart-options='${htmlOptions}'\n  style="width: 100%; min-width: 0"\n></div>\n\n<!-- 페이지에서 한 번 로드: main.js에 initCharts()가 등록되어 있습니다. -->\n<script type="module" src="/src/scripts/main.js"></script>`,
    },
    {
      id: "gulp",
      label: "Gulp",
      fileName: `Chart 예제 · ${key}.njk`,
      code: `{% from "components/data-display/Chart/chart.njk" import chart %}\n\n{{ chart(\n${gulpArgs}\n) }}\n\n{# 레이아웃에서 한 번 로드: main.js에 initCharts()가 등록되어 있습니다. #}\n<script type="module" src="/scripts/main.js"></script>`,
    },
    {
      id: "vue",
      label: "Vue",
      fileName: `@uxkm/vue/chart · ${key}.vue`,
      code: `<script setup>\nimport Chart from '@uxkm/vue/chart';\n\nconst options = ${json};\n</script>\n\n<template>\n  <Chart v-bind="options" />\n</template>`,
    },
    {
      id: "react",
      label: "React",
      fileName: `@uxkm/react/chart · ${key}.jsx`,
      code: `import Chart from '@uxkm/react/chart';\n\nconst options = ${json};\n\nexport default function Example() {\n  return <Chart {...options} />;\n}`,
    },
  ];
}

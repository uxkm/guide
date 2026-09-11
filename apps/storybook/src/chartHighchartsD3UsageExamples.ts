import type { FrameworkExample } from "./FrameworkCode";

function makeUsage(
  name: string,
  attr: string,
  macro: string,
  file: string,
  pkg: string,
  options: Record<string, unknown>,
  key: string,
): FrameworkExample[] {
  const json = JSON.stringify(options, null, 2);
  const htmlOptions = json
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const gulpArgs = Object.entries(options)
    .map(([n, value]) => `  ${n}=${JSON.stringify(value)}`)
    .join(",\n");
  return [
    {
      id: "html",
      label: "HTML",
      fileName: `${name} 예제 · ${key}.html`,
      code: `<div\n  ${attr}='${htmlOptions}'\n  style="width: 100%; min-width: 0"\n></div>\n<script type="module" src="/src/scripts/main.js"></script>`,
    },
    {
      id: "gulp",
      label: "Gulp",
      fileName: `${name} 예제 · ${key}.njk`,
      code: `{% from "components/data-display/${name}/${file}.njk" import ${macro} %}\n\n{{ ${macro}(\n${gulpArgs}\n) }}`,
    },
    {
      id: "vue",
      label: "Vue",
      fileName: `@uxkm/vue/${pkg} · ${key}.vue`,
      code: `<script setup>\nimport ${name} from '@uxkm/vue/${pkg}';\nconst options = ${json};\n</script>\n<template>\n  <${name} v-bind="options" />\n</template>`,
    },
    {
      id: "react",
      label: "React",
      fileName: `@uxkm/react/${pkg} · ${key}.jsx`,
      code: `import ${name} from '@uxkm/react/${pkg}';\nconst options = ${json};\nexport default function Example() {\n  return <${name} {...options} />;\n}`,
    },
  ];
}

export function chartHighchartsUsageExamples(
  options: Record<string, unknown>,
  key = "Example",
) {
  return makeUsage(
    "ChartHighcharts",
    "data-chart-highcharts-options",
    "chartHighcharts",
    "chart-highcharts",
    "chart-highcharts",
    options,
    key,
  );
}

export function chartD3UsageExamples(
  options: Record<string, unknown>,
  key = "Example",
) {
  return makeUsage(
    "ChartD3",
    "data-chart-d3-options",
    "chartD3",
    "chart-d3",
    "chart-d3",
    options,
    key,
  );
}

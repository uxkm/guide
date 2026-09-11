import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i,n as a}from"./blocks-DKrjMPN_.js";import{n as o,t as s}from"./FrameworkTabs-duseEU1T.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./ChartJs.stories-_qkcnbo1.js";import{i as v,r as y}from"./react-CQ14Jk9E.js";function b(e,t=`Example`){let n=JSON.stringify(e,null,2),r=n.replace(/&/g,`&amp;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),i=Object.entries(e).map(([e,t])=>`  ${e}=${JSON.stringify(t)}`).join(`,
`);return[{id:`html`,label:`HTML`,fileName:`ChartJs 예제 · ${t}.html`,code:`<!-- data-chart-js-options의 JSON으로 차트 유형과 데이터를 지정합니다. -->\n<div\n  data-chart-js-options='${r}'\n  style="width: 100%; min-width: 0"\n></div>\n\n<!-- 페이지에서 한 번 로드: main.js에 initChartJs()가 등록되어 있습니다. -->\n<script type="module" src="/src/scripts/main.js"><\/script>`},{id:`gulp`,label:`Gulp`,fileName:`ChartJs 예제 · ${t}.njk`,code:`{% from "components/data-display/ChartJs/chart-js.njk" import chartJs %}\n\n{{ chartJs(\n${i}\n) }}\n\n{# 레이아웃에서 한 번 로드: main.js에 initChartJs()가 등록되어 있습니다. #}\n<script type="module" src="/scripts/main.js"><\/script>`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/chart-js · ${t}.vue`,code:`<script setup>\nimport ChartJs from '@uxkm/vue/chart-js';\n\nconst options = ${n};\n<\/script>\n\n<template>\n  <ChartJs v-bind="options" />\n</template>`},{id:`react`,label:`React`,fileName:`@uxkm/react/chart-js · ${t}.jsx`,code:`import ChartJs from '@uxkm/react/chart-js';\n\nconst options = ${n};\n\nexport default function Example() {\n  return <ChartJs {...options} />;\n}`}]}var x;function S(){return(S=e((()=>{x=`import { useEffect, useRef } from "react";
import { renderChartJs } from "@uxkm/html/chart-js";

/** Chart.js 기반 단일 계열 차트. DOM 생성은 공통 렌더러에 맡깁니다. */
export function ChartJs({
  data = [],
  type = "bar", // bar · line · area · donut · pie
  title = "차트",
  description = "",
  unit = "",
  height = 320,
  color = "var(--chart-color, #2563eb)",
  showLegend = true,
  showGrid = true,
  emptyMessage = "표시할 데이터가 없습니다.",
  chartOptions = null, // Chart.js options 병합 객체입니다.
  className = "",
  ...props
}) {
  const host = useRef(null);
  useEffect(() => {
    if (!host.current) return undefined;
    return renderChartJs(host.current, {
      data,
      type,
      title,
      description,
      unit,
      height,
      color,
      showLegend,
      showGrid,
      emptyMessage,
      chartOptions,
      className,
    });
  }, [
    data,
    type,
    title,
    description,
    unit,
    height,
    color,
    showLegend,
    showGrid,
    emptyMessage,
    chartOptions,
    className,
  ]);
  return (
    <div
      {...props}
      ref={host}
      style={{ width: "100%", minWidth: 0, ...(props.style || {}) }}
    />
  );
}

export default ChartJs;
`})))()}var C;function w(){return(w=e((()=>{C=`<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { renderChartJs } from "@uxkm/html/chart-js";

defineOptions({ name: "UxkmChartJs" });
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
  chartOptions: { type: Object, default: null }, // Chart.js options 병합 객체입니다.
  className: { type: String, default: "" },
});
const host = ref(null);
let destroy;
function render() {
  if (!host.value) return;
  destroy?.();
  destroy = renderChartJs(host.value, props);
}
onMounted(render);
watch(props, render, { deep: true, flush: "post" });
onBeforeUnmount(() => destroy?.());
<\/script>

<template>
  <div ref="host" style="width: 100%; min-width: 0" />
</template>
`})))()}var T;function E(){return(E=e((()=>{T=`{#
  ChartJs 매크로: Chart.js로 그립니다. 빌드 시 설정을 HTML에 저장하고 initChartJs()가 canvas를 생성합니다.
  data          : { label, value, color? } 배열입니다.
  type          : bar · line · area · donut · pie 중 선택합니다.
  title         : 화면 제목과 canvas 접근성 이름입니다.
  description   : 제목 아래의 보조 설명입니다.
  unit          : 수치 뒤에 붙일 단위입니다.
  height        : 차트 영역 높이입니다.
  color         : 막대·선·영역 색상입니다. 도넛·파이는 항목별 color를 사용합니다.
  showLegend    : 도넛·파이 범례 표시 여부입니다.
  showGrid      : 막대·선·영역 격자 표시 여부입니다.
  emptyMessage  : 빈 데이터 안내 문자열입니다.
  chartOptions  : Chart.js options 병합 객체입니다.
  className     : 바깥 figure에 추가할 CSS 클래스입니다.
#}
{% macro chartJs(data=[], type='bar', title='차트', description='', unit='', height=320, color='var(--chart-color, #2563eb)', showLegend=true, showGrid=true, emptyMessage='표시할 데이터가 없습니다.', className='', chartOptions=null) %}
{% set options = { data: data, type: type, title: title, description: description, unit: unit, height: height, color: color, showLegend: showLegend, showGrid: showGrid, emptyMessage: emptyMessage, className: className, chartOptions: chartOptions } %}
<div data-chart-js-options="{{ options | dump | forceescape }}" style="width: 100%; min-width: 0"></div>
{% endmacro %}
`})))()}var D;function O(){return(O=e((()=>{D=`/**
 * Chart.js 기반 차트 렌더러.
 * Chart(자체 SVG)와 같은 옵션 형태를 받아 canvas에 그립니다.
 */
import Chart from "chart.js/auto";

const palette = [
  "var(--chart-series-1, #2563eb)",
  "var(--chart-series-2, #0d9488)",
  "var(--chart-series-3, #9333ea)",
  "var(--chart-series-4, #c2410c)",
  "var(--chart-series-5, #be185d)",
  "var(--chart-series-6, #4f46e5)",
];
const format = (value) =>
  new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 2 }).format(value);
let sequence = 0;
const mounted = new WeakMap();

function resolveColor(value, element) {
  if (!value || typeof value !== "string") return value;
  if (!value.includes("var(") && !value.startsWith("color-mix(")) return value;
  const probe = element.ownerDocument.createElement("span");
  probe.style.color = value;
  element.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();
  return resolved || value;
}

function chartType(type) {
  if (type === "area") return "line";
  if (type === "donut") return "doughnut";
  if (["bar", "line", "pie", "doughnut"].includes(type)) return type;
  return "bar";
}

/** Chart.js 인스턴스를 생성하고 해제 함수를 반환합니다. */
export function renderChartJs(root, options = {}) {
  mounted.get(root)?.();
  const {
    data = [],
    title = "차트",
    description = "",
    unit = "",
    height = 320,
    color = "var(--chart-color, #2563eb)",
    showLegend = true,
    showGrid = true,
    emptyMessage = "표시할 데이터가 없습니다.",
    className = "",
    chartOptions = null, // Chart.js 옵션을 깊게 병합할 때 사용합니다.
  } = options;
  const type = ["bar", "line", "area", "donut", "pie"].includes(options.type)
    ? options.type
    : "bar";
  const radial = type === "donut" || type === "pie";
  const points = Array.isArray(data)
    ? data.filter(
        (item) =>
          item && typeof item.label === "string" && Number.isFinite(item.value),
      )
    : [];
  const invalid = radial && points.some((item) => item.value < 0);
  const total = points.reduce((sum, item) => sum + item.value, 0);
  const empty = !points.length || (radial && total === 0);
  const id = \`chart-js-\${++sequence}\`;
  const doc = root.ownerDocument;
  const node = (tag, attrs = {}, text) => {
    const element = doc.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== false)
        element.setAttribute(key, String(value));
    });
    if (text !== undefined) element.textContent = text;
    return element;
  };

  root.replaceChildren();
  const figure = node("figure", {
    class: ["chart-js", \`chart-js_\${type}\`, className].filter(Boolean).join(" "),
    "data-component": "ChartJs",
    role: "group",
    "aria-labelledby": \`\${id}-title\`,
  });
  const caption = node("figcaption");
  caption.append(node("strong", { class: "chart-js_title", id: \`\${id}-title\` }, title));
  if (description)
    caption.append(
      node("p", { class: "chart-js_description", id: \`\${id}-description\` }, description),
    );
  figure.append(caption);

  if (empty || invalid) {
    const message = invalid
      ? "도넛·파이 차트는 0 이상의 값만 지원합니다."
      : emptyMessage;
    figure.append(node("div", { class: "chart-js_empty" }, message));
    root.append(figure);
    const destroy = () => {
      root.replaceChildren();
      mounted.delete(root);
    };
    mounted.set(root, destroy);
    return destroy;
  }

  const visual = node("div", { class: "chart-js_visual" });
  const canvasWrap = node("div", {
    class: "chart-js_plot",
    style: \`height: \${typeof height === "number" ? \`\${height}px\` : height}\`,
  });
  const canvas = node("canvas", {
    id: \`\${id}-canvas\`,
    role: "img",
    "aria-label": title,
  });
  if (description) canvas.setAttribute("aria-describedby", \`\${id}-description\`);
  canvasWrap.append(canvas);
  visual.append(canvasWrap);
  figure.append(visual);

  const details = node("details", { class: "chart-js_data" });
  details.append(
    node(
      "summary",
      { tabindex: 0, "aria-label": \`\${title} 데이터 표 보기\` },
      "데이터 표 보기",
    ),
  );
  const tableWrap = node("div", { class: "chart-js_table-wrap table_wrap" });
  const table = node("table", { class: "table" });
  table.append(node("caption", {}, \`\${title} 데이터\`));
  const thead = node("thead");
  const headRow = node("tr");
  headRow.append(
    node("th", { scope: "col" }, "항목"),
    node("th", { scope: "col" }, unit ? \`값 (\${unit})\` : "값"),
  );
  thead.append(headRow);
  table.append(thead);
  const tbody = node("tbody");
  points.forEach((item) => {
    const row = node("tr");
    row.append(
      node("th", { scope: "row" }, item.label),
      node("td", {}, format(item.value)),
    );
    tbody.append(row);
  });
  table.append(tbody);
  tableWrap.append(table);
  details.append(tableWrap);
  figure.append(details);
  root.append(figure);

  const textColor = resolveColor("var(--color-text, #182131)", figure);
  const mutedColor = resolveColor("var(--color-text-muted, #475569)", figure);
  const seriesColors = points.map((item, index) =>
    resolveColor(
      item.color || (radial ? palette[index % palette.length] : color),
      figure,
    ),
  );
  const labels = points.map((item) => item.label);
  const values = points.map((item) => item.value);
  const jsType = chartType(type);
  const filled = type === "area";
  const dataset = radial
    ? {
        data: values,
        backgroundColor: seriesColors,
        borderWidth: 0,
      }
    : {
        label: title,
        data: values,
        backgroundColor:
          type === "bar"
            ? seriesColors
            : filled
              ? seriesColors[0]
              : "transparent",
        borderColor: seriesColors[0],
        borderWidth: type === "bar" ? 0 : 2,
        fill: filled,
        tension: 0.35,
        pointRadius: type === "line" || filled ? 3 : 0,
        pointHoverRadius: 5,
      };

  const config = {
    type: jsType,
    data: {
      labels,
      datasets: [dataset],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: showLegend && radial,
          position: "bottom",
          labels: { color: textColor, boxWidth: 12, padding: 16 },
        },
        tooltip: {
          callbacks: {
            label(context) {
              const value = radial ? context.raw : context.parsed.y;
              const label = radial
                ? context.label
                : context.dataset.label || title;
              const formatted = format(value);
              return unit
                ? \`\${label}: \${formatted} \${unit}\`
                : \`\${label}: \${formatted}\`;
            },
          },
        },
      },
      scales: radial
        ? undefined
        : {
            x: {
              ticks: { color: mutedColor, maxRotation: 0, autoSkip: true },
              grid: { display: false },
              border: { color: mutedColor },
            },
            y: {
              ticks: {
                color: mutedColor,
                callback(value) {
                  return unit ? \`\${format(value)} \${unit}\` : format(value);
                },
              },
              grid: {
                display: showGrid,
                color: "rgba(100, 116, 139, 0.2)",
              },
              border: { color: mutedColor },
            },
          },
      cutout: type === "donut" ? "58%" : undefined,
    },
  };

  if (chartOptions && typeof chartOptions === "object") {
    config.options = deepMerge(config.options, chartOptions);
  }

  const instance = new Chart(canvas, config);
  const destroy = () => {
    instance.destroy();
    root.replaceChildren();
    mounted.delete(root);
  };
  mounted.set(root, destroy);
  return destroy;
}

function deepMerge(target, source) {
  const output = { ...target };
  Object.entries(source).forEach(([key, value]) => {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      target[key] &&
      typeof target[key] === "object"
    ) {
      output[key] = deepMerge(target[key], value);
    } else {
      output[key] = value;
    }
  });
  return output;
}

/** data-chart-js-options 속성을 가진 요소를 초기화합니다. */
export function initChartJs(root = document) {
  const hosts = [...root.querySelectorAll("[data-chart-js-options]")];
  if (root.matches?.("[data-chart-js-options]")) hosts.unshift(root);
  const cleanups = hosts.map((host) => {
    let options = {};
    try {
      options = JSON.parse(host.getAttribute("data-chart-js-options") || "{}");
    } catch {
      options = {};
    }
    return renderChartJs(host, options);
  });
  return () => cleanups.forEach((cleanup) => cleanup());
}
`})))()}var k;function A(){return(A=e((()=>{k=`<!--
  ChartJs HTML 구현: Chart.js로 그립니다. data-chart-js-options의 JSON을 initChartJs()가 읽습니다.
  data: { label, value, color? } 배열 / type: bar · line · area · donut · pie
  title · description · unit · height · color · showLegend · showGrid · emptyMessage
  chartOptions: Chart.js options 객체를 깊게 병합합니다.
  JSON에는 주석을 넣지 않습니다. 작은따옴표·&·<·>는 HTML 엔티티로 이스케이프하세요.
-->
<div
  data-chart-js-options='{
    "data": [{ "label": "1월", "value": 120 }, { "label": "2월", "value": 180 }],
    "type": "bar",
    "title": "월별 매출",
    "description": "Chart.js 기반 월별 매출",
    "unit": "만원",
    "height": 320,
    "color": "var(--chart-color, #2563eb)",
    "showLegend": true,
    "showGrid": true,
    "emptyMessage": "표시할 데이터가 없습니다."
  }'
  style="width: 100%; min-width: 0"
></div>

<!-- 페이지에서 한 번 로드합니다. 프로젝트의 main.js에 initChartJs()가 등록되어 있습니다. -->
<script type="module" src="/src/scripts/main.js"><\/script>
`})))()}function j(e){return b({..._.args,...m[e].args},e)}var M,N,P,F;function I(){return(I=e((()=>{d(),S(),w(),E(),O(),A(),M=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/ChartJs/ChartJs.html`,code:k},{id:`gulp`,label:`Gulp`,fileName:`ChartJs/chart-js.njk · @uxkm/html/chart-js`,code:T},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/ChartJs/ChartJs.vue`,code:C},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/ChartJs/ChartJs.jsx`,code:x}],N=[{id:`javascript`,label:`JavaScript`,fileName:`apps/html/.../ChartJs/chart-js.js`,code:D}],P=[`Bar`,`Line`,`Area`,`Donut`,`Pie`,`Empty`,`CustomEmpty`],F=Object.fromEntries(P.map(e=>[e,j(e)]))})))()}function L(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...v(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(i,{of:m}),`
`,(0,z.jsx)(t.h1,{id:`chartjs`,children:`ChartJs`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.strong,{children:`라이선스: 무료 (MIT)`}),` — `,(0,z.jsx)(t.a,{href:`https://www.chartjs.org/`,rel:`nofollow`,children:`Chart.js`}),`는 MIT 라이선스로, 상용 프로젝트에서도 무료로 사용할 수 있습니다.`]}),`
`,(0,z.jsxs)(t.p,{children:[`Chart.js를 사용하는 차트 컴포넌트입니다. 라이브러리 없이 SVG로 그리는 `,(0,z.jsx)(t.code,{children:`Chart`}),`와 같은 데이터 형태(`,(0,z.jsx)(t.code,{children:`data`}),`, `,(0,z.jsx)(t.code,{children:`type`}),`, `,(0,z.jsx)(t.code,{children:`title`}),` 등)를 지원합니다.`]}),`
`,(0,z.jsxs)(t.p,{children:[`Vue는 `,(0,z.jsx)(t.code,{children:`@uxkm/vue/chart-js`}),`, React는 `,(0,z.jsx)(t.code,{children:`@uxkm/react/chart-js`}),`로 가져옵니다. Gulp는 `,(0,z.jsx)(t.code,{children:`chartJs`}),` Nunjucks 매크로와 `,(0,z.jsx)(t.code,{children:`main.js`}),`의 `,(0,z.jsx)(t.code,{children:`initChartJs()`}),`를 사용합니다.
HTML은 `,(0,z.jsx)(t.code,{children:`data-chart-js-options`}),`에 JSON을 넣고 `,(0,z.jsx)(t.code,{children:`initChartJs()`}),`로 초기화합니다.
공통 스타일 `,(0,z.jsx)(t.code,{children:`styles/uxkm.css`}),`를 함께 로드하세요.`]}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Chart`}),`와의 차이: 패턴·흑백 모드 대신 Chart.js 네이티브 렌더링과 `,(0,z.jsx)(t.code,{children:`chartOptions`}),` 확장 옵션을 제공합니다. 유형은 `,(0,z.jsx)(t.code,{children:`bar`}),` · `,(0,z.jsx)(t.code,{children:`line`}),` · `,(0,z.jsx)(t.code,{children:`area`}),` · `,(0,z.jsx)(t.code,{children:`donut`}),` · `,(0,z.jsx)(t.code,{children:`pie`}),`입니다.`]}),`
`,(0,z.jsxs)(t.p,{children:[`차트 계열의 무료·유료 비교와 선택 가이드는 `,(0,z.jsx)(t.a,{href:`?path=/docs/%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%91%9C%EC%8B%9C-chart--docs#%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4--%EB%AC%B4%EB%A3%8C--%EC%9C%A0%EB%A3%8C`,children:`Chart`}),` 문서를 참고하세요.
WebSquare 탭은 차트 계열에서 제공하지 않습니다. HTML·Gulp·Vue·React(및 Next/Nuxt 재사용)로 사용하세요.`]}),`
`,(0,z.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,z.jsx)(s,{examples:M,showFullCode:!0}),`
`,(0,z.jsxs)(t.p,{children:[`HTML·Vue·Gulp·React는 아래 공통 렌더러(`,(0,z.jsx)(t.code,{children:`@uxkm/html/chart-js`}),`)로 canvas·데이터 표를 생성합니다. `,(0,z.jsx)(t.code,{children:`chart.js`}),` 패키지 의존성이 필요합니다.`]}),`
`,(0,z.jsx)(s,{examples:N,showFullCode:!0}),`
`,(0,z.jsx)(t.h2,{id:`막대`,children:`막대`}),`
`,(0,z.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,z.jsx)(s,{examples:F.Bar}),`
`,(0,z.jsx)(t.h2,{id:`선--영역`,children:`선 · 영역`}),`
`,(0,z.jsx)(r,{of:h,sourceState:`none`}),`
`,(0,z.jsx)(s,{examples:F.Line}),`
`,(0,z.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,z.jsx)(s,{examples:F.Area}),`
`,(0,z.jsx)(t.h2,{id:`도넛--파이`,children:`도넛 · 파이`}),`
`,(0,z.jsxs)(t.p,{children:[`도넛·파이는 0 이상의 값만 지원하며 합계가 0이면 빈 상태를 표시합니다. 항목별 `,(0,z.jsx)(t.code,{children:`color`}),`를 지정할 수 있습니다.`]}),`
`,(0,z.jsx)(r,{of:c,sourceState:`none`}),`
`,(0,z.jsx)(s,{examples:F.Donut}),`
`,(0,z.jsx)(r,{of:l,sourceState:`none`}),`
`,(0,z.jsx)(s,{examples:F.Pie}),`
`,(0,z.jsx)(t.h2,{id:`색상-커스텀`,children:`색상 커스텀`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`Chart`}),`와 동일한 CSS 변수(`,(0,z.jsx)(t.code,{children:`--chart-color`}),`, `,(0,z.jsx)(t.code,{children:`--chart-series-*`}),`)를 사용합니다. Chart.js는 캔버스에 그리므로 렌더 시점에 CSS 변수를 계산된 색상으로 해석합니다.`]}),`
`,(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-css`,children:`:root {
  --chart-color: #2563eb;
  --chart-series-1: #2563eb;
  --chart-series-2: #0d9488;
  --chart-series-3: #9333ea;
  --chart-series-4: #c2410c;
}
`})}),`
`,(0,z.jsx)(t.h2,{id:`chartjs-옵션-확장`,children:`Chart.js 옵션 확장`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`chartOptions`}),`로 Chart.js `,(0,z.jsx)(t.code,{children:`options`}),`를 깊게 병합할 수 있습니다.`]}),`
`,(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-jsx`,children:`<ChartJs
  type="bar"
  data={data}
  chartOptions={{
    plugins: { legend: { display: true, position: "top" } },
  }}
/>
`})}),`
`,(0,z.jsx)(t.h2,{id:`빈-데이터`,children:`빈 데이터`}),`
`,(0,z.jsx)(r,{of:p,sourceState:`none`}),`
`,(0,z.jsx)(s,{examples:F.Empty}),`
`,(0,z.jsx)(r,{of:u,sourceState:`none`}),`
`,(0,z.jsx)(s,{examples:F.CustomEmpty}),`
`,(0,z.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,z.jsxs)(t.p,{children:[`canvas에 차트 제목을 `,(0,z.jsx)(t.code,{children:`aria-label`}),`로 제공합니다. `,(0,z.jsx)(t.code,{children:`데이터 표 보기`}),`로 원본 수치를 표로 확인할 수 있습니다.
Chart.js 기본 툴팁으로 포인터 탐색을 지원합니다.`]}),`
`,(0,z.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,z.jsx)(a,{of:m})]})}function R(e={}){let{wrapper:t}={...v(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=t(),y(),n(),d(),o(),I()})))()}B();export{R as default};
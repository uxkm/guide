/**
 * Apache ECharts 기반 차트 렌더러.
 * Chart · ChartJs와 같은 옵션 형태를 받아 ECharts 인스턴스를 생성합니다.
 */
import * as echarts from "echarts/core";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  CanvasRenderer,
]);

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

function buildOption({
  type,
  points,
  title,
  unit,
  color,
  showLegend,
  showGrid,
  seriesColors,
  textColor,
  mutedColor,
  chartOptions,
}) {
  const labels = points.map((item) => item.label);
  const values = points.map((item) => item.value);
  const radial = type === "donut" || type === "pie";
  const tooltipValue = (value) =>
    unit ? `${format(value)} ${unit}` : format(value);

  let option;
  if (radial) {
    option = {
      color: seriesColors,
      textStyle: { color: textColor },
      tooltip: {
        trigger: "item",
        formatter: (params) =>
          `${params.name}: ${tooltipValue(params.value)} (${params.percent}%)`,
      },
      legend: {
        show: showLegend,
        bottom: 0,
        textStyle: { color: textColor },
      },
      series: [
        {
          name: title,
          type: "pie",
          radius: type === "donut" ? ["48%", "70%"] : "70%",
          center: ["50%", "46%"],
          data: points.map((item, index) => ({
            name: item.label,
            value: item.value,
            itemStyle: { color: seriesColors[index] },
          })),
          label: { color: textColor },
          emphasis: {
            itemStyle: { shadowBlur: 8, shadowColor: "rgba(0, 0, 0, 0.16)" },
          },
        },
      ],
    };
  } else {
    const isArea = type === "area";
    const isBar = type === "bar";
    option = {
      color: [seriesColors[0]],
      textStyle: { color: textColor },
      tooltip: {
        trigger: "axis",
        valueFormatter: (value) => tooltipValue(value),
      },
      grid: {
        left: 48,
        right: 16,
        top: 24,
        bottom: 40,
        containLabel: false,
      },
      xAxis: {
        type: "category",
        data: labels,
        axisLabel: { color: mutedColor },
        axisLine: { lineStyle: { color: mutedColor } },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: mutedColor,
          formatter: (value) => tooltipValue(value),
        },
        splitLine: {
          show: showGrid,
          lineStyle: { color: "rgba(100, 116, 139, 0.2)" },
        },
        axisLine: { show: false },
      },
      series: [
        {
          name: title,
          type: isBar ? "bar" : "line",
          data: isBar
            ? values.map((value, index) => ({
                value,
                itemStyle: { color: seriesColors[index] },
              }))
            : values,
          smooth: !isBar,
          showSymbol: !isBar,
          symbolSize: 6,
          areaStyle: isArea ? { opacity: 0.28 } : undefined,
          lineStyle: isBar ? undefined : { width: 2, color: seriesColors[0] },
          itemStyle: isBar
            ? undefined
            : { color: seriesColors[0] },
          barMaxWidth: 48,
        },
      ],
    };
  }

  if (chartOptions && typeof chartOptions === "object") {
    return deepMerge(option, chartOptions);
  }
  return option;
}

/** ECharts 인스턴스를 생성하고 해제 함수를 반환합니다. */
export function renderChartEcharts(root, options = {}) {
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
    chartOptions = null, // ECharts option 병합 객체입니다.
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
  const id = `chart-echarts-${++sequence}`;
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
    class: ["chart-echarts", `chart-echarts_${type}`, className]
      .filter(Boolean)
      .join(" "),
    "data-component": "ChartEcharts",
    role: "group",
    "aria-labelledby": `${id}-title`,
  });
  const caption = node("figcaption");
  caption.append(
    node("strong", { class: "chart-echarts_title", id: `${id}-title` }, title),
  );
  if (description)
    caption.append(
      node(
        "p",
        { class: "chart-echarts_description", id: `${id}-description` },
        description,
      ),
    );
  figure.append(caption);

  if (empty || invalid) {
    const message = invalid
      ? "도넛·파이 차트는 0 이상의 값만 지원합니다."
      : emptyMessage;
    figure.append(node("div", { class: "chart-echarts_empty" }, message));
    root.append(figure);
    const destroy = () => {
      root.replaceChildren();
      mounted.delete(root);
    };
    mounted.set(root, destroy);
    return destroy;
  }

  const visual = node("div", { class: "chart-echarts_visual" });
  const plot = node("div", {
    class: "chart-echarts_plot",
    id: `${id}-plot`,
    role: "img",
    "aria-label": title,
    style: `height: ${typeof height === "number" ? `${height}px` : height}`,
  });
  if (description) plot.setAttribute("aria-describedby", `${id}-description`);
  visual.append(plot);
  figure.append(visual);

  const details = node("details", { class: "chart-echarts_data" });
  details.append(
    node(
      "summary",
      { tabindex: 0, "aria-label": `${title} 데이터 표 보기` },
      "데이터 표 보기",
    ),
  );
  const tableWrap = node("div", {
    class: "chart-echarts_table-wrap table_wrap",
  });
  const table = node("table", { class: "table" });
  table.append(node("caption", {}, `${title} 데이터`));
  const thead = node("thead");
  const headRow = node("tr");
  headRow.append(
    node("th", { scope: "col" }, "항목"),
    node("th", { scope: "col" }, unit ? `값 (${unit})` : "값"),
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

  const instance = echarts.init(plot, undefined, { renderer: "canvas" });
  instance.setOption(
    buildOption({
      type,
      points,
      title,
      unit,
      color,
      showLegend,
      showGrid,
      seriesColors,
      textColor,
      mutedColor,
      chartOptions,
    }),
  );

  const observer =
    typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => instance.resize())
      : null;
  observer?.observe(plot);

  const destroy = () => {
    observer?.disconnect();
    instance.dispose();
    root.replaceChildren();
    mounted.delete(root);
  };
  mounted.set(root, destroy);
  return destroy;
}

/** data-chart-echarts-options 속성을 가진 요소를 초기화합니다. */
export function initChartEcharts(root = document) {
  const hosts = [...root.querySelectorAll("[data-chart-echarts-options]")];
  if (root.matches?.("[data-chart-echarts-options]")) hosts.unshift(root);
  const cleanups = hosts.map((host) => {
    let options = {};
    try {
      options = JSON.parse(
        host.getAttribute("data-chart-echarts-options") || "{}",
      );
    } catch {
      options = {};
    }
    return renderChartEcharts(host, options);
  });
  return () => cleanups.forEach((cleanup) => cleanup());
}

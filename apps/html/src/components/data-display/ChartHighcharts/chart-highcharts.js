/**
 * Highcharts 기반 차트 렌더러.
 * Chart · ChartJs · ChartEcharts와 같은 옵션 형태를 사용합니다.
 */
import Highcharts from "highcharts";

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

function buildConfig({
  type,
  points,
  title,
  unit,
  showLegend,
  showGrid,
  seriesColors,
  textColor,
  mutedColor,
  height,
  chartOptions,
}) {
  const labels = points.map((item) => item.label);
  const values = points.map((item) => item.value);
  const radial = type === "donut" || type === "pie";
  const formatValue = (value) =>
    unit ? `${format(value)} ${unit}` : format(value);

  let config;
  if (radial) {
    config = {
      chart: {
        type: "pie",
        height: typeof height === "number" ? height : undefined,
        backgroundColor: "transparent",
        style: { fontFamily: "inherit" },
      },
      title: { text: undefined },
      credits: { enabled: false },
      accessibility: { enabled: true, description: title },
      tooltip: {
        pointFormatter() {
          return `<b>${formatValue(this.y)}</b> (${Highcharts.numberFormat(this.percentage, 1)}%)`;
        },
      },
      legend: {
        enabled: showLegend,
        itemStyle: { color: textColor, fontWeight: "normal" },
      },
      plotOptions: {
        pie: {
          innerSize: type === "donut" ? "58%" : "0%",
          dataLabels: { enabled: false },
          showInLegend: true,
        },
      },
      series: [
        {
          name: title,
          colorByPoint: true,
          data: points.map((item, index) => ({
            name: item.label,
            y: item.value,
            color: seriesColors[index],
          })),
        },
      ],
    };
  } else {
    const chartType =
      type === "area" ? "areaspline" : type === "line" ? "spline" : "column";
    config = {
      chart: {
        type: chartType,
        height: typeof height === "number" ? height : undefined,
        backgroundColor: "transparent",
        style: { fontFamily: "inherit" },
      },
      title: { text: undefined },
      credits: { enabled: false },
      accessibility: { enabled: true, description: title },
      legend: { enabled: false },
      tooltip: {
        pointFormatter() {
          return `<b>${formatValue(this.y)}</b>`;
        },
      },
      xAxis: {
        categories: labels,
        labels: { style: { color: mutedColor } },
        lineColor: mutedColor,
        tickLength: 0,
      },
      yAxis: {
        title: { text: undefined },
        labels: {
          style: { color: mutedColor },
          formatter() {
            return formatValue(this.value);
          },
        },
        gridLineWidth: showGrid ? 1 : 0,
        gridLineColor: "rgba(100, 116, 139, 0.2)",
      },
      plotOptions: {
        series: {
          marker: { enabled: type !== "bar", radius: 3 },
          fillOpacity: type === "area" ? 0.28 : undefined,
        },
        column: { borderWidth: 0, colorByPoint: true },
      },
      colors: seriesColors,
      series: [
        {
          name: title,
          data:
            type === "bar"
              ? values.map((value, index) => ({
                  y: value,
                  color: seriesColors[index],
                }))
              : values,
          color: seriesColors[0],
        },
      ],
    };
  }

  if (chartOptions && typeof chartOptions === "object") {
    return deepMerge(config, chartOptions);
  }
  return config;
}

/** Highcharts 인스턴스를 생성하고 해제 함수를 반환합니다. */
export function renderChartHighcharts(root, options = {}) {
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
    chartOptions = null,
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
  const id = `chart-highcharts-${++sequence}`;
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
    class: ["chart-highcharts", `chart-highcharts_${type}`, className]
      .filter(Boolean)
      .join(" "),
    "data-component": "ChartHighcharts",
    role: "group",
    "aria-labelledby": `${id}-title`,
  });
  const caption = node("figcaption");
  caption.append(
    node(
      "strong",
      { class: "chart-highcharts_title", id: `${id}-title` },
      title,
    ),
  );
  if (description)
    caption.append(
      node(
        "p",
        { class: "chart-highcharts_description", id: `${id}-description` },
        description,
      ),
    );
  figure.append(caption);

  if (empty || invalid) {
    const message = invalid
      ? "도넛·파이 차트는 0 이상의 값만 지원합니다."
      : emptyMessage;
    figure.append(node("div", { class: "chart-highcharts_empty" }, message));
    root.append(figure);
    const destroy = () => {
      root.replaceChildren();
      mounted.delete(root);
    };
    mounted.set(root, destroy);
    return destroy;
  }

  const visual = node("div", { class: "chart-highcharts_visual" });
  const plot = node("div", {
    class: "chart-highcharts_plot",
    id: `${id}-plot`,
    role: "img",
    "aria-label": title,
    style: `height: ${typeof height === "number" ? `${height}px` : height}`,
  });
  if (description) plot.setAttribute("aria-describedby", `${id}-description`);
  visual.append(plot);
  figure.append(visual);

  const details = node("details", { class: "chart-highcharts_data" });
  details.append(
    node(
      "summary",
      { tabindex: 0, "aria-label": `${title} 데이터 표 보기` },
      "데이터 표 보기",
    ),
  );
  const tableWrap = node("div", {
    class: "chart-highcharts_table-wrap table_wrap",
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

  const instance = Highcharts.chart(
    plot,
    buildConfig({
      type,
      points,
      title,
      unit,
      showLegend,
      showGrid,
      seriesColors,
      textColor,
      mutedColor,
      height,
      chartOptions,
    }),
  );

  const destroy = () => {
    instance.destroy();
    root.replaceChildren();
    mounted.delete(root);
  };
  mounted.set(root, destroy);
  return destroy;
}

/** data-chart-highcharts-options 속성을 가진 요소를 초기화합니다. */
export function initChartHighcharts(root = document) {
  const hosts = [...root.querySelectorAll("[data-chart-highcharts-options]")];
  if (root.matches?.("[data-chart-highcharts-options]")) hosts.unshift(root);
  const cleanups = hosts.map((host) => {
    let options = {};
    try {
      options = JSON.parse(
        host.getAttribute("data-chart-highcharts-options") || "{}",
      );
    } catch {
      options = {};
    }
    return renderChartHighcharts(host, options);
  });
  return () => cleanups.forEach((cleanup) => cleanup());
}

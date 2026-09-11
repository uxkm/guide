/**
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
  const id = `chart-js-${++sequence}`;
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
    class: ["chart-js", `chart-js_${type}`, className].filter(Boolean).join(" "),
    "data-component": "ChartJs",
    role: "group",
    "aria-labelledby": `${id}-title`,
  });
  const caption = node("figcaption");
  caption.append(node("strong", { class: "chart-js_title", id: `${id}-title` }, title));
  if (description)
    caption.append(
      node("p", { class: "chart-js_description", id: `${id}-description` }, description),
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
    style: `height: ${typeof height === "number" ? `${height}px` : height}`,
  });
  const canvas = node("canvas", {
    id: `${id}-canvas`,
    role: "img",
    "aria-label": title,
  });
  if (description) canvas.setAttribute("aria-describedby", `${id}-description`);
  canvasWrap.append(canvas);
  visual.append(canvasWrap);
  figure.append(visual);

  const details = node("details", { class: "chart-js_data" });
  details.append(
    node(
      "summary",
      { tabindex: 0, "aria-label": `${title} 데이터 표 보기` },
      "데이터 표 보기",
    ),
  );
  const tableWrap = node("div", { class: "chart-js_table-wrap table_wrap" });
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
                ? `${label}: ${formatted} ${unit}`
                : `${label}: ${formatted}`;
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
                  return unit ? `${format(value)} ${unit}` : format(value);
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

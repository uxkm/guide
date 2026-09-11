/**
 * D3.js 기반 차트 렌더러.
 * Chart · ChartJs · ChartEcharts · ChartHighcharts와 같은 옵션 형태를 사용합니다.
 */
import {
  select,
  scaleBand,
  scaleLinear,
  max,
  min,
  line as d3Line,
  area as d3Area,
  pie as d3Pie,
  arc as d3Arc,
  curveMonotoneX,
} from "d3";

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

function drawChart(svgEl, {
  type,
  points,
  unit,
  showLegend,
  showGrid,
  seriesColors,
  textColor,
  mutedColor,
  width,
  height,
}) {
  const svg = select(svgEl);
  svg.selectAll("*").remove();
  svg.attr("viewBox", `0 0 ${width} ${height}`).attr("role", "img");

  const radial = type === "donut" || type === "pie";
  const formatValue = (value) =>
    unit ? `${format(value)} ${unit}` : format(value);

  if (radial) {
    const legendH = showLegend ? 36 : 0;
    const cx = width / 2;
    const cy = (height - legendH) / 2;
    const radius = Math.min(cx, cy) * 0.78;
    const pie = d3Pie()
      .value((d) => d.value)
      .sort(null);
    const arc = d3Arc()
      .innerRadius(type === "donut" ? radius * 0.58 : 0)
      .outerRadius(radius);
    const g = svg.append("g").attr("transform", `translate(${cx},${cy})`);
    g.selectAll("path")
      .data(pie(points))
      .join("path")
      .attr("d", arc)
      .attr("fill", (_d, i) => seriesColors[i])
      .append("title")
      .text((d) => `${d.data.label}: ${formatValue(d.data.value)}`);

    if (showLegend) {
      const legend = svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height - 18})`);
      const itemW = Math.min(120, width / Math.max(points.length, 1));
      const startX = (-itemW * points.length) / 2;
      points.forEach((item, index) => {
        const itemG = legend
          .append("g")
          .attr("transform", `translate(${startX + index * itemW},0)`);
        itemG
          .append("rect")
          .attr("width", 10)
          .attr("height", 10)
          .attr("y", -8)
          .attr("rx", 2)
          .attr("fill", seriesColors[index]);
        itemG
          .append("text")
          .attr("x", 14)
          .attr("y", 0)
          .attr("fill", textColor)
          .attr("font-size", 11)
          .text(item.label);
      });
    }
    return;
  }

  const margin = { top: 16, right: 16, bottom: 36, left: 56 };
  const innerW = Math.max(0, width - margin.left - margin.right);
  const innerH = Math.max(0, height - margin.top - margin.bottom);
  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = scaleBand()
    .domain(points.map((d) => d.label))
    .range([0, innerW])
    .padding(0.28);
  const yMin = Math.min(0, min(points, (d) => d.value) ?? 0);
  const yMax = Math.max(0, max(points, (d) => d.value) ?? 0);
  const y = scaleLinear()
    .domain([yMin, yMax === yMin ? yMin + 1 : yMax])
    .nice()
    .range([innerH, 0]);

  if (showGrid) {
    g.selectAll(".chart-d3_grid")
      .data(y.ticks(5))
      .join("line")
      .attr("class", "chart-d3_grid")
      .attr("x1", 0)
      .attr("x2", innerW)
      .attr("y1", (d) => y(d))
      .attr("y2", (d) => y(d))
      .attr("stroke", "rgba(100, 116, 139, 0.2)");
  }

  g.append("line")
    .attr("x1", 0)
    .attr("x2", innerW)
    .attr("y1", y(0))
    .attr("y2", y(0))
    .attr("stroke", mutedColor)
    .attr("opacity", 0.5);

  g.selectAll(".chart-d3_tick-x")
    .data(points)
    .join("text")
    .attr("class", "chart-d3_tick-x")
    .attr("x", (d) => x(d.label) + x.bandwidth() / 2)
    .attr("y", innerH + 18)
    .attr("text-anchor", "middle")
    .attr("fill", mutedColor)
    .attr("font-size", 11)
    .text((d) => d.label);

  g.selectAll(".chart-d3_tick-y")
    .data(y.ticks(5))
    .join("text")
    .attr("class", "chart-d3_tick-y")
    .attr("x", -8)
    .attr("y", (d) => y(d))
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .attr("fill", mutedColor)
    .attr("font-size", 11)
    .text((d) => formatValue(d));

  if (type === "bar") {
    g.selectAll("rect")
      .data(points)
      .join("rect")
      .attr("x", (d) => x(d.label))
      .attr("width", x.bandwidth())
      .attr("y", (d) => Math.min(y(0), y(d.value)))
      .attr("height", (d) => Math.abs(y(d.value) - y(0)))
      .attr("fill", (_d, i) => seriesColors[i])
      .append("title")
      .text((d) => `${d.label}: ${formatValue(d.value)}`);
    return;
  }

  const xPoint = (d) => x(d.label) + x.bandwidth() / 2;
  if (type === "area") {
    const area = d3Area()
      .x(xPoint)
      .y0(y(0))
      .y1((d) => y(d.value))
      .curve(curveMonotoneX);
    g.append("path")
      .datum(points)
      .attr("fill", seriesColors[0])
      .attr("fill-opacity", 0.28)
      .attr("d", area);
  }

  const path = d3Line()
    .x(xPoint)
    .y((d) => y(d.value))
    .curve(curveMonotoneX);
  g.append("path")
    .datum(points)
    .attr("fill", "none")
    .attr("stroke", seriesColors[0])
    .attr("stroke-width", 2)
    .attr("d", path);

  g.selectAll("circle")
    .data(points)
    .join("circle")
    .attr("cx", xPoint)
    .attr("cy", (d) => y(d.value))
    .attr("r", 3.5)
    .attr("fill", seriesColors[0])
    .append("title")
    .text((d) => `${d.label}: ${formatValue(d.value)}`);
}

/** D3 차트를 그리고 해제 함수를 반환합니다. */
export function renderChartD3(root, options = {}) {
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
    chartOptions = null, // { margin } 등 확장용. 현재는 높이·여백만 참고합니다.
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
  const id = `chart-d3-${++sequence}`;
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
    class: ["chart-d3", `chart-d3_${type}`, className].filter(Boolean).join(" "),
    "data-component": "ChartD3",
    role: "group",
    "aria-labelledby": `${id}-title`,
  });
  const caption = node("figcaption");
  caption.append(
    node("strong", { class: "chart-d3_title", id: `${id}-title` }, title),
  );
  if (description)
    caption.append(
      node(
        "p",
        { class: "chart-d3_description", id: `${id}-description` },
        description,
      ),
    );
  figure.append(caption);

  if (empty || invalid) {
    const message = invalid
      ? "도넛·파이 차트는 0 이상의 값만 지원합니다."
      : emptyMessage;
    figure.append(node("div", { class: "chart-d3_empty" }, message));
    root.append(figure);
    const destroy = () => {
      root.replaceChildren();
      mounted.delete(root);
    };
    mounted.set(root, destroy);
    return destroy;
  }

  const visual = node("div", { class: "chart-d3_visual" });
  const plot = node("div", {
    class: "chart-d3_plot",
    style: `height: ${typeof height === "number" ? `${height}px` : height}`,
  });
  const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "chart-d3_svg");
  svg.setAttribute("aria-label", title);
  if (description) svg.setAttribute("aria-describedby", `${id}-description`);
  plot.append(svg);
  visual.append(plot);
  figure.append(visual);

  const details = node("details", { class: "chart-d3_data" });
  details.append(
    node(
      "summary",
      { tabindex: 0, "aria-label": `${title} 데이터 표 보기` },
      "데이터 표 보기",
    ),
  );
  const tableWrap = node("div", { class: "chart-d3_table-wrap table_wrap" });
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

  const paint = () => {
    const bounds = plot.getBoundingClientRect();
    const plotHeight =
      typeof height === "number"
        ? height
        : Math.max(200, Math.round(bounds.height || 320));
    const plotWidth = Math.max(240, Math.round(bounds.width || 480));
    const marginOverride = chartOptions?.margin;
    drawChart(svg, {
      type,
      points,
      unit,
      showLegend,
      showGrid,
      seriesColors,
      textColor,
      mutedColor,
      width: plotWidth,
      height: plotHeight,
      margin: marginOverride,
    });
  };
  paint();

  const observer =
    typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => paint())
      : null;
  observer?.observe(plot);

  const destroy = () => {
    observer?.disconnect();
    root.replaceChildren();
    mounted.delete(root);
  };
  mounted.set(root, destroy);
  return destroy;
}

/** data-chart-d3-options 속성을 가진 요소를 초기화합니다. */
export function initChartD3(root = document) {
  const hosts = [...root.querySelectorAll("[data-chart-d3-options]")];
  if (root.matches?.("[data-chart-d3-options]")) hosts.unshift(root);
  const cleanups = hosts.map((host) => {
    let options = {};
    try {
      options = JSON.parse(host.getAttribute("data-chart-d3-options") || "{}");
    } catch {
      options = {};
    }
    return renderChartD3(host, options);
  });
  return () => cleanups.forEach((cleanup) => cleanup());
}

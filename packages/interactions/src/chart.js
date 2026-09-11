import {
  chartPatternShapes,
  resolveChartPattern,
  resolveChartStyle,
} from "./chart-patterns.js";

// 도넛·아크의 기본 색상입니다. 개별 항목의 color가 있으면 그 값을 우선합니다.
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
// 같은 컨테이너를 다시 초기화할 때 이전 이벤트·observer를 정리하기 위한 해제 함수 목록입니다.
const mounted = new WeakMap();

/** Vue와 Gulp에서 공유하는 SVG 렌더러. 반환 함수로 이벤트와 observer를 해제합니다. */
export function renderChart(root, options = {}) {
  // 데이터 변경이나 재초기화로 중복 DOM과 이벤트가 생기지 않도록 먼저 해제합니다.
  mounted.get(root)?.();
  const {
    data = [],
    title = "차트",
    description = "",
    unit = "",
    height = 320,
    color = "var(--chart-color, #2563eb)",
    pattern = "auto",
    monochrome = false,
    displayStyle = "auto",
    showLegend = true,
    showGrid = true,
    emptyMessage = "표시할 데이터가 없습니다.",
  } = options;
  const type = ["bar", "line", "area", "donut", "arc"].includes(options.type)
    ? options.type
    : "bar";
  const radial = type === "donut" || type === "arc";
  const arc = type === "arc";
  // 문자열 라벨과 유한한 숫자만 사용합니다. 도넛·아크의 음수와 합계 0은 아래에서 안내합니다.
  const points = Array.isArray(data)
    ? data.filter(
        (item) =>
          item && typeof item.label === "string" && Number.isFinite(item.value),
      )
    : [];
  // 값을 최대 절댓값으로 나눠 좌표와 원형 비율을 계산하고 표시는 원래 수치를 사용합니다.
  const scale = Math.max(1, ...points.map((item) => Math.abs(item.value)));
  const values = points.map((item) => item.value / scale);
  const total = values.reduce((sum, value) => sum + value, 0);
  const invalid = radial && values.some((value) => value < 0);
  const empty = !points.length || (radial && total === 0);
  const id = `chart-dom-${++sequence}`;
  const patterned = radial || type === "bar";
  const resolvedStyle = resolveChartStyle(displayStyle, pattern, monochrome);
  const itemPattern = (item, index) =>
    patterned
      ? resolveChartPattern(
          resolvedStyle.overridePatterns
            ? resolvedStyle.pattern
            : (item.pattern ?? pattern),
          index,
        )
      : "none";
  const itemInk = (item, index) =>
    resolvedStyle.monochrome
      ? "var(--chart-pattern-ink, var(--color-text, #182131))"
      : item.color || (radial ? palette[index % palette.length] : color);
  const itemPaint = (item, index) =>
    itemPattern(item, index) === "none"
      ? itemInk(item, index)
      : `url(#${id}-pattern-${index})`;
  const doc = root.ownerDocument;
  // 일반 HTML과 SVG의 네임스페이스를 구분합니다. 사용자 문구는 textContent로 넣습니다.
  const node = (tag, attrs = {}, text, svg = false) => {
    const element = svg
      ? doc.createElementNS("http://www.w3.org/2000/svg", tag)
      : doc.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) =>
      element.setAttribute(key, String(value)),
    );
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const graphic = (tag, attrs, text) => node(tag, attrs, text, true);
  const figure = node("figure", {
    class: `chart chart_${type}`,
    "data-component": "Chart",
    "data-monochrome": resolvedStyle.monochrome,
  });
  const caption = node("figcaption");
  caption.append(
    node("strong", { class: "chart_title", id: `${id}-title` }, title),
  );
  if (description)
    caption.append(node("p", { class: "chart_description" }, description));
  figure.append(caption);
  root.replaceChildren(figure);
  let observer;
  let timer;
  let dismiss = () => {};
  // 오류 안내를 빈 상태보다 우선 표시합니다. emptyMessage는 HTML이 아닌 문자열입니다.
  if (empty || invalid) {
    figure.append(
      node(
        "div",
        { class: "chart_empty", role: "status" },
        invalid
          ? `${arc ? "아크" : "도넛"} 차트에는 0 이상의 값이 필요합니다.`
          : emptyMessage,
      ),
    );
  } else {
    const visual = node("div", { class: "chart_visual" });
    const svg = graphic("svg", {
      class: "chart_plot",
      viewBox: arc ? "160 0 300 180" : radial ? "160 0 300 300" : "0 0 620 300",
      preserveAspectRatio: radial ? "xMidYMid meet" : "none",
      role: "group",
      "aria-labelledby": `${id}-title`,
      "aria-describedby": `${id}-description`,
    });
    svg.style.height = typeof height === "number" ? `${height}px` : height;
    svg.append(
      graphic(
        "desc",
        { id: `${id}-description` },
        `${description ? description + ". " : ""}Tab 키로 항목을 이동하면 값이 표시됩니다. Escape 키로 툴팁을 닫습니다. 전체 값은 아래 데이터 표에서 확인할 수 있습니다.`,
      ),
    );
    const defs = graphic("defs");
    points.forEach((item, index) => {
      if (itemPattern(item, index) === "none") return;
      const tile = graphic("pattern", {
        id: `${id}-pattern-${index}`,
        patternUnits: "userSpaceOnUse",
        width: 12,
        height: 12,
      });
      chartPatternShapes(
        itemPattern(item, index),
        itemInk(item, index),
      ).forEach(({ tag, attrs }) => {
        tile.append(
          graphic(
            tag,
            Object.fromEntries(
              Object.entries(attrs).map(([key, value]) => [
                key === "strokeWidth" ? "stroke-width" : key,
                value,
              ]),
            ),
          ),
        );
      });
      defs.append(tile);
    });
    svg.append(defs);
    visual.append(svg);
    figure.append(visual);
    const tooltip = node("div", {
      class: "chart_tooltip",
      role: "tooltip",
      id: `${id}-tooltip`,
    });
    let hover = null;
    let focus = null;
    let active = null;
    let dismissed = false;
    // SVG 기준점을 화면 좌표로 변환하고 툴팁 크기를 측정해 차트 경계 안에 배치합니다.
    // 위쪽 공간이 부족하면 아래쪽을 사용하며 크기 변경은 ResizeObserver가 감지합니다.
    const position = () => {
      if (!active || !tooltip.isConnected) return;
      const matrix = svg.getScreenCTM();
      if (!matrix) return;
      const point = svg.createSVGPoint();
      Object.assign(point, active.anchor);
      const screen = point.matrixTransform(matrix);
      const bounds = visual.getBoundingClientRect();
      const tip = tooltip.getBoundingClientRect();
      const above = screen.y - bounds.top - tip.height - 12;
      const clamp = (value, max) => Math.max(8, Math.min(value, max - 8));
      tooltip.style.left = `${clamp(screen.x - bounds.left - tip.width / 2, bounds.width - tip.width)}px`;
      tooltip.style.top = `${clamp(above >= 8 ? above : screen.y - bounds.top + 12, bounds.height - tip.height)}px`;
    };
    // 이전 요소의 접근성 연결을 해제하고 현재 요소의 내용·위치·aria-describedby를 갱신합니다.
    const update = () => {
      active?.element.removeAttribute("aria-describedby");
      active = dismissed ? null : hover || focus;
      if (!active) {
        tooltip.remove();
        return;
      }
      tooltip.replaceChildren(
        node("strong", {}, active.item.label),
        node("span", {}, `${format(active.item.value)}${unit}`),
      );
      active.element.setAttribute("aria-describedby", tooltip.id);
      visual.append(tooltip);
      position();
    };
    // 요소에서 툴팁으로 이동할 시간을 주고 툴팁 진입 시 닫기 타이머를 취소합니다.
    const leave = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        hover = null;
        update();
      }, 150);
    };
    tooltip.onmouseenter = () => {
      clearTimeout(timer);
      if (active) hover = active; // 초점이 빠져도 툴팁 위의 마우스가 표시를 유지합니다.
    };
    tooltip.onmouseleave = leave;
    dismiss = (event) => {
      if (event.key === "Escape") {
        dismissed = true;
        update();
      }
    };
    doc.addEventListener("keydown", dismiss);
    observer = new ResizeObserver(position);
    observer.observe(visual);
    observer.observe(svg);
    observer.observe(tooltip);
    // 모든 차트 요소에 Tab 초점과 마우스 이벤트를 연결합니다.
    // 마우스는 실제 포인터를, 키보드 초점은 전달된 항목 기준점(anchor)을 사용합니다.
    const bind = (element, item, anchor) => {
      element.setAttribute("class", "chart_point");
      element.setAttribute("tabindex", "0");
      element.setAttribute("role", "img");
      element.setAttribute(
        "aria-label",
        `${item.label}: ${format(item.value)}${unit}`,
      );
      const move = (event) => {
        const matrix = svg.getScreenCTM();
        if (!matrix) return;
        const point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        const local = point.matrixTransform(matrix.inverse());
        hover = { element, item, anchor: { x: local.x, y: local.y } };
        update();
      };
      element.onmouseenter = (event) => {
        clearTimeout(timer);
        dismissed = false;
        move(event);
      };
      // 같은 요소에서는 툴팁을 고정해 포인터로 툴팁에 진입할 수 있게 합니다.
      element.onmouseleave = leave;
      element.onfocus = () => {
        clearTimeout(timer);
        hover = null;
        focus = { element, item, anchor };
        dismissed = false;
        update();
      };
      element.onblur = () => {
        focus = null;
        update();
      };
    };
    // 좌표축에 0을 포함해 음수 값을 표현하고 항목별 가로 간격을 균등하게 계산합니다.
    const min = Math.min(0, ...values);
    const max = Math.max(0, ...values) || (min === 0 ? 1 : 0);
    const y = (value) => 24 + ((max - value) / (max - min)) * 220;
    const step = 520 / points.length;
    const x = (index) => 64 + step * (index + 0.5);
    // 원형은 각 항목 비율만큼 stroke를 나눕니다. 아크는 반원, 도넛은 전체 원입니다.
    if (radial) {
      let offset = 0;
      points.forEach((item, index) => {
        if (!item.value) return;
        const fraction = values[index] / total;
        // 구간 중앙 각도를 키보드 툴팁 위치로 사용합니다.
        const angle =
          (arc ? -Math.PI : -Math.PI / 2) +
          (offset / 100 + fraction / 2) * (arc ? Math.PI : 2 * Math.PI);
        const radius = arc ? 120 : 100;
        const gap = Math.min(0.6, fraction * 10);
        const group = graphic("g");
        group.append(
          graphic("path", {
            ...(arc
              ? { d: "M 190 150 A 120 120 0 0 1 430 150" }
              : { d: "M310 50 A100 100 0 1 1 310 250 A100 100 0 1 1 310 50" }),
            fill: "none",
            stroke: itemPaint(item, index),
            "data-pattern": itemPattern(item, index),
            "stroke-width": 44,
            pathLength: 100,
            "stroke-dasharray": `${fraction * 100 - gap} ${100 - fraction * 100 + gap}`,
            "stroke-dashoffset": -offset - gap / 2,
          }),
        );
        group.append(
          graphic("circle", {
            class: "chart_focus-indicator",
            "aria-hidden": "true",
            cx: 310 + radius * Math.cos(angle),
            cy: 150 + radius * Math.sin(angle),
            r: 7,
          }),
        );
        offset += fraction * 100;
        bind(group, item, {
          x: 310 + radius * Math.cos(angle),
          y: 150 + radius * Math.sin(angle),
        });
        svg.append(group);
      });
    } else {
      for (let index = 0; index < 5; index++) {
        const value = min + ((max - min) * index) / 4;
        if (showGrid)
          svg.append(
            graphic("line", {
              class: "chart_grid",
              x1: 64,
              x2: 584,
              y1: y(value),
              y2: y(value),
            }),
          );
        svg.append(
          graphic(
            "text",
            {
              class: "chart_tick",
              x: 56,
              y: y(value),
              "text-anchor": "end",
              "dominant-baseline": "middle",
            },
            format(value * scale),
          ),
        );
      }
      svg.append(
        graphic("line", {
          class: "chart_axis",
          x1: 64,
          x2: 584,
          y1: y(0),
          y2: y(0),
        }),
      );
      // 선과 영역은 같은 경로를 사용하며 영역만 0 기준선까지 닫아 면을 채웁니다.
      const path = values
        .map((value, index) => `${index ? "L" : "M"} ${x(index)} ${y(value)}`)
        .join(" ");
      if (type === "area")
        svg.append(
          graphic("path", {
            d: `${path} L ${x(points.length - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`,
            fill: color,
            "fill-opacity": 0.16,
          }),
        );
      if (type !== "bar")
        svg.append(
          graphic("path", {
            d: path,
            fill: "none",
            stroke: color,
            "stroke-width": 3,
            "stroke-linejoin": "round",
          }),
        );
      points.forEach((item, index) => {
        const group = graphic("g");
        group.append(
          type === "bar"
            ? graphic("rect", {
                x: x(index) - step * 0.3,
                y: Math.min(y(values[index]), y(0)),
                width: step * 0.6,
                height: Math.abs(y(values[index]) - y(0)),
                fill: itemPaint(item, index),
                "data-pattern": itemPattern(item, index),
                stroke: itemInk(item, index),
                "stroke-width": 1,
              })
            : graphic("circle", {
                cx: x(index),
                cy: y(values[index]),
                r: 4,
                fill: color,
              }),
        );
        group.append(
          graphic("rect", {
            x: x(index) - step / 2,
            y: 20,
            width: step,
            height: 260,
            fill: "transparent",
          }),
        );
        group.append(
          graphic(
            "text",
            {
              class: "chart_tick",
              x: x(index),
              y: 272,
              "text-anchor": "middle",
            },
            item.label.length > 8 ? `${item.label.slice(0, 7)}…` : item.label,
          ),
        );
        bind(group, item, { x: x(index), y: y(values[index]) });
        svg.append(group);
      });
      if (unit)
        svg.append(
          graphic(
            "text",
            { class: "chart_tick", x: 64, y: 12 },
            `단위: ${unit}`,
          ),
        );
    }
  }
  // 원본 라벨과 값을 키보드로 열 수 있는 표로 제공해 그래프 외에도 데이터를 확인하게 합니다.
  if (patterned && showLegend && !empty && !invalid) {
    const legend = node("ul", { class: "chart_legend" });
    points.forEach((item, index) => {
      const entry = node("li");
      const swatch = graphic("svg", {
        class: "chart_swatch",
        "aria-hidden": "true",
        focusable: "false",
        viewBox: "0 0 24 24",
      });
      swatch.append(
        graphic("rect", {
          x: 1,
          y: 1,
          width: 22,
          height: 22,
          fill: itemPaint(item, index),
          stroke: itemInk(item, index),
          "data-pattern": itemPattern(item, index),
        }),
      );
      entry.append(
        swatch,
        doc.createTextNode(`${item.label} · ${format(item.value)}${unit}`),
      );
      legend.append(entry);
    });
    figure.append(legend);
  }
  if (points.length) {
    const details = node("details", { class: "chart_data" });
    details.append(
      node(
        "summary",
        { tabindex: 0, "aria-label": `${title} 데이터 표 보기` },
        "데이터 표 보기",
      ),
    );
    const wrap = node("div", { class: "chart_table-wrap table_wrap" });
    const table = node("table", { class: "table" });
    table.append(node("caption", {}, `${title} 데이터`));
    const head = node("thead");
    const header = node("tr");
    header.append(
      node("th", { scope: "col" }, "항목"),
      node("th", { scope: "col" }, `값${unit ? ` (${unit})` : ""}`),
    );
    head.append(header);
    const body = node("tbody");
    points.forEach((item) => {
      const row = node("tr");
      row.append(
        node("th", { scope: "row" }, item.label),
        node("td", {}, format(item.value)),
      );
      body.append(row);
    });
    table.append(head, body);
    wrap.append(table);
    details.append(wrap);
    figure.append(details);
  }
  // Vue 언마운트와 Gulp 화면 교체 시 호출할 해제 함수입니다.
  const destroy = () => {
    clearTimeout(timer);
    observer?.disconnect();
    doc.removeEventListener("keydown", dismiss);
    figure.remove();
    mounted.delete(root);
  };
  mounted.set(root, destroy);
  return destroy;
}

/** Gulp 매크로로 생성한 요소를 초기화합니다. 반환 함수는 일괄 해제용입니다. */
export function initCharts(root = document) {
  // 문서 전체 또는 전달받은 영역에서 매크로 컨테이너를 찾아 JSON 설정으로 그립니다.
  const hosts = [...root.querySelectorAll("[data-chart-options]")];
  if (root.matches?.("[data-chart-options]")) hosts.unshift(root);
  const cleanups = hosts.map((host) =>
    renderChart(host, JSON.parse(host.dataset.chartOptions)),
  );
  // 호출자가 화면을 제거할 때 해당 영역의 차트를 한 번에 정리할 수 있습니다.
  return () => cleanups.forEach((cleanup) => cleanup());
}

import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i,n as a}from"./blocks-DKrjMPN_.js";import{n as o,t as s}from"./FrameworkTabs-duseEU1T.js";import{_ as c,a as l,c as u,d,f,g as p,h as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w}from"./Chart.stories-DBSqtjEY.js";import{i as T,r as E}from"./react-CQ14Jk9E.js";var D;function O(){return(O=e((()=>{D=`import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import {
  chartPatternShapes,
  resolveChartPattern,
  resolveChartStyle,
} from "@uxkm/interactions/chart-patterns";

// 도넛·아크 항목에 color를 지정하지 않으면 이 색상을 순서대로 적용합니다.
const palette = [
  "var(--chart-series-1, #2563eb)",
  "var(--chart-series-2, #0d9488)",
  "var(--chart-series-3, #9333ea)",
  "var(--chart-series-4, #c2410c)",
  "var(--chart-series-5, #be185d)",
  "var(--chart-series-6, #4f46e5)",
];
// 축·범례·툴팁·데이터 표에서 동일한 숫자 표시 형식을 사용합니다.
const format = (value) =>
  new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 2 }).format(value);

/** 단일 계열 SVG 차트. 원본 수치는 키보드로 열 수 있는 데이터 표로 제공합니다. */
export function Chart({
  data = [], // { label: string, value: number, color?: string, pattern?: string } 배열입니다.
  type = "bar", // bar · line · area · donut · arc 중 선택합니다.
  title = "차트", // 화면 제목과 SVG 접근성 이름입니다.
  description = "", // 제목 아래의 보조 설명입니다.
  unit = "", // 만원·명·% 등 수치 뒤에 붙일 단위입니다.
  height = 320, // SVG 높이입니다. 너비는 부모의 100%를 사용합니다.
  color = "var(--chart-color, #2563eb)", // 막대·선·영역 색상입니다. 도넛·아크는 항목별 color를 사용합니다.
  pattern = "auto", // 막대·도넛·아크 패턴입니다. auto는 항목별로 순환하며 data.pattern이 우선합니다.
  monochrome = false, // true이면 항목 색상 대신 공통 패턴 잉크 색상을 사용합니다.
  displayStyle = "auto", // auto: 개별 설정 유지 / color: 색상 / pattern: 컬러 패턴 / monochrome: 흑백 패턴
  showLegend = true, // 막대·도넛·아크의 범례 표시 여부입니다.
  showGrid = true, // 막대·선·영역의 가로 격자 표시 여부입니다.
  emptyMessage = "표시할 데이터가 없습니다.", // 빈 상태에 표시할 문자열 또는 JSX입니다.
  className = "", // 루트 figure에 추가할 CSS 클래스입니다.
  ...props // id·style·aria-* 등 나머지 속성은 루트 figure로 전달합니다.
}) {
  // 여러 차트를 함께 사용해도 제목·설명·툴팁의 접근성 ID가 겹치지 않게 합니다.
  const titleId = useId();
  const descriptionId = useId();
  const tooltipId = useId();
  const patternId = useId(); // 차트를 여러 개 배치해도 패턴 참조가 충돌하지 않습니다.
  // 마우스와 초점을 별도로 기억하며, Escape로 닫은 상태도 관리합니다.
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const [dismissed, setDismissed] = useState(false);
  const leaveTimer = useRef(null);
  const visualRef = useRef(null);
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 });
  // 제거 시 타이머를 해제하고 데이터·유형 변경 시 이전 항목 선택을 초기화합니다.
  useEffect(() => () => clearTimeout(leaveTimer.current), []);
  useEffect(() => {
    clearTimeout(leaveTimer.current);
    setHovered(null);
    setFocused(null);
    setDismissed(false);
  }, [data, type]);
  // 요소에서 툴팁으로 포인터를 옮길 시간을 주기 위해 닫기를 150ms 지연합니다.
  const keepTooltip = () => clearTimeout(leaveTimer.current);
  const leaveTooltip = () => {
    keepTooltip();
    leaveTimer.current = setTimeout(() => setHovered(null), 150);
  };
  const chartType = ["bar", "line", "area", "donut", "arc"].includes(type)
    ? type
    : "bar";
  // 문자열 라벨과 유한한 숫자 값이 있는 항목만 표시합니다.
  const points = Array.isArray(data)
    ? data.filter(
        (item) =>
          item && typeof item.label === "string" && Number.isFinite(item.value),
      )
    : [];
  const donut = chartType === "donut";
  const arc = chartType === "arc";
  const radial = donut || arc;
  const patterned = radial || chartType === "bar";
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
      : \`url(#\${patternId}-\${index})\`;
  const invalidRadial = radial && points.some((item) => item.value < 0);
  // 큰 수치도 비율로 계산하도록 정규화합니다. 도넛·아크는 음수를 허용하지 않습니다.
  const scale = Math.max(1, ...points.map((item) => Math.abs(item.value)));
  const normalized = points.map((item) => item.value / scale);
  const total = normalized.reduce((sum, value) => sum + value, 0);
  // 도넛·아크는 합계가 0이면 그릴 비율이 없으므로 빈 상태로 처리합니다.
  const empty = !points.length || (radial && total === 0);
  const active = dismissed ? null : (hovered ?? focused);
  const activeIndex = active?.index ?? null;
  const activeItem =
    !empty && !invalidRadial && activeIndex !== null
      ? points[activeIndex]
      : null;
  // 화면 포인터를 SVG 좌표로 변환해 반응형 크기 변경에도 기준점을 유지합니다.
  const mouseAnchor = (event) => {
    const svg = svgRef.current;
    const matrix = svg?.getScreenCTM();
    if (!matrix) return { x: 0, y: 0 };
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const local = point.matrixTransform(matrix.inverse());
    return { x: local.x, y: local.y };
  };
  // 각 데이터 요소에 Tab 초점, 접근성 설명, 마우스·초점 이벤트를 공통 적용합니다.
  const pointProps = (item, index, anchor) => ({
    className: "chart_point",
    tabIndex: 0,
    role: "img",
    "aria-label": \`\${item.label}: \${format(item.value)}\${unit}\`,
    "aria-describedby":
      activeItem && activeIndex === index ? tooltipId : undefined,
    onMouseEnter: (event) => {
      keepTooltip();
      setHovered({ index, anchor: mouseAnchor(event) });
      setDismissed(false);
    },
    // 같은 요소 안에서는 위치를 고정해 포인터로 툴팁에 접근할 수 있게 합니다.
    onMouseLeave: leaveTooltip,
    onFocus: () => {
      keepTooltip();
      setHovered(null); // 마우스가 남아 있어도 키보드로 선택한 항목을 우선합니다.
      setFocused({ index, anchor });
      setDismissed(false);
    },
    onBlur: () => setFocused(null),
  });
  // 툴팁 크기를 측정해 기준점 위에 배치하고 공간이 부족하면 아래로 옮깁니다.
  // 차트 경계 안으로 보정하며 ResizeObserver로 크기 변경 시 위치를 다시 계산합니다.
  useLayoutEffect(() => {
    if (!activeItem || !active) return;
    const visual = visualRef.current;
    const svg = svgRef.current;
    const tooltip = tooltipRef.current;
    if (!visual || !svg || !tooltip) return;
    const updatePosition = () => {
      const matrix = svg.getScreenCTM();
      if (!matrix) return;
      const point = svg.createSVGPoint();
      point.x = active.anchor.x;
      point.y = active.anchor.y;
      const screen = point.matrixTransform(matrix);
      const bounds = visual.getBoundingClientRect();
      const tooltipBounds = tooltip.getBoundingClientRect();
      const anchorX = screen.x - bounds.left;
      const anchorY = screen.y - bounds.top;
      const above = anchorY - tooltipBounds.height - 12;
      const clamp = (value, max) => Math.max(8, Math.min(value, max - 8));
      setTooltipPosition({
        left: clamp(
          anchorX - tooltipBounds.width / 2,
          bounds.width - tooltipBounds.width,
        ),
        top: clamp(
          above >= 8 ? above : anchorY + 12,
          bounds.height - tooltipBounds.height,
        ),
      });
    };
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(visual);
    observer.observe(svg);
    observer.observe(tooltip);
    return () => observer.disconnect();
  }, [active, activeItem, height]);
  useEffect(() => {
    if (!activeItem) return;
    const dismiss = (event) => {
      if (event.key === "Escape") setDismissed(true);
    };
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [activeItem]);
  // 좌표 범위에 0을 포함해 음수와 기준선을 표현하고 가로 항목을 균등 배치합니다.
  const min = Math.min(0, ...normalized);
  const max = Math.max(0, ...normalized) || (min === 0 ? 1 : 0);
  const y = (value) => 24 + ((max - value) / (max - min)) * 220;
  const step = 520 / Math.max(points.length, 1);
  const x = (index) => 64 + step * (index + 0.5);
  const path = normalized
    .map((value, index) => \`\${index ? "L" : "M"} \${x(index)} \${y(value)}\`)
    .join(" ");
  let offset = 0;

  return (
    <figure
      {...props}
      className={\`chart chart_\${chartType} \${className}\`}
      data-component="Chart"
      data-monochrome={resolvedStyle.monochrome}
    >
      <figcaption>
        <strong id={titleId} className="chart_title">
          {title}
        </strong>
        {description && <p className="chart_description">{description}</p>}
      </figcaption>
      {/* 원형 차트의 잘못된 데이터와 사용자가 지정한 빈 상태 내용을 구분합니다. */}
      {invalidRadial || empty ? (
        <div className="chart_empty" role="status">
          {invalidRadial
            ? \`\${arc ? "아크" : "도넛"} 차트에는 0 이상의 값이 필요합니다.\`
            : emptyMessage}
        </div>
      ) : (
        <div className="chart_visual" ref={visualRef}>
          <svg
            ref={svgRef}
            className="chart_plot"
            viewBox={
              arc ? "160 0 300 180" : radial ? "160 0 300 300" : "0 0 620 300"
            }
            preserveAspectRatio={radial ? "xMidYMid meet" : "none"}
            style={{ height }}
            role="group"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <desc id={descriptionId}>
              {description ? \`\${description}. \` : ""}
              Tab 키로 항목을 이동하면 값이 표시됩니다. Escape 키로 툴팁을
              닫습니다. 전체 값은 아래 데이터 표에서 확인할 수 있습니다.
            </desc>
            {/* 색상에 의존하지 않는 패턴 타일을 만들고 그래프와 범례에서 함께 참조합니다. */}
            <defs>
              {points.map(
                (item, index) =>
                  itemPattern(item, index) !== "none" && (
                    <pattern
                      key={index}
                      id={\`\${patternId}-\${index}\`}
                      patternUnits="userSpaceOnUse"
                      width="12"
                      height="12"
                    >
                      {chartPatternShapes(
                        itemPattern(item, index),
                        itemInk(item, index),
                      ).map(({ tag, attrs }, shapeIndex) => {
                        const Tile = tag;
                        return <Tile key={shapeIndex} {...attrs} />;
                      })}
                    </pattern>
                  ),
              )}
            </defs>
            {/* 도넛·아크는 비율만큼 호를 나누고 나머지 유형은 좌표축에 값을 그립니다. */}
            {radial ? (
              points.map((item, index) => {
                if (item.value === 0) return null;
                const fraction = normalized[index] / total;
                const start = offset;
                offset += fraction * 100;
                // 구간의 중간 각도는 키보드 초점 툴팁의 기준점입니다.
                const angle =
                  (arc ? -Math.PI : -Math.PI / 2) +
                  (start / 100 + fraction / 2) * (arc ? Math.PI : Math.PI * 2);
                const radius = arc ? 120 : 100;
                // 인접 구간 사이에 배경색 틈을 두어 색상 대비가 낮은 구간도 경계를 구분합니다.
                const gap = Math.min(0.6, fraction * 10);
                const Shape = "path"; // 도넛도 경로로 그려 패턴이 회전하지 않게 합니다.
                return (
                  <g
                    key={index}
                    {...pointProps(item, index, {
                      x: 310 + radius * Math.cos(angle),
                      y: 150 + radius * Math.sin(angle),
                    })}
                  >
                    <Shape
                      {...(arc
                        ? { d: "M 190 150 A 120 120 0 0 1 430 150" }
                        : {
                            d: "M310 50 A100 100 0 1 1 310 250 A100 100 0 1 1 310 50",
                          })}
                      fill="none"
                      stroke={itemPaint(item, index)}
                      data-pattern={itemPattern(item, index)}
                      strokeWidth="44"
                      pathLength="100"
                      strokeDasharray={\`\${fraction * 100 - gap} \${100 - fraction * 100 + gap}\`}
                      strokeDashoffset={-start - gap / 2}
                    />
                    <circle
                      className="chart_focus-indicator"
                      aria-hidden="true"
                      cx={310 + radius * Math.cos(angle)}
                      cy={150 + radius * Math.sin(angle)}
                      r="7"
                    />
                  </g>
                );
              })
            ) : (
              <>
                {Array.from({ length: 5 }, (_, index) => {
                  const value = min + ((max - min) * index) / 4;
                  return (
                    <g key={index}>
                      {showGrid && (
                        <line
                          className="chart_grid"
                          x1="64"
                          x2="584"
                          y1={y(value)}
                          y2={y(value)}
                        />
                      )}
                      <text
                        className="chart_tick"
                        x="56"
                        y={y(value)}
                        textAnchor="end"
                        dominantBaseline="middle"
                      >
                        {format(value * scale)}
                      </text>
                    </g>
                  );
                })}
                <line
                  className="chart_axis"
                  x1="64"
                  x2="584"
                  y1={y(0)}
                  y2={y(0)}
                />
                {chartType === "area" && (
                  <path
                    d={\`\${path} L \${x(points.length - 1)} \${y(0)} L \${x(0)} \${y(0)} Z\`}
                    fill={color}
                    fillOpacity="0.16"
                  />
                )}
                {chartType !== "bar" && (
                  <path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                )}
                {points.map((item, index) => (
                  <g
                    key={index}
                    {...pointProps(item, index, {
                      x: x(index),
                      y: y(normalized[index]),
                    })}
                  >
                    {chartType === "bar" ? (
                      <rect
                        x={x(index) - step * 0.3}
                        y={Math.min(y(normalized[index]), y(0))}
                        width={step * 0.6}
                        height={Math.abs(y(normalized[index]) - y(0))}
                        fill={itemPaint(item, index)}
                        data-pattern={itemPattern(item, index)}
                        stroke={itemInk(item, index)}
                        strokeWidth="1"
                      />
                    ) : (
                      <circle
                        cx={x(index)}
                        cy={y(normalized[index])}
                        r="4"
                        fill={color}
                      />
                    )}
                    <rect
                      x={x(index) - step / 2}
                      y="20"
                      width={step}
                      height="260"
                      fill="transparent"
                    />
                    <text
                      className="chart_tick"
                      x={x(index)}
                      y="272"
                      textAnchor="middle"
                    >
                      {item.label.length > 8
                        ? \`\${item.label.slice(0, 7)}…\`
                        : item.label}
                    </text>
                  </g>
                ))}
                {unit && (
                  <text className="chart_tick" x="64" y="12">
                    단위: {unit}
                  </text>
                )}
              </>
            )}
          </svg>
          {/* HTML 툴팁을 사용해 글자가 SVG 배율에 따라 찌그러지지 않게 합니다. */}
          {activeItem && (
            <div
              id={tooltipId}
              role="tooltip"
              className="chart_tooltip"
              ref={tooltipRef}
              style={tooltipPosition}
              onMouseEnter={() => {
                keepTooltip();
                if (active) setHovered(active); // 초점으로 연 툴팁도 마우스가 위에 있으면 유지합니다.
              }}
              onMouseLeave={leaveTooltip}
            >
              <strong>{activeItem.label}</strong>
              <span>
                {format(activeItem.value)}
                {unit}
              </span>
            </div>
          )}
        </div>
      )}
      {patterned && showLegend && !empty && !invalidRadial && (
        <ul className="chart_legend">
          {points.map((item, index) => (
            <li key={index}>
              <svg
                className="chart_swatch"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  fill={itemPaint(item, index)}
                  stroke={itemInk(item, index)}
                  data-pattern={itemPattern(item, index)}
                />
              </svg>
              {item.label} · {format(item.value)}
              {unit}
            </li>
          ))}
        </ul>
      )}
      {/* 전체 라벨과 값을 그래프의 모양·색상에 의존하지 않고 확인하는 원본 표입니다. */}
      {points.length > 0 && (
        <details className="chart_data">
          <summary tabIndex={0} aria-label={\`\${title} 데이터 표 보기\`}>
            데이터 표 보기
          </summary>
          <div className="chart_table-wrap table_wrap">
            <table className="table">
              <caption>{title} 데이터</caption>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col">값{unit && \` (\${unit})\`}</th>
                </tr>
              </thead>
              <tbody>
                {points.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.label}</th>
                    <td>{format(item.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}
    </figure>
  );
}

export default Chart;
`})))()}var k;function A(){return(A=e((()=>{k=`<script setup>
// Vue는 prop과 수명 주기를 관리하고 SVG·툴팁 생성은 공통 렌더러에 맡깁니다.
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { renderChart } from "@uxkm/interactions/chart";

defineOptions({ name: "UxkmChart" });
const props = defineProps({
  data: { type: Array, default: () => [] }, // { label, value, color?, pattern? } 항목 배열입니다.
  type: { type: String, default: "bar" }, // bar · line · area · donut · arc 유형입니다.
  title: { type: String, default: "차트" }, // 화면 제목과 SVG 접근성 이름입니다.
  description: { type: String, default: "" }, // 제목 아래의 보조 설명입니다.
  unit: { type: String, default: "" }, // 수치 뒤에 붙일 단위입니다.
  height: { type: [Number, String], default: 320 }, // 숫자는 px, 문자열은 CSS 높이입니다.
  color: { type: String, default: "var(--chart-color, #2563eb)" }, // 막대·선·영역 색상입니다.
  pattern: { type: String, default: "auto" }, // data.pattern이 우선하며 auto는 여섯 패턴을 순환합니다.
  monochrome: { type: Boolean, default: false }, // 막대·원형을 공통 잉크 색상으로 표시합니다.
  displayStyle: { type: String, default: "auto" }, // auto · color · pattern · monochrome. 명시하면 항목별 패턴보다 우선합니다.
  showLegend: { type: Boolean, default: true }, // 막대·도넛·아크 범례 표시 여부입니다.
  showGrid: { type: Boolean, default: true }, // 좌표축 격자 표시 여부입니다.
  emptyMessage: { type: String, default: "표시할 데이터가 없습니다." }, // 빈 상태 안내 문자열입니다.
});
// host 내부 DOM은 렌더러가 관리하며 destroy로 이벤트·observer·DOM을 해제합니다.
const host = ref(null);
let destroy;
function render() {
  if (!host.value) return;
  destroy?.();
  destroy = renderChart(host.value, props);
}
// DOM이 있는 마운트 이후에 그립니다. 서버에서는 빈 host만 생성됩니다.
onMounted(render);
// 배열 내부 값 변경도 감지하며 Vue DOM 갱신 후 이전 차트를 정리하고 다시 그립니다.
watch(props, render, { deep: true, flush: "post" });
// 페이지 이동이나 조건부 제거 시 문서 이벤트와 크기 관찰이 남지 않게 합니다.
onBeforeUnmount(() => destroy?.());
<\/script>

<template>
  <!-- 부모 너비를 채우고 flex/grid 안에서도 축소될 수 있도록 최소 너비를 해제합니다. -->
  <div ref="host" style="width: 100%; min-width: 0" />
</template>
`})))()}var j;function M(){return(M=e((()=>{j=`{#
  Chart 매크로: 빌드 시 설정을 HTML에 저장하고 브라우저의 initCharts()가 SVG와 툴팁을 생성합니다.
  data         : { label: 문자열, value: 숫자, color: 선택 색상, pattern: 선택 무늬 } 배열입니다.
  type         : bar · line · area · donut · arc 중 선택합니다.
  title        : 화면 제목과 SVG 접근성 이름입니다.
  description  : 제목 아래의 보조 설명입니다.
  unit         : 만원·명·% 등 수치 뒤에 붙일 단위입니다.
  height       : SVG 높이입니다. 숫자는 px, 문자열은 CSS 높이입니다.
  color        : 막대·선·영역 색상입니다. 도넛·아크는 항목별 color를 사용합니다.
  pattern      : auto · none · diagonal · reverse-diagonal · crosshatch · dots · horizontal · vertical
  displayStyle : auto · color · pattern · monochrome. 명시한 스타일은 항목별 패턴보다 우선합니다.
  monochrome   : true이면 항목 색상 대신 공통 패턴 잉크 색상으로 표시합니다.
  showLegend   : 막대·도넛·아크 범례 표시 여부입니다.
  showGrid     : 막대·선·영역의 격자 표시 여부입니다.
  emptyMessage : 빈 데이터일 때 표시할 안내 문자열입니다.
  className    : 바깥 컨테이너에 추가할 CSS 클래스입니다.
#}
{% macro chart(data=[], type='bar', title='차트', description='', unit='', height=320, color='var(--chart-color, #2563eb)', showLegend=true, showGrid=true, emptyMessage='표시할 데이터가 없습니다.', className='', pattern='auto', monochrome=false, displayStyle='auto') %}
{% set options = { data: data, type: type, title: title, description: description, unit: unit, height: height, color: color, showLegend: showLegend, showGrid: showGrid, emptyMessage: emptyMessage, pattern: pattern, monochrome: monochrome, displayStyle: displayStyle } %}
{# dump로 JSON을 만들고 forceescape로 따옴표·태그 문자가 HTML 속성을 깨뜨리지 않게 합니다. #}
{# main.js의 initCharts()가 data-chart-options를 읽습니다. 컨테이너는 부모 너비의 100%입니다. #}
<div class="{{ className | escape }}" data-chart-options="{{ options | dump | forceescape }}" style="width: 100%; min-width: 0"></div>
{% endmacro %}
`})))()}var N;function P(){return(P=e((()=>{N=`import {
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
  const id = \`chart-dom-\${++sequence}\`;
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
      : \`url(#\${id}-pattern-\${index})\`;
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
    class: \`chart chart_\${type}\`,
    "data-component": "Chart",
    "data-monochrome": resolvedStyle.monochrome,
  });
  const caption = node("figcaption");
  caption.append(
    node("strong", { class: "chart_title", id: \`\${id}-title\` }, title),
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
          ? \`\${arc ? "아크" : "도넛"} 차트에는 0 이상의 값이 필요합니다.\`
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
      "aria-labelledby": \`\${id}-title\`,
      "aria-describedby": \`\${id}-description\`,
    });
    svg.style.height = typeof height === "number" ? \`\${height}px\` : height;
    svg.append(
      graphic(
        "desc",
        { id: \`\${id}-description\` },
        \`\${description ? description + ". " : ""}Tab 키로 항목을 이동하면 값이 표시됩니다. Escape 키로 툴팁을 닫습니다. 전체 값은 아래 데이터 표에서 확인할 수 있습니다.\`,
      ),
    );
    const defs = graphic("defs");
    points.forEach((item, index) => {
      if (itemPattern(item, index) === "none") return;
      const tile = graphic("pattern", {
        id: \`\${id}-pattern-\${index}\`,
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
      id: \`\${id}-tooltip\`,
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
      tooltip.style.left = \`\${clamp(screen.x - bounds.left - tip.width / 2, bounds.width - tip.width)}px\`;
      tooltip.style.top = \`\${clamp(above >= 8 ? above : screen.y - bounds.top + 12, bounds.height - tip.height)}px\`;
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
        node("span", {}, \`\${format(active.item.value)}\${unit}\`),
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
        \`\${item.label}: \${format(item.value)}\${unit}\`,
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
            "stroke-dasharray": \`\${fraction * 100 - gap} \${100 - fraction * 100 + gap}\`,
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
        .map((value, index) => \`\${index ? "L" : "M"} \${x(index)} \${y(value)}\`)
        .join(" ");
      if (type === "area")
        svg.append(
          graphic("path", {
            d: \`\${path} L \${x(points.length - 1)} \${y(0)} L \${x(0)} \${y(0)} Z\`,
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
            item.label.length > 8 ? \`\${item.label.slice(0, 7)}…\` : item.label,
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
            \`단위: \${unit}\`,
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
        doc.createTextNode(\`\${item.label} · \${format(item.value)}\${unit}\`),
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
        { tabindex: 0, "aria-label": \`\${title} 데이터 표 보기\` },
        "데이터 표 보기",
      ),
    );
    const wrap = node("div", { class: "chart_table-wrap table_wrap" });
    const table = node("table", { class: "table" });
    table.append(node("caption", {}, \`\${title} 데이터\`));
    const head = node("thead");
    const header = node("tr");
    header.append(
      node("th", { scope: "col" }, "항목"),
      node("th", { scope: "col" }, \`값\${unit ? \` (\${unit})\` : ""}\`),
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
`})))()}var F;function I(){return(I=e((()=>{F=`<!--
  Chart HTML 구현: data-chart-options의 JSON을 initCharts()가 읽어 SVG와 툴팁을 생성합니다.
  data: { label, value, color?, pattern? } 배열 / type: bar · line · area · donut · arc
  title: 제목 / description: 보조 설명 / unit: 수치 단위 / height: SVG 높이
  color: 막대·선·영역 색상 (도넛·아크는 항목별 color 사용)
  displayStyle: auto · color · pattern · monochrome (전체 스타일 선택)
  pattern: auto 또는 항목 패턴명 / monochrome: 색상을 공통 잉크로 통일
  showLegend: 막대·원형 차트 범례 / showGrid: 좌표축 격자 / emptyMessage: 빈 상태 안내 문자열
  JSON에는 주석을 넣지 않습니다. 작은따옴표·&·<·>는 HTML 엔티티로 이스케이프하세요.
-->
<div
  data-chart-options='{
    "data": [{ "label": "1월", "value": 120 }, { "label": "2월", "value": 180 }],
    "type": "bar",
    "title": "월별 매출",
    "description": "월별 매출 추이",
    "unit": "만원",
    "height": 320,
    "color": "var(--chart-color, #2563eb)",
    "displayStyle": "auto",
    "pattern": "auto",
    "monochrome": false,
    "showLegend": true,
    "showGrid": true,
    "emptyMessage": "표시할 데이터가 없습니다."
  }'
  style="width: 100%; min-width: 0"
></div>

<!-- 페이지에서 한 번 로드합니다. 프로젝트의 main.js에 initCharts()가 등록되어 있습니다. -->
<script type="module" src="/src/scripts/main.js"><\/script>
`})))()}var L;function R(){return(R=e((()=>{L=`// React와 DOM 렌더러가 같은 타일을 사용해 그래프와 범례의 모양을 일치시킵니다.
export const chartPatterns = [
  "diagonal",
  "reverse-diagonal",
  "crosshatch",
  "dots",
  "horizontal",
  "vertical",
];

export function resolveChartPattern(pattern = "auto", index = 0) {
  if (pattern === "none") return "none";
  return chartPatterns.includes(pattern)
    ? pattern
    : chartPatterns[index % chartPatterns.length];
}

// 명시한 표시 스타일은 항목별 설정보다 우선합니다. auto는 기존 개별 설정을 유지합니다.
export function resolveChartStyle(
  displayStyle = "auto",
  pattern = "auto",
  monochrome = false,
) {
  const overridePatterns = ["color", "pattern", "monochrome"].includes(
    displayStyle,
  );
  return {
    overridePatterns,
    monochrome: overridePatterns ? displayStyle === "monochrome" : monochrome,
    pattern:
      displayStyle === "color"
        ? "none"
        : overridePatterns
          ? chartPatterns.includes(pattern)
            ? pattern
            : "auto"
          : pattern,
  };
}

export function chartPatternShapes(pattern, ink) {
  const shapes = [
    {
      tag: "rect",
      attrs: {
        width: 12,
        height: 12,
        fill: "var(--chart-pattern-bg, var(--color-surface, #fff))",
      },
    },
  ];
  if (pattern === "dots") {
    shapes.push({ tag: "circle", attrs: { cx: 6, cy: 6, r: 2.2, fill: ink } });
    return shapes;
  }
  const paths = {
    diagonal: "M-3 3 L3 -3 M0 12 L12 0 M9 15 L15 9",
    "reverse-diagonal": "M-3 9 L3 15 M0 0 L12 12 M9 -3 L15 3",
    crosshatch: "M0 0 L12 12 M0 12 L12 0",
    horizontal: "M0 3 H12 M0 9 H12",
    vertical: "M3 0 V12 M9 0 V12",
  };
  shapes.push({
    tag: "path",
    attrs: {
      d: paths[pattern] || paths.diagonal,
      fill: "none",
      stroke: ink,
      strokeWidth: "var(--chart-pattern-stroke-width, 1.5)",
    },
  });
  return shapes;
}
`})))()}function z(e){return c({..._.args,...h[e].args},e)}var B,V,H,U;function W(){return(W=e((()=>{b(),O(),A(),M(),P(),I(),R(),B=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Chart/Chart.html`,code:F},{id:`gulp`,label:`Gulp`,fileName:`Chart/chart.njk · @uxkm/interactions/chart`,code:j},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/Chart/Chart.vue`,code:k},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/Chart/Chart.jsx`,code:D}],V=[{id:`javascript`,label:`JavaScript`,fileName:`packages/interactions/src/chart-patterns.js · chart.js`,code:`// chart-patterns.js — 패턴 정의\n${L}\n\n// chart.js — 공통 렌더러\n${N}`}],H=[`Bar`,`Line`,`Area`,`Donut`,`Arc`,`NegativeValues`,`Empty`,`CustomEmpty`,`MonochromeBar`,`MonochromeDonut`,`MonochromeArc`],U=Object.fromEntries(H.map(e=>[e,z(e)]))})))()}function G(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...T(),...e.components};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(i,{of:h}),`
`,(0,q.jsx)(t.h1,{id:`chart`,children:`Chart`}),`
`,(0,q.jsxs)(t.p,{children:[(0,q.jsx)(t.strong,{children:`라이선스: 무료`}),` — 외부 차트 라이브러리 없이 자체 SVG로 그립니다. 추가 라이선스 비용이 없습니다.`]}),`
`,(0,q.jsxs)(t.p,{children:[`단일 데이터 계열을 막대·선·영역·도넛·아크로 표시하는 반응형 SVG 차트입니다.
Vue는 `,(0,q.jsx)(t.code,{children:`@uxkm/vue/chart`}),`, React는 `,(0,q.jsx)(t.code,{children:`@uxkm/react/chart`}),`로 가져옵니다. Gulp는 `,(0,q.jsx)(t.code,{children:`chart`}),` Nunjucks 매크로와 `,(0,q.jsx)(t.code,{children:`main.js`}),` 초기화를 사용합니다.
HTML은 `,(0,q.jsx)(t.code,{children:`data-chart-options`}),` 속성에 JSON 설정을 넣고 `,(0,q.jsx)(t.code,{children:`main.js`}),`로 초기화합니다.
모든 구현은 공통 스타일 `,(0,q.jsx)(t.code,{children:`styles/uxkm.css`}),`를 함께 로드하세요. Vue 차트는 마운트 후 브라우저에서 그려지며 prop 변경 시 갱신됩니다.
WebSquare 탭은 차트 계열에서 제공하지 않습니다. HTML·Gulp·Vue·React(및 Next/Nuxt 재사용)로 사용하세요.`]}),`
`,(0,q.jsx)(t.h2,{id:`라이선스--무료--유료`,children:`라이선스 · 무료 / 유료`}),`
`,(0,q.jsx)(t.p,{children:`가이드에서 제공하는 차트는 라이선스에 따라 아래처럼 나뉩니다.`}),`
`,(0,q.jsx)(t.h3,{id:`무료`,children:`무료`}),`
`,(0,q.jsx)(`div`,{className:`table_wrap`,children:(0,q.jsxs)(`table`,{className:`table`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:`컴포넌트`}),(0,q.jsx)(`th`,{scope:`col`,children:`기반`}),(0,q.jsx)(`th`,{scope:`col`,children:`라이선스`}),(0,q.jsx)(`th`,{scope:`col`,children:`비고`})]})}),(0,q.jsxs)(`tbody`,{children:[(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:`Chart`}),(0,q.jsx)(`td`,{children:`외부 라이브러리 없음 (자체 SVG)`}),(0,q.jsx)(`td`,{children:`가이드 컴포넌트`}),(0,q.jsx)(`td`,{children:`의존성 없이 사용`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:`ChartJs`}),(0,q.jsx)(`td`,{children:(0,q.jsx)(`a`,{href:`https://www.chartjs.org/`,target:`_blank`,rel:`noreferrer`,children:(0,q.jsx)(t.p,{children:`Chart.js`})})}),(0,q.jsx)(`td`,{children:`MIT`}),(0,q.jsx)(`td`,{children:`상용 프로젝트에서도 무료`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:`ChartEcharts`}),(0,q.jsx)(`td`,{children:(0,q.jsx)(`a`,{href:`https://echarts.apache.org/`,target:`_blank`,rel:`noreferrer`,children:(0,q.jsx)(t.p,{children:`Apache ECharts`})})}),(0,q.jsx)(`td`,{children:`Apache-2.0`}),(0,q.jsx)(`td`,{children:`상용 프로젝트에서도 무료`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:`ChartD3`}),(0,q.jsx)(`td`,{children:(0,q.jsx)(`a`,{href:`https://d3js.org/`,target:`_blank`,rel:`noreferrer`,children:(0,q.jsx)(t.p,{children:`D3.js`})})}),(0,q.jsx)(`td`,{children:`ISC`}),(0,q.jsx)(`td`,{children:`상용 프로젝트에서도 무료`})]})]})]})}),`
`,(0,q.jsx)(t.h3,{id:`유료-상용-시-라이선스-필요`,children:`유료 (상용 시 라이선스 필요)`}),`
`,(0,q.jsx)(`div`,{className:`table_wrap`,children:(0,q.jsxs)(`table`,{className:`table`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:`컴포넌트`}),(0,q.jsx)(`th`,{scope:`col`,children:`기반`}),(0,q.jsx)(`th`,{scope:`col`,children:`라이선스`}),(0,q.jsx)(`th`,{scope:`col`,children:`비고`})]})}),(0,q.jsx)(`tbody`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:`ChartHighcharts`}),(0,q.jsx)(`td`,{children:(0,q.jsx)(`a`,{href:`https://www.highcharts.com/`,target:`_blank`,rel:`noreferrer`,children:(0,q.jsx)(t.p,{children:`Highcharts`})})}),(0,q.jsx)(`td`,{children:`상용 라이선스`}),(0,q.jsxs)(`td`,{children:[(0,q.jsxs)(t.p,{children:[`비상업·개인·교육 등 조건에 따라 무료일 수 있으나,`,` `,`
`,(0,q.jsx)(`strong`,{children:`상용 제품에는 Highcharts 라이선스 구매가 필요`}),`
합니다. 도입 전`,` `]}),(0,q.jsx)(`a`,{href:`https://shop.highcharts.com/`,target:`_blank`,rel:`noreferrer`,children:(0,q.jsx)(t.p,{children:`Highcharts 라이선스`})}),(0,q.jsx)(t.p,{children:`를 확인하세요.`})]})]})})]})}),`
`,(0,q.jsxs)(t.p,{children:[`API(`,(0,q.jsx)(t.code,{children:`data`}),`, `,(0,q.jsx)(t.code,{children:`type`}),`, `,(0,q.jsx)(t.code,{children:`title`}),` 등)는 계열마다 유사하게 맞춰 두었습니다. 비용·커스터마이징·번들 크기에 맞춰 선택하세요.`]}),`
`,(0,q.jsx)(t.h3,{id:`선택-가이드`,children:`선택 가이드`}),`
`,(0,q.jsxs)(t.p,{children:[`| 상황 | 권장 | 이유 |
| --- | --- | --- |
| 의존성·라이선스 부담을 최소화 | `,(0,q.jsx)(t.code,{children:`Chart`}),` | 외부 라이브러리 없음, 패턴·아크 지원 |
| 익숙한 캔버스 차트·커뮤니티 예제 | `,(0,q.jsx)(t.code,{children:`ChartJs`}),` | MIT, 가벼운 의존성 |
| 대시보드·풍부한 옵션 | `,(0,q.jsx)(t.code,{children:`ChartEcharts`}),` | Apache-2.0, `,(0,q.jsx)(t.code,{children:`chartOptions`}),`로 ECharts option 확장 |
| 커스텀 스케일·경로 시각화 | `,(0,q.jsx)(t.code,{children:`ChartD3`}),` | ISC, SVG를 D3로 직접 그림 |
| Highcharts 생태계가 이미 있는 상용 제품 | `,(0,q.jsx)(t.code,{children:`ChartHighcharts`}),` | `,(0,q.jsx)(t.strong,{children:`상용 라이선스 구매 필요`}),` |`]}),`
`,(0,q.jsx)(t.p,{children:`WebSquare 탭은 차트 계열에서 제공하지 않습니다. HTML·Gulp·Vue·React(및 Next/Nuxt 재사용)로 사용하세요.`}),`
`,(0,q.jsx)(t.h2,{id:`스타일-직접-선택`,children:`스타일 직접 선택`}),`
`,(0,q.jsx)(t.p,{children:`아래에서 색상 채움·컬러 패턴·흑백 패턴을 선택하고 패턴 종류와 항목 색상을 변경할 수 있습니다. 미리보기 아래의 프레임워크별 코드도 선택값에 맞춰 갱신됩니다.`}),`
`,`
`,(0,q.jsx)(m,{}),`
`,(0,q.jsxs)(t.p,{children:[(0,q.jsx)(t.code,{children:`displayStyle`}),`은 막대·도넛·아크에 적용합니다.`]}),`
`,(0,q.jsxs)(`table`,{children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:`displayStyle`}),(0,q.jsx)(`th`,{children:`동작`})]})}),(0,q.jsxs)(`tbody`,{children:[(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`auto`})}),(0,q.jsxs)(`td`,{children:[`기존 `,(0,q.jsx)(`code`,{children:`data.pattern`}),`, `,(0,q.jsx)(`code`,{children:`pattern`}),`, `,(0,q.jsx)(`code`,{children:`monochrome`}),` 설정 유지`]})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`color`})}),(0,q.jsx)(`td`,{children:`항목별 패턴을 해제하고 색상으로 채움`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`pattern`})}),(0,q.jsxs)(`td`,{children:[`컬러 패턴으로 표시. `,(0,q.jsx)(`code`,{children:`pattern`}),`으로 무늬 선택`]})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`monochrome`})}),(0,q.jsxs)(`td`,{children:[`흑백 패턴으로 표시. `,(0,q.jsx)(`code`,{children:`pattern`}),`으로 무늬 선택`]})]})]})]}),`
`,(0,q.jsxs)(t.p,{children:[`명시한 스타일은 항목별 패턴보다 우선합니다. `,(0,q.jsx)(t.code,{children:`pattern`}),`이 `,(0,q.jsx)(t.code,{children:`auto`}),`이면 여섯 패턴을 순환하며, 명시한 패턴/흑백 모드에서 `,(0,q.jsx)(t.code,{children:`none`}),`을 전달해도 자동 패턴으로 표시합니다.`]}),`
`,(0,q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,q.jsx)(s,{examples:B,showFullCode:!0}),`
`,(0,q.jsxs)(t.p,{children:[`HTML·Vue·Gulp는 아래 공통 렌더러로 SVG·데이터 표·툴팁을 생성합니다. 별도 프로젝트에 구현을 복사하는 경우 이 파일과 공통 차트 스타일도 포함하세요.
HTML과 Gulp는 번들링 대상인 `,(0,q.jsx)(t.code,{children:`src/scripts/main.js`}),`에서 `,(0,q.jsx)(t.code,{children:`@uxkm/interactions/chart`}),`의 `,(0,q.jsx)(t.code,{children:`initCharts()`}),`를 호출합니다. 이 프로젝트의 시작 스크립트에는 이미 등록되어 있습니다.
번들러 없이 순수 HTML에서 사용할 때는 공통 렌더러 `,(0,q.jsx)(t.code,{children:`chart.js`}),`와 패턴 정의 `,(0,q.jsx)(t.code,{children:`chart-patterns.js`}),`를 같은 폴더에 복사하고 `,(0,q.jsx)(t.code,{children:`<script type="module">`}),`에서 `,(0,q.jsx)(t.code,{children:`import { initCharts } from './chart.js'; initCharts();`}),`로 초기화하세요. React 원본을 별도 프로젝트로 옮길 때도 패턴 정의 모듈을 포함하세요.`]}),`
`,(0,q.jsx)(s,{examples:V,showFullCode:!0}),`
`,(0,q.jsx)(t.h2,{id:`막대`,children:`막대`}),`
`,(0,q.jsx)(r,{of:x,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.Bar}),`
`,(0,q.jsx)(t.h2,{id:`선--영역`,children:`선 · 영역`}),`
`,(0,q.jsx)(r,{of:u,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.Line}),`
`,(0,q.jsx)(r,{of:v,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.Area}),`
`,(0,q.jsx)(t.h2,{id:`도넛`,children:`도넛`}),`
`,(0,q.jsxs)(t.p,{children:[`각 항목의 `,(0,q.jsx)(t.code,{children:`color`}),`와 `,(0,q.jsx)(t.code,{children:`pattern`}),`으로 색상과 무늬를 지정합니다. 범례에 같은 무늬·항목명·값을 표시합니다.
도넛은 0 이상의 값만 지원하며 합계가 0이면 빈 상태를 표시합니다.`]}),`
`,(0,q.jsx)(r,{of:y,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.Donut}),`
`,(0,q.jsx)(t.h2,{id:`색상-커스텀`,children:`색상 커스텀`}),`
`,(0,q.jsxs)(t.p,{children:[`HTML·Gulp·Vue·React 모두 같은 CSS 변수를 사용합니다. 공통 스타일 다음에 아래 `,(0,q.jsx)(t.code,{children:`:root`}),` 선언을 추가하면 전체 차트의 기본 색상이 바뀝니다.`]}),`
`,(0,q.jsx)(t.pre,{children:(0,q.jsx)(t.code,{className:`language-css`,children:`:root {
  --chart-color: #2563eb; /* 막대·선·영역 */
  --chart-series-1: #2563eb; /* 원형 차트 항목 1 */
  --chart-series-2: #0d9488;
  --chart-series-3: #9333ea;
  --chart-series-4: #c2410c;
  --chart-series-5: #be185d;
  --chart-series-6: #4f46e5;
  --chart-track-color: #64748b; /* 아크 예제의 잔여 구간 */
}

/* 특정 차트만 바꾸려면 차트를 감싸는 요소에 변수를 지정합니다. */
.sales-chart {
  --chart-series-1: #e11d48;
  --chart-series-2: #f59e0b;
}
`})}),`
`,(0,q.jsxs)(t.p,{children:[`도넛·아크 예제의 `,(0,q.jsx)(t.code,{children:`data`}),`에는 항목별 `,(0,q.jsx)(t.code,{children:`color`}),`가 명시되어 있습니다. `,(0,q.jsx)(t.code,{children:`color`}),`에 `,(0,q.jsx)(t.code,{children:`#e11d48`}),` 같은 색상 값을 직접 넣거나 `,(0,q.jsx)(t.code,{children:`var(--chart-series-1)`}),`처럼 변수를 지정할 수 있습니다.
항목의 `,(0,q.jsx)(t.code,{children:`color`}),`를 생략하면 `,(0,q.jsx)(t.code,{children:`--chart-series-1`}),`부터 `,(0,q.jsx)(t.code,{children:`--chart-series-6`}),`까지 순서대로 반복 적용합니다. 직접 지정한 색상은 기본 변수보다 우선하며 범례에도 동일하게 적용됩니다.
막대·선·영역에서 `,(0,q.jsx)(t.code,{children:`color`}),` 속성에 고정 색상을 전달한 경우에는 `,(0,q.jsx)(t.code,{children:`--chart-color`}),`보다 해당 속성이 우선합니다.`]}),`
`,(0,q.jsx)(t.h2,{id:`아크`,children:`아크`}),`
`,(0,q.jsxs)(t.p,{children:[(0,q.jsx)(t.code,{children:`type="arc"`}),`는 전체 합계에 대한 항목별 비율을 반원형으로 표시합니다.
목표 달성률은 완료와 잔여 값을 함께 전달하세요. 각 항목의 `,(0,q.jsx)(t.code,{children:`color`}),`로 색상을 지정할 수 있습니다.
너비는 부모 영역의 100%이며 반원의 비율을 유지합니다. 도넛과 동일하게 0 이상의 값을 지원하고 합계가 0이면 빈 상태를 표시합니다.`]}),`
`,(0,q.jsx)(r,{of:C,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.Arc}),`
`,(0,q.jsx)(t.h2,{id:`색상-없이-구분하는-패턴`,children:`색상 없이 구분하는 패턴`}),`
`,(0,q.jsxs)(t.p,{children:[`색상만으로 항목을 구분하지 않도록 막대·도넛·아크는 기본값 `,(0,q.jsx)(t.code,{children:`pattern="auto"`}),`에서 여섯 패턴을 순환합니다.
`,(0,q.jsx)(t.code,{children:`monochrome`}),`을 켜면 항목의 색상 설정을 사용하지 않고 공통 잉크 색상으로 표시합니다. 선·영역 차트에는 이 패턴 옵션을 적용하지 않습니다.
이는 색상 외에 형태나 텍스트를 함께 제공하도록 하는 `,(0,q.jsx)(t.a,{href:`https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html`,rel:`nofollow`,children:`W3C 색상 사용 기준`}),`에 따른 보완입니다.`]}),`
`,(0,q.jsxs)(`table`,{children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:`pattern`}),(0,q.jsx)(`th`,{children:`모양`})]})}),(0,q.jsxs)(`tbody`,{children:[(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`auto`})}),(0,q.jsx)(`td`,{children:`항목 순서대로 아래 6종 반복`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`diagonal`})}),(0,q.jsx)(`td`,{children:`사선`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`reverse-diagonal`})}),(0,q.jsx)(`td`,{children:`반대 방향 사선`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`crosshatch`})}),(0,q.jsx)(`td`,{children:`교차 빗금`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`dots`})}),(0,q.jsx)(`td`,{children:`점`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`horizontal`})}),(0,q.jsx)(`td`,{children:`가로선`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`vertical`})}),(0,q.jsx)(`td`,{children:`세로선`})]}),(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:(0,q.jsx)(`code`,{children:`none`})}),(0,q.jsx)(`td`,{children:`단색 채움`})]})]})]}),`
`,(0,q.jsxs)(t.p,{children:[(0,q.jsx)(t.code,{children:`data`}),` 항목의 `,(0,q.jsx)(t.code,{children:`pattern`}),`이 차트 전체 `,(0,q.jsx)(t.code,{children:`pattern`}),`보다 우선합니다. 여섯 항목을 넘으면 패턴이 반복되므로 라벨·범례·데이터 표를 함께 제공하세요.
`,(0,q.jsx)(t.code,{children:`none`}),`을 선택하거나 여러 항목에 같은 패턴을 지정할 때도 색상 외에 항목을 구분할 수 있는 표시를 유지해야 합니다.`]}),`
`,(0,q.jsx)(r,{of:w,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.MonochromeBar}),`
`,(0,q.jsx)(r,{of:d,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.MonochromeDonut}),`
`,(0,q.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.MonochromeArc}),`
`,(0,q.jsx)(t.pre,{children:(0,q.jsx)(t.code,{className:`language-css`,children:`:root {
  --chart-pattern-bg: var(--color-surface, #fff); /* 무늬의 바탕색 */
  --chart-pattern-ink: var(--color-text, #182131); /* 흑백 모드 잉크 */
  --chart-pattern-stroke-width: 1.5; /* 선 두께 */
}
`})}),`
`,(0,q.jsx)(t.p,{children:`패턴과 범례는 같은 SVG 타일을 사용합니다. 사용자 색상이나 패턴 변수를 바꿀 때는 바탕과 선·점의 대비 및 작은 구간에서 무늬가 구분되는지도 확인하세요.`}),`
`,(0,q.jsx)(t.h2,{id:`음수--빈-데이터`,children:`음수 · 빈 데이터`}),`
`,(0,q.jsx)(t.p,{children:`막대·선·영역은 음수를 지원합니다. 유한한 숫자가 아닌 값과 문자열 라벨이 없는 항목은 제외합니다.
가독성을 위해 짧은 라벨과 적은 수의 항목 사용을 권장합니다. 8자를 넘는 축 라벨은 줄여 표시하고 전체 라벨은 데이터 표에서 제공합니다.`}),`
`,(0,q.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.NegativeValues}),`
`,(0,q.jsx)(r,{of:S,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.Empty}),`
`,(0,q.jsx)(t.h2,{id:`빈-데이터-안내-변경`,children:`빈 데이터 안내 변경`}),`
`,(0,q.jsxs)(t.p,{children:[(0,q.jsx)(t.code,{children:`emptyMessage`}),`로 빈 데이터 안내 문구를 변경할 수 있습니다. 생략하면 `,(0,q.jsx)(t.code,{children:`표시할 데이터가 없습니다.`}),`를 표시합니다.
모든 구현에서 문자열을 지원하며 React에서는 아이콘·설명을 포함한 JSX도 전달할 수 있습니다. 도넛·아크의 음수 데이터 오류 안내는 별도로 표시됩니다.`]}),`
`,(0,q.jsx)(t.pre,{children:(0,q.jsx)(t.code,{className:`language-jsx`,children:`<Chart
  title="월별 매출"
  data={[]}
  emptyMessage="선택한 기간의 매출 데이터가 없습니다."
/>
`})}),`
`,(0,q.jsx)(r,{of:l,sourceState:`none`}),`
`,(0,q.jsx)(s,{examples:U.CustomEmpty}),`
`,(0,q.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,q.jsx)(t.p,{children:`각 차트의 데이터 요소에 마우스를 올리면 진입한 포인터 위치 근처에, Tab 키로 초점을 이동하면 해당 막대 끝·데이터 점·도넛 및 아크 구간의 중앙 근처에 항목명과 단위가 포함된 값이 툴팁으로 표시됩니다.
같은 요소 안에서 툴팁은 포인터를 따라 움직이지 않아 툴팁 위에 마우스를 올릴 수 있습니다. 마우스가 남아 있어도 키보드로 이동한 초점의 정보를 우선 표시합니다.
툴팁은 차트 경계를 벗어나지 않도록 위치를 조정하며, 화면 크기가 바뀌면 위치를 다시 계산합니다.
툴팁 위로 마우스를 옮겨도 내용을 읽을 수 있으며, 마우스와 초점이 모두 벗어나거나 Escape 키를 누르면 닫힙니다.
막대·선·영역 차트는 각 항목의 세로 영역 전체에서 마우스 툴팁을 지원하며 0인 값도 확인할 수 있습니다.`}),`
`,(0,q.jsxs)(t.p,{children:[`SVG는 제목과 항목별 값 설명을 제공합니다. `,(0,q.jsx)(t.code,{children:`데이터 표 보기`}),`를 키보드로 열면 원본 라벨과 값을 표로 확인할 수 있습니다.`]}),`
`,(0,q.jsxs)(t.p,{children:[`원형 차트는 구간 사이의 간격과 키보드 초점 표시를 제공하며, 좁은 화면에서는 불필요한 SVG 여백을 줄여 구간을 크게 표시합니다.
기본 색상은 밝은·어두운 테마에 맞춰 변경됩니다. CSS 변수나 `,(0,q.jsx)(t.code,{children:`color`}),`를 직접 변경하면 배경과 구간의 대비를 다시 확인하세요.`]}),`
`,(0,q.jsx)(t.p,{children:`검증 범위: Storybook의 axe 검사, Chromium 키보드·툴팁 동작, 밝은·어두운 테마의 기본 그래픽 대비, 좁은 컨테이너의 툴팁 위치를 검사합니다.
자동 검사는 모든 접근성 문제를 판별하지 못하므로 실제 스크린리더의 음성 출력과 확대 화면은 별도 확인이 필요합니다.`}),`
`,(0,q.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,q.jsx)(a,{of:h})]})}function K(e={}){let{wrapper:t}={...T(),...e.components};return t?(0,q.jsx)(t,{...e,children:(0,q.jsx)(G,{...e})}):G(e)}var q;function J(){return(J=e((()=>{q=t(),E(),n(),b(),p(),o(),W()})))()}J();export{K as default};
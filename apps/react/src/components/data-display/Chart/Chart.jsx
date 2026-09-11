import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
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
      : `url(#${patternId}-${index})`;
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
    "aria-label": `${item.label}: ${format(item.value)}${unit}`,
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
    .map((value, index) => `${index ? "L" : "M"} ${x(index)} ${y(value)}`)
    .join(" ");
  let offset = 0;

  return (
    <figure
      {...props}
      className={`chart chart_${chartType} ${className}`}
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
            ? `${arc ? "아크" : "도넛"} 차트에는 0 이상의 값이 필요합니다.`
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
              {description ? `${description}. ` : ""}
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
                      id={`${patternId}-${index}`}
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
                      strokeDasharray={`${fraction * 100 - gap} ${100 - fraction * 100 + gap}`}
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
                    d={`${path} L ${x(points.length - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`}
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
                        ? `${item.label.slice(0, 7)}…`
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
          <summary tabIndex={0} aria-label={`${title} 데이터 표 보기`}>
            데이터 표 보기
          </summary>
          <div className="chart_table-wrap table_wrap">
            <table className="table">
              <caption>{title} 데이터</caption>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col">값{unit && ` (${unit})`}</th>
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

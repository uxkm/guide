import { useEffect, useRef } from "react";
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

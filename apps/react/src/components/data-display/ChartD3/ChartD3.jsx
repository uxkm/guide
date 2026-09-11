import { useEffect, useRef } from "react";
import { renderChartD3 } from "@uxkm/html/chart-d3";

/** D3.js 기반 단일 계열 차트. */
export function ChartD3({
  data = [],
  type = "bar",
  title = "차트",
  description = "",
  unit = "",
  height = 320,
  color = "var(--chart-color, #2563eb)",
  showLegend = true,
  showGrid = true,
  emptyMessage = "표시할 데이터가 없습니다.",
  chartOptions = null,
  className = "",
  ...props
}) {
  const host = useRef(null);
  useEffect(() => {
    if (!host.current) return undefined;
    return renderChartD3(host.current, {
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

export default ChartD3;

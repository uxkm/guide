// React와 DOM 렌더러가 같은 타일을 사용해 그래프와 범례의 모양을 일치시킵니다.
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

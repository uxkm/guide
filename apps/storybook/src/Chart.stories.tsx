import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import ActualChart from "../../react/src/components/data-display/Chart/Chart.jsx";
import { hiddenArgTypes } from "./shared/storyArgTypes";
import { useEffect, useRef } from "react";
import { renderChart } from "@uxkm/interactions/chart";
import { chartPatterns } from "@uxkm/interactions/chart-patterns";
import ChartStylePlayground from "./ChartStylePlayground";

const Chart = ActualChart as React.ComponentType<any>;
const monthlyData = [
  { label: "1월", value: 120 },
  { label: "2월", value: 180 },
  { label: "3월", value: 150 },
  { label: "4월", value: 240 },
  { label: "5월", value: 210 },
  { label: "6월", value: 320 },
];

async function checkTooltips(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  const targets = canvas.queryAllByRole("img");
  if (!targets.length) return;
  const documentRoot = canvasElement.ownerDocument.documentElement;
  const originalTheme = documentRoot.dataset.theme;
  // 단색과 SVG 패턴 모두 실제로 사용한 잉크 색상을 확인합니다.
  const inkColor = (shape: Element) => {
    const style = getComputedStyle(shape);
    const paint = style.fill === "none" ? style.stroke : style.fill;
    const patternId = paint.match(/#([^)'"\s]+)/)?.[1];
    if (!patternId) return paint;
    const tile = canvasElement.ownerDocument.getElementById(patternId)!;
    const ink = getComputedStyle(tile.querySelector("path, circle")!);
    return ink.fill === "none" ? ink.stroke : ink.fill;
  };
  const luminance = (color: string) => {
    const rgb = color
      .match(/[\d.]+/g)!
      .slice(0, 3)
      .map(Number)
      .map((v) => {
        const c = v / 255;
        return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
      });
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  };
  // 그래픽 대비는 axe가 자동 판별하지 못하므로 기본 테마 두 가지를 직접 검사합니다.
  try {
    for (const theme of ["light", "dark"]) {
      documentRoot.dataset.theme = theme;
      const background = luminance(
        getComputedStyle(canvasElement.querySelector(".chart_visual")!)
          .backgroundColor,
      );
      for (const target of targets) {
        const shape = target.firstElementChild!;
        const foreground = luminance(inkColor(shape));
        await expect(
          (Math.max(background, foreground) + 0.05) /
            (Math.min(background, foreground) + 0.05),
        ).toBeGreaterThanOrEqual(3);
      }
    }
  } finally {
    if (originalTheme) documentRoot.dataset.theme = originalTheme;
    else delete documentRoot.dataset.theme;
  }
  // 렌더링 후 루트 변수를 바꿔도 원형 구간과 범례에 같은 색상이 즉시 적용되어야 합니다.
  const radial = canvasElement.querySelector(".chart_donut, .chart_arc");
  if (canvasElement.querySelector('[data-monochrome="true"]')) {
    const shapes = targets.map((target) => target.firstElementChild!);
    await expect(new Set(shapes.map(inkColor)).size).toBe(1);
    await expect(
      new Set(shapes.map((shape) => shape.getAttribute("data-pattern"))).size,
    ).toBe(Math.min(6, shapes.length));
  }
  const patternIds = [
    ...canvasElement.ownerDocument.querySelectorAll("pattern[id]"),
  ].map((tile) => tile.id);
  await expect(new Set(patternIds).size).toBe(patternIds.length);
  if (radial && radial.getAttribute("data-monochrome") !== "true") {
    const rootStyle = canvasElement.ownerDocument.documentElement.style;
    const previous = rootStyle.getPropertyValue("--chart-series-1");
    const priority = rootStyle.getPropertyPriority("--chart-series-1");
    try {
      rootStyle.setProperty("--chart-series-1", "#e11d48");
      const segment = radial.querySelector(
        ".chart_point > circle, .chart_point > path",
      )!;
      const swatch = radial.querySelector(".chart_swatch rect")!;
      await expect(inkColor(segment)).toBe("rgb(225, 29, 72)");
      await expect(inkColor(swatch)).toBe("rgb(225, 29, 72)");
    } finally {
      if (previous)
        rootStyle.setProperty("--chart-series-1", previous, priority);
      else rootStyle.removeProperty("--chart-series-1");
    }
  }
  for (const [index, target] of targets.entries()) {
    const shape = target.firstElementChild!;
    const pattern = shape.getAttribute("data-pattern");
    if (pattern && pattern !== "none") {
      const paint =
        shape.getAttribute("fill") === "none"
          ? shape.getAttribute("stroke")
          : shape.getAttribute("fill");
      const swatch =
        canvasElement.querySelectorAll(".chart_swatch rect")[index];
      if (swatch) {
        await expect(swatch).toHaveAttribute("fill", paint);
        await expect(swatch).toHaveAttribute("data-pattern", pattern);
      }
      const id = paint!.match(/#([^)]*)/)![1];
      await expect(
        canvasElement.ownerDocument.getElementById(id),
      ).not.toBeNull();
    }
  }
  const first = targets[0];
  await userEvent.hover(first);
  // 포인터가 같은 요소 안에서 움직여도 툴팁이 도망가지 않아야 합니다.
  const hoverPosition = canvas.getByRole("tooltip").getBoundingClientRect();
  first.dispatchEvent(
    new MouseEvent("mousemove", { bubbles: true, clientX: 100, clientY: 100 }),
  );
  await expect(canvas.getByRole("tooltip").getBoundingClientRect().left).toBe(
    hoverPosition.left,
  );
  await expect(canvas.getByRole("tooltip").getBoundingClientRect().top).toBe(
    hoverPosition.top,
  );
  await expect(canvas.getByRole("tooltip")).toBeVisible();
  await expect(first).toHaveAttribute(
    "aria-describedby",
    canvas.getByRole("tooltip").id,
  );
  await userEvent.unhover(first);
  await userEvent.hover(canvas.getByRole("tooltip"));
  await expect(canvas.getByRole("tooltip")).toBeVisible();
  await userEvent.unhover(canvas.getByRole("tooltip"));
  await waitFor(() =>
    expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument(),
  );
  first.focus();
  await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible());
  // 초점으로 연 툴팁도 마우스가 그 위에 있으면 초점 해제 후까지 유지합니다.
  await userEvent.hover(canvas.getByRole("tooltip"));
  first.blur();
  await expect(canvas.getByRole("tooltip")).toBeVisible();
  await userEvent.unhover(canvas.getByRole("tooltip"));
  await waitFor(() =>
    expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument(),
  );
  first.focus();
  await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible());
  await expect(first).toHaveFocus();
  const tooltip = canvas.getByRole("tooltip");
  const firstPosition = tooltip.getBoundingClientRect();
  const visual = tooltip.parentElement!;
  const expectInsideChart = () => {
    const bounds = visual.getBoundingClientRect();
    const tip = tooltip.getBoundingClientRect();
    expect(tip.left).toBeGreaterThanOrEqual(bounds.left);
    expect(tip.right).toBeLessThanOrEqual(bounds.right + 1);
    expect(tip.top).toBeGreaterThanOrEqual(bounds.top);
    expect(tip.bottom).toBeLessThanOrEqual(bounds.bottom + 1);
  };
  expectInsideChart();
  await expect(first).toHaveAccessibleDescription(
    first.getAttribute("aria-label")?.replace(": ", " "),
  );
  if (targets.length > 1) {
    // 마우스가 첫 항목 위에 남아 있어도 Tab으로 옮긴 초점의 정보를 읽어야 합니다.
    await userEvent.hover(first);
    await userEvent.tab();
    await expect(targets[1]).toHaveFocus();
    await expect(targets[1]).toHaveAttribute("aria-describedby", tooltip.id);
    await expect(first).not.toHaveAttribute("aria-describedby");
    await expect(targets[1]).toHaveAccessibleDescription(
      targets[1].getAttribute("aria-label")?.replace(": ", " "),
    );
    await userEvent.unhover(first);
    await waitFor(() => {
      const nextPosition = tooltip.getBoundingClientRect();
      expect(
        Math.abs(nextPosition.left - firstPosition.left) +
          Math.abs(nextPosition.top - firstPosition.top),
      ).toBeGreaterThan(1);
    });
    expectInsideChart();
  }
  const previousWidth = visual.style.width;
  visual.style.width = "280px";
  await waitFor(expectInsideChart);
  visual.style.width = previousWidth;
  await userEvent.keyboard("{Escape}");
  await expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
  await expect(targets.length > 1 ? targets[1] : first).toHaveFocus();
  // 모든 항목을 순서대로 지나 표 열기 요소까지 빠져나갈 수 있어야 합니다.
  for (
    let index = targets.length > 1 ? 2 : 1;
    index < targets.length;
    index++
  ) {
    await userEvent.tab();
    await expect(targets[index]).toHaveFocus();
  }
  await userEvent.tab();
  const summary = canvas.getByText("데이터 표 보기");
  await expect(summary).toHaveFocus();
  await expect(summary).toHaveAccessibleName(/데이터 표 보기/);
  summary.blur();
  for (const target of targets) {
    await expect(target).toHaveAccessibleName();
    await expect(target).not.toHaveAttribute("aria-describedby");
  }
}

const meta = {
  title: "데이터 표시/Chart",
  component: Chart,
  play: async ({ canvasElement }) => checkTooltips(canvasElement),
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", minWidth: 0 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    data: monthlyData,
    type: "bar",
    title: "월별 매출",
    description: "상반기 매출 추이",
    unit: "만원",
    height: 320,
    color: "var(--chart-color, #2563eb)",
    pattern: "auto",
    monochrome: false,
    displayStyle: "auto",
    showLegend: true,
    showGrid: true,
    emptyMessage: "표시할 데이터가 없습니다.",
  },
  argTypes: {
    ...hiddenArgTypes,
    displayStyle: {
      control: "select",
      options: ["auto", "color", "pattern", "monochrome"],
      description:
        "표시 스타일. auto는 개별 설정 유지, 나머지는 항목별 패턴보다 우선합니다.",
    },
    data: {
      control: "object",
      description:
        "{ label: string, value: number, color?: string, pattern?: string } 배열. 항목별 색상·패턴을 지정합니다.",
    },
    type: {
      control: "select",
      options: ["bar", "line", "area", "donut", "arc"],
      description: "차트 유형",
    },
    title: { control: "text", description: "차트 제목과 접근성 이름" },
    description: { control: "text" },
    unit: { control: "text", description: "값의 단위" },
    height: { control: { type: "range", min: 200, max: 600, step: 20 } },
    color: {
      control: "color",
      description: "막대·선·영역 색상. 도넛·아크는 항목별 color를 사용합니다.",
    },
    pattern: {
      control: "select",
      options: ["auto", "none", ...chartPatterns],
      description: "막대·도넛·아크 패턴. 항목의 pattern이 우선합니다.",
    },
    monochrome: {
      control: "boolean",
      description: "막대·도넛·아크를 공통 잉크 색상으로 표시합니다.",
    },
    showLegend: { control: "boolean", description: "막대·도넛·아크 범례 표시" },
    showGrid: { control: "boolean", description: "직교 좌표 차트의 격자 표시" },
    emptyMessage: {
      control: "text",
      description:
        "빈 데이터 안내 내용. 문자열 또는 ReactNode를 전달하며, 생략하면 기본 문구를 표시합니다.",
    },
  },
} satisfies Meta<typeof Chart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
async function checkStyleOptions(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  const shapes = () => [
    ...canvasElement.querySelectorAll(".chart_point > [data-pattern]"),
  ];
  await waitFor(() => expect(shapes()).toHaveLength(4));
  await userEvent.click(canvas.getByRole("radio", { name: "색상 채움" }));
  await waitFor(() =>
    expect(
      shapes().every((shape) => shape.getAttribute("data-pattern") === "none"),
    ).toBe(true),
  );
  await expect(
    canvas.getByRole("combobox", { name: "패턴 종류" }),
  ).toBeDisabled();
  await userEvent.selectOptions(
    canvas.getByRole("combobox", { name: "차트 유형" }),
    "bar",
  );
  await expect(canvasElement.querySelector(".chart_bar")).not.toBeNull();
  await userEvent.click(canvas.getByRole("radio", { name: "흑백 패턴" }));
  await userEvent.selectOptions(
    canvas.getByRole("combobox", { name: "패턴 종류" }),
    "dots",
  );
  await waitFor(() =>
    expect(
      shapes().every((shape) => shape.getAttribute("data-pattern") === "dots"),
    ).toBe(true),
  );
  await expect(canvas.getByLabelText("검색", { exact: true })).toBeDisabled();
  await expect(
    canvasElement.querySelector('[data-monochrome="true"]'),
  ).not.toBeNull();
  await userEvent.click(canvas.getByRole("radio", { name: "컬러 패턴" }));
  await userEvent.selectOptions(
    canvas.getByRole("combobox", { name: "패턴 종류" }),
    "crosshatch",
  );
  await waitFor(() =>
    expect(
      shapes().every(
        (shape) => shape.getAttribute("data-pattern") === "crosshatch",
      ),
    ).toBe(true),
  );
  await expect(canvas.getByLabelText("검색", { exact: true })).toBeEnabled();
  await expect(
    canvasElement.querySelector('[data-monochrome="false"]'),
  ).not.toBeNull();
}
export const StylePlayground: Story = {
  name: "스타일 직접 선택",
  render: () => <ChartStylePlayground showCode={false} />,
  play: async ({ canvasElement }) => checkStyleOptions(canvasElement),
};
export const SharedStylePlayground: Story = {
  name: "HTML · Gulp · Vue 스타일 선택",
  render: () => <ChartStylePlayground runtime showCode={false} />,
  play: async ({ canvasElement }) => checkStyleOptions(canvasElement),
};
export const Bar: Story = {
  name: "막대",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await checkTooltips(canvasElement);
    await expect(
      canvas.getByRole("group", { name: "월별 매출" }),
    ).toBeVisible();
    const summary = canvas.getByText("데이터 표 보기");
    summary.focus();
    await expect(summary).toHaveFocus();
    await userEvent.click(summary);
    await expect(
      canvas.getByRole("table", { name: "월별 매출 데이터" }),
    ).toBeVisible();
    await expect(canvas.getAllByRole("row")).toHaveLength(7);
  },
};
export const Line: Story = { name: "선", args: { type: "line" } };
export const Area: Story = {
  name: "영역",
  args: { type: "area", color: "#0d9488" },
};
export const Donut: Story = {
  name: "도넛",
  args: {
    type: "donut",
    title: "유입 경로",
    description: "채널별 방문 수",
    unit: "명",
    data: [
      {
        label: "검색",
        value: 480,
        color: "var(--chart-series-1, #2563eb)",
        pattern: "diagonal",
      },
      {
        label: "직접 방문",
        value: 260,
        color: "var(--chart-series-2, #0d9488)",
        pattern: "dots",
      },
      {
        label: "소셜",
        value: 180,
        color: "var(--chart-series-3, #9333ea)",
        pattern: "crosshatch",
      },
      {
        label: "기타",
        value: 80,
        color: "var(--chart-series-4, #c2410c)",
        pattern: "horizontal",
      },
    ],
  },
};
export const Arc: Story = {
  name: "아크",
  args: {
    type: "arc",
    title: "목표 달성 현황",
    description: "전체 목표 대비 완료와 잔여 비율",
    unit: "%",
    data: [
      {
        label: "완료",
        value: 72,
        color: "var(--chart-series-1, #2563eb)",
        pattern: "diagonal",
      },
      {
        label: "잔여",
        value: 28,
        color: "var(--chart-track-color, #64748b)",
        pattern: "dots",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await checkTooltips(canvasElement);
    await expect(
      canvas.getByRole("group", { name: "목표 달성 현황" }),
    ).toBeVisible();
    await expect(canvas.getByRole("list")).toHaveTextContent("완료 · 72%");
    await userEvent.click(canvas.getByText("데이터 표 보기"));
    await expect(
      canvas.getByRole("table", { name: "목표 달성 현황 데이터" }),
    ).toBeVisible();
  },
};
export const MonochromeBar: Story = {
  name: "흑백 패턴 · 막대 6종",
  args: {
    monochrome: true,
    type: "bar",
    title: "패턴별 수량",
    description: "동일한 잉크 색상에서 무늬로 항목을 구분합니다.",
    unit: "개",
    data: chartPatterns.map((pattern, index) => ({
      label: ["사선", "역사선", "교차 빗금", "점", "가로선", "세로선"][index],
      value: [120, 180, 150, 240, 210, 320][index],
      pattern,
    })),
  },
};
export const MonochromeDonut: Story = {
  name: "흑백 패턴 · 도넛",
  args: { ...Donut.args, monochrome: true },
};
export const MonochromeArc: Story = {
  name: "흑백 패턴 · 아크",
  args: { ...Arc.args, monochrome: true },
};

export const NegativeValues: Story = {
  name: "음수 · 0",
  args: {
    title: "월별 손익",
    description: "0 기준선 위아래로 손익을 표시합니다.",
    data: [
      { label: "1월", value: -80 },
      { label: "2월", value: 0 },
      { label: "3월", value: 120 },
    ],
  },
};
export const Empty: Story = {
  name: "빈 데이터",
  args: { data: [] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent(
      "표시할 데이터가 없습니다.",
    );
    await expect(canvas.queryByRole("img")).not.toBeInTheDocument();
  },
};
export const CustomEmpty: Story = {
  name: "빈 데이터 문구 변경",
  args: {
    data: [],
    emptyMessage: "선택한 기간의 매출 데이터가 없습니다.",
  },
};
export const ZeroValues: Story = {
  name: "모든 값이 0",
  args: {
    data: [
      { label: "1월", value: 0 },
      { label: "2월", value: 0 },
    ],
  },
};
export const SinglePoint: Story = {
  name: "단일 데이터",
  args: { type: "line", data: [{ label: "1월", value: 120 }] },
};
export const InvalidDonut: Story = {
  name: "도넛 음수 안내",
  args: {
    type: "donut",
    data: [
      { label: "손실", value: -20 },
      { label: "이익", value: 80 },
    ],
  },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("status")).toHaveTextContent(
      "도넛 차트에는 0 이상의 값이 필요합니다.",
    );
  },
};
export const Mobile: Story = {
  name: "좁은 너비",
  globals: { viewport: { value: "mobileSmall", isRotated: false } },
};

export const FocusedTooltip: Story = {
  name: "접근성 · 열린 툴팁",
  args: {
    ...Arc.args,
    title: "목표 달성 현황 상세",
    data: [
      { label: "완료한 업무와 검토를 마친 항목", value: 72 },
      { label: "아직 진행 중인 업무", value: 28 },
    ],
  },
  play: async ({ canvasElement }) => {
    await checkTooltips(canvasElement);
    within(canvasElement).getAllByRole("img")[0].focus();
    await waitFor(() =>
      expect(within(canvasElement).getByRole("tooltip")).toBeVisible(),
    );
  },
};

export const DarkTheme: Story = {
  ...FocusedTooltip,
  name: "접근성 · 다크 테마",
  globals: { theme: "dark" },
};

function RuntimeExample({
  type,
  monochrome = false,
}: {
  type: string;
  monochrome?: boolean;
}) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    return renderChart(host.current, {
      data: monthlyData,
      type,
      title: `${type} 공통 런타임`,
      unit: "만원",
      monochrome,
    });
  }, [type, monochrome]);
  return <div ref={host} data-runtime-chart={type} />;
}

export const GulpVueRuntime: Story = {
  name: "Gulp · Vue 공통 렌더링",
  render: () => (
    <div style={{ display: "grid", gap: 32 }}>
      {["bar", "line", "area", "donut", "arc"].map((type) => (
        <RuntimeExample key={type} type={type} />
      ))}
      {["bar", "donut", "arc"].map((type) => (
        <RuntimeExample key={`mono-${type}`} type={type} monochrome />
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    for (const host of canvasElement.querySelectorAll<HTMLElement>(
      "[data-runtime-chart]",
    )) {
      await waitFor(() =>
        expect(within(host).getAllByRole("img")).toHaveLength(6),
      );
      await checkTooltips(host);
    }
  },
};

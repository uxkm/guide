import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import ActualChartD3 from "../../react/src/components/data-display/ChartD3/ChartD3.jsx";
import { hiddenArgTypes } from "./shared/storyArgTypes";

const ChartD3 = ActualChartD3 as React.ComponentType<any>;
const monthlyData = [
  { label: "1월", value: 120 },
  { label: "2월", value: 180 },
  { label: "3월", value: 150 },
  { label: "4월", value: 240 },
  { label: "5월", value: 210 },
  { label: "6월", value: 320 },
];

async function checkBasics(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  await expect(canvas.getByRole("group")).toBeVisible();
  await expect(canvasElement.querySelector(".chart-d3_svg")).not.toBeNull();
  await userEvent.click(canvas.getByText("데이터 표 보기"));
  await expect(canvas.getByRole("table")).toBeVisible();
}

const meta = {
  title: "데이터 표시/ChartD3",
  component: ChartD3,
  play: async ({ canvasElement }) => checkBasics(canvasElement),
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
    description: "D3.js 기반 상반기 매출",
    unit: "만원",
    height: 320,
    color: "var(--chart-color, #2563eb)",
    showLegend: true,
    showGrid: true,
    emptyMessage: "표시할 데이터가 없습니다.",
  },
  argTypes: {
    ...hiddenArgTypes,
    data: {
      control: "object",
      description: "{ label: string, value: number, color?: string } 배열",
    },
    type: {
      control: "select",
      options: ["bar", "line", "area", "donut", "pie"],
      description: "차트 유형 (D3.js)",
    },
    title: { control: "text" },
    description: { control: "text" },
    unit: { control: "text" },
    height: { control: { type: "range", min: 200, max: 600, step: 20 } },
    color: { control: "color" },
    showLegend: { control: "boolean" },
    showGrid: { control: "boolean" },
    emptyMessage: { control: "text" },
    chartOptions: { control: "object", description: "D3 확장 옵션" },
  },
} satisfies Meta<typeof ChartD3>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Bar: Story = { name: "막대" };
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
      { label: "검색", value: 480, color: "var(--chart-series-1, #2563eb)" },
      {
        label: "직접 방문",
        value: 260,
        color: "var(--chart-series-2, #0d9488)",
      },
      { label: "소셜", value: 180, color: "var(--chart-series-3, #9333ea)" },
      { label: "기타", value: 80, color: "var(--chart-series-4, #c2410c)" },
    ],
  },
};
export const Pie: Story = {
  name: "파이",
  args: {
    type: "pie",
    title: "카테고리 비중",
    unit: "%",
    data: [
      { label: "제품 A", value: 40, color: "var(--chart-series-1, #2563eb)" },
      { label: "제품 B", value: 30, color: "var(--chart-series-2, #0d9488)" },
      { label: "제품 C", value: 20, color: "var(--chart-series-3, #9333ea)" },
      { label: "기타", value: 10, color: "var(--chart-series-4, #c2410c)" },
    ],
  },
};
export const Empty: Story = {
  name: "빈 데이터",
  args: { data: [] },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("표시할 데이터가 없습니다."),
    ).toBeVisible();
  },
};
export const CustomEmpty: Story = {
  name: "빈 데이터 안내 변경",
  args: {
    data: [],
    emptyMessage: "선택한 기간의 매출 데이터가 없습니다.",
  },
};

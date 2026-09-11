import { useEffect, useId, useRef, useState } from "react";
import ActualChart from "../../react/src/components/data-display/Chart/Chart.jsx";
import { renderChart } from "@uxkm/interactions/chart";
import { chartPatterns } from "@uxkm/interactions/chart-patterns";
import FrameworkTabs from "./shared/FrameworkTabs.jsx";
import { chartUsageExamples } from "./chartUsageExamples";

const Chart = ActualChart as React.ComponentType<any>;
const initialData = [
  { label: "검색", value: 480, color: "#2563eb", pattern: "diagonal" },
  { label: "직접 방문", value: 260, color: "#0d9488", pattern: "dots" },
  { label: "소셜", value: 180, color: "#9333ea", pattern: "crosshatch" },
  { label: "기타", value: 80, color: "#c2410c", pattern: "horizontal" },
];
const patternLabels = ["사선", "역사선", "교차 빗금", "점", "가로선", "세로선"];

function RuntimePreview({ options }: { options: Record<string, unknown> }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(
    () => (host.current ? renderChart(host.current, options) : undefined),
    [options],
  );
  return <div ref={host} />;
}

/** 선택한 값은 실제 미리보기와 네 프레임워크의 복사 가능한 코드에 동시에 반영됩니다. */
export default function ChartStylePlayground({
  runtime = false,
  showCode = true,
}: {
  runtime?: boolean;
  /** Docs에서는 Canvas 밖 형제 노드로 코드를 두고, 스토리 미리보기에서는 숨깁니다. */
  showCode?: boolean;
}) {
  const id = useId();
  const [type, setType] = useState("donut");
  const [displayStyle, setDisplayStyle] = useState("pattern");
  const [pattern, setPattern] = useState("auto");
  const [data, setData] = useState(initialData);
  const options = {
    type,
    displayStyle,
    pattern,
    data,
    title: "유입 경로",
    unit: "명",
    showLegend: true,
  };
  return (
    <>
      <div className="chart-style-playground">
        <fieldset className="chart-style-playground_controls">
          <legend>차트 스타일 설정</legend>
          <label>
            차트 유형
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="bar">막대</option>
              <option value="donut">도넛</option>
              <option value="arc">아크</option>
            </select>
          </label>
          <fieldset className="chart-style-playground_modes">
            <legend>표시 스타일</legend>
            {[
              ["color", "색상 채움"],
              ["pattern", "컬러 패턴"],
              ["monochrome", "흑백 패턴"],
            ].map(([value, label]) => (
              <label key={value}>
                <input
                  type="radio"
                  name={`${id}-style`}
                  value={value}
                  checked={displayStyle === value}
                  onChange={() => setDisplayStyle(value)}
                />
                {label}
              </label>
            ))}
          </fieldset>
          <label>
            패턴 종류
            <select
              value={pattern}
              disabled={displayStyle === "color"}
              onChange={(event) => setPattern(event.target.value)}
            >
              <option value="auto">항목마다 다르게</option>
              {chartPatterns.map((name, index) => (
                <option key={name} value={name}>
                  {patternLabels[index]}
                </option>
              ))}
            </select>
          </label>
          <fieldset
            className="chart-style-playground_colors"
            disabled={displayStyle === "monochrome"}
          >
            <legend>항목별 색상</legend>
            {data.map((item, index) => (
              <label key={item.label}>
                {item.label}
                <input
                  type="color"
                  value={item.color}
                  onChange={(event) =>
                    setData((current) =>
                      current.map((entry, i) =>
                        i === index
                          ? { ...entry, color: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
              </label>
            ))}
          </fieldset>
        </fieldset>
        {showCode ? (
          <p>
            선택한 스타일과 색상은 미리보기와 아래 코드에 바로 반영됩니다. 항목
            구분에는 라벨과 범례도 함께 사용하세요.
          </p>
        ) : null}
        {runtime ? <RuntimePreview options={options} /> : <Chart {...options} />}
      </div>
      {showCode ? (
        <FrameworkTabs
          examples={chartUsageExamples(options, "StylePlayground")}
        />
      ) : null}
    </>
  );
}

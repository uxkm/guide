import React from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Link from './Link.jsx';
import Tooltip from './Tooltip.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  tooltipClassColumns,
  tooltipClasses,
  tooltipPropColumns,
  tooltipProps,
  tooltipTokenColumns,
  tooltipTokens,
} from '@doc-data/tooltip-api';

const tooltipChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const tooltipChildren = [
  { name: 'triggerContent', description: '트리거 (Vue #trigger 슬롯)' },
  { name: 'children', description: '말풍선 내용 (content prop 대체, Vue default 슬롯)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 no-arrow · arrow-anchor · panel-align · arrow-target-align · offset-* · close-label은 noArrow · arrowAnchor · panelAlign · arrowTargetAlign · offsetTop 등으로 다룹니다. Vue `#trigger` 슬롯은 triggerContent prop입니다.',
    tables: [{ columns: tooltipPropColumns, rows: tooltipProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description: 'Vue 슬롯에 대응하는 React prop·children입니다.',
    tables: [{ columns: tooltipChildColumns, rows: tooltipChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: tooltipClassColumns, rows: tooltipClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: tooltipTokenColumns, rows: tooltipTokens, codeColumn: 'name' }],
  },
];

function stageDemo(children) {
  return <div className="tooltip_demo-stage">{children}</div>;
}

function tooltipDemo(children) {
  const render = () => stageDemo(children);
  return withDocsCanvasRender(render, render);
}

function stageRender(children) {
  const render = () => children;
  return withDocsCanvasRender(render, render);
}

const playgroundArgs = {
  content: '툴팁 텍스트',
  size: 'md',
  offset: 'md',
  open: true,
  inverse: false,
  noArrow: false,
  arrowAnchor: 'content',
  panelAlign: 'center',
  arrowTargetAlign: 'center',
  disabled: false,
  trigger: 'hover',
  interactive: true,
  closable: false,
  closeLabel: '닫기',
};

export default {
  title: 'Components/피드백/Tooltip',
  id: 'components-tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text', type: { name: 'string', summary: 'string' } },
    placement: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'left', 'right', 'start', 'end'],
      type: {
        name: 'enum',
        summary: "'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'",
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    offset: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'none' | 'sm' | 'md' | 'lg'" },
    },
    open: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    inverse: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    noArrow: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    arrowAnchor: {
      control: 'select',
      options: ['content', 'target', 'mixed'],
      type: { name: 'enum', summary: "'content' | 'target' | 'mixed'" },
    },
    panelAlign: {
      control: 'select',
      options: ['start', 'center', 'end'],
      type: { name: 'enum', summary: "'start' | 'center' | 'end'" },
    },
    arrowTargetAlign: {
      control: 'select',
      options: ['center', 'left', 'right', 'top', 'bottom'],
      type: { name: 'enum', summary: "'center' | 'left' | 'right' | 'top' | 'bottom'" },
    },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      type: { name: 'enum', summary: "'hover' | 'click'" },
    },
    interactive: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    closable: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    closeLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '호버·클릭으로 표시되는 Tooltip 말풍선 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <div className="tooltip_demo-stage">
      <Tooltip {...args} triggerContent={<Button label="툴팁" variant="outline" />} />
    </div>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'Tooltip과 triggerContent로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function BasicExample() {
  return (
    <Tooltip
      content="짧은 도움말 텍스트입니다."
      triggerContent={<Button variant="outline" label="마우스 오버" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <Tooltip
      content="짧은 도움말 텍스트입니다."
      triggerContent={<Button variant="outline" label="마우스 오버" />}
    />,
  ),
};

export const Slot = {
  name: '슬롯',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'content prop 대신 children으로 말풍선 텍스트를 넣을 수 있습니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function SlotExample() {
  return (
    <Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>
      짧은 도움말 텍스트입니다.
    </Tooltip>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>
      짧은 도움말 텍스트입니다.
    </Tooltip>,
  ),
};

export const Open = {
  name: '열린 상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function OpenExample() {
  return (
    <Tooltip
      open
      content="정적 데모용 열린 상태입니다."
      triggerContent={<Button variant="filled" color="primary" label="열림" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <Tooltip
      open
      content="정적 데모용 열린 상태입니다."
      triggerContent={<Button variant="filled" color="primary" label="열림" />}
    />,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function SizeExample() {
  return (
    <Tooltip
      size="sm"
      open
      content="작은 말풍선"
      triggerContent={<Button variant="ghost" size="sm" label="Small" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
      <Tooltip
        size="sm"
        open
        content="작은 말풍선"
        triggerContent={<Button variant="ghost" size="sm" label="Small" />}
      />
      <Tooltip
        open
        content="기본 크기 말풍선"
        triggerContent={<Button variant="ghost" label="Medium" />}
      />
      <Tooltip
        size="lg"
        open
        content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다."
        triggerContent={<Button variant="ghost" size="lg" label="Large" />}
      />
    </div>,
  ),
};

export const Offset = {
  name: '간격',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'offset prop(none · sm · md · lg)으로 전 방향 간격을, offsetTop 등으로 방향별 간격을 조절합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function OffsetExample() {
  return (
    <Tooltip
      offset="lg"
      open
      content="넓은 간격"
      triggerContent={<Button variant="ghost" size="sm" label="lg" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: stageRender(
    <div className="tooltip_demo-stage">
      <p className="form_field-hint" style={{ marginBottom: 'var(--space-md)' }}>
        전 방향 동일
      </p>
      <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
        <Tooltip
          offset="none"
          open
          content="간격 없음"
          triggerContent={<Button variant="ghost" size="sm" label="none" />}
        />
        <Tooltip
          offset="sm"
          open
          content="좁은 간격"
          triggerContent={<Button variant="ghost" size="sm" label="sm" />}
        />
        <Tooltip
          open
          content="기본 간격"
          triggerContent={<Button variant="ghost" size="sm" label="md" />}
        />
        <Tooltip
          offset="lg"
          open
          content="넓은 간격"
          triggerContent={<Button variant="ghost" size="sm" label="lg" />}
        />
      </div>
      <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>
        방향별 (offset-* · placement)
      </p>
      <div
        className="tooltip_demo-placement"
        style={{ minHeight: '12rem', padding: 0, border: 'none', background: 'transparent' }}
      >
        <div className="tooltip_demo-placement-cell-top">
          <Tooltip
            placement="top"
            offsetTop="lg"
            open
            content="위쪽 간격"
            triggerContent={<Button variant="ghost" size="sm" label="위" />}
          />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Tooltip
            placement="left"
            offsetLeft="lg"
            open
            content="왼쪽 간격"
            triggerContent={<Button variant="ghost" size="sm" label="왼쪽" />}
          />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Tooltip
            offsetBottom="lg"
            open
            content="아래쪽 간격"
            triggerContent={<Button variant="ghost" size="sm" label="아래" />}
          />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Tooltip
            placement="right"
            offsetRight="lg"
            open
            content="오른쪽 간격"
            triggerContent={<Button variant="ghost" size="sm" label="오른쪽" />}
          />
        </div>
      </div>
    </div>,
  ),
};

export const Inline = {
  name: '인라인',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다.',
      },
      source: {
        code: `import Link from '@uxkm/ui-react/components/Link.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function InlineExample() {
  return (
    <p>
      결제 시{' '}
      <Tooltip
        content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다."
        triggerContent={<Link label="에스크로" />}
      />{' '}
      서비스를 이용할 수 있습니다.
    </p>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <p>
      결제 시{' '}
      <Tooltip
        content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다."
        triggerContent={<Link label="에스크로" />}
      />{' '}
      서비스를 이용할 수 있습니다.
    </p>,
  ),
};

export const Trigger = {
  name: '트리거 유형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function TriggerExample() {
  return (
    <Tooltip
      content="버튼 트리거 예시입니다."
      triggerContent={<Button variant="filled" color="primary" label="Button" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <div className="tooltip_row">
      <Tooltip
        content="버튼 트리거 예시입니다."
        triggerContent={<Button variant="filled" color="primary" label="Button" />}
      />
      <Tooltip content="링크 스타일 트리거입니다." triggerContent={<Link label="Link 트리거" />} />
      <Tooltip
        content="아이콘 전용 트리거입니다."
        triggerContent={
          <Button variant="ghost" iconOnly ariaLabel="정보" iconBefore={<Icon name="info" />} />
        }
      />
    </div>,
  ),
};

export const Click = {
  name: '클릭 트리거',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'trigger="click"으로 클릭 시 말풍선을 토글합니다. 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function ClickExample() {
  return (
    <Tooltip
      trigger="click"
      content="클릭으로 열고 닫는 Tooltip입니다."
      triggerContent={<Button variant="outline" label="클릭하여 보기" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <Tooltip
      trigger="click"
      content="클릭으로 열고 닫는 Tooltip입니다."
      triggerContent={<Button variant="outline" label="클릭하여 보기" />}
    />,
  ),
};

export const Placement = {
  name: '배치',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'placement prop으로 말풍선 위치를 조정합니다. 기본은 트리거 아래·가운데 정렬입니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function PlacementExample() {
  return (
    <Tooltip
      placement="top"
      content="트리거 위"
      triggerContent={<Button variant="outline" size="sm" label="위" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: stageRender(
    <div className="tooltip_demo-stage">
      <div className="tooltip_demo-placement">
        <div className="tooltip_demo-placement-cell-top">
          <Tooltip
            placement="top"
            content="트리거 위"
            triggerContent={<Button variant="outline" size="sm" label="위" />}
          />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Tooltip
            placement="left"
            content="트리거 왼쪽"
            triggerContent={<Button variant="outline" size="sm" label="왼쪽" />}
          />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Tooltip
            content="트리거 아래 · 가운데"
            triggerContent={<Button variant="outline" size="sm" label="아래" />}
          />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Tooltip
            placement="right"
            content="트리거 오른쪽"
            triggerContent={<Button variant="outline" size="sm" label="오른쪽" />}
          />
        </div>
      </div>
      <div
        className="tooltip_row"
        style={{
          width: '100%',
          justifyContent: 'space-between',
          marginTop: 'var(--space-xl)',
        }}
      >
        <Tooltip
          placement="top-start"
          content="위쪽 왼쪽 정렬"
          triggerContent={<Button variant="ghost" label="위 · 왼쪽" />}
        />
        <Tooltip
          placement="start"
          content="아래쪽 왼쪽 정렬"
          triggerContent={<Button variant="ghost" label="아래 · 왼쪽" />}
        />
        <Tooltip
          placement="end"
          content="아래쪽 오른쪽 정렬"
          triggerContent={<Button variant="ghost" label="아래 · 오른쪽" />}
        />
      </div>
    </div>,
  ),
};

export const Inverse = {
  name: '역색',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'inverse prop으로 어두운 배경의 말풍선을 표시합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function InverseExample() {
  return (
    <Tooltip
      inverse
      content="어두운 배경의 말풍선입니다."
      triggerContent={<Button variant="ghost" label="역색 Tooltip" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <Tooltip
      inverse
      content="어두운 배경의 말풍선입니다."
      triggerContent={<Button variant="ghost" label="역색 Tooltip" />}
    />,
  ),
};

export const Disabled = {
  name: '비활성 트리거',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '비활성 버튼은 래퍼에 tabindex를 주어 pointer-events가 막힌 요소에도 설명을 제공합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function DisabledExample() {
  return (
    <Tooltip
      content="필수 항목을 모두 입력해야 제출할 수 있습니다."
      triggerContent={
        <span tabIndex={0}>
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>
      }
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <Tooltip
      content="필수 항목을 모두 입력해야 제출할 수 있습니다."
      triggerContent={
        <span tabIndex={0}>
          <Button variant="filled" color="primary" label="제출 불가" disabled />
        </span>
      }
    />,
  ),
};

export const ArrowAnchor = {
  name: '화살표 기준',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'arrowAnchor(content · target · mixed)와 panelAlign, arrowTargetAlign으로 말풍선·화살표를 독립 조합합니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function ArrowAnchorExample() {
  return (
    <Tooltip
      open
      arrowAnchor="target"
      content="화살표가 트리거 중앙을 가리킵니다."
      triggerContent={<Button variant="ghost" size="sm" label="S" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: stageRender(
    <div className="tooltip_demo-stage">
      <p className="form_field-hint" style={{ marginBottom: 'var(--space-md)' }}>
        기준 비교
      </p>
      <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
        <Tooltip
          open
          content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
        <Tooltip
          open
          arrowAnchor="target"
          content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
      </div>
      <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>
        target — 좌 · 가운데 · 우
      </p>
      <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
        <Tooltip
          open
          arrowAnchor="target"
          arrowTargetAlign="left"
          content="트리거 왼쪽을 가리킵니다."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
        <Tooltip
          open
          arrowAnchor="target"
          content="트리거 가운데를 가리킵니다."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
        <Tooltip
          open
          arrowAnchor="target"
          arrowTargetAlign="right"
          content="트리거 오른쪽을 가리킵니다."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
      </div>
      <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>
        mixed — 말풍선 가운데 · 화살표 조합
      </p>
      <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
        <Tooltip
          open
          arrowAnchor="mixed"
          panelAlign="center"
          arrowTargetAlign="left"
          content="말풍선 가운데, 화살표 왼쪽."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
        <Tooltip
          open
          arrowAnchor="mixed"
          panelAlign="center"
          content="말풍선·화살표 모두 가운데."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
        <Tooltip
          open
          arrowAnchor="mixed"
          panelAlign="center"
          arrowTargetAlign="right"
          content="말풍선 가운데, 화살표 오른쪽."
          triggerContent={<Button variant="ghost" size="sm" label="S" />}
        />
      </div>
    </div>,
  ),
};

export const NoArrow = {
  name: '화살표 없음',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'noArrow prop으로 tooltip_arrow를 숨깁니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Tooltip from '@uxkm/ui-react/components/Tooltip.jsx';

export function NoArrowExample() {
  return (
    <Tooltip
      noArrow
      content="화살표가 표시되지 않는 말풍선입니다."
      triggerContent={<Button variant="ghost" label="화살표 없음" />}
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: tooltipDemo(
    <Tooltip
      noArrow
      content="화살표가 표시되지 않는 말풍선입니다."
      triggerContent={<Button variant="ghost" label="화살표 없음" />}
    />,
  ),
};

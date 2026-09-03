import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualTooltip from '../../react/src/components/feedback/Tooltip/Tooltip.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualLink from '../../react/src/components/basic/Link/Link.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import {
  arrowAnchorArg,
  arrowTargetAlignArg,
  booleanControlArg,
  floatingUiHiddenArgTypes,
  floatingUiVisualKey,
  offsetArg,
  offsetSideArg,
  panelAlignArg,
  stringControlArg,
} from './shared/storyArgTypes';

const Tooltip = ActualTooltip as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Link = ActualLink as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;

function Demo({
  label = '마우스 오버',
  initialOpen = false,
  open: controlledOpen,
  onOpenChange,
  triggerContent,
  content = '짧은 도움말 텍스트입니다.',
  buttonProps,
  children,
  ...props
}: any) {
  const [internalOpen, setInternalOpen] = useState(initialOpen);
  const open = controlledOpen ?? internalOpen;
  const setOpen = (next: boolean) => {
    if (controlledOpen === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };
  return (
    <Tooltip
      {...props}
      content={content}
      open={open}
      onOpenChange={setOpen}
      triggerContent={triggerContent ?? <Button variant="outline" label={label} {...buttonProps} />}
    >
      {children}
    </Tooltip>
  );
}

function TooltipPlayground({
  args,
  updateArgs,
}: {
  args: Record<string, unknown>;
  updateArgs?: (patch: Record<string, unknown>) => void;
}) {
  const props = tooltipPropsFromArgs(args);
  const visualKey = floatingUiVisualKey(props);
  const argsOpen = args.open === true;
  const [open, setOpen] = useState(argsOpen);

  useEffect(() => {
    setOpen(argsOpen);
  }, [argsOpen]);

  useEffect(() => {
    setOpen(true);
    updateArgs?.({ open: true });
  }, [visualKey]);

  const setOpenState = (next: boolean) => {
    setOpen(next);
    updateArgs?.({ open: next });
  };

  return (
    <div className="tooltip_demo-stage">
      <Demo key={visualKey} {...props} open={open} onOpenChange={setOpenState} label="Playground" />
    </div>
  );
}

type TooltipStoryArgs = {
  open?: boolean;
  placement?: string;
  size?: 'sm' | 'md' | 'lg';
  trigger?: 'hover' | 'click';
  content?: string;
  offset?: string;
  offsetTop?: string;
  offsetRight?: string;
  offsetBottom?: string;
  offsetLeft?: string;
  arrowAnchor?: string;
  panelAlign?: string;
  arrowTargetAlign?: string;
  inverse?: boolean;
  noArrow?: boolean;
  closable?: boolean;
  disabled?: boolean;
};

function tooltipPropsFromArgs(args: Record<string, unknown>) {
  return {
    placement: args.placement,
    size: args.size,
    trigger: args.trigger,
    content: typeof args.content === 'string' ? args.content : undefined,
    offset: args.offset,
    offsetTop: args.offsetTop,
    offsetRight: args.offsetRight,
    offsetBottom: args.offsetBottom,
    offsetLeft: args.offsetLeft,
    arrowAnchor: args.arrowAnchor,
    panelAlign: args.panelAlign,
    arrowTargetAlign: args.arrowTargetAlign,
    inverse: args.inverse === true,
    noArrow: args.noArrow === true,
    closable: typeof args.closable === 'boolean' ? args.closable : undefined,
    disabled: args.disabled === true,
  };
}

const tooltipControlKeys = [
  'open',
  'placement',
  'size',
  'trigger',
  'content',
  'offset',
  'offsetTop',
  'offsetRight',
  'offsetBottom',
  'offsetLeft',
  'arrowAnchor',
  'panelAlign',
  'arrowTargetAlign',
  'inverse',
  'noArrow',
  'closable',
  'disabled',
] as const;

const meta = {
  title: '피드백/Tooltip',
  component: Tooltip,
  decorators: [(Story) => <div className="tooltip-story-demo"><Story /></div>],
  parameters: {
    layout: 'padded',
    controls: { include: [...tooltipControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    placement: 'top',
    size: 'md',
    trigger: 'click',
    content: 'Controls로 속성을 조절해 보세요.',
    open: true,
    offset: 'md',
    arrowAnchor: 'content',
    panelAlign: 'center',
    arrowTargetAlign: 'center',
    inverse: false,
    noArrow: false,
    closable: false,
    disabled: false,
  },
  argTypes: {
    ...floatingUiHiddenArgTypes,
    placement: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'left', 'right', 'start', 'end'],
      type: 'string',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      type: 'string',
    },
    content: stringControlArg,
    open: booleanControlArg,
    inverse: booleanControlArg,
    offset: offsetArg,
    offsetTop: offsetSideArg,
    offsetRight: offsetSideArg,
    offsetBottom: offsetSideArg,
    offsetLeft: offsetSideArg,
    arrowAnchor: arrowAnchorArg,
    panelAlign: panelAlignArg,
    arrowTargetAlign: arrowTargetAlignArg,
    noArrow: booleanControlArg,
    closable: booleanControlArg,
    disabled: booleanControlArg,
  },
} satisfies Meta<TooltipStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args, { updateArgs }) => <TooltipPlayground args={args} updateArgs={updateArgs} />,
};

export const Basic: Story = {
  name: '기본',
  render: () => (
    <div className="tooltip_demo-stage">
      <Demo />
    </div>
  ),
};
export const Slot: Story = {
  name: '슬롯',
  render: () => (
    <div className="tooltip_demo-stage">
      <Demo label="슬롯 예시" content={undefined}>
        짧은 도움말 텍스트입니다.
      </Demo>
    </div>
  ),
};
export const Open: Story = {
  name: '열린 상태',
  render: () => (
    <div className="tooltip_demo-stage">
      <Demo initialOpen label="열림" content="정적 데모용 열린 상태입니다." buttonProps={{ variant: 'filled', color: 'primary' }} />
    </div>
  ),
};
export const Size: Story = {
  name: '크기',
  render: () => (
    <div className="tooltip_demo-stage">
      <div className="tooltip_row">
        <Demo size="sm" label="Small" content="작은 말풍선" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        <Demo label="Medium" content="기본 크기 말풍선" buttonProps={{ variant: 'ghost' }} />
        <Demo size="lg" label="Large" content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다." buttonProps={{ variant: 'ghost', size: 'lg' }} />
      </div>
    </div>
  ),
};
export const Offset: Story = {
  name: '간격',
  render: () => (
    <div className="tooltip_demo-stage">
      <p className="form_field-hint">전 방향 동일</p>
      <div className="tooltip_row">
        <Demo offset="none" label="none" content="간격 없음" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        <Demo offset="sm" label="sm" content="좁은 간격" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        <Demo label="md" content="기본 간격" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        <Demo offset="lg" label="lg" content="넓은 간격" buttonProps={{ variant: 'ghost', size: 'sm' }} />
      </div>
      <p className="form_field-hint" style={{ marginTop: 'var(--space-lg)' }}>
        방향별 (offset-* · placement)
      </p>
      <div className="tooltip_demo-placement" style={{ minHeight: '12rem', padding: 0 }}>
        <div className="tooltip_demo-placement-cell-top">
          <Demo placement="top" offsetTop="lg" label="위" content="위쪽 간격" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Demo placement="left" offsetLeft="lg" label="왼쪽" content="왼쪽 간격" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Demo offsetBottom="lg" label="아래" content="아래쪽 간격" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Demo placement="right" offsetRight="lg" label="오른쪽" content="오른쪽 간격" buttonProps={{ variant: 'ghost', size: 'sm' }} />
        </div>
      </div>
    </div>
  ),
};
export const Inline: Story = {
  name: '인라인',
  render: () => (
    <div className="tooltip_demo-stage">
      <p>
        결제 시{' '}
        <Demo
          content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다."
          triggerContent={<Link label="에스크로" />}
        />{' '}
        서비스를 이용할 수 있습니다.
      </p>
    </div>
  ),
};
export const Trigger: Story = {
  name: '트리거 유형',
  render: () => (
    <div className="tooltip_demo-stage">
      <div className="tooltip_row">
        <Demo content="버튼 트리거 예시입니다." label="Button" buttonProps={{ variant: 'filled', color: 'primary' }} />
        <Demo content="링크 스타일 트리거입니다." triggerContent={<Link label="Link 트리거" />} />
        <Demo
          content="아이콘 전용 트리거입니다."
          triggerContent={<Button variant="ghost" iconOnly ariaLabel="정보" iconBefore={<Icon name="info" />} />}
        />
      </div>
    </div>
  ),
};
export const Click: Story = {
  name: '클릭 트리거',
  render: () => (
    <div className="tooltip_demo-stage">
      <Demo trigger="click" label="클릭하여 보기" content="클릭으로 열고 닫는 Tooltip입니다." />
    </div>
  ),
};
export const Placement: Story = {
  name: '배치',
  render: () => (
    <div className="tooltip_demo-stage">
      <div className="tooltip_demo-placement">
        <div className="tooltip_demo-placement-cell-top">
          <Demo placement="top" label="위" content="트리거 위" buttonProps={{ size: 'sm' }} />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Demo placement="left" label="왼쪽" content="트리거 왼쪽" buttonProps={{ size: 'sm' }} />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Demo label="아래" content="트리거 아래 · 가운데" buttonProps={{ size: 'sm' }} />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Demo placement="right" label="오른쪽" content="트리거 오른쪽" buttonProps={{ size: 'sm' }} />
        </div>
      </div>
      <div className="tooltip_row" style={{ width: '100%', justifyContent: 'space-between', marginTop: 'var(--space-xl)' }}>
        <Demo placement="top-start" label="위 · 왼쪽" content="위쪽 왼쪽 정렬" buttonProps={{ variant: 'ghost' }} />
        <Demo placement="start" label="아래 · 왼쪽" content="아래쪽 왼쪽 정렬" buttonProps={{ variant: 'ghost' }} />
        <Demo placement="end" label="아래 · 오른쪽" content="아래쪽 오른쪽 정렬" buttonProps={{ variant: 'ghost' }} />
      </div>
    </div>
  ),
};
export const Inverse: Story = {
  name: '역색',
  render: () => (
    <div className="tooltip_demo-stage">
      <Demo inverse label="역색 Tooltip" content="어두운 배경의 말풍선입니다." buttonProps={{ variant: 'ghost' }} />
    </div>
  ),
};
export const Disabled: Story = {
  name: '비활성 트리거',
  render: () => (
    <div className="tooltip_demo-stage">
      <Demo
        content="필수 항목을 모두 입력해야 제출할 수 있습니다."
        triggerContent={
          <span tabIndex={0}>
            <Button variant="filled" color="primary" label="제출 불가" disabled />
          </span>
        }
      />
    </div>
  ),
};

const ArrowDemo = ({ panelAlign = 'center', arrowTargetAlign = 'center', arrowAnchor = 'mixed', content }: any) => (
  <Demo arrowAnchor={arrowAnchor} panelAlign={panelAlign} arrowTargetAlign={arrowTargetAlign} content={content} label="S" buttonProps={{ variant: 'ghost', size: 'sm' }} />
);
const MixedRow = ({ align, title }: any) => (
  <>
    <p className="form_field-hint" style={{ marginTop: 'var(--space-lg)' }}>
      mixed — 말풍선 {title} · 화살표 조합
    </p>
    <div className="tooltip_row">
      <ArrowDemo panelAlign={align} arrowTargetAlign="left" content={`말풍선 ${title}, 화살표 왼쪽.`} />
      <ArrowDemo panelAlign={align} content={`말풍선 ${title}, 화살표 가운데.`} />
      <ArrowDemo panelAlign={align} arrowTargetAlign="right" content={`말풍선 ${title}, 화살표 오른쪽.`} />
    </div>
  </>
);
export const ArrowAnchor: Story = {
  name: '화살표 기준',
  render: () => (
    <div className="tooltip_demo-stage">
      <p className="form_field-hint">기준 비교</p>
      <div className="tooltip_row">
        <ArrowDemo arrowAnchor="content" content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다." />
        <ArrowDemo arrowAnchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다." />
      </div>
      <p className="form_field-hint" style={{ marginTop: 'var(--space-lg)' }}>
        target — 좌 · 가운데 · 우
      </p>
      <div className="tooltip_row">
        <ArrowDemo arrowAnchor="target" arrowTargetAlign="left" content="트리거 왼쪽을 가리킵니다." />
        <ArrowDemo arrowAnchor="target" content="트리거 가운데를 가리킵니다." />
        <ArrowDemo arrowAnchor="target" arrowTargetAlign="right" content="트리거 오른쪽을 가리킵니다." />
      </div>
      <MixedRow align="center" title="가운데" />
      <MixedRow align="start" title="왼쪽" />
      <MixedRow align="end" title="오른쪽" />
    </div>
  ),
};
export const NoArrow: Story = {
  name: '화살표 없음',
  render: () => (
    <div className="tooltip_demo-stage">
      <Demo noArrow label="화살표 없음" content="화살표가 표시되지 않는 말풍선입니다." buttonProps={{ variant: 'ghost' }} />
    </div>
  ),
};

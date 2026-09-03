import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';

import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualDivider from '../../react/src/components/layout/Divider/Divider.jsx';
import ActualSpace from '../../react/src/components/layout/Space/Space.jsx';

const Button = ActualButton as React.ComponentType<any>;
const Divider = ActualDivider as React.ComponentType<any>;
const Space = ActualSpace as React.ComponentType<any>;

type SpaceArgs = React.ComponentProps<typeof Space>;

const GAP_LABELS: Record<string, string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const meta = {
  title: '레이아웃/Space',
  component: Space,
  parameters: { layout: 'fullscreen' },
  args: {
    as: 'div',
    gap: 'md',
    vertical: false,
    wrap: false,
    block: false,
    align: '',
    justify: '',
    className: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    as: {
      control: 'select',
      options: ['div', 'section', 'main', 'article', 'aside', 'header', 'footer', 'nav'],
      description: '루트 요소',
    },
    gap: {
      control: 'select',
      options: ['', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: '자식 사이 간격',
    },
    size: {
      control: 'select',
      options: ['', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'gap의 이전 호환 이름',
    },
    vertical: {
      control: 'boolean',
      description: '세로 배치',
    },
    wrap: {
      control: 'boolean',
      description: '줄바꿈 허용',
    },
    block: {
      control: 'boolean',
      description: '부모 너비를 채우는 block flex',
    },
    align: {
      control: 'select',
      options: ['', 'start', 'center', 'end', 'baseline', 'stretch'],
      description: '교차축 정렬',
    },
    justify: {
      control: 'select',
      options: ['', 'start', 'center', 'end', 'between'],
      description: '주축 정렬',
    },
    className: {
      control: 'text',
      description: '사용자 정의 클래스',
    },
    children: {
      table: { disable: true },
      description: '자식 콘텐츠',
    },
    style: { table: { disable: true } },
  },
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const boxes = (label = '항목') =>
  [1, 2, 3].map((number) => (
    <div className="space_demo-box" key={number}>
      {label} {number}
    </div>
  ));

const resolvedGap = (args: SpaceArgs) => args.gap || 'md';

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Demo>
      <Space {...args}>{boxes()}</Space>
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: (args) => (
    <Demo>
      <Space {...args}>{boxes()}</Space>
    </Demo>
  ),
};

export const Vertical: Story = {
  name: '세로',
  args: { vertical: true },
  render: (args) => (
    <Demo>
      <Space {...args} vertical>
        {boxes(args.vertical ? '세로 · Controls 적용 중' : '항목')}
      </Space>
    </Demo>
  ),
};

export const Gap: Story = {
  name: '간격',
  args: { gap: 'sm' },
  render: (args) => (
    <Demo>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
        <Space key={gap} {...args} gap={gap}>
          {boxes(`${GAP_LABELS[gap]}${resolvedGap(args) === gap ? ' · Controls 적용 중' : ''}`)}
        </Space>
      ))}
    </Demo>
  ),
};

export const Wrap: Story = {
  name: '줄바꿈',
  args: { block: true, wrap: true },
  render: (args) => (
    <Demo>
      <Space {...args} block wrap>
        {[1, 2, 3, 4, 5].map((number) => (
          <div className="space_demo-box" style={{ minWidth: '8rem' }} key={number}>
            항목 {number}
            {args.wrap && args.block ? ' · Controls 적용 중' : ''}
          </div>
        ))}
      </Space>
    </Demo>
  ),
};

export const Align: Story = {
  name: '정렬',
  args: { block: true, align: 'center' },
  render: (args) => (
    <Demo>
      <Space
        {...args}
        block
        align="center"
        style={{
          minHeight: '5rem',
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">
          align center{args.align === 'center' ? ' · Controls 적용 중' : ''}
        </div>
        <div className="space_demo-box" style={{ paddingBlock: 'var(--space-xl)' }}>
          높이 다름
        </div>
        <div className="space_demo-box">align center</div>
      </Space>
      <Space
        {...args}
        block
        justify="between"
        style={{
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-md)',
        }}
      >
        <div className="space_demo-box">
          justify between{args.justify === 'between' ? ' · Controls 적용 중' : ''}
        </div>
        <div className="space_demo-box">양 끝</div>
      </Space>
    </Demo>
  ),
};

export const Combo: Story = {
  name: '조합 예시',
  render: (args) => (
    <Demo>
      <Space {...args}>
        <Button variant="outline" label="취소" />
        <Button variant="filled" color="primary" label="저장" />
        <Divider vertical />
        <Button variant="text" label="더보기" />
      </Space>
    </Demo>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';
import ActualSkeleton from '../../react/src/components/feedback/Skeleton/Skeleton.jsx';

const Skeleton = ActualSkeleton as React.ComponentType<any>;

const meta = {
  title: '피드백/Skeleton',
  component: Skeleton,
  decorators: [(Story) => <div className="skeleton-story-demo"><Story /></div>],
  parameters: { layout: 'padded' },
  args: {
    active: true,
    avatar: false,
    paragraph: 3,
    round: false,
    ariaLabel: '콘텐츠 로딩 중',
  },
  argTypes: {
    ...hiddenArgTypes,
    active: { control: 'boolean' },
    avatar: { control: 'boolean' },
    paragraph: { control: 'number' },
    round: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <div className="skeleton-content-demo"><Skeleton {...args} /></div>,
};

export const Basic: Story = {
  name: '기본',
  render: (args) => <div className="skeleton-content-demo"><Skeleton {...args} paragraph={3} /></div>,
};

export const Shape: Story = {
  name: '형태',
  render: (args) => (
    <div className="skeleton-shape-demo">
      <Skeleton {...args} avatar paragraph={0} />
      <Skeleton round />
    </div>
  ),
};

export const CardDemo: Story = {
  name: '카드',
  render: (args) => (
    <div className="card card_shadow skeleton-card-demo" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
      <div className="card_body">
        <Skeleton {...args} paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row skeleton-card-actions">
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span className="skeleton skeleton_button skeleton-card-button-short" aria-hidden="true" />
          </div>
        </Skeleton>
      </div>
    </div>
  ),
};

export const Static: Story = {
  name: '정적',
  render: (args) => <div className="skeleton-content-demo"><Skeleton {...args} active={false} paragraph={3} /></div>,
};

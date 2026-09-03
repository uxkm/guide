import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';

import ActualContainer from '../../react/src/components/layout/Container/Container.jsx';

const Container = ActualContainer as React.ComponentType<any>;

const SIZE_LABELS: Record<string, string> = {
  '': '기본 · 72rem',
  sm: 'Small · 36rem',
  md: 'Medium · 48rem',
  lg: 'Large · 64rem',
  xl: 'Extra Large · 80rem',
};

const meta = {
  title: '레이아웃/Container',
  component: Container,
  parameters: { layout: 'fullscreen' },
  args: {
    as: 'div',
    size: '',
    fluid: false,
    className: '',
    children: 'Container',
  },
  argTypes: {
    ...hiddenArgTypes,
    as: {
      control: 'select',
      options: ['div', 'section', 'main', 'article', 'aside', 'header', 'footer', 'nav'],
      description: 'Container의 루트 요소',
    },
    size: {
      control: 'select',
      options: ['', 'sm', 'md', 'lg', 'xl'],
      description: '최대 너비 단계',
    },
    fluid: {
      control: 'boolean',
      description: '최대 너비 제한 해제',
    },
    children: {
      control: 'text',
      description: 'Container 내부 콘텐츠',
    },
    className: {
      control: 'text',
      description: '사용자 정의 클래스',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Fill = ({ children }: { children: React.ReactNode }) => <div className="container_demo-fill">{children}</div>;

const renderWithFill = (args: React.ComponentProps<typeof Container>) => (
  <Demo>
    <Container {...args}>
      <Fill>{args.children}</Fill>
    </Container>
  </Demo>
);

export const Playground: Story = {
  name: 'Playground',
  args: { children: 'Controls로 속성을 조절해 보세요.' },
  render: (args) => renderWithFill(args),
};

export const Basic: Story = {
  name: '기본',
  args: { children: '기본 Container · 최대 72rem' },
  render: (args) => renderWithFill(args),
};

export const Sizes: Story = {
  name: '최대 너비',
  args: { size: 'sm', children: 'Controls에서 size를 변경해 보세요.' },
  render: (args) => (
    <Demo>
      <div className="container_demo-sizes">
        {(['', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Container
            key={size || 'default'}
            as={args.as}
            size={size}
            fluid={args.fluid}
            className={args.className}
          >
            <Fill>
              {SIZE_LABELS[size]}
              {args.size === size ? ' · Controls 적용 중' : ''}
            </Fill>
          </Container>
        ))}
      </div>
    </Demo>
  ),
};

export const Fluid: Story = {
  name: 'Fluid',
  args: { fluid: true, children: 'Fluid · 최대 너비 제한 없음' },
  render: (args) => renderWithFill(args),
};

export const SemanticRoot: Story = {
  name: '시맨틱 루트',
  args: { as: 'main', size: 'lg', children: 'main 요소로 렌더링' },
  render: (args) => renderWithFill(args),
};

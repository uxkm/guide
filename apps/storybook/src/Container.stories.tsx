import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualContainer from '../../react/src/components/layout/Container/Container.jsx';

const Container = ActualContainer as React.ComponentType<any>;

const meta = {
  title: '레이아웃/Container',
  component: Container,
  parameters: { layout: 'fullscreen' },
  args: { size: '', fluid: false }
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Fill = ({ children }: { children: React.ReactNode }) => <div className="container_demo-fill">{children}</div>;

export const Basic: Story = {
  name: '기본',
  render: () => <Demo><Container><Fill>기본 Container · 최대 72rem</Fill></Container></Demo>
};

export const Sizes: Story = {
  name: '최대 너비',
  render: () => <Demo><div className="container_demo-sizes">
    <Container size="sm"><Fill>Small · 36rem</Fill></Container>
    <Container size="md"><Fill>Medium · 48rem</Fill></Container>
    <Container size="lg"><Fill>Large · 64rem</Fill></Container>
    <Container size="xl"><Fill>Extra Large · 80rem</Fill></Container>
  </div></Demo>
};

export const Fluid: Story = {
  name: 'Fluid',
  render: () => <Demo><Container fluid><Fill>Fluid · 최대 너비 제한 없음</Fill></Container></Demo>
};

export const SemanticRoot: Story = {
  name: '시맨틱 루트',
  render: () => <Demo><Container as="main" size="lg"><Fill>main 요소로 렌더링</Fill></Container></Demo>
};

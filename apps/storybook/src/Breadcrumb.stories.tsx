import { useState } from 'react';
import { hiddenArgTypes } from './shared/storyArgTypes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualBreadcrumb from '../../react/src/components/navigation/Breadcrumb/Breadcrumb.jsx';
import ActualBreadcrumbItem from '../../react/src/components/navigation/Breadcrumb/BreadcrumbItem.jsx';
import ActualBreadcrumbEllipsis from '../../react/src/components/navigation/Breadcrumb/BreadcrumbEllipsis.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Breadcrumb = ActualBreadcrumb as React.ComponentType<any>;
const BreadcrumbItem = ActualBreadcrumbItem as React.ComponentType<any>;
const BreadcrumbEllipsis = ActualBreadcrumbEllipsis as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const Stack = ({ children }: any) => <div className="breadcrumb-stack-demo">{children}</div>;
const items = (last: string) => [{ label: '홈', href: '#' }, { label: '가이드', href: '#' }, { label: last, current: true }];

function EllipsisExample() {
  const [expanded, setExpanded] = useState(false);
  return <Breadcrumb ariaLabel="긴 경로"><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem>{expanded && <><BreadcrumbItem label="제품" href="#" /><BreadcrumbItem label="디자인 시스템" href="#" /></>}<BreadcrumbEllipsis expanded={expanded} label={expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기'} onClick={() => setExpanded((open) => !open)} /><BreadcrumbItem label="컴포넌트" href="#" /><BreadcrumbItem label="Breadcrumb" current /></Breadcrumb>;
}

const meta = {
  title: '네비게이션/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem, BreadcrumbEllipsis },
  decorators: [(Story) => <div className="breadcrumb-story-demo"><Story /></div>],
  parameters: { layout: 'padded' },
  args: { separator: 'chevron', size: 'md', ariaLabel: '경로' },
  argTypes: {
    ...hiddenArgTypes,
    separator: { control: 'select', options: ['chevron', 'slash', 'dot'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    ariaLabel: { control: 'text' },
  },
} satisfies Meta<typeof Breadcrumb>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Breadcrumb
      {...args}
      items={[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]}
    />
  ),
};

export const Basic: Story = { name: '기본', render: (args) => <Breadcrumb {...args} items={[{ label: '홈', href: '#' }, { label: '컴포넌트', href: '#' }, { label: 'Breadcrumb', current: true }]} /> };
export const Separator: Story = { name: '구분자', render: (args) => <Stack><Breadcrumb ariaLabel="경로 — chevron" items={items('Chevron')} /><Breadcrumb separator="slash" ariaLabel="경로 — slash" items={items('Slash')} /><Breadcrumb separator="dot" ariaLabel="경로 — dot" items={items('Dot')} /></Stack> };
export const IconDemo: Story = { name: '홈 아이콘', render: (args) => <Breadcrumb><BreadcrumbItem href="#" icon ariaLabel="홈"><Icon name="home" className="breadcrumb_icon" /></BreadcrumbItem><BreadcrumbItem label="설정" href="#" /><BreadcrumbItem label="계정" href="#" /><BreadcrumbItem label="프로필" current /></Breadcrumb> };
export const Size: Story = { name: '크기', render: (args) => <Stack><Breadcrumb size="sm" ariaLabel="경로 — small" items={items('Small')} /><Breadcrumb ariaLabel="경로 — medium" items={items('Medium')} /><Breadcrumb size="lg" ariaLabel="경로 — large" items={items('Large')} /></Stack> };
export const Ellipsis: Story = { name: '경로 생략', render: (args) => <EllipsisExample /> };
export const State: Story = { name: '상태', render: (args) => <Stack><Breadcrumb ariaLabel="경로 — 비활성"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="삭제된 페이지" disabled /><BreadcrumbItem label="현재 페이지" current /></Breadcrumb><Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블"><BreadcrumbItem label="홈" href="#" /><BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" /><BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current /></Breadcrumb></Stack> };

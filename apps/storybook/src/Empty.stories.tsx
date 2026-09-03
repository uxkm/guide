import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';
import ActualEmpty from '../../react/src/components/feedback/Empty/Empty.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import ActualCard, { CardBody as ActualCardBody } from '../../react/src/components/data-display/Card/Card.jsx';

const Empty = ActualEmpty as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const Card = ActualCard as React.ComponentType<any>;
const CardBody = ActualCardBody as React.ComponentType<any>;

const meta = {
  title: '피드백/Empty',
  component: Empty,
  decorators: [(Story) => <div className="empty-story-demo"><Story /></div>],
  parameters: { layout: 'padded' },
  args: {
    description: '데이터가 없습니다',
    size: 'md',
    simple: false,
    block: false,
  },
  argTypes: {
    ...hiddenArgTypes,
    description: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    simple: { control: 'boolean' },
    block: { control: 'boolean' },
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <Empty {...args} />,
};

export const Basic: Story = {
  name: '기본',
  render: (args) => <Empty {...args} description="데이터가 없습니다" />,
};

export const Footer: Story = {
  name: '액션',
  render: (args) => (
    <Empty
      {...args}
      description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."
      footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />}
    />
  ),
};

export const Custom: Story = {
  name: '커스텀 슬롯',
  render: (args) => (
    <Empty {...args} icon={<Icon name="search" />} description={undefined}>
      <strong>검색 결과가 없습니다</strong>
      <span>다른 키워드로 다시 검색해 보세요.</span>
    </Empty>
  ),
};

export const Size: Story = {
  name: '크기',
  render: (args) => (
    <div className="empty-size-demo">
      <Empty {...args} size="sm" description="Small" />
      <Empty description="Medium (기본)" />
      <Empty size="lg" description="Large" />
    </div>
  ),
};

export const Simple: Story = {
  name: '설명만',
  render: (args) => <Empty {...args} simple size="sm" description="일정 없음" />,
};

export const Block: Story = {
  name: '블록 · 컨테이너',
  render: (args) => (
    <div className="empty-block-demo">
      <Card title="알림 목록" variant="shadow">
        <CardBody>
          <Empty {...args} block description="새 알림이 없습니다" />
        </CardBody>
      </Card>
      <div className="table_wrap">
        <table className="table table_bordered">
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">상태</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className="empty-table-cell">
                <Empty block simple size="sm" description="표시할 항목이 없습니다" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';

import ActualStat from '../../react/src/components/data-display/Stat/Stat.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Stat = ActualStat as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;

const meta = {
  title: '데이터 표시/Stat',
  component: Stat,
  parameters: { layout: 'fullscreen' },
  args: {
    title: '총 사용자',
    value: '12,480',
    prefix: '',
    suffix: '',
    description: '',
    trend: '',
    trendColor: '',
    size: 'md',
    card: false,
    shadow: false,
    className: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    title: {
      control: 'text',
      description: '통계 라벨',
    },
    value: {
      control: 'text',
      description: '주요 수치',
    },
    prefix: {
      control: 'text',
      description: '수치 앞 접두어',
    },
    suffix: {
      control: 'text',
      description: '수치 뒤 접미어',
    },
    description: {
      control: 'text',
      description: '보조 설명',
    },
    trend: {
      control: 'text',
      description: '추세 텍스트',
    },
    trendColor: {
      control: 'select',
      options: ['', 'success', 'danger', 'warning', 'primary', 'muted', 'info'],
      description: '추세 색상',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '크기',
    },
    card: {
      control: 'boolean',
      description: '카드형 외형',
    },
    shadow: {
      control: 'boolean',
      description: '그림자 카드',
    },
    className: {
      control: 'text',
      description: '사용자 정의 클래스',
    },
    children: { table: { disable: true }, description: '커스텀 본문' },
    trendIcon: { table: { disable: true }, description: '추세 아이콘' },
  },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Playground: Story = {
  name: 'Playground',
  args: { description: '지난 30일 기준', card: true },
  render: (args) => (
    <Demo>
      <Stat {...args} />
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  args: { description: '지난 30일 기준' },
  render: (args) => (
    <Demo>
      <Stat {...args} />
    </Demo>
  ),
};

export const PrefixSuffix: Story = {
  name: '접두·접미',
  render: (args) => (
    <Demo>
      <div className="stat_group stat_group-3">
        <Stat {...args} title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
        <Stat {...args} title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
        <Stat {...args} title="평균 응답 시간" value="128" suffix="ms" />
      </div>
    </Demo>
  ),
};

export const Trend: Story = {
  name: '추세',
  render: (args) => (
    <Demo>
      <div className="stat_group stat_group-2">
        <Stat {...args} title="신규 가입" value="1,234" trend="+15.3%" trendColor="success" />
        <Stat {...args} title="이탈률" value="2.4%" trend="+0.3%p" trendColor="danger" trendIcon={<Icon name="warning" />} />
      </div>
    </Demo>
  ),
};

export const Sizes: Story = {
  name: '크기',
  args: { card: true },
  render: (args) => (
    <Demo>
      <div className="stat_group stat_group-3">
        <Stat {...args} size="sm" title="Small" value="1,024" />
        <Stat {...args} title="Medium" value="8,192" />
        <Stat {...args} size="lg" title="Large" value="64K" />
      </div>
    </Demo>
  ),
};

export const Layouts: Story = {
  name: '레이아웃',
  args: { card: true },
  render: (args) => (
    <Demo>
      <Stat {...args} className="stat_horizontal" title="활성 세션" value="342" />
      <Stat {...args} className="stat_inline" title="CPU 사용률" value="68" suffix="%" />
      <Stat {...args} className="stat_row" shadow>
        <span className="stat_icon-wrap color_primary"><Icon name="user" /></span>
        <div className="stat_body">
          <span className="stat_label">신규 사용자</span>
          <span className="stat_value">1,284</span>
        </div>
      </Stat>
    </Demo>
  ),
};

export const WithIcon: Story = {
  name: '아이콘',
  args: { card: true },
  render: (args) => (
    <Demo>
      <div className="stat_group stat_group-2">
        <Stat {...args}>
          <span className="stat_icon"><Icon name="star" /></span>
          <span className="stat_label">즐겨찾기</span>
          <span className="stat_value">128</span>
        </Stat>
        <Stat {...args} className="stat_row">
          <span className="stat_icon-wrap color_success"><Icon name="check" /></span>
          <div className="stat_body">
            <span className="stat_label">완료</span>
            <span className="stat_value">84</span>
          </div>
        </Stat>
      </div>
    </Demo>
  ),
};

export const Skins: Story = {
  name: '카드 스킨',
  args: { card: true },
  render: (args) => (
    <Demo>
      <div className="stat_group stat_group-4">
        <Stat {...args} title="기본 카드" value="1,200" />
        <Stat {...args} shadow title="Shadow" value="980" />
        <Stat {...args} className="stat_borderless" title="Borderless" value="456" />
        <Stat {...args} className="stat_accent color_primary" title="Accent" value="789" description="강조 지표" />
      </div>
    </Demo>
  ),
};

export const Group: Story = {
  name: '그룹',
  render: (args) => (
    <Demo>
      <div className="stat_group stat_group-4">
        <Stat {...args} card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat {...args} card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat {...args} card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat {...args} card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div className="stat_group stat_group-4 stat_group-divider">
        <Stat {...args} title="방문" value="24.5K" />
        <Stat {...args} title="페이지뷰" value="89.2K" />
        <Stat {...args} title="전환" value="1,842" />
        <Stat {...args} title="매출" value="₩12M" />
      </div>
    </Demo>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';

import ActualAvatar from '../../react/src/components/data-display/Avatar/Avatar.jsx';
import ActualBadge, { BadgeWrap as ActualBadgeWrap } from '../../react/src/components/data-display/Badge/Badge.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Avatar = ActualAvatar as React.ComponentType<any>;
const Badge = ActualBadge as React.ComponentType<any>;
const BadgeWrap = ActualBadgeWrap as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;

const meta = {
  title: '데이터 표시/Badge',
  component: Badge,
  parameters: { layout: 'fullscreen' },
  args: {
    label: 'Badge',
    color: 'primary',
    size: 'md',
    dot: false,
    count: false,
    dotOnly: false,
    ariaLabel: '',
    className: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    label: { control: 'text', description: '배지 텍스트' },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      description: '색상',
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: '크기' },
    dot: { control: 'boolean', description: '상태 점 변형' },
    count: { control: 'boolean', description: '카운트형 스타일' },
    dotOnly: { control: 'boolean', description: '텍스트 없는 상태 점' },
    ariaLabel: { control: 'text', description: '접근성 이름' },
    className: { control: 'text', description: '사용자 정의 클래스' },
    children: { table: { disable: true }, description: '배지 콘텐츠' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => (
  <div className="btn-demo">
    <div className="icon_group">{children}</div>
  </div>
);

const spreadArgs = ({ children: _c, ...rest }: React.ComponentProps<typeof Badge>) => rest;

export const Playground: Story = {
  name: 'Playground',
  args: { label: 'Controls로 속성을 조절해 보세요.' },
  render: (args) => (
    <Demo>
      <Badge {...args} />
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: (args) => (
    <Demo>
      {(['default', 'primary', 'success', 'warning', 'danger', 'info'] as const).map((color) => (
        <Badge
          key={color}
          {...spreadArgs(args)}
          color={color}
          label={color[0].toUpperCase() + color.slice(1) + (args.color === color ? ' · Controls 적용 중' : '')}
        />
      ))}
    </Demo>
  ),
};

export const Sizes: Story = {
  name: '크기',
  render: (args) => (
    <Demo>
      {(
        [
          ['sm', 'Small'],
          ['md', 'Medium'],
          ['lg', 'Large'],
        ] as const
      ).map(([size, text]) => (
        <Badge
          key={size}
          {...spreadArgs(args)}
          size={size}
          label={`${text}${args.size === size ? ' · Controls 적용 중' : ''}`}
        />
      ))}
    </Demo>
  ),
};

export const Dot: Story = {
  name: '상태 점',
  render: (args) => (
    <Demo>
      <Badge {...spreadArgs(args)} dot color="primary" label="Online" />
      <Badge {...spreadArgs(args)} dot color="success" label="Active" />
      <Badge {...spreadArgs(args)} dot color="warning" label="Away" />
      <Badge {...spreadArgs(args)} dot color="danger" label="Offline" />
    </Demo>
  ),
};

export const Count: Story = {
  name: '카운트',
  render: (args) => (
    <Demo>
      <Badge {...spreadArgs(args)} count color="danger" label="3" />
      <Badge {...spreadArgs(args)} count label="12" />
      <Badge {...spreadArgs(args)} count color="success" label="99+" />
      <Badge {...spreadArgs(args)} count size="sm" color="danger" label="5" />
      <Badge {...spreadArgs(args)} count size="lg" label="New" />
    </Demo>
  ),
};

export const Overlay: Story = {
  name: '겹침',
  render: (args) => (
    <Demo>
      <BadgeWrap>
        <Button label="알림" />
        <Badge {...spreadArgs(args)} count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
      </BadgeWrap>
      <BadgeWrap>
        <Button variant="ghost" iconOnly ariaLabel="메시지" iconBefore={<Icon name="mail" />} />
        <Badge {...spreadArgs(args)} count color="danger" ariaLabel="새 메시지 12건" label="12" />
      </BadgeWrap>
      <BadgeWrap>
        <Avatar color="primary" initials="홍" ariaHidden />
        <Badge {...spreadArgs(args)} dotOnly color="success" ariaLabel="온라인" />
      </BadgeWrap>
    </Demo>
  ),
};

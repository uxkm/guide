import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';
import { assetUrl } from '@uxkm/assets/url';

import ActualAvatar, { AvatarGroup as ActualAvatarGroup } from '../../react/src/components/data-display/Avatar/Avatar.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Avatar = ActualAvatar as React.ComponentType<any>;
const AvatarGroup = ActualAvatarGroup as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const sample = assetUrl('images/samples/avatar/avatar-sample.svg');

const meta = {
  title: '데이터 표시/Avatar',
  component: Avatar,
  parameters: { layout: 'fullscreen' },
  args: {
    initials: '홍',
    color: 'primary',
    size: 'md',
    src: '',
    alt: '',
    square: false,
    badgeColor: '',
    badgeLabel: '',
    ariaHidden: false,
    className: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    initials: { control: 'text', description: '이니셜 텍스트' },
    src: { control: 'text', description: '이미지 주소' },
    alt: { control: 'text', description: '이미지 대체 텍스트' },
    color: {
      control: 'select',
      options: ['', 'default', 'primary', 'success', 'warning', 'danger'],
      description: '배경 색상',
    },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'], description: '크기' },
    square: { control: 'boolean', description: '사각형 변형' },
    badgeColor: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger', 'primary'],
      description: '상태 점 색상',
    },
    badgeLabel: { control: 'text', description: '상태 점 접근성 이름' },
    ariaHidden: { control: 'boolean', description: '장식용 숨김' },
    className: { control: 'text', description: '사용자 정의 클래스' },
    icon: { table: { disable: true }, description: 'fallback 아이콘' },
    children: { table: { disable: true }, description: 'fallback 콘텐츠' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => (
  <div className="btn-demo">
    <div className="icon_group">{children}</div>
  </div>
);

const spreadArgs = ({ icon: _i, children: _c, ...rest }: React.ComponentProps<typeof Avatar>) => rest;

export const Playground: Story = {
  name: 'Playground',
  args: { initials: '홍', color: 'primary', ariaHidden: true },
  render: (args) => (
    <Demo>
      <Avatar {...args} />
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: (args) => (
    <Demo>
      <Avatar {...spreadArgs(args)} src={sample} alt="홍길동" />
      <Avatar {...spreadArgs(args)} color="primary" initials="홍" ariaHidden />
      <Avatar
        {...spreadArgs(args)}
        color="default"
        icon={<Icon name="user" className="avatar_icon" />}
        ariaHidden
      />
    </Demo>
  ),
};

export const Sizes: Story = {
  name: '크기',
  render: (args) => (
    <Demo>
      {(
        [
          ['sm', 'A'],
          ['md', 'B'],
          ['lg', 'C'],
          ['xl', 'D'],
        ] as const
      ).map(([size, initial]) => (
        <Avatar
          key={size}
          {...spreadArgs(args)}
          size={size}
          color="primary"
          initials={initial}
          ariaHidden
          badgeLabel={args.size === size ? 'Controls 적용 중' : undefined}
        />
      ))}
    </Demo>
  ),
};

export const Shapes: Story = {
  name: '형태',
  render: (args) => (
    <Demo>
      <Avatar {...spreadArgs(args)} color="primary" initials="원" ariaHidden />
      <Avatar {...spreadArgs(args)} square color="primary" initials="각" ariaHidden />
      <Avatar {...spreadArgs(args)} square src={sample} alt="홍길동" />
    </Demo>
  ),
};

export const Colors: Story = {
  name: '색상',
  render: (args) => (
    <Demo>
      {(
        [
          ['default', 'D'],
          ['primary', 'P'],
          ['success', 'S'],
          ['warning', 'W'],
          ['danger', 'E'],
        ] as const
      ).map(([color, initial]) => (
        <Avatar
          key={color}
          {...spreadArgs(args)}
          color={color}
          initials={initial}
          ariaHidden
          badgeLabel={args.color === color ? 'Controls 적용 중' : undefined}
        />
      ))}
    </Demo>
  ),
};

export const StatusBadge: Story = {
  name: '상태 배지',
  render: (args) => (
    <Demo>
      <Avatar {...spreadArgs(args)} color="primary" initials="온" badgeColor="success" badgeLabel="온라인" />
      <Avatar {...spreadArgs(args)} color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" />
      <Avatar {...spreadArgs(args)} color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" />
    </Demo>
  ),
};

export const Group: Story = {
  name: '그룹',
  render: (args) => (
    <div className="btn-demo">
      <AvatarGroup ariaLabel="팀 멤버 4명">
        <Avatar {...spreadArgs(args)} color="primary" initials="김" ariaHidden />
        <Avatar {...spreadArgs(args)} color="success" initials="이" ariaHidden />
        <Avatar {...spreadArgs(args)} color="warning" initials="박" ariaHidden />
        <Avatar {...spreadArgs(args)} color="danger" initials="최" ariaHidden />
      </AvatarGroup>
      <AvatarGroup ariaLabel="팀 멤버 3명">
        <Avatar {...spreadArgs(args)} src={sample} alt="홍길동" />
        <Avatar {...spreadArgs(args)} color="primary" initials="홍" ariaHidden />
        <Avatar
          {...spreadArgs(args)}
          color="default"
          icon={<Icon name="plus" className="avatar_icon" />}
          ariaHidden
        />
      </AvatarGroup>
    </div>
  ),
};

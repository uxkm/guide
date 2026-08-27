import type { Meta, StoryObj } from '@storybook/react-vite';
import { assetUrl } from '@uxkm/assets/url';

import ActualAvatar, { AvatarGroup as ActualAvatarGroup } from '../../react/src/components/data-display/Avatar/Avatar.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Avatar = ActualAvatar as React.ComponentType<any>;
const AvatarGroup = ActualAvatarGroup as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const sample = assetUrl('images/samples/avatar/avatar-sample.svg');

const meta = {
  title: '데이터 표시/Avatar', component: Avatar, parameters: { layout: 'fullscreen' },
  args: { initials: '홍', color: 'primary', size: 'md' }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo"><div className="icon_group">{children}</div></div>;

export const Basic: Story = { name: '기본', render: () => <Demo><Avatar src={sample} alt="홍길동" /><Avatar color="primary" initials="홍" ariaHidden /><Avatar color="default" icon={<Icon name="user" className="avatar_icon" />} ariaHidden /></Demo> };
export const Sizes: Story = { name: '크기', render: () => <Demo><Avatar size="sm" color="primary" initials="A" ariaHidden /><Avatar color="primary" initials="B" ariaHidden /><Avatar size="lg" color="primary" initials="C" ariaHidden /><Avatar size="xl" color="primary" initials="D" ariaHidden /></Demo> };
export const Shapes: Story = { name: '형태', render: () => <Demo><Avatar color="primary" initials="원" ariaHidden /><Avatar square color="primary" initials="각" ariaHidden /><Avatar square src={sample} alt="홍길동" /></Demo> };
export const Colors: Story = { name: '색상', render: () => <Demo>{[['default', 'D'], ['primary', 'P'], ['success', 'S'], ['warning', 'W'], ['danger', 'E']].map(([color, initials]) => <Avatar key={color} color={color} initials={initials} ariaHidden />)}</Demo> };
export const StatusBadge: Story = { name: '상태 배지', render: () => <Demo><Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" /><Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" /><Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" /></Demo> };
export const Group: Story = { name: '그룹', render: () => <div className="btn-demo"><AvatarGroup ariaLabel="팀 멤버 4명"><Avatar color="primary" initials="김" ariaHidden /><Avatar color="success" initials="이" ariaHidden /><Avatar color="warning" initials="박" ariaHidden /><Avatar color="danger" initials="최" ariaHidden /></AvatarGroup><AvatarGroup ariaLabel="팀 멤버 3명"><Avatar src={sample} alt="홍길동" /><Avatar color="primary" initials="홍" ariaHidden /><Avatar color="default" icon={<Icon name="plus" className="avatar_icon" />} ariaHidden /></AvatarGroup></div> };

import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualAvatar from '../../react/src/components/data-display/Avatar/Avatar.jsx';
import ActualBadge, { BadgeWrap as ActualBadgeWrap } from '../../react/src/components/data-display/Badge/Badge.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Avatar = ActualAvatar as React.ComponentType<any>;
const Badge = ActualBadge as React.ComponentType<any>;
const BadgeWrap = ActualBadgeWrap as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const meta = { title: '데이터 표시/Badge', component: Badge, parameters: { layout: 'fullscreen' }, args: { label: 'Badge', color: 'primary', size: 'md' } } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo"><div className="icon_group">{children}</div></div>;

export const Basic: Story = { name: '기본', render: () => <Demo>{['default', 'primary', 'success', 'warning', 'danger', 'info'].map((color) => <Badge key={color} color={color} label={color[0].toUpperCase() + color.slice(1)} />)}</Demo> };
export const Sizes: Story = { name: '크기', render: () => <Demo><Badge size="sm" label="Small" /><Badge label="Medium" /><Badge size="lg" label="Large" /></Demo> };
export const Dot: Story = { name: '상태 점', render: () => <Demo><Badge dot color="primary" label="Online" /><Badge dot color="success" label="Active" /><Badge dot color="warning" label="Away" /><Badge dot color="danger" label="Offline" /></Demo> };
export const Count: Story = { name: '카운트', render: () => <Demo><Badge count color="danger" label="3" /><Badge count label="12" /><Badge count color="success" label="99+" /><Badge count size="sm" color="danger" label="5" /><Badge count size="lg" label="New" /></Demo> };
export const Overlay: Story = { name: '겹침', render: () => <Demo><BadgeWrap><Button label="알림" /><Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" /></BadgeWrap><BadgeWrap><Button variant="ghost" iconOnly ariaLabel="메시지" iconBefore={<Icon name="mail" />} /><Badge count color="danger" ariaLabel="새 메시지 12건" label="12" /></BadgeWrap><BadgeWrap><Avatar color="primary" initials="홍" ariaHidden /><Badge dotOnly color="success" ariaLabel="온라인" /></BadgeWrap></Demo> };

import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualIcon, { iconNames } from '../../react/src/components/basic/Icon/Icon.jsx';

const Icon = ActualIcon as React.ComponentType<any>;

const meta = {
  title: '기본 요소/Icon',
  component: Icon,
  parameters: { layout: 'fullscreen' },
  args: { name: 'search', size: 'md' }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Row = ({ children }: { children: React.ReactNode }) => <div className="icon_group">{children}</div>;

export const Basic: Story = { name: '기본', render: () => <Demo><Row><Icon name="search" /><Icon name="edit" /><Icon name="trash" /></Row></Demo> };

export const CustomSvg: Story = {
  name: '커스텀 SVG',
  render: () => <Demo><Row>
    <Icon><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></Icon>
    <Icon><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" /></Icon>
  </Row></Demo>
};

export const Sizes: Story = { name: '크기', render: () => <Demo><Row><Icon name="plus" size="sm" /><Icon name="plus" /><Icon name="plus" size="lg" /><Icon name="plus" size="xl" /></Row></Demo> };

export const Colors: Story = { name: '색상', render: () => <Demo><Row><Icon name="star" color="default" /><Icon name="star" color="primary" /><Icon name="check-circle" color="success" /><Icon name="alert-triangle" color="warning" /><Icon name="x-circle" color="danger" /></Row></Demo> };

export const Inline: Story = { name: '텍스트 인라인', render: () => <Demo><p><Icon name="info" inline color="info" ariaLabel="안내" /> <span>변경 사항이 자동 저장됩니다.</span></p><p><Icon name="check-circle" inline color="success" ariaLabel="완료" /> <span>업로드가 완료되었습니다.</span></p></Demo> };

export const Background: Story = { name: '원형 · 사각형 배경', render: () => <Demo><Row><Icon name="plus" circle color="primary" size="sm" /><Icon name="check-circle" circle color="success" size="sm" /><Icon name="trash" circle color="danger" size="lg" /><Icon name="edit" square color="primary" /></Row></Demo> };

export const IconButton: Story = { name: '아이콘 버튼', render: () => <Demo><Row><Icon name="search" button color="primary" ariaLabel="검색" /><Icon name="settings" button color="muted" ariaLabel="설정" /><Icon name="close" button color="danger" ariaLabel="삭제" /></Row></Demo> };

export const Pulse: Story = { name: '펄스', render: () => <Demo><Row><Icon name="bell" circle pulse color="primary" size="sm" /><Icon circle pulse color="danger" size="sm"><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></Icon></Row></Demo> };

export const Group: Story = { name: '그룹', render: () => <Demo><Row><Icon name="upload" color="muted" /><Icon name="download" color="muted" /><Icon name="trash" color="muted" /></Row><p><Icon name="user" circle color="primary" size="sm" /> <span className="color_muted">홍길동님이 댓글을 남겼습니다.</span></p></Demo> };

export const Spin: Story = { name: '회전', render: () => <Demo><Row><Icon name="loader" spin color="primary" /><Icon name="loader" spin size="lg" color="muted" /></Row></Demo> };

export const Gallery: Story = { name: '아이콘 유형', render: () => <div className="icon_grid">{iconNames.map((name) => <div className="icon_grid-item" key={name}><Icon name={name} size="lg" /><span>{name}</span></div>)}</div> };

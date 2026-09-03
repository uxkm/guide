import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';

import ActualIcon, { iconNames } from '../../react/src/components/basic/Icon/Icon.jsx';

const Icon = ActualIcon as React.ComponentType<any>;

const meta = {
  title: '기본 요소/Icon',
  component: Icon,
  parameters: { layout: 'fullscreen' },
  args: {
    name: 'search',
    size: 'md',
    color: '',
    inline: false,
    spin: false,
    button: false,
    circle: false,
    square: false,
    pulse: false,
    ripple: true,
    ariaLabel: '',
    title: '',
    className: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    name: { control: 'select', options: iconNames, description: '등록된 아이콘 이름' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'], description: '크기' },
    color: {
      control: 'select',
      options: ['', 'default', 'primary', 'success', 'warning', 'danger', 'info', 'muted'],
      description: '색상',
    },
    ariaLabel: { control: 'text', description: '접근성 이름' },
    title: { control: 'text', description: 'SVG title' },
    inline: { control: 'boolean', description: '텍스트 인라인 정렬' },
    spin: { control: 'boolean', description: '회전 애니메이션' },
    button: { control: 'boolean', description: 'button 래퍼' },
    circle: { control: 'boolean', description: '원형 배경' },
    square: { control: 'boolean', description: '사각형 배경' },
    pulse: { control: 'boolean', description: '펄스 효과 (circle)' },
    ripple: { control: 'boolean', description: 'button일 때 리플' },
    className: { control: 'text', description: '사용자 정의 클래스' },
    children: { table: { disable: true }, description: '커스텀 SVG 도형' },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Row = ({ children }: { children: React.ReactNode }) => <div className="icon_group">{children}</div>;

const spreadArgs = ({ children: _c, ...rest }: React.ComponentProps<typeof Icon>) => rest;

export const Playground: Story = {
  name: 'Playground',
  args: { name: 'search', ariaLabel: '검색' },
  render: (args) => (
    <Demo>
      <Icon {...args} />
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: (args) => (
    <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="search" />
        <Icon {...spreadArgs(args)} name="edit" />
        <Icon {...spreadArgs(args)} name="trash" />
      </Row>
    </Demo>
  ),
};

export const CustomSvg: Story = {
  name: '커스텀 SVG',
  render: (args) => (
    <Demo>
      <Row>
        <Icon {...spreadArgs(args)}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </Icon>
        <Icon {...spreadArgs(args)}>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
        </Icon>
      </Row>
    </Demo>
  ),
};

export const Sizes: Story = {
  name: '크기',
  render: (args) => (
    <Demo>
      <Row>
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Icon
            key={size}
            {...spreadArgs(args)}
            name="plus"
            size={size}
            ariaLabel={args.size === size ? 'Controls 적용 중' : undefined}
          />
        ))}
      </Row>
    </Demo>
  ),
};

export const Colors: Story = {
  name: '색상',
  render: (args) => (
    <Demo>
      <Row>
        {(
          [
            ['star', 'default'],
            ['star', 'primary'],
            ['check-circle', 'success'],
            ['alert-triangle', 'warning'],
            ['x-circle', 'danger'],
          ] as const
        ).map(([name, color]) => (
          <Icon
            key={`${name}-${color}`}
            {...spreadArgs(args)}
            name={name}
            color={color}
            ariaLabel={args.color === color ? 'Controls 적용 중' : undefined}
          />
        ))}
      </Row>
    </Demo>
  ),
};

export const Inline: Story = {
  name: '텍스트 인라인',
  render: (args) => (
    <Demo>
      <p>
        <Icon {...spreadArgs(args)} name="info" inline color="info" ariaLabel="안내" />{' '}
        <span>변경 사항이 자동 저장됩니다.</span>
      </p>
      <p>
        <Icon {...spreadArgs(args)} name="check-circle" inline color="success" ariaLabel="완료" />{' '}
        <span>업로드가 완료되었습니다.</span>
      </p>
    </Demo>
  ),
};

export const Background: Story = {
  name: '원형 · 사각형 배경',
  render: (args) => (
    <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="plus" circle color="primary" size="sm" />
        <Icon {...spreadArgs(args)} name="check-circle" circle color="success" size="sm" />
        <Icon {...spreadArgs(args)} name="trash" circle color="danger" size="lg" />
        <Icon {...spreadArgs(args)} name="edit" square color="primary" />
      </Row>
    </Demo>
  ),
};

export const IconButton: Story = {
  name: '아이콘 버튼',
  render: (args) => (
    <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="search" button color="primary" ariaLabel="검색" />
        <Icon {...spreadArgs(args)} name="settings" button color="muted" ariaLabel="설정" />
        <Icon {...spreadArgs(args)} name="close" button color="danger" ariaLabel="삭제" />
      </Row>
    </Demo>
  ),
};

export const Pulse: Story = {
  name: '펄스',
  render: (args) => (
    <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="bell" circle pulse color="primary" size="sm" />
        <Icon {...spreadArgs(args)} circle pulse color="danger" size="sm">
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </Icon>
      </Row>
    </Demo>
  ),
};

export const Group: Story = {
  name: '그룹',
  render: (args) => (
    <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="upload" color="muted" />
        <Icon {...spreadArgs(args)} name="download" color="muted" />
        <Icon {...spreadArgs(args)} name="trash" color="muted" />
      </Row>
      <p>
        <Icon {...spreadArgs(args)} name="user" circle color="primary" size="sm" />{' '}
        <span className="color_muted">홍길동님이 댓글을 남겼습니다.</span>
      </p>
    </Demo>
  ),
};

export const Spin: Story = {
  name: '회전',
  render: (args) => (
    <Demo>
      <Row>
        <Icon {...spreadArgs(args)} name="loader" spin color="primary" />
        <Icon {...spreadArgs(args)} name="loader" spin size="lg" color="muted" />
      </Row>
    </Demo>
  ),
};

export const Gallery: Story = {
  name: '아이콘 유형',
  render: (args) => (
    <div className="icon_grid">
      {iconNames.map((name) => (
        <div className="icon_grid-item" key={name}>
          <Icon
            {...spreadArgs(args)}
            name={name}
            size="lg"
            ariaLabel={args.name === name ? 'Controls 적용 중' : undefined}
          />
          <span>
            {name}
            {args.name === name ? ' · Controls 적용 중' : ''}
          </span>
        </div>
      ))}
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';

import ActualDivider from '../../react/src/components/layout/Divider/Divider.jsx';
import ActualSpace from '../../react/src/components/layout/Space/Space.jsx';

const Divider = ActualDivider as React.ComponentType<any>;
const Space = ActualSpace as React.ComponentType<any>;

const ORIENT_LABELS: Record<string, string> = {
  left: '왼쪽',
  '': '가운데',
  right: '오른쪽',
};

const PRESET_LABELS: Record<string, string> = {
  none: 'none',
  xs: 'xs',
  sm: 'sm',
  '': '기본',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const meta = {
  title: '레이아웃/Divider',
  component: Divider,
  parameters: { layout: 'fullscreen' },
  args: {
    tag: 'auto',
    vertical: false,
    dashed: false,
    plain: false,
    orient: '',
    marginY: '',
    thickness: '',
    height: '',
    label: '',
    className: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    as: {
      table: { disable: true },
      description: '루트 요소 (tag로 대체)',
    },
    tag: {
      control: 'select',
      options: ['auto', 'hr', 'div', 'span'],
      description: '루트 태그 모드 (auto면 내용·방향에 따라 자동 선택)',
    },
    vertical: {
      control: 'boolean',
      description: '세로 구분선으로 표시',
    },
    dashed: {
      control: 'boolean',
      description: '점선 스타일 적용',
    },
    plain: {
      control: 'boolean',
      description: '레이블 굵기를 낮춤',
    },
    orient: {
      control: 'select',
      options: ['', 'left', 'right'],
      description: '레이블 위치',
    },
    orientation: {
      control: 'select',
      options: ['', 'left', 'right'],
      description: 'orient의 이전 호환 이름',
    },
    marginY: {
      control: 'text',
      description: '가로=상·하 / 세로=좌·우 간격 (xs·sm·md·lg·xl·none / rem 숫자 / CSS 길이)',
    },
    thickness: {
      control: 'text',
      description: '선 두께 (xs·sm·md·lg·xl·none / rem 숫자 / CSS 길이)',
    },
    height: {
      control: 'text',
      description: '세로 구분선 길이 (xs·sm·md·lg·xl / rem 숫자 / CSS 길이)',
    },
    label: {
      control: 'text',
      description: 'children이 없을 때 표시할 레이블',
    },
    children: {
      table: { disable: true },
      description: '구분선 가운데 표시할 콘텐츠',
    },
    className: {
      control: 'text',
      description: '사용자 정의 클래스',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Demo>
      {args.vertical ? (
        <Space>
          <span>항목 A</span>
          <Divider {...args} />
          <span>항목 B</span>
        </Space>
      ) : (
        <>
          <p>위 콘텐츠</p>
          <Divider {...args} />
          <p>아래 콘텐츠</p>
        </>
      )}
    </Demo>
  ),
};

export const Dashed: Story = {
  name: '점선',
  args: { dashed: true },
  render: (args) => (
    <Demo>
      <p>위 콘텐츠</p>
      <Divider {...args} dashed />
      <p>아래 콘텐츠{args.dashed ? ' · Controls 적용 중' : ''}</p>
    </Demo>
  ),
};

export const MarginY: Story = {
  name: '간격',
  args: { marginY: 'sm' },
  render: (args) => (
    <Demo>
      <p>가로 · 상·하 간격</p>
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((marginY) => (
        <div key={marginY}>
          <p>
            marginY {PRESET_LABELS[marginY]}
            {!args.vertical && String(args.marginY ?? '') === marginY ? ' · Controls 적용 중' : ''}
          </p>
          <Divider {...args} vertical={false} marginY={marginY} />
          <p>아래 콘텐츠</p>
        </div>
      ))}
      <p>세로 · 좌·우 간격</p>
      <Space>
        {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((marginY) => (
          <span key={marginY} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>{PRESET_LABELS[marginY]}</span>
            <Divider
              {...args}
              vertical
              marginY={marginY}
              height="md"
            />
          </span>
        ))}
      </Space>
    </Demo>
  ),
};

export const Thickness: Story = {
  name: '두께',
  args: { thickness: 'lg' },
  render: (args) => (
    <Demo>
      {(['none', 'xs', 'sm', '', 'lg', 'xl'] as const).map((thickness) => (
        <div key={thickness || 'md'}>
          <p>
            thickness {PRESET_LABELS[thickness]}
            {String(args.thickness ?? '') === String(thickness) ? ' · Controls 적용 중' : ''}
          </p>
          <Divider {...args} thickness={thickness || undefined} />
        </div>
      ))}
      <div>
        <p>
          thickness 3px
          {String(args.thickness) === '3px' ? ' · Controls 적용 중' : ''}
        </p>
        <Divider {...args} thickness="3px" />
      </div>
    </Demo>
  ),
};

export const Text: Story = {
  name: '텍스트 레이블',
  args: { label: '섹션 제목' },
  render: (args) => (
    <Demo>
      <Divider
        {...args}
        label={args.label || '섹션 제목'}
        plain={false}
      >
        {args.children}
      </Divider>
      <Divider
        {...args}
        plain
        label="보조 설명"
      >
        {undefined}
      </Divider>
      {args.plain ? <p>보조 설명 · Controls 적용 중</p> : null}
    </Demo>
  ),
};

export const Orient: Story = {
  name: '레이블 정렬',
  args: { orient: 'left' },
  render: (args) => (
    <Demo>
      {(['left', '', 'right'] as const).map((orient) => (
        <Divider
          key={orient || 'center'}
          {...args}
          orient={orient}
          label={`${ORIENT_LABELS[orient]}${args.orient === orient ? ' · Controls 적용 중' : ''}`}
        />
      ))}
    </Demo>
  ),
};

export const Vertical: Story = {
  name: '세로',
  args: { vertical: true, height: 'md' },
  render: (args) => (
    <Demo>
      <Space>
        <span>항목 A</span>
        <Divider {...args} vertical dashed={false} />
        <span>
          항목 B
          {args.vertical && !args.dashed ? ' · Controls 적용 중' : ''}
        </span>
        <Divider {...args} vertical dashed />
        <span>
          항목 C
          {args.vertical && args.dashed ? ' · Controls 적용 중' : ''}
        </span>
      </Space>
      <p>세로 길이</p>
      <Space align="end">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((height) => (
          <span key={height} style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '0.35rem' }}>
            <span>{height}</span>
            <Divider
              {...args}
              vertical
              height={height}
              marginY="sm"
            />
          </span>
        ))}
        <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '0.35rem' }}>
          <span>3rem</span>
          <Divider {...args} vertical height="3rem" marginY="sm" />
        </span>
      </Space>
    </Demo>
  ),
};

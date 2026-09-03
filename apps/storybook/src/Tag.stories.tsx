import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import ActualTag, { TagGroup as ActualTagGroup } from '../../react/src/components/data-display/Tag/Tag.jsx';
import {
  booleanControlArg,
  closeLabelArg,
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const Tag = ActualTag as React.ComponentType<any>;
const TagGroup = ActualTagGroup as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;

const colors = ['default', 'primary', 'success', 'warning', 'danger', 'info'] as const;

type TagStoryArgs = {
  label?: string;
  color?: (typeof colors)[number];
  variant?: 'filled' | 'solid' | 'outline' | 'borderless';
  size?: 'sm' | 'md' | 'lg';
  round?: boolean;
  checkable?: boolean;
  add?: boolean;
  closable?: boolean;
  selected?: boolean;
  disabled?: boolean;
  href?: string;
  ripple?: boolean;
  closeLabel?: string;
};

function tagPropsFromArgs(args: Record<string, unknown>) {
  const href = typeof args.href === 'string' && args.href ? args.href : undefined;
  const closeLabel =
    typeof args.closeLabel === 'string' && args.closeLabel ? args.closeLabel : undefined;

  return {
    label: typeof args.label === 'string' ? args.label : undefined,
    color: args.color,
    variant: args.variant,
    size: args.size,
    round: args.round === true,
    checkable: args.checkable === true,
    add: args.add === true,
    closable: args.closable === true,
    selected: args.selected === true,
    disabled: args.disabled === true,
    ripple: args.ripple !== false,
    ...(href ? { href } : {}),
    ...(closeLabel ? { closeLabel } : {}),
  };
}

const tagControlKeys = [
  'label',
  'color',
  'variant',
  'size',
  'round',
  'checkable',
  'add',
  'closable',
  'selected',
  'disabled',
  'href',
  'ripple',
  'closeLabel',
] as const;

const meta = {
  title: '데이터 표시/Tag',
  component: Tag,
  parameters: {
    layout: 'fullscreen',
    controls: { include: [...tagControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    label: 'Tag',
    color: 'primary',
    variant: 'filled',
    size: 'md',
    round: false,
    checkable: false,
    add: false,
    closable: false,
    selected: false,
    disabled: false,
    href: '',
    ripple: true,
    closeLabel: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    label: { ...stringControlArg, description: '태그 텍스트' },
    color: {
      control: 'select',
      options: [...colors],
      type: 'string',
      description: '색상',
    },
    variant: {
      control: 'select',
      options: ['filled', 'solid', 'outline', 'borderless'],
      type: 'string',
      description: '스킨 변형',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
      description: '크기',
    },
    round: { ...booleanControlArg, description: '둥근 pill 형태' },
    checkable: { ...booleanControlArg, description: '선택 가능' },
    add: { ...booleanControlArg, description: '추가(+) 트리거' },
    closable: { ...booleanControlArg, description: '닫기 버튼 표시' },
    selected: { ...booleanControlArg, description: '선택된 상태' },
    disabled: { ...booleanControlArg, description: '비활성 상태' },
    href: { ...stringControlArg, description: '링크 주소' },
    ripple: { ...booleanControlArg, description: '클릭 리플 효과' },
    closeLabel: { ...closeLabelArg, description: '닫기 버튼 접근성 이름' },
    icon: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onClose: { table: { disable: true } },
  },
} satisfies Meta<TagStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Row = ({ children, tight = false }: { children: React.ReactNode; tight?: boolean }) => (
  <TagGroup tight={tight}>{children}</TagGroup>
);
const colorRow = (variant: 'filled' | 'solid' | 'outline' | 'borderless' = 'filled') => (
  <Row>
    {colors.map((color) => (
      <Tag key={color} variant={variant} color={color} label={color[0].toUpperCase() + color.slice(1)} />
    ))}
  </Row>
);

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Demo>
      <Tag {...tagPropsFromArgs(args)} />
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: () => <Demo>{colorRow()}</Demo>,
};

export const Solid: Story = {
  name: '솔리드',
  render: () => <Demo>{colorRow('solid')}</Demo>,
};

export const Outline: Story = {
  name: '아웃라인',
  render: () => <Demo>{colorRow('outline')}</Demo>,
};

export const Sizes: Story = {
  name: '크기',
  render: () => (
    <Demo>
      <Row tight>
        <Tag size="sm" label="Small" />
        <Tag label="Medium" />
        <Tag size="lg" label="Large" />
      </Row>
      <Row tight>
        <Tag size="sm" variant="outline" color="success" label="Small" />
        <Tag variant="outline" color="success" label="Medium" />
        <Tag size="lg" variant="outline" color="success" label="Large" />
      </Row>
      <Row tight>
        <Tag size="sm" variant="solid" color="danger" label="Small" />
        <Tag variant="solid" color="danger" label="Medium" />
        <Tag size="lg" variant="solid" color="danger" label="Large" />
      </Row>
    </Demo>
  ),
};

export const Round: Story = {
  name: '둥근',
  render: () => (
    <Demo>
      <Row>
        <Tag round label="Filled" />
        <Tag round variant="outline" label="Outline" />
        <Tag round variant="solid" label="Solid" />
        <Tag round variant="borderless" color="default" label="Borderless" />
      </Row>
    </Demo>
  ),
};

export const WithIcon: Story = {
  name: '아이콘',
  render: () => (
    <Demo>
      <Row>
        <Tag label="Design" icon={<Icon name="star" />} />
        <Tag variant="outline" color="success" label="Verified" icon={<Icon name="check" />} />
        <Tag variant="solid" color="danger" label="Error" icon={<Icon name="close" />} />
        <Tag size="sm" round color="default" label="User" icon={<Icon name="user" />} />
      </Row>
    </Demo>
  ),
};

export const Closable: Story = {
  name: '닫기 가능',
  render: () => (
    <Demo>
      <Row tight>
        <Tag closable label="React" closeLabel="React 태그 제거" />
        <Tag closable variant="outline" color="default" label="Svelte" />
        <Tag closable variant="solid" color="danger" label="Deprecated" />
      </Row>
      <Row tight>
        <Tag closable round color="success" label="Frontend" icon={<Icon name="star" />} />
      </Row>
    </Demo>
  ),
};

export const Checkable: Story = {
  name: '선택 가능',
  render: () => (
    <Demo>
      <TagGroup ariaLabel="카테고리 필터">
        <Tag checkable selected color="default" label="전체" />
        <Tag checkable color="default" label="UI" />
        <Tag checkable color="default" label="UX" />
        <Tag checkable color="default" label="개발" />
      </TagGroup>
      <TagGroup ariaLabel="상태 필터">
        <Tag checkable round selected label="진행 중" />
        <Tag checkable round selected color="success" label="완료" />
        <Tag checkable round color="warning" label="보류" />
        <Tag checkable round color="danger" label="취소" />
      </TagGroup>
    </Demo>
  ),
};

export const Add: Story = {
  name: '추가',
  render: () => (
    <Demo>
      <Row>
        <Tag add round label="태그 추가" icon={<Icon name="plus" />} />
        <Tag add size="sm" label="+ New Tag" />
        <Tag add size="lg" round label="+ 카테고리 추가" />
      </Row>
    </Demo>
  ),
};

export const Link: Story = {
  name: '링크',
  render: () => (
    <Demo>
      <Row>
        <Tag href="#" label="문서 보기" />
        <Tag href="#" variant="outline" label="가이드" />
        <Tag href="#" variant="solid" label="바로가기" />
        <Tag href="#" round variant="outline" color="success" label="외부 링크" icon={<Icon name="external" />} />
      </Row>
    </Demo>
  ),
};

export const Disabled: Story = {
  name: '비활성',
  render: () => (
    <Demo>
      <Row>
        <Tag disabled label="Filled" />
        <Tag disabled variant="outline" color="success" label="Outline" />
        <Tag disabled variant="solid" color="danger" label="Solid" />
        <Tag disabled checkable selected color="default" label="선택됨 (비활성)" />
        <Tag disabled add label="태그 추가 (비활성)" />
      </Row>
    </Demo>
  ),
};

export const Group: Story = {
  name: '그룹',
  render: () => (
    <Demo>
      <Row>
        <Tag label="HTML" />
        <Tag label="CSS" />
        <Tag label="JavaScript" />
        <Tag color="default" label="TypeScript" />
        <Tag color="success" label="SCSS" />
      </Row>
      <Row tight>
        <Tag closable round label="React" />
        <Tag closable round label="Next.js" />
        <Tag add round size="sm" label="+ 추가" />
      </Row>
    </Demo>
  ),
};

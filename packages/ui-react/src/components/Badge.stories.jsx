import React from 'react';
import Avatar from './Avatar.jsx';
import Badge from './Badge.jsx';
import BadgeWrap from './BadgeWrap.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  badgeClassColumns,
  badgeClasses,
  badgePropColumns,
  badgeProps,
  badgeSlotColumns,
  badgeSlots,
  badgeTokenColumns,
  badgeTokens,
  badgeWrapPropColumns,
  badgeWrapProps,
  badgeWrapSlotColumns,
  badgeWrapSlots,
} from '@doc-data/badge-api';

const apiSections = [
  {
    title: 'API · Badge Props',
    description: 'React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다.',
    tables: [{ columns: badgePropColumns, rows: badgeProps, codeColumn: 'name' }],
  },
  {
    title: 'API · BadgeWrap Props',
    tables: [{ columns: badgeWrapPropColumns, rows: badgeWrapProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Badge Children / Slots',
    description: 'Vue default 슬롯은 React children에 대응합니다.',
    tables: [{ columns: badgeSlotColumns, rows: badgeSlots, codeColumn: 'name' }],
  },
  {
    title: 'API · BadgeWrap Children / Slots',
    tables: [{ columns: badgeWrapSlotColumns, rows: badgeWrapSlots, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: badgeClassColumns, rows: badgeClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: badgeTokenColumns, rows: badgeTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  color: 'primary',
  size: 'md',
  dot: false,
  count: false,
  dotOnly: false,
  label: '라벨',
  ariaLabel: '접근성 라벨',
};

export default {
  title: 'Components/데이터 표시/Badge',
  id: 'components-badge',
  component: Badge,
  subcomponents: { BadgeWrap },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      type: {
        name: 'enum',
        summary: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'",
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    dot: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    count: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    dotOnly: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '상태, 카운트, 레이블을 표시하는 작은 배지 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <Badge {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '공통 color_* 클래스로 의미에 따른 색상을 적용합니다.',
      },
      source: {
        code: `import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function BasicExample() {
  return (
    <>
      <Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <>
      <Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />
    </>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'badge_sm · badge_lg로 스케일을 조절합니다.',
      },
      source: {
        code: `import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function SizeExample() {
  return (
    <>
      <Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <>
      <Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />
    </>,
  ),
};

export const Dot = {
  name: 'Dot 배지',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다.',
      },
      source: {
        code: `import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function DotExample() {
  return (
    <>
      <Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <>
      <Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />
    </>,
  ),
};

export const Count = {
  name: '카운트',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다.',
      },
      source: {
        code: `import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function CountExample() {
  return (
    <>
      <Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <>
      <Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />
    </>,
  ),
};

export const Wrap = {
  name: '겹침 표시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Badge from '@uxkm/ui-react/components/Badge.jsx';
import BadgeWrap from '@uxkm/ui-react/components/BadgeWrap.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function WrapExample() {
  return (
    <>
      <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
      </BadgeWrap>
      <BadgeWrap>
        <Button
          variant="ghost"
          iconOnly
          ariaLabel="메시지"
          iconBefore={
            <Icon>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </Icon>
          }
        />
        <Badge count color="danger" ariaLabel="새 메시지 12건" label="12" />
      </BadgeWrap>
      <BadgeWrap>
        <Avatar color="primary" initials="홍" ariaHidden />
        <Badge dotOnly color="success" ariaLabel="온라인" />
      </BadgeWrap>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <>
      <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
      </BadgeWrap>
      <BadgeWrap>
        <Button
          variant="ghost"
          iconOnly
          ariaLabel="메시지"
          iconBefore={
            <Icon>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </Icon>
          }
        />
        <Badge count color="danger" ariaLabel="새 메시지 12건" label="12" />
      </BadgeWrap>
      <BadgeWrap>
        <Avatar color="primary" initials="홍" ariaHidden />
        <Badge dotOnly color="success" ariaLabel="온라인" />
      </BadgeWrap>
    </>,
  ),
};

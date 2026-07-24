import React from 'react';
import { avatarSample } from '@images';
import Avatar from './Avatar.jsx';
import AvatarGroup from './AvatarGroup.jsx';
import Icon from './Icon.jsx';
import { bindComponent, withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  avatarClassColumns,
  avatarClasses,
  avatarGroupPropColumns,
  avatarGroupProps,
  avatarPropColumns,
  avatarProps,
  avatarTokenColumns,
  avatarTokens,
} from '@doc-data/avatar-api';

const avatarChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const avatarChildren = [
  { name: 'initials', description: '이니셜 텍스트 (이미지·아이콘 없을 때)' },
  { name: 'icon', description: '아이콘 콘텐츠 (Vue #icon 슬롯 대응, avatar_icon 클래스)' },
];

const avatarGroupChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const avatarGroupChildren = [
  { name: 'children', description: 'Avatar 자식 목록 (Vue default 슬롯 대응)' },
];

const apiSections = [
  {
    title: 'API · Avatar Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: badge-color → badgeColor, aria-hidden → ariaHidden)와 동일한 의미입니다.',
    tables: [{ columns: avatarPropColumns, rows: avatarProps, codeColumn: 'name' }],
  },
  {
    title: 'API · AvatarGroup Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: aria-label → ariaLabel)와 동일한 의미입니다.',
    tables: [{ columns: avatarGroupPropColumns, rows: avatarGroupProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Avatar Children',
    description: 'Vue 슬롯(icon)에 대응하는 React prop입니다.',
    tables: [{ columns: avatarChildColumns, rows: avatarChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · AvatarGroup Children',
    description: 'Vue default 슬롯에 대응하는 React children입니다.',
    tables: [{ columns: avatarGroupChildColumns, rows: avatarGroupChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: avatarClassColumns, rows: avatarClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: avatarTokenColumns, rows: avatarTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  src: avatarSample,
  alt: '홍길동',
  initials: '홍',
  color: 'primary',
  size: 'md',
  square: false,
  badgeColor: '',
  badgeLabel: '온라인',
  ariaHidden: false,
};

export default {
  title: 'Components/데이터 표시/Avatar',
  id: 'components-avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', type: { name: 'string', summary: 'string' } },
    alt: { control: 'text', type: { name: 'string', summary: 'string' } },
    initials: { control: 'text', type: { name: 'string', summary: 'string' } },
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
      options: ['sm', 'md', 'lg', 'xl'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | 'xl'" },
    },
    square: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    badgeColor: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger'],
      labels: { '': '없음', success: 'success', warning: 'warning', danger: 'danger' },
      type: { name: 'enum', summary: "'success' | 'warning' | 'danger'" },
    },
    badgeLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
    ariaHidden: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          '사용자·엔티티를 나타내는 프로필 이미지, 이니셜, 아이콘 표시 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: bindComponent(Avatar),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { avatarSample } from '@images';

export function BasicExample() {
  return (
    <>
      <Avatar src={avatarSample} alt="홍길동" />
      <Avatar color="primary" initials="홍" ariaHidden />
      <Avatar
        color="default"
        ariaHidden
        icon={<Icon name="user" className="avatar_icon" />}
      />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Avatar src={avatarSample} alt="홍길동" />
      <Avatar color="primary" initials="홍" ariaHidden />
      <Avatar
        color="default"
        ariaHidden
        icon={<Icon name="user" className="avatar_icon" />}
      />
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
        story: 'avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function SizeExample() {
  return (
    <>
      <Avatar size="sm" color="primary" initials="A" ariaHidden />
      <Avatar color="primary" initials="B" ariaHidden />
      <Avatar size="lg" color="primary" initials="C" ariaHidden />
      <Avatar size="xl" color="primary" initials="D" ariaHidden />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Avatar size="sm" color="primary" initials="A" ariaHidden />
      <Avatar color="primary" initials="B" ariaHidden />
      <Avatar size="lg" color="primary" initials="C" ariaHidden />
      <Avatar size="xl" color="primary" initials="D" ariaHidden />
    </>,
  ),
};

export const Shape = {
  name: '형태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import { avatarSample } from '@images';

export function ShapeExample() {
  return (
    <>
      <Avatar color="primary" initials="원" ariaHidden />
      <Avatar square color="primary" initials="각" ariaHidden />
      <Avatar square src={avatarSample} alt="홍길동" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Avatar color="primary" initials="원" ariaHidden />
      <Avatar square color="primary" initials="각" ariaHidden />
      <Avatar square src={avatarSample} alt="홍길동" />
    </>,
  ),
};

export const Color = {
  name: '색상',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function ColorExample() {
  return (
    <>
      <Avatar color="default" initials="D" ariaHidden />
      <Avatar color="primary" initials="P" ariaHidden />
      <Avatar color="success" initials="S" ariaHidden />
      <Avatar color="warning" initials="W" ariaHidden />
      <Avatar color="danger" initials="E" ariaHidden />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Avatar color="default" initials="D" ariaHidden />
      <Avatar color="primary" initials="P" ariaHidden />
      <Avatar color="success" initials="S" ariaHidden />
      <Avatar color="warning" initials="W" ariaHidden />
      <Avatar color="danger" initials="E" ariaHidden />
    </>,
  ),
};

export const Badge = {
  name: '상태 배지',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function BadgeExample() {
  return (
    <>
      <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" ariaHidden />
      <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" ariaHidden />
      <Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" ariaHidden />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" ariaHidden />
      <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" ariaHidden />
      <Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" ariaHidden />
    </>,
  ),
};

export const Group = {
  name: '그룹',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'avatar_group으로 여러 아바타를 겹쳐 표시합니다.',
      },
      source: {
        code: `import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import AvatarGroup from '@uxkm/ui-react/components/AvatarGroup.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { avatarSample } from '@images';

export function GroupExample() {
  return (
    <>
      <AvatarGroup ariaLabel="팀 멤버 4명">
        <Avatar color="primary" initials="김" ariaHidden />
        <Avatar color="success" initials="이" ariaHidden />
        <Avatar color="warning" initials="박" ariaHidden />
        <Avatar color="danger" initials="최" ariaHidden />
      </AvatarGroup>
      <AvatarGroup ariaLabel="팀 멤버 3명">
        <Avatar src={avatarSample} alt="홍길동" />
        <Avatar color="primary" initials="홍" ariaHidden />
        <Avatar
          color="default"
          ariaHidden
          icon={<Icon name="plus" className="avatar_icon" />}
        />
      </AvatarGroup>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <AvatarGroup ariaLabel="팀 멤버 4명">
        <Avatar color="primary" initials="김" ariaHidden />
        <Avatar color="success" initials="이" ariaHidden />
        <Avatar color="warning" initials="박" ariaHidden />
        <Avatar color="danger" initials="최" ariaHidden />
      </AvatarGroup>
      <AvatarGroup ariaLabel="팀 멤버 3명">
        <Avatar src={avatarSample} alt="홍길동" />
        <Avatar color="primary" initials="홍" ariaHidden />
        <Avatar
          color="default"
          ariaHidden
          icon={<Icon name="plus" className="avatar_icon" />}
        />
      </AvatarGroup>
    </>,
  ),
};

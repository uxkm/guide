import type { Meta, StoryObj } from '@storybook/react-vite';

import { TypoText, TypoTitle } from '../../react/src/components/basic/Typography/Typography.jsx';
import {
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const Title = TypoTitle as React.ComponentType<any>;
const Text = TypoText as React.ComponentType<any>;

const TEXT_VARIANTS = [
  'text',
  'paragraph',
  'lead',
  'caption',
  'label',
  'overline',
  'code',
  'kbd',
  'pre',
  'strong',
  'italic',
  'underline',
  'delete',
  'mark',
  'sub',
  'sup',
  'small',
  'link',
  'blockquote',
] as const;

type TypographyStoryArgs = {
  kind?: 'title' | 'text';
  level?: 1 | 2 | 3 | 4 | 5;
  label?: string;
  color?: '' | 'default' | 'muted' | 'success' | 'warning' | 'danger' | 'primary';
  variant?: (typeof TEXT_VARIANTS)[number];
  size?: '' | 'xs' | 'sm' | 'lg' | 'xl';
  ellipsis?: 0 | 1 | 2 | 3;
  href?: string;
  cite?: string;
  htmlFor?: string;
};

function titlePropsFromArgs(args: Record<string, unknown>) {
  return {
    level: typeof args.level === 'number' ? args.level : 1,
    color: typeof args.color === 'string' && args.color ? args.color : undefined,
    label: typeof args.label === 'string' ? args.label : undefined,
  };
}

function textPropsFromArgs(args: Record<string, unknown>) {
  const href = typeof args.href === 'string' && args.href ? args.href : undefined;
  const cite = typeof args.cite === 'string' && args.cite ? args.cite : undefined;
  const htmlFor = typeof args.htmlFor === 'string' && args.htmlFor ? args.htmlFor : undefined;
  const ellipsis = typeof args.ellipsis === 'number' && args.ellipsis > 0 ? args.ellipsis : undefined;

  return {
    variant: args.variant,
    color: typeof args.color === 'string' && args.color ? args.color : undefined,
    size: args.size === 'xs' || args.size === 'sm' || args.size === 'lg' || args.size === 'xl' ? args.size : '',
    label: typeof args.label === 'string' ? args.label : undefined,
    ...(ellipsis ? { ellipsis } : {}),
    ...(href ? { href } : {}),
    ...(cite ? { cite } : {}),
    ...(htmlFor ? { htmlFor } : {}),
  };
}

const typographyControlKeys = [
  'kind',
  'level',
  'label',
  'color',
  'variant',
  'size',
  'ellipsis',
  'href',
  'cite',
  'htmlFor',
] as const;

const meta = {
  title: '기본 요소/Typography',
  component: Title,
  parameters: {
    layout: 'fullscreen',
    controls: { include: [...typographyControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    kind: 'title',
    level: 1,
    label: 'Controls로 속성을 조절해 보세요.',
    color: '',
    variant: 'text',
    size: '',
    ellipsis: 0,
    href: '#',
    cite: '',
    htmlFor: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    kind: {
      control: 'select',
      options: ['title', 'text'],
      labels: { title: 'TypoTitle', text: 'TypoText' },
      type: 'string',
      description: 'Playground 대상 컴포넌트',
    },
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      type: 'number',
      description: 'TypoTitle 제목 단계',
      if: { arg: 'kind', eq: 'title' },
    },
    label: { ...stringControlArg, description: 'children 없을 때 표시 텍스트' },
    color: {
      control: 'select',
      options: ['', 'default', 'muted', 'success', 'warning', 'danger', 'primary'],
      labels: { '': '없음' },
      type: 'string',
      description: '색상',
    },
    variant: {
      control: 'select',
      options: [...TEXT_VARIANTS],
      type: 'string',
      description: 'TypoText 변형',
      if: { arg: 'kind', eq: 'text' },
    },
    size: {
      control: 'select',
      options: ['', 'xs', 'sm', 'lg', 'xl'],
      labels: { '': '기본' },
      type: 'string',
      description: 'TypoText 크기',
      if: { arg: 'kind', eq: 'text' },
    },
    ellipsis: {
      control: 'select',
      options: [0, 1, 2, 3],
      type: 'number',
      description: '말줄임 줄 수 (0 = 없음)',
      if: { arg: 'kind', eq: 'text' },
    },
    href: {
      ...stringControlArg,
      description: 'link 변형 주소',
      if: { arg: 'kind', eq: 'text' },
    },
    cite: {
      ...stringControlArg,
      description: 'blockquote 인용 출처',
      if: { arg: 'kind', eq: 'text' },
    },
    htmlFor: {
      ...stringControlArg,
      description: 'label 변형 for 연결',
      if: { arg: 'kind', eq: 'text' },
    },
    onClick: { table: { disable: true } },
  },
} satisfies Meta<TypographyStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Demo>
      {args.kind === 'text' ? (
        <Text {...textPropsFromArgs(args)} />
      ) : (
        <Title {...titlePropsFromArgs(args)} />
      )}
    </Demo>
  ),
};

export const Titles: Story = {
  name: '제목',
  render: () => (
    <Demo>
      <div className="typo_stack-lg">
        {([1, 2, 3, 4, 5] as const).map((level) => (
          <Title key={level} level={level}>
            h{level}. 제목 레벨 {level}
          </Title>
        ))}
      </div>
    </Demo>
  ),
};

export const Body: Story = {
  name: '본문',
  render: () => (
    <Demo>
      <p>
        기본 본문 텍스트입니다. 인라인으로{' '}
        <Text tag="span" color="muted">
          보조 설명
        </Text>
        을 함께 쓸 수 있습니다.
      </p>
      <div>
        <Text variant="paragraph">
          typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다.
        </Text>
        <Text variant="paragraph">두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다.</Text>
      </div>
    </Demo>
  ),
};

export const Colors: Story = {
  name: '색상 타입',
  render: () => (
    <Demo>
      {(
        [
          ['default', '기본 텍스트 (Default)'],
          ['muted', '보조 텍스트 (Muted)'],
          ['success', '성공 메시지 (Success)'],
          ['warning', '주의 메시지 (Warning)'],
          ['danger', '오류 메시지 (Danger)'],
          ['primary', '강조 텍스트 (Primary)'],
        ] as const
      ).map(([color, label]) => (
        <Text key={color} color={color}>
          {label}
        </Text>
      ))}
    </Demo>
  ),
};

export const Sizes: Story = {
  name: '크기',
  render: () => (
    <Demo>
      {(
        [
          ['xs', 'Extra Small — 0.75rem'],
          ['sm', 'Small — 0.8125rem'],
          ['', 'Base — 0.875rem (기본)'],
          ['lg', 'Large — 1rem'],
          ['xl', 'Extra Large — 1.125rem'],
        ] as const
      ).map(([size, label]) => (
        <Text key={size || 'base'} size={size}>
          {label}
        </Text>
      ))}
    </Demo>
  ),
};

export const InlineStyles: Story = {
  name: '텍스트 스타일',
  render: () => (
    <Demo>
      <p>
        <Text variant="strong">굵은 텍스트</Text>와 <Text variant="italic">기울임 텍스트</Text>,{' '}
        <Text variant="underline">밑줄 텍스트</Text>, <Text variant="delete">취소선 텍스트</Text>를 함께
        사용할 수 있습니다.
      </p>
      <p>
        <Text variant="mark">형광펜 강조</Text>와 <Text variant="code">inline code</Text> 표현도 지원합니다.
      </p>
      <p className="color_muted">
        조합 예시: <Text variant="strong" color="danger">중요 경고</Text>,{' '}
        <Text variant="italic" color="primary">강조 설명</Text>
      </p>
    </Demo>
  ),
};

export const SubSupSmall: Story = {
  name: '아래첨자 · 위첨자 · 소문자',
  render: () => (
    <Demo>
      <p>
        화학식 H
        <Text variant="sub">2</Text>O, 수식 x
        <Text variant="sup">2</Text> + y
        <Text variant="sup">2</Text> = z
        <Text variant="sup">2</Text>
        처럼 표현합니다.
      </p>
      <p>
        각주
        <Text variant="sup">1</Text>나 제곱미터 m
        <Text variant="sup">2</Text> 단위에도 활용합니다.
      </p>
      <p>
        <Text variant="small">※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다.</Text>
      </p>
    </Demo>
  ),
};

export const Ellipsis: Story = {
  name: '말줄임',
  render: () => (
    <Demo>
      <div style={{ maxWidth: 320, width: '100%' }}>
        <Text ellipsis={1}>
          1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet.
        </Text>
        <Text ellipsis={2}>
          2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와
          데모를 제공합니다.
        </Text>
        <Text ellipsis={3}>
          3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데
          중요한 역할을 합니다.
        </Text>
      </div>
    </Demo>
  ),
};

export const Quote: Story = {
  name: '인용',
  render: () => (
    <Demo>
      <Text variant="blockquote" color="muted" cite="https://example.com">
        좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요.
      </Text>
    </Demo>
  ),
};

export const Lists: Story = {
  name: '목록',
  render: () => (
    <Demo>
      <ul className="typo_list">
        <li>디자인 토큰 정의</li>
        <li>컴포넌트 문서화</li>
        <li>접근성 검토</li>
      </ul>
      <ol className="typo_list-ordered">
        <li>요구사항 분석</li>
        <li>와이어프레임 작성</li>
        <li>프로토타입 검증</li>
      </ol>
    </Demo>
  ),
};

export const Links: Story = {
  name: '링크',
  render: () => (
    <Demo>
      <Text variant="paragraph">
        자세한 내용은{' '}
        <Text variant="link" href="#">
          가이드 문서
        </Text>
        를 참고하세요. <Text tag="span" color="muted">또는</Text>{' '}
        <Text variant="link" href="#" size="sm">
          작은 링크
        </Text>
        로 이동할 수 있습니다.
      </Text>
    </Demo>
  ),
};

export const SupportingText: Story = {
  name: '리드 · 캡션 · 레이블',
  render: () => (
    <Demo>
      <div style={{ maxWidth: '32rem', width: '100%' }}>
        <div className="typo_stack-lg">
          <Text variant="overline">가이드 소개</Text>
          <Title level={3}>UXKM Components</Title>
          <Text variant="lead">UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다.</Text>
          <Text variant="caption">마지막 업데이트: 2026-08-11</Text>
        </div>
        <div>
          <Text variant="label" htmlFor="typography-email">
            이메일
          </Text>
          <input className="input" id="typography-email" placeholder="name@example.com" type="email" />
          <Text variant="caption" style={{ marginTop: '0.25rem' }}>
            가입 시 사용한 이메일 주소를 입력하세요.
          </Text>
        </div>
      </div>
    </Demo>
  ),
};

export const TitleColors: Story = {
  name: '제목 색상',
  render: () => (
    <Demo>
      {(['primary', 'success', 'danger', 'muted'] as const).map((color) => (
        <Title key={color} level={3} color={color}>
          {color[0].toUpperCase() + color.slice(1)} 제목
        </Title>
      ))}
    </Demo>
  ),
};

const markup = `<button class="btn btn_filled color_primary">\n  <span class="btn_label">저장</span>\n</button>`;

export const KeyboardCode: Story = {
  name: '키보드 · 코드 블록',
  render: () => (
    <Demo>
      <p>
        저장하려면 <Text variant="kbd">⌘</Text> + <Text variant="kbd">S</Text>를 누르세요. 검색은{' '}
        <Text variant="kbd">Ctrl</Text> + <Text variant="kbd">K</Text>입니다.
      </p>
      <Text variant="pre">
        <code>{markup}</code>
      </Text>
    </Demo>
  ),
};

export const NestedLists: Story = {
  name: '중첩 목록',
  render: () => (
    <Demo>
      <ul className="typo_list">
        <li>
          레이아웃
          <ul className="typo_list">
            <li>Container</li>
            <li>Grid</li>
          </ul>
        </li>
        <li>
          기본 요소
          <ul className="typo_list">
            <li>Button</li>
            <li>Typography</li>
          </ul>
        </li>
      </ul>
    </Demo>
  ),
};

export const Stack: Story = {
  name: '제목 + 본문 조합',
  render: () => (
    <Demo>
      <div className="typo_stack-lg" style={{ maxWidth: '28rem' }}>
        <Title level={3}>섹션 제목</Title>
        <Text variant="paragraph">
          typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다.
        </Text>
        <Text color="muted" size="sm">
          마지막 업데이트: 2026-08-11
        </Text>
      </div>
      <div className="typo_stack" style={{ maxWidth: '28rem' }}>
        <Title level={4}>작은 스택</Title>
        <Text color="muted">typo_stack은 좁은 간격으로 제목·설명을 묶습니다.</Text>
      </div>
    </Demo>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import ActualLink from '../../react/src/components/basic/Link/Link.jsx';
import {
  ariaLabelArg,
  booleanControlArg,
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const Link = ActualLink as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const icon = (name: string) => <Icon className="link_icon" name={name} />;
const avatar =
  'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%228%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2212%22%20r%3D%225%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M7%2029a9%209%200%200%201%2018%200%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E';

type LinkStoryArgs = {
  label?: string;
  href?: string;
  as?: 'a' | 'button';
  color?: 'primary' | 'muted' | 'success' | 'warning' | 'danger' | 'info';
  size?: '' | 'sm' | 'lg' | 'xl';
  target?: string;
  rel?: string;
  ariaLabel?: string;
  ripple?: boolean;
  underline?: boolean;
  noUnderline?: boolean;
  standalone?: boolean;
  nav?: boolean;
  block?: boolean;
  back?: boolean;
  iconOnly?: boolean;
  active?: boolean;
  disabled?: boolean;
};

function linkPropsFromArgs(args: Record<string, unknown>) {
  const target = typeof args.target === 'string' && args.target ? args.target : undefined;
  const rel = typeof args.rel === 'string' && args.rel ? args.rel : undefined;
  const ariaLabel = typeof args.ariaLabel === 'string' && args.ariaLabel ? args.ariaLabel : undefined;

  return {
    label: typeof args.label === 'string' ? args.label : undefined,
    href: typeof args.href === 'string' ? args.href : undefined,
    as: args.as === 'button' ? 'button' : 'a',
    color: args.color,
    size: args.size === 'sm' || args.size === 'lg' || args.size === 'xl' ? args.size : '',
    ripple: args.ripple !== false,
    underline: args.underline === true,
    noUnderline: args.noUnderline === true,
    standalone: args.standalone === true,
    nav: args.nav === true,
    block: args.block === true,
    back: args.back === true,
    iconOnly: args.iconOnly === true,
    active: args.active === true,
    disabled: args.disabled === true,
    ...(target ? { target } : {}),
    ...(rel ? { rel } : {}),
    ...(ariaLabel ? { ariaLabel } : {}),
  };
}

const linkControlKeys = [
  'label',
  'href',
  'as',
  'color',
  'size',
  'target',
  'rel',
  'ariaLabel',
  'ripple',
  'underline',
  'noUnderline',
  'standalone',
  'nav',
  'block',
  'back',
  'iconOnly',
  'active',
  'disabled',
] as const;

const meta = {
  title: '기본 요소/Link',
  component: Link,
  parameters: {
    layout: 'fullscreen',
    controls: { include: [...linkControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    label: 'Controls로 속성을 조절해 보세요.',
    href: '#',
    color: 'primary',
    size: '',
    target: '',
    rel: '',
    ariaLabel: '',
    ripple: true,
    underline: false,
    noUnderline: false,
    standalone: false,
    nav: false,
    block: false,
    back: false,
    iconOnly: false,
    active: false,
    disabled: false,
    as: 'a',
  },
  argTypes: {
    ...hiddenArgTypes,
    label: { ...stringControlArg, description: '링크 텍스트' },
    href: { ...stringControlArg, description: '링크 주소' },
    as: {
      control: 'select',
      options: ['a', 'button'],
      type: 'string',
      description: '루트 요소',
    },
    color: {
      control: 'select',
      options: ['primary', 'muted', 'success', 'warning', 'danger', 'info'],
      type: 'string',
      description: '색상',
    },
    size: {
      control: 'select',
      options: ['', 'sm', 'lg', 'xl'],
      labels: { '': '기본' },
      type: 'string',
      description: '크기',
    },
    target: { ...stringControlArg, description: 'target 속성' },
    rel: { ...stringControlArg, description: 'rel 속성' },
    ariaLabel: { ...ariaLabelArg, description: '아이콘 전용 접근성 이름' },
    ripple: { ...booleanControlArg, description: '클릭 리플 효과' },
    underline: { ...booleanControlArg, description: '항상 밑줄' },
    noUnderline: { ...booleanControlArg, description: '밑줄 없음' },
    standalone: { ...booleanControlArg, description: '터치 영역 확대' },
    nav: { ...booleanControlArg, description: '내비게이션 스타일' },
    block: { ...booleanControlArg, description: '블록형' },
    back: { ...booleanControlArg, description: '뒤로가기 스타일' },
    iconOnly: { ...booleanControlArg, description: '아이콘만 표시' },
    active: { ...booleanControlArg, description: '현재 페이지 활성' },
    disabled: { ...booleanControlArg, description: '비활성' },
    icon: { table: { disable: true } },
    iconAfter: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} satisfies Meta<LinkStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Row = ({ children }: { children: React.ReactNode }) => <div className="link_row">{children}</div>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Demo>
      <Link {...linkPropsFromArgs(args)} />
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: () => (
    <Demo>
      <Row>
        <Link href="#">더 보기</Link>
        <Link href="#">가이드 문서</Link>
        <Link href="#" underline>
          항상 밑줄
        </Link>
      </Row>
    </Demo>
  ),
};

export const CustomContent: Story = {
  name: '이미지 · 아이콘 · 커스텀 요소',
  render: () => (
    <Demo>
      <Row>
        <Link href="#" icon={icon('user')}>
          프로필
        </Link>
        <Link href="#">
          <img alt="" className="link_media" src={avatar} /> 사용자 정보
        </Link>
        <Link as="button" icon={icon('settings')}>
          설정 열기
        </Link>
      </Row>
    </Demo>
  ),
};

export const Colors: Story = {
  name: '색상',
  render: () => (
    <Demo>
      <Row>
        {(['primary', 'muted', 'success', 'warning', 'danger', 'info'] as const).map((color) => (
          <Link key={color} href="#" color={color}>
            {color[0].toUpperCase() + color.slice(1)}
          </Link>
        ))}
      </Row>
    </Demo>
  ),
};

export const Sizes: Story = {
  name: '크기',
  render: () => (
    <Demo>
      <Row>
        {(
          [
            ['sm', 'Small'],
            ['', 'Base'],
            ['lg', 'Large'],
            ['xl', 'Extra Large'],
          ] as const
        ).map(([size, text]) => (
          <Link key={size || 'base'} href="#" size={size}>
            {text}
          </Link>
        ))}
      </Row>
    </Demo>
  ),
};

export const Styles: Story = {
  name: '스타일',
  render: () => (
    <Demo>
      <Row>
        <Link href="#">기본 (hover 밑줄)</Link>
        <Link href="#" underline>
          항상 밑줄
        </Link>
        <Link href="#" noUnderline>
          밑줄 없음
        </Link>
        <Link href="#" standalone>
          터치 영역 확대
        </Link>
      </Row>
    </Demo>
  ),
};

export const Navigation: Story = {
  name: '내비게이션',
  render: () => (
    <Demo>
      <nav aria-label="섹션 내비게이션" className="link_group-inline">
        <Link href="#" nav active>
          개요
        </Link>
        <Link href="#" nav>
          컴포넌트
        </Link>
        <Link href="#" nav>
          토큰
        </Link>
        <Link href="#" nav>
          접근성
        </Link>
      </nav>
      <Link href="#" back icon={icon('arrow-left')}>
        목록으로 돌아가기
      </Link>
    </Demo>
  ),
};

export const BlockGroup: Story = {
  name: '블록 · 그룹',
  render: () => (
    <Demo>
      <div className="link_group" style={{ maxWidth: 280, width: '100%' }}>
        <Link href="#" block icon={icon('book')}>
          가이드 시작하기
        </Link>
        <Link href="#" block icon={icon('download')}>
          파일 다운로드
        </Link>
        <Link href="#" block color="muted" icon={icon('settings')}>
          환경 설정
        </Link>
      </div>
    </Demo>
  ),
};

export const IconOnly: Story = {
  name: '아이콘 전용',
  render: () => (
    <Demo>
      <Row>
        <Link href="#" ariaLabel="검색" icon={icon('search')} iconOnly />
        <Link href="#" ariaLabel="편집" icon={icon('edit')} iconOnly />
        <Link href="#" ariaLabel="더 보기" color="muted" icon={icon('settings')} iconOnly />
      </Row>
    </Demo>
  ),
};

export const WithIcon: Story = {
  name: '아이콘',
  render: () => (
    <Demo>
      <Row>
        <Link href="#" icon={icon('download')}>
          다운로드
        </Link>
        <Link href="#" iconAfter={icon('external')}>
          외부 링크
        </Link>
        <Link href="#" back icon={icon('arrow-left')}>
          이전 페이지
        </Link>
      </Row>
    </Demo>
  ),
};

export const External: Story = {
  name: '새 창 열기',
  render: () => (
    <Demo>
      <Link href="https://example.com" iconAfter={icon('external')} rel="noopener noreferrer" target="_blank">
        외부 사이트 열기 <span className="sr_only">(새 창)</span>
      </Link>
    </Demo>
  ),
};

export const Disabled: Story = {
  name: '비활성',
  render: () => (
    <Demo>
      <Row>
        <Link href="#" disabled>
          비활성 링크
        </Link>
        <Link as="button" disabled>
          비활성 버튼형 링크
        </Link>
      </Row>
    </Demo>
  ),
};

export const Context: Story = {
  name: '문맥 속 사용',
  render: () => (
    <Demo>
      <div className="alert color_info" role="status">
        <div>
          <strong>업데이트 안내</strong>
          <p>새 버전의 변경 사항을 확인하세요.</p>
          <Link href="#" size="sm">
            릴리스 노트 보기
          </Link>
        </div>
      </div>
      <p>
        아직 계정이 없나요? <Link href="#">회원가입</Link>
      </p>
    </Demo>
  ),
};

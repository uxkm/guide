import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  booleanControlArg,
  hiddenArgTypes,
  numberControlArg,
  stringControlArg,
} from './shared/storyArgTypes';
import ActualAffix from '../../react/src/components/miscellaneous/Affix/Affix.jsx';

const Affix = ActualAffix as React.ComponentType<any>;
const filler = [
  '배송지와 결제 정보를 확인하세요.',
  '상품 정보 · 배송비 · 요청 사항',
  '교환·반품 안내',
  '고객센터 · FAQ',
  '관련 상품 · 최근 본 상품',
  '알림 설정 · 로그인 기록',
];

function Bar({ label = '주문 #ORD-2024-0815' }: { label?: string }) {
  return (
    <>
      <span className="affix_bar-label">{label}</span>
      <div className="affix_bar-actions">
        <button type="button" className="btn btn_outline btn_sm">
          취소
        </button>
        <button type="button" className="btn btn_filled color_primary btn_sm">
          확인
        </button>
      </div>
    </>
  );
}

function Demo({
  id,
  children,
  bottom = false,
}: {
  id: string;
  children: React.ReactNode;
  bottom?: boolean;
}) {
  return (
    <div className="affix_demo-narrow">
      <div id={id} className="affix_demo-scroll">
        <div className="affix_demo-content">
          <p>아래 영역을 스크롤해 고정 동작을 확인하세요.</p>
          {bottom ? filler.map((text, i) => <p key={i}>{text}</p>) : null}
          {children}
          {!bottom ? filler.map((text, i) => <p key={i}>{text}</p>) : null}
        </div>
      </div>
    </div>
  );
}

type AffixStoryArgs = {
  skin?: '' | 'bar' | 'anchor';
  offsetTop?: number;
  offsetBottom?: number;
  interactive?: boolean;
  target?: string;
};

function mapAffixArgs(args: Record<string, unknown>) {
  const { children: _children, style: _style, offsetTop, offsetBottom, ...rest } = args;
  const top = typeof offsetTop === 'number' && Number.isFinite(offsetTop) ? offsetTop : Number(offsetTop) || 0;
  const bottom =
    offsetBottom === '' || offsetBottom == null
      ? undefined
      : typeof offsetBottom === 'number' && Number.isFinite(offsetBottom)
        ? offsetBottom
        : Number(offsetBottom);

  return {
    ...rest,
    offsetTop: top,
    ...(Number.isFinite(bottom) && bottom !== 0 ? { offsetBottom: bottom } : {}),
  };
}

const meta = {
  title: '기타/Affix',
  component: Affix,
  parameters: {
    layout: 'padded',
    controls: { include: ['skin', 'offsetTop', 'offsetBottom', 'interactive'] },
    docs: { extractArgTypes: () => ({}) },
  },
  decorators: [(Story) => <div className="affix-story-demo"><Story /></div>],
  args: {
    skin: 'bar',
    offsetTop: 0,
    offsetBottom: 0,
    interactive: true,
  },
  argTypes: {
    ...hiddenArgTypes,
    skin: {
      control: 'select',
      options: ['', 'bar', 'anchor'],
      labels: { '': '없음', bar: 'bar', anchor: 'anchor' },
      type: 'string',
    },
    offsetTop: {
      ...numberControlArg,
      description: '상단 고정 오프셋 (px)',
    },
    offsetBottom: {
      ...numberControlArg,
      description: '하단 고정 오프셋 (px). 0이면 미적용',
    },
    interactive: booleanControlArg,
    target: { ...stringControlArg, table: { disable: true } },
  },
} satisfies Meta<AffixStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: { skin: 'bar', offsetTop: 0, offsetBottom: 0, interactive: true },
  render: (args) => (
    <Demo id="affix-playground">
      <Affix {...mapAffixArgs(args)} target="#affix-playground">
        <Bar />
      </Affix>
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: () => (
    <Demo id="affix-basic">
      <Affix target="#affix-basic" skin="bar">
        <Bar />
      </Affix>
    </Demo>
  ),
};

export const Offset: Story = {
  name: '상단 오프셋',
  render: () => (
    <Demo id="affix-offset">
      <Affix target="#affix-offset" offsetTop={12} skin="bar">
        <Bar label="상단에서 12px 떨어진 툴바" />
      </Affix>
    </Demo>
  ),
};

export const Anchor: Story = {
  name: '앵커 내비게이션',
  render: () => (
    <Demo id="affix-anchor">
      <Affix target="#affix-anchor" skin="anchor">
        <nav aria-label="설정 섹션">
          <a className="link color_primary" href="#profile">
            프로필
          </a>
          <a className="link" href="#security">
            보안
          </a>
          <a className="link" href="#notice">
            알림
          </a>
          <a className="link" href="#billing">
            결제
          </a>
        </nav>
      </Affix>
    </Demo>
  ),
};

export const Bottom: Story = {
  name: '하단 고정',
  render: () => (
    <Demo id="affix-bottom" bottom>
      <Affix target="#affix-bottom" offsetBottom={0} skin="bar">
        <Bar label="합계 ₩78,000" />
      </Affix>
    </Demo>
  ),
};

export const WindowScroll: Story = {
  name: '페이지 스크롤',
  render: () => (
    <Demo id="affix-page">
      <Affix
        target="#affix-page"
        skin="bar"
        style={
          { '--affix-bar-bg': 'color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))' } as React.CSSProperties
        }
      >
        <Bar label="신규 컴포넌트 가이드가 업데이트되었습니다" />
      </Affix>
    </Demo>
  ),
};

import React from 'react';
import Collapse from './Collapse.jsx';
import CollapseExternal from './CollapseExternal.jsx';
import CollapsePanel from './CollapsePanel.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  collapseClassColumns,
  collapseClasses,
  collapseExternalPropColumns,
  collapseExternalProps,
  collapseExternalSlots,
  collapsePropColumns,
  collapseProps,
  collapsePanelPropColumns,
  collapsePanelProps,
  collapsePanelSlots,
  collapseSlotColumns,
} from '@doc-data/collapse-api';

const childColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const collapseChildren = [{ name: 'children', description: 'CollapsePanel 나열' }];

const collapsePanelChildren = [
  { name: 'children', description: '패널 본문 (content prop 대체)' },
  { name: 'extra', description: '트리거 오른쪽 보조 정보' },
];

const collapseExternalChildren = [
  { name: 'lead', description: '트리거 위 안내 텍스트' },
  { name: 'children', description: '접히는 본문 영역' },
];

const apiSections = [
  {
    title: 'API · CollapseExternal Props',
    description: 'React에서는 camelCase prop을 사용합니다. (trigger-label → triggerLabel)',
    tables: [
      {
        columns: collapseExternalPropColumns,
        rows: collapseExternalProps,
        codeColumn: 'name',
      },
    ],
  },
  {
    title: 'API · CollapseExternal Children',
    description: 'Vue 슬롯은 React lead · children prop으로 다룹니다.',
    tables: [
      { columns: collapseSlotColumns, rows: collapseExternalSlots, codeColumn: 'name' },
      { columns: childColumns, rows: collapseExternalChildren, codeColumn: 'name' },
    ],
  },
  {
    title: 'API · Collapse Props',
    tables: [{ columns: collapsePropColumns, rows: collapseProps, codeColumn: 'name' }],
  },
  {
    title: 'API · CollapsePanel Props',
    description: 'Vue의 extra-code는 React extraCode입니다.',
    tables: [
      { columns: collapsePanelPropColumns, rows: collapsePanelProps, codeColumn: 'name' },
    ],
  },
  {
    title: 'API · CollapsePanel Children',
    description: 'Vue 슬롯은 React children · extra prop으로 다룹니다.',
    tables: [
      { columns: collapseSlotColumns, rows: collapsePanelSlots, codeColumn: 'name' },
      { columns: childColumns, rows: collapsePanelChildren, codeColumn: 'name' },
    ],
  },
  {
    title: 'API · Collapse Children',
    tables: [{ columns: childColumns, rows: collapseChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: collapseClassColumns, rows: collapseClasses, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  variant: 'bordered',
  size: 'md',
  accordion: false,
  narrow: false,
};

function OrderDetailList() {
  return (
    <dl
      className="list list_definition list_inline list_block list_compact"
      style={{
        '--list-inline-label-width': 'auto',
        '--list-inline-gap': '1rem',
      }}
    >
      <dt className="list_title">주문번호</dt>
      <dd className="list_desc">ORD-2024-0815</dd>
      <dt className="list_title">결제금액</dt>
      <dd className="list_desc">₩42,000</dd>
      <dt className="list_title">배송지</dt>
      <dd className="list_desc">서울특별시 강남구 테헤란로 123</dd>
    </dl>
  );
}

export default {
  title: 'Components/기타/Collapse',
  id: 'components-collapse',
  component: Collapse,
  subcomponents: { CollapsePanel, CollapseExternal },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bordered', 'ghost', 'card'],
      type: { name: 'enum', summary: "'bordered' | 'ghost' | 'card'" },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    accordion: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    narrow: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '접이식 패널 그룹 Collapse 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Collapse {...args}>
      <CollapsePanel label="패널 1" open content="내용 1" />
      <CollapsePanel label="패널 2" content="내용 2" />
    </Collapse>
  ),
};

export const Standalone = {
  name: '외부 트리거',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'CollapseExternal로 버튼과 접힘 영역을 연결합니다. 상세 설명·추가 옵션 등에 적합합니다.',
      },
      source: {
        code: `import CollapseExternal from '@uxkm/ui-react/components/CollapseExternal.jsx';

export function StandaloneExample() {
  return (
    <CollapseExternal
      triggerLabel="주문 상세 보기"
      narrow
      lead={
        <p style={{ margin: '0 0 var(--space-md)' }}>
          주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
        </p>
      }
    >
      <dl
        className="list list_definition list_inline list_block list_compact"
        style={{
          '--list-inline-label-width': 'auto',
          '--list-inline-gap': '1rem',
        }}
      >
        <dt className="list_title">주문번호</dt>
        <dd className="list_desc">ORD-2024-0815</dd>
        <dt className="list_title">결제금액</dt>
        <dd className="list_desc">₩42,000</dd>
        <dt className="list_title">배송지</dt>
        <dd className="list_desc">서울특별시 강남구 테헤란로 123</dd>
      </dl>
    </CollapseExternal>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <CollapseExternal
      triggerLabel="주문 상세 보기"
      narrow
      lead={
        <p style={{ margin: '0 0 var(--space-md)' }}>
          주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.
        </p>
      }
    >
      <OrderDetailList />
    </CollapseExternal>,
  ),
};

export const Basic = {
  name: '패널 그룹',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'collapse_bordered가 기본 스킨입니다. 각 패널은 독립적으로 열고 닫을 수 있습니다.',
      },
      source: {
        code: `import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function BasicExample() {
  return (
    <Collapse narrow>
      <CollapsePanel
        label="배송 정보"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <CollapsePanel
        label="결제 수단"
        content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
      />
      <CollapsePanel
        label="교환·반품 안내"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
    </Collapse>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Collapse narrow>
      <CollapsePanel
        label="배송 정보"
        open
        content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <CollapsePanel
        label="결제 수단"
        content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다."
      />
      <CollapsePanel
        label="교환·반품 안내"
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
    </Collapse>,
  ),
};

export const AccordionMode = {
  name: '아코디언 모드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'accordion prop을 지정하면 한 번에 하나의 패널만 열립니다.',
      },
      source: {
        code: `import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function AccordionModeExample() {
  return (
    <Collapse narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Collapse narrow accordion>
      <CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." />
      <CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Collapse>,
  ),
};

export const Skin = {
  name: '스킨',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'collapse_ghost · collapse_card로 외형을 조절합니다.',
      },
      source: {
        code: `import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SkinExample() {
  return (
    <>
      <Collapse variant="ghost" narrow>
        <CollapsePanel
          label="Ghost"
          open
          content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Collapse variant="ghost" narrow>
        <CollapsePanel
          label="Ghost"
          open
          content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다."
        />
      </Collapse>
      <Collapse variant="card" narrow>
        <CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." />
        <CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." />
      </Collapse>
    </>,
  ),
};

export const Extra = {
  name: '보조 텍스트',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'extra prop으로 트리거 오른쪽에 메타 정보를 표시합니다.',
      },
      source: {
        code: `import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function ExtraExample() {
  return (
    <Collapse narrow>
      <CollapsePanel
        label="진행 중"
        open
        content="현재 처리 중인 요청 3건입니다."
        extraCode="3건"
        extra="3건"
      />
      <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Collapse>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Collapse narrow>
      <CollapsePanel
        label="진행 중"
        open
        content="현재 처리 중인 요청 3건입니다."
        extraCode="3건"
        extra="3건"
      />
      <CollapsePanel
        label="처리 완료"
        content="최근 일주일간 완료된 요청 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Collapse>,
  ),
};

export const Disabled = {
  name: '비활성',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다.',
      },
      source: {
        code: `import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function DisabledExample() {
  return (
    <Collapse narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Collapse>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Collapse narrow>
      <CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <CollapsePanel
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Collapse>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'size prop으로 트리거와 본문 패딩을 조절합니다.',
      },
      source: {
        code: `import Collapse from '@uxkm/ui-react/components/Collapse.jsx';
import CollapsePanel from '@uxkm/ui-react/components/CollapsePanel.jsx';

export function SizeExample() {
  return (
    <>
      <Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Collapse size="sm" narrow>
        <CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." />
      </Collapse>
      <Collapse size="lg" narrow>
        <CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." />
      </Collapse>
    </>,
  ),
};

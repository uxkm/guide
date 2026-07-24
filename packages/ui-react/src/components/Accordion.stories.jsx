import React from 'react';
import Accordion from './Accordion.jsx';
import AccordionItem from './AccordionItem.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  accordionClassColumns,
  accordionClasses,
  accordionItemPropColumns,
  accordionItemProps,
  accordionItemSlots,
  accordionPropColumns,
  accordionProps,
  accordionSlotColumns,
  accordionTokenColumns,
  accordionTokens,
} from '@doc-data/accordion-api';

const childColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const accordionChildren = [
  { name: 'children', description: 'AccordionItem 나열' },
];

const accordionItemChildren = [
  { name: 'children', description: '패널 본문 (content prop 대체)' },
  { name: 'extra', description: '트리거 오른쪽 보조 정보 (배지·메타 텍스트)' },
];

const apiSections = [
  {
    title: 'API · Accordion Props',
    description: 'React에서는 camelCase prop을 사용합니다.',
    tables: [{ columns: accordionPropColumns, rows: accordionProps, codeColumn: 'name' }],
  },
  {
    title: 'API · AccordionItem Props',
    description: 'Vue의 extra-code는 React extraCode입니다.',
    tables: [{ columns: accordionItemPropColumns, rows: accordionItemProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Accordion Children',
    tables: [{ columns: childColumns, rows: accordionChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · AccordionItem Children / Slots',
    description: 'Vue 슬롯은 React children · extra prop으로 다룹니다.',
    tables: [
      { columns: accordionSlotColumns, rows: accordionItemSlots, codeColumn: 'name' },
      { columns: childColumns, rows: accordionItemChildren, codeColumn: 'name' },
    ],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: accordionClassColumns, rows: accordionClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: accordionTokenColumns, rows: accordionTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  variant: 'card',
  size: 'md',
  multiple: false,
  narrow: false,
};

export default {
  title: 'Components/기타/Accordion',
  id: 'components-accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bordered', 'flush', 'card'],
      type: { name: 'enum', summary: "'bordered' | 'flush' | 'card'" },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    multiple: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    narrow: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '접이식 패널 그룹 Accordion 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널" />
    </Accordion>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'FAQ처럼 항목 사이 간격이 있는 accordion_card 스킨입니다. 한 번에 하나의 패널만 열리며(단일 모드), 화살표 키로 트리거 간 포커스를 이동할 수 있습니다.',
      },
      source: {
        code: `import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function BasicExample() {
  return (
    <Accordion variant="card" narrow>
      <AccordionItem
        label="배송은 얼마나 걸리나요?"
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        open
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
      <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
      />
    </Accordion>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Accordion variant="card" narrow>
      <AccordionItem
        label="배송은 얼마나 걸리나요?"
        content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다."
      />
      <AccordionItem
        label="교환·반품은 어떻게 하나요?"
        open
        content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다."
      />
      <AccordionItem
        label="해외 배송이 가능한가요?"
        content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다."
      />
    </Accordion>,
  ),
};

export const Multiple = {
  name: '다중 열기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'multiple prop을 지정하면 여러 패널을 동시에 펼칠 수 있습니다.',
      },
      source: {
        code: `import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function MultipleExample() {
  return (
    <Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Accordion narrow multiple>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>,
  ),
};

export const Flush = {
  name: '플러시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'accordion_flush로 외곽 테두리 없이 구분선만 표시합니다. 사이드바·설정 목록에 적합합니다.',
      },
      source: {
        code: `import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function FlushExample() {
  return (
    <Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Accordion variant="flush" narrow>
      <AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." />
      <AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." />
      <AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." />
    </Accordion>,
  ),
};

export const Bordered = {
  name: '보더',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'accordion_bordered로 항목을 한 덩어리로 붙입니다. 설정·목록형 UI에 적합합니다.',
      },
      source: {
        code: `import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function BorderedExample() {
  return (
    <Accordion variant="bordered" narrow>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Accordion variant="bordered" narrow>
      <AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." />
      <AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." />
      <AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." />
    </Accordion>,
  ),
};

export const Extra = {
  name: '보조 정보',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'extra prop으로 배지·메타 텍스트를 트리거 오른쪽에 배치합니다.',
      },
      source: {
        code: `import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function ExtraExample() {
  return (
    <Accordion narrow>
      <AccordionItem
        label="미해결 문의"
        open
        content="답변이 필요한 고객 문의 3건이 있습니다."
        extraCode='<span class="badge badge_count color_danger badge_sm">3</span>'
        extra={<span className="badge badge_count color_danger badge_sm">3</span>}
      />
      <AccordionItem
        label="처리 완료"
        content="최근 일주일간 완료된 문의 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Accordion>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Accordion narrow>
      <AccordionItem
        label="미해결 문의"
        open
        content="답변이 필요한 고객 문의 3건이 있습니다."
        extraCode='<span class="badge badge_count color_danger badge_sm">3</span>'
        extra={<span className="badge badge_count color_danger badge_sm">3</span>}
      />
      <AccordionItem
        label="처리 완료"
        content="최근 일주일간 완료된 문의 12건입니다."
        extraCode="지난 7일"
        extra="지난 7일"
      />
    </Accordion>,
  ),
};

export const Disabled = {
  name: '비활성',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'disabled prop을 지정하면 is-disabled 클래스와 함께 트리거가 비활성화됩니다.',
      },
      source: {
        code: `import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function DisabledExample() {
  return (
    <Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Accordion>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Accordion narrow>
      <AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." />
      <AccordionItem
        label="팀 전용 (권한 없음)"
        disabled
        content="팀 멤버만 접근할 수 있는 내부 문서입니다."
      />
    </Accordion>,
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
        code: `import Accordion from '@uxkm/ui-react/components/Accordion.jsx';
import AccordionItem from '@uxkm/ui-react/components/AccordionItem.jsx';

export function SizeExample() {
  return (
    <>
      <Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Accordion size="sm" narrow>
        <AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." />
      </Accordion>
      <Accordion size="lg" narrow>
        <AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." />
      </Accordion>
    </>,
  ),
};

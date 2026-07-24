import React from 'react';
import Card from './Card.jsx';
import CardBody from './CardBody.jsx';
import CardFooter from './CardFooter.jsx';
import CardHeader from './CardHeader.jsx';
import Stat from './Stat.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  statClassColumns,
  statClasses,
  statPropColumns,
  statProps,
  statSlotColumns,
  statSlots,
  statTokenColumns,
  statTokens,
} from '@doc-data/stat-api';

const TrendDownIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const TeamIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const DownloadIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CheckIcon = (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
);

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 trend-color는 trendColor로 다룹니다.',
    tables: [{ columns: statPropColumns, rows: statProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description:
      'Vue value · trend-icon · default 슬롯은 React value · trendIcon · children에 대응합니다.',
    tables: [{ columns: statSlotColumns, rows: statSlots, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: statClassColumns, rows: statClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: statTokenColumns, rows: statTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  title: '제목',
  value: '1',
  prefix: '',
  suffix: '',
  description: '설명 텍스트입니다.',
  trend: '',
  trendColor: 'success',
  size: 'md',
  card: false,
  shadow: false,
};

export default {
  title: 'Components/데이터 표시/Stat',
  id: 'components-stat',
  component: Stat,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', type: { name: 'string', summary: 'string' } },
    value: { control: 'text', type: { name: 'string', summary: 'string' } },
    prefix: { control: 'text', type: { name: 'string', summary: 'string' } },
    suffix: { control: 'text', type: { name: 'string', summary: 'string' } },
    description: { control: 'text', type: { name: 'string', summary: 'string' } },
    trend: { control: 'text', type: { name: 'string', summary: 'string' } },
    trendColor: {
      control: 'select',
      options: ['success', 'warning', 'danger'],
      type: { name: 'enum', summary: "'success' | 'warning' | 'danger'" },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    card: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    shadow: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '핵심 지표·수치를 표시하는 Stat 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <Stat {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'title · value · description으로 지표를 구성합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function BasicExample() {
  return (
    <Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trendColor="success"
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trendColor="success"
    />,
  ),
};

export const Prefix = {
  name: '접두 · 접미',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'prefix · suffix로 통화·단위를 표시합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function PrefixExample() {
  return (
    <>
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
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
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
    </>,
  ),
};

export const Trend = {
  name: '추세',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'trend로 증감 방향을 아이콘과 함께 표시합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function TrendExample() {
  return (
    <>
      <Stat
        title="월간 매출"
        prefix="₩"
        value="4.2M"
        trend="+8.2%"
        trendColor="success"
        description="전월 대비"
        card
        shadow
      />
      <Stat
        title="이탈률"
        value="2.4"
        suffix="%"
        trend="+0.3%p"
        trendColor="danger"
        trendIcon={TrendDownIcon}
        card
        shadow
      />
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
      <Stat
        title="월간 매출"
        prefix="₩"
        value="4.2M"
        trend="+8.2%"
        trendColor="success"
        description="전월 대비"
        card
        shadow
      />
      <Stat
        title="이탈률"
        value="2.4"
        suffix="%"
        trend="+0.3%p"
        trendColor="danger"
        trendIcon={TrendDownIcon}
        card
        shadow
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
        story: 'size로 수치 스케일을 조절합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function SizeExample() {
  return (
    <>
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
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
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
    </>,
  ),
};

export const Layout = {
  name: '레이아웃',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'stat_horizontal · stat_inline · stat_row로 배치를 변경합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function LayoutExample() {
  return (
    <>
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow>
        <span className="stat_icon-wrap color_primary" aria-hidden="true">
          {TeamIcon}
        </span>
        <div className="stat_body">
          <span className="stat_label">팀 멤버</span>
          <span className="stat_value">48</span>
          <span className="stat_desc color_success">4명 신규 합류</span>
        </div>
      </Stat>
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
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow>
        <span className="stat_icon-wrap color_primary" aria-hidden="true">
          {TeamIcon}
        </span>
        <div className="stat_body">
          <span className="stat_label">팀 멤버</span>
          <span className="stat_value">48</span>
          <span className="stat_desc color_success">4명 신규 합류</span>
        </div>
      </Stat>
    </>,
  ),
};

export const Icon = {
  name: '아이콘',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function IconExample() {
  return (
    <>
      <Stat card>
        <span className="stat_icon color_primary">{DownloadIcon}</span>
        <span className="stat_label">다운로드</span>
        <span className="stat_value">2,847</span>
        <span className="stat_desc color_success">+24%</span>
      </Stat>
      <Stat className="stat_row" card>
        <span className="stat_icon-wrap color_success" aria-hidden="true">
          {CheckIcon}
        </span>
        <div className="stat_body">
          <span className="stat_label">완료율</span>
          <div className="stat_value-row">
            <span className="stat_value">94</span>
            <span className="stat_suffix">%</span>
          </div>
        </div>
      </Stat>
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
      <Stat card>
        <span className="stat_icon color_primary">{DownloadIcon}</span>
        <span className="stat_label">다운로드</span>
        <span className="stat_value">2,847</span>
        <span className="stat_desc color_success">+24%</span>
      </Stat>
      <Stat className="stat_row" card>
        <span className="stat_icon-wrap color_success" aria-hidden="true">
          {CheckIcon}
        </span>
        <div className="stat_body">
          <span className="stat_label">완료율</span>
          <div className="stat_value-row">
            <span className="stat_value">94</span>
            <span className="stat_suffix">%</span>
          </div>
        </div>
      </Stat>
    </>,
  ),
};

export const Skin = {
  name: '스킨',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card · shadow · stat_borderless · stat_accent로 외형을 조절합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function SkinExample() {
  return (
    <div className="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat
        card
        className="stat_accent color_primary"
        title="Accent"
        value="789"
        description="강조 지표"
        trendColor="primary"
      />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <div className="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat
        card
        className="stat_accent color_primary"
        title="Accent"
        value="789"
        description="강조 지표"
        trendColor="primary"
      />
    </div>,
  ),
};

export const Group = {
  name: '그룹',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'stat_group으로 여러 지표를 그리드로 배치합니다.',
      },
      source: {
        code: `import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function GroupExample() {
  return (
    <>
      <div className="stat_group">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div
        className="stat_group stat_group-4 stat_group-divider stat_card stat_shadow"
        style={{ padding: 'var(--space-lg)' }}
      >
        <Stat title="방문" value="24.5K" />
        <Stat title="페이지뷰" value="89.2K" />
        <Stat title="전환" value="1,842" />
        <Stat title="매출" value="₩12M" />
      </div>
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
      <div className="stat_group">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div
        className="stat_group stat_group-4 stat_group-divider stat_card stat_shadow"
        style={{ padding: 'var(--space-lg)' }}
      >
        <Stat title="방문" value="24.5K" />
        <Stat title="페이지뷰" value="89.2K" />
        <Stat title="전환" value="1,842" />
        <Stat title="매출" value="₩12M" />
      </div>
    </>,
  ),
};

export const Context = {
  name: '카드 혼합',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다.',
      },
      source: {
        code: `import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';
import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function ContextExample() {
  return (
    <Card variant="shadow">
      <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
      <CardBody>
        <div className="stat_group stat_group-3">
          <Stat title="매출" prefix="₩" value="12M" trend="+18%" trendColor="success" />
          <Stat title="주문" value="3,456" description="+9.1%" trendColor="success" />
          <Stat title="환불" value="42" description="+3건" trendColor="danger" />
        </div>
      </CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">실시간 갱신</span>
        <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
          상세 보기
        </a>
      </CardFooter>
    </Card>
  );
}`,
        language: 'tsx',
      },
    },
  },
  args: { ...playgroundArgs },
  render: withDocsCanvasRender(
    <Card variant="shadow">
      <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
      <CardBody>
        <div className="stat_group stat_group-3">
          <Stat title="매출" prefix="₩" value="12M" trend="+18%" trendColor="success" />
          <Stat title="주문" value="3,456" description="+9.1%" trendColor="success" />
          <Stat title="환불" value="42" description="+3건" trendColor="danger" />
        </div>
      </CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">실시간 갱신</span>
        <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
          상세 보기
        </a>
      </CardFooter>
    </Card>,
  ),
};

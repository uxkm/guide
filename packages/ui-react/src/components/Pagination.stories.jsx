import React from 'react';
import Pagination from './Pagination.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  paginationClassColumns,
  paginationClasses,
  paginationEventColumns,
  paginationEvents,
  paginationPropColumns,
  paginationProps,
  paginationTokenColumns,
  paginationTokens,
} from '@doc-data/pagination-api';

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 page-size · aria-label · v-model:current는 pageSize · ariaLabel · current + onChange로 다룹니다.',
    tables: [{ columns: paginationPropColumns, rows: paginationProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Events',
    description: 'Vue update:current · change는 React onChange에 대응합니다.',
    tables: [{ columns: paginationEventColumns, rows: paginationEvents, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: paginationClassColumns, rows: paginationClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: paginationTokenColumns, rows: paginationTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  current: 1,
  total: 50,
  pageSize: 10,
  simple: false,
  minimal: false,
  size: 'md',
  round: false,
  ariaLabel: '페이지 이동',
};

export default {
  title: 'Components/네비게이션/Pagination',
  id: 'components-pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number', type: { name: 'number', summary: 'number' } },
    total: { control: 'number', type: { name: 'number', summary: 'number' } },
    pageSize: { control: 'number', type: { name: 'number', summary: 'number' } },
    simple: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    minimal: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    round: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '목록·테이블 등에서 페이지를 이동하는 Pagination 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args, { updateArgs }) => (
    <Pagination {...args} onChange={(next) => updateArgs({ current: next })} />
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '이전·다음 버튼과 페이지 번호로 구성합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function BasicExample() {
  return <Pagination current={1} total={50} pageSize={10} />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Pagination current={1} total={50} pageSize={10} />),
};

export const Minimal = {
  name: '미니멀',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'minimal로 테두리 없는 가벼운 스타일을 적용합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function MinimalExample() {
  return <Pagination current={4} total={50} pageSize={10} minimal />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Pagination current={4} total={50} pageSize={10} minimal />),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'size로 항목 스케일을 조절합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function SizeExample() {
  return (
    <>
      <Pagination current={1} total={20} pageSize={10} size="sm" />
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} size="lg" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Pagination current={1} total={20} pageSize={10} size="sm" />
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} size="lg" />
    </>,
  ),
};

export const Round = {
  name: '둥근',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'round로 pill 형태의 페이지 버튼을 적용합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function RoundExample() {
  return <Pagination current={7} total={80} pageSize={10} round />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Pagination current={7} total={80} pageSize={10} round />),
};

export const Ellipsis = {
  name: '페이지 생략',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '페이지가 많을 때 중간 구간을 생략합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function EllipsisExample() {
  return <Pagination current={10} total={500} pageSize={10} />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Pagination current={10} total={500} pageSize={10} />),
};

export const Simple = {
  name: '심플',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'simple로 이전·다음과 현재/전체 페이지만 표시합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function SimpleExample() {
  return (
    <>
      <Pagination simple current={3} total={120} pageSize={10} />
      <Pagination simple minimal current={1} total={120} pageSize={10} />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Pagination simple current={3} total={120} pageSize={10} />
      <Pagination simple minimal current={1} total={120} pageSize={10} />
    </>,
  ),
};

export const Toolbar = {
  name: '툴바 조합',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function ToolbarExample() {
  return (
    <div className="pagination_wrap">
      <span className="pagination_total">총 128건</span>
      <div className="pagination_wrap-end">
        <Pagination current={5} total={128} pageSize={10} minimal />
        <label className="pagination_jumper">
          이동
          <input
            type="number"
            className="pagination_jumper-input"
            defaultValue={5}
            min={1}
            max={13}
            aria-label="이동할 페이지"
          />
          페이지
        </label>
      </div>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="pagination_wrap">
      <span className="pagination_total">총 128건</span>
      <div className="pagination_wrap-end">
        <Pagination current={5} total={128} pageSize={10} minimal />
        <label className="pagination_jumper">
          이동
          <input
            type="number"
            className="pagination_jumper-input"
            defaultValue={5}
            min={1}
            max={13}
            aria-label="이동할 페이지"
          />
          페이지
        </label>
      </div>
    </div>,
  ),
};

export const Align = {
  name: '정렬',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function AlignExample() {
  return (
    <>
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-center" />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-end" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Pagination current={1} total={20} pageSize={10} />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-center" />
      <Pagination current={1} total={20} pageSize={10} className="pagination_align-end" />
    </>,
  ),
};

export const State = {
  name: '상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다.',
      },
      source: {
        code: `import Pagination from '@uxkm/ui-react/components/Pagination.jsx';

export function StateExample() {
  return (
    <>
      <Pagination current={1} total={30} pageSize={10} />
      <Pagination current={10} total={100} pageSize={10} />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Pagination current={1} total={30} pageSize={10} />
      <Pagination current={10} total={100} pageSize={10} />
    </>,
  ),
};

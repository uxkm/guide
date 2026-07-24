import React from 'react';
import Icon from './Icon.jsx';
import Link from './Link.jsx';
import { bindComponent, withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  linkClassColumns,
  linkClasses,
  linkPropColumns,
  linkProps,
  linkTokenColumns,
  linkTokens,
} from '@doc-data/link-api';

const linkChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const linkChildren = [
  { name: 'label', description: '링크 텍스트. children으로 대체 가능' },
  {
    name: 'children',
    description: '링크 텍스트 (label prop 대체). 아이콘·보조 텍스트를 함께 넣을 수 있음',
  },
  { name: 'icon', description: '텍스트 앞 아이콘 (Vue #icon 슬롯 대응, link_icon 클래스)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: no-underline, aria-label)와 동일한 의미입니다.',
    tables: [{ columns: linkPropColumns, rows: linkProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue 슬롯(default · icon)에 대응하는 React prop·children입니다.',
    tables: [{ columns: linkChildColumns, rows: linkChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: linkClassColumns, rows: linkClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: linkTokenColumns, rows: linkTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  color: 'primary',
  size: '',
  underline: false,
  noUnderline: false,
  standalone: false,
  nav: false,
  block: false,
  back: false,
  iconOnly: false,
  active: false,
  disabled: false,
  label: '라벨',
  href: '#',
  target: '',
  rel: '',
  ariaLabel: '접근성 라벨',
};

export default {
  title: 'Components/기본 요소/Link',
  id: 'components-link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'muted', 'success', 'warning', 'danger'],
      type: {
        name: 'enum',
        summary: "'primary' | 'muted' | 'success' | 'warning' | 'danger'",
      },
    },
    size: {
      control: 'select',
      options: ['', 'sm', 'lg', 'xl'],
      labels: { '': '기본', sm: 'sm', lg: 'lg', xl: 'xl' },
      type: { name: 'enum', summary: "'sm' | 'lg' | 'xl' (기본: base)" },
    },
    underline: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    noUnderline: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    standalone: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    nav: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    back: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    iconOnly: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    active: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
    href: { control: 'text', type: { name: 'string', summary: 'string' } },
    target: { control: 'text', type: { name: 'string', summary: 'string' } },
    rel: { control: 'text', type: { name: 'string', summary: 'string' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          '페이지 이동·액션 트리거용 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 typo_link를 사용합니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: bindComponent(Link),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다.',
      },
      source: {
        code: `import Link from '@uxkm/ui-react/components/Link.jsx';

export function BasicExample() {
  return (
    <>
      <Link label="더 보기" />
      <Link label="가이드 문서" />
      <Link underline label="항상 밑줄" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Link label="더 보기" />
      <Link label="가이드 문서" />
      <Link underline label="항상 밑줄" />
    </>,
  ),
};

export const Color = {
  name: '색상',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.',
      },
      source: {
        code: `import Link from '@uxkm/ui-react/components/Link.jsx';

export function ColorExample() {
  return (
    <div className="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '공통 size_* 클래스로 텍스트 크기를 조절합니다.',
      },
      source: {
        code: `import Link from '@uxkm/ui-react/components/Link.jsx';

export function SizeExample() {
  return (
    <>
      <Link size="sm" label="Small" />
      <Link label="Base" />
      <Link size="lg" label="Large" />
      <Link size="xl" label="Extra Large" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Link size="sm" label="Small" />
      <Link label="Base" />
      <Link size="lg" label="Large" />
      <Link size="xl" label="Extra Large" />
    </>,
  ),
};

export const Style = {
  name: '스타일',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'underline · noUnderline · standalone prop으로 밑줄과 터치 영역을 조절합니다.',
      },
      source: {
        code: `import Link from '@uxkm/ui-react/components/Link.jsx';

export function StyleExample() {
  return (
    <div className="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link noUnderline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link noUnderline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>,
  ),
};

export const Nav = {
  name: '내비게이션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'nav · active prop으로 link_nav · is-active 메뉴·탭 링크를 표현합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function NavExample() {
  return (
    <>
      <nav className="link_group-inline" aria-label="섹션 내비게이션">
        <Link nav active label="개요" />
        <Link nav label="컴포넌트" />
        <Link nav label="토큰" />
        <Link nav label="접근성" />
      </nav>
      <Link
        back
        label="이전 페이지"
        icon={
          <Icon className="link_icon">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
        }
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
      <nav className="link_group-inline" aria-label="섹션 내비게이션">
        <Link nav active label="개요" />
        <Link nav label="컴포넌트" />
        <Link nav label="토큰" />
        <Link nav label="접근성" />
      </nav>
      <Link
        back
        label="이전 페이지"
        icon={
          <Icon className="link_icon">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
        }
      />
    </>,
  ),
};

export const Block = {
  name: '블록 · 그룹',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'block prop · link_group으로 세로 링크 목록을 구성합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function BlockExample() {
  return (
    <div className="link_group" style={{ maxWidth: '280px', width: '100%' }}>
      <Link
        block
        label="시작하기"
        icon={
          <Icon className="link_icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </Icon>
        }
      />
      <Link
        block
        label="컴포넌트"
        icon={
          <Icon className="link_icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </Icon>
        }
      />
      <Link
        block
        color="muted"
        label="도움말"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          </Icon>
        }
      />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="link_group" style={{ maxWidth: '280px', width: '100%' }}>
      <Link
        block
        label="시작하기"
        icon={
          <Icon className="link_icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </Icon>
        }
      />
      <Link
        block
        label="컴포넌트"
        icon={
          <Icon className="link_icon">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </Icon>
        }
      />
      <Link
        block
        color="muted"
        label="도움말"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
          </Icon>
        }
      />
    </div>,
  ),
};

export const IconOnly = {
  name: '아이콘 전용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'iconOnly prop으로 link_icon-only 텍스트 없는 링크 버튼을 만듭니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function IconOnlyExample() {
  return (
    <>
      <Link
        iconOnly
        ariaLabel="검색"
        icon={
          <Icon className="link_icon">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </Icon>
        }
      />
      <Link
        iconOnly
        ariaLabel="편집"
        icon={
          <Icon className="link_icon">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </Icon>
        }
      />
      <Link
        iconOnly
        color="muted"
        ariaLabel="더 보기"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </Icon>
        }
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
      <Link
        iconOnly
        ariaLabel="검색"
        icon={
          <Icon className="link_icon">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </Icon>
        }
      />
      <Link
        iconOnly
        ariaLabel="편집"
        icon={
          <Icon className="link_icon">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </Icon>
        }
      />
      <Link
        iconOnly
        color="muted"
        ariaLabel="더 보기"
        icon={
          <Icon className="link_icon">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </Icon>
        }
      />
    </>,
  ),
};

export const IconDemo = {
  name: '아이콘',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function IconDemoExample() {
  return (
    <div className="link_row">
      <Link
        label="외부 링크"
        icon={
          <Icon className="link_icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </Icon>
        }
      />
      <Link>
        다운로드
        <Icon className="link_icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
      </Link>
      <Link
        label="다음 단계"
        icon={
          <Icon className="link_icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        }
      />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="link_row">
      <Link
        label="외부 링크"
        icon={
          <Icon className="link_icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </Icon>
        }
      />
      <Link>
        다운로드
        <Icon className="link_icon">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
      </Link>
      <Link
        label="다음 단계"
        icon={
          <Icon className="link_icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </Icon>
        }
      />
    </div>,
  ),
};

export const External = {
  name: '새 창 열기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ExternalExample() {
  return (
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      공식 문서
      <span className="color_muted size_sm">(새 창)</span>
      <Icon className="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </Link>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      공식 문서
      <span className="color_muted size_sm">(새 창)</span>
      <Icon className="link_icon">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </Icon>
    </Link>,
  ),
};

export const Disabled = {
  name: '비활성',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      source: {
        code: `import Link from '@uxkm/ui-react/components/Link.jsx';

export function DisabledExample() {
  return (
    <>
      <Link disabled label="비활성 링크" />
      <Link disabled label="비활성 (span)" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Link disabled label="비활성 링크" />
      <Link disabled label="비활성 (span)" />
    </>,
  ),
};

export const Context = {
  name: '문맥 속 사용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다.',
      },
      source: {
        code: `import Link from '@uxkm/ui-react/components/Link.jsx';

export function ContextExample() {
  return (
    <>
      <div className="alert color_info" role="alert">
        <div className="alert_body">
          <div className="alert_title">업데이트 안내</div>
          <p className="alert_desc">
            새 버전이 출시되었습니다.
            <Link size="sm" label="릴리스 노트 보기" />
          </p>
        </div>
      </div>
      <p className="color_muted">
        계정이 없으신가요?
        <Link label="회원가입" />
      </p>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="alert color_info" role="alert">
        <div className="alert_body">
          <div className="alert_title">업데이트 안내</div>
          <p className="alert_desc">
            새 버전이 출시되었습니다.
            <Link size="sm" label="릴리스 노트 보기" />
          </p>
        </div>
      </div>
      <p className="color_muted">
        계정이 없으신가요?
        <Link label="회원가입" />
      </p>
    </>,
  ),
};

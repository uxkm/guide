import React from 'react';
import Icon from './Icon.jsx';
import { bindComponent, withDocsCanvasRender } from '../storybook/story-renders.jsx';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';
import {
  iconClassColumns,
  iconClasses,
  iconPropColumns,
  iconProps,
  iconTokenColumns,
  iconTokens,
} from '@doc-data/icon-api';

const iconChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const iconChildren = [
  {
    name: 'children',
    description: 'SVG path·circle 등 자식 요소. name prop이 있으면 children 대신 갤러리 경로를 사용',
  },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: aria-label)와 동일한 의미입니다.',
    tables: [{ columns: iconPropColumns, rows: iconProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯에 대응하는 React children입니다.',
    tables: [{ columns: iconChildColumns, rows: iconChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: iconClassColumns, rows: iconClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: iconTokenColumns, rows: iconTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  name: 'search',
  color: '',
  size: 'md',
  inline: false,
  spin: false,
  button: false,
  circle: false,
  square: false,
  pulse: false,
  ariaLabel: '접근성 라벨',
};

export default {
  title: 'Components/기본 요소/Icon',
  id: 'components-icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: commonIconGallery,
      type: { name: 'enum', summary: 'common-icons 갤러리 키' },
    },
    color: {
      control: 'select',
      options: ['', 'default', 'primary', 'success', 'warning', 'danger', 'info', 'muted'],
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
    inline: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    spin: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    button: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    circle: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    square: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    pulse: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          'SVG 인라인 아이콘의 크기, 색상, 정렬을 일관되게 적용하는 기본 요소입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: bindComponent(Icon),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'svg 태그에 icon 클래스를 적용합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function BasicExample() {
  return (
    <>
      <Icon>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
      <Icon>
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Icon>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
      <Icon>
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
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
        story: '기본 크기는 icon 클래스만 사용합니다. icon_sm · md(기본) · icon_lg · icon_xl로 스케일을 조절합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function SizeExample() {
  return (
    <>
      <Icon size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="lg">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="xl">
        <path d="M12 5v14M5 12h14" />
      </Icon>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Icon size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon>
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="lg">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon size="xl">
        <path d="M12 5v14M5 12h14" />
      </Icon>
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
        story:
          '공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function ColorExample() {
  return (
    <>
      <Icon color="default">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon color="warning">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </Icon>
      <Icon color="danger">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </Icon>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Icon color="default">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <Icon color="success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon color="warning">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </Icon>
      <Icon color="danger">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </Icon>
    </>,
  ),
};

export const Inline = {
  name: '텍스트와 함께',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'inline prop으로 icon_inline 클래스를 적용해 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 ariaLabel을 지정합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function InlineExample() {
  return (
    <>
      <p>
        <Icon inline color="info">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        </Icon>
        <span className="ml_sm">변경 사항이 자동 저장됩니다.</span>
      </p>
      <p>
        <Icon inline color="success">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </Icon>
        <span className="ml_sm">업로드가 완료되었습니다.</span>
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
      <p>
        <Icon inline color="info">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        </Icon>
        <span className="ml_sm">변경 사항이 자동 저장됩니다.</span>
      </p>
      <p>
        <Icon inline color="success">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </Icon>
        <span className="ml_sm">업로드가 완료되었습니다.</span>
      </p>
    </>,
  ),
};

export const Circle = {
  name: '원형 · 사각 배경',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'circle · square prop으로 icon_circle · icon_square 배경을 적용합니다. color로 색상을 지정합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function CircleExample() {
  return (
    <>
      <Icon circle color="primary" size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon circle color="success" size="sm">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon circle color="danger" size="lg">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
      <Icon square color="primary" size="sm">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Icon circle color="primary" size="sm">
        <path d="M12 5v14M5 12h14" />
      </Icon>
      <Icon circle color="success" size="sm">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </Icon>
      <Icon circle color="danger" size="lg">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </Icon>
      <Icon square color="primary" size="sm">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </Icon>
    </>,
  ),
};

export const IconButton = {
  name: '아이콘 버튼',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'button prop으로 icon_button 클릭 가능한 아이콘 버튼을 만듭니다. ariaLabel을 반드시 지정합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function IconButtonExample() {
  return (
    <>
      <Icon button color="primary" ariaLabel="검색">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon button color="muted" ariaLabel="설정">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </Icon>
      <Icon button color="danger" ariaLabel="삭제">
        <path d="M18 6 6 18M6 6l12 12" />
      </Icon>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Icon button color="primary" ariaLabel="검색">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </Icon>
      <Icon button color="muted" ariaLabel="설정">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </Icon>
      <Icon button color="danger" ariaLabel="삭제">
        <path d="M18 6 6 18M6 6l12 12" />
      </Icon>
    </>,
  ),
};

export const Pulse = {
  name: '펄스',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'pulse prop으로 icon_pulse 알림·상태 강조 애니메이션을 적용합니다. circle과 함께 사용합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function PulseExample() {
  return (
    <>
      <Icon circle pulse color="primary" size="sm">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </Icon>
      <Icon circle pulse color="danger" size="sm">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </Icon>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Icon circle pulse color="primary" size="sm">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </Icon>
      <Icon circle pulse color="danger" size="sm">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </Icon>
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
        story: 'icon_group으로 여러 아이콘을 나란히 배치합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function GroupExample() {
  return (
    <>
      <div className="icon_group">
        <Icon color="muted">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </Icon>
        <Icon color="muted">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
        <Icon color="muted">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </Icon>
      </div>
      <p>
        <Icon circle color="primary" size="sm">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Icon>
        <span className="ml_sm color_muted">홍길동님이 댓글을 남겼습니다.</span>
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
      <div className="icon_group">
        <Icon color="muted">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </Icon>
        <Icon color="muted">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </Icon>
        <Icon color="muted">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </Icon>
      </div>
      <p>
        <Icon circle color="primary" size="sm">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Icon>
        <span className="ml_sm color_muted">홍길동님이 댓글을 남겼습니다.</span>
      </p>
    </>,
  ),
};

export const Spin = {
  name: '로딩',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'spin prop으로 icon_spin 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function SpinExample() {
  return (
    <>
      <Icon spin color="primary">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
      <Icon spin size="lg" color="muted">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Icon spin color="primary">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
      <Icon spin size="lg" color="muted">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </Icon>
    </>,
  ),
};

export const Gallery = {
  name: '아이콘 유형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다.',
      },
      source: {
        code: `import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';

export function GalleryExample() {
  return (
    <div className="icon_grid">
      {commonIconGallery.map((name) => (
        <div key={name} className="icon_grid-item">
          <Icon name={name} className="icon_lg" />
          <span className="color_muted">{name}</span>
        </div>
      ))}
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="icon_grid">
      {commonIconGallery.map((name) => (
        <div key={name} className="icon_grid-item">
          <Icon name={name} className="icon_lg" />
          <span className="color_muted">{name}</span>
        </div>
      ))}
    </div>,
  ),
};

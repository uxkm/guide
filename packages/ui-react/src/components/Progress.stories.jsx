import React from 'react';
import Progress from './Progress.jsx';
import ProgressCircle from './ProgressCircle.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  progressCirclePropColumns,
  progressCircleProps,
  progressClassColumns,
  progressClasses,
  progressPropColumns,
  progressProps,
  progressTokenColumns,
  progressTokens,
} from '@doc-data/progress-api';

const apiSections = [
  {
    title: 'API · Progress Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 show-info · aria-label은 showInfo · ariaLabel로 다룹니다.',
    tables: [{ columns: progressPropColumns, rows: progressProps, codeColumn: 'name' }],
  },
  {
    title: 'API · ProgressCircle Props',
    tables: [{ columns: progressCirclePropColumns, rows: progressCircleProps, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: progressClassColumns, rows: progressClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: progressTokenColumns, rows: progressTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  percent: 0,
  status: 'success',
  size: 'md',
  showInfo: false,
  label: '라벨',
  color: 'primary',
  striped: false,
  animated: false,
  indeterminate: false,
  inside: false,
  block: false,
  ariaLabel: '진행률',
};

export default {
  title: 'Components/피드백/Progress',
  id: 'components-progress',
  component: Progress,
  subcomponents: { ProgressCircle },
  tags: ['autodocs'],
  argTypes: {
    percent: { control: 'number', type: { name: 'number', summary: 'number' } },
    status: {
      control: 'select',
      options: ['success', 'exception'],
      type: { name: 'enum', summary: "'success' | 'exception'" },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    showInfo: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      type: { name: 'enum', summary: "'primary' | 'success' | 'warning' | 'danger'" },
    },
    striped: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    animated: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    indeterminate: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    inside: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    block: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '선형·원형 진행률을 표시하는 Progress 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <Progress {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`progress` · `progress_track` · `progress_bar`로 트랙과 채움 막대를 구성합니다. `progress_bar`의 `style="width: …"` 또는 CSS 변수로 진행률을 제어합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function BasicExample() {
  return (
    <>
      <Progress percent={0} />
      <Progress percent={30} />
      <Progress percent={60} />
      <Progress percent={100} status="success" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress percent={0} />
      <Progress percent={30} />
      <Progress percent={60} />
      <Progress percent={100} status="success" />
    </>,
  ),
};

export const Label = {
  name: '레이블 · 값',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '`progress_header`에 `progress_label` · `progress_value`를 함께 배치합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function LabelExample() {
  return (
    <>
      <Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
      <Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
      <Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
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
        story: '공통 `color_*` 클래스로 의미를 표현합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function ColorExample() {
  return (
    <>
      <Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
      <Progress percent={100} color="success" ariaLabel="Success 진행률" />
      <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
      <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
      <Progress percent={100} color="success" ariaLabel="Success 진행률" />
      <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
      <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
    </>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '`progress_sm` · `progress`(기본) · `progress_lg` 세 가지 높이를 지원합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function SizeExample() {
  return (
    <>
      <Progress size="sm" percent={40} />
      <Progress percent={55} />
      <Progress size="lg" percent={70} />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress size="sm" percent={40} />
      <Progress percent={55} />
      <Progress size="lg" percent={70} />
    </>,
  ),
};

export const Striped = {
  name: '줄무늬 · 애니메이션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`progress_striped`로 줄무늬 패턴을, `progress_animated`와 함께 사용하면 흐르는 애니메이션을 적용합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function StripedExample() {
  return (
    <>
      <Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
      <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
      <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
    </>,
  ),
};

export const Indeterminate = {
  name: '불확정',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '진행률을 알 수 없을 때 `is-indeterminate`를 사용합니다. `aria-valuenow`를 생략하거나 `aria-busy="true"`를 함께 지정합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function IndeterminateExample() {
  return (
    <>
      <Progress indeterminate color="primary" ariaLabel="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress indeterminate color="primary" ariaLabel="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
    </>,
  ),
};

export const Inside = {
  name: '바 안 텍스트',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`progress_inside`로 막대 안에 퍼센트를 표시합니다. 막대가 좁을 때는 텍스트가 잘릴 수 있으니 충분한 너비를 확보합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function InsideExample() {
  return (
    <>
      <Progress percent={25} inside />
      <Progress percent={80} inside size="lg" color="success" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress percent={25} inside />
      <Progress percent={80} inside size="lg" color="success" />
    </>,
  ),
};

export const Circle = {
  name: '원형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`progress_circle`로 원형 진행률을 표시합니다. `style="--progress-percent: …"`로 채움 비율을 지정합니다.',
      },
      source: {
        code: `import ProgressCircle from '@uxkm/ui-react/components/ProgressCircle.jsx';

export function CircleExample() {
  return (
    <>
      <ProgressCircle percent={25} />
      <ProgressCircle percent={68} color="success" />
      <ProgressCircle percent={50} size="sm" color="warning" />
      <ProgressCircle percent={90} size="lg" color="danger" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <ProgressCircle percent={25} />
      <ProgressCircle percent={68} color="success" />
      <ProgressCircle percent={50} size="sm" color="warning" />
      <ProgressCircle percent={90} size="lg" color="danger" />
    </>,
  ),
};

export const Width = {
  name: '너비',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`progress_fit`은 최대 너비를 제한하고, `progress_block`은 부모 너비 전체를 사용합니다.',
      },
      source: {
        code: `import Progress from '@uxkm/ui-react/components/Progress.jsx';

export function WidthExample() {
  return (
    <>
      <Progress percent={50} showInfo label="progress_fit" />
      <Progress percent={72} block showInfo label="progress_block — 전체 너비" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Progress percent={50} showInfo label="progress_fit" />
      <Progress percent={72} block showInfo label="progress_block — 전체 너비" />
    </>,
  ),
};

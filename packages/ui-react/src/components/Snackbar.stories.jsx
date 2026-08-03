import React, { useState } from 'react';
import Snackbar from './Snackbar.jsx';
import SnackbarPlayground from './SnackbarPlayground.jsx';
import Button from './Button.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  snackbarChildColumns,
  snackbarChildren,
  snackbarClassColumns,
  snackbarClasses,
  snackbarEventColumns,
  snackbarEvents,
  snackbarPropColumns,
  snackbarProps,
  snackbarRegionProps,
  snackbarTokenColumns,
  snackbarTokens,
} from '@doc-data/snackbar-api';

const apiSections = [
  {
    title: '접근성',
    description: `Snackbar는 포커스를 강제로 이동하지 않고 라이브 영역으로 상태 변화를 전달합니다.

- 일반적인 작업 결과는 \`role="status"\`로 정중하게 알리고, 즉시 확인해야 하는 오류에만 \`role="alert"\`를 사용합니다.
- 자동 닫기는 기본적으로 비활성화되어 있습니다. 사용하는 경우에도 내용을 읽고 액션을 수행할 충분한 시간을 제공하세요.
- 호버 또는 Snackbar 내부 포커스 중에는 자동 닫기 타이머가 멈춥니다. 닫기 가능한 Snackbar는 내부 포커스 상태에서 Esc로도 닫을 수 있습니다.
- 운영체제에서 모션 감소를 설정한 경우 Fade·Slide 시간을 최소화해 움직임을 줄입니다.
- 아이콘은 장식 요소로 숨겨지므로 상태를 색상이나 아이콘에만 의존하지 말고 메시지 텍스트로 명확하게 설명하세요.
- 액션은 하나의 짧고 명확한 동작으로 제공하고, 닫기 버튼에는 구체적인 \`closeLabel\`을 사용하세요.`,
    tables: [],
  },
  {
    title: 'API · Props',
    tables: [{ columns: snackbarPropColumns, rows: snackbarProps, codeColumn: 'name' }],
  },
  {
    title: 'API · SnackbarRegion',
    tables: [{ columns: snackbarPropColumns, rows: snackbarRegionProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    tables: [{ columns: snackbarChildColumns, rows: snackbarChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · Events',
    tables: [{ columns: snackbarEventColumns, rows: snackbarEvents, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    tables: [{ columns: snackbarClassColumns, rows: snackbarClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: snackbarTokenColumns, rows: snackbarTokens, codeColumn: 'name' }],
  },
];

const staticExample = (node) => withDocsCanvasRender(node, node);

function SnackbarStoryPlayground(args) {
  const [instance, setInstance] = useState(1);
  const [open, setOpen] = useState(true);

  function showSnackbar() {
    setInstance((current) => current + 1);
    setOpen(true);
  }

  function handleClose(reason, event) {
    setOpen(false);
    args.onClose?.(reason, event);
  }

  return (
    <div className="snackbar_playground">
      <div className="snackbar_playground-actions" style={{ marginTop: 0 }}>
        <Button
          variant="filled"
          color="primary"
          label="Snackbar 호출"
          onClick={showSnackbar}
        />
      </div>

      {open ? (
        <div style={{ marginTop: 'var(--space-md)' }}>
          <Snackbar
            key={instance}
            {...args}
            onClose={handleClose}
          />
        </div>
      ) : null}
    </div>
  );
}

export default {
  title: 'Components/피드백/Snackbar',
  id: 'components-snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    message: { control: 'text' },
    closable: { control: 'boolean' },
    closeLabel: { control: 'text' },
    showIcon: { control: 'boolean' },
    round: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    duration: { control: { type: 'number', min: 0, step: 500 } },
    motion: { control: 'select', options: ['fade', 'slide', 'none'] },
    placement: {
      control: 'select',
      options: [
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
      ],
    },
    role: { control: 'select', options: ['status', 'alert'] },
    ripple: { control: 'boolean' },
    action: { control: false },
    icon: { control: false },
    onClose: { action: 'close' },
  },
  parameters: {
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '작업 결과나 짧은 상태 메시지를 일시적으로 전달하는 Snackbar 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  args: {
    color: 'info',
    message: '새로운 업데이트가 있습니다.',
    closable: false,
    closeLabel: '알림 닫기',
    showIcon: true,
    round: false,
    size: 'md',
    duration: 0,
    motion: 'fade',
    placement: 'bottom-center',
    role: 'status',
  },
  render: (args) => <SnackbarStoryPlayground {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: true },
    docs: {
      description: { story: '네 가지 의미 색상으로 짧은 피드백을 전달합니다.' },
      source: {
        language: 'tsx',
        code: `import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function BasicExample() {
  return (
    <>
      <Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
    </>
  );
}`,
      },
    },
  },
  render: staticExample(
    <>
      <Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
    </>,
  ),
};

export const Placement = {
  name: '위치 · 여러 개 동작 테스트',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: '8개 위치는 본문이 아닌 브라우저 뷰포트를 기준으로 계산되며, 같은 위치의 Snackbar는 독립적으로 쌓입니다.',
      },
      source: {
        language: 'tsx',
        code: `import SnackbarPlayground from '@uxkm/ui-react/components/SnackbarPlayground.jsx';

export function PlacementExample() {
  return (
    <SnackbarPlayground
      openOnLoad
      openOnLoadPlacement="bottom-center"
      openOnLoadCount={1}
      openOnLoadMotion="slide"
    />
  );
}`,
      },
    },
  },
  render: () => (
    <SnackbarPlayground
      openOnLoad
      openOnLoadPlacement="bottom-center"
      openOnLoadCount={1}
      openOnLoadMotion="slide"
    />
  ),
};

export const Simple = {
  name: '간단한 메시지',
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'showIcon을 끄고 children으로 메시지를 전달할 수 있습니다.' },
      source: {
        language: 'tsx',
        code: `import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function SimpleExample() {
  return <Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>;
}`,
      },
    },
  },
  render: staticExample(
    <Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>,
  ),
};

export const Shape = {
  name: '형태',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '기본 radius-md 유형과 높이 비율에 맞춘 캡슐형 round 유형을 제공합니다.',
      },
      source: {
        language: 'tsx',
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function ShapeExample() {
  return (
    <>
      <Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar
        round
        color="warning"
        message="액션과 닫기가 포함된 라운드"
        closable
        action={<Button variant="ghost" size="sm" label="확인" />}
      />
    </>
  );
}`,
      },
    },
  },
  render: staticExample(
    <>
      <Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar
        round
        color="warning"
        message="액션과 닫기가 포함된 라운드"
        closable
        action={<Button variant="ghost" size="sm" label="확인" />}
      />
    </>,
  ),
};

export const Motion = {
  name: '호출 · 닫기 효과',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'fade, 배치 방향을 따르는 slide, 전환이 없는 none 모션을 제공합니다.',
      },
      source: {
        language: 'tsx',
        code: `import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function MotionExample() {
  return (
    <>
      <Snackbar motion="fade" message="Fade 효과" />
      <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
      <Snackbar motion="none" message="전환 효과 없음" />
    </>
  );
}`,
      },
    },
  },
  render: staticExample(
    <>
      <Snackbar motion="fade" message="Fade 효과" />
      <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
      <Snackbar motion="none" message="전환 효과 없음" />
    </>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: true },
    docs: {
      description: { story: 'sm · md · lg 세 가지 크기를 제공합니다.' },
      source: {
        language: 'tsx',
        code: `import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function SizeExample() {
  return (
    <>
      <Snackbar size="sm" message="Small Snackbar" />
      <Snackbar message="Medium Snackbar" />
      <Snackbar size="lg" message="Large Snackbar" />
    </>
  );
}`,
      },
    },
  },
  render: staticExample(
    <>
      <Snackbar size="sm" message="Small Snackbar" />
      <Snackbar message="Medium Snackbar" />
      <Snackbar size="lg" message="Large Snackbar" />
    </>,
  ),
};

export const Action = {
  name: '액션',
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'action 영역에 하나의 명확한 후속 동작을 배치합니다.' },
      source: {
        language: 'tsx',
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function ActionExample() {
  return (
    <Snackbar
      color="success"
      message="항목을 삭제했습니다."
      action={({ close }) => (
        <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />
      )}
    />
  );
}`,
      },
    },
  },
  render: staticExample(
    <Snackbar
      color="success"
      message="항목을 삭제했습니다."
      action={({ close }) => (
        <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />
      )}
    />,
  ),
};

export const Closable = {
  name: '닫기 가능',
  args: {
    color: 'warning',
    message: '브라우저를 최신 버전으로 업데이트해 주세요.',
    closable: true,
    closeLabel: '알림 닫기',
    showIcon: true,
    size: 'md',
    duration: 0,
    motion: 'fade',
    placement: 'bottom-center',
    role: 'status',
  },
  parameters: {
    docs: {
      description: {
        story: '닫기 버튼은 onClose에 close 사유와 클릭 이벤트를 전달하며, 내부 포커스 상태에서는 Esc도 지원합니다.',
      },
      source: {
        language: 'tsx',
        code: `import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function CloseExample() {
  return (
    <Snackbar
      closable
      color="warning"
      message="브라우저를 최신 버전으로 업데이트해 주세요."
      onClose={(reason) => console.log(reason)}
    />
  );
}`,
      },
    },
  },
  render: withDocsCanvasRender(
    <Snackbar
      closable
      color="warning"
      message="브라우저를 최신 버전으로 업데이트해 주세요."
    />,
    (args) => (
      <Snackbar
        key={`${args.color}-${args.message}-${args.closable}-${args.motion}`}
        {...args}
      />
    ),
  ),
};

export const Duration = {
  name: '자동 닫기',
  args: {
    color: 'success',
    message: '4초 후 자동으로 닫힙니다.',
    closable: false,
    closeLabel: '알림 닫기',
    showIcon: true,
    size: 'md',
    duration: 4000,
    motion: 'fade',
    placement: 'bottom-center',
    role: 'status',
  },
  parameters: {
    docs: {
      description: {
        story: 'duration 이후 timeout 사유로 닫히며, 호버하거나 내부 요소에 포커스하면 남은 시간이 일시정지됩니다.',
      },
      source: {
        language: 'tsx',
        code: `import Snackbar from '@uxkm/ui-react/components/Snackbar.jsx';

export function TimedExample() {
  return (
    <Snackbar
      duration={4000}
      color="success"
      message="4초 후 자동으로 닫힙니다."
      onClose={(reason) => console.log(reason)}
    />
  );
}`,
      },
    },
  },
  render: withDocsCanvasRender(
    <Snackbar
      color="success"
      message="실제 서비스에서는 duration={4000}처럼 자동 닫기를 설정할 수 있습니다."
    />,
    (args) => (
      <Snackbar
        key={`${args.color}-${args.message}-${args.duration}-${args.motion}`}
        {...args}
      />
    ),
  ),
};

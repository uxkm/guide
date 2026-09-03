import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualSnackbar from '../../react/src/components/feedback/Snackbar/Snackbar.jsx';
import ActualSnackbarRegion, {
  snackbarPlacements,
} from '../../react/src/components/feedback/Snackbar/SnackbarRegion.jsx';
import {
  booleanControlArg,
  hiddenArgTypes,
  numberControlArg,
  stringControlArg,
} from './shared/storyArgTypes';

const Snackbar = ActualSnackbar as React.ComponentType<any>;
const SnackbarRegion = ActualSnackbarRegion as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;

const placementLabels: Record<string, string> = {
  'top-start': '상단 좌측',
  'top-center': '상단 가운데',
  'top-end': '상단 우측',
  'middle-start': '중간 좌측',
  'middle-end': '중간 우측',
  'bottom-start': '하단 좌측',
  'bottom-center': '하단 가운데',
  'bottom-end': '하단 우측',
};

function Demo({ children }: { children: React.ReactNode }) {
  return <div className="demo-stack snackbar-demo">{children}</div>;
}

function PlacementDemo() {
  const nextId = useRef(1);
  const [items, setItems] = useState<Array<{ id: number; placement: string }>>([
    { id: 1, placement: 'bottom-center' },
  ]);
  const show = (placement: string) =>
    setItems((current) => [...current, { id: ++nextId.current, placement }]);

  return (
    <div className="snackbar_playground">
      <div className="snackbar_playground-controls" aria-label="Snackbar 위치 테스트">
        {snackbarPlacements.map((placement) => (
          <Button
            key={placement}
            variant="outline"
            size="sm"
            label={placementLabels[placement]}
            onClick={() => show(placement)}
          />
        ))}
      </div>
      <div className="snackbar_playground-actions">
        <Button label="모든 위치에 표시" onClick={() => snackbarPlacements.forEach(show)} />
        <Button variant="ghost" label="전체 닫기" disabled={!items.length} onClick={() => setItems([])} />
      </div>
      {snackbarPlacements.map((placement) => (
        <SnackbarRegion key={placement} placement={placement} label={`${placementLabels[placement]} Snackbar 영역`}>
          {items
            .filter((item) => item.placement === placement)
            .map((item) => (
              <Snackbar
                key={item.id}
                message={`${placementLabels[placement]} Snackbar`}
                motion="slide"
                closable
                duration={8000}
                onClose={() => setItems((current) => current.filter(({ id }) => id !== item.id))}
              />
            ))}
        </SnackbarRegion>
      ))}
    </div>
  );
}

type SnackbarStoryArgs = {
  color?: 'info' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  motion?: 'fade' | 'slide' | 'none';
  placement?: string;
  showIcon?: boolean;
  closable?: boolean;
  round?: boolean;
  duration?: number;
  message?: string;
  role?: 'status' | 'alert';
};

function snackbarPropsFromArgs(args: Record<string, unknown>) {
  const duration = typeof args.duration === 'number' && args.duration > 0 ? args.duration : 0;
  return {
    color: args.color,
    size: args.size,
    motion: args.motion,
    placement: typeof args.placement === 'string' ? args.placement : undefined,
    showIcon: args.showIcon !== false,
    closable: args.closable === true,
    round: args.round === true,
    duration,
    message: typeof args.message === 'string' ? args.message : undefined,
    role: args.role === 'alert' ? 'alert' : 'status',
  };
}

const snackbarControlKeys = [
  'color',
  'size',
  'motion',
  'placement',
  'message',
  'duration',
  'role',
  'showIcon',
  'closable',
  'round',
] as const;

const meta = {
  title: '피드백/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'padded',
    controls: { include: [...snackbarControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    color: 'info',
    size: 'md',
    motion: 'fade',
    placement: 'bottom-center',
    showIcon: true,
    closable: false,
    round: false,
    duration: 0,
    message: 'Controls로 속성을 조절해 보세요.',
    role: 'status',
  },
  argTypes: {
    ...hiddenArgTypes,
    color: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
      type: 'string',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    motion: {
      control: 'select',
      options: ['fade', 'slide', 'none'],
      type: 'string',
    },
    placement: {
      control: 'select',
      options: [...snackbarPlacements],
      type: 'string',
    },
    role: {
      control: 'select',
      options: ['status', 'alert'],
      type: 'string',
    },
    showIcon: booleanControlArg,
    closable: booleanControlArg,
    round: booleanControlArg,
    duration: {
      ...numberControlArg,
      description: '자동 닫기 시간(ms). 0이면 유지',
    },
    message: stringControlArg,
    closeLabel: { table: { disable: true } },
    icon: { table: { disable: true } },
    action: { table: { disable: true } },
    onClose: { table: { disable: true } },
  },
} satisfies Meta<SnackbarStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <Snackbar {...snackbarPropsFromArgs(args)} />,
};

export const Basic: Story = {
  name: '기본',
  render: () => (
    <Demo>
      <Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
    </Demo>
  ),
};

export const Simple: Story = {
  name: '간단한 메시지',
  render: () => <Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>,
};

export const Shape: Story = {
  name: '형태',
  render: () => (
    <Demo>
      <Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar
        round
        color="warning"
        message="액션과 닫기가 포함된 라운드"
        closable
        action={<Button variant="ghost" size="sm" label="확인" />}
      />
    </Demo>
  ),
};

export const Motion: Story = {
  name: '호출 · 닫기 효과',
  render: () => (
    <Demo>
      <Snackbar motion="fade" message="Fade 효과" />
      <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
      <Snackbar motion="none" message="전환 효과 없음" />
    </Demo>
  ),
};

export const Size: Story = {
  name: '크기',
  render: () => (
    <Demo>
      <Snackbar size="sm" message="Small Snackbar" />
      <Snackbar message="Medium Snackbar" />
      <Snackbar size="lg" message="Large Snackbar" />
    </Demo>
  ),
};

export const Action: Story = {
  name: '액션',
  render: () => (
    <Snackbar
      color="success"
      message="항목을 삭제했습니다."
      action={({ close }: any) => <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />}
    />
  ),
};

export const Closable: Story = {
  name: '닫기 가능',
  render: () => <Snackbar closable color="warning" message="브라우저를 최신 버전으로 업데이트해 주세요." />,
};

export const Duration: Story = {
  name: '자동 닫기',
  render: () => <Snackbar duration={4000} color="success" message="4초 후 자동으로 닫힙니다." />,
};

export const Placement: Story = {
  name: '위치 · 여러 개 동작 테스트',
  render: () => <PlacementDemo />,
};

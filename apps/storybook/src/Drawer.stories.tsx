import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualDrawer from '../../react/src/components/feedback/Drawer/Drawer.jsx';
import {
  booleanControlArg,
  closeLabelArg,
  defaultOpenArg,
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const Drawer = ActualDrawer as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const actions = (close: () => void, confirmLabel = '확인') => <><Button variant="ghost" label="취소" onClick={close} /><Button label={confirmLabel} onClick={close} /></>;

function BasicDemo() {
  const [open, setOpen] = useState(false);
  return <><Button label="Drawer 열기" onClick={() => setOpen(true)} /><Drawer open={open} title="상세 정보" onClose={() => setOpen(false)} footer={actions(() => setOpen(false))}><p>Drawer 패널 본문입니다. 전체 브라우저 오른쪽에서 열립니다.</p></Drawer></>;
}

function OpenDemo() {
  const [open, setOpen] = useState(true);
  return <>{!open && <Button label="열린 상태 다시 보기" onClick={() => setOpen(true)} />}<Drawer open={open} title="알림" onClose={() => setOpen(false)} footer={actions(() => setOpen(false))}><p>로드 시 열린 상태로 표시되는 Drawer입니다.</p><p>헤더, 본문, 푸터와 전체 브라우저 기준 오버레이를 확인할 수 있습니다.</p></Drawer></>;
}

function PlacementDemo() {
  const [placement, setPlacement] = useState<string | null>(null);
  return <><div className="drawer_demo-row">{['left', 'right', 'top', 'bottom'].map((value) => <Button key={value} variant="outline" label={value} onClick={() => setPlacement(value)} />)}</div>{placement && <Drawer open placement={placement} title={`${placement} Drawer`} onClose={() => setPlacement(null)} footer={<Button label="닫기" onClick={() => setPlacement(null)} />}><p>브라우저 {placement} 방향에서 열리는 패널입니다.</p></Drawer>}</>;
}

function SizeDemo() {
  const [size, setSize] = useState<string | null>(null);
  return <><div className="drawer_demo-row">{['sm', 'md', 'lg'].map((value) => <Button key={value} variant="outline" label={value === 'md' ? 'Default' : value.toUpperCase()} onClick={() => setSize(value)} />)}</div>{size && <Drawer open size={size} title={`${size} Drawer`} onClose={() => setSize(null)}><p>{size} 크기의 패널입니다.</p></Drawer>}</>;
}

function FooterDemo() {
  const [open, setOpen] = useState(false);
  return <><Button label="항목 편집" onClick={() => setOpen(true)} /><Drawer open={open} title="항목 편집" onClose={() => setOpen(false)} footer={actions(() => setOpen(false), '저장')}><div className="form_field"><label className="form_field-label" htmlFor="drawer-name">이름</label><input className="input" id="drawer-name" placeholder="항목 이름" /></div></Drawer></>;
}

function FooterAlignDemo() {
  const [align, setAlign] = useState<string | null>(null);
  return <><div className="drawer_demo-row">{['start', 'center', 'end', 'between', 'even'].map((value) => <Button key={value} variant="outline" label={value} onClick={() => setAlign(value)} />)}</div>{align && <Drawer open placement="bottom" title={`${align} 정렬`} footerAlign={align} onClose={() => setAlign(null)} footer={align === 'between' ? <><div className="drawer_footer-group"><Button variant="ghost" color="danger" label="삭제" /></div><div className="drawer_footer-group">{actions(() => setAlign(null))}</div></> : actions(() => setAlign(null))}><p>footerAlign=&quot;{align}&quot; 푸터 배치입니다.</p></Drawer>}</>;
}

function ExtraDemo() {
  const [open, setOpen] = useState(false);
  return <><Button variant="outline" label="주문 상세" onClick={() => setOpen(true)} /><Drawer open={open} title="주문 #1042" extra={<span className="tag tag_solid color_success">완료</span>} onClose={() => setOpen(false)}><p>제목과 닫기 버튼 사이에 상태나 보조 액션을 배치할 수 있습니다.</p></Drawer></>;
}

function MenuDemo() {
  const [open, setOpen] = useState(false);
  return <><Button variant="outline" label="메뉴 열기" onClick={() => setOpen(true)} /><Drawer open={open} placement="left" title="앱 메뉴" onClose={() => setOpen(false)}><nav className="menu menu_vertical menu_compact" aria-label="앱 메뉴"><ul className="menu_list"><li className="menu_item"><a className="menu_link is-active" href="#dashboard" aria-current="page"><span className="menu_label">대시보드</span></a></li><li className="menu_item"><a className="menu_link" href="#analytics"><span className="menu_label">분석</span></a></li><li className="menu_item"><a className="menu_link" href="#settings"><span className="menu_label">설정</span></a></li></ul></nav></Drawer></>;
}

function DragSheetDemo() {
  const [open, setOpen] = useState(false);
  return <><Button label="드래그 시트 열기" onClick={() => setOpen(true)} /><Drawer open={open} placement="bottom" draggable title="공유 · 액션" onClose={() => setOpen(false)} footer={actions(() => setOpen(false), '공유')}><p>하단에서 위로 슬라이드되며 상단에 드래그 핸들을 표시합니다.</p><ul><li>링크 복사</li><li>메시지 보내기</li><li>다른 앱으로 공유</li></ul></Drawer></>;
}

function NestedDemo() {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);
  return <><Button label="첫 번째 Drawer 열기" onClick={() => setParentOpen(true)} /><Drawer open={parentOpen} title="첫 번째 Drawer" className={childOpen ? 'is-stack-covered' : ''} onClose={() => setParentOpen(false)} footer={<Button label="두 번째 Drawer 열기" onClick={() => setChildOpen(true)} />}><p>Drawer 위에 다음 패널을 열 수 있습니다.</p></Drawer><Drawer open={childOpen} size="sm" title="두 번째 Drawer" style={{ '--drawer-stack-level': 1 } as React.CSSProperties} onClose={() => setChildOpen(false)} footer={actions(() => setChildOpen(false))}><p>현재 최상위 패널입니다.</p></Drawer></>;
}

function NoBackdropDemo() {
  const [open, setOpen] = useState(false);
  return <><Button variant="outline" label="백드롭 없이 열기" onClick={() => setOpen(true)} /><Drawer open={open} noBackdrop size="sm" title="백드롭 없음" onClose={() => setOpen(false)} footer={<Button label="닫기" onClick={() => setOpen(false)} />}><p>페이지 배경을 가리지 않고 패널만 표시합니다.</p></Drawer></>;
}

function MotionDemo() {
  const [motion, setMotion] = useState<string | null>(null);
  return (
    <>
      <div className="drawer_demo-row">
        {['slide', 'fade'].map((value) => (
          <Button key={value} variant="outline" label={value} onClick={() => setMotion(value)} />
        ))}
      </div>
      {motion && (
        <Drawer
          open
          motion={motion}
          title={`${motion} 효과`}
          onClose={() => setMotion(null)}
          footer={<Button label="닫기" onClick={() => setMotion(null)} />}
        >
          <p>motion=&quot;{motion}&quot; 전환 효과입니다.</p>
        </Drawer>
      )}
    </>
  );
}

function SpeedDemo() {
  const [speed, setSpeed] = useState<string | null>(null);
  return (
    <>
      <div className="drawer_demo-row">
        {['fast', 'normal', 'slow'].map((value) => (
          <Button key={value} variant="outline" label={value} onClick={() => setSpeed(value)} />
        ))}
      </div>
      {speed && (
        <Drawer
          open
          speed={speed}
          title={`${speed} 속도`}
          onClose={() => setSpeed(null)}
          footer={<Button label="닫기" onClick={() => setSpeed(null)} />}
        >
          <p>speed=&quot;{speed}&quot; 전환 속도입니다.</p>
        </Drawer>
      )}
    </>
  );
}

function DrawerPlayground({
  args,
  updateArgs,
}: {
  args: Record<string, unknown>;
  updateArgs?: (patch: Record<string, unknown>) => void;
}) {
  const argsOpen = args.open === true;
  const [open, setOpen] = useState(argsOpen);

  useEffect(() => {
    setOpen(argsOpen);
  }, [argsOpen]);

  const setOpenState = (next: boolean) => {
    setOpen(next);
    updateArgs?.({ open: next });
  };

  return (
    <>
      {!open && <Button label="Drawer 열기" onClick={() => setOpenState(true)} />}
      <Drawer
        {...drawerPropsFromArgs(args)}
        open={open}
        onClose={() => setOpenState(false)}
        footer={
          <>
            <Button variant="ghost" label="취소" onClick={() => setOpenState(false)} />
            <Button label="확인" onClick={() => setOpenState(false)} />
          </>
        }
      >
        <p>Controls에서 위치, 크기, motion, speed, 백드롭 옵션을 변경해 확인하세요.</p>
      </Drawer>
    </>
  );
}

type DrawerStoryArgs = {
  open?: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  placement?: 'left' | 'right' | 'top' | 'bottom';
  motion?: 'slide' | 'fade';
  speed?: 'fast' | 'normal' | 'slow';
  backdrop?: boolean;
  noBackdrop?: boolean;
  draggable?: boolean;
  footerAlign?: 'start' | 'center' | 'end' | 'between' | 'even';
  footerRatio?: '1-1' | '2-1' | '1-2';
  footerNoPadBottom?: boolean;
  closeLabel?: string;
};

function drawerPropsFromArgs(args: Record<string, unknown>) {
  return {
    title: typeof args.title === 'string' ? args.title : undefined,
    size: args.size,
    placement: args.placement,
    motion: args.motion,
    speed: args.speed,
    backdrop: args.backdrop !== false,
    noBackdrop: args.noBackdrop === true,
    draggable: args.draggable === true,
    footerAlign: args.footerAlign,
    footerRatio: args.footerRatio,
    footerNoPadBottom: args.footerNoPadBottom === true,
    closeLabel: typeof args.closeLabel === 'string' ? args.closeLabel : undefined,
  };
}

const drawerControlKeys = [
  'open',
  'title',
  'size',
  'placement',
  'motion',
  'speed',
  'backdrop',
  'noBackdrop',
  'draggable',
  'footerAlign',
  'footerRatio',
  'footerNoPadBottom',
  'closeLabel',
] as const;

const meta = {
  title: '피드백/Drawer',
  component: Drawer,
  parameters: {
    layout: 'padded',
    controls: { include: [...drawerControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    open: true,
    title: 'Drawer Playground',
    placement: 'right',
    size: 'md',
    motion: 'slide',
    speed: 'normal',
    backdrop: true,
    noBackdrop: false,
    draggable: false,
    footerAlign: 'end',
    footerRatio: '1-1',
    footerNoPadBottom: false,
    closeLabel: '닫기',
  },
  argTypes: {
    ...hiddenArgTypes,
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      type: 'string',
    },
    motion: {
      control: 'select',
      options: ['slide', 'fade'],
      type: 'string',
    },
    speed: {
      control: 'select',
      options: ['fast', 'normal', 'slow'],
      type: 'string',
    },
    footerAlign: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'even'],
      type: 'string',
    },
    footerRatio: {
      control: 'select',
      options: ['1-1', '2-1', '1-2'],
      type: 'string',
    },
    open: booleanControlArg,
    backdrop: booleanControlArg,
    noBackdrop: booleanControlArg,
    draggable: booleanControlArg,
    footerNoPadBottom: booleanControlArg,
    title: stringControlArg,
    closeLabel: closeLabelArg,
    defaultOpen: defaultOpenArg,
    openOnLoad: { table: { disable: true } },
    footer: { table: { disable: true } },
    header: { table: { disable: true } },
    extra: { table: { disable: true } },
    onClose: { table: { disable: true } },
  },
} satisfies Meta<DrawerStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args, { updateArgs }) => <DrawerPlayground args={args} updateArgs={updateArgs} />,
};
export const Basic: Story = { name: '기본', render: () => <BasicDemo /> };
export const OpenOnLoad: Story = { name: '로드 시 자동 열기 (옵션)', render: () => <OpenDemo /> };
export const Placement: Story = { name: '위치', render: () => <PlacementDemo /> };
export const Motion: Story = { name: '전환 효과', render: () => <MotionDemo /> };
export const Speed: Story = { name: '전환 속도', render: () => <SpeedDemo /> };
export const Size: Story = { name: '크기', render: () => <SizeDemo /> };
export const Footer: Story = { name: '헤더·푸터', render: () => <FooterDemo /> };
export const FooterAlign: Story = { name: '푸터 정렬', render: () => <FooterAlignDemo /> };
export const Extra: Story = { name: '헤더 추가 영역', render: () => <ExtraDemo /> };
export const Menu: Story = { name: '메뉴', render: () => <MenuDemo /> };
export const Nested: Story = { name: '중첩 Drawer', render: () => <NestedDemo /> };
export const DragSheet: Story = { name: '하단 드래그 시트', render: () => <DragSheetDemo /> };
export const NoBackdrop: Story = { name: '백드롭 없음', render: () => <NoBackdropDemo /> };

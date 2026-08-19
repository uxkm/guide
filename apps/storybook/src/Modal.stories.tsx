import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualModal from '../../react/src/components/feedback/Modal/Modal.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';

const Modal = ActualModal as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;

const actions = (close: () => void, confirmLabel = '확인', color = 'primary') => <><Button variant="ghost" label="취소" onClick={close} /><Button color={color} label={confirmLabel} onClick={close} /></>;

function BasicDemo() {
  const [open, setOpen] = useState(false);
  return <><Button label="모달 열기" onClick={() => setOpen(true)} /><Modal id="modal-basic" open={open} title="알림" onClose={() => setOpen(false)} footer={actions(() => setOpen(false))}><p>Modal 대화상자 본문입니다. 백드롭, 닫기 버튼, Esc 키로 닫을 수 있습니다.</p></Modal></>;
}

function OpenDemo() {
  const [open, setOpen] = useState(true);
  return <>{!open && <Button label="열린 상태 다시 보기" onClick={() => setOpen(true)} />}<Modal id="modal-open" open={open} title="알림" onClose={() => setOpen(false)} footer={<><Button variant="ghost" label="취소" onClick={() => setOpen(false)} /><Button label="확인" onClick={() => setOpen(false)} /></>}><p>로드 시 열린 상태로 표시되는 Modal입니다.</p><p>헤더, 본문, 푸터의 기본 구조와 전체 브라우저 기준 오버레이를 확인할 수 있습니다.</p></Modal></>;
}

function SizeDemo() {
  const [size, setSize] = useState<string | null>(null);
  return <><div className="modal_demo-row">{['sm', 'md', 'lg', 'fullscreen'].map((value) => <Button key={value} variant="outline" label={value === 'md' ? 'Default' : value[0].toUpperCase() + value.slice(1)} onClick={() => setSize(value)} />)}</div>{size && <Modal open size={size} title={`${size} Modal`} onClose={() => setSize(null)} footer={<Button label="닫기" onClick={() => setSize(null)} />}><p>{size === 'fullscreen' ? '브라우저 전체를 사용하는 대화상자입니다.' : `${size} 크기의 대화상자입니다.`}</p></Modal>}</>;
}

function FooterDemo() {
  const [open, setOpen] = useState(false);
  return <><Button label="새 항목 추가" onClick={() => setOpen(true)} /><Modal open={open} title="새 항목 추가" onClose={() => setOpen(false)} footer={actions(() => setOpen(false), '저장')}><div className="form_field"><label className="form_field-label" htmlFor="modal-item-name">이름</label><input className="input" id="modal-item-name" placeholder="항목 이름" /></div></Modal></>;
}

function FooterAlignDemo() {
  const [align, setAlign] = useState<string | null>(null);
  return <><div className="modal_demo-row">{['start', 'center', 'end', 'between', 'even'].map((value) => <Button key={value} variant="outline" label={value} onClick={() => setAlign(value)} />)}</div>{align && <Modal open title={`${align} 정렬`} footerAlign={align} onClose={() => setAlign(null)} footer={align === 'between' ? <><div className="modal_footer-group"><Button variant="ghost" color="danger" label="삭제" /></div><div className="modal_footer-group">{actions(() => setAlign(null))}</div></> : actions(() => setAlign(null))}><p>footerAlign=&quot;{align}&quot;</p></Modal>}</>;
}

function ConfirmDemo() {
  const [open, setOpen] = useState(false);
  return <><Button color="danger" label="삭제" onClick={() => setOpen(true)} /><Modal open={open} size="sm" title="항목 삭제" aria-describedby="modal-confirm-desc" onClose={() => setOpen(false)} footer={actions(() => setOpen(false), '삭제', 'danger')}><p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p></Modal></>;
}

function FormDemo() {
  const [open, setOpen] = useState(false);
  return <><Button variant="outline" label="프로필 편집" onClick={() => setOpen(true)} /><Modal open={open} title="프로필 편집" onClose={() => setOpen(false)} footer={actions(() => setOpen(false), '저장')}><div className="demo-stack"><div className="form_field"><label className="form_field-label" htmlFor="modal-name">이름</label><input className="input" id="modal-name" defaultValue="홍길동" /></div><div className="form_field"><label className="form_field-label" htmlFor="modal-email">이메일</label><input className="input" id="modal-email" type="email" defaultValue="hong@example.com" /></div></div></Modal></>;
}

function ScrollDemo() {
  const [open, setOpen] = useState(false);
  return <><Button variant="ghost" label="이용 약관 보기" onClick={() => setOpen(true)} /><Modal open={open} scrollable title="이용 약관" onClose={() => setOpen(false)} footer={actions(() => setOpen(false), '동의')}>{Array.from({ length: 10 }, (_, index) => <p key={index}>제{index + 1}조 서비스 이용과 관련한 권리, 의무 및 책임사항을 안내합니다. 긴 본문은 Modal 본문 영역 안에서 스크롤됩니다.</p>)}</Modal></>;
}

function NestedDemo() {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);
  return <><Button label="첫 번째 Modal 열기" onClick={() => setParentOpen(true)} /><Modal open={parentOpen} title="첫 번째 Modal" className={childOpen ? 'is-stack-covered' : ''} onClose={() => setParentOpen(false)} footer={<Button label="두 번째 Modal 열기" onClick={() => setChildOpen(true)} />}><p>Modal 위에 확인 대화상자를 추가로 열 수 있습니다.</p></Modal><Modal open={childOpen} size="sm" title="두 번째 Modal" style={{ '--modal-stack-level': 1 } as React.CSSProperties} onClose={() => setChildOpen(false)} footer={actions(() => setChildOpen(false))}><p>현재 최상위 대화상자입니다.</p></Modal></>;
}

function NoBackdropDemo() {
  const [open, setOpen] = useState(false);
  return <><Button variant="outline" label="백드롭 없이 열기" onClick={() => setOpen(true)} /><Modal open={open} backdrop={false} size="sm" title="백드롭 없음" onClose={() => setOpen(false)} footer={<Button label="닫기" onClick={() => setOpen(false)} />}><p>배경을 가리지 않는 Modal입니다.</p></Modal></>;
}

const meta = { title: '피드백/Modal', component: Modal, parameters: { layout: 'padded' }, argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg', 'fullscreen'] }, footerAlign: { control: 'select', options: ['start', 'center', 'end', 'between', 'even'] } } } satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { name: '기본', render: () => <BasicDemo /> };
export const Open: Story = { name: '열린 상태', render: () => <OpenDemo /> };
export const Size: Story = { name: '크기', render: () => <SizeDemo /> };
export const Footer: Story = { name: '헤더·푸터', render: () => <FooterDemo /> };
export const FooterAlign: Story = { name: '푸터 정렬', render: () => <FooterAlignDemo /> };
export const Confirm: Story = { name: '확인 대화상자', render: () => <ConfirmDemo /> };
export const Form: Story = { name: '폼', render: () => <FormDemo /> };
export const Scroll: Story = { name: '스크롤 본문', render: () => <ScrollDemo /> };
export const Nested: Story = { name: '중첩 Modal', render: () => <NestedDemo /> };
export const NoBackdrop: Story = { name: '백드롭 없음', render: () => <NoBackdropDemo /> };

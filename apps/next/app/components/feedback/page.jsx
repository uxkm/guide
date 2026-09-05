'use client';

import Alert from '@uxkm/react/alert';
import Drawer from '@uxkm/react/drawer';
import Empty from '@uxkm/react/empty';
import Modal from '@uxkm/react/modal';
import Popover from '@uxkm/react/popover';
import Progress from '@uxkm/react/progress';
import Skeleton from '@uxkm/react/skeleton';
import Snackbar from '@uxkm/react/snackbar';
import Spin from '@uxkm/react/spin';
import Tooltip from '@uxkm/react/tooltip';
import Link from 'next/link';
import { DemoSection } from '../../../src/demo/DemoSection.jsx';

export default function FeedbackPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">
            <Link href="/components" className="link color_accent">
              컴포넌트
            </Link>
            {' · Feedback'}
          </p>
          <h1>Feedback</h1>
          <p className="lead">피드백 컴포넌트를 렌더합니다. Modal·Drawer는 열린 상태로 표시합니다.</p>
        </header>

        <DemoSection id="alert" title="Alert" path="@uxkm/react/alert">
          <Alert color="info" description="알림 메시지 데모입니다." />
        </DemoSection>

        <DemoSection id="snackbar" title="Snackbar" path="@uxkm/react/snackbar">
          <Snackbar message="저장되었습니다." motion="none" />
        </DemoSection>

        <DemoSection id="empty" title="Empty" path="@uxkm/react/empty">
          <Empty description="표시할 데이터가 없습니다." />
        </DemoSection>

        <DemoSection id="spin" title="Spin" path="@uxkm/react/spin">
          <Spin tip="로딩 중" />
        </DemoSection>

        <DemoSection id="skeleton" title="Skeleton" path="@uxkm/react/skeleton">
          <Skeleton paragraph />
        </DemoSection>

        <DemoSection id="progress" title="Progress" path="@uxkm/react/progress">
          <Progress percent={64} showInfo block />
        </DemoSection>

        <DemoSection id="tooltip" title="Tooltip" path="@uxkm/react/tooltip">
          <Tooltip open content="짧은 도움말입니다." triggerContent="툴팁 데모" />
        </DemoSection>

        <DemoSection id="popover" title="Popover" path="@uxkm/react/popover">
          <Popover open triggerContent="Popover 데모">
            Popover 본문 데모입니다.
          </Popover>
        </DemoSection>

        <DemoSection id="modal" title="Modal" path="@uxkm/react/modal">
          <Modal open id="modal-demo" title="Modal 데모" backdrop={false}>
            Modal을 불러온 상태입니다.
          </Modal>
        </DemoSection>

        <DemoSection id="drawer" title="Drawer" path="@uxkm/react/drawer">
          <Drawer open id="drawer-demo" title="Drawer 데모" placement="right" backdrop={false}>
            Drawer를 불러온 상태입니다.
          </Drawer>
        </DemoSection>

        <p>
          <Link href="/components" className="link color_primary">
            ← 컴포넌트 목록
          </Link>
        </p>
      </div>
    </main>
  );
}

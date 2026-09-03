import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualAlert from '../../react/src/components/feedback/Alert/Alert.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualLink from '../../react/src/components/basic/Link/Link.jsx';
import {
  booleanControlArg,
  hiddenArgTypes,
  stringControlArg,
} from './shared/storyArgTypes';

const Alert = ActualAlert as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Link = ActualLink as React.ComponentType<any>;

function Demo({ children }: { children: React.ReactNode }) {
  return <div className="demo-stack alert-demo">{children}</div>;
}

type AlertStoryArgs = {
  color?: 'info' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  closable?: boolean;
  showIcon?: boolean;
  banner?: boolean;
  title?: string;
  description?: string;
  role?: 'alert' | 'status';
};

function alertPropsFromArgs(args: Record<string, unknown>) {
  return {
    color: args.color,
    size: args.size,
    closable: args.closable === true,
    showIcon: args.showIcon !== false,
    banner: args.banner === true,
    title: typeof args.title === 'string' && args.title ? args.title : undefined,
    description: typeof args.description === 'string' ? args.description : undefined,
    role: args.role === 'status' ? 'status' : 'alert',
  };
}

const alertControlKeys = [
  'color',
  'size',
  'title',
  'description',
  'role',
  'closable',
  'showIcon',
  'banner',
] as const;

const meta = {
  title: '피드백/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    controls: { include: [...alertControlKeys] },
    docs: { extractArgTypes: () => ({}) },
  },
  args: {
    color: 'info',
    size: 'md',
    closable: false,
    showIcon: true,
    banner: false,
    title: '알림',
    description: 'Controls로 속성을 조절해 보세요.',
    role: 'alert',
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
    role: {
      control: 'select',
      options: ['alert', 'status'],
      type: 'string',
    },
    closable: booleanControlArg,
    showIcon: booleanControlArg,
    banner: booleanControlArg,
    title: stringControlArg,
    description: stringControlArg,
    closeLabel: { table: { disable: true } },
    icon: { table: { disable: true } },
    actions: { table: { disable: true } },
    onClose: { table: { disable: true } },
  },
} satisfies Meta<AlertStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <Alert {...alertPropsFromArgs(args)} />,
};

export const Basic: Story = {
  name: '기본',
  render: () => (
    <Demo>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </Demo>
  ),
};

export const DescriptionOnly: Story = {
  name: '설명만',
  render: () => (
    <Demo>
      <Alert description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </Demo>
  ),
};

export const NoIcon: Story = {
  name: '아이콘 없음',
  render: () => (
    <Demo>
      <Alert
        showIcon={false}
        color="warning"
        title="점검 안내"
        description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다."
      />
      <Alert showIcon={false} color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
    </Demo>
  ),
};

export const Size: Story = {
  name: '크기',
  render: () => (
    <Demo>
      <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
    </Demo>
  ),
};

export const Closable: Story = {
  name: '닫기 가능',
  render: () => (
    <Demo>
      <Alert closable title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert
        closable
        color="warning"
        description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요."
      />
    </Demo>
  ),
};

export const Actions: Story = {
  name: '액션',
  render: () => (
    <Demo>
      <Alert
        color="danger"
        title="저장 실패"
        description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요."
        actions={
          <div className="alert_actions">
            <Button variant="filled" color="danger" size="sm" label="다시 시도" />
            <Button variant="ghost" size="sm" label="취소" />
          </div>
        }
      />
      <Alert
        color="info"
        title="이용 약관 변경"
        description="2026년 3월 1일부터 새 약관이 적용됩니다."
        actions={
          <div className="alert_actions">
            <Link href="#" size="sm" label="약관 보기" />
            <Button variant="text" color="primary" size="sm" label="동의하기" />
          </div>
        }
      />
    </Demo>
  ),
};

export const Banner: Story = {
  name: '배너',
  render: () => (
    <Alert
      banner
      closable
      color="warning"
      description="시스템 점검으로 일부 기능이 제한될 수 있습니다."
    />
  ),
};

export const Context: Story = {
  name: '문맥 속 사용',
  render: () => (
    <Demo>
      <Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form className="form form_vertical form_fit" noValidate>
        <Alert
          color="danger"
          title="입력 내용을 확인해 주세요"
          description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."
        />
        <div className="form_field">
          <label className="form_field-label" htmlFor="alert-email">
            이메일
          </label>
          <input
            id="alert-email"
            type="email"
            className="input is-error"
            defaultValue="invalid-email"
            aria-invalid="true"
          />
        </div>
      </form>
    </Demo>
  ),
};

import React from 'react';
import Alert from './Alert.jsx';
import Button from './Button.jsx';
import Link from './Link.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  alertClassColumns,
  alertClasses,
  alertEventColumns,
  alertEvents,
  alertPropColumns,
  alertProps,
  alertTokenColumns,
  alertTokens,
} from '@doc-data/alert-api';

const alertChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const alertChildren = [
  { name: 'children', description: '본문 (description prop 대체, Vue default 슬롯)' },
  { name: 'icon', description: '커스텀 아이콘 (alert_icon)' },
  { name: 'actions', description: '본문 아래 액션 버튼·링크' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 show-icon은 showIcon, close 이벤트는 onClose로 다룹니다.',
    tables: [{ columns: alertPropColumns, rows: alertProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description: 'Vue 슬롯에 대응하는 React prop·children입니다.',
    tables: [{ columns: alertChildColumns, rows: alertChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · Events',
    description: 'Vue close는 React onClose에 대응합니다.',
    tables: [{ columns: alertEventColumns, rows: alertEvents, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: alertClassColumns, rows: alertClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: alertTokenColumns, rows: alertTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  color: 'info',
  title: '제목',
  description: '설명 텍스트입니다.',
  closable: false,
  showIcon: true,
  size: 'md',
  role: 'alert',
};

export default {
  title: 'Components/피드백/Alert',
  id: 'components-alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
      type: { name: 'enum', summary: "'info' | 'success' | 'warning' | 'danger'" },
    },
    title: { control: 'text', type: { name: 'string', summary: 'string' } },
    description: { control: 'text', type: { name: 'string', summary: 'string' } },
    closable: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    showIcon: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    role: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '정보·성공·경고·오류 메시지를 표시하는 Alert 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <Alert {...args} />,
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function BasicExample() {
  return (
    <>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
    </>,
  ),
};

export const DescOnly = {
  name: '설명만',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '제목 없이 alert_desc만으로 짧은 메시지를 표시합니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function DescOnlyExample() {
  return (
    <>
      <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
    </>,
  ),
};

export const NoIcon = {
  name: '아이콘 없음',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function NoIconExample() {
  return (
    <>
      <Alert
        showIcon={false}
        color="warning"
        title="점검 안내"
        description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다."
      />
      <Alert
        showIcon={false}
        color="info"
        description="이 페이지는 데모 목적으로만 사용됩니다."
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
      <Alert
        showIcon={false}
        color="warning"
        title="점검 안내"
        description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다."
      />
      <Alert
        showIcon={false}
        color="info"
        description="이 페이지는 데모 목적으로만 사용됩니다."
      />
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
        story: 'alert_sm · alert_lg로 스케일을 조절합니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function SizeExample() {
  return (
    <>
      <Alert
        size="sm"
        color="info"
        title="Small"
        description="폼 필드 아래 등 좁은 영역에 사용합니다."
      />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert
        size="lg"
        color="info"
        title="Large"
        description="페이지 상단 등 눈에 띄는 안내에 사용합니다."
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
      <Alert
        size="sm"
        color="info"
        title="Small"
        description="폼 필드 아래 등 좁은 영역에 사용합니다."
      />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert
        size="lg"
        color="info"
        title="Large"
        description="페이지 상단 등 눈에 띄는 안내에 사용합니다."
      />
    </>,
  ),
};

export const Close = {
  name: '닫기 가능',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function CloseExample() {
  return (
    <>
      <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert
        closable
        color="warning"
        description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요."
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
      <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert
        closable
        color="warning"
        description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요."
      />
    </>,
  ),
};

export const Actions = {
  name: '액션',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ActionsExample() {
  return (
    <>
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
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
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
    </>,
  ),
};

export const Banner = {
  name: '배너',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';

export function BannerExample() {
  return (
    <Alert
      className="alert_banner"
      color="warning"
      closable
      description="시스템 점검으로 일부 기능이 제한될 수 있습니다."
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Alert
      className="alert_banner"
      color="warning"
      closable
      description="시스템 점검으로 일부 기능이 제한될 수 있습니다."
    />,
  ),
};

export const Context = {
  name: '문맥 속 사용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다.',
      },
      source: {
        code: `import Alert from '@uxkm/ui-react/components/Alert.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';

export function ContextExample() {
  return (
    <>
      <Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form className="form_layout" noValidate>
        <Alert
          color="danger"
          title="입력 내용을 확인해 주세요"
          description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."
        />
        <div className="form_field">
          <label className="form_label" htmlFor="alert-ex-email">
            이메일
          </label>
          <input
            type="email"
            className="input is-error"
            id="alert-ex-email"
            defaultValue="invalid-email"
            aria-invalid="true"
          />
        </div>
      </form>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다. <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form className="form_layout" noValidate>
        <Alert
          color="danger"
          title="입력 내용을 확인해 주세요"
          description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요."
        />
        <div className="form_field">
          <label className="form_label" htmlFor="alert-ex-email">
            이메일
          </label>
          <input
            type="email"
            className="input is-error"
            id="alert-ex-email"
            defaultValue="invalid-email"
            aria-invalid="true"
          />
        </div>
      </form>
    </>,
  ),
};

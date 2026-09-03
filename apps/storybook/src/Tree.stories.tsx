import type { Meta as StoryMeta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';
import ActualTree, { TreeNode as ActualTreeNode } from '../../react/src/components/data-display/Tree/Tree.jsx';
import ActualTag from '../../react/src/components/data-display/Tag/Tag.jsx';

const Tree = ActualTree as React.ComponentType<any>;
const TreeNode = ActualTreeNode as React.ComponentType<any>;
const Tag = ActualTag as React.ComponentType<any>;

const Check = ({ label, checked = false }: { label: string; checked?: boolean }) => (
  <label className="tree_check">
    <input type="checkbox" defaultChecked={checked} aria-label={label} />
  </label>
);

const FileIcon = <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>;
const ImageIcon = <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>;

const meta = {
  title: '데이터 표시/Tree',
  component: Tree,
  parameters: { layout: 'fullscreen' },
  args: {
    bordered: false,
    lines: false,
    compact: false,
    multiselectable: false,
    ariaLabel: '파일 탐색기',
    className: '',
  },
  argTypes: {
    bordered: {
      control: 'boolean',
      description: '테두리 트리',
    },
    lines: {
      control: 'boolean',
      description: '계층 연결선 표시',
    },
    compact: {
      control: 'boolean',
      description: '조밀한 패딩',
    },
    multiselectable: {
      control: 'boolean',
      description: '다중 선택 허용',
    },
    ariaLabel: {
      control: 'text',
      description: '접근성 이름',
    },
    className: {
      control: 'text',
      description: '사용자 정의 클래스',
    },
    children: { table: { disable: true }, description: 'TreeNode 자식' },
  },
} satisfies StoryMeta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Playground: Story = {
  name: 'Playground',
  args: { bordered: true },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="src" expanded toggleLabel="src 폴더 접기">
          <TreeNode label="components" expanded toggleLabel="components 폴더 접기">
            <TreeNode label="button.html" selected />
            <TreeNode label="card.html" />
          </TreeNode>
          <TreeNode label="index.html" />
        </TreeNode>
        <TreeNode label="public" expanded={false} toggleLabel="public 폴더 펼치기">
          <TreeNode label="favicon.ico" />
        </TreeNode>
      </Tree>
    </Demo>
  ),
};

export const Basic: Story = {
  name: '기본',
  args: { bordered: true },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="src" expanded toggleLabel="src 폴더 접기">
          <TreeNode label="components" expanded toggleLabel="components 폴더 접기">
            <TreeNode label="button.html" selected />
            <TreeNode label="card.html" />
          </TreeNode>
          <TreeNode label="index.html" />
        </TreeNode>
        <TreeNode label="public" expanded={false} toggleLabel="public 폴더 펼치기">
          <TreeNode label="favicon.ico" />
        </TreeNode>
      </Tree>
    </Demo>
  ),
};

export const Simple: Story = {
  name: '간단',
  args: { ariaLabel: '카테고리' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="전자기기" expanded toggleLabel="전자기기 접기">
          <TreeNode label="노트북" />
          <TreeNode label="스마트폰" />
        </TreeNode>
        <TreeNode label="의류" />
      </Tree>
    </Demo>
  ),
};

export const Lines: Story = {
  name: '연결선',
  args: { lines: true, bordered: true, ariaLabel: '조직도' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="개발본부" expanded toggleLabel="개발본부 접기">
          <TreeNode label="프론트엔드팀" expanded toggleLabel="프론트엔드팀 접기">
            <TreeNode label="홍길동" />
            <TreeNode label="김철수" />
          </TreeNode>
          <TreeNode label="백엔드팀" expanded={false} toggleLabel="백엔드팀 펼치기">
            <TreeNode label="이영희" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="디자인본부" />
      </Tree>
    </Demo>
  ),
};

export const Compact: Story = {
  name: '컴팩트',
  args: { compact: true, bordered: true, ariaLabel: '권한 목록' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="관리자" expanded toggleLabel="관리자 접기">
          <TreeNode label="사용자 관리" />
          <TreeNode label="설정 변경" />
          <TreeNode label="로그 조회" />
        </TreeNode>
        <TreeNode label="편집자" expanded={false} toggleLabel="편집자 펼치기">
          <TreeNode label="콘텐츠 작성" />
        </TreeNode>
        <TreeNode label="뷰어" />
      </Tree>
    </Demo>
  ),
};

export const PlusToggle: Story = {
  name: '+/− 토글',
  args: { bordered: true, ariaLabel: '메뉴 구조' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="가이드" expanded plusToggle toggleLabel="가이드 접기">
          <TreeNode label="시작하기" expanded plusToggle toggleLabel="시작하기 접기">
            <TreeNode label="설치" />
            <TreeNode label="빠른 시작" />
          </TreeNode>
          <TreeNode label="컴포넌트" expanded={false} plusToggle toggleLabel="컴포넌트 펼치기">
            <TreeNode label="Button" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </Demo>
  ),
};

export const Checkbox: Story = {
  name: '체크박스',
  args: { bordered: true, multiselectable: true, ariaLabel: '권한 선택' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="대시보드" expanded toggleLabel="대시보드 접기" prefix={<Check label="대시보드" checked />}>
          <TreeNode label="조회" prefix={<Check label="조회" checked />} />
          <TreeNode label="보내기" prefix={<Check label="보내기" />} />
        </TreeNode>
        <TreeNode label="설정" expanded={false} toggleLabel="설정 펼치기" prefix={<Check label="설정" />}>
          <TreeNode label="사용자 관리" prefix={<Check label="사용자 관리" />} />
          <TreeNode label="알림 설정" prefix={<Check label="알림 설정" />} />
        </TreeNode>
      </Tree>
    </Demo>
  ),
};

export const Meta: Story = {
  name: '메타 · 배지',
  args: { bordered: true, ariaLabel: '프로젝트 파일' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode
          label="assets"
          meta="3개"
          expanded
          toggleLabel="assets 접기"
          icon={<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>}
        >
          <TreeNode label="logo.png" meta="24 KB" icon={ImageIcon} />
          <TreeNode label="hero.jpg" meta="1.2 MB" icon={ImageIcon} />
          <TreeNode label="styles.css" meta="8 KB" icon={FileIcon} />
        </TreeNode>
        <TreeNode label="package.json" icon={FileIcon} metaSlot={<Tag color="default" label="수정됨" />} />
      </Tree>
    </Demo>
  ),
};

export const Disabled: Story = {
  name: '비활성',
  args: { bordered: true, ariaLabel: '기능 목록' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="기본 기능" expanded toggleLabel="기본 기능 접기">
          <TreeNode label="대시보드" />
          <TreeNode label="고급 분석 (Pro)" disabled />
          <TreeNode label="API 연동 (Enterprise)" disabled />
        </TreeNode>
        <TreeNode label="베타 기능" disabled expanded={false} toggleLabel="베타 기능 펼치기">
          <TreeNode label="AI 어시스턴트" disabled />
        </TreeNode>
      </Tree>
    </Demo>
  ),
};

export const Selectable: Story = {
  name: '선택 가능',
  args: { bordered: true, ariaLabel: '네비게이션' },
  render: (args) => (
    <Demo>
      <Tree {...args}>
        <TreeNode label="문서" expanded link toggleLabel="문서 접기">
          <TreeNode label="시작하기" selected link />
          <TreeNode label="컴포넌트" link />
          <TreeNode label="디자인 토큰" link />
        </TreeNode>
        <TreeNode label="변경 이력" link />
      </Tree>
    </Demo>
  ),
};

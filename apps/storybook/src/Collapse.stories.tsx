import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';
import ActualCollapse from '../../react/src/components/miscellaneous/Collapse/Collapse.jsx';
import ActualCollapsePanel from '../../react/src/components/miscellaneous/Collapse/CollapsePanel.jsx';
import ActualCollapseExternal from '../../react/src/components/miscellaneous/Collapse/CollapseExternal.jsx';

const Collapse = ActualCollapse as React.ComponentType<any>;
const CollapsePanel = ActualCollapsePanel as React.ComponentType<any>;
const CollapseExternal = ActualCollapseExternal as React.ComponentType<any>;

const meta = {
  title: '기타/Collapse', component: Collapse, subcomponents: { CollapsePanel, CollapseExternal },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="collapse-story-demo"><Story /></div>],
  args: { variant: 'bordered', size: 'md', accordion: false },
  argTypes: {
    ...hiddenArgTypes,
    variant: { control: 'select', options: ['bordered', 'ghost', 'card'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    effect: { control: 'select', options: ['', 'slide'], description: '펼침 애니메이션' },
    accordion: { control: 'boolean' },
  },
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: { variant: 'bordered', size: 'md', accordion: false },
  render: (args) => (
    <Collapse {...args}>
      <CollapsePanel label="패널 1" open content="Controls로 속성을 조절해 보세요." />
      <CollapsePanel label="패널 2" content="두 번째 패널입니다." />
    </Collapse>
  ),
};

export const Standalone: Story = {
  name: '외부 트리거',
  render: (args) => <CollapseExternal triggerLabel="주문 상세 보기" lead={<p className="collapse-story-lead">주문이 접수되었습니다. 배송 전까지 아래에서 상세 내역을 확인할 수 있습니다.</p>}><dl className="list list_definition list_inline list_block list_compact"><dt className="list_title">주문번호</dt><dd className="list_desc">ORD-2024-0815</dd><dt className="list_title">결제금액</dt><dd className="list_desc">₩42,000</dd><dt className="list_title">배송지</dt><dd className="list_desc">서울특별시 강남구 테헤란로 123</dd></dl></CollapseExternal>,
};

export const Basic: Story = {
  name: '패널 그룹',
  render: (args) => <Collapse><CollapsePanel label="배송 정보" open content="평일 기준 2~3일 이내 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다." /><CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다. 무이자 할부는 카드사 정책에 따릅니다." /><CollapsePanel label="교환·반품 안내" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다." /></Collapse>,
};

export const AccordionMode: Story = {
  name: '단일 열기',
  render: (args) => <Collapse accordion><CollapsePanel label="알림 설정" open content="이메일·푸시·SMS 알림 수신 여부를 설정합니다." /><CollapsePanel label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." /><CollapsePanel label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." /></Collapse>,
};

export const Skin: Story = {
  name: '스킨',
  render: (args) => <div className="collapse-story-stack"><Collapse variant="ghost"><CollapsePanel label="Ghost" open content="배경만 강조하는 고스트 스킨입니다. 필터·사이드 패널에 적합합니다." /></Collapse><Collapse variant="card"><CollapsePanel label="Card" open content="패널마다 카드 형태로 분리됩니다." /><CollapsePanel label="두 번째 패널" content="카드 스킨의 두 번째 패널입니다." /></Collapse></div>,
};

export const Extra: Story = { name: '보조 정보', render: (args) => <Collapse><CollapsePanel label="진행 중" open content="현재 처리 중인 요청 3건입니다." extra="3건" /><CollapsePanel label="처리 완료" content="최근 일주일간 완료된 요청 12건입니다." extra="지난 7일" /></Collapse> };
export const Disabled: Story = { name: '비활성', render: (args) => <Collapse><CollapsePanel label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." /><CollapsePanel label="팀 전용 (권한 없음)" disabled content="팀 멤버만 접근할 수 있는 내부 문서입니다." /></Collapse> };
export const Size: Story = { name: '크기', render: (args) => <div className="collapse-story-stack"><Collapse size="sm"><CollapsePanel label="Small" open content="작은 콜랩스 — 좁은 패딩." /></Collapse><Collapse size="lg"><CollapsePanel label="Large" open content="큰 콜랩스 — 넓은 패딩과 큰 글자." /></Collapse></div> };
export const Slide: Story = { name: '슬라이드', render: (args) => <div className="collapse-story-stack"><Collapse effect="slide"><CollapsePanel label="배송 정보" open content="평일 기준 2~3일 이내 출고됩니다. 열고 닫을 때 높이가 부드럽게 전환됩니다." /><CollapsePanel label="결제 수단" content="신용카드, 계좌이체, 간편결제를 지원합니다." /></Collapse><CollapseExternal triggerLabel="상세 보기" effect="slide"><p>외부 트리거로 연결된 영역도 슬라이드로 펼쳐집니다.</p></CollapseExternal></div> };

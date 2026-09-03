import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';
import ActualAccordion from '../../react/src/components/miscellaneous/Accordion/Accordion.jsx';
import ActualAccordionItem from '../../react/src/components/miscellaneous/Accordion/AccordionItem.jsx';

const Accordion = ActualAccordion as React.ComponentType<any>;
const AccordionItem = ActualAccordionItem as React.ComponentType<any>;

const meta = {
  title: '기타/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="accordion-story-demo"><Story /></div>],
  args: { variant: 'card', size: 'md', multiple: false },
  argTypes: {
    ...hiddenArgTypes,
    variant: { control: 'select', options: ['bordered', 'flush', 'card'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    effect: { control: 'select', options: ['', 'slide'], description: '펼침 애니메이션' },
    multiple: { control: 'boolean' },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: { variant: 'card', size: 'md', multiple: false },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem label="섹션 1" open content="Controls로 속성을 조절해 보세요." />
      <AccordionItem label="섹션 2" content="두 번째 패널입니다." />
    </Accordion>
  ),
};

export const Basic: Story = {
  name: '기본',
  render: (args) => <Accordion variant="card"><AccordionItem label="배송은 얼마나 걸리나요?" content="평일 기준 2~3일 이내 출고되며, 도서·산간 지역은 1~2일 추가 소요될 수 있습니다." /><AccordionItem label="교환·반품은 어떻게 하나요?" open content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다. 단순 변심 반품 시 왕복 배송비가 부과됩니다." /><AccordionItem label="해외 배송이 가능한가요?" content="현재 국내 배송만 지원합니다. 해외 배송은 준비 중이며 오픈 시 공지사항으로 안내드립니다." /></Accordion>,
};

export const Multiple: Story = {
  name: '다중 열기',
  render: (args) => <Accordion multiple><AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." /><AccordionItem label="개인정보" open content="프로필 공개 범위와 데이터 다운로드를 관리합니다." /><AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." /></Accordion>,
};

export const Flush: Story = {
  name: '플러시',
  render: (args) => <Accordion variant="flush"><AccordionItem label="일반" open content="언어, 시간대, 테마 등 기본 환경 설정입니다." /><AccordionItem label="접근성" content="고대비 모드, 모션 감소, 스크린 리더 안내를 조정합니다." /><AccordionItem label="고급" content="개발자 도구와 실험 기능을 켜거나 끕니다." /></Accordion>,
};

export const Bordered: Story = {
  name: '보더',
  render: (args) => <Accordion variant="bordered"><AccordionItem label="알림" open content="이메일·푸시 알림 수신 여부를 설정합니다." /><AccordionItem label="개인정보" content="프로필 공개 범위와 데이터 다운로드를 관리합니다." /><AccordionItem label="보안" content="비밀번호 변경과 2단계 인증을 설정합니다." /></Accordion>,
};

export const Extra: Story = {
  name: '보조 정보',
  render: (args) => <Accordion><AccordionItem label="미해결 문의" open content="답변이 필요한 고객 문의 3건이 있습니다." extra={<span className="badge badge_count color_danger badge_sm">3</span>} /><AccordionItem label="처리 완료" content="최근 일주일간 완료된 문의 12건입니다." extra="지난 7일" /></Accordion>,
};

export const CustomSlot: Story = {
  name: '슬롯 커스텀',
  render: (args) => (
    <Accordion variant="card">
      <AccordionItem
        open
        title={<><strong>프로 요금제</strong> <span className="tag tag_outline color_primary tag_sm">추천</span></>}
      >
        <div>
          <p>제목과 본문에 원하는 컴포넌트와 마크업을 자유롭게 배치할 수 있습니다.</p>
          <ul><li>팀원 10명</li><li>프로젝트 무제한</li><li>우선 기술 지원</li></ul>
        </div>
      </AccordionItem>
      <AccordionItem title={<><strong>엔터프라이즈</strong> <span className="tag tag_outline color_default tag_sm">문의</span></>}>
        <p>조직 규모와 보안 요구사항에 맞춰 별도 구성합니다.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  name: '비활성',
  render: (args) => <Accordion><AccordionItem label="공개 문서" open content="누구나 열람할 수 있는 가이드 문서입니다." /><AccordionItem label="팀 전용 (권한 없음)" disabled content="팀 멤버만 접근할 수 있는 내부 문서입니다." /></Accordion>,
};

export const Size: Story = {
  name: '크기',
  render: (args) => <div className="accordion-story-stack"><Accordion size="sm"><AccordionItem label="Small" open content="작은 아코디언 — 좁은 패딩." /></Accordion><Accordion size="lg"><AccordionItem label="Large" open content="큰 아코디언 — 넓은 패딩과 큰 글자." /></Accordion></div>,
};

export const Slide: Story = {
  name: '슬라이드',
  render: (args) => <Accordion variant="card" effect="slide"><AccordionItem label="배송 안내" open content="평일 기준 2~3일 이내 출고됩니다. 패널을 열고 닫을 때 높이가 부드럽게 전환됩니다." /><AccordionItem label="교환·반품" content="수령 후 7일 이내 마이페이지에서 신청할 수 있습니다." /><AccordionItem label="고객센터" content="1588-0000 (평일 09:00–18:00). 채팅 상담도 지원합니다." /></Accordion>,
};

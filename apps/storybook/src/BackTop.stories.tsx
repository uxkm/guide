import type { Meta, StoryObj } from '@storybook/react-vite';
import { hiddenArgTypes } from './shared/storyArgTypes';
import ActualBackTop from '../../react/src/components/miscellaneous/BackTop/BackTop.jsx';
const BackTop = ActualBackTop as React.ComponentType<any>;
const text = ['상품 상세 정보와 주요 사양을 확인하세요.', '리뷰 4.8점 · 무료 반품 30일', '배송 안내 · 교환 및 반품', '함께 보면 좋은 상품', '고객센터와 자주 묻는 질문', '이용 약관과 개인정보 처리방침'];
function Demo({ id, children }: { id: string; children: React.ReactNode }) { return <div className="back_top_demo-wrap"><div id={id} className="back_top_demo-scroll" tabIndex={0} aria-label="스크롤 예시 영역"><div className="back_top_demo-content"><p>아래로 스크롤하면 버튼이 표시됩니다.</p>{text.map((item, i) => <p key={i}>{item}</p>)}</div></div>{children}</div>; }
const meta = {
  id: '기타-back-top',
  title: '기타/BackTop',
  component: BackTop,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="back-top-story-demo"><Story /></div>],
  args: { visibilityHeight: 80, size: 'md', color: 'primary', label: '', ariaLabel: '맨 위로', interactive: true, ripple: true, className: '' },
  argTypes: {
    ...hiddenArgTypes,
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['', 'primary', 'ghost'] },
    visibilityHeight: { control: 'number' },
    interactive: { control: 'boolean' },
    ripple: { control: 'boolean', description: '클릭 리플 효과' },
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
    className: { control: 'text', description: '루트 추가 클래스' },
    target: { table: { disable: true }, description: '스크롤 컨테이너 선택자' },
    onClick: { table: { disable: true } },
  },
} satisfies Meta<typeof BackTop>;
export default meta; type Story = StoryObj<typeof meta>;
export const Playground: Story = { name: 'Playground', args: { visibilityHeight: 80, size: 'md', color: 'primary', label: '', ariaLabel: '맨 위로', interactive: true }, render: (args) => <Demo id="back-top-playground"><BackTop {...args} target="#back-top-playground" /></Demo> };
export const Basic: Story = { name: '기본', render: (args) => <Demo id="back-top-basic"><BackTop {...args} target="#back-top-basic" visibilityHeight={80} /></Demo> };
export const Visibility: Story = { name: '표시 임계값', render: (args) => <Demo id="back-top-visibility"><BackTop target="#back-top-visibility" visibilityHeight={200} color="primary" /></Demo> };
export const Size: Story = { name: '크기', render: (args) => <div className="back-top-story-stack"><Demo id="back-top-small"><BackTop target="#back-top-small" visibilityHeight={60} size="sm" /></Demo><Demo id="back-top-large"><BackTop target="#back-top-large" visibilityHeight={60} size="lg" color="ghost" /></Demo></div> };
export const Custom: Story = { name: '커스텀 콘텐츠', render: (args) => <Demo id="back-top-custom"><BackTop target="#back-top-custom" visibilityHeight={100} color="primary" label="TOP" /></Demo> };
export const WindowScroll: Story = { name: '페이지 스크롤', render: (args) => <><p>target을 생략하면 페이지 스크롤을 기준으로 동작합니다.</p><BackTop visibilityHeight={200} color="primary" /></> };

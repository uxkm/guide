import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualList, { ListItem as ActualListItem } from '../../react/src/components/data-display/List/List.jsx';
import ActualAvatar from '../../react/src/components/data-display/Avatar/Avatar.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const List = ActualList as React.ComponentType<any>;
const ListItem = ActualListItem as React.ComponentType<any>;
const Avatar = ActualAvatar as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const meta = { title: '데이터 표시/List', component: List, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof List>;
export default meta;
type Story = StoryObj<typeof meta>;
const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;

export const Basic: Story = { name: '기본', render: () => <Demo><List><ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} /><ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} /><ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} /></List></Demo> };
export const Bullet: Story = { name: '불릿', render: () => <Demo><List variant="bullet"><ListItem>디자인 토큰 정의</ListItem><ListItem>컴포넌트 문서화</ListItem><ListItem>접근성 검토</ListItem></List></Demo> };
export const BulletRich: Story = { name: '불릿 · 설명', render: () => <Demo><List variant="bullet"><ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." /><ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." /><ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." /></List></Demo> };
export const BulletVariants: Story = { name: '불릿 변형', render: () => <Demo><List variant="bullet" className="list_bullet-circle"><ListItem>원형 마커 항목 A</ListItem><ListItem>원형 마커 항목 B</ListItem></List><List variant="bullet" className="list_bullet-square"><ListItem>사각 마커 항목 A</ListItem><ListItem>사각 마커 항목 B</ListItem></List></Demo> };
export const Ordered: Story = { name: '번호', render: () => <Demo><List variant="ordered"><ListItem>요구사항 분석</ListItem><ListItem>와이어프레임 작성</ListItem><ListItem>프로토타입 검증</ListItem><ListItem>개발 및 배포</ListItem></List></Demo> };
export const OrderedVariants: Story = { name: '번호 변형', render: () => <Demo><List variant="ordered" className="list_ordered-alpha"><ListItem>첫 번째 옵션</ListItem><ListItem>두 번째 옵션</ListItem></List><List variant="ordered" className="list_ordered-roman"><ListItem>서론</ListItem><ListItem>본론</ListItem><ListItem>결론</ListItem></List></Demo> };
export const Hierarchical: Story = { name: '계층 번호', render: () => <Demo><List variant="ordered" className="list_ordered-outline"><ListItem>요구사항 정의</ListItem><ListItem>설계<List variant="ordered" className="list_ordered-outline"><ListItem>정보 구조</ListItem><ListItem>UI 설계</ListItem></List></ListItem><ListItem>개발 및 배포</ListItem></List></Demo> };
export const Bordered: Story = { name: '테두리', render: () => <Demo><List bordered><ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." /><ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." /><ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." /></List></Demo> };
export const Links: Story = { name: '링크', render: () => <Demo><List split>{['홈', '프로젝트', '설정'].map((label) => <ListItem key={label}><a className="list_link" href="#" data-ripple="true"><span className="list_title">{label}</span><Icon className="list_action" name="chevron" /></a></ListItem>)}</List></Demo> };
export const Buttons: Story = { name: '버튼 항목', render: () => <Demo><List bordered>{['홍길동', '김철수'].map((name, index) => <ListItem key={name}><button className="list_link" type="button" data-ripple="true"><Avatar color={index ? 'success' : 'primary'} initials={name[0]} ariaHidden /><span className="list_content"><span className="list_title">{name}</span><span className="list_meta">멤버 선택</span></span></button></ListItem>)}</List></Demo> };
export const Actions: Story = { name: '액션', render: () => <Demo><List bordered><ListItem title="디자인 시스템" description="마지막 수정 2시간 전" actions={<Button variant="text" size="sm" label="열기" />} /><ListItem title="컴포넌트 가이드" description="마지막 수정 어제" actions={<Button variant="text" size="sm" label="열기" />} /></List></Demo> };
export const Definition: Story = { name: '정의 목록', render: () => <Demo><List variant="definition" style={{ maxWidth: '34rem' }}><ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." /><ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." /><ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." /></List></Demo> };
export const DefinitionInline: Story = { name: '정의 목록 · 인라인', render: () => <Demo><List variant="definition" layout="inline" inlineLabelWidth="8rem"><ListItem title="OOCSS" description="구조와 스킨 분리" /><ListItem title="Design Token" description="디자인 값 변수화" /><ListItem title="WCAG" description="웹 접근성 지침" /></List></Demo> };
export const DefinitionRight: Story = { name: '정의 목록 · 우측 정렬', render: () => <Demo><List variant="definition" layout="inline" descAlign="right" block><ListItem title="주문번호" description="ORD-2024-0815" /><ListItem title="결제금액" description="₩42,000" /><ListItem title="배송지" description="서울특별시 강남구" /></List></Demo> };

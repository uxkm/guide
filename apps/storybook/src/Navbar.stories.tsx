import type { Meta, StoryObj } from '@storybook/react-vite';
import ActualNavbar from '../../react/src/components/navigation/Navbar/Navbar.jsx';
import ActualNavbarItem from '../../react/src/components/navigation/Navbar/NavbarItem.jsx';
import ActualNavbarList from '../../react/src/components/navigation/Navbar/NavbarList.jsx';
import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import ActualInput from '../../react/src/components/form/Input/Input.jsx';
import ActualBadge from '../../react/src/components/data-display/Badge/Badge.jsx';

const Navbar = ActualNavbar as React.ComponentType<any>;
const NavbarItem = ActualNavbarItem as React.ComponentType<any>;
const NavbarList = ActualNavbarList as React.ComponentType<any>;
const Button = ActualButton as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const Input = ActualInput as React.ComponentType<any>;
const Badge = ActualBadge as React.ComponentType<any>;
const Menu = ({ children }: any) => <NavbarList>{children}</NavbarList>;
const Item = ({ label, active = false, badge }: any) => <NavbarItem label={label} active={active} badge={badge} />;

const meta = { title: '네비게이션/Navbar', component: Navbar, subcomponents: { NavbarItem, NavbarList }, decorators: [(Story) => <div className="navbar-story-demo"><Story /></div>], parameters: { layout: 'fullscreen' }, argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg'] }, borderless: { control: 'boolean' }, dark: { control: 'boolean' }, sticky: { control: 'boolean' }, responsive: { control: 'boolean' } } } satisfies Meta<typeof Navbar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { name: '기본', render: () => <Navbar brand="UXKM" items={<Menu><Item label="홈" active /><Item label="컴포넌트" /><Item label="토큰" /><Item label="접근성" /></Menu>} /> };
export const Brand: Story = { name: '브랜드', render: () => <Navbar brand="HTML Components" brandIcon={<Icon name="grid" className="navbar_brand-icon" />} items={<Menu><Item label="가이드" active /><Item label="리소스" /></Menu>} /> };
export const Actions: Story = { name: '액션 영역', render: () => <Navbar brand="Dashboard" items={<Menu><Item label="개요" active /><Item label="분석" /><Item label="설정" /></Menu>} actions={<><Button variant="ghost" size="sm" iconOnly ariaLabel="알림" iconBefore={<Icon name="bell" />} /><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></>} /> };
export const Search: Story = { name: '검색', render: () => <Navbar brand="Docs" items={<Menu><Item label="시작하기" /><Item label="컴포넌트" active /><Item label="패턴" /></Menu>} search={<Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autoComplete="off" ariaLabel="문서 검색" />} actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />} /> };
export const Size: Story = { name: '크기', render: () => <div className="navbar-stack-demo"><Navbar brand="Small" size="sm" items={<Menu><Item label="메뉴" active /></Menu>} /><Navbar brand="Default" items={<Menu><Item label="메뉴" active /></Menu>} /><Navbar brand="Large" size="lg" items={<Menu><Item label="메뉴" active /></Menu>} /></div> };
export const Variant: Story = { name: '스타일 변형', render: () => <div className="navbar-stack-demo"><Navbar brand="Borderless" borderless items={<Menu><Item label="홈" active /><Item label="소개" /></Menu>} /><Navbar brand="Dark Surface" dark items={<Menu><Item label="홈" active /><Item label="소개" /></Menu>} /><div className="navbar-scroll-demo"><Navbar brand="Sticky" sticky items={<Menu><Item label="고정" active /></Menu>} /><div className="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div></div> };
export const BadgeDemo: Story = { name: '배지', render: () => <Navbar brand="Inbox" items={<Menu><Item label="받은편지함" active /><Item label="알림" badge={<Badge color="danger" label="3" />} /><Item label="보관함" /></Menu>} /> };
export const Responsive: Story = { name: '반응형', render: () => <div className="navbar-responsive-demo"><Navbar brand="Mobile" responsive collapseId="navbar-responsive-demo" items={<Menu><Item label="홈" active /><Item label="제품" /><Item label="가격" /><Item label="문의" /></Menu>} actions={<><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="시작하기" /></>} /></div> };

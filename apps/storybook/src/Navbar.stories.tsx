import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  hiddenArgTypes,
  mapNavbarBrandArgs,
  NAVBAR_BRAND_IMAGE_CUSTOM,
  navbarBrandImageSelectArg,
  navbarBrandModeArg,
  collapseIdArg,
  ariaLabelArg,
} from './shared/storyArgTypes';
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
const demoMenu = (
  <Menu>
    <Item label="가이드" active />
    <Item label="리소스" />
  </Menu>
);
const playgroundMenu = (
  <Menu>
    <Item label="홈" active />
    <Item label="컴포넌트" />
    <Item label="토큰" />
  </Menu>
);

const meta = {
  title: '네비게이션/Navbar',
  component: Navbar,
  subcomponents: { NavbarItem, NavbarList },
  decorators: [(Story) => <div className="navbar-story-demo"><Story /></div>],
  parameters: { layout: 'fullscreen' },
  args: {
    size: 'md',
    borderless: false,
    dark: false,
    sticky: false,
    responsive: false,
    collapseId: '',
    ariaLabel: '',
  },
  argTypes: {
    ...hiddenArgTypes,
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    borderless: { control: 'boolean' },
    dark: { control: 'boolean' },
    sticky: { control: 'boolean' },
    responsive: { control: 'boolean' },
    brandMode: navbarBrandModeArg,
    brandImage: { ...navbarBrandImageSelectArg, description: '브랜드 로고 이미지 경로' },
    brandImageCustom: {
      control: 'text',
      type: { name: 'string', summary: 'string' },
      description: '직접 입력 URL (이미지 경로가 "직접 입력"일 때)',
      if: { arg: 'brandImage', eq: NAVBAR_BRAND_IMAGE_CUSTOM },
    },
    brand: {
      control: 'text',
      type: { name: 'string', summary: 'string' },
      description: '브랜드 텍스트',
      if: { arg: 'brandMode', eq: 'text' },
    },
    brandAlt: {
      control: 'text',
      type: { name: 'string', summary: 'string' },
      description: '로고 이미지 대체 텍스트',
      if: { arg: 'brandMode', neq: 'text' },
    },
    brandSrc: { table: { disable: true } },
    brandBackground: { table: { disable: true } },
    ariaLabel: ariaLabelArg,
    collapseId: collapseIdArg,
  },
} satisfies Meta<typeof Navbar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: 'Playground',
  args: {
    brandMode: 'image',
    brandImage: '/images/brand/uxkm_logo_hand.svg',
    brandImageCustom: '',
    brand: 'UXKM',
    brandAlt: 'UXKM',
    ariaLabel: 'UXKM',
  },
  render: (args) => <Navbar {...mapNavbarBrandArgs(args)} items={playgroundMenu} />,
};

export const Basic: Story = {
  name: '기본',
  args: { brandMode: 'text', brand: 'UXKM' },
  render: (args) => (
    <Navbar
      {...mapNavbarBrandArgs(args)}
      items={
        <Menu>
          <Item label="홈" active />
          <Item label="컴포넌트" />
          <Item label="토큰" />
          <Item label="접근성" />
        </Menu>
      }
    />
  ),
};

export const Brand: Story = {
  name: '브랜드',
  args: { brandMode: 'text', brand: 'HTML Components' },
  render: (args) => (
    <Navbar
      {...mapNavbarBrandArgs(args)}
      brandIcon={<Icon name="grid" className="navbar_brand-icon" />}
      items={demoMenu}
    />
  ),
};

export const BrandImage: Story = {
  name: '브랜드 이미지',
  args: {
    brandMode: 'image',
    brandImage: '/images/brand/uxkm_logo_hand.svg',
    brandAlt: 'UXKM',
    ariaLabel: 'UXKM',
    brand: '',
  },
  render: (args) => <Navbar {...mapNavbarBrandArgs(args)} items={demoMenu} />,
};

export const BrandBackground: Story = {
  name: '브랜드 배경',
  args: {
    brandMode: 'background',
    brandImage: '/images/brand/uxkm_logo_hand.svg',
    ariaLabel: 'UXKM',
    brand: '',
  },
  render: (args) => <Navbar {...mapNavbarBrandArgs(args)} items={demoMenu} />,
};

export const Actions: Story = { name: '액션 영역', render: (args) => <Navbar brand="Dashboard" items={<Menu><Item label="개요" active /><Item label="분석" /><Item label="설정" /></Menu>} actions={<><Button variant="ghost" size="sm" iconOnly ariaLabel="알림" iconBefore={<Icon name="bell" />} /><Button variant="outline" size="sm" label="로그인" /><Button variant="filled" color="primary" size="sm" label="가입" /></>} /> };
export const Search: Story = { name: '검색', render: (args) => <Navbar brand="Docs" items={<Menu><Item label="시작하기" /><Item label="컴포넌트" active /><Item label="패턴" /></Menu>} search={<Input type="search" id="navbar-search-demo" size="sm" placeholder="문서 검색…" autoComplete="off" aria-label="문서 검색" />} actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />} /> };
export const Size: Story = { name: '크기', render: (args) => <div className="navbar-stack-demo"><Navbar role="presentation" brand="Small" size="sm" items={<Menu><Item label="메뉴" active /></Menu>} /><Navbar role="presentation" brand="Default" items={<Menu><Item label="메뉴" active /></Menu>} /><Navbar role="presentation" brand="Large" size="lg" items={<Menu><Item label="메뉴" active /></Menu>} /></div> };
export const Variant: Story = { name: '스타일 변형', render: (args) => <div className="navbar-stack-demo"><Navbar role="presentation" brand="Borderless" borderless items={<Menu><Item label="홈" active /><Item label="소개" /></Menu>} /><Navbar role="presentation" brand="Dark Surface" dark items={<Menu><Item label="홈" active /><Item label="소개" /></Menu>} /><div className="navbar-scroll-demo"><Navbar role="presentation" brand="Sticky" sticky items={<Menu><Item label="고정" active /></Menu>} /><div className="navbar-scroll-content"><p>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p><p>콘텐츠 영역 예시입니다.</p><p>추가 콘텐츠…</p><p>추가 콘텐츠…</p></div></div></div> };
export const BadgeDemo: Story = { name: '배지', render: (args) => <Navbar brand="Inbox" items={<Menu><Item label="받은편지함" active /><Item label="알림" badge={<Badge color="danger" label="3" />} /><Item label="보관함" /></Menu>} /> };
export const Responsive: Story = {
  name: '반응형',
  args: {
    brandMode: 'text',
    brand: 'Mobile',
    responsive: true,
    collapseId: 'navbar-responsive-demo',
  },
  render: (args) => (
    <div className="navbar-responsive-demo">
      <Navbar
        {...mapNavbarBrandArgs(args)}
        items={
          <Menu>
            <Item label="홈" active />
            <Item label="제품" />
            <Item label="가격" />
            <Item label="문의" />
          </Menu>
        }
        actions={
          <>
            <Button variant="outline" size="sm" label="로그인" />
            <Button variant="filled" color="primary" size="sm" label="시작하기" />
          </>
        }
      />
    </div>
  ),
};

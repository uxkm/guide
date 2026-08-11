import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualButton from '../../react/src/components/basic/Button/Button.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';
import { DemoRow as Row } from './ButtonReference';

const B = ActualButton as React.ComponentType<any>;
const I = ActualIcon as React.ComponentType<any>;

const meta = {
  title: '기본 요소/Button',
  component: B,
  parameters: { layout: 'fullscreen' },
  args: { label: 'Button', variant: 'filled', color: 'primary', size: 'md' }
} satisfies Meta<typeof B>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const icon = (name: string) => <I name={name} />;

export const Basic: Story = {
  name: '기본 유형',
  render: () => <Demo>
    <Row><B label="Filled Primary" /><B color="default" label="Filled Default" /><B variant="outline" label="Outline" /><B variant="ghost" label="Ghost" /><B variant="text" label="Text" /></Row>
    <Row><B color="success" label="Success" /><B color="warning" label="Warning" /><B color="danger" label="Danger" /><B variant="text" color="muted" label="Text Muted" /><B variant="text" color="danger" label="Text Danger" /></Row>
  </Demo>
};

export const SelectType: Story = {
  name: '셀렉트 박스형',
  render: () => <Demo>
    <Row><B variant="select" label="서울특별시" haspopup="listbox" /><B variant="select" placeholder label="옵션을 선택하세요" haspopup="listbox" /><B variant="select" open label="카테고리" haspopup="listbox" /></Row>
    <Row><B variant="select" size="sm" label="Small" /><B variant="select" label="Medium" /><B variant="select" size="lg" label="Large" /><B variant="select" disabled label="비활성" /><B variant="select" error invalid label="필수 선택" /></Row>
    <B variant="select" block label="전체 너비 셀렉트 트리거" />
    <Row><B variant="select" selectText label="최신순" /><B variant="select" selectText placeholder label="정렬 기준" /><B variant="select" selectText open label="필터" /><B variant="select" selectText size="sm" label="Small" /><B variant="select" selectText disabled label="비활성" /></Row>
  </Demo>
};

export const TextType: Story = {
  name: '텍스트 버튼',
  render: () => <Demo>
    <Row><B variant="text" label="Primary" /><B variant="text" color="muted" label="Muted" /><B variant="text" color="danger" label="Danger" /><B variant="text" color="success" label="Success" /><B variant="text" color="warning" label="Warning" /></Row>
    <Row><B variant="text" color="danger" label="삭제" iconBefore={icon('trash')} /><B variant="text" color="success" label="완료" iconBefore={icon('check')} /><B variant="text" color="warning" label="주의" iconAfter={icon('warning')} /><B variant="text" color="muted" label="자세히" iconAfter={icon('chevron')} /></Row>
    <Row><B variant="text" label="더 보기" /><B variant="text" label="링크 복사" /><B variant="text" label="취소" /><B variant="text" label="건너뛰기" /></Row>
    <Row><B variant="text" label="추가" iconBefore={icon('plus')} /><B variant="text" label="다운로드" iconBefore={icon('download')} /><B variant="text" label="링크 열기" iconBefore={icon('external')} /><B variant="text" label="설정" iconBefore={icon('settings')} /></Row>
    <Row><B variant="text" label="다음" iconAfter={icon('chevron')} /><B variant="text" label="전체 보기" iconAfter={icon('chevron')} /><B variant="text" label="삭제" iconAfter={icon('trash')} /><B variant="text" label="새로고침" iconAfter={icon('refresh')} /></Row>
    <Row><B variant="text" size="sm" label="Small" /><B variant="text" label="Medium" /><B variant="text" size="lg" label="Large" /><B variant="text" size="sm" label="추가" iconBefore={icon('plus')} /><B variant="text" size="lg" label="다음" iconAfter={icon('chevron')} /></Row>
    <Row><B variant="text" iconOnly ariaLabel="검색" iconBefore={icon('search')} /><B variant="text" iconOnly ariaLabel="편집" iconBefore={icon('edit')} /><B variant="text" iconOnly size="sm" ariaLabel="닫기" iconBefore={icon('close')} /><B variant="text" disabled label="비활성" /><B variant="text" ariaDisabled label="is-disabled" iconAfter={icon('chevron')} /></Row>
    <B variant="text" block label="전체 너비 텍스트 버튼" />
  </Demo>
};

export const IconText: Story = { name: '아이콘 + 텍스트', render: () => <Demo><Row><B label="추가" iconBefore={icon('plus')} /><B color="default" label="다운로드" iconBefore={icon('download')} /><B variant="outline" label="새 항목" iconBefore={icon('plus')} /></Row></Demo> };

export const VerticalIconText: Story = {
  name: '아이콘 + 텍스트 (세로)',
  render: () => <Demo>
    <Row><B vertical label="홈" iconBefore={icon('home')} /><B color="default" vertical label="검색" iconBefore={icon('search')} /><B variant="ghost" vertical label="마이" iconBefore={icon('user')} /><B variant="text" vertical label="추가" iconBefore={icon('plus')} /><B variant="outline" vertical label="다운로드" iconBefore={icon('download')} /></Row>
    <Row><B vertical size="sm" label="추가" iconBefore={icon('plus')} /><B vertical label="추가" iconBefore={icon('plus')} /><B vertical size="lg" label="추가" iconBefore={icon('plus')} /></Row>
    <Row><B color="default" vertical round label="가이드" iconBefore={icon('book')} /><B vertical round label="즐겨찾기" iconBefore={icon('star')} /><B variant="ghost" vertical disabled label="삭제" iconBefore={icon('trash')} /><B vertical loading label="저장 중" /></Row>
  </Demo>
};

export const VerticalEqual: Story = { name: '아이콘 + 텍스트 (세로) · 균등 배분', render: () => <Demo><Row equal><B variant="text" vertical label="홈" iconBefore={icon('home')} /><B variant="text" vertical label="카테고리" iconBefore={icon('grid')} /><B vertical label="장바구니" iconBefore={icon('cart')} /><B variant="text" vertical label="마이" iconBefore={icon('user')} /></Row></Demo> };

export const TextIcon: Story = { name: '텍스트 + 아이콘', render: () => <Demo><Row><B label="다음" iconAfter={icon('chevron')} /><B color="default" label="자세히 보기" iconAfter={icon('external')} /><B variant="text" label="링크 이동" iconAfter={icon('chevron')} /></Row></Demo> };

export const IconOnly: Story = { name: '아이콘 버튼', render: () => <Demo><Row><B iconOnly ariaLabel="추가" iconBefore={icon('plus')} /><B color="default" iconOnly ariaLabel="설정" iconBefore={icon('settings')} /><B variant="ghost" iconOnly ariaLabel="검색" iconBefore={icon('search')} /><B variant="outline" iconOnly ariaLabel="편집" iconBefore={icon('edit')} /><B color="danger" iconOnly ariaLabel="삭제" iconBefore={icon('trash')} /><B iconOnly disabled ariaLabel="추가" iconBefore={icon('plus')} /></Row></Demo> };

export const IconOnlySize: Story = { name: '아이콘 버튼 크기', render: () => <Demo><Row><B iconOnly size="sm" ariaLabel="추가 (small)" iconBefore={icon('plus')} /><B iconOnly ariaLabel="추가 (medium)" iconBefore={icon('plus')} /><B iconOnly size="lg" ariaLabel="추가 (large)" iconBefore={icon('plus')} /><B color="default" iconOnly size="sm" ariaLabel="다운로드 (small)" iconBefore={icon('download')} /><B color="default" iconOnly ariaLabel="다운로드 (medium)" iconBefore={icon('download')} /><B color="default" iconOnly size="lg" ariaLabel="다운로드 (large)" iconBefore={icon('download')} /></Row></Demo> };

export const ColorVariants: Story = { name: '색상 변형', render: () => <Demo><Row><B color="success" label="Success" /><B color="danger" label="Danger" /><B color="warning" label="Warning" /><B variant="outline" label="Outline" /></Row></Demo> };

export const Sizes: Story = { name: '크기', render: () => <Demo><Row><B size="sm" label="Small" /><B label="Medium" /><B size="lg" label="Large" /></Row></Demo> };

export const RoundShape: Story = {
  name: '라운드',
  render: () => <Demo>
    <Row><B round label="Primary" /><B color="default" round label="Default" /><B variant="ghost" round label="Ghost" /><B variant="outline" round label="Outline" /><B color="success" round label="Success" /><B color="danger" round label="Danger" /></Row>
    <Row><B round size="sm" label="Small" /><B round label="Medium" /><B round size="lg" label="Large" /></Row>
    <Row><B round label="추가" iconBefore={icon('plus')} /><B color="default" round label="다음" iconAfter={icon('chevron')} /><B variant="text" round label="더 보기" /></Row>
    <Row><B round iconOnly ariaLabel="추가" iconBefore={icon('plus')} /><B color="default" round iconOnly ariaLabel="설정" iconBefore={icon('settings')} /><B variant="outline" round iconOnly size="sm" ariaLabel="검색" iconBefore={icon('search')} /><B color="danger" round iconOnly size="lg" ariaLabel="삭제" iconBefore={icon('trash')} /></Row>
    <div className="btn_group btn_group-round btn_group-fit"><B color="default" label="일" /><B color="default" label="주" /><B label="월" /><B color="default" label="년" /></div>
  </Demo>
};

export const Width: Story = {
  name: '너비',
  render: () => <Demo>
    <B block label="전체 너비 버튼" />
    <Row equal><B color="default" label="취소" /><B label="확인" /></Row>
    <Row><B color="default" grow label="취소" /><B grow label="확인" /></Row>
    <Row><B color="default" grow label="옵션 A" /><B color="default" grow label="옵션 B" /><B grow label="옵션 C" /></Row>
    <Row align="start"><B variant="ghost" fit label="뒤로" /><B color="default" fit label="취소" /><B fit label="저장" /></Row>
    <Row align="end"><B variant="ghost" fit label="뒤로" /><B color="default" fit label="취소" /><B fit label="저장" /></Row>
    <Row><B variant="ghost" fit label="뒤로" /><B color="default" grow label="임시 저장" /><B grow label="제출" /></Row>
    <Row><B color="default" grow label="본문 영역" /><B fit label="확인" /></Row>
    <Row><B color="default" grow="2" label="2배 너비" /><B grow label="1배 너비" /></Row>
    <B block label="전체 너비 다운로드" iconBefore={icon('download')} />
  </Demo>
};

export const States: Story = {
  name: '상태',
  render: () => <Demo>
    <Row><B disabled label="Primary" /><B color="default" disabled label="Default" /><B variant="outline" disabled label="Outline" /><B variant="ghost" disabled label="Ghost" /><B variant="text" disabled label="Text" /><B color="danger" disabled label="Danger" /></Row>
    <Row><B ariaDisabled label="is-disabled" /><B color="default" ariaDisabled label="is-disabled" /><B variant="outline" ariaDisabled label="is-disabled" /></Row>
    <Row><B loading label="저장 중" /><B color="default" loading label="처리 중" /><B variant="outline" loading label="업로드 중" /><B iconOnly loading ariaLabel="저장 중" /></Row>
    <B block loading label="전체 너비 로딩" />
  </Demo>
};

export const Groups: Story = {
  name: '버튼 그룹',
  render: () => <Demo>
    <div className="btn_group btn_group-fit btn_group-align-start"><B color="default" size="sm" label="Left" /><B color="default" size="sm" label="Middle" /><B color="default" size="sm" label="Right" /></div>
    <div className="btn_group btn_group-fit btn_group-align-start"><B color="default" label="Left" /><B color="default" label="Middle" /><B color="default" label="Right" /></div>
    <div className="btn_group btn_group-fit btn_group-align-start"><B color="default" size="lg" label="Left" /><B color="default" size="lg" label="Middle" /><B color="default" size="lg" label="Right" /></div>
    <div className="btn_group btn_group-fit btn_group-align-center"><B color="default" label="Left" /><B color="default" label="Middle" /><B color="default" label="Right" /></div>
    <div className="btn_group btn_group-fit btn_group-align-end"><B color="default" label="Left" /><B color="default" label="Middle" /><B color="default" label="Right" /></div>
    <div className="btn_group btn_group-block"><B color="default" label="Left" /><B label="Middle" /><B color="default" label="Right" /></div>
    <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-start"><B color="default" label="상단" /><B color="default" label="중간" /><B color="default" label="하단" /></div>
    <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-center"><B color="default" label="상단" /><B color="default" label="중간" /><B color="default" label="하단" /></div>
    <div className="btn_group btn_group-vertical btn_group-fit btn_group-align-end"><B color="default" label="상단" /><B color="default" label="중간" /><B color="default" label="하단" /></div>
    <div className="btn_group btn_group-vertical btn_group-block"><B color="default" label="상단" /><B color="default" label="중간" /><B color="default" label="하단" /></div>
    <div className="btn_stack"><B block label="로그인" /><B color="default" block label="회원가입" /></div>
    <div className="btn_stack"><B block label="결제하기" /><B variant="text" label="쿠폰 적용" /></div>
    <div className="btn_stack"><B block label="다운로드" iconBefore={icon('download')} /><p className="btn_stack-text">최신 버전 v2.0 · <a href="#release">릴리스 노트</a></p></div>
  </Demo>
};

export const RootTag: Story = { name: '루트 태그', render: () => <Demo><Row><B label="button" /><B tag="a" href="#" variant="outline" label="a + href" /><B tag="div" variant="ghost" label="div → role=button" /><B tag="a" role="link" variant="text" label="a, role=link" /></Row></Demo> };

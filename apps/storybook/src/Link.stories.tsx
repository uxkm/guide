import type { Meta, StoryObj } from '@storybook/react-vite';

import ActualLink from '../../react/src/components/basic/Link/Link.jsx';
import ActualIcon from '../../react/src/components/basic/Icon/Icon.jsx';

const Link = ActualLink as React.ComponentType<any>;
const Icon = ActualIcon as React.ComponentType<any>;
const icon = (name: string) => <Icon className="link_icon" name={name} />;
const avatar = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%228%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2212%22%20r%3D%225%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M7%2029a9%209%200%200%201%2018%200%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E';

const meta = {
  title: '기본 요소/Link',
  component: Link,
  parameters: { layout: 'fullscreen' },
  args: { label: '더 보기', href: '#', color: 'primary' }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({ children }: { children: React.ReactNode }) => <div className="btn-demo">{children}</div>;
const Row = ({ children }: { children: React.ReactNode }) => <div className="link_row">{children}</div>;

export const Basic: Story = { name: '기본', render: () => <Demo><Row><Link>더 보기</Link><Link>가이드 문서</Link><Link underline>항상 밑줄</Link></Row></Demo> };

export const CustomContent: Story = { name: '이미지 · 아이콘 · 커스텀 요소', render: () => <Demo><Row><Link icon={icon('user')}>프로필</Link><Link><img alt="" className="link_media" src={avatar} /> 사용자 정보</Link><Link as="button" icon={icon('settings')}>설정 열기</Link></Row></Demo> };

export const Colors: Story = { name: '색상', render: () => <Demo><Row><Link color="primary">Primary</Link><Link color="muted">Muted</Link><Link color="success">Success</Link><Link color="warning">Warning</Link><Link color="danger">Danger</Link><Link color="info">Info</Link></Row></Demo> };

export const Sizes: Story = { name: '크기', render: () => <Demo><Row><Link size="sm">Small</Link><Link>Base</Link><Link size="lg">Large</Link><Link size="xl">Extra Large</Link></Row></Demo> };

export const Styles: Story = { name: '스타일', render: () => <Demo><Row><Link>기본 (hover 밑줄)</Link><Link underline>항상 밑줄</Link><Link noUnderline>밑줄 없음</Link><Link standalone>터치 영역 확대</Link></Row></Demo> };

export const Navigation: Story = { name: '내비게이션', render: () => <Demo><nav aria-label="섹션 내비게이션" className="link_group-inline"><Link nav active>개요</Link><Link nav>컴포넌트</Link><Link nav>토큰</Link><Link nav>접근성</Link></nav><Link back icon={icon('arrow-left')}>목록으로 돌아가기</Link></Demo> };

export const BlockGroup: Story = { name: '블록 · 그룹', render: () => <Demo><div className="link_group" style={{ maxWidth: 280, width: '100%' }}><Link block icon={icon('book')}>가이드 시작하기</Link><Link block icon={icon('download')}>파일 다운로드</Link><Link block color="muted" icon={icon('settings')}>환경 설정</Link></div></Demo> };

export const IconOnly: Story = { name: '아이콘 전용', render: () => <Demo><Row><Link ariaLabel="검색" icon={icon('search')} iconOnly /><Link ariaLabel="편집" icon={icon('edit')} iconOnly /><Link ariaLabel="더 보기" color="muted" icon={icon('settings')} iconOnly /></Row></Demo> };

export const WithIcon: Story = { name: '아이콘', render: () => <Demo><Row><Link icon={icon('download')}>다운로드</Link><Link iconAfter={icon('external')}>외부 링크</Link><Link back icon={icon('arrow-left')}>이전 페이지</Link></Row></Demo> };

export const External: Story = { name: '새 창 열기', render: () => <Demo><Link href="https://example.com" iconAfter={icon('external')} rel="noopener noreferrer" target="_blank">외부 사이트 열기 <span className="sr_only">(새 창)</span></Link></Demo> };

export const Disabled: Story = { name: '비활성', render: () => <Demo><Row><Link disabled>비활성 링크</Link><Link as="button" disabled>비활성 버튼형 링크</Link></Row></Demo> };

export const Context: Story = { name: '문맥 속 사용', render: () => <Demo><div className="alert color_info" role="status"><div><strong>업데이트 안내</strong><p>새 버전의 변경 사항을 확인하세요.</p><Link size="sm">릴리스 노트 보기</Link></div></div><p>아직 계정이 없나요? <Link>회원가입</Link></p></Demo> };

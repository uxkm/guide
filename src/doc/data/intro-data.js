import { NAV_GROUPS } from '@/data/navigation';

export const introCategories = NAV_GROUPS.filter((group) => group.title !== '시작하기').map(
  (group) => ({
    title: group.title,
    description: group.items.map((item) => item.label).join(', '),
    count: `${group.items.length}개 컴포넌트`,
    href: group.items[0].to,
  })
);

export const conventionColumns = [
  { key: 'pattern', label: '패턴' },
  { key: 'example', label: '예시' },
  { key: 'description', label: '설명' },
];

export const conventionRows = [
  {
    pattern: '블록',
    example: '.btn · .alert · .empty',
    description: '컴포넌트 루트 구조 클래스',
  },
  {
    pattern: '블록_파트',
    example: '.btn_label · .empty_desc',
    description: '하위 요소 (언더스코어 1개)',
  },
  {
    pattern: '블록_변형',
    example: '.btn_filled · .alert_sm',
    description: '스킨·크기·레이아웃 변형',
  },
  {
    pattern: 'color_*',
    example: '.color_primary · .color_danger',
    description: '공통 의미 색상 (여러 컴포넌트에서 재사용)',
  },
  {
    pattern: 'is-*',
    example: '.is-open · .is-loading',
    description: 'JS·상태 토글 클래스',
  },
];

export const reactNextCards = [
  {
    key: 'spa',
    badge: '기본 방식',
    title: 'React SPA',
    summary: '하나의 클라이언트 앱이 화면과 경로를 모두 처리합니다.',
    facts: [
      { label: '시작', value: 'index.html · src/main.jsx' },
      { label: '경로', value: 'React Router에서 처리' },
      { label: '출력', value: 'Vite → dist/' },
    ],
    pros: [
      '구조와 설정이 단순합니다.',
      '프레임워크 의존성이 낮고 정적 호스팅이 쉽습니다.',
    ],
    cons: [
      '초기 화면이 JavaScript 실행에 의존합니다.',
      '검색·공유 메타데이터와 직접 URL 접근을 별도로 구성해야 합니다.',
    ],
    bestFor: '검색 노출보다 클라이언트 상호작용이 중요한 도구·관리 화면',
  },
  {
    key: 'next',
    badge: '현재 구성',
    title: 'Next.js',
    summary: 'App Router가 정적 HTML과 경로를 만들고 React가 상호작용을 담당합니다.',
    facts: [
      { label: '시작', value: 'app/layout.jsx · [[...slug]]/page.jsx' },
      { label: '경로', value: 'Next.js App Router' },
      { label: '출력', value: 'Next.js export → out/' },
    ],
    pros: [
      '문서별 HTML과 메타데이터를 빌드 시 생성합니다.',
      '파일 라우팅·내부 링크·basePath를 Next.js에서 일관되게 관리합니다.',
    ],
    cons: [
      '서버·클라이언트 컴포넌트 경계를 구분해야 합니다.',
      '서버 기능은 정적 export에서 사용할 수 없습니다.',
    ],
    bestFor: '검색 가능한 정적 문서·콘텐츠와 점진적인 클라이언트 상호작용',
  },
];

export const quickstartCode = `# 의존성 설치
pnpm install

# Next.js 개발 서버
pnpm dev

# Next.js 정적 빌드
pnpm build`;

export const docPageCode = `export const docMeta = {
  title: 'Button | UXKM Guide',
  activeNav: 'button',
  pageTitle: 'Button',
};

import Button from '@/components/Button.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';

export default function ButtonDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Button</h1>
        <p className="lead">…</p>
      </div>
      <DemoSection headingId="basic-heading" title="기본">
        <Button variant="filled" color="primary" label="저장" />
      </DemoSection>
    </>
  );
}`;

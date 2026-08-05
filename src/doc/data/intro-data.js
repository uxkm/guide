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

export const vueNuxtCards = [
  {
    key: 'spa',
    badge: '기본 방식',
    title: 'Vue SPA',
    summary: '하나의 클라이언트 앱이 화면과 경로를 모두 처리합니다.',
    facts: [
      { label: '시작', value: 'index.html · src/main.js' },
      { label: '경로', value: 'Vue Router에서 처리' },
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
    key: 'nuxt',
    badge: '현재 구성',
    title: 'Nuxt',
    summary: 'Nuxt가 정적 HTML과 경로를 만들고 Vue가 상호작용을 담당합니다.',
    facts: [
      { label: '시작', value: 'app.vue · pages/ · layouts/' },
      { label: '경로', value: 'Nuxt 파일 기반 라우팅' },
      { label: '출력', value: 'nuxt generate → .output/public/' },
    ],
    pros: [
      '문서별 HTML과 메타데이터를 빌드 시 생성합니다.',
      '파일 라우팅·내부 링크·baseURL을 Nuxt에서 일관되게 관리합니다.',
    ],
    cons: [
      '서버와 클라이언트의 실행 환경을 구분해야 합니다.',
      '동적 서버 기능은 정적 생성 시 별도 배포 전략이 필요합니다.',
    ],
    bestFor: '검색 가능한 정적 문서·콘텐츠와 점진적인 클라이언트 상호작용',
  },
];

export const quickstartCode = `# 의존성 설치
pnpm install

# Nuxt 개발 서버
pnpm dev

# Nitro 프로덕션 빌드
pnpm build`;

export const structureCode = `src/
├── components/               # 재사용 UI 컴포넌트 (Vue SFC)
├── doc/
│   ├── components/           # 컴포넌트 문서 페이지
│   └── pages/                # 소개·설치 페이지
├── pages/                    # Nuxt 파일 기반 라우트
├── layouts/default.vue       # 가이드 공통 레이아웃
├── plugins/                  # Nuxt 클라이언트 플러그인
├── scss/
│   ├── _tokens.scss          # 디자인 토큰 (:root CSS 변수)
│   ├── _themes.scss          # 라이트/다크 테마
│   ├── components/           # 컴포넌트별 스타일
│   └── main.scss             # SCSS 진입점
└── app.vue                   # Nuxt 앱 루트

nuxt.config.js                # 앱·정적 배포 설정
.output/                      # Nuxt 빌드·정적 생성 결과`;

export const docPageCode = `<script>
export const docMeta = {
  title: 'Button | HTML Components',
  activeNav: 'button',
  pageTitle: 'Button',
};
<\/script>

<template>
  <div class="page_intro">
    <h1>Button</h1>
    <p class="lead">…</p>
  </div>
  …
</template>`;

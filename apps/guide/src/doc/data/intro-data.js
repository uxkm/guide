import { NAV_GROUPS } from '@uxkm/ui/data/navigation';

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

export const quickstartCode = `# 의존성 설치
pnpm install

# Vue + Vite 개발 서버
pnpm dev

# Vue 프로덕션 빌드
pnpm build`;

export const structureCode = `src/
├── components/               # 재사용 UI 컴포넌트 (Vue SFC)
├── doc/
│   ├── components/           # 컴포넌트 문서 페이지
│   └── pages/                # 소개·설치 페이지
├── scss/
│   ├── _tokens.scss          # 디자인 토큰 (:root CSS 변수)
│   ├── _themes.scss          # 라이트/다크 테마
│   ├── components/           # 컴포넌트별 스타일
│   └── main.scss             # SCSS 진입점
├── layouts/                  # 가이드 레이아웃
├── router/                   # Vue Router
└── main.js                   # 앱 진입점

dist/                         # Vite 프로덕션 빌드 결과`;

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

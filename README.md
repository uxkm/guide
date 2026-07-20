# guide

guide.uxkm.io — Vue 3 + Vite UI 컴포넌트 가이드 (pnpm monorepo)

## 구조

```
├── apps/
│   ├── guide/          # 문서·가이드 앱 (Vite)
│   └── storybook/      # 컴포넌트 Storybook
├── packages/
│   └── ui/             # Vue UI 컴포넌트 + SCSS 디자인 시스템
├── pnpm-workspace.yaml
└── package.json        # 워크스페이스 루트
```

- `apps/guide/` — Vue 앱, 라우터, 문서 페이지 (`src/doc/`)
- `apps/storybook/` — `@uxkm/ui` 컴포넌트 Storybook
- `packages/ui/` — 재사용 컴포넌트, SCSS, composables (`*.stories.js`와 함께 관리)
- `apps/guide/dist/` — 가이드 프로덕션 빌드 결과

## 개발

```bash
pnpm install
pnpm dev            # http://localhost:5173 — 가이드 앱
pnpm dev:all        # 가이드 + Storybook 동시 실행 (5173, 6006)
pnpm storybook          # http://localhost:6006 — Storybook 개발 서버
pnpm build              # apps/guide/dist/ 생성
pnpm build-storybook    # apps/storybook/storybook-static/ 생성
pnpm preview-storybook  # Storybook 빌드 결과 미리보기 (먼저 build-storybook 필요)
pnpm generate-stories   # 컴포넌트 스토리 일괄 재생성
pnpm preview            # 가이드 빌드 결과 미리보기
```

## 배포

`pnpm deploy:vue` — 가이드만 main/vue/에 배포
`pnpm deploy:main` — min, vue, vue-storybook 브랜치에서 빌드 후 main에 배포 (가이드 → `vue/`, Storybook → `vue-storybook/`, 랜딩 `index.html` 업데이트)

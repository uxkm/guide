# UXKM Guide

[guide.uxkm.io](https://guide.uxkm.io) — UI 컴포넌트 가이드 배포 브랜치

> **이 브랜치(`main`)는 GitHub Pages 배포 전용입니다.**  
> 소스 개발·빌드는 각 프레임워크 브랜치에서 진행하고, 빌드 결과물만 이 브랜치에 반영합니다.  
> 로컬에서 `pnpm install` 등 개발 환경 설정은 필요하지 않으며, 변경 사항은 배포 URL에서 확인합니다.

## 디렉터리 구조

```
main/
├── CNAME              # guide.uxkm.io (GitHub Pages 커스텀 도메인)
├── index.html         # 루트 허브 — html / react / vue 선택 페이지
├── html/              # HTML·SCSS 가이드 (gulp 브랜치 빌드 결과)
├── react/             # React 데모 (react 브랜치 빌드 결과)
└── vue/               # Vue 3 가이드 (vue 브랜치 빌드 결과)
```

## 배포 URL

| 경로 | 설명 |
|------|------|
| [/](https://guide.uxkm.io/) | 프레임워크 선택 허브 |
| [/html/](https://guide.uxkm.io/html/) | 순수 HTML·SCSS 컴포넌트 가이드 |
| [/react/](https://guide.uxkm.io/react/) | React 컴포넌트 데모 |
| [/vue/](https://guide.uxkm.io/vue/) | Vue 3 + Vite 컴포넌트 가이드 |

## 브랜치 · 배포 흐름

각 프레임워크별 **소스 브랜치**에서 개발·빌드한 뒤, 결과물을 `main`의 해당 폴더에 배포합니다.

| 소스 브랜치 | 빌드 도구 | `main` 배포 경로 |
|------------|----------|-----------------|
| `gulp` | Gulp | `html/` |
| `vue` | Vite | `vue/` |
| `react` | (프레임워크 빌드) | `react/` |
| `gulp-storybook` | Storybook | `gulp-storybook/` |
| `react-storybook` | Storybook | `react-storybook/` |
| `vue-storybook` | Storybook | `vue-storybook/` |

```
gulp ──build──▶  main/html/
vue  ──build──▶  main/vue/
react ──build──▶  main/react/
gulp-storybook ──▶  main/gulp-storybook/
react-storybook ──▶  main/react-storybook/
vue-storybook ──▶  main/vue-storybook/
                      │
                      ▼
              guide.uxkm.io (GitHub Pages)
```

### Vue 가이드 배포 예시

`vue` 브랜치에서 아래 명령을 실행하면 빌드 후 `main/vue/`에 자동 반영됩니다.

```bash
pnpm deploy:main
```

## 이 브랜치에 포함되지 않는 것

배포 전용 브랜치이므로 아래 파일·폴더는 **포함하지 않습니다** (`.gitignore`로 제외).

- `node_modules/`, `pnpm-lock.yaml`, `package.json`
- `src/`, `scripts/`, `vite.config.js` 등 소스·설정
- `dist/` (빌드 임시 산출물 — 배포 시 `html/`·`vue/`·`react/`로 복사)

## 확인 방법

1. 소스 브랜치(`gulp` / `vue` / `react`)에서 개발 및 빌드
2. `main`에 배포 (스크립트 또는 수동 복사)
3. [guide.uxkm.io](https://guide.uxkm.io)에서 결과 확인

#!/usr/bin/env bash
set -euo pipefail

CURRENT_BRANCH=$(git branch --show-current)
DEPLOY_ORIGIN="https://guide.uxkm.io"
DEPLOY_GUIDE=0
DEPLOY_STORYBOOK=0
GUIDE_DEPLOY_DIR=""
STORYBOOK_DEPLOY_DIR=""

case "$CURRENT_BRANCH" in
  min|vue|vue-storybook)
    DEPLOY_GUIDE=1
    DEPLOY_STORYBOOK=1
    GUIDE_DEPLOY_DIR="vue"
    STORYBOOK_DEPLOY_DIR="vue-storybook"
    ;;
  react-storybook)
    DEPLOY_STORYBOOK=1
    STORYBOOK_DEPLOY_DIR="react-storybook"
    ;;
  *)
    echo "min, vue, vue-storybook, react-storybook 브랜치에서 실행하세요. (현재: $CURRENT_BRANCH)"
    exit 1
    ;;
esac

if [[ "$DEPLOY_GUIDE" -eq 1 ]]; then
  echo "==> 가이드 빌드 중... (→ main/${GUIDE_DEPLOY_DIR}/)"
  GUIDE_BASE="/${GUIDE_DEPLOY_DIR}/" pnpm build
fi

if [[ "$DEPLOY_STORYBOOK" -eq 1 ]]; then
  echo "==> Storybook 빌드 중... (→ main/${STORYBOOK_DEPLOY_DIR}/)"
  STORYBOOK_BASE="/${STORYBOOK_DEPLOY_DIR}/" \
  STORYBOOK_CDN_URL="${DEPLOY_ORIGIN}/${STORYBOOK_DEPLOY_DIR}" \
  pnpm build-storybook
fi

echo "==> 빌드 결과 임시 저장..."
TEMP_GUIDE=""
TEMP_STORYBOOK=""
TEMP_LANDING=$(mktemp)
CLEANUP() {
  [[ -n "$TEMP_GUIDE" ]] && rm -rf "$TEMP_GUIDE"
  [[ -n "$TEMP_STORYBOOK" ]] && rm -rf "$TEMP_STORYBOOK"
  rm -f "$TEMP_LANDING"
}
trap CLEANUP EXIT

if [[ "$DEPLOY_GUIDE" -eq 1 ]]; then
  TEMP_GUIDE=$(mktemp -d)
  cp -R apps/guide/dist/* "$TEMP_GUIDE/"
fi
if [[ "$DEPLOY_STORYBOOK" -eq 1 ]]; then
  TEMP_STORYBOOK=$(mktemp -d)
  cp -R apps/storybook/storybook-static/* "$TEMP_STORYBOOK/"
fi
cp scripts/landing-index.html "$TEMP_LANDING"

echo "==> main 브랜치로 전환..."
STASHED=0
if ! git diff --quiet || ! git diff --cached --quiet || [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  git stash push -u -m "deploy-main: stash $CURRENT_BRANCH changes"
  STASHED=1
fi

git checkout main

ADD_PATHS=(index.html _assets)

if [[ "$DEPLOY_GUIDE" -eq 1 ]]; then
  echo "==> $GUIDE_DEPLOY_DIR/ 폴더에 가이드 배포 (기존 html/ 등 유지)..."
  rm -rf "$GUIDE_DEPLOY_DIR" dist
  mkdir -p "$GUIDE_DEPLOY_DIR"
  cp -R "$TEMP_GUIDE"/* "$GUIDE_DEPLOY_DIR/"
  ADD_PATHS+=("$GUIDE_DEPLOY_DIR")
fi

if [[ "$DEPLOY_STORYBOOK" -eq 1 ]]; then
  echo "==> $STORYBOOK_DEPLOY_DIR/ 폴더에 Storybook 배포..."
  rm -rf "$STORYBOOK_DEPLOY_DIR"
  mkdir -p "$STORYBOOK_DEPLOY_DIR"
  cp -R "$TEMP_STORYBOOK"/* "$STORYBOOK_DEPLOY_DIR/"
  ADD_PATHS+=("$STORYBOOK_DEPLOY_DIR")
fi

echo "==> 랜딩 index.html 업데이트..."
cp "$TEMP_LANDING" index.html

echo "==> 랜딩 favicon 에셋 업데이트..."
mkdir -p _assets/images
if [[ "$DEPLOY_GUIDE" -eq 1 && -d "$TEMP_GUIDE/_assets/images/favicon" ]]; then
  rm -rf _assets/images/favicon
  cp -R "$TEMP_GUIDE/_assets/images/favicon" _assets/images/
elif [[ "$DEPLOY_STORYBOOK" -eq 1 && -d "$TEMP_STORYBOOK" ]]; then
  # Storybook-only 배포에서는 기존 favicon 유지
  true
fi

git add "${ADD_PATHS[@]}"

COMMIT_PARTS=()
[[ "$DEPLOY_GUIDE" -eq 1 ]] && COMMIT_PARTS+=("guide to $GUIDE_DEPLOY_DIR/")
[[ "$DEPLOY_STORYBOOK" -eq 1 ]] && COMMIT_PARTS+=("Storybook to $STORYBOOK_DEPLOY_DIR/")
COMMIT_DETAIL=$(IFS=', '; echo "${COMMIT_PARTS[*]}")

if git diff --cached --quiet; then
  echo "변경 사항 없음. 배포를 건너뜁니다."
else
  git commit -m "Deploy: $COMMIT_DETAIL from $CURRENT_BRANCH"
  git push origin main
  echo "==> 배포 완료: $COMMIT_DETAIL"
fi

git checkout "$CURRENT_BRANCH"

if [[ "$STASHED" -eq 1 ]]; then
  git stash pop
fi

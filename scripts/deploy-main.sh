#!/usr/bin/env bash
set -euo pipefail

CURRENT_BRANCH=$(git branch --show-current)
GUIDE_DEPLOY_DIR="vue"
STORYBOOK_DEPLOY_DIR="vue-storybook"
DEPLOY_ORIGIN="https://guide.uxkm.io"

if [[ "$CURRENT_BRANCH" != "gulp" && "$CURRENT_BRANCH" != "vue" && "$CURRENT_BRANCH" != "vue-storybook" ]]; then
  echo "gulp, vue, vue-storybook 브랜치에서 실행하세요. (현재: $CURRENT_BRANCH)"
  exit 1
fi

echo "==> 가이드 빌드 중..."
pnpm build

echo "==> Storybook 빌드 중..."
STORYBOOK_BASE="/${STORYBOOK_DEPLOY_DIR}/" \
STORYBOOK_CDN_URL="${DEPLOY_ORIGIN}/${STORYBOOK_DEPLOY_DIR}" \
pnpm build-storybook

echo "==> 빌드 결과 임시 저장..."
TEMP_GUIDE=$(mktemp -d)
TEMP_STORYBOOK=$(mktemp -d)
TEMP_LANDING=$(mktemp)
trap 'rm -rf "$TEMP_GUIDE" "$TEMP_STORYBOOK"; rm -f "$TEMP_LANDING"' EXIT

cp -R apps/guide/dist/* "$TEMP_GUIDE/"
cp -R apps/storybook/storybook-static/* "$TEMP_STORYBOOK/"
cp scripts/landing-index.html "$TEMP_LANDING"

echo "==> main 브랜치로 전환..."
STASHED=0
if ! git diff --quiet || ! git diff --cached --quiet || [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  git stash push -u -m "deploy-main: stash $CURRENT_BRANCH changes"
  STASHED=1
fi

git checkout main

echo "==> $GUIDE_DEPLOY_DIR/ 폴더에 가이드 배포 (기존 html/ 등 유지)..."
rm -rf "$GUIDE_DEPLOY_DIR" dist
mkdir -p "$GUIDE_DEPLOY_DIR"
cp -R "$TEMP_GUIDE"/* "$GUIDE_DEPLOY_DIR/"

echo "==> $STORYBOOK_DEPLOY_DIR/ 폴더에 Storybook 배포..."
rm -rf "$STORYBOOK_DEPLOY_DIR"
mkdir -p "$STORYBOOK_DEPLOY_DIR"
cp -R "$TEMP_STORYBOOK"/* "$STORYBOOK_DEPLOY_DIR/"

echo "==> 랜딩 index.html 업데이트..."
cp "$TEMP_LANDING" index.html

echo "==> 랜딩 favicon 에셋 업데이트..."
mkdir -p _assets/images
rm -rf _assets/images/favicon
cp -R "$TEMP_GUIDE/_assets/images/favicon" _assets/images/

git add "$GUIDE_DEPLOY_DIR" "$STORYBOOK_DEPLOY_DIR" index.html _assets

if git diff --cached --quiet; then
  echo "변경 사항 없음. 배포를 건너뜁니다."
else
  git commit -m "Deploy: Vue guide to $GUIDE_DEPLOY_DIR/, Storybook to $STORYBOOK_DEPLOY_DIR/ from $CURRENT_BRANCH"
  git push origin main
  echo "==> main/$GUIDE_DEPLOY_DIR, main/$STORYBOOK_DEPLOY_DIR 배포 완료"
fi

git checkout "$CURRENT_BRANCH"

if [[ "$STASHED" -eq 1 ]]; then
  git stash pop
fi

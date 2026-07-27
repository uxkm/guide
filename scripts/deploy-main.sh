#!/usr/bin/env bash
set -euo pipefail

CURRENT_BRANCH=$(git branch --show-current)
DEPLOY_ORIGIN="https://guide.uxkm.io"

if [[ "$CURRENT_BRANCH" != "gulp-storybook" ]]; then
  echo "gulp-storybook 브랜치에서 실행하세요. (현재: $CURRENT_BRANCH)"
  exit 1
fi

STORYBOOK_DEPLOY_DIR="gulp-storybook"

echo "==> Storybook 빌드 중... (→ main/${STORYBOOK_DEPLOY_DIR}/)"
STORYBOOK_BASE="/${STORYBOOK_DEPLOY_DIR}/" \
STORYBOOK_CDN_URL="${DEPLOY_ORIGIN}/${STORYBOOK_DEPLOY_DIR}" \
pnpm build-storybook

echo "==> 빌드 결과 임시 저장..."
TEMP_STORYBOOK=$(mktemp -d)
TEMP_LANDING=$(mktemp)
CLEANUP() {
  rm -rf "$TEMP_STORYBOOK"
  rm -f "$TEMP_LANDING"
}
trap CLEANUP EXIT

cp -R storybook-static/* "$TEMP_STORYBOOK/"
cp scripts/landing-index.html "$TEMP_LANDING"

echo "==> main 브랜치로 전환..."
STASHED=0
if ! git diff --quiet || ! git diff --cached --quiet || [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  git stash push -u -m "deploy-main: stash $CURRENT_BRANCH changes"
  STASHED=1
fi

git checkout main

echo "==> $STORYBOOK_DEPLOY_DIR/ 폴더에 Storybook 배포..."
rm -rf "$STORYBOOK_DEPLOY_DIR"
mkdir -p "$STORYBOOK_DEPLOY_DIR"
cp -R "$TEMP_STORYBOOK"/* "$STORYBOOK_DEPLOY_DIR/"

echo "==> 랜딩 index.html 업데이트..."
cp "$TEMP_LANDING" index.html

git add index.html "$STORYBOOK_DEPLOY_DIR"

if git diff --cached --quiet; then
  echo "변경 사항 없음. 배포를 건너뜁니다."
else
  git commit -m "Deploy: Storybook to $STORYBOOK_DEPLOY_DIR/ from $CURRENT_BRANCH"
  git push origin main
  echo "==> 배포 완료: Storybook to $STORYBOOK_DEPLOY_DIR/"
fi

git checkout "$CURRENT_BRANCH"

if [[ "$STASHED" -eq 1 ]]; then
  git stash pop
fi

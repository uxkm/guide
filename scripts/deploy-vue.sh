#!/usr/bin/env bash
set -euo pipefail

CURRENT_BRANCH=$(git branch --show-current)
GUIDE_DEPLOY_DIR="vue"

if [[ "$CURRENT_BRANCH" != "min" && "$CURRENT_BRANCH" != "vue" && "$CURRENT_BRANCH" != "vue-storybook" ]]; then
  echo "min, vue, vue-storybook 브랜치에서 실행하세요. (현재: $CURRENT_BRANCH)"
  exit 1
fi

echo "==> 가이드 빌드 중..."
pnpm build

echo "==> 빌드 결과 임시 저장..."
TEMP_GUIDE=$(mktemp -d)
trap 'rm -rf "$TEMP_GUIDE"' EXIT

cp -R apps/guide/dist/* "$TEMP_GUIDE/"

echo "==> main 브랜치로 전환..."
STASHED=0
if ! git diff --quiet || ! git diff --cached --quiet || [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  git stash push -u -m "deploy-vue: stash $CURRENT_BRANCH changes"
  STASHED=1
fi

git checkout main

echo "==> $GUIDE_DEPLOY_DIR/ 폴더에 가이드 배포 (기존 html/ 등 유지)..."
rm -rf "$GUIDE_DEPLOY_DIR" dist
mkdir -p "$GUIDE_DEPLOY_DIR"
cp -R "$TEMP_GUIDE"/* "$GUIDE_DEPLOY_DIR/"

git add "$GUIDE_DEPLOY_DIR"

if git diff --cached --quiet; then
  echo "변경 사항 없음. 배포를 건너뜁니다."
else
  git commit -m "Deploy: Vue guide to $GUIDE_DEPLOY_DIR/ from $CURRENT_BRANCH"
  git push origin main
  echo "==> main/$GUIDE_DEPLOY_DIR 배포 완료"
fi

git checkout "$CURRENT_BRANCH"

if [[ "$STASHED" -eq 1 ]]; then
  git stash pop
fi

#!/usr/bin/env bash
set -euo pipefail

CURRENT_BRANCH=$(git branch --show-current)

case "$CURRENT_BRANCH" in
  min) DEPLOY_DIR="min" ;;
  vue) DEPLOY_DIR="vue" ;;
  react) DEPLOY_DIR="react" ;;
  *)
    echo "min, vue 또는 react 브랜치에서 실행하세요. (현재: $CURRENT_BRANCH)"
    exit 1
    ;;
esac

echo "==> 빌드 중..."
pnpm build

echo "==> 빌드 결과 임시 저장..."
TEMP=$(mktemp -d)
trap 'rm -rf "$TEMP"' EXIT

cp -R dist/* "$TEMP/"

echo "==> main 브랜치로 전환..."
STASHED=0
if ! git diff --quiet || ! git diff --cached --quiet || [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  git stash push -u -m "deploy-main: stash $CURRENT_BRANCH changes"
  STASHED=1
fi

git checkout main

echo "==> $DEPLOY_DIR/ 폴더에 배포 (기존 html/ 등 유지)..."
rm -rf "$DEPLOY_DIR" dist
mkdir -p "$DEPLOY_DIR"
cp -R "$TEMP"/* "$DEPLOY_DIR/"

git add "$DEPLOY_DIR"

if git diff --cached --quiet; then
  echo "변경 사항 없음. 배포를 건너뜁니다."
else
  git commit -m "Deploy: guide to $DEPLOY_DIR/ from $CURRENT_BRANCH"
  git push origin main
  echo "==> main/$DEPLOY_DIR 배포 완료"
fi

git checkout "$CURRENT_BRANCH"

if [[ "$STASHED" -eq 1 ]]; then
  git stash pop
fi

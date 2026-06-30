#!/usr/bin/env bash
set -euo pipefail

DEPLOY_PATHS=(index.html html vue react)
CURRENT_BRANCH=$(git branch --show-current)

if [[ "$CURRENT_BRANCH" != "min" ]]; then
  echo "min 브랜치에서 실행하세요. (현재: $CURRENT_BRANCH)"
  exit 1
fi

echo "==> 빌드 중..."
pnpm build

echo "==> 빌드 결과 임시 저장..."
TEMP=$(mktemp -d)
trap 'rm -rf "$TEMP"' EXIT

for path in "${DEPLOY_PATHS[@]}"; do
  cp -R "$path" "$TEMP/"
done

echo "==> main 브랜치로 전환..."
STASHED=0
if ! git diff --quiet || ! git diff --cached --quiet || [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  git stash push -u -m "deploy-main: stash min changes"
  STASHED=1
fi

git checkout main

for path in "${DEPLOY_PATHS[@]}"; do
  rm -rf "$path"
  cp -R "$TEMP/$path" .
done

git add "${DEPLOY_PATHS[@]}"

if git diff --cached --quiet; then
  echo "변경 사항 없음. 배포를 건너뜁니다."
else
  git commit -m "Deploy: built pages from min"
  git push origin main
  echo "==> main 배포 완료"
fi

git checkout min

if [[ "$STASHED" -eq 1 ]]; then
  git stash pop
fi

import './validate.mjs';

if (!process.exitCode) {
  console.log('\nWebSquare Engine은 이 저장소에 포함되지 않습니다.');
  console.log('로컬 프로젝트 반영: pnpm sync:websquare -- --project /absolute/path/to/project');
  console.log('반영 후 해당 프로젝트의 WebSquare Studio 또는 WAS에서 실행하세요.');
}

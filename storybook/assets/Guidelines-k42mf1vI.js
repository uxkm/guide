import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DPG3xyh1.js";import{c as i,u as a}from"./blocks-BXsfpknd.js";function o({columns:e,rows:t,codeColumns:n=[],label:r}){let i=new Set(n);return(0,s.jsx)(`div`,{className:`table_wrap`,children:(0,s.jsxs)(`table`,{className:`table table_bordered`,"aria-label":r??`${e[0]??`문서`} 표`,children:[(0,s.jsx)(`thead`,{children:(0,s.jsx)(`tr`,{children:e.map(e=>(0,s.jsx)(`th`,{scope:`col`,children:e},e))})}),(0,s.jsx)(`tbody`,{children:t.map((e,t)=>(0,s.jsx)(`tr`,{children:e.map((e,t)=>(0,s.jsx)(`td`,{children:i.has(t)&&typeof e==`string`?(0,s.jsx)(`code`,{children:e}):e},t))},`${t}-${String(e[0])}`))})]})})}var s;function c(){return(c=e((()=>{s=t(),o.__docgenInfo={description:``,methods:[],displayName:`DocsTable`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},rows:{required:!0,tsType:{name:`Array`,elements:[{name:`Array`,elements:[{name:`ReactNode`}],raw:`ReactNode[]`}],raw:`ReactNode[][]`},description:``},codeColumns:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``,defaultValue:{value:`[]`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``}}}})))()}function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`가이드라인`}),`
`,(0,d.jsx)(t.h1,{id:`가이드라인`,children:`가이드라인`}),`
`,(0,d.jsxs)(t.p,{children:[`접근성·패턴·네이밍·상태·현황처럼 구현과 리뷰에서 따르는 기준입니다. 토큰 값·테마는 `,(0,d.jsx)(t.strong,{children:`디자인 토큰`}),`, 앱 구조·소유권·변경 흐름은 `,(0,d.jsx)(t.strong,{children:`아키텍처`}),`, 설치·사용법은 `,(0,d.jsx)(t.strong,{children:`설치 및 사용`}),`을 참고합니다.`]}),`
`,(0,d.jsx)(t.h2,{id:`파운데이션`,children:`파운데이션`}),`
`,(0,d.jsxs)(t.p,{children:[`토큰 목록은 `,(0,d.jsx)(t.strong,{children:`디자인 토큰`}),`이 원본입니다. 여기에는 적용 원칙과 토큰 문서에 없는 기준만 둡니다.`]}),`
`,(0,d.jsx)(t.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,d.jsx)(t.p,{children:`접근성은 별도의 옵션이 아니라 모든 UXKM 컴포넌트가 기본으로 지켜야 하는 품질 기준입니다. 시맨틱 HTML을 우선하고 키보드, 스크린 리더, 확대 화면에서도 같은 정보와 기능을 제공해야 합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`기본-원칙`,children:`기본 원칙`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`기능에 맞는 네이티브 HTML 요소를 먼저 사용합니다.`}),`
`,(0,d.jsx)(t.li,{children:`모든 인터랙션은 키보드만으로 실행하고 종료할 수 있어야 합니다.`}),`
`,(0,d.jsx)(t.li,{children:`포커스 순서는 화면의 읽기 순서와 일치해야 합니다.`}),`
`,(0,d.jsx)(t.li,{children:`색상만으로 상태나 오류를 전달하지 않습니다.`}),`
`,(0,d.jsx)(t.li,{children:`아이콘만 있는 버튼에는 동작을 설명하는 접근 가능한 이름을 제공합니다.`}),`
`,(0,d.jsxs)(t.li,{children:[`애니메이션은 `,(0,d.jsx)(t.code,{children:`prefers-reduced-motion`}),` 설정을 존중합니다.`]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`키보드와-포커스`,children:`키보드와 포커스`}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`Tab`}),`과 `,(0,d.jsx)(t.code,{children:`Shift + Tab`}),`으로 이동하고, 버튼은 `,(0,d.jsx)(t.code,{children:`Enter`}),` 또는 `,(0,d.jsx)(t.code,{children:`Space`}),`로 실행할 수 있어야 합니다. 모달·드로어 같은 오버레이는 열린 동안 포커스를 내부에 유지하고 닫힌 뒤 실행 요소로 되돌립니다. 보이는 포커스 링을 제거하지 않습니다.`]}),`
`,(0,d.jsx)(t.h4,{id:`이름과-상태`,children:`이름과 상태`}),`
`,(0,d.jsxs)(t.p,{children:[`레이블은 눈에 보이는 텍스트와 접근 가능한 이름이 가능한 한 일치해야 합니다. 펼침, 선택, 오류처럼 화면에서 변하는 상태는 `,(0,d.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,d.jsx)(t.code,{children:`aria-selected`}),`, `,(0,d.jsx)(t.code,{children:`aria-invalid`}),` 등 적절한 속성으로 함께 전달합니다.`]}),`
`,(0,d.jsx)(t.h4,{id:`대비-기준`,children:`대비 기준`}),`
`,(0,d.jsx)(t.p,{children:`일반 텍스트는 배경과 4.5:1, 큰 텍스트는 3:1 이상의 대비를 유지합니다. 컨트롤 경계와 포커스 표시처럼 기능을 구분하는 시각 정보도 인접 색상과 3:1 이상을 목표로 합니다.`}),`
`,(0,d.jsxs)(t.p,{children:[`구체적인 구현 및 검수 절차는 아래 `,(0,d.jsx)(t.strong,{children:`Accessibility Guide`}),` 섹션을 참고합니다.`]}),`
`,(0,d.jsx)(t.h3,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,d.jsx)(t.p,{children:`UXKM은 콘텐츠가 실제로 재배치되어야 하는 지점을 기준으로 두 개의 공통 중단점을 사용합니다. 특정 기기 이름보다 사용 가능한 너비와 콘텐츠 우선순위에 집중합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`공통-값`,children:`공통 값`}),`
`,(0,d.jsx)(o,{columns:[`이름`,`값`,`기본 용도`],rows:[[`Base`,`0–767px`,`단일 열, 모바일 우선 스타일`],[`$breakpoint-md`,`768px`,`태블릿·좁은 데스크톱 레이아웃`],[`$breakpoint-lg`,`1024px`,`사이드바와 다중 열 레이아웃`]],codeColumns:[0]}),`
`,(0,d.jsxs)(t.p,{children:[`중단점은 `,(0,d.jsx)(t.code,{children:`packages/styles/shared/_variables.scss`}),`의 SCSS 변수로 관리합니다. 런타임 테마 값이 아니므로 CSS 변수로 재정의하지 않습니다.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-scss`,children:`.content-grid {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`})}),`
`,(0,d.jsx)(t.h4,{id:`적용-원칙`,children:`적용 원칙`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`모바일 기본 스타일을 먼저 작성합니다.`}),`
`,(0,d.jsx)(t.li,{children:`단순히 화면 크기가 바뀌었다는 이유로 중단점을 추가하지 않습니다.`}),`
`,(0,d.jsxs)(t.li,{children:[`고정 너비 대신 `,(0,d.jsx)(t.code,{children:`minmax()`}),`, `,(0,d.jsx)(t.code,{children:`flex-wrap`}),`, 상대 단위를 우선합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`200% 확대와 긴 한국어·영문 텍스트에서도 가로 스크롤이 생기지 않는지 확인합니다.`}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`colors`,children:`Colors`}),`
`,(0,d.jsxs)(t.p,{children:[`색상은 역할(배경·텍스트·강조·상태)을 나타내는 의미 토큰으로 사용합니다. 토큰 목록과 테마별 값은 `,(0,d.jsx)(t.strong,{children:`디자인 토큰 › 의미 색상과 테마`}),`를 참고합니다.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`hex나 RGB 값을 컴포넌트에 직접 반복하지 않습니다.`}),`
`,(0,d.jsxs)(t.li,{children:[`채워진 면 위의 콘텐츠에는 `,(0,d.jsx)(t.code,{children:`--color-on-*`}),` 토큰을 사용합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`상태는 색상과 함께 아이콘, 제목 또는 설명 텍스트를 제공합니다.`}),`
`,(0,d.jsx)(t.li,{children:`새로운 토큰은 라이트와 다크 테마 값을 함께 정의하고, 호버·비활성·포커스 대비까지 검증합니다.`}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`iconography`,children:`Iconography`}),`
`,(0,d.jsxs)(t.p,{children:[`아이콘은 기능을 빠르게 인식하도록 돕는 보조 수단입니다. UXKM의 기본 아이콘은 `,(0,d.jsx)(t.code,{children:`24 × 24`}),` 좌표계와 `,(0,d.jsx)(t.code,{children:`stroke-width="2"`}),`를 사용하며 `,(0,d.jsx)(t.code,{children:`currentColor`}),`로 주변 텍스트 색상을 상속합니다.`]}),`
`,(0,d.jsx)(t.h4,{id:`크기와-정렬`,children:`크기와 정렬`}),`
`,(0,d.jsx)(o,{columns:[`크기`,`권장 사용처`],rows:[[`Small`,`캡션, 작은 태그, 조밀한 테이블`],[`Medium`,`버튼, 입력 필드, 기본 내비게이션`],[`Large`,`빈 상태, 카드 강조 영역`],[`Extra large`,`독립된 시각 안내 또는 주요 상태`]]}),`
`,(0,d.jsx)(t.p,{children:`텍스트와 함께 배치할 때는 기준선을 맞추고 아이콘과 레이블 사이에 일관된 간격을 둡니다. 버튼의 클릭 영역은 아이콘 자체 크기보다 충분히 크게 제공합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`접근성`,children:`접근성`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`옆 텍스트와 의미가 중복되는 장식 아이콘은 `,(0,d.jsx)(t.code,{children:`aria-hidden="true"`}),`로 숨깁니다.`]}),`
`,(0,d.jsxs)(t.li,{children:[`아이콘만 있는 버튼에는 `,(0,d.jsx)(t.code,{children:`aria-label`}),`을 지정합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`정보 자체를 전달하는 비인터랙티브 아이콘에는 대체 설명을 제공합니다.`}),`
`,(0,d.jsx)(t.li,{children:`아이콘 모양이나 색상 하나만으로 성공·오류 상태를 구분하지 않습니다.`}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`선택-원칙`,children:`선택 원칙`}),`
`,(0,d.jsxs)(t.p,{children:[`한 기능에는 제품 전체에서 같은 아이콘을 사용합니다. 장식 목적으로 아이콘을 과도하게 사용하지 않으며, 새로운 아이콘은 기존 선 굵기·모서리·좌표계와 시각적 무게를 맞춥니다. 실제 이름과 사용 API는 `,(0,d.jsx)(t.strong,{children:`기본 요소 / Icon`}),` 문서를 참고합니다.`]}),`
`,(0,d.jsx)(t.h3,{id:`spacing`,children:`Spacing`}),`
`,(0,d.jsxs)(t.p,{children:[`간격 토큰(`,(0,d.jsx)(t.code,{children:`--space-xs`}),` … `,(0,d.jsx)(t.code,{children:`--space-2xl`}),`)은 `,(0,d.jsx)(t.strong,{children:`디자인 토큰 › 전역 토큰`}),`이 원본입니다. 4px을 최소 단위로 하며, 임의 값보다 콘텐츠 관계에 맞는 단계를 고릅니다.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`같은 그룹 안의 간격은 그룹 사이의 간격보다 작게 설정합니다.`}),`
`,(0,d.jsx)(t.li,{children:`목록은 각 항목의 시작선과 텍스트 기준선을 맞춥니다.`}),`
`,(0,d.jsx)(t.li,{children:`컴포넌트 내부 간격은 해당 컴포넌트 스타일이 소유하도록 합니다.`}),`
`,(0,d.jsxs)(t.li,{children:[`빈 요소나 `,(0,d.jsx)(t.code,{children:`<br>`}),`로 간격을 만들지 않습니다.`]}),`
`,(0,d.jsx)(t.li,{children:`좁은 화면에서 간격만 줄일지 레이아웃을 바꿀지 콘텐츠 관계를 기준으로 판단합니다.`}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`typography`,children:`Typography`}),`
`,(0,d.jsxs)(t.p,{children:[`글꼴 스택과 `,(0,d.jsx)(t.code,{children:`--text-size-*`}),` 값은 `,(0,d.jsx)(t.strong,{children:`디자인 토큰`}),`을 참고합니다. 타이포그래피는 정보 위계와 읽기 흐름을 만듭니다.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`문서 제목은 `,(0,d.jsx)(t.code,{children:`h1`}),`부터 순서를 건너뛰지 않습니다.`]}),`
`,(0,d.jsx)(t.li,{children:`시각적 크기 때문에 제목 태그를 선택하지 않습니다.`}),`
`,(0,d.jsx)(t.li,{children:`본문은 충분한 행간과 문단 간격을 유지합니다.`}),`
`,(0,d.jsx)(t.li,{children:`보조 텍스트라도 핵심 정보에 필요한 대비를 낮추지 않습니다.`}),`
`,(0,d.jsx)(t.li,{children:`버튼과 메뉴 레이블은 짧고 구체적인 동사 또는 명사로 작성합니다.`}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`실제 컴포넌트 변형과 말줄임 API는 `,(0,d.jsx)(t.strong,{children:`기본 요소 / Typography`}),` 문서를 참고합니다.`]}),`
`,(0,d.jsx)(t.h2,{id:`패턴`,children:`패턴`}),`
`,(0,d.jsx)(t.p,{children:`반복되는 UI 상황에서 권장하는 구성과 상호작용입니다.`}),`
`,(0,d.jsx)(t.h3,{id:`empty-state-pattern`,children:`Empty State Pattern`}),`
`,(0,d.jsx)(t.p,{children:`빈 상태는 단순히 데이터가 없다는 사실보다 왜 비어 있는지와 다음에 무엇을 할 수 있는지를 알려야 합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`상태-구분`,children:`상태 구분`}),`
`,(0,d.jsx)(o,{columns:[`상황`,`메시지 방향`,`권장 액션`],rows:[[`최초 사용`,`아직 생성된 항목이 없음`,`첫 항목 만들기`],[`검색 결과 없음`,`조건에 맞는 결과가 없음`,`검색어·필터 초기화`],[`처리 완료`,`사용자가 모든 작업을 마침`,`다른 영역으로 이동`],[`권한 없음`,`볼 수 없는 이유가 있음`,`권한 요청 또는 이전으로`],[`로드 실패`,`데이터를 가져오지 못함`,`다시 시도`]]}),`
`,(0,d.jsx)(t.h4,{id:`구성`,children:`구성`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsx)(t.li,{children:`선택적인 상태 아이콘 또는 이미지`}),`
`,(0,d.jsx)(t.li,{children:`상황을 한 문장으로 설명하는 제목`}),`
`,(0,d.jsx)(t.li,{children:`원인이나 해결 방법을 보충하는 설명`}),`
`,(0,d.jsx)(t.li,{children:`가장 가능성 높은 다음 행동 하나`}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`빈 상태를 오류나 로딩 상태 대신 사용하지 않습니다. 데이터 요청 중에는 Skeleton 또는 Spin을, 실패한 경우에는 Alert와 재시도 액션을 사용합니다. 실제 표현 API는 `,(0,d.jsx)(t.strong,{children:`피드백 / Empty`}),` 문서를 참고합니다.`]}),`
`,(0,d.jsx)(t.h3,{id:`error-handling`,children:`Error Handling`}),`
`,(0,d.jsx)(t.p,{children:`오류 메시지는 문제의 위치, 원인, 복구 방법을 함께 전달합니다. 기술적인 예외 문자열을 그대로 노출하지 않고 사용자가 취할 수 있는 행동을 중심으로 작성합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`오류-수준`,children:`오류 수준`}),`
`,(0,d.jsx)(o,{columns:[`수준`,`표현`,`예시`],rows:[[`필드`,`입력 바로 아래의 오류`,`필수값 누락, 형식 오류`],[`섹션`,`해당 영역의 Alert`,`일부 데이터 로드 실패`],[`페이지`,`주요 오류 화면`,`권한 없음, 페이지 로드 실패`],[`일시 알림`,`Snackbar`,`저장 실패 후 재시도 가능`],[`치명적 확인`,`Modal`,`진행 중인 작업을 계속할 수 없음`]]}),`
`,(0,d.jsx)(t.h4,{id:`처리-흐름`,children:`처리 흐름`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsx)(t.li,{children:`사용자의 입력을 가능한 한 보존합니다.`}),`
`,(0,d.jsx)(t.li,{children:`문제가 발생한 위치 가까이에 메시지를 표시합니다.`}),`
`,(0,d.jsx)(t.li,{children:`오류 원인과 수정 방법을 구체적으로 설명합니다.`}),`
`,(0,d.jsx)(t.li,{children:`재시도, 수정, 돌아가기 중 하나의 명확한 다음 행동을 제공합니다.`}),`
`,(0,d.jsxs)(t.li,{children:[`복구되면 오래된 오류 상태와 `,(0,d.jsx)(t.code,{children:`aria-invalid`}),`를 제거합니다.`]}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`네트워크 오류는 무한 재시도하지 않으며, 중복 제출을 막고 요청 상태를 사용자에게 알립니다. 개발 로그의 상세 정보와 사용자용 메시지를 분리합니다.`}),`
`,(0,d.jsx)(t.h3,{id:`form-validation`,children:`Form Validation`}),`
`,(0,d.jsx)(t.p,{children:`폼 검증은 오류를 예방하고 수정 비용을 줄이는 과정입니다. 입력을 방해할 정도로 빠르게 오류를 표시하지 않으며 제출 시에는 모든 문제를 빠짐없이 찾을 수 있게 합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`검증-시점`,children:`검증 시점`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`입력 전: 형식과 필수 여부를 레이블·도움말로 안내합니다.`}),`
`,(0,d.jsx)(t.li,{children:`입력 중: 비밀번호 조건처럼 즉시 피드백이 유용한 경우에만 사용합니다.`}),`
`,(0,d.jsx)(t.li,{children:`포커스 이탈: 사용자가 해당 필드 작성을 마친 뒤 검증합니다.`}),`
`,(0,d.jsx)(t.li,{children:`제출: 전체 필드를 검증하고 첫 오류로 포커스를 이동합니다.`}),`
`,(0,d.jsx)(t.li,{children:`서버 응답: 중복 계정 등 클라이언트가 알 수 없는 오류를 해당 필드에 연결합니다.`}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`필드-구성`,children:`필드 구성`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-text`,children:`레이블 + 필수 여부
입력 컨트롤
도움말 또는 형식 예시
오류 메시지
`})}),`
`,(0,d.jsxs)(t.p,{children:[`오류가 발생하면 컨트롤에 `,(0,d.jsx)(t.code,{children:`aria-invalid="true"`}),`를 지정하고 `,(0,d.jsx)(t.code,{children:`aria-describedby`}),`로 오류 메시지를 연결합니다. 색상 외에 아이콘과 텍스트를 함께 사용합니다.`]}),`
`,(0,d.jsx)(t.p,{children:`제출 버튼은 검증 오류만을 이유로 미리 비활성화하지 않습니다. 사용자가 제출을 시도할 수 있어야 누락된 항목과 해결 방법을 전달할 수 있습니다.`}),`
`,(0,d.jsx)(t.h3,{id:`modal-pattern`,children:`Modal Pattern`}),`
`,(0,d.jsx)(t.p,{children:`모달은 현재 흐름을 잠시 중단하고 사용자의 결정이나 짧은 작업이 반드시 필요할 때 사용합니다. 참고 정보나 긴 작업에는 일반 페이지 또는 Drawer가 더 적합합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,d.jsx)(o,{columns:[`사용`,`피해야 하는 경우`],rows:[[`삭제·취소 같은 중요한 확인`,`단순 성공 메시지`],[`짧고 독립적인 입력`,`여러 단계의 복잡한 폼`],[`즉시 응답해야 하는 차단 상태`,`배경 콘텐츠와 비교해야 하는 작업`]]}),`
`,(0,d.jsx)(t.h4,{id:`상호작용`,children:`상호작용`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`열리면 제목 또는 첫 번째 의미 있는 컨트롤로 포커스를 이동합니다.`}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`Tab`}),` 포커스를 모달 내부에 유지합니다.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`Escape`}),`, 닫기 버튼, 취소 동작을 일관되게 제공합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`닫힌 뒤 모달을 열었던 요소로 포커스를 되돌립니다.`}),`
`,(0,d.jsx)(t.li,{children:`파괴적 작업은 대상과 결과를 버튼 레이블에 구체적으로 표시합니다.`}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`중첩 모달은 사용하지 않습니다. 처리 중에는 중복 제출을 막되 진행 상태를 표시하고, 실패하면 입력 내용을 유지합니다. 실제 속성과 예시는 `,(0,d.jsx)(t.strong,{children:`피드백 / Modal`}),` 문서를 참고합니다.`]}),`
`,(0,d.jsx)(t.h3,{id:`navigation-pattern`,children:`Navigation Pattern`}),`
`,(0,d.jsx)(t.p,{children:`내비게이션은 사용자가 현재 위치를 이해하고 원하는 영역으로 예측 가능하게 이동하도록 돕습니다. 정보 구조의 깊이와 이동 범위에 맞는 컴포넌트를 선택합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`유형-선택`,children:`유형 선택`}),`
`,(0,d.jsx)(o,{columns:[`유형`,`컴포넌트`,`사용처`],rows:[[`전역 이동`,`Navbar, Menu`,`제품의 주요 영역`],[`계층 위치`,`Breadcrumb`,`현재 페이지의 상위 경로`],[`같은 맥락 전환`,`Tabs`,`동일 페이지 안의 관련 보기`],[`순차 과정`,`Steps`,`가입·결제 같은 단계형 작업`],[`긴 목록 이동`,`Pagination`,`서버 기반 페이지 목록`],[`보조 명령`,`Dropdown`,`현재 대상과 관련된 액션`]]}),`
`,(0,d.jsx)(t.h4,{id:`원칙`,children:`원칙`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`현재 항목은 시각적 표시와 `,(0,d.jsx)(t.code,{children:`aria-current`}),` 등 의미 정보를 함께 제공합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`같은 목적지는 제품 전체에서 같은 이름과 위치를 유지합니다.`}),`
`,(0,d.jsx)(t.li,{children:`모바일에서 항목을 단순히 숨기지 말고 우선순위에 따라 재구성합니다.`}),`
`,(0,d.jsx)(t.li,{children:`탭, 페이지 이동, 펼침 메뉴의 동작을 서로 혼용하지 않습니다.`}),`
`,(0,d.jsx)(t.li,{children:`뒤로가기를 포함한 브라우저 탐색이 예측 가능해야 합니다.`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`메뉴 깊이는 가능한 한 얕게 유지하며, 사용자가 펼치지 않아도 주요 영역의 존재를 파악할 수 있게 합니다.`}),`
`,(0,d.jsx)(t.h2,{id:`가이드`,children:`가이드`}),`
`,(0,d.jsx)(t.p,{children:`구현·네이밍·상태·프레임워크 비교처럼 작업 시 따르는 규칙입니다.`}),`
`,(0,d.jsx)(t.h3,{id:`accessibility-guide`,children:`Accessibility Guide`}),`
`,(0,d.jsxs)(t.p,{children:[`이 문서는 컴포넌트 구현과 리뷰에서 사용하는 접근성 점검 절차입니다. 공통 원칙은 위 `,(0,d.jsx)(t.strong,{children:`Accessibility`}),` 섹션을 참고합니다.`]}),`
`,(0,d.jsx)(t.h4,{id:`구현-체크리스트`,children:`구현 체크리스트`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`네이티브 요소로 해결할 수 있는지 먼저 확인합니다.`}),`
`,(0,d.jsx)(t.li,{children:`모든 입력에 프로그램 방식으로 연결된 레이블을 제공합니다.`}),`
`,(0,d.jsx)(t.li,{children:`아이콘 버튼과 이름 없는 영역에 접근 가능한 이름을 지정합니다.`}),`
`,(0,d.jsx)(t.li,{children:`상태 변화에 필요한 ARIA 속성을 실제 UI 상태와 동기화합니다.`}),`
`,(0,d.jsx)(t.li,{children:`DOM 순서와 키보드 포커스 순서를 일치시킵니다.`}),`
`,(0,d.jsx)(t.li,{children:`오류 메시지를 해당 입력과 연결하고 복구 방법을 설명합니다.`}),`
`,(0,d.jsx)(t.li,{children:`라이트·다크 테마에서 텍스트, 경계, 포커스 대비를 확인합니다.`}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`검수-순서`,children:`검수 순서`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsx)(t.li,{children:`마우스 없이 모든 기능을 실행합니다.`}),`
`,(0,d.jsx)(t.li,{children:`200% 확대와 좁은 화면에서 콘텐츠 손실을 확인합니다.`}),`
`,(0,d.jsx)(t.li,{children:`브라우저 접근성 트리에서 이름·역할·상태를 확인합니다.`}),`
`,(0,d.jsx)(t.li,{children:`스크린 리더로 읽기 순서와 동적 알림을 확인합니다.`}),`
`,(0,d.jsx)(t.li,{children:`Storybook 접근성 검사 결과를 확인하고 수동 검수를 병행합니다.`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`자동 검사는 누락된 이름과 일부 대비 문제를 찾는 보조 수단입니다. 키보드 흐름, 메시지의 이해 가능성, 올바른 포커스 복귀는 반드시 직접 확인합니다.`}),`
`,(0,d.jsx)(t.h3,{id:`component-structure`,children:`Component Structure`}),`
`,(0,d.jsxs)(t.p,{children:[`소스 소유권·경로·변경 순서는 `,(0,d.jsx)(t.strong,{children:`아키텍처 › 컴포넌트 소유권과 소스 위치`}),` 및 `,(0,d.jsx)(t.strong,{children:`변경 흐름`}),`이 원본입니다. 여기서는 디렉터리 골격만 요약합니다.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-text`,children:`Category/Component/
├── Component.jsx 또는 Component.vue
├── Component.test.jsx 또는 Component.spec.js
└── index.js
`})}),`
`,(0,d.jsx)(t.p,{children:`생성된 CSS나 Nuxt·Next 앱에 공통 컴포넌트를 복제하지 않습니다.`}),`
`,(0,d.jsx)(t.h3,{id:`framework-comparison`,children:`Framework Comparison`}),`
`,(0,d.jsxs)(t.p,{children:[`프레임워크 역할 개요는 `,(0,d.jsx)(t.strong,{children:`소개 › 지원 프레임워크`}),`와 Vue/Nuxt·React/Next 비교 섹션을 참고합니다. 아래는 구현 시 공통으로 유지할 항목입니다.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`사용자에게 보이는 이름과 동작`}),`
`,(0,d.jsx)(t.li,{children:`CSS 클래스와 의미 토큰`}),`
`,(0,d.jsx)(t.li,{children:`disabled, loading, error 등 상태 의미`}),`
`,(0,d.jsx)(t.li,{children:`키보드 조작과 ARIA 결과`}),`
`,(0,d.jsx)(t.li,{children:`Storybook의 Preview와 API 설명`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Nuxt와 Next.js는 52개 공통 컴포넌트를 복제하지 않고 각각 Vue와 React 원본을 재사용합니다. 프레임워크별 상세 문법은 Vue·React 가이드북에서 확인합니다.`}),`
`,(0,d.jsx)(t.h3,{id:`naming-convention`,children:`Naming Convention`}),`
`,(0,d.jsx)(t.p,{children:`이름은 프레임워크가 달라도 같은 개념을 빠르게 찾고 비교할 수 있도록 일관되게 작성합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`파일과-컴포넌트`,children:`파일과 컴포넌트`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`컴포넌트와 디렉터리는 `,(0,d.jsx)(t.code,{children:`PascalCase`}),`를 사용합니다: `,(0,d.jsx)(t.code,{children:`DatePicker`}),`, `,(0,d.jsx)(t.code,{children:`BackTop`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[`React 파일은 `,(0,d.jsx)(t.code,{children:`.jsx`}),`, Vue 파일은 `,(0,d.jsx)(t.code,{children:`.vue`}),`, Nunjucks 파일은 `,(0,d.jsx)(t.code,{children:`kebab-case.njk`}),`를 사용합니다.`]}),`
`,(0,d.jsxs)(t.li,{children:[`공개 진입점은 각 컴포넌트 디렉터리의 `,(0,d.jsx)(t.code,{children:`index.js`}),`로 제공합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`테스트 파일은 구현 파일과 같은 디렉터리에 둡니다.`}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`api`,children:`API`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`prop은 역할을 설명하는 `,(0,d.jsx)(t.code,{children:`camelCase`}),` 이름을 사용합니다: `,(0,d.jsx)(t.code,{children:`ariaLabel`}),`, `,(0,d.jsx)(t.code,{children:`showInfo`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[`boolean은 긍정형 상태를 기본으로 작성합니다: `,(0,d.jsx)(t.code,{children:`disabled`}),`, `,(0,d.jsx)(t.code,{children:`loading`}),`, `,(0,d.jsx)(t.code,{children:`block`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[`이벤트는 React의 `,(0,d.jsx)(t.code,{children:`onChange`}),`, Vue의 `,(0,d.jsx)(t.code,{children:`change`}),`처럼 프레임워크 관례를 따르되 의미는 동일하게 유지합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`축약어보다 검색 가능한 전체 단어를 우선합니다.`}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`css`,children:`CSS`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-text`,children:`.component
.component_element
.component_variant
.is-state
.color-semantic
.size-scale
`})}),`
`,(0,d.jsx)(t.p,{children:`시각적 결과가 아닌 의미를 이름에 담습니다. 기존 이름과 같은 의미의 별칭을 새로 추가하지 않습니다.`}),`
`,(0,d.jsx)(t.h3,{id:`state-convention`,children:`State Convention`}),`
`,(0,d.jsx)(t.p,{children:`상태는 사용자 입력, 시스템 처리, 유효성 결과를 구분해 표현합니다. 같은 상태는 모든 프레임워크와 컴포넌트에서 같은 의미를 가져야 합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`공통-상태`,children:`공통 상태`}),`
`,(0,d.jsx)(o,{columns:[`상태`,`의미`,`구현 기준`],rows:[[`hover`,`포인터가 상호작용 영역 위에 있음`,`기능의 존재를 보조`],[`focus`,`키보드·스크립트 포커스`,`항상 보이는 포커스 표시`],[`active`,`누르는 중 또는 현재 활성`,`선택 상태와 혼용하지 않음`],[`selected`,`목록·탭에서 선택됨`,`의미 속성과 함께 표현`],[`disabled`,`상호작용할 수 없음`,`네이티브 속성을 우선`],[`loading`,`작업이 처리 중`,`중복 실행 방지와 진행 안내`],[`error`,`입력·처리 실패`,`원인과 복구 방법 제공`],[`success`,`작업 또는 검증 성공`,`필요한 경우에만 지속 표시`]],codeColumns:[0]}),`
`,(0,d.jsx)(t.h4,{id:`작성-원칙`,children:`작성 원칙`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`상태 클래스는 `,(0,d.jsx)(t.code,{children:`is-loading`}),`, `,(0,d.jsx)(t.code,{children:`is-selected`}),`처럼 `,(0,d.jsx)(t.code,{children:`is-`}),` 접두어를 사용합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`상태를 색상 하나로만 표현하지 않습니다.`}),`
`,(0,d.jsx)(t.li,{children:`disabled와 readonly를 구분합니다. readonly 값은 읽고 포커스할 수 있습니다.`}),`
`,(0,d.jsx)(t.li,{children:`로딩 중 기존 레이블을 완전히 제거하지 않아 사용자가 어떤 작업인지 알 수 있게 합니다.`}),`
`,(0,d.jsx)(t.li,{children:`제어 상태와 비제어 상태를 동시에 사용하지 않습니다.`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`상태가 바뀌면 화면과 DOM의 속성, 접근성 정보가 같은 시점에 갱신되어야 합니다.`}),`
`,(0,d.jsx)(t.h2,{id:`현황`,children:`현황`}),`
`,(0,d.jsx)(t.p,{children:`공통 컴포넌트와 프레임워크 지원 범위를 요약합니다.`}),`
`,(0,d.jsx)(t.h3,{id:`component-status`,children:`Component Status`}),`
`,(0,d.jsx)(t.p,{children:`UXKM은 7개 범주, 52개 공통 컴포넌트를 HTML, Gulp/Nunjucks, Vue, React에서 관리합니다. 각 컴포넌트는 공통 스타일, Storybook 문서와 함께 검증합니다.`}),`
`,(0,d.jsx)(t.h4,{id:`범주별-현황`,children:`범주별 현황`}),`
`,(0,d.jsx)(o,{label:`범주별 컴포넌트 현황`,columns:[`범주`,`개수`,`컴포넌트`],rows:[[`레이아웃`,`5`,`Container, Grid, Flex, Divider, Space`],[`기본 요소`,`4`,`Button, Typography, Icon, Link`],[`데이터 표시`,`10`,`Avatar, Badge, Tag, Card, Table, List, Stat, Calendar, Timeline, Tree`],[`폼`,`11`,`Form Layout, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Rate, Date Picker, Upload`],[`피드백`,`10`,`Alert, Snackbar, Modal, Drawer, Popover, Tooltip, Progress, Spin, Skeleton, Empty`],[`네비게이션`,`7`,`Navbar, Menu, Tabs, Breadcrumb, Pagination, Steps, Dropdown`],[`기타`,`5`,`Accordion, Collapse, Carousel, Affix, Back Top`],[`합계`,`52`,`—`]]}),`
`,(0,d.jsx)(t.h4,{id:`완료-기준`,children:`완료 기준`}),`
`,(0,d.jsx)(t.p,{children:`컴포넌트는 아래 항목을 모두 충족할 때 공통 제공 상태로 봅니다.`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`HTML, Gulp, Vue, React 구현 파일 존재`}),`
`,(0,d.jsx)(t.li,{children:`Vue와 React 테스트 존재`}),`
`,(0,d.jsx)(t.li,{children:`공통 SCSS 및 스타일 빌드 연결`}),`
`,(0,d.jsx)(t.li,{children:`Storybook Preview, 프레임워크 예제, API 문서 제공`}),`
`,(0,d.jsx)(t.li,{children:`키보드와 접근성 상태 검수`}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`저장소의 `,(0,d.jsx)(t.code,{children:`pnpm validate:components`}),` 검사는 52개 컴포넌트의 필수 파일과 중앙 Storybook 구조를 확인합니다. 개별 변경의 품질은 관련 테스트와 정적 빌드도 함께 통과해야 합니다.`]}),`
`,(0,d.jsx)(t.h3,{id:`framework-support`,children:`Framework Support`}),`
`,(0,d.jsxs)(t.p,{children:[`지원 범위 표와 호환 원칙입니다. WebSquare 화면 연결 절차는 `,(0,d.jsx)(t.strong,{children:`설치 및 사용 › WebSquare`}),`, 문서 경계는 `,(0,d.jsx)(t.strong,{children:`아키텍처 › WebSquare 문서 경계`}),`를 참고합니다.`]}),`
`,(0,d.jsx)(t.h4,{id:`지원-범위`,children:`지원 범위`}),`
`,(0,d.jsx)(o,{label:`프레임워크 지원 범위`,columns:[`대상`,`공통 52개`,`전용 통합`,`문서 형태`],rows:[[`HTML`,`직접 구현`,`공통 DOM 동작`,`정적 컴포넌트 가이드`],[`Gulp / Nunjucks`,`직접 구현`,`Nunjucks 템플릿`,`정적 컴포넌트 가이드`],[`Vue 3 / Vite`,`직접 구현`,`—`,`Vue Preview와 API`],[`React / Vite`,`직접 구현`,`—`,`React Preview와 API`],[`Nuxt`,`Vue 구현 재사용`,`AppLayout, NuxtLinkButton, NuxtImage`,`Nuxt 정적 가이드`],[`Next.js`,`React 구현 재사용`,`AppLayout, NextLinkButton, NextImage`,`App Router 정적 가이드`],[`WebSquare`,`HTML 구현을 XML로 변환`,`WebSquare 네임스페이스와 XML 문법`,`Storybook 코드 예제`],[`Storybook`,`React Preview 사용`,`7개 구현 코드 비교`,`통합 문서`]]}),`
`,(0,d.jsx)(t.h4,{id:`호환-원칙`,children:`호환 원칙`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`공통 CSS는 `,(0,d.jsx)(t.code,{children:`packages/styles`}),`의 단일 원본에서 생성합니다.`]}),`
`,(0,d.jsx)(t.li,{children:`Nuxt와 Next.js는 각각 Vue와 React 컴포넌트를 재사용합니다.`}),`
`,(0,d.jsx)(t.li,{children:`WebSquare는 HTML 예제를 XML 호환 마크업으로 변환하며, 복잡한 컴포넌트는 전용 예제로 대체할 수 있습니다.`}),`
`,(0,d.jsx)(t.li,{children:`Container, Grid, Flex, Divider, Space, Button, Typography, Icon, Link는 WebSquare 컴포넌트·이벤트·리소스 특성을 반영한 전용 XML 예제를 제공합니다.`}),`
`,(0,d.jsx)(t.li,{children:`프레임워크별 문법이 달라도 API 의미와 사용자 동작은 일치시킵니다.`}),`
`,(0,d.jsx)(t.li,{children:`라우팅과 이미지 최적화처럼 프레임워크가 소유해야 하는 기능만 전용 컴포넌트로 제공합니다.`}),`
`,(0,d.jsx)(t.li,{children:`변경 시 일곱 구현 코드와 Storybook 문서를 같은 작업 범위에서 확인합니다.`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`이 표는 저장소 구조 기준의 지원 범위입니다. 특정 컴포넌트의 사용법과 제한은 각 컴포넌트 문서를 참고합니다.`})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),c()})))()}f();export{u as default};
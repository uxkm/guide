import './style.css';

const pages = [
  {
    id: 'overview', group: '가이드북', path: '', label: '소개', eyebrow: 'HTML · Gulp · Vue · React', title: 'Guidebook', titleLogo: true,
    lead: '웹 인터페이스의 기본부터 프레임워크 구현까지 페이지별 가이드를 따라 순서대로 학습합니다.',
    content: `<div class="callout"><span class="callout-icon">i</span><p>왼쪽 목차의 각 항목은 고유한 URL을 가진 별도 페이지로 제공됩니다. 필요한 문서를 바로 열거나 공유할 수 있습니다.</p></div><h2 id="learning-path">학습 순서</h2><div class="feature-grid"><a class="feature-card" data-route="html" href="#"><strong>01 · HTML</strong><p>시맨틱 구조와 접근 가능한 인터페이스의 기반</p></a><a class="feature-card" data-route="gulp" href="#"><strong>02 · Gulp</strong><p>Nunjucks 템플릿과 정적 빌드 자동화</p></a><a class="feature-card" data-route="vue" href="#"><strong>03 · Vue</strong><p>반응형 UI와 Nuxt 애플리케이션 구조</p></a><a class="feature-card" data-route="react" href="#"><strong>04 · React</strong><p>상태 기반 UI와 Next.js 애플리케이션 구조</p></a></div>`,
    outline: [['learning-path', '학습 순서']]
  },
  {
    id: 'quick-start', group: '가이드북', path: 'quick-start/', label: '빠른 시작', eyebrow: 'Guidebook', title: '빠른 시작',
    lead: '하나의 개발 서버에서 페이지로 분리된 전체 가이드북을 확인할 수 있습니다.',
    content: `<h2 id="development">개발 서버 실행</h2><pre class="code-block"><span class="code-label">Terminal</span><code>pnpm dev:guidebook</code></pre><p>실행 후 왼쪽 목차에서 원하는 문서를 선택합니다. 메뉴를 이동하면 URL도 함께 변경됩니다.</p>`,
    outline: [['development', '개발 서버 실행']]
  },
  {
    id: 'html', group: 'HTML', path: 'html/', label: 'HTML 개요', eyebrow: 'Chapter 01', title: 'HTML',
    lead: '콘텐츠의 의미가 드러나는 요소와 올바른 문서 계층을 선택합니다.',
    content: `<h2 id="foundation">인터페이스의 기반</h2><p>CSS와 JavaScript가 없어도 핵심 정보에 접근할 수 있는 구조가 출발점입니다. 의미 있는 요소와 예측 가능한 문서 구조는 접근성과 유지보수성을 함께 높입니다.</p>`,
    outline: [['foundation', '인터페이스의 기반']]
  },
  {
    id: 'html-semantic', group: 'HTML', path: 'html/semantic/', label: '시맨틱 마크업', eyebrow: 'HTML', title: '시맨틱 마크업',
    lead: '콘텐츠의 목적에 맞는 HTML 요소를 사용해 문서 구조를 명확하게 전달합니다.',
    content: `<h2 id="landmarks">랜드마크와 제목</h2><p><code>header</code>, <code>nav</code>, <code>main</code>, <code>aside</code>, <code>footer</code>로 페이지 영역을 구분하고 제목 레벨을 건너뛰지 않습니다.</p><h2 id="controls">링크와 버튼</h2><p>페이지 이동에는 링크를, 현재 화면의 동작에는 버튼을 사용해 역할과 키보드 동작이 일치하도록 합니다.</p>`,
    outline: [['landmarks', '랜드마크와 제목'], ['controls', '링크와 버튼']]
  },
  {
    id: 'html-accessibility', group: 'HTML', path: 'html/accessibility/', label: '접근성', eyebrow: 'HTML', title: '접근성',
    lead: '다양한 사용자가 같은 정보와 기능에 접근할 수 있도록 기본 구현 단계부터 설계합니다.',
    content: `<h2 id="keyboard">키보드 탐색</h2><p>모든 인터랙션은 키보드로 실행할 수 있어야 하며 현재 포커스 위치가 시각적으로 명확해야 합니다.</p><h2 id="alternatives">대체 정보</h2><p>정보성 이미지에는 대체 텍스트를 제공하고, 입력 요소는 이해할 수 있는 레이블과 연결합니다.</p>`,
    outline: [['keyboard', '키보드 탐색'], ['alternatives', '대체 정보']]
  },
  {
    id: 'gulp', group: 'Gulp · Nunjucks', path: 'gulp/', label: 'Gulp 개요', eyebrow: 'Chapter 02', title: 'Gulp · Nunjucks',
    lead: '반복되는 마크업을 템플릿으로 모듈화하고 정적 자산 배포를 자동화합니다.',
    content: `<h2 id="workflow">빌드 워크플로</h2><p>소스 변환, 파일 복사, 개발 서버와 감시 작업을 자동화해 반복 작업을 줄이고 동일한 결과물을 만듭니다.</p>`,
    outline: [['workflow', '빌드 워크플로']]
  },
  {
    id: 'gulp-tasks', group: 'Gulp · Nunjucks', path: 'gulp/tasks/', label: '태스크 구성', eyebrow: 'Gulp · Nunjucks', title: '태스크 구성',
    lead: '빌드 작업을 작은 책임으로 분리하고 실행 순서에 맞게 조합합니다.',
    content: `<h2 id="composition">직렬·병렬 조합</h2><p>선행 결과가 필요한 작업은 <code>series</code>로, 독립적인 작업은 <code>parallel</code>로 묶어 실행 흐름을 명확히 합니다.</p><h2 id="watch">감시 작업</h2><p>변경된 소스 유형에 필요한 태스크만 다시 실행해 개발 피드백 시간을 줄입니다.</p>`,
    outline: [['composition', '직렬·병렬 조합'], ['watch', '감시 작업']]
  },
  {
    id: 'gulp-templates', group: 'Gulp · Nunjucks', path: 'gulp/templates/', label: '템플릿', eyebrow: 'Gulp · Nunjucks', title: '템플릿',
    lead: '레이아웃, 부분 템플릿, 데이터를 분리해 일관된 페이지 구조를 재사용합니다.',
    content: `<h2 id="structure">템플릿 구조</h2><p>공통 셸은 레이아웃에, 반복 UI는 부분 템플릿에 두고 페이지별 값은 데이터로 전달합니다.</p><h2 id="reuse">재사용 원칙</h2><p>표현과 데이터의 책임을 분리하고 과도한 조건 분기를 피하여 템플릿을 예측 가능하게 유지합니다.</p>`,
    outline: [['structure', '템플릿 구조'], ['reuse', '재사용 원칙']]
  },
  {
    id: 'vue', group: 'Vue · Nuxt', path: 'vue/', label: 'Vue 개요', eyebrow: 'Chapter 03', title: 'Vue · Nuxt',
    lead: '선언형 템플릿과 반응형 상태를 사용해 컴포넌트 기반 UI를 구성합니다.',
    content: `<h2 id="components">컴포넌트 모델</h2><p>화면을 책임이 명확한 컴포넌트로 나누고 props와 emit으로 데이터 흐름을 설계합니다.</p>`,
    outline: [['components', '컴포넌트 모델']]
  },
  {
    id: 'vue-reactivity', group: 'Vue · Nuxt', path: 'vue/reactivity/', label: '반응성', eyebrow: 'Vue · Nuxt', title: '반응성',
    lead: '상태의 역할에 맞는 반응성 API를 선택하고 변경 범위를 예측 가능하게 관리합니다.',
    content: `<h2 id="state">상태 선언</h2><p>원시 값은 <code>ref</code>, 연관된 객체 상태는 <code>reactive</code>를 기준으로 선택합니다.</p><h2 id="derived">파생 상태</h2><p>기존 상태에서 계산할 수 있는 값은 <code>computed</code>로 표현해 중복 상태와 동기화 오류를 줄입니다.</p>`,
    outline: [['state', '상태 선언'], ['derived', '파생 상태']]
  },
  {
    id: 'vue-nuxt', group: 'Vue · Nuxt', path: 'vue/nuxt/', label: 'Nuxt 비교', eyebrow: 'Vue · Nuxt', title: 'Nuxt 비교',
    lead: 'Vue의 컴포넌트 모델이 Nuxt 애플리케이션 구조에서 어떻게 확장되는지 살펴봅니다.',
    content: `<h2 id="routing">파일 기반 라우팅</h2><p>Nuxt는 pages 디렉터리 구조를 URL 경로로 연결하고 중첩 레이아웃을 제공합니다.</p><h2 id="rendering">렌더링과 데이터</h2><p>서버 렌더링, 정적 생성, 데이터 패칭을 프로젝트 요구에 맞게 선택할 수 있습니다.</p>`,
    outline: [['routing', '파일 기반 라우팅'], ['rendering', '렌더링과 데이터']]
  },
  {
    id: 'react', group: 'React · Next.js', path: 'react/', label: 'React 개요', eyebrow: 'Chapter 04', title: 'React · Next.js',
    lead: '컴포넌트와 상태를 중심으로 UI를 모델링하고 단방향 데이터 흐름을 구성합니다.',
    content: `<h2 id="ui-model">UI 모델</h2><p>화면을 상태의 결과로 표현하고 컴포넌트 합성을 통해 복잡한 인터페이스를 작은 단위로 구성합니다.</p>`,
    outline: [['ui-model', 'UI 모델']]
  },
  {
    id: 'react-state', group: 'React · Next.js', path: 'react/state/', label: '상태와 Hooks', eyebrow: 'React · Next.js', title: '상태와 Hooks',
    lead: '상태를 렌더링 시점의 스냅샷으로 이해하고 Hooks로 상태 로직을 관리합니다.',
    content: `<h2 id="state">상태 설계</h2><p>렌더링에 필요한 최소 상태만 소유하고 파생 가능한 값은 렌더링 과정에서 계산합니다.</p><h2 id="effects">외부 시스템 연결</h2><p>Effect는 네트워크, 브라우저 API처럼 React 외부 시스템과 동기화할 때 사용합니다.</p>`,
    outline: [['state', '상태 설계'], ['effects', '외부 시스템 연결']]
  },
  {
    id: 'react-next', group: 'React · Next.js', path: 'react/next/', label: 'Next.js 비교', eyebrow: 'React · Next.js', title: 'Next.js 비교',
    lead: 'React의 UI 모델 위에 Next.js가 제공하는 애플리케이션 기능을 비교합니다.',
    content: `<h2 id="routing">파일 기반 라우팅</h2><p>App Router는 폴더와 특수 파일을 사용해 페이지, 레이아웃, 로딩과 오류 상태를 구성합니다.</p><h2 id="rendering">서버와 클라이언트</h2><p>서버 컴포넌트를 기본으로 사용하고 상호작용이 필요한 경계에 클라이언트 컴포넌트를 배치합니다.</p>`,
    outline: [['routing', '파일 기반 라우팅'], ['rendering', '서버와 클라이언트']]
  }
];

const currentIndex = Math.max(0, pages.findIndex((page) => page.id === document.body.dataset.page));
const currentPage = pages[currentIndex];
const depth = currentPage.path.split('/').filter(Boolean).length;
const guideRoot = new URL('../'.repeat(depth) || './', window.location.href);
const pageUrl = (page) => new URL(page.path, guideRoot).href;
const groups = [...new Set(pages.map((page) => page.group))];

document.title = `${currentPage.label} | UXKM Guidebook`;

const sidebar = groups.map((group) => {
  const items = pages.filter((page) => page.group === group);
  return `<p class="sidebar-label">${group}</p><ul class="nav-list${group === '가이드북' ? '' : ' nav-sub'}">${items.map((page) => `<li><a class="nav-link${page.id === currentPage.id ? ' active' : ''}" href="${pageUrl(page)}"${page.id === currentPage.id ? ' aria-current="page"' : ''}>${page.label}</a></li>`).join('')}</ul>`;
}).join('');

const prev = pages[currentIndex - 1];
const next = pages[currentIndex + 1];
const pageNav = `<nav class="page-nav" aria-label="문서 페이지 이동">${prev ? `<a href="${pageUrl(prev)}"><small>이전</small><strong>← ${prev.label}</strong></a>` : '<span></span>'}${next ? `<a href="${pageUrl(next)}"><small>다음</small><strong>${next.label} →</strong></a>` : '<span></span>'}</nav>`;
const outline = currentPage.outline.map(([id, label], index) => `<a${index === 0 ? ' class="active"' : ''} href="#${id}">${label}</a>`).join('');
const searchResults = pages.map((page) => `<a class="search-result" href="${pageUrl(page)}"><strong>${page.label}</strong><span>${page.group}</span></a>`).join('');
const pageTitle = currentPage.titleLogo
  ? `<span class="guide-title"><img src="${new URL('images/brand/uxkm_logo.svg', guideRoot).href}" alt="UXKM"><span>${currentPage.title}</span></span>`
  : currentPage.title;

document.querySelector('#app').innerHTML = `
  <header class="docs-header"><button class="menu-button" type="button" aria-label="목차 열기" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button><a class="brand" href="${pageUrl(pages[0])}"><img class="brand-logo" src="${new URL('images/brand/uxkm_logo_hand.svg', guideRoot).href}" alt="UXKM"><span class="brand-divider"></span><span class="brand-product">Guidebook</span></a><button class="search-trigger" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><span>가이드북 검색...</span><kbd>⌘ K</kbd></button><a class="header-link" href="http://localhost:6006/" target="_blank" rel="noopener noreferrer">Storybook ↗</a></header>
  <aside class="docs-sidebar" aria-label="가이드북 목차">${sidebar}<p class="sidebar-footer">uxkm.io Guidebook</p></aside><button class="sidebar-backdrop" type="button" aria-label="목차 닫기"></button>
  <div class="docs-shell"><main class="docs-content"><p class="eyebrow">${currentPage.eyebrow}</p><h1>${pageTitle}</h1><p class="lead">${currentPage.lead}</p>${currentPage.content}${pageNav}</main></div>
  <aside class="page-outline"><strong>이 페이지에서</strong>${outline}</aside>
  <dialog class="search-dialog"><div class="search-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input aria-label="가이드북 검색" placeholder="목차 검색"></div><div class="search-results">${searchResults}<p class="search-empty" hidden>검색 결과가 없습니다.</p></div></dialog>`;

document.querySelectorAll('[data-route]').forEach((link) => {
  link.href = pageUrl(pages.find((page) => page.id === link.dataset.route));
});

const dialog = document.querySelector('.search-dialog');
const searchInput = dialog.querySelector('input');
const resultItems = [...dialog.querySelectorAll('.search-result')];
const sidebarElement = document.querySelector('.docs-sidebar');
const backdrop = document.querySelector('.sidebar-backdrop');
const menuButton = document.querySelector('.menu-button');

function openSearch() {
  dialog.showModal();
  searchInput.focus();
}

function closeSidebar() {
  sidebarElement.classList.remove('open');
  backdrop.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

document.querySelector('.search-trigger').addEventListener('click', openSearch);
menuButton.addEventListener('click', () => {
  sidebarElement.classList.add('open');
  backdrop.classList.add('open');
  menuButton.setAttribute('aria-expanded', 'true');
});
backdrop.addEventListener('click', closeSidebar);

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
  if (event.key === 'Escape') closeSidebar();
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  resultItems.forEach((item) => {
    item.hidden = !item.textContent.toLowerCase().includes(query);
    if (!item.hidden) visibleCount += 1;
  });
  dialog.querySelector('.search-empty').hidden = visibleCount > 0;
});

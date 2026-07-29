import{b as e,g as n,e as gs,c as Cs}from"./gulp-demos-C1efgjoy.js";const ys=`<!-- @meta
title: List | HTML Components
activeNav: list
pageTitle: List
-->
<div class="page_intro">
  <h1>List</h1>
  <p class="lead">항목을 세로 목록으로 표시하는 리스트 컴포넌트입니다. 불릿·번호 유형과 인터랙티브 항목을 지원합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>list_title · list_meta · list_desc로 항목 내용을 구성합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list">
      <li class="list_item">
        <span class="avatar color_primary" aria-hidden="true">홍</span>
        <div class="list_content">
          <span class="list_title">홍길동</span>
          <span class="list_meta">프론트엔드 개발자</span>
        </div>
      </li>
      <li class="list_item">
        <span class="avatar color_success" aria-hidden="true">김</span>
        <div class="list_content">
          <span class="list_title">김철수</span>
          <span class="list_meta">백엔드 개발자</span>
        </div>
      </li>
      <li class="list_item">
        <span class="avatar color_warning" aria-hidden="true">이</span>
        <div class="list_content">
          <span class="list_title">이영희</span>
          <span class="list_meta">UI/UX 디자이너</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="bullet-heading">
  <div class="demo_section-header">
    <h2 id="bullet-heading">불릿</h2>
    <p>class에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list list_bullet">
      <li class="list_item">디자인 토큰 정의</li>
      <li class="list_item">컴포넌트 문서화</li>
      <li class="list_item">접근성 검토</li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="bullet-rich-heading">
  <div class="demo_section-header">
    <h2 id="bullet-rich-heading">불릿 · 본문</h2>
    <p>title · description prop으로 제목·설명을 함께 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list list_bullet">
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">HTML 마크업</span>
          <span class="list_desc">시맨틱 태그와 ARIA 속성을 사용합니다.</span>
        </div>
      </li>
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">SCSS 스타일</span>
          <span class="list_desc">OOCSS 패턴으로 구조와 스킨을 분리합니다.</span>
        </div>
      </li>
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">접근성</span>
          <span class="list_desc">WCAG 2.2 AA 기준을 준수합니다.</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="bullet-variant-heading">
  <div class="demo_section-header">
    <h2 id="bullet-variant-heading">불릿 변형</h2>
    <p>circle · square 마커와 중첩 목록을 지원합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ul class="list list_bullet list_bullet-circle">
      <li class="list_item">원형 마커 항목 A</li>
      <li class="list_item">원형 마커 항목 B</li>
    </ul>

    <ul class="list list_bullet list_bullet-square">
      <li class="list_item">사각 마커 항목 A</li>
      <li class="list_item">사각 마커 항목 B</li>
    </ul>

    <ul class="list list_bullet">
      <li class="list_item">레이아웃
        <ul class="list list_bullet">
          <li class="list_item">Container</li>
          <li class="list_item">Grid</li>
        </ul>
      </li>
      <li class="list_item">기본 요소
        <ul class="list list_bullet">
          <li class="list_item">Button</li>
          <li class="list_item">Typography</li>
        </ul>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="ordered-heading">
  <div class="demo_section-header">
    <h2 id="ordered-heading">번호</h2>
    <p>tag="ol"과 list_ordered 클래스로 순서 목록을 만듭니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="list list_ordered">
      <li class="list_item">요구사항 분석</li>
      <li class="list_item">와이어프레임 작성</li>
      <li class="list_item">프로토타입 검증</li>
      <li class="list_item">개발 및 배포</li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="ordered-variant-heading">
  <div class="demo_section-header">
    <h2 id="ordered-variant-heading">번호 변형</h2>
    <p>list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="list list_ordered list_ordered-alpha">
      <li class="list_item">첫 번째 옵션</li>
      <li class="list_item">두 번째 옵션</li>
      <li class="list_item">세 번째 옵션</li>
    </ol>

    <ol class="list list_ordered list_ordered-roman">
      <li class="list_item">서론</li>
      <li class="list_item">본론</li>
      <li class="list_item">결론</li>
    </ol>

    <ol class="list list_ordered list_ordered-upper-alpha">
      <li class="list_item">항목 A</li>
      <li class="list_item">항목 B</li>
    </ol>

    <ol class="list list_ordered list_ordered-upper-roman">
      <li class="list_item">Chapter I</li>
      <li class="list_item">Chapter II</li>
    </ol>

    <ol class="list list_ordered">
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">프로젝트 설정</span>
          <span class="list_desc">저장소 클론 및 의존성 설치</span>
        </div>
      </li>
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">개발 서버 실행</span>
          <span class="list_desc">pnpm dev로 로컬 미리보기</span>
        </div>
        <ol class="list list_ordered list_ordered-alpha">
          <li class="list_item">터미널에서 프로젝트 폴더 이동</li>
          <li class="list_item">pnpm install 실행</li>
          <li class="list_item">pnpm dev 실행</li>
        </ol>
      </li>
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">빌드</span>
          <span class="list_desc">pnpm build로 html/ 출력</span>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="ordered-hierarchical-heading">
  <div class="demo_section-header">
    <h2 id="ordered-hierarchical-heading">번호 · 계층</h2>
    <p>list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="list list_ordered list_ordered-outline">
      <li class="list_item">1단계 — 요구사항 정의</li>
      <li class="list_item">설계
        <ol class="list list_ordered list_ordered-outline">
          <li class="list_item">정보 구조</li>
          <li class="list_item">UI 설계
            <ol class="list list_ordered list_ordered-outline">
              <li class="list_item">와이어프레임</li>
              <li class="list_item">프로토타입</li>
            </ol>
          </li>
        </ol>
      </li>
      <li class="list_item">개발 및 배포</li>
    </ol>

    <ol class="list list_ordered list_ordered-dash">
      <li class="list_item">1단계 — 환경 구성</li>
      <li class="list_item">개발
        <ol class="list list_ordered list_ordered-dash">
          <li class="list_item">컴포넌트 구현</li>
          <li class="list_item">문서화
            <ol class="list list_ordered list_ordered-dash">
              <li class="list_item">API 표</li>
              <li class="list_item">데모 예제</li>
            </ol>
          </li>
        </ol>
      </li>
      <li class="list_item">QA 및 릴리스</li>
    </ol>

    <ol class="list list_ordered list_ordered-depth">
      <li class="list_item">레이아웃</li>
      <li class="list_item">기본 요소
        <ol class="list list_ordered list_ordered-depth">
          <li class="list_item">Button</li>
          <li class="list_item">Form
            <ol class="list list_ordered list_ordered-depth">
              <li class="list_item">Input</li>
              <li class="list_item">Select</li>
            </ol>
          </li>
        </ol>
      </li>
      <li class="list_item">피드백</li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="bullet-link-heading">
  <div class="demo_section-header">
    <h2 id="bullet-link-heading">불릿 · 링크</h2>
    <p>불릿 목록에서도 li 안에 a.list_link를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list list_bullet">
      <li class="list_item">
        <a href="components/button.html" class="list_link">
          <span class="list_title">Button</span>
        </a>
      </li>
      <li class="list_item">
        <a href="components/typography.html" class="list_link">
          <span class="list_title">Typography</span>
        </a>
      </li>
      <li class="list_item">
        <a href="components/icon.html" class="list_link">
          <span class="list_title">Icon</span>
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="bordered-heading">
  <div class="demo_section-header">
    <h2 id="bordered-heading">테두리</h2>
    <p>bordered prop으로 각 항목에 테두리를 적용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list list_bordered">
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">알림 설정</span>
          <span class="list_desc">이메일 및 푸시 알림을 관리합니다.</span>
        </div>
      </li>
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">프로필 편집</span>
          <span class="list_desc">이름, 사진, 소개를 변경합니다.</span>
        </div>
      </li>
      <li class="list_item">
        <div class="list_content">
          <span class="list_title">보안</span>
          <span class="list_desc">비밀번호 및 2단계 인증을 설정합니다.</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="link-heading">
  <div class="demo_section-header">
    <h2 id="link-heading">링크</h2>
    <p>페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list list_divider">
      <li class="list_item">
        <a href="components/button.html" class="list_link">
          <div class="list_content">
            <span class="list_title">대시보드</span>
          </div>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </a>
      </li>
      <li class="list_item">
        <a href="components/card.html" class="list_link">
          <div class="list_content">
            <span class="list_title">프로젝트</span>
          </div>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </a>
      </li>
      <li class="list_item">
        <a href="getting-started.html" class="list_link">
          <div class="list_content">
            <span class="list_title">설정</span>
          </div>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="button-heading">
  <div class="demo_section-header">
    <h2 id="button-heading">버튼</h2>
    <p>같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list list_bordered">
      <li class="list_item">
        <button type="button" class="list_link">
          <span class="avatar color_primary" aria-hidden="true">홍</span>
          <span class="list_content">
            <span class="list_title">홍길동</span>
            <span class="list_meta">메시지 보내기</span>
          </span>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </button>
      </li>
      <li class="list_item">
        <button type="button" class="list_link">
          <span class="avatar color_success" aria-hidden="true">김</span>
          <span class="list_content">
            <span class="list_title">김철수</span>
            <span class="list_meta">메시지 보내기</span>
          </span>
          <span class="list_action color_muted" aria-hidden="true">›</span>
        </button>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="card-heading">
  <div class="demo_section-header">
    <h2 id="card-heading">카드 혼합</h2>
    <p>list_cards 클래스로 li 안에 card를 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="list list_cards">
      <li class="list_item">
        <a href="components/card.html" class="card card_shadow card_clickable card_horizontal">
          <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
          <div class="card_inner">
            <div class="card_header">
              <div class="card_header-main">
                <h3 class="card_title">프로젝트 Alpha</h3>
                <p class="card_subtitle">진행 중 · 2일 전</p>
              </div>
            </div>
            <div class="card_body">
              디자인 시스템 구축 및 컴포넌트 라이브러리 개발
            </div>
          </div>
        </a>
      </li>
      <li class="list_item">
        <article class="card card_shadow">
          <div class="card_header">
            <div class="card_header-main">
              <div class="card_header-row">
                <span class="avatar color_warning" aria-hidden="true">이</span>
                <div>
                  <h3 class="card_title">이영희</h3>
                  <p class="card_subtitle">UI/UX 디자이너</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card_body">
            <p class="list_desc">새 디자인 시안을 공유했습니다.</p>
          </div>
          <div class="card_footer card_footer-between">
            <span class="color_muted size_sm">10분 전</span>
            <a href="#" class="link color_primary size_sm">보기</a>
          </div>
        </article>
      </li>
      <li class="list_item">
        <a href="components/list.html" class="card card_accent color_primary card_clickable">
          <div class="card_body">
            <p class="card_title" style="margin-bottom: 0.25rem;">알림</p>
            <p class="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="definition-heading">
  <div class="demo_section-header">
    <h2 id="definition-heading">정의 목록</h2>
    <p>variant="definition"으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <dl class="list list_definition" style="max-width: 28rem; width: 100%;">
      <dt class="list_title">OOCSS</dt>
      <dd class="list_desc">구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.</dd>
      <dt class="list_title">Design Token</dt>
      <dd class="list_desc">색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.</dd>
      <dt class="list_title">WCAG</dt>
      <dd class="list_desc">웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.</dd>
    </dl>
  </div>
</section>

<section class="section demo_section" aria-labelledby="definition-inline-heading">
  <div class="demo_section-header">
    <h2 id="definition-inline-heading">정의 목록 · 인라인</h2>
    <p>layout="inline"으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <dl class="list list_definition list_inline" style="--list-inline-label-width: auto; --list-inline-gap: var(--space-md);">
      <dt class="list_title">OOCSS</dt>
      <dd class="list_desc">구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.</dd>
      <dt class="list_title">Design Token</dt>
      <dd class="list_desc">색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.</dd>
      <dt class="list_title">WCAG</dt>
      <dd class="list_desc">웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.</dd>
    </dl>
  </div>
</section>

<section class="section demo_section" aria-labelledby="definition-desc-align-heading">
  <div class="demo_section-header">
    <h2 id="definition-desc-align-heading">정의 목록 · 값 우측 정렬</h2>
    <p>descAlign="right"로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <dl class="list list_definition list_inline list_block list_compact list_desc-right" style="--list-inline-label-width: auto; --list-inline-gap: 1rem;">
      <dt class="list_title">주문번호</dt>
      <dd class="list_desc">ORD-2024-0815</dd>
      <dt class="list_title">결제금액</dt>
      <dd class="list_desc">₩42,000</dd>
      <dt class="list_title">배송지</dt>
      <dd class="list_desc">서울특별시 강남구 테헤란로 123</dd>
    </dl>
  </div>
</section>

<section class="section" aria-labelledby="api-heading">
  <h2 id="api-heading">클래스 · 속성</h2>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_bordered table_compact">
        <thead>
          <tr>
            <th scope="col">클래스</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="typo_code">list</code></td>
            <td>리스트 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_bordered</code> · <code class="typo_code">list_divider</code> · <code class="typo_code">list_compact</code></td>
            <td>스타일 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_bullet</code> · <code class="typo_code">list_bullet-circle</code> · <code class="typo_code">list_bullet-square</code></td>
            <td>불릿 목록 (ul)</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_ordered</code> · <code class="typo_code">list_ordered-alpha</code> · <code class="typo_code">list_ordered-roman</code> · <code class="typo_code">list_ordered-upper-alpha</code> · <code class="typo_code">list_ordered-upper-roman</code></td>
            <td>번호 목록 (ol)</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_ordered-outline</code> · <code class="typo_code">list_ordered-dash</code></td>
            <td>계층 번호 — 뎁스별 1.1 · 1-1 형식</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_ordered-depth</code></td>
            <td>뎁스별 번호 형식 자동 전환 (1 → a → i → 1 …)</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_definition</code></td>
            <td>정의 목록 (dl) — dt · dd 용어-설명 쌍</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_inline</code> · <code class="typo_code">list_block</code> · <code class="typo_code">list_desc-right</code></td>
            <td>인라인 배치 · 전체 너비 · dd 우측 정렬</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_item</code> · <code class="typo_code">list_content</code> · <code class="typo_code">list_title</code> · <code class="typo_code">list_desc</code> · <code class="typo_code">list_meta</code></td>
            <td>항목 콘텐츠 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_extra</code> · <code class="typo_code">list_action</code></td>
            <td>우측 영역</td>
          </tr>
          <tr>
            <td><code class="typo_code">list_interactive</code> · <code class="typo_code">list_link</code></td>
            <td>클릭 가능 항목 · 링크·버튼</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="tokens-heading">
  <h2 id="tokens-heading">디자인 토큰</h2>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_bordered table_compact">
        <thead>
          <tr>
            <th scope="col">토큰</th>
            <th scope="col">기본값</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="typo_code">--list-gap</code></td>
            <td>var(--space-xs)</td>
            <td>항목 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--list-item-padding-y</code> · <code class="typo_code">--list-item-padding-x</code></td>
            <td>0.65rem · 1rem</td>
            <td>항목 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--list-title-size</code> · <code class="typo_code">--list-desc-size</code> · <code class="typo_code">--list-meta-size</code></td>
            <td>—</td>
            <td>텍스트 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--list-inline-label-width</code> · <code class="typo_code">--list-inline-gap</code></td>
            <td>8rem · var(--space-md)</td>
            <td>인라인 정의 목록 열 너비 · 열 간격</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,s=gs(ys),bs=Cs(ys),ws={title:"Components/데이터 표시/List",id:"components-list",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"항목을 세로 목록으로 표시하는 리스트 컴포넌트입니다. 불릿·번호 유형과 인터랙티브 항목을 지원합니다."}}}},i={name:"기본",render:()=>e(s[0]),parameters:{docs:{...n(s[0].previewHtml).docs,description:{story:s[0].description}}}},t={name:"불릿",render:()=>e(s[1]),parameters:{docs:{...n(s[1].previewHtml).docs,description:{story:s[1].description}}}},l={name:"불릿 · 본문",render:()=>e(s[2]),parameters:{docs:{...n(s[2].previewHtml).docs,description:{story:s[2].description}}}},d={name:"불릿 변형",render:()=>e(s[3]),parameters:{docs:{...n(s[3].previewHtml).docs,description:{story:s[3].description}}}},a={name:"번호",render:()=>e(s[4]),parameters:{docs:{...n(s[4].previewHtml).docs,description:{story:s[4].description}}}},o={name:"번호 변형",render:()=>e(s[5]),parameters:{docs:{...n(s[5].previewHtml).docs,description:{story:s[5].description}}}},c={name:"번호 · 계층",render:()=>e(s[6]),parameters:{docs:{...n(s[6].previewHtml).docs,description:{story:s[6].description}}}},r={name:"불릿 · 링크",render:()=>e(s[7]),parameters:{docs:{...n(s[7].previewHtml).docs,description:{story:s[7].description}}}},p={name:"테두리",render:()=>e(s[8]),parameters:{docs:{...n(s[8].previewHtml).docs,description:{story:s[8].description}}}},m={name:"링크",render:()=>e(s[9]),parameters:{docs:{...n(s[9].previewHtml).docs,description:{story:s[9].description}}}},_={name:"버튼",render:()=>e(s[10]),parameters:{docs:{...n(s[10].previewHtml).docs,description:{story:s[10].description}}}},u={name:"카드 혼합",render:()=>e(s[11]),parameters:{docs:{...n(s[11].previewHtml).docs,description:{story:s[11].description}}}},v={name:"정의 목록",render:()=>e(s[12]),parameters:{docs:{...n(s[12].previewHtml).docs,description:{story:s[12].description}}}},h={name:"정의 목록 · 인라인",render:()=>e(s[13]),parameters:{docs:{...n(s[13].previewHtml).docs,description:{story:s[13].description}}}},y={name:"정의 목록 · 값 우측 정렬",render:()=>e(s[14]),parameters:{docs:{...n(s[14].previewHtml).docs,description:{story:s[14].description}}}},b={name:"클래스 · 속성",tags:["!dev"],render:()=>e(bs[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},g={name:"디자인 토큰",tags:["!dev"],render:()=>e(bs[1]),parameters:{docs:{source:{code:null},description:{story:"List 간격·패딩·텍스트 크기에 사용하는 CSS 변수입니다."}}}};var C,D,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '기본',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,S,A;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '불릿',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(A=(S=t.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var H,k,f;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '불릿 · 본문',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(f=(k=l.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var x,L,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '불릿 변형',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var I,T,E;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '번호',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(E=(T=a.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var F,z,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '번호 변형',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(M=(z=o.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var U,q,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '번호 · 계층',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var W,R,X;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '불릿 · 링크',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(X=(R=r.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var N,P,Q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '테두리',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var j,J,K;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '링크',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var V,Y,Z;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '버튼',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ss,es;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '카드 혼합',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(es=(ss=u.parameters)==null?void 0:ss.docs)==null?void 0:es.source}}};var ns,is,ts;v.parameters={...v.parameters,docs:{...(ns=v.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  name: '정의 목록',
  render: () => renderDemo(demos[12]),
  parameters: {
    docs: {
      ...gulpSource(demos[12].previewHtml).docs,
      description: {
        story: demos[12].description
      }
    }
  }
}`,...(ts=(is=v.parameters)==null?void 0:is.docs)==null?void 0:ts.source}}};var ls,ds,as;h.parameters={...h.parameters,docs:{...(ls=h.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  name: '정의 목록 · 인라인',
  render: () => renderDemo(demos[13]),
  parameters: {
    docs: {
      ...gulpSource(demos[13].previewHtml).docs,
      description: {
        story: demos[13].description
      }
    }
  }
}`,...(as=(ds=h.parameters)==null?void 0:ds.docs)==null?void 0:as.source}}};var os,cs,rs;y.parameters={...y.parameters,docs:{...(os=y.parameters)==null?void 0:os.docs,source:{originalSource:`{
  name: '정의 목록 · 값 우측 정렬',
  render: () => renderDemo(demos[14]),
  parameters: {
    docs: {
      ...gulpSource(demos[14].previewHtml).docs,
      description: {
        story: demos[14].description
      }
    }
  }
}`,...(rs=(cs=y.parameters)==null?void 0:cs.docs)==null?void 0:rs.source}}};var ps,ms,_s;b.parameters={...b.parameters,docs:{...(ps=b.parameters)==null?void 0:ps.docs,source:{originalSource:`{
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다.'
      }
    }
  }
}`,...(_s=(ms=b.parameters)==null?void 0:ms.docs)==null?void 0:_s.source}}};var us,vs,hs;g.parameters={...g.parameters,docs:{...(us=g.parameters)==null?void 0:us.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'List 간격·패딩·텍스트 크기에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(hs=(vs=g.parameters)==null?void 0:vs.docs)==null?void 0:hs.source}}};const Bs=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","Demo12","Demo13","Demo14","ApiClasses","ApiTokens"];export{b as ApiClasses,g as ApiTokens,i as Demo0,t as Demo1,_ as Demo10,u as Demo11,v as Demo12,h as Demo13,y as Demo14,l as Demo2,d as Demo3,a as Demo4,o as Demo5,c as Demo6,r as Demo7,p as Demo8,m as Demo9,Bs as __namedExportsOrder,ws as default};

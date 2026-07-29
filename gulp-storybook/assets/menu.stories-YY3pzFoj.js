import{b as n,c as ae,g as s,e as le}from"./gulp-demos-C1efgjoy.js";const se=`<!-- @meta
title: Menu | HTML Components
activeNav: menu
pageTitle: Menu
-->
<div class="page_intro">
  <h1>Menu</h1>
  <p class="lead">앱 내비게이션·사이드바에 사용하는 메뉴 컴포넌트입니다. 수직·수평 배치, 아이콘, 서브메뉴, 구분선·그룹을 지원합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">menu_vertical</code> · <code class="typo_code">menu_bordered</code>로 세로 메뉴를 구성합니다. <code class="typo_code">is-active</code>와 <code class="typo_code">aria-current="page"</code>로 선택 항목을 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_vertical menu_bordered" aria-label="주요 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page"><span class="menu_label">대시보드</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">분석</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">사용자</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">설정</span></a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="horizontal-heading">
  <div class="demo_section-header">
    <h2 id="horizontal-heading">수평</h2>
    <p><code class="typo_code">menu_horizontal</code>로 상단 탭·툴바 형태의 메뉴를 만듭니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_horizontal menu_bordered" aria-label="섹션 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page"><span class="menu_label">개요</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">컴포넌트</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">토큰</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">접근성</span></a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘</h2>
    <p><code class="typo_code">menu_icon</code>으로 항목 앞에 아이콘을 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_vertical menu_bordered" aria-label="앱 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span class="menu_label">대시보드</span>
          </a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span class="menu_label">사용자</span>
          </a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
            <span class="menu_label">문서</span>
          </a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <span class="menu_label">설정</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="submenu-heading">
  <div class="demo_section-header">
    <h2 id="submenu-heading">서브메뉴</h2>
    <p><code class="typo_code">menu_item-submenu</code> · <code class="typo_code">menu_submenu</code>로 중첩 메뉴를 구성합니다. 버튼.<code class="typo_code">menu_link</code>의 <code class="typo_code">aria-expanded</code>로 펼침·접힘을 제어합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_vertical menu_bordered" aria-label="컴포넌트 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
            <span class="menu_label">홈</span>
          </a>
        </li>
        <li class="menu_item menu_item-submenu" aria-expanded="true">
          <button type="button" class="menu_link" aria-expanded="true" aria-controls="menu-sub-components">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span class="menu_label">컴포넌트</span>
            <svg class="menu_arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <ul class="menu_submenu" id="menu-sub-components">
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">Button</span></a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">Input</span></a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">Card</span></a>
            </li>
          </ul>
        </li>
        <li class="menu_item menu_item-submenu" aria-expanded="false">
          <button type="button" class="menu_link" aria-expanded="false" aria-controls="menu-sub-patterns">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
            </svg>
            <span class="menu_label">패턴</span>
            <svg class="menu_arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <ul class="menu_submenu" id="menu-sub-patterns">
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">폼 레이아웃</span></a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">데이터 테이블</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">구분선 · 그룹</h2>
    <p><code class="typo_code">menu_divider</code>로 항목을 구분하고, <code class="typo_code">menu_group-title</code>로 섹션 제목을 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_vertical menu_bordered" aria-label="설정 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_group" role="presentation">
          <span class="menu_group-title">계정</span>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page"><span class="menu_label">프로필</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">보안</span></a>
        </li>
        <li class="menu_divider" role="separator"></li>
        <li class="menu_group" role="presentation">
          <span class="menu_group-title">앱</span>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">알림</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">언어</span></a>
        </li>
        <li class="menu_divider" role="separator"></li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">로그아웃</span></a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p><code class="typo_code">menu_item.is-disabled</code> 또는 <code class="typo_code">menu_link.is-disabled</code>로 선택·클릭을 막습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_vertical menu_bordered" aria-label="권한 메뉴">
      <ul class="menu_list">
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page"><span class="menu_label">조회</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">편집</span></a>
        </li>
        <li class="menu_item is-disabled">
          <span class="menu_link is-disabled" aria-disabled="true"><span class="menu_label">삭제</span></span>
        </li>
        <li class="menu_item is-disabled">
          <span class="menu_link is-disabled" aria-disabled="true"><span class="menu_label">관리자 설정</span></span>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="badge-heading">
  <div class="demo_section-header">
    <h2 id="badge-heading">배지</h2>
    <p><code class="typo_code">menu_extra</code>에 badge 컴포넌트를 배치해 알림 수·상태를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_vertical menu_bordered" aria-label="알림 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span class="menu_label">받은편지함</span>
            <span class="badge badge_count color_primary menu_extra">12</span>
          </a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
            </svg>
            <span class="menu_label">알림</span>
            <span class="badge_dot-only color_danger menu_extra" role="status" aria-label="새 알림"></span>
          </a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="menu_label">메시지</span>
            <span class="badge color_default menu_extra">Beta</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="horizontal-submenu-heading">
  <div class="demo_section-header">
    <h2 id="horizontal-submenu-heading">수평 · 서브메뉴</h2>
    <p><code class="typo_code">menu_horizontal</code>에서 서브메뉴는 드롭다운 형태로 표시됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <nav class="menu menu_horizontal menu_bordered" aria-label="상단 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item">
          <a href="#" class="menu_link is-active" aria-current="page"><span class="menu_label">홈</span></a>
        </li>
        <li class="menu_item menu_item-submenu" aria-expanded="false">
          <button type="button" class="menu_link" aria-expanded="false" aria-controls="menu-sub-h-components">
            <span class="menu_label">컴포넌트</span>
            <svg class="menu_arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <ul class="menu_submenu" id="menu-sub-h-components">
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">Button</span></a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">Input</span></a>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link"><span class="menu_label">Select</span></a>
            </li>
          </ul>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">토큰</span></a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link"><span class="menu_label">접근성</span></a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<section class="section demo_section" aria-labelledby="layout-heading">
  <div class="demo_section-header">
    <h2 id="layout-heading">사이드바 레이아웃</h2>
    <p>수직 메뉴를 사이드바로 배치하고 콘텐츠 영역과 함께 사용하는 예시입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="menu_demo-row">
      <div class="menu_demo-sidebar">
        <nav class="menu menu_vertical menu_bordered menu_compact" aria-label="앱 사이드바" data-menu-selectable>
          <ul class="menu_list">
            <li class="menu_item">
              <a href="#" class="menu_link is-active" aria-current="page">
                <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span class="menu_label">개요</span>
              </a>
            </li>
            <li class="menu_item menu_item-submenu" aria-expanded="true">
              <button type="button" class="menu_link" aria-expanded="true" aria-controls="menu-sub-sidebar">
                <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                </svg>
                <span class="menu_label">문서</span>
                <svg class="menu_arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <ul class="menu_submenu" id="menu-sub-sidebar">
                <li class="menu_item">
                  <a href="#" class="menu_link"><span class="menu_label">시작하기</span></a>
                </li>
                <li class="menu_item">
                  <a href="#" class="menu_link"><span class="menu_label">컴포넌트</span></a>
                </li>
              </ul>
            </li>
            <li class="menu_item">
              <a href="#" class="menu_link">
                <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
                <span class="menu_label">설정</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="menu_demo-content">
        <p style="margin: 0;">선택한 메뉴에 해당하는 콘텐츠 영역입니다. 사이드바 메뉴와 함께 레이아웃을 구성할 때 사용합니다.</p>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="variant-heading">
  <div class="demo_section-header">
    <h2 id="variant-heading">변형</h2>
    <p><code class="typo_code">menu_compact</code> · <code class="typo_code">menu_dark</code>로 밀도와 배경을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="menu menu_vertical menu_bordered menu_compact" aria-label="컴팩트 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item"><a href="#" class="menu_link is-active" aria-current="page"><span class="menu_label">항목 A</span></a></li>
        <li class="menu_item"><a href="#" class="menu_link"><span class="menu_label">항목 B</span></a></li>
        <li class="menu_item"><a href="#" class="menu_link"><span class="menu_label">항목 C</span></a></li>
      </ul>
    </nav>

    <nav class="menu menu_vertical menu_bordered menu_dark" aria-label="다크 서피스 메뉴" data-menu-selectable>
      <ul class="menu_list">
        <li class="menu_item"><a href="#" class="menu_link is-active" aria-current="page"><span class="menu_label">항목 A</span></a></li>
        <li class="menu_item"><a href="#" class="menu_link"><span class="menu_label">항목 B</span></a></li>
        <li class="menu_item"><a href="#" class="menu_link"><span class="menu_label">항목 C</span></a></li>
      </ul>
    </nav>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>선택 항목에는 <code class="typo_code">is-active</code>와 <code class="typo_code">aria-current="page"</code>를 함께 쓰고, 서브메뉴 토글에는 <code class="typo_code">aria-expanded</code> · <code class="typo_code">aria-controls</code>를 지정합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;nav class="menu menu_vertical menu_bordered" aria-label="주요 메뉴" data-menu-selectable&gt;
  &lt;ul class="menu_list"&gt;
    &lt;li class="menu_item"&gt;
      &lt;a href="#" class="menu_link is-active" aria-current="page"&gt;
        &lt;span class="menu_label"&gt;대시보드&lt;/span&gt;
      &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="menu_item menu_item-submenu" aria-expanded="false"&gt;
      &lt;button type="button" class="menu_link"
        aria-expanded="false" aria-controls="sub-1"&gt;
        &lt;span class="menu_label"&gt;컴포넌트&lt;/span&gt;
        &lt;svg class="menu_arrow" …&gt;&lt;/svg&gt;
      &lt;/button&gt;
      &lt;ul class="menu_submenu" id="sub-1"&gt;…&lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
  </div>
</section>

<section class="section" aria-labelledby="api-heading">
  <h2 id="api-heading">클래스 · 속성</h2>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_bordered table_compact">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code class="typo_code">menu · menu_list · menu_item · menu_link</code></td><td>루트·목록·항목·링크</td></tr>
          <tr><td><code class="typo_code">menu_vertical · menu_horizontal · menu_inline</code></td><td>배치 모드</td></tr>
          <tr><td><code class="typo_code">menu_icon · menu_label · menu_extra · menu_arrow</code></td><td>항목 파트</td></tr>
          <tr><td><code class="typo_code">menu_item-submenu · menu_submenu</code></td><td>서브메뉴</td></tr>
          <tr><td><code class="typo_code">menu_group · menu_group-title · menu_divider</code></td><td>그룹·구분선</td></tr>
          <tr><td><code class="typo_code">menu_bordered · menu_compact · menu_dark</code></td><td>스타일 변형</td></tr>
          <tr><td><code class="typo_code">is-active · is-disabled</code></td><td>상태</td></tr>
          <tr><td><code class="typo_code">data-menu-selectable</code></td><td>선택 가능 메뉴 JS</td></tr>
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
          <tr><td><code class="typo_code">--menu-item-height</code> · <code class="typo_code">--menu-item-padding-x</code></td><td>—</td><td>항목 크기·패딩</td></tr>
          <tr><td><code class="typo_code">--menu-gap</code> · <code class="typo_code">--menu-radius</code></td><td>—</td><td>간격·모서리</td></tr>
          <tr><td><code class="typo_code">--menu-sub-indent</code></td><td>—</td><td>서브메뉴 들여쓰기</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=le(se),h=ae(se),te={title:"Components/네비게이션/Menu",id:"components-menu",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"앱 내비게이션·사이드바에 사용하는 메뉴 컴포넌트입니다. 수직·수평 배치, 아이콘, 서브메뉴, 구분선·그룹을 지원합니다."}}}},a={name:"기본",render:()=>n(e[0]),parameters:{docs:{...s(e[0].previewHtml).docs,description:{story:e[0].description}}}},l={name:"수평",render:()=>n(e[1]),parameters:{docs:{...s(e[1].previewHtml).docs,description:{story:e[1].description}}}},i={name:"아이콘",render:()=>n(e[2]),parameters:{docs:{...s(e[2].previewHtml).docs,description:{story:e[2].description}}}},t={name:"서브메뉴",render:()=>n(e[3]),parameters:{docs:{...s(e[3].previewHtml).docs,description:{story:e[3].description}}}},r={name:"구분선 · 그룹",render:()=>n(e[4]),parameters:{docs:{...s(e[4].previewHtml).docs,description:{story:e[4].description}}}},o={name:"비활성",render:()=>n(e[5]),parameters:{docs:{...s(e[5].previewHtml).docs,description:{story:e[5].description}}}},c={name:"배지",render:()=>n(e[6]),parameters:{docs:{...s(e[6].previewHtml).docs,description:{story:e[6].description}}}},d={name:"수평 · 서브메뉴",render:()=>n(e[7]),parameters:{docs:{...s(e[7].previewHtml).docs,description:{story:e[7].description}}}},u={name:"사이드바 레이아웃",render:()=>n(e[8]),parameters:{docs:{...s(e[8].previewHtml).docs,description:{story:e[8].description}}}},m={name:"변형",render:()=>n(e[9]),parameters:{docs:{...s(e[9].previewHtml).docs,description:{story:e[9].description}}}},p={name:"마크업",tags:["!dev"],render:()=>n(h[0]),parameters:{docs:{source:{code:null},description:{story:h[0].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>n(h[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},v={name:"디자인 토큰",tags:["!dev"],render:()=>n(h[2]),parameters:{docs:{source:{code:null},description:{story:"Menu 간격·인덴트·타이포에 사용하는 CSS 변수입니다."}}}};var b,g,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,w,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '수평',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var f,x,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var D,A,H;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '서브메뉴',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(H=(A=t.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var S,M,z;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '구분선 · 그룹',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(z=(M=r.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var E,V,T;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '비활성',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(T=(V=o.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var O,F,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '배지',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var I,J,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '수평 · 서브메뉴',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(N=(J=d.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var j,q,G;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '사이드바 레이아웃',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,P,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '변형',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var R,U,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '마크업',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: apis[0].description
      }
    }
  }
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
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
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Menu 간격·인덴트·타이포에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const re=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","ApiMarkup","ApiClasses","ApiTokens"];export{_ as ApiClasses,p as ApiMarkup,v as ApiTokens,a as Demo0,l as Demo1,i as Demo2,t as Demo3,r as Demo4,o as Demo5,c as Demo6,d as Demo7,u as Demo8,m as Demo9,re as __namedExportsOrder,te as default};

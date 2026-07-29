import{b as e,c as $,g as s,e as nn}from"./gulp-demos-C1efgjoy.js";const Z=`<!-- @meta
title: Dropdown | HTML Components
activeNav: dropdown
pageTitle: Dropdown
-->
<div class="page_intro">
  <h1>Dropdown</h1>
  <p class="lead">버튼·링크 등 트리거를 클릭하면 메뉴 패널이 표시되는 Dropdown 컴포넌트입니다. Menu 컴포넌트와 조합해 액션 목록·사용자 메뉴·필터 등에 사용합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">dropdown</code> · <code class="typo_code">dropdown_trigger</code> · <code class="typo_code">dropdown_menu</code>으로 트리거와 패널을 구성합니다. 패널 안에는 <code class="typo_code">menu_vertical</code> · <code class="typo_code">menu_compact</code>를 배치합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="dropdown" data-dropdown>
      <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-basic-menu">
        <span class="btn_label">작업</span>
      </button>
      <div class="dropdown_menu" id="dd-basic-menu" role="menu" aria-label="작업 메뉴">
        <nav class="menu menu_vertical menu_compact" aria-label="작업 메뉴">
          <ul class="menu_list" role="none">
            <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">복사</span></button></li>
            <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">이동</span></button></li>
            <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">공유</span></button></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="open-heading">
  <div class="demo_section-header">
    <h2 id="open-heading">열린 상태</h2>
    <p><code class="typo_code">is-open</code> 클래스와 <code class="typo_code">aria-expanded="true"</code>로 패널이 열린 상태를 표현합니다. 이 섹션만 정적 펼침(<code class="typo_code">data-dropdown-static</code>)을 쓰고, 아래 예시는 클릭으로 엽니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="dropdown_demo-stage">
    <div class="dropdown is-open" data-dropdown-static>
      <button type="button" class="btn btn_filled color_primary dropdown_trigger" aria-haspopup="menu" aria-expanded="true" aria-controls="dd-open-menu">
        <span class="btn_label">카테고리</span>
      </button>
      <div class="dropdown_menu" id="dd-open-menu" role="menu" aria-label="카테고리">
        <nav class="menu menu_vertical menu_compact" aria-label="카테고리">
          <ul class="menu_list" role="none">
            <li class="menu_item" role="none"><a href="#" class="menu_link is-active" role="menuitem" aria-current="true"><span class="menu_label">전체</span></a></li>
            <li class="menu_item" role="none"><a href="#" class="menu_link" role="menuitem"><span class="menu_label">디자인</span></a></li>
            <li class="menu_item" role="none"><a href="#" class="menu_link" role="menuitem"><span class="menu_label">개발</span></a></li>
            <li class="menu_item" role="none"><a href="#" class="menu_link" role="menuitem"><span class="menu_label">마케팅</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="trigger-heading">
  <div class="demo_section-header">
    <h2 id="trigger-heading">트리거 유형</h2>
    <p>Button 컴포넌트 스킨을 트리거로 사용합니다. filled · outline · ghost · text · icon-only 조합이 가능합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="dropdown_row">
      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_filled color_primary dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-trigger-filled">
          <span class="btn_label">Filled</span>
        </button>
        <div class="dropdown_menu" id="dd-trigger-filled" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 1</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 2</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-trigger-outline">
          <span class="btn_label">Outline</span>
        </button>
        <div class="dropdown_menu" id="dd-trigger-outline" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 1</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 2</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_ghost dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-trigger-ghost">
          <span class="btn_label">Ghost</span>
        </button>
        <div class="dropdown_menu" id="dd-trigger-ghost" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 1</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 2</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_text color_primary dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-trigger-text">
          <span class="btn_label">Text</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-trigger-text" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 1</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 2</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_ghost btn_icon-only dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-trigger-icon" aria-label="더보기">
          <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-trigger-icon" role="menu" aria-label="더보기">
          <nav class="menu menu_vertical menu_compact" aria-label="더보기">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">편집</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">복제</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link color_danger" role="menuitem"><span class="menu_label">삭제</span></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="select-trigger-heading">
  <div class="demo_section-header">
    <h2 id="select-trigger-heading">셀렉트 트리거</h2>
    <p><code class="typo_code">btn_select</code> · <code class="typo_code">btn_select-text</code>를 트리거로 사용합니다. Select 컴포넌트의 커스텀 트리거와 동일한 스타일입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="dropdown_row">
      <div class="dropdown dropdown_fit" data-dropdown>
        <button type="button" class="btn btn_select dropdown_trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="dd-select-box">
          <span class="btn_label">서울특별시</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-select-box" role="listbox" aria-label="지역 선택">
          <nav class="menu menu_vertical menu_compact" aria-label="지역 선택">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link is-active" role="option" aria-selected="true"><span class="menu_label">서울특별시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">부산광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">대구광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">인천광역시</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_select btn_select-text dropdown_trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="dd-select-text">
          <span class="btn_label">최신순</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-select-text" role="listbox" aria-label="정렬">
          <nav class="menu menu_vertical menu_compact" aria-label="정렬">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link is-active" role="option" aria-selected="true"><span class="menu_label">최신순</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">인기순</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">가격 낮은순</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">가격 높은순</span></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <p class="form_field-hint"><code class="typo_code">btn_select</code> 상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="placement-heading">
  <div class="demo_section-header">
    <h2 id="placement-heading">정렬</h2>
    <p><code class="typo_code">dropdown_placement-end</code> · <code class="typo_code">dropdown_placement-top</code>으로 패널 위치를 조정합니다. 기본은 트리거 왼쪽 아래입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="dropdown_row" style="width: 100%; justify-content: space-between;">
      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-place-start">
          <span class="btn_label">왼쪽 정렬</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-place-start" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 A</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 B</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown dropdown_placement-end" data-dropdown>
        <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-place-end">
          <span class="btn_label">오른쪽 정렬</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-place-end" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 A</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 B</span></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: center; padding-top: 6rem;">
      <div class="dropdown dropdown_placement-top" data-dropdown>
        <button type="button" class="btn btn_ghost dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-place-top">
          <span class="btn_label">위로 열기</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-place-top" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">위쪽 패널</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목 2</span></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="menu-heading">
  <div class="demo_section-header">
    <h2 id="menu-heading">메뉴 구성</h2>
    <p>Menu 컴포넌트의 아이콘 · 구분선 · 그룹 · 배지를 <code class="typo_code">dropdown_menu</code> 안에서 그대로 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="dropdown" data-dropdown>
      <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-menu-rich">
        <span class="btn_label">계정</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div class="dropdown_menu" id="dd-menu-rich" role="menu" aria-label="계정 메뉴">
        <nav class="menu menu_vertical menu_compact" aria-label="계정 메뉴">
          <ul class="menu_list" role="none">
            <li class="menu_group" role="presentation">
              <span class="menu_group-title">계정</span>
            </li>
            <li class="menu_item" role="none">
              <a href="#" class="menu_link" role="menuitem">
<svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
                <span class="menu_label">프로필</span>
              </a>
            </li>
            <li class="menu_item" role="none">
              <a href="#" class="menu_link" role="menuitem">
<svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
                <span class="menu_label">보안</span>
              </a>
            </li>
            <li class="menu_divider" role="separator"></li>
            <li class="menu_group" role="presentation">
              <span class="menu_group-title">앱</span>
            </li>
            <li class="menu_item" role="none">
              <a href="#" class="menu_link" role="menuitem">
<svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
              </svg>
                <span class="menu_label">알림</span>
                <span class="badge badge_count color_primary menu_extra">3</span>
              </a>
            </li>
            <li class="menu_item" role="none">
              <a href="#" class="menu_link" role="menuitem">
<svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
                <span class="menu_label">설정</span>
              </a>
            </li>
            <li class="menu_divider" role="separator"></li>
            <li class="menu_item" role="none">
              <button type="button" class="menu_link color_danger" role="menuitem"><span class="menu_label">로그아웃</span></button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="scroll-heading">
  <div class="demo_section-header">
    <h2 id="scroll-heading">스크롤 · 너비</h2>
    <p><code class="typo_code">dropdown_menu-scrollable</code>과 <code class="typo_code">--dropdown-max-visible-items</code>로 보이는 항목 수를 제한합니다. 초과 시 패널 안에서 스크롤됩니다. 인라인 <code class="typo_code">width</code> · <code class="typo_code">min-width</code>로 가로 너비를 조절할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="dropdown_row">
      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="dd-scroll-city">
          <span class="btn_label">도시 선택</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu dropdown_menu-scrollable" id="dd-scroll-city" role="listbox" aria-label="도시 목록" style="--dropdown-max-visible-items: 4">
          <nav class="menu menu_vertical menu_compact" aria-label="도시 목록">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link is-active" role="option" aria-selected="true"><span class="menu_label">서울특별시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">부산광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">대구광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">인천광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">광주광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">대전광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">울산광역시</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="option" aria-selected="false"><span class="menu_label">세종특별자치시</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-scroll-wide">
          <span class="btn_label">넓은 패널</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu dropdown_menu-scrollable" id="dd-scroll-wide" role="menu" aria-label="긴 라벨 메뉴" style="--dropdown-max-visible-items: 4; width: 18rem">
          <nav class="menu menu_vertical menu_compact" aria-label="긴 라벨 메뉴">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">프로젝트 대시보드</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">팀 협업 워크스페이스</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">문서 보관함 및 템플릿</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">알림 및 활동 기록</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">계정 및 보안 설정</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">결제 및 구독 관리</span></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <p class="form_field-hint">HTML 마크업에서는 <code class="typo_code">dropdown_menu-scrollable</code> 클래스와 <code class="typo_code">style="--dropdown-max-visible-items: 4"</code>로 동일하게 적용합니다.</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p><code class="typo_code">dropdown.is-disabled</code>로 전체를 비활성화하거나, <code class="typo_code">menu_item.is-disabled</code> · <code class="typo_code">menu_link.is-disabled</code>로 개별 항목을 막습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="dropdown_row">
      <div class="dropdown is-disabled">
        <button type="button" class="btn btn_outline dropdown_trigger" disabled aria-haspopup="menu" aria-expanded="false" aria-controls="dd-disabled-all">
          <span class="btn_label">비활성 드롭다운</span>
        </button>
        <div class="dropdown_menu" id="dd-disabled-all" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">항목</span></button></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="dropdown" data-dropdown>
        <button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-disabled-item">
          <span class="btn_label">일부 비활성</span>
        </button>
        <div class="dropdown_menu" id="dd-disabled-item" role="menu">
          <nav class="menu menu_vertical menu_compact">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">조회</span></button></li>
              <li class="menu_item" role="none"><button type="button" class="menu_link" role="menuitem"><span class="menu_label">편집</span></button></li>
              <li class="menu_item is-disabled" role="none"><span class="menu_link is-disabled" role="menuitem" aria-disabled="true"><span class="menu_label">삭제</span></span></li>
              <li class="menu_item is-disabled" role="none"><button type="button" class="menu_link is-disabled" role="menuitem" disabled aria-disabled="true"><span class="menu_label">관리자 설정</span></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="example-heading">
  <div class="demo_section-header">
    <h2 id="example-heading">조합 예시</h2>
    <p>툴바 우측에 사용자 메뉴 Dropdown을 배치한 예시입니다. <code class="typo_code">data-dropdown</code>으로 클릭·Esc·외부 클릭 시 닫힙니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="dropdown_demo-toolbar">
      <button type="button" class="btn btn_ghost btn_sm">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
        </svg>
        <span class="btn_label">알림</span>
        <span class="badge badge_count badge_sm color_danger" aria-label="읽지 않은 알림 2건">2</span>
      </button>

      <div class="dropdown dropdown_placement-end" data-dropdown data-dropdown-close-on-select>
        <button type="button" class="btn btn_ghost btn_sm dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-example-user">
          <span class="avatar avatar_sm color_primary" aria-hidden="true">김</span>
          <span class="btn_label">김가이드</span>
          <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="dropdown_menu" id="dd-example-user" role="menu" aria-label="사용자 메뉴">
          <nav class="menu menu_vertical menu_compact" aria-label="사용자 메뉴">
            <ul class="menu_list" role="none">
              <li class="menu_item" role="none">
                <a href="#" class="menu_link" role="menuitem">
<svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
                  <span class="menu_label">내 프로필</span>
                </a>
              </li>
              <li class="menu_item" role="none">
                <a href="#" class="menu_link" role="menuitem">
<svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                </svg>
                  <span class="menu_label">내 문서</span>
                </a>
              </li>
              <li class="menu_divider" role="separator"></li>
              <li class="menu_item" role="none">
                <button type="button" class="menu_link color_danger" role="menuitem"><span class="menu_label">로그아웃</span></button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p><code class="typo_code">data-dropdown</code>으로 열고 닫기를 연동합니다. 패널 안 Menu는 <code class="typo_code">nav.menu</code> · <code class="typo_code">ul.menu_list</code> 구조를 사용합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;div class="dropdown" data-dropdown&gt;
  &lt;button type="button" class="btn btn_outline dropdown_trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dd-1"&gt;
    &lt;span class="btn_label"&gt;작업&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class="dropdown_menu" id="dd-1" role="menu"&gt;
    &lt;nav class="menu menu_vertical menu_compact"&gt;
      &lt;ul class="menu_list" role="none"&gt;
        &lt;li class="menu_item" role="none"&gt;
          &lt;button type="button" class="menu_link" role="menuitem"&gt;복사&lt;/button&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
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
          <tr><td><code class="typo_code">dropdown · dropdown_menu</code></td><td>루트·메뉴 패널</td></tr>
          <tr><td><code class="typo_code">dropdown_placement-end · dropdown_placement-top · dropdown_fit</code></td><td>배치·너비</td></tr>
          <tr><td><code class="typo_code">dropdown_menu-scrollable</code></td><td>maxVisibleItems 지정 시 — menu_list 스크롤</td></tr>
          <tr><td><code class="typo_code">data-dropdown · data-dropdown-close-on-select</code></td><td>JS 연동</td></tr>
          <tr><td><code class="typo_code">data-dropdown-static</code></td><td>가이드 정적 펼침 — 외부 클릭·Esc로 닫지 않음</td></tr>
          <tr><td><code class="typo_code">is-open · is-disabled</code></td><td>상태</td></tr>
          <tr><td><code class="typo_code">role="menu"</code></td><td>메뉴 시맨틱</td></tr>
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
          <tr><td><code class="typo_code">--dropdown-min-width</code> · <code class="typo_code">--dropdown-menu-width</code></td><td>10rem · auto</td><td>패널 최소·기본 너비</td></tr>
          <tr><td><code class="typo_code">--dropdown-offset</code></td><td>—</td><td>트리거와 패널 간격</td></tr>
          <tr><td><code class="typo_code">--dropdown-max-visible-items</code></td><td>—</td><td>스크롤 높이 계산</td></tr>
          <tr><td><code class="typo_code">--dropdown-item-line-height</code></td><td>1.4</td><td>항목 높이 계산용 줄 높이</td></tr>
          <tr><td><code class="typo_code">--z-dropdown</code></td><td>100</td><td>레이어 순서</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,n=nn(Z),b=$(Z),sn={title:"Components/네비게이션/Dropdown",id:"components-dropdown",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"버튼·링크 등 트리거를 클릭하면 메뉴 패널이 표시되는 Dropdown 컴포넌트입니다. Menu 컴포넌트와 조합해 액션 목록·사용자 메뉴·필터 등에 사용합니다."}}}},o={name:"기본",render:()=>e(n[0]),parameters:{docs:{...s(n[0].previewHtml).docs,description:{story:n[0].description}}}},t={name:"열린 상태",render:()=>e(n[1]),parameters:{docs:{...s(n[1].previewHtml).docs,description:{story:n[1].description}}}},a={name:"트리거 유형",render:()=>e(n[2]),parameters:{docs:{...s(n[2].previewHtml).docs,description:{story:n[2].description}}}},l={name:"셀렉트 트리거",render:()=>e(n[3]),parameters:{docs:{...s(n[3].previewHtml).docs,description:{story:n[3].description}}}},d={name:"정렬",render:()=>e(n[4]),parameters:{docs:{...s(n[4].previewHtml).docs,description:{story:n[4].description}}}},r={name:"메뉴 구성",render:()=>e(n[5]),parameters:{docs:{...s(n[5].previewHtml).docs,description:{story:n[5].description}}}},i={name:"스크롤 · 너비",render:()=>e(n[6]),parameters:{docs:{...s(n[6].previewHtml).docs,description:{story:n[6].description}}}},c={name:"비활성",render:()=>e(n[7]),parameters:{docs:{...s(n[7].previewHtml).docs,description:{story:n[7].description}}}},u={name:"조합 예시",render:()=>e(n[8]),parameters:{docs:{...s(n[8].previewHtml).docs,description:{story:n[8].description}}}},p={name:"마크업",tags:["!dev"],render:()=>e(b[0]),parameters:{docs:{source:{code:null},description:{story:b[0].description}}}},m={name:"클래스 · 속성",tags:["!dev"],render:()=>e(b[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},_={name:"디자인 토큰",tags:["!dev"],render:()=>e(b[2]),parameters:{docs:{source:{code:null},description:{story:"Dropdown 메뉴·간격·스크롤에 사용하는 CSS 변수입니다."}}}};var v,w,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(w=o.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var h,y,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,x,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var D,B,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '셀렉트 트리거',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(A=(B=l.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var S,H,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '정렬',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var E,T,V;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '메뉴 구성',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(V=(T=r.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var O,z,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '스크롤 · 너비',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(L=(z=i.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var F,j,G;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '비활성',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var I,J,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(N=(J=u.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var q,K,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,R,U;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var W,X,Y;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Dropdown 메뉴·간격·스크롤에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const on=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","ApiMarkup","ApiClasses","ApiTokens"];export{m as ApiClasses,p as ApiMarkup,_ as ApiTokens,o as Demo0,t as Demo1,a as Demo2,l as Demo3,d as Demo4,r as Demo5,i as Demo6,c as Demo7,u as Demo8,on as __namedExportsOrder,sn as default};

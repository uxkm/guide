import{b as a,c as ne,g as d,e as se,d as oe}from"./gulp-demos-C1efgjoy.js";const h=`<!-- @meta
title: Drawer | HTML Components
activeNav: drawer
pageTitle: Drawer
-->
<div class="page_intro">
  <h1>Drawer</h1>
  <p class="lead">화면 가장자리에서 슬라이드되어 나타나는 패널 컴포넌트입니다. 상세 보기·폼·모바일 메뉴·필터·설정 등 보조 UI에 사용하며, 기본 위치는 오른쪽(<code class="typo_code">drawer_placement-right</code>)입니다. 방향별 슬라이드·백드롭 페이드 애니메이션과 <code class="typo_code">role="dialog"</code> · <code class="typo_code">aria-modal</code> 접근성을 제공합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">data-drawer-trigger</code>로 패널을 열고, 백드롭·닫기 버튼·<kbd>Esc</kbd>로 닫습니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_filled color_primary" data-drawer-trigger="#drawer-basic" aria-controls="drawer-basic" aria-expanded="false">
      <span class="btn_label">Drawer 열기</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="placement-heading">
  <div class="demo_section-header">
    <h2 id="placement-heading">위치</h2>
    <p><code class="typo_code">drawer_placement-left</code> · <code class="typo_code">-right</code> · <code class="typo_code">-top</code> · <code class="typo_code">-bottom</code>으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="drawer_demo-row">
      <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-place-left" aria-controls="drawer-place-left" aria-expanded="false">
        <span class="btn_label">왼쪽</span>
      </button>
      <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-place-right" aria-controls="drawer-place-right" aria-expanded="false">
        <span class="btn_label">오른쪽</span>
      </button>
      <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-place-top" aria-controls="drawer-place-top" aria-expanded="false">
        <span class="btn_label">위</span>
      </button>
      <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-place-bottom" aria-controls="drawer-place-bottom" aria-expanded="false">
        <span class="btn_label">아래</span>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">drawer_sm</code> · <code class="typo_code">drawer_lg</code>으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="drawer_demo-row">
      <button type="button" class="btn btn_outline btn_sm" data-drawer-trigger="#drawer-size-sm" aria-controls="drawer-size-sm" aria-expanded="false">
        <span class="btn_label">Small</span>
      </button>
      <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-size-default" aria-controls="drawer-size-default" aria-expanded="false">
        <span class="btn_label">Default</span>
      </button>
      <button type="button" class="btn btn_outline btn_lg" data-drawer-trigger="#drawer-size-lg" aria-controls="drawer-size-lg" aria-expanded="false">
        <span class="btn_label">Large</span>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="footer-heading">
  <div class="demo_section-header">
    <h2 id="footer-heading">헤더·푸터</h2>
    <p><code class="typo_code">drawer_header</code> · <code class="typo_code">drawer_body</code> · <code class="typo_code">drawer_footer</code>로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_filled color_primary" data-drawer-trigger="#drawer-footer" aria-controls="drawer-footer" aria-expanded="false">
      <span class="btn_label">항목 편집</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="extra-heading">
  <div class="demo_section-header">
    <h2 id="extra-heading">헤더 추가 영역</h2>
    <p><code class="typo_code">drawer_extra</code>에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-extra" aria-controls="drawer-extra" aria-expanded="false">
      <span class="btn_label">상세 보기</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="menu-heading">
  <div class="demo_section-header">
    <h2 id="menu-heading">메뉴</h2>
    <p>Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_outline btn_icon-only" aria-label="메뉴 열기" data-drawer-trigger="#drawer-menu" aria-controls="drawer-menu" aria-expanded="false">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="open-on-load-heading">
  <div class="demo_section-header">
    <h2 id="open-on-load-heading">로드 시 자동 열기 (옵션)</h2>
    <p><code class="typo_code">data-drawer-open-on-load="true"</code>를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다.</p>
  </div>

  <div class="demo_section-preview">
    <p class="form_field-hint">아래 예시는 옵션 동작 확인용입니다.</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="nested-heading">
  <div class="demo_section-header">
    <h2 id="nested-heading">중첩 Drawer</h2>
    <p>열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. <kbd>Esc</kbd>는 가장 위에 열린 패널부터 닫습니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_ghost" data-drawer-trigger="#drawer-nested-1" aria-controls="drawer-nested-1" aria-expanded="false">
      <span class="btn_label">중첩 예시 열기</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="drag-sheet-heading">
  <div class="demo_section-header">
    <h2 id="drag-sheet-heading">하단 드래그 시트</h2>
    <p><code class="typo_code">drawer_placement-bottom</code> + <code class="typo_code">drawer_draggable</code>로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_filled color_primary" data-drawer-trigger="#drawer-drag" aria-controls="drawer-drag" aria-expanded="false">
      <span class="btn_label">드래그 시트 열기</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="no-backdrop-heading">
  <div class="demo_section-header">
    <h2 id="no-backdrop-heading">백드롭 없음</h2>
    <p><code class="typo_code">data-drawer-backdrop="false"</code>로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_ghost" data-drawer-trigger="#drawer-no-backdrop" aria-controls="drawer-no-backdrop" aria-expanded="false">
      <span class="btn_label">백드롭 없이 열기</span>
    </button>
  </div>
</section>

<!-- 기본 -->
<div class="drawer" id="drawer-basic" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-basic-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-basic-title">기본 Drawer</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다.</p>
      <p>백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 패널을 닫을 수 있습니다.</p>
    </div>
    <div class="drawer_footer">
      <button type="button" class="btn btn_ghost" data-drawer-close><span class="btn_label">취소</span></button>
      <button type="button" class="btn btn_filled color_primary" data-drawer-close><span class="btn_label">확인</span></button>
    </div>
  </div>
</div>

<!-- 위치: 왼쪽 -->
<div class="drawer" id="drawer-place-left" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-left-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-left">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-place-left-title">왼쪽 패널</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>화면 왼쪽에서 슬라이드됩니다.</p>
    </div>
  </div>
</div>

<!-- 위치: 오른쪽 -->
<div class="drawer" id="drawer-place-right" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-right-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-place-right-title">오른쪽 패널</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.</p>
    </div>
  </div>
</div>

<!-- 위치: 위 -->
<div class="drawer" id="drawer-place-top" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-top-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-top">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-place-top-title">상단 패널</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
    </div>
  </div>
</div>

<!-- 위치: 아래 -->
<div class="drawer" id="drawer-place-bottom" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-bottom-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-bottom">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-place-bottom-title">하단 패널</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
    </div>
  </div>
</div>

<!-- 크기 -->
<div class="drawer" id="drawer-size-sm" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-sm-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right drawer_sm">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-size-sm-title">Small</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p><code class="typo_code">drawer_sm</code> — 좁은 보조 패널</p>
    </div>
  </div>
</div>

<div class="drawer" id="drawer-size-default" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-default-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-size-default-title">Default</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>기본 너비 24rem</p>
    </div>
  </div>
</div>

<div class="drawer" id="drawer-size-lg" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-lg-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right drawer_lg">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-size-lg-title">Large</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p><code class="typo_code">drawer_lg</code> — 넓은 상세·폼 패널</p>
    </div>
  </div>
</div>

<!-- 헤더·푸터 -->
<div class="drawer" id="drawer-footer" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-footer-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-footer-title">항목 편집</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <div class="form form_vertical">
        <div class="form_field">
          <label class="form_field-label" for="drawer-item-name">이름</label>
          <input class="input" type="text" id="drawer-item-name" placeholder="항목 이름">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="drawer-item-desc">설명</label>
          <textarea class="textarea" id="drawer-item-desc" rows="4" placeholder="간단한 설명"></textarea>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="drawer-item-status">상태</label>
          <select class="input" id="drawer-item-status">
            <option>활성</option>
            <option>비활성</option>
            <option>보관</option>
          </select>
        </div>
      </div>
    </div>
    <div class="drawer_footer">
      <button type="button" class="btn btn_ghost" data-drawer-close><span class="btn_label">취소</span></button>
      <button type="button" class="btn btn_filled color_primary" data-drawer-close><span class="btn_label">저장</span></button>
    </div>
  </div>
</div>

<!-- 헤더 추가 영역 -->
<div class="drawer" id="drawer-extra" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-extra-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-extra-title">주문 #1042</h2>
      <div class="drawer_extra">
        <span class="tag tag_solid color_success">완료</span>
      </div>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <dl class="stat stat_horizontal">
        <div class="stat_item">
          <dt class="stat_label">주문일</dt>
          <dd class="stat_value">2026-06-26</dd>
        </div>
        <div class="stat_item">
          <dt class="stat_label">금액</dt>
          <dd class="stat_value">₩128,000</dd>
        </div>
        <div class="stat_item">
          <dt class="stat_label">결제</dt>
          <dd class="stat_value">카드</dd>
        </div>
      </dl>
      <p>상세 정보·상태 뱃지 등을 헤더 <code class="typo_code">drawer_extra</code>에 배치할 수 있습니다.</p>
    </div>
  </div>
</div>

<!-- 메뉴 -->
<div class="drawer" id="drawer-menu" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-menu-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-left">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-menu-title">앱 메뉴</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body" style="padding-top: 0;">
      <nav class="menu menu_vertical menu_compact" aria-label="앱 메뉴">
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
                <path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 6-10"/>
              </svg>
              <span class="menu_label">분석</span>
            </a>
          </li>
          <li class="menu_item">
            <a href="#" class="menu_link">
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              </svg>
              <span class="menu_label">사용자</span>
            </a>
          </li>
          <li class="menu_divider" role="separator"></li>
          <li class="menu_item">
            <a href="#" class="menu_link">
              <svg class="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              <span class="menu_label">설정</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

<!-- 옵션: 로드 시 자동 열기 -->
<div class="drawer" id="drawer-open-on-load" data-drawer data-drawer-open-on-load="true" role="dialog" aria-modal="true" aria-labelledby="drawer-open-on-load-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right drawer_sm">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-open-on-load-title">자동 열기 옵션</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>이 패널은 <code class="typo_code">data-drawer-open-on-load="true"</code> 예시입니다.</p>
      <p>실서비스에서는 온보딩, 공지, 필수 확인 패널 등에 선택적으로 사용할 수 있습니다.</p>
    </div>
  </div>
</div>

<!-- 중첩 Drawer -->
<div class="drawer" id="drawer-nested-1" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-nested-1-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-nested-1-title">1단계 Drawer</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요.</p>
      <button type="button" class="btn btn_outline" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" aria-expanded="false">
        <span class="btn_label">2단계 열기</span>
      </button>
    </div>
  </div>
</div>

<div class="drawer" id="drawer-nested-2" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-nested-2-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right drawer_sm">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-nested-2-title">2단계 Drawer</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>중첩된 Drawer입니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.</p>
    </div>
    <div class="drawer_footer">
      <button type="button" class="btn btn_filled color_primary" data-drawer-close><span class="btn_label">완료</span></button>
    </div>
  </div>
</div>

<!-- 하단 드래그 시트 -->
<div class="drawer" id="drawer-drag" data-drawer data-drawer-draggable="true" role="dialog" aria-modal="true" aria-labelledby="drawer-drag-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-bottom drawer_draggable">
    <div class="drawer_handle" data-drawer-drag-handle role="presentation" aria-hidden="true">
      <span class="drawer_handle-bar"></span>
    </div>
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-drag-title">공유 · 액션</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>상단 핸들이나 헤더를 <strong>위로</strong> 드래그하면 시트가 펼쳐집니다.</p>
      <p><strong>아래로</strong> 드래그하면 기본 높이로 접히고, 더 내리면 닫힙니다.</p>
      <ul>
        <li>링크 복사</li>
        <li>메시지 보내기</li>
        <li>다른 앱으로 공유</li>
      </ul>
    </div>
    <div class="drawer_footer">
      <button type="button" class="btn btn_ghost" data-drawer-close><span class="btn_label">닫기</span></button>
      <button type="button" class="btn btn_filled color_primary" data-drawer-close><span class="btn_label">공유</span></button>
    </div>
  </div>
</div>

<!-- 백드롭 없음 -->
<div class="drawer" id="drawer-no-backdrop" data-drawer data-drawer-backdrop="false" role="dialog" aria-modal="true" aria-labelledby="drawer-no-backdrop-title" tabindex="-1" hidden>
  <div class="drawer_backdrop" data-drawer-close aria-hidden="true"></div>
  <div class="drawer_panel drawer_placement-right drawer_sm">
    <div class="drawer_header">
      <h2 class="drawer_title" id="drawer-no-backdrop-title">백드롭 없음</h2>
      <button type="button" class="drawer_close" data-drawer-close aria-label="닫기">
        <svg class="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="drawer_body">
      <p>본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
    </div>
  </div>
</div>

<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>트리거 버튼과 Drawer 루트를 <code class="typo_code">id</code> · <code class="typo_code">aria-controls</code>로 연결합니다. 기본은 닫힌 상태(<code class="typo_code">hidden</code>)이며, 클릭 이벤트로 열립니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- 트리거 --&gt;
&lt;button type="button" data-drawer-trigger="#drawer-1"
  aria-controls="drawer-1" aria-expanded="false"&gt;
  Drawer 열기
&lt;/button&gt;

&lt;!-- Drawer --&gt;
&lt;div class="drawer" id="drawer-1" data-drawer
  role="dialog" aria-modal="true" aria-labelledby="drawer-1-title"
  tabindex="-1" hidden&gt;
  &lt;div class="drawer_backdrop" data-drawer-close aria-hidden="true"&gt;&lt;/div&gt;
  &lt;div class="drawer_panel drawer_placement-right"&gt;
    &lt;div class="drawer_header"&gt;
      &lt;h2 class="drawer_title" id="drawer-1-title"&gt;제목&lt;/h2&gt;
      &lt;div class="drawer_extra"&gt;…&lt;/div&gt;
      &lt;button type="button" class="drawer_close"
        data-drawer-close aria-label="닫기"&gt;…&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="drawer_body"&gt;본문&lt;/div&gt;
    &lt;div class="drawer_footer"&gt;
      &lt;button type="button" class="btn btn_ghost" data-drawer-close&gt;취소&lt;/button&gt;
      &lt;button type="button" class="btn btn_filled color_primary" data-drawer-close&gt;저장&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 옵션: 백드롭 없음 --&gt;
&lt;div class="drawer" id="drawer-plain" data-drawer
  data-drawer-backdrop="false" …&gt;…&lt;/div&gt;

&lt;!-- 옵션: 로드 시 자동 열기 --&gt;
&lt;div class="drawer" id="drawer-onboard" data-drawer
  data-drawer-open-on-load="true" …&gt;…&lt;/div&gt;

&lt;!-- 옵션: 하단 드래그 시트 --&gt;
&lt;div class="drawer" id="drawer-sheet" data-drawer
  data-drawer-draggable="true" …&gt;
  &lt;div class="drawer_panel drawer_placement-bottom drawer_draggable"&gt;
    &lt;div class="drawer_handle" data-drawer-drag-handle aria-hidden="true"&gt;
      &lt;span class="drawer_handle-bar"&gt;&lt;/span&gt;
    &lt;/div&gt;
    …
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
          <tr><td><code class="typo_code">drawer</code></td><td>루트 컨테이너 (백드롭 + 패널)</td></tr>
          <tr><td><code class="typo_code">drawer_backdrop</code></td><td>어두운 배경 오버레이</td></tr>
          <tr><td><code class="typo_code">drawer_panel</code></td><td>슬라이드 패널 (헤더·본문·푸터 포함)</td></tr>
          <tr><td><code class="typo_code">drawer_header</code></td><td>패널 상단 영역 (제목 + 추가 영역 + 닫기)</td></tr>
          <tr><td><code class="typo_code">drawer_title</code></td><td>패널 제목 (<code class="typo_code">aria-labelledby</code> 대상)</td></tr>
          <tr><td><code class="typo_code">drawer_extra</code></td><td>헤더 보조 영역 (뱃지·액션 등, 선택)</td></tr>
          <tr><td><code class="typo_code">drawer_close</code></td><td>닫기 버튼</td></tr>
          <tr><td><code class="typo_code">drawer_body</code></td><td>스크롤 가능한 본문 영역</td></tr>
          <tr><td><code class="typo_code">drawer_footer</code></td><td>하단 액션 영역 (선택)</td></tr>
          <tr><td><code class="typo_code">drawer_placement-left</code></td><td>왼쪽에서 슬라이드</td></tr>
          <tr><td><code class="typo_code">drawer_placement-right</code></td><td>오른쪽에서 슬라이드 (기본)</td></tr>
          <tr><td><code class="typo_code">drawer_placement-top</code></td><td>위에서 슬라이드</td></tr>
          <tr><td><code class="typo_code">drawer_placement-bottom</code></td><td>아래에서 슬라이드</td></tr>
          <tr><td><code class="typo_code">drawer_sm</code> · <code class="typo_code">drawer_lg</code></td><td>패널 크기 변형 (좌·우: 너비, 상·하: 높이)</td></tr>
          <tr><td><code class="typo_code">drawer_handle</code> · <code class="typo_code">drawer_handle-bar</code> · <code class="typo_code">drawer_draggable</code></td><td>하단 드래그 핸들</td></tr>
          <tr><td><code class="typo_code">data-drawer</code></td><td>Drawer 루트 식별자</td></tr>
          <tr><td><code class="typo_code">data-drawer-trigger</code></td><td>열기 트리거 (값: <code class="typo_code">#id</code> 선택자)</td></tr>
          <tr><td><code class="typo_code">data-drawer-close</code></td><td>닫기 대상 (백드롭·닫기·푸터 버튼)</td></tr>
          <tr><td><code class="typo_code">data-drawer-backdrop="false"</code></td><td>백드롭 숨김 · 본문 스크롤 잠금 비활성</td></tr>
          <tr><td><code class="typo_code">data-drawer-open-on-load="true"</code></td><td>페이지 로드 후 자동 열기</td></tr>
          <tr><td><code class="typo_code">data-drawer-draggable</code> · <code class="typo_code">data-drawer-drag-handle</code></td><td>하단 드래그 펼침/접힘</td></tr>
          <tr><td><code class="typo_code">is-open</code> · <code class="typo_code">is-opening</code> · <code class="typo_code">is-closing</code></td><td>열림·애니메이션 상태</td></tr>
          <tr><td><code class="typo_code">is-expanded</code> · <code class="typo_code">is-dragging</code></td><td>하단 시트 펼침·드래그 중</td></tr>
          <tr><td><code class="typo_code">hidden</code></td><td>닫힌 초기 상태 (접근성·표시 제어)</td></tr>
          <tr><td><code class="typo_code">role="dialog"</code> · <code class="typo_code">aria-modal="true"</code></td><td>모달 대화상자 시맨틱 (권장)</td></tr>
          <tr><td><code class="typo_code">aria-controls</code> · <code class="typo_code">aria-expanded</code></td><td>트리거 ↔ 패널 연결 (트리거에 지정)</td></tr>
        </tbody>
      </table>
    </div>

    <p class="form_field-hint" style="margin-top: var(--space-md);">닫기: 백드롭 클릭 · <code class="typo_code">data-drawer-close</code> 요소 클릭 · <kbd>Esc</kbd> 키. 열릴 때 포커스는 닫기 버튼(또는 패널)으로 이동하고, 닫힐 때 트리거로 복원됩니다. 중첩 시 <kbd>Esc</kbd>는 최상위 패널부터 닫습니다.</p>
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
          <tr><td><code class="typo_code">--drawer-z-index</code></td><td>250</td><td>레이어 순서 (Modal 300 미만)</td></tr>
          <tr><td><code class="typo_code">--drawer-width</code></td><td>24rem</td><td>좌·우 패널 너비</td></tr>
          <tr><td><code class="typo_code">--drawer-width-sm</code></td><td>18rem</td><td><code class="typo_code">drawer_sm</code> 너비</td></tr>
          <tr><td><code class="typo_code">--drawer-width-lg</code></td><td>36rem</td><td><code class="typo_code">drawer_lg</code> 너비</td></tr>
          <tr><td><code class="typo_code">--drawer-height</code></td><td>18rem</td><td>상·하 패널 높이</td></tr>
          <tr><td><code class="typo_code">--drawer-height-sm</code></td><td>14rem</td><td><code class="typo_code">drawer_sm</code> 높이</td></tr>
          <tr><td><code class="typo_code">--drawer-height-lg</code></td><td>26rem</td><td><code class="typo_code">drawer_lg</code> 높이</td></tr>
          <tr><td><code class="typo_code">--drawer-height-expanded</code></td><td>90%</td><td>하단 드래그 펼침 높이</td></tr>
          <tr><td><code class="typo_code">--drawer-panel-duration-x</code> · <code class="typo_code">--drawer-panel-duration-y</code></td><td>0.32s · 0.36s</td><td>좌·우 / 상·하 슬라이드 시간</td></tr>
          <tr><td><code class="typo_code">--drawer-panel-easing-x</code> · <code class="typo_code">--drawer-panel-easing-y</code></td><td>cubic-bezier…</td><td>방향별 이징</td></tr>
          <tr><td><code class="typo_code">--drawer-bg</code></td><td><code class="typo_code">var(--color-surface)</code></td><td>패널 배경</td></tr>
          <tr><td><code class="typo_code">--drawer-shadow</code></td><td><code class="typo_code">var(--shadow-md)</code></td><td>패널 그림자</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=se(h),v=ne(h),le=oe(h,"data-drawer").join(`
`),g="sb-drawer-overlays";function ce(){let r=document.getElementById(g);r||(r=document.createElement("div"),r.id=g,document.body.appendChild(r)),r.dataset.sbMounted!=="true"&&(r.innerHTML=le.replace(/\sdata-drawer-open-on-load="true"/g,""),r.dataset.sbMounted="true")}const pe={title:"Components/피드백/Drawer",id:"components-drawer",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'화면 가장자리에서 슬라이드되어 나타나는 패널 컴포넌트입니다. 상세 보기·폼·모바일 메뉴·필터·설정 등 보조 UI에 사용하며, 기본 위치는 오른쪽(drawer_placement-right)입니다. 방향별 슬라이드·백드롭 페이드 애니메이션과 role="dialog" · aria-modal 접근성을 제공합니다.'}}},decorators:[r=>(ce(),r())]},t={name:"기본",render:()=>a(e[0]),parameters:{docs:{...d(e[0].previewHtml).docs,description:{story:e[0].description}}}},n={name:"위치",render:()=>a(e[1]),parameters:{docs:{...d(e[1].previewHtml).docs,description:{story:e[1].description}}}},s={name:"크기",render:()=>a(e[2]),parameters:{docs:{...d(e[2].previewHtml).docs,description:{story:e[2].description}}}},o={name:"헤더·푸터",render:()=>a(e[3]),parameters:{docs:{...d(e[3].previewHtml).docs,description:{story:e[3].description}}}},l={name:"헤더 추가 영역",render:()=>a(e[4]),parameters:{docs:{...d(e[4].previewHtml).docs,description:{story:e[4].description}}}},c={name:"메뉴",render:()=>a(e[5]),parameters:{docs:{...d(e[5].previewHtml).docs,description:{story:e[5].description}}}},i={name:"로드 시 자동 열기 (옵션)",render:()=>a(e[6]),parameters:{docs:{...d(e[6].previewHtml).docs,description:{story:e[6].description}}}},p={name:"중첩 Drawer",render:()=>a(e[7]),parameters:{docs:{...d(e[7].previewHtml).docs,description:{story:e[7].description}}}},w={name:"하단 드래그 시트",render:()=>a(e[8]),parameters:{docs:{...d(e[8].previewHtml).docs,description:{story:e[8].description}}}},u={name:"백드롭 없음",render:()=>a(e[9]),parameters:{docs:{...d(e[9].previewHtml).docs,description:{story:e[9].description}}}},b={name:"마크업",tags:["!dev"],render:()=>a(v[0]),parameters:{docs:{source:{code:null},description:{story:v[0].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>a(v[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},m={name:"디자인 토큰",tags:["!dev"],render:()=>a(v[2]),parameters:{docs:{source:{code:null},description:{story:"Drawer 크기·레이어·애니메이션·패널 표면에 사용하는 CSS 변수입니다."}}}};var y,f,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,D,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '위치',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(x=(D=n.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var B,M,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(S=(M=s.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var A,H,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '헤더·푸터',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(E=(H=o.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var z,O,T;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '헤더 추가 영역',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var L,I,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '메뉴',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var R,U,j;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '로드 시 자동 열기 (옵션)',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(j=(U=i.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var N,W,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '중첩 Drawer',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var G,J,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '하단 드래그 시트',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '백드롭 없음',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(V=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var de,re,te;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Drawer 크기·레이어·애니메이션·패널 표면에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(te=(re=m.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const we=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","ApiMarkup","ApiClasses","ApiTokens"];export{_ as ApiClasses,b as ApiMarkup,m as ApiTokens,t as Demo0,n as Demo1,s as Demo2,o as Demo3,l as Demo4,c as Demo5,i as Demo6,p as Demo7,w as Demo8,u as Demo9,we as __namedExportsOrder,pe as default};

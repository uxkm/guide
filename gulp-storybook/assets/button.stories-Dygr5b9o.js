import{b as t,g as e,e as Cn,c as Mn}from"./gulp-demos-C1efgjoy.js";const xn=`<!-- @meta
title: Button | HTML Components
activeNav: button
pageTitle: Button
-->
<div class="page_intro">
  <h1>Button</h1>
  <p class="lead">사용자 액션을 트리거하는 버튼 컴포넌트입니다.</p>
</div>

<!-- 데모 섹션: .demo_section-preview 내용만 작성하면 빌드 시 .demo_section-code가 자동 생성됩니다. 예시가 여러 개일 때는 HTML 주석 또는 data-demo-caption 속성으로 설명을 지정할 수 있습니다. -->
<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본 유형</h2>
    <p>btn_filled · btn_outline · btn_ghost · btn_text 네 가지 기본 스킨을 제공합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary"><span class="btn_label">Filled Primary</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Filled Default</span></button>
      <button type="button" class="btn btn_outline color_primary"><span class="btn_label">Outline</span></button>
      <button type="button" class="btn btn_ghost"><span class="btn_label">Ghost</span></button>
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">Text</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_success"><span class="btn_label">Success</span></button>
      <button type="button" class="btn btn_filled color_warning"><span class="btn_label">Warning</span></button>
      <button type="button" class="btn btn_filled color_danger"><span class="btn_label">Danger</span></button>
      <button type="button" class="btn btn_outline color_danger"><span class="btn_label">Outline Danger</span></button>
      <button type="button" class="btn btn_text color_danger"><span class="btn_label">Text Danger</span></button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-select-heading">
  <div class="demo_section-header">
    <h2 id="type-select-heading">셀렉트 박스형</h2>
    <p>btn_select 클래스로 셀렉트 박스처럼 표시합니다. btn_select-text는 배경·테두리 없는 텍스트 형태입니다. 드롭다운·팝오버 트리거로 사용하며 aria-haspopup과 aria-expanded를 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">서울특별시</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-placeholder" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">옵션을 선택하세요</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select is-open" aria-haspopup="listbox" aria-expanded="true">
        <span class="btn_label">카테고리</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select btn_sm" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">Small</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">Medium</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_lg" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">Large</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select" disabled aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">비활성</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select is-error" aria-haspopup="listbox" aria-expanded="false" aria-invalid="true">
        <span class="btn_label">필수 선택</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>

    <button type="button" class="btn btn_select btn_block" aria-haspopup="listbox" aria-expanded="false">
      <span class="btn_label">전체 너비 셀렉트 트리거</span>
      <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </button>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select btn_select-text" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">최신순</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text btn_select-placeholder" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">정렬 기준</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text is-open" aria-haspopup="listbox" aria-expanded="true">
        <span class="btn_label">필터</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text btn_sm" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">Small</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text" disabled aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">비활성</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-text-heading">
  <div class="demo_section-header">
    <h2 id="type-text-heading">텍스트 버튼</h2>
    <p>btn_text 계열 스킨으로 배경·테두리 없이 표시합니다. primary, muted, danger 등 색상 변형과 아이콘·크기·상태 조합을 지원합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">Primary</span></button>
      <button type="button" class="btn btn_text color_primary color_muted"><span class="btn_label">Muted</span></button>
      <button type="button" class="btn btn_text color_primary color_danger"><span class="btn_label">Danger</span></button>
      <button type="button" class="btn btn_text color_primary color_success"><span class="btn_label">Success</span></button>
      <button type="button" class="btn btn_text color_primary color_warning"><span class="btn_label">Warning</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_text color_primary color_danger">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 6h18"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
        <span class="btn_label">삭제</span>
      </button>
      <button type="button" class="btn btn_text color_primary color_success">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <path d="M22 4 12 14.01l-3-3"/>
        </svg>
        <span class="btn_label">완료</span>
      </button>
      <button type="button" class="btn btn_text color_primary color_warning">
        <span class="btn_label">주의</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <path d="M12 9v4M12 17h.01"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary color_muted">
        <span class="btn_label">자세히</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">더 보기</span></button>
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">링크 복사</span></button>
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">취소</span></button>
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">건너뛰기</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_text color_primary">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span class="btn_label">추가</span>
      </button>
      <button type="button" class="btn btn_text color_primary">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        <span class="btn_label">다운로드</span>
      </button>
      <button type="button" class="btn btn_text color_primary">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        <span class="btn_label">링크 열기</span>
      </button>
      <button type="button" class="btn btn_text color_primary">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
        <span class="btn_label">설정</span>
      </button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_text color_primary">
        <span class="btn_label">다음</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary">
        <span class="btn_label">전체 보기</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary">
        <span class="btn_label">삭제</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 6h18"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary">
        <span class="btn_label">새로고침</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-2.64-6.36"/>
          <path d="M21 3v6h-6"/>
        </svg>
      </button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_text color_primary btn_sm"><span class="btn_label">Small</span></button>
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">Medium</span></button>
      <button type="button" class="btn btn_text color_primary btn_lg"><span class="btn_label">Large</span></button>
      <button type="button" class="btn btn_text color_primary btn_sm">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span class="btn_label">추가</span>
      </button>
      <button type="button" class="btn btn_text color_primary btn_lg">
        <span class="btn_label">다음</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_text color_primary btn_icon-only" aria-label="검색">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary btn_icon-only" aria-label="편집">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary btn_icon-only btn_sm" aria-label="닫기">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary" disabled><span class="btn_label">비활성</span></button>
      <button type="button" class="btn btn_text color_primary" disabled>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <span class="btn_label">비활성</span>
      </button>
      <button type="button" class="btn btn_text color_primary is-disabled" aria-disabled="true">
        <span class="btn_label">is-disabled</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <button type="button" class="btn btn_text color_primary btn_block">
      <span class="btn_label">전체 너비 텍스트 버튼</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-icon-text-heading">
  <div class="demo_section-header">
    <h2 id="type-icon-text-heading">아이콘 + 텍스트</h2>
    <p>아이콘과 함께 사용하는 텍스트도 btn_label 클래스로 감쌉니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="btn_row btn_row-wrap">

    <button type="button" class="btn btn_filled color_primary">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
      <span class="btn_label">추가</span>
    </button>
    <button type="button" class="btn btn_filled color_default">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span class="btn_label">다운로드</span>
    </button>
    <button type="button" class="btn btn_outline color_primary">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
      <span class="btn_label">새 항목</span>
    </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-icon-text-vertical-heading">
  <div class="demo_section-header">
    <h2 id="type-icon-text-vertical-heading">아이콘 + 텍스트 (세로)</h2>
    <p>btn_vertical 클래스로 아이콘을 위·텍스트를 아래에 배치합니다. 하단 탭·퀵 액션 등에 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span class="btn_label">홈</span>
      </button>
      <button type="button" class="btn btn_filled color_default btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <span class="btn_label">검색</span>
      </button>
      <button type="button" class="btn btn_ghost btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span class="btn_label">마이</span>
      </button>
      <button type="button" class="btn btn_text color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span class="btn_label">추가</span>
      </button>
      <button type="button" class="btn btn_outline color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        <span class="btn_label">다운로드</span>
      </button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary btn_vertical btn_sm">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span class="btn_label">추가</span>
      </button>
      <button type="button" class="btn btn_filled color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span class="btn_label">추가</span>
      </button>
      <button type="button" class="btn btn_filled color_primary btn_vertical btn_lg">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span class="btn_label">추가</span>
      </button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_default btn_vertical btn_round">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
        </svg>
        <span class="btn_label">가이드</span>
      </button>
      <button type="button" class="btn btn_filled color_primary btn_vertical btn_round">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        <span class="btn_label">즐겨찾기</span>
      </button>
      <button type="button" class="btn btn_ghost btn_vertical" disabled>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 6h18"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
        <span class="btn_label">삭제</span>
      </button>
      <button type="button" class="btn btn_filled color_primary btn_vertical is-loading" aria-busy="true">
        <span class="btn_spinner" aria-hidden="true"></span>
        <span class="btn_label">저장 중</span>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-icon-text-vertical-equal-heading">
  <div class="demo_section-header">
    <h2 id="type-icon-text-vertical-equal-heading">아이콘 + 텍스트 (세로) · 균등 배분</h2>
    <p>btn_vertical과 btn_row-equal을 함께 사용하면 부모 100% 너비에서 버튼을 균등 분배합니다. 하단 탭 바 등에 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row-equal" role="toolbar" aria-label="하단 탭 바">
      <button type="button" class="btn btn_text color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span class="btn_label">홈</span>
      </button>
      <button type="button" class="btn btn_text color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
        <span class="btn_label">카테고리</span>
      </button>
      <button type="button" class="btn btn_filled color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span class="btn_label">장바구니</span>
      </button>
      <button type="button" class="btn btn_text color_primary btn_vertical">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span class="btn_label">마이</span>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-text-icon-heading">
  <div class="demo_section-header">
    <h2 id="type-text-icon-heading">텍스트 + 아이콘</h2>
    <p>텍스트를 앞에 두고 아이콘을 뒤에 배치합니다. 텍스트는 btn_label로 감쌉니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="btn_row btn_row-wrap">

    <button type="button" class="btn btn_filled color_primary">
      <span class="btn_label">다음</span>
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_default">
      <span class="btn_label">자세히 보기</span>
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </button>
    <button type="button" class="btn btn_text color_primary">
      <span class="btn_label">링크 이동</span>
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-icon-only-heading">
  <div class="demo_section-header">
    <h2 id="type-icon-only-heading">아이콘 버튼</h2>
    <p>텍스트 없이 아이콘만 표시합니다. btn_icon-only와 함께 사용하며, 접근성을 위해 aria-label을 반드시 지정합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="btn_row btn_row-wrap">

    <button type="button" class="btn btn_filled color_primary btn_icon-only" aria-label="추가">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_default btn_icon-only" aria-label="설정">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    </button>
    <button type="button" class="btn btn_ghost btn_icon-only" aria-label="검색">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    </button>
    <button type="button" class="btn btn_outline color_primary btn_icon-only" aria-label="편집">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_danger btn_icon-only" aria-label="삭제">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M3 6h18"/>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_primary btn_icon-only" disabled aria-label="추가">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="type-icon-only-size-heading">
  <div class="demo_section-header">
    <h2 id="type-icon-only-size-heading">아이콘 버튼 크기</h2>
    <p>btn_sm, medium, btn_lg 세 가지 크기를 지원합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="btn_row btn_row-wrap">

    <button type="button" class="btn btn_filled color_primary btn_icon-only btn_sm" aria-label="추가 (small)">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_primary btn_icon-only" aria-label="추가 (medium)">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_primary btn_icon-only btn_lg" aria-label="추가 (large)">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_default btn_icon-only btn_sm" aria-label="다운로드 (small)">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_default btn_icon-only" aria-label="다운로드 (medium)">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    </button>
    <button type="button" class="btn btn_filled color_default btn_icon-only btn_lg" aria-label="다운로드 (large)">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="variant-heading">
  <div class="demo_section-header">
    <h2 id="variant-heading">색상 변형</h2>
    <p>상황에 맞는 색상 변형을 사용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_filled color_success"><span class="btn_label">Success</span></button>
    <button type="button" class="btn btn_filled color_danger"><span class="btn_label">Danger</span></button>
    <button type="button" class="btn btn_filled color_warning"><span class="btn_label">Warning</span></button>
    <button type="button" class="btn btn_outline color_primary"><span class="btn_label">Outline</span></button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>small, medium, large 세 가지 크기를 지원합니다.</p>
  </div>

  <div class="demo_section-preview">
    <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">Small</span></button>
    <button type="button" class="btn btn_filled color_primary"><span class="btn_label">Medium</span></button>
    <button type="button" class="btn btn_filled color_primary btn_lg"><span class="btn_label">Large</span></button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="shape-round-heading">
  <div class="demo_section-header">
    <h2 id="shape-round-heading">라운드</h2>
    <p>btn_round 클래스로 pill(캡슐) 형태의 둥근 모서리를 적용합니다. btn_icon-only와 조합하면 원형 아이콘 버튼이 됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary btn_round"><span class="btn_label">Primary</span></button>
      <button type="button" class="btn btn_filled color_default btn_round"><span class="btn_label">Default</span></button>
      <button type="button" class="btn btn_ghost btn_round"><span class="btn_label">Ghost</span></button>
      <button type="button" class="btn btn_outline color_primary btn_round"><span class="btn_label">Outline</span></button>
      <button type="button" class="btn btn_filled color_success btn_round"><span class="btn_label">Success</span></button>
      <button type="button" class="btn btn_filled color_danger btn_round"><span class="btn_label">Danger</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary btn_round btn_sm"><span class="btn_label">Small</span></button>
      <button type="button" class="btn btn_filled color_primary btn_round"><span class="btn_label">Medium</span></button>
      <button type="button" class="btn btn_filled color_primary btn_round btn_lg"><span class="btn_label">Large</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary btn_round">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <span class="btn_label">추가</span>
      </button>
      <button type="button" class="btn btn_filled color_default btn_round">
        <span class="btn_label">다음</span>
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
      <button type="button" class="btn btn_text color_primary btn_round"><span class="btn_label">더 보기</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary btn_round btn_icon-only" aria-label="추가">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </button>
      <button type="button" class="btn btn_filled color_default btn_round btn_icon-only" aria-label="설정">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      </button>
      <button type="button" class="btn btn_outline color_primary btn_round btn_icon-only btn_sm" aria-label="검색">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
      </button>
      <button type="button" class="btn btn_filled color_danger btn_round btn_icon-only btn_lg" aria-label="삭제">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 6h18"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>

    <div class="btn_group btn_group-round btn_group-fit" role="group" aria-label="라운드 버튼 그룹">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">일</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">주</span></button>
      <button type="button" class="btn btn_filled color_primary"><span class="btn_label">월</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">년</span></button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>부모 영역 기준으로 너비를 조절합니다. btn_block은 가로 전체, btn_row-equal은 부모 100% 너비에서 버튼을 균등 분배, btn_grow는 비율 분배, btn_fit은 콘텐츠 너비를 유지합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <button type="button" class="btn btn_filled color_primary btn_block"><span class="btn_label">전체 너비 버튼</span></button>

    <div class="btn_row-equal">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">취소</span></button>
      <button type="button" class="btn btn_filled color_primary"><span class="btn_label">확인</span></button>
    </div>

    <div class="btn_row">
      <button type="button" class="btn btn_filled color_default btn_grow"><span class="btn_label">취소</span></button>
      <button type="button" class="btn btn_filled color_primary btn_grow"><span class="btn_label">확인</span></button>
    </div>

    <div class="btn_row">
      <button type="button" class="btn btn_filled color_default btn_grow"><span class="btn_label">옵션 A</span></button>
      <button type="button" class="btn btn_filled color_default btn_grow"><span class="btn_label">옵션 B</span></button>
      <button type="button" class="btn btn_filled color_primary btn_grow"><span class="btn_label">옵션 C</span></button>
    </div>

    <div class="btn_row btn_row-start">
      <button type="button" class="btn btn_ghost btn_fit"><span class="btn_label">뒤로</span></button>
      <button type="button" class="btn btn_filled color_default btn_fit"><span class="btn_label">취소</span></button>
      <button type="button" class="btn btn_filled color_primary btn_fit"><span class="btn_label">저장</span></button>
    </div>

    <div class="btn_row btn_row-end">
      <button type="button" class="btn btn_ghost btn_fit"><span class="btn_label">뒤로</span></button>
      <button type="button" class="btn btn_filled color_default btn_fit"><span class="btn_label">취소</span></button>
      <button type="button" class="btn btn_filled color_primary btn_fit"><span class="btn_label">저장</span></button>
    </div>

    <div class="btn_row">
      <button type="button" class="btn btn_ghost btn_fit"><span class="btn_label">뒤로</span></button>
      <button type="button" class="btn btn_filled color_default btn_grow"><span class="btn_label">임시 저장</span></button>
      <button type="button" class="btn btn_filled color_primary btn_grow"><span class="btn_label">제출</span></button>
    </div>

    <div class="btn_row">
      <button type="button" class="btn btn_filled color_default btn_grow"><span class="btn_label">본문 영역</span></button>
      <button type="button" class="btn btn_filled color_primary btn_fit"><span class="btn_label">확인</span></button>
    </div>

    <div class="btn_row">
      <button type="button" class="btn btn_filled color_default btn_grow-2"><span class="btn_label">2배 너비</span></button>
      <button type="button" class="btn btn_filled color_primary btn_grow"><span class="btn_label">1배 너비</span></button>
    </div>

    <button type="button" class="btn btn_filled color_primary btn_block">
      <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span class="btn_label">전체 너비 다운로드</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>disabled, is-disabled, is-loading 상태를 표현합니다. 비활성은 스킨별로, 로딩은 텍스트·아이콘 버튼 모두 적용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary" disabled><span class="btn_label">Primary</span></button>
      <button type="button" class="btn btn_filled color_default" disabled><span class="btn_label">Default</span></button>
      <button type="button" class="btn btn_outline color_primary" disabled><span class="btn_label">Outline</span></button>
      <button type="button" class="btn btn_ghost" disabled><span class="btn_label">Ghost</span></button>
      <button type="button" class="btn btn_text color_primary" disabled><span class="btn_label">Text</span></button>
      <button type="button" class="btn btn_filled color_danger" disabled><span class="btn_label">Danger</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary is-disabled" aria-disabled="true"><span class="btn_label">is-disabled</span></button>
      <button type="button" class="btn btn_filled color_default is-disabled" aria-disabled="true"><span class="btn_label">is-disabled</span></button>
      <button type="button" class="btn btn_outline color_primary is-disabled" aria-disabled="true"><span class="btn_label">is-disabled</span></button>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary is-loading" aria-busy="true">
        <span class="btn_spinner" aria-hidden="true"></span>
        <span class="btn_label">저장 중</span>
      </button>
      <button type="button" class="btn btn_filled color_default is-loading" aria-busy="true">
        <span class="btn_spinner" aria-hidden="true"></span>
        <span class="btn_label">처리 중</span>
      </button>
      <button type="button" class="btn btn_outline color_primary is-loading" aria-busy="true">
        <span class="btn_spinner" aria-hidden="true"></span>
        <span class="btn_label">업로드 중</span>
      </button>
      <button type="button" class="btn btn_filled color_primary btn_icon-only is-loading" aria-busy="true" aria-label="저장 중">
        <span class="btn_spinner" aria-hidden="true"></span>
      </button>
    </div>

    <button type="button" class="btn btn_filled color_primary btn_block is-loading" aria-busy="true">
      <span class="btn_spinner" aria-hidden="true"></span>
      <span class="btn_label">전체 너비 로딩</span>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">버튼 그룹</h2>
    <p>가로·세로 방향으로 버튼을 묶습니다. btn_group-fit은 콘텐츠 크기 맞춤, btn_group-block은 전체 너비 균등 분배, btn_group-align-start·center·end로 그룹 정렬을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 small 좌측">
      <button type="button" class="btn btn_filled color_default btn_sm"><span class="btn_label">Left</span></button>
      <button type="button" class="btn btn_filled color_default btn_sm"><span class="btn_label">Middle</span></button>
      <button type="button" class="btn btn_filled color_default btn_sm"><span class="btn_label">Right</span></button>
    </div>

    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 medium 좌측">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Left</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Middle</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Right</span></button>
    </div>

    <div class="btn_group btn_group-fit btn_group-align-start" role="group" aria-label="가로 버튼 그룹 large 좌측">
      <button type="button" class="btn btn_filled color_default btn_lg"><span class="btn_label">Left</span></button>
      <button type="button" class="btn btn_filled color_default btn_lg"><span class="btn_label">Middle</span></button>
      <button type="button" class="btn btn_filled color_default btn_lg"><span class="btn_label">Right</span></button>
    </div>

    <div class="btn_group btn_group-fit btn_group-align-center" role="group" aria-label="가로 버튼 그룹 medium 가운데">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Left</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Middle</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Right</span></button>
    </div>

    <div class="btn_group btn_group-fit btn_group-align-end" role="group" aria-label="가로 버튼 그룹 medium 우측">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Left</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Middle</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Right</span></button>
    </div>

    <div class="btn_group btn_group-block" role="group" aria-label="가로 버튼 그룹 전체 너비">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Left</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Middle</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">Right</span></button>
    </div>

    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-start" role="group" aria-label="세로 버튼 그룹 고정 너비 좌측">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">상단</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">중간</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">하단</span></button>
    </div>

    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-center" role="group" aria-label="세로 버튼 그룹 고정 너비 가운데">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">상단</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">중간</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">하단</span></button>
    </div>

    <div class="btn_group btn_group-vertical btn_group-fit btn_group-align-end" role="group" aria-label="세로 버튼 그룹 고정 너비 우측">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">상단</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">중간</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">하단</span></button>
    </div>

    <div class="btn_group btn_group-vertical btn_group-block" role="group" aria-label="세로 버튼 그룹 전체 너비">
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">상단</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">중간</span></button>
      <button type="button" class="btn btn_filled color_default"><span class="btn_label">하단</span></button>
    </div>

    <div class="btn_stack">
      <button type="button" class="btn btn_filled color_primary btn_block"><span class="btn_label">로그인</span></button>
      <button type="button" class="btn btn_filled color_default btn_block"><span class="btn_label">회원가입</span></button>
    </div>

    <div class="btn_stack">
      <button type="button" class="btn btn_filled color_primary btn_block"><span class="btn_label">결제하기</span></button>
      <button type="button" class="btn btn_text color_primary"><span class="btn_label">쿠폰 적용</span></button>
    </div>

    <div class="btn_stack">
      <button type="button" class="btn btn_filled color_primary btn_block">
        <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        <span class="btn_label">다운로드</span>
      </button>
      <p class="btn_stack-text">최신 버전 v2.0 · <a href="#">릴리스 노트</a></p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="tag-heading">
  <div class="demo_section-header">
    <h2 id="tag-heading">루트 태그</h2>
    <p>button · a · div에 .btn을 적용할 수 있습니다. div와 href 없는 a는 role만으로 Tab 초점이 이동하지 않으므로 tabindex="0"을 함께 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_filled color_primary"><span class="btn_label">button</span></button>
      <a href="getting-started.html" class="btn btn_outline color_primary"><span class="btn_label">a + href</span></a>
      <div class="btn btn_ghost" role="button" tabindex="0"><span class="btn_label">div → role=button</span></div>
      <a class="btn btn_text color_primary" role="link" tabindex="0"><span class="btn_label">a, role=link</span></a>
    </div>
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
            <td><code class="typo_code">btn</code></td>
            <td>루트 구조 클래스</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_filled</code></td>
            <td>배경 채움 스킨</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_outline</code></td>
            <td>테두리 스킨</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_ghost</code></td>
            <td>투명 배경 스킨</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_text</code></td>
            <td>텍스트만 스킨</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_select</code></td>
            <td>셀렉트 박스형 트리거</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_select-text</code></td>
            <td>텍스트형 셀렉트 트리거</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_sm</code> · <code class="typo_code">btn_lg</code></td>
            <td>크기 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_round</code></td>
            <td>pill(캡슐) 모서리</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_vertical</code></td>
            <td>아이콘 위 · 텍스트 아래</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_icon-only</code></td>
            <td>아이콘만</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_block</code> · <code class="typo_code">btn_grow</code> · <code class="typo_code">btn_fit</code></td>
            <td>너비 레이아웃</td>
          </tr>
          <tr>
            <td><code class="typo_code">icon</code> · <code class="typo_code">btn_label</code> · <code class="typo_code">btn_spinner</code></td>
            <td>내부 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_row</code> · <code class="typo_code">btn_group</code> · <code class="typo_code">btn_stack</code></td>
            <td>버튼 묶음 컨테이너</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-disabled</code> · <code class="typo_code">is-loading</code> · <code class="typo_code">is-open</code> · <code class="typo_code">is-error</code></td>
            <td>상태 클래스</td>
          </tr>
          <tr>
            <td><code class="typo_code">color_primary</code> · <code class="typo_code">color_danger</code> …</td>
            <td>색상 유틸 (스킨과 조합)</td>
          </tr>
          <tr>
            <td><code class="typo_code">data-ripple</code></td>
            <td>클릭 파장 활성. data-ripple="surface"는 절대 위치 보조 버튼용</td>
          </tr>
          <tr>
            <td><code class="typo_code">data-ripple="false"</code></td>
            <td>해당 요소 ripple 비활성</td>
          </tr>
          <tr>
            <td><code class="typo_code">data-no-ripple</code></td>
            <td>하위 전체 ripple 비활성</td>
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
            <td><code class="typo_code">--btn-padding-y</code> · <code class="typo_code">--btn-padding-x</code> · <code class="typo_code">--btn-font-size</code></td>
            <td>0.5rem · 1rem · <code class="typo_code">var(--text-size-base)</code></td>
            <td>기본(md) 패딩·타이포</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-padding-y-sm</code> · <code class="typo_code">--btn-padding-x-sm</code> · <code class="typo_code">--btn-font-size-sm</code></td>
            <td>0.3rem · 0.75rem · <code class="typo_code">var(--text-size-sm)</code></td>
            <td>sm 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-padding-y-lg</code> · <code class="typo_code">--btn-padding-x-lg</code> · <code class="typo_code">--btn-font-size-lg</code></td>
            <td>0.65rem · 1.25rem · <code class="typo_code">var(--text-size-lg)</code></td>
            <td>lg 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-font-weight</code> · <code class="typo_code">--btn-font-weight-normal</code> · <code class="typo_code">--btn-line-height</code></td>
            <td>600 · 400 · 1.4</td>
            <td>타이포 두께·줄높이</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-border-width</code> · <code class="typo_code">--btn-gap</code></td>
            <td>1px · <code class="typo_code">var(--space-sm)</code></td>
            <td>테두리·내부 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-icon-size</code> · <code class="typo_code">--btn-icon-size-md</code> · <code class="typo_code">--btn-icon-size-lg</code> · <code class="typo_code">--btn-icon-size-xl</code></td>
            <td>1em · 1.125em · 1.25em · 1.375em</td>
            <td>아이콘 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-icon-only-padding</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td>
            <td>0.5rem · 0.35rem · 0.65rem</td>
            <td>아이콘만 버튼 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-vertical-min-width</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td>
            <td>4.5rem · 3.75rem · 5.25rem</td>
            <td>세로 배치 최소 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-vertical-padding-y</code> · <code class="typo_code">--btn-vertical-padding-x</code></td>
            <td>0.65rem · 0.75rem</td>
            <td>세로 배치 패딩(md)</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-vertical-label-size</code> · <code class="typo_code">--btn-vertical-label-weight</code></td>
            <td><code class="typo_code">var(--text-size-sm)</code> · 500</td>
            <td>세로 배치 라벨</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-select-min-width</code> · <code class="typo_code">--btn-select-max-width</code></td>
            <td>10rem · 320px</td>
            <td>셀렉트 트리거 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-select-padding-right</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td>
            <td>0.65rem · 0.5rem · 0.85rem</td>
            <td>셀렉트 캐럿 여백</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-select-text-padding-x</code> · <code class="typo_code">--btn-select-text-padding-right</code></td>
            <td>0.5rem · 0.35rem</td>
            <td>텍스트형 셀렉트 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-spinner-size</code> · <code class="typo_code">--btn-spinner-border</code> · <code class="typo_code">--btn-spinner-duration</code></td>
            <td>1em · 2px · 0.6s</td>
            <td>로딩 스피너</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-stack-text-size</code> · <code class="typo_code">--btn-stack-text-line-height</code></td>
            <td><code class="typo_code">var(--text-size-sm)</code> · 1.5</td>
            <td>스택 하단 안내 텍스트</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-group-overlap</code></td>
            <td>-1px</td>
            <td>그룹 버튼 테두리 겹침</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,n=Cn(xn),kn=Mn(xn),Dn={title:"Components/기본 요소/Button",id:"components-button",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"사용자 액션을 트리거하는 버튼 컴포넌트입니다."}}}},s={name:"기본 유형",render:()=>t(n[0]),parameters:{docs:{...e(n[0].previewHtml).docs,description:{story:n[0].description}}}},o={name:"셀렉트 박스형",render:()=>t(n[1]),parameters:{docs:{...e(n[1].previewHtml).docs,description:{story:n[1].description}}}},a={name:"텍스트 버튼",render:()=>t(n[2]),parameters:{docs:{...e(n[2].previewHtml).docs,description:{story:n[2].description}}}},l={name:"아이콘 + 텍스트",render:()=>t(n[3]),parameters:{docs:{...e(n[3].previewHtml).docs,description:{story:n[3].description}}}},r={name:"아이콘 + 텍스트 (세로)",render:()=>t(n[4]),parameters:{docs:{...e(n[4].previewHtml).docs,description:{story:n[4].description}}}},c={name:"아이콘 + 텍스트 (세로) · 균등 배분",render:()=>t(n[5]),parameters:{docs:{...e(n[5].previewHtml).docs,description:{story:n[5].description}}}},b={name:"텍스트 + 아이콘",render:()=>t(n[6]),parameters:{docs:{...e(n[6].previewHtml).docs,description:{story:n[6].description}}}},d={name:"아이콘 버튼",render:()=>t(n[7]),parameters:{docs:{...e(n[7].previewHtml).docs,description:{story:n[7].description}}}},i={name:"아이콘 버튼 크기",render:()=>t(n[8]),parameters:{docs:{...e(n[8].previewHtml).docs,description:{story:n[8].description}}}},p={name:"색상 변형",render:()=>t(n[9]),parameters:{docs:{...e(n[9].previewHtml).docs,description:{story:n[9].description}}}},u={name:"크기",render:()=>t(n[10]),parameters:{docs:{...e(n[10].previewHtml).docs,description:{story:n[10].description}}}},_={name:"라운드",render:()=>t(n[11]),parameters:{docs:{...e(n[11].previewHtml).docs,description:{story:n[11].description}}}},v={name:"너비",render:()=>t(n[12]),parameters:{docs:{...e(n[12].previewHtml).docs,description:{story:n[12].description}}}},m={name:"상태",render:()=>t(n[13]),parameters:{docs:{...e(n[13].previewHtml).docs,description:{story:n[13].description}}}},y={name:"버튼 그룹",render:()=>t(n[14]),parameters:{docs:{...e(n[14].previewHtml).docs,description:{story:n[14].description}}}},h={name:"루트 태그",render:()=>t(n[15]),parameters:{docs:{...e(n[15].previewHtml).docs,description:{story:n[15].description}}}},g={name:"클래스 · 속성",tags:["!dev"],render:()=>t(kn[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},w={name:"디자인 토큰",tags:["!dev"],render:()=>t(kn[1]),parameters:{docs:{source:{code:null},description:{story:"Button 패딩·아이콘·셀렉트·스피너 등에 사용하는 CSS 변수입니다."}}}};var f,x,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본 유형',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,M,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '셀렉트 박스형',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(B=(M=o.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var D,H,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '텍스트 버튼',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(S=(H=a.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var A,z,L;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var F,V,T;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트 (세로)',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(T=(V=r.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var O,E,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트 (세로) · 균등 배분',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var R,P,G;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '텍스트 + 아이콘',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(G=(P=b.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var W,Z,N;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '아이콘 버튼',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(N=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:N.source}}};var j,I,J;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '아이콘 버튼 크기',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(J=(I=i.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '색상 변형',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var nn,tn,en;_.parameters={..._.parameters,docs:{...(nn=_.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  name: '라운드',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(en=(tn=_.parameters)==null?void 0:tn.docs)==null?void 0:en.source}}};var sn,on,an;v.parameters={...v.parameters,docs:{...(sn=v.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  name: '너비',
  render: () => renderDemo(demos[12]),
  parameters: {
    docs: {
      ...gulpSource(demos[12].previewHtml).docs,
      description: {
        story: demos[12].description
      }
    }
  }
}`,...(an=(on=v.parameters)==null?void 0:on.docs)==null?void 0:an.source}}};var ln,rn,cn;m.parameters={...m.parameters,docs:{...(ln=m.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  name: '상태',
  render: () => renderDemo(demos[13]),
  parameters: {
    docs: {
      ...gulpSource(demos[13].previewHtml).docs,
      description: {
        story: demos[13].description
      }
    }
  }
}`,...(cn=(rn=m.parameters)==null?void 0:rn.docs)==null?void 0:cn.source}}};var bn,dn,pn;y.parameters={...y.parameters,docs:{...(bn=y.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  name: '버튼 그룹',
  render: () => renderDemo(demos[14]),
  parameters: {
    docs: {
      ...gulpSource(demos[14].previewHtml).docs,
      description: {
        story: demos[14].description
      }
    }
  }
}`,...(pn=(dn=y.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var un,_n,vn;h.parameters={...h.parameters,docs:{...(un=h.parameters)==null?void 0:un.docs,source:{originalSource:`{
  name: '루트 태그',
  render: () => renderDemo(demos[15]),
  parameters: {
    docs: {
      ...gulpSource(demos[15].previewHtml).docs,
      description: {
        story: demos[15].description
      }
    }
  }
}`,...(vn=(_n=h.parameters)==null?void 0:_n.docs)==null?void 0:vn.source}}};var mn,yn,hn;g.parameters={...g.parameters,docs:{...(mn=g.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(hn=(yn=g.parameters)==null?void 0:yn.docs)==null?void 0:hn.source}}};var gn,wn,fn;w.parameters={...w.parameters,docs:{...(gn=w.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Button 패딩·아이콘·셀렉트·스피너 등에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(fn=(wn=w.parameters)==null?void 0:wn.docs)==null?void 0:fn.source}}};const Hn=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","Demo12","Demo13","Demo14","Demo15","ApiClasses","ApiTokens"];export{g as ApiClasses,w as ApiTokens,s as Demo0,o as Demo1,u as Demo10,_ as Demo11,v as Demo12,m as Demo13,y as Demo14,h as Demo15,a as Demo2,l as Demo3,r as Demo4,c as Demo5,b as Demo6,d as Demo7,i as Demo8,p as Demo9,Hn as __namedExportsOrder,Dn as default};

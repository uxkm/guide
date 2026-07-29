import{b as e,d as ga,c as t,e as wa}from"./gulp-demos-uIKTVH8x.js";const ha=`<!-- @meta
title: Tabs | HTML Components
activeNav: tabs
pageTitle: Tabs
-->
<div class="page_intro">
  <h1>Tabs</h1>
  <p class="lead">같은 맥락의 콘텐츠를 탭으로 전환하는 컴포넌트입니다. 라인·카드·필 스킨, 균등 분할·네비 스크롤 레이아웃, 아이콘·배지를 지원합니다.</p>
</div>


<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본 (라인)</h2>
    <p><code class="typo_code">tabs_line</code>이 기본 스킨입니다. <code class="typo_code">role="tablist"</code> · <code class="typo_code">role="tab"</code> · <code class="typo_code">role="tabpanel"</code>과 <code class="typo_code">aria-selected</code>, <code class="typo_code">aria-controls</code>로 접근성을 보장합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_line" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="프로젝트 정보">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-basic-1" aria-selected="true" aria-controls="tabs-basic-panel-1">개요</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-basic-2" aria-selected="false" aria-controls="tabs-basic-panel-2" tabindex="-1">팀</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-basic-3" aria-selected="false" aria-controls="tabs-basic-panel-3" tabindex="-1">활동</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-basic-panel-1" aria-labelledby="tabs-basic-1"><p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-basic-panel-2" aria-labelledby="tabs-basic-2" hidden><p>팀 구성원과 역할을 표시합니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-basic-panel-3" aria-labelledby="tabs-basic-3" hidden><p>최근 활동 로그와 타임라인을 보여줍니다.</p></div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="dynamic-heading">
  <div class="demo_section-header">
    <h2 id="dynamic-heading">동적 패널</h2>
    <p><code class="typo_code">tabs_dynamic</code>은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 패널 내용이 전환됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">

    <div class="tabs tabs_line tabs_dynamic" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="동적 탭 (키)">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-dyn-a-1" aria-selected="true" aria-controls="tabs-dyn-a-panel" data-tabs-key="overview">개요</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-dyn-a-2" aria-selected="false" aria-controls="tabs-dyn-a-panel" tabindex="-1" data-tabs-key="team">팀</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-dyn-a-3" aria-selected="false" aria-controls="tabs-dyn-a-panel" tabindex="-1" data-tabs-key="activity">활동</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-dyn-a-panel" aria-labelledby="tabs-dyn-a-1">
          <p data-tabs-panel-key="overview">프로젝트 개요와 목표를 설명하는 영역입니다.</p>
          <p data-tabs-panel-key="team" hidden>팀 구성원과 역할을 표시합니다.</p>
          <p data-tabs-panel-key="activity" hidden>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </div>
      </div>
    </div>

    <div class="tabs tabs_line tabs_dynamic" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="동적 탭 (메뉴)">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-dyn-b-1" aria-selected="true" aria-controls="tabs-dyn-b-panel" data-tabs-key="overview">개요</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-dyn-b-2" aria-selected="false" aria-controls="tabs-dyn-b-panel" tabindex="-1" data-tabs-key="team">팀</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-dyn-b-3" aria-selected="false" aria-controls="tabs-dyn-b-panel" tabindex="-1" data-tabs-key="activity">활동</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-dyn-b-panel" aria-labelledby="tabs-dyn-b-1">
          <p data-tabs-panel-key="overview">TabMenu로 선언한 동적 패널 — 개요</p>
          <p data-tabs-panel-key="team" hidden>TabMenu로 선언한 동적 패널 — 팀</p>
          <p data-tabs-panel-key="activity" hidden>TabMenu로 선언한 동적 패널 — 활동</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="indicator-slide-heading">
  <div class="demo_section-header">
    <h2 id="indicator-slide-heading">슬라이드 인디케이터</h2>
    <p><code class="typo_code">tabs_indicator-slide</code>로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">

    <div class="tabs tabs_line tabs_indicator-slide" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="슬라이드 라인 탭">
            <span class="tabs_indicator" aria-hidden="true"></span>
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-slide-1" aria-selected="true" aria-controls="tabs-slide-panel-1">개요</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-slide-2" aria-selected="false" aria-controls="tabs-slide-panel-2" tabindex="-1">팀</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-slide-3" aria-selected="false" aria-controls="tabs-slide-panel-3" tabindex="-1">활동</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-slide-panel-1" aria-labelledby="tabs-slide-1"><p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-slide-panel-2" aria-labelledby="tabs-slide-2" hidden><p>팀 구성원과 역할을 표시합니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-slide-panel-3" aria-labelledby="tabs-slide-3" hidden><p>최근 활동 로그와 타임라인을 보여줍니다.</p></div>
      </div>
    </div>

    <div class="tabs tabs_pill tabs_indicator-slide" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="슬라이드 필 탭">
            <span class="tabs_indicator" aria-hidden="true"></span>
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-slidepill-1" aria-selected="true" aria-controls="tabs-slidepill-panel-1">목록</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-slidepill-2" aria-selected="false" aria-controls="tabs-slidepill-panel-2" tabindex="-1">그리드</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-slidepill-3" aria-selected="false" aria-controls="tabs-slidepill-panel-3" tabindex="-1">보드</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-slidepill-panel-1" aria-labelledby="tabs-slidepill-1"><p class="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-slidepill-panel-2" aria-labelledby="tabs-slidepill-2" hidden><p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-slidepill-panel-3" aria-labelledby="tabs-slidepill-3" hidden><p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p></div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="layout-equal-heading">
  <div class="demo_section-header">
    <h2 id="layout-equal-heading">균등 분할</h2>
    <p><code class="typo_code">tabs_equal</code>로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">

    <div class="tabs tabs_line tabs_equal" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="균등 분할 탭">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-eq-1" aria-selected="true" aria-controls="tabs-eq-panel-1">개요</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-eq-2" aria-selected="false" aria-controls="tabs-eq-panel-2" tabindex="-1">팀 구성</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-eq-3" aria-selected="false" aria-controls="tabs-eq-panel-3" tabindex="-1">활동 로그</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-eq-4" aria-selected="false" aria-controls="tabs-eq-panel-4" tabindex="-1">설정</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-eq-panel-1" aria-labelledby="tabs-eq-1"><p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-eq-panel-2" aria-labelledby="tabs-eq-2" hidden><p>팀 구성원과 역할을 표시합니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-eq-panel-3" aria-labelledby="tabs-eq-3" hidden><p>최근 활동 로그와 타임라인을 보여줍니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-eq-panel-4" aria-labelledby="tabs-eq-4" hidden><p>프로젝트 설정을 관리합니다.</p></div>
      </div>
    </div>

    <div class="tabs tabs_pill tabs_equal tabs_indicator-slide" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="균등 분할 필 탭">
            <span class="tabs_indicator" aria-hidden="true"></span>
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-eqpill-1" aria-selected="true" aria-controls="tabs-eqpill-panel-1">일간</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-eqpill-2" aria-selected="false" aria-controls="tabs-eqpill-panel-2" tabindex="-1">주간</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-eqpill-3" aria-selected="false" aria-controls="tabs-eqpill-panel-3" tabindex="-1">월간</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-eqpill-4" aria-selected="false" aria-controls="tabs-eqpill-panel-4" tabindex="-1">연간</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-eqpill-panel-1" aria-labelledby="tabs-eqpill-1">일간 통계</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-eqpill-panel-2" aria-labelledby="tabs-eqpill-2" hidden>주간 통계</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-eqpill-panel-3" aria-labelledby="tabs-eqpill-3" hidden>월간 통계</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-eqpill-panel-4" aria-labelledby="tabs-eqpill-4" hidden>연간 통계</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="layout-scroll-heading">
  <div class="demo_section-header">
    <h2 id="layout-scroll-heading">네비 스크롤</h2>
    <p><code class="typo_code">tabs_scroll-nav</code>은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_line tabs_scroll-nav tabs_demo-narrow" data-tabs>
      <div class="tabs_bar">
        <button type="button" class="btn btn_outline color_default btn_sm btn_icon-only tabs_nav tabs_nav_prev" aria-label="이전 탭" hidden disabled>
          <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div class="tabs_list-wrap tabs_scroll-viewport">
          <div class="tabs_list" role="tablist" aria-label="네비 스크롤 탭">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-navscroll-1" aria-selected="true" aria-controls="tabs-navscroll-panel-1">홈</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-navscroll-2" aria-selected="false" aria-controls="tabs-navscroll-panel-2" tabindex="-1">제품 소개</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-navscroll-3" aria-selected="false" aria-controls="tabs-navscroll-panel-3" tabindex="-1">솔루션</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-navscroll-4" aria-selected="false" aria-controls="tabs-navscroll-panel-4" tabindex="-1">가격 정책</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-navscroll-5" aria-selected="false" aria-controls="tabs-navscroll-panel-5" tabindex="-1">고객 사례</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-navscroll-6" aria-selected="false" aria-controls="tabs-navscroll-panel-6" tabindex="-1">리소스 센터</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-navscroll-7" aria-selected="false" aria-controls="tabs-navscroll-panel-7" tabindex="-1">기술 지원</button>
          </div>
        </div>
        <button type="button" class="btn btn_outline color_default btn_sm btn_icon-only tabs_nav tabs_nav_next" aria-label="다음 탭" hidden disabled>
          <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-navscroll-panel-1" aria-labelledby="tabs-navscroll-1">홈 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-navscroll-panel-2" aria-labelledby="tabs-navscroll-2" hidden>제품 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-navscroll-panel-3" aria-labelledby="tabs-navscroll-3" hidden>솔루션 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-navscroll-panel-4" aria-labelledby="tabs-navscroll-4" hidden>가격 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-navscroll-panel-5" aria-labelledby="tabs-navscroll-5" hidden>고객 사례 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-navscroll-panel-6" aria-labelledby="tabs-navscroll-6" hidden>리소스 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-navscroll-panel-7" aria-labelledby="tabs-navscroll-7" hidden>지원 패널</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="card-heading">
  <div class="demo_section-header">
    <h2 id="card-heading">카드</h2>
    <p><code class="typo_code">tabs_card</code>로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_card" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="계정 설정">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-card-1" aria-selected="true" aria-controls="tabs-card-panel-1">프로필</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-card-2" aria-selected="false" aria-controls="tabs-card-panel-2" tabindex="-1">보안</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-card-3" aria-selected="false" aria-controls="tabs-card-panel-3" tabindex="-1">알림</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-card-panel-1" aria-labelledby="tabs-card-1"><p>이름, 아바타, 소개 문구를 수정합니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-card-panel-2" aria-labelledby="tabs-card-2" hidden><p>비밀번호 변경과 2단계 인증을 설정합니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-card-panel-3" aria-labelledby="tabs-card-3" hidden><p>이메일·푸시 알림 수신 여부를 관리합니다.</p></div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="pill-heading">
  <div class="demo_section-header">
    <h2 id="pill-heading">필</h2>
    <p><code class="typo_code">tabs_pill</code>로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_pill" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="보기 모드">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-pill-1" aria-selected="true" aria-controls="tabs-pill-panel-1">목록</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-pill-2" aria-selected="false" aria-controls="tabs-pill-panel-2" tabindex="-1">그리드</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-pill-3" aria-selected="false" aria-controls="tabs-pill-panel-3" tabindex="-1">보드</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-pill-panel-1" aria-labelledby="tabs-pill-1"><p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-pill-panel-2" aria-labelledby="tabs-pill-2" hidden><p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-pill-panel-3" aria-labelledby="tabs-pill-3" hidden><p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p></div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">tabs_sm</code> · <code class="typo_code">tabs_lg</code>로 탭 바 스케일을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">

    <div class="tabs tabs_line tabs_sm" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="Small 탭">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-sm-1" aria-selected="true" aria-controls="tabs-sm-panel-1">Small A</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-sm-2" aria-selected="false" aria-controls="tabs-sm-panel-2" tabindex="-1">Small B</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-sm-panel-1" aria-labelledby="tabs-sm-1">Small 탭 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-sm-panel-2" aria-labelledby="tabs-sm-2" hidden>Small 탭 패널 B</div>
      </div>
    </div>

    <div class="tabs tabs_line tabs_lg" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="Large 탭">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-lg-1" aria-selected="true" aria-controls="tabs-lg-panel-1">Large A</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-lg-2" aria-selected="false" aria-controls="tabs-lg-panel-2" tabindex="-1">Large B</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-lg-panel-1" aria-labelledby="tabs-lg-1">Large 탭 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-lg-panel-2" aria-labelledby="tabs-lg-2" hidden>Large 탭 패널 B</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘</h2>
    <p><code class="typo_code">tabs_icon</code>으로 탭 앞에 아이콘을 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_line" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="대시보드 섹션">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-icon-1" aria-selected="true" aria-controls="tabs-icon-panel-1"><svg class="tabs_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg> <span class="tabs_label">대시보드</span></button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-icon-2" aria-selected="false" aria-controls="tabs-icon-panel-2" tabindex="-1"><svg class="tabs_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg> <span class="tabs_label">사용자</span></button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-icon-3" aria-selected="false" aria-controls="tabs-icon-panel-3" tabindex="-1"><svg class="tabs_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg> <span class="tabs_label">문서</span></button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-icon-panel-1" aria-labelledby="tabs-icon-1">대시보드 요약 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-icon-panel-2" aria-labelledby="tabs-icon-2" hidden>사용자 목록 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-icon-panel-3" aria-labelledby="tabs-icon-3" hidden>문서 목록 패널</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="badge-heading">
  <div class="demo_section-header">
    <h2 id="badge-heading">배지</h2>
    <p><code class="typo_code">tabs_badge</code>에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_line" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="알림 센터">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-badge-1" aria-selected="true" aria-controls="tabs-badge-panel-1">전체</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-badge-2" aria-selected="false" aria-controls="tabs-badge-panel-2" tabindex="-1"><span class="tabs_label">읽지 않음</span> <span class="badge badge_count badge_sm color_danger tabs_badge" aria-label="읽지 않은 알림 12건">12</span></button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-badge-3" aria-selected="false" aria-controls="tabs-badge-panel-3" tabindex="-1"><span class="tabs_label">멘션</span> <span class="badge badge_count badge_sm color_primary tabs_badge">3</span></button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-badge-panel-1" aria-labelledby="tabs-badge-1">전체 알림 목록</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-badge-panel-2" aria-labelledby="tabs-badge-2" hidden>읽지 않은 알림 12건</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-badge-panel-3" aria-labelledby="tabs-badge-3" hidden>멘션 알림 3건</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="extra-heading">
  <div class="demo_section-header">
    <h2 id="extra-heading">추가 액션</h2>
    <p><code class="typo_code">tabs_extra</code>로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_line" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="파일 관리">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-extra-1" aria-selected="true" aria-controls="tabs-extra-panel-1">내 파일</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-extra-2" aria-selected="false" aria-controls="tabs-extra-panel-2" tabindex="-1">공유됨</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-extra-3" aria-selected="false" aria-controls="tabs-extra-panel-3" tabindex="-1">최근</button>
          </div>
        </div>
        <div class="tabs_extra">
          <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">업로드</span></button>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-extra-panel-1" aria-labelledby="tabs-extra-1">내 파일 목록</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-extra-panel-2" aria-labelledby="tabs-extra-2" hidden>공유된 파일 목록</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-extra-panel-3" aria-labelledby="tabs-extra-3" hidden>최근 파일 목록</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="scroll-heading">
  <div class="demo_section-header">
    <h2 id="scroll-heading">스크롤바</h2>
    <p><code class="typo_code">tabs_scrollable</code>과 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 <code class="typo_code">tabs_scroll-nav</code>을 사용하세요.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_line tabs_scrollable tabs_demo-narrow" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="긴 탭 목록">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-scroll-1" aria-selected="true" aria-controls="tabs-scroll-panel-1">홈</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-scroll-2" aria-selected="false" aria-controls="tabs-scroll-panel-2" tabindex="-1">제품</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-scroll-3" aria-selected="false" aria-controls="tabs-scroll-panel-3" tabindex="-1">솔루션</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-scroll-4" aria-selected="false" aria-controls="tabs-scroll-panel-4" tabindex="-1">가격</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-scroll-5" aria-selected="false" aria-controls="tabs-scroll-panel-5" tabindex="-1">고객 사례</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-scroll-6" aria-selected="false" aria-controls="tabs-scroll-panel-6" tabindex="-1">리소스</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-scroll-7" aria-selected="false" aria-controls="tabs-scroll-panel-7" tabindex="-1">지원</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-scroll-panel-1" aria-labelledby="tabs-scroll-1">홈 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-scroll-panel-2" aria-labelledby="tabs-scroll-2" hidden>제품 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-scroll-panel-3" aria-labelledby="tabs-scroll-3" hidden>솔루션 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-scroll-panel-4" aria-labelledby="tabs-scroll-4" hidden>가격 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-scroll-panel-5" aria-labelledby="tabs-scroll-5" hidden>고객 사례 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-scroll-panel-6" aria-labelledby="tabs-scroll-6" hidden>리소스 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-scroll-panel-7" aria-labelledby="tabs-scroll-7" hidden>지원 패널</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p><code class="typo_code">disabled</code> 속성 또는 <code class="typo_code">is-disabled</code> 클래스로 탭을 비활성화합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">

    <div class="tabs tabs_line" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="권한별 탭">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-disabled-1" aria-selected="true" aria-controls="tabs-disabled-panel-1">공개</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-disabled-2" aria-selected="false" aria-controls="tabs-disabled-panel-2" tabindex="-1">팀</button>
            <button type="button" class="tabs_tab is-disabled" role="tab" id="tabs-disabled-3" aria-selected="false" aria-controls="tabs-disabled-panel-3" tabindex="-1" disabled aria-disabled="true">관리자</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-disabled-panel-1" aria-labelledby="tabs-disabled-1">공개 콘텐츠</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-disabled-panel-2" aria-labelledby="tabs-disabled-2" hidden>팀 전용 콘텐츠</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-disabled-panel-3" aria-labelledby="tabs-disabled-3" hidden>관리자 전용 콘텐츠</div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="vertical-heading">
  <div class="demo_section-header">
    <h2 id="vertical-heading">수직</h2>
    <p><code class="typo_code">tabs_vertical</code>로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">

    <div class="tabs tabs_line tabs_vertical" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="수직 라인 탭">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-vline-1" aria-selected="true" aria-controls="tabs-vline-panel-1">일반</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-vline-2" aria-selected="false" aria-controls="tabs-vline-panel-2" tabindex="-1">보안</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-vline-3" aria-selected="false" aria-controls="tabs-vline-panel-3" tabindex="-1">결제</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-vline-panel-1" aria-labelledby="tabs-vline-1"><p>일반 설정 패널입니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-vline-panel-2" aria-labelledby="tabs-vline-2" hidden><p>보안 설정 패널입니다.</p></div>
        <div class="tabs_panel" role="tabpanel" id="tabs-vline-panel-3" aria-labelledby="tabs-vline-3" hidden><p>결제 설정 패널입니다.</p></div>
      </div>
    </div>

    <div class="tabs tabs_card tabs_vertical" data-tabs>
      <div class="tabs_bar">
        <div class="tabs_list-wrap">
          <div class="tabs_list" role="tablist" aria-label="수직 카드 탭">
            <button type="button" class="tabs_tab is-active" role="tab" id="tabs-vcard-1" aria-selected="true" aria-controls="tabs-vcard-panel-1">문서</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-vcard-2" aria-selected="false" aria-controls="tabs-vcard-panel-2" tabindex="-1">미디어</button>
            <button type="button" class="tabs_tab" role="tab" id="tabs-vcard-3" aria-selected="false" aria-controls="tabs-vcard-panel-3" tabindex="-1">아카이브</button>
          </div>
        </div>
      </div>
      <div class="tabs_panels">
        <div class="tabs_panel is-active" role="tabpanel" id="tabs-vcard-panel-1" aria-labelledby="tabs-vcard-1">문서 관리 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-vcard-panel-2" aria-labelledby="tabs-vcard-2" hidden>미디어 관리 패널</div>
        <div class="tabs_panel" role="tabpanel" id="tabs-vcard-panel-3" aria-labelledby="tabs-vcard-3" hidden>아카이브 패널</div>
      </div>
    </div>
  </div>
</section>


<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>탭·패널은 <code class="typo_code">aria-controls</code> · <code class="typo_code">aria-labelledby</code>로 연결하고, 비활성 탭이 아닌 선택 탭만 <code class="typo_code">tabindex="0"</code>을 갖습니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;div class="tabs tabs_line" data-tabs&gt;
  &lt;div class="tabs_bar"&gt;
    &lt;div class="tabs_list-wrap"&gt;
      &lt;div class="tabs_list" role="tablist" aria-label="섹션"&gt;
        &lt;button type="button" class="tabs_tab is-active" role="tab"
          id="tab-1" aria-selected="true" aria-controls="panel-1"&gt;개요&lt;/button&gt;
        &lt;button type="button" class="tabs_tab" role="tab"
          id="tab-2" aria-selected="false" aria-controls="panel-2" tabindex="-1"&gt;설정&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="tabs_panels"&gt;
    &lt;div class="tabs_panel is-active" role="tabpanel" id="panel-1" aria-labelledby="tab-1"&gt;…&lt;/div&gt;
    &lt;div class="tabs_panel" role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden&gt;…&lt;/div&gt;
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
          <tr><td><code class="typo_code">tabs · tabs_bar · tabs_list · tabs_tab</code></td><td>루트·탭 바·목록·탭 버튼</td></tr>
          <tr><td><code class="typo_code">tabs_label · tabs_extra · tabs_panels · tabs_panel</code></td><td>라벨·추가·패널 영역</td></tr>
          <tr><td><code class="typo_code">tabs_line · tabs_card · tabs_pill</code></td><td>스타일 변형</td></tr>
          <tr><td><code class="typo_code">tabs_indicator-slide</code></td><td>슬라이드 인디케이터</td></tr>
          <tr><td><code class="typo_code">tabs_indicator</code></td><td>이동하는 인디케이터 요소</td></tr>
          <tr><td><code class="typo_code">tabs_equal · tabs_scroll-nav · tabs_dynamic</code></td><td>균등 분할·네비 스크롤·동적 패널</td></tr>
          <tr><td><code class="typo_code">tabs_list-wrap · tabs_scroll-viewport · tabs_nav</code></td><td>목록 래퍼·스크롤 뷰포트·좌우 네비</td></tr>
          <tr><td><code class="typo_code">tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable</code></td><td>크기·레이아웃</td></tr>
          <tr><td><code class="typo_code">is-active · is-disabled</code></td><td>탭·패널 상태</td></tr>
          <tr><td><code class="typo_code">data-tabs</code></td><td>키보드·포커스 JS</td></tr>
          <tr><td><code class="typo_code">role="tablist" · role="tab" · role="tabpanel"</code></td><td>접근성</td></tr>
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
          <tr><td><code class="typo_code">--tabs-gap</code> · <code class="typo_code">--tabs-tab-padding-x</code></td><td>—</td><td>탭 간격·패딩</td></tr>
          <tr><td><code class="typo_code">--tabs-nav-size</code></td><td>—</td><td>네비 스크롤 버튼 크기</td></tr>
          <tr><td><code class="typo_code">--tabs-indicator-height</code> · <code class="typo_code">--tabs-indicator-transition</code></td><td>—</td><td>line 인디케이터·슬라이드 전환</td></tr>
          <tr><td><code class="typo_code">--tabs-panel-padding-y</code></td><td>—</td><td>패널 패딩</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,a=wa(ha),w=ga(ha),xa={title:"Components/네비게이션/Tabs",id:"components-tabs",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"같은 맥락의 콘텐츠를 탭으로 전환하는 컴포넌트입니다. 라인·카드·필 스킨, 균등 분할·네비 스크롤 레이아웃, 아이콘·배지를 지원합니다."}}}},s={name:"기본 (라인)",render:()=>e(a[0]),parameters:{docs:{...t(a[0].previewHtml).docs,description:{story:a[0].description}}}},n={name:"동적 패널",render:()=>e(a[1]),parameters:{docs:{...t(a[1].previewHtml).docs,description:{story:a[1].description}}}},l={name:"슬라이드 인디케이터",render:()=>e(a[2]),parameters:{docs:{...t(a[2].previewHtml).docs,description:{story:a[2].description}}}},i={name:"균등 분할",render:()=>e(a[3]),parameters:{docs:{...t(a[3].previewHtml).docs,description:{story:a[3].description}}}},d={name:"네비 스크롤",render:()=>e(a[4]),parameters:{docs:{...t(a[4].previewHtml).docs,description:{story:a[4].description}}}},o={name:"카드",render:()=>e(a[5]),parameters:{docs:{...t(a[5].previewHtml).docs,description:{story:a[5].description}}}},b={name:"필",render:()=>e(a[6]),parameters:{docs:{...t(a[6].previewHtml).docs,description:{story:a[6].description}}}},r={name:"크기",render:()=>e(a[7]),parameters:{docs:{...t(a[7].previewHtml).docs,description:{story:a[7].description}}}},c={name:"아이콘",render:()=>e(a[8]),parameters:{docs:{...t(a[8].previewHtml).docs,description:{story:a[8].description}}}},p={name:"배지",render:()=>e(a[9]),parameters:{docs:{...t(a[9].previewHtml).docs,description:{story:a[9].description}}}},v={name:"추가 액션",render:()=>e(a[10]),parameters:{docs:{...t(a[10].previewHtml).docs,description:{story:a[10].description}}}},u={name:"스크롤바",render:()=>e(a[11]),parameters:{docs:{...t(a[11].previewHtml).docs,description:{story:a[11].description}}}},_={name:"비활성",render:()=>e(a[12]),parameters:{docs:{...t(a[12].previewHtml).docs,description:{story:a[12].description}}}},m={name:"수직",render:()=>e(a[13]),parameters:{docs:{...t(a[13].previewHtml).docs,description:{story:a[13].description}}}},y={name:"마크업",tags:["!dev"],render:()=>e(w[0]),parameters:{docs:{source:{code:null},description:{story:w[0].description}}}},h={name:"클래스 · 속성",tags:["!dev"],render:()=>e(w[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},g={name:"디자인 토큰",tags:["!dev"],render:()=>e(w[2]),parameters:{docs:{source:{code:null},description:{story:"Tabs 크기·간격·인디케이터에 사용하는 CSS 변수입니다."}}}};var C,x,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '기본 (라인)',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var f,S,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '동적 패널',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var q,H,k;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '슬라이드 인디케이터',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(k=(H=l.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var A,T,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '균등 분할',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var M,L,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '네비 스크롤',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var O,z,J;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '카드',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(J=(z=o.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var N,j,G;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '필',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(G=(j=b.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var I,K,P;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(P=(K=r.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,R,U;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,W,X;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '배지',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '추가 액션',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var aa,ea,ta;u.parameters={...u.parameters,docs:{...(aa=u.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: '스크롤바',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(ta=(ea=u.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var sa,na,la;_.parameters={..._.parameters,docs:{...(sa=_.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: '비활성',
  render: () => renderDemo(demos[12]),
  parameters: {
    docs: {
      ...gulpSource(demos[12].previewHtml).docs,
      description: {
        story: demos[12].description
      }
    }
  }
}`,...(la=(na=_.parameters)==null?void 0:na.docs)==null?void 0:la.source}}};var ia,da,oa;m.parameters={...m.parameters,docs:{...(ia=m.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: '수직',
  render: () => renderDemo(demos[13]),
  parameters: {
    docs: {
      ...gulpSource(demos[13].previewHtml).docs,
      description: {
        story: demos[13].description
      }
    }
  }
}`,...(oa=(da=m.parameters)==null?void 0:da.docs)==null?void 0:oa.source}}};var ba,ra,ca;y.parameters={...y.parameters,docs:{...(ba=y.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(ca=(ra=y.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var pa,va,ua;h.parameters={...h.parameters,docs:{...(pa=h.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ua=(va=h.parameters)==null?void 0:va.docs)==null?void 0:ua.source}}};var _a,ma,ya;g.parameters={...g.parameters,docs:{...(_a=g.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Tabs 크기·간격·인디케이터에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(ya=(ma=g.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};const Da=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","Demo12","Demo13","ApiMarkup","ApiClasses","ApiTokens"];export{h as ApiClasses,y as ApiMarkup,g as ApiTokens,s as Demo0,n as Demo1,v as Demo10,u as Demo11,_ as Demo12,m as Demo13,l as Demo2,i as Demo3,d as Demo4,o as Demo5,b as Demo6,r as Demo7,c as Demo8,p as Demo9,Da as __namedExportsOrder,xa as default};

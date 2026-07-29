import{b as n,g as e,e as at,c as st}from"./gulp-demos-C1efgjoy.js";const nt=`<!-- @meta
title: Date Picker | HTML Components
activeNav: date-picker
pageTitle: Date Picker
-->
<div class="page_intro">
  <h1>Date Picker</h1>
  <p class="lead">날짜·기간을 선택하는 Date Picker 컴포넌트입니다. 네이티브 <code>&lt;input type="date"&gt;</code>와 커스텀 트리거·캘린더 패널 <code>date_picker</code> 두 가지 유형을 제공합니다. Calendar 컴포넌트와 조합해 팝오버·인라인·기간 선택 UI를 구성합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="type-heading">
  <div class="demo_section-header">
    <h2 id="type-heading">유형</h2>
    <p>네이티브 input type="date"는 브라우저 기본 UI를 사용합니다. date_picker는 읽기 전용 입력과 캘린더 아이콘 버튼으로 트리거하고, date_picker_panel에 Calendar를 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-native">네이티브 — input type="date"</label>
      <input type="date" class="input" id="dp-type-native">
      <p class="form_field-hint">간단한 폼·모바일 환경에 적합합니다.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-type-custom">커스텀 — date_picker</label>
      <div class="date_picker date_picker_fit">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input date_picker_placeholder" id="dp-type-custom" value="" placeholder="날짜를 선택하세요" readonly aria-haspopup="dialog" aria-expanded="false" aria-label="날짜 선택">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
      <p class="form_field-hint">커스텀 캘린더·기간 선택·푸터 액션 등 확장 UI에 사용합니다.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>form_field와 date_picker를 조합한 단일 날짜 선택 필드입니다. date_picker_trigger 안에 date_picker_input · date_picker_btn을 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-basic">예약 날짜</label>
      <div class="date_picker date_picker_fit">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-basic" value="2024-06-18" readonly aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
      <p class="form_field-hint">체크인 날짜를 선택해 주세요.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="open-heading">
  <div class="demo_section-header">
    <h2 id="open-heading">패널 열림</h2>
    <p>is-open 클래스와 aria-expanded="true"로 캘린더 패널이 열린 상태를 표현합니다. date_picker_panel에는 calendar_no-header · calendar_compact를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-open">날짜</label>
      <div class="date_picker date_picker_fit is-open">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-open" value="2024-06-18" readonly aria-haspopup="dialog" aria-expanded="true">
          <button type="button" class="date_picker_btn" aria-label="캘린더 닫기" aria-expanded="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
        <div class="date_picker_panel" role="dialog" aria-label="날짜 선택">
          <div class="calendar calendar_no-header calendar_compact calendar_borderless" role="application" aria-label="2024년 6월">
            <div class="calendar_header">
              <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <span class="calendar_title">2024년 6월</span>
              <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
            <div class="calendar_weekdays" aria-hidden="true">
              <span class="calendar_weekday">일</span>
              <span class="calendar_weekday">월</span>
              <span class="calendar_weekday">화</span>
              <span class="calendar_weekday">수</span>
              <span class="calendar_weekday">목</span>
              <span class="calendar_weekday">금</span>
              <span class="calendar_weekday">토</span>
            </div>
            <div class="calendar_grid" role="grid">
              <button type="button" class="calendar_day is-other-month" disabled>26</button>
              <button type="button" class="calendar_day is-other-month" disabled>27</button>
              <button type="button" class="calendar_day is-other-month" disabled>28</button>
              <button type="button" class="calendar_day is-other-month" disabled>29</button>
              <button type="button" class="calendar_day is-other-month" disabled>30</button>
              <button type="button" class="calendar_day is-other-month" disabled>31</button>
              <button type="button" class="calendar_day is-weekend">1</button>
              <button type="button" class="calendar_day is-weekend">2</button>
              <button type="button" class="calendar_day">3</button>
              <button type="button" class="calendar_day">4</button>
              <button type="button" class="calendar_day">5</button>
              <button type="button" class="calendar_day">6</button>
              <button type="button" class="calendar_day">7</button>
              <button type="button" class="calendar_day is-weekend">8</button>
              <button type="button" class="calendar_day is-weekend">9</button>
              <button type="button" class="calendar_day">10</button>
              <button type="button" class="calendar_day">11</button>
              <button type="button" class="calendar_day">12</button>
              <button type="button" class="calendar_day">13</button>
              <button type="button" class="calendar_day">14</button>
              <button type="button" class="calendar_day is-today" aria-current="date">15</button>
              <button type="button" class="calendar_day">16</button>
              <button type="button" class="calendar_day">17</button>
              <button type="button" class="calendar_day is-selected" aria-selected="true">18</button>
              <button type="button" class="calendar_day">19</button>
              <button type="button" class="calendar_day">20</button>
              <button type="button" class="calendar_day">21</button>
              <button type="button" class="calendar_day is-weekend">22</button>
              <button type="button" class="calendar_day is-weekend">23</button>
              <button type="button" class="calendar_day">24</button>
              <button type="button" class="calendar_day">25</button>
              <button type="button" class="calendar_day">26</button>
              <button type="button" class="calendar_day">27</button>
              <button type="button" class="calendar_day">28</button>
              <button type="button" class="calendar_day is-weekend">29</button>
              <button type="button" class="calendar_day is-weekend">30</button>
              <button type="button" class="calendar_day is-other-month" disabled>1</button>
              <button type="button" class="calendar_day is-other-month" disabled>2</button>
              <button type="button" class="calendar_day is-other-month" disabled>3</button>
              <button type="button" class="calendar_day is-other-month" disabled>4</button>
              <button type="button" class="calendar_day is-other-month" disabled>5</button>
              <button type="button" class="calendar_day is-other-month is-weekend" disabled>6</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="footer-heading">
  <div class="demo_section-header">
    <h2 id="footer-heading">푸터 액션</h2>
    <p>calendar_footer로 오늘 · 초기화 · 확인 버튼을 제공합니다. 날짜 확정이 필요한 폼에 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-footer">일정 날짜</label>
      <div class="date_picker date_picker_fit is-open">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-footer" value="2024-06-18" readonly aria-haspopup="dialog" aria-expanded="true">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
        <div class="date_picker_panel" role="dialog" aria-label="날짜 선택">
          <div class="calendar calendar_compact calendar_borderless" role="application" aria-label="2024년 6월">
            <div class="calendar_header">
              <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <span class="calendar_title">2024년 6월</span>
              <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
            <div class="calendar_weekdays" aria-hidden="true">
              <span class="calendar_weekday">일</span>
              <span class="calendar_weekday">월</span>
              <span class="calendar_weekday">화</span>
              <span class="calendar_weekday">수</span>
              <span class="calendar_weekday">목</span>
              <span class="calendar_weekday">금</span>
              <span class="calendar_weekday">토</span>
            </div>
            <div class="calendar_grid" role="grid">
              <button type="button" class="calendar_day is-other-month" disabled>26</button>
              <button type="button" class="calendar_day is-other-month" disabled>27</button>
              <button type="button" class="calendar_day is-other-month" disabled>28</button>
              <button type="button" class="calendar_day is-other-month" disabled>29</button>
              <button type="button" class="calendar_day is-other-month" disabled>30</button>
              <button type="button" class="calendar_day is-other-month" disabled>31</button>
              <button type="button" class="calendar_day">1</button>
              <button type="button" class="calendar_day">2</button>
              <button type="button" class="calendar_day">3</button>
              <button type="button" class="calendar_day">4</button>
              <button type="button" class="calendar_day">5</button>
              <button type="button" class="calendar_day">6</button>
              <button type="button" class="calendar_day">7</button>
              <button type="button" class="calendar_day">8</button>
              <button type="button" class="calendar_day">9</button>
              <button type="button" class="calendar_day">10</button>
              <button type="button" class="calendar_day">11</button>
              <button type="button" class="calendar_day">12</button>
              <button type="button" class="calendar_day">13</button>
              <button type="button" class="calendar_day">14</button>
              <button type="button" class="calendar_day is-today" aria-current="date">15</button>
              <button type="button" class="calendar_day">16</button>
              <button type="button" class="calendar_day">17</button>
              <button type="button" class="calendar_day is-selected" aria-selected="true">18</button>
              <button type="button" class="calendar_day">19</button>
              <button type="button" class="calendar_day">20</button>
              <button type="button" class="calendar_day">21</button>
              <button type="button" class="calendar_day">22</button>
              <button type="button" class="calendar_day">23</button>
              <button type="button" class="calendar_day">24</button>
              <button type="button" class="calendar_day">25</button>
              <button type="button" class="calendar_day">26</button>
              <button type="button" class="calendar_day">27</button>
              <button type="button" class="calendar_day">28</button>
              <button type="button" class="calendar_day">29</button>
              <button type="button" class="calendar_day">30</button>
              <button type="button" class="calendar_day is-other-month" disabled>1</button>
              <button type="button" class="calendar_day is-other-month" disabled>2</button>
              <button type="button" class="calendar_day is-other-month" disabled>3</button>
              <button type="button" class="calendar_day is-other-month" disabled>4</button>
              <button type="button" class="calendar_day is-other-month" disabled>5</button>
              <button type="button" class="calendar_day is-other-month" disabled>6</button>
            </div>
            <div class="calendar_footer">
              <button type="button" class="btn btn_text color_primary btn_sm"><span class="btn_label">오늘</span></button>
              <div class="calendar_footer-actions">
                <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">초기화</span></button>
                <button type="button" class="btn btn_filled color_primary btn_sm"><span class="btn_label">확인</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="range-heading">
  <div class="demo_section-header">
    <h2 id="range-heading">기간 선택</h2>
    <p>date_picker_range로 시작·종료 date_picker를 나란히 배치합니다. date_picker_sep로 구분 기호를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field">
      <span class="form_field-label" id="dp-range-label">조회 기간</span>
      <div class="date_picker_range" role="group" aria-labelledby="dp-range-label">
        <div class="date_picker">
          <div class="date_picker_trigger">
            <input type="text" class="date_picker_input" value="2024-06-10" readonly aria-label="시작일" aria-haspopup="dialog" aria-expanded="false">
            <button type="button" class="date_picker_btn" aria-label="시작일 선택">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </button>
          </div>
        </div>
        <span class="date_picker_sep" aria-hidden="true">~</span>
        <div class="date_picker">
          <div class="date_picker_trigger">
            <input type="text" class="date_picker_input" value="2024-06-18" readonly aria-label="종료일" aria-haspopup="dialog" aria-expanded="false">
            <button type="button" class="date_picker_btn" aria-label="종료일 선택">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p class="form_field-hint">최대 90일까지 조회할 수 있습니다.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="range-panel-heading">
  <div class="demo_section-header">
    <h2 id="range-panel-heading">이중 캘린더 패널</h2>
    <p>date_picker_panel-wide에 calendar_group을 배치해 두 달을 한 패널에서 기간을 선택합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field">
      <span class="form_field-label" id="dp-range-panel-label">숙박 기간</span>
      <div class="date_picker date_picker_block is-open">
        <div class="date_picker_trigger" style="max-width: 20rem;">
          <input type="text" class="date_picker_input" value="2024-06-10 ~ 2024-07-06" readonly aria-labelledby="dp-range-panel-label" aria-haspopup="dialog" aria-expanded="true">
          <button type="button" class="date_picker_btn" aria-label="기간 선택">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
        <div class="date_picker_panel date_picker_panel-wide" role="dialog" aria-label="기간 선택">
          <div class="calendar_group">
            <div class="calendar calendar_compact calendar_borderless" role="application" aria-label="2024년 6월">
              <div class="calendar_header">
                <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <span class="calendar_title">2024년 6월</span>
              </div>
              <div class="calendar_weekdays" aria-hidden="true">
                <span class="calendar_weekday">일</span>
                <span class="calendar_weekday">월</span>
                <span class="calendar_weekday">화</span>
                <span class="calendar_weekday">수</span>
                <span class="calendar_weekday">목</span>
                <span class="calendar_weekday">금</span>
                <span class="calendar_weekday">토</span>
              </div>
              <div class="calendar_grid" role="grid">
                <button type="button" class="calendar_day is-other-month" disabled>26</button>
                <button type="button" class="calendar_day is-other-month" disabled>27</button>
                <button type="button" class="calendar_day is-other-month" disabled>28</button>
                <button type="button" class="calendar_day is-other-month" disabled>29</button>
                <button type="button" class="calendar_day is-other-month" disabled>30</button>
                <button type="button" class="calendar_day is-other-month" disabled>31</button>
                <button type="button" class="calendar_day">1</button>
                <button type="button" class="calendar_day">2</button>
                <button type="button" class="calendar_day">3</button>
                <button type="button" class="calendar_day">4</button>
                <button type="button" class="calendar_day">5</button>
                <button type="button" class="calendar_day">6</button>
                <button type="button" class="calendar_day">7</button>
                <button type="button" class="calendar_day">8</button>
                <button type="button" class="calendar_day">9</button>
                <button type="button" class="calendar_day is-selected is-range-start" aria-selected="true">10</button>
                <button type="button" class="calendar_day is-in-range">11</button>
                <button type="button" class="calendar_day is-in-range">12</button>
                <button type="button" class="calendar_day is-in-range">13</button>
                <button type="button" class="calendar_day is-in-range">14</button>
                <button type="button" class="calendar_day is-in-range is-today" aria-current="date">15</button>
                <button type="button" class="calendar_day is-in-range">16</button>
                <button type="button" class="calendar_day is-in-range">17</button>
                <button type="button" class="calendar_day is-in-range">18</button>
                <button type="button" class="calendar_day is-in-range">19</button>
                <button type="button" class="calendar_day is-in-range">20</button>
                <button type="button" class="calendar_day is-in-range">21</button>
                <button type="button" class="calendar_day is-in-range">22</button>
                <button type="button" class="calendar_day is-in-range">23</button>
                <button type="button" class="calendar_day is-in-range">24</button>
                <button type="button" class="calendar_day is-in-range">25</button>
                <button type="button" class="calendar_day is-in-range">26</button>
                <button type="button" class="calendar_day is-in-range">27</button>
                <button type="button" class="calendar_day is-in-range">28</button>
                <button type="button" class="calendar_day is-in-range">29</button>
                <button type="button" class="calendar_day is-in-range">30</button>
                <button type="button" class="calendar_day is-in-range is-other-month" disabled>1</button>
                <button type="button" class="calendar_day is-in-range is-other-month" disabled>2</button>
                <button type="button" class="calendar_day is-in-range is-other-month" disabled>3</button>
                <button type="button" class="calendar_day is-in-range is-other-month" disabled>4</button>
                <button type="button" class="calendar_day is-in-range is-other-month" disabled>5</button>
                <button type="button" class="calendar_day is-in-range is-other-month" disabled>6</button>
              </div>
            </div>
            <div class="calendar calendar_compact calendar_borderless" role="application" aria-label="2024년 7월">
              <div class="calendar_header">
                <span class="calendar_title">2024년 7월</span>
                <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
              <div class="calendar_weekdays" aria-hidden="true">
                <span class="calendar_weekday">일</span>
                <span class="calendar_weekday">월</span>
                <span class="calendar_weekday">화</span>
                <span class="calendar_weekday">수</span>
                <span class="calendar_weekday">목</span>
                <span class="calendar_weekday">금</span>
                <span class="calendar_weekday">토</span>
              </div>
              <div class="calendar_grid" role="grid">
                <button type="button" class="calendar_day is-in-range is-other-month">30</button>
                <button type="button" class="calendar_day is-in-range">1</button>
                <button type="button" class="calendar_day is-in-range">2</button>
                <button type="button" class="calendar_day is-in-range">3</button>
                <button type="button" class="calendar_day is-in-range">4</button>
                <button type="button" class="calendar_day is-in-range">5</button>
                <button type="button" class="calendar_day is-selected is-range-end" aria-selected="true">6</button>
                <button type="button" class="calendar_day">7</button>
                <button type="button" class="calendar_day">8</button>
                <button type="button" class="calendar_day">9</button>
                <button type="button" class="calendar_day">10</button>
                <button type="button" class="calendar_day">11</button>
                <button type="button" class="calendar_day">12</button>
                <button type="button" class="calendar_day">13</button>
                <button type="button" class="calendar_day">14</button>
                <button type="button" class="calendar_day">15</button>
                <button type="button" class="calendar_day">16</button>
                <button type="button" class="calendar_day">17</button>
                <button type="button" class="calendar_day">18</button>
                <button type="button" class="calendar_day">19</button>
                <button type="button" class="calendar_day">20</button>
                <button type="button" class="calendar_day">21</button>
                <button type="button" class="calendar_day">22</button>
                <button type="button" class="calendar_day">23</button>
                <button type="button" class="calendar_day">24</button>
                <button type="button" class="calendar_day">25</button>
                <button type="button" class="calendar_day">26</button>
                <button type="button" class="calendar_day">27</button>
                <button type="button" class="calendar_day">28</button>
                <button type="button" class="calendar_day">29</button>
                <button type="button" class="calendar_day">30</button>
                <button type="button" class="calendar_day">31</button>
                <button type="button" class="calendar_day is-other-month" disabled>1</button>
                <button type="button" class="calendar_day is-other-month" disabled>2</button>
                <button type="button" class="calendar_day is-other-month" disabled>3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="inline-heading">
  <div class="demo_section-header">
    <h2 id="inline-heading">인라인</h2>
    <p>date_picker_inline은 트리거를 숨기고 캘린더를 항상 표시합니다. 사이드 패널·필터 영역 등에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="date_picker date_picker_inline">
      <div class="date_picker_panel" role="application" aria-label="날짜 선택">
        <div class="calendar calendar_compact" role="application" aria-label="2024년 6월">
          <div class="calendar_header">
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <span class="calendar_title">2024년 6월</span>
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          <div class="calendar_weekdays" aria-hidden="true">
            <span class="calendar_weekday">일</span>
            <span class="calendar_weekday">월</span>
            <span class="calendar_weekday">화</span>
            <span class="calendar_weekday">수</span>
            <span class="calendar_weekday">목</span>
            <span class="calendar_weekday">금</span>
            <span class="calendar_weekday">토</span>
          </div>
          <div class="calendar_grid" role="grid">
            <button type="button" class="calendar_day is-other-month" disabled>26</button>
            <button type="button" class="calendar_day is-other-month" disabled>27</button>
            <button type="button" class="calendar_day is-other-month" disabled>28</button>
            <button type="button" class="calendar_day is-other-month" disabled>29</button>
            <button type="button" class="calendar_day is-other-month" disabled>30</button>
            <button type="button" class="calendar_day is-other-month" disabled>31</button>
            <button type="button" class="calendar_day">1</button>
            <button type="button" class="calendar_day">2</button>
            <button type="button" class="calendar_day">3</button>
            <button type="button" class="calendar_day">4</button>
            <button type="button" class="calendar_day">5</button>
            <button type="button" class="calendar_day">6</button>
            <button type="button" class="calendar_day">7</button>
            <button type="button" class="calendar_day">8</button>
            <button type="button" class="calendar_day">9</button>
            <button type="button" class="calendar_day">10</button>
            <button type="button" class="calendar_day">11</button>
            <button type="button" class="calendar_day">12</button>
            <button type="button" class="calendar_day">13</button>
            <button type="button" class="calendar_day">14</button>
            <button type="button" class="calendar_day is-today" aria-current="date">15</button>
            <button type="button" class="calendar_day">16</button>
            <button type="button" class="calendar_day">17</button>
            <button type="button" class="calendar_day is-selected" aria-selected="true">18</button>
            <button type="button" class="calendar_day">19</button>
            <button type="button" class="calendar_day">20</button>
            <button type="button" class="calendar_day">21</button>
            <button type="button" class="calendar_day">22</button>
            <button type="button" class="calendar_day">23</button>
            <button type="button" class="calendar_day">24</button>
            <button type="button" class="calendar_day">25</button>
            <button type="button" class="calendar_day">26</button>
            <button type="button" class="calendar_day">27</button>
            <button type="button" class="calendar_day">28</button>
            <button type="button" class="calendar_day">29</button>
            <button type="button" class="calendar_day">30</button>
            <button type="button" class="calendar_day is-other-month" disabled>1</button>
            <button type="button" class="calendar_day is-other-month" disabled>2</button>
            <button type="button" class="calendar_day is-other-month" disabled>3</button>
            <button type="button" class="calendar_day is-other-month" disabled>4</button>
            <button type="button" class="calendar_day is-other-month" disabled>5</button>
            <button type="button" class="calendar_day is-other-month" disabled>6</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>date_picker_sm · date_picker(기본) · date_picker_lg로 트리거 padding·font-size·아이콘 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-size-sm">Small</label>
      <div class="date_picker date_picker_sm date_picker_fit">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-size-sm" value="2024-06-18" readonly aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-size-md">Medium</label>
      <div class="date_picker date_picker_fit">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-size-md" value="2024-06-18" readonly aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-size-lg">Large</label>
      <div class="date_picker date_picker_lg date_picker_fit">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-size-lg" value="2024-06-18" readonly aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="clear-heading">
  <div class="demo_section-header">
    <h2 id="clear-heading">값 초기화</h2>
    <p>date_picker_clear 버튼으로 선택된 날짜를 지울 수 있습니다. 입력 필드와 캘린더 아이콘 사이에 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-clear">필터 날짜</label>
      <div class="date_picker date_picker_fit">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-clear" value="2024-06-18" readonly aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_clear" aria-label="날짜 지우기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>is-disabled · is-error · is-success · date_picker_placeholder로 입력 상태를 표현합니다. 오류·성공 메시지는 form_field-error · form_field-success와 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-placeholder">플레이스홀더</label>
      <div class="date_picker date_picker_fit">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input date_picker_placeholder" id="dp-state-placeholder" value="" placeholder="날짜를 선택하세요" readonly aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-disabled">비활성</label>
      <div class="date_picker date_picker_fit is-disabled">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-state-disabled" value="2024-06-18" readonly disabled aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" disabled aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
      <p class="form_field-hint">is-disabled 클래스와 disabled 속성으로 선택을 막습니다.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-error">에러</label>
      <div class="date_picker date_picker_fit is-error">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input date_picker_placeholder" id="dp-state-error" value="" placeholder="날짜를 선택하세요" readonly aria-invalid="true" aria-describedby="dp-state-error-msg" aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
      <p class="form_field-error" id="dp-state-error-msg" role="alert">날짜를 선택해 주세요.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="dp-state-success">성공</label>
      <div class="date_picker date_picker_fit is-success">
        <div class="date_picker_trigger">
          <input type="text" class="date_picker_input" id="dp-state-success" value="2024-06-18" readonly aria-invalid="false" aria-describedby="dp-state-success-msg" aria-haspopup="dialog" aria-expanded="false">
          <button type="button" class="date_picker_btn" aria-label="캘린더 열기">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </button>
        </div>
      </div>
      <p class="form_field-success" id="dp-state-success-msg" role="status">예약 가능한 날짜입니다.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="example-heading">
  <div class="demo_section-header">
    <h2 id="example-heading">조합 예시</h2>
    <p>form_inline과 date_picker_range를 조합한 검색 필터 폼입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <form class="form form_inline" action="#" method="get">
      <div class="form_field">
        <label class="form_field-label" for="dp-example-keyword">키워드</label>
        <input type="search" class="input" id="dp-example-keyword" placeholder="검색어" style="min-width: 10rem;">
      </div>
      <div class="form_field">
        <span class="form_field-label" id="dp-example-range-label">기간</span>
        <div class="date_picker_range" role="group" aria-labelledby="dp-example-range-label">
          <div class="date_picker date_picker_sm" style="min-width: 9rem;">
            <div class="date_picker_trigger">
              <input type="text" class="date_picker_input date_picker_placeholder" value="" placeholder="시작일" readonly aria-label="시작일" aria-haspopup="dialog" aria-expanded="false">
              <button type="button" class="date_picker_btn" aria-label="시작일 선택">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
              </button>
            </div>
          </div>
          <span class="date_picker_sep" aria-hidden="true">~</span>
          <div class="date_picker" style="min-width: 9rem;">
            <div class="date_picker_trigger">
              <input type="text" class="date_picker_input date_picker_placeholder" value="" placeholder="종료일" readonly aria-label="종료일" aria-haspopup="dialog" aria-expanded="false">
              <button type="button" class="date_picker_btn" aria-label="종료일 선택">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="form_actions">
        <button type="submit" class="btn btn_filled color_primary"><span class="btn_label">검색</span></button>
        <button type="reset" class="btn btn_ghost"><span class="btn_label">초기화</span></button>
      </div>
    </form>
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
            <td><code class="typo_code">date_picker</code></td>
            <td>루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">date_picker_sm</code> · <code class="typo_code">date_picker_lg</code> · <code class="typo_code">date_picker_fit</code> · <code class="typo_code">date_picker_block</code></td>
            <td>크기·너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">date_picker_inline</code></td>
            <td>인라인 패널</td>
          </tr>
          <tr>
            <td><code class="typo_code">date_picker_trigger</code> · <code class="typo_code">date_picker_input</code> · <code class="typo_code">date_picker_btn</code></td>
            <td>트리거 영역</td>
          </tr>
          <tr>
            <td><code class="typo_code">date_picker_clear</code> · <code class="typo_code">date_picker_placeholder</code></td>
            <td>지우기(data-ripple="surface")·placeholder</td>
          </tr>
          <tr>
            <td><code class="typo_code">date_picker_panel</code> · <code class="typo_code">date_picker_panel-wide</code></td>
            <td>드롭다운 패널</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-open</code> · <code class="typo_code">is-error</code> · <code class="typo_code">is-success</code> · <code class="typo_code">is-disabled</code></td>
            <td>상태</td>
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
            <td><code class="typo_code">--date-picker-input-padding-y</code> · <code class="typo_code">--date-picker-input-padding-x</code></td>
            <td>0.5rem · 0.75rem</td>
            <td>입력 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--date-picker-btn-size</code> · <code class="typo_code">--date-picker-icon-size</code></td>
            <td>2.25rem · 1rem</td>
            <td>캘린더 버튼·아이콘</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,t=at(nt),et=st(nt),ot={title:"Components/폼/DatePicker",id:"components-date-picker",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'날짜·기간을 선택하는 Date Picker 컴포넌트입니다. 네이티브 &lt;input type="date"&gt;와 커스텀 트리거·캘린더 패널 date_picker 두 가지 유형을 제공합니다. Calendar 컴포넌트와 조합해 팝오버·인라인·기간 선택 UI를 구성합니다.'}}}},a={name:"유형",render:()=>n(t[0]),parameters:{docs:{...e(t[0].previewHtml).docs,description:{story:t[0].description}}}},s={name:"기본",render:()=>n(t[1]),parameters:{docs:{...e(t[1].previewHtml).docs,description:{story:t[1].description}}}},d={name:"패널 열림",render:()=>n(t[2]),parameters:{docs:{...e(t[2].previewHtml).docs,description:{story:t[2].description}}}},o={name:"푸터 액션",render:()=>n(t[3]),parameters:{docs:{...e(t[3].previewHtml).docs,description:{story:t[3].description}}}},r={name:"기간 선택",render:()=>n(t[4]),parameters:{docs:{...e(t[4].previewHtml).docs,description:{story:t[4].description}}}},l={name:"이중 캘린더 패널",render:()=>n(t[5]),parameters:{docs:{...e(t[5].previewHtml).docs,description:{story:t[5].description}}}},c={name:"인라인",render:()=>n(t[6]),parameters:{docs:{...e(t[6].previewHtml).docs,description:{story:t[6].description}}}},i={name:"크기",render:()=>n(t[7]),parameters:{docs:{...e(t[7].previewHtml).docs,description:{story:t[7].description}}}},p={name:"값 초기화",render:()=>n(t[8]),parameters:{docs:{...e(t[8].previewHtml).docs,description:{story:t[8].description}}}},u={name:"상태",render:()=>n(t[9]),parameters:{docs:{...e(t[9].previewHtml).docs,description:{story:t[9].description}}}},b={name:"조합 예시",render:()=>n(t[10]),parameters:{docs:{...e(t[10].previewHtml).docs,description:{story:t[10].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>n(et[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},y={name:"디자인 토큰",tags:["!dev"],render:()=>n(et[1]),parameters:{docs:{source:{code:null},description:{story:"Date Picker 입력·패널·버튼에 사용하는 CSS 변수입니다."}}}};var m,v,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '유형',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,k,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var w,x,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '패널 열림',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,M,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '푸터 액션',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(B=(M=o.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var S,H,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기간 선택',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(A=(H=r.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var z,P,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '이중 캘린더 패널',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var T,O,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '인라인',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(I=(O=c.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var L,U,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(U=i.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var N,j,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '값 초기화',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '상태',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,V;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(V=(R=b.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,X,Y;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,tt;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Date Picker 입력·패널·버튼에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(tt=($=y.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};const rt=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","ApiClasses","ApiTokens"];export{_ as ApiClasses,y as ApiTokens,a as Demo0,s as Demo1,b as Demo10,d as Demo2,o as Demo3,r as Demo4,l as Demo5,c as Demo6,i as Demo7,p as Demo8,u as Demo9,rt as __namedExportsOrder,ot as default};

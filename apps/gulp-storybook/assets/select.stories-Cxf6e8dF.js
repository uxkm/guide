import{b as n,c as t,e as se,d as oe}from"./gulp-demos-uIKTVH8x.js";const ne=`<!-- @meta
title: Select | HTML Components
activeNav: select
pageTitle: Select
-->
<div class="page_intro">
  <h1>Select</h1>
  <p class="lead">옵션 목록에서 값을 선택하는 Select 컴포넌트입니다. 네이티브 <code>&lt;select class="input"&gt;</code>와 커스텀 드롭다운 트리거 <code>btn_select</code> · <code>btn_select-text</code> 두 가지 유형을 제공합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="type-heading">
  <div class="demo_section-header">
    <h2 id="type-heading">유형</h2>
    <p>네이티브 select는 브라우저 기본 목록을 사용합니다. 커스텀 트리거는 Dropdown·Popover와 조합해 검색·다중 선택 등 확장 UI에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="select-type-native">네이티브 — select.input</label>
      <select class="input" id="select-type-native">
        <option value="">선택하세요</option>
        <option>옵션 1</option>
        <option selected>옵션 2</option>
        <option>옵션 3</option>
      </select>
      <p class="form_field-hint">폼 필드·간단한 선택에 권장합니다.</p>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">커스텀 — btn_select</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">커스텀 — btn_select-text</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
    <p class="form_field-hint">btn_select는 input과 유사한 박스형, btn_select-text는 정렬·필터용 텍스트형 트리거입니다.</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>레이블과 힌트 텍스트가 포함된 폼 필드입니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="form_field">
      <label class="form_field-label" for="select-role">역할</label>
      <select class="input" id="select-role">
        <option value="">선택하세요</option>
        <option>관리자</option>
        <option>편집자</option>
        <option>뷰어</option>
      </select>
      <p class="form_field-hint">계정에 부여할 권한을 선택해 주세요.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="standalone-heading">
  <div class="demo_section-header">
    <h2 id="standalone-heading">단독 사용</h2>
    <p>form_field 없이 select만 사용할 수 있습니다. 인라인 필터·툴바 등에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <select class="input" aria-label="상태 필터">
      <option>전체</option>
      <option>활성</option>
      <option>비활성</option>
    </select>
    <select class="input" aria-label="정렬 기준">
      <option>최신순</option>
      <option selected>이름순</option>
      <option>오래된순</option>
    </select>
    <select class="input" aria-label="비활성 셀렉트" disabled>
      <option>수정할 수 없음</option>
    </select>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>input_sm · input(기본) · input_lg로 padding·font-size를 조절합니다. 커스텀 트리거는 btn_sm · btn · btn_lg를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="select-size-sm">Small — 네이티브</label>
      <select class="input input_sm" id="select-size-sm">
        <option>input_sm</option>
        <option>옵션 2</option>
      </select>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-size-md">Medium — 네이티브</label>
      <select class="input" id="select-size-md">
        <option>기본 크기</option>
        <option>옵션 2</option>
      </select>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-size-lg">Large — 네이티브</label>
      <select class="input input_lg" id="select-size-lg">
        <option>input_lg</option>
        <option>옵션 2</option>
      </select>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select btn_sm" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">btn_sm</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">기본</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_lg" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">btn_lg</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>기본은 부모 100%, input_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다. btn_select는 btn_block으로 전체 너비를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="select-width-full">전체 너비</label>
      <select class="input" id="select-width-full">
        <option>width: 100%</option>
        <option>옵션 2</option>
      </select>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="select-width-fit">제한 너비</label>
      <select class="input" id="select-width-fit">
        <option>form_field_fit — 최대 320px</option>
        <option>옵션 2</option>
      </select>
    </div>

    <select class="input input_fit" aria-label="제한 너비 단독">
      <option>input_fit 단독 — 최대 320px</option>
      <option>옵션 2</option>
    </select>

    <button type="button" class="btn btn_select btn_block" aria-haspopup="listbox" aria-expanded="false">
      <span class="btn_label">btn_block — 전체 너비 트리거</span>
      <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </button>
  </div>
</section>

<section class="section demo_section" aria-labelledby="placeholder-heading">
  <div class="demo_section-header">
    <h2 id="placeholder-heading">플레이스홀더</h2>
    <p>빈 value의 option과 required · disabled · selected · hidden으로 미선택 상태를 표현합니다. 커스텀 트리거는 btn_select-placeholder 클래스를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="select-placeholder-native">네이티브</label>
      <select class="input" id="select-placeholder-native" required>
        <option value="" disabled selected hidden>옵션을 선택하세요</option>
        <option value="a">옵션 A</option>
        <option value="b">옵션 B</option>
        <option value="c">옵션 C</option>
      </select>
      <p class="form_field-hint">required와 함께 사용하면 미선택 시 placeholder 색상이 적용됩니다.</p>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select btn_select-placeholder" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">옵션을 선택하세요</span>
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
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="optgroup-heading">
  <div class="demo_section-header">
    <h2 id="optgroup-heading">옵션 그룹</h2>
    <p>optgroup으로 관련 옵션을 묶어 표시합니다. label 속성으로 그룹 제목을 지정합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="form_field">
      <label class="form_field-label" for="select-optgroup">지역</label>
      <select class="input" id="select-optgroup">
        <option value="">선택하세요</option>
        <optgroup label="수도권">
          <option>서울특별시</option>
          <option>경기도</option>
          <option>인천광역시</option>
        </optgroup>
        <optgroup label="영남권">
          <option>부산광역시</option>
          <option>대구광역시</option>
          <option>울산광역시</option>
        </optgroup>
        <optgroup label="호남권">
          <option>광주광역시</option>
          <option>전라남도</option>
          <option>전라북도</option>
        </optgroup>
      </select>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="multiple-heading">
  <div class="demo_section-header">
    <h2 id="multiple-heading">다중 선택</h2>
    <p>multiple 속성으로 여러 옵션을 동시에 선택합니다. Ctrl(Windows) · Cmd(Mac) 키로 복수 선택이 가능합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="form_field">
      <label class="form_field-label" for="select-multiple">관심 분야</label>
      <select class="input" id="select-multiple" multiple size="5" aria-describedby="select-multiple-hint">
        <option selected>UX 디자인</option>
        <option>UI 개발</option>
        <option selected>접근성</option>
        <option>디자인 시스템</option>
        <option>리서치</option>
        <option>프로토타이핑</option>
      </select>
      <p class="form_field-hint" id="select-multiple-hint">복수 선택 시 size로 표시 행 수를 지정합니다.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>disabled · is-error · is-success로 선택 상태를 표현합니다. 커스텀 트리거는 is-open · is-error · aria-expanded를 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="select-state-default">기본</label>
      <select class="input" id="select-state-default">
        <option>선택 가능</option>
        <option>옵션 2</option>
      </select>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-state-disabled">비활성</label>
      <select class="input" id="select-state-disabled" disabled>
        <option selected>수정할 수 없음</option>
        <option>옵션 2</option>
      </select>
      <p class="form_field-hint">disabled 속성으로 선택을 막습니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="select-state-error">에러</label>
      <select class="input is-error" id="select-state-error" aria-invalid="true" aria-describedby="select-state-error-msg">
        <option value="" selected>선택하세요</option>
        <option value="a">옵션 A</option>
      </select>
      <p class="form_field-error" id="select-state-error-msg" role="alert">필수 항목입니다. 옵션을 선택해 주세요.</p>
    </div>

    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select is-open" aria-haspopup="listbox" aria-expanded="true">
        <span class="btn_label">열림</span>
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
        <span class="btn_label">에러</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text is-open" aria-haspopup="listbox" aria-expanded="true">
        <span class="btn_label">텍스트형 열림</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="custom-heading">
  <div class="demo_section-header">
    <h2 id="custom-heading">커스텀 트리거</h2>
    <p>btn_select · btn_select-text는 Button 컴포넌트 스타일을 공유합니다. aria-haspopup="listbox" · aria-expanded · btn_select-caret을 지정하고, Dropdown·Popover 패널과 조합해 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="btn_row btn_row-wrap">
      <button type="button" class="btn btn_select" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">서울특별시</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">최신순</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <button type="button" class="btn btn_select btn_select-text btn_sm" aria-haspopup="listbox" aria-expanded="false">
        <span class="btn_label">필터</span>
        <svg class="btn_select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
    <p class="form_field-hint">상세 변형은 <a href="button.html#type-select-heading">Button — 셀렉트 박스형</a> 섹션을 참고하세요.</p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="example-heading">
  <div class="demo_section-header">
    <h2 id="example-heading">조합 예시</h2>
    <p>유효성 검사와 함께 네이티브 select를 사용한 회원가입 폼입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <form class="form form_vertical form_compact" action="#" method="get" novalidate aria-labelledby="example-heading">
      <div class="form_field">
        <label class="form_field-label" for="select-ex-country">
          국가<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <select class="input input_sm is-success" id="select-ex-country" required aria-required="true" aria-invalid="false" aria-describedby="select-ex-country-success">
          <option value="kr" selected>대한민국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
        <p class="form_field-success" id="select-ex-country-success" role="status">지원되는 국가입니다.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="select-ex-plan">
          요금제<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <select class="input input_sm is-error" id="select-ex-plan" required aria-required="true" aria-invalid="true" aria-describedby="select-ex-plan-error">
          <option value="" selected disabled hidden>요금제를 선택하세요</option>
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </select>
        <p class="form_field-error" id="select-ex-plan-error" role="alert">요금제 선택은 필수입니다.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="select-ex-lang">언어</label>
        <select class="input input_sm" id="select-ex-lang">
          <option value="ko" selected>한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
        <p class="form_field-hint">서비스 표시 언어를 선택합니다.</p>
      </div>

      <div class="form_actions">
        <button type="submit" class="btn btn_filled color_primary btn_sm"><span class="btn_label">가입하기</span></button>
        <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>
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
            <td><code class="typo_code">input</code> (native)</td>
            <td>네이티브 select 스타일</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_select</code> · <code class="typo_code">btn_select-text</code> · <code class="typo_code">btn_select-caret</code></td>
            <td>custom 트리거</td>
          </tr>
          <tr>
            <td><code class="typo_code">btn_select-placeholder</code> · <code class="typo_code">is-open</code></td>
            <td>트리거 상태</td>
          </tr>
          <tr>
            <td><code class="typo_code">select_dropdown</code> · <code class="typo_code">select_option</code></td>
            <td>드롭다운 패널 (HTML 마크업)</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-error</code> · <code class="typo_code">is-disabled</code></td>
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
            <td><code class="typo_code">--input-max-width</code></td>
            <td>320px</td>
            <td>네이티브 select · form_fit 데모 최대 너비 (Input과 공유)</td>
          </tr>
          <tr>
            <td><code class="typo_code">--select-padding-right</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td>
            <td>2.25rem · 2rem · 2.5rem</td>
            <td>네이티브 select 오른쪽 패딩 (캐럿 공간)</td>
          </tr>
          <tr>
            <td><code class="typo_code">--select-caret-offset</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td>
            <td>0.65rem · 0.5rem · 0.85rem</td>
            <td>네이티브 캐럿 아이콘 위치</td>
          </tr>
          <tr>
            <td><code class="typo_code">--select-caret-size</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td>
            <td>1em · 0.875em · 1.125em</td>
            <td>네이티브 캐럿 아이콘 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-select-min-width</code> · <code class="typo_code">--btn-select-max-width</code></td>
            <td>10rem · 320px</td>
            <td>커스텀 트리거 (<code class="typo_code">btn_select</code>) 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-select-padding-right</code> · <code class="typo_code">-sm</code> · <code class="typo_code">-lg</code></td>
            <td>0.65rem · 0.5rem · 0.85rem</td>
            <td>커스텀 트리거 캐럿 여백</td>
          </tr>
          <tr>
            <td><code class="typo_code">--btn-select-text-padding-x</code> · <code class="typo_code">--btn-select-text-padding-right</code></td>
            <td>0.5rem · 0.35rem</td>
            <td>텍스트형 트리거 (<code class="typo_code">btn_select-text</code>) 패딩</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=se(ne),te=oe(ne),ie={title:"Components/폼/Select",id:"components-select",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'옵션 목록에서 값을 선택하는 Select 컴포넌트입니다. 네이티브 &lt;select class="input"&gt;와 커스텀 드롭다운 트리거 btn_select · btn_select-text 두 가지 유형을 제공합니다.'}}}},s={name:"유형",render:()=>n(e[0]),parameters:{docs:{...t(e[0].previewHtml).docs,description:{story:e[0].description}}}},o={name:"기본",render:()=>n(e[1]),parameters:{docs:{...t(e[1].previewHtml).docs,description:{story:e[1].description}}}},a={name:"단독 사용",render:()=>n(e[2]),parameters:{docs:{...t(e[2].previewHtml).docs,description:{story:e[2].description}}}},i={name:"크기",render:()=>n(e[3]),parameters:{docs:{...t(e[3].previewHtml).docs,description:{story:e[3].description}}}},l={name:"너비",render:()=>n(e[4]),parameters:{docs:{...t(e[4].previewHtml).docs,description:{story:e[4].description}}}},r={name:"플레이스홀더",render:()=>n(e[5]),parameters:{docs:{...t(e[5].previewHtml).docs,description:{story:e[5].description}}}},d={name:"옵션 그룹",render:()=>n(e[6]),parameters:{docs:{...t(e[6].previewHtml).docs,description:{story:e[6].description}}}},c={name:"다중 선택",render:()=>n(e[7]),parameters:{docs:{...t(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"상태",render:()=>n(e[8]),parameters:{docs:{...t(e[8].previewHtml).docs,description:{story:e[8].description}}}},u={name:"커스텀 트리거",render:()=>n(e[9]),parameters:{docs:{...t(e[9].previewHtml).docs,description:{story:e[9].description}}}},m={name:"조합 예시",render:()=>n(e[10]),parameters:{docs:{...t(e[10].previewHtml).docs,description:{story:e[10].description}}}},b={name:"클래스 · 속성",tags:["!dev"],render:()=>n(te[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},_={name:"디자인 토큰",tags:["!dev"],render:()=>n(te[1]),parameters:{docs:{source:{code:null},description:{story:"네이티브 select 캐럿·커스텀 btn_select 트리거에 사용하는 CSS 변수입니다."}}}};var v,h,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,y,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,x,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '단독 사용',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var B,k,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,H,M;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '너비',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var E,z,q;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '플레이스홀더',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(q=(z=r.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var F,T,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '옵션 그룹',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var O,I,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '다중 선택',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var U,j,N;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '상태',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var W,X,G;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '커스텀 트리거',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(G=(X=u.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,V,Y;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Y=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,$,ee;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: '네이티브 select 캐럿·커스텀 btn_select 트리거에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(ee=($=_.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const le=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","ApiClasses","ApiTokens"];export{b as ApiClasses,_ as ApiTokens,s as Demo0,o as Demo1,m as Demo10,a as Demo2,i as Demo3,l as Demo4,r as Demo5,d as Demo6,c as Demo7,p as Demo8,u as Demo9,le as __namedExportsOrder,ie as default};

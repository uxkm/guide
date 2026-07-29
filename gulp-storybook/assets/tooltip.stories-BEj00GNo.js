import{b as o,c as ut,g as n,e as gt}from"./gulp-demos-C1efgjoy.js";const mt=`<!-- @meta
title: Tooltip | HTML Components
activeNav: tooltip
pageTitle: Tooltip
-->
<div class="page_intro">
  <h1>Tooltip</h1>
  <p class="lead">호버·포커스 시 트리거 근처에 짧은 설명을 띄우는 Tooltip 컴포넌트입니다. 용어 정의·아이콘 버튼 보조 설명·비활성 요소 이유 안내 등에 사용하며, <code class="typo_code">role="tooltip"</code> · <code class="typo_code">aria-describedby</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">tooltip</code> · <code class="typo_code">tooltip_trigger</code> · <code class="typo_code">tooltip_bubble</code>으로 트리거와 말풍선을 구성합니다. <code class="typo_code">data-tooltip</code> · <code class="typo_code">aria-describedby</code>로 JS·접근성을 연동합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tooltip" data-tooltip>
      <button type="button" class="btn btn_outline tooltip_trigger" aria-describedby="tooltip-basic">
        <span class="btn_label">마우스 오버</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-basic" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        짧은 도움말 텍스트입니다.
      </span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="slot-heading">
  <div class="demo_section-header">
    <h2 id="slot-heading">슬롯</h2>
    <p>말풍선 텍스트를 <code class="typo_code">tooltip_bubble</code> 안에 직접 배치합니다. (Vue에서는 content prop 대신 default 슬롯과 동일합니다.)</p>
  </div>

  <div class="demo_section-preview">
    <span class="tooltip" data-tooltip>
      <button type="button" class="btn btn_outline tooltip_trigger" aria-describedby="tooltip-slot">
        <span class="btn_label">슬롯 예시</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-slot" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        짧은 도움말 텍스트입니다.
      </span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="open-heading">
  <div class="demo_section-header">
    <h2 id="open-heading">열린 상태</h2>
    <p><code class="typo_code">is-open</code> 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tooltip is-open">
      <button type="button" class="btn btn_filled color_primary tooltip_trigger" aria-describedby="tooltip-open">
        <span class="btn_label">열림</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-open" role="tooltip">
        <span class="tooltip_arrow" aria-hidden="true"></span>
        정적 데모용 열린 상태입니다.
      </span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">tooltip_sm</code> · <code class="typo_code">tooltip</code>(기본) · <code class="typo_code">tooltip_lg</code>로 패딩·글자 크기·최대 너비를 조절합니다.</p>
  </div>

  <div class="demo_section-preview tooltip_row">
    <span class="tooltip tooltip_sm" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-size-sm">
        <span class="btn_label">Small</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-size-sm" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        작은 말풍선
      </span>
    </span>
    <span class="tooltip" data-tooltip>
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-size-md">
        <span class="btn_label">Medium</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-size-md" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        기본 크기 말풍선
      </span>
    </span>
    <span class="tooltip tooltip_lg" data-tooltip>
      <button type="button" class="btn btn_ghost btn_lg tooltip_trigger" aria-describedby="tooltip-size-lg">
        <span class="btn_label">Large</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-size-lg" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.
      </span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="offset-heading">
  <div class="demo_section-header">
    <h2 id="offset-heading">간격</h2>
    <p><code class="typo_code">tooltip_offset-none</code> · <code class="typo_code">_sm</code> · <code class="typo_code">_lg</code>로 전 방향 간격을, <code class="typo_code">tooltip_offset-top-*</code> · <code class="typo_code">_right-*</code> · <code class="typo_code">_bottom-*</code> · <code class="typo_code">_left-*</code>로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔말풍선 사이에 적용됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="tooltip_row">
    <span class="tooltip tooltip_offset-none" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-none">
        <span class="btn_label">none</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-none" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        간격 없음
      </span>
    </span>
    <span class="tooltip tooltip_offset-sm" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-sm">
        <span class="btn_label">sm</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-sm" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        좁은 간격
      </span>
    </span>
    <span class="tooltip" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-md">
        <span class="btn_label">md</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-md" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        기본 간격
      </span>
    </span>
    <span class="tooltip tooltip_offset-lg" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-lg">
        <span class="btn_label">lg</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-lg" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        넓은 간격
      </span>
    </span>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="tooltip_demo-placement" style="min-height: 12rem;">
      <div class="tooltip_demo-placement-cell-top">
    <span class="tooltip tooltip_placement-top tooltip_offset-top-lg" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-top">
        <span class="btn_label">위</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-top" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        위쪽 간격
      </span>
    </span>
      </div>

      <div class="tooltip_demo-placement-cell-left">
    <span class="tooltip tooltip_placement-left tooltip_offset-left-lg" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-left">
        <span class="btn_label">왼쪽</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-left" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        왼쪽 간격
      </span>
    </span>
      </div>

      <div class="tooltip_demo-placement-cell-center">
    <span class="tooltip tooltip_offset-bottom-lg" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-bottom">
        <span class="btn_label">아래</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-bottom" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        아래쪽 간격
      </span>
    </span>
      </div>

      <div class="tooltip_demo-placement-cell-right">
    <span class="tooltip tooltip_placement-right tooltip_offset-right-lg" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-offset-right">
        <span class="btn_label">오른쪽</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-offset-right" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        오른쪽 간격
      </span>
    </span>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="inline-heading">
  <div class="demo_section-header">
    <h2 id="inline-heading">인라인</h2>
    <p>문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <p>
      결제 시
    <span class="tooltip" data-tooltip>
      <button type="button" class="link color_primary tooltip_trigger" aria-describedby="tooltip-inline">에스크로</button>
      <span class="tooltip_bubble" id="tooltip-inline" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </span>
    </span>
      서비스를 이용할 수 있습니다.
    </p>
  </div>
</section>

<section class="section demo_section" aria-labelledby="trigger-heading">
  <div class="demo_section-header">
    <h2 id="trigger-heading">트리거 유형</h2>
    <p>Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="tooltip_row">
    <span class="tooltip" data-tooltip>
      <button type="button" class="btn btn_filled color_primary tooltip_trigger" aria-describedby="tooltip-trigger-btn">
        <span class="btn_label">Button</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-trigger-btn" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        버튼 트리거 예시입니다.
      </span>
    </span>
    <span class="tooltip" data-tooltip>
      <button type="button" class="link color_primary tooltip_trigger" aria-describedby="tooltip-trigger-link">Link 트리거</button>
      <span class="tooltip_bubble" id="tooltip-trigger-link" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        링크 스타일 트리거입니다.
      </span>
    </span>

      <span class="tooltip" data-tooltip>
        <button type="button" class="btn btn_ghost btn_icon-only tooltip_trigger" aria-describedby="tooltip-trigger-icon" aria-label="정보">
          <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
        </button>
        <span class="tooltip_bubble" id="tooltip-trigger-icon" role="tooltip" hidden>
          <span class="tooltip_arrow" aria-hidden="true"></span>
          아이콘 전용 트리거입니다.
        </span>
      </span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="click-heading">
  <div class="demo_section-header">
    <h2 id="click-heading">클릭 트리거</h2>
    <p><code class="typo_code">data-tooltip-trigger="click"</code>로 클릭 시 말풍선을 토글합니다. 접근성을 위해 <code class="typo_code">tooltip_close</code> 닫기 버튼이 기본 제공됩니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tooltip" data-tooltip data-tooltip-trigger="click">
      <button type="button" class="btn btn_outline tooltip_trigger" aria-describedby="tooltip-click" aria-expanded="false">
        <span class="btn_label">클릭하여 보기</span>
      </button>
      <span class="tooltip_bubble tooltip_bubble-closable" id="tooltip-click" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        <button type="button" class="btn btn_ghost btn_icon-only tooltip_close tooltip_close-floating" data-tooltip-close aria-label="닫기">
          <svg class="tooltip_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        클릭으로 열고 닫는 Tooltip입니다.
      </span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="placement-heading">
  <div class="demo_section-header">
    <h2 id="placement-heading">배치</h2>
    <p><code class="typo_code">tooltip_placement-top</code> · <code class="typo_code">tooltip_placement-top-start</code> · <code class="typo_code">tooltip_placement-top-end</code> · <code class="typo_code">tooltip_placement-start</code> · <code class="typo_code">tooltip_placement-end</code> · <code class="typo_code">tooltip_placement-left</code> · <code class="typo_code">tooltip_placement-right</code>로 말풍선 위치를 조정합니다. 기본은 트리거 아래 · 가운데 정렬입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="tooltip_demo-placement">
      <div class="tooltip_demo-placement-cell-top">
    <span class="tooltip tooltip_placement-top" data-tooltip>
      <button type="button" class="btn btn_outline btn_sm tooltip_trigger" aria-describedby="tooltip-place-top">
        <span class="btn_label">위</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-place-top" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 위
      </span>
    </span>
      </div>

      <div class="tooltip_demo-placement-cell-left">
    <span class="tooltip tooltip_placement-left" data-tooltip>
      <button type="button" class="btn btn_outline btn_sm tooltip_trigger" aria-describedby="tooltip-place-left">
        <span class="btn_label">왼쪽</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-place-left" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 왼쪽
      </span>
    </span>
      </div>

      <div class="tooltip_demo-placement-cell-center">
    <span class="tooltip" data-tooltip>
      <button type="button" class="btn btn_outline btn_sm tooltip_trigger" aria-describedby="tooltip-place-bottom">
        <span class="btn_label">아래</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-place-bottom" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 아래 · 가운데
      </span>
    </span>
      </div>

      <div class="tooltip_demo-placement-cell-right">
    <span class="tooltip tooltip_placement-right" data-tooltip>
      <button type="button" class="btn btn_outline btn_sm tooltip_trigger" aria-describedby="tooltip-place-right">
        <span class="btn_label">오른쪽</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-place-right" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 오른쪽
      </span>
    </span>
      </div>
    </div>

    <div class="tooltip_row" style="width: 100%; justify-content: space-between;">
    <span class="tooltip tooltip_placement-top-start" data-tooltip>
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-place-top-start">
        <span class="btn_label">위 · 왼쪽</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-place-top-start" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        위쪽 왼쪽 정렬
      </span>
    </span>
    <span class="tooltip tooltip_placement-start" data-tooltip>
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-place-start">
        <span class="btn_label">아래 · 왼쪽</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-place-start" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        아래쪽 왼쪽 정렬
      </span>
    </span>
    <span class="tooltip tooltip_placement-end" data-tooltip>
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-place-end">
        <span class="btn_label">아래 · 오른쪽</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-place-end" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        아래쪽 오른쪽 정렬
      </span>
    </span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="inverse-heading">
  <div class="demo_section-header">
    <h2 id="inverse-heading">역색</h2>
    <p><code class="typo_code">tooltip_inverse</code>로 어두운 배경의 말풍선을 표시합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tooltip tooltip_inverse" data-tooltip>
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-inverse">
        <span class="btn_label">역색 Tooltip</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-inverse" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        어두운 배경의 말풍선입니다.
      </span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성 트리거</h2>
    <p>비활성 버튼은 <code class="typo_code">tooltip_trigger</code> span으로 감싸 <code class="typo_code">pointer-events</code>가 막힌 요소에도 설명을 제공합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tooltip" data-tooltip>
      <span class="tooltip_trigger" tabindex="0" aria-describedby="tooltip-disabled">
        <button type="button" class="btn btn_filled color_primary" disabled>
          <span class="btn_label">제출 불가</span>
        </button>
      </span>
      <span class="tooltip_bubble" id="tooltip-disabled" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        필수 항목을 모두 입력해야 제출할 수 있습니다.
      </span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="arrow-anchor-heading">
  <div class="demo_section-header">
    <h2 id="arrow-anchor-heading">화살표 기준</h2>
    <p><code class="typo_code">tooltip_arrow-anchor-target</code> · <code class="typo_code">tooltip_arrow-anchor-mixed</code>와 <code class="typo_code">tooltip_panel-align-*</code>, <code class="typo_code">data-arrow-target-align</code>으로 말풍선·화살표를 독립 조합합니다. target은 말풍선 CSS·화살표 JS, mixed는 말풍선·화살표 모두 JS로 트리거 기준 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="tooltip_row" style="align-items: flex-start;">
    <span class="tooltip" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-anchor-content">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-content" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-target" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-anchor-target">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-target" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.
      </span>
    </span>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="tooltip_row" style="align-items: flex-start;">
    <span class="tooltip tooltip_arrow-anchor-target" data-tooltip data-arrow-target-align="left">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-anchor-t-left">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-t-left" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 왼쪽을 가리킵니다.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-target" data-tooltip>
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-anchor-t-center">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-t-center" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 가운데를 가리킵니다.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-target" data-tooltip data-arrow-target-align="right">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-anchor-t-right">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-t-right" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 오른쪽을 가리킵니다.
      </span>
    </span>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="tooltip_row" style="align-items: center;">
    <span class="tooltip tooltip_placement-left tooltip_arrow-anchor-target" data-tooltip data-arrow-target-align="top">
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-anchor-t-top">
        <span class="btn_label">트리거</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-t-top" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 위쪽을 가리킵니다.
      </span>
    </span>
    <span class="tooltip tooltip_placement-left tooltip_arrow-anchor-target" data-tooltip>
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-anchor-t-mid">
        <span class="btn_label">트리거</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-t-mid" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 가운데를 가리킵니다.
      </span>
    </span>
    <span class="tooltip tooltip_placement-left tooltip_arrow-anchor-target" data-tooltip data-arrow-target-align="bottom">
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-anchor-t-bottom">
        <span class="btn_label">트리거</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-anchor-t-bottom" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        트리거 아래쪽을 가리킵니다.
      </span>
    </span>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="tooltip_row" style="align-items: flex-start;">
    <span class="tooltip tooltip_arrow-anchor-mixed" data-tooltip data-panel-align="center" data-arrow-target-align="left">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-c-l">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-c-l" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 가운데, 화살표 왼쪽.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-mixed" data-tooltip data-panel-align="center">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-c-c">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-c-c" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선·화살표 모두 가운데.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-mixed" data-tooltip data-panel-align="center" data-arrow-target-align="right">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-c-r">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-c-r" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 가운데, 화살표 오른쪽.
      </span>
    </span>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 왼쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
    <span class="tooltip tooltip_arrow-anchor-mixed tooltip_panel-align-start" data-tooltip data-panel-align="start" data-arrow-target-align="left">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-s-l">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-s-l" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 왼쪽, 화살표 왼쪽.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-mixed tooltip_panel-align-start" data-tooltip data-panel-align="start">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-s-c">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-s-c" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 왼쪽, 화살표 가운데.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-mixed tooltip_panel-align-start" data-tooltip data-panel-align="start" data-arrow-target-align="right">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-s-r">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-s-r" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 왼쪽, 화살표 오른쪽.
      </span>
    </span>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 말풍선 오른쪽 · 화살표 조합</p>
    <div class="tooltip_row" style="align-items: flex-start;">
    <span class="tooltip tooltip_arrow-anchor-mixed tooltip_panel-align-end" data-tooltip data-panel-align="end" data-arrow-target-align="left">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-e-l">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-e-l" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 오른쪽, 화살표 왼쪽.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-mixed tooltip_panel-align-end" data-tooltip data-panel-align="end">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-e-c">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-e-c" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 오른쪽, 화살표 가운데.
      </span>
    </span>
    <span class="tooltip tooltip_arrow-anchor-mixed tooltip_panel-align-end" data-tooltip data-panel-align="end" data-arrow-target-align="right">
      <button type="button" class="btn btn_ghost btn_sm tooltip_trigger" aria-describedby="tooltip-mixed-e-r">
        <span class="btn_label">S</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-mixed-e-r" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        말풍선 오른쪽, 화살표 오른쪽.
      </span>
    </span>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="no-arrow-heading">
  <div class="demo_section-header">
    <h2 id="no-arrow-heading">화살표 없음</h2>
    <p><code class="typo_code">tooltip_no-arrow</code>로 화살표를 숨깁니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="tooltip tooltip_no-arrow" data-tooltip>
      <button type="button" class="btn btn_ghost tooltip_trigger" aria-describedby="tooltip-no-arrow">
        <span class="btn_label">화살표 없음</span>
      </button>
      <span class="tooltip_bubble" id="tooltip-no-arrow" role="tooltip" hidden>
        <span class="tooltip_arrow" aria-hidden="true"></span>
        화살표가 표시되지 않는 말풍선입니다.
      </span>
    </span>
  </div>
</section>


<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>트리거와 말풍선을 <code class="typo_code">aria-describedby</code>로 연결합니다. 기본은 닫힌 상태(<code class="typo_code">hidden</code>)이며, 호버·포커스 시 열립니다. 클릭 트리거에는 <code class="typo_code">tooltip_close</code>를 기본으로 둡니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- 기본 (호버 · 포커스) --&gt;
&lt;span class="tooltip" data-tooltip&gt;
  &lt;button type="button" class="btn btn_outline tooltip_trigger"
    aria-describedby="tooltip-1"&gt;
    &lt;span class="btn_label"&gt;마우스 오버&lt;/span&gt;
  &lt;/button&gt;
  &lt;span class="tooltip_bubble" id="tooltip-1" role="tooltip" hidden&gt;
    &lt;span class="tooltip_arrow" aria-hidden="true"&gt;&lt;/span&gt;
    짧은 도움말 텍스트입니다.
  &lt;/span&gt;
&lt;/span&gt;

&lt;!-- 클릭 트리거 (닫기 버튼) --&gt;
&lt;span class="tooltip" data-tooltip data-tooltip-trigger="click"&gt;
  &lt;button type="button" class="btn btn_outline tooltip_trigger"
    aria-describedby="tooltip-click" aria-expanded="false"&gt;…&lt;/button&gt;
  &lt;span class="tooltip_bubble tooltip_bubble-closable" id="tooltip-click" role="tooltip" hidden&gt;
    &lt;span class="tooltip_arrow" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;button type="button" class="btn btn_ghost btn_icon-only tooltip_close tooltip_close-floating"
      data-tooltip-close aria-label="닫기"&gt;…&lt;/button&gt;
    클릭으로 열고 닫는 Tooltip입니다.
  &lt;/span&gt;
&lt;/span&gt;

&lt;!-- 비활성 버튼 래핑 --&gt;
&lt;span class="tooltip" data-tooltip&gt;
  &lt;span class="tooltip_trigger" tabindex="0" aria-describedby="tooltip-disabled"&gt;
    &lt;button type="button" class="btn btn_filled color_primary" disabled&gt;…&lt;/button&gt;
  &lt;/span&gt;
  &lt;span class="tooltip_bubble" id="tooltip-disabled" role="tooltip" hidden&gt;…&lt;/span&gt;
&lt;/span&gt;

&lt;!-- 간격 · 화살표 기준 --&gt;
&lt;span class="tooltip tooltip_offset-lg tooltip_arrow-anchor-mixed"
  data-panel-align="center" data-arrow-target-align="right" data-tooltip&gt;…&lt;/span&gt;</code></pre>
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
          <tr><td><code class="typo_code">tooltip · tooltip_trigger · tooltip_bubble · tooltip_arrow · tooltip_close</code></td><td>루트·트리거·말풍선</td></tr>
          <tr><td><code class="typo_code">tooltip_sm · tooltip_lg · tooltip_inverse · tooltip_no-arrow</code></td><td>크기·스킨</td></tr>
          <tr><td><code class="typo_code">tooltip_panel-align-start · tooltip_panel-align-end</code></td><td>말풍선 교차축 정렬</td></tr>
          <tr><td><code class="typo_code">tooltip_arrow-anchor-target · tooltip_arrow-anchor-mixed</code></td><td>화살표·혼합 기준</td></tr>
          <tr><td><code class="typo_code">tooltip_offset-none · tooltip_offset-sm · tooltip_offset-lg</code></td><td>전 방향 간격</td></tr>
          <tr><td><code class="typo_code">tooltip_offset-top-* · tooltip_offset-right-* · tooltip_offset-bottom-* · tooltip_offset-left-*</code></td><td>방향별 간격</td></tr>
          <tr><td><code class="typo_code">tooltip_placement-*</code></td><td>배치 변형</td></tr>
          <tr><td><code class="typo_code">data-tooltip · data-tooltip-trigger · data-tooltip-close · data-panel-align · data-arrow-target-align</code></td><td>JS 연동</td></tr>
          <tr><td><code class="typo_code">is-open · is-disabled · hidden</code></td><td>상태</td></tr>
          <tr><td><code class="typo_code">role="tooltip"</code> · <code class="typo_code">aria-describedby</code> · <code class="typo_code">aria-expanded</code></td><td>접근성</td></tr>
        </tbody>
      </table>
    </div>

    <p class="form_field-hint" style="margin-top: var(--space-md);">호버: 마우스 오버·포커스. 클릭: 트리거 토글 · 닫기 버튼 · 바깥 클릭 · <kbd>Esc</kbd>. 열릴 때 다른 Tooltip은 자동으로 닫힙니다.</p>
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
          <tr><td><code class="typo_code">--tooltip-max-width</code> · <code class="typo_code">--tooltip-max-width-sm</code> · <code class="typo_code">--tooltip-max-width-lg</code></td><td>16rem · 12rem · 20rem</td><td>말풍선 최대 너비</td></tr>
          <tr><td><code class="typo_code">--tooltip-padding-x</code> · <code class="typo_code">--tooltip-padding-y</code> · <code class="typo_code">--tooltip-font-size</code></td><td>—</td><td>패딩·글자</td></tr>
          <tr><td><code class="typo_code">--tooltip-offset</code> · <code class="typo_code">--tooltip-offset-sm</code> · <code class="typo_code">--tooltip-offset-md</code> · <code class="typo_code">--tooltip-offset-lg</code></td><td><code class="typo_code">var(--space-xs)</code> · …</td><td>전 방향 간격 토큰</td></tr>
          <tr><td><code class="typo_code">--tooltip-offset-top</code> · <code class="typo_code">--tooltip-offset-right</code> · <code class="typo_code">--tooltip-offset-bottom</code> · <code class="typo_code">--tooltip-offset-left</code></td><td>offset 상속</td><td>방향별 간격 (배치에 따라 적용)</td></tr>
          <tr><td><code class="typo_code">--tooltip-arrow-size</code></td><td>6px</td><td>화살표 크기</td></tr>
          <tr><td><code class="typo_code">--tooltip-panel-radius</code> · <code class="typo_code">--tooltip-arrow-edge-inset</code></td><td>6px · calc</td><td>말풍선 라운드·화살표 가장자리 여백</td></tr>
          <tr><td><code class="typo_code">--tooltip-arrow-position</code></td><td>—</td><td>target 기준 시 트리거 중앙 위치(px)</td></tr>
          <tr><td><code class="typo_code">--tooltip-inverse-bg</code> · <code class="typo_code">--tooltip-inverse-text</code></td><td>—</td><td>inverse 스킨</td></tr>
          <tr><td><code class="typo_code">--tooltip-close-size</code> · <code class="typo_code">--tooltip-close-icon-size</code></td><td>1.25rem · 0.75rem</td><td>닫기 버튼·아이콘 크기</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,t=gt(mt),v=ut(mt),yt={title:"Components/피드백/Tooltip",id:"components-tooltip",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'호버·포커스 시 트리거 근처에 짧은 설명을 띄우는 Tooltip 컴포넌트입니다. 용어 정의·아이콘 버튼 보조 설명·비활성 요소 이유 안내 등에 사용하며, role="tooltip" · aria-describedby로 접근성을 보장합니다.'}}}},e={name:"기본",render:()=>o(t[0]),parameters:{docs:{...n(t[0].previewHtml).docs,description:{story:t[0].description}}}},s={name:"슬롯",render:()=>o(t[1]),parameters:{docs:{...n(t[1].previewHtml).docs,description:{story:t[1].description}}}},a={name:"열린 상태",render:()=>o(t[2]),parameters:{docs:{...n(t[2].previewHtml).docs,description:{story:t[2].description}}}},i={name:"크기",render:()=>o(t[3]),parameters:{docs:{...n(t[3].previewHtml).docs,description:{story:t[3].description}}}},l={name:"간격",render:()=>o(t[4]),parameters:{docs:{...n(t[4].previewHtml).docs,description:{story:t[4].description}}}},p={name:"인라인",render:()=>o(t[5]),parameters:{docs:{...n(t[5].previewHtml).docs,description:{story:t[5].description}}}},r={name:"트리거 유형",render:()=>o(t[6]),parameters:{docs:{...n(t[6].previewHtml).docs,description:{story:t[6].description}}}},d={name:"클릭 트리거",render:()=>o(t[7]),parameters:{docs:{...n(t[7].previewHtml).docs,description:{story:t[7].description}}}},c={name:"배치",render:()=>o(t[8]),parameters:{docs:{...n(t[8].previewHtml).docs,description:{story:t[8].description}}}},b={name:"역색",render:()=>o(t[9]),parameters:{docs:{...n(t[9].previewHtml).docs,description:{story:t[9].description}}}},_={name:"비활성 트리거",render:()=>o(t[10]),parameters:{docs:{...n(t[10].previewHtml).docs,description:{story:t[10].description}}}},m={name:"화살표 기준",render:()=>o(t[11]),parameters:{docs:{...n(t[11].previewHtml).docs,description:{story:t[11].description}}}},u={name:"화살표 없음",render:()=>o(t[12]),parameters:{docs:{...n(t[12].previewHtml).docs,description:{story:t[12].description}}}},g={name:"마크업",tags:["!dev"],render:()=>o(v[0]),parameters:{docs:{source:{code:null},description:{story:v[0].description}}}},h={name:"클래스 · 속성",tags:["!dev"],render:()=>o(v[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},y={name:"디자인 토큰",tags:["!dev"],render:()=>o(v[2]),parameters:{docs:{source:{code:null},description:{story:"Tooltip 간격·화살표·역색에 사용하는 CSS 변수입니다."}}}};var w,f,C;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(f=e.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var D,x,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '슬롯',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var B,k,A;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var H,T,z;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var E,M,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '간격',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(L=(M=l.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var O,J,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '인라인',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(F=(J=p.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var j,N,V;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(V=(N=r.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,G,I;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '클릭 트리거',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var K,P,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '배치',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var R,U,W;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '역색',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '비활성 트리거',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,tt,ot;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '화살표 기준',
  render: () => renderDemo(demos[11]),
  parameters: {
    docs: {
      ...gulpSource(demos[11].previewHtml).docs,
      description: {
        story: demos[11].description
      }
    }
  }
}`,...(ot=(tt=m.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var nt,et,st;u.parameters={...u.parameters,docs:{...(nt=u.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: '화살표 없음',
  render: () => renderDemo(demos[12]),
  parameters: {
    docs: {
      ...gulpSource(demos[12].previewHtml).docs,
      description: {
        story: demos[12].description
      }
    }
  }
}`,...(st=(et=u.parameters)==null?void 0:et.docs)==null?void 0:st.source}}};var at,it,lt;g.parameters={...g.parameters,docs:{...(at=g.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(lt=(it=g.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var pt,rt,dt;h.parameters={...h.parameters,docs:{...(pt=h.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(dt=(rt=h.parameters)==null?void 0:rt.docs)==null?void 0:dt.source}}};var ct,bt,_t;y.parameters={...y.parameters,docs:{...(ct=y.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Tooltip 간격·화살표·역색에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(_t=(bt=y.parameters)==null?void 0:bt.docs)==null?void 0:_t.source}}};const vt=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","Demo12","ApiMarkup","ApiClasses","ApiTokens"];export{h as ApiClasses,g as ApiMarkup,y as ApiTokens,e as Demo0,s as Demo1,_ as Demo10,m as Demo11,u as Demo12,a as Demo2,i as Demo3,l as Demo4,p as Demo5,r as Demo6,d as Demo7,c as Demo8,b as Demo9,vt as __namedExportsOrder,yt as default};

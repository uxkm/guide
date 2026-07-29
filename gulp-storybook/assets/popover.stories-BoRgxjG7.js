import{b as e,d as go,c as n,e as ho}from"./gulp-demos-uIKTVH8x.js";const uo=`<!-- @meta
title: Popover | HTML Components
activeNav: popover
pageTitle: Popover
-->
<div class="page_intro">
  <h1>Popover</h1>
  <p class="lead">클릭·호버로 트리거 옆에 떠 있는 정보 패널 컴포넌트입니다. 짧은 설명·확인·간단한 폼 등 Dropdown보다 풍부한 콘텐츠를 표시할 때 사용하며, <code class="typo_code">aria-haspopup="dialog"</code> · <code class="typo_code">role="dialog"</code>로 접근성을 보장합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p><code class="typo_code">popover</code> · <code class="typo_code">popover_trigger</code> · <code class="typo_code">popover_panel</code>으로 트리거와 패널을 구성합니다. 제목(헤더)이 있으면 <code class="typo_code">popover_header</code>에 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · <code class="typo_code">popover_close</code> · <kbd>Esc</kbd>로 닫을 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="popover" data-popover>
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-basic-panel">
        <span class="btn_label">Popover 열기</span>
      </button>
      <div class="popover_panel" id="popover-basic-panel" role="dialog" aria-labelledby="popover-basic-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-basic-title">안내</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="no-label-heading">
  <div class="demo_section-header">
    <h2 id="no-label-heading">라벨 없음</h2>
    <p>헤더 제목 없이 <code class="typo_code">popover_body</code>만 표시합니다. <code class="typo_code">popover_close-floating</code>이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다. <code class="typo_code">popover_panel-closable</code>로 닫기 버튼 여백을 확보합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="popover" data-popover>
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-no-label-panel">
        <span class="btn_label">라벨 없음</span>
      </button>
      <div class="popover_panel popover_panel-closable" id="popover-no-label-panel" role="dialog" aria-label="안내" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <button type="button" class="btn btn_ghost btn_icon-only popover_close popover_close-floating" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        <div class="popover_body">
          <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="open-heading">
  <div class="demo_section-header">
    <h2 id="open-heading">열린 상태</h2>
    <p><code class="typo_code">is-open</code> 클래스와 <code class="typo_code">aria-expanded="true"</code>로 패널이 열린 상태를 표현합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="popover_demo-stage">
      <div class="popover is-open" data-popover>
        <button type="button" class="btn btn_filled color_primary popover_trigger" aria-haspopup="dialog" aria-expanded="true" aria-controls="popover-open-panel">
          <span class="btn_label">열림</span>
        </button>
        <div class="popover_panel" id="popover-open-panel" role="dialog" aria-labelledby="popover-open-title">
          <span class="popover_arrow" aria-hidden="true"></span>
          <div class="popover_header">
            <div class="popover_title" id="popover-open-title">열린 Popover</div>
            <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
            <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
          </div>
          <div class="popover_body">
            <p>정적 데모용 열린 상태입니다. 닫기 버튼으로 닫을 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">popover_sm</code> · <code class="typo_code">popover</code>(기본) · <code class="typo_code">popover_lg</code>로 패딩·글자 크기·패널 너비를 조절합니다.</p>
  </div>

  <div class="demo_section-preview popover_row">
    <div class="popover popover_sm" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-size-sm">
        <span class="btn_label">Small</span>
      </button>
      <div class="popover_panel" id="popover-size-sm" role="dialog" aria-labelledby="popover-size-sm-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-size-sm-title">작은 Popover</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
        </div>
      </div>
    </div>
    <div class="popover" data-popover>
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-size-md">
        <span class="btn_label">Medium</span>
      </button>
      <div class="popover_panel" id="popover-size-md" role="dialog" aria-labelledby="popover-size-md-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-size-md-title">기본 Popover</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>기본 크기 패널입니다.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_lg" data-popover>
      <button type="button" class="btn btn_outline btn_lg popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-size-lg">
        <span class="btn_label">Large</span>
      </button>
      <div class="popover_panel" id="popover-size-lg" role="dialog" aria-labelledby="popover-size-lg-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-size-lg-title">큰 Popover</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="offset-heading">
  <div class="demo_section-header">
    <h2 id="offset-heading">간격</h2>
    <p><code class="typo_code">popover_offset-none</code> · <code class="typo_code">_sm</code> · <code class="typo_code">_lg</code>로 전 방향 간격을, <code class="typo_code">popover_offset-top-*</code> · <code class="typo_code">_right-*</code> · <code class="typo_code">_bottom-*</code> · <code class="typo_code">_left-*</code>로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔패널 사이에 적용됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">전 방향 동일</p>
    <div class="popover_row">
    <div class="popover popover_offset-none" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-none">
        <span class="btn_label">none</span>
      </button>
      <div class="popover_panel" id="popover-offset-none" role="dialog" aria-labelledby="popover-offset-none-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-none-title">none</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>간격 없음</p>
        </div>
      </div>
    </div>
    <div class="popover popover_offset-sm" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-sm">
        <span class="btn_label">sm</span>
      </button>
      <div class="popover_panel" id="popover-offset-sm" role="dialog" aria-labelledby="popover-offset-sm-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-sm-title">sm</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>좁은 간격</p>
        </div>
      </div>
    </div>
    <div class="popover" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-md">
        <span class="btn_label">md</span>
      </button>
      <div class="popover_panel" id="popover-offset-md" role="dialog" aria-labelledby="popover-offset-md-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-md-title">md</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>기본 간격</p>
        </div>
      </div>
    </div>
    <div class="popover popover_offset-lg" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-lg">
        <span class="btn_label">lg</span>
      </button>
      <div class="popover_panel" id="popover-offset-lg" role="dialog" aria-labelledby="popover-offset-lg-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-lg-title">lg</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>넓은 간격</p>
        </div>
      </div>
    </div>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">방향별 (offset-* · placement)</p>
    <div class="popover_demo-placement">
      <div class="popover_demo-placement-cell-top">
    <div class="popover popover_placement-top-center popover_offset-top-lg" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-top">
        <span class="btn_label">위</span>
      </button>
      <div class="popover_panel" id="popover-offset-top" role="dialog" aria-labelledby="popover-offset-top-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-top-title">offset-top lg</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>위쪽 간격</p>
        </div>
      </div>
    </div>
      </div>

      <div class="popover_demo-placement-cell-left">
    <div class="popover popover_placement-left popover_offset-left-lg" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-left">
        <span class="btn_label">왼쪽</span>
      </button>
      <div class="popover_panel" id="popover-offset-left" role="dialog" aria-labelledby="popover-offset-left-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-left-title">offset-left lg</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>왼쪽 간격</p>
        </div>
      </div>
    </div>
      </div>

      <div class="popover_demo-placement-cell-center">
    <div class="popover popover_offset-bottom-lg" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-bottom">
        <span class="btn_label">아래</span>
      </button>
      <div class="popover_panel" id="popover-offset-bottom" role="dialog" aria-labelledby="popover-offset-bottom-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-bottom-title">offset-bottom lg</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>아래쪽 간격</p>
        </div>
      </div>
    </div>
      </div>

      <div class="popover_demo-placement-cell-right">
    <div class="popover popover_placement-right popover_offset-right-lg" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-offset-right">
        <span class="btn_label">오른쪽</span>
      </button>
      <div class="popover_panel" id="popover-offset-right" role="dialog" aria-labelledby="popover-offset-right-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-offset-right-title">offset-right lg</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>오른쪽 간격</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="title-heading">
  <div class="demo_section-header">
    <h2 id="title-heading">제목</h2>
    <p><code class="typo_code">popover_header</code> · <code class="typo_code">popover_title</code>로 패널 상단에 제목을 표시합니다. <code class="typo_code">aria-labelledby</code>로 패널과 연결합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="popover" data-popover>
      <button type="button" class="btn btn_ghost popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-title-panel">
        <span class="btn_label">도움말</span>
      </button>
      <div class="popover_panel" id="popover-title-panel" role="dialog" aria-labelledby="popover-title-label" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-title-label">배송 안내</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="footer-heading">
  <div class="demo_section-header">
    <h2 id="footer-heading">푸터</h2>
    <p><code class="typo_code">popover_footer</code>에 확인·취소 등 액션 버튼을 배치합니다. <code class="typo_code">data-popover-close</code>로 닫을 수 있습니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="popover" data-popover>
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-footer-panel">
        <span class="btn_label">삭제 확인</span>
      </button>
      <div class="popover_panel" id="popover-footer-panel" role="dialog" aria-labelledby="popover-footer-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-footer-title">항목 삭제</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
        </div>
        <div class="popover_footer">
          <button type="button" class="btn btn_ghost btn_sm" data-popover-close><span class="btn_label">취소</span></button>
          <button type="button" class="btn btn_filled color_danger btn_sm" data-popover-close><span class="btn_label">삭제</span></button>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="hover-heading">
  <div class="demo_section-header">
    <h2 id="hover-heading">호버 트리거</h2>
    <p><code class="typo_code">data-popover-trigger="hover"</code>로 마우스 오버·포커스 시 패널을 표시합니다. 짧은 설명·용어 정의에 적합합니다.</p>
  </div>

  <div class="demo_section-preview">
    <p>
      결제 시
      <span class="popover" data-popover data-popover-trigger="hover">
        <button type="button" class="link color_primary popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-hover-panel">에스크로</button>
        <span class="popover_panel" id="popover-hover-panel" role="dialog" aria-label="에스크로 설명" hidden>
          <span class="popover_arrow" aria-hidden="true"></span>
          <span class="popover_body">구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</span>
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
    <div class="popover_row">
    <div class="popover" data-popover>
      <button type="button" class="btn btn_filled color_primary popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-trigger-btn">
        <span class="btn_label">Button</span>
      </button>
      <div class="popover_panel" id="popover-trigger-btn" role="dialog" aria-labelledby="popover-trigger-btn-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-trigger-btn-title">Button 트리거</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>버튼 트리거 예시입니다.</p>
        </div>
      </div>
    </div>

      <div class="popover" data-popover>
        <button type="button" class="link color_primary popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-trigger-link">Link 트리거</button>
        <div class="popover_panel" id="popover-trigger-link" role="dialog" aria-labelledby="popover-trigger-link-title" hidden>
          <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-trigger-link-title">Link 트리거</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
          <div class="popover_body"><p>링크 스타일 트리거입니다.</p></div>
        </div>
      </div>

      <div class="popover" data-popover>
        <button type="button" class="btn btn_ghost btn_icon-only popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-trigger-icon" aria-label="정보">
          <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
        </button>
        <div class="popover_panel" id="popover-trigger-icon" role="dialog" aria-labelledby="popover-trigger-icon-title" hidden>
          <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-trigger-icon-title">추가 정보</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
          <div class="popover_body"><p>아이콘 전용 트리거입니다.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="placement-heading">
  <div class="demo_section-header">
    <h2 id="placement-heading">배치</h2>
    <p><code class="typo_code">popover_placement-top</code> · <code class="typo_code">popover_placement-top-center</code> · <code class="typo_code">popover_placement-bottom-center</code> · <code class="typo_code">popover_placement-end</code> · <code class="typo_code">popover_placement-left</code> · <code class="typo_code">popover_placement-right</code>로 패널 위치를 조정합니다. 기본은 트리거 아래·왼쪽 정렬입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="popover_demo-placement">
      <div class="popover_demo-placement-cell-top">
    <div class="popover popover_placement-top-center" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-place-top-center">
        <span class="btn_label">위</span>
      </button>
      <div class="popover_panel" id="popover-place-top-center" role="dialog" aria-labelledby="popover-place-top-center-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-place-top-center-title">위쪽 가운데 배치</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 위 · 가운데</p>
        </div>
      </div>
    </div>
      </div>

      <div class="popover_demo-placement-cell-left">
    <div class="popover popover_placement-left" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-place-left">
        <span class="btn_label">왼쪽</span>
      </button>
      <div class="popover_panel" id="popover-place-left" role="dialog" aria-labelledby="popover-place-left-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-place-left-title">왼쪽 배치</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 왼쪽</p>
        </div>
      </div>
    </div>
      </div>

      <div class="popover_demo-placement-cell-center">
    <div class="popover popover_placement-bottom-center" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-place-bottom-center">
        <span class="btn_label">아래</span>
      </button>
      <div class="popover_panel" id="popover-place-bottom-center" role="dialog" aria-labelledby="popover-place-bottom-center-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-place-bottom-center-title">아래쪽 가운데 배치</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 아래 · 가운데</p>
        </div>
      </div>
    </div>
      </div>

      <div class="popover_demo-placement-cell-right">
    <div class="popover popover_placement-right" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-place-right">
        <span class="btn_label">오른쪽</span>
      </button>
      <div class="popover_panel" id="popover-place-right" role="dialog" aria-labelledby="popover-place-right-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-place-right-title">오른쪽 배치</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 오른쪽</p>
        </div>
      </div>
    </div>
      </div>
    </div>

    <div class="popover_row" style="width: 100%; justify-content: space-between;">
    <div class="popover popover_placement-top" data-popover>
      <button type="button" class="btn btn_ghost popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-place-top">
        <span class="btn_label">위 · 왼쪽 정렬</span>
      </button>
      <div class="popover_panel" id="popover-place-top" role="dialog" aria-labelledby="popover-place-top-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-place-top-title">위쪽 왼쪽 정렬</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 왼쪽 정렬</p>
        </div>
      </div>
    </div>
    <div class="popover" data-popover>
      <button type="button" class="btn btn_ghost popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-place-bottom">
        <span class="btn_label">아래 · 왼쪽 정렬</span>
      </button>
      <div class="popover_panel" id="popover-place-bottom" role="dialog" aria-labelledby="popover-place-bottom-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-place-bottom-title">아래쪽 왼쪽 정렬</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>기본 배치</p>
        </div>
      </div>
    </div>
    <div class="popover popover_placement-end" data-popover>
      <button type="button" class="btn btn_ghost popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-place-end">
        <span class="btn_label">아래 · 오른쪽 정렬</span>
      </button>
      <div class="popover_panel" id="popover-place-end" role="dialog" aria-labelledby="popover-place-end-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-place-end-title">오른쪽 정렬</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 오른쪽 정렬</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="form-heading">
  <div class="demo_section-header">
    <h2 id="form-heading">폼</h2>
    <p>Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="popover" data-popover>
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-form-panel">
        <span class="btn_label">메모 추가</span>
      </button>
      <div class="popover_panel" id="popover-form-panel" role="dialog" aria-labelledby="popover-form-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-form-title">빠른 메모</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <div class="form_field">
            <label class="form_field-label" for="popover-memo-input">내용</label>
            <textarea class="textarea" id="popover-memo-input" rows="3" placeholder="메모를 입력하세요"></textarea>
          </div>
        </div>
        <div class="popover_footer">
          <button type="button" class="btn btn_ghost btn_sm" data-popover-close><span class="btn_label">취소</span></button>
          <button type="button" class="btn btn_filled color_primary btn_sm" data-popover-close><span class="btn_label">저장</span></button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="arrow-anchor-heading">
  <div class="demo_section-header">
    <h2 id="arrow-anchor-heading">화살표 기준</h2>
    <p><code class="typo_code">popover_arrow-anchor-target</code> · <code class="typo_code">popover_arrow-anchor-mixed</code>와 <code class="typo_code">popover_panel-align-*</code>, <code class="typo_code">data-arrow-target-align</code>으로 패널·화살표를 독립 조합합니다. target은 패널 CSS·화살표 JS, mixed는 패널·화살표 모두 JS로 트리거 기준 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <p class="form_field-hint" style="margin-bottom: var(--space-md);">기준 비교</p>
    <div class="popover_row" style="align-items: flex-start;">
    <div class="popover" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-content">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-anchor-content" role="dialog" aria-labelledby="popover-anchor-content-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-content-title">content</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-target" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-target">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-anchor-target" role="dialog" aria-labelledby="popover-anchor-target-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-target-title">target</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
        </div>
      </div>
    </div>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 좌 · 가운데 · 우 (아래 배치)</p>
    <div class="popover_row" style="align-items: flex-start;">
    <div class="popover popover_arrow-anchor-target" data-popover data-arrow-target-align="left">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-t-left">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-anchor-t-left" role="dialog" aria-labelledby="popover-anchor-t-left-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-t-left-title">left</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 왼쪽을 가리킵니다.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-target" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-t-center">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-anchor-t-center" role="dialog" aria-labelledby="popover-anchor-t-center-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-t-center-title">center</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 가운데를 가리킵니다.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-target" data-popover data-arrow-target-align="right">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-t-right">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-anchor-t-right" role="dialog" aria-labelledby="popover-anchor-t-right-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-t-right-title">right</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 오른쪽을 가리킵니다.</p>
        </div>
      </div>
    </div>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
    <div class="popover_row" style="align-items: center;">
    <div class="popover popover_placement-left popover_arrow-anchor-target" data-popover data-arrow-target-align="top">
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-t-top">
        <span class="btn_label">트리거</span>
      </button>
      <div class="popover_panel" id="popover-anchor-t-top" role="dialog" aria-labelledby="popover-anchor-t-top-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-t-top-title">top</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 위쪽을 가리킵니다.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_placement-left popover_arrow-anchor-target" data-popover>
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-t-mid">
        <span class="btn_label">트리거</span>
      </button>
      <div class="popover_panel" id="popover-anchor-t-mid" role="dialog" aria-labelledby="popover-anchor-t-mid-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-t-mid-title">center</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 가운데를 가리킵니다.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_placement-left popover_arrow-anchor-target" data-popover data-arrow-target-align="bottom">
      <button type="button" class="btn btn_outline popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-anchor-t-bottom">
        <span class="btn_label">트리거</span>
      </button>
      <div class="popover_panel" id="popover-anchor-t-bottom" role="dialog" aria-labelledby="popover-anchor-t-bottom-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-anchor-t-bottom-title">bottom</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>트리거 아래쪽을 가리킵니다.</p>
        </div>
      </div>
    </div>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 가운데 · 화살표 좌 · 가운데 · 우</p>
    <div class="popover_row" style="align-items: flex-start;">
    <div class="popover popover_arrow-anchor-mixed popover_panel-align-center" data-popover data-panel-align="center" data-arrow-target-align="left">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-c-l">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-c-l" role="dialog" aria-labelledby="popover-mixed-c-l-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-c-l-title">가운데 · ←</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 가운데, 화살표 트리거 왼쪽.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-mixed popover_panel-align-center" data-popover data-panel-align="center">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-c-c">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-c-c" role="dialog" aria-labelledby="popover-mixed-c-c-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-c-c-title">가운데 · ●</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널·화살표 모두 트리거 가운데.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-mixed popover_panel-align-center" data-popover data-panel-align="center" data-arrow-target-align="right">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-c-r">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-c-r" role="dialog" aria-labelledby="popover-mixed-c-r-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-c-r-title">가운데 · →</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 가운데, 화살표 트리거 오른쪽.</p>
        </div>
      </div>
    </div>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 왼쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
    <div class="popover popover_arrow-anchor-mixed" data-popover data-arrow-target-align="left">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-s-l">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-s-l" role="dialog" aria-labelledby="popover-mixed-s-l-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-s-l-title">왼쪽 · ←</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 왼쪽 정렬, 화살표 왼쪽.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-mixed" data-popover>
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-s-c">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-s-c" role="dialog" aria-labelledby="popover-mixed-s-c-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-s-c-title">왼쪽 · ●</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 왼쪽, 화살표 가운데.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-mixed" data-popover data-arrow-target-align="right">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-s-r">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-s-r" role="dialog" aria-labelledby="popover-mixed-s-r-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-s-r-title">왼쪽 · →</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 왼쪽, 화살표 오른쪽.</p>
        </div>
      </div>
    </div>
    </div>

    <p class="form_field-hint" style="margin: var(--space-lg) 0 var(--space-md);">mixed — 패널 오른쪽 · 화살표 조합</p>
    <div class="popover_row" style="align-items: flex-start;">
    <div class="popover popover_arrow-anchor-mixed popover_panel-align-end" data-popover data-panel-align="end" data-arrow-target-align="left">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-e-l">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-e-l" role="dialog" aria-labelledby="popover-mixed-e-l-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-e-l-title">오른쪽 · ←</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 오른쪽 정렬, 화살표 왼쪽.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-mixed popover_panel-align-end" data-popover data-panel-align="end">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-e-c">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-e-c" role="dialog" aria-labelledby="popover-mixed-e-c-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-e-c-title">오른쪽 · ●</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 오른쪽, 화살표 가운데.</p>
        </div>
      </div>
    </div>
    <div class="popover popover_arrow-anchor-mixed popover_panel-align-end" data-popover data-panel-align="end" data-arrow-target-align="right">
      <button type="button" class="btn btn_outline btn_sm popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-mixed-e-r">
        <span class="btn_label">S</span>
      </button>
      <div class="popover_panel" id="popover-mixed-e-r" role="dialog" aria-labelledby="popover-mixed-e-r-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-mixed-e-r-title">오른쪽 · →</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>패널 오른쪽, 화살표 오른쪽.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="no-arrow-heading">
  <div class="demo_section-header">
    <h2 id="no-arrow-heading">화살표 없음</h2>
    <p><code class="typo_code">popover_no-arrow</code>로 화살표를 숨깁니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="popover popover_no-arrow" data-popover>
      <button type="button" class="btn btn_ghost popover_trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-no-arrow-panel">
        <span class="btn_label">화살표 없음</span>
      </button>
      <div class="popover_panel" id="popover-no-arrow-panel" role="dialog" aria-labelledby="popover-no-arrow-title" hidden>
        <span class="popover_arrow" aria-hidden="true"></span>
        <div class="popover_header">
          <div class="popover_title" id="popover-no-arrow-title">화살표 없는 Popover</div>
          <button type="button" class="btn btn_ghost btn_icon-only popover_close" data-popover-close aria-label="닫기">
          <svg class="popover_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        </div>
        <div class="popover_body">
          <p>화살표가 표시되지 않는 패널입니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>트리거와 패널을 <code class="typo_code">aria-controls</code> · <code class="typo_code">aria-labelledby</code>로 연결합니다. 기본은 닫힌 상태(<code class="typo_code">hidden</code>)이며, 클릭 시 열립니다. 클릭 트리거에는 <code class="typo_code">popover_header</code> · <code class="typo_code">popover_close</code>를 기본으로 둡니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- 기본 (헤더 · 닫기) --&gt;
&lt;div class="popover" data-popover&gt;
  &lt;button type="button" class="btn btn_outline popover_trigger"
    aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-1"&gt;
    &lt;span class="btn_label"&gt;Popover 열기&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class="popover_panel" id="popover-1" role="dialog"
    aria-labelledby="popover-1-title" hidden&gt;
    &lt;span class="popover_arrow" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;div class="popover_header"&gt;
      &lt;div class="popover_title" id="popover-1-title"&gt;안내&lt;/div&gt;
      &lt;button type="button" class="btn btn_ghost btn_icon-only popover_close"
        data-popover-close aria-label="닫기"&gt;…&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="popover_body"&gt;본문&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 라벨 없음 (플로팅 닫기) --&gt;
&lt;div class="popover" data-popover&gt;
  …
  &lt;div class="popover_panel popover_panel-closable" …&gt;
    &lt;button type="button" class="btn btn_ghost btn_icon-only popover_close popover_close-floating"
      data-popover-close aria-label="닫기"&gt;…&lt;/button&gt;
    &lt;div class="popover_body"&gt;…&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 호버 트리거 --&gt;
&lt;div class="popover" data-popover data-popover-trigger="hover"&gt;…&lt;/div&gt;

&lt;!-- 간격 · 화살표 기준 --&gt;
&lt;div class="popover popover_offset-lg popover_arrow-anchor-mixed popover_panel-align-center"
  data-panel-align="center" data-arrow-target-align="left" data-popover&gt;…&lt;/div&gt;</code></pre>
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
          <tr><td><code class="typo_code">popover · popover_panel · popover_arrow</code></td><td>루트·패널·화살표</td></tr>
          <tr><td><code class="typo_code">popover_header · popover_title · popover_close · popover_body · popover_footer</code></td><td>패널 파트</td></tr>
          <tr><td><code class="typo_code">popover_close-floating · popover_panel-closable</code></td><td>라벨 없음 시 플로팅 닫기</td></tr>
          <tr><td><code class="typo_code">popover_sm · popover_lg · popover_no-arrow</code></td><td>크기·화살표</td></tr>
          <tr><td><code class="typo_code">popover_panel-align-center · popover_panel-align-end</code></td><td>패널 교차축 정렬</td></tr>
          <tr><td><code class="typo_code">popover_arrow-anchor-target · popover_arrow-anchor-mixed</code></td><td>화살표·혼합 기준</td></tr>
          <tr><td><code class="typo_code">popover_offset-none · popover_offset-sm · popover_offset-lg</code></td><td>전 방향 간격</td></tr>
          <tr><td><code class="typo_code">popover_offset-top-* · popover_offset-right-* · popover_offset-bottom-* · popover_offset-left-*</code></td><td>방향별 간격</td></tr>
          <tr><td><code class="typo_code">popover_placement-*</code></td><td>배치 변형</td></tr>
          <tr><td><code class="typo_code">data-popover · data-popover-trigger · data-popover-close · data-panel-align · data-arrow-target-align</code></td><td>JS 연동</td></tr>
          <tr><td><code class="typo_code">is-open · is-disabled · hidden</code></td><td>상태</td></tr>
          <tr><td><code class="typo_code">aria-haspopup="dialog"</code> · <code class="typo_code">aria-controls</code> · <code class="typo_code">aria-expanded</code></td><td>트리거 접근성</td></tr>
          <tr><td><code class="typo_code">aria-labelledby</code> · <code class="typo_code">aria-label</code></td><td>패널 제목·이름 연결</td></tr>
        </tbody>
      </table>
    </div>

    <p class="form_field-hint" style="margin-top: var(--space-md);">닫기: 닫기 버튼 · 바깥 클릭 · <code class="typo_code">data-popover-close</code> · <kbd>Esc</kbd>. 클릭 트리거는 패널 우측 상단에 닫기 버튼이 기본 제공됩니다. 열릴 때 다른 Popover는 자동으로 닫힙니다.</p>
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
          <tr><td><code class="typo_code">--popover-min-width</code> · <code class="typo_code">--popover-max-width</code></td><td>10rem · 20rem</td><td>패널 너비</td></tr>
          <tr><td><code class="typo_code">--popover-padding-x</code> · <code class="typo_code">--popover-padding-y</code></td><td><code class="typo_code">var(--space-md)</code></td><td>패널 패딩</td></tr>
          <tr><td><code class="typo_code">--popover-offset</code> · <code class="typo_code">--popover-offset-sm</code> · <code class="typo_code">--popover-offset-md</code> · <code class="typo_code">--popover-offset-lg</code></td><td><code class="typo_code">var(--space-sm)</code> · …</td><td>전 방향 간격 토큰</td></tr>
          <tr><td><code class="typo_code">--popover-offset-top</code> · <code class="typo_code">--popover-offset-right</code> · <code class="typo_code">--popover-offset-bottom</code> · <code class="typo_code">--popover-offset-left</code></td><td>offset 상속</td><td>방향별 간격 (배치에 따라 적용)</td></tr>
          <tr><td><code class="typo_code">--popover-arrow-size</code></td><td>8px</td><td>화살표 크기</td></tr>
          <tr><td><code class="typo_code">--popover-panel-radius</code> · <code class="typo_code">--popover-arrow-edge-inset</code></td><td>12px · calc</td><td>패널 라운드·화살표 가장자리 여백</td></tr>
          <tr><td><code class="typo_code">--popover-arrow-position</code></td><td>—</td><td>target 기준 시 트리거 중앙 위치(px)</td></tr>
          <tr><td><code class="typo_code">--popover-close-size</code> · <code class="typo_code">--popover-close-icon-size</code></td><td>1.5rem · 0.875rem</td><td>닫기 버튼·아이콘 크기</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,o=ho(uo),y=go(uo),yo={title:"Components/피드백/Popover",id:"components-popover",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'클릭·호버로 트리거 옆에 떠 있는 정보 패널 컴포넌트입니다. 짧은 설명·확인·간단한 폼 등 Dropdown보다 풍부한 콘텐츠를 표시할 때 사용하며, aria-haspopup="dialog" · role="dialog"로 접근성을 보장합니다.'}}}},a={name:"기본",render:()=>e(o[0]),parameters:{docs:{...n(o[0].previewHtml).docs,description:{story:o[0].description}}}},t={name:"라벨 없음",render:()=>e(o[1]),parameters:{docs:{...n(o[1].previewHtml).docs,description:{story:o[1].description}}}},p={name:"열린 상태",render:()=>e(o[2]),parameters:{docs:{...n(o[2].previewHtml).docs,description:{story:o[2].description}}}},r={name:"크기",render:()=>e(o[3]),parameters:{docs:{...n(o[3].previewHtml).docs,description:{story:o[3].description}}}},s={name:"간격",render:()=>e(o[4]),parameters:{docs:{...n(o[4].previewHtml).docs,description:{story:o[4].description}}}},d={name:"제목",render:()=>e(o[5]),parameters:{docs:{...n(o[5].previewHtml).docs,description:{story:o[5].description}}}},i={name:"푸터",render:()=>e(o[6]),parameters:{docs:{...n(o[6].previewHtml).docs,description:{story:o[6].description}}}},l={name:"호버 트리거",render:()=>e(o[7]),parameters:{docs:{...n(o[7].previewHtml).docs,description:{story:o[7].description}}}},c={name:"트리거 유형",render:()=>e(o[8]),parameters:{docs:{...n(o[8].previewHtml).docs,description:{story:o[8].description}}}},v={name:"배치",render:()=>e(o[9]),parameters:{docs:{...n(o[9].previewHtml).docs,description:{story:o[9].description}}}},b={name:"폼",render:()=>e(o[10]),parameters:{docs:{...n(o[10].previewHtml).docs,description:{story:o[10].description}}}},_={name:"화살표 기준",render:()=>e(o[11]),parameters:{docs:{...n(o[11].previewHtml).docs,description:{story:o[11].description}}}},u={name:"화살표 없음",render:()=>e(o[12]),parameters:{docs:{...n(o[12].previewHtml).docs,description:{story:o[12].description}}}},g={name:"마크업",tags:["!dev"],render:()=>e(y[0]),parameters:{docs:{source:{code:null},description:{story:y[0].description}}}},h={name:"클래스 · 속성",tags:["!dev"],render:()=>e(y[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},m={name:"디자인 토큰",tags:["!dev"],render:()=>e(y[2]),parameters:{docs:{source:{code:null},description:{story:"Popover 너비·패딩·간격·화살표에 사용하는 CSS 변수입니다."}}}};var f,w,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,k,M;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '라벨 없음',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(M=(k=t.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var B,D,S;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var A,H,z;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(H=r.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var P,E,L;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,O,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '제목',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,I,j;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '푸터',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var N,U,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '호버 트리거',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(q=(U=l.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,K,Q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,V,W;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '배치',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(W=(V=v.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '폼',
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      description: {
        story: demos[10].description
      }
    }
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,oo,eo;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(eo=(oo=_.parameters)==null?void 0:oo.docs)==null?void 0:eo.source}}};var no,ao,to;u.parameters={...u.parameters,docs:{...(no=u.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(to=(ao=u.parameters)==null?void 0:ao.docs)==null?void 0:to.source}}};var po,ro,so;g.parameters={...g.parameters,docs:{...(po=g.parameters)==null?void 0:po.docs,source:{originalSource:`{
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
}`,...(so=(ro=g.parameters)==null?void 0:ro.docs)==null?void 0:so.source}}};var io,lo,co;h.parameters={...h.parameters,docs:{...(io=h.parameters)==null?void 0:io.docs,source:{originalSource:`{
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
}`,...(co=(lo=h.parameters)==null?void 0:lo.docs)==null?void 0:co.source}}};var vo,bo,_o;m.parameters={...m.parameters,docs:{...(vo=m.parameters)==null?void 0:vo.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Popover 너비·패딩·간격·화살표에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(_o=(bo=m.parameters)==null?void 0:bo.docs)==null?void 0:_o.source}}};const fo=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","Demo10","Demo11","Demo12","ApiMarkup","ApiClasses","ApiTokens"];export{h as ApiClasses,g as ApiMarkup,m as ApiTokens,a as Demo0,t as Demo1,b as Demo10,_ as Demo11,u as Demo12,p as Demo2,r as Demo3,s as Demo4,d as Demo5,i as Demo6,l as Demo7,c as Demo8,v as Demo9,fo as __namedExportsOrder,yo as default};

import{b as e,c as ts,g as n,e as as}from"./gulp-demos-C1efgjoy.js";const ns=`<!-- @meta
title: Steps | HTML Components
activeNav: steps
pageTitle: Steps
-->
<div class="page_intro">
  <h1>Steps</h1>
  <p class="lead">다단계 프로세스·마법사·주문 흐름을 단계별로 표시하는 컴포넌트입니다. <code class="typo_code">ol</code> 시맨틱 구조와 <code class="typo_code">aria-current="step"</code>으로 접근성을 지원합니다.</p>
</div>


<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>가로형 단계 표시입니다. <code class="typo_code">is-finished</code> · <code class="typo_code">is-active</code> · <code class="typo_code">is-wait</code>로 진행 상태를 구분합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="steps" aria-label="주문 진행 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">장바구니</p>
          <p class="steps_desc">상품 확인</p>
        </div>
      </li>
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">배송 정보</p>
          <p class="steps_desc">주소 입력</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">결제</p>
          <p class="steps_desc">결제 수단 선택</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">4</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">완료</p>
          <p class="steps_desc">주문 확인</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="simple-heading">
  <div class="demo_section-header">
    <h2 id="simple-heading">간단</h2>
    <p>제목만 표시하는 간결한 단계입니다. 설명이 없는 짧은 플로우에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="steps" aria-label="회원가입 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">이메일 인증</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">2</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">프로필 설정</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">완료</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="vertical-heading">
  <div class="demo_section-header">
    <h2 id="vertical-heading">세로형</h2>
    <p><code class="typo_code">steps_vertical</code>로 사이드바·폼 마법사에 적합한 세로 레이아웃을 적용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="steps steps_vertical steps_demo-narrow" aria-label="프로젝트 생성 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">기본 정보</p>
          <p class="steps_desc">프로젝트 이름과 설명을 입력합니다.</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">2</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">팀 구성</p>
          <p class="steps_desc">멤버를 초대하고 역할을 지정합니다.</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">저장소 연결</p>
          <p class="steps_desc">Git 저장소를 연동합니다.</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">4</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">검토 및 생성</p>
          <p class="steps_desc">설정을 확인하고 프로젝트를 만듭니다.</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="dot-heading">
  <div class="demo_section-header">
    <h2 id="dot-heading">도트</h2>
    <p><code class="typo_code">steps_dot</code>으로 작은 원형 마커를 사용합니다. 밀도 높은 UI·모바일에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
        <ol class="steps steps_dot" aria-label="배송 추적 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true"></span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">주문 접수</p>
          <p class="steps_desc">6월 20일 09:12</p>
        </div>
      </li>
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true"></span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">배송 준비</p>
          <p class="steps_desc">6월 20일 14:30</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true"></span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">배송 중</p>
          <p class="steps_desc">예상 도착 6월 21일</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">배송 완료</p>
          <p class="steps_desc">대기 중</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘</h2>
    <p><code class="typo_code">steps_icon-style</code>로 단계 유형을 아이콘으로 표시합니다. 완료 단계는 체크 아이콘으로 대체합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="steps steps_icon-style" aria-label="온보딩 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">계정 생성</p>
          <p class="steps_desc">이메일 인증 완료</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">2</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">팀 초대</p>
          <p class="steps_desc">동료를 초대하세요</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">첫 프로젝트</p>
          <p class="steps_desc">프로젝트를 만드세요</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="navigable-heading">
  <div class="demo_section-header">
    <h2 id="navigable-heading">탐색 가능</h2>
    <p><code class="typo_code">steps_navigable</code>과 <code class="typo_code">steps_trigger</code>로 완료된 단계를 클릭해 이전 단계로 돌아갈 수 있습니다. 대기 단계는 비활성화됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="steps steps_navigable" aria-label="설정 마법사 — 탐색 가능">
      <li class="steps_item is-finished">
        <button type="button" class="steps_trigger">
          <span class="steps_head">
            <span class="steps_indicator" aria-hidden="true">
              <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span class="steps_tail" aria-hidden="true"></span>
          </span>
          <span class="steps_content">
            <span class="steps_title">환경</span>
            <span class="steps_desc">개발 · 스테이징</span>
          </span>
        </button>
      </li>
      <li class="steps_item is-active">
        <button type="button" class="steps_trigger" aria-current="step">
          <span class="steps_head">
            <span class="steps_indicator" aria-hidden="true">
              <span class="steps_index">2</span>
            </span>
            <span class="steps_tail" aria-hidden="true"></span>
          </span>
          <span class="steps_content">
            <span class="steps_title">알림</span>
            <span class="steps_desc">수신 채널 설정</span>
          </span>
        </button>
      </li>
      <li class="steps_item is-wait">
        <button type="button" class="steps_trigger" disabled>
          <span class="steps_head">
            <span class="steps_indicator" aria-hidden="true">
              <span class="steps_index">3</span>
            </span>
          </span>
          <span class="steps_content">
            <span class="steps_title">확인</span>
            <span class="steps_desc">설정 검토</span>
          </span>
        </button>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="error-heading">
  <div class="demo_section-header">
    <h2 id="error-heading">오류</h2>
    <p><code class="typo_code">is-error</code>로 실패·검증 오류 단계를 표시합니다. 오류 아이콘 또는 번호를 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="steps" aria-label="결제 단계 — 오류">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">주문 확인</p>
          <p class="steps_desc">상품 및 수량 확인</p>
        </div>
      </li>
      <li class="steps_item is-error">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">결제 실패</p>
          <p class="steps_desc">카드 승인이 거절되었습니다</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">완료</p>
          <p class="steps_desc">주문 접수</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="align-heading">
  <div class="demo_section-header">
    <h2 id="align-heading">가운데 정렬</h2>
    <p><code class="typo_code">steps_align-center</code>로 단계 제목과 설명을 가운데 정렬합니다. 대시보드·온보딩 헤더에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ol class="steps steps_align-center" aria-label="출시 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">기획</p>
          <p class="steps_desc">요구사항 정의</p>
        </div>
      </li>
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">개발</p>
          <p class="steps_desc">기능 구현</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">QA</p>
          <p class="steps_desc">품질 검증</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">4</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">출시</p>
          <p class="steps_desc">프로덕션 배포</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">steps_sm</code> · <code class="typo_code">steps_lg</code>로 인디케이터와 텍스트 스케일을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="steps steps_sm" aria-label="Small 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">1단계</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">2</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">2단계</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">3단계</p>
        </div>
      </li>
    </ol>

    <ol class="steps steps_lg" aria-label="Large 단계">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">요구사항</p>
          <p class="steps_desc">범위 및 일정 확정</p>
        </div>
      </li>
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">2</span>
          </span>
          <span class="steps_tail" aria-hidden="true"></span>
        </div>
        <div class="steps_content">
          <p class="steps_title">디자인</p>
          <p class="steps_desc">UI 키트 제작</p>
        </div>
      </li>
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">개발</p>
          <p class="steps_desc">구현 및 테스트</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태 요약</h2>
    <p>각 상태 클래스의 시각적 의미입니다. 현재 단계에는 <code class="typo_code">aria-current="step"</code>을 함께 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="steps" aria-label="상태 예시 — 완료">
      <li class="steps_item is-finished">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">is-finished</p>
          <p class="steps_desc">완료된 단계</p>
        </div>
      </li>
    </ol>

    <ol class="steps" aria-label="상태 예시 — 진행 중">
      <li class="steps_item is-active" aria-current="step">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">2</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">is-active</p>
          <p class="steps_desc">현재 진행 단계</p>
        </div>
      </li>
    </ol>

    <ol class="steps" aria-label="상태 예시 — 대기">
      <li class="steps_item is-wait">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <span class="steps_index">3</span>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">is-wait</p>
          <p class="steps_desc">아직 도달하지 않은 단계</p>
        </div>
      </li>
    </ol>

    <ol class="steps" aria-label="상태 예시 — 오류">
      <li class="steps_item is-error">
        <div class="steps_head">
          <span class="steps_indicator" aria-hidden="true">
            <svg class="steps_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </span>
        </div>
        <div class="steps_content">
          <p class="steps_title">is-error</p>
          <p class="steps_desc">오류가 발생한 단계</p>
        </div>
      </li>
    </ol>
  </div>
</section>


<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>현재 단계에는 <code class="typo_code">is-active</code>와 <code class="typo_code">aria-current="step"</code>을 함께 지정합니다. 마지막 항목에는 <code class="typo_code">steps_tail</code>을 넣지 않습니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;ol class="steps" aria-label="주문 진행 단계"&gt;
  &lt;li class="steps_item is-finished"&gt;
    &lt;div class="steps_head"&gt;
      &lt;span class="steps_indicator" aria-hidden="true"&gt;…&lt;/span&gt;
      &lt;span class="steps_tail" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="steps_content"&gt;
      &lt;p class="steps_title"&gt;장바구니&lt;/p&gt;
      &lt;p class="steps_desc"&gt;상품 확인&lt;/p&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="steps_item is-active" aria-current="step"&gt;…&lt;/li&gt;
  &lt;li class="steps_item is-wait"&gt;…&lt;/li&gt;
&lt;/ol&gt;</code></pre>
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
          <tr><td><code class="typo_code">steps · steps_item · steps_head · steps_indicator</code></td><td>루트·항목·헤드·인디케이터</td></tr>
          <tr><td><code class="typo_code">steps_title · steps_desc · steps_tail</code></td><td>제목·설명·연결선</td></tr>
          <tr><td><code class="typo_code">steps_trigger</code></td><td>navigable 모드 클릭 버튼</td></tr>
          <tr><td><code class="typo_code">steps_vertical · steps_dot · steps_icon-style · steps_navigable</code></td><td>레이아웃·스타일</td></tr>
          <tr><td><code class="typo_code">steps_sm · steps_lg · steps_align-center</code></td><td>크기·정렬</td></tr>
          <tr><td><code class="typo_code">is-finished · is-active · is-wait · is-error</code></td><td>단계 상태</td></tr>
          <tr><td><code class="typo_code">aria-current="step"</code></td><td>현재 단계</td></tr>
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
          <tr><td><code class="typo_code">--steps-indicator-size</code> · <code class="typo_code">--steps-gap</code></td><td>—</td><td>인디케이터·간격</td></tr>
          <tr><td><code class="typo_code">--steps-title-size</code> · <code class="typo_code">--steps-desc-size</code></td><td>—</td><td>타이포</td></tr>
          <tr><td><code class="typo_code">--steps-tail-color</code></td><td>—</td><td>연결선 색</td></tr>
          <tr><td><code class="typo_code">--steps-pulse-duration</code></td><td>1.5s</td><td>is-active 인디케이터 파장</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,s=as(ns),h=ts(ns),ps={title:"Components/네비게이션/Steps",id:"components-steps",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'다단계 프로세스·마법사·주문 흐름을 단계별로 표시하는 컴포넌트입니다. ol 시맨틱 구조와 aria-current="step"으로 접근성을 지원합니다.'}}}},t={name:"기본",render:()=>e(s[0]),parameters:{docs:{...n(s[0].previewHtml).docs,description:{story:s[0].description}}}},a={name:"간단",render:()=>e(s[1]),parameters:{docs:{...n(s[1].previewHtml).docs,description:{story:s[1].description}}}},i={name:"세로형",render:()=>e(s[2]),parameters:{docs:{...n(s[2].previewHtml).docs,description:{story:s[2].description}}}},p={name:"도트",render:()=>e(s[3]),parameters:{docs:{...n(s[3].previewHtml).docs,description:{story:s[3].description}}}},d={name:"아이콘",render:()=>e(s[4]),parameters:{docs:{...n(s[4].previewHtml).docs,description:{story:s[4].description}}}},c={name:"탐색 가능",render:()=>e(s[5]),parameters:{docs:{...n(s[5].previewHtml).docs,description:{story:s[5].description}}}},o={name:"오류",render:()=>e(s[6]),parameters:{docs:{...n(s[6].previewHtml).docs,description:{story:s[6].description}}}},r={name:"가운데 정렬",render:()=>e(s[7]),parameters:{docs:{...n(s[7].previewHtml).docs,description:{story:s[7].description}}}},l={name:"크기",render:()=>e(s[8]),parameters:{docs:{...n(s[8].previewHtml).docs,description:{story:s[8].description}}}},_={name:"상태 요약",render:()=>e(s[9]),parameters:{docs:{...n(s[9].previewHtml).docs,description:{story:s[9].description}}}},v={name:"마크업",tags:["!dev"],render:()=>e(h[0]),parameters:{docs:{source:{code:null},description:{story:h[0].description}}}},m={name:"클래스 · 속성",tags:["!dev"],render:()=>e(h[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},u={name:"디자인 토큰",tags:["!dev"],render:()=>e(h[2]),parameters:{docs:{source:{code:null},description:{story:"Steps 크기·간격·색상에 사용하는 CSS 변수입니다."}}}};var g,y,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,b,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '간단',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var x,B,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '세로형',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var k,f,A;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '도트',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(A=(f=p.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var H,E,T;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var z,M,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '탐색 가능',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,F,I;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '오류',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(I=(F=o.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var U,G,N;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '가운데 정렬',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(N=(G=r.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Q,j,q;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,K,P;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '상태 요약',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(P=(K=_.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var R,V,W;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(V=v.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ss,es;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Steps 크기·간격·색상에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(es=(ss=u.parameters)==null?void 0:ss.docs)==null?void 0:es.source}}};const ds=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","ApiMarkup","ApiClasses","ApiTokens"];export{m as ApiClasses,v as ApiMarkup,u as ApiTokens,t as Demo0,a as Demo1,i as Demo2,p as Demo3,d as Demo4,c as Demo5,o as Demo6,r as Demo7,l as Demo8,_ as Demo9,ds as __namedExportsOrder,ps as default};

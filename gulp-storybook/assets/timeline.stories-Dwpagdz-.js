import{b as n,g as i,e as $,c as ee}from"./gulp-demos-C1efgjoy.js";const Y=`<!-- @meta
title: Timeline | HTML Components
activeNav: timeline
pageTitle: Timeline
-->
<div class="page_intro">
  <h1>Timeline</h1>
  <p class="lead">시간 순서에 따른 이벤트·활동을 표시하는 타임라인 컴포넌트입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline">
      <li class="timeline_item">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-01">2024-06-01 10:00</time>
          <p class="timeline_title">프로젝트 킥오프</p>
          <p class="timeline_desc">팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-10">2024-06-10 14:30</time>
          <p class="timeline_title">1차 릴리스 완료</p>
          <p class="timeline_desc">MVP 기능이 프로덕션에 배포되었습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_warning"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-15">2024-06-15 09:00</time>
          <p class="timeline_title">성능 이슈 발견</p>
          <p class="timeline_desc">대시보드 로딩 시간이 기준을 초과하여 조사를 시작했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_danger"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-18">2024-06-18 16:00</time>
          <p class="timeline_title">긴급 패치 배포</p>
          <p class="timeline_desc">인증 관련 보안 취약점을 수정하는 핫픽스를 배포했습니다.</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="simple-heading">
  <div class="demo_section-header">
    <h2 id="simple-heading">간단</h2>
    <p>제목만 표시하는 간결한 타임라인입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline">
      <li class="timeline_item">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">주문 접수</p>
          <time class="timeline_time" datetime="2024-06-20">오전 9:12</time>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">배송 준비 중</p>
          <time class="timeline_time" datetime="2024-06-20">오전 11:45</time>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <p class="timeline_title">배송 완료</p>
          <time class="timeline_time" datetime="2024-06-21">오후 2:30</time>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="outline-heading">
  <div class="demo_section-header">
    <h2 id="outline-heading">아웃라인 도트</h2>
    <p>timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline">
      <li class="timeline_item">
        <span class="timeline_dot timeline_dot-outline color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">기획 단계</p>
          <p class="timeline_desc">요구사항 정의 및 와이어프레임 작성</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot timeline_dot-outline color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">디자인 단계</p>
          <p class="timeline_desc">UI 키트 및 프로토타입 제작</p>
        </div>
      </li>
      <li class="timeline_item is-active">
        <span class="timeline_dot timeline_dot-outline color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">개발 단계</p>
          <p class="timeline_desc">컴포넌트 구현 및 통합 테스트 진행 중</p>
        </div>
      </li>
      <li class="timeline_item is-pending">
        <span class="timeline_dot timeline_dot-outline"></span>
        <div class="timeline_content">
          <p class="timeline_title">배포 단계</p>
          <p class="timeline_desc">스테이징 검증 후 프로덕션 릴리스 예정</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="icon-heading">
  <div class="demo_section-header">
    <h2 id="icon-heading">아이콘 도트</h2>
    <p>timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline timeline_icon timeline_icon-sm">
      <li class="timeline_item">
        <span class="timeline_dot icon_circle icon_circle-sm color_primary" aria-hidden="true">
          <svg class="icon icon_sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-01">2024-06-01</time>
          <p class="timeline_title">팀원 합류</p>
          <p class="timeline_desc">프론트엔드 개발자 2명이 프로젝트에 참여했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot icon_circle icon_circle-sm color_success" aria-hidden="true">
          <svg class="icon icon_sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
          </svg>
        </span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-10">2024-06-10</time>
          <p class="timeline_title">QA 통과</p>
          <p class="timeline_desc">회귀 테스트 142건 모두 통과했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot icon_circle icon_circle-sm color_warning" aria-hidden="true">
          <svg class="icon icon_sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>
          </svg>
        </span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-15">2024-06-15</time>
          <p class="timeline_title">일정 지연 알림</p>
          <p class="timeline_desc">외부 API 연동 이슈로 1주일 일정이 조정되었습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot icon_circle icon_circle-sm color_danger" aria-hidden="true">
          <svg class="icon icon_sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>
          </svg>
        </span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-18">2024-06-18</time>
          <p class="timeline_title">배포 롤백</p>
          <p class="timeline_desc">결제 모듈 오류로 이전 버전으로 롤백했습니다.</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="card-heading">
  <div class="demo_section-header">
    <h2 id="card-heading">카드형</h2>
    <p>timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline timeline_card">
      <li class="timeline_item">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-20">2024-06-20 09:00</time>
          <p class="timeline_title">디자인 시스템 v2.0 릴리스</p>
          <p class="timeline_desc">타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다.</p>
          <div class="timeline_meta">
            <span class="tag color_primary">Release</span>
            <span class="tag color_default">Design</span>
          </div>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-22">2024-06-22 14:00</time>
          <p class="timeline_title">접근성 감사 완료</p>
          <p class="timeline_desc">WCAG 2.2 AA 기준 47개 항목 검토를 마쳤습니다.</p>
          <div class="timeline_meta">
            <span class="tag color_success">Passed</span>
            <span class="tag color_default">A11y</span>
          </div>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_info"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06-25">2024-06-25 11:30</time>
          <p class="timeline_title">문서 업데이트 예정</p>
          <p class="timeline_desc">Button · Timeline 컴포넌트 가이드가 추가됩니다.</p>
          <div class="timeline_meta">
            <span class="tag color_info">Docs</span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="label-heading">
  <div class="demo_section-header">
    <h2 id="label-heading">날짜 레이블</h2>
    <p>timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline timeline_label-col">
      <li class="timeline_item">
        <time class="timeline_label" datetime="2024-01">2024 Q1</time>
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">알파 버전 출시</p>
          <p class="timeline_desc">내부 테스트용 알파 빌드를 배포했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <time class="timeline_label" datetime="2024-04">2024 Q2</time>
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">베타 공개</p>
          <p class="timeline_desc">선택 파트너사 대상 베타 프로그램을 시작했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <time class="timeline_label" datetime="2024-07">2024 Q3</time>
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <p class="timeline_title">정식 출시</p>
          <p class="timeline_desc">GA 버전이 프로덕션에 배포되었습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <time class="timeline_label" datetime="2024-10">2024 Q4</time>
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">엔터프라이즈 기능</p>
          <p class="timeline_desc">SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다.</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="alternate-heading">
  <div class="demo_section-header">
    <h2 id="alternate-heading">좌우 교차</h2>
    <p>timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline timeline_alternate">
      <li class="timeline_item">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-03">2024년 3월</time>
          <p class="timeline_title">회사 설립</p>
          <p class="timeline_desc">UXKM 팀이 공식적으로 출범했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-06">2024년 6월</time>
          <p class="timeline_title">컴포넌트 가이드 오픈</p>
          <p class="timeline_desc">HTML 컴포넌트 라이브러리 문서를 공개했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2024-09">2024년 9월</time>
          <p class="timeline_title">1,000 스타 달성</p>
          <p class="timeline_desc">GitHub 저장소가 1,000 스타를 돌파했습니다.</p>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_info"></span>
        <div class="timeline_content">
          <time class="timeline_time" datetime="2025-01">2025년 1월</time>
          <p class="timeline_title">v2 로드맵 공개</p>
          <p class="timeline_desc">다크 모드 · RTL · 접근성 강화 계획을 발표했습니다.</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="horizontal-heading">
  <div class="demo_section-header">
    <h2 id="horizontal-heading">가로형</h2>
    <p>timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline timeline_horizontal">
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <p class="timeline_title">신청</p>
          <time class="timeline_time" datetime="2024-06-20">6/20</time>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <p class="timeline_title">심사</p>
          <time class="timeline_time" datetime="2024-06-21">6/21</time>
        </div>
      </li>
      <li class="timeline_item is-active">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">승인</p>
          <time class="timeline_time" datetime="2024-06-22">진행 중</time>
        </div>
      </li>
      <li class="timeline_item is-pending">
        <span class="timeline_dot"></span>
        <div class="timeline_content">
          <p class="timeline_title">완료</p>
          <time class="timeline_time">예정</time>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div>
      <p style="font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;">Small</p>
      <ol class="timeline timeline_sm">
        <li class="timeline_item">
          <span class="timeline_dot color_primary"></span>
          <div class="timeline_content">
            <p class="timeline_title">알림 발송</p>
            <time class="timeline_time">10:30</time>
          </div>
        </li>
        <li class="timeline_item">
          <span class="timeline_dot color_success"></span>
          <div class="timeline_content">
            <p class="timeline_title">수신 확인</p>
            <time class="timeline_time">10:31</time>
          </div>
        </li>
      </ol>
    </div>

    <div>
      <p style="font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;">Large</p>
      <ol class="timeline timeline_lg">
        <li class="timeline_item">
          <span class="timeline_dot color_primary"></span>
          <div class="timeline_content">
            <p class="timeline_title">연간 컨퍼런스</p>
            <p class="timeline_desc">2024 UX 디자인 서밋 참가</p>
            <time class="timeline_time" datetime="2024-11-15">2024-11-15</time>
          </div>
        </li>
        <li class="timeline_item">
          <span class="timeline_dot color_success"></span>
          <div class="timeline_content">
            <p class="timeline_title">워크숍 진행</p>
            <p class="timeline_desc">디자인 토큰 실습 세션</p>
            <time class="timeline_time" datetime="2024-11-16">2024-11-16</time>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <ol class="timeline">
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <p class="timeline_title">계정 생성</p>
          <time class="timeline_time">완료</time>
        </div>
      </li>
      <li class="timeline_item">
        <span class="timeline_dot color_success"></span>
        <div class="timeline_content">
          <p class="timeline_title">프로필 설정</p>
          <time class="timeline_time">완료</time>
        </div>
      </li>
      <li class="timeline_item is-active">
        <span class="timeline_dot color_primary"></span>
        <div class="timeline_content">
          <p class="timeline_title">팀 초대</p>
          <time class="timeline_time">진행 중</time>
        </div>
      </li>
      <li class="timeline_item is-pending">
        <span class="timeline_dot"></span>
        <div class="timeline_content">
          <p class="timeline_title">첫 프로젝트 생성</p>
          <time class="timeline_time">대기</time>
        </div>
      </li>
    </ol>
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
            <td><code class="typo_code">timeline</code></td>
            <td>타임라인 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">timeline_card</code> · <code class="typo_code">timeline_alternate</code> · <code class="typo_code">timeline_horizontal</code></td>
            <td>레이아웃 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">timeline_label-col</code> · <code class="typo_code">timeline_icon</code> · <code class="typo_code">timeline_icon-sm</code></td>
            <td>라벨 열·아이콘 모드</td>
          </tr>
          <tr>
            <td><code class="typo_code">timeline_sm</code> · <code class="typo_code">timeline_lg</code></td>
            <td>크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">timeline_item</code> · <code class="typo_code">timeline_dot</code> · <code class="typo_code">timeline_content</code></td>
            <td>항목 구조</td>
          </tr>
          <tr>
            <td><code class="typo_code">timeline_label</code> · <code class="typo_code">timeline_time</code> · <code class="typo_code">timeline_title</code> · <code class="typo_code">timeline_desc</code></td>
            <td>텍스트 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-active</code> · <code class="typo_code">is-pending</code></td>
            <td>상태</td>
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
            <td><code class="typo_code">--timeline-gap</code></td>
            <td>var(--space-lg)</td>
            <td>항목 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--timeline-dot-size</code> · <code class="typo_code">--timeline-line-width</code></td>
            <td>10px · 2px</td>
            <td>점·연결선</td>
          </tr>
          <tr>
            <td><code class="typo_code">--timeline-label-width</code></td>
            <td>4.5rem</td>
            <td>라벨 열 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--timeline-title-size</code> · <code class="typo_code">--timeline-desc-size</code></td>
            <td>—</td>
            <td>제목·설명 크기</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=$(Y),Z=ee(Y),ie={title:"Components/데이터 표시/Timeline",id:"components-timeline",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"시간 순서에 따른 이벤트·활동을 표시하는 타임라인 컴포넌트입니다."}}}},s={name:"기본",render:()=>n(e[0]),parameters:{docs:{...i(e[0].previewHtml).docs,description:{story:e[0].description}}}},t={name:"간단",render:()=>n(e[1]),parameters:{docs:{...i(e[1].previewHtml).docs,description:{story:e[1].description}}}},l={name:"아웃라인 도트",render:()=>n(e[2]),parameters:{docs:{...i(e[2].previewHtml).docs,description:{story:e[2].description}}}},c={name:"아이콘 도트",render:()=>n(e[3]),parameters:{docs:{...i(e[3].previewHtml).docs,description:{story:e[3].description}}}},a={name:"카드형",render:()=>n(e[4]),parameters:{docs:{...i(e[4].previewHtml).docs,description:{story:e[4].description}}}},o={name:"날짜 레이블",render:()=>n(e[5]),parameters:{docs:{...i(e[5].previewHtml).docs,description:{story:e[5].description}}}},m={name:"좌우 교차",render:()=>n(e[6]),parameters:{docs:{...i(e[6].previewHtml).docs,description:{story:e[6].description}}}},d={name:"가로형",render:()=>n(e[7]),parameters:{docs:{...i(e[7].previewHtml).docs,description:{story:e[7].description}}}},r={name:"크기",render:()=>n(e[8]),parameters:{docs:{...i(e[8].previewHtml).docs,description:{story:e[8].description}}}},p={name:"상태",render:()=>n(e[9]),parameters:{docs:{...i(e[9].previewHtml).docs,description:{story:e[9].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>n(Z[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},v={name:"디자인 토큰",tags:["!dev"],render:()=>n(Z[1]),parameters:{docs:{source:{code:null},description:{story:"Timeline 간격·점·라벨·타이포에 사용하는 CSS 변수입니다."}}}};var u,h,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,C,D;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var b,w,B;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '아웃라인 도트',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var S,A,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '아이콘 도트',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var x,k,z;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '카드형',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(z=(k=a.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var M,T,f;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '날짜 레이블',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var E,L,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '좌우 교차',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var Q,G,P;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '가로형',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(P=(G=d.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var U,F,I;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(I=(F=r.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var R,V,X;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var K,N,W;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(N=_.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var j,q,J;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Timeline 간격·점·라벨·타이포에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const se=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","ApiClasses","ApiTokens"];export{_ as ApiClasses,v as ApiTokens,s as Demo0,t as Demo1,l as Demo2,c as Demo3,a as Demo4,o as Demo5,m as Demo6,d as Demo7,r as Demo8,p as Demo9,se as __namedExportsOrder,ie as default};

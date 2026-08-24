import{b as t,d as $,c as i,e as nn}from"./gulp-demos-uIKTVH8x.js";const Z=`<!-- @meta
title: Pagination | HTML Components
activeNav: pagination
pageTitle: Pagination
-->
<div class="page_intro">
  <h1>Pagination</h1>
  <p class="lead">목록·테이블의 페이지를 이동하는 컴포넌트입니다. <code class="typo_code">nav</code> · <code class="typo_code">ul</code> 시맨틱 구조와 <code class="typo_code">aria-current="page"</code>로 접근성을 지원합니다.</p>
</div>


<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>이전·다음 버튼과 페이지 번호로 구성합니다.</p>
  </div>

  <div class="demo_section-preview">
    <nav class="pagination" aria-label="페이지 이동">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">3</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">4</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">5</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>


<section class="section demo_section" aria-labelledby="minimal-heading">
  <div class="demo_section-header">
    <h2 id="minimal-heading">미니멀</h2>
    <p><code class="typo_code">pagination_minimal</code>로 테두리 없는 가벼운 스타일을 적용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <nav class="pagination pagination_minimal" aria-label="페이지 이동 — 미니멀">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">3</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">4</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">5</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>


<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p><code class="typo_code">pagination_sm</code> · <code class="typo_code">pagination_lg</code>로 항목 스케일을 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="pagination pagination_sm" aria-label="페이지 이동 — small">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>

    <nav class="pagination" aria-label="페이지 이동 — medium">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>

    <nav class="pagination pagination_lg" aria-label="페이지 이동 — large">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>


<section class="section demo_section" aria-labelledby="round-heading">
  <div class="demo_section-header">
    <h2 id="round-heading">둥근</h2>
    <p><code class="typo_code">pagination_round</code>로 pill 형태의 페이지 버튼을 적용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <nav class="pagination pagination_round" aria-label="페이지 이동 — round">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">1</button>
        </li>
        <li class="pagination_item">
          <span class="pagination_ellipsis" aria-hidden="true">…</span>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">4</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">5</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">6</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">7</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">8</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>


<section class="section demo_section" aria-labelledby="ellipsis-heading">
  <div class="demo_section-header">
    <h2 id="ellipsis-heading">페이지 생략</h2>
    <p>페이지가 많을 때 중간 구간을 생략합니다.</p>
  </div>

  <div class="demo_section-preview">
    <nav class="pagination" aria-label="페이지 이동 — 생략">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">1</button>
        </li>
        <li class="pagination_item">
          <span class="pagination_ellipsis" aria-hidden="true">…</span>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">9</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">10</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">11</button>
        </li>
        <li class="pagination_item">
          <span class="pagination_ellipsis" aria-hidden="true">…</span>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">50</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>


<section class="section demo_section" aria-labelledby="simple-heading">
  <div class="demo_section-header">
    <h2 id="simple-heading">심플</h2>
    <p><code class="typo_code">pagination_simple</code>로 이전·다음과 현재/전체 페이지만 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="pagination pagination_simple" aria-label="페이지 이동 — 심플">
      <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지">
        <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
      </button>
      <span class="pagination_simple-text">
        <span class="pagination_simple-current">3</span>
        /
        <span class="pagination_simple-total">12</span>
      </span>
      <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
        <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
      </button>
    </nav>

    <nav class="pagination pagination_simple pagination_minimal" aria-label="페이지 이동 — 심플 미니멀">
      <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
        <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
      </button>
      <span class="pagination_simple-text">
        <span class="pagination_simple-current">1</span>
        /
        <span class="pagination_simple-total">12</span>
      </span>
      <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
        <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
      </button>
    </nav>
  </div>
</section>


<section class="section demo_section" aria-labelledby="toolbar-heading">
  <div class="demo_section-header">
    <h2 id="toolbar-heading">툴바 조합</h2>
    <p><code class="typo_code">pagination_total</code> · <code class="typo_code">pagination_jumper</code>와 함께 테이블 하단 툴바를 구성합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="pagination_wrap">
      <span class="pagination_total">총 128건</span>
      <div class="pagination_wrap-end">
        <nav class="pagination pagination_minimal" aria-label="페이지 이동">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">1</button>
        </li>
        <li class="pagination_item">
          <span class="pagination_ellipsis" aria-hidden="true">…</span>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">4</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">5</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">6</button>
        </li>
        <li class="pagination_item">
          <span class="pagination_ellipsis" aria-hidden="true">…</span>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">13</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
        <label class="pagination_jumper">
          이동
          <input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지">
          페이지
        </label>
      </div>
    </div>
  </div>
</section>


<section class="section demo_section" aria-labelledby="align-heading">
  <div class="demo_section-header">
    <h2 id="align-heading">정렬</h2>
    <p><code class="typo_code">pagination_align-center</code> · <code class="typo_code">pagination_align-end</code>로 가운데·우측 정렬합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="pagination" aria-label="페이지 이동 — 좌측">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>

    <nav class="pagination pagination_align-center" aria-label="페이지 이동 — 가운데">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>

    <nav class="pagination pagination_align-end" aria-label="페이지 이동 — 우측">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>


<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <nav class="pagination" aria-label="페이지 이동 — 첫 페이지">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">1</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">2</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">3</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>

    <nav class="pagination" aria-label="페이지 이동 — 마지막 페이지">
      <ul class="pagination_list">
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_prev" aria-label="이전 페이지">
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">1</button>
        </li>
        <li class="pagination_item">
          <span class="pagination_ellipsis" aria-hidden="true">…</span>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">6</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">7</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">8</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link">9</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_link is-active" aria-current="page">10</button>
        </li>
        <li class="pagination_item">
          <button type="button" class="pagination_btn pagination_next" aria-label="다음 페이지" disabled>
            <svg class="pagination_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</section>


<section class="section" aria-labelledby="usage-heading">
  <h2 id="usage-heading">마크업</h2>
  <p>현재 페이지에는 <code class="typo_code">is-active</code>와 <code class="typo_code">aria-current="page"</code>를 함께 사용합니다. 생략 표시는 <code class="typo_code">aria-hidden="true"</code>를 지정합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>&lt;nav class="pagination" aria-label="페이지 이동"&gt;
  &lt;ul class="pagination_list"&gt;
    &lt;li class="pagination_item"&gt;
      &lt;button type="button" class="pagination_btn pagination_prev"
        aria-label="이전 페이지" disabled&gt;…&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="pagination_item"&gt;
      &lt;button type="button" class="pagination_link is-active"
        aria-current="page"&gt;1&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="pagination_item"&gt;
      &lt;button type="button" class="pagination_link"&gt;2&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="pagination_item"&gt;
      &lt;button type="button" class="pagination_btn pagination_next"
        aria-label="다음 페이지"&gt;…&lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
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
          <tr><td><code class="typo_code">pagination · pagination_list · pagination_item</code></td><td>루트·목록·항목</td></tr>
          <tr><td><code class="typo_code">pagination_link · pagination_prev · pagination_next</code></td><td>페이지·이전·다음 버튼</td></tr>
          <tr><td><code class="typo_code">pagination_ellipsis</code></td><td>생략 표시</td></tr>
          <tr><td><code class="typo_code">pagination_simple · pagination_minimal · pagination_round</code></td><td>스타일 변형</td></tr>
          <tr><td><code class="typo_code">pagination_sm · pagination_lg</code></td><td>크기</td></tr>
          <tr><td><code class="typo_code">pagination_align-center · pagination_align-end</code></td><td>정렬</td></tr>
          <tr><td><code class="typo_code">pagination_wrap · pagination_total · pagination_jumper</code></td><td>툴바 조합</td></tr>
          <tr><td><code class="typo_code">is-active · is-disabled</code></td><td>현재·비활성 페이지</td></tr>
          <tr><td><code class="typo_code">aria-current="page"</code></td><td>현재 페이지 표시</td></tr>
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
          <tr><td><code class="typo_code">--pagination-gap</code> · <code class="typo_code">--pagination-item-min-size</code></td><td>—</td><td>간격·버튼 크기</td></tr>
          <tr><td><code class="typo_code">--pagination-font-size</code></td><td>—</td><td>글자 크기</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,n=nn(Z),_=$(Z),an={title:"Components/네비게이션/Pagination",id:"components-pagination",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'목록·테이블의 페이지를 이동하는 컴포넌트입니다. nav · ul 시맨틱 구조와 aria-current="page"로 접근성을 지원합니다.'}}}},a={name:"기본",render:()=>t(n[0]),parameters:{docs:{...i(n[0].previewHtml).docs,description:{story:n[0].description}}}},e={name:"미니멀",render:()=>t(n[1]),parameters:{docs:{...i(n[1].previewHtml).docs,description:{story:n[1].description}}}},o={name:"크기",render:()=>t(n[2]),parameters:{docs:{...i(n[2].previewHtml).docs,description:{story:n[2].description}}}},s={name:"둥근",render:()=>t(n[3]),parameters:{docs:{...i(n[3].previewHtml).docs,description:{story:n[3].description}}}},l={name:"페이지 생략",render:()=>t(n[4]),parameters:{docs:{...i(n[4].previewHtml).docs,description:{story:n[4].description}}}},r={name:"심플",render:()=>t(n[5]),parameters:{docs:{...i(n[5].previewHtml).docs,description:{story:n[5].description}}}},p={name:"툴바 조합",render:()=>t(n[6]),parameters:{docs:{...i(n[6].previewHtml).docs,description:{story:n[6].description}}}},c={name:"정렬",render:()=>t(n[7]),parameters:{docs:{...i(n[7].previewHtml).docs,description:{story:n[7].description}}}},d={name:"상태",render:()=>t(n[8]),parameters:{docs:{...i(n[8].previewHtml).docs,description:{story:n[8].description}}}},u={name:"마크업",tags:["!dev"],render:()=>t(_[0]),parameters:{docs:{source:{code:null},description:{story:_[0].description}}}},g={name:"클래스 · 속성",tags:["!dev"],render:()=>t(_[1]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},b={name:"디자인 토큰",tags:["!dev"],render:()=>t(_[2]),parameters:{docs:{source:{code:null},description:{story:"Pagination 크기·간격·타이포에 사용하는 CSS 변수입니다."}}}};var m,v,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,k,w;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '미니멀',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(w=(k=e.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,x,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var D,f,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '둥근',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var A,H,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '페이지 생략',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(E=(H=l.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var P,T,M;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '심플',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(M=(T=r.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var O,j,z;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '툴바 조합',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var F,L,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '정렬',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var q,G,I;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,U,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[2]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Pagination 크기·간격·타이포에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const en=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","ApiMarkup","ApiClasses","ApiTokens"];export{g as ApiClasses,u as ApiMarkup,b as ApiTokens,a as Demo0,e as Demo1,o as Demo2,s as Demo3,l as Demo4,r as Demo5,p as Demo6,c as Demo7,d as Demo8,en as __namedExportsOrder,an as default};

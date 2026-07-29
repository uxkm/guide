import{b as n,c as t,e as W,d as X}from"./gulp-demos-uIKTVH8x.js";const R=`<!-- @meta
title: Tree | HTML Components
activeNav: tree
pageTitle: Tree
-->
<div class="page_intro">
  <h1>Tree</h1>
  <p class="lead">계층 구조 데이터를 트리 형태로 표시하는 컴포넌트입니다. 연결선·컴팩트·체크박스 등 다양한 유형을 지원합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>tree_toggle으로 노드를 펼치고 접습니다. tree_bordered로 테두리를 추가할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_bordered" role="tree" aria-label="파일 탐색기">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="src 폴더 접기"></button>
          <span class="tree_icon" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          <span class="tree_label">src</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem" aria-expanded="true">
            <div class="tree_row">
              <button type="button" class="tree_toggle" aria-expanded="true" aria-label="components 폴더 접기"></button>
              <span class="tree_icon" aria-hidden="true">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
              <span class="tree_label">components</span>
            </div>
            <ul class="tree" role="group">
              <li class="tree_item" role="treeitem">
                <div class="tree_row is-selected">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_icon" aria-hidden="true">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                    </svg>
                  </span>
                  <span class="tree_label">button.html</span>
                </div>
              </li>
              <li class="tree_item" role="treeitem">
                <div class="tree_row">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_icon" aria-hidden="true">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                    </svg>
                  </span>
                  <span class="tree_label">card.html</span>
                </div>
              </li>
            </ul>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_icon" aria-hidden="true">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                </svg>
              </span>
              <span class="tree_label">index.html</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem" aria-expanded="false">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="false" aria-label="public 폴더 펼치기"></button>
          <span class="tree_icon" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          <span class="tree_label">public</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_icon" aria-hidden="true">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                </svg>
              </span>
              <span class="tree_label">favicon.ico</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
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
            <td><code class="typo_code">tree</code></td>
            <td>트리 루트·중첩 ul</td>
          </tr>
          <tr>
            <td><code class="typo_code">tree_bordered</code> · <code class="typo_code">tree_lines</code> · <code class="typo_code">tree_compact</code></td>
            <td>스타일 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">tree_item</code> · <code class="typo_code">tree_row</code></td>
            <td>노드 구조</td>
          </tr>
          <tr>
            <td><code class="typo_code">tree_toggle</code> · <code class="typo_code">tree_toggle-plus</code> · <code class="typo_code">tree_toggle_placeholder</code></td>
            <td>펼침 토글</td>
          </tr>
          <tr>
            <td><code class="typo_code">tree_label</code> · <code class="typo_code">tree_link</code> · <code class="typo_code">tree_meta</code> · <code class="typo_code">tree_icon</code></td>
            <td>행 파트</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-selected</code> · <code class="typo_code">is-disabled</code></td>
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
            <td><code class="typo_code">--tree-indent</code></td>
            <td>1.25rem</td>
            <td>들여쓰기</td>
          </tr>
          <tr>
            <td><code class="typo_code">--tree-row-height</code> · <code class="typo_code">--tree-font-size</code></td>
            <td>2rem · var(--text-size-sm)</td>
            <td>행 높이·글자</td>
          </tr>
          <tr>
            <td><code class="typo_code">--tree-toggle-size</code> · <code class="typo_code">--tree-gap</code></td>
            <td>1.25rem · 2px</td>
            <td>토글·간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--tree-line-color</code></td>
            <td>var(--color-border)</td>
            <td>연결선 색</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="simple-heading">
  <div class="demo_section-header">
    <h2 id="simple-heading">간단</h2>
    <p>아이콘 없이 텍스트만 표시하는 트리입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree" role="tree" aria-label="카테고리">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="전자기기 접기"></button>
          <span class="tree_label">전자기기</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">노트북</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">스마트폰</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem">
        <div class="tree_row">
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
          <span class="tree_label">의류</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="lines-heading">
  <div class="demo_section-header">
    <h2 id="lines-heading">연결선</h2>
    <p>tree_lines로 노드 간 연결 가이드라인을 표시합니다. 조직도·파일 탐색기에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_lines tree_bordered" role="tree" aria-label="조직도">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="개발본부 접기"></button>
          <span class="tree_label">개발본부</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem" aria-expanded="true">
            <div class="tree_row">
              <button type="button" class="tree_toggle" aria-expanded="true" aria-label="프론트엔드팀 접기"></button>
              <span class="tree_label">프론트엔드팀</span>
            </div>
            <ul class="tree" role="group">
              <li class="tree_item" role="treeitem">
                <div class="tree_row">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_label">홍길동</span>
                </div>
              </li>
              <li class="tree_item" role="treeitem">
                <div class="tree_row">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_label">김철수</span>
                </div>
              </li>
            </ul>
          </li>
          <li class="tree_item" role="treeitem" aria-expanded="false">
            <div class="tree_row">
              <button type="button" class="tree_toggle" aria-expanded="false" aria-label="백엔드팀 펼치기"></button>
              <span class="tree_label">백엔드팀</span>
            </div>
            <ul class="tree" role="group">
              <li class="tree_item" role="treeitem">
                <div class="tree_row">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_label">이영희</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem">
        <div class="tree_row">
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
          <span class="tree_label">디자인본부</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="compact-heading">
  <div class="demo_section-header">
    <h2 id="compact-heading">컴팩트</h2>
    <p>tree_compact로 행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_compact tree_bordered" role="tree" aria-label="권한 목록">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="관리자 접기"></button>
          <span class="tree_label">관리자</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">사용자 관리</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">설정 변경</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">로그 조회</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem" aria-expanded="false">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="false" aria-label="편집자 펼치기"></button>
          <span class="tree_label">편집자</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">콘텐츠 작성</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem">
        <div class="tree_row">
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
          <span class="tree_label">뷰어</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="plus-toggle-heading">
  <div class="demo_section-header">
    <h2 id="plus-toggle-heading">+/− 토글</h2>
    <p>tree_toggle-plus로 화살표 대신 +/− 아이콘 토글을 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_bordered" role="tree" aria-label="메뉴 구조">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle tree_toggle-plus" aria-expanded="true" aria-label="가이드 접기"></button>
          <span class="tree_label">가이드</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem" aria-expanded="true">
            <div class="tree_row">
              <button type="button" class="tree_toggle tree_toggle-plus" aria-expanded="true" aria-label="시작하기 접기"></button>
              <span class="tree_label">시작하기</span>
            </div>
            <ul class="tree" role="group">
              <li class="tree_item" role="treeitem">
                <div class="tree_row">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_label">설치</span>
                </div>
              </li>
              <li class="tree_item" role="treeitem">
                <div class="tree_row">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_label">빠른 시작</span>
                </div>
              </li>
            </ul>
          </li>
          <li class="tree_item" role="treeitem" aria-expanded="false">
            <div class="tree_row">
              <button type="button" class="tree_toggle tree_toggle-plus" aria-expanded="false" aria-label="컴포넌트 펼치기"></button>
              <span class="tree_label">컴포넌트</span>
            </div>
            <ul class="tree" role="group">
              <li class="tree_item" role="treeitem">
                <div class="tree_row">
                  <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
                  <span class="tree_label">Button</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="checkbox-heading">
  <div class="demo_section-header">
    <h2 id="checkbox-heading">체크박스</h2>
    <p>tree_check로 다중 선택 트리를 구성합니다. 부모·자식 노드에 체크박스를 배치할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_bordered" role="tree" aria-label="권한 선택" aria-multiselectable="true">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="대시보드 접기"></button>
          <label class="tree_check">
            <input type="checkbox" checked aria-label="대시보드">
          </label>
          <span class="tree_label">대시보드</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <label class="tree_check">
                <input type="checkbox" checked aria-label="조회">
              </label>
              <span class="tree_label">조회</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <label class="tree_check">
                <input type="checkbox" aria-label="보내기">
              </label>
              <span class="tree_label">보내기</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem" aria-expanded="false">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="false" aria-label="설정 펼치기"></button>
          <label class="tree_check">
            <input type="checkbox" aria-label="설정">
          </label>
          <span class="tree_label">설정</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <label class="tree_check">
                <input type="checkbox" aria-label="사용자 관리">
              </label>
              <span class="tree_label">사용자 관리</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <label class="tree_check">
                <input type="checkbox" aria-label="알림 설정">
              </label>
              <span class="tree_label">알림 설정</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="meta-heading">
  <div class="demo_section-header">
    <h2 id="meta-heading">메타 · 배지</h2>
    <p>tree_meta로 파일 크기·항목 수 등 보조 정보를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_bordered" role="tree" aria-label="프로젝트 파일">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="assets 접기"></button>
          <span class="tree_icon" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          <span class="tree_label">assets</span>
          <span class="tree_meta">3개</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_icon" aria-hidden="true">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                </svg>
              </span>
              <span class="tree_label">logo.png</span>
              <span class="tree_meta">24 KB</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_icon" aria-hidden="true">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                </svg>
              </span>
              <span class="tree_label">hero.jpg</span>
              <span class="tree_meta">1.2 MB</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_icon" aria-hidden="true">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                </svg>
              </span>
              <span class="tree_label">styles.css</span>
              <span class="tree_meta">8 KB</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem">
        <div class="tree_row">
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
          <span class="tree_icon" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
            </svg>
          </span>
          <span class="tree_label">package.json</span>
          <span class="tag color_default">수정됨</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="disabled-heading">
  <div class="demo_section-header">
    <h2 id="disabled-heading">비활성</h2>
    <p>tree_row에 is-disabled를 적용해 선택·상호작용을 막습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_bordered" role="tree" aria-label="기능 목록">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="기본 기능 접기"></button>
          <span class="tree_label">기본 기능</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">대시보드</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row is-disabled">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">고급 분석 (Pro)</span>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row is-disabled">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">API 연동 (Enterprise)</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem" aria-expanded="false">
        <div class="tree_row is-disabled">
          <button type="button" class="tree_toggle" aria-expanded="false" aria-label="베타 기능 펼치기" disabled></button>
          <span class="tree_label">베타 기능</span>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row is-disabled">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <span class="tree_label">AI 어시스턴트</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>

<section class="section demo_section" aria-labelledby="selectable-heading">
  <div class="demo_section-header">
    <h2 id="selectable-heading">선택 가능</h2>
    <p>tree_link로 행 전체를 클릭 가능하게 만듭니다. is-selected로 현재 선택 항목을 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <ul class="tree tree_bordered" role="tree" aria-label="네비게이션">
      <li class="tree_item" role="treeitem" aria-expanded="true">
        <div class="tree_row">
          <button type="button" class="tree_toggle" aria-expanded="true" aria-label="문서 접기"></button>
          <button type="button" class="tree_link">
            <span class="tree_label">문서</span>
          </button>
        </div>
        <ul class="tree" role="group">
          <li class="tree_item" role="treeitem">
            <div class="tree_row is-selected">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <button type="button" class="tree_link">
                <span class="tree_label">시작하기</span>
              </button>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <button type="button" class="tree_link">
                <span class="tree_label">컴포넌트</span>
              </button>
            </div>
          </li>
          <li class="tree_item" role="treeitem">
            <div class="tree_row">
              <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
              <button type="button" class="tree_link">
                <span class="tree_label">디자인 토큰</span>
              </button>
            </div>
          </li>
        </ul>
      </li>
      <li class="tree_item" role="treeitem">
        <div class="tree_row">
          <span class="tree_toggle tree_toggle_placeholder" aria-hidden="true"></span>
          <button type="button" class="tree_link">
            <span class="tree_label">변경 이력</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</section>
`,e=W(R),U=X(R),Z={title:"Components/데이터 표시/Tree",id:"components-tree",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"계층 구조 데이터를 트리 형태로 표시하는 컴포넌트입니다. 연결선·컴팩트·체크박스 등 다양한 유형을 지원합니다."}}}},s={name:"기본",render:()=>n(e[0]),parameters:{docs:{...t(e[0].previewHtml).docs,description:{story:e[0].description}}}},a={name:"간단",render:()=>n(e[1]),parameters:{docs:{...t(e[1].previewHtml).docs,description:{story:e[1].description}}}},r={name:"연결선",render:()=>n(e[2]),parameters:{docs:{...t(e[2].previewHtml).docs,description:{story:e[2].description}}}},l={name:"컴팩트",render:()=>n(e[3]),parameters:{docs:{...t(e[3].previewHtml).docs,description:{story:e[3].description}}}},o={name:"+/− 토글",render:()=>n(e[4]),parameters:{docs:{...t(e[4].previewHtml).docs,description:{story:e[4].description}}}},i={name:"체크박스",render:()=>n(e[5]),parameters:{docs:{...t(e[5].previewHtml).docs,description:{story:e[5].description}}}},d={name:"메타 · 배지",render:()=>n(e[6]),parameters:{docs:{...t(e[6].previewHtml).docs,description:{story:e[6].description}}}},c={name:"비활성",render:()=>n(e[7]),parameters:{docs:{...t(e[7].previewHtml).docs,description:{story:e[7].description}}}},p={name:"선택 가능",render:()=>n(e[8]),parameters:{docs:{...t(e[8].previewHtml).docs,description:{story:e[8].description}}}},_={name:"클래스 · 속성",tags:["!dev"],render:()=>n(U[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},u={name:"디자인 토큰",tags:["!dev"],render:()=>n(U[1]),parameters:{docs:{source:{code:null},description:{story:"Tree 들여쓰기·행 높이·토글·연결선에 사용하는 CSS 변수입니다."}}}};var m,g,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,h,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,C,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '연결선',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var k,D,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '컴팩트',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var f,H,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '+/− 토글',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(S=(H=o.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var A,M,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '체크박스',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var E,T,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '메타 · 배지',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var F,L,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '비활성',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var j,I,K;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '선택 가능',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(K=(I=p.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var P,N,q;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(N=_.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var G,J,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Tree 들여쓰기·행 높이·토글·연결선에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const $=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","ApiClasses","ApiTokens"];export{_ as ApiClasses,u as ApiTokens,s as Demo0,a as Demo1,r as Demo2,l as Demo3,o as Demo4,i as Demo5,d as Demo6,c as Demo7,p as Demo8,$ as __namedExportsOrder,Z as default};

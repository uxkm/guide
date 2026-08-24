import{r as s,g as d,a as n,p as l}from"./gulp-demos-uIKTVH8x.js";const a=`<!-- @meta
title: 설치 및 사용 | HTML Components
activeNav: getting-started
pageTitle: 설치 및 사용
-->
<div class="page_intro">
  <h1>설치 및 사용</h1>
  <p class="lead">이 가이드 저장소의 설치·실행 방법을 안내합니다. HTML 문서 사이트는 <strong>Gulp</strong>로 빌드하고, 같은 <code class="typo_code">src/</code> 마크업을 <strong>Storybook</strong>에서도 확인할 수 있습니다. <code class="typo_code">pnpm</code> 스크립트로 두 환경을 실행합니다. 컴포넌트 마크업·CSS는 Gulp/Storybook 없이도 다른 프로젝트에 적용할 수 있습니다.</p>
</div>

<section class="section" aria-labelledby="requirements-heading">
  <h2 id="requirements-heading">사전 요구사항</h2>
  <p>아래 환경이 설치되어 있어야 합니다.</p>

  <div class="table_wrap">
    <table class="table table_bordered table_compact">
      <thead>
        <tr>
          <th scope="col">도구</th>
          <th scope="col">버전</th>
          <th scope="col">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Node.js</td>
          <td>18 이상 권장</td>
          <td>LTS 버전 사용</td>
        </tr>
        <tr>
          <td>pnpm</td>
          <td>9.x</td>
          <td><code class="typo_code">packageManager</code> 필드에 명시된 버전</td>
        </tr>
        <tr>
          <td>Gulp · Storybook</td>
          <td>devDependencies</td>
          <td><code class="typo_code">pnpm install</code> 시 함께 설치</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section" aria-labelledby="install-heading">
  <h2 id="install-heading">설치</h2>
  <p>이 가이드 저장소를 클론한 뒤 프로젝트 루트에서 의존성을 설치합니다. Gulp · Storybook 및 관련 패키지가 <code class="typo_code">devDependencies</code>로 함께 설치됩니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
# 저장소 클론
git clone &lt;repository-url&gt;
cd guide

# 의존성 설치
pnpm install</code></pre>
  </div>
</section>

<section class="section" aria-labelledby="scripts-heading">
  <h2 id="scripts-heading">pnpm 스크립트</h2>
  <p><code class="typo_code">package.json</code>에 정의된 주요 스크립트입니다.</p>

  <div class="table_wrap">
    <table class="table table_bordered table_compact">
      <thead>
        <tr>
          <th scope="col">명령</th>
          <th scope="col">설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="typo_code">pnpm dev</code></td>
          <td>Gulp 기본 태스크 — build + BrowserSync + watch (<code class="typo_code">html/</code>)</td>
        </tr>
        <tr>
          <td><code class="typo_code">pnpm build</code></td>
          <td>Gulp 프로덕션 빌드 → <code class="typo_code">html/</code></td>
        </tr>
        <tr>
          <td><code class="typo_code">pnpm watch</code></td>
          <td><code class="typo_code">pnpm dev</code>와 동일 (build + BrowserSync + watch)</td>
        </tr>
        <tr>
          <td><code class="typo_code">pnpm storybook</code></td>
          <td>Storybook 개발 서버 — <code class="typo_code">http://localhost:6008</code></td>
        </tr>
        <tr>
          <td><code class="typo_code">pnpm build-storybook</code></td>
          <td>Storybook 정적 빌드 → <code class="typo_code">storybook-static/</code></td>
        </tr>
        <tr>
          <td><code class="typo_code">pnpm preview-storybook</code></td>
          <td>빌드된 Storybook 미리보기 (port 6008)</td>
        </tr>
        <tr>
          <td><code class="typo_code">pnpm deploy:main</code></td>
          <td>Storybook을 <code class="typo_code">main/gulp-storybook/</code>에 배포</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section" aria-labelledby="storybook-heading">
  <h2 id="storybook-heading">Storybook</h2>
  <p>Storybook은 <code class="typo_code">src/</code>의 HTML·SCSS를 그대로 사용합니다. 컴포넌트 스토리는 <code class="typo_code">stories/</code>에 있으며, 데모 마크업은 gulp 가이드의 <code class="typo_code">.demo_section-preview</code>와 동일합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
# Storybook 개발 (포트 6008)
pnpm storybook

# 정적 빌드
pnpm build-storybook

# 빌드 결과 미리보기
pnpm preview-storybook</code></pre>
  </div>

  <p>설정은 <code class="typo_code">.storybook/</code>, 스토리는 <code class="typo_code">stories/</code>에 있습니다. 배포는 <code class="typo_code">pnpm deploy:main</code>으로 <code class="typo_code">guide.uxkm.io/gulp-storybook/</code>에 올립니다. HTML 가이드(<code class="typo_code">html/</code>) 배포는 <code class="typo_code">gulp</code> 브랜치에서 별도로 수행합니다.</p>
</section>

<section class="section" aria-labelledby="gulp-heading">
  <h2 id="gulp-heading">Gulp</h2>
  <p>HTML 가이드의 빌드·감시·로컬 서버는 루트 <code class="typo_code">gulpfile.js</code>에 정의된 Gulp 태스크로 동작합니다. HTML 조립 로직은 <code class="typo_code">scripts/html-assembler.js</code>에서 처리합니다.</p>

  <div class="table_wrap">
    <table class="table table_bordered table_compact">
      <thead>
        <tr>
          <th scope="col">Gulp 태스크</th>
          <th scope="col">설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="typo_code">gulp build</code></td>
          <td>프로덕션 빌드 — <code class="typo_code">html/</code>를 비운 뒤 styles · scripts · vendor · html · images · static을 병렬 실행</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp</code> / <code class="typo_code">gulp watch</code></td>
          <td><code class="typo_code">build</code> 후 BrowserSync 서버 기동 + 파일 watch</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp styles</code></td>
          <td><code class="typo_code">src/scss/main.scss</code> → <code class="typo_code">html/css/main.css</code> (Sass 컴파일, source map)</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp html</code></td>
          <td><code class="typo_code">src/**/*.html</code> → 레이아웃 조립 후 <code class="typo_code">html/</code> 출력</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp scripts</code></td>
          <td><code class="typo_code">src/js/</code> → <code class="typo_code">html/js/</code> 복사</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp vendorScripts</code> · <code class="typo_code">vendorStyles</code></td>
          <td>Swiper 등 vendor 자산 복사</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp images</code></td>
          <td><code class="typo_code">src/images/</code> → 압축 후 <code class="typo_code">html/images/</code> 출력</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp static</code></td>
          <td>폰트·기타 정적 파일 복사</td>
        </tr>
        <tr>
          <td><code class="typo_code">gulp clean</code></td>
          <td><code class="typo_code">html/</code> 폴더 삭제</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
# Gulp 직접 실행
pnpm exec gulp build
pnpm exec gulp
pnpm exec gulp styles</code></pre>
  </div>
</section>

<section class="section" aria-labelledby="dev-heading">
  <h2 id="dev-heading">개발 서버 (Gulp)</h2>
  <p>HTML 가이드 개발 중에는 <code class="typo_code">pnpm dev</code>로 Gulp 기본 태스크를 실행합니다. Gulp가 <code class="typo_code">src/</code>의 SCSS · HTML · JS · 이미지 변경을 감지해 해당 태스크를 다시 실행하고, BrowserSync가 브라우저를 새로고침합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>pnpm dev   # gulp / gulp watch 와 동일</code></pre>
  </div>

  <p>로컬 서버가 시작되면 터미널에 접속 URL이 표시됩니다. 서버 설정은 <code class="typo_code">gulpfile.js</code>의 BrowserSync 옵션을 따릅니다. Storybook만 볼 때는 <code class="typo_code">pnpm storybook</code>을 사용합니다.</p>
</section>

<section class="section" aria-labelledby="build-heading">
  <h2 id="build-heading">프로덕션 빌드 (Gulp)</h2>
  <p><code class="typo_code">pnpm build</code>는 Gulp <code class="typo_code">build</code> 태스크를 실행합니다. 배포용 결과물은 <code class="typo_code">html/</code> 폴더에 생성되며, 이 폴더 전체를 정적 호스팅에 업로드하면 됩니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>pnpm build   # gulp build 와 동일</code></pre>
  </div>

  <p>Gulp <code class="typo_code">build</code> 태스크가 수행하는 작업:</p>
  <ul class="list list_bullet">
    <li class="list_item"><code class="typo_code">clean</code> — <code class="typo_code">html/</code> 초기화</li>
    <li class="list_item"><code class="typo_code">styles</code> — <code class="typo_code">src/scss/main.scss</code> → <code class="typo_code">html/css/main.css</code></li>
    <li class="list_item"><code class="typo_code">html</code> — <code class="typo_code">src/**/*.html</code> 레이아웃 조립 → <code class="typo_code">html/</code></li>
    <li class="list_item"><code class="typo_code">scripts</code> · <code class="typo_code">vendorScripts</code> · <code class="typo_code">vendorStyles</code> — JS·vendor 복사</li>
    <li class="list_item"><code class="typo_code">images</code> — 이미지 압축 출력</li>
    <li class="list_item"><code class="typo_code">static</code> — 폰트·기타 정적 파일 복사</li>
  </ul>
</section>

<section class="section" aria-labelledby="styles-heading">
  <h2 id="styles-heading">스타일 적용</h2>
  <p><strong>이 가이드 사이트</strong>에서 Gulp <code class="typo_code">build</code> 후 생성된 CSS를 연결하는 방법입니다. Storybook은 <code class="typo_code">.storybook/preview</code>에서 <code class="typo_code">src/scss/main.scss</code>를 직접 import합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- Gulp build 결과 — 루트 페이지 --&gt;
&lt;link rel="stylesheet" href="css/main.css"&gt;

&lt;!-- Gulp build 결과 — components/ 하위 페이지 --&gt;
&lt;link rel="stylesheet" href="../css/main.css"&gt;</code></pre>
  </div>

  <p><strong>다른 프로젝트</strong>에서 SCSS 소스를 직접 쓰려면 자체 빌드 도구(Webpack, Vite, Gulp 등)에 <code class="typo_code">src/scss/main.scss</code>를 포함하거나, 필요한 컴포넌트만 선택 import합니다. 이 경우에도 컴포넌트 클래스·마크업 규칙은 동일하게 적용됩니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
// 전체 스타일
@use "main";

// 또는 필요한 컴포넌트만 선택
@use "tokens";
@use "themes";
@use "reset";
@use "components/button";
@use "components/input";
@use "components/alert";</code></pre>
  </div>
</section>

<section class="section" aria-labelledby="html-heading">
  <h2 id="html-heading">문서 페이지 추가 (Gulp html)</h2>
  <p>이 가이드에 새 문서 페이지를 추가할 때는 <code class="typo_code">src/</code> 또는 <code class="typo_code">src/components/</code>에 HTML 조각을 만들고 상단에 <code class="typo_code">@meta</code> 주석을 작성합니다. Gulp <code class="typo_code">html</code> 태스크가 <code class="typo_code">_layouts/base.html</code> · <code class="typo_code">header.html</code>과 조립합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- @meta
title: My Page | HTML Components
activeNav: my-page
pageTitle: My Page
--&gt;
&lt;div class="page_intro"&gt;
  &lt;h1&gt;My Page&lt;/h1&gt;
  &lt;p class="lead"&gt;페이지 설명&lt;/p&gt;
&lt;/div&gt;

&lt;section class="section" aria-labelledby="section-heading"&gt;
  &lt;h2 id="section-heading"&gt;섹션 제목&lt;/h2&gt;
  &lt;p&gt;본문 내용&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </div>

  <p>사이드바에 메뉴를 추가하려면 <code class="typo_code">src/js/nav.js</code>의 <code class="typo_code">NAV_GROUPS</code> 배열에 항목을 등록합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
// src/js/nav.js
{
  title: '내 카테고리',
  items: [
    {
      label: 'My Page',
      href: 'components/my-page.html',
      slug: 'my-page',   // @meta activeNav와 일치
    },
  ],
}</code></pre>
  </div>
</section>

<section class="section" aria-labelledby="component-heading">
  <h2 id="component-heading">컴포넌트 마크업 사용</h2>
  <p>각 컴포넌트 문서의 <strong>마크업</strong> 섹션 HTML은 Gulp·Storybook과 무관하게 어떤 프로젝트에도 복사해 사용할 수 있습니다. 클래스 이름과 ARIA 속성을 그대로 쓰면 스타일이 적용됩니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- Button 예시 --&gt;
&lt;button type="button" class="btn btn_filled color_primary"&gt;
  &lt;span class="btn_label"&gt;저장&lt;/span&gt;
&lt;/button&gt;

&lt;!-- Alert 예시 --&gt;
&lt;div class="alert color_info" role="alert"&gt;
  &lt;div class="alert_body"&gt;
    &lt;p class="alert_desc"&gt;변경 사항이 저장되었습니다.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>

  <p>모달·드로어·아코디언 등 인터랙션이 필요한 컴포넌트는 <code class="typo_code">demo.js</code>의 동작을 참고하거나, 해당 <code class="typo_code">data-*</code> 속성과 JS를 함께 포함합니다.</p>
</section>

<section class="section" aria-labelledby="scripts-include-heading">
  <h2 id="scripts-include-heading">가이드 사이트 스크립트</h2>
  <p>이 가이드 사이트의 레이아웃(사이드바·테마·데모)을 쓰려면 아래 스크립트가 필요합니다. Gulp <code class="typo_code">html</code> 태스크가 빌드된 HTML에 자동 삽입합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- 테마 초기화 (FOUC 방지) — head 내 link 앞에 삽입 --&gt;
&lt;script&gt;
  !function () {
    try {
      var t = localStorage.getItem("guide-theme");
      if ("light" !== t &amp;&amp; "dark" !== t) {
        t = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark" : "light";
      }
      document.documentElement.setAttribute("data-theme", t);
    } catch (e) {}
  }();
&lt;/script&gt;

&lt;!-- body 하단 --&gt;
&lt;script src="js/theme.js"&gt;&lt;/script&gt;
&lt;script src="js/nav.js"&gt;&lt;/script&gt;
&lt;script src="js/demo.js"&gt;&lt;/script&gt;</code></pre>
  </div>

  <p>컴포넌트만 단독으로 사용하는 경우 CSS만 연결해도 되며, 인터랙션이 필요한 경우에만 해당 JS를 포함하면 됩니다.</p>
</section>

<section class="section" aria-labelledby="theme-heading">
  <h2 id="theme-heading">테마</h2>
  <p>라이트/다크 테마는 <code class="typo_code">data-theme</code> 속성으로 전환됩니다. <code class="typo_code">theme.js</code>가 헤더의 토글 버튼과 <code class="typo_code">localStorage</code>를 관리합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
&lt;!-- HTML 루트에 테마 지정 --&gt;
&lt;html lang="ko" data-theme="light"&gt;
&lt;html lang="ko" data-theme="dark"&gt;

&lt;!-- JS로 전환 --&gt;
document.documentElement.setAttribute("data-theme", "dark");</code></pre>
  </div>

  <p>색상·간격 등 디자인 값은 <code class="typo_code">src/scss/_tokens.scss</code>와 <code class="typo_code">_themes.scss</code>에서 CSS 변수로 정의됩니다. 기본값과 사용 방법은 <a href="design-tokens.html">디자인 토큰</a> 문서를 참고하세요.</p>
</section>

<section class="section" aria-labelledby="images-heading">
  <h2 id="images-heading">이미지 (Gulp images)</h2>
  <p><code class="typo_code">src/images/</code>에 추가한 이미지는 Gulp <code class="typo_code">images</code> 태스크가 압축해 <code class="typo_code">html/images/</code>에 출력합니다. Storybook은 <code class="typo_code">staticDirs</code>로 <code class="typo_code">src/images</code>를 <code class="typo_code">/images</code>에 제공합니다.</p>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-code">
    <pre class="typo_pre"><code>
src/images/
├── avatar-sample.svg
└── hero-banner.webp

# HTML에서 참조 (루트 페이지)
&lt;img src="images/avatar-sample.svg" alt="아바타"&gt;

# components/ 하위 페이지
&lt;img src="../images/avatar-sample.svg" alt="아바타"&gt;</code></pre>
  </div>

  <p>지원 형식: jpg, jpeg, png, gif, svg, webp, avif</p>
</section>

<section class="section" aria-labelledby="new-component-heading">
  <h2 id="new-component-heading">새 컴포넌트 문서 추가</h2>
  <p>이 가이드에 컴포넌트 문서를 새로 등록할 때 추가·수정하는 파일입니다. Gulp <code class="typo_code">build</code> 또는 <code class="typo_code">html</code> · <code class="typo_code">styles</code> 태스크가 HTML 가이드에 반영하고, Storybook은 <code class="typo_code">stories/</code> 스토리를 추가하면 메뉴에 나타납니다.</p>

  <div class="table_wrap">
    <table class="table table_bordered table_compact">
      <thead>
        <tr>
          <th scope="col">파일</th>
          <th scope="col">역할</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code class="typo_code">src/components/{name}.html</code></td>
          <td>데모·문서 페이지</td>
        </tr>
        <tr>
          <td><code class="typo_code">src/scss/components/_{name}.scss</code></td>
          <td>컴포넌트 스타일</td>
        </tr>
        <tr>
          <td><code class="typo_code">src/scss/components/_index.scss</code></td>
          <td><code class="typo_code">@use "{name}"</code> 등록</td>
        </tr>
        <tr>
          <td><code class="typo_code">src/js/nav.js</code></td>
          <td>HTML 가이드 사이드바 메뉴 항목 추가</td>
        </tr>
        <tr>
          <td><code class="typo_code">stories/components/{name}.stories.js</code></td>
          <td>Storybook 스토리 (좌측 Components 메뉴)</td>
        </tr>
        <tr>
          <td><code class="typo_code">src/scss/_tokens.scss</code></td>
          <td>필요 시 디자인 토큰 추가</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>파일 추가 후 <code class="typo_code">pnpm dev</code>(Gulp) 또는 <code class="typo_code">pnpm build</code>를 실행하면 <code class="typo_code">html/components/{name}.html</code>이 생성됩니다. Storybook은 <code class="typo_code">pnpm storybook</code> 실행 중이면 스토리 변경을 바로 반영합니다.</p>
</section>
`,p=n(l(a)),r={title:"설치 및 사용",id:"getting-started",tags:["autodocs"],parameters:d()},e={render:()=>s(p)};var o,t,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => renderGuidePage(body)
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const m=["Page"];export{e as Page,m as __namedExportsOrder,r as default};

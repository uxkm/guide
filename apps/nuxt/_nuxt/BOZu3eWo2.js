import{L as e,Y as t,b as n,d as r,i,m as a,st as o,wt as s,y as c}from"./CCnt5OSV.js";import{t as l}from"./Boqzjccl.js";import{l as u,t as d}from"./DkmWXf_S.js";import{t as f}from"./gHQDdAlU.js";import{t as p}from"./DD3RWXAt.js";import{t as m}from"./UFk9LiVn.js";import{t as h}from"./Ca85r0nz2.js";import{t as g}from"./BYqKyl8G2.js";import{n as _,t as v}from"./C5j6d0Ds.js";var y=[{key:`tool`,label:`도구`},{key:`version`,label:`버전`},{key:`note`,label:`비고`}],b=[{tool:`Node.js`,version:`22.19+ / 24.11+`,note:`Nuxt 4.5.1이 지원하는 LTS 버전 사용`},{tool:`pnpm`,version:`9.15.9`,note:`package.json의 packageManager 필드 기준`}],x=[{key:`command`,label:`명령`},{key:`description`,label:`설명`}],S=[{command:`pnpm dev`,description:`Nuxt 개발 서버 실행 (기본 주소: http://localhost:3000)`},{command:`pnpm build`,description:`Nitro 프로덕션 서버 빌드`},{command:`pnpm generate`,description:`정적 사이트 생성 (.output/public/)`},{command:`pnpm preview`,description:`build 또는 generate 결과를 로컬에서 미리보기`},{command:`pnpm deploy:main`,description:`nuxt 브랜치의 정적 결과물을 main/nuxt/에 배포`}],C=[{key:`path`,label:`파일`},{key:`role`,label:`역할`}],w=[{path:`src/doc/components/{name}.vue`,role:`컴포넌트 문서 페이지`},{path:`src/components/{Name}.vue`,role:`재사용 UI 컴포넌트 (Vue SFC)`},{path:`src/scss/components/_{name}.scss`,role:`컴포넌트 스타일`},{path:`src/scss/components/_index.scss`,role:`@use "{name}" 등록`},{path:`src/data/navigation.js`,role:`사이드바 메뉴 항목 추가`},{path:`src/pages/components/[slug].vue`,role:`Nuxt 동적 문서 라우트`}],T=`# 저장소 클론
git clone git@github.com:uxkm/guide.git
cd guide

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev`,E=`# Nitro 서버용 빌드
pnpm build

# 또는 정적 사이트 생성
pnpm generate

# 생성 결과 확인
pnpm preview`,D=`// 전체 스타일 — Vite의 SCSS loadPaths에 src/scss를 등록한 경우
@use "main";

// 또는 필요한 컴포넌트만 선택
@use "tokens";
@use "themes";
@use "reset";
@use "components/button";
@use "components/input";
@use "components/alert";`,O=`<!-- Button 예시 -->
<button type="button" class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>

<!-- Alert 예시 -->
<div class="alert color_info" role="alert">
  <div class="alert_body">
    <p class="alert_desc">변경 사항이 저장되었습니다.</p>
  </div>
</div>`,k=`<!-- HTML 루트에 테마 지정 -->
<html lang="ko" data-theme="light">
<html lang="ko" data-theme="dark">

<!-- JS로 전환 -->
document.documentElement.setAttribute("data-theme", "dark");`,A={title:`설치 및 사용 | HTML Components`,activeNav:`getting-started`,pageTitle:`설치 및 사용`},j={__name:`getting-started`,setup(A){return(A,j)=>{let M=l;return e(),a(i,null,[n(v,{title:`설치 및 사용`},{lead:t(()=>[j[0]||=c(` 저장소를 로컬에서 실행하고 UI 컴포넌트를 프로젝트에 적용하는 방법을 안내합니다. Nuxt 4 + Vue 3로 개발·빌드하며, 문서는 `,-1),n(h,{variant:`code`,tag:`span`,label:`src/doc/`}),j[1]||=c(` 의 Vue SFC로 관리합니다. `,-1)]),_:1}),n(u,{"heading-id":`requirements-heading`,title:`사전 요구사항`,description:`아래 환경이 설치되어 있어야 합니다.`},{default:t(()=>[n(d,{columns:o(y),rows:o(b),"code-column":``},null,8,[`columns`,`rows`])]),_:1}),n(_,{"heading-id":`install-heading`,title:`빠른 시작`,description:`저장소를 복제하고 의존성을 설치한 뒤 개발 서버를 실행합니다. 브라우저에서 http://localhost:3000/getting-started에 접속하면 이 페이지를 확인할 수 있습니다.`},{default:t(()=>[n(g,null,{default:t(()=>[c(s(o(T)),1)]),_:1})]),_:1}),n(u,{"heading-id":`scripts-heading`,title:`pnpm 스크립트`,description:`루트 package.json의 스크립트입니다.`},{default:t(()=>[n(d,{columns:o(x),rows:o(S),"code-column":`command`},null,8,[`columns`,`rows`])]),_:1}),n(_,{"heading-id":`build-heading`,title:`빌드 및 미리보기`,description:`서버 배포에는 build를, 정적 호스팅에는 generate를 사용합니다. 두 방식 모두 결과 생성 후 preview로 확인할 수 있습니다.`},{default:t(()=>[n(g,null,{default:t(()=>[c(s(o(E)),1)]),_:1})]),_:1}),n(_,{"heading-id":`styles-heading`,title:`스타일 적용`},{default:t(()=>[r(`p`,null,[j[2]||=r(`strong`,null,`이 가이드`,-1),j[3]||=c(`는 Nuxt 빌드 시 `,-1),n(h,{variant:`code`,tag:`span`,label:`src/scss/main.scss`}),j[4]||=c(`가 자동으로 번들됩니다.`,-1)]),r(`p`,null,[j[5]||=r(`strong`,null,`다른 프로젝트`,-1),j[6]||=c(`에서 SCSS 소스를 직접 쓰려면 자체 빌드 도구(Vite, Webpack 등)에 `,-1),n(h,{variant:`code`,tag:`span`,label:`src/scss/main.scss`}),j[7]||=c(` 를 포함합니다. 필요한 컴포넌트만 가져올 때도 공통 토큰·테마·리셋을 먼저 불러와야 합니다. `,-1)]),n(g,null,{default:t(()=>[c(s(o(D)),1)]),_:1})]),_:1}),n(p,{"heading-id":`component-heading`,title:`컴포넌트 마크업 사용`,description:`각 컴포넌트 문서의 마크업 섹션 HTML은 어떤 프로젝트에도 복사해 사용할 수 있습니다. 클래스 이름과 ARIA 속성을 그대로 쓰면 스타일이 적용됩니다. 모달·드로어·아코디언 등 인터랙션이 필요한 컴포넌트는 Vue 컴포넌트 구현을 참고하거나, data-* 속성과 JS를 함께 포함합니다.`,stack:``},{default:t(()=>[n(f,{variant:`filled`,color:`primary`,label:`저장`}),n(m,{color:`info`,description:`변경 사항이 저장되었습니다.`,"show-icon":!1})]),_:1}),n(_,{"heading-id":`markup-html-heading`,title:`HTML 마크업 예시`,description:`Vue 없이 HTML·CSS만으로도 동일한 UI를 구성할 수 있습니다. 아래 마크업을 복사해 사용하세요.`},{default:t(()=>[n(g,null,{default:t(()=>[c(s(o(O)),1)]),_:1})]),_:1}),n(_,{"heading-id":`theme-heading`,title:`테마`},{default:t(()=>[r(`p`,null,[j[8]||=c(` 라이트/다크 테마는 `,-1),n(h,{variant:`code`,tag:`span`,label:`data-theme`}),j[9]||=c(` 속성으로 전환됩니다. `,-1),n(h,{variant:`code`,tag:`span`,label:`useTheme`}),j[10]||=c(` composable이 헤더 토글과 `,-1),n(h,{variant:`code`,tag:`span`,label:`localStorage`}),j[11]||=c(` 의 `,-1),n(h,{variant:`code`,tag:`span`,label:`guide-theme`}),j[12]||=c(` 값을 관리합니다. 저장된 값이 없으면 운영체제의 색상 설정을 따릅니다. `,-1)]),n(g,null,{default:t(()=>[c(s(o(k)),1)]),_:1}),r(`p`,null,[j[14]||=c(` 색상·간격 등 디자인 값은 `,-1),n(h,{variant:`code`,tag:`span`,label:`src/scss/_tokens.scss`}),j[15]||=c(` 와 `,-1),n(h,{variant:`code`,tag:`span`,label:`_themes.scss`}),j[16]||=c(` 에서 CSS 변수로 정의됩니다. 전역 토큰의 기본값·사용 방법은 `,-1),n(M,{class:`link color_primary`,to:`/design-tokens`},{default:t(()=>[...j[13]||=[c(`디자인 토큰`,-1)]]),_:1}),j[17]||=c(` 문서를 참고하세요. `,-1)])]),_:1}),n(u,{"heading-id":`new-component-heading`,title:`새 컴포넌트 추가`,description:`컴포넌트를 새로 등록할 때 추가·수정하는 파일입니다.`},{default:t(()=>[n(d,{columns:o(C),rows:o(w),"code-column":`path`},null,8,[`columns`,`rows`])]),_:1})],64)}}};export{j as default,A as docMeta};
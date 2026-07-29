import{b as e,g as d,e as q,c as G}from"./gulp-demos-C1efgjoy.js";const N=`<!-- @meta
title: Table | HTML Components
activeNav: table
pageTitle: Table
-->
<div class="page_intro">
  <h1>Table</h1>
  <p class="lead">데이터를 행·열 구조로 표시하는 테이블 컴포넌트입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_columns" style="--table-col-1-white-space: nowrap; --table-col-3-white-space: nowrap;">
        <colgroup>
          <col style="width: 7rem; min-width: 5.5rem;">
          <col style="min-width: 9rem;">
          <col style="width: 6.5rem; min-width: 5rem;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">역할</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>홍길동</td>
            <td>프론트엔드</td>
            <td><span class="badge color_success badge_dot">Active</span></td>
          </tr>
          <tr>
            <td>김철수</td>
            <td>백엔드</td>
            <td><span class="badge color_success badge_dot">Active</span></td>
          </tr>
          <tr>
            <td>이영희</td>
            <td>디자이너</td>
            <td><span class="badge color_warning badge_dot">Away</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="striped-heading">
  <div class="demo_section-header">
    <h2 id="striped-heading">줄무늬</h2>
    <p>striped로 짝수 행에 배경색을 적용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_striped table_columns" style="--table-col-1-white-space: nowrap; --table-col-2-white-space: nowrap; --table-col-3-white-space: nowrap;">
        <colgroup>
          <col style="width: 8rem; min-width: 6rem;">
          <col style="width: 8rem; min-width: 6.5rem;">
          <col style="width: 5rem; min-width: 4rem;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">제품</th>
            <th scope="col">가격</th>
            <th scope="col">재고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>노트북</td>
            <td>1,200,000원</td>
            <td>24</td>
          </tr>
          <tr>
            <td>키보드</td>
            <td>89,000원</td>
            <td>156</td>
          </tr>
          <tr>
            <td>마우스</td>
            <td>45,000원</td>
            <td>89</td>
          </tr>
          <tr>
            <td>모니터</td>
            <td>350,000원</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="variant-heading">
  <div class="demo_section-header">
    <h2 id="variant-heading">변형</h2>
    <p>bordered · compact · hover를 조합할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap">
      <table class="table table_bordered table_compact table_hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">항목</th>
            <th scope="col">수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>사과</td>
            <td>10</td>
          </tr>
          <tr>
            <td>002</td>
            <td>바나나</td>
            <td>25</td>
          </tr>
          <tr>
            <td>003</td>
            <td>오렌지</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="sticky-top-heading">
  <div class="demo_section-header">
    <h2 id="sticky-top-heading">상단 고정</h2>
    <p>table_wrap-scroll + table_sticky-top으로 헤더를 상단에 고정합니다. --table-scroll-max-height로 스크롤 영역 높이를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap table_wrap-scroll" style="--table-scroll-max-height: 14rem;">
      <table class="table table_sticky-top table_bordered table_compact">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">부서</th>
            <th scope="col">직급</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>프론트엔드</td><td>시니어</td><td><span class="badge color_success badge_dot">Active</span></td></tr>
          <tr><td>김철수</td><td>백엔드</td><td>리드</td><td><span class="badge color_success badge_dot">Active</span></td></tr>
          <tr><td>이영희</td><td>디자인</td><td>시니어</td><td><span class="badge color_warning badge_dot">Away</span></td></tr>
          <tr><td>박민수</td><td>QA</td><td>주니어</td><td><span class="badge color_success badge_dot">Active</span></td></tr>
          <tr><td>최지우</td><td>프론트엔드</td><td>주니어</td><td><span class="badge color_success badge_dot">Active</span></td></tr>
          <tr><td>정수연</td><td>백엔드</td><td>시니어</td><td><span class="badge color_danger badge_dot">Busy</span></td></tr>
          <tr><td>한도윤</td><td>인프라</td><td>리드</td><td><span class="badge color_success badge_dot">Active</span></td></tr>
          <tr><td>오세린</td><td>디자인</td><td>주니어</td><td><span class="badge color_success badge_dot">Active</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="sticky-left-heading">
  <div class="demo_section-header">
    <h2 id="sticky-left-heading">좌측 고정</h2>
    <p>table_sticky-left + table_sticky-cols-1로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap table_wrap-scroll" style="--table-scroll-max-height: none;">
      <table class="table table_sticky-left table_sticky-cols-1 table_bordered table_compact table_columns" style="--table-col-1-white-space: nowrap;">
        <colgroup>
          <col style="width: 7rem; min-width: 7rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">1월</th>
            <th scope="col">2월</th>
            <th scope="col">3월</th>
            <th scope="col">4월</th>
            <th scope="col">5월</th>
            <th scope="col">6월</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>
          <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>
          <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>
          <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="sticky-cols-heading">
  <div class="demo_section-header">
    <h2 id="sticky-cols-heading">좌측 고정 · 열 개수</h2>
    <p>table_sticky-cols-2 · table_sticky-cols-3 …으로 고정할 열 개수를 지정합니다. 2열 이상은 --table-sticky-left-n에 이전 열 너비 합을 넣습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap table_wrap-scroll" style="--table-scroll-max-height: none;">
      <table class="table table_sticky-left table_sticky-cols-2 table_bordered table_compact table_columns" style="--table-sticky-left-2: 7rem; --table-col-1-white-space: nowrap; --table-col-2-white-space: nowrap;">
        <colgroup>
          <col style="width: 7rem; min-width: 7rem;">
          <col style="width: 6rem; min-width: 6rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">부서</th>
            <th scope="col">1월</th>
            <th scope="col">2월</th>
            <th scope="col">3월</th>
            <th scope="col">4월</th>
            <th scope="col">5월</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>프론트</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td></tr>
          <tr><td>김철수</td><td>백엔드</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td></tr>
          <tr><td>이영희</td><td>디자인</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td></tr>
          <tr><td>박민수</td><td>QA</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="sticky-both-heading">
  <div class="demo_section-header">
    <h2 id="sticky-both-heading">상단 · 좌측 고정</h2>
    <p>table_sticky-top과 table_sticky-left를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="table_wrap table_wrap-scroll" style="--table-scroll-max-height: 14rem;">
      <table class="table table_sticky-top table_sticky-left table_sticky-cols-1 table_bordered table_compact table_columns" style="--table-col-1-white-space: nowrap;">
        <colgroup>
          <col style="width: 7rem; min-width: 7rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
          <col style="width: 8rem; min-width: 8rem;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">1월</th>
            <th scope="col">2월</th>
            <th scope="col">3월</th>
            <th scope="col">4월</th>
            <th scope="col">5월</th>
            <th scope="col">6월</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>홍길동</td><td>120</td><td>132</td><td>101</td><td>134</td><td>90</td><td>230</td></tr>
          <tr><td>김철수</td><td>220</td><td>182</td><td>191</td><td>234</td><td>290</td><td>330</td></tr>
          <tr><td>이영희</td><td>150</td><td>232</td><td>201</td><td>154</td><td>190</td><td>330</td></tr>
          <tr><td>박민수</td><td>320</td><td>132</td><td>151</td><td>134</td><td>110</td><td>130</td></tr>
          <tr><td>최지우</td><td>180</td><td>162</td><td>171</td><td>144</td><td>210</td><td>250</td></tr>
          <tr><td>정수연</td><td>240</td><td>212</td><td>181</td><td>194</td><td>260</td><td>280</td></tr>
          <tr><td>한도윤</td><td>110</td><td>142</td><td>121</td><td>164</td><td>170</td><td>200</td></tr>
          <tr><td>오세린</td><td>200</td><td>192</td><td>211</td><td>184</td><td>230</td><td>310</td></tr>
        </tbody>
      </table>
    </div>
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
            <td><code class="typo_code">table_wrap</code></td>
            <td>가로 스크롤 래퍼</td>
          </tr>
          <tr>
            <td><code class="typo_code">table_wrap-scroll</code></td>
            <td>sticky용 스크롤 컨테이너 (overflow · max-height)</td>
          </tr>
          <tr>
            <td><code class="typo_code">table</code></td>
            <td>테이블 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">table_columns</code></td>
            <td>고정 레이아웃·열별 패딩 (columns 사용 시)</td>
          </tr>
          <tr>
            <td><code class="typo_code">table_bordered</code> · <code class="typo_code">table_striped</code> · <code class="typo_code">table_compact</code> · <code class="typo_code">table_hover</code></td>
            <td>스타일 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">table_sticky-top</code></td>
            <td>thead 상단 고정</td>
          </tr>
          <tr>
            <td><code class="typo_code">table_sticky-left</code></td>
            <td>좌측 열 고정 (table_sticky-cols-n과 함께 사용)</td>
          </tr>
          <tr>
            <td><code class="typo_code">table_sticky-cols-1</code> … <code class="typo_code">table_sticky-cols-4</code></td>
            <td>좌측 고정 열 개수. 2열 이상은 --table-sticky-left-n 필요</td>
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
            <td><code class="typo_code">--table-cell-padding-y</code> · <code class="typo_code">--table-cell-padding-x</code></td>
            <td>0.65rem · 1rem</td>
            <td>셀 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--table-cell-padding-y-compact</code> · <code class="typo_code">--table-cell-padding-x-compact</code></td>
            <td>0.4rem · 0.75rem</td>
            <td>compact 패딩</td>
          </tr>
          <tr>
            <td><code class="typo_code">--table-font-size</code> · <code class="typo_code">--table-header-font-weight</code></td>
            <td>var(--text-size-sm) · 600</td>
            <td>본문·헤더 타이포</td>
          </tr>
          <tr>
            <td><code class="typo_code">--table-scroll-max-height</code></td>
            <td>16rem</td>
            <td>table_wrap-scroll 최대 높이</td>
          </tr>
          <tr>
            <td><code class="typo_code">--table-sticky-left-n</code></td>
            <td>0 (1열)</td>
            <td>n번째 고정 열의 left 오프셋 (이전 열 너비 합)</td>
          </tr>
          <tr>
            <td><code class="typo_code">--table-sticky-shadow</code></td>
            <td>2px 0 4px -2px …</td>
            <td>좌측 고정 끝 열 그림자</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,t=q(N),j=G(N),K={title:"Components/데이터 표시/Table",id:"components-table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"데이터를 행·열 구조로 표시하는 테이블 컴포넌트입니다."}}}},n={name:"기본",render:()=>e(t[0]),parameters:{docs:{...d(t[0].previewHtml).docs,description:{story:t[0].description}}}},o={name:"줄무늬",render:()=>e(t[1]),parameters:{docs:{...d(t[1].previewHtml).docs,description:{story:t[1].description}}}},s={name:"변형",render:()=>e(t[2]),parameters:{docs:{...d(t[2].previewHtml).docs,description:{story:t[2].description}}}},c={name:"상단 고정",render:()=>e(t[3]),parameters:{docs:{...d(t[3].previewHtml).docs,description:{story:t[3].description}}}},r={name:"좌측 고정",render:()=>e(t[4]),parameters:{docs:{...d(t[4].previewHtml).docs,description:{story:t[4].description}}}},a={name:"좌측 고정 · 열 개수",render:()=>e(t[5]),parameters:{docs:{...d(t[5].previewHtml).docs,description:{story:t[5].description}}}},l={name:"상단 · 좌측 고정",render:()=>e(t[6]),parameters:{docs:{...d(t[6].previewHtml).docs,description:{story:t[6].description}}}},i={name:"클래스 · 속성",tags:["!dev"],render:()=>e(j[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},p={name:"디자인 토큰",tags:["!dev"],render:()=>e(j[1]),parameters:{docs:{source:{code:null},description:{story:"Table 셀 패딩·타이포·sticky에 사용하는 CSS 변수입니다."}}}};var m,h,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var u,y,_;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '줄무늬',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var w,v,g;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '변형',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var C,D,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '상단 고정',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var A,B,S;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '좌측 고정',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(S=(B=r.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var x,f,H;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '좌측 고정 · 열 개수',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(H=(f=a.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var E,T,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '상단 · 좌측 고정',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var L,M,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var F,Q,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Table 셀 패딩·타이포·sticky에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(I=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:I.source}}};const P=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","ApiClasses","ApiTokens"];export{i as ApiClasses,p as ApiTokens,n as Demo0,o as Demo1,s as Demo2,c as Demo3,r as Demo4,a as Demo5,l as Demo6,P as __namedExportsOrder,K as default};

import{b as n,c as o,e as J,d as P}from"./gulp-demos-uIKTVH8x.js";const j=`<!-- @meta
title: Form Layout | HTML Components
activeNav: form-layout
pageTitle: Form Layout
-->
<div class="page_intro">
  <h1>Form Layout</h1>
  <p class="lead">폼 필드를 배치하는 레이아웃 유형입니다. <strong>form_vertical</strong> · <strong>form_horizontal</strong> · <strong>form_inline</strong>과 Grid를 조합해 다양한 폼 구조를 구성할 수 있습니다.</p>
</div>

<section class="section demo_section" aria-labelledby="vertical-heading">
  <div class="demo_section-header">
    <h2 id="vertical-heading">세로</h2>
    <p>레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <form class="form form_vertical">
      <div class="form_field">
        <label class="form_field-label" for="fl-name">이름</label>
        <input type="text" class="input" id="fl-name" placeholder="이름을 입력하세요">
        <p class="form_field-hint">2~20자 이내로 입력해 주세요.</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-email">이메일</label>
        <input type="email" class="input" id="fl-email" placeholder="name@example.com">
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-role">역할</label>
        <select class="input" id="fl-role">
          <option value="">선택하세요</option>
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </select>
      </div>
    </form>
  </div>
</section>

<section class="section demo_section" aria-labelledby="horizontal-heading">
  <div class="demo_section-header">
    <h2 id="horizontal-heading">가로</h2>
    <p>레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <form class="form form_horizontal">
      <div class="form_field">
        <label class="form_field-label" for="fl-h-name">이름</label>
        <input type="text" class="input" id="fl-h-name" placeholder="이름">
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-h-email">이메일</label>
        <input type="email" class="input" id="fl-h-email" placeholder="name@example.com">
        <p class="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-h-bio">소개</label>
        <textarea class="textarea" id="fl-h-bio" rows="3" placeholder="간단한 자기소개"></textarea>
      </div>
    </form>
  </div>
</section>

<section class="section demo_section" aria-labelledby="horizontal-align-heading">
  <div class="demo_section-header">
    <h2 id="horizontal-align-heading">가로 — 레이블 정렬·너비</h2>
    <p>form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="demo_preview-block">
      <h3 class="typo_overline">레이블 왼쪽 정렬 · sm</h3>
      <p class="typo_caption">form_label-align-start · form_label-width-sm</p>
      <form class="form form_horizontal form_label-align-start form_label-width-sm">
        <div class="form_field">
          <label class="form_field-label" for="fl-hs-city">도시</label>
          <input type="text" class="input" id="fl-hs-city" placeholder="서울">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-hs-zip">우편번호</label>
          <input type="text" class="input" id="fl-hs-zip" placeholder="00000">
        </div>
      </form>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">레이블 너비 lg</h3>
      <p class="typo_caption">form_label-width-lg — 라벨 열이 넓어져 입력 시작 위치가 달라집니다.</p>
      <form class="form form_horizontal form_label-width-lg">
        <div class="form_field">
          <label class="form_field-label" for="fl-hl-company">회사명</label>
          <input type="text" class="input" id="fl-hl-company" placeholder="UXKM">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-hl-dept">부서</label>
          <input type="text" class="input" id="fl-hl-dept" placeholder="디자인팀">
        </div>
      </form>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="inline-heading">
  <div class="demo_section-header">
    <h2 id="inline-heading">인라인</h2>
    <p>검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <form class="form form_inline">
      <div class="form_field">
        <label class="form_field-label" for="fl-i-keyword">키워드</label>
        <input type="search" class="input" id="fl-i-keyword" placeholder="검색어">
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-i-status">상태</label>
        <select class="input" id="fl-i-status">
          <option>전체</option>
          <option>활성</option>
          <option>비활성</option>
        </select>
      </div>
      <div class="form_field">
        <label class="form_field-label" for="fl-i-date">기간</label>
        <input type="date" class="input" id="fl-i-date">
      </div>
      <div class="form_actions">
        <button type="submit" class="btn btn_filled color_primary"><span class="btn_label">검색</span></button>
        <button type="reset" class="btn btn_ghost"><span class="btn_label">초기화</span></button>
      </div>
    </form>
  </div>
</section>

<section class="section demo_section" aria-labelledby="grid-heading">
  <div class="demo_section-header">
    <h2 id="grid-heading">그리드</h2>
    <p>Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <form class="form form_vertical">
      <div class="grid grid_item-span-6">
        <div class="form_field">
          <label class="form_field-label" for="fl-g-first">이름</label>
          <input type="text" class="input" id="fl-g-first" placeholder="이름">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-g-last">성</label>
          <input type="text" class="input" id="fl-g-last" placeholder="성">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-g-phone">전화번호</label>
          <input type="tel" class="input" id="fl-g-phone" placeholder="010-0000-0000">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-g-mobile">휴대폰</label>
          <input type="tel" class="input" id="fl-g-mobile" placeholder="010-0000-0000">
        </div>
        <div class="form_field grid_col-span-12">
          <label class="form_field-label" for="fl-g-address">주소</label>
          <input type="text" class="input" id="fl-g-address" placeholder="도로명 주소">
        </div>
      </div>
    </form>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="demo_preview-block">
      <h3 class="typo_overline">기본 너비</h3>
      <p class="typo_caption">부모 컨테이너 100%</p>
      <form class="form form_vertical">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-default">기본 너비</label>
          <input type="text" class="input" id="fl-w-default" placeholder="부모 100%">
        </div>
      </form>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">form_fit</h3>
      <p class="typo_caption">최대 320px로 제한</p>
      <form class="form form_vertical form_fit">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-fit">제한 너비</label>
          <input type="text" class="input" id="fl-w-fit" placeholder="form_fit — 최대 320px">
        </div>
      </form>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">가로 레이아웃</h3>
      <p class="typo_caption">입력 열이 남은 공간을 채움</p>
      <form class="form form_horizontal">
        <div class="form_field">
          <label class="form_field-label" for="fl-w-h-full">가로 레이아웃</label>
          <input type="text" class="input" id="fl-w-h-full" placeholder="입력 열이 남은 공간을 채움">
        </div>
      </form>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="actions-heading">
  <div class="demo_section-header">
    <h2 id="actions-heading">액션 영역</h2>
    <p>form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="demo_preview-block">
      <h3 class="typo_overline">세로</h3>
      <form class="form form_vertical">
        <div class="form_field">
          <label class="form_field-label" for="fl-a-title">제목</label>
          <input type="text" class="input" id="fl-a-title" placeholder="제목">
        </div>
        <div class="form_actions">
          <button type="submit" class="btn btn_filled color_primary"><span class="btn_label">저장</span></button>
          <button type="button" class="btn btn_ghost"><span class="btn_label">취소</span></button>
        </div>
      </form>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">가로</h3>
      <form class="form form_horizontal">
        <div class="form_field">
          <label class="form_field-label" for="fl-a2-title">제목</label>
          <input type="text" class="input" id="fl-a2-title" placeholder="제목">
        </div>
        <div class="form_actions">
          <button type="submit" class="btn btn_filled color_primary"><span class="btn_label">저장</span></button>
          <button type="button" class="btn btn_ghost"><span class="btn_label">취소</span></button>
        </div>
      </form>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="example-heading">
  <div class="demo_section-header">
    <h2 id="example-heading">전체 예시</h2>
    <p>세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <form class="form form_vertical form_compact">
      <div class="grid grid_item-span-6">
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-id">아이디</label>
          <input type="text" class="input" id="fl-ex-id" placeholder="아이디">
          <p class="form_field-hint">영문·숫자 4~16자</p>
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-pw">비밀번호</label>
          <input type="password" class="input" id="fl-ex-pw" placeholder="비밀번호">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-name">이름</label>
          <input type="text" class="input" id="fl-ex-name" placeholder="이름">
        </div>
        <div class="form_field">
          <label class="form_field-label" for="fl-ex-email">이메일</label>
          <input type="email" class="input" id="fl-ex-email" placeholder="name@example.com">
        </div>
        <div class="form_field grid_col-span-12">
          <label class="form_field-label" for="fl-ex-memo">메모</label>
          <textarea class="textarea" id="fl-ex-memo" rows="3" placeholder="추가 정보"></textarea>
        </div>
      </div>
      <div class="form_actions">
        <button type="submit" class="btn btn_filled color_primary"><span class="btn_label">가입하기</span></button>
        <button type="button" class="btn btn_ghost"><span class="btn_label">취소</span></button>
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
            <td><code class="typo_code">form</code></td>
            <td>폼 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">form_vertical</code> · <code class="typo_code">form_horizontal</code> · <code class="typo_code">form_inline</code></td>
            <td>레이아웃 방향</td>
          </tr>
          <tr>
            <td><code class="typo_code">form_fit</code> · <code class="typo_code">form_compact</code> · <code class="typo_code">form_label-align-start</code></td>
            <td>간격·정렬</td>
          </tr>
          <tr>
            <td><code class="typo_code">form_label-width-sm</code> · <code class="typo_code">form_label-width-lg</code></td>
            <td>레이블 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">form_field</code> · <code class="typo_code">form_field-label</code> · <code class="typo_code">form_field-hint</code> · <code class="typo_code">form_field-error</code></td>
            <td>필드 블록</td>
          </tr>
          <tr>
            <td><code class="typo_code">form_actions</code></td>
            <td>제출·취소 버튼 묶음</td>
          </tr>
          <tr>
            <td><code class="typo_code">form_required</code></td>
            <td>필수 표시 마크</td>
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
            <td><code class="typo_code">--form-label-width</code> · <code class="typo_code">--form-label-width-sm</code> · <code class="typo_code">--form-label-width-lg</code></td>
            <td>7.5rem · 5rem · 10rem</td>
            <td>가로 레이아웃 라벨 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--form-field-gap</code></td>
            <td>var(--space-lg)</td>
            <td>필드 간격</td>
          </tr>
          <tr>
            <td><code class="typo_code">--form-inline-field-min-width</code></td>
            <td>8rem</td>
            <td>인라인 필드 최소 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--form-actions-gap</code></td>
            <td>var(--space-sm)</td>
            <td>액션 버튼 간격</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=J(j),I=P(j),R={title:"Components/폼/FormLayout",id:"components-form-layout",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"폼 필드를 배치하는 레이아웃 유형입니다. form_vertical · form_horizontal · form_inline과 Grid를 조합해 다양한 폼 구조를 구성할 수 있습니다."}}}},s={name:"세로",render:()=>n(e[0]),parameters:{docs:{...o(e[0].previewHtml).docs,description:{story:e[0].description}}}},l={name:"가로",render:()=>n(e[1]),parameters:{docs:{...o(e[1].previewHtml).docs,description:{story:e[1].description}}}},a={name:"가로 — 레이블 정렬·너비",render:()=>n(e[2]),parameters:{docs:{...o(e[2].previewHtml).docs,description:{story:e[2].description}}}},t={name:"인라인",render:()=>n(e[3]),parameters:{docs:{...o(e[3].previewHtml).docs,description:{story:e[3].description}}}},r={name:"그리드",render:()=>n(e[4]),parameters:{docs:{...o(e[4].previewHtml).docs,description:{story:e[4].description}}}},i={name:"너비",render:()=>n(e[5]),parameters:{docs:{...o(e[5].previewHtml).docs,description:{story:e[5].description}}}},d={name:"액션 영역",render:()=>n(e[6]),parameters:{docs:{...o(e[6].previewHtml).docs,description:{story:e[6].description}}}},c={name:"전체 예시",render:()=>n(e[7]),parameters:{docs:{...o(e[7].previewHtml).docs,description:{story:e[7].description}}}},m={name:"클래스 · 속성",tags:["!dev"],render:()=>n(I[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},p={name:"디자인 토큰",tags:["!dev"],render:()=>n(I[1]),parameters:{docs:{source:{code:null},description:{story:"Form 레이블·필드·액션 레이아웃에 사용하는 CSS 변수입니다."}}}};var f,u,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "세로",
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(_=(u=s.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var b,v,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "가로",
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,g,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "가로 — 레이블 정렬·너비",
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var w,x,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "인라인",
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var B,S,H;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "그리드",
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(H=(S=r.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var k,A,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "너비",
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(z=(A=i.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var E,L,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "액션 영역",
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var T,O,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "전체 예시",
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(M=(O=c.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var G,q,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(q=m.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var N,U,X;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Form 레이블·필드·액션 레이아웃에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const V=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","ApiClasses","ApiTokens"];export{m as ApiClasses,p as ApiTokens,s as Demo0,l as Demo1,a as Demo2,t as Demo3,r as Demo4,i as Demo5,d as Demo6,c as Demo7,V as __namedExportsOrder,R as default};

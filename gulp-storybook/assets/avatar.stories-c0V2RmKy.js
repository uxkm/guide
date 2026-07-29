import{b as e,c as n,e as L,d as N}from"./gulp-demos-uIKTVH8x.js";const O=`<!-- @meta
title: Avatar | HTML Components
activeNav: avatar
pageTitle: Avatar
-->
<div class="page_intro">
  <h1>Avatar</h1>
  <p class="lead">사용자·엔티티를 나타내는 프로필 이미지, 이니셜, 아이콘 표시 컴포넌트입니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="avatar">
      <img class="avatar_image" src="../images/avatar-sample.svg" alt="홍길동">
    </span>
    <span class="avatar color_primary" aria-hidden="true">홍</span>
    <span class="avatar color_default" aria-hidden="true">
      <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="avatar avatar_sm color_primary" aria-hidden="true">A</span>
    <span class="avatar color_primary" aria-hidden="true">B</span>
    <span class="avatar avatar_lg color_primary" aria-hidden="true">C</span>
    <span class="avatar avatar_xl color_primary" aria-hidden="true">D</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="shape-heading">
  <div class="demo_section-header">
    <h2 id="shape-heading">형태</h2>
    <p>기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="avatar color_primary" aria-hidden="true">원</span>
    <span class="avatar avatar_square color_primary" aria-hidden="true">각</span>
    <span class="avatar avatar_square">
      <img class="avatar_image" src="../images/avatar-sample.svg" alt="홍길동">
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="color-heading">
  <div class="demo_section-header">
    <h2 id="color-heading">색상</h2>
    <p>이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="avatar color_default" aria-hidden="true">D</span>
    <span class="avatar color_primary" aria-hidden="true">P</span>
    <span class="avatar color_success" aria-hidden="true">S</span>
    <span class="avatar color_warning" aria-hidden="true">W</span>
    <span class="avatar color_danger" aria-hidden="true">E</span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="badge-heading">
  <div class="demo_section-header">
    <h2 id="badge-heading">상태 배지</h2>
    <p>avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다.</p>
  </div>

  <div class="demo_section-preview">
    <span class="avatar color_primary" aria-hidden="true">
      온
      <span class="avatar_badge color_success" aria-label="온라인"></span>
    </span>
    <span class="avatar color_default" aria-hidden="true">
      대
      <span class="avatar_badge color_warning" aria-label="자리 비움"></span>
    </span>
    <span class="avatar color_default" aria-hidden="true">
      오
      <span class="avatar_badge color_danger" aria-label="오프라인"></span>
    </span>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">그룹</h2>
    <p>avatar_group으로 여러 아바타를 겹쳐 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="avatar_group" aria-label="팀 멤버 4명">
      <span class="avatar color_primary" aria-hidden="true">김</span>
      <span class="avatar color_success" aria-hidden="true">이</span>
      <span class="avatar color_warning" aria-hidden="true">박</span>
      <span class="avatar color_danger" aria-hidden="true">최</span>
    </div>

    <div class="avatar_group" aria-label="팀 멤버 3명">
      <span class="avatar">
        <img class="avatar_image" src="../images/avatar-sample.svg" alt="홍길동">
      </span>
      <span class="avatar color_primary" aria-hidden="true">홍</span>
      <span class="avatar color_default" aria-hidden="true">
        <svg class="avatar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </span>
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
            <td><code class="typo_code">avatar</code></td>
            <td>아바타 루트 (원형)</td>
          </tr>
          <tr>
            <td><code class="typo_code">avatar_image</code></td>
            <td>프로필 이미지</td>
          </tr>
          <tr>
            <td><code class="typo_code">avatar_icon</code></td>
            <td>아이콘 크기</td>
          </tr>
          <tr>
            <td><code class="typo_code">avatar_badge</code></td>
            <td>상태 점</td>
          </tr>
          <tr>
            <td><code class="typo_code">avatar_sm</code> · <code class="typo_code">avatar_lg</code> · <code class="typo_code">avatar_xl</code></td>
            <td>크기 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">avatar_square</code></td>
            <td>사각형</td>
          </tr>
          <tr>
            <td><code class="typo_code">avatar_group</code></td>
            <td>겹침 그룹 컨테이너</td>
          </tr>
          <tr>
            <td><code class="typo_code">color_*</code></td>
            <td>공통 색상 유틸</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      <code class="typo_code">avatar_group</code>에는 접근성을 위해 <code class="typo_code">aria-label</code>을 권장합니다.
      이미지 아바타는 <code class="typo_code">alt</code>, 그룹 내 장식용 이니셜·아이콘은 <code class="typo_code">aria-hidden="true"</code>를 사용합니다.
    </p>
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
            <td><code class="typo_code">--avatar-size-sm</code> · <code class="typo_code">--avatar-size</code> · <code class="typo_code">--avatar-size-lg</code> · <code class="typo_code">--avatar-size-xl</code></td>
            <td>1.5rem · 2rem · 2.5rem · 3.5rem</td>
            <td>아바타 지름</td>
          </tr>
          <tr>
            <td><code class="typo_code">--avatar-group-overlap</code></td>
            <td>-0.5rem</td>
            <td>그룹 겹침 오프셋</td>
          </tr>
          <tr>
            <td><code class="typo_code">--avatar-badge-size</code> · <code class="typo_code">--avatar-badge-size-sm</code> · <code class="typo_code">--avatar-badge-size-lg</code></td>
            <td>8px · 6px · 10px</td>
            <td>상태 점 크기</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,a=L(O),q=N(O),W={title:"Components/데이터 표시/Avatar",id:"components-avatar",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"사용자·엔티티를 나타내는 프로필 이미지, 이니셜, 아이콘 표시 컴포넌트입니다."}}}},s={name:"기본",render:()=>e(a[0]),parameters:{docs:{...n(a[0].previewHtml).docs,description:{story:a[0].description}}}},r={name:"크기",render:()=>e(a[1]),parameters:{docs:{...n(a[1].previewHtml).docs,description:{story:a[1].description}}}},o={name:"형태",render:()=>e(a[2]),parameters:{docs:{...n(a[2].previewHtml).docs,description:{story:a[2].description}}}},t={name:"색상",render:()=>e(a[3]),parameters:{docs:{...n(a[3].previewHtml).docs,description:{story:a[3].description}}}},d={name:"상태 배지",render:()=>e(a[4]),parameters:{docs:{...n(a[4].previewHtml).docs,description:{story:a[4].description}}}},c={name:"그룹",render:()=>e(a[5]),parameters:{docs:{...n(a[5].previewHtml).docs,description:{story:a[5].description}}}},i={name:"클래스 · 속성",tags:["!dev"],render:()=>e(q[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},p={name:"디자인 토큰",tags:["!dev"],render:()=>e(q[1]),parameters:{docs:{source:{code:null},description:{story:"Avatar 크기·그룹 겹침·상태 배지에 사용하는 CSS 변수입니다."}}}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,_,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var g,C,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '형태',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var b,D,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '색상',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(w=(D=t.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,S,A;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '상태 배지',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var x,H,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '그룹',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(f=(H=c.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var k,z,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var M,T,F;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Avatar 크기·그룹 겹침·상태 배지에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(F=(T=p.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const j=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","ApiClasses","ApiTokens"];export{i as ApiClasses,p as ApiTokens,s as Demo0,r as Demo1,o as Demo2,t as Demo3,d as Demo4,c as Demo5,j as __namedExportsOrder,W as default};

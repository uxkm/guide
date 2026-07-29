import{b as n,c as e,e as $,d as ss}from"./gulp-demos-uIKTVH8x.js";const Y=`<!-- @meta
title: Switch | HTML Components
activeNav: switch
pageTitle: Switch
-->
<div class="page_intro">
  <h1>Switch</h1>
  <p class="lead">켜기/끄기를 표현하는 Switch 컴포넌트입니다. <code>type="checkbox"</code>와 <code>role="switch"</code>를 사용하며, 기본 너비는 인라인(콘텐츠)이며 <strong>switch_block</strong> · <strong>switch_group_block</strong>으로 전체 너비를 사용합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="type-heading">
  <div class="demo_section-header">
    <h2 id="type-heading">유형</h2>
    <p>기본은 <code>switch_control</code> → <code>switch_label</code> 순서입니다. <code>switch_label-end</code>는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <label class="switch">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">기본 — switch</span>
    </label>

    <label class="switch switch_label-end">
      <span class="switch_label">레이블 뒤 — switch_label-end</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="label-end-heading">
  <div class="demo_section-header">
    <h2 id="label-end-heading">레이블 뒤</h2>
    <p><code>switch_label-end</code>는 <code>switch_label</code> → <code>switch_control</code> 순으로 마크업합니다. 전체 너비가 필요하면 <code>switch_block</code> 또는 <code>switch_group_block</code>을 추가합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <label class="switch switch_label-end">
      <span class="switch_label">푸시 알림 받기</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-label-end-push" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <label class="switch switch_label-end">
      <span class="switch_content">
        <span class="switch_label">마케팅 정보 수신</span>
        <span class="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
      </span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-label-end-marketing">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
      <legend class="switch_group-legend">알림 설정 — switch_group_block</legend>
      <label class="switch switch_label-end">
        <span class="switch_label">이메일 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end">
        <span class="switch_label">푸시 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end">
        <span class="switch_label">SMS 알림</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>

    <label class="switch switch_label-end switch_sm">
      <span class="switch_label">Small — switch_sm</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end switch_lg">
      <span class="switch_label">Large — switch_lg</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <label class="switch">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-basic-dark" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">다크 모드</span>
    </label>

    <label class="switch">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" id="switch-basic-auto">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
      <span class="switch_label">자동 저장</span>
    </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="standalone-heading">
  <div class="demo_section-header">
    <h2 id="standalone-heading">단독 사용</h2>
    <p>레이블 없이 스위치만 사용할 수 있습니다. <code>aria-label</code>로 접근 가능한 이름을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <label class="switch" aria-label="기능 켜기">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch" aria-label="기능 끄기">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch" aria-label="비활성">
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <label class="switch switch_sm switch_label-end">
      <span class="switch_label">Small — switch_sm</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end">
      <span class="switch_label">Medium — 기본</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_lg switch_label-end">
      <span class="switch_label">Large — switch_lg</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <label class="switch switch_label-end">
      <span class="switch_label">기본 — 인라인 너비</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <label class="switch switch_label-end switch_block">
      <span class="switch_label">switch_block — 전체 너비</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>

    <fieldset class="switch_group switch_group_block" style="max-width: 360px; width: 100%;">
      <legend class="switch_group-legend">switch_group_block</legend>
      <label class="switch switch_label-end">
        <span class="switch_label">Wi-Fi</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end">
        <span class="switch_label">블루투스</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="color-heading">
  <div class="demo_section-header">
    <h2 id="color-heading">색상</h2>
    <p>color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <label class="switch color_primary switch_label-end">
      <span class="switch_label">Primary</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_success switch_label-end">
      <span class="switch_label">Success</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_danger switch_label-end">
      <span class="switch_label">Danger</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch color_warning switch_label-end">
      <span class="switch_label">Warning</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <label class="switch switch_label-end">
      <span class="switch_label">꺼짐</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch">
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end">
      <span class="switch_label">켜짐</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end">
      <span class="switch_label">비활성</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
    <label class="switch switch_label-end">
      <span class="switch_label">켜짐 (비활성)</span>
      <span class="switch_control">
        <input type="checkbox" class="switch_input" role="switch" checked disabled>
        <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
      </span>
    </label>
  </div>
</section>

<section class="section demo_section" aria-labelledby="group-heading">
  <div class="demo_section-header">
    <h2 id="group-heading">그룹</h2>
    <p>switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <fieldset class="switch_group switch_group_block" style="max-width: 400px; width: 100%;">
      <legend class="switch_group-legend">개인정보 설정</legend>
      <label class="switch switch_label-end">
        <span class="switch_content">
          <span class="switch_label">프로필 공개</span>
          <span class="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
        </span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end">
        <span class="switch_content">
          <span class="switch_label">활동 기록 표시</span>
          <span class="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
        </span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end">
        <span class="switch_label">검색 허용</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch" checked>
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>

    <fieldset class="switch_group switch_group_block switch_group_compact" style="max-width: 400px; width: 100%;">
      <legend class="switch_group-legend">접근성 — switch_group_compact</legend>
      <label class="switch switch_label-end">
        <span class="switch_label">고대비 모드</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
      <label class="switch switch_label-end">
        <span class="switch_label">애니메이션 줄이기</span>
        <span class="switch_control">
          <input type="checkbox" class="switch_input" role="switch">
          <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
        </span>
      </label>
    </fieldset>
  </div>
</section>

<section class="section demo_section" aria-labelledby="form-heading">
  <div class="demo_section-header">
    <h2 id="form-heading">폼 레이아웃</h2>
    <p>form_vertical · form_horizontal과 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <form class="form form_vertical form_fit">
      <div class="form_field">
        <span class="form_field-label" id="switch-form-vertical-label">알림</span>
        <fieldset class="switch_group switch_group_block" aria-labelledby="switch-form-vertical-label">
          <label class="switch switch_label-end">
            <span class="switch_label">이메일 알림</span>
            <span class="switch_control">
              <input type="checkbox" class="switch_input" role="switch" checked>
              <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
            </span>
          </label>
          <label class="switch switch_label-end">
            <span class="switch_label">푸시 알림</span>
            <span class="switch_control">
              <input type="checkbox" class="switch_input" role="switch">
              <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
            </span>
          </label>
        </fieldset>
      </div>
    </form>

    <form class="form form_horizontal form_fit">
      <div class="form_field">
        <span class="form_field-label" id="switch-form-horizontal-label">자동 저장</span>
        <label class="switch switch_label-end" aria-labelledby="switch-form-horizontal-label">
          <span class="switch_label">편집 내용 자동 저장</span>
          <span class="switch_control">
            <input type="checkbox" class="switch_input" role="switch" checked>
            <span class="switch_track" aria-hidden="true"><span class="switch_thumb"></span></span>
          </span>
        </label>
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
            <td><code class="typo_code">switch</code></td>
            <td>스위치 루트 label</td>
          </tr>
          <tr>
            <td><code class="typo_code">switch_sm</code> · <code class="typo_code">switch_lg</code> · <code class="typo_code">switch_label-end</code></td>
            <td>크기·레이아웃</td>
          </tr>
          <tr>
            <td><code class="typo_code">switch_control</code> · <code class="typo_code">switch_input</code> · <code class="typo_code">switch_track</code> · <code class="typo_code">switch_thumb</code></td>
            <td>입력·트랙</td>
          </tr>
          <tr>
            <td><code class="typo_code">switch_label</code></td>
            <td>라벨</td>
          </tr>
          <tr>
            <td><code class="typo_code">switch_group</code></td>
            <td>여러 스위치 묶음</td>
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
            <td><code class="typo_code">--switch-width</code> · <code class="typo_code">--switch-height</code></td>
            <td>2.75rem · 1.5rem</td>
            <td>트랙 크기 (md)</td>
          </tr>
          <tr>
            <td><code class="typo_code">--switch-width-sm</code> · <code class="typo_code">--switch-width-lg</code></td>
            <td>2.25rem · 3.25rem</td>
            <td>크기 변형</td>
          </tr>
          <tr>
            <td><code class="typo_code">--switch-gap</code> · <code class="typo_code">--switch-radius</code></td>
            <td>—</td>
            <td>라벨 간격·모서리</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,s=$(Y),Z=ss(Y),es={title:"Components/폼/Switch",id:"components-switch",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'켜기/끄기를 표현하는 Switch 컴포넌트입니다. type="checkbox"와 role="switch"를 사용하며, 기본 너비는 인라인(콘텐츠)이며 switch_block · switch_group_block으로 전체 너비를 사용합니다.'}}}},c={name:"유형",render:()=>n(s[0]),parameters:{docs:{...e(s[0].previewHtml).docs,description:{story:s[0].description}}}},a={name:"레이블 뒤",render:()=>n(s[1]),parameters:{docs:{...e(s[1].previewHtml).docs,description:{story:s[1].description}}}},t={name:"기본",render:()=>n(s[2]),parameters:{docs:{...e(s[2].previewHtml).docs,description:{story:s[2].description}}}},i={name:"단독 사용",render:()=>n(s[3]),parameters:{docs:{...e(s[3].previewHtml).docs,description:{story:s[3].description}}}},l={name:"크기",render:()=>n(s[4]),parameters:{docs:{...e(s[4].previewHtml).docs,description:{story:s[4].description}}}},o={name:"너비",render:()=>n(s[5]),parameters:{docs:{...e(s[5].previewHtml).docs,description:{story:s[5].description}}}},r={name:"색상",render:()=>n(s[6]),parameters:{docs:{...e(s[6].previewHtml).docs,description:{story:s[6].description}}}},p={name:"상태",render:()=>n(s[7]),parameters:{docs:{...e(s[7].previewHtml).docs,description:{story:s[7].description}}}},d={name:"그룹",render:()=>n(s[8]),parameters:{docs:{...e(s[8].previewHtml).docs,description:{story:s[8].description}}}},h={name:"폼 레이아웃",render:()=>n(s[9]),parameters:{docs:{...e(s[9].previewHtml).docs,description:{story:s[9].description}}}},w={name:"클래스 · 속성",tags:["!dev"],render:()=>n(Z[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},_={name:"디자인 토큰",tags:["!dev"],render:()=>n(Z[1]),parameters:{docs:{source:{code:null},description:{story:"Switch 트랙 크기·간격·모서리에 사용하는 CSS 변수입니다."}}}};var u,m,b;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '유형',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(b=(m=c.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var k,g,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '레이블 뒤',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,C,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '기본',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var D,S,f;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '단독 사용',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var B,A,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '크기',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(H=(A=l.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var E,z,T;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '너비',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(T=(z=o.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var F,L,M;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '색상',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(M=(L=r.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,W,N;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '상태',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(N=(W=p.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,j,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '그룹',
  render: () => renderDemo(demos[8]),
  parameters: {
    docs: {
      ...gulpSource(demos[8].previewHtml).docs,
      description: {
        story: demos[8].description
      }
    }
  }
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,I,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '폼 레이아웃',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(J=(I=h.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,R;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(R=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,V,X;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Switch 트랙 크기·간격·모서리에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(X=(V=_.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const cs=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","ApiClasses","ApiTokens"];export{w as ApiClasses,_ as ApiTokens,c as Demo0,a as Demo1,t as Demo2,i as Demo3,l as Demo4,o as Demo5,r as Demo6,p as Demo7,d as Demo8,h as Demo9,cs as __namedExportsOrder,es as default};

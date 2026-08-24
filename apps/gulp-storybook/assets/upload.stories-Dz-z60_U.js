import{b as e,c as a,e as P,d as G}from"./gulp-demos-uIKTVH8x.js";const O=`<!-- @meta
title: Upload | HTML Components
activeNav: upload
pageTitle: Upload
-->
<div class="page_intro">
  <h1>Upload</h1>
  <p class="lead">파일 선택·드래그 앤 드롭·업로드 목록·이미지 카드·아바타 업로드 UI를 제공합니다. <code>upload_input</code>은 시각적으로 숨기고 <code>label.upload_trigger</code> · <code>label.upload_dropzone</code>으로 트리거합니다. 버튼형 트리거는 <code>button</code> 대신 <code>span.btn</code>으로 스킨을 적용합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="button-heading">
  <div class="demo_section-header">
    <h2 id="button-heading">버튼 업로드</h2>
    <p><code>label.upload_trigger</code> 안에 <code>span.btn</code>으로 버튼 스킨을 적용합니다. <code>button</code> 요소는 label 안에 넣지 않습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="upload">
      <label class="upload_trigger">
        <input type="file" class="upload_input" id="upload-btn-basic">
        <span class="btn btn_filled color_primary"><span class="btn_label">파일 선택</span></span>
      </label>
    </div>

    <div class="upload">
      <label class="upload_trigger">
        <input type="file" class="upload_input" id="upload-btn-outline">
        <span class="btn btn_outline color_primary"><span class="btn_label">업로드</span></span>
      </label>
      <p class="upload_hint">PNG, JPG · 최대 5MB</p>
    </div>

    <div class="upload">
      <label class="upload_trigger">
        <input type="file" class="upload_input" id="upload-btn-sizes">
        <span class="btn btn_filled color_primary btn_sm"><span class="btn_label">Small</span></span>
        <span class="btn btn_filled color_primary btn_lg"><span class="btn_label">Large</span></span>
      </label>
    </div>

    <div class="upload is-disabled">
      <label class="upload_trigger">
        <input type="file" class="upload_input" disabled>
        <span class="btn btn_filled color_primary is-disabled"><span class="btn_label">비활성</span></span>
      </label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="dropzone-heading">
  <div class="demo_section-header">
    <h2 id="dropzone-heading">드래그 앤 드롭</h2>
    <p><code>upload_dropzone</code>으로 클릭·드래그 영역을 만듭니다. <code>multiple</code> · <code>accept</code> 속성으로 파일 제한을 지정합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="upload upload_fit">
      <label class="upload_dropzone">
        <input type="file" class="upload_input" id="upload-dropzone-basic" multiple>
        <span class="upload_dropzone-icon" aria-hidden="true">
          <svg class="icon icon_xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </span>
        <span class="upload_dropzone-title">파일을 여기에 끌어다 놓거나 클릭하세요</span>
        <span class="upload_dropzone-desc">단일 또는 다중 파일 · 최대 10MB</span>
      </label>
    </div>

    <div class="upload upload_fit">
      <label class="upload_dropzone is-dragover">
        <input type="file" class="upload_input" multiple>
        <span class="upload_dropzone-icon" aria-hidden="true">
          <svg class="icon icon_xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </span>
        <span class="upload_dropzone-title">파일을 놓으세요</span>
        <span class="upload_dropzone-desc">is-dragover 상태</span>
      </label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="list-heading">
  <div class="demo_section-header">
    <h2 id="list-heading">파일 목록</h2>
    <p><code>upload_list</code> · <code>upload_item</code>으로 업로드 진행·완료·오류 상태를 표시합니다. 진행률은 <code>upload_progress-bar</code>의 <code>style="width: …"</code> 또는 CSS 변수로 제어합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="upload upload_fit">
      <label class="upload_trigger">
        <input type="file" class="upload_input" multiple>
        <span class="btn btn_filled color_primary"><span class="btn_label">파일 추가</span></span>
      </label>

      <ul class="upload_list" role="list">
        <li class="upload_item is-uploading">
          <span class="upload_item-icon" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
          </span>
          <div class="upload_item-body">
            <span class="upload_item-name text_ellipsis">프로젝트_제안서_v2.pdf</span>
            <div class="upload_progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="업로드 진행률">
              <span class="upload_progress-bar" style="width: 60%"></span>
            </div>
            <span class="upload_item-meta">2.4 MB · 60%</span>
          </div>
          <button type="button" class="btn btn_text btn_icon-only color_danger upload_item-action" aria-label="업로드 취소">
            <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </li>

        <li class="upload_item is-done">
          <span class="upload_item-icon" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
          </span>
          <div class="upload_item-body">
            <span class="upload_item-name text_ellipsis">디자인_가이드.zip</span>
            <span class="upload_item-meta">업로드 완료 · 8.1 MB</span>
          </div>
          <button type="button" class="btn btn_text btn_icon-only color_danger upload_item-action" aria-label="파일 삭제">
            <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </li>

        <li class="upload_item is-error">
          <span class="upload_item-icon" aria-hidden="true">
            <svg class="icon color_danger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
          </span>
          <div class="upload_item-body">
            <span class="upload_item-name text_ellipsis">대용량_영상.mp4</span>
            <div class="upload_progress" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" aria-label="업로드 진행률">
              <span class="upload_progress-bar" style="width: 42%"></span>
            </div>
            <span class="upload_item-meta">파일 크기가 10MB를 초과합니다.</span>
          </div>
          <button type="button" class="btn btn_text btn_icon-only color_danger upload_item-action" aria-label="파일 삭제">
            <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="card-heading">
  <div class="demo_section-header">
    <h2 id="card-heading">사진 카드</h2>
    <p><code>upload_cards</code> 그리드에 미리보기 카드와 <code>upload_card-trigger</code>를 배치합니다. 호버 시 <code>upload_card-actions</code> 오버레이가 표시됩니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="upload">
      <div class="upload_cards">
        <div class="upload_card">
          <img class="upload_card-image" src="../images/avatar-sample.svg" alt="미리보기 1">
          <div class="upload_card-actions">
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="미리보기">
              <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="삭제">
              <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="upload_card">
          <img class="upload_card-image" src="../images/avatar-sample.svg" alt="미리보기 2">
          <div class="upload_card-actions">
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="미리보기">
              <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="삭제">
              <svg class="btn_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </div>

        <label class="upload_card upload_card-trigger">
          <input type="file" class="upload_input" accept="image/*">
          <svg class="icon icon_lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>업로드</span>
        </label>
      </div>
      <p class="upload_hint">최대 5장 · JPG, PNG</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="avatar-heading">
  <div class="demo_section-header">
    <h2 id="avatar-heading">아바타 업로드</h2>
    <p><code>upload_avatar</code>로 프로필 이미지 변경 UI를 구성합니다. Avatar 컴포넌트와 조합합니다.</p>
  </div>

  <div class="demo_section-preview">
    <div class="upload">
      <label class="upload_avatar">
        <input type="file" class="upload_input" accept="image/*" id="upload-avatar">
        <span class="avatar avatar_xl">
          <img class="avatar_image" src="../images/avatar-sample.svg" alt="프로필 사진">
        </span>
        <span class="upload_avatar-overlay" aria-hidden="true">
          <svg class="icon icon_lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </span>
      </label>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="form-heading">
  <div class="demo_section-header">
    <h2 id="form-heading">폼 필드</h2>
    <p><code>form_field</code>와 조합해 레이블·힌트·오류 메시지를 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field form_field_fit">
      <label class="form_field-label" for="upload-form-attach">첨부파일</label>
      <div class="upload upload_fit">
        <label class="upload_dropzone">
          <input type="file" class="upload_input" id="upload-form-attach" multiple>
          <span class="upload_dropzone-icon" aria-hidden="true">
            <svg class="icon icon_xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </span>
          <span class="upload_dropzone-title">파일을 선택하세요</span>
          <span class="upload_dropzone-desc">PDF, DOCX · 최대 3개</span>
        </label>
      </div>
      <p class="form_field-hint">제출 전 파일명을 확인해 주세요.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="upload-form-error">증빙 서류</label>
      <div class="upload upload_fit">
        <label class="upload_dropzone is-error">
          <input type="file" class="upload_input" id="upload-form-error" aria-invalid="true" aria-describedby="upload-form-error-msg">
          <span class="upload_dropzone-icon" aria-hidden="true">
            <svg class="icon icon_xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </span>
          <span class="upload_dropzone-title">필수 서류를 업로드하세요</span>
          <span class="upload_dropzone-desc">is-error 상태</span>
        </label>
      </div>
      <p class="form_field-error" id="upload-form-error-msg">첨부파일은 필수입니다.</p>
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
            <td><code class="typo_code">upload</code></td>
            <td>루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">upload_sm</code> · <code class="typo_code">upload_lg</code> · <code class="typo_code">upload_fit</code></td>
            <td>크기·너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">upload_trigger</code> · <code class="typo_code">upload_dropzone</code> · <code class="typo_code">upload_input</code></td>
            <td>button·drag 트리거</td>
          </tr>
          <tr>
            <td><code class="typo_code">upload_card</code> · <code class="typo_code">upload_cards</code> · <code class="typo_code">upload_avatar</code></td>
            <td>picture-card·avatar</td>
          </tr>
          <tr>
            <td><code class="typo_code">upload_list</code> · <code class="typo_code">upload_item</code> · <code class="typo_code">upload_item-info</code></td>
            <td>목록 variant</td>
          </tr>
          <tr>
            <td><code class="typo_code">upload_hint</code> · <code class="typo_code">upload_progress</code></td>
            <td>힌트·진행률</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-dragover</code> · <code class="typo_code">is-error</code> · <code class="typo_code">is-disabled</code></td>
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
            <td><code class="typo_code">--upload-max-width</code></td>
            <td><code class="typo_code">var(--input-max-width)</code></td>
            <td>최대 너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">--upload-dropzone-padding</code> · <code class="typo_code">--upload-dropzone-icon-size</code></td>
            <td>—</td>
            <td>드롭존</td>
          </tr>
          <tr>
            <td><code class="typo_code">--upload-card-size</code> · <code class="typo_code">--upload-list-gap</code></td>
            <td>6.5rem · <code class="typo_code">var(--space-xs)</code></td>
            <td>카드·목록</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,n=P(O),T=G(O),F={title:"Components/폼/Upload",id:"components-upload",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"파일 선택·드래그 앤 드롭·업로드 목록·이미지 카드·아바타 업로드 UI를 제공합니다. upload_input은 시각적으로 숨기고 label.upload_trigger · label.upload_dropzone으로 트리거합니다. 버튼형 트리거는 button 대신 span.btn으로 스킨을 적용합니다."}}}},o={name:"버튼 업로드",render:()=>e(n[0]),parameters:{docs:{...a(n[0].previewHtml).docs,description:{story:n[0].description}}}},s={name:"드래그 앤 드롭",render:()=>e(n[1]),parameters:{docs:{...a(n[1].previewHtml).docs,description:{story:n[1].description}}}},d={name:"파일 목록",render:()=>e(n[2]),parameters:{docs:{...a(n[2].previewHtml).docs,description:{story:n[2].description}}}},t={name:"사진 카드",render:()=>e(n[3]),parameters:{docs:{...a(n[3].previewHtml).docs,description:{story:n[3].description}}}},l={name:"아바타 업로드",render:()=>e(n[4]),parameters:{docs:{...a(n[4].previewHtml).docs,description:{story:n[4].description}}}},r={name:"폼 필드",render:()=>e(n[5]),parameters:{docs:{...a(n[5].previewHtml).docs,description:{story:n[5].description}}}},i={name:"클래스 · 속성",tags:["!dev"],render:()=>e(T[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},c={name:"디자인 토큰",tags:["!dev"],render:()=>e(T[1]),parameters:{docs:{source:{code:null},description:{story:"Upload 최대 너비·드롭존·카드·목록에 사용하는 CSS 변수입니다."}}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '버튼 업로드',
  render: () => renderDemo(demos[0]),
  parameters: {
    docs: {
      ...gulpSource(demos[0].previewHtml).docs,
      description: {
        story: demos[0].description
      }
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var _,v,b;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '드래그 앤 드롭',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,h,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '파일 목록',
  render: () => renderDemo(demos[2]),
  parameters: {
    docs: {
      ...gulpSource(demos[2].previewHtml).docs,
      description: {
        story: demos[2].description
      }
    }
  }
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,f,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '사진 카드',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var B,x,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '아바타 업로드',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var k,z,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '폼 필드',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var M,H,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(H=i.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var V,U,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Upload 최대 너비·드롭존·카드·목록에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};const I=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","ApiClasses","ApiTokens"];export{i as ApiClasses,c as ApiTokens,o as Demo0,s as Demo1,d as Demo2,t as Demo3,l as Demo4,r as Demo5,I as __namedExportsOrder,F as default};

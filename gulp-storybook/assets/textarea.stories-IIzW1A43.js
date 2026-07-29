import{b as a,c as t,e as $,d as ee}from"./gulp-demos-uIKTVH8x.js";const Y=`<!-- @meta
title: Textarea | HTML Components
activeNav: textarea
pageTitle: Textarea
-->
<div class="page_intro">
  <h1>Textarea</h1>
  <p class="lead">여러 줄 텍스트 입력을 위한 Textarea 컴포넌트입니다. class="textarea"를 사용하며, form_field와 조합해 레이블·힌트·유효성 메시지를 구성합니다.</p>
</div>

<section class="section demo_section" aria-labelledby="basic-heading">
  <div class="demo_section-header">
    <h2 id="basic-heading">기본</h2>
    <p>레이블과 힌트 텍스트가 포함된 폼 필드입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field">
      <label class="form_field-label" for="textarea-bio">자기소개</label>
      <textarea class="textarea" id="textarea-bio" rows="4" placeholder="간단한 자기소개를 입력하세요"></textarea>
      <p class="form_field-hint">500자 이내로 작성해 주세요.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="standalone-heading">
  <div class="demo_section-header">
    <h2 id="standalone-heading">단독 사용</h2>
    <p>form_field 없이 textarea만 사용할 수 있습니다. 메모·댓글 입력 등 간단한 다행 입력에 적합합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <textarea class="textarea" rows="3" placeholder="플레이스홀더"></textarea>
    <textarea class="textarea" rows="3">입력된 내용이 여기에 표시됩니다.</textarea>
    <textarea class="textarea" rows="3" placeholder="비활성" disabled></textarea>
  </div>
</section>

<section class="section demo_section" aria-labelledby="size-heading">
  <div class="demo_section-header">
    <h2 id="size-heading">크기</h2>
    <p>textarea_sm · textarea(기본) · textarea_lg로 padding·font-size를 조절합니다. 너비와는 별개이며 textarea_fit 등과 자유롭게 조합할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="textarea-size-sm">Small</label>
      <textarea class="textarea textarea_sm" id="textarea-size-sm" rows="3" placeholder="textarea_sm"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-size-md">Medium</label>
      <textarea class="textarea" id="textarea-size-md" rows="3" placeholder="기본 크기"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-size-lg">Large</label>
      <textarea class="textarea textarea_lg" id="textarea-size-lg" rows="3" placeholder="textarea_lg"></textarea>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="width-heading">
  <div class="demo_section-header">
    <h2 id="width-heading">너비</h2>
    <p>크기와 독립적으로 너비를 제어합니다. 기본은 부모 100%, textarea_fit · form_field_fit으로 --input-max-width(320px)까지 제한합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="textarea-width-full">전체 너비</label>
      <textarea class="textarea" id="textarea-width-full" rows="3" placeholder="width: 100%"></textarea>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="textarea-width-fit">제한 너비</label>
      <textarea class="textarea" id="textarea-width-fit" rows="3" placeholder="form_field_fit — 최대 320px"></textarea>
    </div>

    <textarea class="textarea textarea_fit" rows="3" placeholder="textarea_fit 단독 — 최대 320px"></textarea>
  </div>
</section>

<section class="section demo_section" aria-labelledby="rows-heading">
  <div class="demo_section-header">
    <h2 id="rows-heading">행 수</h2>
    <p>HTML rows 속성으로 초기 높이를 지정합니다. 리사이즈가 허용된 경우 사용자가 높이를 조절할 수 있습니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-2">2행</label>
      <textarea class="textarea" id="textarea-rows-2" rows="2" placeholder="rows=&quot;2&quot;"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-3">3행</label>
      <textarea class="textarea" id="textarea-rows-3" rows="3" placeholder="rows=&quot;3&quot; — 기본 권장"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-5">5행</label>
      <textarea class="textarea" id="textarea-rows-5" rows="5" placeholder="rows=&quot;5&quot;"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-rows-8">8행</label>
      <textarea class="textarea" id="textarea-rows-8" rows="8" placeholder="rows=&quot;8&quot; — 긴 본문용"></textarea>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="resize-heading">
  <div class="demo_section-header">
    <h2 id="resize-heading">리사이즈</h2>
    <p>textarea_resize_* 클래스로 사용자 리사이즈 동작을 제어합니다. 기본값은 리사이즈 없음(resize: none)입니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-none">기본 (리사이즈 없음)</label>
      <textarea class="textarea" id="textarea-resize-none" rows="3" placeholder="class 없음 — 기본"></textarea>
      <p class="form_field-hint">고정 높이가 필요한 폼에 사용합니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-vertical">세로</label>
      <textarea class="textarea textarea_resize_vertical" id="textarea-resize-vertical" rows="3" placeholder="textarea_resize_vertical"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-horizontal">가로</label>
      <textarea class="textarea textarea_resize_horizontal" id="textarea-resize-horizontal" rows="3" placeholder="textarea_resize_horizontal"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-resize-both">양방향</label>
      <textarea class="textarea textarea_resize_both" id="textarea-resize-both" rows="3" placeholder="textarea_resize_both"></textarea>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="required-heading">
  <div class="demo_section-header">
    <h2 id="required-heading">필수 필드</h2>
    <p>required 속성과 form_field-required로 필수 입력을 표시합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start">
    <div class="form_field">
      <label class="form_field-label" for="textarea-required-content">
        문의 내용<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <textarea class="textarea" id="textarea-required-content" rows="4" placeholder="문의 내용을 입력해 주세요" required aria-required="true"></textarea>
      <p class="form_field-hint">최소 10자 이상 입력해 주세요.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-required-memo">
        메모<span class="form_field-required" aria-hidden="true">*</span>
      </label>
      <textarea class="textarea textarea_sm" id="textarea-required-memo" rows="2" placeholder="필수 메모" required aria-required="true"></textarea>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="count-heading">
  <div class="demo_section-header">
    <h2 id="count-heading">글자 수 카운터</h2>
    <p><code>textarea_wrap textarea_show-count</code>로 textarea 우측 하단에 현재 글자 수를 표시합니다. <code>maxlength</code>와 함께 사용하면 <code>0/200</code> 형식으로 최대 글자 수를 함께 보여 줍니다. 카운터를 사용할 때는 <code>form_field-hint</code>로 글자 수 안내 문구(예: 200자 이내로 작성해 주세요.)를 함께 제공합니다. 입력 시 스크린 리더에는 <code>textarea_count_announcer</code>가 <code>role="status"</code> · <code>aria-live="polite"</code>로 현재·최대 글자 수를 음성 안내합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="textarea-count-basic">메모</label>
      <div class="textarea_wrap textarea_show-count">
        <textarea
          class="textarea"
          id="textarea-count-basic"
          rows="4"
          maxlength="200"
          placeholder="내용을 입력하세요"
          aria-describedby="textarea-count-basic-hint textarea-count-basic-count"
        ></textarea>
        <span class="textarea_count" id="textarea-count-basic-count" role="status" aria-live="polite" aria-atomic="true">
          <span class="textarea_count_visual" aria-hidden="true">0/200</span>
          <span class="textarea_count_announcer">0자 입력, 최대 200자</span>
        </span>
      </div>
      <p class="form_field-hint" id="textarea-count-basic-hint">200자 이내로 작성해 주세요.</p>
    </div>

    <div class="form_field">
      <label class="form_field-label" for="textarea-count-sm">Small + 카운터</label>
      <div class="textarea_wrap textarea_show-count">
        <textarea
          class="textarea textarea_sm"
          id="textarea-count-sm"
          rows="3"
          maxlength="100"
          placeholder="textarea_sm"
          aria-describedby="textarea-count-sm-hint textarea-count-sm-count"
        ></textarea>
        <span class="textarea_count" id="textarea-count-sm-count" role="status" aria-live="polite" aria-atomic="true">
          <span class="textarea_count_visual" aria-hidden="true">0/100</span>
          <span class="textarea_count_announcer">0자 입력, 최대 100자</span>
        </span>
      </div>
      <p class="form_field-hint" id="textarea-count-sm-hint">100자 이내로 작성해 주세요.</p>
    </div>

    <div class="form_field form_field_fit">
      <label class="form_field-label" for="textarea-count-fit">제한 너비 + 카운터</label>
      <div class="textarea_wrap textarea_show-count textarea_wrap_fit">
        <textarea
          class="textarea"
          id="textarea-count-fit"
          rows="3"
          maxlength="200"
          placeholder="textarea_wrap_fit"
          aria-describedby="textarea-count-fit-hint textarea-count-fit-count"
        >입력된 내용이 있습니다.</textarea>
        <span class="textarea_count" id="textarea-count-fit-count" role="status" aria-live="polite" aria-atomic="true">
          <span class="textarea_count_visual" aria-hidden="true">12/200</span>
          <span class="textarea_count_announcer">12자 입력, 최대 200자</span>
        </span>
      </div>
      <p class="form_field-hint" id="textarea-count-fit-hint">200자 이내로 작성해 주세요.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="state-heading">
  <div class="demo_section-header">
    <h2 id="state-heading">상태</h2>
    <p>disabled · readonly · is-error · is-success로 입력 상태를 표현합니다. 오류·성공 메시지는 색상만으로 전달하지 않고 텍스트와 aria 속성을 함께 사용합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-stack">
    <div class="form_field">
      <label class="form_field-label" for="textarea-state-default">기본</label>
      <textarea class="textarea" id="textarea-state-default" rows="3" placeholder="입력 가능"></textarea>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-state-disabled">비활성</label>
      <textarea class="textarea" id="textarea-state-disabled" rows="3" disabled>수정할 수 없는 내용입니다.</textarea>
      <p class="form_field-hint">disabled 속성으로 편집을 막습니다.</p>
    </div>
    <div class="form_field">
      <label class="form_field-label" for="textarea-state-error">에러</label>
      <textarea class="textarea is-error" id="textarea-state-error" rows="3" aria-invalid="true" aria-describedby="textarea-state-error-msg">짧음</textarea>
      <p class="form_field-error" id="textarea-state-error-msg" role="alert">10자 이상 입력해 주세요.</p>
    </div>
  </div>
</section>

<section class="section demo_section" aria-labelledby="example-heading">
  <div class="demo_section-header">
    <h2 id="example-heading">조합 예시</h2>
    <p>문의 폼에서 필수 입력·글자 수 안내·유효성 피드백을 조합한 예시입니다. aria-invalid · aria-describedby · maxlength로 접근성을 보완합니다.</p>
  </div>

  <div class="demo_section-preview demo_section-preview-start demo_section-preview-stack">
    <form class="form form_vertical form_compact" action="#" method="get" novalidate aria-labelledby="example-heading">
      <div class="form_field">
        <label class="form_field-label" for="textarea-ex-subject">
          제목<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <input type="text" class="input input_sm" id="textarea-ex-subject" value="서비스 이용 문의" required aria-required="true">
      </div>

      <div class="form_field">
        <label class="form_field-label" for="textarea-ex-body">
          문의 내용<span class="form_field-required" aria-hidden="true">*</span>
        </label>
        <div class="textarea_wrap textarea_show-count">
          <textarea
            class="textarea textarea_sm is-error"
            id="textarea-ex-body"
            rows="5"
            maxlength="500"
            required
            aria-required="true"
            aria-invalid="true"
            aria-describedby="textarea-ex-body-hint textarea-ex-body-limit textarea-ex-body-error textarea-ex-body-count"
          >너무 짧아요</textarea>
          <span class="textarea_count is-limit" id="textarea-ex-body-count" role="status" aria-live="polite" aria-atomic="true">
            <span class="textarea_count_visual" aria-hidden="true">6/500</span>
            <span class="textarea_count_announcer">6자 입력, 최대 500자</span>
          </span>
        </div>
        <p class="form_field-hint" id="textarea-ex-body-limit">500자 이내로 작성해 주세요.</p>
        <p class="form_field-hint" id="textarea-ex-body-hint">구체적인 상황을 알려주시면 빠르게 답변드립니다.</p>
        <p class="form_field-error" id="textarea-ex-body-error" role="alert">10자 이상 입력해 주세요.</p>
      </div>

      <div class="form_field">
        <label class="form_field-label" for="textarea-ex-memo">추가 메모</label>
        <div class="textarea_wrap textarea_show-count">
          <textarea
            class="textarea textarea_sm textarea_resize_vertical is-success"
            id="textarea-ex-memo"
            rows="3"
            maxlength="200"
            aria-invalid="false"
            aria-describedby="textarea-ex-memo-hint textarea-ex-memo-success textarea-ex-memo-count"
          >참고할 내용이 있습니다.</textarea>
          <span class="textarea_count" id="textarea-ex-memo-count" role="status" aria-live="polite" aria-atomic="true">
            <span class="textarea_count_visual" aria-hidden="true">14/200</span>
            <span class="textarea_count_announcer">14자 입력, 최대 200자</span>
          </span>
        </div>
        <p class="form_field-hint" id="textarea-ex-memo-hint">200자 이내로 작성해 주세요.</p>
        <p class="form_field-success" id="textarea-ex-memo-success" role="status">선택 항목이 정상적으로 저장되었습니다.</p>
      </div>

      <div class="form_actions">
        <button type="submit" class="btn btn_filled color_primary btn_sm"><span class="btn_label">문의하기</span></button>
        <button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">취소</span></button>
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
            <td><code class="typo_code">textarea</code></td>
            <td>텍스트영역 루트</td>
          </tr>
          <tr>
            <td><code class="typo_code">textarea_sm</code> · <code class="typo_code">textarea_lg</code> · <code class="typo_code">textarea_block</code></td>
            <td>크기·너비</td>
          </tr>
          <tr>
            <td><code class="typo_code">textarea_fit</code></td>
            <td>--input-max-width(320px)까지 제한</td>
          </tr>
          <tr>
            <td><code class="typo_code">textarea_resize_vertical</code> · <code class="typo_code">textarea_resize_horizontal</code> · <code class="typo_code">textarea_resize_both</code></td>
            <td>리사이즈 방향</td>
          </tr>
          <tr>
            <td><code class="typo_code">textarea_wrap</code> · <code class="typo_code">textarea_show-count</code> · <code class="typo_code">textarea_count</code></td>
            <td>글자 수 카운터</td>
          </tr>
          <tr>
            <td><code class="typo_code">is-error</code> · <code class="typo_code">is-disabled</code> · <code class="typo_code">is-success</code></td>
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
            <td><code class="typo_code">--textarea-min-height</code></td>
            <td>5rem</td>
            <td>최소 높이</td>
          </tr>
          <tr>
            <td><code class="typo_code">--textarea-count-inset-x</code> · <code class="typo_code">--textarea-count-inset-y</code></td>
            <td>0.75rem · 0.5rem</td>
            <td>글자 수 카운터 위치</td>
          </tr>
          <tr>
            <td><code class="typo_code">--input-max-width</code></td>
            <td>320px</td>
            <td>textarea_fit 최대 너비 (Input과 공유)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`,e=$(Y),Z=ee(Y),te={title:"Components/폼/Textarea",id:"components-textarea",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'여러 줄 텍스트 입력을 위한 Textarea 컴포넌트입니다. class="textarea"를 사용하며, form_field와 조합해 레이블·힌트·유효성 메시지를 구성합니다.'}}}},r={name:"기본",render:()=>a(e[0]),parameters:{docs:{...t(e[0].previewHtml).docs,description:{story:e[0].description}}}},s={name:"단독 사용",render:()=>a(e[1]),parameters:{docs:{...t(e[1].previewHtml).docs,description:{story:e[1].description}}}},n={name:"크기",render:()=>a(e[2]),parameters:{docs:{...t(e[2].previewHtml).docs,description:{story:e[2].description}}}},o={name:"너비",render:()=>a(e[3]),parameters:{docs:{...t(e[3].previewHtml).docs,description:{story:e[3].description}}}},d={name:"행 수",render:()=>a(e[4]),parameters:{docs:{...t(e[4].previewHtml).docs,description:{story:e[4].description}}}},i={name:"리사이즈",render:()=>a(e[5]),parameters:{docs:{...t(e[5].previewHtml).docs,description:{story:e[5].description}}}},c={name:"필수 필드",render:()=>a(e[6]),parameters:{docs:{...t(e[6].previewHtml).docs,description:{story:e[6].description}}}},l={name:"글자 수 카운터",render:()=>a(e[7]),parameters:{docs:{...t(e[7].previewHtml).docs,description:{story:e[7].description}}}},m={name:"상태",render:()=>a(e[8]),parameters:{docs:{...t(e[8].previewHtml).docs,description:{story:e[8].description}}}},p={name:"조합 예시",render:()=>a(e[9]),parameters:{docs:{...t(e[9].previewHtml).docs,description:{story:e[9].description}}}},u={name:"클래스 · 속성",tags:["!dev"],render:()=>a(Z[0]),parameters:{docs:{source:{code:null},description:{story:"HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다."}}}},x={name:"디자인 토큰",tags:["!dev"],render:()=>a(Z[1]),parameters:{docs:{source:{code:null},description:{story:"Textarea 최소 높이·글자 수 카운터 위치에 사용하는 CSS 변수입니다."}}}};var _,f,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,h,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '단독 사용',
  render: () => renderDemo(demos[1]),
  parameters: {
    docs: {
      ...gulpSource(demos[1].previewHtml).docs,
      description: {
        story: demos[1].description
      }
    }
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,C,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var D,z,S;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '너비',
  render: () => renderDemo(demos[3]),
  parameters: {
    docs: {
      ...gulpSource(demos[3].previewHtml).docs,
      description: {
        story: demos[3].description
      }
    }
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var q,B,H;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '행 수',
  render: () => renderDemo(demos[4]),
  parameters: {
    docs: {
      ...gulpSource(demos[4].previewHtml).docs,
      description: {
        story: demos[4].description
      }
    }
  }
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var A,T,k;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '리사이즈',
  render: () => renderDemo(demos[5]),
  parameters: {
    docs: {
      ...gulpSource(demos[5].previewHtml).docs,
      description: {
        story: demos[5].description
      }
    }
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,L,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '필수 필드',
  render: () => renderDemo(demos[6]),
  parameters: {
    docs: {
      ...gulpSource(demos[6].previewHtml).docs,
      description: {
        story: demos[6].description
      }
    }
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,j,F;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '글자 수 카운터',
  render: () => renderDemo(demos[7]),
  parameters: {
    docs: {
      ...gulpSource(demos[7].previewHtml).docs,
      description: {
        story: demos[7].description
      }
    }
  }
}`,...(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var I,N,G;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(G=(N=m.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var J,K,P;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      ...gulpSource(demos[9].previewHtml).docs,
      description: {
        story: demos[9].description
      }
    }
  }
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,R,U;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,W,X;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: {
        code: null
      },
      description: {
        story: 'Textarea 최소 높이·글자 수 카운터 위치에 사용하는 CSS 변수입니다.'
      }
    }
  }
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const re=["Demo0","Demo1","Demo2","Demo3","Demo4","Demo5","Demo6","Demo7","Demo8","Demo9","ApiClasses","ApiTokens"];export{u as ApiClasses,x as ApiTokens,r as Demo0,s as Demo1,n as Demo2,o as Demo3,d as Demo4,i as Demo5,c as Demo6,l as Demo7,m as Demo8,p as Demo9,re as __namedExportsOrder,te as default};

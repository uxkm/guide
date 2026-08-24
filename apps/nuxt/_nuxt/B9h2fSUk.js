import{B as e,G as t,H as n,L as r,U as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,st as p,u as m,wt as h,y as g}from"./CCnt5OSV.js";import{F as _,l as v,t as y,v as b}from"./DkmWXf_S.js";import{t as x}from"./DD3RWXAt.js";import{t as S}from"./Ca85r0nz2.js";var C=Object.assign({inheritAttrs:!1},{__name:`TypoTitle`,props:{level:{type:[Number,String],default:1,validator:e=>[1,2,3,4,5,`1`,`2`,`3`,`4`,`5`].includes(e)},color:String,label:String},setup(o){let s=new Set([1,2,3,4,5,`1`,`2`,`3`,`4`,`5`]),l=new Set([``,`default`,`muted`,`primary`,`success`,`warning`,`danger`,`info`,`error`]),d=o,p=t(),v=i(),y=f(null),x=_(`TypoTitle`,{defaults:{level:1},selfClosing:!1}),S=m(()=>s.has(d.level)?Number(d.level):1),C=m(()=>l.has(d.color)?d.color:``),w=m(()=>`h${S.value}`);b(x,()=>({...d,level:S.value,color:C.value}),p,y,v);let T=m(()=>{let e=[`typo_title-${S.value}`];return C.value&&e.push(`color_${C.value}`),v.class&&e.push(v.class),e}),E=m(()=>{let{class:e,...t}=v;return t});return(t,i)=>(r(),c(n(w.value),u({ref_key:`rootRef`,ref:y},E.value,{class:T.value}),{default:a(()=>[e(t.$slots,`default`,{},()=>[g(h(o.label),1)])]),_:3},16,[`class`]))}}),w=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],T=[{name:`level`,type:`1 | 2 | 3 | 4 | 5`,default:`1`,description:`제목 레벨. h1~h5 태그와 typo_title-* 클래스`},{name:`color`,type:`'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'error'`,default:`—`,description:`공통 color_* 클래스`},{name:`label`,type:`string`,default:`—`,description:`제목 텍스트. default 슬롯으로 대체 가능`}],E=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],D=[{name:`variant`,type:`'text' | 'paragraph' | 'lead' | 'caption' | 'label' | 'overline' | 'code' | 'kbd' | 'pre' | 'strong' | 'italic' | 'underline' | 'delete' | 'mark' | 'sub' | 'sup' | 'small' | 'link' | 'blockquote'`,default:`text`,description:`텍스트 스타일·시맨틱 태그 매핑`},{name:`tag`,type:`'p' | 'span' | 'div' | 'label' | 'code' | 'kbd' | 'pre' | 'strong' | 'em' | 'del' | 'mark' | 'sub' | 'sup' | 'small' | 'a' | 'blockquote' | …`,default:`—`,description:`루트 HTML 태그 수동 지정 (variant 기본 태그 대체)`},{name:`color`,type:`'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'error'`,default:`—`,description:`공통 color_* 클래스`},{name:`size`,type:`'xs' | 'sm' | 'lg' | 'xl'`,default:`—`,description:`공통 size_* 클래스`},{name:`ellipsis`,type:`1 | 2 | 3`,default:`—`,description:`말줄임 줄 수. 미지정 시 말줄임 없음. 1~3은 text_ellipsis · text_ellipsis-2 · text_ellipsis-3`},{name:`href`,type:`string`,default:`—`,description:`a 태그로 렌더링될 때 링크 목적지`},{name:`html-for`,type:`string`,default:`—`,description:`label 태그로 렌더링될 때 연결할 폼 컨트롤 id`},{name:`cite`,type:`string`,default:`—`,description:`blockquote 태그로 렌더링될 때 인용 출처 URL`},{name:`label`,type:`string`,default:`—`,description:`텍스트 내용. default 슬롯으로 대체 가능`}],O=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],k=[{name:`default`,description:`제목 텍스트 (label prop 대체)`}],A=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],j=[{name:`default`,description:`텍스트 내용 (label prop 대체)`}],M=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],N=[{name:`typo_title-1 ~ typo_title-5`,description:`제목 스케일`},{name:`typo_paragraph · typo_lead · typo_caption · typo_label · typo_overline`,description:`본문·보조 텍스트`},{name:`typo_strong · typo_italic · typo_underline · typo_delete · typo_mark`,description:`strong · em · span · del · mark 기반 인라인 강조`},{name:`typo_sub · typo_sup · typo_small`,description:`아래첨자 · 위첨자 · 보조 소문자 (sub · sup · small 태그)`},{name:`typo_link`,description:`본문 안 인라인 링크`},{name:`typo_code · typo_kbd · typo_pre`,description:`코드·키보드·코드 블록`},{name:`typo_blockquote`,description:`인용 블록`},{name:`typo_list · typo_list-ordered`,description:`본문 prose 목록 (ul · ol + li). UI 목록은 List 컴포넌트`},{name:`typo_stack · typo_stack-lg`,description:`제목+본문 수직 간격`},{name:`text_ellipsis · text_ellipsis-2 · text_ellipsis-3`,description:`말줄임`},{name:`size_xs · size_sm · size_lg · size_xl`,description:`텍스트 크기`},{name:`color_*`,description:`공통 색상 유틸`}],P=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],F=[{name:`--typo-title-1-size · … · --typo-title-5-size`,default:`2.375rem · 1.875rem · 1.5rem · 1.25rem · 1rem`,description:`제목 레벨별 크기`},{name:`--typo-title-1-weight · … · --typo-title-5-weight`,default:`700 · 700 · 600 · 600 · 600`,description:`제목 레벨별 굵기`},{name:`--typo-title-1-line-height · … · --typo-title-5-line-height`,default:`1.2 · 1.25 · 1.3 · 1.35 · 1.4`,description:`제목 레벨별 줄높이`},{name:`--typo-title-1-letter-spacing · --typo-title-2-letter-spacing · --typo-title-3-letter-spacing`,default:`-0.02em · -0.015em · -0.01em`,description:`h1~h3 자간`},{name:`--typo-text-line-height`,default:`1.6`,description:`단락·목록·인용문 줄높이`},{name:`--typo-paragraph-gap · --typo-list-gap`,default:`var(--space-md) · var(--space-xs)`,description:`단락·목록 항목 간격`},{name:`--typo-mark-bg`,default:`rgba(250, 219, 20, 0.35)`,description:`형광펜 배경`},{name:`--typo-code-padding-y · --typo-code-padding-x · --typo-code-radius`,default:`0.1em · 0.35em · 4px`,description:`인라인 코드·mark 패딩과 모서리`},{name:`--typo-blockquote-border-width`,default:`3px`,description:`인용문 왼쪽 테두리`},{name:`--typo-sub-sup-size · --typo-sub-offset · --typo-sup-offset`,default:`0.75em · -0.25em · -0.5em`,description:`아래·위첨자 크기·오프셋`},{name:`--typo-small-size`,default:`var(--text-size-sm)`,description:`small 태그 보조 텍스트 크기`},{name:`--typo-lead-size · --typo-lead-line-height`,default:`var(--text-size-lg) · 1.6`,description:`리드 텍스트`},{name:`--typo-caption-size · --typo-label-size · --typo-label-weight`,default:`var(--text-size-xs) · var(--text-size-sm) · 600`,description:`캡션·레이블`},{name:`--typo-overline-size · --typo-overline-weight · --typo-overline-spacing`,default:`var(--text-size-xs) · 600 · 0.06em`,description:`오버라인 텍스트`},{name:`--typo-kbd-padding-y · --typo-kbd-padding-x`,default:`0.15em · 0.4em`,description:`키보드 키 패딩`},{name:`--typo-pre-padding · --typo-pre-radius`,default:`var(--space-md) · var(--radius-md)`,description:`코드 블록`}],I=`<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>`,L={class:`typo_stack-lg`},R={class:`color_muted`},z={style:{"max-width":`320px`,width:`100%`}},B={style:{"max-width":`32rem`,width:`100%`}},V={class:`typo_stack-lg`},H={class:`typo_stack-lg`,style:{"max-width":`28rem`}},U={class:`typo_stack`,style:{"max-width":`28rem`}},W={title:`Typography | HTML Components`,activeNav:`typography`,pageTitle:`Typography`},G={__name:`typography`,setup(e){return(e,t)=>(r(),d(l,null,[t[31]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Typography`),s(`p`,{class:`lead`},` 제목·본문·강조·링크·코드 등 텍스트의 의미와 시각적 위계를 표현하는 Vue 컴포넌트입니다. 시맨틱 태그와 타이포그래피 클래스를 props로 함께 적용합니다. `)],-1),o(x,{"heading-id":`title-heading`,title:`제목`,description:`typo_title-1 ~ typo_title-5 클래스로 5단계 제목 스케일을 적용합니다. 시맨틱 heading 태그와 함께 사용합니다.`,stack:``,code:`<template>
  <div class="typo_stack-lg">
    <TypoTitle :level="1" label="h1. 제목 레벨 1" />
    <TypoTitle :level="2" label="h2. 제목 레벨 2" />
    <TypoTitle :level="3" label="h3. 제목 레벨 3" />
    <TypoTitle :level="4" label="h4. 제목 레벨 4" />
    <TypoTitle :level="5" label="h5. 제목 레벨 5" />
  </div>
</template>`},{default:a(()=>[s(`div`,L,[o(C,{level:1,label:`h1. 제목 레벨 1`}),o(C,{level:2,label:`h2. 제목 레벨 2`}),o(C,{level:3,label:`h3. 제목 레벨 3`}),o(C,{level:4,label:`h4. 제목 레벨 4`}),o(C,{level:5,label:`h5. 제목 레벨 5`})])]),_:1}),o(x,{"heading-id":`text-heading`,title:`본문`,description:`기본 본문은 별도 클래스 없이 p 태그를 사용합니다. 단락 간격이 필요하면 typo_paragraph를 사용합니다.`,stack:``,code:`<template>
  <p>
    기본 본문 텍스트입니다. 인라인으로 <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
  </p>
  <div>
    <TypoText variant="paragraph" label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다." />
    <TypoText variant="paragraph" label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다." />
  </div>
</template>`},{default:a(()=>[s(`p`,null,[t[0]||=g(` 기본 본문 텍스트입니다. 인라인으로 `,-1),o(S,{tag:`span`,color:`muted`,label:`보조 설명`}),t[1]||=g(`을 함께 쓸 수 있습니다. `,-1)]),s(`div`,null,[o(S,{variant:`paragraph`,label:`typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다.`}),o(S,{variant:`paragraph`,label:`두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다.`})])]),_:1}),o(x,{"heading-id":`color-heading`,title:`색상 타입`,description:`color_muted, color_success 등 공통 색상 클래스를 적용합니다. 버튼·배지·알림 등 모든 컴포넌트에서 동일한 클래스명을 사용합니다.`,stack:``,code:`<template>
  <TypoText color="default" label="기본 텍스트 (Default)" />
  <TypoText color="muted" label="보조 텍스트 (Muted)" />
  <TypoText color="success" label="성공 메시지 (Success)" />
  <TypoText color="warning" label="주의 메시지 (Warning)" />
  <TypoText color="danger" label="오류 메시지 (Danger)" />
  <TypoText color="primary" label="강조 텍스트 (Primary)" />
</template>`},{default:a(()=>[o(S,{color:`default`,label:`기본 텍스트 (Default)`}),o(S,{color:`muted`,label:`보조 텍스트 (Muted)`}),o(S,{color:`success`,label:`성공 메시지 (Success)`}),o(S,{color:`warning`,label:`주의 메시지 (Warning)`}),o(S,{color:`danger`,label:`오류 메시지 (Danger)`}),o(S,{color:`primary`,label:`강조 텍스트 (Primary)`})]),_:1}),o(x,{"heading-id":`size-heading`,title:`크기`,description:`base(0.875rem)는 클래스 없이 기본 적용됩니다. xs, sm, lg, xl만 size_* 클래스를 사용합니다.`,stack:``,code:`<template>
  <TypoText size="xs" label="Extra Small — 0.75rem" />
  <TypoText size="sm" label="Small — 0.8125rem" />
  <TypoText label="Base — 0.875rem (기본)" />
  <TypoText size="lg" label="Large — 1rem" />
  <TypoText size="xl" label="Extra Large — 1.125rem" />
</template>`},{default:a(()=>[o(S,{size:`xs`,label:`Extra Small — 0.75rem`}),o(S,{size:`sm`,label:`Small — 0.8125rem`}),o(S,{label:`Base — 0.875rem (기본)`}),o(S,{size:`lg`,label:`Large — 1rem`}),o(S,{size:`xl`,label:`Extra Large — 1.125rem`})]),_:1}),o(x,{"heading-id":`style-heading`,title:`텍스트 스타일`,description:`strong · em · del · mark 등 의미 있는 태그와 밑줄·인라인 코드 스타일을 조합합니다.`,stack:``,code:`<template>
  <p>
    <TypoText variant="strong" label="굵은 텍스트" />와
    <TypoText variant="italic" label="기울임 텍스트" />,
    <TypoText variant="underline" label="밑줄 텍스트" />,
    <TypoText variant="delete" label="취소선 텍스트" />를 함께 사용할 수 있습니다.
  </p>
  <p>
    <TypoText variant="mark" label="형광펜 강조" />와
    <TypoText variant="code" label="inline code" /> 표현도 지원합니다.
  </p>
  <p class="color_muted">
    조합 예시:
    <TypoText variant="strong" color="danger" label="중요 경고" />,
    <TypoText variant="italic" color="primary" label="강조 설명" />,
    <TypoText variant="delete" color="muted" label="삭제된 항목" />
  </p>
</template>`},{default:a(()=>[s(`p`,null,[o(S,{variant:`strong`,label:`굵은 텍스트`}),t[2]||=g(`와 `,-1),o(S,{variant:`italic`,label:`기울임 텍스트`}),t[3]||=g(`, `,-1),o(S,{variant:`underline`,label:`밑줄 텍스트`}),t[4]||=g(`, `,-1),o(S,{variant:`delete`,label:`취소선 텍스트`}),t[5]||=g(`를 함께 사용할 수 있습니다. `,-1)]),s(`p`,null,[o(S,{variant:`mark`,label:`형광펜 강조`}),t[6]||=g(`와 `,-1),o(S,{variant:`code`,label:`inline code`}),t[7]||=g(` 표현도 지원합니다. `,-1)]),s(`p`,R,[t[8]||=g(` 조합 예시: `,-1),o(S,{variant:`strong`,color:`danger`,label:`중요 경고`}),t[9]||=g(`, `,-1),o(S,{variant:`italic`,color:`primary`,label:`강조 설명`}),t[10]||=g(`, `,-1),o(S,{variant:`delete`,color:`muted`,label:`삭제된 항목`})])]),_:1}),o(x,{"heading-id":`sub-sup-small-heading`,title:`아래첨자 · 위첨자 · 소문자`,description:`sub · sup · small 시맨틱 태그에 typo_sub · typo_sup · typo_small 클래스를 적용합니다.`,stack:``,code:`<template>
  <p>
    화학식 H<TypoText variant="sub" label="2" />O,
    수식 x<TypoText variant="sup" label="2" /> + y<TypoText variant="sup" label="2" /> = z<TypoText variant="sup" label="2" />처럼
    아래·위첨자를 표현합니다.
  </p>
  <p>
    각주<TypoText variant="sup" label="1" />나
    제곱미터 m<TypoText variant="sup" label="2" /> 단위에도 활용합니다.
  </p>
  <p>
    <TypoText variant="small" label="※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다." />
  </p>
</template>`},{default:a(()=>[s(`p`,null,[t[11]||=g(` 화학식 H`,-1),o(S,{variant:`sub`,label:`2`}),t[12]||=g(`O, 수식 x`,-1),o(S,{variant:`sup`,label:`2`}),t[13]||=g(` + y`,-1),o(S,{variant:`sup`,label:`2`}),t[14]||=g(` = z`,-1),o(S,{variant:`sup`,label:`2`}),t[15]||=g(`처럼 아래·위첨자를 표현합니다. `,-1)]),s(`p`,null,[t[16]||=g(` 각주`,-1),o(S,{variant:`sup`,label:`1`}),t[17]||=g(`나 제곱미터 m`,-1),o(S,{variant:`sup`,label:`2`}),t[18]||=g(` 단위에도 활용합니다. `,-1)]),s(`p`,null,[o(S,{variant:`small`,label:`※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다.`})])]),_:1}),o(x,{"heading-id":`ellipsis-heading`,title:`말줄임`,description:`label 또는 default 슬롯으로 전달한 콘텐츠에 1~3줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다.`,stack:``,code:`<template>
  <div style="max-width: 320px; width: 100%;">
    <TypoText :ellipsis="1">
      1줄 말줄임 — default 슬롯으로 전달한 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet.
    </TypoText>
    <TypoText :ellipsis="2" label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다." />
    <TypoText :ellipsis="3" label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요." />
  </div>
</template>`},{default:a(()=>[s(`div`,z,[o(S,{ellipsis:1},{default:a(()=>[...t[19]||=[g(` 1줄 말줄임 — default 슬롯으로 전달한 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet. `,-1)]]),_:1}),o(S,{ellipsis:2,label:`2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다.`}),o(S,{ellipsis:3,label:`3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요.`})])]),_:1}),o(x,{"heading-id":`blockquote-heading`,title:`인용`,description:`blockquote 태그에 typo_blockquote 클래스를 적용합니다.`,stack:``,code:`<template>
  <TypoText
    variant="blockquote"
    color="muted"
    cite="https://example.com"
    label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
  />
</template>`},{default:a(()=>[o(S,{variant:`blockquote`,color:`muted`,cite:`https://example.com`,label:`좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요.`})]),_:1}),o(x,{"heading-id":`list-heading`,title:`목록`,description:`본문 prose 목록은 ul · ol에 typo_list · typo_list-ordered 클래스를 적용합니다. UI 리스트(아바타, 인터랙티브 항목 등)는 List 컴포넌트를 사용하세요.`,stack:``,code:`<template>
  <ul class="typo_list">
    <li>디자인 토큰 정의</li>
    <li>컴포넌트 문서화</li>
    <li>접근성 검토</li>
  </ul>
  <ol class="typo_list-ordered">
    <li>요구사항 분석</li>
    <li>와이어프레임 작성</li>
    <li>프로토타입 검증</li>
  </ol>
  <p class="form_field-hint">
    용어 설명·구조화된 목록은 <a href="/components/list#definition-heading">List — 정의 목록</a>을 참고하세요.
  </p>
</template>`},{default:a(()=>[...t[20]||=[s(`ul`,{class:`typo_list`},[s(`li`,null,`디자인 토큰 정의`),s(`li`,null,`컴포넌트 문서화`),s(`li`,null,`접근성 검토`)],-1),s(`ol`,{class:`typo_list-ordered`},[s(`li`,null,`요구사항 분석`),s(`li`,null,`와이어프레임 작성`),s(`li`,null,`프로토타입 검증`)],-1),s(`p`,{class:`form_field-hint`},[g(` 용어 설명·구조화된 목록은 `),s(`a`,{href:`/components/list#definition-heading`},`List — 정의 목록`),g(`을 참고하세요. `)],-1)]]),_:1}),o(x,{"heading-id":`link-heading`,title:`링크`,description:`variant=link는 a 태그와 typo_link 클래스를 사용합니다. 실제 이동할 href를 함께 지정하세요.`,stack:``,code:`<template>
  <TypoText variant="paragraph">
    자세한 내용은 <TypoText variant="link" href="/getting-started" label="설치 및 사용" />을 참고하세요.
    <TypoText tag="span" color="muted" label="또는" />
    <TypoText variant="link" href="/design-tokens" size="sm" label="디자인 토큰" />으로 이동할 수 있습니다.
  </TypoText>
</template>`},{default:a(()=>[o(S,{variant:`paragraph`},{default:a(()=>[t[21]||=g(` 자세한 내용은 `,-1),o(S,{variant:`link`,href:`/getting-started`,label:`설치 및 사용`}),t[22]||=g(`을 참고하세요. `,-1),o(S,{tag:`span`,color:`muted`,label:`또는`}),o(S,{variant:`link`,href:`/design-tokens`,size:`sm`,label:`디자인 토큰`}),t[23]||=g(`으로 이동할 수 있습니다. `,-1)]),_:1})]),_:1}),o(x,{"heading-id":`lead-heading`,title:`리드 · 캡션 · 레이블`,description:`typo_lead · typo_caption · typo_label · typo_overline로 보조 텍스트 위계를 표현합니다.`,stack:``,code:`<template>
  <div style="max-width: 32rem; width: 100%;">
    <div class="typo_stack-lg">
      <TypoText variant="overline" label="가이드 소개" />
      <TypoTitle :level="3" label="Vue Components" />
      <TypoText variant="lead" label="Vue와 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다." />
      <TypoText variant="caption" label="마지막 업데이트: 2026-07-31" />
    </div>
    <div>
      <TypoText variant="label" html-for="demo-email" label="이메일" />
      <input id="demo-email" class="input" type="email" placeholder="name@example.com" />
      <TypoText variant="caption" style="margin-top: 0.25rem;" label="가입 시 사용한 이메일 주소를 입력하세요." />
    </div>
  </div>
</template>`},{default:a(()=>[s(`div`,B,[s(`div`,V,[o(S,{variant:`overline`,label:`가이드 소개`}),o(C,{level:3,label:`Vue Components`}),o(S,{variant:`lead`,label:`Vue와 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다.`}),o(S,{variant:`caption`,label:`마지막 업데이트: 2026-07-31`})]),s(`div`,null,[o(S,{variant:`label`,"html-for":`demo-email`,label:`이메일`}),t[24]||=s(`input`,{id:`demo-email`,class:`input`,type:`email`,placeholder:`name@example.com`},null,-1),o(S,{variant:`caption`,style:{"margin-top":`0.25rem`},label:`가입 시 사용한 이메일 주소를 입력하세요.`})])])]),_:1}),o(x,{"heading-id":`title-color-heading`,title:`제목 색상`,description:`제목에도 공통 color_* 클래스를 조합할 수 있습니다.`,stack:``,code:`<template>
  <TypoTitle :level="3" color="primary" label="Primary 제목" />
  <TypoTitle :level="3" color="success" label="Success 제목" />
  <TypoTitle :level="3" color="danger" label="Danger 제목" />
  <TypoTitle :level="3" color="muted" label="Muted 제목" />
</template>`},{default:a(()=>[o(C,{level:3,color:`primary`,label:`Primary 제목`}),o(C,{level:3,color:`success`,label:`Success 제목`}),o(C,{level:3,color:`danger`,label:`Danger 제목`}),o(C,{level:3,color:`muted`,label:`Muted 제목`})]),_:1}),o(x,{"heading-id":`kbd-heading`,title:`키보드 · 코드 블록`,description:`typo_kbd · typo_pre · typo_code로 단축키와 코드를 표시합니다.`,stack:``,code:`<template>
  <p>
    저장하려면 <TypoText variant="kbd" label="⌘" /> + <TypoText variant="kbd" label="S" />를 누르세요.
    검색은 <TypoText variant="kbd" label="Ctrl" /> + <TypoText variant="kbd" label="K" />입니다.
  </p>
  <TypoText variant="pre">
    <code>{{ buttonMarkupExample }}</code>
  </TypoText>
</template>`},{default:a(()=>[s(`p`,null,[t[25]||=g(` 저장하려면 `,-1),o(S,{variant:`kbd`,label:`⌘`}),t[26]||=g(` + `,-1),o(S,{variant:`kbd`,label:`S`}),t[27]||=g(`를 누르세요. 검색은 `,-1),o(S,{variant:`kbd`,label:`Ctrl`}),t[28]||=g(` + `,-1),o(S,{variant:`kbd`,label:`K`}),t[29]||=g(`입니다. `,-1)]),o(S,{variant:`pre`},{default:a(()=>[s(`code`,null,h(p(I)),1)]),_:1})]),_:1}),o(x,{"heading-id":`nested-list-heading`,title:`중첩 목록`,description:`typo_list · typo_list-ordered에 하위 ul · ol을 중첩할 수 있습니다.`,stack:``,code:`<template>
  <ul class="typo_list">
    <li>레이아웃
      <ul class="typo_list">
        <li>Container</li>
        <li>Grid</li>
      </ul>
    </li>
    <li>기본 요소
      <ul class="typo_list">
        <li>Button</li>
        <li>Typography</li>
      </ul>
    </li>
  </ul>
</template>`},{default:a(()=>[...t[30]||=[s(`ul`,{class:`typo_list`},[s(`li`,null,[g(`레이아웃 `),s(`ul`,{class:`typo_list`},[s(`li`,null,`Container`),s(`li`,null,`Grid`)])]),s(`li`,null,[g(`기본 요소 `),s(`ul`,{class:`typo_list`},[s(`li`,null,`Button`),s(`li`,null,`Typography`)])])],-1)]]),_:1}),o(x,{"heading-id":`stack-heading`,title:`제목 + 본문 조합`,description:`typo_stack, typo_stack-lg로 제목과 본문을 묶어 간격을 맞춥니다.`,stack:``,code:`<template>
  <div class="typo_stack-lg" style="max-width: 28rem;">
    <TypoTitle :level="3" label="섹션 제목" />
    <TypoText variant="paragraph" label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다." />
    <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-07-31" />
  </div>
  <div class="typo_stack" style="max-width: 28rem;">
    <TypoTitle :level="4" label="작은 스택" />
    <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
  </div>
</template>`},{default:a(()=>[s(`div`,H,[o(C,{level:3,label:`섹션 제목`}),o(S,{variant:`paragraph`,label:`typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다.`}),o(S,{tag:`p`,color:`muted`,size:`sm`,label:`마지막 업데이트: 2026-07-31`})]),s(`div`,U,[o(C,{level:4,label:`작은 스택`}),o(S,{tag:`p`,color:`muted`,label:`typo_stack은 좁은 간격으로 제목·설명을 묶습니다.`})])]),_:1}),o(v,{"heading-id":`api-title-props-heading`,title:`API · TypoTitle Props`},{default:a(()=>[o(y,{columns:p(w),rows:p(T),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`api-text-props-heading`,title:`API · TypoText Props`},{default:a(()=>[o(y,{columns:p(E),rows:p(D),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`api-title-slots-heading`,title:`API · TypoTitle Slots`},{default:a(()=>[o(y,{columns:p(O),rows:p(k),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`api-text-slots-heading`,title:`API · TypoText Slots`},{default:a(()=>[o(y,{columns:p(A),rows:p(j),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(y,{columns:p(M),rows:p(N),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(v,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(y,{columns:p(P),rows:p(F),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{G as default,W as docMeta};
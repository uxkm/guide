import{u as be,b as ge,l as Ee,j as ke,n as _e,p as fe,f as g,o as he,r as Fe,g as Se,t as we,a as Pe}from"./vue.esm-bundler-BaZlnz8B.js";import{u as ze,c as Le}from"./useDemoCode-B9b0dRAo.js";import{_ as u}from"./TypoText-DRTgUpaX.js";const e=Object.assign({inheritAttrs:!1},{__name:"TypoTitle",props:{level:{type:[Number,String],default:1,validator:t=>[1,2,3,4,5,"1","2","3","4","5"].includes(t)},color:String,label:String},setup(t){const n=t,De=be(),v=ge(),b=Pe(null),xe=Le("TypoTitle",{defaults:{level:1},selfClosing:!1});ze(xe,n,De,b,v);const Ae=g(()=>`h${n.level}`),ve=g(()=>{const l=[`typo_title-${n.level}`];return n.color&&l.push(`color_${n.color}`),v.class&&l.push(v.class),l});return(l,Re)=>(he(),Ee(fe(Ae.value),{ref_key:"rootRef",ref:b,class:_e(ve.value)},{default:ke(()=>[Fe(l.$slots,"default",{},()=>[Se(we(t.label),1)])]),_:3},8,["class"]))}}),Me=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],He=[{name:"level",type:"1 | 2 | 3 | 4 | 5",default:"1",description:"제목 레벨. h1~h5 태그와 typo_title-* 클래스"},{name:"color",type:"string",default:"—",description:"공통 color_* 클래스"},{name:"label",type:"string",default:"—",description:"제목 텍스트. default 슬롯으로 대체 가능"}],qe=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ie=[{name:"variant",type:"'text' | 'paragraph' | 'lead' | 'caption' | 'label' | 'overline' | 'code' | 'kbd' | 'pre' | 'strong' | 'italic' | 'underline' | 'delete' | 'mark' | 'sub' | 'sup' | 'small' | 'link' | 'blockquote'",default:"text",description:"텍스트 스타일·시맨틱 태그 매핑"},{name:"tag",type:"string",default:"—",description:"루트 HTML 태그 수동 지정 (variant 기본 태그 대체)"},{name:"color",type:"string",default:"—",description:"공통 color_* 클래스"},{name:"size",type:"'xs' | 'sm' | 'lg' | 'xl'",default:"—",description:"공통 size_* 클래스"},{name:"ellipsis",type:"1 | 2 | 3",default:"—",description:"말줄임 줄 수. 미지정 시 말줄임 없음. 1~3은 text_ellipsis · text_ellipsis-2 · text_ellipsis-3"},{name:"href",type:"string",default:"—",description:'variant="link"일 때 href'},{name:"html-for",type:"string",default:"—",description:'variant="label"일 때 for 속성'},{name:"cite",type:"string",default:"—",description:'variant="blockquote"일 때 cite 속성'},{name:"label",type:"string",default:"—",description:"텍스트 내용. default 슬롯으로 대체 가능"}],Ue=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ke=[{name:"default",description:"제목 텍스트 (label prop 대체)"}],Oe=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],$e=[{name:"default",description:"텍스트 내용 (label prop 대체)"}],Ge=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ne=[{name:"typo_title-1 ~ typo_title-5",description:"제목 스케일"},{name:"typo_paragraph · typo_lead · typo_caption · typo_label · typo_overline",description:"본문·보조 텍스트"},{name:"typo_strong · typo_italic · typo_underline · typo_delete · typo_mark",description:"인라인 강조"},{name:"typo_sub · typo_sup · typo_small",description:"아래첨자 · 위첨자 · 보조 소문자 (sub · sup · small 태그)"},{name:"typo_link",description:"본문 안 인라인 링크"},{name:"typo_code · typo_kbd · typo_pre",description:"코드·키보드·코드 블록"},{name:"typo_blockquote",description:"인용 블록"},{name:"typo_list · typo_list-ordered",description:"본문 prose 목록 (ul · ol + li). UI 목록은 List 컴포넌트"},{name:"typo_stack · typo_stack-lg",description:"제목+본문 수직 간격"},{name:"text_ellipsis · text_ellipsis-2 · text_ellipsis-3",description:"말줄임"},{name:"size_xs · size_sm · size_lg · size_xl",description:"텍스트 크기"},{name:"color_*",description:"공통 색상 유틸"}],We=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Xe=[{name:"--typo-title-*-size · weight · line-height",default:"—",description:"제목 레벨별 타이포"},{name:"--typo-text-size · --typo-text-line-height",default:"var(--text-size-base) · 1.6",description:"기본 본문"},{name:"--typo-paragraph-gap",default:"var(--space-md)",description:"단락 간격"},{name:"--typo-list-gap",default:"var(--space-xs)",description:"목록 항목 간격"},{name:"--typo-lead-size · --typo-caption-size · --typo-label-size",default:"—",description:"리드·캡션·라벨 크기"},{name:"--typo-mark-bg",default:"rgba(250, 219, 20, 0.35)",description:"형광펜 배경"},{name:"--typo-sub-sup-size · --typo-sub-offset · --typo-sup-offset",default:"0.75em · -0.25em · -0.5em",description:"아래·위첨자 크기·오프셋"},{name:"--typo-small-size",default:"var(--text-size-sm)",description:"small 태그 보조 텍스트 크기"},{name:"--typo-pre-padding · --typo-pre-radius",default:"var(--space-md) · var(--radius-md)",description:"코드 블록"}],je=[{title:"API · TypoTitle Props",tables:[{columns:Me,rows:He,codeColumn:"name"}]},{title:"API · TypoText Props",tables:[{columns:qe,rows:Ie,codeColumn:"name"}]},{title:"API · TypoTitle Slots",tables:[{columns:Ue,rows:Ke,codeColumn:"name"}]},{title:"API · TypoText Slots",tables:[{columns:Oe,rows:$e,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Ge,rows:Ne,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:We,rows:Xe,codeColumn:"name"}]}],Ye={title:"Components/기본 요소/TypoTitle",id:"components-typo-title",component:e,tags:["autodocs"],argTypes:{level:{control:"select",options:["1","2","3","4","5"],type:{name:"enum",summary:"'1' | '2' | '3' | '4' | '5' | '1' | '2' | '3' | '4' | '5'"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},label:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:je}},o={args:{level:1,color:"값",label:"라벨"},render:t=>({components:{TypoTitle:e},setup(){return{args:t}},template:'<TypoTitle v-bind="args" />'})},a={name:"제목",parameters:{demoPreview:{stack:!0},docs:{description:{story:"typo_title-1 ~ typo_title-5 클래스로 5단계 제목 스케일을 적용합니다. 시맨틱 heading 태그와 함께 사용합니다."},source:{code:`<script setup>
import TypoTitle from '@uxkm/ui/components/TypoTitle.vue';
<\/script>

<template>
  <div class="typo_stack-lg">
    <TypoTitle :level="1" label="h1. 제목 레벨 1" />
    <TypoTitle :level="2" label="h2. 제목 레벨 2" />
    <TypoTitle :level="3" label="h3. 제목 레벨 3" />
    <TypoTitle :level="4" label="h4. 제목 레벨 4" />
    <TypoTitle :level="5" label="h5. 제목 레벨 5" />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<div class="typo_stack-lg">
      <TypoTitle :level="1" label="h1. 제목 레벨 1" />
      <TypoTitle :level="2" label="h2. 제목 레벨 2" />
      <TypoTitle :level="3" label="h3. 제목 레벨 3" />
      <TypoTitle :level="4" label="h4. 제목 레벨 4" />
      <TypoTitle :level="5" label="h5. 제목 레벨 5" />
    </div>`})},C={name:"본문",parameters:{demoPreview:{stack:!0},docs:{description:{story:"기본 본문은 별도 클래스 없이 p 태그를 사용합니다. 단락 간격이 필요하면 typo_paragraph를 사용합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <p>
    기본 본문 텍스트입니다. 인라인으로 <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
    </p>
    <div>
      <TypoText variant="paragraph" label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다." />
      <TypoText variant="paragraph" label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다." />
    </div>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<p>
      기본 본문 텍스트입니다. 인라인으로 <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
    </p>

    <div>
      <TypoText variant="paragraph" label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다." />
      <TypoText variant="paragraph" label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다." />
    </div>`})},p={name:"색상 타입",parameters:{demoPreview:{stack:!0},docs:{description:{story:"color_muted, color_success 등 공통 색상 클래스를 적용합니다. 버튼·배지·알림 등 모든 컴포넌트에서 동일한 클래스명을 사용합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <TypoText color="default" label="기본 텍스트 (Default)" />
  <TypoText color="muted" label="보조 텍스트 (Muted)" />
  <TypoText color="success" label="성공 메시지 (Success)" />
  <TypoText color="warning" label="주의 메시지 (Warning)" />
  <TypoText color="danger" label="오류 메시지 (Danger)" />
  <TypoText color="primary" label="강조 텍스트 (Primary)" />
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<TypoText color="default" label="기본 텍스트 (Default)" />
    <TypoText color="muted" label="보조 텍스트 (Muted)" />
    <TypoText color="success" label="성공 메시지 (Success)" />
    <TypoText color="warning" label="주의 메시지 (Warning)" />
    <TypoText color="danger" label="오류 메시지 (Danger)" />
    <TypoText color="primary" label="강조 텍스트 (Primary)" />`})},r={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"base(0.875rem)는 클래스 없이 기본 적용됩니다. xs, sm, lg, xl만 size_* 클래스를 사용합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <TypoText size="xs" label="Extra Small — 0.75rem" />
  <TypoText size="sm" label="Small — 0.8125rem" />
  <TypoText label="Base — 0.875rem (기본)" />
  <TypoText size="lg" label="Large — 1rem" />
  <TypoText size="xl" label="Extra Large — 1.125rem" />
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<TypoText size="xs" label="Extra Small — 0.75rem" />
    <TypoText size="sm" label="Small — 0.8125rem" />
    <TypoText label="Base — 0.875rem (기본)" />
    <TypoText size="lg" label="Large — 1rem" />
    <TypoText size="xl" label="Extra Large — 1.125rem" />`})},s={name:"텍스트 스타일",parameters:{demoPreview:{stack:!0},docs:{description:{story:"강조, 기울임, 밑줄, 취소선, 형광펜, 인라인 코드 등 인라인 스타일을 조합합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<p>
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
    </p>`})},i={name:"아래첨자 · 위첨자 · 소문자",parameters:{demoPreview:{stack:!0},docs:{description:{story:"sub · sup · small 시맨틱 태그에 typo_sub · typo_sup · typo_small 클래스를 적용합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
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
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<p>
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
    </p>`})},T={name:"말줄임",parameters:{demoPreview:{stack:!0},docs:{description:{story:"text_ellipsis로 1줄, text_ellipsis-2·3으로 여러 줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <div style="max-width: 320px; width: 100%;">
    <TypoText :ellipsis="1" label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet." />
    <TypoText :ellipsis="2" label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다." />
    <TypoText :ellipsis="3" label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요." />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<div style="max-width: 320px; width: 100%;">
      <TypoText :ellipsis="1" label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet." />
      <TypoText :ellipsis="2" label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다." />
      <TypoText :ellipsis="3" label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요." />
    </div>`})},c={name:"인용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"blockquote 태그에 typo_blockquote 클래스를 적용합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <TypoText
  variant="blockquote"
  color="muted"
  cite="https://example.com"
  label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
  />
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<TypoText
      variant="blockquote"
      color="muted"
      cite="https://example.com"
      label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
    />`})},B={name:"목록",parameters:{demoPreview:{stack:!0},docs:{description:{story:"본문 prose 목록은 ul · ol에 typo_list · typo_list-ordered 클래스를 적용합니다. UI 리스트(아바타, 인터랙티브 항목 등)는 List 컴포넌트를 사용하세요."},source:{code:`<template>
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
    용어 설명·구조화된 목록은 <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
  </p>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<ul class="typo_list">
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
      용어 설명·구조화된 목록은 <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
    </p>`})},m={name:"링크",parameters:{demoPreview:{stack:!0},docs:{description:{story:"본문 내 하이퍼링크에 typo_link 클래스를 사용합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <TypoText variant="paragraph">
    자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.
      <TypoText tag="span" color="muted" label="또는" />
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
      </TypoText>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.
      <TypoText tag="span" color="muted" label="또는" />
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>`})},y={name:"리드 · 캡션 · 레이블",parameters:{demoPreview:{stack:!0},docs:{description:{story:"typo_lead · typo_caption · typo_label · typo_overline로 보조 텍스트 위계를 표현합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
import TypoTitle from '@uxkm/ui/components/TypoTitle.vue';
<\/script>

<template>
  <div style="max-width: 32rem; width: 100%;">
    <div class="typo_stack-lg">
      <TypoText variant="overline" label="가이드 소개" />
      <TypoTitle :level="3" label="HTML Components" />
      <TypoText variant="lead" label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다." />
      <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
    </div>
    <div>
      <TypoText variant="label" html-for="demo-email" label="이메일" />
      <TypoText variant="caption" style="margin-top: 0.25rem;" label="가입 시 사용한 이메일 주소를 입력하세요." />
    </div>
  </div>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<div style="max-width: 32rem; width: 100%;">
      <div class="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle :level="3" label="HTML Components" />
        <TypoText variant="lead" label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다." />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>

      <div>
        <TypoText variant="label" html-for="demo-email" label="이메일" />
        <TypoText variant="caption" style="margin-top: 0.25rem;" label="가입 시 사용한 이메일 주소를 입력하세요." />
      </div>
    </div>`})},d={name:"제목 색상",parameters:{demoPreview:{stack:!0},docs:{description:{story:"제목에도 공통 color_* 클래스를 조합할 수 있습니다."},source:{code:`<script setup>
import TypoTitle from '@uxkm/ui/components/TypoTitle.vue';
<\/script>

<template>
  <TypoTitle :level="3" color="primary" label="Primary 제목" />
  <TypoTitle :level="3" color="success" label="Success 제목" />
  <TypoTitle :level="3" color="danger" label="Danger 제목" />
  <TypoTitle :level="3" color="muted" label="Muted 제목" />
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<TypoTitle :level="3" color="primary" label="Primary 제목" />
    <TypoTitle :level="3" color="success" label="Success 제목" />
    <TypoTitle :level="3" color="danger" label="Danger 제목" />
    <TypoTitle :level="3" color="muted" label="Muted 제목" />`})},D={name:"키보드 · 코드 블록",parameters:{demoPreview:{stack:!0},docs:{description:{story:"typo_kbd · typo_pre · typo_code로 단축키와 코드를 표시합니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <p>
    저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> + <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요.
        검색은 <TypoText tag="kbd" variant="kbd" label="Ctrl" /> + <TypoText tag="kbd" variant="kbd" label="K" />입니다.
          </p>
          <TypoText variant="pre">
            <code>{{ buttonMarkupExample }}</code>
          </TypoText>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<p>
      저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> + <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요.
      검색은 <TypoText tag="kbd" variant="kbd" label="Ctrl" /> + <TypoText tag="kbd" variant="kbd" label="K" />입니다.
    </p>

    <TypoText variant="pre"><code>{{ buttonMarkupExample }}</code></TypoText>`})},x={name:"중첩 목록",parameters:{demoPreview:{stack:!0},docs:{description:{story:"typo_list · typo_list-ordered에 하위 ul · ol을 중첩할 수 있습니다."},source:{code:`<template>
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
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<ul class="typo_list">
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
    </ul>`})},A={name:"제목 + 본문 조합",parameters:{demoPreview:{stack:!0},docs:{description:{story:"typo_stack, typo_stack-lg로 제목과 본문을 묶어 간격을 맞춥니다."},source:{code:`<script setup>
import TypoText from '@uxkm/ui/components/TypoText.vue';
import TypoTitle from '@uxkm/ui/components/TypoTitle.vue';
<\/script>

<template>
  <div class="typo_stack-lg" style="max-width: 28rem;">
    <TypoTitle :level="3" label="섹션 제목" />
    <TypoText variant="paragraph" label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다." />
    <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
  </div>
  <div class="typo_stack" style="max-width: 28rem;">
    <TypoTitle :level="4" label="작은 스택" />
    <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
  </div>
</template>`,language:"vue"}}},render:()=>({components:{TypoTitle:e,TypoText:u},template:`<div class="typo_stack-lg" style="max-width: 28rem;">
      <TypoTitle :level="3" label="섹션 제목" />
      <TypoText variant="paragraph" label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다." />
      <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
    </div>

    <div class="typo_stack" style="max-width: 28rem;">
      <TypoTitle :level="4" label="작은 스택" />
      <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
    </div>`})};var E,k,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: "값",
    label: "라벨"
  },
  render: args => ({
    components: {
      TypoTitle
    },
    setup() {
      return {
        args
      };
    },
    template: '<TypoTitle v-bind="args" />'
  })
}`,...(_=(k=o.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var f,h,F;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "제목",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "typo_title-1 ~ typo_title-5 클래스로 5단계 제목 스케일을 적용합니다. 시맨틱 heading 태그와 함께 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoTitle from '@uxkm/ui/components/TypoTitle.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"typo_stack-lg\\">\\n    <TypoTitle :level=\\"1\\" label=\\"h1. 제목 레벨 1\\" />\\n    <TypoTitle :level=\\"2\\" label=\\"h2. 제목 레벨 2\\" />\\n    <TypoTitle :level=\\"3\\" label=\\"h3. 제목 레벨 3\\" />\\n    <TypoTitle :level=\\"4\\" label=\\"h4. 제목 레벨 4\\" />\\n    <TypoTitle :level=\\"5\\" label=\\"h5. 제목 레벨 5\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<div class="typo_stack-lg">
      <TypoTitle :level="1" label="h1. 제목 레벨 1" />
      <TypoTitle :level="2" label="h2. 제목 레벨 2" />
      <TypoTitle :level="3" label="h3. 제목 레벨 3" />
      <TypoTitle :level="4" label="h4. 제목 레벨 4" />
      <TypoTitle :level="5" label="h5. 제목 레벨 5" />
    </div>\`
  })
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var S,w,P;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "본문",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "기본 본문은 별도 클래스 없이 p 태그를 사용합니다. 단락 간격이 필요하면 typo_paragraph를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    기본 본문 텍스트입니다. 인라인으로 <TypoText tag=\\"span\\" color=\\"muted\\" label=\\"보조 설명\\" />을 함께 쓸 수 있습니다.\\n    </p>\\n    <div>\\n      <TypoText variant=\\"paragraph\\" label=\\"typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다.\\" />\\n      <TypoText variant=\\"paragraph\\" label=\\"두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다.\\" />\\n    </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<p>
      기본 본문 텍스트입니다. 인라인으로 <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
    </p>

    <div>
      <TypoText variant="paragraph" label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다." />
      <TypoText variant="paragraph" label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다." />
    </div>\`
  })
}`,...(P=(w=C.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,L,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "색상 타입",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "color_muted, color_success 등 공통 색상 클래스를 적용합니다. 버튼·배지·알림 등 모든 컴포넌트에서 동일한 클래스명을 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <TypoText color=\\"default\\" label=\\"기본 텍스트 (Default)\\" />\\n  <TypoText color=\\"muted\\" label=\\"보조 텍스트 (Muted)\\" />\\n  <TypoText color=\\"success\\" label=\\"성공 메시지 (Success)\\" />\\n  <TypoText color=\\"warning\\" label=\\"주의 메시지 (Warning)\\" />\\n  <TypoText color=\\"danger\\" label=\\"오류 메시지 (Danger)\\" />\\n  <TypoText color=\\"primary\\" label=\\"강조 텍스트 (Primary)\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<TypoText color="default" label="기본 텍스트 (Default)" />
    <TypoText color="muted" label="보조 텍스트 (Muted)" />
    <TypoText color="success" label="성공 메시지 (Success)" />
    <TypoText color="warning" label="주의 메시지 (Warning)" />
    <TypoText color="danger" label="오류 메시지 (Danger)" />
    <TypoText color="primary" label="강조 텍스트 (Primary)" />\`
  })
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,q,I;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "base(0.875rem)는 클래스 없이 기본 적용됩니다. xs, sm, lg, xl만 size_* 클래스를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <TypoText size=\\"xs\\" label=\\"Extra Small — 0.75rem\\" />\\n  <TypoText size=\\"sm\\" label=\\"Small — 0.8125rem\\" />\\n  <TypoText label=\\"Base — 0.875rem (기본)\\" />\\n  <TypoText size=\\"lg\\" label=\\"Large — 1rem\\" />\\n  <TypoText size=\\"xl\\" label=\\"Extra Large — 1.125rem\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<TypoText size="xs" label="Extra Small — 0.75rem" />
    <TypoText size="sm" label="Small — 0.8125rem" />
    <TypoText label="Base — 0.875rem (기본)" />
    <TypoText size="lg" label="Large — 1rem" />
    <TypoText size="xl" label="Extra Large — 1.125rem" />\`
  })
}`,...(I=(q=r.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var U,K,O;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "텍스트 스타일",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "강조, 기울임, 밑줄, 취소선, 형광펜, 인라인 코드 등 인라인 스타일을 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    <TypoText variant=\\"strong\\" label=\\"굵은 텍스트\\" />와\\n      <TypoText variant=\\"italic\\" label=\\"기울임 텍스트\\" />,\\n        <TypoText variant=\\"underline\\" label=\\"밑줄 텍스트\\" />,\\n          <TypoText variant=\\"delete\\" label=\\"취소선 텍스트\\" />를 함께 사용할 수 있습니다.\\n          </p>\\n          <p>\\n            <TypoText variant=\\"mark\\" label=\\"형광펜 강조\\" />와\\n              <TypoText variant=\\"code\\" label=\\"inline code\\" /> 표현도 지원합니다.\\n              </p>\\n              <p class=\\"color_muted\\">\\n                조합 예시:\\n                <TypoText variant=\\"strong\\" color=\\"danger\\" label=\\"중요 경고\\" />,\\n                  <TypoText variant=\\"italic\\" color=\\"primary\\" label=\\"강조 설명\\" />,\\n                    <TypoText variant=\\"delete\\" color=\\"muted\\" label=\\"삭제된 항목\\" />\\n                  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<p>
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
    </p>\`
  })
}`,...(O=(K=s.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var $,G,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "아래첨자 · 위첨자 · 소문자",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "sub · sup · small 시맨틱 태그에 typo_sub · typo_sup · typo_small 클래스를 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    화학식 H<TypoText variant=\\"sub\\" label=\\"2\\" />O,\\n      수식 x<TypoText variant=\\"sup\\" label=\\"2\\" /> + y<TypoText variant=\\"sup\\" label=\\"2\\" /> = z<TypoText variant=\\"sup\\" label=\\"2\\" />처럼\\n            아래·위첨자를 표현합니다.\\n          </p>\\n          <p>\\n            각주<TypoText variant=\\"sup\\" label=\\"1\\" />나\\n              제곱미터 m<TypoText variant=\\"sup\\" label=\\"2\\" /> 단위에도 활용합니다.\\n              </p>\\n              <p>\\n                <TypoText variant=\\"small\\" label=\\"※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다.\\" />\\n              </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<p>
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
    </p>\`
  })
}`,...(N=(G=i.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var W,X,j;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "말줄임",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "text_ellipsis로 1줄, text_ellipsis-2·3으로 여러 줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <div style=\\"max-width: 320px; width: 100%;\\">\\n    <TypoText :ellipsis=\\"1\\" label=\\"1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet.\\" />\\n    <TypoText :ellipsis=\\"2\\" label=\\"2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다.\\" />\\n    <TypoText :ellipsis=\\"3\\" label=\\"3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요.\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<div style="max-width: 320px; width: 100%;">
      <TypoText :ellipsis="1" label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet." />
      <TypoText :ellipsis="2" label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다." />
      <TypoText :ellipsis="3" label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요." />
    </div>\`
  })
}`,...(j=(X=T.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var R,V,J;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "인용",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "blockquote 태그에 typo_blockquote 클래스를 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <TypoText\\n  variant=\\"blockquote\\"\\n  color=\\"muted\\"\\n  cite=\\"https://example.com\\"\\n  label=\\"좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요.\\"\\n  />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<TypoText
      variant="blockquote"
      color="muted"
      cite="https://example.com"
      label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
    />\`
  })
}`,...(J=(V=c.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Q,Y,Z;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "목록",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "본문 prose 목록은 ul · ol에 typo_list · typo_list-ordered 클래스를 적용합니다. UI 리스트(아바타, 인터랙티브 항목 등)는 List 컴포넌트를 사용하세요."
      },
      source: {
        code: "<template>\\n  <ul class=\\"typo_list\\">\\n    <li>디자인 토큰 정의</li>\\n    <li>컴포넌트 문서화</li>\\n    <li>접근성 검토</li>\\n  </ul>\\n  <ol class=\\"typo_list-ordered\\">\\n    <li>요구사항 분석</li>\\n    <li>와이어프레임 작성</li>\\n    <li>프로토타입 검증</li>\\n  </ol>\\n  <p class=\\"form_field-hint\\">\\n    용어 설명·구조화된 목록은 <a href=\\"list.html#definition-heading\\">List — 정의 목록</a>을 참고하세요.\\n  </p>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<ul class="typo_list">
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
      용어 설명·구조화된 목록은 <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
    </p>\`
  })
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ue,te;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "링크",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "본문 내 하이퍼링크에 typo_link 클래스를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <TypoText variant=\\"paragraph\\">\\n    자세한 내용은 <TypoText tag=\\"a\\" variant=\\"link\\" href=\\"#\\" label=\\"가이드 문서\\" />를 참고하세요.\\n      <TypoText tag=\\"span\\" color=\\"muted\\" label=\\"또는\\" />\\n      <TypoText tag=\\"a\\" variant=\\"link\\" href=\\"#\\" size=\\"sm\\" label=\\"작은 링크\\" />로 이동할 수 있습니다.\\n      </TypoText>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.
      <TypoText tag="span" color="muted" label="또는" />
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>\`
  })
}`,...(te=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:te.source}}};var ne,le,oe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "리드 · 캡션 · 레이블",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "typo_lead · typo_caption · typo_label · typo_overline로 보조 텍스트 위계를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\nimport TypoTitle from '@uxkm/ui/components/TypoTitle.vue';\\n<\/script>\\n\\n<template>\\n  <div style=\\"max-width: 32rem; width: 100%;\\">\\n    <div class=\\"typo_stack-lg\\">\\n      <TypoText variant=\\"overline\\" label=\\"가이드 소개\\" />\\n      <TypoTitle :level=\\"3\\" label=\\"HTML Components\\" />\\n      <TypoText variant=\\"lead\\" label=\\"순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다.\\" />\\n      <TypoText variant=\\"caption\\" label=\\"마지막 업데이트: 2026-06-24\\" />\\n    </div>\\n    <div>\\n      <TypoText variant=\\"label\\" html-for=\\"demo-email\\" label=\\"이메일\\" />\\n      <TypoText variant=\\"caption\\" style=\\"margin-top: 0.25rem;\\" label=\\"가입 시 사용한 이메일 주소를 입력하세요.\\" />\\n    </div>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<div style="max-width: 32rem; width: 100%;">
      <div class="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle :level="3" label="HTML Components" />
        <TypoText variant="lead" label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다." />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>

      <div>
        <TypoText variant="label" html-for="demo-email" label="이메일" />
        <TypoText variant="caption" style="margin-top: 0.25rem;" label="가입 시 사용한 이메일 주소를 입력하세요." />
      </div>
    </div>\`
  })
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ae,Ce,pe;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "제목 색상",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "제목에도 공통 color_* 클래스를 조합할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport TypoTitle from '@uxkm/ui/components/TypoTitle.vue';\\n<\/script>\\n\\n<template>\\n  <TypoTitle :level=\\"3\\" color=\\"primary\\" label=\\"Primary 제목\\" />\\n  <TypoTitle :level=\\"3\\" color=\\"success\\" label=\\"Success 제목\\" />\\n  <TypoTitle :level=\\"3\\" color=\\"danger\\" label=\\"Danger 제목\\" />\\n  <TypoTitle :level=\\"3\\" color=\\"muted\\" label=\\"Muted 제목\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<TypoTitle :level="3" color="primary" label="Primary 제목" />
    <TypoTitle :level="3" color="success" label="Success 제목" />
    <TypoTitle :level="3" color="danger" label="Danger 제목" />
    <TypoTitle :level="3" color="muted" label="Muted 제목" />\`
  })
}`,...(pe=(Ce=d.parameters)==null?void 0:Ce.docs)==null?void 0:pe.source}}};var re,se,ie;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "키보드 · 코드 블록",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "typo_kbd · typo_pre · typo_code로 단축키와 코드를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\n<\/script>\\n\\n<template>\\n  <p>\\n    저장하려면 <TypoText tag=\\"kbd\\" variant=\\"kbd\\" label=\\"⌘\\" /> + <TypoText tag=\\"kbd\\" variant=\\"kbd\\" label=\\"S\\" />를 누르세요.\\n        검색은 <TypoText tag=\\"kbd\\" variant=\\"kbd\\" label=\\"Ctrl\\" /> + <TypoText tag=\\"kbd\\" variant=\\"kbd\\" label=\\"K\\" />입니다.\\n          </p>\\n          <TypoText variant=\\"pre\\">\\n            <code>{{ buttonMarkupExample }}</code>\\n          </TypoText>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<p>
      저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> + <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요.
      검색은 <TypoText tag="kbd" variant="kbd" label="Ctrl" /> + <TypoText tag="kbd" variant="kbd" label="K" />입니다.
    </p>

    <TypoText variant="pre"><code>{{ buttonMarkupExample }}</code></TypoText>\`
  })
}`,...(ie=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var Te,ce,Be;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "중첩 목록",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "typo_list · typo_list-ordered에 하위 ul · ol을 중첩할 수 있습니다."
      },
      source: {
        code: "<template>\\n  <ul class=\\"typo_list\\">\\n    <li>레이아웃\\n      <ul class=\\"typo_list\\">\\n        <li>Container</li>\\n        <li>Grid</li>\\n      </ul>\\n    </li>\\n    <li>기본 요소\\n      <ul class=\\"typo_list\\">\\n        <li>Button</li>\\n        <li>Typography</li>\\n      </ul>\\n    </li>\\n  </ul>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<ul class="typo_list">
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
    </ul>\`
  })
}`,...(Be=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:Be.source}}};var me,ye,de;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "제목 + 본문 조합",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "typo_stack, typo_stack-lg로 제목과 본문을 묶어 간격을 맞춥니다."
      },
      source: {
        code: "<script setup>\\nimport TypoText from '@uxkm/ui/components/TypoText.vue';\\nimport TypoTitle from '@uxkm/ui/components/TypoTitle.vue';\\n<\/script>\\n\\n<template>\\n  <div class=\\"typo_stack-lg\\" style=\\"max-width: 28rem;\\">\\n    <TypoTitle :level=\\"3\\" label=\\"섹션 제목\\" />\\n    <TypoText variant=\\"paragraph\\" label=\\"typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다.\\" />\\n    <TypoText tag=\\"p\\" color=\\"muted\\" size=\\"sm\\" label=\\"마지막 업데이트: 2026-06-24\\" />\\n  </div>\\n  <div class=\\"typo_stack\\" style=\\"max-width: 28rem;\\">\\n    <TypoTitle :level=\\"4\\" label=\\"작은 스택\\" />\\n    <TypoText tag=\\"p\\" color=\\"muted\\" label=\\"typo_stack은 좁은 간격으로 제목·설명을 묶습니다.\\" />\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TypoTitle,
      TypoText
    },
    template: \`<div class="typo_stack-lg" style="max-width: 28rem;">
      <TypoTitle :level="3" label="섹션 제목" />
      <TypoText variant="paragraph" label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다." />
      <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
    </div>

    <div class="typo_stack" style="max-width: 28rem;">
      <TypoTitle :level="4" label="작은 스택" />
      <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
    </div>\`
  })
}`,...(de=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:de.source}}};const Ze=["Playground","Title","Text","Color","Size","Style","SubSupSmall","Ellipsis","Blockquote","List","Link","Lead","TitleColor","Kbd","NestedList","Stack"];export{c as Blockquote,p as Color,T as Ellipsis,D as Kbd,y as Lead,m as Link,B as List,x as NestedList,o as Playground,r as Size,A as Stack,s as Style,i as SubSupSmall,C as Text,a as Title,d as TitleColor,Ze as __namedExportsOrder,Ye as default};

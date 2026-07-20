import{Z as t,$ as e}from"./iframe-CAswI7Qe.js";import{w as s,s as Bt}from"./story-renders-DjeoaiCa.js";import{_ as A}from"./Avatar-DQfzxAyR.js";import{a as _t}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const Lt=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],At=[{name:"bordered",type:"boolean",default:"false",description:"테두리 (list_bordered)"},{name:"split",type:"boolean",default:"false",description:"항목 구분선 (list_divider)"},{name:"block",type:"boolean",default:"false",description:"부모 너비 100% (list_block, inline 레이아웃에서 auto 너비 덮어씀)"},{name:"size",type:"'md' | 'compact'",default:"md",description:"compact는 list_compact"},{name:"variant",type:"'default' | 'bullet' | 'ordered' | 'definition'",default:"default",description:"목록 유형 — bullet · ordered · definition 스킨 클래스 자동 적용"},{name:"tag",type:"'ul' | 'ol' | 'dl' | 'div'",default:"variant 기준",description:'루트 태그 — 미지정 시 variant에 따라 ul · ol · dl 결정, div는 role="list"'},{name:"layout",type:"'block' | 'inline'",default:"block",description:"block은 전체 너비 세로 배치, inline은 너비 auto + 제목·내용 가로 배치 (list_inline)"},{name:"inlineLabelWidth",type:"string",default:"—",description:'인라인 정의 목록 dt 열 너비 (layout="inline"일 때, --list-inline-label-width)'},{name:"inlineGap",type:"string",default:"—",description:'인라인 정의 목록 dt · dd 열 간격 (layout="inline"일 때, --list-inline-gap)'},{name:"descAlign",type:"'left' | 'right'",default:"left",description:'정의 목록 dd 텍스트 정렬 (variant="definition"일 때, right는 list_desc-right)'}],Dt=Lt,ft=[{name:"title",type:"string",default:"—",description:"항목 제목 (list_title)"},{name:"description",type:"string",default:"—",description:"설명 (list_desc)"},{name:"meta",type:"string",default:"—",description:"보조 메타 (list_meta)"},{name:"tag",type:"'auto' | 'li' | 'dt' | 'dd'",default:"auto",description:"항목 태그 — auto는 ul/ol→li, div→div+role=listitem, dl+title·description→dt·dd"}],D=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],vt=[{name:"default",description:"ListItem 자식"}],bt=[{name:"prefix",description:"앞쪽 아바타·아이콘 등"},{name:"default",description:"본문 (title·description 대체)"},{name:"extra",description:"우측 보조 텍스트 (list_extra)"},{name:"actions",description:"우측 액션 (list_action)"}],gt=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ht=[{name:"list",description:"리스트 루트"},{name:"list_bordered · list_divider · list_compact",description:"스타일 변형"},{name:"list_bullet · list_bullet-circle · list_bullet-square",description:"불릿 목록 (ul)"},{name:"list_ordered · list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman",description:"번호 목록 (ol) — 소문자·대문자 알파벳·로마 숫자"},{name:"list_ordered-outline · list_ordered-dash",description:"계층 번호 — 뎁스별 1.1 · 1-1 형식 (중첩 ol에 동일 클래스 적용)"},{name:"list_ordered-depth",description:"뎁스별 번호 형식 자동 전환 (1 → a → i → 1 …)"},{name:"list_definition",description:"정의 목록 (dl) — dt · dd 용어-설명 쌍"},{name:"list_inline",description:'인라인 배치 — width auto, 제목·내용 가로 (layout="inline")'},{name:"list_block",description:"부모 너비 100% (block prop)"},{name:"list_desc-right",description:'정의 목록 dd 우측 정렬 (descAlign="right")'},{name:"list_item",description:"항목 (li · div[role=listitem])"},{name:"list_content · list_title · list_desc · list_meta",description:"항목 콘텐츠 파트"},{name:"list_extra · list_action",description:"우측 영역"},{name:"list_interactive",description:"클릭 가능 항목"},{name:"list_link",description:"항목 링크·버튼 — data-ripple 로 파장"},..._t],kt=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],yt=[{name:"--list-gap",default:"var(--space-xs)",description:"항목 간격"},{name:"--list-item-padding-y · --list-item-padding-x",default:"0.65rem · 1rem",description:"항목 패딩"},{name:"--list-title-size · --list-desc-size · --list-meta-size",default:"—",description:"텍스트 크기"},{name:"--list-inline-label-width · --list-inline-gap",default:"8rem · var(--space-md)",description:"인라인 정의 목록 열 너비 · 열 간격"}],Et=[{title:"API · List Props",tables:[{columns:Lt,rows:At,codeColumn:"name"}]},{title:"API · ListItem Props",tables:[{columns:Dt,rows:ft,codeColumn:"name"}]},{title:"API · List Slots",tables:[{columns:D,rows:vt,codeColumn:"name"}]},{title:"API · ListItem Slots",tables:[{columns:D,rows:bt,codeColumn:"name"}]},{title:"클래스 · 속성",description:"List · ListItem이 렌더하는 OOCSS 클래스입니다. class prop으로 스킨 클래스를 조합합니다.",tables:[{columns:gt,rows:ht,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:kt,rows:yt,codeColumn:"name"}]}],Pt={title:"Components/데이터 표시/List",id:"components-list",component:e,subcomponents:{ListItem:t},tags:["autodocs"],argTypes:{bordered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},split:{control:"boolean",type:{name:"boolean",summary:"boolean"}},block:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["md","compact"],type:{name:"enum",summary:"'md' | 'compact'"}},variant:{control:"select",options:["default","bullet","ordered","definition"],type:{name:"enum",summary:"'default' | 'bullet' | 'ordered' | 'definition'"}},tag:{control:"select",options:["ul","ol","dl","div"],type:{name:"enum",summary:"'ul' | 'ol' | 'dl' | 'div'"}},layout:{control:"select",options:["block","inline"],type:{name:"enum",summary:"'block' | 'inline'"}},inlineLabelWidth:{control:"select",options:["sm","md","lg","8rem","10rem","12rem"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | '8rem' | '10rem' | '12rem'"}},inlineGap:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},descAlign:{control:"select",options:["left","right"],type:{name:"enum",summary:"'left' | 'right'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Et}},i={parameters:{controls:{disable:!1}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:(xt,It)=>({components:{List:e,ListItem:t},setup(){return{args:Bt(It)}},template:`<List v-bind="args">
      <ListItem title="항목 1" description="설명" />
      <ListItem title="항목 2" description="설명" />
    </List>`})},n={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"list_title · list_meta · list_desc로 항목 내용을 구성합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List>
    <ListItem title="홍길동" meta="프론트엔드 개발자">
      <template #prefix>
        <Avatar color="primary" initials="홍" aria-hidden />
      </template>
    </ListItem>
    <ListItem title="김철수" meta="백엔드 개발자">
      <template #prefix>
        <Avatar color="success" initials="김" aria-hidden />
      </template>
    </ListItem>
    <ListItem title="이영희" meta="UI/UX 디자이너">
      <template #prefix>
        <Avatar color="warning" initials="이" aria-hidden />
      </template>
    </ListItem>
  </List>
</template>`,language:"vue"}}},args:{size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{Avatar:A,List:e,ListItem:t},template:`        <List>
        <ListItem title="홍길동" meta="프론트엔드 개발자">
        <template #prefix>
        <Avatar color="primary" initials="홍" aria-hidden />
        </template>
        </ListItem>
        <ListItem title="김철수" meta="백엔드 개발자">
        <template #prefix>
        <Avatar color="success" initials="김" aria-hidden />
        </template>
        </ListItem>
        <ListItem title="이영희" meta="UI/UX 디자이너">
        <template #prefix>
        <Avatar color="warning" initials="이" aria-hidden />
        </template>
        </ListItem>
        </List>`}))},a={name:"불릿",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"class에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet">
    <ListItem>디자인 토큰 정의</ListItem>
    <ListItem>컴포넌트 문서화</ListItem>
    <ListItem>접근성 검토</ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List class="list_bullet">
        <ListItem>디자인 토큰 정의</ListItem>
        <ListItem>컴포넌트 문서화</ListItem>
        <ListItem>접근성 검토</ListItem>
      </List>`}))},u={name:"불릿 · 본문",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"title · description prop으로 제목·설명을 함께 표시합니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet">
    <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
    <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
    <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List class="list_bullet">
        <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
        <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
        <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
      </List>`}))},l={name:"불릿 변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"circle · square 마커와 중첩 목록을 지원합니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet list_bullet-circle">
    <ListItem>원형 마커 항목 A</ListItem>
    <ListItem>원형 마커 항목 B</ListItem>
  </List>
  <List class="list_bullet list_bullet-square">
    <ListItem>사각 마커 항목 A</ListItem>
    <ListItem>사각 마커 항목 B</ListItem>
  </List>
  <List class="list_bullet">
    <ListItem>
      레이아웃
      <List class="list_bullet">
        <ListItem>Container</ListItem>
        <ListItem>Grid</ListItem>
      </List>
    </ListItem>
    <ListItem>
      기본 요소
      <List class="list_bullet">
        <ListItem>Button</ListItem>
        <ListItem>Typography</ListItem>
      </List>
    </ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List class="list_bullet list_bullet-circle">
        <ListItem>원형 마커 항목 A</ListItem>
        <ListItem>원형 마커 항목 B</ListItem>
      </List>
      <List class="list_bullet list_bullet-square">
        <ListItem>사각 마커 항목 A</ListItem>
        <ListItem>사각 마커 항목 B</ListItem>
      </List>
      <List class="list_bullet">
        <ListItem>
          레이아웃
          <List class="list_bullet">
            <ListItem>Container</ListItem>
            <ListItem>Grid</ListItem>
          </List>
        </ListItem>
        <ListItem>
          기본 요소
          <List class="list_bullet">
            <ListItem>Button</ListItem>
            <ListItem>Typography</ListItem>
          </List>
        </ListItem>
      </List>`}))},r={name:"번호",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tag=&quot;ol&quot;과 list_ordered 클래스로 순서 목록을 만듭니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List tag="ol" class="list_ordered">
    <ListItem>요구사항 분석</ListItem>
    <ListItem>와이어프레임 작성</ListItem>
    <ListItem>프로토타입 검증</ListItem>
    <ListItem>개발 및 배포</ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List tag="ol" class="list_ordered">
        <ListItem>요구사항 분석</ListItem>
        <ListItem>와이어프레임 작성</ListItem>
        <ListItem>프로토타입 검증</ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>`}))},o={name:"번호 변형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List tag="ol" class="list_ordered list_ordered-alpha">
    <ListItem>첫 번째 옵션</ListItem>
    <ListItem>두 번째 옵션</ListItem>
    <ListItem>세 번째 옵션</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-roman">
    <ListItem>서론</ListItem>
    <ListItem>본론</ListItem>
    <ListItem>결론</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-upper-alpha">
    <ListItem>항목 A</ListItem>
    <ListItem>항목 B</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-upper-roman">
    <ListItem>Chapter I</ListItem>
    <ListItem>Chapter II</ListItem>
  </List>
  <List tag="ol" class="list_ordered">
    <ListItem title="프로젝트 설정" description="저장소 클론 및 의존성 설치" />
    <ListItem title="개발 서버 실행" description="pnpm dev로 로컬 미리보기">
      <List tag="ol" class="list_ordered list_ordered-alpha">
        <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>
        <ListItem>pnpm install 실행</ListItem>
        <ListItem>pnpm dev 실행</ListItem>
      </List>
    </ListItem>
    <ListItem title="빌드" description="pnpm build로 html/ 출력" />
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List tag="ol" class="list_ordered list_ordered-alpha">
        <ListItem>첫 번째 옵션</ListItem>
        <ListItem>두 번째 옵션</ListItem>
        <ListItem>세 번째 옵션</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-roman">
        <ListItem>서론</ListItem>
        <ListItem>본론</ListItem>
        <ListItem>결론</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-upper-alpha">
        <ListItem>항목 A</ListItem>
        <ListItem>항목 B</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-upper-roman">
        <ListItem>Chapter I</ListItem>
        <ListItem>Chapter II</ListItem>
      </List>
      <List tag="ol" class="list_ordered">
        <ListItem title="프로젝트 설정" description="저장소 클론 및 의존성 설치" />
        <ListItem title="개발 서버 실행" description="pnpm dev로 로컬 미리보기">
          <List tag="ol" class="list_ordered list_ordered-alpha">
            <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>
            <ListItem>pnpm install 실행</ListItem>
            <ListItem>pnpm dev 실행</ListItem>
          </List>
        </ListItem>
        <ListItem title="빌드" description="pnpm build로 html/ 출력" />
      </List>`}))},m={name:"번호 · 계층",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List tag="ol" class="list_ordered list_ordered-outline">
    <ListItem>1단계 — 요구사항 정의</ListItem>
    <ListItem>
      설계
      <List tag="ol" class="list_ordered list_ordered-outline">
        <ListItem>정보 구조</ListItem>
        <ListItem>
          UI 설계
          <List tag="ol" class="list_ordered list_ordered-outline">
            <ListItem>와이어프레임</ListItem>
            <ListItem>프로토타입</ListItem>
          </List>
        </ListItem>
      </List>
    </ListItem>
    <ListItem>개발 및 배포</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-dash">
    <ListItem>1단계 — 환경 구성</ListItem>
    <ListItem>
      개발
      <List tag="ol" class="list_ordered list_ordered-dash">
        <ListItem>컴포넌트 구현</ListItem>
        <ListItem>
          문서화
          <List tag="ol" class="list_ordered list_ordered-dash">
            <ListItem>API 표</ListItem>
            <ListItem>데모 예제</ListItem>
          </List>
        </ListItem>
      </List>
    </ListItem>
    <ListItem>QA 및 릴리스</ListItem>
  </List>
  <List tag="ol" class="list_ordered list_ordered-depth">
    <ListItem>레이아웃</ListItem>
    <ListItem>
      기본 요소
      <List tag="ol" class="list_ordered list_ordered-depth">
        <ListItem>Button</ListItem>
        <ListItem>
          Form
          <List tag="ol" class="list_ordered list_ordered-depth">
            <ListItem>Input</ListItem>
            <ListItem>Select</ListItem>
          </List>
        </ListItem>
      </List>
    </ListItem>
    <ListItem>피드백</ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List tag="ol" class="list_ordered list_ordered-outline">
        <ListItem>1단계 — 요구사항 정의</ListItem>
        <ListItem>
          설계
          <List tag="ol" class="list_ordered list_ordered-outline">
            <ListItem>정보 구조</ListItem>
            <ListItem>
              UI 설계
              <List tag="ol" class="list_ordered list_ordered-outline">
                <ListItem>와이어프레임</ListItem>
                <ListItem>프로토타입</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-dash">
        <ListItem>1단계 — 환경 구성</ListItem>
        <ListItem>
          개발
          <List tag="ol" class="list_ordered list_ordered-dash">
            <ListItem>컴포넌트 구현</ListItem>
            <ListItem>
              문서화
              <List tag="ol" class="list_ordered list_ordered-dash">
                <ListItem>API 표</ListItem>
                <ListItem>데모 예제</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>QA 및 릴리스</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-depth">
        <ListItem>레이아웃</ListItem>
        <ListItem>
          기본 요소
          <List tag="ol" class="list_ordered list_ordered-depth">
            <ListItem>Button</ListItem>
            <ListItem>
              Form
              <List tag="ol" class="list_ordered list_ordered-depth">
                <ListItem>Input</ListItem>
                <ListItem>Select</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>피드백</ListItem>
      </List>`}))},d={name:"불릿 · 링크",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"불릿 목록에서도 li 안에 a.list_link를 사용합니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List class="list_bullet">
    <ListItem>
      <a href="components/button.html" class="list_link" data-ripple>
        <span class="list_title">Button</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="components/typography.html" class="list_link" data-ripple>
        <span class="list_title">Typography</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="components/icon.html" class="list_link" data-ripple>
        <span class="list_title">Icon</span>
      </a>
    </ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List class="list_bullet">
        <ListItem>
          <a href="components/button.html" class="list_link" data-ripple>
            <span class="list_title">Button</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/typography.html" class="list_link" data-ripple>
            <span class="list_title">Typography</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/icon.html" class="list_link" data-ripple>
            <span class="list_title">Icon</span>
          </a>
        </ListItem>
      </List>`}))},c={name:"테두리",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"bordered prop으로 각 항목에 테두리를 적용합니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List bordered>
    <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
    <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
    <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List bordered>
        <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
        <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
        <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
      </List>`}))},C={name:"링크",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List split>
    <ListItem>
      <a href="components/button.html" class="list_link" data-ripple>
        <div class="list_content">
          <span class="list_title">대시보드</span>
        </div>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="components/card.html" class="list_link" data-ripple>
        <div class="list_content">
          <span class="list_title">프로젝트</span>
        </div>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </a>
    </ListItem>
    <ListItem>
      <a href="getting-started.html" class="list_link" data-ripple>
        <div class="list_content">
          <span class="list_title">설정</span>
        </div>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </a>
    </ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List split>
        <ListItem>
          <a href="components/button.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">대시보드</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/card.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">프로젝트</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="getting-started.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">설정</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
      </List>`}))},p={name:"버튼",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List bordered>
    <ListItem>
      <button type="button" class="list_link" data-ripple>
        <Avatar color="primary" initials="홍" aria-hidden />
        <span class="list_content">
          <span class="list_title">홍길동</span>
          <span class="list_meta">메시지 보내기</span>
        </span>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </button>
    </ListItem>
    <ListItem>
      <button type="button" class="list_link" data-ripple>
        <Avatar color="success" initials="김" aria-hidden />
        <span class="list_content">
          <span class="list_title">김철수</span>
          <span class="list_meta">메시지 보내기</span>
        </span>
        <span class="list_action color_muted" aria-hidden="true">›</span>
      </button>
    </ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{Avatar:A,List:e,ListItem:t},template:`<List bordered>
        <ListItem>
          <button type="button" class="list_link" data-ripple>
            <Avatar color="primary" initials="홍" aria-hidden />
            <span class="list_content">
              <span class="list_title">홍길동</span>
              <span class="list_meta">메시지 보내기</span>
            </span>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </button>
        </ListItem>
        <ListItem>
          <button type="button" class="list_link" data-ripple>
            <Avatar color="success" initials="김" aria-hidden />
            <span class="list_content">
              <span class="list_title">김철수</span>
              <span class="list_meta">메시지 보내기</span>
            </span>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </button>
        </ListItem>
      </List>`}))},L={name:"카드 혼합",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"list_cards 클래스로 li 안에 card를 배치합니다."},source:{code:`<script setup>
import Avatar from '@uxkm/ui/components/Avatar.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List class="list_cards">
    <ListItem>
      <a href="components/card.html" class="card card_shadow card_clickable card_horizontal">
        <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <div class="card_inner">
          <div class="card_header">
            <div class="card_header-main">
              <h3 class="card_title">프로젝트 Alpha</h3>
              <p class="card_subtitle">진행 중 · 2일 전</p>
            </div>
          </div>
          <div class="card_body">
            디자인 시스템 구축 및 컴포넌트 라이브러리 개발
          </div>
        </div>
      </a>
    </ListItem>
    <ListItem>
      <article class="card card_shadow">
        <div class="card_header">
          <div class="card_header-main">
            <div class="card_header-row">
              <Avatar color="warning" initials="이" aria-hidden />
              <div>
                <h3 class="card_title">이영희</h3>
                <p class="card_subtitle">UI/UX 디자이너</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card_body">
          <p class="list_desc">새 디자인 시안을 공유했습니다.</p>
        </div>
        <div class="card_footer card_footer-between">
          <span class="color_muted size_sm">10분 전</span>
          <a href="#" class="link color_primary size_sm" @click.prevent>보기</a>
        </div>
      </article>
    </ListItem>
    <ListItem>
      <a href="components/list.html" class="card card_accent color_primary card_clickable">
        <div class="card_body">
          <p class="card_title" style="margin-bottom: 0.25rem;">알림</p>
          <p class="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
        </div>
      </a>
    </ListItem>
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{Avatar:A,List:e,ListItem:t},template:`<List class="list_cards">
        <ListItem>
          <a href="components/card.html" class="card card_shadow card_clickable card_horizontal">
            <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div class="card_inner">
              <div class="card_header">
                <div class="card_header-main">
                  <h3 class="card_title">프로젝트 Alpha</h3>
                  <p class="card_subtitle">진행 중 · 2일 전</p>
                </div>
              </div>
              <div class="card_body">
                디자인 시스템 구축 및 컴포넌트 라이브러리 개발
              </div>
            </div>
          </a>
        </ListItem>
        <ListItem>
          <article class="card card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <Avatar color="warning" initials="이" aria-hidden />
                  <div>
                    <h3 class="card_title">이영희</h3>
                    <p class="card_subtitle">UI/UX 디자이너</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_body">
              <p class="list_desc">새 디자인 시안을 공유했습니다.</p>
            </div>
            <div class="card_footer card_footer-between">
              <span class="color_muted size_sm">10분 전</span>
              <a href="#" class="link color_primary size_sm" @click.prevent>보기</a>
            </div>
          </article>
        </ListItem>
        <ListItem>
          <a href="components/list.html" class="card card_accent color_primary card_clickable">
            <div class="card_body">
              <p class="card_title" style="margin-bottom: 0.25rem;">알림</p>
              <p class="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
            </div>
          </a>
        </ListItem>
      </List>`}))},I={name:"정의 목록",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"variant=&quot;definition&quot;으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List variant="definition" style="max-width: 28rem; width: 100%;">
    <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
    <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
    <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List variant="definition" style="max-width: 28rem; width: 100%;">
        <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
        <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
        <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
      </List>`}))},B={name:"정의 목록 · 인라인",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"layout=&quot;inline&quot;으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List variant="definition" layout="inline" inline-label-width="auto" inline-gap="var(--space-md)">
    <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
    <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
    <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List variant="definition" layout="inline" inline-label-width="auto" inline-gap="var(--space-md)">
        <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
        <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
        <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
      </List>`}))},_={name:"정의 목록 · 값 우측 정렬",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"descAlign=&quot;right&quot;로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다."},source:{code:`<script setup>
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
<\/script>

<template>
  <List
  variant="definition"
  layout="inline"
  block
  size="compact"
  desc-align="right"
  inline-label-width="auto"
  inline-gap="1rem"
  >
  <ListItem title="주문번호" description="ORD-2024-0815" />
  <ListItem title="결제금액" description="₩42,000" />
  <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
  </List>
</template>`,language:"vue"}}},args:{bordered:!1,split:!1,block:!1,size:"md",variant:"default",tag:"ul",layout:"block",inlineLabelWidth:"값",inlineGap:"값",descAlign:"left"},render:s(()=>({components:{List:e,ListItem:t},template:`<List
      variant="definition"
      layout="inline"
      block
      size="compact"
      desc-align="right"
      inline-label-width="auto"
      inline-gap="1rem"
      >
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
      </List>`}))};var f,v,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: (_args, context) => ({
    components: {
      List,
      ListItem
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<List v-bind="args">
      <ListItem title="항목 1" description="설명" />
      <ListItem title="항목 2" description="설명" />
    </List>\`
  })
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,h,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "list_title · list_meta · list_desc로 항목 내용을 구성합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List>\\n    <ListItem title=\\"홍길동\\" meta=\\"프론트엔드 개발자\\">\\n      <template #prefix>\\n        <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n      </template>\\n    </ListItem>\\n    <ListItem title=\\"김철수\\" meta=\\"백엔드 개발자\\">\\n      <template #prefix>\\n        <Avatar color=\\"success\\" initials=\\"김\\" aria-hidden />\\n      </template>\\n    </ListItem>\\n    <ListItem title=\\"이영희\\" meta=\\"UI/UX 디자이너\\">\\n      <template #prefix>\\n        <Avatar color=\\"warning\\" initials=\\"이\\" aria-hidden />\\n      </template>\\n    </ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar,
      List,
      ListItem
    },
    template: \`        <List>
        <ListItem title="홍길동" meta="프론트엔드 개발자">
        <template #prefix>
        <Avatar color="primary" initials="홍" aria-hidden />
        </template>
        </ListItem>
        <ListItem title="김철수" meta="백엔드 개발자">
        <template #prefix>
        <Avatar color="success" initials="김" aria-hidden />
        </template>
        </ListItem>
        <ListItem title="이영희" meta="UI/UX 디자이너">
        <template #prefix>
        <Avatar color="warning" initials="이" aria-hidden />
        </template>
        </ListItem>
        </List>\`
  }))
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var y,E,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "불릿",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "class에 list_bullet을 적용합니다. list_bullet-circle · list_bullet-square로 마커 형태를 바꿀 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List class=\\"list_bullet\\">\\n    <ListItem>디자인 토큰 정의</ListItem>\\n    <ListItem>컴포넌트 문서화</ListItem>\\n    <ListItem>접근성 검토</ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List class="list_bullet">
        <ListItem>디자인 토큰 정의</ListItem>
        <ListItem>컴포넌트 문서화</ListItem>
        <ListItem>접근성 검토</ListItem>
      </List>\`
  }))
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var w,F,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "불릿 · 본문",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "title · description prop으로 제목·설명을 함께 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List class=\\"list_bullet\\">\\n    <ListItem title=\\"HTML 마크업\\" description=\\"시맨틱 태그와 ARIA 속성을 사용합니다.\\" />\\n    <ListItem title=\\"SCSS 스타일\\" description=\\"OOCSS 패턴으로 구조와 스킨을 분리합니다.\\" />\\n    <ListItem title=\\"접근성\\" description=\\"WCAG 2.2 AA 기준을 준수합니다.\\" />\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List class="list_bullet">
        <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
        <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
        <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
      </List>\`
  }))
}`,...(S=(F=u.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var z,G,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "불릿 변형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "circle · square 마커와 중첩 목록을 지원합니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List class=\\"list_bullet list_bullet-circle\\">\\n    <ListItem>원형 마커 항목 A</ListItem>\\n    <ListItem>원형 마커 항목 B</ListItem>\\n  </List>\\n  <List class=\\"list_bullet list_bullet-square\\">\\n    <ListItem>사각 마커 항목 A</ListItem>\\n    <ListItem>사각 마커 항목 B</ListItem>\\n  </List>\\n  <List class=\\"list_bullet\\">\\n    <ListItem>\\n      레이아웃\\n      <List class=\\"list_bullet\\">\\n        <ListItem>Container</ListItem>\\n        <ListItem>Grid</ListItem>\\n      </List>\\n    </ListItem>\\n    <ListItem>\\n      기본 요소\\n      <List class=\\"list_bullet\\">\\n        <ListItem>Button</ListItem>\\n        <ListItem>Typography</ListItem>\\n      </List>\\n    </ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List class="list_bullet list_bullet-circle">
        <ListItem>원형 마커 항목 A</ListItem>
        <ListItem>원형 마커 항목 B</ListItem>
      </List>
      <List class="list_bullet list_bullet-square">
        <ListItem>사각 마커 항목 A</ListItem>
        <ListItem>사각 마커 항목 B</ListItem>
      </List>
      <List class="list_bullet">
        <ListItem>
          레이아웃
          <List class="list_bullet">
            <ListItem>Container</ListItem>
            <ListItem>Grid</ListItem>
          </List>
        </ListItem>
        <ListItem>
          기본 요소
          <List class="list_bullet">
            <ListItem>Button</ListItem>
            <ListItem>Typography</ListItem>
          </List>
        </ListItem>
      </List>\`
  }))
}`,...(P=(G=l.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var W,O,R;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "번호",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tag=&quot;ol&quot;과 list_ordered 클래스로 순서 목록을 만듭니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List tag=\\"ol\\" class=\\"list_ordered\\">\\n    <ListItem>요구사항 분석</ListItem>\\n    <ListItem>와이어프레임 작성</ListItem>\\n    <ListItem>프로토타입 검증</ListItem>\\n    <ListItem>개발 및 배포</ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List tag="ol" class="list_ordered">
        <ListItem>요구사항 분석</ListItem>
        <ListItem>와이어프레임 작성</ListItem>
        <ListItem>프로토타입 검증</ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>\`
  }))
}`,...(R=(O=r.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,T,U;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "번호 변형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman으로 번호 형식을 변경합니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List tag=\\"ol\\" class=\\"list_ordered list_ordered-alpha\\">\\n    <ListItem>첫 번째 옵션</ListItem>\\n    <ListItem>두 번째 옵션</ListItem>\\n    <ListItem>세 번째 옵션</ListItem>\\n  </List>\\n  <List tag=\\"ol\\" class=\\"list_ordered list_ordered-roman\\">\\n    <ListItem>서론</ListItem>\\n    <ListItem>본론</ListItem>\\n    <ListItem>결론</ListItem>\\n  </List>\\n  <List tag=\\"ol\\" class=\\"list_ordered list_ordered-upper-alpha\\">\\n    <ListItem>항목 A</ListItem>\\n    <ListItem>항목 B</ListItem>\\n  </List>\\n  <List tag=\\"ol\\" class=\\"list_ordered list_ordered-upper-roman\\">\\n    <ListItem>Chapter I</ListItem>\\n    <ListItem>Chapter II</ListItem>\\n  </List>\\n  <List tag=\\"ol\\" class=\\"list_ordered\\">\\n    <ListItem title=\\"프로젝트 설정\\" description=\\"저장소 클론 및 의존성 설치\\" />\\n    <ListItem title=\\"개발 서버 실행\\" description=\\"pnpm dev로 로컬 미리보기\\">\\n      <List tag=\\"ol\\" class=\\"list_ordered list_ordered-alpha\\">\\n        <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>\\n        <ListItem>pnpm install 실행</ListItem>\\n        <ListItem>pnpm dev 실행</ListItem>\\n      </List>\\n    </ListItem>\\n    <ListItem title=\\"빌드\\" description=\\"pnpm build로 html/ 출력\\" />\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List tag="ol" class="list_ordered list_ordered-alpha">
        <ListItem>첫 번째 옵션</ListItem>
        <ListItem>두 번째 옵션</ListItem>
        <ListItem>세 번째 옵션</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-roman">
        <ListItem>서론</ListItem>
        <ListItem>본론</ListItem>
        <ListItem>결론</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-upper-alpha">
        <ListItem>항목 A</ListItem>
        <ListItem>항목 B</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-upper-roman">
        <ListItem>Chapter I</ListItem>
        <ListItem>Chapter II</ListItem>
      </List>
      <List tag="ol" class="list_ordered">
        <ListItem title="프로젝트 설정" description="저장소 클론 및 의존성 설치" />
        <ListItem title="개발 서버 실행" description="pnpm dev로 로컬 미리보기">
          <List tag="ol" class="list_ordered list_ordered-alpha">
            <ListItem>터미널에서 프로젝트 폴더 이동</ListItem>
            <ListItem>pnpm install 실행</ListItem>
            <ListItem>pnpm dev 실행</ListItem>
          </List>
        </ListItem>
        <ListItem title="빌드" description="pnpm build로 html/ 출력" />
      </List>\`
  }))
}`,...(U=(T=o.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var M,X,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "번호 · 계층",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "list_ordered-outline(1.1) · list_ordered-dash(1-1)은 뎁스마다 번호가 이어집니다. list_ordered-depth는 뎁스별로 1 → a → i 형식이 자동 전환됩니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List tag=\\"ol\\" class=\\"list_ordered list_ordered-outline\\">\\n    <ListItem>1단계 — 요구사항 정의</ListItem>\\n    <ListItem>\\n      설계\\n      <List tag=\\"ol\\" class=\\"list_ordered list_ordered-outline\\">\\n        <ListItem>정보 구조</ListItem>\\n        <ListItem>\\n          UI 설계\\n          <List tag=\\"ol\\" class=\\"list_ordered list_ordered-outline\\">\\n            <ListItem>와이어프레임</ListItem>\\n            <ListItem>프로토타입</ListItem>\\n          </List>\\n        </ListItem>\\n      </List>\\n    </ListItem>\\n    <ListItem>개발 및 배포</ListItem>\\n  </List>\\n  <List tag=\\"ol\\" class=\\"list_ordered list_ordered-dash\\">\\n    <ListItem>1단계 — 환경 구성</ListItem>\\n    <ListItem>\\n      개발\\n      <List tag=\\"ol\\" class=\\"list_ordered list_ordered-dash\\">\\n        <ListItem>컴포넌트 구현</ListItem>\\n        <ListItem>\\n          문서화\\n          <List tag=\\"ol\\" class=\\"list_ordered list_ordered-dash\\">\\n            <ListItem>API 표</ListItem>\\n            <ListItem>데모 예제</ListItem>\\n          </List>\\n        </ListItem>\\n      </List>\\n    </ListItem>\\n    <ListItem>QA 및 릴리스</ListItem>\\n  </List>\\n  <List tag=\\"ol\\" class=\\"list_ordered list_ordered-depth\\">\\n    <ListItem>레이아웃</ListItem>\\n    <ListItem>\\n      기본 요소\\n      <List tag=\\"ol\\" class=\\"list_ordered list_ordered-depth\\">\\n        <ListItem>Button</ListItem>\\n        <ListItem>\\n          Form\\n          <List tag=\\"ol\\" class=\\"list_ordered list_ordered-depth\\">\\n            <ListItem>Input</ListItem>\\n            <ListItem>Select</ListItem>\\n          </List>\\n        </ListItem>\\n      </List>\\n    </ListItem>\\n    <ListItem>피드백</ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List tag="ol" class="list_ordered list_ordered-outline">
        <ListItem>1단계 — 요구사항 정의</ListItem>
        <ListItem>
          설계
          <List tag="ol" class="list_ordered list_ordered-outline">
            <ListItem>정보 구조</ListItem>
            <ListItem>
              UI 설계
              <List tag="ol" class="list_ordered list_ordered-outline">
                <ListItem>와이어프레임</ListItem>
                <ListItem>프로토타입</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>개발 및 배포</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-dash">
        <ListItem>1단계 — 환경 구성</ListItem>
        <ListItem>
          개발
          <List tag="ol" class="list_ordered list_ordered-dash">
            <ListItem>컴포넌트 구현</ListItem>
            <ListItem>
              문서화
              <List tag="ol" class="list_ordered list_ordered-dash">
                <ListItem>API 표</ListItem>
                <ListItem>데모 예제</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>QA 및 릴리스</ListItem>
      </List>
      <List tag="ol" class="list_ordered list_ordered-depth">
        <ListItem>레이아웃</ListItem>
        <ListItem>
          기본 요소
          <List tag="ol" class="list_ordered list_ordered-depth">
            <ListItem>Button</ListItem>
            <ListItem>
              Form
              <List tag="ol" class="list_ordered list_ordered-depth">
                <ListItem>Input</ListItem>
                <ListItem>Select</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>피드백</ListItem>
      </List>\`
  }))
}`,...(H=(X=m.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var Q,V,$;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "불릿 · 링크",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "불릿 목록에서도 li 안에 a.list_link를 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List class=\\"list_bullet\\">\\n    <ListItem>\\n      <a href=\\"components/button.html\\" class=\\"list_link\\" data-ripple>\\n        <span class=\\"list_title\\">Button</span>\\n      </a>\\n    </ListItem>\\n    <ListItem>\\n      <a href=\\"components/typography.html\\" class=\\"list_link\\" data-ripple>\\n        <span class=\\"list_title\\">Typography</span>\\n      </a>\\n    </ListItem>\\n    <ListItem>\\n      <a href=\\"components/icon.html\\" class=\\"list_link\\" data-ripple>\\n        <span class=\\"list_title\\">Icon</span>\\n      </a>\\n    </ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List class="list_bullet">
        <ListItem>
          <a href="components/button.html" class="list_link" data-ripple>
            <span class="list_title">Button</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/typography.html" class="list_link" data-ripple>
            <span class="list_title">Typography</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/icon.html" class="list_link" data-ripple>
            <span class="list_title">Icon</span>
          </a>
        </ListItem>
      </List>\`
  }))
}`,...($=(V=d.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var Z,j,J;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "테두리",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "bordered prop으로 각 항목에 테두리를 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List bordered>\\n    <ListItem title=\\"알림 설정\\" description=\\"이메일 및 푸시 알림을 관리합니다.\\" />\\n    <ListItem title=\\"프로필 편집\\" description=\\"이름, 사진, 소개를 변경합니다.\\" />\\n    <ListItem title=\\"보안\\" description=\\"비밀번호 및 2단계 인증을 설정합니다.\\" />\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List bordered>
        <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
        <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
        <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
      </List>\`
  }))
}`,...(J=(j=c.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var K,N,Y;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "링크",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "페이지 이동이 필요한 항목은 a.list_link를 배치합니다. split prop으로 항목 구분선을 적용합니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List split>\\n    <ListItem>\\n      <a href=\\"components/button.html\\" class=\\"list_link\\" data-ripple>\\n        <div class=\\"list_content\\">\\n          <span class=\\"list_title\\">대시보드</span>\\n        </div>\\n        <span class=\\"list_action color_muted\\" aria-hidden=\\"true\\">›</span>\\n      </a>\\n    </ListItem>\\n    <ListItem>\\n      <a href=\\"components/card.html\\" class=\\"list_link\\" data-ripple>\\n        <div class=\\"list_content\\">\\n          <span class=\\"list_title\\">프로젝트</span>\\n        </div>\\n        <span class=\\"list_action color_muted\\" aria-hidden=\\"true\\">›</span>\\n      </a>\\n    </ListItem>\\n    <ListItem>\\n      <a href=\\"getting-started.html\\" class=\\"list_link\\" data-ripple>\\n        <div class=\\"list_content\\">\\n          <span class=\\"list_title\\">설정</span>\\n        </div>\\n        <span class=\\"list_action color_muted\\" aria-hidden=\\"true\\">›</span>\\n      </a>\\n    </ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List split>
        <ListItem>
          <a href="components/button.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">대시보드</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="components/card.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">프로젝트</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
        <ListItem>
          <a href="getting-started.html" class="list_link" data-ripple>
            <div class="list_content">
              <span class="list_title">설정</span>
            </div>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </a>
        </ListItem>
      </List>\`
  }))
}`,...(Y=(N=C.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var tt,et,st;p.parameters={...p.parameters,docs:{...(tt=p.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: "버튼",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "같은 페이지 내 액션은 button.list_link를 사용합니다. button 안에는 phrasing content만 넣고, 본문 영역은 span.list_content로 감쌉니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List bordered>\\n    <ListItem>\\n      <button type=\\"button\\" class=\\"list_link\\" data-ripple>\\n        <Avatar color=\\"primary\\" initials=\\"홍\\" aria-hidden />\\n        <span class=\\"list_content\\">\\n          <span class=\\"list_title\\">홍길동</span>\\n          <span class=\\"list_meta\\">메시지 보내기</span>\\n        </span>\\n        <span class=\\"list_action color_muted\\" aria-hidden=\\"true\\">›</span>\\n      </button>\\n    </ListItem>\\n    <ListItem>\\n      <button type=\\"button\\" class=\\"list_link\\" data-ripple>\\n        <Avatar color=\\"success\\" initials=\\"김\\" aria-hidden />\\n        <span class=\\"list_content\\">\\n          <span class=\\"list_title\\">김철수</span>\\n          <span class=\\"list_meta\\">메시지 보내기</span>\\n        </span>\\n        <span class=\\"list_action color_muted\\" aria-hidden=\\"true\\">›</span>\\n      </button>\\n    </ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar,
      List,
      ListItem
    },
    template: \`<List bordered>
        <ListItem>
          <button type="button" class="list_link" data-ripple>
            <Avatar color="primary" initials="홍" aria-hidden />
            <span class="list_content">
              <span class="list_title">홍길동</span>
              <span class="list_meta">메시지 보내기</span>
            </span>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </button>
        </ListItem>
        <ListItem>
          <button type="button" class="list_link" data-ripple>
            <Avatar color="success" initials="김" aria-hidden />
            <span class="list_content">
              <span class="list_title">김철수</span>
              <span class="list_meta">메시지 보내기</span>
            </span>
            <span class="list_action color_muted" aria-hidden="true">›</span>
          </button>
        </ListItem>
      </List>\`
  }))
}`,...(st=(et=p.parameters)==null?void 0:et.docs)==null?void 0:st.source}}};var it,nt,at;L.parameters={...L.parameters,docs:{...(it=L.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: "카드 혼합",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "list_cards 클래스로 li 안에 card를 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Avatar from '@uxkm/ui/components/Avatar.vue';\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List class=\\"list_cards\\">\\n    <ListItem>\\n      <a href=\\"components/card.html\\" class=\\"card card_shadow card_clickable card_horizontal\\">\\n        <div class=\\"card_media card_media-placeholder\\" role=\\"img\\" aria-label=\\"프로젝트 썸네일\\">\\n          <svg class=\\"icon\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" aria-hidden=\\"true\\">\\n            <rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" />\\n            <circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\" />\\n            <path d=\\"M21 15l-5-5L5 21\\" />\\n          </svg>\\n        </div>\\n        <div class=\\"card_inner\\">\\n          <div class=\\"card_header\\">\\n            <div class=\\"card_header-main\\">\\n              <h3 class=\\"card_title\\">프로젝트 Alpha</h3>\\n              <p class=\\"card_subtitle\\">진행 중 · 2일 전</p>\\n            </div>\\n          </div>\\n          <div class=\\"card_body\\">\\n            디자인 시스템 구축 및 컴포넌트 라이브러리 개발\\n          </div>\\n        </div>\\n      </a>\\n    </ListItem>\\n    <ListItem>\\n      <article class=\\"card card_shadow\\">\\n        <div class=\\"card_header\\">\\n          <div class=\\"card_header-main\\">\\n            <div class=\\"card_header-row\\">\\n              <Avatar color=\\"warning\\" initials=\\"이\\" aria-hidden />\\n              <div>\\n                <h3 class=\\"card_title\\">이영희</h3>\\n                <p class=\\"card_subtitle\\">UI/UX 디자이너</p>\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\"card_body\\">\\n          <p class=\\"list_desc\\">새 디자인 시안을 공유했습니다.</p>\\n        </div>\\n        <div class=\\"card_footer card_footer-between\\">\\n          <span class=\\"color_muted size_sm\\">10분 전</span>\\n          <a href=\\"#\\" class=\\"link color_primary size_sm\\" @click.prevent>보기</a>\\n        </div>\\n      </article>\\n    </ListItem>\\n    <ListItem>\\n      <a href=\\"components/list.html\\" class=\\"card card_accent color_primary card_clickable\\">\\n        <div class=\\"card_body\\">\\n          <p class=\\"card_title\\" style=\\"margin-bottom: 0.25rem;\\">알림</p>\\n          <p class=\\"list_desc\\">리스트와 카드를 함께 사용하는 패턴입니다.</p>\\n        </div>\\n      </a>\\n    </ListItem>\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Avatar,
      List,
      ListItem
    },
    template: \`<List class="list_cards">
        <ListItem>
          <a href="components/card.html" class="card card_shadow card_clickable card_horizontal">
            <div class="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div class="card_inner">
              <div class="card_header">
                <div class="card_header-main">
                  <h3 class="card_title">프로젝트 Alpha</h3>
                  <p class="card_subtitle">진행 중 · 2일 전</p>
                </div>
              </div>
              <div class="card_body">
                디자인 시스템 구축 및 컴포넌트 라이브러리 개발
              </div>
            </div>
          </a>
        </ListItem>
        <ListItem>
          <article class="card card_shadow">
            <div class="card_header">
              <div class="card_header-main">
                <div class="card_header-row">
                  <Avatar color="warning" initials="이" aria-hidden />
                  <div>
                    <h3 class="card_title">이영희</h3>
                    <p class="card_subtitle">UI/UX 디자이너</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_body">
              <p class="list_desc">새 디자인 시안을 공유했습니다.</p>
            </div>
            <div class="card_footer card_footer-between">
              <span class="color_muted size_sm">10분 전</span>
              <a href="#" class="link color_primary size_sm" @click.prevent>보기</a>
            </div>
          </article>
        </ListItem>
        <ListItem>
          <a href="components/list.html" class="card card_accent color_primary card_clickable">
            <div class="card_body">
              <p class="card_title" style="margin-bottom: 0.25rem;">알림</p>
              <p class="list_desc">리스트와 카드를 함께 사용하는 패턴입니다.</p>
            </div>
          </a>
        </ListItem>
      </List>\`
  }))
}`,...(at=(nt=L.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ut,lt,rt;I.parameters={...I.parameters,docs:{...(ut=I.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: "정의 목록",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "variant=&quot;definition&quot;으로 dl · list_definition을 적용합니다. title · description prop이 있으면 ListItem이 dt · dd로 직접 렌더됩니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List variant=\\"definition\\" style=\\"max-width: 28rem; width: 100%;\\">\\n    <ListItem title=\\"OOCSS\\" description=\\"구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.\\" />\\n    <ListItem title=\\"Design Token\\" description=\\"색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.\\" />\\n    <ListItem title=\\"WCAG\\" description=\\"웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.\\" />\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List variant="definition" style="max-width: 28rem; width: 100%;">
        <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
        <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
        <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
      </List>\`
  }))
}`,...(rt=(lt=I.parameters)==null?void 0:lt.docs)==null?void 0:rt.source}}};var ot,mt,dt;B.parameters={...B.parameters,docs:{...(ot=B.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  name: "정의 목록 · 인라인",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "layout=&quot;inline&quot;으로 제목·내용을 가로 배치합니다. 너비는 콘텐츠에 맞게 줄어듭니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List variant=\\"definition\\" layout=\\"inline\\" inline-label-width=\\"auto\\" inline-gap=\\"var(--space-md)\\">\\n    <ListItem title=\\"OOCSS\\" description=\\"구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.\\" />\\n    <ListItem title=\\"Design Token\\" description=\\"색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다.\\" />\\n    <ListItem title=\\"WCAG\\" description=\\"웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다.\\" />\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List variant="definition" layout="inline" inline-label-width="auto" inline-gap="var(--space-md)">
        <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
        <ListItem title="Design Token" description="색상·간격·타이포 등 디자인 값을 변수로 정의한 것입니다." />
        <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침으로, 대비·키보드 사용성 등을 다룹니다." />
      </List>\`
  }))
}`,...(dt=(mt=B.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var ct,Ct,pt;_.parameters={..._.parameters,docs:{...(ct=_.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  name: "정의 목록 · 값 우측 정렬",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "descAlign=&quot;right&quot;로 dd(설명) 텍스트를 우측 정렬합니다. 주문 요약·금액 표시 등에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport List from '@uxkm/ui/components/List.vue';\\nimport ListItem from '@uxkm/ui/components/ListItem.vue';\\n<\/script>\\n\\n<template>\\n  <List\\n  variant=\\"definition\\"\\n  layout=\\"inline\\"\\n  block\\n  size=\\"compact\\"\\n  desc-align=\\"right\\"\\n  inline-label-width=\\"auto\\"\\n  inline-gap=\\"1rem\\"\\n  >\\n  <ListItem title=\\"주문번호\\" description=\\"ORD-2024-0815\\" />\\n  <ListItem title=\\"결제금액\\" description=\\"₩42,000\\" />\\n  <ListItem title=\\"배송지\\" description=\\"서울특별시 강남구 테헤란로 123\\" />\\n  </List>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    bordered: false,
    split: false,
    block: false,
    size: "md",
    variant: "default",
    tag: "ul",
    layout: "block",
    inlineLabelWidth: "값",
    inlineGap: "값",
    descAlign: "left"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      List,
      ListItem
    },
    template: \`<List
      variant="definition"
      layout="inline"
      block
      size="compact"
      desc-align="right"
      inline-label-width="auto"
      inline-gap="1rem"
      >
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구 테헤란로 123" />
      </List>\`
  }))
}`,...(pt=(Ct=_.parameters)==null?void 0:Ct.docs)==null?void 0:pt.source}}};const Wt=["Playground","Basic","Bullet","BulletRich","BulletVariant","Ordered","OrderedVariant","OrderedHierarchical","BulletLink","Bordered","Link","Button","Card","Definition","DefinitionInline","DefinitionDescAlign"];export{n as Basic,c as Bordered,a as Bullet,d as BulletLink,u as BulletRich,l as BulletVariant,p as Button,L as Card,I as Definition,_ as DefinitionDescAlign,B as DefinitionInline,C as Link,r as Ordered,m as OrderedHierarchical,o as OrderedVariant,i as Playground,Wt as __namedExportsOrder,Pt as default};

import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./List.stories-PR-Gh_AS.js";import{i as v,r as y}from"./react-DSvVgjCn.js";import{c as b,r as x,u as S}from"./blocks-CkHyEh4O.js";import{i as C,n as w,r as T,t as E}from"./ComponentApiDocs-D9Q6nkXJ.js";import{n as D,t as O}from"./dataDisplayAdvancedApiSections-Bbj3q4fV.js";function k(e,t){let n=`import { List, ListItem } from '@uxkm/react/list';
import { Avatar } from '@uxkm/react/avatar';
import Button from '@uxkm/react/button';
import Icon from '@uxkm/react/icon';

export function Example() {
  return (
${t.react}
  );
}`,r=`<script setup>
import { List, ListItem } from '@uxkm/vue/list';
import { Avatar } from '@uxkm/vue/avatar';
import Button from '@uxkm/vue/button';
import Icon from '@uxkm/vue/icon';
<\/script>

<template>
${t.vue}
</template>`;return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/List/List.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/List/list.njk · ${e}`,code:`{# List · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/list · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/list · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/list · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/list · ${e}`,code:n}]}var A;function j(){return(j=e((()=>{A={basic:k(`basic`,{html:`<ul class="list">
  <li class="list_item">
    <span class="avatar color_primary" aria-hidden="true">홍</span>
    <div class="list_content"><span class="list_title">홍길동</span><span class="list_meta">프론트엔드 개발자</span></div>
  </li>
  <li class="list_item">
    <span class="avatar color_success" aria-hidden="true">김</span>
    <div class="list_content"><span class="list_title">김철수</span><span class="list_meta">백엔드 개발자</span></div>
  </li>
  <li class="list_item">
    <span class="avatar color_warning" aria-hidden="true">이</span>
    <div class="list_content"><span class="list_title">이영희</span><span class="list_meta">UI/UX 디자이너</span></div>
  </li>
</ul>`,react:`    <List>
      <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
      <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
      <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
    </List>`,vue:`  <List>
    <ListItem title="홍길동" meta="프론트엔드 개발자"><template #prefix><Avatar color="primary" initials="홍" aria-hidden /></template></ListItem>
    <ListItem title="김철수" meta="백엔드 개발자"><template #prefix><Avatar color="success" initials="김" aria-hidden /></template></ListItem>
    <ListItem title="이영희" meta="UI/UX 디자이너"><template #prefix><Avatar color="warning" initials="이" aria-hidden /></template></ListItem>
  </List>`}),bullet:k(`bullet`,{html:`<ul class="list list_bullet">
  <li class="list_item">디자인 토큰 정의</li>
  <li class="list_item">컴포넌트 문서화</li>
  <li class="list_item">접근성 검토</li>
</ul>`,react:`    <List variant="bullet">
      <ListItem>디자인 토큰 정의</ListItem>
      <ListItem>컴포넌트 문서화</ListItem>
      <ListItem>접근성 검토</ListItem>
    </List>`,vue:`  <List variant="bullet">
    <ListItem>디자인 토큰 정의</ListItem>
    <ListItem>컴포넌트 문서화</ListItem>
    <ListItem>접근성 검토</ListItem>
  </List>`}),bulletRich:k(`bulletRich`,{html:`<ul class="list list_bullet">
  <li class="list_item"><div class="list_content"><span class="list_title">HTML 마크업</span><span class="list_desc">시맨틱 태그와 ARIA 속성을 사용합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">SCSS 스타일</span><span class="list_desc">OOCSS 패턴으로 구조와 스킨을 분리합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">접근성</span><span class="list_desc">WCAG 2.2 AA 기준을 준수합니다.</span></div></li>
</ul>`,react:`    <List variant="bullet">
      <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
      <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
      <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
    </List>`,vue:`  <List variant="bullet">
    <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
    <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
    <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
  </List>`}),bulletVariants:k(`bulletVariants`,{html:`<ul class="list list_bullet list_bullet-circle">
  <li class="list_item">원형 마커 항목 A</li><li class="list_item">원형 마커 항목 B</li>
</ul>
<ul class="list list_bullet list_bullet-square">
  <li class="list_item">사각 마커 항목 A</li><li class="list_item">사각 마커 항목 B</li>
</ul>`,react:`    <>
      <List variant="bullet" className="list_bullet-circle"><ListItem>원형 마커 항목 A</ListItem><ListItem>원형 마커 항목 B</ListItem></List>
      <List variant="bullet" className="list_bullet-square"><ListItem>사각 마커 항목 A</ListItem><ListItem>사각 마커 항목 B</ListItem></List>
    </>`,vue:`  <List variant="bullet" class="list_bullet-circle"><ListItem>원형 마커 항목 A</ListItem><ListItem>원형 마커 항목 B</ListItem></List>
  <List variant="bullet" class="list_bullet-square"><ListItem>사각 마커 항목 A</ListItem><ListItem>사각 마커 항목 B</ListItem></List>`}),ordered:k(`ordered`,{html:`<ol class="list list_ordered">
  <li class="list_item">요구사항 분석</li><li class="list_item">와이어프레임 작성</li>
  <li class="list_item">프로토타입 검증</li><li class="list_item">개발 및 배포</li>
</ol>`,react:`    <List variant="ordered">
      <ListItem>요구사항 분석</ListItem><ListItem>와이어프레임 작성</ListItem>
      <ListItem>프로토타입 검증</ListItem><ListItem>개발 및 배포</ListItem>
    </List>`,vue:`  <List variant="ordered">
    <ListItem>요구사항 분석</ListItem><ListItem>와이어프레임 작성</ListItem>
    <ListItem>프로토타입 검증</ListItem><ListItem>개발 및 배포</ListItem>
  </List>`}),orderedVariants:k(`orderedVariants`,{html:`<ol class="list list_ordered list_ordered-alpha"><li class="list_item">첫 번째 옵션</li><li class="list_item">두 번째 옵션</li></ol>
<ol class="list list_ordered list_ordered-roman"><li class="list_item">서론</li><li class="list_item">본론</li><li class="list_item">결론</li></ol>`,react:`    <>
      <List variant="ordered" className="list_ordered-alpha"><ListItem>첫 번째 옵션</ListItem><ListItem>두 번째 옵션</ListItem></List>
      <List variant="ordered" className="list_ordered-roman"><ListItem>서론</ListItem><ListItem>본론</ListItem><ListItem>결론</ListItem></List>
    </>`,vue:`  <List variant="ordered" class="list_ordered-alpha"><ListItem>첫 번째 옵션</ListItem><ListItem>두 번째 옵션</ListItem></List>
  <List variant="ordered" class="list_ordered-roman"><ListItem>서론</ListItem><ListItem>본론</ListItem><ListItem>결론</ListItem></List>`}),hierarchical:k(`hierarchical`,{html:`<ol class="list list_ordered list_ordered-outline">
  <li class="list_item">요구사항 정의</li>
  <li class="list_item">설계<ol class="list list_ordered list_ordered-outline"><li class="list_item">정보 구조</li><li class="list_item">UI 설계</li></ol></li>
  <li class="list_item">개발 및 배포</li>
</ol>`,react:`    <List variant="ordered" className="list_ordered-outline">
      <ListItem>요구사항 정의</ListItem>
      <ListItem>설계<List variant="ordered" className="list_ordered-outline"><ListItem>정보 구조</ListItem><ListItem>UI 설계</ListItem></List></ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>`,vue:`  <List variant="ordered" class="list_ordered-outline">
    <ListItem>요구사항 정의</ListItem>
    <ListItem>설계<List variant="ordered" class="list_ordered-outline"><ListItem>정보 구조</ListItem><ListItem>UI 설계</ListItem></List></ListItem>
    <ListItem>개발 및 배포</ListItem>
  </List>`}),bordered:k(`bordered`,{html:`<ul class="list list_bordered">
  <li class="list_item"><div class="list_content"><span class="list_title">알림 설정</span><span class="list_desc">이메일 및 푸시 알림을 관리합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">프로필 편집</span><span class="list_desc">이름, 사진, 소개를 변경합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">보안</span><span class="list_desc">비밀번호 및 2단계 인증을 설정합니다.</span></div></li>
</ul>`,react:`    <List bordered>
      <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
      <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
      <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
    </List>`,vue:`  <List bordered>
    <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
    <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
    <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
  </List>`}),links:k(`links`,{html:`<ul class="list list_divider">
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">홈</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">프로젝트</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">설정</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
</ul>`,react:`    <List split>
      {['홈', '프로젝트', '설정'].map((label) => (
        <ListItem key={label}><a className="list_link" href="#" data-ripple="true"><span className="list_title">{label}</span><Icon className="list_action" name="chevron" /></a></ListItem>
      ))}
    </List>`,vue:`  <List split>
    <ListItem v-for="label in ['홈', '프로젝트', '설정']" :key="label"><a class="list_link" href="#" data-ripple="true"><span class="list_title">{{ label }}</span><Icon class="list_action" name="chevron" /></a></ListItem>
  </List>`}),buttons:k(`buttons`,{html:`<ul class="list list_bordered">
  <li class="list_item"><button class="list_link" type="button" data-ripple="true"><span class="avatar color_primary" aria-hidden="true">홍</span><span class="list_content"><span class="list_title">홍길동</span><span class="list_meta">멤버 선택</span></span></button></li>
  <li class="list_item"><button class="list_link" type="button" data-ripple="true"><span class="avatar color_success" aria-hidden="true">김</span><span class="list_content"><span class="list_title">김철수</span><span class="list_meta">멤버 선택</span></span></button></li>
</ul>`,react:`    <List bordered>
      {['홍길동', '김철수'].map((name, index) => (
        <ListItem key={name}><button className="list_link" type="button" data-ripple="true"><Avatar color={index ? 'success' : 'primary'} initials={name[0]} ariaHidden /><span className="list_content"><span className="list_title">{name}</span><span className="list_meta">멤버 선택</span></span></button></ListItem>
      ))}
    </List>`,vue:`  <List bordered>
    <ListItem v-for="(name, index) in ['홍길동', '김철수']" :key="name"><button class="list_link" type="button" data-ripple="true"><Avatar :color="index ? 'success' : 'primary'" :initials="name[0]" aria-hidden /><span class="list_content"><span class="list_title">{{ name }}</span><span class="list_meta">멤버 선택</span></span></button></ListItem>
  </List>`}),actions:k(`actions`,{html:`<ul class="list list_bordered">
  <li class="list_item"><div class="list_content"><span class="list_title">디자인 시스템</span><span class="list_desc">마지막 수정 2시간 전</span></div><span class="list_action"><button class="btn btn_text color_primary btn_sm" type="button"><span class="btn_label">열기</span></button></span></li>
  <li class="list_item"><div class="list_content"><span class="list_title">컴포넌트 가이드</span><span class="list_desc">마지막 수정 어제</span></div><span class="list_action"><button class="btn btn_text color_primary btn_sm" type="button"><span class="btn_label">열기</span></button></span></li>
</ul>`,react:`    <List bordered>
      <ListItem title="디자인 시스템" description="마지막 수정 2시간 전" actions={<Button variant="text" size="sm" label="열기" />} />
      <ListItem title="컴포넌트 가이드" description="마지막 수정 어제" actions={<Button variant="text" size="sm" label="열기" />} />
    </List>`,vue:`  <List bordered>
    <ListItem title="디자인 시스템" description="마지막 수정 2시간 전"><template #actions><Button variant="text" size="sm" label="열기" /></template></ListItem>
    <ListItem title="컴포넌트 가이드" description="마지막 수정 어제"><template #actions><Button variant="text" size="sm" label="열기" /></template></ListItem>
  </List>`}),definition:k(`definition`,{html:`<dl class="list list_definition" style="max-width: 34rem">
  <dt class="list_title">OOCSS</dt><dd class="list_desc">구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.</dd>
  <dt class="list_title">Design Token</dt><dd class="list_desc">색상·간격·타이포 값을 변수로 정의한 것입니다.</dd>
  <dt class="list_title">WCAG</dt><dd class="list_desc">웹 콘텐츠 접근성 지침입니다.</dd>
</dl>`,react:`    <List variant="definition" style={{ maxWidth: '34rem' }}>
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." />
    </List>`,vue:`  <List variant="definition" :style="{ maxWidth: '34rem' }">
    <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
    <ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." />
    <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." />
  </List>`}),definitionInline:k(`definitionInline`,{html:`<dl class="list list_definition list_inline" style="--list-inline-label-width: 8rem">
  <dt class="list_title">OOCSS</dt><dd class="list_desc">구조와 스킨 분리</dd>
  <dt class="list_title">Design Token</dt><dd class="list_desc">디자인 값 변수화</dd>
  <dt class="list_title">WCAG</dt><dd class="list_desc">웹 접근성 지침</dd>
</dl>`,react:`    <List variant="definition" layout="inline" inlineLabelWidth="8rem">
      <ListItem title="OOCSS" description="구조와 스킨 분리" />
      <ListItem title="Design Token" description="디자인 값 변수화" />
      <ListItem title="WCAG" description="웹 접근성 지침" />
    </List>`,vue:`  <List variant="definition" layout="inline" inline-label-width="8rem">
    <ListItem title="OOCSS" description="구조와 스킨 분리" />
    <ListItem title="Design Token" description="디자인 값 변수화" />
    <ListItem title="WCAG" description="웹 접근성 지침" />
  </List>`}),definitionRight:k(`definitionRight`,{html:`<dl class="list list_definition list_inline list_desc-right list_block">
  <dt class="list_title">주문번호</dt><dd class="list_desc">ORD-2024-0815</dd>
  <dt class="list_title">결제금액</dt><dd class="list_desc">₩42,000</dd>
  <dt class="list_title">배송지</dt><dd class="list_desc">서울특별시 강남구</dd>
</dl>`,react:`    <List variant="definition" layout="inline" descAlign="right" block>
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구" />
    </List>`,vue:`  <List variant="definition" layout="inline" desc-align="right" block>
    <ListItem title="주문번호" description="ORD-2024-0815" />
    <ListItem title="결제금액" description="₩42,000" />
    <ListItem title="배송지" description="서울특별시 강남구" />
  </List>`})}})))()}function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...v(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{of:p}),`
`,(0,P.jsx)(t.h1,{id:`list`,children:`List`}),`
`,(0,P.jsxs)(t.p,{children:[`사람·설정·작업·정의 등 반복 항목을 시맨틱 목록으로 표현합니다. `,(0,P.jsx)(t.code,{children:`ListItem`}),`은 제목·설명·메타·앞 콘텐츠·보조 영역·액션을 일관되게 배치합니다.`]}),`
`,(0,P.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,P.jsx)(t.code,{children:`@uxkm/vue/list`}),`, `,(0,P.jsx)(t.code,{children:`@uxkm/react/list`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,P.jsx)(x,{of:d,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.basic}),`
`,(0,P.jsx)(t.h2,{id:`불릿`,children:`불릿`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`variant="bullet"`}),`은 시맨틱 `,(0,P.jsx)(t.code,{children:`ul`}),`과 불릿 스킨을 함께 적용합니다.`]}),`
`,(0,P.jsx)(x,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.bullet}),`
`,(0,P.jsx)(t.h2,{id:`불릿--설명`,children:`불릿 · 설명`}),`
`,(0,P.jsx)(x,{of:n,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.bulletRich}),`
`,(0,P.jsx)(t.h2,{id:`불릿-변형`,children:`불릿 변형`}),`
`,(0,P.jsx)(t.p,{children:`원형·사각형 마커와 중첩 목록을 클래스 조합으로 표현합니다.`}),`
`,(0,P.jsx)(x,{of:f,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.bulletVariants}),`
`,(0,P.jsx)(t.h2,{id:`번호-목록`,children:`번호 목록`}),`
`,(0,P.jsx)(x,{of:u,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.ordered}),`
`,(0,P.jsx)(t.h2,{id:`번호-변형`,children:`번호 변형`}),`
`,(0,P.jsx)(t.p,{children:`알파벳·로마 숫자·대문자 번호 형식을 제공합니다.`}),`
`,(0,P.jsx)(x,{of:s,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.orderedVariants}),`
`,(0,P.jsx)(t.h2,{id:`계층-번호`,children:`계층 번호`}),`
`,(0,P.jsx)(t.p,{children:`중첩 단계에 1.1 또는 1-1 형식의 계층 번호를 적용합니다.`}),`
`,(0,P.jsx)(x,{of:i,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.hierarchical}),`
`,(0,P.jsx)(t.h2,{id:`테두리`,children:`테두리`}),`
`,(0,P.jsx)(x,{of:m,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.bordered}),`
`,(0,P.jsx)(t.h2,{id:`링크-항목`,children:`링크 항목`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`li`}),`는 구조를 유지하고 실제 인터랙션은 내부 `,(0,P.jsx)(t.code,{children:`a.list_link`}),`가 담당합니다.`]}),`
`,(0,P.jsx)(x,{of:a,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.links}),`
`,(0,P.jsx)(t.h2,{id:`버튼-항목`,children:`버튼 항목`}),`
`,(0,P.jsxs)(t.p,{children:[`선택·실행 항목은 내부 `,(0,P.jsx)(t.code,{children:`button.list_link`}),`를 사용합니다.`]}),`
`,(0,P.jsx)(x,{of:h,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.buttons}),`
`,(0,P.jsx)(t.h2,{id:`우측-액션`,children:`우측 액션`}),`
`,(0,P.jsx)(x,{of:g,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.actions}),`
`,(0,P.jsx)(t.h2,{id:`정의-목록`,children:`정의 목록`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`variant="definition"`}),`은 `,(0,P.jsx)(t.code,{children:`dl`}),`, `,(0,P.jsx)(t.code,{children:`ListItem`}),`의 제목·설명은 `,(0,P.jsx)(t.code,{children:`dt`}),`·`,(0,P.jsx)(t.code,{children:`dd`}),`로 렌더링합니다.`]}),`
`,(0,P.jsx)(x,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.definition}),`
`,(0,P.jsx)(t.h2,{id:`정의-목록--인라인`,children:`정의 목록 · 인라인`}),`
`,(0,P.jsx)(x,{of:l,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.definitionInline}),`
`,(0,P.jsx)(t.h2,{id:`정의-목록--우측-정렬`,children:`정의 목록 · 우측 정렬`}),`
`,(0,P.jsxs)(t.p,{children:[`주문 요약처럼 값 정렬이 필요한 경우 `,(0,P.jsx)(t.code,{children:`descAlign="right"`}),`를 사용합니다.`]}),`
`,(0,P.jsx)(x,{of:_,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:A.definitionRight}),`
`,(0,P.jsx)(E,{sections:D})]})}function N(e={}){let{wrapper:t}={...v(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),y(),S(),C(),w(),j(),O(),o()})))()}F();export{N as default};
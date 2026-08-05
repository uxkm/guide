import{B as e,G as t,H as n,L as r,U as i,Y as a,b as o,d as s,f as c,i as l,k as u,m as d,nt as f,p,st as m,u as h,wt as g,xt as _}from"./CCnt5OSV.js";import{F as v,l as y,t as b,v as x}from"./DkmWXf_S.js";import{t as S}from"./DD3RWXAt.js";import{t as C}from"./AUxlN8ez2.js";var w=v(`Timeline`,{defaults:{size:`md`,tag:`ol`,iconSize:`md`},booleanProps:new Set([`card`,`alternate`,`horizontal`,`labelCol`,`icon`]),slotContent:{default:`...`},selfClosing:!1}),T=v(`TimelineItem`,{defaults:{color:`primary`},booleanProps:new Set([`active`,`pending`,`outline`]),slotContent:{default:`...`,dot:`...`,meta:`...`},selfClosing:!0}),E=Object.assign({inheritAttrs:!1},{__name:`Timeline`,props:{card:Boolean,alternate:Boolean,horizontal:Boolean,labelCol:Boolean,icon:Boolean,iconSize:{type:String,default:`md`},size:{type:String,default:`md`},tag:{type:String,default:`ol`}},setup(o){let s=new Set([`sm`,`md`]),l=new Set([`sm`,`md`,`lg`]),d=new Set([`ol`,`ul`]),p=o,m=t(),g=i(),_=f(null),v=h(()=>s.has(p.iconSize)?p.iconSize:`md`),y=h(()=>l.has(p.size)?p.size:`md`),b=h(()=>d.has(p.tag)?p.tag:`ol`);x(w,()=>({...p,iconSize:v.value,size:y.value,tag:b.value}),m,_,g);let S=h(()=>{let e=[`timeline`];return p.card&&e.push(`timeline_card`),p.alternate&&e.push(`timeline_alternate`),p.horizontal&&e.push(`timeline_horizontal`),p.labelCol&&e.push(`timeline_label-col`),p.icon&&e.push(`timeline_icon`),p.icon&&v.value===`sm`&&e.push(`timeline_icon-sm`),y.value===`sm`&&e.push(`timeline_sm`),y.value===`lg`&&e.push(`timeline_lg`),g.class&&e.push(g.class),e}),C=h(()=>{let{class:e,...t}=g;return t});return(t,i)=>(r(),c(n(b.value),u({ref_key:`rootRef`,ref:_},C.value,{class:S.value}),{default:a(()=>[e(t.$slots,`default`)]),_:3},16,[`class`]))}}),D=[`datetime`],O={key:1,class:`timeline_dot`,"aria-hidden":`true`},k={class:`timeline_content`},A=[`datetime`],j={key:1,class:`timeline_title`},M={key:2,class:`timeline_desc`},N={key:0,class:`timeline_meta`},P=Object.assign({inheritAttrs:!1},{__name:`TimelineItem`,props:{color:{type:String,default:`primary`},title:String,description:String,time:String,datetime:String,label:String,labelDatetime:String,active:Boolean,pending:Boolean,outline:Boolean},setup(n){let a=n,o=t(),c=i(),l=f(null);x(T,a,o,l,c);let m=h(()=>{let e=[`timeline_item`];return a.active&&e.push(`is-active`),a.pending&&e.push(`is-pending`),c.class&&e.push(c.class),e}),v=h(()=>{let e=[`timeline_dot`];return a.outline&&e.push(`timeline_dot-outline`),a.color&&e.push(`color_${a.color}`),e}),y=h(()=>{let{class:e,...t}=c;return t});return(t,i)=>(r(),d(`li`,u({ref_key:`rootRef`,ref:l},y.value,{class:m.value}),[n.label?(r(),d(`time`,{key:0,class:`timeline_label`,datetime:n.labelDatetime},g(n.label),9,D)):p(``,!0),t.$slots.dot?(r(),d(`span`,O,[e(t.$slots,`dot`)])):(r(),d(`span`,{key:2,class:_(v.value),"aria-hidden":`true`},null,2)),s(`div`,k,[e(t.$slots,`default`,{},()=>[n.time?(r(),d(`time`,{key:0,class:`timeline_time`,datetime:n.datetime},g(n.time),9,A)):p(``,!0),n.title?(r(),d(`p`,j,g(n.title),1)):p(``,!0),n.description?(r(),d(`p`,M,g(n.description),1)):p(``,!0)]),t.$slots.meta?(r(),d(`div`,N,[e(t.$slots,`meta`)])):p(``,!0)])],16))}}),F=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],I=[{name:`card`,type:`boolean`,default:`false`,description:`카드형 콘텐츠 (timeline_card)`},{name:`alternate`,type:`boolean`,default:`false`,description:`좌우 교차 배치 (timeline_alternate)`},{name:`horizontal`,type:`boolean`,default:`false`,description:`가로 타임라인 (timeline_horizontal)`},{name:`label-col`,type:`boolean`,default:`false`,description:`좌측 라벨 열 (timeline_label-col)`},{name:`icon`,type:`boolean`,default:`false`,description:`아이콘 점 모드 (timeline_icon)`},{name:`icon-size`,type:`'sm' | 'md'`,default:`md`,description:`icon 모드 점 크기 (timeline_icon-sm)`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`timeline_sm · timeline_lg`},{name:`tag`,type:`'ol' | 'ul'`,default:`ol`,description:`루트 태그`}],L=F,R=[{name:`color`,type:`string`,default:`primary`,description:`점 색상 color_*`},{name:`title`,type:`string`,default:`—`,description:`이벤트 제목 (timeline_title)`},{name:`description`,type:`string`,default:`—`,description:`설명 (timeline_desc)`},{name:`time`,type:`string`,default:`—`,description:`시간 텍스트 (timeline_time)`},{name:`datetime`,type:`string`,default:`—`,description:`time 요소 datetime 속성`},{name:`label`,type:`string`,default:`—`,description:`좌측 라벨 (timeline_label)`},{name:`label-datetime`,type:`string`,default:`—`,description:`라벨 datetime 속성`},{name:`active`,type:`boolean`,default:`false`,description:`진행 중 (is-active)`},{name:`pending`,type:`boolean`,default:`false`,description:`대기·미완료 (is-pending)`},{name:`outline`,type:`boolean`,default:`false`,description:`테두리 점 (timeline_dot-outline)`}],z=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],B=[{name:`default`,description:`TimelineItem 자식`}],V=[{name:`default`,description:`콘텐츠 (title·description 대체)`},{name:`dot`,description:`커스텀 점·아이콘`},{name:`meta`,description:`하단 메타 (timeline_meta)`}],H=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],U=[{name:`timeline`,description:`타임라인 루트`},{name:`timeline_card · timeline_alternate · timeline_horizontal`,description:`레이아웃 변형`},{name:`timeline_label-col · timeline_icon · timeline_icon-sm`,description:`라벨 열·아이콘 모드`},{name:`timeline_sm · timeline_lg`,description:`크기`},{name:`timeline_item · timeline_dot · timeline_content`,description:`항목 구조`},{name:`timeline_label · timeline_time · timeline_title · timeline_desc`,description:`텍스트 파트`},{name:`is-active · is-pending`,description:`상태`}],W=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],G=[{name:`--timeline-gap`,default:`var(--space-lg)`,description:`항목 간격`},{name:`--timeline-dot-size · --timeline-line-width`,default:`10px · 2px`,description:`점·연결선`},{name:`--timeline-label-width`,default:`4.5rem`,description:`라벨 열 너비`},{name:`--timeline-title-size · --timeline-desc-size`,default:`—`,description:`제목·설명 크기`}],K={title:`Timeline | HTML Components`,activeNav:`timeline`,pageTitle:`Timeline`},q={__name:`timeline`,setup(e){return(e,t)=>(r(),d(l,null,[t[2]||=s(`div`,{class:`page_intro`},[s(`h1`,null,`Timeline`),s(`p`,{class:`lead`},`시간 순서에 따른 이벤트·활동을 표시하는 타임라인 컴포넌트입니다.`)],-1),o(S,{"heading-id":`basic-heading`,title:`기본`,description:`timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem
    color="primary"
    time="2024-06-01 10:00"
    datetime="2024-06-01"
    title="프로젝트 킥오프"
    description="팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다."
    />
    <TimelineItem
    color="success"
    time="2024-06-10 14:30"
    datetime="2024-06-10"
    title="1차 릴리스 완료"
    description="MVP 기능이 프로덕션에 배포되었습니다."
    />
    <TimelineItem
    color="warning"
    time="2024-06-15 09:00"
    datetime="2024-06-15"
    title="성능 이슈 발견"
    description="대시보드 로딩 시간이 기준을 초과하여 조사를 시작했습니다."
    />
    <TimelineItem
    color="danger"
    time="2024-06-18 16:00"
    datetime="2024-06-18"
    title="긴급 패치 배포"
    description="인증 관련 보안 취약점을 수정하는 핫픽스를 배포했습니다."
    />
  </Timeline>
</template>`},{default:a(()=>[o(E,null,{default:a(()=>[o(P,{color:`primary`,time:`2024-06-01 10:00`,datetime:`2024-06-01`,title:`프로젝트 킥오프`,description:`팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다.`}),o(P,{color:`success`,time:`2024-06-10 14:30`,datetime:`2024-06-10`,title:`1차 릴리스 완료`,description:`MVP 기능이 프로덕션에 배포되었습니다.`}),o(P,{color:`warning`,time:`2024-06-15 09:00`,datetime:`2024-06-15`,title:`성능 이슈 발견`,description:`대시보드 로딩 시간이 기준을 초과하여 조사를 시작했습니다.`}),o(P,{color:`danger`,time:`2024-06-18 16:00`,datetime:`2024-06-18`,title:`긴급 패치 배포`,description:`인증 관련 보안 취약점을 수정하는 핫픽스를 배포했습니다.`})]),_:1})]),_:1}),o(S,{"heading-id":`simple-heading`,title:`간단`,description:`제목만 표시하는 간결한 타임라인입니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
    <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
    <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
  </Timeline>
</template>`},{default:a(()=>[o(E,null,{default:a(()=>[o(P,{color:`primary`,title:`주문 접수`,time:`오전 9:12`,datetime:`2024-06-20`}),o(P,{color:`primary`,title:`배송 준비 중`,time:`오전 11:45`,datetime:`2024-06-20`}),o(P,{color:`success`,title:`배송 완료`,time:`오후 2:30`,datetime:`2024-06-21`})]),_:1})]),_:1}),o(S,{"heading-id":`outline-heading`,title:`아웃라인 도트`,description:`timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
    <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
    <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
    <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
  </Timeline>
</template>`},{default:a(()=>[o(E,null,{default:a(()=>[o(P,{outline:``,color:`primary`,title:`기획 단계`,description:`요구사항 정의 및 와이어프레임 작성`}),o(P,{outline:``,color:`primary`,title:`디자인 단계`,description:`UI 키트 및 프로토타입 제작`}),o(P,{outline:``,color:`primary`,title:`개발 단계`,description:`컴포넌트 구현 및 통합 테스트 진행 중`,active:``}),o(P,{outline:``,title:`배포 단계`,description:`스테이징 검증 후 프로덕션 릴리스 예정`,pending:``})]),_:1})]),_:1}),o(S,{"heading-id":`icon-heading`,title:`아이콘 도트`,description:`timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline icon icon-size="sm">
    <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
    <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
    <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
    <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
  </Timeline>
</template>`},{default:a(()=>[o(E,{icon:``,"icon-size":`sm`},{default:a(()=>[o(P,{color:`primary`,time:`2024-06-01`,datetime:`2024-06-01`,title:`팀원 합류`,description:`프론트엔드 개발자 2명이 프로젝트에 참여했습니다.`}),o(P,{color:`success`,time:`2024-06-10`,datetime:`2024-06-10`,title:`QA 통과`,description:`회귀 테스트 142건 모두 통과했습니다.`}),o(P,{color:`warning`,time:`2024-06-15`,datetime:`2024-06-15`,title:`일정 지연 알림`,description:`외부 API 연동 이슈로 1주일 일정이 조정되었습니다.`}),o(P,{color:`danger`,time:`2024-06-18`,datetime:`2024-06-18`,title:`배포 롤백`,description:`결제 모듈 오류로 이전 버전으로 롤백했습니다.`})]),_:1})]),_:1}),o(S,{"heading-id":`card-heading`,title:`카드형`,description:`timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다.`,stack:``,code:`<script setup>
import Tag from '@/components/Tag.vue';
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline card>
    <TimelineItem color="primary" time="2024-06-20 09:00" datetime="2024-06-20" title="디자인 시스템 v2.0 릴리스" description="타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다.">
      <template #meta>
        <Tag color="primary" label="Release" />
        <Tag color="default" label="Design" />
      </template>
    </TimelineItem>
    <TimelineItem color="success" time="2024-06-22 14:00" datetime="2024-06-22" title="접근성 감사 완료" description="WCAG 2.2 AA 기준 47개 항목 검토를 마쳤습니다.">
      <template #meta>
        <Tag color="success" label="Passed" />
        <Tag color="default" label="A11y" />
      </template>
    </TimelineItem>
    <TimelineItem color="info" time="2024-06-25 11:30" datetime="2024-06-25" title="문서 업데이트 예정" description="Button · Timeline 컴포넌트 가이드가 추가됩니다.">
      <template #meta>
        <Tag color="info" label="Docs" />
      </template>
    </TimelineItem>
  </Timeline>
</template>`},{default:a(()=>[o(E,{card:``},{default:a(()=>[o(P,{color:`primary`,time:`2024-06-20 09:00`,datetime:`2024-06-20`,title:`디자인 시스템 v2.0 릴리스`,description:`타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다.`},{meta:a(()=>[o(C,{color:`primary`,label:`Release`}),o(C,{color:`default`,label:`Design`})]),_:1}),o(P,{color:`success`,time:`2024-06-22 14:00`,datetime:`2024-06-22`,title:`접근성 감사 완료`,description:`WCAG 2.2 AA 기준 47개 항목 검토를 마쳤습니다.`},{meta:a(()=>[o(C,{color:`success`,label:`Passed`}),o(C,{color:`default`,label:`A11y`})]),_:1}),o(P,{color:`info`,time:`2024-06-25 11:30`,datetime:`2024-06-25`,title:`문서 업데이트 예정`,description:`Button · Timeline 컴포넌트 가이드가 추가됩니다.`},{meta:a(()=>[o(C,{color:`info`,label:`Docs`})]),_:1})]),_:1})]),_:1}),o(S,{"heading-id":`label-heading`,title:`날짜 레이블`,description:`timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline label-col>
    <TimelineItem label="2024 Q1" label-datetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
    <TimelineItem label="2024 Q2" label-datetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
    <TimelineItem label="2024 Q3" label-datetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
    <TimelineItem label="2024 Q4" label-datetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
  </Timeline>
</template>`},{default:a(()=>[o(E,{"label-col":``},{default:a(()=>[o(P,{label:`2024 Q1`,"label-datetime":`2024-01`,color:`primary`,title:`알파 버전 출시`,description:`내부 테스트용 알파 빌드를 배포했습니다.`}),o(P,{label:`2024 Q2`,"label-datetime":`2024-04`,color:`primary`,title:`베타 공개`,description:`선택 파트너사 대상 베타 프로그램을 시작했습니다.`}),o(P,{label:`2024 Q3`,"label-datetime":`2024-07`,color:`success`,title:`정식 출시`,description:`GA 버전이 프로덕션에 배포되었습니다.`}),o(P,{label:`2024 Q4`,"label-datetime":`2024-10`,color:`primary`,title:`엔터프라이즈 기능`,description:`SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다.`})]),_:1})]),_:1}),o(S,{"heading-id":`alternate-heading`,title:`좌우 교차`,description:`timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline alternate>
    <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
    <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
    <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
    <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
  </Timeline>
</template>`},{default:a(()=>[o(E,{alternate:``},{default:a(()=>[o(P,{color:`primary`,time:`2024년 3월`,datetime:`2024-03`,title:`회사 설립`,description:`UXKM 팀이 공식적으로 출범했습니다.`}),o(P,{color:`primary`,time:`2024년 6월`,datetime:`2024-06`,title:`컴포넌트 가이드 오픈`,description:`HTML 컴포넌트 라이브러리 문서를 공개했습니다.`}),o(P,{color:`success`,time:`2024년 9월`,datetime:`2024-09`,title:`1,000 스타 달성`,description:`GitHub 저장소가 1,000 스타를 돌파했습니다.`}),o(P,{color:`info`,time:`2025년 1월`,datetime:`2025-01`,title:`v2 로드맵 공개`,description:`다크 모드 · RTL · 접근성 강화 계획을 발표했습니다.`})]),_:1})]),_:1}),o(S,{"heading-id":`horizontal-heading`,title:`가로형`,description:`timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline horizontal>
    <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
    <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
    <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
    <TimelineItem title="완료" time="예정" pending />
  </Timeline>
</template>`},{default:a(()=>[o(E,{horizontal:``},{default:a(()=>[o(P,{color:`success`,title:`신청`,time:`6/20`,datetime:`2024-06-20`}),o(P,{color:`success`,title:`심사`,time:`6/21`,datetime:`2024-06-21`}),o(P,{color:`primary`,title:`승인`,time:`진행 중`,datetime:`2024-06-22`,active:``}),o(P,{title:`완료`,time:`예정`,pending:``})]),_:1})]),_:1}),o(S,{"heading-id":`size-heading`,title:`크기`,description:`timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <div>
    <p style="font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;">Small</p>
    <Timeline size="sm">
      <TimelineItem color="primary" title="알림 발송" time="10:30" />
      <TimelineItem color="success" title="수신 확인" time="10:31" />
    </Timeline>
  </div>
  <div>
    <p style="font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;">Large</p>
    <Timeline size="lg">
      <TimelineItem color="primary" title="연간 컨퍼런스" description="2024 UX 디자인 서밋 참가" time="2024-11-15" datetime="2024-11-15" />
      <TimelineItem color="success" title="워크숍 진행" description="디자인 토큰 실습 세션" time="2024-11-16" datetime="2024-11-16" />
    </Timeline>
  </div>
</template>`},{default:a(()=>[s(`div`,null,[t[0]||=s(`p`,{style:{"font-size":`var(--text-size-sm)`,color:`var(--color-text-muted)`,margin:`0 0 0.75rem`}},`Small`,-1),o(E,{size:`sm`},{default:a(()=>[o(P,{color:`primary`,title:`알림 발송`,time:`10:30`}),o(P,{color:`success`,title:`수신 확인`,time:`10:31`})]),_:1})]),s(`div`,null,[t[1]||=s(`p`,{style:{"font-size":`var(--text-size-sm)`,color:`var(--color-text-muted)`,margin:`0 0 0.75rem`}},`Large`,-1),o(E,{size:`lg`},{default:a(()=>[o(P,{color:`primary`,title:`연간 컨퍼런스`,description:`2024 UX 디자인 서밋 참가`,time:`2024-11-15`,datetime:`2024-11-15`}),o(P,{color:`success`,title:`워크숍 진행`,description:`디자인 토큰 실습 세션`,time:`2024-11-16`,datetime:`2024-11-16`})]),_:1})])]),_:1}),o(S,{"heading-id":`state-heading`,title:`상태`,description:`is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다.`,stack:``,code:`<script setup>
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem color="success" title="계정 생성" time="완료" />
    <TimelineItem color="success" title="프로필 설정" time="완료" />
    <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
    <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
  </Timeline>
</template>`},{default:a(()=>[o(E,null,{default:a(()=>[o(P,{color:`success`,title:`계정 생성`,time:`완료`}),o(P,{color:`success`,title:`프로필 설정`,time:`완료`}),o(P,{color:`primary`,title:`팀 초대`,time:`진행 중`,active:``}),o(P,{title:`첫 프로젝트 생성`,time:`대기`,pending:``})]),_:1})]),_:1}),o(y,{"heading-id":`api-props-heading`,title:`API · Timeline Props`},{default:a(()=>[o(b,{columns:m(F),rows:m(I),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-item-props-heading`,title:`API · TimelineItem Props`},{default:a(()=>[o(b,{columns:m(L),rows:m(R),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-slots-heading`,title:`API · Timeline Slots`},{default:a(()=>[o(b,{columns:m(z),rows:m(B),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-item-slots-heading`,title:`API · TimelineItem Slots`},{default:a(()=>[o(b,{columns:m(z),rows:m(V),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:a(()=>[o(b,{columns:m(H),rows:m(U),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),o(y,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:a(()=>[o(b,{columns:m(W),rows:m(G),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{q as default,K as docMeta};
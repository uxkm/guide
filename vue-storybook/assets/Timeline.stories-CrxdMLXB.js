import{u as se,a as re,b as ce,m as De,w as Te,n as _,y as Ae,g as x,o,r as y,i as de,j as pe,c as C,t as c,f as r,d as fe}from"./iframe-CAswI7Qe.js";import{w as m,s as Ie}from"./story-renders-DjeoaiCa.js";import{_ as ge}from"./Tag-CUdCnuDd.js";import"./preload-helper-PMqzWbAN.js";const u=Object.assign({inheritAttrs:!1},{__name:"Timeline",props:{card:Boolean,alternate:Boolean,horizontal:Boolean,labelCol:Boolean,icon:Boolean,iconSize:{type:String,default:"md",validator:e=>["sm","md"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},tag:{type:String,default:"ol"}},setup(e){const i=e,v=se(),a=re(),s=de(null),z=pe("Timeline",{defaults:{size:"md",tag:"ol",iconSize:"md"},booleanProps:new Set(["card","alternate","horizontal","labelCol","icon"]),skipProps:["tag"],selfClosing:!1});ce(z,i,v,s,a);const k=x(()=>{const n=["timeline"];return i.card&&n.push("timeline_card"),i.alternate&&n.push("timeline_alternate"),i.horizontal&&n.push("timeline_horizontal"),i.labelCol&&n.push("timeline_label-col"),i.icon&&n.push("timeline_icon"),i.icon&&i.iconSize==="sm"&&n.push("timeline_icon-sm"),i.size==="sm"&&n.push("timeline_sm"),i.size==="lg"&&n.push("timeline_lg"),a.class&&n.push(a.class),n});return(n,t)=>(o(),De(Ae(e.tag),{ref_key:"rootRef",ref:s,class:_(k.value)},{default:Te(()=>[y(n.$slots,"default")]),_:3},8,["class"]))}}),Ee=["datetime"],be={key:1,class:"timeline_dot","aria-hidden":"true"},ye={class:"timeline_content"},ve=["datetime"],ze={key:1,class:"timeline_title"},ke={key:2,class:"timeline_desc"},_e={key:0,class:"timeline_meta"},l=Object.assign({inheritAttrs:!1},{__name:"TimelineItem",props:{color:{type:String,default:"primary"},title:String,description:String,time:String,datetime:String,label:String,labelDatetime:String,active:Boolean,pending:Boolean,outline:Boolean},setup(e){const i=e,v=se(),a=re(),s=de(null),z=pe("TimelineItem",{defaults:{color:"primary"},booleanProps:new Set(["active","pending","outline"]),selfClosing:!1});ce(z,i,v,s,a);const k=x(()=>{const t=["timeline_item"];return i.active&&t.push("is-active"),i.pending&&t.push("is-pending"),a.class&&t.push(a.class),t}),n=x(()=>{const t=["timeline_dot"];return i.outline&&t.push("timeline_dot-outline"),i.color&&t.push(`color_${i.color}`),t});return(t,Ge)=>(o(),C("li",{ref_key:"rootRef",ref:s,class:_(k.value)},[e.label?(o(),C("time",{key:0,class:"timeline_label",datetime:e.labelDatetime},c(e.label),9,Ee)):r("",!0),t.$slots.dot?(o(),C("span",be,[y(t.$slots,"dot")])):(o(),C("span",{key:2,class:_(n.value),"aria-hidden":"true"},null,2)),fe("div",ye,[y(t.$slots,"default",{},()=>[e.time?(o(),C("time",{key:0,class:"timeline_time",datetime:e.datetime},c(e.time),9,ve)):r("",!0),e.title?(o(),C("p",ze,c(e.title),1)):r("",!0),e.description?(o(),C("p",ke,c(e.description),1)):r("",!0)]),t.$slots.meta?(o(),C("div",_e,[y(t.$slots,"meta")])):r("",!0)])],2))}}),Be=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xe=[{name:"card",type:"boolean",default:"false",description:"카드형 콘텐츠 (timeline_card)"},{name:"alternate",type:"boolean",default:"false",description:"좌우 교차 배치 (timeline_alternate)"},{name:"horizontal",type:"boolean",default:"false",description:"가로 타임라인 (timeline_horizontal)"},{name:"label-col",type:"boolean",default:"false",description:"좌측 라벨 열 (timeline_label-col)"},{name:"icon",type:"boolean",default:"false",description:"아이콘 점 모드 (timeline_icon)"},{name:"icon-size",type:"'sm' | 'md'",default:"md",description:"icon 모드 점 크기 (timeline_icon-sm)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"timeline_sm · timeline_lg"},{name:"tag",type:"string",default:"ol",description:"루트 태그 (ol · ul)"}],Se=Be,he=[{name:"color",type:"string",default:"primary",description:"점 색상 color_*"},{name:"title",type:"string",default:"—",description:"이벤트 제목 (timeline_title)"},{name:"description",type:"string",default:"—",description:"설명 (timeline_desc)"},{name:"time",type:"string",default:"—",description:"시간 텍스트 (timeline_time)"},{name:"datetime",type:"string",default:"—",description:"time 요소 datetime 속성"},{name:"label",type:"string",default:"—",description:"좌측 라벨 (timeline_label)"},{name:"label-datetime",type:"string",default:"—",description:"라벨 datetime 속성"},{name:"active",type:"boolean",default:"false",description:"진행 중 (is-active)"},{name:"pending",type:"boolean",default:"false",description:"대기·미완료 (is-pending)"},{name:"outline",type:"boolean",default:"false",description:"테두리 점 (timeline_dot-outline)"}],S=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Fe=[{name:"default",description:"TimelineItem 자식"}],we=[{name:"default",description:"콘텐츠 (title·description 대체)"},{name:"dot",description:"커스텀 점·아이콘"},{name:"meta",description:"하단 메타 (timeline_meta)"}],Pe=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Re=[{name:"timeline",description:"타임라인 루트"},{name:"timeline_card · timeline_alternate · timeline_horizontal",description:"레이아웃 변형"},{name:"timeline_label-col · timeline_icon · timeline_icon-sm",description:"라벨 열·아이콘 모드"},{name:"timeline_sm · timeline_lg",description:"크기"},{name:"timeline_item · timeline_dot · timeline_content",description:"항목 구조"},{name:"timeline_label · timeline_time · timeline_title · timeline_desc",description:"텍스트 파트"},{name:"is-active · is-pending",description:"상태"}],Qe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Le=[{name:"--timeline-gap",default:"var(--space-lg)",description:"항목 간격"},{name:"--timeline-dot-size · --timeline-line-width",default:"10px · 2px",description:"점·연결선"},{name:"--timeline-label-width",default:"4.5rem",description:"라벨 열 너비"},{name:"--timeline-title-size · --timeline-desc-size",default:"—",description:"제목·설명 크기"}],Me=[{title:"API · Timeline Props",tables:[{columns:Be,rows:xe,codeColumn:"name"}]},{title:"API · TimelineItem Props",tables:[{columns:Se,rows:he,codeColumn:"name"}]},{title:"API · Timeline Slots",tables:[{columns:S,rows:Fe,codeColumn:"name"}]},{title:"API · TimelineItem Slots",tables:[{columns:S,rows:we,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Pe,rows:Re,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Qe,rows:Le,codeColumn:"name"}]}],Xe={title:"Components/데이터 표시/Timeline",id:"components-timeline",component:u,subcomponents:{TimelineItem:l},tags:["autodocs"],argTypes:{card:{control:"boolean",type:{name:"boolean",summary:"boolean"}},alternate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},horizontal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelCol:{control:"boolean",type:{name:"boolean",summary:"boolean"}},icon:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconSize:{control:"select",options:["sm","md"],type:{name:"enum",summary:"'sm' | 'md'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},tag:{control:"select",options:["ol","ul"],type:{name:"enum",summary:"'ol' | 'ul'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Me}},d={parameters:{controls:{disable:!1}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:(e,i)=>({components:{Timeline:u,TimelineItem:l},setup(){return{args:Ie(i)}},template:`<Timeline v-bind="args">
      <TimelineItem title="이벤트 1" time="09:00" />
      <TimelineItem title="이벤트 2" time="10:30" />
    </Timeline>`})},p={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
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
</template>`,language:"vue"}}},args:{iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline>
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
      </Timeline>`}))},B={name:"간단",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"제목만 표시하는 간결한 타임라인입니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
    <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
    <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
  </Timeline>
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline>
        <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
        <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
        <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
      </Timeline>`}))},D={name:"아웃라인 도트",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
    <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
    <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
    <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
  </Timeline>
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline>
        <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
        <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
        <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
        <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
      </Timeline>`}))},T={name:"아이콘 도트",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline icon icon-size="sm">
    <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
    <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
    <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
    <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
  </Timeline>
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline icon icon-size="sm">
        <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
        <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
        <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
        <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
      </Timeline>`}))},A={name:"카드형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다."},source:{code:`<script setup>
import Tag from '@uxkm/ui/components/Tag.vue';
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
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
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Tag:ge,Timeline:u,TimelineItem:l},template:`        <Timeline card>
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
        </Timeline>`}))},f={name:"날짜 레이블",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline label-col>
    <TimelineItem label="2024 Q1" label-datetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
    <TimelineItem label="2024 Q2" label-datetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
    <TimelineItem label="2024 Q3" label-datetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
    <TimelineItem label="2024 Q4" label-datetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
  </Timeline>
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline label-col>
        <TimelineItem label="2024 Q1" label-datetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
        <TimelineItem label="2024 Q2" label-datetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
        <TimelineItem label="2024 Q3" label-datetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
        <TimelineItem label="2024 Q4" label-datetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
      </Timeline>`}))},I={name:"좌우 교차",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline alternate>
    <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
    <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
    <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
    <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
  </Timeline>
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline alternate>
        <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
        <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
        <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
        <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
      </Timeline>`}))},g={name:"가로형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline horizontal>
    <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
    <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
    <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
    <TimelineItem title="완료" time="예정" pending />
  </Timeline>
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline horizontal>
        <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
        <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
        <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
        <TimelineItem title="완료" time="예정" pending />
      </Timeline>`}))},E={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
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
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<div>
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
      </div>`}))},b={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem color="success" title="계정 생성" time="완료" />
    <TimelineItem color="success" title="프로필 설정" time="완료" />
    <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
    <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
  </Timeline>
</template>`,language:"vue"}}},args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m(()=>({components:{Timeline:u,TimelineItem:l},template:`<Timeline>
        <TimelineItem color="success" title="계정 생성" time="완료" />
        <TimelineItem color="success" title="프로필 설정" time="완료" />
        <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
        <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
      </Timeline>`}))};var h,F,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: (_args, context) => ({
    components: {
      Timeline,
      TimelineItem
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Timeline v-bind="args">
      <TimelineItem title="이벤트 1" time="09:00" />
      <TimelineItem title="이벤트 2" time="10:30" />
    </Timeline>\`
  })
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var P,R,Q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline>\\n    <TimelineItem\\n    color=\\"primary\\"\\n    time=\\"2024-06-01 10:00\\"\\n    datetime=\\"2024-06-01\\"\\n    title=\\"프로젝트 킥오프\\"\\n    description=\\"팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다.\\"\\n    />\\n    <TimelineItem\\n    color=\\"success\\"\\n    time=\\"2024-06-10 14:30\\"\\n    datetime=\\"2024-06-10\\"\\n    title=\\"1차 릴리스 완료\\"\\n    description=\\"MVP 기능이 프로덕션에 배포되었습니다.\\"\\n    />\\n    <TimelineItem\\n    color=\\"warning\\"\\n    time=\\"2024-06-15 09:00\\"\\n    datetime=\\"2024-06-15\\"\\n    title=\\"성능 이슈 발견\\"\\n    description=\\"대시보드 로딩 시간이 기준을 초과하여 조사를 시작했습니다.\\"\\n    />\\n    <TimelineItem\\n    color=\\"danger\\"\\n    time=\\"2024-06-18 16:00\\"\\n    datetime=\\"2024-06-18\\"\\n    title=\\"긴급 패치 배포\\"\\n    description=\\"인증 관련 보안 취약점을 수정하는 핫픽스를 배포했습니다.\\"\\n    />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline>
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
      </Timeline>\`
  }))
}`,...(Q=(R=p.parameters)==null?void 0:R.docs)==null?void 0:Q.source}}};var L,M,G;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "간단",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "제목만 표시하는 간결한 타임라인입니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline>\\n    <TimelineItem color=\\"primary\\" title=\\"주문 접수\\" time=\\"오전 9:12\\" datetime=\\"2024-06-20\\" />\\n    <TimelineItem color=\\"primary\\" title=\\"배송 준비 중\\" time=\\"오전 11:45\\" datetime=\\"2024-06-20\\" />\\n    <TimelineItem color=\\"success\\" title=\\"배송 완료\\" time=\\"오후 2:30\\" datetime=\\"2024-06-21\\" />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline>
        <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
        <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
        <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
      </Timeline>\`
  }))
}`,...(G=(M=B.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var U,H,O;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "아웃라인 도트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline>\\n    <TimelineItem outline color=\\"primary\\" title=\\"기획 단계\\" description=\\"요구사항 정의 및 와이어프레임 작성\\" />\\n    <TimelineItem outline color=\\"primary\\" title=\\"디자인 단계\\" description=\\"UI 키트 및 프로토타입 제작\\" />\\n    <TimelineItem outline color=\\"primary\\" title=\\"개발 단계\\" description=\\"컴포넌트 구현 및 통합 테스트 진행 중\\" active />\\n    <TimelineItem outline title=\\"배포 단계\\" description=\\"스테이징 검증 후 프로덕션 릴리스 예정\\" pending />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline>
        <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
        <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
        <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
        <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
      </Timeline>\`
  }))
}`,...(O=(H=D.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var $,X,V;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "아이콘 도트",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline icon icon-size=\\"sm\\">\\n    <TimelineItem color=\\"primary\\" time=\\"2024-06-01\\" datetime=\\"2024-06-01\\" title=\\"팀원 합류\\" description=\\"프론트엔드 개발자 2명이 프로젝트에 참여했습니다.\\" />\\n    <TimelineItem color=\\"success\\" time=\\"2024-06-10\\" datetime=\\"2024-06-10\\" title=\\"QA 통과\\" description=\\"회귀 테스트 142건 모두 통과했습니다.\\" />\\n    <TimelineItem color=\\"warning\\" time=\\"2024-06-15\\" datetime=\\"2024-06-15\\" title=\\"일정 지연 알림\\" description=\\"외부 API 연동 이슈로 1주일 일정이 조정되었습니다.\\" />\\n    <TimelineItem color=\\"danger\\" time=\\"2024-06-18\\" datetime=\\"2024-06-18\\" title=\\"배포 롤백\\" description=\\"결제 모듈 오류로 이전 버전으로 롤백했습니다.\\" />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline icon icon-size="sm">
        <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
        <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
        <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
        <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
      </Timeline>\`
  }))
}`,...(V=(X=T.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var K,W,j;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "카드형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Tag from '@uxkm/ui/components/Tag.vue';\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline card>\\n    <TimelineItem color=\\"primary\\" time=\\"2024-06-20 09:00\\" datetime=\\"2024-06-20\\" title=\\"디자인 시스템 v2.0 릴리스\\" description=\\"타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다.\\">\\n      <template #meta>\\n        <Tag color=\\"primary\\" label=\\"Release\\" />\\n        <Tag color=\\"default\\" label=\\"Design\\" />\\n      </template>\\n    </TimelineItem>\\n    <TimelineItem color=\\"success\\" time=\\"2024-06-22 14:00\\" datetime=\\"2024-06-22\\" title=\\"접근성 감사 완료\\" description=\\"WCAG 2.2 AA 기준 47개 항목 검토를 마쳤습니다.\\">\\n      <template #meta>\\n        <Tag color=\\"success\\" label=\\"Passed\\" />\\n        <Tag color=\\"default\\" label=\\"A11y\\" />\\n      </template>\\n    </TimelineItem>\\n    <TimelineItem color=\\"info\\" time=\\"2024-06-25 11:30\\" datetime=\\"2024-06-25\\" title=\\"문서 업데이트 예정\\" description=\\"Button · Timeline 컴포넌트 가이드가 추가됩니다.\\">\\n      <template #meta>\\n        <Tag color=\\"info\\" label=\\"Docs\\" />\\n      </template>\\n    </TimelineItem>\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Tag,
      Timeline,
      TimelineItem
    },
    template: \`        <Timeline card>
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
        </Timeline>\`
  }))
}`,...(j=(W=A.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var N,q,J;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "날짜 레이블",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline label-col>\\n    <TimelineItem label=\\"2024 Q1\\" label-datetime=\\"2024-01\\" color=\\"primary\\" title=\\"알파 버전 출시\\" description=\\"내부 테스트용 알파 빌드를 배포했습니다.\\" />\\n    <TimelineItem label=\\"2024 Q2\\" label-datetime=\\"2024-04\\" color=\\"primary\\" title=\\"베타 공개\\" description=\\"선택 파트너사 대상 베타 프로그램을 시작했습니다.\\" />\\n    <TimelineItem label=\\"2024 Q3\\" label-datetime=\\"2024-07\\" color=\\"success\\" title=\\"정식 출시\\" description=\\"GA 버전이 프로덕션에 배포되었습니다.\\" />\\n    <TimelineItem label=\\"2024 Q4\\" label-datetime=\\"2024-10\\" color=\\"primary\\" title=\\"엔터프라이즈 기능\\" description=\\"SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다.\\" />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline label-col>
        <TimelineItem label="2024 Q1" label-datetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
        <TimelineItem label="2024 Q2" label-datetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
        <TimelineItem label="2024 Q3" label-datetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
        <TimelineItem label="2024 Q4" label-datetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
      </Timeline>\`
  }))
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "좌우 교차",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline alternate>\\n    <TimelineItem color=\\"primary\\" time=\\"2024년 3월\\" datetime=\\"2024-03\\" title=\\"회사 설립\\" description=\\"UXKM 팀이 공식적으로 출범했습니다.\\" />\\n    <TimelineItem color=\\"primary\\" time=\\"2024년 6월\\" datetime=\\"2024-06\\" title=\\"컴포넌트 가이드 오픈\\" description=\\"HTML 컴포넌트 라이브러리 문서를 공개했습니다.\\" />\\n    <TimelineItem color=\\"success\\" time=\\"2024년 9월\\" datetime=\\"2024-09\\" title=\\"1,000 스타 달성\\" description=\\"GitHub 저장소가 1,000 스타를 돌파했습니다.\\" />\\n    <TimelineItem color=\\"info\\" time=\\"2025년 1월\\" datetime=\\"2025-01\\" title=\\"v2 로드맵 공개\\" description=\\"다크 모드 · RTL · 접근성 강화 계획을 발표했습니다.\\" />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline alternate>
        <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
        <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
        <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
        <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
      </Timeline>\`
  }))
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ie,te,ne;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "가로형",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline horizontal>\\n    <TimelineItem color=\\"success\\" title=\\"신청\\" time=\\"6/20\\" datetime=\\"2024-06-20\\" />\\n    <TimelineItem color=\\"success\\" title=\\"심사\\" time=\\"6/21\\" datetime=\\"2024-06-21\\" />\\n    <TimelineItem color=\\"primary\\" title=\\"승인\\" time=\\"진행 중\\" datetime=\\"2024-06-22\\" active />\\n    <TimelineItem title=\\"완료\\" time=\\"예정\\" pending />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline horizontal>
        <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
        <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
        <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
        <TimelineItem title="완료" time="예정" pending />
      </Timeline>\`
  }))
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ue,le,me;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <div>\\n    <p style=\\"font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;\\">Small</p>\\n    <Timeline size=\\"sm\\">\\n      <TimelineItem color=\\"primary\\" title=\\"알림 발송\\" time=\\"10:30\\" />\\n      <TimelineItem color=\\"success\\" title=\\"수신 확인\\" time=\\"10:31\\" />\\n    </Timeline>\\n  </div>\\n  <div>\\n    <p style=\\"font-size: var(--text-size-sm); color: var(--color-text-muted); margin: 0 0 0.75rem;\\">Large</p>\\n    <Timeline size=\\"lg\\">\\n      <TimelineItem color=\\"primary\\" title=\\"연간 컨퍼런스\\" description=\\"2024 UX 디자인 서밋 참가\\" time=\\"2024-11-15\\" datetime=\\"2024-11-15\\" />\\n      <TimelineItem color=\\"success\\" title=\\"워크숍 진행\\" description=\\"디자인 토큰 실습 세션\\" time=\\"2024-11-16\\" datetime=\\"2024-11-16\\" />\\n    </Timeline>\\n  </div>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<div>
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
      </div>\`
  }))
}`,...(me=(le=E.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var oe,Ce,ae;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Timeline from '@uxkm/ui/components/Timeline.vue';\\nimport TimelineItem from '@uxkm/ui/components/TimelineItem.vue';\\n<\/script>\\n\\n<template>\\n  <Timeline>\\n    <TimelineItem color=\\"success\\" title=\\"계정 생성\\" time=\\"완료\\" />\\n    <TimelineItem color=\\"success\\" title=\\"프로필 설정\\" time=\\"완료\\" />\\n    <TimelineItem color=\\"primary\\" title=\\"팀 초대\\" time=\\"진행 중\\" active />\\n    <TimelineItem title=\\"첫 프로젝트 생성\\" time=\\"대기\\" pending />\\n  </Timeline>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    card: false,
    alternate: false,
    horizontal: false,
    labelCol: false,
    icon: false,
    iconSize: "md",
    size: "md",
    tag: "ol"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Timeline,
      TimelineItem
    },
    template: \`<Timeline>
        <TimelineItem color="success" title="계정 생성" time="완료" />
        <TimelineItem color="success" title="프로필 설정" time="완료" />
        <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
        <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
      </Timeline>\`
  }))
}`,...(ae=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:ae.source}}};const Ve=["Playground","Basic","Simple","Outline","Icon","Card","Label","Alternate","Horizontal","Size","State"];export{I as Alternate,p as Basic,A as Card,g as Horizontal,T as Icon,f as Label,D as Outline,d as Playground,B as Simple,E as Size,b as State,Ve as __namedExportsOrder,Xe as default};

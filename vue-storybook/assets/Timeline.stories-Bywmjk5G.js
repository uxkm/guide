import{u as ue,b as ne,l as me,j as le,n as Ce,p as oe,f as re,o as ae,r as se,a as ce}from"./vue.esm-bundler-BaZlnz8B.js";import{u as pe,c as Be}from"./useDemoCode-B9b0dRAo.js";import{_ as n}from"./Tag-CUzyky8W.js";import{_ as t}from"./TimelineItem-BCA8suRK.js";import"./Button-C3SXv-sJ.js";import"./useRipple-oORGvIsP.js";import"./Icon-D97OEunV.js";const i=Object.assign({inheritAttrs:!1},{__name:"Timeline",props:{card:Boolean,alternate:Boolean,horizontal:Boolean,labelCol:Boolean,icon:Boolean,iconSize:{type:String,default:"md",validator:m=>["sm","md"].includes(m)},size:{type:String,default:"md",validator:m=>["sm","md","lg"].includes(m)},tag:{type:String,default:"ol"}},setup(m){const u=m,ee=ue(),T=ne(),A=ce(null),ie=Be("Timeline",{defaults:{size:"md",tag:"ol",iconSize:"md"},booleanProps:new Set(["card","alternate","horizontal","labelCol","icon"]),skipProps:["tag"],selfClosing:!1});pe(ie,u,ee,A,T);const te=re(()=>{const e=["timeline"];return u.card&&e.push("timeline_card"),u.alternate&&e.push("timeline_alternate"),u.horizontal&&e.push("timeline_horizontal"),u.labelCol&&e.push("timeline_label-col"),u.icon&&e.push("timeline_icon"),u.icon&&u.iconSize==="sm"&&e.push("timeline_icon-sm"),u.size==="sm"&&e.push("timeline_sm"),u.size==="lg"&&e.push("timeline_lg"),T.class&&e.push(T.class),e});return(e,be)=>(ae(),me(oe(m.tag),{ref_key:"rootRef",ref:A,class:Ce(te.value)},{default:le(()=>[se(e.$slots,"default")]),_:3},8,["class"]))}}),Z=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],de=[{name:"card",type:"boolean",default:"false",description:"카드형 콘텐츠 (timeline_card)"},{name:"alternate",type:"boolean",default:"false",description:"좌우 교차 배치 (timeline_alternate)"},{name:"horizontal",type:"boolean",default:"false",description:"가로 타임라인 (timeline_horizontal)"},{name:"label-col",type:"boolean",default:"false",description:"좌측 라벨 열 (timeline_label-col)"},{name:"icon",type:"boolean",default:"false",description:"아이콘 점 모드 (timeline_icon)"},{name:"icon-size",type:"'sm' | 'md'",default:"md",description:"icon 모드 점 크기 (timeline_icon-sm)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"timeline_sm · timeline_lg"},{name:"tag",type:"string",default:"ol",description:"루트 태그 (ol · ul)"}],De=Z,Te=[{name:"color",type:"string",default:"primary",description:"점 색상 color_*"},{name:"title",type:"string",default:"—",description:"이벤트 제목 (timeline_title)"},{name:"description",type:"string",default:"—",description:"설명 (timeline_desc)"},{name:"time",type:"string",default:"—",description:"시간 텍스트 (timeline_time)"},{name:"datetime",type:"string",default:"—",description:"time 요소 datetime 속성"},{name:"label",type:"string",default:"—",description:"좌측 라벨 (timeline_label)"},{name:"label-datetime",type:"string",default:"—",description:"라벨 datetime 속성"},{name:"active",type:"boolean",default:"false",description:"진행 중 (is-active)"},{name:"pending",type:"boolean",default:"false",description:"대기·미완료 (is-pending)"},{name:"outline",type:"boolean",default:"false",description:"테두리 점 (timeline_dot-outline)"}],I=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Ae=[{name:"default",description:"TimelineItem 자식"}],Ie=[{name:"default",description:"콘텐츠 (title·description 대체)"},{name:"dot",description:"커스텀 점·아이콘"},{name:"meta",description:"하단 메타 (timeline_meta)"}],ge=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ee=[{name:"timeline",description:"타임라인 루트"},{name:"timeline_card · timeline_alternate · timeline_horizontal",description:"레이아웃 변형"},{name:"timeline_label-col · timeline_icon · timeline_icon-sm",description:"라벨 열·아이콘 모드"},{name:"timeline_sm · timeline_lg",description:"크기"},{name:"timeline_item · timeline_dot · timeline_content",description:"항목 구조"},{name:"timeline_label · timeline_time · timeline_title · timeline_desc",description:"텍스트 파트"},{name:"is-active · is-pending",description:"상태"}],ye=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],fe=[{name:"--timeline-gap",default:"var(--space-lg)",description:"항목 간격"},{name:"--timeline-dot-size · --timeline-line-width",default:"10px · 2px",description:"점·연결선"},{name:"--timeline-label-width",default:"4.5rem",description:"라벨 열 너비"},{name:"--timeline-title-size · --timeline-desc-size",default:"—",description:"제목·설명 크기"}],ve=[{title:"API · Timeline Props",tables:[{columns:Z,rows:de,codeColumn:"name"}]},{title:"API · TimelineItem Props",tables:[{columns:De,rows:Te,codeColumn:"name"}]},{title:"API · Timeline Slots",tables:[{columns:I,rows:Ae,codeColumn:"name"}]},{title:"API · TimelineItem Slots",tables:[{columns:I,rows:Ie,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ge,rows:Ee,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:ye,rows:fe,codeColumn:"name"}]}],we={title:"Components/데이터 표시/Timeline",id:"components-timeline",component:i,tags:["autodocs"],argTypes:{card:{control:"boolean",type:{name:"boolean",summary:"boolean"}},alternate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},horizontal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelCol:{control:"boolean",type:{name:"boolean",summary:"boolean"}},icon:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconSize:{control:"select",options:["sm","md"],type:{name:"enum",summary:"'sm' | 'md'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},tag:{control:"select",options:["ol","ul"],type:{name:"enum",summary:"'ol' | 'ul'"}}},parameters:{layout:"padded",apiSections:ve}},l={args:{card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},render:m=>({components:{Timeline:i,TimelineItem:t},setup(){return{args:m}},template:`<Timeline v-bind="args">
      <TimelineItem title="이벤트 1" time="09:00" />
      <TimelineItem title="이벤트 2" time="10:30" />
    </Timeline>`})},C={name:"기본",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline>
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
    </Timeline>`})},o={name:"간단",parameters:{demoPreview:{stack:!0},docs:{description:{story:"제목만 표시하는 간결한 타임라인입니다."},source:{code:`<script setup>
import Timeline from '@uxkm/ui/components/Timeline.vue';
import TimelineItem from '@uxkm/ui/components/TimelineItem.vue';
<\/script>

<template>
  <Timeline>
    <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
    <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
    <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
  </Timeline>
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline>
      <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
      <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
      <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
    </Timeline>`})},r={name:"아웃라인 도트",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline>
      <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
      <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
      <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
      <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
    </Timeline>`})},a={name:"아이콘 도트",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline icon icon-size="sm">
      <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
      <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
      <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
      <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
    </Timeline>`})},s={name:"카드형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline card>
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
    </Timeline>`})},c={name:"날짜 레이블",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline label-col>
      <TimelineItem label="2024 Q1" label-datetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
      <TimelineItem label="2024 Q2" label-datetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
      <TimelineItem label="2024 Q3" label-datetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
      <TimelineItem label="2024 Q4" label-datetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
    </Timeline>`})},p={name:"좌우 교차",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline alternate>
      <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
      <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
      <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
      <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
    </Timeline>`})},B={name:"가로형",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline horizontal>
      <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
      <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
      <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
      <TimelineItem title="완료" time="예정" pending />
    </Timeline>`})},d={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<div>
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
    </div>`})},D={name:"상태",parameters:{demoPreview:{stack:!0},docs:{description:{story:"is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},render:()=>({components:{Timeline:i,Tag:n,TimelineItem:t},template:`<Timeline>
      <TimelineItem color="success" title="계정 생성" time="완료" />
      <TimelineItem color="success" title="프로필 설정" time="완료" />
      <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
      <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
    </Timeline>`})};var g,E,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      Timeline,
      TimelineItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Timeline v-bind="args">
      <TimelineItem title="이벤트 1" time="09:00" />
      <TimelineItem title="이벤트 2" time="10:30" />
    </Timeline>\`
  })
}`,...(y=(E=l.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var f,v,b;C.parameters={...C.parameters,docs:{...(f=C.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
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
  })
}`,...(b=(v=C.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,k,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "간단",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline>
      <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
      <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
      <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
    </Timeline>\`
  })
}`,...(_=(k=o.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var F,z,S;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "아웃라인 도트",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline>
      <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
      <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
      <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
      <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
    </Timeline>\`
  })
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var P,w,h;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "아이콘 도트",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline icon icon-size="sm">
      <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
      <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
      <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
      <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
    </Timeline>\`
  })
}`,...(h=(w=a.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var Q,L,M;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "카드형",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline card>
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
  })
}`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var G,U,H;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "날짜 레이블",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline label-col>
      <TimelineItem label="2024 Q1" label-datetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
      <TimelineItem label="2024 Q2" label-datetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
      <TimelineItem label="2024 Q3" label-datetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
      <TimelineItem label="2024 Q4" label-datetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
    </Timeline>\`
  })
}`,...(H=(U=c.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var O,R,X;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "좌우 교차",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline alternate>
      <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
      <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
      <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
      <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
    </Timeline>\`
  })
}`,...(X=(R=p.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var V,K,W;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "가로형",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline horizontal>
      <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
      <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
      <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
      <TimelineItem title="완료" time="예정" pending />
    </Timeline>\`
  })
}`,...(W=(K=B.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var $,j,q;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
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
  })
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,N,Y;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "상태",
  parameters: {
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
  render: () => ({
    components: {
      Timeline,
      Tag,
      TimelineItem
    },
    template: \`<Timeline>
      <TimelineItem color="success" title="계정 생성" time="완료" />
      <TimelineItem color="success" title="프로필 설정" time="완료" />
      <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
      <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
    </Timeline>\`
  })
}`,...(Y=(N=D.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};const he=["Playground","Basic","Simple","Outline","Icon","Card","Label","Alternate","Horizontal","Size","State"];export{p as Alternate,C as Basic,s as Card,B as Horizontal,a as Icon,c as Label,r as Outline,l as Playground,o as Simple,d as Size,D as State,he as __namedExportsOrder,we as default};

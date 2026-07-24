import{r as v,u as be,c as je,n as ve,j as e,a as H,b as _e}from"./iframe-ifEc15ad.js";import{T as j}from"./Tag-BEM9gEAf.js";import{w as r}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const Se=new Set(["sm","md"]),ze=new Set(["sm","md","lg"]),Ce=_e("Timeline",{defaults:{size:"md",tag:"ol",iconSize:"md"},booleanProps:new Set(["card","alternate","horizontal","labelCol","icon"]),skipProps:["tag"],selfClosing:!1});function t({card:l,alternate:n,horizontal:s,labelCol:a,icon:c,iconSize:u="md",size:b="md",tag:T="ol",children:x,className:g,...f}){const I=v.useRef(null),y=Se.has(u)?u:"md",d=ze.has(b)?b:"md";be(Ce,{card:l,alternate:n,horizontal:s,labelCol:a,icon:c,iconSize:y,size:d,tag:T},je({default:x}),I,{className:g,...f});const _=v.useMemo(()=>{const m=["timeline"];return l&&m.push("timeline_card"),n&&m.push("timeline_alternate"),s&&m.push("timeline_horizontal"),a&&m.push("timeline_label-col"),c&&m.push("timeline_icon"),c&&y==="sm"&&m.push("timeline_icon-sm"),d==="sm"&&m.push("timeline_sm"),d==="lg"&&m.push("timeline_lg"),m},[l,n,s,a,c,y,d]),{class:L,...Q}=f,M=ve(Q),V=T||"ol";return e.jsx(V,{ref:I,className:H(_,g),...M,children:x})}t.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{iconSize:{defaultValue:{value:"'md'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},tag:{defaultValue:{value:"'ol'",computed:!1},required:!1}}};const we=_e("TimelineItem",{defaults:{color:"primary"},booleanProps:new Set(["active","pending","outline"]),selfClosing:!1});function i({color:l="primary",title:n,description:s,time:a,datetime:c,label:u,labelDatetime:b,active:T,pending:x,outline:g,dot:f,meta:I,children:y,className:d,..._}){const L=v.useRef(null);be(we,{color:l,title:n,description:s,time:a,datetime:c,label:u,labelDatetime:b,active:T,pending:x,outline:g},je({default:y,dot:f,meta:I}),L,{className:d,..._});const Q=v.useMemo(()=>{const p=["timeline_item"];return T&&p.push("is-active"),x&&p.push("is-pending"),p},[T,x]),M=v.useMemo(()=>{const p=["timeline_dot"];return g&&p.push("timeline_dot-outline"),l&&p.push(`color_${l}`),p},[g,l]),{class:V,...m}=_,he=ve(m);return e.jsxs("li",{ref:L,className:H(Q,d),...he,children:[u?e.jsx("time",{className:"timeline_label",dateTime:b,children:u}):null,f?e.jsx("span",{className:"timeline_dot","aria-hidden":"true",children:f}):e.jsx("span",{className:H(M),"aria-hidden":"true"}),e.jsxs("div",{className:"timeline_content",children:[y??e.jsxs(e.Fragment,{children:[a?e.jsx("time",{className:"timeline_time",dateTime:c,children:a}):null,n?e.jsx("p",{className:"timeline_title",children:n}):null,s?e.jsx("p",{className:"timeline_desc",children:s}):null]}),I?e.jsx("div",{className:"timeline_meta",children:I}):null]})]})}i.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const ke=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Pe=[{name:"card",type:"boolean",default:"false",description:"카드형 콘텐츠 (timeline_card)"},{name:"alternate",type:"boolean",default:"false",description:"좌우 교차 배치 (timeline_alternate)"},{name:"horizontal",type:"boolean",default:"false",description:"가로 타임라인 (timeline_horizontal)"},{name:"label-col",type:"boolean",default:"false",description:"좌측 라벨 열 (timeline_label-col)"},{name:"icon",type:"boolean",default:"false",description:"아이콘 점 모드 (timeline_icon)"},{name:"icon-size",type:"'sm' | 'md'",default:"md",description:"icon 모드 점 크기 (timeline_icon-sm)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"timeline_sm · timeline_lg"},{name:"tag",type:"string",default:"ol",description:"루트 태그 (ol · ul)"}],De=ke,Ae=[{name:"color",type:"string",default:"primary",description:"점 색상 color_*"},{name:"title",type:"string",default:"—",description:"이벤트 제목 (timeline_title)"},{name:"description",type:"string",default:"—",description:"설명 (timeline_desc)"},{name:"time",type:"string",default:"—",description:"시간 텍스트 (timeline_time)"},{name:"datetime",type:"string",default:"—",description:"time 요소 datetime 속성"},{name:"label",type:"string",default:"—",description:"좌측 라벨 (timeline_label)"},{name:"label-datetime",type:"string",default:"—",description:"라벨 datetime 속성"},{name:"active",type:"boolean",default:"false",description:"진행 중 (is-active)"},{name:"pending",type:"boolean",default:"false",description:"대기·미완료 (is-pending)"},{name:"outline",type:"boolean",default:"false",description:"테두리 점 (timeline_dot-outline)"}],O=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Re=[{name:"default",description:"TimelineItem 자식"}],Ee=[{name:"default",description:"콘텐츠 (title·description 대체)"},{name:"dot",description:"커스텀 점·아이콘"},{name:"meta",description:"하단 메타 (timeline_meta)"}],Le=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Qe=[{name:"timeline",description:"타임라인 루트"},{name:"timeline_card · timeline_alternate · timeline_horizontal",description:"레이아웃 변형"},{name:"timeline_label-col · timeline_icon · timeline_icon-sm",description:"라벨 열·아이콘 모드"},{name:"timeline_sm · timeline_lg",description:"크기"},{name:"timeline_item · timeline_dot · timeline_content",description:"항목 구조"},{name:"timeline_label · timeline_time · timeline_title · timeline_desc",description:"텍스트 파트"},{name:"is-active · is-pending",description:"상태"}],Me=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],He=[{name:"--timeline-gap",default:"var(--space-lg)",description:"항목 간격"},{name:"--timeline-dot-size · --timeline-line-width",default:"10px · 2px",description:"점·연결선"},{name:"--timeline-label-width",default:"4.5rem",description:"라벨 열 너비"},{name:"--timeline-title-size · --timeline-desc-size",default:"—",description:"제목·설명 크기"}],Ve=[{title:"API · Timeline Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 label-col · icon-size는 labelCol · iconSize로 다룹니다.",tables:[{columns:ke,rows:Pe,codeColumn:"name"}]},{title:"API · TimelineItem Props",description:"Vue의 label-datetime은 labelDatetime, HTML datetime 속성은 datetime prop으로 전달합니다.",tables:[{columns:De,rows:Ae,codeColumn:"name"}]},{title:"API · Timeline Children / Slots",description:"Vue default 슬롯은 React children에 대응합니다.",tables:[{columns:O,rows:Re,codeColumn:"name"}]},{title:"API · TimelineItem Children / Slots",description:"Vue dot · meta 슬롯은 React dot · meta prop에 대응합니다.",tables:[{columns:O,rows:Ee,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Le,rows:Qe,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Me,rows:He,codeColumn:"name"}]}],o={card:!1,alternate:!1,horizontal:!1,labelCol:!1,icon:!1,iconSize:"md",size:"md",tag:"ol"},Xe={title:"Components/데이터 표시/Timeline",id:"components-timeline",component:t,subcomponents:{TimelineItem:i},tags:["autodocs"],argTypes:{card:{control:"boolean",type:{name:"boolean",summary:"boolean"}},alternate:{control:"boolean",type:{name:"boolean",summary:"boolean"}},horizontal:{control:"boolean",type:{name:"boolean",summary:"boolean"}},labelCol:{control:"boolean",type:{name:"boolean",summary:"boolean"}},icon:{control:"boolean",type:{name:"boolean",summary:"boolean"}},iconSize:{control:"select",options:["sm","md"],type:{name:"enum",summary:"'sm' | 'md'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},tag:{control:"select",options:["ol","ul"],type:{name:"enum",summary:"'ol' | 'ul'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Ve,docs:{description:{component:"시간순 이벤트·프로세스 흐름을 표시하는 타임라인 컴포넌트입니다."}}}},k={parameters:{controls:{disable:!1}},args:{...o},render:l=>e.jsxs(t,{...l,children:[e.jsx(i,{title:"이벤트 1",time:"09:00"}),e.jsx(i,{title:"이벤트 2",time:"10:30"})]})},h={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function BasicExample() {
  return (
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
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{children:[e.jsx(i,{color:"primary",time:"2024-06-01 10:00",datetime:"2024-06-01",title:"프로젝트 킥오프",description:"팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다."}),e.jsx(i,{color:"success",time:"2024-06-10 14:30",datetime:"2024-06-10",title:"1차 릴리스 완료",description:"MVP 기능이 프로덕션에 배포되었습니다."}),e.jsx(i,{color:"warning",time:"2024-06-15 09:00",datetime:"2024-06-15",title:"성능 이슈 발견",description:"대시보드 로딩 시간이 기준을 초과하여 조사를 시작했습니다."}),e.jsx(i,{color:"danger",time:"2024-06-18 16:00",datetime:"2024-06-18",title:"긴급 패치 배포",description:"인증 관련 보안 취약점을 수정하는 핫픽스를 배포했습니다."})]}))},S={name:"간단",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"제목만 표시하는 간결한 타임라인입니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function SimpleExample() {
  return (
    <Timeline>
      <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
      <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
      <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{children:[e.jsx(i,{color:"primary",title:"주문 접수",time:"오전 9:12",datetime:"2024-06-20"}),e.jsx(i,{color:"primary",title:"배송 준비 중",time:"오전 11:45",datetime:"2024-06-20"}),e.jsx(i,{color:"success",title:"배송 완료",time:"오후 2:30",datetime:"2024-06-21"})]}))},z={name:"아웃라인 도트",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function OutlineExample() {
  return (
    <Timeline>
      <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
      <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
      <TimelineItem
        outline
        color="primary"
        title="개발 단계"
        description="컴포넌트 구현 및 통합 테스트 진행 중"
        active
      />
      <TimelineItem
        outline
        title="배포 단계"
        description="스테이징 검증 후 프로덕션 릴리스 예정"
        pending
      />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{children:[e.jsx(i,{outline:!0,color:"primary",title:"기획 단계",description:"요구사항 정의 및 와이어프레임 작성"}),e.jsx(i,{outline:!0,color:"primary",title:"디자인 단계",description:"UI 키트 및 프로토타입 제작"}),e.jsx(i,{outline:!0,color:"primary",title:"개발 단계",description:"컴포넌트 구현 및 통합 테스트 진행 중",active:!0}),e.jsx(i,{outline:!0,title:"배포 단계",description:"스테이징 검증 후 프로덕션 릴리스 예정",pending:!0})]}))},C={name:"아이콘 도트",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function IconDotExample() {
  return (
    <Timeline icon iconSize="sm">
      <TimelineItem
        color="primary"
        time="2024-06-01"
        datetime="2024-06-01"
        title="팀원 합류"
        description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다."
      />
      <TimelineItem
        color="success"
        time="2024-06-10"
        datetime="2024-06-10"
        title="QA 통과"
        description="회귀 테스트 142건 모두 통과했습니다."
      />
      <TimelineItem
        color="warning"
        time="2024-06-15"
        datetime="2024-06-15"
        title="일정 지연 알림"
        description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다."
      />
      <TimelineItem
        color="danger"
        time="2024-06-18"
        datetime="2024-06-18"
        title="배포 롤백"
        description="결제 모듈 오류로 이전 버전으로 롤백했습니다."
      />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{icon:!0,iconSize:"sm",children:[e.jsx(i,{color:"primary",time:"2024-06-01",datetime:"2024-06-01",title:"팀원 합류",description:"프론트엔드 개발자 2명이 프로젝트에 참여했습니다."}),e.jsx(i,{color:"success",time:"2024-06-10",datetime:"2024-06-10",title:"QA 통과",description:"회귀 테스트 142건 모두 통과했습니다."}),e.jsx(i,{color:"warning",time:"2024-06-15",datetime:"2024-06-15",title:"일정 지연 알림",description:"외부 API 연동 이슈로 1주일 일정이 조정되었습니다."}),e.jsx(i,{color:"danger",time:"2024-06-18",datetime:"2024-06-18",title:"배포 롤백",description:"결제 모듈 오류로 이전 버전으로 롤백했습니다."})]}))},w={name:"카드형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다."},source:{code:`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function CardExample() {
  return (
    <Timeline card>
      <TimelineItem
        color="primary"
        time="2024-06-20 09:00"
        datetime="2024-06-20"
        title="디자인 시스템 v2.0 릴리스"
        description="타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다."
        meta={
          <>
            <Tag color="primary" label="Release" />
            <Tag color="default" label="Design" />
          </>
        }
      />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{card:!0,children:[e.jsx(i,{color:"primary",time:"2024-06-20 09:00",datetime:"2024-06-20",title:"디자인 시스템 v2.0 릴리스",description:"타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다.",meta:e.jsxs(e.Fragment,{children:[e.jsx(j,{color:"primary",label:"Release"}),e.jsx(j,{color:"default",label:"Design"})]})}),e.jsx(i,{color:"success",time:"2024-06-22 14:00",datetime:"2024-06-22",title:"접근성 감사 완료",description:"WCAG 2.2 AA 기준 47개 항목 검토를 마쳤습니다.",meta:e.jsxs(e.Fragment,{children:[e.jsx(j,{color:"success",label:"Passed"}),e.jsx(j,{color:"default",label:"A11y"})]})}),e.jsx(i,{color:"info",time:"2024-06-25 11:30",datetime:"2024-06-25",title:"문서 업데이트 예정",description:"Button · Timeline 컴포넌트 가이드가 추가됩니다.",meta:e.jsx(j,{color:"info",label:"Docs"})})]}))},P={name:"날짜 레이블",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function LabelExample() {
  return (
    <Timeline labelCol>
      <TimelineItem
        label="2024 Q1"
        labelDatetime="2024-01"
        color="primary"
        title="알파 버전 출시"
        description="내부 테스트용 알파 빌드를 배포했습니다."
      />
      <TimelineItem
        label="2024 Q2"
        labelDatetime="2024-04"
        color="primary"
        title="베타 공개"
        description="선택 파트너사 대상 베타 프로그램을 시작했습니다."
      />
      <TimelineItem
        label="2024 Q3"
        labelDatetime="2024-07"
        color="success"
        title="정식 출시"
        description="GA 버전이 프로덕션에 배포되었습니다."
      />
      <TimelineItem
        label="2024 Q4"
        labelDatetime="2024-10"
        color="primary"
        title="엔터프라이즈 기능"
        description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다."
      />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{labelCol:!0,children:[e.jsx(i,{label:"2024 Q1",labelDatetime:"2024-01",color:"primary",title:"알파 버전 출시",description:"내부 테스트용 알파 빌드를 배포했습니다."}),e.jsx(i,{label:"2024 Q2",labelDatetime:"2024-04",color:"primary",title:"베타 공개",description:"선택 파트너사 대상 베타 프로그램을 시작했습니다."}),e.jsx(i,{label:"2024 Q3",labelDatetime:"2024-07",color:"success",title:"정식 출시",description:"GA 버전이 프로덕션에 배포되었습니다."}),e.jsx(i,{label:"2024 Q4",labelDatetime:"2024-10",color:"primary",title:"엔터프라이즈 기능",description:"SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다."})]}))},D={name:"좌우 교차",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function AlternateExample() {
  return (
    <Timeline alternate>
      <TimelineItem
        color="primary"
        time="2024년 3월"
        datetime="2024-03"
        title="회사 설립"
        description="UXKM 팀이 공식적으로 출범했습니다."
      />
      <TimelineItem
        color="primary"
        time="2024년 6월"
        datetime="2024-06"
        title="컴포넌트 가이드 오픈"
        description="HTML 컴포넌트 라이브러리 문서를 공개했습니다."
      />
      <TimelineItem
        color="success"
        time="2024년 9월"
        datetime="2024-09"
        title="1,000 스타 달성"
        description="GitHub 저장소가 1,000 스타를 돌파했습니다."
      />
      <TimelineItem
        color="info"
        time="2025년 1월"
        datetime="2025-01"
        title="v2 로드맵 공개"
        description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다."
      />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{alternate:!0,children:[e.jsx(i,{color:"primary",time:"2024년 3월",datetime:"2024-03",title:"회사 설립",description:"UXKM 팀이 공식적으로 출범했습니다."}),e.jsx(i,{color:"primary",time:"2024년 6월",datetime:"2024-06",title:"컴포넌트 가이드 오픈",description:"HTML 컴포넌트 라이브러리 문서를 공개했습니다."}),e.jsx(i,{color:"success",time:"2024년 9월",datetime:"2024-09",title:"1,000 스타 달성",description:"GitHub 저장소가 1,000 스타를 돌파했습니다."}),e.jsx(i,{color:"info",time:"2025년 1월",datetime:"2025-01",title:"v2 로드맵 공개",description:"다크 모드 · RTL · 접근성 강화 계획을 발표했습니다."})]}))},A={name:"가로형",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function HorizontalExample() {
  return (
    <Timeline horizontal>
      <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
      <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
      <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
      <TimelineItem title="완료" time="예정" pending />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{horizontal:!0,children:[e.jsx(i,{color:"success",title:"신청",time:"6/20",datetime:"2024-06-20"}),e.jsx(i,{color:"success",title:"심사",time:"6/21",datetime:"2024-06-21"}),e.jsx(i,{color:"primary",title:"승인",time:"진행 중",datetime:"2024-06-22",active:!0}),e.jsx(i,{title:"완료",time:"예정",pending:!0})]}))},R={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function SizeExample() {
  return (
    <>
      <div>
        <p style={{ fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)', margin: '0 0 0.75rem' }}>
          Small
        </p>
        <Timeline size="sm">
          <TimelineItem color="primary" title="알림 발송" time="10:30" />
          <TimelineItem color="success" title="수신 확인" time="10:31" />
        </Timeline>
      </div>
      <div>
        <p style={{ fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)', margin: '0 0 0.75rem' }}>
          Large
        </p>
        <Timeline size="lg">
          <TimelineItem
            color="primary"
            title="연간 컨퍼런스"
            description="2024 UX 디자인 서밋 참가"
            time="2024-11-15"
            datetime="2024-11-15"
          />
          <TimelineItem
            color="success"
            title="워크숍 진행"
            description="디자인 토큰 실습 세션"
            time="2024-11-16"
            datetime="2024-11-16"
          />
        </Timeline>
      </div>
    </>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"var(--text-size-sm)",color:"var(--color-text-muted)",margin:"0 0 0.75rem"},children:"Small"}),e.jsxs(t,{size:"sm",children:[e.jsx(i,{color:"primary",title:"알림 발송",time:"10:30"}),e.jsx(i,{color:"success",title:"수신 확인",time:"10:31"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"var(--text-size-sm)",color:"var(--color-text-muted)",margin:"0 0 0.75rem"},children:"Large"}),e.jsxs(t,{size:"lg",children:[e.jsx(i,{color:"primary",title:"연간 컨퍼런스",description:"2024 UX 디자인 서밋 참가",time:"2024-11-15",datetime:"2024-11-15"}),e.jsx(i,{color:"success",title:"워크숍 진행",description:"디자인 토큰 실습 세션",time:"2024-11-16",datetime:"2024-11-16"})]})]})]}))},E={name:"상태",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다."},source:{code:`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function StateExample() {
  return (
    <Timeline>
      <TimelineItem color="success" title="계정 생성" time="완료" />
      <TimelineItem color="success" title="프로필 설정" time="완료" />
      <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
      <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
    </Timeline>
  );
}`,language:"tsx"}}},args:{...o},render:r(e.jsxs(t,{children:[e.jsx(i,{color:"success",title:"계정 생성",time:"완료"}),e.jsx(i,{color:"success",title:"프로필 설정",time:"완료"}),e.jsx(i,{color:"primary",title:"팀 초대",time:"진행 중",active:!0}),e.jsx(i,{title:"첫 프로젝트 생성",time:"대기",pending:!0})]}))};var U,N,G;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Timeline {...args}>
      <TimelineItem title="이벤트 1" time="09:00" />
      <TimelineItem title="이벤트 2" time="10:30" />
    </Timeline>
}`,...(G=(N=k.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var X,F,B;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_dot에 공통 color_* 클래스로 이벤트 유형을 구분합니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function BasicExample() {
  return (
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline>
      <TimelineItem color="primary" time="2024-06-01 10:00" datetime="2024-06-01" title="프로젝트 킥오프" description="팀 미팅을 통해 프로젝트 범위와 일정을 확정했습니다." />
      <TimelineItem color="success" time="2024-06-10 14:30" datetime="2024-06-10" title="1차 릴리스 완료" description="MVP 기능이 프로덕션에 배포되었습니다." />
      <TimelineItem color="warning" time="2024-06-15 09:00" datetime="2024-06-15" title="성능 이슈 발견" description="대시보드 로딩 시간이 기준을 초과하여 조사를 시작했습니다." />
      <TimelineItem color="danger" time="2024-06-18 16:00" datetime="2024-06-18" title="긴급 패치 배포" description="인증 관련 보안 취약점을 수정하는 핫픽스를 배포했습니다." />
    </Timeline>)
}`,...(B=(F=h.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var q,K,W;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '간단',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: '제목만 표시하는 간결한 타임라인입니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function SimpleExample() {
  return (
    <Timeline>
      <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
      <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
      <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline>
      <TimelineItem color="primary" title="주문 접수" time="오전 9:12" datetime="2024-06-20" />
      <TimelineItem color="primary" title="배송 준비 중" time="오전 11:45" datetime="2024-06-20" />
      <TimelineItem color="success" title="배송 완료" time="오후 2:30" datetime="2024-06-21" />
    </Timeline>)
}`,...(W=(K=S.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Z,$,J;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '아웃라인 도트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_dot-outline으로 속이 빈 원형 마커를 사용합니다. 밀도 높은 목록에 적합합니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function OutlineExample() {
  return (
    <Timeline>
      <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
      <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
      <TimelineItem
        outline
        color="primary"
        title="개발 단계"
        description="컴포넌트 구현 및 통합 테스트 진행 중"
        active
      />
      <TimelineItem
        outline
        title="배포 단계"
        description="스테이징 검증 후 프로덕션 릴리스 예정"
        pending
      />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline>
      <TimelineItem outline color="primary" title="기획 단계" description="요구사항 정의 및 와이어프레임 작성" />
      <TimelineItem outline color="primary" title="디자인 단계" description="UI 키트 및 프로토타입 제작" />
      <TimelineItem outline color="primary" title="개발 단계" description="컴포넌트 구현 및 통합 테스트 진행 중" active />
      <TimelineItem outline title="배포 단계" description="스테이징 검증 후 프로덕션 릴리스 예정" pending />
    </Timeline>)
}`,...(J=($=z.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Y,ee,ie;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '아이콘 도트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_icon과 icon_circle을 조합해 이벤트 유형을 아이콘으로 표시합니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function IconDotExample() {
  return (
    <Timeline icon iconSize="sm">
      <TimelineItem
        color="primary"
        time="2024-06-01"
        datetime="2024-06-01"
        title="팀원 합류"
        description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다."
      />
      <TimelineItem
        color="success"
        time="2024-06-10"
        datetime="2024-06-10"
        title="QA 통과"
        description="회귀 테스트 142건 모두 통과했습니다."
      />
      <TimelineItem
        color="warning"
        time="2024-06-15"
        datetime="2024-06-15"
        title="일정 지연 알림"
        description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다."
      />
      <TimelineItem
        color="danger"
        time="2024-06-18"
        datetime="2024-06-18"
        title="배포 롤백"
        description="결제 모듈 오류로 이전 버전으로 롤백했습니다."
      />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline icon iconSize="sm">
      <TimelineItem color="primary" time="2024-06-01" datetime="2024-06-01" title="팀원 합류" description="프론트엔드 개발자 2명이 프로젝트에 참여했습니다." />
      <TimelineItem color="success" time="2024-06-10" datetime="2024-06-10" title="QA 통과" description="회귀 테스트 142건 모두 통과했습니다." />
      <TimelineItem color="warning" time="2024-06-15" datetime="2024-06-15" title="일정 지연 알림" description="외부 API 연동 이슈로 1주일 일정이 조정되었습니다." />
      <TimelineItem color="danger" time="2024-06-18" datetime="2024-06-18" title="배포 롤백" description="결제 모듈 오류로 이전 버전으로 롤백했습니다." />
    </Timeline>)
}`,...(ie=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};var te,me,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '카드형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_card로 콘텐츠 영역에 카드 스타일을 적용합니다. timeline_meta로 태그·액션을 함께 표시할 수 있습니다.'
      },
      source: {
        code: \`import Tag from '@uxkm/ui-react/components/Tag.jsx';
import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function CardExample() {
  return (
    <Timeline card>
      <TimelineItem
        color="primary"
        time="2024-06-20 09:00"
        datetime="2024-06-20"
        title="디자인 시스템 v2.0 릴리스"
        description="타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다."
        meta={
          <>
            <Tag color="primary" label="Release" />
            <Tag color="default" label="Design" />
          </>
        }
      />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline card>
      <TimelineItem color="primary" time="2024-06-20 09:00" datetime="2024-06-20" title="디자인 시스템 v2.0 릴리스" description="타이포그래피·컬러 토큰이 업데이트되었습니다. 기존 컴포넌트와 하위 호환됩니다." meta={<>
            <Tag color="primary" label="Release" />
            <Tag color="default" label="Design" />
          </>} />
      <TimelineItem color="success" time="2024-06-22 14:00" datetime="2024-06-22" title="접근성 감사 완료" description="WCAG 2.2 AA 기준 47개 항목 검토를 마쳤습니다." meta={<>
            <Tag color="success" label="Passed" />
            <Tag color="default" label="A11y" />
          </>} />
      <TimelineItem color="info" time="2024-06-25 11:30" datetime="2024-06-25" title="문서 업데이트 예정" description="Button · Timeline 컴포넌트 가이드가 추가됩니다." meta={<Tag color="info" label="Docs" />} />
    </Timeline>)
}`,...(oe=(me=w.parameters)==null?void 0:me.docs)==null?void 0:oe.source}}};var le,re,ne;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: '날짜 레이블',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_label-col과 timeline_label로 왼쪽에 기간·날짜 열을 배치합니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function LabelExample() {
  return (
    <Timeline labelCol>
      <TimelineItem
        label="2024 Q1"
        labelDatetime="2024-01"
        color="primary"
        title="알파 버전 출시"
        description="내부 테스트용 알파 빌드를 배포했습니다."
      />
      <TimelineItem
        label="2024 Q2"
        labelDatetime="2024-04"
        color="primary"
        title="베타 공개"
        description="선택 파트너사 대상 베타 프로그램을 시작했습니다."
      />
      <TimelineItem
        label="2024 Q3"
        labelDatetime="2024-07"
        color="success"
        title="정식 출시"
        description="GA 버전이 프로덕션에 배포되었습니다."
      />
      <TimelineItem
        label="2024 Q4"
        labelDatetime="2024-10"
        color="primary"
        title="엔터프라이즈 기능"
        description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다."
      />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline labelCol>
      <TimelineItem label="2024 Q1" labelDatetime="2024-01" color="primary" title="알파 버전 출시" description="내부 테스트용 알파 빌드를 배포했습니다." />
      <TimelineItem label="2024 Q2" labelDatetime="2024-04" color="primary" title="베타 공개" description="선택 파트너사 대상 베타 프로그램을 시작했습니다." />
      <TimelineItem label="2024 Q3" labelDatetime="2024-07" color="success" title="정식 출시" description="GA 버전이 프로덕션에 배포되었습니다." />
      <TimelineItem label="2024 Q4" labelDatetime="2024-10" color="primary" title="엔터프라이즈 기능" description="SSO · 감사 로그 · 역할 기반 접근 제어를 추가합니다." />
    </Timeline>)
}`,...(ne=(re=P.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,ce;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '좌우 교차',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_alternate로 768px 이상에서 중앙 축을 기준으로 항목이 좌우로 교차 배치됩니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function AlternateExample() {
  return (
    <Timeline alternate>
      <TimelineItem
        color="primary"
        time="2024년 3월"
        datetime="2024-03"
        title="회사 설립"
        description="UXKM 팀이 공식적으로 출범했습니다."
      />
      <TimelineItem
        color="primary"
        time="2024년 6월"
        datetime="2024-06"
        title="컴포넌트 가이드 오픈"
        description="HTML 컴포넌트 라이브러리 문서를 공개했습니다."
      />
      <TimelineItem
        color="success"
        time="2024년 9월"
        datetime="2024-09"
        title="1,000 스타 달성"
        description="GitHub 저장소가 1,000 스타를 돌파했습니다."
      />
      <TimelineItem
        color="info"
        time="2025년 1월"
        datetime="2025-01"
        title="v2 로드맵 공개"
        description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다."
      />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline alternate>
      <TimelineItem color="primary" time="2024년 3월" datetime="2024-03" title="회사 설립" description="UXKM 팀이 공식적으로 출범했습니다." />
      <TimelineItem color="primary" time="2024년 6월" datetime="2024-06" title="컴포넌트 가이드 오픈" description="HTML 컴포넌트 라이브러리 문서를 공개했습니다." />
      <TimelineItem color="success" time="2024년 9월" datetime="2024-09" title="1,000 스타 달성" description="GitHub 저장소가 1,000 스타를 돌파했습니다." />
      <TimelineItem color="info" time="2025년 1월" datetime="2025-01" title="v2 로드맵 공개" description="다크 모드 · RTL · 접근성 강화 계획을 발표했습니다." />
    </Timeline>)
}`,...(ce=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var de,pe,ue;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '가로형',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_horizontal로 단계·프로세스 흐름을 가로로 표시합니다. 768px 미만에서는 세로형으로 표시됩니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function HorizontalExample() {
  return (
    <Timeline horizontal>
      <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
      <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
      <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
      <TimelineItem title="완료" time="예정" pending />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline horizontal>
      <TimelineItem color="success" title="신청" time="6/20" datetime="2024-06-20" />
      <TimelineItem color="success" title="심사" time="6/21" datetime="2024-06-21" />
      <TimelineItem color="primary" title="승인" time="진행 중" datetime="2024-06-22" active />
      <TimelineItem title="완료" time="예정" pending />
    </Timeline>)
}`,...(ue=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var Te,xe,ge;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'timeline_sm · timeline_lg로 간격과 텍스트 크기를 조절합니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function SizeExample() {
  return (
    <>
      <div>
        <p style={{ fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)', margin: '0 0 0.75rem' }}>
          Small
        </p>
        <Timeline size="sm">
          <TimelineItem color="primary" title="알림 발송" time="10:30" />
          <TimelineItem color="success" title="수신 확인" time="10:31" />
        </Timeline>
      </div>
      <div>
        <p style={{ fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)', margin: '0 0 0.75rem' }}>
          Large
        </p>
        <Timeline size="lg">
          <TimelineItem
            color="primary"
            title="연간 컨퍼런스"
            description="2024 UX 디자인 서밋 참가"
            time="2024-11-15"
            datetime="2024-11-15"
          />
          <TimelineItem
            color="success"
            title="워크숍 진행"
            description="디자인 토큰 실습 세션"
            time="2024-11-16"
            datetime="2024-11-16"
          />
        </Timeline>
      </div>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<>
      <div>
        <p style={{
        fontSize: 'var(--text-size-sm)',
        color: 'var(--color-text-muted)',
        margin: '0 0 0.75rem'
      }}>
          Small
        </p>
        <Timeline size="sm">
          <TimelineItem color="primary" title="알림 발송" time="10:30" />
          <TimelineItem color="success" title="수신 확인" time="10:31" />
        </Timeline>
      </div>
      <div>
        <p style={{
        fontSize: 'var(--text-size-sm)',
        color: 'var(--color-text-muted)',
        margin: '0 0 0.75rem'
      }}>
          Large
        </p>
        <Timeline size="lg">
          <TimelineItem color="primary" title="연간 컨퍼런스" description="2024 UX 디자인 서밋 참가" time="2024-11-15" datetime="2024-11-15" />
          <TimelineItem color="success" title="워크숍 진행" description="디자인 토큰 실습 세션" time="2024-11-16" datetime="2024-11-16" />
        </Timeline>
      </div>
    </>)
}`,...(ge=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var fe,Ie,ye;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: '상태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'is-active로 현재 진행 항목, is-pending으로 예정·미완료 항목을 표시합니다.'
      },
      source: {
        code: \`import Timeline from '@uxkm/ui-react/components/Timeline.jsx';
import TimelineItem from '@uxkm/ui-react/components/TimelineItem.jsx';

export function StateExample() {
  return (
    <Timeline>
      <TimelineItem color="success" title="계정 생성" time="완료" />
      <TimelineItem color="success" title="프로필 설정" time="완료" />
      <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
      <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
    </Timeline>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Timeline>
      <TimelineItem color="success" title="계정 생성" time="완료" />
      <TimelineItem color="success" title="프로필 설정" time="완료" />
      <TimelineItem color="primary" title="팀 초대" time="진행 중" active />
      <TimelineItem title="첫 프로젝트 생성" time="대기" pending />
    </Timeline>)
}`,...(ye=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};const Fe=["Playground","Basic","Simple","Outline","IconDot","Card","Label","Alternate","Horizontal","Size","State"];export{D as Alternate,h as Basic,w as Card,A as Horizontal,C as IconDot,P as Label,z as Outline,k as Playground,S as Simple,R as Size,E as State,Fe as __namedExportsOrder,Xe as default};

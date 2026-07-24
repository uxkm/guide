import{j as a,B as c}from"./iframe-ifEc15ad.js";import{A as na}from"./Avatar-DMEKGziK.js";import{C as i,a as r,b as s,c as e,S as ma}from"./Stat-DXWX60no.js";import{T as k}from"./Tag-BEM9gEAf.js";import{T as pa}from"./TagGroup-DBAM_37Q.js";import{w as o}from"./story-renders-Hdz_JUlO.js";import{c as Ca,a as ua}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";const b=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xa=[{name:"variant",type:"'bordered' | 'shadow' | 'flat'",default:"bordered",description:"카드 스킨. flat은 card_ghost"},{name:"size",type:"'sm' | 'md' | 'lg' | 'compact'",default:"md",description:"card_sm · card_lg · card_compact"},{name:"hoverable",type:"boolean",default:"false",description:"호버 상승 효과 (card_hover)"},{name:"title",type:"string",default:"—",description:"내장 헤더 제목 (CardHeader 없이 사용 시)"},{name:"subtitle",type:"string",default:"—",description:"내장 헤더 부제"},{name:"tag",type:"string",default:"article",description:"루트 HTML 태그"},Ca],ha=b,ya=[{name:"title",type:"string",default:"—",description:"제목 (card_title)"},{name:"subtitle",type:"string",default:"—",description:"부제 (card_subtitle)"}],va=b,_a=[{name:"between",type:"boolean",default:"false",description:"양끝 정렬 (card_footer-between)"}],l=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],fa=[{name:"media",description:"상단 미디어 영역 (card_media)"},{name:"header",description:"헤더 콘텐츠 (title·subtitle 대체)"},{name:"extra",description:"헤더 우측 액션 (card_extra)"},{name:"default",description:"본문·푸터 등 자식 (CardBody · CardFooter)"}],Ba=[{name:"default",description:"헤더 메인 콘텐츠"},{name:"extra",description:"헤더 우측 액션"}],ja=[{name:"default",description:"카드 본문"}],ka=[{name:"default",description:"카드 푸터"}],ba=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ga=[{name:"card",description:"카드 루트"},{name:"card_shadow · card_ghost · card_borderless",description:"스킨 변형"},{name:"card_sm · card_lg · card_compact",description:"크기·패딩"},{name:"card_hover · card_clickable · card_accent",description:"인터랙션·강조"},{name:"card_header · card_body · card_footer · card_media",description:"구조 파트"},{name:"card_title · card_subtitle · card_extra",description:"헤더 파트"},{name:"card_footer-between",description:"푸터 양끝 정렬"},{name:"card_deck · card_deck-2 · card_deck-3",description:"카드 그리드"},{name:"is-disabled",description:"비활성 상태"},...ua],Na=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],wa=[{name:"--card-padding · --card-padding-sm · --card-padding-lg",default:"—",description:"카드 패딩"},{name:"--card-radius · --card-border-color · --card-shadow",default:"—",description:"모서리·테두리·그림자"},{name:"--card-title-size · --card-subtitle-size",default:"—",description:"제목·부제 타이포"},{name:"--card-accent-width · --card-hover-translate",default:"3px · -2px",description:"강조선·호버 이동"}],Ha=a.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),a.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.jsx("path",{d:"M21 15l-5-5L5 21"})]}),Sa=a.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("path",{d:"M14 2v6h6"})]}),za=a.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),Fa=a.jsx("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),Pa=a.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[a.jsx("circle",{cx:"12",cy:"12",r:"1"}),a.jsx("circle",{cx:"19",cy:"12",r:"1"}),a.jsx("circle",{cx:"5",cy:"12",r:"1"})]}),Aa=[{title:"API · Card Props",description:"React에서는 camelCase prop을 사용합니다. Vue media · header · extra 슬롯은 media · header · extra prop에 대응합니다.",tables:[{columns:b,rows:xa,codeColumn:"name"}]},{title:"API · CardHeader Props",tables:[{columns:ha,rows:ya,codeColumn:"name"}]},{title:"API · CardFooter Props",tables:[{columns:va,rows:_a,codeColumn:"name"}]},{title:"API · Card Children / Slots",tables:[{columns:l,rows:fa,codeColumn:"name"}]},{title:"API · CardHeader Children / Slots",tables:[{columns:l,rows:Ba,codeColumn:"name"}]},{title:"API · CardBody Children / Slots",tables:[{columns:l,rows:ja,codeColumn:"name"}]},{title:"API · CardFooter Children / Slots",tables:[{columns:l,rows:ka,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ba,rows:ga,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Na,rows:wa,codeColumn:"name"}]}],d={variant:"bordered",size:"md",hoverable:!1,title:"제목",subtitle:"부제목",tag:"article"},Ga={title:"Components/데이터 표시/Card",id:"components-card",component:e,subcomponents:{CardHeader:s,CardBody:r,CardFooter:i},tags:["autodocs"],argTypes:{variant:{control:"select",options:["bordered","shadow","flat"],type:{name:"enum",summary:"'bordered' | 'shadow' | 'flat'"}},size:{control:"select",options:["sm","md","lg","compact"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'compact'"}},hoverable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},title:{control:"text",type:{name:"string",summary:"string"}},subtitle:{control:"text",type:{name:"string",summary:"string"}},tag:{control:"select",options:["article","section","div"],type:{name:"enum",summary:"'article' | 'section' | 'div'"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:Aa,docs:{description:{component:"콘텐츠 블록을 담는 카드 컴포넌트입니다."}}}},n={parameters:{controls:{disable:!1}},args:{...d},render:t=>a.jsxs(e,{...t,children:[a.jsx(s,{title:"카드 제목"}),a.jsx(r,{children:a.jsx("p",{children:"카드 본문입니다."})})]})},m={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card_header · card_body · card_footer 구조를 가집니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function BasicExample() {
  return (
    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs(e,{style:{maxWidth:360,width:"100%"},children:[a.jsx(s,{title:"카드 제목",subtitle:"부제목 또는 메타 정보"}),a.jsx(r,{children:"카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다."}),a.jsxs(i,{children:[a.jsx(c,{variant:"filled",color:"primary",size:"sm",label:"확인"}),a.jsx(c,{variant:"ghost",size:"sm",label:"취소"})]})]}))},p={name:"간단",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"header나 footer 없이 body만 사용하는 단순 카드입니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function SimpleExample() {
  return (
    <>
      <Card variant="shadow" size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>
          <p className="card_title">알림</p>
          새로운 메시지가 도착했습니다. 확인해 주세요.
        </CardBody>
      </Card>
      <Card size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody>
      </Card>
    </>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs(a.Fragment,{children:[a.jsx(e,{variant:"shadow",size:"compact",style:{maxWidth:280,width:"100%"},children:a.jsxs(r,{children:[a.jsx("p",{className:"card_title",children:"알림"}),"새로운 메시지가 도착했습니다. 확인해 주세요."]})}),a.jsx(e,{size:"compact",style:{maxWidth:280,width:"100%"},children:a.jsx(r,{children:"컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다."})})]}))},C={name:"스킨",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function SkinExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card>
        <CardBody>기본 — 테두리 · 그림자</CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>Shadow — 그림자</CardBody>
      </Card>
      <Card className="card_elevated">
        <CardBody>Elevated — 강한 그림자</CardBody>
      </Card>
      <Card variant="flat">
        <CardBody>Ghost — 투명 배경</CardBody>
      </Card>
    </div>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs("div",{className:"card_deck card_deck-2",children:[a.jsx(e,{children:a.jsx(r,{children:"기본 — 테두리 · 그림자"})}),a.jsx(e,{variant:"shadow",children:a.jsx(r,{children:"Shadow — 그림자"})}),a.jsx(e,{className:"card_elevated",children:a.jsx(r,{children:"Elevated — 강한 그림자"})}),a.jsx(e,{variant:"flat",children:a.jsx(r,{children:"Ghost — 투명 배경"})})]}))},u={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"size로 패딩과 제목 크기를 조절합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function SizeExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card size="sm">
        <CardHeader title="Small" />
        <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
      </Card>
      <Card>
        <CardHeader title="Medium" />
        <CardBody>기본 크기 카드입니다.</CardBody>
      </Card>
      <Card size="lg">
        <CardHeader title="Large" />
        <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
      </Card>
    </div>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs("div",{className:"card_deck card_deck-2",children:[a.jsxs(e,{size:"sm",children:[a.jsx(s,{title:"Small"}),a.jsx(r,{children:"작은 카드 — 좁은 패딩과 작은 제목."})]}),a.jsxs(e,{children:[a.jsx(s,{title:"Medium"}),a.jsx(r,{children:"기본 크기 카드입니다."})]}),a.jsxs(e,{size:"lg",children:[a.jsx(s,{title:"Large"}),a.jsx(r,{children:"큰 카드 — 넓은 패딩과 큰 제목."})]})]}))},x={name:"강조 테두리",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card_accent와 color_*로 왼쪽 강조선을 적용합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function AccentExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card className="card_accent color_primary">
        <CardBody>
          <p className="card_title">정보</p>
          시스템 업데이트가 예정되어 있습니다.
        </CardBody>
      </Card>
    </div>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs("div",{className:"card_deck card_deck-2",children:[a.jsx(e,{className:"card_accent color_primary",children:a.jsxs(r,{children:[a.jsx("p",{className:"card_title",children:"정보"}),"시스템 업데이트가 예정되어 있습니다."]})}),a.jsx(e,{className:"card_accent color_success",children:a.jsxs(r,{children:[a.jsx("p",{className:"card_title",children:"성공"}),"작업이 정상적으로 완료되었습니다."]})}),a.jsx(e,{className:"card_accent color_warning",children:a.jsxs(r,{children:[a.jsx("p",{className:"card_title",children:"주의"}),"저장 공간이 부족합니다."]})}),a.jsx(e,{className:"card_accent color_danger",children:a.jsxs(r,{children:[a.jsx("p",{className:"card_title",children:"오류"}),"연결에 실패했습니다. 다시 시도해 주세요."]})})]}))},h={name:"미디어",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card_media로 상단 이미지·썸네일 영역을 추가합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function MediaExample() {
  return (
    <Card
      hoverable
      variant="shadow"
      style={{ maxWidth: 320, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          {MediaIcon}
        </div>
      }
    >
      ...
    </Card>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs(e,{hoverable:!0,variant:"shadow",style:{maxWidth:320,width:"100%"},media:a.jsx("div",{className:"card_media card_media-placeholder",role:"img","aria-label":"프로젝트 썸네일",children:Ha}),children:[a.jsxs(s,{children:[a.jsxs("div",{className:"card_header-row",children:[a.jsx("h3",{className:"card_title",children:"프로젝트 Alpha"}),a.jsx(k,{size:"sm",color:"primary",label:"진행 중"})]}),a.jsx("p",{className:"card_subtitle",children:"업데이트 · 2일 전"})]}),a.jsx(r,{children:"디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다."}),a.jsxs(i,{between:!0,children:[a.jsx("span",{className:"color_muted size_sm",children:"3명 참여"}),a.jsx(c,{variant:"text",color:"primary",size:"sm",label:"자세히"})]})]}))},y={name:"가로",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function HorizontalExample() {
  return (
    <Card
      className="card_horizontal"
      variant="shadow"
      style={{ maxWidth: 480, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          {DocIcon}
        </div>
      }
    >
      <div className="card_inner">
        <CardHeader title="가이드 문서" />
        <CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody>
        <CardFooter>
          <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
            문서 보기
          </a>
        </CardFooter>
      </div>
    </Card>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsx(e,{className:"card_horizontal",variant:"shadow",style:{maxWidth:480,width:"100%"},media:a.jsx("div",{className:"card_media card_media-placeholder",role:"img","aria-label":"문서 썸네일",children:Sa}),children:a.jsxs("div",{className:"card_inner",children:[a.jsx(s,{title:"가이드 문서"}),a.jsx(r,{children:"HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요."}),a.jsx(i,{children:a.jsx("a",{href:"#",className:"link color_primary size_sm",onClick:t=>t.preventDefault(),children:"문서 보기"})})]})}))},v={name:"아이콘 · 통계",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function IconExample() {
  return (
    <div className="card_deck">
      <Card variant="shadow" hoverable>
        <CardBody>
          <span className="card_icon color_primary" aria-hidden="true">
            {BoltIcon}
          </span>
          <h3 className="card_title">빠른 성능</h3>
          <p className="card_subtitle">가벼운 번들, 빠른 로딩</p>
        </CardBody>
      </Card>
    </div>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs("div",{className:"card_deck",children:[a.jsx(e,{variant:"shadow",hoverable:!0,children:a.jsxs(r,{children:[a.jsx("span",{className:"card_icon color_primary","aria-hidden":"true",children:za}),a.jsx("h3",{className:"card_title",children:"빠른 성능"}),a.jsx("p",{className:"card_subtitle",children:"가벼운 번들, 빠른 로딩"})]})}),a.jsx(e,{variant:"shadow",hoverable:!0,children:a.jsxs(r,{children:[a.jsx("span",{className:"card_icon color_success","aria-hidden":"true",children:Fa}),a.jsx("h3",{className:"card_title",children:"접근성"}),a.jsx("p",{className:"card_subtitle",children:"WCAG 2.2 AA 기준"})]})}),a.jsx(e,{variant:"shadow",children:a.jsx(r,{children:a.jsx(ma,{title:"월간 활성 사용자",value:"24.5K",description:"+18.2%",trendColor:"success"})})})]}))},_={name:"프로필",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';
import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function ProfileExample() {
  return (
    <Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}>
      <CardHeader
        extra={
          <Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={MoreIcon} />
        }
      >
        <div className="card_header-row">
          <Avatar color="primary" initials="홍" ariaHidden />
          <div>
            <h3 className="card_title">홍길동</h3>
            <p className="card_subtitle">프론트엔드 개발자</p>
          </div>
        </div>
      </CardHeader>
      ...
    </Card>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs(e,{variant:"shadow",style:{maxWidth:320,width:"100%"},children:[a.jsx(s,{extra:a.jsx(c,{variant:"ghost",size:"sm",iconOnly:!0,ariaLabel:"더 보기",iconBefore:Pa}),children:a.jsxs("div",{className:"card_header-row",children:[a.jsx(na,{color:"primary",initials:"홍",ariaHidden:!0}),a.jsxs("div",{children:[a.jsx("h3",{className:"card_title",children:"홍길동"}),a.jsx("p",{className:"card_subtitle",children:"프론트엔드 개발자"})]})]})}),a.jsx(r,{children:a.jsxs(pa,{tight:!0,children:[a.jsx(k,{size:"sm",color:"primary",label:"React"}),a.jsx(k,{size:"sm",color:"primary",label:"TypeScript"}),a.jsx(k,{size:"sm",color:"default",label:"SCSS"})]})}),a.jsxs(i,{between:!0,children:[a.jsx("span",{className:"color_muted size_sm",children:"서울 · 온라인"}),a.jsx(c,{variant:"outline",color:"primary",size:"sm",label:"팔로우"})]})]}))},f={name:"클릭 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. hoverable과 함께 사용합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function ClickableExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card
        tag="a"
        href="#"
        hoverable
        className="card_clickable"
        onClick={(e) => e.preventDefault()}
      >
        <CardBody>
          <h3 className="card_title">링크 카드</h3>
          <p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
    </div>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs("div",{className:"card_deck card_deck-2",children:[a.jsx(e,{tag:"a",href:"#",hoverable:!0,className:"card_clickable",onClick:t=>t.preventDefault(),children:a.jsxs(r,{children:[a.jsx("h3",{className:"card_title",children:"링크 카드"}),a.jsx("p",{className:"card_subtitle",children:"클릭하면 상세 페이지로 이동합니다."})]})}),a.jsx(e,{hoverable:!0,variant:"shadow",className:"card_clickable",tabIndex:0,role:"link",children:a.jsxs(r,{children:[a.jsx("h3",{className:"card_title",children:"인터랙티브 카드"}),a.jsx("p",{className:"card_subtitle",children:"tabindex와 role로 키보드 접근을 지원합니다."})]})})]}))},B={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"is-disabled로 비활성 상태를 표시합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function DisabledExample() {
  return (
    <Card className="is-disabled" style={{ maxWidth: 280, width: '100%' }}>
      <CardBody>
        <h3 className="card_title">비활성 카드</h3>
        <p className="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsx(e,{className:"is-disabled",style:{maxWidth:280,width:"100%"},children:a.jsxs(r,{children:[a.jsx("h3",{className:"card_title",children:"비활성 카드"}),a.jsx("p",{className:"card_subtitle",children:"현재 이용할 수 없습니다."})]})}))},j={name:"카드 그리드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function GridExample() {
  return (
    <div className="card_deck">
      <Card hoverable>
        <CardHeader title="Feature A" />
        <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature B" />
        <CardBody>접근성을 고려한 마크업 구조.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature C" />
        <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
      </Card>
    </div>
  );
}`,language:"tsx"}}},args:{...d},render:o(a.jsxs("div",{className:"card_deck",children:[a.jsxs(e,{hoverable:!0,children:[a.jsx(s,{title:"Feature A"}),a.jsx(r,{children:"빠른 성능과 가벼운 번들 크기."})]}),a.jsxs(e,{hoverable:!0,children:[a.jsx(s,{title:"Feature B"}),a.jsx(r,{children:"접근성을 고려한 마크업 구조."})]}),a.jsxs(e,{hoverable:!0,children:[a.jsx(s,{title:"Feature C"}),a.jsx(r,{children:"Pure SCSS로 커스터마이즈 가능."})]})]}))};var g,N,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Card {...args}>
      <CardHeader title="카드 제목" />
      <CardBody>
        <p>카드 본문입니다.</p>
      </CardBody>
    </Card>
}`,...(w=(N=n.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var H,S,z;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'card_header · card_body · card_footer 구조를 가집니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function BasicExample() {
  return (
    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Card style={{
    maxWidth: 360,
    width: '100%'
  }}>
      <CardHeader title="카드 제목" subtitle="부제목 또는 메타 정보" />
      <CardBody>카드 본문 영역입니다. 관련 콘텐츠, 설명, 데이터를 담을 수 있습니다.</CardBody>
      <CardFooter>
        <Button variant="filled" color="primary" size="sm" label="확인" />
        <Button variant="ghost" size="sm" label="취소" />
      </CardFooter>
    </Card>)
}`,...(z=(S=m.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var F,P,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '간단',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'header나 footer 없이 body만 사용하는 단순 카드입니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function SimpleExample() {
  return (
    <>
      <Card variant="shadow" size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>
          <p className="card_title">알림</p>
          새로운 메시지가 도착했습니다. 확인해 주세요.
        </CardBody>
      </Card>
      <Card size="compact" style={{ maxWidth: 280, width: '100%' }}>
        <CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody>
      </Card>
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
      <Card variant="shadow" size="compact" style={{
      maxWidth: 280,
      width: '100%'
    }}>
        <CardBody>
          <p className="card_title">알림</p>
          새로운 메시지가 도착했습니다. 확인해 주세요.
        </CardBody>
      </Card>
      <Card size="compact" style={{
      maxWidth: 280,
      width: '100%'
    }}>
        <CardBody>컴팩트 카드 — 좁은 패딩으로 밀도 높은 정보를 표시합니다.</CardBody>
      </Card>
    </>)
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var W,I,E;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '스킨',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '기본은 테두리·그림자가 적용됩니다. variant로 외형을 조절합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function SkinExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card>
        <CardBody>기본 — 테두리 · 그림자</CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>Shadow — 그림자</CardBody>
      </Card>
      <Card className="card_elevated">
        <CardBody>Elevated — 강한 그림자</CardBody>
      </Card>
      <Card variant="flat">
        <CardBody>Ghost — 투명 배경</CardBody>
      </Card>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<div className="card_deck card_deck-2">
      <Card>
        <CardBody>기본 — 테두리 · 그림자</CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>Shadow — 그림자</CardBody>
      </Card>
      <Card className="card_elevated">
        <CardBody>Elevated — 강한 그림자</CardBody>
      </Card>
      <Card variant="flat">
        <CardBody>Ghost — 투명 배경</CardBody>
      </Card>
    </div>)
}`,...(E=(I=C.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var D,M,T;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'size로 패딩과 제목 크기를 조절합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function SizeExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card size="sm">
        <CardHeader title="Small" />
        <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
      </Card>
      <Card>
        <CardHeader title="Medium" />
        <CardBody>기본 크기 카드입니다.</CardBody>
      </Card>
      <Card size="lg">
        <CardHeader title="Large" />
        <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
      </Card>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<div className="card_deck card_deck-2">
      <Card size="sm">
        <CardHeader title="Small" />
        <CardBody>작은 카드 — 좁은 패딩과 작은 제목.</CardBody>
      </Card>
      <Card>
        <CardHeader title="Medium" />
        <CardBody>기본 크기 카드입니다.</CardBody>
      </Card>
      <Card size="lg">
        <CardHeader title="Large" />
        <CardBody>큰 카드 — 넓은 패딩과 큰 제목.</CardBody>
      </Card>
    </div>)
}`,...(T=(M=u.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var R,L,G;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '강조 테두리',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'card_accent와 color_*로 왼쪽 강조선을 적용합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function AccentExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card className="card_accent color_primary">
        <CardBody>
          <p className="card_title">정보</p>
          시스템 업데이트가 예정되어 있습니다.
        </CardBody>
      </Card>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<div className="card_deck card_deck-2">
      <Card className="card_accent color_primary">
        <CardBody>
          <p className="card_title">정보</p>
          시스템 업데이트가 예정되어 있습니다.
        </CardBody>
      </Card>
      <Card className="card_accent color_success">
        <CardBody>
          <p className="card_title">성공</p>
          작업이 정상적으로 완료되었습니다.
        </CardBody>
      </Card>
      <Card className="card_accent color_warning">
        <CardBody>
          <p className="card_title">주의</p>
          저장 공간이 부족합니다.
        </CardBody>
      </Card>
      <Card className="card_accent color_danger">
        <CardBody>
          <p className="card_title">오류</p>
          연결에 실패했습니다. 다시 시도해 주세요.
        </CardBody>
      </Card>
    </div>)
}`,...(G=(L=x.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var O,V,K;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '미디어',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'card_media로 상단 이미지·썸네일 영역을 추가합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function MediaExample() {
  return (
    <Card
      hoverable
      variant="shadow"
      style={{ maxWidth: 320, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          {MediaIcon}
        </div>
      }
    >
      ...
    </Card>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Card hoverable variant="shadow" style={{
    maxWidth: 320,
    width: '100%'
  }} media={<div className="card_media card_media-placeholder" role="img" aria-label="프로젝트 썸네일">
          {MediaIcon}
        </div>}>
      <CardHeader>
        <div className="card_header-row">
          <h3 className="card_title">프로젝트 Alpha</h3>
          <Tag size="sm" color="primary" label="진행 중" />
        </div>
        <p className="card_subtitle">업데이트 · 2일 전</p>
      </CardHeader>
      <CardBody>디자인 시스템 구축 및 컴포넌트 라이브러리 개발 프로젝트입니다.</CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">3명 참여</span>
        <Button variant="text" color="primary" size="sm" label="자세히" />
      </CardFooter>
    </Card>)
}`,...(K=(V=h.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var q,J,Q;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '가로',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'card_horizontal로 미디어와 콘텐츠를 나란히 배치합니다. card_inner로 본문을 감쌉니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function HorizontalExample() {
  return (
    <Card
      className="card_horizontal"
      variant="shadow"
      style={{ maxWidth: 480, width: '100%' }}
      media={
        <div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          {DocIcon}
        </div>
      }
    >
      <div className="card_inner">
        <CardHeader title="가이드 문서" />
        <CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody>
        <CardFooter>
          <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
            문서 보기
          </a>
        </CardFooter>
      </div>
    </Card>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Card className="card_horizontal" variant="shadow" style={{
    maxWidth: 480,
    width: '100%'
  }} media={<div className="card_media card_media-placeholder" role="img" aria-label="문서 썸네일">
          {DocIcon}
        </div>}>
      <div className="card_inner">
        <CardHeader title="가이드 문서" />
        <CardBody>HTML 컴포넌트 사용법과 접근성 가이드를 확인하세요.</CardBody>
        <CardFooter>
          <a href="#" className="link color_primary size_sm" onClick={e => e.preventDefault()}>
            문서 보기
          </a>
        </CardFooter>
      </div>
    </Card>)
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '아이콘 · 통계',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'card_icon · card_stat으로 기능 소개·지표 카드를 구성합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function IconExample() {
  return (
    <div className="card_deck">
      <Card variant="shadow" hoverable>
        <CardBody>
          <span className="card_icon color_primary" aria-hidden="true">
            {BoltIcon}
          </span>
          <h3 className="card_title">빠른 성능</h3>
          <p className="card_subtitle">가벼운 번들, 빠른 로딩</p>
        </CardBody>
      </Card>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<div className="card_deck">
      <Card variant="shadow" hoverable>
        <CardBody>
          <span className="card_icon color_primary" aria-hidden="true">
            {BoltIcon}
          </span>
          <h3 className="card_title">빠른 성능</h3>
          <p className="card_subtitle">가벼운 번들, 빠른 로딩</p>
        </CardBody>
      </Card>
      <Card variant="shadow" hoverable>
        <CardBody>
          <span className="card_icon color_success" aria-hidden="true">
            {ShieldIcon}
          </span>
          <h3 className="card_title">접근성</h3>
          <p className="card_subtitle">WCAG 2.2 AA 기준</p>
        </CardBody>
      </Card>
      <Card variant="shadow">
        <CardBody>
          <Stat title="월간 활성 사용자" value="24.5K" description="+18.2%" trendColor="success" />
        </CardBody>
      </Card>
    </div>)
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,aa;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '프로필',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'card_avatar · card_extra로 사용자·엔티티 정보 카드를 만듭니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';
import Tag from '@uxkm/ui-react/components/Tag.jsx';

export function ProfileExample() {
  return (
    <Card variant="shadow" style={{ maxWidth: 320, width: '100%' }}>
      <CardHeader
        extra={
          <Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={MoreIcon} />
        }
      >
        <div className="card_header-row">
          <Avatar color="primary" initials="홍" ariaHidden />
          <div>
            <h3 className="card_title">홍길동</h3>
            <p className="card_subtitle">프론트엔드 개발자</p>
          </div>
        </div>
      </CardHeader>
      ...
    </Card>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Card variant="shadow" style={{
    maxWidth: 320,
    width: '100%'
  }}>
      <CardHeader extra={<Button variant="ghost" size="sm" iconOnly ariaLabel="더 보기" iconBefore={MoreIcon} />}>
        <div className="card_header-row">
          <Avatar color="primary" initials="홍" ariaHidden />
          <div>
            <h3 className="card_title">홍길동</h3>
            <p className="card_subtitle">프론트엔드 개발자</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <TagGroup tight>
          <Tag size="sm" color="primary" label="React" />
          <Tag size="sm" color="primary" label="TypeScript" />
          <Tag size="sm" color="default" label="SCSS" />
        </TagGroup>
      </CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">서울 · 온라인</span>
        <Button variant="outline" color="primary" size="sm" label="팔로우" />
      </CardFooter>
    </Card>)
}`,...(aa=($=_.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ra,ea,da;f.parameters={...f.parameters,docs:{...(ra=f.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: '클릭 가능',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'a 태그 또는 card_clickable로 전체 카드를 링크·버튼으로 만듭니다. hoverable과 함께 사용합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function ClickableExample() {
  return (
    <div className="card_deck card_deck-2">
      <Card
        tag="a"
        href="#"
        hoverable
        className="card_clickable"
        onClick={(e) => e.preventDefault()}
      >
        <CardBody>
          <h3 className="card_title">링크 카드</h3>
          <p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<div className="card_deck card_deck-2">
      <Card tag="a" href="#" hoverable className="card_clickable" onClick={e => e.preventDefault()}>
        <CardBody>
          <h3 className="card_title">링크 카드</h3>
          <p className="card_subtitle">클릭하면 상세 페이지로 이동합니다.</p>
        </CardBody>
      </Card>
      <Card hoverable variant="shadow" className="card_clickable" tabIndex={0} role="link">
        <CardBody>
          <h3 className="card_title">인터랙티브 카드</h3>
          <p className="card_subtitle">tabindex와 role로 키보드 접근을 지원합니다.</p>
        </CardBody>
      </Card>
    </div>)
}`,...(da=(ea=f.parameters)==null?void 0:ea.docs)==null?void 0:da.source}}};var sa,oa,ta;B.parameters={...B.parameters,docs:{...(sa=B.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: '비활성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'is-disabled로 비활성 상태를 표시합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';

export function DisabledExample() {
  return (
    <Card className="is-disabled" style={{ maxWidth: 280, width: '100%' }}>
      <CardBody>
        <h3 className="card_title">비활성 카드</h3>
        <p className="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Card className="is-disabled" style={{
    maxWidth: 280,
    width: '100%'
  }}>
      <CardBody>
        <h3 className="card_title">비활성 카드</h3>
        <p className="card_subtitle">현재 이용할 수 없습니다.</p>
      </CardBody>
    </Card>)
}`,...(ta=(oa=B.parameters)==null?void 0:oa.docs)==null?void 0:ta.source}}};var ca,ia,la;j.parameters={...j.parameters,docs:{...(ca=j.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: '카드 그리드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'card_deck으로 여러 카드를 그리드로 배치합니다. card_deck-2 · card_deck-3로 열 수를 조절합니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';

export function GridExample() {
  return (
    <div className="card_deck">
      <Card hoverable>
        <CardHeader title="Feature A" />
        <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature B" />
        <CardBody>접근성을 고려한 마크업 구조.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature C" />
        <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
      </Card>
    </div>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<div className="card_deck">
      <Card hoverable>
        <CardHeader title="Feature A" />
        <CardBody>빠른 성능과 가벼운 번들 크기.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature B" />
        <CardBody>접근성을 고려한 마크업 구조.</CardBody>
      </Card>
      <Card hoverable>
        <CardHeader title="Feature C" />
        <CardBody>Pure SCSS로 커스터마이즈 가능.</CardBody>
      </Card>
    </div>)
}`,...(la=(ia=j.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};const Oa=["Playground","Basic","Simple","Skin","Size","Accent","Media","Horizontal","Icon","Profile","Clickable","Disabled","Grid"];export{x as Accent,m as Basic,f as Clickable,B as Disabled,j as Grid,y as Horizontal,v as Icon,h as Media,n as Playground,_ as Profile,p as Simple,u as Size,C as Skin,Oa as __namedExportsOrder,Ga as default};

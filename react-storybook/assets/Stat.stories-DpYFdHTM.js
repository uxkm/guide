import{j as e}from"./iframe-DS-82CEY.js";import{S as t,c as U,b as O,a as q,C as J}from"./Stat-gtWbvrXq.js";import{w as s}from"./story-renders-DjJEfxtm.js";import"./preload-helper-DUxc-Dqw.js";const Q=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],X=[{name:"title",type:"string",default:"—",description:"지표 라벨 (stat_label)"},{name:"value",type:"string",default:"—",description:"주요 수치 (stat_value)"},{name:"prefix",type:"string",default:"—",description:"값 앞 접두 (stat_prefix)"},{name:"suffix",type:"string",default:"—",description:"값 뒤 접미 (stat_suffix)"},{name:"description",type:"string",default:"—",description:"보조 설명 (stat_desc)"},{name:"trend",type:"string",default:"—",description:"증감 텍스트 (stat_trend)"},{name:"trendColor",type:"string",default:"—",description:"trend·description 색상 color_*"},{name:"trendIcon",type:"ReactNode",default:"—",description:"증감 아이콘 (기본 chevron-up 대체)"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"stat_sm · stat_lg"},{name:"card",type:"boolean",default:"false",description:"카드형 배경 (stat_card)"},{name:"shadow",type:"boolean",default:"false",description:"그림자 (stat_shadow)"},{name:"className",type:"string",default:"—",description:"stat 루트에 추가 클래스 (stat_horizontal 등)"}],Y=[{key:"name",label:"Children / Prop"},{key:"description",label:"설명"}],Z=[{name:"value",description:"수치 커스텀 (value prop 대체, Vue #value 슬롯 대응)"},{name:"trendIcon",description:"증감 아이콘 (Vue #trend-icon 슬롯 대응)"},{name:"children",description:"아이콘·커스텀 레이아웃 등 (Vue default 슬롯 대응)"}],$=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ee=[{name:"stat",description:"지표 루트"},{name:"stat_sm · stat_lg",description:"크기 변형"},{name:"stat_card · stat_shadow",description:"카드·그림자"},{name:"stat_header · stat_label · stat_value-row",description:"레이아웃 파트"},{name:"stat_value · stat_prefix · stat_suffix · stat_desc · stat_trend",description:"값·설명 파트"},{name:"stat_group · stat_group-2 · stat_group-3 · stat_group-4",description:"지표 그리드"},{name:"stat_horizontal",description:"아이콘+값 가로 배치"}],te=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ae=[{name:"--stat-value-size · --stat-value-size-sm · --stat-value-size-lg",default:"1.75rem · 1.25rem · 2.25rem",description:"수치 크기"},{name:"--stat-label-size · --stat-desc-size",default:"var(--text-size-sm)",description:"라벨·설명 크기"},{name:"--stat-group-gap · --stat-card-padding",default:"var(--space-lg) · var(--space-lg)",description:"그룹 간격·카드 패딩"}],se=e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})]}),re=[{title:"API · Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 trend-color는 trendColor로 다룹니다.",tables:[{columns:Q,rows:X,codeColumn:"name"}]},{title:"API · Children",description:"Vue value · trend-icon · default 슬롯은 React value · trendIcon · children에 대응합니다.",tables:[{columns:Y,rows:Z,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:$,rows:ee,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:te,rows:ae,codeColumn:"name"}]}],a={title:"제목",value:"1",prefix:"",suffix:"",description:"설명 텍스트입니다.",trend:"",trendColor:"success",size:"md",card:!1,shadow:!1},ce={title:"Components/데이터 표시/Stat",id:"components-stat",component:t,tags:["autodocs"],argTypes:{title:{control:"text",type:{name:"string",summary:"string"}},value:{control:"text",type:{name:"string",summary:"string"}},prefix:{control:"text",type:{name:"string",summary:"string"}},suffix:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},trend:{control:"text",type:{name:"string",summary:"string"}},trendColor:{control:"select",options:["success","warning","danger"],type:{name:"enum",summary:"'success' | 'warning' | 'danger'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},card:{control:"boolean",type:{name:"boolean",summary:"boolean"}},shadow:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:re,docs:{description:{component:"핵심 지표·수치를 표시하는 Stat 컴포넌트입니다."}}}},r={parameters:{controls:{disable:!1}},args:{...a},render:v=>e.jsx(t,{...v})},o={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"title · value · description으로 지표를 구성합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function BasicExample() {
  return (
    <Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trendColor="success"
    />
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsx(t,{title:"총 사용자",value:"12,345",description:"+12.5% 지난 달 대비",trendColor:"success"}))},n={name:"접두 · 접미",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"prefix · suffix로 통화·단위를 표시합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function PrefixExample() {
  return (
    <>
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
    </>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"총 매출",prefix:"₩",value:"4,280,000",description:"+8.2%",trendColor:"success"}),e.jsx(t,{title:"전환율",value:"3.6",suffix:"%",description:"-0.4%p",trendColor:"danger"}),e.jsx(t,{title:"평균 응답 시간",value:"128",suffix:"ms"})]}))},l={name:"추세",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"trend로 증감 방향을 아이콘과 함께 표시합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function TrendExample() {
  return (
    <>
      <Stat
        title="월간 매출"
        prefix="₩"
        value="4.2M"
        trend="+8.2%"
        trendColor="success"
        description="전월 대비"
        card
        shadow
      />
      <Stat
        title="이탈률"
        value="2.4"
        suffix="%"
        trend="+0.3%p"
        trendColor="danger"
        trendIcon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        }
        card
        shadow
      />
    </>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"월간 매출",prefix:"₩",value:"4.2M",trend:"+8.2%",trendColor:"success",description:"전월 대비",card:!0,shadow:!0}),e.jsx(t,{title:"이탈률",value:"2.4",suffix:"%",trend:"+0.3%p",trendColor:"danger",trendIcon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"m6 9 6 6 6-6"})}),card:!0,shadow:!0})]}))},i={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"size로 수치 스케일을 조절합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function SizeExample() {
  return (
    <>
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
    </>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",card:!0,title:"Small",value:"1,024"}),e.jsx(t,{card:!0,title:"Medium",value:"8,192"}),e.jsx(t,{size:"lg",card:!0,title:"Large",value:"64K"})]}))},c={name:"레이아웃",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"stat_horizontal · stat_inline · stat_row로 배치를 변경합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function LayoutExample() {
  return (
    <>
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow>
        <span className="stat_icon-wrap color_primary" aria-hidden="true">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </span>
        <div className="stat_body">
          <span className="stat_label">팀 멤버</span>
          <span className="stat_value">48</span>
          <span className="stat_desc color_success">4명 신규 합류</span>
        </div>
      </Stat>
    </>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs(e.Fragment,{children:[e.jsx(t,{className:"stat_horizontal",card:!0,title:"활성 세션",value:"342"}),e.jsx(t,{className:"stat_inline",card:!0,title:"CPU 사용률",value:"68",suffix:"%"}),e.jsxs(t,{className:"stat_row",card:!0,shadow:!0,children:[e.jsx("span",{className:"stat_icon-wrap color_primary","aria-hidden":"true",children:se}),e.jsxs("div",{className:"stat_body",children:[e.jsx("span",{className:"stat_label",children:"팀 멤버"}),e.jsx("span",{className:"stat_value",children:"48"}),e.jsx("span",{className:"stat_desc color_success",children:"4명 신규 합류"})]})]})]}))},d={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function IconExample() {
  return (
    <>
      <Stat card>
        <span className="stat_icon color_primary">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <span className="stat_label">다운로드</span>
        <span className="stat_value">2,847</span>
        <span className="stat_desc color_success">+24%</span>
      </Stat>
      <Stat className="stat_row" card>
        <span className="stat_icon-wrap color_success" aria-hidden="true">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </span>
        <div className="stat_body">
          <span className="stat_label">완료율</span>
          <div className="stat_value-row">
            <span className="stat_value">94</span>
            <span className="stat_suffix">%</span>
          </div>
        </div>
      </Stat>
    </>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs(e.Fragment,{children:[e.jsxs(t,{card:!0,children:[e.jsx("span",{className:"stat_icon color_primary",children:e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}),e.jsx("span",{className:"stat_label",children:"다운로드"}),e.jsx("span",{className:"stat_value",children:"2,847"}),e.jsx("span",{className:"stat_desc color_success",children:"+24%"})]}),e.jsxs(t,{className:"stat_row",card:!0,children:[e.jsx("span",{className:"stat_icon-wrap color_success","aria-hidden":"true",children:e.jsxs("svg",{className:"icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"M22 4 12 14.01l-3-3"})]})}),e.jsxs("div",{className:"stat_body",children:[e.jsx("span",{className:"stat_label",children:"완료율"}),e.jsxs("div",{className:"stat_value-row",children:[e.jsx("span",{className:"stat_value",children:"94"}),e.jsx("span",{className:"stat_suffix",children:"%"})]})]})]})]}))},u={name:"스킨",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card · shadow · stat_borderless · stat_accent로 외형을 조절합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function SkinExample() {
  return (
    <div className="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat
        card
        className="stat_accent color_primary"
        title="Accent"
        value="789"
        description="강조 지표"
        trendColor="primary"
      />
    </div>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs("div",{className:"stat_group stat_group-2",children:[e.jsx(t,{card:!0,title:"기본 카드",value:"1,200"}),e.jsx(t,{card:!0,shadow:!0,title:"Shadow",value:"980"}),e.jsx(t,{card:!0,className:"stat_borderless",title:"Borderless",value:"456"}),e.jsx(t,{card:!0,className:"stat_accent color_primary",title:"Accent",value:"789",description:"강조 지표",trendColor:"primary"})]}))},p={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"stat_group으로 여러 지표를 그리드로 배치합니다."},source:{code:`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function GroupExample() {
  return (
    <>
      <div className="stat_group">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div
        className="stat_group stat_group-4 stat_group-divider stat_card stat_shadow"
        style={{ padding: 'var(--space-lg)' }}
      >
        <Stat title="방문" value="24.5K" />
        <Stat title="페이지뷰" value="89.2K" />
        <Stat title="전환" value="1,842" />
        <Stat title="매출" value="₩12M" />
      </div>
    </>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"stat_group",children:[e.jsx(t,{card:!0,shadow:!0,title:"총 매출",prefix:"₩",value:"4.2M",description:"+8.2%",trendColor:"success"}),e.jsx(t,{card:!0,shadow:!0,title:"신규 가입",value:"1,234",description:"+15.3%",trendColor:"success"}),e.jsx(t,{card:!0,shadow:!0,title:"이탈률",value:"2.4",suffix:"%",description:"+0.3%p",trendColor:"danger"}),e.jsx(t,{card:!0,shadow:!0,title:"활성 사용자",value:"8,901",description:"변동 없음",trendColor:"muted"})]}),e.jsxs("div",{className:"stat_group stat_group-4 stat_group-divider stat_card stat_shadow",style:{padding:"var(--space-lg)"},children:[e.jsx(t,{title:"방문",value:"24.5K"}),e.jsx(t,{title:"페이지뷰",value:"89.2K"}),e.jsx(t,{title:"전환",value:"1,842"}),e.jsx(t,{title:"매출",value:"₩12M"})]})]}))},m={name:"카드 혼합",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다."},source:{code:`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';
import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function ContextExample() {
  return (
    <Card variant="shadow">
      <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
      <CardBody>
        <div className="stat_group stat_group-3">
          <Stat title="매출" prefix="₩" value="12M" trend="+18%" trendColor="success" />
          <Stat title="주문" value="3,456" description="+9.1%" trendColor="success" />
          <Stat title="환불" value="42" description="+3건" trendColor="danger" />
        </div>
      </CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">실시간 갱신</span>
        <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
          상세 보기
        </a>
      </CardFooter>
    </Card>
  );
}`,language:"tsx"}}},args:{...a},render:s(e.jsxs(U,{variant:"shadow",children:[e.jsx(O,{title:"이번 달 요약",subtitle:"2024년 6월"}),e.jsx(q,{children:e.jsxs("div",{className:"stat_group stat_group-3",children:[e.jsx(t,{title:"매출",prefix:"₩",value:"12M",trend:"+18%",trendColor:"success"}),e.jsx(t,{title:"주문",value:"3,456",description:"+9.1%",trendColor:"success"}),e.jsx(t,{title:"환불",value:"42",description:"+3건",trendColor:"danger"})]})}),e.jsxs(J,{between:!0,children:[e.jsx("span",{className:"color_muted size_sm",children:"실시간 갱신"}),e.jsx("a",{href:"#",className:"link color_primary size_sm",onClick:v=>v.preventDefault(),children:"상세 보기"})]})]}))};var x,g,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Stat {...args} />
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var _,h,S;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        story: 'title · value · description으로 지표를 구성합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function BasicExample() {
  return (
    <Stat
      title="총 사용자"
      value="12,345"
      description="+12.5% 지난 달 대비"
      trendColor="success"
    />
  );
}\`,
        language: 'tsx'
      }
    }
  },
  args: {
    ...playgroundArgs
  },
  render: withDocsCanvasRender(<Stat title="총 사용자" value="12,345" description="+12.5% 지난 달 대비" trendColor="success" />)
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,y,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '접두 · 접미',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'prefix · suffix로 통화·단위를 표시합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function PrefixExample() {
  return (
    <>
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
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
      <Stat title="총 매출" prefix="₩" value="4,280,000" description="+8.2%" trendColor="success" />
      <Stat title="전환율" value="3.6" suffix="%" description="-0.4%p" trendColor="danger" />
      <Stat title="평균 응답 시간" value="128" suffix="ms" />
    </>)
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var N,j,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '추세',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'trend로 증감 방향을 아이콘과 함께 표시합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function TrendExample() {
  return (
    <>
      <Stat
        title="월간 매출"
        prefix="₩"
        value="4.2M"
        trend="+8.2%"
        trendColor="success"
        description="전월 대비"
        card
        shadow
      />
      <Stat
        title="이탈률"
        value="2.4"
        suffix="%"
        trend="+0.3%p"
        trendColor="danger"
        trendIcon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        }
        card
        shadow
      />
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
      <Stat title="월간 매출" prefix="₩" value="4.2M" trend="+8.2%" trendColor="success" description="전월 대비" card shadow />
      <Stat title="이탈률" value="2.4" suffix="%" trend="+0.3%p" trendColor="danger" trendIcon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>} card shadow />
    </>)
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var b,M,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        story: 'size로 수치 스케일을 조절합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function SizeExample() {
  return (
    <>
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
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
      <Stat size="sm" card title="Small" value="1,024" />
      <Stat card title="Medium" value="8,192" />
      <Stat size="lg" card title="Large" value="64K" />
    </>)
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var P,B,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '레이아웃',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'stat_horizontal · stat_inline · stat_row로 배치를 변경합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function LayoutExample() {
  return (
    <>
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow>
        <span className="stat_icon-wrap color_primary" aria-hidden="true">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </span>
        <div className="stat_body">
          <span className="stat_label">팀 멤버</span>
          <span className="stat_value">48</span>
          <span className="stat_desc color_success">4명 신규 합류</span>
        </div>
      </Stat>
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
      <Stat className="stat_horizontal" card title="활성 세션" value="342" />
      <Stat className="stat_inline" card title="CPU 사용률" value="68" suffix="%" />
      <Stat className="stat_row" card shadow>
        <span className="stat_icon-wrap color_primary" aria-hidden="true">
          {TeamIcon}
        </span>
        <div className="stat_body">
          <span className="stat_label">팀 멤버</span>
          <span className="stat_value">48</span>
          <span className="stat_desc color_success">4명 신규 합류</span>
        </div>
      </Stat>
    </>)
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var A,F,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '아이콘',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'stat_icon · stat_icon-wrap으로 지표에 시각적 단서를 추가합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function IconExample() {
  return (
    <>
      <Stat card>
        <span className="stat_icon color_primary">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <span className="stat_label">다운로드</span>
        <span className="stat_value">2,847</span>
        <span className="stat_desc color_success">+24%</span>
      </Stat>
      <Stat className="stat_row" card>
        <span className="stat_icon-wrap color_success" aria-hidden="true">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </span>
        <div className="stat_body">
          <span className="stat_label">완료율</span>
          <div className="stat_value-row">
            <span className="stat_value">94</span>
            <span className="stat_suffix">%</span>
          </div>
        </div>
      </Stat>
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
      <Stat card>
        <span className="stat_icon color_primary">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <span className="stat_label">다운로드</span>
        <span className="stat_value">2,847</span>
        <span className="stat_desc color_success">+24%</span>
      </Stat>
      <Stat className="stat_row" card>
        <span className="stat_icon-wrap color_success" aria-hidden="true">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
        </span>
        <div className="stat_body">
          <span className="stat_label">완료율</span>
          <div className="stat_value-row">
            <span className="stat_value">94</span>
            <span className="stat_suffix">%</span>
          </div>
        </div>
      </Stat>
    </>)
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var I,R,W;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        story: 'card · shadow · stat_borderless · stat_accent로 외형을 조절합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function SkinExample() {
  return (
    <div className="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat
        card
        className="stat_accent color_primary"
        title="Accent"
        value="789"
        description="강조 지표"
        trendColor="primary"
      />
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
  render: withDocsCanvasRender(<div className="stat_group stat_group-2">
      <Stat card title="기본 카드" value="1,200" />
      <Stat card shadow title="Shadow" value="980" />
      <Stat card className="stat_borderless" title="Borderless" value="456" />
      <Stat card className="stat_accent color_primary" title="Accent" value="789" description="강조 지표" trendColor="primary" />
    </div>)
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var D,K,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '그룹',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'stat_group으로 여러 지표를 그리드로 배치합니다.'
      },
      source: {
        code: \`import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function GroupExample() {
  return (
    <>
      <div className="stat_group">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div
        className="stat_group stat_group-4 stat_group-divider stat_card stat_shadow"
        style={{ padding: 'var(--space-lg)' }}
      >
        <Stat title="방문" value="24.5K" />
        <Stat title="페이지뷰" value="89.2K" />
        <Stat title="전환" value="1,842" />
        <Stat title="매출" value="₩12M" />
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
      <div className="stat_group">
        <Stat card shadow title="총 매출" prefix="₩" value="4.2M" description="+8.2%" trendColor="success" />
        <Stat card shadow title="신규 가입" value="1,234" description="+15.3%" trendColor="success" />
        <Stat card shadow title="이탈률" value="2.4" suffix="%" description="+0.3%p" trendColor="danger" />
        <Stat card shadow title="활성 사용자" value="8,901" description="변동 없음" trendColor="muted" />
      </div>
      <div className="stat_group stat_group-4 stat_group-divider stat_card stat_shadow" style={{
      padding: 'var(--space-lg)'
    }}>
        <Stat title="방문" value="24.5K" />
        <Stat title="페이지뷰" value="89.2K" />
        <Stat title="전환" value="1,842" />
        <Stat title="매출" value="₩12M" />
      </div>
    </>)
}`,...(T=(K=p.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var L,V,G;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '카드 혼합',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'card 본문 안에 stat_group을 배치하는 대시보드 패턴입니다.'
      },
      source: {
        code: \`import Card from '@uxkm/ui-react/components/Card.jsx';
import CardBody from '@uxkm/ui-react/components/CardBody.jsx';
import CardFooter from '@uxkm/ui-react/components/CardFooter.jsx';
import CardHeader from '@uxkm/ui-react/components/CardHeader.jsx';
import Stat from '@uxkm/ui-react/components/Stat.jsx';

export function ContextExample() {
  return (
    <Card variant="shadow">
      <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
      <CardBody>
        <div className="stat_group stat_group-3">
          <Stat title="매출" prefix="₩" value="12M" trend="+18%" trendColor="success" />
          <Stat title="주문" value="3,456" description="+9.1%" trendColor="success" />
          <Stat title="환불" value="42" description="+3건" trendColor="danger" />
        </div>
      </CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">실시간 갱신</span>
        <a href="#" className="link color_primary size_sm" onClick={(e) => e.preventDefault()}>
          상세 보기
        </a>
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
  render: withDocsCanvasRender(<Card variant="shadow">
      <CardHeader title="이번 달 요약" subtitle="2024년 6월" />
      <CardBody>
        <div className="stat_group stat_group-3">
          <Stat title="매출" prefix="₩" value="12M" trend="+18%" trendColor="success" />
          <Stat title="주문" value="3,456" description="+9.1%" trendColor="success" />
          <Stat title="환불" value="42" description="+3건" trendColor="danger" />
        </div>
      </CardBody>
      <CardFooter between>
        <span className="color_muted size_sm">실시간 갱신</span>
        <a href="#" className="link color_primary size_sm" onClick={e => e.preventDefault()}>
          상세 보기
        </a>
      </CardFooter>
    </Card>)
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const de=["Playground","Basic","Prefix","Trend","Size","Layout","Icon","Skin","Group","Context"];export{o as Basic,m as Context,p as Group,d as Icon,c as Layout,r as Playground,n as Prefix,i as Size,u as Skin,l as Trend,de as __namedExportsOrder,ce as default};

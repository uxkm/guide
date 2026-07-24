import{r as R,u as H,c as M,n as F,j as e,a as V,b as N,B,I as T}from"./iframe-ifEc15ad.js";import{A as q}from"./Avatar-DMEKGziK.js";import{B as a}from"./Badge-CkwN7aOo.js";import{w as l}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const G=N("BadgeWrap",{selfClosing:!1});function r({ariaLabel:s,children:g,className:p,...u}){const b=R.useRef(null);H(G,{ariaLabel:s},M({default:g}),b,{className:p,...u});const{class:se,...O}=u,E=F(O);return e.jsx("span",{ref:b,className:V("badge_wrap",p),"aria-label":s,...E,children:g})}r.__docgenInfo={description:"",methods:[],displayName:"BadgeWrap"};const J=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],K=[{name:"color",type:"string",default:"primary",description:"공통 color_* 클래스"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"badge_sm · badge_lg"},{name:"dot",type:"boolean",default:"false",description:"텍스트 앞 점 표시 (badge_dot)"},{name:"count",type:"boolean",default:"false",description:"숫자 카운트 형태 (badge_count)"},{name:"dot-only",type:"boolean",default:"false",description:"점만 표시 (badge_dot-only)"},{name:"label",type:"string",default:"—",description:"배지 텍스트. default 슬롯으로 대체 가능"},{name:"aria-label",type:"string",default:"—",description:"dot-only·카운트 등 접근성 라벨"}],Q=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],U=[{name:"aria-label",type:"string",default:"—",description:"래퍼 접근성 라벨 (선택)"}],X=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Y=[{name:"default",description:"배지 텍스트 (label prop 대체)"}],Z=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],$=[{name:"default",description:"기준 요소 + Badge 자식"}],ee=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],ae=[{name:"badge",description:"배지 루트"},{name:"badge_sm · badge_lg",description:"크기 변형"},{name:"badge_dot · badge_count · badge_dot-only",description:"형태 변형"},{name:"badge_wrap",description:"겹침 배치 컨테이너"},{name:"color_*",description:"공통 색상 유틸"}],oe=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],re=[{name:"--badge-font-size · --badge-padding-y · --badge-padding-x",default:"—",description:"기본 배지 타이포·패딩"},{name:"--badge-dot-size · --badge-dot-size-sm · --badge-dot-size-lg",default:"6px · 5px · 7px",description:"점 크기"},{name:"--badge-count-min-width",default:"1.25rem",description:"카운트 최소 너비"},{name:"--badge-overlay-border",default:"2px",description:"겹침 시 테두리"}],le=[{title:"API · Badge Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 aria-label은 ariaLabel로 다룹니다.",tables:[{columns:J,rows:K,codeColumn:"name"}]},{title:"API · BadgeWrap Props",tables:[{columns:Q,rows:U,codeColumn:"name"}]},{title:"API · Badge Children / Slots",description:"Vue default 슬롯은 React children에 대응합니다.",tables:[{columns:X,rows:Y,codeColumn:"name"}]},{title:"API · BadgeWrap Children / Slots",tables:[{columns:Z,rows:$,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:ee,rows:ae,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:oe,rows:re,codeColumn:"name"}]}],o={color:"primary",size:"md",dot:!1,count:!1,dotOnly:!1,label:"라벨",ariaLabel:"접근성 라벨"},me={title:"Components/데이터 표시/Badge",id:"components-badge",component:a,subcomponents:{BadgeWrap:r},tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},dot:{control:"boolean",type:{name:"boolean",summary:"boolean"}},count:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dotOnly:{control:"boolean",type:{name:"boolean",summary:"boolean"}},label:{control:"text",type:{name:"string",summary:"string"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:le,docs:{description:{component:"상태, 카운트, 레이블을 표시하는 작은 배지 컴포넌트입니다."}}}},n={parameters:{controls:{disable:!1}},args:{...o},render:s=>e.jsx(a,{...s})},t={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"공통 color_* 클래스로 의미에 따른 색상을 적용합니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function BasicExample() {
  return (
    <>
      <Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />
    </>
  );
}`,language:"tsx"}}},args:{...o},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"default",label:"Default"}),e.jsx(a,{color:"primary",label:"Primary"}),e.jsx(a,{color:"success",label:"Success"}),e.jsx(a,{color:"warning",label:"Warning"}),e.jsx(a,{color:"danger",label:"Danger"}),e.jsx(a,{color:"info",label:"Info"})]}))},c={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_sm · badge_lg로 스케일을 조절합니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function SizeExample() {
  return (
    <>
      <Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />
    </>
  );
}`,language:"tsx"}}},args:{...o},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",color:"primary",label:"Small"}),e.jsx(a,{color:"primary",label:"Medium"}),e.jsx(a,{size:"lg",color:"primary",label:"Large"})]}))},d={name:"Dot 배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function DotExample() {
  return (
    <>
      <Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />
    </>
  );
}`,language:"tsx"}}},args:{...o},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{dot:!0,color:"primary",label:"Online"}),e.jsx(a,{dot:!0,color:"success",label:"Active"}),e.jsx(a,{dot:!0,color:"warning",label:"Away"}),e.jsx(a,{dot:!0,color:"danger",label:"Offline"})]}))},i={name:"카운트",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다."},source:{code:`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function CountExample() {
  return (
    <>
      <Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />
    </>
  );
}`,language:"tsx"}}},args:{...o},render:l(e.jsxs(e.Fragment,{children:[e.jsx(a,{count:!0,color:"danger",label:"3"}),e.jsx(a,{count:!0,color:"primary",label:"12"}),e.jsx(a,{count:!0,color:"success",label:"99+"}),e.jsx(a,{count:!0,size:"sm",color:"danger",label:"5"}),e.jsx(a,{count:!0,size:"lg",color:"primary",label:"New"})]}))},m={name:"겹침 표시",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Badge from '@uxkm/ui-react/components/Badge.jsx';
import BadgeWrap from '@uxkm/ui-react/components/BadgeWrap.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function WrapExample() {
  return (
    <>
      <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
      </BadgeWrap>
      <BadgeWrap>
        <Button
          variant="ghost"
          iconOnly
          ariaLabel="메시지"
          iconBefore={
            <Icon>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </Icon>
          }
        />
        <Badge count color="danger" ariaLabel="새 메시지 12건" label="12" />
      </BadgeWrap>
      <BadgeWrap>
        <Avatar color="primary" initials="홍" ariaHidden />
        <Badge dotOnly color="success" ariaLabel="온라인" />
      </BadgeWrap>
    </>
  );
}`,language:"tsx"}}},args:{...o},render:l(e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(B,{variant:"filled",color:"primary",label:"알림"}),e.jsx(a,{count:!0,color:"danger",ariaLabel:"읽지 않은 알림 5건",label:"5"})]}),e.jsxs(r,{children:[e.jsx(B,{variant:"ghost",iconOnly:!0,ariaLabel:"메시지",iconBefore:e.jsx(T,{children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),e.jsx(a,{count:!0,color:"danger",ariaLabel:"새 메시지 12건",label:"12"})]}),e.jsxs(r,{children:[e.jsx(q,{color:"primary",initials:"홍",ariaHidden:!0}),e.jsx(a,{dotOnly:!0,color:"success",ariaLabel:"온라인"})]})]}))};var f,y,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Badge {...args} />
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,k,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        story: '공통 color_* 클래스로 의미에 따른 색상을 적용합니다.'
      },
      source: {
        code: \`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function BasicExample() {
  return (
    <>
      <Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />
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
      <Badge color="default" label="Default" />
      <Badge color="primary" label="Primary" />
      <Badge color="success" label="Success" />
      <Badge color="warning" label="Warning" />
      <Badge color="danger" label="Danger" />
      <Badge color="info" label="Info" />
    </>)
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var W,v,C;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        story: 'badge_sm · badge_lg로 스케일을 조절합니다.'
      },
      source: {
        code: \`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function SizeExample() {
  return (
    <>
      <Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />
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
      <Badge size="sm" color="primary" label="Small" />
      <Badge color="primary" label="Medium" />
      <Badge size="lg" color="primary" label="Large" />
    </>)
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var z,_,h;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Dot 배지',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'badge_dot로 상태 표시용 점(dot)이 포함된 배지를 만듭니다.'
      },
      source: {
        code: \`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function DotExample() {
  return (
    <>
      <Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />
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
      <Badge dot color="primary" label="Online" />
      <Badge dot color="success" label="Active" />
      <Badge dot color="warning" label="Away" />
      <Badge dot color="danger" label="Offline" />
    </>)
}`,...(h=(_=d.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var P,A,S;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '카운트',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'badge_count로 숫자·짧은 텍스트를 강조합니다. 99+처럼 긴 값도 표시할 수 있습니다.'
      },
      source: {
        code: \`import Badge from '@uxkm/ui-react/components/Badge.jsx';

export function CountExample() {
  return (
    <>
      <Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />
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
      <Badge count color="danger" label="3" />
      <Badge count color="primary" label="12" />
      <Badge count color="success" label="99+" />
      <Badge count size="sm" color="danger" label="5" />
      <Badge count size="lg" color="primary" label="New" />
    </>)
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var D,L,I;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '겹침 표시',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'badge_wrap으로 버튼·아이콘 위에 카운트 또는 점 배지를 겹쳐 표시합니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Badge from '@uxkm/ui-react/components/Badge.jsx';
import BadgeWrap from '@uxkm/ui-react/components/BadgeWrap.jsx';
import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';

export function WrapExample() {
  return (
    <>
      <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
      </BadgeWrap>
      <BadgeWrap>
        <Button
          variant="ghost"
          iconOnly
          ariaLabel="메시지"
          iconBefore={
            <Icon>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </Icon>
          }
        />
        <Badge count color="danger" ariaLabel="새 메시지 12건" label="12" />
      </BadgeWrap>
      <BadgeWrap>
        <Avatar color="primary" initials="홍" ariaHidden />
        <Badge dotOnly color="success" ariaLabel="온라인" />
      </BadgeWrap>
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
      <BadgeWrap>
        <Button variant="filled" color="primary" label="알림" />
        <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
      </BadgeWrap>
      <BadgeWrap>
        <Button variant="ghost" iconOnly ariaLabel="메시지" iconBefore={<Icon>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </Icon>} />
        <Badge count color="danger" ariaLabel="새 메시지 12건" label="12" />
      </BadgeWrap>
      <BadgeWrap>
        <Avatar color="primary" initials="홍" ariaHidden />
        <Badge dotOnly color="success" ariaLabel="온라인" />
      </BadgeWrap>
    </>)
}`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const ge=["Playground","Basic","Size","Dot","Count","Wrap"];export{t as Basic,i as Count,d as Dot,n as Playground,c as Size,m as Wrap,ge as __namedExportsOrder,me as default};

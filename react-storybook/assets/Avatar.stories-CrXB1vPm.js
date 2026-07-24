import{r as F,u as T,c as V,n as W,j as a,a as M,b as O,I as B}from"./iframe-ifEc15ad.js";import{a as d}from"./avatar-sample-Dq40Sw96.js";import{A as r}from"./Avatar-DMEKGziK.js";import{w as e,b as U}from"./story-renders-Hdz_JUlO.js";import"./preload-helper-DUxc-Dqw.js";const J=O("AvatarGroup",{selfClosing:!1});function m({ariaLabel:p,children:u,className:v,...g}){const A=F.useRef(null);T(J,{ariaLabel:p},V({default:u}),A,{className:v,...g});const N=W(g);return a.jsx("div",{ref:A,className:M("avatar_group",v),"aria-label":p,...N,children:u})}m.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup"};const K=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Q=[{name:"src",type:"string",default:"—",description:"이미지 URL (avatar_image)"},{name:"alt",type:"string",default:"—",description:"이미지 대체 텍스트"},{name:"initials",type:"string",default:"—",description:"이니셜 텍스트 (이미지·아이콘 없을 때)"},{name:"color",type:"string",default:"—",description:"이니셜·아이콘 배경 color_*"},{name:"size",type:"'sm' | 'md' | 'lg' | 'xl'",default:"md",description:"avatar_sm · avatar_lg · avatar_xl"},{name:"square",type:"boolean",default:"false",description:"사각형 모서리 (avatar_square)"},{name:"badge-color",type:"string",default:"—",description:"상태 점 색상 (avatar_badge)"},{name:"badge-label",type:"string",default:"—",description:"상태 점 aria-label"},{name:"aria-hidden",type:"boolean",default:"false",description:"그룹 내 장식용 아바타"}],X=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Y=[{name:"aria-label",type:"string",default:"—",description:"그룹 접근성 라벨 (권장)"}],Z=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],$=[{name:"avatar",description:"아바타 루트 (원형)"},{name:"avatar_image",description:"프로필 이미지"},{name:"avatar_icon",description:"아이콘 크기"},{name:"avatar_badge",description:"상태 점"},{name:"avatar_sm · avatar_lg · avatar_xl",description:"크기 변형"},{name:"avatar_square",description:"사각형"},{name:"avatar_group",description:"겹침 그룹 컨테이너"},{name:"color_*",description:"공통 색상 유틸"}],aa=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],ra=[{name:"--avatar-size-sm · --avatar-size · --avatar-size-lg · --avatar-size-xl",default:"1.5rem · 2rem · 2.5rem · 3.5rem",description:"아바타 지름"},{name:"--avatar-group-overlap",default:"-0.5rem",description:"그룹 겹침 오프셋"},{name:"--avatar-badge-size · --avatar-badge-size-sm · --avatar-badge-size-lg",default:"8px · 6px · 10px",description:"상태 점 크기"}],ea=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ia=[{name:"initials",description:"이니셜 텍스트 (이미지·아이콘 없을 때)"},{name:"icon",description:"아이콘 콘텐츠 (Vue #icon 슬롯 대응, avatar_icon 클래스)"}],oa=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],ta=[{name:"children",description:"Avatar 자식 목록 (Vue default 슬롯 대응)"}],sa=[{title:"API · Avatar Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: badge-color → badgeColor, aria-hidden → ariaHidden)와 동일한 의미입니다.",tables:[{columns:K,rows:Q,codeColumn:"name"}]},{title:"API · AvatarGroup Props",description:"React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: aria-label → ariaLabel)와 동일한 의미입니다.",tables:[{columns:X,rows:Y,codeColumn:"name"}]},{title:"API · Avatar Children",description:"Vue 슬롯(icon)에 대응하는 React prop입니다.",tables:[{columns:ea,rows:ia,codeColumn:"name"}]},{title:"API · AvatarGroup Children",description:"Vue default 슬롯에 대응하는 React children입니다.",tables:[{columns:oa,rows:ta,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Z,rows:$,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:aa,rows:ra,codeColumn:"name"}]}],na={src:d,alt:"홍길동",initials:"홍",color:"primary",size:"md",square:!1,badgeColor:"",badgeLabel:"온라인",ariaHidden:!1},ua={title:"Components/데이터 표시/Avatar",id:"components-avatar",component:r,tags:["autodocs"],argTypes:{src:{control:"text",type:{name:"string",summary:"string"}},alt:{control:"text",type:{name:"string",summary:"string"}},initials:{control:"text",type:{name:"string",summary:"string"}},color:{control:"select",options:["default","primary","success","warning","danger","info"],type:{name:"enum",summary:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'"}},size:{control:"select",options:["sm","md","lg","xl"],type:{name:"enum",summary:"'sm' | 'md' | 'lg' | 'xl'"}},square:{control:"boolean",type:{name:"boolean",summary:"boolean"}},badgeColor:{control:"select",options:["","success","warning","danger"],labels:{"":"없음",success:"success",warning:"warning",danger:"danger"},type:{name:"enum",summary:"'success' | 'warning' | 'danger'"}},badgeLabel:{control:"text",type:{name:"string",summary:"string"}},ariaHidden:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:sa,docs:{description:{component:"사용자·엔티티를 나타내는 프로필 이미지, 이니셜, 아이콘 표시 컴포넌트입니다."}}}},i={parameters:{controls:{disable:!1}},args:{...na},render:U(r)},o={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { avatarSample } from '@images';

export function BasicExample() {
  return (
    <>
      <Avatar src={avatarSample} alt="홍길동" />
      <Avatar color="primary" initials="홍" ariaHidden />
      <Avatar
        color="default"
        ariaHidden
        icon={<Icon name="user" className="avatar_icon" />}
      />
    </>
  );
}`,language:"tsx"}}},render:e(a.jsxs(a.Fragment,{children:[a.jsx(r,{src:d,alt:"홍길동"}),a.jsx(r,{color:"primary",initials:"홍",ariaHidden:!0}),a.jsx(r,{color:"default",ariaHidden:!0,icon:a.jsx(B,{name:"user",className:"avatar_icon"})})]}))},t={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function SizeExample() {
  return (
    <>
      <Avatar size="sm" color="primary" initials="A" ariaHidden />
      <Avatar color="primary" initials="B" ariaHidden />
      <Avatar size="lg" color="primary" initials="C" ariaHidden />
      <Avatar size="xl" color="primary" initials="D" ariaHidden />
    </>
  );
}`,language:"tsx"}}},render:e(a.jsxs(a.Fragment,{children:[a.jsx(r,{size:"sm",color:"primary",initials:"A",ariaHidden:!0}),a.jsx(r,{color:"primary",initials:"B",ariaHidden:!0}),a.jsx(r,{size:"lg",color:"primary",initials:"C",ariaHidden:!0}),a.jsx(r,{size:"xl",color:"primary",initials:"D",ariaHidden:!0})]}))},s={name:"형태",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import { avatarSample } from '@images';

export function ShapeExample() {
  return (
    <>
      <Avatar color="primary" initials="원" ariaHidden />
      <Avatar square color="primary" initials="각" ariaHidden />
      <Avatar square src={avatarSample} alt="홍길동" />
    </>
  );
}`,language:"tsx"}}},render:e(a.jsxs(a.Fragment,{children:[a.jsx(r,{color:"primary",initials:"원",ariaHidden:!0}),a.jsx(r,{square:!0,color:"primary",initials:"각",ariaHidden:!0}),a.jsx(r,{square:!0,src:d,alt:"홍길동"})]}))},n={name:"색상",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function ColorExample() {
  return (
    <>
      <Avatar color="default" initials="D" ariaHidden />
      <Avatar color="primary" initials="P" ariaHidden />
      <Avatar color="success" initials="S" ariaHidden />
      <Avatar color="warning" initials="W" ariaHidden />
      <Avatar color="danger" initials="E" ariaHidden />
    </>
  );
}`,language:"tsx"}}},render:e(a.jsxs(a.Fragment,{children:[a.jsx(r,{color:"default",initials:"D",ariaHidden:!0}),a.jsx(r,{color:"primary",initials:"P",ariaHidden:!0}),a.jsx(r,{color:"success",initials:"S",ariaHidden:!0}),a.jsx(r,{color:"warning",initials:"W",ariaHidden:!0}),a.jsx(r,{color:"danger",initials:"E",ariaHidden:!0})]}))},l={name:"상태 배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function BadgeExample() {
  return (
    <>
      <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" ariaHidden />
      <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" ariaHidden />
      <Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" ariaHidden />
    </>
  );
}`,language:"tsx"}}},render:e(a.jsxs(a.Fragment,{children:[a.jsx(r,{color:"primary",initials:"온",badgeColor:"success",badgeLabel:"온라인",ariaHidden:!0}),a.jsx(r,{color:"default",initials:"대",badgeColor:"warning",badgeLabel:"자리 비움",ariaHidden:!0}),a.jsx(r,{color:"default",initials:"오",badgeColor:"danger",badgeLabel:"오프라인",ariaHidden:!0})]}))},c={name:"그룹",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"avatar_group으로 여러 아바타를 겹쳐 표시합니다."},source:{code:`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import AvatarGroup from '@uxkm/ui-react/components/AvatarGroup.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { avatarSample } from '@images';

export function GroupExample() {
  return (
    <>
      <AvatarGroup ariaLabel="팀 멤버 4명">
        <Avatar color="primary" initials="김" ariaHidden />
        <Avatar color="success" initials="이" ariaHidden />
        <Avatar color="warning" initials="박" ariaHidden />
        <Avatar color="danger" initials="최" ariaHidden />
      </AvatarGroup>
      <AvatarGroup ariaLabel="팀 멤버 3명">
        <Avatar src={avatarSample} alt="홍길동" />
        <Avatar color="primary" initials="홍" ariaHidden />
        <Avatar
          color="default"
          ariaHidden
          icon={<Icon name="plus" className="avatar_icon" />}
        />
      </AvatarGroup>
    </>
  );
}`,language:"tsx"}}},render:e(a.jsxs(a.Fragment,{children:[a.jsxs(m,{ariaLabel:"팀 멤버 4명",children:[a.jsx(r,{color:"primary",initials:"김",ariaHidden:!0}),a.jsx(r,{color:"success",initials:"이",ariaHidden:!0}),a.jsx(r,{color:"warning",initials:"박",ariaHidden:!0}),a.jsx(r,{color:"danger",initials:"최",ariaHidden:!0})]}),a.jsxs(m,{ariaLabel:"팀 멤버 3명",children:[a.jsx(r,{src:d,alt:"홍길동"}),a.jsx(r,{color:"primary",initials:"홍",ariaHidden:!0}),a.jsx(r,{color:"default",ariaHidden:!0,icon:a.jsx(B,{name:"plus",className:"avatar_icon"})})]})]}))};var x,b,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: bindComponent(Avatar)
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,H,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        story: '이미지, 이니셜 텍스트, 아이콘 세 가지 형태를 지원합니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { avatarSample } from '@images';

export function BasicExample() {
  return (
    <>
      <Avatar src={avatarSample} alt="홍길동" />
      <Avatar color="primary" initials="홍" ariaHidden />
      <Avatar
        color="default"
        ariaHidden
        icon={<Icon name="user" className="avatar_icon" />}
      />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Avatar src={avatarSample} alt="홍길동" />
      <Avatar color="primary" initials="홍" ariaHidden />
      <Avatar color="default" ariaHidden icon={<Icon name="user" className="avatar_icon" />} />
    </>)
}`,...(C=(H=o.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var j,k,_;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        story: 'avatar_sm · avatar_lg · avatar_xl로 스케일을 조절합니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function SizeExample() {
  return (
    <>
      <Avatar size="sm" color="primary" initials="A" ariaHidden />
      <Avatar color="primary" initials="B" ariaHidden />
      <Avatar size="lg" color="primary" initials="C" ariaHidden />
      <Avatar size="xl" color="primary" initials="D" ariaHidden />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Avatar size="sm" color="primary" initials="A" ariaHidden />
      <Avatar color="primary" initials="B" ariaHidden />
      <Avatar size="lg" color="primary" initials="C" ariaHidden />
      <Avatar size="xl" color="primary" initials="D" ariaHidden />
    </>)
}`,...(_=(k=t.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var w,S,P;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '형태',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '기본은 원형이며, avatar_square로 사각형(둥근 모서리)을 적용합니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import { avatarSample } from '@images';

export function ShapeExample() {
  return (
    <>
      <Avatar color="primary" initials="원" ariaHidden />
      <Avatar square color="primary" initials="각" ariaHidden />
      <Avatar square src={avatarSample} alt="홍길동" />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Avatar color="primary" initials="원" ariaHidden />
      <Avatar square color="primary" initials="각" ariaHidden />
      <Avatar square src={avatarSample} alt="홍길동" />
    </>)
}`,...(P=(S=s.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var h,G,z;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '색상',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '이니셜·아이콘 아바타에 공통 color_* 클래스를 조합합니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function ColorExample() {
  return (
    <>
      <Avatar color="default" initials="D" ariaHidden />
      <Avatar color="primary" initials="P" ariaHidden />
      <Avatar color="success" initials="S" ariaHidden />
      <Avatar color="warning" initials="W" ariaHidden />
      <Avatar color="danger" initials="E" ariaHidden />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Avatar color="default" initials="D" ariaHidden />
      <Avatar color="primary" initials="P" ariaHidden />
      <Avatar color="success" initials="S" ariaHidden />
      <Avatar color="warning" initials="W" ariaHidden />
      <Avatar color="danger" initials="E" ariaHidden />
    </>)
}`,...(z=(G=n.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var L,I,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '상태 배지',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'avatar_badge로 온라인·오프라인 등 상태를 표시합니다. 부모에 position: relative가 적용됩니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';

export function BadgeExample() {
  return (
    <>
      <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" ariaHidden />
      <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" ariaHidden />
      <Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" ariaHidden />
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Avatar color="primary" initials="온" badgeColor="success" badgeLabel="온라인" ariaHidden />
      <Avatar color="default" initials="대" badgeColor="warning" badgeLabel="자리 비움" ariaHidden />
      <Avatar color="default" initials="오" badgeColor="danger" badgeLabel="오프라인" ariaHidden />
    </>)
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var D,R,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        story: 'avatar_group으로 여러 아바타를 겹쳐 표시합니다.'
      },
      source: {
        code: \`import Avatar from '@uxkm/ui-react/components/Avatar.jsx';
import AvatarGroup from '@uxkm/ui-react/components/AvatarGroup.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import { avatarSample } from '@images';

export function GroupExample() {
  return (
    <>
      <AvatarGroup ariaLabel="팀 멤버 4명">
        <Avatar color="primary" initials="김" ariaHidden />
        <Avatar color="success" initials="이" ariaHidden />
        <Avatar color="warning" initials="박" ariaHidden />
        <Avatar color="danger" initials="최" ariaHidden />
      </AvatarGroup>
      <AvatarGroup ariaLabel="팀 멤버 3명">
        <Avatar src={avatarSample} alt="홍길동" />
        <Avatar color="primary" initials="홍" ariaHidden />
        <Avatar
          color="default"
          ariaHidden
          icon={<Icon name="plus" className="avatar_icon" />}
        />
      </AvatarGroup>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <AvatarGroup ariaLabel="팀 멤버 4명">
        <Avatar color="primary" initials="김" ariaHidden />
        <Avatar color="success" initials="이" ariaHidden />
        <Avatar color="warning" initials="박" ariaHidden />
        <Avatar color="danger" initials="최" ariaHidden />
      </AvatarGroup>
      <AvatarGroup ariaLabel="팀 멤버 3명">
        <Avatar src={avatarSample} alt="홍길동" />
        <Avatar color="primary" initials="홍" ariaHidden />
        <Avatar color="default" ariaHidden icon={<Icon name="plus" className="avatar_icon" />} />
      </AvatarGroup>
    </>)
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const va=["Playground","Basic","Size","Shape","Color","Badge","Group"];export{l as Badge,o as Basic,n as Color,c as Group,i as Playground,s as Shape,t as Size,va as __namedExportsOrder,ua as default};

import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BnaKUpFX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bdofg9ij.js";import{r as o,t as s}from"./Icon-CS3T14bP.js";import{n as c,t as l}from"./Link-CdmlgHEu.js";import{r as u,t as d}from"./Popover-C7sdmFFz.js";import{n as f,t as p}from"./Textarea-0TJe3CER.js";var m=t({ArrowAnchor:()=>L,Basic:()=>w,Footer:()=>A,Form:()=>P,Hover:()=>j,NoArrow:()=>R,NoLabel:()=>T,Offset:()=>O,Open:()=>E,Placement:()=>N,Size:()=>D,Title:()=>k,Trigger:()=>M,__namedExportsOrder:()=>z,default:()=>C});function h({label:e=`Popover 열기`,initialOpen:t=!1,triggerContent:n,footer:r,children:i,buttonProps:a,...o}){let[s,c]=(0,g.useState)(t),l=r?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(y,{variant:`ghost`,size:`sm`,label:r.cancel||`취소`,onClick:()=>c(!1)}),(0,_.jsx)(y,{variant:`filled`,color:r.color||`primary`,size:`sm`,label:r.confirm||`확인`,onClick:()=>c(!1)})]}):void 0;return(0,_.jsx)(v,{...o,open:s,onOpenChange:c,triggerContent:n??(0,_.jsx)(y,{className:`popover_trigger`,variant:`outline`,label:e,...a}),footer:l,children:i})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{g=n(),u(),i(),c(),o(),f(),_=r(),v=d,y=a,b=l,x=s,S=p,C={title:`피드백/Popover`,component:v,decorators:[e=>(0,_.jsx)(`div`,{className:`popover-story-demo`,children:(0,_.jsx)(e,{})})],parameters:{layout:`padded`},argTypes:{placement:{control:`select`,options:[`top`,`top-center`,`bottom`,`bottom-center`,`left`,`right`,`end`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},trigger:{control:`select`,options:[`click`,`hover`]}}},w={name:`기본`,render:()=>(0,_.jsx)(h,{panelLabel:`안내`,children:(0,_.jsx)(`p`,{children:`트리거를 클릭하면 이 패널이 표시됩니다.`})})},T={name:`라벨 없음`,render:()=>(0,_.jsx)(h,{label:`라벨 없음`,children:(0,_.jsx)(`p`,{children:`짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.`})})},E={name:`열린 상태`,render:()=>(0,_.jsx)(h,{initialOpen:!0,panelLabel:`열린 Popover`,label:`열림`,buttonProps:{variant:`filled`,color:`primary`},children:(0,_.jsx)(`p`,{children:`정적 데모용 열린 상태입니다.`})})},D={name:`크기`,render:()=>(0,_.jsxs)(`div`,{className:`popover_row`,style:{alignItems:`flex-start`},children:[(0,_.jsx)(h,{size:`sm`,panelLabel:`작은 Popover`,label:`Small`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`작은 패널입니다. 짧은 안내에 적합합니다.`})}),(0,_.jsx)(h,{panelLabel:`기본 Popover`,label:`Medium`,children:(0,_.jsx)(`p`,{children:`기본 크기 패널입니다.`})}),(0,_.jsx)(h,{size:`lg`,panelLabel:`큰 Popover`,label:`Large`,buttonProps:{size:`lg`},children:(0,_.jsx)(`p`,{children:`큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.`})})]})},O={name:`간격`,render:()=>(0,_.jsxs)(`div`,{className:`popover_demo-stage`,children:[(0,_.jsx)(`p`,{className:`form_field-hint`,children:`전 방향 동일`}),(0,_.jsxs)(`div`,{className:`popover_row`,children:[(0,_.jsx)(h,{offset:`none`,panelLabel:`none`,label:`none`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`간격 없음`})}),(0,_.jsx)(h,{offset:`sm`,panelLabel:`sm`,label:`sm`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`좁은 간격`})}),(0,_.jsx)(h,{panelLabel:`md`,label:`md`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`기본 간격`})}),(0,_.jsx)(h,{offset:`lg`,panelLabel:`lg`,label:`lg`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`넓은 간격`})})]}),(0,_.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`방향별 (offset-* · placement)`}),(0,_.jsxs)(`div`,{className:`popover_demo-placement`,style:{minHeight:`12rem`,padding:0},children:[(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-top`,children:(0,_.jsx)(h,{placement:`top-center`,offsetTop:`lg`,panelLabel:`offset-top lg`,label:`위`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`위쪽 간격`})})}),(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-left`,children:(0,_.jsx)(h,{placement:`left`,offsetLeft:`lg`,panelLabel:`offset-left lg`,label:`왼쪽`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`왼쪽 간격`})})}),(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-center`,children:(0,_.jsx)(h,{offsetBottom:`lg`,panelLabel:`offset-bottom lg`,label:`아래`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`아래쪽 간격`})})}),(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-right`,children:(0,_.jsx)(h,{placement:`right`,offsetRight:`lg`,panelLabel:`offset-right lg`,label:`오른쪽`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`오른쪽 간격`})})})]})]})},k={name:`제목`,render:()=>(0,_.jsx)(h,{title:`배송 안내`,label:`도움말`,buttonProps:{variant:`ghost`},children:(0,_.jsx)(`p`,{children:`평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.`})})},A={name:`푸터`,render:()=>(0,_.jsx)(h,{title:`항목 삭제`,label:`삭제 확인`,footer:{cancel:`취소`,confirm:`삭제`,color:`danger`},children:(0,_.jsx)(`p`,{children:`이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?`})})},j={name:`호버 트리거`,render:()=>(0,_.jsxs)(`p`,{children:[`결제 시`,` `,(0,_.jsx)(h,{trigger:`hover`,closable:!1,panelLabel:`에스크로 설명`,triggerContent:(0,_.jsx)(b,{className:`popover_trigger`,label:`에스크로`}),children:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`}),` `,`서비스를 이용할 수 있습니다.`]})},M={name:`트리거 유형`,render:()=>(0,_.jsxs)(`div`,{className:`popover_row`,children:[(0,_.jsx)(h,{panelLabel:`Button 트리거`,label:`Button`,buttonProps:{variant:`filled`,color:`primary`},children:(0,_.jsx)(`p`,{children:`버튼 트리거 예시입니다.`})}),(0,_.jsx)(h,{panelLabel:`Link 트리거`,triggerContent:(0,_.jsx)(b,{className:`popover_trigger`,label:`Link 트리거`}),children:(0,_.jsx)(`p`,{children:`링크 스타일 트리거입니다.`})}),(0,_.jsx)(h,{panelLabel:`추가 정보`,triggerContent:(0,_.jsx)(y,{className:`popover_trigger`,variant:`ghost`,iconOnly:!0,ariaLabel:`정보`,iconBefore:(0,_.jsx)(x,{name:`info`})}),children:(0,_.jsx)(`p`,{children:`아이콘 전용 트리거입니다.`})})]})},N={name:`배치`,render:()=>(0,_.jsxs)(`div`,{className:`popover_demo-stage`,children:[(0,_.jsxs)(`div`,{className:`popover_demo-placement`,children:[(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-top`,children:(0,_.jsx)(h,{placement:`top-center`,panelLabel:`위쪽 가운데 배치`,label:`위`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`트리거 위 · 가운데`})})}),(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-left`,children:(0,_.jsx)(h,{placement:`left`,panelLabel:`왼쪽 배치`,label:`왼쪽`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`트리거 왼쪽`})})}),(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-center`,children:(0,_.jsx)(h,{placement:`bottom-center`,panelLabel:`아래쪽 가운데 배치`,label:`아래`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`트리거 아래 · 가운데`})})}),(0,_.jsx)(`div`,{className:`popover_demo-placement-cell-right`,children:(0,_.jsx)(h,{placement:`right`,panelLabel:`오른쪽 배치`,label:`오른쪽`,buttonProps:{size:`sm`},children:(0,_.jsx)(`p`,{children:`트리거 오른쪽`})})})]}),(0,_.jsxs)(`div`,{className:`popover_row`,style:{width:`100%`,justifyContent:`space-between`,marginTop:`var(--space-xl)`},children:[(0,_.jsx)(h,{placement:`top`,panelLabel:`위쪽 왼쪽 정렬`,label:`위 · 왼쪽 정렬`,buttonProps:{variant:`ghost`},children:(0,_.jsx)(`p`,{children:`패널 왼쪽 정렬`})}),(0,_.jsx)(h,{panelLabel:`아래쪽 왼쪽 정렬`,label:`아래 · 왼쪽 정렬`,buttonProps:{variant:`ghost`},children:(0,_.jsx)(`p`,{children:`기본 배치`})}),(0,_.jsx)(h,{placement:`end`,panelLabel:`오른쪽 정렬`,label:`아래 · 오른쪽 정렬`,buttonProps:{variant:`ghost`},children:(0,_.jsx)(`p`,{children:`패널 오른쪽 정렬`})})]})]})},P={name:`폼`,render:()=>(0,_.jsx)(h,{title:`빠른 메모`,label:`메모 추가`,footer:{cancel:`취소`,confirm:`저장`},children:(0,_.jsxs)(`div`,{className:`form_field`,children:[(0,_.jsx)(`label`,{className:`form_label`,htmlFor:`popover-memo-input`,children:`내용`}),(0,_.jsx)(S,{id:`popover-memo-input`,rows:3,placeholder:`메모를 입력하세요`})]})})},F=({panelAlign:e=`start`,arrowTargetAlign:t=`center`,label:n,children:r,arrowAnchor:i=`mixed`})=>(0,_.jsx)(h,{arrowAnchor:i,panelAlign:e,arrowTargetAlign:t,panelLabel:n,label:`S`,buttonProps:{size:`sm`},children:r}),I=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`mixed — 패널 왼쪽 · 화살표 조합`}),(0,_.jsxs)(`div`,{className:`popover_row`,children:[(0,_.jsx)(F,{panelAlign:`start`,arrowTargetAlign:`left`,label:`왼쪽 · ←`,children:(0,_.jsx)(`p`,{children:`패널 왼쪽 정렬, 화살표 왼쪽.`})}),(0,_.jsx)(F,{panelAlign:`start`,label:`왼쪽 · ●`,children:(0,_.jsx)(`p`,{children:`패널 왼쪽, 화살표 가운데.`})}),(0,_.jsx)(F,{panelAlign:`start`,arrowTargetAlign:`right`,label:`왼쪽 · →`,children:(0,_.jsx)(`p`,{children:`패널 왼쪽, 화살표 오른쪽.`})})]}),(0,_.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`mixed — 패널 오른쪽 · 화살표 조합`}),(0,_.jsxs)(`div`,{className:`popover_row`,children:[(0,_.jsx)(F,{panelAlign:`end`,arrowTargetAlign:`left`,label:`오른쪽 · ←`,children:(0,_.jsx)(`p`,{children:`패널 오른쪽 정렬, 화살표 왼쪽.`})}),(0,_.jsx)(F,{panelAlign:`end`,label:`오른쪽 · ●`,children:(0,_.jsx)(`p`,{children:`패널 오른쪽, 화살표 가운데.`})}),(0,_.jsx)(F,{panelAlign:`end`,arrowTargetAlign:`right`,label:`오른쪽 · →`,children:(0,_.jsx)(`p`,{children:`패널 오른쪽, 화살표 오른쪽.`})})]})]}),L={name:`화살표 기준`,render:()=>(0,_.jsxs)(`div`,{className:`popover_demo-stage`,children:[(0,_.jsx)(`p`,{className:`form_field-hint`,children:`기준 비교`}),(0,_.jsxs)(`div`,{className:`popover_row`,children:[(0,_.jsx)(F,{arrowAnchor:`content`,label:`content`,children:(0,_.jsx)(`p`,{children:`패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.`})}),(0,_.jsx)(F,{arrowAnchor:`target`,label:`target`,children:(0,_.jsx)(`p`,{children:`패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.`})})]}),(0,_.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`target — 좌 · 가운데 · 우`}),(0,_.jsxs)(`div`,{className:`popover_row`,children:[(0,_.jsx)(F,{arrowAnchor:`target`,arrowTargetAlign:`left`,label:`left`,children:(0,_.jsx)(`p`,{children:`트리거 왼쪽을 가리킵니다.`})}),(0,_.jsx)(F,{arrowAnchor:`target`,label:`center`,children:(0,_.jsx)(`p`,{children:`트리거 가운데를 가리킵니다.`})}),(0,_.jsx)(F,{arrowAnchor:`target`,arrowTargetAlign:`right`,label:`right`,children:(0,_.jsx)(`p`,{children:`트리거 오른쪽을 가리킵니다.`})})]}),(0,_.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`mixed — 패널 가운데 · 화살표 조합`}),(0,_.jsxs)(`div`,{className:`popover_row`,children:[(0,_.jsx)(F,{panelAlign:`center`,arrowTargetAlign:`left`,label:`가운데 · ←`,children:(0,_.jsx)(`p`,{children:`패널 가운데, 화살표 트리거 왼쪽.`})}),(0,_.jsx)(F,{panelAlign:`center`,label:`가운데 · ●`,children:(0,_.jsx)(`p`,{children:`패널·화살표 모두 트리거 가운데.`})}),(0,_.jsx)(F,{panelAlign:`center`,arrowTargetAlign:`right`,label:`가운데 · →`,children:(0,_.jsx)(`p`,{children:`패널 가운데, 화살표 트리거 오른쪽.`})})]}),(0,_.jsx)(I,{})]})},R={name:`화살표 없음`,render:()=>(0,_.jsx)(h,{noArrow:!0,panelLabel:`화살표 없는 Popover`,label:`화살표 없음`,buttonProps:{variant:`ghost`},children:(0,_.jsx)(`p`,{children:`화살표가 표시되지 않는 패널입니다.`})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo panelLabel="안내"><p>트리거를 클릭하면 이 패널이 표시됩니다.</p></Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '라벨 없음',
  render: () => <Demo label="라벨 없음"><p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p></Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => <Demo initialOpen panelLabel="열린 Popover" label="열림" buttonProps={{
    variant: 'filled',
    color: 'primary'
  }}><p>정적 데모용 열린 상태입니다.</p></Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="popover_row" style={{
    alignItems: 'flex-start'
  }}><Demo size="sm" panelLabel="작은 Popover" label="Small" buttonProps={{
      size: 'sm'
    }}><p>작은 패널입니다. 짧은 안내에 적합합니다.</p></Demo><Demo panelLabel="기본 Popover" label="Medium"><p>기본 크기 패널입니다.</p></Demo><Demo size="lg" panelLabel="큰 Popover" label="Large" buttonProps={{
      size: 'lg'
    }}><p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p></Demo></div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '간격',
  render: () => <div className="popover_demo-stage"><p className="form_field-hint">전 방향 동일</p><div className="popover_row"><Demo offset="none" panelLabel="none" label="none" buttonProps={{
        size: 'sm'
      }}><p>간격 없음</p></Demo><Demo offset="sm" panelLabel="sm" label="sm" buttonProps={{
        size: 'sm'
      }}><p>좁은 간격</p></Demo><Demo panelLabel="md" label="md" buttonProps={{
        size: 'sm'
      }}><p>기본 간격</p></Demo><Demo offset="lg" panelLabel="lg" label="lg" buttonProps={{
        size: 'sm'
      }}><p>넓은 간격</p></Demo></div><p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>방향별 (offset-* · placement)</p><div className="popover_demo-placement" style={{
      minHeight: '12rem',
      padding: 0
    }}><div className="popover_demo-placement-cell-top"><Demo placement="top-center" offsetTop="lg" panelLabel="offset-top lg" label="위" buttonProps={{
          size: 'sm'
        }}><p>위쪽 간격</p></Demo></div><div className="popover_demo-placement-cell-left"><Demo placement="left" offsetLeft="lg" panelLabel="offset-left lg" label="왼쪽" buttonProps={{
          size: 'sm'
        }}><p>왼쪽 간격</p></Demo></div><div className="popover_demo-placement-cell-center"><Demo offsetBottom="lg" panelLabel="offset-bottom lg" label="아래" buttonProps={{
          size: 'sm'
        }}><p>아래쪽 간격</p></Demo></div><div className="popover_demo-placement-cell-right"><Demo placement="right" offsetRight="lg" panelLabel="offset-right lg" label="오른쪽" buttonProps={{
          size: 'sm'
        }}><p>오른쪽 간격</p></Demo></div></div></div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '제목',
  render: () => <Demo title="배송 안내" label="도움말" buttonProps={{
    variant: 'ghost'
  }}><p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p></Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '푸터',
  render: () => <Demo title="항목 삭제" label="삭제 확인" footer={{
    cancel: '취소',
    confirm: '삭제',
    color: 'danger'
  }}><p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p></Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '호버 트리거',
  render: () => <p>결제 시{' '}<Demo trigger="hover" closable={false} panelLabel="에스크로 설명" triggerContent={<Link className="popover_trigger" label="에스크로" />}>구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.</Demo>{' '}서비스를 이용할 수 있습니다.</p>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => <div className="popover_row"><Demo panelLabel="Button 트리거" label="Button" buttonProps={{
      variant: 'filled',
      color: 'primary'
    }}><p>버튼 트리거 예시입니다.</p></Demo><Demo panelLabel="Link 트리거" triggerContent={<Link className="popover_trigger" label="Link 트리거" />}><p>링크 스타일 트리거입니다.</p></Demo><Demo panelLabel="추가 정보" triggerContent={<Button className="popover_trigger" variant="ghost" iconOnly ariaLabel="정보" iconBefore={<Icon name="info" />} />}><p>아이콘 전용 트리거입니다.</p></Demo></div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '배치',
  render: () => <div className="popover_demo-stage"><div className="popover_demo-placement"><div className="popover_demo-placement-cell-top"><Demo placement="top-center" panelLabel="위쪽 가운데 배치" label="위" buttonProps={{
          size: 'sm'
        }}><p>트리거 위 · 가운데</p></Demo></div><div className="popover_demo-placement-cell-left"><Demo placement="left" panelLabel="왼쪽 배치" label="왼쪽" buttonProps={{
          size: 'sm'
        }}><p>트리거 왼쪽</p></Demo></div><div className="popover_demo-placement-cell-center"><Demo placement="bottom-center" panelLabel="아래쪽 가운데 배치" label="아래" buttonProps={{
          size: 'sm'
        }}><p>트리거 아래 · 가운데</p></Demo></div><div className="popover_demo-placement-cell-right"><Demo placement="right" panelLabel="오른쪽 배치" label="오른쪽" buttonProps={{
          size: 'sm'
        }}><p>트리거 오른쪽</p></Demo></div></div><div className="popover_row" style={{
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 'var(--space-xl)'
    }}><Demo placement="top" panelLabel="위쪽 왼쪽 정렬" label="위 · 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }}><p>패널 왼쪽 정렬</p></Demo><Demo panelLabel="아래쪽 왼쪽 정렬" label="아래 · 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }}><p>기본 배치</p></Demo><Demo placement="end" panelLabel="오른쪽 정렬" label="아래 · 오른쪽 정렬" buttonProps={{
        variant: 'ghost'
      }}><p>패널 오른쪽 정렬</p></Demo></div></div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '폼',
  render: () => <Demo title="빠른 메모" label="메모 추가" footer={{
    cancel: '취소',
    confirm: '저장'
  }}><div className="form_field"><label className="form_label" htmlFor="popover-memo-input">내용</label><Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" /></div></Demo>
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '화살표 기준',
  render: () => <div className="popover_demo-stage"><p className="form_field-hint">기준 비교</p><div className="popover_row"><ArrowDemo arrowAnchor="content" label="content"><p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p></ArrowDemo><ArrowDemo arrowAnchor="target" label="target"><p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p></ArrowDemo></div><p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>target — 좌 · 가운데 · 우</p><div className="popover_row"><ArrowDemo arrowAnchor="target" arrowTargetAlign="left" label="left"><p>트리거 왼쪽을 가리킵니다.</p></ArrowDemo><ArrowDemo arrowAnchor="target" label="center"><p>트리거 가운데를 가리킵니다.</p></ArrowDemo><ArrowDemo arrowAnchor="target" arrowTargetAlign="right" label="right"><p>트리거 오른쪽을 가리킵니다.</p></ArrowDemo></div><p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>mixed — 패널 가운데 · 화살표 조합</p><div className="popover_row"><ArrowDemo panelAlign="center" arrowTargetAlign="left" label="가운데 · ←"><p>패널 가운데, 화살표 트리거 왼쪽.</p></ArrowDemo><ArrowDemo panelAlign="center" label="가운데 · ●"><p>패널·화살표 모두 트리거 가운데.</p></ArrowDemo><ArrowDemo panelAlign="center" arrowTargetAlign="right" label="가운데 · →"><p>패널 가운데, 화살표 트리거 오른쪽.</p></ArrowDemo></div><MixedArrowRows /></div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '화살표 없음',
  render: () => <Demo noArrow panelLabel="화살표 없는 Popover" label="화살표 없음" buttonProps={{
    variant: 'ghost'
  }}><p>화살표가 표시되지 않는 패널입니다.</p></Demo>
}`,...R.parameters?.docs?.source}}},z=[`Basic`,`NoLabel`,`Open`,`Size`,`Offset`,`Title`,`Footer`,`Hover`,`Trigger`,`Placement`,`Form`,`ArrowAnchor`,`NoArrow`]})))()}export{j as a,O as c,m as d,D as f,B as h,P as i,E as l,M as m,w as n,R as o,k as p,A as r,T as s,L as t,N as u};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-Bdofg9ij.js";import{r as s,t as c}from"./Icon-CS3T14bP.js";import{a as l,n as u,t as d}from"./Card-Qb4sIkQJ.js";function f(){return(0,m.jsx)(c,{name:`inbox`})}function p({description:e,size:t=`md`,simple:n=!1,block:r=!1,icon:i,image:a,footer:o,children:s,className:c=``,...l}){let u=h.has(t)?t:`md`,d=[`empty`,u!==`md`&&`empty_${u}`,n&&`empty_simple`,r&&`empty_block`,c].filter(Boolean).join(` `),p=s??e;return(0,m.jsxs)(`div`,{...l,className:d,"data-component":`Empty`,role:`status`,children:[!n&&(0,m.jsx)(`div`,{className:`empty_image`,"data-slot":`icon`,"aria-hidden":`true`,children:i??a??(0,m.jsx)(f,{})}),p!=null&&(0,m.jsx)(`div`,{className:`empty_desc`,"data-slot":`description`,children:s??(0,m.jsx)(`p`,{children:e})}),o!=null&&(0,m.jsx)(`div`,{className:`empty_footer`,children:o})]})}var m,h;function g(){return(g=e((()=>{s(),m=i(),h=new Set([`sm`,`md`,`lg`]),f.__docgenInfo={description:``,methods:[],displayName:`EmptyImage`},p.__docgenInfo={description:``,methods:[],displayName:`Empty`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},simple:{defaultValue:{value:`false`,computed:!1},required:!1},block:{defaultValue:{value:`false`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var _=t({Basic:()=>E,Block:()=>j,Custom:()=>O,Footer:()=>D,Playground:()=>T,Simple:()=>A,Size:()=>k,__namedExportsOrder:()=>M,default:()=>w}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{n(),g(),a(),s(),l(),v=i(),y=p,b=o,x=c,S=d,C=u,w={title:`피드백/Empty`,component:y,decorators:[e=>(0,v.jsx)(`div`,{className:`empty-story-demo`,children:(0,v.jsx)(e,{})})],parameters:{layout:`padded`},args:{description:`데이터가 없습니다`,size:`md`,simple:!1,block:!1},argTypes:{...r,description:{control:`text`},size:{control:`select`,options:[`sm`,`md`,`lg`]},simple:{control:`boolean`},block:{control:`boolean`}}},T={name:`Playground`,render:e=>(0,v.jsx)(y,{...e})},E={name:`기본`,render:e=>(0,v.jsx)(y,{...e,description:`데이터가 없습니다`})},D={name:`액션`,render:e=>(0,v.jsx)(y,{...e,description:`등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.`,footer:(0,v.jsx)(b,{variant:`filled`,color:`primary`,size:`sm`,label:`프로젝트 만들기`})})},O={name:`커스텀 슬롯`,render:e=>(0,v.jsxs)(y,{...e,icon:(0,v.jsx)(x,{name:`search`}),description:void 0,children:[(0,v.jsx)(`strong`,{children:`검색 결과가 없습니다`}),(0,v.jsx)(`span`,{children:`다른 키워드로 다시 검색해 보세요.`})]})},k={name:`크기`,render:e=>(0,v.jsxs)(`div`,{className:`empty-size-demo`,children:[(0,v.jsx)(y,{...e,size:`sm`,description:`Small`}),(0,v.jsx)(y,{description:`Medium (기본)`}),(0,v.jsx)(y,{size:`lg`,description:`Large`})]})},A={name:`설명만`,render:e=>(0,v.jsx)(y,{...e,simple:!0,size:`sm`,description:`일정 없음`})},j={name:`블록 · 컨테이너`,render:e=>(0,v.jsxs)(`div`,{className:`empty-block-demo`,children:[(0,v.jsx)(S,{title:`알림 목록`,variant:`shadow`,children:(0,v.jsx)(C,{children:(0,v.jsx)(y,{...e,block:!0,description:`새 알림이 없습니다`})})}),(0,v.jsx)(`div`,{className:`table_wrap`,children:(0,v.jsxs)(`table`,{className:`table table_bordered`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{scope:`col`,children:`이름`}),(0,v.jsx)(`th`,{scope:`col`,children:`상태`}),(0,v.jsx)(`th`,{scope:`col`,children:`날짜`})]})}),(0,v.jsx)(`tbody`,{children:(0,v.jsx)(`tr`,{children:(0,v.jsx)(`td`,{colSpan:3,className:`empty-table-cell`,children:(0,v.jsx)(y,{block:!0,simple:!0,size:`sm`,description:`표시할 항목이 없습니다`})})})})]})})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Empty {...args} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Empty {...args} description="데이터가 없습니다" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '액션',
  render: args => <Empty {...args} description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요." footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '커스텀 슬롯',
  render: args => <Empty {...args} icon={<Icon name="search" />} description={undefined}>
      <strong>검색 결과가 없습니다</strong>
      <span>다른 키워드로 다시 검색해 보세요.</span>
    </Empty>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: args => <div className="empty-size-demo">
      <Empty {...args} size="sm" description="Small" />
      <Empty description="Medium (기본)" />
      <Empty size="lg" description="Large" />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '설명만',
  render: args => <Empty {...args} simple size="sm" description="일정 없음" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '블록 · 컨테이너',
  render: args => <div className="empty-block-demo">
      <Card title="알림 목록" variant="shadow">
        <CardBody>
          <Empty {...args} block description="새 알림이 없습니다" />
        </CardBody>
      </Card>
      <div className="table_wrap">
        <table className="table table_bordered">
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">상태</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className="empty-table-cell">
                <Empty block simple size="sm" description="표시할 항목이 없습니다" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`Basic`,`Footer`,`Custom`,`Size`,`Simple`,`Block`]})))()}export{D as a,N as c,_ as i,j as n,A as o,O as r,k as s,E as t};
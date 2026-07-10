import{_ as a}from"./TabMenu-g4YJegxm.js";import{_ as t}from"./Tabs-4vz7FIcf.js";import{B as e}from"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";import"./useRipple-oORGvIsP.js";import"./Button-C3SXv-sJ.js";import"./Icon-D97OEunV.js";const B={title:"Components/네비게이션/TabMenu",id:"components-tab-menu",component:a,tags:["autodocs"]},n={render:()=>({components:{TabMenu:a,Tabs:t},setup(){return()=>e(t,{mode:"dynamic"},{default:()=>[e(a,{label:"메뉴 1",value:"a",active:!0}),e(a,{label:"메뉴 2",value:"b"})],panel:({value:s})=>e("p",s==="a"?"메뉴 1 내용":"메뉴 2 내용")})}})};var u,o,r;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TabMenu,
      Tabs
    },
    setup() {
      return () => h(Tabs, {
        mode: 'dynamic'
      }, {
        default: () => [h(TabMenu, {
          label: '메뉴 1',
          value: 'a',
          active: true
        }), h(TabMenu, {
          label: '메뉴 2',
          value: 'b'
        })],
        panel: ({
          value
        }) => h('p', value === 'a' ? '메뉴 1 내용' : '메뉴 2 내용')
      });
    }
  })
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const f=["Default"];export{n as Default,f as __namedExportsOrder,B as default};

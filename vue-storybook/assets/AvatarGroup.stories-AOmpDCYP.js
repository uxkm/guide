import{_ as n,c as e,d as i,g as p,h as u}from"./avatar-api-BKBIZqaG.js";import{_ as c}from"./Avatar-De5lKVUK.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useDemoCode-B9b0dRAo.js";const l=[{title:"API · AvatarGroup Props",tables:[{columns:i,rows:e,codeColumn:"name"}]},{title:"API · AvatarGroup Slots",tables:[{columns:u,rows:p,codeColumn:"name"}]}],g={title:"Components/데이터 표시/AvatarGroup",id:"components-avatar-group",component:n,tags:["autodocs"],argTypes:{ariaLabel:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:l,docs:{description:{component:"여러 Avatar를 겹쳐 표시하는 그룹 컨테이너입니다."}}}},a={args:{ariaLabel:"팀 멤버 3명"},render:s=>({components:{AvatarGroup:n,Avatar:c},setup(){return{args:s}},template:`<AvatarGroup v-bind="args">
      <Avatar color="primary" initials="김" aria-hidden />
      <Avatar color="success" initials="이" aria-hidden />
      <Avatar color="warning" initials="박" aria-hidden />
    </AvatarGroup>`})};var r,o,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ariaLabel: '팀 멤버 3명'
  },
  render: args => ({
    components: {
      AvatarGroup,
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`<AvatarGroup v-bind="args">
      <Avatar color="primary" initials="김" aria-hidden />
      <Avatar color="success" initials="이" aria-hidden />
      <Avatar color="warning" initials="박" aria-hidden />
    </AvatarGroup>\`
  })
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const G=["Playground"];export{a as Playground,G as __namedExportsOrder,g as default};

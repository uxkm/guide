import{_ as t,a as l}from"./Tabs-4vz7FIcf.js";import{_ as s}from"./TabPanel-Cd93Mhhn.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";import"./Button-C3SXv-sJ.js";import"./Icon-D97OEunV.js";const c={title:"Components/네비게이션/TabsTab",id:"components-tabs-tab",component:l,tags:["autodocs"]},a={parameters:{docs:{source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
import TabsTab from '@uxkm/ui/components/TabsTab.vue';
<\/script>

<template>
  <Tabs>
    <TabsTab id="tab-1" panel-id="panel-1" label="탭 1" active />
    <TabsTab id="tab-2" panel-id="panel-2" label="탭 2" />
    <TabPanel label="탭 1" active>첫 번째 패널</TabPanel>
    <TabPanel label="탭 2">두 번째 패널</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},render:()=>({components:{TabsTab:l,Tabs:t,TabPanel:s},template:`<Tabs>
        <TabsTab id="tab-1" panel-id="panel-1" label="탭 1" active />
        <TabsTab id="tab-2" panel-id="panel-2" label="탭 2" />
        <TabPanel label="탭 1" active>첫 번째 패널</TabPanel>
        <TabPanel label="탭 2">두 번째 패널</TabPanel>
      </Tabs>`})};var e,n,b;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\nimport TabsTab from '@uxkm/ui/components/TabsTab.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs>\\n    <TabsTab id=\\"tab-1\\" panel-id=\\"panel-1\\" label=\\"탭 1\\" active />\\n    <TabsTab id=\\"tab-2\\" panel-id=\\"panel-2\\" label=\\"탭 2\\" />\\n    <TabPanel label=\\"탭 1\\" active>첫 번째 패널</TabPanel>\\n    <TabPanel label=\\"탭 2\\">두 번째 패널</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      TabsTab,
      Tabs,
      TabPanel
    },
    template: \`<Tabs>
        <TabsTab id="tab-1" panel-id="panel-1" label="탭 1" active />
        <TabsTab id="tab-2" panel-id="panel-2" label="탭 2" />
        <TabPanel label="탭 1" active>첫 번째 패널</TabPanel>
        <TabPanel label="탭 2">두 번째 패널</TabPanel>
      </Tabs>\`
  })
}`,...(b=(n=a.parameters)==null?void 0:n.docs)==null?void 0:b.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,c as default};

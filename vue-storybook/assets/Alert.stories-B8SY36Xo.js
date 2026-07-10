import{_ as e}from"./Alert-Da87oqmP.js";import{_ as u}from"./Button-C3SXv-sJ.js";import{_ as n}from"./Link-BBBlqIKe.js";import{r as H,a as R}from"./ripple-api-C5ZjLJl-.js";import"./vue.esm-bundler-BaZlnz8B.js";import"./Icon-D97OEunV.js";import"./useRipple-oORGvIsP.js";import"./useDemoCode-B9b0dRAo.js";const V=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],j=[{name:"color",type:"'info' | 'success' | 'warning' | 'danger'",default:"info",description:"의미 색상. danger는 color_error"},{name:"title",type:"string",default:"—",description:"알림 제목 (alert_title)"},{name:"description",type:"string",default:"—",description:"본문. default 슬롯으로 대체"},{name:"closable",type:"boolean",default:"false",description:"닫기 버튼 (alert_close)"},{name:"show-icon",type:"boolean",default:"true",description:"기본 아이콘 표시"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"alert_sm · alert_lg"},{name:"role",type:"string",default:"alert",description:"루트 role (alert · status 등)"},H],q=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],G=[{name:"default",description:"본문 (description prop 대체)"},{name:"icon",description:"커스텀 아이콘 (alert_icon)"},{name:"actions",description:"본문 아래 액션 버튼·링크"}],J=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],K=[{name:"alert",description:"알림 루트"},{name:"alert_sm · alert_lg",description:"크기"},{name:"alert_icon · alert_body · alert_title · alert_desc",description:"구조 파트"},{name:"alert_close",description:"닫기 버튼"},{name:"color_info · color_success · color_warning · color_error",description:"의미 색상"},...R],Q=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],U=[{name:"close",description:"닫기 버튼 클릭 시"}],W=[{title:"API · Props",tables:[{columns:V,rows:j,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:q,rows:G,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:Q,rows:U,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:J,rows:K,codeColumn:"name"}]}],oe={title:"Components/피드백/Alert",id:"components-alert",component:e,tags:["autodocs"],argTypes:{color:{control:"select",options:["info","success","warning","danger"],type:{name:"enum",summary:"'info' | 'success' | 'warning' | 'danger'"}},title:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},showIcon:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},role:{control:"text",type:{name:"string",summary:"string"}}},parameters:{layout:"padded",apiSections:W}},t={args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:$=>({components:{Alert:e},setup(){return{args:$}},template:'<Alert v-bind="args" />'})},r={name:"기본",parameters:{demoPreview:{stack:!0},docs:{description:{story:"공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
  <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
  <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
  <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:`<Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
    <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
    <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
    <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />`})},o={name:"설명만",parameters:{demoPreview:{stack:!0},docs:{description:{story:"제목 없이 alert_desc만으로 짧은 메시지를 표시합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
  <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:`<Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
    <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />`})},C={name:"아이콘 없음",parameters:{demoPreview:{stack:!0},docs:{description:{story:"alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
  <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:`<Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
    <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />`})},l={name:"크기",parameters:{demoPreview:{stack:!0},docs:{description:{story:"alert_sm · alert_lg로 스케일을 조절합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
  <Alert color="info" title="Medium" description="기본 크기입니다." />
  <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:`<Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
    <Alert color="info" title="Medium" description="기본 크기입니다." />
    <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />`})},s={name:"닫기 가능",parameters:{demoPreview:{stack:!0},docs:{description:{story:"alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
  <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:`<Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
    <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />`})},i={name:"액션",parameters:{demoPreview:{stack:!0},docs:{description:{story:"alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
    <template #actions>
      <div class="alert_actions">
        <Button variant="filled" color="danger" size="sm" label="다시 시도" />
        <Button variant="ghost" size="sm" label="취소" />
      </div>
    </template>
  </Alert>
  <Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다.">
    <template #actions>
      <div class="alert_actions">
        <Link href="#" size="sm" label="약관 보기" />
        <Button variant="text" color="primary" size="sm" label="동의하기" />
      </div>
    </template>
  </Alert>
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:`<Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
      <template #actions>
        <div class="alert_actions">
          <Button variant="filled" color="danger" size="sm" label="다시 시도" />
          <Button variant="ghost" size="sm" label="취소" />
        </div>
      </template>
    </Alert>

    <Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다.">
      <template #actions>
        <div class="alert_actions">
          <Link href="#" size="sm" label="약관 보기" />
          <Button variant="text" color="primary" size="sm" label="동의하기" />
        </div>
      </template>
    </Alert>`})},a={name:"배너",parameters:{demoPreview:{stack:!0},docs:{description:{story:"alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:'<Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />'})},c={name:"문맥 속 사용",parameters:{demoPreview:{stack:!0},docs:{description:{story:"폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
import Link from '@uxkm/ui/components/Link.vue';
<\/script>

<template>
  <Alert color="info" title="업데이트 안내">
    새 버전이 출시되었습니다.
    <Link href="#" size="sm" label="릴리스 노트 보기" />
  </Alert>
  <form class="form_layout" novalidate>
    <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />
    <div class="form_field">
      <label class="form_label" for="alert-ex-email">이메일</label>
      <input type="email" class="input is-error" id="alert-ex-email" value="invalid-email" aria-invalid="true" />
    </div>
  </form>
</template>`,language:"vue"}}},render:()=>({components:{Alert:e,Button:u,Link:n},template:`<Alert color="info" title="업데이트 안내">
      새 버전이 출시되었습니다.
      <Link href="#" size="sm" label="릴리스 노트 보기" />
    </Alert>

    <form class="form_layout" novalidate>
      <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />

      <div class="form_field">
        <label class="form_label" for="alert-ex-email">이메일</label>
        <input type="email" class="input is-error" id="alert-ex-email" value="invalid-email" aria-invalid="true" />
      </div>
    </form>`})};var B,m,p;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args" />'
  })
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,A,D;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\n<\/script>\\n\\n<template>\\n  <Alert color=\\"info\\" title=\\"정보\\" description=\\"변경 사항이 저장되었습니다.\\" />\\n  <Alert color=\\"success\\" title=\\"성공\\" description=\\"요청이 성공적으로 처리되었습니다.\\" />\\n  <Alert color=\\"warning\\" title=\\"주의\\" description=\\"세션이 곧 만료됩니다. 저장해 주세요.\\" />\\n  <Alert color=\\"danger\\" title=\\"오류\\" description=\\"네트워크 연결을 확인해 주세요.\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
    <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
    <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
    <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />\`
  })
}`,...(D=(A=r.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var f,g,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "설명만",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "제목 없이 alert_desc만으로 짧은 메시지를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\n<\/script>\\n\\n<template>\\n  <Alert color=\\"info\\" description=\\"새 기능이 추가되었습니다. 설정에서 확인해 보세요.\\" />\\n  <Alert color=\\"success\\" role=\\"status\\" description=\\"프로필이 업데이트되었습니다.\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
    <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />\`
  })
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var E,b,k;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "아이콘 없음",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\n<\/script>\\n\\n<template>\\n  <Alert :show-icon=\\"false\\" color=\\"warning\\" title=\\"점검 안내\\" description=\\"오늘 02:00~04:00 서비스 점검이 예정되어 있습니다.\\" />\\n  <Alert :show-icon=\\"false\\" color=\\"info\\" description=\\"이 페이지는 데모 목적으로만 사용됩니다.\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
    <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />\`
  })
}`,...(k=(b=C.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var _,y,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "alert_sm · alert_lg로 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\n<\/script>\\n\\n<template>\\n  <Alert size=\\"sm\\" color=\\"info\\" title=\\"Small\\" description=\\"폼 필드 아래 등 좁은 영역에 사용합니다.\\" />\\n  <Alert color=\\"info\\" title=\\"Medium\\" description=\\"기본 크기입니다.\\" />\\n  <Alert size=\\"lg\\" color=\\"info\\" title=\\"Large\\" description=\\"페이지 상단 등 눈에 띄는 안내에 사용합니다.\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
    <Alert color="info" title="Medium" description="기본 크기입니다." />
    <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />\`
  })
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var F,x,L;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "닫기 가능",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\n<\/script>\\n\\n<template>\\n  <Alert closable color=\\"info\\" title=\\"새 소식\\" description=\\"대시보드가 새롭게 개편되었습니다.\\" />\\n  <Alert closable color=\\"warning\\" description=\\"브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요.\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
    <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />\`
  })
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var z,P,h;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "액션",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Alert color=\\"danger\\" title=\\"저장 실패\\" description=\\"변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.\\">\\n    <template #actions>\\n      <div class=\\"alert_actions\\">\\n        <Button variant=\\"filled\\" color=\\"danger\\" size=\\"sm\\" label=\\"다시 시도\\" />\\n        <Button variant=\\"ghost\\" size=\\"sm\\" label=\\"취소\\" />\\n      </div>\\n    </template>\\n  </Alert>\\n  <Alert color=\\"info\\" title=\\"이용 약관 변경\\" description=\\"2026년 3월 1일부터 새 약관이 적용됩니다.\\">\\n    <template #actions>\\n      <div class=\\"alert_actions\\">\\n        <Link href=\\"#\\" size=\\"sm\\" label=\\"약관 보기\\" />\\n        <Button variant=\\"text\\" color=\\"primary\\" size=\\"sm\\" label=\\"동의하기\\" />\\n      </div>\\n    </template>\\n  </Alert>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
      <template #actions>
        <div class="alert_actions">
          <Button variant="filled" color="danger" size="sm" label="다시 시도" />
          <Button variant="ghost" size="sm" label="취소" />
        </div>
      </template>
    </Alert>

    <Alert color="info" title="이용 약관 변경" description="2026년 3월 1일부터 새 약관이 적용됩니다.">
      <template #actions>
        <div class="alert_actions">
          <Link href="#" size="sm" label="약관 보기" />
          <Button variant="text" color="primary" size="sm" label="동의하기" />
        </div>
      </template>
    </Alert>\`
  })
}`,...(h=(P=i.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var S,I,M;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "배너",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\n<\/script>\\n\\n<template>\\n  <Alert class=\\"alert_banner\\" color=\\"warning\\" closable description=\\"시스템 점검으로 일부 기능이 제한될 수 있습니다.\\" />\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />\`
  })
}`,...(M=(I=a.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var O,T,N;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "문맥 속 사용",
  parameters: {
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport Alert from '@uxkm/ui/components/Alert.vue';\\nimport Link from '@uxkm/ui/components/Link.vue';\\n<\/script>\\n\\n<template>\\n  <Alert color=\\"info\\" title=\\"업데이트 안내\\">\\n    새 버전이 출시되었습니다.\\n    <Link href=\\"#\\" size=\\"sm\\" label=\\"릴리스 노트 보기\\" />\\n  </Alert>\\n  <form class=\\"form_layout\\" novalidate>\\n    <Alert color=\\"danger\\" title=\\"입력 내용을 확인해 주세요\\" description=\\"이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요.\\" />\\n    <div class=\\"form_field\\">\\n      <label class=\\"form_label\\" for=\\"alert-ex-email\\">이메일</label>\\n      <input type=\\"email\\" class=\\"input is-error\\" id=\\"alert-ex-email\\" value=\\"invalid-email\\" aria-invalid=\\"true\\" />\\n    </div>\\n  </form>\\n</template>",
        language: 'vue'
      }
    }
  },
  render: () => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`<Alert color="info" title="업데이트 안내">
      새 버전이 출시되었습니다.
      <Link href="#" size="sm" label="릴리스 노트 보기" />
    </Alert>

    <form class="form_layout" novalidate>
      <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />

      <div class="form_field">
        <label class="form_label" for="alert-ex-email">이메일</label>
        <input type="email" class="input is-error" id="alert-ex-email" value="invalid-email" aria-invalid="true" />
      </div>
    </form>\`
  })
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const Ce=["Playground","Basic","DescOnly","NoIcon","Size","Close","Actions","Banner","Context"];export{i as Actions,a as Banner,r as Basic,s as Close,c as Context,o as DescOnly,C as NoIcon,t as Playground,l as Size,Ce as __namedExportsOrder,oe as default};

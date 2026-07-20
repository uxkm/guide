import{Y as e,X as T,q as $}from"./iframe-CAswI7Qe.js";import{w as u,s as q}from"./story-renders-DjeoaiCa.js";import{e as H,a as V}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";const X=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Y=[{name:"color",type:"'info' | 'success' | 'warning' | 'danger'",default:"info",description:"의미 색상. danger는 color_error"},{name:"title",type:"string",default:"—",description:"알림 제목 (alert_title)"},{name:"description",type:"string",default:"—",description:"본문. default 슬롯으로 대체"},{name:"closable",type:"boolean",default:"false",description:"닫기 버튼 (alert_close)"},{name:"show-icon",type:"boolean",default:"true",description:"기본 아이콘 표시"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"alert_sm · alert_lg"},{name:"role",type:"string",default:"alert",description:"루트 role (alert · status 등)"},H],j=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],G=[{name:"default",description:"본문 (description prop 대체)"},{name:"icon",description:"커스텀 아이콘 (alert_icon)"},{name:"actions",description:"본문 아래 액션 버튼·링크"}],J=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],K=[{name:"alert",description:"알림 루트"},{name:"alert_sm · alert_lg",description:"크기"},{name:"alert_icon · alert_body · alert_title · alert_desc",description:"구조 파트"},{name:"alert_close",description:"닫기 버튼"},{name:"color_info · color_success · color_warning · color_error",description:"의미 색상"},...V],Q=[{key:"name",label:"이벤트"},{key:"description",label:"설명"}],U=[{name:"close",description:"닫기 버튼 클릭 시"}],W=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Z=[{name:"--alert-padding-y · --alert-padding-x · --alert-gap",default:"var(--space-md) · var(--space-lg) · var(--space-md)",description:"기본(md) 패딩·간격"},{name:"--alert-font-size · --alert-line-height",default:"var(--text-size-base) · 1.5",description:"본문 타이포"},{name:"--alert-title-weight · --alert-title-gap",default:"600 · var(--space-xs)",description:"제목 두께·간격"},{name:"--alert-desc-opacity",default:"0.85",description:"설명 텍스트 불투명도"},{name:"--alert-icon-size · --alert-icon-offset",default:"1.25rem · 0.1rem",description:"아이콘 크기·정렬"},{name:"--alert-close-size",default:"1.25rem",description:"닫기 버튼 크기"},{name:"--alert-actions-gap · --alert-actions-margin-top",default:"var(--space-sm) · var(--space-sm)",description:"액션 영역"},{name:"--alert-padding-y-sm · --alert-padding-x-sm · --alert-font-size-sm",default:"var(--space-sm) · var(--space-md) · var(--text-size-sm)",description:"sm 크기"},{name:"--alert-icon-size-sm · --alert-close-size-sm",default:"1rem · 1rem",description:"sm 아이콘·닫기"},{name:"--alert-padding-y-lg · --alert-padding-x-lg",default:"var(--space-lg) · var(--space-xl)",description:"lg 패딩"},{name:"--alert-icon-size-lg · --alert-close-size-lg",default:"1.5rem · 1.5rem",description:"lg 아이콘·닫기"}],ee=[{title:"API · Props",tables:[{columns:X,rows:Y,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:j,rows:G,codeColumn:"name"}]},{title:"API · Events",tables:[{columns:Q,rows:U,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:J,rows:K,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:W,rows:Z,codeColumn:"name"}]}],le={title:"Components/피드백/Alert",id:"components-alert",component:e,tags:["autodocs"],argTypes:{color:{control:"select",options:["info","success","warning","danger"],type:{name:"enum",summary:"'info' | 'success' | 'warning' | 'danger'"}},title:{control:"text",type:{name:"string",summary:"string"}},description:{control:"text",type:{name:"string",summary:"string"}},closable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},showIcon:{control:"boolean",type:{name:"boolean",summary:"boolean"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},role:{control:"text",type:{name:"string",summary:"string"}}},parameters:{controls:{disable:!1},layout:"padded",apiSections:ee}},n={parameters:{controls:{disable:!1}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:(ue,N)=>({components:{Alert:e},setup(){return{args:q(N)}},template:'<Alert v-bind="args" />'})},t={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"공통 color_* 클래스로 info · success · warning · error 네 가지 의미를 표현합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
  <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
  <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
  <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",size:"md",role:"alert"},render:u(()=>({components:{Alert:e},template:`<Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />`}))},r={name:"설명만",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"제목 없이 alert_desc만으로 짧은 메시지를 표시합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
  <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:u(()=>({components:{Alert:e},template:`<Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />`}))},o={name:"아이콘 없음",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_icon을 생략해 텍스트만 표시합니다. 간단한 안내에 적합합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
  <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:u(()=>({components:{Alert:e},template:`<Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
      <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />`}))},l={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_sm · alert_lg로 스케일을 조절합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
  <Alert color="info" title="Medium" description="기본 크기입니다." />
  <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:u(()=>({components:{Alert:e},template:`<Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />`}))},s={name:"닫기 가능",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_close 버튼으로 사용자가 알림을 닫을 수 있습니다. aria-label로 닫기 동작을 설명합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
  <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:u(()=>({components:{Alert:e},template:`<Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />`}))},C={name:"액션",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_actions로 확인·취소 등 후속 동작 버튼을 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:u(()=>({components:{Alert:e,Button:$,Link:T},template:`        <Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
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
        </Alert>`}))},a={name:"배너",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"alert_banner로 페이지 상단 전체 너비 알림을 표시합니다. 좌우 테두리와 모서리 반경을 제거합니다."},source:{code:`<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
<\/script>

<template>
  <Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:u(()=>({components:{Alert:e},template:'<Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />'}))},i={name:"문맥 속 사용",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"폼·카드 등 다른 컴포넌트와 함께 사용합니다. 설명 안에 링크를 포함할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{color:"info",title:"제목",description:"설명 텍스트입니다.",closable:!1,showIcon:!0,size:"md",role:"alert"},render:u(()=>({components:{Alert:e,Link:T},template:`<Alert color="info" title="업데이트 안내">
        새 버전이 출시되었습니다.
        <Link href="#" size="sm" label="릴리스 노트 보기" />
      </Alert>
      <form class="form_layout" novalidate>
        <Alert color="danger" title="입력 내용을 확인해 주세요" description="이메일 형식과 비밀번호 조건을 수정한 뒤 다시 시도해 주세요." />
        <div class="form_field">
          <label class="form_label" for="alert-ex-email">이메일</label>
          <input type="email" class="input is-error" id="alert-ex-email" value="invalid-email" aria-invalid="true" />
        </div>
      </form>`}))};var c,m,B;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: (_args, context) => ({
    components: {
      Alert
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: '<Alert v-bind="args" />'
  })
}`,...(B=(m=n.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var p,d,A;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert
    },
    template: \`<Alert color="info" title="정보" description="변경 사항이 저장되었습니다." />
      <Alert color="success" title="성공" description="요청이 성공적으로 처리되었습니다." />
      <Alert color="warning" title="주의" description="세션이 곧 만료됩니다. 저장해 주세요." />
      <Alert color="danger" title="오류" description="네트워크 연결을 확인해 주세요." />\`
  }))
}`,...(A=(d=t.parameters)==null?void 0:d.docs)==null?void 0:A.source}}};var D,f,g;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "설명만",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert
    },
    template: \`<Alert color="info" description="새 기능이 추가되었습니다. 설정에서 확인해 보세요." />
      <Alert color="success" role="status" description="프로필이 업데이트되었습니다." />\`
  }))
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,b,E;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "아이콘 없음",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert
    },
    template: \`<Alert :show-icon="false" color="warning" title="점검 안내" description="오늘 02:00~04:00 서비스 점검이 예정되어 있습니다." />
      <Alert :show-icon="false" color="info" description="이 페이지는 데모 목적으로만 사용됩니다." />\`
  }))
}`,...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var w,y,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert
    },
    template: \`<Alert size="sm" color="info" title="Small" description="폼 필드 아래 등 좁은 영역에 사용합니다." />
      <Alert color="info" title="Medium" description="기본 크기입니다." />
      <Alert size="lg" color="info" title="Large" description="페이지 상단 등 눈에 띄는 안내에 사용합니다." />\`
  }))
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,z,x;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "닫기 가능",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert
    },
    template: \`<Alert closable color="info" title="새 소식" description="대시보드가 새롭게 개편되었습니다." />
      <Alert closable color="warning" description="브라우저가 오래되었습니다. 최신 버전으로 업데이트해 주세요." />\`
  }))
}`,...(x=(z=s.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var h,F,P;C.parameters={...C.parameters,docs:{...(h=C.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "액션",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert,
      Button,
      Link
    },
    template: \`        <Alert color="danger" title="저장 실패" description="변경 사항을 저장하지 못했습니다. 다시 시도해 주세요.">
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
  }))
}`,...(P=(F=C.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var L,I,S;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "배너",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert
    },
    template: \`<Alert class="alert_banner" color="warning" closable description="시스템 점검으로 일부 기능이 제한될 수 있습니다." />\`
  }))
}`,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var R,M,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "문맥 속 사용",
  parameters: {
    controls: {
      disable: false
    },
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
  args: {
    color: "info",
    title: "제목",
    description: "설명 텍스트입니다.",
    closable: false,
    showIcon: true,
    size: "md",
    role: "alert"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Alert,
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
  }))
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const se=["Playground","Basic","DescOnly","NoIcon","Size","Close","Actions","Banner","Context"];export{C as Actions,a as Banner,t as Basic,s as Close,i as Context,r as DescOnly,o as NoIcon,n as Playground,l as Size,se as __namedExportsOrder,le as default};

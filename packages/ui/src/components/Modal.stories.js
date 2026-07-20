import Modal from './Modal.vue';
import { withDocsCanvasRender, storyArgsRef } from '@/storybook/story-renders.js';
import Button from './Button.vue';
import {
  modalClassColumns,
  modalClasses,
  modalPropColumns,
  modalProps,
  modalSlotColumns,
  modalSlots,
  modalTokenColumns,
  modalTokens,
} from '@doc-data/modal-api';

const apiSections = [
  {
    title: "API · Props",
    tables: [
      { columns: modalPropColumns, rows: modalProps, codeColumn: "name" },
    ],
  },
  {
    title: "API · Slots",
    tables: [
      { columns: modalSlotColumns, rows: modalSlots, codeColumn: "name" },
    ],
  },
  {
    title: "클래스 · 속성",
    description: "Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",
    tables: [
      { columns: modalClassColumns, rows: modalClasses, codeColumn: "name" },
    ],
  },
  {
    title: "디자인 토큰",
    tables: [
      { columns: modalTokenColumns, rows: modalTokens, codeColumn: "name" },
    ],
  },
];

/** Docs·Canvas 동일 — 트리거 + Modal을 한 템플릿에 포함 (Controls 오버레이 Modal 추가 방지) */
function modalDemo(docsRender) {
  return withDocsCanvasRender(docsRender, docsRender);
}

/** 예시 영역 — 충분한 높이·너비의 프레임 안에서 Modal UI를 확인 */
function frameDemo(inner) {
  return `
    <div class="modal_demo-frame">
      <div class="modal_demo-content">
        ${inner}
      </div>
    </div>
  `;
}

export default {
  title: 'Components/피드백/Modal',
  id: 'components-modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text', type: { name: 'string', summary: "string" }},
    size: { control: 'select', options: ["sm","md","lg","fullscreen"], type: { name: 'enum', summary: "'sm' | 'md' | 'lg' | 'fullscreen'" }},
    scrollable: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    backdrop: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
    title: { control: 'text', type: { name: 'string', summary: "string" }},
    open: { control: 'boolean', type: { name: 'boolean', summary: "boolean" }},
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: {
    id: "story-modal",
    size: "md",
    scrollable: false,
    backdrop: true,
    title: "제목",
    open: true,
  },
  render: (_args, context) => ({
    components: { Modal },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `
      <div class="modal_demo-frame">
        <div class="modal_demo-content">
          <p>Controls로 open · size · scrollable · backdrop을 조절하세요.</p>
        </div>
        <Modal
          v-bind="args"
          :class="{ 'modal_demo-static': args.open }"
        >
          <p>모달 본문입니다.</p>
          <template #footer>
            <button type="button" class="btn btn_ghost" data-modal-close>
              <span class="btn_label">취소</span>
            </button>
            <button type="button" class="btn btn_filled color_primary" data-modal-close>
              <span class="btn_label">확인</span>
            </button>
          </template>
        </Modal>
      </div>
    `,
  }),
};

export const Basic = {
  name: "기본",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
</script>

<template>
  <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
  <Modal id="modal-basic" title="알림">
    <p>Modal 대화상자 본문입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목",
  },
  render: modalDemo(() => ({
    components: { Button, Modal },
    template: frameDemo(`
      <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
      <Modal id="modal-basic" title="알림">
        <p>Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 닫을 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="확인" data-modal-close />
        </template>
      </Modal>
    `),
  })),
};

export const Size = {
  name: "크기",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
</script>

<template>
  <div class="modal_demo-row">
    <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
    <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
    <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
    <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
  </div>
  <Modal id="modal-size-sm" size="sm" title="Small">
    <p>좁은 너비</p>
  </Modal>
  <Modal id="modal-size-default" title="Default">
    <p>기본 너비 32rem</p>
  </Modal>
  <Modal id="modal-size-lg" size="lg" title="Large">
    <p>넓은 너비</p>
  </Modal>
  <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
    <p>뷰포트 전체</p>
  </Modal>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목",
  },
  render: modalDemo(() => ({
    components: { Button, Modal },
    template: frameDemo(`
      <div class="modal_demo-row">
        <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
        <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
        <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
        <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
      </div>
      <Modal id="modal-size-sm" size="sm" title="Small">
        <p><code class="typo_code">modal_sm</code> — 확인·간단한 알림에 적합한 좁은 너비입니다.</p>
      </Modal>
      <Modal id="modal-size-default" title="Default">
        <p>기본 너비 32rem</p>
      </Modal>
      <Modal id="modal-size-lg" size="lg" title="Large">
        <p><code class="typo_code">modal_lg</code> — 상세 보기·넓은 폼·테이블 미리보기 등에 사용합니다.</p>
      </Modal>
      <Modal id="modal-size-fullscreen" size="fullscreen" title="Fullscreen">
        <p><code class="typo_code">modal_fullscreen</code> — 뷰포트 전체를 사용하는 대화상자입니다.</p>
        <template #footer>
          <Button variant="ghost" label="닫기" data-modal-close />
        </template>
      </Modal>
    `),
  })),
};

export const Footer = {
  name: "헤더·푸터",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
</script>

<template>
  <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
  <Modal id="modal-footer" title="새 항목 추가">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목",
  },
  render: modalDemo(() => ({
    components: { Button, Modal },
    template: frameDemo(`
      <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
      <Modal id="modal-footer" title="새 항목 추가">
        <div class="form_field">
          <label class="form_field-label" for="modal-item-name">이름</label>
          <input class="input" type="text" id="modal-item-name" placeholder="항목 이름" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="modal-item-desc">설명</label>
          <textarea class="textarea" id="modal-item-desc" rows="3" placeholder="간단한 설명"></textarea>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="저장" data-modal-close />
        </template>
      </Modal>
    `),
  })),
};

export const Confirm = {
  name: "확인 대화상자",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
</script>

<template>
  <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
  <Modal id="modal-confirm" size="sm" title="항목 삭제">
    <p>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="danger" label="삭제" data-modal-close />
    </template>
  </Modal>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    id: "story-modal",
    size: "sm",
    title: "제목",
  },
  render: modalDemo(() => ({
    components: { Button, Modal },
    template: frameDemo(`
      <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
      <Modal id="modal-confirm" size="sm" title="항목 삭제" aria-describedby="modal-confirm-desc">
        <p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="danger" label="삭제" data-modal-close />
        </template>
      </Modal>
    `),
  })),
};

export const Form = {
  name: "폼",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
</script>

<template>
  <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
  <Modal id="modal-form" title="프로필 편집">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    id: "story-modal",
    size: "md",
    title: "제목",
  },
  render: modalDemo(() => ({
    components: { Button, Modal },
    template: frameDemo(`
      <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
      <Modal id="modal-form" title="프로필 편집">
        <div class="form_layout form_layout-vertical">
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-name">이름</label>
            <input class="input" type="text" id="modal-profile-name" value="홍길동" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-email">이메일</label>
            <input class="input" type="email" id="modal-profile-email" value="hong@example.com" />
          </div>
          <div class="form_field">
            <label class="form_field-label" for="modal-profile-bio">소개</label>
            <textarea class="textarea" id="modal-profile-bio" rows="3" placeholder="자기소개를 입력하세요"></textarea>
          </div>
        </div>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="저장" data-modal-close />
        </template>
      </Modal>
    `),
  })),
};

export const Scroll = {
  name: "스크롤 본문",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: "modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
</script>

<template>
  <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
  <Modal id="modal-scroll" scrollable title="이용 약관">
    <p>긴 본문…</p>
    <template #footer>
      <Button variant="ghost" label="거부" data-modal-close />
      <Button variant="filled" color="primary" label="동의" data-modal-close />
    </template>
  </Modal>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    id: "story-modal",
    size: "md",
    scrollable: true,
    title: "제목",
  },
  render: modalDemo(() => ({
    components: { Button, Modal },
    template: frameDemo(`
      <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
      <Modal id="modal-scroll" scrollable title="이용 약관">
        <p>제1조 (목적) 본 약관은 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        <p>제2조 (정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① "서비스"란 회사가 제공하는 모든 온라인 서비스를 의미합니다. ② "이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</p>
        <p>제3조 (약관의 효력) 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</p>
        <p>제4조 (서비스의 제공) 회사는 다음과 같은 서비스를 제공합니다. 정보 제공, 커뮤니티, 기타 회사가 정하는 서비스.</p>
        <p>제5조 (서비스의 중단) 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
        <p>제6조 (회원가입) 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
        <p>제7조 (회원 탈퇴 및 자격 상실) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</p>
        <p>제8조 (개인정보보호) 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.</p>
        <p>제9조 (회사의 의무) 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.</p>
        <p>제10조 (이용자의 의무) 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항을 준수하여야 합니다.</p>
        <template #footer>
          <Button variant="ghost" label="거부" data-modal-close />
          <Button variant="filled" color="primary" label="동의" data-modal-close />
        </template>
      </Modal>
    `),
  })),
};

export const NoBackdrop = {
  name: "백드롭 없음",
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: ":backdrop=\"false\"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.",
      },
      source: {
        code: `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
</script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
  <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
    <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
  </Modal>
</template>`,
        language: 'vue',
      },
    },
  },
  args: {
    id: "story-modal",
    size: "sm",
    backdrop: false,
    title: "제목",
  },
  render: modalDemo(() => ({
    components: { Button, Modal },
    template: frameDemo(`
      <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
        <p>본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
      </Modal>
    `),
  })),
};

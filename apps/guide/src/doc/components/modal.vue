<script>
export const docMeta = {
  title: 'Modal | HTML Components',
  activeNav: 'modal',
  pageTitle: 'Modal',
};
</script>

<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
import {
  modalClassColumns,
  modalClasses,
  modalPropColumns,
  modalProps,
  modalSlotColumns,
  modalSlots,
  modalTokenColumns,
  modalTokens,
  markupCode,
} from '@/doc/data/modal-api';

const basicCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
  <Modal id="modal-basic" title="알림">
    <p>Modal 대화상자 본문입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`;

const openCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Modal id="modal-open" title="알림" open>
    <p>열린 상태의 Modal입니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`;

const sizeCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

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
</template>`;

const footerCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
  <Modal id="modal-footer" title="새 항목 추가">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`;

const footerAlignCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <!-- 좌측 -->
  <Modal id="modal-footer-start" title="좌측 정렬" footer-align="start" open>
    <p>footer-align="start"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 가운데 -->
  <Modal id="modal-footer-center" title="가운데 정렬" footer-align="center" open>
    <p>footer-align="center"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 우측 (기본) -->
  <Modal id="modal-footer-end" title="우측 정렬" open>
    <p>footer-align="end" (기본)</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 병합: 좌 1 / 우 2 -->
  <Modal id="modal-footer-between" title="병합 정렬" footer-align="between" open>
    <p>footer-align="between" + modal_footer-group</p>
    <template #footer>
      <div class="modal_footer-group">
        <Button variant="ghost" color="danger" label="삭제" data-modal-close />
      </div>
      <div class="modal_footer-group">
        <Button variant="ghost" label="취소" data-modal-close />
        <Button variant="filled" color="primary" label="확인" data-modal-close />
      </div>
    </template>
  </Modal>

  <!-- 균등 1:1 -->
  <Modal id="modal-footer-even" title="균등 1:1" footer-align="even" open>
    <p>footer-align="even" · footer-ratio="1-1"</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 1:2 -->
  <Modal id="modal-footer-even-1-2" title="균등 1:2" footer-align="even" footer-ratio="1-2" open>
    <p>footer-ratio="1-2" — 좌 1 / 우 2</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 균등 2:1 -->
  <Modal id="modal-footer-even-2-1" title="균등 2:1" footer-align="even" footer-ratio="2-1" open>
    <p>footer-ratio="2-1" — 좌 2 / 우 1</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>

  <!-- 하단 패딩 없음 + 균등 -->
  <Modal id="modal-footer-no-pad" title="하단 패딩 없음" footer-align="even" footer-no-pad-bottom open>
    <p>footer-no-pad-bottom + even</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
</template>`;

const confirmCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
  <Modal id="modal-confirm" size="sm" title="항목 삭제">
    <p>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="danger" label="삭제" data-modal-close />
    </template>
  </Modal>
</template>`;

const formCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
  <Modal id="modal-form" title="프로필 편집">
    <p>폼 본문</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="저장" data-modal-close />
    </template>
  </Modal>
</template>`;

const scrollCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
  <Modal id="modal-scroll" scrollable title="이용 약관">
    <p>긴 본문…</p>
    <template #footer>
      <Button variant="ghost" label="거부" data-modal-close />
      <Button variant="filled" color="primary" label="동의" data-modal-close />
    </template>
  </Modal>
</template>`;

const nestedCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="중첩 예시 열기" data-modal-trigger="#modal-nested-1" aria-controls="modal-nested-1" />
  <Modal id="modal-nested-1" title="1단계 Modal">
    <p>다음 단계 Modal을 열어 중첩 동작을 확인하세요.</p>
    <template #footer>
      <Button variant="ghost" label="닫기" data-modal-close />
      <Button variant="outline" label="2단계 열기" data-modal-trigger="#modal-nested-2" aria-controls="modal-nested-2" />
    </template>
  </Modal>
  <Modal id="modal-nested-2" size="sm" title="2단계 Modal">
    <p>중첩된 Modal입니다. 닫으면 1단계 백드롭이 다시 표시됩니다.</p>
    <template #footer>
      <Button variant="filled" color="primary" label="완료" data-modal-close />
    </template>
  </Modal>
</template>`;

const noBackdropCode = `<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import Modal from '@uxkm/ui/components/Modal.vue';
<\/script>

<template>
  <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
  <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
    <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
  </Modal>
</template>`;

</script>

<template>
  <div class="page_intro">
  <h1>Modal</h1>
  <p class="lead">화면 중앙에 표시되는 대화상자 컴포넌트입니다. 확인·폼·상세 보기 등 사용자의 집중이 필요한 작업에 사용하며, <code class="typo_code">role="dialog"</code> · <code class="typo_code">aria-modal</code>로 접근성을 보장합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
    :code="basicCode"
  >
    <Button variant="filled" color="primary" label="모달 열기" data-modal-trigger="#modal-basic" aria-controls="modal-basic" />
  </DemoSection>

  <DemoSection
    heading-id="open-heading"
    title="열린 상태"
    description="open prop으로 is-open 클래스를 추가하고 hidden을 해제합니다. 문서 미리보기에서는 modal_demo-frame 안에서 열린 모습을 확인합니다."
    :code="openCode"
  >
    <div class="modal_demo-frame">
      <div class="modal_demo-content">
        <p>open prop으로 대화상자가 열린 상태를 미리 보여 줍니다.</p>
      </div>
      <Modal id="modal-open" title="알림" open class="modal_demo-static">
        <p>열린 상태의 Modal입니다. 백드롭·헤더·푸터 구성을 한눈에 확인할 수 있습니다.</p>
        <template #footer>
          <Button variant="ghost" label="취소" data-modal-close />
          <Button variant="filled" color="primary" label="확인" data-modal-close />
        </template>
      </Modal>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다."
    :code="sizeCode"
  >
    <div class="modal_demo-row">
      <Button variant="outline" size="sm" label="Small" data-modal-trigger="#modal-size-sm" aria-controls="modal-size-sm" />
      <Button variant="outline" label="Default" data-modal-trigger="#modal-size-default" aria-controls="modal-size-default" />
      <Button variant="outline" size="lg" label="Large" data-modal-trigger="#modal-size-lg" aria-controls="modal-size-lg" />
      <Button variant="outline" label="Fullscreen" data-modal-trigger="#modal-size-fullscreen" aria-controls="modal-size-fullscreen" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="footer-heading"
    title="헤더·푸터"
    description="modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다."
    :code="footerCode"
  >
    <Button variant="filled" color="primary" label="새 항목 추가" data-modal-trigger="#modal-footer" aria-controls="modal-footer" />
  </DemoSection>

  <DemoSection
    heading-id="footer-align-heading"
    title="푸터 정렬"
    description="footer-align으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footer-ratio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footer-no-pad-bottom으로 하단 패딩을 제거할 수 있습니다. between은 modal_footer-group으로 좌·우에 1~2개씩 묶습니다."
    :code="footerAlignCode"
    stack
  >
    <div class="modal_demo-stack">
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-start" title="좌측 정렬" footer-align="start" open class="modal_demo-static">
          <p><code class="typo_code">footer-align="start"</code></p>
          <template #footer>
            <Button variant="ghost" label="취소" data-modal-close />
            <Button variant="filled" color="primary" label="확인" data-modal-close />
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-center" title="가운데 정렬" footer-align="center" open class="modal_demo-static">
          <p><code class="typo_code">footer-align="center"</code></p>
          <template #footer>
            <Button variant="ghost" label="취소" data-modal-close />
            <Button variant="filled" color="primary" label="확인" data-modal-close />
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-end" title="우측 정렬" open class="modal_demo-static">
          <p><code class="typo_code">footer-align="end"</code> (기본)</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-modal-close />
            <Button variant="filled" color="primary" label="확인" data-modal-close />
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-between" title="병합 정렬" footer-align="between" open class="modal_demo-static">
          <p><code class="typo_code">between</code> — 좌 1 / 우 2</p>
          <template #footer>
            <div class="modal_footer-group">
              <Button variant="ghost" color="danger" label="삭제" data-modal-close />
            </div>
            <div class="modal_footer-group">
              <Button variant="ghost" label="취소" data-modal-close />
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </div>
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-between-2" title="병합 정렬" footer-align="between" open class="modal_demo-static">
          <p><code class="typo_code">between</code> — 좌 2 / 우 1</p>
          <template #footer>
            <div class="modal_footer-group">
              <Button variant="ghost" label="도움말" data-modal-close />
              <Button variant="ghost" color="danger" label="삭제" data-modal-close />
            </div>
            <div class="modal_footer-group">
              <Button variant="filled" color="primary" label="확인" data-modal-close />
            </div>
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-even" title="균등 1:1" footer-align="even" open class="modal_demo-static">
          <p><code class="typo_code">even</code> · <code class="typo_code">footer-ratio="1-1"</code></p>
          <template #footer>
            <Button variant="ghost" label="취소" data-modal-close />
            <Button variant="filled" color="primary" label="확인" data-modal-close />
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-even-1-2" title="균등 1:2" footer-align="even" footer-ratio="1-2" open class="modal_demo-static">
          <p><code class="typo_code">footer-ratio="1-2"</code> — 좌 1 / 우 2</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-modal-close />
            <Button variant="filled" color="primary" label="확인" data-modal-close />
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-even-2-1" title="균등 2:1" footer-align="even" footer-ratio="2-1" open class="modal_demo-static">
          <p><code class="typo_code">footer-ratio="2-1"</code> — 좌 2 / 우 1</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-modal-close />
            <Button variant="filled" color="primary" label="확인" data-modal-close />
          </template>
        </Modal>
      </div>
      <div class="modal_demo-frame modal_demo-frame-compact">
        <Modal id="modal-footer-no-pad" title="하단 패딩 없음" footer-align="even" footer-no-pad-bottom open class="modal_demo-static">
          <p><code class="typo_code">footer-no-pad-bottom</code> + even</p>
          <template #footer>
            <Button variant="ghost" label="취소" data-modal-close />
            <Button variant="filled" color="primary" label="확인" data-modal-close />
          </template>
        </Modal>
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="confirm-heading"
    title="확인 대화상자"
    description="삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다."
    :code="confirmCode"
  >
    <Button variant="filled" color="danger" label="삭제" data-modal-trigger="#modal-confirm" aria-controls="modal-confirm" />
  </DemoSection>

  <DemoSection
    heading-id="form-heading"
    title="폼"
    description="입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다."
    :code="formCode"
  >
    <Button variant="outline" label="프로필 편집" data-modal-trigger="#modal-form" aria-controls="modal-form" />
  </DemoSection>

  <DemoSection
    heading-id="scroll-heading"
    title="스크롤 본문"
    description="modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다."
    :code="scrollCode"
  >
    <Button variant="ghost" label="이용 약관 보기" data-modal-trigger="#modal-scroll" aria-controls="modal-scroll" />
  </DemoSection>

  <DemoSection
    heading-id="nested-heading"
    title="중첩 Modal"
    description="열린 Modal 안에서 다른 Modal을 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 대화상자부터 닫습니다."
    :code="nestedCode"
  >
    <Button variant="ghost" label="중첩 예시 열기" data-modal-trigger="#modal-nested-1" aria-controls="modal-nested-1" />
  </DemoSection>

  <DemoSection
    heading-id="no-backdrop-heading"
    title="백드롭 없음"
    description=":backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
    :code="noBackdropCode"
  >
    <Button variant="ghost" label="백드롭 없이 열기" data-modal-trigger="#modal-no-backdrop" aria-controls="modal-no-backdrop" />
  </DemoSection>

  <!-- 기본 -->
  <Modal id="modal-basic" title="알림">
    <p>Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 닫을 수 있습니다.</p>
    <template #footer>
      <Button variant="ghost" label="취소" data-modal-close />
      <Button variant="filled" color="primary" label="확인" data-modal-close />
    </template>
  </Modal>
  
  <!-- 크기: Small -->
  <Modal id="modal-size-sm" size="sm" title="Small">
    <p><code class="typo_code">modal_sm</code> — 확인·간단한 알림에 적합한 좁은 너비입니다.</p>
  </Modal>
  
  <!-- 크기: Default -->
  <Modal id="modal-size-default" title="Default">
    <p>기본 너비 32rem</p>
  </Modal>
  
  <!-- 크기: Large -->
  <Modal id="modal-size-lg" size="lg" title="Large">
    <p><code class="typo_code">modal_lg</code> — 상세 보기·넓은 폼·테이블 미리보기 등에 사용합니다.</p>
  </Modal>
  
  <!-- 크기: Fullscreen -->
  <div class="modal modal_fullscreen" id="modal-size-fullscreen" data-modal role="dialog" aria-modal="true" aria-labelledby="modal-size-fullscreen-title" tabindex="-1" hidden>
    <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
    <div class="modal_dialog">
      <div class="modal_header">
        <h2 class="modal_title" id="modal-size-fullscreen-title">Fullscreen</h2>
        <button type="button" class="modal_close" data-modal-close aria-label="닫기">
          <svg class="modal_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="modal_body">
        <p><code class="typo_code">modal_fullscreen</code> — 뷰포트 전체를 사용하는 대화상자입니다. 모바일 상세 화면·에디터 등에 적합합니다.</p>
      </div>
      <div class="modal_footer">
        <button type="button" class="btn btn_ghost" data-modal-close><span class="btn_label">닫기</span></button>
      </div>
    </div>
  </div>
  
  <!-- 헤더·푸터 -->
  <div class="modal" id="modal-footer" data-modal role="dialog" aria-modal="true" aria-labelledby="modal-footer-title" tabindex="-1" hidden>
    <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
    <div class="modal_dialog">
      <div class="modal_header">
        <h2 class="modal_title" id="modal-footer-title">새 항목 추가</h2>
        <button type="button" class="modal_close" data-modal-close aria-label="닫기">
          <svg class="modal_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="modal_body">
        <div class="form_field">
          <label class="form_field-label" for="modal-item-name">이름</label>
          <input class="input" type="text" id="modal-item-name" placeholder="항목 이름" />
        </div>
        <div class="form_field">
          <label class="form_field-label" for="modal-item-desc">설명</label>
          <textarea class="textarea" id="modal-item-desc" rows="3" placeholder="간단한 설명"></textarea>
        </div>
      </div>
      <div class="modal_footer">
        <button type="button" class="btn btn_ghost" data-modal-close><span class="btn_label">취소</span></button>
        <button type="button" class="btn btn_filled color_primary" data-modal-close><span class="btn_label">저장</span></button>
      </div>
    </div>
  </div>
  
  <!-- 확인 대화상자 -->
  <div class="modal modal_sm" id="modal-confirm" data-modal role="dialog" aria-modal="true" aria-labelledby="modal-confirm-title" aria-describedby="modal-confirm-desc" tabindex="-1" hidden>
    <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
    <div class="modal_dialog">
      <div class="modal_header">
        <h2 class="modal_title" id="modal-confirm-title">항목 삭제</h2>
        <button type="button" class="modal_close" data-modal-close aria-label="닫기">
          <svg class="modal_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="modal_body">
        <p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
      </div>
      <div class="modal_footer">
        <button type="button" class="btn btn_ghost" data-modal-close><span class="btn_label">취소</span></button>
        <button type="button" class="btn btn_filled color_error" data-modal-close><span class="btn_label">삭제</span></button>
      </div>
    </div>
  </div>
  
  <!-- 폼 -->
  <div class="modal" id="modal-form" data-modal role="dialog" aria-modal="true" aria-labelledby="modal-form-title" tabindex="-1" hidden>
    <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
    <div class="modal_dialog">
      <div class="modal_header">
        <h2 class="modal_title" id="modal-form-title">프로필 편집</h2>
        <button type="button" class="modal_close" data-modal-close aria-label="닫기">
          <svg class="modal_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="modal_body">
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
      </div>
      <div class="modal_footer">
        <button type="button" class="btn btn_ghost" data-modal-close><span class="btn_label">취소</span></button>
        <button type="button" class="btn btn_filled color_primary" data-modal-close><span class="btn_label">저장</span></button>
      </div>
    </div>
  </div>
  
  <!-- 스크롤 본문 -->
  <div class="modal modal_scrollable" id="modal-scroll" data-modal role="dialog" aria-modal="true" aria-labelledby="modal-scroll-title" tabindex="-1" hidden>
    <div class="modal_backdrop" data-modal-close aria-hidden="true"></div>
    <div class="modal_dialog">
      <div class="modal_header">
        <h2 class="modal_title" id="modal-scroll-title">이용 약관</h2>
        <button type="button" class="modal_close" data-modal-close aria-label="닫기">
          <svg class="modal_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="modal_body">
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
      </div>
      <div class="modal_footer">
        <button type="button" class="btn btn_ghost" data-modal-close><span class="btn_label">거부</span></button>
        <button type="button" class="btn btn_filled color_primary" data-modal-close><span class="btn_label">동의</span></button>
      </div>
    </div>
  </div>
  
  <!-- 백드롭 없음 -->
  <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" :backdrop="false">
    <p>본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
  </Modal>

  <!-- 중첩 Modal -->
  <Modal id="modal-nested-1" title="1단계 Modal">
    <p>다음 단계 Modal을 열어 중첩 동작을 확인하세요.</p>
    <template #footer>
      <Button variant="ghost" label="닫기" data-modal-close />
      <Button variant="outline" label="2단계 열기" data-modal-trigger="#modal-nested-2" aria-controls="modal-nested-2" />
    </template>
  </Modal>
  <Modal id="modal-nested-2" size="sm" title="2단계 Modal">
    <p>중첩된 Modal입니다. <kbd>Esc</kbd>를 누르면 이 대화상자부터 닫힙니다.</p>
    <template #footer>
      <Button variant="filled" color="primary" label="완료" data-modal-close />
    </template>
  </Modal>

  <section class="section" aria-labelledby="usage-heading">
    <h2 id="usage-heading">마크업</h2>
      <p>트리거 버튼과 Modal 루트를 <code class="typo_code">id</code> · <code class="typo_code">aria-controls</code>로 연결합니다. 기본은 닫힌 상태(<code class="typo_code">hidden</code>)이며, 클릭 이벤트로 열립니다.</p>

      <GuideCodeBlock>{{ markupCode }}</GuideCodeBlock>
  </section>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="modalPropColumns" :rows="modalProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="modalSlotColumns" :rows="modalSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="modalClassColumns" :rows="modalClasses" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      닫기: 백드롭 클릭 · <code class="typo_code">data-modal-close</code> · <kbd>Esc</kbd>.
      열릴 때 포커스는 닫기 버튼으로 이동하고, 닫힐 때 트리거로 복원됩니다.
      중첩 시 <kbd>Esc</kbd>는 최상위 대화상자부터 닫습니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="modalTokenColumns" :rows="modalTokens" code-column="name" />
  </ApiSection>
</template>

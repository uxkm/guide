export const docMeta = {
  title: 'Modal | UXKM Guide',
  activeNav: 'modal',
  pageTitle: 'Modal',
};

import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import {
  modalChildColumns,
  modalChildren,
  modalClassColumns,
  modalClasses,
  modalPropColumns,
  modalProps,
  modalTokenColumns,
  modalTokens,
  markupCode,
} from '@/doc/data/modal-api';

const basicCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function BasicExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="모달 열기"
        data-modal-trigger="#modal-basic"
        aria-controls="modal-basic"
      />
      <Modal
        id="modal-basic"
        title="알림"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="확인" data-modal-close="" />
          </>
        }
      >
        <p>Modal 대화상자 본문입니다.</p>
      </Modal>
    </>
  );
}`;
const sizeCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function SizeExample() {
  return (
    <>
      <div className="modal_demo-row">
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
    </>
  );
}`;
const footerCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function FooterExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="새 항목 추가"
        data-modal-trigger="#modal-footer"
        aria-controls="modal-footer"
      />
      <Modal
        id="modal-footer"
        title="새 항목 추가"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <p>폼 본문</p>
      </Modal>
    </>
  );
}`;
const confirmCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function ConfirmExample() {
  return (
    <>
      <Button
        variant="filled"
        color="danger"
        label="삭제"
        data-modal-trigger="#modal-confirm"
        aria-controls="modal-confirm"
      />
      <Modal
        id="modal-confirm"
        size="sm"
        title="항목 삭제"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="danger" label="삭제" data-modal-close="" />
          </>
        }
      >
        <p>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
      </Modal>
    </>
  );
}`;
const formCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function FormExample() {
  return (
    <>
      <Button
        variant="outline"
        label="프로필 편집"
        data-modal-trigger="#modal-form"
        aria-controls="modal-form"
      />
      <Modal
        id="modal-form"
        title="프로필 편집"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <p>폼 본문</p>
      </Modal>
    </>
  );
}`;
const scrollCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function ScrollExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="이용 약관 보기"
        data-modal-trigger="#modal-scroll"
        aria-controls="modal-scroll"
      />
      <Modal
        id="modal-scroll"
        scrollable
        title="이용 약관"
        footer={
          <>
            <Button variant="ghost" label="거부" data-modal-close="" />
            <Button variant="filled" color="primary" label="동의" data-modal-close="" />
          </>
        }
      >
        <p>긴 본문…</p>
      </Modal>
    </>
  );
}`;
const noBackdropCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Modal from '@uxkm/ui-react/components/Modal.jsx';

export function NoBackdropExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="백드롭 없이 열기"
        data-modal-trigger="#modal-no-backdrop"
        aria-controls="modal-no-backdrop"
      />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" backdrop={false}>
        <p>본문을 가리지 않고 대화상자만 표시합니다.</p>
      </Modal>
    </>
  );
}`;

export default function ModalDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Modal</h1>
        <p className="lead">
          화면 중앙에 표시되는 대화상자 컴포넌트입니다. 확인·폼·상세 보기 등 사용자의 집중이
          필요한 작업에 사용하며, <code className="typo_code">role=&quot;dialog&quot;</code> · <code className="typo_code">aria-modal</code>로 접근성을 보장합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="data-modal-trigger로 대화상자를 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
        code={basicCode}
      >
<div className="modal_demo-frame">
      <div className="modal_demo-content">
      <Button
        variant="filled"
        color="primary"
        label="모달 열기"
        data-modal-trigger="#modal-basic"
        aria-controls="modal-basic"
      />
      <Modal
        id="modal-basic"
        title="알림"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="확인" data-modal-close="" />
          </>
        }
      >
        <p>
          Modal 대화상자 본문입니다. 백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 닫을 수
          있습니다.
        </p>
      </Modal>
      </div>
    </div>
      </DemoSection>
      <DemoSection
        headingId="size-heading"
        title="크기"
        description="modal_sm · modal_lg · modal_fullscreen으로 대화상자 너비를 조정합니다."
        code={sizeCode}
      >
<div className="modal_demo-frame">
      <div className="modal_demo-content">
      <div className="modal_demo-row">
        <Button
          variant="outline"
          size="sm"
          label="Small"
          data-modal-trigger="#modal-size-sm"
          aria-controls="modal-size-sm"
        />
        <Button
          variant="outline"
          label="Default"
          data-modal-trigger="#modal-size-default"
          aria-controls="modal-size-default"
        />
        <Button
          variant="outline"
          size="lg"
          label="Large"
          data-modal-trigger="#modal-size-lg"
          aria-controls="modal-size-lg"
        />
        <Button
          variant="outline"
          label="Fullscreen"
          data-modal-trigger="#modal-size-fullscreen"
          aria-controls="modal-size-fullscreen"
        />
      </div>
      <Modal id="modal-size-sm" size="sm" title="Small">
        <p>
          <code className="typo_code">modal_sm</code> — 확인·간단한 알림에 적합한 좁은 너비입니다.
        </p>
      </Modal>
      <Modal id="modal-size-default" title="Default">
        <p>기본 너비 32rem</p>
      </Modal>
      <Modal id="modal-size-lg" size="lg" title="Large">
        <p>
          <code className="typo_code">modal_lg</code> — 상세 보기·넓은 폼·테이블 미리보기 등에
          사용합니다.
        </p>
      </Modal>
      <Modal
        id="modal-size-fullscreen"
        size="fullscreen"
        title="Fullscreen"
        footer={<Button variant="ghost" label="닫기" data-modal-close="" />}
      >
        <p>
          <code className="typo_code">modal_fullscreen</code> — 뷰포트 전체를 사용하는
          대화상자입니다.
        </p>
      </Modal>
      </div>
    </div>
      </DemoSection>
      <DemoSection
        headingId="footer-heading"
        title="헤더·푸터"
        description="modal_header · modal_body · modal_footer로 영역을 나눕니다. 푸터에 액션 버튼을 배치합니다."
        code={footerCode}
      >
<div className="modal_demo-frame">
      <div className="modal_demo-content">
      <Button
        variant="filled"
        color="primary"
        label="새 항목 추가"
        data-modal-trigger="#modal-footer"
        aria-controls="modal-footer"
      />
      <Modal
        id="modal-footer"
        title="새 항목 추가"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <div className="form_field">
          <label className="form_field-label" htmlFor="modal-item-name">
            이름
          </label>
          <input className="input" type="text" id="modal-item-name" placeholder="항목 이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="modal-item-desc">
            설명
          </label>
          <textarea
            className="textarea"
            id="modal-item-desc"
            rows={3}
            placeholder="간단한 설명"
          />
        </div>
      </Modal>
      </div>
    </div>
      </DemoSection>
      <DemoSection
        headingId="confirm-heading"
        title="확인 대화상자"
        description="삭제·취소 등 되돌릴 수 없는 작업 전에 사용자 확인을 받습니다. modal_sm으로 좁은 레이아웃을 사용합니다."
        code={confirmCode}
      >
<div className="modal_demo-frame">
      <div className="modal_demo-content">
      <Button
        variant="filled"
        color="danger"
        label="삭제"
        data-modal-trigger="#modal-confirm"
        aria-controls="modal-confirm"
      />
      <Modal
        id="modal-confirm"
        size="sm"
        title="항목 삭제"
        aria-describedby="modal-confirm-desc"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="danger" label="삭제" data-modal-close="" />
          </>
        }
      >
        <p id="modal-confirm-desc">이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</p>
      </Modal>
      </div>
    </div>
      </DemoSection>
      <DemoSection
        headingId="form-heading"
        title="폼"
        description="입력 필드가 포함된 대화상자입니다. Form Layout · Input 컴포넌트와 조합합니다."
        code={formCode}
      >
<div className="modal_demo-frame">
      <div className="modal_demo-content">
      <Button
        variant="outline"
        label="프로필 편집"
        data-modal-trigger="#modal-form"
        aria-controls="modal-form"
      />
      <Modal
        id="modal-form"
        title="프로필 편집"
        footer={
          <>
            <Button variant="ghost" label="취소" data-modal-close="" />
            <Button variant="filled" color="primary" label="저장" data-modal-close="" />
          </>
        }
      >
        <div className="form_layout form_layout-vertical">
          <div className="form_field">
            <label className="form_field-label" htmlFor="modal-profile-name">
              이름
            </label>
            <input className="input" type="text" id="modal-profile-name" defaultValue="홍길동" />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="modal-profile-email">
              이메일
            </label>
            <input
              className="input"
              type="email"
              id="modal-profile-email"
              defaultValue="hong@example.com"
            />
          </div>
          <div className="form_field">
            <label className="form_field-label" htmlFor="modal-profile-bio">
              소개
            </label>
            <textarea
              className="textarea"
              id="modal-profile-bio"
              rows={3}
              placeholder="자기소개를 입력하세요"
            />
          </div>
        </div>
      </Modal>
      </div>
    </div>
      </DemoSection>
      <DemoSection
        headingId="scroll-heading"
        title="스크롤 본문"
        description="modal_scrollable을 루트에 추가하면 본문이 길 때 modal_body 안에서 스크롤됩니다."
        code={scrollCode}
      >
<div className="modal_demo-frame">
      <div className="modal_demo-content">
      <Button
        variant="ghost"
        label="이용 약관 보기"
        data-modal-trigger="#modal-scroll"
        aria-controls="modal-scroll"
      />
      <Modal
        id="modal-scroll"
        scrollable
        title="이용 약관"
        footer={
          <>
            <Button variant="ghost" label="거부" data-modal-close="" />
            <Button variant="filled" color="primary" label="동의" data-modal-close="" />
          </>
        }
      >
        <p>
          제1조 (목적) 본 약관은 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을
          규정함을 목적으로 합니다.
        </p>
        <p>
          제2조 (정의) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① &quot;서비스&quot;란
          회사가 제공하는 모든 온라인 서비스를 의미합니다. ② &quot;이용자&quot;란 본 약관에 따라
          서비스를 이용하는 회원 및 비회원을 말합니다.
        </p>
        <p>
          제3조 (약관의 효력) 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게
          공지함으로써 효력이 발생합니다.
        </p>
        <p>
          제4조 (서비스의 제공) 회사는 다음과 같은 서비스를 제공합니다. 정보 제공, 커뮤니티, 기타
          회사가 정하는 서비스.
        </p>
        <p>
          제5조 (서비스의 중단) 회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절
          등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
        </p>
        <p>
          제6조 (회원가입) 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에
          동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
        </p>
        <p>
          제7조 (회원 탈퇴 및 자격 상실) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는
          즉시 회원탈퇴를 처리합니다.
        </p>
        <p>
          제8조 (개인정보보호) 회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기
          위해 노력합니다.
        </p>
        <p>
          제9조 (회사의 의무) 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지
          않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.
        </p>
        <p>
          제10조 (이용자의 의무) 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여
          공지한 주의사항을 준수하여야 합니다.
        </p>
      </Modal>
      </div>
    </div>
      </DemoSection>
      <DemoSection
        headingId="no-backdrop-heading"
        title="백드롭 없음"
        description="backdrop={false}로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
        code={noBackdropCode}
      >
<div className="modal_demo-frame">
      <div className="modal_demo-content">
      <Button
        variant="ghost"
        label="백드롭 없이 열기"
        data-modal-trigger="#modal-no-backdrop"
        aria-controls="modal-no-backdrop"
      />
      <Modal id="modal-no-backdrop" size="sm" title="백드롭 없음" backdrop={false}>
        <p>
          본문을 가리지 않고 대화상자만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.
        </p>
      </Modal>
      </div>
    </div>
      </DemoSection>

      <section className="section" aria-labelledby="usage-heading">
        <h2 id="usage-heading">마크업</h2>
        <p>
          트리거 버튼과 Modal 루트를 <code className="typo_code">id</code> · <code className="typo_code">aria-controls</code>로
          연결합니다. 기본은 닫힌 상태(<code className="typo_code">hidden</code>)이며, 클릭 이벤트로 열립니다.
        </p>
        <GuideCodeBlock>{markupCode}</GuideCodeBlock>
      </section>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={modalPropColumns} rows={modalProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={modalChildColumns} rows={modalChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={modalClassColumns} rows={modalClasses} codeColumn="name" />
        <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
          닫기: 백드롭 클릭 · <code className="typo_code">data-modal-close</code> · <kbd>Esc</kbd>.
          열릴 때 포커스는 닫기 버튼으로 이동하고, 닫힐 때 트리거로 복원됩니다.
        </p>
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={modalTokenColumns} rows={modalTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}

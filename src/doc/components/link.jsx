export const docMeta = {
  title: 'Link | HTML Components',
  activeNav: 'link',
  pageTitle: 'Link',
};

import Alert from '@/components/Alert.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@/components/Icon.jsx';
import Link from '@/components/Link.jsx';
import {
  linkClassColumns,
  linkClasses,
  linkPropColumns,
  linkProps,
  linkSlotColumns,
  linkSlots,
} from '@/doc/data/link-api';

export default function LinkDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Link</h1>
          <p className="lead">페이지 이동·액션 트리거용 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 <code className="typo_code">typo_link</code>를 사용합니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다."
        >
          <Link label="더 보기" />
          <Link label="가이드 문서" />
          <Link underline label="항상 밑줄" />
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
          stack
        >
          <div className="link_row">
            <Link color="primary" label="Primary" />
            <Link color="muted" label="Muted" />
            <Link color="success" label="Success" />
            <Link color="warning" label="Warning" />
            <Link color="danger" label="Danger" />
          </div>
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="공통 size_* 클래스로 텍스트 크기를 조절합니다."
        >
          <Link size="sm" label="Small" />
          <Link label="Base" />
          <Link size="lg" label="Large" />
          <Link size="xl" label="Extra Large" />
        </DemoSection>

        <DemoSection
          headingId="style-heading"
          title="스타일"
          description="link_underline · link_no-underline · link_standalone으로 밑줄과 터치 영역을 조절합니다."
          stack
        >
          <div className="link_row">
            <Link label="기본 (hover 밑줄)" />
            <Link underline label="항상 밑줄" />
            <Link noUnderline label="밑줄 없음" />
            <Link standalone label="터치 영역 확대" />
          </div>
        </DemoSection>

        <DemoSection
          headingId="nav-heading"
          title="내비게이션"
          description="link_nav · is-active로 메뉴·탭 링크를 표현합니다."
          stack
        >
          <nav className="link_group-inline" aria-label="섹션 내비게이션">
            <Link nav active label="개요" />
            <Link nav label="컴포넌트" />
            <Link nav label="토큰" />
            <Link nav label="접근성" />
          </nav>

          <Link back label="이전 페이지" icon={(
              <>
              <Icon className="link_icon">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </Icon>
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="block-heading"
          title="블록 · 그룹"
          description="link_block · link_group으로 세로 링크 목록을 구성합니다."
        >
          <div className="link_group" style={{ maxWidth: '280px', width: '100%' }}>
            <Link block label="시작하기" icon={(
              <>
              <Icon className="link_icon">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </Icon>
              </>
            )} />
            <Link block label="컴포넌트" icon={(
              <>
              <Icon className="link_icon">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M9 21V9" />
                        </Icon>
              </>
            )} />
            <Link block color="muted" label="도움말" icon={(
              <>
              <Icon className="link_icon">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4" />
                          <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
                        </Icon>
              </>
            )} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="icon-only-heading"
          title="아이콘 전용"
          description="link_icon-only으로 텍스트 없는 링크 버튼을 만듭니다."
        >
          <Link iconOnly ariaLabel="검색" icon={(
              <>
              <Icon className="link_icon">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </Icon>
              </>
            )} />
          <Link iconOnly ariaLabel="편집" icon={(
              <>
              <Icon className="link_icon">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </Icon>
              </>
            )} />
          <Link iconOnly color="muted" ariaLabel="더 보기" icon={(
              <>
              <Icon className="link_icon">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </Icon>
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="icon-heading"
          title="아이콘"
          description='link_icon으로 텍스트 앞·뒤에 아이콘을 배치합니다. 장식용 아이콘은 aria-hidden={true}를 지정합니다.'
          stack
        >
          <div className="link_row">
            <Link label="외부 링크" icon={(
              <>
              <Icon className="link_icon">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </Icon>
              </>
            )} />

            <Link>
              다운로드
              <Icon className="link_icon">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </Icon>
            </Link>

            <Link label="다음 단계" icon={(
              <>
              <Icon className="link_icon">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </Icon>
              </>
            )} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="external-heading"
          title="새 창 열기"
          description='target="_blank"과 rel="noopener noreferrer"를 함께 지정합니다. 스크린 리더용 안내 문구를 링크 텍스트에 포함합니다.'
        >
          <Link
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 문서
            <span className="color_muted size_sm">(새 창)</span>
            <Icon className="link_icon">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </Icon>
          </Link>
        </DemoSection>

        <DemoSection
          headingId="disabled-heading"
          title="비활성"
          description='aria-disabled="true"와 tabindex="-1"로 비활성 링크를 표현합니다. 클릭 불가 시 href를 제거하거나 span으로 대체할 수 있습니다.'
        >
          <Link disabled label="비활성 링크" />
          <Link disabled label="비활성 (span)" />
        </DemoSection>

        <DemoSection
          headingId="context-heading"
          title="문맥 속 사용"
          description="알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다."
          stack
        >
          <Alert title="업데이트 안내">
            새 버전이 출시되었습니다.
            <Link size="sm" label="릴리스 노트 보기" />
          </Alert>

          <p className="color_muted">
            계정이 없으신가요?
            <Link label="회원가입" />
          </p>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={linkPropColumns} rows={linkProps} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            본문 안 인라인 링크는 Typography의 <code className="typo_code">typo_link</code>를 사용합니다.
            이 Link 컴포넌트는 독립 액션·내비게이션 링크용입니다.
          </p>
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={linkSlotColumns} rows={linkSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={linkClassColumns} rows={linkClasses} codeColumn="name" />
        </ApiSection>
    </>
  );
}

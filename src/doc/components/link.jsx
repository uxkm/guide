export const docMeta = {
  title: 'Link | UXKM Guide',
  activeNav: 'link',
  pageTitle: 'Link',
};

import Alert from '@/components/Alert.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@/components/Icon.jsx';
import Link from '@/components/Link.jsx';
import { avatarSample } from '@images';
import {
  linkClassColumns,
  linkClasses,
  linkPropColumns,
  linkProps,
  linkSlotColumns,
  linkSlots,
  linkTokenColumns,
  linkTokens,
} from '@/doc/data/link-api';

const basicCode = "import Link from '@/components/Link.jsx';\n\nexport function BasicExample() {\n  return (\n    <>\n      <Link label=\"더 보기\" />\n      <Link label=\"가이드 문서\" />\n      <Link underline label=\"항상 밑줄\" />\n    </>\n  );\n}";

const sourceCode = "import Icon from '@/components/Icon.jsx';\nimport Link from '@/components/Link.jsx';\nimport { avatarSample } from '@images';\n\nexport function SourceExample() {\n  return (\n    <>\n      <Link href=\"/components/icon\">\n        <Icon name=\"link\" className=\"link_icon\" />\n        아이콘 문서\n      </Link>\n      <Link href=\"/components/avatar\">\n        <img className=\"link_media\" src={avatarSample.src} alt=\"\" />\n        프로필\n      </Link>\n      <Link as=\"button\" onClick={() => console.log('action')}>\n        커스텀 액션\n      </Link>\n    </>\n  );\n}";

const colorCode = "import Link from '@/components/Link.jsx';\n\nexport function ColorExample() {\n  return (\n    <div className=\"link_row\">\n      <Link color=\"primary\" label=\"Primary\" />\n      <Link color=\"muted\" label=\"Muted\" />\n      <Link color=\"success\" label=\"Success\" />\n      <Link color=\"warning\" label=\"Warning\" />\n      <Link color=\"danger\" label=\"Danger\" />\n    </div>\n  );\n}";

const sizeCode = "import Link from '@/components/Link.jsx';\n\nexport function SizeExample() {\n  return (\n    <>\n      <Link size=\"sm\" label=\"Small\" />\n      <Link label=\"Base\" />\n      <Link size=\"lg\" label=\"Large\" />\n      <Link size=\"xl\" label=\"Extra Large\" />\n    </>\n  );\n}";

const styleCode = "import Link from '@/components/Link.jsx';\n\nexport function StyleExample() {\n  return (\n    <div className=\"link_row\">\n      <Link label=\"기본 (hover 밑줄)\" />\n      <Link underline label=\"항상 밑줄\" />\n      <Link noUnderline label=\"밑줄 없음\" />\n      <Link standalone label=\"터치 영역 확대\" />\n    </div>\n  );\n}";

const navCode = "import Icon from '@/components/Icon.jsx';\nimport Link from '@/components/Link.jsx';\n\nexport function NavExample() {\n  return (\n    <>\n      <nav className=\"link_group-inline\" aria-label=\"섹션 내비게이션\">\n        <Link nav active label=\"개요\" />\n        <Link nav label=\"컴포넌트\" />\n        <Link nav label=\"토큰\" />\n        <Link nav label=\"접근성\" />\n      </nav>\n      <Link\n        back\n        label=\"이전 페이지\"\n        icon={<Icon name=\"arrow-left\" className=\"link_icon\" />}\n      />\n    </>\n  );\n}";

const blockCode = "import Icon from '@/components/Icon.jsx';\nimport Link from '@/components/Link.jsx';\n\nexport function BlockExample() {\n  return (\n    <div className=\"link_group\" style={{ maxWidth: '280px', width: '100%' }}>\n      <Link block label=\"시작하기\" icon={<Icon name=\"file\" className=\"link_icon\" />} />\n      <Link block label=\"컴포넌트\" icon={<Icon name=\"grid\" className=\"link_icon\" />} />\n      <Link block color=\"muted\" label=\"도움말\" icon={<Icon name=\"info\" className=\"link_icon\" />} />\n    </div>\n  );\n}";

const iconOnlyCode = "import Icon from '@/components/Icon.jsx';\nimport Link from '@/components/Link.jsx';\n\nexport function IconOnlyExample() {\n  return (\n    <>\n      <Link iconOnly ariaLabel=\"검색\" icon={<Icon name=\"search\" className=\"link_icon\" />} />\n      <Link iconOnly ariaLabel=\"편집\" icon={<Icon name=\"edit\" className=\"link_icon\" />} />\n      <Link iconOnly color=\"muted\" ariaLabel=\"더 보기\" icon={<Icon name=\"more-horizontal\" className=\"link_icon\" />} />\n    </>\n  );\n}";

const iconCode = "import Icon from '@/components/Icon.jsx';\nimport Link from '@/components/Link.jsx';\n\nexport function IconDemoExample() {\n  return (\n    <div className=\"link_row\">\n      <Link label=\"외부 링크\" icon={<Icon name=\"external-link\" className=\"link_icon\" />} />\n      <Link>\n        다운로드\n        <Icon name=\"download\" className=\"link_icon\" />\n      </Link>\n      <Link label=\"다음 단계\" icon={<Icon name=\"arrow-right\" className=\"link_icon\" />} />\n    </div>\n  );\n}";

const externalCode = "import Icon from '@/components/Icon.jsx';\nimport Link from '@/components/Link.jsx';\n\nexport function ExternalExample() {\n  return (\n    <Link href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n      공식 문서\n      <span className=\"color_muted size_sm\">(새 창)</span>\n      <Icon name=\"external-link\" className=\"link_icon\" />\n    </Link>\n  );\n}";

const disabledCode = "import Link from '@/components/Link.jsx';\n\nexport function DisabledExample() {\n  return (\n    <>\n      <Link disabled label=\"비활성 링크\" />\n      <Link disabled label=\"비활성 (span)\" />\n    </>\n  );\n}";

const contextCode = "import Link from '@/components/Link.jsx';\n\nexport function ContextExample() {\n  return (\n    <>\n      <div className=\"alert color_info\" role=\"alert\">\n        <div className=\"alert_body\">\n          <div className=\"alert_title\">업데이트 안내</div>\n          <p className=\"alert_desc\">\n            새 버전이 출시되었습니다.\n            <Link size=\"sm\" label=\"릴리스 노트 보기\" />\n          </p>\n        </div>\n      </div>\n      <p className=\"color_muted\">\n        계정이 없으신가요?\n        <Link label=\"회원가입\" />\n      </p>\n    </>\n  );\n}";

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
          code={basicCode}
        >
          <Link label="더 보기" />
          <Link label="가이드 문서" />
          <Link underline label="항상 밑줄" />
        </DemoSection>

        <DemoSection
          headingId="source-heading"
          title="이미지 · 아이콘 · 커스텀 요소"
          description="children에 이미지·아이콘·컴포넌트를 조합하거나 as로 루트 요소를 변경할 수 있습니다."
          code={sourceCode}
        >
          <Link href="/components/icon">
            <Icon name="link" className="link_icon" />
            아이콘 문서
          </Link>
          <Link href="/components/avatar">
            <img className="link_media" src={avatarSample.src} alt="" />
            프로필
          </Link>
          <Link as="button" onClick={() => {}}>
            커스텀 액션
          </Link>
        </DemoSection>

        <DemoSection
          headingId="color-heading"
          title="색상"
          description="공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
          stack
          code={colorCode}
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
          code={sizeCode}
        >
          <Link size="sm" label="Small" />
          <Link label="Base" />
          <Link size="lg" label="Large" />
          <Link size="xl" label="Extra Large" />
        </DemoSection>

        <DemoSection
          headingId="style-heading"
          title="스타일"
          description="underline · noUnderline · standalone prop으로 밑줄과 터치 영역을 조절합니다."
          stack
          code={styleCode}
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
          description="nav · active prop으로 link_nav · is-active 메뉴·탭 링크를 표현합니다."
          stack
          code={navCode}
        >
          <nav className="link_group-inline" aria-label="섹션 내비게이션">
            <Link nav active label="개요" />
            <Link nav label="컴포넌트" />
            <Link nav label="토큰" />
            <Link nav label="접근성" />
          </nav>

          <Link
            back
            label="이전 페이지"
            icon={
              <Icon name="arrow-left" className="link_icon" />
            }
          />
        </DemoSection>

        <DemoSection
          headingId="block-heading"
          title="블록 · 그룹"
          description="block prop · link_group으로 세로 링크 목록을 구성합니다."
          code={blockCode}
        >
          <div className="link_group" style={{ maxWidth: '280px', width: '100%' }}>
            <Link
              block
              label="시작하기"
              icon={
                <Icon name="file" className="link_icon" />
              }
            />
            <Link
              block
              label="컴포넌트"
              icon={
                <Icon name="grid" className="link_icon" />
              }
            />
            <Link
              block
              color="muted"
              label="도움말"
              icon={
                <Icon name="info" className="link_icon" />
              }
            />
          </div>
        </DemoSection>

        <DemoSection
          headingId="icon-only-heading"
          title="아이콘 전용"
          description="iconOnly prop으로 link_icon-only 텍스트 없는 링크 버튼을 만듭니다."
          code={iconOnlyCode}
        >
          <Link
            iconOnly
            ariaLabel="검색"
            icon={
              <Icon name="search" className="link_icon" />
            }
          />
          <Link
            iconOnly
            ariaLabel="편집"
            icon={
              <Icon name="edit" className="link_icon" />
            }
          />
          <Link
            iconOnly
            color="muted"
            ariaLabel="더 보기"
            icon={
              <Icon name="more-horizontal" className="link_icon" />
            }
          />
        </DemoSection>

        <DemoSection
          headingId="icon-heading"
          title="아이콘"
          description="icon prop·children으로 텍스트 앞·뒤에 아이콘을 배치합니다. 장식용 아이콘은 aria-hidden이 자동 적용됩니다."
          stack
          code={iconCode}
        >
          <div className="link_row">
            <Link
              label="외부 링크"
              icon={
                <Icon name="external-link" className="link_icon" />
              }
            />
            <Link>
              다운로드
              <Icon name="download" className="link_icon" />
            </Link>
            <Link
              label="다음 단계"
              icon={
                <Icon name="arrow-right" className="link_icon" />
              }
            />
          </div>
        </DemoSection>

        <DemoSection
          headingId="external-heading"
          title="새 창 열기"
          description='target="_blank"과 rel="noopener noreferrer"를 함께 지정합니다. 스크린 리더용 안내 문구를 링크 텍스트에 포함합니다.'
          code={externalCode}
        >
          <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
            공식 문서
            <span className="color_muted size_sm">(새 창)</span>
            <Icon name="external-link" className="link_icon" />
          </Link>
        </DemoSection>

        <DemoSection
          headingId="disabled-heading"
          title="비활성"
          description="disabled prop으로 is-disabled · aria-disabled · tabindex=-1을 적용합니다."
          code={disabledCode}
        >
          <Link disabled label="비활성 링크" />
          <Link disabled label="비활성 (span)" />
        </DemoSection>

        <DemoSection
          headingId="context-heading"
          title="문맥 속 사용"
          description="알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다."
          stack
          code={contextCode}
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

        <ApiSection headingId="api-children-heading" title="API · Children">
          <ApiTable columns={linkSlotColumns} rows={linkSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={linkClassColumns} rows={linkClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={linkTokenColumns} rows={linkTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}

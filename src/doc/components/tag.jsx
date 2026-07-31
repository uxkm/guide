export const docMeta = {
  title: 'Tag | UXKM Guide',
  activeNav: 'tag',
  pageTitle: 'Tag',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Tag from '@/components/Tag.jsx';
import TagGroup from '@/components/TagGroup.jsx';
import {
  tagClassColumns,
  tagClasses,
  tagGroupPropColumns,
  tagGroupProps,
  tagGroupSlotColumns,
  tagGroupSlots,
  tagPropColumns,
  tagProps,
  tagSlotColumns,
  tagSlots,
  tagTokenColumns,
  tagTokens,
} from '@/doc/data/tag-api';

const DesignIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const VerifiedIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const ErrorIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const UserIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TagIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
  </svg>
);

const PlusIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const ExternalIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </svg>
);

const basicCode = "import Tag from '@/components/Tag.jsx';\n\nexport function BasicExample() {\n  return (\n    <>\n      <Tag color=\"default\" label=\"Default\" />\n      <Tag color=\"primary\" label=\"Primary\" />\n      <Tag color=\"success\" label=\"Success\" />\n      <Tag color=\"warning\" label=\"Warning\" />\n      <Tag color=\"danger\" label=\"Danger\" />\n      <Tag color=\"info\" label=\"Info\" />\n    </>\n  );\n}";

const semanticCode = "import Tag from '@/components/Tag.jsx';\n\nexport function SemanticExample() {\n  return (\n    <>\n      <ul className=\"tag_group\" aria-label=\"기술 분류\">\n        <Tag as=\"li\" color=\"primary\" label=\"React\" />\n        <Tag as=\"li\" color=\"success\" label=\"Next.js\" />\n      </ul>\n      <p>\n        <Tag as=\"strong\" color=\"warning\" label=\"추천\" /> 항목입니다.\n      </p>\n    </>\n  );\n}";

const solidCode = "import Tag from '@/components/Tag.jsx';\n\nexport function SolidExample() {\n  return (\n    <>\n      <Tag variant=\"solid\" color=\"default\" label=\"Default\" />\n      <Tag variant=\"solid\" color=\"primary\" label=\"Primary\" />\n      <Tag variant=\"solid\" color=\"success\" label=\"Success\" />\n      <Tag variant=\"solid\" color=\"warning\" label=\"Warning\" />\n      <Tag variant=\"solid\" color=\"danger\" label=\"Danger\" />\n      <Tag variant=\"solid\" color=\"info\" label=\"Info\" />\n    </>\n  );\n}";

const outlineCode = "import Tag from '@/components/Tag.jsx';\n\nexport function OutlineExample() {\n  return (\n    <>\n      <Tag variant=\"outline\" color=\"default\" label=\"Default\" />\n      <Tag variant=\"outline\" color=\"primary\" label=\"Primary\" />\n      <Tag variant=\"outline\" color=\"success\" label=\"Success\" />\n      <Tag variant=\"outline\" color=\"warning\" label=\"Warning\" />\n      <Tag variant=\"outline\" color=\"danger\" label=\"Danger\" />\n      <Tag variant=\"outline\" color=\"info\" label=\"Info\" />\n    </>\n  );\n}";

const sizeCode = "import Tag from '@/components/Tag.jsx';\nimport TagGroup from '@/components/TagGroup.jsx';\n\nexport function SizeExample() {\n  return (\n    <>\n      <TagGroup tight>\n        <Tag size=\"sm\" color=\"primary\" label=\"Small\" />\n        <Tag color=\"primary\" label=\"Medium\" />\n        <Tag size=\"lg\" color=\"primary\" label=\"Large\" />\n      </TagGroup>\n      <TagGroup tight>\n        <Tag size=\"sm\" variant=\"outline\" color=\"success\" label=\"Small\" />\n        <Tag variant=\"outline\" color=\"success\" label=\"Medium\" />\n        <Tag size=\"lg\" variant=\"outline\" color=\"success\" label=\"Large\" />\n      </TagGroup>\n      <TagGroup tight>\n        <Tag size=\"sm\" variant=\"solid\" color=\"danger\" label=\"Small\" />\n        <Tag variant=\"solid\" color=\"danger\" label=\"Medium\" />\n        <Tag size=\"lg\" variant=\"solid\" color=\"danger\" label=\"Large\" />\n      </TagGroup>\n    </>\n  );\n}";

const roundCode = "import Tag from '@/components/Tag.jsx';\n\nexport function RoundExample() {\n  return (\n    <>\n      <Tag round color=\"primary\" label=\"Filled\" />\n      <Tag round variant=\"outline\" color=\"primary\" label=\"Outline\" />\n      <Tag round variant=\"solid\" color=\"primary\" label=\"Solid\" />\n      <Tag round variant=\"borderless\" color=\"default\" label=\"Borderless\" />\n    </>\n  );\n}";

const iconDemoCode = "import Tag from '@/components/Tag.jsx';\n\nexport function IconExample() {\n  return (\n    <>\n      <Tag color=\"primary\" label=\"Design\" icon={DesignIcon} />\n      <Tag variant=\"outline\" color=\"success\" label=\"Verified\" icon={VerifiedIcon} />\n      <Tag variant=\"solid\" color=\"danger\" label=\"Error\" icon={ErrorIcon} />\n      <Tag size=\"sm\" round color=\"default\" label=\"User\" icon={UserIcon} />\n    </>\n  );\n}";

const closeCode = "import Tag from '@/components/Tag.jsx';\nimport TagGroup from '@/components/TagGroup.jsx';\n\nexport function CloseExample() {\n  return (\n    <>\n      <TagGroup tight>\n        <Tag closable color=\"primary\" label=\"React\" closeLabel=\"React 태그 제거\" />\n        <Tag closable variant=\"outline\" color=\"default\" label=\"Svelte\" closeLabel=\"Svelte 태그 제거\" />\n        <Tag closable variant=\"solid\" color=\"danger\" label=\"Deprecated\" closeLabel=\"Deprecated 태그 제거\" />\n      </TagGroup>\n      <TagGroup tight>\n        <Tag\n          closable\n          round\n          color=\"success\"\n          label=\"Frontend\"\n          closeLabel=\"Frontend 태그 제거\"\n          icon={TagIcon}\n        />\n      </TagGroup>\n    </>\n  );\n}";

const checkableCode = "import Tag from '@/components/Tag.jsx';\nimport TagGroup from '@/components/TagGroup.jsx';\n\nexport function CheckableExample() {\n  return (\n    <>\n      <TagGroup ariaLabel=\"카테고리 필터\">\n        <Tag checkable selected color=\"default\" label=\"전체\" />\n        <Tag checkable color=\"default\" label=\"UI\" />\n        <Tag checkable color=\"default\" label=\"UX\" />\n        <Tag checkable color=\"default\" label=\"개발\" />\n      </TagGroup>\n      <TagGroup ariaLabel=\"상태 필터\">\n        <Tag checkable round selected color=\"primary\" label=\"진행 중\" />\n        <Tag checkable round selected color=\"success\" label=\"완료\" />\n        <Tag checkable round color=\"warning\" label=\"보류\" />\n        <Tag checkable round color=\"danger\" label=\"취소\" />\n      </TagGroup>\n      <TagGroup tight>\n        <Tag checkable size=\"sm\" selected color=\"default\" label=\"S\" />\n        <Tag checkable size=\"sm\" color=\"default\" label=\"M\" />\n        <Tag checkable size=\"sm\" color=\"default\" label=\"L\" />\n        <Tag checkable size=\"sm\" color=\"default\" label=\"XL\" />\n      </TagGroup>\n    </>\n  );\n}";

const addCode = "import Tag from '@/components/Tag.jsx';\n\nexport function AddExample() {\n  return (\n    <>\n      <Tag add round label=\"태그 추가\" icon={PlusIcon} />\n      <Tag add size=\"sm\" label=\"+ New Tag\" />\n      <Tag add size=\"lg\" round label=\"+ 카테고리 추가\" />\n    </>\n  );\n}";

const linkDemoCode = "import Tag from '@/components/Tag.jsx';\n\nexport function LinkExample() {\n  return (\n    <>\n      <Tag href=\"#\" color=\"primary\" label=\"문서 보기\" />\n      <Tag href=\"#\" variant=\"outline\" color=\"primary\" label=\"가이드\" />\n      <Tag href=\"#\" variant=\"solid\" color=\"primary\" label=\"바로가기\" />\n      <Tag href=\"#\" round variant=\"outline\" color=\"success\" label=\"외부 링크\" icon={ExternalIcon} />\n    </>\n  );\n}";

const disabledCode = "import Tag from '@/components/Tag.jsx';\n\nexport function DisabledExample() {\n  return (\n    <>\n      <Tag disabled color=\"primary\" label=\"Filled\" />\n      <Tag disabled variant=\"outline\" color=\"success\" label=\"Outline\" />\n      <Tag disabled variant=\"solid\" color=\"danger\" label=\"Solid\" />\n      <Tag checkable selected disabled color=\"default\" label=\"선택됨 (비활성)\" />\n      <Tag add disabled label=\"태그 추가 (비활성)\" />\n    </>\n  );\n}";

const groupCode = "import Tag from '@/components/Tag.jsx';\nimport TagGroup from '@/components/TagGroup.jsx';\n\nexport function GroupExample() {\n  return (\n    <>\n      <TagGroup>\n        <Tag color=\"primary\" label=\"HTML\" />\n        <Tag color=\"primary\" label=\"CSS\" />\n        <Tag color=\"primary\" label=\"JavaScript\" />\n        <Tag color=\"default\" label=\"TypeScript\" />\n        <Tag color=\"success\" label=\"SCSS\" />\n      </TagGroup>\n      <div>\n        <p className=\"color_muted size_sm\" style={{ marginBottom: '0.5rem' }}>\n          선택된 기술 스택\n        </p>\n        <TagGroup tight>\n          <Tag closable round color=\"primary\" label=\"React\" closeLabel=\"React 태그 제거\" />\n          <Tag closable round color=\"primary\" label=\"Next.js\" closeLabel=\"Next.js 태그 제거\" />\n          <Tag add round size=\"sm\" label=\"+ 추가\" />\n        </TagGroup>\n      </div>\n    </>\n  );\n}";

export default function TagDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Tag</h1>
          <p className="lead">카테고리, 필터, 선택 항목을 표시하는 태그 컴포넌트입니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본 (Filled)"
          description="연한 배경의 기본 태그입니다. 공통 color_* 클래스로 의미에 따른 색상을 적용합니다."
          code={basicCode}
        >
          <Tag color="default" label="Default" />
          <Tag color="primary" label="Primary" />
          <Tag color="success" label="Success" />
          <Tag color="warning" label="Warning" />
          <Tag color="danger" label="Danger" />
          <Tag color="info" label="Info" />
        </DemoSection>

        <DemoSection
          headingId="semantic-heading"
          title="시맨틱 요소"
          description="일반 Tag는 기본적으로 span을 사용하며, as prop으로 콘텐츠 구조와 의미에 맞는 HTML 요소 또는 커스텀 컴포넌트를 지정합니다. checkable·add·href 사용 시에는 접근성을 위해 button 또는 a를 자동으로 사용합니다."
          code={semanticCode}
          stack
        >
          <ul className="tag_group" aria-label="기술 분류">
            <Tag as="li" color="primary" label="React" />
            <Tag as="li" color="success" label="Next.js" />
          </ul>
          <p>
            <Tag as="strong" color="warning" label="추천" /> 항목입니다.
          </p>
        </DemoSection>

        <DemoSection
          headingId="solid-heading"
          title="솔리드"
          description='variant="solid"로 tag_solid 채움 배경·대비 텍스트를 적용합니다.'
          code={solidCode}
        >
          <Tag variant="solid" color="default" label="Default" />
          <Tag variant="solid" color="primary" label="Primary" />
          <Tag variant="solid" color="success" label="Success" />
          <Tag variant="solid" color="warning" label="Warning" />
          <Tag variant="solid" color="danger" label="Danger" />
          <Tag variant="solid" color="info" label="Info" />
        </DemoSection>

        <DemoSection
          headingId="outline-heading"
          title="아웃라인"
          description='variant="outline"으로 배경 없이 테두리만 표시합니다.'
          code={outlineCode}
        >
          <Tag variant="outline" color="default" label="Default" />
          <Tag variant="outline" color="primary" label="Primary" />
          <Tag variant="outline" color="success" label="Success" />
          <Tag variant="outline" color="warning" label="Warning" />
          <Tag variant="outline" color="danger" label="Danger" />
          <Tag variant="outline" color="info" label="Info" />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="size prop으로 tag_sm · tag_lg 스케일을 조절합니다. Filled · Outline · Solid 모두 적용 가능합니다."
          stack
          code={sizeCode}
        >
          <TagGroup tight>
            <Tag size="sm" color="primary" label="Small" />
            <Tag color="primary" label="Medium" />
            <Tag size="lg" color="primary" label="Large" />
          </TagGroup>
          <TagGroup tight>
            <Tag size="sm" variant="outline" color="success" label="Small" />
            <Tag variant="outline" color="success" label="Medium" />
            <Tag size="lg" variant="outline" color="success" label="Large" />
          </TagGroup>
          <TagGroup tight>
            <Tag size="sm" variant="solid" color="danger" label="Small" />
            <Tag variant="solid" color="danger" label="Medium" />
            <Tag size="lg" variant="solid" color="danger" label="Large" />
          </TagGroup>
        </DemoSection>

        <DemoSection
          headingId="round-heading"
          title="둥근"
          description="round prop으로 tag_round pill 형태의 모서리를 적용합니다."
          code={roundCode}
        >
          <Tag round color="primary" label="Filled" />
          <Tag round variant="outline" color="primary" label="Outline" />
          <Tag round variant="solid" color="primary" label="Solid" />
          <Tag round variant="borderless" color="default" label="Borderless" />
        </DemoSection>

        <DemoSection
          headingId="icon-heading"
          title="아이콘"
          description="icon prop으로 텍스트 앞에 아이콘을 배치합니다. 크기는 태그 스케일에 맞춰 조절됩니다."
          code={iconDemoCode}
        >
          <Tag color="primary" label="Design" icon={DesignIcon} />
          <Tag variant="outline" color="success" label="Verified" icon={VerifiedIcon} />
          <Tag variant="solid" color="danger" label="Error" icon={ErrorIcon} />
          <Tag size="sm" round color="default" label="User" icon={UserIcon} />
        </DemoSection>

        <DemoSection
          headingId="close-heading"
          title="닫기 가능"
          description="closable prop과 closeLabel로 제거 가능한 태그를 만듭니다."
          stack
          code={closeCode}
        >
          <TagGroup tight>
            <Tag closable color="primary" label="React" closeLabel="React 태그 제거" />
            <Tag closable variant="outline" color="default" label="Svelte" closeLabel="Svelte 태그 제거" />
            <Tag closable variant="solid" color="danger" label="Deprecated" closeLabel="Deprecated 태그 제거" />
          </TagGroup>
          <TagGroup tight>
            <Tag
              closable
              round
              color="success"
              label="Frontend"
              closeLabel="Frontend 태그 제거"
              icon={TagIcon}
            />
          </TagGroup>
        </DemoSection>

        <DemoSection
          headingId="checkable-heading"
          title="선택 가능"
          description="checkable prop으로 필터·토글 태그를 만듭니다. selected prop으로 is-selected 상태를 표시합니다."
          stack
          code={checkableCode}
        >
          <TagGroup ariaLabel="카테고리 필터">
            <Tag checkable selected color="default" label="전체" />
            <Tag checkable color="default" label="UI" />
            <Tag checkable color="default" label="UX" />
            <Tag checkable color="default" label="개발" />
          </TagGroup>

          <TagGroup ariaLabel="상태 필터">
            <Tag checkable round selected color="primary" label="진행 중" />
            <Tag checkable round selected color="success" label="완료" />
            <Tag checkable round color="warning" label="보류" />
            <Tag checkable round color="danger" label="취소" />
          </TagGroup>

          <TagGroup tight>
            <Tag checkable size="sm" selected color="default" label="S" />
            <Tag checkable size="sm" color="default" label="M" />
            <Tag checkable size="sm" color="default" label="L" />
            <Tag checkable size="sm" color="default" label="XL" />
          </TagGroup>
        </DemoSection>

        <DemoSection
          headingId="add-heading"
          title="추가"
          description="add prop으로 새 항목을 추가하는 버튼 형태의 태그를 만듭니다."
          code={addCode}
        >
          <Tag add round label="태그 추가" icon={PlusIcon} />
          <Tag add size="sm" label="+ New Tag" />
          <Tag add size="lg" round label="+ 카테고리 추가" />
        </DemoSection>

        <DemoSection
          headingId="link-heading"
          title="링크"
          description="href prop으로 클릭 가능한 태그 링크(a.tag)를 만듭니다."
          code={linkDemoCode}
        >
          <Tag href="#" color="primary" label="문서 보기" />
          <Tag href="#" variant="outline" color="primary" label="가이드" />
          <Tag href="#" variant="solid" color="primary" label="바로가기" />
          <Tag href="#" round variant="outline" color="success" label="외부 링크" icon={ExternalIcon} />
        </DemoSection>

        <DemoSection
          headingId="disabled-heading"
          title="비활성"
          description="disabled prop으로 is-disabled 상태를 표시합니다. button 태그에는 disabled 속성을 함께 사용합니다."
          code={disabledCode}
        >
          <Tag disabled color="primary" label="Filled" />
          <Tag disabled variant="outline" color="success" label="Outline" />
          <Tag disabled variant="solid" color="danger" label="Solid" />
          <Tag checkable selected disabled color="default" label="선택됨 (비활성)" />
          <Tag add disabled label="태그 추가 (비활성)" />
        </DemoSection>

        <DemoSection
          headingId="group-heading"
          title="그룹"
          description="TagGroup으로 여러 태그를 묶어 표시합니다. tight prop으로 tag_group-tight 간격을 줄일 수 있습니다."
          stack
          code={groupCode}
        >
          <TagGroup>
            <Tag color="primary" label="HTML" />
            <Tag color="primary" label="CSS" />
            <Tag color="primary" label="JavaScript" />
            <Tag color="default" label="TypeScript" />
            <Tag color="success" label="SCSS" />
          </TagGroup>

          <div>
            <p className="color_muted size_sm" style={{ marginBottom: '0.5rem' }}>
              선택된 기술 스택
            </p>
            <TagGroup tight>
              <Tag closable round color="primary" label="React" closeLabel="React 태그 제거" />
              <Tag closable round color="primary" label="Next.js" closeLabel="Next.js 태그 제거" />
              <Tag add round size="sm" label="+ 추가" />
            </TagGroup>
          </div>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Tag Props">
          <ApiTable columns={tagPropColumns} rows={tagProps} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            <code className="typo_code">closable</code> 태그는 <code className="typo_code">onClose</code> prop으로 닫기 동작을 처리합니다.
          </p>
        </ApiSection>

        <ApiSection headingId="api-group-props-heading" title="API · TagGroup Props">
          <ApiTable columns={tagGroupPropColumns} rows={tagGroupProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-children-heading" title="API · Tag Children">
          <ApiTable columns={tagSlotColumns} rows={tagSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-group-children-heading" title="API · TagGroup Children">
          <ApiTable columns={tagGroupSlotColumns} rows={tagGroupSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={tagClassColumns} rows={tagClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={tagTokenColumns} rows={tagTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}

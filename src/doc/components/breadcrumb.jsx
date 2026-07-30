export const docMeta = {
  title: 'Breadcrumb | UXKM Guide',
  activeNav: 'breadcrumb',
  pageTitle: 'Breadcrumb',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import BreadcrumbItem from '@/components/BreadcrumbItem.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import {
  breadcrumbChildColumns,
  breadcrumbChildren,
  breadcrumbClassColumns,
  breadcrumbClasses,
  breadcrumbItemChildColumns,
  breadcrumbItemChildren,
  breadcrumbItemPropColumns,
  breadcrumbItemProps,
  breadcrumbPropColumns,
  breadcrumbProps,
  breadcrumbTokenColumns,
  breadcrumbTokens,
} from '@/doc/data/breadcrumb-api';

const HomeIcon = (
  <svg
    className="breadcrumb_icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
  </svg>
);

const basicCode = `import Breadcrumb from '@/components/Breadcrumb.jsx';

export function BasicExample() {
  return (
    <Breadcrumb
      items={[
        { label: '홈', href: '#' },
        { label: '컴포넌트', href: '#' },
        { label: 'Breadcrumb', current: true },
      ]}
    />
  );
}`;

const separatorCode = `import Breadcrumb from '@/components/Breadcrumb.jsx';

export function SeparatorExample() {
  return (
    <>
      <Breadcrumb
        ariaLabel="경로 — chevron"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Chevron', current: true },
        ]}
      />
      <Breadcrumb
        separator="slash"
        ariaLabel="경로 — slash"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Slash', current: true },
        ]}
      />
      <Breadcrumb
        separator="dot"
        ariaLabel="경로 — dot"
        items={[
          { label: '홈', href: '#' },
          { label: '가이드', href: '#' },
          { label: 'Dot', current: true },
        ]}
      />
    </>
  );
}`;

const iconCode = `import Breadcrumb from '@/components/Breadcrumb.jsx';
import BreadcrumbItem from '@/components/BreadcrumbItem.jsx';

export function IconExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        <svg className="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      </BreadcrumbItem>
      <BreadcrumbItem label="설정" href="#" />
      <BreadcrumbItem label="계정" href="#" />
      <BreadcrumbItem label="프로필" current />
    </Breadcrumb>
  );
}`;

const sizeCode = `import Breadcrumb from '@/components/Breadcrumb.jsx';

export function SizeExample() {
  return (
    <>
      <Breadcrumb
        size="sm"
        ariaLabel="경로 — small"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Small', current: true },
        ]}
      />
      <Breadcrumb
        ariaLabel="경로 — medium"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Medium', current: true },
        ]}
      />
      <Breadcrumb
        size="lg"
        ariaLabel="경로 — large"
        items={[
          { label: '홈', href: '#' },
          { label: '문서', href: '#' },
          { label: 'Large', current: true },
        ]}
      />
    </>
  );
}`;

const ellipsisCode = `import Breadcrumb from '@/components/Breadcrumb.jsx';
import BreadcrumbItem from '@/components/BreadcrumbItem.jsx';

export function EllipsisExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#" icon ariaLabel="홈">
        <svg className="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      </BreadcrumbItem>
      <li className="breadcrumb_item">
        <button
          type="button"
          className="breadcrumb_ellipsis"
          data-ripple=""
          aria-label="숨겨진 경로 보기"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          …
        </button>
      </li>
      <BreadcrumbItem label="컴포넌트" href="#" />
      <BreadcrumbItem label="Breadcrumb" current />
    </Breadcrumb>
  );
}`;

const stateCode = `import Breadcrumb from '@/components/Breadcrumb.jsx';
import BreadcrumbItem from '@/components/BreadcrumbItem.jsx';

export function StateExample() {
  return (
    <>
      <Breadcrumb ariaLabel="경로 — 비활성">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="삭제된 페이지" disabled />
        <BreadcrumbItem label="현재 페이지" current />
      </Breadcrumb>
      <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
        <BreadcrumbItem label="홈" href="#" />
        <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
        <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
      </Breadcrumb>
    </>
  );
}`;

export default function BreadcrumbDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Breadcrumb</h1>
        <p className="lead">현재 페이지의 위치를 계층 경로로 표시하는 내비게이션 컴포넌트입니다. <code className="typo_code">nav</code> · <code className="typo_code">ol</code> 시맨틱 구조와 <code className="typo_code">{'aria-current="page"'}</code>로 접근성을 지원합니다.</p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다."
        code={basicCode}
      >
        <Breadcrumb
          items={[
            { label: '홈', href: '#' },
            { label: '컴포넌트', href: '#' },
            { label: 'Breadcrumb', current: true },
          ]}
        />
      </DemoSection>

      <DemoSection
        headingId="separator-heading"
        title="구분자"
        description="separator로 구분자 스타일을 변경합니다."
        code={separatorCode}
        stack
      >
        <Breadcrumb
          ariaLabel="경로 — chevron"
          items={[
            { label: '홈', href: '#' },
            { label: '가이드', href: '#' },
            { label: 'Chevron', current: true },
          ]}
        />
        <Breadcrumb
          separator="slash"
          ariaLabel="경로 — slash"
          items={[
            { label: '홈', href: '#' },
            { label: '가이드', href: '#' },
            { label: 'Slash', current: true },
          ]}
        />
        <Breadcrumb
          separator="dot"
          ariaLabel="경로 — dot"
          items={[
            { label: '홈', href: '#' },
            { label: '가이드', href: '#' },
            { label: 'Dot', current: true },
          ]}
        />
      </DemoSection>

      <DemoSection
        headingId="icon-heading"
        title="홈 아이콘"
        description="icon으로 아이콘만 있는 첫 항목을 표시합니다."
        code={iconCode}
      >
        <Breadcrumb>
          <BreadcrumbItem href="#" icon ariaLabel="홈">
            {HomeIcon}
          </BreadcrumbItem>
          <BreadcrumbItem label="설정" href="#" />
          <BreadcrumbItem label="계정" href="#" />
          <BreadcrumbItem label="프로필" current />
        </Breadcrumb>
      </DemoSection>

      <DemoSection
        headingId="size-heading"
        title="크기"
        description="size로 텍스트 크기를 조절합니다."
        code={sizeCode}
        stack
      >
        <Breadcrumb
          size="sm"
          ariaLabel="경로 — small"
          items={[
            { label: '홈', href: '#' },
            { label: '문서', href: '#' },
            { label: 'Small', current: true },
          ]}
        />
        <Breadcrumb
          ariaLabel="경로 — medium"
          items={[
            { label: '홈', href: '#' },
            { label: '문서', href: '#' },
            { label: 'Medium', current: true },
          ]}
        />
        <Breadcrumb
          size="lg"
          ariaLabel="경로 — large"
          items={[
            { label: '홈', href: '#' },
            { label: '문서', href: '#' },
            { label: 'Large', current: true },
          ]}
        />
      </DemoSection>

      <DemoSection
        headingId="ellipsis-heading"
        title="경로 생략"
        description="긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다."
        code={ellipsisCode}
      >
        <Breadcrumb>
          <BreadcrumbItem href="#" icon ariaLabel="홈">
            {HomeIcon}
          </BreadcrumbItem>
          <li className="breadcrumb_item">
            <button
              type="button"
              className="breadcrumb_ellipsis"
              data-ripple=""
              aria-label="숨겨진 경로 보기"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              …
            </button>
          </li>
          <BreadcrumbItem label="컴포넌트" href="#" />
          <BreadcrumbItem label="Breadcrumb" current />
        </Breadcrumb>
      </DemoSection>

      <DemoSection
        headingId="state-heading"
        title="상태"
        description="비활성 링크는 disabled를 사용합니다."
        code={stateCode}
        stack
      >
        <Breadcrumb ariaLabel="경로 — 비활성">
          <BreadcrumbItem label="홈" href="#" />
          <BreadcrumbItem label="삭제된 페이지" disabled />
          <BreadcrumbItem label="현재 페이지" current />
        </Breadcrumb>
        <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
          <BreadcrumbItem label="홈" href="#" />
          <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="#" />
          <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
        </Breadcrumb>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Breadcrumb Props">
        <ApiTable columns={breadcrumbPropColumns} rows={breadcrumbProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-props-heading" title="API · BreadcrumbItem Props">
        <ApiTable columns={breadcrumbItemPropColumns} rows={breadcrumbItemProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Breadcrumb Children">
        <ApiTable columns={breadcrumbChildColumns} rows={breadcrumbChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-children-heading" title="API · BreadcrumbItem Children">
        <ApiTable columns={breadcrumbItemChildColumns} rows={breadcrumbItemChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={breadcrumbClassColumns} rows={breadcrumbClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={breadcrumbTokenColumns} rows={breadcrumbTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}

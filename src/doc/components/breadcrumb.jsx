export const docMeta = {
  title: 'Breadcrumb | HTML Components',
  activeNav: 'breadcrumb',
  pageTitle: 'Breadcrumb',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import BreadcrumbItem from '@/components/BreadcrumbItem.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import {
  breadcrumbClassColumns,
  breadcrumbClasses,
  breadcrumbItemPropColumns,
  breadcrumbItemProps,
  breadcrumbItemSlotColumns,
  breadcrumbItemSlots,
  breadcrumbPropColumns,
  breadcrumbProps,
  breadcrumbSlotColumns,
  breadcrumbSlots,
  breadcrumbTokenColumns,
  breadcrumbTokens,
} from '@/doc/data/breadcrumb-api';

export default function BreadcrumbDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Breadcrumb</h1>
          <p className="lead">현재 페이지의 위치를 계층 경로로 표시하는 내비게이션 컴포넌트입니다. <code className="typo_code">nav</code> · <code className="typo_code">ol</code> 시맨틱 구조와 <code className="typo_code">aria-current="page"</code>로 접근성을 지원합니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="이전 단계는 링크, 마지막 항목은 현재 페이지로 표시합니다."
        >
          <Breadcrumb
            items={[
              { label: '홈', href: '/' },
              { label: '컴포넌트', href: '/components/button' },
              { label: 'Breadcrumb', current: true },
            ]}
          />
        </DemoSection>

        <DemoSection
          headingId="separator-heading"
          title="구분자"
          description="separator로 구분자 스타일을 변경합니다."
          stack
        >
          <Breadcrumb
            ariaLabel="경로 — chevron"
            items={[
              { label: '홈', href: '/' },
              { label: '가이드', href: '/getting-started' },
              { label: 'Chevron', current: true },
            ]}
          />

          <Breadcrumb
            separator="slash"
            ariaLabel="경로 — slash"
            items={[
              { label: '홈', href: '/' },
              { label: '가이드', href: '/getting-started' },
              { label: 'Slash', current: true },
            ]}
          />

          <Breadcrumb
            separator="dot"
            ariaLabel="경로 — dot"
            items={[
              { label: '홈', href: '/' },
              { label: '가이드', href: '/getting-started' },
              { label: 'Dot', current: true },
            ]}
          />
        </DemoSection>

        <DemoSection
          headingId="icon-heading"
          title="홈 아이콘"
          description="icon으로 아이콘만 있는 첫 항목을 표시합니다."
        >
          <Breadcrumb>
            <BreadcrumbItem href="/" icon ariaLabel="홈">
              <svg className="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
              </svg>
            </BreadcrumbItem>
            <BreadcrumbItem label="설정" href="/getting-started" />
            <BreadcrumbItem label="계정" href="/design-tokens" />
            <BreadcrumbItem label="프로필" current />
          </Breadcrumb>
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="size로 텍스트 크기를 조절합니다."
          stack
        >
          <Breadcrumb
            size="sm"
            ariaLabel="경로 — small"
            items={[
              { label: '홈', href: '/' },
              { label: '문서', href: '/design-tokens' },
              { label: 'Small', current: true },
            ]}
          />

          <Breadcrumb
            ariaLabel="경로 — medium"
            items={[
              { label: '홈', href: '/' },
              { label: '문서', href: '/design-tokens' },
              { label: 'Medium', current: true },
            ]}
          />

          <Breadcrumb
            size="lg"
            ariaLabel="경로 — large"
            items={[
              { label: '홈', href: '/' },
              { label: '문서', href: '/design-tokens' },
              { label: 'Large', current: true },
            ]}
          />
        </DemoSection>

        <DemoSection
          headingId="ellipsis-heading"
          title="경로 생략"
          description="긴 경로는 첫 항목·생략 버튼·직전 단계·현재 페이지만 표시합니다."
        >
          <Breadcrumb>
            <BreadcrumbItem href="/" icon ariaLabel="홈">
              <svg className="breadcrumb_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
              </svg>
            </BreadcrumbItem>
            <li className="breadcrumb_item">
              <button type="button" className="breadcrumb_ellipsis" data-ripple aria-label="숨겨진 경로 보기" aria-haspopup="menu" aria-expanded="false">…</button>
            </li>
            <BreadcrumbItem label="컴포넌트" href="/components/button" />
            <BreadcrumbItem label="Breadcrumb" current />
          </Breadcrumb>
        </DemoSection>

        <DemoSection
          headingId="state-heading"
          title="상태"
          description="비활성 링크는 disabled를 사용합니다."
          stack
        >
          <Breadcrumb ariaLabel="경로 — 비활성">
            <BreadcrumbItem label="홈" href="/" />
            <BreadcrumbItem label="삭제된 페이지" disabled />
            <BreadcrumbItem label="현재 페이지" current />
          </Breadcrumb>

          <Breadcrumb separator="slash" ariaLabel="경로 — 긴 레이블">
            <BreadcrumbItem label="홈" href="/" />
            <BreadcrumbItem label="프로젝트 관리 및 협업 도구 설정" href="/components/card" />
            <BreadcrumbItem label="사용자 권한 및 역할 기반 접근 제어" current />
          </Breadcrumb>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Breadcrumb Props">
          <ApiTable columns={breadcrumbPropColumns} rows={breadcrumbProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-item-props-heading" title="API · BreadcrumbItem Props">
          <ApiTable columns={breadcrumbItemPropColumns} rows={breadcrumbItemProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Breadcrumb Slots">
          <ApiTable columns={breadcrumbSlotColumns} rows={breadcrumbSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-item-slots-heading" title="API · BreadcrumbItem Slots">
          <ApiTable columns={breadcrumbItemSlotColumns} rows={breadcrumbItemSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={breadcrumbClassColumns} rows={breadcrumbClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={breadcrumbTokenColumns} rows={breadcrumbTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}

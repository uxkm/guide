'use client';

export const docMeta = {
  title: 'Navbar | UXKM Guide',
  activeNav: 'navbar',
  pageTitle: 'Navbar',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import Button from '@/components/Button.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Icon from '@/components/Icon.jsx';
import Input from '@/components/Input.jsx';
import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';
import NextLink from 'next/link';
import {
  navbarChildColumns,
  navbarChildren,
  navbarClassColumns,
  navbarClasses,
  navbarItemChildColumns,
  navbarItemChildren,
  navbarItemPropColumns,
  navbarItemProps,
  navbarPropColumns,
  navbarProps,
  navbarTokenColumns,
  navbarTokens,
} from '@/doc/data/navbar-api';

const basicCode = `import NextLink from 'next/link';
import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function BasicExample() {
  return (
    <Navbar
      brand="UXKM"
      brandAs={NextLink}
      brandHref="/"
      items={
        <NavbarList>
          <NavbarItem as={NextLink} href="/" label="홈" active />
          <NavbarItem as={NextLink} href="/components/button" label="컴포넌트" />
          <NavbarItem as={NextLink} href="/design-tokens" label="토큰" />
          <NavbarItem as={NextLink} href="/getting-started" label="시작하기" />
        </NavbarList>
      }
    />
  );
}`;

const brandCode = `import Icon from '@/components/Icon.jsx';
import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function BrandExample() {
  return (
    <Navbar
      brand="HTML Components"
      brandIcon={
        <Icon className="navbar_brand-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </Icon>
      }
      items={
        <NavbarList>
          <NavbarItem label="가이드" active />
          <NavbarItem label="리소스" />
        </NavbarList>
      }
    />
  );
}`;

const actionsCode = `import Button from '@/components/Button.jsx';
import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function ActionsExample() {
  return (
    <Navbar
      brand="Dashboard"
      items={
        <NavbarList>
          <NavbarItem label="개요" active />
          <NavbarItem label="분석" />
          <NavbarItem label="설정" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="가입" />
        </>
      }
    />
  );
}`;

const searchCode = `import Input from '@/components/Input.jsx';
import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function SearchExample() {
  return (
    <Navbar
      brand="Docs"
      items={
        <NavbarList>
          <NavbarItem label="시작하기" />
          <NavbarItem label="컴포넌트" active />
          <NavbarItem label="패턴" />
        </NavbarList>
      }
      search={
        <Input
          type="search"
          id="navbar-search-demo"
          size="sm"
          placeholder="문서 검색…"
          autoComplete="off"
          ariaLabel="문서 검색"
        />
      }
    />
  );
}`;

const sizeCode = `import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function SizeExample() {
  return (
    <>
      {/* Small */}
      <Navbar
        brand="Small"
        size="sm"
        items={
          <NavbarList>
            <NavbarItem label="메뉴" active />
          </NavbarList>
        }
      />

      {/* Default */}
      <Navbar
        brand="Default"
        items={
          <NavbarList>
            <NavbarItem label="메뉴" active />
          </NavbarList>
        }
      />

      {/* Large */}
      <Navbar
        brand="Large"
        size="lg"
        items={
          <NavbarList>
            <NavbarItem label="메뉴" active />
          </NavbarList>
        }
      />
    </>
  );
}`;

const variantCode = `import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function VariantExample() {
  return (
    <>
      {/* Borderless */}
      <Navbar
        brand="Borderless"
        borderless
        items={
          <NavbarList>
            <NavbarItem label="홈" active />
            <NavbarItem label="소개" />
          </NavbarList>
        }
      />

      {/* Dark */}
      <Navbar
        brand="Dark Surface"
        dark
        items={
          <NavbarList>
            <NavbarItem label="홈" active />
            <NavbarItem label="소개" />
          </NavbarList>
        }
      />

      {/* Sticky */}
      <Navbar
        brand="Sticky"
        sticky
        items={
          <NavbarList>
            <NavbarItem label="고정" active />
          </NavbarList>
        }
      />
    </>
  );
}`;

const badgeCode = `import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function BadgeExample() {
  return (
    <Navbar
      brand="Inbox"
      items={
        <NavbarList>
          <NavbarItem label="받은편지함" active />
          <NavbarItem
            label="알림"
            badge={<span className="badge color_danger">3</span>}
          />
          <NavbarItem label="보관함" />
        </NavbarList>
      }
    />
  );
}`;

const responsiveCode = `import Button from '@/components/Button.jsx';
import Navbar from '@/components/Navbar.jsx';
import NavbarItem from '@/components/NavbarItem.jsx';
import NavbarList from '@/components/NavbarList.jsx';

export function ResponsiveExample() {
  return (
    <Navbar
      brand="Mobile"
      responsive
      collapseId="navbar-responsive-demo"
      items={
        <NavbarList>
          <NavbarItem label="홈" active />
          <NavbarItem label="제품" />
          <NavbarItem label="가격" />
          <NavbarItem label="문의" />
        </NavbarList>
      }
      actions={
        <>
          <Button variant="outline" size="sm" label="로그인" />
          <Button variant="filled" color="primary" size="sm" label="시작하기" />
        </>
      }
    />
  );
}`;

export default function NavbarDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Navbar</h1>
        <p className="lead">사이트 상단 내비게이션 바입니다. 브랜드·메뉴·검색·액션 버튼을 한 줄에 배치하며, 좁은 화면에서는 토글로 메뉴를 접습니다.</p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="NavbarItem으로 메뉴를 구성합니다. active prop으로 현재 페이지를 표시합니다."
        code={basicCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="UXKM"
            brandAs={NextLink}
            brandHref="/"
            items={
              <NavbarList>
                <NavbarItem as={NextLink} href="/" label="홈" active />
                <NavbarItem as={NextLink} href="/components/button" label="컴포넌트" />
                <NavbarItem as={NextLink} href="/design-tokens" label="토큰" />
                <NavbarItem as={NextLink} href="/getting-started" label="시작하기" />
              </NavbarList>
            }
          />
        </div>
      </DemoSection>

      <DemoSection
        headingId="brand-heading"
        title="브랜드"
        description="brandIcon에 Icon 컴포넌트를 함께 배치할 수 있습니다."
        code={brandCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="HTML Components"
            brandIcon={
              <Icon className="navbar_brand-icon">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18" />
              </Icon>
            }
            items={
              <NavbarList>
                <NavbarItem label="가이드" active />
                <NavbarItem label="리소스" />
              </NavbarList>
            }
          />
        </div>
      </DemoSection>

      <DemoSection
        headingId="actions-heading"
        title="액션 영역"
        description="navbar_actions에 버튼·아바타 등을 배치합니다. 버튼 컴포넌트와 조합해 사용합니다."
        code={actionsCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="Dashboard"
            items={
              <NavbarList>
                <NavbarItem label="개요" active />
                <NavbarItem label="분석" />
                <NavbarItem label="설정" />
              </NavbarList>
            }
            actions={
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  ariaLabel="알림"
                  iconBefore={
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  }
                />
                <Button variant="outline" size="sm" label="로그인" />
                <Button variant="filled" color="primary" size="sm" label="가입" />
              </>
            }
          />
        </div>
      </DemoSection>

      <DemoSection
        headingId="search-heading"
        title="검색"
        description="navbar_search에 input 컴포넌트를 넣어 검색 필드를 제공합니다."
        code={searchCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="Docs"
            items={
              <NavbarList>
                <NavbarItem label="시작하기" />
                <NavbarItem label="컴포넌트" active />
                <NavbarItem label="패턴" />
              </NavbarList>
            }
            search={
              <Input
                type="search"
                id="navbar-search-demo"
                size="sm"
                placeholder="문서 검색…"
                autoComplete="off"
                ariaLabel="문서 검색"
              />
            }
            actions={<Button variant="filled" color="primary" size="sm" label="GitHub" />}
          />
        </div>
      </DemoSection>

      <DemoSection
        headingId="size-heading"
        title="크기"
        description="navbar_sm · navbar_lg로 높이를 조절합니다."
        code={sizeCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="Small"
            size="sm"
            items={
              <NavbarList>
                <NavbarItem label="메뉴" active />
              </NavbarList>
            }
          />
        </div>
        <div className="navbar_demo">
          <Navbar
            brand="Default"
            items={
              <NavbarList>
                <NavbarItem label="메뉴" active />
              </NavbarList>
            }
          />
        </div>
        <div className="navbar_demo">
          <Navbar
            brand="Large"
            size="lg"
            items={
              <NavbarList>
                <NavbarItem label="메뉴" active />
              </NavbarList>
            }
          />
        </div>
      </DemoSection>

      <DemoSection
        headingId="variant-heading"
        title="스타일 변형"
        description="navbar_borderless · navbar_dark · navbar_sticky로 외형을 바꿉니다."
        code={variantCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="Borderless"
            borderless
            items={
              <NavbarList>
                <NavbarItem label="홈" active />
                <NavbarItem label="소개" />
              </NavbarList>
            }
          />
        </div>
        <div className="navbar_demo">
          <Navbar
            brand="Dark Surface"
            dark
            items={
              <NavbarList>
                <NavbarItem label="홈" active />
                <NavbarItem label="소개" />
              </NavbarList>
            }
          />
        </div>
        <div className="navbar_demo navbar_demo-scroll">
          <Navbar
            brand="Sticky"
            sticky
            items={
              <NavbarList>
                <NavbarItem label="고정" active />
              </NavbarList>
            }
          />
          <div style={{ padding: 'var(--space-xl)', color: 'var(--color-text-muted)', fontSize: 'var(--text-size-sm)' }}>
            <p style={{ margin: '0 0 var(--space-md)' }}>스크롤해 보세요. navbar_sticky는 상단에 고정됩니다.</p>
            <p style={{ margin: '0' }}>콘텐츠 영역 예시입니다.</p>
            <p style={{ margin: 'var(--space-md) 0 0' }}>추가 콘텐츠…</p>
            <p style={{ margin: 'var(--space-md) 0 0' }}>추가 콘텐츠…</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        headingId="badge-heading"
        title="배지"
        description="메뉴 항목에 badge 컴포넌트를 함께 사용할 수 있습니다."
        code={badgeCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="Inbox"
            items={
              <NavbarList>
                <NavbarItem label="받은편지함" active />
                <NavbarItem label="알림" badge={<span className="badge color_danger">3</span>} />
                <NavbarItem label="보관함" />
              </NavbarList>
            }
          />
        </div>
      </DemoSection>

      <DemoSection
        headingId="responsive-heading"
        title="반응형"
        description="768px 미만에서 navbar_toggle이 표시되고 메뉴가 접힙니다. aria-expanded · aria-controls · aria-label을 지정합니다."
        code={responsiveCode}
        stack
      >
        <div className="navbar_demo">
          <Navbar
            brand="Mobile"
            responsive
            collapseId="navbar-responsive-demo"
            items={
              <NavbarList>
                <NavbarItem label="홈" active />
                <NavbarItem label="제품" />
                <NavbarItem label="가격" />
                <NavbarItem label="문의" />
              </NavbarList>
            }
            actions={
              <>
                <Button variant="outline" size="sm" label="로그인" />
                <Button variant="filled" color="primary" size="sm" label="시작하기" />
              </>
            }
          />
        </div>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Navbar Props">
        <ApiTable columns={navbarPropColumns} rows={navbarProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-props-heading" title="API · NavbarItem Props">
        <ApiTable columns={navbarItemPropColumns} rows={navbarItemProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Navbar Children">
        <ApiTable columns={navbarChildColumns} rows={navbarChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-item-children-heading" title="API · NavbarItem Children">
        <ApiTable columns={navbarItemChildColumns} rows={navbarItemChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={navbarClassColumns} rows={navbarClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={navbarTokenColumns} rows={navbarTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}

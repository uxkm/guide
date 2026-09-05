'use client';

import { Breadcrumb, BreadcrumbItem } from '@uxkm/react/breadcrumb';
import Dropdown from '@uxkm/react/dropdown';
import { Menu, MenuItem } from '@uxkm/react/menu';
import { Navbar, NavbarItem, NavbarList } from '@uxkm/react/navbar';
import Pagination from '@uxkm/react/pagination';
import Steps from '@uxkm/react/steps';
import Tabs, { TabPanel } from '@uxkm/react/tabs';
import Link from 'next/link';
import { DemoSection } from '../../../src/demo/DemoSection.jsx';

export default function NavigationPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">
            <Link href="/components" className="link color_accent">
              컴포넌트
            </Link>
            {' · Navigation'}
          </p>
          <h1>Navigation</h1>
          <p className="lead">내비게이션 컴포넌트를 렌더합니다.</p>
        </header>

        <DemoSection id="breadcrumb" title="Breadcrumb" path="@uxkm/react/breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem label="홈" href="/" />
            <BreadcrumbItem label="컴포넌트" href="/components" />
            <BreadcrumbItem label="Navigation" current />
          </Breadcrumb>
        </DemoSection>

        <DemoSection id="navbar" title="Navbar" path="@uxkm/react/navbar">
          <Navbar brand="UXKM">
            <NavbarList>
              <NavbarItem label="개요" active />
              <NavbarItem label="가이드" />
              <NavbarItem label="컴포넌트" />
            </NavbarList>
          </Navbar>
        </DemoSection>

        <DemoSection id="menu" title="Menu" path="@uxkm/react/menu">
          <Menu ariaLabel="데모 메뉴" bordered>
            <MenuItem label="대시보드" active />
            <MenuItem label="프로젝트" />
            <MenuItem label="설정" />
          </Menu>
        </DemoSection>

        <DemoSection id="dropdown" title="Dropdown" path="@uxkm/react/dropdown">
          <Dropdown open triggerLabel="옵션">
            <Menu ariaLabel="드롭다운 메뉴">
              <MenuItem label="편집" />
              <MenuItem label="복제" />
              <MenuItem label="삭제" />
            </Menu>
          </Dropdown>
        </DemoSection>

        <DemoSection id="tabs" title="Tabs" path="@uxkm/react/tabs">
          <Tabs defaultValue="general" ariaLabel="데모 탭">
            <TabPanel value="general" label="일반">
              일반 탭 패널입니다.
            </TabPanel>
            <TabPanel value="detail" label="상세">
              상세 탭 패널입니다.
            </TabPanel>
            <TabPanel value="settings" label="설정">
              설정 탭 패널입니다.
            </TabPanel>
          </Tabs>
        </DemoSection>

        <DemoSection id="steps" title="Steps" path="@uxkm/react/steps">
          <Steps
            current={2}
            ariaLabel="진행 단계"
            items={[
              { title: '계정', description: '기본 정보' },
              { title: '프로필', description: '추가 정보' },
              { title: '완료', description: '확인' },
            ]}
          />
        </DemoSection>

        <DemoSection id="pagination" title="Pagination" path="@uxkm/react/pagination">
          <Pagination current={2} total={50} pageSize={10} />
        </DemoSection>

        <p>
          <Link href="/components" className="link color_primary">
            ← 컴포넌트 목록
          </Link>
        </p>
      </div>
    </main>
  );
}

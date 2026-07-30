export const docMeta = {
  title: 'Drawer | UXKM Guide',
  activeNav: 'drawer',
  pageTitle: 'Drawer',
};

import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';
import Icon from '@/components/Icon.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import {
  drawerChildColumns,
  drawerChildren,
  drawerClassColumns,
  drawerClasses,
  drawerPropColumns,
  drawerProps,
  drawerTokenColumns,
  drawerTokens,
  markupCode,
} from '@/doc/data/drawer-api';

const basicCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function BasicExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="Drawer 열기"
        data-drawer-trigger="#drawer-basic"
        aria-controls="drawer-basic"
      />
      <Drawer
        id="drawer-basic"
        title="기본 Drawer"
        footer={
          <>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="확인"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>Drawer 패널 본문입니다.</p>
      </Drawer>
    </>
  );
}`;
const placementCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function PlacementExample() {
  return (
    <>
      <div className="drawer_demo-row">
        <Button
          variant="outline"
          label="왼쪽"
          data-drawer-trigger="#drawer-place-left"
          aria-controls="drawer-place-left"
        />
        <Button
          variant="outline"
          label="오른쪽"
          data-drawer-trigger="#drawer-place-right"
          aria-controls="drawer-place-right"
        />
      </div>
      <Drawer id="drawer-place-left" placement="left" title="왼쪽 패널">
        <p>화면 왼쪽에서 슬라이드됩니다.</p>
      </Drawer>
      <Drawer id="drawer-place-right" placement="right" title="오른쪽 패널">
        <p>기본 위치입니다.</p>
      </Drawer>
    </>
  );
}`;
const sizeCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function SizeExample() {
  return (
    <div className="drawer_demo-row">
      <Button
        variant="outline"
        size="sm"
        label="Small"
        data-drawer-trigger="#drawer-size-sm"
        aria-controls="drawer-size-sm"
      />
      <Button
        variant="outline"
        label="Default"
        data-drawer-trigger="#drawer-size-default"
        aria-controls="drawer-size-default"
      />
      <Button
        variant="outline"
        size="lg"
        label="Large"
        data-drawer-trigger="#drawer-size-lg"
        aria-controls="drawer-size-lg"
      />
    </div>
  );
}`;
const footerCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function FooterExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="항목 편집"
        data-drawer-trigger="#drawer-footer"
        aria-controls="drawer-footer"
      />
      <Drawer
        id="drawer-footer"
        title="항목 편집"
        footer={
          <>
            <Button variant="ghost" label="취소" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="저장"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>폼 본문</p>
      </Drawer>
    </>
  );
}`;
const footerAlignCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function FooterAlignExample() {
  return (
    <>
      <Drawer
        id="drawer-footer-start"
        title="좌측 정렬"
        placement="bottom"
        footerAlign="start"
        footer={/* … */}
      >
        <p>footerAlign="start"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-center"
        title="가운데 정렬"
        placement="bottom"
        footerAlign="center"
        footer={/* … */}
      >
        <p>footerAlign="center"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-end"
        title="우측 정렬"
        placement="bottom"
        footer={/* … */}
      >
        <p>footerAlign="end" (기본)</p>
      </Drawer>
      <Drawer
        id="drawer-footer-between"
        title="병합 정렬"
        placement="bottom"
        footerAlign="between"
        footer={/* … */}
      >
        <p>footerAlign="between" + drawer_footer-group</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even"
        title="균등 1:1"
        placement="bottom"
        footerAlign="even"
        footer={/* … */}
      >
        <p>footerAlign="even" · footerRatio="1-1"</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even-1-2"
        title="균등 1:2"
        placement="bottom"
        footerAlign="even"
        footerRatio="1-2"
        footer={/* … */}
      >
        <p>footerRatio="1-2" — 좌 1 / 우 2</p>
      </Drawer>
      <Drawer
        id="drawer-footer-even-2-1"
        title="균등 2:1"
        placement="bottom"
        footerAlign="even"
        footerRatio="2-1"
        footer={/* … */}
      >
        <p>footerRatio="2-1" — 좌 2 / 우 1</p>
      </Drawer>
      <Drawer
        id="drawer-footer-no-pad"
        title="하단 패딩 없음"
        placement="bottom"
        footerAlign="even"
        footerNoPadBottom
        footer={/* … */}
      >
        <p>footerNoPadBottom + even</p>
      </Drawer>
    </>
  );
}`;
const extraCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function ExtraExample() {
  return (
    <>
      <Button
        variant="outline"
        label="상세 보기"
        data-drawer-trigger="#drawer-extra"
        aria-controls="drawer-extra"
      />
      <Drawer
        id="drawer-extra"
        title="주문 #1042"
        extra={<span className="tag tag_solid color_success">완료</span>}
      >
        <p>상세 정보</p>
      </Drawer>
    </>
  );
}`;
const menuCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';
import Icon from '@/components/Icon.jsx';

export function MenuExample() {
  return (
    <>
      <Button
        variant="outline"
        iconOnly
        ariaLabel="메뉴 열기"
        data-drawer-trigger="#drawer-menu"
        aria-controls="drawer-menu"
        iconBefore={<Icon name="menu" />}
      />
      <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
        <p>메뉴 본문</p>
      </Drawer>
    </>
  );
}`;
const openOnLoadCode = `import Drawer from '@/components/Drawer.jsx';

export function OpenOnLoadExample() {
  return (
    <Drawer
      id="drawer-open-on-load"
      size="sm"
      title="자동 열기 옵션"
      openOnLoad
    >
      <p>페이지 로드 후 자동으로 열립니다.</p>
    </Drawer>
  );
}`;
const nestedCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function NestedExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="중첩 예시 열기"
        data-drawer-trigger="#drawer-nested-1"
        aria-controls="drawer-nested-1"
      />
      <Drawer id="drawer-nested-1" title="1단계 Drawer">
        <Button
          variant="outline"
          label="2단계 열기"
          data-drawer-trigger="#drawer-nested-2"
          aria-controls="drawer-nested-2"
        />
      </Drawer>
      <Drawer id="drawer-nested-2" size="sm" title="2단계 Drawer">
        <p>중첩된 Drawer입니다.</p>
      </Drawer>
    </>
  );
}`;
const dragSheetCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function DragSheetExample() {
  return (
    <>
      <Button
        variant="filled"
        color="primary"
        label="드래그 시트 열기"
        data-drawer-trigger="#drawer-drag"
        aria-controls="drawer-drag"
      />
      <Drawer
        id="drawer-drag"
        placement="bottom"
        draggable
        title="공유 · 액션"
        footer={
          <>
            <Button variant="ghost" label="닫기" data-drawer-close="" />
            <Button
              variant="filled"
              color="primary"
              label="공유"
              data-drawer-close=""
            />
          </>
        }
      >
        <p>
          상단 핸들이나 헤더를 위로 드래그하면 펼쳐지고, 아래로 드래그하면
          접히거나 닫힙니다.
        </p>
      </Drawer>
    </>
  );
}`;
const noBackdropCode = `import Button from '@/components/Button.jsx';
import Drawer from '@/components/Drawer.jsx';

export function NoBackdropExample() {
  return (
    <>
      <Button
        variant="ghost"
        label="백드롭 없이 열기"
        data-drawer-trigger="#drawer-no-backdrop"
        aria-controls="drawer-no-backdrop"
      />
      <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" noBackdrop>
        <p>본문을 가리지 않고 패널만 표시합니다.</p>
      </Drawer>
    </>
  );
}`;

export default function DrawerDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Drawer</h1>
        <p className="lead">
          화면 가장자리에서 슬라이드되어 나타나는 패널 컴포넌트입니다. 상세
          보기·폼·모바일 메뉴·필터·설정 등 보조 UI에 사용하며, 기본 위치는
          오른쪽(<code className="typo_code">drawer_placement-right</code>
          )입니다. 방향별 슬라이드·백드롭 페이드 애니메이션과{' '}
          <code className="typo_code">role=&quot;dialog&quot;</code> ·{' '}
          <code className="typo_code">aria-modal</code> 접근성을 제공합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
        code={basicCode}
      >
        <>
          <Button
            variant="filled"
            color="primary"
            label="Drawer 열기"
            data-drawer-trigger="#drawer-basic"
            aria-controls="drawer-basic"
          />
          <Drawer
            id="drawer-basic"
            title="기본 Drawer"
            footer={
              <>
                <Button variant="ghost" label="취소" data-drawer-close="" />
                <Button
                  variant="filled"
                  color="primary"
                  label="확인"
                  data-drawer-close=""
                />
              </>
            }
          >
            <p>
              Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에
              적합합니다.
            </p>
            <p>
              백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 패널을 닫을 수
              있습니다.
            </p>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="placement-heading"
        title="위치"
        description="drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."
        stack
        code={placementCode}
      >
        <>
          <div className="drawer_demo-row">
            <Button
              variant="outline"
              label="왼쪽"
              data-drawer-trigger="#drawer-place-left"
              aria-controls="drawer-place-left"
            />
            <Button
              variant="outline"
              label="오른쪽"
              data-drawer-trigger="#drawer-place-right"
              aria-controls="drawer-place-right"
            />
            <Button
              variant="outline"
              label="위"
              data-drawer-trigger="#drawer-place-top"
              aria-controls="drawer-place-top"
            />
            <Button
              variant="outline"
              label="아래"
              data-drawer-trigger="#drawer-place-bottom"
              aria-controls="drawer-place-bottom"
            />
          </div>
          <Drawer id="drawer-place-left" placement="left" title="왼쪽 패널">
            <p>화면 왼쪽에서 슬라이드됩니다.</p>
          </Drawer>
          <Drawer id="drawer-place-right" placement="right" title="오른쪽 패널">
            <p>기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.</p>
          </Drawer>
          <Drawer id="drawer-place-top" placement="top" title="상단 패널">
            <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
          </Drawer>
          <Drawer id="drawer-place-bottom" placement="bottom" title="하단 패널">
            <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="size-heading"
        title="크기"
        description="drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."
        code={sizeCode}
      >
        <>
          <div className="drawer_demo-row">
            <Button
              variant="outline"
              size="sm"
              label="Small"
              data-drawer-trigger="#drawer-size-sm"
              aria-controls="drawer-size-sm"
            />
            <Button
              variant="outline"
              label="Default"
              data-drawer-trigger="#drawer-size-default"
              aria-controls="drawer-size-default"
            />
            <Button
              variant="outline"
              size="lg"
              label="Large"
              data-drawer-trigger="#drawer-size-lg"
              aria-controls="drawer-size-lg"
            />
          </div>
          <Drawer id="drawer-size-sm" size="sm" title="Small">
            <p>
              <code className="typo_code">drawer_sm</code> — 좁은 보조 패널
            </p>
          </Drawer>
          <Drawer id="drawer-size-default" title="Default">
            <p>기본 너비 24rem</p>
          </Drawer>
          <Drawer id="drawer-size-lg" size="lg" title="Large">
            <p>
              <code className="typo_code">drawer_lg</code> — 넓은 상세·폼 패널
            </p>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="footer-heading"
        title="헤더·푸터"
        description="drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."
        code={footerCode}
      >
        <>
          <Button
            variant="filled"
            color="primary"
            label="항목 편집"
            data-drawer-trigger="#drawer-footer"
            aria-controls="drawer-footer"
          />
          <Drawer
            id="drawer-footer"
            title="항목 편집"
            footer={
              <>
                <Button variant="ghost" label="취소" data-drawer-close="" />
                <Button
                  variant="filled"
                  color="primary"
                  label="저장"
                  data-drawer-close=""
                />
              </>
            }
          >
            <div className="form_layout form_layout-vertical">
              <div className="form_field">
                <label className="form_field-label" htmlFor="drawer-item-name">
                  이름
                </label>
                <input
                  className="input"
                  type="text"
                  id="drawer-item-name"
                  placeholder="항목 이름"
                />
              </div>
              <div className="form_field">
                <label className="form_field-label" htmlFor="drawer-item-desc">
                  설명
                </label>
                <textarea
                  className="textarea"
                  id="drawer-item-desc"
                  rows={4}
                  placeholder="간단한 설명"
                />
              </div>
            </div>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="footer-align-heading"
        title="푸터 정렬"
        description="footerAlign으로 푸터 버튼을 정렬합니다. start · center · end(기본) · between(좌·우 병합) · even(균등). even은 footerRatio로 좌·우 비율(1-1 · 1-2 · 2-1)을 지정하고, footerNoPadBottom으로 하단 패딩을 제거할 수 있습니다. between은 drawer_footer-group으로 좌·우에 1~2개씩 묶습니다."
        code={footerAlignCode}
        stack
      >
        <div className="drawer_demo-stack">
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-start"
              title="좌측 정렬"
              placement="bottom"
              footerAlign="start"
              className="drawer_demo-static"
              footer={
                <>
                  <Button variant="ghost" label="취소" data-drawer-close="" />
                  <Button
                    variant="filled"
                    color="primary"
                    label="확인"
                    data-drawer-close=""
                  />
                </>
              }
            >
              <p>
                <code className="typo_code">footerAlign=&quot;start&quot;</code>
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-center"
              title="가운데 정렬"
              placement="bottom"
              footerAlign="center"
              className="drawer_demo-static"
              footer={
                <>
                  <Button variant="ghost" label="취소" data-drawer-close="" />
                  <Button
                    variant="filled"
                    color="primary"
                    label="확인"
                    data-drawer-close=""
                  />
                </>
              }
            >
              <p>
                <code className="typo_code">
                  footerAlign=&quot;center&quot;
                </code>
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-end"
              title="우측 정렬"
              placement="bottom"
              className="drawer_demo-static"
              footer={
                <>
                  <Button variant="ghost" label="취소" data-drawer-close="" />
                  <Button
                    variant="filled"
                    color="primary"
                    label="확인"
                    data-drawer-close=""
                  />
                </>
              }
            >
              <p>
                <code className="typo_code">footerAlign=&quot;end&quot;</code>{' '}
                (기본)
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-between"
              title="병합 정렬"
              placement="bottom"
              footerAlign="between"
              className="drawer_demo-static"
              footer={
                <>
                  <div className="drawer_footer-group">
                    <Button
                      variant="ghost"
                      color="danger"
                      label="삭제"
                      data-drawer-close=""
                    />
                  </div>
                  <div className="drawer_footer-group">
                    <Button variant="ghost" label="취소" data-drawer-close="" />
                    <Button
                      variant="filled"
                      color="primary"
                      label="확인"
                      data-drawer-close=""
                    />
                  </div>
                </>
              }
            >
              <p>
                <code className="typo_code">between</code> — 좌 1 / 우 2
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-between-2"
              title="병합 정렬"
              placement="bottom"
              footerAlign="between"
              className="drawer_demo-static"
              footer={
                <>
                  <div className="drawer_footer-group">
                    <Button
                      variant="ghost"
                      label="도움말"
                      data-drawer-close=""
                    />
                    <Button
                      variant="ghost"
                      color="danger"
                      label="삭제"
                      data-drawer-close=""
                    />
                  </div>
                  <div className="drawer_footer-group">
                    <Button
                      variant="filled"
                      color="primary"
                      label="확인"
                      data-drawer-close=""
                    />
                  </div>
                </>
              }
            >
              <p>
                <code className="typo_code">between</code> — 좌 2 / 우 1
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-even"
              title="균등 1:1"
              placement="bottom"
              footerAlign="even"
              className="drawer_demo-static"
              footer={
                <>
                  <Button variant="ghost" label="취소" data-drawer-close="" />
                  <Button
                    variant="filled"
                    color="primary"
                    label="확인"
                    data-drawer-close=""
                  />
                </>
              }
            >
              <p>
                <code className="typo_code">even</code> ·{' '}
                <code className="typo_code">footerRatio=&quot;1-1&quot;</code>
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-even-1-2"
              title="균등 1:2"
              placement="bottom"
              footerAlign="even"
              footerRatio="1-2"
              className="drawer_demo-static"
              footer={
                <>
                  <Button variant="ghost" label="취소" data-drawer-close="" />
                  <Button
                    variant="filled"
                    color="primary"
                    label="확인"
                    data-drawer-close=""
                  />
                </>
              }
            >
              <p>
                <code className="typo_code">footerRatio=&quot;1-2&quot;</code> —
                좌 1 / 우 2
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-even-2-1"
              title="균등 2:1"
              placement="bottom"
              footerAlign="even"
              footerRatio="2-1"
              className="drawer_demo-static"
              footer={
                <>
                  <Button variant="ghost" label="취소" data-drawer-close="" />
                  <Button
                    variant="filled"
                    color="primary"
                    label="확인"
                    data-drawer-close=""
                  />
                </>
              }
            >
              <p>
                <code className="typo_code">footerRatio=&quot;2-1&quot;</code> —
                좌 2 / 우 1
              </p>
            </Drawer>
          </div>
          <div className="drawer_demo-frame drawer_demo-frame-compact">
            <Drawer
              id="drawer-footer-no-pad"
              title="하단 패딩 없음"
              placement="bottom"
              footerAlign="even"
              footerNoPadBottom
              className="drawer_demo-static"
              footer={
                <>
                  <Button variant="ghost" label="취소" data-drawer-close="" />
                  <Button
                    variant="filled"
                    color="primary"
                    label="확인"
                    data-drawer-close=""
                  />
                </>
              }
            >
              <p>
                <code className="typo_code">footerNoPadBottom</code> + even
              </p>
            </Drawer>
          </div>
        </div>
      </DemoSection>
      <DemoSection
        headingId="extra-heading"
        title="헤더 추가 영역"
        description="drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."
        code={extraCode}
      >
        <>
          <Button
            variant="outline"
            label="상세 보기"
            data-drawer-trigger="#drawer-extra"
            aria-controls="drawer-extra"
          />
          <Drawer
            id="drawer-extra"
            title="주문 #1042"
            extra={<span className="tag tag_solid color_success">완료</span>}
          >
            <p>
              상세 정보·상태 뱃지 등을 헤더{' '}
              <code className="typo_code">drawer_extra</code>에 배치할 수
              있습니다.
            </p>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="menu-heading"
        title="메뉴"
        description="Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."
        code={menuCode}
      >
        <>
          <Button
            variant="outline"
            iconOnly
            ariaLabel="메뉴 열기"
            data-drawer-trigger="#drawer-menu"
            aria-controls="drawer-menu"
            iconBefore={<Icon name="menu" />}
          />
          <Drawer id="drawer-menu" placement="left" title="앱 메뉴">
            <nav
              className="menu menu_vertical menu_compact"
              aria-label="앱 메뉴"
            >
              <ul className="menu_list">
                <li className="menu_item">
                  <a
                    href="#dashboard"
                    className="menu_link is-active"
                    aria-current="page"
                  >
                    <span className="menu_label">대시보드</span>
                  </a>
                </li>
                <li className="menu_item">
                  <a href="#analytics" className="menu_link">
                    <span className="menu_label">분석</span>
                  </a>
                </li>
                <li className="menu_item">
                  <a href="#settings" className="menu_link">
                    <span className="menu_label">설정</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="open-on-load-heading"
        title="로드 시 자동 열기 (옵션)"
        description='data-drawer-open-on-load="true"를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다. (Docs에서는 미리보기를 가리지 않도록 수동 트리거로 확인합니다.)'
        code={openOnLoadCode}
      >
        <>
          <p className="form_field-hint">
            <code className="typo_code">openOnLoad</code> /{' '}
            <code className="typo_code">
              data-drawer-open-on-load=&quot;true&quot;
            </code>{' '}
            — 가이드 페이지에서 자동 열기를 확인할 수 있습니다.
          </p>
          <Button
            variant="outline"
            size="sm"
            label="옵션 패널 미리보기"
            data-drawer-trigger="#drawer-open-on-load"
            aria-controls="drawer-open-on-load"
          />
          <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션">
            <p>
              실서비스에서는 온보딩·공지 등에{' '}
              <code className="typo_code">openOnLoad</code>를 사용합니다.
            </p>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="nested-heading"
        title="중첩 Drawer"
        description="열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. 2단계가 열리면 1단계 백드롭은 숨겨지고, 2단계가 닫히면 다시 표시됩니다. Esc는 가장 위에 열린 패널부터 닫습니다."
        code={nestedCode}
      >
        <>
          <Button
            variant="ghost"
            label="중첩 예시 열기"
            data-drawer-trigger="#drawer-nested-1"
            aria-controls="drawer-nested-1"
          />
          <Drawer id="drawer-nested-1" title="1단계 Drawer">
            <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요.</p>
            <Button
              variant="outline"
              label="2단계 열기"
              data-drawer-trigger="#drawer-nested-2"
              aria-controls="drawer-nested-2"
            />
          </Drawer>
          <Drawer
            id="drawer-nested-2"
            size="sm"
            title="2단계 Drawer"
            footer={
              <Button
                variant="filled"
                color="primary"
                label="완료"
                data-drawer-close=""
              />
            }
          >
            <p>
              중첩된 Drawer입니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.
            </p>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="drag-sheet-heading"
        title="하단 드래그 시트"
        description='placement="bottom" + draggable로 핸들·헤더를 드래그합니다. 위로 끌면 펼치고, 아래로 끌면 접거나 닫습니다. 터치 슬라이드도 동일합니다.'
        code={dragSheetCode}
      >
        <>
          <p className="form_field-hint">
            핸들 또는 제목 영역을 위·아래로 드래그(터치 슬라이드)해 보세요.
          </p>
          <Button
            variant="filled"
            color="primary"
            label="드래그 시트 열기"
            data-drawer-trigger="#drawer-drag"
            aria-controls="drawer-drag"
          />
          <Drawer
            id="drawer-drag"
            placement="bottom"
            draggable
            title="공유 · 액션"
            footer={
              <>
                <Button variant="ghost" label="닫기" data-drawer-close="" />
                <Button
                  variant="filled"
                  color="primary"
                  label="공유"
                  data-drawer-close=""
                />
              </>
            }
          >
            <p>
              상단 핸들이나 헤더를 <strong>위로</strong> 드래그하면 시트가
              펼쳐집니다.
            </p>
            <p>
              <strong>아래로</strong> 드래그하면 기본 높이로 접히고, 더 내리면
              닫힙니다.
            </p>
            <ul>
              <li>링크 복사</li>
              <li>메시지 보내기</li>
              <li>다른 앱으로 공유</li>
            </ul>
          </Drawer>
        </>
      </DemoSection>
      <DemoSection
        headingId="no-backdrop-heading"
        title="백드롭 없음"
        description='data-drawer-backdrop="false"로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다.'
        code={noBackdropCode}
      >
        <>
          <Button
            variant="ghost"
            label="백드롭 없이 열기"
            data-drawer-trigger="#drawer-no-backdrop"
            aria-controls="drawer-no-backdrop"
          />
          <Drawer
            id="drawer-no-backdrop"
            size="sm"
            title="백드롭 없음"
            noBackdrop
          >
            <p>
              본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>
              로 닫으세요.
            </p>
          </Drawer>
        </>
      </DemoSection>

      <section className="section" aria-labelledby="usage-heading">
        <h2 id="usage-heading">마크업</h2>
        <p>
          트리거 버튼과 Drawer 루트를 <code className="typo_code">id</code> ·{' '}
          <code className="typo_code">aria-controls</code>로 연결합니다. 기본은
          닫힌 상태(<code className="typo_code">hidden</code>)이며, 클릭
          이벤트로 열립니다.
        </p>
        <GuideCodeBlock>{markupCode}</GuideCodeBlock>
      </section>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable
          columns={drawerPropColumns}
          rows={drawerProps}
          codeColumn="name"
        />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable
          columns={drawerChildColumns}
          rows={drawerChildren}
          codeColumn="name"
        />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable
          columns={drawerClassColumns}
          rows={drawerClasses}
          codeColumn="name"
        />
        <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
          닫기: 백드롭 · <code className="typo_code">data-drawer-close</code> ·{' '}
          <kbd>Esc</kbd>. 열기·닫기 시 방향별 슬라이드와 백드롭 페이드가
          적용됩니다. 중첩 시 <kbd>Esc</kbd>는 최상위 패널부터 닫습니다.
        </p>
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable
          columns={drawerTokenColumns}
          rows={drawerTokens}
          codeColumn="name"
        />
      </ApiSection>
    </>
  );
}

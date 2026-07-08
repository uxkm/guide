export const docMeta = {
  title: 'Drawer | HTML Components',
  activeNav: 'drawer',
  pageTitle: 'Drawer',
};

import Button from '@/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import Icon from '@/components/Icon.jsx';
import Drawer from '@/components/Drawer.jsx';
import {
  drawerClassColumns,
  drawerClasses,
  drawerPropColumns,
  drawerProps,
  drawerSlotColumns,
  drawerSlots,
  drawerTokenColumns,
  drawerTokens,
  markupCode,
} from '@/doc/data/drawer-api';

export default function DrawerDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Drawer</h1>
        <p className="lead">화면 가장자리에서 슬라이드되어 나타나는 패널 컴포넌트입니다. 상세 보기·폼·모바일 메뉴·필터·설정 등 보조 UI에 사용하며, 기본 위치는 오른쪽(<code className="typo_code">drawer_placement-right</code>)입니다. 방향별 슬라이드·백드롭 페이드 애니메이션과 <code className="typo_code">role="dialog"</code> · <code className="typo_code">aria-modal</code> 접근성을 제공합니다.</p>
      </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="data-drawer-trigger로 패널을 열고, 백드롭·닫기 버튼·Esc로 닫습니다."
        >
          <Button variant="filled" color="primary" label="Drawer 열기" dataDrawerTrigger="#drawer-basic" ariaControls="drawer-basic" />
        </DemoSection>

        <DemoSection
          headingId="placement-heading"
          title="위치"
          description="drawer_placement-left · -right · -top · -bottom으로 슬라이드 방향을 지정합니다. 상·하는 둥근 모서리·하단은 드래그 핸들이 표시됩니다."
          stack
        >
          <div className="drawer_demo-row">
            <Button variant="outline" label="왼쪽" dataDrawerTrigger="#drawer-place-left" ariaControls="drawer-place-left" />
            <Button variant="outline" label="오른쪽" dataDrawerTrigger="#drawer-place-right" ariaControls="drawer-place-right" />
            <Button variant="outline" label="위" dataDrawerTrigger="#drawer-place-top" ariaControls="drawer-place-top" />
            <Button variant="outline" label="아래" dataDrawerTrigger="#drawer-place-bottom" ariaControls="drawer-place-bottom" />
          </div>
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="drawer_sm · drawer_lg으로 패널 너비(또는 상·하 배치 시 높이)를 조정합니다."
        >
          <div className="drawer_demo-row">
            <Button variant="outline" size="sm" label="Small" dataDrawerTrigger="#drawer-size-sm" ariaControls="drawer-size-sm" />
            <Button variant="outline" label="Default" dataDrawerTrigger="#drawer-size-default" ariaControls="drawer-size-default" />
            <Button variant="outline" size="lg" label="Large" dataDrawerTrigger="#drawer-size-lg" ariaControls="drawer-size-lg" />
          </div>
        </DemoSection>

        <DemoSection
          headingId="footer-heading"
          title="헤더·푸터"
          description="drawer_header · drawer_body · drawer_footer로 영역을 나눕니다. 푸터에 저장·취소 등 액션 버튼을 배치합니다."
        >
          <Button variant="filled" color="primary" label="항목 편집" dataDrawerTrigger="#drawer-footer" ariaControls="drawer-footer" />
        </DemoSection>

        <DemoSection
          headingId="extra-heading"
          title="헤더 추가 영역"
          description="drawer_extra에 보조 액션·메타 정보를 배치합니다. 제목과 닫기 버튼 사이에 위치합니다."
        >
          <Button variant="outline" label="상세 보기" dataDrawerTrigger="#drawer-extra" ariaControls="drawer-extra" />
        </DemoSection>

        <DemoSection
          headingId="menu-heading"
          title="메뉴"
          description="Menu 컴포넌트와 조합해 모바일 내비게이션 패널을 구성합니다."
        >
          <Button variant="outline" iconOnly ariaLabel="메뉴 열기" dataDrawerTrigger="#drawer-menu" ariaControls="drawer-menu" iconBefore={(
              <>
              <Icon name="menu" />
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="open-on-load-heading"
          title="로드 시 자동 열기 (옵션)"
          description="data-drawer-open-on-load=&quot;true&quot;를 지정하면 페이지 로드 후 해당 Drawer를 자동으로 열 수 있습니다. 기본값은 비활성입니다."
        >
          <p className="form_field-hint">아래 예시는 옵션 동작 확인용입니다.</p>
        </DemoSection>

        <DemoSection
          headingId="nested-heading"
          title="중첩 Drawer"
          description="열린 Drawer 안에서 다른 Drawer를 열 수 있습니다. Esc는 가장 위에 열린 패널부터 닫습니다."
        >
          <Button variant="ghost" label="중첩 예시 열기" dataDrawerTrigger="#drawer-nested-1" ariaControls="drawer-nested-1" />
        </DemoSection>

        <DemoSection
          headingId="no-backdrop-heading"
          title="백드롭 없음"
          description="data-drawer-backdrop=&quot;false&quot;로 어두운 배경을 숨깁니다. 본문과 동시에 상호작용할 수 있습니다."
        >
          <Button variant="ghost" label="백드롭 없이 열기" dataDrawerTrigger="#drawer-no-backdrop" ariaControls="drawer-no-backdrop" />
        </DemoSection>


        <Drawer
          id="drawer-basic"
          title="기본 Drawer"
          footer={(
            <>
              <Button variant="ghost" label="취소" data-drawer-close />
              <Button variant="filled" color="primary" label="확인" data-drawer-close />
            </>
          )}
        >
          <p>Drawer 패널 본문입니다. 상세 정보·폼·설정 등 보조 작업에 적합합니다.</p>
          <p>백드롭을 클릭하거나 닫기 버튼, <kbd>Esc</kbd> 키로 패널을 닫을 수 있습니다.</p>
        </Drawer>


        <div className="drawer" id="drawer-place-left" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-left-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-left">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-place-left-title">왼쪽 패널</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p>화면 왼쪽에서 슬라이드됩니다.</p>
            </div>
          </div>
        </div>


        <div className="drawer" id="drawer-place-right" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-right-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-place-right-title">오른쪽 패널</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p>기본 위치입니다. 상세 보기·편집 폼에 자주 사용합니다.</p>
            </div>
          </div>
        </div>


        <div className="drawer" id="drawer-place-top" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-top-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-top">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-place-top-title">상단 패널</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p>검색·필터 바 등 상단에서 내려오는 패널입니다.</p>
            </div>
          </div>
        </div>


        <div className="drawer" id="drawer-place-bottom" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-place-bottom-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-bottom">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-place-bottom-title">하단 패널</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p>모바일 액션 시트·공유 패널 등에 적합합니다.</p>
            </div>
          </div>
        </div>


        <div className="drawer" id="drawer-size-sm" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-sm-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right drawer_sm">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-size-sm-title">Small</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p><code className="typo_code">drawer_sm</code> — 좁은 보조 패널</p>
            </div>
          </div>
        </div>

        <div className="drawer" id="drawer-size-default" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-default-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-size-default-title">Default</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p>기본 너비 24rem</p>
            </div>
          </div>
        </div>

        <div className="drawer" id="drawer-size-lg" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-size-lg-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right drawer_lg">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-size-lg-title">Large</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p><code className="typo_code">drawer_lg</code> — 넓은 상세·폼 패널</p>
            </div>
          </div>
        </div>


        <div className="drawer" id="drawer-footer" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-footer-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-footer-title">항목 편집</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <div className="form_layout form_layout-vertical">
                <div className="form_field">
                  <label className="form_field-label" htmlFor="drawer-item-name">이름</label>
                  <input className="input" type="text" id="drawer-item-name" placeholder="항목 이름" />
                </div>
                <div className="form_field">
                  <label className="form_field-label" htmlFor="drawer-item-desc">설명</label>
                  <textarea className="textarea" id="drawer-item-desc" rows="4" placeholder="간단한 설명"></textarea>
                </div>
                <div className="form_field">
                  <label className="form_field-label" htmlFor="drawer-item-status">상태</label>
                  <select className="input" id="drawer-item-status">
                    <option>활성</option>
                    <option>비활성</option>
                    <option>보관</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="drawer_footer">
              <button type="button" className="btn btn_ghost" data-drawer-close><span className="btn_label">취소</span></button>
              <button type="button" className="btn btn_filled color_primary" data-drawer-close><span className="btn_label">저장</span></button>
            </div>
          </div>
        </div>


        <div className="drawer" id="drawer-extra" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-extra-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-extra-title">주문 #1042</h2>
              <div className="drawer_extra">
                <span className="tag tag_filled color_success">완료</span>
              </div>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <dl className="stat stat_horizontal">
                <div className="stat_item">
                  <dt className="stat_label">주문일</dt>
                  <dd className="stat_value">2026-06-26</dd>
                </div>
                <div className="stat_item">
                  <dt className="stat_label">금액</dt>
                  <dd className="stat_value">₩128,000</dd>
                </div>
                <div className="stat_item">
                  <dt className="stat_label">결제</dt>
                  <dd className="stat_value">카드</dd>
                </div>
              </dl>
              <p>상세 정보·상태 뱃지 등을 헤더 <code className="typo_code">drawer_extra</code>에 배치할 수 있습니다.</p>
            </div>
          </div>
        </div>


        <div className="drawer" id="drawer-menu" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-menu-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-left">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-menu-title">앱 메뉴</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body" style={{ paddingTop: '0' }}>
              <nav className="menu menu_vertical menu_compact" aria-label="앱 메뉴">
                <ul className="menu_list">
                  <li className="menu_item">
                    <a href="#" onClick={(e) => e.preventDefault()} className="menu_link is-active" aria-current="page">
                      <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                      </svg>
                      <span className="menu_label">대시보드</span>
                    </a>
                  </li>
                  <li className="menu_item">
                    <a href="#" onClick={(e) => e.preventDefault()} className="menu_link">
                      <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                        <path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 6-10"/>
                      </svg>
                      <span className="menu_label">분석</span>
                    </a>
                  </li>
                  <li className="menu_item">
                    <a href="#" onClick={(e) => e.preventDefault()} className="menu_link">
                      <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      </svg>
                      <span className="menu_label">사용자</span>
                    </a>
                  </li>
                  <li className="menu_divider" role="separator"></li>
                  <li className="menu_item">
                    <a href="#" onClick={(e) => e.preventDefault()} className="menu_link">
                      <svg className="menu_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                      </svg>
                      <span className="menu_label">설정</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>


        <Drawer id="drawer-open-on-load" size="sm" title="자동 열기 옵션" openOnLoad>
          <p>이 패널은 <code className="typo_code">data-drawer-open-on-load="true"</code> 예시입니다.</p>
          <p>실서비스에서는 온보딩, 공지, 필수 확인 패널 등에 선택적으로 사용할 수 있습니다.</p>
        </Drawer>


        <div className="drawer" id="drawer-nested-1" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-nested-1-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-nested-1-title">1단계 Drawer</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p>다음 단계 Drawer를 열어 중첩 동작을 확인하세요.</p>
              <button type="button" className="btn btn_outline" data-drawer-trigger="#drawer-nested-2" aria-controls="drawer-nested-2" aria-expanded="false">
                <span className="btn_label">2단계 열기</span>
              </button>
            </div>
          </div>
        </div>

        <div className="drawer" id="drawer-nested-2" data-drawer role="dialog" aria-modal="true" aria-labelledby="drawer-nested-2-title" tabIndex={-1} hidden>
          <div className="drawer_backdrop" data-drawer-close aria-hidden={true}></div>
          <div className="drawer_panel drawer_placement-right drawer_sm">
            <div className="drawer_header">
              <h2 className="drawer_title" id="drawer-nested-2-title">2단계 Drawer</h2>
              <button type="button" className="drawer_close" data-drawer-close aria-label="닫기">
                <svg className="drawer_close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="drawer_body">
              <p>중첩된 Drawer입니다. <kbd>Esc</kbd>를 누르면 이 패널부터 닫힙니다.</p>
            </div>
            <div className="drawer_footer">
              <button type="button" className="btn btn_filled color_primary" data-drawer-close><span className="btn_label">완료</span></button>
            </div>
          </div>
        </div>


        <Drawer id="drawer-no-backdrop" size="sm" title="백드롭 없음" noBackdrop>
          <p>본문을 가리지 않고 패널만 표시합니다. 닫기 버튼이나 <kbd>Esc</kbd>로 닫으세요.</p>
        </Drawer>

        <section className="section" aria-labelledby="usage-heading">
          <h2 id="usage-heading">마크업</h2>
            <p>트리거 버튼과 Drawer 루트를 <code className="typo_code">id</code> · <code className="typo_code">aria-controls</code>로 연결합니다. 기본은 닫힌 상태(<code className="typo_code">hidden</code>)이며, 클릭 이벤트로 열립니다.</p>

            <GuideCodeBlock>{markupCode }</GuideCodeBlock>
        </section>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={drawerPropColumns} rows={drawerProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={drawerSlotColumns} rows={drawerSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={drawerClassColumns} rows={drawerClasses} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            닫기: 백드롭 · <code className="typo_code">data-drawer-close</code> · <kbd>Esc</kbd>.
            열기·닫기 시 방향별 슬라이드와 백드롭 페이드가 적용됩니다.
            중첩 시 <kbd>Esc</kbd>는 최상위 패널부터 닫습니다.
          </p>
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={drawerTokenColumns} rows={drawerTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}

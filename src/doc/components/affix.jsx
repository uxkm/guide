export const docMeta = {
  title: 'Affix | HTML Components',
  activeNav: 'affix',
  pageTitle: 'Affix',
};

import Affix from '@/components/Affix.jsx';
import Button from '@/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import {
  affixAttrColumns,
  affixAttrs,
  affixClassColumns,
  affixClasses,
  affixMarkup,
  affixMarkupColumns,
} from '@/doc/data/affix-api';

export default function AffixDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Affix</h1>
          <p className="lead">
            스크롤 시 지정한 위치에 요소를 고정하는 컴포넌트입니다. 툴바·앵커 내비게이션·액션 버튼 등에 사용하며,
            <code className="typo_code">data-target</code>으로 스크롤 컨테이너를 지정할 수 있습니다.
          </p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="data-affix와 data-target으로 스크롤 영역을 연결합니다. 영역을 스크롤하면 .affix_target이 상단에 고정됩니다."
        >
          <div className="affix_demo-narrow">
            <div id="affix-scroll-basic" className="affix_demo-scroll">
              <div className="affix_demo-content">
                <p>주문 상세 페이지입니다. 아래로 스크롤하면 액션 바가 상단에 고정됩니다.</p>
                <p>배송지: 서울특별시 강남구 테헤란로 123, 4층</p>
                <p>결제 수단: 신용카드 (일시불) · 주문 금액 ₩42,000</p>

                <Affix target="#affix-scroll-basic" skin="bar">
                  <span className="affix_bar-label">주문 #ORD-2024-0815</span>
                  <div className="affix_bar-actions">
                    <Button variant="outline" size="sm" label="취소" />
                    <Button variant="filled" color="primary" size="sm" label="결제" />
                  </div>
                </Affix>

                <p>상품명: 무선 이어폰 Pro · 수량 1 · ₩39,000</p>
                <p>배송비: ₩3,000 · 예상 도착: 2~3 영업일</p>
                <p>요청 사항: 부재 시 경비실에 맡겨 주세요.</p>
                <p>교환·반품은 수령 후 7일 이내 마이페이지에서 신청할 수 있습니다.</p>
                <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
              </div>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          headingId="offset-heading"
          title="상단 오프셋"
          description="data-offset-top으로 뷰포트(또는 컨테이너) 상단과의 간격을 지정합니다. 고정 헤더 아래에 붙일 때 사용합니다."
        >
          <div className="affix_demo-narrow">
            <div id="affix-scroll-offset" className="affix_demo-scroll">
              <div className="affix_demo-content">
                <p>문서 편집 화면입니다. 스크롤 시 포맷 툴바가 상단에서 12px 떨어진 위치에 고정됩니다.</p>
                <p>제목: 2024년 3분기 실적 보고서</p>
                <p>작성자: 기획팀 · 최종 수정: 2024-08-15</p>

                <Affix target="#affix-scroll-offset" offsetTop={12} skin="bar">
                    <Button variant="ghost" size="sm" iconOnly ariaLabel="굵게" iconBefore={(
              <>
              <svg
                                  className="icon"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  aria-hidden={true}
                                >
                                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                                  <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                                </svg>
              </>
            )} />
                    <Button variant="ghost" size="sm" iconOnly ariaLabel="기울임" iconBefore={(
              <>
              <svg
                                  className="icon"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  aria-hidden={true}
                                >
                                  <path d="M19 4h-9M14 20H5M15 4 9 20" />
                                </svg>
              </>
            )} />
                    <Button variant="ghost" size="sm" iconOnly ariaLabel="밑줄" iconBefore={(
              <>
              <svg
                                  className="icon"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  aria-hidden={true}
                                >
                                  <path d="M6 3v7a6 6 0 0 0 12 0V3" />
                                  <path d="M4 21h16" />
                                </svg>
              </>
            )} />
                    <span
                      className="affix_bar-label"
                      style={{ fontWeight: '400', color: 'var(--color-text-muted)' }}
                    >
                      서식
                    </span>
                </Affix>

                <p>1. 개요 — 본 보고서는 2024년 3분기 매출·비용·이익 현황을 요약합니다.</p>
                <p>2. 매출 — 전년 동기 대비 12% 증가, 신규 고객 유입이 주요 성장 동력입니다.</p>
                <p>3. 비용 — 마케팅 비용이 전분기 대비 8% 상승했습니다.</p>
                <p>4. 전망 — 4분기 시즌 효과로 완만한 성장이 예상됩니다.</p>
                <p>5. 부록 — 상세 표·차트는 별첨 자료를 참고하세요.</p>
              </div>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          headingId="anchor-heading"
          title="앵커 내비게이션"
          description="affix_anchor 스킨으로 섹션 앵커 링크를 고정합니다. 긴 문서·설정 페이지의 목차에 적합합니다."
        >
          <div className="affix_demo-narrow">
            <div id="affix-scroll-anchor" className="affix_demo-scroll">
              <div className="affix_demo-content">
                <p>설정 페이지입니다. 아래 목차가 스크롤 시 상단에 고정됩니다.</p>

                <Affix target="#affix-scroll-anchor" skin="anchor">
                  <nav aria-label="설정 섹션">
                    <a href="#affix-sec-profile" className="link color_primary">프로필</a>
                    <a href="#affix-sec-security" className="link">보안</a>
                    <a href="#affix-sec-notify" className="link">알림</a>
                    <a href="#affix-sec-billing" className="link">결제</a>
                  </nav>
                </Affix>

                <p id="affix-sec-profile"><strong>프로필</strong> — 이름, 아바타, 소개 문구를 수정합니다.</p>
                <p id="affix-sec-security"><strong>보안</strong> — 비밀번호 변경과 2단계 인증을 설정합니다.</p>
                <p id="affix-sec-notify"><strong>알림</strong> — 이메일·푸시·SMS 수신 여부를 관리합니다.</p>
                <p id="affix-sec-billing"><strong>결제</strong> — 등록된 카드와 청구 내역을 확인합니다.</p>
                <p>모든 변경 사항은 저장 버튼을 눌러야 반영됩니다.</p>
              </div>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          headingId="bottom-heading"
          title="하단 고정"
          description="data-offset-bottom을 지정하면 요소가 컨테이너 하단에 고정됩니다. 모바일 하단 액션 바에 활용합니다."
        >
          <div className="affix_demo-narrow">
            <div id="affix-scroll-bottom" className="affix_demo-scroll">
              <div className="affix_demo-content">
                <p>장바구니입니다. 스크롤해도 결제 버튼이 하단에 고정됩니다.</p>
                <p>무선 이어폰 Pro × 1 — ₩39,000</p>
                <p>USB-C 케이블 × 2 — ₩12,000</p>
                <p>보조배터리 10,000mAh × 1 — ₩29,000</p>
                <p>배송비 — ₩3,000</p>
                <p>쿠폰 할인 — −₩5,000</p>

                <Affix target="#affix-scroll-bottom" offsetBottom={0} skin="bar">
                  <span className="affix_bar-label">합계 ₩78,000</span>
                  <div className="affix_bar-actions">
                    <Button
                      variant="filled"
                      color="primary"
                      block
                      label="결제하기"
                      style={{ minWidth: '7rem' }}
                    />
                  </div>
                </Affix>

                <p>결제 수단은 다음 단계에서 선택합니다.</p>
                <p>적립 예정 포인트: 780P</p>
              </div>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          headingId="window-heading"
          title="페이지 스크롤"
          description="data-target을 생략하면 window 스크롤을 기준으로 동작합니다. 이 섹션 아래로 페이지를 스크롤하면 배너가 상단에 고정됩니다."
        >
          <div className="affix_demo-narrow">
            <p
              style={{ margin: '0 0 var(--space-md)', fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)' }}
            >
              아래 배너가 페이지 스크롤 시 상단(오프셋 64px)에 고정됩니다. 가이드 헤더 높이를 고려한 예시입니다.
            </p>

            <Affix
              offsetTop={64}
              skin="bar"
              style={{ '--affix-target-bg': 'color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))' }}
            >
              <span className="affix_bar-label" style={{ color: 'var(--color-accent-text)' }}>
                🎉 신규 컴포넌트 가이드가 업데이트되었습니다
              </span>
              <div className="affix_bar-actions">
                <Button
                  tag="a"
                  href="/getting-started"
                  variant="filled"
                  color="primary"
                  size="sm"
                  label="시작하기"
                />
              </div>
            </Affix>

            <p
              style={{ margin: 'var(--space-md) 0 0', fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)' }}
            >
              페이지를 계속 스크롤하여 고정·해제 동작을 확인하세요.
            </p>
          </div>
        </DemoSection>

        <ApiSection headingId="api-attrs-heading" title="API · Data Attributes">
          <ApiTable columns={affixAttrColumns} rows={affixAttrs} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            Affix는 HTML 마크업 + JS 초기화 방식입니다. Vue 앱에서는 문서 로드 시
            <code className="typo_code">initAffixAll</code>이
            <code className="typo_code">[data-affix]</code> 요소를 자동 초기화합니다.
          </p>
        </ApiSection>

        <ApiSection headingId="api-markup-heading" title="API · 마크업 구조">
          <ApiTable columns={affixMarkupColumns} rows={affixMarkup} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 스킨"
          description="OOCSS 구조 클래스와 스킨 클래스입니다. affix_bar-actions 안의 버튼은 Button 컴포넌트로 조합합니다."
        >
          <ApiTable columns={affixClassColumns} rows={affixClasses} codeColumn="name" />
        </ApiSection>
    </>
  );
}

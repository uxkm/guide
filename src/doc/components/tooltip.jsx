export const docMeta = {
  title: 'Tooltip | HTML Components',
  activeNav: 'tooltip',
  pageTitle: 'Tooltip',
};

import Button from '@/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import Icon from '@/components/Icon.jsx';
import Link from '@/components/Link.jsx';
import Tooltip from '@/components/Tooltip.jsx';
import {
  tooltipClassColumns,
  tooltipClasses,
  tooltipPropColumns,
  tooltipProps,
  tooltipSlotColumns,
  tooltipSlots,
  tooltipTokenColumns,
  tooltipTokens,
  markupCode,
} from '@/doc/data/tooltip-api';

export default function TooltipDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Tooltip</h1>
        <p className="lead">호버·포커스 시 트리거 근처에 짧은 설명을 띄우는 Tooltip 컴포넌트입니다. 용어 정의·아이콘 버튼 보조 설명·비활성 요소 이유 안내 등에 사용하며, <code className="typo_code">role="tooltip"</code> · <code className="typo_code">aria-describedby</code>로 접근성을 보장합니다.</p>
      </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="Tooltip과 #trigger 슬롯으로 트리거와 말풍선을 구성합니다. content prop으로 텍스트를 넣고, 호버·포커스 시 tooltip_bubble이 표시됩니다. data-tooltip · aria-describedby로 JS·접근성을 연동합니다."
        >
          <Tooltip content="짧은 도움말 텍스트입니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="outline" label="마우스 오버" />
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="slot-heading"
          title="슬롯"
          description="content prop 대신 default 슬롯으로 말풍선 텍스트를 넣을 수 있습니다. tooltip_bubble 안에 직접 본문을 배치합니다."
        >
          <Tooltip trigger={(
              <>
              <Button className="tooltip_trigger" variant="outline" label="슬롯 예시" />
              </>
            )}>
      짧은 도움말 텍스트입니다.
      </Tooltip>
        </DemoSection>

        <DemoSection
          headingId="open-heading"
          title="열린 상태"
          description="open prop과 is-open 클래스로 말풍선이 표시된 상태를 정적으로 표현합니다."
        >
          <Tooltip open content="정적 데모용 열린 상태입니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="filled" color="primary" label="열림" />
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="size prop(sm · md · lg)으로 패딩·글자 크기·최대 너비를 조절합니다. tooltip_sm · tooltip_lg 클래스와 대응됩니다."
        >
          <Tooltip size="sm" content="작은 말풍선" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="Small" />
              </>
            )} />

          <Tooltip content="기본 크기 말풍선" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="Medium" />
              </>
            )} />

          <Tooltip size="lg" content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="lg" label="Large" />
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="offset-heading"
          title="간격"
          description="offset prop(none · sm · md · lg)으로 전 방향 간격을, offset-top · offset-right · offset-bottom · offset-left로 방향별 간격을 조절합니다. 배치에 따라 해당 방향 토큰이 트리거↔말풍선 사이에 적용됩니다."
          stack
        >
          <p className="form_field-hint" style={{ marginBottom: 'var(--space-md)' }}>전 방향 동일</p>
          <div className="tooltip_row">
            <Tooltip offset="none" content="간격 없음" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="none" />
              </>
            )} />

            <Tooltip offset="sm" content="좁은 간격" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="sm" />
              </>
            )} />

            <Tooltip content="기본 간격" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="md" />
              </>
            )} />

            <Tooltip offset="lg" content="넓은 간격" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="lg" />
              </>
            )} />
          </div>

          <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>방향별 (offset-* · placement)</p>
          <div className="tooltip_demo-placement" style={{ minHeight: '12rem' }}>
            <div className="tooltip_demo-placement-cell-top">
              <Tooltip placement="top" offsetTop="lg" content="위쪽 간격" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="위" />
              </>
            )} />
            </div>

            <div className="tooltip_demo-placement-cell-left">
              <Tooltip placement="left" offsetLeft="lg" content="왼쪽 간격" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="왼쪽" />
              </>
            )} />
            </div>

            <div className="tooltip_demo-placement-cell-center">
              <Tooltip offsetBottom="lg" content="아래쪽 간격" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="아래" />
              </>
            )} />
            </div>

            <div className="tooltip_demo-placement-cell-right">
              <Tooltip placement="right" offsetRight="lg" content="오른쪽 간격" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="오른쪽" />
              </>
            )} />
            </div>
          </div>
        </DemoSection>

        <DemoSection
          headingId="inline-heading"
          title="인라인"
          description="문장 안의 링크·텍스트에 Tooltip을 붙여 용어를 설명할 수 있습니다."
        >
          <p>
            결제 시
            <Tooltip content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다." trigger={(
              <>
              <Link className="tooltip_trigger" label="에스크로" />
              </>
            )} />
            서비스를 이용할 수 있습니다.
          </p>
        </DemoSection>

        <DemoSection
          headingId="trigger-heading"
          title="트리거 유형"
          description="Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."
          stack
        >
          <div className="tooltip_row">
            <Tooltip content="버튼 트리거 예시입니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="filled" color="primary" label="Button" />
              </>
            )} />

            <Tooltip content="링크 스타일 트리거입니다." trigger={(
              <>
              <Link className="tooltip_trigger" label="Link 트리거" />
              </>
            )} />

            <Tooltip content="아이콘 전용 트리거입니다." trigger={(
              <>
                <Button
                  className="tooltip_trigger"
                  variant="ghost"
                  iconOnly
                  ariaLabel="정보"
                  iconBefore={(
                    <>
                      <Icon name="info" />
                    </>
                  )}
                />
              </>
            )} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="click-heading"
          title="클릭 트리거"
          description="trigger=&quot;click&quot;으로 클릭 시 말풍선을 토글합니다. data-tooltip-trigger=&quot;click&quot;과 동일하며, 접근성을 위해 tooltip_close 닫기 버튼이 기본 제공됩니다."
        >
          <Tooltip trigger="click" content="클릭으로 열고 닫는 Tooltip입니다.">
            <Button className="tooltip_trigger" variant="outline" label="클릭하여 보기" />
          </Tooltip>
        </DemoSection>

        <DemoSection
          headingId="placement-heading"
          title="배치"
          description="placement prop(top · top-start · top-end · start · end · left · right)으로 말풍선 위치를 조정합니다. tooltip_placement-* 클래스와 대응되며, 기본은 트리거 아래·가운데 정렬입니다."
          stack
        >
          <div className="tooltip_demo-placement">
            <div className="tooltip_demo-placement-cell-top">
              <Tooltip placement="top" content="트리거 위" trigger={(
              <>
              <Button className="tooltip_trigger" variant="outline" size="sm" label="위" />
              </>
            )} />
            </div>

            <div className="tooltip_demo-placement-cell-left">
              <Tooltip placement="left" content="트리거 왼쪽" trigger={(
              <>
              <Button className="tooltip_trigger" variant="outline" size="sm" label="왼쪽" />
              </>
            )} />
            </div>

            <div className="tooltip_demo-placement-cell-center">
              <Tooltip content="트리거 아래 · 가운데" trigger={(
              <>
              <Button className="tooltip_trigger" variant="outline" size="sm" label="아래" />
              </>
            )} />
            </div>

            <div className="tooltip_demo-placement-cell-right">
              <Tooltip placement="right" content="트리거 오른쪽" trigger={(
              <>
              <Button className="tooltip_trigger" variant="outline" size="sm" label="오른쪽" />
              </>
            )} />
            </div>
          </div>

          <div className="tooltip_row" style={{ width: '100%', justifyContent: 'space-between' }}>
            <Tooltip placement="top-start" content="위쪽 왼쪽 정렬" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="위 · 왼쪽" />
              </>
            )} />

            <Tooltip placement="start" content="아래쪽 왼쪽 정렬" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="아래 · 왼쪽" />
              </>
            )} />

            <Tooltip placement="end" content="아래쪽 오른쪽 정렬" trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="아래 · 오른쪽" />
              </>
            )} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="inverse-heading"
          title="역색"
          description="inverse prop으로 어두운 배경의 말풍선을 표시합니다. tooltip_inverse 클래스와 대응됩니다."
        >
          <Tooltip inverse content="어두운 배경의 말풍선입니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="역색 Tooltip" />
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="disabled-heading"
          title="비활성 트리거"
          description="비활성 버튼은 tooltip_trigger span으로 감싸 pointer-events가 막힌 요소에도 설명을 제공합니다."
        >
          <Tooltip content="필수 항목을 모두 입력해야 제출할 수 있습니다." trigger={(
              <>
              <span className="tooltip_trigger" tabIndex={0}>
                        <Button variant="filled" color="primary" label="제출 불가" disabled />
                      </span>
              </>
            )} />
        </DemoSection>

        <DemoSection
          headingId="arrow-anchor-heading"
          title="화살표 기준"
          description="arrow-anchor(content · target · mixed)와 panel-align(start · center · end), arrow-target-align으로 말풍선·화살표를 독립 조합합니다. target은 말풍선 CSS·화살표 JS, mixed는 말풍선·화살표 모두 JS로 트리거 기준 배치합니다."
          stack
        >
          <p className="form_field-hint" style={{ marginBottom: 'var(--space-md)' }}>기준 비교</p>
          <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
            <Tooltip content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />

            <Tooltip arrowAnchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
          </div>

          <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>target — 좌 · 가운데 · 우 (아래 배치)</p>
          <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
            <Tooltip arrowAnchor="target" arrowTargetAlign="left" content="트리거 왼쪽을 가리킵니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />

            <Tooltip arrowAnchor="target" content="트리거 가운데를 가리킵니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />

            <Tooltip arrowAnchor="target" arrowTargetAlign="right" content="트리거 오른쪽을 가리킵니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
          </div>

          <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>target — 위 · 가운데 · 아래 (왼쪽 배치)</p>
          <div className="tooltip_row" style={{ alignItems: 'center' }}>
            <Tooltip placement="left" arrowAnchor="target" arrowTargetAlign="top" content="트리거 위쪽을 가리킵니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="트리거" />
              </>
            )} />

            <Tooltip placement="left" arrowAnchor="target" content="트리거 가운데를 가리킵니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="트리거" />
              </>
            )} />

            <Tooltip placement="left" arrowAnchor="target" arrowTargetAlign="bottom" content="트리거 아래쪽을 가리킵니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="트리거" />
              </>
            )} />
          </div>

          <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>mixed — 말풍선 가운데 · 화살표 좌 · 가운데 · 우</p>
          <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
            <Tooltip arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="left" content="말풍선 가운데, 화살표 왼쪽." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
            <Tooltip arrowAnchor="mixed" panelAlign="center" content="말풍선·화살표 모두 가운데." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
            <Tooltip arrowAnchor="mixed" panelAlign="center" arrowTargetAlign="right" content="말풍선 가운데, 화살표 오른쪽." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
          </div>

          <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>mixed — 말풍선 왼쪽 · 화살표 조합</p>
          <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
            <Tooltip arrowAnchor="mixed" panelAlign="start" arrowTargetAlign="left" content="말풍선 왼쪽, 화살표 왼쪽." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
            <Tooltip arrowAnchor="mixed" panelAlign="start" content="말풍선 왼쪽, 화살표 가운데." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
            <Tooltip arrowAnchor="mixed" panelAlign="start" arrowTargetAlign="right" content="말풍선 왼쪽, 화살표 오른쪽." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
          </div>

          <p className="form_field-hint" style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}>mixed — 말풍선 오른쪽 · 화살표 조합</p>
          <div className="tooltip_row" style={{ alignItems: 'flex-start' }}>
            <Tooltip arrowAnchor="mixed" panelAlign="end" arrowTargetAlign="left" content="말풍선 오른쪽, 화살표 왼쪽." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
            <Tooltip arrowAnchor="mixed" panelAlign="end" content="말풍선 오른쪽, 화살표 가운데." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
            <Tooltip arrowAnchor="mixed" panelAlign="end" arrowTargetAlign="right" content="말풍선 오른쪽, 화살표 오른쪽." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" size="sm" label="S" />
              </>
            )} />
          </div>
        </DemoSection>

        <DemoSection
          headingId="no-arrow-heading"
          title="화살표 없음"
          description="no-arrow prop으로 tooltip_arrow를 숨깁니다. tooltip_no-arrow 클래스와 대응됩니다."
        >
          <Tooltip noArrow content="화살표가 표시되지 않는 말풍선입니다." trigger={(
              <>
              <Button className="tooltip_trigger" variant="ghost" label="화살표 없음" />
              </>
            )} />
        </DemoSection>

        <section className="section" aria-labelledby="usage-heading">
          <h2 id="usage-heading">마크업</h2>
            <p>Tooltip 컴포넌트로 트리거와 말풍선을 감쌉니다. content prop 또는 default 슬롯으로 텍스트를 넣고, trigger · placement · inverse prop과 #trigger 슬롯으로 데모와 동일하게 구성할 수 있습니다.</p>

            <GuideCodeBlock>{markupCode }</GuideCodeBlock>
        </section>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={tooltipPropColumns} rows={tooltipProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Slots">
          <ApiTable columns={tooltipSlotColumns} rows={tooltipSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={tooltipClassColumns} rows={tooltipClasses} codeColumn="name" />
          <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
            닫기: tooltip_close · 바깥 클릭 · data-tooltip-close · Esc.
            클릭 트리거는 말풍선 우측 상단에 닫기 버튼이 기본 제공됩니다.
          </p>
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={tooltipTokenColumns} rows={tooltipTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}

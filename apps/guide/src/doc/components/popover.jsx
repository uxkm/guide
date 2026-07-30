export const docMeta = {
  title: 'Popover | UXKM Guide',
  activeNav: 'popover',
  pageTitle: 'Popover',
};

import Button from '@uxkm/ui-react/components/Button.jsx';
import Icon from '@uxkm/ui-react/components/Icon.jsx';
import Link from '@uxkm/ui-react/components/Link.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';
import Textarea from '@uxkm/ui-react/components/Textarea.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import {
  popoverChildColumns,
  popoverChildren,
  popoverClassColumns,
  popoverClasses,
  popoverPropColumns,
  popoverProps,
  popoverTokenColumns,
  popoverTokens,
  markupCode,
} from '@/doc/data/popover-api';

const basicCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function BasicExample() {
  return (
    <Popover
      panelLabel="안내"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          label="Popover 열기"
          aria-haspopup="dialog"
        />
      }
    >
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Popover>
  );
}`;
const noLabelCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function NoLabelExample() {
  return (
    <Popover
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          label="라벨 없음"
          aria-haspopup="dialog"
        />
      }
    >
      <p>짧은 안내 문구만 필요할 때 사용합니다.</p>
    </Popover>
  );
}`;
const openCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function OpenExample() {
  return (
    <Popover
      open
      panelLabel="열린 Popover"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="filled"
          color="primary"
          label="열림"
          aria-haspopup="dialog"
          aria-expanded="true"
        />
      }
    >
      <p>정적 데모용 열린 상태입니다.</p>
    </Popover>
  );
}`;
const sizeCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function SizeExample() {
  return (
    <Popover
      size="sm"
      panelLabel="작은 Popover"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          size="sm"
          label="Small"
          aria-haspopup="dialog"
          aria-expanded="false"
        />
      }
    >
      <p>작은 패널입니다.</p>
    </Popover>
  );
}`;
const offsetCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function OffsetExample() {
  return (
    <Popover
      offset="lg"
      panelLabel="lg"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          size="sm"
          label="lg"
          aria-haspopup="dialog"
          aria-expanded="false"
        />
      }
    >
      <p>넓은 간격</p>
    </Popover>
  );
}`;
const titleCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function TitleExample() {
  return (
    <Popover
      title="배송 안내"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="ghost"
          label="도움말"
          aria-haspopup="dialog"
        />
      }
    >
      <p>평일 오후 2시 이전 주문은 당일 출고됩니다.</p>
    </Popover>
  );
}`;
const footerCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function FooterExample() {
  return (
    <Popover
      title="항목 삭제"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          label="삭제 확인"
          aria-haspopup="dialog"
        />
      }
      footer={
        <>
          <Button
            variant="ghost"
            size="sm"
            label="취소"
            data-popover-close=""
          />
          <Button
            variant="filled"
            color="danger"
            size="sm"
            label="삭제"
            data-popover-close=""
          />
        </>
      }
    >
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
    </Popover>
  );
}`;
const hoverCode = `import Link from '@uxkm/ui-react/components/Link.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function HoverExample() {
  return (
    <p>
      결제 시{' '}
      <Popover
        trigger="hover"
        panelLabel="에스크로 설명"
        triggerContent={
          <Link
            className="popover_trigger"
            label="에스크로"
            aria-haspopup="dialog"
          />
        }
      >
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제
        방식입니다.
      </Popover>{' '}
      서비스를 이용할 수 있습니다.
    </p>
  );
}`;
const triggerCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function TriggerExample() {
  return (
    <Popover
      panelLabel="Button 트리거"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="filled"
          color="primary"
          label="Button"
          aria-haspopup="dialog"
        />
      }
    >
      <p>버튼 트리거 예시입니다.</p>
    </Popover>
  );
}`;
const placementCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function PlacementExample() {
  return (
    <Popover
      placement="top-center"
      panelLabel="위쪽 가운데 배치"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          size="sm"
          label="위"
          aria-haspopup="dialog"
        />
      }
    >
      <p>트리거 위 · 가운데</p>
    </Popover>
  );
}`;
const formCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';
import Textarea from '@uxkm/ui-react/components/Textarea.jsx';

export function FormExample() {
  return (
    <Popover
      title="빠른 메모"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          label="메모 추가"
          aria-haspopup="dialog"
        />
      }
      footer={
        <>
          <Button
            variant="ghost"
            size="sm"
            label="취소"
            data-popover-close=""
          />
          <Button
            variant="filled"
            color="primary"
            size="sm"
            label="저장"
            data-popover-close=""
          />
        </>
      }
    >
      <div className="form_field">
        <label className="form_label" htmlFor="popover-memo-input">
          내용
        </label>
        <Textarea
          id="popover-memo-input"
          rows={3}
          placeholder="메모를 입력하세요"
        />
      </div>
    </Popover>
  );
}`;
const arrowAnchorCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function ArrowAnchorExample() {
  return (
    <Popover
      arrowAnchor="target"
      panelLabel="target"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="outline"
          size="sm"
          label="S"
          aria-haspopup="dialog"
          aria-expanded="false"
        />
      }
    >
      <p>화살표가 트리거 중앙을 가리킵니다.</p>
    </Popover>
  );
}`;
const noArrowCode = `import Button from '@uxkm/ui-react/components/Button.jsx';
import Popover from '@uxkm/ui-react/components/Popover.jsx';

export function NoArrowExample() {
  return (
    <Popover
      noArrow
      panelLabel="화살표 없는 Popover"
      triggerContent={
        <Button
          className="popover_trigger"
          variant="ghost"
          label="화살표 없음"
          aria-haspopup="dialog"
        />
      }
    >
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Popover>
  );
}`;

export default function PopoverDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Popover</h1>
        <p className="lead">
          클릭·호버로 트리거 옆에 떠 있는 정보 패널 컴포넌트입니다. 짧은
          설명·확인·간단한 폼 등 Dropdown보다 풍부한 콘텐츠를 표시할 때
          사용하며,
          <code className="typo_code">aria-haspopup=&quot;dialog&quot;</code> ·
          <code className="typo_code">role=&quot;dialog&quot;</code>로 접근성을
          보장합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="Popover와 triggerContent로 트리거와 패널을 구성합니다. panelLabel을 지정하면 popover_header에 제목이 표시되고, 클릭 시 패널이 열립니다. 바깥 클릭 · popover_close · Esc로 닫을 수 있습니다."
        code={basicCode}
      >
        <Popover
          panelLabel="안내"
          triggerContent={
            <Button
              className="popover_trigger"
              variant="outline"
              label="Popover 열기"
              aria-haspopup="dialog"
            />
          }
        >
          <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
        </Popover>
      </DemoSection>
      <DemoSection
        headingId="no-label-heading"
        title="라벨 없음"
        description="panelLabel을 생략하면 popover_header 없이 popover_body만 표시됩니다. popover_close-floating이 패널 우측 상단에 배치되고, 본문은 상단부터 시작합니다."
        code={noLabelCode}
      >
        <Popover
          triggerContent={
            <Button
              className="popover_trigger"
              variant="outline"
              label="라벨 없음"
              aria-haspopup="dialog"
            />
          }
        >
          <p>
            짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로
            표시됩니다.
          </p>
        </Popover>
      </DemoSection>
      <DemoSection
        headingId="open-heading"
        title="열린 상태"
        description='open prop과 is-open 클래스로 패널이 열린 상태를 표현합니다. 트리거에는 aria-expanded="true"를 함께 지정합니다.'
        code={openCode}
      >
        <Popover
          open
          panelLabel="열린 Popover"
          triggerContent={
            <Button
              className="popover_trigger"
              variant="filled"
              color="primary"
              label="열림"
              aria-haspopup="dialog"
              aria-expanded="true"
            />
          }
        >
          <p>정적 데모용 열린 상태입니다.</p>
        </Popover>
      </DemoSection>
      <DemoSection
        headingId="size-heading"
        title="크기"
        description="size prop(sm · md · lg)으로 패딩·글자 크기·패널 너비를 조절합니다. OOCSS 클래스 popover_sm · popover_lg와 대응됩니다."
        code={sizeCode}
      >
        <div className="popover_row" style={{ alignItems: 'flex-start' }}>
          <Popover
            size="sm"
            panelLabel="작은 Popover"
            triggerContent={
              <Button
                className="popover_trigger"
                variant="outline"
                size="sm"
                label="Small"
                aria-haspopup="dialog"
                aria-expanded="false"
              />
            }
          >
            <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
          </Popover>
          <Popover
            panelLabel="기본 Popover"
            triggerContent={
              <Button
                className="popover_trigger"
                variant="outline"
                label="Medium"
                aria-haspopup="dialog"
                aria-expanded="false"
              />
            }
          >
            <p>기본 크기 패널입니다.</p>
          </Popover>
          <Popover
            size="lg"
            panelLabel="큰 Popover"
            triggerContent={
              <Button
                className="popover_trigger"
                variant="outline"
                size="lg"
                label="Large"
                aria-haspopup="dialog"
                aria-expanded="false"
              />
            }
          >
            <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
          </Popover>
        </div>
      </DemoSection>
      <DemoSection
        headingId="offset-heading"
        title="간격"
        description="offset prop(none · sm · md · lg)으로 전 방향 간격을, offsetTop · offsetRight · offsetBottom · offsetLeft로 방향별 간격을 조절합니다."
        stack
        code={offsetCode}
      >
        <div className="popover_demo-stage">
          <p
            className="form_field-hint"
            style={{ marginBottom: 'var(--space-md)' }}
          >
            전 방향 동일
          </p>
          <div className="popover_row" style={{ alignItems: 'flex-start' }}>
            <Popover
              offset="none"
              panelLabel="none"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="none"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>간격 없음</p>
            </Popover>
            <Popover
              offset="sm"
              panelLabel="sm"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="sm"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>좁은 간격</p>
            </Popover>
            <Popover
              panelLabel="md"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="md"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>기본 간격</p>
            </Popover>
            <Popover
              offset="lg"
              panelLabel="lg"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="lg"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>넓은 간격</p>
            </Popover>
          </div>
          <p
            className="form_field-hint"
            style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}
          >
            방향별 (offset-* · placement)
          </p>
          <div
            className="popover_demo-placement"
            style={{
              minHeight: '12rem',
              padding: 0,
              border: 'none',
              background: 'transparent',
            }}
          >
            <div className="popover_demo-placement-cell-top">
              <Popover
                placement="top-center"
                offsetTop="lg"
                panelLabel="offset-top lg"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="위"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                  />
                }
              >
                <p>위쪽 간격</p>
              </Popover>
            </div>
            <div className="popover_demo-placement-cell-left">
              <Popover
                placement="left"
                offsetLeft="lg"
                panelLabel="offset-left lg"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="왼쪽"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                  />
                }
              >
                <p>왼쪽 간격</p>
              </Popover>
            </div>
            <div className="popover_demo-placement-cell-center">
              <Popover
                offsetBottom="lg"
                panelLabel="offset-bottom lg"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="아래"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                  />
                }
              >
                <p>아래쪽 간격</p>
              </Popover>
            </div>
            <div className="popover_demo-placement-cell-right">
              <Popover
                placement="right"
                offsetRight="lg"
                panelLabel="offset-right lg"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="오른쪽"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                  />
                }
              >
                <p>오른쪽 간격</p>
              </Popover>
            </div>
          </div>
        </div>
      </DemoSection>
      <DemoSection
        headingId="title-heading"
        title="제목"
        description="title prop으로 패널 상단 제목을 표시합니다. popover_title · aria-labelledby로 패널과 연결됩니다."
        code={titleCode}
      >
        <Popover
          title="배송 안내"
          triggerContent={
            <Button
              className="popover_trigger"
              variant="ghost"
              label="도움말"
              aria-haspopup="dialog"
            />
          }
        >
          <p>
            평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은
            1~2일 추가 소요될 수 있습니다.
          </p>
        </Popover>
      </DemoSection>
      <DemoSection
        headingId="footer-heading"
        title="푸터"
        description="footer prop·popover_footer에 확인·취소 등 액션 버튼을 배치합니다. data-popover-close로 닫을 수 있습니다."
        code={footerCode}
      >
        <Popover
          title="항목 삭제"
          triggerContent={
            <Button
              className="popover_trigger"
              variant="outline"
              label="삭제 확인"
              aria-haspopup="dialog"
            />
          }
          footer={
            <>
              <Button
                variant="ghost"
                size="sm"
                label="취소"
                data-popover-close=""
              />
              <Button
                variant="filled"
                color="danger"
                size="sm"
                label="삭제"
                data-popover-close=""
              />
            </>
          }
        >
          <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
        </Popover>
      </DemoSection>
      <DemoSection
        headingId="hover-heading"
        title="호버 트리거"
        description='trigger="hover"로 마우스 오버·포커스 시 패널을 표시합니다. 짧은 설명·용어 정의에 적합합니다.'
        code={hoverCode}
      >
        <p>
          결제 시{' '}
          <Popover
            trigger="hover"
            panelLabel="에스크로 설명"
            triggerContent={
              <Link
                className="popover_trigger"
                label="에스크로"
                aria-haspopup="dialog"
              />
            }
          >
            구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제
            방식입니다.
          </Popover>{' '}
          서비스를 이용할 수 있습니다.
        </p>
      </DemoSection>
      <DemoSection
        headingId="trigger-heading"
        title="트리거 유형"
        description="Button · Link · 아이콘 버튼을 트리거로 사용할 수 있습니다."
        stack
        code={triggerCode}
      >
        <div className="popover_row">
          <Popover
            panelLabel="Button 트리거"
            triggerContent={
              <Button
                className="popover_trigger"
                variant="filled"
                color="primary"
                label="Button"
                aria-haspopup="dialog"
              />
            }
          >
            <p>버튼 트리거 예시입니다.</p>
          </Popover>
          <Popover
            panelLabel="Link 트리거"
            triggerContent={
              <Link
                className="popover_trigger"
                label="Link 트리거"
                aria-haspopup="dialog"
              />
            }
          >
            <p>링크 스타일 트리거입니다.</p>
          </Popover>
          <Popover
            panelLabel="추가 정보"
            triggerContent={
              <Button
                className="popover_trigger"
                variant="ghost"
                iconOnly
                ariaLabel="정보"
                aria-haspopup="dialog"
                iconBefore={<Icon name="info" />}
              />
            }
          >
            <p>아이콘 전용 트리거입니다.</p>
          </Popover>
        </div>
      </DemoSection>
      <DemoSection
        headingId="placement-heading"
        title="배치"
        description="placement prop(top · top-center · bottom-center · left · right · end)으로 패널 위치를 조정합니다. 기본은 트리거 아래·왼쪽 정렬입니다."
        stack
        code={placementCode}
      >
        <div className="popover_demo-stage">
          <div className="popover_demo-placement">
            <div className="popover_demo-placement-cell-top">
              <Popover
                placement="top-center"
                panelLabel="위쪽 가운데 배치"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="위"
                    aria-haspopup="dialog"
                  />
                }
              >
                <p>트리거 위 · 가운데</p>
              </Popover>
            </div>
            <div className="popover_demo-placement-cell-left">
              <Popover
                placement="left"
                panelLabel="왼쪽 배치"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="왼쪽"
                    aria-haspopup="dialog"
                  />
                }
              >
                <p>트리거 왼쪽</p>
              </Popover>
            </div>
            <div className="popover_demo-placement-cell-center">
              <Popover
                placement="bottom-center"
                panelLabel="아래쪽 가운데 배치"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="아래"
                    aria-haspopup="dialog"
                  />
                }
              >
                <p>트리거 아래 · 가운데</p>
              </Popover>
            </div>
            <div className="popover_demo-placement-cell-right">
              <Popover
                placement="right"
                panelLabel="오른쪽 배치"
                triggerContent={
                  <Button
                    className="popover_trigger"
                    variant="outline"
                    size="sm"
                    label="오른쪽"
                    aria-haspopup="dialog"
                  />
                }
              >
                <p>트리거 오른쪽</p>
              </Popover>
            </div>
          </div>
          <div
            className="popover_row"
            style={{
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 'var(--space-xl)',
            }}
          >
            <Popover
              placement="top"
              panelLabel="위쪽 왼쪽 정렬"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="ghost"
                  label="위 · 왼쪽 정렬"
                  aria-haspopup="dialog"
                />
              }
            >
              <p>패널 왼쪽 정렬</p>
            </Popover>
            <Popover
              panelLabel="아래쪽 왼쪽 정렬"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="ghost"
                  label="아래 · 왼쪽 정렬"
                  aria-haspopup="dialog"
                />
              }
            >
              <p>기본 배치</p>
            </Popover>
            <Popover
              placement="end"
              panelLabel="오른쪽 정렬"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="ghost"
                  label="아래 · 오른쪽 정렬"
                  aria-haspopup="dialog"
                />
              }
            >
              <p>패널 오른쪽 정렬</p>
            </Popover>
          </div>
        </div>
      </DemoSection>
      <DemoSection
        headingId="form-heading"
        title="폼"
        description="Input · Form Layout 컴포넌트와 조합해 간단한 입력 UI를 패널 안에 배치합니다."
        code={formCode}
      >
        <Popover
          title="빠른 메모"
          triggerContent={
            <Button
              className="popover_trigger"
              variant="outline"
              label="메모 추가"
              aria-haspopup="dialog"
            />
          }
          footer={
            <>
              <Button
                variant="ghost"
                size="sm"
                label="취소"
                data-popover-close=""
              />
              <Button
                variant="filled"
                color="primary"
                size="sm"
                label="저장"
                data-popover-close=""
              />
            </>
          }
        >
          <div className="form_field">
            <label className="form_label" htmlFor="popover-memo-input">
              내용
            </label>
            <Textarea
              id="popover-memo-input"
              rows={3}
              placeholder="메모를 입력하세요"
            />
          </div>
        </Popover>
      </DemoSection>
      <DemoSection
        headingId="arrow-anchor-heading"
        title="화살표 기준"
        description="arrowAnchor(content · target · mixed)와 panelAlign, arrowTargetAlign으로 패널·화살표를 독립 조합합니다."
        stack
        code={arrowAnchorCode}
      >
        <div className="popover_demo-stage">
          <p
            className="form_field-hint"
            style={{ marginBottom: 'var(--space-md)' }}
          >
            기준 비교
          </p>
          <div className="popover_row" style={{ alignItems: 'flex-start' }}>
            <Popover
              panelLabel="content"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>
                패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로
                배치됩니다.
              </p>
            </Popover>
            <Popover
              arrowAnchor="target"
              panelLabel="target"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>
                패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.
              </p>
            </Popover>
          </div>
          <p
            className="form_field-hint"
            style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}
          >
            target — 좌 · 가운데 · 우
          </p>
          <div className="popover_row" style={{ alignItems: 'flex-start' }}>
            <Popover
              arrowAnchor="target"
              arrowTargetAlign="left"
              panelLabel="left"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>트리거 왼쪽을 가리킵니다.</p>
            </Popover>
            <Popover
              arrowAnchor="target"
              panelLabel="center"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>트리거 가운데를 가리킵니다.</p>
            </Popover>
            <Popover
              arrowAnchor="target"
              arrowTargetAlign="right"
              panelLabel="right"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>트리거 오른쪽을 가리킵니다.</p>
            </Popover>
          </div>
          <p
            className="form_field-hint"
            style={{ margin: 'var(--space-lg) 0 var(--space-md)' }}
          >
            mixed — 패널 가운데 · 화살표 조합
          </p>
          <div className="popover_row" style={{ alignItems: 'flex-start' }}>
            <Popover
              arrowAnchor="mixed"
              panelAlign="center"
              arrowTargetAlign="left"
              panelLabel="가운데 · ←"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>패널 가운데, 화살표 트리거 왼쪽.</p>
            </Popover>
            <Popover
              arrowAnchor="mixed"
              panelAlign="center"
              panelLabel="가운데 · ●"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>패널·화살표 모두 트리거 가운데.</p>
            </Popover>
            <Popover
              arrowAnchor="mixed"
              panelAlign="center"
              arrowTargetAlign="right"
              panelLabel="가운데 · →"
              triggerContent={
                <Button
                  className="popover_trigger"
                  variant="outline"
                  size="sm"
                  label="S"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                />
              }
            >
              <p>패널 가운데, 화살표 트리거 오른쪽.</p>
            </Popover>
          </div>
        </div>
      </DemoSection>
      <DemoSection
        headingId="no-arrow-heading"
        title="화살표 없음"
        description="noArrow prop으로 popover_arrow를 숨깁니다. popover_no-arrow 클래스와 대응됩니다."
        code={noArrowCode}
      >
        <Popover
          noArrow
          panelLabel="화살표 없는 Popover"
          triggerContent={
            <Button
              className="popover_trigger"
              variant="ghost"
              label="화살표 없음"
              aria-haspopup="dialog"
            />
          }
        >
          <p>화살표가 표시되지 않는 패널입니다.</p>
        </Popover>
      </DemoSection>

      <section className="section" aria-labelledby="usage-heading">
        <h2 id="usage-heading">마크업</h2>
        <p>
          <code className="typo_code">Popover</code> 컴포넌트로
          트리거·패널·접근성 속성을 조합합니다.
          <code className="typo_code">trigger</code> ·{' '}
          <code className="typo_code">placement</code> ·
          <code className="typo_code">title</code> prop과{' '}
          <code className="typo_code">triggerContent</code> ·
          <code className="typo_code">footer</code> prop으로 데모와 동일하게
          구성할 수 있습니다.
        </p>
        <GuideCodeBlock>{markupCode}</GuideCodeBlock>
      </section>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable
          columns={popoverPropColumns}
          rows={popoverProps}
          codeColumn="name"
        />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable
          columns={popoverChildColumns}
          rows={popoverChildren}
          codeColumn="name"
        />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable
          columns={popoverClassColumns}
          rows={popoverClasses}
          codeColumn="name"
        />
        <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
          닫기: 닫기 버튼 · 바깥 클릭 ·{' '}
          <code className="typo_code">data-popover-close</code> · <kbd>Esc</kbd>
          . 클릭 트리거는 패널 우측 상단에 닫기 버튼이 기본 제공됩니다. 열릴 때
          다른 Popover는 자동으로 닫힙니다.
        </p>
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable
          columns={popoverTokenColumns}
          rows={popoverTokens}
          codeColumn="name"
        />
      </ApiSection>
    </>
  );
}

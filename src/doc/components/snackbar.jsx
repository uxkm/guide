export const docMeta = {
  title: 'Snackbar | UXKM Guide',
  activeNav: 'snackbar',
  pageTitle: 'Snackbar',
};

import Button from '@/components/Button.jsx';
import Snackbar from '@/components/Snackbar.jsx';
import SnackbarPlayground from '@/components/SnackbarPlayground.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideSection from '@/components/guide/GuideSection.jsx';
import {
  snackbarChildColumns,
  snackbarChildren,
  snackbarClassColumns,
  snackbarClasses,
  snackbarEventColumns,
  snackbarEvents,
  snackbarPropColumns,
  snackbarProps,
  snackbarRegionProps,
  snackbarTokenColumns,
  snackbarTokens,
} from '@/doc/data/snackbar-api';

const placementCode = `'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button.jsx';
import Snackbar from '@/components/Snackbar.jsx';
import SnackbarRegion from '@/components/SnackbarRegion.jsx';

export function PlacementExample() {
  const [items, setItems] = useState([]);

  function add(placement) {
    setItems((current) => [
      ...current,
      { id: crypto.randomUUID(), placement, message: \`\${placement} 알림\` },
    ]);
  }

  function remove(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  useEffect(() => {
    add('bottom-center');
  }, []);

  return (
    <>
      <Button label="상단 가운데" onClick={() => add('top-center')} />
      <Button label="하단 우측" onClick={() => add('bottom-end')} />

      {['top-center', 'bottom-end'].map((placement) => (
        <SnackbarRegion key={placement} placement={placement}>
          {items
            .filter((item) => item.placement === placement)
            .map((item) => (
              <Snackbar
                key={item.id}
                message={item.message}
                closable
                duration={8000}
                onClose={() => remove(item.id)}
              />
            ))}
        </SnackbarRegion>
      ))}
    </>
  );
}`;

const basicCode = `import Snackbar from '@/components/Snackbar.jsx';

export function BasicExample() {
  return (
    <>
      <Snackbar color="info" message="새로운 업데이트가 있습니다." />
      <Snackbar color="success" message="변경 사항을 저장했습니다." />
      <Snackbar color="warning" message="세션이 곧 만료됩니다." />
      <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
    </>
  );
}`;

const simpleCode = `import Snackbar from '@/components/Snackbar.jsx';

export function SimpleExample() {
  return (
    <Snackbar showIcon={false}>
      인터넷 연결이 복구되었습니다.
    </Snackbar>
  );
}`;

const shapeCode = `import Button from '@/components/Button.jsx';
import Snackbar from '@/components/Snackbar.jsx';

export function ShapeExample() {
  return (
    <>
      <Snackbar message="기본 스퀘어 라운드" />
      <Snackbar round color="success" message="비율형 캡슐 라운드" />
      <Snackbar
        round
        color="warning"
        message="액션과 닫기가 포함된 라운드"
        closable
        action={<Button variant="ghost" size="sm" label="확인" />}
      />
    </>
  );
}`;

const motionCode = `import Snackbar from '@/components/Snackbar.jsx';
import SnackbarRegion from '@/components/SnackbarRegion.jsx';

export function MotionExample() {
  return (
    <>
      <Snackbar motion="fade" message="Fade 효과" />
      <SnackbarRegion placement="top-end">
        <Snackbar motion="slide" message="위에서 호출되고 위로 닫힘" />
      </SnackbarRegion>
      <Snackbar motion="none" message="전환 효과 없음" />
    </>
  );
}`;

const sizeCode = `import Snackbar from '@/components/Snackbar.jsx';

export function SizeExample() {
  return (
    <>
      <Snackbar size="sm" message="Small Snackbar" />
      <Snackbar message="Medium Snackbar" />
      <Snackbar size="lg" message="Large Snackbar" />
    </>
  );
}`;

const actionCode = `import Button from '@/components/Button.jsx';
import Snackbar from '@/components/Snackbar.jsx';

export function ActionExample() {
  return (
    <Snackbar
      color="success"
      message="항목을 삭제했습니다."
      action={({ close }) => (
        <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />
      )}
    />
  );
}`;

const closeCode = `import Snackbar from '@/components/Snackbar.jsx';

export function CloseExample() {
  return (
    <Snackbar
      closable
      color="warning"
      message="브라우저를 최신 버전으로 업데이트해 주세요."
      onClose={(reason) => console.log(reason)}
    />
  );
}`;

const durationCode = `import Snackbar from '@/components/Snackbar.jsx';

export function TimedExample() {
  return (
    <Snackbar
      duration={4000}
      color="success"
      message="4초 후 자동으로 닫힙니다."
      onClose={(reason) => console.log(reason)}
    />
  );
}`;

export default function SnackbarDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Snackbar</h1>
        <p className="lead">
          작업 결과나 짧은 상태 메시지를 일시적으로 전달하는 Next.js Client Component입니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="info · success · warning · danger 의미 색상으로 짧은 피드백을 전달합니다."
        stack
        code={basicCode}
      >
        <>
          <Snackbar color="info" message="새로운 업데이트가 있습니다." />
          <Snackbar color="success" message="변경 사항을 저장했습니다." />
          <Snackbar color="warning" message="세션이 곧 만료됩니다." />
          <Snackbar color="danger" role="alert" message="저장하지 못했습니다." />
        </>
      </DemoSection>

      <DemoSection
        headingId="placement-heading"
        title="위치 · 여러 개 동작 테스트"
        description="8개 위치는 본문이 아닌 브라우저 뷰포트를 기준으로 계산됩니다. 이 데모는 openOnLoad 옵션으로 처음 로드할 때 하단 가운데 Snackbar를 호출하며, 같은 위치에 여러 개가 생성되면 독립적으로 쌓입니다."
        code={placementCode}
      >
        <SnackbarPlayground
          openOnLoad
          openOnLoadPlacement="bottom-center"
          openOnLoadCount={1}
          openOnLoadMotion="slide"
        />
      </DemoSection>

      <DemoSection
        headingId="simple-heading"
        title="간단한 메시지"
        description="showIcon을 끄고 children으로 메시지를 전달할 수 있습니다."
        code={simpleCode}
      >
        <Snackbar showIcon={false}>인터넷 연결이 복구되었습니다.</Snackbar>
      </DemoSection>

      <DemoSection
        headingId="shape-heading"
        title="형태"
        description="기본형은 radius-md를 사용하고, round 유형은 Snackbar 높이 비율에 맞춘 캡슐형 모서리와 크기별 가로 패딩을 적용합니다."
        stack
        code={shapeCode}
      >
        <>
          <Snackbar message="기본 스퀘어 라운드" />
          <Snackbar round color="success" message="비율형 캡슐 라운드" />
          <Snackbar
            round
            color="warning"
            message="액션과 닫기가 포함된 라운드"
            closable
            action={<Button variant="ghost" size="sm" label="확인" />}
          />
        </>
      </DemoSection>

      <DemoSection
        headingId="motion-heading"
        title="호출 · 닫기 효과"
        description="fade는 제자리에서 투명도를 전환하고, slide는 상단·하단·중간 좌우 위치에 따라 가장 가까운 브라우저 가장자리 방향으로 호출·퇴장합니다. none은 즉시 표시하고 닫습니다."
        stack
        code={motionCode}
      >
        <>
          <Snackbar motion="fade" message="Fade 효과" />
          <Snackbar motion="slide" placement="middle-end" message="우측 Slide 효과" />
          <Snackbar motion="none" message="전환 효과 없음" />
        </>
      </DemoSection>

      <DemoSection
        headingId="size-heading"
        title="크기"
        description="sm · md · lg 세 가지 크기를 제공합니다."
        stack
        code={sizeCode}
      >
        <>
          <Snackbar size="sm" message="Small Snackbar" />
          <Snackbar message="Medium Snackbar" />
          <Snackbar size="lg" message="Large Snackbar" />
        </>
      </DemoSection>

      <DemoSection
        headingId="action-heading"
        title="액션"
        description="action 영역에 실행 취소 등 하나의 명확한 후속 동작을 배치합니다."
        code={actionCode}
      >
        <Snackbar
          color="success"
          message="항목을 삭제했습니다."
          action={({ close }) => (
            <Button variant="ghost" size="sm" label="실행 취소" onClick={close} />
          )}
        />
      </DemoSection>

      <DemoSection
        headingId="close-heading"
        title="닫기 가능"
        description="닫기 버튼은 onClose에 close 사유와 클릭 이벤트를 전달합니다."
        code={closeCode}
      >
        <Snackbar
          closable
          color="warning"
          message="브라우저를 최신 버전으로 업데이트해 주세요."
        />
      </DemoSection>

      <DemoSection
        headingId="duration-heading"
        title="자동 닫기"
        description="duration을 밀리초로 지정하면 시간이 지난 뒤 onClose에 timeout 사유를 전달합니다. 호버하거나 내부 요소에 포커스하면 남은 시간이 일시정지됩니다."
        code={durationCode}
        showCode
      >
        <Snackbar
          color="success"
          message="실제 서비스에서는 duration={4000}처럼 자동 닫기를 설정할 수 있습니다."
        />
      </DemoSection>

      <GuideSection
        headingId="accessibility-heading"
        title="접근성"
        description="Snackbar는 포커스를 강제로 이동하지 않고 라이브 영역으로 상태 변화를 전달합니다."
      >
        <ul className="typo_list">
          <li>
            일반적인 작업 결과는 <code className="typo_code">role=&quot;status&quot;</code>로
            정중하게 알리고, 즉시 확인해야 하는 오류에만{' '}
            <code className="typo_code">role=&quot;alert&quot;</code>를 사용합니다.
          </li>
          <li>
            자동 닫기는 기본적으로 비활성화되어 있습니다. 사용하는 경우에도 내용을 읽고 액션을
            수행할 충분한 시간을 제공하세요.
          </li>
          <li>
            호버 또는 Snackbar 내부 포커스 중에는 자동 닫기 타이머가 멈춥니다. 닫기 가능한
            Snackbar는 내부 포커스 상태에서 <kbd>Esc</kbd>로도 닫을 수 있습니다.
          </li>
          <li>
            운영체제에서 모션 감소를 설정한 경우 Fade·Slide 시간을 최소화해 움직임을
            줄입니다.
          </li>
          <li>
            아이콘은 장식 요소로 숨겨지므로 상태를 색상이나 아이콘에만 의존하지 말고 메시지
            텍스트로 명확하게 설명하세요.
          </li>
          <li>액션은 하나의 짧고 명확한 동작으로 제공하고, 닫기 버튼에는 구체적인 closeLabel을 사용하세요.</li>
        </ul>
      </GuideSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={snackbarPropColumns} rows={snackbarProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-region-heading" title="API · SnackbarRegion">
        <ApiTable
          columns={snackbarPropColumns}
          rows={snackbarRegionProps}
          codeColumn="name"
        />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={snackbarChildColumns} rows={snackbarChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-events-heading" title="API · Events">
        <ApiTable columns={snackbarEventColumns} rows={snackbarEvents} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-classes-heading" title="클래스 · 속성">
        <ApiTable columns={snackbarClassColumns} rows={snackbarClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={snackbarTokenColumns} rows={snackbarTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}

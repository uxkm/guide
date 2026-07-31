export const docMeta = {
  title: 'Divider | UXKM Guide',
  activeNav: 'divider',
  pageTitle: 'Divider',
};

import Divider from '@/components/Divider.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Space from '@/components/Space.jsx';
import {
  dividerClassColumns,
  dividerClasses,
  dividerPropColumns,
  dividerProps,
  dividerSlotColumns,
  dividerSlots,
  dividerTokenColumns,
  dividerTokens,
} from '@/doc/data/divider-api';

const basicCode = `import Divider from '@/components/Divider.jsx';

export function BasicExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider />
      <p>아래 콘텐츠</p>
    </>
  );
}`;

const dashedCode = `import Divider from '@/components/Divider.jsx';

export function DashedExample() {
  return (
    <>
      <p>위 콘텐츠</p>
      <Divider dashed />
      <p>아래 콘텐츠</p>
    </>
  );
}`;

const textCode = `import Divider from '@/components/Divider.jsx';

export function TextExample() {
  return (
    <>
      <Divider label="섹션 제목" />
      <Divider plain label="보조 설명" />
    </>
  );
}`;

const orientCode = `import Divider from '@/components/Divider.jsx';

export function OrientExample() {
  return (
    <>
      <Divider orient="left" label="왼쪽" />
      <Divider label="가운데" />
      <Divider orient="right" label="오른쪽" />
    </>
  );
}`;

const verticalCode = `import Divider from '@/components/Divider.jsx';
import Space from '@/components/Space.jsx';

export function VerticalExample() {
  return (
    <Space>
      <span>항목 A</span>
      <Divider vertical />
      <span>항목 B</span>
      <Divider vertical dashed />
      <span>항목 C</span>
    </Space>
  );
}`;

export default function DividerDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Divider</h1>
        <p className="lead">
          콘텐츠 영역이나 인라인 항목을 구분하는 React 컴포넌트입니다. 실선·점선·텍스트 레이블·세로
          구분을 props와 유틸리티 클래스로 조합합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="레이블이 없는 가로 Divider는 의미 있는 구분선인 hr로 렌더링됩니다."
        stack
        code={basicCode}
      >
        <p>위 콘텐츠</p>
        <Divider />
        <p>아래 콘텐츠</p>
      </DemoSection>

      <DemoSection
        headingId="dashed-heading"
        title="점선"
        description="divider_dashed로 점선 스타일을 적용합니다."
        stack
        code={dashedCode}
      >
        <p>위 콘텐츠</p>
        <Divider dashed />
        <p>아래 콘텐츠</p>
      </DemoSection>

      <DemoSection
        headingId="text-heading"
        title="텍스트 레이블"
        description="label이나 children을 전달하면 role=separator인 div와 양쪽 선으로 렌더링됩니다. plain은 레이블 굵기를 낮춥니다."
        stack
        code={textCode}
      >
        <Divider label="섹션 제목" />
        <Divider plain label="보조 설명" />
      </DemoSection>

      <DemoSection
        headingId="orient-heading"
        title="레이블 정렬"
        description="divider_orient-left · divider_orient-right로 레이블 위치를 조정합니다. 기본은 가운데입니다."
        stack
        code={orientCode}
      >
        <Divider orient="left" label="왼쪽" />
        <Divider label="가운데" />
        <Divider orient="right" label="오른쪽" />
      </DemoSection>

      <DemoSection
        headingId="vertical-heading"
        title="세로"
        description="vertical은 인라인·flex 행 안에서 장식용 세로 구분선으로 사용하며 스크린 리더에서는 숨깁니다."
        code={verticalCode}
      >
        <Space>
          <span>항목 A</span>
          <Divider vertical />
          <span>항목 B</span>
          <Divider vertical dashed />
          <span>항목 C</span>
        </Space>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={dividerPropColumns} rows={dividerProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={dividerSlotColumns} rows={dividerSlots} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={dividerClassColumns} rows={dividerClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={dividerTokenColumns} rows={dividerTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}

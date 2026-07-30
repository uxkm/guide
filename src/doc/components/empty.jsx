export const docMeta = {
  title: 'Empty | UXKM Guide',
  activeNav: 'empty',
  pageTitle: 'Empty',
};

import Empty from '@/components/Empty.jsx';
import Button from '@/components/Button.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import {
  emptyChildColumns,
  emptyChildren,
  emptyClassColumns,
  emptyClasses,
  emptyPropColumns,
  emptyProps,
  emptyTokenColumns,
  emptyTokens,
  markupCode,
} from '@/doc/data/empty-api';

const basicCode = `import Empty from '@/components/Empty.jsx';

export function BasicExample() {
  return <Empty description="데이터가 없습니다" />;
}`;
const footerCode = `import Button from '@/components/Button.jsx';
import Empty from '@/components/Empty.jsx';

export function FooterExample() {
  return (
    <Empty
      description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."
      footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />}
    />
  );
}`;
const customCode = `import Empty from '@/components/Empty.jsx';

export function CustomExample() {
  return (
    <Empty
      description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요."
      image={
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      }
    />
  );
}`;
const sizeCode = `import Empty from '@/components/Empty.jsx';

export function SizeExample() {
  return (
    <>
      <Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style={{ marginTop: 'var(--space-md)' }} />
      <Empty size="lg" description="Large" style={{ marginTop: 'var(--space-md)' }} />
    </>
  );
}`;
const simpleCode = `import Empty from '@/components/Empty.jsx';

export function SimpleExample() {
  return <Empty simple size="sm" description="일정 없음" />;
}`;
const blockCode = `import Empty from '@/components/Empty.jsx';

export function BlockExample() {
  return (
    <div className="card card_shadow" style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}>
      <div className="card_header">
        <h3 className="card_title">알림 목록</h3>
      </div>
      <div className="card_body">
        <Empty block description="새 알림이 없습니다" />
      </div>
    </div>
  );
}`;

export default function EmptyDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Empty</h1>
        <p className="lead">
          데이터가 없거나 검색 결과가 없을 때 빈 상태를 안내하는 Empty 컴포넌트입니다.
          기본 아이콘·설명·액션 버튼 조합을 지원하며 <code className="typo_code">role=&quot;status&quot;</code>로
          접근성을 보장합니다.
        </p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="`empty_image` · `empty_desc`로 아이콘과 설명을 표시합니다."
        code={basicCode}
      >
<Empty description="데이터가 없습니다" />
      </DemoSection>
      <DemoSection
        headingId="footer-heading"
        title="액션"
        description="`empty_footer`에 버튼·링크를 배치해 다음 행동을 유도합니다."
        code={footerCode}
      >
<Empty
      description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요."
      footer={<Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />}
    />
      </DemoSection>
      <DemoSection
        headingId="custom-heading"
        title="커스텀 이미지"
        description="`empty_image`에 SVG·img를 자유롭게 넣을 수 있습니다."
        code={customCode}
      >
<Empty
      description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요."
      image={
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      }
    />
      </DemoSection>
      <DemoSection
        headingId="size-heading"
        title="크기"
        description="`empty_sm` · `empty`(기본) · `empty_lg` 세 가지 스케일을 지원합니다."
        code={sizeCode}
      >
<>
      <Empty size="sm" description="Small" />
      <Empty description="Medium (기본)" style={{ marginTop: 'var(--space-md)' }} />
      <Empty size="lg" description="Large" style={{ marginTop: 'var(--space-md)' }} />
    </>
      </DemoSection>
      <DemoSection
        headingId="simple-heading"
        title="설명만"
        description="`empty_simple`은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다."
        code={simpleCode}
      >
<Empty simple size="sm" description="일정 없음" />
      </DemoSection>
      <DemoSection
        headingId="block-heading"
        title="블록 · 컨테이너"
        description="`empty_block`은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다."
        code={blockCode}
      >
<>
      <div
        className="card card_shadow"
        style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}
      >
        <div className="card_header">
          <h3 className="card_title">알림 목록</h3>
        </div>
        <div className="card_body">
          <Empty block description="새 알림이 없습니다" />
        </div>
      </div>
      <div
        className="table_wrap"
        style={{
          maxWidth: 'var(--input-max-width)',
          width: '100%',
          marginTop: 'var(--space-md)',
        }}
      >
        <table className="table table_bordered">
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">상태</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} style={{ padding: 0, border: 'none' }}>
                <Empty block simple size="sm" description="표시할 항목이 없습니다" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
      </DemoSection>

      <section className="section" aria-labelledby="usage-heading">
        <h2 id="usage-heading">마크업</h2>
        <p>
          빈 상태 영역에 <code className="typo_code">role=&quot;status&quot;</code>를 지정하고,
          장식용 아이콘에는 <code className="typo_code">aria-hidden=&quot;true&quot;</code>를 사용합니다.
        </p>
        <GuideCodeBlock>{markupCode}</GuideCodeBlock>
      </section>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={emptyPropColumns} rows={emptyProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={emptyChildColumns} rows={emptyChildren} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={emptyClassColumns} rows={emptyClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={emptyTokenColumns} rows={emptyTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}

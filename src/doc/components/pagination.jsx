export const docMeta = {
  title: 'Pagination | HTML Components',
  activeNav: 'pagination',
  pageTitle: 'Pagination',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Pagination from '@/components/Pagination.jsx';
import {
  paginationClassColumns,
  paginationClasses,
  paginationEventColumns,
  paginationEvents,
  paginationPropColumns,
  paginationProps,
  paginationTokenColumns,
  paginationTokens,
} from '@/doc/data/pagination-api';

export default function PaginationDoc() {
  return (
    <>
      <div className="page_intro">
          <h1>Pagination</h1>
          <p className="lead">목록·테이블의 페이지를 이동하는 컴포넌트입니다. <code className="typo_code">nav</code> · <code className="typo_code">ul</code> 시맨틱 구조와 <code className="typo_code">aria-current="page"</code>로 접근성을 지원합니다.</p>
        </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="이전·다음 버튼과 페이지 번호로 구성합니다."
        >
          <Pagination current={1} total={50} pageSize={10} />
        </DemoSection>

        <DemoSection
          headingId="minimal-heading"
          title="미니멀"
          description="minimal로 테두리 없는 가벼운 스타일을 적용합니다."
        >
          <Pagination current={4} total={50} pageSize={10} minimal />
        </DemoSection>

        <DemoSection
          headingId="size-heading"
          title="크기"
          description="size로 항목 스케일을 조절합니다."
          stack
        >
          <Pagination current={1} total={20} pageSize={10} size="sm" />
          <Pagination current={1} total={20} pageSize={10} />
          <Pagination current={1} total={20} pageSize={10} size="lg" />
        </DemoSection>

        <DemoSection
          headingId="round-heading"
          title="둥근"
          description="round로 pill 형태의 페이지 버튼을 적용합니다."
        >
          <Pagination current={7} total={80} pageSize={10} round />
        </DemoSection>

        <DemoSection
          headingId="ellipsis-heading"
          title="페이지 생략"
          description="페이지가 많을 때 중간 구간을 생략합니다."
        >
          <Pagination current={10} total={500} pageSize={10} />
        </DemoSection>

        <DemoSection
          headingId="simple-heading"
          title="심플"
          description="simple로 이전·다음과 현재/전체 페이지만 표시합니다."
          stack
        >
          <Pagination simple current={3} total={120} pageSize={10} />
          <Pagination simple minimal current={1} total={120} pageSize={10} />
        </DemoSection>

        <DemoSection
          headingId="toolbar-heading"
          title="툴바 조합"
          description="pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다."
        >
          <div className="pagination_wrap">
            <span className="pagination_total">총 128건</span>
            <div className="pagination_wrap-end">
              <Pagination current={5} total={128} pageSize={10} minimal />
              <label className="pagination_jumper">
                이동
                <input type="number" className="pagination_jumper-input" defaultValue="5" min="1" max="13" aria-label="이동할 페이지" />
                페이지
              </label>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          headingId="align-heading"
          title="정렬"
          description="pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다."
          stack
        >
          <Pagination current={1} total={20} pageSize={10} />
          <Pagination current={1} total={20} pageSize={10} className="pagination_align-center" />
          <Pagination current={1} total={20} pageSize={10} className="pagination_align-end" />
        </DemoSection>

        <DemoSection
          headingId="state-heading"
          title="상태"
          description="첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다."
          stack
        >
          <Pagination current={1} total={30} pageSize={10} />
          <Pagination current={10} total={100} pageSize={10} />
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Props">
          <ApiTable columns={paginationPropColumns} rows={paginationProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-events-heading" title="API · Events">
          <ApiTable columns={paginationEventColumns} rows={paginationEvents} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={paginationClassColumns} rows={paginationClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={paginationTokenColumns} rows={paginationTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}

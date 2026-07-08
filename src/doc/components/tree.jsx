export const docMeta = {
  title: 'Tree | HTML Components',
  activeNav: 'tree',
  pageTitle: 'Tree',
};

import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Tag from '@/components/Tag.jsx';
import Tree from '@/components/Tree.jsx';
import TreeNode from '@/components/TreeNode.jsx';
import {
  treeClassColumns,
  treeClasses,
  treeNodePropColumns,
  treeNodeProps,
  treeNodeSlots,
  treePropColumns,
  treeProps,
  treeSlotColumns,
  treeSlots,
  treeTokenColumns,
  treeTokens,
} from '@/doc/data/tree-api';

export default function TreeDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Tree</h1>
        <p className="lead">계층 구조 데이터를 트리 형태로 표시하는 컴포넌트입니다. 연결선·컴팩트·체크박스 등 다양한 유형을 지원합니다.</p>
      </div>

        <DemoSection
          headingId="basic-heading"
          title="기본"
          description="tree_toggle으로 노드를 펼치고 접습니다. tree_bordered로 테두리를 추가할 수 있습니다."
        >
          <Tree bordered ariaLabel="파일 탐색기">
            <TreeNode label="src" expanded toggleLabel="src 폴더 접기">
              <TreeNode label="components" expanded toggleLabel="components 폴더 접기">
                <TreeNode label="button.html" selected />
                <TreeNode label="card.html" />
              </TreeNode>
              <TreeNode label="index.html" />
            </TreeNode>
            <TreeNode label="public" expanded={false} toggleLabel="public 폴더 펼치기">
              <TreeNode label="favicon.ico" />
            </TreeNode>
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="simple-heading"
          title="간단"
          description="아이콘 없이 텍스트만 표시하는 트리입니다."
        >
          <Tree ariaLabel="카테고리">
            <TreeNode label="전자기기" expanded toggleLabel="전자기기 접기">
              <TreeNode label="노트북" />
              <TreeNode label="스마트폰" />
            </TreeNode>
            <TreeNode label="의류" />
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="lines-heading"
          title="연결선"
          description="tree_lines로 노드 간 연결 가이드라인을 표시합니다. 조직도·파일 탐색기에 적합합니다."
        >
          <Tree lines bordered ariaLabel="조직도">
            <TreeNode label="개발본부" expanded toggleLabel="개발본부 접기">
              <TreeNode label="프론트엔드팀" expanded toggleLabel="프론트엔드팀 접기">
                <TreeNode label="홍길동" />
                <TreeNode label="김철수" />
              </TreeNode>
              <TreeNode label="백엔드팀" expanded={false} toggleLabel="백엔드팀 펼치기">
                <TreeNode label="이영희" />
              </TreeNode>
            </TreeNode>
            <TreeNode label="디자인본부" />
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="compact-heading"
          title="컴팩트"
          description="tree_compact로 행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다."
        >
          <Tree compact bordered ariaLabel="권한 목록">
            <TreeNode label="관리자" expanded toggleLabel="관리자 접기">
              <TreeNode label="사용자 관리" />
              <TreeNode label="설정 변경" />
              <TreeNode label="로그 조회" />
            </TreeNode>
            <TreeNode label="편집자" expanded={false} toggleLabel="편집자 펼치기">
              <TreeNode label="콘텐츠 작성" />
            </TreeNode>
            <TreeNode label="뷰어" />
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="plus-toggle-heading"
          title="+/− 토글"
          description="tree_toggle-plus로 화살표 대신 +/− 아이콘 토글을 사용합니다."
        >
          <Tree bordered ariaLabel="메뉴 구조">
            <TreeNode label="가이드" expanded plusToggle toggleLabel="가이드 접기">
              <TreeNode label="시작하기" expanded plusToggle toggleLabel="시작하기 접기">
                <TreeNode label="설치" />
                <TreeNode label="빠른 시작" />
              </TreeNode>
              <TreeNode label="컴포넌트" expanded={false} plusToggle toggleLabel="컴포넌트 펼치기">
                <TreeNode label="Button" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="checkbox-heading"
          title="체크박스"
          description="tree_check로 다중 선택 트리를 구성합니다. 부모·자식 노드에 체크박스를 배치할 수 있습니다."
        >
          <Tree bordered multiselectable ariaLabel="권한 선택">
            <TreeNode
              label="대시보드"
              expanded
              toggleLabel="대시보드 접기"
              prefix={(
                <label className="tree_check">
                  <input type="checkbox" defaultChecked aria-label="대시보드" />
                </label>
              )}
            >
              <TreeNode
                label="조회"
                prefix={(
                  <label className="tree_check">
                    <input type="checkbox" defaultChecked aria-label="조회" />
                  </label>
                )}
              />
              <TreeNode
                label="보내기"
                prefix={(
                  <label className="tree_check">
                    <input type="checkbox" aria-label="보내기" />
                  </label>
                )}
              />
            </TreeNode>
            <TreeNode
              label="설정"
              expanded={false}
              toggleLabel="설정 펼치기"
              prefix={(
                <label className="tree_check">
                  <input type="checkbox" aria-label="설정" />
                </label>
              )}
            >
              <TreeNode
                label="사용자 관리"
                prefix={(
                  <label className="tree_check">
                    <input type="checkbox" aria-label="사용자 관리" />
                  </label>
                )}
              />
              <TreeNode
                label="알림 설정"
                prefix={(
                  <label className="tree_check">
                    <input type="checkbox" aria-label="알림 설정" />
                  </label>
                )}
              />
            </TreeNode>
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="meta-heading"
          title="메타 · 배지"
          description="tree_meta로 파일 크기·항목 수 등 보조 정보를 표시합니다."
        >
          <Tree bordered ariaLabel="프로젝트 파일">
            <TreeNode
              label="assets"
              meta="3개"
              expanded
              toggleLabel="assets 접기"
              icon={(
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              )}
            >
              <TreeNode
                label="logo.png"
                meta="24 KB"
                icon={(
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                  </svg>
                )}
              />
              <TreeNode
                label="hero.jpg"
                meta="1.2 MB"
                icon={(
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                  </svg>
                )}
              />
              <TreeNode
                label="styles.css"
                meta="8 KB"
                icon={(
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                  </svg>
                )}
              />
            </TreeNode>
            <TreeNode
              label="package.json"
              icon={(
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                </svg>
              )}
              metaSlot={<Tag color="default" label="수정됨" />}
            />
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="disabled-heading"
          title="비활성"
          description="tree_row에 is-disabled를 적용해 선택·상호작용을 막습니다."
        >
          <Tree bordered ariaLabel="기능 목록">
            <TreeNode label="기본 기능" expanded toggleLabel="기본 기능 접기">
              <TreeNode label="대시보드" />
              <TreeNode label="고급 분석 (Pro)" disabled />
              <TreeNode label="API 연동 (Enterprise)" disabled />
            </TreeNode>
            <TreeNode label="베타 기능" disabled expanded={false} toggleLabel="베타 기능 펼치기">
              <TreeNode label="AI 어시스턴트" disabled />
            </TreeNode>
          </Tree>
        </DemoSection>

        <DemoSection
          headingId="selectable-heading"
          title="선택 가능"
          description="tree_link로 행 전체를 클릭 가능하게 만듭니다. is-selected로 현재 선택 항목을 표시합니다."
        >
          <Tree bordered ariaLabel="네비게이션">
            <TreeNode label="문서" expanded link toggleLabel="문서 접기">
              <TreeNode label="시작하기" selected link />
              <TreeNode label="컴포넌트" link />
              <TreeNode label="디자인 토큰" link />
            </TreeNode>
            <TreeNode label="변경 이력" link />
          </Tree>
        </DemoSection>

        <ApiSection headingId="api-props-heading" title="API · Tree Props">
          <ApiTable columns={treePropColumns} rows={treeProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-node-props-heading" title="API · TreeNode Props">
          <ApiTable columns={treeNodePropColumns} rows={treeNodeProps} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-slots-heading" title="API · Tree Slots">
          <ApiTable columns={treeSlotColumns} rows={treeSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="api-node-slots-heading" title="API · TreeNode Slots">
          <ApiTable columns={treeSlotColumns} rows={treeNodeSlots} codeColumn="name" />
        </ApiSection>

        <ApiSection
          headingId="api-classes-heading"
          title="클래스 · 속성"
          description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
        >
          <ApiTable columns={treeClassColumns} rows={treeClasses} codeColumn="name" />
        </ApiSection>

        <ApiSection headingId="tokens-heading" title="디자인 토큰">
          <ApiTable columns={treeTokenColumns} rows={treeTokens} codeColumn="name" />
        </ApiSection>
    </>
  );
}

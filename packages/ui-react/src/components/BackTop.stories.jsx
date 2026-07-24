import React from 'react';
import BackTop from './BackTop.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  backTopClassColumns,
  backTopClasses,
  backTopPropColumns,
  backTopProps,
  backTopSlotColumns,
  backTopSlots,
  backTopTokenColumns,
  backTopTokens,
} from '@doc-data/back-top-api';

const childColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const backTopChildren = [
  { name: 'children', description: '버튼 콘텐츠 (아이콘·텍스트, 기본 슬롯 대체)' },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. Vue의 visibility-height · aria-label은 visibilityHeight · ariaLabel입니다.',
    tables: [{ columns: backTopPropColumns, rows: backTopProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children / Slots',
    description: 'Vue default 슬롯은 React children으로 다룹니다.',
    tables: [
      { columns: backTopSlotColumns, rows: backTopSlots, codeColumn: 'name' },
      { columns: childColumns, rows: backTopChildren, codeColumn: 'name' },
    ],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: backTopClassColumns, rows: backTopClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: backTopTokenColumns, rows: backTopTokens, codeColumn: 'name' }],
  },
];

/** Docs·Canvas 동일 — Controls가 잘못된 target의 BackTop을 추가하지 않도록 */
function backTopDemo(node) {
  return withDocsCanvasRender(node, node);
}

const playgroundArgs = {
  size: 'md',
  color: 'primary',
  label: '',
  ariaLabel: '맨 위로',
  interactive: true,
};

export default {
  title: 'Components/기타/BackTop',
  id: 'components-back-top',
  component: BackTop,
  tags: ['autodocs'],
  argTypes: {
    target: { control: 'text', type: { name: 'string', summary: 'string' } },
    visibilityHeight: { control: 'number', type: { name: 'number', summary: 'number | string' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    color: {
      control: 'select',
      options: ['', 'primary', 'ghost'],
      type: { name: 'enum', summary: "'' | 'primary' | 'ghost'" },
    },
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
    interactive: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          '스크롤 후 페이지·컨테이너 상단으로 이동하는 BackTop 플로팅 버튼입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-playground">
        <div className="back_top_demo-content">
          <p>아래로 스크롤하면 맨 위로 버튼이 표시됩니다. Controls로 size · color · label을 조절하세요.</p>
          <p>상품 설명 · 리뷰 · 배송 안내</p>
          <p>교환·반품 · 문의처</p>
        </div>
      </div>
      <BackTop {...args} target="#back-top-scroll-playground" visibilityHeight={80} />
    </div>
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`data-back-top`과 `data-target`으로 스크롤 영역을 연결합니다. 영역을 일정 이상 스크롤하면 우측 하단에 버튼이 나타납니다.',
      },
      source: {
        code: `import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function BasicExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-basic">
        <div className="back_top_demo-content">
          <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-basic" visibilityHeight={80} />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: backTopDemo(
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-basic">
        <div className="back_top_demo-content">
          <p>상품 상세 페이지입니다. 아래로 스크롤하면 맨 위로 버튼이 표시됩니다.</p>
          <p>무선 이어폰 Pro — 노이즈 캔슬링 · 30시간 재생 · IPX4 방수</p>
          <p>색상: 미드나이트 블랙 · 용량: 단품 · 배송: 내일 도착</p>
          <p>상품 설명 — 40mm 드라이버와 적응형 EQ로 선명한 음질을 제공합니다.</p>
          <p>리뷰 4.8점 (1,240건) · 무료 반품 30일 · A/S 1년 무상</p>
          <p>함께 보면 좋은 상품: 충전 케이스 · 이어팁 세트 · 케이블</p>
          <p>교환·반품 안내 — 미개봉 상품에 한해 7일 이내 신청 가능합니다.</p>
          <p>문의: 고객센터 1588-0000 (평일 09:00–18:00)</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-basic" visibilityHeight={80} />
    </div>,
  ),
};

export const Visibility = {
  name: '표시 임계값',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`visibilityHeight`으로 버튼이 나타나는 스크롤 거리(px)를 지정합니다. 기본값은 400px입니다.',
      },
      source: {
        code: `import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function VisibilityExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div className="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-visibility" visibilityHeight={200} color="primary" />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: backTopDemo(
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-visibility">
        <div className="back_top_demo-content">
          <p>공지사항 목록입니다. 200px 이상 스크롤하면 버튼이 표시됩니다.</p>
          <p>[공지] 3월 정기 점검 안내 — 3/15(토) 02:00–06:00</p>
          <p>[이벤트] 신규 가입 쿠폰 10% 할인 — 3/31까지</p>
          <p>[업데이트] 앱 v2.4.0 배포 — 성능 개선 및 버그 수정</p>
          <p>[안내] 배송 지연 지역 안내 — 강원·제주 일부 지역</p>
          <p>[공지] 개인정보 처리방침 개정 — 4/1 시행</p>
          <p>[이벤트] 봄맞이 세일 — 최대 50% 할인</p>
          <p>[안내] 고객센터 운영 시간 변경 — 공휴일 휴무</p>
        </div>
      </div>
      <BackTop target="#back-top-scroll-visibility" visibilityHeight={200} color="primary" />
    </div>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '`back_top_sm` · `back_top_lg` 클래스로 버튼 크기를 조절합니다.',
      },
      source: {
        code: `import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function SizeExample() {
  return (
    <>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-sm">
          <div className="back_top_demo-content">
            <p>Small 크기 예시입니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-sm" size="sm" visibilityHeight={60} />
      </div>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-lg">
          <div className="back_top_demo-content">
            <p>Large 크기 예시입니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" visibilityHeight={60} />
      </div>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: backTopDemo(
    <>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-sm">
          <div className="back_top_demo-content">
            <p>Small 크기 예시입니다. 스크롤해 보세요.</p>
            <p>1. 소개 — 컴팩트한 플로팅 버튼이 필요한 좁은 레이아웃에 적합합니다.</p>
            <p>2. 사양 — 모바일 사이드 패널·모달 내부 스크롤 영역에 활용합니다.</p>
            <p>3. 참고 — 터치 영역은 최소 44px을 권장합니다.</p>
            <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-sm" size="sm" visibilityHeight={60} />
      </div>
      <div className="back_top_demo-wrap">
        <div className="back_top_demo-scroll" id="back-top-scroll-lg">
          <div className="back_top_demo-content">
            <p>Large 크기 예시입니다. 스크롤해 보세요.</p>
            <p>1. 소개 — 눈에 잘 띄는 큰 버튼이 필요한 긴 문서·대시보드에 적합합니다.</p>
            <p>2. 사양 — 태블릿·데스크톱 뷰에서 접근성을 높입니다.</p>
            <p>3. 참고 — 아이콘만 사용할 때 aria-label을 반드시 지정합니다.</p>
            <p>4. 마무리 — 스크롤 후 맨 위로 이동할 수 있습니다.</p>
          </div>
        </div>
        <BackTop target="#back-top-scroll-lg" size="lg" color="ghost" visibilityHeight={60} />
      </div>
    </>,
  ),
};

export const Custom = {
  name: '커스텀 콘텐츠',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '버튼 안에 아이콘과 텍스트를 함께 넣을 수 있습니다. pill 형태로 자동 확장됩니다.',
      },
      source: {
        code: `import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function CustomExample() {
  return (
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-custom">
        <div className="back_top_demo-content">
          <p>긴 이용 약관 문서입니다.</p>
        </div>
      </div>
      <BackTop
        target="#back-top-scroll-custom"
        color="primary"
        label="TOP"
        visibilityHeight={100}
        style={{
          ['--back-top-offset-bottom']: 'var(--space-md)',
          ['--back-top-offset-right']: 'var(--space-md)',
        }}
      />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: backTopDemo(
    <div className="back_top_demo-wrap">
      <div className="back_top_demo-scroll" id="back-top-scroll-custom">
        <div className="back_top_demo-content">
          <p>긴 이용 약관 문서입니다. 스크롤 후 상단으로 돌아가세요.</p>
          <p>제1조 (목적) — 본 약관은 서비스 이용 조건을 규정합니다.</p>
          <p>제2조 (정의) — 회원, 콘텐츠, 유료 서비스 등의 용어를 정의합니다.</p>
          <p>제3조 (약관의 효력) — 게시일로부터 효력이 발생합니다.</p>
          <p>제4조 (회원 가입) — 가입 신청과 승인 절차를 안내합니다.</p>
          <p>제5조 (회원 탈퇴) — 탈퇴 시 데이터 처리 방침을 따릅니다.</p>
          <p>제6조 (서비스 제공) — 서비스 범위와 중단 사유를 명시합니다.</p>
          <p>제7조 (책임 제한) — 불가항력 등 면책 사유를 규정합니다.</p>
        </div>
      </div>
      <BackTop
        target="#back-top-scroll-custom"
        color="primary"
        label="TOP"
        visibilityHeight={100}
        style={{
          ['--back-top-offset-bottom']: 'var(--space-md)',
          ['--back-top-offset-right']: 'var(--space-md)',
        }}
      />
    </div>,
  ),
};

export const Window = {
  name: '페이지 스크롤',
  parameters: {
    controls: { disable: true },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`target`을 생략하면 window 스크롤을 기준으로 동작합니다. 이 Docs 페이지를 아래로 스크롤하면 우측 하단에 버튼이 나타납니다.',
      },
      source: {
        language: 'tsx',
        code: `import BackTop from '@uxkm/ui-react/components/BackTop.jsx';

export function WindowExample() {
  return (
    <>
      <p style={{ margin: 0, fontSize: 'var(--text-size-sm)', color: 'var(--color-text-muted)' }}>
        페이지를 충분히 스크롤한 뒤 우측 하단 플로팅 버튼을 확인하세요.
      </p>
      <BackTop color="primary" />
    </>
  );
}`,
      },
    },
  },
  render: backTopDemo(
    <div>
      <p
        style={{
          margin: 0,
          fontSize: 'var(--text-size-sm)',
          color: 'var(--color-text-muted)',
        }}
      >
        이 Docs 페이지를 아래로 스크롤하면 우측 하단에 맨 위로 버튼이 나타납니다. 클릭하면 페이지
        최상단으로 이동합니다.
      </p>
      <BackTop color="primary" visibilityHeight={200} />
    </div>,
  ),
};

import React from 'react';
import TypoText from './TypoText.jsx';
import TypoTitle from './TypoTitle.jsx';
import { bindComponent, withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  buttonMarkupExample,
  typoTextPropColumns,
  typoTextProps,
  typoTitlePropColumns,
  typoTitleProps,
  typographyClassColumns,
  typographyClasses,
  typographyTokenColumns,
  typographyTokens,
} from '@doc-data/typography-api';

const typoTitleChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const typoTitleChildren = [
  { name: 'label', description: '제목 텍스트. children으로 대체 가능' },
  { name: 'children', description: '제목 텍스트 (label prop 대체)' },
];

const typoTextChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const typoTextChildren = [
  { name: 'label', description: '텍스트 내용. children으로 대체 가능' },
  {
    name: 'children',
    description:
      '텍스트 내용 (label prop 대체). 중첩 TypoText 등 복합 마크업·인라인 조합에 사용',
  },
];

const apiSections = [
  {
    title: 'API · TypoTitle Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case와 동일한 의미입니다.',
    tables: [{ columns: typoTitlePropColumns, rows: typoTitleProps, codeColumn: 'name' }],
  },
  {
    title: 'API · TypoText Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: html-for → htmlFor)와 동일한 의미입니다.',
    tables: [{ columns: typoTextPropColumns, rows: typoTextProps, codeColumn: 'name' }],
  },
  {
    title: 'API · TypoTitle Children',
    description: 'Vue default 슬롯에 대응하는 React label·children prop입니다.',
    tables: [{ columns: typoTitleChildColumns, rows: typoTitleChildren, codeColumn: 'name' }],
  },
  {
    title: 'API · TypoText Children',
    description: 'Vue default 슬롯에 대응하는 React label·children prop입니다.',
    tables: [{ columns: typoTextChildColumns, rows: typoTextChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: typographyClassColumns, rows: typographyClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: typographyTokenColumns, rows: typographyTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  level: 1,
  color: '값',
  label: '라벨',
};

export default {
  title: 'Components/기본 요소/Typography',
  id: 'components-typography',
  component: TypoTitle,
  subcomponents: { TypoText },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['1', '2', '3', '4', '5'],
      type: { name: 'enum', summary: "'1' | '2' | '3' | '4' | '5'" },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      type: {
        name: 'enum',
        summary: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'",
      },
    },
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '제목, 본문, 강조, 말줄임 등 텍스트 표현을 위한 타이포그래피 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: bindComponent(TypoTitle),
};

export const Title = {
  name: '제목',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'typo_title-1 ~ typo_title-5 클래스로 5단계 제목 스케일을 적용합니다. 시맨틱 heading 태그와 함께 사용합니다.',
      },
      source: {
        code: `import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function TitleExample() {
  return (
    <div className="typo_stack-lg">
      <TypoTitle level={1} label="h1. 제목 레벨 1" />
      <TypoTitle level={2} label="h2. 제목 레벨 2" />
      <TypoTitle level={3} label="h3. 제목 레벨 3" />
      <TypoTitle level={4} label="h4. 제목 레벨 4" />
      <TypoTitle level={5} label="h5. 제목 레벨 5" />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div className="typo_stack-lg">
      <TypoTitle level={1} label="h1. 제목 레벨 1" />
      <TypoTitle level={2} label="h2. 제목 레벨 2" />
      <TypoTitle level={3} label="h3. 제목 레벨 3" />
      <TypoTitle level={4} label="h4. 제목 레벨 4" />
      <TypoTitle level={5} label="h5. 제목 레벨 5" />
    </div>,
  ),
};

export const Text = {
  name: '본문',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '기본 본문은 별도 클래스 없이 p 태그를 사용합니다. 단락 간격이 필요하면 typo_paragraph를 사용합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function TextExample() {
  return (
    <>
      <p>
        기본 본문 텍스트입니다. 인라인으로{' '}
        <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
      </p>
      <div>
        <TypoText
          variant="paragraph"
          label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다."
        />
        <TypoText
          variant="paragraph"
          label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다."
        />
      </div>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <p>
        기본 본문 텍스트입니다. 인라인으로{' '}
        <TypoText tag="span" color="muted" label="보조 설명" />을 함께 쓸 수 있습니다.
      </p>
      <div>
        <TypoText
          variant="paragraph"
          label="typo_paragraph — 첫 번째 단락입니다. 단락 사이에 일정한 간격이 적용됩니다."
        />
        <TypoText
          variant="paragraph"
          label="두 번째 단락입니다. 마지막 단락은 하단 여백이 제거됩니다."
        />
      </div>
    </>,
  ),
};

export const Color = {
  name: '색상 타입',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'color_muted, color_success 등 공통 색상 클래스를 적용합니다. 버튼·배지·알림 등 모든 컴포넌트에서 동일한 클래스명을 사용합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function ColorExample() {
  return (
    <>
      <TypoText color="default" label="기본 텍스트 (Default)" />
      <TypoText color="muted" label="보조 텍스트 (Muted)" />
      <TypoText color="success" label="성공 메시지 (Success)" />
      <TypoText color="warning" label="주의 메시지 (Warning)" />
      <TypoText color="danger" label="오류 메시지 (Danger)" />
      <TypoText color="primary" label="강조 텍스트 (Primary)" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <TypoText color="default" label="기본 텍스트 (Default)" />
      <TypoText color="muted" label="보조 텍스트 (Muted)" />
      <TypoText color="success" label="성공 메시지 (Success)" />
      <TypoText color="warning" label="주의 메시지 (Warning)" />
      <TypoText color="danger" label="오류 메시지 (Danger)" />
      <TypoText color="primary" label="강조 텍스트 (Primary)" />
    </>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'base(0.875rem)는 클래스 없이 기본 적용됩니다. xs, sm, lg, xl만 size_* 클래스를 사용합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function SizeExample() {
  return (
    <>
      <TypoText size="xs" label="Extra Small — 0.75rem" />
      <TypoText size="sm" label="Small — 0.8125rem" />
      <TypoText label="Base — 0.875rem (기본)" />
      <TypoText size="lg" label="Large — 1rem" />
      <TypoText size="xl" label="Extra Large — 1.125rem" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <TypoText size="xs" label="Extra Small — 0.75rem" />
      <TypoText size="sm" label="Small — 0.8125rem" />
      <TypoText label="Base — 0.875rem (기본)" />
      <TypoText size="lg" label="Large — 1rem" />
      <TypoText size="xl" label="Extra Large — 1.125rem" />
    </>,
  ),
};

export const Style = {
  name: '텍스트 스타일',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '강조, 기울임, 밑줄, 취소선, 형광펜, 인라인 코드 등 인라인 스타일을 조합합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function StyleExample() {
  return (
    <>
      <p>
        <TypoText variant="strong" label="굵은 텍스트" />와{' '}
        <TypoText variant="italic" label="기울임 텍스트" />,{' '}
        <TypoText variant="underline" label="밑줄 텍스트" />,{' '}
        <TypoText variant="delete" label="취소선 텍스트" />를 함께 사용할 수 있습니다.
      </p>
      <p>
        <TypoText variant="mark" label="형광펜 강조" />와{' '}
        <TypoText variant="code" label="inline code" /> 표현도 지원합니다.
      </p>
      <p className="color_muted">
        조합 예시: <TypoText variant="strong" color="danger" label="중요 경고" />,{' '}
        <TypoText variant="italic" color="primary" label="강조 설명" />,{' '}
        <TypoText variant="delete" color="muted" label="삭제된 항목" />
      </p>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <p>
        <TypoText variant="strong" label="굵은 텍스트" />와{' '}
        <TypoText variant="italic" label="기울임 텍스트" />,{' '}
        <TypoText variant="underline" label="밑줄 텍스트" />,{' '}
        <TypoText variant="delete" label="취소선 텍스트" />를 함께 사용할 수 있습니다.
      </p>
      <p>
        <TypoText variant="mark" label="형광펜 강조" />와{' '}
        <TypoText variant="code" label="inline code" /> 표현도 지원합니다.
      </p>
      <p className="color_muted">
        조합 예시: <TypoText variant="strong" color="danger" label="중요 경고" />,{' '}
        <TypoText variant="italic" color="primary" label="강조 설명" />,{' '}
        <TypoText variant="delete" color="muted" label="삭제된 항목" />
      </p>
    </>,
  ),
};

export const SubSupSmall = {
  name: '아래첨자 · 위첨자 · 소문자',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'sub · sup · small 시맨틱 태그에 typo_sub · typo_sup · typo_small 클래스를 적용합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function SubSupSmallExample() {
  return (
    <>
      <p>
        화학식 H<TypoText variant="sub" label="2" />O, 수식 x<TypoText variant="sup" label="2" /> + y
        <TypoText variant="sup" label="2" /> = z<TypoText variant="sup" label="2" />처럼 아래·위첨자를
        표현합니다.
      </p>
      <p>
        각주<TypoText variant="sup" label="1" />나 제곱미터 m<TypoText variant="sup" label="2" /> 단위에도
        활용합니다.
      </p>
      <p>
        <TypoText variant="small" label="※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다." />
      </p>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <p>
        화학식 H<TypoText variant="sub" label="2" />O, 수식 x<TypoText variant="sup" label="2" /> + y
        <TypoText variant="sup" label="2" /> = z<TypoText variant="sup" label="2" />처럼 아래·위첨자를
        표현합니다.
      </p>
      <p>
        각주<TypoText variant="sup" label="1" />나 제곱미터 m<TypoText variant="sup" label="2" /> 단위에도
        활용합니다.
      </p>
      <p>
        <TypoText variant="small" label="※ 본 안내는 참고용이며, 법적 효력은 약관을 따릅니다." />
      </p>
    </>,
  ),
};

export const Ellipsis = {
  name: '말줄임',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'text_ellipsis로 1줄, text_ellipsis-2·3으로 여러 줄 말줄임을 적용합니다. 부모에 너비 제한이 필요합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function EllipsisExample() {
  return (
    <div style={{ maxWidth: '320px', width: '100%' }}>
      <TypoText
        ellipsis={1}
        label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet."
      />
      <TypoText
        ellipsis={2}
        label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다."
      />
      <TypoText
        ellipsis={3}
        label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요."
      />
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div style={{ maxWidth: '320px', width: '100%' }}>
      <TypoText
        ellipsis={1}
        label="1줄 말줄임 — 긴 텍스트가 영역을 넘으면 말줄임표로 표시됩니다. Lorem ipsum dolor sit amet."
      />
      <TypoText
        ellipsis={2}
        label="2줄 말줄임 — 두 줄까지 표시한 뒤 넘치는 내용은 말줄임표로 처리합니다. UXKM 가이드는 컴포넌트 문서와 데모를 제공합니다."
      />
      <TypoText
        ellipsis={3}
        label="3줄 말줄임 — 세 줄까지 표시합니다. 디자인 시스템의 타이포그래피는 일관된 위계와 가독성을 유지하는 데 중요한 역할을 합니다. 제목·본문·캡션의 크기와 색상을 체계적으로 정의하세요."
      />
    </div>,
  ),
};

export const Blockquote = {
  name: '인용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'blockquote 태그에 typo_blockquote 클래스를 적용합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function BlockquoteExample() {
  return (
    <TypoText
      variant="blockquote"
      color="muted"
      cite="https://example.com"
      label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
    />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <TypoText
      variant="blockquote"
      color="muted"
      cite="https://example.com"
      label="좋은 타이포그래피는 읽기 쉬운 콘텐츠의 기반입니다. 위계, 대비, 여백을 일관되게 유지하세요."
    />,
  ),
};

export const List = {
  name: '목록',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '본문 prose 목록은 ul · ol에 typo_list · typo_list-ordered 클래스를 적용합니다. UI 리스트(아바타, 인터랙티브 항목 등)는 List 컴포넌트를 사용하세요.',
      },
      source: {
        code: `export function ListExample() {
  return (
    <>
      <ul className="typo_list">
        <li>디자인 토큰 정의</li>
        <li>컴포넌트 문서화</li>
        <li>접근성 검토</li>
      </ul>
      <ol className="typo_list-ordered">
        <li>요구사항 분석</li>
        <li>와이어프레임 작성</li>
        <li>프로토타입 검증</li>
      </ol>
      <p className="form_field-hint">
        용어 설명·구조화된 목록은{' '}
        <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
      </p>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <ul className="typo_list">
        <li>디자인 토큰 정의</li>
        <li>컴포넌트 문서화</li>
        <li>접근성 검토</li>
      </ul>
      <ol className="typo_list-ordered">
        <li>요구사항 분석</li>
        <li>와이어프레임 작성</li>
        <li>프로토타입 검증</li>
      </ol>
      <p className="form_field-hint">
        용어 설명·구조화된 목록은 <a href="list.html#definition-heading">List — 정의 목록</a>을 참고하세요.
      </p>
    </>,
  ),
};

export const TypoLink = {
  name: '링크',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '본문 내 하이퍼링크에 typo_link 클래스를 사용합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

export function TypoLinkExample() {
  return (
    <TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.{' '}
      <TypoText tag="span" color="muted" label="또는" />{' '}
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <TypoText variant="paragraph">
      자세한 내용은 <TypoText tag="a" variant="link" href="#" label="가이드 문서" />를 참고하세요.{' '}
      <TypoText tag="span" color="muted" label="또는" />{' '}
      <TypoText tag="a" variant="link" href="#" size="sm" label="작은 링크" />로 이동할 수 있습니다.
    </TypoText>,
  ),
};

export const Lead = {
  name: '리드 · 캡션 · 레이블',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'typo_lead · typo_caption · typo_label · typo_overline로 보조 텍스트 위계를 표현합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';
import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function LeadExample() {
  return (
    <div style={{ maxWidth: '32rem', width: '100%' }}>
      <div className="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle level={3} label="HTML Components" />
        <TypoText
          variant="lead"
          label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다."
        />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div>
        <TypoText variant="label" htmlFor="demo-email" label="이메일" />
        <TypoText
          variant="caption"
          style={{ marginTop: '0.25rem' }}
          label="가입 시 사용한 이메일 주소를 입력하세요."
        />
      </div>
    </div>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <div style={{ maxWidth: '32rem', width: '100%' }}>
      <div className="typo_stack-lg">
        <TypoText variant="overline" label="가이드 소개" />
        <TypoTitle level={3} label="HTML Components" />
        <TypoText
          variant="lead"
          label="순수 HTML과 SCSS로 구성된 UI 컴포넌트 가이드입니다. 접근성과 일관성을 기준으로 설계되었습니다."
        />
        <TypoText variant="caption" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div>
        <TypoText variant="label" htmlFor="demo-email" label="이메일" />
        <TypoText
          variant="caption"
          style={{ marginTop: '0.25rem' }}
          label="가입 시 사용한 이메일 주소를 입력하세요."
        />
      </div>
    </div>,
  ),
};

export const TitleColor = {
  name: '제목 색상',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '제목에도 공통 color_* 클래스를 조합할 수 있습니다.',
      },
      source: {
        code: `import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function TitleColorExample() {
  return (
    <>
      <TypoTitle level={3} color="primary" label="Primary 제목" />
      <TypoTitle level={3} color="success" label="Success 제목" />
      <TypoTitle level={3} color="danger" label="Danger 제목" />
      <TypoTitle level={3} color="muted" label="Muted 제목" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <TypoTitle level={3} color="primary" label="Primary 제목" />
      <TypoTitle level={3} color="success" label="Success 제목" />
      <TypoTitle level={3} color="danger" label="Danger 제목" />
      <TypoTitle level={3} color="muted" label="Muted 제목" />
    </>,
  ),
};

export const Kbd = {
  name: '키보드 · 코드 블록',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'typo_kbd · typo_pre · typo_code로 단축키와 코드를 표시합니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';

const buttonMarkupExample = \`<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>\`;

export function KbdExample() {
  return (
    <>
      <p>
        저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요. 검색은{' '}
        <TypoText tag="kbd" variant="kbd" label="Ctrl" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="K" />입니다.
      </p>
      <TypoText variant="pre">
        <code>{buttonMarkupExample}</code>
      </TypoText>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <p>
        저장하려면 <TypoText tag="kbd" variant="kbd" label="⌘" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="S" />를 누르세요. 검색은{' '}
        <TypoText tag="kbd" variant="kbd" label="Ctrl" /> +{' '}
        <TypoText tag="kbd" variant="kbd" label="K" />입니다.
      </p>
      <TypoText variant="pre">
        <code>{buttonMarkupExample}</code>
      </TypoText>
    </>,
  ),
};

export const NestedList = {
  name: '중첩 목록',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'typo_list · typo_list-ordered에 하위 ul · ol을 중첩할 수 있습니다.',
      },
      source: {
        code: `export function NestedListExample() {
  return (
    <ul className="typo_list">
      <li>
        레이아웃
        <ul className="typo_list">
          <li>Container</li>
          <li>Grid</li>
        </ul>
      </li>
      <li>
        기본 요소
        <ul className="typo_list">
          <li>Button</li>
          <li>Typography</li>
        </ul>
      </li>
    </ul>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <ul className="typo_list">
      <li>
        레이아웃
        <ul className="typo_list">
          <li>Container</li>
          <li>Grid</li>
        </ul>
      </li>
      <li>
        기본 요소
        <ul className="typo_list">
          <li>Button</li>
          <li>Typography</li>
        </ul>
      </li>
    </ul>,
  ),
};

export const Stack = {
  name: '제목 + 본문 조합',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'typo_stack, typo_stack-lg로 제목과 본문을 묶어 간격을 맞춥니다.',
      },
      source: {
        code: `import TypoText from '@uxkm/ui-react/components/TypoText.jsx';
import TypoTitle from '@uxkm/ui-react/components/TypoTitle.jsx';

export function StackExample() {
  return (
    <>
      <div className="typo_stack-lg" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={3} label="섹션 제목" />
        <TypoText
          variant="paragraph"
          label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다."
        />
        <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div className="typo_stack" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={4} label="작은 스택" />
        <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
      </div>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <div className="typo_stack-lg" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={3} label="섹션 제목" />
        <TypoText
          variant="paragraph"
          label="typo_stack-lg는 제목과 본문 사이 간격을 넓게 유지합니다. 카드 헤더, 모달 제목, 폼 섹션 등에 활용합니다."
        />
        <TypoText tag="p" color="muted" size="sm" label="마지막 업데이트: 2026-06-24" />
      </div>
      <div className="typo_stack" style={{ maxWidth: '28rem' }}>
        <TypoTitle level={4} label="작은 스택" />
        <TypoText tag="p" color="muted" label="typo_stack은 좁은 간격으로 제목·설명을 묶습니다." />
      </div>
    </>,
  ),
};

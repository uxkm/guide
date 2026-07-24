import React from 'react';
import Button from './Button.jsx';
import FormLayout from './FormLayout.jsx';
import Grid from './Grid.jsx';
import Input from './Input.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  formLayoutClassColumns,
  formLayoutClasses,
  formLayoutPropColumns,
  formLayoutProps,
  formLayoutTokenColumns,
  formLayoutTokens,
} from '@doc-data/form-layout-api';

const formLayoutChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const formLayoutChildren = [
  {
    name: 'children',
    description: 'form_field · form_actions 등 폼 콘텐츠 (Vue default 슬롯 대응)',
  },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: label-align-start, label-width)와 동일한 의미입니다.',
    tables: [{ columns: formLayoutPropColumns, rows: formLayoutProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯에 대응하는 React children입니다.',
    tables: [{ columns: formLayoutChildColumns, rows: formLayoutChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: formLayoutClassColumns, rows: formLayoutClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: formLayoutTokenColumns, rows: formLayoutTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  layout: 'vertical',
  fit: false,
  compact: false,
  labelAlignStart: false,
  labelWidth: '',
  tag: 'form',
};

function PlaygroundFields({ args }) {
  return (
    <FormLayout {...args} noValidate>
      <div className="form_field">
        <label className="form_field-label" htmlFor="pg-input">
          이름
        </label>
        <Input id="pg-input" placeholder="입력" />
      </div>
      <div className="form_actions">
        <Button type="submit" variant="filled" color="primary" label="제출" />
      </div>
    </FormLayout>
  );
}

export default {
  title: 'Components/폼/FormLayout',
  id: 'components-form-layout',
  component: FormLayout,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
      type: { name: 'enum', summary: "'vertical' | 'horizontal' | 'inline'" },
    },
    fit: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    compact: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    labelAlignStart: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    labelWidth: {
      control: 'select',
      options: ['', 'sm', 'lg'],
      labels: { '': '기본', sm: 'sm', lg: 'lg' },
      type: { name: 'enum', summary: "'sm' | 'lg'" },
    },
    tag: {
      control: 'select',
      options: ['form', 'div'],
      type: { name: 'enum', summary: "'form' | 'div'" },
    },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component:
          'form_field · form_actions를 세로·가로·인라인으로 배치하는 폼 레이아웃 래퍼입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args) => <PlaygroundFields args={args} />,
};

export const Vertical = {
  name: '세로',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '레이블이 입력 위에 오는 기본 레이아웃입니다. form_vertical을 명시하거나 form_field만 나열해도 동일하게 동작합니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function VerticalExample() {
  return (
    <FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-name">
          이름
        </label>
        <Input id="fl-name" placeholder="이름을 입력하세요" />
        <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-email">
          이메일
        </label>
        <Input id="fl-email" type="email" placeholder="name@example.com" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-role">
          역할
        </label>
        <select id="fl-role" className="input" defaultValue="">
          <option value="">선택하세요</option>
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </select>
      </div>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-name">
          이름
        </label>
        <Input id="fl-name" placeholder="이름을 입력하세요" />
        <p className="form_field-hint">2~20자 이내로 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-email">
          이메일
        </label>
        <Input id="fl-email" type="email" placeholder="name@example.com" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-role">
          역할
        </label>
        <select id="fl-role" className="input" defaultValue="">
          <option value="">선택하세요</option>
          <option>관리자</option>
          <option>편집자</option>
          <option>뷰어</option>
        </select>
      </div>
    </FormLayout>,
  ),
};

export const Horizontal = {
  name: '가로',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '레이블이 왼쪽, 입력이 오른쪽에 배치됩니다. 레이블은 기본적으로 오른쪽 정렬됩니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function HorizontalExample() {
  return (
    <FormLayout layout="horizontal">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-name">
          이름
        </label>
        <Input id="fl-h-name" placeholder="이름" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-email">
          이메일
        </label>
        <Input id="fl-h-email" type="email" placeholder="name@example.com" />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-bio">
          소개
        </label>
        <textarea id="fl-h-bio" className="textarea" placeholder="간단한 자기소개" />
      </div>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <FormLayout layout="horizontal">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-name">
          이름
        </label>
        <Input id="fl-h-name" placeholder="이름" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-email">
          이메일
        </label>
        <Input id="fl-h-email" type="email" placeholder="name@example.com" />
        <p className="form_field-hint">업무용 이메일을 입력해 주세요.</p>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-h-bio">
          소개
        </label>
        <textarea id="fl-h-bio" className="textarea" placeholder="간단한 자기소개" />
      </div>
    </FormLayout>,
  ),
};

export const HorizontalAlign = {
  name: '가로 — 레이블 정렬·너비',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'form_label-align-start로 레이블을 왼쪽 정렬하고, form_label-width-sm · form_label-width-lg로 레이블 너비를 조절합니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function HorizontalAlignExample() {
  return (
    <>
      <FormLayout layout="horizontal" labelAlignStart labelWidth="sm">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hs-city">
            도시
          </label>
          <Input id="fl-hs-city" placeholder="서울" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" labelWidth="lg">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hl-company">
            회사명
          </label>
          <Input id="fl-hl-company" placeholder="UXKM" />
        </div>
      </FormLayout>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <FormLayout layout="horizontal" labelAlignStart labelWidth="sm">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hs-city">
            도시
          </label>
          <Input id="fl-hs-city" placeholder="서울" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hs-zip">
            우편번호
          </label>
          <Input id="fl-hs-zip" placeholder="00000" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" labelWidth="lg">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hl-company">
            회사명
          </label>
          <Input id="fl-hl-company" placeholder="UXKM" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-hl-dept">
            부서
          </label>
          <Input id="fl-hl-dept" placeholder="디자인팀" />
        </div>
      </FormLayout>
    </>,
  ),
};

export const Inline = {
  name: '인라인',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '검색·필터처럼 필드를 한 줄에 나란히 배치합니다. 공간이 부족하면 자동으로 줄바꿈됩니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function InlineExample() {
  return (
    <FormLayout layout="inline">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-keyword">
          키워드
        </label>
        <Input id="fl-i-keyword" type="search" placeholder="검색어" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="검색" />
        <Button variant="ghost" type="reset" label="초기화" />
      </div>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <FormLayout layout="inline">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-keyword">
          키워드
        </label>
        <Input id="fl-i-keyword" type="search" placeholder="검색어" />
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-status">
          상태
        </label>
        <select id="fl-i-status" className="input">
          <option>전체</option>
          <option>활성</option>
          <option>비활성</option>
        </select>
      </div>
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-i-date">
          기간
        </label>
        <Input id="fl-i-date" type="date" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="검색" />
        <Button variant="ghost" type="reset" label="초기화" />
      </div>
    </FormLayout>,
  ),
};

export const GridDemo = {
  name: '그리드',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'Grid 유틸리티와 조합해 2열·3열 폼을 구성합니다. grid_item-span-6이면 12열 기준 한 행에 2개씩 배치됩니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Grid from '@uxkm/ui-react/components/Grid.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function GridExample() {
  return (
    <FormLayout layout="vertical">
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-first">
            이름
          </label>
          <Input id="fl-g-first" placeholder="이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-last">
            성
          </label>
          <Input id="fl-g-last" placeholder="성" />
        </div>
        <div className="form_field grid_col-span-12">
          <label className="form_field-label" htmlFor="fl-g-address">
            주소
          </label>
          <Input id="fl-g-address" placeholder="도로명 주소" />
        </div>
      </Grid>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <FormLayout layout="vertical">
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-first">
            이름
          </label>
          <Input id="fl-g-first" placeholder="이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-last">
            성
          </label>
          <Input id="fl-g-last" placeholder="성" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-phone">
            전화번호
          </label>
          <Input id="fl-g-phone" type="tel" placeholder="010-0000-0000" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-g-mobile">
            휴대폰
          </label>
          <Input id="fl-g-mobile" type="tel" placeholder="010-0000-0000" />
        </div>
        <div className="form_field grid_col-span-12">
          <label className="form_field-label" htmlFor="fl-g-address">
            주소
          </label>
          <Input id="fl-g-address" placeholder="도로명 주소" />
        </div>
      </Grid>
    </FormLayout>,
  ),
};

export const Width = {
  name: '너비',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '폼 필드는 기본적으로 부모 너비 100%를 사용합니다. form_fit을 사용하면 --input-max-width(320px)로 제한할 수 있습니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function WidthExample() {
  return (
    <>
      <FormLayout layout="vertical">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-default">
            기본 너비
          </label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-fit">
            제한 너비
          </label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <FormLayout layout="vertical">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-default">
            기본 너비
          </label>
          <Input id="fl-w-default" placeholder="부모 100%" />
        </div>
      </FormLayout>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-fit">
            제한 너비
          </label>
          <Input id="fl-w-fit" placeholder="form_fit — 최대 320px" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-w-h-full">
            가로 레이아웃
          </label>
          <Input id="fl-w-h-full" placeholder="입력 열이 남은 공간을 채움" />
        </div>
      </FormLayout>
    </>,
  ),
};

export const Actions = {
  name: '액션 영역',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'form_actions로 제출·취소 버튼을 그룹화합니다. 가로 레이아웃에서는 레이블 열 너비만큼 들여쓰기됩니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ActionsExample() {
  return (
    <FormLayout layout="vertical">
      <div className="form_field">
        <label className="form_field-label" htmlFor="fl-a-title">
          제목
        </label>
        <Input id="fl-a-title" placeholder="제목" />
      </div>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="저장" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <FormLayout layout="vertical">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-a-title">
            제목
          </label>
          <Input id="fl-a-title" placeholder="제목" />
        </div>
        <div className="form_actions">
          <Button variant="filled" color="primary" type="submit" label="저장" />
          <Button variant="ghost" type="button" label="취소" />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal">
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-a2-title">
            제목
          </label>
          <Input id="fl-a2-title" placeholder="제목" />
        </div>
        <div className="form_actions">
          <Button variant="filled" color="primary" type="submit" label="저장" />
          <Button variant="ghost" type="button" label="취소" />
        </div>
      </FormLayout>
    </>,
  ),
};

export const Example = {
  name: '전체 예시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '세로 레이아웃 + 그리드 + 액션을 조합한 회원 정보 폼입니다.',
      },
      source: {
        code: `import Button from '@uxkm/ui-react/components/Button.jsx';
import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Grid from '@uxkm/ui-react/components/Grid.jsx';
import Input from '@uxkm/ui-react/components/Input.jsx';

export function ExampleForm() {
  return (
    <FormLayout layout="vertical" compact>
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-id">
            아이디
          </label>
          <Input id="fl-ex-id" placeholder="아이디" />
        </div>
        {/* … */}
      </Grid>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="가입하기" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <FormLayout layout="vertical" compact>
      <Grid itemSpan={6}>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-id">
            아이디
          </label>
          <Input id="fl-ex-id" placeholder="아이디" />
          <p className="form_field-hint">영문·숫자 4~16자</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-pw">
            비밀번호
          </label>
          <Input id="fl-ex-pw" type="password" placeholder="비밀번호" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-name">
            이름
          </label>
          <Input id="fl-ex-name" placeholder="이름" />
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="fl-ex-email">
            이메일
          </label>
          <Input id="fl-ex-email" type="email" placeholder="name@example.com" />
        </div>
        <div className="form_field grid_col-span-12">
          <label className="form_field-label" htmlFor="fl-ex-memo">
            메모
          </label>
          <textarea
            id="fl-ex-memo"
            className="textarea"
            rows={3}
            placeholder="추가 정보"
          />
        </div>
      </Grid>
      <div className="form_actions">
        <Button variant="filled" color="primary" type="submit" label="가입하기" />
        <Button variant="ghost" type="button" label="취소" />
      </div>
    </FormLayout>,
  ),
};

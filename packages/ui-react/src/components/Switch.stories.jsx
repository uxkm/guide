import React from 'react';
import FormLayout from './FormLayout.jsx';
import Switch from './Switch.jsx';
import { withDocsCanvasRender } from '../storybook/story-renders.jsx';
import {
  switchClassColumns,
  switchClasses,
  switchPropColumns,
  switchProps,
  switchTokenColumns,
  switchTokens,
} from '@doc-data/switch-api';

const switchChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

const switchChildren = [
  { name: 'label', description: '라벨 텍스트. children으로 대체 가능' },
  {
    name: 'children',
    description:
      '라벨 텍스트 (label prop 대체, Vue default 슬롯 대응). switch_content · switch_hint 조합 가능',
  },
];

const apiSections = [
  {
    title: 'API · Props',
    description:
      'React에서는 camelCase prop을 사용합니다. HTML·Vue 문서의 kebab-case(예: label-end, aria-label)와 동일한 의미입니다.',
    tables: [{ columns: switchPropColumns, rows: switchProps, codeColumn: 'name' }],
  },
  {
    title: 'API · Children',
    description: 'Vue default 슬롯에 대응하는 React label·children prop입니다.',
    tables: [{ columns: switchChildColumns, rows: switchChildren, codeColumn: 'name' }],
  },
  {
    title: '클래스 · 속성',
    description:
      'React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.',
    tables: [{ columns: switchClassColumns, rows: switchClasses, codeColumn: 'name' }],
  },
  {
    title: '디자인 토큰',
    tables: [{ columns: switchTokenColumns, rows: switchTokens, codeColumn: 'name' }],
  },
];

const playgroundArgs = {
  label: '라벨',
  checked: false,
  disabled: false,
  labelEnd: false,
  size: 'md',
  ariaLabel: '접근성 라벨',
};

export default {
  title: 'Components/폼/Switch',
  id: 'components-switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
    checked: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    labelEnd: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    ariaLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '켜짐·꺼짐을 전환하는 Switch 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args, { updateArgs }) => (
    <Switch
      {...args}
      onChange={(event) => updateArgs({ checked: event.target.checked })}
    />
  ),
};

export const Type = {
  name: '유형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '기본은 `switch_control` → `switch_label` 순서입니다. `switch_label-end`는 레이블 → 스위치 순서이며, 설정 화면에서 자주 사용합니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function TypeExample() {
  return (
    <>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch checked label="기본 — switch" />
      <Switch labelEnd checked label="레이블 뒤 — switch_label-end" />
    </>,
  ),
};

export const LabelEnd = {
  name: '레이블 뒤',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`switch_label-end`는 `switch_label` → `switch_control` 순으로 마크업합니다. 전체 너비가 필요하면 `switch_block` 또는 `switch_group_block`을 추가합니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function LabelEndExample() {
  return (
    <>
      <Switch labelEnd checked label="푸시 알림 받기" />
      <Switch labelEnd>
        <span className="switch_content">
          <span className="switch_label">마케팅 정보 수신</span>
          <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch labelEnd checked label="이메일 알림" />
        <Switch labelEnd checked label="푸시 알림" />
        <Switch labelEnd label="SMS 알림" />
      </fieldset>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch labelEnd checked label="푸시 알림 받기" />
      <Switch labelEnd>
        <span className="switch_content">
          <span className="switch_label">마케팅 정보 수신</span>
          <span className="switch_hint">이벤트·할인 소식을 이메일로 받습니다.</span>
        </span>
      </Switch>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">알림 설정 — switch_group_block</legend>
        <Switch labelEnd checked label="이메일 알림" />
        <Switch labelEnd checked label="푸시 알림" />
        <Switch labelEnd label="SMS 알림" />
      </fieldset>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>,
  ),
};

export const Basic = {
  name: '기본',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '레이블과 보조 설명(switch_hint)을 함께 사용할 수 있습니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function BasicExample() {
  return (
    <>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch checked label="다크 모드" />
      <Switch label="자동 저장" />
    </>,
  ),
};

export const Standalone = {
  name: '단독 사용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '레이블 없이 스위치만 사용할 수 있습니다. `aria-label`로 접근 가능한 이름을 지정합니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function StandaloneExample() {
  return (
    <>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch ariaLabel="기능 켜기" />
      <Switch checked ariaLabel="기능 끄기" />
      <Switch disabled ariaLabel="비활성" />
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
        story: 'switch_sm · switch(기본) · switch_lg로 트랙·텍스트 크기를 조절합니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function SizeExample() {
  return (
    <>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch labelEnd size="sm" checked label="Small — switch_sm" />
      <Switch labelEnd checked label="Medium — 기본" />
      <Switch labelEnd size="lg" checked label="Large — switch_lg" />
    </>,
  ),
};

export const Width = {
  name: '너비',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '기본은 인라인(콘텐츠) 너비입니다. switch_block · switch_group_block으로 전체 너비를 사용합니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function WidthExample() {
  return (
    <>
      <Switch labelEnd checked label="기본 — 인라인 너비" />
      <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">switch_group_block</legend>
        <Switch labelEnd checked label="Wi-Fi" />
        <Switch labelEnd label="블루투스" />
      </fieldset>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch labelEnd checked label="기본 — 인라인 너비" />
      <Switch labelEnd className="switch_block" checked label="switch_block — 전체 너비" />
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 360, width: '100%' }}
      >
        <legend className="switch_group-legend">switch_group_block</legend>
        <Switch labelEnd checked label="Wi-Fi" />
        <Switch labelEnd label="블루투스" />
      </fieldset>
    </>,
  ),
};

export const Color = {
  name: '색상',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          'color_primary(기본) · color_success · color_danger · color_warning으로 켜짐 색을 지정합니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function ColorExample() {
  return (
    <>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch className="color_primary" labelEnd checked label="Primary" />
      <Switch className="color_success" labelEnd checked label="Success" />
      <Switch className="color_danger" labelEnd checked label="Danger" />
      <Switch className="color_warning" labelEnd checked label="Warning" />
    </>,
  ),
};

export const State = {
  name: '상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: '켜짐·꺼짐·비활성·오류(is-error) 상태를 지원합니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function StateExample() {
  return (
    <>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Switch labelEnd label="꺼짐" />
      <Switch labelEnd checked label="켜짐" />
      <Switch labelEnd disabled label="비활성" />
      <Switch labelEnd checked disabled label="켜짐 (비활성)" />
    </>,
  ),
};

export const Group = {
  name: '그룹',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'switch_group으로 관련 스위치를 묶습니다. switch_group_compact로 간격을 줄입니다.',
      },
      source: {
        code: `import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function GroupExample() {
  return (
    <>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">개인정보 설정</legend>
        <Switch labelEnd checked>
          <span className="switch_content">
            <span className="switch_label">프로필 공개</span>
            <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch labelEnd>
          <span className="switch_content">
            <span className="switch_label">활동 기록 표시</span>
            <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch labelEnd checked label="검색 허용" />
      </fieldset>
      <fieldset
        className="switch_group switch_group_block switch_group_compact"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch labelEnd label="고대비 모드" />
        <Switch labelEnd label="애니메이션 줄이기" />
      </fieldset>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <fieldset
        className="switch_group switch_group_block"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">개인정보 설정</legend>
        <Switch labelEnd checked>
          <span className="switch_content">
            <span className="switch_label">프로필 공개</span>
            <span className="switch_hint">다른 사용자가 내 프로필을 볼 수 있습니다.</span>
          </span>
        </Switch>
        <Switch labelEnd>
          <span className="switch_content">
            <span className="switch_label">활동 기록 표시</span>
            <span className="switch_hint">최근 활동이 타임라인에 노출됩니다.</span>
          </span>
        </Switch>
        <Switch labelEnd checked label="검색 허용" />
      </fieldset>
      <fieldset
        className="switch_group switch_group_block switch_group_compact"
        style={{ maxWidth: 400, width: '100%' }}
      >
        <legend className="switch_group-legend">접근성 — switch_group_compact</legend>
        <Switch labelEnd label="고대비 모드" />
        <Switch labelEnd label="애니메이션 줄이기" />
      </fieldset>
    </>,
  ),
};

export const Form = {
  name: '폼 레이아웃',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story: 'form_vertical · form_horizontal과 함께 사용합니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/ui-react/components/FormLayout.jsx';
import Switch from '@uxkm/ui-react/components/Switch.jsx';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-vertical-label">
            알림
          </span>
          <fieldset
            className="switch_group switch_group_block"
            aria-labelledby="switch-form-vertical-label"
          >
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-horizontal-label">
            자동 저장
          </span>
          <Switch
            labelEnd
            checked
            label="편집 내용 자동 저장"
            aria-labelledby="switch-form-horizontal-label"
          />
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
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-vertical-label">
            알림
          </span>
          <fieldset
            className="switch_group switch_group_block"
            aria-labelledby="switch-form-vertical-label"
          >
            <Switch labelEnd checked label="이메일 알림" />
            <Switch labelEnd label="푸시 알림" />
          </fieldset>
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <span className="form_field-label" id="switch-form-horizontal-label">
            자동 저장
          </span>
          <Switch
            labelEnd
            checked
            label="편집 내용 자동 저장"
            aria-labelledby="switch-form-horizontal-label"
          />
        </div>
      </FormLayout>
    </>,
  ),
};

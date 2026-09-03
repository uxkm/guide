// @ts-nocheck
import { rateApiSections as apiSections } from './rateApiSections.ts';
import {
  booleanControlArg,
  defaultValueNumberArg,
  hiddenArgTypes,
  numberControlArg,
  stringControlArg,
} from './shared/storyArgTypes';
import FormLayout from '../../react/src/components/form/FormLayout/FormLayout.jsx';
import Rate from '../../react/src/components/form/Rate/Rate.jsx';

const withDocsCanvasRender = (content) => () => <div className="demo-stack">{content}</div>;

function ratePropsFromArgs(args) {
  const count = typeof args.count === 'number' && args.count > 0 ? args.count : 5;
  const value = typeof args.value === 'number' ? args.value : undefined;
  return {
    size: args.size,
    count,
    allowHalf: args.allowHalf === true,
    clearable: args.clearable === true,
    readOnly: args.readonly === true,
    disabled: args.disabled === true,
    ripple: args.ripple !== false,
    legend: typeof args.legend === 'string' ? args.legend : undefined,
    name: typeof args.name === 'string' && args.name ? args.name : 'rate-playground',
    ...(value != null ? { value } : {}),
  };
}

function RatePlayground({ args, updateArgs }) {
  return (
    <Rate
      {...ratePropsFromArgs(args)}
      onChange={(next) => updateArgs?.({ value: next ?? 0 })}
    />
  );
}

const rateControlKeys = [
  'size',
  'value',
  'count',
  'legend',
  'name',
  'allowHalf',
  'clearable',
  'readonly',
  'disabled',
  'ripple',
] as const;

export default {
  title: '폼/Rate',
  id: 'components-rate',
  component: Rate,
  tags: ['autodocs'],
  args: {
    value: 1,
    count: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    disabled: false,
    size: 'md',
    legend: '값',
    name: 'rate-playground',
    ripple: true,
  },
  argTypes: {
    ...hiddenArgTypes,
    value: numberControlArg,
    count: {
      ...numberControlArg,
      description: '표시할 별 개수',
    },
    allowHalf: booleanControlArg,
    clearable: booleanControlArg,
    readonly: booleanControlArg,
    disabled: booleanControlArg,
    ripple: booleanControlArg,
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: 'string',
    },
    legend: stringControlArg,
    name: stringControlArg,
    defaultValue: defaultValueNumberArg,
    readOnly: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  parameters: {
    layout: 'padded',
    controls: { include: [...rateControlKeys] },
    apiSections,
    docs: {
      extractArgTypes: () => ({}),
      description: {
        component: '별점으로 평가·표시하는 Rate 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  name: 'Playground',
  render: (args, { updateArgs }) => (
    <RatePlayground args={args} updateArgs={updateArgs} />
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
          '접근 가능한 이름 지정 방식별 예시입니다. `legend` · `aria-labelledby` · `aria-label`을 상황에 맞게 사용합니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function TypeExample() {
  return (
    <>
      <Rate legend="legend — 상품 만족도" value={3} name="rate-type-legend" />
      <Rate value={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate
        legend="aria-label — 단독"
        name="rate-type-aria"
        aria-label="별점 5점 만점"
      />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Rate legend="legend — 상품 만족도" value={3} name="rate-type-legend" />
      <Rate value={4} name="rate-type-labelledby" legend="aria-labelledby — 서비스 평가" />
      <Rate legend="aria-label — 단독" name="rate-type-aria" aria-label="별점 5점 만점" />
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
        story:
          'rate_stars 안에 rate_star 레이블을 배치합니다. 같은 name의 radio로 단일 값을 선택합니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function BasicExample() {
  return <Rate legend="배송 속도" value={3} name="rate-basic" />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(<Rate legend="배송 속도" value={3} name="rate-basic" />),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'rate_sm · rate(기본) · rate_lg로 별 크기를 조절합니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function SizeExample() {
  return (
    <>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Rate size="sm" legend="Small — rate_sm" value={3} name="rate-size-sm" />
      <Rate legend="Medium — 기본" value={3} name="rate-size-md" />
      <Rate size="lg" legend="Large — rate_lg" value={3} name="rate-size-lg" />
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
          '기본은 warning(별색)입니다. color_primary · color_success · color_danger · color_warning으로 채움 색을 지정합니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function ColorExample() {
  return (
    <>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Rate className="color_primary" legend="Primary" value={4} name="rate-color-primary" />
      <Rate className="color_success" legend="Success" value={5} name="rate-color-success" />
      <Rate className="color_danger" legend="Danger" value={2} name="rate-color-danger" />
    </>,
  ),
};

export const Half = {
  name: '반별',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`rate_allow-half`를 추가하면 별 왼쪽 절반 클릭으로 0.5 단위 선택이 가능합니다. 각 별에 `rate_input-half`를 배치합니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function HalfExample() {
  return (
    <>
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
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
      <Rate allowHalf legend="정밀 평가 — rate_allow-half" value={3.5} name="rate-half" />
      <p className="rate_hint">
        별 왼쪽을 클릭하면 반별, 오른쪽을 클릭하면 정수 점수가 선택됩니다.
      </p>
    </>,
  ),
};

export const Clear = {
  name: '선택 해제',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '`rate_clearable`을 추가하면 초기화 버튼으로 값을 지울 수 있습니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function ClearExample() {
  return <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Rate clearable legend="만족도 — rate_clearable" value={4} name="rate-clear" />,
  ),
};

export const Readonly = {
  name: '읽기 전용',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '`is-readonly`로 표시 전용 별점을 렌더합니다. 평균 평점·리뷰 요약에 사용합니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function ReadonlyExample() {
  return (
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Rate readonly allowHalf value={4.5} />
      <Rate readonly size="sm" value={2} />
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
        story: '비활성·오류(is-error) 상태를 지원합니다.',
      },
      source: {
        code: `import Rate from '@uxkm/react/rate';

export function StateExample() {
  return (
    <>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Rate disabled legend="비활성" value={3} name="rate-state-disabled" />
      <Rate className="is-error" legend="오류 — is-error" name="rate-state-error" />
      <p className="form_field-error">별점을 선택해 주세요.</p>
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
        story: 'form_field · form_vertical과 함께 사용합니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/react/form-layout';
import Rate from '@uxkm/react/rate';

export function FormExample() {
  return (
    <FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <FormLayout layout="vertical" fit>
      <div className="form_field">
        <span className="form_field-label" id="rate-form-label">
          상품 만족도
        </span>
        <Rate name="rate-form" aria-labelledby="rate-form-label" />
        <p className="form_field-hint">1~5점 사이로 평가해 주세요.</p>
      </div>
    </FormLayout>,
  ),
};


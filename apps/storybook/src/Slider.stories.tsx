// @ts-nocheck
import React from 'react';
import { sliderApiSections as apiSections } from './sliderApiSections.ts';
import { defaultValueNumberArg, hiddenArgTypes } from './shared/storyArgTypes';
import FormLayout from '../../react/src/components/form/FormLayout/FormLayout.jsx';
import Slider from '../../react/src/components/form/Slider/Slider.jsx';
const withDocsCanvasRender = (content) => (args, { updateArgs }) => {
  const patch = (node) => {
    if (!React.isValidElement(node)) return node;
    if (node.type === Slider) {
      return React.cloneElement(node, {
        ...node.props,
        ...args,
        onChange: (value) => {
          node.props.onChange?.(value);
          updateArgs?.({ value });
        },
      });
    }
    if (node.props?.children) {
      return React.cloneElement(node, {}, React.Children.map(node.props.children, patch));
    }
    return node;
  };
  return <div className="demo-stack">{patch(content)}</div>;
};
const playgroundArgs = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  vertical: false,
  label: '라벨',
  showValue: false,
  stepper: false,
  stepperAlways: false,
  valueSuffix: '',
  hint: '',
  decreaseLabel: '',
  increaseLabel: '',
  size: 'md',
  ripple: true,
  className: '',
};

export default {
  title: '폼/Slider',
  id: 'components-slider',
  component: Slider,
  tags: ['autodocs'],
  args: { ...playgroundArgs },
  argTypes: {
    ...hiddenArgTypes,
    min: { control: 'number', type: { name: 'number', summary: 'number' } },
    max: { control: 'number', type: { name: 'number', summary: 'number' } },
    value: { control: 'number', type: { name: 'number', summary: 'number' } },
    step: { control: 'number', type: { name: 'number', summary: 'number' } },
    disabled: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    vertical: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    label: { control: 'text', type: { name: 'string', summary: 'string' } },
    showValue: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    stepper: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    stepperAlways: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    valueSuffix: { control: 'text', type: { name: 'string', summary: 'string' } },
    hint: { control: 'text', type: { name: 'string', summary: 'string' } },
    decreaseLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
    increaseLabel: { control: 'text', type: { name: 'string', summary: 'string' } },
    ripple: { control: 'boolean', type: { name: 'boolean', summary: 'boolean' } },
    className: { control: 'text', type: { name: 'string', summary: 'string' } },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      type: { name: 'enum', summary: "'sm' | 'md' | 'lg'" },
    },
    defaultValue: defaultValueNumberArg,
    id: { control: 'text', type: { name: 'string', summary: 'string' } },
    onChange: { table: { disable: true } },
  },
  parameters: {
    controls: { disable: false },
    layout: 'padded',
    apiSections,
    docs: {
      description: {
        component: '범위 값을 조절하는 Slider 컴포넌트입니다.',
      },
    },
  },
};

export const Playground = {
  name: 'Playground',
  parameters: { controls: { disable: false } },
  args: { ...playgroundArgs },
  render: (args, { updateArgs }) => (
    <Slider {...args} onChange={(next) => updateArgs({ value: next })} />
  ),
};

export const Type = {
  name: '유형',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          '접근 가능한 이름 지정 방식별 예시입니다. 보이는 레이블이 있으면 `label for` 또는 `aria-labelledby`를, 레이블 없이 아이콘·단독 UI만 있으면 `aria-label`을 사용합니다. 보조 설명은 `aria-describedby`, 스크린 리더용 값 표현은 `aria-valuetext`와 `output`을 조합합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function TypeExample() {
  return (
    <>
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        value={40}
        showValue
      />
      <Slider className="slider_fit" value={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        value={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        value={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        value={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다.
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
      <Slider
        id="slider-type-label"
        className="slider_fit"
        label="label + for — 기본"
        value={40}
        showValue
      />
      <Slider className="slider_fit" value={55} aria-label="단독 슬라이더 — aria-label" />
      <p className="slider_hint">
        레이블 없이 사용할 때는 <code>aria-label</code>로 접근 가능한 이름을 지정합니다.
      </p>
      <Slider
        id="slider-type-labelledby"
        className="slider_fit"
        label="aria-labelledby — 외부 레이블"
        value={16}
        min={12}
        max={24}
        step={1}
        aria-describedby="slider-type-labelledby-hint"
        data-slider-valuetext-suffix="픽셀"
        showValue
      />
      <p className="slider_hint" id="slider-type-labelledby-hint">
        12~24px 사이 글자 크기
      </p>
      <Slider
        id="slider-type-describedby"
        className="slider_fit"
        label="aria-describedby — 보조 설명"
        value={70}
        aria-describedby="slider-type-describedby-hint"
        data-slider-suffix="%"
        data-slider-valuetext-suffix="퍼센트"
        showValue
      />
      <p className="slider_hint" id="slider-type-describedby-hint">
        0%는 최소, 100%는 최대 대비입니다. 힌트 id를 <code>aria-describedby</code>에 연결합니다.
      </p>
      <Slider
        id="slider-type-valuetext"
        className="slider_fit"
        label="aria-valuetext — 읽기 쉬운 값"
        value={3}
        min={1}
        max={5}
        step={1}
        data-slider-valuetext-map="1:매우 낮음,2:낮음,3:보통,4:높음,5:매우 높음"
        showValue
      />
      <p className="slider_hint">
        숫자 대신 <code>aria-valuetext</code>로 “보통”처럼 읽기 쉬운 값을 전달합니다. 시각적
        output은 <code>aria-hidden=&quot;true&quot;</code>로 중복 낭독을 줄일 수 있습니다.
      </p>
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
          'slider 래퍼 안에 slider_input을 배치합니다. min · max · value로 범위와 초기값을 지정합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function BasicExample() {
  return <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />;
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Slider className="slider_fit" value={30} aria-label="기본 슬라이더" />,
  ),
};

export const Label = {
  name: '레이블 · 값 표시',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'slider_header에 slider_label과 output.slider_value를 함께 사용합니다. output의 for 속성은 대응하는 input id와 연결합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function LabelExample() {
  return (
    <>
      <Slider id="slider-volume" className="slider_fit" label="볼륨" value={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        value={40}
        data-slider-suffix="%"
        showValue
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
      <Slider id="slider-volume" className="slider_fit" label="볼륨" value={60} showValue />
      <Slider
        id="slider-brightness"
        className="slider_fit"
        label="밝기"
        value={40}
        data-slider-suffix="%"
        showValue
      />
    </>,
  ),
};

export const Size = {
  name: '크기',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'slider_sm · slider(기본) · slider_lg로 트랙·썸·텍스트 크기를 조절합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function SizeExample() {
  return (
    <>
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        value={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        value={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        value={70}
        showValue
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
      <Slider
        id="slider-size-sm"
        size="sm"
        className="slider_fit"
        label="Small — slider_sm"
        value={30}
        showValue
      />
      <Slider
        id="slider-size-md"
        className="slider_fit"
        label="Medium — 기본"
        value={50}
        showValue
      />
      <Slider
        id="slider-size-lg"
        size="lg"
        className="slider_fit"
        label="Large — slider_lg"
        value={70}
        showValue
      />
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
          '기본은 부모 100%입니다. slider_fit으로 --slider-max-width(320px)까지 제한하고, slider_block으로 전체 너비를 사용합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function WidthExample() {
  return (
    <>
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        value={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        value={65}
        showValue
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
      <Slider
        id="slider-width-fit"
        className="slider_fit"
        label="slider_fit — 최대 320px"
        value={45}
        showValue
      />
      <Slider
        id="slider-width-block"
        className="slider_block"
        style={{ maxWidth: 480 }}
        label="slider_block — 전체 너비"
        value={65}
        showValue
      />
    </>,
  ),
};

export const Step = {
  name: '간격 · 눈금',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: 'step으로 증감 단위를 지정합니다. slider_ticks로 눈금 레이블을 표시할 수 있습니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function StepExample() {
  return (
    <Slider className="slider_fit" label="step=10" value={50} step={10} showValue />
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <Slider className="slider_fit" label="step=10" value={50} step={10} showValue />,
  ),
};

export const Stepper = {
  name: '스텝 버튼',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: true },
    docs: {
      description: {
        story:
          '모바일(768px 이하)에서 range 드래그가 어려운 경우 `slider_stepper`를 추가합니다. `slider_control` 안에 `slider_step-decrease` · `slider_input` · `slider_step-increase` 순으로 배치하며, 버튼 클릭 시 `step`만큼 값이 증감됩니다. 데스크톱에서도 항상 표시하려면 `slider_stepper_always`를 함께 사용합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function StepperExample() {
  return (
    <>
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        value={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        value={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        value={30}
        showValue
        disabled
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
      <Slider
        className="slider_fit"
        stepper
        label="볼륨 — slider_stepper"
        value={60}
        showValue
        decreaseLabel="볼륨 줄이기"
        increaseLabel="볼륨 늘리기"
        hint="모바일 화면에서 − / + 버튼이 표시됩니다. 창 너비를 줄여 확인해 보세요."
      />
      <Slider
        className="slider_fit"
        stepper
        stepperAlways
        label="밝기 — slider_stepper_always"
        value={40}
        step={5}
        valueSuffix="%"
        showValue
        decreaseLabel="밝기 줄이기"
        increaseLabel="밝기 늘리기"
        hint="모든 화면 크기에서 스텝 버튼이 표시됩니다. step=5로 5%씩 증감합니다."
      />
      <Slider
        className="slider_fit"
        stepper
        label="비활성"
        value={30}
        showValue
        disabled
      />
    </>,
  ),
};

export const Color = {
  name: '색상',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story:
          'color_primary(기본) · color_success · color_danger · color_warning으로 트랙·썸 색을 지정합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function ColorExample() {
  return (
    <>
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        value={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        value={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        value={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        value={80}
        showValue
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
      <Slider
        id="slider-color-primary"
        className="color_primary slider_fit"
        label="Primary"
        value={60}
        showValue
      />
      <Slider
        id="slider-color-success"
        className="color_success slider_fit"
        label="Success"
        value={70}
        showValue
      />
      <Slider
        id="slider-color-danger"
        className="color_danger slider_fit"
        label="Danger"
        value={40}
        showValue
      />
      <Slider
        id="slider-color-warning"
        className="color_warning slider_fit"
        label="Warning"
        value={80}
        showValue
      />
    </>,
  ),
};

export const State = {
  name: '상태',
  parameters: {
    controls: { disable: false },
    demoPreview: { stack: false },
    docs: {
      description: {
        story: '비활성·오류(is-error) 상태를 지원합니다.',
      },
      source: {
        code: `import Slider from '@uxkm/react/slider';

export function StateExample() {
  return (
    <>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
    </>
  );
}`,
        language: 'tsx',
      },
    },
  },
  render: withDocsCanvasRender(
    <>
      <Slider className="slider_fit" label="기본" value={50} showValue />
      <Slider className="slider_fit" label="비활성" value={30} disabled showValue />
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
        story: 'form_field · form_vertical · form_horizontal과 함께 사용합니다.',
      },
      source: {
        code: `import FormLayout from '@uxkm/react/form-layout';
import Slider from '@uxkm/react/slider';

export function FormExample() {
  return (
    <>
      <FormLayout layout="vertical" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" value={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            value={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" value={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
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
          <label className="form_field-label" htmlFor="slider-form-opacity">
            불투명도
          </label>
          <Slider id="slider-form-opacity" value={85} data-slider-suffix="%" />
          <p className="form_field-hint">0~100% 사이 값</p>
        </div>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-zoom">
            확대 비율
          </label>
          <Slider
            id="slider-form-zoom"
            label="현재 값"
            value={125}
            min={50}
            max={200}
            step={25}
            data-slider-suffix="%"
            showValue
          />
        </div>
      </FormLayout>
      <FormLayout layout="horizontal" fit>
        <div className="form_field">
          <label className="form_field-label" htmlFor="slider-form-horizontal">
            선 굵기
          </label>
          <Slider id="slider-form-horizontal" value={3} min={1} max={10} />
          <p className="form_field-hint">1~10px</p>
        </div>
      </FormLayout>
    </>,
  ),
};

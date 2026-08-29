<!--
  Select 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
// 속성을 계산된 select에 직접 전달하기 위해 자동 상속을 끕니다.


// 크기, placeholder, 다중 선택과 상태 옵션을 하나의 Select API로 제공합니다.
let {
  size = 'md',
  nativeSize = undefined,
  disabled = false,
  error = false,
  fit = false,
  placeholder,
  multiple = false,
  modelValue = undefined,
  onModelValue,
  onChange,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // 선택 상자 높이와 글자 크기입니다.
  nativeSize: { type: [String, Number], default: undefined }, // 네이티브 select의 size 속성입니다.
  disabled: Boolean, // 선택을 비활성으로 만들어 조작을 막습니다.
  error: Boolean, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit: Boolean, // 공통 최대 너비로 너비를 제한합니다.
  placeholder: String, // 값이 없을 때 표시할 안내 option입니다.
  multiple: Boolean, // 여러 항목 선택을 허용합니다.
  modelValue: { type: [String, Number, Array], default: undefined }, // v-model 선택 값입니다.
});



// 크기·너비·오류 상태와 외부 클래스를 네이티브 select에 함께 적용합니다.
let selectClasses = $derived([
    'input', // Select도 Input과 동일한 입력 계열 클래스를 사용합니다.
    size === 'sm' && 'input_sm', // 작은 크기 변형입니다.
    size === 'lg' && 'input_lg', // 큰 크기 변형입니다.
    fit && 'input_fit', // 제한 너비 변형입니다.
    error && 'is-error', // 오류 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 select로 전달합니다.
let selectAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});

let selectedValue = $derived({
  // placeholder가 있으면 빈 값을 기본 선택값으로 사용하고 setter로 v-model을 갱신합니다.
  get: () => modelValue ?? (placeholder ? '' : undefined),
  set: (value) => onModelValue?.(value),
});

function handleChange(event) {
  // v-model 갱신과 별개로 네이티브 change 이벤트도 외부에 전달합니다.
  onChange?.(event);
}
</script>

<select
    v-model="selectedValue"
    {...selectAttrs}
    class={selectClasses}
    disabled={disabled}
    multiple={multiple}
    size={nativeSize}
    aria-invalid={error ? 'true' : attrs['aria-invalid']}
    data-component="Select"
    @change="handleChange"
  >
    <!-- placeholder는 실제 값이 없는 비활성 option으로 제공합니다. -->
    {#if placeholder}<option value="" disabled>{{ placeholder }}</option>
    {@render children?.()}
  </select>

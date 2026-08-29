<!--
  Steps 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import { setContext } from 'svelte';
import StepsItem from './StepsItem.svelte';

// 속성을 계산된 Steps 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 현재 단계, 방향, 크기, 시각·탐색 변형과 항목을 prop으로 받습니다.
let {
  current,
  direction = 'horizontal',
  size = 'md',
  dot = false,
  iconStyle = false,
  navigable = false,
  align = '',
  ariaLabel,
  items = () => [],
  onCurrent,
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
} = $props();입니다.
  direction: { type: String, default: 'horizontal' }, // 가로 또는 세로 배치를 선택합니다.
  size: { type: String, default: 'md' }, // 단계 표시의 크기를 지정합니다.
  dot: Boolean, // 점형 인디케이터를 사용할지 여부입니다.
  iconStyle: Boolean, // 아이콘 강조 스타일을 사용할지 여부입니다.
  navigable: Boolean, // 완료·활성 단계를 클릭으로 이동할지 여부입니다.
  align: { type: String, default: '' }, // center면 제목을 가운데 정렬합니다.
  ariaLabel: String, // 단계 목록의 접근 가능한 이름을 지정합니다.
  items: { type: Array, default: () => [] }, // 선언형으로 전달할 단계 항목 배열입니다.
});
 // 탐색 가능 단계에서 이동을 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.

const registry = new Map(); // 등록된 StepsItem id 집합입니다.
let order = $state([]); // 등록 순서를 반영한 id 목록입니다.
let direction = $derived(['horizontal', 'vertical'].includes(direction) ? direction : 'horizontal',
); // 검증된 방향입니다.
let size = $derived((['sm', 'md', 'lg'].includes(size) ? size : 'md')); // 검증된 크기입니다.

// 방향·크기·점형·아이콘·탐색·정렬 클래스를 조합합니다.
let classes = $derived([
    'steps', // Steps 레이아웃을 활성화하는 필수 클래스입니다.
    direction === 'vertical' && 'steps_vertical', // 세로 방향 변형입니다.
    size !== 'md' && `steps_${size}`, // 기본 md가 아닐 때 크기 변형입니다.
    dot && 'steps_dot', // 점형 인디케이터 변형입니다.
    iconStyle && 'steps_icon-style', // 아이콘 강조 변형입니다.
    navigable && 'steps_navigable', // 클릭 탐색 가능 변형입니다.
    align === 'center' && 'steps_align-center', // 가운데 정렬 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 자식 단계를 등록하거나 동일 id를 유지합니다.
function register(id) {
  if (!registry.has(id)) registry.set(id, true);
  order = [...registry.keys()];
}
// 언마운트된 자식 단계를 목록에서 제거합니다.
function unregister(id) {
  registry.delete(id);
  order = [...registry.keys()];
}
function indexOf(id) {
  return order.indexOf(id) + 1; // 1부터 시작하는 단계 번호입니다.
}

// 명시 status가 없으면 current와의 비교로 finished·active·wait를 정합니다.
function statusFor(index, explicit) {
  return (
    explicit ??
    (current == null
      ? 'wait'
      : index < current
        ? 'finished'
        : index === current
          ? 'active'
          : 'wait')
  );
}

// 탐색 가능하고 wait·active가 아닐 때만 현재 단계를 갱신합니다.
function select(index, status) {
  if (!navigable || status === 'wait' || status === 'active') return;
  onCurrent?.(index);
  onChange?.(index);
}

// 자식 StepsItem이 번호·상태·탐색에 쓰는 컨텍스트입니다.
setContext('stepsContext', {
  navigable: computed(() => navigable),
  register,
  unregister,
  indexOf,
  isLast: (id) => order.indexOf(id) === order.length - 1,
  statusFor,
  select,
});
</script>

<!-- items가 있으면 StepsItem으로 매핑하고, 없으면 기본 slot을 사용합니다. -->
  <ol {...rest} class={classes} aria-label={ariaLabel} data-component="Steps" data-steps>
    {#if items.length}<><StepsItem
        {#each items as item, index}
        key={item.key ?? item.title}
        {...item}
        index={item.index ?? index + 1}
        is-last={index === items.length - 1} /></template
    >{:else}{@render children?.()}
  </ol>

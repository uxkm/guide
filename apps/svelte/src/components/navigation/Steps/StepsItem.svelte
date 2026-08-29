<!--
  StepsItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import { getContext, onMount, onDestroy } from 'svelte';
import Icon from '../../basic/Icon/Icon.svelte';

 // 컴포넌트 표시 이름을 등록합니다.

// 제목, 설명, 상태, 번호, 마지막 여부를 prop으로 받습니다.
let {
  title,
  description,
  status,
  index,
  isLast = false,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
 // 아이콘·제목·설명 슬롯 존재 여부를 확인합니다.
const steps = getContext('stepsContext', null); // 부모 Steps의 등록·상태 API입니다.
const id = crypto.randomUUID().replaceAll('-', ''); // 등록에 쓰는 고유 id입니다.
onMount(() => steps?.register(id)); // 마운트 시 부모에 등록합니다.
onDestroy(() => steps?.unregister(id)); // 언마운트 시 등록을 해제합니다.
let stepIndex = $derived(index ?? steps?.indexOf(id) ?? 0); // 최종 단계 번호입니다.
let resolvedStatus = $derived({
  const value = steps?.statusFor(stepIndex, status) ?? status ?? 'wait';
  return ['finished', 'active', 'wait', 'error'].includes(value) ? value : 'wait';
}); // 검증된 상태입니다.
let last = $derived(isLast ?? steps?.isLast(id) ?? false); // 마지막 단계 여부입니다.
let navigable = $derived(steps?.navigable?.value ?? false); // 클릭 탐색 가능 여부입니다.
function select() {
  steps?.select(stepIndex, resolvedStatus); // 부모에 단계 이동을 요청합니다.
}
</script>

<!-- 탐색 가능하면 버튼, 아니면 정적 머리·본문을 렌더합니다. -->
  <li
    class={['steps_item', `is-${resolvedStatus}`]}
    aria-current={!navigable && resolvedStatus === 'active' ? 'step' : undefined}
  >
    {#if navigable}<button
     
      type="button"
      class="steps_trigger"
      disabled={resolvedStatus === 'wait'}
      aria-current={resolvedStatus === 'active' ? 'step' : undefined}
      onclick={select}
    >
      <span class="steps_head"
        ><span class="steps_indicator" aria-hidden="true"
          ><slot name="icon"
            >{#if resolvedStatus === 'finished'}<Icon name="check" class="steps_icon" />{:else if resolvedStatus === 'error'}<Icon
             
              name="close"
              class="steps_icon"
            />{:else}<span class="steps_index">{{ stepIndex }}</span></slot
          ></span
        >{#if !last}<span class="steps_tail" aria-hidden="true" /></span
      ><span class="steps_content"
        ><span class="steps_title"
          ><slot name="title">{{ title }}</slot></span
        >{#if description || slots.description}<span class="steps_desc"
          ><slot name="description">{{ description }}</slot></span
        ></span
      ></button
    >{:else}{@render children?.()}
        </p>
        {#if description || slots.description}<p class="steps_desc">
          <slot name="description">{{ description }}</slot>
        </p>
      </div></slot
    >
  </li>

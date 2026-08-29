<!--
  Empty 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
import Icon from '../../basic/Icon/Icon.svelte';

// 선언하지 않은 class와 HTML 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 설명·크기·간단형·블록 옵션을 prop으로 받습니다.
let {
  description,
  size = 'md',
  simple = false,
  block = false,
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
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // 아이콘과 여백 크기입니다.
  simple: Boolean, // 아이콘 없는 설명 전용 변형입니다.
  block: Boolean, // 전체 너비 배치입니다.
});

 // 선언하지 않은 HTML 속성입니다.
 // icon·description·footer 슬롯 존재 여부입니다.

// 크기·간단형·블록 클래스를 조합합니다.
let classes = $derived([
    'empty', // Empty 루트 클래스입니다.
    size !== 'md' && `empty_${size}`, // md가 아닐 때만 크기 변형입니다.
    simple && 'empty_simple', // 아이콘 없는 간단형입니다.
    block && 'empty_block', // 전체 너비 배치입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
</script>

<!-- 빈 상태 status 루트입니다. -->
  <div {...rest} class={classes} data-component="Empty" role="status">
    <!-- simple이 아닐 때만 아이콘/이미지 영역을 표시합니다. -->
    {#if !simple}<div class="empty_image" data-slot="icon" aria-hidden="true">
      <slot name="icon"
        ><slot name="image"><Icon name="inbox" /></slot
      ></slot>
    </div>
    <!-- 설명 영역: description 슬롯 또는 기본 문구입니다. -->
    {#if description || slots.default || slots.description}<div
     
      class="empty_desc"
      data-slot="description"
    >
      <slot name="description"
        ><slot
          ><p>{{ description }}</p></slot
        ></slot
      >
    </div>
    <!-- 후속 액션 영역입니다. -->
    {#if slots.footer}<div class="empty_footer"><slot name="footer" /></div>
  </div>

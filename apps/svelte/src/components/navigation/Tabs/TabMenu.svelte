<!--
  TabMenu 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import { getContext, onMount, onDestroy } from 'svelte';

// 레이블, 키, 활성·비활성 상태를 prop으로 받습니다.
let {
  label,
  value,
  active = false,
  disabled = false,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
 // 아이콘·배지 슬롯을 등록에 전달합니다.
const tabs = getContext('tabsContext', null); // 부모 Tabs의 등록 API입니다.
const localId = crypto.randomUUID().replaceAll('-', ''); // id·키 생성용 접두사입니다.
const id = `tab-${localId}`; // 등록에 쓰는 탭 id입니다.
const key = value ?? localId; // 선택에 쓰는 최종 키입니다.

// 패널 없이 메뉴형 탭으로만 등록합니다.
onMount(() =>
  tabs?.registerTab({
    id,
    panelId: null,
    key,
    label: label,
    active: active,
    disabled: disabled,
    icon: icon,
    badge: badge,
    menuOnly: true,
  }),
);
onDestroy(() => tabs?.unregisterTab(id)); // 언마운트 시 등록을 해제합니다.
</script>

<!-- 실제 패널은 없고 등록용 숨김 슬롯만 둡니다. -->
  <span hidden>{@render children?.()}</span>

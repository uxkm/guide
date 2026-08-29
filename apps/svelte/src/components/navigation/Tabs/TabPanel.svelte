<!--
  TabPanel 원본 구현.
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
const tabs = getContext('tabsContext', null); // 부모 Tabs의 등록·선택 API입니다.
const localId = crypto.randomUUID().replaceAll('-', ''); // id·키 생성용 접두사입니다.
const tabId = `tab-${localId}`; // 탭 버튼과 연결할 id입니다.
const panelId = `panel-${localId}`; // 패널 요소 id입니다.
const key = value ?? localId; // 선택에 쓰는 최종 키입니다.
let activeNow = $derived(tabs?.isActive(key) ?? active); // 현재 활성 여부입니다.

// 마운트 시 부모 Tabs에 탭 메타데이터를 등록합니다.
onMount(() =>
  tabs?.registerTab({
    id: tabId,
    panelId,
    key,
    label: label,
    active: active,
    disabled: disabled,
    icon: icon,
    badge: badge,
  }),
);
onDestroy(() => tabs?.unregisterTab(tabId)); // 언마운트 시 등록을 해제합니다.
</script>

<!-- 활성 패널만 보이도록 hidden과 클래스를 동기화합니다. -->
  <div
    id={panelId}
    class={['tabs_panel', activeNow && 'is-active']}
    role="tabpanel"
    aria-labelledby={tabId}
    hidden={!activeNow || undefined}
  >
    {@render children?.()}
  </div>

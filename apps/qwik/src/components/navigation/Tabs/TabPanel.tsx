/**
 * TabPanel 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function TabPanel() {
  // Tabs가 children을 읽어 패널로 구성하므로 자체 DOM은 렌더하지 않습니다.
  return null;
}
TabPanel.tabsType = 'panel'; // Tabs가 패널형 자식으로 구분할 때 사용합니다.
export default TabPanel;

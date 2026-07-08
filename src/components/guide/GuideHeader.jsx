import { useGuideSidebar } from '@/context/GuideSidebarContext';
import { useTheme } from '@/hooks/useTheme';

export default function GuideHeader({ title = 'UXKM Guide' }) {
  const { theme, toggleTheme } = useTheme();
  const sidebar = useGuideSidebar();

  const sidebarCollapsed = sidebar?.sidebarCollapsed ?? false;

  function openMenu() {
    sidebar?.openSidebar?.();
  }

  function toggleCollapse() {
    sidebar?.toggleSidebarCollapse?.();
  }

  return (
    <header className="guide_header">
      <button
        type="button"
        className="guide_header-menu-btn"
        data-ripple
        aria-label="메뉴 열기"
        aria-expanded="false"
        onClick={openMenu}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <button
        type="button"
        className="guide_header-sidebar-btn"
        data-ripple
        aria-label={sidebarCollapsed ? '사이드바 펼치기' : '사이드바 접기'}
        aria-expanded={String(!sidebarCollapsed)}
        aria-controls="guide-sidebar"
        onClick={toggleCollapse}
      >
        <svg
          className="guide_header-sidebar-icon guide_header-sidebar-icon-open"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </svg>
        <svg
          className="guide_header-sidebar-icon guide_header-sidebar-icon-closed"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
          <path d="M14 9l3 3-3 3" />
        </svg>
      </button>
      <span className="guide_header-title">{title}</span>

      <div className="guide_header-actions">
        <button
          type="button"
          className="guide_header-theme-btn"
          data-ripple
          aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
          onClick={toggleTheme}
        >
          <svg
            className="guide_header-theme-icon guide_header-theme-icon-sun"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg
            className="guide_header-theme-icon guide_header-theme-icon-moon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

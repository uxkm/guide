import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_GROUPS } from '@uxkm/ui/data/navigation';
import { cn } from '@uxkm/ui-react/utils/cn';

const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';
const DESKTOP_BREAKPOINT = 1024;

function isDesktop() {
  return window.innerWidth > DESKTOP_BREAKPOINT;
}

/** activeNav가 속한 그룹만 펼침 상태로 초기화 */
function getGroupStateForActiveNav(activeNav) {
  const state = {};
  NAV_GROUPS.forEach((group, index) => {
    if (group.flat) return;
    if (group.items.some((item) => item.slug === activeNav)) {
      state[`group-${index}`] = true;
    }
  });
  return state;
}

const GuideSidebar = forwardRef(function GuideSidebar(
  { activeNav = 'intro', onCollapsedChange },
  ref,
) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  /** 명시적으로 true인 그룹만 펼침. 활성 하위 메뉴가 있는 그룹은 펼침 */
  const [groupState, setGroupState] = useState(() => getGroupStateForActiveNav(activeNav));
  const navRef = useRef(null);

  function isGroupExpanded(groupId) {
    return groupState[groupId] === true;
  }

  function toggleGroup(groupId) {
    setGroupState((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  }

  function syncCollapsed(collapsed) {
    onCollapsedChange?.(collapsed);
  }

  function scrollActiveLinkIntoView(smooth = false) {
    requestAnimationFrame(() => {
      const nav = navRef.current;
      if (!nav) return;

      const activeLink = nav.querySelector('.guide_nav-link.is-active');
      if (!activeLink) return;

      const targetScroll =
        nav.scrollTop +
        (activeLink.getBoundingClientRect().top - nav.getBoundingClientRect().top);

      nav.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: smooth ? 'smooth' : 'auto',
      });
    });
  }

  function openSidebar() {
    setSidebarOpen(true);
    document.body.style.overflow = 'hidden';
    scrollActiveLinkIntoView();
  }

  function closeSidebar() {
    setSidebarOpen(false);
    document.body.style.overflow = '';
  }

  function toggleSidebarCollapse() {
    if (!isDesktop()) return;

    setSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_SIDEBAR_COLLAPSED, next ? '1' : '0');
      } catch {
        /* ignore */
      }
      syncCollapsed(next);
      return next;
    });
  }

  function onResize() {
    if (isDesktop()) {
      closeSidebar();
      try {
        const collapsed = localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1';
        setSidebarCollapsed(collapsed);
        syncCollapsed(collapsed);
      } catch {
        setSidebarCollapsed(false);
        syncCollapsed(false);
      }
    } else {
      setSidebarCollapsed(false);
      syncCollapsed(false);
    }
  }

  useImperativeHandle(ref, () => ({
    openSidebar,
    closeSidebar,
    toggleSidebarCollapse,
  }));

  useEffect(() => {
    let collapsed = false;
    try {
      collapsed = localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1';
    } catch {
      /* ignore */
    }
    setSidebarCollapsed(collapsed);
    syncCollapsed(collapsed);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    scrollActiveLinkIntoView(true);
  }, [activeNav]);

  // 하위 메뉴가 선택된 그룹은 항상 펼침 (새로고침·라우트 이동 포함)
  useEffect(() => {
    const activeGroups = getGroupStateForActiveNav(activeNav);
    if (!Object.keys(activeGroups).length) return;

    setGroupState((prev) => {
      let changed = false;
      const next = { ...prev };
      Object.entries(activeGroups).forEach(([groupId, open]) => {
        if (open && next[groupId] !== true) {
          next[groupId] = true;
          changed = true;
        }
      });
      return changed ? next : prev;
    });
  }, [activeNav]);

  return (
    <>
      <aside
        id="guide-sidebar"
        className={cn('guide_sidebar', { 'is-open': sidebarOpen })}
        aria-label="컴포넌트 메뉴"
      >
        <div className="guide_sidebar-brand">
          <NavLink className="guide_sidebar-back" to="/" end>
            ← UXKM Guide
          </NavLink>
          <div className="guide_sidebar-title">UI Components</div>
          <p className="guide_sidebar-desc">React · Vite</p>
        </div>

        <nav ref={navRef} className="guide_nav">
          {NAV_GROUPS.map((group, index) => {
            if (group.flat) {
              return (
                <ul key={group.title} className="guide_nav-list guide_nav-list-top">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          cn('guide_nav-link', { 'is-active': isActive })
                        }
                        data-ripple
                        onClick={closeSidebar}
                      >
                        <span>{item.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              );
            }

            const groupId = `group-${index}`;
            const expanded = isGroupExpanded(groupId);

            return (
              <div
                key={group.title}
                className={cn('guide_nav-group', { 'is-collapsed': !expanded })}
              >
                <button
                  type="button"
                  className="guide_nav-heading"
                  data-ripple
                  aria-expanded={String(expanded)}
                  onClick={() => toggleGroup(groupId)}
                >
                  <span className="guide_nav-heading-text">{group.title}</span>
                  <svg
                    className="guide_nav-chevron"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <ul className="guide_nav-list">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          cn('guide_nav-link', { 'is-active': isActive })
                        }
                        data-ripple
                        onClick={closeSidebar}
                      >
                        <span>{item.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>

      <div
        id="guide-overlay"
        className={cn('guide_overlay', { 'is-visible': sidebarOpen })}
        aria-hidden="true"
        onClick={closeSidebar}
      />
    </>
  );
});

export default GuideSidebar;

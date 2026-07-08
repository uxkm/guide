import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_GROUPS } from '@/data/navigation';
import { cn } from '@/utils/cn';

const STORAGE_NAV_GROUPS = 'guide-nav-groups';
const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';
const DESKTOP_BREAKPOINT = 1024;

function readNavGroupState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_NAV_GROUPS) || '{}');
  } catch {
    return {};
  }
}

function isDesktop() {
  return window.innerWidth > DESKTOP_BREAKPOINT;
}

const GuideSidebar = forwardRef(function GuideSidebar(
  { activeNav = 'intro', onCollapsedChange },
  ref,
) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [groupState, setGroupState] = useState({});
  const navRef = useRef(null);

  function saveNavGroupState(nextState) {
    try {
      localStorage.setItem(STORAGE_NAV_GROUPS, JSON.stringify(nextState));
    } catch {
      /* ignore */
    }
  }

  function isGroupExpanded(groupId, hasActive) {
    if (groupState[groupId] !== undefined) {
      return groupState[groupId];
    }
    return hasActive || true;
  }

  function toggleGroup(groupId, hasActive) {
    const current = isGroupExpanded(groupId, hasActive);
    const nextState = { ...groupState, [groupId]: !current };
    setGroupState(nextState);
    saveNavGroupState(nextState);
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

  function ensureActiveGroupExpanded() {
    setGroupState((prev) => {
      let next = prev;
      NAV_GROUPS.forEach((group, index) => {
        const hasActive = group.items.some((item) => item.slug === activeNav);
        if (hasActive && prev[`group-${index}`] === false) {
          next = { ...next, [`group-${index}`]: true };
        }
      });
      return next === prev ? prev : next;
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
    const initialGroupState = readNavGroupState();
    setGroupState(initialGroupState);

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
    ensureActiveGroupExpanded();
    scrollActiveLinkIntoView(true);
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
            const groupId = `group-${index}`;
            const hasActive = group.items.some((item) => item.slug === activeNav);
            const expanded = isGroupExpanded(groupId, hasActive);

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
                  onClick={() => toggleGroup(groupId, hasActive)}
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

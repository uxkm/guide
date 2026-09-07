import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const currentPath = () => (location.pathname.slice(base.length).replace(/\/$/, '') || '/');
export const routeHref = (to) => base + to;

const NavContext = createContext(null);

export function Router({ routes, fallback }) {
  const [path, setPath] = useState(() => currentPath());
  useEffect(() => {
    const onPop = () => setPath(currentPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const navigate = useCallback((to) => {
    if (to === path) return;
    history.pushState(null, '', routeHref(to));
    setPath(to);
    window.scrollTo(0, 0);
  }, [path]);
  const Page = routes[path] || fallback;
  return (
    <NavContext.Provider value={navigate}>
      <Page />
    </NavContext.Provider>
  );
}

export function useNavigate() {
  return useContext(NavContext);
}

export function DemoLink({ to, className = 'category_card', children }) {
  const navigate = useNavigate();
  return (
    <a href={routeHref(to)} className={className} onClick={(e) => { e.preventDefault(); navigate(to); }}>
      {children}
    </a>
  );
}

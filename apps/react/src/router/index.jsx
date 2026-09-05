import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const NavContext = createContext(null);

export function Router({ routes, fallback }) {
  const [path, setPath] = useState(() => location.pathname);
  useEffect(() => {
    const onPop = () => setPath(location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const navigate = useCallback((to) => {
    if (to === path) return;
    history.pushState(null, '', to);
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
    <a href={to} className={className} onClick={(e) => { e.preventDefault(); navigate(to); }}>
      {children}
    </a>
  );
}

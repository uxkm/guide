/** Vite BASE_URL(`/react/`) → React Router basename(`/react`) */
export function getRouterBasename() {
  const base = import.meta.env.BASE_URL ?? '/';

  if (base === '/') {
    return undefined;
  }

  return base.endsWith('/') ? base.slice(0, -1) : base;
}

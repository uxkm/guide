const SITE_FALLBACK = 'https://guide.uxkm.io';

function readEnv(name) {
  try {
    const value = import.meta.env?.[name];
    if (typeof value === 'string' && value.trim()) return value.trim();
  } catch {
    // Node without Vite env
  }
  if (typeof process !== 'undefined' && process.env?.[name]) {
    return String(process.env[name]).trim();
  }
  return '';
}

function isViteDev() {
  try {
    return Boolean(import.meta.env?.DEV);
  } catch {
    return false;
  }
}

function normalizeBase(value) {
  if (!value || value === '/') return '';
  return String(value).replace(/\/+$/, '');
}

export function resolveAssetBase(options = {}) {
  if (options.base != null && String(options.base).trim() !== '') {
    return normalizeBase(options.base);
  }

  const configured =
    readEnv('VITE_ASSET_BASE') ||
    readEnv('NEXT_PUBLIC_ASSET_BASE') ||
    readEnv('NUXT_PUBLIC_ASSET_BASE');
  if (configured) return normalizeBase(configured);

  const dev = options.isDev ?? isViteDev();
  if (dev) return '';

  const viteBase = readEnv('BASE_URL');
  if (viteBase && viteBase !== '/') return normalizeBase(viteBase);

  const site = options.siteUrl || readEnv('VITE_SITE_URL') || SITE_FALLBACK;
  return normalizeBase(site);
}

export function assetUrl(path, options) {
  const clean = String(path || '').replace(/^\/+/, '');
  const base = resolveAssetBase(options);
  if (!base) return `/${clean}`;
  return `${base}/${clean}`;
}

export function createAssetUrl(options) {
  return (path) => assetUrl(path, options);
}

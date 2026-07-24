import path from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { uiRoot, uiScssOptions, writeCdnUrlScss, cdnUrlScssPath } from '@uxkm/ui/vite-alias';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const uiReactRoot = path.resolve(__dirname, 'src');
export { uiRoot, uiScssOptions, writeCdnUrlScss, cdnUrlScssPath };

function resolveAliasTarget(basePath) {
  const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '.json'];
  for (const ext of extensions) {
    const file = `${basePath}${ext}`;
    if (existsSync(file)) return file;
  }
  for (const ext of ['.js', '.jsx']) {
    const file = path.join(basePath, `index${ext}`);
    if (existsSync(file)) return file;
  }
  return basePath;
}

/** @/ → ui-react/src, 공유 utils/data → @uxkm/ui */
export function createUiReactAliasPlugin() {
  return {
    name: 'ui-react-alias',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!source.startsWith('@/')) return null;
      const target = source.slice(2);

      if (target.startsWith('utils/')) {
        const reactUtil = path.join(uiReactRoot, target);
        if (existsSync(reactUtil) || existsSync(`${reactUtil}.js`)) {
          return resolveAliasTarget(reactUtil);
        }
        return resolveAliasTarget(path.join(uiRoot, target));
      }

      if (target.startsWith('data/')) {
        return resolveAliasTarget(path.join(uiRoot, target));
      }

      if (importer?.includes(`${path.sep}packages${path.sep}ui-react${path.sep}`)) {
        return resolveAliasTarget(path.join(uiReactRoot, target));
      }

      return null;
    },
  };
}

export function uiReactViteAliases() {
  return {
    '@uxkm/ui-react': uiReactRoot,
    '@uxkm/ui': uiRoot,
    '@images': path.resolve(uiRoot, 'assets/images'),
  };
}

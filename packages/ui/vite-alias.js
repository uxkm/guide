import path from 'path';
import { existsSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const uiRoot = path.resolve(__dirname, 'src');
export const cdnUrlScssPath = path.resolve(uiRoot, 'scss/_cdn-url.scss');

export function writeCdnUrlScss(cdnUrl = '.') {
  writeFileSync(
    cdnUrlScssPath,
    `// CDN/정적 에셋 베이스 URL — url(#{$cdn-url}/…) 에서 사용\n$cdn-url: "${cdnUrl}";\n`,
  );
}

export function resolveAliasTarget(basePath) {
  const extensions = ['', '.js', '.vue', '.jsx', '.ts', '.json'];
  for (const ext of extensions) {
    const file = `${basePath}${ext}`;
    if (existsSync(file)) return file;
  }
  for (const ext of ['.js', '.vue']) {
    const file = path.join(basePath, `index${ext}`);
    if (existsSync(file)) return file;
  }
  return basePath;
}

/** UI 패키지 @/ alias 및 추가 앱 src 루트(가이드 등) 해석 */
export function createInternalAliasPlugin(...additionalSrcRoots) {
  return {
    name: 'internal-alias',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!source.startsWith('@/')) return null;
      const target = source.slice(2);
      if (importer?.includes(`${path.sep}packages${path.sep}ui${path.sep}`)) {
        return resolveAliasTarget(path.resolve(uiRoot, target));
      }
      for (const src of additionalSrcRoots) {
        if (importer?.includes(src)) {
          return resolveAliasTarget(path.resolve(src, target));
        }
      }
      return null;
    },
  };
}

export function uiViteAliases() {
  return {
    '@uxkm/ui': uiRoot,
    '@images': path.resolve(uiRoot, 'assets/images'),
  };
}

export function uiScssOptions(storybookNodeModules) {
  const loadPaths = [path.resolve(uiRoot, 'scss')];
  if (storybookNodeModules) loadPaths.push(storybookNodeModules);
  return {
    api: 'modern-compiler',
    loadPaths,
  };
}

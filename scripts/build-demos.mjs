import { execFileSync } from 'node:child_process';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const apps = ['gulp', 'vue', 'react'];
const routes = ['signup', 'components', ...['basic', 'layout', 'form', 'navigation', 'data-display', 'feedback', 'miscellaneous'].map(name => `components/${name}`)];

for (const app of apps) {
  const dist = join(root, 'apps', app, 'dist');
  await rm(dist, { recursive: true, force: true });
  execFileSync('pnpm', ['--filter', `@uxkm/${app}`, 'build'], { cwd: root, stdio: 'inherit' });
  if (app === 'gulp') {
    // Nunjucks outputs retain development-root URLs; scope them to the demo.
    for (const name of await readdir(dist, { recursive: true })) {
      if (!name.endsWith('.html')) continue;
      const path = join(dist, name);
      const html = (await readFile(path, 'utf8'))
        .replace(/\b(href|src|action)=(['"])\/(?!\/)/g, '$1=$2/apps/gulp/')
        .replaceAll('http://localhost:6006', '/storybook/');
      await writeFile(path, html);
    }
  } else {
    // GitHub Pages serves each history-router route directly, including reloads.
    const html = await readFile(join(dist, 'index.html'), 'utf8');
    for (const route of routes) {
      await mkdir(join(dist, route), { recursive: true });
      await writeFile(join(dist, route, 'index.html'), html);
    }
  }
}

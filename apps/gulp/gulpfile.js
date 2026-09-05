import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import browserSyncPackage from 'browser-sync';
import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';

const { dest, parallel, series, src, watch } = gulp;
const browserSync = browserSyncPackage.create();

function pages() {
  return src('src/pages/**/*.njk')
    .pipe(nunjucksRender({ path: ['src'] }))
    .pipe(dest('dist'));
}

// Reuse the existing HTML workspace build tool; no extra installation is needed.
async function signupBundle() {
  const htmlRequire = createRequire(
    new URL('../html/package.json', import.meta.url),
  );
  const { build } = await import(
    pathToFileURL(htmlRequire.resolve('vite')).href
  );
  await build({
    configFile: false,
    publicDir: false,
    build: {
      outDir: 'dist/scripts',
      emptyOutDir: false,
      lib: {
        entry: 'src/scripts/signup.js',
        formats: ['es'],
        fileName: () => 'signup.js',
        cssFileName: 'signup',
      },
    },
  });
}

function scripts() {
  return src('src/scripts/**/*.js', { allowEmpty: true }).pipe(
    dest('dist/scripts'),
  );
}

function publicFiles() {
  return src('public/**/*', { encoding: false, allowEmpty: true }).pipe(
    dest('dist'),
  );
}

function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
    server: { baseDir: 'dist' },
    host: process.env.HOST || '0.0.0.0',
    port: 6102,
    open: false,
    notify: false,
  });

  watch(['src/**/*.njk'], series(pages, reload));
  watch(
    ['src/**/*.js', '../../packages/demo/*'],
    series(scripts, signupBundle, reload),
  );
  watch(['public/**/*'], series(publicFiles, reload));
  done();
}

export const build = series(
  parallel(pages, scripts, publicFiles),
  signupBundle,
);
export const dev = series(build, serve);
export default build;

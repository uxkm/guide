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

function scripts() {
  return src('src/scripts/**/*.js', { allowEmpty: true })
    .pipe(dest('dist/scripts'));
}

function publicFiles() {
  return src('public/**/*', { encoding: false, allowEmpty: true })
    .pipe(dest('dist'));
}

function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
    server: { baseDir: 'dist' },
    host: '127.0.0.1',
    port: 6102,
    open: false,
    notify: false
  });

  watch(['src/**/*.njk'], series(pages, reload));
  watch(['src/scripts/**/*.js'], series(scripts, reload));
  watch(['public/**/*'], series(publicFiles, reload));
  done();
}

export const build = parallel(pages, scripts, publicFiles);
export const dev = series(build, serve);
export default build;

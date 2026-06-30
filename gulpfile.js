const { src, dest, watch, series, parallel } = require('gulp');
const path = require('path');
const through = require('through2');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const sharp = require('sharp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const { deleteAsync } = require('del');
const { assemblePage } = require('./scripts/html-assembler');

const paths = {
  scss: {
    src: 'src/scss/main.scss',
    watch: 'src/scss/**/*.scss',
    dest: 'html/css',
  },
  js: {
    src: 'src/js/**/*.js',
    watch: 'src/js/**/*.js',
    dest: 'html/js',
  },
  vendor: {
    swiper: 'node_modules/swiper/swiper-bundle.min.js',
    dest: 'html/js/vendor',
  },
  html: {
    src: ['src/**/*.html', '!src/_layouts/**'],
    watch: ['src/**/*.html', '!src/_layouts/**'],
    dest: 'html',
  },
  images: {
    src: 'src/images/**/*.{jpg,jpeg,png,gif,svg,webp,avif}',
    watch: 'src/images/**/*',
    dest: 'html/images',
  },
  static: {
    src: [
      'src/**/*.{woff,woff2,ttf,eot,ico,json,xml,txt,webmanifest}',
      'src/**/*.{mp4,webm}',
    ],
    watch: [
      'src/**/*.{woff,woff2,ttf,eot,ico,json,xml,txt,webmanifest}',
      'src/**/*.{mp4,webm}',
    ],
    dest: 'html',
  },
};

const watchOptions = {
  ignoreInitial: false,
  awaitWriteFinish: {
    stabilityThreshold: 150,
    pollInterval: 50,
  },
};

const THEME_INIT =
  '<script>!function(){try{var t=localStorage.getItem("guide-theme");if("light"!==t&&"dark"!==t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}}();</script>\n  ';

function onError(done) {
  return function (err) {
    console.error(err.message);
    this.emit('end');
    if (done) done();
  };
}

function clean() {
  return deleteAsync(['html/**'], { force: true });
}

function styles() {
  return src(paths.scss.src)
    .pipe(plumber({ errorHandler: onError() }))
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(paths.js.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: onError() }))
    .pipe(dest(paths.js.dest));
}

function vendorScripts() {
  return src(paths.vendor.swiper, { allowEmpty: true })
    .pipe(plumber({ errorHandler: onError() }))
    .pipe(dest(paths.vendor.dest));
}

function injectThemeAssets() {
  return through.obj(function (file, _, cb) {
    if (!file.isBuffer()) {
      cb(null, file);
      return;
    }

    let content = file.contents.toString('utf8');

    if (!content.includes('guide-theme-init')) {
      content = content.replace(/(<link rel="stylesheet")/, THEME_INIT + '$1');
    }

    if (!content.includes('js/theme.js')) {
      content = content.replace(
        /<script src="((?:\.\.\/|\.\/)?)js\/nav\.js"><\/script>/,
        '<script src="$1js/theme.js"></script>\n  <script src="$1js/nav.js"></script>'
      );
    }

    if (!content.includes('js/demo.js')) {
      content = content.replace(
        /(<script src="((?:\.\.\/)?)js\/nav\.js"><\/script>)/,
        '$1\n  <script src="$2js/demo.js"></script>'
      );
    }

    if (content.includes('{{pageScripts}}')) {
      var pageScriptTags = '';
      var demoScriptMatch = content.match(
        /<script src="((?:\.\.\/)?)js\/demo\.js"><\/script>/
      );
      var scriptBase = demoScriptMatch ? demoScriptMatch[1] : './';

      if (content.includes('data-swiper')) {
        pageScriptTags +=
          '  <script src="' +
          scriptBase +
          'js/vendor/swiper-bundle.min.js"></script>\n' +
          '  <script src="' +
          scriptBase +
          'js/carousel.js"></script>\n';
      }

      content = content.replace('{{pageScripts}}', pageScriptTags);
    }

    if (content.includes('data-swiper') && !content.includes('swiper-bundle.min.js')) {
      content = content.replace(
        /(<script src="((?:\.\.\/)?)js\/demo\.js"><\/script>)/,
        '$1\n  <script src="$2js/vendor/swiper-bundle.min.js"></script>\n  <script src="$2js/carousel.js"></script>'
      );
    }

    file.contents = Buffer.from(content);
    cb(null, file);
  });
}

function assembleHtmlPages() {
  return through.obj(function (file, _, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    const relativePath = path.relative('src', file.path).split(path.sep).join('/');
    const assembled = assemblePage(relativePath, file.contents.toString('utf8'));

    file.contents = Buffer.from(assembled);
    cb(null, file);
  });
}

function html() {
  return src(paths.html.src, { allowEmpty: true, base: 'src' })
    .pipe(plumber({ errorHandler: onError() }))
    .pipe(assembleHtmlPages())
    .pipe(injectThemeAssets())
    .pipe(dest(paths.html.dest));
}

function compressImage(file) {
  const ext = path.extname(file.path).toLowerCase();

  if (ext === '.svg' || ext === '.gif') {
    return Promise.resolve(file.contents);
  }

  const input = sharp(file.contents);

  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return input.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    case '.png':
      return input.png({ compressionLevel: 9, quality: 80 }).toBuffer();
    case '.webp':
      return input.webp({ quality: 80 }).toBuffer();
    case '.avif':
      return input.avif({ quality: 80 }).toBuffer();
    default:
      return Promise.resolve(file.contents);
  }
}

function images() {
  return src(paths.images.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: onError() }))
    .pipe(
      through.obj(function (file, _, cb) {
        if (file.isNull()) {
          cb(null, file);
          return;
        }

        compressImage(file)
          .then(function (buffer) {
            file.contents = buffer;
            cb(null, file);
          })
          .catch(cb);
      })
    )
    .pipe(dest(paths.images.dest));
}

function staticFiles() {
  return src(paths.static.src, { allowEmpty: true, base: 'src' })
    .pipe(dest(paths.static.dest));
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: '.',
      index: 'index.html',
    },
    open: false,
    notify: false,
    ui: false,
    ghostMode: false,
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

function watchFiles() {
  watch(paths.scss.watch, watchOptions, styles);
  watch(paths.js.watch, watchOptions, series(scripts, reload));
  watch(paths.html.watch, watchOptions, series(html, reload));
  watch(['src/_layouts/**', 'scripts/html-assembler.js'], watchOptions, series(html, reload));
  watch(paths.images.watch, watchOptions, series(images, reload));
  watch(paths.static.watch, watchOptions, series(staticFiles, reload));
  watch('index.html', watchOptions, reload);
}

const build = series(clean, parallel(styles, scripts, vendorScripts, html, images, staticFiles));
const watchTask = series(build, serve, watchFiles);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.images = images;
exports.static = staticFiles;
exports.build = build;
exports.watch = watchTask;
exports.default = watchTask;

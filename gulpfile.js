var { src, dest, watch, series } = require('gulp');
var pug = require('gulp-pug');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();


// Compile pug files into HTML
function html() {
  return src('src/pug/**/*.pug')
    .pipe(pug({
      pretty:true
    }).on("error", notify.onError()))
    .pipe(dest('dist'))
}

// Compile sass files into CSS
function styles() {
  return src('src/sass/style.sass')
    .pipe(sass({
      includePaths: ['src/sass'],
      errLogToConsole: true,
      outputStyle: 'expanded'
      // outputStyle: 'compressed',

    }).on("error", notify.onError()))
    .pipe(autoprefixer())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

// Copy assets
function assets() {
  return src('src/assets/**/*')
    .pipe(dest('dist/'))
}

// Serve and watch sass/pug files for changes
function watchAndServe() {
  browserSync.init({
    server: 'dist',
  })

  watch('src/sass/**/*.sass', styles)
  watch('src/pug/*.pug', html)
  watch('src/assets/**/*', assets)
  watch('dist/*.html').on('change', browserSync.reload)
}


exports.html = html
exports.styles = styles
exports.watch = watchAndServe
exports.default = series(html, styles, assets, watchAndServe)

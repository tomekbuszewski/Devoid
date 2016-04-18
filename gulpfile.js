var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var paths = {
  sassDir: '_sass',
  cssDir: '_css',
  cssSeer: 'seer',
  cssTheme: 'style',
  cssCompiledFile: 'style.css',
  js: './_babel/**/**.js',
  jsProd: './_js',
  jsProdFile: './_js/index.js',
  php: './**.php'
};

gulp.task('sass', function() {
  return gulp.src(paths.sassDir + '/**.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 2 version'))
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.cssDir));
});

gulp.task('css', ['sass'], function() {
  return gulp.src(['_css/theme-info.css', '_css/seer.css', '_css/theme.css'])
    .pipe(concat(paths.cssCompiledFile))
    .pipe(gulp.dest('./'));
});

gulp.task('webpack', function() {
	return gulp.src(paths.js)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.jsProd));
});

gulp.task('watch', ['sass', 'webpack'], function() {
  browserSync.init({
    browser: [],
    proxy: 'wordpress.dev'
  });

  gulp.watch(paths.sassDir + '/**', ['css']);
  gulp.watch(paths.cssDir + '/**', browserSync.reload);
  gulp.watch(paths.js, ['webpack']);
  gulp.watch(paths.jsProdFile).on('change', browserSync.reload);
  gulp.watch(paths.php).on('change', browserSync.reload);
});

gulp.task('default', ['watch']);

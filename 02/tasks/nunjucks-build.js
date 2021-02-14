/* eslint-disable no-undef */
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
// const prettify = require('gulp-prettify');
const htmlmin = require('gulp-htmlmin');

// 環境変数からサイトデータを取得
const environment = process.env.NODE_ENV || 'development';
const SITE_DATA = require(`../env.${ environment }.js`);

// Nunjucksのビルド
function nunjucksBuild() {
  const nunjucksPath = {
    root: 'src/nunjucks/',
    src: [
      'src/nunjucks/html/**/*.njk',
      '!src/nunjucks/html/**/_*.njk'
    ],
    dist: 'dist/',
  };
  return gulp.src(nunjucksPath.src)
    .pipe(nunjucksRender({
      path: [nunjucksPath.root],
      data: SITE_DATA
    }))
    .pipe(htmlmin({
      collapseInlineTagWhitespace: true,
      collapseWhitespace : true,
      // preserveLineBreaks: true,
      removeComments : true,
      minifyCSS: true,
      minifyJS: true,
      sortAttributes: true,
      sortClassName: true,
    }))
    // .pipe(prettify({
    //   indent_size: 2,
    // }))
    .pipe(gulp.dest(nunjucksPath.dist));
}

exports.nunjucksBuild = nunjucksBuild;

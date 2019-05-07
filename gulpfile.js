'use strict';

const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');
const concat = require('gulp-concat');
const rigger = require('gulp-rigger');
const sass = require('gulp-sass');
const browserSync = require("browser-sync");
const del = require('del');

const path = {
    src: {
        html: 'src/pages/*.html',
        styles: ['src/modules/**/*.scss', 'src/*.scss'],
        js: ['src/modules/**/*.js', 'src/*.js'],
        images: 'src/modules/**/*.svg',
    },
    watch: {
        html: 'src/modules/**/*.html',
        styles: ['src/modules/**/*.scss', 'src/*.scss'],
        js: ['src/modules/**/*.js', 'src/*.js'],
    },
    build: {
        html: 'web/',
        styles: 'web/',
        js: 'web/',
        images: 'web/images/',
    },
    clean: './web'
};

function clean() {
    return del([path.clean]);
}

function html() {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
}

function styles() {
    return gulp.src(path.src.styles)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.styles));
}

function js() {
    return gulp.src(path.src.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(path.build.js));
}

function images(done) {
    gulp.src(path.src.images)
        .pipe(gulp.dest(path.build.images));
    done();
}

function watch() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.styles, styles);
    gulp.watch(path.watch.js, js);
}

function webserver() {
    browserSync.init({ server: "./web" });
}

const build = gulp.series(clean, html, styles, js, images);

exports.images = images;
exports.build = build;
exports.watch = watch;
exports.webserver = webserver;
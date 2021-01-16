const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const rollup = require('gulp-rollup');
const replace = require('@rollup/plugin-replace');

let entry = "./src/server/**/*.js";
let cleanEntry = './src/server/config/index.js';

// 开发环境Es6 模块化语法进行编译 commonjs
function builddev() {
    return watch(entry, {
        ignoreInitial: false
    }, () => {
        gulp.src(entry)
            // opiotns,.babelrc
            .pipe(plumber())
            .pipe(babel({
                babelrc: false,
                "plugins": ["@babel/plugin-transform-modules-commonjs"]
            }))
            .pipe(gulp.dest('dist'));
    })
}

// 上线环境Es6 模块化语法进行编译 commonjs
function buildprod() {
    return gulp.src(entry)
        // opiotns,.babelrc
        .pipe(babel({
            babelrc: false,
            ignore: [cleanEntry],
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }))
        .pipe(gulp.dest('dist'));
}

// 代码清洗
function buildconfig() {
    return gulp.src(entry)
        // transform the files here.
        .pipe(rollup({
            // 指定输出格式
            input: cleanEntry,
            output: {
                format: 'cjs'
            },
            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                })
            ]
        }))
        .pipe(gulp.dest('./dist'));
}
// 默认任务
let build = gulp.series(builddev);
if (process.env.NODE_ENV === "production") {
    build = gulp.series(buildprod, buildconfig);
}

gulp.task('default', build);
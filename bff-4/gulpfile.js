// gulp 用来打包编译服务端代码目的如下
let gulp = require("gulp");
let watch = require("gulp-watch");
let babel = require("gulp-babel");
let plumber = require('gulp-plumber');
let rollup = require('gulp-rollup');
const replace = require('@rollup/plugin-replace');

let entry = "./src/server/**/*.js";
let clearEntry = "./src/server/config/index.js";

// 目的一：将开发环境 ES6 语法进行编译e
function builddev() {
    return watch(entry, {
        ignoreInitial: false
    }, () => {
        gulp.src(entry)
            .pipe(plumber())
            .pipe(babel({
                // 因为 webpack 已经用了 .babelrc 配置文件了
                // 所以这里我们就不使用配置文件了，我们直接使用 options 来配置
                babelrc: false,
                "plugins": ["@babel/plugin-transform-modules-commonjs"]
            }))
            .pipe(gulp.dest('dist'));
    })
}
 
// 目的二：将上产环境 ES6 语法进行编译
function buildprod() {
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false,
            ignore: [clearEntry],
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }))
        .pipe(gulp.dest('dist'));
}

// 目的三：代码清洗
function buildconfig() {
    return gulp.src(entry)
        .pipe(rollup({
            input: clearEntry,
            // 指定输出格式
            output: {
                format: "cjs"
            },
            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                })
            ]
        }))
        .pipe(gulp.dest('./dist'));
}

// 默认任务，编译代码
let build = gulp.series(builddev);
// 如果是生产环境，还需要做代码清洗任务
if (process.env.NODE_ENV === "production") {
    build = gulp.series(buildprod, buildconfig);
}

gulp.task('default', build);
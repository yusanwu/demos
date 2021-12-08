const { resolve } = require("path");
const { argv } = require("yargs");
const { merge } = require("webpack-merge");
const { sync } = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlAfterPlugin = require("./config/HtmlAfterPlugin");

/* 动态引入对应环境的配置文件 */
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

/* 读取所有入口文件 */
const files = sync('./src/web/views/**/*.entry.js');

/* 配置入口参数 */
let _entry = {};
let _plugins = [];
for(let item of files){
    if(/([a-zA-Z]+-[a-zA-Z]+)\.entry.js/.test(item)){
        const entryKey = RegExp.$1;
        _entry[entryKey] = item;
        const [dist, template] = entryKey.split("-");
        _plugins.push(new HtmlWebpackPlugin({
            filename: `../views/${dist}/pages/${template}.html`,
            template: `./src/web/views/${dist}/pages/${template}.html`,
            chunks: ['runtime', entryKey],
            inject: false
        }));
    }
}

const webpackConfig = {
    entry: _entry,
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        ..._plugins,
        new HtmlAfterPlugin()
    ],
    resolve: {
        alias: {
            "@": resolve("./src/web")
        }
    }
}

module.exports = merge(webpackConfig, _mergeConfig);
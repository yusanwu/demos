// 配置文件
const {
    argv
} = require('yargs');
const {
    merge
} = require('webpack-merge');
const {
    sync
} = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const files = sync('./src/web/views/**/*.entry.js');
let _entry = {};
let _plugins = [];
for (let item of files) {
    if (/([a-zA-Z]+-[a-zA-Z]+)\.entry.js/.test(item)) {
        const entryKey = RegExp.$1;
        _entry[entryKey] = item;
        const [dist, template] = entryKey.split('-');
        _plugins.push(new HtmlWebpackPlugin({
            filename: `../views/${dist}/pages/${template}.html`,
            template: `./src/web/views/${dist}/pages/${template}.html`,
            // books-list
            chunks: ['runtime',entryKey],
            inject: false
        }))
    }

}
const webpackConfig = {
    entry: _entry,
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        ..._plugins
    ]
};
module.exports = merge(webpackConfig, _mergeConfig);
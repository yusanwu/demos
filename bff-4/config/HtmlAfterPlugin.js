const HtmlWebpackPlugin = require('html-webpack-plugin');
// 插件的名字
const pluginName = 'HtmlAfterPlugin';

// 拼接tag标签
const assetHelp = data => {
    let js = [];
    for (let item of data.js) {
        js.push(`<script src="${item}"></script>`)
    }
    return {
        js
    }
}

// 
class HtmlAfterPlugin {
    constructor() {
        this.jsArr = []
    }
    // webpack 的核心-compiler
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, (compilation) => {
            console.log('webpack 构建开始')
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName,
                (data, cb) => {
                    let _html = data.html;
                    _html = _html.replace('<!-- injectjs -->', this.jsArr.join(''));
                    _html = _html.replace(/@components/g, "../../../components");
                    _html = _html.replace(/@layouts/g, "../../layouts");
                    // console.log('hookdata', data);
                    data.html = _html;
                    cb(null, data)
                }
            )
            HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
                pluginName,
                (data, cb) => {
                    // console.log('tag', data);
                    const {
                        js
                    } = assetHelp(data.assets);
                    this.jsArr = js;
                    cb(null, data)
                }
            )
        })
    }
}

module.exports = HtmlAfterPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pluginName = 'HtmlAfterPlugin';

const assetHelp = data => {
    let js = [];
    for (let item of data.js) {
        js.push(`<script src="${item}"></script>`);
    }
    return {js}
};

class HtmlAfterPlugin {
    constructor() {
        this.jsArr = [];
    }
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            console.log("构建开始");
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName,
                (data, cb) => {
                    let _html = data.html;
                    _html = _html.replace('<!-- injectjs -->', this.jsArr.join(''));
                    _html = _html.replace(/@components/g, "../../../components");
                    _html = _html.replace(/@layouts/g, "../../layouts");
                    data.html = _html;
                    cb(null, data)
                }
            )
            HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
                pluginName,
                (data, cb) => {
                    const { js } = assetHelp(data.assets);
                    this.jsArr = js;
                    cb(null, data)
                }
            )
        });
    }
}

module.exports = HtmlAfterPlugin;
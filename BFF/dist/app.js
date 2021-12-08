"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _co = _interopRequireDefault(require("co"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _koa2ConnectHistoryApiFallback = require("koa2-connect-history-api-fallback");

var _log4js = _interopRequireDefault(require("log4js"));

var _config = _interopRequireDefault(require("./config"));

var _controllers = _interopRequireDefault(require("./controllers"));

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default(); // 错误日志记录

_log4js.default.configure({
  appenders: {
    globalError: {
      type: "file",
      filename: "./logs/error.log"
    }
  },
  categories: {
    default: {
      appenders: ["globalError"],
      level: "error"
    }
  }
});

const logger = _log4js.default.getLogger("globalError"); // 容错处理


_errorHandler.default.error(app, logger); // 页面模板配置


app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewDir,
  cache: _config.default.cache,
  ext: 'html',
  varControls: ["[[", "]]"]
})); // 中间件

app.use((0, _koaStatic.default)(_config.default.staticDir));
`fs`; // 若需测试 404 ，请先将该中间件注释，否则 404 页面会被转到根页面

app.use((0, _koa2ConnectHistoryApiFallback.historyApiFallback)({
  index: "/",
  whiteList: ["/api", "/books"]
})); // 路由配置

(0, _controllers.default)(app);
app.listen(_config.default.port, () => {
  console.log(`server is running at ${_config.default.port}`);
});
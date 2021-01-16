"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _co = _interopRequireDefault(require("co"));

var _config = _interopRequireDefault(require("./config"));

var _koa2ConnectHistoryApiFallback = require("koa2-connect-history-api-fallback");

var _controllers = _interopRequireDefault(require("./controllers"));

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _log4js = _interopRequireDefault(require("log4js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Koa = require('koa');
// const co = require('co');
// const config = require('./config')
// const {
//   historyApiFallback
// } = require('koa2-connect-history-api-fallback');
// const initController = require('./controllers')
// const errorHandler = require('./middlewares/errorHandler');
// const staticServer = require('koa-static');
// const render = require('koa-swig');
// const log4js = require("log4js");
const app = new _koa.default(); // 错误日志记录

_log4js.default.configure({
  appenders: {
    globalError: {
      type: "file",
      filename: "./logs/error.log"
    }
  },
  // 只有错误是error级别才会写入文件
  categories: {
    default: {
      appenders: ["globalError"],
      level: "error"
    }
  }
});

const logger = _log4js.default.getLogger("globalError"); // swig 模板


app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewDir,
  cache: _config.default.cache,
  // disable, set to false
  ext: 'html',
  varControls: ["[[", "]]"]
})); // 中间件

app.use((0, _koaStatic.default)(_config.default.staticDir)); // 

app.use((0, _koa2ConnectHistoryApiFallback.historyApiFallback)({
  index: "/",
  whiteList: ['/api', '/books']
}));

_errorHandler.default.error(app, logger); // 初始化路由


(0, _controllers.default)(app);
app.listen(_config.default.port, () => {
  console.log(`server is running at ${_config.default.port}`);
});
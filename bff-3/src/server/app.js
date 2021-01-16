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


import Koa from 'koa';
import co from "co";
import config from './config';
import {historyApiFallback} from 'koa2-connect-history-api-fallback';
import initController from './controllers'
import errorHandler from './middlewares/errorHandler';
import staticServer from 'koa-static';
import render from 'koa-swig';
import log4js from 'log4js';

const app = new Koa();

// 错误日志记录
log4js.configure({
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
const logger = log4js.getLogger("globalError");

// swig 模板
app.context.render = co.wrap(render({
  root: config.viewDir,
  cache: config.cache, // disable, set to false
  ext: 'html',
  varControls: ["[[", "]]"]
}));


// 中间件
app.use(staticServer(config.staticDir));

// 
app.use(historyApiFallback({
  index: "/",
  whiteList: ['/api','/books']
}));
errorHandler.error(app, logger);



// 初始化路由
initController(app);


app.listen(config.port, () => {
  console.log(`server is running at ${config.port}`);
})
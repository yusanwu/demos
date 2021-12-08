import Koa from "koa";
import co from "co";
import render from "koa-swig";
import staticServer from "koa-static";
import {historyApiFallback} from "koa2-connect-history-api-fallback";
import log4js from "log4js";
import config from "./config";
import initController from './controllers';
import errorHandler from "./middlewares/errorHandler";
const app = new Koa();

// 错误日志记录
log4js.configure({
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
const logger = log4js.getLogger("globalError");

// 容错处理
errorHandler.error(app, logger);

// 页面模板配置
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache,
    ext: 'html',
    varControls:["[[","]]"]
}));

// 中间件
app.use(staticServer(config.staticDir));`fs`
// 若需测试 404 ，请先将该中间件注释，否则 404 页面会被转到根页面
app.use(historyApiFallback({
    index: "/",
    whiteList: ["/api", "/books"]
}));

// 路由配置
initController(app);

app.listen(config.port, () => {
    console.log(`server is running at ${config.port}`);
});
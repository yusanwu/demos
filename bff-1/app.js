const Koa = require("koa");
const co = require("co");
const render = require("koa-swig");
const staticServer = require("koa-static");
const {historyApiFallback} = require("koa2-connect-history-api-fallback");
const config = require("./config");
const initController = require('./controllers');
const errorHandler = require("./middlewares/errorHandler");
const app = new Koa();

// 容错处理
errorHandler.error(app);

// 页面模板配置
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache,
    ext: 'html',
    varControls:["[[","]]"]
}));

// 中间件
app.use(staticServer(config.staticDir));
// 若需测试 404 ，请先将该中间件注释，否则 404 页面会被转到根页面
app.use(historyApiFallback({
    index: "/",
    whiteList: ["/api"]
}));

// 路由配置
initController(app);

app.listen(config.port, () => {
    console.log(`server is running at ${config.port}`);
});
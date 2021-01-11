const Koa = require('koa');
const co = require('co');
const config = require('./config')
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const initController = require('./controllers')
const errorHandler = require('./middlewares/errorHandler');
const staticServer = require('koa-static');
const render = require('koa-swig');
const app = new Koa();

// swig 模板
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache, // disable, set to false
    ext: 'html',
    varControls:["[[","]]"]
  }));


// 中间件
app.use(staticServer(config.staticDir));
app.use(historyApiFallback({ index:"/",whiteList: ['/api'] }));
errorHandler.error(app);



// 初始化路由
initController(app);


app.listen(config.port, () => {
    console.log(`server is running at ${config.port}`);
})
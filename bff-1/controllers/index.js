const Router = require("@koa/router");
const router = new Router();
const IndexController = require("./IndexController");
const indexController = new IndexController();

// 此处的参数，由 app.js 中传入
function initController(app){
    // 分发需求到对应的路由管理器中
    router.get('/', indexController.actionIndex);
    // @koa/router 官方配置引入
    app.use(router.routes()).use(router.allowedMethods());
}

module.exports = initController;
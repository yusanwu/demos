import Router from "@koa/router";
const router = new Router();
import IndexController from "./IndexController";
const indexController = new IndexController();
import ApiController from "./ApiController";
const apiController = new ApiController();
import BooksController from "./BooksController";
const booksController = new BooksController();

// 此处的参数，由 app.js 中传入
function initController(app){
    // 分发需求到对应的路由管理器中
    router.get('/', indexController.actionIndex);
    router.get('/api/getBooksList', apiController.getBooksList);
    router.get('/books/list', booksController.getBooksList);
    // @koa/router 官方配置引入
    app.use(router.routes()).use(router.allowedMethods());
}

export default initController;
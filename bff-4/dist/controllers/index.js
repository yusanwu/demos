"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(require("@koa/router"));

var _IndexController = _interopRequireDefault(require("./IndexController"));

var _ApiController = _interopRequireDefault(require("./ApiController"));

var _BooksController = _interopRequireDefault(require("./BooksController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _router.default();
const indexController = new _IndexController.default();
const apiController = new _ApiController.default();
const booksController = new _BooksController.default(); // 此处的参数，由 app.js 中传入

function initController(app) {
  // 分发需求到对应的路由管理器中
  router.get('/', indexController.actionIndex);
  router.get('/api/getBooksList', apiController.getBooksList);
  router.get('/books/list', booksController.getBooksList);
  router.get('/books/create', booksController.getBooksCreate); // @koa/router 官方配置引入

  app.use(router.routes()).use(router.allowedMethods());
}

var _default = initController;
exports.default = _default;
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

const indexController = new _IndexController.default();
const apiController = new _ApiController.default();
const booksController = new _BooksController.default();
const router = new _router.default();

function initController(app) {
  router.get('/', indexController.actionIndex);
  router.get('/api/getBooksList', apiController.actionBooksList);
  router.get('/books/list', booksController.actionBooksList);
  router.get('/books/create', booksController.actionBooksCreate);
  app.use(router.routes()).use(router.allowedMethods());
}

var _default = initController;
exports.default = _default;
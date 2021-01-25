"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

var _BooksModel = _interopRequireDefault(require("../models/BooksModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksController extends _Controller.default {
  constructor() {
    super();
  }

  async getBooksList(ctx) {
    // let booksModel = new BooksModel();
    // 从 model 层获取数据
    // let data = await booksModel.getBooksList();
    // 返回
    // ctx.body = await ctx.render('books/list', { data });
    ctx.body = await ctx.render('books/pages/list', {
      data
    });
  }

  async getBooksCreate(ctx) {
    // let booksModel = new BooksModel();
    // 从 model 层获取数据
    // let data = await booksModel.getBooksList();
    // 返回
    // ctx.body = await ctx.render('books/list', { data });
    ctx.body = await ctx.render('books/pages/create', {
      data
    });
  }

}

var _default = BooksController;
exports.default = _default;
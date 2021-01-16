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

  async actionBooksList(ctx) {
    // const booksModel = new BooksModel();
    // const result = await booksModel.getBooksList();
    // ctx.body = await ctx.render('books/list',{
    //     data:result.data
    // })
    ctx.body = await ctx.render('books/pages/list');
  }

  async actionBooksCreate(ctx) {
    // const booksModel = new BooksModel();
    // const result = await booksModel.getBooksList();
    // ctx.body = await ctx.render('books/list',{
    //     data:result.data
    // })
    ctx.body = await ctx.render('books/pages/create');
  }

}

var _default = BooksController;
exports.default = _default;
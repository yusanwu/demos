"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

var _BooksModel = _interopRequireDefault(require("../models/BooksModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ApiController extends _Controller.default {
  constructor() {
    super();
  }

  async actionBooksList(ctx) {
    const booksModel = new _BooksModel.default();
    const result = await booksModel.getBooksList();
    ctx.body = {
      data: result.data
    };
  }

}

var _default = ApiController;
exports.default = _default;
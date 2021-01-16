"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _safeRequest = _interopRequireDefault(require("../utils/safeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksModel {
  getBooksList() {
    return _safeRequest.default.fetch('http://localhost/basic/web/index.php?r=books');
  }

  findBook(id) {
    return _safeRequest.default.fetch('http://localhost/basic/web/index.php?r=books');
  } // 其它接口


}

var _default = BooksModel;
exports.default = _default;
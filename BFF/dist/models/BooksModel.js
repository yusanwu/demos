"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BooksModel {
  // 获取图书列表的接口
  getBooksList() {
    // return fetch('http://localhost/basic/web/index.php?r=books');
    // 模拟数据返回
    return [{
      name: "三国演义",
      price: 46
    }, {
      name: "西游记",
      price: 48
    }, {
      name: "红楼梦",
      price: 38
    }, {
      name: "水浒传",
      price: 42
    }];
  }

}

var _default = BooksModel;
exports.default = _default;
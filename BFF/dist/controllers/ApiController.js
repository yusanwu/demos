"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ApiController extends _Controller.default {
  constructor() {
    super();
  }

  async getBooksList(ctx) {
    ctx.body = {
      data: [{
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
      }]
    };
  }

}

var _default = ApiController;
exports.default = _default;
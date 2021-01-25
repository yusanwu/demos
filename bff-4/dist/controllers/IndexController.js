"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IndexController extends _Controller.default {
  constructor() {
    super();
  }

  async actionIndex(ctx) {
    // throw new Error("这是一个错误信息");
    // ctx.body = "<p>路由配置成功了~</p>";
    // ctx.body = await ctx.render("index", {
    //     message: "后端数据渲染"
    // });
    ctx.body = "BFF架构IV";
  }

}

var _default = IndexController;
exports.default = _default;
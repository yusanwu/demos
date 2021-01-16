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
    // ctx.render
    // throw new Error('自定义错误');
    // ctx.body = await ctx.render('index',{
    //     message:"后端数据"
    // });
    ctx.body = "🏮京程一灯";
  }

}

var _default = IndexController;
exports.default = _default;
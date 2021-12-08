"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SafeRequest {
  static fetch(url) {
    // 响应数据的模板
    let result = {
      code: 0,
      msg: '',
      data: null
    };
    return new Promise(resolve => {
      (0, _axios.default)(url).then(res => {
        result.data = res.data;
        resolve(res);
      }).catch(e => {
        // 填充接口返回的错误信息，然后返回
        result.message = e.message;
        result.code = -1;
        resolve(result);
      });
    });
  }

}

var _default = SafeRequest;
exports.default = _default;
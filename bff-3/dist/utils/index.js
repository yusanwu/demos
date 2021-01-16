"use strict";

(function () {
  var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || this || {}; // Create a safe reference to the Underscore object for use below.
  // 编写工具库一种常规写法 核心

  var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  _.each = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i], i);
    }

    return arr;
  };

  root._ = _;
})();
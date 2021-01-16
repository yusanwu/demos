(function () {
    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this || {};

    // Create a safe reference to the Underscore object for use below.
    // 编写工具库一种常规写法 核心
    var _ = function (obj) {
        if (obj instanceof _) return obj;
        console.log('this', this);
        if (!(this instanceof _)) return new _(obj);
        // 传入的参数就记录到_wrapped;
        this._wrapped = obj;
    }
    _.isFunction = function (obj) {
        return typeof obj == 'function' || false;
    };
    // _functions 遍历所有挂载到 _ 身上的 方法
    // obj 是 _
    _.functions = function (obj) {
        var names = [];
        // _.xxx _.map _.each
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };
    _.each = function (arr, fn) {
        for (let i = 0; i < arr.length; i++) {
            fn(arr[i], i);
        }
        return arr;
    }
    /* 
     1. 每隔一段时间，执行一次函数
     2. 第一次触发，立即执行
     3. 如果在间隔时间内触发，放在间隔末尾再执行
     2000  1000 点击 
    */
    _.throttle = function (cb, t) {
        let isFirst = true;
        let execDate = +new Date();
        let timeoutId = null;
        return function () {
            if (isFirst) {
                cb();
                execDate = +new Date();
                isFirst = false;
            } else {
                const currentDate = +new Date();
                if (currentDate - execDate >= t) {
                    cb();
                    execDate = +new Date();
                } else {
                    timeoutId && clearTimeout(timeoutId);
                    const timeWait = t - ((+new Date()) - execDate);
                    timeoutId = setTimeout(() => {
                        cb();
                        execDate = +new Date();
                    }, timeWait)
                }
            }
        }
    }
    // Add your own custom functions to the Underscore object.
    _.mixin = function (obj) {
        // [each,map,...]
        _.each(_.functions(obj), function (name) {
            // 拿到对应的工具函数
            /* 
                _[name] = obj[name]
                自定义，
                _.自定义方法
                扩展自定义方法
            */
            var func = _[name] = obj[name];

            // _(arr).each
            // fn.prototype.eact  fn.each
            _.prototype[name] = function () {
                /* 将我们的参数进行合并 */
                /* console.log(this._wrapped,arguments);
                var args = [this._wrapped]; */
                // Array.prototype.push.apply(args, arguments);

                var args = [this._wrapped];
                args.push(...arguments);

                return func.apply(_, args);
            };
        });
        return _;
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);
    root._ = _;
})()
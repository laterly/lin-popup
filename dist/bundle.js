/*!
 * js-lin v1
 * (c) 2019-05-23 12:21 laterly
 */
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Public =
/*#__PURE__*/
function () {
  function Public() {
    _classCallCheck(this, Public);

    this.handlers = {};
  }

  _createClass(Public, [{
    key: "on",
    value: function on(eventType, handler) {
      var self = this;

      if (!(eventType in self.handlers)) {
        self.handlers[eventType] = [];
      }

      self.handlers[eventType].push(handler);
      return this;
    } // 触发事件(发布事件)

  }, {
    key: "emit",
    value: function emit(eventType) {
      var self = this;
      var handlerArgs = Array.prototype.slice.call(arguments, 1);

      for (var i = 0; i < self.handlers[eventType].length; i++) {
        self.handlers[eventType][i].apply(self, handlerArgs);
      }

      return self;
    } // 删除订阅事件

  }, {
    key: "off",
    value: function off(eventType, handler) {
      var currentEvent = this.handlers[eventType];
      var len = 0;

      if (currentEvent) {
        len = currentEvent.length;

        for (var i = len - 1; i >= 0; i--) {
          if (currentEvent[i] === handler) {
            currentEvent.splice(i, 1);
          }
        }
      }

      return this;
    }
  }]);

  return Public;
}();

var publish = new Public();

function trimStr(str, tool) {
  //去除所有空格
  if (tool && tool == true) {
    str = str.replace(/\s+/g, "");
  } else {
    //去除前后空格
    str = str.replace(/^\s+|\s+$/g, "");
  }

  return str;
}

//获取地址栏参数
function queryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return unescape(r[2]);
  }

  return null;
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) == "[object Object]";
}

function isFun(fun) {
  return Object.prototype.toString.call(fun) == "[object Function]";
}

function isNumber(num) {
  return Object.prototype.toString.call(num) == "[object Number]";
}

function isEmptyObj(o) {
  //空对象判断
  if (_typeof(o) == "object" && o !== null) {
    for (var i in o) {
      return false;
    }

    return true;
  }

  return false;
}

function jsop() {}

//产生一个随机整数
function randomInteger(min, max, max_in) {
  var maxIn = max_in ? 1 : 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + maxIn)) + min;
}

//加减乘除，支持浮点数
//加法add(x,y) 将x,y两个字符串相加，返回值为x+y的结果。第三个参数true,add(x,y,true)则返回的结果按照四舍五入保留两位小数
function add(num1, num2, bool) {
  var r1, r2, m, t;

  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = num1.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));
  if (bool) t = ((num1 * m + num2 * m) / m).toFixed(2);else t = (num1 * m + num2 * m) / m;
  return t;
} //减法subtract(x,y) 将x,y两个字符串相减，返回值为x-y的结果。第三个参数true,subtract(x,y,true)则返回的结果按照四舍五入保保留两位小数

function subtract(num1, num2, bool) {
  var r1, r2, m, t;

  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = num1.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));

  if (bool) t = ((num1 * m - num2 * m) / m).toFixed(2);else t = (num1 * m - num2 * m) / m;
  return t;
} //乘法multiply(x,y) 将x,y两个字符串相乘，返回值为x*y的结果。第三个参数true,multiply(x,y,true)则返回的结果按照四舍五入保留两位小数

function multiply(num1, num2, bool) {
  var m = 0;
  var s1, s2, t;
  s1 = num1.toString();
  s2 = num2.toString();

  try {
    m += s1.split(".")[1].length;
  } catch (e) {}

  try {
    m += s2.split(".")[1].length;
  } catch (e) {}

  t = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  if (bool) t = t.toFixed(2);
  return t;
} //除法divide(x,y) 将x,y两个字符串相除，返回值为x/y的结果。如果想保留两位小数,给个参数true divide(x,y,true)则返回的结果按照四舍五入保留两位小数

function divide(num1, num2, bool) {
  var m = 0;
  var s1, s2, t;
  s1 = num1.toString();
  s2 = num2.toString();

  try {
    m += s1.split(".")[1].length;
  } catch (e) {}

  try {
    m += s2.split(".")[1].length;
  } catch (e) {}

  t = Number(s1.replace(".", "")) / Number(s2.replace(".", "")) / Math.pow(10, m);
  if (bool) t = t.toFixed(2);
  return t;
} //compare(x,y) 比较x,y大小,x>y返回1，等于返回0，小于返回-1
//取出数字最大值
//maxNum(x,y,z...) or maxNum([x,y,z]) 取出最大值

function maxNum(arr) {
  var newArr = [];

  if (arguments.length == 1) {
    if (isArray(arr)) newArr = arr;else {
      newArr = arr.split(",");
    }
  } else {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        newArr.push(item);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return Math.max.apply(Math, newArr);
} //取出数字最小值
//minNum(x,y,z...) or minNum([x,y,z]) 取出最小值

function minNum(arr) {
  var newArr = [];

  if (arguments.length == 1) {
    if (isArray(arr)) newArr = arr;else {
      newArr = arr.split(",");
    }
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        newArr.push(item);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return Math.min.apply(Math, newArr);
}

export { add, divide, isArray, isEmptyObj, isFun, isNumber, isObject, jsop as jsonp, maxNum, minNum, multiply, publish, queryString, randomInteger, subtract, trimStr };

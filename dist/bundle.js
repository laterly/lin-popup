/*!
 * js-lin v1
 * (c) 2019-05-22 17:53 laterly
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

export { isArray, isEmptyObj, isFun, isNumber, isObject, jsop as jsonp, publish, queryString, randomInteger, trimStr };

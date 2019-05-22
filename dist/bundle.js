
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
function isArray(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}

function isObj(obj) {
  return Object.prototype.toString.call(obj) == "[object Object]";
}

function isFun(fun) {
  return Object.prototype.toString.call(fun) == "[object Function]";
}

function isNum(num) {
  return Object.prototype.toString.call(num) == "[object Number]";
}

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

export { isArray, isEmptyObj, isFun, isNum, isObj };

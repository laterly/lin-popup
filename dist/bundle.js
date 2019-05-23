'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Public {
    constructor() {
        this.handlers = {};
    }
    on(eventType, handler) {
        var self = this;
        if (!(eventType in self.handlers)) {
            self.handlers[eventType] = [];
        }
        self.handlers[eventType].push(handler);
        return this;
    }
    // 触发事件(发布事件)
    emit(eventType) {
        var self = this;
        var handlerArgs = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < self.handlers[eventType].length; i++) {
            self.handlers[eventType][i].apply(self, handlerArgs);
        }
        return self;
    }
    // 删除订阅事件
    off(eventType, handler) {
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
}
let publish = new Public();

function trimStr(str,tool) {
    //去除所有空格
    if(tool&&tool==true){
    str = str.replace(/\s+/g,"");    
    }else{
    //去除前后空格
    str = str.replace(/^\s+|\s+$/g,"");
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

function isArray(arr){
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
  if (typeof o == "object" && o !== null) {
    for (var i in o) {
      return false;
    }
    return true;
  }
  return false;
}

function jsop(){

}

//产生一个随机整数
function randomInteger(min, max, max_in) {
    let maxIn = max_in ? 1 : 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + maxIn)) + min;
}

//加减乘除，支持浮点数
//加法add(x,y) 将x,y两个字符串相加，返回值为x+y的结果。第三个参数true,add(x,y,true)则返回的结果按照四舍五入保留两位小数
function add(num1, num2, bool) {
  let r1, r2, m, t;
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
  if (bool) t = ((num1 * m + num2 * m) / m).toFixed(2);
  else t = (num1 * m + num2 * m) / m;
  return t;
}
//减法subtract(x,y) 将x,y两个字符串相减，返回值为x-y的结果。第三个参数true,subtract(x,y,true)则返回的结果按照四舍五入保保留两位小数
function subtract(num1, num2, bool) {
  let r1, r2, m, t;
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
  if (bool) t = ((num1 * m - num2 * m) / m).toFixed(2);
  else t = (num1 * m - num2 * m) / m;
  return t;
}
//乘法multiply(x,y) 将x,y两个字符串相乘，返回值为x*y的结果。第三个参数true,multiply(x,y,true)则返回的结果按照四舍五入保留两位小数
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
  t =
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m);
  if (bool) t = t.toFixed(2);
  return t;
}
//除法divide(x,y) 将x,y两个字符串相除，返回值为x/y的结果。如果想保留两位小数,给个参数true divide(x,y,true)则返回的结果按照四舍五入保留两位小数
function divide(num1, num2, bool) {
  let m = 0;
  var s1, s2, t;
  s1 = num1.toString();
  s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  t =
    Number(s1.replace(".", "")) / Number(s2.replace(".", "")) / Math.pow(10, m);
  if (bool) t = t.toFixed(2);
  return t;
}

//取出数字最大值
//maxNum(x,y,z...) or maxNum([x,y,z]) 取出最大值
function maxNum(arr) {
  let newArr = [];
  if (arguments.length == 1) {
    if (isArray(arr)) newArr = arr;
    else {
      newArr = arr.split(",");
    }
  } else {
    for (let item of arguments) {
      newArr.push(item);
    }
  }
  return Math.max.apply(Math, newArr);
}
//取出数字最小值
//minNum(x,y,z...) or minNum([x,y,z]) 取出最小值
function minNum(arr) {
  let newArr = [];
  if (arguments.length == 1) {
    if (isArray(arr)) newArr = arr;
    else {
      newArr = arr.split(",");
    }
  }else{
    for (let item of arguments) {
        newArr.push(item);
    }
  }
  return Math.min.apply(Math, newArr);
}

exports.add = add;
exports.divide = divide;
exports.isArray = isArray;
exports.isEmptyObj = isEmptyObj;
exports.isFun = isFun;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.jsonp = jsop;
exports.maxNum = maxNum;
exports.minNum = minNum;
exports.multiply = multiply;
exports.publish = publish;
exports.queryString = queryString;
exports.randomInteger = randomInteger;
exports.subtract = subtract;
exports.trimStr = trimStr;

function isNum(num) {
  return Object.prototype.toString.call(num) == "[object Number]";
}

export default isNum;
function isObj(obj) {
  return Object.prototype.toString.call(obj) == "[object Object]";
}
export default isObj;

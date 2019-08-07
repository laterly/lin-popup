
function isFun(fun) {
  return Object.prototype.toString.call(fun) == "[object Function]";
}
export default isFun;

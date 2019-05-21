 function isEmptyObj(o) {
  //空对象判断
  if (typeof o == "object" && o !== null) {
    for (var i in o) {
      return false;
    }
    return true;
  }
  return false;
};
export default isEmptyObj;
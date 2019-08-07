function getRandom(number){
    return Math.ceil(Math.random()*Number(number));
}
function isJSONStr(str) {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object') {
                return true;
            } else {
                return false;
            }

        } catch (e) {
            return false;
        }
    } else {
        return false;
    }
}
function isEmptyObj(o){
    //空对象判断
    if (typeof o == 'object' && o !== null) {
      for (var i in o) {
        return false
      }
      return true
    }
    return false
}
function isString(str) {
    return Object.prototype.toString.call(str)=="[object String]";
  }
export{
    getRandom,
    isJSONStr,
    isEmptyObj,
    isString
}
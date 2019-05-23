console.log("111");
import {
  isArray,
  isObject,
  isFun,
  isNumber,
  isEmptyObj,
  trimStr,
  add,
  subtract,
  multiply,
  divide,
  maxNum,
  minNum
} from "./dist/bundle";

let arr = [1, 2, 3];
let obj = { a: 1 };
function a() {
  console.log(a);
}
let b = 1;
let o = {};
console.log(isArray(arr)); // true
console.log(isObject(obj)); // true
console.log(isFun(a));
console.log(isNumber(b));
console.log(isEmptyObj(o));
let str = " 1 25 ";
console.log(trimStr(str)); //1 25
console.log(trimStr(str, true)); //125
console.log(add(1.5, 2));
console.log(subtract(8, 2));
console.log(multiply(2.4, 2.23, true));
console.log(divide(6, 5, true));
let arrs = [1, 2, 3];
let strs = "1,2,3";
// console.log(maxNum(arrs));
console.log(maxNum(1,2,3));
console.log(minNum(arrs));
console.log(minNum(strs));
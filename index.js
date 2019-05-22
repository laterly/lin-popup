console.log('111');
import { isArray, isObj, isFun, isNum, isEmptyObj,trimStr } from "./dist/bundle";

let arr = [1, 2, 3]
let obj = { a: 1 }
function a() { 
    console.log(a);
}
let b = 1;
let o = {}
console.log(isArray(arr)); // true
console.log(isObj(obj)); // true
console.log(isFun(a));
console.log(isNum(b));
console.log(isEmptyObj(o));
let str=' 1 25 ';
console.log(trimStr(str)) //1 25
console.log(trimStr(str,true)) //125




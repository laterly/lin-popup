console.log('111');
import { isArray, isObj, isFun, isNum, loadJs } from "./dist/bundle";
import { setTimeout } from "core-js/library/web/timers";
let arr = [1, 2, 3]
let obj = { a: 1 }
function a() { 
    console.log(a);
}
let b = 1;
console.log(isArray(arr)); // true
console.log(isObj(obj)); // true
console.log(isFun(a));
console.log(isNum(b));




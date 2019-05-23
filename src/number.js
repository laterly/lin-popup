//加减乘除，支持浮点数
//加法add(x,y) 将x,y两个字符串相加，返回值为x+y的结果。第三个参数true,add(x,y,true)则返回的结果按照四舍五入保留两位小数
export function add(num1,num2,bool) {
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
    if(bool)
    t = ((num1 * m + num2 * m) / m).toFixed(2);
    else
    t = ((num1 * m + num2 * m) / m);
    return t;
}
//减法subtract(x,y) 将x,y两个字符串相减，返回值为x-y的结果。第三个参数true,subtract(x,y,true)则返回的结果按照四舍五入保保留两位小数
export function subtract(num1,num2,bool) {
    let r1,r2,m,n,t;
    try{
        r1 = num1.toString().split(".")[1].length;
    }catch(e){
        r1 = 0;
    }
     try{
        r2 = num1.toString().split(".")[1].length;
    }catch(e){
        r2 = 0;
    }
    m = Math.pow(10,Math.max(r1,r2));
    n = (r1 >= r2)? r1:r2; //动态控制精确长度
    if(bool)
    t = ((num1*m - num2*m)/m).toFixed(2)
    else
    t = ((num1*m - num2*m)/m);
    return t;
}
//乘法multiply(x,y) 将x,y两个字符串相乘，返回值为x*y的结果。第三个参数true,multiply(x,y,true)则返回的结果按照四舍五入保留两位小数
export function multiply(num1, num2,bool) {
    var m = 0; var s1,s2,t;
    s1 = num1.toString();
    s2 = num2.toString();
    try{
        m += s1.split(".")[1].length;
    }catch(e){	
    }
     try{
        m += s2.split(".")[1].length;
    }catch(e){	
    }
    t = Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
    if(bool)
        t=t.toFixed(2)
    return t;
}
//除法divide(x,y) 将x,y两个字符串相除，返回值为x/y的结果。如果想保留两位小数,给个参数true divide(x,y,true)则返回的结果按照四舍五入保留两位小数
export function divide(num1,num2,bool) {
    let m = 0; var s1,s2,t;
    s1 = num1.toString();
    s2 = num2.toString();
    try{
        m += s1.split(".")[1].length;
    }catch(e){	
    }
     try{
        m += s2.split(".")[1].length;
    }catch(e){	
    }
    t = (Number(s1.replace(".",""))/Number(s2.replace(".","")))/Math.pow(10,m);
    if(bool)
        t=t.toFixed(2)
    return t;
}
//compare(x,y) 比较x,y大小,x>y返回1，等于返回0，小于返回-1
import isArray from "./isArray.js"; //判断是否是数组
export function compareNum() {

}
//取出数字最大值
//maxNum(x,y,z...) or maxNum([x,y,z]) 取出最大值
export function maxNum(arr) {
    let newArr=[];
    if(isArray(arr))
        newArr=arr;
    else{
        newArr=arr.split(',');
    }
       
    return Math.max.apply(Math, newArr);
}
//取出数字最小值
//minNum(x,y,z...) or minNum([x,y,z]) 取出最小值
export function minNum(arr) {
    let newArr=[];
    if(isArray(arr))
        newArr=arr;
    else{
        newArr=arr.split(',');
    }
    return Math.min.apply(Math, newArr);
}

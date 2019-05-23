//加减乘除，支持浮点数
//加法add(x,y) 将x,y两个字符串相加，返回值为x+y的结果。第三个参数true,add(x,y,true)则返回的结果按照四舍五入保留两位小数
export function add(num1, num2, bool) {
    let r1, r2, m, t;
    try {
        r1 = num1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = num1.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    if (bool)
        t = ((num1 * m + num2 * m) / m).toFixed(2);
    else
        t = ((num1 * m + num2 * m) / m);
    return t;
}

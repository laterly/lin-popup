//日期工具集

/**
 * 格式化日期时间
 *
 * @param  {time} 时间
 * @param  {formatType} 格式类型
 * @return {String} 字符串
 *
 * @example formatDate('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
 * @example formatDate('2018-1-29', '{y}-{m}-{d} {h}:{i}:{s}') // -> 2018-01-29 00:00:00
 */
function formatDate(time, formatType) {
  if (arguments.length === 0) return null;
  if ((time + "").length === 10) {
    time = +time * 1000;
  }

  let format = formatType || "{y}-{m}-{d} {h}:{i}:{s}",
    date;
  if (typeof time === "object") {
    date = time;
  } else {
    date = new Date(time);
  }

  let formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  let timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    console.log('result',result,key);
    let value = formatObj[key];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      console.log('value0',value);
      value = "0" + value;
    }
    return value || 0;
  });
  return timeStr;
}
export default{
    formatDate:formatDate
}

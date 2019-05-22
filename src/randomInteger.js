//产生一个随机整数
function randomInteger(min, max, max_in) {
    let maxIn = max_in ? 1 : 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + maxIn)) + min;
}
  
export default randomInteger;
console.log("111");
import {
  toast,
  loading
} from "./dist/bundle";

// toast.msg('哈哈哈111');
// toast.success('哈哈哈');
// toast.warning('哈哈哈1');
// toast.error('哈哈哈1');
// import {
//   toats
// } from "lin-popup";
// //toast.msg({
//   text:'123',
//   duration:2500
// })
//toast.success()
//warning();
//terror();
// import {
//   loading
// } from "lin-popup";
let load=loading('正在加载');
console.log('load',load);
setTimeout(function(){
  load.hide();
},3000)

// load.hide();
// import {
//   dialog
// } from "lin-popup";
// dialog.alert()
//dialog.confirm


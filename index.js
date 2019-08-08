console.log("111");
// import {
//   toast,
//   loading,
//   dialog
// } from "./dist/bundle.js";
import {
  toast,
  loading,
  dialog
} from "lin-popup";
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
// console.log('load',load);
setTimeout(function(){
  load.hide();
},3000)

// load.hide();
// import {
//   dialog
// } from "lin-popup";
// dialog.alert()
// dialog.confirm({
//   title:'标题',
//   message:'你好啊'
// }).then(()=>{
//   console.log('确认');
// }).catch(()=>{
//   console.log('取消');
// })
// dialog.alert({
//   title:'标题',
//   message:'你好啊'
// }).then(()=>{
//   console.log('确认');
// })


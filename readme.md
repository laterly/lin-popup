# lin-popup
封装移动端弹窗组件，toast、dialog、loading，支持es6,支持srcipt标签引入
```
npm i lin-popup -D
```
## 1. toast
```
import { toast } from 'lin-popup';
```
- 示例（可参考 [demo.html](https://github.com/laterly/lin-popup/blob/master/demo/index.html) ）
```
toast.msg({
    text: '正在加载',
    duration: 2000
})
or
toast.msg('正在加载');
//其它
toast.success({
    text:'正在加载',
});
toast.success('成功');
toast.warning('警告');
toast.error('失败');
```
## 2.loading 
```
import { loading } from 'lin-popup';
```
- 示例（可参考 [demo.html](https://github.com/laterly/lin-popup/blob/master/demo/index.html) ）
```
let load=loading('正在加载');
setTimeout(()=>{
  load.hide();
},3000)
```

## 3.dialog
```
import { dialog } from 'lin-popup';
```
- 示例（可参考 [demo.html](https://github.com/laterly/lin-popup/blob/master/demo/index.html) ）
```
1.
dialog.confirm({
  title:'标题',
  message:'这里是内容消息'
}).then(()=>{
  console.log('确认');
}).catch(()=>{
  console.log('取消');
})
//不写title
dialog.confirm({
  message:'这里是内容消息'
}).then(()=>{
  console.log('确认');
}).catch(()=>{
  console.log('取消');
})
2.
dialog.alert({
  title:'标题',
  message:'这里是内容消息'
}).then(()=>{
   console.log('确认');
})
//不写标题
dialog.alert({
  message:'这里是内容消息'
}).then(()=>{
   console.log('确认');
})
```

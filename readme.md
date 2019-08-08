# lin-popup
封装移动端弹窗组件，toast、dialog、loading，支持es6,支持script标签引入
```
npm i lin-popup -D
```
## 1. toast
```
import { toast } from 'lin-popup';
```
- 示例
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
- 示例
```
let load=loading('正在加载');
setTimeout(()=>{
  load.hide();
},3000)
```

# lin-popup
封装移动端弹窗组件，toast、dialog、loading，支持es6,支持script标签引入
```
npm i lin-popup -D
```
## 1. toast
```
import { toast } from 'lin-popup';
```
- options

     | 参数    | 类型   |  默认值  | 说明|
     | text    | String | 正在加载 | 展示文本|
     | duration | Number  |  无  | 持续时间（ms）|
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

> 认真写自己的工具库，包含一些常用方法 [(码云链接地址)](https://gitee.com/lcbzm/lin-js.git)

```bash
# npm下载js-lin库
$ npm install js-lin
```

# js-lin

<table>
<thead>
<tr>
    <td>序号</td>
	<td>使用方法</td>
	<td>描述</td>
</tr>
</thead>
<tbody>
<tr>
    <td>1</td>
	<td>
	<pre>
	import { publish } from 'js-lin';
	
	function event(data) {
            console.log(data);
        }
    //订阅事件a
    publish.on('a', (data) => {
        event(data)
    });
    //触发事件a
    publish.emit('a', '我是第1次调用的参数');
	
	//在vue中Index.vue和Main.vue通信
	Index.vue:
export default {
	created() {
		//订阅事件a
    	publish.on('a', this.event);
 	},
	methods: {
		event(data){
			console.log('事件'+data);
		}
  	},
	beforeDestroy() {
		publish.remove('a', this.event);
 	},
};
	Main.vue:
export default {
	created() {
		this.emitEvent();
 	},
	methods: {
		emitEvent(){
			publish.emit('a', '参数');
		}
  	}
};
    </pre>
    </td>
    <td>订阅发布js，组件通信</td>

</tr>	
<tr>
    <td>1</td>
	<td>
	<pre>
	import { isArray } from 'js-lin';
	let arr=['1','2','3'];
	isArray(arr);// true
	</pre>
	</td> 
	<td>判断是否为数组</td>
</tr>
<tr>
    <td>2</td>
	<td>
	<pre>
	import { isObj } from 'js-lin';
	let obj = { a: 1 };
	isObj(obj);// true
	</pre>
	</td> 
	<td>判断是否是对象</td>
</tr>
<tr>
    <td>3</td>
	<td>
	<pre>
	import { isFun } from 'js-lin';
	function a() { 
    	console.log(123);
	}
	isFun(a);// true
	</pre>
	</td> 
	<td>判断是否是方法</td>
</tr>
<tr>
    <td>4</td>
	<td>
	<pre>
	import { isNum } from 'js-lin';
	let b = 1;
	isNum(b);// true
	</pre>
	</td> 
	<td>判断是否是方法</td>
</tr>
<tr>
    <td>5</td>
	<td>
	<pre>
	import { isEmptyObj } from 'js-lin';
	let o = {};
	isEmptyObj(o);// true
	</pre>
	</td> 
	<td>判断是否是空对象</td>
</tr>
</tbody>
</table>

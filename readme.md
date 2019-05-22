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
    //订阅事件a
    publish.on('a', (data) => {
        console.log(data);
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
	&lt;template&gt;
  		&lt;div class=&quot;index&quot; @click=&quot;emitEvent&quot;&gt;main&lt;/div&gt;
	&lt;/template&gt;
	export default {
	methods: {
		emitEvent(){
			publish.emit('a', '参数');
		}
  	}
	};
</pre>
    </td>
    <td>订阅发布js，vue或者小程序等组件通信</td>
</tr>
<tr>
    <td>1</td>
	<td>
	<pre>
	import { queryString } from 'js-lin';
	假设地址为：http://localhost:1234/?name=1
	let name = queryString("name"); //1
	</pre>
	</td> 
	<td>获取地址栏参数</td>
</tr>
<tr>
    <td>1</td>
	<td>
	<pre>
	import { trimStr } from 'js-lin';
	let str=' 1 25 ';
	trimStr(str) //1 25
	trimStr(str,true) //125
	</pre>
	</td> 
	<td>去除字符串两边的空格，如果有第二个参数true，则去除所有空格</td>
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
	import { isObject } from 'js-lin';
	let obj = { a: 1 };
	isObject(obj);// true
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
	import { isNumber } from 'js-lin';
	let b = 1;
	isNumber(b);// true
	</pre>
	</td> 
	<td>判断是否是方法</td>
</tr>
<tr>
    <td>4</td>
	<td>
	<pre>
	import { isString } from 'js-lin';
	let b = '123';
	isString(b);// true
	</pre>
	</td> 
	<td>判断是否是字符串</td>
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

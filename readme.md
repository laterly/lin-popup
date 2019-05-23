> 认真写自己的工具库，包含一些常用方法 [(码云链接地址)](https://gitee.com/lcbzm/lin-js.git)

```bash
# npm下载js-lin库
$ npm install js-lin -D
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
    <td>2</td>
	<td>
	<pre>
	import { add } from 'js-lin';
	加法add(x,y) 
	//将x,y两个字符串相加，返回值为x+y的结果。
	//如果第三个参数true,add(x,y,true)则返回的结果按照四舍五入保留两位小数
	add(1.5,2) //3.5
	add(1.5,2,true) //3.50
	</pre>
	</td> 
	<td>加法运算，支持浮点数</td>
</tr>
<tr>
    <td>3</td>
	<td>
	<pre>
	import { subtract } from 'js-lin';
	减法subtract(x,y)
	//将x,y两个字符串相减，返回值为x-y的结果。
	//如果第三个参数true,subtract(x,y,true)则返回的结果按照四舍五入保留两位小数
	subtract(8.2,2) //6.2
	subtract(8.2,2,true) //6.20
	</pre>
	</td> 
	<td>减法运算，支持浮点数</td>
</tr>
<tr>
    <td>4</td>
	<td>
	<pre>
	import { multiply } from 'js-lin';
	乘法multiply(x,y)
	//将x,y两个字符串相乘，返回值为x*y的结果。
	//如果第三个参数true,multiply(x,y,true)则返回的结果按照四舍五入保留两位小数
	multiply(2.4,2.22) //5.328
	multiply(2.4,2.22,true) //5.33
	</pre>
	</td> 
	<td>乘法运算，支持浮点数</td>
</tr>
<tr>
    <td>5</td>
	<td>
	<pre>
	import { divide } from 'js-lin';
	除法divide(x,y)
	//将x,y两个字符串相除，返回值为x/y的结果。
	//如果第三个参数true,divide(x,y,true)则返回的结果按照四舍五入保留两位小数
	divide(6,5) //1.2
	divide(6,5,true) //1.20
	</pre>
	</td> 
	<td>除法运算，支持浮点数</td>
</tr>
<tr>
    <td>6</td>
	<td>
	<pre>
	import { maxNum } from 'js-lin';
	//maxNum(x,y,z...) or maxNum([x,y,z]) 取出最大值
	let arr = [1, 2, 3];
	let str = "1,2,3";
	maxNum(arr) //3
	maxNum(str) //3
	maxNum(1,2,3,4) //4
	</pre>
	</td> 
	<td>获取最大值</td>
</tr>
<tr>
    <td>7</td>
	<td>
	<pre>
	import { minNum } from 'js-lin';
	//minNum(x,y,z...) or minNum([x,y,z]) 取出最大值
	let arr = [1, 2, 3];
	let str = "1,2,3";
	minNum(arr) //1
	minNum(str) //1
	minNum(1,2,3,4) //1
	</pre>
	</td> 
	<td>获取最小值</td>
</tr>
<tr>
    <td>8</td>
	<td>
	<pre>
	import { queryString } from 'js-lin';
	// http://localhost:1234/?name=123&age=234
	let name = queryString("name"); //123
	</pre>
	</td> 
	<td>根据key获取地址栏参数</td>
</tr>
<tr>
    <td>9</td>
	<td>
	<pre>
	import { queryString } from 'js-lin';
	// http://localhost:1234/?name=123&age=234
	let name = queryString("name"); //123
	</pre>
	</td> 
	<td>根据key获取地址栏参数</td>
</tr>
<tr>
    <td>10</td>
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
    <td>11</td>
	<td>
	<pre>
	import { randomInteger  } from 'js-lin';
	randomInteger(1,100)  // 24 随机数
    randomInteger(1,100,true)  // 可能会有100
	</pre>
	</td> 
	<td>返回一个随机整数</td>
</tr>	
<tr>
    <td>12</td>
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
    <td>13</td>
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
    <td>14</td>
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
    <td>15</td>
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
    <td>16</td>
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
    <td>17</td>
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

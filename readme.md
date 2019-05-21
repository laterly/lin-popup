

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
	<code>import { isArray } from 'js-lin';</code>
	<code>let arr=['1','2','3'];</code>
	<code>isArray(arr);// true</code>
	</pre>
	</td> 
	<td>判断是否为数组</td>
</tr>
<tr>
    <td>2</td>
	<td>
	<pre>
	<code>import { isObj } from 'js-lin';</code>
	<code>let obj = { a: 1 };</code>
	<code>isObj(obj);// true</code>
	</pre>
	</td> 
	<td>判断是否是对象</td>
</tr>
<tr>
    <td>3</td>
	<td>
	<code>
	import { isFun } from 'js-lin';
	function a() { 
    	console.log(123);
	}
	isFun(a);// true
	</code>
	</td> 
	<td>判断是否是方法</td>
</tr>
<tr>
    <td>4</td>
	<td>
	<code>
	import { isNum } from 'js-lin';
	let b = 1;
	isNum(b);// true
	</code>
	</td> 
	<td>判断是否是方法</td>
</tr>
<tr>
    <td>5</td>
	<td>
	<code>
	import { isEmptyObj } from 'js-lin';
	let o = {};
	isEmptyObj(o);// true
	</code>
	</td> 
	<td>判断是否是空对象</td>
</tr>
</tbody>
</table>


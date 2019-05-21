

> 方法:认真写自己的工具库，包含一些常用方法 [(链接地址)](http:)

```bash

# 下载依赖
$ npm install lin-js

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
	<code>
	import { isArray } from 'js-lin';
	let arr=['1','2','3'];
	isArray(arr);// true
	</code>
	</td> 
	<td>判断是否为数组</td>
</tr>
<tr>
    <td>2</td>
	<td>
	<code>
	import { isObj } from 'js-lin';
	let obj = { a: 1 };
	isObj(obj);// true
	</code>
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
</tbody>
</table>


/*!
 此函数的作用是
  
  1.如果输入的是函数，则此函数是window.onload
  2.如果输入的是字符串，则返回通过该字符串获得的id变量
  3.如果输入的是对象，则返回该对象
 * */
function $(v) {
	if(typeof v === 'function') {
		window.onload = v;
	} else if(typeof(v) == "string") {
		return document.getElementById(v);
	} else if(typeof(v) == "object") {
		return v;
	}
}


/*!
   此函数的作用是：（复合样式获取不到，会报错）
   
   获取对象属性的时候，当IE浏览器和标准浏览器
   不兼容currentStyle和getComputedStyle
   的时候使用下面的方法来进行获取队形的属性
   
   getComputedStyle 得到电脑里面的div1的宽度（IE678不支持）
   currentStyle标准浏览器不兼容
   $('div1').style.width获取不到宽度
   
   不要有空格
   不要获取未设置的样式：不兼容
 * 
 * */
function getStyle(obj, attr) {
//	if(obj.currentStyle) {
//		return obj.currentStyle[attr];
//	} else {
//		return getComputedStyle(obj)[attr];
//	}
	
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};
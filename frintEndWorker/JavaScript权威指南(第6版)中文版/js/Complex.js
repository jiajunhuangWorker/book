/*
这个文件定义了Complex类,用来描述复数
回忆一下,复数是实数和虚数的和,并且虚数i是-1的平方根
这个构造函数为它所创建的每个实例定义了实例字段r和i
这两个字段分别保存复数的实部和虚部
它们是对象的状态
*/
function Complex(real,imaginary){
	if(isNaN(real)||isNaN(imaginary))
		throw new TypeError;
	this.r=real; //复数的实部
	this.i=imaginary;//复数的虚部
}
/*
类的实例方法定义为原型对象的函数值属性
这里定义的方法可能被所有实例继承,并未它们提供共享的行为
需要注意的是,javascript的实例方法必须使用关键字this
来存取实例的字段
*/
//当前复数对象加上另外一个复数,并返回一个新的计算和值后的复数对象
Complex.prototype.add=function(that){
	return new Complex(this.r+this.r,this.i+this.i);
};
//当前复数乘以另外一个复数,并返回一个新的计算乘积之后的复数对象
Complex.prototype.mul=function(that){
	return new Complex(this.r*that.r-this.i*that.i,this.r*that.i+this.i*that.r);
};
//计算复数的模,复数的模定义为原点(0,0)到复平面的距离
Complex.prototype.mag=function(){
	return Math.sqrt(this.r*this.r+this.i*this.i);
}
//复数的求负运算
Complex.prototype.neg=function(){
	return  new Complex(-this.r,-this.i);
}
//将复数对象转换为一个字符串
Complex.prototype.toString=function(){
	return "{"+this.r+","+this.i+"}";
}
//检测当前复数对象是否和另一个复数值相等
Complex.prototype.equals=function(that){
	return that!=null && that.constructor === Complex && this.r===that.r && this.i===that.i
}
//返回当前复数的共轭复数
Complex.prototype.conj=function(){return new Complex(this.r,-this.i);}

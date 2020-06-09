/*
var a;
console.log(a);

a = true;
console.log(typeof a);

a = 1.2;
console.log(typeof a);

a = 'Toi la mr Nhan';
console.log(typeof a);


//////// BigInt
//max = Number.MAX_SAFE_INTEGER
max = BigInt(Number.MAX_SAFE_INTEGER)
console.log(max + 1n)
console.log(max + 2n)
*/

/* //// Symbol example
var obj = {};

var symbol1 = Symbol("prop");
var symbol2 = Symbol("prop");


obj[symbol1] = 2;
obj[symbol2] = 3;
console.log(obj)
*/

//console.log(myArr[3]);

/// Demo object
/*var obj = {
	name: 'Nhan',
	age: 10,
	national: 'VN'
};

console.log('Toi ten: ' + obj.name)
*/

/*
var a = 'Global';

var myFunction = function() {
	var a = 'myFunction';
	var myFunction1 = function () {
		var a = 'myFunction1';
		console.log('Hello '+ a);
	}

	myFunction1();
}

myFunction();*/

/*
this.name = "Window"
var aMan = {
	hello: function() {
		console.log('My name is ' + this['name']);
	}
}
aMan.hello();
*/

var a = 6; // a in 0x333 => value = 6
var b = a; // b in 0x998 => value = 6
b = 7;  // 0x998 => value = 7
//console.log(a);
//console.log(b);

/*
var myFunction = function (a) {
	a = a + 1;
	console.log(a);
}

myFunction(a);

console.log(a);

*/
var objA = {} //0x333

var myFunction = function (obj) {
	obj['new'] = "NEW";
}

myFunction(objA);

console.log(objA);

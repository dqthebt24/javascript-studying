# Javascript Studying
For studying javascript

## Tab of contents
1. [Data types](#data-types)
1. [Scope of a variable](#variable-scope)
    1. [Context environment](#context-environment)
    1. [Scope of a variable](#variable-scope-define)
    1. [Pass variable by value and by reference](#pass-by)
1. [Hoisting](#hoisting)
1. [var, let, const](#var-let-const)
    1. [Var variable](#var-let-const-var)
    1. [Let variable](#var-let-const-let)
    1. [Const variable](#var-let-const-const)
1. [Template literals (Template strings)](#template-literals)
1. [Some advances](#some-advances)
	1. [Default parameters](#default-parameters)
	1. [Rest parameters](#rest-operator)
	1. [Callback](#callback-header)
	1. [Destructuring](#destructuring)
1. [Indexs](#indexs)

## Data types <a name="data-types">
Two compare operator `==` for value comparing and `===` value and data type comparing.
- There are six data types are primitives. To check some data type examples, go to ***[nodejs terminal](#nodejs-terminal)*** then check by `typeof`
    - *[undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)* : typeof instance === "undefined"
    - *[Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)* : typeof instance === "boolean"
    - *[Number](https://developer.mozilla.org/en-US/docs/Glossary/Number)* : typeof instance === "number"
    - *[String](https://developer.mozilla.org/en-US/docs/Glossary/String)* : typeof instance === "string"
    - *[BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)* : typeof instance === "bigint"
    	> BigInt can be either used with a constructor, e.g. `BigInt(20)` or by appending `n`, e.g. `20n`
    	>
    	> `BigInt`s cannot be operated on interchangeably with `Number`s. Instead a *TypeError* will be thrown.
    - *[Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)* : typeof instance === "symbol"
        > Usefull in case of unique instance
- null: Is an object null. Check by `typeof null === 'object'`
- Objects: A groups of properties
	> Can you function constructor to create an object
	>
	> 3 ways to access object's properties: *dot property accessor*, *brackets property accessor*, *destructuring* (just get)
	>
	> A function can be object's property
	>
	> Read more at [here](https://dmitripavlutin.com/access-object-properties-javascript/)
	>
	> Use `this` operator to regist or access object properties
 
- Data type examples <a name="datatype-examples">: Try with some javascript codes bellow
    ```js
    //////// Basic types
    var a;
    typeof a;

    a = true;
    typeof a;

    a = 2;
    typeof a;

    a = '2'
    typeof a;

    //////// BigInt
    max = Number.MAX_SAFE_INTEGER
    max + 1 === max + 2
    BigInt(max) + 1n === BigInt(max) + 2n

    // BigInt cannot be operated on interchangeably with Number
    max + 1n === max + 2n

    /////// Symbol
    var map = {};
    map['prop'] = 1;
    map['prop'] = 2;
    map['prop']

	var symbol1 = Symbol("prop");
	var symbol2 = Symbol("prop"); // same name, different instance – so it's a different symbol!
	map[symbol1] = 1;
	map[symbol2] = 2; // doesn't override the previous symbol's value
	map[symbol1] + map[symbol2]
    ```

## Scope of a variable <a name="variable-scope">
### Execution Context <a name="context-environment">
- Each function has it's context
- See more at [link](https://towardsdatascience.com/javascript-context-this-keyword-9a78a19d5786)

### Scope of a variable <a name="variable-scope-define">
- There are two scope that a variable can be: global and local
- Variables are defined outside functions are global scope. Variables are defined inside functions are local scope

**Example 1**: Context inside context
```js
var comeFrom = 'The earth'
var introduce = function() {
	var comeFrom = 'Viet Nam';
	var hello = function(){
		var comeFrom = 'Da Lat';
		var say = function() {
			console.log('I come from: ' + comeFrom);
		}

		say();
	}
	hello();
}

introduce();
```

**Example 2**: context of arrow functions
```js
// Uncomment this code in case hello is an arrow function
/*this.name = "Window"
var aMan = {
    name: 'Man',
    hello: () => {
        console.log('My name is ' + this.name);
    }
}*/

var aMan = {
    name: 'Man',
    hello: function() {
        console.log('My name is ' + this.name);
    }
}

aMan.hello();
```

**Example 3**: context of arrow functions in case callback
```js
this.name = "Window"
var aMan = {
    name: 'Man',
    hello: function() {
        console.log('My name is ' + this.name);
        setTimeout(() => {console.log('Name after timeout is: ' + this.name)}, 1000)
    }
}
aMan.hello();
```


### Pass variable by value and by reference <a name="pass-by">
- Pass by value means: after do somethings, the original variable won't be changed
- Pass by reference means: after do somethings, the original variable will be changed
**Example**
```js
var numberA = 10;
var numberB = numberA;
numberB = 20;
console.log('Number A: '+ numberA + '; Number B: ' + numberB);

var objA = {}
var objB = objA;
console.log('Object A: ' + JSON.stringify(objA));

objB.name = 'The name';
console.log('Object A: '+ JSON.stringify(objA) + '; Object B: ' + JSON.stringify(objB));

// Try with objC = objB then modify objC
```
**Questions**: 
- How to clone an object? => Google

## Hoisting <a name="hoisting">
- The way execution contexts work. See more at [link](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

## var, let, const <a name="var-let-const">
### Var variable <a name="var-let-const-var">
- `var` is not block scoped
- `var` can be redefined
- Try with an example
```js
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

// Uncomment this code to see what will happen
// var greeter = "TEST!"

console.log(greeter)
```

### Let variable <a name="var-let-const-let">
- `let` is block scoped
- `let` can be updated but not re-declared

### Const variable <a name="var-let-const-const">
- `const` is block scoped
- `const` **cannot** be updated or re-declared

**Questions**
1. which should we use?
    > Answer: as small as possible
**More details**: [link](https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e#:~:text=Hoisting%20of%20const&text=var%20declarations%20are%20globally%20scoped%20or%20function%20scoped%20while%20let,be%20updated%20nor%20re%2Ddeclared.)

## Template literals (Template strings) <a name="template-literals">
- Template literals are string literals allowing embedded expressions.
- Template literals are enclosed by the backtick (\` \`)  (grave accent) character instead of double or single quotes.
**Example**:
```js
let a = 5;
let b = 10;
var str = `The sum is: ${a + b}`;
console.log(str);
```

## Some advances <a name="some-advances">
### Default parameters <a name="default-parameters">
- Target: We want a parameter of a function has a default value.
- Some ways to define default parameters
**Example 1**:
```js
function sayHi(message='Hi') {
    console.log(message);
}
sayHi(); // Hi
// sayHi("Hi everyone!");
```
**Example 2**:
```js
function sayHi(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
sayHi(); // 'Hi'
// sayHi("Hi everyone!");
```
**Example 3**:
```js
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3
```
- References:
    - [Js Tutorial](https://www.javascripttutorial.net/es6/javascript-default-parameters/)
    - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

### Rest parameters <a name="rest-operator">
- Target: We want to get all parameters are passed in a function.
- Try with code
```js
function sum(a, b){ 
    return a + b; 
}

sum(1, 2);
```
- If we want to do `sum(1,2,3,4)`, we'll need [Rest operator in javascrip](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters). We do as the code bellow
```js
function sum(...numbers){
    let sum = 0; 
    for(let i of numbers){ 
        sum+=i; 
    } 
    return sum;
}
sum(1,2,3);
sum(1,2,3,4,5);
```
- Syntax of **rest**: `...<parameter-name>`

### Spread operator
- Same syntax as [rest operator](#) but the target is opposite.
- Target: We want to get all element of a colection or an object
- Try some code
```js
let arr1 = [1,2,3]; 
let arr2 = [4,5]; 

arr = [arr1, arr2]; 
console.log(arr1); 

// Get all element of arr1 and arr2
arr = [...arr1,...arr2]; 
console.log(arr); 

// Spread object
let obj = { foo: 1, bar: 1 };
let newObj = { ...obj, baz: 1 };
console.log(newObj);

// The same in es5
let obj = { foo: 1, bar: 1 };
let newObj = { baz: 1 };
let assignObj = Object.assign(newObj, source);
console.log(newObj);
console.log(assignObj);

```
- Syntax: `...<variable-name>`

### Callback <a name="callback-header">
- A function will be called later
```js
function first(){
	console.log("Log function 1");
  	// Simulate a code delay
  	setTimeout( function(){
    	console.log("Log function callback");
  	}, 1000 );
}
function second(){
  	console.log("Log function 2");
}
first();
second();
```
- Use in real world: A function run after get data from server.

### Promise

### Destructuring <a name="destructuring">
- Extract a colection or object to another object
- Search some example at [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
**Example 1**:
```js
var arr = [0, 1, 2];

var first = arr[0];
var second = arr[1];
var third = arr[2];

var [first, second, third] = arr;
console.log(first, second, third);

var [begin, ,end] = arr;
console.log(begin, end);

var [begin,...end] = arr;
console.log(begin, end);
```

**Example 2**: Destructure an object
```js
var obj = {name: 'name', age: 8, location: 'NY'}
var {name, location} = obj;
console.log(name, location);
```

## Indexs <a name="indexs">
- ***nodejs terminal <a name="nodejs-terminal">***
    > Open terminal, then type `node`, after that try with some javascript commands.
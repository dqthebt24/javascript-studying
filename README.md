# Javascript Studying
For studying javascript

## Data types
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

## Scope of a variable
### Context environment
- Each function has it's context
- See more at [link](https://towardsdatascience.com/javascript-context-this-keyword-9a78a19d5786)

### Scope of a variable
- There are two scope that a variable can be: global and local
- Variables are defined outside functions are global scope. Variables are defined inside functions are local scope

Example 1: Context inside context
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

## Indexs
- ***nodejs terminal <a name="nodejs-terminal">***
    > Open terminal, then type `node`, after that try with some javascript commands.
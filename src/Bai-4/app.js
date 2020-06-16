// Default parameter
function myFunc(age, name="DefaultES6"){
	//let mName = name || "Default";
	console.log("Hello", name, age);
}

//myFunc(8);


// REST Parameter
function sum(...numbers){ 
    let sum = 0; 
    for(let i of numbers){
        sum+=i; 
    } 
    return sum;
}

//console.log(sum(1, 2, 3, 4));

// Destructuring
let obj = {name: 'Nhan', age: 8, location: 'NY'}
// let name = obj.name;
// let location = obj.location;
let {location} = obj;
console.log(location);


let arr = [0, 1, 2, 3, 4];

let [first, second, third] = arr.reverse();
console.log(first, second, third);

let [begin,...end] = arr;
console.log(begin, end);

// Callback

function done(task){
	console.log(`${task} done!`);
}

function doTask(taskName, callback) {
	console.log("Doing " + taskName);
	setTimeout( function(){
        callback(taskName);
    }, 3000 );
}

// function pass to function
doTask("Homework", done);
console.log("Play piano!");



const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
	// Do something
    //resolutionFunc(777);
    rejectionFunc(555);
});
// At this point, "promiseA" is already settled.
promiseA.then(function(){console.log("resolution")}, function(){console.log("reject!")});


// Tạo 1 server
có 1 API, sử dụng Express
 + 'localhost:3000/users' => "hello, list users here!"
// 
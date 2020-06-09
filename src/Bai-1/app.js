// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);


// DEMO Nodejs hello word
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// DEMO Functions

// function funcA(name) {
// 	console.log("hello " + name);
// }

// var myFunc = funcA;

// var myArrayFunction = (a, b) => {
// 	console.log("Hello " + a + " " + b);
// 	console.log("Bye!");
// }

//funcA("Mr Nhan")
//myFunc("Mr Nhan")
// myArrayFunction("Mr Nhan", "Nguyen")


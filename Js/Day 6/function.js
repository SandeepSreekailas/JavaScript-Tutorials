// function addtocart(product){
//     console.log(`Product ${product} added to cart`);
// }
// addtocart("Oneplus");
// addtocart("Vivo");
// addtocart("realme");


//anonymous function (function does not have any name)
// let add = function(){
//     console.log(9+9);
// }
// add()

// setTimeout(function() { 
// console.log("Hello after 1 second!"); 
// }, 1000); 


// A Higher-Order Function is a function that takes another function as an argument, or returns a function, or both.
// passing a function as argument
// function getcaptured(capture){
//     capture()

// }

// getcaptured(function(){
//     console.log("i'm captured");
    
// })


//returning a function as a value from that
// function returnfunction(){
//     return function(){
//         console.log("Hi");
//     }
// }

// let rf=returnfunction();
// rf();
// another method to call
// returnfunction()();

// let greet = function(name) { 

//     return `Hello, ${name}!`; 
// }; 
// console.log(greet("Alice"));

//Arow function (also like a anonymous function)
// let hello = ()=>{
//     console.log('hello world');
// }
// hello();
//if we have only one line we dont need the brackets
// let hello = ()=>
//      console.log('hello world');
//      console.log('hello hiii');
// hello();
// hello();

// let greet = (name) => `Hello, ${name}!`; 
// console.log(greet("Alice")); 

// passing parameters
// let sum = (a,b)=> a+b; // here we dont need to give the return function also
// let ans = sum(10,20);
// console.log(ans);

// function multiply(a, b) { 
//     return a * b; 
//     } 
//     console.log(multiply(2, 5)); 

// let sum = (a,b) => a*b 
// console.log(sum(2,8));


// immediately invoked function expression IIFE
// (function sum(){ // here we also dont want to give the name
//     console.log(10+10)
// })()
//using arrow function
// (()=>{    
//     console.log(10+10);
// })()

//iife advantage
// var a = 10;
// (function (a) {
//     a =50;
//     console.log(a);
// })(a);
// console.log(a)

// console.log(a); // in iife the globale value will not be updated/changed and in normal case the value will be updated(if we called the globel value in the block) in the block code 


// var a = 10;

// function changeA() {
//     a = 50; 
// }

// changeA();

// console.log(a);


// function greet(name) { 
//     return `Hello, ${name}!`; 
//     } 
// console.log(greet()); 

// function sum(...numbers) { 
//     return numbers.reduce((a, b) => a + b); 
//     } 
// console.log(sum(1, 2, 3, 4, 5,6,67,7,7,7,777,7));



// setTimeout(function() { 
//     console.log("Hello after 10 second!"); 
// }, 10000); 




// function applyOperation(a, b, operation) { 
//     return operation(a, b); 
//     } 
// let add = (x, y) => x + y; 
// let multiply = (x, y) => x * y; 
// let minus = (x,y) => x-y
// console.log(applyOperation(3, 4, add)); 
// console.log(applyOperation(3, 4, minus));

// function outer() { 
//     let count = 0; 
//     return function inner() { 
//     count--; 
//     return count; 
//     }; 
//     } 
// const counter = outer(); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 



// (function() { 
//     console.log("This runs immediately!"); 
//     })(); 



// let glb_var = 10; // global variable
// function scopeTest() { 
//     var loc_var = 'iam local'; // local variable
//     console.log("Inside function: ", glb_var); // Accessing global variable
//     console.log("Inside function: ", loc_var); // Accessing local variable
// }
// scopeTest(); // Calling the function
//  console.log(loc_var)

// let and scope diff  var is Accessible outside the block let not accessable outside the block
// function testvar() { 
//     if (true) { 
//         var x = 5; 
//     }
//     console.log(x); 

// }
// testvar();



// const greet = function(name) { 
// return `Hello, ${name}!`; 
// }; 
// console.log(greet("Alice"));

// setTimeout(function() { 
// console.log("Hello after 1 second!"); 
// }, 1000); 



// const user = { 
// name: "Alice", 
// age: 30,
// greetRegular: function() { 
// console.log(`Hello, ${this.age}`); 
// }, 
// greetArrow: () => { 
// console.log(`Hello, ${this.name}`); 
// } 
// }; 
// user.greetRegular(); 
// user.greetArrow();


    
// function applyOperation(a, b, operation) { 
// return operation(a, b); 
// } 
// const add = (x, y) => x + y; 
// const multiply = (x, y) => x * y; 
// console.log(applyOperation(3, 4, add)); 



// function greet(name) { 
//     return `Hello, ${name}!`; 
//     }
// console.log(greet("sandep"));


// greet()
// function greet() {
//   console.log("Hello!");
// }


//  console.log(a)
//  var a = 10
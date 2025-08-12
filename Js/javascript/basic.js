// console.log("print hello", "hiiiii", "iam sandeep", 22);


// const a = 3.14

// console.log(a)

// document.write("<h1>Hello</h1>")


// Datatypes
// let a = 90.1;
// let b = "sandeep";
// let c = false
// let d = undefined
// let e = null
// let f = BigInt(789456321);
// let g = Symbol("hello");
// console.log(typeof(a))

// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Arithematic Operators
// let a = 2+3;
// let b = 10-3;
// let c = 10*10;
// let d = 13/2;
// let e = 13%7;
// let f = 10 ** 3;

// console.log(f)

// let x=10;
// x+=2;  
// x-=5;
// x*=2;
// x/=5;
// x%=5;
// x**=5;
// console.log(x)


// var animal= ["lion", "tiger", "cat", "dog"]
// console.log(animal);

// animal[1]="crow"
// console.log(animal);

// var x = animal.length;
// console.log(x)

// for(var i=0; i<x; i++)
//     console.log(animal[i])

// animal[4] = "elephant"
// console.log(animal)

// animal.push("fox", "cheeta");
// console.log(animal)

// animal.shift();
// console.log(animal)

// animal.pop();
// console.log(animal)

// animal.splice(0,3)
// console.log(animal)


// var a = [9,8,7,3,5,1,2]
// a.sort()
// a.sort(function(x,y){
//     return y-x
// })
// console.log(a)


// var text="LEARN JAVASCRIPT";
// // console.log(text.toLowerCase())

// console.log(text.slice(3,6));




// let user = {name: "Alice",age: 25};
// console.log(user)
  


// for(var i=1; i<5; i++){
//     console.log("hello")
// }

// var i = 1;
// while(i<=10){
//     console.log(i) 
//     i++;
// }

// var a ='A';
// switch(a){
//     case "A":
//         console.log("Apple");
//         break;
//     case "B":
//         console.log("Bat");
//         break;
//     case "C":
//         console.log("Cat");
//         break;
//     default:
//         console.log("invalid");
//         break;
// }


// var i =1;   
// do{
//     console.log(i);
//     i++
// }while(i<=5)


// function greetings(){
//     console.log("good morning")
// }


// greetings()

// let hello = ()=>{ console.log('good morning');}
// hello();


// console.log((()=>"good morning")())


// function greetings(name){
//     return `good morning` +  name
// }

// console.log(greetings("john"))
// greetings("lucas")
// let greetings = (name) => console.log("good morning " + name);

// greetings("john");
// greetings("lucas");


// function sum(n1, n2){
//     console.log(n1*n2);
// }
// sum(10 , 20)
// sum(20,  300)

// function sum(n1, n2){
//     return n1+n2;
// }
//  var a =sum(10 , 20)
//  console.log(a)

// let sum = (a,b)=> a+b; 
// let ans = sum(10,20);
// console.log(ans);

// console.log(((a, b) => a + b)(10, 20));

// let fname= 'sandeep ';
// let lname = 'S' ;

// let fullname= fname + lname;
// console.log(fullname)

// let players = [
//     { name: 'S', score: 90},
//     { name: 'A', score: 40},
//     { name: 'N', score: 60},
//     { name: 'D', score: 50},
//     { name: 'E', score: 80},
//     { name: 'P', score: 100}
// ]
// console.log(players)
// console.log(players.length);


// let result = '5' - 2; 
// console.log(result);

// let str = "123";
// let num = Number(str); 
// console.log(num); 

// let employee={
//     name: "john",
//     age: 22,
//     position:"Hr",
//     salary: 50000,
//     getsal:function(){
//         return this.age

        
        
//     },
//     //nested objects
//     address:{
//         landmark:'paris',
//         pincode: 123,
//         houseno: 10,
//         gurdain:{
//             name: 'angel',
//             age : 52
//         }
//     }
// };

// console.log(employee.name)
// console.log("salary of " +employee.name +" is " + employee.salary)
// console.log(`salary of  ${employee.name} is  ${employee.salary}`)
// employee.age=23;
// console.log(employee.age);
// employee.lastname="jj"
// console.log(employee)
// console.log(employee.getsal())

// delete employee.age;
// console.log(employee);

// for (let obj in employee){
//     console.log(obj + ":-" + employee[obj]);
    
// }
// console.log(employee.address.gurdain.name);


// let greet = function(name) { 
//     return `Hello, ${name}!`; 
//     }; 
// console.log(greet("Alice")); 


// var a =10
// var a=29
// console.log(a)

// console.log("hello world")
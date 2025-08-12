// Conditional Statements
// if else

// let groserryspending = 1700;

// if(groserryspending > 1000){
//     let discount = 0.10 * groserryspending;
//     console.log(" you got a 10% Discount", discount);
//     console.log()
//     console.log("your total amount is", groserryspending-discount);
  
// }else if(groserryspending > 500){
//     let discount = 0.05 * groserryspending;
//     console.log("you got a 5% Discount", discount);
// }else {
//     console.log("No Discount");
// }

// Switch

// let shippingoption = "one-day";

// switch(shippingoption){
//     case 'standard':
//         console.log('Your package will be delevered in 3-5 days');
//         break;

//     case 'one-day':
//         console.log('your pakage will be delevered within one day');
//         break;
    
//     case 'express':
//         console.log("your package will be delever within 2-3 days");
//         break;

//     default:
//         console.log('shipping option is invalid');
// }


// Control statements

// let sum = 0;
// let items = [10,20,30,40,50,60,70];
// for(let i=0; i<items.length; i++){
//     sum +=items[i];
// }
// console.log(sum);

// let sum = 0;
// let items = [10,20,30,40,50,60,70];

// let i = 0;
// while(i<items.length){
    
//     sum+= items[i];
//     i++
    
// }
// console.log(sum);


//Functions
// function printname(name) {
//     console.log(name)
// }
// printname("sandeep");

// function printrname(name){
//     return name;
// }
// let n = printrname("sandeep");
// console.log(n);


// scoping

// let a = 10; //(Globel scope)
// function sum(){
//     let b=20;
//     console.log(a);
//     console.log(b);  //(Block Scope)
// }
// sum();
// console.log(a);

// scoping chain
// var a=30
// function outer(){
//     var c = 10;
//     function inner(){
//         var b = 20;
//         console.log(b,c,a);
//     }
//     inner();
// }
// outer();


//additional thingss  
// a=0
// if (a>0) {
//     console.log("positive")}
// else if ( a<0){
//     console.log("Negative")} 
// else if (a==0){
//     console.log("Zero")} 

//  else {
//     console.log("invalid")
// }


// var a="a" ;
// switch(a){
//     case "A":
//         console.log("Apple");
//         break
        
//     case "B":
//         console.log("Bat");
//         break
//     case "C":
//         console.log("Cat");
//         break
//     default:
//         console.log("invalid");
//         break
// }

// for(var i=0; i<=5;i++ ){
//     console.log("hello")
// }


// for(var a=0; a<=10; a++){
//     console.log(a)
// }


// var i = 0;
// while(i<=10){
//     console.log(i)
//     i++ 
// }


// var i =100;   
// do{
//     console.log(i);
//     i++
// }
// while(i==0)



// function greetings(){
//     console.log("good morning")
// }


// function greetings(name){
//     console.log("good morning " + name)
// }
// greetings("john")
// greetings("jo")


// function sum(n1, n2){
//     console.log(n1*n2);
// }
// sum(10 , 20)


// function sum(n1, n2){
//     return n1+n2;
// }
// var a =sum(10 , 20)
// console.log(a)


// for (let i = 1; i <= 5; i++) {
//     console.log("*".repeat(i));
// }



// let star=''
// for(let i=1; i<=5; i++){
//     star += '*';
//     console.log(star);
// }


// for (let i = 6; i > 1; i--) {
//         console.log("*".repeat(i));
//     }



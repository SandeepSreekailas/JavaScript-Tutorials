// let arr = [1,2,3,4,5,6,7,8,9, "abcdef", true, {name:"sandeep"}, BigInt(12345678)];
// console.log(arr);

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
//using for loop
// for(let i=0; i<players.length; i++){
//     console.log(players[i]);
// }

let players = [
    { name: 'S', score: 90},
    { name: 'A', score: 40},
    { name: 'N', score: 60},
    { name: 'D', score: 50},
    { name: 'E', score: 80},
    { name: 'P', score: 100}
]
//push method
// players.push({name: 'X', score: 69})
// console.log(players);

//pop method
// players.pop()
// console.log(players);

//unshift
// players.unshift({name:'P', score:100});
// console.log(players);

//shift
// players.shift()
// console.log(players);

//Slice method
// let arrslice= players.slice(0,3);
// console.log(arrslice);

//splice method
// players.splice(2,2, {name:"Z",score:77});
// console.log(players);

//reverse
// console.log(players.reverse());

//some and every
// let info = players.some(function(obj){
//     if(obj.score>60){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(info);

// let info = players.every(function(obj){
//     if(obj.score>60){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(info);


//find
// let info = players.find(function(obj){ 
//     return obj.score===90;
// })
// console.log(info);


//Sort
// let arr = [5,7,1,2,99,1000,700,4,41,9]
// console.log(arr.sort(function(a,b){
//     return a-b; // for ascending order b-a for decending order
// }))


// players.sort(function(obj1,obj2){
//     return obj1.score-obj2.score;
// })
// console.log(players);

// delete
// delete players[2];
// console.log(players);


// Additional

var a=["elephant", "crow","cat", "dog"]; 
// console.log(a);

// console.log(a[0]);
// a[1]="cheeta"
// console.log(a);

// var x = a.length;
// console.log(x);
// console.log(a.length)



// for(var i=0; i<a.length; i++ ){
// console.log(a[i])}

// a[4]="fox"
// a.push("fox","bear", "dog")
// console.log(a)

// a.pop();
// console.log(a) // removes the last element

// a.shift(); // shifts the first element
// a.unshift("lion", "tiger") // adds the first element
// console.log(a)


// let v=a.slice(0,3) //extract a portion of an array or string without changing the original.
// console.log(v)
// console.log(a)

// delete a[2]; // delete the element at index 2 and show emp
// console.log(a);

// a.splice(0,2) // splice method removes the elements from the array and can also add new elements
// a.splice(1,1,"lion","tiger","fox")   
// a.splice(3,1,"lion","tiger")
// console.log(a)

// start: Index to begin changing the array.

// deleteCount: Number of elements to remove.

// item1, item2, ...: Optional elements to add at that position.

//Sort
let arr = [4,5,3,2,1];
console.log(arr.sort(function(a,b){
    return b-a; // for ascending order b-a for decending order
}))


// Each pair of elements a and b is compared. If a - b is negative, a stays before b. and if a - b is positive, b stays before a. and for decending order b-a if b-a is negative a stays before b and if b-a is positive b stays before a

// const arr3 =[10,2,5]
// let sorted = arr3.sort()
// console.log(sorted.reverse());
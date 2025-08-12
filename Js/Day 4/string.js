let s1 = 'sandeep';
let s2 = "sandeep";
let s3 = `sandeep`;
// console.log(s1,s2,s3);

// console.log(s1[0])

//iterate over loop
// for(let i=0; i<s1.length;i++){
//     console.log(s1[i]);
// }

//take a particular charecter from the string
// console.log(s1[3]);
// console.log(s1.charAt(1));


//Multiline string (use \)


let s4 = "Basics of JavaScript \
Dynamic typing: Variables in JavaScript can be assigned values of any type.\
Prototypal inheritance: A principle of JavaScript.\
Event-driven architecture: A principle of JavaScript.\
Asynchronous programming: A principle of JavaScript.\
Lexical scoping: A principle of JavaScript.\
First-class functions: A principle of JavaScript"
// console.log(s4);

// //search
// let keyword = "Java";
// console.log(s4.search(keyword));

//replace
// let keyword = "driven";
// let replaceword = "NOTHING";
// console.log(s4.replace(keyword, replaceword));

//slice substring substr
// let portionstring = s4.slice(5,8); // can give -ve index
// let portionstring = s4.substring(0, 7); // -ve index not supported
// let portionstring = s4.substr(5,10); // here we give the index and the length(till where we want to get)
// console.log(portionstring);
// console.log(portionstring1); // .slice() can give -ve index

// console.log(portionstring + "..... read mode");


//concatination
// let fname= 'sandeep';
// let lname = 'S' ;
// let age = 22;
// let fullname= fname +lname;
//template literals method
// let fullname= `My name is ${fname} ${lname} My age is ${age}`;

// console.log(fullname);


//UPPERCASE & lowercase
// let fname= 'sandeep';
// let lname = 'S' ;
// let fullname= `${fname} ${lname}`;
// // console.log(fullname.toLowerCase());
// // console.log(fullname.toUpperCase());
// console.log(fullname.toLowerCase())



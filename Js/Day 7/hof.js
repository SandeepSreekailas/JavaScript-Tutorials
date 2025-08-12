// foreach loop
//forEach(): Executes a provided function once for each array element.
// let numbers= [1,2,3];
// numbers.forEach((number, index, numbers)=>{
//     console.log(number, index, numbers);
// })

let products = [
    {id:1, name:"Product 1", Price:99},
    {id:2, name:"Product 2", Price:199},
    {id:3, name:"Product 3", Price:99},
    {id:4, name:"Product 4", Price:699},
    {id:5, name:"Product 5", Price:299},
    {id:6, name:"Product 6", Price:399},
];

// products.forEach((prduct)=>{
//     console.log(`product id :-${prduct.id}`);
//     console.log(`product name :-${prduct.name}`);
//     console.log(`product price :-${prduct.Price}`);
// })

//using map function
//map(): Transforms elements in an array using a provided function.
// products.map((prduct)=>{
//     console.log(`product id :-${prduct.id}`);
//     console.log(`product name :-${prduct.name}`);
//     console.log(`product price :-${prduct.Price}`);
// })

// let maparray=products.map((prduct)=>{
//     console.log(`product price :- ${prduct.Price *2}`);
// })
// console.log(products);


// let numbers= [1,2,3];
// let double=numbers.map((number)=>{
//     return number*2
// });
// console.log(double); // map returns new array
// console.log(numbers); // it will not effect the original array


//Filter
//filter(): Creates a new array with elements that pass a test implemented by a provided function.
// let filteredarray = products.filter((product)=>{
//     return product.Price>200;
// });
// console.log(filteredarray); // filter also return new array
// console.log(products); // will not effect the original array


//reduce
//reduce(): Applies a function against an accumulator and each element in an array (from left to right) to reduce it to a single value.
let carttotal = products.reduce((total, product)=>{
    return total+product.Price;
},0); // 0 is the inital value(price of the product)
console.log(carttotal);






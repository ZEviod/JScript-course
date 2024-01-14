// let arr = [45, 23, 21, 15]

// //Array map method
// let a = arr.map((value, index, array) => {
//     console.log(value, index, array);
//     return value + 1
// })

// console.log(a);


// //Array filter method
// let arr2 = [45, 23, 4, 10, 0, 3, 5]
// let a2 = arr2.filter((a) => {
//     return a < 10
// })
// console.log(a2);


//Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
// let newarr3 = arr3.reduce((hee1, hee2) => {
//     return hee1 + hee2
// })
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
//both above will give same thing
console.log(newarr3);
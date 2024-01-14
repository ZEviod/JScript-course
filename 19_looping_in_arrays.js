let num = [3, 54, 1, 2, 4]

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

//ForEach loop
// num.forEach((element) => {
//     console.log(element * element);
// })

// Array.from
let name = "merry"
let arr = Array.from(name)
console.log(arr);

// for...of
// for (let i of num) {
//     console.log(i);
// }

// for...in
for (let item in num) {
    console.log(item);  //ye majorly key print krta idhr array mein key values index wali hai like 0 1 2 3 4
    // console.log(num[item]);  //isse items print ho jayengi
}
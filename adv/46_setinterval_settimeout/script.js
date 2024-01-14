document.write("hello");

const sum = (a, b, c) => {
    console.log("Yes i am runing " + (a + b + c));
    a + b
};

setTimeout(sum, 1000, 1, 2, 7);
// setInterval(sum, 1000, 1, 2, 7);

// let a = setTimeout(function () {
//     alert("I am inside of setTimeOut")
// }, 4000)

// let b = prompt("Do you want to run the setTimeOut?")
// if ("no" == b) {
//     clearTimeout(a);
// }
// console.log(a);

// console.log(console);
console.log("log");
console.info("info");
console.warn("warning");
console.error("error");
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")
for (let i = 0; i < 5; i++) {
    console.log(233);
}

console.timeEnd("forLoop")


console.time("whileLoop")
let i = 0;
while (i < 5) {
    console.log(233);
    i++;
}

console.timeEnd("whileLoop")

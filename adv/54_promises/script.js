let promise = new Promise(function (resolve, reject) {
    alert("Hello")
    resolve(56);
})

console.log("Hello one");
setTimeout(function () {
    console.log("hello two in 2 sec");
}, 2000)
console.log("My name is hello three");
console.log(promise);



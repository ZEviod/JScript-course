
// //syncronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favourite color?");
// console.log(a + " is " + b + " years old and has " + c + " favourite color.");



// //asyncronous programming
// console.log("Start");
// setTimeout(function () {
//     console.log("Hey I am good");
// }, 3000)
// console.log("End");


//callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Script loaded witch src: " + src)
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC " + src);
        callback(new Error("SRC got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello world " + src);
}
function goodmorning(src) {
    alert("Good Morning " + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", hello);
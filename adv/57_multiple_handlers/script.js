let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey I am resolve");
        resolve(1);
    }, 2000)
})

p1.then(() => {
    console.log("congrats now it is resolved");
})
setTimeout(() => {
    console.log("Hacking wifi.... Please wait...")
}, 1000)

try {
    setTimeout(() => {
        console.log(rahul)  //it woild not work as try is synchronous function
    }, 100)
}
catch (err) {
    console.log("Balle balle" + err)
}


setTimeout(() => {
    console.log("Fetching username and password.... Please wait...")
}, 2000)

setTimeout(() => {
    console.log("Hacking Rahul's facebook id.... Please wait...")
}, 3000)

setTimeout(() => {
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait...")
}, 4000) 
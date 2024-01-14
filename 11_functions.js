const hello = ()=>{
    console.log("Hey, Hello how are you? mai badia hu tum sunao.");
    return "hi";
}

function onePlusAvg(x,y) {
    // console.log("Done");
    return Math.round(1+(x+y)/2)
}

const sum = (p,q)=>{
    return p+q;
}

// hello();
let v = hello();
// console.log(v);

let a = 3;
let b = 2;
let c = 1;
console.log("One plus average of a and b is ", onePlusAvg(a,b));
console.log("One plus average of a and c is ", onePlusAvg(a,c));
console.log("One plus average of b and c is ", onePlusAvg(c,b));

console.log(sum(9,7));
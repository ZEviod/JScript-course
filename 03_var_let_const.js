console.log("JScript tu 3: var, let and const")
var a = 45;
var a = "m";
let b = "merry";
//let b = "r";//this will give error as redeclare ho rha
const author = "sir"
//let author = "sir" //const is fixed and cannot be changed
//author = "sir"//it also throw error but different error
var c = null;
var d = undefined;
{
    let b = 'this'
    console.log(b);
}

console.log(b);

//mainly use let and const rather than var
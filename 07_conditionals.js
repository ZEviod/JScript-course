// let a = prompt("Hey what's your age?");
// a = Number.parseInt(a); //converting the string to a number

// if(a<0){
//     alert("This is an invalid age.");
// }
// else if(a<9){
//     alert("You are a kid and you cannot even think of driving")
// }
// else if(a>=9 && a<18){
//     alert("You are a kid but you can think of driving after 18")
// }
// else if(a>18){
//     alert("You can drive")
// }
// else{
//     alert("You can drive now as you are above 18");
// }


console.log("Done");
a=6;
console.log("You can ",(a<18? "Not drive":"drive"));


//switch hw
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
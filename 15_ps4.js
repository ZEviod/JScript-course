// // Q1
// let str = "har\""
// console.log(str.length);

//*******************************************************************************************

// // Q2
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(sentence.includes(word));
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// const str0 = 'Saturday night plans';
// console.log(str0.startsWith('Sat'));
// // Expected output: true
// console.log(str0.startsWith('Sat', 3));
// // Expected output: false

// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best!'));
// // Expected output: true
// console.log(str1.endsWith('best', 17));
// // Expected output: true
// const str2 = 'Is this a question?';
// console.log(str2.endsWith('question'));
// // Expected output: false

//*******************************************************************************************

// // Q4
// let senten = "Please give Rs 1000"
// let amt = senten.slice("Please give Rs ".length)
// let amt2 = Number.parseInt(senten.slice(15))
// console.log(amt);
// console.log(amt2);
// console.log(typeof amt);
// console.log(typeof amt2);

//*******************************************************************************************

// Q5
let friend = "Peedika"
friend[3] = "r" //it also does not throw error
console.log(friend);  // friend is not changed, because string is immuatable
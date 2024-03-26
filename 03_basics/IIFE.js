// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB Connected`);
// }
// chai()

(function chai() {
    // Named IIFE
    console.log(`DB Connected`);
})(); // if we do not use this semicolon, then we will face prblm will running the aurcode function

// () ---> Function Definition , () ---> Function Execution

/*
 Global scope ke pollution se prblm hoti hain kayibar, to remove the pollution
 of global scope we use IIFE
 */

// (function aurcode() {
//     console.log(`DB Connected Two`);
//  })()

((name) => {
    console.log(`DB Connected Two ${name}`);
})(`Surya`);
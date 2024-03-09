// Stack : Primitve DataType
// Heap : Non-Primitive DataType


let myName = "Surya Ghosh"; // primitive dataType, stored in stack
console.log(myName);

let myname = myName;
console.log(myname);

myname = "Explorer";
console.log(myname);
console.log(myName);



let userOne = {
    email: "suryaghosh123@gmail.com",
    upiId : "98345@ybl"
} // object, non primitive dataType, stored in heap

console.log(userOne);

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "surya@gmail.com";
console.log(userTwo);
console.log(userOne);


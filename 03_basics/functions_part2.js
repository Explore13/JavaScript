function calculateCartPrice(num1) {
    return num1;
}

function restOperator(...num2) {
    return num2;
}

function restOperator_2(val1, val2, ...num2) {
    return num2;
}


// console.log(calculateCartPrice(2)); //2
// console.log(calculateCartPrice(200,400,500)); // 200



// Rest and Spread Operator ---> ...

// console.log(restOperator(200,300,500)); // [200,300,500]
// console.log(restOperator_2(200,300,400,600));  // [400,600]

const user = {
    username: "surya",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username : "explorer",
    price : 5999
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[2];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000,2000,3000,5000]));

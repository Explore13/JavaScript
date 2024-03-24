function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("Y");
    console.log("A");
}

// sayMyName();

// function addTwoNumbers(number1, number2) // number1, number2 ---> Parameters
// {
//     console.log(number1 + number2);
// }

// addTwoNumbers(); // NaN

// addTwoNumbers(3,4); // 3, 4 ---> Arguments
// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");
// addTwoNumbers(3,null);


function addTwoNumbers(number1, number2) // number1, number2 ---> Parameters
{
    // let res = number1+number2;
    // console.log("Surya");
    // return res;
    // console.log("Surya"); Unreachable


    return number1 + number2;
}


const result = addTwoNumbers(3, 5);

// console.log(result);


// function loginUserMessage(userName) {
//     if (!userName)
//     {
//         console.log("Please enter your username");
//         return;

//     }
//         return `${userName} just logged in`
// }

function loginUserMessage(userName="sam") {
    if (!userName)
    {
        console.log("Please enter your username");
        return;

    }// never enter to this block, if argument passed, the value (sam) will be overidden
        return `${userName} just logged in`
}

// console.log(loginUserMessage("Surya"));
// console.log(loginUserMessage()); // undefined is just logged in
console.log(loginUserMessage());
console.log(loginUserMessage("Surya"));
// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // c = 30
    // var d = 50
    // console.log("Inner Value of a : " + a);
}

// console.log("Outer Value of a : " + a);
// console.log(b);
// console.log(c); // 30
// console.log(d); // 50


/* Part_2 */
function one() {
    const username = "surya"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two();
}

if (true) {
    const username = "surya"
    if(username==="surya" )
    {
        const website = "twitter"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

function addOne(num) {
    return num+1;
}

console.log(addOne(5));

const addsTwo = function two(num) {
    return num+2;
}

console.log(addsTwo(10));
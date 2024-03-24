const user = {
    username : "surya",
    price : 999,
    welcomeMessege : function () {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

// this --> refers to the current context
// user.welcomeMessege();
// user.username ="sam",
// user.welcomeMessege();

// console.log(this);


// Browser ke andar sabse jada "window" object hain


// function chai() {
//     let name = "surya"
//     // console.log(this.username);
//     console.log(this.name);
// }

// chai();

// const chai = ()=> {
//         let name = "surya"
//         // console.log(this.username); // undefined
// }

// chai();

// ()=>{ } ---> Arrow Function
// const addTwo = (num1,num2)=> num1 + num2; // no need to write return (Implicit Return)
// const addTwo = (num1,num2)=> (num1 + num2);

// const addThree = (num1,num2)=>{
//     return num1 + num2; // must write return while using {} block ---> (Explicit Return)
// } 

const users = () =>{username : "surya"}; // to return an object we must add a parenthesis 

const users_2 = () =>({username : "surya"});

// console.log(addTwo(3,6));

// console.log(users().username); // undefined
console.log(users_2());


// const tinderUser = new Object();

// console.log(tinderUser); // empty object

const tindeUser = {};

tindeUser.id = "123abc"
tindeUser.name = "Explorer"
tindeUser.isLoggedIn = true;


const regularUser = {
    email: "surya@gmail.com",
    fullName: {
        useFullname: {
            firstName: "Surya",
            lastName: "Ghosh"
        }
    }
}

// console.log(tindeUser); // { id: '123abc', name: 'Explorer', isLoggedIn: true }

// console.log(regularUser.fullName.useFullname.firstName);



const object_1 = { 1: "a", 2: "b" };
const object_2 = {3 : "a", 4:"b"};
const object_4 = {5:"a",6:"b"};

// const object_3 = {object_1, object_2};

// console.log(object_3); // { object_1: { '1': 'a', '2': 'b' }, object_2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},object_1,object_2);
// console.log(obj3); // { object_1: { '1': 'a', '2': 'b' }, object_2: { '3': 'a', '4': 'b' } }


// const obj5 = Object.assign({},object_1,object_2,object_4);
// console.log(obj5); 

const obj6 = {...object_1,...object_2};
// console.log(obj6);

const users = [
    {
        id:1,
        email : "surya1@gmail.com"
    },
    {
        id:2,
        email : "surya2@gmail.com"
    },
    {
        id:3,
        email : "surya3@gmail.com"
    },
    {
        id:4,
        email : "surya4@gmail.com"
    },

];

console.log(tindeUser);
console.log(users[1].email);
console.log(Object.keys(tindeUser)); // datatype will become an array  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tindeUser));
console.log(Object.entries(tindeUser)); // [ [ 'id', '123abc' ], [ 'name', 'Explorer' ], [ 'isLoggedIn', true ] ]

console.log(tindeUser.hasOwnProperty('isLoggedIn')); // true

const nums = [1, 2, 3, 4, 5, 6]

// const newNums = nums.forEach((num)=>{
//     return num;
// }) // forEach can not return anything

// console.log(newNums);

const newNums = nums.filter((num) => num > 4)

// const newwNums = nums.filter((num) => {
//     // num > 4 can not automatically return, answer will be []

//     return num > 4 // we have to write the return keyword because {} is used to define the scop
// })

const newNums2 = []

nums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})

// console.log(newNums); // [ 5, 6 ]
// console.log(newwNums); // [ 5, 6 ]
// console.log(newNums2);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((book)=>book.genre==='History')

  console.log(userBooks);
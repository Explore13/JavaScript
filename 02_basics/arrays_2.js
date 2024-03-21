const marvel_heros =["thor","Ironman","Spiderman"];
const dc_heroes = ["superman","flash","batman"];

marvel_heros.push(dc_heroes);
console.log(marvel_heros); // dc_heroes array will be added in marvel_heros as an array type

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);



// const allHeros = marvel_heros.concat(dc_heroes);
// console.log(allHeros);



// const allNewHeros = [...marvel_heros, ...dc_heroes]
// console.log(allNewHeros);


// const anotherArray = [1,2,3,4,5,[6,7,8,9,[10,11]]];

// const real_another_array = anotherArray.flat(Infinity);
// console.log(real_another_array);



console.log(Array.isArray("Surya"));
console.log(Array.from("Surya"));
console.log(Array.from({name : "Surya"})); // interesting case


let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1,score2,score3));
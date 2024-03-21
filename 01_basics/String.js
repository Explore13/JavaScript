const name = "Surya";
const repoCount  = 15;

// console.log(name + repoCount + " Value"); Old Method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Surya-Explorer");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));

console.log(gameName.indexOf('E'));

const newString = gameName.substring(0,4);
console.log(newString); // From 0 before 4

const anotherStr = gameName.slice(-14,7);
console.log(anotherStr);


const newStringOne = "      surya     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suryaghoshweb%13explorer.com";

console.log(url.replace('%13','-'));

console.log(url.includes('surya'));

console.log(url.includes('webdev'));

console.log(gameName.split('-'));

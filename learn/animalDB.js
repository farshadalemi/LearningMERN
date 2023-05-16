// const animalInterface = require('oopConcepts');
import Animal from "./oopConcept.js";
import players from "./PlayersData.json";
const firstAnimal = new Animal("Alex", 2);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());

// const secondAnimal = new oopConcepts.Animal("Xavi", 3);
// console.log(secondAnimal);
// console.log(secondAnimal.gerInfo());


fs.readFileSync('PlayerData.json', 'utf-8', (err,fileName) => {

})


// console.log(
//   data.map((val, index) => ({
//     id: index,
//     ...val,
//   }))
// );


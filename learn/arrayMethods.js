let myArray = [1, 2, { Name: String }, "💆", "Hello", 0.21];
let myArray2 = [1, 2, 3, 4, 4, 0.21];

const pushM = myArray.push(3);
console.log(myArray);

const unshiftM = myArray.unshift(0);
console.log(myArray);

const popM = myArray.pop();
console.log(myArray);

const shiftM = myArray.shift();
console.log(myArray);

// const filterM = myArray2.map(4)
// console.log(myArray2);

// const mapM = myArray2.map(4 => 5)
// console.log(myArray2);

// const joinM = myArray2.join("-")
// console.log(myArray2);

const concatM = myArray.concat(5, 7);
console.log(myArray);

const flatM = myArray.flat();
console.log(myArray);

const sliceM = myArray.slice(3, 4);
console.log(myArray);

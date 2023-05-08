class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `The pet name is ${this.name} and the age is ${this.age}`;
  }
}


// const firstAnimal = new Animal('Alex', 2);
// console.log(firstAnimal);
// console.log(firstAnimal.getInfo());

// export * from "oopConcept";

export default Animal;

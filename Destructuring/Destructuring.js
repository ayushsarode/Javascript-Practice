// object example
const person = {
  name: "shubham",
  age: "25",
  greet() {
    console.log("hello I'm " + this.name + ". I am " + this.age + " Years old");
  },
};

//array example
const hobbies = ["sports", "cookies", "chess", "programming"];

//acessing array
for (let hobby of hobbies) {
  console.log(hobby);
}

//acessing array using map method
console.log(hobbies.map((hobby) => "hobby: " + hobby));

//creating copy of array using spread oporator
const arrayCoppy = [...hobbies];

console.log("arrayCoppy", arrayCoppy);

//rest opporator

const array = (...args) => {
  return args;
};

console.log(array(1, 2, 3, 4, 5));

//destructuring
function personal_details({ name, age }) {
  console.log(`my name is ${name} and  i am ${age} years old`);
}

personal_details(person);

//without destructuring

function personal_details(person) {
  console.log(`my name is ${person.name} and  i am ${person.age} years old`);
}

personal_details(person);

//another destructuring example
const { name, age } = person;

function data(person) {
  console.log(`my name is ${name} and  i am ${age} years old`);
}
data(person);

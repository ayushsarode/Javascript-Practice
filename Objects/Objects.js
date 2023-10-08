// Using object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Using the Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

//Accessing Object Properties

console.log(person.firstName); // Output: John
console.log(car["make"]); // Output: Toyota

//Adding and Modifying Properties

person.email = "john@example.com";
car.year = 2021;

console.log(person.email); // Output: john@example.com
console.log(car.year); // Output: 2021

//Nested Objects

const student = {
  name: "Alice",
  grade: 10,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

console.log(student.address.city); // Output: Anytown

//Object Methods
const circle = {
  radius: 5,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area()); // Output: 78.53981633974483

//Iterating Over Object Properties

for (const key in person) {
  console.log(key + ": " + person[key]);
}

//Deleting Properties

delete person.age;
console.log(person.age); // Output: undefined

//Object Constructors (Classes)

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Alice", "Smith", 25);

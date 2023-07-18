const fruits = [
  "banana",
  "apple",
  "mango",
  13,
  true,
  false,
  function YourAge() {
    console.log("My age is 18");
  },
];
// console.log(fruits.length);

const NewFruit = fruits;
NewFruit[3] = "orange"; // changing the content

console.log(NewFruit);

// indexof() - searches on eleement of an array and returns its position

// inclues() - checks if an array  contains a specified element

// push () - adds a new element to the ends of an aarrays and returns the new lenght of an array

// unshift() - adds a new eleement to the beginning of the an array and returns the new lenght of an array

//pop() - removes the last element of an array and returns the removed element

//shift() - removes the first element of an array and returns the removed element

//sort() sorts the elements alphabetically in strings and in ascending order

// slice () - selects the part of an array and returns the new arrays

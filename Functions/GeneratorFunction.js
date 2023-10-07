function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = countToThree();

console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3

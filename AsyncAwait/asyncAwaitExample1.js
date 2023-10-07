console.log("Welcome to the Ice-Cream Shop!!! ");

let stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apples"],
  liqud: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let toppongs_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping would you love?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("first");
  console.log("sec");
  console.log("three");
  await toppongs_choice();
  console.log("four");
  console.log("five");
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");

//output :
// Welcome to the Ice-Cream Shop!!!
// first
// sec
// three
// doing the dishes
// cleaning the tables
// taking others orders
// Which topping would you love?
// four
// five

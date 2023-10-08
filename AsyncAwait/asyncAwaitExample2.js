console.log("Welcome to the Ice-Cream Shop!!! ");

let stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apples"],
  liqud: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[2]} was selected`);
    await time(0o0);
    console.log("start the production");
    await time(2000);
    console.log("cut the fruits");
    await time(1000);
    console.log(`${stocks.liqud[0]} and ${stocks.liqud[1]} added`);
    await time(1000);
    console.log("start the machine");
    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);
    await time(2000);
    console.log("serve ice cream");
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop is closed");
  }
}

kitchen();

// Welcome to the Ice-Cream Shop!!!
// bananas was selected
// start the production
// cut the fruits
// water and ice added
// start the machine
// ice cream placed on cone
// chocolate as toppings
// serve ice cream
// Day ended, shop is closed

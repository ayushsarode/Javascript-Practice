console.log("Welcome to the Ice-Cream Shop!!! ");
console.log("select your favorite fruit :");

let stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apples"],
  liqud: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.fruits[0]} are selected`);
})
  .then(() => {
    return order(0o0, () => {
      console.log("production has started");
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.fruits[0]} have been chopped `);
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liqud[0]} and ${stocks.liqud[1]} added`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("machine has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.holder[0]} selected`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} as toppings`);
    });
  })

  .then(() => {
    return order(2000, () => {
      let n = 5;

      console.log("Here is your Ice-Cream :");
      for (let i = 1; i <= n; i++) {
        let icecream = "";
        // console.log("*");
        for (let j = i; j <= n; j++) {
          icecream += "  ";
        }
        for (let j = 1; j < i; j++) {
          icecream += "* ";
        }
        for (let j = 1; j <= i; j++) {
          icecream += "* ";
        }

        console.log(icecream);
      }
      for (let i = 1; i <= n; i++) {
        let cone = "";
        // console.log("*");
        for (let j = 1; j <= i; j++) {
          cone += "  ";
        }
        for (let j = i; j <= n; j++) {
          cone += "= ";
        }
        for (let j = i; j < n; j++) {
          cone += "= ";
        }

        console.log(cone);
      }
    });
  })

  .catch(() => {
    console.log("customer left");
  })

  .finally(() => {
    console.log("day ended");
  });

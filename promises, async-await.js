//Asyncronous code
// function getCheese() {
//   setTimeout(() => {
//     const cheese = "";
//     return cheese;
//   }, 2000);
// }

//syncronous code
// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = false;
//   if (isBoarded) {
//     resolve("You are not in the Flight");
//   } else {
//     reject("Your flight has been cancelled");
//   }
// });

// ticket
//   .then((data) => {
//     console.log(`Ticket: ${data}`); // You have a valid Ticket!
//   })
//   .catch((data) => {
//     console.log("Sorry,", data);
//   })
//   .finally((data) => {
//     console.log("I will always be executed");
//   });

// syncronous code

// Pizza making using Promise

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🫓";
      resolve(dough);
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Pizza = dough + "🍕";
      // resolve(Pizza);
      reject("bad pizza");
    }, 2000);
  });
}

async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log("here is the cheese", cheese);

    const dough = await makeDough(cheese);
    console.log("here is the dough", dough);

    const Pizza = await bakePizza(dough);
    console.log("here is the pizza", Pizza);
  } catch (error) {
    console.log("error occured", error);
  }
}

orderPizza();

// getCheese()
//   .then((cheese) => {
//     console.log("here is the cheese,", cheese);
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     console.log("here is the dough,", dough);
//     return bakePizza(dough);
//   })
//   .then((Pizza) => {
//     console.log("here is the pizza,", Pizza);
//   });

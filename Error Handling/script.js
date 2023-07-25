// try {
//   const age = prompt("Are you a Robot?");
//   if (age === "Y") {
//     throw {
//       name: "Ayush",
//     };
//   }
// } catch (error) {
//   console.log(error.name);
// } finally {
//   alert(`Thank You for your response ${name}`);
// }

try {
  console.log("before the error");
  console.log(age);
  console.log("after the error");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
} finally {
  console.log("From Finally Method");
}

// console
//before the error
// ReferenceError - (err.name)  this is error name
// age is not defined - (err.message) This is human readable message
// From Finally Method

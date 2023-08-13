// var a = document.querySelector("h2");

// console.log(a);

// var list = document.querySelector("ul");
// console.log(list);

// for (let i = 0; i < list.length; i++) {
//   list[i].style.color = "red";
// }

// for (let i = 0; i < a.length; i++) {
//   a[i].style.color = "yellow";
// }

//select the parent element
// const list = document.querySelector("ul");
// //create a new element
// const listItem = document.createElement("li");
// //make the newly created element a child of the parent
// list.appendChild("listItem");
// console.log(list);

// const List = document.querySelector("span");

// List.innerHTML = "Changed Text";

// console.log(List);

// const querySelectAllItems = document.querySelectorAll("li");
// for (let i = 0; i < querySelectAllItems.length; i++) {
//   querySelectAllItems[i].style.color = "green";
// }

const ColorChange = document.getElementsByClassName("container");

for (let i = 0; i < ColorChange.length; i++) {
  ColorChange[i].style.border = "7px solid grey";
}

console.log(ColorChange);

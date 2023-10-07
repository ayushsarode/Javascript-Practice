// Callback Function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data from the server";
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log(result); // Output after 1 second: Some data from the server
});

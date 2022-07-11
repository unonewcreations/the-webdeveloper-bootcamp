const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// *change event
// input.addEventListener("change", function (e) {
//   console.log("sdjhgfjsg");
// });

// *input event
input.addEventListener("input", function (e) {
  //   console.log("input!");
  h1.innerText = input.value;
  console.log(e);
});

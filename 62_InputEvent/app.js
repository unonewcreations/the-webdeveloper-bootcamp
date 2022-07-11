// create variables
const h1 = document.querySelector("h1");
const input = document.querySelector("input");

// function change h1 element
input.addEventListener("input", function (e) {
  h1.value = "Enter Your Username";
  if (input.value === "") {
    h1.innerText = `Enter Your Username`;
  } else {
    h1.innerText = `Welcome, ${input.value}`;
  }
});

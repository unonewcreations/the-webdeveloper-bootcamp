const form = document.querySelector("form");
const product = form.elements.product;
const quantity = form.elements.qty;
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newList = document.createElement("li");
  newList.innerHTML = `${quantity.value} ${product.value}`;
  list.appendChild(newList);
  product.value = "";
  quantity.value = "";
});

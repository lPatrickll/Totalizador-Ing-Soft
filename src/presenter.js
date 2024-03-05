import precioNeto from "./totalizador";

const cantItems = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItemsNumber = Number.parseInt(cantItems.value);
  const precioNumber = Number.parseInt(precio.value);

  div.innerHTML = "<p>" + precioNeto(cantItemsNumber, precioNumber) + "</p>";
});

import {precioNeto, calcularTotal} from "./totalizador";

const cantItems = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector("#codigoEstado");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItemsNumber = Number.parseInt(cantItems.value);
  const precioNumber = Number.parseInt(precio.value);
  const estadoValue = estado.value;

  div.innerHTML = ("<p>" + "Precio neto (" + cantItemsNumber + "*$" + precioNumber + "): $" + precioNeto(cantItemsNumber, precioNumber) + "</p>" +
  "<p>"+ "Impuesto para " + estadoValue + "(%" + "): $" + "</p>"+
  "<p>" + "Precio Total: " + calcularTotal(precioNeto(cantItemsNumber, precioNumber), estadoValue) + "</p>" 
  );

});

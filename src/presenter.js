import {precioNeto, calcularTotal, calcularImpuesto, porcentajeImpuesto, calcularDescuento, porcentajeDecuento, porcentajeCategoriaImpuesto, categoriaImpuesto} from "./totalizador";

const cantItems = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector("#codigoEstado");
const categoria = document.querySelector("#categoria");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItemsNumber = Number.parseInt(cantItems.value);
  const precioNumber = Number.parseInt(precio.value);
  const estadoValue = estado.value;
  const categoriaValue = categoria.value;

  div.innerHTML = ("<p>" + "Precio neto (" + cantItemsNumber + "*$" + precioNumber + "): $" + precioNeto(cantItemsNumber, precioNumber) + "</p>" +
  "<p> Descuento (" + porcentajeDecuento(cantItemsNumber) + "%): " + calcularDescuento(precioNeto(cantItemsNumber, precioNumber), cantItemsNumber) + "</p>" +
  "<p>"+ "Impuesto para " + estadoValue + "(%" + porcentajeImpuesto(estadoValue) * 100 + "): $" + calcularImpuesto(precioNeto(cantItemsNumber, precioNumber), estadoValue) + "</p>"+
  "<p> Impuestos por categoria (" + porcentajeCategoriaImpuesto(categoriaValue) + "%): " + categoriaImpuesto(precioNeto(cantItemsNumber, precioNumber), categoriaValue) + "</p>" +
  "<p>" + "Precio Total: " + calcularTotal(cantItemsNumber, precioNumber, estadoValue) + "</p>" 
  );

});

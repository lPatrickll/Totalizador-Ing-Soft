import {precioNeto, calcularTotal, calcularImpuesto, porcentajeImpuesto, calcularDescuento, porcentajeDecuento, porcentajeCategoriaImpuesto, categoriaImpuesto, categoriaDescuento, porcentajeCategoriaDescuento, costoEnvio, calcularPeso, calcularDescuentoTipoCliente,calcularDescuentoCostoEnvioCliente} from "./totalizador";

const cantItems = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector("#codigoEstado");
const categoria = document.querySelector("#categoria");
const peso = document.querySelector("#peso");
const cliente = document.querySelector("#cliente");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantItemsNumber = Number.parseInt(cantItems.value);
  const precioNumber = Number.parseInt(precio.value);
  const estadoValue = estado.value;
  const categoriaValue = categoria.value;
  const pesoNumber = Number.parseInt(peso.value);
  const clienteValue = cliente.value;

  div.innerHTML = ("<p>" + "Precio neto (" + cantItemsNumber + "*$" + precioNumber + "): $" + precioNeto(cantItemsNumber, precioNumber) + "</p>" +
  "<p> Descuento (" + porcentajeDecuento(cantItemsNumber) + "%): " + calcularDescuento(precioNeto(cantItemsNumber, precioNumber), cantItemsNumber) + "</p>" +
  "<p>"+ "Impuesto para " + estadoValue + "(%" + porcentajeImpuesto(estadoValue) * 100 + "): $" + calcularImpuesto(precioNeto(cantItemsNumber, precioNumber), estadoValue) + "</p>"+
  "<p> Impuestos por categoria (" + porcentajeCategoriaImpuesto(categoriaValue) + "%): " + categoriaImpuesto(precioNeto(cantItemsNumber, precioNumber), categoriaValue) + "</p>" +
  "<p> Descuentos por categoria (" + porcentajeCategoriaDescuento(categoriaValue) + "%): " + categoriaDescuento(precioNeto(cantItemsNumber, precioNumber), categoriaValue) + "</p>" +
  "<p> Peso volumetrico ($" + costoEnvio(pesoNumber) + "): " + calcularPeso(cantItemsNumber, pesoNumber) + "</p>" +
  "<p> Descuento para el cliente ("+ clienteValue +") con ("+ calcularDescuentoCostoEnvioCliente(clienteValue) +"%): " + calcularDescuentoTipoCliente(precioNeto(cantItemsNumber, precioNumber), clienteValue) + "</p>" +
  "<p>" + "Precio Total: " + calcularTotal(cantItemsNumber, precioNumber, estadoValue, categoriaValue) + "</p>" 
  );

});

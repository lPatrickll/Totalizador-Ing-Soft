import {precioNeto, calcularTotal, calcularImpuesto, porcentajeImpuesto, calcularDescuento, porcentajeDecuento, porcentajeCategoriaImpuesto, categoriaImpuesto, categoriaDescuento, porcentajeCategoriaDescuento, costoEnvio, calcularPeso, calcularDescuentoTipoCliente,calcularDescuentoCostoEnvioCliente, calcularOtrosBeneficios} from "./totalizador";

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

  div.innerHTML = (
    "<p>" + "<b>Precio neto (</b>" + cantItemsNumber + "*$" + precioNumber + "<b>):</b> $" + precioNeto(cantItemsNumber, precioNumber) + "</p>" +
    "<p> <b>Descuento (</b>" + porcentajeDecuento(cantItemsNumber) + "<b>%):</b> " + calcularDescuento(precioNeto(cantItemsNumber, precioNumber), cantItemsNumber) + "</p>" +
    "<p> <b>Impuesto para </b>" + estadoValue + "<b>(%</b>" + porcentajeImpuesto(estadoValue) * 100 + "<b>):</b> $" + calcularImpuesto(precioNeto(cantItemsNumber, precioNumber), estadoValue) + "</p>"+
    "<p> <b>Impuestos por categoria (</b>" + porcentajeCategoriaImpuesto(categoriaValue) + "<b>%):</b> " + categoriaImpuesto(precioNeto(cantItemsNumber, precioNumber), categoriaValue) + "$ </p>" +
    "<p> <b>Descuentos por categoria (</b>" + porcentajeCategoriaDescuento(categoriaValue) + "<b>%): </b>" + categoriaDescuento(precioNeto(cantItemsNumber, precioNumber), categoriaValue) + "$ </p>" +
    "<p> <b>Peso volumetrico ($</b>" + costoEnvio(pesoNumber) + "<b>): </b>" + calcularPeso(cantItemsNumber, pesoNumber) + "$ </p>" +
    "<p> <b>Descuento para el cliente (</b>"+ clienteValue +"<b>) con (</b>"+ calcularDescuentoCostoEnvioCliente(clienteValue) +"<b>%): </b>" + calcularDescuentoTipoCliente(precioNeto(cantItemsNumber, precioNumber), clienteValue) + "$</p>" +
    "<p> <b>Descuentos especiales: </b>"+ calcularOtrosBeneficios(clienteValue, precioNeto(cantItemsNumber, precioNumber), categoriaValue) + "$</p>" +
    "<p class='precio-total'>" + "Precio Total: " + calcularTotal(cantItemsNumber, precioNumber, estadoValue, categoriaValue, clienteValue, pesoNumber).toFixed(2) + "$ </p>" 
  );

});

function precioNeto(cantItems, precio){
    return cantItems * precio;
}

function porcentajeImpuesto(estado){
    let porcentaje;
    if (estado == "CA")
        porcentaje = 0.0825;
    if (estado == "AL")
        porcentaje = 0.04;
    if (estado == "TX")
        porcentaje = 0.0625;
    if (estado == "NV")
        porcentaje = 0.08;
    if (estado == "UT")
        porcentaje = 0.0665;
    return porcentaje;
}

function porcentajeDecuento(cantidad){
    let porcentaje = 0;
    if (cantidad >= 1000 && cantidad <=2999)
        porcentaje = 3;
    if (cantidad >= 3000 && cantidad <=6999)
        porcentaje = 5;
    if (cantidad >= 7000 && cantidad <=9999)
        porcentaje = 7;
    if (cantidad >= 10000 && cantidad <=29999)
        porcentaje = 10;
    if (cantidad >= 30000)
        porcentaje = 15;
    return porcentaje;
}

function porcentajeCategoriaImpuesto(categoria){
    let porcentaje = 0;
    if (categoria === "bebidas")
        porcentaje = 7;
    if (categoria === "muebles")
        porcentaje = 3;
    if (categoria === "electronicos")
        porcentaje = 4;
    if (categoria === "vestimenta")
        porcentaje = 2;
    return porcentaje;
}

function porcentajeCategoriaDescuento(categoria){
    let porcentaje = 0;
    if (categoria === "alimentos")
        porcentaje = 2;
    return porcentaje;
}

function categoriaImpuesto(neto, categoria){
    return (neto * porcentajeCategoriaImpuesto(categoria)) / 100;
}

function categoriaDescuento(neto,categoria){
    return (neto * porcentajeCategoriaDescuento(categoria)) / 100;
}

function calcularDescuento(neto, cantidad){
    return (neto * porcentajeDecuento(cantidad)) / 100;
}

function calcularImpuesto(neto, estado){
    return neto * porcentajeImpuesto(estado);
}

function calcularTotal(cantidad, precio, estado){
    let neto = precioNeto(cantidad, precio);
    return neto + calcularImpuesto(neto, estado) - calcularDescuento(neto, cantidad);
}

export {precioNeto, calcularTotal, calcularImpuesto, porcentajeImpuesto, calcularDescuento, porcentajeDecuento, categoriaImpuesto, porcentajeCategoriaImpuesto, categoriaDescuento};
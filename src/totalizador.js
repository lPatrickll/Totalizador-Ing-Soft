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

function calcularDescuento(neto, cantidad){
    let descuento = 0;
    if (cantidad >= 1000 && cantidad <=2999)
        descuento = (neto * 3) / 100;
    if (cantidad >= 3000 && cantidad <=6999)
        descuento = (neto * 5) / 100;
    if (cantidad >= 7000 && cantidad <=9999)
        descuento = (neto * 7) / 100;
    if (cantidad >= 10000 && cantidad <=29999)
        descuento = (neto * 10) / 100;
    if (cantidad >= 30000)
        descuento = (neto * 15) / 100;
    return descuento;
}

function calcularImpuesto(neto, estado){
    return neto * porcentajeImpuesto(estado);
}

function calcularTotal(neto, estado){
    return neto + calcularImpuesto(neto, estado);
}

export {precioNeto, calcularTotal, calcularImpuesto, porcentajeImpuesto, calcularDescuento};
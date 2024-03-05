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

function calcularImpuesto(neto, estado){
    return neto * porcentajeImpuesto(estado);
}

function calcularTotal(neto, estado){
    return neto + calcularImpuesto(neto, estado);
}

export {precioNeto, calcularTotal, calcularImpuesto, porcentajeImpuesto};
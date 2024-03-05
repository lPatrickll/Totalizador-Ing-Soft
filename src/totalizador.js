function precioNeto(cantItems, precio){
    return cantItems * precio;
}

function calcularImpuesto(neto, estado){
    let impuesto;
    if (estado == "CA")
        impuesto = neto * 0.0825;
    if (estado == "AL")
        impuesto = neto * 0.04;
    if (estado == "TX")
        impuesto = neto * 0.0625;
    if (estado == "NV")
        impuesto = neto * 0.08;
    if (estado == "UT")
        impuesto = neto * 0.0665;
    return impuesto;
}

function calcularTotal(neto, estado){
    return neto + calcularImpuesto(neto, estado);
}

export {precioNeto, calcularTotal};
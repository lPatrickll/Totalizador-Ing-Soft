function precioNeto(cantItems, precio){
    return cantItems * precio;
}

function calcularTotal(neto, estado){
    let res; 
    if (estado == "CA")
        res = neto + (neto * 0.0825);
    if (estado == "AL")
        res = neto + (neto * 0.04);
    if (estado == "TX")
        res = neto + (neto * 0.0625);
    if (estado == "NV")
        res = neto + (neto * 0.08);
    return res;
}

export {precioNeto, calcularTotal};
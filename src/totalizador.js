function precioNeto(cantItems, precio){
    return cantItems * precio;
}

function calcularTotal(neto, estado){
    let res; 
    if (estado == "CA")
        res = neto + (neto * 0.0825);
    else
        res = neto + (neto * 0.04);
    return res;
}

export {precioNeto, calcularTotal};
function precioNeto(cantItems, precio){
    return cantItems * precio;
}

function calcularTotal(neto, estado){
    return neto + (neto * 0.0825);
}

export {precioNeto, calcularTotal};
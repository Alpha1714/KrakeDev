calcularValorDescuento = function(monto, porcentajeDescuento){
    //Calcular el valor del descuento
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento;
}

calcularIVA = function(monto){
    //Calcular el valor del IVA
    let valorIVA = monto * 0.12;
    return valorIVA;
}

calcularSubtotal = function(precio, cantidad){
    //Calcular el subtotal
    let subtotal = cantidad * precio;
    return subtotal;
}

calcularTotal = function(subtotal, descuento, iva){
    //Calcular el total
    let total = subtotal - descuento + iva;
    return total;
}
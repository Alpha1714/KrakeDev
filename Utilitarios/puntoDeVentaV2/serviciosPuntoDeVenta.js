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

calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let porcentaje;
    if (cantidad < 3){
        porcentaje = 0;
    } else if (cantidad >= 3 && cantidad <= 5){
        porcentaje = 0.03;
    } else if (cantidad >= 6 && cantidad <= 11){
        porcentaje = 0.04;
    } else {
        porcentaje = 0.05;
    }
    let valorDescuento = subtotal * porcentaje;
    return valorDescuento;  // SOLO el valor del descuento
}
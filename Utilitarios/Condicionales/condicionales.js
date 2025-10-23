    let notaMatematica;
    let notaFisica;
    let notaGeometria;
calcularTasaInteres = function() {
    let ingresoAnual;
    ingresoAnual = recuperarFloat("txtIngresoAnual");
    if (ingresoAnual < 300000) {
        mostrarTexto("pResultado", "Su tasa de interes es del 16%");
        ingresoAnual = 0.16;
    }else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        mostrarTexto("pResultado", "Su tasa de interes es del 15%");
        ingresoAnual = 0.15;
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        mostrarTexto("pResultado", "Su tasa de interes es del 14%");
        ingresoAnual=0.14;
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        mostrarTexto("pResultado", "Su tasa de interes es del 13%");
        ingresoAnual = 0.13;
    }else if(ingresoAnual > 2000000){
        mostrarTexto("pResultado", "Su tasa de interes es del 12%");
        ingresoAnual = 0.12;
    }
    return ingresoAnual;

}

cacularCapacidadPago=function(){
    let ingresos;
    let egresos;
    let edad;
    let capacidadPago;
    ingresos=recuperarFloat("txtIngresos");
    egresos=recuperarFloat("txtEgresos");
    edad=recuperarFloat("txtEdad");
    capacidadPago=egresos-ingresos;
    if(edad==50 && edad>50){
        capacidadPago = 0.30;
        mostrarTexto("pResultado2","Su capacidad de pago es del 30%: "+capacidadPago);
    }else{
        capacidadPago = 0.40;
        mostrarTexto("pResultado2","Su capacidad de pago es del 40%"+capacidadPago);
    }
    return capacidadPago;
}

cacularDescuento=function(){
    let precio;
    let cantidad;
    cantidad=recuperarInt("txtCantidad");
    precio=recuperarFloat("txtPrecio");
    if (cantidad >= 3 && cantidad <= 5) {
        precio = 0.02; // 2%
        mostrarTexto("pResultado3","Su descuento es del 2%: "+precio);
    } else if (cantidad >= 6 && cantidad <= 11) {
        precio = 0.03; // 3%
        mostrarTexto("pResultado3","Su descuento es del 3%: "+precio);
    } else if (cantidad >= 12) {
        precio = 0.04; // 4%
        mostrarTexto("pResultado3","Su descuento es del 4%: "+precio);
    }
    return precio;
}

determinarColesterolILDL=function(){
    let nivelColesterol;
    nivelColesterol=recuperarFloat("txtColesterol");
    if(nivelColesterol<110){
        mostrarTexto("colesterol","Usted es una persona de 19"+nivelColesterol+"mg/dL");
    }else if(nivelColesterol<100){
        mostrarTexto("colesterol","Usted es un Hombre de 20 o más"+nivelColesterol+"mg/dL");
    }else if(nivelColesterol<130){
        mostrarTexto("colesterol","Usted es una Mujer de 20  o mas"+nivelColesterol+"mg/dL");
    }
    return mostrarTexto;
}

validarClave=function(){
    let clave;
    clave=recuperarTexto("txtClave");
    if(clave>8 && clave<=16){
        mostrarTexto("clave","Clave válida");
        return true;
    }else{
        mostrarTexto("clave","Clave inválida");
        return false;
    }
}

esMayuscula=function() {
    let caracter;
    let codigo;
    caracter = recuperarTexto("txtMayuscula");
    codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        mostrarTexto("mayuscula","Es mayuscula");
        return true;
    } else {
        mostrarTexto("mayuscula","No es mayuscula");
        return false;
    }
}

esMinuscula=function() {
    let caracter;
    let codigo;
    caracter = recuperarTexto("txtMinuscula");
    codigo = caracter.charCodeAt(0);
    if (codigo >= 97 && codigo <= 122) {
        mostrarTexto("minuscula","Es minuscula");
        return true;
    }
    const minusculasConTilde = ['á', 'é', 'í', 'ó', 'ú', 'ñ'];
    if (minusculasConTilde.includes(caracter)) {
        mostrarTexto("minuscula","Es minuscula");
        return true;
    }

    return false;
}

esDigito=function() {
    let caracter;
    let codigo;
    caracter = recuperarTexto("txtNumero");
    codigo = caracter.charCodeAt(0);
    if (codigo >= 48 && codigo <= 57) {
        mostrarTexto("numero", "Es digito");
        return true;
    } else {
        mostrarTexto("numero", "No es digito");
        return false;
    }
}

darPermiso=function() {
    notaMatematica=recuperarFloat("notaMat");
    notaFisica=recuperarFloat("notaFisica");
    notaGeometria=recuperarFloat("notaGeo");
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        mostrarTexto("darPermiso","Se le otorga el permiso");
        return true;
    }else{
        mostrarTexto("darPermiso","No se le otorga el permiso");
        return false;
    }
}

otorgarPermiso=function() {
    notaMatematica=recuperarFloat("notaMat");
    notaFisica=recuperarFloat("notaFisica");
    notaGeometria=recuperarFloat("notaGeo");
    if((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80){
        mostrarTexto("otorgarPermiso","Se le otorga el permiso");
        return true;
    }else{
        mostrarTexto("otorgarPermiso","No se le otorga el permiso");
        return false;
    }
}

dejarSalir=function() {
    notaMatematica=recuperarFloat("notaMat");
    notaFisica=recuperarFloat("notaFisica");
    notaGeometria=recuperarFloat("notaGeo");
    if(((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90)&& notaFisica > notaMatematica)){
        mostrarTexto("dejarSalir","Puede Salir");
        return true;
    }else{
        mostrarTexto("dejarSalir", "No puede Salir");
        return false;
        
    }
}

limpiar=function(){
    mostrarTexto("clave","");
    mostrarTexto("mayuscula","");
    mostrarTexto("minuscula","");
    mostrarTexto("numero","");
    mostrarTexto("darPermiso","");
    mostrarTexto("otorgarPermiso","");
    mostrarTexto("dejarSalir","");
    mostrarTextoEnCaja("txtClave","");
    mostrarTextoEnCaja("txtMayuscula","");
    mostrarTextoEnCaja("txtMinuscula","");
    mostrarTextoEnCaja("txtNumero","");
    mostrarTextoEnCaja("notaMat","");
    mostrarTextoEnCaja("notaFisica","");
    mostrarTextoEnCaja("notaGeo","");
}   

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
recuperarEntero=function(idComponente){
    let valorCaja=document.getElementById(idComponente);
    let valorEntero=parseInt(valorCaja.value);
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja=document.getElementById(idComponente);
    let valorFlotante=parseFloat(valorCaja.value);
    return valorFlotante;
}

mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostarImagen=function(idComponente,rutaimagen){
    let componente=document.getElementById(idComponente);
    componente.src=rutaimagen;
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
mostrarTexto=function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFloat=parseFloat(valorCaja);
    return valorFloat;
}
recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorInt=parseFloat(valorCaja);
    return valorInt;
}

mostrarTextoEnCaja=function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
cambiarImagen=function(idComponente,imagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=imagen;
}
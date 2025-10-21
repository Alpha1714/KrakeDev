saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarEntero("txtEdad");
    let altura=recuperarFloat("txtEstatura");
    console.log("Hola "+nombre+" "+apellido);
    console.log("Tienes "+edad+" años y mides "+altura+" metros.");
    let mensajeBienvenida="Hola "+nombre+" "+apellido+". Tienes "+edad+" años y mides "+altura+" metros.";
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostarImagen("imgSaludo","./imagenes/saludo.gif");
    mostrarTextoEnCaja("txtNombre","");
}
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
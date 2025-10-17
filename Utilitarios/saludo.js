saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarEntero("txtEdad");
    let altura=RecuperarFloat("txtEstatura");
    console.log("Hola "+nombre+" "+apellido);
    console.log("Tienes "+edad+" años y mides "+altura+" metros.");
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

RecuperarFloat=function(idComponente){
    let valorCaja=document.getElementById(idComponente);
    let valorFlotante=parseFloat(valorCaja.value);
    return valorFlotante;
}
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

validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == null){
        mostrarTexto("lblResultado", "ESTRUCTURA VALIDA");
        let nombreProvincia = obtenerProvincia(placa);
        if (nombreProvincia == null){
        mostrarTexto("lblProvincia", "Provincia Inconrrecta");
        } else {
        mostrarTexto("lblProvincia", "La placa pertenece a la provincia de: " + nombreProvincia);
        }
        let tipoVehiculo = obtenerTipoVehiculo(placa); 
        mostrarTexto("lblTipoVehiculo", "Es tipo: " + tipoVehiculo);
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblPicoYPlaca", "El dia pico y placa es: " + diaPicoYPlaca);
        mostrarTexto("lblError", "")

    } else {
        mostrarTexto("lblResultado", "ESTRUCTURA INCORRECTA ");
        mostrarTexto("lblError", erroresEstructura);
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblTipoVehiculo", "");
        mostrarTexto("lblPicoYPlaca", "");
    }
}

limpiar = function(){
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblError", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipoVehiculo", "");
    mostrarTexto("lblPicoYPlaca", "");
    mostrarTextoEnCaja("txtPlaca","")
}
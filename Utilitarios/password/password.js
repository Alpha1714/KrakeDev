ejecutarValidacion = function () {
    let password = recuperarTexto("txtPassword"); 
    let errores = validarPassword(password);
    if (errores == "") {
        mostrarTexto("lblResultado", "Password Correcto");
    } else {
        mostrarTexto("lblResultado", errores)
    }
}


validarPassword = function (password) {
    let errores = "";
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspeciales = false;
    if (password.length < 8 || password.length > 16) { 
        errores += "El password debe estar entre 8 y 16 caracteres. ";
        return errores;
    } else {
        for (posicion = 0; posicion < password.length; posicion++) {
            let caracter = password.charAt(posicion);
            if (esMayuscula(caracter)) {
                tieneMayuscula = true;
            }
            if (esDigito(caracter)) {
                tieneDigito = true;
            }
            if (esEspecial(caracter)) {
                tieneEspeciales = true;
            }
        }
    }

    if (tieneMayuscula == false) {
        errores += "Debe tener al menos una letra Mayuscula. "
    }
    if (tieneDigito == false) {
        errores += "Debe tener al menos una Digito. "
    }
    if (tieneEspeciales == false) {
        errores += "Debe tener al menos un signo especial permitido: (* - _). "
    }

    return errores;
}
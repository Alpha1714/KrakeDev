obtenerAleatorio = function(){
    let valorAleatorio = parseInt(Math.random() * 3) + 1;
  return valorAleatorio;
}

generarElemento = function(){
    let cadenaRandom;
    let valor = obtenerAleatorio();
    if (valor == 1){
        cadenaRandom = "piedra"
    } else if (valor == 2){
        cadenaRandom = "papel"
    } else {
        cadenaRandom = "tijera"
    }
    return cadenaRandom;
}

determinarGanador = function(eleccionJugador1,eleccionJugador2){
let resultado ;

if ((eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
    (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
    (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")
    ){ resultado = 1;
} else if (
    (eleccionJugador1 == "piedra" && eleccionJugador2 == "papel") ||
    (eleccionJugador1 == "tijera" && eleccionJugador2 == "piedra") ||
    (eleccionJugador1 == "papel" && eleccionJugador2 == "tijera")
){ resultado = 2;
} else {
    resultado = 0
}
return resultado;
}

generarRuta = function(nombre){
let rutaImagen = nombre + ".png";
return rutaImagen;
}
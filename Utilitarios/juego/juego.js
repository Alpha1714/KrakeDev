
let puntosUsuarios = 0;
let puntosComputador = 0;

jugar = function(seleccionado){

let elemento = generarElemento();
mostrarImagen ("img",generarRuta (elemento));
let ganador = determinarGanador(seleccionado,elemento);
mostrarTexto ("lblComputador","El Computador eligio:");
mostrarTexto("lblResultadoFinal", "");

if (ganador == 0){
    mostrarTexto("lblResultado", "Empate");
    
} else if (ganador == 1){
    mostrarTexto("lblResultado", "Ganaste la Partida");
    puntosUsuarios = puntosUsuarios + 1;
    mostrarTexto("lblUsuario", puntosUsuarios);
    if(puntosUsuarios == 5){
        puntosUsuarios = 0;
        mostrarTexto("lblResultadoFinal", "HAS GANADO EL JUEGO");
        mostrarTexto("lblUsuario", "");
        mostrarTexto("lblComputador2", "")
        mostrarImagen ("img","");
        mostrarTexto("lblResultado", "");
    }
    
} else {
    mostrarTexto("lblResultado", "Perdiste la Partida");
    puntosComputador = puntosComputador + 1;
    mostrarTexto("lblComputador2", puntosComputador);
    if(puntosComputador == 5){
        puntosComputador = 0;
        mostrarTexto("lblResultadoFinal", "HAS PERDIDO EL JUEGO")
        mostrarTexto("lblUsuario", "");
        mostrarTexto("lblComputador2", "")
        mostrarImagen ("img","");
        mostrarTexto("lblResultado", "");
    }
    
}

}

nuevaPartida = function(){
    let puntosUsuarios = 0;
    let puntosComputador = 0;
    mostrarImagen ("img","");
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblUsuario", "")
    mostrarTexto("lblComputador2", "")
    mostrarTexto("lblResultadoFinal", "");
    mostrarTexto("lblUsuario", "");
    mostrarTexto("lblComputador2", "");

}
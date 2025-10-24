numeroAleatorio = function(){
    let aleatorio = parseInt(Math.random() * 100 + 1);
    return aleatorio;
}

generarAleatorio = function(){
    let valorUsuario = recuperarInt("txtNumero");
    let error = ""

    if(valorUsuario < 5 || valorUsuario > 20){
        error = "El numero ingresado debe ser entre 5 y 20"
        alert(error);
        return;
    } else {

        let aleatorio=[];

        for (let i = 0 ; i < valorUsuario ; i++){
            console.log("El valor iterando es: " + i)
            let numero = numeroAleatorio();
            aleatorio.push(numero);
        }
        mostrarResultados(aleatorio);
    }

}


mostrarResultados = function(arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>Indice</th><th>Random</th></tr>"

    for (let i = 0; i < arregloNumeros.length; i++) {
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + i + "</td>";
        contenidoTabla += "<td>" + arregloNumeros[i] + "</td>";
        contenidoTabla += "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


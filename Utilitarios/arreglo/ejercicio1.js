let notas = [];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas);
    console.log(notas.length);
}

agregarNota = function(nota){
    notas.push(nota);
}

probarNota= function(){
let notaRecuperada = recuperarInt("txtNotas");
agregarNota(notaRecuperada);
console.log(notas);
}



recorrerArreglo = function(){
let notaR;
    for(let indice = 0 ; indice<notas.length ; indice++){
        notaR = notas[indice];
        console.log("La posicion del caracter es: " + indice)
        console.log ("Y el valor del caracter de esa posicion es:" + notaR);
    }
    console.log("Tienes una longitud recorrida de: " + notas.length)
}

ejecutarPromedio = function(){
    let promediar = calcularPromedio();
    mostrarTexto("lblPromedio",promediar);
}
calcularPromedio = function(){
    let notaA;
    let sumaNotas = 0;
    let promedio; 

    for (let i = 0 ; i<notas.length ; i++){
        notaA = notas[i];
        sumaNotas += notaA;
    }

    promedio = (sumaNotas / notas.length);

return promedio
}


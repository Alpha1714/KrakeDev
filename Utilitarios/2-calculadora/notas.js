calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("error");
        existeError = true;
    }
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        alert("error");
        existeError = true;
    }

    nota3 = recuperarFloat("txtNota3");
    if (isNaN(nota3)) {
        alert("error");
        existeError = true;
    }
    if (existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }






}

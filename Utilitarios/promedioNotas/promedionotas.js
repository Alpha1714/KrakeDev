calcularPromedioNotas=function(){
    let promedio;
    let n1;
    let n2;
    let n3;
    n1=recuperarFloat("nota1");
    n2=recuperarFloat("nota2");
    n3=recuperarFloat("nota3");
    promedio=calcularPromedio(n1,n2,n3);
    mostrarTexto("resultado",promedio.toFixed(2));
    if(promedio<5&&promedio>=0){
        mostrarTexto("mensaje","REPROBADO");
        cambiarImagen("imgResul","reprobada-donramon.gif");
    }else if(promedio>=5&&promedio<=8){
        mostrarTexto("mensaje","BUEN TRABAJO");
        cambiarImagen("imgResul","buen_trabajo.gif");
    }else if(promedio>8&&promedio<=10){
        mostrarTexto("mensaje","EXCELENTE");
        cambiarImagen("imgResul","exelente.gif");
    }else if(promedio>10){
        mostrarTexto("mensaje","DATOS ERRONEOS");
        cambiarImagen("imgResul","datos_erroneos.gif");
    }  

}

limpiarNotas=function(){
    mostrarTextoEnCaja("nota1","");
    mostrarTextoEnCaja("nota2","");
    mostrarTextoEnCaja("nota3","");
    mostrarTexto("resultado","0.0");
    mostrarTexto("mensaje","");
    cambiarImagen("imgResul","");
}
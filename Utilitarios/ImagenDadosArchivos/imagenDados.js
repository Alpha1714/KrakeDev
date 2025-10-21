let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarlanzamientos(resultado);
   
}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}

mostrarCara=function(valorDado){
    if(valorDado==1){
        cambiarImagen("imgdado","dados1.png");
    }else if(valorDado==2){
        cambiarImagen("imgdado","dados2.png");
    }else if(valorDado==3){
        cambiarImagen("imgdado","dados3.png");
    }else if(valorDado==4){
        cambiarImagen("imgdado","dados4.png");
    }else if(valorDado==5){
        cambiarImagen("imgdado","dados5.png");
    }else if(valorDado==6){
        cambiarImagen("imgdado","dados6.png");
    }
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("puntos",puntos);
}


modificarlanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lanzamientos",lanzamientos);
    if(lanzamientos==0){
            cambiarTexto("resultado","GAME OVER");
            if(puntos>=20){
                cambiarTexto("resultado","GANASTE");

               
            }else{
                cambiarTexto("resultado","PERDISTE");
            }
    }
}

limpiar=function(){
    puntos=0;
    lanzamientos=5;
    cambiarTexto("puntos",puntos);
    cambiarTexto("lanzamientos",lanzamientos);
    cambiarTexto("resultado","");
    cambiarImagen("imgdado","");
    console.log("Pantalla limpia");
}
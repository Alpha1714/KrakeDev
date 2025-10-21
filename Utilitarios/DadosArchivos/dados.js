jugar=function(){
    let aleatorios;
    aleatorios=lanzadDado();
    cambiarTexto("lblNumero",aleatorios);
    if(aleatorios>3){
        cambiarTexto("lblTexto","es mayor que 3");
        cambiarTexto("lblMensaje"," ganaste");
    }else{
        cambiarTexto("lblTexto","es menor o igual que 3");
        cambiarTexto("lblMensaje"," perdiste");
    }
}

lanzadDado=function(){
    let aleatorio;
    let numeroMult;
    aleatorio=Math.random();
    numeroMult=parseInt(aleatorio*6)+1;
    cambiarTexto("lblNumero",""+numeroMult);
    return numeroMult;
}
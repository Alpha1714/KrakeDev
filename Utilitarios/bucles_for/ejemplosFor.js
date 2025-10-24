mostrarNumeros = function(){
    console.log("Antes del for");
for (let i=0;i<4;i++){
    console.log(i);
}
    console.log("Despues del for");
}

mostrarNumeros2 = function(){
    console.log("Antes del for");
for (let indice=1;indice<=5;indice++){
    console.log(indice);
}
    console.log("Despues del for");
}

mostrarPares = function(){
    console.log("Antes del for");
for(let x=2; x<=10 ; x+=2){
    console.log(x)
}
    console.log("Despues del for");
}

mostrarInverso = function(){
    console.log("Antes del for");
for(let i=10 ; i>=0 ; i--){
    console.log(i)
}
    console.log("Despues del for");
}

mostrarNasa = function(){
    for(let i=0 ; i<=100 ; i+=10){
        console.log("Hackeanado en " + i + "%")
    }
       console.log(" Ha sido hackeada") 
}

mostrarImpares = function(){
    console.log("Antes del for");
    for(i=1 ; i<=21 ; i+=2){
        console.log(i)
    }
    console.log("Despues del for");
}
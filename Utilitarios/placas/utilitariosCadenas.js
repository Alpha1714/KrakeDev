esMayuscula = function(caracter){
    if (caracter.charCodeAt() >= 65 && caracter.charCodeAt() <= 90){
        return true;
    } else {
        return false;
    }
}

esDigito = function(caracter){
    if (caracter.charCodeAt()>=48 && caracter.charCodeAt()<=57){
        return true;
    } else {
        return false;
    }
}

esGuion = function(caracter){
    if (caracter.charCodeAt()== 45){
        return true;
    } else {
        return false;
    }
}

esMayuscula2 = function(caracter){
    if (caracter >= 65 && caracter <=90){
        return true;
    } else {
        return false;
    }
}

esDigito2 = function(caracter){
    if (caracter >=48 && caracter <=57){
        return true;
    } else {
        return false;
    }
}

esGuion2 = function(caracter){
    if (caracter.charCodeAt()== 45){
        return true;
    } else {
        return false;
    }
}
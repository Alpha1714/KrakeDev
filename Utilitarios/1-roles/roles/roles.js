let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarAlGuardar();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    deshabilitarComponente("btnCalcular");
    // mostrarRoles();

}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
}

mostrarEmpleados = function () {

    let cmpTabla = document.getElementById("tablaEmpleados");
    let encabezado = "<tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>"
    let tabla = `<table class="tabla-empleados">` + encabezado;
    let elemento;

    for (let i = 0; i < empleados.length; i++) {
        elemento = empleados[i];
        tabla += "<tr>"
        tabla += "<td>" + elemento.cedula + "</td>"
        tabla += "<td>" + elemento.nombre + "</td>"
        tabla += "<td>" + elemento.apellido + "</td>"
        tabla += "<td>" + elemento.sueldo + "</td>"
        tabla += "</tr>"
    }

    tabla += "</table>"
    cmpTabla.innerHTML = tabla;

}

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    console.log(esNuevo);
}

buscarEmpleado = function(cedula){

let objeto;
let clienteEncontrado = null;

    for ( let i=0; i<empleados.length ; i++){
        objeto = empleados[i];
        
        if(objeto.cedula == cedula){
            clienteEncontrado = objeto;
            break;
        }
    }
    return clienteEncontrado;
}

agregarEmpleado = function(empleado){

let empleadoNuevo = buscarEmpleado(empleado.cedula);
    if (empleadoNuevo == null){
        empleados.push(empleado);
       // alert("Cliente Nuevo Agregado.");
        return true;
    } else {
     //   alert("El cliente con numero de cedula: " + empleadoNuevo.cedula + " ya se encuentra en la nomina")
        return false;
    }
}

guardar = function(){

let cedula = recuperarTexto("txtCedula");
let nombre = recuperarTexto("txtNombre");
let apellido = recuperarTexto("txtApellido");
let sueldo = recuperarFloat("txtSueldo");

let evaluarCedula = true;
let evaluarNombre = true;
let evaluarApellido = true;
let evaluarSueldo = true;

if ( isNaN(sueldo) || sueldo<400 || sueldo>5000){
    mostrarTexto("lblErrorSueldo","El Sueldo es obligatorio y debe ser un valor entre 400 y 5000");
    evaluarSueldo = false; 
} else {
    evaluarSueldo = true;
    mostrarTexto("lblErrorSueldo","");
}


if (apellido == "" || apellido.length < 3){
    mostrarTexto("lblErrorApellido","El Apellido es obligatorio y debe tener al menos 3 letras");
    evaluarApellido = false; 
} else {
    for(let i=0 ; i<apellido.length ; i++){
        let caracter = apellido.charAt(i);
        
        if(esMayuscula(caracter) == false){
            mostrarTexto("lblErrorApellido","Solo se permiten Letras Mayusculas");
            evaluarApellido = false;
            break;
        }
    }

    if (evaluarApellido == true){
        mostrarTexto("lblErrorApellido","")
    }
}

if (nombre == "" || nombre.length < 3){
    mostrarTexto("lblErrorNombre","El nombre es obligatorio y debe tener al menos 3 letras");
    evaluarNombre = false; 
} else {
    for(let i=0 ; i<nombre.length ; i++){
        let caracter = nombre.charAt(i);
        
        if(esMayuscula(caracter) == false){
            mostrarTexto("lblErrorNombre","Solo se permiten Letras Mayusculas");
            evaluarNombre = false;
            break;
        }
    }

    if (evaluarNombre == true){
        mostrarTexto("lblErrorNombre","")
    }
}

if (cedula == "" || (cedula.length < 10 || cedula.length > 11)){
    mostrarTexto("lblErrorCedula","El numero de Cedula es obligatorio y debe tener 10 Digitos");
    evaluarCedula = false; 
} else {
    for(let i=0 ; i<cedula.length ; i++){
        let caracter = cedula.charAt(i);
        
        if(esDigito(caracter) == false){
            mostrarTexto("lblErrorCedula","Solo se permiten numeros");
            evaluarCedula = false;
            break;
        }
    }

    if (evaluarCedula == true){
        mostrarTexto("lblErrorCedula","")
    }
}

// Si todo esta correcto estara true y se procede a continuar que es agregar un nuevo objeto al arreglo:

    if (evaluarCedula & evaluarNombre & evaluarApellido & evaluarSueldo){

        if(esNuevo == true){

            let clienteNuevo = {cedula,nombre,apellido,sueldo};
            let agregoCliente = agregarEmpleado(clienteNuevo);

            if(agregoCliente == true){
                alert("Empleado Guardado Correctamente");
                mostrarEmpleados();
                // Si guarda correctamente deshabilitar las cajas de texto y el boton guardar:
                deshabilitarAlGuardar();
                // Parte del reto 48: cambiar a false la variable esNuevo cuando se guarda un empleado nuevo.
                esNuevo = false;
                mostrarTextoEnCaja("txtCedula","");
                mostrarTextoEnCaja("txtNombre","");
                mostrarTextoEnCaja("txtApellido", "");
                mostrarTextoEnCaja("txtSueldo","");
                mostrarTextoEnCaja("txtBusquedaCedula","");
                
            } else {
            alert("Ya existe un empleado con  el numero de cedula :" + cedula);
            }

        } else {

            let empleadoEncontrado = buscarEmpleado(cedula);

             if (empleadoEncontrado != null) {
                empleadoEncontrado.nombre = nombre;
                empleadoEncontrado.apellido = apellido;
                empleadoEncontrado.sueldo = sueldo;

                alert("Empleado modificado exitosamente");
                mostrarEmpleados();
                deshabilitarAlGuardar();
                mostrarTextoEnCaja("txtCedula","");
                mostrarTextoEnCaja("txtNombre","");
                mostrarTextoEnCaja("txtApellido", "");
                mostrarTextoEnCaja("txtSueldo","");
                mostrarTextoEnCaja("txtBusquedaCedula","");
            } else {
                alert("Error: el empleado no existe");
            }
        }
    }
} 

deshabilitarAlGuardar = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda =  function(){
   
    let busquedadCedula = recuperarTexto("txtBusquedaCedula");
    let empleadoBuscado = buscarEmpleado(busquedadCedula);;

    if (empleadoBuscado == null ){
        alert("Empleado No Existe")
        mostrarTextoEnCaja("txtCedula","");
        mostrarTextoEnCaja("txtNombre","");
        mostrarTextoEnCaja("txtApellido", "");
        mostrarTextoEnCaja("txtSueldo","");
    } else {
        mostrarTextoEnCaja("txtCedula",empleadoBuscado.cedula);
        mostrarTextoEnCaja("txtNombre",empleadoBuscado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoBuscado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleadoBuscado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        esNuevo = false;
    }

}

limpiar =  function(){
    esNuevo = false;
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo","");
    mostrarTextoEnCaja("txtBusquedaCedula","");
    deshabilitarComponente("btnGuardar");
}

buscarRol = function(cedula){
let objeto;
let empleadoEncontrado2 = null;

    for (let i=0 ; i<roles.length ; i++){
        objeto = roles[i];

        if(objeto.cedula == cedula){
            empleadoEncontrado2 = objeto;
            break;
        }
    }
    return empleadoEncontrado2;
}

calcularAporteEmpleado =  function(sueldo){
let aporteEmpleado =  sueldo * 0.0945
return aporteEmpleado;
}

calcularValorAPagar = function(sueldo,aporte,descuento){
let pagarEmpleado =  sueldo - aporte - descuento;
return pagarEmpleado;
}

calcularRol = function(){
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuentos = recuperarFloat("txtDescuentos");

    if (isNaN(sueldo) || sueldo< 0 ){
        alert("Sueldo Incorrecto");
        return;
    } else if (isNaN(descuentos)){
        alert ("El valor de descuento debe ser un numero")
        return;
    } else {
        let aporteEmpleado = calcularAporteEmpleado(sueldo);
        mostrarTextoDiv("infoIESS",aporteEmpleado);
        let valorAPagar = calcularValorAPagar(sueldo,aporteEmpleado,descuentos);
        mostrarTextoDiv("infoPago",valorAPagar);
        habilitarComponente("btnGuardarRol");
    } 
}

let esNuevo = false;
let roles = []


mostrarTotales = function(){

    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i=0;i<roles.length;i++){
        let objeto = roles[i];

        totalEmpleado += objeto.aporteEmpleado;
        totalEmpleador += objeto.aporteEmpleador;
        totalAPagar += objeto.valorAPagar;
    }
    mostrarTextoDiv("infoAporteEmpleado", totalEmpleado.toFixed(2));
    mostrarTextoDiv("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTextoDiv("infoTotalPago", totalAPagar.toFixed(2));
    let totalNomina =  (totalEmpleado + totalEmpleador + totalAPagar)
    mostrarTextoDiv("infoTotalNomina", totalNomina.toFixed(2));
}



mostrarRoles = function(){

    let tabla;

    let cmpTabla = document.getElementById("tablaResumen");
    let encabezado = "<tr><th>CEDULA</th><th>NOMBRE</th><th>VALOR A PAGAR </th><th>APORTE EMPLEADO</th><th>APORTE EMPLEADOR</th></tr>"
    tabla = `<table class="tabla-empleados">` + encabezado;
        for(let i=0;i<roles.length;i++){
            let objeto = roles[i];

            tabla+= "<tr>"
            tabla+= "<td>" + objeto.cedula+ "</td>"
            tabla+= "<td>" + objeto.nombre+ "</td>"
            tabla+= "<td>" + objeto.valorAPagar.toFixed(2)+ "</td>"
            tabla+= "<td>" + objeto.aporteEmpleado.toFixed(2)+ "</td>"
            tabla+= "<td>" + objeto.aporteEmpleador.toFixed(2)+ "</td>"
            tabla+="</tr>"
        }

    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
}



guardarRol = function(){
   
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let valorAporteEmpleador = calcularAporteEmpleador(sueldo);

    rol = {};
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.valorAPagar = valorAPagar;
    rol.aporteEmpleado = aporteEmpleado;
    rol.aporteEmpleador = valorAporteEmpleador;

    agregarRol(rol);

    habilitarComponente("btnBuscar");
    deshabilitarComponente("btnGuardarRol");
    deshabilitarComponente("btnCalcular");
    mostrarTextoEnCaja("txtBusquedaCedulaRol","");
    mostrarTextoDiv("infoCedula","");
    mostrarTextoDiv("infoNombre","");
    mostrarTextoDiv("infoSueldo","");
    mostrarTextoEnCaja("txtDescuentos",0)
    mostrarTextoDiv("infoIESS","0.0");
    mostrarTextoDiv("infoPago","0.0");
}




calcularAporteEmpleador = function(sueldo){
    let valorEmpleadorIess = (sueldo * 0.1115);
    return valorEmpleadorIess;
}



agregarRol = function(rol){
    let rolExistente = buscarRol(rol.cedula);

    if (rolExistente == null) {
        roles.push(rol);
        alert("Rol agregado exitosamente para la cedula: " + rol.cedula);
    } else {
        alert("Ya existe un rol para la cedula: " + rol.cedula);
    }
}

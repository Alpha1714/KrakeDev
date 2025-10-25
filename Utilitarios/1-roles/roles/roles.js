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
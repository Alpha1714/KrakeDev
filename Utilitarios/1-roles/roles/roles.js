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
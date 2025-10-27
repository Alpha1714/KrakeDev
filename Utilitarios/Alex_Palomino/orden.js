let personas = [
{ nombre: "Marcos", edad: 18 },
{ nombre: "Roberto", edad: 15 },
{ nombre: "Kate", edad: 25 },
{ nombre: "Diana", edad: 12 },
{ nombre: "Benja", edad: 5 }
]

determinarMenor = function () {
    let menor = encontrarMenor();
    alert("La persona con mayor edad es: " + menor.nombre + " con edad: " + menor.edad)
}

encontrarMenor = function () {
    let personaMenor = personas[0];
    let elementoPersona;

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Se interactua con: " + elementoPersona.nombre + " con edad: " + elementoPersona.edad +
            " y compara con: " + personaMenor.nombre + " con edad " + personaMenor.edad);
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }
    return personaMenor;
}


determinarMayor = function () {
    let mayor = encontrarMayor();
    alert("La persona con mayor edad es: " + mayor.nombre + " con edad: " + mayor.edad)
}

encontrarMayor = function () {

    let personaMayor = personas[0];
    let elementoPersona;

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Se interactua con: " + elementoPersona.nombre + " con edad: " + elementoPersona.edad +
            " y compara con: " + personaMayor.nombre + " con edad " + personaMayor.edad);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}


mostrarPersonas = function () {

    let cmpTabla = document.getElementById("tablaPersonas");
    let encabezado = "<tr><th>EDAD</th><th>NOMBRE</th></tr>"
    let tabla = `<table class="tabla-empleados">` + encabezado;
    let elemento;

    for (let i = 0; i < personas.length; i++) {
        elemento = personas[i];
        tabla += "<tr>"
        tabla += "<td>" + elemento.edad + "</td>"
        tabla += "<td>" + elemento.nombre + "</td>"
        tabla += "</tr>"
    }

    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
}


agregarPersona = function () {

    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");
    let error;

    if (nombre.length < 3) {
        mostrarTextoDiv("lblErrorNombre", "El nombre debe tener al menos 3 carateres");
        return;
    } else if (isNaN(edad) || edad < 0 || edad > 100) {
        mostrarTextoDiv("lblErrorEdad", "La edad debe ser un numero entre 0 y 100");
        return;
    } else {
        let nuevaPersona = [];
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;

        personas.push(nuevaPersona);
        alert("Persona Agregada Correctamente");
        mostrarPersonas();

    }
}
let clientes = [
    {nombre: "Edison", cedula:1727389617, genero: "Masculino", edad:20},
    {nombre: "Kevin", cedula:1725361789, genero: "Masculino", edad:23},
    {nombre: "Maria Jose", cedula:1738907625, genero: "Femenino", edad:30},
    {nombre: "Pero", cedula:178905425, genero: "Masculino", edad:29}]

generarCliente = function(){

let cmpTabla = document.getElementById("clienteTabla");
let encabezados = "<tr><th>Nombre</th><th>Cedula</th><th>Genero</th><th>Edad</th></tr>"
let tabla = "<table>" + encabezados
let elementos;

    for(let i=0 ; i<clientes.length ; i++){
        elementos = clientes[i];
        tabla+="<tr>"
        tabla+="<td>" + elementos.nombre + "</td>"
        tabla+="<td>" + elementos.cedula + "</td>"
        tabla+="<td>" + elementos.genero + "</td>"
        tabla+="<td>" + elementos.edad + "</td>"
        tabla+="</tr>"
    }
    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
}





buscarCliente = function(cedula){

let elemento;
let clienteEncontrado = null;

    for(let i=0 ; i<clientes.length ; i++){
        elemento = clientes[i];
        if(elemento.cedula == cedula){
            clienteEncontrado = elemento;
            break;
        }
    }
    return clienteEncontrado;
}



agregarCliente = function(cliente){

let resultado = buscarCliente(cliente.cedula);

    if (resultado == null){
        clientes.push(cliente);
        alert("Cliente agregado.")
        generarCliente();
    } else {
        alert ("El cliente con numero de cedula: " + cliente.cedula + " ya se encuentra en el listado")
    }

}


ejecutarAgregarCliente = function(){

let nombre = recuperarTexto("txtNombre");
let cedula = recuperarInt("txtCedula");
let genero = recuperarTexto("txtGenero");
let edad = recuperarInt("txtEdad");

let clienteNuevo = {nombre,cedula,genero,edad}

agregarCliente(clienteNuevo);


}



ejecutarBusquedad =  function(){

let cedulaIngresa =  recuperarInt("txtBusquedaCedula");
let resultadoBusquedad = buscarCliente(cedulaIngresa);

if (resultadoBusquedad == null){
    alert("Cliente No Encontrado")
} else {
    mostrarTextoEnCaja("txtNombre",resultadoBusquedad.nombre)
    mostrarTextoEnCaja("txtCedula",resultadoBusquedad.cedula)
    mostrarTextoEnCaja("txtGenero",resultadoBusquedad.genero)
    mostrarTextoEnCaja("txtEdad",resultadoBusquedad.edad)
}
}

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);

    if (clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.genero = cliente.genero;
        clienteEncontrado.edad = cliente.edad;
    }

}

guardarCambios = function(){

let nombre = recuperarTexto("txtNombre");
let cedula = recuperarInt("txtCedula");
let genero = recuperarTexto("txtGenero");
let edad = recuperarInt("txtEdad");

let clienteModificado = {nombre,cedula,genero,edad};
modificarCliente(clienteModificado);

generarCliente();

}
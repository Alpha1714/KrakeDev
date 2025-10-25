crearProducto = function() {
    let producto1 = {
        nombre: "Daytona Cafe Racer",
        precio: 1300.00,
        stock: 15
    };
    let producto2 = {
        nombre: "Dukare Bomber 250 4v",
        precio: 2500.00,
        stock: 10
    };

    console.log("Nombre del producto 1:", producto1.nombre);

    console.log("Precio del producto 2:", producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}
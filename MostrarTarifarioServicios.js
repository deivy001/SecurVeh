function mostrarTarifarioServicios(nombreCliente, apellidosCliente) {
    if (nombreCliente == undefined || apellidosCliente == undefined) {
        console.log("Error: Debe ingresar el nombre y apellidos del cliente");
        return;
    }
    
    console.log("--TARIFARIO--");
    console.log("Cliente: " + nombreCliente + " " + apellidosCliente);
    console.log("Fecha: " + new Date().toLocaleDateString());
    console.log("-------");
    console.log("Vehículos menores sin motor: S/. 3.00 x hora");
    console.log("Vehículos menores con motor: S/. 4.50 x hora");
    console.log("Vehículos menores 4 ejes: S/. 6.00 x hora");
    console.log("Vehículos mayores 4,6 ejes: S/. 10.00 x hora");
    console.log("---------");
}

// Exportar la función del módulo
module.exports = mostrarTarifarioServicios;
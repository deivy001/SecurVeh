// función principal que muestra el tarifario
function MostrarTarifarioServicios(nombreCliente, apellidoCliente) 
{
    // Validación de parámetros
    if (!nombreCliente || !apellidoCliente) {
        console.log("⚠️  Error: Debe ingresar nombre y apellido del cliente.");
        return;
    }

    // Validación que sean strings
    if (typeof nombreCliente !== 'string' || typeof apellidoCliente !== 'string') {
        console.log("⚠️  Error: El nombre y el apellido deben ser texto.");
        return;
    }

    // Mensaje de presentación
    console.log(`📋 Tarifario solicitado por: ${nombreCliente} ${apellidoCliente}\n`);
    console.log("🚗 TARIFARIO DE SERVICIOS DE GUARDIANÍA VEHICULAR:");
    console.log("-----------------------------------------------");
    console.log("1. Vehículos menores sin motor (bicicletas, triciclos): 3.00 soles x hora");
    console.log("2. Vehículos menores con motor (motos, mototaxis): 4.50 soles x hora");
    console.log("3. Vehículos menores 4 ejes (autos, camionetas): 6.00 soles x hora");
    console.log("4. Vehículos mayores 4 o 6 ejes (camiones, cisternas, trailers): 10.00 soles x hora");
}

// Exportar como módulo para usar desde otros archivos o probar en consola
module.exports = {
    moduloMostrarTarifarioServicios: MostrarTarifarioServicios
};




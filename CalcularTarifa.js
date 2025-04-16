function calcularTarifaBase(tipoVehiculo, horas) {
    let tarifaHora = 0;
    
    switch(tipoVehiculo) {
        case "menor sin motor":
            tarifaHora = 3;
            break;
        case "menor con motor":
            tarifaHora = 4.5;
            break;
        case "menor 4 ejes":
            tarifaHora = 6;
            break;
        case "mayor 4,6 ejes":
            tarifaHora = 10;
            break;
        default:
            tarifaHora = 0;
    }
    
    return tarifaHora * horas;
}
function clasificarVehiculo(tipoVehiculo) {
    switch (tipoVehiculo) {
        case "menor sin motor":
            return "Bicicletas y triciclos";
        case "menor con motor":
            return "Motos y mototaxis";
        case "menor 4 ejes":
            return "Autos y camionetas";
        case "mayor 4,6 ejes":
            return "Camiones, cisternas y trailers";
        default:
            return "Tipo de vehículo no reconocido";
    }
}
function calcularTarifa(nombreCliente, tipoVehiculo, marcaModelo, placa, horas) {

    if (nombreCliente == undefined || tipoVehiculo == undefined || 
        marcaModelo == undefined || placa == undefined || horas == undefined) {
        console.log("Error: Todos los campos son obligatorios");
        return;
    }
    
    if(typeof horas !== 'number') {
        console.log("Error: Las horas deben ser un número");
        return;
    }

    const subtotal = calcularTarifaBase(tipoVehiculo, horas);
    const igv = subtotal * 0.18;
    const total = subtotal + igv;
    const categoriaVehiculo = clasificarVehiculo(tipoVehiculo);

    console.log("-----DETALLE------");
    console.log("Cliente: " + nombreCliente);
    console.log("Vehículo: " + marcaModelo + " (Placa: " + placa + ")");
    console.log("Categoría: " + categoriaVehiculo);
    console.log("Horas de guardianía: " + horas);
    console.log("Tarifa por hora: S/. " + (subtotal/horas).toFixed(2));
    console.log("-----");
    console.log("Subtotal: S/. " + subtotal.toFixed(2));
    console.log("IGV (18%): S/. " + igv.toFixed(2));
    console.log("Total a pagar: S/. " + total.toFixed(2));
    console.log("----");
}
module.exports = calcularTarifa;
const mostrarTarifario = require('./MostrarTarifarioServicios.js');
const calcularTarifa = require('./CalcularTarifa.js');

const datosCliente = {
    nombre: "deivy",
    apellidos: "Sernaque benites", 
    vehiculo: {
        tipo: "menor 4 ejes",    
        marcaModelo: "NISSAN GT",
        placa: "M880"
    },
    horasGuardiania: 7
};


console.log("tarifario");
mostrarTarifario(datosCliente.nombre, datosCliente.apellidos);

console.log("Calculo");
calcularTarifa(
    datosCliente.nombre + " " + datosCliente.apellidos,
    datosCliente.vehiculo.tipo,
    datosCliente.vehiculo.marcaModelo,
    datosCliente.vehiculo.placa,
    datosCliente.horasGuardiania
);
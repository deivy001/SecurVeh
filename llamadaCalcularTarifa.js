const tarifa = require('./CalcularTarifa'); 

const CalcularTarifa = {

    marca: "TOYOTA",
    modelo: "YARIS",
    placa: "xh777",
    tipo: "Vehículo menor sin motor ",
    ejes: 4,
   
   };
   
   
   
   const cliente = {
   
    nombre: "Lucia Colan",
   
   };
   const horasServicio = 5;
   
   const tarifaCalculada = CalcularTarifa(vehiculo, cliente, horasServicio);
   
   
   if (tarifaCalculada.error) {
    console.error(tarifaCalculada.error);
   } else {
   
    console.log("--- Información de Tarifa ---");
    console.log("Cliente:", tarifaCalculada.cliente);
    console.log("Vehículo:", tarifaCalculada.vehiculo);
    console.log("Total Horas de Guardianía:", tarifaCalculada.horas_guardiania);
    console.log("Costo por Hora:", "S/ " + tarifaCalculada.costo_x_hora);
    console.log("Subtotal:", "S/ " + tarifaCalculada.subtotal);
    console.log("IGV (18%):", "S/ " + tarifaCalculada.igv);
    console.log("Total a Pagar (Incl. IGV):", "S/ " + tarifaCalculada.total);
   
   }

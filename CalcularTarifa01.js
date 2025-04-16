function CalcularTarifa(vehiculo, cliente, horasDeGuardiania) {
    // Definir las tarifas de cada vehículo
    const tarifasPorTipo = {
        "vehiculos menores sin motor": 3,
        "vehiculos menores con motor": 4.5,
        "vehiculos menores 4 ejes": 6,
        "vehiculos mayores 4,6 ejes": 10
    };

    // Buscar la tarifa de cada vehiculo
    const tarifaporHora = tarifaVehiculo[vehiculo.tipo];
    
    if (!tarifaBaseHora) {
        return {
            Error: "Debe ingresar la tarifa del vehiculo a consultar."
        };
    }

    // Calcular subtotal
    const subtotal = tarifaporHora * horasDeGuardiania;

    // Calcular IGV (
    const igv = subtotal * 0.18;

    // Calcular total
    const total = subtotal + igv;

    // Agregar infimacion del cliente , modelo
    return {
        cliente: cliente.nombre,
        vehiculo: `${vehiculo.marca} ${vehiculo.modelo} (Placa: ${vehiculo.placa})`,
        horas_de_guardiania: horasDeGuardiania,
        costo_por_hora: tarifaBporHora.toFixed(2),
        subtotal: subtotal.toFixed(2),
        igv: igv.toFixed(2),
        total: total.toFixed(2)
    };
}

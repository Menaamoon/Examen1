document.addEventListener('DOMContentLoaded', () => {
    // Simulación de datos de sensores y configuraciones de ahorro
    const datosSensores = [
        { tipo: 'Temperatura', valor: '23°C', fechaHora: '2024-06-17 14:00' },
        { tipo: 'Humedad', valor: '45%', fechaHora: '2024-06-17 14:05' }
    ];

    const datosConfiguracion = [
        { modo: 'Ahorro Máximo', horaInicio: '22:00', horaFin: '06:00' }
    ];

    const contenedorDatosSensores = document.getElementById('contenido-datos-sensores');
    datosSensores.forEach(dato => {
        const div = document.createElement('div');
        div.textContent = `${dato.tipo}: ${dato.valor} (Fecha y Hora: ${dato.fechaHora})`;
        contenedorDatosSensores.appendChild(div);
    });

    const contenedorDatosConfiguracion = document.getElementById('contenido-configuracion-ahorro');
    datosConfiguracion.forEach(dato => {
        const div = document.createElement('div');
        div.textContent = `Modo: ${dato.modo} (Inicio: ${dato.horaInicio} - Fin: ${dato.horaFin})`;
        contenedorDatosConfiguracion.appendChild(div);
    });
});

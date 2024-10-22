import { mostrarAyuda, mostrarError } from "./mensajes.js";

function obtenerTipoAlquiler() {
    const tipoAlquiler = process.argv[2];
    
    if (tipoAlquiler === '-h' || tipoAlquiler === '--help') {
        mostrarAyuda();
        process.exit(0);
    }
    else if (!tipoAlquiler) {
        mostrarError(
            'Por favor, ingresa un tipo de alquiler. ' +
            'Usa "h" para horas o "k" para kilómetros'
        );
    }
    else if (tipoAlquiler !== 'h' && tipoAlquiler !== 'k') {
        mostrarError(
            `El tipo de alquiler "${tipoAlquiler}" es inválido. ` +
            'Usa "h" para horas o "k" para kilómetros.'
        );
    }

    return tipoAlquiler;
}

function obtenerCantidad() {
    const cantidad = process.argv[3];

    if (!cantidad) {
        mostrarError(
            'Por favor, ingresa la cantidad de horas/kilómetros del alquiler.'
        );
    }
    else if(isNaN(cantidad) || parseFloat(cantidad) <= 0) {
        mostrarError(
            `La cantidad de horas/kilómetros "${cantidad}" del ` +
            'alquiler es inválida. Por favor, ingresa un número positivo.'
        );
    }

    return parseFloat(cantidad);
}

export {
    obtenerTipoAlquiler,
    obtenerCantidad
};
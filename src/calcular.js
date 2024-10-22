const PRECIO_HORA = 99;
const PRECIO_BASE_KM = 100;
const PRECIO_POR_KM = 10;
const PORCENTAJE_GANANCIA = 0.45;

function calcularImporte(tipoAlquiler, cantidad) {
    if (tipoAlquiler === 'h') {
        return cantidad * PRECIO_HORA;
    } else if (tipoAlquiler === 'k') {
        return PRECIO_BASE_KM + (cantidad * PRECIO_POR_KM);
    } else {
        throw new Error(
            `El tipo de alquiler ${tipo} es inválido.` +
            'Usa "h" para horas o "k" para kilómetros.'
        );
    }
}

function calcularGanancia(importe) {
    return importe * PORCENTAJE_GANANCIA;
}

export {
    calcularImporte,
    calcularGanancia
};
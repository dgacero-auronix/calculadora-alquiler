// Constantes para los precios
const PRECIO_HORA = 99;
const PRECIO_BASE_KM = 100;
const PRECIO_POR_KM = 10;
const PORCENTAJE_GANANCIA = 0.45;

const MENSAJE_AYUDA = 'Para más información, usa el comando: node app.js --help';

function mostrarError(mensaje) {
    console.error(mensaje);
    console.error(MENSAJE_AYUDA);
    process.exit(1);
}

// Función para calcular importe y ganancia
function calcularAlquiler(tipo, cantidad) {
    let importe = 0;

    if (tipo === 'h') {
        // Cálculo por hora
        importe = cantidad * PRECIO_HORA;
    } else if (tipo === 'k') {
        // Cálculo por kilómetros
        importe = PRECIO_BASE_KM + (cantidad * PRECIO_POR_KM);
    } else {
        mostrarError(
            `El tipo de alquiler ${tipo} es inválido.` +
            'Usa "h" para horas o "k" para kilómetros.'
        );
    }

    const ganancia = importe * PORCENTAJE_GANANCIA;
    return { importe, ganancia };
}

// Función para mostrar el mensaje de ayuda
function mostrarAyuda() {
    console.log('Uso: node app.js <tipo_alquiler> <parametros_alquiler>\n');
    console.log('Tipos de alquiler:');
    console.log('  h <cantidad_horas>           Alquiler por horas');
    console.log('  k <cantidad_kilometros>      Alquiler por kilómetros\n');
    console.log('Ejemplo:');
    console.log('  node app.js h 2.5');
    console.log('  node app.js k 10');
}

function main() {
    // Obtenemos los argumentos de la línea de comandos
    const tipoAlquiler = process.argv[2];
    const parametrosAlquiler = process.argv[3];
    
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

    if (!parametrosAlquiler) {
        mostrarError(
            'Por favor, ingresa la cantidad de horas/kilómetros del alquiler.'
        );
    }
    else if(isNaN(parametrosAlquiler) || parseFloat(parametrosAlquiler) <= 0) {
        mostrarError(
            `La cantidad de horas/kilómetros "${parametrosAlquiler}" del ` +
            'alquiler es inválida. Por favor, ingresa un número positivo.'
        );
    }

    const cantidadHorasKilometros = parseFloat(parametrosAlquiler);

    const { importe, ganancia } = calcularAlquiler(tipoAlquiler, cantidadHorasKilometros);

    console.log(`Importe: ${importe.toFixed(1)} & Ganancia: ${ganancia.toFixed(1)}`);
}

main();
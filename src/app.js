import { obtenerTipoAlquiler, obtenerCantidad } from './input.js';
import { calcularImporte, calcularGanancia } from './calcular.js';

function main() {
    const tipoAlquiler = obtenerTipoAlquiler();
    const cantidad = obtenerCantidad();

    const importe = calcularImporte(tipoAlquiler, cantidad);
    const ganancia = calcularGanancia(importe);

    console.log(`Importe: ${importe.toFixed(1)} & Ganancia: ${ganancia.toFixed(1)}`);
}

main();
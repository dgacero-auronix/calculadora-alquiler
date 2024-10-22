function mostrarAyuda() {
    console.log('Uso: node app.js <tipo_alquiler> <cantidad>\n');
    console.log('Tipos de alquiler:');
    console.log('  h <cantidad>         Alquiler por horas');
    console.log('  k <cantidad>         Alquiler por kilómetros\n');
    console.log('Ejemplo:');
    console.log('  node app.js h 2.5');
    console.log('  node app.js k 10');
}

function mostrarError(mensaje) {
    console.error(mensaje);
    console.error('Para más información, usa el comando: node app.js --help');
    process.exit(1);
}

export {
    mostrarAyuda,
    mostrarError
};

# Aplicación de Cálculo de Alquiler

## Descripción

Esta aplicación calcula el importe y la ganancia de un alquiler basado en dos tipos:

- Por horas (`h`): El cliente paga \$99 por cada hora de alquiler.
- Por kilómetros (`k`): El cliente paga un precio fijo de \$100 más \$10 por cada kilómetro recorrido.

El programa también calcula la ganancia, que es el 45% del importe total facturado.

## Uso

```bash
node app.js <tipo_alquiler> <cantidad>
```

Donde:

- `<tipo_alquiler>` puede ser `h` (por horas) o `k` (por kilómetros).
- `<cantidad>` es el número de horas o kilómetros.

## Ejemplos

- Alquiler por 3 horas:

```bash
node app.js h 3
# Salida esperada:
# Importe: 297.0 & Ganancia: 133.7
```

- Alquiler por 15 kilómetros:

```bash
node app.js k 15
# Salida esperada:
# Importe: 250.0 & Ganancia: 112.5
```
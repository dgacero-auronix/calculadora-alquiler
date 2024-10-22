#!/bin/bash

output=$(node src/app.js h 3)
expected_output="Importe: 297.0 & Ganancia: 133.7"
if [ "$output" == "$expected_output" ]; then
    echo "Test 1 Passed: Alquiler por horas (3 horas)"
else
    echo "Test 1 Failed: Expected '$expected_output', but got '$output'"
fi

output=$(node src/app.js k 15)
expected_output="Importe: 250.0 & Ganancia: 112.5"
if [ "$output" == "$expected_output" ]; then
    echo "Test 2 Passed: Alquiler por kilómetros (15 kilómetros)"
else
    echo "Test 2 Failed: Expected '$expected_output', but got '$output'"
fi
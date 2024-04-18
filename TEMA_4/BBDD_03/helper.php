<?php


function validar_dni(string $dni): bool
{
    $resultado = false;

    // Verifica la longitud de la cadena y que el último carácter sea una letra
    if (mb_strlen($dni) === 9) {
        // Obtiene los primeros 8 caracteres que deben ser dígitos
        $digitosDNI = intval(substr($dni, 0, 8));

        // Obtiene la letra que debe ser el último carácter
        $letraDNI = strtoupper(substr($dni, -1));

        $letrasValidasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        $resto = $digitosDNI % 23;

        $letraCorrecta = $letrasValidasDNI[$resto];

        // Compara la letra proporcionada con la letra calculada
        if ($letraCorrecta === $letraDNI) {
            $resultado = true;
        }
    }

    return $resultado;
}

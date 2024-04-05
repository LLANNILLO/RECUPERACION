<?php

namespace Contrasenas\PHP\Classes;

use Hackzilla\PasswordGenerator\Generator\ComputerPasswordGenerator;

class GeneradorPassword
{

    public static function generarPassword(bool $mayusculas, bool $minusculas, bool $numeros, bool $simbolos, int $cantidadContrasenas = 1) : array{

        $generador = new ComputerPasswordGenerator();

        $generador
        ->setUppercase($mayusculas)
        ->setLowercase($minusculas)
        ->setNumbers($numeros)
        ->setSymbols($simbolos);

        $contrasenaGenerada = $generador->generatePasswords($cantidadContrasenas);

        return $contrasenaGenerada;
    }
}

?>
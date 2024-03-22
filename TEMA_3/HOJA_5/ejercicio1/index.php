<?php

declare(strict_types=1);

namespace ejercicio1;

include 'PHP/Classes/Empleado.php';
include 'PHP/Classes/Encargado.php';

use PHP\Classes\Empleado;
use PHP\Classes\Encargado;

$salario = 1500;
$empleado = new Empleado("Ricardo Varna", $salario);
$encargado = new Encargado("Moises Pomaleto", $salario);


echo ("El sueldo de {$empleado->getNombre()} es de {$empleado->getSalario()}<br>");
echo ("El sueldo de {$encargado->getNombre()} es de {$encargado->getSalario()}");

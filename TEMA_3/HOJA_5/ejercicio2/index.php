<?php

include("PHP/Classes/Cuenta.php");
include("PHP/Classes/CuentaAhorro.php");
include("PHP/Classes/CuentaCorriente.php");

use PHP\Classes\CuentaCorriente;
use PHP\Classes\CuentaAhorro;

$cuentaCorriente = new CuentaCorriente("12345", "Juan Pérez", 1000, 10);
$cuentaAhorro = new CuentaAhorro("54321", "María López", 2000, 20, 5);

echo ($cuentaCorriente->mostrar());
$cuentaCorriente->reintegro(15);
echo ($cuentaCorriente->mostrar());

echo ($cuentaAhorro->mostrar());
$cuentaAhorro->aplicaInteres();
echo ($cuentaAhorro->mostrar());

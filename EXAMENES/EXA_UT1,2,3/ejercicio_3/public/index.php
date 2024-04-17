<?php

require_once __DIR__ ."/../vendor/autoload.php";



use Ejercicio3\Classes\Bombilla;
use Ejercicio3\Classes\Coche;

function enciende_algo(Bombilla|Coche $objeto){
    $objeto->encender();
}

$bombilla = new Bombilla(3);
$coche = new Coche();

echo "<h1>Ejemplo del Objeto Bombilla</h1>";
enciende_algo($bombilla);
$bombilla->apagar();
enciende_algo($bombilla);
$bombilla->apagar();
enciende_algo($bombilla);

echo "<h1>Ejemplo del Objeto Bombilla</h1>";
echo "<h2>intentar encender el coche sin gasolina</h2>";
enciende_algo($coche);

$coche->repostar(10);

//ahora que tiene gasolina, pobremos el método
enciende_algo($coche);
// pobremos ha encenderlo una segunda vez sin apagarle
enciende_algo($coche);
$coche->apagar();

/*
ahora probemos a gastar toda su batería y gasolina hasta que nos quedemos
a 0
*/
enciende_algo($coche);
$coche->apagar();
enciende_algo($coche);
$coche->apagar();
enciende_algo($coche);
$coche->apagar();
enciende_algo($coche);
$coche->apagar();
enciende_algo($coche);
$coche->apagar();
enciende_algo($coche);
$coche->apagar();
enciende_algo($coche);
$coche->apagar();
enciende_algo($coche);

?>
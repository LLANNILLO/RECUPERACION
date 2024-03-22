<?php


namespace ejercicio4;

include "PHP/Classes/Productos.php";
include "PHP/Classes/Electronica.php";
include "PHP/Classes/Alimentacion.php";

use DateTime;
use PHP\Classes\Alimentacion;
use PHP\Classes\Electronica;



$productos = array(
    new Electronica("123456789",120.50,"TermoMix",new DateTime('2025-12-05')),
    new Alimentacion("234567890",120.50,"Aguacates de Lujo",12,2027),
    new Electronica("345678901",7,"Cepillo Electrico", new DateTime('2026-05-20')),
    new Alimentacion("456789012",3.99,"Tomates",10,9)
);




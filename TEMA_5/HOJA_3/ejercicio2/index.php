<?php


session_start();

$momento = new DateTime();

//$_SESSION['visitas'] = ['momento_visita'][$momento];

foreach($_SESSION['visitas'] as $momento){
        echo "HOLA";

}

?>
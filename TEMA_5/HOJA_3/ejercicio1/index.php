<?php

    session_start();

    if(isset($_SESSION['conexiones'])){
        $_SESSION['conexiones']++;
        $conexion = $_SESSION['conexiones'];
        echo "Bienvenido, es tu {$conexion} visita";
    }else{
        $_SESSION['conexiones'] = 1;
        echo 'Bienvenido, es tu primera visita';
    }


?>
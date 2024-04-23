<?php


session_start();

$momento = date('Y-m-d H:i:s');

if (!isset($_SESSION['visitas'])) {
        // Si no está definido, inicializar el array
        $_SESSION['visitas'] = array();
        echo ("Bienvenido, esta es tu primera visita $momento");
} else {

        $_SESSION['visitas'][] = $momento;

        foreach ($_SESSION['visitas'] as $visita_momento) {
                echo "<p>Hora de conexion: $visita_momento</p><hr />";
        }
}

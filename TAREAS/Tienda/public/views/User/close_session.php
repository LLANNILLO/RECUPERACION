<?php
require_once __DIR__ . "/../../../vendor/autoload.php";
session_start();


if (isset($_SESSION['usuario'])) {
    session_destroy();
}

redireccionar('./../index.php?session_destroy=true');

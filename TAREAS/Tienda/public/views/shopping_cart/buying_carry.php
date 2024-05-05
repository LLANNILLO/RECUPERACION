<?php

require_once __DIR__ . "/../../../vendor/autoload.php";
session_start();
if (isset($_SESSION['usuario'])) {
    unset($_SESSION['cesta']);
    redireccionar('./../index.php');
} else {
    $_SESSION['compra_pendiente'] = true;
    redireccionar('./../User/login.php');
}

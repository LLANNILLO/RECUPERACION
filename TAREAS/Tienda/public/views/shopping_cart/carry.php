<?php
require_once __DIR__ . '/../../../vendor/autoload.php';

use Tienda\Classes\CestaCompra;

session_start();

// Verifica si se hizo clic en el botón "Añadir a la cesta"
if (isset($_POST['add_to_cart'])) {
    // Agrega el producto a la sesión de la cesta
    if (!isset($_SESSION['cesta'])) {
        $_SESSION['cesta'] = new CestaCompra();

        $_SESSION['cesta']->nuevo_articulo($_SESSION['product']->getId());
    } else {
        $_SESSION['cesta']->nuevo_articulo($_SESSION['product']->getId());
    }

    // Redirecciona de vuelta a la página principal o a donde sea necesario
    header('Location: ./../index.php');
    exit;
}

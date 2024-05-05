<?php
session_start();

// Verifica si se hizo clic en el botón "Añadir a la cesta"
if (isset($_POST['add_to_cart'])) {
    // Agrega el producto a la sesión de la cesta (este es solo un ejemplo, puedes ajustarlo según tus necesidades)
    if (!isset($_SESSION['cesta'])) {
        $_SESSION['cesta'] = [];
    }
    $_SESSION['cesta'][] = $_SESSION['product'];

    // Redirecciona de vuelta a la página principal o a donde sea necesario
    header('Location: ./../index.php');
    exit;
}

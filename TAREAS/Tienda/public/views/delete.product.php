<?php

require_once __DIR__ . ('/../../vendor/autoload.php');

use Tienda\Classes\BD_class\PDOProduct;
use Tienda\Classes\BD_class\Produ;


if (isset($_POST['id_product'])) {

    $produ = new Produ(new PDOProduct);
    $eliminado = $produ->delete($_POST['id_product']);

    if ($eliminado) {
        echo 'Se eliminó satisfactoriamente el producto';
        echo '<a href=./index.php>Volver</a>';
    } else {
        echo 'No se ha consegido eliminar el producto';
        echo '<a href=./index.php>Volver</a>';
    }
}

<?php

require_once __DIR__ . '/../../../vendor/autoload.php';


use Tienda\Classes\BD_class\PDOProduct;
use Tienda\Classes\BD_class\Produ;

session_start();



$PDOProduct = new PDOProduct;
$Produ = new Produ($PDOProduct);


function show_cart_content()
{

    if (isset($_SESSION['cesta'])) {

        $cesta = $_SESSION['cesta'];
        $resultado = '';
        foreach ($cesta as $product) {


            $resultado .= "
            <div class=added-item>
            <a href=./product.php?id_producto={$product->getId()}>
                <picture>
                    <img src=./..{$product->getImagen()}>
                </picture>
            </a>
            <div class=info>
                <span>{$product->getNombreProducto()}</span>
                <span>{$product->getPrecio()}€</span>
            </div>
        </div>
            ";
        }

        return $resultado;
    }
}
function value_cart_content(): int
{
    $resultado = 0;
    if (isset($_SESSION['cesta'])) {

        $cesta = $_SESSION['cesta'];
        foreach ($cesta as $product) {

            $resultado += $product->getPrecio();
        }
    }
    return $resultado;
}

$shopping_cart = show_cart_content();
$price_cart = value_cart_content();
?>

<header>


    <!-- Logo y titulo de la pagina -->
    <div class="logo">
        <a href="." title="VideoGame"> <img src="./../image/logo.png" alt=""> </a>
    </div>
    <!-- Buscador -->
    <div class="menu">
        <div class="options">

            <?php

            if (isset($_SESSION['usuario']) && $_SESSION['usuario']->getRol() === 'administrador') {
                echo  '<a href="./add_product.php">Añadir Producto</a>';
                echo '<a href="./products.php">Gestion Productos</a>';
            } else {
                echo  '<a href=".">Reservas</a>';
                echo '<a href=".">Proximas salidas</a>';
                echo '<a href=".">Trending</a>';
            }
            ?>



        </div>
        <div class="product_search start">
            <form action="">
                <span class="span_first">&#128269;</span>
                <input type="text" placeholder="Busqueda de producto">
            </form>
        </div>
    </div>

    <!-- Cesta usuario -->
    <div class="cesta_usuario">
        <div class="uno">
            <div>

                <img src="./../image/carrito_shape.png" alt="carrito">
                <!-- cesta visualizado -->

            </div>
        </div>
        <div class="dos">
            <?php
            if (!isset($_SESSION['usuario'])) {
                echo '<a href="./User/login.php"><img src="./../image/user_shape.png" alt="carrito"></a>';
            } else {
                echo '<a href="./User/close_session.php"><img src="./../image/user_shape.png" alt="carrito"></a>';
            }

            ?>

        </div>

    </div>
</header>
<section id="overlay"></section>
<section id="shoppingCart" class="shopping-cart">
    <div class="title">
        <h2>Cesta <span>(
                <?php
                if (isset($_SESSION['cesta'])) {
                    echo count($_SESSION['cesta']);
                } else {
                    echo 0;
                } ?> articulos)</span></h2>
        <div class="close">
            <div>&times;</div>
        </div>
    </div>

    <div class="item-list">
        <?php
        echo $shopping_cart;
        ?>
    </div>
    <div class="value-cart"><span>Valor de la cesta:</span> <span><?php echo $price_cart ?>€</span></div>
    <form action="./shopping_cart/buying_carry.php" method="post">
        <button <?php if (!isset($_SESSION['cesta'])) echo 'disabled'; ?> style="margin-bottom: 10px;padding-top: 20px; padding-bottom: 20px;" class="button" type="submit" name="add_to_cart">
            <h1>Comprar</h1>
        </button>
    </form>
</section>
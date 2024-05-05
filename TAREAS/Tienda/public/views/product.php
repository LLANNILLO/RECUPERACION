<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Producto</title>
    <link rel="stylesheet" href="./../Estilos/estilo.css">
    <script src="./../JS/header_options.js"></script>
</head>

<body>


    <?php
    require_once __DIR__ . '/partials/header.php';

    $id_producto = $_GET['id_producto'];


    $product = $Produ->list_by_id($id_producto);

    $url_imagen_view = $product->getImagen();

    $_SESSION['product'] = $product;

    ?>

    <main>

        <div class="highlight-week" style="background-image: url('./..<?php echo $url_imagen_view ?>'); filter:blur(3px);">
        </div>

        <section class="product-info">

            <div class="purchase-panel">
                <div class="presentation">
                    <picture class="banner">
                        <img src="./..<?php echo $url_imagen_view ?>" alt="">
                    </picture>
                </div>

                <div class="purchase">
                    <h1 class="title"> <?php echo $product->getNombreProducto() ?></h1>
                    <div class="text">
                        Precio: <?php echo $product->getPrecio() ?>€
                    </div>
                    <form action="./shopping_cart/carry.php" method="post">
                        <button style="border: 0px;" class="button" type="submit" name="add_to_cart">
                            <img style="background-color: var(--blue-button);" class="carrito" src="./../image/carrito_shape.png" alt="carrito"></img>
                            <h1>Añadir a la cesta</h1>
                        </button>
                    </form>
                </div>

            </div>
            <div class="purchase-separator"></div>

            <div class="details">
                <h1>Acerca de</h1>
                <p> <?php echo $product->getDescripcion() ?></p>
            </div>

        </section>
    </main>
    <?php

    require_once __DIR__ . '/partials/footer.php';

    ?>
</body>

</html>
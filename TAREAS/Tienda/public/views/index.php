<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="./../Estilos/estilo.css">
    <script src="./../JS/header_options.js"></script>


</head>

<body>
    <?php

    require_once __DIR__ . '/partials/header.php';

    $url_imagen_view = './../image/products/banner/manor_lords_1920.jpg';
    /* Funcion para mostrar todos los productos dentro de la BD */
    function show_products()
    {
        global $Produ;
        $products = $Produ->list_products();

        $show = '';
        foreach ($products as $product) {

            $show .= "
            <div class=item>
                <a href=./product.php?id_producto={$product->getId()}>
                    <picture><img src=./..{$product->getImagen()->getURL()}></picture>
                </a>
                <div class=information>
                    <div class=text>{$product->getNombreProducto()}</div>
                    <div class=price>{$product->getPrecio()}€</div>
                </div>
                <form action=./delete.product.php class=delete method=post>
                    <input type=hidden name=id_product value={$product->getId()}>
                    <input type=submit value=&times;>
                </form>
            </div>
            ";
        }

        return $show;
    }

    ?>

    <main>



        <div class="highlight-week">
            <div class="content">
                <span class="banner-title">Manor Lords</span>
                <div class="number">
                    <span class="discount">-48%</span>
                    <span class="price">25€</span>
                </div>
            </div>
        </div>
        <section class="products-container">
            <div class="headline-products">
                <h2>Productos</h2>
            </div>
            <div class="products">

                <?php
                echo show_products();
                ?>
            </div>
        </section>
        <section class="categories"></section>

    </main>

    <?php

    require_once __DIR__ . '/partials/footer.php';

    ?>
</body>

</html>
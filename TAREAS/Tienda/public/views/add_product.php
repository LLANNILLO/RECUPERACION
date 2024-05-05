<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add product</title>
    <link rel="stylesheet" href="./../Estilos/FormUser.css">
    <script src="./../JS/deleteMessage.js"></script>

</head>

<body>


    <?php

    require_once __DIR__ . ('/../../vendor/autoload.php');

    use Tienda\Classes\BD_class\PDOProduct;
    use Tienda\Classes\BD_class\Produ;
    use Tienda\Classes\Producto;

    $PDOProduct = new PDOProduct;
    $Produ = new Produ($PDOProduct);
    function getFamilias()
    {

        global $Produ;

        $familias = $Produ->getFamilies();
        return $familias;
    }


    $familias = getFamilias();

    function crear_producto()
    {
        global $Produ;
        $mensaje = '';
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Verificar si se hizo clic en el botón de registro de producto
            if (isset($_POST["new_product"])) {
                // Obtener datos del formulario
                $nombreProducto = $_POST["product_name"];
                $descripcion = $_POST["description"];
                $precio = $_POST["price"];
                $idFamilia = $_POST["family"];


                $valores = [
                    $nombreProducto,
                    $descripcion,
                    $precio,
                    $idFamilia,
                ];

                // Procesar la imagen
                if (isset($_FILES["image"]) && $_FILES["image"]["error"] == UPLOAD_ERR_OK) {
                    // Directorio donde se almacenarán las imágenes

                    $directorioDestino = "./../image/products/";
                    // Nombre del archivo
                    $nombreArchivo = $_FILES["image"]["name"];
                    //extension archivo
                    $extensionArchivo = substr($_FILES["image"]["type"], 6);
                    // Ruta temporal del archivo
                    $rutaTemporal = $_FILES["image"]["tmp_name"];

                    $imagen_nombre = substr($directorioDestino, 4) . $nombreArchivo;

                    if (validar_formato_imagen($extensionArchivo)) {
                        if (move_uploaded_file($rutaTemporal, $directorioDestino . $nombreArchivo)) {
                            array_push($valores, $imagen_nombre);
                            $existen_valores = true;

                            foreach ($valores as $valor) {
                                if (!validar_requerido($valor)) {
                                    $existen_valores = false;
                                }
                            }

                            if ($existen_valores) {
                                $producto = new Producto(0, $nombreProducto, $descripcion, intval($precio), $imagen_nombre, $idFamilia);
                                if ($Produ->create($producto)) {
                                    redireccionar('./../views/index.php');
                                } else {
                                    $mensaje = "No se consiguio crear el nuevo producto";
                                }
                            } else {
                                $mensaje  = "Rellene todos los campos";
                            }
                        } else {
                            // Error al mover el archivo
                            $mensaje =  "Hubo un error al cargar la imagen.";
                        }
                    } else {
                        $mensaje = "Solo se permiten archivos .jpeg";
                    }
                }
            }
            return $mensaje;
        }
    }
    ?>

    <main>
        <div class="centered">
            <header>
                <p class="header-title">Añadir Producto</p>
            </header>

            <?php
            $mensaje = crear_producto();
            if (!empty($mensaje)) {
                echo "
                <section id=\"mensajes\">
                <div class=\"cierre\">
                <img src=\"./../../image/X_shape.png\">
                </div>
                <p> $mensaje  </p>
            </section>
            ";
            }
            ?>
            <section>
                <form action="" method="post" enctype="multipart/form-data">

                    <label for="product_name">Nombre producto:</label>
                    <input type="text" name="product_name" id="productName">


                    <label for="description">Descripcion:</label>
                    <input type="text" name="description" id="description">

                    <label for="price">Precio:</label>
                    <input type="text" name="price" id="price">


                    <label for="family">Familia:</label>
                    <select name="family" id="family">
                        <?php
                        foreach ($familias as $familia) {
                            echo "<option value={$familia->getIdFamilia()}>{$familia->getNombreFamilia()}</opt>";
                        }
                        ?>

                    </select>
                    <label for="image">Imagen:</label>
                    <input type="file" name="image" id="image">

                    <input type="submit" value="Registrar producto" name="new_product">

                </form>
            </section>

        </div>
    </main>
</body>

</html>
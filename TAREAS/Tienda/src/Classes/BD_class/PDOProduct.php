<?php

namespace Tienda\Classes\BD_class;

use PDO;
use PDOException;
use Tienda\Classes\Familia;
use Tienda\Classes\Imagen;
use Tienda\Classes\Producto;
use Tienda\Interfaces\IntRepoProducto;

class PDOProduct implements IntRepoProducto
{

    //Revisar la creacion de productos (inserciones en la tabla imagen)
    public function create(Producto $producto): bool
    {
        $resultado = false;
        $imagen = $this->createImage($producto->getImagen()->getURL());

        if (!empty($imagen)) {
            $conexion = BaseDatos::getConnection();
            try {
                $consulta = $conexion->prepare('INSERT INTO productos(nombre_producto,descripcion,precio,imagen,familia) VALUES(:nombre,:descripcion,:precio,:imagen,:familia)');
                $valores = [
                    ':nombre' => $producto->getNombreProducto(),
                    ':descripcion' => $producto->getDescripcion(),
                    ':precio' => $producto->getPrecio(),
                    ':imagen' => $imagen,
                    ':familia' => $producto->getFamilia()->getIdFamilia(),
                ];

                $registro = $consulta->execute($valores);

                if ($registro) {
                    $conexion->commit();
                    $resultado = true;
                }
            } catch (PDOException) {
                $conexion->rollBack();
            }

            $conexion = BaseDatos::closeConnection();
        }

        return $resultado;
    }

    private function createImage(string $url): string
    {
        $imagen = '';
        $conexion = BaseDatos::getConnection();
        $conexion->beginTransaction();
        try {

            $consulta = $conexion->prepare('INSERT INTO imagenes(url) VALUES(?)');

            $consulta->bindParam(1, $url);

            if ($consulta->execute()) {
                $imagen = $conexion->lastInsertId();
                $conexion->commit();
                return $imagen;
            }
        } catch (PDOException) {
            $conexion->rollBack();
        }
        $conexion = BaseDatos::closeConnection();
    }


    //Modificar la consulta para obtener los datos de las tablas de imagen y familia
    public function list_products(): array
    {

        $productos = array();

        $conexion = BaseDatos::getConnection();
        try {

            $consulta = $conexion->query('SELECT productos.id_producto, productos.nombre_producto,productos.descripcion,productos.precio,productos.imagen,productos.familia, imagenes.id_imagen,imagenes.url,familias.id_familia,familias.nombre_familia
            FROM productos
            INNER JOIN imagenes ON productos.imagen = imagenes.id_imagen
            INNER JOIN familias ON productos.familia = familias.id_familia');

            while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {

                //creacion objeto imagen

                $url_imagen = $registro->url;
                $id_imagen = $registro->id_imagen;

                $imagen = new Imagen($url_imagen, $id_imagen);
                //creacion objeto familia

                $nombre_familia = $registro->nombre_familia;
                $id_familia = $registro->id_familia;

                $familia = new Familia($nombre_familia, $id_familia);

                //creacion del objeto Producto
                $id_producto = $registro->id_producto;
                $nombre_producto = $registro->nombre_producto;
                $descripcion = $registro->descripcion;
                $precio = $registro->precio;

                $producto = new Producto($nombre_producto, $descripcion, $precio, $imagen, $familia, $id_producto);

                array_push($productos, $producto);
            }
        } catch (PDOException $exception) {
            echo 'Error' . $exception->getMessage();
        }

        $conexion = BaseDatos::closeConnection();
        return $productos;
    }

    public function list_by_id(int $id_producto): Producto
    {
        $conexion = BaseDatos::getConnection();

        try {
            $consulta = $conexion->prepare('SELECT productos.id_producto, productos.nombre_producto,productos.descripcion,productos.precio,productos.imagen,productos.familia, imagenes.id_imagen,imagenes.url,familias.id_familia,familias.nombre_familia
            FROM productos
            INNER JOIN imagenes ON productos.imagen = imagenes.id_imagen
            INNER JOIN familias ON productos.familia = familias.id_familia
                                        WHERE id_producto = :id');

            $consulta->bindParam(':id', $id_producto);
            $consulta->execute();

            $registro = $consulta->fetch(PDO::FETCH_OBJ);

            if ($registro) {

                //creacion objeto imagen

                $url_imagen = $registro->url;
                $id_imagen = $registro->id_imagen;

                $imagen = new Imagen($url_imagen, $id_imagen);
                //creacion objeto familia

                $nombre_familia = $registro->nombre_familia;
                $id_familia = $registro->id_familia;

                $familia = new Familia($nombre_familia, $id_familia);

                //creacion del objeto Producto
                $id_producto = $registro->id_producto;
                $nombre_producto = $registro->nombre_producto;
                $descripcion = $registro->descripcion;
                $precio = $registro->precio;

                $producto = new Producto($nombre_producto, $descripcion, $precio, $imagen, $familia, $id_producto);

                return $producto;
            }
        } catch (PDOException $exception) {
            echo 'Error al obtener el producto: ' . $exception->getMessage();
        }
        $conexion = BaseDatos::closeConnection();
    }


    public function delete(int $id_producto): bool
    {
        $resultado = false;

        $producto = $this->list_by_id($id_producto);
        $conexion = BaseDatos::getConnection();

        $conexion->beginTransaction();
        try {

            $consulta1 = 'DELETE FROM productos WHERE id_producto = :id_producto';
            $consulta2 = 'DELETE FROM imagenes WHERE id_imagen = :id_imagen';


            //eliminar el producto con el id del producto
            $eliminado = $conexion->prepare($consulta1);

            $eliminado->execute([':id_producto' => $producto->getId()]);

            $eliminarProducto = $eliminado->rowCount();

            //eliminar imagen a traves del id dentro del obj. Imagen en obj. Producto
            $eliminado = $conexion->prepare($consulta2);

            $eliminado->execute([':id_imagen' => $producto->getImagen()->getIdImagen()]);

            $eliminarImagen = $eliminado->rowCount();

            if ($eliminarProducto > 0 && $eliminarImagen > 0) {
                $conexion->commit();
                $rutaArchivo = dirname(__DIR__, 3) . '/public' . $producto->getImagen()->getIdImagen();

                unlink($rutaArchivo);
                $resultado = true;
            }

        } catch (PDOException) {
            $conexion->rollBack();
        }
        $conexion = BaseDatos::closeConnection();
        return $resultado;
    }    
}

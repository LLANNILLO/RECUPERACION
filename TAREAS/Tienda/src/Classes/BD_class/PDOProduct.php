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
        $resultado = "false";
        $conexion = BaseDatos::getConnection();

        try {

            $imagen = $this->createImage($producto->getImagen());

            if ($imagen instanceof Imagen) {

                $consulta = $conexion->prepare('INSERT INTO productos (nombre_producto,descripcion,precio,imagen,familia) VALUES(:nombre,:descripcion,:precio,:imagen,:familia)');

                $valores = [
                    ':nombre' => $producto->getNombreProducto(),
                    ':descripcion' => $producto->getDescripcion(),
                    ':precio' => $producto->getPrecio(),
                    ':imagen' => $imagen->get_id_imagen(),
                    ':familia' => $producto->getFamilia(),
                ];

                if ($consulta->execute($valores)) {
                    $resultado = true;
                }
            }
        } catch (PDOException $exception) {
            'Error: ' . $exception->getMessage();
        }

        $conexion = BaseDatos::closeConnection();

        return $resultado;
    }

    private function createImage(string $nombre)
    {

        $conexion = BaseDatos::getConnection();

        try {

            $consulta = $conexion->prepare('INSERT INTO imagenes(url) VALUES(?)');

            $consulta->bindParam(1, $nombre);

            if ($consulta->execute()) {
                $consulta = $conexion->prepare('SELECT id_imagen FROM imagenes where url = ?');
                $consulta->bindParam(1, $nombre);
                $consulta->execute();

                $registro = $consulta->fetch(PDO::FETCH_OBJ);

                if ($registro) {
                    $imagen = new Imagen(
                        $registro->id_imagen
                    );
                    return $imagen;
                }
            }
        } catch (PDOException $exception) {
            'Error: ' . $exception->getMessage();
        }
        $conexion = BaseDatos::closeConnection();
    }


    //Modificar la consulta para obtener los datos de las tablas de imagen y familia
    public function list_products(): array
    {

        $productos = array();

        $conexion = BaseDatos::getConnection();
        try {

            $consulta = $conexion->query('SELECT id_producto,nombre_producto,descripcion,precio, url AS imagen, nombre_familia AS familia
            FROM productos
            INNER JOIN imagenes ON imagen = id_imagen
            INNER JOIN familias ON familia = id_familia');

            while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
                $id = $registro->id_producto;
                $nombre = $registro->nombre_producto;
                $descripcion = $registro->descripcion;
                $precio = $registro->precio;
                $imagen = $registro->imagen;
                $familia = $registro->familia;

                $producto = new Producto($id, $nombre, $descripcion, $precio, $imagen, $familia);

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
            $consulta = $conexion->prepare('SELECT id_producto, nombre_producto, descripcion, precio, url AS imagen, nombre_familia AS familia
                                        FROM productos
                                        INNER JOIN imagenes ON imagen = id_imagen
                                        INNER JOIN familias ON familia = id_familia
                                        WHERE id_producto = :id');

            $consulta->bindParam(':id', $id_producto);
            $consulta->execute();

            $registro = $consulta->fetch(PDO::FETCH_OBJ);

            if ($registro) {
                $producto = new Producto(
                    $registro->id_producto,
                    $registro->nombre_producto,
                    $registro->descripcion,
                    $registro->precio,
                    $registro->imagen,
                    $registro->familia
                );
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
        $conexion = BaseDatos::getConnection();

        try {
            $conexion->beginTransaction();

            $consulta = $conexion->prepare('DELETE FROM productos where id_producto = :id_producto');

            $consulta->bindParam(':id_producto', $id_producto);

            if ($consulta->execute()) {
                $resultado = $conexion->commit();
            }
        } catch (PDOException $excepcion) {
            "Error al listar los productos: {$excepcion->getMessage()}";
            $resultado = $conexion->rollBack();
        }
        $conexion = BaseDatos::closeConnection();
        return $resultado;
    }

    public function getFamilies(): array
    {

        $familias = array();

        $conexion = BaseDatos::getConnection();
        try {

            $consulta = $conexion->query('SELECT id_familia,nombre_familia FROM familias');

            while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
                $id = $registro->id_familia;
                $nombre = $registro->nombre_familia;

                $familia = new Familia($id, $nombre);

                array_push($familias, $familia);
            }
        } catch (PDOException $exception) {
            echo 'Error' . $exception->getMessage();
        }

        $conexion = BaseDatos::closeConnection();
        return $familias;
    }
}

<?php

namespace Tienda\Classes\BD_class;

use PDOException;
use Tienda\Classes\Producto;
use Tienda\Interfaces\IntRepoProducto;

class PDOProducto implements IntRepoProducto
{

    public function crear(Producto $producto): bool
    {
        $conexion = ConexionBD::getConnection();

        try {

            /*
            Preparamos una consulta a la cual le pasaremos 
            los valores del objeto en el parametro
            */
            $consulta = $conexion->prepare('INSERT INTO productos(nombre_producto, descripcion, imagen, familia) VALUES(:nombre, :descripcion, :imagen, :familia)');

            // Obtenemos los valores del objeto Producto
            $nombre = $producto->getNombreProducto();
            $descripcion = $producto->getDescripcion();
            $imagen = $producto->getImagen();
            $familia = $producto->getFamilia();

            // Ejecutamos la consulta preparada
            $creacion_producto = $consulta->execute([
                ':nombre' => $nombre,
                ':descripcion' => $descripcion,
                ':imagen' => $imagen,
                ':familia' => $familia
            ]);

            // Cerramos la conexión a la base de datos
            ConexionBD::closeConnection();

            return $creacion_producto;
        } catch (PDOException $exception) {
            error_log("Error al crear producto: " . $exception->getMessage());
            return false;
        }
    }

    public function listar(): array
    {
    }

    public function listar_por_id(int $id_producto): Producto
    {
    }

    public function borrar(int $id_producto): bool
    {
    }
}

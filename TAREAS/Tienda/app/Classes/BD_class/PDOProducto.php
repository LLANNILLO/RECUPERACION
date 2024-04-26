<?php

namespace Tienda\Classes\BD_class;

use PDO;
use PDOException;
use Tienda\Classes\Producto;
use Tienda\Interfaces\IntRepoProducto;

class PDOProducto implements IntRepoProducto
{

    //Revisar la descripcion de la funcion crear
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


    //Modificar la consulta para obtener los datos de las tablas de imagen y familia
    public function listar(): array
    {
        //Crear el array donde se introducen todos los productos sin filtro
        $lista_productos = array();
        $conexion = ConexionBD::getConnection();

        try {

            $consulta = $conexion->query('SELECT id_producto, nombre_producto,descripcion,imagen,familia FROM productos');

            while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
                //añadir cada uno de los productos obtenidos
                array_push($lista_productos, $registro);
            }

            return $lista_productos;
        } catch (PDOException $excepcion) {
            "Error al listar los productos: {$excepcion->getMessage()}";
        }
    }

    public function listar_por_id(int $id_producto): Producto
    {
        $conexion = ConexionBD::getConnection();

        try {

            $consulta = $conexion->query('SELECT id_producto, nombre_producto,descripcion,imagen,familia FROM productos where id_producto = ' . $id_producto);

            //obtenemos el producto por su id
            /*
            Revisar la forma en la que se obtiene el producto
            */
            $producto = $consulta->fetch(PDO::FETCH_OBJ);

            /*
            
            Tratar la posibilidad de no obtener un producto

            */

            return $producto;
        } catch (PDOException $excepcion) {
            "Error al listar los productos: {$excepcion->getMessage()}";
        }
    }

    /* 

    Realizar la descripcion de las clases una vez modificada la BD
    Descomentar las funciones en Produ


    public function listar_por_familia(): array
    {
    }
    
    public function listar_por_desarrollador(): array
    {
    }
     */

    public function borrar(int $id_producto): bool
    {
        $resultado = false;
        $conexion = ConexionBD::getConnection();

        try {
            $conexion->beginTransaction();

            $consulta = $conexion->prepare('DELETE FROM productos where id_producto = :id_producto');

            $consulta->bindParam(':id_producto', $id_producto);

            if ($consulta->execute()) {
                $resultado = $conexion->commit();
            }
        } catch (PDOException $excepcion) {
            $resultado = $conexion->rollBack();
        }

        return $resultado;
    }
}

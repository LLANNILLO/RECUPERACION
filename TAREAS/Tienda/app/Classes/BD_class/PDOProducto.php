<?php

namespace Tienda\Classes\BD_class;

use PDOException;
use Tienda\Classes\Producto;
use Tienda\Interfaces\IntRepoProducto;

class PDOProducto implements IntRepoProducto{

    public function crear(Producto $producto): bool
    {
        $conexion = ConexionBD::getConnection();

        try{

            /*
            Preparamos una consulta a la cual le pasaremos 
            los valores del objeto en el parametro
            */
            $consulta = $conexion->prepare('INSERT INTO productos(nombre_producto,descripcion,imagen,familia) VALUES(?,?,?,?)'); 

            //Inicializamos una variable para guardar el resultado de la funcion
            $creacion_producto = $consulta->execute([
                $producto->getNombreProducto(),
                $producto->getDescripcion(),
                $producto->getImagen(),
                $producto->getFamilia()
            ]);

            return $creacion_producto;

        }catch(PDOException $exception){

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
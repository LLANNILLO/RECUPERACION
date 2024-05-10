<?php

namespace App\Classes\BDClasses;

use PDO;
use PDOException;
use App\Interfaces\IntRepoProducto;
use App\Classes\Producto;
use App\Classes\Familia;
use App\Classes\Imagen;

class PDOProducto implements IntRepoProducto{


    /* Funcion para crear un nuevo producto */
    public function crear(Producto $producto): bool
    {
        //variable para marcar resultado de la insercion
        $insercion = false;

        $conexion = ConexionBD::getConnection();
        $conexion->beginTransaction();

        try{
            //primero realizamos la insercion de la imagen
            $insertarImagen = $conexion->prepare('INSERT INTO imagenes(nombre,url) VALUES(:nombre,:url)');

            $insertarImagen->bindParam(':nombre',$producto->getImagen()->getNombreImagen());
            $insertarImagen->bindParam(':url',$producto->getImagen()->getURL());

            
            //si al ejecutar la insercion hemos tenido exito ejecutamos la insercion de Producto
            if($insertarImagen->execute()){
                //obtenemos el ultimo indice insertado que pertenece a la nueva imagen
                $imagenID = $conexion->lastInsertId();

                $insertarProducto = $conexion->prepare('INSERT INTO productos(nombre,descripcion,precio,familia,imagenId) VALUES(:nombre,:descripcion,:precio,:familia,:imagenID)');

                //añadimos los valores del nuevo producto a introducir
                $valores_producto = [
                    ':nombre' => $producto->getNombre(),
                    ':descripcion' => $producto->getDescripcion(),
                    ':precio' => $producto->getPrecio(),
                    ':familia' => $producto->getFamilia()->getCodigo(),
                    ':imagenID' => $imagenID,
                ];

                //si tenemos exito comitamos y devolvemos true
                if($insertarProducto->execute($valores_producto))
                {
                    $conexion->commit();
                    $insercion = true;
                }

            }

            //en cualquier caso en el que haya un supuesto error PDO, realizamos un rollBack
        }catch(PDOException){
            $conexion->rollBack();
        }

        return $insercion;

    }
    

    /* Funcion para listar todos los productos */
    public function listar():array
    {

        $productos = array();

        $conexion = ConexionBD::getConnection();

        try{

            $consulta_productos = $conexion->query('SELECT productos.id, productos.nombre, productos.descripcion,productos.precio,productos.familia,productos.imagenId,
            imagenes.id AS idImagen,imagenes.nombre as nombreImagen,imagenes.url as url,familias.codigo as codigoFamilia ,familias.nombre as nombreFamilia FROM productos INNER JOIN imagenes ON productos.imagenId = imagenes.id INNER JOIN familias ON productos.familia = familias.codigo');

            while($registro = $consulta_productos->fetch(PDO::FETCH_OBJ)){

                //creacion objeto imagen

                $id_imagen = $registro->idImagen;
                $nombre_imagen = $registro->nombreImagen;
                $url_imagen = $registro->url;

                $imagen = new Imagen($nombre_imagen,$url_imagen,$id_imagen);
                
                //creacion objeto familia

                $codigo_familia = $registro->codigoFamilia;
                $nombre_familia = $registro->nombreFamilia;
                $familia = new Familia($codigo_familia,$nombre_familia);

                //creacion objeto Producto
                $id = $registro->id;
                $nombre = $registro->nombre;
                $descripcion = $registro->descripcion;
                $precio = $registro->precio;

                $producto = new Producto($nombre,$descripcion,$precio,$imagen,$familia,$id);

                array_push($productos,$producto);

            }



        }catch(PDOException $e){
            echo 'Error al obtener los productos:' . $e->getMessage();
        }

        return $productos;

    }


    /* Funcion para listar producto por id */
    public function listarPorId(int $id_producto):Producto
    {
        $conexion = ConexionBD::getConnection();

        try{

            $consulta_productos = $conexion->query('SELECT productos.id, productos.nombre, productos.descripcion,productos.precio,productos.familia,productos.imagenId,
            imagenes.id AS idImagen,imagenes.nombre as nombreImagen,imagenes.url as url,familias.codigo as codigoFamilia ,familias.nombre as nombreFamilia 
            FROM productos
            INNER JOIN imagenes ON productos.imagenId = imagenes.id
            INNER JOIN familias ON productos.familia = familias.codigo
            WHERE productos.id ='.$id_producto);

            $registro = $consulta_productos->fetch(PDO::FETCH_OBJ);

            if($registro)
            {
                //creacion objeto imagen

                $id_imagen = $registro->idImagen;
                $nombre_imagen = $registro->nombreImagen;
                $url_imagen = $registro->url;

                $imagen = new Imagen($nombre_imagen,$url_imagen,$id_imagen);
                
                //creacion objeto familia

                $codigo_familia = $registro->codigoFamilia;
                $nombre_familia = $registro->nombreFamilia;
                $familia = new Familia($codigo_familia,$nombre_familia);

                //creacion objeto Producto

                $id = $registro->id;
                $nombre = $registro->nombre;
                $descripcion = $registro->descripcion;
                $precio = $registro->precio;

                $producto = new Producto($nombre,$descripcion,$precio,$imagen,$familia,$id);

                return $producto;

            }

        }catch(PDOException $e){
            echo 'Error al obtener los productos:' . $e->getMessage();
        }

        
    }

    /* Funcion para eliminar un producto en especifico */
    public function borrar(int $id_producto):bool
    {
        //variable para marcar el borrado de la insercion
        $borrado =false;

        $conexion = ConexionBD::getConnection();
        $conexion->beginTransaction();

        try{    
            $producto = $this->listarPorId($id_producto);

            $consulta1 =$conexion->prepare('DELETE FROM productos WHERE id=:id');
            $consulta1->bindParam(':id',$producto->getId());
            $registro1 = $consulta1->execute();
            
            $consulta2 = $conexion->prepare('DELETE FROM imagenes WHERE id=:id');
            $consulta2->bindParam(':id',$producto->getImagen()->getIdImagen());
            $registro2 = $consulta2->execute();

            if($registro1 && $registro2){
                $borrado = true;
                /* Realizar el unlink cuando se vaya a realizar el borrado del producto */
            }

        }catch(PDOException){
            $conexion->rollBack();
        }
        return $borrado;
    }

}

?>
<?php

namespace App\Classes;

use App\Interfaces\IntRepoProducto;

class Produ{

    private IntRepoProducto $repositorio;


    public function __construct(IntRepoProducto $repositorio)
    {
        $this->repositorio = $repositorio;
    }

     /* Funcion para crear un nuevo producto */
     public function crear(Producto $producto): bool
     {
        return $this->repositorio->crear($producto);
     }
     
 
     /* Funcion para listar todos los productos */
     public function listar():array
     {
        return $this->repositorio->listar();
     }
 
 
     /* Funcion para listar producto por id */
     public function listarPorId(int $id_producto):Producto
     {
        return $this->repositorio->listarPorId($id_producto);
     }
 
     /* Funcion para eliminar un producto en especifico */
     public function borrar(int $id_producto):bool
     {
        return $this->repositorio->borrar($id_producto);
     }
 

}

?>
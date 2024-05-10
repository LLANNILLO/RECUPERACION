<?php

    namespace App\Interfaces;


    use App\Classes\Producto;
    interface IntRepoProducto
    {
        public function crear(Producto $producto): bool;
        public function listar():array;
        public function listarPorId(int $id_producto):Producto;
        public function borrar(int $id_producto):bool;
    }

?>
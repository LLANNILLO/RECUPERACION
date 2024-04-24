<?php

namespace Tienda\Interfaces;

use Tienda\Classes\Producto;

interface IntRepoProducto{
    public function crear(Producto $producto) : bool;
    public function listar() : array;
    public function listar_por_id(int $id_producto): Producto;
    public function borrar(int $id_producto) : bool;
}
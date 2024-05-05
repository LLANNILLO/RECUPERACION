<?php

namespace Tienda\Interfaces;

use Tienda\Classes\Producto;

interface IntRepoProducto
{
    public function create(Producto $producto): bool;
    public function list_products(): array;
    public function list_by_id(int $id_producto): Producto;
    public function getFamilies(): array;
    public function delete(int $id_producto): bool;
}

<?php

use Tienda\Interfaces\IntRepoProducto;

class CestaCompra
{

    protected array $productos;

    public function __construct()
    {
        $this->productos = [];
    }


    //Realizar funcion cuando tengamos desarrolladas las clases para listar_por_id
    public function nuevo_articulo(int $id)
    {
        /* $producto = ;
        array_push($this->getProductos(), $id); */
    }

    public function getProductos(): array
    {
        return $this->productos;
    }

    //Realizar funcion cuando se haya finalizado la creacion de la funcion nuevo_articulo
    public function getCoste()
    {
    }

    public function esta_vacia(): bool
    {
        return empty($this->productos);
    }
}

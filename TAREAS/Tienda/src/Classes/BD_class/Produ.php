<?php

namespace Tienda\Classes\BD_class;

use Tienda\Interfaces\IntRepoProducto;
use Tienda\Classes\Producto;

class Produ
{
    private IntRepoProducto $solidProducto;


    /*
    Constructor del Produ. Principio Solid open/close
    */
    public function __construct(IntRepoProducto $solidProducto)
    {
        $this->solidProducto = $solidProducto;
    }

    public function create(Producto $producto): bool
    {
        return $this->solidProducto->create($producto);
    }

    public function list_products(): array
    {
        return $this->solidProducto->list_products();
    }

    public function list_by_id(int $id): Producto
    {
        return $this->solidProducto->list_by_id($id);
    }

    public function getFamilies(): array
    {
        return $this->solidProducto->getFamilies();
    }

    public function delete(int $id): bool
    {
        return $this->solidProducto->delete($id);
    }
}

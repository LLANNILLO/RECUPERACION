<?php

namespace Tienda\Classes\BD_class;

use Tienda\Interfaces\IntRepoProducto;
use Tienda\Classes\Producto;

class Produ
{
    private $repositorioProducto;

    public function __construct(IntRepoProducto $repositorioProducto)
    {
        $this->repositorioProducto = $repositorioProducto;
    }

    public function crearProducto(Producto $producto): bool
    {
        return $this->repositorioProducto->crear($producto);
    }

    public function listarProductos(): array
    {
        return $this->repositorioProducto->listar();
    }

    public function obtenerProductoPorId(int $id): Producto
    {
        return $this->repositorioProducto->listar_por_id($id);
    }

    public function borrarProducto(int $id): bool
    {
        return $this->repositorioProducto->borrar($id);
    }
}

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

    public function crear(Producto $producto): bool
    {
        return $this->solidProducto->crear($producto);
    }

    public function listar(): array
    {
        return $this->solidProducto->listar();
    }

    public function listar_por_id(int $id): Producto
    {
        return $this->solidProducto->listar_por_id($id);
    }
    
    /* 
    Realizar una vez confirmados los cambios en la BD
    public function obtenerProductoPorFamilia(int $id): Producto
    {
        return $this->solidProducto->listar_por_familia($id);
    }
    
    public function obtenerProductoPorDesarrollador(): array
    {
        return $this->solidProducto->listar_por_desarrollador(): array;
    }
     */

    public function borrar(int $id): bool
    {
        return $this->solidProducto->borrar($id);
    }
}

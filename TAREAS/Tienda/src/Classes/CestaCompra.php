<?php

namespace Tienda\Classes;

use Tienda\Classes\BD_class\PDOProduct;
use Tienda\Classes\BD_class\Produ;

class CestaCompra
{

    private array $productos;

    public function __construct()
    {
        $this->productos = [];
    }


    
    public function nuevo_articulo(int $id)
    {
        $produ = new Produ(new PDOProduct);
        $producto = $produ->list_by_id($id);

        array_push($productos,$producto);
    }

    public function getProductos(): array
    {
        return $this->productos;
    }

    
    public function getCoste()
    {

        $coste = 0;

        foreach ($this->getProductos() as $producto) {
            
            $coste += $producto->getPrecio();

        }

        return $coste;
    }

    public function esta_vacia(): bool
    {
        return empty($this->productos);
    }
}
